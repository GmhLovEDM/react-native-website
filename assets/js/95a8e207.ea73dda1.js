"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3282],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47374:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(25773),r=a(30808),o=(a(27378),a(35318)),l=["components"],i={id:"shadow-props",title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027"},s=void 0,d={unversionedId:"shadow-props",id:"shadow-props",isDocsHomePage:!1,title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027",description:"`SnackPlayer name=Shadow%20Props&supportedPlatforms=ios",source:"@site/../cndocs/shadow-props.md",sourceDirName:".",slug:"/shadow-props",permalink:"/docs/next/shadow-props",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/shadow-props.md",version:"current",frontMatter:{id:"shadow-props",title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027"},sidebar:"\u7ec4\u4ef6",previous:{title:"\u5e03\u5c40\u5c5e\u6027",permalink:"/docs/next/layout-props"},next:{title:"Text \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/next/text-style-props"}},p=[{value:"Props",id:"props",children:[{value:"<code>shadowColor</code>",id:"shadowcolor",children:[]},{value:"<code>shadowOffset</code>",id:"shadowoffset",children:[]},{value:"<code>shadowOpacity</code>",id:"shadowopacity",children:[]},{value:"<code>shadowRadius</code>",id:"shadowradius",children:[]}]}],u={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"Shadow Props","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20Slider%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20ShadowPropSlider%20%3D%20(%7B%20label%2C%20value%2C%20...props%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Blabel%7D%20(%7Bvalue.toFixed(2)%7D)%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CSlider%20step%3D%7B1%7D%20value%3D%7Bvalue%7D%20%7B...props%7D%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BshadowOffsetWidth%2C%20setShadowOffsetWidth%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOffsetHeight%2C%20setShadowOffsetHeight%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowRadius%2C%20setShadowRadius%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOpacity%2C%20setShadowOpacity%5D%20%3D%20useState(0.1)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.square%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20shadowOffsetWidth%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20-shadowOffsetHeight%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOpacity%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowRadius%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.controls%7D%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20X%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetWidth%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetWidth(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20Y%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetHeight%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetHeight(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowRadius%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B100%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowRadius%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowRadius(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOpacity%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20step%3D%7B0.05%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOpacity%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOpacity(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20square%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20shadowColor%3A%20%22black%22%2C%0A%20%20%20%20width%3A%20150%0A%20%20%7D%2C%0A%20%20controls%3A%20%7B%0A%20%20%20%20paddingHorizontal%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,o.kt)("p",null,"These properties are iOS only - for similar functionality on Android, use the ",(0,o.kt)("a",{parentName:"p",href:"view-style-props#elevation"},(0,o.kt)("inlineCode",{parentName:"a"},"elevation")," property"),"."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"shadowcolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"shadowColor")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u8272\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/colors"},"color")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"shadowoffset"},(0,o.kt)("inlineCode",{parentName:"h3"},"shadowOffset")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u504f\u79fb\u91cf\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"object: {width: number,height: number}"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"shadowopacity"},(0,o.kt)("inlineCode",{parentName:"h3"},"shadowOpacity")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u4e0d\u900f\u660e\u5ea6 (\u4e58\u4ee5\u989c\u8272\u7684 alpha \u5206\u91cf)\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"shadowradius"},(0,o.kt)("inlineCode",{parentName:"h3"},"shadowRadius")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u6a21\u7cca\u534a\u5f84\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"iOS")))))}c.isMDXComponent=!0}}]);