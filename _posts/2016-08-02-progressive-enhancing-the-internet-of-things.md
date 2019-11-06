---
title: Progressively Enhancing the IoT
date: 2016-08-02 10:16:00 Z
layout: article
image: "/assets/images/cat.jpeg"
type: article
excerpt_separator: "<!--more-->"
notice: This article was originally published on <a href="https://www.adido-digital.co.uk/blog/progressive-enhancement-more-than-just-web-design/">adido-digital.co.uk</a>
  on 27th July 2016.
canonical: <link rel="canonical" href="https://www.adido-digital.co.uk/blog/great-user-experiences-help-you-live-longer/"
  />
---

<p>My cat is a relentless moaner, and her body clock is a thing to marvel at.</p>
<p>6 months ago there wasn't a day that went by when she didn't make it her absolute life ambition to wake me up in the earliest of early hours for food.</p>
<!--more-->
<p>As much as I would ignore her, or try any of the other things pet owners are advised to do, it became quite clear to me there was no longer a choice in the matter... she was getting fed at 5am no matter what.</p>
<p>Parents of new-borns hate me right now, I know.</p>
<p>Then came the solution. An automatic feeder. Stock it up with her breakfast and set the timer to open in the wee small hours. Job done. It's worked perfectly ever since. Just £20 or so depending on which type you get.</p>
<p>Now I sleep peacefully.</p>
<p>But of course, as any Dragons Den viewer will tell you, there is always somebody who's trying to take a product to the "next level". Looking for ways of improving upon an existing idea (if not inventing a new one). Every so often those people seeking investment are accused of "fixing a problem that doesn't exist". Today I came across a similar story. However, not only did the problem not exist, but it created one.</p>
<p><em>thenextweb.com</em> recently <a href="http://thenextweb.com/gadgets/2016/07/27/this-is-why-im-still-wary-of-the-internet-of-things/">reported</a> on the disruptions experienced by customers of a "smart feeder" that pet owners can configure to periodically dispense food for their cat or dog, just like my £20 feeder. Except (unsurprisingly) because it's an IoT device it costs $149 (£113).</p>
<p>Now before I go on I should clarify one thing. I am not against IoT products. Not in the least. The possibilities of a connected home are exciting (and challenging, or course). I've spoken on this topic at a couple of conferences. A year or so ago I laughed at the idea of a "connected" toothbrush... well guess what I bought a couple of months ago?</p>
<p>In order to succeed in this space of "internet meets real-world" designers and developers need to consider so much more when it comes to product design. We've seen a few dodgy moments in this area, and it won't be long until we start to see a few more high-profile incidents.</p>
<p>As reported by TNW, the service relied too much on receiving instructions from a central server, and when that server went down all the feeders stopped dispensing food. The connection between the device itself and the feeding schedule stored in "the cloud" was lost, leaving felines and canines across the country with empty stomachs.</p>
<p>This disruption goes to prove one thing. Just because a product is specifically <em>intended</em> to be connected to the internet doesn't mean you can always <em>assume</em> it will be. As a society, if we're ever to reliably live in a world of connected devices the assumption that the connection will always be available is as detrimental as assuming that the super-fast internet connection in <em>your</em> office matches everyone else's experience. When creating a website (or even adding content to a page) if you only ever look at it from your perspective or make similar assumptions then you could be overlooking some fundamental problems.</p>
<p>In this case, I'd propose that the feeding schedule should have been stored in the feeder itself, without needing an internet connection to retrieve it. If the connection drops then no harm done (for now). When a connection is made any updates to that schedule are requested from the server. If (as the pet owner) you attempt to update the schedule but the feeder itself is unavailable then an appropriate message is displayed until the connection is made and the feeder accepts the request. Better still, if you're on the same network within your own home you should be able to bypass the server and hit the feeder directly. At the end of the day it's all about timestamp management.</p>
<p>Let's take that toothbrush as an example. When I switch it on a small accompanying screen displays a timer, indicating how good a job I'm doing with a happy or sad face. If I were to lose the display, or if that display were to run out of batteries, the toothbrush would continue to work. My ability to use the toothbrush for its absolute basic purpose would carry on unimpeded.</p>
<p>There will always be some products that don't quite hit the nail on the head, and that pet feeder certainly won't be the last. For all that is great about the IoT, if devices offer little benefit over conventional alternatives then we'll see little progress in this space over the next few years, especially when the infrastructure that supports those benefits can all too easily disappear. <a href="http://alistapart.com/article/understandingprogressiveenhancement" target="_blank">Progressive enhancement</a> is the key here, and one which now extends into the real world, not just responsive web design.</p>
<p>In the same way that PE "builds from the content out" before enhancing the presentation, the same must be true of IoT devices with regards to purpose. But while these bare essentials are overlooked I'm better off sticking with my £20 amazon-job. At least for now anyway, until the user experience outside of the "Goldilocks zone" is no longer superseded by the innovation.</p>
