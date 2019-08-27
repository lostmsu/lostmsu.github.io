---
layout: post
title: The Mercurial Archive
---

How often do you look at the code you wrote ~10 years ago? Bitbucket announced [Sunsetting Mercurial Support](https://news.ycombinator.com/item?id=20745393), including complete removal of all repositories using that source control system. So naturally, as one of the unfortunate souls who initially picked HG over Git, I checked out what I had there.

Some projects successfully migrated to GitHub or VSO, but there were still quite a few, which I did not touch in years. Several of them the naive me from 2010 even considered to have commercial potential, so they were private repositories. Soon, of course, I will share them all (but won't tell you which is which).

# [Alternate F#](https://bitbucket.org/lost/alternate-f/)
Where you can find my attempt to add support for [typeclasses and higher-kinded polymorphism](https://en.wikipedia.org/wiki/Type_class) to F#, which even worked at least in part, if you believe [this commit message](https://bitbucket.org/lost/alternate-f/commits/403515e81a0c075a6eec9b7e9cb233d702d46c03).

Attempts to do it were actually preceded by a pure library implementation, which is briefly discussed [here](https://fpish.net/topic/None/59738).

In the experiment, I wanted to get the feature in with minimal changes to the compiler to make a proof of concept, as the F# compiler source is very hard to follow. So the syntax was suboptimal, however quite readable (from the [abovementioned commit](https://bitbucket.org/lost/alternate-f/commits/403515e81a0c075a6eec9b7e9cb233d702d46c03)):

```fsharp
 /// This is 2D vector, that can print itself via Show<'a>.Print
type Vector2D<'a>(x: 'a, y: 'a) =
    typeclass show = Show<'a>
    typeclass t = Repeatable<'a>

    member this.Times(n) =
        Vector2D(x.Times(n), Times(y, n))
    
    member this.Print() =
         Print x
```

Note, that GitHub's code highlighter does not recognize `typecalss` as a keyword. It is because F# compiler still does not have that feature.

Similarly to Go's interfaces, you'd never have to explicitly state, that `'a` actually implements `Show`. The implementation would be wired at runtime, and for the compile time a special diagnostic would actually check, that `'a` you passed has all the necessary members.

Unfortunately, I stopped using F#, because the tooling around it is quite far behind what ReSharper and now even Roslyn do for C#. The last commit to that repository was on April 1st, 2012.

# [CodeBlock](https://github.com/lostmsu/CodeBlock)
This project actually found its home on GitHub, because some day in 2014 a person pinged me about using [LLVM binding for C#](https://github.com/lostmsu/LLVM.NET), which I had developed for it, so I migrated both.

CodeBlock was my [LLVM](https://llvm.org) playground. The project was supposed to be an implementation of .NET runtime, written mostly in .NET itself rather than C, using LLVM as a backend. Quite similar to [CoreCLR](https://github.com/dotnet/coreclr) in nature. I wrote most of it during my student years.

In this example `assertTest` would compile & execute code in between `<@` and `@>`, e.g. `FactorialMethod`:

```fsharp
static member FactorialMethod(n) =
    let mutable result = 1
    let mutable i = 2
    while i <= n do
        result <- result * i
        i <- i + 1
    result

[<TestMethod>]
member this.FactorialNeg() =
    [ -2; -1; Int32.MinValue ]
    |> List.iter(fun n -> assertTest <@ PrimitiveOps.FactorialMethod(n) @>)

[<TestMethod>]
member this.FactorialZero() =
    assertTest <@ PrimitiveOps.FactorialMethod(0) @>
```

It was using Mono.Cecil to read method bodies bytecode that .NET uses (similar to Java bytecode), and then use LLVM 3's JIT APIs to convert it to native x64 or x86 code before execution.

As far as I remember (and judging by other contents of [the unit tests folder](https://github.com/lostmsu/CodeBlock/tree/master/CodeBlock.UnitTests)), it went as far as to have most of unmanaged CLR features working, including pointers and `struct` generic types. Garbage collector would be the next step and some of the ["object model"](https://github.com/lostmsu/CodeBlock/tree/master/CodeBlock.BasicObjectModel) was already defined. The last meaningful commit to that repository was on August 7th, 2013.

# [CoreCloud](https://github.com/lostmsu/CoreCloud)
I am sure some readers here have seen the infamous show "Silicon Valley". In 2017 season it was revealed, that Pied Piper is to build what Peter Gregory planned all along: a truly decentralized Internet. Well, CoreCloud was in some sense a 2010 take on that dream with trustless compute, and P2P IPv6 which was surely supposed to take over the world by 2015.

The goal of the project was to make it super simple to run decentralized trustless computations in .NET (which, by the way, had all the necessary components back then). Here is how it worked: first, you would declare a class, whose code you want to run on many machines, and its interface like this:

```csharp
public class PrimeTest: IPrimeTest
{
    public bool[] Test(int start, int count)
    {
        var nums = Enumerable.Range(start, count);
        return nums.Select(IsPrime).ToArray();
    }

    internal bool IsPrime(int num)
    {
        if (num < 2) return false;

        for (int i = 2; i <= Math.Sqrt(num); i++)
        {
            if (num % i == 0) return false;
        }

        return true;
    }
}

[ServiceContract]
public interface IPrimeTest
{
    [OperationContract]
    bool[] Test(int start, int count);
}
```

Then you would just create an instance of this class, and call its `Test` method in parallel like this:

```csharp
const int ChunkSize = 1024;
var primeTest = ParallelObject<IPrimeTest>.Create<PrimeTest>();
var results = new ConcurrentDictionary<long, bool[]>();
Parallel.For(0, 1024, chunk
    => results[chunk] = primeTest.Test(chunk*ChunkSize, ChunkSize));
```

Behind the scenes CoreCloud would query a [peer-to-peer network](https://docs.microsoft.com/en-us/dotnet/api/system.net.peertopeer) of people running CoreCloud on their machines, pick some of them, transmit the code of `PrimeTest`, and ask them to instantiate it for you in a sandbox (now that .NET feature is [deprecated](https://docs.microsoft.com/en-us/dotnet/framework/misc/how-to-run-partially-trusted-code-in-a-sandbox) 😢). `primeTest` here will actually be a proxy generated by CoreCloud on the fly for `IPrimeTest`. Every call to `Test` in the `Parallel.For` loop CoreCloud would pick one of the remote instances of `PrimeTest` it created, and forward it there.

The project was to be demoed on a graphics engine, which would use nearby computers to deliver real-time full HD ray-tracing-based rendering in a very similar manner with `Engine.TraceRays` replacing `PrimeTest.Test` in the example above. The last commit to the original Mercurial repository was on May 8th, 2011.

# To be continued...