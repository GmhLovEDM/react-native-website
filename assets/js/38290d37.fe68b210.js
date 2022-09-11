"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87094],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,h=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},920:function(e,t,r){r.d(t,{ZP:function(){return m}});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e};const f={toc:[]};function m(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},f),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",u({},{title:"\u6ce8\u610f",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5185\u5bb9\u4ecd\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u5185\u5bb9\u4f1a\u968f\u7740\u7248\u672c\u7684\u8fed\u4ee3\u8fdb\u884c\u4fee\u6539\u3002\u60a8\u53ef\u968f\u65f6\u5728\u6211\u4eec\u7684",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u7ec4\u7684\u8ba8\u8bba\u533a"),"\u53d1\u9001\u53cd\u9988\u3002\n\u6b64\u5916\uff0c\u672c\u6587\u6863\u8fd8\u5305\u542b\u4e86\u82e5\u5e72\u9700\u624b\u52a8\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u4e0d\u4ee3\u8868\u65b0\u67b6\u6784\u7a33\u5b9a\u7248\u7684\u6700\u7ec8\u5f00\u53d1\u4f53\u9a8c\u3002\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u76f8\u5173\u7684\u5de5\u5177\u3001\u6a21\u677f\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u5e2e\u52a9\u4f60\u66f4\u5feb\u5730\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a\uff0c\u800c\u975e\u4ece\u5934\u5f00\u59cb\u914d\u7f6e\u73af\u5883\u3002")))}m.isMDXComponent=!0},13589:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return y}});var n=r(35318),o=r(920),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&u(e,r,t[r]);return e};const m={id:"pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u9a7e\u9a6c\u8f66\u201d"},h=void 0,d={unversionedId:"the-new-architecture/pillars",id:"version-0.70/the-new-architecture/pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u9a7e\u9a6c\u8f66\u201d",description:"The New Architecture is composed mainly by two pillars:",source:"@site/versioned_docs/version-0.70/the-new-architecture/pillars.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/pillars",permalink:"/docs/the-new-architecture/pillars",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/the-new-architecture/pillars.md",tags:[],version:"0.70",frontMatter:{id:"pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u9a7e\u9a6c\u8f66\u201d"},sidebar:"docs",previous:{title:"Creating a New Architecture App",permalink:"/docs/the-new-architecture/use-app-template"},next:{title:"TurboModules",permalink:"/docs/the-new-architecture/pillars-turbomodules"}},b={},y=[],v={toc:y};function w(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},v),u),i(t,c({components:a,mdxType:"MDXLayout"}))),(0,n.kt)(o.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"The New Architecture is composed mainly by two pillars:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"pillars-turbomodules"}),"TurboModules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"pillars-fabric-components"}),"Fabric Components"),".")),(0,n.kt)("p",null,"TurboModules are the preferred way to create libraries that leverage some platform specific API. Fabric Components are the preferred way to create reusable UI components, providing a native experience to the users."),(0,n.kt)("p",null,"The main goal of this section is to drive the reader through a step-by-step guide to create their first TurboModule or Fabric Component."),(0,n.kt)("p",null,"The next sections contain an high-level overview of the pillars, together with the steps to create them. To create one of these pillars, the steps are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Define a JavaScript specification using Flow or TypeScript."),(0,n.kt)("li",{parentName:"ol"},"Configure the dependencies management system to generate code from the provided spec."),(0,n.kt)("li",{parentName:"ol"},"Implement the Native code."),(0,n.kt)("li",{parentName:"ol"},"Integrate the code in the app.")),(0,n.kt)("p",null,"Finally, we dive a little deeper into the ",(0,n.kt)("a",f({parentName:"p"},{href:"pillars-codegen"}),"Codegen")," process that is required to create all the C++ types and files used by our components, including some useful steps to work comfortably while developing the component."),(0,n.kt)("admonition",f({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"To integrate a TurboModule or a Fabric Component in an app, the app has to run with the New Architecture enabled."),(0,n.kt)("p",{parentName:"admonition"},"To create a new app adopting the New Architecture, refer to the ",(0,n.kt)("a",f({parentName:"p"},{href:"use-app-template"}),"Using the App Template")," section.\nTo migrate an existing app to the New Architecture, refer to the ",(0,n.kt)("a",f({parentName:"p"},{href:"../new-architecture-intro"}),"Migration")," guide.")))}w.isMDXComponent=!0}}]);