(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,d=b["".concat(s,".").concat(p)]||b[p]||m[p]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(243)),s={id:"backpressure",title:"Backpressure"},o={unversionedId:"product-manuals/zeebe/operations/backpressure",id:"product-manuals/zeebe/operations/backpressure",isDocsHomePage:!1,title:"Backpressure",description:"When a broker receives a client request, it is written to the event stream first (see section Internal Processing for details), and processed later by the stream processor.",source:"@site/docs/product-manuals/zeebe/operations/backpressure.md",slug:"/product-manuals/zeebe/operations/backpressure",permalink:"/docs/product-manuals/zeebe/operations/backpressure",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/operations/backpressure.md",version:"current",sidebar:"camundaCloud",previous:{title:"Health Status",permalink:"/docs/product-manuals/zeebe/operations/health"},next:{title:"Disk Space",permalink:"/docs/product-manuals/zeebe/operations/disk-space"}},c=[{value:"Terminologies",id:"terminologies",children:[]},{value:"Backpressure algorithms",id:"backpressure-algorithms",children:[]},{value:"Gradient",id:"gradient",children:[]},{value:"Gradient2",id:"gradient2",children:[]},{value:"Backpressure Tuning",id:"backpressure-tuning",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When a broker receives a client request, it is written to the ",Object(i.b)("em",{parentName:"p"},"event stream")," first (see section ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/basics/internal-processing"}),"Internal Processing")," for details), and processed later by the stream processor.\nIf the processing is slow or if there are many client requests in the stream, it might take too long for the processor to start processing the command.\nIf the broker keeps accepting new requests from the client, the back log increases and the processing latency can grow beyond an acceptable time.\nTo avoid such problems, Zeebe employs a backpressure mechanism.\nWhen the broker receives more requests than it can process with an acceptable latency, it rejects some requests (see section ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/reference/grpc"}),"Error handling"),")."),Object(i.b)("h3",{id:"terminologies"},"Terminologies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"RTT")," - The time between the request is accepted by the broker and the response to the request is sent back to the gateway."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"inflight count")," - The number of requests accepted by the broker but the response is not yet sent."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"limit")," - maximum number of flight requests. When the inflight count is above the limit, any new incoming request will be rejected.")),Object(i.b)("p",null,"Note that the limit and inflight count are calculated per partition."),Object(i.b)("h3",{id:"backpressure-algorithms"},"Backpressure algorithms"),Object(i.b)("p",null,"Zeebe uses adaptive algorithms from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Netflix/concurrency-limits"}),"concurrency-limits")," to dynamically calculate the limit.\nZeebe can be configured with one of the following backpressure algorithms."),Object(i.b)("h4",{id:"fixed-limit"},"Fixed Limit"),Object(i.b)("p",null,"With \u201cfixed limit\u201d one can configure a fixed value of the limit.\nZeebe operators are recommended to evaluate the latencies observed with different values for limit.\nNote that with different cluster configurations, you may have to choose different limit values."),Object(i.b)("h4",{id:"aimd"},"AIMD"),Object(i.b)("p",null,"AIMD calculates the limit based on the configured ",Object(i.b)("em",{parentName:"p"},"requestTimeout"),".\nWhen the RTT for a request ",Object(i.b)("em",{parentName:"p"},"requestTimeout"),", the limit is increased by 1.\nWhen the RTT is longer than ",Object(i.b)("em",{parentName:"p"},"requestTimeout"),",\nthe limit will be reduced according to the configured ",Object(i.b)("em",{parentName:"p"},"backoffRatio"),"."),Object(i.b)("h4",{id:"vegas"},"Vegas"),Object(i.b)("p",null,"Vegas is an adaptive limit algorithm based on TCP Vegas congestion control algorithm.\nVegas estimates a base latency as the minimum observed latency.\nThis base RTT is the expected latency when there is no load.\nWhenever the RTT deviates from the base RTT, a new limit is calculated based on the vegas algorithm.\nVegas allows to configure two parameters - ",Object(i.b)("em",{parentName:"p"},"alpha")," and ",Object(i.b)("em",{parentName:"p"},"beta"),".\nThe values correspond to a queue size that is estimated by the Vegas algorithm based on the observed RTT, base RTT, and current limit.\nWhen the queue size is below ",Object(i.b)("em",{parentName:"p"},"alpha"),", the limit is increased.\nWhen the queue size is above ",Object(i.b)("em",{parentName:"p"},"beta"),", the limit is decreased."),Object(i.b)("h3",{id:"gradient"},"Gradient"),Object(i.b)("p",null,"Gradient is an adaptive limit algorithm that dynamically calculates the limit based on observed RTT.\nIn the gradient algorithm, the limit is adjusted based on the gradient of observed RTT and an observed minimum RTT.\nIf gradient is less than 1, the limit is decreased otherwise the limit is increased."),Object(i.b)("h3",{id:"gradient2"},"Gradient2"),Object(i.b)("p",null,"Gradient2 is similar to Gradient, but instead of using observed minimum RTT as the base, it uses and exponentially smoothed average RTT."),Object(i.b)("h2",{id:"backpressure-tuning"},"Backpressure Tuning"),Object(i.b)("p",null,"The goal of backpressure is to keep the processing latency low.\nThe processing latency is calculated as the time between the command is written to the event stream until it is processed.\nHence to see how backpressure behaves you can run a benchmark on your cluster and observe\nthe following metrics."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zeebe_stream_processor_latency_bucket")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zeebe_dropped_request_count_total")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zeebe_received_request_count_total")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zeebe_backpressure_requests_limit"))),Object(i.b)("p",null,"You may want to run the benchmark with different load"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"With low load - where the number of requests send per second is low."),Object(i.b)("li",{parentName:"ol"},"With high load - where the number of requests sent per second is above what zeebe can process within a reasonable latency.")),Object(i.b)("p",null,"If the value of the limit is small, the processing latency will be small but the number of rejected requests may be high.\nIf the value of the limit is large, less requests may be rejected (depending on the request rate),\nbut the processing latency may increase."),Object(i.b)("p",null,'When using "fixed limit", you can run the benchmark with different values for the limit.\nYou can then determine a suitable value for a limit for which the processing latency (',Object(i.b)("inlineCode",{parentName:"p"},"zeebe_stream_processor_latency_bucket"),") is within the desired latency."),Object(i.b)("p",null,'When using "AIMD", you can configure a ',Object(i.b)("em",{parentName:"p"},"requestTimeout"),' which corresponds to a desired latency.\nNote that during high load "AIMD" can lead to a processing latency two times more than the configured ',Object(i.b)("em",{parentName:"p"},"requestTimeout"),".\nIt is also recommended to configure a ",Object(i.b)("em",{parentName:"p"},"minLimit")," to prevent the limit from aggressively dropping during constant high load."),Object(i.b)("p",null,'When using "Vegas", you cannot configure the backpressure to a desired latency.\nInstead Vegas tries to keep the RTT as low as possible based on the observed minimum RTT.'),Object(i.b)("p",null,'Similar to "Vegas", you cannot configure the desired latency in "Gradient" and "Gradient2".\nThey calculated the limit based on the gradient of observed RTT from the expected RTT.\nHigher the value of ',Object(i.b)("em",{parentName:"p"},"rttTolerance"),", higher deviations are tolerated that results in higher values for limit."),Object(i.b)("p",null,"If a lot of requests are rejected due to backpressure, it might indicate that the processing capacity of the cluster is not enough to handle the expected throughput.\nIf this is the expected workload, then you might consider a different configuration for the cluster such as provisioning more resources and, increasing the number of nodes and partitions."))}u.isMDXComponent=!0}}]);