(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),l=a(6),r=(a(0),a(242)),i={id:"call-activities",title:"Call Activities"},c={unversionedId:"product-manuals/zeebe/bpmn-workflows/call-activities/call-activities",id:"product-manuals/zeebe/bpmn-workflows/call-activities/call-activities",isDocsHomePage:!1,title:"Call Activities",description:"A call activity (aka reusable subprocess) allows to call/invoke another workflow as part of this workflow. It is similar to an embedded subprocess but the workflow is externalized (i.e. stored as separated BPMN) and can be invoked by different workflows.",source:"@site/docs/product-manuals/zeebe/bpmn-workflows/call-activities/call-activities.md",slug:"/product-manuals/zeebe/bpmn-workflows/call-activities/call-activities",permalink:"/docs/product-manuals/zeebe/bpmn-workflows/call-activities/call-activities",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/bpmn-workflows/call-activities/call-activities.md",version:"current",sidebar:"camundaCloud",previous:{title:"Embedded Subprocess",permalink:"/docs/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses"},next:{title:"Event Subprocess",permalink:"/docs/product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses"}},o=[{value:"Defining the Called Workflow",id:"defining-the-called-workflow",children:[]},{value:"Boundary Events",id:"boundary-events",children:[]},{value:"Variable Mappings",id:"variable-mappings",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],s={rightToc:o};function b(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A call activity (aka reusable subprocess) allows to call/invoke another workflow as part of this workflow. It is similar to an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses"}),"embedded subprocess")," but the workflow is externalized (i.e. stored as separated BPMN) and can be invoked by different workflows."),Object(r.b)("p",null,Object(r.b)("img",{alt:"call-activity",src:a(432).default})),Object(r.b)("p",null,"When a call activity is entered then a new workflow instance of the referenced workflow is created. The new workflow instance gets activated at the ",Object(r.b)("strong",{parentName:"p"},"none start event"),". The workflow can have start events of other types but they are ignored."),Object(r.b)("p",null,"When the created workflow instance is completed then the call activity is left and the outgoing sequence flow is taken."),Object(r.b)("h2",{id:"defining-the-called-workflow"},"Defining the Called Workflow"),Object(r.b)("p",null,"A call activity must define the BPMN process id of the called workflow as ",Object(r.b)("inlineCode",{parentName:"p"},"processId"),"."),Object(r.b)("p",null,"The new instance of the defined workflow will be created of its ",Object(r.b)("strong",{parentName:"p"},"latest version")," - at the point when the call activity is activated."),Object(r.b)("p",null,"Usually, the ",Object(r.b)("inlineCode",{parentName:"p"},"processId")," is defined as a static value (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"shipping-process"),") but it can also be defined as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/reference/expressions"}),"expression")," (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'= "shipping-" + tenantId'),"). The expression is evaluated on activating the call activity and must result in a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("h2",{id:"boundary-events"},"Boundary Events"),Object(r.b)("p",null,Object(r.b)("img",{alt:"call-activity-boundary-event",src:a(433).default})),Object(r.b)("p",null,"Interrupting and non-interrupting boundary events can be attached to a call activity."),Object(r.b)("p",null,"When an interrupting boundary event is triggered then the call activity ",Object(r.b)("strong",{parentName:"p"},"and")," the created workflow instance are terminated. The variables of the created workflow instance are not propagated to the call activity."),Object(r.b)("p",null,"When an non-interrupting boundary event is triggered then the created workflow instance is not affected. The activities at the outgoing path have no access to the variables of the created workflow instance since they are bounded to the other workflow instance."),Object(r.b)("h2",{id:"variable-mappings"},"Variable Mappings"),Object(r.b)("p",null,"When the call activity is activated then ",Object(r.b)("strong",{parentName:"p"},"all variables")," of the call activity scope are copied to the created workflow instance."),Object(r.b)("p",null,"Input mappings can be used to create new local variables in the scope of the call activity. These variables are also copied to the created workflow instance."),Object(r.b)("p",null,"If the attribute ",Object(r.b)("inlineCode",{parentName:"p"},"propagateAllChildVariables")," is set (default: ",Object(r.b)("inlineCode",{parentName:"p"},"true"),") then all variables of the created workflow instance are propagated to the call activity. This behavior can be customized by defining output mappings at the call activity. The output mappings are applied on completing the call activity and only those variables that are defined in the output mappings are propagated."),Object(r.b)("p",null,"It is recommended to disable the attribute ",Object(r.b)("inlineCode",{parentName:"p"},"propagateAllChildVariables")," or define output mappings if the call activity is in a parallel flow (e.g. when it is marked as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/bpmn-workflows/multi-instance/multi-instance#variable-mappings"}),"parallel multi-instance"),"). Otherwise, it can happen that variables are overridden accidentally when they are changed in the parallel flow."),Object(r.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(r.b)("details",null,Object(r.b)("summary",null,"XML representation"),Object(r.b)("p",null,"A call activity with static process id:",Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:callActivity id="task-A" name="A">\n  <bpmn:extensionElements>\n    <zeebe:calledElement processId="child-process-id" />\n  </bpmn:extensionElements>\n</bpmn:callActivity>\n')))),Object(r.b)("details",null,Object(r.b)("summary",null,"Using the BPMN modeler"),Object(r.b)("p",null,"Adding a call activity with static process id:",Object(r.b)("p",null,Object(r.b)("img",{alt:"call-activity",src:a(434).default})))),Object(r.b)("details",null,Object(r.b)("summary",null,"Workflow Lifecycle"),Object(r.b)("p",null,"Workflow instance records of a call activity:",Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Intent"),Object(r.b)("th",null,"Element Id"),Object(r.b)("th",null,"Element Type")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATING"),Object(r.b)("td",null,"task-a"),Object(r.b)("td",null,"CALL_ACTIVITY")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATED"),Object(r.b)("td",null,"task-a"),Object(r.b)("td",null,"CALL_ACTIVITY")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATING"),Object(r.b)("td",null,"child-process-id"),Object(r.b)("td",null,"PROCESS")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATED"),Object(r.b)("td",null,"child-process-id"),Object(r.b)("td",null,"PROCESS")),Object(r.b)("tr",null,Object(r.b)("td",null,"..."),Object(r.b)("td",null,"..."),Object(r.b)("td",null,"...")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_COMPLETED"),Object(r.b)("td",null,"child-process-id"),Object(r.b)("td",null,"PROCESS")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_COMPLETING"),Object(r.b)("td",null,"task-a"),Object(r.b)("td",null,"CALL_ACTIVITY")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_COMPLETED"),Object(r.b)("td",null,"task-a"),Object(r.b)("td",null,"CALL_ACTIVITY"))),Object(r.b)("p",null,"The workflow instance records of the created workflow instance have a reference to its parent workflow instance (",Object(r.b)("inlineCode",{parentName:"p"},"parentWorkflowInstanceKey"),") and the element instance of the call activity (",Object(r.b)("inlineCode",{parentName:"p"},"parentElementInstanceKey"),")."))),Object(r.b)("p",null,"References:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/expressions"}),"Expressions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/variables#variable-scopes"}),"Variable Scopes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/variables#inputoutput-variable-mappings"}),"Variable Mappings"))))}b.isMDXComponent=!0},242:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return a?l.a.createElement(f,c(c({ref:t},s),{},{components:a})):l.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},432:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/call-activities-example-7688f849caadb26c9052867416700582.png"},433:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},434:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/bpmn-modeler-call-activity-d49120ebbbaebe39e59b4a6269b7b6ea.gif"}}]);