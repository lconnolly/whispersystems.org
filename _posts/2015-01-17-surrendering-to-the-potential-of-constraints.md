---
layout: post
title: "Surrendering to the Potential of Constraints"
author: "Tyler"
author-url: "https://twitter.com/abolishme"
---

*A guest post from Winter Break Of Code, Day 5*

> The prophetic discourse of the Karai can be summed up in an observation and a promise: on the one hand, they constantly affirmed the fundamentally evil character of the world, on the other, they insisted that conquest of a good world was possible. "The world is evil! The world is ugly!" they said. "Let us abandon it!" they concluded. \[...\] In short, it was not the discourse of the prophets that was unhealthy, but indeed, the world in which they spoke, the society in which they lived.
 
– <cite> [*Archeology of Violence*](http://www.amazon.com/Archeology-Violence-Semiotext-Foreign-Agents/dp/1584350938), Pierre Clastres</cite>

<!--more-->

At the peak of the Soviet Union's civic society, more than five-hundred thousand Soviets belonged to a complex, almost ecological system of beureaucracy known as *the Nomenklatura*. Itself a reference to the Roman 'list of names' – a codified taxonomy into which people could be organized and signifed – the Soviet government was built and constrained through *social proximity*. 

The initial idea was to institute a horizontal decision-making system. A methodology that could define and populate thousands of roles for the collaborative administration of social order: ministers of industry, pedagogy, natural resources, foreign relations, internal affairs, communications, and so on.

It was a form of governance intended to gradually flatten a heirarchy that the early industrial revolution had exaggerated. However, over time the mechanics revealed – somewhat conversely – a total institutionalization of 'nepotism'. Certain senior members of the Nomenklatura had the priviledge to appoint new members, and maintain long lists of qualified candidates. New members, now obliged from a favor, formed allegiances to their patrons. Patrons themselves carried social debts to those who appointed *them*, and it went on like this up the stack into the inner circle. The heirarchy didn't flatten, it sharpened.

Speed ahead to our modern life. My social relations are all but completely virtualized. My list of friends and followers, contacts and matches, profiles and handles ... all thrum wildly. Apps are released every week which impose and constrain my lists into new formations, reconstructing my social life over and over. It's possible to see the reflection of Soviet governance in our own lives today; perhaps there are hundreds of thousands of members (less, probably) of a new bureaucratic class – technocratic knowledge workers, let's say – who organize and signify civic life in the contemporary age. Building cooperative protocols and APIs and apps and networks. Designing the interfaces and behaviors and experiences of everyone else. Teaching but sometimes refusing to learn, giving generously but sometimes taking without permission, anticipating what we want but often supposing what we want without asking. Designing our dismal fate. Slowly appointing their heirs by proximity. 

As a publisher and designer, I count myself among this degenerate few and tread carefully whenever I manage to move or speak at all.

## Anxious to Help Is Still an Anxiety

When I stepped off the plane in Hawaii into the hot-shower-fruity-shampoo steam of Kauai, I must admit I was nervous. Why? I'm not sure exactly. I guess I'm an Open Whisper Systems alumnus. The old guard, as it were. I've been imposing my grouchy scruples onto the various formations of this project from a distance since the early days, when Moxie and Stuart were still working on the initial RedPhone beta. If I had to guess, the nerves were fear of inadequacy relative to time-passed.

I've been a "designer" on this project for a *long time*. Yet, in part because of the *iterations-only* mantra of the open source community and partly due to my own technical shortcomings, none of my designs have been wholly realized in a release. Designs twist and turn and contort as we race deadlines, sync schedules across many time zones and in either direction around the planet, and ultimately work in commitee of agency. Thusfar I've found the best I can do is have a strong opinion from time to time. The prevailing wisdom: "Whoever is the closest to and most knowledgable of a project does the work, the work that they do is improved upon, but never undone. Move forward."

I'd never really understood how to work that way. Chalk it up to personality or astrology or hysterics or something. I had already made my mind up about how I would approach this Winter Break of Code: embrace the chaos of the process, do my best to find a little piece of something to bite off and chew up. We had packed into the van at the airport, and were winding toward the dark mountains when my phone flashes with a notification:

> Sup! Apparently we were on the same flight. I'm Riley, white t shirt holding a denim jacket by the carousel

I laughed as I read it aloud, interrupting the introductions vanside. We were already almost 20 minutes from the airport. I chuckled. "Sometimes you have to iterate in the other direction," I thought. We pulled over and doubled back.

## Collaboration without Committee

After talking to new collaborator and UX designer [Yoko Nakano](https://twitter.com/yknakano), my anxiety subsided. Yoko helped me see an important problem: there was no layer of abstraction between the development and design processes. We needed a common tongue to discuss our collaborations before we could expect much to come of them. We needed a way to describe every little piece of our project in a generalized way. We needed to build a nomenclature for screens and elements and actions that could be made available as contributor documentation.

This wasn't the first time I'd thought about this. I've been wracking my brain for years about the best way to break the design process into modular components, partials, and versions that could be shared amongst a public community. Dropbox seemed like a great idea for existing teams, but has proven to be pretty difficult to expose to the public as "open". Github is great and all, but try to merge concurrent changes to an .AI file, I dare you.

One of the nice things about our "breaks of code" is that we're all eavesdropping on each other. And I can't remember now if I was listening to [Riley's](https://www.twitter.com/rileyjshaw) conversation or he was listening to mine, but at some point he suggested [pixelapse.com](https://www.pixelapse.com), a version control app optimized explicitly for designers with visual comparison tools and contextual conversations that syncs local folders *a la* Dropbox. Most promising to me: it's designed to serve open source projects. Now, I'm hellbent on setting a good example for an open design methodology. This afternoon, I rolled up my sleeves and hit the keys. Here is an excerpt from the introduction:

> ### Nomenclature and Sorting
> Signal for iOS is a pilot program for a UX naming convention system that Open Whisper Systems is developing for open design projects. This system includes a thorough numerical description of every view, subview, and modal. Leading underscores are used to seperate relative version releases from fixed identifiers that remain unchanged from release to release. Using this system, we can refer to current and future elements and assets within the design regardless of the app version context. 
> 
> Each release has a version number, which functions as an organizational prefix which can be included or excluded depending on the context. Each screen flow is given a number, each screen in that flow a second number, and each subview "layer" is given a lowercase letter.   
>
> Here is how it works:

    [major].[minor]_[flow].[view][subview]
    [major].[minor]_[flow].[view]-[modal]
    [major].[minor]_[flow].[view]-[modal][subview]

>
> This system also allows us to keep our mockup files organized, and maintain confidence in asset and documentation "permalinks" using the Pixelapse locations. Here is the directory structure we use:

    signal-ios/
    ├── docs/
    │   ├── typography.md
    │   └── ...
    ├── views/
    │   ├── --1.0/
    │   │   └── ...
    │   └── --2.0/
    │       ├── _0 Launch Screens/    
    │       │   └── ...
    │       ├── _1 Registration/
    │       │   ├── _1.0_registration.ai
    │       │   ├── _1.0_registration.png
    │       │   ├── _1.0a_registration_screen_title.ai
    │       │   ├── _1.0a_registration_screen_title.png
    │       │   └── ...
    │       ├── assets/    
    │       ├── maps/    
    │       └── partials/    
    └── README.md

It's incomplete, and I'm always embarassed to share incomplete work, but this time I'm casting myself into the maw: you can follow our work (perhaps contribute?) in the coming weeks as we build out our first coherent [style and brand guide for Signal for iOS](https://www.pixelapse.com/openwhispersystems/projects/signal-ios/).

## Closing the Distance between Development and Design

While developing this system, it became clear to me that I wouldn't be able to impose my contributions without at least catching up to a small part of the app development experience. I've never really used Xcode. I had it installed on my computer, but it was *there* in the same way that expensive exercise machines are just *there*. First in a main living area, then off to the corner, then in the basement, then folded up and ignored.

But I unpacked it. [Christine](https://twitter.com/corbett) helped me set it up, showed me all the dials and switches, and set me loose on a world of tutorials and walkthroughs and in about three hours I was building out my designs, constraining subviews, and organizing the storyboard according to our new naming conventions and system map. A few more hours later I was running the app on my phone.

One consideration we made as we constructed our nomenclature is that it had to play well with the Github milestones and issues tracker and pull request features. It had to permit rapid command-line autocompletion, and it had to sort alphanumerically according to the logical sequence of the user experience. The Xcode project itself had to use unversioned names so that as we move from one *point-oh* release to the next, we can take our *list of names* and files with us. Learning to use Xcode, associate resolution-independent design assets, and constrain subviews to adapt to different screen sizes was instrumental in this process. My days of sending Dropbox links to save-for-web-and-devices mockups are over.

<img src="/blog/images/tyler-wboc-15-b.jpg" class="nice" />

## “It could be that ... or it could be something else.”

In the early days of Soviet idealism, the most deadly positions in the Nomenklatura were the ones closest to the top. The positions with the most power posed threats to *each other*. I try to remember this as I dictate a roadmap for the future of the Signal project. I want to refine a workflow that enables anyone to contribute without tossing the larger vision and minimalism of our work to the wind. I want to set a good example for others, sure, but most of all I want to discover all of the ways I can test my abilities and learn more about how these devices and these apps and these networks I'm always neurotically flicking through *actually function*. 

Teasing out the functionality of a relation or thing is more than programming – it's also a metaphysical inquiry. We spent an afternoon at a remote beach a few nights ago and [Sarah](https://twitter.com/sshourd) and I were discussing the function of waves. "Most things seem like they have a purpose, but what is the function of a wave?" As I inched back up the beach to keep my shoes dry, I thought that perhaps waves are demonstrations of the lonely prospect of only moving in one direction.

I'd like to think that during the birth of an epoch of mass-surviellance, techno-utopianism, and grandiose ruptures in governance, the designers and the developers of this social order will stop to contemplate the waves they've become, and the direction they're headed. 

One sunny afternoon I was bobbing up and down in the surf. We were all out there wading around. [Moxie](https://twitter.com/moxie) was explaining to Geoff how to catch a wave on a board. "The force of the wave is too strong and it will just pass under you if you do nothing. You've got to use gravity. You have to fall *down* the wave before its force can pass you. And you have to be ready to lean back and fall more slowly if you want to stay with it." 

So, whatever the constraint: the danger of power centralized in the hands of a technocratic class, the organizations that must coalesce regardless, a collusion of repressive states facing widespread global resistance, the anxiety of wanting to contribute to a counter-argument but feeling ill-equipped, or simply the arrangement of objects on a screen ... you don't always have to iterate solely forwards to improve. But, if and when the occasion arises, try to remember to change the direction in which you lean from time to time so you can appreciate the undertaking for what it is: a one way trip.

----

**Tyler Reinhard** ([@abolishme](https//www.twitter.com/abolishme)) *is a designer, web developer, and social theorist living in New York City. He is also the publisher of [Mask Magazine](http://maskmag.com)*
