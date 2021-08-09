"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6720],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50653:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=a(25773),r=a(30808),o=(a(27378),a(35318)),i=["components"],l={id:"out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301"},c=void 0,p={unversionedId:"out-of-tree-platforms",id:"version-0.63/out-of-tree-platforms",isDocsHomePage:!1,title:"\u591a\u5e73\u53f0\u652f\u6301",description:"React Native is not just for Android and iOS - there are community-supported projects that bring it to other platforms, such as:",source:"@site/versioned_docs/version-0.63/out-of-tree-platforms.md",sourceDirName:".",slug:"/out-of-tree-platforms",permalink:"/docs/0.63/out-of-tree-platforms",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/out-of-tree-platforms.md",version:"0.63",frontMatter:{id:"out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301"},sidebar:"version-0.63/docs",previous:{title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",permalink:"/docs/0.63/building-for-tv"},next:{title:"\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c",permalink:"/docs/0.63/running-on-device"}},s=[{value:"Creating your own React Native platform",id:"creating-your-own-react-native-platform",children:[{value:"Bundling",id:"bundling",children:[]}]}],u={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Native is not just for Android and iOS - there are community-supported projects that bring it to other platforms, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/react-native-windows"},"React Native Windows")," - React Native support for Microsoft's Universal Windows Platform (UWP) and the Windows Presentation Foundation (WPF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vincentriemer/react-native-dom"},"React Native DOM")," - An experimental, comprehensive port of React Native to the web. (Not to be confused with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/necolas/react-native-web"},"React Native Web"),", which has different goals)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/status-im/react-native-desktop"},"React Native Desktop")," - A project aiming to bring React Native to the Desktop with Qt's QML. A fork of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CanonicalLtd/react-native/"},"React Native Ubuntu"),", which is no longer maintained."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ptmt/react-native-macos"},"React Native macOS")," - An experimental React Native fork targeting macOS and Cocoa"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-tvos"},"React Native tvOS")," - adaptation of React Native for Apple tvOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/areslabs/alita"},"alita")," - An experimental, comprehensive port of React Native to mini-program(\u5fae\u4fe1\u5c0f\u7a0b\u5e8f)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kusti8/proton-native"},"Proton Native")," - A wrapper for React Native, using Qt to target Linux, MacOS, and Windows.")),(0,o.kt)("h2",{id:"creating-your-own-react-native-platform"},"Creating your own React Native platform"),(0,o.kt)("p",null,"Right now the process of creating a React Native platform from scratch is not very well documented - one of the goals of the upcoming re-architecture (",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018"},"Fabric"),") is to make maintaining a platform easier."),(0,o.kt)("h3",{id:"bundling"},"Bundling"),(0,o.kt)("p",null,"As of React Native 0.57 you can now register your React Native platform with React Native's JavaScript bundler, ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/"},"Metro"),". This means you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--platform example")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"npx react-native bundle"),", and it will look for JavaScript files with the ",(0,o.kt)("inlineCode",{parentName:"p"},".example.js")," suffix."),(0,o.kt)("p",null,"To register your platform with RNPM, your module's name must match one of these patterns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-native-example")," - It will search all top-level modules that start with ",(0,o.kt)("inlineCode",{parentName:"li"},"react-native-")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@org/react-native-example")," - It will search for modules that start with ",(0,o.kt)("inlineCode",{parentName:"li"},"react-native-")," under any scope"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@react-native-example/module")," - It will search in all modules under scopes with names starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"@react-native-"))),(0,o.kt)("p",null,"You must also have an entry in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rnpm": {\n    "haste": {\n      "providesModuleNodeModules": ["react-native-example"],\n      "platforms": ["example"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"providesModuleNodeModules"')," is an array of modules that will get added to the Haste module search path, and ",(0,o.kt)("inlineCode",{parentName:"p"},'"platforms"')," is an array of platform suffixes that will be added as valid platforms."),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,o.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}m.isMDXComponent=!0}}]);