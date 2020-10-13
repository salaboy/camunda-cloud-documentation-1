(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(242)),i={id:"release-cycle",title:"Release Cycle"},c={unversionedId:"product-manuals/zeebe/introduction/release-cycle",id:"product-manuals/zeebe/introduction/release-cycle",isDocsHomePage:!1,title:"Release Cycle",description:"Release Cycle",source:"@site/docs/product-manuals/zeebe/introduction/release-cycle.md",slug:"/product-manuals/zeebe/introduction/release-cycle",permalink:"/docs/product-manuals/zeebe/introduction/release-cycle",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/introduction/release-cycle.md",version:"current",sidebar:"camundaCloud",previous:{title:"Get Help & Get Involved",permalink:"/docs/product-manuals/zeebe/introduction/get-help-get-involved"},next:{title:"Zeebe Basics",permalink:"/docs/product-manuals/zeebe/basics/index"}},l=[{value:"Release Cycle",id:"release-cycle",children:[]},{value:"Breaking Changes Before Zeebe 1.0",id:"breaking-changes-before-zeebe-10",children:[]},{value:"Supported Environments",id:"supported-environments",children:[]},{value:"Camunda Cloud",id:"camunda-cloud",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"release-cycle"},"Release Cycle"),Object(o.b)("p",null,"The Zeebe project follows the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://semver.org/"}),"semantic version")," schema,\nwhich defines a version number using the ",Object(o.b)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH")," pattern."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MAJOR")," version can make incompatible API changes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MINOR")," version can add functionality in a backwards compatible manner"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PATCH")," version can make backwards compatible bug fixes.")),Object(o.b)("p",null,"The Zeebe team strives to release:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A new minor version of Zeebe every three months"),Object(o.b)("li",{parentName:"ul"},"In between minor versions, two alpha releases (to preview the upcoming minor version)")),Object(o.b)("p",null,"At the time of writing, Zeebe supports the last two released minor versions with\npatch releases. Patch releases are offered on a best effort basis for the\ncurrently supported versions."),Object(o.b)("h3",{id:"breaking-changes-before-zeebe-10"},"Breaking Changes Before Zeebe 1.0"),Object(o.b)("p",null,"Given how early we are in the Zeebe journey, we're not ready to make it a 1.0\nrelease, and we want it to be transparent that this was a deliberate decision.\nIf we do end up having to make breaking API changes, we'd rather do so before\nwe get to 1.0 and not by moving to 2.0 just a few months after a 1.0 release."),Object(o.b)("p",null,"Of course, even in Zeebe's pre-1.0 state, we'll always make our best effort to\navoid breaking changes, to communicate early and often about planned changes,\nand if possible, to provide a migration path if we do need to make such a change."),Object(o.b)("h3",{id:"supported-environments"},"Supported Environments"),Object(o.b)("h4",{id:"zeebe"},"Zeebe"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Zeebe Broker/Gateway")," the cluster components of Zeebe require OpenJDK 11+\nand optional if the Elasticsearch exporter is used Elasticsearch 6.8.x"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Zeebe Java Client")," the Java client for Zeebe requires OpenJDK 8+"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Zeebe Go Client")," the Go client for Zeebe requires Go 1.13+"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"zbctl")," the Zeebe CLI supports latest versions of Windows, MacOS and Linux")),Object(o.b)("h4",{id:"camunda-operate"},"Camunda Operate"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Operate Web App/Importer/Archiver")," the server components of Camunda\nOperate require OpenJDK 11+ and Elasticsearch 6.8.x"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Operate Browser App")," requires the latest version of Chrome, Firefox or\nEdge on Windows, MacOS and Linux")),Object(o.b)("h3",{id:"camunda-cloud"},"Camunda Cloud"),Object(o.b)("p",null,"Zeebe is built according to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/cncf/toc/blob/master/DEFINITION.md"}),"cloud-native\nprinciples"),", and we want\nZeebe to be the workflow engine for important, emerging use cases running on\nmodern software architectures."),Object(o.b)("p",null,"But even with a best-in-class architecture, operating a distributed workflow\nengine 24x7 can be challenging and time consuming. We've heard from a number of\nusers who would be happy to have us run Zeebe and Operate on their behalf."),Object(o.b)("p",null,"With that in mind, we have a dedicated team\u2013additional to the Zeebe core\nengineering team building the workflow engine\u2013currently working the first\niteration of Camunda Cloud, where we'll offer Zeebe and Operate as a cloud\nservice. This will be the first-ever cloud workflow service offered by Camunda,\nand we're really excited for what's ahead."),Object(o.b)("p",null,"If you'd like to be notified when we open up a beta program for Camunda Cloud,\nyou can ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://camunda.com/products/cloud/"}),"sign up here"),"."))}u.isMDXComponent=!0}}]);