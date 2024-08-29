import{_ as e,c as a,o as t,a4 as n}from"./chunks/framework.DPb0tF91.js";const p=JSON.parse('{"title":"Development Conventions and Guidelines","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Guidelines.md","filePath":"guide/Guidelines.md"}'),o={name:"guide/Guidelines.md"},i=n(`<h1 id="development-conventions-and-guidelines" tabindex="-1">Development Conventions and Guidelines <a class="header-anchor" href="#development-conventions-and-guidelines" aria-label="Permalink to &quot;Development Conventions and Guidelines&quot;">​</a></h1><h2 id="javascript-coding-guidelines" tabindex="-1">JavaScript Coding Guidelines <a class="header-anchor" href="#javascript-coding-guidelines" aria-label="Permalink to &quot;JavaScript Coding Guidelines&quot;">​</a></h2><p>We enforce code style rules using <a href="https://eslint.org" target="_blank" rel="noreferrer">ESLint</a>. Execute <code>npm run lint</code> to check your code for style issues.<br> You may also find an ESLint integration for your favorite IDE <a href="https://eslint.org/docs/user-guide/integrations" target="_blank" rel="noreferrer">here</a>.</p><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h2><p>Unit testing is based on the <a href="https://github.com/avajs/ava" target="_blank" rel="noreferrer">ava</a> test-framework. You can run all tests using <code>npm test</code> (this is what our CI will do for all pull requests).</p><p>During development, you might want to use <code>npm run unit</code> or <code>npm run unit-watch</code> (re-runs tests automatically after file changes) to quickly execute all unit tests and see whether your change just broke one of them. 😉</p><h2 id="git-guidelines" tabindex="-1">Git Guidelines <a class="header-anchor" href="#git-guidelines" aria-label="Permalink to &quot;Git Guidelines&quot;">​</a></h2><h3 id="no-merge-commits" tabindex="-1">No Merge Commits <a class="header-anchor" href="#no-merge-commits" aria-label="Permalink to &quot;No Merge Commits&quot;">​</a></h3><p>Please use <a href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing" target="_blank" rel="noreferrer">rebase instead of merge</a> to update a branch to the latest main. This helps keeping a clean commit history in the project.</p><h3 id="commit-message-style" tabindex="-1">Commit Message Style <a class="header-anchor" href="#commit-message-style" aria-label="Permalink to &quot;Commit Message Style&quot;">​</a></h3><h4 id="commit-summary" tabindex="-1">Commit Summary <a class="header-anchor" href="#commit-summary" aria-label="Permalink to &quot;Commit Summary&quot;">​</a></h4><p>The commit summary is the first line of the commit message.</p><ul><li>It should be <strong>50-70 characters</strong> long.</li><li>It must be <strong>prefixed</strong> by <code>[FIX]</code>, <code>[FEATURE]</code> or <code>[INTERNAL]</code> accordingly, followed by the name of the component or module which was the main subject of the change. <ul><li>Use <code>[FIX]</code> for bugfixes.</li><li>Use <code>[FEATURE]</code> for new features / enhancements.</li><li>Use <code>[BREAKING]</code> for breaking / incompatible changes.<br><em><strong>Note:</strong> The commit body of a breaking change should also include a paragraph starting with <code>BREAKING CHANGE:</code>.<br> This paragraph will be highlighted in the changelog.</em></li><li>Use <code>[DEPENDENCY]</code> for dependency updates that should be mentioned in the changelog.</li><li>Use <code>[INTERNAL]</code> for all other changes (e.g. refactorings, documentation, etc.). These changes will not be listed in the changelog.</li><li>Exceptions are changes created by automated processes like releases or dependency updates</li></ul></li><li>It must not contain <code>[</code> or <code>]</code> anywhere but in the prefix.</li><li>It shall be written in <strong>imperative present tense</strong> (as recommended by <a href="https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project" target="_blank" rel="noreferrer">Git</a>) <ul><li>Examples: Instead of <em>&quot;Adding tests for&quot;</em> or <em>&quot;I added tests for&quot;</em> use <em>&quot;Add tests for&quot;</em> or <em>&quot;Add feature xy&quot;</em>.</li></ul></li></ul><h4 id="commit-body" tabindex="-1">Commit Body <a class="header-anchor" href="#commit-body" aria-label="Permalink to &quot;Commit Body&quot;">​</a></h4><p>After the commit summary there should be an empty line followed by the commit body.</p><ul><li>Describe the intention and reasoning of the change</li><li>If a change fixes an issue reported on GitHub, add the following line to the commit message: <ul><li><code>Fixes: #&lt;issueNumber&gt;</code> (e.g. <code>Fixes: #42</code>)</li></ul></li><li>Breaking changes should include a paragraph starting with <code>BREAKING CHANGE:</code>. This paragraph will be highlighted in the changelog.</li></ul><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[FIX] npm translator: Correct handling of devDependencies</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- devDevependencies should only be included in certain cases</span></span>
<span class="line"><span>- Was caused by a refactoring</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Fixes: #42</span></span>
<span class="line"><span>Fixes: #45</span></span></code></pre></div><h2 id="work-on-release-branches" tabindex="-1">Work on Release Branches <a class="header-anchor" href="#work-on-release-branches" aria-label="Permalink to &quot;Work on Release Branches&quot;">​</a></h2><p>Major releases are typically prepared on dedicated branches like <code>next</code>.</p><p>There are some things to be aware of when working on these branches.</p><h3 id="implementing-changes-in-multiple-code-lines" tabindex="-1">Implementing Changes in Multiple Code Lines <a class="header-anchor" href="#implementing-changes-in-multiple-code-lines" aria-label="Permalink to &quot;Implementing Changes in Multiple Code Lines&quot;">​</a></h3><p>While working on a new major release (e.g. <code>5.0.0</code>), any fixes or new features implemented on the <strong>current</strong> (main) code line (e.g. 4.x) should be cherry-picked as <code>[INTERNAL]</code> to the dedicated (pre-)release branch (typically <code>next</code>). This is to prevent changes declared as <code>[FEATURE]</code> or <code>[FIX]</code> from appearing in the changelog twice, which can be confusing since the new major version has not yet been released and should naturally contain any fixes or features released in any of the preceding releases. Listing them twice might confuse users. Note that our changelog is generated based on all tags of the repository, independent of the currently checked out branch (also see <a href="https://github.com/git-chglog/git-chglog/issues/123" target="_blank" rel="noreferrer">git-chglog/issues/123</a>).</p><p>However, once a new major release becomes <strong>current</strong> (i.e. &quot;main&quot;, not a pre-release), any changes applied to multiple code lines should be cherry picked with the original prefix, so that they appear for multiple versions in the changelog.</p>`,24),s=[i];function r(l,c,d,h,m,u){return t(),a("div",null,s)}const b=e(o,[["render",r]]);export{p as __pageData,b as default};
