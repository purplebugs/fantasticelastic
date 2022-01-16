"use strict";(self.webpackChunkelastic_docs=self.webpackChunkelastic_docs||[]).push([[365],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2758:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"POST-bulk",title:"POST: Add several documents at once",sidebar_label:"POST: Add several documents at once"},l=void 0,u={unversionedId:"POST-bulk",id:"POST-bulk",title:"POST: Add several documents at once",description:"To add two more documents to the same index eightiesmovies we can do this using the POST and bulk command",source:"@site/docs/POST-bulk.md",sourceDirName:".",slug:"/POST-bulk",permalink:"/POST-bulk",editUrl:"https://github.com/purplebugs/fantasticelastic/docs/POST-bulk.md",tags:[],version:"current",frontMatter:{id:"POST-bulk",title:"POST: Add several documents at once",sidebar_label:"POST: Add several documents at once"},sidebar:"Elasticsearch_Quickstart",previous:{title:"PUT: Add one document",permalink:"/PUT-add-one-document"},next:{title:"PUT: Update one document",permalink:"/PUT-update"}},s=[],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To add two more documents to the same index ",(0,i.kt)("inlineCode",{parentName:"p"},"eighties_movies")," we can do this using the ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_bulk")," command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST eighties_movies/_bulk\n{"index":{"_id":2}}\n{"title":"Back to the Future","category":"Comedy","released":"July 3, 1985","star":{"first_name":"Michael J.","last_name":"Fox","character":"Marty"}}\n{"index":{"_id":3}}\n{"title":"Working Girl","category":"Comedy","released":"December 26, 1988","star":{"first_name":"Melanie","last_name":"Griffith","character":"Tess"}}\n{"index":{"_id":4}}\n{"title":"E.T","category":"Science Fiction","released":"June 23, 1982", "star": {"first_name":"Henr", "character":"Elliott"}}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This stores three more ",(0,i.kt)("em",{parentName:"li"},"documents")," with unique ids ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"4")," inside the ",(0,i.kt)("em",{parentName:"li"},"index")," named ",(0,i.kt)("inlineCode",{parentName:"li"},"eighties_movies"))))}m.isMDXComponent=!0}}]);