---
title: "Android Contacts, the Social Graph Collider"
layout: post
---

*A guest post by [Rhodey](https://twitter.com/notrhodey). Winter Break of Code, Day Seven*

<img src="/blog/images/wboc-rhodey-surfn.jpg" alt="Rhodey surfing" />

Spring Break of Code 2013 I cut open my foot and hand while surfing, both wounds
easily warranted stitches. Winter Break of Code 2014 I banged the top of my foot
surfing over some coral, the cuts were sealed within minutes. Spring Break of
Code 2013 I struggled with the Android SDK, while Winter Break of Code 2014 I
caught myself taking a few too many short-cuts. On day zero nothing is easy, but
over time you improve, spilling a little less blood every time.  

XXXXX

#### A Hint of Secure Sync

Early this Fall I started work on a new Open Whisper Systems project which at
this time we're referring to as Secure Sync. Secure Sync aims to be a drop-in
replacement for the default contact and calendar syncing and backup solution
provided by Google by default on Android. Contacts and Calendars will leave
your Android device encrypted via a PBKDF, be stored with any [CardDAV](https://en.wikipedia.org/wiki/CardDAV)
and [CalDAV](https://en.wikipedia.org/wiki/CalDAV) compliant server and only
be decrypted when they're back on your device. We will be providing a server
but the idea is that you could host your own or even use Google as long as
their [CardDAV and CalDAV APIs](https://developers.google.com/google-apps/calendar/caldav/v2/guide)
stay open.  

Adopting CalDAV and CardDAV (admittedly with some hacks) means that we will be
able to support existing *desktop* contact and calendar clients with the addition
of a simple proxy service, but I am getting far ahead of myself. While none of
our server or client design is anything revolutionary or terribly interesting, I
did happen across a prime example of the dangers inherit in social graphs, The
Android Contacts Provider, The Social Graph Collider.  

#### The Social Graph Collider

<img src="http://developer.android.com/images/providers/contacts_structure.png" alt="Android developer documentation"/>

>  The three tables are commonly referred to by the names of their contract classes. The classes define constants for content URIs, column names, and column values used by the tables:  
> - ContactsContract.Contacts table
>    - Rows representing different people, based on aggregations of raw contact rows. 
> - ContactsContract.RawContacts table
>     - Rows containing a summary of a person's data, specific to a user account and type. 
> - ContactsContract.Data table
>     - Rows containing the details for raw contact, such as email addresses or phone numbers.

-- [developer.android.com](http://developer.android.com/guide/topics/providers/contacts-provider.html): Contacts Provider.
  
What the above block quote doesn't make immediately obvious is that each entry
in the RawContacts and Data tables are associated with a single *Account* and
*Account Type*. Let's list out three hypothetical a records in these tables:  

1. Rhodey's Friend Chloe, +15555555555, account notrhodey@gmail.com, account type *com.google*

2. Rhodey's Friend Chloe, @rhodeys_friend_chloe, account @notrhodey, account type *com.twitter*

3. Rhodey's Friend Chloe, 112390023942, account 112398299433, account type *com.facebook*

The account and account types tell us that the first contact was sourced from
my hypothetical Gmail, the second from my Twitter and the third from my
non-existent Facebook. What's interesting is that as things stand today you
will **never** see those last two records (Facebook and Twitter) because
*android.permission.READ_CONTACTS* grants read permission on all records
regardless of account or account type, and if you're a [SyncAdapter](http://developer.android.com/training/sync-adapters/creating-sync-adapter.html)
*android.permission.WRITE_CONTACTS* grants write permission on all records
regardless of account of account type.  

Now the decision for Twitter, Facebook and others becomes: **share the user's
social graph with any app that asks** *or* **don't color the user's contacts app
with social graph data**. I have yet to find an social network that chose to
integrate deeply with the Android contact app and personally I'm glad.  

#### What We're Missing Out On

Back in ~2011 the API for decorating Android's contact app was written such
that apps could display information to the user without sharing it with
other local Android apps. [Facebook](http://www.engadget.com/2011/02/22/google-disables-contact-sync-in-facebook-for-android-only-nexus/)
took advantage of this feature real nicely by patching in the profile
pictures of friends along with status updates, etc. At one point Twitter
was providing some contact syncing functionality but having never used it
and with lack of details I can only say I would enjoy the same from them.
Bringing the subject back to Open Whisper Systems, we could decorate the
Android contacts app to identify contacts with registered TextSecure or
RedPhone compliant clients ([woot! CyanogenMod](https://whispersystems.org/blog/cyanogen-integration/))
and provide a small button or something to invite those who are without
clients. All of this is possible, but none of it would be responsible.  

If Twitter and Open Whisper Systems were to integrate their apps with the
Android contacts app, any app with *READ_CONTACTS* permission would have
access to the map of OWS users to Twitter handles. Add Facebook into the
loop and you have legal names associated with Twitter handles associated with
the phone numbers of OWS users.
  
The situation with Android's [Calendar Provider](https://developer.android.com/guide/topics/providers/calendar-provider.html)
is very similar and I think we're missing out on some cool things there
too.  

#### Don't Be Fooled

At first glance Android's lack of access control policy seems like a
win for open access and thus a win for users, but the data being
shared with other apps is already available to the user, **in fact it
is the user**. Unfortunately *Open Access*, much like *Network
Neutrality* is one of these phrases that can be thrown behind a misguided
agenda to trip up an unfamiliar, unsuspecting userbase. Don't be fooled,
the Android Contacts Provider is wack.

[Rhodey Orbits](https://twitter.com/notrhodey)

Kauai, Hawaii

13 January 2014
