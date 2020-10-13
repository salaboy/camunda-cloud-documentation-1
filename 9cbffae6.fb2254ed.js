(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(242)),c={id:"selections-batch-operations",title:"Selections & Batch Operations"},i={unversionedId:"product-manuals/operate/userguide/selections-batch-operations",id:"product-manuals/operate/userguide/selections-batch-operations",isDocsHomePage:!1,title:"Selections & Batch Operations",description:"In some cases, you\u2019ll need to retry or cancel many workflow instances at once. Operate also supports this type of batch operation.",source:"@site/docs/product-manuals/operate/userguide/selections-batch-operations.md",slug:"/product-manuals/operate/userguide/selections-batch-operations",permalink:"/docs/product-manuals/operate/userguide/selections-batch-operations",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/operate/userguide/selections-batch-operations.md",version:"current",sidebar:"camundaCloud",previous:{title:"Variables & Incidents",permalink:"/docs/product-manuals/operate/userguide/resolve-incidents-update-variables"},next:{title:"Giving Feedback And Asking Questions",permalink:"/docs/product-manuals/operate/userguide/operate-feedback-and-questions"}},s=[],l={rightToc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In some cases, you\u2019ll need to retry or cancel many workflow instances at once. Operate also supports this type of batch operation."),Object(o.b)("p",null,"Imagine a case where many workflow instances have an incident incident caused by the same issue. At some point, the underlying problem will have been resolved (for example, maybe a microservice was down for an extended period of time then was brought back up). "),Object(o.b)("p",null,"But even though the underlying problem was resolved, the affected workflow instances are stuck until they\u2019re \u201cretried\u201d."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(414).default})),Object(o.b)("p",null,"Let's create a ",Object(o.b)("em",{parentName:"p"},"selection")," in Operate. A selection is simply a set of workflow instances on which you can carry out a batch retry or batch cancellation. To create a selection, check the box next to the workflow instances you'd like to include, then click on the blue \u201cCreate Selection\u201d button. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(415).default})),Object(o.b)("p",null,"Your selection will appear in the right-side ",Object(o.b)("em",{parentName:"p"},"Selections")," panel."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(416).default})),Object(o.b)("p",null,"You can retry or cancel the workflow instances in the selection immediately, or you can come back to the selection later\u2013your selection will remain saved. And you can add more workflow instances to the selection after it was initially created via the blue \u201cAdd To Selection\u201d button. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(417).default})),Object(o.b)("p",null,"When you\u2019re ready to carry out an operation, you can simply return to the selection and retry or cancel the workflow instances as a batch. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(418).default})),Object(o.b)("p",null,"If the operation was successful, the state of the workflow instances will be updated to active and without incident."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(419).default})))}u.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Batch-Many-Instances-With-Incident-7918da360e1f3af9d3db192e2bd33f76.png"},415:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Batch-Create-Selection-7963fb512981d10148a8953961db2b0e.png"},416:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Batch-Selection-Created-4358f64e25745dde4e4f118ebc6cb281.png"},417:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Batch-Selection-Saved-8ac41f0245ef3102a98a599c3903f836.png"},418:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Batch-Cancel-Or-Retry-1d3ee7fecd4357521e79d3fa977aa7bc.png"},419:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Batch-Retry-Successful-c73e1f84150cb9025098a18c6ace9e0c.png"}}]);