---
layout: post
title: Git Explode
categories: git restore backup reset hard
excerpt_separator: <!--more--> 
---

A story of lost and recovered code for a project I just created.

<!--more-->

## Boom!

While upgrading [Gradient](https://losttech.software/gradient.html) to TensorFlow 1.15,
I faced the need for a way to create a
[symbolic directory link](https://en.wikipedia.org/wiki/Symbolic_link) with C#.
Quick search on [NuGet](https://nuget.org) only gave 3 packages, none of which were
cross-platform to a complete disappointment. So I decided to make my own.

Quick 2 hours later, I've got a local Visual Studio solution with implementations
for Windows and Unix-like OSes. It was time to publish it on GitHub. So I did two things:

1. Created a new repository on GitHub itself, with a README and LICENSE files
1. In Visual Studio, hit "Add to Source Control" and selected Git

Now I needed to merge the two, so I hit publish in Visual Studio, and pointed it to GitHub.
That set the `origin` remote to my GitHub repo, but did not publish local changes,
as the local `master` branch and the remote one did not have a common ancestor.

"OK", I though, "let's fetch, make local `master` point to `origin/master`,
then commit local files". So I did

```PowerShell
git fetch
git reset --hard origin/master
```

![Explosion](/images/Explosion.jpg)

Back in Visual Studio all the source code is gone! So are the project files!

```PowerShell
> git status
HEAD detached from c988afd
nothing to commit, working tree clean
```

## Denial

If you ever did `git reset` without thinking before, and recovered, you know a "magical"
command `git reflog`, which shows recent commits you worked with (to be precise it
shows which commits your repository was checked out at, so if you did
`git checkout AAA` then `git checkout BBB` then `git reset --hard CCC` it will show `AAA;BBB;CCC`,
and you can return to any of them using `git checkout AAA`, for example).

For example:

```git
c988afd HEAD@{4}: checkout: moving from master to c988afd
ea279fb HEAD@{5}: reset: moving to origin/master
c988afd HEAD@{6}: commit (initial): Add .gitignore and .gitattributes.
```

Unfortunately, `git checkout c988afd` did not restore the files, as I expected.

![Sad man](/images/Sad.jpg)

## Anger

But why? The message for the initial commit gave a hint: I never checked in those files
before `git reset`, but they were staged. And, turns out, when you switch to a commit tree
with a different initial commit, `git reset` completely drops all the staged changes!

And Windows integrated backup - File History - by that time did not have a chance to make copies!

## Bargaining

A quick search gave back
[Recover from git reset --hard](https://stackoverflow.com/questions/5788037/recover-from-git-reset-hard)
on StackOverflow.

So I did `git fsck --lost-found`, which created a folder `.git\lost-found\other`
with a single file in it, containing just its own name: `97cc6b041928db3f3d282bbd30f5d1e276e47b19`.

How that would help was not immediately clear:

```PowerShell
> git show 97cc6b041928db3f3d282bbd30f5d1e276e47b19
tree 97cc6b041928db3f3d282bbd30f5d1e276e47b19

.gitattributes
.gitignore
IO.Links.sln
play/
src/

> git show 97cc6b041928db3f3d282bbd30f5d1e276e47b19 -- IO.Links.sln
tree 97cc6b041928db3f3d282bbd30f5d1e276e47b19

.gitattributes
.gitignore
IO.Links.sln
play/
src/

❯ git checkout 97cc6b041928db3f3d282bbd30f5d1e276e47b19
fatal: Cannot switch branch to a non-commit '97cc6b041928db3f3d282bbd30f5d1e276e47b19'
```

What is a git tree? I did not know.

## Depression

The first search pointed to
[Git worktree](https://www.git-scm.com/docs/git-worktree), but

```PowerShell
❯ git worktree move 97cc6b041928db3f3d282bbd30f5d1e276e47b19 "..\recover"
fatal: '97cc6b041928db3f3d282bbd30f5d1e276e47b19' is not a working tree
```

So a *tree* is not a *working tree*, OK.

Sigh.

## Acceptable

Searching `git restore tree -"working"`...

[Bingo!](https://git-scm.com/docs/git-ls-tree) (ls-tree)

```PowerShell
❯ git ls-tree 97cc6b041928db3f3d282bbd30f5d1e276e47b19
100644 blob 1ff0c423042b46cb1d617b81efb715defbe8054d    .gitattributes
100644 blob 4ce6fddec962ff3b86038d9939b6be5dfc1e6351    .gitignore
100644 blob c77dfcf2c002aae9fefa37273e9a82e290324ed1    IO.Links.sln
040000 tree 7d34ff63a2a130c9e8b7946e535ce83755db1ac7    play
040000 tree 91aa24f2b82c94d1ec4943b3747cd4d46a14db21    src
```

So there are blobs!

![Light in at the tunnel end](/images/EndOfTunnel.jpg)

But no more `*tree*` commands.

More searching --> [Git Restore](https://git-scm.com/docs/git-restore)

```PowerShell
> git restore -s 97cc6b041928db3f3d282bbd30f5d1e276e47b19 -S -W
git: 'restore' is not a git command. See 'git --help'.

The most similar command is
        remote
```

o_O but it is right there, in docs!

```PowerShell
> git --version
git version 2.17.1
```

Ah. Docs are for version 2.23.0

```PowerShell
choco install git
git --version
git version 2.23.0.windows.1
```

Finally:
```
> git restore -s 97cc6b041928db3f3d282bbd30f5d1e276e47b19 -S -W -- .
> git status
HEAD detached at c988afd
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   IO.Links.sln
        new file:   play/Program.cs
        new file:   play/play.csproj
        new file:   src/IFileSystemLinks.cs
        new file:   src/Links.csproj
        new file:   src/Symlink.cs
        new file:   src/UnixLinks.cs
        new file:   src/WindowsLinks.cs
```

<iframe src="https://giphy.com/embed/VbrGKu56dceVa" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

## Conclusion

**1AM**

```PowerShell
> git fsck --lost-found
> ls .\.git\lost-found\other
> git restore -s HASH_FROM_OTHER -S -W -- .
```

Project is restored and out on GitHub and NuGet: [IO.Links](https://github.com/losttech/IO.Links)
\- cross-platform symlink and hardlink management for .NET.
(really untested symlink creation only at the time of the post).
