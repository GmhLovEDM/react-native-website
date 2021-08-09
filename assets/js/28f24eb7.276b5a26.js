"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9732],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45981:function(e,t,a){var n=a(161),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,a){var n=a(27378);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},64535:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(27378),r=a(84956);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(38944),o="tabItem_c0e5",d="tabItemActive_28AG";var s=37,u=39;var c=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,c=e.values,p=e.groupId,m=e.className,k=i(),b=k.tabGroupChoices,y=k.setTabGroupChoices,v=(0,n.useState)(r),h=v[0],f=v[1],A=n.Children.toArray(e.children),g=[];if(null!=p){var N=b[p];null!=N&&N!==h&&c.some((function(e){return e.value===N}))&&f(N)}var D=function(e){var t=e.currentTarget,a=g.indexOf(t),n=c[a].value;f(n),null!=p&&(y(p,n),setTimeout((function(){var e,a,n,r,i,l,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,a>=0&&i<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=g.indexOf(e.target)+1;a=g[n]||g[0];break;case s:var r=g.indexOf(e.target)-1;a=g[r]||g[g.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:C,onFocus:D,onClick:D},a)}))),t?(0,n.cloneElement)(A.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},84956:function(e,t,a){var n=(0,a(27378).createContext)(void 0);t.Z=n},25045:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return b}});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),l=a(64535),o=a(70517),d=a(45981),s=["components"],u={id:"keyboard",title:"Keyboard"},c=void 0,p={unversionedId:"keyboard",id:"version-0.63/keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-0.63/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/docs/0.63/keyboard",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/keyboard.md",version:"0.63",frontMatter:{id:"keyboard",title:"Keyboard"},sidebar:"version-0.63/api",previous:{title:"InteractionManager",permalink:"/docs/0.63/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/0.63/layoutanimation"}},m=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addListener()</code>",id:"addlistener",children:[]},{value:"<code>removeListener()</code>",id:"removelistener",children:[]},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[]},{value:"<code>dismiss()</code>",id:"dismiss",children:[]},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",children:[]}]}],k={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Keyboard"),"\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b"},"\u7528\u6cd5\u793a\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Keyboard"),"\u6a21\u5757\u53ef\u4ee5\u76d1\u542c\u539f\u751f\u952e\u76d8\u4e8b\u4ef6\u4ee5\u505a\u51fa\u76f8\u5e94\u56de\u5e94\uff0c\u6bd4\u5982\u6536\u56de\u952e\u76d8\u3002"),(0,i.kt)(l.Z,{groupId:"syntax",defaultValue:d.Z.defaultSyntax,values:d.Z.syntax,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"Keyboard Function Component Example","data-snack-description":"Example usage","data-snack-code":"%0Aimport%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Keyboard%2C%20TextInput%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Keyboard.addListener(%22keyboardDidShow%22%2C%20_keyboardDidShow)%3B%0A%20%20%20%20Keyboard.addListener(%22keyboardDidHide%22%2C%20_keyboardDidHide)%3B%0A%0A%20%20%20%20%2F%2F%20cleanup%20function%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Keyboard.removeListener(%22keyboardDidShow%22%2C%20_keyboardDidShow)%3B%0A%20%20%20%20%20%20Keyboard.removeListener(%22keyboardDidHide%22%2C%20_keyboardDidHide)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20_keyboardDidShow%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert(%22Keyboard%20Shown%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20_keyboardDidHide%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert(%22Keyboard%20Hidden%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%0A%7D%0A%0Aconst%20s%20%3D%20StyleSheet.create(%7B%0A%20%20%20input%3A%7B%0A%20%20%20%20margin%3A60%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20backgroundColor%3A%20%22%23fff%22%0A%20%20%20%7D%0A%7D)%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,i.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"Keyboard Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%0Aimport%20%7BKeyboard%2C%20TextInput%20%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aclass%20Example%20extends%20Component%20%7B%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.keyboardDidShowListener%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidShow'%2C%0A%20%20%20%20%20%20this._keyboardDidShow%2C%0A%20%20%20%20)%3B%0A%20%20%20%20this.keyboardDidHideListener%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidHide'%2C%0A%20%20%20%20%20%20this._keyboardDidHide%2C%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.keyboardDidShowListener.remove()%3B%0A%20%20%20%20this.keyboardDidHideListener.remove()%3B%0A%20%20%7D%0A%0A%20%20_keyboardDidShow()%20%7B%0A%20%20%20%20alert('Keyboard%20Shown')%3B%0A%20%20%7D%0A%0A%20%20_keyboardDidHide()%20%7B%0A%20%20%20%20alert('Keyboard%20Hidden')%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20s%20%3D%20StyleSheet.create(%7B%0A%20%20%20input%3A%7B%0A%20%20%20%20margin%3A60%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20backgroundColor%3A%20%22%23fff%22%0A%20%20%20%7D%0A%7D)%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("h3",{id:"addlistener"},(0,i.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static addListener(eventName, callback)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addListener"),"\u7528\u4e8e\u6ce8\u518c\u4e00\u4e2a JavaScript \u51fd\u6570\u6765\u76d1\u542c\u5904\u7406\u539f\u751f\u952e\u76d8\u901a\u77e5\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"\u6b64\u65b9\u6cd5\u4f1a\u8fd4\u56de\u76d1\u542c\u51fd\u6570\u7684\u5f15\u7528\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eventName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nativeEvent"),"\u53c2\u6570\u7528\u6765\u6307\u660e\u8981\u76d1\u542c\u7684\u4e8b\u4ef6\uff0c\u5177\u4f53\u6709\u4ee5\u4e0b\u51e0\u79cd:")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u8c03\u7528\u7684 js \u51fd\u6570")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nativeEvent")),(0,i.kt)("p",null,"This can be any of the following"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyboardWillShow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyboardDidShow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyboardWillHide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyboardDidHide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyboardWillChangeFrame")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyboardDidChangeFrame"))),(0,i.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u4f60\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode"),"\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"adjustResize"),"\u6216\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"adjustPan"),"\uff0c\u5219\u5728 Android \u4e0a\u53ea\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"keyboardDidShow"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"keyboardDidHide"),"\u4e8b\u4ef6\u6709\u6548\u3002\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode"),"\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"adjustNothing"),"\uff0c\u5219\u6ca1\u6709\u4efb\u4f55\u4e8b\u4ef6\u6709\u6548\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"keyboardWillShow")," as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"keyboardWillHide")," are generally not available on Android since there is no native corresponding event."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removelistener"},(0,i.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeListener(eventName, callback)\n")),(0,i.kt)("p",null,"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eventName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u79fb\u9664\u76d1\u542c\u51fd\u6570\u7684\u539f\u751f\u4e8b\u4ef6\u7c7b\u578b\u540d\u79f0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u79fb\u9664\u7684\u76d1\u542c\u51fd\u6570")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removealllisteners"},(0,i.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeAllListeners(eventName)\n")),(0,i.kt)("p",null,"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dismiss"},(0,i.kt)("inlineCode",{parentName:"h3"},"dismiss()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static dismiss()\n")),(0,i.kt)("p",null,"\u628a\u5f39\u51fa\u7684\u952e\u76d8\u6536\u56de\u53bb\uff0c\u540c\u65f6\u4f7f\u5f53\u524d\u7684\u6587\u672c\u6846\u5931\u53bb\u7126\u70b9\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schedulelayoutanimation"},(0,i.kt)("inlineCode",{parentName:"h3"},"scheduleLayoutAnimation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static scheduleLayoutAnimation(event)\n")),(0,i.kt)("p",null,"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9175-sunnylqm825"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(91.75%), ",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(8.25%)"))}b.isMDXComponent=!0}}]);