import{_ as a,c as e,o as i,a4 as s}from"./chunks/framework.B94ikmwp.js";const g=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"GettingStarted.md","filePath":"GettingStarted.md"}'),t={name:"GettingStarted.md"},n=s(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="installing-the-ui5-cli" tabindex="-1">Installing the UI5 CLI <a class="header-anchor" href="#installing-the-ui5-cli" aria-label="Permalink to &quot;Installing the UI5 CLI&quot;">​</a></h2><h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> Versions v20.11.0, v22.0.0, or higher</li></ul><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Global installation to have the command available</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ui5/cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Additional local install in your project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ui5/cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Verify installation</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><p>The globally installed UI5 CLI will always try to invoke a locally installed version of the UI5 CLI (if present). This way you can use different versions of the UI5 Tooling across your projects. Please see the <a href="./CLI.html#local-vs-global-installation">UI5 CLI documentation</a> for details.</p><h2 id="⚡️-quick-start-openui5-sample-app" tabindex="-1">⚡️ Quick Start: OpenUI5 Sample App <a class="header-anchor" href="#⚡️-quick-start-openui5-sample-app" aria-label="Permalink to &quot;⚡️ Quick Start: OpenUI5 Sample App&quot;">​</a></h2><p>Check out the <a href="https://github.com/SAP/openui5-sample-app" target="_blank" rel="noreferrer">OpenUI5 Sample App</a> featuring a full blown <a href="https://github.com/SAP/openui5-sample-app/#openui5-sample-app" target="_blank" rel="noreferrer">How-to</a> to play around with UI5 Tooling!</p><h2 id="starting-a-new-project" tabindex="-1">Starting a New Project <a class="header-anchor" href="#starting-a-new-project" aria-label="Permalink to &quot;Starting a New Project&quot;">​</a></h2><p>The easiest way to start a new UI5 project is to use a template generator like <a href="https://github.com/SAP/generator-easy-ui5" target="_blank" rel="noreferrer"><strong>generator-easy-ui5</strong></a>.</p><p>Choose a template that is designed for the type of project you want to create and the target environment where you want to deploy it to. Make sure that the template already uses UI5 Tooling. A good indicator for that is the presence of a <code>ui5.yaml</code> file in the generated project.</p><p>When working with SAP Business Application Studio, there are several templates available to you. Check out the tutorial on creating a basic SAPUI5 application and deploying it to Cloud Foundry from within SAP Business Application Studio: <a href="https://developers.sap.com/tutorials/appstudio-fioriapps-create.html" target="_blank" rel="noreferrer">Create an SAP Fiori App Using SAP Business Application Studio</a></p><p>You can find many guides on UI5 development with SAP Business Application Studio in the <a href="https://developers.sap.com/tutorial-navigator.html?tag=topic:sapui5&amp;tag=products:technology-platform/sap-business-application-studio" target="_blank" rel="noreferrer">Tutorial Navigator</a>.</p><h2 id="enabling-an-existing-project" tabindex="-1">Enabling an Existing Project <a class="header-anchor" href="#enabling-an-existing-project" aria-label="Permalink to &quot;Enabling an Existing Project&quot;">​</a></h2><p>You can easily check whether or not a project (application or library) can already be used with the UI5 Tooling by looking for a <code>ui5.yaml</code> file in the project&#39;s root directory.<br> This file (with some exceptions) is required for all projects and their dependencies (e.g. reuse libraries) to use them in the UI5 Tooling.</p><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>If your project is not set up for use with the UI5 Tooling yet, follow these steps:</p><ol><li><p>If your project does not have a <code>package.json</code> file, let npm generate it:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --yes</span></span></code></pre></div></li><li><p>Generate the <code>ui5.yaml</code> file:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div></li><li><p>Define the framework you want to use</p></li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-VMayL" id="tab-p3kfFkd" checked><label for="tab-p3kfFkd">OpenUI5</label><input type="radio" name="group-VMayL" id="tab-31clOfG"><label for="tab-31clOfG">SAPUI5</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openui5@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sapui5@latest</span></span></code></pre></div></div></div><p>You can choose between the OpenUI5 and the SAPUI5 framework.</p><p>Don&#39;t know which one to choose? Check out our <a href="/ui5-tooling/v4/docs/FAQ.html#what-s-the-difference-between-openui5-and-sapui5">documentation on the differences between OpenUI5 and SAPUI5</a>.</p><ol><li><p>Add required libraries</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sap.ui.core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sap.m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sap.ui.table</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themelib_sap_fiori_3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # [...]</span></span></code></pre></div><p>You can find a documentation of all libraries, including samples and more, in the Demo Kit:</p><ul><li><a href="https://openui5.hana.ondemand.com/api" target="_blank" rel="noreferrer"><strong>OpenUI5</strong> Demo Kit</a></li><li><a href="https://ui5.sap.com/#/api" target="_blank" rel="noreferrer"><strong>SAPUI5</strong> Demo Kit</a></li></ul></li><li><p>Start the server and work on your project! 🎉</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span></span></code></pre></div></li></ol><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Use <code>ui5 serve</code> to start a local development server and <code>ui5 build --all</code> to produce an optimized, static version of your project, which you can then deploy to your production environment.</p><p>Find more information here:</p><p><a href="./Server.html">Server</a><a href="./Builder.html">Builder</a><a href="./CLI.html">CLI</a></p></div><ol><li>If you are using Git or similar version control, commit <code>package.json</code> and <code>ui5.yaml</code> to your repository.<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui5.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Enable use with UI5 Tooling&quot;</span></span></code></pre></div></li></ol><p><strong>Hooray! You can now use UI5 Tooling in your project!</strong></p>`,26),l=[n];function o(p,r,h,d,c,u){return i(),e("div",null,l)}const m=a(t,[["render",o]]);export{g as __pageData,m as default};
