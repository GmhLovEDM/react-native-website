"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20925],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,s=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(s,i(i({ref:t},u),{},{components:a})):n.createElement(s,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38286:(e,t,a)=>{a.d(t,{ZP:()=>k});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&u(e,a,t[a]);return e};const c={toc:[]};function k(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},c),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,":::\u6ce8\u610f"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002"),(0,n.kt)("p",null,":::"))}k.isMDXComponent=!0},71131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>s,default:()=>y,frontMatter:()=>k,metadata:()=>g,toc:()=>h});var n=a(35318),r=a(38286),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e};const k={id:"new-architecture-appendix",title:"Appendix"},s=void 0,g={unversionedId:"new-architecture-appendix",id:"new-architecture-appendix",title:"Appendix",description:"I. Flow Type to Native Type Mapping",source:"@site/../cndocs/new-architecture-appendix.md",sourceDirName:".",slug:"/new-architecture-appendix",permalink:"/docs/next/new-architecture-appendix",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-appendix.md",tags:[],version:"current",frontMatter:{id:"new-architecture-appendix",title:"Appendix"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/next/new-architecture-troubleshooting"},next:{title:"Headless JS\uff08\u540e\u53f0\u4efb\u52a1\uff09",permalink:"/docs/next/headless-js-android"}},N={},h=[{value:"I. Flow Type to Native Type Mapping",id:"i-flow-type-to-native-type-mapping",level:2},{value:"<code>string</code>",id:"string",level:3},{value:"<code>boolean</code>",id:"boolean",level:3},{value:"Object literal",id:"object-literal",level:3},{value:"<code>Object</code>",id:"object",level:3},{value:"<code>Array&lt;*&gt;</code>",id:"array",level:3},{value:"<code>Function</code>",id:"function",level:3},{value:"<code>Promise&lt;*&gt;</code>",id:"promise",level:3},{value:"Type Unions",id:"type-unions",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"II. TypeScript to Native Type Mapping",id:"ii-typescript-to-native-type-mapping",level:2},{value:"III. Invoking the code-gen during development",id:"iii-invoking-the-code-gen-during-development",level:2},{value:"Invoking a Gradle task directly",id:"invoking-a-gradle-task-directly",level:3},{value:"Invoking the script manually",id:"invoking-the-script-manually",level:3},{value:"Generating the schema file",id:"generating-the-schema-file",level:4},{value:"Generating the native code artifacts",id:"generating-the-native-code-artifacts",level:4},{value:"Example",id:"example",level:5},{value:"IV. Note on Existing Apps",id:"iv-note-on-existing-apps",level:2},{value:"Finding your bridge delegate",id:"finding-your-bridge-delegate",level:3}],b={toc:h};function y(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),m),i(t,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)(r.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("h2",c({},{id:"i-flow-type-to-native-type-mapping"}),"I. Flow Type to Native Type Mapping"),(0,n.kt)("p",null,"You may use the following table as a reference for which types are supported and what they map to in each platform:"),(0,n.kt)("h3",c({},{id:"string"}),(0,n.kt)("inlineCode",{parentName:"h3"},"string")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?string")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NSString"))))),(0,n.kt)("h3",c({},{id:"boolean"}),(0,n.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?boolean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NSNumber"))))),(0,n.kt)("h3",c({},{id:"object-literal"}),"Object literal"),(0,n.kt)("p",null,"This is recommended over using plain ",(0,n.kt)("inlineCode",{parentName:"p"},"Object"),", for type safety."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"{| foo: string, ... |}")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"?{","|"," foo: string, ...","|","}")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-")))),(0,n.kt)("h3",c({},{id:"object"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Object")),(0,n.kt)("admonition",c({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Recommended to use ",(0,n.kt)("a",c({parentName:"p"},{href:"#object-literal"}),"Object literal")," instead.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?Object")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ReadableMap")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@{}")," (untyped dictionary)")))),(0,n.kt)("h3",c({},{id:"array"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Array<*>")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?Array<*>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ReadableArray")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NSArray")," (or ",(0,n.kt)("inlineCode",{parentName:"td"},"RCTConvertVecToArray")," when used inside objects)")))),(0,n.kt)("h3",c({},{id:"function"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Function")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?Function")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-")))),(0,n.kt)("h3",c({},{id:"promise"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Promise<*>")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?Promise<*>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Promise")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RCTPromiseResolve")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"RCTPromiseRejectBlock"))))),(0,n.kt)("h3",c({},{id:"type-unions"}),"Type Unions"),(0,n.kt)("p",null,"Type unions are only supported as callbacks."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"'SUCCESS' | 'FAIL'")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Only as callbacks."),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-")))),(0,n.kt)("h3",c({},{id:"callbacks"}),"Callbacks"),(0,n.kt)("p",null,"Callback functions are not type checked, and are generalized as ",(0,n.kt)("inlineCode",{parentName:"p"},"Object"),"s."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"() =>")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Callback")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RCTResponseSenderBlock"))))),(0,n.kt)("admonition",c({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"You may also find it useful to refer to the JavaScript specifications for the core modules in React Native. These are located inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"Libraries/")," directory in the React Native repository.")),(0,n.kt)("h2",c({},{id:"ii-typescript-to-native-type-mapping"}),"II. TypeScript to Native Type Mapping"),(0,n.kt)("p",null,"You may use the following table as a reference for which types are supported and what they map to in each platform:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"TypeScript Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nullable Support?"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Android (Java)"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"iOS"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"string ","|"," null ")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NSString")),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"boolean ","|"," null ")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NSNumber")),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Float"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Double"),", or ",(0,n.kt)("inlineCode",{parentName:"td"},"Int32")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"double")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NSNumber")),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"{","|"," foo: string, ... ","|","}")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"{","|"," foo: string, ...","|","} ","|"," null")),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Object literal. This is recommended over simply using Object, for type safety.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"Object ","|"," null ")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ReadableMap")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@{} (untyped dictionary)")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Recommended to use object literal (see above).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Array<*>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"Array<","*","> ","|"," null ")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ReadableArray")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NSArray")," (or ",(0,n.kt)("inlineCode",{parentName:"td"},"RCTConvertVecToArray")," when used inside objects)"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Function")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"Function ","|"," null ")),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Promise<*>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"Promise<","*","> ","|"," null ")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Promise")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RCTPromiseResolve")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"RCTPromiseRejectBlock")),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Type aliases of the above"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Type Unions ",(0,n.kt)("code",null,"'SUCCESS'","|","'FAIL'")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Only as callbacks."),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Type unions only supported as callbacks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Callbacks: ",(0,n.kt)("inlineCode",{parentName:"td"},"( ) =>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Callback")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RCTResponseSenderBlock")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Callback functions are not type checked, and are generalized as Objects.")))),(0,n.kt)("p",null,"You may also find it useful to refer to the JavaScript specifications for the core modules in React Native. These are located inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"Libraries/")," directory in the React Native repository."),(0,n.kt)("h2",c({},{id:"iii-invoking-the-code-gen-during-development"}),"III. Invoking the code-gen during development"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This section contains information specific to v0.66 of React Native.")),(0,n.kt)("p",null,"The Codegen is typically invoked at build time, but you may find it useful to generate your native interface code on demand for troubleshooting."),(0,n.kt)("p",null,"If you wish to invoke the codegen manually, you have two options:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Invoking a Gradle task directly (Android)."),(0,n.kt)("li",{parentName:"ol"},"Invoking a script manually.")),(0,n.kt)("h3",c({},{id:"invoking-a-gradle-task-directly"}),"Invoking a Gradle task directly"),(0,n.kt)("p",null,"You can trigger the Codegen by invoking the following task:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"./gradlew generateCodegenArtifactsFromSchema --rerun-tasks\n")),(0,n.kt)("p",null,"The extra ",(0,n.kt)("inlineCode",{parentName:"p"},"--rerun-tasks")," flag is added to make sure Gradle is ignoring the ",(0,n.kt)("inlineCode",{parentName:"p"},"UP-TO-DATE")," checks for this task. You should not need it during normal development."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"generateCodegenArtifactsFromSchema")," task normally runs before the ",(0,n.kt)("inlineCode",{parentName:"p"},"preBuild")," task, so you should not need to invoke it manually, but it will be triggered before your builds."),(0,n.kt)("h3",c({},{id:"invoking-the-script-manually"}),"Invoking the script manually"),(0,n.kt)("p",null,"Alternatively, you can invoke the Codegen directly, bypassing the Gradle Plugin or CocoaPods infrastructure.\nThis can be done with the following commands."),(0,n.kt)("p",null,"The parameters to provide will look quite familiar to you now that you have already configured the Gradle plugin or CocoaPods library."),(0,n.kt)("h4",c({},{id:"generating-the-schema-file"}),"Generating the schema file"),(0,n.kt)("p",null,"First, you\u2019ll need to generate a schema file from your JavaScript sources. You only need to do this whenever your JavaScript specs change. The script to generate this schema is provided as part of the ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package. If running this from within your React Native application, you can use the package from ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules")," directly:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"node node_modules/react-native-codegen/lib/cli/combine/combine-js-to-schema-cli.js \\\n  <output_file_schema_json> <javascript_sources_dir>\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The source for the ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," is available in the React Native repository, under ",(0,n.kt)("inlineCode",{parentName:"p"},"packages/react-native-codegen"),". Run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn install")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build")," in that directory to build your own ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package from source. In most cases, you will not want to do this as the guide assumes the use of the ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package version that is associated with the relevant React Native nightly release.")),(0,n.kt)("h4",c({},{id:"generating-the-native-code-artifacts"}),"Generating the native code artifacts"),(0,n.kt)("p",null,"Once you have a schema file for your native modules or components, you can use a second script to generate the actual native code artifacts for your library. You can use the same schema file generated by the previous script."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"node node_modules/react-native/scripts/generate-specs-cli.js \\\n  --platform <ios|android> \\\n  --schemaPath <generated_schema_json_file> \\\n  --outputDir <output_dir> \\\n  [--libraryName library_name] \\\n  [--javaPackageName java_package_name] \\\n  [--libraryType all(default)|modules|components]\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," The output artifacts of the Codegen are inside the build folder and should not be committed.\nThey should be considered only for reference.")),(0,n.kt)("h5",c({},{id:"example"}),"Example"),(0,n.kt)("p",null,"The following is a basic example of invoking the Codegen script to generate native iOS interface code for a library that provides native modules. The JavaScript spec sources for this library are located in a ",(0,n.kt)("inlineCode",{parentName:"p"},"js/")," subdirectory, and this library\u2019s native code expects the native interfaces to be available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ios")," subdirectory."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# Generate schema - only needs to be done whenever JS specs change\nnode node_modules/react-native-codegen/lib/cli/combine/combine-js-to-schema-cli.js /tmp/schema.json ./js\n\n# Generate native code artifacts\nnode node_modules/react-native/scripts/generate-specs-cli.js \\\n  --platform ios \\\n  --schemaPath /tmp/schema.json \\\n  --outputDir ./ios \\\n  --libraryName MyLibSpecs \\\n  --libraryType modules\n")),(0,n.kt)("p",null,"In the above example, the code-gen script will generate several files: ",(0,n.kt)("inlineCode",{parentName:"p"},"MyLibSpecs.h")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"MyLibSpecs-generated.mm"),", as well as a handful of ",(0,n.kt)("inlineCode",{parentName:"p"},".h")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".cpp")," files, all located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ios")," directory."),(0,n.kt)("h2",c({},{id:"iv-note-on-existing-apps"}),"IV. Note on Existing Apps"),(0,n.kt)("p",null,"This guide provides instructions for migrating an application that is based on the default app template that is provided by React Native. If your app has deviated from the template, or you are working with an application that was never based off the template, then the following sections might help."),(0,n.kt)("h3",c({},{id:"finding-your-bridge-delegate"}),"Finding your bridge delegate"),(0,n.kt)("p",null,"This guide assumes that the ",(0,n.kt)("inlineCode",{parentName:"p"},"AppDelegate")," is configured as the bridge delegate. If you are not sure which is your bridge delegate, then place a breakpoint in ",(0,n.kt)("inlineCode",{parentName:"p"},"RCTBridge")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"RCTCxxBridge"),", run your app, and inspect ",(0,n.kt)("inlineCode",{parentName:"p"},"self.delegate"),"."))}y.isMDXComponent=!0}}]);