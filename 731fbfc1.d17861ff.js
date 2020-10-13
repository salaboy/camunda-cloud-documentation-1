(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var o=r(2),a=r(6),n=(r(0),r(242)),i={id:"tutorial-setup",title:"Tutorial Setup"},l={unversionedId:"product-manuals/zeebe/getting-started/tutorial-setup",id:"product-manuals/zeebe/getting-started/tutorial-setup",isDocsHomePage:!1,title:"Tutorial Setup",description:"Welcome to the Getting Started tutorial for Zeebe and Operate. In this tutorial, we'll walk you through how to...",source:"@site/docs/product-manuals/zeebe/getting-started/tutorial-setup.md",slug:"/product-manuals/zeebe/getting-started/tutorial-setup",permalink:"/docs/product-manuals/zeebe/getting-started/tutorial-setup",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/getting-started/tutorial-setup.md",version:"current",sidebar:"camundaCloud",previous:{title:"Tutorial",permalink:"/docs/product-manuals/zeebe/getting-started/index"},next:{title:"Create a Workflow",permalink:"/docs/product-manuals/zeebe/getting-started/create-a-workflow"}},c=[],u={rightToc:c};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Welcome to the Getting Started tutorial for Zeebe and Operate. In this tutorial, we'll walk you through how to..."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Model a workflow using Zeebe Modeler"),Object(n.b)("li",{parentName:"ul"},"Deploy the workflow to Zeebe"),Object(n.b)("li",{parentName:"ul"},"Create workflow instances"),Object(n.b)("li",{parentName:"ul"},"Use workers to complete jobs created by those workflow instances"),Object(n.b)("li",{parentName:"ul"},"Correlate messages to workflow instances"),Object(n.b)("li",{parentName:"ul"},"Monitor what's happening and get detail about running workflow instances in Operate")),Object(n.b)("p",null,"If this is your first time working with Zeebe, we expect this entire guide to take you 30-45 minutes to complete."),Object(n.b)("p",null,'If you\'re looking for a very fast (but less comprehensive) "first contact" experience, you might prefer the ',Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/introduction/quickstart"}),"Quickstart"),"."),Object(n.b)("p",null,"The tutorial assumes you have some basic knowledge of what Zeebe is and what it's used for. If you're completely new to Zeebe, you might find it helpful to read through the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/introduction/what-is-zeebe"}),'"What is Zeebe?"')," docs article first."),Object(n.b)("p",null,"Below are the components you'll use in the tutorial. The easiest way to run them is to download the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-modeler/releases"}),"Zeebe Modeler")," and use the ",Object(n.b)("inlineCode",{parentName:"p"},"operate")," docker-compose profile in the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-docker-compose"}),"zeebe-docker-compose")," repository. Further instructions for using Zeebe with Docker can be found in the README.md file in that repository."),Object(n.b)("p",null,"You can also download the full distributions for these components, instead of running them with Docker."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/zeebe-io/zeebe-modeler/releases"}),"Zeebe Modeler"),": A desktop modeling tool that we'll use to create and configure our workflow before we deploy it to Zeebe."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/zeebe-io/zeebe/releases/tag/0.20.0"}),"Zeebe Distribution"),": The Zeebe distribution contains the workflow engine where we'll deploy our workflow model; the engine is also responsible for managing the state of active workflow instances. Included in the distro is the Zeebe CLI, which we'll use throughout the tutorial. Please use Zeebe 0.20.0."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/zeebe-io/zeebe/releases/tag/0.20.0"}),"Camunda Operate"),": An operations tool for monitoring and troubleshooting live workflow instances in Zeebe. Operate is currently available for free and unrestricted ",Object(n.b)("em",{parentName:"li"},"non-production use"),"."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.elastic.co/downloads/past-releases/elasticsearch-6-8-0"}),"Elasticsearch 6.8.0"),": An open-source distributed datastore that can connect to Zeebe to store workflow data for auditing, visualization, analysis, etc. Camunda Operate uses Elasticsearch as its underlying datastore, which is why you need to download Elasticsearch to complete this tutorial. Operate and Zeebe are compatible with Elasticsearch 6.8.0.")),Object(n.b)("p",null,"In case you're already familiar with BPMN and how to create a BPMN model in Zeebe Modeler, you can find the finished model that we create during the tutorial here: ",Object(n.b)("a",{target:"_blank",href:r(265).default},"Zeebe Getting Started Tutorial Workflow Model"),". "),Object(n.b)("p",null,"If you're using the finished model we provide rather than building your own, you can also move ahead to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/getting-started/deploy-a-workflow"}),"section 3.3: Deploy a Workflow"),"."),Object(n.b)("p",null,"And if you have questions or feedback about the tutorial, we encourage you to visit the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://forum.zeebe.io"}),"Zeebe user forum")," and ask a question."),Object(n.b)("p",null,'There\'s a "Getting Started" category for topics that you can use when you ask your question or give feedback.'))}s.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),d=o,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||n;return r?a.a.createElement(f,l(l({ref:t},u),{},{components:r})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},265:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/files/order-process-aef371ddfb2ff65f51190fa213f5a271.bpmn"}}]);