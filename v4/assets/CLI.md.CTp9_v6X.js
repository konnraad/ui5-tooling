import{_ as t,c as e,o as a,a4 as s}from"./chunks/framework.B94ikmwp.js";const b=JSON.parse('{"title":"UI5 CLI","description":"","frontmatter":{},"headers":[],"relativePath":"CLI.md","filePath":"CLI.md"}'),i={name:"CLI.md"},o=s(`<h1 id="ui5-cli" tabindex="-1">UI5 CLI <a class="header-anchor" href="#ui5-cli" aria-label="Permalink to &quot;UI5 CLI&quot;">​</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li><a href="https://nodejs.org/" target="_self" rel="noreferrer">Node.js</a> Version v20.11.0, v22.0.0 or higher</li><li><a href="https://www.npmjs.com/" target="_self" rel="noreferrer">npm</a> Version v8.0.0 or higher</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Install the CLI using the npm package manager:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ui5/cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Verify installation</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><h2 id="usage-syntax" tabindex="-1">Usage/Syntax <a class="header-anchor" href="#usage-syntax" aria-label="Permalink to &quot;Usage/Syntax&quot;">​</a></h2><p><code> ui5 &lt;command&gt; [options]</code></p><p>The CLI automatically checks for updates using <a href="https://github.com/yeoman/update-notifier" target="_self" rel="noreferrer">update-notifier</a>. While this is skipped in CI environments, you might also opt-out manually by following the steps described <a href="https://github.com/yeoman/update-notifier/blob/-/readme.md#user-settings" target="_self" rel="noreferrer">here</a>.</p><h2 id="common-options" tabindex="-1">Common options <a class="header-anchor" href="#common-options" aria-label="Permalink to &quot;Common options&quot;">​</a></h2><p>These options you can use with each command.</p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>-h, --help</td><td>Show help</td><td>[boolean]</td></tr><tr><td>-v, --version</td><td>Show version number</td><td>[boolean]</td></tr><tr><td>-c, --config</td><td>Path to project configuration file in YAML format</td><td>[string]</td></tr><tr><td>--dependency-definition</td><td>Path to a YAML file containing the project&#39;s dependency tree. This option will disable resolution of node package dependencies.</td><td>[string]</td></tr><tr><td>--workspace-config</td><td>Path to workspace configuration file in YAML format</td><td>[string]</td></tr><tr><td>-w, --workspace</td><td>Name of the workspace configuration to use</td><td>[string] [default: &quot;default&quot;]</td></tr><tr><td>--loglevel, --log-level</td><td>Set the logging level</td><td>[string] [choices: &quot;silent&quot;, &quot;error&quot;, &quot;warn&quot;, &quot;info&quot;, &quot;perf&quot;, &quot;verbose&quot;, &quot;silly&quot;] [default: &quot;info&quot;]</td></tr><tr><td>--verbose</td><td>Enable verbose logging.</td><td>[boolean] [default: false]</td></tr><tr><td>--perf</td><td>Enable performance measurements and related logging.</td><td>[boolean] [default: false]</td></tr><tr><td>--silent</td><td>Disable all log output.</td><td>[boolean] [default: false]</td></tr></tbody></table><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Execute command using a static dependency tree instead of resolving node package dependencies</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 &lt;command&gt; --dependency-definition /path/to/projectDependencies.yaml</span></span></code></pre></div><p>Execute command using a project configuration from custom path</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 &lt;command&gt; --config /path/to/ui5.yaml</span></span></code></pre></div><p>Execute command using the &#39;dolphin&#39; workspace of a ui5-workspace.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 &lt;command&gt; --workspace dolphin</span></span></code></pre></div><p>Execute command with the maximum log output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 &lt;command&gt; --log-level silly</span></span></code></pre></div><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><h3 id="ui5-add" tabindex="-1">ui5 add <a class="header-anchor" href="#ui5-add" aria-label="Permalink to &quot;ui5 add&quot;">​</a></h3><p><strong>Description</strong></p><p>Add SAPUI5/OpenUI5 framework libraries to the project configuration.</p><p><strong>Usage</strong></p><p><code>ui5 add [--development] [--optional] &lt;framework-libraries..&gt;</code></p><p><strong>Options</strong></p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>-D, --development, --dev</td><td>Add as development dependency</td><td>[boolean] [default: false]</td></tr><tr><td>-O, --optional</td><td>Add as optional dependency</td><td>[boolean] [default: false]</td></tr></tbody></table><p><strong>Positionals</strong></p><table tabindex="0"><thead><tr><th>Positional</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>framework-libraries</td><td>Framework library names</td><td>[array] [required] [default: []]</td></tr></tbody></table><p><strong>Examples</strong></p><p>Add the framework libraries sap.ui.core and sap.m as dependencies</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 add sap.ui.core sap.m</span></span></code></pre></div><p>Add the framework library sap.ui.support as development dependency</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 add -D sap.ui.support</span></span></code></pre></div><p>Add the framework library themelib_sap_fiori_3 as optional dependency</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 add --optional themelib_sap_fiori_3</span></span></code></pre></div><h3 id="ui5-build" tabindex="-1">ui5 build <a class="header-anchor" href="#ui5-build" aria-label="Permalink to &quot;ui5 build&quot;">​</a></h3><p><strong>Description</strong></p><p>Build project in current directory</p><p><strong>Usage</strong></p><p><code>ui5 build</code></p><p><strong>Child Commands</strong></p><table tabindex="0"><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>ui5 build jsdoc</td><td>Build JSDoc resources</td></tr><tr><td>ui5 build preload</td><td>(default) Build project and create preload bundles</td></tr><tr><td>ui5 build self-contained</td><td>Build project and create self-contained bundle. Recommended to be used in conjunction with --include-all-dependencies</td></tr></tbody></table><p><strong>Options</strong></p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>-a, --include-all-dependencies, --all</td><td>Include all dependencies in the build result. This is equivalent to &#39;--include-dependency &quot;*&quot;&#39;</td><td>[boolean] [default: false]</td></tr><tr><td>--include-dependency</td><td>A list of dependencies to be included in the build result. You can use the asterisk &#39;*&#39; as an alias for including all dependencies in the build result. The listed dependencies cannot be overruled by dependencies defined in &#39;exclude-dependency&#39;. The provided name must match with the dependency name shown in &#39;ui5 ls --flat&#39;</td><td>[array]</td></tr><tr><td>--include-dependency-regexp</td><td>A list of regular expressions defining dependencies to be included in the build result. This list is prioritized like &#39;include-dependency&#39;.</td><td>[array]</td></tr><tr><td>--include-dependency-tree</td><td>A list of dependencies to be included in the build result. Transitive dependencies are implicitly included and do not need to be part of this list. These dependencies overrule the selection of &#39;exclude-dependency-tree&#39; but can be overruled by &#39;exclude-dependency&#39;.</td><td>[array]</td></tr><tr><td>--exclude-dependency</td><td>A list of dependencies to be excluded from the build result. The listed dependencies can be overruled by dependencies defined in &#39;include-dependency&#39;. The provided name must match with the dependency name shown in &#39;ui5 ls --flat&#39;</td><td>[array]</td></tr><tr><td>--exclude-dependency-regexp</td><td>A list of regular expressions defining dependencies to be excluded from the build result. This list is prioritized like &#39;exclude-dependency&#39;.</td><td>[array]</td></tr><tr><td>--exclude-dependency-tree</td><td>A list of dependencies to be excluded from the build result. Transitive dependencies are implicitly included and do not need to be part of this list.</td><td>[array]</td></tr><tr><td>--dest</td><td>Path of build destination</td><td>[string] [default: &quot;./dist&quot;]</td></tr><tr><td>--clean-dest</td><td>If present, clean the destination directory before building</td><td>[boolean] [default: false]</td></tr><tr><td>--create-build-manifest</td><td>Store build metadata in a &#39;.ui5&#39; directory in the build destination, allowing reuse of the build result in other builds</td><td>[boolean] [default: false]</td></tr><tr><td>--include-task</td><td>A list of tasks to be added to the default execution set. This option takes precedence over any excludes.</td><td>[array]</td></tr><tr><td>--exclude-task</td><td>A list of tasks to be excluded from the default task execution set</td><td>[array]</td></tr><tr><td>--framework-version</td><td>Overrides the framework version defined by the project. Takes the same value as the version part of &quot;ui5 use&quot;</td><td>[string]</td></tr><tr><td>--cache-mode</td><td>Cache mode to use when consuming SNAPSHOT versions of framework dependencies. The &#39;Default&#39; behavior is to invalidate the cache after 9 hours. &#39;Force&#39; uses the cache only and does not create any requests. &#39;Off&#39; invalidates any existing cache and updates from the repository</td><td>[string] [choices: &quot;Default&quot;, &quot;Force&quot;, &quot;Off&quot;] [default: &quot;Default&quot;]</td></tr><tr><td>--experimental-css-variables</td><td>Generate CSS variables (css-variables.css, css-variables.source.less) and skeleton (library-skeleton(-RTL).css) for all themes</td><td>[boolean] [default: false]</td></tr><tr><td>--output-style</td><td>Processes build results into a specific directory structure.</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td>- Flat: Omits the project namespace and the &quot;resources&quot; directory.</td><td></td></tr><tr><td></td><td>- Namespace: Respects the project namespace and the &quot;resources&quot; directory, maintaining the original structure.</td><td></td></tr><tr><td></td><td>- Default: The default directory structure for every project type. For applications, this is identical to &quot;Flat&quot;, and for libraries, it is &quot;Namespace&quot;. Other types have a more distinct default output style.</td><td>[string] [choices: &quot;Default&quot;, &quot;Flat&quot;, &quot;Namespace&quot;] [default: &quot;Default&quot;]</td></tr></tbody></table><p><strong>Examples</strong></p><p>Preload build for project without dependencies</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 build</span></span></code></pre></div><p>Self-contained build for project</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 build self-contained</span></span></code></pre></div><p>Build project but only apply the minify- and generateComponentPreload tasks</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 build --exclude-task=* --include-task=minify generateComponentPreload</span></span></code></pre></div><p>Build project by applying all default tasks including the minify task and excluding the generateComponentPreload task</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 build --include-task=minify --exclude-task=generateComponentPreload</span></span></code></pre></div><p>Preload build with experimental CSS variables artifacts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 build --experimental-css-variables</span></span></code></pre></div><h3 id="ui5-config" tabindex="-1">ui5 config <a class="header-anchor" href="#ui5-config" aria-label="Permalink to &quot;ui5 config&quot;">​</a></h3><p><strong>Description</strong></p><p>Get and set UI5 Tooling configuration options</p><p><strong>Usage</strong></p><p><code>ui5 config</code></p><p><strong>Child Commands</strong></p><table tabindex="0"><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>ui5 config set &lt;opt​ion&gt; [value]</td><td>Set the value for a given configuration option. Clear an existing configuration by omitting the value</td></tr><tr><td>ui5 config get &lt;opt​ion&gt;</td><td>Get the value for a given configuration option</td></tr><tr><td>ui5 config list</td><td>Display the current configuration</td></tr></tbody></table><p><strong>Examples</strong></p><p>Set a value for the ui5DataDir configuration</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 config set ui5DataDir /path/to/.ui5</span></span></code></pre></div><p>Unset the current value of the ui5DataDir configuration</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 config set ui5DataDir</span></span></code></pre></div><h3 id="ui5-init" tabindex="-1">ui5 init <a class="header-anchor" href="#ui5-init" aria-label="Permalink to &quot;ui5 init&quot;">​</a></h3><p><strong>Description</strong></p><p>Initialize the UI5 Tooling configuration for an application or library project.</p><p><strong>Usage</strong></p><p><code>ui5 init</code></p><h3 id="ui5-remove" tabindex="-1">ui5 remove <a class="header-anchor" href="#ui5-remove" aria-label="Permalink to &quot;ui5 remove&quot;">​</a></h3><p><strong>Description</strong></p><p>Remove SAPUI5/OpenUI5 framework libraries from the project configuration.</p><p><strong>Usage</strong></p><p><code>ui5 remove &lt;framework-libraries..&gt;</code></p><p><strong>Positionals</strong></p><table tabindex="0"><thead><tr><th>Positional</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>framework-libraries</td><td>Framework library names</td><td>[array] [required] [default: []]</td></tr></tbody></table><p><strong>Examples</strong></p><p>Remove the framework libraries sap.ui.core and sap.m as dependencies</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 remove sap.ui.core sap.m</span></span></code></pre></div><h3 id="ui5-serve" tabindex="-1">ui5 serve <a class="header-anchor" href="#ui5-serve" aria-label="Permalink to &quot;ui5 serve&quot;">​</a></h3><p><strong>Description</strong></p><p>Start a web server for the current project</p><p><strong>Usage</strong></p><p><code>ui5 serve</code></p><p><strong>Options</strong></p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>-p, --port</td><td>Port to bind on (default for HTTP: 8080, HTTP/2: 8443)</td><td>[number]</td></tr><tr><td>-o, --open</td><td>Open web server root directory in default browser. Optionally, supplied relative path will be appended to the root URL</td><td>[string]</td></tr><tr><td>--h2</td><td>Shortcut for enabling the HTTP/2 protocol for the web server</td><td>[boolean] [default: false]</td></tr><tr><td>--simple-index</td><td>Use a simplified view for the server directory listing</td><td>[boolean] [default: false]</td></tr><tr><td>--accept-remote-connections</td><td>Accept remote connections. By default the server only accepts connections from localhost</td><td>[boolean] [default: false]</td></tr><tr><td>--key</td><td>Path to the private key</td><td>[string] [default: &quot;/home/runner/.ui5/server/server.key&quot;]</td></tr><tr><td>--cert</td><td>Path to the certificate</td><td>[string] [default: &quot;/home/runner/.ui5/server/server.crt&quot;]</td></tr><tr><td>--sap-csp-policies</td><td>Always send content security policies &#39;sap-target-level-1&#39; and &#39;sap-target-level-3&#39; in report-only mode</td><td>[boolean] [default: false]</td></tr><tr><td>--serve-csp-reports</td><td>Collects and serves CSP reports upon request to &#39;/.ui5/csp/csp-reports.json&#39;</td><td>[boolean] [default: false]</td></tr><tr><td>--framework-version</td><td>Overrides the framework version defined by the project. Takes the same value as the version part of &quot;ui5 use&quot;</td><td>[string]</td></tr><tr><td>--cache-mode</td><td>Cache mode to use when consuming SNAPSHOT versions of framework dependencies. The &#39;Default&#39; behavior is to invalidate the cache after 9 hours. &#39;Force&#39; uses the cache only and does not create any requests. &#39;Off&#39; invalidates any existing cache and updates from the repository</td><td>[string] [choices: &quot;Default&quot;, &quot;Force&quot;, &quot;Off&quot;] [default: &quot;Default&quot;]</td></tr></tbody></table><p><strong>Examples</strong></p><p>Start a web server for the current project</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 serve</span></span></code></pre></div><p>Enable the HTTP/2 protocol for the web server (requires SSL certificate)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 serve --h2</span></span></code></pre></div><p>Use the project configuration from a custom path</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 serve --config /path/to/ui5.yaml</span></span></code></pre></div><p>Use a static dependency definition file</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 serve --dependency-definition /path/to/projectDependencies.yaml</span></span></code></pre></div><p>Listen to port 1337 and launch default browser with <a href="http://localhost:1337/test/QUnit.html" target="_self" rel="noreferrer">http://localhost:1337/test/QUnit.html</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 serve --port 1337 --open tests/QUnit.html</span></span></code></pre></div><h3 id="ui5-tree" tabindex="-1">ui5 tree <a class="header-anchor" href="#ui5-tree" aria-label="Permalink to &quot;ui5 tree&quot;">​</a></h3><p><strong>Description</strong></p><p>Outputs the dependency tree of the current project to stdout. It takes all relevant parameters of ui5 build into account.</p><p><strong>Usage</strong></p><p><code>ui5 tree</code></p><p><strong>Options</strong></p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>--flat</td><td>Output a flat list of all dependencies instead of a tree hierarchy</td><td>[boolean] [default: false]</td></tr><tr><td>--level</td><td>Limit the number of levels shown in the tree hierarchy</td><td>[number]</td></tr><tr><td>--framework-version</td><td>Overrides the framework version defined by the project. Takes the same value as the version part of &quot;ui5 use&quot;</td><td>[string]</td></tr><tr><td>--cache-mode</td><td>Cache mode to use when consuming SNAPSHOT versions of framework dependencies. The &#39;Default&#39; behavior is to invalidate the cache after 9 hours. &#39;Force&#39; uses the cache only and does not create any requests. &#39;Off&#39; invalidates any existing cache and updates from the repository</td><td>[string] [choices: &quot;Default&quot;, &quot;Force&quot;, &quot;Off&quot;] [default: &quot;Default&quot;]</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h3 id="ui5-use" tabindex="-1">ui5 use <a class="header-anchor" href="#ui5-use" aria-label="Permalink to &quot;ui5 use&quot;">​</a></h3><p><strong>Description</strong></p><p>Initialize or update the project&#39;s framework configuration.</p><p><strong>Usage</strong></p><p><code>ui5 use &lt;framework-info&gt;</code></p><p><strong>Positionals</strong></p><table tabindex="0"><thead><tr><th>Positional</th><th>Description</th><th>Details</th></tr></thead><tbody><tr><td>framework-info</td><td>Framework name, version or both (name@version).<br>Name can be &quot;SAPUI5&quot; or &quot;OpenUI5&quot; (case-insensitive).<br>Version can be &quot;latest&quot; (default), a version or range according to the Semantic Versioning specification (<a href="https://semver.org/" target="_self" rel="noreferrer">https://semver.org/</a>), or a tag available in the npm registry.<br>For SAP-internal usage the version can also be &quot;latest-snapshot&quot;, a version or range ending with -SNAPSHOT, or a simplified range such as &quot;1-SNAPSHOT&quot;, &quot;1.x-SNAPSHOT&quot; or &quot;1.108-SNAPSHOT&quot;.</td><td>[string] [required]</td></tr></tbody></table><p><strong>Examples</strong></p><p>Use SAPUI5 in the latest available version</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 use sapui5@latest</span></span></code></pre></div><p>Use OpenUI5 in the latest available 1.76 patch version</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 use openui5@1.76</span></span></code></pre></div><p>Use the latest available version of the configured framework</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 use latest</span></span></code></pre></div><p>Use OpenUI5 in the latest available version</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ui5 use openui5</span></span></code></pre></div><h3 id="ui5-versions" tabindex="-1">ui5 versions <a class="header-anchor" href="#ui5-versions" aria-label="Permalink to &quot;ui5 versions&quot;">​</a></h3><p><strong>Description</strong></p><p>Shows the versions of all UI5 Tooling modules</p><p><strong>Usage</strong></p><p><code>ui5 versions</code></p><h2 id="local-vs-global-installation" tabindex="-1">Local vs. Global Installation <a class="header-anchor" href="#local-vs-global-installation" aria-label="Permalink to &quot;Local vs. Global Installation&quot;">​</a></h2><p>In general, we recommend a global installation of the UI5 CLI (<code>npm install --global @ui5/cli</code>).</p><p>However, it makes sense to add the UI5 CLI as a <a href="https://docs.npmjs.com/files/package.json#devdependencies" target="_self" rel="noreferrer">devDependency</a> (<code>npm install --save-dev @ui5/cli</code>) to a project&#39;s <code>package.json</code>. This ensures that every developer working on the project uses the same version of the UI5 CLI and your continuous integration environments also uses this version.</p><p>In case you have both, a local installation in one of your projects as well as a global installation, the UI5 CLI will always try to invoke the local installation. This is in part because <a href="https://docs.npmjs.com/misc/scripts" target="_self" rel="noreferrer">npm scripts</a> defined in your <code>package.json</code> will also always invoke the local installation.</p><p>This behavior can be disabled by setting the environment variable <code>UI5_CLI_NO_LOCAL</code>.</p><p><strong>Example</strong><br> You have a project located in the directory <code>/my-application</code>.</p><p>You have installed the UI5 CLI globally. In addition, the project&#39;s <code>package.json</code> defines a <code>devDependency</code> to <code>@ui5/cli</code> and a start script <code>&quot;ui5 serve&quot;</code>. This means there are at least two installations of <code>@ui5/cli</code> on your system. Their versions might not match.</p><p>This table illustrates which of the two installations is used in different scenarios. Note how the UI5 CLI always tries to prefer the version installed in the project.</p><table tabindex="0"><thead><tr><th>Current Working Directory</th><th>Command</th><th style="text-align:center;">Global UI5 CLI</th><th style="text-align:center;">Local UI5 CLI</th></tr></thead><tbody><tr><td><code>/</code></td><td><code>ui5 --version</code></td><td style="text-align:center;">enabled</td><td style="text-align:center;"></td></tr><tr><td><code>/my-application</code></td><td><code>ui5 --version</code></td><td style="text-align:center;"></td><td style="text-align:center;">enabled</td></tr><tr><td><code>/my-application</code></td><td><code>ui5 serve</code></td><td style="text-align:center;"></td><td style="text-align:center;">enabled</td></tr><tr><td><code>/my-application</code></td><td><code>UI5_CLI_NO_LOCAL=X ui5 serve</code></td><td style="text-align:center;">enabled</td><td style="text-align:center;"></td></tr><tr><td><code>/my-application</code></td><td><code>npm start</code></td><td style="text-align:center;"></td><td style="text-align:center;">enabled</td></tr><tr><td><code>/my-application</code></td><td><code>UI5_CLI_NO_LOCAL=X npm start</code></td><td style="text-align:center;"></td><td style="text-align:center;">enabled</td></tr></tbody></table>`,140),n=[o];function d(r,l,p,c,u,h){return a(),e("div",null,n)}const m=t(i,[["render",d]]);export{b as __pageData,m as default};
