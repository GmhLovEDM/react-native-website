"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[12544],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},920:function(e,t,r){r.d(t,{ZP:function(){return d}});var a=r(35318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&u(e,r,t[r]);return e};const m={toc:[]};function d(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=s(s({},m),u),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",s({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5185\u5bb9\u4ecd\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u5185\u5bb9\u4f1a\u968f\u7740\u7248\u672c\u7684\u8fed\u4ee3\u8fdb\u884c\u4fee\u6539\u3002\u60a8\u53ef\u968f\u65f6\u5728\u6211\u4eec\u7684",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u7ec4\u7684\u8ba8\u8bba\u533a"),"\u53d1\u9001\u53cd\u9988\u3002\n\u6b64\u5916\uff0c\u672c\u6587\u6863\u8fd8\u5305\u542b\u4e86\u82e5\u5e72\u9700\u624b\u52a8\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u4e0d\u4ee3\u8868\u65b0\u67b6\u6784\u7a33\u5b9a\u7248\u7684\u6700\u7ec8\u5f00\u53d1\u4f53\u9a8c\u3002\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u76f8\u5173\u7684\u5de5\u5177\u3001\u6a21\u677f\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u5e2e\u52a9\u4f60\u66f4\u5feb\u5730\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a\uff0c\u800c\u975e\u4ece\u5934\u5f00\u59cb\u914d\u7f6e\u73af\u5883\u3002")))}d.isMDXComponent=!0},8724:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var a=r(35318),n=r(920),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e};const d={id:"backward-compatibility",title:"What Backward Compatibility Is"},h=void 0,b={unversionedId:"the-new-architecture/backward-compatibility",id:"version-0.70/the-new-architecture/backward-compatibility",title:"What Backward Compatibility Is",description:"Creating a backward compatible module is important to provide a library that works in both the Old Architecture and the New Architecture. Not all the users of your library will immediately jump on the New Architecture ship: it is a good thing that they will be able to use your library even if they are still using the old architecture.",source:"@site/versioned_docs/version-0.70/the-new-architecture/backward-compatibility.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility",permalink:"/docs/the-new-architecture/backward-compatibility",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/the-new-architecture/backward-compatibility.md",tags:[],version:"0.70",frontMatter:{id:"backward-compatibility",title:"What Backward Compatibility Is"},sidebar:"docs",previous:{title:"Codegen",permalink:"/docs/the-new-architecture/pillars-codegen"},next:{title:"TurboModules as Native Modules",permalink:"/docs/the-new-architecture/backward-compatibility-turbomodules"}},f={},y=[],w={toc:y};function v(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},w),s),o(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)(n.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"Creating a backward compatible module is important to provide a library that works in both the ",(0,a.kt)("strong",{parentName:"p"},"Old Architecture")," and the ",(0,a.kt)("strong",{parentName:"p"},"New Architecture"),". Not all the users of your library will immediately jump on the New Architecture ship: it is a good thing that they will be able to use your library even if they are still using the old architecture."),(0,a.kt)("p",null,"The trick to create a good backward compatible module is to minimize the changes required to adopt the new version. In that way, users of the module can smoothly move to the new version and migrate to the New Architecture when they are ready, ideally by issueing one different command."),(0,a.kt)("p",null,"To achieve this result, we have to perform few changes in our ",(0,a.kt)("strong",{parentName:"p"},"TurboModule")," and ",(0,a.kt)("strong",{parentName:"p"},"Fabric Component")," configurations. The steps we have to follow are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Update the installation configuration")," to avoid using code that is not needed by the Old Architecture."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Update the code")," to support both architectures. Both Android and iOS build pipelines gives you mechanism to provide a library that will compile with the correct React Native Architecture."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure the specs to load the proper implementation"),", so that the JavaScript layer leverages the New Architecture whan it is available.")),(0,a.kt)("admonition",m({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The next sections requires that you are familiar with the ",(0,a.kt)("a",m({parentName:"p"},{href:"pillars"}),"Pillars")," of the ",(0,a.kt)("strong",{parentName:"p"},"New Architecture"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To create a backward compatible ",(0,a.kt)("strong",{parentName:"li"},"TurboModule"),", follow ",(0,a.kt)("a",m({parentName:"li"},{href:"backward-compatibility-turbomodules"}),"this guide"),"."),(0,a.kt)("li",{parentName:"ul"},"To create a backward compatible ",(0,a.kt)("strong",{parentName:"li"},"Fabric Component"),", follow ",(0,a.kt)("a",m({parentName:"li"},{href:"backward-compatibility-fabric-components"}),"this guide"),".")))}v.isMDXComponent=!0}}]);