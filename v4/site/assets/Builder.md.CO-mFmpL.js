import{_ as e,c as t,o as s,a4 as a}from"./chunks/framework.B94ikmwp.js";const i="/ui5-tooling/v4/assets/Task_Minify.C_54hEom.svg",m=JSON.parse('{"title":"UI5 Builder","description":"","frontmatter":{},"headers":[],"relativePath":"Builder.md","filePath":"Builder.md"}'),n={name:"Builder.md"},r=a('<h1 id="ui5-builder" tabindex="-1">UI5 Builder <a class="header-anchor" href="#ui5-builder" aria-label="Permalink to &quot;UI5 Builder&quot;">​</a></h1><p>The <a href="https://github.com/SAP/ui5-builder" target="_blank" rel="noreferrer">UI5 Builder</a> module takes care of building your project.</p><p>Based on a project&#39;s type, the UI5 Builder defines a series of build steps to execute; these are also called &quot;tasks&quot;.</p><p>For every type there is a set of default tasks. You can disable single tasks using the <code>--exclude-task</code> <a href="./CLI.html#ui5-build">CLI parameter</a>, and you can include tasks using the <code>--include-task</code> parameter.</p><p><a href="https://sap.github.io/ui5-tooling/v4/api/index.html" target="_blank" rel="noreferrer"><strong>API Reference</strong></a></p><h2 id="tasks" tabindex="-1">Tasks <a class="header-anchor" href="#tasks" aria-label="Permalink to &quot;Tasks&quot;">​</a></h2><p>Tasks are specific build steps to be executed during build phase.</p><p>They are responsible for collecting resources which can be modified by a processor. A task configures one or more processors and supplies them with the collected resources. After the respective processor processed the resources, the task is able to continue with its workflow.</p><p>A project can add custom tasks to the build by using the <a href="./extensibility/CustomTasks.html">Custom Tasks Extensibility</a>.</p><h3 id="standard-tasks" tabindex="-1">Standard Tasks <a class="header-anchor" href="#standard-tasks" aria-label="Permalink to &quot;Standard Tasks&quot;">​</a></h3><p>All available standard tasks are documented <a href="https://sap.github.io/ui5-tooling/v4/api/index.html" target="_blank" rel="noreferrer">in the API reference</a>. Search for <code>@ui5/builder/tasks/</code> to filter the API reference for all available tasks. The list below offers the actual order of their execution:</p><table tabindex="0"><thead><tr><th>Task</th><th style="text-align:center;">Type <code>application</code></th><th style="text-align:center;">Type <code>library</code></th><th style="text-align:center;">Type <code>theme-library</code></th></tr></thead><tbody><tr><td>escapeNonAsciiCharacters</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>replaceCopyright</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td></tr><tr><td>replaceVersion</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td></tr><tr><td>replaceBuildtime</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateJsdoc</td><td style="text-align:center;"></td><td style="text-align:center;"><em>disabled¹</em></td><td style="text-align:center;"></td></tr><tr><td>executeJsdocSdkTransformation</td><td style="text-align:center;"></td><td style="text-align:center;"><em>disabled¹</em></td><td style="text-align:center;"></td></tr><tr><td>minify</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateFlexChangesBundle</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateLibraryManifest</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>enhanceManifest</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateComponentPreload</td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>disabled²</em></td><td style="text-align:center;"></td></tr><tr><td>generateLibraryPreload</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"></td></tr><tr><td>generateStandaloneAppBundle</td><td style="text-align:center;"><em>disabled³</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>transformBootstrapHtml</td><td style="text-align:center;"><em>disabled³</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateBundle</td><td style="text-align:center;"><em>disabled⁴</em></td><td style="text-align:center;"><em>disabled⁴</em></td><td style="text-align:center;"></td></tr><tr><td>buildThemes</td><td style="text-align:center;"></td><td style="text-align:center;"><em>enabled</em></td><td style="text-align:center;"><em>enabled</em></td></tr><tr><td>generateThemeDesignerResources</td><td style="text-align:center;"></td><td style="text-align:center;"><em>disabled⁵</em></td><td style="text-align:center;"><em>disabled⁵</em></td></tr><tr><td>generateVersionInfo</td><td style="text-align:center;"><em>disabled¹</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateCachebusterInfo</td><td style="text-align:center;"><em>disabled</em></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateApiIndex</td><td style="text-align:center;">*disabled¹ *</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td>generateResourcesJson</td><td style="text-align:center;"><em>disabled</em></td><td style="text-align:center;"><em>disabled</em></td><td style="text-align:center;"><em>disabled</em></td></tr></tbody></table><p><em>Disabled tasks can be activated by certain build modes, the project configuration, or by using the <code>--include-task</code> <a href="./CLI.html#ui5-build">CLI parameter</a>. See footnotes where given</em></p><hr><p>¹ Enabled in <code>jsdoc</code> build, which disables most of the other tasks<br> ² Enabled for projects defining a <a href="./Configuration.html#component-preload-generation">component preload configuration</a><br> ³ Enabled in <code>self-contained</code> build, which disables <code>generateComponentPreload</code> and <code>generateLibraryPreload</code><br> ⁴ Enabled for projects defining a <a href="./Configuration.html#custom-bundling">bundle configuration</a><br> ⁵ Can be enabled for framework projects via the <code>includeTask</code> option. For other projects, this task is skipped</p><h3 id="minify" tabindex="-1">minify <a class="header-anchor" href="#minify" aria-label="Permalink to &quot;minify&quot;">​</a></h3><p>The <code>minify</code> task compresses all JavaScript resources of a project while preserving the original sources as so-called <strong>debug variants</strong>. For example when compressing a resource named <code>Module.js</code>, its content will be <a href="https://developer.mozilla.org/en-US/docs/Glossary/Minification" target="_blank" rel="noreferrer">minified</a> and a new resource <code>Module-dbg.js</code> is created and placed next to it.</p><p>The UI5 runtime can be instructed to load those debug variants instead of compressed resources and bundles. This can ease debugging in some cases, since the original sources are then used directly in the browser. For details, refer to the <a href="https://ui5.sap.com/#/topic/c9b0f8cca852443f9b8d3bf8ba5626ab%23loioc9b0f8cca852443f9b8d3bf8ba5626ab" target="_blank" rel="noreferrer">UI5 framework documentation on debugging</a>.</p><p>For each resource it compresses, the <code>minify</code> task will also create a <a href="https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html" target="_blank" rel="noreferrer"><strong>source map</strong></a> resource. Browsers can use this to map the content of a compressed JavaScript resource back to the original source file (now contained in the debug variant). All this happens automatically once you open the development tools in the browser and start debugging a project. While the browser still executes the code of the compressed resources, it will also show the debug variants and use the source maps to connect the two. This results in an improved debugging experience, which is almost identical to loading the debug variants directly as described before, only much faster.</p><p>Related to this, the bundling tasks will also incorporate the generated source maps to map the content of the bundles to the individual debug variants of the bundled modules.</p><h4 id="input-source-maps" tabindex="-1">Input Source Maps <a class="header-anchor" href="#input-source-maps" aria-label="Permalink to &quot;Input Source Maps&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Support for input source maps has been added in UI5 CLI <a href="https://github.com/SAP/ui5-cli/releases/tag/v3.7.0" target="_blank" rel="noreferrer"><code>v3.7.0</code></a>.</p></div><p>For projects facilitating transpilation (such as TypeScript-based projects), it is commonly desired to debug in the browser using the original sources, e.g. TypeScript files. To make this work, the transpilation process first needs to create source maps and reference them in the generated JavaScript code.</p><p>UI5 Tooling&#39;s <code>minify</code> task will then find this reference and incorporate the source map into the minification process. In the end, the minified JavaScript resources will reference an updated source map, which reflects the transpilation as well as the minification. The browser can use this to map every statement back to the original TypeScript file, making debugging a breeze.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If a resource has been modified by another build task before <code>minify</code> is executed, any referenced source map will be ignored. This is to ensure the integrity of the source maps in the build result.</p><p>It is possible that the modification of the resource content is not reflected in the associated source map, rendering it corrupted. A corrupt source map can make it impossible to properly analyze and debug a resource in the browser development tools.</p><p>Standard tasks which may modify resources without updating the associated source maps currently include <code>replaceVersion</code>, <code>replaceCopyright</code> and <code>replaceBuildtime</code>.</p></div><p>Expand the block below to view a diagram illustrating the minification process and source map handling.</p><details class="details custom-block"><summary>Minification Activity Diagram</summary><figure><img src="'+i+`" alt="" loading="lazy"><figcaption>minify Task Activity</figcaption></figure></details><h3 id="generation-of-supported-locales" tabindex="-1">Generation of Supported Locales <a class="header-anchor" href="#generation-of-supported-locales" aria-label="Permalink to &quot;Generation of Supported Locales&quot;">​</a></h3><p>The <code>enhanceManifest</code> task fills the <code>supportedLocales</code> property in the <code>manifest.json</code> of a UI5 library/application automatically with the available locales determined by the existence of the respective <code>.properties</code> translation files. To disable the automatic generation of the <code>supportedLocales</code>, set <code>supportedLocales</code> to any desired value. For further resource bundle configuration options, see <a href="https://ui5.sap.com/#/topic/ec753bc539d748f689e3ac814e129563" target="_blank" rel="noreferrer">Supported Locales and Fallback Chain</a>.</p><h4 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h4><p>This feature only becomes active under the following conditions:</p><ul><li>The <code>_version</code> property in the <code>manifest.json</code> is set to <code>1.21.0</code> or higher</li><li>The specified resource bundle is located inside the project and within the namespace defined in the <code>manifest.json</code></li></ul><h4 id="scenario-application" tabindex="-1">Scenario: Application <a class="header-anchor" href="#scenario-application" aria-label="Permalink to &quot;Scenario: Application&quot;">​</a></h4><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- webapp/i18n/</span></span>
<span class="line"><span>  - i18n.properties</span></span>
<span class="line"><span>  - i18n_en.properties</span></span>
<span class="line"><span>  - i18n_en_US.properties</span></span>
<span class="line"><span>  - i18n_de.properties</span></span>
<span class="line"><span>  - i18n_de_DE.properties</span></span></code></pre></div><p>In the <code>manifest.json</code> the <code>supportedLocales</code> property will be enhanced as follows:</p><p><strong>Source</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;models&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;i18n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sap.ui.model.resource.ResourceModel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;bundleName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my.app.i18n.i18n&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>Build Result</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;models&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;i18n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sap.ui.model.resource.ResourceModel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;bundleName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my.app.i18n.i18n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;supportedLocales&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;de&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;de_DE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;en_US&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="processors" tabindex="-1">Processors <a class="header-anchor" href="#processors" aria-label="Permalink to &quot;Processors&quot;">​</a></h2><p>Processors work with provided resources. They contain the actual build step logic to apply specific modifications to supplied resources, or to make use of the resources&#39; content to create new resources out of that.</p><p>Processors can be implemented generically. The string replacer is an example for that. Since string replacement is a common build step, it can be useful in different contexts, e.g. code, version, date, and copyright replacement. A concrete replacement operation could be achieved by passing a custom configuration to the processor. This way, multiple tasks can make use of the same processor to achieve their build step.</p><p>To get a list of all available processors, please visit <a href="https://sap.github.io/ui5-tooling/v4/api/index.html" target="_blank" rel="noreferrer">the API reference</a> and search for <code>@ui5/builder/processors/</code>.</p><h2 id="legacy-bundle-tooling-lbt" tabindex="-1">Legacy Bundle Tooling (lbt) <a class="header-anchor" href="#legacy-bundle-tooling-lbt" aria-label="Permalink to &quot;Legacy Bundle Tooling (lbt)&quot;">​</a></h2><p>JavaScript port of the &quot;legacy&quot; Maven/Java based bundle tooling.</p><h3 id="javascript-files-requiring-top-level-scope" tabindex="-1">JavaScript Files Requiring Top Level Scope <a class="header-anchor" href="#javascript-files-requiring-top-level-scope" aria-label="Permalink to &quot;JavaScript Files Requiring Top Level Scope&quot;">​</a></h3><p>UI5 Tooling packages JavaScript files that require &quot;top level scope&quot; as a string, provided your project uses a Specification Version lower than <code>4.0</code>. In this case, the code is evaluated using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval" target="_blank" rel="noreferrer"><code>eval</code></a> at runtime.</p><p>This ensures that the script works as expected, e.g. with regards to implicitly used globals. However, this <code>eval</code> runtime feature will be discontinued with UI5 2.x because of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval" target="_blank" rel="noreferrer">security best practices</a> and to comply with stricter CSP settings (i.e. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions" target="_blank" rel="noreferrer">unsafe-eval</a>).</p><p>If your project defines <a href="./Configuration.html#specification-version-40">Specification Version 4.0</a> or higher, files requiring top level scope are no longer part of the created bundle and following error is logged by UI5 Tooling:</p><blockquote><p>Module myFancyModule requires top level scope and can only be embedded as a string (requires &#39;eval&#39;), which is not supported with specVersion 4.0 and higher.</p></blockquote><p>If you see this error message, please adjust your code by applying one of the following options:</p><p><strong>Option 1</strong>: Use <a href="https://www.npmjs.com/package/ui5-tooling-modules" target="_blank" rel="noreferrer">ui5-tooling-modules</a> to bundle third-party <code>npm</code> packages. It converts files to <code>sap.ui.define</code> modules automatically.</p><p><strong>Option 2</strong>: Wrap the respective files manually in <code>sap.ui.define</code> modules as shown below:</p><div class="important custom-block github-alert"><p class="custom-block-title">Example</p><p><strong>Before</strong>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myFancyModule</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div><p><strong>After</strong>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sap.ui.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([], () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;use strict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myFancyModule</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myFancyModule;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></div>`,54),l=[r];function o(d,c,p,h,u,g){return s(),t("div",null,l)}const b=e(n,[["render",o]]);export{m as __pageData,b as default};
