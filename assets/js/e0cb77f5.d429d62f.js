"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61032],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38286:(e,t,r)=>{r.d(t,{ZP:()=>m});var n=r(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={toc:[]};function m(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},f),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,":::\u6ce8\u610f"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,n.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002"),(0,n.kt)("p",null,":::"))}m.isMDXComponent=!0},84390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>h});var n=r(35318),a=r(38286),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={id:"why",title:"\u4e3a\u4f55\u8981\u8bbe\u8ba1\u65b0\u67b6\u6784"},b=void 0,d={unversionedId:"the-new-architecture/why",id:"the-new-architecture/why",title:"\u4e3a\u4f55\u8981\u8bbe\u8ba1\u65b0\u67b6\u6784",description:"\u65b0\u67b6\u6784\u7684\u76ee\u6807\u662f\u89e3\u51b3\u56f0\u6270\u65e7\u67b6\u6784\u5728\u6027\u80fd\u548c\u7075\u6d3b\u6027\u65b9\u9762\u7684\u4e00\u4e9b\u95ee\u9898\u3002\u672c\u8282\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u80cc\u666f\uff0c\u4ee5\u4e86\u89e3\u65e7\u67b6\u6784\u7684\u5c40\u9650\u6027\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u65b0\u67b6\u6784\u6765\u514b\u670d\u8fd9\u4e9b\u5c40\u9650\u6027\u3002",source:"@site/../cndocs/the-new-architecture/why.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/why",permalink:"/docs/next/the-new-architecture/why",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/why.md",tags:[],version:"current",frontMatter:{id:"why",title:"\u4e3a\u4f55\u8981\u8bbe\u8ba1\u65b0\u67b6\u6784"},sidebar:"docs",previous:{title:"\u65b0\u67b6\u6784\u4ecb\u7ecd",permalink:"/docs/next/the-new-architecture/landing-page"},next:{title:"Creating a New Architecture App",permalink:"/docs/next/the-new-architecture/use-app-template"}},y={},h=[{value:"\u65e7\u67b6\u6784\u7684\u95ee\u9898",id:"\u65e7\u67b6\u6784\u7684\u95ee\u9898",level:2},{value:"\u65b0\u67b6\u6784\u7684\u6539\u8fdb",id:"\u65b0\u67b6\u6784\u7684\u6539\u8fdb",level:2},{value:"\u8fdb\u4e00\u6b65\u9605\u8bfb",id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",level:2}],v={toc:h};function k(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},v),s),o(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"\u65b0\u67b6\u6784\u7684\u76ee\u6807\u662f\u89e3\u51b3\u56f0\u6270\u65e7\u67b6\u6784\u5728\u6027\u80fd\u548c\u7075\u6d3b\u6027\u65b9\u9762\u7684\u4e00\u4e9b\u95ee\u9898\u3002\u672c\u8282\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u80cc\u666f\uff0c\u4ee5\u4e86\u89e3\u65e7\u67b6\u6784\u7684\u5c40\u9650\u6027\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u65b0\u67b6\u6784\u6765\u514b\u670d\u8fd9\u4e9b\u5c40\u9650\u6027\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e0d\u662f\u4e00\u4e2a\u6280\u672f\u4e0a\u7684\u6df1\u5165\u7814\u7a76\uff1a\u5bf9\u4e8e\u8fdb\u4e00\u6b65\u7684\u6280\u672f\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u7f51\u7ad9\u7684",(0,n.kt)("a",f({parentName:"p"},{href:"/architecture/overview"}),"\u67b6\u6784"),"\u6807\u7b7e\u3002"),(0,n.kt)("h2",f({},{id:"\u65e7\u67b6\u6784\u7684\u95ee\u9898"}),"\u65e7\u67b6\u6784\u7684\u95ee\u9898"),(0,n.kt)("p",null,"\u65e7\u7684\u67b6\u6784\u66fe\u7ecf\u901a\u8fc7\u4f7f\u7528\u4e00\u4e2a\u53eb\u505a",(0,n.kt)("inlineCode",{parentName:"p"},"\u6865\uff08Bridge\uff09"),"\u7684\u7ec4\u4ef6\u5c06\u6240\u6709\u5fc5\u987b\u4ece JS \u5c42\u4f20\u9012\u5230\u672c\u5730\u5c42\u7684\u6570\u636e\u5e8f\u5217\u5316\u6765\u5de5\u4f5c\u3002\u6865\u53ef\u4ee5\u88ab\u60f3\u8c61\u6210\u4e00\u6761\u603b\u7ebf\uff0c\u751f\u4ea7\u8005\u5c42\u4e3a\u6d88\u8d39\u8005\u5c42\u53d1\u9001\u4e00\u4e9b\u6570\u636e\u3002\u6d88\u8d39\u8005\u53ef\u4ee5\u8bfb\u53d6\u6570\u636e\uff0c\u5c06\u5176\u53cd\u5e8f\u5217\u5316\u5e76\u6267\u884c\u6240\u9700\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u6865\u6709\u4e00\u4e9b\u56fa\u6709\u7684\u9650\u5236\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b83\u662f\u5f02\u6b65\u7684"),'\uff1a\u67d0\u4e2a\u5c42\u5c06\u6570\u636e\u63d0\u4ea4\u7ed9\u6865\uff0c\u518d\u5f02\u6b65\u5730"\u7b49\u5f85"\u53e6\u4e00\u4e2a\u5c42\u6765\u5904\u7406\u5b83\u4eec\uff0c\u5373\u4f7f\u6709\u65f6\u5019\u8fd9\u5e76\u4e0d\u662f\u771f\u6b63\u5fc5\u8981\u7684\u3002'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b83\u662f\u5355\u7ebf\u7a0b\u7684"),"\uff1aJS \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u56e0\u6b64\u53d1\u751f\u5728 JS \u4e2d\u7684\u8ba1\u7b97\u4e5f\u5fc5\u987b\u5728\u5355\u7ebf\u7a0b\u4e0a\u8fdb\u884c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b83\u5e26\u6765\u4e86\u989d\u5916\u7684\u5f00\u9500"),"\uff1a\u6bcf\u5f53\u4e00\u4e2a\u5c42\u5fc5\u987b\u4f7f\u7528\u53e6\u4e00\u4e2a\u5c42\u65f6\uff0c\u5b83\u5c31\u5fc5\u987b\u5e8f\u5217\u5316\u4e00\u4e9b\u6570\u636e\u3002\u53e6\u4e00\u5c42\u5219\u5fc5\u987b\u5bf9\u5176\u8fdb\u884c\u53cd\u5e8f\u5217\u5316\u3002\u8fd9\u91cc\u9009\u62e9\u7684\u683c\u5f0f\u662f JSON\uff0c\u56e0\u4e3a\u5b83\u7684\u7b80\u5355\u6027\u548c\u4eba\u7684\u53ef\u8bfb\u6027\uff0c\u4f46\u5c3d\u7ba1\u662f\u8f7b\u91cf\u7ea7\u7684\uff0c\u5b83\u4e5f\u662f\u6709\u5f00\u9500\u7684\u3002")),(0,n.kt)("h2",f({},{id:"\u65b0\u67b6\u6784\u7684\u6539\u8fdb"}),"\u65b0\u67b6\u6784\u7684\u6539\u8fdb"),(0,n.kt)("p",null,'\u65b0\u67b6\u6784\u653e\u5f03\u4e86"\u6865"\u7684\u6982\u5ff5\uff0c\u8f6c\u800c\u91c7\u7528\u53e6\u4e00\u79cd\u901a\u4fe1\u673a\u5236\uff1a',(0,n.kt)("inlineCode",{parentName:"p"},"JavaScript \u63a5\u53e3\uff08JSI\uff09"),"\u3002JSI \u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u5141\u8bb8 JavaScript \u5bf9\u8c61\u6301\u6709\u5bf9 C++ \u7684\u5f15\u7528\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,n.kt)("p",null,"\u4e00\u65e6\u4e00\u4e2a\u5bf9\u8c61\u62e5\u6709\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u5b83\u5c31\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u8be5\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002\u4f8b\u5982\u4e00\u4e2a C++ \u5bf9\u8c61\u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u4e00\u4e2a JavaScript \u5bf9\u8c61\u5728 JavaScript \u73af\u5883\u4e2d\u6267\u884c\u4e00\u4e2a\u65b9\u6cd5\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u60f3\u6cd5\u53ef\u4ee5\u5e26\u6765\u51e0\u4e2a\u597d\u5904\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u540c\u6b65\u6267\u884c"),"\uff1a\u73b0\u5728\u53ef\u4ee5\u540c\u6b65\u6267\u884c\u90a3\u4e9b\u672c\u6765\u5c31\u4e0d\u5e94\u8be5\u662f\u5f02\u6b65\u7684\u51fd\u6570\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5e76\u53d1"),"\uff1a\u53ef\u4ee5\u5728 JavaScript \u4e2d\u8c03\u7528\u5728\u4e0d\u540c\u7ebf\u7a0b\u4e0a\u6267\u884c\u7684\u51fd\u6570\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u66f4\u4f4e\u7684\u5f00\u9500"),"\uff1a\u65b0\u67b6\u6784\u4e0d\u9700\u8981\u518d\u5bf9\u6570\u636e\u8fdb\u884c\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\uff0c\u56e0\u6b64\u53ef\u4ee5\u907f\u514d\u5e8f\u5217\u5316\u7684\u5f00\u9500\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ee3\u7801\u5171\u4eab"),"\uff1a\u901a\u8fc7\u5f15\u5165 C++\uff0c\u73b0\u5728\u6709\u53ef\u80fd\u62bd\u8c61\u51fa\u6240\u6709\u4e0e\u5e73\u53f0\u65e0\u5173\u7684\u4ee3\u7801\uff0c\u5e76\u5728\u5e73\u53f0\u4e4b\u95f4\u8f7b\u677e\u5171\u4eab\u5b83\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7c7b\u578b\u5b89\u5168"),"\uff1a\u4e3a\u4e86\u786e\u4fdd JS \u53ef\u4ee5\u6b63\u786e\u8c03\u7528 C++ \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u53cd\u4e4b\u4ea6\u7136\uff0c\u56e0\u6b64\u589e\u52a0\u4e86\u4e00\u5c42\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u3002\u8fd9\u4e9b\u4ee3\u7801\u5fc5\u987b\u901a\u8fc7 Flow \u6216 TypeScript \u7c7b\u578b\u5316\u7684 JS \u89c4\u8303\u6765\u751f\u6210\u3002")),(0,n.kt)("p",null,"\u8fd9\u4e9b\u4f18\u52bf\u662f",(0,n.kt)("a",f({parentName:"p"},{href:"pillars-turbomodules"}),"TurboModule"),"\u7cfb\u7edf\u7684\u57fa\u7840\uff0c\u4e5f\u662f\u8fdb\u4e00\u6b65\u589e\u5f3a\u529f\u80fd\u7684\u8df3\u677f\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u6709\u53ef\u80fd\u5f00\u53d1\u51fa\u4e00\u79cd\u65b0\u7684\u6e32\u67d3\u5668\uff0c\u5b83\u7684\u901f\u5ea6\u66f4\u5feb\uff0c\u6027\u80fd\u66f4\u5f3a\uff1a",(0,n.kt)("a",f({parentName:"p"},{href:"/architecture/fabric-renderer"}),"Fabric"),"\u53ca\u5176",(0,n.kt)("a",f({parentName:"p"},{href:"pillars-fabric-components"}),"Fabric \u7ec4\u4ef6"),"\u3002"),(0,n.kt)("h2",f({},{id:"\u8fdb\u4e00\u6b65\u9605\u8bfb"}),"\u8fdb\u4e00\u6b65\u9605\u8bfb"),(0,n.kt)("p",null,"\u5173\u4e8e\u65b0\u67b6\u6784\u7684\u6280\u672f\u6982\u8ff0\uff0c\u8bf7\u770b",(0,n.kt)("a",f({parentName:"p"},{href:"/architecture/overview"}),"\u67b6\u6784\u6807\u7b7e"),"\u3002"),(0,n.kt)("p",null,"\u5173\u4e8e\u65b0\u7684 Fabric \u6e32\u67d3\u5668\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u770b",(0,n.kt)("a",f({parentName:"p"},{href:"/architecture/fabric-renderer"}),"Fabric \u90e8\u5206"),"\u3002"))}k.isMDXComponent=!0}}]);