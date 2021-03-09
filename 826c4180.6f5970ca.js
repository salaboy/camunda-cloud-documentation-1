(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{262:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(449)),c={},l={unversionedId:"product-manuals/zeebe/tasklist-deployment-guide/configuration",id:"version-0.25/product-manuals/zeebe/tasklist-deployment-guide/configuration",isDocsHomePage:!1,title:"configuration",description:"Introduction",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/tasklist-deployment-guide/configuration.md",slug:"/product-manuals/zeebe/tasklist-deployment-guide/configuration",permalink:"/docs/0.25/product-manuals/zeebe/tasklist-deployment-guide/configuration",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/tasklist-deployment-guide/configuration.md",version:"0.25"},o=[{value:"Settings to connect",id:"settings-to-connect",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml",children:[]},{value:"Settings to connect",id:"settings-to-connect-1",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml-1",children:[]},{value:"Settings to connect and import:",id:"settings-to-connect-and-import",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml-2",children:[]},{value:"Example snippets to use Tasklist probes in Kubernetes:",id:"example-snippets-to-use-tasklist-probes-in-kubernetes",children:[{value:"Readiness probe as yaml config:",id:"readiness-probe-as-yaml-config",children:[]},{value:"Liveness probe as yaml config:",id:"liveness-probe-as-yaml-config",children:[]},{value:"JSON logging configuration",id:"json-logging-configuration",children:[]}]}],s={rightToc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Tasklist is a Spring Boot application. That means all ways to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config"}),"configure"),"\na Spring Boot application can be applied. By default, the configuration for Tasklist is stored in a YAML file ",Object(i.b)("inlineCode",{parentName:"p"},"application.yml"),". All Tasklist related settings are prefixed\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"zeebe.tasklist"),". The following parts are configurable:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#elasticsearch"}),"Elasticsearch Connection")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#zeebe-broker-connection"}),"Zeebe Broker connection")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#zeebe-elasticsearch-exporter"}),"Zeebe Elasticsearch Exporter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/tasklist-deployment-guide/authentication"}),"Authentication")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#monitoring-and-health-probes"}),"Monitoring and health probes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#logging"}),"Logging configuration"))),Object(i.b)("h1",{id:"configurations"},"Configurations"),Object(i.b)("h1",{id:"elasticsearch"},"Elasticsearch"),Object(i.b)("p",null,"Tasklist stores and reads data in/from Elasticsearch."),Object(i.b)("h2",{id:"settings-to-connect"},"Settings to connect"),Object(i.b)("p",null,"Tasklist supports ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/setting-up-authentication.html"}),"basic authentication")," for elasticsearch.\nSet the appropriate username/password combination in the configuration to use it."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.clusterName"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clustername of Elasticsearch"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elasticsearch")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.url"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of Elasticsearch REST API"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"http://localhost:9200")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.username"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username to access Elasticsearch REST API"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.password"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to access Elasticsearch REST API"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h2",{id:"a-snippet-from-applicationyml"},"A snippet from application.yml:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"zeebe.tasklist:\n  elasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: http://localhost:9200\n")),Object(i.b)("h1",{id:"zeebe-broker-connection"},"Zeebe Broker Connection"),Object(i.b)("p",null,"Tasklist needs a connection to Zeebe Broker to start the import."),Object(i.b)("h2",{id:"settings-to-connect-1"},"Settings to connect"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebe.brokerContactPoint"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Broker contact point to zeebe as hostname and port"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"localhost:26500")))),Object(i.b)("h2",{id:"a-snippet-from-applicationyml-1"},"A snippet from application.yml:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"zeebe.tasklist:\n  zeebe:\n    # Broker contact point\n    brokerContactPoint: localhost:26500\n")),Object(i.b)("h1",{id:"zeebe-elasticsearch-exporter"},"Zeebe Elasticsearch Exporter"),Object(i.b)("p",null,"Tasklist imports data from Elasticsearch indices created and filled in by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/exporters/elasticsearch-exporter"}),"Zeebe Elasticsearch Exporter"),".\nTherefore settings for this Elasticsearch connection must be defined and must correspond to the settings on Zeebe side."),Object(i.b)("h2",{id:"settings-to-connect-and-import"},"Settings to connect and import:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.clusterName"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cluster name of Elasticsearch"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elasticsearch")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.url"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of Elasticsearch REST API"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"http://localhost:9200")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.prefix"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Index prefix as configured in Zeebe Elasticsearch exporter"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe-record")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.username"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username to access Elasticsearch REST API"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.password"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to access Elasticsearch REST API"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h2",{id:"a-snippet-from-applicationyml-2"},"A snippet from application.yml:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"zeebe.tasklist:\n  zeebeElasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: http://localhost:9200\n    # Index prefix, configured in Zeebe Elasticsearch exporter\n    prefix: zeebe-record\n")),Object(i.b)("h1",{id:"monitoring-and-health-probes"},"Monitoring and health probes"),Object(i.b)("p",null,"Tasklist includes ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready"}),"Spring Boot Actuator")," inside, that\nprovides number of monitoring possibilities., e.g. health check (http://localhost:8080/actuator/health) and metrics (http://localhost:8080/actuator/prometheus) endpoints."),Object(i.b)("p",null,"Tasklist uses following Actuator configuration by default:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# enable health check and metrics endpoints\nmanagement.endpoints.web.exposure.include: health,prometheus\n# enable Kubernetes health groups:\n# https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-kubernetes-probes\nmanagement.health.probes.enabled: true\n")),Object(i.b)("p",null,"With this configuration following endpoints are available for use out of the box:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<server>:8080/actuator/prometheus")," Prometheus metrics"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<server>:8080/actuator/health/liveness")," Liveness probe"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<server>:8080/actuator/health/readiness")," Readiness probe"),Object(i.b)("h2",{id:"example-snippets-to-use-tasklist-probes-in-kubernetes"},"Example snippets to use Tasklist probes in Kubernetes:"),Object(i.b)("p",null,"For details to set Kubernetes probes parameters see: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Kubernetes configure probes")),Object(i.b)("h3",{id:"readiness-probe-as-yaml-config"},"Readiness probe as yaml config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"readinessProbe:\n     httpGet:\n        path: /actuator/health/readiness\n        port: 8080\n     initialDelaySeconds: 30\n     periodSeconds: 30\n")),Object(i.b)("h3",{id:"liveness-probe-as-yaml-config"},"Liveness probe as yaml config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"livenessProbe:\n     httpGet:\n        path: /actuator/health/liveness\n        port: 8080\n     initialDelaySeconds: 30\n     periodSeconds: 30\n")),Object(i.b)("h1",{id:"logging"},"Logging"),Object(i.b)("p",null,"Tasklist uses Log4j2 framework for logging. In distribution archive as well as inside a Docker image ",Object(i.b)("inlineCode",{parentName:"p"},"config/log4j2.xml")," logging configuration files is included,\nthat can be further adjusted to your needs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<Configuration status="WARN" monitorInterval="30">\n  <Properties>\n    <Property name="LOG_PATTERN">%clr{%d{yyyy-MM-dd HH:mm:ss.SSS}}{faint} %clr{%5p} %clr{${sys:PID}}{magenta} %clr{---}{faint} %clr{[%15.15t]}{faint} %clr{%-40.40c{1.}}{cyan} %clr{:}{faint} %m%n%xwEx</Property>\n  </Properties>\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT" follow="true">\n      <PatternLayout pattern="${LOG_PATTERN}"/>\n    </Console>\n    <Console name="Stackdriver" target="SYSTEM_OUT" follow="true">\n      <StackdriverJSONLayout/>\n    </Console>\n  </Appenders>\n  <Loggers>\n    <Logger name="io.zeebe.tasklist" level="info" />\n    <Root level="info">\n      <AppenderRef ref="${env:TASKLIST_LOG_APPENDER:-Console}"/>\n    </Root>\n  </Loggers>\n</Configuration>\n')),Object(i.b)("p",null,"By default Console log appender will be used."),Object(i.b)("h3",{id:"json-logging-configuration"},"JSON logging configuration"),Object(i.b)("p",null,"You can choose to output logs in JSON format (Stackdriver compatible). To enable it, define\nthe environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"TASKLIST_LOG_APPENDER")," like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"TASKLIST_LOG_APPENDER=Stackdriver\n")),Object(i.b)("h1",{id:"an-example-of-applicationyml-file"},"An example of application.yml file"),Object(i.b)("p",null,"The following snippet represents the default Tasklist configuration, which is shipped with the distribution. It can be found inside the ",Object(i.b)("inlineCode",{parentName:"p"},"config")," folder (",Object(i.b)("inlineCode",{parentName:"p"},"config/application.yml"),")\nand can be used to adjust Tasklist to your needs."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Tasklist configuration file\n\nzeebe.tasklist:\n  # Set Tasklist username and password.\n  # If user with <username> does not exists it will be created.\n  # Default: demo/demo\n  #username:\n  #password:\n  # ELS instance to store Tasklist data\n  elasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: http://localhost:9200\n  # Zeebe instance\n  zeebe:\n    # Broker contact point\n    brokerContactPoint: localhost:26500\n  # ELS instance to export Zeebe data to\n  zeebeElasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: http://localhost:9200\n    # Index prefix, configured in Zeebe Elasticsearch exporter\n    prefix: zeebe-record\n")))}b.isMDXComponent=!0},449:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);