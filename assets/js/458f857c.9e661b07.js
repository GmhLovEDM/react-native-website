"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5033],{35318:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var i=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,s=m["".concat(c,".").concat(k)]||m[k]||u[k]||r;return t?i.createElement(s,o(o({ref:n},d),{},{components:t})):i.createElement(s,o({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22958:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var i=t(25773),a=t(30808),r=(t(27378),t(35318)),o=["components"],l={id:"netinfo",title:"NetInfo"},c=void 0,p={unversionedId:"netinfo",id:"version-0.63/netinfo",isDocsHomePage:!1,title:"NetInfo",description:"\u5df2\u8fc7\u65f6\u3002 Use react-native-community/react-native-netinfo instead.",source:"@site/versioned_docs/version-0.63/netinfo.md",sourceDirName:".",slug:"/netinfo",permalink:"/docs/0.63/netinfo",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/netinfo.md",version:"0.63",frontMatter:{id:"netinfo",title:"NetInfo"}},d=[{value:"ConnectionType \u679a\u4e3e\u503c",id:"connectiontype-\u679a\u4e3e\u503c",children:[]},{value:"EffectiveConnectionType \u679a\u4e3e\u503c",id:"effectiveconnectiontype-\u679a\u4e3e\u503c",children:[]},{value:"Android",id:"android",children:[]},{value:"\u67e5\u770b\u65b9\u6cd5",id:"\u67e5\u770b\u65b9\u6cd5",children:[]},{value:"\u67e5\u770b\u5c5e\u6027",id:"\u67e5\u770b\u5c5e\u6027",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>getConnectionInfo()</code>",id:"getconnectioninfo",children:[]},{value:"<code>isConnectionExpensive()</code>",id:"isconnectionexpensive",children:[]}]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"<code>isConnected</code>",id:"isconnected",children:[]}]}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-netinfo"},"react-native-community/react-native-netinfo")," instead.")),(0,r.kt)("p",null,"\u901a\u8fc7 NetInfo \u6a21\u5757\u53ef\u4ee5\u83b7\u53d6\u8bbe\u5907\u5f53\u524d\u7684\u8054\u7f51\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NetInfo.getConnectionInfo().then((connectionInfo) => {\n  console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\n});\nfunction handleFirstConnectivityChange(connectionInfo) {\n  console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\n  NetInfo.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")),(0,r.kt)("h3",{id:"connectiontype-\u679a\u4e3e\u503c"},"ConnectionType \u679a\u4e3e\u503c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionType"),"\u63cf\u8ff0\u4e86\u8bbe\u5907\u8054\u7f51\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionType"),"\u6709\u5982\u4e0b\u8de8\u5e73\u53f0\u53ef\u7528\u7684\u503c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," - \u8bbe\u5907\u5904\u4e8e\u79bb\u7ebf\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wifi")," - \u8bbe\u5907\u901a\u8fc7 wifi \u8054\u7f51\uff0c\u6216\u8005\u8bbe\u5907\u662f iOS \u6a21\u62df\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cellular")," - \u8bbe\u5907\u901a\u8fc7\u8702\u7a9d\u6570\u636e\u6d41\u91cf\u8054\u7f51"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unknown")," - \u8054\u7f51\u72b6\u6001\u5f02\u5e38")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionType"),"\u8fd8\u6709\u5982\u4e0b\u4ec5\u5728 Android \u5e73\u53f0\u4e0a\u53ef\u7528\u7684\u503c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bluetooth")," - \u8bbe\u5907\u901a\u8fc7\u84dd\u7259\u534f\u8bae\u8054\u7f51"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ethernet")," - \u8bbe\u5907\u901a\u8fc7\u4ee5\u592a\u7f51\u534f\u8bae\u8054\u7f51"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wimax")," - \u8bbe\u5907\u901a\u8fc7 WiMAX \u534f\u8bae\u8054\u7f51")),(0,r.kt)("h3",{id:"effectiveconnectiontype-\u679a\u4e3e\u503c"},"EffectiveConnectionType \u679a\u4e3e\u503c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EffectiveConnectionType"),"\u6709\u5982\u4e0b\u8de8\u5e73\u53f0\u53ef\u7528\u7684\u503c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unknown"))),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"\u8981\u5728 Android \u4e0a\u83b7\u53d6\u8054\u7f51\u72b6\u6001\uff0c\u8fd8\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u6743\u9650\u8bf7\u6c42\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />')),(0,r.kt)("h3",{id:"\u67e5\u770b\u65b9\u6cd5"},"\u67e5\u770b\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/netinfo#addeventlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"addEventListener"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/netinfo#removeeventlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"removeEventListener"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/netinfo#getconnectioninfo"},(0,r.kt)("inlineCode",{parentName:"a"},"getConnectionInfo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/netinfo#isconnectionexpensive"},(0,r.kt)("inlineCode",{parentName:"a"},"isConnectionExpensive")))),(0,r.kt)("h3",{id:"\u67e5\u770b\u5c5e\u6027"},"\u67e5\u770b\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/netinfo#isconnected"},(0,r.kt)("inlineCode",{parentName:"a"},"isConnected")))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"addeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"NetInfo.addEventListener(eventName, handler);\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventName"),(0,r.kt)("td",{parentName:"tr",align:null},"enum(connectionChange, change)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handler"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u51fd\u6570")))),(0,r.kt)("p",null,"\u652f\u6301\u7684\u4e8b\u4ef6\u540d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectionChange"),"\uff1a\u5f53\u8054\u7f51\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002\u4f20\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6709\u4e0b\u5217\u5c5e\u6027\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\uff1a \u4e0a\u9762\u6240\u5217\u51fa\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectionType"),"\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"effectiveType"),": \u4e0a\u9762\u6240\u5217\u51fa\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"EffectiveConnectionType"),"\u503c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change"),": \u8fd9\u4e00\u4e8b\u4ef6\u5df2\u8fc7\u65f6\u3002\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"connectionChange"),"\u4ee3\u66ff\u3002\u5f53\u8054\u7f51\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removeeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"NetInfo.removeEventListener(eventName, handler);\n")),(0,r.kt)("p",null,"\u79fb\u9664\u8054\u7f51\u72b6\u6001\u6539\u53d8\u7684\u76d1\u542c\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventName"),(0,r.kt)("td",{parentName:"tr",align:null},"enum(connectionChange, change)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handler"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u51fd\u6570")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getconnectioninfo"},(0,r.kt)("inlineCode",{parentName:"h3"},"getConnectionInfo()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"NetInfo.getConnectionInfo();\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u89e3\u6790\u503c\u4e3a\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"effectiveType"),"\u5c5e\u6027\u7684\u5bf9\u8c61\u3002\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u7684\u503c\u4e3a",(0,r.kt)("a",{parentName:"p",href:"/docs/0.63/netinfo#connectiontype-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectionType"))," \uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"effectiveType"),"\u5c5e\u6027\u7684\u503c\u4e3a",(0,r.kt)("a",{parentName:"p",href:"/docs/0.63/netinfo#effectiveconnectiontype-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"EffectiveConnectionType")),")\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isconnectionexpensive"},(0,r.kt)("inlineCode",{parentName:"h3"},"isConnectionExpensive()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"NetInfo.isConnectionExpensive();\n")),(0,r.kt)("p",null,"\u4ec5 Android \u53ef\u7528\u3002\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u6d3b\u52a8\u7684\u8fde\u63a5\u662f\u5426\u8ba1\u8d39\u3002\u5982\u679c\u5f53\u524d\u8fde\u63a5\u662f\u901a\u8fc7\u79fb\u52a8\u6570\u636e\u7f51\u7edc\uff0c\u6216\u8005\u901a\u8fc7\u57fa\u4e8e\u79fb\u52a8\u6570\u636e\u7f51\u7edc\u6240\u521b\u5efa\u7684 wifi \u70ed\u70b9\uff0c\u6216\u662f\u5927\u91cf\u6d88\u8017\u7535\u6c60\u7b49\u7b49\uff0c\u90fd\u6709\u53ef\u80fd\u88ab\u5224\u5b9a\u4e3a\u8ba1\u8d39\u7684\u6570\u636e\u8fde\u63a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NetInfo.isConnectionExpensive()\n.then(isConnectionExpensive => {\n  console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));\n})\n.catch(error => {\n  console.error(error);\n});\n")),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("h3",{id:"isconnected"},(0,r.kt)("inlineCode",{parentName:"h3"},"isConnected")),(0,r.kt)("p",null,"\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u53ef\u7528\u3002\u4ee5\u5f02\u6b65\u65b9\u5f0f\u83b7\u53d6\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u8bbe\u5907\u662f\u5426\u8054\u7f51\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NetInfo.isConnected.fetch().then(isConnected => {\n  console.log('First, is ' + (isConnected ? 'online' : 'offline'));\n});\nfunction handleFirstConnectivityChange(isConnected) {\n  console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\n  NetInfo.isConnected.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.isConnected.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}m.isMDXComponent=!0}}]);