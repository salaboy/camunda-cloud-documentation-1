(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(242)),c=n(250),i=n(251),s={id:"implement-service-task",title:"Implement a Service Task"},u={unversionedId:"guides/getting-started/implement-service-task",id:"guides/getting-started/implement-service-task",isDocsHomePage:!1,title:"Implement a Service Task",description:"Use This workflow model for the tutorial.",source:"@site/docs/guides/getting-started/implement-service-task.md",slug:"/guides/getting-started/implement-service-task",permalink:"/docs/guides/getting-started/implement-service-task",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/guides/getting-started/implement-service-task.md",version:"current",sidebar:"camundaCloud",previous:{title:"Deploy your process and start a process instance",permalink:"/docs/guides/getting-started/deploy-your-process-and-start-process-instance"},next:{title:"Implement a decision gateway",permalink:"/docs/guides/getting-started/implement-decision-gateway"}},l=[],f={rightToc:l};function d(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use ",Object(o.b)("a",{target:"_blank",href:n(411).default},"This workflow model")," for the tutorial."),Object(o.b)("p",null,Object(o.b)("img",{alt:"processId",src:n(412).default})),Object(o.b)("p",null,"This workflow includes a Service Task and an XOR Gateway. Select the Service Task and fill in the properties. Set the task-type to 'test-worker'."),Object(o.b)("p",null,Object(o.b)("img",{alt:"workflow",src:n(413).default})),Object(o.b)("p",null,"Deploy the new workflow. Now you can connect a worker for the configured service task:"),Object(o.b)(c.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'zbctl create worker test-worker --handler "echo {\\"return\\":\\"Pong\\"}"\n')))))}d.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},243:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},246:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},247:function(e,t,n){"use strict";var r=n(0),a=n(246);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},250:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(247),c=n(243),i=n(47),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,f=e.values,d=e.groupId,p=Object(o.a)(),m=p.tabGroupChoices,b=p.setTabGroupChoices,g=Object(r.useState)(i),v=g[0],y=g[1],O=Object(r.useState)(!1),w=O[0],h=O[1];if(null!=d){var j=m[d];null!=j&&j!==v&&f.some((function(e){return e.value===j}))&&y(j)}var k=function(e){y(e),null!=d&&b(d,e)},T=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},x=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",x)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),E(e)},onFocus:function(){return k(t)},onClick:function(){k(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},251:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},411:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/gettingstarted_quickstart_advanced-646d264a8a9461758b6da49526d2f48b.bpmn"},412:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-advanced-process-id-ba87c7843ffe2e1b32fface4519e29d0.png"},413:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-advanced-58ba09349350703a2a0812ef2694129c.png"}}]);