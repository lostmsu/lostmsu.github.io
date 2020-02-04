---
layout: post
title: Use Microsoft Store to trick unsuspecting users to give you all their data
categories: [ Windows Store, security, privacy, Microsoft, Facebook ]
excerpt_separator: <!--more-->
---
Privacy is hard these days. Tech companies want to know everything about you to
show more and more advertisement, or to sell the data to the third parties, who
then resell to the next ones, then further, until a a toy vendor knows more
about your kids, than you do.

![Your Data: Give it to us meme with Lt. Commander Data](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.makeameme.org%2Fcreated%2FYour-data-Give.jpg&f=1&nofb=1)

The app permission systems, that became popular with Android and iOS are a
godsend. Now your bookreader app does not know your location, who your friends
are, and can't upload your private photos to their servers as a part of
"analytics telemetry".

Microsoft introduced a similar system with Windows 8 for the apps installed
from the Microsoft Store, and expanded it in Windows 10 to any app packaged
in a special way. So when you install an app from Store, you can be reasonably
sure, that it does only what it is supposed to, right? Not so fast!

<!--more-->

# Don't blame the Messenger
Facebook Messenger is famous for trying to obtain data. It used to insist on
uploading your entire contact list to Facebook. Same goes for call and sms
history. Text anyone in your phone? Here, can you spot the fine print:

![Text anyone in your phone? Turn on!](https://about.fb.com/wp-content/uploads/2018/03/opt-in_screen-1.png?resize=576%2C1024)

I am sure it is used only for your convenience (khe-khe, viral marketing, khe-khe).

Fortunately, even if somehow this option got overlooked, and you installed the
app from Microsoft Store in 2018, you could ensure it does not have access to
your data.

![Contacts permission for Messenger in Windows Setting](/images/ContactsAccess.png)

Similar permissions exist for call history, pictures, location, etc

No viral marketing or personalized ads for you, Mark!

![Mark Zuckerberg is sad](https://fossbytes.com/wp-content/uploads/2016/02/mark-zuckerberg-sad-shuts-down-free-basics.jpg)

# Microsoft to the rescue with automatic updates
That was all great until about 8 months ago. That is when I noticed, that
one of the apps installed from the Store specifically for not asking
any permissions whatsoever started showing a tray icon.

Tray icons are "classic" Windows APIs, that are not yet available to properly
sandboxed Store apps. To show one the app had to obtain unrestricted permissions
on your machine, same as the apps installed from a 3rd party.

![Windows XP Tray Icon](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-Pv29dGQwIMI%2FUFcMD6hgcyI%2FAAAAAAAAFHI%2Fg_z4acYUqT8%2Fs1600%2FttUntitled-2.jpg&f=1&nofb=1)

So I went to the app's page on Microsoft Store, and saw, that the new version has
this permission. Which would be fine, if the Store would ask me if I want to give
that app unrestricted permissions before updating it. But it did not.

Back then I reported the problem to Microsoft, thinking that they just probably
overlooked it, and it is a bug, that will soon be fixed.

# 8 months later Microsoft still does not care enough
Coming back to Messenger: that app is notoriously buggy and did not work
on my machine for a while, forcing to use the web version. I've been
periodically launching it to see if Facebook fixed it, and today it finally
started with a new login dialog. Which, of course, immediately made
my inner paranoid very suspicious.

So I opened Messenger's page on Windows Store, and saw this:
![Facebook Messenger has access to all your data](/images/AccessAll.png)

Looks like Windows Store silently updated it, expanding the permissions
to give Facebook access to all my data without consulting with me first.
Meaning the issue I reported nearly a year ago is still not fixed.

So, to conclude
# 5 steps you need to take to own user's machine
1. Create a sandboxed app, and publish it to Microsoft Store. Don't ask for
any permissions (maybe a few). Privacy-conscious users will love it!
2. Find an excuse to get Microsoft approve unrestricted access for your app.
Tray icon might do, or someting equally innocent.
3. After 2 is approved, add code siphoning data out/taking control when you need
it (formal update submission process rarely checks for it), but keep the core
functionality.
4. ...
5. PROFIT

All users, that installed your app before step 2 thinking it is 100% safe for them to use will be automatically updated to the latest version, and Store will give
it a green ticket to user's data.

P.S. The sad irony is I though it was a good idea to distribute a cryptocurrency
mining app through the Store, as it would be a safe source for users. Until
Microsoft [banned them for "security"](2020-01-15-Microsoft-bans-cryptocurrency-miners-from-Store).