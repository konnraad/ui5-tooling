import{_ as e,c as t,o as s,a4 as a}from"./chunks/framework.CDhG2y9Q.js";const u=JSON.parse('{"title":"Migrate to v3","description":"","frontmatter":{},"headers":[],"relativePath":"docs/updates/migrate-v3.md","filePath":"docs/updates/migrate-v3.md"}'),i={name:"docs/updates/migrate-v3.md"},n=a(`<h1 id="migrate-to-v3" tabindex="-1">Migrate to v3 <a class="header-anchor" href="#migrate-to-v3" aria-label="Permalink to &quot;Migrate to v3&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>UI5 Tooling 3.0 has been superseded by version 4.0. See <a href="./migrate-v4.html">Migrate to v4</a>.</strong></p><p>Find the announcement blog post for version 3.0 here: <strong><a href="https://blogs.sap.com/2023/02/10/ui5-tooling-3.0/" target="_blank" rel="noreferrer">SAP Community: UI5 Tooling 3.0</a></strong></p></div><h2 id="node-js-and-npm-version-support" tabindex="-1">Node.js and npm Version Support <a class="header-anchor" href="#node-js-and-npm-version-support" aria-label="Permalink to &quot;Node.js and npm Version Support&quot;">​</a></h2><p><strong>This release requires Node.js versions v16.18.0, v18.12.0 or higher as well as npm v8 or higher.</strong> Support for older Node.js and npm releases has been dropped and will cause an error to be shown.</p><h2 id="specification-versions-support" tabindex="-1">Specification Versions Support <a class="header-anchor" href="#specification-versions-support" aria-label="Permalink to &quot;Specification Versions Support&quot;">​</a></h2><p>Going forward, <strong>only projects with Specification Versions 2.0 and higher are supported.</strong></p><p>In case a legacy specification version is detected, <strong>an automatic migration is attempted.</strong> This means your old projects might still work. Unless they have non-standard configuration in their ui5.yaml.</p><h2 id="changes-for-projects" tabindex="-1">Changes for Projects <a class="header-anchor" href="#changes-for-projects" aria-label="Permalink to &quot;Changes for Projects&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">✅ Projects defining <strong>Specification Version 2.x</strong> are expected to be <strong>fully compatible with UI5 Tooling v3</strong></p></div><p>For projects defining the latest <strong>Specification Versions 3.0 and higher</strong>, some changes apply:</p><ul><li><strong>Breaking Change:</strong> The <code>metadata.name</code> property is now restricted to contain only certain characters and no uppercase letters. See <a href="./../pages/Configuration.html#name">Configuration: <code>name</code></a> for details</li></ul><p>See also <a href="./../pages/Configuration.html#specification-version-30">Configuration: Specification Version 3.0</a>.</p><h2 id="changes-for-extensions" tabindex="-1">Changes for Extensions <a class="header-anchor" href="#changes-for-extensions" aria-label="Permalink to &quot;Changes for Extensions&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">✅ Custom Tasks and Custom Middleware defining <strong>Specification Version 2.x</strong> are expected to be <strong>fully compatible with UI5 Tooling v3</strong></p></div><p>For extensions defining the latest <strong>Specification Versions 3.0 and higher</strong>, some changes and improvements apply:</p><ul><li><strong>Breaking Change:</strong> Custom Tasks need to request access to dependency resources <ul><li>By default, resources of dependencies can&#39;t be accessed. A custom task requiring such access needs to implement a callback function with the export name <code>determineRequiredDependencies</code>. In this function it can define the scope of dependency-access. Please refer to the <a href="./../pages/extensibility/CustomTasks.html#required-dependencies">Custom Task: Required Dependencies</a> documentation for details</li></ul></li><li><strong>Breaking Change:</strong> The <code>metadata.name</code> property is now restricted to contain only certain characters and no uppercase letters. See <a href="./../pages/Configuration.html#name">Configuration: <code>name</code></a> for details</li><li><strong>Features:</strong> Enhanced TaskUtil and MiddlewareUtil API <ul><li>For example providing access to a <a href="https://sap.github.io/ui5-tooling/v3/api/@ui5_project_build_helpers_TaskUtil.html#~ProjectInterface" target="_blank" rel="noreferrer">project&#39;s root directory</a>, or <a href="https://sap.github.io/ui5-tooling/v3/api/@ui5_project_build_helpers_TaskUtil.html#getDependencies" target="_blank" rel="noreferrer">dependencies</a></li><li>See also <a href="./../pages/extensibility/CustomTasks.html">Custom Tasks</a> and <a href="./../pages/extensibility/CustomServerMiddleware.html">Custom Server Middleware</a></li></ul></li></ul><h2 id="changes-to-dependency-configuration" tabindex="-1">Changes to Dependency Configuration <a class="header-anchor" href="#changes-to-dependency-configuration" aria-label="Permalink to &quot;Changes to Dependency Configuration&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">✅ The <strong><code>ui5.dependencies</code> package.json configuration</strong> becomes obsolete and is ignored in UI5 Tooling v3.</p><p>Configuration like the following is not needed anymore:</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [...]</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-     &quot;ui5&quot;: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-       &quot;dependencies&quot;: [</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-         &quot;my-package&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-       ]</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [...]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>dependencies</code>, <code>devDependencies</code> and <code>optionalDependencies</code> are now <a href="https://github.com/SAP/ui5-project/blob/ff04ae4aeeb7f7d889dffd0c0e3e8774dd708c79/lib/graph/providers/NodePackageDependencies.js#L104" target="_blank" rel="noreferrer">automatically analyzed</a>. If a dependency can be configured as a UI5 project or UI5 Tooling extension, it is added to the graph and its <code>dependencies</code> are analyzed.</p><p>Note that <code>devDependencies</code> and <code>optionalDependencies</code> are ignored for all but the current root project. For projects that are intended to be consumed in other projects (for example libraries), this means that any required custom tasks must be added to <code>dependencies</code>.</p></div><h2 id="changes-to-module-api" tabindex="-1">Changes to Module API <a class="header-anchor" href="#changes-to-module-api" aria-label="Permalink to &quot;Changes to Module API&quot;">​</a></h2><p>The <code>normalizer</code> and <code>projectTree</code> modules have been removed. The <code>builder</code> API has been moved from @ui5/builder to @ui5/project.</p><p>The JSON based, internal representation of a project dependency tree has been replaced with a graph. This is the result of a major refactoring of @ui5/project which lead to a series of API changes.</p><p>Also the @ui5/server API has been changed. Instead of a <code>tree</code>, it now only accepts a <code>graph</code> instance as the first parameter.</p><h3 id="migrate-your-code" tabindex="-1">Migrate Your Code <a class="header-anchor" href="#migrate-your-code" aria-label="Permalink to &quot;Migrate Your Code&quot;">​</a></h3><p>The tooling modules such as @ui5/builder, etc. have been transformed to ES Modules (&quot;ESM&quot;). Therefore, they no longer use a CommonJS export and cannot be included via <code>require</code>. If your code is in CommonJS format, it needs to use dynamic imports or be converted to <a href="https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c" target="_blank" rel="noreferrer">ES Modules</a>.</p><p><strong>Old: @ui5/project v2</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">normalizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@ui5/project&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@ui5/builder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tree</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> normalizer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateProjectTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({cwd: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tree,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    destPath: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    buildDependencies: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>New: @ui5/project v3</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Sxx49" id="tab-CKWrvvB" checked><label for="tab-CKWrvvB">ESM</label><input type="radio" name="group-Sxx49" id="tab-7H02XEy"><label for="tab-7H02XEy">CommonJS</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {graphFromPackageDependencies} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ui5/project/graph&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graph </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> graphFromPackageDependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({cwd: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graph.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    destPath: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    includedDependencies: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Parameter &quot;buildDependencies&quot; has been removed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Since CommonJS does not suport top-level await, the code must be wrapped in an asynchronous function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildProject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">graphFromPackageDependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@ui5/project/graph&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graph </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> graphFromPackageDependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({cwd: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graph.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        destPath: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        includedDependencies: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Parameter &quot;buildDependencies&quot; has been removed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="changes-to-ui5-cli" tabindex="-1">Changes to @ui5/cli <a class="header-anchor" href="#changes-to-ui5-cli" aria-label="Permalink to &quot;Changes to @ui5/cli&quot;">​</a></h2><ul><li>The CLI option <code>--translator</code> has been removed. For static dependency resolution, use the new option <code>--dependency-definition</code> to provide a file with static dependency information.</li><li>The <code>ui5 build dev</code> command has been removed. Use <code>ui5 build --exclude-task=* --include-task=replaceCopyright replaceVersion replaceBuildtime buildThemes</code> instead.</li></ul><h2 id="jsdoc-processor-fails-when-jsdoc-reports-an-error" tabindex="-1">JSDoc Processor Fails When JSDoc Reports an Error <a class="header-anchor" href="#jsdoc-processor-fails-when-jsdoc-reports-an-error" aria-label="Permalink to &quot;JSDoc Processor Fails When JSDoc Reports an Error&quot;">​</a></h2><p>The <code>jsdocGenerator</code> processor and the corresponding <code>generateJsdoc</code> task will now throw an error when JSDoc reports an error (exit code != 0). This will also fail the build when running <code>ui5 build jsdoc</code>.</p><h2 id="always-building-required-dependencies" tabindex="-1">Always Building Required Dependencies <a class="header-anchor" href="#always-building-required-dependencies" aria-label="Permalink to &quot;Always Building Required Dependencies&quot;">​</a></h2><p>If any of a project&#39;s build tasks requires access to resources of the project&#39;s dependencies, UI5 Tooling v3 will now <strong>always build that dependency upfront</strong>.</p><p>This ensures that tasks always access processed resources and never the raw sources of a dependency. Resulting in better reproducibility of build results and resolving common issues.</p><p>Especially for projects of type <code>library</code>, where standard tasks like <a href="https://github.com/SAP/ui5-project/blob/b40e3f569e0f01c6dd8e72141c7ba43449812d01/lib/build/definitions/library.js#L139" target="_blank" rel="noreferrer"><code>buildThemes</code></a> always require dependency access, UI5 Tooling will now always build all dependencies.</p><p>In the future, a caching mechanism should help and improve build times with this new behavior.</p><div class="tip custom-block"><p class="custom-block-title">Info</p><p>The CLI flags <code>-a</code> and <code>--all</code> are still present and now an alias for <code>--include-all-dependencies</code>. This flag (along with <code>--include-dependency*</code> and <code>--exclude-dependency*</code>) mainly controls the <strong>build output</strong>. Use it to define whether dependency resources should be part of the build result.</p><p>Please also refer to the <a href="./../pages/CLI.html#ui5-build"><code>ui5 build</code> documentation</a>.</p></div><h2 id="removal-of-standard-tasks-and-processors" tabindex="-1">Removal of Standard Tasks and Processors <a class="header-anchor" href="#removal-of-standard-tasks-and-processors" aria-label="Permalink to &quot;Removal of Standard Tasks and Processors&quot;">​</a></h2><p>The following tasks have been removed:</p><ul><li>createDebugFiles</li><li>generateManifestBundle</li><li>uglify</li></ul><p>The following processors have been removed:</p><ul><li>debugFileCreator</li><li>manifestBundler</li><li>resourceCopier</li><li>uglifier</li></ul><p><strong>Task Migration</strong></p><table tabindex="0"><thead><tr><th>UI5 Tooling v2</th><th>UI5 Tooling v3</th><th>Note</th></tr></thead><tbody><tr><td>createDebugFiles uglify</td><td>minify</td><td>The minify task is executed earlier, before the bundling process takes place. Any existing <code>beforeTask</code> or <code>afterTask</code> configuration of custom tasks might need to be adapted to cater for this change. <br>To adapt, you can use the <code>generateResourcesJson</code> task for subscription before or after the last standard task. By default, <code>generateResourcesJson</code> is disabled, but you can still subscribe to it, thereby ensuring that your custom tasks execute in the correct order.</td></tr><tr><td>generateVersionInfo</td><td>generateVersionInfo</td><td>The task is no longer executed by default for application projects. It can be re-enabled by using the <code>--include-task</code> parameter.</td></tr><tr><td>generateManifestBundle</td><td><em>None</em></td><td>This task was only needed for the HTML5 repository in Cloud Foundry. Meanwhile, the HTML5 repository implemented its own mechanism, so the task is no longer needed</td></tr></tbody></table><p><strong>Updated list of standard tasks:</strong></p><table tabindex="0"><thead><tr><th>Task</th><th style="text-align:center;">Type <code>application</code></th><th style="text-align:center;">Type <code>library</code></th><th style="text-align:center;">Type <code>theme-library</code></th></tr></thead><tbody><tr><td>escapeNonAsciiCharacters</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>replaceCopyright</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td></tr><tr><td>replaceVersion</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td></tr><tr><td>replaceBuildtime</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateJsdoc</td><td style="text-align:center;"></td><td style="text-align:center;"><em>disabled¹</em></td><td style="text-align:center;"></td></tr><tr><td>executeJsdocSdkTransformation</td><td style="text-align:center;"></td><td style="text-align:center;"><em>disabled¹</em></td><td style="text-align:center;"></td></tr><tr><td><strong>ADDED:</strong> minify</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateFlexChangesBundle</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td><strong>REMOVED:</strong> <s>generateManifestBundle</s></td><td style="text-align:center;"><em><s>disabled</s></em></td><td style="text-align:center;"><em><s>disabled</s></em></td><td style="text-align:center;"></td></tr><tr><td>generateLibraryManifest</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateComponentPreload</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>disabled²</em></td><td style="text-align:center;"></td></tr><tr><td>generateLibraryPreload</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateStandaloneAppBundle</td><td style="text-align:center;"><em>disabled³</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>transformBootstrapHtml</td><td style="text-align:center;"><em>disabled³</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateBundle</td><td style="text-align:center;"><em>disabled⁴</em></td><td style="text-align:center;"><em>disabled⁴</em></td><td style="text-align:center;"></td></tr><tr><td>buildThemes</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td></tr><tr><td>generateThemeDesignerResources</td><td style="text-align:center;"></td><td style="text-align:center;"><em>disabled⁵</em></td><td style="text-align:center;"><em>disabled⁵</em></td></tr><tr><td><strong>REMOVED:</strong> <s>createDebugFiles</s></td><td style="text-align:center;"><em><s>enabled</s></em></td><td style="text-align:center;"><em><s>enabled</s></em></td><td style="text-align:center;"></td></tr><tr><td><strong>REMOVED:</strong> <s>uglify</s></td><td style="text-align:center;"><em><s>enabled</s></em></td><td style="text-align:center;"><em><s>enabled</s></em></td><td style="text-align:center;"></td></tr><tr><td>generateVersionInfo</td><td style="text-align:center;"><strong>disabled</strong></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateCachebusterInfo</td><td style="text-align:center;"><em>disabled</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateApiIndex</td><td style="text-align:center;"><em>disabled¹</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateResourcesJson</td><td style="text-align:center;"><em>disabled</em></td><td style="text-align:center;"><em>disabled</em></td><td style="text-align:center;"><em>disabled</em></td></tr></tbody></table><p><em>Disabled tasks can be activated by certain build modes, the project configuration, or by using the <code>--include-task</code> <a href="./../pages/CLI.html#ui5-build">CLI parameter</a>. See footnotes where given</em></p><hr><p>¹ Enabled in <code>jsdoc</code> build, which disables most of the other tasks<br> ² Enabled for projects defining a <a href="./../pages/Configuration.html#component-preload-generation">component preload configuration</a><br> ³ Enabled in <code>self-contained</code> build, which disables <code>generateComponentPreload</code> and <code>generateLibraryPreload</code><br> ⁴ Enabled for projects defining a <a href="./../pages/Configuration.html#custom-bundling">bundle configuration</a><br> ⁵ Can be enabled for framework projects via the <code>includeTask</code> option. For other projects, this task is skipped</p><h2 id="removal-of-standard-middleware" tabindex="-1">Removal of Standard Middleware <a class="header-anchor" href="#removal-of-standard-middleware" aria-label="Permalink to &quot;Removal of Standard Middleware&quot;">​</a></h2><p>The following middleware has been removed from the <a href="./.../../pages/Server/#standard-middleware">standard middlewares list</a>:</p><ul><li>connectUi5Proxy</li></ul><p><strong>Middleware Migration</strong></p><table tabindex="0"><thead><tr><th>UI5 Tooling v2</th><th>UI5 Tooling v3</th><th>Note</th></tr></thead><tbody><tr><td>connectUi5Proxy</td><td><em>None</em></td><td>More sophisticated proxy solutions for ui5-server are now available in the form of <a href="https://bestofui5.org/#/packages?tokens=proxy:tag" target="_blank" rel="noreferrer">custom middleware extensions from the UI5-community</a>. Make sure to refactor any custom middleware that attaches to <code>beforeMiddleware</code> or <code>afterMiddleware</code> of <code>connectUi5Proxy</code> to reference some other middleware.</td></tr></tbody></table>`,55),r=[n];function d(l,o,h,p,c,g){return s(),t("div",null,r)}const m=e(i,[["render",d]]);export{u as __pageData,m as default};
