import{_ as e,c as r,o as t,a4 as a}from"./chunks/framework.CDhG2y9Q.js";const m=JSON.parse('{"title":"UI5 FS","description":"","frontmatter":{},"headers":[],"relativePath":"docs/FileSystem.md","filePath":"docs/FileSystem.md"}'),i={name:"docs/FileSystem.md"},o=a('<h1 id="ui5-fs" tabindex="-1">UI5 FS <a class="header-anchor" href="#ui5-fs" aria-label="Permalink to &quot;UI5 FS&quot;">​</a></h1><p>The <a href="https://github.com/SAP/ui5-fs" target="_blank" rel="noreferrer">UI5 FS</a> provides a UI5-specific file system abstraction.</p><p><a href="https://sap.github.io/ui5-tooling/v4/api/" target="_blank" rel="noreferrer"><strong>API Reference</strong></a></p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The virtual file system &quot;UI5 FS&quot; offers an abstraction layer from the physical file system. Among other features, it can combine a set of scattered file locations into a well-defined virtual structure.</p><h3 id="resource" tabindex="-1">Resource <a class="header-anchor" href="#resource" aria-label="Permalink to &quot;Resource&quot;">​</a></h3><p>A <a href="https://sap.github.io/ui5-tooling/v4/api/@ui5_fs_Resource.html" target="_blank" rel="noreferrer">Resource</a> basically represents a file. Besides providing access to the file content, it also carries metadata like the <strong>virtual path</strong> of the Resource.</p><p>Resources are typically created and stored in <a href="#adapters">Adapters</a>. Once read from a physical file system, they are typically kept in memory for further processing in other modules.</p><p>This ensures a high build performance, as physical read and write access for a high number of resources is kept to a minimum.</p><h3 id="adapters" tabindex="-1">Adapters <a class="header-anchor" href="#adapters" aria-label="Permalink to &quot;Adapters&quot;">​</a></h3><p>Adapters abstract access to different resource locations.</p><p>The <a href="https://sap.github.io/ui5-tooling/v4/api/@ui5_fs_adapters_Memory.html" target="_blank" rel="noreferrer">Memory Adapter</a> represents a virtual file system which maintains respective <a href="#resource">Resources</a> inside a virtual data structure.</p><p>The <a href="https://sap.github.io/ui5-tooling/v4/api/@ui5_fs_adapters_FileSystem.html" target="_blank" rel="noreferrer">File System Adapter</a>, on the other hand, has direct access to the physical file system. It maps a &quot;virtual base path&quot; to a given physical path.</p><p>Both adapters provide APIs to retrieve and persist <a href="#resource">Resources</a>, namely</p><ul><li><p>to retrieve a single resource by its virtual path use <code>byPath()</code>,</p></li><li><p>to retrieve many resources based on patterns use <code>byGlob()</code>,</p></li><li><p>to persist a single resource use <code>write()</code>.</p></li></ul><h3 id="reader-collections" tabindex="-1">Reader Collections <a class="header-anchor" href="#reader-collections" aria-label="Permalink to &quot;Reader Collections&quot;">​</a></h3><p>Reader collections allow grouped access to multiple adapters, which might even be nested in other reader collections.</p><p>They implement the same API for <strong>retrieving</strong> resources as adapters (<code>byPath</code> and <code>byGlob</code>). Multiple flavors exist:</p><ul><li><p><a href="https://sap.github.io/ui5-tooling/v4/api/@ui5_fs_ReaderCollection.html" target="_blank" rel="noreferrer">ReaderCollection</a>: The most basic collection. Allows parallel read access to multiple readers (i.e. adapters or collections)</p></li><li><p><a href="https://sap.github.io/ui5-tooling/v4/api/@ui5_fs_ReaderCollectionPrioritized.html" target="_blank" rel="noreferrer">ReaderCollectionPrioritized</a>: Contains a list of readers which are searched in-order. This allows one reader to &quot;overlay&quot; resources of another</p></li><li><p><a href="https://sap.github.io/ui5-tooling/v4/api/@ui5_fs_DuplexCollection.html" target="_blank" rel="noreferrer">DuplexCollection</a>: Contains a single reader and a single &quot;writer&quot;. It therefore also implements the Adapter API for <strong>persisting</strong> resources (<code>write()</code>). When retrieving resources, the writer is prioritized over the reader</p></li><li><p><a href="https://sap.github.io/ui5-tooling/v4/api/@ui5_fs_WriterCollection.html" target="_blank" rel="noreferrer">WriterCollection</a>: Contains a set of writers and a mapping for each of them. When writing a resource, the writer is chosen based on the resource&#39;s virtual path.</p></li></ul>',19),s=[o];function l(n,c,p,h,d,u){return t(),r("div",null,s)}const g=e(i,[["render",l]]);export{m as __pageData,g as default};
