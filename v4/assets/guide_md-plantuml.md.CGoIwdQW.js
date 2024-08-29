import{_ as e,D as n,c as l,j as a,a as s,I as r,a4 as i,o as h}from"./chunks/framework.DPb0tF91.js";const p="/ui5-tooling/icons/logo/PlantUML.svg",D=JSON.parse('{"title":"Declarative Diagramming","description":"","frontmatter":{},"headers":[],"relativePath":"guide/md-plantuml.md","filePath":"guide/md-plantuml.md"}'),k={name:"guide/md-plantuml.md"},o=i('<h1 id="declarative-diagramming" tabindex="-1">Declarative Diagramming <a class="header-anchor" href="#declarative-diagramming" aria-label="Permalink to &quot;Declarative Diagramming&quot;">​</a></h1><p>Modern tools that turn text to diagrams. <a href="https://text-to-diagram.com/" class="learn-more" target="_blank" rel="noreferrer">Community list of comparisons between Text to Diagram tools</a></p><h2 id="plantuml" tabindex="-1">PlantUML <img src="'+p+'" alt="PlantUML Logo" class="u-right-brand"> <a class="header-anchor" href="#plantuml" aria-label="Permalink to &quot;PlantUML ![PlantUML Logo](/icons/logo/PlantUML.svg){class=&quot;u-right-brand&quot;}&quot;">​</a></h2><blockquote><p><a href="https://plantuml.com/en/" target="_blank" rel="noreferrer">PlantUML</a> is an open-source tool allowing users to create diagrams from a plain text language. Besides various <a href="https://en.wikipedia.org/wiki/Unified_Modeling_Language" target="_blank" rel="noreferrer">UML</a> diagrams, PlantUML has support for various other software development related formats (such as Archimate, Block diagram, BPMN, C4, Computer network diagram, ERD, Gantt chart, Mind map, and WBD), as well as visualisation of <a href="https://plantuml.com/en/json" target="_blank" rel="noreferrer">JSON</a> and <a href="https://plantuml.com/en/yaml" target="_blank" rel="noreferrer">YAML</a> files.</p></blockquote><p><a href="https://plantuml-documentation.readthedocs.io/en/latest/index.html" class="learn-more" target="_blank" rel="noreferrer">Ashley’s PlantUML Documentation</a><a href="https://en.wikipedia.org/wiki/PlantUML" class="learn-more" target="_blank" rel="noreferrer">Wikipedia</a></p>',5),d={id:"plugin",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#plugin","aria-label":'Permalink to "Plugin <Badgen package="markdown-it-plantuml" class="float-right"/>"'},"​",-1),c=i(`<p>Plugin for creating block-level uml diagrams for <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noreferrer">markdown-it</a> markdown parser.</p><h3 id="sequence-diagram" tabindex="-1">Sequence Diagram <a class="header-anchor" href="#sequence-diagram" aria-label="Permalink to &quot;Sequence Diagram&quot;">​</a></h3><p>Use the following code</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`plantuml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bob -&gt; Alice : hello</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span></code></pre></div><p>to genrate a diagram like this</p><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuKhAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80" alt="uml diagram"><h3 id="cds-data-model" tabindex="-1">CDS Data Model <a class="header-anchor" href="#cds-data-model" aria-label="Permalink to &quot;CDS Data Model&quot;">​</a></h3><p>The <a href="https://help.sap.com/viewer/923180ddb98240829d935862025004d6/Cloud/en-US/c4aaecac48294ef1a39ef13de0706a4b.html" target="_blank" rel="noreferrer">Data Model</a> comprises the description of the different entities involved in a business scenario.</p><p>It distinguishes between:</p><table tabindex="0"><thead><tr><th style="text-align:center;">Type</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:center;">Main business entities</td><td>Compositions<br>are used to model document structures through “contained-in” relationships, also supporting Cascaded Delete.</td></tr><tr><td style="text-align:center;">Secondary business entities</td><td>Associations</td></tr></tbody></table><img src="https://www.plantuml.com/plantuml/svg/VLBBRi8m4BpxArRY43Za3n228lNMK_i3csGRMt7MoBjf6ecFxqAWWFgunChCs3EpzbOKimvzT0MefpvmwwGBVC2CFOZ79es6mJj6eJjcbtCQzocc38igOjtTSJ4mwNGWI5bzSiMDySZDc8CgCMWUo4nx30pL8BP718WrQ21ncMf5RYF1MyOFYh28eVKgtLH5stUZdrBgJW4V-GA4wiGDvkdVm_U3QEh9Iem-wFsvkvQuddxYpsUVAru0YgGwe8R40alpr9mYeAcuDqCOWteeOHduD9QLpGHA-sNwL8XapLOhzvrYRTJSzn6xb7JNikNcAhjCfpHaJdpJ63I7jPIHZ6pSl41jmIYx8y3wOMmRW2Ey_78XIWB7MN_kVHQ-_ZrX4vlFnNHh7tjWNm00" alt="uml diagram"><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@startuml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; themin</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">g</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">skinparam shadowing </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">skinparam ArrowColor #black</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">skinparam linetype ortho</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; main business entitie</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rectangle Travel #lightskyblue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rectangle Booking #lightskyblue</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; secondary business entitie</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rectangle Customer #white</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rectangle Agency #white</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rectangle Flight #white</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; associations</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; control alignment with - (inline) or -- (next level</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Customer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Travel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Customer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Booking</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Booking </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Travel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Travel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Agency</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Booking </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flight</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; legen</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">legend center</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;#</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lightskyblue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Main business entitites </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;#</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Secondary business entities </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">endlegend</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@enduml</span></span></code></pre></div>`,12);function m(E,u,y,f,b,_){const t=n("Badgen");return h(),l("div",null,[o,a("h3",d,[s("Plugin "),r(t,{package:"markdown-it-plantuml",class:"float-right"}),s(),g]),c])}const B=e(k,[["render",m]]);export{D as __pageData,B as default};
