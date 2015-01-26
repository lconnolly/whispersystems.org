---
layout: post
title: "The New TextSecure: Privacy Beyond SMS"
author: "Moxie Marlinspike"
author-url: "https://twitter.com/moxie"
---

Today's [release of TextSecure](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms) is the final
step in the transition from a private SMS app to a private asynchronous IM app that does not depend on SMS/MMS.

Using the lessons we've learned from the SMS environment over the past four years, we've developed an open protocol
for asynchronous chat that enables private communication instantly with friends, private groups for realtime collaboration, 
and the ability to quickly and seamlessly share media privately -- all without depending on SMS.

<!--more-->

## High Privacy, Low Friction

At Open WhisperSystems, our objective is to advance the state of the art for secure communication, but also to reduce the
friction required for ordinary people to make use of it. We want everyone to have access to advanced secure communication
methods that are as easy and reliable to use as making a normal phone call or sending a normal text message.

With an [advanced ratchet](/blog/advanced-ratcheting/), [enhanced deniability](/blog/simplifying-otr-deniability), 
and an [asynchronous orientation](/blog/asynchronous-security), we believe
the [TextSecure V2 protocol](https://github.com/WhisperSystems/TextSecure/wiki/ProtocolV2) represents a significant step
forward in what's possible for the asynchronous chat environment today.

We've also made a substantial effort to simplify the typically difficult user experience that comes with end to end
encrypted communication. The new TextSecure protocol doesn't require a round trip key exchange process, eliminates
half-open sessions, and is lightning fast -- all without compromising forward secrecy or deniability. This creates an
experience that takes encryption entirely out of the user's way.  A user simply sends a message, and it's encrypted
end to end, every time. Unlike other IM services, there is no distinction between "private" chats and "normal" chats.
Private is normal.

<img src="/blog/images/textsecure2-conversation.png" class="nice" alt="Screenshot of a TextSecure conversation over push messaging"/>

## Private Group Chat

The new TextSecure also introduces support for private group chat.  Users can now create groups with a title
and avatar icon, add their friends, join or leave groups, and exchange messages/media, all with the same end-to-end
encryption properties pairwise TextSecure chats provide.

In keeping with our efforts to develop the most privacy preserving protocols possible, the 
[server](https://github.com/whispersystems/TextSecure-Server/) does not have access
to group metadata such as lists of group members, the group title, or the group avatar icon.

<img src="/blog/images/textsecure2-group.png" class="nice" alt="Screenshot of creating a group chat TextSecure"/>

## An iMessage Experience

The new TextSecure for Android allows for two possible configurations.  By default, TextSecure is configured
as an "integrated" chat app with an "iMessage" like experience.  TextSecure acts as a normal SMS/MMS app when communicating
with non-TextSecure users, but will send messages encrypted over the data channel when the recipient is also a TextSecure user.

Like iMessage, TextSecure uses a color scheme to indicate which transport a message was delivered with.  If the data channel
is unavailable, messages can fall back to the SMS transport, and secure sessions can transparently migrate back and forth
between the two transports.

<img src="/blog/images/textsecure2-imessage.png" class="nice" alt="Screenshot of TextSecure conversation over SMS and push messaging" />

## A WhatsApp Experience

Alternately, users can configure TextSecure to function similar to WhatsApp, where messages are only ever sent or received
over the data channel.  In this configuration, communication is restricted exclusively to secure communication with other
TextSecure users.

<img src="/blog/images/textsecure2-whatsapp.png" class="nice" alt="Screenshot of TextSecure settings for SMS and push transports" />

## A Visual Refresh

We've also done a visual refresh of the entire app, adopting a more modern look and a new icon.

<img src="/blog/images/textsecure2-conversation-list.png" class="nice" alt="Screenshot of redesigned TextSecure conversation list" />

## Connectivity Across Networks

The new TextSecure push transport is a federated protocol, and inter-operates transparently with the CyanogenMod deployment
of the TextSecure protocol to their 10MM+ users a few months ago.

Now that the new TextSecure for Android is out, [Christine](https://twitter.com/corbett) and
[Fred](https://twitter.com/FredericJacobs) assure us that TextSecure for iOS will be available in short order. The protocol
includes support for users to have multiple devices, and [Matt](https://twitter.com/TheBlueMatt) is working on a desktop
client.

As usual, if you'd like to help with the project, you can [contribute code](https://github.com/whispersystems/textsecure),
help [file and manage issues](https://github.com/whispersystems/textsecure/issues), 
help [translate](https://www.transifex.com/projects/p/textsecure-official/), or [donate funds](/blog/bithub) to our BitHub
tracker.  As with any major new release, there will be bugs, so please help us find them.

In the mean time, get started with the new TextSecure for Android, [download it for free](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)!
