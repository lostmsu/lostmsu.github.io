---
layout: post
title: Indenting contents of namespace in C#
tags: [roslyn]
---

C# occupies a lot of horizontal space. Pretty much every file
has a `namespace`, which by default adds 4 characters, and
then another 4 characters from the actual `class` you are
trying to define.


Take a look at this GitHub screenshot on my laptop for
a simple pull request:
[![C# diff wrapping on GitHub](/images/NamespaceIndentation.png)](https://github.com/dotnet/roslyn/pull/38755/files#diff-4acadf01a310c77a34de6ba7c5073347)

The getters and setters for the property had to be wrapped,
because the lines are too long.

Since I had some spare time during today's ML developers
summit in Google Kirland, I decided to fix it. And it ended up
pretty easy to do.

After cloning Roslyn and firing up
Roslyn.sln in Visual Studio, I quickly found a property named
`IndentSwitch-bla-bla` in the code. (I knew what to search
for, as there's an option already for indenting `switch`
contents in Visual Studio).

Searching for references to this property gave back only
about 10 places, of which only one was an actual
implementation in the Roslyn formatting engine. As it
turned out, I only needed to add a simple `if` branch
that skips indent procedure for a certain AST node type:
`NamespaceDeclarationSyntax` if the option is turned off.
The rest of the changes are unit tests, and view model 
construction to actually show a setting in Visual Studio.

All that took under an hour. Check out the result: [pull request](https://github.com/dotnet/roslyn/pull/38755).

Once it is released with Visual Studio, I am planning to
switch that setting off on my machines and in `.editorconfig`.