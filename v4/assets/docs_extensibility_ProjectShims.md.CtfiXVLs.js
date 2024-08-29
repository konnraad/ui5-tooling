import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DPb0tF91.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/extensibility/ProjectShims.md","filePath":"docs/extensibility/ProjectShims.md"}'),e={name:"docs/extensibility/ProjectShims.md"},l=n(`<h3 id="project-shims" tabindex="-1">Project Shims <a class="header-anchor" href="#project-shims" aria-label="Permalink to &quot;Project Shims&quot;">​</a></h3><p>A project shim extension can be used to define or extend a project configuration of a module. The most popular use case is probably to add UI5 project configuration to a third party module that otherwise could not be used with the UI5 Tooling.</p><p>Also see <a href="https://github.com/SAP/ui5-tooling/blob/main/rfcs/0002-project-shims.md" target="_blank" rel="noreferrer">RFC 0002 Project Shims</a>.</p><h4 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">extension</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">project-shim</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;name of project shim extension&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shims</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  configurations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    &lt;module name (id)&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;project type&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;project name&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    &lt;module name (id)&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;project type&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;project name&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    &lt;module name (id)&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;module name (id)&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;module name (id)&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;module name (id)&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  collections</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    &lt;module name&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      modules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        &lt;id&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;relative path&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        &lt;id&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;relative path&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        &lt;id&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;relative path&gt;</span></span></code></pre></div><p>&quot;module name&quot; refers to the name of the module as identified by the used translator. E.g. when using the npm translator, the name declared in the modules <code>package.json</code> is used here. In most cases, the module name also becomes the internal ID of the project.</p><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><h5 id="configurations-optional" tabindex="-1">configurations (optional) <a class="header-anchor" href="#configurations-optional" aria-label="Permalink to &quot;configurations (optional)&quot;">​</a></h5><p>Used to add configuration to any module.</p><p>Map of module names. The values represent the configuration that should be applied to the module.</p><p><strong>Note:</strong> Configuration is applied to the module using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" target="_blank" rel="noreferrer"><code>Object.assign()</code></a>. This means that existing configuration properties will be overwritten.</p><h5 id="dependencies-optional" tabindex="-1">dependencies (optional) <a class="header-anchor" href="#dependencies-optional" aria-label="Permalink to &quot;dependencies (optional)&quot;">​</a></h5><p>Used to add dependencies to any module.</p><p>Map of module names. The value is an array of module names that this module depends on. Note that the other modules need to be part of the dependency tree of the root project (not as direct children, just somewhere).</p><h5 id="collections-optional" tabindex="-1">collections (optional) <a class="header-anchor" href="#collections-optional" aria-label="Permalink to &quot;collections (optional)&quot;">​</a></h5><p>Used when a dependency contains multiple modules. Also referred to as a <a href="https://en.wikipedia.org/wiki/Monorepo" target="_blank" rel="noreferrer">Monorepo</a>.</p><p>Map of module names. The values are objects with collection-specific configuration:</p><ul><li><code>modules</code>: Map of project IDs and their relative file system paths inside the collection module. The project ID does not have to match the actual module name (as for instance defined in the modules <code>package.json</code>). UI5 Project will use it in place of a module name.</li></ul><h4 id="example-a" tabindex="-1">Example A: <a class="header-anchor" href="#example-a" aria-label="Permalink to &quot;Example A:&quot;">​</a></h4><p>An application &quot;my-application&quot; defines a npm dependency to <a href="https://lodash.com/" target="_blank" rel="noreferrer">lodash</a> in its <code>package.json</code> and configures it by using a project-shim extension added to its <code>ui5.yaml</code>.</p><p><strong>ui5.yaml</strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">application</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.application</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Everything below this line could also be put into the ui5.yaml of a standalone extension module</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">extension</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">project-shim</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.application.thirdparty</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shims</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  configurations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lodash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># name as defined in package.json</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">module</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Use module type</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lodash</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      resources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            /resources/my/application/thirdparty/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # map root directory of lodash module</span></span></code></pre></div><h4 id="example-b" tabindex="-1">Example B: <a class="header-anchor" href="#example-b" aria-label="Permalink to &quot;Example B:&quot;">​</a></h4><p>An application &quot;application.a&quot; depends on a library &quot;legacy.library.a&quot; which does not contain a <code>ui5.yaml</code> or <code>package.json</code> yet (nor do its dependencies).</p><h5 id="structure-of-the-legacy-library-directories-two-repositories" tabindex="-1">Structure of the legacy library directories (two repositories) <a class="header-anchor" href="#structure-of-the-legacy-library-directories-two-repositories" aria-label="Permalink to &quot;Structure of the legacy library directories (two repositories)&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>legacy-libs/</span></span>
<span class="line"><span>    \\_ src/</span></span>
<span class="line"><span>        \\_ library.a/</span></span>
<span class="line"><span>            \\_ src/</span></span>
<span class="line"><span>            \\_ test/</span></span>
<span class="line"><span>        \\_ library.b/</span></span>
<span class="line"><span>            \\_ src/</span></span>
<span class="line"><span>            \\_ test/</span></span>
<span class="line"><span>legacy-library-x/</span></span>
<span class="line"><span>    \\_ src/</span></span>
<span class="line"><span>    \\_ test/</span></span></code></pre></div><h5 id="dependencies-between-the-legacy-libraries" tabindex="-1">Dependencies between the legacy libraries <a class="header-anchor" href="#dependencies-between-the-legacy-libraries" aria-label="Permalink to &quot;Dependencies between the legacy libraries&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>legacy.library.a depends on legacy.library.b</span></span>
<span class="line"><span>legacy.library.a depends on legacy.library.x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>legacy.library.b depends on legacy.library.x</span></span></code></pre></div><h5 id="application-a" tabindex="-1">application.a <a class="header-anchor" href="#application-a" aria-label="Permalink to &quot;application.a&quot;">​</a></h5><p><strong>Directory structure</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>application-a/</span></span>
<span class="line"><span>    \\_ node_modules/</span></span>
<span class="line"><span>        \\_ legacy-libs/</span></span>
<span class="line"><span>        \\_ legacy-library-x/</span></span>
<span class="line"><span>    \\_ webapp/</span></span>
<span class="line"><span>    \\_ ui5.yaml</span></span>
<span class="line"><span>    \\_ package.json</span></span></code></pre></div><p><strong>package.json (extract)</strong><br><a href="https://github.com/shama/napa" target="_blank" rel="noreferrer">napa</a> can install git repositories that are lacking a <code>package.json</code> with npm. Within <code>ui5-project</code>, the npm translator already detects dependencies defined in the <code>napa</code> section of a <code>package.json</code> and tries to resolve them.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;install&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;napa&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;napa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;legacy-libs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;git-repository-url&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;legacy-library-x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;git-repository-url&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>ui5.yaml</strong><br> The shim defined in the application configures the legacy libraries and defines their dependencies. This shim might as well be a standalone module that is added to the applications dependencies. That would be the typical reuse scenario for shims.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">application</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">application.a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">extension</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">project-shim</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legacy-lib-shims</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shims</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  configurations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    legacy-library-a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">library</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legacy.library.a</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    legacy-library-b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">library</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legacy.library.b</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    legacy-library-x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">library</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legacy.library.x</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    legacy-library-a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legacy-library-b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legacy-library-x</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    legacy-library-b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legacy-library-x</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  collections</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    legacy-libs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      modules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        legacy-library-a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">src/library.a</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        legacy-library-b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">src/library.b</span></span></code></pre></div>`,35),t=[l];function p(h,k,r,d,o,E){return a(),i("div",null,t)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
