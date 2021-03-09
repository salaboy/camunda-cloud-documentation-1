(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{427:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(449)),c={id:"connect-to-your-cluster",title:"Connect to your cluster"},i={unversionedId:"guides/getting-started/connect-to-your-cluster",id:"guides/getting-started/connect-to-your-cluster",isDocsHomePage:!1,title:"Connect to your cluster",description:"Installation",source:"@site/docs/guides/getting-started/connect-to-your-cluster.md",slug:"/guides/getting-started/connect-to-your-cluster",permalink:"/docs/guides/getting-started/connect-to-your-cluster",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/guides/getting-started/connect-to-your-cluster.md",version:"current",sidebar:"Guides",previous:{title:"Setup client connection credentials",permalink:"/docs/guides/getting-started/setup-client-connection-credentials"},next:{title:"Model your first process",permalink:"/docs/guides/getting-started/model-your-first-process"}},l=[{value:"Installation",id:"installation",children:[]},{value:"First connection",id:"first-connection",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Install the appropriate package."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g zbctl\n")),Object(a.b)("h2",{id:"first-connection"},"First connection"),Object(a.b)("p",null,"After creating a client and downloading the connection file, you will now need to source it to make it available in your environment. If these are known to the system, a client can communicate directly with its own cluster in the cloud without further configuration."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"source ~/Downloads/CamundaCloudMgmtAPI-Client-test-client.txt\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"zbctl status\n")),Object(a.b)("p",null,"As a result you will get a similar response:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"Cluster size: 1\nPartitions count: 2\nReplication factor: 1\nGateway version: unavailable\nBrokers:\n  Broker 0 - zeebe-0.zeebe-broker-service.456637ef-8832-428b-a2a4-82b531b25635-zeebe.svc.cluster.local:26501\n    Version: unavailable\n    Partition 1 : Leader\n    Partition 2 : Leader\n")))}s.isMDXComponent=!0},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,g=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(g,i(i({ref:t},u),{},{components:n})):o.a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);