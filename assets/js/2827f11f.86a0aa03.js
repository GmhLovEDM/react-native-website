"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22107],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(27378),r=n(38944);const o="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(27378),r=n(38944),o=n(12112),i=n(35331),l=n(14953),u=n(27886),s=n(7106),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function y(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function k(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:y(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function v({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,o;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))b.call(t,n)&&f(e,n,t[n]);return e})({},n.location),o={search:t.toString()},d(a,p(o))))}),[r,n])]}function w(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=k(e),[i,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!v({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,c]=g({queryString:n,groupId:r}),[d,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,s.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=u?u:d;return v({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),p(e)}),[c,p,o]),tabValues:o}}var N=n(14185);const M="tabList_J5MA",T="tabItem_l0OV";var O=Object.defineProperty,C=Object.defineProperties,E=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))_.call(t,n)&&x(e,n,t[n]);if(j)for(var n of j(t))A.call(t,n)&&x(e,n,t[n]);return e};function P({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(s(t),i(r))},d=e=>{var t,n;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=null!=(t=u[n])?t:u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=null!=(n=u[t])?n:u[u.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>{return a.createElement("li",(i=S({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:d,onClick:c},o),l={className:(0,r.Z)("tabs__item",T,null==o?void 0:o.className,{"tabs__item--active":n===e})},C(i,E(l))),null!=t?t:e);var i,l})))}function I({lazy:e,children:t,selectedValue:n}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function D(e){const t=w(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",M)},a.createElement(P,S(S({},e),t)),a.createElement(I,S(S({},e),t)))}function R(e){const t=(0,N.Z)();return a.createElement(D,S({key:String(t)},e))}},31043:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const p={toc:[]};function m(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},p),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",d({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}m.isMDXComponent=!0},11678:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const p={toc:[]};function m(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},p),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",d({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u65b0\u67b6\u6784\u5bf9\u4e8e TypeScript \u7684\u652f\u6301\u5c1a\u5904\u4e8e beta \u6d4b\u8bd5\u9636\u6bb5\u3002")))}m.isMDXComponent=!0},61937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>M,frontMatter:()=>y,metadata:()=>v,toc:()=>w});var a=n(35318),r=n(48375),o=n(86386),i=n(11674),l=n(11678),u=n(31043),s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&b(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&b(e,n,t[n]);return e};const y={id:"backward-compatibility-turbomodules",title:"TurboModules as Native Modules"},k=void 0,v={unversionedId:"the-new-architecture/backward-compatibility-turbomodules",id:"version-0.71/the-new-architecture/backward-compatibility-turbomodules",title:"TurboModules as Native Modules",description:"The creation of a backward compatible TurboModule requires the knowledge of how to create a TurboModule. To recall these concepts, have a look at this guide.",source:"@site/versioned_docs/version-0.71/the-new-architecture/backward-compatibility-turbomodules.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility-turbomodules",permalink:"/docs/0.71/the-new-architecture/backward-compatibility-turbomodules",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/backward-compatibility-turbomodules.md",tags:[],version:"0.71",frontMatter:{id:"backward-compatibility-turbomodules",title:"TurboModules as Native Modules"},sidebar:"docs",previous:{title:"\u5411\u540e\u517c\u5bb9\u7684\u610f\u4e49",permalink:"/docs/0.71/the-new-architecture/backward-compatibility"},next:{title:"Fabric Components as Native Components",permalink:"/docs/0.71/the-new-architecture/backward-compatibility-fabric-components"}},g={},w=[{value:"Configure the TurboModule Dependencies",id:"configure-the-turbomodule-dependencies",level:2},{value:'<a name="dependencies-ios" />iOS',id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Update the codebase",id:"update-the-codebase",level:2},{value:"iOS",id:"ios-1",level:3},{value:"Android",id:"android-1",level:3},{value:"Unify the JavaScript specs",id:"unify-the-javascript-specs",level:2}],N={toc:w};function M(e){var t,n=e,{components:s}=n,b=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},N),b),c(t,d({components:s,mdxType:"MDXLayout"}))),(0,a.kt)(u.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("admonition",f({},{title:"\u63d0\u793a",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The creation of a backward compatible TurboModule requires the knowledge of how to create a TurboModule. To recall these concepts, have a look at this ",(0,a.kt)("a",f({parentName:"p"},{href:"pillars-turbomodules"}),"guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"TurboModules only works when the New Architecture is properly setup. If you already have a library that you want to migrate to the New Architecture, have a look at the ",(0,a.kt)("a",f({parentName:"p"},{href:"../new-architecture-intro"}),"migration guide")," as well.")),(0,a.kt)("p",null,"Creating a backward compatible TurboModule lets your users continue leverage your library, independently from the architecture they use. The creation of such a module requires a few steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the library so that dependencies are prepared set up properly for both the Old and the New Architecture."),(0,a.kt)("li",{parentName:"ol"},"Update the codebase so that the New Architecture types are not compiled when not available."),(0,a.kt)("li",{parentName:"ol"},"Uniform the JavaScript API so that your user code won't need changes.")),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"While the last step is the same for all the platforms, the first two steps are different for iOS and Android."),(0,a.kt)("h2",f({},{id:"configure-the-turbomodule-dependencies"}),"Configure the TurboModule Dependencies"),(0,a.kt)("h3",f({},{id:"ios"}),(0,a.kt)("a",{name:"dependencies-ios"}),"iOS"),(0,a.kt)("p",null,"The Apple platform installs TurboModules using ",(0,a.kt)("a",f({parentName:"p"},{href:"https://cocoapods.org"}),"Cocoapods")," as dependency manager."),(0,a.kt)("p",null,"Every TurboModule defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ruby"}),'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\nfolly_version = \'2021.07.22.00\'\nfolly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # Default fields for a valid podspec\n  s.name            = "<TM Name>"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "11.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n  # React Native Core dependency\n  s.dependency "React-Core"\n\n  #\xa0The following lines are required by the New Architecture.\n  s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"\n  s.pod_target_xcconfig    = {\n      "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\"",\n      "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n  }\n\n  s.dependency "React-Codegen"\n  s.dependency "RCT-Folly", folly_version\n  s.dependency "RCTRequired"\n  s.dependency "RCTTypeSafety"\n  s.dependency "ReactCommon/turbomodule/core"\n\nend\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to avoid installing the dependencies when the app is prepared for the Old Architecture."),(0,a.kt)("p",null,"When we want to install the dependencies we use the following commands, depending on the architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"# For the Old Architecture, we use:\npod install\n\n# For the New Architecture, we use:\nRCT_NEW_ARCH_ENABLED=1 pod install\n")),(0,a.kt)("p",null,"Therefore, we can leverage this environment variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," to exclude the settings and the dependencies that are related to the New Architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-diff"}),"+ if ENV['RCT_NEW_ARCH_ENABLED'] == '1' then\n    # The following lines are required by the New Architecture.\n    s.compiler_flags = folly_compiler_flags + \" -DRCT_NEW_ARCH_ENABLED=1\"\n    # ... other dependencies ...\n    s.dependency \"ReactCommon/turbomodule/core\"\n+ end\nend\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," guard prevents the dependencies from being installed when the environment variable is not set."),(0,a.kt)("h3",f({},{id:"android"}),"Android"),(0,a.kt)("p",null,"To create a module that can work with both architectures, you need to configure Gradle to choose which files need to be compiled depending on the chosen architecture. This can be achieved by using ",(0,a.kt)("strong",{parentName:"p"},"different source sets")," in the Gradle configuration."),(0,a.kt)("admonition",f({},{title:"\u5907\u6ce8",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that this is currently the suggested approach. While it might lead to some code duplication, it will ensure the maximum compatibility with both architectures. You will see how to reduce the duplication in the next section.")),(0,a.kt)("p",null,"To configure the TurboModule so that it picks the proper sourceset, you have to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-diff",metastring:'title="build.gradle"',title:'"build.gradle"'}),"+// Add this function in case you don't have it already\n+ def isNewArchitectureEnabled() {\n+    return project.hasProperty(\"newArchEnabled\") && project.newArchEnabled == \"true\"\n+}\n\n\n// ... other parts of the build file\n\ndefaultConfig {\n        minSdkVersion safeExtGet('minSdkVersion', 21)\n        targetSdkVersion safeExtGet('targetSdkVersion', 31)\n+        buildConfigField(\"boolean\", \"IS_NEW_ARCHITECTURE_ENABLED\", isNewArchitectureEnabled().toString())\n+    }\n+\n+    sourceSets {\n+        main {\n+            if (isNewArchitectureEnabled()) {\n+                java.srcDirs += ['src/newarch']\n+            } else {\n+                java.srcDirs += ['src/oldarch']\n+            }\n+        }\n    }\n}\n")),(0,a.kt)("p",null,"This changes do three main things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The first lines define a function that returns whether the New Architecture is enabled or not."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"buildConfigField")," line defines a build configuration boolean field called ",(0,a.kt)("inlineCode",{parentName:"li"},"IS_NEW_ARCHITECTURE_ENABLED"),", and initialize it using the function declared in the first step. This allows you to check at runtime if a user has specified the ",(0,a.kt)("inlineCode",{parentName:"li"},"newArchEnabled")," property or not."),(0,a.kt)("li",{parentName:"ol"},"The last lines leverage the function declared in step one to decide which source sets we need to build, depending on the choosen architecture.")),(0,a.kt)("h2",f({},{id:"update-the-codebase"}),"Update the codebase"),(0,a.kt)("h3",f({},{id:"ios-1"}),"iOS"),(0,a.kt)("p",null,"The second step is to instruct Xcode to avoid compiling all the lines using the New Architecture types and files when we are building an app with the Old Architecture."),(0,a.kt)("p",null,"The file to change is the module implementation file, which is usually a ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-module>.mm")," file. That file is structured as follow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some ",(0,a.kt)("inlineCode",{parentName:"li"},"#import")," statements, among which there is a ",(0,a.kt)("inlineCode",{parentName:"li"},"<GeneratedSpec>.h")," file."),(0,a.kt)("li",{parentName:"ul"},"The module implementation, using the various ",(0,a.kt)("inlineCode",{parentName:"li"},"RCT_EXPORT_xxx")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"RCT_REMAP_xxx")," macros."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"getTurboModule:")," function, which uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyModuleSpecJSI>")," type, generated by The New Architecture.")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModule")," still builds with the Old Architecture. To achieve that, we can wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},'#import "<GeneratedSpec>.h"')," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"getTurboModule:")," function into an ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef RCT_NEW_ARCH_ENABLED")," compilation directive, as shown in the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-diff"}),'#import "<MyModuleHeader>.h"\n+ #ifdef RCT_NEW_ARCH_ENABLED\n#import "<GeneratedSpec>.h"\n+ #endif\n\n// ... rest of your module\n\n+ #ifdef RCT_NEW_ARCH_ENABLED\n - (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:\n    (const facebook::react::ObjCTurboModule::InitParams &)params\n {\n    return std::make_shared<facebook::react::<MyModuleSpecJSI>>(params);\n }\n+ #endif\n\n@end\n')),(0,a.kt)("p",null,"This snippet uses the same ",(0,a.kt)("inlineCode",{parentName:"p"},"RCT_NEW_ARCH_ENABLED")," flag used in the previous ",(0,a.kt)("a",f({parentName:"p"},{href:"#dependencies-ios"}),"section"),". When this flag is not set, Xcode skips the lines within the ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef")," during compilation and it does not include them into the compiled binary."),(0,a.kt)("h3",f({},{id:"android-1"}),"Android"),(0,a.kt)("p",null,"As we can't use conditional compilation blocks on Android, we will define two different source sets. This will allow to create a backward compatible TurboModule with the proper source that is loaded and compiled depending on the used architecture."),(0,a.kt)("p",null,"Therefore, you have to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Native Module in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/oldarch")," path. See ",(0,a.kt)("a",f({parentName:"li"},{href:"../native-modules-intro"}),"this guide")," to learn how to create a Native Module."),(0,a.kt)("li",{parentName:"ol"},"Create a TurboModule in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/newarch")," path. See ",(0,a.kt)("a",f({parentName:"li"},{href:"./pillars-turbomodules"}),"this guide")," to learn how to create a TurboModule")),(0,a.kt)("p",null,"and then instruct Gradle to decide which implementation to pick."),(0,a.kt)("p",null,"Some files can be shared between a Native Module and a TurboModule: these should be created or moved into a folder that is loaded by both the architectures. These files are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyModule>Package.java")," file used to load the module."),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyTurboModule>Impl.java")," file where we can put the code that both the Native Module and the TurboModule has to execute.")),(0,a.kt)("p",null,"The final folder structure looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"my-module\n\u251c\u2500\u2500 android\n\u2502   \u251c\u2500\u2500 build.gradle\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 main\n\u2502       \u2502   \u251c\u2500\u2500 AndroidManifest.xml\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyModule\n\u2502       \u2502               \u251c\u2500\u2500 MyModuleImpl.java\n\u2502       \u2502               \u2514\u2500\u2500 MyModulePackage.java\n\u2502       \u251c\u2500\u2500 newarch\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyModule.java\n\u2502       \u2514\u2500\u2500 oldarch\n\u2502           \u2514\u2500\u2500 java\n\u2502               \u2514\u2500\u2500 com\n\u2502                   \u2514\u2500\u2500 MyModule.java\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 js\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,"The code that should go in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyModuleImpl.java")," and that can be shared by the Native Module and the TurboModule is, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java",metastring:'title="example of MyModuleImple.java"',title:'"example',of:!0,'MyModuleImple.java"':!0}),'package com.MyModule;\n\nimport androidx.annotation.NonNull;\nimport com.facebook.react.bridge.Promise;\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class MyModuleImpl {\n\n    public static final String NAME = "MyModule";\n\n    public void foo(double a, double b, Promise promise) {\n        // implement the logic for foo and then invoke promise.resolve or\n        // promise.reject.\n    }\n}\n')),(0,a.kt)("p",null,"Then, the Native Module and the TurboModule can be updated with the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a private instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"MyModuleImpl")," class."),(0,a.kt)("li",{parentName:"ol"},"Initialize the instance in the module constructor."),(0,a.kt)("li",{parentName:"ol"},"Use the private instance in the modules methods.")),(0,a.kt)("p",null,"For example, for a Native Module:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java",metastring:'title="Native Module using the Impl module"',title:'"Native',Module:!0,using:!0,the:!0,Impl:!0,'module"':!0}),"public class MyModule extends ReactContextBaseJavaModule {\n\n    // declare an instance of the implementation\n    private MyModuleImpl implementation;\n\n    CalculatorModule(ReactApplicationContext context) {\n        super(context);\n        // initialize the implementation of the module\n        implementation = MyModuleImpl();\n    }\n\n    @Override\n    public String getName() {\n        // NAME is a static variable, so we can access it using the class name.\n        return MyModuleImpl.NAME;\n    }\n\n    @ReactMethod\n    public void foo(int a, int b, Promise promise) {\n        // Use the implementation instance to execute the function.\n        implementation.foo(a, b, promise);\n    }\n}\n")),(0,a.kt)("p",null,"And, for a TurboModule:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java",metastring:'title="TurboModule using the Impl module"',title:'"TurboModule',using:!0,the:!0,Impl:!0,'module"':!0}),"public class MyModule extends MyModuleSpec {\n    // declare an instance of the implementation\n    private MyModuleImpl implementation;\n\n    CalculatorModule(ReactApplicationContext context) {\n        super(context);\n        // initialize the implementation of the module\n        implementation = MyModuleImpl();\n    }\n\n    @Override\n    @NonNull\n    public String getName() {\n        // NAME is a static variable, so we can access it using the class name.\n        return MyModuleImpl.NAME;\n    }\n\n    @Override\n    public void foo(double a, double b, Promise promise) {\n        // Use the implementation instance to execute the function.\n        implementation.foo(a, b, promise);\n    }\n}\n")),(0,a.kt)("p",null,"For a step-by-step example on how to achieve this, have a look at ",(0,a.kt)("a",f({parentName:"p"},{href:"https://github.com/react-native-community/RNNewArchitectureLibraries/tree/feat/back-turbomodule"}),"this repo"),"."),(0,a.kt)("h2",f({},{id:"unify-the-javascript-specs"}),"Unify the JavaScript specs"),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"The last step makes sure that the JavaScript behaves transparently to chosen architecture."),(0,a.kt)("p",null,"For a TurboModule, the source of truth is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Native<MyModule>.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},".ts"),") spec file. The app accesses the spec file like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import MyModule from 'your-module/src/index';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to conditionally ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," file the proper object, given the architecture chosen by the user. We can achieve this with a code that looks like this:"),(0,a.kt)(r.Z,{groupId:"turbomodule-backward-compatibility",defaultValue:i.Z.defaultTurboModuleSpecLanguage,values:i.Z.turboModuleSpecLanguages,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// @flow\n\nimport { NativeModules } from 'react-native'\n\nconst isTurboModuleEnabled = global.__turboModuleProxy != null;\n\nconst myModule = isTurboModuleEnabled ?\n    require('./Native<MyModule>').default :\n    NativeModules.<MyModule>;\n\nexport default myModule;\n"))),(0,a.kt)(o.Z,{value:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"const isTurboModuleEnabled = global.__turboModuleProxy != null;\n\nconst myModule = isTurboModuleEnabled\n  ? require('./Native<MyModule>').default\n  : require('./<MyModule>').default;\n\nexport default myModule;\n")))),(0,a.kt)("admonition",f({},{title:"\u5907\u6ce8",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"If you are using TypeScript and you want to follow the example, make sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeModule")," in a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"ts")," file called ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyModule>.ts"),".")),(0,a.kt)("p",null,"Whether you are using Flow or TypeScript for your specs, we understand which architecture is running by checking whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.__turboModuleProxy")," object has been set or not."),(0,a.kt)("admonition",f({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"global.__turboModuleProxy")," API may change in the future for a function that encapsulate this check.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If that object is ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),", the app has not enabled the TurboModule feature. It's running on the Old Architecture, and the fallback is to use the default ",(0,a.kt)("a",f({parentName:"li"},{href:"../native-modules-intro"}),(0,a.kt)("inlineCode",{parentName:"a"},"NativeModule")," implementation"),"."),(0,a.kt)("li",{parentName:"ul"},"If that object is set, the app is running with the TurboModules enabled and it should use the ",(0,a.kt)("inlineCode",{parentName:"li"},"Native<MyModule>")," spec to access the TurboModule.")))}M.isMDXComponent=!0}}]);