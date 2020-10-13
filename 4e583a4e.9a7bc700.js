(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(242)),o={},l={unversionedId:"product-manuals/zeebe/tasklist-deployment-guide/authentication",id:"product-manuals/zeebe/tasklist-deployment-guide/authentication",isDocsHomePage:!1,title:"authentication",description:"Authentication",source:"@site/docs/product-manuals/zeebe/tasklist-deployment-guide/authentication.md",slug:"/product-manuals/zeebe/tasklist-deployment-guide/authentication",permalink:"/docs/product-manuals/zeebe/tasklist-deployment-guide/authentication",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/tasklist-deployment-guide/authentication.md",version:"current"},c=[{value:"Enable Single Sign-On",id:"enable-single-sign-on",children:[]},{value:"Configure Single Sign-On",id:"configure-single-sign-on",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"authentication"},"Authentication"),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Tasklist provides two ways for authentication:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Authenticate with user information stored in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#user-in-elasticsearch"}),"Elasticsearch")),Object(i.b)("li",{parentName:"ol"},"Authenticate via ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#auth0-single-sign-on"}),"Auth0 Single Sign-On provider"))),Object(i.b)("p",null,"By default user storage in Elasticsearch is enabled."),Object(i.b)("h1",{id:"user-in-elasticsearch"},"User in Elasticsearch"),Object(i.b)("p",null,"In this mode the user authenticates with username and password, that are stored in Elasticsearch.\n",Object(i.b)("strong",{parentName:"p"},"username")," and ",Object(i.b)("strong",{parentName:"p"},"password")," for one user may be set in application.yml:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"zeebe.tasklist:\n  username: anUser\n  password: aPassword\n")),Object(i.b)("p",null,"On Tasklist startup the user will be created if not existed before."),Object(i.b)("p",null,"By default one user with ",Object(i.b)("strong",{parentName:"p"},"username"),"/",Object(i.b)("strong",{parentName:"p"},"password")," ",Object(i.b)("inlineCode",{parentName:"p"},"demo"),"/",Object(i.b)("inlineCode",{parentName:"p"},"demo")," will be created."),Object(i.b)("p",null,"More users can be added directly to Elasticsearch, to the index ",Object(i.b)("inlineCode",{parentName:"p"},"tasklist-user-<version>_"),". Password must be encoded with BCrypt strong hashing function."),Object(i.b)("h1",{id:"auth0-single-sign-on"},"Auth0 Single Sign-On"),Object(i.b)("p",null,"Currently Tasklist supports Auth0.com implementation of Single Sign-On."),Object(i.b)("h2",{id:"enable-single-sign-on"},"Enable Single Sign-On"),Object(i.b)("p",null,"Single Sign-On may be enabled only by setting ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"}),"Spring profile"),": ",Object(i.b)("inlineCode",{parentName:"p"},"sso-auth")),Object(i.b)("p",null,"Example for setting spring profile as environmental variable:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"export SPRING_PROFILES_ACTIVE=sso-auth\n")),Object(i.b)("h2",{id:"configure-single-sign-on"},"Configure Single Sign-On"),Object(i.b)("p",null,"Single Sign-On needs following parameters (all are mandatory):"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parametername"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.auth0.domain"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines the domain which the user sees")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.auth0.backendDomain"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines the domain which provides user information")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.auth0.clientId"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It's like an user name for the application")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.auth0.clientSecret"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It's like a password for the application")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.auth0.claimName"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The claim that will be checked by Tasklist. It's like a permission name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.auth0.organization"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The given organization should be contained in value of claim name")))),Object(i.b)("p",null,"Example for setting parameters as environment variables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"export ZEEBE_TASKLIST_AUTH0_DOMAIN=A_DOMAIN\nexport ZEEBE_TASKLIST_AUTH0_BACKENDDOMAIN=A_BACKEND_DDOMAIN\nexport ZEEBE_TASKLIST_AUTH0_CLIENTID=A_CLIENT_ID\nexport ZEEBE_TASKLIST_AUTH0_CLIENTSECRET=A_SECRET\nexport ZEEBE_TASKLIST_AUTH0_CLAIMNAME=A_CLAIM\nexport ZEEBE_TASKLIST_AUTH0_ORGANIZATION=AN_ORGANIZATION\n")))}s.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);