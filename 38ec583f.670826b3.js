(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(242)),i={id:"glossary",title:"Glossary"},l={unversionedId:"product-manuals/zeebe/appendix/glossary",id:"product-manuals/zeebe/appendix/glossary",isDocsHomePage:!1,title:"Glossary",description:"This section defines commonly used terminology referenced within the Zeebe documentation.",source:"@site/docs/product-manuals/zeebe/appendix/glossary.md",slug:"/product-manuals/zeebe/appendix/glossary",permalink:"/docs/product-manuals/zeebe/appendix/glossary",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/appendix/glossary.md",version:"current",sidebar:"camundaCloud",previous:{title:"Zeebe Operator (Experimental)",permalink:"/docs/product-manuals/zeebe/kubernetes/zeebe-operator"},next:{title:"Broker Configuration Templates",permalink:"/docs/product-manuals/zeebe/appendix/broker-config-template"}},c=[{value:"Broker",id:"broker",children:[]},{value:"Client",id:"client",children:[]},{value:"Cluster",id:"cluster",children:[]},{value:"Command",id:"command",children:[]},{value:"Correlation",id:"correlation",children:[]},{value:"Correlation Key",id:"correlation-key",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Event",id:"event",children:[]},{value:"Exporter",id:"exporter",children:[]},{value:"Follower",id:"follower",children:[]},{value:"Gateway",id:"gateway",children:[]},{value:"Incident",id:"incident",children:[]},{value:"Job",id:"job",children:[]},{value:"Job Activation Timeout",id:"job-activation-timeout",children:[]},{value:"Job Worker",id:"job-worker",children:[]},{value:"Leader",id:"leader",children:[]},{value:"Log",id:"log",children:[]},{value:"Message",id:"message",children:[]},{value:"Partition",id:"partition",children:[]},{value:"Record",id:"record",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Replication Factor",id:"replication-factor",children:[]},{value:"Request Timeout",id:"request-timeout",children:[]},{value:"Snapshot",id:"snapshot",children:[]},{value:"Segment",id:"segment",children:[]},{value:"Worker",id:"worker",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Workflow Instance",id:"workflow-instance",children:[]},{value:"Workflow Instance Variable",id:"workflow-instance-variable",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section defines commonly used terminology referenced within the Zeebe documentation."),Object(o.b)("h3",{id:"broker"},"Broker"),Object(o.b)("p",null,"A broker is an instance of a Zeebe installation which executes workflows and manages workflow state.  A single broker will be installed on a single machine."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/architecture#broker"}),"Architecture"))),Object(o.b)("h3",{id:"client"},"Client"),Object(o.b)("p",null,"A client interacts with the Zeebe broker on behalf of the business application. Clients poll for work from the broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/architecture#client"}),"Architecture"))),Object(o.b)("h3",{id:"cluster"},"Cluster"),Object(o.b)("p",null,"A cluster represents a configuration of one or more brokers collaborating to execute workflows.  Each broker in a cluster acts as a leader or a follower."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/clustering"}),"Clustering"))),Object(o.b)("h3",{id:"command"},"Command"),Object(o.b)("p",null,"A command represents an action to be taken or executed.  Example commands include: deploy a workflow, execute a workflow, etc."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/internal-processing#events-and-commands"}),"Internal Processing"))),Object(o.b)("h3",{id:"correlation"},"Correlation"),Object(o.b)("p",null,"Correlation refers to the act of matching a message with an inflight workflow instance."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/message-correlation/message-correlation"}),"Message Correlation"))),Object(o.b)("h3",{id:"correlation-key"},"Correlation Key"),Object(o.b)("p",null,"A correlation is an attribute within a message which is used to match this message against a certain variable within an inflight workflow instance.  If the value of the correlation key matches the value of the variable within the workflow instance, the message is matched to this workflow instance."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/message-correlation/message-correlation"}),"Message Correlation"))),Object(o.b)("h3",{id:"deployment"},"Deployment"),Object(o.b)("p",null,"A workflow cannot execute unless it is known by the broker.  Deployment is the process of pushing or deploying worklows to the broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/getting-started/deploy-a-workflow"}),"Getting Started Tutorial: Deploy a Workflow"))),Object(o.b)("h3",{id:"event"},"Event"),Object(o.b)("p",null,"An event represents a state change associated with an aspect of an executing workflow instance.  Events capture variable changes, state transition in workflow elements, etc.   An event will be represented by a timestamp, the variable name and variable value.  Events are stored in an append-only log."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/internal-processing#events-and-commands"}),"Internal Processing"))),Object(o.b)("h3",{id:"exporter"},"Exporter"),Object(o.b)("p",null,"An exporter represents a sink to which Zeebe will submitted all records within the log.  This gives users of Zeebe an opportunity to persist records with the log for future use as this data will not be available after log compaction."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/exporters"}),"Exporter"))),Object(o.b)("h3",{id:"follower"},"Follower"),Object(o.b)("p",null,"In a clustered environment, a broker which is not a leader is a follower of a given partition.  A follower can become the new leader when the old leader is no longer reachable."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"gateway"},"Gateway"),Object(o.b)("p",null,"Clients communicate with the Zeebe cluster through a gateway. The gateway provides a gRPC API and forwards client commands to the cluster. Depending on the setup, a gateway can be embedded in the broker or can be configured to be standalone."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/architecture#gateway"}),"Architecture"))),Object(o.b)("h3",{id:"incident"},"Incident"),Object(o.b)("p",null,"An incident represents an error condition which prevents Zeebe from advancing an executing workflow instance. Zeebe will create an incident if there was an uncaught exception thrown in your code and the number of retries of the given step has been exceeded."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/incidents"}),"Incident"))),Object(o.b)("h3",{id:"job"},"Job"),Object(o.b)("p",null,"A job represents a distinct unit of work within a business process. Service tasks represent such\njobs in your workflow and are identified by a unique id. A job has a type to allow specific job\nworkers to find jobs that they can work on."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/job-workers#what-is-a-job"}),"Job Workers"))),Object(o.b)("h3",{id:"job-activation-timeout"},"Job Activation Timeout"),Object(o.b)("p",null,"This is the amount of time the broker will wait for a complete or fail response from the job worker after a job has been submitted to the job worker for processing before it marks the job as available again for other job workers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/job-workers#requesting-jobs-from-the-broker"}),"Job Workers"))),Object(o.b)("h3",{id:"job-worker"},"Job Worker"),Object(o.b)("p",null,"A special type of client that polls for and executes available jobs. An uncompleted job prevents Zeebe from advancing workflow execution to the next step."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/job-workers"}),"Job Workers"))),Object(o.b)("h3",{id:"leader"},"Leader"),Object(o.b)("p",null,"In a clustered environment, one broker, the leader, is responsible for workflow execution and housekeeping of data within a partition.  Housekeeping includes, taking snapshots, replication and running exports."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"log"},"Log"),Object(o.b)("p",null,"The log comprises of an ordered sequence of records written to persistent storage. The log is appended-only and is stored on disk within the broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/partitions#partition-data-layout"}),"Partitions"))),Object(o.b)("h3",{id:"message"},"Message"),Object(o.b)("p",null,"A message contains information to be delivered to interested parties during execution of a workflow instance.  Messages can be published via Kafka or Zeebe\u2019s internal messaging system.  Messages are associated with timestamp and other constraints such as time-to-live (TTL)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/message-correlation/message-correlation"}),"Message Correlation"))),Object(o.b)("h3",{id:"partition"},"Partition"),Object(o.b)("p",null,"A partition represents a logical grouping of data in a Zeebe broker.  This data includes workflow instance variables stored in RocksDB, commands and events generated by Zeebe stored in the log. The number of partitions is defined by configuration."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/partitions"}),"Partitions"))),Object(o.b)("h3",{id:"record"},"Record"),Object(o.b)("p",null,"A record represents a command or an event. For example, a command to create a new workflow instance, or a state transition of an executing workflow instance representing an event at a given point in time would result to generation of a record.  During the execution lifecycle of a workflow instance, numerous records will be generated to capture various commands and events generated. Records are stored in the log."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/internal-processing#events-and-commands"}),"Internal Processing"))),Object(o.b)("h3",{id:"replication"},"Replication"),Object(o.b)("p",null,"Replication is the act of copying data in a partition from a leader to its followers within a clustered Zeebe installation.  After ",Object(o.b)("em",{parentName:"p"},"replication"),", the leader and followers of a partition will have the exact same data.  Replication allows the system to be resilient to brokers going down."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"replication-factor"},"Replication Factor"),Object(o.b)("p",null,"This is the number of times data in a partition will be copied and this depends on the number of brokers in a cluster.  A cluster with one leader and two followers will have a replication factor of three, as data in each partition needs to have three copies."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"request-timeout"},"Request Timeout"),Object(o.b)("p",null,"This is how long a client will wait for a response from the broker after the client has submitted a request.  If a response is not received within the client request timeout, the client can consider the broker unreachable."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/grpc"}),"gRPC API Reference"))),Object(o.b)("h3",{id:"snapshot"},"Snapshot"),Object(o.b)("p",null,"The state of all active workflows instances, (these are also known as inflight workflow instances) are stored as records in an in-memory database called  RocksDB.  A snapshot represents a copy of all data within the in-memory database at any given point in time.  Snapshots are binary images stored on disk and can be used to restore execution state of a workflow.   The size of a snapshot is affected by the size of the data.  Size of the data depends on several factors including complexity of the model or business process, the size and quantity of variables in each workflow instance as well as the total number of executing workflow instances in a broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/operations/resource-planning#snapshots"}),"Resource Planning"))),Object(o.b)("h3",{id:"segment"},"Segment"),Object(o.b)("p",null,"The log consists of one or more ",Object(o.b)("em",{parentName:"p"},"segments"),". Each ",Object(o.b)("em",{parentName:"p"},"segment")," is a file that contains an ordered sequence records. ",Object(o.b)("em",{parentName:"p"},"Segments")," are deleted when the log is compacted."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/operations/resource-planning#event-log"}),"Resource Planning"))),Object(o.b)("h3",{id:"worker"},"Worker"),Object(o.b)("p",null,"A worker executes a job.  In the Zeebe nomenclature, these are also referred to as job workers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/job-workers"}),"Job Workers"))),Object(o.b)("h3",{id:"workflow"},"Workflow"),Object(o.b)("p",null,"A workflow is a defined sequence of distinct steps representing your business logic. Examples of a\nworkflow could be an e-commerce shopping experience, onboarding a new employee, etc. In Zeebe,\nworkflows are identified by a unique process id. The workflow is usually also referred to as the\nBPMN model."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/workflows"}),"Workflows"))),Object(o.b)("h3",{id:"workflow-instance"},"Workflow Instance"),Object(o.b)("p",null,"While a workflow represents a defined sequence of distinct steps representing your business logic, a workflow instance represents a currently executing or completed workflow.  For a single workflow, there could be many associated ",Object(o.b)("em",{parentName:"p"},"workflow instances")," in various stages of their executing lifecycle.  Workflow instances are identitied by workflow instance id.  Executing workflows instances are also sometimes referred to as inflight workflows."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/basics/workflows"}),"Workflows"))),Object(o.b)("h3",{id:"workflow-instance-variable"},"Workflow Instance Variable"),Object(o.b)("p",null,"A workflow instance variable represents the execution state (i.e data) of a workflow instance.  These variables capture business process parameters which are input and output of various stages of the workflow instance and which also influence process flow execution."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/reference/variables"}),"Variables")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/bpmn-workflows/data-flow"}),"Data Flow"))))}b.isMDXComponent=!0},242:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);