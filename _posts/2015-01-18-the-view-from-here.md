---
layout: post
title: "The View From here"
author: "Trevor"
author-url: "https://twitter.com/trevp__"
---

*A guest post from Winter Break Of Code, Day 6*

I've been working with Open Whisper Systems on TextSecure for about
a year and a half.  I feel like I've earned better treatment than
being forced to blog at knifepoint, but here we are, so I'll tell my
story.

<!--more-->

I'd worked with Moxie on a previous project that was bogging down.
I was thinking about new projects, and playing with ways to replace
crufty old crypto like PGP and SSL.

We hung out one evening, and I talked about a crypto idea I was into
(TripleDH).  Moxie liked it, so we worked out how to apply it to
TextSecure.  Moxie was adding another twist (prekeys) at the same
time.

With these, TextSecure was no longer just a simplified variant of OTR,
but something new - it was adapting ideas from interactive protocols
(like SSL or OTR) to the asynchronous, intermittently-connected world
of text messaging or email.

We next worked on improving the OTR ratchet for this case (Axolotl).
That completed the core protocol.  Since then it's been refined a bit,
adapted to multiparty / multidevice cases, and we've been working out
more security features (e.g. better auth, metadata-hiding).

<img src="/blog/images/wboc-trevor-landscape.jpg" class="nice" />

It took me awhile to get this deeply involved.  At first I had trouble
taking text messaging seriously.  Surely the real action in secure
messaging would be in email, or something even more advanced.

But eventually I realized text messaging is both hugely important and
a perfect incubator: a controlled environment without legacy baggage,
where new protocols can be quickly deployed to huge user bases.  I
think innovations are going to get cooked up here and then ripple
outwards.  As a protocol and crypto engineer, I feel thrilled and
fortunate that I stumbled into a role in this.

I also came to realize how good Moxie and team are.  Crypto/security
engineering and high-speed, user-friendly app development are very
different skill-sets and mind-sets.  I'm lucky to have found a team
that combines these, and has leadership that values both worlds and
can orchestrate them together.

So at this point, I'm convinced this is one of the best projects I (or
anyone) could spend time on.  I hope other people see it that way, and
can find ways to lend a hand.

-- [Trevor](https://twitter.com/trevp__), January 18th

Kauai, HI
