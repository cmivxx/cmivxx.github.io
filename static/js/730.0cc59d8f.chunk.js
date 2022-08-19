"use strict";(self.webpackChunkcmivxx_github_io=self.webpackChunkcmivxx_github_io||[]).push([[730],{730:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var o=n(2791),r=n(1523),a=n(6842),i=n(184),c=function(e){var t=e.data;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,i.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},s=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,i.jsx)(c,{data:e},e.company)}))]})};s.defaultProps={data:[]};var l=s;function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=n(9611);function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var m=n(1002);function f(e,t){if(t&&("object"===(0,m.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}var y=n(4942),h=n(1413),b=function(e){var t=e.handleClick,n=e.active,o=e.label;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[o]?"skillbutton-active":""),type:"button",onClick:function(){return t(o)},children:o})},v=function(e){var t=e.data,n=e.categories,o=t.category,r=t.competency,a=t.title,c={background:n.filter((function(e){return o.includes(e.name)})).map((function(e){return e.color}))[0]},s=(0,h.Z)((0,h.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:c,children:(0,i.jsx)("span",{children:a})}),(0,i.jsx)("div",{className:"skillbar-bar",style:s}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};v.defaultProps={categories:[]};var j=v,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,p.Z)(e,t)}(a,e);var t,n,o,r=g(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,o){return(0,h.Z)((0,h.Z)({},n),{},(0,y.Z)({},o,e===o&&!t.buttons[o]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,h.Z)((0,h.Z)({},e),{},(0,y.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,i.jsx)(j,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,i.jsx)(b,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Skills"})}),(0,i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&d(t.prototype,n),o&&d(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.Component);S.defaultProps={skills:[],categories:[]};var k=S,w=function(){return(0,i.jsxs)("div",{className:"references",children:[(0,i.jsx)("div",{className:"link-to",id:"references"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)(r.rU,{to:"/contact",children:(0,i.jsx)("h3",{children:"References are available upon request"})})})]})},x=[{company:"Saatva Mattress",position:"Software Engineering Support Manager",link:"https://saatva.com",daterange:"January 2021 - Present",points:["Lead the support team which was available 24x7 that handles all technical issues with their front-end web application, their production logistics platform and all apps in between.","Took part in all hiring, mentoring and career development of all new engineering employees both domestic or international.","Worked directly with the architecture team as a contributing member on proof-of-concept development to solution planning.","Played a key role in optimizing the engineering departments development cycle and develop and enforce coding standards among all contributing developers.","Evaluated all 3rd party application integrations from a support perspective in order to be able to manage the appliation post installation.","Worked closely with all integrations from 3rd party logistics providers internal applications.","Administered all applications and their access across the entire organization including Google Cloud, JetBrains Suite, GitHub, GA/GAE/GTM, Atlassian Suite and more."]},{company:"Saatva Mattress",position:"Senior Software Developer",link:"https://saatva.com",daterange:"March 2018 - December 2020",points:["Lead architecture design of large scale custom logistics and manufacturing system supporting 150+ independent furniture manufacturing to order submission and process tracking all the way to product delivery.","Developed hyper-fast front-end order aggregation application to give \u201cunified, single-point visibility\u201d to orders across 4 different systems.","Worked directly with DevOps to develop, manage and scale Docker-based development and production deployment tasks.","Spearheaded testing and review policies to ensure code quality and full-team engagement.","Acted as team lead across all 3 teams at different times to bring specialized viewpoints and experience to those teams including SaaS and MicroService design.","Assisted in interviewing and hiring of all new employees including that of senior management positions.","Managed ecommerce store architecture for product catalog unification and overall process simplification."]},{company:"NetSpend Corp",position:"Senior Web & Mobile Architect",link:"https://netspend.com",daterange:"May 2016 - June 2017",points:["Lead conceptualization and proof-of-concept development of highly streamlined micro-hybrid application to decrease user friction based on application size and application update adoption.","Member of SDLC, who advised senior management and team members on development process, PCI Compliance concerns and remediation steps.","Directed the architectural direction of Netspend and client branded mobile apps. Planned and developed processes and infrastructure to move development and production services to a cloud based architecture.","Spearhead initiatives to increase development velocity. Worked directly with multiple departments to bridge communication gaps and encourage teams to work together that weren\u2019t previously.","Managed architecture changes and process for 5 local and 2 remote teams using Agile process.  Teams consisted of 2-3 developers, 1-2 QA techs a Scrum Master and a PM.  Directed Front-end Solutions Architects to implement Architecture changes for all projects in development.","Interviewed, hired and mentored all front-end developers which both increased productivity and morale while decreasing developer turn-over dramatically."]},{company:"Key Ingredient",position:"Senior Application Developer",link:"https://keyingredient.com",daterange:"June 2014 - May 2016",points:["Developed custom modules for a multi-national Magento E-Commerce solution, with over 2,000 items, Django App to manage 2+million recipes for machine-based automatic categorization.","Developed and launched mobile apps on IOS and Android to integrate with custom developed hardware products.","Set-up and maintained a Jenkins CI for automated deployments, along with a cloud-based storage solution.","Managed multiple AWS/GCP servers and infrastructure for web app handling 500,000 unique visitors monthly, along with Google Analytics reporting."]},{company:"Intellagent Benefit Solutions",position:"Founder, CEO",link:"https://intellagentbenefits.com",daterange:"November 2010 - August 2022",points:["Architected, designed and developed native cross-platform Android and iOS apps for secure document retrieval using PhoneGap.","Planned and Executed a secure, personalized insurance documents distribution strategy for Insurance Professionals as an SaaS application.","Developed a Docker deployment process to run and deploy websites from secure Docker containers.","Design, develop and maintain custom PHP-based WordPress Web Service for sharing sensitive data, and integrated custom API for WordPress.","Designed and developed ecommerce solutions for clients who requested the functionality."]},{company:"State of Ohio - DODD",position:"Senior Mobile Architect",link:"https://dodd.ohio.gov",daterange:"2012 - 2014",points:["Design, develop, Implement and publish native cross-platform Android and iOS app PhoneGap / Cordova API ","Utilize single-page-app architecture to deliver native experience using JavaScript MVC framework backbone.js, html5, css3, underscore.js, zepto.js","Developed multiple PHP Test Cases for prototype service development using AJAX, JSON, XML connected to a DODD mobile app. MySQL test databases for test XML/JSON content pull for DODD mobile app tests."]}],D=n(907);var P=n(181);var O,A=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:2,category:["Web Development","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:5,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:4,category:["Web Development","Tools"]},{title:"PHP",competency:5,category:["Languages","PHP"]},{title:"Laravel",competency:3,category:["Languages","PHP"]},{title:"ElasticSearch",competency:4,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Flask",competency:4,category:["Web Development","Python"]},{title:"Git",competency:5,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:5,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"R",competency:2,category:["Languages"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]},{title:"Ruby",competency:5,category:["Languages","Ruby"]},{title:"GitHub/Actions",competency:3,category:["Tools"]},{title:"Magento",competency:5,category:["Platforms","Magento"]}].map((function(e){return(0,h.Z)((0,h.Z)({},e),{},{category:e.category.sort()})})),N=["#9b2226","#ae2012","#bb3e03","#ca6702","#ee9b00","#e9d8a6","#94d2bd","#0a9396","#005f73","#001219","#64cb7b","#9b2226","#ae2012","#bb3e03","#ca6702","#ee9b00","#e9d8a6","#94d2bd","#0a9396","#005f73","#001219","#64cb7b"],M=(O=new Set(A.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,D.Z)(e)}(O)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(O)||(0,P.Z)(O)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:N[t]}})),C=["Experience","Skills","References"],L=function(){return(0,i.jsx)(a.Z,{title:"Resume",description:"Chris Miller's Resume. Saatva Mattress, NetSpend, Key Ingredient, State of Ohio DODD.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{"data-testid":"heading",children:(0,i.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:C.map((function(e){return(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,i.jsx)(l,{data:x}),(0,i.jsx)(k,{skills:A,categories:M}),(0,i.jsx)(w,{})]})})}},4942:function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return o}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},1002:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=730.0cc59d8f.chunk.js.map