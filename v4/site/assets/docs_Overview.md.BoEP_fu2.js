import{_ as e,c as a,o as s,a4 as n}from"./chunks/framework.CDhG2y9Q.js";const g=JSON.parse('{"title":"Development Overview","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Overview.md","filePath":"docs/Overview.md"}'),i={name:"docs/Overview.md"},t=n(`<h1 id="development-overview" tabindex="-1">Development Overview <a class="header-anchor" href="#development-overview" aria-label="Permalink to &quot;Development Overview&quot;">​</a></h1><p>When developing a UI5 project on your local system, you should use the UI5 Server (<code>ui5 serve</code>) and not the UI5 Builder (<code>ui5 build</code>). Building a project should only be required when deploying it.</p><p>However, you might have good reasons to also use the UI5 Builder during development. In such cases, feel free to let us know! Maybe your use case could be covered by a future enhancement of the UI5 Server.</p><h2 id="project-dependencies" tabindex="-1">Project Dependencies <a class="header-anchor" href="#project-dependencies" aria-label="Permalink to &quot;Project Dependencies&quot;">​</a></h2><p>UI5 Tooling differentiates between &quot;framework dependencies&quot; and &quot;project dependencies&quot;.</p><p><strong>Framework dependencies</strong> are generally libraries and themes provided by the SAP frameworks &quot;OpenUI5&quot; and &quot;SAPUI5&quot;. UI5 Tooling will take care of downloading them and handling their versions for you. Please see the corresponding documentation on both options:</p><ul><li><p><a href="./OpenUI5.html">Working with <strong>OpenUI5</strong> Framework Dependencies</a></p></li><li><p><a href="./SAPUI5.html">Working with <strong>SAPUI5</strong> Framework Dependencies</a></p></li></ul><p><strong>Project dependencies</strong> are all other libraries, custom themes, UI5 Tooling extensions or JavaScript modules your project depends on. In general these dependencies are maintained in the package.json of your project. See also: <a href="./FAQ.html#why-packagejson-why-npm">FAQ: Why package.json? / Why npm?</a>.</p><h2 id="linking-projects" tabindex="-1">Linking Projects <a class="header-anchor" href="#linking-projects" aria-label="Permalink to &quot;Linking Projects&quot;">​</a></h2><p>Would you like to work on an application project and one or more of its dependencies at the same time? We got you covered!</p><h3 id="ui5-workspaces" tabindex="-1">UI5 Workspaces <a class="header-anchor" href="#ui5-workspaces" aria-label="Permalink to &quot;UI5 Workspaces&quot;">​</a></h3><p>The recommended approach for setting up a development environment where simultaneous work on multiple UI5 projects is required.</p><p>Head over to the <a href="./Workspace.html">UI5 Workspaces</a> documentation for the details. Below is an example based on a simple scenario with an application and a reuse library project:</p><p><strong>Example: Your Directory Structure</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-app/</span></span>
<span class="line"><span>    \\_ node_modules/</span></span>
<span class="line"><span>    \\_ webapp/</span></span>
<span class="line"><span>    \\_ ui5.yaml</span></span>
<span class="line"><span>    \\_ package.json</span></span>
<span class="line"><span>my-reuse-library/</span></span>
<span class="line"><span>    \\_ node_modules/</span></span>
<span class="line"><span>    \\_ src/</span></span>
<span class="line"><span>    \\_ test/</span></span>
<span class="line"><span>    \\_ ui5.yaml</span></span>
<span class="line"><span>    \\_ package.json</span></span></code></pre></div><p>In its <code>package.json</code>, <code>my-app</code> should already define a dependency to <code>my-reuse-library</code>. So, after running the <code>npm install</code> command, a copy of the <code>my-reuse-library</code>-package should be retrieved from the package registry and added to my-app&#39;s <code>node_modules/</code> directory.</p><p>In the <code>my-app</code> directory, create a new file named <code>ui5-workspace.yaml</code> with the following content:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">specVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">workspace/1.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependencyManagement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resolutions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">../my-reuse-library</span></span></code></pre></div><p>That&#39;s it! Start a server via <code>ui5 serve</code>, and you will see that any changes you make in <code>my-reuse-library</code> are immediately visible in <code>my-app</code>.</p><h2 id="package-managers" tabindex="-1">Package Managers <a class="header-anchor" href="#package-managers" aria-label="Permalink to &quot;Package Managers&quot;">​</a></h2><p>By leaving dependency management up to the tool of your choice (see <a href="./FAQ.html#why-packagejson-why-npm">FAQ: Why package.json? / Why npm?</a>) you have a variety of other options for linking dependencies into your project.</p><p>Here is an example using the <a href="https://www.npmjs.com/get-npm" target="_blank" rel="noreferrer">npm CLI</a> in Version 8, an application, and a reuse library project:</p><p><strong>Example: Your Directory Structure</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-app/</span></span>
<span class="line"><span>    \\_ node_modules/</span></span>
<span class="line"><span>    \\_ webapp/</span></span>
<span class="line"><span>    \\_ ui5.yaml</span></span>
<span class="line"><span>    \\_ package.json</span></span>
<span class="line"><span>my-reuse-library/</span></span>
<span class="line"><span>    \\_ node_modules/</span></span>
<span class="line"><span>    \\_ src/</span></span>
<span class="line"><span>    \\_ test/</span></span>
<span class="line"><span>    \\_ ui5.yaml</span></span>
<span class="line"><span>    \\_ package.json</span></span></code></pre></div><p>In its <code>package.json</code>, <code>my-app</code> should already define a dependency to <code>my-reuse-library</code>. So, after running the <code>npm install</code> command, a copy of the &quot;my-reuse-library&quot;-package should be retrieved from the package registry and added to my-app&#39;s <code>node_modules/</code> directory.</p><p>Now all you need to do is replacing this copy of the <code>my-reuse-library</code> package with a link to the <code>my-reuse-library</code> project located somewhere on your computer. In this example it is right next to <code>my-app</code>, but that doesn&#39;t really matter.</p><p>First, in the directory of the <code>my-reuse-library</code> project, create a global link:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span></code></pre></div><p>Then, in the <code>my-app</code> directory, use that link to replace the registry package:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-reuse-library</span></span></code></pre></div><p><em><strong>Note:</strong> &quot;my-reuse-library&quot; is the name defined in the <code>package.json</code> and not necessarily the directory or <code>ui5.yaml</code> name</em></p><p>That&#39;s it. You can check whether the linking worked by executing <code>ui5 tree</code> in the <code>my-app</code> directory and looking for the path attributes in its output.</p><h2 id="static-dependency-definition" tabindex="-1">Static Dependency Definition <a class="header-anchor" href="#static-dependency-definition" aria-label="Permalink to &quot;Static Dependency Definition&quot;">​</a></h2><p>As an alternative to defining your project dependencies in the <code>package.json</code>, you can define a static dependency hierarchy for the project in a YAML file. This is typically only advised in special cases where none of the other concepts work.</p><p>To use such a file in UI5 CLI, provide a path to it using the <a href="./CLI.html#common-options"><code>--dependency-definition</code></a> parameter. Note that all <code>package.json</code> dependencies will be ignored (including UI5 Tooling extensions), but UI5 framework dependencies defined in <code>ui5.yaml</code> will still be used.</p><p><strong>Example: <code>projectDependencies.yaml</code></strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.app</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;local&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.lib</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;local&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../my.lib&quot;</span></span></code></pre></div><p>By placing this file in the root directory of the <code>my.app</code> application project, you can start a server with a local copy of the <code>my.lib</code> dependency, located in the same parent directory, using the command <code>ui5 serve --dependency-definition ./projectDependencies.yaml</code>.</p><p>The structure of the dependency definition file follows that of the <a href="https://sap.github.io/ui5-tooling/stable/api/@ui5_project_graph_providers_DependencyTree.html#~TreeNode" target="_blank" rel="noreferrer"><code>@ui5/project/graph/providers/DependencyTree~TreeNode</code></a> type.</p><h2 id="http-2-development-webserver" tabindex="-1">HTTP/2 Development Webserver <a class="header-anchor" href="#http-2-development-webserver" aria-label="Permalink to &quot;HTTP/2 Development Webserver&quot;">​</a></h2><p>The UI5 Tooling contains a web server to serve the project via HTTP/2 protocol.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --h2</span></span></code></pre></div><p>This requires an SSL certificate. You are guided through the automatic generation process. Also see the <a href="./Server.html#ssl-certificates">UI5 Server documentation</a></p><h2 id="integration-in-other-tools" tabindex="-1">Integration in Other Tools <a class="header-anchor" href="#integration-in-other-tools" aria-label="Permalink to &quot;Integration in Other Tools&quot;">​</a></h2><p>One of the key features of the UI5 Tooling is its modularization. Single parts of the tooling can easily be integrated in other <code>Node.js</code>-based tools and frameworks like <a href="https://gruntjs.com/" target="_blank" rel="noreferrer">Grunt</a> or <a href="https://gulpjs.com/" target="_blank" rel="noreferrer">Gulp</a>.</p><p>All JavaScript APIs available for direct consumption are listed <a href="https://sap.github.io/ui5-tooling/v4/api/index.html" target="_blank" rel="noreferrer">here</a>. However, for standard UI5 development, the <a href="./CLI.html">UI5 CLI</a> should always be the first choice.</p>`,46),o=[t];function p(r,l,d,h,c,k){return s(),a("div",null,o)}const y=e(i,[["render",p]]);export{g as __pageData,y as default};
