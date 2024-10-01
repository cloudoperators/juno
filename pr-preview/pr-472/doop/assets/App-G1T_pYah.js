var Gp=t=>{throw TypeError(t)};var js=(t,n,o)=>n.has(t)||Gp("Cannot "+o);var q=(t,n,o)=>(js(t,n,"read from private field"),o?o.call(t):n.get(t)),De=(t,n,o)=>n.has(t)?Gp("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,o),ye=(t,n,o,r)=>(js(t,n,"write to private field"),r?r.call(t,o):n.set(t,o),o),ze=(t,n,o)=>(js(t,n,"access private method"),o);var fa=(t,n,o,r)=>({set _(i){ye(t,n,i,o)},get _(){return q(t,n,r)}});import{r as p,R as S,g as Ml,a as Xj,b as rr,c as jr,d as Qp}from"./index-By35V3Vv.js";import"./index-CWrjXteM.js";var Xy={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE=p,tE=Symbol.for("react.element"),nE=Symbol.for("react.fragment"),rE=Object.prototype.hasOwnProperty,oE=eE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iE={key:!0,ref:!0,__self:!0,__source:!0};function e1(t,n,o){var r,i={},a=null,l=null;o!==void 0&&(a=""+o),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)rE.call(n,r)&&!iE.hasOwnProperty(r)&&(i[r]=n[r]);if(t&&t.defaultProps)for(r in n=t.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:tE,type:t,key:a,ref:l,props:i,_owner:oE.current}}Nl.Fragment=nE;Nl.jsx=e1;Nl.jsxs=e1;Xy.exports=Nl;var U=Xy.exports,de=function(){return de=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++)for(var i in n=arguments[o],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},de.apply(this,arguments)};function lt(t,n){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>n.indexOf(r)&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>n.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o}function aE(t,n,o){for(var r,i=0,a=n.length;i<a;i++)(r||!(i in n))&&(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return t.concat(r||Array.prototype.slice.call(n))}var lE=`
  jn-flex
  jn-flex-col
  jn-h-full
`,sE=function(t){var n=t.className,o=n===void 0?"":n,r=t.children,i=lt(t,["className","children"]);return S.createElement("div",de({className:"juno-body ".concat(lE," ").concat(o)},i),r)};function he(){return he=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},he.apply(null,arguments)}var t1={exports:{}},cE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uE=cE,dE=uE;function n1(){}function r1(){}r1.resetWarningCache=n1;var fE=function(){function t(r,i,a,l,c,u){if(u!==dE){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function n(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r1,resetWarningCache:n1};return o.PropTypes=o,o};t1.exports=fE();var pE=t1.exports;const j=Ml(pE);j.string,j.any;var Jp,Zp,Xp,eg,tg,ng,rg,og,ig,ag,lg,sg,cg,ug,dg,fg,pg,gg,hg,gE=["title","titleId"];function Sc(){return Sc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Sc.apply(null,arguments)}function hE(t,n){if(t==null)return{};var o,r,i=mE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function mE(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var bE=function(t){var n=t.title,o=t.titleId,r=hE(t,gE);return p.createElement("svg",Sc({xmlns:"http://www.w3.org/2000/svg",width:49,height:41,fill:"none",viewBox:"0 0 49 41",alt:"Juno UI","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Jp||(Jp=p.createElement("path",{fill:"#0FA7B4",d:"M11.093 16 4 20.095l7.093 4.105 7.093-4.105L11.093 16Z"})),Zp||(Zp=p.createElement("path",{fill:"#000",fillRule:"evenodd",d:"m11.093 16.346 6.793 3.922v7.844l-6.793 3.922L4.3 28.112v-7.844l6.793-3.922ZM4 20.095 11.093 16l7.093 4.095v8.19l-7.093 4.095L4 28.285v-8.19Z",clipRule:"evenodd"})),Xp||(Xp=p.createElement("path",{fill:"#05646D",d:"M11.093 24.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),eg||(eg=p.createElement("path",{fill:"#05646D",d:"M11.093 24.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),tg||(tg=p.createElement("path",{fill:"#098590",d:"M11.093 24.19v8.19L4 28.285v-8.19l7.093 4.095Z"})),ng||(ng=p.createElement("path",{fill:"#15D0E0",fillRule:"evenodd",d:"M18.186 20.095 11.093 16 4 20.095v8.19l7.093 4.095 7.093-4.095v-8.19Zm-7.093-3.749 6.493 3.75-6.493 3.757L4.6 20.095l6.494-3.749Zm-.3 8.017L4.3 20.614v7.498l6.493 3.748v-7.497Zm7.093-3.749-6.493 3.749v7.497l6.492-3.748v-7.498Z",clipRule:"evenodd"})),rg||(rg=p.createElement("path",{fill:"#098590",d:"M24.402 36.76V20.38l-14.185-8.19v8.226l7.065 4.079v8.155l7.12 4.11Z"})),og||(og=p.createElement("path",{fill:"#0FA7B4",d:"m38.587 20.388-7.08 4.087v-8.19l7.08-4.087v-.008l-14.185 8.19v16.38l14.185-8.19v-8.182Z"})),ig||(ig=p.createElement("path",{fill:"#05646D",d:"M31.591 16.337v.064-8.254l-7.093 4.095 7.093 4.095Z"})),ag||(ag=p.createElement("path",{fill:"#02454B",d:"M31.51 16.285v8.19l7.092-4.095-7.093-4.095Z"})),lg||(lg=p.createElement("path",{fill:"#15D0E0",d:"M37.092 8 30 12.095v8.19l7.092 4.095 7.093-4.095v-8.19L37.092 8Z"})),sg||(sg=p.createElement("path",{fill:"#0FA7B4",d:"M37.092 16.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),cg||(cg=p.createElement("path",{fill:"#098590",d:"M37.092 16.19v8.19L30 20.285v-8.19l7.092 4.095Z"})),ug||(ug=p.createElement("path",{fill:"url(#a)",fillRule:"evenodd",d:"M44.185 12.095 37.092 8 30 12.095v8.19l7.092 4.095 7.093-4.095v-8.19Zm-7.093-3.749 6.493 3.75-6.493 3.757-6.493-3.758 6.493-3.749Zm-.3 8.017-6.493-3.749v7.497l6.493 3.75v-7.498Zm7.093-3.749-6.493 3.749v7.497l6.493-3.748v-7.498Z",clipRule:"evenodd"})),dg||(dg=p.createElement("path",{fill:"#0FA7B4",d:"m31.502 32.65-7.1 4.15V20.4l7.1-4.11v16.36Z"})),fg||(fg=p.createElement("path",{fill:"#15D0E0",d:"m24.502 12.25 7 4.04-7.1 4.11-14.2-8.2 14.2-8.2 7.2 4.15-7.1 4.1Z"})),pg||(pg=p.createElement("path",{fill:"url(#b)",fillRule:"evenodd",d:"M31.602 8.15 24.402 4l-14.184 8.191h-.001v.001l-.014.008.013.008v8.147l7.066 4.08v8.19l7.12 4.135V28.7v8.1l5.52-3.226 8.665-5.003v-5.054l-.3.173v4.707l-6.77 3.91.033-7.51 3.133-1.808-.3-.173-2.831 1.634v-.011h-.044v-8.154l1.19-.687v-.008l-1.203.695-6.773-3.908.006-.01-.214-.124 7.088-4.093Zm-6.9 28.127v-7.576l6.506-3.717v.011l.042-.024-.034 7.509-1.446.835-5.068 2.962Zm0-7.921 6.506-3.718v-7.84l-6.506 3.756v7.802Zm6.3-20.206-6.787 3.92-6.577-3.817 6.764-3.907 6.6 3.804Zm-7.096 4.087-6.568-3.811-6.535 3.774 6.199 3.58 6.904-3.543Zm.294.185-6.889 3.537 7.09 4.095 6.501-3.764-6.702-3.868Zm-6.618 20.055V24.26l-7.066-4.08v-7.47l13.586 7.844V36.24l-6.52-3.764Z",clipRule:"evenodd"})),gg||(gg=p.createElement("path",{fill:"url(#c)",d:"m34.376 14.622.007.004 4.204-2.428v-.008l-4.21 2.432Z"})),hg||(hg=p.createElement("defs",null,p.createElement("linearGradient",{id:"a",x1:24.093,x2:23.823,y1:36.799,y2:3.998,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#05646D"}),p.createElement("stop",{offset:.613,stopColor:"#15D0E0"}),p.createElement("stop",{offset:1,stopColor:"#098590"})),p.createElement("linearGradient",{id:"b",x1:26.402,x2:15.344,y1:-1,y2:32.206,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#127E88"}),p.createElement("stop",{offset:.539,stopColor:"#44F0FF"}),p.createElement("stop",{offset:1,stopColor:"#0B717A"})),p.createElement("linearGradient",{id:"c",x1:26.402,x2:15.344,y1:-1,y2:32.206,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#127E88"}),p.createElement("stop",{offset:.539,stopColor:"#44F0FF"}),p.createElement("stop",{offset:1,stopColor:"#0B717A"})))))},vE=`
  jn-min-h-[3.25rem]
  jn-bg-juno-grey-blue-11
  jn-sticky
  jn-top-0
  jn-px-6
  jn-py-3
  jn-z-50
`,yE=`
  jn-grid
  jn-grid-cols-[minmax(0,max-content),1fr]
  jn-gap-3
  jn-h-7
  jn-w-full
  jn-overflow-hidden
  jn-items-center
`,wE=`
  jn-h-7
  jn-max-w-xs
  [&>*]:jn-w-min
  [&>*]:jn-max-w-xs
  [&>*]:jn-h-7
  [&>*]:jn-object-contain
`,xE=function(t){return`
    jn-text-lg
    jn-text-theme-high
    `.concat(t&&"jn-cursor-pointer",`
    `)},mg=function(t){var n=t.heading,o=n===void 0?null:n,r=t.className,i=r===void 0?"":r,a=t.children,l=a===void 0?null:a,c=t.logo,u=c===void 0?void 0:c,d=t.onClick,f=lt(t,["heading","className","children","logo","onClick"]);return S.createElement("div",de({className:"juno-pageheader theme-dark ".concat(vE," ").concat(i),role:"banner"},f),S.createElement("div",{className:"juno-pageheader-inner ".concat(yE)},S.createElement("div",{className:"juno-pageheader-logo-container ".concat(wE)},typeof u=="function"||S.isValidElement(u)&&u||(u===!0||u===void 0)&&S.createElement(bE,{"data-testid":"default-logo",alt:""})),S.createElement("div",null,o&&S.createElement("div",{className:xE(d!==void 0),onClick:d},o)),l))},jE=`
  jn-flex
  jn-grow
  jn-bg-theme-global-bg
`,bg=function(t){var n=t.className,o=n===void 0?"":n,r=t.children,i=r===void 0?null:r,a=lt(t,["className","children"]);return S.createElement("main",de({className:"juno-main ".concat(jE," ").concat(o)},a),i)},EE=`
  jn-flex
  jn-grow
`,kE=`
  2xl:jn-container
  2xl:jn-mx-auto
`,OE=`
  3xl:jn-container
  3xl:jn-mx-auto
`,vg=function(t){var n=t.children,o=n===void 0?null:n,r=t.fullWidth,i=t.hasSideNav,a=t.className,l=a===void 0?"":a,c=lt(t,["children","fullWidth","hasSideNav","className"]);return S.createElement("div",de({className:`
        juno-main-inner
         `.concat(EE,`
         `).concat(r!==void 0&&r?"juno-main-inner-fullwidth":i!==void 0&&i?OE:kE,`
         `).concat(l)},c),o)},SE=`
  jn-flex-col
  jn-grow
  jn-bg-[right_top_1rem]
  jn-bg-no-repeat
  jn-bg-theme-content-area-bg
  jn-relative
`,yg=function(t){var n=t.className,o=n===void 0?"":n,r=t.children,i=r===void 0?null:r,a=lt(t,["className","children"]);return S.createElement("div",de({className:"juno-content-container ".concat(SE," ").concat(o)},a),i)},wg,CE=["title","titleId"];function Cc(){return Cc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Cc.apply(null,arguments)}function $E(t,n){if(t==null)return{};var o,r,i=PE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function PE(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var IE=function(t){var n=t.title,o=t.titleId,r=$E(t,CE);return p.createElement("svg",Cc({width:59,height:42,viewBox:"0 0 59 42",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,wg||(wg=p.createElement("path",{d:"M59.3825 11.1608C59.3545 11.1402 59.3267 11.1209 59.299 11.1029C56.8161 9.48915 53.8572 8.55235 50.6806 8.55235C49.5105 8.55235 48.3701 8.67944 47.272 8.92064C44.3685 3.66326 38.8166 0.108856 32.4447 0.108856C23.4894 0.108856 16.1537 7.12988 15.514 16.032L15.3487 16.0309L15.1066 16.0329C7.13468 16.1633 0.712036 22.728 0.712036 30.807C0.712036 35.0932 2.69502 38.9531 5.7492 41.6521H10.3029C6.42919 39.7347 3.75866 35.6852 3.75866 30.9998C3.75866 24.4639 8.95513 19.1655 15.3653 19.1655C16.2819 19.1655 17.1736 19.2738 18.0286 19.4792C17.9603 18.8925 17.9251 18.2952 17.9251 17.6896C17.9251 9.4705 24.4057 2.80763 32.4 2.80763C38.5297 2.80763 43.7695 6.72481 45.8801 12.2573C47.317 11.7139 48.8714 11.417 50.4937 11.417C53.699 11.417 56.6389 12.5758 58.9323 14.505C59.0819 14.6309 59.2321 14.8185 59.3825 15.0614V11.1608Z",fill:"#F0AB00"})))},TE=`
  jn-flex
  jn-shrink-0
  jn-grow-0
  jn-basis-auto
  jn-relative
  jn-bg-theme-global-bg
  jn-min-h-[3.25rem]
  jn-pl-6
  jn-pr-24
  jn-py-5
  jn-z-50
`,DE=`
  jn-h-[2.625rem]
  jn-absolute
  jn-right-0
  jn-bottom-0
`,xg=function(t){var n=t.className,o=n===void 0?"":n,r=t.children,i=r===void 0?null:r,a=lt(t,["className","children"]);return S.createElement("div",de({className:"juno-pagefooter ".concat(TE," ").concat(o),role:"contentinfo"},a),i,S.createElement(IE,{className:DE,alt:"cloud shape"}))},ME=function(t){var n=t.children,o=t.className,r=o===void 0?"":o,i=t.contentHeading,a=i===void 0?"":i,l=t.embedded,c=t.fullWidthContent,u=t.pageHeader,d=u===void 0?S.createElement(mg,null):u,f=t.pageFooter,g=f===void 0?S.createElement(xg,null):f,b=t.sideNavigation,h=t.topNavigation,m=lt(t,["children","className","contentHeading","embedded","fullWidthContent","pageHeader","pageFooter","sideNavigation","topNavigation"]);return a&&a.length&&console.warn("AppShell: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a ContentHeading element as a child in your main content."),S.createElement(sE,de({className:r},m),a||"",l!==void 0&&l?S.createElement(S.Fragment,null,h&&h,S.createElement(bg,null,S.createElement(vg,{fullWidth:c!==!1,hasSideNav:!!b,className:"".concat(h?"jn-mt-[3.875rem]":"")},b&&b,S.createElement(yg,null,n)))):S.createElement(S.Fragment,null,d&&(typeof d=="string"||d instanceof String)?S.createElement(mg,{heading:d}):d,h&&h,S.createElement(bg,null,S.createElement(vg,{fullWidth:c===!0,hasSideNav:!!b,className:"jn-mt-[3.875rem]"},b&&b,S.createElement(yg,{className:b?"":"jn-ml-8"},n))),g||S.createElement(xg,null)))};const Sf=t=>{let{mode:n="open",delegatesFocus:o=!1,children:r=null}=t;const i=p.useRef(),[a,l]=p.useState();return S.useEffect(()=>{i.current&&l(i.current.attachShadow({delegatesFocus:o,mode:n}))},[]),S.createElement("div",{ref:i,"data-shadow-host":"true",style:{height:"100%"}},a&&Xj.createPortal(r,a))};Sf.propTypes={mode:j.oneOf(["open","closed"]),delegatesFocus:j.bool,children:j.node};function o1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i1(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var o=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(n,i);return new a}return n.apply(this,arguments)};o.prototype=n.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(o,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),o}function K(t){return n=>{let{opacityVariable:o,opacityValue:r}=n;return r===void 0?o===void 0?`rgb(var(${t}))`:`rgba(var(${t}), var(${o}, 1))`:`rgba(var(${t}), ${r})`}}var NE={content:["./src/components/**/*.{js,jsx,ts,tsx,mdx}","./src/dummyComponents/*.{js,jsx,ts,tsx,mdx}","./src/docs/**/*.{js,jsx,ts,tsx,mdx}"],prefix:"jn-",theme:{fontFamily:{sans:['"IBM Plex Sans"',"ui-sans-serif","Arial","system-ui","sans-serif"],condensed:['"IBM Plex Sans Condensed"',"ui-sans-serif","Arial","system-ui","sans-serif"],serif:['"IBM Plex Serif"',"ui-serif","serif"],mono:['"IBM Plex Mono"',"ui-monospace","monospace"]},colors:{current:"currentColor","juno-grey-blue":{1:K("--color-juno-grey-blue-1-raw"),2:K("--color-juno-grey-blue-2-raw"),3:K("--color-juno-grey-blue-3-raw"),4:K("--color-juno-grey-blue-4-raw"),5:K("--color-juno-grey-blue-5-raw"),6:K("--color-juno-grey-blue-6-raw"),7:K("--color-juno-grey-blue-7-raw"),8:K("--color-juno-grey-blue-8-raw"),9:K("--color-juno-grey-blue-9-raw"),10:K("--color-juno-grey-blue-10-raw"),11:K("--color-juno-grey-blue-11-raw"),DEFAULT:K("--color-juno-grey-blue-11-raw")},"juno-blue":{1:K("--color-juno-blue-1-raw"),2:K("--color-juno-blue-2-raw"),3:K("--color-juno-blue-3-raw"),4:K("--color-juno-blue-4-raw"),5:K("--color-juno-blue-5-raw"),6:K("--color-juno-blue-6-raw"),7:K("--color-juno-blue-7-raw"),8:K("--color-juno-blue-8-raw"),9:K("--color-juno-blue-9-raw"),10:K("--color-juno-blue-10-raw"),DEFAULT:K("--color-juno-blue-5-raw")},"juno-turquoise":{1:K("--color-juno-turquoise-1-raw"),2:K("--color-juno-turquoise-2-raw"),3:K("--color-juno-turquoise-3-raw"),4:K("--color-juno-turquoise-4-raw"),5:K("--color-juno-turquoise-5-raw"),6:K("--color-juno-turquoise-6-raw"),7:K("--color-juno-turquoise-7-raw"),8:K("--color-juno-turquoise-8-raw"),9:K("--color-juno-turquoise-9-raw"),10:K("--color-juno-turquoise-10-raw"),DEFAULT:K("--color-juno-turquoise-5-raw")},"juno-grey-light":{1:K("--color-juno-grey-light-1-raw"),2:K("--color-juno-grey-light-2-raw"),3:K("--color-juno-grey-light-3-raw"),4:K("--color-juno-grey-light-4-raw"),5:K("--color-juno-grey-light-5-raw"),6:K("--color-juno-grey-light-6-raw"),7:K("--color-juno-grey-light-7-raw"),8:K("--color-juno-grey-light-8-raw"),9:K("--color-juno-grey-light-9-raw"),10:K("--color-juno-grey-light-10-raw"),11:K("--color-juno-grey-light-11-raw"),DEFAULT:K("--color-juno-grey-light-1-raw")},"juno-red":{1:K("--color-juno-red-1-raw"),2:K("--color-juno-red-2-raw"),3:K("--color-juno-red-3-raw"),4:K("--color-juno-red-4-raw"),5:K("--color-juno-red-5-raw"),6:K("--color-juno-red-6-raw"),7:K("--color-juno-red-7-raw"),8:K("--color-juno-red-8-raw"),DEFAULT:K("--color-juno-red-5-raw")},"sap-grey":{1:K("--color-sap-grey-1-raw"),2:K("--color-sap-grey-2-raw"),3:K("--color-sap-grey-3-raw"),4:K("--color-sap-grey-4-raw"),5:K("--color-sap-grey-5-raw"),6:K("--color-sap-grey-6-raw"),7:K("--color-sap-grey-7-raw"),8:K("--color-sap-grey-8-raw"),DEFAULT:K("--color-sap-grey-8-raw")},"sap-blue":{1:K("--color-sap-blue-1-raw"),2:K("--color-sap-blue-2-raw"),3:K("--color-sap-blue-3-raw"),4:K("--color-sap-blue-4-raw"),5:K("--color-sap-blue-5-raw"),6:K("--color-sap-blue-6-raw"),DEFAULT:K("--color-sap-blue-5-raw")},"sap-gold":{DEFAULT:K("--color-sap-gold-raw")},"sap-purple":{1:K("--color-sap-purple-1-raw"),2:K("--color-sap-purple-2-raw"),3:K("--color-sap-purple-3-raw"),4:K("--color-sap-purple-4-raw"),5:K("--color-sap-purple-5-raw"),6:K("--color-sap-purple-6-raw"),DEFAULT:K("--color-sap-purple-5-raw")},"sap-green":{1:K("--color-sap-green-1-raw"),2:K("--color-sap-green-2-raw"),3:K("--color-sap-green-3-raw"),4:K("--color-sap-green-4-raw"),5:K("--color-sap-green-5-raw"),6:K("--color-sap-green-6-raw"),DEFAULT:K("--color-sap-green-5-raw")},"sap-orange":{1:K("--color-sap-orange-1-raw"),2:K("--color-sap-orange-2-raw"),3:K("--color-sap-orange-3-raw"),4:K("--color-sap-orange-4-raw"),5:K("--color-sap-orange-5-raw"),6:K("--color-sap-orange-6-raw"),DEFAULT:K("--color-sap-orange-5-raw")},white:K("--color-white-raw"),black:K("--color-black-raw"),transparent:"transparent",theme:{accent:K("--color-accent-raw"),danger:K("--color-danger-raw"),error:K("--color-error-raw"),info:K("--color-info-raw"),success:K("--color-success-raw"),warning:K("--color-warning-raw"),focus:K("--color-focus-raw"),"background-lvl-0":K("--color-background-lvl-0-raw"),"background-lvl-1":K("--color-background-lvl-1-raw"),"background-lvl-2":K("--color-background-lvl-2-raw"),"background-lvl-3":K("--color-background-lvl-3-raw"),"background-lvl-4":K("--color-background-lvl-4-raw"),"background-lvl-5":K("--color-background-lvl-5-raw")}},extend:{backgroundColor:{theme:{"global-bg":K("--color-global-bg-raw"),"badge-default":"var(--color-badge-default-bg)","box-default":"var(--color-box-bg)","code-block":K("--color-codeblock-bg"),"content-area-bg":K("--color-content-area-bg-raw"),panel:"var(--color-panel-bg)",textinput:K("--color-textinput-bg"),"textinput-autofill":K("--color-textinput-autofill-bg"),select:K("--color-select-bg"),checkbox:K("--color-checkbox-bg"),radio:K("--color-radio-bg"),"radio-checked":K("--color-radio-checked-bg"),"switch-handle":K("--color-switch-handle-bg"),"switch-handle-checked":K("--color-switch-handle-checked-bg"),required:K("--color-required-bg"),introbox:K("--color-introbox-bg"),"datagridrow-selected":K("--color-datagridrow-selected"),"datalistrow-selected":K("--color-datalistrow-selected"),"message-border-danger":K("--color-message-danger-border"),"message-border-default":K("--color-message-default-border"),"message-border-error":K("--color-message-error-border"),"message-border-warning":K("--color-message-warning-border"),"message-border-success":K("--color-message-success-border"),"tab-navigation-top":K("--color-tabnavigation-top-bg"),filters:K("--color-filters-bg"),"filter-input":K("--color-filter-input-bg"),"filter-input-textinput":K("--color-filter-input-textinput-bg"),"filter-pill-key":K("--color-filter-pill-key-bg"),"modal-backdrop":"var(--color-modal-backdrop-bg)","sidenavigation-item-active":"var(--color-sidenavigation-item-active-bg)","topnavigation-item":"var(--color-topnavigation-item-bg)","topnavigation-item-active":"var(--color-topnavigation-item-active-bg)"}},backgroundImage:{"theme-message-default":"var(--gradient-message-default-bg)","theme-message-success":"var(--gradient-message-success-bg)","theme-message-warning":"var(--gradient-message-warning-bg)","theme-message-danger":"var(--gradient-message-danger-bg)","theme-message-error":"var(--gradient-message-error-bg)"},textColor:{theme:{highest:K("--color-text-highest-raw"),high:K("--color-text-high-raw"),default:K("--color-text-default-raw"),light:K("--color-text-light-raw"),disabled:K("--color-text-disabled-raw"),link:K("--color-text-link-raw"),"on-danger":K("--color-button-danger-text"),"on-default":K("--color-button-default-text"),textinput:K("--color-textinput-text"),"textinput-autofill":K("--color-textinput-autofill-text"),"textinput-autofill-label":K("--color-textinput-autofill-label"),"checkbox-checked":K("--color-checkbox-checked-color"),"sidenavigation-item-active":"var(--color-sidenavigation-item-active)"}},borderColor:{theme:{default:K("--color-default-border"),"codeblock-bar":K("--color-codeblock-bar-border"),"codeblock-tab-active":K("--color-text-default-raw"),"message-default":K("--color-message-default-border"),"message-danger":K("--color-message-danger-border"),"message-error":K("--color-message-error-border"),"message-warning":K("--color-message-warning-border"),"message-success":K("--color-message-success-border"),panel:K("--color-panel-border-raw"),"switch-default":K("--color-switch-default-border"),"switch-hover":K("--color-switch-hover-border"),"datalist-row":K("--color-datalist-row-border"),introbox:K("--color-introbox-border"),"tab-navigation-content-bottom":K("--color-tabnavigation-content-bottom-border"),"tab-active-bottom":K("--color-text-default-raw"),"filter-input":K("--color-filter-input-border"),"filter-pill":K("--color-filter-pill-border"),"box-default":"var(--color-box-border)","textinput-default":K("--color-textinput-default-border"),"tab-content-inactive-bottom":K("--color-background-lvl-4-raw")}},padding:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem","grid-column":"0 .5rem"},height:{textinput:"2.375rem",floatinglabelinput:"3rem","switch-default":"1.4375rem","switch-handle-default":"1.1875rem"},ringOffsetColor:{theme:{focus:K("--color-global-bg-raw")}},screens:{"3xl":"1856px"},width:{"switch-default":"2.625rem","switch-handle-default":"1.1875rem","grid-column-default":"var(--grid-column-default-width)","grid-col-1":"8.333333%","grid-col-2":"16.666667%","grid-col-3":"25%","grid-col-4":"33.333333%","grid-col-5":"41.666667%","grid-col-6":"50%","grid-col-7":"58.333333%","grid-col-8":"66.666667%","grid-col-9":"75%","grid-col-10":"83.333333%","grid-col-11":"91.666667%","grid-col-12":"100%"},borderRadius:{"3px":"3px"},margin:{"grid-row":"0 var(--grid-row-margin-x)"},flex:{"grid-column":"var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis)"}},borderWidth:{DEFAULT:"1px",0:"0",2:"2px",3:"3px",4:"4px",6:"6px"}},plugins:[]},RE=o1(NE);const jg="https://assets.juno.global.cloud.sap/assets/fonts/plex/css/ibm-plex.min.css",Es="juno-style-provider-golbal-fonts",a1=t=>{let{inline:n}=t;return p.useInsertionEffect(()=>{if(!document.querySelector(`[id="${Es}"]`)){const o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.googleapis.com";const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous";const i=document.createElement("link");i.rel="stylesheet",i.href=jg,i.setAttribute("id",Es),document.head.appendChild(o),document.head.appendChild(r),document.head.appendChild(i)}},[]),n?S.createElement("style",{[`data-${Es}`]:""},`@import url("${jg}");`):null};a1.propTypes={inline:j.bool};const $c=`@charset "UTF-8";
*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
/*
! tailwindcss v3.4.13 | MIT License | https://tailwindcss.com
*/
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}
::before,
::after {
  --tw-content: '';
}
/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/
html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: "IBM Plex Sans", ui-sans-serif, Arial, system-ui, sans-serif; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}
/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}
/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}
/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}
/*
Remove the default font size and weight for headings.
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
a {
  color: inherit;
  text-decoration: inherit;
}
/*
Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}
/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: "IBM Plex Mono", ui-monospace, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}
/*
Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}
/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}
/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}
/*
Remove the inheritance of text transform in Edge and Firefox.
*/
button,
select {
  text-transform: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
/*
Use the modern Firefox focus style for all focusable elements.
*/
:-moz-focusring {
  outline: auto;
}
/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
:-moz-ui-invalid {
  box-shadow: none;
}
/*
Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}
/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/*
Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/*
Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}
/*
Removes the default spacing and border for appropriate elements.
*/
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}
/*
Prevent resizing textareas horizontally by default.
*/
textarea {
  resize: vertical;
}
/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
/*
Set the default cursor for buttons.
*/
button,
[role="button"] {
  cursor: pointer;
}
/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}
/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}
/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
img,
video {
  max-width: 100%;
  height: auto;
}
/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}
html,
  body,
  .juno-app-body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "IBM Plex Sans", ui-sans-serif, Arial, system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    height: 100%;
  }
.theme-dark,
  .theme-light{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-global-bg-raw), var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-default-raw), var(--tw-text-opacity));
}
a{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-link-raw), var(--tw-text-opacity));
}
/* Color Definitions */
/* The Mother of Colors – The single source of truth of colors in Juno.
   Here we define all relevant colors as triples of their rgb values.
   We use these to generate CSS variables: one is the triple itself for use with tailwind opacity functions, one is the rgb( r, g, b) color definition for direct use.

*/
/* Global Color Definitions */
/* Light Theme Color Definitions */
/* Dark Theme Color Definitions */
/* Global Color Variables */
:root,
:host {
  --color-white: rgb(255, 255, 255);
  --color-white-raw: 255, 255, 255;
  --color-black: rgb(0, 0, 0);
  --color-black-raw: 0, 0, 0;
  --color-sap-grey-1: rgb(255, 255, 255);
  --color-sap-grey-1-raw: 255, 255, 255;
  --color-sap-grey-2: rgb(225, 225, 225);
  --color-sap-grey-2-raw: 225, 225, 225;
  --color-sap-grey-3: rgb(204, 204, 204);
  --color-sap-grey-3-raw: 204, 204, 204;
  --color-sap-grey-4: rgb(153, 153, 153);
  --color-sap-grey-4-raw: 153, 153, 153;
  --color-sap-grey-5: rgb(127, 127, 127);
  --color-sap-grey-5-raw: 127, 127, 127;
  --color-sap-grey-6: rgb(102, 102, 102);
  --color-sap-grey-6-raw: 102, 102, 102;
  --color-sap-grey-7: rgb(75, 75, 75);
  --color-sap-grey-7-raw: 75, 75, 75;
  --color-sap-grey-8: rgb(0, 0, 0);
  --color-sap-grey-8-raw: 0, 0, 0;
  --color-sap-blue-1: rgb(15, 170, 25);
  --color-sap-blue-1-raw: 15, 170, 25;
  --color-sap-blue-2: rgb(0, 143, 211);
  --color-sap-blue-2-raw: 0, 143, 211;
  --color-sap-blue-3: rgb(0, 118, 203);
  --color-sap-blue-3-raw: 0, 118, 203;
  --color-sap-blue-4: rgb(15, 70, 167);
  --color-sap-blue-4-raw: 15, 70, 167;
  --color-sap-blue-5: rgb(0, 50, 131);
  --color-sap-blue-5-raw: 0, 50, 131;
  --color-sap-blue-6: rgb(0, 25, 90);
  --color-sap-blue-6-raw: 0, 25, 90;
  --color-sap-gold: rgb(240, 171, 0);
  --color-sap-gold-raw: 240, 171, 0;
  --color-sap-purple-1: rgb(220, 0, 150);
  --color-sap-purple-1-raw: 220, 0, 150;
  --color-sap-purple-2: rgb(190, 0, 140);
  --color-sap-purple-2-raw: 190, 0, 140;
  --color-sap-purple-3: rgb(151, 10, 130);
  --color-sap-purple-3-raw: 151, 10, 130;
  --color-sap-purple-4: rgb(118, 10, 133);
  --color-sap-purple-4-raw: 118, 10, 133;
  --color-sap-purple-5: rgb(69, 21, 126);
  --color-sap-purple-5-raw: 69, 21, 126;
  --color-sap-purple-6: rgb(60, 20, 100);
  --color-sap-purple-6-raw: 60, 20, 100;
  --color-sap-green-1: rgb(188, 220, 80);
  --color-sap-green-1-raw: 188, 220, 80;
  --color-sap-green-2: rgb(147, 201, 57);
  --color-sap-green-2-raw: 147, 201, 57;
  --color-sap-green-3: rgb(79, 184, 28);
  --color-sap-green-3-raw: 79, 184, 28;
  --color-sap-green-4: rgb(52, 139, 38);
  --color-sap-green-4-raw: 52, 139, 38;
  --color-sap-green-5: rgb(36, 114, 48);
  --color-sap-green-5-raw: 36, 114, 48;
  --color-sap-green-6: rgb(15, 75, 60);
  --color-sap-green-6-raw: 15, 75, 60;
  --color-sap-orange-1: rgb(255, 175, 0);
  --color-sap-orange-1-raw: 255, 175, 0;
  --color-sap-orange-2: rgb(250, 145, 0);
  --color-sap-orange-2-raw: 250, 145, 0;
  --color-sap-orange-3: rgb(235, 115, 0);
  --color-sap-orange-3-raw: 235, 115, 0;
  --color-sap-orange-4: rgb(227, 85, 0);
  --color-sap-orange-4-raw: 227, 85, 0;
  --color-sap-orange-5: rgb(208, 69, 18);
  --color-sap-orange-5-raw: 208, 69, 18;
  --color-sap-orange-6: rgb(188, 54, 24);
  --color-sap-orange-6-raw: 188, 54, 24;
  --color-juno-grey-blue-1: rgb(64, 70, 75);
  --color-juno-grey-blue-1-raw: 64, 70, 75;
  --color-juno-grey-blue-2: rgb(48, 54, 60);
  --color-juno-grey-blue-2-raw: 48, 54, 60;
  --color-juno-grey-blue-3: rgb(41, 47, 54);
  --color-juno-grey-blue-3-raw: 41, 47, 54;
  --color-juno-grey-blue-4: rgb(38, 44, 51);
  --color-juno-grey-blue-4-raw: 38, 44, 51;
  --color-juno-grey-blue-5: rgb(36, 42, 49);
  --color-juno-grey-blue-5-raw: 36, 42, 49;
  --color-juno-grey-blue-6: rgb(31, 38, 45);
  --color-juno-grey-blue-6-raw: 31, 38, 45;
  --color-juno-grey-blue-7: rgb(28, 35, 42);
  --color-juno-grey-blue-7-raw: 28, 35, 42;
  --color-juno-grey-blue-8: rgb(23, 30, 37);
  --color-juno-grey-blue-8-raw: 23, 30, 37;
  --color-juno-grey-blue-9: rgb(18, 25, 32);
  --color-juno-grey-blue-9-raw: 18, 25, 32;
  --color-juno-grey-blue-10: rgb(13, 20, 28);
  --color-juno-grey-blue-10-raw: 13, 20, 28;
  --color-juno-grey-blue-11: rgb(0, 8, 16);
  --color-juno-grey-blue-11-raw: 0, 8, 16;
  --color-juno-grey-light-1: rgb(249, 249, 249);
  --color-juno-grey-light-1-raw: 249, 249, 249;
  --color-juno-grey-light-2: rgb(247, 247, 247);
  --color-juno-grey-light-2-raw: 247, 247, 247;
  --color-juno-grey-light-3: rgb(244, 244, 244);
  --color-juno-grey-light-3-raw: 244, 244, 244;
  --color-juno-grey-light-4: rgb(241, 241, 241);
  --color-juno-grey-light-4-raw: 241, 241, 241;
  --color-juno-grey-light-5: rgb(238, 238, 238);
  --color-juno-grey-light-5-raw: 238, 238, 238;
  --color-juno-grey-light-6: rgb(235, 235, 235);
  --color-juno-grey-light-6-raw: 235, 235, 235;
  --color-juno-grey-light-7: rgb(233, 233, 233);
  --color-juno-grey-light-7-raw: 233, 233, 233;
  --color-juno-grey-light-8: rgb(230, 230, 230);
  --color-juno-grey-light-8-raw: 230, 230, 230;
  --color-juno-grey-light-9: rgb(227, 227, 227);
  --color-juno-grey-light-9-raw: 227, 227, 227;
  --color-juno-grey-light-10: rgb(215, 215, 215);
  --color-juno-grey-light-10-raw: 215, 215, 215;
  --color-juno-blue-1: rgb(203, 232, 247);
  --color-juno-blue-1-raw: 203, 232, 247;
  --color-juno-blue-2: rgb(165, 211, 234);
  --color-juno-blue-2-raw: 165, 211, 234;
  --color-juno-blue-3: rgb(137, 201, 232);
  --color-juno-blue-3-raw: 137, 201, 232;
  --color-juno-blue-4: rgb(67, 162, 208);
  --color-juno-blue-4-raw: 67, 162, 208;
  --color-juno-blue-5: rgb(0, 125, 184);
  --color-juno-blue-5-raw: 0, 125, 184;
  --color-juno-blue-6: rgb(30, 106, 146);
  --color-juno-blue-6-raw: 30, 106, 146;
  --color-juno-blue-7: rgb(10, 103, 153);
  --color-juno-blue-7-raw: 10, 103, 153;
  --color-juno-blue-8: rgb(7, 85, 128);
  --color-juno-blue-8-raw: 7, 85, 128;
  --color-juno-blue-9: rgb(5, 70, 105);
  --color-juno-blue-9-raw: 5, 70, 105;
  --color-juno-blue-10: rgb(3, 55, 84);
  --color-juno-blue-10-raw: 3, 55, 84;
  --color-juno-turquoise-1: rgb(197, 247, 255);
  --color-juno-turquoise-1-raw: 197, 247, 255;
  --color-juno-turquoise-2: rgb(132, 241, 255);
  --color-juno-turquoise-2-raw: 132, 241, 255;
  --color-juno-turquoise-3: rgb(25, 232, 250);
  --color-juno-turquoise-3-raw: 25, 232, 250;
  --color-juno-turquoise-4: rgb(22, 217, 234);
  --color-juno-turquoise-4-raw: 22, 217, 234;
  --color-juno-turquoise-5: rgb(21, 208, 224);
  --color-juno-turquoise-5-raw: 21, 208, 224;
  --color-juno-turquoise-6: rgb(15, 167, 180);
  --color-juno-turquoise-6-raw: 15, 167, 180;
  --color-juno-turquoise-7: rgb(9, 133, 144);
  --color-juno-turquoise-7-raw: 9, 133, 144;
  --color-juno-turquoise-8: rgb(5, 100, 109);
  --color-juno-turquoise-8-raw: 5, 100, 109;
  --color-juno-turquoise-9: rgb(2, 69, 75);
  --color-juno-turquoise-9-raw: 2, 69, 75;
  --color-juno-turquoise-10: rgb(1, 41, 4);
  --color-juno-turquoise-10-raw: 1, 41, 4;
  --color-juno-primary-blue-1: rgb(15, 170, 255);
  --color-juno-primary-blue-1-raw: 15, 170, 255;
  --color-juno-primary-blue-2: rgb(0, 143, 211);
  --color-juno-primary-blue-2-raw: 0, 143, 211;
  --color-juno-primary-blue-3: rgb(0, 118, 203);
  --color-juno-primary-blue-3-raw: 0, 118, 203;
  --color-juno-primary-blue-4: rgb(15, 70, 167);
  --color-juno-primary-blue-4-raw: 15, 70, 167;
  --color-juno-primary-blue-5: rgb(0, 50, 131);
  --color-juno-primary-blue-5-raw: 0, 50, 131;
  --color-juno-primary-blue-6: rgb(0, 25, 90);
  --color-juno-primary-blue-6-raw: 0, 25, 90;
}

/* Light Theme Color Variables */
.theme-light {
  --color-accent: rgb(0, 118, 203);
  --color-accent-raw: 0, 118, 203;
  --color-info: rgb(0, 118, 203);
  --color-info-raw: 0, 118, 203;
  --color-success: rgb(79, 184, 28);
  --color-success-raw: 79, 184, 28;
  --color-warning: rgb(255, 175, 0);
  --color-warning-raw: 255, 175, 0;
  --color-danger: rgb(199, 0, 0);
  --color-danger-raw: 199, 0, 0;
  --color-error: rgb(199, 0, 0);
  --color-error-raw: 199, 0, 0;
  --color-juno-text-light: rgb(150, 150, 150);
  --color-juno-text-light-raw: 150, 150, 150;
  --color-juno-text-default: rgb(76, 76, 76);
  --color-juno-text-default-raw: 76, 76, 76;
  --color-juno-text-high: rgb(64, 64, 64);
  --color-juno-text-high-raw: 64, 64, 64;
  --color-juno-text-highest: rgb(0, 0, 0);
  --color-juno-text-highest-raw: 0, 0, 0;
  --color-juno-text-disabled: rgb(183, 183, 183);
  --color-juno-text-disabled-raw: 183, 183, 183;
  --color-juno-primary-danger-1: rgb(235, 146, 146);
  --color-juno-primary-danger-1-raw: 235, 146, 146;
  --color-juno-primary-danger-2: rgb(218, 93, 93);
  --color-juno-primary-danger-2-raw: 218, 93, 93;
  --color-juno-primary-danger-3: rgb(213, 64, 64);
  --color-juno-primary-danger-3-raw: 213, 64, 64;
  --color-juno-primary-danger-4: rgb(199, 0, 0);
  --color-juno-primary-danger-4-raw: 199, 0, 0;
  --color-juno-primary-danger-5: rgb(165, 11, 11);
  --color-juno-primary-danger-5-raw: 165, 11, 11;
}

/* Dark Theme Color Variables */
.theme-dark {
  --color-accent: rgb(21, 208, 224);
  --color-accent-raw: 21, 208, 224;
  --color-info: rgb(21, 208, 224);
  --color-info-raw: 21, 208, 224;
  --color-success: rgb(59, 255, 91);
  --color-success-raw: 59, 255, 91;
  --color-warning: rgb(255, 198, 0);
  --color-warning-raw: 255, 198, 0;
  --color-danger: rgb(255, 65, 16);
  --color-danger-raw: 255, 65, 16;
  --color-error: rgb(255, 65, 16);
  --color-error-raw: 255, 65, 16;
  --color-juno-text-light: rgb(122, 122, 122);
  --color-juno-text-light-raw: 122, 122, 122;
  --color-juno-text-default: rgb(187, 187, 187);
  --color-juno-text-default-raw: 187, 187, 187;
  --color-juno-text-high: rgb(222, 223, 224);
  --color-juno-text-high-raw: 222, 223, 224;
  --color-juno-text-highest: rgb(255, 254, 253);
  --color-juno-text-highest-raw: 255, 254, 253;
  --color-juno-text-disabled: rgb(92, 92, 92);
  --color-juno-text-disabled-raw: 92, 92, 92;
  --color-juno-primary-danger-1: rgb(231, 163, 137);
  --color-juno-primary-danger-1-raw: 231, 163, 137;
  --color-juno-primary-danger-2: rgb(222, 126, 91);
  --color-juno-primary-danger-2-raw: 222, 126, 91;
  --color-juno-primary-danger-3: rgb(208, 69, 18);
  --color-juno-primary-danger-3-raw: 208, 69, 18;
  --color-juno-primary-danger-4: rgb(187, 62, 16);
  --color-juno-primary-danger-4-raw: 187, 62, 16;
  --color-juno-primary-danger-5: rgb(164, 54, 14);
  --color-juno-primary-danger-5-raw: 164, 54, 14;
}

/* Color Assignments */
/* ----- LIGHT THEME ----- */
.theme-light {
  --color-background-lvl-0: var(--color-white);
  --color-background-lvl-1: var(--color-juno-grey-light-1);
  --color-background-lvl-2: var(--color-juno-grey-light-3);
  --color-background-lvl-3: var(--color-juno-grey-light-7);
  --color-background-lvl-4: var(--color-juno-grey-light-9);
  --color-background-lvl-5: var(--color-juno-grey-light-10);
  --color-background-lvl-0-raw: var(--color-white-raw);
  --color-background-lvl-1-raw: var(--color-juno-grey-light-1-raw);
  --color-background-lvl-2-raw: var(--color-juno-grey-light-3-raw);
  --color-background-lvl-3-raw: var(--color-juno-grey-light-7-raw);
  --color-background-lvl-4-raw: var(--color-juno-grey-light-9-raw);
  --color-background-lvl-5-raw: var(--color-juno-grey-light-10-raw);
  --color-global-bg: var(--color-juno-grey-light-1);
  --color-global-bg-raw: var(--color-juno-grey-light-1-raw);
  --color-global-text: var(--color-juno-text-default-raw);
  --color-content-area-bg: var(--color-background-lvl-0);
  --color-content-area-bg-raw: var(--color-background-lvl-0-raw);
  --color-focus: var(--color-accent);
  --color-focus-raw: var(--color-accent-raw);
  --color-text-highest: var(--color-juno-text-highest);
  --color-text-high: var(--color-juno-text-high);
  --color-text-default: var(--color-juno-text-default);
  --color-text-light: var(--color-juno-text-light);
  --color-text-disabled: var(--color-juno-text-disabled);
  --color-text-link: var(--color-accent);
  --color-text-highest-raw: var(--color-juno-text-highest-raw);
  --color-text-high-raw: var(--color-juno-text-high-raw);
  --color-text-default-raw: var(--color-juno-text-default-raw);
  --color-text-light-raw: var(--color-juno-text-light-raw);
  --color-text-disabled-raw: var(--color-juno-text-disabled-raw);
  --color-text-link-raw: var(--color-accent-raw);
  --color-badge-default-bg: var(--color-juno-grey-light-3);
  --color-button-primary-text: var(--color-white);
  --color-button-primary-bg: var(--color-juno-primary-blue-3);
  --color-button-primary-hover-text: var(--color-white);
  --color-button-primary-hover-bg: var(--color-juno-primary-blue-2);
  --color-button-primary-active-text: var(--color-white);
  --color-button-primary-active-bg: var(--color-juno-primary-blue-5);
  --color-button-default-text: var(--color-text-high);
  --color-button-default-bg: var(--color-background-lvl-4);
  --color-button-default-border: var(--color-background-lvl-4);
  --color-button-default-hover-text: var(--color-text-high);
  --color-button-default-hover-bg: var(--color-background-lvl-3);
  --color-button-default-hover-border: var(--color-background-lvl-3);
  --color-button-default-active-text: var(--color-text-high);
  --color-button-default-active-bg: var(--color-background-lvl-2);
  --color-button-default-active-border: var(--color-background-lvl-4);
  --color-button-subdued-text: var(--color-text-default);
  --color-button-subdued-icon: var(--color-text-default);
  --color-button-subdued-bg: var(--color-background-lvl-3);
  --color-button-subdued-border: var(--color-background-lvl-4);
  --color-button-subdued-hover-text: var(--color-text-default);
  --color-button-subdued-hover-bg: var(--color-background-lvl-1);
  --color-button-subdued-hover-border: var(--color-background-lvl-4);
  --color-button-subdued-active-text: var(--color-text-default);
  --color-button-subdued-active-bg: var(--color-background-lvl-0);
  --color-button-subdued-active-border: var(--color-background-lvl-4);
  --color-button-primary-danger-text: var(--color-white);
  --color-button-primary-danger-bg: var(--color-juno-primary-danger-4);
  --color-button-primary-danger-hover-text: var(--color-white);
  --color-button-primary-danger-hover-bg: var(--color-juno-primary-danger-3);
  --color-button-primary-danger-active-text: var(--color-white);
  --color-button-primary-danger-active-bg: var(--color-juno-primary-danger-5);
  --color-icon-danger: var(--color-juno-red-raw);
  --color-icon-info: var(--color-accent-raw);
  --color-icon-success: var(--color-sap-green-raw);
  --color-icon-warning: var(--color-warning-raw);
  --color-message-danger-border: var(--color-danger-raw);
  --gradient-message-danger-bg: linear-gradient(90deg, rgb(255, 231, 224) 0%, rgb(255, 180, 158) 100%);
  --color-message-default-border: var(--color-info-raw);
  --gradient-message-default-bg: linear-gradient(90deg, rgb(229, 244, 248) 0%, rgb(46, 168, 196) 100%);
  --color-message-error-border: var(--color-error-raw);
  --gradient-message-error-bg: linear-gradient(90deg, rgb(255, 231, 224) 0%, rgb(255, 180, 158) 100%);
  --color-message-warning-border: var(--color-warning-raw);
  --gradient-message-warning-bg: linear-gradient(90deg, rgb(253, 245, 226) 0%, rgb(255, 231, 147) 100%);
  --color-message-success-border: var(--color-success-raw);
  --gradient-message-success-bg: linear-gradient(90deg, rgb(230, 247, 233) 0%, rgb(170, 229, 180) 100%);
  --color-introbox-bg: var(--color-background-lvl-2-raw);
  --color-introbox-border: var(--color-accent-raw);
  --color-textinput-bg: var(--color-background-lvl-3-raw);
  --color-textinput-default-border: var(--color-background-lvl-4-raw);
  --color-textinput-text: var(--color-juno-text-high-raw);
  --color-textinput-placeholder-text: var(--color-juno-text-high-raw);
  --color-textinput-focus-border: var(--color-accent-raw);
  --color-textinput-autofill-text: var(--color-black);
  --color-textinput-autofill-bg: var(--color-juno-blue-1);
  --color-textinput-autofill-label: var(--color-juno-text-default);
  --color-select-bg: var(--color-background-lvl-3-raw);
  --color-checkbox-bg: var(--color-background-lvl-5-raw);
  --color-checkbox-checked-color: var(--color-accent-raw);
  --color-radio-bg: var(--color-background-lvl-5-raw);
  --color-radio-checked-bg: var(--color-accent-raw);
  --color-switch-default-border: var(--color-juno-text-default-raw);
  --color-switch-handle-bg: var(--color-juno-text-default-raw);
  --color-switch-handle-checked-bg: var(--color-accent-raw);
  --color-required-bg: var(--color-accent-raw);
  --color-spinner-primary: var(--color-accent-raw);
  --color-syntax-highlight-base00: var(--color-codeblock-bg);
  --color-syntax-highlight-base01: var(--color-juno-grey-light-3);
  --color-syntax-highlight-base02: var(--color-sap-grey-3);
  --color-syntax-highlight-base03: var(--color-sap-grey-3);
  --color-syntax-highlight-base04: var(--color-sap-grey-3);
  --color-syntax-highlight-base05: var(--color-juno-text-high);
  --color-syntax-highlight-base06: red;
  --color-syntax-highlight-base07: var(--color-juno-text-high);
  --color-syntax-highlight-base08: var(--color-juno-grey-blue-6);
  --color-syntax-highlight-base09: var(--color-juno-blue-4);
  --color-syntax-highlight-base0A: var(--color-juno-grey-blue-6);
  --color-syntax-highlight-base0B: var(--color-juno-blue-4);
  --color-syntax-highlight-base0C: var(--color-sap-gold);
  --color-syntax-highlight-base0D: var(--color-sap-gold);
  --color-syntax-highlight-base0E: var(--color-juno-blue-4);
  --color-syntax-highlight-base0F: var(--color-juno-blue-4);
  --color-datagridrow-selected: var(--color-accent-raw);
  --color-datalist-row-border: var(--color-background-lvl-1-raw);
  --color-datalistrow-selected: var(--color-accent-raw);
  --color-codeblock-bg: var(--color-background-lvl-2-raw);
  --color-codeblock-bar-border: var(--color-background-lvl-4-raw);
  --color-panel-bg: rgba(252, 252, 252, 0.8);
  --color-tabnavigation-top-bg: var(--color-juno-grey-light-5-raw);
  --color-tabnavigation-content-bottom-border: var(--color-background-lvl-4-raw);
  --color-filters-bg: var(--color-background-lvl-1-raw);
  --color-filter-input-bg: var(--color-background-lvl-0-raw);
  --color-filter-input-border: var(--color-background-lvl-4-raw);
  --color-filter-input-textinput-bg: transparent;
  --color-filter-pill-border: var(--color-background-lvl-4-raw);
  --color-filter-pill-key-bg: var(--color-background-lvl-4-raw);
  --color-modal-backdrop-bg: rgba(0, 0, 0, 0.2);
  --color-box-bg: var(--color-background-lvl-1);
  --color-box-border: var(--color-background-lvl-3);
  --color-sidenavigation-item-active: var(--color-black);
  --color-sidenavigation-item-active-bg: var(--color-background-lvl-0);
  --color-topnavigation-item-active: var(--color-black);
  --color-topnavigation-item-bg: var(--color-sap-grey-1);
  --color-topnavigation-item-active-bg: var(--color-juno-grey-light-3);
  --color-datepicker-calendar-bg: var(--color-background-lvl-1);
}

/* ----- LIGHT THEME END -----*/
/* ----- */
/* ----- */
/* ----- */
/* ----- */
/* ----- DARK THEME ----- */
.theme-dark {
  --color-background-lvl-0: var(--color-juno-grey-blue-9);
  --color-background-lvl-1: var(--color-juno-grey-blue-7);
  --color-background-lvl-2: var(--color-juno-grey-blue-5);
  --color-background-lvl-3: var(--color-juno-grey-blue-3);
  --color-background-lvl-4: var(--color-juno-grey-blue-2);
  --color-background-lvl-5: var(--color-juno-grey-blue-1);
  --color-background-lvl-0-raw: var(--color-juno-grey-blue-9-raw);
  --color-background-lvl-1-raw: var(--color-juno-grey-blue-7-raw);
  --color-background-lvl-2-raw: var(--color-juno-grey-blue-5-raw);
  --color-background-lvl-3-raw: var(--color-juno-grey-blue-3-raw);
  --color-background-lvl-4-raw: var(--color-juno-grey-blue-2-raw);
  --color-background-lvl-5-raw: var(--color-juno-grey-blue-1-raw);
  --color-global-bg: var(--color-juno-grey-blue-10);
  --color-global-bg-raw: var(--color-juno-grey-blue-10-raw);
  --color-global-text: var(--color-juno-text-default-raw);
  --color-content-area-bg: var(--color-background-lvl-0);
  --color-content-area-bg-raw: var(--color-background-lvl-0-raw);
  --color-focus: var(--color-accent);
  --color-focus-raw: var(--color-accent-raw);
  --color-focus-border: var(--color-accent-raw);
  --color-text-highest: var(--color-juno-text-highest);
  --color-text-high: var(--color-juno-text-high);
  --color-text-default: var(--color-juno-text-default);
  --color-text-light: var(--color-juno-text-light);
  --color-text-disabled: var(--color-juno-text-disabled);
  --color-text-link: var(--color-accent);
  --color-text-highest-raw: var(--color-juno-text-highest-raw);
  --color-text-high-raw: var(--color-juno-text-high-raw);
  --color-text-default-raw: var(--color-juno-text-default-raw);
  --color-text-light-raw: var(--color-juno-text-light-raw);
  --color-text-disabled-raw: var(--color-juno-text-disabled-raw);
  --color-text-link-raw: var(--color-accent-raw);
  --color-badge-default-bg: var(--color-juno-grey-blue-3);
  --color-button-primary-bg: var(--color-juno-turquoise-7);
  --color-button-primary-text: var(--color-white);
  --color-button-primary-hover-bg: var(--color-juno-turquoise-5);
  --color-button-primary-hover-text: var(--color-white);
  --color-button-primary-active-bg: var(--color-juno-turquoise-9);
  --color-button-primary-active-text: var(--color-white);
  --color-button-default-text: var(--color-text-high);
  --color-button-default-icon: var(--color-text-high);
  --color-button-default-bg: var(--color-background-lvl-5);
  --color-button-default-border: var(--color-background-lvl-5);
  --color-button-default-hover-text: var(--color-text-high);
  --color-button-default-hover-bg: var(--color-background-lvl-3);
  --color-button-default-hover-border: var(--color-background-lvl-3);
  --color-button-default-active-text: var(--color-text-high);
  --color-button-default-active-bg: var(--color-background-lvl-2);
  --color-button-default-active-border: var(--color-background-lvl-4);
  --color-button-subdued-text: var(--color-text-default);
  --color-button-subdued-icon: var(--color-text-default);
  --color-button-subdued-bg: var(--color-background-lvl-3);
  --color-button-subdued-border: var(--color-background-lvl-4);
  --color-button-subdued-hover-text: var(--color-text-default);
  --color-button-subdued-hover-bg: var(--color-background-lvl-2);
  --color-button-subdued-hover-border: var(--color-background-lvl-4);
  --color-button-subdued-active-text: var(--color-text-default);
  --color-button-subdued-active-bg: var(--color-background-lvl-0);
  --color-button-subdued-active-border: var(--color-background-lvl-4);
  --color-button-primary-danger-text: var(--color-white);
  --color-button-primary-danger-bg: var(--color-juno-primary-danger-4);
  --color-button-primary-danger-hover-text: var(--color-white);
  --color-button-primary-danger-hover-bg: var(--color-juno-primary-danger-3);
  --color-button-primary-danger-active-text: var(--color-white);
  --color-button-primary-danger-active-bg: var(--color-juno-primary-danger-5);
  --color-icon-danger: var(--color-juno-red-5-raw);
  --color-icon-info: var(--color-accent-raw);
  --color-icon-success: var(--color-sap-green-5-raw);
  --color-icon-warning: var(--color-warning-raw);
  --color-message-danger-border: var(--color-danger-raw);
  --gradient-message-danger-bg: linear-gradient(90deg, rgb(57, 39, 38) 0%, rgb(124, 48, 30) 100%);
  --color-message-default-border: var(--color-info-raw);
  --gradient-message-default-bg: linear-gradient(90deg, rgb(28, 57, 65) 0%, rgb(25, 108, 119) 100%);
  --color-message-error-border: var(--color-error-raw);
  --gradient-message-error-bg: linear-gradient(90deg, rgb(57, 39, 38) 0%, rgb(124, 48, 30) 100%);
  --color-message-warning-border: var(--color-warning-raw);
  --gradient-message-warning-bg: linear-gradient(90deg, rgb(57, 56, 36) 0%, rgb(124, 104, 24) 100%);
  --color-message-success-border: var(--color-success-raw);
  --gradient-message-success-bg: linear-gradient(90deg, rgb(32, 55, 46) 0%, rgb(39, 102, 57) 100%);
  --color-introbox-bg: var(--color-background-lvl-2-raw);
  --color-introbox-border: var(--color-accent-raw);
  --color-textinput-bg: var(--color-background-lvl-3-raw);
  --color-textinput-default-border: var(--color-background-lvl-4-raw);
  --color-textinput-text: var(--color-juno-text-high-raw);
  --color-textinput-placeholder-text: var(--color-juno-text-high-raw);
  --color-textinput-focus-border: var(--color-accent-raw);
  --color-textinput-autofill-text: var(--color-black);
  --color-textinput-autofill-bg: var(--color-juno-blue-1);
  --color-textinput-autofill-label: var(--color-black);
  --color-select-bg: var(--color-background-lvl-4-raw);
  --color-checkbox-bg: var(--color-background-lvl-5-raw);
  --color-checkbox-checked-color: var(--color-accent-raw);
  --color-radio-bg: var(--color-background-lvl-5-raw);
  --color-radio-checked-bg: var(--color-accent-raw);
  --color-switch-default-border: var(--color-juno-text-high-raw);
  --color-switch-handle-bg: var(--color-juno-text-high-raw);
  --color-switch-handle-checked-bg: var(--color-accent-raw);
  --color-switch-hover-border: var(--color-accent-raw);
  --color-required-bg: var(--color-accent-raw);
  --color-spinner-primary: var(--color-accent-raw);
  --color-syntax-highlight-base00: var(--color-codeblock-bg);
  --color-syntax-highlight-base01: var(--color-juno-grey-blue-3);
  --color-syntax-highlight-base02: #bbb;
  --color-syntax-highlight-base03: var(--color-sap-grey-3);
  --color-syntax-highlight-base04: var(--color-sap-grey-3);
  --color-syntax-highlight-base05: #dedfe0;
  --color-syntax-highlight-base06: red;
  --color-syntax-highlight-base07: #dedfe0;
  --color-syntax-highlight-base08: var(--color-juno-grey-blue-6);
  --color-syntax-highlight-base09: var(--color-juno-blue-4);
  --color-syntax-highlight-base0A: var(--color-juno-grey-blue-6);
  --color-syntax-highlight-base0B: var(--color-juno-blue-4);
  --color-syntax-highlight-base0C: var(--color-sap-gold);
  --color-syntax-highlight-base0D: var(--color-sap-gold);
  --color-syntax-highlight-base0E: var(--color-juno-blue-4);
  --color-syntax-highlight-base0F: var(--color-juno-blue-4);
  --color-datagridrow-selected: var(--color-accent-raw);
  --color-datalist-row-border: var(--color-background-lvl-1-raw);
  --color-datalistrow-selected: var(--color-accent-raw);
  --color-codeblock-bg: var(--color-background-lvl-2-raw);
  --color-codeblock-bar-border: var(--color-background-lvl-4-raw);
  --color-panel-bg: rgba(var(--color-juno-grey-blue-11-raw), 0.75);
  --color-tabnavigation-top-bg: var(--color-juno-grey-blue-8-raw);
  --color-tabnavigation-content-bottom-border: var(--color-background-lvl-4-raw);
  --color-filters-bg: var(--color-background-lvl-1-raw);
  --color-filter-input-bg: var(--color-background-lvl-0-raw);
  --color-filter-input-border: var(--color-background-lvl-4-raw);
  --color-filter-input-textinput-bg: transparent;
  --color-filter-pill-border: var(--color-background-lvl-4-raw);
  --color-filter-pill-key-bg: var(--color-background-lvl-4-raw);
  --color-modal-backdrop-bg: rgba(60, 70, 75, 0.6);
  --color-box-bg: var(--color-background-lvl-1);
  --color-box-border: var(--color-background-lvl-3);
  --color-sidenavigation-item-active: var(--color-white);
  --color-sidenavigation-item-active-bg: var(--color-background-lvl-0);
  --color-topnavigation-item-active: var(--color-white);
  --color-topnavigation-item-bg: var(--color-juno-grey-blue-7);
  --color-topnavigation-item-active-bg: var(--color-juno-grey-blue-5);
  --color-datepicker-calendar-bg: var(--color-background-lvl-1);
}

/* ----- DARK THEME END ----- */
:root,
:host {
  --grid-columns: 12;
  --grid-row-margin-x: -0.5rem;
  --grid-column-flex-grow: 0;
  --grid-column-flex-shrink: 1;
  --grid-column-flex-basis: auto;
  --grid-column-default-width: 8.333333%;
}
.jn-pointer-events-none{
  pointer-events: none;
}
.jn-invisible{
  visibility: hidden;
}
.jn-fixed{
  position: fixed;
}
.jn-absolute{
  position: absolute;
}
.jn-relative{
  position: relative;
}
.jn-sticky{
  position: sticky;
}
.jn-inset-0{
  inset: 0px;
}
.jn-inset-y-0{
  top: 0px;
  bottom: 0px;
}
.jn-bottom-0{
  bottom: 0px;
}
.jn-left-0{
  left: 0px;
}
.jn-left-1\\/2{
  left: 50%;
}
.jn-left-4{
  left: 1rem;
}
.jn-left-\\[\\.2rem\\]{
  left: .2rem;
}
.jn-left-\\[0\\.9375rem\\]{
  left: 0.9375rem;
}
.jn-left-\\[1px\\]{
  left: 1px;
}
.jn-right-0{
  right: 0px;
}
.jn-right-2{
  right: 0.5rem;
}
.jn-right-3{
  right: 0.75rem;
}
.jn-right-5{
  right: 1.25rem;
}
.jn-right-6{
  right: 1.5rem;
}
.jn-right-\\[1px\\]{
  right: 1px;
}
.jn-right-\\[2\\.75rem\\]{
  right: 2.75rem;
}
.jn-top-0{
  top: 0px;
}
.jn-top-1{
  top: 0.25rem;
}
.jn-top-1\\.5{
  top: 0.375rem;
}
.jn-top-1\\/2{
  top: 50%;
}
.jn-top-2{
  top: 0.5rem;
}
.jn-top-\\[\\.4rem\\]{
  top: .4rem;
}
.jn-top-\\[1px\\]{
  top: 1px;
}
.jn-z-10{
  z-index: 10;
}
.jn-z-20{
  z-index: 20;
}
.jn-z-50{
  z-index: 50;
}
.jn-z-\\[9989\\]{
  z-index: 9989;
}
.jn-z-\\[9990\\]{
  z-index: 9990;
}
.jn-m-auto{
  margin: auto;
}
.jn-m-grid-row{
  margin: 0 var(--grid-row-margin-x);
}
.jn-mx-4{
  margin-left: 1rem;
  margin-right: 1rem;
}
.jn-my-2{
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.jn-my-6{
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.jn-mb-1{
  margin-bottom: 0.25rem;
}
.jn-mb-1\\.5{
  margin-bottom: 0.375rem;
}
.jn-mb-2{
  margin-bottom: 0.5rem;
}
.jn-mb-4{
  margin-bottom: 1rem;
}
.jn-mb-6{
  margin-bottom: 1.5rem;
}
.jn-mb-8{
  margin-bottom: 2rem;
}
.jn-mb-px{
  margin-bottom: 1px;
}
.jn-me-1{
  margin-inline-end: 0.25rem;
}
.jn-ml-1{
  margin-left: 0.25rem;
}
.jn-ml-2{
  margin-left: 0.5rem;
}
.jn-ml-6{
  margin-left: 1.5rem;
}
.jn-ml-7{
  margin-left: 1.75rem;
}
.jn-ml-8{
  margin-left: 2rem;
}
.jn-ml-auto{
  margin-left: auto;
}
.jn-mr-1{
  margin-right: 0.25rem;
}
.jn-mr-1\\.5{
  margin-right: 0.375rem;
}
.jn-mr-2{
  margin-right: 0.5rem;
}
.jn-mr-2\\.5{
  margin-right: 0.625rem;
}
.jn-mr-3{
  margin-right: 0.75rem;
}
.jn-mr-4{
  margin-right: 1rem;
}
.jn-mr-6{
  margin-right: 1.5rem;
}
.jn-mr-auto{
  margin-right: auto;
}
.jn-mt-0{
  margin-top: 0px;
}
.jn-mt-1{
  margin-top: 0.25rem;
}
.jn-mt-2{
  margin-top: 0.5rem;
}
.jn-mt-\\[-\\.2rem\\]{
  margin-top: -.2rem;
}
.jn-mt-\\[-0\\.25rem\\]{
  margin-top: -0.25rem;
}
.jn-mt-\\[3\\.875rem\\]{
  margin-top: 3.875rem;
}
.jn-box-border{
  box-sizing: border-box;
}
.jn-block{
  display: block;
}
.jn-inline-block{
  display: inline-block;
}
.jn-flex{
  display: flex;
}
.jn-inline-flex{
  display: inline-flex;
}
.jn-grid{
  display: grid;
}
.jn-contents{
  display: contents;
}
.jn-h-0\\.5{
  height: 0.125rem;
}
.jn-h-1{
  height: 0.25rem;
}
.jn-h-16{
  height: 4rem;
}
.jn-h-24{
  height: 6rem;
}
.jn-h-3{
  height: 0.75rem;
}
.jn-h-4{
  height: 1rem;
}
.jn-h-5{
  height: 1.25rem;
}
.jn-h-6{
  height: 1.5rem;
}
.jn-h-7{
  height: 1.75rem;
}
.jn-h-80{
  height: 20rem;
}
.jn-h-\\[0\\.75rem\\]{
  height: 0.75rem;
}
.jn-h-\\[1\\.4375rem\\]{
  height: 1.4375rem;
}
.jn-h-\\[1\\.6875rem\\]{
  height: 1.6875rem;
}
.jn-h-\\[1\\.875rem\\]{
  height: 1.875rem;
}
.jn-h-\\[150px\\]{
  height: 150px;
}
.jn-h-\\[2\\.375rem\\]{
  height: 2.375rem;
}
.jn-h-\\[2\\.625rem\\]{
  height: 2.625rem;
}
.jn-h-\\[2\\.8125rem\\]{
  height: 2.8125rem;
}
.jn-h-\\[250px\\]{
  height: 250px;
}
.jn-h-\\[3\\.4375rem\\]{
  height: 3.4375rem;
}
.jn-h-full{
  height: 100%;
}
.jn-h-px{
  height: 1px;
}
.jn-h-switch-default{
  height: 1.4375rem;
}
.jn-h-switch-handle-default{
  height: 1.1875rem;
}
.jn-h-textinput{
  height: 2.375rem;
}
.jn-max-h-64{
  max-height: 16rem;
}
.jn-max-h-\\[32rem\\]{
  max-height: 32rem;
}
.jn-max-h-\\[56rem\\]{
  max-height: 56rem;
}
.jn-max-h-\\[90\\%\\]{
  max-height: 90%;
}
.jn-min-h-\\[2\\.5rem\\]{
  min-height: 2.5rem;
}
.jn-min-h-\\[3\\.25rem\\]{
  min-height: 3.25rem;
}
.jn-min-h-\\[5rem\\]{
  min-height: 5rem;
}
.jn-min-h-\\[7\\.5rem\\]{
  min-height: 7.5rem;
}
.jn-min-h-\\[8rem\\]{
  min-height: 8rem;
}
.jn-w-1{
  width: 0.25rem;
}
.jn-w-2{
  width: 0.5rem;
}
.jn-w-3{
  width: 0.75rem;
}
.jn-w-4{
  width: 1rem;
}
.jn-w-5{
  width: 1.25rem;
}
.jn-w-6{
  width: 1.5rem;
}
.jn-w-\\[0\\.75rem\\]{
  width: 0.75rem;
}
.jn-w-\\[1\\.4375rem\\]{
  width: 1.4375rem;
}
.jn-w-\\[1\\.75rem\\]{
  width: 1.75rem;
}
.jn-w-\\[3\\.125rem\\]{
  width: 3.125rem;
}
.jn-w-\\[33\\.625rem\\]{
  width: 33.625rem;
}
.jn-w-\\[40rem\\]{
  width: 40rem;
}
.jn-w-\\[4px\\]{
  width: 4px;
}
.jn-w-\\[75\\%\\]{
  width: 75%;
}
.jn-w-\\[90\\%\\]{
  width: 90%;
}
.jn-w-auto{
  width: auto;
}
.jn-w-full{
  width: 100%;
}
.jn-w-grid-col-1{
  width: 8.333333%;
}
.jn-w-grid-col-10{
  width: 83.333333%;
}
.jn-w-grid-col-11{
  width: 91.666667%;
}
.jn-w-grid-col-12{
  width: 100%;
}
.jn-w-grid-col-2{
  width: 16.666667%;
}
.jn-w-grid-col-3{
  width: 25%;
}
.jn-w-grid-col-4{
  width: 33.333333%;
}
.jn-w-grid-col-6{
  width: 50%;
}
.jn-w-grid-col-7{
  width: 58.333333%;
}
.jn-w-grid-col-8{
  width: 66.666667%;
}
.jn-w-grid-col-9{
  width: 75%;
}
.jn-w-grid-column-default{
  width: var(--grid-column-default-width);
}
.jn-w-switch-default{
  width: 2.625rem;
}
.jn-w-switch-handle-default{
  width: 1.1875rem;
}
.jn-min-w-\\[7\\.5rem\\]{
  min-width: 7.5rem;
}
.jn-max-w-\\[20rem\\]{
  max-width: 20rem;
}
.jn-max-w-full{
  max-width: 100%;
}
.jn-max-w-xs{
  max-width: 20rem;
}
.jn-flex-grid-column{
  flex: var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis);
}
.jn-shrink{
  flex-shrink: 1;
}
.jn-shrink-0{
  flex-shrink: 0;
}
.jn-grow{
  flex-grow: 1;
}
.jn-grow-0{
  flex-grow: 0;
}
.jn-basis-auto{
  flex-basis: auto;
}
.jn-origin-top-left{
  transform-origin: top left;
}
.-jn-translate-y-\\[0\\.4375rem\\]{
  --tw-translate-y: -0.4375rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.jn-translate-x-\\[-0\\.75rem\\]{
  --tw-translate-x: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.jn-translate-x-\\[100\\%\\]{
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.jn-translate-y-\\[-50\\%\\]{
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.jn-scale-75{
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.jn-transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes jn-spin{
  to{
    transform: rotate(360deg);
  }
}
.jn-animate-spin{
  animation: jn-spin 1s linear infinite;
}
.jn-cursor-default{
  cursor: default;
}
.jn-cursor-not-allowed{
  cursor: not-allowed;
}
.jn-cursor-pointer{
  cursor: pointer;
}
.jn-select-none{
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.jn-appearance-none{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.jn-grid-cols-2{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.jn-grid-cols-\\[minmax\\(0\\,max-content\\)\\,1fr\\]{
  grid-template-columns: minmax(0,max-content) 1fr;
}
.jn-grid-rows-\\[auto_1fr\\]{
  grid-template-rows: auto 1fr;
}
.jn-flex-row{
  flex-direction: row;
}
.jn-flex-col{
  flex-direction: column;
}
.jn-flex-wrap{
  flex-wrap: wrap;
}
.jn-flex-nowrap{
  flex-wrap: nowrap;
}
.jn-items-start{
  align-items: flex-start;
}
.jn-items-end{
  align-items: flex-end;
}
.jn-items-center{
  align-items: center;
}
.jn-items-baseline{
  align-items: baseline;
}
.jn-items-stretch{
  align-items: stretch;
}
.jn-justify-start{
  justify-content: flex-start;
}
.jn-justify-end{
  justify-content: flex-end;
}
.jn-justify-center{
  justify-content: center;
}
.jn-justify-between{
  justify-content: space-between;
}
.jn-justify-around{
  justify-content: space-around;
}
.jn-justify-evenly{
  justify-content: space-evenly;
}
.jn-gap-0{
  gap: 0px;
}
.jn-gap-0\\.5{
  gap: 0.125rem;
}
.jn-gap-1{
  gap: 0.25rem;
}
.jn-gap-1\\.5{
  gap: 0.375rem;
}
.jn-gap-10{
  gap: 2.5rem;
}
.jn-gap-11{
  gap: 2.75rem;
}
.jn-gap-12{
  gap: 3rem;
}
.jn-gap-14{
  gap: 3.5rem;
}
.jn-gap-16{
  gap: 4rem;
}
.jn-gap-2{
  gap: 0.5rem;
}
.jn-gap-2\\.5{
  gap: 0.625rem;
}
.jn-gap-20{
  gap: 5rem;
}
.jn-gap-24{
  gap: 6rem;
}
.jn-gap-28{
  gap: 7rem;
}
.jn-gap-3{
  gap: 0.75rem;
}
.jn-gap-3\\.5{
  gap: 0.875rem;
}
.jn-gap-32{
  gap: 8rem;
}
.jn-gap-36{
  gap: 9rem;
}
.jn-gap-4{
  gap: 1rem;
}
.jn-gap-40{
  gap: 10rem;
}
.jn-gap-44{
  gap: 11rem;
}
.jn-gap-48{
  gap: 12rem;
}
.jn-gap-5{
  gap: 1.25rem;
}
.jn-gap-52{
  gap: 13rem;
}
.jn-gap-56{
  gap: 14rem;
}
.jn-gap-6{
  gap: 1.5rem;
}
.jn-gap-60{
  gap: 15rem;
}
.jn-gap-64{
  gap: 16rem;
}
.jn-gap-7{
  gap: 1.75rem;
}
.jn-gap-72{
  gap: 18rem;
}
.jn-gap-8{
  gap: 2rem;
}
.jn-gap-80{
  gap: 20rem;
}
.jn-gap-9{
  gap: 2.25rem;
}
.jn-gap-96{
  gap: 24rem;
}
.jn-gap-\\[0\\.375rem\\]{
  gap: 0.375rem;
}
.jn-gap-px{
  gap: 1px;
}
.jn-self-stretch{
  align-self: stretch;
}
.jn-justify-self-end{
  justify-self: end;
}
.jn-overflow-auto{
  overflow: auto;
}
.jn-overflow-hidden{
  overflow: hidden;
}
.jn-overflow-x-auto{
  overflow-x: auto;
}
.jn-overflow-y-auto{
  overflow-y: auto;
}
.jn-truncate{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jn-overflow-ellipsis{
  text-overflow: ellipsis;
}
.jn-text-ellipsis{
  text-overflow: ellipsis;
}
.jn-whitespace-nowrap{
  white-space: nowrap;
}
.jn-whitespace-pre-wrap{
  white-space: pre-wrap;
}
.jn-break-words{
  overflow-wrap: break-word;
}
.jn-break-all{
  word-break: break-all;
}
.jn-rounded{
  border-radius: 0.25rem;
}
.jn-rounded-3px{
  border-radius: 3px;
}
.jn-rounded-\\[3px\\]{
  border-radius: 3px;
}
.jn-rounded-full{
  border-radius: 9999px;
}
.jn-rounded-lg{
  border-radius: 0.5rem;
}
.jn-rounded-sm{
  border-radius: 0.125rem;
}
.jn-rounded-xl{
  border-radius: 0.75rem;
}
.jn-rounded-l{
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.jn-rounded-l-none{
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.jn-rounded-r-none{
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.jn-rounded-t{
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.jn-rounded-br{
  border-bottom-right-radius: 0.25rem;
}
.jn-rounded-tr{
  border-top-right-radius: 0.25rem;
}
.jn-border{
  border-width: 1px;
}
.jn-border-y-\\[1px\\]{
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.jn-border-b{
  border-bottom-width: 1px;
}
.jn-border-b-\\[1px\\]{
  border-bottom-width: 1px;
}
.jn-border-b-\\[3px\\]{
  border-bottom-width: 3px;
}
.jn-border-l-0{
  border-left-width: 0;
}
.jn-border-l-4{
  border-left-width: 4px;
}
.jn-border-r-\\[1px\\]{
  border-right-width: 1px;
}
.jn-border-t{
  border-top-width: 1px;
}
.jn-border-t-\\[1px\\]{
  border-top-width: 1px;
}
.jn-border-juno-blue-7{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-juno-blue-7-raw), var(--tw-border-opacity));
}
.jn-border-theme-background-lvl-0{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-background-lvl-0-raw), var(--tw-border-opacity));
}
.jn-border-theme-background-lvl-2{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-background-lvl-2-raw), var(--tw-border-opacity));
}
.jn-border-theme-background-lvl-3{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-background-lvl-3-raw), var(--tw-border-opacity));
}
.jn-border-theme-background-lvl-4{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-background-lvl-4-raw), var(--tw-border-opacity));
}
.jn-border-theme-box-default{
  border-color: var(--color-box-border);
}
.jn-border-theme-codeblock-bar{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-codeblock-bar-border), var(--tw-border-opacity));
}
.jn-border-theme-datalist-row{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-datalist-row-border), var(--tw-border-opacity));
}
.jn-border-theme-default{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-default-border), var(--tw-border-opacity));
}
.jn-border-theme-error{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-error-raw), var(--tw-border-opacity));
}
.jn-border-theme-filter-input{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-filter-input-border), var(--tw-border-opacity));
}
.jn-border-theme-filter-pill{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-filter-pill-border), var(--tw-border-opacity));
}
.jn-border-theme-introbox{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-introbox-border), var(--tw-border-opacity));
}
.jn-border-theme-message-danger{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-message-danger-border), var(--tw-border-opacity));
}
.jn-border-theme-message-default{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-message-default-border), var(--tw-border-opacity));
}
.jn-border-theme-message-error{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-message-error-border), var(--tw-border-opacity));
}
.jn-border-theme-message-success{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-message-success-border), var(--tw-border-opacity));
}
.jn-border-theme-message-warning{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-message-warning-border), var(--tw-border-opacity));
}
.jn-border-theme-success{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-success-raw), var(--tw-border-opacity));
}
.jn-border-theme-switch-default{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-switch-default-border), var(--tw-border-opacity));
}
.jn-border-theme-tab-active-bottom{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-text-default-raw), var(--tw-border-opacity));
}
.jn-border-theme-tab-content-inactive-bottom{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-background-lvl-4-raw), var(--tw-border-opacity));
}
.jn-border-theme-tab-navigation-content-bottom{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-tabnavigation-content-bottom-border), var(--tw-border-opacity));
}
.jn-border-theme-textinput-default{
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-textinput-default-border), var(--tw-border-opacity));
}
.jn-border-transparent{
  border-color: transparent;
}
.jn-border-t-theme-background-lvl-2{
  --tw-border-opacity: 1;
  border-top-color: rgba(var(--color-background-lvl-2-raw), var(--tw-border-opacity));
}
.\\!jn-bg-theme-filter-input-textinput{
  --tw-bg-opacity: 1 !important;
  background-color: rgba(var(--color-filter-input-textinput-bg), var(--tw-bg-opacity)) !important;
}
.jn-bg-black{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-black-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-1-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-10{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-10-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-2-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-3-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-4-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-6-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-7{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-7-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-8{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-8-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-blue-9{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-blue-9-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-11-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-1-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-10{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-10-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-11{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-11-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-2-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-3-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-4-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-6-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-7{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-7-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-8{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-8-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-blue-9{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-9-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-1-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-1-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-10{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-10-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-11{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-11-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-2-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-3-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-4-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-6-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-7{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-7-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-8{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-8-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-grey-light-9{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-light-9-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-1-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-2-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-3-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-4-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-6-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-7{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-7-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-red-8{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-red-8-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-1-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-10{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-10-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-2-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-3-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-4-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-5-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-6-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-7{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-7-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-8{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-8-raw), var(--tw-bg-opacity));
}
.jn-bg-juno-turquoise-9{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-turquoise-9-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-blue{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-blue-5-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-blue-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-blue-1-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-blue-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-blue-2-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-blue-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-blue-3-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-blue-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-blue-4-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-blue-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-blue-5-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-blue-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-blue-6-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-gold{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-gold-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-green{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-green-5-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-green-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-green-1-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-green-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-green-2-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-green-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-green-3-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-green-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-green-4-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-green-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-green-5-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-green-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-green-6-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-8-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-1-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-2-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-3-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-4-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-5-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-6-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-7{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-7-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-grey-8{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-grey-8-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-purple{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-purple-5-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-purple-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-purple-1-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-purple-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-purple-2-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-purple-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-purple-3-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-purple-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-purple-4-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-purple-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-purple-5-raw), var(--tw-bg-opacity));
}
.jn-bg-sap-purple-6{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-sap-purple-6-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-accent{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-accent-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-background-lvl-0{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-0-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-background-lvl-1{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-1-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-background-lvl-2{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-background-lvl-2\\/30{
  background-color: rgba(var(--color-background-lvl-2-raw), 0.3);
}
.jn-bg-theme-background-lvl-3{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-3-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-background-lvl-4{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-4-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-background-lvl-5{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-5-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-badge-default{
  background-color: var(--color-badge-default-bg);
}
.jn-bg-theme-box-default{
  background-color: var(--color-box-bg);
}
.jn-bg-theme-checkbox{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-checkbox-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-code-block{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-codeblock-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-content-area-bg{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-content-area-bg-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-danger{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-danger-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-danger\\/25{
  background-color: rgba(var(--color-danger-raw), 0.25);
}
.jn-bg-theme-danger\\/70{
  background-color: rgba(var(--color-danger-raw), 0.7);
}
.jn-bg-theme-datagridrow-selected{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-datagridrow-selected), var(--tw-bg-opacity));
}
.jn-bg-theme-datalistrow-selected{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-datalistrow-selected), var(--tw-bg-opacity));
}
.jn-bg-theme-error{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-error-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-error\\/25{
  background-color: rgba(var(--color-error-raw), 0.25);
}
.jn-bg-theme-filter-input{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-filter-input-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-filter-pill-key{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-filter-pill-key-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-filters{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-filters-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-focus{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-focus-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-global-bg{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-global-bg-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-info{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-info-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-info\\/25{
  background-color: rgba(var(--color-info-raw), 0.25);
}
.jn-bg-theme-introbox{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-introbox-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-modal-backdrop{
  background-color: var(--color-modal-backdrop-bg);
}
.jn-bg-theme-panel{
  background-color: var(--color-panel-bg);
}
.jn-bg-theme-radio{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-radio-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-radio-checked{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-radio-checked-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-required{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-required-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-select{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-select-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-sidenavigation-item-active{
  background-color: var(--color-sidenavigation-item-active-bg);
}
.jn-bg-theme-success{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-success-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-success\\/25{
  background-color: rgba(var(--color-success-raw), 0.25);
}
.jn-bg-theme-switch-handle{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-switch-handle-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-switch-handle-checked{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-switch-handle-checked-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-tab-navigation-top{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-tabnavigation-top-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-textinput{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-textinput-bg), var(--tw-bg-opacity));
}
.jn-bg-theme-topnavigation-item{
  background-color: var(--color-topnavigation-item-bg);
}
.jn-bg-theme-topnavigation-item-active{
  background-color: var(--color-topnavigation-item-active-bg);
}
.jn-bg-theme-warning{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-warning-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-warning\\/25{
  background-color: rgba(var(--color-warning-raw), 0.25);
}
.jn-bg-transparent{
  background-color: transparent;
}
.jn-bg-white{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-white-raw), var(--tw-bg-opacity));
}
.jn-bg-theme-message-danger{
  background-image: var(--gradient-message-danger-bg);
}
.jn-bg-theme-message-default{
  background-image: var(--gradient-message-default-bg);
}
.jn-bg-theme-message-error{
  background-image: var(--gradient-message-error-bg);
}
.jn-bg-theme-message-success{
  background-image: var(--gradient-message-success-bg);
}
.jn-bg-theme-message-warning{
  background-image: var(--gradient-message-warning-bg);
}
.jn-bg-\\[right_top_1rem\\]{
  background-position: right top 1rem;
}
.jn-bg-\\[top_0\\.375rem_right_1rem\\]{
  background-position: top 0.375rem right 1rem;
}
.jn-bg-right{
  background-position: right;
}
.jn-bg-right-top{
  background-position: right top;
}
.jn-bg-no-repeat{
  background-repeat: no-repeat;
}
.jn-fill-current{
  fill: currentColor;
}
.jn-p-0{
  padding: 0px;
}
.jn-p-12{
  padding: 3rem;
}
.jn-p-2{
  padding: 0.5rem;
}
.jn-p-3{
  padding: 0.75rem;
}
.jn-p-4{
  padding: 1rem;
}
.jn-p-6{
  padding: 1.5rem;
}
.jn-p-grid-column{
  padding: 0 .5rem;
}
.jn-p-px{
  padding: 1px;
}
.jn-px-1{
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.jn-px-2{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.jn-px-3{
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.jn-px-4{
  padding-left: 1rem;
  padding-right: 1rem;
}
.jn-px-5{
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.jn-px-6{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.jn-px-8{
  padding-left: 2rem;
  padding-right: 2rem;
}
.jn-px-\\[0\\.4375rem\\]{
  padding-left: 0.4375rem;
  padding-right: 0.4375rem;
}
.jn-px-\\[0\\.5625rem\\]{
  padding-left: 0.5625rem;
  padding-right: 0.5625rem;
}
.jn-px-\\[0\\.5rem\\]{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.jn-px-\\[0\\.625rem\\]{
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.jn-px-\\[0\\.875rem\\]{
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}
.jn-px-\\[1\\.5625rem\\]{
  padding-left: 1.5625rem;
  padding-right: 1.5625rem;
}
.jn-px-\\[1\\.9rem\\]{
  padding-left: 1.9rem;
  padding-right: 1.9rem;
}
.jn-py-0\\.5{
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.jn-py-1{
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.jn-py-1\\.5{
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.jn-py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.jn-py-2\\.5{
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.jn-py-3{
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.jn-py-4{
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.jn-py-5{
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.jn-py-6{
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.jn-py-\\[0\\.25rem\\]{
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.jn-py-\\[0\\.3125rem\\]{
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
}
.jn-py-\\[0\\.375rem\\]{
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.jn-py-\\[0\\.4375rem\\]{
  padding-top: 0.4375rem;
  padding-bottom: 0.4375rem;
}
.jn-py-\\[0\\.875rem\\]{
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
.jn-pb-1{
  padding-bottom: 0.25rem;
}
.jn-pb-12{
  padding-bottom: 3rem;
}
.jn-pb-14{
  padding-bottom: 3.5rem;
}
.jn-pb-2{
  padding-bottom: 0.5rem;
}
.jn-pb-\\[0\\.5rem\\]{
  padding-bottom: 0.5rem;
}
.jn-pl-3{
  padding-left: 0.75rem;
}
.jn-pl-3\\.5{
  padding-left: 0.875rem;
}
.jn-pl-4{
  padding-left: 1rem;
}
.jn-pl-6{
  padding-left: 1.5rem;
}
.jn-pl-\\[2\\.375rem\\]{
  padding-left: 2.375rem;
}
.jn-pr-16{
  padding-right: 4rem;
}
.jn-pr-2\\.5{
  padding-right: 0.625rem;
}
.jn-pr-20{
  padding-right: 5rem;
}
.jn-pr-24{
  padding-right: 6rem;
}
.jn-pr-4{
  padding-right: 1rem;
}
.jn-pr-56{
  padding-right: 14rem;
}
.jn-pr-9{
  padding-right: 2.25rem;
}
.jn-pr-\\[0\\.875rem\\]{
  padding-right: 0.875rem;
}
.jn-pr-\\[3\\.75rem\\]{
  padding-right: 3.75rem;
}
.jn-pt-16{
  padding-top: 4rem;
}
.jn-pt-4{
  padding-top: 1rem;
}
.jn-pt-\\[0\\.4rem\\]{
  padding-top: 0.4rem;
}
.jn-pt-\\[0\\.6875rem\\]{
  padding-top: 0.6875rem;
}
.jn-pt-\\[1\\.125rem\\]{
  padding-top: 1.125rem;
}
.jn-text-left{
  text-align: left;
}
.jn-text-center{
  text-align: center;
}
.jn-align-top{
  vertical-align: top;
}
.jn-font-mono{
  font-family: "IBM Plex Mono", ui-monospace, monospace;
}
.jn-text-2xl{
  font-size: 1.5rem;
  line-height: 2rem;
}
.jn-text-6xl{
  font-size: 3.75rem;
  line-height: 1;
}
.jn-text-base{
  font-size: 1rem;
  line-height: 1.5rem;
}
.jn-text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.jn-text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.jn-text-xl{
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.jn-text-xs{
  font-size: 0.75rem;
  line-height: 1rem;
}
.jn-font-bold{
  font-weight: 700;
}
.jn-font-extrabold{
  font-weight: 800;
}
.jn-font-semibold{
  font-weight: 600;
}
.jn-leading-4{
  line-height: 1rem;
}
.jn-leading-5{
  line-height: 1.25rem;
}
.jn-leading-6{
  line-height: 1.5rem;
}
.jn-leading-none{
  line-height: 1;
}
.jn-text-current{
  color: currentColor;
}
.jn-text-juno-grey-blue{
  --tw-text-opacity: 1;
  color: rgba(var(--color-juno-grey-blue-11-raw), var(--tw-text-opacity));
}
.jn-text-theme-accent{
  --tw-text-opacity: 1;
  color: rgba(var(--color-accent-raw), var(--tw-text-opacity));
}
.jn-text-theme-checkbox-checked{
  --tw-text-opacity: 1;
  color: rgba(var(--color-checkbox-checked-color), var(--tw-text-opacity));
}
.jn-text-theme-danger{
  --tw-text-opacity: 1;
  color: rgba(var(--color-danger-raw), var(--tw-text-opacity));
}
.jn-text-theme-default{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-default-raw), var(--tw-text-opacity));
}
.jn-text-theme-disabled{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-disabled-raw), var(--tw-text-opacity));
}
.jn-text-theme-error{
  --tw-text-opacity: 1;
  color: rgba(var(--color-error-raw), var(--tw-text-opacity));
}
.jn-text-theme-high{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-high-raw), var(--tw-text-opacity));
}
.jn-text-theme-highest{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-highest-raw), var(--tw-text-opacity));
}
.jn-text-theme-info{
  --tw-text-opacity: 1;
  color: rgba(var(--color-info-raw), var(--tw-text-opacity));
}
.jn-text-theme-light{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-light-raw), var(--tw-text-opacity));
}
.jn-text-theme-link{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-link-raw), var(--tw-text-opacity));
}
.jn-text-theme-on-default{
  --tw-text-opacity: 1;
  color: rgba(var(--color-button-default-text), var(--tw-text-opacity));
}
.jn-text-theme-sidenavigation-item-active{
  color: var(--color-sidenavigation-item-active);
}
.jn-text-theme-success{
  --tw-text-opacity: 1;
  color: rgba(var(--color-success-raw), var(--tw-text-opacity));
}
.jn-text-theme-textinput{
  --tw-text-opacity: 1;
  color: rgba(var(--color-textinput-text), var(--tw-text-opacity));
}
.jn-text-theme-warning{
  --tw-text-opacity: 1;
  color: rgba(var(--color-warning-raw), var(--tw-text-opacity));
}
.jn-text-white{
  --tw-text-opacity: 1;
  color: rgba(var(--color-white-raw), var(--tw-text-opacity));
}
.jn-opacity-0{
  opacity: 0;
}
.jn-opacity-25{
  opacity: 0.25;
}
.jn-opacity-50{
  opacity: 0.5;
}
.jn-opacity-75{
  opacity: 0.75;
}
.jn-shadow{
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.jn-shadow-md{
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.jn-shadow-sm{
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.jn-outline-none{
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.jn-ring-2{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.jn-ring-theme-focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(var(--color-focus-raw), var(--tw-ring-opacity));
}
.jn-contrast-100{
  --tw-contrast: contrast(1);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.jn-drop-shadow-\\[0_0_4px_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{
  --tw-drop-shadow: drop-shadow(0 0 4px rgba(0,0,0,0.15));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.jn-backdrop-blur{
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.jn-backdrop-blur-\\[2px\\]{
  --tw-backdrop-blur: blur(2px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.jn-backdrop-blur-\\[4px\\]{
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.jn-backdrop-saturate-150{
  --tw-backdrop-saturate: saturate(1.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.jn-transition-all{
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.jn-transition-transform{
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.jn-duration-100{
  transition-duration: 100ms;
}
.jn-duration-300{
  transition-duration: 300ms;
}
.jn-ease-in-out{
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.jn-ease-out{
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.juno-button-default {
  background-color: var(--color-button-default-bg);
  color: var(--color-button-default-text);
}
.juno-button-default:hover {
  background-color: var(--color-button-default-hover-bg);
  color: var(--color-button-default-hover-text);
}
.juno-button-default:active {
  background-color: var(--color-button-default-active-bg);
  border-color: var(--color-button-default-active-border);
  color: var(--color-button-default-active-text);
}

.juno-button-subdued {
  background-color: var(--color-button-subdued-bg);
  border: 1px solid var(--color-button-subdued-border);
  color: var(--color-button-subdued-text);
}
.juno-button-subdued:hover {
  background-color: var(--color-button-subdued-hover-bg);
  border-color: var(--color-button-subdued-hover-border);
  color: var(--color-button-subdued-hover-text);
}
.juno-button-subdued:active {
  background-color: var(--color-button-subdued-active-bg);
  border-color: var(--color-button-subdued-active-border);
  color: var(--color-button-subdued-active-text);
}

.juno-button-primary {
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}
.juno-button-primary:hover {
  background-color: var(--color-button-primary-hover-bg);
  color: var(--color-button-primary-hover-text);
}
.juno-button-primary:active {
  background-color: var(--color-button-primary-active-bg);
  color: var(--color-button-primary-active-text);
}

.juno-button-primary-danger {
  background-color: var(--color-button-primary-danger-bg);
  color: var(--color-button-primary-danger-text);
}
.juno-button-primary-danger:hover {
  background-color: var(--color-button-primary-danger-hover-bg);
  color: var(--color-button-primary-danger-hover-text);
}
.juno-button-primary-danger:active {
  background-color: var(--color-button-primary-danger-active-bg);
  color: var(--color-button-primary-danger-active-text);
}

.theme-dark .juno-datetimepicker-input-default {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%20fill%3D'rgb(222%2C%20223%2C%20224)'%3E%3Cpath%20d%3D'M20%203h-1V1h-2v2H7V1H5v2H4c-1.1%200-2%20.9-2%202v16c0%201.1.9%202%202%202h16c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2zm0%2018H4V8h16v13z'%2F%3E%3C%2Fsvg%3E");
}
.theme-dark .juno-datetimepicker-input-timepicker {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%20fill%3D'rgb(222%2C%20223%2C%20224)'%3E%3Cpath%20d%3D'M11.99%202C6.47%202%202%206.48%202%2012s4.47%2010%209.99%2010C17.52%2022%2022%2017.52%2022%2012S17.52%202%2011.99%202zM12%2020c-4.42%200-8-3.58-8-8s3.58-8%208-8%208%203.58%208%208-3.58%208-8%208z'%2F%3E%3Cpath%20d%3D'M12.5%207H11v6l5.25%203.15.75-1.23-4.5-2.67z'%2F%3E%3C%2Fsvg%3E");
}

.theme-light .juno-datetimepicker-input-default {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%20fill%3D'rgb(64%2C%2064%2C%2064)'%3E%3Cpath%20d%3D'M20%203h-1V1h-2v2H7V1H5v2H4c-1.1%200-2%20.9-2%202v16c0%201.1.9%202%202%202h16c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2zm0%2018H4V8h16v13z'%2F%3E%3C%2Fsvg%3E");
}
.theme-light .juno-datetimepicker-input-timepicker {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%20fill%3D'rgb(64%2C%2064%2C%2064)'%3E%3Cpath%20d%3D'M11.99%202C6.47%202%202%206.48%202%2012s4.47%2010%209.99%2010C17.52%2022%2022%2017.52%2022%2012S17.52%202%2011.99%202zM12%2020c-4.42%200-8-3.58-8-8s3.58-8%208-8%208%203.58%208%208-3.58%208-8%208z'%2F%3E%3Cpath%20d%3D'M12.5%207H11v6l5.25%203.15.75-1.23-4.5-2.67z'%2F%3E%3C%2Fsvg%3E");
}

.flatpickr-calendar {
  background: transparent;
  color: var(--color-text-default);
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  animation: none;
  direction: ltr;
  border: 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
  border-radius: 5px;
  position: absolute;
  width: 307.875px;
  box-sizing: border-box;
  touch-action: manipulation;
  background: var(--color-datepicker-calendar-bg);
}

.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}

.flatpickr-calendar.open {
  display: inline-block;
  z-index: 99999;
  margin-top: 2px;
}

.flatpickr-calendar.open:not(.inline)[style]:not(.inline) {
  top: auto !important;
  left: auto !important;
}

.flatpickr-calendar.animate.open {
  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}

.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}

.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  box-shadow: none !important;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
}

.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}

.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
}

.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}

.flatpickr-calendar:focus {
  outline: 0;
}

.flatpickr-wrapper {
  position: relative;
  display: inline-block;
}

.flatpickr-months {
  display: flex;
}

.flatpickr-months .flatpickr-month {
  background: var(--color-datepicker-calendar-bg);
  color: #fff;
  fill: #fff;
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  flex: 1;
}

.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 3;
  color: #fff;
  fill: #fff;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}

.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
  /*
      /*rtl:begin:ignore*/
  /*
      */
  left: 0;
  /*
      /*rtl:end:ignore*/
  /*
      */
}

/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
  /*
      /*rtl:begin:ignore*/
  /*
      */
  right: 0;
  /*
      /*rtl:end:ignore*/
  /*
      */
}

/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: #eee;
}

.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: #f64747;
}

.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
}

.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  transition: fill 0.1s;
  fill: inherit;
}

.numInputWrapper {
  position: relative;
  height: auto;
}

.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}

.numInputWrapper input {
  width: 100%;
}

.numInputWrapper input::-ms-clear {
  display: none;
}

.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
}

.numInputWrapper span:hover {
  background: rgba(192, 187, 167, 0.1);
}

.numInputWrapper span:active {
  background: rgba(192, 187, 167, 0.2);
}

.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}

.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}

.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid rgba(255, 255, 255, 0.6);
  top: 26%;
}

.numInputWrapper span.arrowDown {
  top: 50%;
}

.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgba(255, 255, 255, 0.6);
  top: 40%;
}

.numInputWrapper span svg {
  width: inherit;
  height: auto;
}

.numInputWrapper span svg path {
  fill: rgba(255, 255, 255, 0.5);
}

.numInputWrapper:hover {
  background: rgba(192, 187, 167, 0.05);
}

.numInputWrapper:hover span {
  opacity: 1;
}

.flatpickr-current-month {
  font-size: 135%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  transform: translate3d(0px, 0px, 0px);
}

.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}

.flatpickr-current-month span.cur-month:hover {
  background: rgba(192, 187, 167, 0.05);
}

.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0 ;
  display: inline-block;
}

.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: #fff;
}

.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: #fff;
}

.flatpickr-current-month input.cur-year {
  background: transparent;
  box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}

.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: rgba(255, 255, 255, 0.5);
  background: transparent;
  pointer-events: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: var(--color-datepicker-calendar-bg);
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(192, 187, 167, 0.05);
}

.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: #3f4458;
  outline: none;
  padding: 0;
}

.flatpickr-weekdays {
  background: transparent;
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  height: 28px;
}

.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: flex;
  flex: 1;
}

span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  color: var(--color-text-default);
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  flex: 1;
  font-weight: bolder;
}

.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}

.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  width: 307.875px;
}

.flatpickr-days:focus {
  outline: 0;
}

.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 307.875px;
  min-width: 307.875px;
  max-width: 307.875px;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  justify-content: space-around;
  transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}

.dayContainer + .dayContainer {
  box-shadow: -1px 0 0 #20222c;
}

.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  box-sizing: border-box;
  color: var(--color-text-default);
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  flex-basis: 14.2857143%;
  max-width: 39px;
  height: 39px;
  line-height: 39px;
  margin: 0;
  display: inline-block;
  position: relative;
  justify-content: center;
  text-align: center;
}

.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: #646c8c;
  border-color: #646c8c;
}

.flatpickr-day.today {
  border-color: var(--color-text-default);
}

.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: var(--color-text-default);
  background: #eee;
  color: var(--color-text-default);
}

.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: var(--color-accent);
  box-shadow: none;
  color: #fff;
  border-color: var(--color-accent);
}

.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}

.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}

.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  box-shadow: -10px 0 0 #80cbc4;
}

.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}

.flatpickr-day.inRange {
  border-radius: 0;
  box-shadow: -5px 0 0 #646c8c, 5px 0 0 #646c8c;
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: rgba(255, 255, 255, 0.3);
  background: transparent;
  border-color: transparent;
  cursor: default;
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: rgba(255, 255, 255, 0.1);
}

.flatpickr-day.week.selected {
  border-radius: 0;
  box-shadow: -5px 0 0 #80cbc4, 5px 0 0 #80cbc4;
}

.flatpickr-day.hidden {
  visibility: hidden;
}

.rangeMode .flatpickr-day {
  margin-top: 1px;
}

.flatpickr-weekwrapper {
  float: left;
}

.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
  box-shadow: 1px 0 0 #20222c;
}

.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}

.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: rgba(255, 255, 255, 0.3);
  background: transparent;
  cursor: default;
  border: none;
}

.flatpickr-innerContainer {
  display: block;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}

.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  box-sizing: border-box;
}

.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
}

.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}

.flatpickr-time .numInputWrapper {
  flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}

.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: rgba(255, 255, 255, 0.95);
}

.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: rgba(255, 255, 255, 0.95);
}

.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}

.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}

.flatpickr-time input {
  background: transparent;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  color: var(--color-text-default);
  font-size: 14px;
  position: relative;
  box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}

.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}

.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}

.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  align-self: center;
}

.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}

.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: #6a7395;
}

.flatpickr-input[readonly] {
  cursor: pointer;
}
@keyframes fpFadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.formatted-text-container {
  font-size: 1rem;
  line-height: 2;
}
.formatted-text-container p {
  font-size: 1rem;
  line-height: 150%;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.formatted-text-container a {
  color: var(--color-accent);
}
.formatted-text-container a:hover {
  color: var(--color-text-default);
}
.formatted-text-container [class~=lead] {
  font-size: 1.25rem;
  line-height: 2;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.formatted-text-container blockquote {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-inline-start: 1.25rem;
}
.formatted-text-container h1 {
  font-size: 1.69rem;
  font-weight: 700;
  line-height: 160%;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1;
}
.formatted-text-container h2 {
  font-size: 1.56rem;
  font-weight: 700;
  line-height: 160%;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}
.formatted-text-container h3 {
  font-size: 1.44rem;
  font-weight: 700;
  line-height: 160%;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
}
.formatted-text-container h4 {
  font-size: 1.28rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.formatted-text-container h5 {
  font-size: 1.03rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
}
.formatted-text-container img,
.formatted-text-container picture,
.formatted-text-container video {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.formatted-text-container picture > img {
  margin-top: 0;
  margin-bottom: 0;
}
.formatted-text-container kbd {
  font-size: 0.875rem;
  border-radius: 0.3125rem;
  padding: 0.1875rem 0.375rem;
}
.formatted-text-container code {
  font-family: IBM Plex Mono;
  font-size: 0.875rem;
  background-color: var(--color-background-lvl-2);
  border-radius: 0.25rem;
  font-weight: 400;
  margin: 0 0.125rem;
}
.formatted-text-container h2 code {
  font-size: 1.3125rem;
}
.formatted-text-container h3 code {
  font-size: 1.125rem;
}
.formatted-text-container pre {
  font-size: 0.875rem;
  line-height: 2;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
}
.formatted-text-container ol,
.formatted-text-container ul {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding-inline-start: 1.625rem;
}
.formatted-text-container li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 160%;
}
.formatted-text-container ol > li,
.formatted-text-container ul > li {
  padding-inline-start: 0.375rem;
}
.formatted-text-container ol > li {
  list-style-type: decimal;
}
.formatted-text-container ul > li {
  list-style-type: disc;
}
.formatted-text-container ul ul,
.formatted-text-container ul ol,
.formatted-text-container ol ul,
.formatted-text-container ol ol {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
.formatted-text-container dl {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.formatted-text-container dt {
  margin-top: 1.25rem;
}
.formatted-text-container dd {
  margin-top: 0.5rem;
  padding-inline-start: 1.625rem;
}
.formatted-text-container hr {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.formatted-text-container table {
  font-size: 0.875rem;
  line-height: 2;
  text-align: left;
}
.formatted-text-container thead,
.formatted-text-container th {
  padding: 0.5rem 0.5rem;
  text-align: left;
}
.formatted-text-container tbody,
.formatted-text-container td,
.formatted-text-container tfoot,
.formatted-text-container td {
  padding: 0.5rem 0.5rem;
}
.formatted-text-container tr {
  border-bottom: 1px solid var(--color-background-lvl-2);
}
.formatted-text-container th,
.formatted-text-container thead {
  background-color: var(--color-background-lvl-1);
}
.formatted-text-container figure {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.formatted-text-container figcaption {
  font-size: 0.875rem;
  line-height: 1;
  margin-top: 0.75rem;
}
.formatted-text-container > :first-child {
  margin-top: 0;
}
.formatted-text-container > :last-child {
  margin-bottom: 0;
}

.juno-input-group .juno-button:not(:first-child, :last-child),
.juno-input-group .juno-textinput:not(:first-child, :last-child),
.juno-input-group .juno-select:not(:first-child, :last-child) {
  border-radius: 0;
}
.juno-input-group .juno-button:first-child,
.juno-input-group .juno-textinput:first-child,
.juno-input-group .juno-select:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.juno-input-group .juno-button:last-child,
.juno-input-group .juno-textinput:last-child,
.juno-input-group .juno-select:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.juno-input-group .juno-button-default + .juno-button-default,
.juno-input-group .juno-button-primary + .juno-button-primary,
.juno-input-group .juno-button-default-primary-danger + .juno-button-primary-danger,
.juno-input-group .juno-button-subdued + .juno-button-subdued {
  border-left: 0;
}

.juno-search-input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

.juno-select-toggle-default {
  background-color: var(--color-button-default-bg);
  color: var(--color-button-default-text);
}
.juno-select-toggle-default:not(.juno-select-valid, .juno-select-invalid) {
  border: 1px solid var(--color-button-default-bg);
}
.juno-select-toggle-default:hover {
  background-color: var(--color-button-default-hover-bg);
  color: var(--color-button-default-hover-text);
}
.juno-select-toggle-default:active {
  background-color: var(--color-button-default-active-bg);
  border-color: var(--color-button-default-active-border);
  color: var(--color-button-default-active-text);
}

.juno-select-toggle-primary {
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}
.juno-select-toggle-primary:not(.juno-select-valid, .juno-select-invalid) {
  border: 1px solid var(--color-button-primary-bg);
}
.juno-select-toggle-primary:hover {
  background-color: var(--color-button-primary-hover-bg);
  color: var(--color-button-primary-hover-text);
}
.juno-select-toggle-primary:active {
  background-color: var(--color-button-primary-active-bg);
  color: var(--color-button-primary-active-text);
}

.juno-select-toggle-primary-danger {
  background-color: var(--color-button-primary-danger-bg);
  color: var(--color-button-primary-danger-text);
}
.juno-select-toggle-primary-danger:not(.juno-select-valid, .juno-select-invalid) {
  border: 1px solid var(--color-button-primary-danger-bg);
}
.juno-select-toggle-primary-danger:hover {
  background-color: var(--color-button-primary-danger-hover-bg);
  color: var(--color-button-primary-danger-hover-text);
}
.juno-select-toggle-primary-danger:active {
  background-color: var(--color-button-primary-danger-active-bg);
  color: var(--color-button-primary-danger-active-text);
}

.juno-select-toggle-subdued {
  background-color: var(--color-button-subdued-bg);
  color: var(--color-button-subdued-text);
}
.juno-select-toggle-subdued:not(.juno-select-valid, .juno-select-invalid) {
  border: 1px solid var(--color-button-subdued-border);
}
.juno-select-toggle-subdued:hover {
  background-color: var(--color-button-subdued-hover-bg);
  border-color: var(--color-button-subdued-hover-border);
  color: var(--color-button-subdued-hover-text);
}
.juno-select-toggle-subdued:active {
  background-color: var(--color-button-subdued-active-bg);
  border-color: var(--color-button-subdued-active-border);
  color: var(--color-button-subdued-active-text);
}

.juno-textinput:-webkit-autofill + .juno-label {
  color: var(--color-textinput-autofill-label);
}

.juno-textinput:autofill + .juno-label {
  color: var(--color-textinput-autofill-label);
}

.juno-theme-toggle:hover svg {
  color: var(--color-accent);
}

@media (min-width: 1536px){
  .\\32xl\\:jn-container{
    width: 100%;
  }
  @media (min-width: 640px){
    .\\32xl\\:jn-container{
      max-width: 640px;
    }
  }
  @media (min-width: 768px){
    .\\32xl\\:jn-container{
      max-width: 768px;
    }
  }
  @media (min-width: 1024px){
    .\\32xl\\:jn-container{
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px){
    .\\32xl\\:jn-container{
      max-width: 1280px;
    }
  }
  @media (min-width: 1536px){
    .\\32xl\\:jn-container{
      max-width: 1536px;
    }
  }
  @media (min-width: 1856px){
    .\\32xl\\:jn-container{
      max-width: 1856px;
    }
  }
}

@media (min-width: 1856px){
  .\\33xl\\:jn-container{
    width: 100%;
  }
  @media (min-width: 640px){
    .\\33xl\\:jn-container{
      max-width: 640px;
    }
  }
  @media (min-width: 768px){
    .\\33xl\\:jn-container{
      max-width: 768px;
    }
  }
  @media (min-width: 1024px){
    .\\33xl\\:jn-container{
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px){
    .\\33xl\\:jn-container{
      max-width: 1280px;
    }
  }
  @media (min-width: 1536px){
    .\\33xl\\:jn-container{
      max-width: 1536px;
    }
  }
  @media (min-width: 1856px){
    .\\33xl\\:jn-container{
      max-width: 1856px;
    }
  }
}

.last\\:jn-mb-0:last-child{
  margin-bottom: 0px;
}

.last\\:jn-mr-0:last-child{
  margin-right: 0px;
}

.last\\:jn-border-b-0:last-child{
  border-bottom-width: 0;
}

.autofill\\:jn-bg-theme-textinput-autofill:-webkit-autofill{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-textinput-autofill-bg), var(--tw-bg-opacity));
}

.autofill\\:jn-bg-theme-textinput-autofill:autofill{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-textinput-autofill-bg), var(--tw-bg-opacity));
}

.autofill\\:jn-text-theme-textinput-autofill:-webkit-autofill{
  --tw-text-opacity: 1;
  color: rgba(var(--color-textinput-autofill-text), var(--tw-text-opacity));
}

.autofill\\:jn-text-theme-textinput-autofill:autofill{
  --tw-text-opacity: 1;
  color: rgba(var(--color-textinput-autofill-text), var(--tw-text-opacity));
}

.hover\\:jn-bg-theme-background-lvl-3:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-3-raw), var(--tw-bg-opacity));
}

.hover\\:jn-bg-theme-topnavigation-item-active:hover{
  background-color: var(--color-topnavigation-item-active-bg);
}

.hover\\:jn-text-theme-accent:hover{
  --tw-text-opacity: 1;
  color: rgba(var(--color-accent-raw), var(--tw-text-opacity));
}

.hover\\:jn-text-theme-high:hover{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-high-raw), var(--tw-text-opacity));
}

.hover\\:jn-opacity-100:hover{
  opacity: 1;
}

.focus\\:jn-z-40:focus{
  z-index: 40;
}

.focus\\:jn-rounded-full:focus{
  border-radius: 9999px;
}

.focus\\:jn-outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:jn-ring-2:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:jn-ring-theme-focus:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(var(--color-focus-raw), var(--tw-ring-opacity));
}

.focus-visible\\:jn-outline-none:focus-visible{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:jn-ring-2:focus-visible{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:jn-ring-theme-focus:focus-visible{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(var(--color-focus-raw), var(--tw-ring-opacity));
}

.focus-visible\\:jn-ring-offset-1:focus-visible{
  --tw-ring-offset-width: 1px;
}

.focus-visible\\:jn-ring-offset-theme-focus:focus-visible{
  --tw-ring-offset-color: rgb(var(--color-global-bg-raw));
}

.active\\:jn-bg-theme-background-lvl-4:active{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-4-raw), var(--tw-bg-opacity));
}

.active\\:jn-bg-theme-topnavigation-item-active:active{
  background-color: var(--color-topnavigation-item-active-bg);
}

.active\\:jn-text-theme-accent:active{
  --tw-text-opacity: 1;
  color: rgba(var(--color-accent-raw), var(--tw-text-opacity));
}

.active\\:jn-text-theme-high:active{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-high-raw), var(--tw-text-opacity));
}

.disabled\\:jn-pointer-events-none:disabled{
  pointer-events: none;
}

.disabled\\:jn-cursor-not-allowed:disabled{
  cursor: not-allowed;
}

.disabled\\:jn-opacity-50:disabled{
  opacity: 0.5;
}

.jn-group:hover .group-hover\\:jn-text-theme-highest{
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-highest-raw), var(--tw-text-opacity));
}

.jn-peer:-webkit-autofill ~ .peer-autofill\\:jn-text-theme-textinput-autofill-label{
  --tw-text-opacity: 1;
  color: rgba(var(--color-textinput-autofill-label), var(--tw-text-opacity));
}

.jn-peer:autofill ~ .peer-autofill\\:jn-text-theme-textinput-autofill-label{
  --tw-text-opacity: 1;
  color: rgba(var(--color-textinput-autofill-label), var(--tw-text-opacity));
}

.data-\\[headlessui-state\\=\\"disabled\\"\\]\\:jn-cursor-not-allowed[data-headlessui-state="disabled"]{
  cursor: not-allowed;
}

.data-\\[headlessui-state\\=\\"disabled\\"\\]\\:jn-bg-theme-background-lvl-3[data-headlessui-state="disabled"]{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-3-raw), var(--tw-bg-opacity));
}

.data-\\[headlessui-state\\=active\\]\\:jn-bg-theme-background-lvl-3[data-headlessui-state="active"]{
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-3-raw), var(--tw-bg-opacity));
}

.data-\\[headlessui-state\\=active\\]\\:jn-outline-none[data-headlessui-state="active"]{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.data-\\[headlessui-state\\=active\\]\\:jn-ring-2[data-headlessui-state="active"]{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.data-\\[headlessui-state\\=active\\]\\:jn-ring-inset[data-headlessui-state="active"]{
  --tw-ring-inset: inset;
}

.data-\\[headlessui-state\\=active\\]\\:jn-ring-theme-focus[data-headlessui-state="active"]{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(var(--color-focus-raw), var(--tw-ring-opacity));
}

@media (min-width: 768px){
  .md\\:jn-grid-cols-3{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1280px){
  .xl\\:jn-w-\\[55\\%\\]{
    width: 55%;
  }
  .xl\\:jn-w-\\[80\\%\\]{
    width: 80%;
  }
  .xl\\:jn-grid-cols-4{
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1536px){
  .\\32xl\\:jn-mx-auto{
    margin-left: auto;
    margin-right: auto;
  }
  .\\32xl\\:jn-w-\\[1228px\\]{
    width: 1228px;
  }
  .\\32xl\\:jn-w-\\[844px\\]{
    width: 844px;
  }
}

@media (min-width: 1856px){
  .\\33xl\\:jn-mx-auto{
    margin-left: auto;
    margin-right: auto;
  }
}

.\\[\\&\\>\\*\\]\\:jn-h-7>*{
  height: 1.75rem;
}

.\\[\\&\\>\\*\\]\\:jn-w-min>*{
  width: -moz-min-content;
  width: min-content;
}

.\\[\\&\\>\\*\\]\\:jn-max-w-xs>*{
  max-width: 20rem;
}

.\\[\\&\\>\\*\\]\\:jn-object-contain>*{
  -o-object-fit: contain;
     object-fit: contain;
}`,ks="juno-style-provider-global-styles",l1=t=>{let{inline:n}=t;return p.useInsertionEffect(()=>{if(!(n||document.querySelector(`[id="${ks}"]`))){const o=document.createElement("style");o.setAttribute("id",ks),o.appendChild(document.createTextNode($c)),document.head.append(o)}},[]),n?S.createElement("style",{[`data-${ks}`]:""},$c):null};l1.propTypes={inline:j.bool};function _E(t,n){const[o,r]=p.useState(()=>{try{const i=window.localStorage.getItem(t);return i?JSON.parse(i):n}catch(i){return console.log("Juno Error: useLocalStorage error: ",i),n}});return[o,i=>{try{const a=i instanceof Function?i(o):i;r(a),window.localStorage.setItem(t,JSON.stringify(a))}catch(a){return console.log("Juno Error: useLocalStorage error: ",a),n}}]}const s1=p.createContext(),LE="juno-app-body",Eg="theme-dark",Pc=t=>{let{stylesWrapper:n="inline",theme:o,children:r=null,shadowRootMode:i}=t;const a=o||Eg,[l,c]=_E("juno-theme",a),u=p.useRef(l),d=p.useRef(LE+" "+a),f=p.useRef(null),g=p.useCallback(v=>{let{children:E}=v;return n==="shadowRoot"?S.createElement(Sf,{mode:i},E):E},[n,i]),b=p.useCallback(v=>{f.current&&typeof v=="string"&&(f.current.classList.add(v),d.current=f.current.className)},[]),h=p.useCallback(v=>{f.current&&typeof v=="string"&&(f.current.classList.remove(v),d.current=f.current.className)},[]),m=p.useCallback(v=>{f.current&&typeof v=="string"&&(f.current.classList.remove(u.current),f.current.classList.add(v),u.current=v,d.current=f.current.className,c(v))},[f.current,u.current]);return p.useEffect(()=>{f.current&&m(o||Eg)},[o]),p.useMemo(()=>S.createElement(g,null,S.createElement(a1,{inline:n!=="head"}),S.createElement(l1,{inline:n!=="head"}),S.createElement(s1.Provider,{value:{styles:$c,theme:RE,currentTheme:u.current,setThemeClass:m,addCssClass:b,removeCssClass:h}},S.createElement("div",{className:d.current,ref:f},r))),[n,r,i,d.current,m])};Pc.propTypes={children:j.node,stylesWrapper:j.oneOf(["head","inline","shadowRoot"]),theme:j.string,shadowRootMode:j.oneOf(["open","closed"])},Pc.useStyles=()=>S.useContext(s1);const c1=p.createContext();function u1(){const t=p.useContext(c1),[n,o]=p.useState(t==null?void 0:t.current);return p.useEffect(()=>t?void(t.current&&o(!0)):void console.warn("usePortalRef should be called inside a PortalProvider! You are probably using a component that renders a portal, e.g. Modal or Select. Be sure that your app is wrapped in an AppShellProvider."),[t]),t==null?void 0:t.current}const Ka=t=>{let{children:n}=t;const o=u1();return o?rr.createPortal(n,o):null};Ka.propTypes={children:j.any},Ka.propTypes={};const Ic=t=>{let{className:n="",id:o="",children:r=null}=t;const i=p.useRef();return S.createElement(c1.Provider,{value:i},r,S.createElement("div",{className:`juno-portal-container ${n}`,id:o,ref:i}))};Ic.Portal=Ka,Ka.displayName="PortalProvider.Portal",Ic.propTypes={className:j.string,id:j.string,children:j.node};const d1=t=>{let{shadowRoot:n=!0,shadowRootMode:o="open",stylesWrapper:r="inline",theme:i=null,children:a}=t;const l=S.useCallback(c=>{let{children:u}=c;return n?S.createElement(Sf,{mode:o},u):u},[n,o]);return S.createElement(l,null,S.createElement(Pc,{theme:i,stylesWrapper:n?"inline":r},S.createElement(Ic,null,a)))};d1.propTypes={shadowRoot:j.bool,shadowRootMode:j.oneOf(["open","closed"]),stylesWrapper:j.oneOf(["head","inline"]),theme:j.string,children:j.any};var kg,Og,FE=["title","titleId"];function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Tc.apply(null,arguments)}function AE(t,n){if(t==null)return{};var o,r,i=zE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function zE(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Sg,f1=function(t){var n=t.title,o=t.titleId,r=AE(t,FE);return p.createElement("svg",Tc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,kg||(kg=p.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Og||(Og=p.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})))},HE=["title","titleId"];function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Dc.apply(null,arguments)}function BE(t,n){if(t==null)return{};var o,r,i=WE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function WE(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Cg,p1=function(t){var n=t.title,o=t.titleId,r=BE(t,HE);return p.createElement("svg",Dc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Sg||(Sg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"})))},VE=["title","titleId"];function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Mc.apply(null,arguments)}function qE(t,n){if(t==null)return{};var o,r,i=UE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function UE(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var $g,g1=function(t){var n=t.title,o=t.titleId,r=qE(t,VE);return p.createElement("svg",Mc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Cg||(Cg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))},YE=["title","titleId"];function Nc(){return Nc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Nc.apply(null,arguments)}function KE(t,n){if(t==null)return{};var o,r,i=GE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function GE(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Pg,h1=function(t){var n=t.title,o=t.titleId,r=KE(t,YE);return p.createElement("svg",Nc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,$g||($g=p.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"})))},QE=["title","titleId"];function Rc(){return Rc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Rc.apply(null,arguments)}function JE(t,n){if(t==null)return{};var o,r,i=ZE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function ZE(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ig,m1=function(t){var n=t.title,o=t.titleId,r=JE(t,QE);return p.createElement("svg",Rc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Pg||(Pg=p.createElement("path",{d:"M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"})))},XE=["title","titleId"];function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},_c.apply(null,arguments)}function ek(t,n){if(t==null)return{};var o,r,i=tk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function tk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Tg,b1=function(t){var n=t.title,o=t.titleId,r=ek(t,XE);return p.createElement("svg",_c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Ig||(Ig=p.createElement("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"})))},nk=["title","titleId"];function Lc(){return Lc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Lc.apply(null,arguments)}function rk(t,n){if(t==null)return{};var o,r,i=ok(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function ok(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Dg,v1=function(t){var n=t.title,o=t.titleId,r=rk(t,nk);return p.createElement("svg",Lc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Tg||(Tg=p.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"})))},ik=["title","titleId"];function Fc(){return Fc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Fc.apply(null,arguments)}function ak(t,n){if(t==null)return{};var o,r,i=lk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function lk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Mg,y1=function(t){var n=t.title,o=t.titleId,r=ak(t,ik);return p.createElement("svg",Fc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Dg||(Dg=p.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})))},sk=["title","titleId"];function Ac(){return Ac=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Ac.apply(null,arguments)}function ck(t,n){if(t==null)return{};var o,r,i=uk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function uk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ng,w1=function(t){var n=t.title,o=t.titleId,r=ck(t,sk);return p.createElement("svg",Ac({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Mg||(Mg=p.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})))},dk=["title","titleId"];function zc(){return zc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},zc.apply(null,arguments)}function fk(t,n){if(t==null)return{};var o,r,i=pk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function pk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Rg,x1=function(t){var n=t.title,o=t.titleId,r=fk(t,dk);return p.createElement("svg",zc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Ng||(Ng=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},gk=["title","titleId"];function Hc(){return Hc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Hc.apply(null,arguments)}function hk(t,n){if(t==null)return{};var o,r,i=mk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function mk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var _g,j1=function(t){var n=t.title,o=t.titleId,r=hk(t,gk);return p.createElement("svg",Hc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Rg||(Rg=p.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})))},bk=["title","titleId"];function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Bc.apply(null,arguments)}function vk(t,n){if(t==null)return{};var o,r,i=yk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function yk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Lg,E1=function(t){var n=t.title,o=t.titleId,r=vk(t,bk);return p.createElement("svg",Bc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,_g||(_g=p.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})))},wk=["title","titleId"];function Wc(){return Wc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Wc.apply(null,arguments)}function xk(t,n){if(t==null)return{};var o,r,i=jk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function jk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Fg,k1=function(t){var n=t.title,o=t.titleId,r=xk(t,wk);return p.createElement("svg",Wc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Lg||(Lg=p.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},Ek=["title","titleId"];function Vc(){return Vc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Vc.apply(null,arguments)}function kk(t,n){if(t==null)return{};var o,r,i=Ok(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Ok(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ag,O1=function(t){var n=t.title,o=t.titleId,r=kk(t,Ek);return p.createElement("svg",Vc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Fg||(Fg=p.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))},Sk=["title","titleId"];function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},qc.apply(null,arguments)}function Ck(t,n){if(t==null)return{};var o,r,i=$k(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function $k(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var zg,S1=function(t){var n=t.title,o=t.titleId,r=Ck(t,Sk);return p.createElement("svg",qc({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Ag||(Ag=p.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))},Pk=["title","titleId"];function Uc(){return Uc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Uc.apply(null,arguments)}function Ik(t,n){if(t==null)return{};var o,r,i=Tk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Tk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Hg,Ga=function(t){var n=t.title,o=t.titleId,r=Ik(t,Pk);return p.createElement("svg",Uc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,zg||(zg=p.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"})))},Dk=["title","titleId"];function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Yc.apply(null,arguments)}function Mk(t,n){if(t==null)return{};var o,r,i=Nk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Nk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Bg,C1=function(t){var n=t.title,o=t.titleId,r=Mk(t,Dk);return p.createElement("svg",Yc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Hg||(Hg=p.createElement("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"})))},Rk=["title","titleId"];function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Kc.apply(null,arguments)}function _k(t,n){if(t==null)return{};var o,r,i=Lk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Lk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Wg,$1=function(t){var n=t.title,o=t.titleId,r=_k(t,Rk);return p.createElement("svg",Kc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Bg||(Bg=p.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))},Fk=["title","titleId"];function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Gc.apply(null,arguments)}function Ak(t,n){if(t==null)return{};var o,r,i=zk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function zk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Vg,P1=function(t){var n=t.title,o=t.titleId,r=Ak(t,Fk);return p.createElement("svg",Gc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Wg||(Wg=p.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))},Hk=["title","titleId"];function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Qc.apply(null,arguments)}function Bk(t,n){if(t==null)return{};var o,r,i=Wk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Wk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var qg,I1=function(t){var n=t.title,o=t.titleId,r=Bk(t,Hk);return p.createElement("svg",Qc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Vg||(Vg=p.createElement("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},Vk=["title","titleId"];function Jc(){return Jc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Jc.apply(null,arguments)}function qk(t,n){if(t==null)return{};var o,r,i=Uk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Uk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ug,T1=function(t){var n=t.title,o=t.titleId,r=qk(t,Vk);return p.createElement("svg",Jc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,qg||(qg=p.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))},Yk=["title","titleId"];function Zc(){return Zc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Zc.apply(null,arguments)}function Kk(t,n){if(t==null)return{};var o,r,i=Gk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Gk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Yg,D1=function(t){var n=t.title,o=t.titleId,r=Kk(t,Yk);return p.createElement("svg",Zc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Ug||(Ug=p.createElement("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))},Qk=["title","titleId"];function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Xc.apply(null,arguments)}function Jk(t,n){if(t==null)return{};var o,r,i=Zk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Zk(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Kg,M1=function(t){var n=t.title,o=t.titleId,r=Jk(t,Qk);return p.createElement("svg",Xc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Yg||(Yg=p.createElement("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})))},Xk=["title","titleId"];function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},eu.apply(null,arguments)}function eO(t,n){if(t==null)return{};var o,r,i=tO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function tO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Gg,N1=function(t){var n=t.title,o=t.titleId,r=eO(t,Xk);return p.createElement("svg",eu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Kg||(Kg=p.createElement("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})))},nO=["title","titleId"];function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},tu.apply(null,arguments)}function rO(t,n){if(t==null)return{};var o,r,i=oO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function oO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Qg,R1=function(t){var n=t.title,o=t.titleId,r=rO(t,nO);return p.createElement("svg",tu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Gg||(Gg=p.createElement("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))},iO=["title","titleId"];function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},nu.apply(null,arguments)}function aO(t,n){if(t==null)return{};var o,r,i=lO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function lO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Jg,_1=function(t){var n=t.title,o=t.titleId,r=aO(t,iO);return p.createElement("svg",nu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Qg||(Qg=p.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"})))},sO=["title","titleId"];function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},ru.apply(null,arguments)}function cO(t,n){if(t==null)return{};var o,r,i=uO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function uO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Zg,L1=function(t){var n=t.title,o=t.titleId,r=cO(t,sO);return p.createElement("svg",ru({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Jg||(Jg=p.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})))},dO=["title","titleId"];function ou(){return ou=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},ou.apply(null,arguments)}function fO(t,n){if(t==null)return{};var o,r,i=pO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function pO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Xg,eh,Eo=function(t){var n=t.title,o=t.titleId,r=fO(t,dO);return p.createElement("svg",ou({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Zg||(Zg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})))},gO=["title","titleId"];function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},iu.apply(null,arguments)}function hO(t,n){if(t==null)return{};var o,r,i=mO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function mO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var th,F1=function(t){var n=t.title,o=t.titleId,r=hO(t,gO);return p.createElement("svg",iu({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Xg||(Xg=p.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),eh||(eh=p.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))},bO=["title","titleId"];function au(){return au=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},au.apply(null,arguments)}function vO(t,n){if(t==null)return{};var o,r,i=yO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function yO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var nh,A1=function(t){var n=t.title,o=t.titleId,r=vO(t,bO);return p.createElement("svg",au({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,th||(th=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})))},wO=["title","titleId"];function lu(){return lu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},lu.apply(null,arguments)}function xO(t,n){if(t==null)return{};var o,r,i=jO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function jO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var rh,oh,z1=function(t){var n=t.title,o=t.titleId,r=xO(t,wO);return p.createElement("svg",lu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,nh||(nh=p.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))},EO=["title","titleId"];function su(){return su=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},su.apply(null,arguments)}function kO(t,n){if(t==null)return{};var o,r,i=OO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function OO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ih,ah,H1=function(t){var n=t.title,o=t.titleId,r=kO(t,EO);return p.createElement("svg",su({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,rh||(rh=p.createElement("circle",{cx:10,cy:8,r:4})),oh||(oh=p.createElement("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},SO=["title","titleId"];function cu(){return cu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},cu.apply(null,arguments)}function CO(t,n){if(t==null)return{};var o,r,i=$O(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function $O(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var lh,B1=function(t){var n=t.title,o=t.titleId,r=CO(t,SO);return p.createElement("svg",cu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,ih||(ih=p.createElement("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zm0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z"})),ah||(ah=p.createElement("path",{d:"M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z"})))},PO=["title","titleId"];function uu(){return uu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},uu.apply(null,arguments)}function IO(t,n){if(t==null)return{};var o,r,i=TO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function TO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var sh,ch,W1=function(t){var n=t.title,o=t.titleId,r=IO(t,PO);return p.createElement("svg",uu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,lh||(lh=p.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))},DO=["title","titleId"];function du(){return du=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},du.apply(null,arguments)}function MO(t,n){if(t==null)return{};var o,r,i=NO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function NO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var uh,V1=function(t){var n=t.title,o=t.titleId,r=MO(t,DO);return p.createElement("svg",du({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,sh||(sh=p.createElement("path",{d:"M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86a8 8 0 0 1-5.61 1.01c-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"})),ch||(ch=p.createElement("path",{d:"M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"})))},RO=["title","titleId"];function fu(){return fu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},fu.apply(null,arguments)}function _O(t,n){if(t==null)return{};var o,r,i=LO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function LO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var dh,q1=function(t){var n=t.title,o=t.titleId,r=_O(t,RO);return p.createElement("svg",fu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,uh||(uh=p.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"})))},FO=["title","titleId"];function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},pu.apply(null,arguments)}function AO(t,n){if(t==null)return{};var o,r,i=zO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function zO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var fh,U1=function(t){var n=t.title,o=t.titleId,r=AO(t,FO);return p.createElement("svg",pu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,dh||(dh=p.createElement("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"})))},HO=["title","titleId"];function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},gu.apply(null,arguments)}function BO(t,n){if(t==null)return{};var o,r,i=WO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function WO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ph,gh,Y1=function(t){var n=t.title,o=t.titleId,r=BO(t,HO);return p.createElement("svg",gu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,fh||(fh=p.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})))},VO=["title","titleId"];function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},hu.apply(null,arguments)}function qO(t,n){if(t==null)return{};var o,r,i=UO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function UO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var hh,K1=function(t){var n=t.title,o=t.titleId,r=qO(t,VO);return p.createElement("svg",hu({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,ph||(ph=p.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),gh||(gh=p.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))},YO=["title","titleId"];function mu(){return mu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},mu.apply(null,arguments)}function KO(t,n){if(t==null)return{};var o,r,i=GO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function GO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var mh,G1=function(t){var n=t.title,o=t.titleId,r=KO(t,YO);return p.createElement("svg",mu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,hh||(hh=p.createElement("path",{d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},QO=["title","titleId"];function bu(){return bu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},bu.apply(null,arguments)}function JO(t,n){if(t==null)return{};var o,r,i=ZO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function ZO(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var bh,vh,yh,wh,Q1=function(t){var n=t.title,o=t.titleId,r=JO(t,QO);return p.createElement("svg",bu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,mh||(mh=p.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))},XO=["title","titleId"];function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},vu.apply(null,arguments)}function eS(t,n){if(t==null)return{};var o,r,i=tS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function tS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var xh,jh,Eh,kh,J1=function(t){var n=t.title,o=t.titleId,r=eS(t,XO);return p.createElement("svg",vu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,bh||(bh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),vh||(vh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),yh||(yh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),wh||(wh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},nS=["title","titleId"];function yu(){return yu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},yu.apply(null,arguments)}function rS(t,n){if(t==null)return{};var o,r,i=oS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function oS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Oh,Sh,Ch,$h,Z1=function(t){var n=t.title,o=t.titleId,r=rS(t,nS);return p.createElement("svg",yu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,xh||(xh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),jh||(jh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Eh||(Eh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),kh||(kh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},iS=["title","titleId"];function wu(){return wu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},wu.apply(null,arguments)}function aS(t,n){if(t==null)return{};var o,r,i=lS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function lS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ph,Ih,Th,X1=function(t){var n=t.title,o=t.titleId,r=aS(t,iS);return p.createElement("svg",wu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Oh||(Oh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Sh||(Sh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Ch||(Ch=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),$h||($h=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))},sS=["title","titleId"];function xu(){return xu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},xu.apply(null,arguments)}function cS(t,n){if(t==null)return{};var o,r,i=uS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function uS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Dh,ew=function(t){var n=t.title,o=t.titleId,r=cS(t,sS);return p.createElement("svg",xu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Ph||(Ph=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Ih||(Ih=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Th||(Th=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))},dS=["title","titleId"];function ju(){return ju=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},ju.apply(null,arguments)}function fS(t,n){if(t==null)return{};var o,r,i=pS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function pS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Mh,tw=function(t){var n=t.title,o=t.titleId,r=fS(t,dS);return p.createElement("svg",ju({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Dh||(Dh=p.createElement("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"})))},gS=["title","titleId"];function Eu(){return Eu=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Eu.apply(null,arguments)}function hS(t,n){if(t==null)return{};var o,r,i=mS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function mS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Nh,nw=function(t){var n=t.title,o=t.titleId,r=hS(t,gS);return p.createElement("svg",Eu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Mh||(Mh=p.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})))},bS=["title","titleId"];function ku(){return ku=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},ku.apply(null,arguments)}function vS(t,n){if(t==null)return{};var o,r,i=yS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function yS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Rh,rw=function(t){var n=t.title,o=t.titleId,r=vS(t,bS);return p.createElement("svg",ku({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Nh||(Nh=p.createElement("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"})))},wS=["title","titleId"];function Ou(){return Ou=Object.assign?Object.assign.bind():function(t){for(var n,o=1;o<arguments.length;o++)for(var r in n=arguments[o],n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},Ou.apply(null,arguments)}function xS(t,n){if(t==null)return{};var o,r,i=jS(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function jS(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ow=function(t){var n=t.title,o=t.titleId,r=xS(t,wS);return p.createElement("svg",Ou({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Rh||(Rh=p.createElement("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"})))};const ES=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,kS=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,zn=["accessTime","accountCircle","addCircle","autoAwesomeMosaic","autoAwesomeMotion","bolt","calendarToday","cancel","check","checkCircle","chevronLeft","chevronRight","close","comment","contentCopy","danger","dangerous","default","deleteForever","description","dns","download","edit","error","errorOutline","exitToApp","expandLess","expandMore","filterAlt","forum","help","home","info","manageAccounts","monitorHeart","moreVert","nightsStay","notificationsOff","openInBrowser","openInNew","place","search","severityLow","severityMedium","severityHigh","severityCritical","success","upload","warning","wbSunny","widgets"],OS=t=>{let{icon:n,color:o,size:r,title:i,iconClassName:a,...l}=t;const c=`juno-icon juno-icon-${n} jn-fill-current ${o} ${a}`;return n==="accessTime"?S.createElement(f1,he({width:r,height:r,className:c,alt:"time",title:i||"Time",role:"img"},l)):n==="accountCircle"?S.createElement(p1,he({width:r,height:r,className:c,alt:"account",title:i||"Account",role:"img"},l)):n==="addCircle"?S.createElement(g1,he({width:r,height:r,className:c,alt:"add",title:i||"Add",role:"img"},l)):n==="autoAwesomeMosaic"?S.createElement(h1,he({width:r,height:r,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):n==="autoAwesomeMotion"?S.createElement(m1,he({width:r,height:r,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):n==="bolt"?S.createElement(b1,he({width:r,height:r,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):n==="calendarToday"?S.createElement(v1,he({width:r,height:r,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):n==="cancel"?S.createElement(y1,he({width:r,height:r,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):n==="check"?S.createElement(w1,he({width:r,height:r,className:c,alt:"check",title:i||"Check",role:"img"},l)):n==="checkCircle"?S.createElement(x1,he({width:r,height:r,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):n==="chevronLeft"?S.createElement(j1,he({width:r,height:r,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):n==="chevronRight"?S.createElement(E1,he({width:r,height:r,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):n==="close"?S.createElement(k1,he({width:r,height:r,className:c,alt:"close",title:i||"Close",role:"img"},l)):n==="comment"?S.createElement(z1,he({width:r,height:r,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):n==="contentCopy"?S.createElement(O1,he({width:r,height:r,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):n==="danger"?S.createElement(S1,he({width:r,height:r,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):n==="dangerous"?S.createElement(Ga,he({width:r,height:r,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):n==="deleteForever"?S.createElement($1,he({width:r,height:r,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):n==="description"?S.createElement(P1,he({width:r,height:r,className:c,alt:"description",title:i||"Description",role:"img"},l)):n==="dns"?S.createElement(I1,he({width:r,height:r,className:c,alt:"service",title:i||"Service",role:"img"},l)):n==="download"?S.createElement(C1,he({width:r,height:r,className:c,alt:"download",title:i||"download",role:"img"},l)):n==="edit"?S.createElement(T1,he({width:r,height:r,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):n==="error"?S.createElement(Ga,he({width:r,height:r,className:c,alt:"error",title:i||"Error",role:"img"},l)):n==="errorOutline"?S.createElement(D1,he({width:r,height:r,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):n==="exitToApp"?S.createElement(M1,he({width:r,height:r,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):n==="expandLess"?S.createElement(N1,he({width:r,height:r,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):n==="expandMore"?S.createElement(R1,he({width:r,height:r,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):n==="filterAlt"?S.createElement(_1,he({width:r,height:r,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):n==="forum"?S.createElement(L1,he({width:r,height:r,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):n==="help"?S.createElement(Eo,he({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):n==="home"?S.createElement(F1,he({width:r,height:r,className:c,alt:"home",title:i||"Home",role:"img"},l)):n==="info"?S.createElement(A1,he({width:r,height:r,className:c,alt:"info",title:i||"Info",role:"img"},l)):n==="manageAccounts"?S.createElement(H1,he({width:r,height:r,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):n==="monitorHeart"?S.createElement(B1,he({width:r,height:r,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):n==="moreVert"?S.createElement(W1,he({width:r,height:r,className:c,alt:"more",title:i||"More",role:"img"},l)):n==="nightsStay"?S.createElement(V1,he({width:r,height:r,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):n==="notificationsOff"?S.createElement(q1,he({width:r,height:r,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):n==="openInBrowser"?S.createElement(U1,he({width:r,height:r,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):n==="openInNew"?S.createElement(Y1,he({width:r,height:r,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):n==="place"?S.createElement(K1,he({width:r,height:r,className:c,alt:"location",title:i||"Location",role:"img"},l)):n==="search"?S.createElement(Q1,he({width:r,height:r,className:c,alt:"search",title:i||"Search",role:"img"},l)):n==="severityLow"?S.createElement(J1,he({width:r,height:r,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):n==="severityMedium"?S.createElement(Z1,he({width:r,height:r,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):n==="severityHigh"?S.createElement(X1,he({width:r,height:r,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):n==="severityCritical"?S.createElement(ew,he({width:r,height:r,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):n==="success"?S.createElement(G1,he({width:r,height:r,className:c,alt:"success",title:i||"Success",role:"img"},l)):n==="upload"?S.createElement(tw,he({width:r,height:r,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):n==="widgets"?S.createElement(ow,he({width:r,height:r,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):n==="warning"?S.createElement(nw,he({width:r,height:r,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):n==="wbSunny"?S.createElement(rw,he({width:r,height:r,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):n==="default"?S.createElement(Eo,he({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement(Eo,he({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l))},zt=p.forwardRef((t,n)=>{let{icon:o=null,color:r="",size:i="24",title:a="",className:l="",href:c="",disabled:u=!1,onClick:d,...f}=t;const g=c||d?"":l,b=c||d?{}:f,h=OS({icon:o,color:r,size:i,title:a,iconClassName:g,...b}),m=S.createElement("button",he({onClick:E=>{d&&d(E)},className:`juno-icon-button ${kS} ${l}`,"aria-label":a||o,disabled:u,ref:n},f),h),v=S.createElement("a",he({href:c,className:`juno-icon-link ${ES} ${l}`,"aria-label":a||o,ref:n},f),h);return c?v:d?m:S.createElement("span",{ref:n},h)});zt.displayName="Icon",zt.propTypes={icon:j.oneOf(zn),color:j.string,size:j.string,title:j.string,className:j.string,href:j.string,disabled:j.bool,onClick:j.func};const SS=`
	jn-rounded
	jn-text-sm
	jn-text-theme-default
	jn-py-0.5
	jn-px-1
  jn-justify-center
  jn-items-center
`,CS="jn-bg-theme-badge-default",$S="jn-bg-theme-info/25",PS="jn-bg-theme-success/25",IS="jn-bg-theme-warning/25",TS="jn-bg-theme-danger/25",DS="jn-bg-theme-danger/70 jn-text-theme-high",MS="jn-bg-theme-error/25",NS="jn-mr-1 jn-items-center",RS=["info","success","warning","danger","error","critical"],_S=t=>t==="info"?$S:t==="success"?PS:t==="warning"?IS:t==="danger"?TS:t==="error"?MS:t==="critical"?DS:CS,iw=t=>{let{variant:n="default",icon:o=!1,text:r="",className:i="",children:a=null,...l}=t;return S.createElement("span",he({className:`
        juno-badge 
        juno-badge-${n} 
        ${SS} 
        ${_S(n)}
        ${o?"jn-inline-flex":""}
        ${i}`},l),o?S.createElement(zt,{icon:((c,u)=>c&&zn.includes(c)?c:c===!0?u:null)(o,n),size:"1.125rem",className:`${NS}`,color:((c,u)=>c===!0?`jn-text-theme-${u}`:void 0)(o,n)}):null,a||r)};iw.propTypes={variant:j.oneOf(["default",...RS]),icon:j.oneOfType([j.bool,j.oneOf(zn)]),text:j.string,className:j.string,children:j.node};const LS=`
  jn-text-sm
  jn-rounded
  jn-bg-theme-box-default
  jn-border
  jn-border-theme-box-default
`,FS=`
  jn-py-1
  jn-px-2
`,aw=t=>{let{children:n=null,unpad:o=!1,className:r="",...i}=t;return S.createElement("div",he({className:`juno-box ${LS} ${o?"":FS} ${r}`},i),n)};aw.propTypes={children:j.node,unpad:j.bool,className:j.string};j.oneOf(zn),j.string,j.string,j.string,j.bool,j.func,j.bool,j.string,j.node;const AS=t=>t==="0"?"jn-gap-0":t==="px"?"jn-gap-px":t==="0.5"?"jn-gap-0.5":t==="1"?"jn-gap-1":t==="1.5"?"jn-gap-1.5":t==="2"?"jn-gap-2":t==="2.5"?"jn-gap-2.5":t==="3"?"jn-gap-3":t==="3.5"?"jn-gap-3.5":t==="4"?"jn-gap-4":t==="5"?"jn-gap-5":t==="6"?"jn-gap-6":t==="7"?"jn-gap-7":t==="8"?"jn-gap-8":t==="9"?"jn-gap-9":t==="10"?"jn-gap-10":t==="11"?"jn-gap-11":t==="12"?"jn-gap-12":t==="14"?"jn-gap-14":t==="16"?"jn-gap-16":t==="20"?"jn-gap-20":t==="24"?"jn-gap-24":t==="28"?"jn-gap-28":t==="32"?"jn-gap-32":t==="36"?"jn-gap-36":t==="40"?"jn-gap-40":t==="44"?"jn-gap-44":t==="48"?"jn-gap-48":t==="52"?"jn-gap-52":t==="56"?"jn-gap-56":t==="60"?"jn-gap-60":t==="64"?"jn-gap-64":t==="72"?"jn-gap-72":t==="80"?"jn-gap-80":t==="96"?"jn-gap-96":"jn-gap-0",zS=(t,n,o)=>`
      ${t==="vertical"?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}
      ${o&&"jn-flex-wrap"}
      ${AS(n)}
    `,HS=t=>t==="start"?"jn-items-start":t==="end"?"jn-items-end":t==="center"?"jn-items-center":t==="baseline"?"jn-items-baseline":t==="stretch"?"jn-items-stretch":"",BS=t=>t==="start"?"jn-justify-start":t==="end"?"jn-justify-end":t==="center"?"jn-justify-center":t==="between"?"jn-justify-between":t==="around"?"jn-justify-around":t==="evenly"?"jn-justify-evenly":"",Cf=t=>{let{direction:n="horizontal",gap:o="0",alignment:r="stretch",distribution:i="start",wrap:a=!1,className:l="",children:c=null,...u}=t;return S.createElement("div",he({className:`juno-stack ${zS(n,o,a)} ${HS(r)} ${BS(i)} ${l||""}`},u),c)};Cf.propTypes={children:j.node,className:j.string,direction:j.oneOf(["horizontal","vertical"]),alignment:j.oneOf(["start","end","center","baseline","stretch"]),distribution:j.oneOf(["start","end","center","between","around","evenly"]),wrap:j.bool,gap:j.oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])};j.string,j.node;const WS=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,VS=`
  jn-text-theme-accent
`,qS=`
  jn-text-theme-danger 
`,US=`
  jn-text-theme-success
`,YS=`
  jn-text-theme-warning  
`,KS=`
  jn-text-theme-on-default
`,$f=t=>{let{variant:n="default",size:o=null,className:r="",color:i="",...a}=t;const l=u=>u==="small"?"1rem":u==="large"?"3rem":u,c=o?{width:l(o),height:l(o)}:{};return S.createElement("svg",he({className:`juno-spinner ${WS} ${i||(n==="primary"?VS:n==="danger"?qS:n==="success"?US:n==="warning"?YS:KS)} ${r}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:c,role:"progressbar"},a),S.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};$f.propTypes={variant:j.oneOf(["primary","danger","default","success","warning"]),size:j.string,className:j.string,color:j.string};const _h=`
  jn-font-bold
  jn-inline-flex 
  jn-justify-center 
  jn-items-center
  jn-rounded
  jn-shadow-sm 
  jn-w-auto
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
  disabled:jn-pointer-events-none
`,Lh=`
  jn-text-sm
  jn-leading-5
`,Fh=`
  jn-text-base
  jn-leading-6
`,GS=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,QS=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,JS=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,ZS=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,Ah=(t,n)=>t==="small"?n==="subdued"?`${QS}`:`${GS}`:n==="subdued"?`${ZS}`:`${JS}`,XS=`
  jn-mr-2
`,eC=`
  jn-mr-2
`,tC=t=>t==="small"?`${XS}`:`${eC}`,zh=t=>t?"in-progress":"",nC=t=>t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":"",Ii=S.forwardRef((t,n)=>{let{label:o,title:r=null,variant:i,size:a="default",disabled:l=null,href:c=null,icon:u=null,className:d="",onClick:f,children:g,progress:b=!1,progressLabel:h="",...m}=t;const v=i||"default",E=r||o||"",y=b?S.createElement($f,{size:a==="small"?"1.125rem":"1.5rem",color:`${nC(v)}`}):u?S.createElement(zt,{icon:u,title:E,className:`juno-button-icon ${o||g?tC(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,k=b&&h?h:o||g,C=S.createElement("button",he({type:"button",className:`
          juno-button 
          juno-button-${v} 
          juno-button-${a}-size 
          ${_h} 
          ${a==="small"?Lh:Fh} 
          ${Ah(a,i)}
          ${zh(b)} 
          ${d}`,disabled:l,onClick:I=>{f&&f(I)},title:E,ref:n},m),y,k),R=S.createElement("a",he({href:c,role:"button",className:`
          juno-button 
          juno-button-${v} 
          juno-button-${a}-size 
          ${_h} 
          ${a==="small"?Lh:Fh}
          ${Ah(a,i)}
          ${zh(b)} 
          ${d}
        `,disabled:l,onClick:f,title:E,ref:n},m),y,k);return c?R:C});Ii.displayName="Button",Ii.propTypes={children:j.any,variant:j.oneOf(["primary","primary-danger","default","subdued"]),size:j.oneOf(["small","default"]),disabled:j.bool,href:j.string,label:j.string,title:j.string,icon:j.oneOf(zn),className:j.string,onClick:j.func,progress:j.bool,progressLabel:j.string};j.string,j.node;var rC=`
  jn-text-theme-high
  jn-text-base
  jn-transform 
  jn-origin-top-left 
  jn-transition-all 
  jn-duration-100 
  jn-ease-in-out
  jn-z-10
`,oC=`
  jn-absolute
`,iC=`
  jn-scale-75
  -jn-translate-y-[0.4375rem]
`,aC=`
  jn-inline-block
  jn-w-1
  jn-h-1
  jn-rounded-full
  jn-align-top
  jn-ml-1
  jn-mt-2
  jn-bg-theme-required
`,lC=`
  jn-opacity-50
  jn-cursor-not-allowed
`,sC=S.forwardRef(function(t,n){var o=t.text,r=o===void 0?"":o,i=t.htmlFor,a=i===void 0?void 0:i,l=t.required,c=t.className,u=c===void 0?"":c,d=t.disabled,f=t.floating,g=t.minimized,b=lt(t,["text","htmlFor","required","className","disabled","floating","minimized"]);return S.createElement("label",de({className:`
        juno-label 
        `.concat(rC,` 
        `).concat(f!==void 0&&f?"juno-label-floating "+oC:"",`
        `).concat(g!==void 0&&g?"juno-label-minimized "+iC:"",`
        `).concat(d!==void 0&&d?"juno-label-disabled "+lC:"",` 
        `).concat(u,`
      `),htmlFor:a,ref:n},b),r,l!==void 0&&l?S.createElement("span",{className:`
          juno-required 
          `.concat(aC,`
          `)}):"")});sC.displayName="Label";var Ee,cC=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,uC=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`;(function(t){t.accessTime="accessTime",t.accountCircle="accountCircle",t.addCircle="addCircle",t.autoAwesomeMosaic="autoAwesomeMosaic",t.autoAwesomeMotion="autoAwesomeMotion",t.bolt="bolt",t.calendarToday="calendarToday",t.cancel="cancel",t.check="check",t.checkCircle="checkCircle",t.chevronLeft="chevronLeft",t.chevronRight="chevronRight",t.close="close",t.comment="comment",t.contentCopy="contentCopy",t.danger="danger",t.dangerous="dangerous",t.default="default",t.deleteForever="deleteForever",t.description="description",t.dns="dns",t.download="download",t.edit="edit",t.error="error",t.errorOutline="errorOutline",t.exitToApp="exitToApp",t.expandLess="expandLess",t.expandMore="expandMore",t.filterAlt="filterAlt",t.forum="forum",t.help="help",t.home="home",t.info="info",t.manageAccounts="manageAccounts",t.monitorHeart="monitorHeart",t.moreVert="moreVert",t.nightsStay="nightsStay",t.notificationsOff="notificationsOff",t.openInBrowser="openInBrowser",t.openInNew="openInNew",t.place="place",t.search="search",t.severityLow="severityLow",t.severityMedium="severityMedium",t.severityHigh="severityHigh",t.severityCritical="severityCritical",t.success="success",t.upload="upload",t.warning="warning",t.wbSunny="wbSunny",t.widgets="widgets"})(Ee||(Ee={}));var dC=function(t){var n=t.icon,o=t.color,r=t.size,i=t.title,a=t.iconClassName,l=lt(t,["icon","color","size","title","iconClassName"]),c="juno-icon juno-icon-".concat(n," jn-fill-current ").concat(o," ").concat(a),u=Ee[n||"default"];return u===Ee.accessTime?S.createElement(f1,de({width:r,height:r,className:c,alt:"time",title:i||"Time",role:"img"},l)):u===Ee.accountCircle?S.createElement(p1,de({width:r,height:r,className:c,alt:"account",title:i||"Account",role:"img"},l)):u===Ee.addCircle?S.createElement(g1,de({width:r,height:r,className:c,alt:"add",title:i||"Add",role:"img"},l)):u===Ee.autoAwesomeMosaic?S.createElement(h1,de({width:r,height:r,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):u===Ee.autoAwesomeMotion?S.createElement(m1,de({width:r,height:r,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):u===Ee.bolt?S.createElement(b1,de({width:r,height:r,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):u===Ee.calendarToday?S.createElement(v1,de({width:r,height:r,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):u===Ee.cancel?S.createElement(y1,de({width:r,height:r,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):u===Ee.check?S.createElement(w1,de({width:r,height:r,className:c,alt:"check",title:i||"Check",role:"img"},l)):u===Ee.checkCircle?S.createElement(x1,de({width:r,height:r,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):u===Ee.chevronLeft?S.createElement(j1,de({width:r,height:r,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):u===Ee.chevronRight?S.createElement(E1,de({width:r,height:r,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):u===Ee.close?S.createElement(k1,de({width:r,height:r,className:c,alt:"close",title:i||"Close",role:"img"},l)):u===Ee.comment?S.createElement(z1,de({width:r,height:r,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):u===Ee.contentCopy?S.createElement(O1,de({width:r,height:r,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):u===Ee.danger?S.createElement(S1,de({width:r,height:r,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):u===Ee.dangerous?S.createElement(Ga,de({width:r,height:r,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):u===Ee.deleteForever?S.createElement($1,de({width:r,height:r,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):u===Ee.description?S.createElement(P1,de({width:r,height:r,className:c,alt:"description",title:i||"Description",role:"img"},l)):u===Ee.dns?S.createElement(I1,de({width:r,height:r,className:c,alt:"service",title:i||"Service",role:"img"},l)):u===Ee.download?S.createElement(C1,de({width:r,height:r,className:c,alt:"download",title:i||"download",role:"img"},l)):u===Ee.edit?S.createElement(T1,de({width:r,height:r,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):u===Ee.error?S.createElement(Ga,de({width:r,height:r,className:c,alt:"error",title:i||"Error",role:"img"},l)):u===Ee.errorOutline?S.createElement(D1,de({width:r,height:r,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):u===Ee.exitToApp?S.createElement(M1,de({width:r,height:r,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):u===Ee.expandLess?S.createElement(N1,de({width:r,height:r,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):u===Ee.expandMore?S.createElement(R1,de({width:r,height:r,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):u===Ee.filterAlt?S.createElement(_1,de({width:r,height:r,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):u===Ee.forum?S.createElement(L1,de({width:r,height:r,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):u===Ee.help?S.createElement(Eo,de({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):u===Ee.home?S.createElement(F1,de({width:r,height:r,className:c,alt:"home",title:i||"Home",role:"img"},l)):u===Ee.info?S.createElement(A1,de({width:r,height:r,className:c,alt:"info",title:i||"Info",role:"img"},l)):u===Ee.manageAccounts?S.createElement(H1,de({width:r,height:r,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):u===Ee.monitorHeart?S.createElement(B1,de({width:r,height:r,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):u===Ee.moreVert?S.createElement(W1,de({width:r,height:r,className:c,alt:"more",title:i||"More",role:"img"},l)):u===Ee.nightsStay?S.createElement(V1,de({width:r,height:r,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):u===Ee.notificationsOff?S.createElement(q1,de({width:r,height:r,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):u===Ee.openInBrowser?S.createElement(U1,de({width:r,height:r,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):u===Ee.openInNew?S.createElement(Y1,de({width:r,height:r,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):u===Ee.place?S.createElement(K1,de({width:r,height:r,className:c,alt:"location",title:i||"Location",role:"img"},l)):u===Ee.search?S.createElement(Q1,de({width:r,height:r,className:c,alt:"search",title:i||"Search",role:"img"},l)):u===Ee.severityLow?S.createElement(J1,de({width:r,height:r,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):u===Ee.severityMedium?S.createElement(Z1,de({width:r,height:r,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):u===Ee.severityHigh?S.createElement(X1,de({width:r,height:r,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):u===Ee.severityCritical?S.createElement(ew,de({width:r,height:r,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):u===Ee.success?S.createElement(G1,de({width:r,height:r,className:c,alt:"success",title:i||"Success",role:"img"},l)):u===Ee.upload?S.createElement(tw,de({width:r,height:r,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):u===Ee.widgets?S.createElement(ow,de({width:r,height:r,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):u===Ee.warning?S.createElement(nw,de({width:r,height:r,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):u===Ee.wbSunny?S.createElement(rw,de({width:r,height:r,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):u===Ee.default?S.createElement(Eo,de({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement(Eo,de({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l))},no=p.forwardRef(function(t,n){var o=t.icon,r=o===void 0?null:o,i=t.color,a=i===void 0?"":i,l=t.size,c=l===void 0?24:l,u=t.title,d=u===void 0?"":u,f=t.className,g=f===void 0?"":f,b=t.href,h=b===void 0?"":b,m=t.disabled,v=t.onClick,E=lt(t,["icon","color","size","title","className","href","disabled","onClick"]),y=h||v?"":g,k=h||v?{}:E,C=dC(de({icon:r||void 0,color:a,size:c,title:d,iconClassName:y},k)),R=S.createElement("button",de({},E,{type:"button",onClick:function(T){v&&v(T)},className:"juno-icon-button ".concat(uC," ").concat(g),"aria-label":d||r||void 0,disabled:m!==void 0&&m,ref:n}),C),I=S.createElement("a",de({},E,{"aria-label":d||r||void 0,href:h,className:"juno-icon-link ".concat(cC," ").concat(g),ref:n}),C);return h?I:v?R:S.createElement("span",{ref:n},C)});no.displayName="IconTs";p.createContext(void 0);j.string,j.string,j.node;const fC=t=>t==="rounded"?`
    jn-relative
    jn-inline-block
    jn-win-max
   jn-w-auto`:t==="hero"?`
    jn-relative
    jn-inline-block
    jn-win-max
   jn-w-full`:`
    jn-relative
    jn-inline-block
    jn-win-max
   jn-w-auto`,pC=t=>{const n=`
    jn-rounded-full 
    focus:jn-rounded-full
  `;return t==="rounded"?`
    jn-bg-theme-textinput
    jn-text-theme-high
    jn-shadow
    jn-w-full
    focus:jn-outline-none
    focus:jn-ring-2
    focus:jn-ring-theme-focus
    disabled:jn-cursor-not-allowed
    disabled:jn-opacity-50
   ${n} jn-text-base jn-w-auto jn-pl-3 jn-pr-16 jn-py-1`:t==="hero"?`
    jn-bg-theme-textinput
    jn-text-theme-high
    jn-shadow
    jn-w-full
    focus:jn-outline-none
    focus:jn-ring-2
    focus:jn-ring-theme-focus
    disabled:jn-cursor-not-allowed
    disabled:jn-opacity-50
   ${n} jn-text-lg jn-w-full jn-pl-6 jn-pr-20 jn-py-2.5`:`
    jn-bg-theme-textinput
    jn-text-theme-high
    jn-shadow
    jn-w-full
    focus:jn-outline-none
    focus:jn-ring-2
    focus:jn-ring-theme-focus
    disabled:jn-cursor-not-allowed
    disabled:jn-opacity-50
   jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5`},gC=t=>t==="rounded"?"jn-absolute jn-inline-flex jn-right-3 jn-top-1":t==="hero"?"jn-absolute jn-inline-flex jn-right-5":"jn-absolute jn-inline-flex jn-right-3 jn-top-2",hC=t=>t==="rounded"?"jn-mr-2":t==="hero"?"jn-mr-2.5":"jn-mr-2",mC=t=>t==="hero"?"24":"18",lw=t=>{let{value:n="",variant:o="default",disabled:r=!1,clear:i=!0,onSearch:a=void 0,onChange:l=void 0,onClick:c=void 0,onKeyPress:u=void 0,onClear:d=void 0,autoComplete:f="off",placeholder:g="Search…",className:b="",...h}=t;const[m,v]=p.useState(n);return p.useEffect(()=>{v(n)},[n]),S.createElement("div",{className:`juno-search-input-wrapper ${fC(o)} ${b}`,role:"search"},S.createElement(Cf,{gap:"2",alignment:"center"},S.createElement("input",he({type:"search",name:name||"search",placeholder:g,disabled:r,value:m,autoComplete:f,className:`juno-search-input ${pC(o)}`,onChange:E=>{v(E.target.value),l&&l(E)},onKeyPress:E=>{E.key==="Enter"&&a&&a(m),u&&u(E)}},h)),S.createElement("div",{className:`${gC(o)}`},i&&(m!=null&&m.length)?S.createElement(zt,{icon:"close",size:`${mC(o)}`,title:"Clear",className:`${hC(o)}`,onClick:E=>{v(""),d&&d(E)},disabled:r}):null,S.createElement(zt,{icon:"search",title:"Search",onClick:E=>{a&&a(m),c&&c(E)},disabled:r}))))};lw.propTypes={name:j.string,variant:j.oneOf(["rounded","hero","default"]),disabled:j.bool,placeholder:j.string,value:j.string,autoComplete:j.string,clear:j.bool,className:j.string,onSearch:j.func,onClick:j.func,onChange:j.func,onKeyPress:j.func,onClear:j.func};const bC={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"};S.createContext(bC);j.bool;j.string;j.oneOfType([j.string,j.number]);j.string,j.any;j.oneOfType([j.string,j.number,j.bool]),j.any,j.number;j.oneOfType([j.object,j.array]).isRequired,j.object,j.bool,j.bool,j.oneOfType([j.shape({base00:j.string,base01:j.string,base02:j.string,base03:j.string,base04:j.string,base05:j.string,base06:j.string,base07:j.string,base08:j.string,base09:j.string,base0A:j.string,base0B:j.string,base0C:j.string,base0D:j.string,base0E:j.string,base0F:j.string}),j.oneOf(["dark","light"])]),j.oneOfType([j.number,j.bool]),j.oneOfType([j.bool,j.number]),j.number,j.string;j.oneOfType([j.string,j.object]),j.oneOfType([j.node,j.object]),j.string,j.bool,j.oneOf(["auto","small","medium","large"]),j.bool,j.string,j.string;var vC=Object.defineProperty,yC=(t,n,o)=>n in t?vC(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Os=(t,n,o)=>(yC(t,typeof n=="symbol"?n:n+"",o),o);let wC=class{constructor(){Os(this,"current",this.detect()),Os(this,"handoffState","pending"),Os(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},Zn=new wC,Qe=(t,n)=>{Zn.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)};function yn(t){let n=p.useRef(t);return Qe(()=>{n.current=t},[t]),n}let pe=function(t){let n=yn(t);return S.useCallback(function(){return n.current(...arguments)},[n])};function sw(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(n=>setTimeout(()=>{throw n}))}function Bt(){let t=[],n={addEventListener(o,r,i,a){return o.addEventListener(r,i,a),n.add(()=>o.removeEventListener(r,i,a))},requestAnimationFrame(){let o=requestAnimationFrame(...arguments);return n.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(){let o=setTimeout(...arguments);return n.add(()=>clearTimeout(o))},microTask(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];let a={current:!0};return sw(()=>{a.current&&r[0]()}),n.add(()=>{a.current=!1})},style(o,r,i){let a=o.style.getPropertyValue(r);return Object.assign(o.style,{[r]:i}),this.add(()=>{Object.assign(o.style,{[r]:a})})},group(o){let r=Bt();return o(r),this.add(()=>r.dispose())},add(o){return t.push(o),()=>{let r=t.indexOf(o);if(0<=r)for(let i of t.splice(r,1))i()}},dispose(){for(let o of t.splice(0))o()}};return n}function En(){let[t]=p.useState(Bt);return p.useEffect(()=>()=>t.dispose(),[t]),t}function xC(){let t=typeof document>"u";return"useSyncExternalStore"in jr&&(n=>n.useSyncExternalStore)(jr)(()=>()=>{},()=>!1,()=>!t)}function Rl(){let t=xC(),[n,o]=p.useState(Zn.isHandoffComplete);return n&&Zn.isHandoffComplete===!1&&o(!1),p.useEffect(()=>{n!==!0&&o(!0)},[n]),p.useEffect(()=>Zn.handoff(),[]),!t&&n}var Hh;let un=(Hh=S.useId)==null?function(){let t=Rl(),[n,o]=S.useState(t?()=>Zn.nextId():null);return Qe(()=>{n===null&&o(Zn.nextId())},[n]),n==null?void 0:""+n}:Hh;function ot(t,n){if(t in n){let l=n[t];for(var o=arguments.length,r=Array(2<o?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];return typeof l=="function"?l(...r):l}let a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ot),a}function Ki(t){return Zn.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let Su=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Cu=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Cu||{}),jC=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(jC||{}),EC=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(EC||{});function cw(){var t=Number.MAX_SAFE_INTEGER;let n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.body;return n==null?[]:Array.from(n.querySelectorAll(Su)).sort((o,r)=>Math.sign((o.tabIndex||t)-(r.tabIndex||t)))}var _l=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(_l||{});function Ll(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var o;return t!==((o=Ki(t))==null?void 0:o.body)&&ot(n,{0(){return t.matches(Su)},1(){for(let r=t;r!==null;){if(r.matches(Su))return!0;r=r.parentElement}return!1}})}function uw(t){let n=Ki(t);Bt().nextFrame(()=>{n&&!Ll(n.activeElement,0)&&OC(t)})}var kC=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(kC||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function OC(t){t==null||t.focus({preventScroll:!0})}let SC="textarea,input";function CC(t){var n,o;return(o=(n=t==null?void 0:t.matches)==null?void 0:n.call(t,SC))!=null&&o}function Fl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:o=>o;return t.slice().sort((o,r)=>{let i=n(o),a=n(r);if(i===null||a===null)return 0;let l=i.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function $C(t,n){return PC(cw(),n,{relativeTo:t})}function PC(t,n){let{sorted:o=!0,relativeTo:r=null,skipElements:i=[]}=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},a=Array.isArray(t)?0<t.length?t[0].ownerDocument:document:t.ownerDocument,l=Array.isArray(t)?o?Fl(t):t:cw(t);0<i.length&&1<l.length&&(l=l.filter(h=>!i.includes(h))),r=r??a.activeElement;let c,u=(()=>{if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{var h=Math.max;if(1&n)return 0;if(2&n)return h(0,l.indexOf(r))-1;if(4&n)return h(0,l.indexOf(r))+1;if(8&n)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&n?{preventScroll:!0}:{},g=0,b=l.length;do{if(g>=b||0>=g+b)return 0;let h=d+g;if(16&n)h=(h+b)%b;else{if(0>h)return 3;if(h>=b)return 1}c=l[h],c==null||c.focus(f),g+=u}while(c!==a.activeElement);return 6&n&&CC(c)&&c.select(),2}function IC(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&0<window.navigator.maxTouchPoints}function TC(){return/Android/gi.test(window.navigator.userAgent)}function dw(){return IC()||TC()}function pa(t,n,o){let r=yn(n);p.useEffect(()=>{function i(a){r.current(a)}return document.addEventListener(t,i,o),()=>document.removeEventListener(t,i,o)},[t,o])}function DC(t,n,o){let r=yn(n);p.useEffect(()=>{function i(a){r.current(a)}return window.addEventListener(t,i,o),()=>window.removeEventListener(t,i,o)},[t,o])}function Pf(t,n){function o(l,c){if(i.current&&!l.defaultPrevented){let u=c(l);if(u!==null&&u.getRootNode().contains(u)&&u.isConnected){let d=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t);for(let f of d){if(f===null)continue;let g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(u)||l.composed&&l.composedPath().includes(g))return}return!Ll(u,_l.Loose)&&u.tabIndex!==-1&&l.preventDefault(),n(l,u)}}}let r=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=r})},[r]);let a=p.useRef(null);pa("pointerdown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),pa("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),pa("click",l=>{dw()||a.current&&(o(l,()=>a.current),a.current=null)},!0),pa("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),DC("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Al(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return p.useMemo(()=>Ki(...n),[...n])}function Bh(t){var n;if(t.type)return t.type;let o=(n=t.as)==null?"button":n;if(typeof o=="string"&&o.toLowerCase()==="button")return"button"}function If(t,n){let[o,r]=p.useState(()=>Bh(t));return Qe(()=>{r(Bh(t))},[t.type,t.as]),Qe(()=>{o||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&r("button")},[o,n]),o}let fw=Symbol();function MC(t){let n=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return Object.assign(t,{[fw]:n})}function jt(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];let r=p.useRef(n);p.useEffect(()=>{r.current=n},[n]);let i=pe(a=>{for(let l of r.current)l!=null&&(typeof l=="function"?l(a):l.current=a)});return n.every(a=>a==null||(a==null?void 0:a[fw]))?void 0:i}function Wh(t){return[t.screenX,t.screenY]}function Tf(){let t=p.useRef([-1,-1]);return{wasMoved(n){let o=Wh(n);return(t.current[0]!==o[0]||t.current[1]!==o[1])&&(t.current=o,!0)},update(n){t.current=Wh(n)}}}function Qa(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return Array.from(new Set(n.flatMap(r=>typeof r=="string"?r.split(" "):[]))).filter(Boolean).join(" ")}var Er=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Er||{}),yr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(yr||{});function mt(t){let{ourProps:n,theirProps:o,slot:r,defaultTag:i,features:a,visible:l=!0,name:c,mergeRefs:u}=t;u=u??NC;let d=pw(o,n);if(l)return ga(d,r,i,c,u);let f=a??0;if(2&f){let{static:g=!1,...b}=d;if(g)return ga(b,r,i,c,u)}if(1&f){let{unmount:g=!0,...b}=d;return ot(g?0:1,{0(){return null},1(){return ga({...b,hidden:!0,style:{display:"none"}},r,i,c,u)}})}return ga(d,r,i,c,u)}function ga(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length?arguments[2]:void 0,r=3<arguments.length?arguments[3]:void 0,i=4<arguments.length?arguments[4]:void 0,{as:a=o,children:l,refName:c="ref",...u}=Ss(t,["unmount","static"]),d=t.ref===void 0?{}:{[c]:t.ref},f=typeof l=="function"?l(n):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(n));let g={};if(n){let b=!1,h=[];for(let[m,v]of Object.entries(n))typeof v=="boolean"&&(b=!0),v===!0&&h.push(m);b&&(g["data-headlessui-state"]=h.join(" "))}if(a===p.Fragment&&0<Object.keys(Ja(u)).length){if(!p.isValidElement(f)||Array.isArray(f)&&1<f.length)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let b=f.props,h=typeof(b==null?void 0:b.className)=="function"?function(){return Qa(b==null?void 0:b.className(...arguments),u.className)}:Qa(b==null?void 0:b.className,u.className),m=h?{className:h}:{};return p.cloneElement(f,Object.assign({},pw(f.props,Ja(Ss(u,["ref"]))),g,d,{ref:i(f.ref,d.ref)},m))}return p.createElement(a,Object.assign({},Ss(u,["ref"]),a!==p.Fragment&&d,a!==p.Fragment&&g),f)}function NC(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.every(r=>r==null)?void 0:r=>{for(let i of n)i!=null&&(typeof i=="function"?i(r):i.current=r)}}function pw(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if(n.length===0)return{};if(n.length===1)return n[0];let r={},i={};for(let a of n)for(let l in a)l.startsWith("on")&&typeof a[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(a[l])):r[l]=a[l];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(i).map(a=>[a,void 0])));for(let a in i)Object.assign(r,{[a](l){let c=i[a];for(var u=arguments.length,d=Array(1<u?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];for(let g of c){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;g(l,...d)}}});return r}function pt(t){var n;return Object.assign(p.forwardRef(t),{displayName:(n=t.displayName)==null?t.name:n})}function Ja(t){let n=Object.assign({},t);for(let o in n)n[o]===void 0&&delete n[o];return n}function Ss(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],o=Object.assign({},t);for(let r of n)r in o&&delete o[r];return o}let Df=p.createContext(null);Df.displayName="OpenClosedContext";var dt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(dt||{});function Gi(){return p.useContext(Df)}function zl(t){let{value:n,children:o}=t;return S.createElement(Df.Provider,{value:n},o)}function Mf(t){let n=t.parentElement,o=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(o=n),n=n.parentElement;let r=(n==null?void 0:n.getAttribute("disabled"))==="";return!(r&&RC(o))&&r}function RC(t){if(!t)return!1;for(let n=t.previousElementSibling;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}function _C(t){throw new Error("Unexpected object: "+t)}var Ne=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Ne||{});function Za(t,n){let o=n.resolveItems();if(0>=o.length)return null;let r=n.resolveActiveIndex(),i=r??-1;switch(t.focus){case 0:{for(let a=0;a<o.length;++a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 1:{for(let a=i-1;0<=a;--a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 2:{for(let a=i+1;a<o.length;++a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 3:{for(let a=o.length-1;0<=a;--a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 4:{for(let a=0;a<o.length;++a)if(n.resolveId(o[a],a,o)===t.id)return a;return r}case 5:return null;default:_C(t)}}var Ie=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Ie||{});const gw=["top","right","bottom","left"],Vh=["start","end"],qh=gw.reduce((t,n)=>t.concat(n,n+"-"+Vh[0],n+"-"+Vh[1]),[]),Ti=Math.min,zr=Math.max,LC={left:"right",right:"left",bottom:"top",top:"bottom"},FC={start:"end",end:"start"};function $u(t,n,o){return zr(t,Ti(n,o))}function Pr(t,n){return typeof t=="function"?t(n):t}function Hn(t){return t.split("-")[0]}function wn(t){return t.split("-")[1]}function hw(t){return t==="x"?"y":"x"}function Nf(t){return t==="y"?"height":"width"}function ro(t){return["top","bottom"].includes(Hn(t))?"y":"x"}function Rf(t){return hw(ro(t))}function mw(t,n,o){o===void 0&&(o=!1);const r=wn(t),i=Rf(t),a=Nf(i);let l=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=el(l)),[l,el(l)]}function AC(t){const n=el(t);return[Xa(t),n,Xa(n)]}function Xa(t){return t.replace(/start|end/g,n=>FC[n])}function zC(t,n,o){const r=["left","right"],i=["right","left"];return t==="top"||t==="bottom"?o?n?i:r:n?r:i:t==="left"||t==="right"?n?["top","bottom"]:["bottom","top"]:[]}function HC(t,n,o,r){const i=wn(t);let a=zC(Hn(t),o==="start",r);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(Xa)))),a}function el(t){return t.replace(/left|right|bottom|top/g,n=>LC[n])}function BC(t){return{top:0,right:0,bottom:0,left:0,...t}}function bw(t){return typeof t=="number"?{top:t,right:t,bottom:t,left:t}:BC(t)}function tl(t){const{x:n,y:o,width:r,height:i}=t;return{width:r,height:i,top:o,left:n,right:n+r,bottom:o+i,x:n,y:o}}function Uh(t,n,o){let{reference:r,floating:i}=t;const a=ro(n),l=Rf(n),c=Nf(l),u=Hn(n),d=a==="y",f=r.x+r.width/2-i.width/2,g=r.y+r.height/2-i.height/2,b=r[c]/2-i[c]/2;let h;switch(h=u==="top"?{x:f,y:r.y-i.height}:u==="bottom"?{x:f,y:r.y+r.height}:u==="right"?{x:r.x+r.width,y:g}:u==="left"?{x:r.x-i.width,y:g}:{x:r.x,y:r.y},wn(n)){case"start":h[l]-=b*(o&&d?-1:1);break;case"end":h[l]+=b*(o&&d?-1:1)}return h}const WC=async(t,n,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(n));let d=await l.getElementRects({reference:t,floating:n,strategy:i}),{x:f,y:g}=Uh(d,r,u),b=r,h={},m=0;for(let v=0;v<c.length;v++){const{name:E,fn:y}=c[v],{x:k,y:C,data:R,reset:I}=await y({x:f,y:g,initialPlacement:r,placement:b,strategy:i,middlewareData:h,rects:d,platform:l,elements:{reference:t,floating:n}});f=k??f,g=C??g,h={...h,[E]:{...h[E],...R}},I&&50>=m&&(m++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(d=I.rects===!0?await l.getElementRects({reference:t,floating:n,strategy:i}):I.rects),{x:f,y:g}=Uh(d,b,u)),v=-1)}return{x:f,y:g,placement:b,strategy:i,middlewareData:h}};async function Ko(t,n){var o;n===void 0&&(n={});const{x:r,y:i,platform:a,rects:l,elements:c,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:b=!1,padding:h=0}=Pr(n,t),m=bw(h),v=g==="floating"?"reference":"floating",E=c[b?v:g],y=tl(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(E)))==null||o?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:u})),k=g==="floating"?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),R=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},I=tl(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:C,strategy:u}):k);return{top:(y.top-I.top+m.top)/R.y,bottom:(I.bottom-y.bottom+m.bottom)/R.y,left:(y.left-I.left+m.left)/R.x,right:(I.right-y.right+m.right)/R.x}}const VC=t=>({name:"arrow",options:t,async fn(n){const{x:o,y:r,placement:i,rects:a,platform:l,elements:c,middlewareData:u}=n,{element:d,padding:f=0}=Pr(t,n)||{};if(d==null)return{};const g=bw(f),b={x:o,y:r},h=Rf(i),m=Nf(h),v=await l.getDimensions(d),E=h==="y",y=E?"top":"left",k=E?"bottom":"right",C=E?"clientHeight":"clientWidth",R=a.reference[m]+a.reference[h]-b[h]-a.floating[m],I=b[h]-a.reference[h],T=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let F=T?T[C]:0;F&&await(l.isElement==null?void 0:l.isElement(T))||(F=c.floating[C]||a.floating[m]);const _=F/2-v[m]/2-1,J=Ti(g[y],_),B=Ti(g[k],_),W=J,H=F-v[m]-B,D=F/2-v[m]/2+(R/2-I/2),$=$u(W,D,H),A=!u.arrow&&wn(i)!=null&&D!==$&&0>a.reference[m]/2-(D<W?J:B)-v[m]/2,z=A?D<W?D-W:D-H:0;return{[h]:b[h]+z,data:{[h]:$,centerOffset:D-$-z,...A&&{alignmentOffset:z}},reset:A}}});function qC(t,n,o){return(t?[...o.filter(i=>wn(i)===t),...o.filter(i=>wn(i)!==t)]:o.filter(i=>Hn(i)===i)).filter(i=>!t||wn(i)===t||!!n&&Xa(i)!==i)}const UC=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(n){var o,r,i;const{rects:a,middlewareData:l,placement:c,platform:u,elements:d}=n,{crossAxis:f=!1,alignment:g,allowedPlacements:b=qh,autoAlignment:h=!0,...m}=Pr(t,n),v=g!==void 0||b===qh?qC(g||null,h,b):b,E=await Ko(n,m),y=((o=l.autoPlacement)==null?void 0:o.index)||0,k=v[y];if(k==null)return{};const C=mw(k,a,await(u.isRTL==null?void 0:u.isRTL(d.floating)));if(c!==k)return{reset:{placement:v[0]}};const R=[E[Hn(k)],E[C[0]],E[C[1]]],I=[...((r=l.autoPlacement)==null?void 0:r.overflows)||[],{placement:k,overflows:R}],T=v[y+1];if(T)return{data:{index:y+1,overflows:I},reset:{placement:T}};const F=I.map(B=>{const W=wn(B.placement);return[B.placement,W&&f?B.overflows.slice(0,2).reduce((H,D)=>H+D,0):B.overflows[0],B.overflows]}).sort((B,W)=>B[1]-W[1]),_=F.filter(B=>B[2].slice(0,wn(B[0])?2:3).every(W=>0>=W)),J=((i=_[0])==null?void 0:i[0])||F[0][0];return J===c?{}:{data:{index:y+1,overflows:I},reset:{placement:J}}}}},YC=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var o,r;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:u,elements:d}=n,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...E}=Pr(t,n);if((o=a.arrow)!=null&&o.alignmentOffset)return{};const y=Hn(i),k=ro(c),C=Hn(c)===c,R=await(u.isRTL==null?void 0:u.isRTL(d.floating)),I=b||(C||!v?[el(c)]:AC(c)),T=m!=="none";!b&&T&&I.push(...HC(c,v,m,R));const F=[c,...I],_=await Ko(n,E),J=[];let B=((r=a.flip)==null?void 0:r.overflows)||[];if(f&&J.push(_[y]),g){const $=mw(i,l,R);J.push(_[$[0]],_[$[1]])}if(B=[...B,{placement:i,overflows:J}],!J.every($=>0>=$)){var W,H;const $=(((W=a.flip)==null?void 0:W.index)||0)+1,A=F[$];if(A)return{data:{index:$,overflows:B},reset:{placement:A}};let z=(H=B.filter(V=>0>=V.overflows[0]).sort((V,Q)=>V.overflows[1]-Q.overflows[1])[0])==null?void 0:H.placement;if(!z)switch(h){case"bestFit":{var D;const V=(D=B.filter(Q=>{if(T){const X=ro(Q.placement);return X===k||X==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(X=>0<X).reduce((X,M)=>X+M,0)]).sort((Q,X)=>Q[1]-X[1])[0])==null?void 0:D[0];V&&(z=V);break}case"initialPlacement":z=c}if(i!==z)return{reset:{placement:z}}}return{}}}};function Yh(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function Kh(t){return gw.some(n=>0<=t[n])}const KC=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:o}=n,{strategy:r="referenceHidden",...i}=Pr(t,n);switch(r){case"referenceHidden":{const a=await Ko(n,{...i,elementContext:"reference"}),l=Yh(a,o.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Kh(l)}}}case"escaped":{const a=await Ko(n,{...i,altBoundary:!0}),l=Yh(a,o.floating);return{data:{escapedOffsets:l,escaped:Kh(l)}}}default:return{}}}}};async function GC(t,n){const{placement:o,platform:r,elements:i}=t,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),l=Hn(o),c=wn(o),u=ro(o)==="y",d=["left","top"].includes(l)?-1:1,f=a&&u?-1:1,g=Pr(n,t);let{mainAxis:b,crossAxis:h,alignmentAxis:m}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof m=="number"&&(h=c==="end"?-1*m:m),u?{x:h*f,y:b*d}:{x:b*d,y:h*f}}const QC=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var o,r;const{x:i,y:a,placement:l,middlewareData:c}=n,u=await GC(n,t);return l===((o=c.offset)==null?void 0:o.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:l}}}}},JC=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:o,y:r,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:E=>{let{x:y,y:k}=E;return{x:y,y:k}}},...u}=Pr(t,n),d={x:o,y:r},f=await Ko(n,u),g=ro(Hn(i)),b=hw(g);let h=d[b],m=d[g];if(a){const E=b==="y"?"top":"left",y=b==="y"?"bottom":"right",k=h+f[E],C=h-f[y];h=$u(k,h,C)}if(l){const E=g==="y"?"top":"left",y=g==="y"?"bottom":"right",k=m+f[E],C=m-f[y];m=$u(k,m,C)}const v=c.fn({...n,[b]:h,[g]:m});return{...v,data:{x:v.x-o,y:v.y-r,enabled:{[b]:a,[g]:l}}}}}},ZC=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(n){var o,r;const{placement:i,rects:a,platform:l,elements:c}=n,{apply:u=()=>{},...d}=Pr(t,n),f=await Ko(n,d),g=Hn(i),b=wn(i),h=ro(i)==="y",{width:m,height:v}=a.floating;let E,y;g==="top"||g==="bottom"?(E=g,y=b===(await(l.isRTL==null?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(y=g,E=b==="end"?"top":"bottom");const k=v-f.top-f.bottom,C=m-f.left-f.right,R=Ti(v-f[E],k),I=Ti(m-f[y],C),T=!n.middlewareData.shift;let F=R,_=I;if((o=n.middlewareData.shift)!=null&&o.enabled.x&&(_=C),(r=n.middlewareData.shift)!=null&&r.enabled.y&&(F=k),T&&!b){const B=zr(f.left,0),W=zr(f.right,0),H=zr(f.top,0),D=zr(f.bottom,0);h?_=m-2*(B!==0||W!==0?B+W:zr(f.left,f.right)):F=v-2*(H!==0||D!==0?H+D:zr(f.top,f.bottom))}await u({...n,availableWidth:_,availableHeight:F});const J=await l.getDimensions(c.floating);return m!==J.width||v!==J.height?{reset:{rects:!0}}:{}}}},Pu=Math.min,ko=Math.max,nl=Math.round,ha=Math.floor,kr=t=>({x:t,y:t});function Hl(){return typeof window<"u"}function oi(t){return vw(t)?(t.nodeName||"").toLowerCase():"#document"}function nn(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function Vn(t){var n;return(n=(vw(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function vw(t){return!!Hl()&&(t instanceof Node||t instanceof nn(t).Node)}function kn(t){return!!Hl()&&(t instanceof Element||t instanceof nn(t).Element)}function Bn(t){return!!Hl()&&(t instanceof HTMLElement||t instanceof nn(t).HTMLElement)}function Gh(t){return!!(Hl()&&typeof ShadowRoot<"u")&&(t instanceof ShadowRoot||t instanceof nn(t).ShadowRoot)}function Qi(t){const{overflow:n,overflowX:o,overflowY:r,display:i}=On(t);return/auto|scroll|overlay|hidden|clip/.test(n+r+o)&&!["inline","contents"].includes(i)}function XC(t){return["table","td","th"].includes(oi(t))}function Bl(t){return[":popover-open",":modal"].some(n=>{try{return t.matches(n)}catch{return!1}})}function _f(t){const n=Lf(),o=kn(t)?On(t):t;return o.transform!=="none"||o.perspective!=="none"||!!o.containerType&&o.containerType!=="normal"||!n&&!!o.backdropFilter&&o.backdropFilter!=="none"||!n&&!!o.filter&&o.filter!=="none"||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function e4(t){for(let n=Or(t);Bn(n)&&!Go(n);){if(_f(n))return n;if(Bl(n))return null;n=Or(n)}return null}function Lf(){return!!(typeof CSS<"u"&&CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Go(t){return["html","body","#document"].includes(oi(t))}function On(t){return nn(t).getComputedStyle(t)}function Wl(t){return kn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Or(t){if(oi(t)==="html")return t;const n=t.assignedSlot||t.parentNode||Gh(t)&&t.host||Vn(t);return Gh(n)?n.host:n}function yw(t){const n=Or(t);return Go(n)?t.ownerDocument?t.ownerDocument.body:t.body:Bn(n)&&Qi(n)?n:yw(n)}function xr(t,n,o){var r;n===void 0&&(n=[]),o===void 0&&(o=!0);const i=yw(t),a=i===((r=t.ownerDocument)==null?void 0:r.body),l=nn(i);if(a){const c=Iu(l);return n.concat(l,l.visualViewport||[],Qi(i)?i:[],c&&o?xr(c):[])}return n.concat(i,xr(i,[],o))}function Iu(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ww(t){const n=On(t);let o=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const i=Bn(t),a=i?t.offsetWidth:o,l=i?t.offsetHeight:r,c=nl(o)!==a||nl(r)!==l;return c&&(o=a,r=l),{width:o,height:r,$:c}}function Ff(t){return kn(t)?t:t.contextElement}function Oo(t){var n=Number.isFinite;const o=Ff(t);if(!Bn(o))return kr(1);const r=o.getBoundingClientRect(),{width:i,height:a,$:l}=ww(o);let c=(l?nl(r.width):r.width)/i,u=(l?nl(r.height):r.height)/a;return c&&n(c)||(c=1),u&&n(u)||(u=1),{x:c,y:u}}const t4=kr(0);function xw(t){const n=nn(t);return Lf()&&n.visualViewport?{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}:t4}function n4(t,n,o){return n===void 0&&(n=!1),o&&(!n||o===nn(t))&&n}function oo(t,n,o,r){n===void 0&&(n=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),a=Ff(t);let l=kr(1);n&&(r?kn(r)&&(l=Oo(r)):l=Oo(t));const c=n4(a,o,r)?xw(a):kr(0);let u=(i.left+c.x)/l.x,d=(i.top+c.y)/l.y,f=i.width/l.x,g=i.height/l.y;if(a){const b=nn(a),h=r&&kn(r)?nn(r):r;let m=b,v=Iu(m);for(;v&&r&&h!==m;){const E=Oo(v),y=v.getBoundingClientRect(),k=On(v),C=y.left+(v.clientLeft+parseFloat(k.paddingLeft))*E.x,R=y.top+(v.clientTop+parseFloat(k.paddingTop))*E.y;u*=E.x,d*=E.y,f*=E.x,g*=E.y,u+=C,d+=R,m=nn(v),v=Iu(m)}}return tl({width:f,height:g,x:u,y:d})}function r4(t){let{elements:n,rect:o,offsetParent:r,strategy:i}=t;const a=i==="fixed",l=Vn(r),c=!!n&&Bl(n.floating);if(r===l||c&&a)return o;let u={scrollLeft:0,scrollTop:0},d=kr(1);const f=kr(0),g=Bn(r);if((g||!g&&!a)&&((oi(r)!=="body"||Qi(l))&&(u=Wl(r)),Bn(r))){const b=oo(r);d=Oo(r),f.x=b.x+r.clientLeft,f.y=b.y+r.clientTop}return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-u.scrollLeft*d.x+f.x,y:o.y*d.y-u.scrollTop*d.y+f.y}}function o4(t){return Array.from(t.getClientRects())}function Tu(t,n){const o=Wl(t).scrollLeft;return n?n.left+o:oo(Vn(t)).left+o}function i4(t){const n=Vn(t),o=Wl(t),r=t.ownerDocument.body,i=ko(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),a=ko(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let l=-o.scrollLeft+Tu(t);const c=-o.scrollTop;return On(r).direction==="rtl"&&(l+=ko(n.clientWidth,r.clientWidth)-i),{width:i,height:a,x:l,y:c}}function a4(t,n){const o=nn(t),r=Vn(t),i=o.visualViewport;let a=r.clientWidth,l=r.clientHeight,c=0,u=0;if(i){a=i.width,l=i.height;const d=Lf();(!d||d&&n==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:l,x:c,y:u}}function l4(t,n){const o=oo(t,!0,n==="fixed"),r=o.top+t.clientTop,i=o.left+t.clientLeft,a=Bn(t)?Oo(t):kr(1),l=t.clientWidth*a.x,c=t.clientHeight*a.y,u=i*a.x,d=r*a.y;return{width:l,height:c,x:u,y:d}}function Qh(t,n,o){let r;if(n==="viewport")r=a4(t,o);else if(n==="document")r=i4(Vn(t));else if(kn(n))r=l4(n,o);else{const i=xw(t);r={...n,x:n.x-i.x,y:n.y-i.y}}return tl(r)}function jw(t,n){const o=Or(t);return o!==n&&kn(o)&&!Go(o)&&(On(o).position==="fixed"||jw(o,n))}function s4(t,n){const o=n.get(t);if(o)return o;let r=xr(t,[],!1).filter(l=>kn(l)&&oi(l)!=="body"),i=null;const a=On(t).position==="fixed";for(let l=a?Or(t):t;kn(l)&&!Go(l);){const c=On(l),u=_f(l);u||c.position!=="fixed"||(i=null),(a?!u&&!i:!u&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Qi(l)&&!u&&jw(t,l))?r=r.filter(f=>f!==l):i=c,l=Or(l)}return n.set(t,r),r}function c4(t){let{element:n,boundary:o,rootBoundary:r,strategy:i}=t;const a=o==="clippingAncestors"?Bl(n)?[]:s4(n,this._c):[].concat(o),l=[...a,r],c=l[0],u=l.reduce((d,f)=>{const g=Qh(n,f,i);return d.top=ko(g.top,d.top),d.right=Pu(g.right,d.right),d.bottom=Pu(g.bottom,d.bottom),d.left=ko(g.left,d.left),d},Qh(n,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function u4(t){const{width:n,height:o}=ww(t);return{width:n,height:o}}function d4(t,n,o){const r=Bn(n),i=Vn(n),a=o==="fixed",l=oo(t,!0,a,n);let c={scrollLeft:0,scrollTop:0};const u=kr(0);if(r||!r&&!a)if((oi(n)!=="body"||Qi(i))&&(c=Wl(n)),r){const h=oo(n,!0,a,n);u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}else i&&(u.x=Tu(i));let d=0,f=0;if(i&&!r&&!a){const h=i.getBoundingClientRect();f=h.top+c.scrollTop,d=h.left+c.scrollLeft-Tu(i,h)}const g=l.left+c.scrollLeft-u.x-d,b=l.top+c.scrollTop-u.y-f;return{x:g,y:b,width:l.width,height:l.height}}function Cs(t){return On(t).position==="static"}function Jh(t,n){if(!Bn(t)||On(t).position==="fixed")return null;if(n)return n(t);let o=t.offsetParent;return Vn(t)===o&&(o=o.ownerDocument.body),o}function Ew(t,n){const o=nn(t);if(Bl(t))return o;if(!Bn(t)){for(let i=Or(t);i&&!Go(i);){if(kn(i)&&!Cs(i))return i;i=Or(i)}return o}let r=Jh(t,n);for(;r&&XC(r)&&Cs(r);)r=Jh(r,n);return r&&Go(r)&&Cs(r)&&!_f(r)?o:r||e4(t)||o}const f4=async function(t){const n=this.getOffsetParent||Ew,o=this.getDimensions,r=await o(t.floating);return{reference:d4(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function p4(t){return On(t).direction==="rtl"}const g4={convertOffsetParentRelativeRectToViewportRelativeRect:r4,getDocumentElement:Vn,getClippingRect:c4,getOffsetParent:Ew,getElementRects:f4,getClientRects:o4,getDimensions:u4,getScale:Oo,isElement:kn,isRTL:p4};function h4(t,n){function o(){var c;clearTimeout(i),(c=a)==null||c.disconnect(),a=null}function r(c,u){function d(R){const I=R[0].intersectionRatio;if(I!==u){if(!C)return r();I?r(!1,I):i=setTimeout(()=>{r(!1,1e-7)},1e3)}C=!1}c===void 0&&(c=!1),u===void 0&&(u=1),o();const{left:f,top:g,width:b,height:h}=t.getBoundingClientRect();if(c||n(),!b||!h)return;const m=ha(g),v=ha(l.clientWidth-(f+b)),E=ha(l.clientHeight-(g+h)),y=ha(f),k={rootMargin:-m+"px "+-v+"px "+-E+"px "+-y+"px",threshold:ko(0,Pu(1,u))||1};let C=!0;try{a=new IntersectionObserver(d,{...k,root:l.ownerDocument})}catch{a=new IntersectionObserver(d,k)}a.observe(t)}let i,a=null;const l=Vn(t);return r(!0),o}function kw(t,n,o,r){function i(){const y=oo(t);E&&(y.x!==E.x||y.y!==E.y||y.width!==E.width||y.height!==E.height)&&o(),E=y,v=requestAnimationFrame(i)}r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,f=Ff(t),g=a||l?[...f?xr(f):[],...xr(n)]:[];g.forEach(y=>{a&&y.addEventListener("scroll",o,{passive:!0}),l&&y.addEventListener("resize",o)});const b=f&&u?h4(f,o):null;let h=-1,m=null;c&&(m=new ResizeObserver(y=>{let[k]=y;k&&k.target===f&&m&&(m.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(n)})),o()}),f&&!d&&m.observe(f),m.observe(n));let v,E=d?oo(t):null;return d&&i(),o(),()=>{var y;g.forEach(k=>{a&&k.removeEventListener("scroll",o),l&&k.removeEventListener("resize",o)}),b==null||b(),(y=m)==null||y.disconnect(),m=null,d&&cancelAnimationFrame(v)}}const Ow=QC,Sw=UC,Cw=JC,$w=YC,m4=ZC,b4=KC,Zh=VC,Pw=(t,n,o)=>{const r=new Map,i={platform:g4,...o},a={...i.platform,_c:r};return WC(t,n,{...i,platform:a})};var La=typeof document>"u"?p.useEffect:p.useLayoutEffect;function rl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let o,r,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(o=t.length,o!==n.length)return!1;for(r=o;r--!=0;)if(!rl(t[r],n[r]))return!1;return!0}if(i=Object.keys(t),o=i.length,o!==Object.keys(n).length)return!1;for(r=o;r--!=0;)if(!{}.hasOwnProperty.call(n,i[r]))return!1;for(r=o;r--!=0;){const a=i[r];if(!(a==="_owner"&&t.$$typeof)&&!rl(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function Iw(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Xh(t,n){const o=Iw(t);return Math.round(n*o)/o}function $s(t){const n=p.useRef(t);return La(()=>{n.current=t}),n}function v4(t){t===void 0&&(t={});const{placement:n="bottom",strategy:o="absolute",middleware:r=[],platform:i,elements:{reference:a,floating:l}={},transform:c=!0,whileElementsMounted:u,open:d}=t,[f,g]=p.useState({x:0,y:0,strategy:o,placement:n,middlewareData:{},isPositioned:!1}),[b,h]=p.useState(r);rl(b,r)||h(r);const[m,v]=p.useState(null),[E,y]=p.useState(null),k=p.useCallback(V=>{V!==T.current&&(T.current=V,v(V))},[]),C=p.useCallback(V=>{V!==F.current&&(F.current=V,y(V))},[]),R=a||m,I=l||E,T=p.useRef(null),F=p.useRef(null),_=p.useRef(f),J=$s(u),B=$s(i),W=$s(d),H=p.useCallback(()=>{if(T.current&&F.current){const V={placement:n,strategy:o,middleware:b};B.current&&(V.platform=B.current),Pw(T.current,F.current,V).then(Q=>{const X={...Q,isPositioned:W.current!==!1};D.current&&!rl(_.current,X)&&(_.current=X,rr.flushSync(()=>{g(X)}))})}},[b,n,o,B,W]);La(()=>{d===!1&&_.current.isPositioned&&(_.current.isPositioned=!1,g(V=>({...V,isPositioned:!1})))},[d]);const D=p.useRef(!1);La(()=>(D.current=!0,()=>{D.current=!1}),[]),La(()=>{if(R&&(T.current=R),I&&(F.current=I),R&&I){if(J.current)return J.current(R,I,H);H()}},[R,I,H,J,u!=null]);const $=p.useMemo(()=>({reference:T,floating:F,setReference:k,setFloating:C}),[k,C]),A=p.useMemo(()=>({reference:R,floating:I}),[R,I]),z=p.useMemo(()=>{const V={position:o,left:0,top:0};if(!A.floating)return V;const Q=Xh(A.floating,f.x),X=Xh(A.floating,f.y);return c?{...V,transform:"translate("+Q+"px, "+X+"px)",...1.5<=Iw(A.floating)&&{willChange:"transform"}}:{position:o,left:Q,top:X}},[o,c,A.floating,f.x,f.y]);return p.useMemo(()=>({...f,update:H,refs:$,elements:A,floatingStyles:z}),[f,H,$,A,z])}const Tw=(t,n)=>({...Ow(t),options:[t,n]}),Dw=(t,n)=>({...Cw(t),options:[t,n]}),y4=(t,n)=>({...$w(t),options:[t,n]}),w4=(t,n)=>({...m4(t),options:[t,n]}),x4=(t,n)=>({...Sw(t),options:[t,n]});function Af(){let t=p.useRef(!1);return Qe(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function j4(t){let n=pe(t),o=p.useRef(!1);p.useEffect(()=>(o.current=!1,()=>{o.current=!0,sw(()=>{o.current&&n()})}),[n])}let E4=p.createContext(!1);function k4(){return p.useContext(E4)}function O4(t){let n=k4(),o=p.useContext(Mw),r=Al(t),[i,a]=p.useState(()=>{if(!n&&o!==null||Zn.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let c=r.createElement("div");return c.setAttribute("id","headlessui-portal-root"),r.body.appendChild(c)});return p.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),p.useEffect(()=>{n||o!==null&&a(o.current)},[o,a,n]),i}let S4=p.Fragment;function C4(t,n){let o=p.useRef(null),r=jt(MC(d=>{o.current=d}),n),i=Al(o),a=O4(o),[l]=p.useState(()=>{var d;return Zn.isServer||(d=i==null?void 0:i.createElement("div"))==null?null:d}),c=p.useContext(I4),u=Rl();return Qe(()=>{a&&l&&!a.contains(l)&&(l.setAttribute("data-headlessui-portal",""),a.appendChild(l))},[a,l]),Qe(()=>{if(l&&c)return c.register(l)},[c,l]),j4(()=>{var d;a&&l&&(l instanceof Node&&a.contains(l)&&a.removeChild(l),0>=a.childNodes.length&&((d=a.parentElement)==null||d.removeChild(a)))}),u&&a&&l?rr.createPortal(mt({ourProps:{ref:r},theirProps:t,defaultTag:S4,name:"Portal"}),l):null}let $4=p.Fragment,Mw=p.createContext(null);function P4(t,n){let{target:o,...r}=t,i={ref:jt(n)};return S.createElement(Mw.Provider,{value:o},mt({ourProps:i,theirProps:r,defaultTag:$4,name:"Popover.Group"}))}let I4=p.createContext(null),T4=pt(C4),D4=pt(P4),M4=Object.assign(T4,{Group:D4});function N4(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,[n,o]=p.useState(t),r=Af(),i=p.useCallback(u=>{r.current&&o(d=>d|u)},[n,r]),a=p.useCallback(u=>!!(n&u),[n]),l=p.useCallback(u=>{r.current&&o(d=>d&~u)},[o,r]),c=p.useCallback(u=>{r.current&&o(d=>d^u)},[o]);return{flags:n,addFlag:i,hasFlag:a,removeFlag:l,toggleFlag:c}}function R4(t){let n={called:!1};return function(){if(!n.called)return n.called=!0,t(...arguments)}}function Ps(t){for(var n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t&&0<o.length&&t.classList.add(...o)}function Is(t){for(var n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t&&0<o.length&&t.classList.remove(...o)}function _4(t,n){let o=Bt();if(!t)return o.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(t),[a,l]=[r,i].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):1e3*parseFloat(f)).sort((f,g)=>g-f);return d}),c=a+l;if(c!==0){o.group(d=>{d.setTimeout(()=>{n(),d.dispose()},c),d.addEventListener(t,"transitionrun",f=>{f.target===f.currentTarget&&d.dispose()})});let u=o.addEventListener(t,"transitionend",d=>{d.target===d.currentTarget&&(n(),u())})}else n();return o.add(()=>n()),o.dispose}function L4(t,n,o,r){let i=o?"enter":"leave",a=Bt(),l=r===void 0?()=>{}:R4(r);i=="enter"&&(t.removeAttribute("hidden"),t.style.display="");let c=ot(i,{enter:()=>n.enter,leave:()=>n.leave}),u=ot(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),d=ot(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return Is(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),Ps(t,...n.base,...c,...d),a.nextFrame(()=>{Is(t,...n.base,...c,...d),Ps(t,...n.base,...c,...u),_4(t,()=>(Is(t,...n.base,...c),Ps(t,...n.base,...n.entered),l()))}),a.dispose}function F4(t){let{immediate:n,container:o,direction:r,classes:i,onStart:a,onStop:l}=t,c=Af(),u=En(),d=yn(r);Qe(()=>{n&&(d.current="enter")},[n]),Qe(()=>{let f=Bt();u.add(f.dispose);let g=o.current;if(g&&d.current!=="idle"&&c.current)return f.dispose(),a.current(d.current),f.add(L4(g,i.current,d.current==="enter",()=>{f.dispose(),l.current(d.current)})),f.dispose},[r])}function lr(){return(0<arguments.length&&arguments[0]!==void 0?arguments[0]:"").split(/\s+/).filter(n=>1<n.length)}let Vl=p.createContext(null);Vl.displayName="TransitionContext";var A4=(t=>(t.Visible="visible",t.Hidden="hidden",t))(A4||{});function z4(){let t=p.useContext(Vl);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function H4(){let t=p.useContext(ql);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let ql=p.createContext(null);ql.displayName="NestingContext";function Ul(t){return"children"in t?Ul(t.children):0<t.current.filter(n=>{let{el:o}=n;return o.current!==null}).filter(n=>{let{state:o}=n;return o==="visible"}).length}function Nw(t,n){let o=yn(t),r=p.useRef([]),i=Af(),a=En(),l=pe(function(h){let m=1<arguments.length&&arguments[1]!==void 0?arguments[1]:yr.Hidden,v=r.current.findIndex(E=>{let{el:y}=E;return y===h});v!==-1&&(ot(m,{[yr.Unmount](){r.current.splice(v,1)},[yr.Hidden](){r.current[v].state="hidden"}}),a.microTask(()=>{var E;!Ul(r)&&i.current&&((E=o.current)==null||E.call(o))}))}),c=pe(h=>{let m=r.current.find(v=>{let{el:E}=v;return E===h});return m?m.state!=="visible"&&(m.state="visible"):r.current.push({el:h,state:"visible"}),()=>l(h,yr.Unmount)}),u=p.useRef([]),d=p.useRef(Promise.resolve()),f=p.useRef({enter:[],leave:[],idle:[]}),g=pe((h,m,v)=>{u.current.splice(0),n&&(n.chains.current[m]=n.chains.current[m].filter(E=>{let[y]=E;return y!==h})),n==null||n.chains.current[m].push([h,new Promise(E=>{u.current.push(E)})]),n==null||n.chains.current[m].push([h,new Promise(E=>{Promise.all(f.current[m].map(y=>{let[k,C]=y;return C})).then(()=>E())})]),m==="enter"?d.current=d.current.then(()=>n==null?void 0:n.wait.current).then(()=>v(m)):v(m)}),b=pe((h,m,v)=>{Promise.all(f.current[m].splice(0).map(E=>{let[y,k]=E;return k})).then(()=>{var E;(E=u.current.shift())==null||E()}).then(()=>v(m))});return p.useMemo(()=>({children:r,register:c,unregister:l,onStart:g,onStop:b,wait:d,chains:f}),[c,l,r,g,b,f,d])}function B4(){}let W4=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function em(t){var n;let o={};for(let r of W4)o[r]=(n=t[r])==null?B4:n;return o}function V4(t){let n=p.useRef(em(t));return p.useEffect(()=>{n.current=em(t)},[t]),n}let q4="div",Rw=Er.RenderStrategy;function U4(t,n){var o,r;let{beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c,enter:u,enterFrom:d,enterTo:f,entered:g,leave:b,leaveFrom:h,leaveTo:m,...v}=t,E=p.useRef(null),y=jt(E,n),k=(o=v.unmount)==null||o?yr.Unmount:yr.Hidden,{show:C,appear:R,initial:I}=z4(),[T,F]=p.useState(C?"visible":"hidden"),_=H4(),{register:J,unregister:B}=_;p.useEffect(()=>J(E),[J,E]),p.useEffect(()=>{if(k===yr.Hidden&&E.current)return C&&T!=="visible"?void F("visible"):ot(T,{hidden:()=>B(E),visible:()=>J(E)})},[T,E,J,B,C,k]);let W=yn({base:lr(v.className),enter:lr(u),enterFrom:lr(d),enterTo:lr(f),entered:lr(g),leave:lr(b),leaveFrom:lr(h),leaveTo:lr(m)}),H=V4({beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c}),D=Rl();p.useEffect(()=>{if(D&&T==="visible"&&E.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[E,T,D]);let $=R&&C&&I,A=!D||I&&!R?"idle":C?"enter":"leave",z=N4(0),V=pe(se=>ot(se,{enter:()=>{z.addFlag(dt.Opening),H.current.beforeEnter()},leave:()=>{z.addFlag(dt.Closing),H.current.beforeLeave()},idle:()=>{}})),Q=pe(se=>ot(se,{enter:()=>{z.removeFlag(dt.Opening),H.current.afterEnter()},leave:()=>{z.removeFlag(dt.Closing),H.current.afterLeave()},idle:()=>{}})),X=Nw(()=>{F("hidden"),B(E)},_),M=p.useRef(!1);F4({immediate:$,container:E,classes:W,direction:A,onStart:yn(se=>{M.current=!0,X.onStart(E,se,V)}),onStop:yn(se=>{M.current=!1,X.onStop(E,se,Q),se!=="leave"||Ul(X)||(F("hidden"),B(E))})});let oe=v;return $?oe={...oe,className:Qa(v.className,...W.current.enter,...W.current.enterFrom)}:M.current&&(oe.className=Qa(v.className,(r=E.current)==null?void 0:r.className),oe.className===""&&delete oe.className),S.createElement(ql.Provider,{value:X},S.createElement(zl,{value:ot(T,{visible:dt.Open,hidden:dt.Closed})|z.flags},mt({ourProps:{ref:y},theirProps:oe,defaultTag:q4,features:Rw,visible:T==="visible",name:"Transition.Child"})))}function Y4(t,n){let{show:o,appear:r=!1,unmount:i=!0,...a}=t,l=p.useRef(null),c=jt(l,n);Rl();let u=Gi();if(o===void 0&&u!==null&&(o=(u&dt.Open)===dt.Open),![!0,!1].includes(o))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,f]=p.useState(o?"visible":"hidden"),g=Nw(()=>{f("hidden")}),[b,h]=p.useState(!0),m=p.useRef([o]);Qe(()=>{b!==!1&&m.current[m.current.length-1]!==o&&(m.current.push(o),h(!1))},[m,o]);let v=p.useMemo(()=>({show:o,appear:r,initial:b}),[o,r,b]);p.useEffect(()=>{if(o)f("visible");else if(!Ul(g))f("hidden");else{let C=l.current;if(!C)return;let R=C.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&f("hidden")}},[o,g]);let E={unmount:i},y=pe(()=>{var C;b&&h(!1),(C=t.beforeEnter)==null||C.call(t)}),k=pe(()=>{var C;b&&h(!1),(C=t.beforeLeave)==null||C.call(t)});return S.createElement(ql.Provider,{value:g},S.createElement(Vl.Provider,{value:v},mt({ourProps:{...E,as:p.Fragment,children:S.createElement(_w,{ref:c,...E,...a,beforeEnter:y,beforeLeave:k})},theirProps:{},defaultTag:p.Fragment,features:Rw,visible:d==="visible",name:"Transition"})))}function K4(t,n){let o=p.useContext(Vl)!==null,r=Gi()!==null;return S.createElement(S.Fragment,null,!o&&r?S.createElement(Du,{ref:n,...t}):S.createElement(_w,{ref:n,...t}))}let Du=pt(Y4),_w=pt(U4),G4=pt(K4),tm=Object.assign(Du,{Child:G4,Root:Du});const Q4=t=>{function n(i){return Object.prototype.hasOwnProperty.call(i,"current")}const{element:o,padding:r}=t;return{name:"arrow",options:t,fn(i){return n(o)?o.current==null?{}:Zh({element:o.current,padding:r}).fn(i):o?Zh({element:o,padding:r}).fn(i):{}}}};var Fa=typeof document>"u"?p.useEffect:p.useLayoutEffect;function ol(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let o,r,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(o=t.length,o!=n.length)return!1;for(r=o;r--!=0;)if(!ol(t[r],n[r]))return!1;return!0}if(i=Object.keys(t),o=i.length,o!==Object.keys(n).length)return!1;for(r=o;r--!=0;)if(!Object.prototype.hasOwnProperty.call(n,i[r]))return!1;for(r=o;r--!=0;){const a=i[r];if(!(a==="_owner"&&t.$$typeof)&&!ol(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function nm(t){const n=p.useRef(t);return Fa(()=>{n.current=t}),n}function J4(t){t===void 0&&(t={});const{placement:n="bottom",strategy:o="absolute",middleware:r=[],platform:i,whileElementsMounted:a,open:l}=t,[c,u]=p.useState({x:null,y:null,strategy:o,placement:n,middlewareData:{},isPositioned:!1}),[d,f]=p.useState(r);ol(d,r)||f(r);const g=p.useRef(null),b=p.useRef(null),h=p.useRef(c),m=nm(a),v=nm(i),[E,y]=p.useState(null),[k,C]=p.useState(null),R=p.useCallback(B=>{g.current!==B&&(g.current=B,y(B))},[]),I=p.useCallback(B=>{b.current!==B&&(b.current=B,C(B))},[]),T=p.useCallback(()=>{if(g.current&&b.current){const B={placement:n,strategy:o,middleware:d};v.current&&(B.platform=v.current),Pw(g.current,b.current,B).then(W=>{const H={...W,isPositioned:!0};F.current&&!ol(h.current,H)&&(h.current=H,rr.flushSync(()=>{u(H)}))})}},[d,n,o,v]);Fa(()=>{l===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(B=>({...B,isPositioned:!1})))},[l]);const F=p.useRef(!1);Fa(()=>(F.current=!0,()=>{F.current=!1}),[]),Fa(()=>{if(E&&k){if(m.current)return m.current(E,k,T);T()}},[E,k,T,m]);const _=p.useMemo(()=>({reference:g,floating:b,setReference:R,setFloating:I}),[R,I]),J=p.useMemo(()=>({reference:E,floating:k}),[E,k]);return p.useMemo(()=>({...c,update:T,refs:_,elements:J,reference:R,floating:I}),[c,T,_,J,R,I])}var Z4=typeof document>"u"?p.useEffect:p.useLayoutEffect;function X4(){const t=new Map;return{emit(n,o){var r;(r=t.get(n))==null||r.forEach(i=>i(o))},on(n,o){t.set(n,[...t.get(n)||[],o])},off(n,o){t.set(n,(t.get(n)||[]).filter(r=>r!==o))}}}const e5=p.createContext(null),t5=()=>p.useContext(e5);function n5(t){return(t==null?void 0:t.ownerDocument)||document}function r5(t){return n5(t).defaultView||window}function ma(t){return!!t&&t instanceof r5(t).Element}const o5=jr.useInsertionEffect,i5=o5||(t=>t());function a5(t){const n=p.useRef(()=>{});return i5(()=>{n.current=t}),p.useCallback(function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n.current==null?void 0:n.current(...r)},[])}function l5(t){t===void 0&&(t={});const{open:n=!1,onOpenChange:o,nodeId:r}=t,i=J4(t),a=t5(),l=p.useRef(null),c=p.useRef({}),u=p.useState(()=>X4())[0],[d,f]=p.useState(null),g=p.useCallback(y=>{const k=ma(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(k)},[i.refs]),b=p.useCallback(y=>{(ma(y)||y===null)&&(l.current=y,f(y)),(ma(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!ma(y))&&i.refs.setReference(y)},[i.refs]),h=p.useMemo(()=>({...i.refs,setReference:b,setPositionReference:g,domReference:l}),[i.refs,b,g]),m=p.useMemo(()=>({...i.elements,domReference:d}),[i.elements,d]),v=a5(o),E=p.useMemo(()=>({...i,refs:h,elements:m,dataRef:c,nodeId:r,events:u,open:n,onOpenChange:v}),[i,r,u,n,v,h,m]);return Z4(()=>{const y=a==null?void 0:a.nodesRef.current.find(k=>k.id===r);y&&(y.context=E)}),p.useMemo(()=>({...i,context:E,refs:h,reference:b,positionReference:g}),[i,h,E,b,g])}var rm,s5=Object.defineProperty,c5=(t,n,o)=>n in t?s5(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,om=(t,n,o)=>(c5(t,typeof n=="symbol"?n:n+"",o),o),Lw={exports:{}},ui={};function u5(){function t(a,l,c){var u,d={},f=null,g=null;for(u in c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref),l)o.call(l,u)&&!i.hasOwnProperty(u)&&(d[u]=l[u]);if(a&&a.defaultProps)for(u in l=a.defaultProps,l)d[u]===void 0&&(d[u]=l[u]);return{$$typeof:n,type:a,key:f,ref:g,props:d,_owner:r.current}}if(rm)return ui;rm=1;var n=Symbol.for("react.element"),o=Object.prototype.hasOwnProperty,r=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};return ui.Fragment=Symbol.for("react.fragment"),ui.jsx=t,ui.jsxs=t,ui}Lw.exports=u5();var Ke=Lw.exports;let d5=class{constructor(){om(this,"current",this.detect()),om(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return"u"<typeof window||"u"<typeof document?"server":"client"}};const Qo=new d5,Fw=(t,n)=>{Qo.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)},Ts={serverHandoffComplete:!1};function f5(){const[t,n]=p.useState(Ts.serverHandoffComplete);return p.useEffect(()=>{t!==!0&&n(!0)},[t]),p.useEffect(()=>{Ts.serverHandoffComplete===!1&&(Ts.serverHandoffComplete=!0)},[]),t}const p5=S.useId??function(){const t=f5(),[n,o]=S.useState(t?()=>Qo.nextId():null);return Fw(()=>{n===null&&o(Qo.nextId())},[n]),n==null?void 0:`${n}`};function g5(t,n,o,r){p.useEffect(()=>{const i=[];(typeof r.offset=="number"||typeof r.offset=="object"||typeof r.offset=="function")&&i.push(Ow(r.offset)),(r.flip===!0||typeof r.flip=="number"||typeof r.flip=="object")&&i.push($w({padding:typeof r.flip=="number"?r.flip:void 0,...typeof r.flip=="object"?r.flip:{}})),(r.shift===!0||typeof r.shift=="number"||typeof r.shift=="object")&&i.push(Cw({padding:typeof r.shift=="number"?r.shift:void 0,...typeof r.shift=="object"?r.shift:{}})),(r.autoPlacement===!0||typeof r.autoPlacement=="object")&&i.push(Sw(typeof r.autoPlacement=="object"?r.autoPlacement:void 0)),(r.arrow===!0||typeof r.arrow=="number")&&i.push(Q4({element:o,padding:r.arrow===!0?0:r.arrow})),i.push(...typeof r.middleware=="function"?r.middleware({referenceEl:n.reference,floatingEl:n.floating}):r.middleware||[]),(r.hide===!0||typeof r.hide=="object")&&i.push(b4(typeof r.hide=="object"?r.hide:void 0)),t(i)},[r.offset,r.shift,r.flip,r.arrow,r.autoPlacement,r.hide,r.middleware])}function h5(t,n,o){p.useEffect(()=>{if(t&&Qo.isClient&&"u">typeof ResizeObserver&&n.current&&n.current instanceof Element){const r=new ResizeObserver(i=>{let[a]=i;const l=a.borderBoxSize.reduce((c,u)=>{let{inlineSize:d}=u;return c+d},0);o(l)});return r.observe(n.current),()=>{r.disconnect(),o(null)}}},[])}const m5=t=>t==="top"?"origin-bottom":t==="bottom"?"origin-top":t==="left"?"origin-right":t==="right"?"origin-left":t==="top-start"||t==="right-end"?"origin-bottom-left":t==="top-end"||t==="left-end"?"origin-bottom-right":t==="right-start"||t==="bottom-start"?"origin-top-left":t==="left-start"||t==="bottom-end"?"origin-top-right":"";function b5(t,n){return p.useMemo(()=>typeof t.originClass=="function"?t.originClass(n):typeof t.originClass=="string"?t.originClass:t.tailwindcssOriginClass?m5(n):"",[n,t.originClass,t.tailwindcssOriginClass])}function Aw(t,n){if(t in n){const l=n[t];for(var o=arguments.length,r=Array(2<o?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];return typeof l=="function"?l(...r):l}const a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Aw),a}function zw(t){return Qo.isServer?null:t instanceof Node?t.ownerDocument:t&&Object.prototype.hasOwnProperty.call(t,"current")&&t.current instanceof Node?t.current.ownerDocument:document}const im=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Hw=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Hw||{});function v5(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var o;return t!==((o=zw(t))==null?void 0:o.body)&&Aw(n,{0(){return t.matches(im)},1(){for(let r=t;r!==null;){if(r.matches(im))return!0;r=r.parentElement}return!1}})}function y5(t){const n=p.useRef(t);return Fw(()=>{n.current=t},[t]),n}function Rn(t,n,o){const r=y5(n);p.useEffect(()=>{function i(a){r.current(a)}return document.addEventListener(t,i,o),()=>document.removeEventListener(t,i,o)},[t,o])}function w5(t,n){function o(l,c){if(i.current&&!l.defaultPrevented){const u=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t),d=c(l);if(d!==null&&d.getRootNode().contains(d)){for(const f of u){if(f===null)continue;const g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(d)||l.composed&&l.composedPath().includes(g))return}return!v5(d,Hw.Loose)&&d.tabIndex!==-1&&l.preventDefault(),n(l,d)}}}let r=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];const i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=r})},[r]);const a=p.useRef(null);Rn("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),Rn("click",l=>{a.current&&(o(l,()=>a.current),a.current=null)},!0),Rn("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}const ba=new Map,zf=p.createContext(null);zf.displayName="ReferenceContext";const Hf=p.createContext(null);Hf.displayName="FloatingContext";const Di=p.createContext(null);Di.displayName="ArrowContext";function Bw(t){const n=p.useContext(zf);if(n===null){const o=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Bw),o}return n}function Ww(t){const n=p.useContext(Hf);if(n===null){const o=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Ww),o}return n}function Vw(t){const n=p.useContext(Di);if(n===null){const o=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Vw),o}return n}function qw(t,n,o,r){const{referenceRef:i}=r,a=n;if(a.as===p.Fragment)return Ke.jsx(t.type,{...t.props,...o,ref:i});const l=a.as||"div";return Ke.jsx(l,{...o,ref:i,children:Ke.jsx(t.type,{...t.props})})}function Bf(t,n,o,r){var i=Math.round;function a(I){return y.portal?Ke.jsx(M4,{children:I}):I}function l(I){const T={...R,...o,ref:u};if(y.as===p.Fragment)return Ke.jsx(I.type,{...I.props,...T});const F=y.as||"div";return Ke.jsx(F,{...T,children:Ke.jsx(I.type,{...I.props})})}function c(){return Qo.isServer?f.current&&y.show?Ke.jsx(t.type,{...t.props}):Ke.jsx(p.Fragment,{}):y.transitionChild?Ke.jsx(tm.Child,{as:p.Fragment,...C,children:Ke.jsx(t.type,{...t.props})}):Ke.jsx(tm,{as:p.Fragment,...C,children:Ke.jsx(t.type,{...t.props})})}const{floatingRef:u,props:d,mounted:f,setShow:g,x:b,y:h,placement:m,strategy:v,referenceElWidth:E}=r,y={...d,...n},k=b5(y,m),C={show:!!f.current&&y.show,enter:`${y.enter||""} ${k}`,enterFrom:`${y.enterFrom||""}`,enterTo:`${y.enterTo||""}`,leave:`${y.leave||""} ${k}`,leaveFrom:`${y.leaveFrom||""}`,leaveTo:`${y.leaveTo||""}`,beforeEnter:()=>{g(!0)},afterLeave:()=>{g(!1)}},R={style:{...!y.dialog&&(y.transform||y.transform===void 0)?{position:v,zIndex:y.zIndex||9999,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${i(b||0)}px,${i(h||0)}px)`}:{position:v,zIndex:y.zIndex||9999,top:`${h||0}px`,left:`${b||0}px`},width:y.adaptiveWidth&&typeof E=="number"?`${E}px`:void 0}};return a(l(c()))}function Uw(t,n){let[o,r]=t;var i,a;const l=p5(),c=p.useRef(!1),[u,d]=p.useState(),f=p.useRef(null),g=p.useMemo(()=>({show:n.onShow||(()=>{}),hide:n.onHide||(()=>{}),update:n.onUpdate||(()=>{})}),[n.onShow,n.onHide,n.onUpdate]),{x:b,y:h,placement:m,strategy:v,update:E,refs:y,middlewareData:k}=l5({placement:n.placement||"bottom-start",strategy:n.strategy,middleware:u}),[C,R]=p.useState(null);p.useEffect(()=>{c.current=!0},[]),p.useEffect(()=>{o&&!ba.get(l)?(ba.set(l,!0),g.show()):!o&&ba.get(l)&&(ba.delete(l),g.hide())},[o]);const I=p.useCallback(()=>{E(),g.update()},[E,g]);p.useEffect(I,[n.placement,n.strategy,u]),g5(d,y,f,n),h5(n.adaptiveWidth,y.reference,R),p.useEffect(()=>{if(y.reference.current&&y.floating.current&&o)return n.autoUpdate===!1?()=>{}:kw(y.reference.current,y.floating.current,I,typeof n.autoUpdate=="object"?n.autoUpdate:void 0)},[o,I,y]);const T=p.useRef(!0);p.useEffect(()=>{!(y.reference.current instanceof Element)&&y.reference.current&&y.floating.current&&T.current&&(T.current=!1,I(),window.requestAnimationFrame(()=>{T.current=!0,I()}))},[y]);const F={referenceRef:y.setReference,placement:m},_={floatingRef:y.setFloating,props:n,mounted:c,setShow:r,x:b,y:h,placement:m,strategy:v,referenceElWidth:C},J={arrowRef:f,placement:m,x:(i=k.arrow)==null?void 0:i.x,y:(a=k.arrow)==null?void 0:a.y};return{referenceApi:F,floatingApi:_,arrowApi:J,x:b,y:h,placement:m,strategy:v,update:I,refs:y,middlewareData:k}}const Yw=p.forwardRef((t,n)=>{function o(m){if(t.as===p.Fragment||!t.as)return Ke.jsx(p.Fragment,{children:m});const v=t.as;return Ke.jsx(v,{ref:n,className:t.className,children:m})}const[r,i]=p.useState(t.show??!1),{referenceApi:a,floatingApi:l,arrowApi:c,placement:u}=Uw([r,i],t),d={placement:u},[f,g]=typeof t.children=="function"?t.children(d):t.children;if(!p.isValidElement(f))return console.warn("<Float /> is missing a reference and floating element."),Ke.jsx(p.Fragment,{});if(t.composable||t.dialog)return o(Ke.jsx(zf.Provider,{value:a,children:Ke.jsx(Hf.Provider,{value:l,children:Ke.jsx(Di.Provider,{value:c,children:typeof t.children=="function"?t.children(d):t.children})})},"FloatingNode"));const b=qw(f,{as:p.Fragment},{key:"reference-node"},a),h=Bf(g,{as:t.floatingAs||"div"},{},l);return o([b,Ke.jsx(Di.Provider,{value:c,children:h},"floating-node")])});Yw.displayName="Float";function x5(t){if(!t.children)return Ke.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,children:l,...c}=t;return c},[t]),o=Bw("Float.Reference"),{placement:r}=o,i={placement:r};return qw(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||p.Fragment},n,o)}function j5(t){if(!t.children)return Ke.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,enter:l,enterFrom:c,enterTo:u,leave:d,leaveFrom:f,leaveTo:g,originClass:b,tailwindcssOriginClass:h,transitionChild:m,children:v,...E}=t;return E},[t]),o=Ww("Float.Content"),{placement:r}=o,i={placement:r};return Bf(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||"div"},n,o)}function E5(t){const{arrowRef:n,placement:o,x:r,y:i}=Vw("Float.Arrow"),a=p.useMemo(()=>{const{as:d,offset:f,children:g,...b}=t;return b},[t]),l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]],c={left:typeof r=="number"?`${r}px`:void 0,top:typeof i=="number"?`${i}px`:void 0,right:void 0,bottom:void 0,[l]:`${-1*(t.offset??4)}px`,...a.style};if(t.as===p.Fragment){const d={placement:o},f=typeof t.children=="function"?t.children(d):t.children;return f&&p.isValidElement(f)?Ke.jsx(f.type,{...f.props,ref:n,style:c}):Ke.jsx(p.Fragment,{})}const u=t.as||"div";return Ke.jsx(u,{ref:n,...a,style:c,children:t.children})}function Wf(t){function n(){a&&l(!1)}let{onInitial:o,children:r,...i}=t;const[a,l]=p.useState(i.show??!1),c=p.useMemo(()=>{const{as:h,show:m,placement:v,strategy:E,offset:y,shift:k,flip:C,arrow:R,autoPlacement:I,hide:T,autoUpdate:F,zIndex:_,enter:J,enterFrom:B,enterTo:W,leave:H,leaveFrom:D,leaveTo:$,originClass:A,tailwindcssOriginClass:z,portal:V,transform:Q,middleware:X,onShow:M,onHide:oe,onUpdate:se,...N}=i;return N},[i]),{floatingApi:u,arrowApi:d,placement:f,refs:g}=Uw([a,l],i);if(p.useEffect(()=>{l(i.show??!1)},[i.show]),o({show:a,setShow:l,placement:f,refs:g}),!r)return Ke.jsx(p.Fragment,{});const b=Bf(typeof r=="function"?r({placement:f,close:n}):r,{...i,as:i.as||p.Fragment,show:a},c,u);return Ke.jsx(Di.Provider,{value:d,children:b})}function k5(t){function n(o){let{setShow:r,refs:i}=o;Rn("contextmenu",a=>{a.preventDefault(),i.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:a.clientX,y:a.clientY,top:a.clientY,left:a.clientX,right:a.clientX,bottom:a.clientY}}}),r(!0)}),w5(i.floating,()=>{r(!1)})}return Ke.jsx(Wf,{flip:!0,...t,show:!1,portal:!0,onInitial:n})}function O5(t){function n(i){function a(){f(!0)}function l(){f(!1)}function c(h){g.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:h.clientX,y:h.clientY,top:h.clientY,left:h.clientX,right:h.clientX,bottom:h.clientY}}})}function u(h){a(),c(h)}function d(h){a(),c(h.touches[0])}let{setShow:f,refs:g}=i;const b=zw(g.floating);b&&(p.useEffect(()=>{if((o||o===void 0)&&!b.getElementById("headlesui-float-cursor-style")){const h=b.createElement("style");return(b.head||b.getElementsByTagName("head")[0]).appendChild(h),h.id="headlesui-float-cursor-style",h.appendChild(b.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var m;return(m=b.getElementById("headlesui-float-cursor-style"))==null?void 0:m.remove()}}},[o]),"ontouchstart"in window||0<navigator.maxTouchPoints?(Rn("touchstart",d),Rn("touchend",l),Rn("touchmove",d)):(Rn("mouseenter",u),Rn("mouseleave",l),Rn("mousemove",u)))}let{globalHideCursor:o,...r}=t;return Ke.jsx(Wf,{...r,portal:!0,className:"headlesui-float-cursor-root",onInitial:n})}const Ds=Object.assign(Yw,{Reference:x5,Content:j5,Arrow:E5,Virtual:Wf,ContextMenu:k5,Cursor:O5}),S5=`
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
	jn-z-10
`,C5=`
	jn-absolute
`,$5=`
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`,P5=`
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`,I5=`
	jn-opacity-50
	jn-cursor-not-allowed
`,Mu=S.forwardRef((t,n)=>{let{text:o="",htmlFor:r=void 0,required:i=!1,className:a="",disabled:l=!1,floating:c=!1,minimized:u=!1,...d}=t;return S.createElement("label",he({className:`
				juno-label 
				${S5} 
				${c?"juno-label-floating "+C5:""}
				${u?"juno-label-minimized "+$5:""}
				${l?"juno-label-disabled "+I5:""} 
				${a}
			`,htmlFor:r,ref:n},d),o,i?S.createElement("span",{className:`
					juno-required 
					${P5}
					`}):"")});Mu.displayName="Label (JS)",Mu.propTypes={text:j.string,htmlFor:j.string,required:j.bool,className:j.string,disabled:j.bool,floating:j.bool,minimized:j.bool};const T5=`
  jn-text-xs
  jn-mt-1
`,D5=t=>t==="success"?"jn-text-theme-success":t==="error"?"jn-text-theme-error":"jn-text-theme-light",Ei=t=>{let{children:n=null,text:o="",variant:r="help",className:i,...a}=t;return S.createElement("div",he({className:`
        juno-form-hint
        juno-form-hint-${r}
        ${T5}
        ${D5(r)}
        ${i}
      `},a),n||o)};Ei.displayName="FormHint Js",Ei.propTypes={children:j.node,text:j.node,variant:j.oneOf(["help","error","success"]),className:j.string};function Ji(t,n){let[o,r]=p.useState(t),i=yn(t);return Qe(()=>r(i.current),[i,r,...n]),o}function Kw(t,n,o){let[r,i]=p.useState(o),a=t!==void 0,l=p.useRef(a),c=p.useRef(!1),u=p.useRef(!1);return!a||l.current||c.current?!a&&l.current&&!u.current&&(u.current=!0,l.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,l.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?t:r,pe(d=>(a||i(d),n==null?void 0:n(d)))]}let M5="div";var Vf=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Vf||{});function N5(t,n){var o;let{features:r=1,...i}=t,a={ref:n,"aria-hidden":(2&r)==2||((o=i["aria-hidden"])==null?void 0:o),hidden:(4&r)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return mt({ourProps:a,theirProps:i,slot:{},defaultTag:M5,name:"Hidden"})}let Gw=pt(N5);function qf(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[];for(let[r,i]of Object.entries(t))Jw(o,Qw(n,r),i);return o}function Qw(t,n){return t?t+"["+n+"]":n}function Jw(t,n,o){if(Array.isArray(o))for(let[r,i]of o.entries())Jw(t,Qw(n,r.toString()),i);else o instanceof Date?t.push([n,o.toISOString()]):typeof o=="boolean"?t.push([n,o?"1":"0"]):typeof o=="string"?t.push([n,o]):typeof o=="number"?t.push([n,`${o}`]):o==null?t.push([n,""]):qf(o,n,t)}function Zw(t){let{container:n,accept:o,walk:r,enabled:i=!0}=t,a=p.useRef(o),l=p.useRef(r);p.useEffect(()=>{a.current=o,l.current=r},[o,r]),Qe(()=>{if(!n||!i)return;let c=Ki(n);if(!c)return;let u=a.current,d=l.current,f=Object.assign(b=>u(b),{acceptNode:u}),g=c.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,f,!1);for(;g.nextNode();)d(g.currentNode)},[n,i,a,l])}var R5={};function bo(t,n,o){var r=Math.max,i=Math.min,a=Math.round;let l,c=o.initialDeps??[];return()=>{var u,d,f,g;let b;o.key&&((u=o.debug)!=null&&u.call(o))&&(b=Date.now());const h=t();if(!(h.length!==c.length||h.some((E,y)=>c[y]!==E)))return l;c=h;let v;if(o.key&&((d=o.debug)!=null&&d.call(o))&&(v=Date.now()),l=n(...h),o.key&&((f=o.debug)==null?void 0:f.call(o))){const E=a(100*(Date.now()-b))/100,y=a(100*(Date.now()-v))/100,k=(C,R)=>{for(C+="";C.length<R;)C=" "+C;return C};console.info(`%c⏱ ${k(y,5)} /${k(E,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${r(0,i(120-120*(y/16),120))}deg 100% 31%);`,o==null?void 0:o.key)}return(g=o==null?void 0:o.onChange)==null||g.call(o,l),l}}function Ms(t){if(t===void 0)throw new Error("Unexpected undefined");return t}const _5=(t,n)=>1>Math.abs(t-n),L5=(t,n,o)=>{let r;return function(){for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];t.clearTimeout(r),r=t.setTimeout(()=>n.apply(this,a),o)}},F5=t=>t,A5=t=>{const n=Math.max(t.startIndex-t.overscan,0),o=Math.min(t.endIndex+t.overscan,t.count-1),r=[];for(let i=n;i<=o;i++)r.push(i);return r},z5=(t,n)=>{var o=Math.round;const r=t.scrollElement;if(!r)return;const i=t.targetWindow;if(!i)return;const a=c=>{const{width:u,height:d}=c;n({width:o(u),height:o(d)})};if(a(r.getBoundingClientRect()),!i.ResizeObserver)return()=>{};const l=new i.ResizeObserver(c=>{const u=c[0];if(u!=null&&u.borderBoxSize){const d=u.borderBoxSize[0];if(d)return void a({width:d.inlineSize,height:d.blockSize})}a(r.getBoundingClientRect())});return l.observe(r,{box:"border-box"}),()=>{l.unobserve(r)}},am={passive:!0},H5=!(typeof window<"u")||"onscrollend"in window,B5=(t,n)=>{const o=t.scrollElement;if(!o)return;const r=t.targetWindow;if(!r)return;let i=0;const a=H5?()=>{}:L5(r,()=>{n(i,!1)},t.options.isScrollingResetDelay),l=d=>()=>{const{horizontal:f,isRtl:g}=t.options;i=f?o.scrollLeft*(g&&-1||1):o.scrollTop,a(),n(i,d)},c=l(!0),u=l(!1);return u(),o.addEventListener("scroll",c,am),o.addEventListener("scrollend",u,am),()=>{o.removeEventListener("scroll",c),o.removeEventListener("scrollend",u)}},W5=(t,n,o)=>{var r=Math.round;if(n!=null&&n.borderBoxSize){const i=n.borderBoxSize[0];if(i)return r(i[o.options.horizontal?"inlineSize":"blockSize"])}return r(t.getBoundingClientRect()[o.options.horizontal?"width":"height"])},V5=(t,n,o)=>{let{adjustments:r=0,behavior:i}=n;var a,l;(l=(a=o.scrollElement)==null?void 0:a.scrollTo)==null||l.call(a,{[o.options.horizontal?"left":"top"]:t+r,behavior:i})};let q5=class{constructor(n){var o=Math.max,r=Math.min,i=this;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let a=null;const l=()=>a||(this.targetWindow&&this.targetWindow.ResizeObserver?a=new this.targetWindow.ResizeObserver(c=>{c.forEach(u=>{this._measureElement(u.target,u)})}):null);return{disconnect:()=>{var c;(c=l())==null||c.disconnect(),a=null},observe:c=>{var u;return(u=l())==null?void 0:u.observe(c,{box:"border-box"})},unobserve:c=>{var u;return(u=l())==null?void 0:u.unobserve(c)}}})(),this.range=null,this.setOptions=a=>{Object.entries(a).forEach(l=>{let[c,u]=l;typeof u>"u"&&delete a[c]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:F5,rangeExtractor:A5,onChange:()=>{},measureElement:W5,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...a}},this.notify=a=>{var l,c;(c=(l=this.options).onChange)==null||c.call(l,this,a)},this.maybeNotify=bo(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;const l=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==l){if(this.cleanup(),!l)return void this.maybeNotify();this.scrollElement=l,this.targetWindow=this.scrollElement&&"ownerDocument"in this.scrollElement?this.scrollElement.ownerDocument.defaultView:((a=this.scrollElement)==null?void 0:a.window)??null,this.elementsCache.forEach(c=>{this.observer.observe(c)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,c=>{this.scrollRect=c,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(c,u)=>{this.scrollAdjustments=0,this.scrollDirection=u?this.getScrollOffset()<c?"forward":"backward":null,this.scrollOffset=c,this.isScrolling=u,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(a,l)=>{const c=new Map,u=new Map;for(let d=l-1;0<=d;d--){const f=a[d];if(c.has(f.lane))continue;const g=u.get(f.lane);if(g==null||f.end>g.end?u.set(f.lane,f):f.end<g.end&&c.set(f.lane,!0),c.size===this.options.lanes)break}return u.size===this.options.lanes?Array.from(u.values()).sort((d,f)=>d.end===f.end?d.index-f.index:d.end-f.end)[0]:void 0},this.getMeasurementOptions=bo(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(a,l,c,u,d)=>(this.pendingMeasuredCacheIndexes=[],{count:a,paddingStart:l,scrollMargin:c,getItemKey:u,enabled:d}),{key:!1}),this.getMeasurements=bo(()=>[this.getMeasurementOptions(),this.itemSizeCache],(a,l)=>{let{count:c,paddingStart:u,scrollMargin:d,getItemKey:f,enabled:g}=a;if(!g)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(m=>{this.itemSizeCache.set(m.key,m.size)}));const b=0<this.pendingMeasuredCacheIndexes.length?r(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const h=this.measurementsCache.slice(0,b);for(let m=b;m<c;m++){const v=f(m),E=this.options.lanes===1?h[m-1]:this.getFurthestMeasurement(h,m),y=E?E.end+this.options.gap:u+d,k=l.get(v),C=typeof k=="number"?k:this.options.estimateSize(m),R=E?E.lane:m%this.options.lanes;h[m]={index:m,start:y,size:C,end:y+C,key:v,lane:R}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=bo(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(a,l,c)=>this.range=0<a.length&&0<l?U5({measurements:a,outerSize:l,scrollOffset:c}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=bo(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(a,l,c,u)=>l===null?[]:a({startIndex:l.startIndex,endIndex:l.endIndex,overscan:c,count:u}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{const l=this.options.indexAttribute,c=a.getAttribute(l);return c?parseInt(c,10):(console.warn(`Missing attribute name '${l}={index}' on measured element.`),-1)},this._measureElement=(a,l)=>{const c=this.indexFromElement(a),u=this.measurementsCache[c];if(!u)return;const d=u.key,f=this.elementsCache.get(d);f!==a&&(f&&this.observer.unobserve(f),this.observer.observe(a),this.elementsCache.set(d,a)),a.isConnected&&this.resizeItem(c,this.options.measureElement(a,l,this))},this.resizeItem=(a,l)=>{const c=this.measurementsCache[a];if(!c)return;const u=this.itemSizeCache.get(c.key)??c.size,d=l-u;d!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?c.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(c,d,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=d,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,l)),this.notify(!1))},this.measureElement=a=>a?void this._measureElement(a,void 0):void this.elementsCache.forEach((l,c)=>{l.isConnected||(this.observer.unobserve(l),this.elementsCache.delete(c))}),this.getVirtualItems=bo(()=>[this.getIndexes(),this.getMeasurements()],(a,l)=>{const c=[];for(let u=0,d=a.length;u<d;u++){const f=a[u],g=l[f];c.push(g)}return c},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{const l=this.getMeasurements();return l.length===0?void 0:Ms(l[Xw(0,l.length-1,c=>Ms(l[c]).start,a)])},this.getOffsetForAlignment=(a,l)=>{const c=this.getSize(),u=this.getScrollOffset();l==="auto"&&(a<=u?l="start":a>=u+c?l="end":l="start"),l==="start"?a=a:l==="end"?a-=c:l=="center"&&(a-=c/2);const d=this.options.horizontal?"scrollWidth":"scrollHeight",f=this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[d]:this.scrollElement[d]:0;return o(r(f-c,a),0)},this.getOffsetForIndex=function(a){let l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"auto";a=o(0,r(a,i.options.count-1));const c=i.measurementsCache[a];if(!c)return;const u=i.getSize(),d=i.getScrollOffset();if(l==="auto")if(c.end>=d+u-i.options.scrollPaddingEnd)l="end";else if(c.start<=d+i.options.scrollPaddingStart)l="start";else return[d,l];const f=l==="end"?c.end+i.options.scrollPaddingEnd:c.start-i.options.scrollPaddingStart;return[i.getOffsetForAlignment(f,l),l]},this.isDynamicMode=()=>0<this.elementsCache.size,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(a){let{align:l="start",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getOffsetForAlignment(a,l),{adjustments:void 0,behavior:c})},this.scrollToIndex=function(a){let{align:l="auto",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};a=o(0,r(a,i.options.count-1)),i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const u=i.getOffsetForIndex(a,l);if(!u)return;const[d,f]=u;i._scrollToOffset(d,{adjustments:void 0,behavior:c}),c!=="smooth"&&i.isDynamicMode()&&i.targetWindow&&(i.scrollToIndexTimeoutId=i.targetWindow.setTimeout(()=>{if(i.scrollToIndexTimeoutId=null,i.elementsCache.has(i.options.getItemKey(a))){const[b]=Ms(i.getOffsetForIndex(a,f));_5(b,i.getScrollOffset())||i.scrollToIndex(a,{align:f,behavior:c})}else i.scrollToIndex(a,{align:f,behavior:c})}))},this.scrollBy=function(a){let{behavior:l}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),l==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getScrollOffset()+a,{adjustments:void 0,behavior:l})},this.getTotalSize=()=>{var a;const l=this.getMeasurements();let c;return c=l.length===0?this.options.paddingStart:this.options.lanes===1?((a=l[l.length-1])==null?void 0:a.end)??0:o(...l.slice(-this.options.lanes).map(u=>u.end)),o(c-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(a,l)=>{let{adjustments:c,behavior:u}=l;this.options.scrollToFn(a,{behavior:u,adjustments:c},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(n)}};const Xw=(t,n,o,r)=>{for(;t<=n;){const i=0|(t+n)/2,a=o(i);if(a<r)t=i+1;else if(a>r)n=i-1;else return i}return 0<t?t-1:0};function U5(t){let{measurements:n,outerSize:o,scrollOffset:r}=t;const i=n.length-1,a=Xw(0,i,c=>n[c].start,r);let l=a;for(;l<i&&n[l].end<r+o;)l++;return{startIndex:a,endIndex:l}}const Y5=typeof document>"u"?p.useEffect:p.useLayoutEffect;function K5(t){const n=p.useReducer(()=>({}),{})[1],o={...t,onChange:(i,a)=>{var l;a?rr.flushSync(n):n(),(l=t.onChange)==null||l.call(t,i,a)}},[r]=p.useState(()=>new q5(o));return r.setOptions(o),p.useEffect(()=>r._didMount(),[]),Y5(()=>r._willUpdate()),r}function G5(t){return K5({observeElementRect:z5,observeElementOffset:B5,scrollToFn:V5,...t})}function lm(t,n){let o=p.useRef([]),r=pe(t);p.useEffect(()=>{let i=[...o.current];for(let[a,l]of n.entries())if(o.current[a]!==l){let c=r(n,i);return o.current=n,c}},[r,...n])}function Q5(t){function n(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",n))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",n),n())}let Wr=[];Q5(()=>{function t(n){n.target instanceof HTMLElement&&n.target!==document.body&&Wr[0]!==n.target&&(Wr.unshift(n.target),Wr=Wr.filter(o=>o!=null&&o.isConnected),Wr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});var J5=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(J5||{}),Z5=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Z5||{}),X5=(t=>(t[t.Pointer=0]="Pointer",t[t.Focus=1]="Focus",t[t.Other=2]="Other",t))(X5||{}),e$=(t=>(t[t.OpenCombobox=0]="OpenCombobox",t[t.CloseCombobox=1]="CloseCombobox",t[t.GoToOption=2]="GoToOption",t[t.RegisterOption=3]="RegisterOption",t[t.UnregisterOption=4]="UnregisterOption",t[t.RegisterLabel=5]="RegisterLabel",t[t.SetActivationTrigger=6]="SetActivationTrigger",t[t.UpdateVirtualOptions=7]="UpdateVirtualOptions",t))(e$||{});function Ns(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:l=>l,o=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],r=n(t.options.slice()),i=0<r.length&&r[0].dataRef.current.order!==null?r.sort((l,c)=>l.dataRef.current.order-c.dataRef.current.order):Fl(r,l=>l.dataRef.current.domRef.current),a=o?i.indexOf(o):null;return a===-1&&(a=null),{options:i,activeOptionIndex:a}}let t$={1(t){var n;return(n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},0(t){var n,o;if((n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===0)return t;if((o=t.dataRef.current)!=null&&o.value){let r=t.dataRef.current.calculateIndex(t.dataRef.current.value);if(r!==-1)return{...t,activeOptionIndex:r,comboboxState:0}}return{...t,comboboxState:0}},2(t,n){var o,r,i,a,l;if((o=t.dataRef.current)!=null&&o.disabled||(r=t.dataRef.current)!=null&&r.optionsRef.current&&!((i=t.dataRef.current)!=null&&i.optionsPropsRef.current.static)&&t.comboboxState===1)return t;if(t.virtual){let f=n.focus===Ne.Specific?n.idx:Za(n,{resolveItems:()=>t.virtual.options,resolveActiveIndex:()=>{var b,h;return(h=(b=t.activeOptionIndex)==null?t.virtual.options.findIndex(m=>!t.virtual.disabled(m)):b)==null?null:h},resolveDisabled:t.virtual.disabled,resolveId(){throw new Error("Function not implemented.")}}),g=(a=n.trigger)==null?2:a;return t.activeOptionIndex===f&&t.activationTrigger===g?t:{...t,activeOptionIndex:f,activationTrigger:g}}let c=Ns(t);if(c.activeOptionIndex===null){let f=c.options.findIndex(g=>!g.dataRef.current.disabled);f!==-1&&(c.activeOptionIndex=f)}let u=n.focus===Ne.Specific?n.idx:Za(n,{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled}),d=(l=n.trigger)==null?2:l;return t.activeOptionIndex===u&&t.activationTrigger===d?t:{...t,...c,activeOptionIndex:u,activationTrigger:d}},3:(t,n)=>{var o,r,i;if((o=t.dataRef.current)!=null&&o.virtual)return{...t,options:[...t.options,n.payload]};let a=n.payload,l=Ns(t,u=>(u.push(a),u));t.activeOptionIndex===null&&(r=t.dataRef.current)!=null&&r.isSelected(n.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(a));let c={...t,...l,activationTrigger:2};return(i=t.dataRef.current)!=null&&i.__demoMode&&t.dataRef.current.value===void 0&&(c.activeOptionIndex=0),c},4:(t,n)=>{var o;if((o=t.dataRef.current)!=null&&o.virtual)return{...t,options:t.options.filter(i=>i.id!==n.id)};let r=Ns(t,i=>{let a=i.findIndex(l=>l.id===n.id);return a!==-1&&i.splice(a,1),i});return{...t,...r,activationTrigger:2}},5:(t,n)=>t.labelId===n.id?t:{...t,labelId:n.id},6:(t,n)=>t.activationTrigger===n.trigger?t:{...t,activationTrigger:n.trigger},7:(t,n)=>{var o;if(((o=t.virtual)==null?void 0:o.options)===n.options)return t;let r=t.activeOptionIndex;if(t.activeOptionIndex!==null){let i=n.options.indexOf(t.virtual.options[t.activeOptionIndex]);r=i===-1?null:i}return{...t,activeOptionIndex:r,virtual:Object.assign({},t.virtual,{options:n.options})}}},Uf=p.createContext(null);Uf.displayName="ComboboxActionsContext";function Zi(t){let n=p.useContext(Uf);if(n===null){let o=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Zi),o}return n}let e0=p.createContext(null);function n$(t){var n;let o=so("VirtualProvider"),[r,i]=p.useMemo(()=>{let u=o.optionsRef.current;if(!u)return[0,0];let d=window.getComputedStyle(u);return[parseFloat(d.paddingBlockStart||d.paddingTop),parseFloat(d.paddingBlockEnd||d.paddingBottom)]},[o.optionsRef.current]),a=G5({scrollPaddingStart:r,scrollPaddingEnd:i,count:o.virtual.options.length,estimateSize(){return 40},getScrollElement(){var u;return(u=o.optionsRef.current)==null?null:u},overscan:12}),[l,c]=p.useState(0);return Qe(()=>{c(u=>u+1)},[(n=o.virtual)==null?void 0:n.options]),S.createElement(e0.Provider,{value:a},S.createElement("div",{style:{position:"relative",width:"100%",height:`${a.getTotalSize()}px`},ref:u=>{if(u){if(typeof process<"u"&&R5.JEST_WORKER_ID!==void 0||o.activationTrigger===0)return;o.activeOptionIndex!==null&&o.virtual.options.length>o.activeOptionIndex&&a.scrollToIndex(o.activeOptionIndex)}}},a.getVirtualItems().map(u=>{var d;return S.createElement(p.Fragment,{key:u.key},S.cloneElement((d=t.children)==null?void 0:d.call(t,{option:o.virtual.options[u.index],open:o.comboboxState===0}),{key:`${l}-${u.key}`,"data-index":u.index,"aria-setsize":o.virtual.options.length,"aria-posinset":u.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${u.start}px)`,overflowAnchor:"none"}}))})))}let Yf=p.createContext(null);Yf.displayName="ComboboxDataContext";function so(t){let n=p.useContext(Yf);if(n===null){let o=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,so),o}return n}function r$(t,n){return ot(n.type,t$,t,n)}let o$=p.Fragment;function i$(t,n){let{value:o,defaultValue:r,onChange:i,form:a,name:l,by:c=null,disabled:u=!1,__demoMode:d=!1,nullable:f=!1,multiple:g=!1,immediate:b=!1,virtual:h=null,...m}=t,v=null,[E=g?[]:void 0,y]=Kw(o,i,r),[k,C]=p.useReducer(r$,{dataRef:p.createRef(),comboboxState:d?0:1,options:[],virtual:null,activeOptionIndex:null,activationTrigger:2,labelId:null}),R=p.useRef(!1),I=p.useRef({static:!1,hold:!1}),T=p.useRef(null),F=p.useRef(null),_=p.useRef(null),J=p.useRef(null),B=pe(typeof c=="string"?(ie,me)=>{let ve=c;return(ie==null?void 0:ie[ve])===(me==null?void 0:me[ve])}:c??((ie,me)=>ie===me)),W=pe(ie=>k.options.findIndex(me=>B(me.dataRef.current.value,ie))),H=p.useCallback(ie=>ot($.mode,{1:()=>E.some(me=>B(me,ie)),0:()=>B(E,ie)}),[E]),D=pe(ie=>k.activeOptionIndex===W(ie)),$=p.useMemo(()=>({...k,immediate:!1,optionsPropsRef:I,labelRef:T,inputRef:F,buttonRef:_,optionsRef:J,value:E,defaultValue:r,disabled:u,mode:g?1:0,virtual:k.virtual,get activeOptionIndex(){if(R.current&&k.activeOptionIndex===null&&0<k.options.length){let ie=k.options.findIndex(me=>!me.dataRef.current.disabled);if(ie!==-1)return ie}return k.activeOptionIndex},calculateIndex:W,compare:B,isSelected:H,isActive:D,nullable:f,__demoMode:d}),[E,r,u,g,f,d,k,v]);Qe(()=>{},[v,void 0]),Qe(()=>{k.dataRef.current=$},[$]),Pf([$.buttonRef,$.inputRef,$.optionsRef],()=>re.closeCombobox(),$.comboboxState===0);let A=p.useMemo(()=>{var ie,me,ve;return{open:$.comboboxState===0,disabled:u,activeIndex:$.activeOptionIndex,activeOption:$.activeOptionIndex===null?null:$.virtual?$.virtual.options[(ie=$.activeOptionIndex)==null?0:ie]:(ve=(me=$.options[$.activeOptionIndex])==null?void 0:me.dataRef.current.value)==null?null:ve,value:E}},[$,u,E]),z=pe(()=>{if($.activeOptionIndex!==null){if($.virtual)se($.virtual.options[$.activeOptionIndex]);else{let{dataRef:ie}=$.options[$.activeOptionIndex];se(ie.current.value)}re.goToOption(Ne.Specific,$.activeOptionIndex)}}),V=pe(()=>{C({type:0}),R.current=!0}),Q=pe(()=>{C({type:1}),R.current=!1}),X=pe((ie,me,ve)=>(R.current=!1,ie===Ne.Specific?C({type:2,focus:Ne.Specific,idx:me,trigger:ve}):C({type:2,focus:ie,trigger:ve}))),M=pe((ie,me)=>(C({type:3,payload:{id:ie,dataRef:me}}),()=>{$.isActive(me.current.value)&&(R.current=!0),C({type:4,id:ie})})),oe=pe(ie=>(C({type:5,id:ie}),()=>C({type:5,id:null}))),se=pe(ie=>ot($.mode,{0(){return y==null?void 0:y(ie)},1(){let me=$.value.slice(),ve=me.findIndex(Be=>B(Be,ie));return ve===-1?me.push(ie):me.splice(ve,1),y==null?void 0:y(me)}})),N=pe(ie=>{C({type:6,trigger:ie})}),re=p.useMemo(()=>({onChange:se,registerOption:M,registerLabel:oe,goToOption:X,closeCombobox:Q,openCombobox:V,setActivationTrigger:N,selectActiveOption:z}),[]),be=n===null?{}:{ref:n},Ce=p.useRef(null),_e=En();return p.useEffect(()=>{Ce.current&&r!==void 0&&_e.addEventListener(Ce.current,"reset",()=>{y==null||y(r)})},[Ce,y]),S.createElement(Uf.Provider,{value:re},S.createElement(Yf.Provider,{value:$},S.createElement(zl,{value:ot($.comboboxState,{0:dt.Open,1:dt.Closed})},l!=null&&E!=null&&qf({[l]:E}).map((ie,me)=>{let[ve,Be]=ie;return S.createElement(Gw,{features:Vf.Hidden,ref:me===0?at=>{var Xe;Ce.current=(Xe=at==null?void 0:at.closest("form"))==null?null:Xe}:void 0,...Ja({key:ve,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,disabled:u,name:ve,value:Be})})}),mt({ourProps:be,theirProps:m,slot:A,defaultTag:o$,name:"Combobox"}))))}let a$="input";function l$(t,n){var o,r,i,a,l,c=Math.abs;let u=un(),{id:d=`headlessui-combobox-input-${u}`,onChange:f,displayValue:g,type:b="text",...h}=t,m=so("Combobox.Input"),v=Zi("Combobox.Input"),E=jt(m.inputRef,n),y=Al(m.inputRef),k=p.useRef(!1),C=En(),R=pe(()=>{v.onChange(null),m.optionsRef.current&&(m.optionsRef.current.scrollTop=0),v.goToOption(Ne.Nothing)}),I=function(){var z;return typeof g=="function"&&m.value!==void 0?(z=g(m.value))==null?"":z:typeof m.value=="string"?m.value:""}();lm((z,V)=>{let[Q,X]=z,[M,oe]=V;if(k.current)return;let se=m.inputRef.current;se&&((oe===0&&X===1||Q!==M)&&(se.value=Q),requestAnimationFrame(()=>{if(!k.current&&se&&(y==null?void 0:y.activeElement)===se){let{selectionStart:N,selectionEnd:re}=se;c((re??0)-(N??0))===0&&N===0&&se.setSelectionRange(se.value.length,se.value.length)}}))},[I,m.comboboxState,y]),lm((z,V)=>{let[Q]=z,[X]=V;if(Q===0&&X===1){if(k.current)return;let M=m.inputRef.current;if(!M)return;let oe=M.value,{selectionStart:se,selectionEnd:N,selectionDirection:re}=M;M.value="",M.value=oe,re===null?M.setSelectionRange(se,N):M.setSelectionRange(se,N,re)}},[m.comboboxState]);let T=p.useRef(!1),F=pe(()=>{T.current=!0}),_=pe(()=>{C.nextFrame(()=>{T.current=!1})}),J=pe(z=>{switch(k.current=!0,z.key){case Ie.Enter:if(k.current=!1,m.comboboxState!==0||T.current)return;if(z.preventDefault(),z.stopPropagation(),m.activeOptionIndex===null)return void v.closeCombobox();v.selectActiveOption(),m.mode===0&&v.closeCombobox();break;case Ie.ArrowDown:return k.current=!1,z.preventDefault(),z.stopPropagation(),ot(m.comboboxState,{0:()=>v.goToOption(Ne.Next),1:()=>v.openCombobox()});case Ie.ArrowUp:return k.current=!1,z.preventDefault(),z.stopPropagation(),ot(m.comboboxState,{0:()=>v.goToOption(Ne.Previous),1:()=>{v.openCombobox(),C.nextFrame(()=>{m.value||v.goToOption(Ne.Last)})}});case Ie.Home:if(z.shiftKey)break;return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Ne.First);case Ie.PageUp:return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Ne.First);case Ie.End:if(z.shiftKey)break;return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Ne.Last);case Ie.PageDown:return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Ne.Last);case Ie.Escape:return k.current=!1,m.comboboxState===0?(z.preventDefault(),m.optionsRef.current&&!m.optionsPropsRef.current.static&&z.stopPropagation(),m.nullable&&m.mode===0&&m.value===null&&R(),v.closeCombobox()):void 0;case Ie.Tab:if(k.current=!1,m.comboboxState!==0)return;m.mode===0&&m.activationTrigger!==1&&v.selectActiveOption(),v.closeCombobox()}}),B=pe(z=>{f==null||f(z),m.nullable&&m.mode===0&&z.target.value===""&&R(),v.openCombobox()}),W=pe(z=>{var V,Q,X;let M=(V=z.relatedTarget)==null?Wr.find(oe=>oe!==z.currentTarget):V;if(k.current=!1,!((Q=m.optionsRef.current)!=null&&Q.contains(M))&&!((X=m.buttonRef.current)!=null&&X.contains(M))&&m.comboboxState===0)return z.preventDefault(),m.mode===0&&(m.nullable&&m.value===null?R():m.activationTrigger!==1&&v.selectActiveOption()),v.closeCombobox()}),H=pe(z=>{var V,Q,X;let M=(V=z.relatedTarget)==null?Wr.find(oe=>oe!==z.currentTarget):V;(Q=m.buttonRef.current)!=null&&Q.contains(M)||(X=m.optionsRef.current)!=null&&X.contains(M)||m.disabled||m.immediate&&m.comboboxState!==0&&(v.openCombobox(),C.nextFrame(()=>{v.setActivationTrigger(1)}))}),D=Ji(()=>{if(m.labelId)return[m.labelId].join(" ")},[m.labelId]),$=p.useMemo(()=>({open:m.comboboxState===0,disabled:m.disabled}),[m]),A={ref:E,id:d,role:"combobox",type:b,"aria-controls":(o=m.optionsRef.current)==null?void 0:o.id,"aria-expanded":m.comboboxState===0,"aria-activedescendant":m.activeOptionIndex===null?void 0:m.virtual?(r=m.options.find(z=>{var V;return!((V=m.virtual)!=null&&V.disabled(z.dataRef.current.value))&&m.compare(z.dataRef.current.value,m.virtual.options[m.activeOptionIndex])}))==null?void 0:r.id:(i=m.options[m.activeOptionIndex])==null?void 0:i.id,"aria-labelledby":D,"aria-autocomplete":"list",defaultValue:(l=(a=t.defaultValue)==null?m.defaultValue===void 0?null:g==null?void 0:g(m.defaultValue):a)==null?m.defaultValue:l,disabled:m.disabled,onCompositionStart:F,onCompositionEnd:_,onKeyDown:J,onChange:B,onFocus:H,onBlur:W};return mt({ourProps:A,theirProps:h,slot:$,defaultTag:a$,name:"Combobox.Input"})}let s$="button";function c$(t,n){var o;let r=so("Combobox.Button"),i=Zi("Combobox.Button"),a=jt(r.buttonRef,n),l=un(),{id:c=`headlessui-combobox-button-${l}`,...u}=t,d=En(),f=pe(v=>{switch(v.key){case Ie.ArrowDown:return v.preventDefault(),v.stopPropagation(),r.comboboxState===1&&i.openCombobox(),d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Ie.ArrowUp:return v.preventDefault(),v.stopPropagation(),r.comboboxState===1&&(i.openCombobox(),d.nextFrame(()=>{r.value||i.goToOption(Ne.Last)})),d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Ie.Escape:return r.comboboxState===0?(v.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&v.stopPropagation(),i.closeCombobox(),d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})})):void 0}}),g=pe(v=>Mf(v.currentTarget)?v.preventDefault():(r.comboboxState===0?i.closeCombobox():(v.preventDefault(),i.openCombobox()),void d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})}))),b=Ji(()=>{if(r.labelId)return[r.labelId,c].join(" ")},[r.labelId,c]),h=p.useMemo(()=>({open:r.comboboxState===0,disabled:r.disabled,value:r.value}),[r]),m={ref:a,id:c,type:If(t,r.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(o=r.optionsRef.current)==null?void 0:o.id,"aria-expanded":r.comboboxState===0,"aria-labelledby":b,disabled:r.disabled,onClick:g,onKeyDown:f};return mt({ourProps:m,theirProps:u,slot:h,defaultTag:s$,name:"Combobox.Button"})}let u$="label";function d$(t,n){let o=un(),{id:r=`headlessui-combobox-label-${o}`,...i}=t,a=so("Combobox.Label"),l=Zi("Combobox.Label"),c=jt(a.labelRef,n);Qe(()=>l.registerLabel(r),[r]);let u=pe(()=>{var f;return(f=a.inputRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]);return mt({ourProps:{ref:c,id:r,onClick:u},theirProps:i,slot:d,defaultTag:u$,name:"Combobox.Label"})}let f$="ul",p$=Er.RenderStrategy|Er.Static;function g$(t,n){let o=un(),{id:r=`headlessui-combobox-options-${o}`,hold:i=!1,...a}=t,l=so("Combobox.Options"),c=jt(l.optionsRef,n),u=Gi(),d=u===null?l.comboboxState===0:(u&dt.Open)===dt.Open;Qe(()=>{var h;l.optionsPropsRef.current.static=(h=t.static)!=null&&h},[l.optionsPropsRef,t.static]),Qe(()=>{l.optionsPropsRef.current.hold=i},[l.optionsPropsRef,i]),Zw({container:l.optionsRef.current,enabled:l.comboboxState===0,accept(h){return h.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});let f=Ji(()=>{var h,m;return(m=l.labelId)==null?(h=l.buttonRef.current)==null?void 0:h.id:m},[l.labelId,l.buttonRef.current]),g=p.useMemo(()=>({open:l.comboboxState===0,option:void 0}),[l]),b={"aria-labelledby":f,role:"listbox","aria-multiselectable":l.mode===1||void 0,id:r,ref:c};return l.virtual&&l.comboboxState===0&&Object.assign(a,{children:S.createElement(n$,null,a.children)}),mt({ourProps:b,theirProps:a,slot:g,defaultTag:f$,features:p$,visible:d,name:"Combobox.Options"})}let h$="li";function m$(t,n){var o;let r=un(),{id:i=`headlessui-combobox-option-${r}`,disabled:a=!1,value:l,order:c=null,...u}=t,d=so("Combobox.Option"),f=Zi("Combobox.Option"),g=d.virtual?d.activeOptionIndex===d.calculateIndex(l):d.activeOptionIndex!==null&&((o=d.options[d.activeOptionIndex])==null?void 0:o.id)===i,b=d.isSelected(l),h=p.useRef(null),m=yn({disabled:a,value:l,domRef:h,order:c}),v=p.useContext(e0),E=jt(n,h,v?v.measureElement:null),y=pe(()=>f.onChange(l));Qe(()=>f.registerOption(i,m),[m,i]);let k=p.useRef(!(d.virtual||d.__demoMode));Qe(()=>{if(d.virtual&&d.__demoMode){let B=Bt();return B.requestAnimationFrame(()=>{k.current=!0}),B.dispose}},[d.virtual,d.__demoMode]),Qe(()=>{if(k.current&&d.comboboxState===0&&g&&d.activationTrigger!==0){let B=Bt();return B.requestAnimationFrame(()=>{var W,H;(H=(W=h.current)==null?void 0:W.scrollIntoView)==null||H.call(W,{block:"nearest"})}),B.dispose}},[h,g,d.comboboxState,d.activationTrigger,d.activeOptionIndex]);let C=pe(B=>{var W;return a||(W=d.virtual)!=null&&W.disabled(l)?B.preventDefault():(y(),dw()||requestAnimationFrame(()=>{var H;return(H=d.inputRef.current)==null?void 0:H.focus({preventScroll:!0})}),void(d.mode===0&&requestAnimationFrame(()=>f.closeCombobox())))}),R=pe(()=>{var B;if(a||(B=d.virtual)!=null&&B.disabled(l))return f.goToOption(Ne.Nothing);let W=d.calculateIndex(l);f.goToOption(Ne.Specific,W)}),I=Tf(),T=pe(B=>I.update(B)),F=pe(B=>{var W;if(!(!I.wasMoved(B)||a||(W=d.virtual)!=null&&W.disabled(l)||g)){let H=d.calculateIndex(l);f.goToOption(Ne.Specific,H,0)}}),_=pe(B=>{var W;I.wasMoved(B)&&(a||(W=d.virtual)!=null&&W.disabled(l)||g&&(d.optionsPropsRef.current.hold||f.goToOption(Ne.Nothing)))}),J=p.useMemo(()=>({active:g,selected:b,disabled:a}),[g,b,a]);return mt({ourProps:{id:i,ref:E,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0||void 0,"aria-selected":b,disabled:void 0,onClick:C,onFocus:R,onPointerEnter:T,onMouseEnter:T,onPointerMove:F,onMouseMove:F,onPointerLeave:_,onMouseLeave:_},theirProps:u,slot:J,defaultTag:h$,name:"Combobox.Option"})}let b$=pt(i$),v$=pt(c$),y$=pt(l$),w$=pt(d$),x$=pt(g$),j$=pt(m$);Object.assign(b$,{Input:y$,Button:v$,Label:w$,Options:x$,Option:j$});p.createContext();j.string,j.node,j.string,j.string,j.bool,j.bool,j.node,j.node,j.string,j.bool,j.string,j.bool,j.string,j.bool,j.func,j.func,j.func,j.func,j.string,j.bool,j.node,j.bool,j.bool,j.string,j.string,j.oneOf(["full","auto"]),j.string;j.string,j.bool,j.string,j.string,j.string;j.string,j.node;var E$=`
  jn-font-bold
  jn-text-lg
  jn-text-theme-high
  jn-pb-2
`,k$=function(t){var n=t.heading,o=n===void 0?"":n,r=t.className,i=r===void 0?"":r,a=t.children,l=a===void 0?null:a,c=lt(t,["heading","className","children"]);return S.createElement("h1",de({className:"juno-content-heading ".concat(E$," ").concat(i)},c),l||o)};j.string,j.node;j.string,j.node;var O$=function(t,n){return`
    `.concat(t?"jn-px-6 ":" ",` 
    `).concat(n?" jn-py-6":"",`
  `)},S$=function(t){var n=t.px,o=t.py,r=t.className,i=r===void 0?"":r,a=t.children,l=a===void 0?null:a,c=lt(t,["px","py","className","children"]);return S.createElement("div",de({className:"juno-container ".concat(O$(n===void 0||n,o!==void 0&&o)," ").concat(i)},c),l)};let sm=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function cm(t){var n,o;let r=(n=t.innerText)==null?"":n,i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let a=!1;for(let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),a=!0;let l=a?(o=i.innerText)==null?"":o:r;return sm.test(l)&&(l=l.replace(sm,"")),l}function C$(t){let n=t.getAttribute("aria-label");if(typeof n=="string")return n.trim();let o=t.getAttribute("aria-labelledby");if(o){let r=o.split(" ").map(i=>{let a=document.getElementById(i);if(a){let l=a.getAttribute("aria-label");return typeof l=="string"?l.trim():cm(a).trim()}return null}).filter(Boolean);if(0<r.length)return r.join(", ")}return cm(t).trim()}function t0(t){let n=p.useRef(""),o=p.useRef("");return pe(()=>{let r=t.current;if(!r)return"";let i=r.innerText;if(n.current===i)return o.current;let a=C$(r).trim().toLowerCase();return n.current=i,o.current=a,a})}var $$=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))($$||{}),P$=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(P$||{}),I$=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t))(I$||{});function Rs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,o=t.activeItemIndex===null?null:t.items[t.activeItemIndex],r=Fl(n(t.items.slice()),a=>a.dataRef.current.domRef.current),i=o?r.indexOf(o):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}let T$={1(t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},0(t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},2:(t,n)=>{var o;let r=Rs(t),i=Za(n,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...r,searchQuery:"",activeItemIndex:i,activationTrigger:(o=n.trigger)==null?1:o}},3:(t,n)=>{let o=t.searchQuery===""?1:0,r=t.searchQuery+n.value.toLowerCase(),i=(t.activeItemIndex===null?t.items:t.items.slice(t.activeItemIndex+o).concat(t.items.slice(0,t.activeItemIndex+o))).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(r))&&!l.dataRef.current.disabled}),a=i?t.items.indexOf(i):-1;return a===-1||a===t.activeItemIndex?{...t,searchQuery:r}:{...t,searchQuery:r,activeItemIndex:a,activationTrigger:1}},4(t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},5:(t,n)=>{let o=Rs(t,r=>[...r,{id:n.id,dataRef:n.dataRef}]);return{...t,...o}},6:(t,n)=>{let o=Rs(t,r=>{let i=r.findIndex(a=>a.id===n.id);return i!==-1&&r.splice(i,1),r});return{...t,...o,activationTrigger:1}}},Kf=p.createContext(null);Kf.displayName="MenuContext";function Yl(t){let n=p.useContext(Kf);if(n===null){let o=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Yl),o}return n}function D$(t,n){return ot(n.type,T$,t,n)}let M$=p.Fragment;function N$(t,n){let{__demoMode:o=!1,...r}=t,i=p.useReducer(D$,{__demoMode:o,menuState:o?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:l,buttonRef:c},u]=i,d=jt(n);Pf([c,l],(b,h)=>{var m;u({type:1}),Ll(h,_l.Loose)||(b.preventDefault(),(m=c.current)==null||m.focus())},a===0);let f=pe(()=>{u({type:1})}),g=p.useMemo(()=>({open:a===0,close:f}),[a,f]);return S.createElement(Kf.Provider,{value:i},S.createElement(zl,{value:ot(a,{0:dt.Open,1:dt.Closed})},mt({ourProps:{ref:d},theirProps:r,slot:g,defaultTag:M$,name:"Menu"})))}let R$="button";function _$(t,n){var o;let r=un(),{id:i=`headlessui-menu-button-${r}`,...a}=t,[l,c]=Yl("Menu.Button"),u=jt(l.buttonRef,n),d=En(),f=pe(v=>{switch(v.key){case Ie.Space:case Ie.Enter:case Ie.ArrowDown:v.preventDefault(),v.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Ne.First}));break;case Ie.ArrowUp:v.preventDefault(),v.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Ne.Last}))}}),g=pe(v=>{switch(v.key){case Ie.Space:v.preventDefault()}}),b=pe(v=>Mf(v.currentTarget)?v.preventDefault():void(t.disabled||(l.menuState===0?(c({type:1}),d.nextFrame(()=>{var E;return(E=l.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})})):(v.preventDefault(),c({type:0}))))),h=p.useMemo(()=>({open:l.menuState===0}),[l]),m={ref:u,id:i,type:If(t,l.buttonRef),"aria-haspopup":"menu","aria-controls":(o=l.itemsRef.current)==null?void 0:o.id,"aria-expanded":l.menuState===0,onKeyDown:f,onKeyUp:g,onClick:b};return mt({ourProps:m,theirProps:a,slot:h,defaultTag:R$,name:"Menu.Button"})}let L$="div",F$=Er.RenderStrategy|Er.Static;function A$(t,n){var o,r;let i=un(),{id:a=`headlessui-menu-items-${i}`,...l}=t,[c,u]=Yl("Menu.Items"),d=jt(c.itemsRef,n),f=Al(c.itemsRef),g=En(),b=Gi(),h=b===null?c.menuState===0:(b&dt.Open)===dt.Open;p.useEffect(()=>{let k=c.itemsRef.current;k&&c.menuState===0&&k!==(f==null?void 0:f.activeElement)&&k.focus({preventScroll:!0})},[c.menuState,c.itemsRef,f]),Zw({container:c.itemsRef.current,enabled:c.menuState===0,accept(k){return k.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:k.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(k){k.setAttribute("role","none")}});let m=pe(k=>{var C,R;switch(g.dispose(),k.key){case Ie.Space:if(c.searchQuery!=="")return k.preventDefault(),k.stopPropagation(),u({type:3,value:k.key});case Ie.Enter:if(k.preventDefault(),k.stopPropagation(),u({type:1}),c.activeItemIndex!==null){let{dataRef:I}=c.items[c.activeItemIndex];(R=(C=I.current)==null?void 0:C.domRef.current)==null||R.click()}uw(c.buttonRef.current);break;case Ie.ArrowDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Ne.Next});case Ie.ArrowUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Ne.Previous});case Ie.Home:case Ie.PageUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Ne.First});case Ie.End:case Ie.PageDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Ne.Last});case Ie.Escape:k.preventDefault(),k.stopPropagation(),u({type:1}),Bt().nextFrame(()=>{var I;return(I=c.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})});break;case Ie.Tab:k.preventDefault(),k.stopPropagation(),u({type:1}),Bt().nextFrame(()=>{$C(c.buttonRef.current,k.shiftKey?Cu.Previous:Cu.Next)});break;default:k.key.length===1&&(u({type:3,value:k.key}),g.setTimeout(()=>u({type:4}),350))}}),v=pe(k=>{switch(k.key){case Ie.Space:k.preventDefault()}}),E=p.useMemo(()=>({open:c.menuState===0}),[c]),y={"aria-activedescendant":c.activeItemIndex===null||(o=c.items[c.activeItemIndex])==null?void 0:o.id,"aria-labelledby":(r=c.buttonRef.current)==null?void 0:r.id,id:a,onKeyDown:m,onKeyUp:v,role:"menu",tabIndex:0,ref:d};return mt({ourProps:y,theirProps:l,slot:E,defaultTag:L$,features:F$,visible:h,name:"Menu.Items"})}let z$=p.Fragment;function H$(t,n){let o=un(),{id:r=`headlessui-menu-item-${o}`,disabled:i=!1,...a}=t,[l,c]=Yl("Menu.Item"),u=l.activeItemIndex!==null&&l.items[l.activeItemIndex].id===r,d=p.useRef(null),f=jt(n,d);Qe(()=>{if(!l.__demoMode&&l.menuState===0&&u&&l.activationTrigger!==0){let I=Bt();return I.requestAnimationFrame(()=>{var T,F;(F=(T=d.current)==null?void 0:T.scrollIntoView)==null||F.call(T,{block:"nearest"})}),I.dispose}},[l.__demoMode,d,u,l.menuState,l.activationTrigger,l.activeItemIndex]);let g=t0(d),b=p.useRef({disabled:i,domRef:d,get textValue(){return g()}});Qe(()=>{b.current.disabled=i},[b,i]),Qe(()=>(c({type:5,id:r,dataRef:b}),()=>c({type:6,id:r})),[b,r]);let h=pe(()=>{c({type:1})}),m=pe(I=>i?I.preventDefault():(c({type:1}),void uw(l.buttonRef.current))),v=pe(()=>i?c({type:2,focus:Ne.Nothing}):void c({type:2,focus:Ne.Specific,id:r})),E=Tf(),y=pe(I=>E.update(I)),k=pe(I=>{E.wasMoved(I)&&(i||u||c({type:2,focus:Ne.Specific,id:r,trigger:0}))}),C=pe(I=>{E.wasMoved(I)&&(i||u&&c({type:2,focus:Ne.Nothing}))}),R=p.useMemo(()=>({active:u,disabled:i,close:h}),[u,i,h]);return mt({ourProps:{id:r,ref:f,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,disabled:void 0,onClick:m,onFocus:v,onPointerEnter:y,onMouseEnter:y,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:R,defaultTag:z$,name:"Menu.Item"})}let B$=pt(N$),W$=pt(_$),V$=pt(A$),q$=pt(H$);Object.assign(B$,{Button:W$,Items:V$,Item:q$});j.string,j.node,j.any,j.bool;S.createContext();j.bool,j.string,j.node;j.number,j.number,j.bool,j.string,j.node;p.createContext();j.bool,j.string,j.bool,j.node,j.node,j.string,j.bool,j.bool,j.string,j.string,j.func,j.func,j.bool,j.node,j.bool,j.string;j.bool,j.bool,j.string,j.func;j.string,j.node,j.bool,j.bool,j.func;var U$=`
	jn-grid
	jn-items-stretch
`,Y$=function(t,n,o,r,i){var a;if(i&&0<i.length)return a={gridTemplateColumns:i},a;var l="";if(r&&Array.isArray(r)&&0<r.length){var c=aE([],Array(t));c.map(function(u,d){l+=r.includes(d)?"min-content ":"minmax(".concat(o,", ").concat(n,") ")})}else l="repeat(".concat(t,", minmax(").concat(o,", ").concat(n,"))");return a={gridTemplateColumns:l},a},n0=S.createContext({}),K$=function(){return S.useContext(n0)},r0=function(t){var n=t.columns,o=n===void 0?1:n,r=t.columnMaxSize,i=r===void 0?"auto":r,a=t.columnMinSize,l=a===void 0?"0px":a,c=t.minContentColumns,u=t.gridColumnTemplate,d=t.cellVerticalAlignment,f=d===void 0?"center":d,g=t.className,b=g===void 0?"":g,h=t.children,m=h===void 0?null:h,v=lt(t,["columns","columnMaxSize","columnMinSize","minContentColumns","gridColumnTemplate","cellVerticalAlignment","className","children"]);return S.createElement(n0.Provider,{value:{cellVerticalAlignment:f}},S.createElement("div",de({className:"juno-datagrid ".concat(U$," ").concat(b),style:Y$(o,i,l,c,u),role:"grid"},v),m))},G$=function(t,n){return`
		`.concat(t?"jn-whitespace-nowrap":"",`
		`).concat(n==="center"?`
				jn-justify-center
				jn-flex
				jn-flex-col		
			`:"",`
		jn-px-5
		jn-py-3
		jn-border-b
		jn-border-theme-background-lvl-2
		jn-h-full
	`)},Q$=function(t){var n;return t&&(n={gridColumn:"span ".concat(t," / span ").concat(t)}),n},Xt=p.forwardRef(function(t,n){var o=t.colSpan,r=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=lt(t,["colSpan","nowrap","className","children"]),d=K$()||{},f=d.cellVerticalAlignment;return S.createElement("div",de({className:"juno-datagrid-cell ".concat(G$(r!==void 0&&r,f)," ").concat(a),style:Q$(o),role:"gridcell",ref:n},u),c)});Xt.displayName="DataGridCell";var J$=`
	jn-font-bold
	jn-text-theme-high
	jn-bg-theme-background-lvl-1
	jn-border-theme-background-lvl-0
`,wo=p.forwardRef(function(t,n){var o=t.colSpan,r=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=lt(t,["colSpan","nowrap","className","children"]);return S.createElement(Xt,de({colSpan:o,nowrap:r!==void 0&&r,className:"juno-datagrid-head-cell ".concat(J$," ").concat(a),role:"columnheader",ref:n},u),c)});wo.displayName="DataGridHeadCell";var Z$=`
	jn-contents
`,Kr=p.forwardRef(function(t,n){var o=t.className,r=o===void 0?"":o,i=t.children,a=i===void 0?null:i,l=lt(t,["className","children"]);return S.createElement("div",de({className:"juno-datagrid-row ".concat(Z$," ").concat(r),role:"row",ref:n},l),a)});Kr.displayName="DataGridRow";var _s=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],So={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var o=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-o.getTime())/864e5-3+(o.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},Mi={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(3<n&&21>n)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},Ft=function(t,n){return n===void 0&&(n=2),("000"+t).slice(-1*n)},on=function(t){return t===!0?1:0};function um(t,n){var o;return function(){var r=this,i=arguments;clearTimeout(o),o=setTimeout(function(){return t.apply(r,i)},n)}}var Ls=function(t){return t instanceof Array?t:[t]};function Tt(t,n,o){return o===!0?t.classList.add(n):void t.classList.remove(n)}function We(t,n,o){var r=window.document.createElement(t);return n=n||"",o=o||"",r.className=n,o!==void 0&&(r.textContent=o),r}function va(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function o0(t,n){return n(t)?t:t.parentNode?o0(t.parentNode,n):void 0}function ya(t,n){var o=We("div","numInputWrapper"),r=We("input","numInput "+t),i=We("span","arrowUp"),a=We("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),n!==void 0)for(var l in n)r.setAttribute(l,n[l]);return o.appendChild(r),o.appendChild(i),o.appendChild(a),o}function Yt(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var Fs=function(){},il=function(t,n,o){return o.months[n?"shorthand":"longhand"][t]},X$={D:Fs,F:function(t,n,o){t.setMonth(o.months.longhand.indexOf(n))},G:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,o){t.setHours(t.getHours()%12+12*on(new RegExp(o.amPM[1],"i").test(n)))},M:function(t,n,o){t.setMonth(o.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(1e3*parseFloat(n))},W:function(t,n,o){var r=parseInt(n),i=new Date(t.getFullYear(),0,2+7*(r-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+o.firstDayOfWeek),i},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:Fs,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:Fs,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},Vr={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ki={Z:function(t){return t.toISOString()},D:function(t,n,o){return n.weekdays.shorthand[ki.w(t,n,o)]},F:function(t,n,o){return il(ki.n(t,n,o)-1,!1,n)},G:function(t,n,o){return Ft(ki.h(t,n,o))},H:function(t){return Ft(t.getHours())},J:function(t,n){return n.ordinal===void 0?t.getDate():t.getDate()+n.ordinal(t.getDate())},K:function(t,n){return n.amPM[on(11<t.getHours())]},M:function(t,n){return il(t.getMonth(),!0,n)},S:function(t){return Ft(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,o){return o.getWeek(t)},Y:function(t){return Ft(t.getFullYear(),4)},d:function(t){return Ft(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return Ft(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return Ft(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return(t.getFullYear()+"").substring(2)}},i0=function(t){var n=t.config,o=n===void 0?So:n,r=t.l10n,i=r===void 0?Mi:r,a=t.isMobile;return function(l,c,u){var d=u||i;return o.formatDate===void 0||a!==void 0&&a?c.split("").map(function(f,g,b){return ki[f]&&b[g-1]!=="\\"?ki[f](l,d,o):f==="\\"?"":f}).join(""):o.formatDate(l,c,d)}},Nu=function(t){var n=t.config,o=n===void 0?So:n,r=t.l10n,i=r===void 0?Mi:r;return function(a,l,c,u){if(a===0||a){var d;if(a instanceof Date)d=new Date(a.getTime());else if(typeof a!="string"&&a.toFixed!==void 0)d=new Date(a);else if(typeof a=="string"){var f=l||(o||So).dateFormat,g=(a+"").trim();if(g==="today")d=new Date,c=!0;else if(o&&o.parseDate)d=o.parseDate(a,f);else if(/Z$/.test(g)||/GMT$/.test(g))d=new Date(a);else{for(var b=void 0,h=[],m=0,v=0,E="";m<f.length;m++){var y=f[m],k=y==="\\",C=f[m-1]==="\\"||k;if(Vr[y]&&!C){E+=Vr[y];var R=new RegExp(E).exec(a);R&&(b=!0)&&h[y==="Y"?"unshift":"push"]({fn:X$[y],val:R[++v]})}else k||(E+=".")}d=o&&o.noCalendar?new Date(new Date().setHours(0,0,0,0)):new Date(new Date().getFullYear(),0,1,0,0,0,0),h.forEach(function(I){var T=I.fn,F=I.val;return d=T(d,F,u||i)||d}),d=b?d:void 0}}return!(d instanceof Date)||isNaN(d.getTime())?void o.errorHandler(new Error("Invalid date provided: "+a)):(c===!0&&d.setHours(0,0,0,0),d)}}};function Gt(t,n,o){return o===void 0&&(o=!0),o===!1?t.getTime()-n.getTime():new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0)}var eP=function(t,n,o){return t>Math.min(n,o)&&t<Math.max(n,o)},As=function(t,n,o){return 3600*t+60*n+o},tP=function(t){var n=Math.floor(t/3600),o=(t-3600*n)/60;return[n,o,t-3600*n-60*o]},nP={DAY:864e5};function zs(t){var n=Math.min,o=t.defaultHour,r=t.defaultMinute,i=t.defaultSeconds;if(t.minDate!==void 0){var a=t.minDate.getHours(),l=t.minDate.getMinutes(),c=t.minDate.getSeconds();o<a&&(o=a),o===a&&r<l&&(r=l),o===a&&r===l&&i<c&&(i=t.minDate.getSeconds())}if(t.maxDate!==void 0){var u=t.maxDate.getHours(),d=t.maxDate.getMinutes();o=n(o,u),o===u&&(r=n(d,r)),o===u&&r===d&&(i=t.maxDate.getSeconds())}return{hours:o,minutes:r,seconds:i}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var r,i=function(c){c&&Object.keys(c).forEach(function(u){return t[u]=c[u]})},a=0,l=n;a<l.length;a++)r=l[a],i(r);return t});var St=function(){return St=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++)for(var i in n=arguments[o],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},St.apply(this,arguments)},dm=function(){for(var t=0,n=0,o=arguments.length;n<o;n++)t+=arguments[n].length;for(var r=Array(t),i=0,n=0;n<o;n++)for(var a=arguments[n],l=0,c=a.length;l<c;l++,i++)r[i]=a[l];return r},rP=300;function oP(t,n){var o=Math.abs,r=Math.max,i=Math.min;function a(){s.utils={getDaysInMonth:function(x,O){return x===void 0&&(x=s.currentMonth),O===void 0&&(O=s.currentYear),x===1&&(O%4==0&&O%100!=0||O%400==0)?29:s.l10n.daysInMonth[x]}}}function l(){s.element=s.input=t,s.isOpen=!1,ir(),Mr(),pn(),Pt(),a(),s.isMobile||F(),C(),(s.selectedDates.length||s.config.noCalendar)&&(s.config.enableTime&&m(s.config.noCalendar?s.latestSelectedDateObj:void 0),qt(!1)),d();var x=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!s.isMobile&&x&&Yn(),Fe("onReady")}function c(){var x;return((x=s.calendarContainer)===null||x===void 0?void 0:x.getRootNode()).activeElement||document.activeElement}function u(x){return x.bind(s)}function d(){var x=s.config;x.weekNumbers===!1&&x.showMonths===1||x.noCalendar!==!0&&window.requestAnimationFrame(function(){if(s.calendarContainer!==void 0&&(s.calendarContainer.style.visibility="hidden",s.calendarContainer.style.display="block"),s.daysContainer!==void 0){var O=(s.days.offsetWidth+1)*x.showMonths;s.daysContainer.style.width=O+"px",s.calendarContainer.style.width=O+(s.weekWrapper===void 0?0:s.weekWrapper.offsetWidth)+"px",s.calendarContainer.style.removeProperty("visibility"),s.calendarContainer.style.removeProperty("display")}})}function f(x){if(s.selectedDates.length===0){var O=s.config.minDate===void 0||0<=Gt(new Date,s.config.minDate)?new Date:new Date(s.config.minDate.getTime()),P=zs(s.config);O.setHours(P.hours,P.minutes,P.seconds,O.getMilliseconds()),s.selectedDates=[O],s.latestSelectedDateObj=O}x!==void 0&&x.type!=="blur"&&_r(x);var L=s._input.value;h(),qt(),s._input.value!==L&&s._debouncedChange()}function g(x,O){return x%12+12*on(O===s.l10n.amPM[1])}function b(x){switch(x%24){case 0:case 12:return 12;default:return x%12}}function h(){if(s.hourElement!==void 0&&s.minuteElement!==void 0){var x=(parseInt(s.hourElement.value.slice(-2),10)||0)%24,O=(parseInt(s.minuteElement.value,10)||0)%60,P=s.secondElement===void 0?0:(parseInt(s.secondElement.value,10)||0)%60;s.amPM!==void 0&&(x=g(x,s.amPM.textContent));var L=s.config.minTime!==void 0||s.config.minDate&&s.minDateHasTime&&s.latestSelectedDateObj&&Gt(s.latestSelectedDateObj,s.config.minDate,!0)===0,Y=s.config.maxTime!==void 0||s.config.maxDate&&s.maxDateHasTime&&s.latestSelectedDateObj&&Gt(s.latestSelectedDateObj,s.config.maxDate,!0)===0;if(s.config.maxTime!==void 0&&s.config.minTime!==void 0&&s.config.minTime>s.config.maxTime){var Z=As(s.config.minTime.getHours(),s.config.minTime.getMinutes(),s.config.minTime.getSeconds()),ue=As(s.config.maxTime.getHours(),s.config.maxTime.getMinutes(),s.config.maxTime.getSeconds()),te=As(x,O,P);if(te>ue&&te<Z){var fe=tP(Z);x=fe[0],O=fe[1],P=fe[2]}}else{if(Y){var ne=s.config.maxTime===void 0?s.config.maxDate:s.config.maxTime;x=i(x,ne.getHours()),x===ne.getHours()&&(O=i(O,ne.getMinutes())),O===ne.getMinutes()&&(P=i(P,ne.getSeconds()))}if(L){var ae=s.config.minTime===void 0?s.config.minDate:s.config.minTime;x=r(x,ae.getHours()),x===ae.getHours()&&O<ae.getMinutes()&&(O=ae.getMinutes()),O===ae.getMinutes()&&(P=r(P,ae.getSeconds()))}}v(x,O,P)}}function m(x){var O=x||s.latestSelectedDateObj;O&&O instanceof Date&&v(O.getHours(),O.getMinutes(),O.getSeconds())}function v(x,O,P){s.latestSelectedDateObj!==void 0&&s.latestSelectedDateObj.setHours(x%24,O,P||0,0),s.hourElement&&s.minuteElement&&!s.isMobile&&(s.hourElement.value=Ft(s.config.time_24hr?x:(12+x)%12+12*on(x%12==0)),s.minuteElement.value=Ft(O),s.amPM!==void 0&&(s.amPM.textContent=s.l10n.amPM[on(12<=x)]),s.secondElement!==void 0&&(s.secondElement.value=Ft(P)))}function E(x){var O=Yt(x),P=parseInt(O.value)+(x.delta||0);(1<P/1e3||x.key==="Enter"&&!/[^\d]/.test(P.toString()))&&me(P)}function y(x,O,P,L){return O instanceof Array?O.forEach(function(Y){return y(x,Y,P,L)}):x instanceof Array?x.forEach(function(Y){return y(Y,O,P,L)}):(x.addEventListener(O,P,L),void s._handlers.push({remove:function(){return x.removeEventListener(O,P,L)}}))}function k(){Fe("onChange")}function C(){if(s.config.wrap&&["open","close","toggle","clear"].forEach(function(P){Array.prototype.forEach.call(s.element.querySelectorAll("[data-"+P+"]"),function(L){return y(L,"click",s[P])})}),s.isMobile)return void gn();var x=um(Un,50);if(s._debouncedChange=um(k,rP),s.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&y(s.daysContainer,"mouseover",function(P){s.config.mode==="range"&&Vt(Yt(P))}),y(s._input,"keydown",Xe),s.calendarContainer!==void 0&&y(s.calendarContainer,"keydown",Xe),s.config.inline||s.config.static||y(window,"resize",x),window.ontouchstart===void 0?y(window.document,"mousedown",ie):y(window.document,"touchstart",ie),y(window.document,"focus",ie,{capture:!0}),s.config.clickOpens===!0&&(y(s._input,"focus",s.open),y(s._input,"click",s.open)),s.daysContainer!==void 0&&(y(s.monthNav,"click",Rr),y(s.monthNav,["keyup","increment"],E),y(s.daysContainer,"click",ee)),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0){var O=function(P){return Yt(P).select()};y(s.timeContainer,["increment"],f),y(s.timeContainer,"blur",f,{capture:!0}),y(s.timeContainer,"click",I),y([s.hourElement,s.minuteElement],["focus","click"],O),s.secondElement!==void 0&&y(s.secondElement,"focus",function(){return s.secondElement&&s.secondElement.select()}),s.amPM!==void 0&&y(s.amPM,"click",function(P){f(P)})}s.config.allowInput&&y(s._input,"blur",at)}function R(x,O){var P=x===void 0?s.latestSelectedDateObj||(s.config.minDate&&s.config.minDate>s.now?s.config.minDate:s.config.maxDate&&s.config.maxDate<s.now?s.config.maxDate:s.now):s.parseDate(x),L=s.currentYear,Y=s.currentMonth;try{P!==void 0&&(s.currentYear=P.getFullYear(),s.currentMonth=P.getMonth())}catch(Z){Z.message="Invalid date supplied: "+P,s.config.errorHandler(Z)}O&&s.currentYear!==L&&(Fe("onYearChange"),A()),O&&(s.currentYear!==L||s.currentMonth!==Y)&&Fe("onMonthChange"),s.redraw()}function I(x){var O=Yt(x);~O.className.indexOf("arrow")&&T(x,O.classList.contains("arrowUp")?1:-1)}function T(x,O,P){var L=x&&Yt(x),Y=P||L&&L.parentNode&&L.parentNode.firstChild,Z=It("increment");Z.delta=O,Y&&Y.dispatchEvent(Z)}function F(){var x=window.document.createDocumentFragment();if(s.calendarContainer=We("div","flatpickr-calendar"),s.calendarContainer.tabIndex=-1,!s.config.noCalendar){if(x.appendChild(Q()),s.innerContainer=We("div","flatpickr-innerContainer"),s.config.weekNumbers){var O=se(),P=O.weekWrapper,L=O.weekNumbers;s.innerContainer.appendChild(P),s.weekNumbers=L,s.weekWrapper=P}s.rContainer=We("div","flatpickr-rContainer"),s.rContainer.appendChild(M()),s.daysContainer||(s.daysContainer=We("div","flatpickr-days"),s.daysContainer.tabIndex=-1),$(),s.rContainer.appendChild(s.daysContainer),s.innerContainer.appendChild(s.rContainer),x.appendChild(s.innerContainer)}s.config.enableTime&&x.appendChild(X()),Tt(s.calendarContainer,"rangeMode",s.config.mode==="range"),Tt(s.calendarContainer,"animate",s.config.animate===!0),Tt(s.calendarContainer,"multiMonth",1<s.config.showMonths),s.calendarContainer.appendChild(x);var Y=s.config.appendTo!==void 0&&s.config.appendTo.nodeType!==void 0;if((s.config.inline||s.config.static)&&(s.calendarContainer.classList.add(s.config.inline?"inline":"static"),s.config.inline&&(!Y&&s.element.parentNode?s.element.parentNode.insertBefore(s.calendarContainer,s._input.nextSibling):s.config.appendTo!==void 0&&s.config.appendTo.appendChild(s.calendarContainer)),s.config.static)){var Z=We("div","flatpickr-wrapper");s.element.parentNode&&s.element.parentNode.insertBefore(Z,s.element),Z.appendChild(s.element),s.altInput&&Z.appendChild(s.altInput),Z.appendChild(s.calendarContainer)}s.config.static||s.config.inline||(s.config.appendTo===void 0?window.document.body:s.config.appendTo).appendChild(s.calendarContainer)}function _(x,O,P,L){var Y=ve(O,!0),Z=We("span",x,O.getDate().toString());return Z.dateObj=O,Z.$i=L,Z.setAttribute("aria-label",s.formatDate(O,s.config.ariaDateFormat)),x.indexOf("hidden")===-1&&Gt(O,s.now)===0&&(s.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),Y?(Z.tabIndex=-1,kt(O)&&(Z.classList.add("selected"),s.selectedDateElem=Z,s.config.mode==="range"&&(Tt(Z,"startRange",s.selectedDates[0]&&Gt(O,s.selectedDates[0],!0)===0),Tt(Z,"endRange",s.selectedDates[1]&&Gt(O,s.selectedDates[1],!0)===0),x==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),s.config.mode==="range"&&mn(O)&&!kt(O)&&Z.classList.add("inRange"),s.weekNumbers&&s.config.showMonths===1&&x!=="prevMonthDay"&&L%7==6&&s.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+s.config.getWeek(O)+"</span>"),Fe("onDayCreate",Z),Z}function J(x){x.focus(),s.config.mode==="range"&&Vt(x)}function B(x){for(var O=0<x?0:s.config.showMonths-1,P=0<x?s.config.showMonths:-1,L=O;L!=P;L+=x)for(var Y,Z=s.daysContainer.children[L],ue=0<x?0:Z.children.length-1,te=0<x?Z.children.length:-1,fe=ue;fe!=te;fe+=x)if(Y=Z.children[fe],Y.className.indexOf("hidden")===-1&&ve(Y.dateObj))return Y}function W(x,O){for(var P=x.className.indexOf("Month")===-1?x.dateObj.getMonth():s.currentMonth,L=0<O?s.config.showMonths:-1,Y=0<O?1:-1,Z=P-s.currentMonth;Z!=L;Z+=Y)for(var ue,te=s.daysContainer.children[Z],fe=P-s.currentMonth===Z?x.$i+O:0>O?te.children.length-1:0,ne=te.children.length,ae=fe;0<=ae&&ae<ne&&ae!=(0<O?ne:-1);ae+=Y)if(ue=te.children[ae],ue.className.indexOf("hidden")===-1&&ve(ue.dateObj)&&o(x.$i-ae)>=o(O))return J(ue);return s.changeMonth(Y),void H(B(Y),0)}function H(x,O){var P=c(),L=Be(P||document.body),Y=x===void 0?L?P:s.selectedDateElem!==void 0&&Be(s.selectedDateElem)?s.selectedDateElem:s.todayDateElem!==void 0&&Be(s.todayDateElem)?s.todayDateElem:B(0<O?1:-1):x;Y===void 0?s._input.focus():L?W(Y,O):J(Y)}function D(x,O){for(var P=(new Date(x,O,1).getDay()-s.l10n.firstDayOfWeek+7)%7,L=s.utils.getDaysInMonth((O-1+12)%12,x),Y=s.utils.getDaysInMonth(O,x),Z=window.document.createDocumentFragment(),ue=1<s.config.showMonths,te=ue?"prevMonthDay hidden":"prevMonthDay",fe=ue?"nextMonthDay hidden":"nextMonthDay",ne=L+1-P,ae=0;ne<=L;ne++,ae++)Z.appendChild(_("flatpickr-day "+te,new Date(x,O-1,ne),ne,ae));for(ne=1;ne<=Y;ne++,ae++)Z.appendChild(_("flatpickr-day",new Date(x,O,ne),ne,ae));for(var je=Y+1;je<=42-P&&(s.config.showMonths===1||ae%7!=0);je++,ae++)Z.appendChild(_("flatpickr-day "+fe,new Date(x,O+1,je%Y),je,ae));var ut=We("div","dayContainer");return ut.appendChild(Z),ut}function $(){if(s.daysContainer!==void 0){va(s.daysContainer),s.weekNumbers&&va(s.weekNumbers);for(var x,O=document.createDocumentFragment(),P=0;P<s.config.showMonths;P++)x=new Date(s.currentYear,s.currentMonth,1),x.setMonth(s.currentMonth+P),O.appendChild(D(x.getFullYear(),x.getMonth()));s.daysContainer.appendChild(O),s.days=s.daysContainer.firstChild,s.config.mode==="range"&&s.selectedDates.length===1&&Vt()}}function A(){if(!(1<s.config.showMonths||s.config.monthSelectorType!=="dropdown")){var x=function(L){return!(s.config.minDate!==void 0&&s.currentYear===s.config.minDate.getFullYear()&&L<s.config.minDate.getMonth())&&!(s.config.maxDate!==void 0&&s.currentYear===s.config.maxDate.getFullYear()&&L>s.config.maxDate.getMonth())};s.monthsDropdownContainer.tabIndex=-1,s.monthsDropdownContainer.innerHTML="";for(var O=0;12>O;O++)if(x(O)){var P=We("option","flatpickr-monthDropdown-month");P.value=new Date(s.currentYear,O).getMonth().toString(),P.textContent=il(O,s.config.shorthandCurrentMonth,s.l10n),P.tabIndex=-1,s.currentMonth===O&&(P.selected=!0),s.monthsDropdownContainer.appendChild(P)}}}function z(){var x,O=We("div","flatpickr-month"),P=window.document.createDocumentFragment();1<s.config.showMonths||s.config.monthSelectorType==="static"?x=We("span","cur-month"):(s.monthsDropdownContainer=We("select","flatpickr-monthDropdown-months"),s.monthsDropdownContainer.setAttribute("aria-label",s.l10n.monthAriaLabel),y(s.monthsDropdownContainer,"change",function(ue){var te=Yt(ue),fe=parseInt(te.value,10);s.changeMonth(fe-s.currentMonth),Fe("onMonthChange")}),A(),x=s.monthsDropdownContainer);var L=ya("cur-year",{tabindex:"-1"}),Y=L.getElementsByTagName("input")[0];Y.setAttribute("aria-label",s.l10n.yearAriaLabel),s.config.minDate&&Y.setAttribute("min",s.config.minDate.getFullYear().toString()),s.config.maxDate&&(Y.setAttribute("max",s.config.maxDate.getFullYear().toString()),Y.disabled=!!s.config.minDate&&s.config.minDate.getFullYear()===s.config.maxDate.getFullYear());var Z=We("div","flatpickr-current-month");return Z.appendChild(x),Z.appendChild(L),P.appendChild(Z),O.appendChild(P),{container:O,yearElement:Y,monthElement:x}}function V(){va(s.monthNav),s.monthNav.appendChild(s.prevMonthNav),s.config.showMonths&&(s.yearElements=[],s.monthElements=[]);for(var x,O=s.config.showMonths;O--;)x=z(),s.yearElements.push(x.yearElement),s.monthElements.push(x.monthElement),s.monthNav.appendChild(x.container);s.monthNav.appendChild(s.nextMonthNav)}function Q(){return s.monthNav=We("div","flatpickr-months"),s.yearElements=[],s.monthElements=[],s.prevMonthNav=We("span","flatpickr-prev-month"),s.prevMonthNav.innerHTML=s.config.prevArrow,s.nextMonthNav=We("span","flatpickr-next-month"),s.nextMonthNav.innerHTML=s.config.nextArrow,V(),Object.defineProperty(s,"_hidePrevMonthArrow",{get:function(){return s.__hidePrevMonthArrow},set:function(x){s.__hidePrevMonthArrow!==x&&(Tt(s.prevMonthNav,"flatpickr-disabled",x),s.__hidePrevMonthArrow=x)}}),Object.defineProperty(s,"_hideNextMonthArrow",{get:function(){return s.__hideNextMonthArrow},set:function(x){s.__hideNextMonthArrow!==x&&(Tt(s.nextMonthNav,"flatpickr-disabled",x),s.__hideNextMonthArrow=x)}}),s.currentYearElement=s.yearElements[0],mo(),s.monthNav}function X(){s.calendarContainer.classList.add("hasTime"),s.config.noCalendar&&s.calendarContainer.classList.add("noCalendar");var x=zs(s.config);s.timeContainer=We("div","flatpickr-time"),s.timeContainer.tabIndex=-1;var O=We("span","flatpickr-time-separator",":"),P=ya("flatpickr-hour",{"aria-label":s.l10n.hourAriaLabel});s.hourElement=P.getElementsByTagName("input")[0];var L=ya("flatpickr-minute",{"aria-label":s.l10n.minuteAriaLabel});if(s.minuteElement=L.getElementsByTagName("input")[0],s.hourElement.tabIndex=s.minuteElement.tabIndex=-1,s.hourElement.value=Ft(s.latestSelectedDateObj?s.latestSelectedDateObj.getHours():s.config.time_24hr?x.hours:b(x.hours)),s.minuteElement.value=Ft(s.latestSelectedDateObj?s.latestSelectedDateObj.getMinutes():x.minutes),s.hourElement.setAttribute("step",s.config.hourIncrement.toString()),s.minuteElement.setAttribute("step",s.config.minuteIncrement.toString()),s.hourElement.setAttribute("min",s.config.time_24hr?"0":"1"),s.hourElement.setAttribute("max",s.config.time_24hr?"23":"12"),s.hourElement.setAttribute("maxlength","2"),s.minuteElement.setAttribute("min","0"),s.minuteElement.setAttribute("max","59"),s.minuteElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(P),s.timeContainer.appendChild(O),s.timeContainer.appendChild(L),s.config.time_24hr&&s.timeContainer.classList.add("time24hr"),s.config.enableSeconds){s.timeContainer.classList.add("hasSeconds");var Y=ya("flatpickr-second");s.secondElement=Y.getElementsByTagName("input")[0],s.secondElement.value=Ft(s.latestSelectedDateObj?s.latestSelectedDateObj.getSeconds():x.seconds),s.secondElement.setAttribute("step",s.minuteElement.getAttribute("step")),s.secondElement.setAttribute("min","0"),s.secondElement.setAttribute("max","59"),s.secondElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(We("span","flatpickr-time-separator",":")),s.timeContainer.appendChild(Y)}return s.config.time_24hr||(s.amPM=We("span","flatpickr-am-pm",s.l10n.amPM[on(11<(s.latestSelectedDateObj?s.hourElement.value:s.config.defaultHour))]),s.amPM.title=s.l10n.toggleTitle,s.amPM.tabIndex=-1,s.timeContainer.appendChild(s.amPM)),s.timeContainer}function M(){s.weekdayContainer?va(s.weekdayContainer):s.weekdayContainer=We("div","flatpickr-weekdays");for(var x,O=s.config.showMonths;O--;)x=We("div","flatpickr-weekdaycontainer"),s.weekdayContainer.appendChild(x);return oe(),s.weekdayContainer}function oe(){if(s.weekdayContainer){var x=s.l10n.firstDayOfWeek,O=dm(s.l10n.weekdays.shorthand);0<x&&x<O.length&&(O=dm(O.splice(x,O.length),O.splice(0,x)));for(var P=s.config.showMonths;P--;)s.weekdayContainer.children[P].innerHTML=`
      <span class='flatpickr-weekday'>
        `+O.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function se(){s.calendarContainer.classList.add("hasWeeks");var x=We("div","flatpickr-weekwrapper");x.appendChild(We("span","flatpickr-weekday",s.l10n.weekAbbreviation));var O=We("div","flatpickr-weeks");return x.appendChild(O),{weekWrapper:x,weekNumbers:O}}function N(x,O){O===void 0&&(O=!0);var P=O?x:x-s.currentMonth;0>P&&s._hidePrevMonthArrow===!0||0<P&&s._hideNextMonthArrow===!0||(s.currentMonth+=P,(0>s.currentMonth||11<s.currentMonth)&&(s.currentYear+=11<s.currentMonth?1:-1,s.currentMonth=(s.currentMonth+12)%12,Fe("onYearChange"),A()),$(),Fe("onMonthChange"),mo())}function re(x,O){if(x===void 0&&(x=!0),O===void 0&&(O=!0),s.input.value="",s.altInput!==void 0&&(s.altInput.value=""),s.mobileInput!==void 0&&(s.mobileInput.value=""),s.selectedDates=[],s.latestSelectedDateObj=void 0,O===!0&&(s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth()),s.config.enableTime===!0){var P=zs(s.config),L=P.hours,Y=P.minutes,Z=P.seconds;v(L,Y,Z)}s.redraw(),x&&Fe("onChange")}function be(){s.isOpen=!1,s.isMobile||(s.calendarContainer!==void 0&&s.calendarContainer.classList.remove("open"),s._input!==void 0&&s._input.classList.remove("active")),Fe("onClose")}function Ce(){s.config!==void 0&&Fe("onDestroy");for(var x=s._handlers.length;x--;)s._handlers[x].remove();if(s._handlers=[],s.mobileInput)s.mobileInput.parentNode&&s.mobileInput.parentNode.removeChild(s.mobileInput),s.mobileInput=void 0;else if(s.calendarContainer&&s.calendarContainer.parentNode)if(s.config.static&&s.calendarContainer.parentNode){var O=s.calendarContainer.parentNode;if(O.lastChild&&O.removeChild(O.lastChild),O.parentNode){for(;O.firstChild;)O.parentNode.insertBefore(O.firstChild,O);O.parentNode.removeChild(O)}}else s.calendarContainer.parentNode.removeChild(s.calendarContainer);s.altInput&&(s.input.type="text",s.altInput.parentNode&&s.altInput.parentNode.removeChild(s.altInput),delete s.altInput),s.input&&(s.input.type=s.input._type,s.input.classList.remove("flatpickr-input"),s.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(P){try{delete s[P]}catch{}})}function _e(x){return s.calendarContainer.contains(x)}function ie(x){if(s.isOpen&&!s.config.inline){var O=Yt(x),P=_e(O),L=O===s.input||O===s.altInput||s.element.contains(O)||x.path&&x.path.indexOf&&(~x.path.indexOf(s.input)||~x.path.indexOf(s.altInput)),Y=!L&&!P&&!_e(x.relatedTarget),Z=!s.config.ignoredFocusElements.some(function(ue){return ue.contains(O)});Y&&Z&&(s.config.allowInput&&s.setDate(s._input.value,!1,s.config.altInput?s.config.altFormat:s.config.dateFormat),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0&&s.input.value!==""&&s.input.value!==void 0&&f(),s.close(),s.config&&s.config.mode==="range"&&s.selectedDates.length===1&&s.clear(!1))}}function me(x){if(!(!x||s.config.minDate&&x<s.config.minDate.getFullYear()||s.config.maxDate&&x>s.config.maxDate.getFullYear())){var O=x,P=s.currentYear!==O;s.currentYear=O||s.currentYear,s.config.maxDate&&s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth=i(s.config.maxDate.getMonth(),s.currentMonth):s.config.minDate&&s.currentYear===s.config.minDate.getFullYear()&&(s.currentMonth=r(s.config.minDate.getMonth(),s.currentMonth)),P&&(s.redraw(),Fe("onYearChange"),A())}}function ve(x,O){var P;O===void 0&&(O=!0);var L=s.parseDate(x,void 0,O);if(s.config.minDate&&L&&0>Gt(L,s.config.minDate,O===void 0?!s.minDateHasTime:O)||s.config.maxDate&&L&&0<Gt(L,s.config.maxDate,O===void 0?!s.maxDateHasTime:O))return!1;if(!s.config.enable&&s.config.disable.length===0)return!0;if(L===void 0)return!1;for(var Y=!!s.config.enable,Z=(P=s.config.enable)!==null&&P!==void 0?P:s.config.disable,ue=0,te=void 0;ue<Z.length;ue++){if(te=Z[ue],typeof te=="function"&&te(L)||te instanceof Date&&L!==void 0&&te.getTime()===L.getTime())return Y;if(typeof te=="string"){var fe=s.parseDate(te,void 0,!0);return fe&&fe.getTime()===L.getTime()?Y:!Y}if(typeof te=="object"&&L!==void 0&&te.from&&te.to&&L.getTime()>=te.from.getTime()&&L.getTime()<=te.to.getTime())return Y}return!Y}function Be(x){return s.daysContainer!==void 0&&x.className.indexOf("hidden")===-1&&x.className.indexOf("flatpickr-disabled")===-1&&s.daysContainer.contains(x)}function at(x){var O=x.target===s._input,P=s._input.value.trimEnd()!==ci();O&&P&&!(x.relatedTarget&&_e(x.relatedTarget))&&s.setDate(s._input.value,!0,x.target===s.altInput?s.config.altFormat:s.config.dateFormat)}function Xe(x){var O=Yt(x),P=s.config.wrap?t.contains(O):O===s._input,L=s.config.allowInput,Y=s.isOpen&&(!L||!P),Z=s.config.inline&&P&&!L;if(x.keyCode===13&&P){if(L)return s.setDate(s._input.value,!0,O===s.altInput?s.config.altFormat:s.config.dateFormat),s.close(),O.blur();s.open()}else if(_e(O)||Y||Z){var ue=!!s.timeContainer&&s.timeContainer.contains(O);switch(x.keyCode){case 13:ue?(x.preventDefault(),f(),ar()):ee(x);break;case 27:x.preventDefault(),ar();break;case 8:case 46:P&&!s.config.allowInput&&(x.preventDefault(),s.clear());break;case 37:case 39:if(!ue&&!P){x.preventDefault();var te=c();if(s.daysContainer!==void 0&&(L===!1||te&&Be(te))){var fe=x.keyCode===39?1:-1;x.ctrlKey?(x.stopPropagation(),N(fe),H(B(1),0)):H(void 0,fe)}}else s.hourElement&&s.hourElement.focus();break;case 38:case 40:x.preventDefault();var ne=x.keyCode===40?1:-1;s.daysContainer&&O.$i!==void 0||O===s.input||O===s.altInput?x.ctrlKey?(x.stopPropagation(),me(s.currentYear-ne),H(B(1),0)):!ue&&H(void 0,7*ne):O===s.currentYearElement?me(s.currentYear-ne):s.config.enableTime&&(!ue&&s.hourElement&&s.hourElement.focus(),f(x),s._debouncedChange());break;case 9:if(ue){var ae=[s.hourElement,s.minuteElement,s.secondElement,s.amPM].concat(s.pluginElements).filter(function(Ze){return Ze}),je=ae.indexOf(O);if(je!==-1){var ut=ae[je+(x.shiftKey?-1:1)];x.preventDefault(),(ut||s._input).focus()}}else!s.config.noCalendar&&s.daysContainer&&s.daysContainer.contains(O)&&x.shiftKey&&(x.preventDefault(),s._input.focus())}}if(s.amPM!==void 0&&O===s.amPM)switch(x.key){case s.l10n.amPM[0].charAt(0):case s.l10n.amPM[0].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[0],h(),qt();break;case s.l10n.amPM[1].charAt(0):case s.l10n.amPM[1].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[1],h(),qt()}(P||_e(O))&&Fe("onKeyDown",x)}function Vt(x,O){if(O===void 0&&(O="flatpickr-day"),!(s.selectedDates.length!==1||x&&(!x.classList.contains(O)||x.classList.contains("flatpickr-disabled")))){for(var P=x?x.dateObj.getTime():s.days.firstElementChild.dateObj.getTime(),L=s.parseDate(s.selectedDates[0],void 0,!0).getTime(),Y=i(P,s.selectedDates[0].getTime()),Z=r(P,s.selectedDates[0].getTime()),ue=!1,te=0,fe=0,ne=Y;ne<Z;ne+=nP.DAY)ve(new Date(ne),!0)||(ue=ue||ne>Y&&ne<Z,ne<L&&(!te||ne>te)?te=ne:ne>L&&(!fe||ne<fe)&&(fe=ne));var ae=Array.from(s.rContainer.querySelectorAll("*:nth-child(-n+"+s.config.showMonths+") > ."+O));ae.forEach(function(je){var ut=je.dateObj,Ze=ut.getTime(),bn=0<te&&Ze<te||0<fe&&Ze>fe;return bn?(je.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach(function(Ut){je.classList.remove(Ut)})):void(ue&&!bn||(["startRange","inRange","endRange","notAllowed"].forEach(function(Ut){je.classList.remove(Ut)}),x!==void 0&&(x.classList.add(P<=s.selectedDates[0].getTime()?"startRange":"endRange"),L<P&&Ze===L?je.classList.add("startRange"):L>P&&Ze===L&&je.classList.add("endRange"),Ze>=te&&(fe===0||Ze<=fe)&&eP(Ze,L,P)&&je.classList.add("inRange"))))})}}function Un(){!s.isOpen||s.config.static||s.config.inline||Yn()}function Tr(x,O){if(O===void 0&&(O=s._positionElement),s.isMobile===!0){if(x){x.preventDefault();var P=Yt(x);P&&P.blur()}return s.mobileInput!==void 0&&(s.mobileInput.focus(),s.mobileInput.click()),void Fe("onOpen")}if(!(s._input.disabled||s.config.inline)){var L=s.isOpen;s.isOpen=!0,L||(s.calendarContainer.classList.add("open"),s._input.classList.add("active"),Fe("onOpen"),Yn(O)),s.config.enableTime!==!0||s.config.noCalendar!==!0||s.config.allowInput!==!1||x!==void 0&&s.timeContainer.contains(x.relatedTarget)||setTimeout(function(){return s.hourElement.select()},50)}}function or(x){return function(O){var P=s.config["_"+x+"Date"]=s.parseDate(O,s.config.dateFormat),L=s.config["_"+(x==="min"?"max":"min")+"Date"];P!==void 0&&(s[x==="min"?"minDateHasTime":"maxDateHasTime"]=0<P.getHours()||0<P.getMinutes()||0<P.getSeconds()),s.selectedDates&&(s.selectedDates=s.selectedDates.filter(function(Y){return ve(Y)}),!s.selectedDates.length&&x==="min"&&m(P),qt()),s.daysContainer&&(ho(),P===void 0?s.currentYearElement.removeAttribute(x):s.currentYearElement[x]=P.getFullYear().toString(),s.currentYearElement.disabled=!!L&&P!==void 0&&L.getFullYear()===P.getFullYear())}}function ir(){var x=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],O=St(St({},JSON.parse(JSON.stringify(t.dataset||{}))),n),P={};s.config.parseDate=O.parseDate,s.config.formatDate=O.formatDate,Object.defineProperty(s.config,"enable",{get:function(){return s.config._enable},set:function(ae){s.config._enable=He(ae)}}),Object.defineProperty(s.config,"disable",{get:function(){return s.config._disable},set:function(ae){s.config._disable=He(ae)}});var L=O.mode==="time";if(!O.dateFormat&&(O.enableTime||L)){var Y=yt.defaultConfig.dateFormat||So.dateFormat;P.dateFormat=O.noCalendar||L?"H:i"+(O.enableSeconds?":S":""):Y+" H:i"+(O.enableSeconds?":S":"")}if(O.altInput&&(O.enableTime||L)&&!O.altFormat){var Z=yt.defaultConfig.altFormat||So.altFormat;P.altFormat=O.noCalendar||L?"h:i"+(O.enableSeconds?":S K":" K"):Z+(" h:i"+(O.enableSeconds?":S":"")+" K")}Object.defineProperty(s.config,"minDate",{get:function(){return s.config._minDate},set:or("min")}),Object.defineProperty(s.config,"maxDate",{get:function(){return s.config._maxDate},set:or("max")});var ue=function(ae){return function(je){s.config[ae==="min"?"_minTime":"_maxTime"]=s.parseDate(je,"H:i:S")}};Object.defineProperty(s.config,"minTime",{get:function(){return s.config._minTime},set:ue("min")}),Object.defineProperty(s.config,"maxTime",{get:function(){return s.config._maxTime},set:ue("max")}),O.mode==="time"&&(s.config.noCalendar=!0,s.config.enableTime=!0),Object.assign(s.config,P,O);for(var te=0;te<x.length;te++)s.config[x[te]]=s.config[x[te]]===!0||s.config[x[te]]==="true";_s.filter(function(ae){return s.config[ae]!==void 0}).forEach(function(ae){s.config[ae]=Ls(s.config[ae]||[]).map(u)}),s.isMobile=!s.config.disableMobile&&!s.config.inline&&s.config.mode==="single"&&!s.config.disable.length&&!s.config.enable&&!s.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var fe,te=0;te<s.config.plugins.length;te++)for(var ne in fe=s.config.plugins[te](s)||{},fe)-1<_s.indexOf(ne)?s.config[ne]=Ls(fe[ne]).map(u).concat(s.config[ne]):typeof O[ne]>"u"&&(s.config[ne]=fe[ne]);O.altInputClass||(s.config.altInputClass=Dr().className+" "+s.config.altInputClass),Fe("onParseConfig")}function Dr(){return s.config.wrap?t.querySelector("[data-input]"):t}function Mr(){typeof s.config.locale!="object"&&typeof yt.l10ns[s.config.locale]>"u"&&s.config.errorHandler(new Error("flatpickr: invalid locale "+s.config.locale)),s.l10n=St(St({},yt.l10ns.default),typeof s.config.locale=="object"?s.config.locale:s.config.locale==="default"?void 0:yt.l10ns[s.config.locale]),Vr.D="("+s.l10n.weekdays.shorthand.join("|")+")",Vr.l="("+s.l10n.weekdays.longhand.join("|")+")",Vr.M="("+s.l10n.months.shorthand.join("|")+")",Vr.F="("+s.l10n.months.longhand.join("|")+")",Vr.K="("+s.l10n.amPM[0]+"|"+s.l10n.amPM[1]+"|"+s.l10n.amPM[0].toLowerCase()+"|"+s.l10n.amPM[1].toLowerCase()+")";var x=St(St({},n),JSON.parse(JSON.stringify(t.dataset||{})));x.time_24hr===void 0&&yt.defaultConfig.time_24hr===void 0&&(s.config.time_24hr=s.l10n.time_24hr),s.formatDate=i0(s),s.parseDate=Nu({config:s.config,l10n:s.l10n})}function Yn(x){if(typeof s.config.position=="function")return void s.config.position(s,x);if(s.calendarContainer!==void 0){Fe("onPreCalendarPosition");var O=x||s._positionElement,P=Array.prototype.reduce.call(s.calendarContainer.children,function(ws,xs){return ws+xs.offsetHeight},0),L=s.calendarContainer.offsetWidth,Y=s.config.position.split(" "),Z=Y[0],ue=1<Y.length?Y[1]:null,te=O.getBoundingClientRect(),fe=window.innerHeight-te.bottom,ne=Z==="above"||Z!=="below"&&fe<P&&te.top>P,ae=window.pageYOffset+te.top+(ne?-P-2:O.offsetHeight+2);if(Tt(s.calendarContainer,"arrowTop",!ne),Tt(s.calendarContainer,"arrowBottom",ne),!s.config.inline){var je=window.pageXOffset+te.left,ut=!1,Ze=!1;ue==="center"?(je-=(L-te.width)/2,ut=!0):ue==="right"&&(je-=L-te.width,Ze=!0),Tt(s.calendarContainer,"arrowLeft",!ut&&!Ze),Tt(s.calendarContainer,"arrowCenter",ut),Tt(s.calendarContainer,"arrowRight",Ze);var bn=window.document.body.offsetWidth-(window.pageXOffset+te.right),Ut=je+L>window.document.body.offsetWidth,hs=bn+L>window.document.body.offsetWidth;if(Tt(s.calendarContainer,"rightMost",Ut),!s.config.static)if(s.calendarContainer.style.top=ae+"px",!Ut)s.calendarContainer.style.left=je+"px",s.calendarContainer.style.right="auto";else if(!hs)s.calendarContainer.style.left="auto",s.calendarContainer.style.right=bn+"px";else{var Lr=Nr();if(Lr===void 0)return;var ms=window.document.body.offsetWidth,bs=r(0,ms/2-L/2),vs=Lr.cssRules.length,ys="{left:"+te.left+"px;right:auto;}";Tt(s.calendarContainer,"rightMost",!1),Tt(s.calendarContainer,"centerMost",!0),Lr.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+ys,vs),s.calendarContainer.style.left=bs+"px",s.calendarContainer.style.right="auto"}}}}function Nr(){for(var x,O=null,P=0;P<document.styleSheets.length;P++)if(x=document.styleSheets[P],x.cssRules){try{x.cssRules}catch{continue}O=x;break}return O??go()}function go(){var x=document.createElement("style");return document.head.appendChild(x),x.sheet}function ho(){s.config.noCalendar||s.isMobile||(A(),mo(),$())}function ar(){s._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(s.close,0):s.close()}function ee(x){x.preventDefault(),x.stopPropagation();var O=function(ae){return ae.classList&&ae.classList.contains("flatpickr-day")&&!ae.classList.contains("flatpickr-disabled")&&!ae.classList.contains("notAllowed")},P=o0(Yt(x),O);if(P!==void 0){var L=P,Y=s.latestSelectedDateObj=new Date(L.dateObj.getTime()),Z=(Y.getMonth()<s.currentMonth||Y.getMonth()>s.currentMonth+s.config.showMonths-1)&&s.config.mode!=="range";if(s.selectedDateElem=L,s.config.mode==="single")s.selectedDates=[Y];else if(s.config.mode==="multiple"){var ue=kt(Y);ue?s.selectedDates.splice(parseInt(ue),1):s.selectedDates.push(Y)}else s.config.mode==="range"&&(s.selectedDates.length===2&&s.clear(!1,!1),s.latestSelectedDateObj=Y,s.selectedDates.push(Y),Gt(Y,s.selectedDates[0],!0)!==0&&s.selectedDates.sort(function(ae,je){return ae.getTime()-je.getTime()}));if(h(),Z){var te=s.currentYear!==Y.getFullYear();s.currentYear=Y.getFullYear(),s.currentMonth=Y.getMonth(),te&&(Fe("onYearChange"),A()),Fe("onMonthChange")}if(mo(),$(),qt(),Z||s.config.mode==="range"||s.config.showMonths!==1?s.selectedDateElem!==void 0&&s.hourElement===void 0&&s.selectedDateElem&&s.selectedDateElem.focus():J(L),s.hourElement!==void 0&&s.hourElement!==void 0&&s.hourElement.focus(),s.config.closeOnSelect){var fe=s.config.mode==="single"&&!s.config.enableTime,ne=s.config.mode==="range"&&s.selectedDates.length===2&&!s.config.enableTime;(fe||ne)&&ar()}k()}}function ce(x,O){if(x!==null&&typeof x=="object")for(var P in Object.assign(s.config,x),x)Kn[P]!==void 0&&Kn[P].forEach(function(L){return L()});else s.config[x]=O,Kn[x]===void 0?-1<_s.indexOf(x)&&(s.config[x]=Ls(O)):Kn[x].forEach(function(L){return L()});s.redraw(),qt(!0)}function $e(x,O){var P=[];if(x instanceof Array)P=x.map(function(L){return s.parseDate(L,O)});else if(x instanceof Date||typeof x=="number")P=[s.parseDate(x,O)];else if(typeof x=="string")switch(s.config.mode){case"single":case"time":P=[s.parseDate(x,O)];break;case"multiple":P=x.split(s.config.conjunction).map(function(L){return s.parseDate(L,O)});break;case"range":P=x.split(s.l10n.rangeSeparator).map(function(L){return s.parseDate(L,O)})}else s.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(x)));s.selectedDates=s.config.allowInvalidPreload?P:P.filter(function(L){return L instanceof Date&&ve(L,!1)}),s.config.mode==="range"&&s.selectedDates.sort(function(L,Y){return L.getTime()-Y.getTime()})}function Le(x,O,P){return O===void 0&&(O=!1),P===void 0&&(P=s.config.dateFormat),x!==0&&!x||x instanceof Array&&x.length===0?s.clear(O):($e(x,P),s.latestSelectedDateObj=s.selectedDates[s.selectedDates.length-1],s.redraw(),R(void 0,O),m(),s.selectedDates.length===0&&s.clear(!1),qt(O),void(O&&Fe("onChange")))}function He(x){return x.slice().map(function(O){return typeof O=="string"||typeof O=="number"||O instanceof Date?s.parseDate(O,void 0,!0):O&&typeof O=="object"&&O.from&&O.to?{from:s.parseDate(O.from,void 0),to:s.parseDate(O.to,void 0)}:O}).filter(function(O){return O})}function Pt(){s.selectedDates=[],s.now=s.parseDate(s.config.now)||new Date;var x=s.config.defaultDate||((s.input.nodeName==="INPUT"||s.input.nodeName==="TEXTAREA")&&s.input.placeholder&&s.input.value===s.input.placeholder?null:s.input.value);x&&$e(x,s.config.dateFormat),s._initialDate=0<s.selectedDates.length?s.selectedDates[0]:s.config.minDate&&s.config.minDate.getTime()>s.now.getTime()?s.config.minDate:s.config.maxDate&&s.config.maxDate.getTime()<s.now.getTime()?s.config.maxDate:s.now,s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth(),0<s.selectedDates.length&&(s.latestSelectedDateObj=s.selectedDates[0]),s.config.minTime!==void 0&&(s.config.minTime=s.parseDate(s.config.minTime,"H:i")),s.config.maxTime!==void 0&&(s.config.maxTime=s.parseDate(s.config.maxTime,"H:i")),s.minDateHasTime=!!s.config.minDate&&(0<s.config.minDate.getHours()||0<s.config.minDate.getMinutes()||0<s.config.minDate.getSeconds()),s.maxDateHasTime=!!s.config.maxDate&&(0<s.config.maxDate.getHours()||0<s.config.maxDate.getMinutes()||0<s.config.maxDate.getSeconds())}function pn(){return s.input=Dr(),s.input?(s.input._type=s.input.type,s.input.type="text",s.input.classList.add("flatpickr-input"),s._input=s.input,s.config.altInput&&(s.altInput=We(s.input.nodeName,s.config.altInputClass),s._input=s.altInput,s.altInput.placeholder=s.input.placeholder,s.altInput.disabled=s.input.disabled,s.altInput.required=s.input.required,s.altInput.tabIndex=s.input.tabIndex,s.altInput.type="text",s.input.setAttribute("type","hidden"),!s.config.static&&s.input.parentNode&&s.input.parentNode.insertBefore(s.altInput,s.input.nextSibling)),!s.config.allowInput&&s._input.setAttribute("readonly","readonly"),void Ae()):void s.config.errorHandler(new Error("Invalid input element specified"))}function Ae(){s._positionElement=s.config.positionElement||s._input}function gn(){var x=s.config.enableTime?s.config.noCalendar?"time":"datetime-local":"date";s.mobileInput=We("input",s.input.className+" flatpickr-mobile"),s.mobileInput.tabIndex=1,s.mobileInput.type=x,s.mobileInput.disabled=s.input.disabled,s.mobileInput.required=s.input.required,s.mobileInput.placeholder=s.input.placeholder,s.mobileFormatStr=x=="datetime-local"?"Y-m-d\\TH:i:S":x==="date"?"Y-m-d":"H:i:S",0<s.selectedDates.length&&(s.mobileInput.defaultValue=s.mobileInput.value=s.formatDate(s.selectedDates[0],s.mobileFormatStr)),s.config.minDate&&(s.mobileInput.min=s.formatDate(s.config.minDate,"Y-m-d")),s.config.maxDate&&(s.mobileInput.max=s.formatDate(s.config.maxDate,"Y-m-d")),s.input.getAttribute("step")&&(s.mobileInput.step=s.input.getAttribute("step")+""),s.input.type="hidden",s.altInput!==void 0&&(s.altInput.type="hidden");try{s.input.parentNode&&s.input.parentNode.insertBefore(s.mobileInput,s.input.nextSibling)}catch{}y(s.mobileInput,"change",function(O){s.setDate(Yt(O).value,!1,s.mobileFormatStr),Fe("onChange"),Fe("onClose")})}function hn(x){return s.isOpen===!0?s.close():void s.open(x)}function Fe(x,O){if(s.config!==void 0){var P=s.config[x];if(P!==void 0&&0<P.length)for(var L=0;P[L]&&L<P.length;L++)P[L](s.selectedDates,s.input.value,s,O);x==="onChange"&&(s.input.dispatchEvent(It("change")),s.input.dispatchEvent(It("input")))}}function It(x){var O=document.createEvent("Event");return O.initEvent(x,!0,!0),O}function kt(x){for(var O,P=0;P<s.selectedDates.length;P++)if(O=s.selectedDates[P],O instanceof Date&&Gt(O,x)===0)return""+P;return!1}function mn(x){return!(s.config.mode!=="range"||2>s.selectedDates.length)&&0<=Gt(x,s.selectedDates[0])&&0>=Gt(x,s.selectedDates[1])}function mo(){s.config.noCalendar||s.isMobile||!s.monthNav||(s.yearElements.forEach(function(x,O){var P=new Date(s.currentYear,s.currentMonth,1);P.setMonth(s.currentMonth+O),1<s.config.showMonths||s.config.monthSelectorType==="static"?s.monthElements[O].textContent=il(P.getMonth(),s.config.shorthandCurrentMonth,s.l10n)+" ":s.monthsDropdownContainer.value=P.getMonth().toString(),x.value=P.getFullYear().toString()}),s._hidePrevMonthArrow=s.config.minDate!==void 0&&(s.currentYear===s.config.minDate.getFullYear()?s.currentMonth<=s.config.minDate.getMonth():s.currentYear<s.config.minDate.getFullYear()),s._hideNextMonthArrow=s.config.maxDate!==void 0&&(s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth+1>s.config.maxDate.getMonth():s.currentYear>s.config.maxDate.getFullYear()))}function ci(x){var O=x||(s.config.altInput?s.config.altFormat:s.config.dateFormat);return s.selectedDates.map(function(P){return s.formatDate(P,O)}).filter(function(P,L,Y){return s.config.mode!=="range"||s.config.enableTime||Y.indexOf(P)===L}).join(s.config.mode==="range"?s.l10n.rangeSeparator:s.config.conjunction)}function qt(x){x===void 0&&(x=!0),s.mobileInput!==void 0&&s.mobileFormatStr&&(s.mobileInput.value=s.latestSelectedDateObj===void 0?"":s.formatDate(s.latestSelectedDateObj,s.mobileFormatStr)),s.input.value=ci(s.config.dateFormat),s.altInput!==void 0&&(s.altInput.value=ci(s.config.altFormat)),x!==!1&&Fe("onValueUpdate")}function Rr(x){var O=Yt(x),P=s.prevMonthNav.contains(O),L=s.nextMonthNav.contains(O);P||L?N(P?-1:1):0<=s.yearElements.indexOf(O)?O.select():O.classList.contains("arrowUp")?s.changeYear(s.currentYear+1):O.classList.contains("arrowDown")&&s.changeYear(s.currentYear-1)}function _r(x){x.preventDefault();var O=x.type==="keydown",P=Yt(x),L=P;s.amPM!==void 0&&P===s.amPM&&(s.amPM.textContent=s.l10n.amPM[on(s.amPM.textContent===s.l10n.amPM[0])]);var Y=parseFloat(L.getAttribute("min")),Z=parseFloat(L.getAttribute("max")),ue=parseFloat(L.getAttribute("step")),te=parseInt(L.value,10),fe=x.delta||(O?x.which===38?1:-1:0),ne=te+ue*fe;if(typeof L.value<"u"&&L.value.length===2){var ae=L===s.hourElement,je=L===s.minuteElement;ne<Y?(ne=Z+ne+on(!ae)+(on(ae)&&on(!s.amPM)),je&&T(void 0,-1,s.hourElement)):ne>Z&&(ne=L===s.hourElement?ne-Z-on(!s.amPM):Y,je&&T(void 0,1,s.hourElement)),s.amPM&&ae&&(ue===1?ne+te===23:o(ne-te)>ue)&&(s.amPM.textContent=s.l10n.amPM[on(s.amPM.textContent===s.l10n.amPM[0])]),L.value=Ft(ne)}}var s={config:St(St({},So),yt.defaultConfig),l10n:Mi};s.parseDate=Nu({config:s.config,l10n:s.l10n}),s._handlers=[],s.pluginElements=[],s.loadedPlugins=[],s._bind=y,s._setHoursFromDate=m,s._positionCalendar=Yn,s.changeMonth=N,s.changeYear=me,s.clear=re,s.close=be,s.onMouseOver=Vt,s._createElement=We,s.createDay=_,s.destroy=Ce,s.isEnabled=ve,s.jumpToDate=R,s.updateValue=qt,s.open=Tr,s.redraw=ho,s.set=ce,s.setDate=Le,s.toggle=hn;var Kn={locale:[Mr,oe],showMonths:[V,d,M],minDate:[R],maxDate:[R],positionElement:[Ae],clickOpens:[function(){s.config.clickOpens===!0?(y(s._input,"focus",s.open),y(s._input,"click",s.open)):(s._input.removeEventListener("focus",s.open),s._input.removeEventListener("click",s.open))}]};return l(),s}function Co(t,n){for(var o,r=Array.prototype.slice.call(t).filter(function(l){return l instanceof HTMLElement}),i=[],a=0;a<r.length;a++){o=r[a];try{if(o.getAttribute("data-fp-omit")!==null)continue;o._flatpickr!==void 0&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=oP(o,n||{}),i.push(o._flatpickr)}catch(l){console.error(l)}}return i.length===1?i[0]:i}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return Co(this,t)},HTMLElement.prototype.flatpickr=function(t){return Co([this],t)});var yt=function(t,n){return typeof t=="string"?Co(window.document.querySelectorAll(t),n):t instanceof Node?Co([t],n):Co(t,n)};yt.defaultConfig={},yt.l10ns={en:St({},Mi),default:St({},Mi)},yt.localize=function(t){yt.l10ns.default=St(St({},yt.l10ns.default),t)},yt.setDefaults=function(t){yt.defaultConfig=St(St({},yt.defaultConfig),t)},yt.parseDate=Nu({}),yt.formatDate=i0({}),yt.compareDates=Gt,typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return Co(this,t)}),Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))},typeof window<"u"&&(window.flatpickr=yt);const di=j.oneOfType([j.string,j.array,j.object,j.number]);j.bool,j.bool,j.string,j.string,j.string,j.string,j.number,j.number,j.array,j.bool,j.bool,j.bool,j.node,j.node,j.number,j.string,j.bool,j.string,j.oneOfType([j.string,j.object]),j.number,j.oneOf(["single","multiple","range"]),j.oneOf(["static","dropdown"]),j.string,j.bool,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.string,j.bool,j.bool,j.number,j.node,j.bool,j.bool,j.bool,j.oneOf(["full","auto"]),j.string;j.string,j.string,j.string,j.node,j.bool,j.bool,j.bool,j.bool,j.bool,j.func,j.func,j.string;j.oneOfType([j.string,j.number]),j.oneOfType([j.string,j.number]),j.bool,j.string;j.string,j.oneOfType([j.string,j.number]),j.string,j.string,j.bool,j.bool,j.bool,j.bool,j.bool,j.bool,j.string,j.string,j.func,j.func,j.func,j.oneOf(["text","email","password","tel","url","number"]),j.string,j.node,j.node,j.node,j.oneOf(["full","auto"]),j.string;j.string,j.arrayOf(j.object),j.string,j.func,j.string,j.string,j.string,j.func,j.func,j.func,j.bool,j.string,j.func,j.bool;j.string,j.string.isRequired,j.string,j.string.isRequired,j.string,j.string,j.func;j.node,j.object,j.string,j.func,j.string,j.string,j.func,j.func,j.func,j.string,j.bool,j.bool,j.string,j.any;j.string,j.string,j.node;j.node,j.string;j.string,j.string,j.node;j.bool,j.node,j.string;j.node,j.string;j.number,j.number,j.bool,j.string,j.node;const a0=t=>{let{children:n=null,className:o,variant:r="default",disabled:i=!1,...a}=t;return S.createElement(Cf,he({className:`juno-input-group juno-input-group-${r} ${i?"juno-input-group-disabled":""} ${o}`},a),S.Children.map(n,l=>{const c=l.props.variant||r,u=l.props.disabled||i;return S.cloneElement(l,{variant:c,disabled:u})}))};a0.propTypes={children:j.node,className:j.string,variant:j.oneOf(["default","primary","primary-danger","subdued"]),disabled:j.bool};var iP=function(t,n){return`
            jn-bg-theme-introbox
            jn-text-theme-default
            jn-flex
            jn-rounded-l
            jn-overflow-hidden
            jn-mb-8

            `.concat(t==="hero"&&n?`
                    jn-bg-right-top
                    jn-bg-no-repeat
                `:"",`
        `)},aP=`
    jn-border-l-4
    jn-border-theme-introbox
`,lP=function(t,n){return`
        `.concat(n?"jn-pl-4 jn-pr-56":"jn-px-4",`

        `).concat(t==="hero"?`
            jn-text-xl
            jn-min-h-[8rem]
            jn-py-4
            jn-flex
            jn-flex-col
            jn-justify-center
        `:`
            jn-py-3
        `,`
    `)},sP=`
    jn-font-bold
`,cP=function(t){var n=t.title,o=n===void 0?null:n,r=t.text,i=r===void 0?null:r,a=t.variant,l=a===void 0?"default":a,c=t.heroImage,u=c===void 0?null:c,d=t.className,f=d===void 0?"":d,g=t.children,b=lt(t,["title","text","variant","heroImage","className","children"]),h=S.useMemo(function(){return u&&l==="hero"},[l,u]);return S.createElement("div",de({className:"juno-introbox ".concat(iP(l,u)," ").concat(f),style:h?{backgroundImage:"".concat(u)}:{}},b),S.createElement("div",{className:"".concat(aP)}),S.createElement("div",{className:"".concat(lP(l,u))},o?S.createElement("h1",{className:"".concat(sP)},o):"",g||S.createElement("p",null,i)))};j.string,j.string,j.string;S.createContext({});p.createContext();j.node,j.oneOf(["small","normal"]),j.string;j.string,j.bool,j.oneOf(zn),j.string,j.node,j.string,j.func;j.string,j.node,j.string;const uP=`
	jn-text-theme-high
	jn-flex
	jn-rounded
	jn-leading-5
	jn-overflow-hidden
	jn-items-center
`,dP=`
	jn-w-[4px]
	jn-self-stretch
	jn-border-l-4
	jn-mr-6
	jn-shrink-0
`,fm=`
	jn-border-theme-message-default
`,pm=`
	jn-bg-theme-message-default
`,fP=`
	jn-border-theme-message-error
`,pP=`
	jn-bg-theme-message-error
`,gP=`
	jn-border-theme-message-warning
`,hP=`
	jn-bg-theme-message-warning
`,mP=`
	jn-border-theme-message-danger
`,bP=`
	jn-bg-theme-message-danger
`,vP=`
	jn-border-theme-message-success
`,yP=`
	jn-bg-theme-message-success
`,wP=`
	jn-py-3
	jn-pr-4
	jn-ml-7
`,xP=`
	jn-font-bold
`,jP=`
	jn-ml-auto
	jn-self-stretch
	jn-flex
	jn-flex-col
	jn-py-2.5
	jn-pr-2.5
`,EP=t=>t==="error"?pP:t==="warning"?hP:t==="success"?yP:t==="info"?pm:t==="danger"?bP:pm,kP=t=>t==="error"?fP:t==="warning"?gP:t==="success"?vP:t==="info"?fm:t==="danger"?mP:fm,OP=t=>t==="error"?"dangerous":t,l0=t=>{let{title:n=null,text:o=null,variant:r="info",dismissible:i=!1,autoDismiss:a=!1,autoDismissTimeout:l=1e4,onDismiss:c,className:u="",children:d,...f}=t;const[g,b]=p.useState(!0),h=S.useRef(null);S.useEffect(()=>()=>clearTimeout(h.current),[]),p.useEffect(()=>{a&&(clearTimeout(h.current),h.current=setTimeout(()=>m(),l))},[a,l]);const m=()=>{b(!1),c&&c()};return S.createElement(S.Fragment,null,g&&S.createElement("div",he({className:`juno-message juno-message-${r} ${uP} ${EP(r)} ${u}`},f),S.createElement("div",{className:`juno-message-border ${dP} ${kP(r)}`}),S.createElement(zt,{icon:OP(r),color:"jn-text-theme-"+r,className:"jn-shrink-0"}),S.createElement("div",{className:`juno-message-content ${wP}`},n?S.createElement("h1",{className:`${xP}`},n):"",S.createElement("div",null,d||o)),i&&S.createElement("div",{className:jP},S.createElement(zt,{icon:"close",onClick:m,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100"}))))};l0.propTypes={title:j.string,text:j.string,variant:j.oneOf(["info","warning","danger","error","success"]),dismissible:j.bool,autoDismiss:j.bool,autoDismissTimeout:j.number,onDismiss:j.func,className:j.string,children:j.node};j.node,j.string,j.string,j.oneOf(zn),j.oneOf(zn),j.string,j.func,j.func;var s0=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],al=s0.join(","),c0=typeof Element>"u",io=c0?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ll=!c0&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t==null?void 0:t.ownerDocument},sl=function t(n,o){var r;o===void 0&&(o=!0);var i=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"inert"),a=i===""||i==="true"||o&&n&&t(n.parentNode);return a},SP=function(n){var o,r=n==null||(o=n.getAttribute)===null||o===void 0?void 0:o.call(n,"contenteditable");return r===""||r==="true"},u0=function(n,o,r){if(sl(n))return[];var i=Array.prototype.slice.apply(n.querySelectorAll(al));return o&&io.call(n,al)&&i.unshift(n),i=i.filter(r),i},d0=function t(n,o,r){for(var i=[],a=Array.from(n);a.length;){var l=a.shift();if(!sl(l,!1))if(l.tagName==="SLOT"){var c=l.assignedElements(),u=c.length?c:l.children,d=t(u,!0,r);r.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{var f=io.call(l,al);f&&r.filter(l)&&(o||!n.includes(l))&&i.push(l);var g=l.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(l),b=!sl(g,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(g&&b){var h=t(g===!0?l.children:g.children,!0,r);r.flatten?i.push.apply(i,h):i.push({scopeParent:l,candidates:h})}else a.unshift.apply(a,l.children)}}return i},f0=function(n){return!isNaN(parseInt(n.getAttribute("tabindex"),10))},dr=function(n){if(!n)throw new Error("No node provided");return 0>n.tabIndex&&(/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||SP(n))&&!f0(n)?0:n.tabIndex},CP=function(n,o){var r=dr(n);return 0>r&&o&&!f0(n)?0:r},$P=function(n,o){return n.tabIndex===o.tabIndex?n.documentOrder-o.documentOrder:n.tabIndex-o.tabIndex},p0=function(n){return n.tagName==="INPUT"},PP=function(n){return p0(n)&&n.type==="hidden"},IP=function(n){var o=n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(r){return r.tagName==="SUMMARY"});return o},TP=function(n,o){for(var r=0;r<n.length;r++)if(n[r].checked&&n[r].form===o)return n[r]},DP=function(n){if(!n.name)return!0;var o,r=n.form||ll(n),i=function(c){return r.querySelectorAll('input[type="radio"][name="'+c+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=i(window.CSS.escape(n.name));else try{o=i(n.name)}catch(l){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",l.message),!1}var a=TP(o,n.form);return!a||a===n},MP=function(n){return p0(n)&&n.type==="radio"},NP=function(n){return MP(n)&&!DP(n)},RP=function(n){var o,r=n&&ll(n),i=(o=r)===null||o===void 0?void 0:o.host,a=!1;if(r&&r!==n){var l,c,u;for(a=!!((l=i)!==null&&l!==void 0&&(c=l.ownerDocument)!==null&&c!==void 0&&c.contains(i)||n!=null&&(u=n.ownerDocument)!==null&&u!==void 0&&u.contains(n));!a&&i;){var d,f,g;r=ll(i),i=(d=r)===null||d===void 0?void 0:d.host,a=!!((f=i)!==null&&f!==void 0&&(g=f.ownerDocument)!==null&&g!==void 0&&g.contains(i))}}return a},gm=function(n){var o=n.getBoundingClientRect(),r=o.width,i=o.height;return r===0&&i===0},_P=function(n,o){var r=o.displayCheck,i=o.getShadowRoot;if(getComputedStyle(n).visibility==="hidden")return!0;var a=io.call(n,"details>summary:first-of-type"),l=a?n.parentElement:n;if(io.call(l,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof i=="function"){for(var c=n;n;){var u=n.parentElement,d=ll(n);if(u&&!u.shadowRoot&&i(u)===!0)return gm(n);n=n.assignedSlot?n.assignedSlot:u||d===n.ownerDocument?u:d.host}n=c}if(RP(n))return!n.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return gm(n);return!1},LP=function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var o=n.parentElement;o;){if(o.tagName==="FIELDSET"&&o.disabled){for(var r,i=0;i<o.children.length;i++)if(r=o.children.item(i),r.tagName==="LEGEND")return!!io.call(o,"fieldset[disabled] *")||!r.contains(n);return!0}o=o.parentElement}return!1},cl=function(n,o){return!(o.disabled||sl(o)||PP(o)||_P(o,n)||IP(o)||LP(o))},Ru=function(n,o){return!(NP(o)||0>dr(o)||!cl(n,o))},FP=function(n){var o=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(o)||0<=o)},AP=function t(n){var o=[],r=[];return n.forEach(function(i,a){var l=!!i.scopeParent,c=l?i.scopeParent:i,u=CP(c,l),d=l?t(i.candidates):c;u===0?l?o.push.apply(o,d):o.push(c):r.push({documentOrder:a,tabIndex:u,item:i,isScope:l,content:d})}),r.sort($P).reduce(function(i,a){return a.isScope?i.push.apply(i,a.content):i.push(a.content),i},[]).concat(o)},g0=function(n,o){o=o||{};var r;return r=o.getShadowRoot?d0([n],o.includeContainer,{filter:Ru.bind(null,o),flatten:!1,getShadowRoot:o.getShadowRoot,shadowRootFilter:FP}):u0(n,o.includeContainer,Ru.bind(null,o)),AP(r)},h0=function(n,o){o=o||{};var r;return r=o.getShadowRoot?d0([n],o.includeContainer,{filter:cl.bind(null,o),flatten:!0,getShadowRoot:o.getShadowRoot}):u0(n,o.includeContainer,cl.bind(null,o)),r},Hr=function(n,o){if(o=o||{},!n)throw new Error("No node provided");return io.call(n,al)!==!1&&Ru(o,n)},zP=s0.concat("iframe").join(","),Aa=function(n,o){if(o=o||{},!n)throw new Error("No node provided");return io.call(n,zP)!==!1&&cl(o,n)},HP=Object.freeze({__proto__:null,focusable:h0,getTabIndex:dr,isFocusable:Aa,isTabbable:Hr,tabbable:g0});function BP(t,n,o){return(n=VP(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function hm(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,r)}return o}function mm(t){for(var n,o=1;o<arguments.length;o++)n=arguments[o]==null?{}:arguments[o],o%2?hm(Object(n),!0).forEach(function(r){BP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))});return t}function WP(t,n){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function VP(t){var n=WP(t,"string");return typeof n=="symbol"?n:n+""}var bm={activateTrap:function(n,o){if(0<n.length){var r=n[n.length-1];r!==o&&r.pause()}var i=n.indexOf(o);i===-1||n.splice(i,1),n.push(o)},deactivateTrap:function(n,o){var r=n.indexOf(o);r!==-1&&n.splice(r,1),0<n.length&&n[n.length-1].unpause()}},qP=function(n){return n.tagName&&n.tagName.toLowerCase()==="input"&&typeof n.select=="function"},UP=function(n){return(n==null?void 0:n.key)==="Escape"||(n==null?void 0:n.key)==="Esc"||(n==null?void 0:n.keyCode)===27},Oi=function(n){return(n==null?void 0:n.key)==="Tab"||(n==null?void 0:n.keyCode)===9},YP=function(n){return Oi(n)&&!n.shiftKey},KP=function(n){return Oi(n)&&n.shiftKey},vm=function(n){return setTimeout(n,0)},ym=function(n,o){var r=-1;return n.every(function(i,a){return!o(i)||(r=a,!1)}),r},fi=function(n){for(var o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return typeof n=="function"?n.apply(void 0,r):n},wa=function(n){return n.target.shadowRoot&&typeof n.composedPath=="function"?n.composedPath()[0]:n.target},GP=[],QP=function(n,o){var r,i=(o==null?void 0:o.document)||document,a=(o==null?void 0:o.trapStack)||GP,l=mm({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:YP,isKeyBackward:KP},o),c={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},u=function(D,$,A){return D&&D[$]!==void 0?D[$]:l[A||$]},d=function(D,$){var A=typeof($==null?void 0:$.composedPath)=="function"?$.composedPath():void 0;return c.containerGroups.findIndex(function(z){var V=z.container,Q=z.tabbableNodes;return V.contains(D)||(A==null?void 0:A.includes(V))||Q.find(function(X){return X===D})})},f=function(D){var $=l[D];if(typeof $=="function"){for(var A=arguments.length,z=Array(1<A?A-1:0),V=1;V<A;V++)z[V-1]=arguments[V];$=$.apply(void 0,z)}if($===!0&&($=void 0),!$){if($===void 0||$===!1)return $;throw new Error("`".concat(D,"` was specified but was not a node, or did not return a node"))}var Q=$;if(typeof $=="string"&&(Q=i.querySelector($),!Q))throw new Error("`".concat(D,"` as selector refers to no known node"));return Q},g=function(){var D=f("initialFocus");if(D===!1)return!1;if(D===void 0||!Aa(D,l.tabbableOptions))if(0<=d(i.activeElement))D=i.activeElement;else{var $=c.tabbableGroups[0],A=$&&$.firstTabbableNode;D=A||f("fallbackFocus")}if(!D)throw new Error("Your focus-trap needs to have at least one focusable element");return D},b=function(){if(c.containerGroups=c.containers.map(function(D){var $=g0(D,l.tabbableOptions),A=h0(D,l.tabbableOptions),z=0<$.length?$[0]:void 0,V=0<$.length?$[$.length-1]:void 0,Q=A.find(function(oe){return Hr(oe)}),X=A.slice().reverse().find(function(oe){return Hr(oe)}),M=!!$.find(function(oe){return 0<dr(oe)});return{container:D,tabbableNodes:$,focusableNodes:A,posTabIndexesFound:M,firstTabbableNode:z,lastTabbableNode:V,firstDomTabbableNode:Q,lastDomTabbableNode:X,nextTabbableNode:function(se){var N=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],re=$.indexOf(se);return 0>re?N?A.slice(A.indexOf(se)+1).find(function(be){return Hr(be)}):A.slice(0,A.indexOf(se)).reverse().find(function(be){return Hr(be)}):$[re+(N?1:-1)]}}}),c.tabbableGroups=c.containerGroups.filter(function(D){return 0<D.tabbableNodes.length}),0>=c.tabbableGroups.length&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(c.containerGroups.find(function(D){return D.posTabIndexesFound})&&1<c.containerGroups.length)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},h=function(D){var $=D.activeElement;return $?$.shadowRoot&&$.shadowRoot.activeElement!==null?h($.shadowRoot):$:void 0},m=function(D){return D===!1||D===h(document)?void 0:D&&D.focus?(D.focus({preventScroll:!!l.preventScroll}),c.mostRecentlyFocusedNode=D,void(qP(D)&&D.select())):void m(g())},v=function(D){var $=f("setReturnFocus",D);return $||$!==!1&&D},E=function(D){var $=D.target,A=D.event,z=D.isBackward,V=z!==void 0&&z;$=$||wa(A),b();var Q=null;if(0<c.tabbableGroups.length){var X=d($,A),M=0<=X?c.containerGroups[X]:void 0;if(0>X)Q=V?c.tabbableGroups[c.tabbableGroups.length-1].lastTabbableNode:c.tabbableGroups[0].firstTabbableNode;else if(V){var oe=ym(c.tabbableGroups,function(_e){var ie=_e.firstTabbableNode;return $===ie});if(0>oe&&(M.container===$||Aa($,l.tabbableOptions)&&!Hr($,l.tabbableOptions)&&!M.nextTabbableNode($,!1))&&(oe=X),0<=oe){var se=oe===0?c.tabbableGroups.length-1:oe-1,N=c.tabbableGroups[se];Q=0<=dr($)?N.lastTabbableNode:N.lastDomTabbableNode}else Oi(A)||(Q=M.nextTabbableNode($,!1))}else{var re=ym(c.tabbableGroups,function(_e){var ie=_e.lastTabbableNode;return $===ie});if(0>re&&(M.container===$||Aa($,l.tabbableOptions)&&!Hr($,l.tabbableOptions)&&!M.nextTabbableNode($))&&(re=X),0<=re){var be=re===c.tabbableGroups.length-1?0:re+1,Ce=c.tabbableGroups[be];Q=0<=dr($)?Ce.firstTabbableNode:Ce.firstDomTabbableNode}else Oi(A)||(Q=M.nextTabbableNode($))}}else Q=f("fallbackFocus");return Q},y=function(D){var $=wa(D);return 0<=d($,D)?void 0:fi(l.clickOutsideDeactivates,D)?void r.deactivate({returnFocus:l.returnFocusOnDeactivate}):void(fi(l.allowOutsideClick,D)||D.preventDefault())},k=function(D){var $=wa(D),A=0<=d($,D);if(A||$ instanceof Document)A&&(c.mostRecentlyFocusedNode=$);else{D.stopImmediatePropagation();var z,V=!0;if(!c.mostRecentlyFocusedNode)V=!1;else if(0<dr(c.mostRecentlyFocusedNode)){var Q=d(c.mostRecentlyFocusedNode),X=c.containerGroups[Q].tabbableNodes;if(0<X.length){var M=X.findIndex(function(oe){return oe===c.mostRecentlyFocusedNode});0<=M&&(l.isKeyForward(c.recentNavEvent)?M+1<X.length&&(z=X[M+1],V=!1):0<=M-1&&(z=X[M-1],V=!1))}}else c.containerGroups.some(function(oe){return oe.tabbableNodes.some(function(se){return 0<dr(se)})})||(V=!1);V&&(z=E({target:c.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(c.recentNavEvent)})),m(z||c.mostRecentlyFocusedNode||g())}c.recentNavEvent=void 0},C=function(D){var $=1<arguments.length&&arguments[1]!==void 0&&arguments[1];c.recentNavEvent=D;var A=E({event:D,isBackward:$});A&&(Oi(D)&&D.preventDefault(),m(A))},R=function(D){(l.isKeyForward(D)||l.isKeyBackward(D))&&C(D,l.isKeyBackward(D))},I=function(D){UP(D)&&fi(l.escapeDeactivates,D)!==!1&&(D.preventDefault(),r.deactivate())},T=function(D){var $=wa(D);0<=d($,D)||fi(l.clickOutsideDeactivates,D)||fi(l.allowOutsideClick,D)||(D.preventDefault(),D.stopImmediatePropagation())},F=function(){if(c.active)return bm.activateTrap(a,r),c.delayInitialFocusTimer=l.delayInitialFocus?vm(function(){m(g())}):m(g()),i.addEventListener("focusin",k,!0),i.addEventListener("mousedown",y,{capture:!0,passive:!1}),i.addEventListener("touchstart",y,{capture:!0,passive:!1}),i.addEventListener("click",T,{capture:!0,passive:!1}),i.addEventListener("keydown",R,{capture:!0,passive:!1}),i.addEventListener("keydown",I),r},_=function(){if(c.active)return i.removeEventListener("focusin",k,!0),i.removeEventListener("mousedown",y,!0),i.removeEventListener("touchstart",y,!0),i.removeEventListener("click",T,!0),i.removeEventListener("keydown",R,!0),i.removeEventListener("keydown",I),r},J=function(D){var $=D.some(function(A){var z=Array.from(A.removedNodes);return z.some(function(V){return V===c.mostRecentlyFocusedNode})});$&&m(g())},B=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(J):void 0,W=function(){B&&(B.disconnect(),c.active&&!c.paused&&c.containers.map(function(D){B.observe(D,{subtree:!0,childList:!0})}))};return r={get active(){return c.active},get paused(){return c.paused},activate:function(D){if(c.active)return this;var $=u(D,"onActivate"),A=u(D,"onPostActivate"),z=u(D,"checkCanFocusTrap");z||b(),c.active=!0,c.paused=!1,c.nodeFocusedBeforeActivation=i.activeElement,$==null||$();var V=function(){z&&b(),F(),W(),A==null||A()};return z?(z(c.containers.concat()).then(V,V),this):(V(),this)},deactivate:function(D){if(!c.active)return this;var $=mm({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},D);clearTimeout(c.delayInitialFocusTimer),c.delayInitialFocusTimer=void 0,_(),c.active=!1,c.paused=!1,W(),bm.deactivateTrap(a,r);var A=u($,"onDeactivate"),z=u($,"onPostDeactivate"),V=u($,"checkCanReturnFocus"),Q=u($,"returnFocus","returnFocusOnDeactivate");A==null||A();var X=function(){vm(function(){Q&&m(v(c.nodeFocusedBeforeActivation)),z==null||z()})};return Q&&V?(V(v(c.nodeFocusedBeforeActivation)).then(X,X),this):(X(),this)},pause:function(D){if(c.paused||!c.active)return this;var $=u(D,"onPause"),A=u(D,"onPostPause");return c.paused=!0,$==null||$(),_(),W(),A==null||A(),this},unpause:function(D){if(!c.paused||!c.active)return this;var $=u(D,"onUnpause"),A=u(D,"onPostUnpause");return c.paused=!1,$==null||$(),b(),F(),W(),A==null||A(),this},updateContainerElements:function(D){var $=[].concat(D).filter(Boolean);return c.containers=$.map(function(A){return typeof A=="string"?i.querySelector(A):A}),c.active&&b(),W(),this}},r.updateContainerElements(n),r},JP=Object.freeze({__proto__:null,createFocusTrap:QP}),ZP=i1(JP),XP=i1(HP);function Jo(t){"@babel/helpers - typeof";return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Jo(t)}function e3(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function t3(t,n){for(var o,r=0;r<n.length;r++)o=n[r],o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,b0(o.key),o)}function n3(t,n,o){return n&&t3(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function r3(t,n,o){return n=ul(n),o3(t,m0()?Reflect.construct(n,o||[],ul(t).constructor):n.apply(t,o))}function o3(t,n){if(n&&(Jo(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return i3(t)}function i3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m0(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m0=function(){return!!t})()}function ul(t){return ul=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ul(t)}function a3(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&_u(t,n)}function _u(t,n){return _u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},_u(t,n)}function l3(t,n,o){return(n=b0(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function b0(t){var n=s3(t,"string");return Jo(n)=="symbol"?n:n+""}function s3(t,n){if(Jo(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,n);if(Jo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""}var xa=S,Oe=j,c3=ZP,u3=c3.createFocusTrap,d3=XP,f3=d3.isFocusable,Lu=function(t){function n(o){var r;e3(this,n),r=r3(this,n,[o]),l3(r,"getNodeForOption",function(l){var c,u=(c=this.internalOptions[l])!==null&&c!==void 0?c:this.originalOptions[l];if(typeof u=="function"){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];u=u.apply(void 0,f)}if(u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(l,"` was specified but was not a node, or did not return a node"))}var b=u;if(typeof u=="string"){var h;if(b=(h=this.getDocument())===null||h===void 0?void 0:h.querySelector(u),!b)throw new Error("`".concat(l,"` as selector refers to no known node"))}return b}),r.handleDeactivate=r.handleDeactivate.bind(r),r.handlePostDeactivate=r.handlePostDeactivate.bind(r),r.handleClickOutsideDeactivates=r.handleClickOutsideDeactivates.bind(r),r.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:r.handleDeactivate,onPostDeactivate:r.handlePostDeactivate,clickOutsideDeactivates:r.handleClickOutsideDeactivates},r.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=o.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a=="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){r.originalOptions[a]=i[a];continue}r.internalOptions[a]=i[a]}return r.outsideClick=null,r.focusTrapElements=o.containerElements||[],r.updatePreviousElement(),r}return a3(n,t),n3(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document>"u"?void 0:document)}},{key:"getReturnFocusNode",value:function(){var r=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return r||r!==!1&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var r=this.getDocument();r&&(this.previouslyFocusedElement=r.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(r){var i=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,r):this.originalOptions.clickOutsideDeactivates;return i&&(this.outsideClick={target:r.target,allowDeactivation:i}),i}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var r=this,i=function(){var l=r.getReturnFocusNode(),c=!!(r.originalOptions.returnFocusOnDeactivate&&l!==null&&l!==void 0&&l.focus&&(!r.outsideClick||r.outsideClick.allowDeactivation&&!f3(r.outsideClick.target,r.internalOptions.tabbableOptions))),u=r.internalOptions.preventScroll,d=u!==void 0&&u;c&&l.focus({preventScroll:d}),r.originalOptions.onPostDeactivate&&r.originalOptions.onPostDeactivate.call(null),r.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(i,i):i()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var r=this.focusTrapElements.some(Boolean);r&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(r){if(this.focusTrap){r.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var i=!r.active&&this.props.active,a=r.active&&!this.props.active,l=!r.paused&&this.props.paused,c=r.paused&&!this.props.paused;if(i&&(this.updatePreviousElement(),this.focusTrap.activate()),a)return void this.deactivateTrap();l&&this.focusTrap.pause(),c&&this.focusTrap.unpause()}else r.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var r=this,i=this.props.children?xa.Children.only(this.props.children):void 0;if(i){if(i.type&&i.type===xa.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var a=function(u){var d=r.props.containerElements;i&&(typeof i.ref=="function"?i.ref(u):i.ref&&(i.ref.current=u)),r.focusTrapElements=d||[u]},l=xa.cloneElement(i,{ref:a});return l}return null}}])}(xa.Component),pi=typeof Element>"u"?Function:Element;Lu.propTypes={active:Oe.bool,paused:Oe.bool,focusTrapOptions:Oe.shape({document:Oe.object,onActivate:Oe.func,onPostActivate:Oe.func,checkCanFocusTrap:Oe.func,onPause:Oe.func,onPostPause:Oe.func,onUnpause:Oe.func,onPostUnpause:Oe.func,onDeactivate:Oe.func,onPostDeactivate:Oe.func,checkCanReturnFocus:Oe.func,initialFocus:Oe.oneOfType([Oe.instanceOf(pi),Oe.string,Oe.bool,Oe.func]),fallbackFocus:Oe.oneOfType([Oe.instanceOf(pi),Oe.string,Oe.func]),escapeDeactivates:Oe.oneOfType([Oe.bool,Oe.func]),clickOutsideDeactivates:Oe.oneOfType([Oe.bool,Oe.func]),returnFocusOnDeactivate:Oe.bool,setReturnFocus:Oe.oneOfType([Oe.instanceOf(pi),Oe.string,Oe.bool,Oe.func]),allowOutsideClick:Oe.oneOfType([Oe.bool,Oe.func]),preventScroll:Oe.bool,tabbableOptions:Oe.shape({displayCheck:Oe.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:Oe.oneOfType([Oe.bool,Oe.func])}),trapStack:Oe.array,isKeyForward:Oe.func,isKeyBackward:Oe.func}),containerElements:Oe.arrayOf(Oe.instanceOf(pi)),children:Oe.oneOfType([Oe.element,Oe.instanceOf(pi)])},Lu.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:u3};var p3=Lu;o1(p3);j.string,j.string,j.string,j.oneOf(["small","large"]),j.string,j.string,j.oneOf(zn),j.oneOf(zn),j.bool,j.node,j.element,j.bool,j.bool,j.string,j.func,j.func,j.bool,j.bool,j.oneOfType([j.element,j.string]);j.string,j.bool,j.string,j.node;const g3=(t,n,o)=>`
      jn-fixed
      jn-right-0
      jn-transition-transform
      jn-ease-out
      jn-duration-300
      jn-inset-y-0
      jn-z-[9989]
      jn-grid
      jn-grid-rows-[auto_1fr]
      jn-bg-theme-panel
      jn-backdrop-blur
      jn-backdrop-saturate-150     
      jn-shadow-md
      ${o==="large"?`
          jn-w-[90%]
          xl:jn-w-[80%]
          2xl:jn-w-[1228px]`:`
          jn-w-[75%]
          xl:jn-w-[55%]
          2xl:jn-w-[844px]`}
			${t?"":"jn-translate-x-[100%]"}
			${t||n?"":"jn-invisible"}
		`.replace(/\n/g," ").replace(/\s+/g," "),h3=`
  jn-overflow-auto
`,m3=`
  jn-flex
  jn-items-center
  jn-py-4
  jn-px-8
`,b3=`
  jn-text-theme-high
  jn-text-lg
  jn-font-bold
`,v0=t=>{let{heading:n="",size:o,className:r="",opened:i=!1,closeable:a=!0,onClose:l,children:c,...u}=t;const[d,f]=p.useState(i),[g,b]=p.useState(a),[h,m]=p.useState(!1);p.useEffect(()=>{f(i)},[i]),p.useEffect(()=>{b(a)},[a]);const v=S.useRef(null);return S.useEffect(()=>()=>clearTimeout(v.current),[]),p.useEffect(()=>{d||(m(!0),clearTimeout(v.current),v.current=setTimeout(()=>m(!1),500))},[d]),S.createElement("div",he({className:`juno-panel ${g3(d,h,o)} ${r}`,role:"dialog","aria-labelledby":"juno-panel-title"},u),S.createElement("div",{className:`juno-panel-header ${m3}`},S.createElement("div",{className:`juno-panel-title ${b3}`,id:"juno-panel-title"},n),g&&S.createElement(zt,{icon:"close",onClick:E=>{f(!1),l&&l(E)},className:"juno-panel-close jn-ml-auto"})),S.createElement("div",{className:`juno-panel-content-wrapper ${h3}`},c))};v0.propTypes={heading:j.node,size:j.oneOf(["default","large"]),opened:j.bool,closeable:j.bool,onClose:j.func,className:j.string,children:j.node};const v3=`
  
`,y3=`
  jn-px-8
  jn-py-4
`,y0=t=>{let{className:n="",footer:o,children:r,...i}=t;return S.createElement("div",he({className:`juno-panel-body ${v3}  ${n}`},i),S.createElement("div",{className:`juno-panel-body-content ${y3}`},r),o)};y0.propTypes={className:j.string,children:j.any,footer:j.element};j.string,j.any;var w3=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(w3||{}),x3=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(x3||{}),j3=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(j3||{}),E3=(t=>(t[t.OpenListbox=0]="OpenListbox",t[t.CloseListbox=1]="CloseListbox",t[t.GoToOption=2]="GoToOption",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterOption=5]="RegisterOption",t[t.UnregisterOption=6]="UnregisterOption",t[t.RegisterLabel=7]="RegisterLabel",t))(E3||{});function Hs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,o=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],r=Fl(n(t.options.slice()),a=>a.dataRef.current.domRef.current),i=o?r.indexOf(o):null;return i===-1&&(i=null),{options:r,activeOptionIndex:i}}let k3={1(t){return t.dataRef.current.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},0(t){if(t.dataRef.current.disabled||t.listboxState===0)return t;let n=t.activeOptionIndex,{isSelected:o}=t.dataRef.current,r=t.options.findIndex(i=>o(i.dataRef.current.value));return r!==-1&&(n=r),{...t,listboxState:0,activeOptionIndex:n}},2(t,n){var o;if(t.dataRef.current.disabled||t.listboxState===1)return t;let r=Hs(t),i=Za(n,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...r,searchQuery:"",activeOptionIndex:i,activationTrigger:(o=n.trigger)==null?1:o}},3:(t,n)=>{if(t.dataRef.current.disabled||t.listboxState===1)return t;let o=t.searchQuery===""?1:0,r=t.searchQuery+n.value.toLowerCase(),i=(t.activeOptionIndex===null?t.options:t.options.slice(t.activeOptionIndex+o).concat(t.options.slice(0,t.activeOptionIndex+o))).find(l=>{var c;return!l.dataRef.current.disabled&&((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(r))}),a=i?t.options.indexOf(i):-1;return a===-1||a===t.activeOptionIndex?{...t,searchQuery:r}:{...t,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(t){return t.dataRef.current.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},5:(t,n)=>{let o={id:n.id,dataRef:n.dataRef},r=Hs(t,i=>[...i,o]);return t.activeOptionIndex===null&&t.dataRef.current.isSelected(n.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(o)),{...t,...r}},6:(t,n)=>{let o=Hs(t,r=>{let i=r.findIndex(a=>a.id===n.id);return i!==-1&&r.splice(i,1),r});return{...t,...o,activationTrigger:1}},7:(t,n)=>({...t,labelId:n.id})},Gf=p.createContext(null);Gf.displayName="ListboxActionsContext";function Xi(t){let n=p.useContext(Gf);if(n===null){let o=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Xi),o}return n}let Qf=p.createContext(null);Qf.displayName="ListboxDataContext";function ea(t){let n=p.useContext(Qf);if(n===null){let o=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,ea),o}return n}function O3(t,n){return ot(n.type,k3,t,n)}let S3=p.Fragment;function C3(t,n){let{value:o,defaultValue:r,form:i,name:a,onChange:l,by:c=(N,re)=>N===re,disabled:u=!1,horizontal:d=!1,multiple:f=!1,...g}=t;const b=d?"horizontal":"vertical";let h=jt(n),[m=f?[]:void 0,v]=Kw(o,l,r),[E,y]=p.useReducer(O3,{dataRef:p.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),k=p.useRef({static:!1,hold:!1}),C=p.useRef(null),R=p.useRef(null),I=p.useRef(null),T=pe(typeof c=="string"?(N,re)=>{let be=c;return(N==null?void 0:N[be])===(re==null?void 0:re[be])}:c),F=p.useCallback(N=>ot(_.mode,{1:()=>m.some(re=>T(re,N)),0:()=>T(m,N)}),[m]),_=p.useMemo(()=>({...E,value:m,disabled:u,mode:f?1:0,orientation:b,compare:T,isSelected:F,optionsPropsRef:k,labelRef:C,buttonRef:R,optionsRef:I}),[m,u,f,E]);Qe(()=>{E.dataRef.current=_},[_]),Pf([_.buttonRef,_.optionsRef],(N,re)=>{var be;y({type:1}),Ll(re,_l.Loose)||(N.preventDefault(),(be=_.buttonRef.current)==null||be.focus())},_.listboxState===0);let J=p.useMemo(()=>({open:_.listboxState===0,disabled:u,value:m}),[_,u,m]),B=pe(N=>{let re=_.options.find(be=>be.id===N);re&&V(re.dataRef.current.value)}),W=pe(()=>{if(_.activeOptionIndex!==null){let{dataRef:N,id:re}=_.options[_.activeOptionIndex];V(N.current.value),y({type:2,focus:Ne.Specific,id:re})}}),H=pe(()=>y({type:0})),D=pe(()=>y({type:1})),$=pe((N,re,be)=>N===Ne.Specific?y({type:2,focus:Ne.Specific,id:re,trigger:be}):y({type:2,focus:N,trigger:be})),A=pe((N,re)=>(y({type:5,id:N,dataRef:re}),()=>y({type:6,id:N}))),z=pe(N=>(y({type:7,id:N}),()=>y({type:7,id:null}))),V=pe(N=>ot(_.mode,{0(){return v==null?void 0:v(N)},1(){let re=_.value.slice(),be=re.findIndex(Ce=>T(Ce,N));return be===-1?re.push(N):re.splice(be,1),v==null?void 0:v(re)}})),Q=pe(N=>y({type:3,value:N})),X=pe(()=>y({type:4})),M=p.useMemo(()=>({onChange:V,registerOption:A,registerLabel:z,goToOption:$,closeListbox:D,openListbox:H,selectActiveOption:W,selectOption:B,search:Q,clearSearch:X}),[]),oe=p.useRef(null),se=En();return p.useEffect(()=>{oe.current&&r!==void 0&&se.addEventListener(oe.current,"reset",()=>{v==null||v(r)})},[oe,v]),S.createElement(Gf.Provider,{value:M},S.createElement(Qf.Provider,{value:_},S.createElement(zl,{value:ot(_.listboxState,{0:dt.Open,1:dt.Closed})},a!=null&&m!=null&&qf({[a]:m}).map((N,re)=>{let[be,Ce]=N;return S.createElement(Gw,{features:Vf.Hidden,ref:re===0?_e=>{var ie;oe.current=(ie=_e==null?void 0:_e.closest("form"))==null?null:ie}:void 0,...Ja({key:be,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:u,name:be,value:Ce})})}),mt({ourProps:{ref:h},theirProps:g,slot:J,defaultTag:S3,name:"Listbox"}))))}let $3="button";function P3(t,n){var o;let r=un(),{id:i=`headlessui-listbox-button-${r}`,...a}=t,l=ea("Listbox.Button"),c=Xi("Listbox.Button"),u=jt(l.buttonRef,n),d=En(),f=pe(E=>{switch(E.key){case Ie.Space:case Ie.Enter:case Ie.ArrowDown:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Ne.First)});break;case Ie.ArrowUp:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Ne.Last)})}}),g=pe(E=>{switch(E.key){case Ie.Space:E.preventDefault()}}),b=pe(E=>Mf(E.currentTarget)?E.preventDefault():void(l.listboxState===0?(c.closeListbox(),d.nextFrame(()=>{var y;return(y=l.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})})):(E.preventDefault(),c.openListbox()))),h=Ji(()=>{if(l.labelId)return[l.labelId,i].join(" ")},[l.labelId,i]),m=p.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled,value:l.value}),[l]),v={ref:u,id:i,type:If(t,l.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=l.optionsRef.current)==null?void 0:o.id,"aria-expanded":l.listboxState===0,"aria-labelledby":h,disabled:l.disabled,onKeyDown:f,onKeyUp:g,onClick:b};return mt({ourProps:v,theirProps:a,slot:m,defaultTag:$3,name:"Listbox.Button"})}let I3="label";function T3(t,n){let o=un(),{id:r=`headlessui-listbox-label-${o}`,...i}=t,a=ea("Listbox.Label"),l=Xi("Listbox.Label"),c=jt(a.labelRef,n);Qe(()=>l.registerLabel(r),[r]);let u=pe(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return mt({ourProps:{ref:c,id:r,onClick:u},theirProps:i,slot:d,defaultTag:I3,name:"Listbox.Label"})}let D3="ul",M3=Er.RenderStrategy|Er.Static;function N3(t,n){var o;let r=un(),{id:i=`headlessui-listbox-options-${r}`,...a}=t,l=ea("Listbox.Options"),c=Xi("Listbox.Options"),u=jt(l.optionsRef,n),d=En(),f=En(),g=Gi(),b=g===null?l.listboxState===0:(g&dt.Open)===dt.Open;p.useEffect(()=>{var y;let k=l.optionsRef.current;k&&l.listboxState===0&&k!==((y=Ki(k))==null?void 0:y.activeElement)&&k.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let h=pe(y=>{switch(f.dispose(),y.key){case Ie.Space:if(l.searchQuery!=="")return y.preventDefault(),y.stopPropagation(),c.search(y.key);case Ie.Enter:if(y.preventDefault(),y.stopPropagation(),l.activeOptionIndex!==null){let{dataRef:k}=l.options[l.activeOptionIndex];c.onChange(k.current.value)}l.mode===0&&(c.closeListbox(),Bt().nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}));break;case ot(l.orientation,{vertical:Ie.ArrowDown,horizontal:Ie.ArrowRight}):return y.preventDefault(),y.stopPropagation(),c.goToOption(Ne.Next);case ot(l.orientation,{vertical:Ie.ArrowUp,horizontal:Ie.ArrowLeft}):return y.preventDefault(),y.stopPropagation(),c.goToOption(Ne.Previous);case Ie.Home:case Ie.PageUp:return y.preventDefault(),y.stopPropagation(),c.goToOption(Ne.First);case Ie.End:case Ie.PageDown:return y.preventDefault(),y.stopPropagation(),c.goToOption(Ne.Last);case Ie.Escape:return y.preventDefault(),y.stopPropagation(),c.closeListbox(),d.nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})});case Ie.Tab:y.preventDefault(),y.stopPropagation();break;default:y.key.length===1&&(c.search(y.key),f.setTimeout(()=>c.clearSearch(),350))}}),m=Ji(()=>{var y;return(y=l.buttonRef.current)==null?void 0:y.id},[l.buttonRef.current]),v=p.useMemo(()=>({open:l.listboxState===0}),[l]),E={"aria-activedescendant":l.activeOptionIndex===null||(o=l.options[l.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":l.mode===1||void 0,"aria-labelledby":m,"aria-orientation":l.orientation,id:i,onKeyDown:h,role:"listbox",tabIndex:0,ref:u};return mt({ourProps:E,theirProps:a,slot:v,defaultTag:D3,features:M3,visible:b,name:"Listbox.Options"})}let R3="li";function _3(t,n){let o=un(),{id:r=`headlessui-listbox-option-${o}`,disabled:i=!1,value:a,...l}=t,c=ea("Listbox.Option"),u=Xi("Listbox.Option"),d=c.activeOptionIndex!==null&&c.options[c.activeOptionIndex].id===r,f=c.isSelected(a),g=p.useRef(null),b=t0(g),h=yn({disabled:i,value:a,domRef:g,get textValue(){return b()}}),m=jt(n,g);Qe(()=>{if(c.listboxState===0&&d&&c.activationTrigger!==0){let T=Bt();return T.requestAnimationFrame(()=>{var F,_;(_=(F=g.current)==null?void 0:F.scrollIntoView)==null||_.call(F,{block:"nearest"})}),T.dispose}},[g,d,c.listboxState,c.activationTrigger,c.activeOptionIndex]),Qe(()=>u.registerOption(r,h),[h,r]);let v=pe(T=>i?T.preventDefault():(u.onChange(a),void(c.mode===0&&(u.closeListbox(),Bt().nextFrame(()=>{var F;return(F=c.buttonRef.current)==null?void 0:F.focus({preventScroll:!0})}))))),E=pe(()=>i?u.goToOption(Ne.Nothing):void u.goToOption(Ne.Specific,r)),y=Tf(),k=pe(T=>y.update(T)),C=pe(T=>{y.wasMoved(T)&&(i||d||u.goToOption(Ne.Specific,r,0))}),R=pe(T=>{y.wasMoved(T)&&(i||d&&u.goToOption(Ne.Nothing))}),I=p.useMemo(()=>({active:d,selected:f,disabled:i}),[d,f,i]);return mt({ourProps:{id:r,ref:m,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,"aria-selected":f,disabled:void 0,onClick:v,onFocus:E,onPointerEnter:k,onMouseEnter:k,onPointerMove:C,onMouseMove:C,onPointerLeave:R,onMouseLeave:R},theirProps:l,slot:I,defaultTag:R3,name:"Listbox.Option"})}let L3=pt(C3),F3=pt(P3),A3=pt(T3),z3=pt(N3),H3=pt(_3),wi=Object.assign(L3,{Button:F3,Label:A3,Options:z3,Option:H3});const B3=`
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`,W3=`
  jn-appearance-none
  jn-h-[2.375rem]
  jn-inline-flex
  jn-items-center
  jn-px-4
  jn-rounded-3px
  jn-select-none
  jn-text-base
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
`,V3=`
  jn-border
  jn-border-theme-success
`,q3=`
  jn-border
  jn-border-theme-error
`,U3=`
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`,Y3=`
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`,K3=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,w0=p.createContext(),Fu=t=>{let{ariaLabel:n="",children:o=null,className:r="",defaultValue:i,disabled:a=!1,error:l=!1,errortext:c="",helptext:u="",id:d="",invalid:f=!1,label:g,loading:b=!1,multiple:h=!1,name:m,onChange:v,onValueChange:E,placeholder:y="Select…",required:k=!1,successtext:C="",truncateOptions:R=!1,valid:I=!1,value:T,valueLabel:F,variant:_="default",width:J="full",wrapperClassName:B="",...W}=t;const H=ve=>typeof ve!="string"||ve.trim().length!==0,D=d||"juno-select-"+p.useId(),$="juno-select-helptext-"+p.useId(),[A,z]=p.useState(new Map),[V,Q]=p.useState(!1),[X,M]=p.useState(!1),[oe,se]=p.useState(!1),[N,re]=p.useState(!1),be=p.useMemo(()=>f||!!(c&&H(c)),[f,c]),Ce=p.useMemo(()=>I||!!(C&&H(C)),[I,C]);p.useEffect(()=>{Q(l)},[l]),p.useEffect(()=>{M(be)},[be]),p.useEffect(()=>{se(Ce)},[Ce]),p.useEffect(()=>{re(b)},[b]);const _e=u1(),ie=[Tw(4),x4({crossAxis:!0,allowedPlacements:["bottom","top"]}),w4({boundary:"viewport",apply(ve){let{availableWidth:Be,availableHeight:at,elements:Xe}=ve;Object.assign(Xe.floating.style,{maxWidth:`${Be}px`,maxHeight:`${at}px`,overflowY:"auto"})}}),Dw()],me=ve=>{const Be=Xe=>{var Un;const Vt=A.get(Xe);if(Vt)return(Un=Vt.displayName)!=null&&Un.length?Vt.displayName:null};return ve.map(Xe=>Be(Xe)).filter(Xe=>Xe&&0<Xe.toString().trim().length).join(", ")};return S.createElement(w0.Provider,{value:{truncateOptions:R,addOptionValueAndLabel:(ve,Be,at)=>{z(Xe=>new Map(Xe).set(ve||at,{val:ve,label:Be,children:at,displayName:at||Be||ve}))}}},S.createElement("div",{className:`
          juno-select-wrapper 
          jn-relative
          ${J=="auto"?"jn-inline-block":"jn-block"}
          ${J=="auto"?"jn-w-auto":"jn-w-full"}
          ${B}
        `},S.createElement(wi,{disabled:a||N||V,multiple:h,name:m,onChange:ve=>{v&&v(ve||""),E&&E(ve||"")},value:T,defaultValue:i},g&&H(g)?S.createElement(wi.Label,{as:Mu,htmlFor:D,text:g,className:`${B3}`,disabled:a||N||V,required:k,floating:!0,minimized:!0}):"",S.createElement(Ds,{composable:!0,adaptiveWidth:!0,middleware:ie},S.createElement(Ds.Reference,null,S.createElement(wi.Button,he({"aria-describedby":u?$:"","aria-label":n||g,as:"button",id:D,className:`
                    juno-select-toggle
                    ${_&&_.length?"juno-select-toggle-"+_:"juno-select-toggle-default"}
                    ${J=="auto"?"jn-w-auto":"jn-w-full"}
                    ${W3}
                    ${g&&H(g)?"jn-pt-[0.4rem]":""}
                    ${a?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}
                    ${N||V?"jn-justify-center":"jn-justify-between"}
                    ${X?"juno-select-invalid "+q3:""} 
                    ${oe?"juno-select-valid "+V3:""}  
                    
                    ${N?"juno-select-loading jn-cursor-not-allowed":""}
                    ${V?"juno-select-error jn-cursor-not-allowed":""}
                    ${r}
                  `},W),ve=>{var Xe;let{open:Be,value:at}=ve;return V||N?S.createElement("span",{className:`${U3}`},V?S.createElement(zt,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):N?S.createElement($f,{className:"jn-cursor-not-allowed"}):""):S.createElement(S.Fragment,null,S.createElement("span",{className:`${K3}`},h?me(at)||F||at.join(", ")||y:((Xe=A.get(at))==null?void 0:Xe.displayName)||F||at||y),S.createElement("span",{className:"jn-flex"},oe?S.createElement(zt,{icon:"checkCircle",color:"jn-text-theme-success"}):"",X?S.createElement(zt,{icon:"dangerous",color:"jn-text-theme-error"}):"",S.createElement("span",null,S.createElement(zt,{icon:Be?"expandLess":"expandMore"}))))})),rr.createPortal(S.createElement(Ds.Content,null,S.createElement(wi.Options,{unmount:!1,className:`
                        juno-select-menu
                        ${Y3}
                      `},o)),_e||document.body))),c&&H(c)?S.createElement(Ei,{text:c,variant:"error"}):"",C&&H(C)?S.createElement(Ei,{text:C,variant:"success"}):"",u&&H(u)?S.createElement(Ei,{text:u,id:$}):""))},G3=t=>{const{multiple:n,value:o}=t;if(o){if(n&&!Array.isArray(o))return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.");if(!n&&typeof o!="string")return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")}};Fu.propTypes={ariaLabel:j.string,children:j.node,className:j.string,defaultValue:j.string,disabled:j.bool,error:j.bool,errortext:j.node,helptext:j.node,id:j.string,invalid:j.bool,label:j.string,loading:j.bool,multiple:j.bool,name:j.string,onChange:j.func,onValueChange:j.func,placeholder:j.string,required:j.bool,successtext:j.node,truncateOptions:j.bool,valid:j.bool,value:G3,valueLabel:j.string,variant:j.oneOf(["default","primary","primary-danger","subdued"]),width:j.oneOf(["full","auto"]),wrapperClassName:j.string};const Q3=`
  jn-flex
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-pr-[0.875rem]
  jn-select-none
  data-[headlessui-state=active]:jn-outline-none
  data-[headlessui-state=active]:jn-ring-2
  data-[headlessui-state=active]:jn-ring-inset
  data-[headlessui-state=active]:jn-ring-theme-focus
  data-[headlessui-state=active]:jn-bg-theme-background-lvl-3
`,J3=`
  jn-text-theme-default
  jn-pl-[2.375rem]
`,Z3=`
  jn-text-theme-accent
  jn-pl-3.5
`,X3=`
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`,eI=`
  jn-opacity-50
  jn-cursor-not-allowed
`,tI=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,Au=t=>{let{children:n,className:o="",disabled:r=!1,value:i="",label:a,...l}=t;const c=p.useContext(w0),{truncateOptions:u,addOptionValueAndLabel:d}=c||{};return p.useEffect(()=>{d(i,a,n)},[i,a,n]),S.createElement(wi.Option,{as:p.Fragment,disabled:r,value:i||n},f=>{let{selected:g}=f;return S.createElement("li",he({className:`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${Q3}
          ${g?"juno-select-option-selected "+Z3:J3}
          ${r?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}
          ${u?"juno-select-option-truncate":""}
          ${o}
        `},l),g?S.createElement(zt,{icon:"check",size:"18",className:`${X3}`}):"",S.createElement("span",{className:`
            ${r?eI:""}
            ${u?tI:""}
          `},n||a||i))})};Au.propTypes={children:j.string,className:j.string,disabled:j.bool,value:j.string,label:j.string};j.oneOf(["","number","select","input"]),j.number,j.number,j.bool,j.bool,j.func,j.func,j.func,j.func,j.string;var nI=function(t){return`
    jn-inline-flex
    jn-basis-auto
    jn-shrink
    jn-items-center
    jn-flex-nowrap
    jn-text-xs
    jn-p-px
    jn-border
    jn-rounded
    jn-border-theme-background-lvl-4
    jn-group
    `.concat(t?"jn-cursor-pointer":"",`
  `)},rI=function(t){return`
    jn-bg-theme-background-lvl-4
    jn-text-theme-high
    `.concat(t?"group-hover:jn-text-theme-highest":"",`
    jn-px-1
    jn-py-0.5
    jn-rounded-sm
    jn-inline-block
  `)},wm=function(t){return`
    jn-px-1
    jn-py-0.5
    jn-text-theme-high
    `.concat(t?"group-hover:jn-text-theme-highest":"",`
    jn-inline-block
  `)},x0=function(t){var n=t.uid,o=n===void 0?"":n,r=t.pillKey,i=r===void 0?"":r,a=t.pillKeyLabel,l=a===void 0?"":a,c=t.pillValue,u=c===void 0?"":c,d=t.pillValueLabel,f=d===void 0?"":d,g=t.closeable,b=t.onClick,h=b===void 0?void 0:b,m=t.onClose,v=m===void 0?void 0:m,E=t.className,y=E===void 0?"":E,k=lt(t,["uid","pillKey","pillKeyLabel","pillValue","pillValueLabel","closeable","onClick","onClose","className"]),C=function(I){v&&v(I,o||i||u)},R=function(I){h&&h(I,o||i||u)};return S.createElement("div",de({className:"juno-pill ".concat(nI(!!h)," ").concat(y)},k),u||f?S.createElement(S.Fragment,null,(l||i)&&S.createElement("span",{className:"pill-key ".concat(rI(!!h)),onClick:function(I){return R(I)}},l||i),S.createElement("span",{className:"pill-value ".concat(wm(!!h)),onClick:function(I){return R(I)}},f||u)):S.createElement("span",{className:"".concat(wm(!1))},"set pillValue or pillValueLabel"),g!==void 0&&g&&S.createElement(no,{icon:"close",size:18,onClick:function(I){return C(I)}}))};p.createContext({});const oI=`
  jn-h-px 
  jn-w-full
  jn-bg-theme-background-lvl-3
`,xm=S.forwardRef((t,n)=>{let{className:o="",...r}=t;return S.createElement("div",he({className:`juno-select-divider ${oI} ${o}`,ref:n},r))});xm.displayName="SelectDivider",xm.propTypes={className:j.string};j.string,j.string,j.string,j.string,j.node,j.bool,j.string,j.bool,j.bool,j.string,j.node,j.bool,j.string,j.oneOf(["default","primary","primary-danger","subdued"]),j.func,j.func,j.func,j.string,j.bool,j.bool,j.bool,j.string;p.createContext(void 0);var iI=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,aI=`
  jn-text-theme-accent
`,lI=`
  jn-text-theme-danger 
`,sI=`
  jn-text-theme-success
`,cI=`
  jn-text-theme-warning  
`,uI=`
  jn-text-theme-on-default
`,j0=function(t){var n=t.variant,o=n===void 0?"default":n,r=t.size,i=r===void 0?null:r,a=t.className,l=a===void 0?"":a,c=t.color,u=c===void 0?"":c,d=lt(t,["variant","size","className","color"]),f=function(b){return b==="small"?"1rem":b==="large"?"3rem":b},g=i?{width:f(i),height:f(i)}:{};return S.createElement("svg",de({className:"juno-spinner ".concat(iI," ").concat(u||function(){return o==="primary"?aI:o==="danger"?lI:o==="success"?sI:o==="warning"?cI:uI}()," ").concat(l),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:g,role:"progressbar"},d),S.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))},dI=function(t){return t==="0"?"jn-gap-0":t==="px"?"jn-gap-px":t==="0.5"?"jn-gap-0.5":t==="1"?"jn-gap-1":t==="1.5"?"jn-gap-1.5":t==="2"?"jn-gap-2":t==="2.5"?"jn-gap-2.5":t==="3"?"jn-gap-3":t==="3.5"?"jn-gap-3.5":t==="4"?"jn-gap-4":t==="5"?"jn-gap-5":t==="6"?"jn-gap-6":t==="7"?"jn-gap-7":t==="8"?"jn-gap-8":t==="9"?"jn-gap-9":t==="10"?"jn-gap-10":t==="11"?"jn-gap-11":t==="12"?"jn-gap-12":t==="14"?"jn-gap-14":t==="16"?"jn-gap-16":t==="20"?"jn-gap-20":t==="24"?"jn-gap-24":t==="28"?"jn-gap-28":t==="32"?"jn-gap-32":t==="36"?"jn-gap-36":t==="40"?"jn-gap-40":t==="44"?"jn-gap-44":t==="48"?"jn-gap-48":t==="52"?"jn-gap-52":t==="56"?"jn-gap-56":t==="60"?"jn-gap-60":t==="64"?"jn-gap-64":t==="72"?"jn-gap-72":t==="80"?"jn-gap-80":t==="96"?"jn-gap-96":"jn-gap-0"},fI=function(t,n,o){return`
      `.concat(t==="vertical"?"jn-flex jn-flex-col":"jn-flex jn-flex-row",`
      `).concat(o&&"jn-flex-wrap",`
      `).concat(dI(n),`
    `)},pI=function(t){return t==="start"?"jn-items-start":t==="end"?"jn-items-end":t==="center"?"jn-items-center":t==="baseline"?"jn-items-baseline":t==="stretch"?"jn-items-stretch":""},gI=function(t){return t==="start"?"jn-justify-start":t==="end"?"jn-justify-end":t==="center"?"jn-justify-center":t==="between"?"jn-justify-between":t==="around"?"jn-justify-around":t==="evenly"?"jn-justify-evenly":""},xn=function(t){var n=t.direction,o=n===void 0?"horizontal":n,r=t.gap,i=r===void 0?"0":r,a=t.alignment,l=a===void 0?"stretch":a,c=t.distribution,u=c===void 0?"start":c,d=t.wrap,f=t.className,g=f===void 0?"":f,b=t.children,h=b===void 0?null:b,m=lt(t,["direction","gap","alignment","distribution","wrap","className","children"]);return S.createElement("div",de({className:"juno-stack ".concat(fI(o,i,d!==void 0&&d)," ").concat(pI(l)," ").concat(gI(u)," ").concat(g||"")},m),h)};j.string,j.string,j.string,j.bool,j.oneOf(["small","default","large"]),j.bool,j.bool,j.bool,j.bool,j.node,j.node,j.node,j.string,j.func,j.func,j.string;j.string,j.string,j.string,j.bool,j.bool,j.node,j.bool,j.bool,j.string,j.bool,j.string,j.string,j.func,j.func;p.createContext(void 0);j.string,j.string,j.oneOfType([j.string,j.number]),j.string,j.string,j.bool,j.bool,j.bool,j.bool,j.bool,j.bool,j.string,j.string,j.func,j.func,j.func,j.node,j.node,j.node,j.oneOf(["full","auto"]),j.string;j.string,j.string,j.string,j.string,j.node,j.string,j.bool,j.bool,j.string,j.bool,j.string,j.string,j.bool,j.func;j.oneOf(["text","password","email","tel","url","number"]),j.string,j.string,j.string,j.string,j.string,j.node,j.bool,j.bool,j.string,j.bool,j.string,j.bool,j.string,j.bool,j.func,j.func,j.func;j.string,j.bool,j.string,j.string,j.func;function E0(t){return k0(t)?(t.nodeName||"").toLowerCase():"#document"}function ta(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function hI(t){var n;return(n=(k0(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function k0(t){return t instanceof Node||t instanceof ta(t).Node}function en(t){return t instanceof Element||t instanceof ta(t).Element}function Kl(t){return t instanceof HTMLElement||t instanceof ta(t).HTMLElement}function zu(t){return typeof ShadowRoot<"u"&&(t instanceof ShadowRoot||t instanceof ta(t).ShadowRoot)}function mI(t){return["html","body","#document"].includes(E0(t))}function bI(t){return ta(t).getComputedStyle(t)}function vI(t){if(E0(t)==="html")return t;const n=t.assignedSlot||t.parentNode||zu(t)&&t.host||hI(t);return zu(n)?n.host:n}function yI(t){let n=t.activeElement;for(;((o=n)==null||(r=o.shadowRoot)==null?void 0:r.activeElement)!=null;){var o,r;n=n.shadowRoot.activeElement}return n}function Ni(t,n){if(!t||!n)return!1;const o=n.getRootNode&&n.getRootNode();if(t.contains(n))return!0;if(o&&zu(o))for(let r=n;r;){if(t===r)return!0;r=r.parentNode||r.host}return!1}function wI(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function xI(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(n=>{let{brand:o,version:r}=n;return o+"/"+r}).join(" "):navigator.userAgent}function jI(t){if(t.mozInputSource===0&&t.isTrusted)return!0;const n=/Android/i;return(n.test(wI())||n.test(xI()))&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}function EI(t){return t.width===0&&t.height===0||t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType!=="mouse"||1>t.width&&1>t.height&&t.pressure===0&&t.detail===0}function dl(t,n){const o=["mouse","pen"];return n||o.push("",void 0),o.includes(t)}function kI(t){return"nativeEvent"in t}function OI(t){return t.matches("html,body")}function Jn(t){return(t==null?void 0:t.ownerDocument)||document}function za(t,n){if(n==null)return!1;if("composedPath"in t)return t.composedPath().includes(n);const o=t;return o.target!=null&&n.contains(o.target)}function SI(t){return"composedPath"in t?t.composedPath()[0]:t.target}const CI="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function $I(t){return Kl(t)&&t.matches(CI)}function Hu(t){return p.useMemo(()=>t.every(n=>n==null)?null:n=>{t.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})},t)}var Ri=typeof document>"u"?p.useEffect:p.useLayoutEffect;let Bs=!1,PI=0;const jm=()=>"floating-ui-"+PI++;function II(){const[t,n]=p.useState(()=>Bs?jm():void 0);return Ri(()=>{t==null&&n(jm())},[]),p.useEffect(()=>{Bs||(Bs=!0)},[]),t}const TI=jr.useId,O0=TI||II;function DI(){const t=new Map;return{emit(n,o){var r;(r=t.get(n))==null||r.forEach(i=>i(o))},on(n,o){t.set(n,[...t.get(n)||[],o])},off(n,o){var r;t.set(n,((r=t.get(n))==null?void 0:r.filter(i=>i!==o))||[])}}}const MI=p.createContext(null),NI=p.createContext(null),S0=()=>{var t;return((t=p.useContext(MI))==null?void 0:t.id)||null},Jf=()=>p.useContext(NI);function Zf(t){return"data-floating-ui-"+t}function Em(t){const n=p.useRef(t);return Ri(()=>{n.current=t}),n}const km=Zf("safe-polygon");function Ws(t,n,o){return o&&!dl(o)?0:typeof t=="number"?t:t==null?void 0:t[n]}function RI(t,n){n===void 0&&(n={});const{open:o,onOpenChange:r,dataRef:i,events:a,elements:{domReference:l,floating:c},refs:u}=t,{enabled:d=!0,delay:f=0,handleClose:g=null,mouseOnly:b=!1,restMs:h=0,move:m=!0}=n,v=Jf(),E=S0(),y=Em(g),k=Em(f),C=p.useRef(),R=p.useRef(),I=p.useRef(),T=p.useRef(),F=p.useRef(!0),_=p.useRef(!1),J=p.useRef(()=>{}),B=p.useCallback(()=>{var $;const A=($=i.current.openEvent)==null?void 0:$.type;return(A==null?void 0:A.includes("mouse"))&&A!=="mousedown"},[i]);p.useEffect(()=>{function $(){clearTimeout(R.current),clearTimeout(T.current),F.current=!0}if(d)return a.on("dismiss",$),()=>{a.off("dismiss",$)}},[d,a]),p.useEffect(()=>{function $(z){B()&&r(!1,z)}if(!d||!y.current||!o)return;const A=Jn(c).documentElement;return A.addEventListener("mouseleave",$),()=>{A.removeEventListener("mouseleave",$)}},[c,o,r,d,y,i,B]);const W=p.useCallback(function($,A){A===void 0&&(A=!0);const z=Ws(k.current,"close",C.current);z&&!I.current?(clearTimeout(R.current),R.current=setTimeout(()=>r(!1,$),z)):A&&(clearTimeout(R.current),r(!1,$))},[k,r]),H=p.useCallback(()=>{J.current(),I.current=void 0},[]),D=p.useCallback(()=>{if(_.current){const $=Jn(u.floating.current).body;$.style.pointerEvents="",$.removeAttribute(km),_.current=!1}},[u]);return p.useEffect(()=>{function $(){return!!i.current.openEvent&&["click","mousedown"].includes(i.current.openEvent.type)}function A(Q){if(clearTimeout(R.current),F.current=!1,!(b&&!dl(C.current)||0<h&&Ws(k.current,"open")===0)){const X=Ws(k.current,"open",C.current);X?R.current=setTimeout(()=>{r(!0,Q)},X):r(!0,Q)}}function z(Q){if($())return;J.current();const X=Jn(c);if(clearTimeout(T.current),y.current){o||clearTimeout(R.current),I.current=y.current({...t,tree:v,x:Q.clientX,y:Q.clientY,onClose(){D(),H(),W(Q)}});const oe=I.current;return X.addEventListener("mousemove",oe),void(J.current=()=>{X.removeEventListener("mousemove",oe)})}(C.current!=="touch"||!Ni(c,Q.relatedTarget))&&W(Q)}function V(Q){$()||(y.current==null||y.current({...t,tree:v,x:Q.clientX,y:Q.clientY,onClose(){D(),H(),W(Q)}})(Q))}if(d&&en(l)){const Q=l;return o&&Q.addEventListener("mouseleave",V),c==null||c.addEventListener("mouseleave",V),m&&Q.addEventListener("mousemove",A,{once:!0}),Q.addEventListener("mouseenter",A),Q.addEventListener("mouseleave",z),()=>{o&&Q.removeEventListener("mouseleave",V),c==null||c.removeEventListener("mouseleave",V),m&&Q.removeEventListener("mousemove",A),Q.removeEventListener("mouseenter",A),Q.removeEventListener("mouseleave",z)}}},[l,c,d,t,b,h,m,W,H,D,r,o,v,k,y,i]),Ri(()=>{var $;if(d&&o&&($=y.current)!=null&&$.__options.blockPointerEvents&&B()){const V=Jn(c).body;if(V.setAttribute(km,""),V.style.pointerEvents="none",_.current=!0,en(l)&&c){var A,z;const Q=l,X=v==null||(A=v.nodesRef.current.find(M=>M.id===E))==null||(z=A.context)==null?void 0:z.elements.floating;return X&&(X.style.pointerEvents=""),Q.style.pointerEvents="auto",c.style.pointerEvents="auto",()=>{Q.style.pointerEvents="",c.style.pointerEvents=""}}}},[d,o,E,c,l,v,y,i,B]),Ri(()=>{o||(C.current=void 0,H(),D())},[o,H,D]),p.useEffect(()=>()=>{H(),clearTimeout(R.current),clearTimeout(T.current),D()},[d,l,H,D]),p.useMemo(()=>{function $(A){C.current=A.pointerType}return d?{reference:{onPointerDown:$,onPointerEnter:$,onMouseMove(A){o||h===0||(clearTimeout(T.current),T.current=setTimeout(()=>{F.current||r(!0,A.nativeEvent)},h))}},floating:{onMouseEnter(){clearTimeout(R.current)},onMouseLeave(A){a.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),W(A.nativeEvent,!1)}}}:{}},[a,d,h,o,r,W])}function Vs(t,n){let o=t.filter(i=>{var a;return i.parentId===n&&((a=i.context)==null?void 0:a.open)}),r=o;for(;r.length;)r=t.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var c;return i.parentId===l.id&&((c=i.context)==null?void 0:c.open)})}),o=o.concat(r);return o}function Om(t){return Kl(t.target)&&t.target.tagName==="BUTTON"}function Sm(t){return $I(t)}function _I(t,n){n===void 0&&(n={});const{open:o,onOpenChange:r,dataRef:i,elements:{domReference:a}}=t,{enabled:l=!0,event:c="click",toggle:u=!0,ignoreMouse:d=!1,keyboardHandlers:f=!0}=n,g=p.useRef(),b=p.useRef(!1);return p.useMemo(()=>l?{reference:{onPointerDown(h){g.current=h.pointerType},onMouseDown(h){h.button!==0||dl(g.current,!0)&&d||c==="click"||(o&&u&&(!i.current.openEvent||i.current.openEvent.type==="mousedown")?r(!1,h.nativeEvent):(h.preventDefault(),r(!0,h.nativeEvent)))},onClick(h){return c==="mousedown"&&g.current?void(g.current=void 0):void(dl(g.current,!0)&&d||(o&&u&&(!i.current.openEvent||i.current.openEvent.type==="click")?r(!1,h.nativeEvent):r(!0,h.nativeEvent)))},onKeyDown(h){g.current=void 0,h.defaultPrevented||!f||Om(h)||(h.key===" "&&!Sm(a)&&(h.preventDefault(),b.current=!0),h.key==="Enter"&&r(!(o&&u),h.nativeEvent))},onKeyUp(h){h.defaultPrevented||!f||Om(h)||Sm(a)||h.key===" "&&b.current&&(b.current=!1,r(!(o&&u),h.nativeEvent))}}}:{},[l,i,c,d,f,a,u,o,r])}const LI=jr.useInsertionEffect,FI=LI||(t=>t());function Ha(t){const n=p.useRef(()=>{});return FI(()=>{n.current=t}),p.useCallback(function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n.current==null?void 0:n.current(...r)},[])}const AI={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},zI={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},HI=t=>{var n,o;return{escapeKeyBubbles:typeof t=="boolean"?t:(n=t==null?void 0:t.escapeKey)!=null&&n,outsidePressBubbles:typeof t=="boolean"?t:(o=t==null?void 0:t.outsidePress)==null||o}};function BI(t,n){n===void 0&&(n={});const{open:o,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:c,floating:u},dataRef:d}=t,{enabled:f=!0,escapeKey:g=!0,outsidePress:b=!0,outsidePressEvent:h="pointerdown",referencePress:m=!1,referencePressEvent:v="pointerdown",ancestorScroll:E=!1,bubbles:y}=n,k=Jf(),C=S0()!=null,R=Ha(typeof b=="function"?b:()=>!1),I=typeof b=="function"?R:b,T=p.useRef(!1),{escapeKeyBubbles:F,outsidePressBubbles:_}=HI(y),J=Ha(W=>{if(o&&f&&g&&W.key==="Escape"){const H=k?Vs(k.nodesRef.current,a):[];if(!F&&(W.stopPropagation(),0<H.length)){let D=!0;if(H.forEach($=>{var A;if((A=$.context)!=null&&A.open&&!$.context.dataRef.current.__escapeKeyBubbles)return void(D=!1)}),!D)return}i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1,kI(W)?W.nativeEvent:W)}}),B=Ha(W=>{const H=T.current;if(T.current=!1,H||typeof I=="function"&&!I(W))return;const D=SI(W),$="["+Zf("inert")+"]",A=Jn(u).querySelectorAll($);let z=en(D)?D:null;for(;z&&!mI(z);){const V=vI(z);if(V===Jn(u).body||!en(V))break;z=V}if(!(A.length&&en(D)&&!OI(D)&&!Ni(D,u)&&Array.from(A).every(V=>!Ni(z,V)))){if(Kl(D)&&u){const Q=0<D.clientWidth&&D.scrollWidth>D.clientWidth,X=0<D.clientHeight&&D.scrollHeight>D.clientHeight;let M=X&&W.offsetX>D.clientWidth;if(X&&bI(D).direction==="rtl"&&(M=W.offsetX<=D.offsetWidth-D.clientWidth),M||Q&&W.offsetY>D.clientHeight)return}const V=k&&Vs(k.nodesRef.current,a).some(Q=>{var X;return za(W,(X=Q.context)==null?void 0:X.elements.floating)});if(!(za(W,u)||za(W,c)||V)){const Q=k?Vs(k.nodesRef.current,a):[];if(0<Q.length){let X=!0;if(Q.forEach(M=>{var oe;if((oe=M.context)!=null&&oe.open&&!M.context.dataRef.current.__outsidePressBubbles)return void(X=!1)}),!X)return}i.emit("dismiss",{type:"outsidePress",data:{returnFocus:C?{preventScroll:!0}:jI(W)||EI(W)}}),r(!1,W)}}});return p.useEffect(()=>{function W($){r(!1,$)}if(!o||!f)return;d.current.__escapeKeyBubbles=F,d.current.__outsidePressBubbles=_;const H=Jn(u);g&&H.addEventListener("keydown",J),I&&H.addEventListener(h,B);let D=[];return E&&(en(c)&&(D=xr(c)),en(u)&&(D=D.concat(xr(u))),!en(l)&&l&&l.contextElement&&(D=D.concat(xr(l.contextElement)))),D=D.filter($=>{var A;return $!==((A=H.defaultView)==null?void 0:A.visualViewport)}),D.forEach($=>{$.addEventListener("scroll",W,{passive:!0})}),()=>{g&&H.removeEventListener("keydown",J),I&&H.removeEventListener(h,B),D.forEach($=>{$.removeEventListener("scroll",W)})}},[d,u,c,l,g,I,h,o,r,E,f,F,_,J,B]),p.useEffect(()=>{T.current=!1},[I,h]),p.useMemo(()=>f?{reference:{onKeyDown:J,[AI[v]]:W=>{m&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1,W.nativeEvent))}},floating:{onKeyDown:J,[zI[h]]:()=>{T.current=!0}}}:{},[f,i,m,h,v,r,J])}function WI(t){var n;t===void 0&&(t={});const{open:o=!1,onOpenChange:r,nodeId:i}=t,[a,l]=p.useState(null),c=((n=t.elements)==null?void 0:n.reference)||a,u=v4(t),d=Jf(),f=Ha((R,I)=>{R&&(b.current.openEvent=I),r==null||r(R,I)}),g=p.useRef(null),b=p.useRef({}),h=p.useState(()=>DI())[0],m=O0(),v=p.useCallback(R=>{const I=en(R)?{getBoundingClientRect:()=>R.getBoundingClientRect(),contextElement:R}:R;u.refs.setReference(I)},[u.refs]),E=p.useCallback(R=>{(en(R)||R===null)&&(g.current=R,l(R)),(en(u.refs.reference.current)||u.refs.reference.current===null||R!==null&&!en(R))&&u.refs.setReference(R)},[u.refs]),y=p.useMemo(()=>({...u.refs,setReference:E,setPositionReference:v,domReference:g}),[u.refs,E,v]),k=p.useMemo(()=>({...u.elements,domReference:c}),[u.elements,c]),C=p.useMemo(()=>({...u,refs:y,elements:k,dataRef:b,nodeId:i,floatingId:m,events:h,open:o,onOpenChange:f}),[u,i,m,h,o,f,y,k]);return Ri(()=>{const R=d==null?void 0:d.nodesRef.current.find(I=>I.id===i);R&&(R.context=C)}),p.useMemo(()=>({...u,context:C,refs:y,elements:k}),[u,y,k,C])}function VI(t,n){n===void 0&&(n={});const{open:o,onOpenChange:r,dataRef:i,events:a,refs:l,elements:{floating:c,domReference:u}}=t,{enabled:d=!0,keyboardOnly:f=!0}=n,g=p.useRef(""),b=p.useRef(!1),h=p.useRef();return p.useEffect(()=>{function m(){!o&&Kl(u)&&u===yI(Jn(u))&&(b.current=!0)}if(!d)return;const v=Jn(c),E=v.defaultView||window;return E.addEventListener("blur",m),()=>{E.removeEventListener("blur",m)}},[c,u,o,d]),p.useEffect(()=>{function m(v){(v.type==="referencePress"||v.type==="escapeKey")&&(b.current=!0)}if(d)return a.on("dismiss",m),()=>{a.off("dismiss",m)}},[a,d]),p.useEffect(()=>()=>{clearTimeout(h.current)},[]),p.useMemo(()=>d?{reference:{onPointerDown(m){let{pointerType:v}=m;g.current=v,b.current=!!(v&&f)},onMouseLeave(){b.current=!1},onFocus(m){var v;b.current||m.type==="focus"&&((v=i.current.openEvent)==null?void 0:v.type)==="mousedown"&&za(i.current.openEvent,u)||r(!0,m.nativeEvent)},onBlur(m){b.current=!1;const v=m.relatedTarget,E=en(v)&&v.hasAttribute(Zf("focus-guard"))&&v.getAttribute("data-type")==="outside";h.current=setTimeout(()=>{Ni(l.floating.current,v)||Ni(u,v)||E||r(!1,m.nativeEvent)})}}}:{},[d,f,u,l,i,r])}function qs(t,n,o){const r=new Map;return{...o==="floating"&&{tabIndex:-1},...t,...n.map(i=>i?i[o]:null).concat(t).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[c,u]=l;if(c.indexOf("on")!==0)i[c]=u;else if(r.has(c)||r.set(c,[]),typeof u=="function"){var d;(d=r.get(c))==null||d.push(u),i[c]=function(){for(var f,g=arguments.length,b=Array(g),h=0;h<g;h++)b[h]=arguments[h];return(f=r.get(c))==null?void 0:f.map(m=>m(...b)).find(m=>m!==void 0)}}}),i),{})}}function qI(t){t===void 0&&(t=[]);const n=t,o=p.useCallback(a=>qs(a,t,"reference"),n),r=p.useCallback(a=>qs(a,t,"floating"),n),i=p.useCallback(a=>qs(a,t,"item"),t.map(a=>a==null?void 0:a.item));return p.useMemo(()=>({getReferenceProps:o,getFloatingProps:r,getItemProps:i}),[o,r,i])}function UI(t,n){n===void 0&&(n={});const{open:o,floatingId:r}=t,{enabled:i=!0,role:a="dialog"}=n,l=O0();return p.useMemo(()=>{const c={id:r,role:a};return i?a==="tooltip"?{reference:{"aria-describedby":o?r:void 0},floating:c}:{reference:{"aria-expanded":o?"true":"false","aria-haspopup":a==="alertdialog"?"dialog":a,"aria-controls":o?r:void 0,...a==="listbox"&&{role:"combobox"},...a==="menu"&&{id:l}},floating:{...c,...a==="menu"&&{"aria-labelledby":l}}}:{}},[i,a,o,r,l])}var YI=function(t){var n=t===void 0?{}:t,o=n.initialOpen,r=n.variant,i=n.placement,a=i===void 0?"top":i,l=n.triggerEvent,c=l===void 0?"click":l,u=n.open,d=n.onOpenChange,f=n.disabled,g=f!==void 0&&f,b=p.useState(o!==void 0&&o),h=b[0],m=b[1],v=u??h,E=d??m,y=WI({placement:a,open:v,onOpenChange:E,whileElementsMounted:kw,middleware:[Tw(5),y4(),Dw()]}),k=y.context,C=_I(k,{enabled:u==null&&g===!1&&c==="click"}),R=RI(k,{move:!1,enabled:u==null&&g===!1&&c==="hover"}),I=VI(k,{enabled:u==null}),T=BI(k),F=UI(k,{role:"tooltip"}),_=qI([C,R,I,T,F]);return S.useMemo(function(){return de(de({open:v,setOpen:E,variant:r,disabled:g},_),y)},[v,E,r,g,_,y])},C0=S.createContext(null),$0=function(){var t=S.useContext(C0);if(t==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t};function KI(t){var n=t.initialOpen,o=t.placement,r=o===void 0?"top":o,i=t.variant,a=t.open,l=t.triggerEvent,c=l===void 0?"click":l,u=t.disabled,d=t.children,f=d===void 0?null:d,g=lt(t,["initialOpen","placement","variant","open","triggerEvent","disabled","children"]),b=YI({initialOpen:n!==void 0&&n,placement:r,variant:i,open:a,triggerEvent:c,disabled:u!==void 0&&u,props:g});return S.createElement(C0.Provider,{value:b},f)}var GI=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`,QI=`
    jn-mx-4
    jn-max-w-full
`,JI=`
    jn-shrink-0
`,ZI=function(t){return t==="error"?"dangerous":t},XI=S.forwardRef(function(t,n){var o=t.className,r=o===void 0?"":o,i=t.children,a=i===void 0?null:i,l=lt(t,["className","children"]),c=$0(),u=Hu([c.refs.setFloating,n]),d=c.variant;return S.createElement(S.Fragment,null,c.open&&S.createElement("div",de({className:"juno-tooltip juno-tooltip-".concat(d," ").concat(GI," ").concat(r),ref:u,style:de({},c.floatingStyles)},c.getFloatingProps(l)),d&&S.createElement(no,{icon:ZI(d),color:"jn-text-theme-".concat(d),className:"juno-tooltip-popover-icon ".concat(JI)}),S.createElement("p",{className:"".concat(QI)},a)))}),eT=S.forwardRef(function(t,n){var o=t.children,r=o===void 0?null:o,i=t.asChild,a=t.className,l=a===void 0?"":a,c=lt(t,["children","asChild","className"]),u=$0(),d=Hu([u.refs.setReference,n]);if(i!==void 0&&i&&S.isValidElement(r)){var f=r.props,g=f.ref,b=Hu([u.refs.setReference,n,g]),h=de(de(de({ref:b},c),f),{"data-state":u.open?"open":"closed",className:f.className+"".concat(u.disabled&&" jn-cursor-default")}),m=u.getReferenceProps(h);return S.cloneElement(r,m)}return S.createElement("button",de({ref:d,"data-state":u.open?"open":"closed"},u.getReferenceProps(c),{className:"".concat(l," ").concat(u.disabled&&" jn-cursor-default")}),r)});const tT={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},Cm=t=>{let n;const o=new Set,r=(f,g)=>{const b=typeof f=="function"?f(n):f;if(!Object.is(b,n)){const h=n;n=g??(typeof b!="object"||b===null)?b:Object.assign({},n,b),o.forEach(m=>m(n,h))}},i=()=>n,u={setState:r,getState:i,getInitialState:()=>d,subscribe:f=>(o.add(f),()=>o.delete(f)),destroy:()=>{(tT?"static":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},d=n=t(r,i,u);return u},P0=t=>t?Cm(t):Cm;var I0={exports:{}},T0={},D0={exports:{}},M0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=p;function nT(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var rT=typeof Object.is=="function"?Object.is:nT,oT=Zo.useState,iT=Zo.useEffect,aT=Zo.useLayoutEffect,lT=Zo.useDebugValue;function sT(t,n){var o=n(),r=oT({inst:{value:o,getSnapshot:n}}),i=r[0].inst,a=r[1];return aT(function(){i.value=o,i.getSnapshot=n,Us(i)&&a({inst:i})},[t,o,n]),iT(function(){return Us(i)&&a({inst:i}),t(function(){Us(i)&&a({inst:i})})},[t]),lT(o),o}function Us(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!rT(t,o)}catch{return!0}}function cT(t,n){return n()}var uT=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?cT:sT;M0.useSyncExternalStore=Zo.useSyncExternalStore!==void 0?Zo.useSyncExternalStore:uT;D0.exports=M0;var dT=D0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gl=p,fT=dT;function pT(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var gT=typeof Object.is=="function"?Object.is:pT,hT=fT.useSyncExternalStore,mT=Gl.useRef,bT=Gl.useEffect,vT=Gl.useMemo,yT=Gl.useDebugValue;T0.useSyncExternalStoreWithSelector=function(t,n,o,r,i){var a=mT(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=vT(function(){function u(h){if(!d){if(d=!0,f=h,h=r(h),i!==void 0&&l.hasValue){var m=l.value;if(i(m,h))return g=m}return g=h}if(m=g,gT(f,h))return m;var v=r(h);return i!==void 0&&i(m,v)?m:(f=h,g=v)}var d=!1,f,g,b=o===void 0?null:o;return[function(){return u(n())},b===null?void 0:function(){return u(b())}]},[n,o,r,i]);var c=hT(t,a[0],a[1]);return bT(function(){l.hasValue=!0,l.value=c},[c]),yT(c),c};I0.exports=T0;var wT=I0.exports;const xT=Ml(wT),jT={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},{useDebugValue:ET}=S,{useSyncExternalStoreWithSelector:kT}=xT;let $m=!1;const OT=t=>t;function N0(t,n=OT,o){(jT?"static":void 0)!=="production"&&o&&!$m&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),$m=!0);const r=kT(t.subscribe,t.getState,t.getServerState||t.getInitialState,n,o);return ET(r),r}var ST={};function CT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R0={exports:{}},Ys,Pm;function $T(){return Pm?Ys:(Pm=1,Ys="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ys)}var Ks,Im;function PT(){function t(){}function n(){}if(Im)return Ks;Im=1;var o=$T();return n.resetWarningCache=t,Ks=function(){function r(l,c,u,d,f,g){if(g!==o){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}function i(){return r}r.isRequired=r;var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},Ks}R0.exports=PT()();var IT=R0.exports,w=CT(IT);const TT=t=>(w.checkPropTypes({text:w.string.isRequired||w.object.isRequired,variant:w.oneOf(["info","warning","danger","error","success"])},t,"prop","MessageProvider.addMessage"),t),DT=t=>(w.checkPropTypes({id:w.string.isRequired},t,"prop","MessageProvider.removeMessage"),t),Tm=t=>`${t}-${(+new Date+Math.random()).toString(36).slice(-5)}}`,MT=(t,n)=>({storeId:Tm("store-"),messages:[],actions:{addMessage:o=>n().addMessage(o),removeMessage:o=>n().removeMessage(o),resetMessages:()=>n().resetMessages()},addMessage:({variant:o,text:r,...i})=>{TT({variant:o,text:r});let a=null;return t(l=>{if(0<=l.messages.findIndex(d=>JSON.stringify(d.text)===JSON.stringify(r)&&d.variant===o))return l;let u=l.messages.slice();return a=Tm("message-"),u.push({variant:o,text:r,id:a,...i}),{...l,messages:u}},!1,"messages-provider:addMessage"),a},removeMessage:o=>(DT({id:o}),t(r=>{const i=r.messages.findIndex(l=>l.id==o);if(0>i)return r;let a=r.messages.slice();return a.splice(i,1),{...r,messages:a}},!1,"messages-provider:removeMessage")),resetMessages:()=>t(o=>({...o,messages:[]}),!1,"messages-provider:resetMessages")}),_0=p.createContext(),L0=({children:t})=>S.createElement(_0.Provider,{value:P0((n,o)=>MT(n,o))},t);L0.propTypes={children:w.node};const F0=t=>N0(p.useContext(_0),t),NT=()=>F0(t=>t.messages),A0=()=>F0(t=>t.actions);function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Bu.apply(null,arguments)}var xe=function(){return xe=Object.assign||function(t){for(var n=1,o=arguments.length,r;n<o;n++)for(var i in r=arguments[n],r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},xe.apply(this,arguments)};function ii(t,n){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>n.indexOf(r)&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>n.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o}function we(){return we=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},we.apply(null,arguments)}w.string,w.any,w.oneOf(["open","closed"]),w.bool,w.node;function z0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function H0(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var o=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(n,i);return new a}return n.apply(this,arguments)};o.prototype=n.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(o,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),o}function G(t){return n=>{let{opacityVariable:o,opacityValue:r}=n;return r===void 0?o===void 0?`rgb(var(${t}))`:`rgba(var(${t}), var(${o}, 1))`:`rgba(var(${t}), ${r})`}}var RT={content:["./src/components/**/*.{js,jsx,ts,tsx,mdx}","./src/dummyComponents/*.{js,jsx,ts,tsx,mdx}","./src/docs/**/*.{js,jsx,ts,tsx,mdx}"],prefix:"jn-",theme:{fontFamily:{sans:['"IBM Plex Sans"',"ui-sans-serif","Arial","system-ui","sans-serif"],condensed:['"IBM Plex Sans Condensed"',"ui-sans-serif","Arial","system-ui","sans-serif"],serif:['"IBM Plex Serif"',"ui-serif","serif"],mono:['"IBM Plex Mono"',"ui-monospace","monospace"]},colors:{current:"currentColor","juno-grey-blue":{1:G("--color-juno-grey-blue-1-raw"),2:G("--color-juno-grey-blue-2-raw"),3:G("--color-juno-grey-blue-3-raw"),4:G("--color-juno-grey-blue-4-raw"),5:G("--color-juno-grey-blue-5-raw"),6:G("--color-juno-grey-blue-6-raw"),7:G("--color-juno-grey-blue-7-raw"),8:G("--color-juno-grey-blue-8-raw"),9:G("--color-juno-grey-blue-9-raw"),10:G("--color-juno-grey-blue-10-raw"),11:G("--color-juno-grey-blue-11-raw"),DEFAULT:G("--color-juno-grey-blue-11-raw")},"juno-blue":{1:G("--color-juno-blue-1-raw"),2:G("--color-juno-blue-2-raw"),3:G("--color-juno-blue-3-raw"),4:G("--color-juno-blue-4-raw"),5:G("--color-juno-blue-5-raw"),6:G("--color-juno-blue-6-raw"),7:G("--color-juno-blue-7-raw"),8:G("--color-juno-blue-8-raw"),9:G("--color-juno-blue-9-raw"),10:G("--color-juno-blue-10-raw"),DEFAULT:G("--color-juno-blue-5-raw")},"juno-turquoise":{1:G("--color-juno-turquoise-1-raw"),2:G("--color-juno-turquoise-2-raw"),3:G("--color-juno-turquoise-3-raw"),4:G("--color-juno-turquoise-4-raw"),5:G("--color-juno-turquoise-5-raw"),6:G("--color-juno-turquoise-6-raw"),7:G("--color-juno-turquoise-7-raw"),8:G("--color-juno-turquoise-8-raw"),9:G("--color-juno-turquoise-9-raw"),10:G("--color-juno-turquoise-10-raw"),DEFAULT:G("--color-juno-turquoise-5-raw")},"juno-grey-light":{1:G("--color-juno-grey-light-1-raw"),2:G("--color-juno-grey-light-2-raw"),3:G("--color-juno-grey-light-3-raw"),4:G("--color-juno-grey-light-4-raw"),5:G("--color-juno-grey-light-5-raw"),6:G("--color-juno-grey-light-6-raw"),7:G("--color-juno-grey-light-7-raw"),8:G("--color-juno-grey-light-8-raw"),9:G("--color-juno-grey-light-9-raw"),10:G("--color-juno-grey-light-10-raw"),11:G("--color-juno-grey-light-11-raw"),DEFAULT:G("--color-juno-grey-light-1-raw")},"juno-red":{1:G("--color-juno-red-1-raw"),2:G("--color-juno-red-2-raw"),3:G("--color-juno-red-3-raw"),4:G("--color-juno-red-4-raw"),5:G("--color-juno-red-5-raw"),6:G("--color-juno-red-6-raw"),7:G("--color-juno-red-7-raw"),8:G("--color-juno-red-8-raw"),DEFAULT:G("--color-juno-red-5-raw")},"sap-grey":{1:G("--color-sap-grey-1-raw"),2:G("--color-sap-grey-2-raw"),3:G("--color-sap-grey-3-raw"),4:G("--color-sap-grey-4-raw"),5:G("--color-sap-grey-5-raw"),6:G("--color-sap-grey-6-raw"),7:G("--color-sap-grey-7-raw"),8:G("--color-sap-grey-8-raw"),DEFAULT:G("--color-sap-grey-8-raw")},"sap-blue":{1:G("--color-sap-blue-1-raw"),2:G("--color-sap-blue-2-raw"),3:G("--color-sap-blue-3-raw"),4:G("--color-sap-blue-4-raw"),5:G("--color-sap-blue-5-raw"),6:G("--color-sap-blue-6-raw"),DEFAULT:G("--color-sap-blue-5-raw")},"sap-gold":{DEFAULT:G("--color-sap-gold-raw")},"sap-purple":{1:G("--color-sap-purple-1-raw"),2:G("--color-sap-purple-2-raw"),3:G("--color-sap-purple-3-raw"),4:G("--color-sap-purple-4-raw"),5:G("--color-sap-purple-5-raw"),6:G("--color-sap-purple-6-raw"),DEFAULT:G("--color-sap-purple-5-raw")},"sap-green":{1:G("--color-sap-green-1-raw"),2:G("--color-sap-green-2-raw"),3:G("--color-sap-green-3-raw"),4:G("--color-sap-green-4-raw"),5:G("--color-sap-green-5-raw"),6:G("--color-sap-green-6-raw"),DEFAULT:G("--color-sap-green-5-raw")},"sap-orange":{1:G("--color-sap-orange-1-raw"),2:G("--color-sap-orange-2-raw"),3:G("--color-sap-orange-3-raw"),4:G("--color-sap-orange-4-raw"),5:G("--color-sap-orange-5-raw"),6:G("--color-sap-orange-6-raw"),DEFAULT:G("--color-sap-orange-5-raw")},white:G("--color-white-raw"),black:G("--color-black-raw"),transparent:"transparent",theme:{accent:G("--color-accent-raw"),danger:G("--color-danger-raw"),error:G("--color-error-raw"),info:G("--color-info-raw"),success:G("--color-success-raw"),warning:G("--color-warning-raw"),focus:G("--color-focus-raw"),"background-lvl-0":G("--color-background-lvl-0-raw"),"background-lvl-1":G("--color-background-lvl-1-raw"),"background-lvl-2":G("--color-background-lvl-2-raw"),"background-lvl-3":G("--color-background-lvl-3-raw"),"background-lvl-4":G("--color-background-lvl-4-raw"),"background-lvl-5":G("--color-background-lvl-5-raw")}},extend:{backgroundColor:{theme:{"global-bg":G("--color-global-bg-raw"),"badge-default":"var(--color-badge-default-bg)","box-default":"var(--color-box-bg)","code-block":G("--color-codeblock-bg"),"content-area-bg":G("--color-content-area-bg-raw"),panel:"var(--color-panel-bg)",textinput:G("--color-textinput-bg"),"textinput-autofill":G("--color-textinput-autofill-bg"),select:G("--color-select-bg"),checkbox:G("--color-checkbox-bg"),radio:G("--color-radio-bg"),"radio-checked":G("--color-radio-checked-bg"),"switch-handle":G("--color-switch-handle-bg"),"switch-handle-checked":G("--color-switch-handle-checked-bg"),required:G("--color-required-bg"),introbox:G("--color-introbox-bg"),"datagridrow-selected":G("--color-datagridrow-selected"),"datalistrow-selected":G("--color-datalistrow-selected"),"message-border-danger":G("--color-message-danger-border"),"message-border-default":G("--color-message-default-border"),"message-border-error":G("--color-message-error-border"),"message-border-warning":G("--color-message-warning-border"),"message-border-success":G("--color-message-success-border"),"tab-navigation-top":G("--color-tabnavigation-top-bg"),filters:G("--color-filters-bg"),"filter-input":G("--color-filter-input-bg"),"filter-input-textinput":G("--color-filter-input-textinput-bg"),"filter-pill-key":G("--color-filter-pill-key-bg"),"modal-backdrop":"var(--color-modal-backdrop-bg)","sidenavigation-item-active":"var(--color-sidenavigation-item-active-bg)","topnavigation-item":"var(--color-topnavigation-item-bg)","topnavigation-item-active":"var(--color-topnavigation-item-active-bg)"}},backgroundImage:{"theme-message-default":"var(--gradient-message-default-bg)","theme-message-success":"var(--gradient-message-success-bg)","theme-message-warning":"var(--gradient-message-warning-bg)","theme-message-danger":"var(--gradient-message-danger-bg)","theme-message-error":"var(--gradient-message-error-bg)"},textColor:{theme:{highest:G("--color-text-highest-raw"),high:G("--color-text-high-raw"),default:G("--color-text-default-raw"),light:G("--color-text-light-raw"),disabled:G("--color-text-disabled-raw"),link:G("--color-text-link-raw"),"on-danger":G("--color-button-danger-text"),"on-default":G("--color-button-default-text"),textinput:G("--color-textinput-text"),"textinput-autofill":G("--color-textinput-autofill-text"),"textinput-autofill-label":G("--color-textinput-autofill-label"),"checkbox-checked":G("--color-checkbox-checked-color"),"sidenavigation-item-active":"var(--color-sidenavigation-item-active)"}},borderColor:{theme:{default:G("--color-default-border"),"codeblock-bar":G("--color-codeblock-bar-border"),"codeblock-tab-active":G("--color-text-default-raw"),"message-default":G("--color-message-default-border"),"message-danger":G("--color-message-danger-border"),"message-error":G("--color-message-error-border"),"message-warning":G("--color-message-warning-border"),"message-success":G("--color-message-success-border"),panel:G("--color-panel-border-raw"),"switch-default":G("--color-switch-default-border"),"switch-hover":G("--color-switch-hover-border"),"datalist-row":G("--color-datalist-row-border"),introbox:G("--color-introbox-border"),"tab-navigation-content-bottom":G("--color-tabnavigation-content-bottom-border"),"tab-active-bottom":G("--color-text-default-raw"),"filter-input":G("--color-filter-input-border"),"filter-pill":G("--color-filter-pill-border"),"box-default":"var(--color-box-border)","textinput-default":G("--color-textinput-default-border"),"tab-content-inactive-bottom":G("--color-background-lvl-4-raw")}},padding:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem","grid-column":"0 .5rem"},height:{textinput:"2.375rem",floatinglabelinput:"3rem","switch-default":"1.4375rem","switch-handle-default":"1.1875rem"},ringOffsetColor:{theme:{focus:G("--color-global-bg-raw")}},screens:{"3xl":"1856px"},width:{"switch-default":"2.625rem","switch-handle-default":"1.1875rem","grid-column-default":"var(--grid-column-default-width)","grid-col-1":"8.333333%","grid-col-2":"16.666667%","grid-col-3":"25%","grid-col-4":"33.333333%","grid-col-5":"41.666667%","grid-col-6":"50%","grid-col-7":"58.333333%","grid-col-8":"66.666667%","grid-col-9":"75%","grid-col-10":"83.333333%","grid-col-11":"91.666667%","grid-col-12":"100%"},borderRadius:{"3px":"3px"},margin:{"grid-row":"0 var(--grid-row-margin-x)"},flex:{"grid-column":"var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis)"}},borderWidth:{DEFAULT:"1px",0:"0",2:"2px",3:"3px",4:"4px",6:"6px"}},plugins:[]};z0(RT),w.bool,w.bool,w.node,w.oneOf(["head","inline","shadowRoot"]),w.string,w.oneOf(["open","closed"]);p.createContext();w.any,w.string,w.string,w.node,w.bool,w.oneOf(["open","closed"]),w.oneOf(["head","inline"]),w.string,w.any;var _T=["title","titleId"],Dm,Mm;function Wu(){return Wu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Wu.apply(null,arguments)}function LT(t,n){if(t==null)return{};var o=FT(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function FT(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var B0=function(t){var n=t.title,o=t.titleId,r=LT(t,_T);return p.createElement("svg",Wu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Dm||(Dm=p.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Mm||(Mm=p.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})))},AT=["title","titleId"],Nm;function Vu(){return Vu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Vu.apply(null,arguments)}function zT(t,n){if(t==null)return{};var o=HT(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function HT(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var W0=function(t){var n=t.title,o=t.titleId,r=zT(t,AT);return p.createElement("svg",Vu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Nm||(Nm=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"})))},BT=["title","titleId"],Rm;function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},qu.apply(null,arguments)}function WT(t,n){if(t==null)return{};var o=VT(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function VT(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var V0=function(t){var n=t.title,o=t.titleId,r=WT(t,BT);return p.createElement("svg",qu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Rm||(Rm=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))},qT=["title","titleId"],_m;function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Uu.apply(null,arguments)}function UT(t,n){if(t==null)return{};var o=YT(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function YT(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var q0=function(t){var n=t.title,o=t.titleId,r=UT(t,qT);return p.createElement("svg",Uu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,_m||(_m=p.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"})))},KT=["title","titleId"],Lm;function Yu(){return Yu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Yu.apply(null,arguments)}function GT(t,n){if(t==null)return{};var o=QT(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function QT(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var U0=function(t){var n=t.title,o=t.titleId,r=GT(t,KT);return p.createElement("svg",Yu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Lm||(Lm=p.createElement("path",{d:"M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"})))},JT=["title","titleId"],Fm;function Ku(){return Ku=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Ku.apply(null,arguments)}function ZT(t,n){if(t==null)return{};var o=XT(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function XT(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Y0=function(t){var n=t.title,o=t.titleId,r=ZT(t,JT);return p.createElement("svg",Ku({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Fm||(Fm=p.createElement("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"})))},eD=["title","titleId"],Am;function Gu(){return Gu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Gu.apply(null,arguments)}function tD(t,n){if(t==null)return{};var o=nD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function nD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var K0=function(t){var n=t.title,o=t.titleId,r=tD(t,eD);return p.createElement("svg",Gu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Am||(Am=p.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"})))},rD=["title","titleId"],zm;function Qu(){return Qu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Qu.apply(null,arguments)}function oD(t,n){if(t==null)return{};var o=iD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function iD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var G0=function(t){var n=t.title,o=t.titleId,r=oD(t,rD);return p.createElement("svg",Qu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,zm||(zm=p.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})))},aD=["title","titleId"],Hm;function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Ju.apply(null,arguments)}function lD(t,n){if(t==null)return{};var o=sD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function sD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Q0=function(t){var n=t.title,o=t.titleId,r=lD(t,aD);return p.createElement("svg",Ju({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Hm||(Hm=p.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})))},cD=["title","titleId"],Bm;function Zu(){return Zu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Zu.apply(null,arguments)}function uD(t,n){if(t==null)return{};var o=dD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function dD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var J0=function(t){var n=t.title,o=t.titleId,r=uD(t,cD);return p.createElement("svg",Zu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Bm||(Bm=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},fD=["title","titleId"],Wm;function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Xu.apply(null,arguments)}function pD(t,n){if(t==null)return{};var o=gD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function gD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Z0=function(t){var n=t.title,o=t.titleId,r=pD(t,fD);return p.createElement("svg",Xu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Wm||(Wm=p.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})))},hD=["title","titleId"],Vm;function ed(){return ed=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},ed.apply(null,arguments)}function mD(t,n){if(t==null)return{};var o=bD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function bD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var X0=function(t){var n=t.title,o=t.titleId,r=mD(t,hD);return p.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Vm||(Vm=p.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})))},vD=["title","titleId"],qm;function td(){return td=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},td.apply(null,arguments)}function yD(t,n){if(t==null)return{};var o=wD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function wD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ex=function(t){var n=t.title,o=t.titleId,r=yD(t,vD);return p.createElement("svg",td({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,qm||(qm=p.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},xD=["title","titleId"],Um;function nd(){return nd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},nd.apply(null,arguments)}function jD(t,n){if(t==null)return{};var o=ED(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function ED(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var tx=function(t){var n=t.title,o=t.titleId,r=jD(t,xD);return p.createElement("svg",nd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Um||(Um=p.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))},kD=["title","titleId"],Ym;function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},rd.apply(null,arguments)}function OD(t,n){if(t==null)return{};var o=SD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function SD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var nx=function(t){var n=t.title,o=t.titleId,r=OD(t,kD);return p.createElement("svg",rd({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Ym||(Ym=p.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))},CD=["title","titleId"],Km;function od(){return od=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},od.apply(null,arguments)}function $D(t,n){if(t==null)return{};var o=PD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function PD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var fl=function(t){var n=t.title,o=t.titleId,r=$D(t,CD);return p.createElement("svg",od({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Km||(Km=p.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"})))},ID=["title","titleId"],Gm;function id(){return id=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},id.apply(null,arguments)}function TD(t,n){if(t==null)return{};var o=DD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function DD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var rx=function(t){var n=t.title,o=t.titleId,r=TD(t,ID);return p.createElement("svg",id({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Gm||(Gm=p.createElement("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"})))},MD=["title","titleId"],Qm;function ad(){return ad=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},ad.apply(null,arguments)}function ND(t,n){if(t==null)return{};var o=RD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function RD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ox=function(t){var n=t.title,o=t.titleId,r=ND(t,MD);return p.createElement("svg",ad({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Qm||(Qm=p.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))},_D=["title","titleId"],Jm;function ld(){return ld=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},ld.apply(null,arguments)}function LD(t,n){if(t==null)return{};var o=FD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function FD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ix=function(t){var n=t.title,o=t.titleId,r=LD(t,_D);return p.createElement("svg",ld({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Jm||(Jm=p.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))},AD=["title","titleId"],Zm;function sd(){return sd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},sd.apply(null,arguments)}function zD(t,n){if(t==null)return{};var o=HD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function HD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ax=function(t){var n=t.title,o=t.titleId,r=zD(t,AD);return p.createElement("svg",sd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Zm||(Zm=p.createElement("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},BD=["title","titleId"],Xm;function cd(){return cd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},cd.apply(null,arguments)}function WD(t,n){if(t==null)return{};var o=VD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function VD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var lx=function(t){var n=t.title,o=t.titleId,r=WD(t,BD);return p.createElement("svg",cd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Xm||(Xm=p.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))},qD=["title","titleId"],eb;function ud(){return ud=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},ud.apply(null,arguments)}function UD(t,n){if(t==null)return{};var o=YD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function YD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var sx=function(t){var n=t.title,o=t.titleId,r=UD(t,qD);return p.createElement("svg",ud({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,eb||(eb=p.createElement("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))},KD=["title","titleId"],tb;function dd(){return dd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},dd.apply(null,arguments)}function GD(t,n){if(t==null)return{};var o=QD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function QD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var cx=function(t){var n=t.title,o=t.titleId,r=GD(t,KD);return p.createElement("svg",dd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,tb||(tb=p.createElement("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})))},JD=["title","titleId"],nb;function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},fd.apply(null,arguments)}function ZD(t,n){if(t==null)return{};var o=XD(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function XD(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var ux=function(t){var n=t.title,o=t.titleId,r=ZD(t,JD);return p.createElement("svg",fd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,nb||(nb=p.createElement("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})))},e7=["title","titleId"],rb;function pd(){return pd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},pd.apply(null,arguments)}function t7(t,n){if(t==null)return{};var o=n7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function n7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var dx=function(t){var n=t.title,o=t.titleId,r=t7(t,e7);return p.createElement("svg",pd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,rb||(rb=p.createElement("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))},r7=["title","titleId"],ob;function gd(){return gd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},gd.apply(null,arguments)}function o7(t,n){if(t==null)return{};var o=i7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function i7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var fx=function(t){var n=t.title,o=t.titleId,r=o7(t,r7);return p.createElement("svg",gd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,ob||(ob=p.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"})))},a7=["title","titleId"],ib;function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},hd.apply(null,arguments)}function l7(t,n){if(t==null)return{};var o=s7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function s7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var px=function(t){var n=t.title,o=t.titleId,r=l7(t,a7);return p.createElement("svg",hd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,ib||(ib=p.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})))},c7=["title","titleId"],ab;function md(){return md=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},md.apply(null,arguments)}function u7(t,n){if(t==null)return{};var o=d7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function d7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var $o=function(t){var n=t.title,o=t.titleId,r=u7(t,c7);return p.createElement("svg",md({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,ab||(ab=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})))},f7=["title","titleId"],lb,sb;function bd(){return bd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},bd.apply(null,arguments)}function p7(t,n){if(t==null)return{};var o=g7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function g7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var gx=function(t){var n=t.title,o=t.titleId,r=p7(t,f7);return p.createElement("svg",bd({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,lb||(lb=p.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),sb||(sb=p.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))},h7=["title","titleId"],cb;function vd(){return vd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},vd.apply(null,arguments)}function m7(t,n){if(t==null)return{};var o=b7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function b7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var hx=function(t){var n=t.title,o=t.titleId,r=m7(t,h7);return p.createElement("svg",vd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,cb||(cb=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})))},v7=["title","titleId"],ub;function yd(){return yd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},yd.apply(null,arguments)}function y7(t,n){if(t==null)return{};var o=w7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function w7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var mx=function(t){var n=t.title,o=t.titleId,r=y7(t,v7);return p.createElement("svg",yd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,ub||(ub=p.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))},x7=["title","titleId"],db,fb;function wd(){return wd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},wd.apply(null,arguments)}function j7(t,n){if(t==null)return{};var o=E7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function E7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var bx=function(t){var n=t.title,o=t.titleId,r=j7(t,x7);return p.createElement("svg",wd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,db||(db=p.createElement("circle",{cx:10,cy:8,r:4})),fb||(fb=p.createElement("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},k7=["title","titleId"],pb,gb;function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},xd.apply(null,arguments)}function O7(t,n){if(t==null)return{};var o=S7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function S7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var vx=function(t){var n=t.title,o=t.titleId,r=O7(t,k7);return p.createElement("svg",xd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,pb||(pb=p.createElement("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zm0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z"})),gb||(gb=p.createElement("path",{d:"M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z"})))},C7=["title","titleId"],hb;function jd(){return jd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},jd.apply(null,arguments)}function $7(t,n){if(t==null)return{};var o=P7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function P7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var yx=function(t){var n=t.title,o=t.titleId,r=$7(t,C7);return p.createElement("svg",jd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,hb||(hb=p.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))},I7=["title","titleId"],mb,bb;function Ed(){return Ed=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Ed.apply(null,arguments)}function T7(t,n){if(t==null)return{};var o=D7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function D7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var wx=function(t){var n=t.title,o=t.titleId,r=T7(t,I7);return p.createElement("svg",Ed({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,mb||(mb=p.createElement("path",{d:"M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86a8 8 0 0 1-5.61 1.01c-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"})),bb||(bb=p.createElement("path",{d:"M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"})))},M7=["title","titleId"],vb;function kd(){return kd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},kd.apply(null,arguments)}function N7(t,n){if(t==null)return{};var o=R7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function R7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var xx=function(t){var n=t.title,o=t.titleId,r=N7(t,M7);return p.createElement("svg",kd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,vb||(vb=p.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"})))},_7=["title","titleId"],yb;function Od(){return Od=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Od.apply(null,arguments)}function L7(t,n){if(t==null)return{};var o=F7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function F7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var jx=function(t){var n=t.title,o=t.titleId,r=L7(t,_7);return p.createElement("svg",Od({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,yb||(yb=p.createElement("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"})))},A7=["title","titleId"],wb;function Sd(){return Sd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Sd.apply(null,arguments)}function z7(t,n){if(t==null)return{};var o=H7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function H7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ex=function(t){var n=t.title,o=t.titleId,r=z7(t,A7);return p.createElement("svg",Sd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,wb||(wb=p.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})))},B7=["title","titleId"],xb,jb;function Cd(){return Cd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Cd.apply(null,arguments)}function W7(t,n){if(t==null)return{};var o=V7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function V7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var kx=function(t){var n=t.title,o=t.titleId,r=W7(t,B7);return p.createElement("svg",Cd({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,xb||(xb=p.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),jb||(jb=p.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))},q7=["title","titleId"],Eb;function $d(){return $d=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},$d.apply(null,arguments)}function U7(t,n){if(t==null)return{};var o=Y7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function Y7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ox=function(t){var n=t.title,o=t.titleId,r=U7(t,q7);return p.createElement("svg",$d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Eb||(Eb=p.createElement("path",{d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},K7=["title","titleId"],kb;function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Pd.apply(null,arguments)}function G7(t,n){if(t==null)return{};var o=Q7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function Q7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Sx=function(t){var n=t.title,o=t.titleId,r=G7(t,K7);return p.createElement("svg",Pd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,kb||(kb=p.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))},J7=["title","titleId"],Ob,Sb,Cb,$b;function Id(){return Id=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Id.apply(null,arguments)}function Z7(t,n){if(t==null)return{};var o=X7(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function X7(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Cx=function(t){var n=t.title,o=t.titleId,r=Z7(t,J7);return p.createElement("svg",Id({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Ob||(Ob=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Sb||(Sb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Cb||(Cb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),$b||($b=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},eM=["title","titleId"],Pb,Ib,Tb,Db;function Td(){return Td=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Td.apply(null,arguments)}function tM(t,n){if(t==null)return{};var o=nM(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function nM(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var $x=function(t){var n=t.title,o=t.titleId,r=tM(t,eM);return p.createElement("svg",Td({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Pb||(Pb=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Ib||(Ib=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Tb||(Tb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),Db||(Db=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},rM=["title","titleId"],Mb,Nb,Rb,_b;function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Dd.apply(null,arguments)}function oM(t,n){if(t==null)return{};var o=iM(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function iM(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Px=function(t){var n=t.title,o=t.titleId,r=oM(t,rM);return p.createElement("svg",Dd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Mb||(Mb=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Nb||(Nb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Rb||(Rb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_b||(_b=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))},aM=["title","titleId"],Lb,Fb,Ab;function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Md.apply(null,arguments)}function lM(t,n){if(t==null)return{};var o=sM(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function sM(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Ix=function(t){var n=t.title,o=t.titleId,r=lM(t,aM);return p.createElement("svg",Md({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Lb||(Lb=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Fb||(Fb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Ab||(Ab=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))},cM=["title","titleId"],zb;function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Nd.apply(null,arguments)}function uM(t,n){if(t==null)return{};var o=dM(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function dM(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Tx=function(t){var n=t.title,o=t.titleId,r=uM(t,cM);return p.createElement("svg",Nd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,zb||(zb=p.createElement("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"})))},fM=["title","titleId"],Hb;function Rd(){return Rd=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Rd.apply(null,arguments)}function pM(t,n){if(t==null)return{};var o=gM(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function gM(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Dx=function(t){var n=t.title,o=t.titleId,r=pM(t,fM);return p.createElement("svg",Rd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Hb||(Hb=p.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})))},hM=["title","titleId"],Bb;function _d(){return _d=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},_d.apply(null,arguments)}function mM(t,n){if(t==null)return{};var o=bM(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function bM(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Mx=function(t){var n=t.title,o=t.titleId,r=mM(t,hM);return p.createElement("svg",_d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Bb||(Bb=p.createElement("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"})))},vM=["title","titleId"],Wb;function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var n=1,o;n<arguments.length;n++)for(var r in o=arguments[n],o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},Ld.apply(null,arguments)}function yM(t,n){if(t==null)return{};var o=wM(t,n),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function wM(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}var Nx=function(t){var n=t.title,o=t.titleId,r=yM(t,vM);return p.createElement("svg",Ld({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,Wb||(Wb=p.createElement("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"})))};const xM=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,jM=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,er=["accessTime","accountCircle","addCircle","autoAwesomeMosaic","autoAwesomeMotion","bolt","calendarToday","cancel","check","checkCircle","chevronLeft","chevronRight","close","comment","contentCopy","danger","dangerous","default","deleteForever","description","dns","download","edit","error","errorOutline","exitToApp","expandLess","expandMore","filterAlt","forum","help","home","info","manageAccounts","monitorHeart","moreVert","nightsStay","notificationsOff","openInBrowser","openInNew","place","search","severityLow","severityMedium","severityHigh","severityCritical","success","upload","warning","wbSunny","widgets"],EM=t=>{let{icon:n,color:o,size:r,title:i,iconClassName:a,...l}=t;const c=`juno-icon juno-icon-${n} jn-fill-current ${o} ${a}`;return n==="accessTime"?S.createElement(B0,we({width:r,height:r,className:c,alt:"time",title:i||"Time",role:"img"},l)):n==="accountCircle"?S.createElement(W0,we({width:r,height:r,className:c,alt:"account",title:i||"Account",role:"img"},l)):n==="addCircle"?S.createElement(V0,we({width:r,height:r,className:c,alt:"add",title:i||"Add",role:"img"},l)):n==="autoAwesomeMosaic"?S.createElement(q0,we({width:r,height:r,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):n==="autoAwesomeMotion"?S.createElement(U0,we({width:r,height:r,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):n==="bolt"?S.createElement(Y0,we({width:r,height:r,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):n==="calendarToday"?S.createElement(K0,we({width:r,height:r,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):n==="cancel"?S.createElement(G0,we({width:r,height:r,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):n==="check"?S.createElement(Q0,we({width:r,height:r,className:c,alt:"check",title:i||"Check",role:"img"},l)):n==="checkCircle"?S.createElement(J0,we({width:r,height:r,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):n==="chevronLeft"?S.createElement(Z0,we({width:r,height:r,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):n==="chevronRight"?S.createElement(X0,we({width:r,height:r,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):n==="close"?S.createElement(ex,we({width:r,height:r,className:c,alt:"close",title:i||"Close",role:"img"},l)):n==="comment"?S.createElement(mx,we({width:r,height:r,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):n==="contentCopy"?S.createElement(tx,we({width:r,height:r,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):n==="danger"?S.createElement(nx,we({width:r,height:r,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):n==="dangerous"?S.createElement(fl,we({width:r,height:r,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):n==="deleteForever"?S.createElement(ox,we({width:r,height:r,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):n==="description"?S.createElement(ix,we({width:r,height:r,className:c,alt:"description",title:i||"Description",role:"img"},l)):n==="dns"?S.createElement(ax,we({width:r,height:r,className:c,alt:"service",title:i||"Service",role:"img"},l)):n==="download"?S.createElement(rx,we({width:r,height:r,className:c,alt:"download",title:i||"download",role:"img"},l)):n==="edit"?S.createElement(lx,we({width:r,height:r,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):n==="error"?S.createElement(fl,we({width:r,height:r,className:c,alt:"error",title:i||"Error",role:"img"},l)):n==="errorOutline"?S.createElement(sx,we({width:r,height:r,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):n==="exitToApp"?S.createElement(cx,we({width:r,height:r,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):n==="expandLess"?S.createElement(ux,we({width:r,height:r,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):n==="expandMore"?S.createElement(dx,we({width:r,height:r,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):n==="filterAlt"?S.createElement(fx,we({width:r,height:r,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):n==="forum"?S.createElement(px,we({width:r,height:r,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):n==="help"?S.createElement($o,we({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):n==="home"?S.createElement(gx,we({width:r,height:r,className:c,alt:"home",title:i||"Home",role:"img"},l)):n==="info"?S.createElement(hx,we({width:r,height:r,className:c,alt:"info",title:i||"Info",role:"img"},l)):n==="manageAccounts"?S.createElement(bx,we({width:r,height:r,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):n==="monitorHeart"?S.createElement(vx,we({width:r,height:r,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):n==="moreVert"?S.createElement(yx,we({width:r,height:r,className:c,alt:"more",title:i||"More",role:"img"},l)):n==="nightsStay"?S.createElement(wx,we({width:r,height:r,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):n==="notificationsOff"?S.createElement(xx,we({width:r,height:r,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):n==="openInBrowser"?S.createElement(jx,we({width:r,height:r,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):n==="openInNew"?S.createElement(Ex,we({width:r,height:r,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):n==="place"?S.createElement(kx,we({width:r,height:r,className:c,alt:"location",title:i||"Location",role:"img"},l)):n==="search"?S.createElement(Sx,we({width:r,height:r,className:c,alt:"search",title:i||"Search",role:"img"},l)):n==="severityLow"?S.createElement(Cx,we({width:r,height:r,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):n==="severityMedium"?S.createElement($x,we({width:r,height:r,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):n==="severityHigh"?S.createElement(Px,we({width:r,height:r,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):n==="severityCritical"?S.createElement(Ix,we({width:r,height:r,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):n==="success"?S.createElement(Ox,we({width:r,height:r,className:c,alt:"success",title:i||"Success",role:"img"},l)):n==="upload"?S.createElement(Tx,we({width:r,height:r,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):n==="widgets"?S.createElement(Nx,we({width:r,height:r,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):n==="warning"?S.createElement(Dx,we({width:r,height:r,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):n==="wbSunny"?S.createElement(Mx,we({width:r,height:r,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):n==="default"?S.createElement($o,we({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement($o,we({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l))},_i=p.forwardRef((t,n)=>{let{icon:o=null,color:r="",size:i="24",title:a="",className:l="",href:c="",disabled:u=!1,onClick:d,...f}=t;const g=c||d?"":l,b=c||d?{}:f,h=EM({icon:o,color:r,size:i,title:a,iconClassName:g,...b}),m=S.createElement("button",we({onClick:E=>{d&&d(E)},className:`juno-icon-button ${jM} ${l}`,"aria-label":a||o,disabled:u,ref:n},f),h),v=S.createElement("a",we({href:c,className:`juno-icon-link ${xM} ${l}`,"aria-label":a||o,ref:n},f),h);return c?v:d?m:S.createElement("span",{ref:n},h)});_i.displayName="Icon",_i.propTypes={icon:w.oneOf(er),color:w.string,size:w.string,title:w.string,className:w.string,href:w.string,disabled:w.bool,onClick:w.func};const kM=["info","success","warning","danger","error","critical"];w.oneOf(["default",...kM]),w.oneOfType([w.bool,w.oneOf(er)]),w.string,w.string,w.node,w.node,w.bool,w.string,w.oneOf(er),w.string,w.string,w.string,w.bool,w.func,w.bool,w.string,w.node,w.node,w.string,w.oneOf(["horizontal","vertical"]),w.oneOf(["start","end","center","baseline","stretch"]),w.oneOf(["start","end","center","between","around","evenly"]),w.bool,w.oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"]),w.string,w.node;const OM=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,SM=`
  jn-text-theme-accent
`,CM=`
  jn-text-theme-danger 
`,$M=`
  jn-text-theme-success
`,PM=`
  jn-text-theme-warning  
`,IM=`
  jn-text-theme-on-default
`,Rx=t=>{let{variant:n="default",size:o=null,className:r="",color:i="",...a}=t;const l=u=>u==="small"?"1rem":u==="large"?"3rem":u,c=o?{width:l(o),height:l(o)}:{};return S.createElement("svg",we({className:`juno-spinner ${OM} ${i||(n==="primary"?SM:n==="danger"?CM:n==="success"?$M:n==="warning"?PM:IM)} ${r}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:c,role:"progressbar"},a),S.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Rx.propTypes={variant:w.oneOf(["primary","danger","default","success","warning"]),size:w.string,className:w.string,color:w.string};const Vb=`
  jn-font-bold
  jn-inline-flex 
  jn-justify-center 
  jn-items-center
  jn-rounded
  jn-shadow-sm 
  jn-w-auto
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
  disabled:jn-pointer-events-none
`,qb=`
  jn-text-sm
  jn-leading-5
`,Ub=`
  jn-text-base
  jn-leading-6
`,TM=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,DM=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,MM=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,NM=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,Yb=(t,n)=>t==="small"?n==="subdued"?`${DM}`:`${TM}`:n==="subdued"?`${NM}`:`${MM}`,RM=`
  jn-mr-2
`,_M=`
  jn-mr-2
`,LM=t=>t==="small"?`${RM}`:`${_M}`,Kb=t=>t?"in-progress":"",FM=t=>t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":"",Gb=S.forwardRef((t,n)=>{let{label:o,title:r=null,variant:i,size:a="default",disabled:l=null,href:c=null,icon:u=null,className:d="",onClick:f,children:g,progress:b=!1,progressLabel:h="",...m}=t;const v=i||"default",E=r||o||"",y=b?S.createElement(Rx,{size:a==="small"?"1.125rem":"1.5rem",color:`${FM(v)}`}):u?S.createElement(_i,{icon:u,title:E,className:`juno-button-icon ${o||g?LM(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,k=b&&h?h:o||g,C=S.createElement("button",we({type:"button",className:`
          juno-button 
          juno-button-${v} 
          juno-button-${a}-size 
          ${Vb} 
          ${a==="small"?qb:Ub} 
          ${Yb(a,i)}
          ${Kb(b)} 
          ${d}`,disabled:l,onClick:I=>{f&&f(I)},title:E,ref:n},m),y,k),R=S.createElement("a",we({href:c,role:"button",className:`
          juno-button 
          juno-button-${v} 
          juno-button-${a}-size 
          ${Vb} 
          ${a==="small"?qb:Ub}
          ${Yb(a,i)}
          ${Kb(b)} 
          ${d}
        `,disabled:l,onClick:f,title:E,ref:n},m),y,k);return c?R:C});Gb.displayName="Button",Gb.propTypes={children:w.any,variant:w.oneOf(["primary","primary-danger","default","subdued"]),size:w.oneOf(["small","default"]),disabled:w.bool,href:w.string,label:w.string,title:w.string,icon:w.oneOf(er),className:w.string,onClick:w.func,progress:w.bool,progressLabel:w.string},w.string,w.node;var AM=`
  jn-text-theme-high
  jn-text-base
  jn-transform 
  jn-origin-top-left 
  jn-transition-all 
  jn-duration-100 
  jn-ease-in-out
  jn-z-10
`,zM=`
  jn-inline-block
  jn-w-1
  jn-h-1
  jn-rounded-full
  jn-align-top
  jn-ml-1
  jn-mt-2
  jn-bg-theme-required
`,HM=S.forwardRef(function(t,n){var o=t.text,r=o===void 0?"":o,i=t.htmlFor,a=i===void 0?void 0:i,l=t.required,c=t.className,u=c===void 0?"":c,d=t.disabled,f=t.floating,g=t.minimized,b=ii(t,["text","htmlFor","required","className","disabled","floating","minimized"]);return S.createElement("label",xe({className:`
        juno-label 
        `.concat(AM,` 
        `).concat(f!==void 0&&f?`juno-label-floating 
  jn-absolute
`:"",`
        `).concat(g!==void 0&&g?`juno-label-minimized 
  jn-scale-75
  -jn-translate-y-[0.4375rem]
`:"",`
        `).concat(d!==void 0&&d?`juno-label-disabled 
  jn-opacity-50
  jn-cursor-not-allowed
`:"",` 
        `).concat(u,`
      `),htmlFor:a,ref:n},b),r,l!==void 0&&l?S.createElement("span",{className:`
          juno-required 
          `.concat(zM,`
          `)}):"")});HM.displayName="Label";var BM=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,WM=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,ke;(function(t){t.accessTime="accessTime",t.accountCircle="accountCircle",t.addCircle="addCircle",t.autoAwesomeMosaic="autoAwesomeMosaic",t.autoAwesomeMotion="autoAwesomeMotion",t.bolt="bolt",t.calendarToday="calendarToday",t.cancel="cancel",t.check="check",t.checkCircle="checkCircle",t.chevronLeft="chevronLeft",t.chevronRight="chevronRight",t.close="close",t.comment="comment",t.contentCopy="contentCopy",t.danger="danger",t.dangerous="dangerous",t.default="default",t.deleteForever="deleteForever",t.description="description",t.dns="dns",t.download="download",t.edit="edit",t.error="error",t.errorOutline="errorOutline",t.exitToApp="exitToApp",t.expandLess="expandLess",t.expandMore="expandMore",t.filterAlt="filterAlt",t.forum="forum",t.help="help",t.home="home",t.info="info",t.manageAccounts="manageAccounts",t.monitorHeart="monitorHeart",t.moreVert="moreVert",t.nightsStay="nightsStay",t.notificationsOff="notificationsOff",t.openInBrowser="openInBrowser",t.openInNew="openInNew",t.place="place",t.search="search",t.severityLow="severityLow",t.severityMedium="severityMedium",t.severityHigh="severityHigh",t.severityCritical="severityCritical",t.success="success",t.upload="upload",t.warning="warning",t.wbSunny="wbSunny",t.widgets="widgets"})(ke||(ke={}));var VM=function(t){var n=t.icon,o=t.color,r=t.size,i=t.title,a=t.iconClassName,l=ii(t,["icon","color","size","title","iconClassName"]),c="juno-icon juno-icon-".concat(n," jn-fill-current ").concat(o," ").concat(a),u=ke[n||"default"];return u===ke.accessTime?S.createElement(B0,xe({width:r,height:r,className:c,alt:"time",title:i||"Time",role:"img"},l)):u===ke.accountCircle?S.createElement(W0,xe({width:r,height:r,className:c,alt:"account",title:i||"Account",role:"img"},l)):u===ke.addCircle?S.createElement(V0,xe({width:r,height:r,className:c,alt:"add",title:i||"Add",role:"img"},l)):u===ke.autoAwesomeMosaic?S.createElement(q0,xe({width:r,height:r,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):u===ke.autoAwesomeMotion?S.createElement(U0,xe({width:r,height:r,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):u===ke.bolt?S.createElement(Y0,xe({width:r,height:r,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):u===ke.calendarToday?S.createElement(K0,xe({width:r,height:r,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):u===ke.cancel?S.createElement(G0,xe({width:r,height:r,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):u===ke.check?S.createElement(Q0,xe({width:r,height:r,className:c,alt:"check",title:i||"Check",role:"img"},l)):u===ke.checkCircle?S.createElement(J0,xe({width:r,height:r,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):u===ke.chevronLeft?S.createElement(Z0,xe({width:r,height:r,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):u===ke.chevronRight?S.createElement(X0,xe({width:r,height:r,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):u===ke.close?S.createElement(ex,xe({width:r,height:r,className:c,alt:"close",title:i||"Close",role:"img"},l)):u===ke.comment?S.createElement(mx,xe({width:r,height:r,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):u===ke.contentCopy?S.createElement(tx,xe({width:r,height:r,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):u===ke.danger?S.createElement(nx,xe({width:r,height:r,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):u===ke.dangerous?S.createElement(fl,xe({width:r,height:r,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):u===ke.deleteForever?S.createElement(ox,xe({width:r,height:r,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):u===ke.description?S.createElement(ix,xe({width:r,height:r,className:c,alt:"description",title:i||"Description",role:"img"},l)):u===ke.dns?S.createElement(ax,xe({width:r,height:r,className:c,alt:"service",title:i||"Service",role:"img"},l)):u===ke.download?S.createElement(rx,xe({width:r,height:r,className:c,alt:"download",title:i||"download",role:"img"},l)):u===ke.edit?S.createElement(lx,xe({width:r,height:r,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):u===ke.error?S.createElement(fl,xe({width:r,height:r,className:c,alt:"error",title:i||"Error",role:"img"},l)):u===ke.errorOutline?S.createElement(sx,xe({width:r,height:r,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):u===ke.exitToApp?S.createElement(cx,xe({width:r,height:r,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):u===ke.expandLess?S.createElement(ux,xe({width:r,height:r,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):u===ke.expandMore?S.createElement(dx,xe({width:r,height:r,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):u===ke.filterAlt?S.createElement(fx,xe({width:r,height:r,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):u===ke.forum?S.createElement(px,xe({width:r,height:r,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):u===ke.help?S.createElement($o,xe({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):u===ke.home?S.createElement(gx,xe({width:r,height:r,className:c,alt:"home",title:i||"Home",role:"img"},l)):u===ke.info?S.createElement(hx,xe({width:r,height:r,className:c,alt:"info",title:i||"Info",role:"img"},l)):u===ke.manageAccounts?S.createElement(bx,xe({width:r,height:r,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):u===ke.monitorHeart?S.createElement(vx,xe({width:r,height:r,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):u===ke.moreVert?S.createElement(yx,xe({width:r,height:r,className:c,alt:"more",title:i||"More",role:"img"},l)):u===ke.nightsStay?S.createElement(wx,xe({width:r,height:r,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):u===ke.notificationsOff?S.createElement(xx,xe({width:r,height:r,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):u===ke.openInBrowser?S.createElement(jx,xe({width:r,height:r,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):u===ke.openInNew?S.createElement(Ex,xe({width:r,height:r,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):u===ke.place?S.createElement(kx,xe({width:r,height:r,className:c,alt:"location",title:i||"Location",role:"img"},l)):u===ke.search?S.createElement(Sx,xe({width:r,height:r,className:c,alt:"search",title:i||"Search",role:"img"},l)):u===ke.severityLow?S.createElement(Cx,xe({width:r,height:r,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):u===ke.severityMedium?S.createElement($x,xe({width:r,height:r,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):u===ke.severityHigh?S.createElement(Px,xe({width:r,height:r,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):u===ke.severityCritical?S.createElement(Ix,xe({width:r,height:r,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):u===ke.success?S.createElement(Ox,xe({width:r,height:r,className:c,alt:"success",title:i||"Success",role:"img"},l)):u===ke.upload?S.createElement(Tx,xe({width:r,height:r,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):u===ke.widgets?S.createElement(Nx,xe({width:r,height:r,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):u===ke.warning?S.createElement(Dx,xe({width:r,height:r,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):u===ke.wbSunny?S.createElement(Mx,xe({width:r,height:r,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):u===ke.default?S.createElement($o,xe({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement($o,xe({width:r,height:r,className:c,alt:"help",title:i||"Help",role:"img"},l))},qM=p.forwardRef(function(t,n){var o=t.icon,r=o===void 0?null:o,i=t.color,a=i===void 0?"":i,l=t.size,c=l===void 0?24:l,u=t.title,d=u===void 0?"":u,f=t.className,g=f===void 0?"":f,b=t.href,h=b===void 0?"":b,m=t.disabled,v=t.onClick,E=ii(t,["icon","color","size","title","className","href","disabled","onClick"]),y=h||v?"":g,k=h||v?{}:E,C=VM(xe({icon:r||void 0,color:a,size:c,title:d,iconClassName:y},k)),R=S.createElement("button",xe({},E,{type:"button",onClick:function(T){v&&v(T)},className:"juno-icon-button ".concat(WM," ").concat(g),"aria-label":d||r||void 0,disabled:m!==void 0&&m,ref:n}),C),I=S.createElement("a",xe({},E,{"aria-label":d||r||void 0,href:h,className:"juno-icon-link ".concat(BM," ").concat(g),ref:n}),C);return h?I:v?R:S.createElement("span",{ref:n},C)});qM.displayName="IconTs",w.string,w.string,w.node,w.string,w.oneOf(["rounded","hero","default"]),w.bool,w.string,w.string,w.string,w.bool,w.string,w.func,w.func,w.func,w.func,w.func,w.bool,w.string,w.oneOfType([w.string,w.number]),w.string,w.any,w.oneOfType([w.string,w.number,w.bool]),w.any,w.number,w.oneOfType([w.object,w.array]).isRequired,w.object,w.bool,w.bool,w.oneOfType([w.shape({base00:w.string,base01:w.string,base02:w.string,base03:w.string,base04:w.string,base05:w.string,base06:w.string,base07:w.string,base08:w.string,base09:w.string,base0A:w.string,base0B:w.string,base0C:w.string,base0D:w.string,base0E:w.string,base0F:w.string}),w.oneOf(["dark","light"])]),w.oneOfType([w.number,w.bool]),w.oneOfType([w.bool,w.number]),w.number,w.string,w.oneOfType([w.string,w.object]),w.oneOfType([w.node,w.object]),w.string,w.bool,w.oneOf(["auto","small","medium","large"]),w.bool,w.string,w.string;var UM=Object.defineProperty,YM=(t,n,o)=>n in t?UM(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Gs=(t,n,o)=>(YM(t,typeof n=="symbol"?n:n+"",o),o);let KM=class{constructor(){Gs(this,"current",this.detect()),Gs(this,"handoffState","pending"),Gs(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},Xn=new KM,Je=(t,n)=>{Xn.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)};function jn(t){let n=p.useRef(t);return Je(()=>{n.current=t},[t]),n}let ge=function(t){let n=jn(t);return S.useCallback(function(){return n.current(...arguments)},[n])};function _x(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(n=>setTimeout(()=>{throw n}))}function Wt(){let t=[],n={addEventListener(o,r,i,a){return o.addEventListener(r,i,a),n.add(()=>o.removeEventListener(r,i,a))},requestAnimationFrame(){let o=requestAnimationFrame(...arguments);return n.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(){let o=setTimeout(...arguments);return n.add(()=>clearTimeout(o))},microTask(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];let a={current:!0};return _x(()=>{a.current&&r[0]()}),n.add(()=>{a.current=!1})},style(o,r,i){let a=o.style.getPropertyValue(r);return Object.assign(o.style,{[r]:i}),this.add(()=>{Object.assign(o.style,{[r]:a})})},group(o){let r=Wt();return o(r),this.add(()=>r.dispose())},add(o){return t.push(o),()=>{let r=t.indexOf(o);if(0<=r)for(let i of t.splice(r,1))i()}},dispose(){for(let o of t.splice(0))o()}};return n}function Sn(){let[t]=p.useState(Wt);return p.useEffect(()=>()=>t.dispose(),[t]),t}function GM(){let t=typeof document>"u";return"useSyncExternalStore"in jr&&(n=>n.useSyncExternalStore)(jr)(()=>()=>{},()=>!1,()=>!t)}function Ql(){let t=GM(),[n,o]=p.useState(Xn.isHandoffComplete);return n&&Xn.isHandoffComplete===!1&&o(!1),p.useEffect(()=>{n!==!0&&o(!0)},[n]),p.useEffect(()=>Xn.handoff(),[]),!t&&n}var Qb;let dn=(Qb=S.useId)==null?function(){let t=Ql(),[n,o]=S.useState(t?()=>Xn.nextId():null);return Je(()=>{n===null&&o(Xn.nextId())},[n]),n==null?void 0:""+n}:Qb;function it(t,n){if(t in n){let l=n[t];for(var o=arguments.length,r=Array(2<o?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];return typeof l=="function"?l(...r):l}let a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,it),a}function na(t){return Xn.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let Fd=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Ad=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Ad||{}),QM=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(QM||{}),JM=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(JM||{});function Lx(){var t=Number.MAX_SAFE_INTEGER;let n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.body;return n==null?[]:Array.from(n.querySelectorAll(Fd)).sort((o,r)=>Math.sign((o.tabIndex||t)-(r.tabIndex||t)))}var Jl=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Jl||{});function Zl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var o;return t!==((o=na(t))==null?void 0:o.body)&&it(n,{0(){return t.matches(Fd)},1(){for(let r=t;r!==null;){if(r.matches(Fd))return!0;r=r.parentElement}return!1}})}function Fx(t){let n=na(t);Wt().nextFrame(()=>{n&&!Zl(n.activeElement,0)&&XM(t)})}var ZM=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(ZM||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function XM(t){t==null||t.focus({preventScroll:!0})}let e6="textarea,input";function t6(t){var n,o;return(o=(n=t==null?void 0:t.matches)==null?void 0:n.call(t,e6))!=null&&o}function Xl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:o=>o;return t.slice().sort((o,r)=>{let i=n(o),a=n(r);if(i===null||a===null)return 0;let l=i.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function n6(t,n){return r6(Lx(),n,{relativeTo:t})}function r6(t,n){let{sorted:o=!0,relativeTo:r=null,skipElements:i=[]}=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},a=Array.isArray(t)?0<t.length?t[0].ownerDocument:document:t.ownerDocument,l=Array.isArray(t)?o?Xl(t):t:Lx(t);0<i.length&&1<l.length&&(l=l.filter(h=>!i.includes(h))),r=r??a.activeElement;let c=(()=>{if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{var h=Math.max;if(1&n)return 0;if(2&n)return h(0,l.indexOf(r))-1;if(4&n)return h(0,l.indexOf(r))+1;if(8&n)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=32&n?{preventScroll:!0}:{},f=0,g=l.length,b;do{if(f>=g||0>=f+g)return 0;let h=u+f;if(16&n)h=(h+g)%g;else{if(0>h)return 3;if(h>=g)return 1}b=l[h],b==null||b.focus(d),f+=c}while(b!==a.activeElement);return 6&n&&t6(b)&&b.select(),2}function o6(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&0<window.navigator.maxTouchPoints}function i6(){return/Android/gi.test(window.navigator.userAgent)}function Ax(){return o6()||i6()}function ja(t,n,o){let r=jn(n);p.useEffect(()=>{function i(a){r.current(a)}return document.addEventListener(t,i,o),()=>document.removeEventListener(t,i,o)},[t,o])}function a6(t,n,o){let r=jn(n);p.useEffect(()=>{function i(a){r.current(a)}return window.addEventListener(t,i,o),()=>window.removeEventListener(t,i,o)},[t,o])}function Xf(t,n){function o(l,c){if(i.current&&!l.defaultPrevented){let u=c(l);if(u!==null&&u.getRootNode().contains(u)&&u.isConnected){let d=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t);for(let f of d){if(f===null)continue;let g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(u)||l.composed&&l.composedPath().includes(g))return}return!Zl(u,Jl.Loose)&&u.tabIndex!==-1&&l.preventDefault(),n(l,u)}}}let r=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=r})},[r]);let a=p.useRef(null);ja("pointerdown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ja("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ja("click",l=>{Ax()||a.current&&(o(l,()=>a.current),a.current=null)},!0),ja("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),a6("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function es(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return p.useMemo(()=>na(...n),[...n])}function Jb(t){var n;if(t.type)return t.type;let o=(n=t.as)==null?"button":n;if(typeof o=="string"&&o.toLowerCase()==="button")return"button"}function ep(t,n){let[o,r]=p.useState(()=>Jb(t));return Je(()=>{r(Jb(t))},[t.type,t.as]),Je(()=>{o||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&r("button")},[o,n]),o}let zx=Symbol();function l6(t){let n=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return Object.assign(t,{[zx]:n})}function Et(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];let r=p.useRef(n);p.useEffect(()=>{r.current=n},[n]);let i=ge(a=>{for(let l of r.current)l!=null&&(typeof l=="function"?l(a):l.current=a)});return n.every(a=>a==null||(a==null?void 0:a[zx]))?void 0:i}function Zb(t){return[t.screenX,t.screenY]}function tp(){let t=p.useRef([-1,-1]);return{wasMoved(n){let o=Zb(n);return(t.current[0]!==o[0]||t.current[1]!==o[1])&&(t.current=o,!0)},update(n){t.current=Zb(n)}}}function pl(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return Array.from(new Set(n.flatMap(r=>typeof r=="string"?r.split(" "):[]))).filter(Boolean).join(" ")}var Sr=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Sr||{}),wr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(wr||{});function bt(t){let{ourProps:n,theirProps:o,slot:r,defaultTag:i,features:a,visible:l=!0,name:c,mergeRefs:u}=t;u=u??s6;let d=Hx(o,n);if(l)return Ea(d,r,i,c,u);let f=a??0;if(2&f){let{static:g=!1,...b}=d;if(g)return Ea(b,r,i,c,u)}if(1&f){let{unmount:g=!0,...b}=d;return it(g?0:1,{0(){return null},1(){return Ea({...b,hidden:!0,style:{display:"none"}},r,i,c,u)}})}return Ea(d,r,i,c,u)}function Ea(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length?arguments[2]:void 0,r=3<arguments.length?arguments[3]:void 0,i=4<arguments.length?arguments[4]:void 0,{as:a=o,children:l,refName:c="ref",...u}=Qs(t,["unmount","static"]),d=t.ref===void 0?{}:{[c]:t.ref},f=typeof l=="function"?l(n):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(n));let g={};if(n){let b=!1,h=[];for(let[m,v]of Object.entries(n))typeof v=="boolean"&&(b=!0),v===!0&&h.push(m);b&&(g["data-headlessui-state"]=h.join(" "))}if(a===p.Fragment&&0<Object.keys(gl(u)).length){if(!p.isValidElement(f)||Array.isArray(f)&&1<f.length)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let b=f.props,h=typeof(b==null?void 0:b.className)=="function"?function(){return pl(b==null?void 0:b.className(...arguments),u.className)}:pl(b==null?void 0:b.className,u.className),m=h?{className:h}:{};return p.cloneElement(f,Object.assign({},Hx(f.props,gl(Qs(u,["ref"]))),g,d,{ref:i(f.ref,d.ref)},m))}return p.createElement(a,Object.assign({},Qs(u,["ref"]),a!==p.Fragment&&d,a!==p.Fragment&&g),f)}function s6(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.every(r=>r==null)?void 0:r=>{for(let i of n)i!=null&&(typeof i=="function"?i(r):i.current=r)}}function Hx(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if(n.length===0)return{};if(n.length===1)return n[0];let r={},i={};for(let a of n)for(let l in a)l.startsWith("on")&&typeof a[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(a[l])):r[l]=a[l];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(i).map(a=>[a,void 0])));for(let a in i)Object.assign(r,{[a](l){let c=i[a];for(var u=arguments.length,d=Array(1<u?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];for(let g of c){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;g(l,...d)}}});return r}function gt(t){var n;return Object.assign(p.forwardRef(t),{displayName:(n=t.displayName)==null?t.name:n})}function gl(t){let n=Object.assign({},t);for(let o in n)n[o]===void 0&&delete n[o];return n}function Qs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],o=Object.assign({},t);for(let r of n)r in o&&delete o[r];return o}let np=p.createContext(null);np.displayName="OpenClosedContext";var ft=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(ft||{});function ra(){return p.useContext(np)}function ts(t){let{value:n,children:o}=t;return S.createElement(np.Provider,{value:n},o)}function rp(t){let n=t.parentElement,o=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(o=n),n=n.parentElement;let r=(n==null?void 0:n.getAttribute("disabled"))==="";return!(r&&c6(o))&&r}function c6(t){if(!t)return!1;for(let n=t.previousElementSibling;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}function u6(t){throw new Error("Unexpected object: "+t)}var Re=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Re||{});function hl(t,n){let o=n.resolveItems();if(0>=o.length)return null;let r=n.resolveActiveIndex(),i=r??-1;switch(t.focus){case 0:{for(let a=0;a<o.length;++a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 1:{for(let a=i-1;0<=a;--a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 2:{for(let a=i+1;a<o.length;++a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 3:{for(let a=o.length-1;0<=a;--a)if(!n.resolveDisabled(o[a],a,o))return a;return r}case 4:{for(let a=0;a<o.length;++a)if(n.resolveId(o[a],a,o)===t.id)return a;return r}case 5:return null;default:u6(t)}}var Te=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Te||{});const Bx=["top","right","bottom","left"],Xb=["start","end"],ev=Bx.reduce((t,n)=>t.concat(n,n+"-"+Xb[0],n+"-"+Xb[1]),[]),zd=Math.min,d6=Math.max,f6={left:"right",right:"left",bottom:"top",top:"bottom"},p6={start:"end",end:"start"};function Hd(t,n,o){return d6(t,zd(n,o))}function co(t,n){return typeof t=="function"?t(n):t}function tr(t){return t.split("-")[0]}function An(t){return t.split("-")[1]}function Wx(t){return t==="x"?"y":"x"}function op(t){return t==="y"?"height":"width"}function Xo(t){return["top","bottom"].includes(tr(t))?"y":"x"}function ip(t){return Wx(Xo(t))}function Vx(t,n,o){o===void 0&&(o=!1);const r=An(t),i=ip(t),a=op(i);let l=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=bl(l)),[l,bl(l)]}function g6(t){const n=bl(t);return[ml(t),n,ml(n)]}function ml(t){return t.replace(/start|end/g,n=>p6[n])}function h6(t,n,o){const r=["left","right"],i=["right","left"];return t==="top"||t==="bottom"?o?n?i:r:n?r:i:t==="left"||t==="right"?n?["top","bottom"]:["bottom","top"]:[]}function m6(t,n,o,r){const i=An(t);let a=h6(tr(t),o==="start",r);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(ml)))),a}function bl(t){return t.replace(/left|right|bottom|top/g,n=>f6[n])}function b6(t){return{top:0,right:0,bottom:0,left:0,...t}}function qx(t){return typeof t=="number"?{top:t,right:t,bottom:t,left:t}:b6(t)}function vl(t){const{x:n,y:o,width:r,height:i}=t;return{width:r,height:i,top:o,left:n,right:n+r,bottom:o+i,x:n,y:o}}function tv(t,n,o){let{reference:r,floating:i}=t;const a=Xo(n),l=ip(n),c=op(l),u=tr(n),d=a==="y",f=r.x+r.width/2-i.width/2,g=r.y+r.height/2-i.height/2,b=r[c]/2-i[c]/2;let h;switch(h=u==="top"?{x:f,y:r.y-i.height}:u==="bottom"?{x:f,y:r.y+r.height}:u==="right"?{x:r.x+r.width,y:g}:u==="left"?{x:r.x-i.width,y:g}:{x:r.x,y:r.y},An(n)){case"start":h[l]-=b*(o&&d?-1:1);break;case"end":h[l]+=b*(o&&d?-1:1)}return h}const v6=async(t,n,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(n));let d=await l.getElementRects({reference:t,floating:n,strategy:i}),{x:f,y:g}=tv(d,r,u),b=r,h={},m=0;for(let v=0;v<c.length;v++){const{name:E,fn:y}=c[v],{x:k,y:C,data:R,reset:I}=await y({x:f,y:g,initialPlacement:r,placement:b,strategy:i,middlewareData:h,rects:d,platform:l,elements:{reference:t,floating:n}});f=k??f,g=C??g,h={...h,[E]:{...h[E],...R}},I&&50>=m&&(m++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(d=I.rects===!0?await l.getElementRects({reference:t,floating:n,strategy:i}):I.rects),{x:f,y:g}=tv(d,b,u)),v=-1)}return{x:f,y:g,placement:b,strategy:i,middlewareData:h}};async function Li(t,n){var o;n===void 0&&(n={});const{x:r,y:i,platform:a,rects:l,elements:c,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:b=!1,padding:h=0}=co(n,t),m=qx(h),v=g==="floating"?"reference":"floating",E=c[b?v:g],y=vl(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(E)))==null||o?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:u})),k=g==="floating"?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),R=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},I=vl(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:C,strategy:u}):k);return{top:(y.top-I.top+m.top)/R.y,bottom:(I.bottom-y.bottom+m.bottom)/R.y,left:(y.left-I.left+m.left)/R.x,right:(I.right-y.right+m.right)/R.x}}const y6=t=>({name:"arrow",options:t,async fn(n){const{x:o,y:r,placement:i,rects:a,platform:l,elements:c,middlewareData:u}=n,{element:d,padding:f=0}=co(t,n)||{};if(d==null)return{};const g=qx(f),b={x:o,y:r},h=ip(i),m=op(h),v=await l.getDimensions(d),E=h==="y",y=E?"top":"left",k=E?"bottom":"right",C=E?"clientHeight":"clientWidth",R=a.reference[m]+a.reference[h]-b[h]-a.floating[m],I=b[h]-a.reference[h],T=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let F=T?T[C]:0;F&&await(l.isElement==null?void 0:l.isElement(T))||(F=c.floating[C]||a.floating[m]);const _=F/2-v[m]/2-1,J=zd(g[y],_),B=zd(g[k],_),W=J,H=F-v[m]-B,D=F/2-v[m]/2+(R/2-I/2),$=Hd(W,D,H),A=!u.arrow&&An(i)!=null&&D!==$&&0>a.reference[m]/2-(D<W?J:B)-v[m]/2,z=A?D<W?D-W:D-H:0;return{[h]:b[h]+z,data:{[h]:$,centerOffset:D-$-z,...A&&{alignmentOffset:z}},reset:A}}});function w6(t,n,o){return(t?[...o.filter(i=>An(i)===t),...o.filter(i=>An(i)!==t)]:o.filter(i=>tr(i)===i)).filter(i=>!t||An(i)===t||!!n&&ml(i)!==i)}const x6=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(n){var o,r,i;const{rects:a,middlewareData:l,placement:c,platform:u,elements:d}=n,{crossAxis:f=!1,alignment:g,allowedPlacements:b=ev,autoAlignment:h=!0,...m}=co(t,n),v=g!==void 0||b===ev?w6(g||null,h,b):b,E=await Li(n,m),y=((o=l.autoPlacement)==null?void 0:o.index)||0,k=v[y];if(k==null)return{};const C=Vx(k,a,await(u.isRTL==null?void 0:u.isRTL(d.floating)));if(c!==k)return{reset:{placement:v[0]}};const R=[E[tr(k)],E[C[0]],E[C[1]]],I=[...((r=l.autoPlacement)==null?void 0:r.overflows)||[],{placement:k,overflows:R}],T=v[y+1];if(T)return{data:{index:y+1,overflows:I},reset:{placement:T}};const F=I.map(B=>{const W=An(B.placement);return[B.placement,W&&f?B.overflows.slice(0,2).reduce((H,D)=>H+D,0):B.overflows[0],B.overflows]}).sort((B,W)=>B[1]-W[1]),_=F.filter(B=>B[2].slice(0,An(B[0])?2:3).every(W=>0>=W)),J=((i=_[0])==null?void 0:i[0])||F[0][0];return J===c?{}:{data:{index:y+1,overflows:I},reset:{placement:J}}}}},j6=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var o,r;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:u,elements:d}=n,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...E}=co(t,n);if((o=a.arrow)!=null&&o.alignmentOffset)return{};const y=tr(i),k=Xo(c),C=tr(c)===c,R=await(u.isRTL==null?void 0:u.isRTL(d.floating)),I=b||(C||!v?[bl(c)]:g6(c)),T=m!=="none";!b&&T&&I.push(...m6(c,v,m,R));const F=[c,...I],_=await Li(n,E),J=[];let B=((r=a.flip)==null?void 0:r.overflows)||[];if(f&&J.push(_[y]),g){const $=Vx(i,l,R);J.push(_[$[0]],_[$[1]])}if(B=[...B,{placement:i,overflows:J}],!J.every($=>0>=$)){var W,H;const $=(((W=a.flip)==null?void 0:W.index)||0)+1,A=F[$];if(A)return{data:{index:$,overflows:B},reset:{placement:A}};let z=(H=B.filter(V=>0>=V.overflows[0]).sort((V,Q)=>V.overflows[1]-Q.overflows[1])[0])==null?void 0:H.placement;if(!z)switch(h){case"bestFit":{var D;const V=(D=B.filter(Q=>{if(T){const X=Xo(Q.placement);return X===k||X==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(X=>0<X).reduce((X,M)=>X+M,0)]).sort((Q,X)=>Q[1]-X[1])[0])==null?void 0:D[0];V&&(z=V);break}case"initialPlacement":z=c}if(i!==z)return{reset:{placement:z}}}return{}}}};function nv(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function rv(t){return Bx.some(n=>0<=t[n])}const E6=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:o}=n,{strategy:r="referenceHidden",...i}=co(t,n);switch(r){case"referenceHidden":{const a=await Li(n,{...i,elementContext:"reference"}),l=nv(a,o.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:rv(l)}}}case"escaped":{const a=await Li(n,{...i,altBoundary:!0}),l=nv(a,o.floating);return{data:{escapedOffsets:l,escaped:rv(l)}}}default:return{}}}}};async function k6(t,n){const{placement:o,platform:r,elements:i}=t,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),l=tr(o),c=An(o),u=Xo(o)==="y",d=["left","top"].includes(l)?-1:1,f=a&&u?-1:1,g=co(n,t);let{mainAxis:b,crossAxis:h,alignmentAxis:m}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof m=="number"&&(h=c==="end"?-1*m:m),u?{x:h*f,y:b*d}:{x:b*d,y:h*f}}const O6=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var o,r;const{x:i,y:a,placement:l,middlewareData:c}=n,u=await k6(n,t);return l===((o=c.offset)==null?void 0:o.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:l}}}}},S6=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:o,y:r,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:E=>{let{x:y,y:k}=E;return{x:y,y:k}}},...u}=co(t,n),d={x:o,y:r},f=await Li(n,u),g=Xo(tr(i)),b=Wx(g);let h=d[b],m=d[g];if(a){const E=b==="y"?"top":"left",y=b==="y"?"bottom":"right",k=h+f[E],C=h-f[y];h=Hd(k,h,C)}if(l){const E=g==="y"?"top":"left",y=g==="y"?"bottom":"right",k=m+f[E],C=m-f[y];m=Hd(k,m,C)}const v=c.fn({...n,[b]:h,[g]:m});return{...v,data:{x:v.x-o,y:v.y-r,enabled:{[b]:a,[g]:l}}}}}},Bd=Math.min,Po=Math.max,yl=Math.round,ka=Math.floor,Cr=t=>({x:t,y:t});function ns(){return typeof window<"u"}function ai(t){return Ux(t)?(t.nodeName||"").toLowerCase():"#document"}function rn(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function qn(t){var n;return(n=(Ux(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function Ux(t){return!!ns()&&(t instanceof Node||t instanceof rn(t).Node)}function Cn(t){return!!ns()&&(t instanceof Element||t instanceof rn(t).Element)}function Wn(t){return!!ns()&&(t instanceof HTMLElement||t instanceof rn(t).HTMLElement)}function ov(t){return!!(ns()&&typeof ShadowRoot<"u")&&(t instanceof ShadowRoot||t instanceof rn(t).ShadowRoot)}function oa(t){const{overflow:n,overflowX:o,overflowY:r,display:i}=$n(t);return/auto|scroll|overlay|hidden|clip/.test(n+r+o)&&!["inline","contents"].includes(i)}function C6(t){return["table","td","th"].includes(ai(t))}function rs(t){return[":popover-open",":modal"].some(n=>{try{return t.matches(n)}catch{return!1}})}function ap(t){const n=lp(),o=Cn(t)?$n(t):t;return o.transform!=="none"||o.perspective!=="none"||!!o.containerType&&o.containerType!=="normal"||!n&&!!o.backdropFilter&&o.backdropFilter!=="none"||!n&&!!o.filter&&o.filter!=="none"||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function $6(t){for(let n=$r(t);Wn(n)&&!ei(n);){if(ap(n))return n;if(rs(n))return null;n=$r(n)}return null}function lp(){return!!(typeof CSS<"u"&&CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ei(t){return["html","body","#document"].includes(ai(t))}function $n(t){return rn(t).getComputedStyle(t)}function os(t){return Cn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function $r(t){if(ai(t)==="html")return t;const n=t.assignedSlot||t.parentNode||ov(t)&&t.host||qn(t);return ov(n)?n.host:n}function Yx(t){const n=$r(t);return ei(n)?t.ownerDocument?t.ownerDocument.body:t.body:Wn(n)&&oa(n)?n:Yx(n)}function Fi(t,n,o){var r;n===void 0&&(n=[]),o===void 0&&(o=!0);const i=Yx(t),a=i===((r=t.ownerDocument)==null?void 0:r.body),l=rn(i);if(a){const c=Wd(l);return n.concat(l,l.visualViewport||[],oa(i)?i:[],c&&o?Fi(c):[])}return n.concat(i,Fi(i,[],o))}function Wd(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Kx(t){const n=$n(t);let o=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const i=Wn(t),a=i?t.offsetWidth:o,l=i?t.offsetHeight:r,c=yl(o)!==a||yl(r)!==l;return c&&(o=a,r=l),{width:o,height:r,$:c}}function sp(t){return Cn(t)?t:t.contextElement}function Io(t){var n=Number.isFinite;const o=sp(t);if(!Wn(o))return Cr(1);const r=o.getBoundingClientRect(),{width:i,height:a,$:l}=Kx(o);let c=(l?yl(r.width):r.width)/i,u=(l?yl(r.height):r.height)/a;return c&&n(c)||(c=1),u&&n(u)||(u=1),{x:c,y:u}}const P6=Cr(0);function Gx(t){const n=rn(t);return lp()&&n.visualViewport?{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}:P6}function I6(t,n,o){return n===void 0&&(n=!1),o&&(!n||o===rn(t))&&n}function ao(t,n,o,r){n===void 0&&(n=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),a=sp(t);let l=Cr(1);n&&(r?Cn(r)&&(l=Io(r)):l=Io(t));const c=I6(a,o,r)?Gx(a):Cr(0);let u=(i.left+c.x)/l.x,d=(i.top+c.y)/l.y,f=i.width/l.x,g=i.height/l.y;if(a){const b=rn(a),h=r&&Cn(r)?rn(r):r;let m=b,v=Wd(m);for(;v&&r&&h!==m;){const E=Io(v),y=v.getBoundingClientRect(),k=$n(v),C=y.left+(v.clientLeft+parseFloat(k.paddingLeft))*E.x,R=y.top+(v.clientTop+parseFloat(k.paddingTop))*E.y;u*=E.x,d*=E.y,f*=E.x,g*=E.y,u+=C,d+=R,m=rn(v),v=Wd(m)}}return vl({width:f,height:g,x:u,y:d})}function T6(t){let{elements:n,rect:o,offsetParent:r,strategy:i}=t;const a=i==="fixed",l=qn(r),c=!!n&&rs(n.floating);if(r===l||c&&a)return o;let u={scrollLeft:0,scrollTop:0},d=Cr(1);const f=Cr(0),g=Wn(r);if((g||!g&&!a)&&((ai(r)!=="body"||oa(l))&&(u=os(r)),Wn(r))){const b=ao(r);d=Io(r),f.x=b.x+r.clientLeft,f.y=b.y+r.clientTop}return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-u.scrollLeft*d.x+f.x,y:o.y*d.y-u.scrollTop*d.y+f.y}}function D6(t){return Array.from(t.getClientRects())}function Vd(t,n){const o=os(t).scrollLeft;return n?n.left+o:ao(qn(t)).left+o}function M6(t){const n=qn(t),o=os(t),r=t.ownerDocument.body,i=Po(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),a=Po(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let l=-o.scrollLeft+Vd(t);const c=-o.scrollTop;return $n(r).direction==="rtl"&&(l+=Po(n.clientWidth,r.clientWidth)-i),{width:i,height:a,x:l,y:c}}function N6(t,n){const o=rn(t),r=qn(t),i=o.visualViewport;let a=r.clientWidth,l=r.clientHeight,c=0,u=0;if(i){a=i.width,l=i.height;const d=lp();(!d||d&&n==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:l,x:c,y:u}}function R6(t,n){const o=ao(t,!0,n==="fixed"),r=o.top+t.clientTop,i=o.left+t.clientLeft,a=Wn(t)?Io(t):Cr(1),l=t.clientWidth*a.x,c=t.clientHeight*a.y,u=i*a.x,d=r*a.y;return{width:l,height:c,x:u,y:d}}function iv(t,n,o){let r;if(n==="viewport")r=N6(t,o);else if(n==="document")r=M6(qn(t));else if(Cn(n))r=R6(n,o);else{const i=Gx(t);r={...n,x:n.x-i.x,y:n.y-i.y}}return vl(r)}function Qx(t,n){const o=$r(t);return o!==n&&Cn(o)&&!ei(o)&&($n(o).position==="fixed"||Qx(o,n))}function _6(t,n){const o=n.get(t);if(o)return o;let r=Fi(t,[],!1).filter(l=>Cn(l)&&ai(l)!=="body"),i=null;const a=$n(t).position==="fixed";for(let l=a?$r(t):t;Cn(l)&&!ei(l);){const c=$n(l),u=ap(l);u||c.position!=="fixed"||(i=null),(a?!u&&!i:!u&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||oa(l)&&!u&&Qx(t,l))?r=r.filter(f=>f!==l):i=c,l=$r(l)}return n.set(t,r),r}function L6(t){let{element:n,boundary:o,rootBoundary:r,strategy:i}=t;const a=o==="clippingAncestors"?rs(n)?[]:_6(n,this._c):[].concat(o),l=[...a,r],c=l[0],u=l.reduce((d,f)=>{const g=iv(n,f,i);return d.top=Po(g.top,d.top),d.right=Bd(g.right,d.right),d.bottom=Bd(g.bottom,d.bottom),d.left=Po(g.left,d.left),d},iv(n,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function F6(t){const{width:n,height:o}=Kx(t);return{width:n,height:o}}function A6(t,n,o){const r=Wn(n),i=qn(n),a=o==="fixed",l=ao(t,!0,a,n);let c={scrollLeft:0,scrollTop:0};const u=Cr(0);if(r||!r&&!a)if((ai(n)!=="body"||oa(i))&&(c=os(n)),r){const h=ao(n,!0,a,n);u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}else i&&(u.x=Vd(i));let d=0,f=0;if(i&&!r&&!a){const h=i.getBoundingClientRect();f=h.top+c.scrollTop,d=h.left+c.scrollLeft-Vd(i,h)}const g=l.left+c.scrollLeft-u.x-d,b=l.top+c.scrollTop-u.y-f;return{x:g,y:b,width:l.width,height:l.height}}function Js(t){return $n(t).position==="static"}function av(t,n){if(!Wn(t)||$n(t).position==="fixed")return null;if(n)return n(t);let o=t.offsetParent;return qn(t)===o&&(o=o.ownerDocument.body),o}function Jx(t,n){const o=rn(t);if(rs(t))return o;if(!Wn(t)){for(let i=$r(t);i&&!ei(i);){if(Cn(i)&&!Js(i))return i;i=$r(i)}return o}let r=av(t,n);for(;r&&C6(r)&&Js(r);)r=av(r,n);return r&&ei(r)&&Js(r)&&!ap(r)?o:r||$6(t)||o}const z6=async function(t){const n=this.getOffsetParent||Jx,o=this.getDimensions,r=await o(t.floating);return{reference:A6(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function H6(t){return $n(t).direction==="rtl"}const B6={convertOffsetParentRelativeRectToViewportRelativeRect:T6,getDocumentElement:qn,getClippingRect:L6,getOffsetParent:Jx,getElementRects:z6,getClientRects:D6,getDimensions:F6,getScale:Io,isElement:Cn,isRTL:H6};function W6(t,n){function o(){var c;clearTimeout(a),(c=i)==null||c.disconnect(),i=null}function r(c,u){function d(R){const I=R[0].intersectionRatio;if(I!==u){if(!C)return r();I?r(!1,I):a=setTimeout(()=>{r(!1,1e-7)},1e3)}C=!1}c===void 0&&(c=!1),u===void 0&&(u=1),o();const{left:f,top:g,width:b,height:h}=t.getBoundingClientRect();if(c||n(),!b||!h)return;const m=ka(g),v=ka(l.clientWidth-(f+b)),E=ka(l.clientHeight-(g+h)),y=ka(f),k={rootMargin:-m+"px "+-v+"px "+-E+"px "+-y+"px",threshold:Po(0,Bd(1,u))||1};let C=!0;try{i=new IntersectionObserver(d,{...k,root:l.ownerDocument})}catch{i=new IntersectionObserver(d,k)}i.observe(t)}let i=null,a;const l=qn(t);return r(!0),o}function V6(t,n,o,r){function i(){const y=ao(t);v&&(y.x!==v.x||y.y!==v.y||y.width!==v.width||y.height!==v.height)&&o(),v=y,E=requestAnimationFrame(i)}r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,f=sp(t),g=a||l?[...f?Fi(f):[],...Fi(n)]:[];g.forEach(y=>{a&&y.addEventListener("scroll",o,{passive:!0}),l&&y.addEventListener("resize",o)});const b=f&&u?W6(f,o):null;let h=-1,m=null;c&&(m=new ResizeObserver(y=>{let[k]=y;k&&k.target===f&&m&&(m.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(n)})),o()}),f&&!d&&m.observe(f),m.observe(n));let v=d?ao(t):null,E;return d&&i(),o(),()=>{var y;g.forEach(k=>{a&&k.removeEventListener("scroll",o),l&&k.removeEventListener("resize",o)}),b==null||b(),(y=m)==null||y.disconnect(),m=null,d&&cancelAnimationFrame(E)}}const q6=O6,U6=x6,Y6=S6,K6=j6,G6=E6,lv=y6,Q6=(t,n,o)=>{const r=new Map,i={platform:B6,...o},a={...i.platform,_c:r};return v6(t,n,{...i,platform:a})};function cp(){let t=p.useRef(!1);return Je(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function J6(t){let n=ge(t),o=p.useRef(!1);p.useEffect(()=>(o.current=!1,()=>{o.current=!0,_x(()=>{o.current&&n()})}),[n])}let Z6=p.createContext(!1);function X6(){return p.useContext(Z6)}function eN(t){let n=X6(),o=p.useContext(Zx),r=es(t),[i,a]=p.useState(()=>{if(!n&&o!==null||Xn.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let c=r.createElement("div");return c.setAttribute("id","headlessui-portal-root"),r.body.appendChild(c)});return p.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),p.useEffect(()=>{n||o!==null&&a(o.current)},[o,a,n]),i}let tN=p.Fragment;function nN(t,n){let o=p.useRef(null),r=Et(l6(d=>{o.current=d}),n),i=es(o),a=eN(o),[l]=p.useState(()=>{var d;return Xn.isServer||(d=i==null?void 0:i.createElement("div"))==null?null:d}),c=p.useContext(iN),u=Ql();return Je(()=>{a&&l&&!a.contains(l)&&(l.setAttribute("data-headlessui-portal",""),a.appendChild(l))},[a,l]),Je(()=>{if(l&&c)return c.register(l)},[c,l]),J6(()=>{var d;a&&l&&(l instanceof Node&&a.contains(l)&&a.removeChild(l),0>=a.childNodes.length&&((d=a.parentElement)==null||d.removeChild(a)))}),u&&a&&l?rr.createPortal(bt({ourProps:{ref:r},theirProps:t,defaultTag:tN,name:"Portal"}),l):null}let rN=p.Fragment,Zx=p.createContext(null);function oN(t,n){let{target:o,...r}=t,i={ref:Et(n)};return S.createElement(Zx.Provider,{value:o},bt({ourProps:i,theirProps:r,defaultTag:rN,name:"Popover.Group"}))}let iN=p.createContext(null),aN=gt(nN),lN=gt(oN),sN=Object.assign(aN,{Group:lN});function cN(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,[n,o]=p.useState(t),r=cp(),i=p.useCallback(u=>{r.current&&o(d=>d|u)},[n,r]),a=p.useCallback(u=>!!(n&u),[n]),l=p.useCallback(u=>{r.current&&o(d=>d&~u)},[o,r]),c=p.useCallback(u=>{r.current&&o(d=>d^u)},[o]);return{flags:n,addFlag:i,hasFlag:a,removeFlag:l,toggleFlag:c}}function uN(t){let n={called:!1};return function(){if(!n.called)return n.called=!0,t(...arguments)}}function Zs(t){for(var n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t&&0<o.length&&t.classList.add(...o)}function Xs(t){for(var n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t&&0<o.length&&t.classList.remove(...o)}function dN(t,n){let o=Wt();if(!t)return o.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(t),[a,l]=[r,i].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):1e3*parseFloat(f)).sort((f,g)=>g-f);return d}),c=a+l;if(c!==0){o.group(d=>{d.setTimeout(()=>{n(),d.dispose()},c),d.addEventListener(t,"transitionrun",f=>{f.target===f.currentTarget&&d.dispose()})});let u=o.addEventListener(t,"transitionend",d=>{d.target===d.currentTarget&&(n(),u())})}else n();return o.add(()=>n()),o.dispose}function fN(t,n,o,r){let i=o?"enter":"leave",a=Wt(),l=r===void 0?()=>{}:uN(r);i=="enter"&&(t.removeAttribute("hidden"),t.style.display="");let c=it(i,{enter:()=>n.enter,leave:()=>n.leave}),u=it(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),d=it(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return Xs(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),Zs(t,...n.base,...c,...d),a.nextFrame(()=>{Xs(t,...n.base,...c,...d),Zs(t,...n.base,...c,...u),dN(t,()=>(Xs(t,...n.base,...c),Zs(t,...n.base,...n.entered),l()))}),a.dispose}function pN(t){let{immediate:n,container:o,direction:r,classes:i,onStart:a,onStop:l}=t,c=cp(),u=Sn(),d=jn(r);Je(()=>{n&&(d.current="enter")},[n]),Je(()=>{let f=Wt();u.add(f.dispose);let g=o.current;if(g&&d.current!=="idle"&&c.current)return f.dispose(),a.current(d.current),f.add(fN(g,i.current,d.current==="enter",()=>{f.dispose(),l.current(d.current)})),f.dispose},[r])}function sr(){return(0<arguments.length&&arguments[0]!==void 0?arguments[0]:"").split(/\s+/).filter(n=>1<n.length)}let is=p.createContext(null);is.displayName="TransitionContext";var gN=(t=>(t.Visible="visible",t.Hidden="hidden",t))(gN||{});function hN(){let t=p.useContext(is);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function mN(){let t=p.useContext(as);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let as=p.createContext(null);as.displayName="NestingContext";function ls(t){return"children"in t?ls(t.children):0<t.current.filter(n=>{let{el:o}=n;return o.current!==null}).filter(n=>{let{state:o}=n;return o==="visible"}).length}function Xx(t,n){let o=jn(t),r=p.useRef([]),i=cp(),a=Sn(),l=ge(function(h){let m=1<arguments.length&&arguments[1]!==void 0?arguments[1]:wr.Hidden,v=r.current.findIndex(E=>{let{el:y}=E;return y===h});v!==-1&&(it(m,{[wr.Unmount](){r.current.splice(v,1)},[wr.Hidden](){r.current[v].state="hidden"}}),a.microTask(()=>{var E;!ls(r)&&i.current&&((E=o.current)==null||E.call(o))}))}),c=ge(h=>{let m=r.current.find(v=>{let{el:E}=v;return E===h});return m?m.state!=="visible"&&(m.state="visible"):r.current.push({el:h,state:"visible"}),()=>l(h,wr.Unmount)}),u=p.useRef([]),d=p.useRef(Promise.resolve()),f=p.useRef({enter:[],leave:[],idle:[]}),g=ge((h,m,v)=>{u.current.splice(0),n&&(n.chains.current[m]=n.chains.current[m].filter(E=>{let[y]=E;return y!==h})),n==null||n.chains.current[m].push([h,new Promise(E=>{u.current.push(E)})]),n==null||n.chains.current[m].push([h,new Promise(E=>{Promise.all(f.current[m].map(y=>{let[k,C]=y;return C})).then(()=>E())})]),m==="enter"?d.current=d.current.then(()=>n==null?void 0:n.wait.current).then(()=>v(m)):v(m)}),b=ge((h,m,v)=>{Promise.all(f.current[m].splice(0).map(E=>{let[y,k]=E;return k})).then(()=>{var E;(E=u.current.shift())==null||E()}).then(()=>v(m))});return p.useMemo(()=>({children:r,register:c,unregister:l,onStart:g,onStop:b,wait:d,chains:f}),[c,l,r,g,b,f,d])}function bN(){}let vN=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function sv(t){var n;let o={};for(let r of vN)o[r]=(n=t[r])==null?bN:n;return o}function yN(t){let n=p.useRef(sv(t));return p.useEffect(()=>{n.current=sv(t)},[t]),n}let wN="div",e2=Sr.RenderStrategy;function xN(t,n){var o,r;let{beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c,enter:u,enterFrom:d,enterTo:f,entered:g,leave:b,leaveFrom:h,leaveTo:m,...v}=t,E=p.useRef(null),y=Et(E,n),k=(o=v.unmount)==null||o?wr.Unmount:wr.Hidden,{show:C,appear:R,initial:I}=hN(),[T,F]=p.useState(C?"visible":"hidden"),_=mN(),{register:J,unregister:B}=_;p.useEffect(()=>J(E),[J,E]),p.useEffect(()=>{if(k===wr.Hidden&&E.current)return C&&T!=="visible"?void F("visible"):it(T,{hidden:()=>B(E),visible:()=>J(E)})},[T,E,J,B,C,k]);let W=jn({base:sr(v.className),enter:sr(u),enterFrom:sr(d),enterTo:sr(f),entered:sr(g),leave:sr(b),leaveFrom:sr(h),leaveTo:sr(m)}),H=yN({beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c}),D=Ql();p.useEffect(()=>{if(D&&T==="visible"&&E.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[E,T,D]);let $=R&&C&&I,A=D&&(!I||R)?C?"enter":"leave":"idle",z=cN(0),V=ge(se=>it(se,{enter:()=>{z.addFlag(ft.Opening),H.current.beforeEnter()},leave:()=>{z.addFlag(ft.Closing),H.current.beforeLeave()},idle:()=>{}})),Q=ge(se=>it(se,{enter:()=>{z.removeFlag(ft.Opening),H.current.afterEnter()},leave:()=>{z.removeFlag(ft.Closing),H.current.afterLeave()},idle:()=>{}})),X=Xx(()=>{F("hidden"),B(E)},_),M=p.useRef(!1);pN({immediate:$,container:E,classes:W,direction:A,onStart:jn(se=>{M.current=!0,X.onStart(E,se,V)}),onStop:jn(se=>{M.current=!1,X.onStop(E,se,Q),se!=="leave"||ls(X)||(F("hidden"),B(E))})});let oe=v;return $?oe={...oe,className:pl(v.className,...W.current.enter,...W.current.enterFrom)}:M.current&&(oe.className=pl(v.className,(r=E.current)==null?void 0:r.className),oe.className===""&&delete oe.className),S.createElement(as.Provider,{value:X},S.createElement(ts,{value:it(T,{visible:ft.Open,hidden:ft.Closed})|z.flags},bt({ourProps:{ref:y},theirProps:oe,defaultTag:wN,features:e2,visible:T==="visible",name:"Transition.Child"})))}function jN(t,n){let{show:o,appear:r=!1,unmount:i=!0,...a}=t,l=p.useRef(null),c=Et(l,n);Ql();let u=ra();if(o===void 0&&u!==null&&(o=(u&ft.Open)===ft.Open),![!0,!1].includes(o))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,f]=p.useState(o?"visible":"hidden"),g=Xx(()=>{f("hidden")}),[b,h]=p.useState(!0),m=p.useRef([o]);Je(()=>{b!==!1&&m.current[m.current.length-1]!==o&&(m.current.push(o),h(!1))},[m,o]);let v=p.useMemo(()=>({show:o,appear:r,initial:b}),[o,r,b]);p.useEffect(()=>{if(o)f("visible");else if(!ls(g))f("hidden");else{let C=l.current;if(!C)return;let R=C.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&f("hidden")}},[o,g]);let E={unmount:i},y=ge(()=>{var C;b&&h(!1),(C=t.beforeEnter)==null||C.call(t)}),k=ge(()=>{var C;b&&h(!1),(C=t.beforeLeave)==null||C.call(t)});return S.createElement(as.Provider,{value:g},S.createElement(is.Provider,{value:v},bt({ourProps:{...E,as:p.Fragment,children:S.createElement(t2,{ref:c,...E,...a,beforeEnter:y,beforeLeave:k})},theirProps:{},defaultTag:p.Fragment,features:e2,visible:d==="visible",name:"Transition"})))}function EN(t,n){let o=p.useContext(is)!==null,r=ra()!==null;return S.createElement(S.Fragment,null,!o&&r?S.createElement(qd,{ref:n,...t}):S.createElement(t2,{ref:n,...t}))}let qd=gt(jN),t2=gt(xN),kN=gt(EN),cv=Object.assign(qd,{Child:kN,Root:qd});const ON=t=>{function n(i){return Object.prototype.hasOwnProperty.call(i,"current")}const{element:o,padding:r}=t;return{name:"arrow",options:t,fn(i){return n(o)?o.current==null?{}:lv({element:o.current,padding:r}).fn(i):o?lv({element:o,padding:r}).fn(i):{}}}};var Ba=typeof document>"u"?p.useEffect:p.useLayoutEffect;function wl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let o,r,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(o=t.length,o!=n.length)return!1;for(r=o;r--!=0;)if(!wl(t[r],n[r]))return!1;return!0}if(i=Object.keys(t),o=i.length,o!==Object.keys(n).length)return!1;for(r=o;r--!=0;)if(!Object.prototype.hasOwnProperty.call(n,i[r]))return!1;for(r=o;r--!=0;){const a=i[r];if(!(a==="_owner"&&t.$$typeof)&&!wl(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function uv(t){const n=p.useRef(t);return Ba(()=>{n.current=t}),n}function SN(t){t===void 0&&(t={});const{placement:n="bottom",strategy:o="absolute",middleware:r=[],platform:i,whileElementsMounted:a,open:l}=t,[c,u]=p.useState({x:null,y:null,strategy:o,placement:n,middlewareData:{},isPositioned:!1}),[d,f]=p.useState(r);wl(d,r)||f(r);const g=p.useRef(null),b=p.useRef(null),h=p.useRef(c),m=uv(a),v=uv(i),[E,y]=p.useState(null),[k,C]=p.useState(null),R=p.useCallback(B=>{g.current!==B&&(g.current=B,y(B))},[]),I=p.useCallback(B=>{b.current!==B&&(b.current=B,C(B))},[]),T=p.useCallback(()=>{if(g.current&&b.current){const B={placement:n,strategy:o,middleware:d};v.current&&(B.platform=v.current),Q6(g.current,b.current,B).then(W=>{const H={...W,isPositioned:!0};F.current&&!wl(h.current,H)&&(h.current=H,rr.flushSync(()=>{u(H)}))})}},[d,n,o,v]);Ba(()=>{l===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(B=>({...B,isPositioned:!1})))},[l]);const F=p.useRef(!1);Ba(()=>(F.current=!0,()=>{F.current=!1}),[]),Ba(()=>{if(E&&k){if(m.current)return m.current(E,k,T);T()}},[E,k,T,m]);const _=p.useMemo(()=>({reference:g,floating:b,setReference:R,setFloating:I}),[R,I]),J=p.useMemo(()=>({reference:E,floating:k}),[E,k]);return p.useMemo(()=>({...c,update:T,refs:_,elements:J,reference:R,floating:I}),[c,T,_,J,R,I])}var CN=typeof document>"u"?p.useEffect:p.useLayoutEffect;function $N(){const t=new Map;return{emit(n,o){var r;(r=t.get(n))==null||r.forEach(i=>i(o))},on(n,o){t.set(n,[...t.get(n)||[],o])},off(n,o){t.set(n,(t.get(n)||[]).filter(r=>r!==o))}}}const PN=p.createContext(null),IN=()=>p.useContext(PN);function TN(t){return(t==null?void 0:t.ownerDocument)||document}function DN(t){return TN(t).defaultView||window}function Oa(t){return!!t&&t instanceof DN(t).Element}const MN=jr.useInsertionEffect,NN=MN||(t=>t());function RN(t){const n=p.useRef(()=>{});return NN(()=>{n.current=t}),p.useCallback(function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n.current==null?void 0:n.current(...r)},[])}function _N(t){t===void 0&&(t={});const{open:n=!1,onOpenChange:o,nodeId:r}=t,i=SN(t),a=IN(),l=p.useRef(null),c=p.useRef({}),u=p.useState(()=>$N())[0],[d,f]=p.useState(null),g=p.useCallback(y=>{const k=Oa(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(k)},[i.refs]),b=p.useCallback(y=>{(Oa(y)||y===null)&&(l.current=y,f(y)),(Oa(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!Oa(y))&&i.refs.setReference(y)},[i.refs]),h=p.useMemo(()=>({...i.refs,setReference:b,setPositionReference:g,domReference:l}),[i.refs,b,g]),m=p.useMemo(()=>({...i.elements,domReference:d}),[i.elements,d]),v=RN(o),E=p.useMemo(()=>({...i,refs:h,elements:m,dataRef:c,nodeId:r,events:u,open:n,onOpenChange:v}),[i,r,u,n,v,h,m]);return CN(()=>{const y=a==null?void 0:a.nodesRef.current.find(k=>k.id===r);y&&(y.context=E)}),p.useMemo(()=>({...i,context:E,refs:h,reference:b,positionReference:g}),[i,h,E,b,g])}var LN=Object.defineProperty,FN=(t,n,o)=>n in t?LN(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,dv=(t,n,o)=>(FN(t,typeof n=="symbol"?n:n+"",o),o),n2={exports:{}},gi={},fv;function AN(){function t(a,l,c){var u={},d=null,f=null,g;for(g in c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),l.ref!==void 0&&(f=l.ref),l)o.call(l,g)&&!i.hasOwnProperty(g)&&(u[g]=l[g]);if(a&&a.defaultProps)for(g in l=a.defaultProps,l)u[g]===void 0&&(u[g]=l[g]);return{$$typeof:n,type:a,key:d,ref:f,props:u,_owner:r.current}}if(fv)return gi;fv=1;var n=Symbol.for("react.element"),o=Object.prototype.hasOwnProperty,r=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};return gi.Fragment=Symbol.for("react.fragment"),gi.jsx=t,gi.jsxs=t,gi}n2.exports=AN();var Ge=n2.exports;class zN{constructor(){dv(this,"current",this.detect()),dv(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return"u"<typeof window||"u"<typeof document?"server":"client"}}const ti=new zN,r2=(t,n)=>{ti.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)},ec={serverHandoffComplete:!1};function HN(){const[t,n]=p.useState(ec.serverHandoffComplete);return p.useEffect(()=>{t!==!0&&n(!0)},[t]),p.useEffect(()=>{ec.serverHandoffComplete===!1&&(ec.serverHandoffComplete=!0)},[]),t}const BN=S.useId??function(){const t=HN(),[n,o]=S.useState(t?()=>ti.nextId():null);return r2(()=>{n===null&&o(ti.nextId())},[n]),n==null?void 0:`${n}`};function WN(t,n,o,r){p.useEffect(()=>{const i=[];(typeof r.offset=="number"||typeof r.offset=="object"||typeof r.offset=="function")&&i.push(q6(r.offset)),(r.flip===!0||typeof r.flip=="number"||typeof r.flip=="object")&&i.push(K6({padding:typeof r.flip=="number"?r.flip:void 0,...typeof r.flip=="object"?r.flip:{}})),(r.shift===!0||typeof r.shift=="number"||typeof r.shift=="object")&&i.push(Y6({padding:typeof r.shift=="number"?r.shift:void 0,...typeof r.shift=="object"?r.shift:{}})),(r.autoPlacement===!0||typeof r.autoPlacement=="object")&&i.push(U6(typeof r.autoPlacement=="object"?r.autoPlacement:void 0)),(r.arrow===!0||typeof r.arrow=="number")&&i.push(ON({element:o,padding:r.arrow===!0?0:r.arrow})),i.push(...typeof r.middleware=="function"?r.middleware({referenceEl:n.reference,floatingEl:n.floating}):r.middleware||[]),(r.hide===!0||typeof r.hide=="object")&&i.push(G6(typeof r.hide=="object"?r.hide:void 0)),t(i)},[r.offset,r.shift,r.flip,r.arrow,r.autoPlacement,r.hide,r.middleware])}function VN(t,n,o){p.useEffect(()=>{if(t&&ti.isClient&&"u">typeof ResizeObserver&&n.current&&n.current instanceof Element){const r=new ResizeObserver(i=>{let[a]=i;const l=a.borderBoxSize.reduce((c,u)=>{let{inlineSize:d}=u;return c+d},0);o(l)});return r.observe(n.current),()=>{r.disconnect(),o(null)}}},[])}const qN=t=>t==="top"?"origin-bottom":t==="bottom"?"origin-top":t==="left"?"origin-right":t==="right"?"origin-left":t==="top-start"||t==="right-end"?"origin-bottom-left":t==="top-end"||t==="left-end"?"origin-bottom-right":t==="right-start"||t==="bottom-start"?"origin-top-left":t==="left-start"||t==="bottom-end"?"origin-top-right":"";function UN(t,n){return p.useMemo(()=>typeof t.originClass=="function"?t.originClass(n):typeof t.originClass=="string"?t.originClass:t.tailwindcssOriginClass?qN(n):"",[n,t.originClass,t.tailwindcssOriginClass])}function o2(t,n){if(t in n){const l=n[t];for(var o=arguments.length,r=Array(2<o?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];return typeof l=="function"?l(...r):l}const a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,o2),a}function i2(t){return ti.isServer?null:t instanceof Node?t.ownerDocument:t&&Object.prototype.hasOwnProperty.call(t,"current")&&t.current instanceof Node?t.current.ownerDocument:document}const pv=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var a2=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(a2||{});function YN(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var o;return t!==((o=i2(t))==null?void 0:o.body)&&o2(n,{0(){return t.matches(pv)},1(){for(let r=t;r!==null;){if(r.matches(pv))return!0;r=r.parentElement}return!1}})}function KN(t){const n=p.useRef(t);return r2(()=>{n.current=t},[t]),n}function _n(t,n,o){const r=KN(n);p.useEffect(()=>{function i(a){r.current(a)}return document.addEventListener(t,i,o),()=>document.removeEventListener(t,i,o)},[t,o])}function GN(t,n){function o(l,c){if(i.current&&!l.defaultPrevented){const u=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t),d=c(l);if(d!==null&&d.getRootNode().contains(d)){for(const f of u){if(f===null)continue;const g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(d)||l.composed&&l.composedPath().includes(g))return}return!YN(d,a2.Loose)&&d.tabIndex!==-1&&l.preventDefault(),n(l,d)}}}let r=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];const i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=r})},[r]);const a=p.useRef(null);_n("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),_n("click",l=>{a.current&&(o(l,()=>a.current),a.current=null)},!0),_n("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}const Sa=new Map,up=p.createContext(null);up.displayName="ReferenceContext";const dp=p.createContext(null);dp.displayName="FloatingContext";const Ai=p.createContext(null);Ai.displayName="ArrowContext";function l2(t){const n=p.useContext(up);if(n===null){const o=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,l2),o}return n}function s2(t){const n=p.useContext(dp);if(n===null){const o=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,s2),o}return n}function c2(t){const n=p.useContext(Ai);if(n===null){const o=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,c2),o}return n}function u2(t,n,o,r){const{referenceRef:i}=r,a=n;if(a.as===p.Fragment)return Ge.jsx(t.type,{...t.props,...o,ref:i});const l=a.as||"div";return Ge.jsx(l,{...o,ref:i,children:Ge.jsx(t.type,{...t.props})})}function fp(t,n,o,r){function i(I){return y.portal?Ge.jsx(sN,{children:I}):I}function a(I){const T={...R,...o,ref:u};if(y.as===p.Fragment)return Ge.jsx(I.type,{...I.props,...T});const F=y.as||"div";return Ge.jsx(F,{...T,children:Ge.jsx(I.type,{...I.props})})}function l(){return ti.isServer?f.current&&y.show?Ge.jsx(t.type,{...t.props}):Ge.jsx(p.Fragment,{}):y.transitionChild?Ge.jsx(cv.Child,{as:p.Fragment,...C,children:Ge.jsx(t.type,{...t.props})}):Ge.jsx(cv,{as:p.Fragment,...C,children:Ge.jsx(t.type,{...t.props})})}var c=Math.round;const{floatingRef:u,props:d,mounted:f,setShow:g,x:b,y:h,placement:m,strategy:v,referenceElWidth:E}=r,y={...d,...n},k=UN(y,m),C={show:!!f.current&&y.show,enter:`${y.enter||""} ${k}`,enterFrom:`${y.enterFrom||""}`,enterTo:`${y.enterTo||""}`,leave:`${y.leave||""} ${k}`,leaveFrom:`${y.leaveFrom||""}`,leaveTo:`${y.leaveTo||""}`,beforeEnter:()=>{g(!0)},afterLeave:()=>{g(!1)}},R={style:{...!y.dialog&&(y.transform||y.transform===void 0)?{position:v,zIndex:y.zIndex||9999,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${c(b||0)}px,${c(h||0)}px)`}:{position:v,zIndex:y.zIndex||9999,top:`${h||0}px`,left:`${b||0}px`},width:y.adaptiveWidth&&typeof E=="number"?`${E}px`:void 0}};return i(a(l()))}function d2(t,n){let[o,r]=t;var i,a;const l=BN(),c=p.useRef(!1),[u,d]=p.useState(),f=p.useRef(null),g=p.useMemo(()=>({show:n.onShow||(()=>{}),hide:n.onHide||(()=>{}),update:n.onUpdate||(()=>{})}),[n.onShow,n.onHide,n.onUpdate]),{x:b,y:h,placement:m,strategy:v,update:E,refs:y,middlewareData:k}=_N({placement:n.placement||"bottom-start",strategy:n.strategy,middleware:u}),[C,R]=p.useState(null);p.useEffect(()=>{c.current=!0},[]),p.useEffect(()=>{o&&!Sa.get(l)?(Sa.set(l,!0),g.show()):!o&&Sa.get(l)&&(Sa.delete(l),g.hide())},[o]);const I=p.useCallback(()=>{E(),g.update()},[E,g]);p.useEffect(I,[n.placement,n.strategy,u]),WN(d,y,f,n),VN(n.adaptiveWidth,y.reference,R),p.useEffect(()=>{if(y.reference.current&&y.floating.current&&o)return n.autoUpdate===!1?()=>{}:V6(y.reference.current,y.floating.current,I,typeof n.autoUpdate=="object"?n.autoUpdate:void 0)},[o,I,y]);const T=p.useRef(!0);p.useEffect(()=>{!(y.reference.current instanceof Element)&&y.reference.current&&y.floating.current&&T.current&&(T.current=!1,I(),window.requestAnimationFrame(()=>{T.current=!0,I()}))},[y]);const F={referenceRef:y.setReference,placement:m},_={floatingRef:y.setFloating,props:n,mounted:c,setShow:r,x:b,y:h,placement:m,strategy:v,referenceElWidth:C},J={arrowRef:f,placement:m,x:(i=k.arrow)==null?void 0:i.x,y:(a=k.arrow)==null?void 0:a.y};return{referenceApi:F,floatingApi:_,arrowApi:J,x:b,y:h,placement:m,strategy:v,update:I,refs:y,middlewareData:k}}const f2=p.forwardRef((t,n)=>{function o(m){if(t.as===p.Fragment||!t.as)return Ge.jsx(p.Fragment,{children:m});const v=t.as;return Ge.jsx(v,{ref:n,className:t.className,children:m})}const[r,i]=p.useState(t.show??!1),{referenceApi:a,floatingApi:l,arrowApi:c,placement:u}=d2([r,i],t),d={placement:u},[f,g]=typeof t.children=="function"?t.children(d):t.children;if(!p.isValidElement(f))return console.warn("<Float /> is missing a reference and floating element."),Ge.jsx(p.Fragment,{});if(t.composable||t.dialog)return o(Ge.jsx(up.Provider,{value:a,children:Ge.jsx(dp.Provider,{value:l,children:Ge.jsx(Ai.Provider,{value:c,children:typeof t.children=="function"?t.children(d):t.children})})},"FloatingNode"));const b=u2(f,{as:p.Fragment},{key:"reference-node"},a),h=fp(g,{as:t.floatingAs||"div"},{},l);return o([b,Ge.jsx(Ai.Provider,{value:c,children:h},"floating-node")])});f2.displayName="Float";function QN(t){if(!t.children)return Ge.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,children:l,...c}=t;return c},[t]),o=l2("Float.Reference"),{placement:r}=o,i={placement:r};return u2(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||p.Fragment},n,o)}function JN(t){if(!t.children)return Ge.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,enter:l,enterFrom:c,enterTo:u,leave:d,leaveFrom:f,leaveTo:g,originClass:b,tailwindcssOriginClass:h,transitionChild:m,children:v,...E}=t;return E},[t]),o=s2("Float.Content"),{placement:r}=o,i={placement:r};return fp(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||"div"},n,o)}function ZN(t){const{arrowRef:n,placement:o,x:r,y:i}=c2("Float.Arrow"),a=p.useMemo(()=>{const{as:d,offset:f,children:g,...b}=t;return b},[t]),l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]],c={left:typeof r=="number"?`${r}px`:void 0,top:typeof i=="number"?`${i}px`:void 0,right:void 0,bottom:void 0,[l]:`${-1*(t.offset??4)}px`,...a.style};if(t.as===p.Fragment){const d={placement:o},f=typeof t.children=="function"?t.children(d):t.children;return f&&p.isValidElement(f)?Ge.jsx(f.type,{...f.props,ref:n,style:c}):Ge.jsx(p.Fragment,{})}const u=t.as||"div";return Ge.jsx(u,{ref:n,...a,style:c,children:t.children})}function pp(t){function n(){a&&l(!1)}let{onInitial:o,children:r,...i}=t;const[a,l]=p.useState(i.show??!1),c=p.useMemo(()=>{const{as:h,show:m,placement:v,strategy:E,offset:y,shift:k,flip:C,arrow:R,autoPlacement:I,hide:T,autoUpdate:F,zIndex:_,enter:J,enterFrom:B,enterTo:W,leave:H,leaveFrom:D,leaveTo:$,originClass:A,tailwindcssOriginClass:z,portal:V,transform:Q,middleware:X,onShow:M,onHide:oe,onUpdate:se,...N}=i;return N},[i]),{floatingApi:u,arrowApi:d,placement:f,refs:g}=d2([a,l],i);if(p.useEffect(()=>{l(i.show??!1)},[i.show]),o({show:a,setShow:l,placement:f,refs:g}),!r)return Ge.jsx(p.Fragment,{});const b=fp(typeof r=="function"?r({placement:f,close:n}):r,{...i,as:i.as||p.Fragment,show:a},c,u);return Ge.jsx(Ai.Provider,{value:d,children:b})}function XN(t){function n(o){let{setShow:r,refs:i}=o;_n("contextmenu",a=>{a.preventDefault(),i.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:a.clientX,y:a.clientY,top:a.clientY,left:a.clientX,right:a.clientX,bottom:a.clientY}}}),r(!0)}),GN(i.floating,()=>{r(!1)})}return Ge.jsx(pp,{flip:!0,...t,show:!1,portal:!0,onInitial:n})}function eR(t){function n(i){function a(){f(!0)}function l(){f(!1)}function c(h){g.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:h.clientX,y:h.clientY,top:h.clientY,left:h.clientX,right:h.clientX,bottom:h.clientY}}})}function u(h){a(),c(h)}function d(h){a(),c(h.touches[0])}let{setShow:f,refs:g}=i;const b=i2(g.floating);b&&(p.useEffect(()=>{if((o||o===void 0)&&!b.getElementById("headlesui-float-cursor-style")){const h=b.createElement("style");return(b.head||b.getElementsByTagName("head")[0]).appendChild(h),h.id="headlesui-float-cursor-style",h.appendChild(b.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var m;return(m=b.getElementById("headlesui-float-cursor-style"))==null?void 0:m.remove()}}},[o]),"ontouchstart"in window||0<navigator.maxTouchPoints?(_n("touchstart",d),_n("touchend",l),_n("touchmove",d)):(_n("mouseenter",u),_n("mouseleave",l),_n("mousemove",u)))}let{globalHideCursor:o,...r}=t;return Ge.jsx(pp,{...r,portal:!0,className:"headlesui-float-cursor-root",onInitial:n})}Object.assign(f2,{Reference:QN,Content:JN,Arrow:ZN,Virtual:pp,ContextMenu:XN,Cursor:eR});const tR=`
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
	jn-z-10
`,nR=`
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`,gv=S.forwardRef((t,n)=>{let{text:o="",htmlFor:r=void 0,required:i=!1,className:a="",disabled:l=!1,floating:c=!1,minimized:u=!1,...d}=t;return S.createElement("label",we({className:`
				juno-label 
				${tR} 
				${c?`juno-label-floating 
	jn-absolute
`:""}
				${u?`juno-label-minimized 
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`:""}
				${l?`juno-label-disabled 
	jn-opacity-50
	jn-cursor-not-allowed
`:""} 
				${a}
			`,htmlFor:r,ref:n},d),o,i?S.createElement("span",{className:`
					juno-required 
					${nR}
					`}):"")});gv.displayName="Label (JS)",gv.propTypes={text:w.string,htmlFor:w.string,required:w.bool,className:w.string,disabled:w.bool,floating:w.bool,minimized:w.bool},w.node,w.node,w.oneOf(["help","error","success"]),w.string;function ia(t,n){let[o,r]=p.useState(t),i=jn(t);return Je(()=>r(i.current),[i,r,...n]),o}function p2(t,n,o){let[r,i]=p.useState(o),a=t!==void 0,l=p.useRef(a),c=p.useRef(!1),u=p.useRef(!1);return!a||l.current||c.current?!a&&l.current&&!u.current&&(u.current=!0,l.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,l.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?t:r,ge(d=>(a||i(d),n==null?void 0:n(d)))]}let rR="div";var gp=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(gp||{});function oR(t,n){var o;let{features:r=1,...i}=t,a={ref:n,"aria-hidden":(2&r)==2||((o=i["aria-hidden"])==null?void 0:o),hidden:(4&r)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return bt({ourProps:a,theirProps:i,slot:{},defaultTag:rR,name:"Hidden"})}let g2=gt(oR);function hp(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[];for(let[r,i]of Object.entries(t))m2(o,h2(n,r),i);return o}function h2(t,n){return t?t+"["+n+"]":n}function m2(t,n,o){if(Array.isArray(o))for(let[r,i]of o.entries())m2(t,h2(n,r.toString()),i);else o instanceof Date?t.push([n,o.toISOString()]):typeof o=="boolean"?t.push([n,o?"1":"0"]):typeof o=="string"?t.push([n,o]):typeof o=="number"?t.push([n,`${o}`]):o==null?t.push([n,""]):hp(o,n,t)}function b2(t){let{container:n,accept:o,walk:r,enabled:i=!0}=t,a=p.useRef(o),l=p.useRef(r);p.useEffect(()=>{a.current=o,l.current=r},[o,r]),Je(()=>{if(!n||!i)return;let c=na(n);if(!c)return;let u=a.current,d=l.current,f=Object.assign(b=>u(b),{acceptNode:u}),g=c.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,f,!1);for(;g.nextNode();)d(g.currentNode)},[n,i,a,l])}function vo(t,n,o){var r=Math.max,i=Math.min,a=Math.round;let l=o.initialDeps??[],c;return()=>{var u,d,f,g;let b;o.key&&((u=o.debug)!=null&&u.call(o))&&(b=Date.now());const h=t();if(!(h.length!==l.length||h.some((E,y)=>l[y]!==E)))return c;l=h;let v;if(o.key&&((d=o.debug)!=null&&d.call(o))&&(v=Date.now()),c=n(...h),o.key&&((f=o.debug)==null?void 0:f.call(o))){const E=a(100*(Date.now()-b))/100,y=a(100*(Date.now()-v))/100,k=(C,R)=>{for(C+="";C.length<R;)C=" "+C;return C};console.info(`%c⏱ ${k(y,5)} /${k(E,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${r(0,i(120-120*(y/16),120))}deg 100% 31%);`,o==null?void 0:o.key)}return(g=o==null?void 0:o.onChange)==null||g.call(o,c),c}}function tc(t){if(t===void 0)throw new Error("Unexpected undefined");return t}const iR=(t,n)=>1>Math.abs(t-n),aR=(t,n,o)=>{let r;return function(){for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];t.clearTimeout(r),r=t.setTimeout(()=>n.apply(this,a),o)}},lR=t=>t,sR=t=>{const n=Math.max(t.startIndex-t.overscan,0),o=Math.min(t.endIndex+t.overscan,t.count-1),r=[];for(let i=n;i<=o;i++)r.push(i);return r},cR=(t,n)=>{var o=Math.round;const r=t.scrollElement;if(!r)return;const i=t.targetWindow;if(!i)return;const a=c=>{const{width:u,height:d}=c;n({width:o(u),height:o(d)})};if(a(r.getBoundingClientRect()),!i.ResizeObserver)return()=>{};const l=new i.ResizeObserver(c=>{const u=c[0];if(u!=null&&u.borderBoxSize){const d=u.borderBoxSize[0];if(d)return void a({width:d.inlineSize,height:d.blockSize})}a(r.getBoundingClientRect())});return l.observe(r,{box:"border-box"}),()=>{l.unobserve(r)}},hv={passive:!0},uR=typeof window>"u"||"onscrollend"in window,dR=(t,n)=>{const o=t.scrollElement;if(!o)return;const r=t.targetWindow;if(!r)return;let i=0;const a=uR?()=>{}:aR(r,()=>{n(i,!1)},t.options.isScrollingResetDelay),l=d=>()=>{const{horizontal:f,isRtl:g}=t.options;i=f?o.scrollLeft*(g&&-1||1):o.scrollTop,a(),n(i,d)},c=l(!0),u=l(!1);return u(),o.addEventListener("scroll",c,hv),o.addEventListener("scrollend",u,hv),()=>{o.removeEventListener("scroll",c),o.removeEventListener("scrollend",u)}},fR=(t,n,o)=>{var r=Math.round;if(n!=null&&n.borderBoxSize){const i=n.borderBoxSize[0];if(i)return r(i[o.options.horizontal?"inlineSize":"blockSize"])}return r(t.getBoundingClientRect()[o.options.horizontal?"width":"height"])},pR=(t,n,o)=>{let{adjustments:r=0,behavior:i}=n;var a,l;(l=(a=o.scrollElement)==null?void 0:a.scrollTo)==null||l.call(a,{[o.options.horizontal?"left":"top"]:t+r,behavior:i})};class gR{constructor(n){var o=Math.max,r=Math.min,i=this;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let a=null;const l=()=>a||(this.targetWindow&&this.targetWindow.ResizeObserver?a=new this.targetWindow.ResizeObserver(c=>{c.forEach(u=>{this._measureElement(u.target,u)})}):null);return{disconnect:()=>{var c;(c=l())==null||c.disconnect(),a=null},observe:c=>{var u;return(u=l())==null?void 0:u.observe(c,{box:"border-box"})},unobserve:c=>{var u;return(u=l())==null?void 0:u.unobserve(c)}}})(),this.range=null,this.setOptions=a=>{Object.entries(a).forEach(l=>{let[c,u]=l;typeof u>"u"&&delete a[c]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:lR,rangeExtractor:sR,onChange:()=>{},measureElement:fR,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...a}},this.notify=a=>{var l,c;(c=(l=this.options).onChange)==null||c.call(l,this,a)},this.maybeNotify=vo(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;const l=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==l){if(this.cleanup(),!l)return void this.maybeNotify();this.scrollElement=l,this.targetWindow=this.scrollElement&&"ownerDocument"in this.scrollElement?this.scrollElement.ownerDocument.defaultView:((a=this.scrollElement)==null?void 0:a.window)??null,this.elementsCache.forEach(c=>{this.observer.observe(c)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,c=>{this.scrollRect=c,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(c,u)=>{this.scrollAdjustments=0,this.scrollDirection=u?this.getScrollOffset()<c?"forward":"backward":null,this.scrollOffset=c,this.isScrolling=u,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(a,l)=>{const c=new Map,u=new Map;for(let d=l-1;0<=d;d--){const f=a[d];if(c.has(f.lane))continue;const g=u.get(f.lane);if(g==null||f.end>g.end?u.set(f.lane,f):f.end<g.end&&c.set(f.lane,!0),c.size===this.options.lanes)break}return u.size===this.options.lanes?Array.from(u.values()).sort((d,f)=>d.end===f.end?d.index-f.index:d.end-f.end)[0]:void 0},this.getMeasurementOptions=vo(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(a,l,c,u,d)=>(this.pendingMeasuredCacheIndexes=[],{count:a,paddingStart:l,scrollMargin:c,getItemKey:u,enabled:d}),{key:!1}),this.getMeasurements=vo(()=>[this.getMeasurementOptions(),this.itemSizeCache],(a,l)=>{let{count:c,paddingStart:u,scrollMargin:d,getItemKey:f,enabled:g}=a;if(!g)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(m=>{this.itemSizeCache.set(m.key,m.size)}));const b=0<this.pendingMeasuredCacheIndexes.length?r(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const h=this.measurementsCache.slice(0,b);for(let m=b;m<c;m++){const v=f(m),E=this.options.lanes===1?h[m-1]:this.getFurthestMeasurement(h,m),y=E?E.end+this.options.gap:u+d,k=l.get(v),C=typeof k=="number"?k:this.options.estimateSize(m),R=E?E.lane:m%this.options.lanes;h[m]={index:m,start:y,size:C,end:y+C,key:v,lane:R}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=vo(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(a,l,c)=>this.range=0<a.length&&0<l?hR({measurements:a,outerSize:l,scrollOffset:c}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=vo(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(a,l,c,u)=>l===null?[]:a({startIndex:l.startIndex,endIndex:l.endIndex,overscan:c,count:u}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{const l=this.options.indexAttribute,c=a.getAttribute(l);return c?parseInt(c,10):(console.warn(`Missing attribute name '${l}={index}' on measured element.`),-1)},this._measureElement=(a,l)=>{const c=this.indexFromElement(a),u=this.measurementsCache[c];if(u){const d=u.key,f=this.elementsCache.get(d);f!==a&&(f&&this.observer.unobserve(f),this.observer.observe(a),this.elementsCache.set(d,a)),a.isConnected&&this.resizeItem(c,this.options.measureElement(a,l,this))}},this.resizeItem=(a,l)=>{const c=this.measurementsCache[a];if(c){const u=this.itemSizeCache.get(c.key)??c.size,d=l-u;d!=0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?c.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(c,d,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=d,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,l)),this.notify(!1))}},this.measureElement=a=>a?void this._measureElement(a,void 0):void this.elementsCache.forEach((l,c)=>{l.isConnected||(this.observer.unobserve(l),this.elementsCache.delete(c))}),this.getVirtualItems=vo(()=>[this.getIndexes(),this.getMeasurements()],(a,l)=>{const c=[];for(let u=0,d=a.length;u<d;u++){const f=a[u],g=l[f];c.push(g)}return c},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{const l=this.getMeasurements();return l.length===0?void 0:tc(l[v2(0,l.length-1,c=>tc(l[c]).start,a)])},this.getOffsetForAlignment=(a,l)=>{const c=this.getSize(),u=this.getScrollOffset();l==="auto"&&(a<=u?l="start":a>=u+c?l="end":l="start"),l==="start"?a=a:l==="end"?a-=c:l=="center"&&(a-=c/2);const d=this.options.horizontal?"scrollWidth":"scrollHeight",f=this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[d]:this.scrollElement[d]:0;return o(r(f-c,a),0)},this.getOffsetForIndex=function(a){let l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"auto";a=o(0,r(a,i.options.count-1));const c=i.measurementsCache[a];if(c){const u=i.getSize(),d=i.getScrollOffset();if(l==="auto")if(c.end>=d+u-i.options.scrollPaddingEnd)l="end";else if(c.start<=d+i.options.scrollPaddingStart)l="start";else return[d,l];const f=l==="end"?c.end+i.options.scrollPaddingEnd:c.start-i.options.scrollPaddingStart;return[i.getOffsetForAlignment(f,l),l]}},this.isDynamicMode=()=>0<this.elementsCache.size,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(a){let{align:l="start",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getOffsetForAlignment(a,l),{adjustments:void 0,behavior:c})},this.scrollToIndex=function(a){let{align:l="auto",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};a=o(0,r(a,i.options.count-1)),i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const u=i.getOffsetForIndex(a,l);if(!u)return;const[d,f]=u;i._scrollToOffset(d,{adjustments:void 0,behavior:c}),c!=="smooth"&&i.isDynamicMode()&&i.targetWindow&&(i.scrollToIndexTimeoutId=i.targetWindow.setTimeout(()=>{if(i.scrollToIndexTimeoutId=null,i.elementsCache.has(i.options.getItemKey(a))){const[b]=tc(i.getOffsetForIndex(a,f));iR(b,i.getScrollOffset())||i.scrollToIndex(a,{align:f,behavior:c})}else i.scrollToIndex(a,{align:f,behavior:c})}))},this.scrollBy=function(a){let{behavior:l}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),l==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getScrollOffset()+a,{adjustments:void 0,behavior:l})},this.getTotalSize=()=>{var a;const l=this.getMeasurements();let c;return c=l.length===0?this.options.paddingStart:this.options.lanes===1?((a=l[l.length-1])==null?void 0:a.end)??0:o(...l.slice(-this.options.lanes).map(u=>u.end)),o(c-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(a,l)=>{let{adjustments:c,behavior:u}=l;this.options.scrollToFn(a,{behavior:u,adjustments:c},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(n)}}const v2=(t,n,o,r)=>{for(;t<=n;){const i=0|(t+n)/2,a=o(i);if(a<r)t=i+1;else if(a>r)n=i-1;else return i}return 0<t?t-1:0};function hR(t){let{measurements:n,outerSize:o,scrollOffset:r}=t;const i=n.length-1,a=v2(0,i,c=>n[c].start,r);let l=a;for(;l<i&&n[l].end<r+o;)l++;return{startIndex:a,endIndex:l}}const mR=typeof document>"u"?p.useEffect:p.useLayoutEffect;function bR(t){const n=p.useReducer(()=>({}),{})[1],o={...t,onChange:(i,a)=>{var l;a?rr.flushSync(n):n(),(l=t.onChange)==null||l.call(t,i,a)}},[r]=p.useState(()=>new gR(o));return r.setOptions(o),p.useEffect(()=>r._didMount(),[]),mR(()=>r._willUpdate()),r}function vR(t){return bR({observeElementRect:cR,observeElementOffset:dR,scrollToFn:pR,...t})}function mv(t,n){let o=p.useRef([]),r=ge(t);p.useEffect(()=>{let i=[...o.current];for(let[a,l]of n.entries())if(o.current[a]!==l){let c=r(n,i);return o.current=n,c}},[r,...n])}function yR(t){function n(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",n))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",n),n())}let qr=[];yR(()=>{function t(n){n.target instanceof HTMLElement&&n.target!==document.body&&qr[0]!==n.target&&(qr.unshift(n.target),qr=qr.filter(o=>o!=null&&o.isConnected),qr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});var wR=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(wR||{}),xR=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(xR||{}),jR=(t=>(t[t.Pointer=0]="Pointer",t[t.Focus=1]="Focus",t[t.Other=2]="Other",t))(jR||{}),ER=(t=>(t[t.OpenCombobox=0]="OpenCombobox",t[t.CloseCombobox=1]="CloseCombobox",t[t.GoToOption=2]="GoToOption",t[t.RegisterOption=3]="RegisterOption",t[t.UnregisterOption=4]="UnregisterOption",t[t.RegisterLabel=5]="RegisterLabel",t[t.SetActivationTrigger=6]="SetActivationTrigger",t[t.UpdateVirtualOptions=7]="UpdateVirtualOptions",t))(ER||{});function nc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:l=>l,o=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],r=n(t.options.slice()),i=0<r.length&&r[0].dataRef.current.order!==null?r.sort((l,c)=>l.dataRef.current.order-c.dataRef.current.order):Xl(r,l=>l.dataRef.current.domRef.current),a=o?i.indexOf(o):null;return a===-1&&(a=null),{options:i,activeOptionIndex:a}}let kR={1(t){var n;return(n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},0(t){var n,o;if((n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===0)return t;if((o=t.dataRef.current)!=null&&o.value){let r=t.dataRef.current.calculateIndex(t.dataRef.current.value);if(r!==-1)return{...t,activeOptionIndex:r,comboboxState:0}}return{...t,comboboxState:0}},2(t,n){var o,r,i,a,l;if((o=t.dataRef.current)!=null&&o.disabled||(r=t.dataRef.current)!=null&&r.optionsRef.current&&!((i=t.dataRef.current)!=null&&i.optionsPropsRef.current.static)&&t.comboboxState===1)return t;if(t.virtual){let f=n.focus===Re.Specific?n.idx:hl(n,{resolveItems:()=>t.virtual.options,resolveActiveIndex:()=>{var b,h;return(h=(b=t.activeOptionIndex)==null?t.virtual.options.findIndex(m=>!t.virtual.disabled(m)):b)==null?null:h},resolveDisabled:t.virtual.disabled,resolveId(){throw new Error("Function not implemented.")}}),g=(a=n.trigger)==null?2:a;return t.activeOptionIndex===f&&t.activationTrigger===g?t:{...t,activeOptionIndex:f,activationTrigger:g}}let c=nc(t);if(c.activeOptionIndex===null){let f=c.options.findIndex(g=>!g.dataRef.current.disabled);f!==-1&&(c.activeOptionIndex=f)}let u=n.focus===Re.Specific?n.idx:hl(n,{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled}),d=(l=n.trigger)==null?2:l;return t.activeOptionIndex===u&&t.activationTrigger===d?t:{...t,...c,activeOptionIndex:u,activationTrigger:d}},3:(t,n)=>{var o,r,i;if((o=t.dataRef.current)!=null&&o.virtual)return{...t,options:[...t.options,n.payload]};let a=n.payload,l=nc(t,u=>(u.push(a),u));t.activeOptionIndex===null&&(r=t.dataRef.current)!=null&&r.isSelected(n.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(a));let c={...t,...l,activationTrigger:2};return(i=t.dataRef.current)!=null&&i.__demoMode&&t.dataRef.current.value===void 0&&(c.activeOptionIndex=0),c},4:(t,n)=>{var o;if((o=t.dataRef.current)!=null&&o.virtual)return{...t,options:t.options.filter(i=>i.id!==n.id)};let r=nc(t,i=>{let a=i.findIndex(l=>l.id===n.id);return a!==-1&&i.splice(a,1),i});return{...t,...r,activationTrigger:2}},5:(t,n)=>t.labelId===n.id?t:{...t,labelId:n.id},6:(t,n)=>t.activationTrigger===n.trigger?t:{...t,activationTrigger:n.trigger},7:(t,n)=>{var o;if(((o=t.virtual)==null?void 0:o.options)===n.options)return t;let r=t.activeOptionIndex;if(t.activeOptionIndex!==null){let i=n.options.indexOf(t.virtual.options[t.activeOptionIndex]);r=i===-1?null:i}return{...t,activeOptionIndex:r,virtual:Object.assign({},t.virtual,{options:n.options})}}},mp=p.createContext(null);mp.displayName="ComboboxActionsContext";function aa(t){let n=p.useContext(mp);if(n===null){let o=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,aa),o}return n}let y2=p.createContext(null);function OR(t){var n;let o=uo("VirtualProvider"),[r,i]=p.useMemo(()=>{let u=o.optionsRef.current;if(!u)return[0,0];let d=window.getComputedStyle(u);return[parseFloat(d.paddingBlockStart||d.paddingTop),parseFloat(d.paddingBlockEnd||d.paddingBottom)]},[o.optionsRef.current]),a=vR({scrollPaddingStart:r,scrollPaddingEnd:i,count:o.virtual.options.length,estimateSize(){return 40},getScrollElement(){var u;return(u=o.optionsRef.current)==null?null:u},overscan:12}),[l,c]=p.useState(0);return Je(()=>{c(u=>u+1)},[(n=o.virtual)==null?void 0:n.options]),S.createElement(y2.Provider,{value:a},S.createElement("div",{style:{position:"relative",width:"100%",height:`${a.getTotalSize()}px`},ref:u=>{if(u){if(typeof process<"u"&&ST.JEST_WORKER_ID!==void 0||o.activationTrigger===0)return;o.activeOptionIndex!==null&&o.virtual.options.length>o.activeOptionIndex&&a.scrollToIndex(o.activeOptionIndex)}}},a.getVirtualItems().map(u=>{var d;return S.createElement(p.Fragment,{key:u.key},S.cloneElement((d=t.children)==null?void 0:d.call(t,{option:o.virtual.options[u.index],open:o.comboboxState===0}),{key:`${l}-${u.key}`,"data-index":u.index,"aria-setsize":o.virtual.options.length,"aria-posinset":u.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${u.start}px)`,overflowAnchor:"none"}}))})))}let bp=p.createContext(null);bp.displayName="ComboboxDataContext";function uo(t){let n=p.useContext(bp);if(n===null){let o=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,uo),o}return n}function SR(t,n){return it(n.type,kR,t,n)}let CR=p.Fragment;function $R(t,n){let{value:o,defaultValue:r,onChange:i,form:a,name:l,by:c=null,disabled:u=!1,__demoMode:d=!1,nullable:f=!1,multiple:g=!1,immediate:b=!1,virtual:h=null,...m}=t,v=null,[E=g?[]:void 0,y]=p2(o,i,r),[k,C]=p.useReducer(SR,{dataRef:p.createRef(),comboboxState:d?0:1,options:[],virtual:null,activeOptionIndex:null,activationTrigger:2,labelId:null}),R=p.useRef(!1),I=p.useRef({static:!1,hold:!1}),T=p.useRef(null),F=p.useRef(null),_=p.useRef(null),J=p.useRef(null),B=ge(typeof c=="string"?(ie,me)=>{let ve=c;return(ie==null?void 0:ie[ve])===(me==null?void 0:me[ve])}:c??((ie,me)=>ie===me)),W=ge(ie=>k.options.findIndex(me=>B(me.dataRef.current.value,ie))),H=p.useCallback(ie=>it($.mode,{1:()=>E.some(me=>B(me,ie)),0:()=>B(E,ie)}),[E]),D=ge(ie=>k.activeOptionIndex===W(ie)),$=p.useMemo(()=>({...k,immediate:!1,optionsPropsRef:I,labelRef:T,inputRef:F,buttonRef:_,optionsRef:J,value:E,defaultValue:r,disabled:u,mode:g?1:0,virtual:k.virtual,get activeOptionIndex(){if(R.current&&k.activeOptionIndex===null&&0<k.options.length){let ie=k.options.findIndex(me=>!me.dataRef.current.disabled);if(ie!==-1)return ie}return k.activeOptionIndex},calculateIndex:W,compare:B,isSelected:H,isActive:D,nullable:f,__demoMode:d}),[E,r,u,g,f,d,k,v]);Je(()=>{},[v,void 0]),Je(()=>{k.dataRef.current=$},[$]),Xf([$.buttonRef,$.inputRef,$.optionsRef],()=>re.closeCombobox(),$.comboboxState===0);let A=p.useMemo(()=>{var ie,me,ve;return{open:$.comboboxState===0,disabled:u,activeIndex:$.activeOptionIndex,activeOption:$.activeOptionIndex===null?null:$.virtual?$.virtual.options[(ie=$.activeOptionIndex)==null?0:ie]:(ve=(me=$.options[$.activeOptionIndex])==null?void 0:me.dataRef.current.value)==null?null:ve,value:E}},[$,u,E]),z=ge(()=>{if($.activeOptionIndex!==null){if($.virtual)se($.virtual.options[$.activeOptionIndex]);else{let{dataRef:ie}=$.options[$.activeOptionIndex];se(ie.current.value)}re.goToOption(Re.Specific,$.activeOptionIndex)}}),V=ge(()=>{C({type:0}),R.current=!0}),Q=ge(()=>{C({type:1}),R.current=!1}),X=ge((ie,me,ve)=>(R.current=!1,ie===Re.Specific?C({type:2,focus:Re.Specific,idx:me,trigger:ve}):C({type:2,focus:ie,trigger:ve}))),M=ge((ie,me)=>(C({type:3,payload:{id:ie,dataRef:me}}),()=>{$.isActive(me.current.value)&&(R.current=!0),C({type:4,id:ie})})),oe=ge(ie=>(C({type:5,id:ie}),()=>C({type:5,id:null}))),se=ge(ie=>it($.mode,{0(){return y==null?void 0:y(ie)},1(){let me=$.value.slice(),ve=me.findIndex(Be=>B(Be,ie));return ve===-1?me.push(ie):me.splice(ve,1),y==null?void 0:y(me)}})),N=ge(ie=>{C({type:6,trigger:ie})}),re=p.useMemo(()=>({onChange:se,registerOption:M,registerLabel:oe,goToOption:X,closeCombobox:Q,openCombobox:V,setActivationTrigger:N,selectActiveOption:z}),[]),be=n===null?{}:{ref:n},Ce=p.useRef(null),_e=Sn();return p.useEffect(()=>{Ce.current&&r!==void 0&&_e.addEventListener(Ce.current,"reset",()=>{y==null||y(r)})},[Ce,y]),S.createElement(mp.Provider,{value:re},S.createElement(bp.Provider,{value:$},S.createElement(ts,{value:it($.comboboxState,{0:ft.Open,1:ft.Closed})},l!=null&&E!=null&&hp({[l]:E}).map((ie,me)=>{let[ve,Be]=ie;return S.createElement(g2,{features:gp.Hidden,ref:me===0?at=>{var Xe;Ce.current=(Xe=at==null?void 0:at.closest("form"))==null?null:Xe}:void 0,...gl({key:ve,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,disabled:u,name:ve,value:Be})})}),bt({ourProps:be,theirProps:m,slot:A,defaultTag:CR,name:"Combobox"}))))}let PR="input";function IR(t,n){var o=Math.abs,r,i,a,l,c;let u=dn(),{id:d=`headlessui-combobox-input-${u}`,onChange:f,displayValue:g,type:b="text",...h}=t,m=uo("Combobox.Input"),v=aa("Combobox.Input"),E=Et(m.inputRef,n),y=es(m.inputRef),k=p.useRef(!1),C=Sn(),R=ge(()=>{v.onChange(null),m.optionsRef.current&&(m.optionsRef.current.scrollTop=0),v.goToOption(Re.Nothing)}),I=function(){var z;return typeof g=="function"&&m.value!==void 0?(z=g(m.value))==null?"":z:typeof m.value=="string"?m.value:""}();mv((z,V)=>{let[Q,X]=z,[M,oe]=V;if(k.current)return;let se=m.inputRef.current;se&&((oe===0&&X===1||Q!==M)&&(se.value=Q),requestAnimationFrame(()=>{if(!k.current&&se&&(y==null?void 0:y.activeElement)===se){let{selectionStart:N,selectionEnd:re}=se;o((re??0)-(N??0))===0&&N===0&&se.setSelectionRange(se.value.length,se.value.length)}}))},[I,m.comboboxState,y]),mv((z,V)=>{let[Q]=z,[X]=V;if(Q===0&&X===1){if(k.current)return;let M=m.inputRef.current;if(!M)return;let oe=M.value,{selectionStart:se,selectionEnd:N,selectionDirection:re}=M;M.value="",M.value=oe,re===null?M.setSelectionRange(se,N):M.setSelectionRange(se,N,re)}},[m.comboboxState]);let T=p.useRef(!1),F=ge(()=>{T.current=!0}),_=ge(()=>{C.nextFrame(()=>{T.current=!1})}),J=ge(z=>{switch(k.current=!0,z.key){case Te.Enter:if(k.current=!1,m.comboboxState!==0||T.current)return;if(z.preventDefault(),z.stopPropagation(),m.activeOptionIndex===null)return void v.closeCombobox();v.selectActiveOption(),m.mode===0&&v.closeCombobox();break;case Te.ArrowDown:return k.current=!1,z.preventDefault(),z.stopPropagation(),it(m.comboboxState,{0:()=>v.goToOption(Re.Next),1:()=>v.openCombobox()});case Te.ArrowUp:return k.current=!1,z.preventDefault(),z.stopPropagation(),it(m.comboboxState,{0:()=>v.goToOption(Re.Previous),1:()=>{v.openCombobox(),C.nextFrame(()=>{m.value||v.goToOption(Re.Last)})}});case Te.Home:if(z.shiftKey)break;return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Re.First);case Te.PageUp:return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Re.First);case Te.End:if(z.shiftKey)break;return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Re.Last);case Te.PageDown:return k.current=!1,z.preventDefault(),z.stopPropagation(),v.goToOption(Re.Last);case Te.Escape:return k.current=!1,m.comboboxState===0?(z.preventDefault(),m.optionsRef.current&&!m.optionsPropsRef.current.static&&z.stopPropagation(),m.nullable&&m.mode===0&&m.value===null&&R(),v.closeCombobox()):void 0;case Te.Tab:if(k.current=!1,m.comboboxState!==0)return;m.mode===0&&m.activationTrigger!==1&&v.selectActiveOption(),v.closeCombobox()}}),B=ge(z=>{f==null||f(z),m.nullable&&m.mode===0&&z.target.value===""&&R(),v.openCombobox()}),W=ge(z=>{var V,Q,X;let M=(V=z.relatedTarget)==null?qr.find(oe=>oe!==z.currentTarget):V;if(k.current=!1,!((Q=m.optionsRef.current)!=null&&Q.contains(M))&&!((X=m.buttonRef.current)!=null&&X.contains(M))&&m.comboboxState===0)return z.preventDefault(),m.mode===0&&(m.nullable&&m.value===null?R():m.activationTrigger!==1&&v.selectActiveOption()),v.closeCombobox()}),H=ge(z=>{var V,Q,X;let M=(V=z.relatedTarget)==null?qr.find(oe=>oe!==z.currentTarget):V;(Q=m.buttonRef.current)!=null&&Q.contains(M)||(X=m.optionsRef.current)!=null&&X.contains(M)||m.disabled||m.immediate&&m.comboboxState!==0&&(v.openCombobox(),C.nextFrame(()=>{v.setActivationTrigger(1)}))}),D=ia(()=>{if(m.labelId)return[m.labelId].join(" ")},[m.labelId]),$=p.useMemo(()=>({open:m.comboboxState===0,disabled:m.disabled}),[m]),A={ref:E,id:d,role:"combobox",type:b,"aria-controls":(r=m.optionsRef.current)==null?void 0:r.id,"aria-expanded":m.comboboxState===0,"aria-activedescendant":m.activeOptionIndex===null?void 0:m.virtual?(i=m.options.find(z=>{var V;return!((V=m.virtual)!=null&&V.disabled(z.dataRef.current.value))&&m.compare(z.dataRef.current.value,m.virtual.options[m.activeOptionIndex])}))==null?void 0:i.id:(a=m.options[m.activeOptionIndex])==null?void 0:a.id,"aria-labelledby":D,"aria-autocomplete":"list",defaultValue:(c=(l=t.defaultValue)==null?m.defaultValue===void 0?null:g==null?void 0:g(m.defaultValue):l)==null?m.defaultValue:c,disabled:m.disabled,onCompositionStart:F,onCompositionEnd:_,onKeyDown:J,onChange:B,onFocus:H,onBlur:W};return bt({ourProps:A,theirProps:h,slot:$,defaultTag:PR,name:"Combobox.Input"})}let TR="button";function DR(t,n){var o;let r=uo("Combobox.Button"),i=aa("Combobox.Button"),a=Et(r.buttonRef,n),l=dn(),{id:c=`headlessui-combobox-button-${l}`,...u}=t,d=Sn(),f=ge(v=>{switch(v.key){case Te.ArrowDown:return v.preventDefault(),v.stopPropagation(),r.comboboxState===1&&i.openCombobox(),d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Te.ArrowUp:return v.preventDefault(),v.stopPropagation(),r.comboboxState===1&&(i.openCombobox(),d.nextFrame(()=>{r.value||i.goToOption(Re.Last)})),d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Te.Escape:return r.comboboxState===0?(v.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&v.stopPropagation(),i.closeCombobox(),d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})})):void 0}}),g=ge(v=>rp(v.currentTarget)?v.preventDefault():(r.comboboxState===0?i.closeCombobox():(v.preventDefault(),i.openCombobox()),void d.nextFrame(()=>{var E;return(E=r.inputRef.current)==null?void 0:E.focus({preventScroll:!0})}))),b=ia(()=>{if(r.labelId)return[r.labelId,c].join(" ")},[r.labelId,c]),h=p.useMemo(()=>({open:r.comboboxState===0,disabled:r.disabled,value:r.value}),[r]),m={ref:a,id:c,type:ep(t,r.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(o=r.optionsRef.current)==null?void 0:o.id,"aria-expanded":r.comboboxState===0,"aria-labelledby":b,disabled:r.disabled,onClick:g,onKeyDown:f};return bt({ourProps:m,theirProps:u,slot:h,defaultTag:TR,name:"Combobox.Button"})}let MR="label";function NR(t,n){let o=dn(),{id:r=`headlessui-combobox-label-${o}`,...i}=t,a=uo("Combobox.Label"),l=aa("Combobox.Label"),c=Et(a.labelRef,n);Je(()=>l.registerLabel(r),[r]);let u=ge(()=>{var f;return(f=a.inputRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]);return bt({ourProps:{ref:c,id:r,onClick:u},theirProps:i,slot:d,defaultTag:MR,name:"Combobox.Label"})}let RR="ul",_R=Sr.RenderStrategy|Sr.Static;function LR(t,n){let o=dn(),{id:r=`headlessui-combobox-options-${o}`,hold:i=!1,...a}=t,l=uo("Combobox.Options"),c=Et(l.optionsRef,n),u=ra(),d=u===null?l.comboboxState===0:(u&ft.Open)===ft.Open;Je(()=>{var h;l.optionsPropsRef.current.static=(h=t.static)!=null&&h},[l.optionsPropsRef,t.static]),Je(()=>{l.optionsPropsRef.current.hold=i},[l.optionsPropsRef,i]),b2({container:l.optionsRef.current,enabled:l.comboboxState===0,accept(h){return h.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});let f=ia(()=>{var h,m;return(m=l.labelId)==null?(h=l.buttonRef.current)==null?void 0:h.id:m},[l.labelId,l.buttonRef.current]),g=p.useMemo(()=>({open:l.comboboxState===0,option:void 0}),[l]),b={"aria-labelledby":f,role:"listbox","aria-multiselectable":l.mode===1||void 0,id:r,ref:c};return l.virtual&&l.comboboxState===0&&Object.assign(a,{children:S.createElement(OR,null,a.children)}),bt({ourProps:b,theirProps:a,slot:g,defaultTag:RR,features:_R,visible:d,name:"Combobox.Options"})}let FR="li";function AR(t,n){var o;let r=dn(),{id:i=`headlessui-combobox-option-${r}`,disabled:a=!1,value:l,order:c=null,...u}=t,d=uo("Combobox.Option"),f=aa("Combobox.Option"),g=d.virtual?d.activeOptionIndex===d.calculateIndex(l):d.activeOptionIndex!==null&&((o=d.options[d.activeOptionIndex])==null?void 0:o.id)===i,b=d.isSelected(l),h=p.useRef(null),m=jn({disabled:a,value:l,domRef:h,order:c}),v=p.useContext(y2),E=Et(n,h,v?v.measureElement:null),y=ge(()=>f.onChange(l));Je(()=>f.registerOption(i,m),[m,i]);let k=p.useRef(!(d.virtual||d.__demoMode));Je(()=>{if(d.virtual&&d.__demoMode){let B=Wt();return B.requestAnimationFrame(()=>{k.current=!0}),B.dispose}},[d.virtual,d.__demoMode]),Je(()=>{if(k.current&&d.comboboxState===0&&g&&d.activationTrigger!==0){let B=Wt();return B.requestAnimationFrame(()=>{var W,H;(H=(W=h.current)==null?void 0:W.scrollIntoView)==null||H.call(W,{block:"nearest"})}),B.dispose}},[h,g,d.comboboxState,d.activationTrigger,d.activeOptionIndex]);let C=ge(B=>{var W;return a||(W=d.virtual)!=null&&W.disabled(l)?B.preventDefault():(y(),Ax()||requestAnimationFrame(()=>{var H;return(H=d.inputRef.current)==null?void 0:H.focus({preventScroll:!0})}),void(d.mode===0&&requestAnimationFrame(()=>f.closeCombobox())))}),R=ge(()=>{var B;if(a||(B=d.virtual)!=null&&B.disabled(l))return f.goToOption(Re.Nothing);let W=d.calculateIndex(l);f.goToOption(Re.Specific,W)}),I=tp(),T=ge(B=>I.update(B)),F=ge(B=>{var W;if(!(!I.wasMoved(B)||a||(W=d.virtual)!=null&&W.disabled(l)||g)){let H=d.calculateIndex(l);f.goToOption(Re.Specific,H,0)}}),_=ge(B=>{var W;I.wasMoved(B)&&(a||(W=d.virtual)!=null&&W.disabled(l)||g&&(d.optionsPropsRef.current.hold||f.goToOption(Re.Nothing)))}),J=p.useMemo(()=>({active:g,selected:b,disabled:a}),[g,b,a]);return bt({ourProps:{id:i,ref:E,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0||void 0,"aria-selected":b,disabled:void 0,onClick:C,onFocus:R,onPointerEnter:T,onMouseEnter:T,onPointerMove:F,onMouseMove:F,onPointerLeave:_,onMouseLeave:_},theirProps:u,slot:J,defaultTag:FR,name:"Combobox.Option"})}let zR=gt($R),HR=gt(DR),BR=gt(IR),WR=gt(NR),VR=gt(LR),qR=gt(AR);Object.assign(zR,{Input:BR,Button:HR,Label:WR,Options:VR,Option:qR}),w.string,w.node,w.string,w.string,w.bool,w.bool,w.node,w.node,w.string,w.bool,w.string,w.bool,w.string,w.bool,w.func,w.func,w.func,w.func,w.string,w.bool,w.node,w.bool,w.bool,w.string,w.string,w.oneOf(["full","auto"]),w.string,w.string,w.bool,w.string,w.string,w.string,w.string,w.node,w.string,w.node,w.string,w.node;let bv=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function vv(t){var n,o;let r=(n=t.innerText)==null?"":n,i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let a=!1;for(let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),a=!0;let l=a?(o=i.innerText)==null?"":o:r;return bv.test(l)&&(l=l.replace(bv,"")),l}function UR(t){let n=t.getAttribute("aria-label");if(typeof n=="string")return n.trim();let o=t.getAttribute("aria-labelledby");if(o){let r=o.split(" ").map(i=>{let a=document.getElementById(i);if(a){let l=a.getAttribute("aria-label");return typeof l=="string"?l.trim():vv(a).trim()}return null}).filter(Boolean);if(0<r.length)return r.join(", ")}return vv(t).trim()}function w2(t){let n=p.useRef(""),o=p.useRef("");return ge(()=>{let r=t.current;if(!r)return"";let i=r.innerText;if(n.current===i)return o.current;let a=UR(r).trim().toLowerCase();return n.current=i,o.current=a,a})}var YR=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(YR||{}),KR=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(KR||{}),GR=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t))(GR||{});function rc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,o=t.activeItemIndex===null?null:t.items[t.activeItemIndex],r=Xl(n(t.items.slice()),a=>a.dataRef.current.domRef.current),i=o?r.indexOf(o):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}let QR={1(t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},0(t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},2:(t,n)=>{var o;let r=rc(t),i=hl(n,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...r,searchQuery:"",activeItemIndex:i,activationTrigger:(o=n.trigger)==null?1:o}},3:(t,n)=>{let o=t.searchQuery===""?1:0,r=t.searchQuery+n.value.toLowerCase(),i=(t.activeItemIndex===null?t.items:t.items.slice(t.activeItemIndex+o).concat(t.items.slice(0,t.activeItemIndex+o))).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(r))&&!l.dataRef.current.disabled}),a=i?t.items.indexOf(i):-1;return a===-1||a===t.activeItemIndex?{...t,searchQuery:r}:{...t,searchQuery:r,activeItemIndex:a,activationTrigger:1}},4(t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},5:(t,n)=>{let o=rc(t,r=>[...r,{id:n.id,dataRef:n.dataRef}]);return{...t,...o}},6:(t,n)=>{let o=rc(t,r=>{let i=r.findIndex(a=>a.id===n.id);return i!==-1&&r.splice(i,1),r});return{...t,...o,activationTrigger:1}}},vp=p.createContext(null);vp.displayName="MenuContext";function ss(t){let n=p.useContext(vp);if(n===null){let o=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,ss),o}return n}function JR(t,n){return it(n.type,QR,t,n)}let ZR=p.Fragment;function XR(t,n){let{__demoMode:o=!1,...r}=t,i=p.useReducer(JR,{__demoMode:o,menuState:o?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:l,buttonRef:c},u]=i,d=Et(n);Xf([c,l],(b,h)=>{var m;u({type:1}),Zl(h,Jl.Loose)||(b.preventDefault(),(m=c.current)==null||m.focus())},a===0);let f=ge(()=>{u({type:1})}),g=p.useMemo(()=>({open:a===0,close:f}),[a,f]);return S.createElement(vp.Provider,{value:i},S.createElement(ts,{value:it(a,{0:ft.Open,1:ft.Closed})},bt({ourProps:{ref:d},theirProps:r,slot:g,defaultTag:ZR,name:"Menu"})))}let e_="button";function t_(t,n){var o;let r=dn(),{id:i=`headlessui-menu-button-${r}`,...a}=t,[l,c]=ss("Menu.Button"),u=Et(l.buttonRef,n),d=Sn(),f=ge(v=>{switch(v.key){case Te.Space:case Te.Enter:case Te.ArrowDown:v.preventDefault(),v.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Re.First}));break;case Te.ArrowUp:v.preventDefault(),v.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Re.Last}))}}),g=ge(v=>{switch(v.key){case Te.Space:v.preventDefault()}}),b=ge(v=>rp(v.currentTarget)?v.preventDefault():void(t.disabled||(l.menuState===0?(c({type:1}),d.nextFrame(()=>{var E;return(E=l.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})})):(v.preventDefault(),c({type:0}))))),h=p.useMemo(()=>({open:l.menuState===0}),[l]),m={ref:u,id:i,type:ep(t,l.buttonRef),"aria-haspopup":"menu","aria-controls":(o=l.itemsRef.current)==null?void 0:o.id,"aria-expanded":l.menuState===0,onKeyDown:f,onKeyUp:g,onClick:b};return bt({ourProps:m,theirProps:a,slot:h,defaultTag:e_,name:"Menu.Button"})}let n_="div",r_=Sr.RenderStrategy|Sr.Static;function o_(t,n){var o,r;let i=dn(),{id:a=`headlessui-menu-items-${i}`,...l}=t,[c,u]=ss("Menu.Items"),d=Et(c.itemsRef,n),f=es(c.itemsRef),g=Sn(),b=ra(),h=b===null?c.menuState===0:(b&ft.Open)===ft.Open;p.useEffect(()=>{let k=c.itemsRef.current;k&&c.menuState===0&&k!==(f==null?void 0:f.activeElement)&&k.focus({preventScroll:!0})},[c.menuState,c.itemsRef,f]),b2({container:c.itemsRef.current,enabled:c.menuState===0,accept(k){return k.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:k.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(k){k.setAttribute("role","none")}});let m=ge(k=>{var C,R;switch(g.dispose(),k.key){case Te.Space:if(c.searchQuery!=="")return k.preventDefault(),k.stopPropagation(),u({type:3,value:k.key});case Te.Enter:if(k.preventDefault(),k.stopPropagation(),u({type:1}),c.activeItemIndex!==null){let{dataRef:I}=c.items[c.activeItemIndex];(R=(C=I.current)==null?void 0:C.domRef.current)==null||R.click()}Fx(c.buttonRef.current);break;case Te.ArrowDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Re.Next});case Te.ArrowUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Re.Previous});case Te.Home:case Te.PageUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Re.First});case Te.End:case Te.PageDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Re.Last});case Te.Escape:k.preventDefault(),k.stopPropagation(),u({type:1}),Wt().nextFrame(()=>{var I;return(I=c.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})});break;case Te.Tab:k.preventDefault(),k.stopPropagation(),u({type:1}),Wt().nextFrame(()=>{n6(c.buttonRef.current,k.shiftKey?Ad.Previous:Ad.Next)});break;default:k.key.length===1&&(u({type:3,value:k.key}),g.setTimeout(()=>u({type:4}),350))}}),v=ge(k=>{switch(k.key){case Te.Space:k.preventDefault()}}),E=p.useMemo(()=>({open:c.menuState===0}),[c]),y={"aria-activedescendant":c.activeItemIndex===null||(o=c.items[c.activeItemIndex])==null?void 0:o.id,"aria-labelledby":(r=c.buttonRef.current)==null?void 0:r.id,id:a,onKeyDown:m,onKeyUp:v,role:"menu",tabIndex:0,ref:d};return bt({ourProps:y,theirProps:l,slot:E,defaultTag:n_,features:r_,visible:h,name:"Menu.Items"})}let i_=p.Fragment;function a_(t,n){let o=dn(),{id:r=`headlessui-menu-item-${o}`,disabled:i=!1,...a}=t,[l,c]=ss("Menu.Item"),u=l.activeItemIndex!==null&&l.items[l.activeItemIndex].id===r,d=p.useRef(null),f=Et(n,d);Je(()=>{if(!l.__demoMode&&l.menuState===0&&u&&l.activationTrigger!==0){let I=Wt();return I.requestAnimationFrame(()=>{var T,F;(F=(T=d.current)==null?void 0:T.scrollIntoView)==null||F.call(T,{block:"nearest"})}),I.dispose}},[l.__demoMode,d,u,l.menuState,l.activationTrigger,l.activeItemIndex]);let g=w2(d),b=p.useRef({disabled:i,domRef:d,get textValue(){return g()}});Je(()=>{b.current.disabled=i},[b,i]),Je(()=>(c({type:5,id:r,dataRef:b}),()=>c({type:6,id:r})),[b,r]);let h=ge(()=>{c({type:1})}),m=ge(I=>i?I.preventDefault():(c({type:1}),void Fx(l.buttonRef.current))),v=ge(()=>i?c({type:2,focus:Re.Nothing}):void c({type:2,focus:Re.Specific,id:r})),E=tp(),y=ge(I=>E.update(I)),k=ge(I=>{E.wasMoved(I)&&(i||u||c({type:2,focus:Re.Specific,id:r,trigger:0}))}),C=ge(I=>{E.wasMoved(I)&&(i||u&&c({type:2,focus:Re.Nothing}))}),R=p.useMemo(()=>({active:u,disabled:i,close:h}),[u,i,h]);return bt({ourProps:{id:r,ref:f,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,disabled:void 0,onClick:m,onFocus:v,onPointerEnter:y,onMouseEnter:y,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:R,defaultTag:i_,name:"Menu.Item"})}let l_=gt(XR),s_=gt(t_),c_=gt(o_),u_=gt(a_);Object.assign(l_,{Button:s_,Items:c_,Item:u_}),w.string,w.node,w.any,w.bool,w.bool,w.string,w.node,w.number,w.number,w.bool,w.string,w.node,w.bool,w.string,w.bool,w.node,w.node,w.string,w.bool,w.bool,w.string,w.string,w.func,w.func,w.bool,w.node,w.bool,w.string,w.bool,w.bool,w.string,w.func,w.string,w.node,w.bool,w.bool,w.func;var d_=S.createContext({}),f_=function(){return S.useContext(d_)},p_=function(t,n){return`
		`.concat(t?"jn-whitespace-nowrap":"",`
		`).concat(n==="center"?`
				jn-justify-center
				jn-flex
				jn-flex-col		
			`:"",`
		jn-px-5
		jn-py-3
		jn-border-b
		jn-border-theme-background-lvl-2
		jn-h-full
	`)},g_=function(t){var n;return t&&(n={gridColumn:"span ".concat(t," / span ").concat(t)}),n},x2=p.forwardRef(function(t,n){var o=t.colSpan,r=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=ii(t,["colSpan","nowrap","className","children"]),d=f_()||{},f=d.cellVerticalAlignment;return S.createElement("div",xe({className:"juno-datagrid-cell ".concat(p_(r!==void 0&&r,f)," ").concat(a),style:g_(o),role:"gridcell",ref:n},u),c)});x2.displayName="DataGridCell";var h_=`
	jn-font-bold
	jn-text-theme-high
	jn-bg-theme-background-lvl-1
	jn-border-theme-background-lvl-0
`,m_=p.forwardRef(function(t,n){var o=t.colSpan,r=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=ii(t,["colSpan","nowrap","className","children"]);return S.createElement(x2,xe({colSpan:o,nowrap:r!==void 0&&r,className:"juno-datagrid-head-cell ".concat(h_," ").concat(a),role:"columnheader",ref:n},u),c)});m_.displayName="DataGridHeadCell";var b_=`
	jn-contents
`,v_=p.forwardRef(function(t,n){var o=t.className,r=o===void 0?"":o,i=t.children,a=i===void 0?null:i,l=ii(t,["className","children"]);return S.createElement("div",xe({className:"juno-datagrid-row ".concat(b_," ").concat(r),role:"row",ref:n},l),a)});v_.displayName="DataGridRow";var oc=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],To={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var o=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-o.getTime())/864e5-3+(o.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},zi={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(3<n&&21>n)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},At=function(t,n){return n===void 0&&(n=2),("000"+t).slice(-1*n)},an=function(t){return t===!0?1:0};function yv(t,n){var o;return function(){var r=this,i=arguments;clearTimeout(o),o=setTimeout(function(){return t.apply(r,i)},n)}}var ic=function(t){return t instanceof Array?t:[t]};function Dt(t,n,o){return o===!0?t.classList.add(n):void t.classList.remove(n)}function Ve(t,n,o){var r=window.document.createElement(t);return n=n||"",o=o||"",r.className=n,o!==void 0&&(r.textContent=o),r}function Ca(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function j2(t,n){return n(t)?t:t.parentNode?j2(t.parentNode,n):void 0}function $a(t,n){var o=Ve("div","numInputWrapper"),r=Ve("input","numInput "+t),i=Ve("span","arrowUp"),a=Ve("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),n!==void 0)for(var l in n)r.setAttribute(l,n[l]);return o.appendChild(r),o.appendChild(i),o.appendChild(a),o}function Kt(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var ac=function(){},xl=function(t,n,o){return o.months[n?"shorthand":"longhand"][t]},y_={D:ac,F:function(t,n,o){t.setMonth(o.months.longhand.indexOf(n))},G:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,o){t.setHours(t.getHours()%12+12*an(new RegExp(o.amPM[1],"i").test(n)))},M:function(t,n,o){t.setMonth(o.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(1e3*parseFloat(n))},W:function(t,n,o){var r=parseInt(n),i=new Date(t.getFullYear(),0,2+7*(r-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+o.firstDayOfWeek),i},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:ac,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:ac,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},Ur={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},Si={Z:function(t){return t.toISOString()},D:function(t,n,o){return n.weekdays.shorthand[Si.w(t,n,o)]},F:function(t,n,o){return xl(Si.n(t,n,o)-1,!1,n)},G:function(t,n,o){return At(Si.h(t,n,o))},H:function(t){return At(t.getHours())},J:function(t,n){return n.ordinal===void 0?t.getDate():t.getDate()+n.ordinal(t.getDate())},K:function(t,n){return n.amPM[an(11<t.getHours())]},M:function(t,n){return xl(t.getMonth(),!0,n)},S:function(t){return At(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,o){return o.getWeek(t)},Y:function(t){return At(t.getFullYear(),4)},d:function(t){return At(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return At(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return At(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return(t.getFullYear()+"").substring(2)}},E2=function(t){var n=t.config,o=n===void 0?To:n,r=t.l10n,i=r===void 0?zi:r,a=t.isMobile;return function(l,c,u){var d=u||i;return o.formatDate===void 0||a!==void 0&&a?c.split("").map(function(f,g,b){return Si[f]&&b[g-1]!=="\\"?Si[f](l,d,o):f==="\\"?"":f}).join(""):o.formatDate(l,c,d)}},Ud=function(t){var n=t.config,o=n===void 0?To:n,r=t.l10n,i=r===void 0?zi:r;return function(a,l,c,u){if(a===0||a){var d;if(a instanceof Date)d=new Date(a.getTime());else if(typeof a!="string"&&a.toFixed!==void 0)d=new Date(a);else if(typeof a=="string"){var f=l||(o||To).dateFormat,g=(a+"").trim();if(g==="today")d=new Date,c=!0;else if(o&&o.parseDate)d=o.parseDate(a,f);else if(/Z$/.test(g)||/GMT$/.test(g))d=new Date(a);else{for(var b=void 0,h=[],m=0,v=0,E="";m<f.length;m++){var y=f[m],k=y==="\\",C=f[m-1]==="\\"||k;if(Ur[y]&&!C){E+=Ur[y];var R=new RegExp(E).exec(a);R&&(b=!0)&&h[y==="Y"?"unshift":"push"]({fn:y_[y],val:R[++v]})}else k||(E+=".")}d=o&&o.noCalendar?new Date(new Date().setHours(0,0,0,0)):new Date(new Date().getFullYear(),0,1,0,0,0,0),h.forEach(function(I){var T=I.fn,F=I.val;return d=T(d,F,u||i)||d}),d=b?d:void 0}}return!(d instanceof Date)||isNaN(d.getTime())?void o.errorHandler(new Error("Invalid date provided: "+a)):(c===!0&&d.setHours(0,0,0,0),d)}}};function Qt(t,n,o){return o===void 0&&(o=!0),o===!1?t.getTime()-n.getTime():new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0)}var w_=function(t,n,o){return t>Math.min(n,o)&&t<Math.max(n,o)},lc=function(t,n,o){return 3600*t+60*n+o},x_=function(t){var n=Math.floor(t/3600),o=(t-3600*n)/60;return[n,o,t-3600*n-60*o]},j_={DAY:864e5};function sc(t){var n=Math.min,o=t.defaultHour,r=t.defaultMinute,i=t.defaultSeconds;if(t.minDate!==void 0){var a=t.minDate.getHours(),l=t.minDate.getMinutes(),c=t.minDate.getSeconds();o<a&&(o=a),o===a&&r<l&&(r=l),o===a&&r===l&&i<c&&(i=t.minDate.getSeconds())}if(t.maxDate!==void 0){var u=t.maxDate.getHours(),d=t.maxDate.getMinutes();o=n(o,u),o===u&&(r=n(d,r)),o===u&&r===d&&(i=t.maxDate.getSeconds())}return{hours:o,minutes:r,seconds:i}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var r=function(c){c&&Object.keys(c).forEach(function(u){return t[u]=c[u]})},i=0,a=n,l;i<a.length;i++)l=a[i],r(l);return t});var Ct=function(){return Ct=Object.assign||function(t){for(var n=1,o=arguments.length,r;n<o;n++)for(var i in r=arguments[n],r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},Ct.apply(this,arguments)},wv=function(){for(var t=0,n=0,o=arguments.length;n<o;n++)t+=arguments[n].length;for(var r=Array(t),i=0,n=0;n<o;n++)for(var a=arguments[n],l=0,c=a.length;l<c;l++,i++)r[i]=a[l];return r},E_=300;function k_(t,n){function o(){s.utils={getDaysInMonth:function(x,O){return x===void 0&&(x=s.currentMonth),O===void 0&&(O=s.currentYear),x===1&&(O%4==0&&O%100!=0||O%400==0)?29:s.l10n.daysInMonth[x]}}}function r(){s.element=s.input=t,s.isOpen=!1,Un(),or(),Le(),$e(),o(),s.isMobile||R(),E(),(s.selectedDates.length||s.config.noCalendar)&&(s.config.enableTime&&g(s.config.noCalendar?s.latestSelectedDateObj:void 0),mn(!1)),l();var x=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!s.isMobile&&x&&ir(),Ae("onReady")}function i(){var x;return((x=s.calendarContainer)===null||x===void 0?void 0:x.getRootNode()).activeElement||document.activeElement}function a(x){return x.bind(s)}function l(){var x=s.config;x.weekNumbers===!1&&x.showMonths===1||x.noCalendar!==!0&&window.requestAnimationFrame(function(){if(s.calendarContainer!==void 0&&(s.calendarContainer.style.visibility="hidden",s.calendarContainer.style.display="block"),s.daysContainer!==void 0){var O=(s.days.offsetWidth+1)*x.showMonths;s.daysContainer.style.width=O+"px",s.calendarContainer.style.width=O+(s.weekWrapper===void 0?0:s.weekWrapper.offsetWidth)+"px",s.calendarContainer.style.removeProperty("visibility"),s.calendarContainer.style.removeProperty("display")}})}function c(x){if(s.selectedDates.length===0){var O=s.config.minDate===void 0||0<=Qt(new Date,s.config.minDate)?new Date:new Date(s.config.minDate.getTime()),P=sc(s.config);O.setHours(P.hours,P.minutes,P.seconds,O.getMilliseconds()),s.selectedDates=[O],s.latestSelectedDateObj=O}x!==void 0&&x.type!=="blur"&&ci(x);var L=s._input.value;f(),mn(),s._input.value!==L&&s._debouncedChange()}function u(x,O){return x%12+12*an(O===s.l10n.amPM[1])}function d(x){switch(x%24){case 0:case 12:return 12;default:return x%12}}function f(){if(s.hourElement!==void 0&&s.minuteElement!==void 0){var x=(parseInt(s.hourElement.value.slice(-2),10)||0)%24,O=(parseInt(s.minuteElement.value,10)||0)%60,P=s.secondElement===void 0?0:(parseInt(s.secondElement.value,10)||0)%60;s.amPM!==void 0&&(x=u(x,s.amPM.textContent));var L=s.config.minTime!==void 0||s.config.minDate&&s.minDateHasTime&&s.latestSelectedDateObj&&Qt(s.latestSelectedDateObj,s.config.minDate,!0)===0,Y=s.config.maxTime!==void 0||s.config.maxDate&&s.maxDateHasTime&&s.latestSelectedDateObj&&Qt(s.latestSelectedDateObj,s.config.maxDate,!0)===0;if(s.config.maxTime!==void 0&&s.config.minTime!==void 0&&s.config.minTime>s.config.maxTime){var Z=lc(s.config.minTime.getHours(),s.config.minTime.getMinutes(),s.config.minTime.getSeconds()),ue=lc(s.config.maxTime.getHours(),s.config.maxTime.getMinutes(),s.config.maxTime.getSeconds()),te=lc(x,O,P);if(te>ue&&te<Z){var fe=x_(Z);x=fe[0],O=fe[1],P=fe[2]}}else{if(Y){var ne=s.config.maxTime===void 0?s.config.maxDate:s.config.maxTime;x=_r(x,ne.getHours()),x===ne.getHours()&&(O=_r(O,ne.getMinutes())),O===ne.getMinutes()&&(P=_r(P,ne.getSeconds()))}if(L){var ae=s.config.minTime===void 0?s.config.minDate:s.config.minTime;x=Rr(x,ae.getHours()),x===ae.getHours()&&O<ae.getMinutes()&&(O=ae.getMinutes()),O===ae.getMinutes()&&(P=Rr(P,ae.getSeconds()))}}b(x,O,P)}}function g(x){var O=x||s.latestSelectedDateObj;O&&O instanceof Date&&b(O.getHours(),O.getMinutes(),O.getSeconds())}function b(x,O,P){s.latestSelectedDateObj!==void 0&&s.latestSelectedDateObj.setHours(x%24,O,P||0,0),s.hourElement&&s.minuteElement&&!s.isMobile&&(s.hourElement.value=At(s.config.time_24hr?x:(12+x)%12+12*an(x%12==0)),s.minuteElement.value=At(O),s.amPM!==void 0&&(s.amPM.textContent=s.l10n.amPM[an(12<=x)]),s.secondElement!==void 0&&(s.secondElement.value=At(P)))}function h(x){var O=Kt(x),P=parseInt(O.value)+(x.delta||0);(1<P/1e3||x.key==="Enter"&&!/[^\d]/.test(P.toString()))&&Ce(P)}function m(x,O,P,L){return O instanceof Array?O.forEach(function(Y){return m(x,Y,P,L)}):x instanceof Array?x.forEach(function(Y){return m(Y,O,P,L)}):(x.addEventListener(O,P,L),void s._handlers.push({remove:function(){return x.removeEventListener(O,P,L)}}))}function v(){Ae("onChange")}function E(){if(s.config.wrap&&["open","close","toggle","clear"].forEach(function(P){Array.prototype.forEach.call(s.element.querySelectorAll("[data-"+P+"]"),function(L){return m(L,"click",s[P])})}),s.isMobile)return void Pt();var x=yv(at,50);if(s._debouncedChange=yv(v,E_),s.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&m(s.daysContainer,"mouseover",function(P){s.config.mode==="range"&&Be(Kt(P))}),m(s._input,"keydown",ve),s.calendarContainer!==void 0&&m(s.calendarContainer,"keydown",ve),s.config.inline||s.config.static||m(window,"resize",x),window.ontouchstart===void 0?m(window.document,"mousedown",be):m(window.document,"touchstart",be),m(window.document,"focus",be,{capture:!0}),s.config.clickOpens===!0&&(m(s._input,"focus",s.open),m(s._input,"click",s.open)),s.daysContainer!==void 0&&(m(s.monthNav,"click",mo),m(s.monthNav,["keyup","increment"],h),m(s.daysContainer,"click",go)),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0){var O=function(P){return Kt(P).select()};m(s.timeContainer,["increment"],c),m(s.timeContainer,"blur",c,{capture:!0}),m(s.timeContainer,"click",k),m([s.hourElement,s.minuteElement],["focus","click"],O),s.secondElement!==void 0&&m(s.secondElement,"focus",function(){return s.secondElement&&s.secondElement.select()}),s.amPM!==void 0&&m(s.amPM,"click",function(P){c(P)})}s.config.allowInput&&m(s._input,"blur",me)}function y(x,O){var P=x===void 0?s.latestSelectedDateObj||(s.config.minDate&&s.config.minDate>s.now?s.config.minDate:s.config.maxDate&&s.config.maxDate<s.now?s.config.maxDate:s.now):s.parseDate(x),L=s.currentYear,Y=s.currentMonth;try{P!==void 0&&(s.currentYear=P.getFullYear(),s.currentMonth=P.getMonth())}catch(Z){Z.message="Invalid date supplied: "+P,s.config.errorHandler(Z)}O&&s.currentYear!==L&&(Ae("onYearChange"),H()),O&&(s.currentYear!==L||s.currentMonth!==Y)&&Ae("onMonthChange"),s.redraw()}function k(x){var O=Kt(x);~O.className.indexOf("arrow")&&C(x,O.classList.contains("arrowUp")?1:-1)}function C(x,O,P){var L=x&&Kt(x),Y=P||L&&L.parentNode&&L.parentNode.firstChild,Z=gn("increment");Z.delta=O,Y&&Y.dispatchEvent(Z)}function R(){var x=window.document.createDocumentFragment();if(s.calendarContainer=Ve("div","flatpickr-calendar"),s.calendarContainer.tabIndex=-1,!s.config.noCalendar){if(x.appendChild(A()),s.innerContainer=Ve("div","flatpickr-innerContainer"),s.config.weekNumbers){var O=X(),P=O.weekWrapper,L=O.weekNumbers;s.innerContainer.appendChild(P),s.weekNumbers=L,s.weekWrapper=P}s.rContainer=Ve("div","flatpickr-rContainer"),s.rContainer.appendChild(V()),s.daysContainer||(s.daysContainer=Ve("div","flatpickr-days"),s.daysContainer.tabIndex=-1),W(),s.rContainer.appendChild(s.daysContainer),s.innerContainer.appendChild(s.rContainer),x.appendChild(s.innerContainer)}s.config.enableTime&&x.appendChild(z()),Dt(s.calendarContainer,"rangeMode",s.config.mode==="range"),Dt(s.calendarContainer,"animate",s.config.animate===!0),Dt(s.calendarContainer,"multiMonth",1<s.config.showMonths),s.calendarContainer.appendChild(x);var Y=s.config.appendTo!==void 0&&s.config.appendTo.nodeType!==void 0;if((s.config.inline||s.config.static)&&(s.calendarContainer.classList.add(s.config.inline?"inline":"static"),s.config.inline&&(!Y&&s.element.parentNode?s.element.parentNode.insertBefore(s.calendarContainer,s._input.nextSibling):s.config.appendTo!==void 0&&s.config.appendTo.appendChild(s.calendarContainer)),s.config.static)){var Z=Ve("div","flatpickr-wrapper");s.element.parentNode&&s.element.parentNode.insertBefore(Z,s.element),Z.appendChild(s.element),s.altInput&&Z.appendChild(s.altInput),Z.appendChild(s.calendarContainer)}s.config.static||s.config.inline||(s.config.appendTo===void 0?window.document.body:s.config.appendTo).appendChild(s.calendarContainer)}function I(x,O,P,L){var Y=_e(O,!0),Z=Ve("span",x,O.getDate().toString());return Z.dateObj=O,Z.$i=L,Z.setAttribute("aria-label",s.formatDate(O,s.config.ariaDateFormat)),x.indexOf("hidden")===-1&&Qt(O,s.now)===0&&(s.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),Y?(Z.tabIndex=-1,hn(O)&&(Z.classList.add("selected"),s.selectedDateElem=Z,s.config.mode==="range"&&(Dt(Z,"startRange",s.selectedDates[0]&&Qt(O,s.selectedDates[0],!0)===0),Dt(Z,"endRange",s.selectedDates[1]&&Qt(O,s.selectedDates[1],!0)===0),x==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),s.config.mode==="range"&&Fe(O)&&!hn(O)&&Z.classList.add("inRange"),s.weekNumbers&&s.config.showMonths===1&&x!=="prevMonthDay"&&L%7==6&&s.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+s.config.getWeek(O)+"</span>"),Ae("onDayCreate",Z),Z}function T(x){x.focus(),s.config.mode==="range"&&Be(x)}function F(x){for(var O=0<x?0:s.config.showMonths-1,P=0<x?s.config.showMonths:-1,L=O;L!=P;L+=x)for(var Y=s.daysContainer.children[L],Z=0<x?0:Y.children.length-1,ue=0<x?Y.children.length:-1,te=Z,fe;te!=ue;te+=x)if(fe=Y.children[te],fe.className.indexOf("hidden")===-1&&_e(fe.dateObj))return fe}function _(x,O){for(var P=x.className.indexOf("Month")===-1?x.dateObj.getMonth():s.currentMonth,L=0<O?s.config.showMonths:-1,Y=0<O?1:-1,Z=P-s.currentMonth;Z!=L;Z+=Y)for(var ue=s.daysContainer.children[Z],te=P-s.currentMonth==Z?x.$i+O:0>O?ue.children.length-1:0,fe=ue.children.length,ne=te,ae;0<=ne&&ne<fe&&ne!=(0<O?fe:-1);ne+=Y)if(ae=ue.children[ne],ae.className.indexOf("hidden")===-1&&_e(ae.dateObj)&&qt(x.$i-ne)>=qt(O))return T(ae);return s.changeMonth(Y),void J(F(Y),0)}function J(x,O){var P=i(),L=ie(P||document.body),Y=x===void 0?L?P:s.selectedDateElem!==void 0&&ie(s.selectedDateElem)?s.selectedDateElem:s.todayDateElem!==void 0&&ie(s.todayDateElem)?s.todayDateElem:F(0<O?1:-1):x;Y===void 0?s._input.focus():L?_(Y,O):T(Y)}function B(x,O){for(var P=(new Date(x,O,1).getDay()-s.l10n.firstDayOfWeek+7)%7,L=s.utils.getDaysInMonth((O-1+12)%12,x),Y=s.utils.getDaysInMonth(O,x),Z=window.document.createDocumentFragment(),ue=1<s.config.showMonths,te=ue?"prevMonthDay hidden":"prevMonthDay",fe=ue?"nextMonthDay hidden":"nextMonthDay",ne=L+1-P,ae=0;ne<=L;ne++,ae++)Z.appendChild(I("flatpickr-day "+te,new Date(x,O-1,ne),ne,ae));for(ne=1;ne<=Y;ne++,ae++)Z.appendChild(I("flatpickr-day",new Date(x,O,ne),ne,ae));for(var je=Y+1;je<=42-P&&(s.config.showMonths===1||ae%7!=0);je++,ae++)Z.appendChild(I("flatpickr-day "+fe,new Date(x,O+1,je%Y),je,ae));var ut=Ve("div","dayContainer");return ut.appendChild(Z),ut}function W(){if(s.daysContainer!==void 0){Ca(s.daysContainer),s.weekNumbers&&Ca(s.weekNumbers);for(var x=document.createDocumentFragment(),O=0,P;O<s.config.showMonths;O++)P=new Date(s.currentYear,s.currentMonth,1),P.setMonth(s.currentMonth+O),x.appendChild(B(P.getFullYear(),P.getMonth()));s.daysContainer.appendChild(x),s.days=s.daysContainer.firstChild,s.config.mode==="range"&&s.selectedDates.length===1&&Be()}}function H(){if(!(1<s.config.showMonths||s.config.monthSelectorType!=="dropdown")){var x=function(L){return!(s.config.minDate!==void 0&&s.currentYear===s.config.minDate.getFullYear()&&L<s.config.minDate.getMonth())&&!(s.config.maxDate!==void 0&&s.currentYear===s.config.maxDate.getFullYear()&&L>s.config.maxDate.getMonth())};s.monthsDropdownContainer.tabIndex=-1,s.monthsDropdownContainer.innerHTML="";for(var O=0;12>O;O++)if(x(O)){var P=Ve("option","flatpickr-monthDropdown-month");P.value=new Date(s.currentYear,O).getMonth().toString(),P.textContent=xl(O,s.config.shorthandCurrentMonth,s.l10n),P.tabIndex=-1,s.currentMonth===O&&(P.selected=!0),s.monthsDropdownContainer.appendChild(P)}}}function D(){var x=Ve("div","flatpickr-month"),O=window.document.createDocumentFragment(),P;1<s.config.showMonths||s.config.monthSelectorType==="static"?P=Ve("span","cur-month"):(s.monthsDropdownContainer=Ve("select","flatpickr-monthDropdown-months"),s.monthsDropdownContainer.setAttribute("aria-label",s.l10n.monthAriaLabel),m(s.monthsDropdownContainer,"change",function(ue){var te=Kt(ue),fe=parseInt(te.value,10);s.changeMonth(fe-s.currentMonth),Ae("onMonthChange")}),H(),P=s.monthsDropdownContainer);var L=$a("cur-year",{tabindex:"-1"}),Y=L.getElementsByTagName("input")[0];Y.setAttribute("aria-label",s.l10n.yearAriaLabel),s.config.minDate&&Y.setAttribute("min",s.config.minDate.getFullYear().toString()),s.config.maxDate&&(Y.setAttribute("max",s.config.maxDate.getFullYear().toString()),Y.disabled=!!s.config.minDate&&s.config.minDate.getFullYear()===s.config.maxDate.getFullYear());var Z=Ve("div","flatpickr-current-month");return Z.appendChild(P),Z.appendChild(L),O.appendChild(Z),x.appendChild(O),{container:x,yearElement:Y,monthElement:P}}function $(){Ca(s.monthNav),s.monthNav.appendChild(s.prevMonthNav),s.config.showMonths&&(s.yearElements=[],s.monthElements=[]);for(var x=s.config.showMonths,O;x--;)O=D(),s.yearElements.push(O.yearElement),s.monthElements.push(O.monthElement),s.monthNav.appendChild(O.container);s.monthNav.appendChild(s.nextMonthNav)}function A(){return s.monthNav=Ve("div","flatpickr-months"),s.yearElements=[],s.monthElements=[],s.prevMonthNav=Ve("span","flatpickr-prev-month"),s.prevMonthNav.innerHTML=s.config.prevArrow,s.nextMonthNav=Ve("span","flatpickr-next-month"),s.nextMonthNav.innerHTML=s.config.nextArrow,$(),Object.defineProperty(s,"_hidePrevMonthArrow",{get:function(){return s.__hidePrevMonthArrow},set:function(x){s.__hidePrevMonthArrow!==x&&(Dt(s.prevMonthNav,"flatpickr-disabled",x),s.__hidePrevMonthArrow=x)}}),Object.defineProperty(s,"_hideNextMonthArrow",{get:function(){return s.__hideNextMonthArrow},set:function(x){s.__hideNextMonthArrow!==x&&(Dt(s.nextMonthNav,"flatpickr-disabled",x),s.__hideNextMonthArrow=x)}}),s.currentYearElement=s.yearElements[0],It(),s.monthNav}function z(){s.calendarContainer.classList.add("hasTime"),s.config.noCalendar&&s.calendarContainer.classList.add("noCalendar");var x=sc(s.config);s.timeContainer=Ve("div","flatpickr-time"),s.timeContainer.tabIndex=-1;var O=Ve("span","flatpickr-time-separator",":"),P=$a("flatpickr-hour",{"aria-label":s.l10n.hourAriaLabel});s.hourElement=P.getElementsByTagName("input")[0];var L=$a("flatpickr-minute",{"aria-label":s.l10n.minuteAriaLabel});if(s.minuteElement=L.getElementsByTagName("input")[0],s.hourElement.tabIndex=s.minuteElement.tabIndex=-1,s.hourElement.value=At(s.latestSelectedDateObj?s.latestSelectedDateObj.getHours():s.config.time_24hr?x.hours:d(x.hours)),s.minuteElement.value=At(s.latestSelectedDateObj?s.latestSelectedDateObj.getMinutes():x.minutes),s.hourElement.setAttribute("step",s.config.hourIncrement.toString()),s.minuteElement.setAttribute("step",s.config.minuteIncrement.toString()),s.hourElement.setAttribute("min",s.config.time_24hr?"0":"1"),s.hourElement.setAttribute("max",s.config.time_24hr?"23":"12"),s.hourElement.setAttribute("maxlength","2"),s.minuteElement.setAttribute("min","0"),s.minuteElement.setAttribute("max","59"),s.minuteElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(P),s.timeContainer.appendChild(O),s.timeContainer.appendChild(L),s.config.time_24hr&&s.timeContainer.classList.add("time24hr"),s.config.enableSeconds){s.timeContainer.classList.add("hasSeconds");var Y=$a("flatpickr-second");s.secondElement=Y.getElementsByTagName("input")[0],s.secondElement.value=At(s.latestSelectedDateObj?s.latestSelectedDateObj.getSeconds():x.seconds),s.secondElement.setAttribute("step",s.minuteElement.getAttribute("step")),s.secondElement.setAttribute("min","0"),s.secondElement.setAttribute("max","59"),s.secondElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(Ve("span","flatpickr-time-separator",":")),s.timeContainer.appendChild(Y)}return s.config.time_24hr||(s.amPM=Ve("span","flatpickr-am-pm",s.l10n.amPM[an(11<(s.latestSelectedDateObj?s.hourElement.value:s.config.defaultHour))]),s.amPM.title=s.l10n.toggleTitle,s.amPM.tabIndex=-1,s.timeContainer.appendChild(s.amPM)),s.timeContainer}function V(){s.weekdayContainer?Ca(s.weekdayContainer):s.weekdayContainer=Ve("div","flatpickr-weekdays");for(var x=s.config.showMonths,O;x--;)O=Ve("div","flatpickr-weekdaycontainer"),s.weekdayContainer.appendChild(O);return Q(),s.weekdayContainer}function Q(){if(s.weekdayContainer){var x=s.l10n.firstDayOfWeek,O=wv(s.l10n.weekdays.shorthand);0<x&&x<O.length&&(O=wv(O.splice(x,O.length),O.splice(0,x)));for(var P=s.config.showMonths;P--;)s.weekdayContainer.children[P].innerHTML=`
      <span class='flatpickr-weekday'>
        `+O.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function X(){s.calendarContainer.classList.add("hasWeeks");var x=Ve("div","flatpickr-weekwrapper");x.appendChild(Ve("span","flatpickr-weekday",s.l10n.weekAbbreviation));var O=Ve("div","flatpickr-weeks");return x.appendChild(O),{weekWrapper:x,weekNumbers:O}}function M(x,O){O===void 0&&(O=!0);var P=O?x:x-s.currentMonth;0>P&&s._hidePrevMonthArrow===!0||0<P&&s._hideNextMonthArrow===!0||(s.currentMonth+=P,(0>s.currentMonth||11<s.currentMonth)&&(s.currentYear+=11<s.currentMonth?1:-1,s.currentMonth=(s.currentMonth+12)%12,Ae("onYearChange"),H()),W(),Ae("onMonthChange"),It())}function oe(x,O){if(x===void 0&&(x=!0),O===void 0&&(O=!0),s.input.value="",s.altInput!==void 0&&(s.altInput.value=""),s.mobileInput!==void 0&&(s.mobileInput.value=""),s.selectedDates=[],s.latestSelectedDateObj=void 0,O===!0&&(s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth()),s.config.enableTime===!0){var P=sc(s.config),L=P.hours,Y=P.minutes,Z=P.seconds;b(L,Y,Z)}s.redraw(),x&&Ae("onChange")}function se(){s.isOpen=!1,s.isMobile||(s.calendarContainer!==void 0&&s.calendarContainer.classList.remove("open"),s._input!==void 0&&s._input.classList.remove("active")),Ae("onClose")}function N(){s.config!==void 0&&Ae("onDestroy");for(var x=s._handlers.length;x--;)s._handlers[x].remove();if(s._handlers=[],s.mobileInput)s.mobileInput.parentNode&&s.mobileInput.parentNode.removeChild(s.mobileInput),s.mobileInput=void 0;else if(s.calendarContainer&&s.calendarContainer.parentNode)if(s.config.static&&s.calendarContainer.parentNode){var O=s.calendarContainer.parentNode;if(O.lastChild&&O.removeChild(O.lastChild),O.parentNode){for(;O.firstChild;)O.parentNode.insertBefore(O.firstChild,O);O.parentNode.removeChild(O)}}else s.calendarContainer.parentNode.removeChild(s.calendarContainer);s.altInput&&(s.input.type="text",s.altInput.parentNode&&s.altInput.parentNode.removeChild(s.altInput),delete s.altInput),s.input&&(s.input.type=s.input._type,s.input.classList.remove("flatpickr-input"),s.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(P){try{delete s[P]}catch{}})}function re(x){return s.calendarContainer.contains(x)}function be(x){if(s.isOpen&&!s.config.inline){var O=Kt(x),P=re(O),L=O===s.input||O===s.altInput||s.element.contains(O)||x.path&&x.path.indexOf&&(~x.path.indexOf(s.input)||~x.path.indexOf(s.altInput)),Y=!L&&!P&&!re(x.relatedTarget),Z=!s.config.ignoredFocusElements.some(function(ue){return ue.contains(O)});Y&&Z&&(s.config.allowInput&&s.setDate(s._input.value,!1,s.config.altInput?s.config.altFormat:s.config.dateFormat),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0&&s.input.value!==""&&s.input.value!==void 0&&c(),s.close(),s.config&&s.config.mode==="range"&&s.selectedDates.length===1&&s.clear(!1))}}function Ce(x){if(!(!x||s.config.minDate&&x<s.config.minDate.getFullYear()||s.config.maxDate&&x>s.config.maxDate.getFullYear())){var O=x,P=s.currentYear!==O;s.currentYear=O||s.currentYear,s.config.maxDate&&s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth=_r(s.config.maxDate.getMonth(),s.currentMonth):s.config.minDate&&s.currentYear===s.config.minDate.getFullYear()&&(s.currentMonth=Rr(s.config.minDate.getMonth(),s.currentMonth)),P&&(s.redraw(),Ae("onYearChange"),H())}}function _e(x,O){var P;O===void 0&&(O=!0);var L=s.parseDate(x,void 0,O);if(s.config.minDate&&L&&0>Qt(L,s.config.minDate,O===void 0?!s.minDateHasTime:O)||s.config.maxDate&&L&&0<Qt(L,s.config.maxDate,O===void 0?!s.maxDateHasTime:O))return!1;if(!s.config.enable&&s.config.disable.length===0)return!0;if(L===void 0)return!1;for(var Y=!!s.config.enable,Z=(P=s.config.enable)!==null&&P!==void 0?P:s.config.disable,ue=0,te=void 0;ue<Z.length;ue++){if(te=Z[ue],typeof te=="function"&&te(L)||te instanceof Date&&L!==void 0&&te.getTime()===L.getTime())return Y;if(typeof te=="string"){var fe=s.parseDate(te,void 0,!0);return fe&&fe.getTime()===L.getTime()?Y:!Y}if(typeof te=="object"&&L!==void 0&&te.from&&te.to&&L.getTime()>=te.from.getTime()&&L.getTime()<=te.to.getTime())return Y}return!Y}function ie(x){return s.daysContainer!==void 0&&x.className.indexOf("hidden")===-1&&x.className.indexOf("flatpickr-disabled")===-1&&s.daysContainer.contains(x)}function me(x){var O=x.target===s._input,P=s._input.value.trimEnd()!==kt();O&&P&&!(x.relatedTarget&&re(x.relatedTarget))&&s.setDate(s._input.value,!0,x.target===s.altInput?s.config.altFormat:s.config.dateFormat)}function ve(x){var O=Kt(x),P=s.config.wrap?t.contains(O):O===s._input,L=s.config.allowInput,Y=s.isOpen&&(!L||!P),Z=s.config.inline&&P&&!L;if(x.keyCode===13&&P){if(L)return s.setDate(s._input.value,!0,O===s.altInput?s.config.altFormat:s.config.dateFormat),s.close(),O.blur();s.open()}else if(re(O)||Y||Z){var ue=!!s.timeContainer&&s.timeContainer.contains(O);switch(x.keyCode){case 13:ue?(x.preventDefault(),c(),Nr()):go(x);break;case 27:x.preventDefault(),Nr();break;case 8:case 46:P&&!s.config.allowInput&&(x.preventDefault(),s.clear());break;case 37:case 39:if(!ue&&!P){x.preventDefault();var te=i();if(s.daysContainer!==void 0&&(L===!1||te&&ie(te))){var fe=x.keyCode===39?1:-1;x.ctrlKey?(x.stopPropagation(),M(fe),J(F(1),0)):J(void 0,fe)}}else s.hourElement&&s.hourElement.focus();break;case 38:case 40:x.preventDefault();var ne=x.keyCode===40?1:-1;s.daysContainer&&O.$i!==void 0||O===s.input||O===s.altInput?x.ctrlKey?(x.stopPropagation(),Ce(s.currentYear-ne),J(F(1),0)):!ue&&J(void 0,7*ne):O===s.currentYearElement?Ce(s.currentYear-ne):s.config.enableTime&&(!ue&&s.hourElement&&s.hourElement.focus(),c(x),s._debouncedChange());break;case 9:if(ue){var ae=[s.hourElement,s.minuteElement,s.secondElement,s.amPM].concat(s.pluginElements).filter(function(Ze){return Ze}),je=ae.indexOf(O);if(je!==-1){var ut=ae[je+(x.shiftKey?-1:1)];x.preventDefault(),(ut||s._input).focus()}}else!s.config.noCalendar&&s.daysContainer&&s.daysContainer.contains(O)&&x.shiftKey&&(x.preventDefault(),s._input.focus())}}if(s.amPM!==void 0&&O===s.amPM)switch(x.key){case s.l10n.amPM[0].charAt(0):case s.l10n.amPM[0].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[0],f(),mn();break;case s.l10n.amPM[1].charAt(0):case s.l10n.amPM[1].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[1],f(),mn()}(P||re(O))&&Ae("onKeyDown",x)}function Be(x,O){if(O===void 0&&(O="flatpickr-day"),!(s.selectedDates.length!==1||x&&(!x.classList.contains(O)||x.classList.contains("flatpickr-disabled")))){for(var P=x?x.dateObj.getTime():s.days.firstElementChild.dateObj.getTime(),L=s.parseDate(s.selectedDates[0],void 0,!0).getTime(),Y=_r(P,s.selectedDates[0].getTime()),Z=Rr(P,s.selectedDates[0].getTime()),ue=!1,te=0,fe=0,ne=Y;ne<Z;ne+=j_.DAY)_e(new Date(ne),!0)||(ue=ue||ne>Y&&ne<Z,ne<L&&(!te||ne>te)?te=ne:ne>L&&(!fe||ne<fe)&&(fe=ne));var ae=Array.from(s.rContainer.querySelectorAll("*:nth-child(-n+"+s.config.showMonths+") > ."+O));ae.forEach(function(je){var ut=je.dateObj,Ze=ut.getTime(),bn=0<te&&Ze<te||0<fe&&Ze>fe;return bn?(je.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach(function(Ut){je.classList.remove(Ut)})):void(ue&&!bn||(["startRange","inRange","endRange","notAllowed"].forEach(function(Ut){je.classList.remove(Ut)}),x!==void 0&&(x.classList.add(P<=s.selectedDates[0].getTime()?"startRange":"endRange"),L<P&&Ze===L?je.classList.add("startRange"):L>P&&Ze===L&&je.classList.add("endRange"),Ze>=te&&(fe==0||Ze<=fe)&&w_(Ze,L,P)&&je.classList.add("inRange"))))})}}function at(){!s.isOpen||s.config.static||s.config.inline||ir()}function Xe(x,O){if(O===void 0&&(O=s._positionElement),s.isMobile===!0){if(x){x.preventDefault();var P=Kt(x);P&&P.blur()}return s.mobileInput!==void 0&&(s.mobileInput.focus(),s.mobileInput.click()),void Ae("onOpen")}if(!(s._input.disabled||s.config.inline)){var L=s.isOpen;s.isOpen=!0,L||(s.calendarContainer.classList.add("open"),s._input.classList.add("active"),Ae("onOpen"),ir(O)),s.config.enableTime!==!0||s.config.noCalendar!==!0||s.config.allowInput!==!1||x!==void 0&&s.timeContainer.contains(x.relatedTarget)||setTimeout(function(){return s.hourElement.select()},50)}}function Vt(x){return function(O){var P=s.config["_"+x+"Date"]=s.parseDate(O,s.config.dateFormat),L=s.config["_"+(x==="min"?"max":"min")+"Date"];P!==void 0&&(s[x==="min"?"minDateHasTime":"maxDateHasTime"]=0<P.getHours()||0<P.getMinutes()||0<P.getSeconds()),s.selectedDates&&(s.selectedDates=s.selectedDates.filter(function(Y){return _e(Y)}),!s.selectedDates.length&&x==="min"&&g(P),mn()),s.daysContainer&&(Yn(),P===void 0?s.currentYearElement.removeAttribute(x):s.currentYearElement[x]=P.getFullYear().toString(),s.currentYearElement.disabled=!!L&&P!==void 0&&L.getFullYear()===P.getFullYear())}}function Un(){var x=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],O=Ct(Ct({},JSON.parse(JSON.stringify(t.dataset||{}))),n),P={};s.config.parseDate=O.parseDate,s.config.formatDate=O.formatDate,Object.defineProperty(s.config,"enable",{get:function(){return s.config._enable},set:function(ae){s.config._enable=ce(ae)}}),Object.defineProperty(s.config,"disable",{get:function(){return s.config._disable},set:function(ae){s.config._disable=ce(ae)}});var L=O.mode==="time";if(!O.dateFormat&&(O.enableTime||L)){var Y=wt.defaultConfig.dateFormat||To.dateFormat;P.dateFormat=O.noCalendar||L?"H:i"+(O.enableSeconds?":S":""):Y+" H:i"+(O.enableSeconds?":S":"")}if(O.altInput&&(O.enableTime||L)&&!O.altFormat){var Z=wt.defaultConfig.altFormat||To.altFormat;P.altFormat=O.noCalendar||L?"h:i"+(O.enableSeconds?":S K":" K"):Z+(" h:i"+(O.enableSeconds?":S":"")+" K")}Object.defineProperty(s.config,"minDate",{get:function(){return s.config._minDate},set:Vt("min")}),Object.defineProperty(s.config,"maxDate",{get:function(){return s.config._maxDate},set:Vt("max")});var ue=function(ae){return function(je){s.config[ae==="min"?"_minTime":"_maxTime"]=s.parseDate(je,"H:i:S")}};Object.defineProperty(s.config,"minTime",{get:function(){return s.config._minTime},set:ue("min")}),Object.defineProperty(s.config,"maxTime",{get:function(){return s.config._maxTime},set:ue("max")}),O.mode==="time"&&(s.config.noCalendar=!0,s.config.enableTime=!0),Object.assign(s.config,P,O);for(var te=0;te<x.length;te++)s.config[x[te]]=s.config[x[te]]===!0||s.config[x[te]]==="true";oc.filter(function(ae){return s.config[ae]!==void 0}).forEach(function(ae){s.config[ae]=ic(s.config[ae]||[]).map(a)}),s.isMobile=!s.config.disableMobile&&!s.config.inline&&s.config.mode==="single"&&!s.config.disable.length&&!s.config.enable&&!s.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var te=0,fe;te<s.config.plugins.length;te++)for(var ne in fe=s.config.plugins[te](s)||{},fe)-1<oc.indexOf(ne)?s.config[ne]=ic(fe[ne]).map(a).concat(s.config[ne]):typeof O[ne]>"u"&&(s.config[ne]=fe[ne]);O.altInputClass||(s.config.altInputClass=Tr().className+" "+s.config.altInputClass),Ae("onParseConfig")}function Tr(){return s.config.wrap?t.querySelector("[data-input]"):t}function or(){typeof s.config.locale!="object"&&typeof wt.l10ns[s.config.locale]>"u"&&s.config.errorHandler(new Error("flatpickr: invalid locale "+s.config.locale)),s.l10n=Ct(Ct({},wt.l10ns.default),typeof s.config.locale=="object"?s.config.locale:s.config.locale==="default"?void 0:wt.l10ns[s.config.locale]),Ur.D="("+s.l10n.weekdays.shorthand.join("|")+")",Ur.l="("+s.l10n.weekdays.longhand.join("|")+")",Ur.M="("+s.l10n.months.shorthand.join("|")+")",Ur.F="("+s.l10n.months.longhand.join("|")+")",Ur.K="("+s.l10n.amPM[0]+"|"+s.l10n.amPM[1]+"|"+s.l10n.amPM[0].toLowerCase()+"|"+s.l10n.amPM[1].toLowerCase()+")";var x=Ct(Ct({},n),JSON.parse(JSON.stringify(t.dataset||{})));x.time_24hr===void 0&&wt.defaultConfig.time_24hr===void 0&&(s.config.time_24hr=s.l10n.time_24hr),s.formatDate=E2(s),s.parseDate=Ud({config:s.config,l10n:s.l10n})}function ir(x){if(typeof s.config.position=="function")return void s.config.position(s,x);if(s.calendarContainer!==void 0){Ae("onPreCalendarPosition");var O=x||s._positionElement,P=Array.prototype.reduce.call(s.calendarContainer.children,function(ws,xs){return ws+xs.offsetHeight},0),L=s.calendarContainer.offsetWidth,Y=s.config.position.split(" "),Z=Y[0],ue=1<Y.length?Y[1]:null,te=O.getBoundingClientRect(),fe=window.innerHeight-te.bottom,ne=Z==="above"||Z!=="below"&&fe<P&&te.top>P,ae=window.pageYOffset+te.top+(ne?-P-2:O.offsetHeight+2);if(Dt(s.calendarContainer,"arrowTop",!ne),Dt(s.calendarContainer,"arrowBottom",ne),!s.config.inline){var je=window.pageXOffset+te.left,ut=!1,Ze=!1;ue==="center"?(je-=(L-te.width)/2,ut=!0):ue==="right"&&(je-=L-te.width,Ze=!0),Dt(s.calendarContainer,"arrowLeft",!ut&&!Ze),Dt(s.calendarContainer,"arrowCenter",ut),Dt(s.calendarContainer,"arrowRight",Ze);var bn=window.document.body.offsetWidth-(window.pageXOffset+te.right),Ut=je+L>window.document.body.offsetWidth,hs=bn+L>window.document.body.offsetWidth;if(Dt(s.calendarContainer,"rightMost",Ut),!s.config.static)if(s.calendarContainer.style.top=ae+"px",!Ut)s.calendarContainer.style.left=je+"px",s.calendarContainer.style.right="auto";else if(!hs)s.calendarContainer.style.left="auto",s.calendarContainer.style.right=bn+"px";else{var Lr=Dr();if(Lr===void 0)return;var ms=window.document.body.offsetWidth,bs=Rr(0,ms/2-L/2),vs=Lr.cssRules.length,ys="{left:"+te.left+"px;right:auto;}";Dt(s.calendarContainer,"rightMost",!1),Dt(s.calendarContainer,"centerMost",!0),Lr.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+ys,vs),s.calendarContainer.style.left=bs+"px",s.calendarContainer.style.right="auto"}}}}function Dr(){for(var x=null,O=0,P;O<document.styleSheets.length;O++)if(P=document.styleSheets[O],P.cssRules){try{P.cssRules}catch{continue}x=P;break}return x??Mr()}function Mr(){var x=document.createElement("style");return document.head.appendChild(x),x.sheet}function Yn(){s.config.noCalendar||s.isMobile||(H(),It(),W())}function Nr(){s._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(s.close,0):s.close()}function go(x){x.preventDefault(),x.stopPropagation();var O=function(ae){return ae.classList&&ae.classList.contains("flatpickr-day")&&!ae.classList.contains("flatpickr-disabled")&&!ae.classList.contains("notAllowed")},P=j2(Kt(x),O);if(P!==void 0){var L=P,Y=s.latestSelectedDateObj=new Date(L.dateObj.getTime()),Z=(Y.getMonth()<s.currentMonth||Y.getMonth()>s.currentMonth+s.config.showMonths-1)&&s.config.mode!=="range";if(s.selectedDateElem=L,s.config.mode==="single")s.selectedDates=[Y];else if(s.config.mode==="multiple"){var ue=hn(Y);ue?s.selectedDates.splice(parseInt(ue),1):s.selectedDates.push(Y)}else s.config.mode==="range"&&(s.selectedDates.length===2&&s.clear(!1,!1),s.latestSelectedDateObj=Y,s.selectedDates.push(Y),Qt(Y,s.selectedDates[0],!0)!==0&&s.selectedDates.sort(function(ae,je){return ae.getTime()-je.getTime()}));if(f(),Z){var te=s.currentYear!==Y.getFullYear();s.currentYear=Y.getFullYear(),s.currentMonth=Y.getMonth(),te&&(Ae("onYearChange"),H()),Ae("onMonthChange")}if(It(),W(),mn(),Z||s.config.mode==="range"||s.config.showMonths!==1?s.selectedDateElem!==void 0&&s.hourElement===void 0&&s.selectedDateElem&&s.selectedDateElem.focus():T(L),s.hourElement!==void 0&&s.hourElement!==void 0&&s.hourElement.focus(),s.config.closeOnSelect){var fe=s.config.mode==="single"&&!s.config.enableTime,ne=s.config.mode==="range"&&s.selectedDates.length===2&&!s.config.enableTime;(fe||ne)&&Nr()}v()}}function ho(x,O){if(x!==null&&typeof x=="object")for(var P in Object.assign(s.config,x),x)Kn[P]!==void 0&&Kn[P].forEach(function(L){return L()});else s.config[x]=O,Kn[x]===void 0?-1<oc.indexOf(x)&&(s.config[x]=ic(O)):Kn[x].forEach(function(L){return L()});s.redraw(),mn(!0)}function ar(x,O){var P=[];if(x instanceof Array)P=x.map(function(L){return s.parseDate(L,O)});else if(x instanceof Date||typeof x=="number")P=[s.parseDate(x,O)];else if(typeof x=="string")switch(s.config.mode){case"single":case"time":P=[s.parseDate(x,O)];break;case"multiple":P=x.split(s.config.conjunction).map(function(L){return s.parseDate(L,O)});break;case"range":P=x.split(s.l10n.rangeSeparator).map(function(L){return s.parseDate(L,O)})}else s.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(x)));s.selectedDates=s.config.allowInvalidPreload?P:P.filter(function(L){return L instanceof Date&&_e(L,!1)}),s.config.mode==="range"&&s.selectedDates.sort(function(L,Y){return L.getTime()-Y.getTime()})}function ee(x,O,P){return O===void 0&&(O=!1),P===void 0&&(P=s.config.dateFormat),x!==0&&!x||x instanceof Array&&x.length===0?s.clear(O):(ar(x,P),s.latestSelectedDateObj=s.selectedDates[s.selectedDates.length-1],s.redraw(),y(void 0,O),g(),s.selectedDates.length===0&&s.clear(!1),mn(O),void(O&&Ae("onChange")))}function ce(x){return x.slice().map(function(O){return typeof O=="string"||typeof O=="number"||O instanceof Date?s.parseDate(O,void 0,!0):O&&typeof O=="object"&&O.from&&O.to?{from:s.parseDate(O.from,void 0),to:s.parseDate(O.to,void 0)}:O}).filter(function(O){return O})}function $e(){s.selectedDates=[],s.now=s.parseDate(s.config.now)||new Date;var x=s.config.defaultDate||((s.input.nodeName==="INPUT"||s.input.nodeName==="TEXTAREA")&&s.input.placeholder&&s.input.value===s.input.placeholder?null:s.input.value);x&&ar(x,s.config.dateFormat),s._initialDate=0<s.selectedDates.length?s.selectedDates[0]:s.config.minDate&&s.config.minDate.getTime()>s.now.getTime()?s.config.minDate:s.config.maxDate&&s.config.maxDate.getTime()<s.now.getTime()?s.config.maxDate:s.now,s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth(),0<s.selectedDates.length&&(s.latestSelectedDateObj=s.selectedDates[0]),s.config.minTime!==void 0&&(s.config.minTime=s.parseDate(s.config.minTime,"H:i")),s.config.maxTime!==void 0&&(s.config.maxTime=s.parseDate(s.config.maxTime,"H:i")),s.minDateHasTime=!!s.config.minDate&&(0<s.config.minDate.getHours()||0<s.config.minDate.getMinutes()||0<s.config.minDate.getSeconds()),s.maxDateHasTime=!!s.config.maxDate&&(0<s.config.maxDate.getHours()||0<s.config.maxDate.getMinutes()||0<s.config.maxDate.getSeconds())}function Le(){return s.input=Tr(),s.input?(s.input._type=s.input.type,s.input.type="text",s.input.classList.add("flatpickr-input"),s._input=s.input,s.config.altInput&&(s.altInput=Ve(s.input.nodeName,s.config.altInputClass),s._input=s.altInput,s.altInput.placeholder=s.input.placeholder,s.altInput.disabled=s.input.disabled,s.altInput.required=s.input.required,s.altInput.tabIndex=s.input.tabIndex,s.altInput.type="text",s.input.setAttribute("type","hidden"),!s.config.static&&s.input.parentNode&&s.input.parentNode.insertBefore(s.altInput,s.input.nextSibling)),!s.config.allowInput&&s._input.setAttribute("readonly","readonly"),void He()):void s.config.errorHandler(new Error("Invalid input element specified"))}function He(){s._positionElement=s.config.positionElement||s._input}function Pt(){var x=s.config.enableTime?s.config.noCalendar?"time":"datetime-local":"date";s.mobileInput=Ve("input",s.input.className+" flatpickr-mobile"),s.mobileInput.tabIndex=1,s.mobileInput.type=x,s.mobileInput.disabled=s.input.disabled,s.mobileInput.required=s.input.required,s.mobileInput.placeholder=s.input.placeholder,s.mobileFormatStr=x=="datetime-local"?"Y-m-d\\TH:i:S":x==="date"?"Y-m-d":"H:i:S",0<s.selectedDates.length&&(s.mobileInput.defaultValue=s.mobileInput.value=s.formatDate(s.selectedDates[0],s.mobileFormatStr)),s.config.minDate&&(s.mobileInput.min=s.formatDate(s.config.minDate,"Y-m-d")),s.config.maxDate&&(s.mobileInput.max=s.formatDate(s.config.maxDate,"Y-m-d")),s.input.getAttribute("step")&&(s.mobileInput.step=s.input.getAttribute("step")+""),s.input.type="hidden",s.altInput!==void 0&&(s.altInput.type="hidden");try{s.input.parentNode&&s.input.parentNode.insertBefore(s.mobileInput,s.input.nextSibling)}catch{}m(s.mobileInput,"change",function(O){s.setDate(Kt(O).value,!1,s.mobileFormatStr),Ae("onChange"),Ae("onClose")})}function pn(x){return s.isOpen===!0?s.close():void s.open(x)}function Ae(x,O){if(s.config!==void 0){var P=s.config[x];if(P!==void 0&&0<P.length)for(var L=0;P[L]&&L<P.length;L++)P[L](s.selectedDates,s.input.value,s,O);x==="onChange"&&(s.input.dispatchEvent(gn("change")),s.input.dispatchEvent(gn("input")))}}function gn(x){var O=document.createEvent("Event");return O.initEvent(x,!0,!0),O}function hn(x){for(var O=0,P;O<s.selectedDates.length;O++)if(P=s.selectedDates[O],P instanceof Date&&Qt(P,x)===0)return""+O;return!1}function Fe(x){return!(s.config.mode!=="range"||2>s.selectedDates.length)&&0<=Qt(x,s.selectedDates[0])&&0>=Qt(x,s.selectedDates[1])}function It(){s.config.noCalendar||s.isMobile||!s.monthNav||(s.yearElements.forEach(function(x,O){var P=new Date(s.currentYear,s.currentMonth,1);P.setMonth(s.currentMonth+O),1<s.config.showMonths||s.config.monthSelectorType==="static"?s.monthElements[O].textContent=xl(P.getMonth(),s.config.shorthandCurrentMonth,s.l10n)+" ":s.monthsDropdownContainer.value=P.getMonth().toString(),x.value=P.getFullYear().toString()}),s._hidePrevMonthArrow=s.config.minDate!==void 0&&(s.currentYear===s.config.minDate.getFullYear()?s.currentMonth<=s.config.minDate.getMonth():s.currentYear<s.config.minDate.getFullYear()),s._hideNextMonthArrow=s.config.maxDate!==void 0&&(s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth+1>s.config.maxDate.getMonth():s.currentYear>s.config.maxDate.getFullYear()))}function kt(x){var O=x||(s.config.altInput?s.config.altFormat:s.config.dateFormat);return s.selectedDates.map(function(P){return s.formatDate(P,O)}).filter(function(P,L,Y){return s.config.mode!=="range"||s.config.enableTime||Y.indexOf(P)===L}).join(s.config.mode==="range"?s.l10n.rangeSeparator:s.config.conjunction)}function mn(x){x===void 0&&(x=!0),s.mobileInput!==void 0&&s.mobileFormatStr&&(s.mobileInput.value=s.latestSelectedDateObj===void 0?"":s.formatDate(s.latestSelectedDateObj,s.mobileFormatStr)),s.input.value=kt(s.config.dateFormat),s.altInput!==void 0&&(s.altInput.value=kt(s.config.altFormat)),x!==!1&&Ae("onValueUpdate")}function mo(x){var O=Kt(x),P=s.prevMonthNav.contains(O),L=s.nextMonthNav.contains(O);P||L?M(P?-1:1):0<=s.yearElements.indexOf(O)?O.select():O.classList.contains("arrowUp")?s.changeYear(s.currentYear+1):O.classList.contains("arrowDown")&&s.changeYear(s.currentYear-1)}function ci(x){x.preventDefault();var O=x.type==="keydown",P=Kt(x),L=P;s.amPM!==void 0&&P===s.amPM&&(s.amPM.textContent=s.l10n.amPM[an(s.amPM.textContent===s.l10n.amPM[0])]);var Y=parseFloat(L.getAttribute("min")),Z=parseFloat(L.getAttribute("max")),ue=parseFloat(L.getAttribute("step")),te=parseInt(L.value,10),fe=x.delta||(O?x.which===38?1:-1:0),ne=te+ue*fe;if(typeof L.value<"u"&&L.value.length===2){var ae=L===s.hourElement,je=L===s.minuteElement;ne<Y?(ne=Z+ne+an(!ae)+(an(ae)&&an(!s.amPM)),je&&C(void 0,-1,s.hourElement)):ne>Z&&(ne=L===s.hourElement?ne-Z-an(!s.amPM):Y,je&&C(void 0,1,s.hourElement)),s.amPM&&ae&&(ue===1?ne+te===23:qt(ne-te)>ue)&&(s.amPM.textContent=s.l10n.amPM[an(s.amPM.textContent===s.l10n.amPM[0])]),L.value=At(ne)}}var qt=Math.abs,Rr=Math.max,_r=Math.min,s={config:Ct(Ct({},To),wt.defaultConfig),l10n:zi};s.parseDate=Ud({config:s.config,l10n:s.l10n}),s._handlers=[],s.pluginElements=[],s.loadedPlugins=[],s._bind=m,s._setHoursFromDate=g,s._positionCalendar=ir,s.changeMonth=M,s.changeYear=Ce,s.clear=oe,s.close=se,s.onMouseOver=Be,s._createElement=Ve,s.createDay=I,s.destroy=N,s.isEnabled=_e,s.jumpToDate=y,s.updateValue=mn,s.open=Xe,s.redraw=Yn,s.set=ho,s.setDate=ee,s.toggle=pn;var Kn={locale:[or,Q],showMonths:[$,l,V],minDate:[y],maxDate:[y],positionElement:[He],clickOpens:[function(){s.config.clickOpens===!0?(m(s._input,"focus",s.open),m(s._input,"click",s.open)):(s._input.removeEventListener("focus",s.open),s._input.removeEventListener("click",s.open))}]};return r(),s}function Do(t,n){for(var o=Array.prototype.slice.call(t).filter(function(l){return l instanceof HTMLElement}),r=[],i=0,a;i<o.length;i++){a=o[i];try{if(a.getAttribute("data-fp-omit")!==null)continue;a._flatpickr!==void 0&&(a._flatpickr.destroy(),a._flatpickr=void 0),a._flatpickr=k_(a,n||{}),r.push(a._flatpickr)}catch(l){console.error(l)}}return r.length===1?r[0]:r}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return Do(this,t)},HTMLElement.prototype.flatpickr=function(t){return Do([this],t)});var wt=function(t,n){return typeof t=="string"?Do(window.document.querySelectorAll(t),n):t instanceof Node?Do([t],n):Do(t,n)};wt.defaultConfig={},wt.l10ns={en:Ct({},zi),default:Ct({},zi)},wt.localize=function(t){wt.l10ns.default=Ct(Ct({},wt.l10ns.default),t)},wt.setDefaults=function(t){wt.defaultConfig=Ct(Ct({},wt.defaultConfig),t)},wt.parseDate=Ud({}),wt.formatDate=E2({}),wt.compareDates=Qt,typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return Do(this,t)}),Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))},typeof window<"u"&&(window.flatpickr=wt);const hi=w.oneOfType([w.string,w.array,w.object,w.number]);w.bool,w.bool,w.string,w.string,w.string,w.string,w.number,w.number,w.array,w.bool,w.bool,w.bool,w.node,w.node,w.number,w.string,w.bool,w.string,w.oneOfType([w.string,w.object]),w.number,w.oneOf(["single","multiple","range"]),w.oneOf(["static","dropdown"]),w.string,w.bool,w.func,w.func,w.func,w.func,w.func,w.func,w.func,w.func,w.func,w.string,w.bool,w.bool,w.number,w.node,w.bool,w.bool,w.bool,w.oneOf(["full","auto"]),w.string,w.string,w.string,w.string,w.node,w.bool,w.bool,w.bool,w.bool,w.bool,w.func,w.func,w.string,w.oneOfType([w.string,w.number]),w.oneOfType([w.string,w.number]),w.bool,w.string,w.string,w.oneOfType([w.string,w.number]),w.string,w.string,w.bool,w.bool,w.bool,w.bool,w.bool,w.bool,w.string,w.string,w.func,w.func,w.func,w.oneOf(["text","email","password","tel","url","number"]),w.string,w.node,w.node,w.node,w.oneOf(["full","auto"]),w.string,w.string,w.arrayOf(w.object),w.string,w.func,w.string,w.string,w.string,w.func,w.func,w.func,w.bool,w.string,w.func,w.bool,w.string,w.string.isRequired,w.string,w.string.isRequired,w.string,w.string,w.func,w.node,w.object,w.string,w.func,w.string,w.string,w.func,w.func,w.func,w.string,w.bool,w.bool,w.string,w.any,w.string,w.string,w.node,w.node,w.string,w.string,w.string,w.node,w.bool,w.node,w.string,w.node,w.string,w.number,w.number,w.bool,w.string,w.node,w.node,w.string,w.oneOf(["default","primary","primary-danger","subdued"]),w.bool,w.string,w.string,w.string;w.node,w.oneOf(["small","normal"]),w.string,w.string,w.bool,w.oneOf(er),w.string,w.node,w.string,w.func,w.string,w.node,w.string;const O_=`
	jn-text-theme-high
	jn-flex
	jn-rounded
	jn-leading-5
	jn-overflow-hidden
	jn-items-center
`,S_=`
	jn-w-[4px]
	jn-self-stretch
	jn-border-l-4
	jn-mr-6
	jn-shrink-0
`,xv=`
	jn-border-theme-message-default
`,jv=`
	jn-bg-theme-message-default
`,C_=`
	jn-border-theme-message-error
`,$_=`
	jn-bg-theme-message-error
`,P_=`
	jn-border-theme-message-warning
`,I_=`
	jn-bg-theme-message-warning
`,T_=`
	jn-border-theme-message-danger
`,D_=`
	jn-bg-theme-message-danger
`,M_=`
	jn-border-theme-message-success
`,N_=`
	jn-bg-theme-message-success
`,R_=`
	jn-py-3
	jn-pr-4
	jn-ml-7
`,__=`
	jn-font-bold
`,L_=`
	jn-ml-auto
	jn-self-stretch
	jn-flex
	jn-flex-col
	jn-py-2.5
	jn-pr-2.5
`,F_=t=>t==="error"?$_:t==="warning"?I_:t==="success"?N_:t==="info"?jv:t==="danger"?D_:jv,A_=t=>t==="error"?C_:t==="warning"?P_:t==="success"?M_:t==="info"?xv:t==="danger"?T_:xv,z_=t=>t==="error"?"dangerous":t,k2=t=>{let{title:n=null,text:o=null,variant:r="info",dismissible:i=!1,autoDismiss:a=!1,autoDismissTimeout:l=1e4,onDismiss:c,className:u="",children:d,...f}=t;const[g,b]=p.useState(!0),h=S.useRef(null);S.useEffect(()=>()=>clearTimeout(h.current),[]),p.useEffect(()=>{a&&(clearTimeout(h.current),h.current=setTimeout(()=>m(),l))},[a,l]);const m=()=>{b(!1),c&&c()};return S.createElement(S.Fragment,null,g&&S.createElement("div",we({className:`juno-message juno-message-${r} ${O_} ${F_(r)} ${u}`},f),S.createElement("div",{className:`juno-message-border ${S_} ${A_(r)}`}),S.createElement(_i,{icon:z_(r),color:"jn-text-theme-"+r,className:"jn-shrink-0"}),S.createElement("div",{className:`juno-message-content ${R_}`},n?S.createElement("h1",{className:`${__}`},n):"",S.createElement("div",null,d||o)),i&&S.createElement("div",{className:L_},S.createElement(_i,{icon:"close",onClick:m,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100"}))))};k2.propTypes={title:w.string,text:w.string,variant:w.oneOf(["info","warning","danger","error","success"]),dismissible:w.bool,autoDismiss:w.bool,autoDismissTimeout:w.number,onDismiss:w.func,className:w.string,children:w.node},w.node,w.string,w.string,w.oneOf(er),w.oneOf(er),w.string,w.func,w.func;var O2=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],jl=O2.join(","),S2=typeof Element>"u",lo=S2?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,El=!S2&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t==null?void 0:t.ownerDocument},kl=function t(n,o){var r;o===void 0&&(o=!0);var i=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"inert"),a=i===""||i==="true"||o&&n&&t(n.parentNode);return a},H_=function(n){var o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"contenteditable"),r;return o===""||o==="true"},C2=function(n,o,r){if(kl(n))return[];var i=Array.prototype.slice.apply(n.querySelectorAll(jl));return o&&lo.call(n,jl)&&i.unshift(n),i=i.filter(r),i},$2=function t(n,o,r){for(var i=[],a=Array.from(n),l;a.length;)if(l=a.shift(),!kl(l,!1))if(l.tagName==="SLOT"){var c=l.assignedElements(),u=c.length?c:l.children,d=t(u,!0,r);r.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{var f=lo.call(l,jl);f&&r.filter(l)&&(o||!n.includes(l))&&i.push(l);var g=l.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(l),b=!kl(g,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(g&&b){var h=t(g===!0?l.children:g.children,!0,r);r.flatten?i.push.apply(i,h):i.push({scopeParent:l,candidates:h})}else a.unshift.apply(a,l.children)}return i},P2=function(n){return!isNaN(parseInt(n.getAttribute("tabindex"),10))},fr=function(n){if(!n)throw new Error("No node provided");return 0>n.tabIndex&&(/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||H_(n))&&!P2(n)?0:n.tabIndex},B_=function(n,o){var r=fr(n);return 0>r&&o&&!P2(n)?0:r},W_=function(n,o){return n.tabIndex===o.tabIndex?n.documentOrder-o.documentOrder:n.tabIndex-o.tabIndex},I2=function(n){return n.tagName==="INPUT"},V_=function(n){return I2(n)&&n.type==="hidden"},q_=function(n){var o=n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(r){return r.tagName==="SUMMARY"});return o},U_=function(n,o){for(var r=0;r<n.length;r++)if(n[r].checked&&n[r].form===o)return n[r]},Y_=function(n){if(!n.name)return!0;var o=n.form||El(n),r=function(c){return o.querySelectorAll('input[type="radio"][name="'+c+'"]')},i;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")i=r(window.CSS.escape(n.name));else try{i=r(n.name)}catch(l){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",l.message),!1}var a=U_(i,n.form);return!a||a===n},K_=function(n){return I2(n)&&n.type==="radio"},G_=function(n){return K_(n)&&!Y_(n)},Q_=function(n){var o=n&&El(n),r=(a=o)===null||a===void 0?void 0:a.host,i=!1,a;if(o&&o!==n){var l,c,u;for(i=!!((l=r)!==null&&l!==void 0&&(c=l.ownerDocument)!==null&&c!==void 0&&c.contains(r)||n!=null&&(u=n.ownerDocument)!==null&&u!==void 0&&u.contains(n));!i&&r;){var d,f,g;o=El(r),r=(d=o)===null||d===void 0?void 0:d.host,i=!!((f=r)!==null&&f!==void 0&&(g=f.ownerDocument)!==null&&g!==void 0&&g.contains(r))}}return i},Ev=function(n){var o=n.getBoundingClientRect(),r=o.width,i=o.height;return r===0&&i===0},J_=function(n,o){var r=o.displayCheck,i=o.getShadowRoot;if(getComputedStyle(n).visibility==="hidden")return!0;var a=lo.call(n,"details>summary:first-of-type"),l=a?n.parentElement:n;if(lo.call(l,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof i=="function"){for(var c=n;n;){var u=n.parentElement,d=El(n);if(u&&!u.shadowRoot&&i(u)===!0)return Ev(n);n=n.assignedSlot?n.assignedSlot:u||d===n.ownerDocument?u:d.host}n=c}if(Q_(n))return!n.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Ev(n);return!1},Z_=function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var o=n.parentElement;o;){if(o.tagName==="FIELDSET"&&o.disabled){for(var r=0,i;r<o.children.length;r++)if(i=o.children.item(r),i.tagName==="LEGEND")return!!lo.call(o,"fieldset[disabled] *")||!i.contains(n);return!0}o=o.parentElement}return!1},Ol=function(n,o){return!(o.disabled||kl(o)||V_(o)||J_(o,n)||q_(o)||Z_(o))},Yd=function(n,o){return!(G_(o)||0>fr(o)||!Ol(n,o))},X_=function(n){var o=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(o)||0<=o)},e9=function t(n){var o=[],r=[];return n.forEach(function(i,a){var l=!!i.scopeParent,c=l?i.scopeParent:i,u=B_(c,l),d=l?t(i.candidates):c;u===0?l?o.push.apply(o,d):o.push(c):r.push({documentOrder:a,tabIndex:u,item:i,isScope:l,content:d})}),r.sort(W_).reduce(function(i,a){return a.isScope?i.push.apply(i,a.content):i.push(a.content),i},[]).concat(o)},T2=function(n,o){o=o||{};var r;return r=o.getShadowRoot?$2([n],o.includeContainer,{filter:Yd.bind(null,o),flatten:!1,getShadowRoot:o.getShadowRoot,shadowRootFilter:X_}):C2(n,o.includeContainer,Yd.bind(null,o)),e9(r)},D2=function(n,o){o=o||{};var r;return r=o.getShadowRoot?$2([n],o.includeContainer,{filter:Ol.bind(null,o),flatten:!0,getShadowRoot:o.getShadowRoot}):C2(n,o.includeContainer,Ol.bind(null,o)),r},Br=function(n,o){if(o=o||{},!n)throw new Error("No node provided");return lo.call(n,jl)!==!1&&Yd(o,n)},t9=O2.concat("iframe").join(","),Wa=function(n,o){if(o=o||{},!n)throw new Error("No node provided");return lo.call(n,t9)!==!1&&Ol(o,n)},n9=Object.freeze({__proto__:null,focusable:D2,getTabIndex:fr,isFocusable:Wa,isTabbable:Br,tabbable:T2});function r9(t,n,o){return(n=i9(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function kv(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,r)}return o}function Ov(t){for(var n=1,o;n<arguments.length;n++)o=arguments[n]==null?{}:arguments[n],n%2?kv(Object(o),!0).forEach(function(r){r9(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):kv(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))});return t}function o9(t,n){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function i9(t){var n=o9(t,"string");return typeof n=="symbol"?n:n+""}var Sv={activateTrap:function(n,o){if(0<n.length){var r=n[n.length-1];r!==o&&r.pause()}var i=n.indexOf(o);i===-1||n.splice(i,1),n.push(o)},deactivateTrap:function(n,o){var r=n.indexOf(o);r!==-1&&n.splice(r,1),0<n.length&&n[n.length-1].unpause()}},a9=function(n){return n.tagName&&n.tagName.toLowerCase()==="input"&&typeof n.select=="function"},l9=function(n){return(n==null?void 0:n.key)==="Escape"||(n==null?void 0:n.key)==="Esc"||(n==null?void 0:n.keyCode)===27},Ci=function(n){return(n==null?void 0:n.key)==="Tab"||(n==null?void 0:n.keyCode)===9},s9=function(n){return Ci(n)&&!n.shiftKey},c9=function(n){return Ci(n)&&n.shiftKey},Cv=function(n){return setTimeout(n,0)},$v=function(n,o){var r=-1;return n.every(function(i,a){return!o(i)||(r=a,!1)}),r},mi=function(n){for(var o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return typeof n=="function"?n.apply(void 0,r):n},Pa=function(n){return n.target.shadowRoot&&typeof n.composedPath=="function"?n.composedPath()[0]:n.target},u9=[],d9=function(n,o){var r=(o==null?void 0:o.document)||document,i=(o==null?void 0:o.trapStack)||u9,a=Ov({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:s9,isKeyBackward:c9},o),l={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},c=function(D,$,A){return D&&D[$]!==void 0?D[$]:a[A||$]},u=function(D,$){var A=typeof($==null?void 0:$.composedPath)=="function"?$.composedPath():void 0;return l.containerGroups.findIndex(function(z){var V=z.container,Q=z.tabbableNodes;return V.contains(D)||(A==null?void 0:A.includes(V))||Q.find(function(X){return X===D})})},d=function(D){var $=a[D];if(typeof $=="function"){for(var A=arguments.length,z=Array(1<A?A-1:0),V=1;V<A;V++)z[V-1]=arguments[V];$=$.apply(void 0,z)}if($===!0&&($=void 0),!$){if($===void 0||$===!1)return $;throw new Error("`".concat(D,"` was specified but was not a node, or did not return a node"))}var Q=$;if(typeof $=="string"&&(Q=r.querySelector($),!Q))throw new Error("`".concat(D,"` as selector refers to no known node"));return Q},f=function(){var D=d("initialFocus");if(D===!1)return!1;if(D===void 0||!Wa(D,a.tabbableOptions))if(0<=u(r.activeElement))D=r.activeElement;else{var $=l.tabbableGroups[0],A=$&&$.firstTabbableNode;D=A||d("fallbackFocus")}if(!D)throw new Error("Your focus-trap needs to have at least one focusable element");return D},g=function(){if(l.containerGroups=l.containers.map(function(D){var $=T2(D,a.tabbableOptions),A=D2(D,a.tabbableOptions),z=0<$.length?$[0]:void 0,V=0<$.length?$[$.length-1]:void 0,Q=A.find(function(oe){return Br(oe)}),X=A.slice().reverse().find(function(oe){return Br(oe)}),M=!!$.find(function(oe){return 0<fr(oe)});return{container:D,tabbableNodes:$,focusableNodes:A,posTabIndexesFound:M,firstTabbableNode:z,lastTabbableNode:V,firstDomTabbableNode:Q,lastDomTabbableNode:X,nextTabbableNode:function(se){var N=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],re=$.indexOf(se);return 0>re?N?A.slice(A.indexOf(se)+1).find(function(be){return Br(be)}):A.slice(0,A.indexOf(se)).reverse().find(function(be){return Br(be)}):$[re+(N?1:-1)]}}}),l.tabbableGroups=l.containerGroups.filter(function(D){return 0<D.tabbableNodes.length}),0>=l.tabbableGroups.length&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(l.containerGroups.find(function(D){return D.posTabIndexesFound})&&1<l.containerGroups.length)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function(D){var $=D.activeElement;return $?$.shadowRoot&&$.shadowRoot.activeElement!==null?b($.shadowRoot):$:void 0},h=function(D){return D===!1||D===b(document)?void 0:D&&D.focus?(D.focus({preventScroll:!!a.preventScroll}),l.mostRecentlyFocusedNode=D,void(a9(D)&&D.select())):void h(f())},m=function(D){var $=d("setReturnFocus",D);return $||$!==!1&&D},v=function(D){var $=D.target,A=D.event,z=D.isBackward,V=z!==void 0&&z;$=$||Pa(A),g();var Q=null;if(0<l.tabbableGroups.length){var X=u($,A),M=0<=X?l.containerGroups[X]:void 0;if(0>X)Q=V?l.tabbableGroups[l.tabbableGroups.length-1].lastTabbableNode:l.tabbableGroups[0].firstTabbableNode;else if(V){var oe=$v(l.tabbableGroups,function(_e){var ie=_e.firstTabbableNode;return $===ie});if(0>oe&&(M.container===$||Wa($,a.tabbableOptions)&&!Br($,a.tabbableOptions)&&!M.nextTabbableNode($,!1))&&(oe=X),0<=oe){var se=oe===0?l.tabbableGroups.length-1:oe-1,N=l.tabbableGroups[se];Q=0<=fr($)?N.lastTabbableNode:N.lastDomTabbableNode}else Ci(A)||(Q=M.nextTabbableNode($,!1))}else{var re=$v(l.tabbableGroups,function(_e){var ie=_e.lastTabbableNode;return $===ie});if(0>re&&(M.container===$||Wa($,a.tabbableOptions)&&!Br($,a.tabbableOptions)&&!M.nextTabbableNode($))&&(re=X),0<=re){var be=re===l.tabbableGroups.length-1?0:re+1,Ce=l.tabbableGroups[be];Q=0<=fr($)?Ce.firstTabbableNode:Ce.firstDomTabbableNode}else Ci(A)||(Q=M.nextTabbableNode($))}}else Q=d("fallbackFocus");return Q},E=function(D){var $=Pa(D);return 0<=u($,D)?void 0:mi(a.clickOutsideDeactivates,D)?void W.deactivate({returnFocus:a.returnFocusOnDeactivate}):void(mi(a.allowOutsideClick,D)||D.preventDefault())},y=function(D){var $=Pa(D),A=0<=u($,D);if(A||$ instanceof Document)A&&(l.mostRecentlyFocusedNode=$);else{D.stopImmediatePropagation();var z=!0,V;if(!l.mostRecentlyFocusedNode)z=!1;else if(0<fr(l.mostRecentlyFocusedNode)){var Q=u(l.mostRecentlyFocusedNode),X=l.containerGroups[Q].tabbableNodes;if(0<X.length){var M=X.findIndex(function(oe){return oe===l.mostRecentlyFocusedNode});0<=M&&(a.isKeyForward(l.recentNavEvent)?M+1<X.length&&(V=X[M+1],z=!1):0<=M-1&&(V=X[M-1],z=!1))}}else l.containerGroups.some(function(oe){return oe.tabbableNodes.some(function(se){return 0<fr(se)})})||(z=!1);z&&(V=v({target:l.mostRecentlyFocusedNode,isBackward:a.isKeyBackward(l.recentNavEvent)})),h(V||l.mostRecentlyFocusedNode||f())}l.recentNavEvent=void 0},k=function(D){var $=1<arguments.length&&arguments[1]!==void 0&&arguments[1];l.recentNavEvent=D;var A=v({event:D,isBackward:$});A&&(Ci(D)&&D.preventDefault(),h(A))},C=function(D){(a.isKeyForward(D)||a.isKeyBackward(D))&&k(D,a.isKeyBackward(D))},R=function(D){l9(D)&&mi(a.escapeDeactivates,D)!==!1&&(D.preventDefault(),W.deactivate())},I=function(D){var $=Pa(D);0<=u($,D)||mi(a.clickOutsideDeactivates,D)||mi(a.allowOutsideClick,D)||(D.preventDefault(),D.stopImmediatePropagation())},T=function(){if(l.active)return Sv.activateTrap(i,W),l.delayInitialFocusTimer=a.delayInitialFocus?Cv(function(){h(f())}):h(f()),r.addEventListener("focusin",y,!0),r.addEventListener("mousedown",E,{capture:!0,passive:!1}),r.addEventListener("touchstart",E,{capture:!0,passive:!1}),r.addEventListener("click",I,{capture:!0,passive:!1}),r.addEventListener("keydown",C,{capture:!0,passive:!1}),r.addEventListener("keydown",R),W},F=function(){if(l.active)return r.removeEventListener("focusin",y,!0),r.removeEventListener("mousedown",E,!0),r.removeEventListener("touchstart",E,!0),r.removeEventListener("click",I,!0),r.removeEventListener("keydown",C,!0),r.removeEventListener("keydown",R),W},_=function(D){var $=D.some(function(A){var z=Array.from(A.removedNodes);return z.some(function(V){return V===l.mostRecentlyFocusedNode})});$&&h(f())},J=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(_):void 0,B=function(){J&&(J.disconnect(),l.active&&!l.paused&&l.containers.map(function(D){J.observe(D,{subtree:!0,childList:!0})}))},W;return W={get active(){return l.active},get paused(){return l.paused},activate:function(D){if(l.active)return this;var $=c(D,"onActivate"),A=c(D,"onPostActivate"),z=c(D,"checkCanFocusTrap");z||g(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=r.activeElement,$==null||$();var V=function(){z&&g(),T(),B(),A==null||A()};return z?(z(l.containers.concat()).then(V,V),this):(V(),this)},deactivate:function(D){if(!l.active)return this;var $=Ov({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},D);clearTimeout(l.delayInitialFocusTimer),l.delayInitialFocusTimer=void 0,F(),l.active=!1,l.paused=!1,B(),Sv.deactivateTrap(i,W);var A=c($,"onDeactivate"),z=c($,"onPostDeactivate"),V=c($,"checkCanReturnFocus"),Q=c($,"returnFocus","returnFocusOnDeactivate");A==null||A();var X=function(){Cv(function(){Q&&h(m(l.nodeFocusedBeforeActivation)),z==null||z()})};return Q&&V?(V(m(l.nodeFocusedBeforeActivation)).then(X,X),this):(X(),this)},pause:function(D){if(l.paused||!l.active)return this;var $=c(D,"onPause"),A=c(D,"onPostPause");return l.paused=!0,$==null||$(),F(),B(),A==null||A(),this},unpause:function(D){if(!l.paused||!l.active)return this;var $=c(D,"onUnpause"),A=c(D,"onPostUnpause");return l.paused=!1,$==null||$(),g(),T(),B(),A==null||A(),this},updateContainerElements:function(D){var $=[].concat(D).filter(Boolean);return l.containers=$.map(function(A){return typeof A=="string"?r.querySelector(A):A}),l.active&&g(),B(),this}},W.updateContainerElements(n),W},f9=Object.freeze({__proto__:null,createFocusTrap:d9}),p9=H0(f9),g9=H0(n9);function ni(t){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ni(t)}function h9(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function m9(t,n){for(var o=0,r;o<n.length;o++)r=n[o],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,N2(r.key),r)}function b9(t,n,o){return n&&m9(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function v9(t,n,o){return n=Sl(n),y9(t,M2()?Reflect.construct(n,o||[],Sl(t).constructor):n.apply(t,o))}function y9(t,n){if(n&&(ni(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return w9(t)}function w9(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M2(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(M2=function(){return!!t})()}function Sl(t){return Sl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sl(t)}function x9(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Kd(t,n)}function Kd(t,n){return Kd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},Kd(t,n)}function j9(t,n,o){return(n=N2(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function N2(t){var n=E9(t,"string");return ni(n)=="symbol"?n:n+""}function E9(t,n){if(ni(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,n);if(ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""}var Ia=S,Se=w,k9=p9,O9=k9.createFocusTrap,S9=g9,C9=S9.isFocusable,Gd=function(t){function n(o){var r;h9(this,n),r=v9(this,n,[o]),j9(r,"getNodeForOption",function(l){var c=(u=this.internalOptions[l])!==null&&u!==void 0?u:this.originalOptions[l],u;if(typeof c=="function"){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];c=c.apply(void 0,f)}if(c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw new Error("`".concat(l,"` was specified but was not a node, or did not return a node"))}var b=c;if(typeof c=="string"){var h;if(b=(h=this.getDocument())===null||h===void 0?void 0:h.querySelector(c),!b)throw new Error("`".concat(l,"` as selector refers to no known node"))}return b}),r.handleDeactivate=r.handleDeactivate.bind(r),r.handlePostDeactivate=r.handlePostDeactivate.bind(r),r.handleClickOutsideDeactivates=r.handleClickOutsideDeactivates.bind(r),r.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:r.handleDeactivate,onPostDeactivate:r.handlePostDeactivate,clickOutsideDeactivates:r.handleClickOutsideDeactivates},r.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=o.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a=="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){r.originalOptions[a]=i[a];continue}r.internalOptions[a]=i[a]}return r.outsideClick=null,r.focusTrapElements=o.containerElements||[],r.updatePreviousElement(),r}return x9(n,t),b9(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document>"u"?void 0:document)}},{key:"getReturnFocusNode",value:function(){var r=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return r||r!==!1&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var r=this.getDocument();r&&(this.previouslyFocusedElement=r.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(r){var i=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,r):this.originalOptions.clickOutsideDeactivates;return i&&(this.outsideClick={target:r.target,allowDeactivation:i}),i}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var r=this,i=function(){var l=r.getReturnFocusNode(),c=!!(r.originalOptions.returnFocusOnDeactivate&&l!==null&&l!==void 0&&l.focus&&(!r.outsideClick||r.outsideClick.allowDeactivation&&!C9(r.outsideClick.target,r.internalOptions.tabbableOptions))),u=r.internalOptions.preventScroll,d=u!==void 0&&u;c&&l.focus({preventScroll:d}),r.originalOptions.onPostDeactivate&&r.originalOptions.onPostDeactivate.call(null),r.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(i,i):i()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var r=this.focusTrapElements.some(Boolean);r&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(r){if(this.focusTrap){r.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var i=!r.active&&this.props.active,a=r.active&&!this.props.active,l=!r.paused&&this.props.paused,c=r.paused&&!this.props.paused;if(i&&(this.updatePreviousElement(),this.focusTrap.activate()),a)return void this.deactivateTrap();l&&this.focusTrap.pause(),c&&this.focusTrap.unpause()}else r.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var r=this,i=this.props.children?Ia.Children.only(this.props.children):void 0;if(i){if(i.type&&i.type===Ia.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var a=function(u){var d=r.props.containerElements;i&&(typeof i.ref=="function"?i.ref(u):i.ref&&(i.ref.current=u)),r.focusTrapElements=d||[u]},l=Ia.cloneElement(i,{ref:a});return l}return null}}])}(Ia.Component),bi=typeof Element>"u"?Function:Element;Gd.propTypes={active:Se.bool,paused:Se.bool,focusTrapOptions:Se.shape({document:Se.object,onActivate:Se.func,onPostActivate:Se.func,checkCanFocusTrap:Se.func,onPause:Se.func,onPostPause:Se.func,onUnpause:Se.func,onPostUnpause:Se.func,onDeactivate:Se.func,onPostDeactivate:Se.func,checkCanReturnFocus:Se.func,initialFocus:Se.oneOfType([Se.instanceOf(bi),Se.string,Se.bool,Se.func]),fallbackFocus:Se.oneOfType([Se.instanceOf(bi),Se.string,Se.func]),escapeDeactivates:Se.oneOfType([Se.bool,Se.func]),clickOutsideDeactivates:Se.oneOfType([Se.bool,Se.func]),returnFocusOnDeactivate:Se.bool,setReturnFocus:Se.oneOfType([Se.instanceOf(bi),Se.string,Se.bool,Se.func]),allowOutsideClick:Se.oneOfType([Se.bool,Se.func]),preventScroll:Se.bool,tabbableOptions:Se.shape({displayCheck:Se.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:Se.oneOfType([Se.bool,Se.func])}),trapStack:Se.array,isKeyForward:Se.func,isKeyBackward:Se.func}),containerElements:Se.arrayOf(Se.instanceOf(bi)),children:Se.oneOfType([Se.element,Se.instanceOf(bi)])},Gd.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:O9};var $9=Gd;z0($9),w.string,w.string,w.string,w.oneOf(["small","large"]),w.string,w.string,w.oneOf(er),w.oneOf(er),w.bool,w.node,w.element,w.bool,w.bool,w.string,w.func,w.func,w.bool,w.bool,w.oneOfType([w.element,w.string]),w.string,w.bool,w.string,w.node,w.node,w.oneOf(["default","large"]),w.bool,w.bool,w.func,w.string,w.node,w.string,w.any,w.element,w.string,w.any;var P9=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(P9||{}),I9=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(I9||{}),T9=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(T9||{}),D9=(t=>(t[t.OpenListbox=0]="OpenListbox",t[t.CloseListbox=1]="CloseListbox",t[t.GoToOption=2]="GoToOption",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterOption=5]="RegisterOption",t[t.UnregisterOption=6]="UnregisterOption",t[t.RegisterLabel=7]="RegisterLabel",t))(D9||{});function cc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,o=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],r=Xl(n(t.options.slice()),a=>a.dataRef.current.domRef.current),i=o?r.indexOf(o):null;return i===-1&&(i=null),{options:r,activeOptionIndex:i}}let M9={1(t){return t.dataRef.current.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},0(t){if(t.dataRef.current.disabled||t.listboxState===0)return t;let n=t.activeOptionIndex,{isSelected:o}=t.dataRef.current,r=t.options.findIndex(i=>o(i.dataRef.current.value));return r!==-1&&(n=r),{...t,listboxState:0,activeOptionIndex:n}},2(t,n){var o;if(t.dataRef.current.disabled||t.listboxState===1)return t;let r=cc(t),i=hl(n,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...r,searchQuery:"",activeOptionIndex:i,activationTrigger:(o=n.trigger)==null?1:o}},3:(t,n)=>{if(t.dataRef.current.disabled||t.listboxState===1)return t;let o=t.searchQuery===""?1:0,r=t.searchQuery+n.value.toLowerCase(),i=(t.activeOptionIndex===null?t.options:t.options.slice(t.activeOptionIndex+o).concat(t.options.slice(0,t.activeOptionIndex+o))).find(l=>{var c;return!l.dataRef.current.disabled&&((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(r))}),a=i?t.options.indexOf(i):-1;return a===-1||a===t.activeOptionIndex?{...t,searchQuery:r}:{...t,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(t){return t.dataRef.current.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},5:(t,n)=>{let o={id:n.id,dataRef:n.dataRef},r=cc(t,i=>[...i,o]);return t.activeOptionIndex===null&&t.dataRef.current.isSelected(n.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(o)),{...t,...r}},6:(t,n)=>{let o=cc(t,r=>{let i=r.findIndex(a=>a.id===n.id);return i!==-1&&r.splice(i,1),r});return{...t,...o,activationTrigger:1}},7:(t,n)=>({...t,labelId:n.id})},yp=p.createContext(null);yp.displayName="ListboxActionsContext";function la(t){let n=p.useContext(yp);if(n===null){let o=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,la),o}return n}let wp=p.createContext(null);wp.displayName="ListboxDataContext";function sa(t){let n=p.useContext(wp);if(n===null){let o=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,sa),o}return n}function N9(t,n){return it(n.type,M9,t,n)}let R9=p.Fragment;function _9(t,n){let{value:o,defaultValue:r,form:i,name:a,onChange:l,by:c=(N,re)=>N===re,disabled:u=!1,horizontal:d=!1,multiple:f=!1,...g}=t;const b=d?"horizontal":"vertical";let h=Et(n),[m=f?[]:void 0,v]=p2(o,l,r),[E,y]=p.useReducer(N9,{dataRef:p.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),k=p.useRef({static:!1,hold:!1}),C=p.useRef(null),R=p.useRef(null),I=p.useRef(null),T=ge(typeof c=="string"?(N,re)=>{let be=c;return(N==null?void 0:N[be])===(re==null?void 0:re[be])}:c),F=p.useCallback(N=>it(_.mode,{1:()=>m.some(re=>T(re,N)),0:()=>T(m,N)}),[m]),_=p.useMemo(()=>({...E,value:m,disabled:u,mode:f?1:0,orientation:b,compare:T,isSelected:F,optionsPropsRef:k,labelRef:C,buttonRef:R,optionsRef:I}),[m,u,f,E]);Je(()=>{E.dataRef.current=_},[_]),Xf([_.buttonRef,_.optionsRef],(N,re)=>{var be;y({type:1}),Zl(re,Jl.Loose)||(N.preventDefault(),(be=_.buttonRef.current)==null||be.focus())},_.listboxState===0);let J=p.useMemo(()=>({open:_.listboxState===0,disabled:u,value:m}),[_,u,m]),B=ge(N=>{let re=_.options.find(be=>be.id===N);re&&V(re.dataRef.current.value)}),W=ge(()=>{if(_.activeOptionIndex!==null){let{dataRef:N,id:re}=_.options[_.activeOptionIndex];V(N.current.value),y({type:2,focus:Re.Specific,id:re})}}),H=ge(()=>y({type:0})),D=ge(()=>y({type:1})),$=ge((N,re,be)=>N===Re.Specific?y({type:2,focus:Re.Specific,id:re,trigger:be}):y({type:2,focus:N,trigger:be})),A=ge((N,re)=>(y({type:5,id:N,dataRef:re}),()=>y({type:6,id:N}))),z=ge(N=>(y({type:7,id:N}),()=>y({type:7,id:null}))),V=ge(N=>it(_.mode,{0(){return v==null?void 0:v(N)},1(){let re=_.value.slice(),be=re.findIndex(Ce=>T(Ce,N));return be===-1?re.push(N):re.splice(be,1),v==null?void 0:v(re)}})),Q=ge(N=>y({type:3,value:N})),X=ge(()=>y({type:4})),M=p.useMemo(()=>({onChange:V,registerOption:A,registerLabel:z,goToOption:$,closeListbox:D,openListbox:H,selectActiveOption:W,selectOption:B,search:Q,clearSearch:X}),[]),oe=p.useRef(null),se=Sn();return p.useEffect(()=>{oe.current&&r!==void 0&&se.addEventListener(oe.current,"reset",()=>{v==null||v(r)})},[oe,v]),S.createElement(yp.Provider,{value:M},S.createElement(wp.Provider,{value:_},S.createElement(ts,{value:it(_.listboxState,{0:ft.Open,1:ft.Closed})},a!=null&&m!=null&&hp({[a]:m}).map((N,re)=>{let[be,Ce]=N;return S.createElement(g2,{features:gp.Hidden,ref:re===0?_e=>{var ie;oe.current=(ie=_e==null?void 0:_e.closest("form"))==null?null:ie}:void 0,...gl({key:be,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:u,name:be,value:Ce})})}),bt({ourProps:{ref:h},theirProps:g,slot:J,defaultTag:R9,name:"Listbox"}))))}let L9="button";function F9(t,n){var o;let r=dn(),{id:i=`headlessui-listbox-button-${r}`,...a}=t,l=sa("Listbox.Button"),c=la("Listbox.Button"),u=Et(l.buttonRef,n),d=Sn(),f=ge(E=>{switch(E.key){case Te.Space:case Te.Enter:case Te.ArrowDown:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Re.First)});break;case Te.ArrowUp:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Re.Last)})}}),g=ge(E=>{switch(E.key){case Te.Space:E.preventDefault()}}),b=ge(E=>rp(E.currentTarget)?E.preventDefault():void(l.listboxState===0?(c.closeListbox(),d.nextFrame(()=>{var y;return(y=l.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})})):(E.preventDefault(),c.openListbox()))),h=ia(()=>{if(l.labelId)return[l.labelId,i].join(" ")},[l.labelId,i]),m=p.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled,value:l.value}),[l]),v={ref:u,id:i,type:ep(t,l.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=l.optionsRef.current)==null?void 0:o.id,"aria-expanded":l.listboxState===0,"aria-labelledby":h,disabled:l.disabled,onKeyDown:f,onKeyUp:g,onClick:b};return bt({ourProps:v,theirProps:a,slot:m,defaultTag:L9,name:"Listbox.Button"})}let A9="label";function z9(t,n){let o=dn(),{id:r=`headlessui-listbox-label-${o}`,...i}=t,a=sa("Listbox.Label"),l=la("Listbox.Label"),c=Et(a.labelRef,n);Je(()=>l.registerLabel(r),[r]);let u=ge(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return bt({ourProps:{ref:c,id:r,onClick:u},theirProps:i,slot:d,defaultTag:A9,name:"Listbox.Label"})}let H9="ul",B9=Sr.RenderStrategy|Sr.Static;function W9(t,n){var o;let r=dn(),{id:i=`headlessui-listbox-options-${r}`,...a}=t,l=sa("Listbox.Options"),c=la("Listbox.Options"),u=Et(l.optionsRef,n),d=Sn(),f=Sn(),g=ra(),b=g===null?l.listboxState===0:(g&ft.Open)===ft.Open;p.useEffect(()=>{var y;let k=l.optionsRef.current;k&&l.listboxState===0&&k!==((y=na(k))==null?void 0:y.activeElement)&&k.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let h=ge(y=>{switch(f.dispose(),y.key){case Te.Space:if(l.searchQuery!=="")return y.preventDefault(),y.stopPropagation(),c.search(y.key);case Te.Enter:if(y.preventDefault(),y.stopPropagation(),l.activeOptionIndex!==null){let{dataRef:k}=l.options[l.activeOptionIndex];c.onChange(k.current.value)}l.mode===0&&(c.closeListbox(),Wt().nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}));break;case it(l.orientation,{vertical:Te.ArrowDown,horizontal:Te.ArrowRight}):return y.preventDefault(),y.stopPropagation(),c.goToOption(Re.Next);case it(l.orientation,{vertical:Te.ArrowUp,horizontal:Te.ArrowLeft}):return y.preventDefault(),y.stopPropagation(),c.goToOption(Re.Previous);case Te.Home:case Te.PageUp:return y.preventDefault(),y.stopPropagation(),c.goToOption(Re.First);case Te.End:case Te.PageDown:return y.preventDefault(),y.stopPropagation(),c.goToOption(Re.Last);case Te.Escape:return y.preventDefault(),y.stopPropagation(),c.closeListbox(),d.nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})});case Te.Tab:y.preventDefault(),y.stopPropagation();break;default:y.key.length===1&&(c.search(y.key),f.setTimeout(()=>c.clearSearch(),350))}}),m=ia(()=>{var y;return(y=l.buttonRef.current)==null?void 0:y.id},[l.buttonRef.current]),v=p.useMemo(()=>({open:l.listboxState===0}),[l]),E={"aria-activedescendant":l.activeOptionIndex===null||(o=l.options[l.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":l.mode===1||void 0,"aria-labelledby":m,"aria-orientation":l.orientation,id:i,onKeyDown:h,role:"listbox",tabIndex:0,ref:u};return bt({ourProps:E,theirProps:a,slot:v,defaultTag:H9,features:B9,visible:b,name:"Listbox.Options"})}let V9="li";function q9(t,n){let o=dn(),{id:r=`headlessui-listbox-option-${o}`,disabled:i=!1,value:a,...l}=t,c=sa("Listbox.Option"),u=la("Listbox.Option"),d=c.activeOptionIndex!==null&&c.options[c.activeOptionIndex].id===r,f=c.isSelected(a),g=p.useRef(null),b=w2(g),h=jn({disabled:i,value:a,domRef:g,get textValue(){return b()}}),m=Et(n,g);Je(()=>{if(c.listboxState===0&&d&&c.activationTrigger!==0){let T=Wt();return T.requestAnimationFrame(()=>{var F,_;(_=(F=g.current)==null?void 0:F.scrollIntoView)==null||_.call(F,{block:"nearest"})}),T.dispose}},[g,d,c.listboxState,c.activationTrigger,c.activeOptionIndex]),Je(()=>u.registerOption(r,h),[h,r]);let v=ge(T=>i?T.preventDefault():(u.onChange(a),void(c.mode===0&&(u.closeListbox(),Wt().nextFrame(()=>{var F;return(F=c.buttonRef.current)==null?void 0:F.focus({preventScroll:!0})}))))),E=ge(()=>i?u.goToOption(Re.Nothing):void u.goToOption(Re.Specific,r)),y=tp(),k=ge(T=>y.update(T)),C=ge(T=>{y.wasMoved(T)&&(i||d||u.goToOption(Re.Specific,r,0))}),R=ge(T=>{y.wasMoved(T)&&(i||d&&u.goToOption(Re.Nothing))}),I=p.useMemo(()=>({active:d,selected:f,disabled:i}),[d,f,i]);return bt({ourProps:{id:r,ref:m,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,"aria-selected":f,disabled:void 0,onClick:v,onFocus:E,onPointerEnter:k,onMouseEnter:k,onPointerMove:C,onMouseMove:C,onPointerLeave:R,onMouseLeave:R},theirProps:l,slot:I,defaultTag:V9,name:"Listbox.Option"})}let U9=gt(_9),Y9=gt(F9),K9=gt(z9),G9=gt(W9),Q9=gt(q9);Object.assign(U9,{Button:Y9,Label:K9,Options:G9,Option:Q9});const J9=t=>{const{multiple:n,value:o}=t;if(o){if(n&&!Array.isArray(o))return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.");if(!n&&typeof o!="string")return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")}};w.string,w.node,w.string,w.string,w.bool,w.bool,w.node,w.node,w.string,w.bool,w.string,w.bool,w.bool,w.string,w.func,w.func,w.string,w.bool,w.node,w.bool,w.bool,w.string,w.oneOf(["default","primary","primary-danger","subdued"]),w.oneOf(["full","auto"]),w.string,w.string,w.string,w.bool,w.string,w.string,w.oneOf(["","number","select","input"]),w.number,w.number,w.bool,w.bool,w.func,w.func,w.func,w.func,w.string;const Z9=`
  jn-h-px 
  jn-w-full
  jn-bg-theme-background-lvl-3
`,Pv=S.forwardRef((t,n)=>{let{className:o="",...r}=t;return S.createElement("div",we({className:`juno-select-divider ${Z9} ${o}`,ref:n},r))});Pv.displayName="SelectDivider",Pv.propTypes={className:w.string},w.string,w.string,w.string,w.string,w.node,w.bool,w.string,w.bool,w.bool,w.string,w.node,w.bool,w.string,w.oneOf(["default","primary","primary-danger","subdued"]),w.func,w.func,w.func,w.string,w.bool,w.bool,w.bool,w.string,w.string,w.string,w.string,w.bool,w.oneOf(["small","default","large"]),w.bool,w.bool,w.bool,w.bool,w.node,w.node,w.node,w.string,w.func,w.func,w.string,w.string,w.string,w.string,w.bool,w.bool,w.node,w.bool,w.bool,w.string,w.bool,w.string,w.string,w.func,w.func,w.string,w.string,w.oneOfType([w.string,w.number]),w.string,w.string,w.bool,w.bool,w.bool,w.bool,w.bool,w.bool,w.string,w.string,w.func,w.func,w.func,w.node,w.node,w.node,w.oneOf(["full","auto"]),w.string,w.string,w.string,w.string,w.string,w.node,w.string,w.bool,w.bool,w.string,w.bool,w.string,w.string,w.bool,w.func,w.oneOf(["text","password","email","tel","url","number"]),w.string,w.string,w.string,w.string,w.string,w.node,w.bool,w.bool,w.string,w.bool,w.string,w.bool,w.string,w.bool,w.func,w.func,w.func,w.string,w.bool,w.string,w.string,w.func;const X9=t=>t==="info"||t==="success",R2=({className:t})=>{const n=NT(),{removeMessage:o}=A0(),r=i=>{o(i)};return S.createElement(S.Fragment,null,n&&0<n.length&&S.createElement("div",{role:"group",className:`juno-message-provider ${t||""}`},n.map((i,a)=>{const{id:l,variant:c,text:u,...d}=i;return S.createElement(k2,Bu({role:"alert",key:l,className:0<a?"mt-4":"",variant:c,dismissible:!0,autoDismiss:X9(c),onDismiss:()=>r(l)},d),u)})))};R2.propTypes={className:w.string};const uc={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},Qd=new Map,Ta=t=>{const n=Qd.get(t);return n?Object.fromEntries(Object.entries(n.stores).map(([o,r])=>[o,r.getState()])):{}},eL=(t,n,o)=>{if(t===void 0)return{type:"untracked",connection:n.connect(o)};const r=Qd.get(o.name);if(r)return{type:"tracked",store:t,...r};const i={connection:n.connect(o),stores:{}};return Qd.set(o.name,i),{type:"tracked",store:t,...i}},tL=(t,n={})=>(o,r,i)=>{const{enabled:a,anonymousActionType:l,store:c,...u}=n;let d;try{d=(a??(uc?"static":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!d)return(uc?"static":void 0)!=="production"&&a&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),t(o,r,i);const{connection:f,...g}=eL(c,d,u);let b=!0;i.setState=(v,E,y)=>{const k=o(v,E);if(!b)return k;const C=y===void 0?{type:l||"anonymous"}:typeof y=="string"?{type:y}:y;return c===void 0?(f==null||f.send(C,r()),k):(f==null||f.send({...C,type:`${c}/${C.type}`},{...Ta(u.name),[c]:i.getState()}),k)};const h=(...v)=>{const E=b;b=!1,o(...v),b=E},m=t(i.setState,r,i);if(g.type==="untracked"?f==null||f.init(m):(g.stores[g.store]=i,f==null||f.init(Object.fromEntries(Object.entries(g.stores).map(([v,E])=>[v,v===g.store?m:E.getState()])))),i.dispatchFromDevtools&&typeof i.dispatch=="function"){let v=!1;const E=i.dispatch;i.dispatch=(...y)=>{(uc?"static":void 0)!=="production"&&y[0].type==="__setState"&&!v&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),v=!0),E(...y)}}return f.subscribe(v=>{var E;switch(v.type){case"ACTION":if(typeof v.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return dc(v.payload,y=>{if(y.type==="__setState"){if(c===void 0){h(y.state);return}Object.keys(y.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const k=y.state[c];if(k==null)return;JSON.stringify(i.getState())!==JSON.stringify(k)&&h(k);return}i.dispatchFromDevtools&&typeof i.dispatch=="function"&&i.dispatch(y)});case"DISPATCH":switch(v.payload.type){case"RESET":return h(m),c===void 0?f==null?void 0:f.init(i.getState()):f==null?void 0:f.init(Ta(u.name));case"COMMIT":if(c===void 0){f==null||f.init(i.getState());return}return f==null?void 0:f.init(Ta(u.name));case"ROLLBACK":return dc(v.state,y=>{if(c===void 0){h(y),f==null||f.init(i.getState());return}h(y[c]),f==null||f.init(Ta(u.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return dc(v.state,y=>{if(c===void 0){h(y);return}JSON.stringify(i.getState())!==JSON.stringify(y[c])&&h(y[c])});case"IMPORT_STATE":{const{nextLiftedState:y}=v.payload,k=(E=y.computedStates.slice(-1)[0])==null?void 0:E.state;if(!k)return;h(c===void 0?k:k[c]),f==null||f.send(null,y);return}case"PAUSE_RECORDING":return b=!b}return}}),m},nL=tL,dc=(t,n)=>{let o;try{o=JSON.parse(t)}catch(r){console.error("[zustand devtools middleware] Could not parse the received json",r)}o!==void 0&&n(o)},Iv=t=>{if(!t||typeof t=="object"&&Object.keys(t).length===0)return"An error occurred. There is no further information";let n=JSON.stringify(t);if(t!=null&&t.message){n=t==null?void 0:t.message;try{const o=JSON.parse(t==null?void 0:t.message);o.error&&(n=o.error),o.msg&&(n=o.msg)}catch(o){console.error(o)}}return n},cs=t=>t&&t.replace(/([A-Z])/g,n=>" "+n.toLowerCase()).replace(/_/g," ");function rL(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}const _2="cluster",L2="violationGroup",F2="check",oL=t=>{if(!t)return[];const n=Object.keys(t).reduce((o,r)=>{const i=t[r];return Object.keys(i).forEach(a=>{const l=i[a];o[a]=o[a]||{key:`${_2}:${a}`,label:cs(a),values:[]},o[a].values.indexOf(l)<0&&o[a].values.push(l)}),o},{});return Object.values(n)},iL=(t,n={showDebugSeverities:!1})=>{if(!t)return[];const o=[];t.forEach(i=>i.constraints.forEach(a=>o.push(a)));const r=o.reduce((i,a)=>{var l,c;if((l=a==null?void 0:a.metadata)!=null&&l.severity){const u=a.metadata.severity;i.severity=i.severity||{key:`${L2}:severity`,label:"severity",values:[]},i.severity.values.indexOf(u)<0&&(n!=null&&n.showDebugSeverities||u!=="debug")&&i.severity.values.push(u)}return(c=a==null?void 0:a.violation_groups)==null||c.forEach(u=>{var d;(d=u==null?void 0:u.pattern)!=null&&d.object_identity&&Object.keys(u.pattern.object_identity).forEach(f=>{const g=u.pattern.object_identity[f];i[f]=i[f]||{key:`${F2}:${f}`,label:cs(f),values:[]},i[f].values.indexOf(g)<0&&i[f].values.push(g)})}),Object.keys(i).forEach(u=>{i[u].values.sort()}),i},{});return Object.values(r)},aL=({violationGroups:t,clusterIdentities:n,activeFilters:o,searchTerm:r,showDebugSeverities:i})=>{let a=t;if(i||(a=a==null?void 0:a.filter(l=>{var c,u;return l.constraints=(c=l.constraints)==null?void 0:c.filter(d=>{var f;return((f=d.metadata)==null?void 0:f.severity)!=="debug"}),((u=l.constraints)==null?void 0:u.length)>0})),t&&(o==null?void 0:o.length)>0){a=[];const l={},c={},u={};o.forEach(d=>{var b;const[f,g]=(b=d.key)==null?void 0:b.split(":");f===L2&&g==="severity"?(l[g]=l[g]||[],l[g].push(d.value)):f===F2?(c[g]=c[g]||[],c[g].push(d.value)):f===_2&&(u[g]=u[g]||[],u[g].push(d.value))}),t.forEach(d=>{var g,b;const f=JSON.parse(JSON.stringify(d));f.constraints=(g=f.constraints)==null?void 0:g.filter(h=>{var v,E,y,k;let m=!0;if(Object.keys(c).length>0&&(h.violation_groups=(v=h.violation_groups)==null?void 0:v.filter(C=>Object.keys(c).reduce((R,I)=>{var T,F;return R&&((T=C.pattern)==null?void 0:T.object_identity)&&((F=c[I])==null?void 0:F.includes(C.pattern.object_identity[I]))},!0)),m=m&&((E=h.violation_groups)==null?void 0:E.length)>0),Object.keys(u).length>0){const C=n==null?void 0:n.filter(R=>Object.keys(u).reduce((I,T)=>I&&u[T].includes(R[T]),!0)).map(R=>R.cluster);h.violation_groups=(y=h.violation_groups)==null?void 0:y.filter(R=>(R.instances=R.instances.filter(I=>C.includes(I.cluster)),R.instances.length>0)),m=m&&((k=h.violation_groups)==null?void 0:k.length)>0}return Object.keys(l).length>0&&(m=m&&Object.values(l).reduce((C,R)=>{var I;return C&&R.includes((I=h.metadata)==null?void 0:I.severity)},!0)),m}),((b=f.constraints)==null?void 0:b.length)>0&&a.push(f)})}return r&&a&&(a=a.filter(l=>{var u;const c=l.constraints=(u=l.constraints)==null?void 0:u.filter(d=>{const{violation_groups:f,...g}=d,b=JSON.stringify(g).toLowerCase().includes(r.toLowerCase()),h=f.filter(m=>JSON.stringify(m).toLowerCase().includes(r.toLowerCase()));return d.violation_groups=h,b||h.length>0});return l.constraints=c,c.length>0})),a},lL=({items:t,severityWeights:n})=>t?t.map(o=>{var r;return o.violationCount=0,o.severities=[],(r=o.constraints)==null||r.forEach(i=>{var a,l,c;o.violationCount+=((a=i.violation_groups)==null?void 0:a.length)||0,o.severities.indexOf((l=i==null?void 0:i.metadata)==null?void 0:l.severity)<0&&o.severities.push((c=i==null?void 0:i.metadata)==null?void 0:c.severity)}),o.severities=o.severities.sort((i,a)=>(n.indexOf(i)||100)-(n.indexOf(a)||100)),o}).sort((o,r)=>(n[o.severities[0]]||100)-(n[r.severities[0]]||100)):[],sL=(t,n)=>({data:{severityWeights:{error:1,warning:2,info:3,debug:4},showDebugSeverities:!0,loaded:!1,clusterIdentities:null,violationGroups:null,filterEntries:[],filteredItems:{},detailsViolationGroupKind:null,detailsViolationGroup:null,actions:{setShowDebugSeverities:o=>{t(r=>({data:{...r.data,showDebugSeverities:o}}))},setData:o=>{if(!o)return;let r=[];o.cluster_identities&&(r=Object.keys(o.cluster_identities).map(i=>({cluster:i,...o.cluster_identities[i]}))),t(i=>({data:{...i.data,loaded:!0,clusterIdentities:r,violationGroups:o.templates||[],filterEntries:[...oL(o.cluster_identities),...iL(o.templates,{showDebugSeverities:i.data.showDebugSeverities})]}}),!1,"data/setData"),n().data.actions.filterItems()},filterItems:()=>{const o=n().data.violationGroups,r=n().data.clusterIdentities,i=n().filters.active||[],a=n().filters.searchTerm,l=n().data.severityWeights;let c=aL({violationGroups:o,clusterIdentities:r,activeFilters:i,searchTerm:a,showDebugSeverities:n().data.showDebugSeverities});c=lL({items:c,severityWeights:l}),t(u=>({data:{...u.data,filteredItems:c}}),!1,"data/filterItems"),n().data.actions.setDetailsViolationGroup()},setDetailsViolationGroupKind:o=>{t(r=>({data:{...r.data,detailsViolationGroupKind:o}}),!1,"data.setDetailsViolationGroup"),n().data.actions.setDetailsViolationGroup()},setDetailsViolationGroup:()=>{var i;const o=n().data.detailsViolationGroupKind;if(!o)return;const r=(i=n().data.filteredItems)==null?void 0:i.find(a=>a.kind===o);n().data.detailsViolationGroup&&r&&JSON.stringify(n().data.detailsViolationGroup)===JSON.stringify(r)||t(a=>({data:{...a.data,detailsViolationGroup:r}}),!1,"data.setDetailsViolationGroup")}}}}),cL=(t,n)=>({filters:{searchTerm:null,active:void 0,actions:{set:o=>{Array.isArray(o)&&(t(r=>({filters:{...r.filters,active:o}}),!1,"filters.set"),n().data.actions.filterItems())},add:(o,r)=>{t(i=>{var c;let a=((c=i.filters.active)==null?void 0:c.slice())||[];return a.findIndex(u=>u.key===o&&u.value===r)<0&&a.push({key:o,value:r}),{filters:{...i.filters,active:a}}},!1,"filters.add"),n().data.actions.filterItems()},remove:(o,r)=>{t(i=>{var c;let a=((c=i.filters.active)==null?void 0:c.slice())||[],l=a.findIndex(u=>u.key===o&&u.value===r);return l>=0&&a.splice(l,1),{filters:{...i.filters,active:a}}},!1,"filters.remove"),n().data.actions.filterItems()},removeAll:()=>{t(o=>({filters:{...o.filters,active:[]}}),!1,"filters.remove"),n().data.actions.filterItems()},setSearchTerm:o=>{t(r=>({filters:{...r.filters,searchTerm:o}})),n().data.actions.filterItems()}}}}),uL=(t,n)=>({auth:{data:null,isProcessing:!1,loggedIn:!1,error:null,lastAction:{},appLoaded:!1,appIsLoading:!1,actions:{setAppLoaded:o=>{t(r=>({auth:{...r.auth,appLoaded:o}}),!1,"auth/setAppLoaded")},setData:o=>{t(r=>({auth:{...r.auth,isProcessing:o==null?void 0:o.isProcessing,loggedIn:o==null?void 0:o.loggedIn,error:o==null?void 0:o.error,data:o==null?void 0:o.auth}}),!1,"auth/setData")},setAction:o=>t(r=>({auth:{...r.auth,lastAction:{name:o,updatedAt:Date.now()}}}),!1,"auth/setAction"),login:()=>n().auth.actions.setAction(ACTIONS.SIGN_ON),logout:()=>n().auth.actions.setAction(ACTIONS.SIGN_OUT)}}}),dL=t=>({userActivity:{isActive:!0,actions:{setIsActive:n=>{t(o=>({userActivity:{...o.userActivity,isActive:n}}),!1,"userActivity.setIsActive")}}}}),fL=t=>({globals:{endpoint:"",isMock:!1,actions:{setEndpoint:n=>t(o=>({globals:{...o.globals,endpoint:n}}),!1,"globals/setEndpoint"),setMock:n=>t(o=>({globals:{...o.globals,isMock:n}}),!1,"globals/setMock")}}}),pL=()=>P0(nL((t,n)=>({...dL(t),...uL(t,n),...cL(t,n),...sL(t,n),...fL(t)}))),A2=p.createContext(),gL=({children:t})=>U.jsx(A2.Provider,{value:pL(),children:t}),vt=t=>N0(p.useContext(A2),t),hL=()=>vt(t=>t.globals.isMock),mL=()=>vt(t=>t.globals.endpoint),bL=()=>vt(t=>t.globals.actions),vL=()=>vt(t=>t.auth.data),z2=()=>vt(t=>t.auth.isProcessing),xp=()=>vt(t=>t.auth.loggedIn),H2=()=>vt(t=>t.auth.error),yL=()=>vt(t=>t.auth.lastAction),B2=()=>vt(t=>t.auth.appLoaded),W2=()=>vt(t=>t.auth.actions),wL=()=>vt(t=>t.userActivity.actions),xL=()=>vt(t=>t.data.loaded),jp=()=>vt(t=>t.data.detailsViolationGroupKind),jL=()=>vt(t=>t.data.detailsViolationGroup),EL=()=>vt(t=>t.data.filterEntries),kL=()=>vt(t=>t.data.filteredItems),us=()=>vt(t=>t.data.actions),Ep=()=>vt(t=>t.filters.active),kp=()=>vt(t=>t.filters.searchTerm),ds=()=>vt(t=>t.filters.actions),Tv={SIGN_ON:"signOn",SIGN_OUT:"signOut"},OL=()=>U.jsx(cP,{children:U.jsxs("p",{children:["To perform automatic validations on Kubernetes objects, we run a deployment of"," ",U.jsxs("a",{href:"https://github.com/open-policy-agent/gatekeeper",target:"_blank",rel:"noreferrer",children:["OPA Gatekeeper"," "]})," ","in each cluster. This dashboard aggregates all policy violations reported by those Gatekeeper instances. ",U.jsx("br",{}),U.jsx("br",{}),U.jsx("b",{children:"Where are checks defined? How can I add or modify them? "}),U.jsx("br",{}),"Follow the links in the section headers to the source code. For how to write constraints and their templates, check out"," ",U.jsx("a",{href:"https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",target:"_blank",rel:"noreferrer",children:"this guide from the Gatekeeper documentation."}),U.jsx("br",{}),U.jsx("br",{}),U.jsx("b",{children:"Did we improve over time? "}),U.jsx("br",{}),"To see historical trends, check out the"," ",U.jsx("a",{href:"https://plutono.global.cloud.sap/d/doop-overview/doop-overview?orgId=1",target:"_blank",rel:"noreferrer",children:"Plutono dashboard."})]})}),V2=({text:t,className:n})=>U.jsxs(xn,{alignment:"center",className:n,children:[U.jsx(j0,{variant:"primary"}),t?U.jsx("span",{children:t}):U.jsx("span",{children:"Loading..."})]});var ca=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ri=typeof window>"u"||"Deno"in globalThis;function sn(){}function SL(t,n){return typeof t=="function"?t(n):t}function Jd(t){return typeof t=="number"&&t>=0&&t!==1/0}function q2(t,n){return Math.max(t+(n||0)-Date.now(),0)}function Dv(t,n){const{type:o="all",exact:r,fetchStatus:i,predicate:a,queryKey:l,stale:c}=t;if(l){if(r){if(n.queryHash!==Op(l,n.options))return!1}else if(!Bi(n.queryKey,l))return!1}if(o!=="all"){const u=n.isActive();if(o==="active"&&!u||o==="inactive"&&u)return!1}return!(typeof c=="boolean"&&n.isStale()!==c||i&&i!==n.state.fetchStatus||a&&!a(n))}function Mv(t,n){const{exact:o,status:r,predicate:i,mutationKey:a}=t;if(a){if(!n.options.mutationKey)return!1;if(o){if(Hi(n.options.mutationKey)!==Hi(a))return!1}else if(!Bi(n.options.mutationKey,a))return!1}return!(r&&n.state.status!==r||i&&!i(n))}function Op(t,n){return((n==null?void 0:n.queryKeyHashFn)||Hi)(t)}function Hi(t){return JSON.stringify(t,(n,o)=>Xd(o)?Object.keys(o).sort().reduce((r,i)=>(r[i]=o[i],r),{}):o)}function Bi(t,n){return t===n?!0:typeof t!=typeof n?!1:t&&n&&typeof t=="object"&&typeof n=="object"?!Object.keys(n).some(o=>!Bi(t[o],n[o])):!1}function U2(t,n){if(t===n)return t;const o=Nv(t)&&Nv(n);if(o||Xd(t)&&Xd(n)){const r=o?t:Object.keys(t),i=r.length,a=o?n:Object.keys(n),l=a.length,c=o?[]:{};let u=0;for(let d=0;d<l;d++){const f=o?d:a[d];(!o&&r.includes(f)||o)&&t[f]===void 0&&n[f]===void 0?(c[f]=void 0,u++):(c[f]=U2(t[f],n[f]),c[f]===t[f]&&t[f]!==void 0&&u++)}return i===l&&u===i?t:c}return n}function Zd(t,n){if(!n||Object.keys(t).length!==Object.keys(n).length)return!1;for(const o in t)if(t[o]!==n[o])return!1;return!0}function Nv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Xd(t){if(!Rv(t))return!1;const n=t.constructor;if(n===void 0)return!0;const o=n.prototype;return!(!Rv(o)||!o.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Rv(t){return Object.prototype.toString.call(t)==="[object Object]"}function CL(t){return new Promise(n=>{setTimeout(n,t)})}function ef(t,n,o){return typeof o.structuralSharing=="function"?o.structuralSharing(t,n):o.structuralSharing!==!1?U2(t,n):n}function $L(t,n,o=0){const r=[...t,n];return o&&r.length>o?r.slice(1):r}function PL(t,n,o=0){const r=[n,...t];return o&&r.length>o?r.slice(0,-1):r}var Sp=Symbol(),Gr,pr,Ro,Vy,IL=(Vy=class extends ca{constructor(){super();De(this,Gr);De(this,pr);De(this,Ro);ye(this,Ro,n=>{if(!ri&&window.addEventListener){const o=()=>n();return window.addEventListener("visibilitychange",o,!1),()=>{window.removeEventListener("visibilitychange",o)}}})}onSubscribe(){q(this,pr)||this.setEventListener(q(this,Ro))}onUnsubscribe(){var n;this.hasListeners()||((n=q(this,pr))==null||n.call(this),ye(this,pr,void 0))}setEventListener(n){var o;ye(this,Ro,n),(o=q(this,pr))==null||o.call(this),ye(this,pr,n(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(n){q(this,Gr)!==n&&(ye(this,Gr,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(o=>{o(n)})}isFocused(){var n;return typeof q(this,Gr)=="boolean"?q(this,Gr):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},Gr=new WeakMap,pr=new WeakMap,Ro=new WeakMap,Vy),Cp=new IL,_o,gr,Lo,qy,TL=(qy=class extends ca{constructor(){super();De(this,_o,!0);De(this,gr);De(this,Lo);ye(this,Lo,n=>{if(!ri&&window.addEventListener){const o=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",o,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",r)}}})}onSubscribe(){q(this,gr)||this.setEventListener(q(this,Lo))}onUnsubscribe(){var n;this.hasListeners()||((n=q(this,gr))==null||n.call(this),ye(this,gr,void 0))}setEventListener(n){var o;ye(this,Lo,n),(o=q(this,gr))==null||o.call(this),ye(this,gr,n(this.setOnline.bind(this)))}setOnline(n){q(this,_o)!==n&&(ye(this,_o,n),this.listeners.forEach(r=>{r(n)}))}isOnline(){return q(this,_o)}},_o=new WeakMap,gr=new WeakMap,Lo=new WeakMap,qy),Cl=new TL;function DL(t){return Math.min(1e3*2**t,3e4)}function Y2(t){return(t??"online")==="online"?Cl.isOnline():!0}var K2=class{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function fc(t){return t instanceof K2}function G2(t){let n=!1,o=0,r=!1,i,a,l;const c=new Promise((y,k)=>{a=y,l=k}),u=y=>{var k;r||(m(new K2(y)),(k=t.abort)==null||k.call(t))},d=()=>{n=!0},f=()=>{n=!1},g=()=>Cp.isFocused()&&(t.networkMode==="always"||Cl.isOnline())&&t.canRun(),b=()=>Y2(t.networkMode)&&t.canRun(),h=y=>{var k;r||(r=!0,(k=t.onSuccess)==null||k.call(t,y),i==null||i(),a(y))},m=y=>{var k;r||(r=!0,(k=t.onError)==null||k.call(t,y),i==null||i(),l(y))},v=()=>new Promise(y=>{var k;i=C=>{(r||g())&&y(C)},(k=t.onPause)==null||k.call(t)}).then(()=>{var y;i=void 0,r||(y=t.onContinue)==null||y.call(t)}),E=()=>{if(r)return;let y;try{y=t.fn()}catch(k){y=Promise.reject(k)}Promise.resolve(y).then(h).catch(k=>{var F;if(r)return;const C=t.retry??(ri?0:3),R=t.retryDelay??DL,I=typeof R=="function"?R(o,k):R,T=C===!0||typeof C=="number"&&o<C||typeof C=="function"&&C(o,k);if(n||!T){m(k);return}o++,(F=t.onFail)==null||F.call(t,o,k),CL(I).then(()=>g()?void 0:v()).then(()=>{n?m(k):E()})})};return{promise:c,cancel:u,continue:()=>(i==null||i(),c),cancelRetry:d,continueRetry:f,canStart:b,start:()=>(b()?E():v().then(E),c)}}function ML(){let t=[],n=0,o=b=>{b()},r=b=>{b()},i=b=>setTimeout(b,0);const a=b=>{i=b},l=b=>{let h;n++;try{h=b()}finally{n--,n||d()}return h},c=b=>{n?t.push(b):i(()=>{o(b)})},u=b=>(...h)=>{c(()=>{b(...h)})},d=()=>{const b=t;t=[],b.length&&i(()=>{r(()=>{b.forEach(h=>{o(h)})})})};return{batch:l,batchCalls:u,schedule:c,setNotifyFunction:b=>{o=b},setBatchNotifyFunction:b=>{r=b},setScheduler:a}}var Ot=ML(),Qr,Uy,Q2=(Uy=class{constructor(){De(this,Qr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Jd(this.gcTime)&&ye(this,Qr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ri?1/0:5*60*1e3))}clearGcTimeout(){q(this,Qr)&&(clearTimeout(q(this,Qr)),ye(this,Qr,void 0))}},Qr=new WeakMap,Uy),Fo,Ao,ln,Mt,Vi,Jr,vn,Qn,Yy,NL=(Yy=class extends Q2{constructor(n){super();De(this,vn);De(this,Fo);De(this,Ao);De(this,ln);De(this,Mt);De(this,Vi);De(this,Jr);ye(this,Jr,!1),ye(this,Vi,n.defaultOptions),this.setOptions(n.options),this.observers=[],ye(this,ln,n.cache),this.queryKey=n.queryKey,this.queryHash=n.queryHash,ye(this,Fo,n.state||RL(this.options)),this.state=q(this,Fo),this.scheduleGc()}get meta(){return this.options.meta}setOptions(n){this.options={...q(this,Vi),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&q(this,ln).remove(this)}setData(n,o){const r=ef(this.state.data,n,this.options);return ze(this,vn,Qn).call(this,{data:r,type:"success",dataUpdatedAt:o==null?void 0:o.updatedAt,manual:o==null?void 0:o.manual}),r}setState(n,o){ze(this,vn,Qn).call(this,{type:"setState",state:n,setStateOptions:o})}cancel(n){var r,i;const o=(r=q(this,Mt))==null?void 0:r.promise;return(i=q(this,Mt))==null||i.cancel(n),o?o.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(q(this,Fo))}isActive(){return this.observers.some(n=>n.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(n=0){return this.state.isInvalidated||this.state.data===void 0||!q2(this.state.dataUpdatedAt,n)}onFocus(){var o;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(o=q(this,Mt))==null||o.continue()}onOnline(){var o;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(o=q(this,Mt))==null||o.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),q(this,ln).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(o=>o!==n),this.observers.length||(q(this,Mt)&&(q(this,Jr)?q(this,Mt).cancel({revert:!0}):q(this,Mt).cancelRetry()),this.scheduleGc()),q(this,ln).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ze(this,vn,Qn).call(this,{type:"invalidate"})}fetch(n,o){var d,f,g;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(o!=null&&o.cancelRefetch))this.cancel({silent:!0});else if(q(this,Mt))return q(this,Mt).continueRetry(),q(this,Mt).promise}if(n&&this.setOptions(n),!this.options.queryFn){const b=this.observers.find(h=>h.options.queryFn);b&&this.setOptions(b.options)}const r=new AbortController,i={queryKey:this.queryKey,meta:this.meta},a=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(ye(this,Jr,!0),r.signal)})};a(i);const l=()=>!this.options.queryFn||this.options.queryFn===Sp?Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)):(ye(this,Jr,!1),this.options.persister?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i)),c={fetchOptions:o,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:l};a(c),(d=this.options.behavior)==null||d.onFetch(c,this),ye(this,Ao,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=c.fetchOptions)==null?void 0:f.meta))&&ze(this,vn,Qn).call(this,{type:"fetch",meta:(g=c.fetchOptions)==null?void 0:g.meta});const u=b=>{var h,m,v,E;fc(b)&&b.silent||ze(this,vn,Qn).call(this,{type:"error",error:b}),fc(b)||((m=(h=q(this,ln).config).onError)==null||m.call(h,b,this),(E=(v=q(this,ln).config).onSettled)==null||E.call(v,this.state.data,b,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return ye(this,Mt,G2({fn:c.fetchFn,abort:r.abort.bind(r),onSuccess:b=>{var h,m,v,E;if(b===void 0){u(new Error(`${this.queryHash} data is undefined`));return}this.setData(b),(m=(h=q(this,ln).config).onSuccess)==null||m.call(h,b,this),(E=(v=q(this,ln).config).onSettled)==null||E.call(v,b,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(b,h)=>{ze(this,vn,Qn).call(this,{type:"failed",failureCount:b,error:h})},onPause:()=>{ze(this,vn,Qn).call(this,{type:"pause"})},onContinue:()=>{ze(this,vn,Qn).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),q(this,Mt).start()}},Fo=new WeakMap,Ao=new WeakMap,ln=new WeakMap,Mt=new WeakMap,Vi=new WeakMap,Jr=new WeakMap,vn=new WeakSet,Qn=function(n){const o=r=>{switch(n.type){case"failed":return{...r,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...J2(r.data,this.options),fetchMeta:n.meta??null};case"success":return{...r,data:n.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=n.error;return fc(i)&&i.revert&&q(this,Ao)?{...q(this,Ao),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...n.state}}};this.state=o(this.state),Ot.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),q(this,ln).notify({query:this,type:"updated",action:n})})},Yy);function J2(t,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Y2(n.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function RL(t){const n=typeof t.initialData=="function"?t.initialData():t.initialData,o=n!==void 0,r=o?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:o?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:o?"success":"pending",fetchStatus:"idle"}}var Tn,Ky,_L=(Ky=class extends ca{constructor(n={}){super();De(this,Tn);this.config=n,ye(this,Tn,new Map)}build(n,o,r){const i=o.queryKey,a=o.queryHash??Op(i,o);let l=this.get(a);return l||(l=new NL({cache:this,queryKey:i,queryHash:a,options:n.defaultQueryOptions(o),state:r,defaultOptions:n.getQueryDefaults(i)}),this.add(l)),l}add(n){q(this,Tn).has(n.queryHash)||(q(this,Tn).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const o=q(this,Tn).get(n.queryHash);o&&(n.destroy(),o===n&&q(this,Tn).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Ot.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return q(this,Tn).get(n)}getAll(){return[...q(this,Tn).values()]}find(n){const o={exact:!0,...n};return this.getAll().find(r=>Dv(o,r))}findAll(n={}){const o=this.getAll();return Object.keys(n).length>0?o.filter(r=>Dv(n,r)):o}notify(n){Ot.batch(()=>{this.listeners.forEach(o=>{o(n)})})}onFocus(){Ot.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Ot.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Tn=new WeakMap,Ky),Dn,Nt,Zr,Mn,ur,Gy,LL=(Gy=class extends Q2{constructor(n){super();De(this,Mn);De(this,Dn);De(this,Nt);De(this,Zr);this.mutationId=n.mutationId,ye(this,Nt,n.mutationCache),ye(this,Dn,[]),this.state=n.state||FL(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){q(this,Dn).includes(n)||(q(this,Dn).push(n),this.clearGcTimeout(),q(this,Nt).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){ye(this,Dn,q(this,Dn).filter(o=>o!==n)),this.scheduleGc(),q(this,Nt).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){q(this,Dn).length||(this.state.status==="pending"?this.scheduleGc():q(this,Nt).remove(this))}continue(){var n;return((n=q(this,Zr))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var i,a,l,c,u,d,f,g,b,h,m,v,E,y,k,C,R,I,T,F;ye(this,Zr,G2({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(_,J)=>{ze(this,Mn,ur).call(this,{type:"failed",failureCount:_,error:J})},onPause:()=>{ze(this,Mn,ur).call(this,{type:"pause"})},onContinue:()=>{ze(this,Mn,ur).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>q(this,Nt).canRun(this)}));const o=this.state.status==="pending",r=!q(this,Zr).canStart();try{if(!o){ze(this,Mn,ur).call(this,{type:"pending",variables:n,isPaused:r}),await((a=(i=q(this,Nt).config).onMutate)==null?void 0:a.call(i,n,this));const J=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,n));J!==this.state.context&&ze(this,Mn,ur).call(this,{type:"pending",context:J,variables:n,isPaused:r})}const _=await q(this,Zr).start();return await((d=(u=q(this,Nt).config).onSuccess)==null?void 0:d.call(u,_,n,this.state.context,this)),await((g=(f=this.options).onSuccess)==null?void 0:g.call(f,_,n,this.state.context)),await((h=(b=q(this,Nt).config).onSettled)==null?void 0:h.call(b,_,null,this.state.variables,this.state.context,this)),await((v=(m=this.options).onSettled)==null?void 0:v.call(m,_,null,n,this.state.context)),ze(this,Mn,ur).call(this,{type:"success",data:_}),_}catch(_){try{throw await((y=(E=q(this,Nt).config).onError)==null?void 0:y.call(E,_,n,this.state.context,this)),await((C=(k=this.options).onError)==null?void 0:C.call(k,_,n,this.state.context)),await((I=(R=q(this,Nt).config).onSettled)==null?void 0:I.call(R,void 0,_,this.state.variables,this.state.context,this)),await((F=(T=this.options).onSettled)==null?void 0:F.call(T,void 0,_,n,this.state.context)),_}finally{ze(this,Mn,ur).call(this,{type:"error",error:_})}}finally{q(this,Nt).runNext(this)}}},Dn=new WeakMap,Nt=new WeakMap,Zr=new WeakMap,Mn=new WeakSet,ur=function(n){const o=r=>{switch(n.type){case"failed":return{...r,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...r,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:n.error,failureCount:r.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=o(this.state),Ot.batch(()=>{q(this,Dn).forEach(r=>{r.onMutationUpdate(n)}),q(this,Nt).notify({mutation:this,type:"updated",action:n})})},Gy);function FL(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Zt,qi,Qy,AL=(Qy=class extends ca{constructor(n={}){super();De(this,Zt);De(this,qi);this.config=n,ye(this,Zt,new Map),ye(this,qi,Date.now())}build(n,o,r){const i=new LL({mutationCache:this,mutationId:++fa(this,qi)._,options:n.defaultMutationOptions(o),state:r});return this.add(i),i}add(n){const o=Da(n),r=q(this,Zt).get(o)??[];r.push(n),q(this,Zt).set(o,r),this.notify({type:"added",mutation:n})}remove(n){var r;const o=Da(n);if(q(this,Zt).has(o)){const i=(r=q(this,Zt).get(o))==null?void 0:r.filter(a=>a!==n);i&&(i.length===0?q(this,Zt).delete(o):q(this,Zt).set(o,i))}this.notify({type:"removed",mutation:n})}canRun(n){var r;const o=(r=q(this,Zt).get(Da(n)))==null?void 0:r.find(i=>i.state.status==="pending");return!o||o===n}runNext(n){var r;const o=(r=q(this,Zt).get(Da(n)))==null?void 0:r.find(i=>i!==n&&i.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}clear(){Ot.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}getAll(){return[...q(this,Zt).values()].flat()}find(n){const o={exact:!0,...n};return this.getAll().find(r=>Mv(o,r))}findAll(n={}){return this.getAll().filter(o=>Mv(n,o))}notify(n){Ot.batch(()=>{this.listeners.forEach(o=>{o(n)})})}resumePausedMutations(){const n=this.getAll().filter(o=>o.state.isPaused);return Ot.batch(()=>Promise.all(n.map(o=>o.continue().catch(sn))))}},Zt=new WeakMap,qi=new WeakMap,Qy);function Da(t){var n;return((n=t.options.scope)==null?void 0:n.id)??String(t.mutationId)}function zL(t){return{onFetch:(n,o)=>{const r=async()=>{var m,v,E,y,k;const i=n.options,a=(E=(v=(m=n.fetchOptions)==null?void 0:m.meta)==null?void 0:v.fetchMore)==null?void 0:E.direction,l=((y=n.state.data)==null?void 0:y.pages)||[],c=((k=n.state.data)==null?void 0:k.pageParams)||[],u={pages:[],pageParams:[]};let d=!1;const f=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(n.signal.aborted?d=!0:n.signal.addEventListener("abort",()=>{d=!0}),n.signal)})},g=n.options.queryFn&&n.options.queryFn!==Sp?n.options.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${n.options.queryHash}'`)),b=async(C,R,I)=>{if(d)return Promise.reject();if(R==null&&C.pages.length)return Promise.resolve(C);const T={queryKey:n.queryKey,pageParam:R,direction:I?"backward":"forward",meta:n.options.meta};f(T);const F=await g(T),{maxPages:_}=n.options,J=I?PL:$L;return{pages:J(C.pages,F,_),pageParams:J(C.pageParams,R,_)}};let h;if(a&&l.length){const C=a==="backward",R=C?HL:_v,I={pages:l,pageParams:c},T=R(i,I);h=await b(I,T,C)}else{h=await b(u,c[0]??i.initialPageParam);const C=t??l.length;for(let R=1;R<C;R++){const I=_v(i,h);h=await b(h,I)}}return h};n.options.persister?n.fetchFn=()=>{var i,a;return(a=(i=n.options).persister)==null?void 0:a.call(i,r,{queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},o)}:n.fetchFn=r}}}function _v(t,{pages:n,pageParams:o}){const r=n.length-1;return t.getNextPageParam(n[r],n,o[r],o)}function HL(t,{pages:n,pageParams:o}){var r;return(r=t.getPreviousPageParam)==null?void 0:r.call(t,n[0],n,o[0],o)}var ct,hr,mr,zo,Ho,br,Bo,Wo,Jy,BL=(Jy=class{constructor(t={}){De(this,ct);De(this,hr);De(this,mr);De(this,zo);De(this,Ho);De(this,br);De(this,Bo);De(this,Wo);ye(this,ct,t.queryCache||new _L),ye(this,hr,t.mutationCache||new AL),ye(this,mr,t.defaultOptions||{}),ye(this,zo,new Map),ye(this,Ho,new Map),ye(this,br,0)}mount(){fa(this,br)._++,q(this,br)===1&&(ye(this,Bo,Cp.subscribe(async t=>{t&&(await this.resumePausedMutations(),q(this,ct).onFocus())})),ye(this,Wo,Cl.subscribe(async t=>{t&&(await this.resumePausedMutations(),q(this,ct).onOnline())})))}unmount(){var t,n;fa(this,br)._--,q(this,br)===0&&((t=q(this,Bo))==null||t.call(this),ye(this,Bo,void 0),(n=q(this,Wo))==null||n.call(this),ye(this,Wo,void 0))}isFetching(t){return q(this,ct).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return q(this,hr).findAll({...t,status:"pending"}).length}getQueryData(t){var o;const n=this.defaultQueryOptions({queryKey:t});return(o=q(this,ct).get(n.queryHash))==null?void 0:o.state.data}ensureQueryData(t){const n=this.getQueryData(t.queryKey);if(n===void 0)return this.fetchQuery(t);{const o=this.defaultQueryOptions(t),r=q(this,ct).build(this,o);return t.revalidateIfStale&&r.isStaleByTime(o.staleTime)&&this.prefetchQuery(o),Promise.resolve(n)}}getQueriesData(t){return q(this,ct).findAll(t).map(({queryKey:n,state:o})=>{const r=o.data;return[n,r]})}setQueryData(t,n,o){const r=this.defaultQueryOptions({queryKey:t}),i=q(this,ct).get(r.queryHash),a=i==null?void 0:i.state.data,l=SL(n,a);if(l!==void 0)return q(this,ct).build(this,r).setData(l,{...o,manual:!0})}setQueriesData(t,n,o){return Ot.batch(()=>q(this,ct).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,n,o)]))}getQueryState(t){var o;const n=this.defaultQueryOptions({queryKey:t});return(o=q(this,ct).get(n.queryHash))==null?void 0:o.state}removeQueries(t){const n=q(this,ct);Ot.batch(()=>{n.findAll(t).forEach(o=>{n.remove(o)})})}resetQueries(t,n){const o=q(this,ct),r={type:"active",...t};return Ot.batch(()=>(o.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,n)))}cancelQueries(t={},n={}){const o={revert:!0,...n},r=Ot.batch(()=>q(this,ct).findAll(t).map(i=>i.cancel(o)));return Promise.all(r).then(sn).catch(sn)}invalidateQueries(t={},n={}){return Ot.batch(()=>{if(q(this,ct).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const o={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(o,n)})}refetchQueries(t={},n){const o={...n,cancelRefetch:(n==null?void 0:n.cancelRefetch)??!0},r=Ot.batch(()=>q(this,ct).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let a=i.fetch(void 0,o);return o.throwOnError||(a=a.catch(sn)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(sn)}fetchQuery(t){const n=this.defaultQueryOptions(t);n.retry===void 0&&(n.retry=!1);const o=q(this,ct).build(this,n);return o.isStaleByTime(n.staleTime)?o.fetch(n):Promise.resolve(o.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(sn).catch(sn)}fetchInfiniteQuery(t){return t.behavior=zL(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(sn).catch(sn)}resumePausedMutations(){return Cl.isOnline()?q(this,hr).resumePausedMutations():Promise.resolve()}getQueryCache(){return q(this,ct)}getMutationCache(){return q(this,hr)}getDefaultOptions(){return q(this,mr)}setDefaultOptions(t){ye(this,mr,t)}setQueryDefaults(t,n){q(this,zo).set(Hi(t),{queryKey:t,defaultOptions:n})}getQueryDefaults(t){const n=[...q(this,zo).values()];let o={};return n.forEach(r=>{Bi(t,r.queryKey)&&(o={...o,...r.defaultOptions})}),o}setMutationDefaults(t,n){q(this,Ho).set(Hi(t),{mutationKey:t,defaultOptions:n})}getMutationDefaults(t){const n=[...q(this,Ho).values()];let o={};return n.forEach(r=>{Bi(t,r.mutationKey)&&(o={...o,...r.defaultOptions})}),o}defaultQueryOptions(t){if(t._defaulted)return t;const n={...q(this,mr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return n.queryHash||(n.queryHash=Op(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.enabled!==!0&&n.queryFn===Sp&&(n.enabled=!1),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...q(this,mr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){q(this,ct).clear(),q(this,hr).clear()}},ct=new WeakMap,hr=new WeakMap,mr=new WeakMap,zo=new WeakMap,Ho=new WeakMap,br=new WeakMap,Bo=new WeakMap,Wo=new WeakMap,Jy),Lt,tt,Ui,Rt,Xr,Vo,Nn,Yi,qo,Uo,eo,to,vr,Yo,Ue,xi,tf,nf,rf,of,af,lf,sf,Z2,Zy,WL=(Zy=class extends ca{constructor(n,o){super();De(this,Ue);De(this,Lt);De(this,tt);De(this,Ui);De(this,Rt);De(this,Xr);De(this,Vo);De(this,Nn);De(this,Yi);De(this,qo);De(this,Uo);De(this,eo);De(this,to);De(this,vr);De(this,Yo,new Set);this.options=o,ye(this,Lt,n),ye(this,Nn,null),this.bindMethods(),this.setOptions(o)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(q(this,tt).addObserver(this),Lv(q(this,tt),this.options)?ze(this,Ue,xi).call(this):this.updateResult(),ze(this,Ue,of).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return cf(q(this,tt),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return cf(q(this,tt),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,ze(this,Ue,af).call(this),ze(this,Ue,lf).call(this),q(this,tt).removeObserver(this)}setOptions(n,o){const r=this.options,i=q(this,tt);if(this.options=q(this,Lt).defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");ze(this,Ue,sf).call(this),q(this,tt).setOptions(this.options),r._defaulted&&!Zd(this.options,r)&&q(this,Lt).getQueryCache().notify({type:"observerOptionsUpdated",query:q(this,tt),observer:this});const a=this.hasListeners();a&&Fv(q(this,tt),i,this.options,r)&&ze(this,Ue,xi).call(this),this.updateResult(o),a&&(q(this,tt)!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&ze(this,Ue,tf).call(this);const l=ze(this,Ue,nf).call(this);a&&(q(this,tt)!==i||this.options.enabled!==r.enabled||l!==q(this,vr))&&ze(this,Ue,rf).call(this,l)}getOptimisticResult(n){const o=q(this,Lt).getQueryCache().build(q(this,Lt),n),r=this.createResult(o,n);return qL(this,r)&&(ye(this,Rt,r),ye(this,Vo,this.options),ye(this,Xr,q(this,tt).state)),r}getCurrentResult(){return q(this,Rt)}trackResult(n,o){const r={};return Object.keys(n).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),o==null||o(i),n[i])})}),r}trackProp(n){q(this,Yo).add(n)}getCurrentQuery(){return q(this,tt)}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const o=q(this,Lt).defaultQueryOptions(n),r=q(this,Lt).getQueryCache().build(q(this,Lt),o);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,o))}fetch(n){return ze(this,Ue,xi).call(this,{...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),q(this,Rt)))}createResult(n,o){var F;const r=q(this,tt),i=this.options,a=q(this,Rt),l=q(this,Xr),c=q(this,Vo),d=n!==r?n.state:q(this,Ui),{state:f}=n;let g={...f},b=!1,h;if(o._optimisticResults){const _=this.hasListeners(),J=!_&&Lv(n,o),B=_&&Fv(n,r,o,i);(J||B)&&(g={...g,...J2(f.data,n.options)}),o._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:m,errorUpdatedAt:v,status:E}=g;if(o.select&&g.data!==void 0)if(a&&g.data===(l==null?void 0:l.data)&&o.select===q(this,Yi))h=q(this,qo);else try{ye(this,Yi,o.select),h=o.select(g.data),h=ef(a==null?void 0:a.data,h,o),ye(this,qo,h),ye(this,Nn,null)}catch(_){ye(this,Nn,_)}else h=g.data;if(o.placeholderData!==void 0&&h===void 0&&E==="pending"){let _;if(a!=null&&a.isPlaceholderData&&o.placeholderData===(c==null?void 0:c.placeholderData))_=a.data;else if(_=typeof o.placeholderData=="function"?o.placeholderData((F=q(this,Uo))==null?void 0:F.state.data,q(this,Uo)):o.placeholderData,o.select&&_!==void 0)try{_=o.select(_),ye(this,Nn,null)}catch(J){ye(this,Nn,J)}_!==void 0&&(E="success",h=ef(a==null?void 0:a.data,_,o),b=!0)}q(this,Nn)&&(m=q(this,Nn),h=q(this,qo),v=Date.now(),E="error");const y=g.fetchStatus==="fetching",k=E==="pending",C=E==="error",R=k&&y,I=h!==void 0;return{status:E,fetchStatus:g.fetchStatus,isPending:k,isSuccess:E==="success",isError:C,isInitialLoading:R,isLoading:R,data:h,dataUpdatedAt:g.dataUpdatedAt,error:m,errorUpdatedAt:v,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>d.dataUpdateCount||g.errorUpdateCount>d.errorUpdateCount,isFetching:y,isRefetching:y&&!k,isLoadingError:C&&!I,isPaused:g.fetchStatus==="paused",isPlaceholderData:b,isRefetchError:C&&I,isStale:$p(n,o),refetch:this.refetch}}updateResult(n){const o=q(this,Rt),r=this.createResult(q(this,tt),this.options);if(ye(this,Xr,q(this,tt).state),ye(this,Vo,this.options),q(this,Xr).data!==void 0&&ye(this,Uo,q(this,tt)),Zd(r,o))return;ye(this,Rt,r);const i={},a=()=>{if(!o)return!0;const{notifyOnChangeProps:l}=this.options,c=typeof l=="function"?l():l;if(c==="all"||!c&&!q(this,Yo).size)return!0;const u=new Set(c??q(this,Yo));return this.options.throwOnError&&u.add("error"),Object.keys(q(this,Rt)).some(d=>{const f=d;return q(this,Rt)[f]!==o[f]&&u.has(f)})};(n==null?void 0:n.listeners)!==!1&&a()&&(i.listeners=!0),ze(this,Ue,Z2).call(this,{...i,...n})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&ze(this,Ue,of).call(this)}},Lt=new WeakMap,tt=new WeakMap,Ui=new WeakMap,Rt=new WeakMap,Xr=new WeakMap,Vo=new WeakMap,Nn=new WeakMap,Yi=new WeakMap,qo=new WeakMap,Uo=new WeakMap,eo=new WeakMap,to=new WeakMap,vr=new WeakMap,Yo=new WeakMap,Ue=new WeakSet,xi=function(n){ze(this,Ue,sf).call(this);let o=q(this,tt).fetch(this.options,n);return n!=null&&n.throwOnError||(o=o.catch(sn)),o},tf=function(){if(ze(this,Ue,af).call(this),ri||q(this,Rt).isStale||!Jd(this.options.staleTime))return;const o=q2(q(this,Rt).dataUpdatedAt,this.options.staleTime)+1;ye(this,eo,setTimeout(()=>{q(this,Rt).isStale||this.updateResult()},o))},nf=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(q(this,tt)):this.options.refetchInterval)??!1},rf=function(n){ze(this,Ue,lf).call(this),ye(this,vr,n),!(ri||this.options.enabled===!1||!Jd(q(this,vr))||q(this,vr)===0)&&ye(this,to,setInterval(()=>{(this.options.refetchIntervalInBackground||Cp.isFocused())&&ze(this,Ue,xi).call(this)},q(this,vr)))},of=function(){ze(this,Ue,tf).call(this),ze(this,Ue,rf).call(this,ze(this,Ue,nf).call(this))},af=function(){q(this,eo)&&(clearTimeout(q(this,eo)),ye(this,eo,void 0))},lf=function(){q(this,to)&&(clearInterval(q(this,to)),ye(this,to,void 0))},sf=function(){const n=q(this,Lt).getQueryCache().build(q(this,Lt),this.options);if(n===q(this,tt))return;const o=q(this,tt);ye(this,tt,n),ye(this,Ui,n.state),this.hasListeners()&&(o==null||o.removeObserver(this),n.addObserver(this))},Z2=function(n){Ot.batch(()=>{n.listeners&&this.listeners.forEach(o=>{o(q(this,Rt))}),q(this,Lt).getQueryCache().notify({query:q(this,tt),type:"observerResultsUpdated"})})},Zy);function VL(t,n){return n.enabled!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&n.retryOnMount===!1)}function Lv(t,n){return VL(t,n)||t.state.data!==void 0&&cf(t,n,n.refetchOnMount)}function cf(t,n,o){if(n.enabled!==!1){const r=typeof o=="function"?o(t):o;return r==="always"||r!==!1&&$p(t,n)}return!1}function Fv(t,n,o,r){return(t!==n||r.enabled===!1)&&(!o.suspense||t.state.status!=="error")&&$p(t,o)}function $p(t,n){return n.enabled!==!1&&t.isStaleByTime(n.staleTime)}function qL(t,n){return!Zd(t.getCurrentResult(),n)}var X2=p.createContext(void 0),UL=t=>{const n=p.useContext(X2);if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},YL=({client:t,children:n})=>(p.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),U.jsx(X2.Provider,{value:t,children:n})),ej=p.createContext(!1),KL=()=>p.useContext(ej);ej.Provider;function GL(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var QL=p.createContext(GL()),JL=()=>p.useContext(QL);function ZL(t,n){return typeof t=="function"?t(...n):!!t}var XL=(t,n)=>{(t.suspense||t.throwOnError)&&(n.isReset()||(t.retryOnMount=!1))},eF=t=>{p.useEffect(()=>{t.clearReset()},[t])},tF=({result:t,errorResetBoundary:n,throwOnError:o,query:r})=>t.isError&&!n.isReset()&&!t.isFetching&&r&&ZL(o,[t.error,r]),nF=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},rF=(t,n)=>(t==null?void 0:t.suspense)&&n.isPending,oF=(t,n,o)=>n.fetchOptimistic(t).catch(()=>{o.clearReset()});function iF(t,n,o){const r=UL(),i=KL(),a=JL(),l=r.defaultQueryOptions(t);l._optimisticResults=i?"isRestoring":"optimistic",nF(l),XL(l,a),eF(a);const[c]=p.useState(()=>new n(r,l)),u=c.getOptimisticResult(l);if(p.useSyncExternalStore(p.useCallback(d=>{const f=i?()=>{}:c.subscribe(Ot.batchCalls(d));return c.updateResult(),f},[c,i]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),p.useEffect(()=>{c.setOptions(l,{listeners:!1})},[l,c]),rF(l,u))throw oF(l,c,a);if(tF({result:u,errorResetBoundary:a,throwOnError:l.throwOnError,query:r.getQueryCache().get(l.queryHash)}))throw u.error;return l.notifyOnChangeProps?u:c.trackResult(u)}function aF(t,n){return iF(t,WL)}const lF=({meta:t})=>fetch(`${t.endpoint}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(n=>{if(n.statusCode>=400)throw new Error(n.statusText);return n.json()}),Av="search-node-highlight",sF=3;function uf(t,n=document,o=[]){if(n.nodeType===Node.TEXT_NODE&&["SCRIPT","TITLE","STYLE"].indexOf(n.parentNode.tagName)===-1&&n.textContent.toLowerCase().includes(t.toLowerCase()))o.push(n);else if(n.childNodes&&n.childNodes.length>0)for(let r=0;r<n.childNodes.length;r++)uf(t,n.childNodes[r],o);return n.shadowRoot&&uf(t,n.shadowRoot,o),o}const cF=t=>{const n=document.querySelectorAll("*"),o=[document.body];return n.forEach(r=>{r.shadowRoot&&o.push(r.shadowRoot)}),o.map(r=>{const i=new MutationObserver(t);return i.observe(r,{attributes:!0,childList:!0,subtree:!0}),i})},uF=()=>{const t=kp(),n=S.useRef([]),[o,r]=S.useState(null);return S.useEffect(()=>{for(;n.current.length>0;){const{org:a,search:l}=n.current.pop();l.replaceWith(a)}if(!t||t.length<sF)return;uf(t).forEach(a=>{const l=a.textContent.toLowerCase().indexOf(t.toLowerCase()),c=document.createElement("span"),u=document.createElement("span");c.className=Av,u.className="bg-theme-warning/40 text-theme-high rounded-sm",u.append(a.textContent.slice(l,l+t.length)),c.append(a.textContent.slice(0,l)),c.append(u),c.append(a.textContent.slice(l+t.length)),n.current.push({org:a,search:c}),a.replaceWith(c)})},[o,t]),S.useEffect(()=>{const i=cF(a=>{for(const l of a)!l.type==="childList"||Array.from(l.addedNodes).concat(Array.from(l.removedNodes)).some(d=>{var f;return(f=d.classList)==null?void 0:f.contains(Av)})||r(Date.now())});return()=>{i.forEach(a=>a.disconnect())}},[r]),null},df=({name:t,value:n,nameLabel:o,valueLabel:r})=>{const{add:i}=ds();return U.jsx("div",{onClick:a=>a.stopPropagation(),children:U.jsx(x0,{pillKey:t,pillKeyLabel:o||t,pillValue:n,pillValueLabel:r||n,onClick:()=>{const a=t==="service"?`check:${t}`:t;i(a,n)}})})},dF=({constraints:t,slice:n})=>{const o=S.useMemo(()=>{const r={};return t.forEach(i=>i.violation_groups.forEach(a=>{var c,u;const l=(u=(c=a.pattern)==null?void 0:c.object_identity)==null?void 0:u.service;l&&(r[l]=(r[l]||0)+1)})),r},[t]);return U.jsxs(U.Fragment,{children:[Object.keys(o).map((r,i)=>(!n||i<n)&&U.jsx(df,{name:"service",value:r,valueLabel:`${r} | ${o[r]}`},i)),Object.keys(o).length>n&&"..."]})},fF={debug:{borderCss:"border-theme-default",icon:"errorOutline",iconCss:"text-theme-default",tooltip:"Debug: this violation is currently in the planning phase."},info:{borderCss:"border-theme-info",icon:"info",iconCss:"text-theme-info",tooltip:"Info: this violation contains details with low severity."},warning:{borderCss:"border-theme-warning",icon:"warning",iconCss:"text-theme-warning",tooltip:"Warning: this violation contains details with medium severity."},error:{borderCss:"border-theme-error",icon:"danger",iconCss:"text-theme-danger",tooltip:"Error: this violation contains details with high severity."}},pF=({severityData:t,title:n})=>U.jsxs(KI,{triggerEvent:"hover",children:[U.jsx(eT,{children:U.jsx(no,{icon:t.icon,title:n,color:t.iconCss})}),U.jsx(XI,{children:t.tooltip})]}),tj=({severities:t,border:n,className:o=""})=>{const r=S.useMemo(()=>!t||t.length===0?null:fF[t[0]],[t]);return r?U.jsx("div",{className:`${n?"border-l-2 h-full "+r.borderCss:""} ${o}`,children:U.jsx(pF,{severityData:r,title:t[0]})}):null},gF=({item:t})=>{var r,i;const n=jp(),{setDetailsViolationGroupKind:o}=us();return U.jsxs(Kr,{className:`cursor-pointer ${n===(t==null?void 0:t.kind)?"active":""}`,onClick:()=>n===t.kind?o(null):o(t==null?void 0:t.kind),children:[U.jsx(Xt,{className:"pl-0",children:U.jsx(tj,{severities:t==null?void 0:t.severities,className:"pl-5",border:!0})}),U.jsx(Xt,{className:"font-bold",children:t==null?void 0:t.kind}),U.jsx(Xt,{children:U.jsx(iw,{text:`${t==null?void 0:t.violationCount}`,className:""})}),U.jsx(Xt,{children:U.jsx(xn,{gap:"2",wrap:!0,children:U.jsx(dF,{constraints:t==null?void 0:t.constraints})})}),U.jsxs(Xt,{children:[U.jsx("div",{children:"Template:"}),U.jsx("div",{children:(r=t==null?void 0:t.constraints)==null?void 0:r.map((a,l)=>{var c;return((c=a.metadata)==null?void 0:c.template_source)&&U.jsx("div",{children:U.jsx("a",{href:a.metadata.template_source,target:"_blank",className:"hover:underline",rel:"noreferrer",children:U.jsxs(xn,{gap:"1.5",alignment:"center",children:[U.jsx(no,{icon:"openInNew",size:"16"}),a.name]})})},l)})}),U.jsx("div",{children:"Constraint:"}),U.jsx("div",{children:(i=t==null?void 0:t.constraints)==null?void 0:i.map((a,l)=>{var c;return((c=a.metadata)==null?void 0:c.constraint_source)&&U.jsx("div",{children:U.jsx("a",{href:a.metadata.constraint_source,target:"_blank",className:"hover:underline",rel:"noreferrer",children:U.jsxs(xn,{gap:"1.5",alignment:"center",children:[U.jsx(no,{icon:"openInNew",size:"16"}),a.name]})})},l)})})]})]})},hF=()=>{const t=kL();return U.jsx(U.Fragment,{children:(t==null?void 0:t.length)===0?U.jsx("div",{className:"p-4",children:"No violations found"}):U.jsx(U.Fragment,{children:U.jsxs(r0,{columns:5,cellVerticalAlignment:"top",className:"violations-list",children:[U.jsxs(Kr,{children:[U.jsx(wo,{children:U.jsx(no,{icon:"monitorHeart"})}),U.jsx(wo,{children:"Check Name"}),U.jsx(wo,{children:"Total"}),U.jsx(wo,{children:"Violations per Service"}),U.jsx(wo,{children:"Template/Constraint"})]}),t.map((n,o)=>U.jsx(gF,{item:n},o))]})})})},mF=()=>{var m;const[t,n]=p.useState(""),[o,r]=p.useState(""),[i,a]=p.useState(Date.now()),l=EL(),{add:c,removeAll:u,setSearchTerm:d}=ds(),f=kp(),g=Ep()||[],b=v=>{r(null),v!==null&&c(t,v),a(Date.now())},h=v=>{const E=setTimeout(()=>{d(v.target.value)},500);return()=>clearTimeout(E)};return U.jsxs(xn,{alignment:"center",gap:"8",distribution:"between",children:[U.jsxs(xn,{gap:"2",children:[U.jsxs(a0,{children:[U.jsx(Fu,{name:"category",className:"filter-label-select w-52 mb-0",label:"Select category",value:t,onChange:n,children:l.map((v,E)=>U.jsx(Au,{value:v.key,label:v.label},E))}),U.jsx(Fu,{name:"value",value:o,onChange:v=>b(v),disabled:!t,className:"filter-value-select w-80 bg-theme-background-lvl-0",children:(m=l.find(v=>v.key===t))==null?void 0:m.values.map((v,E)=>U.jsx(Au,{value:v},E))},i),U.jsx(Ii,{onClick:()=>t&&o&&c(t,o),icon:"filterAlt",className:"py-[0.3rem]"})]}),g.length>0&&U.jsx(Ii,{label:"Clear all",onClick:u,variant:"subdued"})]}),U.jsx(lw,{className:"w-96",value:f||"",onChange:v=>h(v),onClear:()=>d(null)})]})},bF=()=>{const t=Ep(),{remove:n}=ds();return t?U.jsx(xn,{wrap:!0,gap:"2",children:t.map(({key:o,value:r,label:i},a)=>{var l;return U.jsx(x0,{pillKey:(l=o==null?void 0:o.split(":"))==null?void 0:l[1],pillValue:r,pillKeyLabel:cs(i),closeable:!0,onClose:()=>n(o,r)},a)})}):null},vF=`
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`,nj=()=>U.jsxs(xn,{direction:"vertical",gap:"4",className:`filters ${vF}`,children:[U.jsx(mF,{}),U.jsx(bF,{})]});function zv(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,r=Array(n);o<n;o++)r[o]=t[o];return r}function yF(t){if(Array.isArray(t))return t}function wF(t,n,o){return(n=SF(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function xF(t,n){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var r,i,a,l,c=[],u=!0,d=!1;try{if(a=(o=o.call(t)).next,n===0){if(Object(o)!==o)return;u=!1}else for(;!(u=(r=a.call(o)).done)&&(c.push(r.value),c.length!==n);u=!0);}catch(f){d=!0,i=f}finally{try{if(!u&&o.return!=null&&(l=o.return(),Object(l)!==l))return}finally{if(d)throw i}}return c}}function jF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hv(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,r)}return o}function pc(t){for(var n,o=1;o<arguments.length;o++)n=arguments[o]==null?{}:arguments[o],o%2?Hv(Object(n),!0).forEach(function(r){wF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))});return t}function EF(t,n){if(t==null)return{};var o,r,i=kF(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function kF(t,n){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.includes(r))continue;o[r]=t[r]}return o}function $l(t,n){return yF(t)||xF(t,n)||CF(t,n)||jF()}function OF(t,n){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function SF(t){var n=OF(t,"string");return typeof n=="symbol"?n:n+""}function ff(t){"@babel/helpers - typeof";return ff=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ff(t)}function CF(t,n){if(t){if(typeof t=="string")return zv(t,n);var o={}.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?zv(t,n):void 0}}var $F=function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=p.useState(20),r=$l(o,2),i=r[0],a=r[1],l=p.useState(!1),c=$l(l,2),u=c[0],d=c[1],f=p.useRef(null),g=p.useRef();p.useEffect(function(){return function(){return clearTimeout(f.current)}},[]);var b=p.useMemo(function(){if(t)return t.slice(0,i)},[t,i]),h=p.useCallback(function(v){u||(g.current&&g.current.disconnect(),g.current=new IntersectionObserver(function(E){E[0].isIntersecting&&i<=t.length&&(clearTimeout(f.current),d(!0),f.current=setTimeout(function(){d(!1),a(function(y){return y+10})},(n==null?void 0:n.delay)||500))}),v&&g.current.observe(v))},[t,u]),m=p.useMemo(function(){return{map:function(v){var E=b.map(v);return S.createElement(S.Fragment,null,E,u&&(n==null?void 0:n.showLoading)!==!1&&S.createElement(S.Fragment,null,n!=null&&n.loadingObject?n.loadingObject:S.createElement("span",{id:"endlessScrollListLoading"},"Loading...")),(n==null?void 0:n.showRef)!==!1&&S.createElement(S.Fragment,null,n!=null&&n.refFunction?n.refFunction(h):S.createElement("span",{id:"endlessScrollListLastItemRef",ref:h})))}}},[b,h]);return{scrollListItems:b,iterator:m}},PF=["mock"],Fr=function(t){return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",Accept:"application/json"}})},Pn=function(t){return new Response(t,{status:404,headers:{"Content-Type":"application/json",Accept:"application/json"}})},st=null,Va=null,pf=null,xo=!1,IF=function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};if(n!=null&&n.debug&&(xo=!0),t===null)return xo&&console.log("fetchProxyInitDB:: Reset localDB"),void(st=null);if(st&&console.warn('fetchProxyInitDB:: localDB already initialized. This typically occurs when the component or hook, responsible for local database initialization, is accidentally re-rendered. If you intend to reset the local database, please ensure to set localDB to null first by invoking fetchProxyInitDB(null) before providing new data."'),ff(t)!=="object")throw new Error("It seems that jsonData is not a valid JSON object.");if(n!=null&&n.rewriteRoutes){xo&&console.log("fetchProxyInitDB:: rewriteRoutes::",n==null?void 0:n.rewriteRoutes);var o=Object.fromEntries(Object.entries(n==null?void 0:n.rewriteRoutes).filter(function(a){var l=$l(a,1),c=l[0];try{return new RegExp(c),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(c," for routes is not a valid regex expresion.")),!1}}));Va=o}if(n!=null&&n.rewriteResponses){var r=["GET","POST","PUT","DELETE","HEAD","OPTIONS"],i={};xo&&console.log("fetchProxyInitDB:: rewriteResponses::",n==null?void 0:n.rewriteResponses),Object.keys(n==null?void 0:n.rewriteResponses).forEach(function(a){if(!r.includes(a))return void console.warn("It seems that the given rewrite rule ".concat(a," for responses is not a valid method."));var l=n==null?void 0:n.rewriteResponses[a],c=Object.fromEntries(Object.entries(l).filter(function(u){var d=$l(u,1),f=d[0];try{return new RegExp(f),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(f," for responses is not a valid regex expresion.")),!1}}));i[a]=c}),pf=i}if(Object.keys(t).some(function(a){return!Array.isArray(t[a])}))throw new Error("It seems that jsonData is not a collection of key value pairs with values as arrays.");xo&&console.log("fetchProxyInitDB:: jsonData::",t),st=t},TF=function(t,n){var o,r=n.mock,i=EF(n,PF);if(r!==!0&&r!=="true")return console.log("fetchProxy:: real fetch for::",t),fetch(t,i);if(!st)throw new Error(`localDB not initialized.
    Please use fetchProxyInitDB(jsonData) to initialize the localDB.`);var a=null;try{a=new URL(t)}catch{throw new Error("Invalid URL: ".concat(t))}var l=n==null?void 0:n.method;l||(l="GET");var c=a.pathname,u=null;if((o=pf)!==null&&o!==void 0&&o[l]){var d=pf[l];for(var f in d){var g=new RegExp(f);if(g.test(c)){u=Fr(d[f]);break}}}if(Va)for(var b in Va){var h=new RegExp(b);if(h.test(c)){c=c.replace(h,Va[b]);break}}var m=c.split("/")[1],v=c.split("/")[2];xo&&console.log("fetchProxy:: mock fetch with method: ",l,", path: ",c,", object: ",m,", id: ",v,", customResponse: ",u);var E=n==null?void 0:n.body;return l==="GET"?new Promise(function(y){if(m){var k;if((k=st)!==null&&k!==void 0&&k[m]){var C;if(v){var R,I=(R=st)===null||R===void 0?void 0:R[m].findIndex(function(F){return F.id==v});if(0<=I){var T;return y(u||Fr((T=st)===null||T===void 0||(T=T[m])===null||T===void 0?void 0:T[I]))}return y(Pn("No id ".concat(v," for object ").concat(m," found")))}return y(u||Fr((C=st)===null||C===void 0?void 0:C[m]))}return y(Pn("No object ".concat(m," found")))}y(Fr(u||st))}):l==="POST"?new Promise(function(y){var k,C,R;m&&E||y(Pn("No object '".concat(m,"' or body '").concat(E,"' given"))),(k=st)!==null&&k!==void 0&&k[m]||y(Pn("No object '".concat(m,"' found")));var I=JSON.parse(E);if(I.id=1,0<((C=st)===null||C===void 0||(C=C[m])===null||C===void 0?void 0:C.length)){var T,F=(T=st)===null||T===void 0?void 0:T[m].reduce(function(_,J){return J.id>_.id?J:_});I.id=((F==null?void 0:F.id)||0)+1}(R=st)===null||R===void 0||R[m].push(I),y(u||Fr(I))}):l==="PUT"?new Promise(function(y){var k,C;m&&v||y(Pn("No object '".concat(m,"' or id '").concat(v,"' given"))),(k=st)!==null&&k!==void 0&&k[m]||y(Pn("No object '".concat(m,"' found")));var R=(C=st)===null||C===void 0?void 0:C[m].findIndex(function(I){return I.id==v});return 0<=R?(st[m][R]=pc(pc(pc({},st[m][R]),JSON.parse(E)),{},{id:st[m][R].id}),void y(u||Fr(st[m][R]))):y(Pn("No item with id '".concat(v,"' found")))}):l==="DELETE"?new Promise(function(y){var k,C;m&&v||y(Pn("No object '".concat(m,"' or id '").concat(v,"' given"))),(k=st)!==null&&k!==void 0&&k[m]||y(Pn("No object '".concat(m,"' found")));var R=(C=st)===null||C===void 0?void 0:C[m].findIndex(function(I){return I.id==v});return 0<=R?(st[m].splice(R,1),void y(u||Fr("Object deleted"))):y(Pn("No item with id '".concat(v,"' found")))}):void 0};function DF(t,n){const o={};return(t[t.length-1]===""?[...t,""]:t).join((o.padRight?" ":"")+","+(o.padLeft===!1?"":" ")).trim()}const MF=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,NF=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,RF={};function Bv(t,n){return(RF.jsx?NF:MF).test(t)}const _F=/[ \t\n\f\r]/g;function LF(t){return typeof t=="object"?t.type==="text"?Wv(t.value):!1:Wv(t)}function Wv(t){return t.replace(_F,"")===""}class ua{constructor(n,o,r){this.property=n,this.normal=o,r&&(this.space=r)}}ua.prototype.property={};ua.prototype.normal={};ua.prototype.space=null;function rj(t,n){const o={},r={};let i=-1;for(;++i<t.length;)Object.assign(o,t[i].property),Object.assign(r,t[i].normal);return new ua(o,r,n)}function gf(t){return t.toLowerCase()}class fn{constructor(n,o){this.property=n,this.attribute=o}}fn.prototype.space=null;fn.prototype.boolean=!1;fn.prototype.booleanish=!1;fn.prototype.overloadedBoolean=!1;fn.prototype.number=!1;fn.prototype.commaSeparated=!1;fn.prototype.spaceSeparated=!1;fn.prototype.commaOrSpaceSeparated=!1;fn.prototype.mustUseProperty=!1;fn.prototype.defined=!1;let FF=0;const Me=fo(),ht=fo(),oj=fo(),le=fo(),nt=fo(),Mo=fo(),Jt=fo();function fo(){return 2**++FF}const hf=Object.freeze(Object.defineProperty({__proto__:null,boolean:Me,booleanish:ht,commaOrSpaceSeparated:Jt,commaSeparated:Mo,number:le,overloadedBoolean:oj,spaceSeparated:nt},Symbol.toStringTag,{value:"Module"})),gc=Object.keys(hf);class Pp extends fn{constructor(n,o,r,i){let a=-1;if(super(n,o),Vv(this,"space",i),typeof r=="number")for(;++a<gc.length;){const l=gc[a];Vv(this,gc[a],(r&hf[l])===hf[l])}}}Pp.prototype.defined=!0;function Vv(t,n,o){o&&(t[n]=o)}const AF={}.hasOwnProperty;function li(t){const n={},o={};let r;for(r in t.properties)if(AF.call(t.properties,r)){const i=t.properties[r],a=new Pp(r,t.transform(t.attributes||{},r),i,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),n[r]=a,o[gf(r)]=r,o[gf(a.attribute)]=r}return new ua(n,o,t.space)}const ij=li({space:"xlink",transform(t,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),aj=li({space:"xml",transform(t,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function lj(t,n){return n in t?t[n]:n}function sj(t,n){return lj(t,n.toLowerCase())}const cj=li({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:sj,properties:{xmlns:null,xmlnsXLink:null}}),uj=li({transform(t,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:ht,ariaAutoComplete:null,ariaBusy:ht,ariaChecked:ht,ariaColCount:le,ariaColIndex:le,ariaColSpan:le,ariaControls:nt,ariaCurrent:null,ariaDescribedBy:nt,ariaDetails:null,ariaDisabled:ht,ariaDropEffect:nt,ariaErrorMessage:null,ariaExpanded:ht,ariaFlowTo:nt,ariaGrabbed:ht,ariaHasPopup:null,ariaHidden:ht,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:nt,ariaLevel:le,ariaLive:null,ariaModal:ht,ariaMultiLine:ht,ariaMultiSelectable:ht,ariaOrientation:null,ariaOwns:nt,ariaPlaceholder:null,ariaPosInSet:le,ariaPressed:ht,ariaReadOnly:ht,ariaRelevant:null,ariaRequired:ht,ariaRoleDescription:nt,ariaRowCount:le,ariaRowIndex:le,ariaRowSpan:le,ariaSelected:ht,ariaSetSize:le,ariaSort:null,ariaValueMax:le,ariaValueMin:le,ariaValueNow:le,ariaValueText:null,role:null}}),zF=li({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:sj,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Mo,acceptCharset:nt,accessKey:nt,action:null,allow:null,allowFullScreen:Me,allowPaymentRequest:Me,allowUserMedia:Me,alt:null,as:null,async:Me,autoCapitalize:null,autoComplete:nt,autoFocus:Me,autoPlay:Me,blocking:nt,capture:null,charSet:null,checked:Me,cite:null,className:nt,cols:le,colSpan:null,content:null,contentEditable:ht,controls:Me,controlsList:nt,coords:le|Mo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Me,defer:Me,dir:null,dirName:null,disabled:Me,download:oj,draggable:ht,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Me,formTarget:null,headers:nt,height:le,hidden:Me,high:le,href:null,hrefLang:null,htmlFor:nt,httpEquiv:nt,id:null,imageSizes:null,imageSrcSet:null,inert:Me,inputMode:null,integrity:null,is:null,isMap:Me,itemId:null,itemProp:nt,itemRef:nt,itemScope:Me,itemType:nt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Me,low:le,manifest:null,max:null,maxLength:le,media:null,method:null,min:null,minLength:le,multiple:Me,muted:Me,name:null,nonce:null,noModule:Me,noValidate:Me,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Me,optimum:le,pattern:null,ping:nt,placeholder:null,playsInline:Me,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Me,referrerPolicy:null,rel:nt,required:Me,reversed:Me,rows:le,rowSpan:le,sandbox:nt,scope:null,scoped:Me,seamless:Me,selected:Me,shadowRootClonable:Me,shadowRootDelegatesFocus:Me,shadowRootMode:null,shape:null,size:le,sizes:null,slot:null,span:le,spellCheck:ht,src:null,srcDoc:null,srcLang:null,srcSet:null,start:le,step:null,style:null,tabIndex:le,target:null,title:null,translate:null,type:null,typeMustMatch:Me,useMap:null,value:ht,width:le,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:nt,axis:null,background:null,bgColor:null,border:le,borderColor:null,bottomMargin:le,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Me,declare:Me,event:null,face:null,frame:null,frameBorder:null,hSpace:le,leftMargin:le,link:null,longDesc:null,lowSrc:null,marginHeight:le,marginWidth:le,noResize:Me,noHref:Me,noShade:Me,noWrap:Me,object:null,profile:null,prompt:null,rev:null,rightMargin:le,rules:null,scheme:null,scrolling:ht,standby:null,summary:null,text:null,topMargin:le,valueType:null,version:null,vAlign:null,vLink:null,vSpace:le,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Me,disableRemotePlayback:Me,prefix:null,property:null,results:le,security:null,unselectable:null}}),HF=li({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:lj,properties:{about:Jt,accentHeight:le,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:le,amplitude:le,arabicForm:null,ascent:le,attributeName:null,attributeType:null,azimuth:le,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:le,by:null,calcMode:null,capHeight:le,className:nt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:le,diffuseConstant:le,direction:null,display:null,dur:null,divisor:le,dominantBaseline:null,download:Me,dx:null,dy:null,edgeMode:null,editable:null,elevation:le,enableBackground:null,end:null,event:null,exponent:le,externalResourcesRequired:null,fill:null,fillOpacity:le,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Mo,g2:Mo,glyphName:Mo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:le,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:le,horizOriginX:le,horizOriginY:le,id:null,ideographic:le,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:le,k:le,k1:le,k2:le,k3:le,k4:le,kernelMatrix:Jt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:le,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:le,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:le,overlineThickness:le,paintOrder:null,panose1:null,path:null,pathLength:le,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:nt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:le,pointsAtY:le,pointsAtZ:le,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Jt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Jt,rev:Jt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Jt,requiredFeatures:Jt,requiredFonts:Jt,requiredFormats:Jt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:le,specularExponent:le,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:le,strikethroughThickness:le,string:null,stroke:null,strokeDashArray:Jt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:le,strokeOpacity:le,strokeWidth:null,style:null,surfaceScale:le,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Jt,tabIndex:le,tableValues:null,target:null,targetX:le,targetY:le,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Jt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:le,underlineThickness:le,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:le,values:null,vAlphabetic:le,vMathematical:le,vectorEffect:null,vHanging:le,vIdeographic:le,version:null,vertAdvY:le,vertOriginX:le,vertOriginY:le,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:le,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),BF=/^data[-\w.:]+$/i,qv=/-[a-z]/g,WF=/[A-Z]/g;function VF(t,n){const o=gf(n);let r=n,i=fn;if(o in t.normal)return t.property[t.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&BF.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(qv,UF);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!qv.test(a)){let l=a.replace(WF,qF);l.charAt(0)!=="-"&&(l="-"+l),n="data"+l}}i=Pp}return new i(r,n)}function qF(t){return"-"+t.toLowerCase()}function UF(t){return t.charAt(1).toUpperCase()}const YF={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},KF=rj([aj,ij,cj,uj,zF],"html"),Ip=rj([aj,ij,cj,uj,HF],"svg");function GF(t){return t.join(" ").trim()}var dj={},Uv=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,QF=/\n/g,JF=/^\s*/,ZF=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,XF=/^:\s*/,eA=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,tA=/^[;\s]*/,nA=/^\s+|\s+$/g,rA=`
`,Yv="/",Kv="*",Yr="",oA="comment",iA="declaration",aA=function(t,n){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];n=n||{};var o=1,r=1;function i(m){var v=m.match(QF);v&&(o+=v.length);var E=m.lastIndexOf(rA);r=~E?m.length-E:r+m.length}function a(){var m={line:o,column:r};return function(v){return v.position=new l(m),d(),v}}function l(m){this.start=m,this.end={line:o,column:r},this.source=n.source}l.prototype.content=t;function c(m){var v=new Error(n.source+":"+o+":"+r+": "+m);if(v.reason=m,v.filename=n.source,v.line=o,v.column=r,v.source=t,!n.silent)throw v}function u(m){var v=m.exec(t);if(v){var E=v[0];return i(E),t=t.slice(E.length),v}}function d(){u(JF)}function f(m){var v;for(m=m||[];v=g();)v!==!1&&m.push(v);return m}function g(){var m=a();if(!(Yv!=t.charAt(0)||Kv!=t.charAt(1))){for(var v=2;Yr!=t.charAt(v)&&(Kv!=t.charAt(v)||Yv!=t.charAt(v+1));)++v;if(v+=2,Yr===t.charAt(v-1))return c("End of comment missing");var E=t.slice(2,v-2);return r+=2,i(E),t=t.slice(v),r+=2,m({type:oA,comment:E})}}function b(){var m=a(),v=u(ZF);if(v){if(g(),!u(XF))return c("property missing ':'");var E=u(eA),y=m({type:iA,property:Gv(v[0].replace(Uv,Yr)),value:E?Gv(E[0].replace(Uv,Yr)):Yr});return u(tA),y}}function h(){var m=[];f(m);for(var v;v=b();)v!==!1&&(m.push(v),f(m));return m}return d(),h()};function Gv(t){return t?t.replace(nA,Yr):Yr}var lA=Qp&&Qp.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(dj,"__esModule",{value:!0});var Qv=dj.default=cA,sA=lA(aA);function cA(t,n){var o=null;if(!t||typeof t!="string")return o;var r=(0,sA.default)(t),i=typeof n=="function";return r.forEach(function(a){if(a.type==="declaration"){var l=a.property,c=a.value;i?n(l,c,a):c&&(o=o||{},o[l]=c)}}),o}const uA=Qv.default||Qv,fj=pj("end"),Tp=pj("start");function pj(t){return n;function n(o){const r=o&&o.position&&o.position[t]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function dA(t){const n=Tp(t),o=fj(t);if(n&&o)return{start:n,end:o}}function $i(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Jv(t.position):"start"in t||"end"in t?Jv(t):"line"in t||"column"in t?mf(t):""}function mf(t){return Zv(t&&t.line)+":"+Zv(t&&t.column)}function Jv(t){return mf(t&&t.start)+"-"+mf(t&&t.end)}function Zv(t){return t&&typeof t=="number"?t:1}class $t extends Error{constructor(n,o,r){super(),typeof o=="string"&&(r=o,o=void 0);let i="",a={},l=!1;if(o&&("line"in o&&"column"in o?a={place:o}:"start"in o&&"end"in o?a={place:o}:"type"in o?a={ancestors:[o],place:o.position}:a={...o}),typeof n=="string"?i=n:!a.cause&&n&&(l=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?a.ruleId=r:(a.source=r.slice(0,u),a.ruleId=r.slice(u+1))}if(!a.place&&a.ancestors&&a.ancestors){const u=a.ancestors[a.ancestors.length-1];u&&(a.place=u.position)}const c=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=c?c.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=c?c.line:void 0,this.name=$i(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=l&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}}$t.prototype.file="";$t.prototype.name="";$t.prototype.reason="";$t.prototype.message="";$t.prototype.stack="";$t.prototype.column=void 0;$t.prototype.line=void 0;$t.prototype.ancestors=void 0;$t.prototype.cause=void 0;$t.prototype.fatal=void 0;$t.prototype.place=void 0;$t.prototype.ruleId=void 0;$t.prototype.source=void 0;const Dp={}.hasOwnProperty,fA=new Map,pA=/[A-Z]/g,gA=/-([a-z])/g,hA=new Set(["table","tbody","thead","tfoot","tr"]),mA=new Set(["td","th"]),gj="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function bA(t,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const o=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=OA(o,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=kA(o,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:o,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Ip:KF,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=hj(i,t,void 0);return a&&typeof a!="string"?a:i.create(t,i.Fragment,{children:a||void 0},void 0)}function hj(t,n,o){if(n.type==="element")return vA(t,n,o);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return yA(t,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return xA(t,n,o);if(n.type==="mdxjsEsm")return wA(t,n);if(n.type==="root")return jA(t,n,o);if(n.type==="text")return EA(t,n)}function vA(t,n,o){const r=t.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ip,t.schema=i),t.ancestors.push(n);const a=bj(t,n.tagName,!1),l=SA(t,n);let c=Np(t,n);return hA.has(n.tagName)&&(c=c.filter(function(u){return typeof u=="string"?!LF(u):!0})),mj(t,l,a,n),Mp(l,c),t.ancestors.pop(),t.schema=r,t.create(n,a,l,o)}function yA(t,n){if(n.data&&n.data.estree&&t.evaluater){const r=n.data.estree.body[0];return r.type,t.evaluater.evaluateExpression(r.expression)}Wi(t,n.position)}function wA(t,n){if(n.data&&n.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(n.data.estree);Wi(t,n.position)}function xA(t,n,o){const r=t.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Ip,t.schema=i),t.ancestors.push(n);const a=n.name===null?t.Fragment:bj(t,n.name,!0),l=CA(t,n),c=Np(t,n);return mj(t,l,a,n),Mp(l,c),t.ancestors.pop(),t.schema=r,t.create(n,a,l,o)}function jA(t,n,o){const r={};return Mp(r,Np(t,n)),t.create(n,t.Fragment,r,o)}function EA(t,n){return n.value}function mj(t,n,o,r){typeof o!="string"&&o!==t.Fragment&&t.passNode&&(n.node=r)}function Mp(t,n){if(n.length>0){const o=n.length>1?n:n[0];o&&(t.children=o)}}function kA(t,n,o){return r;function r(i,a,l,c){const d=Array.isArray(l.children)?o:n;return c?d(a,l,c):d(a,l)}}function OA(t,n){return o;function o(r,i,a,l){const c=Array.isArray(a.children),u=Tp(r);return n(i,a,l,c,{columnNumber:u?u.column-1:void 0,fileName:t,lineNumber:u?u.line:void 0},void 0)}}function SA(t,n){const o={};let r,i;for(i in n.properties)if(i!=="children"&&Dp.call(n.properties,i)){const a=$A(t,i,n.properties[i]);if(a){const[l,c]=a;t.tableCellAlignToStyle&&l==="align"&&typeof c=="string"&&mA.has(n.tagName)?r=c:o[l]=c}}if(r){const a=o.style||(o.style={});a[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return o}function CA(t,n){const o={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&t.evaluater){const a=r.data.estree.body[0];a.type;const l=a.expression;l.type;const c=l.properties[0];c.type,Object.assign(o,t.evaluater.evaluateExpression(c.argument))}else Wi(t,n.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&t.evaluater){const c=r.value.data.estree.body[0];c.type,a=t.evaluater.evaluateExpression(c.expression)}else Wi(t,n.position);else a=r.value===null?!0:r.value;o[i]=a}return o}function Np(t,n){const o=[];let r=-1;const i=t.passKeys?new Map:fA;for(;++r<n.children.length;){const a=n.children[r];let l;if(t.passKeys){const u=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(u){const d=i.get(u)||0;l=u+"-"+d,i.set(u,d+1)}}const c=hj(t,a,l);c!==void 0&&o.push(c)}return o}function $A(t,n,o){const r=VF(t.schema,n);if(!(o==null||typeof o=="number"&&Number.isNaN(o))){if(Array.isArray(o)&&(o=r.commaSeparated?DF(o):GF(o)),r.property==="style"){let i=typeof o=="object"?o:PA(t,String(o));return t.stylePropertyNameCase==="css"&&(i=IA(i)),["style",i]}return[t.elementAttributeNameCase==="react"&&r.space?YF[r.property]||r.property:r.attribute,o]}}function PA(t,n){const o={};try{uA(n,r)}catch(i){if(!t.ignoreInvalidStyle){const a=i,l=new $t("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=gj+"#cannot-parse-style-attribute",l}}return o;function r(i,a){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(gA,DA)),o[l]=a}}function bj(t,n,o){let r;if(!o)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,l;for(;++a<i.length;){const c=Bv(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};l=l?{type:"MemberExpression",object:l,property:c,computed:!!(a&&c.type==="Literal"),optional:!1}:c}r=l}else r=Bv(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Dp.call(t.components,i)?t.components[i]:i}if(t.evaluater)return t.evaluater.evaluateExpression(r);Wi(t)}function Wi(t,n){const o=new $t("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw o.file=t.filePath||void 0,o.url=gj+"#cannot-handle-mdx-estrees-without-createevaluater",o}function IA(t){const n={};let o;for(o in t)Dp.call(t,o)&&(n[TA(o)]=t[o]);return n}function TA(t){let n=t.replace(pA,MA);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function DA(t,n){return n.toUpperCase()}function MA(t){return"-"+t.toLowerCase()}const hc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},NA={};function RA(t,n){const o=NA,r=typeof o.includeImageAlt=="boolean"?o.includeImageAlt:!0,i=typeof o.includeHtml=="boolean"?o.includeHtml:!0;return vj(t,r,i)}function vj(t,n,o){if(_A(t)){if("value"in t)return t.type==="html"&&!o?"":t.value;if(n&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Xv(t.children,n,o)}return Array.isArray(t)?Xv(t,n,o):""}function Xv(t,n,o){const r=[];let i=-1;for(;++i<t.length;)r[i]=vj(t[i],n,o);return r.join("")}function _A(t){return!!(t&&typeof t=="object")}const ey=document.createElement("i");function Rp(t){const n="&"+t+";";ey.innerHTML=n;const o=ey.textContent;return o.charCodeAt(o.length-1)===59&&t!=="semi"||o===n?!1:o}function nr(t,n,o,r){const i=t.length;let a=0,l;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,o=o>0?o:0,r.length<1e4)l=Array.from(r),l.unshift(n,o),t.splice(...l);else for(o&&t.splice(n,o);a<r.length;)l=r.slice(a,a+1e4),l.unshift(n,0),t.splice(...l),a+=1e4,n+=1e4}function cn(t,n){return t.length>0?(nr(t,t.length,0,n),t):n}const ty={}.hasOwnProperty;function LA(t){const n={};let o=-1;for(;++o<t.length;)FA(n,t[o]);return n}function FA(t,n){let o;for(o in n){const i=(ty.call(t,o)?t[o]:void 0)||(t[o]={}),a=n[o];let l;if(a)for(l in a){ty.call(i,l)||(i[l]=[]);const c=a[l];AA(i[l],Array.isArray(c)?c:c?[c]:[])}}}function AA(t,n){let o=-1;const r=[];for(;++o<n.length;)(n[o].add==="after"?t:r).push(n[o]);nr(t,0,0,r)}function yj(t,n){const o=Number.parseInt(t,n);return o<9||o===11||o>13&&o<32||o>126&&o<160||o>55295&&o<57344||o>64975&&o<65008||(o&65535)===65535||(o&65535)===65534||o>1114111?"�":String.fromCodePoint(o)}function No(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ln=Ir(/[A-Za-z]/),tn=Ir(/[\dA-Za-z]/),zA=Ir(/[#-'*+\--9=?A-Z^-~]/);function bf(t){return t!==null&&(t<32||t===127)}const vf=Ir(/\d/),HA=Ir(/[\dA-Fa-f]/),BA=Ir(/[!-/:-@[-`{-~]/);function Pe(t){return t!==null&&t<-2}function Ht(t){return t!==null&&(t<0||t===32)}function qe(t){return t===-2||t===-1||t===32}const WA=Ir(new RegExp("\\p{P}|\\p{S}","u")),VA=Ir(/\s/);function Ir(t){return n;function n(o){return o!==null&&o>-1&&t.test(String.fromCharCode(o))}}function si(t){const n=[];let o=-1,r=0,i=0;for(;++o<t.length;){const a=t.charCodeAt(o);let l="";if(a===37&&tn(t.charCodeAt(o+1))&&tn(t.charCodeAt(o+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(l=String.fromCharCode(a));else if(a>55295&&a<57344){const c=t.charCodeAt(o+1);a<56320&&c>56319&&c<57344?(l=String.fromCharCode(a,c),i=1):l="�"}else l=String.fromCharCode(a);l&&(n.push(t.slice(r,o),encodeURIComponent(l)),r=o+i+1,l=""),i&&(o+=i,i=0)}return n.join("")+t.slice(r)}function rt(t,n,o,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return l;function l(u){return qe(u)?(t.enter(o),c(u)):n(u)}function c(u){return qe(u)&&a++<i?(t.consume(u),c):(t.exit(o),n(u))}}const qA={tokenize:UA};function UA(t){const n=t.attempt(this.parser.constructs.contentInitial,r,i);let o;return n;function r(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),rt(t,n,"linePrefix")}function i(c){return t.enter("paragraph"),a(c)}function a(c){const u=t.enter("chunkText",{contentType:"text",previous:o});return o&&(o.next=u),o=u,l(c)}function l(c){if(c===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(c);return}return Pe(c)?(t.consume(c),t.exit("chunkText"),a):(t.consume(c),l)}}const YA={tokenize:KA},ny={tokenize:GA};function KA(t){const n=this,o=[];let r=0,i,a,l;return c;function c(C){if(r<o.length){const R=o[r];return n.containerState=R[1],t.attempt(R[0].continuation,u,d)(C)}return d(C)}function u(C){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&k();const R=n.events.length;let I=R,T;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){T=n.events[I][1].end;break}y(r);let F=R;for(;F<n.events.length;)n.events[F][1].end=Object.assign({},T),F++;return nr(n.events,I+1,0,n.events.slice(R)),n.events.length=F,d(C)}return c(C)}function d(C){if(r===o.length){if(!i)return b(C);if(i.currentConstruct&&i.currentConstruct.concrete)return m(C);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},t.check(ny,f,g)(C)}function f(C){return i&&k(),y(r),b(C)}function g(C){return n.parser.lazy[n.now().line]=r!==o.length,l=n.now().offset,m(C)}function b(C){return n.containerState={},t.attempt(ny,h,m)(C)}function h(C){return r++,o.push([n.currentConstruct,n.containerState]),b(C)}function m(C){if(C===null){i&&k(),y(0),t.consume(C);return}return i=i||n.parser.flow(n.now()),t.enter("chunkFlow",{contentType:"flow",previous:a,_tokenizer:i}),v(C)}function v(C){if(C===null){E(t.exit("chunkFlow"),!0),y(0),t.consume(C);return}return Pe(C)?(t.consume(C),E(t.exit("chunkFlow")),r=0,n.interrupt=void 0,c):(t.consume(C),v)}function E(C,R){const I=n.sliceStream(C);if(R&&I.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(I),n.parser.lazy[C.start.line]){let T=i.events.length;for(;T--;)if(i.events[T][1].start.offset<l&&(!i.events[T][1].end||i.events[T][1].end.offset>l))return;const F=n.events.length;let _=F,J,B;for(;_--;)if(n.events[_][0]==="exit"&&n.events[_][1].type==="chunkFlow"){if(J){B=n.events[_][1].end;break}J=!0}for(y(r),T=F;T<n.events.length;)n.events[T][1].end=Object.assign({},B),T++;nr(n.events,_+1,0,n.events.slice(F)),n.events.length=T}}function y(C){let R=o.length;for(;R-- >C;){const I=o[R];n.containerState=I[1],I[0].exit.call(n,t)}o.length=C}function k(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function GA(t,n,o){return rt(t,t.attempt(this.parser.constructs.document,n,o),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ry(t){if(t===null||Ht(t)||VA(t))return 1;if(WA(t))return 2}function _p(t,n,o){const r=[];let i=-1;for(;++i<t.length;){const a=t[i].resolveAll;a&&!r.includes(a)&&(n=a(n,o),r.push(a))}return n}const yf={name:"attention",tokenize:JA,resolveAll:QA};function QA(t,n){let o=-1,r,i,a,l,c,u,d,f;for(;++o<t.length;)if(t[o][0]==="enter"&&t[o][1].type==="attentionSequence"&&t[o][1]._close){for(r=o;r--;)if(t[r][0]==="exit"&&t[r][1].type==="attentionSequence"&&t[r][1]._open&&n.sliceSerialize(t[r][1]).charCodeAt(0)===n.sliceSerialize(t[o][1]).charCodeAt(0)){if((t[r][1]._close||t[o][1]._open)&&(t[o][1].end.offset-t[o][1].start.offset)%3&&!((t[r][1].end.offset-t[r][1].start.offset+t[o][1].end.offset-t[o][1].start.offset)%3))continue;u=t[r][1].end.offset-t[r][1].start.offset>1&&t[o][1].end.offset-t[o][1].start.offset>1?2:1;const g=Object.assign({},t[r][1].end),b=Object.assign({},t[o][1].start);oy(g,-u),oy(b,u),l={type:u>1?"strongSequence":"emphasisSequence",start:g,end:Object.assign({},t[r][1].end)},c={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[o][1].start),end:b},a={type:u>1?"strongText":"emphasisText",start:Object.assign({},t[r][1].end),end:Object.assign({},t[o][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},c.end)},t[r][1].end=Object.assign({},l.start),t[o][1].start=Object.assign({},c.end),d=[],t[r][1].end.offset-t[r][1].start.offset&&(d=cn(d,[["enter",t[r][1],n],["exit",t[r][1],n]])),d=cn(d,[["enter",i,n],["enter",l,n],["exit",l,n],["enter",a,n]]),d=cn(d,_p(n.parser.constructs.insideSpan.null,t.slice(r+1,o),n)),d=cn(d,[["exit",a,n],["enter",c,n],["exit",c,n],["exit",i,n]]),t[o][1].end.offset-t[o][1].start.offset?(f=2,d=cn(d,[["enter",t[o][1],n],["exit",t[o][1],n]])):f=0,nr(t,r-1,o-r+3,d),o=r+d.length-f-2;break}}for(o=-1;++o<t.length;)t[o][1].type==="attentionSequence"&&(t[o][1].type="data");return t}function JA(t,n){const o=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ry(r);let a;return l;function l(u){return a=u,t.enter("attentionSequence"),c(u)}function c(u){if(u===a)return t.consume(u),c;const d=t.exit("attentionSequence"),f=ry(u),g=!f||f===2&&i||o.includes(u),b=!i||i===2&&f||o.includes(r);return d._open=!!(a===42?g:g&&(i||!b)),d._close=!!(a===42?b:b&&(f||!g)),n(u)}}function oy(t,n){t.column+=n,t.offset+=n,t._bufferIndex+=n}const ZA={name:"autolink",tokenize:XA};function XA(t,n,o){let r=0;return i;function i(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(h){return Ln(h)?(t.consume(h),l):h===64?o(h):d(h)}function l(h){return h===43||h===45||h===46||tn(h)?(r=1,c(h)):d(h)}function c(h){return h===58?(t.consume(h),r=0,u):(h===43||h===45||h===46||tn(h))&&r++<32?(t.consume(h),c):(r=0,d(h))}function u(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),n):h===null||h===32||h===60||bf(h)?o(h):(t.consume(h),u)}function d(h){return h===64?(t.consume(h),f):zA(h)?(t.consume(h),d):o(h)}function f(h){return tn(h)?g(h):o(h)}function g(h){return h===46?(t.consume(h),r=0,f):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),n):b(h)}function b(h){if((h===45||tn(h))&&r++<63){const m=h===45?b:g;return t.consume(h),m}return o(h)}}const fs={tokenize:e8,partial:!0};function e8(t,n,o){return r;function r(a){return qe(a)?rt(t,i,"linePrefix")(a):i(a)}function i(a){return a===null||Pe(a)?n(a):o(a)}}const wj={name:"blockQuote",tokenize:t8,continuation:{tokenize:n8},exit:r8};function t8(t,n,o){const r=this;return i;function i(l){if(l===62){const c=r.containerState;return c.open||(t.enter("blockQuote",{_container:!0}),c.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(l),t.exit("blockQuoteMarker"),a}return o(l)}function a(l){return qe(l)?(t.enter("blockQuotePrefixWhitespace"),t.consume(l),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),n):(t.exit("blockQuotePrefix"),n(l))}}function n8(t,n,o){const r=this;return i;function i(l){return qe(l)?rt(t,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):a(l)}function a(l){return t.attempt(wj,n,o)(l)}}function r8(t){t.exit("blockQuote")}const xj={name:"characterEscape",tokenize:o8};function o8(t,n,o){return r;function r(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return BA(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),n):o(a)}}const jj={name:"characterReference",tokenize:i8};function i8(t,n,o){const r=this;let i=0,a,l;return c;function c(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),u}function u(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),d):(t.enter("characterReferenceValue"),a=31,l=tn,f(g))}function d(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,l=HA,f):(t.enter("characterReferenceValue"),a=7,l=vf,f(g))}function f(g){if(g===59&&i){const b=t.exit("characterReferenceValue");return l===tn&&!Rp(r.sliceSerialize(b))?o(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),n)}return l(g)&&i++<a?(t.consume(g),f):o(g)}}const iy={tokenize:l8,partial:!0},ay={name:"codeFenced",tokenize:a8,concrete:!0};function a8(t,n,o){const r=this,i={tokenize:I,partial:!0};let a=0,l=0,c;return u;function u(T){return d(T)}function d(T){const F=r.events[r.events.length-1];return a=F&&F[1].type==="linePrefix"?F[2].sliceSerialize(F[1],!0).length:0,c=T,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),f(T)}function f(T){return T===c?(l++,t.consume(T),f):l<3?o(T):(t.exit("codeFencedFenceSequence"),qe(T)?rt(t,g,"whitespace")(T):g(T))}function g(T){return T===null||Pe(T)?(t.exit("codeFencedFence"),r.interrupt?n(T):t.check(iy,v,R)(T)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),b(T))}function b(T){return T===null||Pe(T)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(T)):qe(T)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),rt(t,h,"whitespace")(T)):T===96&&T===c?o(T):(t.consume(T),b)}function h(T){return T===null||Pe(T)?g(T):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),m(T))}function m(T){return T===null||Pe(T)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(T)):T===96&&T===c?o(T):(t.consume(T),m)}function v(T){return t.attempt(i,R,E)(T)}function E(T){return t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),y}function y(T){return a>0&&qe(T)?rt(t,k,"linePrefix",a+1)(T):k(T)}function k(T){return T===null||Pe(T)?t.check(iy,v,R)(T):(t.enter("codeFlowValue"),C(T))}function C(T){return T===null||Pe(T)?(t.exit("codeFlowValue"),k(T)):(t.consume(T),C)}function R(T){return t.exit("codeFenced"),n(T)}function I(T,F,_){let J=0;return B;function B(A){return T.enter("lineEnding"),T.consume(A),T.exit("lineEnding"),W}function W(A){return T.enter("codeFencedFence"),qe(A)?rt(T,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):H(A)}function H(A){return A===c?(T.enter("codeFencedFenceSequence"),D(A)):_(A)}function D(A){return A===c?(J++,T.consume(A),D):J>=l?(T.exit("codeFencedFenceSequence"),qe(A)?rt(T,$,"whitespace")(A):$(A)):_(A)}function $(A){return A===null||Pe(A)?(T.exit("codeFencedFence"),F(A)):_(A)}}}function l8(t,n,o){const r=this;return i;function i(l){return l===null?o(l):(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a)}function a(l){return r.parser.lazy[r.now().line]?o(l):n(l)}}const mc={name:"codeIndented",tokenize:c8},s8={tokenize:u8,partial:!0};function c8(t,n,o){const r=this;return i;function i(d){return t.enter("codeIndented"),rt(t,a,"linePrefix",5)(d)}function a(d){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(d):o(d)}function l(d){return d===null?u(d):Pe(d)?t.attempt(s8,l,u)(d):(t.enter("codeFlowValue"),c(d))}function c(d){return d===null||Pe(d)?(t.exit("codeFlowValue"),l(d)):(t.consume(d),c)}function u(d){return t.exit("codeIndented"),n(d)}}function u8(t,n,o){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?o(l):Pe(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),i):rt(t,a,"linePrefix",5)(l)}function a(l){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):Pe(l)?i(l):o(l)}}const d8={name:"codeText",tokenize:g8,resolve:f8,previous:p8};function f8(t){let n=t.length-4,o=3,r,i;if((t[o][1].type==="lineEnding"||t[o][1].type==="space")&&(t[n][1].type==="lineEnding"||t[n][1].type==="space")){for(r=o;++r<n;)if(t[r][1].type==="codeTextData"){t[o][1].type="codeTextPadding",t[n][1].type="codeTextPadding",o+=2,n-=2;break}}for(r=o-1,n++;++r<=n;)i===void 0?r!==n&&t[r][1].type!=="lineEnding"&&(i=r):(r===n||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return t}function p8(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function g8(t,n,o){let r=0,i,a;return l;function l(g){return t.enter("codeText"),t.enter("codeTextSequence"),c(g)}function c(g){return g===96?(t.consume(g),r++,c):(t.exit("codeTextSequence"),u(g))}function u(g){return g===null?o(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),u):g===96?(a=t.enter("codeTextSequence"),i=0,f(g)):Pe(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),u):(t.enter("codeTextData"),d(g))}function d(g){return g===null||g===32||g===96||Pe(g)?(t.exit("codeTextData"),u(g)):(t.consume(g),d)}function f(g){return g===96?(t.consume(g),i++,f):i===r?(t.exit("codeTextSequence"),t.exit("codeText"),n(g)):(a.type="codeTextData",d(g))}}class h8{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,o){const r=o??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,o,r){const i=o||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&vi(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),vi(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),vi(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const o=this.left.splice(n,Number.POSITIVE_INFINITY);vi(this.right,o.reverse())}else{const o=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);vi(this.left,o.reverse())}}}function vi(t,n){let o=0;if(n.length<1e4)t.push(...n);else for(;o<n.length;)t.push(...n.slice(o,o+1e4)),o+=1e4}function Ej(t){const n={};let o=-1,r,i,a,l,c,u,d;const f=new h8(t);for(;++o<f.length;){for(;o in n;)o=n[o];if(r=f.get(o),o&&r[1].type==="chunkFlow"&&f.get(o-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,a=0,a<u.length&&u[a][1].type==="lineEndingBlank"&&(a+=2),a<u.length&&u[a][1].type==="content"))for(;++a<u.length&&u[a][1].type!=="content";)u[a][1].type==="chunkText"&&(u[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,m8(f,o)),o=n[o],d=!0);else if(r[1]._container){for(a=o,i=void 0;a--&&(l=f.get(a),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=a);i&&(r[1].end=Object.assign({},f.get(i)[1].start),c=f.slice(i,o),c.unshift(r),f.splice(i,o-i+1,c))}}return nr(t,0,Number.POSITIVE_INFINITY,f.slice(0)),!d}function m8(t,n){const o=t.get(n)[1],r=t.get(n)[2];let i=n-1;const a=[],l=o._tokenizer||r.parser[o.contentType](o.start),c=l.events,u=[],d={};let f,g,b=-1,h=o,m=0,v=0;const E=[v];for(;h;){for(;t.get(++i)[1]!==h;);a.push(i),h._tokenizer||(f=r.sliceStream(h),h.next||f.push(null),g&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),g=h,h=h.next}for(h=o;++b<c.length;)c[b][0]==="exit"&&c[b-1][0]==="enter"&&c[b][1].type===c[b-1][1].type&&c[b][1].start.line!==c[b][1].end.line&&(v=b+1,E.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):E.pop(),b=E.length;b--;){const y=c.slice(E[b],E[b+1]),k=a.pop();u.push([k,k+y.length-1]),t.splice(k,2,y)}for(u.reverse(),b=-1;++b<u.length;)d[m+u[b][0]]=m+u[b][1],m+=u[b][1]-u[b][0]-1;return d}const b8={tokenize:w8,resolve:y8},v8={tokenize:x8,partial:!0};function y8(t){return Ej(t),t}function w8(t,n){let o;return r;function r(c){return t.enter("content"),o=t.enter("chunkContent",{contentType:"content"}),i(c)}function i(c){return c===null?a(c):Pe(c)?t.check(v8,l,a)(c):(t.consume(c),i)}function a(c){return t.exit("chunkContent"),t.exit("content"),n(c)}function l(c){return t.consume(c),t.exit("chunkContent"),o.next=t.enter("chunkContent",{contentType:"content",previous:o}),o=o.next,i}}function x8(t,n,o){const r=this;return i;function i(l){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),rt(t,a,"linePrefix")}function a(l){if(l===null||Pe(l))return o(l);const c=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):t.interrupt(r.parser.constructs.flow,o,n)(l)}}function kj(t,n,o,r,i,a,l,c,u){const d=u||Number.POSITIVE_INFINITY;let f=0;return g;function g(y){return y===60?(t.enter(r),t.enter(i),t.enter(a),t.consume(y),t.exit(a),b):y===null||y===32||y===41||bf(y)?o(y):(t.enter(r),t.enter(l),t.enter(c),t.enter("chunkString",{contentType:"string"}),v(y))}function b(y){return y===62?(t.enter(a),t.consume(y),t.exit(a),t.exit(i),t.exit(r),n):(t.enter(c),t.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===62?(t.exit("chunkString"),t.exit(c),b(y)):y===null||y===60||Pe(y)?o(y):(t.consume(y),y===92?m:h)}function m(y){return y===60||y===62||y===92?(t.consume(y),h):h(y)}function v(y){return!f&&(y===null||y===41||Ht(y))?(t.exit("chunkString"),t.exit(c),t.exit(l),t.exit(r),n(y)):f<d&&y===40?(t.consume(y),f++,v):y===41?(t.consume(y),f--,v):y===null||y===32||y===40||bf(y)?o(y):(t.consume(y),y===92?E:v)}function E(y){return y===40||y===41||y===92?(t.consume(y),v):v(y)}}function Oj(t,n,o,r,i,a){const l=this;let c=0,u;return d;function d(h){return t.enter(r),t.enter(i),t.consume(h),t.exit(i),t.enter(a),f}function f(h){return c>999||h===null||h===91||h===93&&!u||h===94&&!c&&"_hiddenFootnoteSupport"in l.parser.constructs?o(h):h===93?(t.exit(a),t.enter(i),t.consume(h),t.exit(i),t.exit(r),n):Pe(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),f):(t.enter("chunkString",{contentType:"string"}),g(h))}function g(h){return h===null||h===91||h===93||Pe(h)||c++>999?(t.exit("chunkString"),f(h)):(t.consume(h),u||(u=!qe(h)),h===92?b:g)}function b(h){return h===91||h===92||h===93?(t.consume(h),c++,g):g(h)}}function Sj(t,n,o,r,i,a){let l;return c;function c(b){return b===34||b===39||b===40?(t.enter(r),t.enter(i),t.consume(b),t.exit(i),l=b===40?41:b,u):o(b)}function u(b){return b===l?(t.enter(i),t.consume(b),t.exit(i),t.exit(r),n):(t.enter(a),d(b))}function d(b){return b===l?(t.exit(a),u(l)):b===null?o(b):Pe(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),rt(t,d,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===l||b===null||Pe(b)?(t.exit("chunkString"),d(b)):(t.consume(b),b===92?g:f)}function g(b){return b===l||b===92?(t.consume(b),f):f(b)}}function Pi(t,n){let o;return r;function r(i){return Pe(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),o=!0,r):qe(i)?rt(t,r,o?"linePrefix":"lineSuffix")(i):n(i)}}const j8={name:"definition",tokenize:k8},E8={tokenize:O8,partial:!0};function k8(t,n,o){const r=this;let i;return a;function a(h){return t.enter("definition"),l(h)}function l(h){return Oj.call(r,t,c,o,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function c(h){return i=No(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),u):o(h)}function u(h){return Ht(h)?Pi(t,d)(h):d(h)}function d(h){return kj(t,f,o,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return t.attempt(E8,g,g)(h)}function g(h){return qe(h)?rt(t,b,"whitespace")(h):b(h)}function b(h){return h===null||Pe(h)?(t.exit("definition"),r.parser.defined.push(i),n(h)):o(h)}}function O8(t,n,o){return r;function r(c){return Ht(c)?Pi(t,i)(c):o(c)}function i(c){return Sj(t,a,o,"definitionTitle","definitionTitleMarker","definitionTitleString")(c)}function a(c){return qe(c)?rt(t,l,"whitespace")(c):l(c)}function l(c){return c===null||Pe(c)?n(c):o(c)}}const S8={name:"hardBreakEscape",tokenize:C8};function C8(t,n,o){return r;function r(a){return t.enter("hardBreakEscape"),t.consume(a),i}function i(a){return Pe(a)?(t.exit("hardBreakEscape"),n(a)):o(a)}}const $8={name:"headingAtx",tokenize:I8,resolve:P8};function P8(t,n){let o=t.length-2,r=3,i,a;return t[r][1].type==="whitespace"&&(r+=2),o-2>r&&t[o][1].type==="whitespace"&&(o-=2),t[o][1].type==="atxHeadingSequence"&&(r===o-1||o-4>r&&t[o-2][1].type==="whitespace")&&(o-=r+1===o?2:4),o>r&&(i={type:"atxHeadingText",start:t[r][1].start,end:t[o][1].end},a={type:"chunkText",start:t[r][1].start,end:t[o][1].end,contentType:"text"},nr(t,r,o-r+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])),t}function I8(t,n,o){let r=0;return i;function i(f){return t.enter("atxHeading"),a(f)}function a(f){return t.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&r++<6?(t.consume(f),l):f===null||Ht(f)?(t.exit("atxHeadingSequence"),c(f)):o(f)}function c(f){return f===35?(t.enter("atxHeadingSequence"),u(f)):f===null||Pe(f)?(t.exit("atxHeading"),n(f)):qe(f)?rt(t,c,"whitespace")(f):(t.enter("atxHeadingText"),d(f))}function u(f){return f===35?(t.consume(f),u):(t.exit("atxHeadingSequence"),c(f))}function d(f){return f===null||f===35||Ht(f)?(t.exit("atxHeadingText"),c(f)):(t.consume(f),d)}}const T8=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ly=["pre","script","style","textarea"],D8={name:"htmlFlow",tokenize:_8,resolveTo:R8,concrete:!0},M8={tokenize:F8,partial:!0},N8={tokenize:L8,partial:!0};function R8(t){let n=t.length;for(;n--&&!(t[n][0]==="enter"&&t[n][1].type==="htmlFlow"););return n>1&&t[n-2][1].type==="linePrefix"&&(t[n][1].start=t[n-2][1].start,t[n+1][1].start=t[n-2][1].start,t.splice(n-2,2)),t}function _8(t,n,o){const r=this;let i,a,l,c,u;return d;function d(N){return f(N)}function f(N){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(N),g}function g(N){return N===33?(t.consume(N),b):N===47?(t.consume(N),a=!0,v):N===63?(t.consume(N),i=3,r.interrupt?n:M):Ln(N)?(t.consume(N),l=String.fromCharCode(N),E):o(N)}function b(N){return N===45?(t.consume(N),i=2,h):N===91?(t.consume(N),i=5,c=0,m):Ln(N)?(t.consume(N),i=4,r.interrupt?n:M):o(N)}function h(N){return N===45?(t.consume(N),r.interrupt?n:M):o(N)}function m(N){const re="CDATA[";return N===re.charCodeAt(c++)?(t.consume(N),c===re.length?r.interrupt?n:H:m):o(N)}function v(N){return Ln(N)?(t.consume(N),l=String.fromCharCode(N),E):o(N)}function E(N){if(N===null||N===47||N===62||Ht(N)){const re=N===47,be=l.toLowerCase();return!re&&!a&&ly.includes(be)?(i=1,r.interrupt?n(N):H(N)):T8.includes(l.toLowerCase())?(i=6,re?(t.consume(N),y):r.interrupt?n(N):H(N)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?o(N):a?k(N):C(N))}return N===45||tn(N)?(t.consume(N),l+=String.fromCharCode(N),E):o(N)}function y(N){return N===62?(t.consume(N),r.interrupt?n:H):o(N)}function k(N){return qe(N)?(t.consume(N),k):B(N)}function C(N){return N===47?(t.consume(N),B):N===58||N===95||Ln(N)?(t.consume(N),R):qe(N)?(t.consume(N),C):B(N)}function R(N){return N===45||N===46||N===58||N===95||tn(N)?(t.consume(N),R):I(N)}function I(N){return N===61?(t.consume(N),T):qe(N)?(t.consume(N),I):C(N)}function T(N){return N===null||N===60||N===61||N===62||N===96?o(N):N===34||N===39?(t.consume(N),u=N,F):qe(N)?(t.consume(N),T):_(N)}function F(N){return N===u?(t.consume(N),u=null,J):N===null||Pe(N)?o(N):(t.consume(N),F)}function _(N){return N===null||N===34||N===39||N===47||N===60||N===61||N===62||N===96||Ht(N)?I(N):(t.consume(N),_)}function J(N){return N===47||N===62||qe(N)?C(N):o(N)}function B(N){return N===62?(t.consume(N),W):o(N)}function W(N){return N===null||Pe(N)?H(N):qe(N)?(t.consume(N),W):o(N)}function H(N){return N===45&&i===2?(t.consume(N),z):N===60&&i===1?(t.consume(N),V):N===62&&i===4?(t.consume(N),oe):N===63&&i===3?(t.consume(N),M):N===93&&i===5?(t.consume(N),X):Pe(N)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(M8,se,D)(N)):N===null||Pe(N)?(t.exit("htmlFlowData"),D(N)):(t.consume(N),H)}function D(N){return t.check(N8,$,se)(N)}function $(N){return t.enter("lineEnding"),t.consume(N),t.exit("lineEnding"),A}function A(N){return N===null||Pe(N)?D(N):(t.enter("htmlFlowData"),H(N))}function z(N){return N===45?(t.consume(N),M):H(N)}function V(N){return N===47?(t.consume(N),l="",Q):H(N)}function Q(N){if(N===62){const re=l.toLowerCase();return ly.includes(re)?(t.consume(N),oe):H(N)}return Ln(N)&&l.length<8?(t.consume(N),l+=String.fromCharCode(N),Q):H(N)}function X(N){return N===93?(t.consume(N),M):H(N)}function M(N){return N===62?(t.consume(N),oe):N===45&&i===2?(t.consume(N),M):H(N)}function oe(N){return N===null||Pe(N)?(t.exit("htmlFlowData"),se(N)):(t.consume(N),oe)}function se(N){return t.exit("htmlFlow"),n(N)}}function L8(t,n,o){const r=this;return i;function i(l){return Pe(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a):o(l)}function a(l){return r.parser.lazy[r.now().line]?o(l):n(l)}}function F8(t,n,o){return r;function r(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(fs,n,o)}}const A8={name:"htmlText",tokenize:z8};function z8(t,n,o){const r=this;let i,a,l;return c;function c(M){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(M),u}function u(M){return M===33?(t.consume(M),d):M===47?(t.consume(M),I):M===63?(t.consume(M),C):Ln(M)?(t.consume(M),_):o(M)}function d(M){return M===45?(t.consume(M),f):M===91?(t.consume(M),a=0,m):Ln(M)?(t.consume(M),k):o(M)}function f(M){return M===45?(t.consume(M),h):o(M)}function g(M){return M===null?o(M):M===45?(t.consume(M),b):Pe(M)?(l=g,V(M)):(t.consume(M),g)}function b(M){return M===45?(t.consume(M),h):g(M)}function h(M){return M===62?z(M):M===45?b(M):g(M)}function m(M){const oe="CDATA[";return M===oe.charCodeAt(a++)?(t.consume(M),a===oe.length?v:m):o(M)}function v(M){return M===null?o(M):M===93?(t.consume(M),E):Pe(M)?(l=v,V(M)):(t.consume(M),v)}function E(M){return M===93?(t.consume(M),y):v(M)}function y(M){return M===62?z(M):M===93?(t.consume(M),y):v(M)}function k(M){return M===null||M===62?z(M):Pe(M)?(l=k,V(M)):(t.consume(M),k)}function C(M){return M===null?o(M):M===63?(t.consume(M),R):Pe(M)?(l=C,V(M)):(t.consume(M),C)}function R(M){return M===62?z(M):C(M)}function I(M){return Ln(M)?(t.consume(M),T):o(M)}function T(M){return M===45||tn(M)?(t.consume(M),T):F(M)}function F(M){return Pe(M)?(l=F,V(M)):qe(M)?(t.consume(M),F):z(M)}function _(M){return M===45||tn(M)?(t.consume(M),_):M===47||M===62||Ht(M)?J(M):o(M)}function J(M){return M===47?(t.consume(M),z):M===58||M===95||Ln(M)?(t.consume(M),B):Pe(M)?(l=J,V(M)):qe(M)?(t.consume(M),J):z(M)}function B(M){return M===45||M===46||M===58||M===95||tn(M)?(t.consume(M),B):W(M)}function W(M){return M===61?(t.consume(M),H):Pe(M)?(l=W,V(M)):qe(M)?(t.consume(M),W):J(M)}function H(M){return M===null||M===60||M===61||M===62||M===96?o(M):M===34||M===39?(t.consume(M),i=M,D):Pe(M)?(l=H,V(M)):qe(M)?(t.consume(M),H):(t.consume(M),$)}function D(M){return M===i?(t.consume(M),i=void 0,A):M===null?o(M):Pe(M)?(l=D,V(M)):(t.consume(M),D)}function $(M){return M===null||M===34||M===39||M===60||M===61||M===96?o(M):M===47||M===62||Ht(M)?J(M):(t.consume(M),$)}function A(M){return M===47||M===62||Ht(M)?J(M):o(M)}function z(M){return M===62?(t.consume(M),t.exit("htmlTextData"),t.exit("htmlText"),n):o(M)}function V(M){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),Q}function Q(M){return qe(M)?rt(t,X,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(M):X(M)}function X(M){return t.enter("htmlTextData"),l(M)}}const Lp={name:"labelEnd",tokenize:U8,resolveTo:q8,resolveAll:V8},H8={tokenize:Y8},B8={tokenize:K8},W8={tokenize:G8};function V8(t){let n=-1;for(;++n<t.length;){const o=t[n][1];(o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd")&&(t.splice(n+1,o.type==="labelImage"?4:2),o.type="data",n++)}return t}function q8(t,n){let o=t.length,r=0,i,a,l,c;for(;o--;)if(i=t[o][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;t[o][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(t[o][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=o,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=o);const u={type:t[a][1].type==="labelLink"?"link":"image",start:Object.assign({},t[a][1].start),end:Object.assign({},t[t.length-1][1].end)},d={type:"label",start:Object.assign({},t[a][1].start),end:Object.assign({},t[l][1].end)},f={type:"labelText",start:Object.assign({},t[a+r+2][1].end),end:Object.assign({},t[l-2][1].start)};return c=[["enter",u,n],["enter",d,n]],c=cn(c,t.slice(a+1,a+r+3)),c=cn(c,[["enter",f,n]]),c=cn(c,_p(n.parser.constructs.insideSpan.null,t.slice(a+r+4,l-3),n)),c=cn(c,[["exit",f,n],t[l-2],t[l-1],["exit",d,n]]),c=cn(c,t.slice(l+1)),c=cn(c,[["exit",u,n]]),nr(t,a,t.length,c),t}function U8(t,n,o){const r=this;let i=r.events.length,a,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return c;function c(b){return a?a._inactive?g(b):(l=r.parser.defined.includes(No(r.sliceSerialize({start:a.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(b),t.exit("labelMarker"),t.exit("labelEnd"),u):o(b)}function u(b){return b===40?t.attempt(H8,f,l?f:g)(b):b===91?t.attempt(B8,f,l?d:g)(b):l?f(b):g(b)}function d(b){return t.attempt(W8,f,g)(b)}function f(b){return n(b)}function g(b){return a._balanced=!0,o(b)}}function Y8(t,n,o){return r;function r(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),i}function i(g){return Ht(g)?Pi(t,a)(g):a(g)}function a(g){return g===41?f(g):kj(t,l,c,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function l(g){return Ht(g)?Pi(t,u)(g):f(g)}function c(g){return o(g)}function u(g){return g===34||g===39||g===40?Sj(t,d,o,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):f(g)}function d(g){return Ht(g)?Pi(t,f)(g):f(g)}function f(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),n):o(g)}}function K8(t,n,o){const r=this;return i;function i(c){return Oj.call(r,t,a,l,"reference","referenceMarker","referenceString")(c)}function a(c){return r.parser.defined.includes(No(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(c):o(c)}function l(c){return o(c)}}function G8(t,n,o){return r;function r(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),n):o(a)}}const Q8={name:"labelStartImage",tokenize:J8,resolveAll:Lp.resolveAll};function J8(t,n,o){const r=this;return i;function i(c){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(c),t.exit("labelImageMarker"),a}function a(c){return c===91?(t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelImage"),l):o(c)}function l(c){return c===94&&"_hiddenFootnoteSupport"in r.parser.constructs?o(c):n(c)}}const Z8={name:"labelStartLink",tokenize:X8,resolveAll:Lp.resolveAll};function X8(t,n,o){const r=this;return i;function i(l){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?o(l):n(l)}}const bc={name:"lineEnding",tokenize:ez};function ez(t,n){return o;function o(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),rt(t,n,"linePrefix")}}const qa={name:"thematicBreak",tokenize:tz};function tz(t,n,o){let r=0,i;return a;function a(d){return t.enter("thematicBreak"),l(d)}function l(d){return i=d,c(d)}function c(d){return d===i?(t.enter("thematicBreakSequence"),u(d)):r>=3&&(d===null||Pe(d))?(t.exit("thematicBreak"),n(d)):o(d)}function u(d){return d===i?(t.consume(d),r++,u):(t.exit("thematicBreakSequence"),qe(d)?rt(t,c,"whitespace")(d):c(d))}}const _t={name:"list",tokenize:oz,continuation:{tokenize:iz},exit:lz},nz={tokenize:sz,partial:!0},rz={tokenize:az,partial:!0};function oz(t,n,o){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return c;function c(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:vf(h)){if(r.containerState.type||(r.containerState.type=m,t.enter(m,{_container:!0})),m==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(qa,o,d)(h):d(h);if(!r.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),u(h)}return o(h)}function u(h){return vf(h)&&++l<10?(t.consume(h),u):(!r.interrupt||l<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),d(h)):o(h)}function d(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,t.check(fs,r.interrupt?o:f,t.attempt(nz,b,g))}function f(h){return r.containerState.initialBlankLine=!0,a++,b(h)}function g(h){return qe(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),b):o(h)}function b(h){return r.containerState.size=a+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,n(h)}}function iz(t,n,o){const r=this;return r.containerState._closeFlow=void 0,t.check(fs,i,a);function i(c){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,rt(t,n,"listItemIndent",r.containerState.size+1)(c)}function a(c){return r.containerState.furtherBlankLines||!qe(c)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(c)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(rz,n,l)(c))}function l(c){return r.containerState._closeFlow=!0,r.interrupt=void 0,rt(t,t.attempt(_t,n,o),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c)}}function az(t,n,o){const r=this;return rt(t,i,"listItemIndent",r.containerState.size+1);function i(a){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?n(a):o(a)}}function lz(t){t.exit(this.containerState.type)}function sz(t,n,o){const r=this;return rt(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const l=r.events[r.events.length-1];return!qe(a)&&l&&l[1].type==="listItemPrefixWhitespace"?n(a):o(a)}}const sy={name:"setextUnderline",tokenize:uz,resolveTo:cz};function cz(t,n){let o=t.length,r,i,a;for(;o--;)if(t[o][0]==="enter"){if(t[o][1].type==="content"){r=o;break}t[o][1].type==="paragraph"&&(i=o)}else t[o][1].type==="content"&&t.splice(o,1),!a&&t[o][1].type==="definition"&&(a=o);const l={type:"setextHeading",start:Object.assign({},t[i][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[i][1].type="setextHeadingText",a?(t.splice(i,0,["enter",l,n]),t.splice(a+1,0,["exit",t[r][1],n]),t[r][1].end=Object.assign({},t[a][1].end)):t[r][1]=l,t.push(["exit",l,n]),t}function uz(t,n,o){const r=this;let i;return a;function a(d){let f=r.events.length,g;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){g=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||g)?(t.enter("setextHeadingLine"),i=d,l(d)):o(d)}function l(d){return t.enter("setextHeadingLineSequence"),c(d)}function c(d){return d===i?(t.consume(d),c):(t.exit("setextHeadingLineSequence"),qe(d)?rt(t,u,"lineSuffix")(d):u(d))}function u(d){return d===null||Pe(d)?(t.exit("setextHeadingLine"),n(d)):o(d)}}const dz={tokenize:fz};function fz(t){const n=this,o=t.attempt(fs,r,t.attempt(this.parser.constructs.flowInitial,i,rt(t,t.attempt(this.parser.constructs.flow,i,t.attempt(b8,i)),"linePrefix")));return o;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),n.currentConstruct=void 0,o}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),n.currentConstruct=void 0,o}}const pz={resolveAll:$j()},gz=Cj("string"),hz=Cj("text");function Cj(t){return{tokenize:n,resolveAll:$j(t==="text"?mz:void 0)};function n(o){const r=this,i=this.parser.constructs[t],a=o.attempt(i,l,c);return l;function l(f){return d(f)?a(f):c(f)}function c(f){if(f===null){o.consume(f);return}return o.enter("data"),o.consume(f),u}function u(f){return d(f)?(o.exit("data"),a(f)):(o.consume(f),u)}function d(f){if(f===null)return!0;const g=i[f];let b=-1;if(g)for(;++b<g.length;){const h=g[b];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function $j(t){return n;function n(o,r){let i=-1,a;for(;++i<=o.length;)a===void 0?o[i]&&o[i][1].type==="data"&&(a=i,i++):(!o[i]||o[i][1].type!=="data")&&(i!==a+2&&(o[a][1].end=o[i-1][1].end,o.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(o,r):o}}function mz(t,n){let o=0;for(;++o<=t.length;)if((o===t.length||t[o][1].type==="lineEnding")&&t[o-1][1].type==="data"){const r=t[o-1][1],i=n.sliceStream(r);let a=i.length,l=-1,c=0,u;for(;a--;){const d=i[a];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)c++,l--;if(l)break;l=-1}else if(d===-2)u=!0,c++;else if(d!==-1){a++;break}}if(c){const d={type:o===t.length||u||c<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-c,offset:r.end.offset-c,_index:r.start._index+a,_bufferIndex:a?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},d.start),r.start.offset===r.end.offset?Object.assign(r,d):(t.splice(o,0,["enter",d,n],["exit",d,n]),o+=2)}o++}return t}function bz(t,n,o){let r=Object.assign(o?Object.assign({},o):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},a=[];let l=[],c=[];const u={consume:k,enter:C,exit:R,attempt:F(I),check:F(T),interrupt:F(T,{interrupt:!0})},d={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:h,sliceSerialize:b,now:m,defineSkip:v,write:g};let f=n.tokenize.call(d,u);return n.resolveAll&&a.push(n),d;function g(W){return l=cn(l,W),E(),l[l.length-1]!==null?[]:(_(n,0),d.events=_p(a,d.events,d),d.events)}function b(W,H){return yz(h(W),H)}function h(W){return vz(l,W)}function m(){const{line:W,column:H,offset:D,_index:$,_bufferIndex:A}=r;return{line:W,column:H,offset:D,_index:$,_bufferIndex:A}}function v(W){i[W.line]=W.column,B()}function E(){let W;for(;r._index<l.length;){const H=l[r._index];if(typeof H=="string")for(W=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===W&&r._bufferIndex<H.length;)y(H.charCodeAt(r._bufferIndex));else y(H)}}function y(W){f=f(W)}function k(W){Pe(W)?(r.line++,r.column=1,r.offset+=W===-3?2:1,B()):W!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),d.previous=W}function C(W,H){const D=H||{};return D.type=W,D.start=m(),d.events.push(["enter",D,d]),c.push(D),D}function R(W){const H=c.pop();return H.end=m(),d.events.push(["exit",H,d]),H}function I(W,H){_(W,H.from)}function T(W,H){H.restore()}function F(W,H){return D;function D($,A,z){let V,Q,X,M;return Array.isArray($)?se($):"tokenize"in $?se([$]):oe($);function oe(Ce){return _e;function _e(ie){const me=ie!==null&&Ce[ie],ve=ie!==null&&Ce.null,Be=[...Array.isArray(me)?me:me?[me]:[],...Array.isArray(ve)?ve:ve?[ve]:[]];return se(Be)(ie)}}function se(Ce){return V=Ce,Q=0,Ce.length===0?z:N(Ce[Q])}function N(Ce){return _e;function _e(ie){return M=J(),X=Ce,Ce.partial||(d.currentConstruct=Ce),Ce.name&&d.parser.constructs.disable.null.includes(Ce.name)?be():Ce.tokenize.call(H?Object.assign(Object.create(d),H):d,u,re,be)(ie)}}function re(Ce){return W(X,M),A}function be(Ce){return M.restore(),++Q<V.length?N(V[Q]):z}}}function _(W,H){W.resolveAll&&!a.includes(W)&&a.push(W),W.resolve&&nr(d.events,H,d.events.length-H,W.resolve(d.events.slice(H),d)),W.resolveTo&&(d.events=W.resolveTo(d.events,d))}function J(){const W=m(),H=d.previous,D=d.currentConstruct,$=d.events.length,A=Array.from(c);return{restore:z,from:$};function z(){r=W,d.previous=H,d.currentConstruct=D,d.events.length=$,c=A,B()}}function B(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function vz(t,n){const o=n.start._index,r=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let l;if(o===i)l=[t[o].slice(r,a)];else{if(l=t.slice(o,i),r>-1){const c=l[0];typeof c=="string"?l[0]=c.slice(r):l.shift()}a>0&&l.push(t[i].slice(0,a))}return l}function yz(t,n){let o=-1;const r=[];let i;for(;++o<t.length;){const a=t[o];let l;if(typeof a=="string")l=a;else switch(a){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=n?" ":"	";break}case-1:{if(!n&&i)continue;l=" ";break}default:l=String.fromCharCode(a)}i=a===-2,r.push(l)}return r.join("")}const wz={42:_t,43:_t,45:_t,48:_t,49:_t,50:_t,51:_t,52:_t,53:_t,54:_t,55:_t,56:_t,57:_t,62:wj},xz={91:j8},jz={[-2]:mc,[-1]:mc,32:mc},Ez={35:$8,42:qa,45:[sy,qa],60:D8,61:sy,95:qa,96:ay,126:ay},kz={38:jj,92:xj},Oz={[-5]:bc,[-4]:bc,[-3]:bc,33:Q8,38:jj,42:yf,60:[ZA,A8],91:Z8,92:[S8,xj],93:Lp,95:yf,96:d8},Sz={null:[yf,pz]},Cz={null:[42,95]},$z={null:[]},Pz=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Cz,contentInitial:xz,disable:$z,document:wz,flow:Ez,flowInitial:jz,insideSpan:Sz,string:kz,text:Oz},Symbol.toStringTag,{value:"Module"}));function Iz(t){const o=LA([Pz,...(t||{}).extensions||[]]),r={defined:[],lazy:{},constructs:o,content:i(qA),document:i(YA),flow:i(dz),string:i(gz),text:i(hz)};return r;function i(a){return l;function l(c){return bz(r,a,c)}}}function Tz(t){for(;!Ej(t););return t}const cy=/[\0\t\n\r]/g;function Dz(){let t=1,n="",o=!0,r;return i;function i(a,l,c){const u=[];let d,f,g,b,h;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(l||void 0).decode(a)),g=0,n="",o&&(a.charCodeAt(0)===65279&&g++,o=void 0);g<a.length;){if(cy.lastIndex=g,d=cy.exec(a),b=d&&d.index!==void 0?d.index:a.length,h=a.charCodeAt(b),!d){n=a.slice(g);break}if(h===10&&g===b&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),g<b&&(u.push(a.slice(g,b)),t+=b-g),h){case 0:{u.push(65533),t++;break}case 9:{for(f=Math.ceil(t/4)*4,u.push(-2);t++<f;)u.push(-1);break}case 10:{u.push(-4),t=1;break}default:r=!0,t=1}g=b+1}return c&&(r&&u.push(-5),n&&u.push(n),u.push(null)),u}}const Mz=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Nz(t){return t.replace(Mz,Rz)}function Rz(t,n,o){if(n)return n;if(o.charCodeAt(0)===35){const i=o.charCodeAt(1),a=i===120||i===88;return yj(o.slice(a?2:1),a?16:10)}return Rp(o)||t}const Pj={}.hasOwnProperty;function _z(t,n,o){return typeof n!="string"&&(o=n,n=void 0),Lz(o)(Tz(Iz(o).document().write(Dz()(t,n,!0))))}function Lz(t){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Dr),autolinkProtocol:J,autolinkEmail:J,atxHeading:a(Un),blockQuote:a(ve),characterEscape:J,characterReference:J,codeFenced:a(Be),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:a(Be,l),codeText:a(at,l),codeTextData:J,data:J,codeFlowValue:J,definition:a(Xe),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:a(Vt),hardBreakEscape:a(Tr),hardBreakTrailing:a(Tr),htmlFlow:a(or,l),htmlFlowData:J,htmlText:a(or,l),htmlTextData:J,image:a(ir),label:l,link:a(Dr),listItem:a(Yn),listItemValue:b,listOrdered:a(Mr,g),listUnordered:a(Mr),paragraph:a(Nr),reference:N,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:a(Un),strong:a(go),thematicBreak:a(ar)},exit:{atxHeading:u(),atxHeadingSequence:I,autolink:u(),autolinkEmail:me,autolinkProtocol:ie,blockQuote:u(),characterEscapeValue:B,characterReferenceMarkerHexadecimal:be,characterReferenceMarkerNumeric:be,characterReferenceValue:Ce,characterReference:_e,codeFenced:u(E),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:B,codeIndented:u(y),codeText:u(A),codeTextData:B,data:B,definition:u(),definitionDestinationString:R,definitionLabelString:k,definitionTitleString:C,emphasis:u(),hardBreakEscape:u(H),hardBreakTrailing:u(H),htmlFlow:u(D),htmlFlowData:B,htmlText:u($),htmlTextData:B,image:u(V),label:X,labelText:Q,lineEnding:W,link:u(z),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:re,resourceDestinationString:M,resourceTitleString:oe,resource:se,setextHeading:u(_),setextHeadingLineSequence:F,setextHeadingText:T,strong:u(),thematicBreak:u()}};Ij(n,(t||{}).mdastExtensions||[]);const o={};return r;function r(ee){let ce={type:"root",children:[]};const $e={stack:[ce],tokenStack:[],config:n,enter:c,exit:d,buffer:l,resume:f,data:o},Le=[];let He=-1;for(;++He<ee.length;)if(ee[He][1].type==="listOrdered"||ee[He][1].type==="listUnordered")if(ee[He][0]==="enter")Le.push(He);else{const Pt=Le.pop();He=i(ee,Pt,He)}for(He=-1;++He<ee.length;){const Pt=n[ee[He][0]];Pj.call(Pt,ee[He][1].type)&&Pt[ee[He][1].type].call(Object.assign({sliceSerialize:ee[He][2].sliceSerialize},$e),ee[He][1])}if($e.tokenStack.length>0){const Pt=$e.tokenStack[$e.tokenStack.length-1];(Pt[1]||uy).call($e,void 0,Pt[0])}for(ce.position={start:cr(ee.length>0?ee[0][1].start:{line:1,column:1,offset:0}),end:cr(ee.length>0?ee[ee.length-2][1].end:{line:1,column:1,offset:0})},He=-1;++He<n.transforms.length;)ce=n.transforms[He](ce)||ce;return ce}function i(ee,ce,$e){let Le=ce-1,He=-1,Pt=!1,pn,Ae,gn,hn;for(;++Le<=$e;){const Fe=ee[Le];switch(Fe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Fe[0]==="enter"?He++:He--,hn=void 0;break}case"lineEndingBlank":{Fe[0]==="enter"&&(pn&&!hn&&!He&&!gn&&(gn=Le),hn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:hn=void 0}if(!He&&Fe[0]==="enter"&&Fe[1].type==="listItemPrefix"||He===-1&&Fe[0]==="exit"&&(Fe[1].type==="listUnordered"||Fe[1].type==="listOrdered")){if(pn){let It=Le;for(Ae=void 0;It--;){const kt=ee[It];if(kt[1].type==="lineEnding"||kt[1].type==="lineEndingBlank"){if(kt[0]==="exit")continue;Ae&&(ee[Ae][1].type="lineEndingBlank",Pt=!0),kt[1].type="lineEnding",Ae=It}else if(!(kt[1].type==="linePrefix"||kt[1].type==="blockQuotePrefix"||kt[1].type==="blockQuotePrefixWhitespace"||kt[1].type==="blockQuoteMarker"||kt[1].type==="listItemIndent"))break}gn&&(!Ae||gn<Ae)&&(pn._spread=!0),pn.end=Object.assign({},Ae?ee[Ae][1].start:Fe[1].end),ee.splice(Ae||Le,0,["exit",pn,Fe[2]]),Le++,$e++}if(Fe[1].type==="listItemPrefix"){const It={type:"listItem",_spread:!1,start:Object.assign({},Fe[1].start),end:void 0};pn=It,ee.splice(Le,0,["enter",It,Fe[2]]),Le++,$e++,gn=void 0,hn=!0}}}return ee[ce][1]._spread=Pt,$e}function a(ee,ce){return $e;function $e(Le){c.call(this,ee(Le),Le),ce&&ce.call(this,Le)}}function l(){this.stack.push({type:"fragment",children:[]})}function c(ee,ce,$e){this.stack[this.stack.length-1].children.push(ee),this.stack.push(ee),this.tokenStack.push([ce,$e]),ee.position={start:cr(ce.start),end:void 0}}function u(ee){return ce;function ce($e){ee&&ee.call(this,$e),d.call(this,$e)}}function d(ee,ce){const $e=this.stack.pop(),Le=this.tokenStack.pop();if(Le)Le[0].type!==ee.type&&(ce?ce.call(this,ee,Le[0]):(Le[1]||uy).call(this,ee,Le[0]));else throw new Error("Cannot close `"+ee.type+"` ("+$i({start:ee.start,end:ee.end})+"): it’s not open");$e.position.end=cr(ee.end)}function f(){return RA(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(ee){if(this.data.expectingFirstListItemValue){const ce=this.stack[this.stack.length-2];ce.start=Number.parseInt(this.sliceSerialize(ee),10),this.data.expectingFirstListItemValue=void 0}}function h(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.lang=ee}function m(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.meta=ee}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.value=ee.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.value=ee.replace(/(\r?\n|\r)$/g,"")}function k(ee){const ce=this.resume(),$e=this.stack[this.stack.length-1];$e.label=ce,$e.identifier=No(this.sliceSerialize(ee)).toLowerCase()}function C(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.title=ee}function R(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.url=ee}function I(ee){const ce=this.stack[this.stack.length-1];if(!ce.depth){const $e=this.sliceSerialize(ee).length;ce.depth=$e}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function F(ee){const ce=this.stack[this.stack.length-1];ce.depth=this.sliceSerialize(ee).codePointAt(0)===61?1:2}function _(){this.data.setextHeadingSlurpLineEnding=void 0}function J(ee){const $e=this.stack[this.stack.length-1].children;let Le=$e[$e.length-1];(!Le||Le.type!=="text")&&(Le=ho(),Le.position={start:cr(ee.start),end:void 0},$e.push(Le)),this.stack.push(Le)}function B(ee){const ce=this.stack.pop();ce.value+=this.sliceSerialize(ee),ce.position.end=cr(ee.end)}function W(ee){const ce=this.stack[this.stack.length-1];if(this.data.atHardBreak){const $e=ce.children[ce.children.length-1];$e.position.end=cr(ee.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(ce.type)&&(J.call(this,ee),B.call(this,ee))}function H(){this.data.atHardBreak=!0}function D(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.value=ee}function $(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.value=ee}function A(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.value=ee}function z(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=ce,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function V(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=ce,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function Q(ee){const ce=this.sliceSerialize(ee),$e=this.stack[this.stack.length-2];$e.label=Nz(ce),$e.identifier=No(ce).toLowerCase()}function X(){const ee=this.stack[this.stack.length-1],ce=this.resume(),$e=this.stack[this.stack.length-1];if(this.data.inReference=!0,$e.type==="link"){const Le=ee.children;$e.children=Le}else $e.alt=ce}function M(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.url=ee}function oe(){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.title=ee}function se(){this.data.inReference=void 0}function N(){this.data.referenceType="collapsed"}function re(ee){const ce=this.resume(),$e=this.stack[this.stack.length-1];$e.label=ce,$e.identifier=No(this.sliceSerialize(ee)).toLowerCase(),this.data.referenceType="full"}function be(ee){this.data.characterReferenceType=ee.type}function Ce(ee){const ce=this.sliceSerialize(ee),$e=this.data.characterReferenceType;let Le;$e?(Le=yj(ce,$e==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Le=Rp(ce);const He=this.stack[this.stack.length-1];He.value+=Le}function _e(ee){const ce=this.stack.pop();ce.position.end=cr(ee.end)}function ie(ee){B.call(this,ee);const ce=this.stack[this.stack.length-1];ce.url=this.sliceSerialize(ee)}function me(ee){B.call(this,ee);const ce=this.stack[this.stack.length-1];ce.url="mailto:"+this.sliceSerialize(ee)}function ve(){return{type:"blockquote",children:[]}}function Be(){return{type:"code",lang:null,meta:null,value:""}}function at(){return{type:"inlineCode",value:""}}function Xe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Vt(){return{type:"emphasis",children:[]}}function Un(){return{type:"heading",depth:0,children:[]}}function Tr(){return{type:"break"}}function or(){return{type:"html",value:""}}function ir(){return{type:"image",title:null,url:"",alt:null}}function Dr(){return{type:"link",title:null,url:"",children:[]}}function Mr(ee){return{type:"list",ordered:ee.type==="listOrdered",start:null,spread:ee._spread,children:[]}}function Yn(ee){return{type:"listItem",spread:ee._spread,checked:null,children:[]}}function Nr(){return{type:"paragraph",children:[]}}function go(){return{type:"strong",children:[]}}function ho(){return{type:"text",value:""}}function ar(){return{type:"thematicBreak"}}}function cr(t){return{line:t.line,column:t.column,offset:t.offset}}function Ij(t,n){let o=-1;for(;++o<n.length;){const r=n[o];Array.isArray(r)?Ij(t,r):Fz(t,r)}}function Fz(t,n){let o;for(o in n)if(Pj.call(n,o))switch(o){case"canContainEols":{const r=n[o];r&&t[o].push(...r);break}case"transforms":{const r=n[o];r&&t[o].push(...r);break}case"enter":case"exit":{const r=n[o];r&&Object.assign(t[o],r);break}}}function uy(t,n){throw t?new Error("Cannot close `"+t.type+"` ("+$i({start:t.start,end:t.end})+"): a different token (`"+n.type+"`, "+$i({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+$i({start:n.start,end:n.end})+") is still open")}function Az(t){const n=this;n.parser=o;function o(r){return _z(r,{...n.data("settings"),...t,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function zz(t,n){const o={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(n),!0)};return t.patch(n,o),t.applyData(n,o)}function Hz(t,n){const o={type:"element",tagName:"br",properties:{},children:[]};return t.patch(n,o),[t.applyData(n,o),{type:"text",value:`
`}]}function Bz(t,n){const o=n.value?n.value+`
`:"",r={};n.lang&&(r.className=["language-"+n.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:o}]};return n.meta&&(i.data={meta:n.meta}),t.patch(n,i),i=t.applyData(n,i),i={type:"element",tagName:"pre",properties:{},children:[i]},t.patch(n,i),i}function Wz(t,n){const o={type:"element",tagName:"del",properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function Vz(t,n){const o={type:"element",tagName:"em",properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function qz(t,n){const o=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=si(r.toLowerCase()),a=t.footnoteOrder.indexOf(r);let l,c=t.footnoteCounts.get(r);c===void 0?(c=0,t.footnoteOrder.push(r),l=t.footnoteOrder.length):l=a+1,c+=1,t.footnoteCounts.set(r,c);const u={type:"element",tagName:"a",properties:{href:"#"+o+"fn-"+i,id:o+"fnref-"+i+(c>1?"-"+c:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};t.patch(n,u);const d={type:"element",tagName:"sup",properties:{},children:[u]};return t.patch(n,d),t.applyData(n,d)}function Uz(t,n){const o={type:"element",tagName:"h"+n.depth,properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function Yz(t,n){if(t.options.allowDangerousHtml){const o={type:"raw",value:n.value};return t.patch(n,o),t.applyData(n,o)}}function Tj(t,n){const o=n.referenceType;let r="]";if(o==="collapsed"?r+="[]":o==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=t.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function Kz(t,n){const o=String(n.identifier).toUpperCase(),r=t.definitionById.get(o);if(!r)return Tj(t,n);const i={src:si(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return t.patch(n,a),t.applyData(n,a)}function Gz(t,n){const o={src:si(n.url)};n.alt!==null&&n.alt!==void 0&&(o.alt=n.alt),n.title!==null&&n.title!==void 0&&(o.title=n.title);const r={type:"element",tagName:"img",properties:o,children:[]};return t.patch(n,r),t.applyData(n,r)}function Qz(t,n){const o={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};t.patch(n,o);const r={type:"element",tagName:"code",properties:{},children:[o]};return t.patch(n,r),t.applyData(n,r)}function Jz(t,n){const o=String(n.identifier).toUpperCase(),r=t.definitionById.get(o);if(!r)return Tj(t,n);const i={href:si(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:t.all(n)};return t.patch(n,a),t.applyData(n,a)}function Zz(t,n){const o={href:si(n.url)};n.title!==null&&n.title!==void 0&&(o.title=n.title);const r={type:"element",tagName:"a",properties:o,children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function Xz(t,n,o){const r=t.all(n),i=o?eH(o):Dj(n),a={},l=[];if(typeof n.checked=="boolean"){const f=r[0];let g;f&&f.type==="element"&&f.tagName==="p"?g=f:(g={type:"element",tagName:"p",properties:{},children:[]},r.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let c=-1;for(;++c<r.length;){const f=r[c];(i||c!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?l.push(...f.children):l.push(f)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:a,children:l};return t.patch(n,d),t.applyData(n,d)}function eH(t){let n=!1;if(t.type==="list"){n=t.spread||!1;const o=t.children;let r=-1;for(;!n&&++r<o.length;)n=Dj(o[r])}return n}function Dj(t){const n=t.spread;return n??t.children.length>1}function tH(t,n){const o={},r=t.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(o.start=n.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){o.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:o,children:t.wrap(r,!0)};return t.patch(n,a),t.applyData(n,a)}function nH(t,n){const o={type:"element",tagName:"p",properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function rH(t,n){const o={type:"root",children:t.wrap(t.all(n))};return t.patch(n,o),t.applyData(n,o)}function oH(t,n){const o={type:"element",tagName:"strong",properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function iH(t,n){const o=t.all(n),r=o.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:t.wrap([r],!0)};t.patch(n.children[0],l),i.push(l)}if(o.length>0){const l={type:"element",tagName:"tbody",properties:{},children:t.wrap(o,!0)},c=Tp(n.children[1]),u=fj(n.children[n.children.length-1]);c&&u&&(l.position={start:c,end:u}),i.push(l)}const a={type:"element",tagName:"table",properties:{},children:t.wrap(i,!0)};return t.patch(n,a),t.applyData(n,a)}function aH(t,n,o){const r=o?o.children:void 0,a=(r?r.indexOf(n):1)===0?"th":"td",l=o&&o.type==="table"?o.align:void 0,c=l?l.length:n.children.length;let u=-1;const d=[];for(;++u<c;){const g=n.children[u],b={},h=l?l[u]:void 0;h&&(b.align=h);let m={type:"element",tagName:a,properties:b,children:[]};g&&(m.children=t.all(g),t.patch(g,m),m=t.applyData(g,m)),d.push(m)}const f={type:"element",tagName:"tr",properties:{},children:t.wrap(d,!0)};return t.patch(n,f),t.applyData(n,f)}function lH(t,n){const o={type:"element",tagName:"td",properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}const dy=9,fy=32;function sH(t){const n=String(t),o=/\r?\n|\r/g;let r=o.exec(n),i=0;const a=[];for(;r;)a.push(py(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=o.exec(n);return a.push(py(n.slice(i),i>0,!1)),a.join("")}function py(t,n,o){let r=0,i=t.length;if(n){let a=t.codePointAt(r);for(;a===dy||a===fy;)r++,a=t.codePointAt(r)}if(o){let a=t.codePointAt(i-1);for(;a===dy||a===fy;)i--,a=t.codePointAt(i-1)}return i>r?t.slice(r,i):""}function cH(t,n){const o={type:"text",value:sH(String(n.value))};return t.patch(n,o),t.applyData(n,o)}function uH(t,n){const o={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(n,o),t.applyData(n,o)}const dH={blockquote:zz,break:Hz,code:Bz,delete:Wz,emphasis:Vz,footnoteReference:qz,heading:Uz,html:Yz,imageReference:Kz,image:Gz,inlineCode:Qz,linkReference:Jz,link:Zz,listItem:Xz,list:tH,paragraph:nH,root:rH,strong:oH,table:iH,tableCell:lH,tableRow:aH,text:cH,thematicBreak:uH,toml:Ma,yaml:Ma,definition:Ma,footnoteDefinition:Ma};function Ma(){}const Mj=-1,ps=0,Pl=1,Il=2,Fp=3,Ap=4,zp=5,Hp=6,Nj=7,Rj=8,gy=typeof self=="object"?self:globalThis,fH=(t,n)=>{const o=(i,a)=>(t.set(a,i),i),r=i=>{if(t.has(i))return t.get(i);const[a,l]=n[i];switch(a){case ps:case Mj:return o(l,i);case Pl:{const c=o([],i);for(const u of l)c.push(r(u));return c}case Il:{const c=o({},i);for(const[u,d]of l)c[r(u)]=r(d);return c}case Fp:return o(new Date(l),i);case Ap:{const{source:c,flags:u}=l;return o(new RegExp(c,u),i)}case zp:{const c=o(new Map,i);for(const[u,d]of l)c.set(r(u),r(d));return c}case Hp:{const c=o(new Set,i);for(const u of l)c.add(r(u));return c}case Nj:{const{name:c,message:u}=l;return o(new gy[c](u),i)}case Rj:return o(BigInt(l),i);case"BigInt":return o(Object(BigInt(l)),i)}return o(new gy[a](l),i)};return r},hy=t=>fH(new Map,t)(0),yo="",{toString:pH}={},{keys:gH}=Object,yi=t=>{const n=typeof t;if(n!=="object"||!t)return[ps,n];const o=pH.call(t).slice(8,-1);switch(o){case"Array":return[Pl,yo];case"Object":return[Il,yo];case"Date":return[Fp,yo];case"RegExp":return[Ap,yo];case"Map":return[zp,yo];case"Set":return[Hp,yo]}return o.includes("Array")?[Pl,o]:o.includes("Error")?[Nj,o]:[Il,o]},Na=([t,n])=>t===ps&&(n==="function"||n==="symbol"),hH=(t,n,o,r)=>{const i=(l,c)=>{const u=r.push(l)-1;return o.set(c,u),u},a=l=>{if(o.has(l))return o.get(l);let[c,u]=yi(l);switch(c){case ps:{let f=l;switch(u){case"bigint":c=Rj,f=l.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+u);f=null;break;case"undefined":return i([Mj],l)}return i([c,f],l)}case Pl:{if(u)return i([u,[...l]],l);const f=[],g=i([c,f],l);for(const b of l)f.push(a(b));return g}case Il:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(n&&"toJSON"in l)return a(l.toJSON());const f=[],g=i([c,f],l);for(const b of gH(l))(t||!Na(yi(l[b])))&&f.push([a(b),a(l[b])]);return g}case Fp:return i([c,l.toISOString()],l);case Ap:{const{source:f,flags:g}=l;return i([c,{source:f,flags:g}],l)}case zp:{const f=[],g=i([c,f],l);for(const[b,h]of l)(t||!(Na(yi(b))||Na(yi(h))))&&f.push([a(b),a(h)]);return g}case Hp:{const f=[],g=i([c,f],l);for(const b of l)(t||!Na(yi(b)))&&f.push(a(b));return g}}const{message:d}=l;return i([c,{name:u,message:d}],l)};return a},my=(t,{json:n,lossy:o}={})=>{const r=[];return hH(!(n||o),!!n,new Map,r)(t),r},Tl=typeof structuredClone=="function"?(t,n)=>n&&("json"in n||"lossy"in n)?hy(my(t,n)):structuredClone(t):(t,n)=>hy(my(t,n));function mH(t,n){const o=[{type:"text",value:"↩"}];return n>1&&o.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),o}function bH(t,n){return"Back to reference "+(t+1)+(n>1?"-"+n:"")}function vH(t){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=t.options.footnoteBackContent||mH,r=t.options.footnoteBackLabel||bH,i=t.options.footnoteLabel||"Footnotes",a=t.options.footnoteLabelTagName||"h2",l=t.options.footnoteLabelProperties||{className:["sr-only"]},c=[];let u=-1;for(;++u<t.footnoteOrder.length;){const d=t.footnoteById.get(t.footnoteOrder[u]);if(!d)continue;const f=t.all(d),g=String(d.identifier).toUpperCase(),b=si(g.toLowerCase());let h=0;const m=[],v=t.footnoteCounts.get(g);for(;v!==void 0&&++h<=v;){m.length>0&&m.push({type:"text",value:" "});let k=typeof o=="string"?o:o(u,h);typeof k=="string"&&(k={type:"text",value:k}),m.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+b+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,h),className:["data-footnote-backref"]},children:Array.isArray(k)?k:[k]})}const E=f[f.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const k=E.children[E.children.length-1];k&&k.type==="text"?k.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...m)}else f.push(...m);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+b},children:t.wrap(f,!0)};t.patch(d,y),c.push(y)}if(c.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Tl(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(c,!0)},{type:"text",value:`
`}]}}const _j=function(t){if(t==null)return jH;if(typeof t=="function")return gs(t);if(typeof t=="object")return Array.isArray(t)?yH(t):wH(t);if(typeof t=="string")return xH(t);throw new Error("Expected function, string, or object as test")};function yH(t){const n=[];let o=-1;for(;++o<t.length;)n[o]=_j(t[o]);return gs(r);function r(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function wH(t){const n=t;return gs(o);function o(r){const i=r;let a;for(a in t)if(i[a]!==n[a])return!1;return!0}}function xH(t){return gs(n);function n(o){return o&&o.type===t}}function gs(t){return n;function n(o,r,i){return!!(EH(o)&&t.call(this,o,typeof r=="number"?r:void 0,i||void 0))}}function jH(){return!0}function EH(t){return t!==null&&typeof t=="object"&&"type"in t}const Lj=[],kH=!0,by=!1,OH="skip";function SH(t,n,o,r){let i;typeof n=="function"&&typeof o!="function"?(r=o,o=n):i=n;const a=_j(i),l=r?-1:1;c(t,void 0,[])();function c(u,d,f){const g=u&&typeof u=="object"?u:{};if(typeof g.type=="string"){const h=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return b;function b(){let h=Lj,m,v,E;if((!n||a(u,d,f[f.length-1]||void 0))&&(h=CH(o(u,f)),h[0]===by))return h;if("children"in u&&u.children){const y=u;if(y.children&&h[0]!==OH)for(v=(r?y.children.length:-1)+l,E=f.concat(y);v>-1&&v<y.children.length;){const k=y.children[v];if(m=c(k,v,E)(),m[0]===by)return m;v=typeof m[1]=="number"?m[1]:v+l}}return h}}}function CH(t){return Array.isArray(t)?t:typeof t=="number"?[kH,t]:t==null?Lj:[t]}function Fj(t,n,o,r){let i,a,l;typeof n=="function"&&typeof o!="function"?(a=void 0,l=n,i=o):(a=n,l=o,i=r),SH(t,a,c,i);function c(u,d){const f=d[d.length-1],g=f?f.children.indexOf(u):void 0;return l(u,g,f)}}const wf={}.hasOwnProperty,$H={};function PH(t,n){const o=n||$H,r=new Map,i=new Map,a=new Map,l={...dH,...o.handlers},c={all:d,applyData:TH,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:l,one:u,options:o,patch:IH,wrap:MH};return Fj(t,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const g=f.type==="definition"?r:i,b=String(f.identifier).toUpperCase();g.has(b)||g.set(b,f)}}),c;function u(f,g){const b=f.type,h=c.handlers[b];if(wf.call(c.handlers,b)&&h)return h(c,f,g);if(c.options.passThrough&&c.options.passThrough.includes(b)){if("children"in f){const{children:v,...E}=f,y=Tl(E);return y.children=c.all(f),y}return Tl(f)}return(c.options.unknownHandler||DH)(c,f,g)}function d(f){const g=[];if("children"in f){const b=f.children;let h=-1;for(;++h<b.length;){const m=c.one(b[h],f);if(m){if(h&&b[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=vy(m.value)),!Array.isArray(m)&&m.type==="element")){const v=m.children[0];v&&v.type==="text"&&(v.value=vy(v.value))}Array.isArray(m)?g.push(...m):g.push(m)}}}return g}}function IH(t,n){t.position&&(n.position=dA(t))}function TH(t,n){let o=n;if(t&&t.data){const r=t.data.hName,i=t.data.hChildren,a=t.data.hProperties;if(typeof r=="string")if(o.type==="element")o.tagName=r;else{const l="children"in o?o.children:[o];o={type:"element",tagName:r,properties:{},children:l}}o.type==="element"&&a&&Object.assign(o.properties,Tl(a)),"children"in o&&o.children&&i!==null&&i!==void 0&&(o.children=i)}return o}function DH(t,n){const o=n.data||{},r="value"in n&&!(wf.call(o,"hProperties")||wf.call(o,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function MH(t,n){const o=[];let r=-1;for(n&&o.push({type:"text",value:`
`});++r<t.length;)r&&o.push({type:"text",value:`
`}),o.push(t[r]);return n&&t.length>0&&o.push({type:"text",value:`
`}),o}function vy(t){let n=0,o=t.charCodeAt(n);for(;o===9||o===32;)n++,o=t.charCodeAt(n);return t.slice(n)}function yy(t,n){const o=PH(t,n),r=o.one(t,void 0),i=vH(o),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function NH(t,n){return t&&"run"in t?async function(o,r){const i=yy(o,{file:r,...n});await t.run(i,r)}:function(o,r){return yy(o,{file:r,...t||n})}}function wy(t){if(t)throw t}var Ua=Object.prototype.hasOwnProperty,Aj=Object.prototype.toString,xy=Object.defineProperty,jy=Object.getOwnPropertyDescriptor,Ey=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Aj.call(n)==="[object Array]"},ky=function(n){if(!n||Aj.call(n)!=="[object Object]")return!1;var o=Ua.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Ua.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!o&&!r)return!1;var i;for(i in n);return typeof i>"u"||Ua.call(n,i)},Oy=function(n,o){xy&&o.name==="__proto__"?xy(n,o.name,{enumerable:!0,configurable:!0,value:o.newValue,writable:!0}):n[o.name]=o.newValue},Sy=function(n,o){if(o==="__proto__")if(Ua.call(n,o)){if(jy)return jy(n,o).value}else return;return n[o]},RH=function t(){var n,o,r,i,a,l,c=arguments[0],u=1,d=arguments.length,f=!1;for(typeof c=="boolean"&&(f=c,c=arguments[1]||{},u=2),(c==null||typeof c!="object"&&typeof c!="function")&&(c={});u<d;++u)if(n=arguments[u],n!=null)for(o in n)r=Sy(c,o),i=Sy(n,o),c!==i&&(f&&i&&(ky(i)||(a=Ey(i)))?(a?(a=!1,l=r&&Ey(r)?r:[]):l=r&&ky(r)?r:{},Oy(c,{name:o,newValue:t(f,l,i)})):typeof i<"u"&&Oy(c,{name:o,newValue:i}));return c};const vc=Ml(RH);function xf(t){if(typeof t!="object"||t===null)return!1;const n=Object.getPrototypeOf(t);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function _H(){const t=[],n={run:o,use:r};return n;function o(...i){let a=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);c(null,...i);function c(u,...d){const f=t[++a];let g=-1;if(u){l(u);return}for(;++g<i.length;)(d[g]===null||d[g]===void 0)&&(d[g]=i[g]);i=d,f?LH(f,c)(...d):l(null,...d)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return t.push(i),n}}function LH(t,n){let o;return r;function r(...l){const c=t.length>l.length;let u;c&&l.push(i);try{u=t.apply(this,l)}catch(d){const f=d;if(c&&o)throw f;return i(f)}c||(u&&u.then&&typeof u.then=="function"?u.then(a,i):u instanceof Error?i(u):a(u))}function i(l,...c){o||(o=!0,n(l,...c))}function a(l){i(null,l)}}const In={basename:FH,dirname:AH,extname:zH,join:HH,sep:"/"};function FH(t,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');da(t);let o=0,r=-1,i=t.length,a;if(n===void 0||n.length===0||n.length>t.length){for(;i--;)if(t.codePointAt(i)===47){if(a){o=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":t.slice(o,r)}if(n===t)return"";let l=-1,c=n.length-1;for(;i--;)if(t.codePointAt(i)===47){if(a){o=i+1;break}}else l<0&&(a=!0,l=i+1),c>-1&&(t.codePointAt(i)===n.codePointAt(c--)?c<0&&(r=i):(c=-1,r=l));return o===r?r=l:r<0&&(r=t.length),t.slice(o,r)}function AH(t){if(da(t),t.length===0)return".";let n=-1,o=t.length,r;for(;--o;)if(t.codePointAt(o)===47){if(r){n=o;break}}else r||(r=!0);return n<0?t.codePointAt(0)===47?"/":".":n===1&&t.codePointAt(0)===47?"//":t.slice(0,n)}function zH(t){da(t);let n=t.length,o=-1,r=0,i=-1,a=0,l;for(;n--;){const c=t.codePointAt(n);if(c===47){if(l){r=n+1;break}continue}o<0&&(l=!0,o=n+1),c===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||o<0||a===0||a===1&&i===o-1&&i===r+1?"":t.slice(i,o)}function HH(...t){let n=-1,o;for(;++n<t.length;)da(t[n]),t[n]&&(o=o===void 0?t[n]:o+"/"+t[n]);return o===void 0?".":BH(o)}function BH(t){da(t);const n=t.codePointAt(0)===47;let o=WH(t,!n);return o.length===0&&!n&&(o="."),o.length>0&&t.codePointAt(t.length-1)===47&&(o+="/"),n?"/"+o:o}function WH(t,n){let o="",r=0,i=-1,a=0,l=-1,c,u;for(;++l<=t.length;){if(l<t.length)c=t.codePointAt(l);else{if(c===47)break;c=47}if(c===47){if(!(i===l-1||a===1))if(i!==l-1&&a===2){if(o.length<2||r!==2||o.codePointAt(o.length-1)!==46||o.codePointAt(o.length-2)!==46){if(o.length>2){if(u=o.lastIndexOf("/"),u!==o.length-1){u<0?(o="",r=0):(o=o.slice(0,u),r=o.length-1-o.lastIndexOf("/")),i=l,a=0;continue}}else if(o.length>0){o="",r=0,i=l,a=0;continue}}n&&(o=o.length>0?o+"/..":"..",r=2)}else o.length>0?o+="/"+t.slice(i+1,l):o=t.slice(i+1,l),r=l-i-1;i=l,a=0}else c===46&&a>-1?a++:a=-1}return o}function da(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const VH={cwd:qH};function qH(){return"/"}function jf(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function UH(t){if(typeof t=="string")t=new URL(t);else if(!jf(t)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(t.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return YH(t)}function YH(t){if(t.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=t.pathname;let o=-1;for(;++o<n.length;)if(n.codePointAt(o)===37&&n.codePointAt(o+1)===50){const r=n.codePointAt(o+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const yc=["history","path","basename","stem","extname","dirname"];class zj{constructor(n){let o;n?jf(n)?o={path:n}:typeof n=="string"||KH(n)?o={value:n}:o=n:o={},this.cwd="cwd"in o?"":VH.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<yc.length;){const a=yc[r];a in o&&o[a]!==void 0&&o[a]!==null&&(this[a]=a==="history"?[...o[a]]:o[a])}let i;for(i in o)yc.includes(i)||(this[i]=o[i])}get basename(){return typeof this.path=="string"?In.basename(this.path):void 0}set basename(n){xc(n,"basename"),wc(n,"basename"),this.path=In.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?In.dirname(this.path):void 0}set dirname(n){Cy(this.basename,"dirname"),this.path=In.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?In.extname(this.path):void 0}set extname(n){if(wc(n,"extname"),Cy(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=In.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){jf(n)&&(n=UH(n)),xc(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?In.basename(this.path,this.extname):void 0}set stem(n){xc(n,"stem"),wc(n,"stem"),this.path=In.join(this.dirname||"",n+(this.extname||""))}fail(n,o,r){const i=this.message(n,o,r);throw i.fatal=!0,i}info(n,o,r){const i=this.message(n,o,r);return i.fatal=void 0,i}message(n,o,r){const i=new $t(n,o,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function wc(t,n){if(t&&t.includes(In.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+In.sep+"`")}function xc(t,n){if(!t)throw new Error("`"+n+"` cannot be empty")}function Cy(t,n){if(!t)throw new Error("Setting `"+n+"` requires `path` to be set too")}function KH(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const GH=function(t){const r=this.constructor.prototype,i=r[t],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a},QH={}.hasOwnProperty;class Bp extends GH{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=_H()}copy(){const n=new Bp;let o=-1;for(;++o<this.attachers.length;){const r=this.attachers[o];n.use(...r)}return n.data(vc(!0,{},this.namespace)),n}data(n,o){return typeof n=="string"?arguments.length===2?(kc("data",this.frozen),this.namespace[n]=o,this):QH.call(this.namespace,n)&&this.namespace[n]||void 0:n?(kc("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[o,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=o.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const o=Ra(n),r=this.parser||this.Parser;return jc("parse",r),r(String(o),o)}process(n,o){const r=this;return this.freeze(),jc("process",this.parser||this.Parser),Ec("process",this.compiler||this.Compiler),o?i(void 0,o):new Promise(i);function i(a,l){const c=Ra(n),u=r.parse(c);r.run(u,c,function(f,g,b){if(f||!g||!b)return d(f);const h=g,m=r.stringify(h,b);XH(m)?b.value=m:b.result=m,d(f,b)});function d(f,g){f||!g?l(f):a?a(g):o(void 0,g)}}}processSync(n){let o=!1,r;return this.freeze(),jc("processSync",this.parser||this.Parser),Ec("processSync",this.compiler||this.Compiler),this.process(n,i),Py("processSync","process",o),r;function i(a,l){o=!0,wy(a),r=l}}run(n,o,r){$y(n),this.freeze();const i=this.transformers;return!r&&typeof o=="function"&&(r=o,o=void 0),r?a(void 0,r):new Promise(a);function a(l,c){const u=Ra(o);i.run(n,u,d);function d(f,g,b){const h=g||n;f?c(f):l?l(h):r(void 0,h,b)}}}runSync(n,o){let r=!1,i;return this.run(n,o,a),Py("runSync","run",r),i;function a(l,c){wy(l),i=c,r=!0}}stringify(n,o){this.freeze();const r=Ra(o),i=this.compiler||this.Compiler;return Ec("stringify",i),$y(n),i(n,r)}use(n,...o){const r=this.attachers,i=this.namespace;if(kc("use",this.frozen),n!=null)if(typeof n=="function")u(n,o);else if(typeof n=="object")Array.isArray(n)?c(n):l(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(d){if(typeof d=="function")u(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[f,...g]=d;u(f,g)}else l(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function l(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(d.plugins),d.settings&&(i.settings=vc(!0,i.settings,d.settings))}function c(d){let f=-1;if(d!=null)if(Array.isArray(d))for(;++f<d.length;){const g=d[f];a(g)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function u(d,f){let g=-1,b=-1;for(;++g<r.length;)if(r[g][0]===d){b=g;break}if(b===-1)r.push([d,...f]);else if(f.length>0){let[h,...m]=f;const v=r[b][1];xf(v)&&xf(h)&&(h=vc(!0,v,h)),r[b]=[d,h,...m]}}}}const JH=new Bp().freeze();function jc(t,n){if(typeof n!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Ec(t,n){if(typeof n!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function kc(t,n){if(n)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function $y(t){if(!xf(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Py(t,n,o){if(!o)throw new Error("`"+t+"` finished async. Use `"+n+"` instead")}function Ra(t){return ZH(t)?t:new zj(t)}function ZH(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function XH(t){return typeof t=="string"||eB(t)}function eB(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const tB="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Iy=[],Ty={allowDangerousHtml:!0},nB=/^(https?|ircs?|mailto|xmpp)$/i,rB=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function oB(t){const n=t.allowedElements,o=t.allowElement,r=t.children||"",i=t.className,a=t.components,l=t.disallowedElements,c=t.rehypePlugins||Iy,u=t.remarkPlugins||Iy,d=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Ty}:Ty,f=t.skipHtml,g=t.unwrapDisallowed,b=t.urlTransform||iB,h=JH().use(Az).use(u).use(NH,d).use(c),m=new zj;typeof r=="string"&&(m.value=r);for(const k of rB)Object.hasOwn(t,k.from)&&(""+k.from+(k.to?"use `"+k.to+"` instead":"remove it")+tB+k.id,void 0);const v=h.parse(m);let E=h.runSync(v,m);return i&&(E={type:"element",tagName:"div",properties:{className:i},children:E.type==="root"?E.children:[E]}),Fj(E,y),bA(E,{Fragment:U.Fragment,components:a,ignoreInvalidStyle:!0,jsx:U.jsx,jsxs:U.jsxs,passKeys:!0,passNode:!0});function y(k,C,R){if(k.type==="raw"&&R&&typeof C=="number")return f?R.children.splice(C,1):R.children[C]={type:"text",value:k.value},C;if(k.type==="element"){let I;for(I in hc)if(Object.hasOwn(hc,I)&&Object.hasOwn(k.properties,I)){const T=k.properties[I],F=hc[I];(F===null||F.includes(k.tagName))&&(k.properties[I]=b(String(T||""),I,k))}}if(k.type==="element"){let I=n?!n.includes(k.tagName):l?l.includes(k.tagName):!1;if(!I&&o&&typeof C=="number"&&(I=!o(k,C,R)),I&&R&&typeof C=="number")return g&&k.children?R.children.splice(C,1,...k.children):R.children.splice(C,1),C}}}function iB(t){const n=t.indexOf(":"),o=t.indexOf("?"),r=t.indexOf("#"),i=t.indexOf("/");return n<0||i>-1&&n>i||o>-1&&n>o||r>-1&&n>r||nB.test(t.slice(0,n))?t:""}const aB=({violation:t})=>t!=null&&t.object_identity?U.jsxs(xn,{direction:"vertical",gap:"2",children:[Object.keys(t.object_identity).map(n=>U.jsx("div",{className:"whitespace-nowrap",children:U.jsx(df,{name:n,value:cs(t.object_identity[n])})},n)),t.severity&&U.jsx("div",{className:"whitespace-nowrap",children:U.jsx(df,{name:"severity",value:t.severity})})]}):null,Ye=1,Hj=2,Bj=4,xt=8,Ef=16,_a=32,Fn=64,kf={a:{content:Ye|xt,self:!1,type:Ye|xt|_a|Fn},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:Ye|xt,void:!0},body:{content:Ye|Hj|Bj|xt|Ef|_a|Fn},button:{content:xt,type:Ye|xt|_a|Fn},caption:{content:Ye,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:Ye|_a|Fn},dd:{content:Ye,parent:["dl"]},dl:{children:["dt","dd"],type:Ye},dt:{content:Ye,invalid:["footer","header"],parent:["dl"]},figcaption:{content:Ye,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:Ye,void:!0},img:{void:!0},li:{content:Ye,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:Ye},picture:{children:["source","img"],type:Ye|xt|Ef},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:xt,parent:["ruby","rtc"]},rtc:{content:xt,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:xt,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:Ye},tbody:{parent:["table"],children:["tr"]},td:{content:Ye,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:Ye,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:Ye},video:{children:["track","source"]},wbr:{type:Ye|xt,void:!0}};function po(t){return n=>{kf[n]={...t,...kf[n]}}}["address","main","div","figure","p","pre"].forEach(po({content:Ye,type:Ye|Fn}));["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(po({content:xt,type:Ye|xt|Fn}));["p","pre"].forEach(po({content:xt,type:Ye|Fn}));["s","small","span","del","ins"].forEach(po({content:xt,type:Ye|xt}));["article","aside","footer","header","nav","section","blockquote"].forEach(po({content:Ye,type:Ye|Hj|Fn}));["h1","h2","h3","h4","h5","h6"].forEach(po({content:xt,type:Ye|Bj|Fn}));["audio","canvas","iframe","img","video"].forEach(po({type:Ye|xt|Ef|Fn}));const Of=Object.freeze(kf),lB=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],sB=Object.keys(Of).filter(t=>t!=="canvas"&&t!=="iframe"),et=1,cB=2,ji=3,jo=4,Wj=5,Dy=Object.freeze({alt:et,cite:et,class:et,colspan:ji,controls:jo,datetime:et,default:jo,disabled:jo,dir:et,height:et,href:et,id:et,kind:et,label:et,lang:et,loading:et,loop:jo,media:et,muted:jo,poster:et,rel:et,role:et,rowspan:ji,scope:et,sizes:et,span:ji,start:ji,style:Wj,src:et,srclang:et,srcset:et,tabindex:et,target:et,title:et,type:et,width:et}),uB=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex"});function Dl(){return Dl=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},Dl.apply(this,arguments)}function Vj({attributes:t={},className:n,children:o=null,selfClose:r=!1,tagName:i}){const a=i;return r?S.createElement(a,Dl({className:n},t)):S.createElement(a,Dl({className:n},t),o)}class dB{attribute(n,o){return o}node(n,o){return o}}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var fB=/["'&<>]/,pB=gB;function gB(t){var n=""+t,o=fB.exec(n);if(!o)return n;var r,i="",a=0,l=0;for(a=o.index;a<n.length;a++){switch(n.charCodeAt(a)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}l!==a&&(i+=n.substring(l,a)),l=a+1,i+=r}return l!==a?i+n.substring(l,a):i}const hB=Ml(pB);function Gn(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}const mB=/(url|image|image-set)\(/i;class bB extends dB{attribute(n,o){return n==="style"&&Object.keys(o).forEach(r=>{String(o[r]).match(mB)&&delete o[r]}),o}}const My=1,vB=3,yB=/^<(!doctype|(html|head|body)(\s|>))/i,wB=/^(aria-|data-|\w+:)/iu,xB=/{{{(\w+)\/?}}}/;function jB(){if(!(typeof window>"u"||typeof document>"u"))return document.implementation.createHTMLDocument("Interweave")}class qj{constructor(n,o={},r=[],i=[]){var a;Gn(this,"allowed",void 0),Gn(this,"banned",void 0),Gn(this,"blocked",void 0),Gn(this,"container",void 0),Gn(this,"content",[]),Gn(this,"props",void 0),Gn(this,"matchers",void 0),Gn(this,"filters",void 0),Gn(this,"keyIndex",void 0),this.props=o,this.matchers=r,this.filters=[...i,new bB],this.keyIndex=-1,this.container=this.createContainer(n||""),this.allowed=new Set((a=o.allowList)!==null&&a!==void 0?a:sB),this.banned=new Set(lB),this.blocked=new Set(o.blockList)}applyAttributeFilters(n,o){return this.filters.reduce((r,i)=>r!==null&&typeof i.attribute=="function"?i.attribute(n,r):r,o)}applyNodeFilters(n,o){return this.filters.reduce((r,i)=>r!==null&&typeof i.node=="function"?i.node(n,r):r,o)}applyMatchers(n,o){const r={},{props:i}=this;let a=n,l=0,c=null;return this.matchers.forEach(u=>{const d=u.asTag().toLowerCase(),f=this.getTagConfig(d);if(i[u.inverseName]||!this.isTagAllowed(d)||!this.canRenderChild(o,f))return;let g="";for(;a&&(c=u.match(a));){const{index:b,length:h,match:m,valid:v,void:E,...y}=c,k=u.propName+String(l);b>0&&(g+=a.slice(0,b)),v?(g+=E?`{{{${k}/}}}`:`{{{${k}}}}${m}{{{/${k}}}}`,this.keyIndex+=1,l+=1,r[k]={children:m,matcher:u,props:{...i,...y,key:this.keyIndex}}):g+=m,u.greedy?(a=g+a.slice(b+h),g=""):a=a.slice(b+(h||m.length))}u.greedy||(a=g+a)}),l===0?n:this.replaceTokens(a,r)}canRenderChild(n,o){return!n.tagName||!o.tagName||n.void?!1:n.children.length>0?n.children.includes(o.tagName):n.invalid.length>0&&n.invalid.includes(o.tagName)?!1:o.parent.length>0?o.parent.includes(n.tagName):!n.self&&n.tagName===o.tagName?!1:!!(n&&n.content&o.type)}convertLineBreaks(n){const{noHtml:o,disableLineBreaks:r}=this.props;if(o||r||n.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return n;let i=n.replace(/\r\n/g,`
`);return i=i.replace(/\n{3,}/g,`


`),i=i.replace(/\n/g,"<br/>"),i}createContainer(n){var o;const i=(typeof global<"u"&&global.INTERWEAVE_SSR_POLYFILL||jB)();if(!i)return;const a=(o=this.props.containerTagName)!==null&&o!==void 0?o:"body",l=a==="body"||a==="fragment"?i.body:i.createElement(a);return n.match(yB)||(l.innerHTML=this.convertLineBreaks(this.props.escapeHtml?hB(n):n)),l}extractAttributes(n){const{allowAttributes:o}=this.props,r={};let i=0;return n.nodeType!==My||!n.attributes||([...n.attributes].forEach(a=>{const{name:l,value:c}=a,u=l.toLowerCase(),d=Dy[u]||Dy[l];if(!this.isSafe(n)||!u.match(wB)&&(!o&&(!d||d===cB)||u.startsWith("on")||c.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))return;let f=u==="style"?this.extractStyleAttribute(n):c;d===jo?f=!0:d===ji?f=Number.parseFloat(String(f)):d!==Wj&&(f=String(f)),r[uB[u]||u]=this.applyAttributeFilters(u,f),i+=1}),i===0)?null:r}extractStyleAttribute(n){const o={};return Array.from(n.style).forEach(r=>{const i=n.style[r];(typeof i=="string"||typeof i=="number")&&(o[r.replace(/-([a-z])/g,(a,l)=>String(l).toUpperCase())]=i)}),o}getTagConfig(n){const o={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return Of[n]?{...o,...Of[n],tagName:n}:o}isSafe(n){if(typeof HTMLAnchorElement<"u"&&n instanceof HTMLAnchorElement){const o=n.getAttribute("href");if(o!=null&&o.startsWith("#"))return!0;const r=n.protocol.toLowerCase();return r===":"||r==="http:"||r==="https:"||r==="mailto:"||r==="tel:"}return!0}isTagAllowed(n){return this.banned.has(n)||this.blocked.has(n)?!1:this.props.allowElements||this.allowed.has(n)}parse(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]}parseNode(n,o){const{noHtml:r,noHtmlExceptMatchers:i,allowElements:a,transform:l,transformOnlyAllowList:c}=this.props;let u=[],d="";return[...n.childNodes].forEach(f=>{if(f.nodeType===My){const b=f.nodeName.toLowerCase(),h=this.getTagConfig(b);d&&(u.push(d),d="");const m=this.applyNodeFilters(b,f);if(!m)return;let v;if(l&&!(c&&!this.isTagAllowed(b))){this.keyIndex+=1;const E=this.keyIndex;v=this.parseNode(m,h);const y=l(m,v,h);if(y===null)return;if(typeof y<"u"){u.push(S.cloneElement(y,{key:E}));return}this.keyIndex=E-1}if(this.banned.has(b))return;if(!(r||i&&b!=="br")&&this.isTagAllowed(b)&&(a||this.canRenderChild(o,h))){var g;this.keyIndex+=1;const E=this.extractAttributes(m),y={tagName:b};E&&(y.attributes=E),h.void&&(y.selfClose=h.void),u.push(S.createElement(Vj,{...y,key:this.keyIndex},(g=v)!==null&&g!==void 0?g:this.parseNode(m,h)))}else u=[...u,...this.parseNode(m,h.tagName?h:o)]}else if(f.nodeType===vB){const b=r&&!i?f.textContent:this.applyMatchers(f.textContent||"",o);Array.isArray(b)?u=[...u,...b]:d+=b}}),d&&u.push(d),u}replaceTokens(n,o){if(!n.includes("{{{"))return n;const r=[];let i=n,a=null;for(;a=i.match(xB);){const[l,c]=a,u=a.index,d=l.includes("/");u>0&&(r.push(i.slice(0,u)),i=i.slice(u));const{children:f,matcher:g,props:b}=o[c];let h;if(d)h=l.length,r.push(g.createElement(f,b));else{const m=i.match(new RegExp(`{{{/${c}}}}`));h=m.index+m[0].length,r.push(g.createElement(this.replaceTokens(i.slice(l.length,m.index),o),b))}i=i.slice(h)}return i.length>0&&r.push(i),r.length===0?"":r.length===1&&typeof r[0]=="string"?r[0]:r}}function EB(t){var n;const{attributes:o,className:r,containerTagName:i,content:a,emptyContent:l,parsedContent:c,tagName:u,noWrap:d}=t,f=(n=i??u)!==null&&n!==void 0?n:"span",g=f==="fragment"?!0:d;let b;if(c)b=c;else{const h=new qj(a??"",t).parse();h.length>0&&(b=h)}return b||(b=l),g?S.createElement(S.Fragment,null,b):S.createElement(Vj,{attributes:o,className:r,tagName:f},b)}function kB(t){const{attributes:n,className:o,content:r="",disableFilters:i=!1,disableMatchers:a=!1,emptyContent:l=null,filters:c=[],matchers:u=[],onAfterParse:d=null,onBeforeParse:f=null,tagName:g="span",noWrap:b=!1,...h}=t,m=a?[]:u,v=i?[]:c,E=f?[f]:[],y=d?[d]:[];m.forEach(I=>{I.onBeforeParse&&E.push(I.onBeforeParse.bind(I)),I.onAfterParse&&y.push(I.onAfterParse.bind(I))});const k=E.reduce((I,T)=>T(I,t),r??""),C=new qj(k,h,m,v),R=y.reduce((I,T)=>T(I,t),C.parse());return S.createElement(EB,{attributes:n,className:o,containerTagName:t.containerTagName,emptyContent:l,noWrap:b,parsedContent:R.length===0?void 0:R,tagName:g})}const OB=({show:t,maxHeight:n=300,children:o})=>{const[i,a]=S.useState(!1),l=S.useRef(),c=S.useRef();return S.useLayoutEffect(()=>{let u;return t?a(!0):u=setTimeout(()=>a(!1),300),()=>clearTimeout(u)},[t]),S.useLayoutEffect(()=>{t&&l.current&&c.current&&(l.current.style.maxHeight="1000px")},[i]),i?U.jsx("div",{ref:l,className:"transition-all overflow-y-auto overflow-x-hidden ease-in-out duration-300",style:{maxHeight:t?n:0},children:U.jsx("div",{ref:c,children:o})}):null},SB=/\u003c([^\u003e]+)\u003e/g,Ny=3,Ry=t=>U.jsx(kB,{content:t.replaceAll(SB,"<span class='bg-theme-accent/5 border rounded border-theme-accent/25 px-1 py-0.5'>$1</span>")}),CB=({violation:t})=>{var r,i,a;const[n,o]=S.useState(!1);return U.jsxs(U.Fragment,{children:[U.jsxs("div",{children:[t.kind," ",U.jsx("strong",{children:Ry(t.name)})," in namespace ",t.namespace,":"," ",Ry(t.message)]}),((r=t==null?void 0:t.instances)==null?void 0:r.length)>Ny?U.jsx(OB,{show:n,maxHeight:!1,children:U.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-2",children:t.instances.map((l,c)=>U.jsxs("div",{className:"text-sm text-theme-light",children:[l.cluster,":",l.name]},c))})}):U.jsx("div",{className:"flex flex-wrap gap-2",children:t.instances.map((l,c)=>U.jsxs("div",{className:"text-sm text-theme-light",children:[l.cluster,":",l.name]},c))}),((i=t==null?void 0:t.instances)==null?void 0:i.length)>Ny&&U.jsx("a",{onClick:l=>{l.preventDefault(),o(!n)},href:"#",children:n?"Hide occurrences":`Show occurrences (${(a=t.instances)==null?void 0:a.length})`})]})},$B=()=>{const t=jL(),n=S.useMemo(()=>t?t.constraints.reduce((i,a)=>(i.push({type:"doc",title:a.name,severity:a.metadata.severity,data:a.metadata.docstring}),a.violation_groups.forEach(l=>{i.push({...l.pattern,instances:l.instances})}),i),[]):null,[t]),{scrollListItems:o,iterator:r}=$F(n,{loadingObject:U.jsx(Kr,{children:U.jsx(Xt,{colSpan:2,children:U.jsx("span",{children:"Loading ..."})})}),refFunction:i=>U.jsx(Kr,{children:U.jsx(Xt,{colSpan:2,className:"border-b-0 py-0",children:U.jsx("span",{ref:i})})})});return U.jsx(U.Fragment,{children:(o==null?void 0:o.length)>0?U.jsx(r0,{cellVerticalAlignment:"top",gridColumnTemplate:"min-content 2fr",children:r.map((i,a)=>U.jsx(Kr,{children:(i==null?void 0:i.type)==="doc"?U.jsx(Xt,{colSpan:2,children:U.jsx(aw,{className:"bg-theme-accent/10 border-theme-accent p-5",children:U.jsxs(xn,{distribution:"start",gap:"3",children:[U.jsx(tj,{severities:[i.severity]}),U.jsxs("div",{className:"info-box text-theme-high",children:[U.jsx("h1",{className:"mb-4 mt-0 text-2xl",children:rL(i.title)}),i.data?U.jsx(oB,{linkTarget:"_blank",transformLinkUri:l=>l.replace(/^\((.+)\)$/,"$1"),children:i.data}):i.severity==="debug"&&"This violation group is currently in a draft state, undergoing development and refinement."]})]})})}):U.jsxs(U.Fragment,{children:[U.jsx(Xt,{children:U.jsx(aB,{violation:i})}),U.jsx(Xt,{children:U.jsx(CB,{violation:i})})]})},a))}):U.jsx(Kr,{children:U.jsx(Xt,{colSpan:2,children:U.jsx("span",{children:"No violations found."})})})})},PB=()=>{const t=jp(),{setDetailsViolationGroupKind:n}=us(),[o,r]=p.useState(!1);return p.useLayoutEffect(()=>{r(!1)},[t]),p.useEffect(()=>{t&&r(!0)},[t]),U.jsx(v0,{heading:`Check: ${t}`,onClose:()=>{n(null)},opened:!!t,size:"large",children:U.jsx(y0,{children:o?U.jsxs(U.Fragment,{children:[U.jsx(nj,{}),U.jsx($B,{})]}):U.jsx(U.Fragment,{children:t&&U.jsx(V2,{})})})})},IB=()=>{const t=xL();return U.jsx(U.Fragment,{children:t?U.jsxs(U.Fragment,{children:[U.jsx(nj,{}),U.jsx(hF,{}),U.jsx(PB,{})]}):U.jsx("span",{children:"Could not load data"})})},TB=({showDebugSeverities:t})=>{const{setData:n,setShowDebugSeverities:o}=us(),{addMessage:r}=A0(),i=hL(),a=mL();p.useEffect(()=>{i&&TF(`${a}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mock:!0}).then(c=>(c.ok||r({variant:"error",text:Iv(e.message)}),c.json())).then(c=>{n(c)})},[i]);const l=aF({queryKey:["violations"],queryFn:lF,enabled:!i,refetchInterval:5*60*1e3});return p.useEffect(()=>{o(!!t),l.error?r({variant:"error",text:Iv(l.error)}):!l.isLoading&&!l.data?r({variant:"Info",text:"No data available"}):n(l.data)},[l,n,r,o]),U.jsxs(S$,{py:!0,children:[U.jsx(OL,{}),U.jsx(R2,{className:"mb-4"}),l!=null&&l.isLoading&&!i?U.jsx(V2,{className:"tw-mt-4"}):U.jsx(IB,{}),U.jsx(uF,{})]})},DB="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.my-\\[10vh\\]{margin-top:10vh;margin-bottom:10vh}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-4{margin-bottom:1rem}.mt-0{margin-top:0}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.grid{display:grid}.h-full{height:100%}.w-52{width:13rem}.w-80{width:20rem}.w-96{width:24rem}.cursor-pointer{cursor:pointer}.grid-cols-\\[repeat\\(auto-fill\\,_minmax\\(240px\\,_1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}.flex-wrap{flex-wrap:wrap}.gap-2{gap:.5rem}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-b-0{border-bottom-width:0}.border-l-2{border-left-width:2px}.border-theme-accent{--tw-border-opacity: 1;border-color:rgba(var(--color-accent-raw),var(--tw-border-opacity))}.border-theme-accent\\/25{border-color:rgba(var(--color-accent-raw),.25)}.border-theme-default{--tw-border-opacity: 1;border-color:rgba(var(--color-default-border),var(--tw-border-opacity))}.border-theme-error{--tw-border-opacity: 1;border-color:rgba(var(--color-error-raw),var(--tw-border-opacity))}.border-theme-info{--tw-border-opacity: 1;border-color:rgba(var(--color-info-raw),var(--tw-border-opacity))}.border-theme-warning{--tw-border-opacity: 1;border-color:rgba(var(--color-warning-raw),var(--tw-border-opacity))}.bg-theme-accent\\/10{background-color:rgba(var(--color-accent-raw),.1)}.bg-theme-accent\\/5{background-color:rgba(var(--color-accent-raw),.05)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-warning\\/40{background-color:rgba(var(--color-warning-raw),.4)}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-\\[0\\.3rem\\]{padding-top:.3rem;padding-bottom:.3rem}.pl-0{padding-left:0}.pl-5{padding-left:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.capitalize{text-transform:capitalize}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-warning{--tw-text-opacity: 1;color:rgba(var(--color-warning-raw),var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.info-box h4{font-size:1.2rem;font-weight:600;margin-bottom:.5rem;padding-top:10px}.info-box p{padding-bottom:10px}.violations-list .juno-datagrid-row:hover .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.juno-datagrid-row.active .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:underline:hover{text-decoration-line:underline}",MB=({children:t})=>{const{login:n}=W2(),o=z2(),r=xp(),i=H2(),a=B2();return r?t:U.jsxs(xn,{alignment:"center",distribution:"center",direction:"vertical",className:"my-[10vh]",children:[U.jsx("p",{className:"text-xl",children:"Welcome to the Doop Dashboard!"}),i?U.jsx(l0,{variant:"danger",text:i}):a?o?U.jsx(j0,{}):U.jsxs(U.Fragment,{children:[U.jsx("p",{className:"text-xl",children:"Please sign in to continue."}),U.jsx(Ii,{label:"Sign in",variant:"primary",onClick:n,className:"mt-2"})]}):U.jsx("p",{className:"text-xl",children:"Waiting for Auth App"})]})};function Uj(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yj={exports:{}};(function(t){var n=function(){var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={};function l(u,d){if(!a[u]){a[u]={};for(var f=0;f<u.length;f++)a[u][u.charAt(f)]=f}return a[u][d]}var c={compressToBase64:function(u){if(u==null)return"";var d=c._compress(u,6,function(f){return r.charAt(f)});switch(d.length%4){default:case 0:return d;case 1:return d+"===";case 2:return d+"==";case 3:return d+"="}},decompressFromBase64:function(u){return u==null?"":u==""?null:c._decompress(u.length,32,function(d){return l(r,u.charAt(d))})},compressToUTF16:function(u){return u==null?"":c._compress(u,15,function(d){return o(d+32)})+" "},decompressFromUTF16:function(u){return u==null?"":u==""?null:c._decompress(u.length,16384,function(d){return u.charCodeAt(d)-32})},compressToUint8Array:function(u){for(var d=c.compress(u),f=new Uint8Array(2*d.length),g=0,b=d.length;g<b;g++){var h=d.charCodeAt(g);f[2*g]=h>>>8,f[2*g+1]=h%256}return f},decompressFromUint8Array:function(u){if(u==null)return c.decompress(u);for(var d=new Array(u.length/2),f=0,g=d.length;f<g;f++)d[f]=256*u[2*f]+u[2*f+1];var b=[];return d.forEach(function(h){b.push(o(h))}),c.decompress(b.join(""))},compressToEncodedURIComponent:function(u){return u==null?"":c._compress(u,6,function(d){return i.charAt(d)})},decompressFromEncodedURIComponent:function(u){return u==null?"":u==""?null:(u=u.replace(/ /g,"+"),c._decompress(u.length,32,function(d){return l(i,u.charAt(d))}))},compress:function(u){return c._compress(u,16,function(d){return o(d)})},_compress:function(u,d,f){if(u==null)return"";var g,b,h,m={},v={},E="",y="",k="",C=2,R=3,I=2,T=[],F=0,_=0;for(h=0;h<u.length;h+=1)if(E=u.charAt(h),Object.prototype.hasOwnProperty.call(m,E)||(m[E]=R++,v[E]=!0),y=k+E,Object.prototype.hasOwnProperty.call(m,y))k=y;else{if(Object.prototype.hasOwnProperty.call(v,k)){if(k.charCodeAt(0)<256){for(g=0;g<I;g++)F<<=1,_==d-1?(_=0,T.push(f(F)),F=0):_++;for(b=k.charCodeAt(0),g=0;g<8;g++)F=F<<1|1&b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b>>=1}else{for(b=1,g=0;g<I;g++)F=F<<1|b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b=0;for(b=k.charCodeAt(0),g=0;g<16;g++)F=F<<1|1&b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b>>=1}--C==0&&(C=Math.pow(2,I),I++),delete v[k]}else for(b=m[k],g=0;g<I;g++)F=F<<1|1&b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b>>=1;--C==0&&(C=Math.pow(2,I),I++),m[y]=R++,k=String(E)}if(k!==""){if(Object.prototype.hasOwnProperty.call(v,k)){if(k.charCodeAt(0)<256){for(g=0;g<I;g++)F<<=1,_==d-1?(_=0,T.push(f(F)),F=0):_++;for(b=k.charCodeAt(0),g=0;g<8;g++)F=F<<1|1&b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b>>=1}else{for(b=1,g=0;g<I;g++)F=F<<1|b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b=0;for(b=k.charCodeAt(0),g=0;g<16;g++)F=F<<1|1&b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b>>=1}--C==0&&(C=Math.pow(2,I),I++),delete v[k]}else for(b=m[k],g=0;g<I;g++)F=F<<1|1&b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b>>=1;--C==0&&(C=Math.pow(2,I),I++)}for(b=2,g=0;g<I;g++)F=F<<1|1&b,_==d-1?(_=0,T.push(f(F)),F=0):_++,b>>=1;for(;;){if(F<<=1,_==d-1){T.push(f(F));break}_++}return T.join("")},decompress:function(u){return u==null?"":u==""?null:c._decompress(u.length,32768,function(d){return u.charCodeAt(d)})},_decompress:function(u,d,f){var g,b,h,m,v,E,y,k=[],C=4,R=4,I=3,T="",F=[],_={val:f(0),position:d,index:1};for(g=0;g<3;g+=1)k[g]=g;for(h=0,v=Math.pow(2,2),E=1;E!=v;)m=_.val&_.position,_.position>>=1,_.position==0&&(_.position=d,_.val=f(_.index++)),h|=(m>0?1:0)*E,E<<=1;switch(h){case 0:for(h=0,v=Math.pow(2,8),E=1;E!=v;)m=_.val&_.position,_.position>>=1,_.position==0&&(_.position=d,_.val=f(_.index++)),h|=(m>0?1:0)*E,E<<=1;y=o(h);break;case 1:for(h=0,v=Math.pow(2,16),E=1;E!=v;)m=_.val&_.position,_.position>>=1,_.position==0&&(_.position=d,_.val=f(_.index++)),h|=(m>0?1:0)*E,E<<=1;y=o(h);break;case 2:return""}for(k[3]=y,b=y,F.push(y);;){if(_.index>u)return"";for(h=0,v=Math.pow(2,I),E=1;E!=v;)m=_.val&_.position,_.position>>=1,_.position==0&&(_.position=d,_.val=f(_.index++)),h|=(m>0?1:0)*E,E<<=1;switch(y=h){case 0:for(h=0,v=Math.pow(2,8),E=1;E!=v;)m=_.val&_.position,_.position>>=1,_.position==0&&(_.position=d,_.val=f(_.index++)),h|=(m>0?1:0)*E,E<<=1;k[R++]=o(h),y=R-1,C--;break;case 1:for(h=0,v=Math.pow(2,16),E=1;E!=v;)m=_.val&_.position,_.position>>=1,_.position==0&&(_.position=d,_.val=f(_.index++)),h|=(m>0?1:0)*E,E<<=1;k[R++]=o(h),y=R-1,C--;break;case 2:return F.join("")}if(C==0&&(C=Math.pow(2,I),I++),k[y])T=k[y];else{if(y!==R)return null;T=b+b.charAt(0)}F.push(T),k[R++]=b+T.charAt(0),b=T,--C==0&&(C=Math.pow(2,I),I++)}}};return c}();t!=null?t.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})})(Yj);var Kj=Uj(Yj.exports),Ar="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$@",_y=`	
\r!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`,NB=function(t){var n,o={},r={};function i(m){var v="";for(m=Math.abs(m);m;)v=Ar[m%64]+v,m=Math.floor(m/64);return v||"0"}function a(m){var v,E=0;for(v=m.length-1;v>=0;v--)E+=Ar.indexOf(m[v])*Math.pow(64,m.length-v-1);return E}function l(m){return m?(t&&(m=m.replace(n,function(v){return o[v]+"*"})),m.replace(/[^0-9a-zA-Z$@*]+([0-9a-zA-Z$@]\*[^0-9a-zA-Z$@]*)*/g,function(v){var E,y,k,C="",R=!1;for(E=0;E<v.length;E++)y=v[E],v[E+1]!=="*"?y===" "?C+="_":y==="."?C+=".":(k=_y.indexOf(y))>=0?C+="~"+Ar[k]:(R||(C+="'",R=!0),C+=("000"+(k=i(y.charCodeAt(0)))).substr(-3)):(C+=y+"*",E++);return R&&(C+="'"),C})):"''"}function c(m){return m==="''"?"":(m=m.replace(/[0-9a-zA-Z$@]\*/g,function(v){return"'*"+r[v[0]]+"'"})).split("'").map(function(v,E){return v[0]==="*"?v.substr(1):(v=v.replace(/_/g," ").replace(/\~./g,function(y){return _y[a(y[1])]}),E%2&&(v=v.replace(/[0-9a-zA-Z$@]+/g,function(y){var k,C="";for(k=0;k<y.length;k+=3)C+=String.fromCharCode(a(y[k]+y[k+1]+y[k+2]));return C})),v)}).join("")}function u(m){var v,E,y="",k=0;return y+=m<0?"-":"+",v=m.toString(),m.toExponential().length<v.length&&(v=m.toExponential()),(v=v.split(/[eE]/g))[1]&&(k=parseInt(v[1])),(v=v[0].split("."))[1]&&(k-=v[1].length),E=(E=v[0]+(v[1]||"")).replace(/0+$/,function(C){return k===0&&C.length<=2?C:(k+=C.length,"")}),y+=i(parseInt(E))||"0",k&&(y+=(k<0?"-":"+")+i(Math.abs(k))),y}function d(m){var v=m.indexOf("-",1)===-1?"+":"-",E=m.substr(1).split(/[\+\-]/);return parseFloat(m[0]+a(E[0])+(E[1]?"e"+v+a(E[1]):""))}function f(m,v){var E,y,k,C=[];if(Array.isArray(m))for(E=0;E<m.length;E++)C.push(b(m[E]));else for((k=Object.keys(m).sort()).length||v||C.push(":"),y=0;y<k.length;y++)m[E=k[y]]!==void 0&&C.push(l(E)+(v?"=":":")+b(m[E]));return v?C.join("&"):"("+C.join(",")+")"}function g(m){var v,E,y,k,C,R,I,T;function F(J){if(!J)throw new SyntaxError("Unexpected "+y+" at "+v+" in "+m)}function _(J,B){T=T||J,I||(I=T==="key"?{}:[]),C!==v&&(T==="key"?(R=c(m.substring(C,v)),T="value"):Array.isArray(I)?I.push(h(m.substring(C,v))):(R&&(I[R]=h(m.substring(C,v)),R=null),T="key"),C=v+(B?0:1))}for(k=0,C=1,v=1,E=m.length;v<E;v++)if((y=m[v])!=="(")if(y!==")"){if(F(k>=0),!(k>0))if(y!==":")if(y!==","){if(!(y!=="+"&&y!=="-")){if(T==="literal")continue;_("value",!0),T="literal"}}else _("value");else _("key")}else k===0&&_("value"),k--;else k===0&&(T=null),k++;return F(k===-1),I}function b(m,v){switch(typeof m){case"object":return m===null?"-+":f(m,v);case"string":return l(m);case"number":return isNaN(m)?"+!":m===1/0?"+*":m===-1/0?"-*":u(m);case"boolean":return m?"++":"--";case"undefined":return"+-";default:return""}}function h(m){switch(m[0]){case"(":return g(m);case"-":return m[1]!=="-"&&(m[1]==="+"?null:m[1]==="*"?-1/0:d(m));case"+":return m[1]==="-"?void 0:m[1]==="!"?NaN:m[1]==="+"||(m[1]==="*"?1/0:d(m));default:return c(m)}}return Array.isArray(t)?(t.splice(64),t.forEach(function(m){var v;for(v=0;v<m.length;v++)if(Ar.indexOf(m[v])!==-1&&r[m[v]]===void 0)return o[m]=m[v],void(r[m[v]]=m);for(v=0;v<64;v++)if(r[Ar[v]]===void 0)return o[m]=Ar[v],void(r[Ar[v]]=m)}),n=new RegExp(t.map(function(m){return m.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}).join("|"),"g")):t=null,{encode:b,decode:h,encodeInteger:i,decodeInteger:a,encodeString:l,decodeString:c,encodeNumber:u,decodeNumber:d,encodeCollection:f,decodeCollection:g,encodeQString:function(m){return b(m,!0)},decodeQString:function(m){return h("("+m.replace(/=/g,":").replace(/&/g,",")+")")}}};const Gj=Uj(NB)(),Qj="__s",RB=new RegExp(Qj+"=([^&]+)");var Wp={},Ya=[];function _B(t,n={}){try{let o=Gj.encode(t);return(n==null?void 0:n.mode)==="humanize"||o.length>1800&&(o=Kj.compressToEncodedURIComponent(JSON.stringify(t))),o}catch(o){return console.warn("URL State Provider: Could not encode data",t,o),""}}function LB(t){try{let n=Gj.decode(t);if(n&&typeof n=="object")return n}catch{}try{return JSON.parse(Kj.decompressFromEncodedURIComponent(t))}catch(n){return console.warn("URL State Provider: Could not decode string: ",t,n),{}}}function Vp(){const t=window.location.href.match(RB);if(!t)return{};try{return LB(decodeURIComponent(t[1]))}catch(n){return console.warn("URL State Provider: Could not decode string: ",t[1],n),{}}}function FB(t){var n=_B(t),o=new URL(window.location.href);return o.searchParams.set(Qj,n),decodeURIComponent(o.toString())}function AB(t){return Vp()[t]}function Jj(t,n,o,r){r=r||{};const i=function(c,u,d={}){const f=Vp();return typeof f=="string"?{}:(f[c]=d!=null&&d.merge?{...f[c],...u}:u,Ya.forEach(g=>g(f)),FB(f))}(t,n,{merge:o}),a=r.state||"",l=r.title||"";r!=null&&r.replace?window.history.replaceState(a,l,i):window.history.pushState(a,l,i)}function zB(t,n,o){Jj(t,n,!0,o)}function HB(t,n,o){Jj(t,n,!1,o)}function BB(t,n){Wp[t]=n}function WB(t){delete Wp[t]}function VB(t){return n=t,Ya.push(n),()=>{const o=Ya.indexOf(n);o>-1&&Ya.splice(o,1)};var n}function qB(t){return{currentState:function(){return AB(t)},onChange:function(n){return BB(t,n),function(){WB(t)}},onGlobalChange:VB,push:function(n,o){zB(t,n,o)},replace:function(n,o){HB(t,n,o)}}}window.addEventListener("popstate",function(t){t.target.location.href;const n=Vp();Object.keys(n).forEach(o=>{(function(r,i,a){var l=Wp[r];l&&l(i)})(o,n[o])})});const Ly="doop",Fy="f",Ay="s",zy="v",UB=t=>{const[n,o]=p.useState(!1),r=qB(t||Ly),i=xp(),a=vL(),{set:l,setSearchTerm:c}=ds(),u=Ep(),d=kp(),f=jp(),{setDetailsViolationGroupKind:g}=us();p.useEffect(()=>{var v,E,y,k,C,R;if(n||!i)return;console.debug(`DOOP: (${t||Ly}) setting up state from url:`,r.currentState());const b=(v=r.currentState())==null?void 0:v[Ay],h=(E=r.currentState())==null?void 0:E[Fy],m=(y=r.currentState())==null?void 0:y[zy];h===void 0&&((k=a==null?void 0:a.parsed)!=null&&k.supportGroups)&&l((R=(C=a==null?void 0:a.parsed)==null?void 0:C.supportGroups)==null?void 0:R.map(I=>({key:"check:support_group",label:"support group",value:I}))),b&&c(b),h&&l(h),m&&g(m),o(!0)},[i,a,l,g,c]),p.useEffect(()=>{!n||!i||r.push({[Fy]:u,[zy]:f,[Ay]:d})},[i,u,f,d])},qp="JUNO_COMMUNICATOR#",YB=()=>Math.random().toString(36).substring(2);window.__junoCommunicatorTabId=window.__junoCommunicatorTabId||YB();window.__junoEventListeners=window.__junoEventListeners||{broadcast:{},get:{}};const Up=(...t)=>console.log("Communicator Debug:",...t),Yp=(...t)=>console.warn("Communicator Warning:",...t),Kp=(...t)=>console.error("Communicator Error:",...t),KB=(t,n,o)=>{window.__junoEventListeners[t]||(window.__junoEventListeners[t]={}),window.__junoEventListeners[t][n]||(window.__junoEventListeners[t][n]=[]),window.__junoEventListeners[t][n].push(o)},GB=(t,n,o)=>{var r;(r=window.__junoEventListeners[t])!=null&&r[n]&&(window.__junoEventListeners[t][n]=window.__junoEventListeners[t][n].filter(i=>i!==o))},Hy=t=>(n,o={})=>new Promise(r=>{const i=t(n,o);r(i)});typeof BroadcastChannel>"u"?(console.log("BroadcastChannel is not supported in this browser. Use fake BroadcastChannel."),window.BroadcastChannel=function(){return{postMessage:()=>null,onmessage:()=>null,close:()=>null}}):console.log("BroadcastChannel is supported in this browser.");const Zj=new BroadcastChannel("__JUNO_CROSS_WINDOW_EVENT_BRIDGE__");Zj.onmessage=t=>{var n,o;const{type:r,name:i,data:a,sourceWindowId:l}=t.data||{};r==="broadcast"&&((o=(n=window.__junoEventListeners.broadcast)==null?void 0:n[i])==null||o.forEach(c=>{try{c(a,{crossWindow:!0,sourceWindowId:l,thisWindowId:window.__junoCommunicatorTabId})}catch(u){Yp(u)}}))};const By=(t,n=null,o={})=>{var r,i,a;try{const{debug:l,crossWindow:c=!1,consumerID:u}=o,d=qp+t;l&&Up(`${u?`(${u})`:""} broadcast ${c?"cross-window":"intra-window"} message ${d} with data `,n),(a=(i=(r=window.__junoEventListeners)==null?void 0:r.broadcast)==null?void 0:i[d])==null||a.forEach(f=>{try{f(n,{sourceWindowId:window.__junoCommunicatorTabId,thisWindowId:window.__junoCommunicatorTabId})}catch(g){Yp(g)}}),c&&Zj.postMessage({type:"broadcast",name:t,data:n,sourceWindowId:window.__junoCommunicatorTabId})}catch(l){Kp(l.message)}},Oc=(t,n,o={})=>{try{const{debug:r,consumerID:i}=o,a=qp+t;return r&&Up(`${i?`(${i})`:""} watch for message ${a}`),KB("broadcast",a,Hy(n)),()=>GB("broadcast",a,Hy(n))}catch(r){Kp(r.message)}},Wy=(t,n,o={})=>{var r,i,a;try{const{debug:l,consumerID:c}=o;if(t=qp+"GET:"+t,l&&Up(`${c?`(${c})`:""} get data for intra-window message ${t}`),((i=(r=window.__junoEventListeners.get)==null?void 0:r[t])==null?void 0:i.length)===0)return;(a=window.__junoEventListeners.get[t])==null||a.forEach(u=>{try{u(o==null?void 0:o.getOptions).then(d=>{n(d,{sourceWindowId:window.__junoCommunicatorTabId,thisWindowId:window.__junoCommunicatorTabId})})}catch(d){Yp(d)}})}catch(l){Kp(l.message)}},QB=()=>{const{setIsActive:t}=wL(),n=B2(),o=z2(),r=H2(),i=xp(),a=yL(),{setData:l,setAppLoaded:c}=W2();p.useEffect(()=>Oc("USER_ACTIVITY_UPDATE_DATA",d=>{console.debug("got message USER_ACTIVITY_UPDATE_DATA: ",d),t(d==null?void 0:d.isActive)},{debug:!0,consumerID:"doop"}),[t]),p.useEffect(()=>{!n||o||r||((a==null?void 0:a.name)===Tv.SIGN_ON&&!i?By("AUTH_LOGIN","doop",{debug:!1,consumerID:"doop"}):(a==null?void 0:a.name)===Tv.SIGN_OUT&&i&&By("AUTH_LOGOUT","doop",{consumerID:"doop",debug:!1}))},[n,o,r,i,a]),p.useEffect(()=>{if(!l||!c)return;Wy("AUTH_APP_LOADED",c,{consumerID:"doop",debug:!1});const u=Oc("AUTH_APP_LOADED",c,{consumerID:"doop",debug:!1});Wy("AUTH_GET_DATA",l,{consumerID:"doop",debug:!1});const d=Oc("AUTH_UPDATE_DATA",l,{consumerID:"doop",debug:!1});return()=>{u&&u(),d&&d()}},[l,c])},JB=({consumerId:t})=>(UB(t),QB(),null),ZB=[{kind:"kind-1",constraints:[{name:"const-1",metadata:{severity:"error",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-owner-info-on-helm-releases.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-owner-info-on-helm-releases.yaml",docstring:`gfhgddg jhfghjff

#### hgfhgdghdgd

hghfhjfjhfjf jhgjhjhg jhgjhgjhgjh ututuytuyt`},violation_groups:[{pattern:{kind:"violation-kind-1",name:"violation-group-1",namespace:"nms-1",message:"hgfhgdfhgdfhg jhfghfhgf. jhfhgfhgfhgf uiyuiy mnbnmnvbnv lkjklj.",object_identity:{service:"service-1",support_group:"support-group-3"}},instances:[{name:"violation-group-1.v1",cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-2",namespace:"nms-2",message:"nbvnbvnbv mnmnbnm mnbmnbn. jhgjhg oioi rtetrew nbvnbvnbv nbnvbvbv.",object_identity:{service:"service-1",support_group:"support-group-1"}},instances:[{name:"violation-group-2.v1",cluster:"cluster-13"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-3",namespace:"nms-2",message:"gfhgfhgfgf hgjhg jhjghjhg. iuiou ewrewer oioiiu nbmnbnb ghhghgjh.",object_identity:{service:"service-2",support_group:"support-group-1"}},instances:[{name:"violation-group-3.v1",cluster:"s-cluster-13"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-4",namespace:"cc3test",message:"gfhgfhgfgf hgjhg jhjghjhg. iuiou ewrewer oioiiu nbmnbnb ghhghgjh.",object_identity:{service:"service-2",support_group:"support-group-1"}},instances:[{name:"violation-group-4.v1",cluster:"cluster-3"},{name:"violation-group-4.v12",cluster:"cluster-2"},{name:"violation-group-4.v15",cluster:"cluster-10"},{name:"violation-group-4.v2",cluster:"cluster-5"},{name:"violation-group-4.v2",cluster:"cluster-7"},{name:"violation-group-4.v4",cluster:"cluster-4"},{name:"violation-group-4.v5",cluster:"cluster-6"},{name:"violation-group-4.v5",cluster:"cluster-13"},{name:"violation-group-4.v8",cluster:"cluster-1"},{name:"violation-group-4.v8",cluster:"cluster-8"}]}]}]},{kind:"kind-2",constraints:[{name:"const-2",metadata:{severity:"error",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-images-from-non-keppel.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-images-from-non-keppel.yaml",docstring:`hgfhgf hghghg ytuyt nmnmn ukj.

#### nghgfhgfhgfghfd hgfhgf bvc?

nvvv jghjhgjhg hgjhgjhg hhghghjg uyutyyut. jhgjhgjhg hgjhghgf jhgjhgjh jhjhgjhg oiou reerwew dsfds.
jhgjhghjg hvhgfhgf bvbvcbvcbvc nbvv uyuyiuy mnbmnbnmb mnbnb
mnbmnbmnb nbvnbvnbv nbvnbvnb.`},violation_groups:[{pattern:{kind:"violation-kind-2",name:"violation-group-1",namespace:"nms-2",message:"bvcbvc gfhgfhgf bvcbvcbvc bvnbvbc trytr gfgfhg kjkjhjkh nbnbnb bvnbvnbv nbvbvnbv nbvbnv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-1"}]}]}]},{kind:"kind-3",constraints:[{name:"const-3",metadata:{severity:"debug",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-forbidden-clusterwide-objects.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-forbidden-clusterwide-objects.yaml"},violation_groups:[{pattern:{kind:"violation-kind-1",name:"violation-group-1",message:"jhgjhgjh hjhgjhg mbnbnvbnbvnbv jyughghg hghghfghgfghf nvnbvnbvnbv nbnbvnvbnbv nbvnvbnbvnbv nbnbvnbvbn nbvnbvnbv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-4"},{cluster:"cluster-5"}]},{pattern:{kind:"violation-kind-2",name:"violation-group-2",message:"bnbnbv nnbvnbv nbvnbvbnv nbvnbvnbv nbvnbvnbv bvnbvnbv nbvnbvnbv nvbnbvnbv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-5"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-3",name:"violation-group-4",message:"hjhjghjg hghgfhgf bvbcvbvc ytuytuyt qrewerwerw bvbvcbvbvcbcvb nbnbvnbvnbv nbvnbvnbv nbvnbvnbv nbvnbvnbv nbvnbvnbv.",object_identity:{service:"service-4",support_group:"support-group-3"}},instances:[{cluster:"cluster-7"},{cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-4",name:"violation-group-5",message:"bnbnb nbnbvnbv nbvnbvnbv tuytuyt vhghjgh mnbmnbmnb nbnbnmbmnb nbmnbmnb nbnmbmnbm bnbnmbbnb nmbnbnbn mnbmnbnbn nbmnbnmb.",object_identity:{service:"service-4",support_group:"support-group-2"}},instances:[{cluster:"cluster-7"},{cluster:"cluster-8"}]}]}]},{kind:"violation-kind-1",constraints:[{name:"violations-const-1",metadata:{severity:"info",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-images-from-correct-registry.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-images-from-correct-registry.yaml",docstring:`Tjhgjhgjhg nhgfhgf nbvbnvb bvbvcbvc bcbvcbvc vcbcbvc bvcbvcvc bvbvcbvcbv bcvc.

#### hjhkghfg hgfhgfhgf bvhgfhgfhgf?

Bkjjhgjhg,mb nbvbnvbvc utyuytuyt. bvcbvcbvcbv bgfdgfdgf vvcxvcxz vcvcvcc, hjghgfhgf bvcbvcvc tyrytr bvnbnb mn,mn,mn mnmnnbhg fdsfdsdf ewewcvx cxvcxcv.
`},violation_groups:[{pattern:{kind:"violtion-kind-5",name:"violation-group-1",namespace:`
nms-3>`,message:"hgjhg bvnbvbvc gftrt vcfddfgfdfd bvbvbvcbvc hgfghfgh yutytyu bvbbv nmbnbnb nbvbvbv nbvnbvbv vcxvcxc x rerere bvcvbbv bvcbvc.",object_identity:{service:"service-4",support_group:"support-group-3"}},instances:[{namespace:"nms-3",cluster:"cluster-1"},{namespace:"nms-4",cluster:"cluster-3"},{namespace:"nms-5",cluster:"cluster-4"},{namespace:"nms-7",cluster:"cluster-5"},{namespace:"nms-6",cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-5",name:"violation-group-4",namespace:"nms-5",message:"mbnbbnv nvnbvnbv hhghghgfhgf bvbvbv nvnbvnbv bnnmbvnmb hghghfg dffdgf nvnvnbv nvbnbvbnv nbvnbvbnv bvv.",object_identity:{service:"service-5",support_group:"support-group-4"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-5",name:"violation-group-5",namespace:"nms-6",message:"hjjhj jgjhgjgh jhgjhgjhg jhgjhgjhg hjgjhgjhg. jhgjhg vhgjhg nbvnbvnv jhghjghg nnvv nbnbnbvbv nbvbvbvb.",object_identity:{service:"service-5",support_group:"support-group-5"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-6",name:"violation-group-6",namespace:"nms-7",message:"nbmnb nghjghg nbvnbvnb nbvnvbn. jhgjhg nbvbnv nbvbnvbn bvbnvbnv hghgh bnvnbvbnv nbvbv",object_identity:{service:"service-5",support_group:"support-group-6"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]}]}]}],XB={"cluster-identifiers":[{"cluster-1":{layer:"layer-1",type:"type-1"},"cluster-2":{layer:"layer-2",type:"type-2"},"cluster-3":{layer:"layer-3",type:"type-3"},"cluster-4":{layer:"layer-4",type:"type-4"},"cluster-5":{layer:"layer-5",type:"type-5"},"cluster-6":{layer:"layer-6",type:"type-6"},"cluster-7":{layer:"layer-7",type:"type-7"},"cluster-8":{layer:"layer-8",type:"type-8"},"cluster-9":{layer:"layer-9",type:"type-9"},"cluster-10":{layer:"layer-10",type:"type-10"},"cluster-11":{layer:"layer-11",type:"type-11"},"cluster-12":{layer:"layer-12",type:"type-12"},"cluster-13":{layer:"layer-13",type:"type-13"},"cluster-14":{layer:"layer-14",type:"type-14"}}],templates:ZB},eW=(t={})=>{const{setEndpoint:n,setMock:o}=bL(),r=p.useMemo(()=>t.isMock===!0||t.isMock==="true",[t.isMock]);p.useEffect(()=>{r&&(o(!0),IF(XB,{debug:!0,rewriteRoutes:{"/(?:doop-api\\.sap/v2/violations/(.*))":"/$1"}}))},[]);const i=new BL({defaultOptions:{queries:{meta:{endpoint:t.apiEndpoint,mock:t.isMock}}}});return p.useLayoutEffect(()=>{n(r?window.location.origin:t==null?void 0:t.apiEndpoint)},[t==null?void 0:t.apiEndpoint,r]),U.jsx(L0,{children:U.jsxs(ME,{pageHeader:"Doop",embedded:t.embedded===!0,children:[U.jsx(k$,{heading:`Decentralized Observer of Policies  ${t.displayName?` - ${t.displayName}`:""}`}),U.jsx(JB,{consumerId:t.id||"doop"}),U.jsx(YL,{client:i,children:U.jsx(MB,{children:U.jsx(TB,{id:t==null?void 0:t.id,showDebugSeverities:t.showDebugSeverities})})})]})})},lW=t=>U.jsxs(d1,{children:[U.jsx("style",{children:DB.toString()}),U.jsx(gL,{children:U.jsx(eW,{...t})})]});export{lW as default};
