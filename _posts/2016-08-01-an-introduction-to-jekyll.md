---
title: An introduction to Jekyll
date: 2016-08-01 09:00:00 Z
layout: article
image: "/assets/images/library.jpg"
type: article
excerpt_separator: "<!--more-->"
line_1: "<p>A little while back, whilst trundling the interwebs researching this-that-or-the-other,
  my interest in maintaining a personal blog peaked again.</p>"
line_2: "<p>I've been through various incarnations throughout the years, swinging
  violently between constant iteration and refinement to long periods of dormancy
  and silence. I've been doing a lot more writing &#8212; which I've enjoyed &#8212;
  so maintaining my own outlet where I could write additional articles was appealing.
  But to achieve something I was happy with (learing lessons from last time) I'd need
  to tick off each of the following ...</p>"
---

<p>A little while back, whilst trundling the interwebs researching this-that-or-the-other, my interest in maintaining a personal blog peaked again.</p>

<!--more-->

<p>I've been through various incarnations throughout the years, swinging violently between constant iteration and refinement to long periods of dormancy and silence.</p>

<p>Around a month ago I decided to revisit it again. I've been doing a lot more writing &#8212; which I've enjoyed &#8212; so maintaining my own outlet where I could write additional articles was appealing. But to achieve something I was happy with (learing lessons from last time) I'd need to tick off each of the following:</p>

<ul>
	<li>
	<h3>Keep it simple</h3>
	<p>There's no need to over-engineer. Pick the appropriate tools. For example, is it really necessary to have a content management system? Probably not. I may be a MODX developer, but that doesn't mean I need to use it for <em>everything</em>. Developers should always pick tools based on it's suitability, rather than allowing your <a href="/articles/are-you-consious-of-confirmaton-bias">bias</a> to pre-select a framework.</p>
	</li>
	<li>
	<h3>Keep it concise</h3>
	<p>In part, the forgotten cousin of point #1. In terms of goals, the site should avoid being a "jack of all trades". Content-driven blog? Image-driven portfolio? Pick a side and do it well.</p>
	</li>
	<li>
	<h3>Keep it open</h3>
	<p>By sharing source code I know there's always the possibility of spontaneous peer-review. It's good to be kept on your toes (even if nobody's <em>really</em> looking). It also helps others to learn (which is the point of this particular article, after all).</p>
	</li>
</ul>

<p>It was in the pursuit of point #1 that my interest in <a href="https://jekyllrb.com">Jekyll</a> peaked. A simple, blog-aware static site generator, I'd stumbled across Jekyll a while back but never found a use-case for it.</p>

<p>Instead of using a database, Jekyll runs a bunch of raw text files through a <a href="https://daringfireball.net/projects/markdown/">Markdown</a> converter and <a href="https://github.com/Shopify/liquid/wiki">Liquid</a> renderer to generate a complete, static website that is platform independent. As a developer you have the opportunity to build a light-weight, modulated system with little-to-no markup duplication, using all the usual CSS/SASS tools, plus the convenience of deploying your work to any architecture.</p>

<p>In addition to this, <a href="https://pages.github.com/">GitHub Pages</a> is powered by Jekyll. By pushing your source to the world's most popular code repository you can utilise it as a free hosting platform (custom domain name and all) that generates a static Jekyll site. This also means there's no need to commit the generated HTML to the repo (which is a smarter way of working anyway). So that's point #3 checked-off.</p>

<p>Of course point #2 is down to me. Now that I'm more inclined to write, selecting a "blog aware" platform would appear to be a reasonable move. I don't have the assets required of an image-driven site, and much that it might be prettier to look at, it doesn't actually serve the overall purpose. This time around, it's about substance over style.</p>

<h3>Install with RubyGems</h3>

<p>So let's take a look at Jekyll in a little more detail. I've lifted some of this information directly from <a href="https://jekyllrb.com/docs/quickstart/">Jekyll's Quick Start guide</a> &#8212; which of course you should browse through too.</p>

<p>The best way to install Jekyll is via RubyGems. Over the last year or so I've used a Mac, so in this case it's just a 2-minute job. Windows users should follow this <a href="http://jekyll-windows.juthilo.com/">step-by-step guide</a>. Using Jekyll on Windows is not officially supported by the Jekyll team, and while these instructions are featured on the Jekyll website it remains unofficial.</p>

<code class="codepen">
$ gem install jekyll
</code>

<h3>Create a new project</h3>

<p>Once installed, getting a Jekyll project up and running only requires three more commands:</p>

<code class="codepen">
$ jekyll new chrischerrett.github.io<br/>
$ cd chrischerrett.github.io<br/>
$ jekyll serve --watch
</code>

<p>Once the server is running, browse to http://localhost:4000 and you'll see the content of your project's <code>_site</code> folder (when you have one &#8212; see below) served as static HTML.</p>

<p>Before we carry on, it's worth noting the <a href="https://jekyllrb.com/docs/configuration/">configuration options</a> available to you, and which ones to pay attention to from the beginning.</p>

<p>Jekyll allows you to mould your site in any way you want, and it’s thanks to the powerful and flexible configuration options that this is possible. Typically, these options are specified in a <code>_config.yml</code> file placed in your site’s root directory.</p>

<p>You'll see settings in here for title, decsription etc. You can refence any of these settings in your templates using syntax like <code>&#123;&#123;site.author&#125;&#125;</code>. This is good if you want to repeat values throughout your site, like this site does in the <code>&#123;&#123;site.description&#125;&#125;</code> part of the template.</p>

<p>It's important to note that Jekyll will sometimes do some fairly assumptive things, like copying everything in the root directory to the <code>_site</code> folder. There's a good reason for this, and in many cases this is a good thing (e.g. the way I've organised assets into their own folder) but other times you want to exclude specific files or folders from that process. Use the <code>exclude</code> property to define an array of paths that should be omitted. This is especially useful if you're using tools like Gulp.</p>

<h3>Directory Structure</h3>

<p>To explain the directroy structure in a little more details (seeing as I've just touched upon it), my project is broken down into 5 folders:</p>

<ul>
	<li>
	<code>_includes</code>
	<p>These are global HTML files, typically referenced by most (if not all) <code>_layouts</code>. For example there are snippets of HTML in here &#8212; like the header and footer &#8212; that each template uses. This helps to reduce duplication, and encourages reuse.</p>
	</li>
	<li>
	<code>_layouts</code>
	<p>These are essentially "master" templates, but they can also inherit the layout of another. For example I have a <code>default.html</code> layout that is inherited by all the others. This ensures that if I change one part of the default layout, all the other templates get that update too. When creating content you'll define which layout that page or post uses.</p>
	</li>
	<li>
	<code>_posts</code>
	<p>This is a special folder reserved for blog articles. The format of the filename (along with some META data called <a href="https://jekyllrb.com/docs/frontmatter/">YAML Front Matter</a>) defines the publish date of each post, as well as some other properties, like which of the <code>_layouts</code> to use.</p>
	</li>
	<li>
	<code>_site</code>
	<p>This folder is created automatically by Jeykll, so you never need to worry about it's content really. All HTML, CSS and images are copied to this folder. It's this folder that <a href="https://pages.github.com/">GitHub Pages</a> and http://localhost:4000 will serve when someone browses your site.</p>
	</li>
	<li>
	<code>assets</code>
	<p>I've touched on this one already, but basically I just organise all my assets (images, styles and scripts) into my own custom folder. This folder's then copied into <code>_site</code> by Jekyll, but not before the SASS is parsed and CSS compiled.</p>
	</li>
</ul>

<h3>Content</h3>

<p>So that's the structure explained, but what about just "normal" web pages. Where do they go?</p>

<p>For the most part, much of my site's content sits in the root. As an example, there is a markdown file in there called <code>contact.md</code>. Ultimatly, Jekyll will convert this into a HTML file and copy it to the root of the <code>_site</code> folder, giving me a <a href="/contact/">contact page</a>.</p>

<p>At the top of <code>contact.md</code> is the following Front Matter:</p>

<code class="codepen">
---<br/>
layout: page<br/>
title: Contact<br/>
permalink: /contact/<br/>
---
</code>

<p>This tells Jekyll to use the "page" layout, to give it a title of "Contact" and to assign "<a href="/contact/">/contact/</a>" as it's URL. There's a bunch of extra properties you can assign, but as this site shows, that's all you really need to get going.</p>
