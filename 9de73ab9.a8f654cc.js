(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(450)),i={id:"metrics",title:"Metrics"},c={unversionedId:"product-manuals/zeebe/operations/metrics",id:"version-0.25/product-manuals/zeebe/operations/metrics",isDocsHomePage:!1,title:"Metrics",description:"When operating a distributed system like Zeebe, it is important to put proper monitoring in place.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/operations/metrics.md",slug:"/product-manuals/zeebe/operations/metrics",permalink:"/docs/0.25/product-manuals/zeebe/operations/metrics",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/operations/metrics.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Setting up a Zeebe Cluster",permalink:"/docs/0.25/product-manuals/zeebe/operations/setting-up-a-cluster"},next:{title:"Deploying to Kubernetes",permalink:"/docs/0.25/product-manuals/zeebe/operations/kubernetes"}},s=[{value:"Types of metrics",id:"types-of-metrics",children:[]},{value:"Metrics Format",id:"metrics-format",children:[]},{value:"Configuring Metrics",id:"configuring-metrics",children:[]},{value:"Connecting Prometheus",id:"connecting-prometheus",children:[]},{value:"Available Metrics",id:"available-metrics",children:[]},{value:"Grafana",id:"grafana",children:[]}],l={rightToc:s};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When operating a distributed system like Zeebe, it is important to put proper monitoring in place.\nTo facilitate this, Zeebe exposes an extensive set of metrics."),Object(o.b)("p",null,"Zeebe exposes metrics over an embedded HTTP server."),Object(o.b)("h2",{id:"types-of-metrics"},"Types of metrics"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Counters"),": a time series that records a growing count of some unit. Examples: number of bytes transmitted over the network, number of workflow instances started, ..."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Gauges"),": a time series that records the current size of some unit. Examples: number of currently open client connections, current number of partitions, ...")),Object(o.b)("h2",{id:"metrics-format"},"Metrics Format"),Object(o.b)("p",null,"Zeebe exposes metrics directly in Prometheus text format.\nThe details of the format can be read in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details"}),"Prometheus documentation"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'# HELP zeebe_stream_processor_events_total Number of events processed by stream processor\n# TYPE zeebe_stream_processor_events_total counter\nzeebe_stream_processor_events_total{action="written",partition="1",} 20320.0\nzeebe_stream_processor_events_total{action="processed",partition="1",} 20320.0\nzeebe_stream_processor_events_total{action="skipped",partition="1",} 2153.0\n')),Object(o.b)("h2",{id:"configuring-metrics"},"Configuring Metrics"),Object(o.b)("p",null,"The HTTP server to export the metrics can be configured in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/appendix/broker-config-template"}),"configuration file"),"."),Object(o.b)("h2",{id:"connecting-prometheus"},"Connecting Prometheus"),Object(o.b)("p",null,"As explained, Zeebe exposes the metrics over a HTTP server. The default port is ",Object(o.b)("inlineCode",{parentName:"p"},"9600"),"."),Object(o.b)("p",null,"Add the following entry to your ",Object(o.b)("inlineCode",{parentName:"p"},"prometheus.yml"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"- job_name: zeebe\n  scrape_interval: 15s\n  metrics_path: /metrics\n  scheme: http\n  static_configs:\n  - targets:\n    - localhost: 9600\n")),Object(o.b)("h2",{id:"available-metrics"},"Available Metrics"),Object(o.b)("p",null,"All Zeebe related metrics have a ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe_"),"-prefix."),Object(o.b)("p",null,"Most metrics have the following common label:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"partition"),": cluster-unique id of the partition")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Metrics related to workflow processing:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_stream_processor_events_total"),": The number of events processed by the stream processor.\nThe ",Object(o.b)("inlineCode",{parentName:"li"},"action")," label separates processed, skipped and written events. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_exporter_events_total"),": The number of events processed by the exporter processor.\nThe ",Object(o.b)("inlineCode",{parentName:"li"},"action")," label separates exported and skipped events. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_element_instance_events_total"),": The number of occurred workflow element instance events.\nThe ",Object(o.b)("inlineCode",{parentName:"li"},"action")," label separates the number of activated, completed and terminated elements.\nThe ",Object(o.b)("inlineCode",{parentName:"li"},"type")," label separates different BPMN element types."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_running_workflow_instances_total"),": The number of currently running workflow instances, i.e.\nnot completed or terminated."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_job_events_total"),": The number of job events. The ",Object(o.b)("inlineCode",{parentName:"li"},"action")," label separates the number of\ncreated, activated, timed out, completed, failed and canceled jobs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_pending_jobs_total"),": The number of currently pending jobs, i.e. not completed or terminated."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_incident_events_total"),": The number of incident events. The ",Object(o.b)("inlineCode",{parentName:"li"},"action")," label separates the number\nof created and resolved incident events."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_pending_incidents_total"),": The number of currently pending incident, i.e. not resolved.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Metrics related to performance:")),Object(o.b)("p",null,"Zeebe has a back-pressure mechanism by which it rejects requests, when it receives more requests than it can handle with out incurring high processing latency.\nThe following metrics can be used to monitor back-pressure and processing latency of the commands."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_dropped_request_count_total"),": The number of user requests rejected by the broker due to backpressure."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_backpressure_requests_limit"),": The limit for the number of inflight requests used for backpressure."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"zeebe_stream_processor_latency_bucket"),": The processing latency for commands and event.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Metrics related to health:")),Object(o.b)("p",null,"The health of partitions in a broker can be monitored by the metric ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe_health"),". "),Object(o.b)("h2",{id:"grafana"},"Grafana"),Object(o.b)("p",null,"Zeebe comes with a pre-built dashboard, available in the repository:\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/monitor/grafana/zeebe.json"}),"monitor/grafana/zeebe.json")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://grafana.com/docs/grafana/latest/reference/export_import/#importing-a-dashboard"}),"Import"),"\nit into your Grafana instance, then select the correct Prometheus data source (important if you have more than one), and\nyou should be greeted with the following dashboard:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"cluster",src:n(755).default})))}b.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},755:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/grafana-preview-b55d5882a8636cf3b0bae96bcfb29658.png"}}]);