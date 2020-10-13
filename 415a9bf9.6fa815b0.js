(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),s=n(6),b=(n(0),n(242)),c={id:"event-subprocesses",title:"Event Subprocess"},l={unversionedId:"product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses",id:"product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses",isDocsHomePage:!1,title:"Event Subprocess",description:"An event subprocess is a subprocess that is triggered by an event. It can be added globally to the process or locally inside an embedded subprocess.",source:"@site/docs/product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses.md",slug:"/product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses",permalink:"/docs/product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses.md",version:"current",sidebar:"camundaCloud",previous:{title:"Call Activities",permalink:"/docs/product-manuals/zeebe/bpmn-workflows/call-activities/call-activities"},next:{title:"Overview",permalink:"/docs/product-manuals/zeebe/bpmn-workflows/markers"}},o=[{value:"Variables",id:"variables",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],a={rightToc:o};function u(e){var t=e.components,c=Object(s.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},a,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"An event subprocess is a subprocess that is triggered by an event. It can be added globally to the process or locally inside an embedded subprocess."),Object(b.b)("p",null,Object(b.b)("img",{alt:"event-subprocess",src:n(338).default})),Object(b.b)("p",null,"An event subprocess must have exactly one start event of one of the following types:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/bpmn-workflows/timer-events/timer-events"}),"Timer")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/bpmn-workflows/message-events/message-events"}),"Message")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/bpmn-workflows/error-events/error-events"}),"Error"))),Object(b.b)("p",null,"An event subprocess behaves like a boundary event but is inside the scope instead of being attached to the scope. Like a boundary event, the event subprocess can be interrupting or non-interrupting (indicated in BPMN by a solid or dashed border of the start event). The start event of the event subprocess can be triggered when its containing scope is activated."),Object(b.b)("p",null,"A non-interrupting event subprocess can be triggered multiple times. An interrupting event subprocess can be triggered only once."),Object(b.b)("p",null,"When an interrupting event subprocess is triggered then ",Object(b.b)("strong",{parentName:"p"},"all active instances")," of its containing scope are terminated, including instances of other non-interrupting event subprocesses."),Object(b.b)("p",null,"If an event subprocess is triggered then its containing scope is not completed until the triggered instance is completed."),Object(b.b)("h2",{id:"variables"},"Variables"),Object(b.b)("p",null,"Unlike a boundary event, an event subprocess is inside the scope. So, it can access and modify ",Object(b.b)("strong",{parentName:"p"},"all local variables")," of its containing scope. This is not possible with a boundary event because a boundary event is outside of the scope."),Object(b.b)("p",null,"Input mappings can be used to create new local variables in the scope of the event subprocess. These variables are only visible within the event subprocess."),Object(b.b)("p",null,"By default, the local variables of the event subprocess are not propagated (i.e. they are removed with the scope). This behavior can be customized by defining output mappings at the event subprocess. The output mappings are applied on completing the event subprocess."),Object(b.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(b.b)("details",null,Object(b.b)("summary",null,"XML representation"),Object(b.b)("p",null,"An event subprocess with an interrupting timer start event:",Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:subProcess id="compensate-subprocess" triggeredByEvent="true">\n  <bpmn:startEvent id="cancel-order" isInterrupting="true">\n    <bpmn:timerEventDefinition>\n      <bpmn:timeDuration>PT5M</bpmn:timeDuration>\n    </bpmn:timerEventDefinition>\n  ... other elements\n</bpmn:subProcess>\n')))),Object(b.b)("details",null,Object(b.b)("summary",null,"Using the BPMN modeler"),Object(b.b)("p",null,"Adding an event subprocess with an interrupting timer start event:",Object(b.b)("p",null,Object(b.b)("img",{alt:"event-subprocess",src:n(339).default})))),Object(b.b)("details",null,Object(b.b)("summary",null,"Workflow Lifecycle"),Object(b.b)("p",null,"Workflow instance records of an event subprocess with an interrupting timer start event:",Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Intent"),Object(b.b)("th",null,"Element Id"),Object(b.b)("th",null,"Element Type")),Object(b.b)("tr",null,Object(b.b)("td",null,"EVENT_OCCURRED"),Object(b.b)("td",null,"five-minutes"),Object(b.b)("td",null,"START_EVENT")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_TERMINATING"),Object(b.b)("td",null,"fetch-item"),Object(b.b)("td",null,"SERVICE_TASK")),Object(b.b)("tr",null,Object(b.b)("td",null,"..."),Object(b.b)("td",null,"..."),Object(b.b)("td",null,"...")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_TERMINATED"),Object(b.b)("td",null,"fetch-item"),Object(b.b)("td",null,"SERVICE_TASK")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_ACTIVATING"),Object(b.b)("td",null,"compensate-subprocess"),Object(b.b)("td",null,"SUB_PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_ACTIVATED"),Object(b.b)("td",null,"compensate-subprocess"),Object(b.b)("td",null,"SUB_PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_ACTIVATING"),Object(b.b)("td",null,"five-minutes"),Object(b.b)("td",null,"START_EVENT")),Object(b.b)("tr",null,Object(b.b)("td",null,"..."),Object(b.b)("td",null,"..."),Object(b.b)("td",null,"...")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETED"),Object(b.b)("td",null,"order-cancelled"),Object(b.b)("td",null,"END_EVENT")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETING"),Object(b.b)("td",null,"compensate-subprocess"),Object(b.b)("td",null,"SUB_PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETED"),Object(b.b)("td",null,"compensate-subprocess"),Object(b.b)("td",null,"SUB_PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETING"),Object(b.b)("td",null,"order-process"),Object(b.b)("td",null,"PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETED"),Object(b.b)("td",null,"order-process"),Object(b.b)("td",null,"PROCESS"))))),Object(b.b)("p",null,"References:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses"}),"Embedded Subprocess")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/variables#variable-scopes"}),"Variable Scopes"))))}u.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),s=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=s.a.createContext({}),u=function(e){var t=s.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return s.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),i=u(n),d=r,O=i["".concat(c,".").concat(d)]||i[d]||p[d]||b;return n?s.a.createElement(O,l(l({ref:t},a),{},{components:n})):s.a.createElement(O,l({ref:t},a))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var a=2;a<b;a++)c[a]=n[a];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},338:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/event-subprocess-0cfa6f43ac303689b827b52124473329.png"},339:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-event-subprocess-9408193dbc73c03bade20c04dde84691.gif"}}]);