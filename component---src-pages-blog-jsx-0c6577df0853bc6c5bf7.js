(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r="block pt-12 md:flex",s="pb-6 md:w-full md:max-w-150 md:p-0",c="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",i="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:s},l.a.createElement("h2",{className:c},t)),l.a.createElement("div",{className:i},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),s="mb-6",c="font-semibold text-gray-900 pb-1",i="text-md text-gray-600 font-light mt-2 w-5/6";t.a=function(e){var t,a=e.name,l=e.description,m=e.startEnd,o=e.firstDetail,d=e.secondDetail,u=e.jobTitle,f=e.link,E=void 0!==f&&f,h=e.internal,p=void 0!==h&&h;return console.log("bryan check the job title: ",u),t=p?r.a.createElement(n.Link,{to:E},a):r.a.createElement("a",{target:"_blank",rel:"noreferrer",href:E},a),o&&d?r.a.createElement("div",{className:s},r.a.createElement("h3",{className:c+" "+(E?"hover:underline hover:text-black":"")},E?t:a),r.a.createElement("h4",{class:"startEnd font-semibold"},m),r.a.createElement("h5",null,u),r.a.createElement("p",{className:i},l),r.a.createElement("ul",{class:"list-disc list-inside mt-3 mb-3"},r.a.createElement("li",null,o),r.a.createElement("li",null,d)),r.a.createElement("hr",{class:"w-1/2"})):r.a.createElement("div",{className:s},r.a.createElement("h3",{className:c+" "+(E?"hover:underline hover:text-black":"")},E?t:a),r.a.createElement("h4",{class:"startEnd font-medium"},m),r.a.createElement("h5",null,u),r.a.createElement("p",{className:i},l))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("6uTu"),c=a("ivnd"),i="text-lg font-bold",m="underline";t.default=function(){return l.a.createElement(s.a,null,l.a.createElement(c.a,{title:"Not found"}),l.a.createElement("h1",{className:i},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:m,to:"/"},"Return to safety"),"."))}},"xGn/":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("q1tI"),l=a.n(n),r=a("STHm"),s=a("hbLQ"),c=function(e){var t=e.posts;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map((function(e){return l.a.createElement(s.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},i=a("eNIv"),m=a("6uTu"),o=a("ivnd"),d=a("pssB"),u=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(m.a,null,l.a.createElement(o.a,{title:"Blog"}),l.a.createElement(i.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(c,{posts:a})):l.a.createElement(d.default,null)},"3587809548")}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-0c6577df0853bc6c5bf7.js.map