var Yp=t=>{throw TypeError(t)};var js=(t,n,r)=>n.has(t)||Yp("Cannot "+r);var W=(t,n,r)=>(js(t,n,"read from private field"),r?r.call(t):n.get(t)),Re=(t,n,r)=>n.has(t)?Yp("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,r),we=(t,n,r,o)=>(js(t,n,"write to private field"),o?o.call(t,r):n.set(t,r),r),_e=(t,n,r)=>(js(t,n,"access private method"),r);var ca=(t,n,r,o)=>({set _(i){we(t,n,i,r)},get _(){return W(t,n,o)}});import{r as p,R as S,g as Tl,a as Nj,b as or,x as Xr,c as Kp}from"./index-BNncDdGS.js";import"./index-DrRGJGUJ.js";var W0={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fj=p,Lj=Symbol.for("react.element"),Aj=Symbol.for("react.fragment"),_j=Object.prototype.hasOwnProperty,$j=Fj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zj={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,n,r){var o,i={},a=null,l=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(o in n)_j.call(n,o)&&!zj.hasOwnProperty(o)&&(i[o]=n[o]);if(t&&t.defaultProps)for(o in n=t.defaultProps,n)i[o]===void 0&&(i[o]=n[o]);return{$$typeof:Lj,type:t,key:a,ref:l,props:i,_owner:$j.current}}Ml.Fragment=Aj;Ml.jsx=U0;Ml.jsxs=U0;W0.exports=Ml;var G=W0.exports,de=function(){return de=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},de.apply(this,arguments)};function at(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>n.indexOf(o)&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)0>n.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(r[o[i]]=t[o[i]]);return r}function Hj(t,n,r){for(var o,i=0,a=n.length;i<a;i++)(o||!(i in n))&&(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return t.concat(o||Array.prototype.slice.call(n))}var Bj=`
  jn-flex
  jn-flex-col
  jn-h-full
`,Vj=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=at(t,["className","children"]);return S.createElement("div",de({className:"juno-body ".concat(Bj," ").concat(r)},i),o)};function he(){return he=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},he.apply(null,arguments)}var q0={exports:{}},Wj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Uj=Wj,qj=Uj;function Y0(){}function K0(){}K0.resetWarningCache=Y0;var Yj=function(){function t(o,i,a,l,c,u){if(u!==qj){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function n(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:K0,resetWarningCache:Y0};return r.PropTypes=r,r};q0.exports=Yj();var Kj=q0.exports;const x=Tl(Kj);x.string,x.any;var Gp,Qp,Zp,Jp,Xp,eg,tg,ng,rg,og,ig,ag,lg,sg,cg,ug,dg,fg,pg,Gj=["title","titleId"];function Sc(){return Sc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Sc.apply(null,arguments)}function Qj(t,n){if(t==null)return{};var r,o,i=Zj(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Zj(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Jj=function(t){var n=t.title,r=t.titleId,o=Qj(t,Gj);return p.createElement("svg",Sc({xmlns:"http://www.w3.org/2000/svg",width:49,height:41,fill:"none",viewBox:"0 0 49 41",alt:"Juno UI","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Gp||(Gp=p.createElement("path",{fill:"#0FA7B4",d:"M11.093 16 4 20.095l7.093 4.105 7.093-4.105L11.093 16Z"})),Qp||(Qp=p.createElement("path",{fill:"#000",fillRule:"evenodd",d:"m11.093 16.346 6.793 3.922v7.844l-6.793 3.922L4.3 28.112v-7.844l6.793-3.922ZM4 20.095 11.093 16l7.093 4.095v8.19l-7.093 4.095L4 28.285v-8.19Z",clipRule:"evenodd"})),Zp||(Zp=p.createElement("path",{fill:"#05646D",d:"M11.093 24.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),Jp||(Jp=p.createElement("path",{fill:"#05646D",d:"M11.093 24.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),Xp||(Xp=p.createElement("path",{fill:"#098590",d:"M11.093 24.19v8.19L4 28.285v-8.19l7.093 4.095Z"})),eg||(eg=p.createElement("path",{fill:"#15D0E0",fillRule:"evenodd",d:"M18.186 20.095 11.093 16 4 20.095v8.19l7.093 4.095 7.093-4.095v-8.19Zm-7.093-3.749 6.493 3.75-6.493 3.757L4.6 20.095l6.494-3.749Zm-.3 8.017L4.3 20.614v7.498l6.493 3.748v-7.497Zm7.093-3.749-6.493 3.749v7.497l6.492-3.748v-7.498Z",clipRule:"evenodd"})),tg||(tg=p.createElement("path",{fill:"#098590",d:"M24.402 36.76V20.38l-14.185-8.19v8.226l7.065 4.079v8.155l7.12 4.11Z"})),ng||(ng=p.createElement("path",{fill:"#0FA7B4",d:"m38.587 20.388-7.08 4.087v-8.19l7.08-4.087v-.008l-14.185 8.19v16.38l14.185-8.19v-8.182Z"})),rg||(rg=p.createElement("path",{fill:"#05646D",d:"M31.591 16.337v.064-8.254l-7.093 4.095 7.093 4.095Z"})),og||(og=p.createElement("path",{fill:"#02454B",d:"M31.51 16.285v8.19l7.092-4.095-7.093-4.095Z"})),ig||(ig=p.createElement("path",{fill:"#15D0E0",d:"M37.092 8 30 12.095v8.19l7.092 4.095 7.093-4.095v-8.19L37.092 8Z"})),ag||(ag=p.createElement("path",{fill:"#0FA7B4",d:"M37.092 16.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),lg||(lg=p.createElement("path",{fill:"#098590",d:"M37.092 16.19v8.19L30 20.285v-8.19l7.092 4.095Z"})),sg||(sg=p.createElement("path",{fill:"url(#a)",fillRule:"evenodd",d:"M44.185 12.095 37.092 8 30 12.095v8.19l7.092 4.095 7.093-4.095v-8.19Zm-7.093-3.749 6.493 3.75-6.493 3.757-6.493-3.758 6.493-3.749Zm-.3 8.017-6.493-3.749v7.497l6.493 3.75v-7.498Zm7.093-3.749-6.493 3.749v7.497l6.493-3.748v-7.498Z",clipRule:"evenodd"})),cg||(cg=p.createElement("path",{fill:"#0FA7B4",d:"m31.502 32.65-7.1 4.15V20.4l7.1-4.11v16.36Z"})),ug||(ug=p.createElement("path",{fill:"#15D0E0",d:"m24.502 12.25 7 4.04-7.1 4.11-14.2-8.2 14.2-8.2 7.2 4.15-7.1 4.1Z"})),dg||(dg=p.createElement("path",{fill:"url(#b)",fillRule:"evenodd",d:"M31.602 8.15 24.402 4l-14.184 8.191h-.001v.001l-.014.008.013.008v8.147l7.066 4.08v8.19l7.12 4.135V28.7v8.1l5.52-3.226 8.665-5.003v-5.054l-.3.173v4.707l-6.77 3.91.033-7.51 3.133-1.808-.3-.173-2.831 1.634v-.011h-.044v-8.154l1.19-.687v-.008l-1.203.695-6.773-3.908.006-.01-.214-.124 7.088-4.093Zm-6.9 28.127v-7.576l6.506-3.717v.011l.042-.024-.034 7.509-1.446.835-5.068 2.962Zm0-7.921 6.506-3.718v-7.84l-6.506 3.756v7.802Zm6.3-20.206-6.787 3.92-6.577-3.817 6.764-3.907 6.6 3.804Zm-7.096 4.087-6.568-3.811-6.535 3.774 6.199 3.58 6.904-3.543Zm.294.185-6.889 3.537 7.09 4.095 6.501-3.764-6.702-3.868Zm-6.618 20.055V24.26l-7.066-4.08v-7.47l13.586 7.844V36.24l-6.52-3.764Z",clipRule:"evenodd"})),fg||(fg=p.createElement("path",{fill:"url(#c)",d:"m34.376 14.622.007.004 4.204-2.428v-.008l-4.21 2.432Z"})),pg||(pg=p.createElement("defs",null,p.createElement("linearGradient",{id:"a",x1:24.093,x2:23.823,y1:36.799,y2:3.998,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#05646D"}),p.createElement("stop",{offset:.613,stopColor:"#15D0E0"}),p.createElement("stop",{offset:1,stopColor:"#098590"})),p.createElement("linearGradient",{id:"b",x1:26.402,x2:15.344,y1:-1,y2:32.206,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#127E88"}),p.createElement("stop",{offset:.539,stopColor:"#44F0FF"}),p.createElement("stop",{offset:1,stopColor:"#0B717A"})),p.createElement("linearGradient",{id:"c",x1:26.402,x2:15.344,y1:-1,y2:32.206,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#127E88"}),p.createElement("stop",{offset:.539,stopColor:"#44F0FF"}),p.createElement("stop",{offset:1,stopColor:"#0B717A"})))))},Xj=`
  jn-min-h-[3.25rem]
  jn-bg-juno-grey-blue-11
  jn-sticky
  jn-top-0
  jn-px-6
  jn-py-3
  jn-z-50
`,eE=`
  jn-grid
  jn-grid-cols-[minmax(0,max-content),1fr]
  jn-gap-3
  jn-h-7
  jn-w-full
  jn-overflow-hidden
  jn-items-center
`,tE=`
  jn-h-7
  jn-max-w-xs
  [&>*]:jn-w-min
  [&>*]:jn-max-w-xs
  [&>*]:jn-h-7
  [&>*]:jn-object-contain
`,nE=function(t){return`
    jn-text-lg
    jn-text-theme-high
    `.concat(t&&"jn-cursor-pointer",`
    `)},gg=function(t){var n=t.heading,r=n===void 0?null:n,o=t.className,i=o===void 0?"":o,a=t.children,l=a===void 0?null:a,c=t.logo,u=c===void 0?void 0:c,d=t.onClick,f=at(t,["heading","className","children","logo","onClick"]);return S.createElement("div",de({className:"juno-pageheader theme-dark ".concat(Xj," ").concat(i),role:"banner"},f),S.createElement("div",{className:"juno-pageheader-inner ".concat(eE)},S.createElement("div",{className:"juno-pageheader-logo-container ".concat(tE)},typeof u=="function"||S.isValidElement(u)&&u||(u===!0||u===void 0)&&S.createElement(Jj,{"data-testid":"default-logo",alt:""})),S.createElement("div",null,r&&S.createElement("div",{className:nE(d!==void 0),onClick:d},r)),l))},rE=`
  jn-flex
  jn-grow
  jn-bg-theme-global-bg
`,hg=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=o===void 0?null:o,a=at(t,["className","children"]);return S.createElement("main",de({className:"juno-main ".concat(rE," ").concat(r)},a),i)},oE=`
  jn-flex
  jn-grow
`,iE=`
  2xl:jn-container
  2xl:jn-mx-auto
`,aE=`
  3xl:jn-container
  3xl:jn-mx-auto
`,mg=function(t){var n=t.children,r=n===void 0?null:n,o=t.fullWidth,i=t.hasSideNav,a=t.className,l=a===void 0?"":a,c=at(t,["children","fullWidth","hasSideNav","className"]);return S.createElement("div",de({className:`
        juno-main-inner
         `.concat(oE,`
         `).concat(o!==void 0&&o?"juno-main-inner-fullwidth":i!==void 0&&i?aE:iE,`
         `).concat(l)},c),r)},lE=`
  jn-flex-col
  jn-grow
  jn-bg-[right_top_1rem]
  jn-bg-no-repeat
  jn-bg-theme-content-area-bg
  jn-relative
`,bg=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=o===void 0?null:o,a=at(t,["className","children"]);return S.createElement("div",de({className:"juno-content-container ".concat(lE," ").concat(r)},a),i)},vg,sE=["title","titleId"];function Cc(){return Cc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Cc.apply(null,arguments)}function cE(t,n){if(t==null)return{};var r,o,i=uE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function uE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var dE=function(t){var n=t.title,r=t.titleId,o=cE(t,sE);return p.createElement("svg",Cc({width:59,height:42,viewBox:"0 0 59 42",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,vg||(vg=p.createElement("path",{d:"M59.3825 11.1608C59.3545 11.1402 59.3267 11.1209 59.299 11.1029C56.8161 9.48915 53.8572 8.55235 50.6806 8.55235C49.5105 8.55235 48.3701 8.67944 47.272 8.92064C44.3685 3.66326 38.8166 0.108856 32.4447 0.108856C23.4894 0.108856 16.1537 7.12988 15.514 16.032L15.3487 16.0309L15.1066 16.0329C7.13468 16.1633 0.712036 22.728 0.712036 30.807C0.712036 35.0932 2.69502 38.9531 5.7492 41.6521H10.3029C6.42919 39.7347 3.75866 35.6852 3.75866 30.9998C3.75866 24.4639 8.95513 19.1655 15.3653 19.1655C16.2819 19.1655 17.1736 19.2738 18.0286 19.4792C17.9603 18.8925 17.9251 18.2952 17.9251 17.6896C17.9251 9.4705 24.4057 2.80763 32.4 2.80763C38.5297 2.80763 43.7695 6.72481 45.8801 12.2573C47.317 11.7139 48.8714 11.417 50.4937 11.417C53.699 11.417 56.6389 12.5758 58.9323 14.505C59.0819 14.6309 59.2321 14.8185 59.3825 15.0614V11.1608Z",fill:"#F0AB00"})))},fE=`
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
`,pE=`
  jn-h-[2.625rem]
  jn-absolute
  jn-right-0
  jn-bottom-0
`,yg=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=o===void 0?null:o,a=at(t,["className","children"]);return S.createElement("div",de({className:"juno-pagefooter ".concat(fE," ").concat(r),role:"contentinfo"},a),i,S.createElement(dE,{className:pE,alt:"cloud shape"}))},gE=function(t){var n=t.children,r=t.className,o=r===void 0?"":r,i=t.contentHeading,a=i===void 0?"":i,l=t.embedded,c=t.fullWidthContent,u=t.pageHeader,d=u===void 0?S.createElement(gg,null):u,f=t.pageFooter,g=f===void 0?S.createElement(yg,null):f,b=t.sideNavigation,h=t.topNavigation,m=at(t,["children","className","contentHeading","embedded","fullWidthContent","pageHeader","pageFooter","sideNavigation","topNavigation"]);return a&&a.length&&console.warn("AppShell: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a ContentHeading element as a child in your main content."),S.createElement(Vj,de({className:o},m),a||"",l!==void 0&&l?S.createElement(S.Fragment,null,h&&h,S.createElement(hg,null,S.createElement(mg,{fullWidth:c!==!1,hasSideNav:!!b,className:"".concat(h?"jn-mt-[3.875rem]":"")},b&&b,S.createElement(bg,null,n)))):S.createElement(S.Fragment,null,d&&(typeof d=="string"||d instanceof String)?S.createElement(gg,{heading:d}):d,h&&h,S.createElement(hg,null,S.createElement(mg,{fullWidth:c===!0,hasSideNav:!!b,className:"jn-mt-[3.875rem]"},b&&b,S.createElement(bg,{className:b?"":"jn-ml-8"},n))),g||S.createElement(yg,null)))};const If=t=>{let{mode:n="open",delegatesFocus:r=!1,children:o=null}=t;const i=p.useRef(),[a,l]=p.useState();return S.useEffect(()=>{i.current&&l(i.current.attachShadow({delegatesFocus:r,mode:n}))},[]),S.createElement("div",{ref:i,"data-shadow-host":"true",style:{height:"100%"}},a&&Nj.createPortal(o,a))};If.propTypes={mode:x.oneOf(["open","closed"]),delegatesFocus:x.bool,children:x.node};function G0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Q0(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var r=function o(){if(this instanceof o){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(n,i);return new a}return n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var i=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:function(){return t[o]}})}),r}function Y(t){return n=>{let{opacityVariable:r,opacityValue:o}=n;return o===void 0?r===void 0?`rgb(var(${t}))`:`rgba(var(${t}), var(${r}, 1))`:`rgba(var(${t}), ${o})`}}var hE={content:["./src/components/**/*.{js,jsx,ts,tsx,mdx}","./src/dummyComponents/*.{js,jsx,ts,tsx,mdx}","./src/docs/**/*.{js,jsx,ts,tsx,mdx}"],prefix:"jn-",theme:{fontFamily:{sans:['"IBM Plex Sans"',"ui-sans-serif","Arial","system-ui","sans-serif"],condensed:['"IBM Plex Sans Condensed"',"ui-sans-serif","Arial","system-ui","sans-serif"],serif:['"IBM Plex Serif"',"ui-serif","serif"],mono:['"IBM Plex Mono"',"ui-monospace","monospace"]},colors:{current:"currentColor","juno-grey-blue":{1:Y("--color-juno-grey-blue-1-raw"),2:Y("--color-juno-grey-blue-2-raw"),3:Y("--color-juno-grey-blue-3-raw"),4:Y("--color-juno-grey-blue-4-raw"),5:Y("--color-juno-grey-blue-5-raw"),6:Y("--color-juno-grey-blue-6-raw"),7:Y("--color-juno-grey-blue-7-raw"),8:Y("--color-juno-grey-blue-8-raw"),9:Y("--color-juno-grey-blue-9-raw"),10:Y("--color-juno-grey-blue-10-raw"),11:Y("--color-juno-grey-blue-11-raw"),DEFAULT:Y("--color-juno-grey-blue-11-raw")},"juno-blue":{1:Y("--color-juno-blue-1-raw"),2:Y("--color-juno-blue-2-raw"),3:Y("--color-juno-blue-3-raw"),4:Y("--color-juno-blue-4-raw"),5:Y("--color-juno-blue-5-raw"),6:Y("--color-juno-blue-6-raw"),7:Y("--color-juno-blue-7-raw"),8:Y("--color-juno-blue-8-raw"),9:Y("--color-juno-blue-9-raw"),10:Y("--color-juno-blue-10-raw"),DEFAULT:Y("--color-juno-blue-5-raw")},"juno-turquoise":{1:Y("--color-juno-turquoise-1-raw"),2:Y("--color-juno-turquoise-2-raw"),3:Y("--color-juno-turquoise-3-raw"),4:Y("--color-juno-turquoise-4-raw"),5:Y("--color-juno-turquoise-5-raw"),6:Y("--color-juno-turquoise-6-raw"),7:Y("--color-juno-turquoise-7-raw"),8:Y("--color-juno-turquoise-8-raw"),9:Y("--color-juno-turquoise-9-raw"),10:Y("--color-juno-turquoise-10-raw"),DEFAULT:Y("--color-juno-turquoise-5-raw")},"juno-grey-light":{1:Y("--color-juno-grey-light-1-raw"),2:Y("--color-juno-grey-light-2-raw"),3:Y("--color-juno-grey-light-3-raw"),4:Y("--color-juno-grey-light-4-raw"),5:Y("--color-juno-grey-light-5-raw"),6:Y("--color-juno-grey-light-6-raw"),7:Y("--color-juno-grey-light-7-raw"),8:Y("--color-juno-grey-light-8-raw"),9:Y("--color-juno-grey-light-9-raw"),10:Y("--color-juno-grey-light-10-raw"),11:Y("--color-juno-grey-light-11-raw"),DEFAULT:Y("--color-juno-grey-light-1-raw")},"juno-red":{1:Y("--color-juno-red-1-raw"),2:Y("--color-juno-red-2-raw"),3:Y("--color-juno-red-3-raw"),4:Y("--color-juno-red-4-raw"),5:Y("--color-juno-red-5-raw"),6:Y("--color-juno-red-6-raw"),7:Y("--color-juno-red-7-raw"),8:Y("--color-juno-red-8-raw"),DEFAULT:Y("--color-juno-red-5-raw")},"sap-grey":{1:Y("--color-sap-grey-1-raw"),2:Y("--color-sap-grey-2-raw"),3:Y("--color-sap-grey-3-raw"),4:Y("--color-sap-grey-4-raw"),5:Y("--color-sap-grey-5-raw"),6:Y("--color-sap-grey-6-raw"),7:Y("--color-sap-grey-7-raw"),8:Y("--color-sap-grey-8-raw"),DEFAULT:Y("--color-sap-grey-8-raw")},"sap-blue":{1:Y("--color-sap-blue-1-raw"),2:Y("--color-sap-blue-2-raw"),3:Y("--color-sap-blue-3-raw"),4:Y("--color-sap-blue-4-raw"),5:Y("--color-sap-blue-5-raw"),6:Y("--color-sap-blue-6-raw"),DEFAULT:Y("--color-sap-blue-5-raw")},"sap-gold":{DEFAULT:Y("--color-sap-gold-raw")},"sap-purple":{1:Y("--color-sap-purple-1-raw"),2:Y("--color-sap-purple-2-raw"),3:Y("--color-sap-purple-3-raw"),4:Y("--color-sap-purple-4-raw"),5:Y("--color-sap-purple-5-raw"),6:Y("--color-sap-purple-6-raw"),DEFAULT:Y("--color-sap-purple-5-raw")},"sap-green":{1:Y("--color-sap-green-1-raw"),2:Y("--color-sap-green-2-raw"),3:Y("--color-sap-green-3-raw"),4:Y("--color-sap-green-4-raw"),5:Y("--color-sap-green-5-raw"),6:Y("--color-sap-green-6-raw"),DEFAULT:Y("--color-sap-green-5-raw")},"sap-orange":{1:Y("--color-sap-orange-1-raw"),2:Y("--color-sap-orange-2-raw"),3:Y("--color-sap-orange-3-raw"),4:Y("--color-sap-orange-4-raw"),5:Y("--color-sap-orange-5-raw"),6:Y("--color-sap-orange-6-raw"),DEFAULT:Y("--color-sap-orange-5-raw")},white:Y("--color-white-raw"),black:Y("--color-black-raw"),transparent:"transparent",theme:{accent:Y("--color-accent-raw"),danger:Y("--color-danger-raw"),error:Y("--color-error-raw"),info:Y("--color-info-raw"),success:Y("--color-success-raw"),warning:Y("--color-warning-raw"),focus:Y("--color-focus-raw"),"background-lvl-0":Y("--color-background-lvl-0-raw"),"background-lvl-1":Y("--color-background-lvl-1-raw"),"background-lvl-2":Y("--color-background-lvl-2-raw"),"background-lvl-3":Y("--color-background-lvl-3-raw"),"background-lvl-4":Y("--color-background-lvl-4-raw"),"background-lvl-5":Y("--color-background-lvl-5-raw")}},extend:{backgroundColor:{theme:{"global-bg":Y("--color-global-bg-raw"),"badge-default":"var(--color-badge-default-bg)","box-default":"var(--color-box-bg)","code-block":Y("--color-codeblock-bg"),"content-area-bg":Y("--color-content-area-bg-raw"),panel:"var(--color-panel-bg)",textinput:Y("--color-textinput-bg"),"textinput-autofill":Y("--color-textinput-autofill-bg"),select:Y("--color-select-bg"),checkbox:Y("--color-checkbox-bg"),radio:Y("--color-radio-bg"),"radio-checked":Y("--color-radio-checked-bg"),"switch-handle":Y("--color-switch-handle-bg"),"switch-handle-checked":Y("--color-switch-handle-checked-bg"),required:Y("--color-required-bg"),introbox:Y("--color-introbox-bg"),"datagridrow-selected":Y("--color-datagridrow-selected"),"datalistrow-selected":Y("--color-datalistrow-selected"),"message-border-danger":Y("--color-message-danger-border"),"message-border-default":Y("--color-message-default-border"),"message-border-error":Y("--color-message-error-border"),"message-border-warning":Y("--color-message-warning-border"),"message-border-success":Y("--color-message-success-border"),"tab-navigation-top":Y("--color-tabnavigation-top-bg"),filters:Y("--color-filters-bg"),"filter-input":Y("--color-filter-input-bg"),"filter-input-textinput":Y("--color-filter-input-textinput-bg"),"filter-pill-key":Y("--color-filter-pill-key-bg"),"modal-backdrop":"var(--color-modal-backdrop-bg)","sidenavigation-item-active":"var(--color-sidenavigation-item-active-bg)","topnavigation-item":"var(--color-topnavigation-item-bg)","topnavigation-item-active":"var(--color-topnavigation-item-active-bg)"}},backgroundImage:{"theme-message-default":"var(--gradient-message-default-bg)","theme-message-success":"var(--gradient-message-success-bg)","theme-message-warning":"var(--gradient-message-warning-bg)","theme-message-danger":"var(--gradient-message-danger-bg)","theme-message-error":"var(--gradient-message-error-bg)"},textColor:{theme:{highest:Y("--color-text-highest-raw"),high:Y("--color-text-high-raw"),default:Y("--color-text-default-raw"),light:Y("--color-text-light-raw"),disabled:Y("--color-text-disabled-raw"),link:Y("--color-text-link-raw"),"on-danger":Y("--color-button-danger-text"),"on-default":Y("--color-button-default-text"),textinput:Y("--color-textinput-text"),"textinput-autofill":Y("--color-textinput-autofill-text"),"textinput-autofill-label":Y("--color-textinput-autofill-label"),"checkbox-checked":Y("--color-checkbox-checked-color"),"sidenavigation-item-active":"var(--color-sidenavigation-item-active)"}},borderColor:{theme:{default:Y("--color-default-border"),"codeblock-bar":Y("--color-codeblock-bar-border"),"codeblock-tab-active":Y("--color-text-default-raw"),"message-default":Y("--color-message-default-border"),"message-danger":Y("--color-message-danger-border"),"message-error":Y("--color-message-error-border"),"message-warning":Y("--color-message-warning-border"),"message-success":Y("--color-message-success-border"),panel:Y("--color-panel-border-raw"),"switch-default":Y("--color-switch-default-border"),"switch-hover":Y("--color-switch-hover-border"),"datalist-row":Y("--color-datalist-row-border"),introbox:Y("--color-introbox-border"),"tab-navigation-content-bottom":Y("--color-tabnavigation-content-bottom-border"),"tab-active-bottom":Y("--color-text-default-raw"),"filter-input":Y("--color-filter-input-border"),"filter-pill":Y("--color-filter-pill-border"),"box-default":"var(--color-box-border)","textinput-default":Y("--color-textinput-default-border"),"tab-content-inactive-bottom":Y("--color-background-lvl-4-raw")}},padding:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem","grid-column":"0 .5rem"},height:{textinput:"2.375rem",floatinglabelinput:"3rem","switch-default":"1.4375rem","switch-handle-default":"1.1875rem"},ringOffsetColor:{theme:{focus:Y("--color-global-bg-raw")}},screens:{"3xl":"1856px"},width:{"switch-default":"2.625rem","switch-handle-default":"1.1875rem","grid-column-default":"var(--grid-column-default-width)","grid-col-1":"8.333333%","grid-col-2":"16.666667%","grid-col-3":"25%","grid-col-4":"33.333333%","grid-col-5":"41.666667%","grid-col-6":"50%","grid-col-7":"58.333333%","grid-col-8":"66.666667%","grid-col-9":"75%","grid-col-10":"83.333333%","grid-col-11":"91.666667%","grid-col-12":"100%"},borderRadius:{"3px":"3px"},margin:{"grid-row":"0 var(--grid-row-margin-x)"},flex:{"grid-column":"var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis)"}},borderWidth:{DEFAULT:"1px",0:"0",2:"2px",3:"3px",4:"4px",6:"6px"}},plugins:[]},mE=G0(hE);const wg="https://assets.juno.global.cloud.sap/assets/fonts/plex/css/ibm-plex.min.css",Es="juno-style-provider-golbal-fonts",Z0=t=>{let{inline:n}=t;return p.useInsertionEffect(()=>{if(!document.querySelector(`[id="${Es}"]`)){const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.googleapis.com";const o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.gstatic.com",o.crossOrigin="anonymous";const i=document.createElement("link");i.rel="stylesheet",i.href=wg,i.setAttribute("id",Es),document.head.appendChild(r),document.head.appendChild(o),document.head.appendChild(i)}},[]),n?S.createElement("style",{[`data-${Es}`]:""},`@import url("${wg}");`):null};Z0.propTypes={inline:x.bool};const Pc=`@charset "UTF-8";
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
}`,ks="juno-style-provider-global-styles",J0=t=>{let{inline:n}=t;return p.useInsertionEffect(()=>{if(!(n||document.querySelector(`[id="${ks}"]`))){const r=document.createElement("style");r.setAttribute("id",ks),r.appendChild(document.createTextNode(Pc)),document.head.append(r)}},[]),n?S.createElement("style",{[`data-${ks}`]:""},Pc):null};J0.propTypes={inline:x.bool};function bE(t,n){const[r,o]=p.useState(()=>{try{const i=window.localStorage.getItem(t);return i?JSON.parse(i):n}catch(i){return console.log("Juno Error: useLocalStorage error: ",i),n}});return[r,i=>{try{const a=i instanceof Function?i(r):i;o(a),window.localStorage.setItem(t,JSON.stringify(a))}catch(a){return console.log("Juno Error: useLocalStorage error: ",a),n}}]}const X0=p.createContext(),vE="juno-app-body",xg="theme-dark",Ic=t=>{let{stylesWrapper:n="inline",theme:r,children:o=null,shadowRootMode:i}=t;const a=r||xg,[l,c]=bE("juno-theme",a),u=p.useRef(l),d=p.useRef(vE+" "+a),f=p.useRef(null),g=p.useCallback(y=>{let{children:E}=y;return n==="shadowRoot"?S.createElement(If,{mode:i},E):E},[n,i]),b=p.useCallback(y=>{f.current&&typeof y=="string"&&(f.current.classList.add(y),d.current=f.current.className)},[]),h=p.useCallback(y=>{f.current&&typeof y=="string"&&(f.current.classList.remove(y),d.current=f.current.className)},[]),m=p.useCallback(y=>{f.current&&typeof y=="string"&&(f.current.classList.remove(u.current),f.current.classList.add(y),u.current=y,d.current=f.current.className,c(y))},[f.current,u.current]);return p.useEffect(()=>{f.current&&m(r||xg)},[r]),p.useMemo(()=>S.createElement(g,null,S.createElement(Z0,{inline:n!=="head"}),S.createElement(J0,{inline:n!=="head"}),S.createElement(X0.Provider,{value:{styles:Pc,theme:mE,currentTheme:u.current,setThemeClass:m,addCssClass:b,removeCssClass:h}},S.createElement("div",{className:d.current,ref:f},o))),[n,o,i,d.current,m])};Ic.propTypes={children:x.node,stylesWrapper:x.oneOf(["head","inline","shadowRoot"]),theme:x.string,shadowRootMode:x.oneOf(["open","closed"])},Ic.useStyles=()=>S.useContext(X0);const ey=p.createContext();function ty(){const t=p.useContext(ey),[n,r]=p.useState(t==null?void 0:t.current);return p.useEffect(()=>t?void(t.current&&r(!0)):void console.warn("usePortalRef should be called inside a PortalProvider! You are probably using a component that renders a portal, e.g. Modal or Select. Be sure that your app is wrapped in an AppShellProvider."),[t]),t==null?void 0:t.current}const Ua=t=>{let{children:n}=t;const r=ty();return r?or.createPortal(n,r):null};Ua.propTypes={children:x.any},Ua.propTypes={};const Dc=t=>{let{className:n="",id:r="",children:o=null}=t;const i=p.useRef();return S.createElement(ey.Provider,{value:i},o,S.createElement("div",{className:`juno-portal-container ${n}`,id:r,ref:i}))};Dc.Portal=Ua,Ua.displayName="PortalProvider.Portal",Dc.propTypes={className:x.string,id:x.string,children:x.node};const ny=t=>{let{shadowRoot:n=!0,shadowRootMode:r="open",stylesWrapper:o="inline",theme:i=null,children:a}=t;const l=S.useCallback(c=>{let{children:u}=c;return n?S.createElement(If,{mode:r},u):u},[n,r]);return S.createElement(l,null,S.createElement(Ic,{theme:i,stylesWrapper:n?"inline":o},S.createElement(Dc,null,a)))};ny.propTypes={shadowRoot:x.bool,shadowRootMode:x.oneOf(["open","closed"]),stylesWrapper:x.oneOf(["head","inline"]),theme:x.string,children:x.any};var jg,Eg,yE=["title","titleId"];function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Tc.apply(null,arguments)}function wE(t,n){if(t==null)return{};var r,o,i=xE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function xE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var kg,ry=function(t){var n=t.title,r=t.titleId,o=wE(t,yE);return p.createElement("svg",Tc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,jg||(jg=p.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Eg||(Eg=p.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})))},jE=["title","titleId"];function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Mc.apply(null,arguments)}function EE(t,n){if(t==null)return{};var r,o,i=kE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Og,oy=function(t){var n=t.title,r=t.titleId,o=EE(t,jE);return p.createElement("svg",Mc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,kg||(kg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"})))},OE=["title","titleId"];function Rc(){return Rc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Rc.apply(null,arguments)}function SE(t,n){if(t==null)return{};var r,o,i=CE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function CE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Sg,iy=function(t){var n=t.title,r=t.titleId,o=SE(t,OE);return p.createElement("svg",Rc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Og||(Og=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))},PE=["title","titleId"];function Nc(){return Nc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Nc.apply(null,arguments)}function IE(t,n){if(t==null)return{};var r,o,i=DE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function DE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Cg,ay=function(t){var n=t.title,r=t.titleId,o=IE(t,PE);return p.createElement("svg",Nc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Sg||(Sg=p.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"})))},TE=["title","titleId"];function Fc(){return Fc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Fc.apply(null,arguments)}function ME(t,n){if(t==null)return{};var r,o,i=RE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function RE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Pg,ly=function(t){var n=t.title,r=t.titleId,o=ME(t,TE);return p.createElement("svg",Fc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Cg||(Cg=p.createElement("path",{d:"M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"})))},NE=["title","titleId"];function Lc(){return Lc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Lc.apply(null,arguments)}function FE(t,n){if(t==null)return{};var r,o,i=LE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function LE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ig,sy=function(t){var n=t.title,r=t.titleId,o=FE(t,NE);return p.createElement("svg",Lc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Pg||(Pg=p.createElement("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"})))},AE=["title","titleId"];function Ac(){return Ac=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ac.apply(null,arguments)}function _E(t,n){if(t==null)return{};var r,o,i=$E(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $E(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Dg,cy=function(t){var n=t.title,r=t.titleId,o=_E(t,AE);return p.createElement("svg",Ac({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ig||(Ig=p.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"})))},zE=["title","titleId"];function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},_c.apply(null,arguments)}function HE(t,n){if(t==null)return{};var r,o,i=BE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function BE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Tg,uy=function(t){var n=t.title,r=t.titleId,o=HE(t,zE);return p.createElement("svg",_c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Dg||(Dg=p.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})))},VE=["title","titleId"];function $c(){return $c=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},$c.apply(null,arguments)}function WE(t,n){if(t==null)return{};var r,o,i=UE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function UE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Mg,dy=function(t){var n=t.title,r=t.titleId,o=WE(t,VE);return p.createElement("svg",$c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Tg||(Tg=p.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})))},qE=["title","titleId"];function zc(){return zc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},zc.apply(null,arguments)}function YE(t,n){if(t==null)return{};var r,o,i=KE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function KE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Rg,fy=function(t){var n=t.title,r=t.titleId,o=YE(t,qE);return p.createElement("svg",zc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Mg||(Mg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},GE=["title","titleId"];function Hc(){return Hc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Hc.apply(null,arguments)}function QE(t,n){if(t==null)return{};var r,o,i=ZE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ZE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ng,py=function(t){var n=t.title,r=t.titleId,o=QE(t,GE);return p.createElement("svg",Hc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Rg||(Rg=p.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})))},JE=["title","titleId"];function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Bc.apply(null,arguments)}function XE(t,n){if(t==null)return{};var r,o,i=ek(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ek(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Fg,gy=function(t){var n=t.title,r=t.titleId,o=XE(t,JE);return p.createElement("svg",Bc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ng||(Ng=p.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})))},tk=["title","titleId"];function Vc(){return Vc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Vc.apply(null,arguments)}function nk(t,n){if(t==null)return{};var r,o,i=rk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function rk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Lg,hy=function(t){var n=t.title,r=t.titleId,o=nk(t,tk);return p.createElement("svg",Vc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Fg||(Fg=p.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},ok=["title","titleId"];function Wc(){return Wc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Wc.apply(null,arguments)}function ik(t,n){if(t==null)return{};var r,o,i=ak(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ak(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ag,my=function(t){var n=t.title,r=t.titleId,o=ik(t,ok);return p.createElement("svg",Wc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Lg||(Lg=p.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))},lk=["title","titleId"];function Uc(){return Uc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Uc.apply(null,arguments)}function sk(t,n){if(t==null)return{};var r,o,i=ck(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ck(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var _g,by=function(t){var n=t.title,r=t.titleId,o=sk(t,lk);return p.createElement("svg",Uc({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ag||(Ag=p.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))},uk=["title","titleId"];function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},qc.apply(null,arguments)}function dk(t,n){if(t==null)return{};var r,o,i=fk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function fk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var $g,qa=function(t){var n=t.title,r=t.titleId,o=dk(t,uk);return p.createElement("svg",qc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,_g||(_g=p.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"})))},pk=["title","titleId"];function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Yc.apply(null,arguments)}function gk(t,n){if(t==null)return{};var r,o,i=hk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function hk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var zg,vy=function(t){var n=t.title,r=t.titleId,o=gk(t,pk);return p.createElement("svg",Yc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,$g||($g=p.createElement("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"})))},mk=["title","titleId"];function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Kc.apply(null,arguments)}function bk(t,n){if(t==null)return{};var r,o,i=vk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function vk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Hg,yy=function(t){var n=t.title,r=t.titleId,o=bk(t,mk);return p.createElement("svg",Kc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,zg||(zg=p.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))},yk=["title","titleId"];function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Gc.apply(null,arguments)}function wk(t,n){if(t==null)return{};var r,o,i=xk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function xk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Bg,wy=function(t){var n=t.title,r=t.titleId,o=wk(t,yk);return p.createElement("svg",Gc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Hg||(Hg=p.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))},jk=["title","titleId"];function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Qc.apply(null,arguments)}function Ek(t,n){if(t==null)return{};var r,o,i=kk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Vg,xy=function(t){var n=t.title,r=t.titleId,o=Ek(t,jk);return p.createElement("svg",Qc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Bg||(Bg=p.createElement("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},Ok=["title","titleId"];function Zc(){return Zc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Zc.apply(null,arguments)}function Sk(t,n){if(t==null)return{};var r,o,i=Ck(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Ck(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Wg,jy=function(t){var n=t.title,r=t.titleId,o=Sk(t,Ok);return p.createElement("svg",Zc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Vg||(Vg=p.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))},Pk=["title","titleId"];function Jc(){return Jc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Jc.apply(null,arguments)}function Ik(t,n){if(t==null)return{};var r,o,i=Dk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Dk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ug,Ey=function(t){var n=t.title,r=t.titleId,o=Ik(t,Pk);return p.createElement("svg",Jc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Wg||(Wg=p.createElement("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))},Tk=["title","titleId"];function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Xc.apply(null,arguments)}function Mk(t,n){if(t==null)return{};var r,o,i=Rk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Rk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var qg,ky=function(t){var n=t.title,r=t.titleId,o=Mk(t,Tk);return p.createElement("svg",Xc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ug||(Ug=p.createElement("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})))},Nk=["title","titleId"];function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},eu.apply(null,arguments)}function Fk(t,n){if(t==null)return{};var r,o,i=Lk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Lk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Yg,Oy=function(t){var n=t.title,r=t.titleId,o=Fk(t,Nk);return p.createElement("svg",eu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,qg||(qg=p.createElement("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})))},Ak=["title","titleId"];function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},tu.apply(null,arguments)}function _k(t,n){if(t==null)return{};var r,o,i=$k(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $k(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Kg,Sy=function(t){var n=t.title,r=t.titleId,o=_k(t,Ak);return p.createElement("svg",tu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Yg||(Yg=p.createElement("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))},zk=["title","titleId"];function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},nu.apply(null,arguments)}function Hk(t,n){if(t==null)return{};var r,o,i=Bk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Bk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Gg,Cy=function(t){var n=t.title,r=t.titleId,o=Hk(t,zk);return p.createElement("svg",nu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Kg||(Kg=p.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"})))},Vk=["title","titleId"];function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ru.apply(null,arguments)}function Wk(t,n){if(t==null)return{};var r,o,i=Uk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Uk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Qg,Py=function(t){var n=t.title,r=t.titleId,o=Wk(t,Vk);return p.createElement("svg",ru({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Gg||(Gg=p.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})))},qk=["title","titleId"];function ou(){return ou=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ou.apply(null,arguments)}function Yk(t,n){if(t==null)return{};var r,o,i=Kk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Kk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Zg,Jg,yo=function(t){var n=t.title,r=t.titleId,o=Yk(t,qk);return p.createElement("svg",ou({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Qg||(Qg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})))},Gk=["title","titleId"];function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},iu.apply(null,arguments)}function Qk(t,n){if(t==null)return{};var r,o,i=Zk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Zk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Xg,Iy=function(t){var n=t.title,r=t.titleId,o=Qk(t,Gk);return p.createElement("svg",iu({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Zg||(Zg=p.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),Jg||(Jg=p.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))},Jk=["title","titleId"];function au(){return au=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},au.apply(null,arguments)}function Xk(t,n){if(t==null)return{};var r,o,i=eO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function eO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var eh,Dy=function(t){var n=t.title,r=t.titleId,o=Xk(t,Jk);return p.createElement("svg",au({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Xg||(Xg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})))},tO=["title","titleId"];function lu(){return lu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},lu.apply(null,arguments)}function nO(t,n){if(t==null)return{};var r,o,i=rO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function rO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var th,nh,Ty=function(t){var n=t.title,r=t.titleId,o=nO(t,tO);return p.createElement("svg",lu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,eh||(eh=p.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))},oO=["title","titleId"];function su(){return su=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},su.apply(null,arguments)}function iO(t,n){if(t==null)return{};var r,o,i=aO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function aO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var rh,oh,My=function(t){var n=t.title,r=t.titleId,o=iO(t,oO);return p.createElement("svg",su({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,th||(th=p.createElement("circle",{cx:10,cy:8,r:4})),nh||(nh=p.createElement("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},lO=["title","titleId"];function cu(){return cu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},cu.apply(null,arguments)}function sO(t,n){if(t==null)return{};var r,o,i=cO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function cO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ih,Ry=function(t){var n=t.title,r=t.titleId,o=sO(t,lO);return p.createElement("svg",cu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,rh||(rh=p.createElement("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zm0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z"})),oh||(oh=p.createElement("path",{d:"M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z"})))},uO=["title","titleId"];function uu(){return uu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},uu.apply(null,arguments)}function dO(t,n){if(t==null)return{};var r,o,i=fO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function fO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ah,lh,Ny=function(t){var n=t.title,r=t.titleId,o=dO(t,uO);return p.createElement("svg",uu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ih||(ih=p.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))},pO=["title","titleId"];function du(){return du=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},du.apply(null,arguments)}function gO(t,n){if(t==null)return{};var r,o,i=hO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function hO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var sh,Fy=function(t){var n=t.title,r=t.titleId,o=gO(t,pO);return p.createElement("svg",du({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ah||(ah=p.createElement("path",{d:"M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86a8 8 0 0 1-5.61 1.01c-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"})),lh||(lh=p.createElement("path",{d:"M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"})))},mO=["title","titleId"];function fu(){return fu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},fu.apply(null,arguments)}function bO(t,n){if(t==null)return{};var r,o,i=vO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function vO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ch,Ly=function(t){var n=t.title,r=t.titleId,o=bO(t,mO);return p.createElement("svg",fu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,sh||(sh=p.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"})))},yO=["title","titleId"];function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},pu.apply(null,arguments)}function wO(t,n){if(t==null)return{};var r,o,i=xO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function xO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var uh,Ay=function(t){var n=t.title,r=t.titleId,o=wO(t,yO);return p.createElement("svg",pu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ch||(ch=p.createElement("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"})))},jO=["title","titleId"];function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},gu.apply(null,arguments)}function EO(t,n){if(t==null)return{};var r,o,i=kO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var dh,fh,_y=function(t){var n=t.title,r=t.titleId,o=EO(t,jO);return p.createElement("svg",gu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,uh||(uh=p.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})))},OO=["title","titleId"];function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},hu.apply(null,arguments)}function SO(t,n){if(t==null)return{};var r,o,i=CO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function CO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ph,$y=function(t){var n=t.title,r=t.titleId,o=SO(t,OO);return p.createElement("svg",hu({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,dh||(dh=p.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),fh||(fh=p.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))},PO=["title","titleId"];function mu(){return mu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},mu.apply(null,arguments)}function IO(t,n){if(t==null)return{};var r,o,i=DO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function DO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var gh,zy=function(t){var n=t.title,r=t.titleId,o=IO(t,PO);return p.createElement("svg",mu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ph||(ph=p.createElement("path",{d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},TO=["title","titleId"];function bu(){return bu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},bu.apply(null,arguments)}function MO(t,n){if(t==null)return{};var r,o,i=RO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function RO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var hh,mh,bh,vh,Hy=function(t){var n=t.title,r=t.titleId,o=MO(t,TO);return p.createElement("svg",bu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,gh||(gh=p.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))},NO=["title","titleId"];function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},vu.apply(null,arguments)}function FO(t,n){if(t==null)return{};var r,o,i=LO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function LO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var yh,wh,xh,jh,By=function(t){var n=t.title,r=t.titleId,o=FO(t,NO);return p.createElement("svg",vu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,hh||(hh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),mh||(mh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),bh||(bh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),vh||(vh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},AO=["title","titleId"];function yu(){return yu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},yu.apply(null,arguments)}function _O(t,n){if(t==null)return{};var r,o,i=$O(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $O(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Eh,kh,Oh,Sh,Vy=function(t){var n=t.title,r=t.titleId,o=_O(t,AO);return p.createElement("svg",yu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,yh||(yh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),wh||(wh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),xh||(xh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),jh||(jh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},zO=["title","titleId"];function wu(){return wu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},wu.apply(null,arguments)}function HO(t,n){if(t==null)return{};var r,o,i=BO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function BO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ch,Ph,Ih,Wy=function(t){var n=t.title,r=t.titleId,o=HO(t,zO);return p.createElement("svg",wu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Eh||(Eh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),kh||(kh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Oh||(Oh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),Sh||(Sh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))},VO=["title","titleId"];function xu(){return xu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},xu.apply(null,arguments)}function WO(t,n){if(t==null)return{};var r,o,i=UO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function UO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Dh,Uy=function(t){var n=t.title,r=t.titleId,o=WO(t,VO);return p.createElement("svg",xu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ch||(Ch=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Ph||(Ph=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Ih||(Ih=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))},qO=["title","titleId"];function ju(){return ju=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ju.apply(null,arguments)}function YO(t,n){if(t==null)return{};var r,o,i=KO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function KO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Th,qy=function(t){var n=t.title,r=t.titleId,o=YO(t,qO);return p.createElement("svg",ju({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Dh||(Dh=p.createElement("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"})))},GO=["title","titleId"];function Eu(){return Eu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Eu.apply(null,arguments)}function QO(t,n){if(t==null)return{};var r,o,i=ZO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ZO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Mh,Yy=function(t){var n=t.title,r=t.titleId,o=QO(t,GO);return p.createElement("svg",Eu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Th||(Th=p.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})))},JO=["title","titleId"];function ku(){return ku=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ku.apply(null,arguments)}function XO(t,n){if(t==null)return{};var r,o,i=e5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function e5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Rh,Ky=function(t){var n=t.title,r=t.titleId,o=XO(t,JO);return p.createElement("svg",ku({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Mh||(Mh=p.createElement("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"})))},t5=["title","titleId"];function Ou(){return Ou=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ou.apply(null,arguments)}function n5(t,n){if(t==null)return{};var r,o,i=r5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function r5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Gy=function(t){var n=t.title,r=t.titleId,o=n5(t,t5);return p.createElement("svg",Ou({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Rh||(Rh=p.createElement("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"})))};const o5=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,i5=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,_n=["accessTime","accountCircle","addCircle","autoAwesomeMosaic","autoAwesomeMotion","bolt","calendarToday","cancel","check","checkCircle","chevronLeft","chevronRight","close","comment","contentCopy","danger","dangerous","default","deleteForever","description","dns","download","edit","error","errorOutline","exitToApp","expandLess","expandMore","filterAlt","forum","help","home","info","manageAccounts","monitorHeart","moreVert","nightsStay","notificationsOff","openInBrowser","openInNew","place","search","severityLow","severityMedium","severityHigh","severityCritical","success","upload","warning","wbSunny","widgets"],a5=t=>{let{icon:n,color:r,size:o,title:i,iconClassName:a,...l}=t;const c=`juno-icon juno-icon-${n} jn-fill-current ${r} ${a}`;return n==="accessTime"?S.createElement(ry,he({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):n==="accountCircle"?S.createElement(oy,he({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):n==="addCircle"?S.createElement(iy,he({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):n==="autoAwesomeMosaic"?S.createElement(ay,he({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):n==="autoAwesomeMotion"?S.createElement(ly,he({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):n==="bolt"?S.createElement(sy,he({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):n==="calendarToday"?S.createElement(cy,he({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):n==="cancel"?S.createElement(uy,he({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):n==="check"?S.createElement(dy,he({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):n==="checkCircle"?S.createElement(fy,he({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):n==="chevronLeft"?S.createElement(py,he({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):n==="chevronRight"?S.createElement(gy,he({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):n==="close"?S.createElement(hy,he({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):n==="comment"?S.createElement(Ty,he({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):n==="contentCopy"?S.createElement(my,he({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):n==="danger"?S.createElement(by,he({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):n==="dangerous"?S.createElement(qa,he({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):n==="deleteForever"?S.createElement(yy,he({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):n==="description"?S.createElement(wy,he({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):n==="dns"?S.createElement(xy,he({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):n==="download"?S.createElement(vy,he({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):n==="edit"?S.createElement(jy,he({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):n==="error"?S.createElement(qa,he({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):n==="errorOutline"?S.createElement(Ey,he({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):n==="exitToApp"?S.createElement(ky,he({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):n==="expandLess"?S.createElement(Oy,he({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):n==="expandMore"?S.createElement(Sy,he({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):n==="filterAlt"?S.createElement(Cy,he({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):n==="forum"?S.createElement(Py,he({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):n==="help"?S.createElement(yo,he({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):n==="home"?S.createElement(Iy,he({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):n==="info"?S.createElement(Dy,he({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):n==="manageAccounts"?S.createElement(My,he({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):n==="monitorHeart"?S.createElement(Ry,he({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):n==="moreVert"?S.createElement(Ny,he({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):n==="nightsStay"?S.createElement(Fy,he({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):n==="notificationsOff"?S.createElement(Ly,he({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):n==="openInBrowser"?S.createElement(Ay,he({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):n==="openInNew"?S.createElement(_y,he({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):n==="place"?S.createElement($y,he({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):n==="search"?S.createElement(Hy,he({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):n==="severityLow"?S.createElement(By,he({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):n==="severityMedium"?S.createElement(Vy,he({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):n==="severityHigh"?S.createElement(Wy,he({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):n==="severityCritical"?S.createElement(Uy,he({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):n==="success"?S.createElement(zy,he({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):n==="upload"?S.createElement(qy,he({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):n==="widgets"?S.createElement(Gy,he({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):n==="warning"?S.createElement(Yy,he({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):n==="wbSunny"?S.createElement(Ky,he({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):n==="default"?S.createElement(yo,he({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement(yo,he({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},sn=p.forwardRef((t,n)=>{let{icon:r=null,color:o="",size:i="24",title:a="",className:l="",href:c="",disabled:u=!1,onClick:d,...f}=t;const g=c||d?"":l,b=c||d?{}:f,h=a5({icon:r,color:o,size:i,title:a,iconClassName:g,...b}),m=S.createElement("button",he({onClick:E=>{d&&d(E)},className:`juno-icon-button ${i5} ${l}`,"aria-label":a||r,disabled:u,ref:n},f),h),y=S.createElement("a",he({href:c,className:`juno-icon-link ${o5} ${l}`,"aria-label":a||r,ref:n},f),h);return c?y:d?m:S.createElement("span",{ref:n},h)});sn.displayName="Icon",sn.propTypes={icon:x.oneOf(_n),color:x.string,size:x.string,title:x.string,className:x.string,href:x.string,disabled:x.bool,onClick:x.func};const l5=`
	jn-rounded
	jn-text-sm
	jn-text-theme-default
	jn-py-0.5
	jn-px-1
  jn-justify-center
  jn-items-center
`,s5="jn-bg-theme-badge-default",c5="jn-bg-theme-info/25",u5="jn-bg-theme-success/25",d5="jn-bg-theme-warning/25",f5="jn-bg-theme-danger/25",p5="jn-bg-theme-danger/70 jn-text-theme-high",g5="jn-bg-theme-error/25",h5="jn-mr-1 jn-items-center",m5=["info","success","warning","danger","error","critical"],b5=t=>t==="info"?c5:t==="success"?u5:t==="warning"?d5:t==="danger"?f5:t==="error"?g5:t==="critical"?p5:s5,Qy=t=>{let{variant:n="default",icon:r=!1,text:o="",className:i="",children:a=null,...l}=t;return S.createElement("span",he({className:`
        juno-badge 
        juno-badge-${n} 
        ${l5} 
        ${b5(n)}
        ${r?"jn-inline-flex":""}
        ${i}`},l),r?S.createElement(sn,{icon:((c,u)=>c&&_n.includes(c)?c:c===!0?u:null)(r,n),size:"1.125rem",className:`${h5}`,color:((c,u)=>c===!0?`jn-text-theme-${u}`:void 0)(r,n)}):null,a||o)};Qy.propTypes={variant:x.oneOf(["default",...m5]),icon:x.oneOfType([x.bool,x.oneOf(_n)]),text:x.string,className:x.string,children:x.node};const v5=`
  jn-text-sm
  jn-rounded
  jn-bg-theme-box-default
  jn-border
  jn-border-theme-box-default
`,y5=`
  jn-py-1
  jn-px-2
`,Zy=t=>{let{children:n=null,unpad:r=!1,className:o="",...i}=t;return S.createElement("div",he({className:`juno-box ${v5} ${r?"":y5} ${o}`},i),n)};Zy.propTypes={children:x.node,unpad:x.bool,className:x.string};x.oneOf(_n),x.string,x.string,x.string,x.bool,x.func,x.bool,x.string,x.node;const w5=t=>t==="0"?"jn-gap-0":t==="px"?"jn-gap-px":t==="0.5"?"jn-gap-0.5":t==="1"?"jn-gap-1":t==="1.5"?"jn-gap-1.5":t==="2"?"jn-gap-2":t==="2.5"?"jn-gap-2.5":t==="3"?"jn-gap-3":t==="3.5"?"jn-gap-3.5":t==="4"?"jn-gap-4":t==="5"?"jn-gap-5":t==="6"?"jn-gap-6":t==="7"?"jn-gap-7":t==="8"?"jn-gap-8":t==="9"?"jn-gap-9":t==="10"?"jn-gap-10":t==="11"?"jn-gap-11":t==="12"?"jn-gap-12":t==="14"?"jn-gap-14":t==="16"?"jn-gap-16":t==="20"?"jn-gap-20":t==="24"?"jn-gap-24":t==="28"?"jn-gap-28":t==="32"?"jn-gap-32":t==="36"?"jn-gap-36":t==="40"?"jn-gap-40":t==="44"?"jn-gap-44":t==="48"?"jn-gap-48":t==="52"?"jn-gap-52":t==="56"?"jn-gap-56":t==="60"?"jn-gap-60":t==="64"?"jn-gap-64":t==="72"?"jn-gap-72":t==="80"?"jn-gap-80":t==="96"?"jn-gap-96":"jn-gap-0",x5=(t,n,r)=>`
      ${t==="vertical"?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}
      ${r&&"jn-flex-wrap"}
      ${w5(n)}
    `,j5=t=>t==="start"?"jn-items-start":t==="end"?"jn-items-end":t==="center"?"jn-items-center":t==="baseline"?"jn-items-baseline":t==="stretch"?"jn-items-stretch":"",E5=t=>t==="start"?"jn-justify-start":t==="end"?"jn-justify-end":t==="center"?"jn-justify-center":t==="between"?"jn-justify-between":t==="around"?"jn-justify-around":t==="evenly"?"jn-justify-evenly":"",Df=t=>{let{direction:n="horizontal",gap:r="0",alignment:o="stretch",distribution:i="start",wrap:a=!1,className:l="",children:c=null,...u}=t;return S.createElement("div",he({className:`juno-stack ${x5(n,r,a)} ${j5(o)} ${E5(i)} ${l||""}`},u),c)};Df.propTypes={children:x.node,className:x.string,direction:x.oneOf(["horizontal","vertical"]),alignment:x.oneOf(["start","end","center","baseline","stretch"]),distribution:x.oneOf(["start","end","center","between","around","evenly"]),wrap:x.bool,gap:x.oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])};x.string,x.node;const k5=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,O5=`
  jn-text-theme-accent
`,S5=`
  jn-text-theme-danger 
`,C5=`
  jn-text-theme-success
`,P5=`
  jn-text-theme-warning  
`,I5=`
  jn-text-theme-on-default
`,Tf=t=>{let{variant:n="default",size:r=null,className:o="",color:i="",...a}=t;const l=u=>u==="small"?"1rem":u==="large"?"3rem":u,c=r?{width:l(r),height:l(r)}:{};return S.createElement("svg",he({className:`juno-spinner ${k5} ${i||(n==="primary"?O5:n==="danger"?S5:n==="success"?C5:n==="warning"?P5:I5)} ${o}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:c,role:"progressbar"},a),S.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Tf.propTypes={variant:x.oneOf(["primary","danger","default","success","warning"]),size:x.string,className:x.string,color:x.string};const Nh=`
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
`,Fh=`
  jn-text-sm
  jn-leading-5
`,Lh=`
  jn-text-base
  jn-leading-6
`,D5=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,T5=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,M5=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,R5=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,Ah=(t,n)=>t==="small"?n==="subdued"?`${T5}`:`${D5}`:n==="subdued"?`${R5}`:`${M5}`,N5=`
  jn-mr-2
`,F5=`
  jn-mr-2
`,L5=t=>t==="small"?`${N5}`:`${F5}`,_h=t=>t?"in-progress":"",A5=t=>t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":"",Ya=S.forwardRef((t,n)=>{let{label:r,title:o=null,variant:i,size:a="default",disabled:l=null,href:c=null,icon:u=null,className:d="",onClick:f,children:g,progress:b=!1,progressLabel:h="",...m}=t;const y=i||"default",E=o||r||"",v=b?S.createElement(Tf,{size:a==="small"?"1.125rem":"1.5rem",color:`${A5(y)}`}):u?S.createElement(sn,{icon:u,title:E,className:`juno-button-icon ${r||g?L5(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,k=b&&h?h:r||g,C=S.createElement("button",he({type:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${Nh} 
          ${a==="small"?Fh:Lh} 
          ${Ah(a,i)}
          ${_h(b)} 
          ${d}`,disabled:l,onClick:I=>{f&&f(I)},title:E,ref:n},m),v,k),M=S.createElement("a",he({href:c,role:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${Nh} 
          ${a==="small"?Fh:Lh}
          ${Ah(a,i)}
          ${_h(b)} 
          ${d}
        `,disabled:l,onClick:f,title:E,ref:n},m),v,k);return c?M:C});Ya.displayName="Button",Ya.propTypes={children:x.any,variant:x.oneOf(["primary","primary-danger","default","subdued"]),size:x.oneOf(["small","default"]),disabled:x.bool,href:x.string,label:x.string,title:x.string,icon:x.oneOf(_n),className:x.string,onClick:x.func,progress:x.bool,progressLabel:x.string};x.string,x.node;var _5=`
  jn-text-theme-high
  jn-text-base
  jn-transform 
  jn-origin-top-left 
  jn-transition-all 
  jn-duration-100 
  jn-ease-in-out
  jn-z-10
`,$5=`
  jn-absolute
`,z5=`
  jn-scale-75
  -jn-translate-y-[0.4375rem]
`,H5=`
  jn-inline-block
  jn-w-1
  jn-h-1
  jn-rounded-full
  jn-align-top
  jn-ml-1
  jn-mt-2
  jn-bg-theme-required
`,B5=`
  jn-opacity-50
  jn-cursor-not-allowed
`,V5=S.forwardRef(function(t,n){var r=t.text,o=r===void 0?"":r,i=t.htmlFor,a=i===void 0?void 0:i,l=t.required,c=t.className,u=c===void 0?"":c,d=t.disabled,f=t.floating,g=t.minimized,b=at(t,["text","htmlFor","required","className","disabled","floating","minimized"]);return S.createElement("label",de({className:`
        juno-label 
        `.concat(_5,` 
        `).concat(f!==void 0&&f?"juno-label-floating "+$5:"",`
        `).concat(g!==void 0&&g?"juno-label-minimized "+z5:"",`
        `).concat(d!==void 0&&d?"juno-label-disabled "+B5:"",` 
        `).concat(u,`
      `),htmlFor:a,ref:n},b),o,l!==void 0&&l?S.createElement("span",{className:`
          juno-required 
          `.concat(H5,`
          `)}):"")});V5.displayName="Label";var ke,W5=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,U5=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`;(function(t){t.accessTime="accessTime",t.accountCircle="accountCircle",t.addCircle="addCircle",t.autoAwesomeMosaic="autoAwesomeMosaic",t.autoAwesomeMotion="autoAwesomeMotion",t.bolt="bolt",t.calendarToday="calendarToday",t.cancel="cancel",t.check="check",t.checkCircle="checkCircle",t.chevronLeft="chevronLeft",t.chevronRight="chevronRight",t.close="close",t.comment="comment",t.contentCopy="contentCopy",t.danger="danger",t.dangerous="dangerous",t.default="default",t.deleteForever="deleteForever",t.description="description",t.dns="dns",t.download="download",t.edit="edit",t.error="error",t.errorOutline="errorOutline",t.exitToApp="exitToApp",t.expandLess="expandLess",t.expandMore="expandMore",t.filterAlt="filterAlt",t.forum="forum",t.help="help",t.home="home",t.info="info",t.manageAccounts="manageAccounts",t.monitorHeart="monitorHeart",t.moreVert="moreVert",t.nightsStay="nightsStay",t.notificationsOff="notificationsOff",t.openInBrowser="openInBrowser",t.openInNew="openInNew",t.place="place",t.search="search",t.severityLow="severityLow",t.severityMedium="severityMedium",t.severityHigh="severityHigh",t.severityCritical="severityCritical",t.success="success",t.upload="upload",t.warning="warning",t.wbSunny="wbSunny",t.widgets="widgets"})(ke||(ke={}));var q5=function(t){var n=t.icon,r=t.color,o=t.size,i=t.title,a=t.iconClassName,l=at(t,["icon","color","size","title","iconClassName"]),c="juno-icon juno-icon-".concat(n," jn-fill-current ").concat(r," ").concat(a),u=ke[n||"default"];return u===ke.accessTime?S.createElement(ry,de({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):u===ke.accountCircle?S.createElement(oy,de({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):u===ke.addCircle?S.createElement(iy,de({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):u===ke.autoAwesomeMosaic?S.createElement(ay,de({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):u===ke.autoAwesomeMotion?S.createElement(ly,de({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):u===ke.bolt?S.createElement(sy,de({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):u===ke.calendarToday?S.createElement(cy,de({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):u===ke.cancel?S.createElement(uy,de({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):u===ke.check?S.createElement(dy,de({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):u===ke.checkCircle?S.createElement(fy,de({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):u===ke.chevronLeft?S.createElement(py,de({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):u===ke.chevronRight?S.createElement(gy,de({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):u===ke.close?S.createElement(hy,de({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):u===ke.comment?S.createElement(Ty,de({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):u===ke.contentCopy?S.createElement(my,de({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):u===ke.danger?S.createElement(by,de({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):u===ke.dangerous?S.createElement(qa,de({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):u===ke.deleteForever?S.createElement(yy,de({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):u===ke.description?S.createElement(wy,de({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):u===ke.dns?S.createElement(xy,de({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):u===ke.download?S.createElement(vy,de({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):u===ke.edit?S.createElement(jy,de({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):u===ke.error?S.createElement(qa,de({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):u===ke.errorOutline?S.createElement(Ey,de({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):u===ke.exitToApp?S.createElement(ky,de({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):u===ke.expandLess?S.createElement(Oy,de({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):u===ke.expandMore?S.createElement(Sy,de({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):u===ke.filterAlt?S.createElement(Cy,de({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):u===ke.forum?S.createElement(Py,de({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):u===ke.help?S.createElement(yo,de({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):u===ke.home?S.createElement(Iy,de({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):u===ke.info?S.createElement(Dy,de({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):u===ke.manageAccounts?S.createElement(My,de({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):u===ke.monitorHeart?S.createElement(Ry,de({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):u===ke.moreVert?S.createElement(Ny,de({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):u===ke.nightsStay?S.createElement(Fy,de({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):u===ke.notificationsOff?S.createElement(Ly,de({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):u===ke.openInBrowser?S.createElement(Ay,de({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):u===ke.openInNew?S.createElement(_y,de({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):u===ke.place?S.createElement($y,de({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):u===ke.search?S.createElement(Hy,de({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):u===ke.severityLow?S.createElement(By,de({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):u===ke.severityMedium?S.createElement(Vy,de({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):u===ke.severityHigh?S.createElement(Wy,de({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):u===ke.severityCritical?S.createElement(Uy,de({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):u===ke.success?S.createElement(zy,de({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):u===ke.upload?S.createElement(qy,de({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):u===ke.widgets?S.createElement(Gy,de({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):u===ke.warning?S.createElement(Yy,de({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):u===ke.wbSunny?S.createElement(Ky,de({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):u===ke.default?S.createElement(yo,de({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement(yo,de({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},eo=p.forwardRef(function(t,n){var r=t.icon,o=r===void 0?null:r,i=t.color,a=i===void 0?"":i,l=t.size,c=l===void 0?24:l,u=t.title,d=u===void 0?"":u,f=t.className,g=f===void 0?"":f,b=t.href,h=b===void 0?"":b,m=t.disabled,y=t.onClick,E=at(t,["icon","color","size","title","className","href","disabled","onClick"]),v=h||y?"":g,k=h||y?{}:E,C=q5(de({icon:o||void 0,color:a,size:c,title:d,iconClassName:v},k)),M=S.createElement("button",de({},E,{type:"button",onClick:function(D){y&&y(D)},className:"juno-icon-button ".concat(U5," ").concat(g),"aria-label":d||o||void 0,disabled:m!==void 0&&m,ref:n}),C),I=S.createElement("a",de({},E,{"aria-label":d||o||void 0,href:h,className:"juno-icon-link ".concat(W5," ").concat(g),ref:n}),C);return h?I:y?M:S.createElement("span",{ref:n},C)});eo.displayName="IconTs";p.createContext(void 0);x.string,x.string,x.node;const Y5=t=>t==="rounded"?`
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
   jn-w-auto`,K5=t=>{const n=`
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
   jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5`},G5=t=>t==="rounded"?"jn-absolute jn-inline-flex jn-right-3 jn-top-1":t==="hero"?"jn-absolute jn-inline-flex jn-right-5":"jn-absolute jn-inline-flex jn-right-3 jn-top-2",Q5=t=>t==="rounded"?"jn-mr-2":t==="hero"?"jn-mr-2.5":"jn-mr-2",Z5=t=>t==="hero"?"24":"18",Jy=t=>{let{value:n="",variant:r="default",disabled:o=!1,clear:i=!0,onSearch:a=void 0,onChange:l=void 0,onClick:c=void 0,onKeyPress:u=void 0,onClear:d=void 0,autoComplete:f="off",placeholder:g="Search…",className:b="",...h}=t;const[m,y]=p.useState(n);return p.useEffect(()=>{y(n)},[n]),S.createElement("div",{className:`juno-search-input-wrapper ${Y5(r)} ${b}`,role:"search"},S.createElement(Df,{gap:"2",alignment:"center"},S.createElement("input",he({type:"search",name:name||"search",placeholder:g,disabled:o,value:m,autoComplete:f,className:`juno-search-input ${K5(r)}`,onChange:E=>{y(E.target.value),l&&l(E)},onKeyPress:E=>{E.key==="Enter"&&a&&a(m),u&&u(E)}},h)),S.createElement("div",{className:`${G5(r)}`},i&&(m!=null&&m.length)?S.createElement(sn,{icon:"close",size:`${Z5(r)}`,title:"Clear",className:`${Q5(r)}`,onClick:E=>{y(""),d&&d(E)},disabled:o}):null,S.createElement(sn,{icon:"search",title:"Search",onClick:E=>{a&&a(m),c&&c(E)},disabled:o}))))};Jy.propTypes={name:x.string,variant:x.oneOf(["rounded","hero","default"]),disabled:x.bool,placeholder:x.string,value:x.string,autoComplete:x.string,clear:x.bool,className:x.string,onSearch:x.func,onClick:x.func,onChange:x.func,onKeyPress:x.func,onClear:x.func};const J5={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"};S.createContext(J5);x.bool;x.string;x.oneOfType([x.string,x.number]);x.string,x.any;x.oneOfType([x.string,x.number,x.bool]),x.any,x.number;x.oneOfType([x.object,x.array]).isRequired,x.object,x.bool,x.bool,x.oneOfType([x.shape({base00:x.string,base01:x.string,base02:x.string,base03:x.string,base04:x.string,base05:x.string,base06:x.string,base07:x.string,base08:x.string,base09:x.string,base0A:x.string,base0B:x.string,base0C:x.string,base0D:x.string,base0E:x.string,base0F:x.string}),x.oneOf(["dark","light"])]),x.oneOfType([x.number,x.bool]),x.oneOfType([x.bool,x.number]),x.number,x.string;x.oneOfType([x.string,x.object]),x.oneOfType([x.node,x.object]),x.string,x.bool,x.oneOf(["auto","small","medium","large"]),x.bool,x.string,x.string;var X5=Object.defineProperty,eS=(t,n,r)=>n in t?X5(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,Os=(t,n,r)=>(eS(t,typeof n=="symbol"?n:n+"",r),r);let tS=class{constructor(){Os(this,"current",this.detect()),Os(this,"handoffState","pending"),Os(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},Xn=new tS,Ge=(t,n)=>{Xn.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)};function bn(t){let n=p.useRef(t);return Ge(()=>{n.current=t},[t]),n}let pe=function(t){let n=bn(t);return S.useCallback(function(){return n.current(...arguments)},[n])};function Xy(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(n=>setTimeout(()=>{throw n}))}function Bt(){let t=[],n={addEventListener(r,o,i,a){return r.addEventListener(o,i,a),n.add(()=>r.removeEventListener(o,i,a))},requestAnimationFrame(){let r=requestAnimationFrame(...arguments);return n.add(()=>cancelAnimationFrame(r))},nextFrame(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...o))},setTimeout(){let r=setTimeout(...arguments);return n.add(()=>clearTimeout(r))},microTask(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];let a={current:!0};return Xy(()=>{a.current&&o[0]()}),n.add(()=>{a.current=!1})},style(r,o,i){let a=r.style.getPropertyValue(o);return Object.assign(r.style,{[o]:i}),this.add(()=>{Object.assign(r.style,{[o]:a})})},group(r){let o=Bt();return r(o),this.add(()=>o.dispose())},add(r){return t.push(r),()=>{let o=t.indexOf(r);if(0<=o)for(let i of t.splice(o,1))i()}},dispose(){for(let r of t.splice(0))r()}};return n}function wn(){let[t]=p.useState(Bt);return p.useEffect(()=>()=>t.dispose(),[t]),t}function nS(){let t=typeof document>"u";return"useSyncExternalStore"in Xr&&(n=>n.useSyncExternalStore)(Xr)(()=>()=>{},()=>!1,()=>!t)}function Rl(){let t=nS(),[n,r]=p.useState(Xn.isHandoffComplete);return n&&Xn.isHandoffComplete===!1&&r(!1),p.useEffect(()=>{n!==!0&&r(!0)},[n]),p.useEffect(()=>Xn.handoff(),[]),!t&&n}var $h;let cn=($h=S.useId)==null?function(){let t=Rl(),[n,r]=S.useState(t?()=>Xn.nextId():null);return Ge(()=>{n===null&&r(Xn.nextId())},[n]),n==null?void 0:""+n}:$h;function rt(t,n){if(t in n){let l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}let a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,rt),a}function Ui(t){return Xn.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let Su=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Cu=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Cu||{}),rS=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(rS||{}),oS=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(oS||{});function e1(){var t=Number.MAX_SAFE_INTEGER;let n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.body;return n==null?[]:Array.from(n.querySelectorAll(Su)).sort((r,o)=>Math.sign((r.tabIndex||t)-(o.tabIndex||t)))}var Nl=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Nl||{});function Fl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=Ui(t))==null?void 0:r.body)&&rt(n,{0(){return t.matches(Su)},1(){for(let o=t;o!==null;){if(o.matches(Su))return!0;o=o.parentElement}return!1}})}function t1(t){let n=Ui(t);Bt().nextFrame(()=>{n&&!Fl(n.activeElement,0)&&aS(t)})}var iS=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(iS||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function aS(t){t==null||t.focus({preventScroll:!0})}let lS="textarea,input";function sS(t){var n,r;return(r=(n=t==null?void 0:t.matches)==null?void 0:n.call(t,lS))!=null&&r}function Ll(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:r=>r;return t.slice().sort((r,o)=>{let i=n(r),a=n(o);if(i===null||a===null)return 0;let l=i.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function cS(t,n){return uS(e1(),n,{relativeTo:t})}function uS(t,n){let{sorted:r=!0,relativeTo:o=null,skipElements:i=[]}=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},a=Array.isArray(t)?0<t.length?t[0].ownerDocument:document:t.ownerDocument,l=Array.isArray(t)?r?Ll(t):t:e1(t);0<i.length&&1<l.length&&(l=l.filter(h=>!i.includes(h))),o=o??a.activeElement;let c,u=(()=>{if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{var h=Math.max;if(1&n)return 0;if(2&n)return h(0,l.indexOf(o))-1;if(4&n)return h(0,l.indexOf(o))+1;if(8&n)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&n?{preventScroll:!0}:{},g=0,b=l.length;do{if(g>=b||0>=g+b)return 0;let h=d+g;if(16&n)h=(h+b)%b;else{if(0>h)return 3;if(h>=b)return 1}c=l[h],c==null||c.focus(f),g+=u}while(c!==a.activeElement);return 6&n&&sS(c)&&c.select(),2}function dS(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&0<window.navigator.maxTouchPoints}function fS(){return/Android/gi.test(window.navigator.userAgent)}function n1(){return dS()||fS()}function ua(t,n,r){let o=bn(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function pS(t,n,r){let o=bn(n);p.useEffect(()=>{function i(a){o.current(a)}return window.addEventListener(t,i,r),()=>window.removeEventListener(t,i,r)},[t,r])}function Mf(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){let u=c(l);if(u!==null&&u.getRootNode().contains(u)&&u.isConnected){let d=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t);for(let f of d){if(f===null)continue;let g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(u)||l.composed&&l.composedPath().includes(g))return}return!Fl(u,Nl.Loose)&&u.tabIndex!==-1&&l.preventDefault(),n(l,u)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);let a=p.useRef(null);ua("pointerdown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ua("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ua("click",l=>{n1()||a.current&&(r(l,()=>a.current),a.current=null)},!0),ua("touchend",l=>r(l,()=>l.target instanceof HTMLElement?l.target:null),!0),pS("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Al(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return p.useMemo(()=>Ui(...n),[...n])}function zh(t){var n;if(t.type)return t.type;let r=(n=t.as)==null?"button":n;if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Rf(t,n){let[r,o]=p.useState(()=>zh(t));return Ge(()=>{o(zh(t))},[t.type,t.as]),Ge(()=>{r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")},[r,n]),r}let r1=Symbol();function gS(t){let n=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return Object.assign(t,{[r1]:n})}function xt(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=p.useRef(n);p.useEffect(()=>{o.current=n},[n]);let i=pe(a=>{for(let l of o.current)l!=null&&(typeof l=="function"?l(a):l.current=a)});return n.every(a=>a==null||(a==null?void 0:a[r1]))?void 0:i}function Hh(t){return[t.screenX,t.screenY]}function Nf(){let t=p.useRef([-1,-1]);return{wasMoved(n){let r=Hh(n);return(t.current[0]!==r[0]||t.current[1]!==r[1])&&(t.current=r,!0)},update(n){t.current=Hh(n)}}}function Ka(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return Array.from(new Set(n.flatMap(o=>typeof o=="string"?o.split(" "):[]))).filter(Boolean).join(" ")}var Er=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Er||{}),wr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(wr||{});function ht(t){let{ourProps:n,theirProps:r,slot:o,defaultTag:i,features:a,visible:l=!0,name:c,mergeRefs:u}=t;u=u??hS;let d=o1(r,n);if(l)return da(d,o,i,c,u);let f=a??0;if(2&f){let{static:g=!1,...b}=d;if(g)return da(b,o,i,c,u)}if(1&f){let{unmount:g=!0,...b}=d;return rt(g?0:1,{0(){return null},1(){return da({...b,hidden:!0,style:{display:"none"}},o,i,c,u)}})}return da(d,o,i,c,u)}function da(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},r=2<arguments.length?arguments[2]:void 0,o=3<arguments.length?arguments[3]:void 0,i=4<arguments.length?arguments[4]:void 0,{as:a=r,children:l,refName:c="ref",...u}=Ss(t,["unmount","static"]),d=t.ref===void 0?{}:{[c]:t.ref},f=typeof l=="function"?l(n):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(n));let g={};if(n){let b=!1,h=[];for(let[m,y]of Object.entries(n))typeof y=="boolean"&&(b=!0),y===!0&&h.push(m);b&&(g["data-headlessui-state"]=h.join(" "))}if(a===p.Fragment&&0<Object.keys(Ga(u)).length){if(!p.isValidElement(f)||Array.isArray(f)&&1<f.length)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let b=f.props,h=typeof(b==null?void 0:b.className)=="function"?function(){return Ka(b==null?void 0:b.className(...arguments),u.className)}:Ka(b==null?void 0:b.className,u.className),m=h?{className:h}:{};return p.cloneElement(f,Object.assign({},o1(f.props,Ga(Ss(u,["ref"]))),g,d,{ref:i(f.ref,d.ref)},m))}return p.createElement(a,Object.assign({},Ss(u,["ref"]),a!==p.Fragment&&d,a!==p.Fragment&&g),f)}function hS(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.every(o=>o==null)?void 0:o=>{for(let i of n)i!=null&&(typeof i=="function"?i(o):i.current=o)}}function o1(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length===0)return{};if(n.length===1)return n[0];let o={},i={};for(let a of n)for(let l in a)l.startsWith("on")&&typeof a[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(a[l])):o[l]=a[l];if(o.disabled||o["aria-disabled"])return Object.assign(o,Object.fromEntries(Object.keys(i).map(a=>[a,void 0])));for(let a in i)Object.assign(o,{[a](l){let c=i[a];for(var u=arguments.length,d=Array(1<u?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];for(let g of c){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;g(l,...d)}}});return o}function ft(t){var n;return Object.assign(p.forwardRef(t),{displayName:(n=t.displayName)==null?t.name:n})}function Ga(t){let n=Object.assign({},t);for(let r in n)n[r]===void 0&&delete n[r];return n}function Ss(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],r=Object.assign({},t);for(let o of n)o in r&&delete r[o];return r}let Ff=p.createContext(null);Ff.displayName="OpenClosedContext";var ut=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(ut||{});function qi(){return p.useContext(Ff)}function _l(t){let{value:n,children:r}=t;return S.createElement(Ff.Provider,{value:n},r)}function Lf(t){let n=t.parentElement,r=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(r=n),n=n.parentElement;let o=(n==null?void 0:n.getAttribute("disabled"))==="";return!(o&&mS(r))&&o}function mS(t){if(!t)return!1;for(let n=t.previousElementSibling;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}function bS(t){throw new Error("Unexpected object: "+t)}var Fe=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Fe||{});function Qa(t,n){let r=n.resolveItems();if(0>=r.length)return null;let o=n.resolveActiveIndex(),i=o??-1;switch(t.focus){case 0:{for(let a=0;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 1:{for(let a=i-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 2:{for(let a=i+1;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 3:{for(let a=r.length-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 4:{for(let a=0;a<r.length;++a)if(n.resolveId(r[a],a,r)===t.id)return a;return o}case 5:return null;default:bS(t)}}var Te=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Te||{});const i1=["top","right","bottom","left"],Bh=["start","end"],Vh=i1.reduce((t,n)=>t.concat(n,n+"-"+Bh[0],n+"-"+Bh[1]),[]),Pi=Math.min,Ar=Math.max,vS={left:"right",right:"left",bottom:"top",top:"bottom"},yS={start:"end",end:"start"};function Pu(t,n,r){return Ar(t,Pi(n,r))}function Ir(t,n){return typeof t=="function"?t(n):t}function $n(t){return t.split("-")[0]}function vn(t){return t.split("-")[1]}function a1(t){return t==="x"?"y":"x"}function Af(t){return t==="y"?"height":"width"}function to(t){return["top","bottom"].includes($n(t))?"y":"x"}function _f(t){return a1(to(t))}function l1(t,n,r){r===void 0&&(r=!1);const o=vn(t),i=_f(t),a=Af(i);let l=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=Ja(l)),[l,Ja(l)]}function wS(t){const n=Ja(t);return[Za(t),n,Za(n)]}function Za(t){return t.replace(/start|end/g,n=>yS[n])}function xS(t,n,r){const o=["left","right"],i=["right","left"];return t==="top"||t==="bottom"?r?n?i:o:n?o:i:t==="left"||t==="right"?n?["top","bottom"]:["bottom","top"]:[]}function jS(t,n,r,o){const i=vn(t);let a=xS($n(t),r==="start",o);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(Za)))),a}function Ja(t){return t.replace(/left|right|bottom|top/g,n=>vS[n])}function ES(t){return{top:0,right:0,bottom:0,left:0,...t}}function s1(t){return typeof t=="number"?{top:t,right:t,bottom:t,left:t}:ES(t)}function Xa(t){const{x:n,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:n,right:n+o,bottom:r+i,x:n,y:r}}function Wh(t,n,r){let{reference:o,floating:i}=t;const a=to(n),l=_f(n),c=Af(l),u=$n(n),d=a==="y",f=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,b=o[c]/2-i[c]/2;let h;switch(h=u==="top"?{x:f,y:o.y-i.height}:u==="bottom"?{x:f,y:o.y+o.height}:u==="right"?{x:o.x+o.width,y:g}:u==="left"?{x:o.x-i.width,y:g}:{x:o.x,y:o.y},vn(n)){case"start":h[l]-=b*(r&&d?-1:1);break;case"end":h[l]+=b*(r&&d?-1:1)}return h}const kS=async(t,n,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:l}=r,c=a.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(n));let d=await l.getElementRects({reference:t,floating:n,strategy:i}),{x:f,y:g}=Wh(d,o,u),b=o,h={},m=0;for(let y=0;y<c.length;y++){const{name:E,fn:v}=c[y],{x:k,y:C,data:M,reset:I}=await v({x:f,y:g,initialPlacement:o,placement:b,strategy:i,middlewareData:h,rects:d,platform:l,elements:{reference:t,floating:n}});f=k??f,g=C??g,h={...h,[E]:{...h[E],...M}},I&&50>=m&&(m++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(d=I.rects===!0?await l.getElementRects({reference:t,floating:n,strategy:i}):I.rects),{x:f,y:g}=Wh(d,b,u)),y=-1)}return{x:f,y:g,placement:b,strategy:i,middlewareData:h}};async function Wo(t,n){var r;n===void 0&&(n={});const{x:o,y:i,platform:a,rects:l,elements:c,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:b=!1,padding:h=0}=Ir(n,t),m=s1(h),y=g==="floating"?"reference":"floating",E=c[b?y:g],v=Xa(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(E)))==null||r?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:u})),k=g==="floating"?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),M=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},I=Xa(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:C,strategy:u}):k);return{top:(v.top-I.top+m.top)/M.y,bottom:(I.bottom-v.bottom+m.bottom)/M.y,left:(v.left-I.left+m.left)/M.x,right:(I.right-v.right+m.right)/M.x}}const OS=t=>({name:"arrow",options:t,async fn(n){const{x:r,y:o,placement:i,rects:a,platform:l,elements:c,middlewareData:u}=n,{element:d,padding:f=0}=Ir(t,n)||{};if(d==null)return{};const g=s1(f),b={x:r,y:o},h=_f(i),m=Af(h),y=await l.getDimensions(d),E=h==="y",v=E?"top":"left",k=E?"bottom":"right",C=E?"clientHeight":"clientWidth",M=a.reference[m]+a.reference[h]-b[h]-a.floating[m],I=b[h]-a.reference[h],D=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let z=D?D[C]:0;z&&await(l.isElement==null?void 0:l.isElement(D))||(z=c.floating[C]||a.floating[m]);const A=z/2-y[m]/2-1,J=Pi(g[v],A),V=Pi(g[k],A),F=J,L=z-y[m]-V,_=z/2-y[m]/2+(M/2-I/2),N=Pu(F,_,L),B=!u.arrow&&vn(i)!=null&&_!==N&&0>a.reference[m]/2-(_<F?J:V)-y[m]/2,H=B?_<F?_-F:_-L:0;return{[h]:b[h]+H,data:{[h]:N,centerOffset:_-N-H,...B&&{alignmentOffset:H}},reset:B}}});function SS(t,n,r){return(t?[...r.filter(i=>vn(i)===t),...r.filter(i=>vn(i)!==t)]:r.filter(i=>$n(i)===i)).filter(i=>!t||vn(i)===t||!!n&&Za(i)!==i)}const CS=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(n){var r,o,i;const{rects:a,middlewareData:l,placement:c,platform:u,elements:d}=n,{crossAxis:f=!1,alignment:g,allowedPlacements:b=Vh,autoAlignment:h=!0,...m}=Ir(t,n),y=g!==void 0||b===Vh?SS(g||null,h,b):b,E=await Wo(n,m),v=((r=l.autoPlacement)==null?void 0:r.index)||0,k=y[v];if(k==null)return{};const C=l1(k,a,await(u.isRTL==null?void 0:u.isRTL(d.floating)));if(c!==k)return{reset:{placement:y[0]}};const M=[E[$n(k)],E[C[0]],E[C[1]]],I=[...((o=l.autoPlacement)==null?void 0:o.overflows)||[],{placement:k,overflows:M}],D=y[v+1];if(D)return{data:{index:v+1,overflows:I},reset:{placement:D}};const z=I.map(V=>{const F=vn(V.placement);return[V.placement,F&&f?V.overflows.slice(0,2).reduce((L,_)=>L+_,0):V.overflows[0],V.overflows]}).sort((V,F)=>V[1]-F[1]),A=z.filter(V=>V[2].slice(0,vn(V[0])?2:3).every(F=>0>=F)),J=((i=A[0])==null?void 0:i[0])||z[0][0];return J===c?{}:{data:{index:v+1,overflows:I},reset:{placement:J}}}}},PS=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var r,o;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:u,elements:d}=n,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0,...E}=Ir(t,n);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const v=$n(i),k=to(c),C=$n(c)===c,M=await(u.isRTL==null?void 0:u.isRTL(d.floating)),I=b||(C||!y?[Ja(c)]:wS(c)),D=m!=="none";!b&&D&&I.push(...jS(c,y,m,M));const z=[c,...I],A=await Wo(n,E),J=[];let V=((o=a.flip)==null?void 0:o.overflows)||[];if(f&&J.push(A[v]),g){const N=l1(i,l,M);J.push(A[N[0]],A[N[1]])}if(V=[...V,{placement:i,overflows:J}],!J.every(N=>0>=N)){var F,L;const N=(((F=a.flip)==null?void 0:F.index)||0)+1,B=z[N];if(B)return{data:{index:N,overflows:V},reset:{placement:B}};let H=(L=V.filter(U=>0>=U.overflows[0]).sort((U,Q)=>U.overflows[1]-Q.overflows[1])[0])==null?void 0:L.placement;if(!H)switch(h){case"bestFit":{var _;const U=(_=V.filter(Q=>{if(D){const X=to(Q.placement);return X===k||X==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(X=>0<X).reduce((X,R)=>X+R,0)]).sort((Q,X)=>Q[1]-X[1])[0])==null?void 0:_[0];U&&(H=U);break}case"initialPlacement":H=c}if(i!==H)return{reset:{placement:H}}}return{}}}};function Uh(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function qh(t){return i1.some(n=>0<=t[n])}const IS=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:r}=n,{strategy:o="referenceHidden",...i}=Ir(t,n);switch(o){case"referenceHidden":{const a=await Wo(n,{...i,elementContext:"reference"}),l=Uh(a,r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:qh(l)}}}case"escaped":{const a=await Wo(n,{...i,altBoundary:!0}),l=Uh(a,r.floating);return{data:{escapedOffsets:l,escaped:qh(l)}}}default:return{}}}}};async function DS(t,n){const{placement:r,platform:o,elements:i}=t,a=await(o.isRTL==null?void 0:o.isRTL(i.floating)),l=$n(r),c=vn(r),u=to(r)==="y",d=["left","top"].includes(l)?-1:1,f=a&&u?-1:1,g=Ir(n,t);let{mainAxis:b,crossAxis:h,alignmentAxis:m}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof m=="number"&&(h=c==="end"?-1*m:m),u?{x:h*f,y:b*d}:{x:b*d,y:h*f}}const TS=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var r,o;const{x:i,y:a,placement:l,middlewareData:c}=n,u=await DS(n,t);return l===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:l}}}}},MS=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:r,y:o,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:E=>{let{x:v,y:k}=E;return{x:v,y:k}}},...u}=Ir(t,n),d={x:r,y:o},f=await Wo(n,u),g=to($n(i)),b=a1(g);let h=d[b],m=d[g];if(a){const E=b==="y"?"top":"left",v=b==="y"?"bottom":"right",k=h+f[E],C=h-f[v];h=Pu(k,h,C)}if(l){const E=g==="y"?"top":"left",v=g==="y"?"bottom":"right",k=m+f[E],C=m-f[v];m=Pu(k,m,C)}const y=c.fn({...n,[b]:h,[g]:m});return{...y,data:{x:y.x-r,y:y.y-o,enabled:{[b]:a,[g]:l}}}}}},RS=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(n){var r,o;const{placement:i,rects:a,platform:l,elements:c}=n,{apply:u=()=>{},...d}=Ir(t,n),f=await Wo(n,d),g=$n(i),b=vn(i),h=to(i)==="y",{width:m,height:y}=a.floating;let E,v;g==="top"||g==="bottom"?(E=g,v=b===(await(l.isRTL==null?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(v=g,E=b==="end"?"top":"bottom");const k=y-f.top-f.bottom,C=m-f.left-f.right,M=Pi(y-f[E],k),I=Pi(m-f[v],C),D=!n.middlewareData.shift;let z=M,A=I;if((r=n.middlewareData.shift)!=null&&r.enabled.x&&(A=C),(o=n.middlewareData.shift)!=null&&o.enabled.y&&(z=k),D&&!b){const V=Ar(f.left,0),F=Ar(f.right,0),L=Ar(f.top,0),_=Ar(f.bottom,0);h?A=m-2*(V!==0||F!==0?V+F:Ar(f.left,f.right)):z=y-2*(L!==0||_!==0?L+_:Ar(f.top,f.bottom))}await u({...n,availableWidth:A,availableHeight:z});const J=await l.getDimensions(c.floating);return m!==J.width||y!==J.height?{reset:{rects:!0}}:{}}}},Iu=Math.min,wo=Math.max,el=Math.round,fa=Math.floor,kr=t=>({x:t,y:t});function $l(){return typeof window<"u"}function ti(t){return c1(t)?(t.nodeName||"").toLowerCase():"#document"}function en(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function Bn(t){var n;return(n=(c1(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function c1(t){return!!$l()&&(t instanceof Node||t instanceof en(t).Node)}function xn(t){return!!$l()&&(t instanceof Element||t instanceof en(t).Element)}function zn(t){return!!$l()&&(t instanceof HTMLElement||t instanceof en(t).HTMLElement)}function Yh(t){return!!($l()&&typeof ShadowRoot<"u")&&(t instanceof ShadowRoot||t instanceof en(t).ShadowRoot)}function Yi(t){const{overflow:n,overflowX:r,overflowY:o,display:i}=jn(t);return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function NS(t){return["table","td","th"].includes(ti(t))}function zl(t){return[":popover-open",":modal"].some(n=>{try{return t.matches(n)}catch{return!1}})}function $f(t){const n=zf(),r=xn(t)?jn(t):t;return r.transform!=="none"||r.perspective!=="none"||!!r.containerType&&r.containerType!=="normal"||!n&&!!r.backdropFilter&&r.backdropFilter!=="none"||!n&&!!r.filter&&r.filter!=="none"||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function FS(t){for(let n=Or(t);zn(n)&&!Uo(n);){if($f(n))return n;if(zl(n))return null;n=Or(n)}return null}function zf(){return!!(typeof CSS<"u"&&CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Uo(t){return["html","body","#document"].includes(ti(t))}function jn(t){return en(t).getComputedStyle(t)}function Hl(t){return xn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Or(t){if(ti(t)==="html")return t;const n=t.assignedSlot||t.parentNode||Yh(t)&&t.host||Bn(t);return Yh(n)?n.host:n}function u1(t){const n=Or(t);return Uo(n)?t.ownerDocument?t.ownerDocument.body:t.body:zn(n)&&Yi(n)?n:u1(n)}function jr(t,n,r){var o;n===void 0&&(n=[]),r===void 0&&(r=!0);const i=u1(t),a=i===((o=t.ownerDocument)==null?void 0:o.body),l=en(i);if(a){const c=Du(l);return n.concat(l,l.visualViewport||[],Yi(i)?i:[],c&&r?jr(c):[])}return n.concat(i,jr(i,[],r))}function Du(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function d1(t){const n=jn(t);let r=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=zn(t),a=i?t.offsetWidth:r,l=i?t.offsetHeight:o,c=el(r)!==a||el(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function Hf(t){return xn(t)?t:t.contextElement}function xo(t){var n=Number.isFinite;const r=Hf(t);if(!zn(r))return kr(1);const o=r.getBoundingClientRect(),{width:i,height:a,$:l}=d1(r);let c=(l?el(o.width):o.width)/i,u=(l?el(o.height):o.height)/a;return c&&n(c)||(c=1),u&&n(u)||(u=1),{x:c,y:u}}const LS=kr(0);function f1(t){const n=en(t);return zf()&&n.visualViewport?{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}:LS}function AS(t,n,r){return n===void 0&&(n=!1),r&&(!n||r===en(t))&&n}function no(t,n,r,o){n===void 0&&(n=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),a=Hf(t);let l=kr(1);n&&(o?xn(o)&&(l=xo(o)):l=xo(t));const c=AS(a,r,o)?f1(a):kr(0);let u=(i.left+c.x)/l.x,d=(i.top+c.y)/l.y,f=i.width/l.x,g=i.height/l.y;if(a){const b=en(a),h=o&&xn(o)?en(o):o;let m=b,y=Du(m);for(;y&&o&&h!==m;){const E=xo(y),v=y.getBoundingClientRect(),k=jn(y),C=v.left+(y.clientLeft+parseFloat(k.paddingLeft))*E.x,M=v.top+(y.clientTop+parseFloat(k.paddingTop))*E.y;u*=E.x,d*=E.y,f*=E.x,g*=E.y,u+=C,d+=M,m=en(y),y=Du(m)}}return Xa({width:f,height:g,x:u,y:d})}function _S(t){let{elements:n,rect:r,offsetParent:o,strategy:i}=t;const a=i==="fixed",l=Bn(o),c=!!n&&zl(n.floating);if(o===l||c&&a)return r;let u={scrollLeft:0,scrollTop:0},d=kr(1);const f=kr(0),g=zn(o);if((g||!g&&!a)&&((ti(o)!=="body"||Yi(l))&&(u=Hl(o)),zn(o))){const b=no(o);d=xo(o),f.x=b.x+o.clientLeft,f.y=b.y+o.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+f.x,y:r.y*d.y-u.scrollTop*d.y+f.y}}function $S(t){return Array.from(t.getClientRects())}function Tu(t,n){const r=Hl(t).scrollLeft;return n?n.left+r:no(Bn(t)).left+r}function zS(t){const n=Bn(t),r=Hl(t),o=t.ownerDocument.body,i=wo(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),a=wo(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+Tu(t);const c=-r.scrollTop;return jn(o).direction==="rtl"&&(l+=wo(n.clientWidth,o.clientWidth)-i),{width:i,height:a,x:l,y:c}}function HS(t,n){const r=en(t),o=Bn(t),i=r.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,u=0;if(i){a=i.width,l=i.height;const d=zf();(!d||d&&n==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:l,x:c,y:u}}function BS(t,n){const r=no(t,!0,n==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,a=zn(t)?xo(t):kr(1),l=t.clientWidth*a.x,c=t.clientHeight*a.y,u=i*a.x,d=o*a.y;return{width:l,height:c,x:u,y:d}}function Kh(t,n,r){let o;if(n==="viewport")o=HS(t,r);else if(n==="document")o=zS(Bn(t));else if(xn(n))o=BS(n,r);else{const i=f1(t);o={...n,x:n.x-i.x,y:n.y-i.y}}return Xa(o)}function p1(t,n){const r=Or(t);return r!==n&&xn(r)&&!Uo(r)&&(jn(r).position==="fixed"||p1(r,n))}function VS(t,n){const r=n.get(t);if(r)return r;let o=jr(t,[],!1).filter(l=>xn(l)&&ti(l)!=="body"),i=null;const a=jn(t).position==="fixed";for(let l=a?Or(t):t;xn(l)&&!Uo(l);){const c=jn(l),u=$f(l);u||c.position!=="fixed"||(i=null),(a?!u&&!i:!u&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Yi(l)&&!u&&p1(t,l))?o=o.filter(f=>f!==l):i=c,l=Or(l)}return n.set(t,o),o}function WS(t){let{element:n,boundary:r,rootBoundary:o,strategy:i}=t;const a=r==="clippingAncestors"?zl(n)?[]:VS(n,this._c):[].concat(r),l=[...a,o],c=l[0],u=l.reduce((d,f)=>{const g=Kh(n,f,i);return d.top=wo(g.top,d.top),d.right=Iu(g.right,d.right),d.bottom=Iu(g.bottom,d.bottom),d.left=wo(g.left,d.left),d},Kh(n,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function US(t){const{width:n,height:r}=d1(t);return{width:n,height:r}}function qS(t,n,r){const o=zn(n),i=Bn(n),a=r==="fixed",l=no(t,!0,a,n);let c={scrollLeft:0,scrollTop:0};const u=kr(0);if(o||!o&&!a)if((ti(n)!=="body"||Yi(i))&&(c=Hl(n)),o){const h=no(n,!0,a,n);u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}else i&&(u.x=Tu(i));let d=0,f=0;if(i&&!o&&!a){const h=i.getBoundingClientRect();f=h.top+c.scrollTop,d=h.left+c.scrollLeft-Tu(i,h)}const g=l.left+c.scrollLeft-u.x-d,b=l.top+c.scrollTop-u.y-f;return{x:g,y:b,width:l.width,height:l.height}}function Cs(t){return jn(t).position==="static"}function Gh(t,n){if(!zn(t)||jn(t).position==="fixed")return null;if(n)return n(t);let r=t.offsetParent;return Bn(t)===r&&(r=r.ownerDocument.body),r}function g1(t,n){const r=en(t);if(zl(t))return r;if(!zn(t)){for(let i=Or(t);i&&!Uo(i);){if(xn(i)&&!Cs(i))return i;i=Or(i)}return r}let o=Gh(t,n);for(;o&&NS(o)&&Cs(o);)o=Gh(o,n);return o&&Uo(o)&&Cs(o)&&!$f(o)?r:o||FS(t)||r}const YS=async function(t){const n=this.getOffsetParent||g1,r=this.getDimensions,o=await r(t.floating);return{reference:qS(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function KS(t){return jn(t).direction==="rtl"}const GS={convertOffsetParentRelativeRectToViewportRelativeRect:_S,getDocumentElement:Bn,getClippingRect:WS,getOffsetParent:g1,getElementRects:YS,getClientRects:$S,getDimensions:US,getScale:xo,isElement:xn,isRTL:KS};function QS(t,n){function r(){var c;clearTimeout(i),(c=a)==null||c.disconnect(),a=null}function o(c,u){function d(M){const I=M[0].intersectionRatio;if(I!==u){if(!C)return o();I?o(!1,I):i=setTimeout(()=>{o(!1,1e-7)},1e3)}C=!1}c===void 0&&(c=!1),u===void 0&&(u=1),r();const{left:f,top:g,width:b,height:h}=t.getBoundingClientRect();if(c||n(),!b||!h)return;const m=fa(g),y=fa(l.clientWidth-(f+b)),E=fa(l.clientHeight-(g+h)),v=fa(f),k={rootMargin:-m+"px "+-y+"px "+-E+"px "+-v+"px",threshold:wo(0,Iu(1,u))||1};let C=!0;try{a=new IntersectionObserver(d,{...k,root:l.ownerDocument})}catch{a=new IntersectionObserver(d,k)}a.observe(t)}let i,a=null;const l=Bn(t);return o(!0),r}function h1(t,n,r,o){function i(){const v=no(t);E&&(v.x!==E.x||v.y!==E.y||v.width!==E.width||v.height!==E.height)&&r(),E=v,y=requestAnimationFrame(i)}o===void 0&&(o={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,f=Hf(t),g=a||l?[...f?jr(f):[],...jr(n)]:[];g.forEach(v=>{a&&v.addEventListener("scroll",r,{passive:!0}),l&&v.addEventListener("resize",r)});const b=f&&u?QS(f,r):null;let h=-1,m=null;c&&(m=new ResizeObserver(v=>{let[k]=v;k&&k.target===f&&m&&(m.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(n)})),r()}),f&&!d&&m.observe(f),m.observe(n));let y,E=d?no(t):null;return d&&i(),r(),()=>{var v;g.forEach(k=>{a&&k.removeEventListener("scroll",r),l&&k.removeEventListener("resize",r)}),b==null||b(),(v=m)==null||v.disconnect(),m=null,d&&cancelAnimationFrame(y)}}const m1=TS,b1=CS,v1=MS,y1=PS,ZS=RS,JS=IS,Qh=OS,w1=(t,n,r)=>{const o=new Map,i={platform:GS,...r},a={...i.platform,_c:o};return kS(t,n,{...i,platform:a})};var Na=typeof document>"u"?p.useEffect:p.useLayoutEffect;function tl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let r,o,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!==n.length)return!1;for(o=r;o--!=0;)if(!tl(t[o],n[o]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!{}.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!=0;){const a=i[o];if(!(a==="_owner"&&t.$$typeof)&&!tl(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function x1(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Zh(t,n){const r=x1(t);return Math.round(n*r)/r}function Ps(t){const n=p.useRef(t);return Na(()=>{n.current=t}),n}function XS(t){t===void 0&&(t={});const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:c=!0,whileElementsMounted:u,open:d}=t,[f,g]=p.useState({x:0,y:0,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[b,h]=p.useState(o);tl(b,o)||h(o);const[m,y]=p.useState(null),[E,v]=p.useState(null),k=p.useCallback(U=>{U!==D.current&&(D.current=U,y(U))},[]),C=p.useCallback(U=>{U!==z.current&&(z.current=U,v(U))},[]),M=a||m,I=l||E,D=p.useRef(null),z=p.useRef(null),A=p.useRef(f),J=Ps(u),V=Ps(i),F=Ps(d),L=p.useCallback(()=>{if(D.current&&z.current){const U={placement:n,strategy:r,middleware:b};V.current&&(U.platform=V.current),w1(D.current,z.current,U).then(Q=>{const X={...Q,isPositioned:F.current!==!1};_.current&&!tl(A.current,X)&&(A.current=X,or.flushSync(()=>{g(X)}))})}},[b,n,r,V,F]);Na(()=>{d===!1&&A.current.isPositioned&&(A.current.isPositioned=!1,g(U=>({...U,isPositioned:!1})))},[d]);const _=p.useRef(!1);Na(()=>(_.current=!0,()=>{_.current=!1}),[]),Na(()=>{if(M&&(D.current=M),I&&(z.current=I),M&&I){if(J.current)return J.current(M,I,L);L()}},[M,I,L,J,u!=null]);const N=p.useMemo(()=>({reference:D,floating:z,setReference:k,setFloating:C}),[k,C]),B=p.useMemo(()=>({reference:M,floating:I}),[M,I]),H=p.useMemo(()=>{const U={position:r,left:0,top:0};if(!B.floating)return U;const Q=Zh(B.floating,f.x),X=Zh(B.floating,f.y);return c?{...U,transform:"translate("+Q+"px, "+X+"px)",...1.5<=x1(B.floating)&&{willChange:"transform"}}:{position:r,left:Q,top:X}},[r,c,B.floating,f.x,f.y]);return p.useMemo(()=>({...f,update:L,refs:N,elements:B,floatingStyles:H}),[f,L,N,B,H])}const j1=(t,n)=>({...m1(t),options:[t,n]}),E1=(t,n)=>({...v1(t),options:[t,n]}),eC=(t,n)=>({...y1(t),options:[t,n]}),tC=(t,n)=>({...ZS(t),options:[t,n]}),nC=(t,n)=>({...b1(t),options:[t,n]});function Bf(){let t=p.useRef(!1);return Ge(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function rC(t){let n=pe(t),r=p.useRef(!1);p.useEffect(()=>(r.current=!1,()=>{r.current=!0,Xy(()=>{r.current&&n()})}),[n])}let oC=p.createContext(!1);function iC(){return p.useContext(oC)}function aC(t){let n=iC(),r=p.useContext(k1),o=Al(t),[i,a]=p.useState(()=>{if(!n&&r!==null||Xn.isServer)return null;let l=o==null?void 0:o.getElementById("headlessui-portal-root");if(l)return l;if(o===null)return null;let c=o.createElement("div");return c.setAttribute("id","headlessui-portal-root"),o.body.appendChild(c)});return p.useEffect(()=>{i!==null&&(o!=null&&o.body.contains(i)||o==null||o.body.appendChild(i))},[i,o]),p.useEffect(()=>{n||r!==null&&a(r.current)},[r,a,n]),i}let lC=p.Fragment;function sC(t,n){let r=p.useRef(null),o=xt(gS(d=>{r.current=d}),n),i=Al(r),a=aC(r),[l]=p.useState(()=>{var d;return Xn.isServer||(d=i==null?void 0:i.createElement("div"))==null?null:d}),c=p.useContext(dC),u=Rl();return Ge(()=>{a&&l&&!a.contains(l)&&(l.setAttribute("data-headlessui-portal",""),a.appendChild(l))},[a,l]),Ge(()=>{if(l&&c)return c.register(l)},[c,l]),rC(()=>{var d;a&&l&&(l instanceof Node&&a.contains(l)&&a.removeChild(l),0>=a.childNodes.length&&((d=a.parentElement)==null||d.removeChild(a)))}),u&&a&&l?or.createPortal(ht({ourProps:{ref:o},theirProps:t,defaultTag:lC,name:"Portal"}),l):null}let cC=p.Fragment,k1=p.createContext(null);function uC(t,n){let{target:r,...o}=t,i={ref:xt(n)};return S.createElement(k1.Provider,{value:r},ht({ourProps:i,theirProps:o,defaultTag:cC,name:"Popover.Group"}))}let dC=p.createContext(null),fC=ft(sC),pC=ft(uC),gC=Object.assign(fC,{Group:pC});function hC(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,[n,r]=p.useState(t),o=Bf(),i=p.useCallback(u=>{o.current&&r(d=>d|u)},[n,o]),a=p.useCallback(u=>!!(n&u),[n]),l=p.useCallback(u=>{o.current&&r(d=>d&~u)},[r,o]),c=p.useCallback(u=>{o.current&&r(d=>d^u)},[r]);return{flags:n,addFlag:i,hasFlag:a,removeFlag:l,toggleFlag:c}}function mC(t){let n={called:!1};return function(){if(!n.called)return n.called=!0,t(...arguments)}}function Is(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.add(...r)}function Ds(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.remove(...r)}function bC(t,n){let r=Bt();if(!t)return r.dispose;let{transitionDuration:o,transitionDelay:i}=getComputedStyle(t),[a,l]=[o,i].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):1e3*parseFloat(f)).sort((f,g)=>g-f);return d}),c=a+l;if(c!==0){r.group(d=>{d.setTimeout(()=>{n(),d.dispose()},c),d.addEventListener(t,"transitionrun",f=>{f.target===f.currentTarget&&d.dispose()})});let u=r.addEventListener(t,"transitionend",d=>{d.target===d.currentTarget&&(n(),u())})}else n();return r.add(()=>n()),r.dispose}function vC(t,n,r,o){let i=r?"enter":"leave",a=Bt(),l=o===void 0?()=>{}:mC(o);i=="enter"&&(t.removeAttribute("hidden"),t.style.display="");let c=rt(i,{enter:()=>n.enter,leave:()=>n.leave}),u=rt(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),d=rt(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return Ds(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),Is(t,...n.base,...c,...d),a.nextFrame(()=>{Ds(t,...n.base,...c,...d),Is(t,...n.base,...c,...u),bC(t,()=>(Ds(t,...n.base,...c),Is(t,...n.base,...n.entered),l()))}),a.dispose}function yC(t){let{immediate:n,container:r,direction:o,classes:i,onStart:a,onStop:l}=t,c=Bf(),u=wn(),d=bn(o);Ge(()=>{n&&(d.current="enter")},[n]),Ge(()=>{let f=Bt();u.add(f.dispose);let g=r.current;if(g&&d.current!=="idle"&&c.current)return f.dispose(),a.current(d.current),f.add(vC(g,i.current,d.current==="enter",()=>{f.dispose(),l.current(d.current)})),f.dispose},[o])}function sr(){return(0<arguments.length&&arguments[0]!==void 0?arguments[0]:"").split(/\s+/).filter(n=>1<n.length)}let Bl=p.createContext(null);Bl.displayName="TransitionContext";var wC=(t=>(t.Visible="visible",t.Hidden="hidden",t))(wC||{});function xC(){let t=p.useContext(Bl);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function jC(){let t=p.useContext(Vl);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let Vl=p.createContext(null);Vl.displayName="NestingContext";function Wl(t){return"children"in t?Wl(t.children):0<t.current.filter(n=>{let{el:r}=n;return r.current!==null}).filter(n=>{let{state:r}=n;return r==="visible"}).length}function O1(t,n){let r=bn(t),o=p.useRef([]),i=Bf(),a=wn(),l=pe(function(h){let m=1<arguments.length&&arguments[1]!==void 0?arguments[1]:wr.Hidden,y=o.current.findIndex(E=>{let{el:v}=E;return v===h});y!==-1&&(rt(m,{[wr.Unmount](){o.current.splice(y,1)},[wr.Hidden](){o.current[y].state="hidden"}}),a.microTask(()=>{var E;!Wl(o)&&i.current&&((E=r.current)==null||E.call(r))}))}),c=pe(h=>{let m=o.current.find(y=>{let{el:E}=y;return E===h});return m?m.state!=="visible"&&(m.state="visible"):o.current.push({el:h,state:"visible"}),()=>l(h,wr.Unmount)}),u=p.useRef([]),d=p.useRef(Promise.resolve()),f=p.useRef({enter:[],leave:[],idle:[]}),g=pe((h,m,y)=>{u.current.splice(0),n&&(n.chains.current[m]=n.chains.current[m].filter(E=>{let[v]=E;return v!==h})),n==null||n.chains.current[m].push([h,new Promise(E=>{u.current.push(E)})]),n==null||n.chains.current[m].push([h,new Promise(E=>{Promise.all(f.current[m].map(v=>{let[k,C]=v;return C})).then(()=>E())})]),m==="enter"?d.current=d.current.then(()=>n==null?void 0:n.wait.current).then(()=>y(m)):y(m)}),b=pe((h,m,y)=>{Promise.all(f.current[m].splice(0).map(E=>{let[v,k]=E;return k})).then(()=>{var E;(E=u.current.shift())==null||E()}).then(()=>y(m))});return p.useMemo(()=>({children:o,register:c,unregister:l,onStart:g,onStop:b,wait:d,chains:f}),[c,l,o,g,b,f,d])}function EC(){}let kC=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Jh(t){var n;let r={};for(let o of kC)r[o]=(n=t[o])==null?EC:n;return r}function OC(t){let n=p.useRef(Jh(t));return p.useEffect(()=>{n.current=Jh(t)},[t]),n}let SC="div",S1=Er.RenderStrategy;function CC(t,n){var r,o;let{beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c,enter:u,enterFrom:d,enterTo:f,entered:g,leave:b,leaveFrom:h,leaveTo:m,...y}=t,E=p.useRef(null),v=xt(E,n),k=(r=y.unmount)==null||r?wr.Unmount:wr.Hidden,{show:C,appear:M,initial:I}=xC(),[D,z]=p.useState(C?"visible":"hidden"),A=jC(),{register:J,unregister:V}=A;p.useEffect(()=>J(E),[J,E]),p.useEffect(()=>{if(k===wr.Hidden&&E.current)return C&&D!=="visible"?void z("visible"):rt(D,{hidden:()=>V(E),visible:()=>J(E)})},[D,E,J,V,C,k]);let F=bn({base:sr(y.className),enter:sr(u),enterFrom:sr(d),enterTo:sr(f),entered:sr(g),leave:sr(b),leaveFrom:sr(h),leaveTo:sr(m)}),L=OC({beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c}),_=Rl();p.useEffect(()=>{if(_&&D==="visible"&&E.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[E,D,_]);let N=M&&C&&I,B=!_||I&&!M?"idle":C?"enter":"leave",H=hC(0),U=pe(se=>rt(se,{enter:()=>{H.addFlag(ut.Opening),L.current.beforeEnter()},leave:()=>{H.addFlag(ut.Closing),L.current.beforeLeave()},idle:()=>{}})),Q=pe(se=>rt(se,{enter:()=>{H.removeFlag(ut.Opening),L.current.afterEnter()},leave:()=>{H.removeFlag(ut.Closing),L.current.afterLeave()},idle:()=>{}})),X=O1(()=>{z("hidden"),V(E)},A),R=p.useRef(!1);yC({immediate:N,container:E,classes:F,direction:B,onStart:bn(se=>{R.current=!0,X.onStart(E,se,U)}),onStop:bn(se=>{R.current=!1,X.onStop(E,se,Q),se!=="leave"||Wl(X)||(z("hidden"),V(E))})});let ae=y;return N?ae={...ae,className:Ka(y.className,...F.current.enter,...F.current.enterFrom)}:R.current&&(ae.className=Ka(y.className,(o=E.current)==null?void 0:o.className),ae.className===""&&delete ae.className),S.createElement(Vl.Provider,{value:X},S.createElement(_l,{value:rt(D,{visible:ut.Open,hidden:ut.Closed})|H.flags},ht({ourProps:{ref:v},theirProps:ae,defaultTag:SC,features:S1,visible:D==="visible",name:"Transition.Child"})))}function PC(t,n){let{show:r,appear:o=!1,unmount:i=!0,...a}=t,l=p.useRef(null),c=xt(l,n);Rl();let u=qi();if(r===void 0&&u!==null&&(r=(u&ut.Open)===ut.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,f]=p.useState(r?"visible":"hidden"),g=O1(()=>{f("hidden")}),[b,h]=p.useState(!0),m=p.useRef([r]);Ge(()=>{b!==!1&&m.current[m.current.length-1]!==r&&(m.current.push(r),h(!1))},[m,r]);let y=p.useMemo(()=>({show:r,appear:o,initial:b}),[r,o,b]);p.useEffect(()=>{if(r)f("visible");else if(!Wl(g))f("hidden");else{let C=l.current;if(!C)return;let M=C.getBoundingClientRect();M.x===0&&M.y===0&&M.width===0&&M.height===0&&f("hidden")}},[r,g]);let E={unmount:i},v=pe(()=>{var C;b&&h(!1),(C=t.beforeEnter)==null||C.call(t)}),k=pe(()=>{var C;b&&h(!1),(C=t.beforeLeave)==null||C.call(t)});return S.createElement(Vl.Provider,{value:g},S.createElement(Bl.Provider,{value:y},ht({ourProps:{...E,as:p.Fragment,children:S.createElement(C1,{ref:c,...E,...a,beforeEnter:v,beforeLeave:k})},theirProps:{},defaultTag:p.Fragment,features:S1,visible:d==="visible",name:"Transition"})))}function IC(t,n){let r=p.useContext(Bl)!==null,o=qi()!==null;return S.createElement(S.Fragment,null,!r&&o?S.createElement(Mu,{ref:n,...t}):S.createElement(C1,{ref:n,...t}))}let Mu=ft(PC),C1=ft(CC),DC=ft(IC),Xh=Object.assign(Mu,{Child:DC,Root:Mu});const TC=t=>{function n(i){return Object.prototype.hasOwnProperty.call(i,"current")}const{element:r,padding:o}=t;return{name:"arrow",options:t,fn(i){return n(r)?r.current==null?{}:Qh({element:r.current,padding:o}).fn(i):r?Qh({element:r,padding:o}).fn(i):{}}}};var Fa=typeof document>"u"?p.useEffect:p.useLayoutEffect;function nl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let r,o,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(o=r;o--!=0;)if(!nl(t[o],n[o]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!=0;){const a=i[o];if(!(a==="_owner"&&t.$$typeof)&&!nl(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function em(t){const n=p.useRef(t);return Fa(()=>{n.current=t}),n}function MC(t){t===void 0&&(t={});const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:i,whileElementsMounted:a,open:l}=t,[c,u]=p.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[d,f]=p.useState(o);nl(d,o)||f(o);const g=p.useRef(null),b=p.useRef(null),h=p.useRef(c),m=em(a),y=em(i),[E,v]=p.useState(null),[k,C]=p.useState(null),M=p.useCallback(V=>{g.current!==V&&(g.current=V,v(V))},[]),I=p.useCallback(V=>{b.current!==V&&(b.current=V,C(V))},[]),D=p.useCallback(()=>{if(g.current&&b.current){const V={placement:n,strategy:r,middleware:d};y.current&&(V.platform=y.current),w1(g.current,b.current,V).then(F=>{const L={...F,isPositioned:!0};z.current&&!nl(h.current,L)&&(h.current=L,or.flushSync(()=>{u(L)}))})}},[d,n,r,y]);Fa(()=>{l===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(V=>({...V,isPositioned:!1})))},[l]);const z=p.useRef(!1);Fa(()=>(z.current=!0,()=>{z.current=!1}),[]),Fa(()=>{if(E&&k){if(m.current)return m.current(E,k,D);D()}},[E,k,D,m]);const A=p.useMemo(()=>({reference:g,floating:b,setReference:M,setFloating:I}),[M,I]),J=p.useMemo(()=>({reference:E,floating:k}),[E,k]);return p.useMemo(()=>({...c,update:D,refs:A,elements:J,reference:M,floating:I}),[c,D,A,J,M,I])}var RC=typeof document>"u"?p.useEffect:p.useLayoutEffect;function NC(){const t=new Map;return{emit(n,r){var o;(o=t.get(n))==null||o.forEach(i=>i(r))},on(n,r){t.set(n,[...t.get(n)||[],r])},off(n,r){t.set(n,(t.get(n)||[]).filter(o=>o!==r))}}}const FC=p.createContext(null),LC=()=>p.useContext(FC);function AC(t){return(t==null?void 0:t.ownerDocument)||document}function _C(t){return AC(t).defaultView||window}function pa(t){return!!t&&t instanceof _C(t).Element}const $C=Xr.useInsertionEffect,zC=$C||(t=>t());function HC(t){const n=p.useRef(()=>{});return zC(()=>{n.current=t}),p.useCallback(function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.current==null?void 0:n.current(...o)},[])}function BC(t){t===void 0&&(t={});const{open:n=!1,onOpenChange:r,nodeId:o}=t,i=MC(t),a=LC(),l=p.useRef(null),c=p.useRef({}),u=p.useState(()=>NC())[0],[d,f]=p.useState(null),g=p.useCallback(v=>{const k=pa(v)?{getBoundingClientRect:()=>v.getBoundingClientRect(),contextElement:v}:v;i.refs.setReference(k)},[i.refs]),b=p.useCallback(v=>{(pa(v)||v===null)&&(l.current=v,f(v)),(pa(i.refs.reference.current)||i.refs.reference.current===null||v!==null&&!pa(v))&&i.refs.setReference(v)},[i.refs]),h=p.useMemo(()=>({...i.refs,setReference:b,setPositionReference:g,domReference:l}),[i.refs,b,g]),m=p.useMemo(()=>({...i.elements,domReference:d}),[i.elements,d]),y=HC(r),E=p.useMemo(()=>({...i,refs:h,elements:m,dataRef:c,nodeId:o,events:u,open:n,onOpenChange:y}),[i,o,u,n,y,h,m]);return RC(()=>{const v=a==null?void 0:a.nodesRef.current.find(k=>k.id===o);v&&(v.context=E)}),p.useMemo(()=>({...i,context:E,refs:h,reference:b,positionReference:g}),[i,h,E,b,g])}var tm,VC=Object.defineProperty,WC=(t,n,r)=>n in t?VC(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,nm=(t,n,r)=>(WC(t,typeof n=="symbol"?n:n+"",r),r),P1={exports:{}},si={};function UC(){function t(a,l,c){var u,d={},f=null,g=null;for(u in c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref),l)r.call(l,u)&&!i.hasOwnProperty(u)&&(d[u]=l[u]);if(a&&a.defaultProps)for(u in l=a.defaultProps,l)d[u]===void 0&&(d[u]=l[u]);return{$$typeof:n,type:a,key:f,ref:g,props:d,_owner:o.current}}if(tm)return si;tm=1;var n=Symbol.for("react.element"),r=Object.prototype.hasOwnProperty,o=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};return si.Fragment=Symbol.for("react.fragment"),si.jsx=t,si.jsxs=t,si}P1.exports=UC();var Ye=P1.exports;class qC{constructor(){nm(this,"current",this.detect()),nm(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return"u"<typeof window||"u"<typeof document?"server":"client"}}const qo=new qC,I1=(t,n)=>{qo.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)},Ts={serverHandoffComplete:!1};function YC(){const[t,n]=p.useState(Ts.serverHandoffComplete);return p.useEffect(()=>{t!==!0&&n(!0)},[t]),p.useEffect(()=>{Ts.serverHandoffComplete===!1&&(Ts.serverHandoffComplete=!0)},[]),t}const KC=S.useId??function(){const t=YC(),[n,r]=S.useState(t?()=>qo.nextId():null);return I1(()=>{n===null&&r(qo.nextId())},[n]),n==null?void 0:`${n}`};function GC(t,n,r,o){p.useEffect(()=>{const i=[];(typeof o.offset=="number"||typeof o.offset=="object"||typeof o.offset=="function")&&i.push(m1(o.offset)),(o.flip===!0||typeof o.flip=="number"||typeof o.flip=="object")&&i.push(y1({padding:typeof o.flip=="number"?o.flip:void 0,...typeof o.flip=="object"?o.flip:{}})),(o.shift===!0||typeof o.shift=="number"||typeof o.shift=="object")&&i.push(v1({padding:typeof o.shift=="number"?o.shift:void 0,...typeof o.shift=="object"?o.shift:{}})),(o.autoPlacement===!0||typeof o.autoPlacement=="object")&&i.push(b1(typeof o.autoPlacement=="object"?o.autoPlacement:void 0)),(o.arrow===!0||typeof o.arrow=="number")&&i.push(TC({element:r,padding:o.arrow===!0?0:o.arrow})),i.push(...typeof o.middleware=="function"?o.middleware({referenceEl:n.reference,floatingEl:n.floating}):o.middleware||[]),(o.hide===!0||typeof o.hide=="object")&&i.push(JS(typeof o.hide=="object"?o.hide:void 0)),t(i)},[o.offset,o.shift,o.flip,o.arrow,o.autoPlacement,o.hide,o.middleware])}function QC(t,n,r){p.useEffect(()=>{if(t&&qo.isClient&&"u">typeof ResizeObserver&&n.current&&n.current instanceof Element){const o=new ResizeObserver(i=>{let[a]=i;const l=a.borderBoxSize.reduce((c,u)=>{let{inlineSize:d}=u;return c+d},0);r(l)});return o.observe(n.current),()=>{o.disconnect(),r(null)}}},[])}const ZC=t=>t==="top"?"origin-bottom":t==="bottom"?"origin-top":t==="left"?"origin-right":t==="right"?"origin-left":t==="top-start"||t==="right-end"?"origin-bottom-left":t==="top-end"||t==="left-end"?"origin-bottom-right":t==="right-start"||t==="bottom-start"?"origin-top-left":t==="left-start"||t==="bottom-end"?"origin-top-right":"";function JC(t,n){return p.useMemo(()=>typeof t.originClass=="function"?t.originClass(n):typeof t.originClass=="string"?t.originClass:t.tailwindcssOriginClass?ZC(n):"",[n,t.originClass,t.tailwindcssOriginClass])}function D1(t,n){if(t in n){const l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}const a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,D1),a}function T1(t){return qo.isServer?null:t instanceof Node?t.ownerDocument:t&&Object.prototype.hasOwnProperty.call(t,"current")&&t.current instanceof Node?t.current.ownerDocument:document}const rm=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var M1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(M1||{});function XC(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=T1(t))==null?void 0:r.body)&&D1(n,{0(){return t.matches(rm)},1(){for(let o=t;o!==null;){if(o.matches(rm))return!0;o=o.parentElement}return!1}})}function e3(t){const n=p.useRef(t);return I1(()=>{n.current=t},[t]),n}function Mn(t,n,r){const o=e3(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function t3(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){const u=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t),d=c(l);if(d!==null&&d.getRootNode().contains(d)){for(const f of u){if(f===null)continue;const g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(d)||l.composed&&l.composedPath().includes(g))return}return!XC(d,M1.Loose)&&d.tabIndex!==-1&&l.preventDefault(),n(l,d)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];const i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);const a=p.useRef(null);Mn("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),Mn("click",l=>{a.current&&(r(l,()=>a.current),a.current=null)},!0),Mn("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}const ga=new Map,Vf=p.createContext(null);Vf.displayName="ReferenceContext";const Wf=p.createContext(null);Wf.displayName="FloatingContext";const Ii=p.createContext(null);Ii.displayName="ArrowContext";function R1(t){const n=p.useContext(Vf);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,R1),r}return n}function N1(t){const n=p.useContext(Wf);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,N1),r}return n}function F1(t){const n=p.useContext(Ii);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,F1),r}return n}function L1(t,n,r,o){const{referenceRef:i}=o,a=n;if(a.as===p.Fragment)return Ye.jsx(t.type,{...t.props,...r,ref:i});const l=a.as||"div";return Ye.jsx(l,{...r,ref:i,children:Ye.jsx(t.type,{...t.props})})}function Uf(t,n,r,o){var i=Math.round;function a(I){return v.portal?Ye.jsx(gC,{children:I}):I}function l(I){const D={...M,...r,ref:u};if(v.as===p.Fragment)return Ye.jsx(I.type,{...I.props,...D});const z=v.as||"div";return Ye.jsx(z,{...D,children:Ye.jsx(I.type,{...I.props})})}function c(){return qo.isServer?f.current&&v.show?Ye.jsx(t.type,{...t.props}):Ye.jsx(p.Fragment,{}):v.transitionChild?Ye.jsx(Xh.Child,{as:p.Fragment,...C,children:Ye.jsx(t.type,{...t.props})}):Ye.jsx(Xh,{as:p.Fragment,...C,children:Ye.jsx(t.type,{...t.props})})}const{floatingRef:u,props:d,mounted:f,setShow:g,x:b,y:h,placement:m,strategy:y,referenceElWidth:E}=o,v={...d,...n},k=JC(v,m),C={show:!!f.current&&v.show,enter:`${v.enter||""} ${k}`,enterFrom:`${v.enterFrom||""}`,enterTo:`${v.enterTo||""}`,leave:`${v.leave||""} ${k}`,leaveFrom:`${v.leaveFrom||""}`,leaveTo:`${v.leaveTo||""}`,beforeEnter:()=>{g(!0)},afterLeave:()=>{g(!1)}},M={style:{...!v.dialog&&(v.transform||v.transform===void 0)?{position:y,zIndex:v.zIndex||9999,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${i(b||0)}px,${i(h||0)}px)`}:{position:y,zIndex:v.zIndex||9999,top:`${h||0}px`,left:`${b||0}px`},width:v.adaptiveWidth&&typeof E=="number"?`${E}px`:void 0}};return a(l(c()))}function A1(t,n){let[r,o]=t;var i,a;const l=KC(),c=p.useRef(!1),[u,d]=p.useState(),f=p.useRef(null),g=p.useMemo(()=>({show:n.onShow||(()=>{}),hide:n.onHide||(()=>{}),update:n.onUpdate||(()=>{})}),[n.onShow,n.onHide,n.onUpdate]),{x:b,y:h,placement:m,strategy:y,update:E,refs:v,middlewareData:k}=BC({placement:n.placement||"bottom-start",strategy:n.strategy,middleware:u}),[C,M]=p.useState(null);p.useEffect(()=>{c.current=!0},[]),p.useEffect(()=>{r&&!ga.get(l)?(ga.set(l,!0),g.show()):!r&&ga.get(l)&&(ga.delete(l),g.hide())},[r]);const I=p.useCallback(()=>{E(),g.update()},[E,g]);p.useEffect(I,[n.placement,n.strategy,u]),GC(d,v,f,n),QC(n.adaptiveWidth,v.reference,M),p.useEffect(()=>{if(v.reference.current&&v.floating.current&&r)return n.autoUpdate===!1?()=>{}:h1(v.reference.current,v.floating.current,I,typeof n.autoUpdate=="object"?n.autoUpdate:void 0)},[r,I,v]);const D=p.useRef(!0);p.useEffect(()=>{!(v.reference.current instanceof Element)&&v.reference.current&&v.floating.current&&D.current&&(D.current=!1,I(),window.requestAnimationFrame(()=>{D.current=!0,I()}))},[v]);const z={referenceRef:v.setReference,placement:m},A={floatingRef:v.setFloating,props:n,mounted:c,setShow:o,x:b,y:h,placement:m,strategy:y,referenceElWidth:C},J={arrowRef:f,placement:m,x:(i=k.arrow)==null?void 0:i.x,y:(a=k.arrow)==null?void 0:a.y};return{referenceApi:z,floatingApi:A,arrowApi:J,x:b,y:h,placement:m,strategy:y,update:I,refs:v,middlewareData:k}}const _1=p.forwardRef((t,n)=>{function r(m){if(t.as===p.Fragment||!t.as)return Ye.jsx(p.Fragment,{children:m});const y=t.as;return Ye.jsx(y,{ref:n,className:t.className,children:m})}const[o,i]=p.useState(t.show??!1),{referenceApi:a,floatingApi:l,arrowApi:c,placement:u}=A1([o,i],t),d={placement:u},[f,g]=typeof t.children=="function"?t.children(d):t.children;if(!p.isValidElement(f))return console.warn("<Float /> is missing a reference and floating element."),Ye.jsx(p.Fragment,{});if(t.composable||t.dialog)return r(Ye.jsx(Vf.Provider,{value:a,children:Ye.jsx(Wf.Provider,{value:l,children:Ye.jsx(Ii.Provider,{value:c,children:typeof t.children=="function"?t.children(d):t.children})})},"FloatingNode"));const b=L1(f,{as:p.Fragment},{key:"reference-node"},a),h=Uf(g,{as:t.floatingAs||"div"},{},l);return r([b,Ye.jsx(Ii.Provider,{value:c,children:h},"floating-node")])});_1.displayName="Float";function n3(t){if(!t.children)return Ye.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,children:l,...c}=t;return c},[t]),r=R1("Float.Reference"),{placement:o}=r,i={placement:o};return L1(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||p.Fragment},n,r)}function r3(t){if(!t.children)return Ye.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,enter:l,enterFrom:c,enterTo:u,leave:d,leaveFrom:f,leaveTo:g,originClass:b,tailwindcssOriginClass:h,transitionChild:m,children:y,...E}=t;return E},[t]),r=N1("Float.Content"),{placement:o}=r,i={placement:o};return Uf(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||"div"},n,r)}function o3(t){const{arrowRef:n,placement:r,x:o,y:i}=F1("Float.Arrow"),a=p.useMemo(()=>{const{as:d,offset:f,children:g,...b}=t;return b},[t]),l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]],c={left:typeof o=="number"?`${o}px`:void 0,top:typeof i=="number"?`${i}px`:void 0,right:void 0,bottom:void 0,[l]:`${-1*(t.offset??4)}px`,...a.style};if(t.as===p.Fragment){const d={placement:r},f=typeof t.children=="function"?t.children(d):t.children;return f&&p.isValidElement(f)?Ye.jsx(f.type,{...f.props,ref:n,style:c}):Ye.jsx(p.Fragment,{})}const u=t.as||"div";return Ye.jsx(u,{ref:n,...a,style:c,children:t.children})}function qf(t){function n(){a&&l(!1)}let{onInitial:r,children:o,...i}=t;const[a,l]=p.useState(i.show??!1),c=p.useMemo(()=>{const{as:h,show:m,placement:y,strategy:E,offset:v,shift:k,flip:C,arrow:M,autoPlacement:I,hide:D,autoUpdate:z,zIndex:A,enter:J,enterFrom:V,enterTo:F,leave:L,leaveFrom:_,leaveTo:N,originClass:B,tailwindcssOriginClass:H,portal:U,transform:Q,middleware:X,onShow:R,onHide:ae,onUpdate:se,...T}=i;return T},[i]),{floatingApi:u,arrowApi:d,placement:f,refs:g}=A1([a,l],i);if(p.useEffect(()=>{l(i.show??!1)},[i.show]),r({show:a,setShow:l,placement:f,refs:g}),!o)return Ye.jsx(p.Fragment,{});const b=Uf(typeof o=="function"?o({placement:f,close:n}):o,{...i,as:i.as||p.Fragment,show:a},c,u);return Ye.jsx(Ii.Provider,{value:d,children:b})}function i3(t){function n(r){let{setShow:o,refs:i}=r;Mn("contextmenu",a=>{a.preventDefault(),i.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:a.clientX,y:a.clientY,top:a.clientY,left:a.clientX,right:a.clientX,bottom:a.clientY}}}),o(!0)}),t3(i.floating,()=>{o(!1)})}return Ye.jsx(qf,{flip:!0,...t,show:!1,portal:!0,onInitial:n})}function a3(t){function n(i){function a(){f(!0)}function l(){f(!1)}function c(h){g.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:h.clientX,y:h.clientY,top:h.clientY,left:h.clientX,right:h.clientX,bottom:h.clientY}}})}function u(h){a(),c(h)}function d(h){a(),c(h.touches[0])}let{setShow:f,refs:g}=i;const b=T1(g.floating);b&&(p.useEffect(()=>{if((r||r===void 0)&&!b.getElementById("headlesui-float-cursor-style")){const h=b.createElement("style");return(b.head||b.getElementsByTagName("head")[0]).appendChild(h),h.id="headlesui-float-cursor-style",h.appendChild(b.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var m;return(m=b.getElementById("headlesui-float-cursor-style"))==null?void 0:m.remove()}}},[r]),"ontouchstart"in window||0<navigator.maxTouchPoints?(Mn("touchstart",d),Mn("touchend",l),Mn("touchmove",d)):(Mn("mouseenter",u),Mn("mouseleave",l),Mn("mousemove",u)))}let{globalHideCursor:r,...o}=t;return Ye.jsx(qf,{...o,portal:!0,className:"headlesui-float-cursor-root",onInitial:n})}const Ms=Object.assign(_1,{Reference:n3,Content:r3,Arrow:o3,Virtual:qf,ContextMenu:i3,Cursor:a3}),l3=`
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
	jn-z-10
`,s3=`
	jn-absolute
`,c3=`
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`,u3=`
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`,d3=`
	jn-opacity-50
	jn-cursor-not-allowed
`,Ru=S.forwardRef((t,n)=>{let{text:r="",htmlFor:o=void 0,required:i=!1,className:a="",disabled:l=!1,floating:c=!1,minimized:u=!1,...d}=t;return S.createElement("label",he({className:`
				juno-label 
				${l3} 
				${c?"juno-label-floating "+s3:""}
				${u?"juno-label-minimized "+c3:""}
				${l?"juno-label-disabled "+d3:""} 
				${a}
			`,htmlFor:o,ref:n},d),r,i?S.createElement("span",{className:`
					juno-required 
					${u3}
					`}):"")});Ru.displayName="Label (JS)",Ru.propTypes={text:x.string,htmlFor:x.string,required:x.bool,className:x.string,disabled:x.bool,floating:x.bool,minimized:x.bool};const f3=`
  jn-text-xs
  jn-mt-1
`,p3=t=>t==="success"?"jn-text-theme-success":t==="error"?"jn-text-theme-error":"jn-text-theme-light",xi=t=>{let{children:n=null,text:r="",variant:o="help",className:i,...a}=t;return S.createElement("div",he({className:`
        juno-form-hint
        juno-form-hint-${o}
        ${f3}
        ${p3(o)}
        ${i}
      `},a),n||r)};xi.displayName="FormHint Js",xi.propTypes={children:x.node,text:x.node,variant:x.oneOf(["help","error","success"]),className:x.string};function Ki(t,n){let[r,o]=p.useState(t),i=bn(t);return Ge(()=>o(i.current),[i,o,...n]),r}function $1(t,n,r){let[o,i]=p.useState(r),a=t!==void 0,l=p.useRef(a),c=p.useRef(!1),u=p.useRef(!1);return!a||l.current||c.current?!a&&l.current&&!u.current&&(u.current=!0,l.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,l.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?t:o,pe(d=>(a||i(d),n==null?void 0:n(d)))]}let g3="div";var Yf=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Yf||{});function h3(t,n){var r;let{features:o=1,...i}=t,a={ref:n,"aria-hidden":(2&o)==2||((r=i["aria-hidden"])==null?void 0:r),hidden:(4&o)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&o)==4&&(2&o)!=2&&{display:"none"}}};return ht({ourProps:a,theirProps:i,slot:{},defaultTag:g3,name:"Hidden"})}let z1=ft(h3);function Kf(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[];for(let[o,i]of Object.entries(t))B1(r,H1(n,o),i);return r}function H1(t,n){return t?t+"["+n+"]":n}function B1(t,n,r){if(Array.isArray(r))for(let[o,i]of r.entries())B1(t,H1(n,o.toString()),i);else r instanceof Date?t.push([n,r.toISOString()]):typeof r=="boolean"?t.push([n,r?"1":"0"]):typeof r=="string"?t.push([n,r]):typeof r=="number"?t.push([n,`${r}`]):r==null?t.push([n,""]):Kf(r,n,t)}function V1(t){let{container:n,accept:r,walk:o,enabled:i=!0}=t,a=p.useRef(r),l=p.useRef(o);p.useEffect(()=>{a.current=r,l.current=o},[r,o]),Ge(()=>{if(!n||!i)return;let c=Ui(n);if(!c)return;let u=a.current,d=l.current,f=Object.assign(b=>u(b),{acceptNode:u}),g=c.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,f,!1);for(;g.nextNode();)d(g.currentNode)},[n,i,a,l])}var m3={};function po(t,n,r){var o=Math.max,i=Math.min,a=Math.round;let l,c=r.initialDeps??[];return()=>{var u,d,f,g;let b;r.key&&((u=r.debug)!=null&&u.call(r))&&(b=Date.now());const h=t();if(!(h.length!==c.length||h.some((E,v)=>c[v]!==E)))return l;c=h;let y;if(r.key&&((d=r.debug)!=null&&d.call(r))&&(y=Date.now()),l=n(...h),r.key&&((f=r.debug)==null?void 0:f.call(r))){const E=a(100*(Date.now()-b))/100,v=a(100*(Date.now()-y))/100,k=(C,M)=>{for(C+="";C.length<M;)C=" "+C;return C};console.info(`%c⏱ ${k(v,5)} /${k(E,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${o(0,i(120-120*(v/16),120))}deg 100% 31%);`,r==null?void 0:r.key)}return(g=r==null?void 0:r.onChange)==null||g.call(r,l),l}}function Rs(t){if(t===void 0)throw new Error("Unexpected undefined");return t}const b3=(t,n)=>1>Math.abs(t-n),v3=(t,n,r)=>{let o;return function(){for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];t.clearTimeout(o),o=t.setTimeout(()=>n.apply(this,a),r)}},y3=t=>t,w3=t=>{const n=Math.max(t.startIndex-t.overscan,0),r=Math.min(t.endIndex+t.overscan,t.count-1),o=[];for(let i=n;i<=r;i++)o.push(i);return o},x3=(t,n)=>{var r=Math.round;const o=t.scrollElement;if(!o)return;const i=t.targetWindow;if(!i)return;const a=c=>{const{width:u,height:d}=c;n({width:r(u),height:r(d)})};if(a(o.getBoundingClientRect()),!i.ResizeObserver)return()=>{};const l=new i.ResizeObserver(c=>{const u=c[0];if(u!=null&&u.borderBoxSize){const d=u.borderBoxSize[0];if(d)return void a({width:d.inlineSize,height:d.blockSize})}a(o.getBoundingClientRect())});return l.observe(o,{box:"border-box"}),()=>{l.unobserve(o)}},om={passive:!0},j3=!(typeof window<"u")||"onscrollend"in window,E3=(t,n)=>{const r=t.scrollElement;if(!r)return;const o=t.targetWindow;if(!o)return;let i=0;const a=j3?()=>{}:v3(o,()=>{n(i,!1)},t.options.isScrollingResetDelay),l=d=>()=>{const{horizontal:f,isRtl:g}=t.options;i=f?r.scrollLeft*(g&&-1||1):r.scrollTop,a(),n(i,d)},c=l(!0),u=l(!1);return u(),r.addEventListener("scroll",c,om),r.addEventListener("scrollend",u,om),()=>{r.removeEventListener("scroll",c),r.removeEventListener("scrollend",u)}},k3=(t,n,r)=>{var o=Math.round;if(n!=null&&n.borderBoxSize){const i=n.borderBoxSize[0];if(i)return o(i[r.options.horizontal?"inlineSize":"blockSize"])}return o(t.getBoundingClientRect()[r.options.horizontal?"width":"height"])},O3=(t,n,r)=>{let{adjustments:o=0,behavior:i}=n;var a,l;(l=(a=r.scrollElement)==null?void 0:a.scrollTo)==null||l.call(a,{[r.options.horizontal?"left":"top"]:t+o,behavior:i})};class S3{constructor(n){var r=Math.max,o=Math.min,i=this;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let a=null;const l=()=>a||(this.targetWindow&&this.targetWindow.ResizeObserver?a=new this.targetWindow.ResizeObserver(c=>{c.forEach(u=>{this._measureElement(u.target,u)})}):null);return{disconnect:()=>{var c;(c=l())==null||c.disconnect(),a=null},observe:c=>{var u;return(u=l())==null?void 0:u.observe(c,{box:"border-box"})},unobserve:c=>{var u;return(u=l())==null?void 0:u.unobserve(c)}}})(),this.range=null,this.setOptions=a=>{Object.entries(a).forEach(l=>{let[c,u]=l;typeof u>"u"&&delete a[c]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:y3,rangeExtractor:w3,onChange:()=>{},measureElement:k3,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...a}},this.notify=a=>{var l,c;(c=(l=this.options).onChange)==null||c.call(l,this,a)},this.maybeNotify=po(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;const l=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==l){if(this.cleanup(),!l)return void this.maybeNotify();this.scrollElement=l,this.targetWindow=this.scrollElement&&"ownerDocument"in this.scrollElement?this.scrollElement.ownerDocument.defaultView:((a=this.scrollElement)==null?void 0:a.window)??null,this.elementsCache.forEach(c=>{this.observer.observe(c)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,c=>{this.scrollRect=c,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(c,u)=>{this.scrollAdjustments=0,this.scrollDirection=u?this.getScrollOffset()<c?"forward":"backward":null,this.scrollOffset=c,this.isScrolling=u,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(a,l)=>{const c=new Map,u=new Map;for(let d=l-1;0<=d;d--){const f=a[d];if(c.has(f.lane))continue;const g=u.get(f.lane);if(g==null||f.end>g.end?u.set(f.lane,f):f.end<g.end&&c.set(f.lane,!0),c.size===this.options.lanes)break}return u.size===this.options.lanes?Array.from(u.values()).sort((d,f)=>d.end===f.end?d.index-f.index:d.end-f.end)[0]:void 0},this.getMeasurementOptions=po(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(a,l,c,u,d)=>(this.pendingMeasuredCacheIndexes=[],{count:a,paddingStart:l,scrollMargin:c,getItemKey:u,enabled:d}),{key:!1}),this.getMeasurements=po(()=>[this.getMeasurementOptions(),this.itemSizeCache],(a,l)=>{let{count:c,paddingStart:u,scrollMargin:d,getItemKey:f,enabled:g}=a;if(!g)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(m=>{this.itemSizeCache.set(m.key,m.size)}));const b=0<this.pendingMeasuredCacheIndexes.length?o(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const h=this.measurementsCache.slice(0,b);for(let m=b;m<c;m++){const y=f(m),E=this.options.lanes===1?h[m-1]:this.getFurthestMeasurement(h,m),v=E?E.end+this.options.gap:u+d,k=l.get(y),C=typeof k=="number"?k:this.options.estimateSize(m),M=E?E.lane:m%this.options.lanes;h[m]={index:m,start:v,size:C,end:v+C,key:y,lane:M}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=po(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(a,l,c)=>this.range=0<a.length&&0<l?C3({measurements:a,outerSize:l,scrollOffset:c}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=po(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(a,l,c,u)=>l===null?[]:a({startIndex:l.startIndex,endIndex:l.endIndex,overscan:c,count:u}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{const l=this.options.indexAttribute,c=a.getAttribute(l);return c?parseInt(c,10):(console.warn(`Missing attribute name '${l}={index}' on measured element.`),-1)},this._measureElement=(a,l)=>{const c=this.indexFromElement(a),u=this.measurementsCache[c];if(!u)return;const d=u.key,f=this.elementsCache.get(d);f!==a&&(f&&this.observer.unobserve(f),this.observer.observe(a),this.elementsCache.set(d,a)),a.isConnected&&this.resizeItem(c,this.options.measureElement(a,l,this))},this.resizeItem=(a,l)=>{const c=this.measurementsCache[a];if(!c)return;const u=this.itemSizeCache.get(c.key)??c.size,d=l-u;d!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?c.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(c,d,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=d,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,l)),this.notify(!1))},this.measureElement=a=>a?void this._measureElement(a,void 0):void this.elementsCache.forEach((l,c)=>{l.isConnected||(this.observer.unobserve(l),this.elementsCache.delete(c))}),this.getVirtualItems=po(()=>[this.getIndexes(),this.getMeasurements()],(a,l)=>{const c=[];for(let u=0,d=a.length;u<d;u++){const f=a[u],g=l[f];c.push(g)}return c},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{const l=this.getMeasurements();return l.length===0?void 0:Rs(l[W1(0,l.length-1,c=>Rs(l[c]).start,a)])},this.getOffsetForAlignment=(a,l)=>{const c=this.getSize(),u=this.getScrollOffset();l==="auto"&&(a<=u?l="start":a>=u+c?l="end":l="start"),l==="start"?a=a:l==="end"?a-=c:l=="center"&&(a-=c/2);const d=this.options.horizontal?"scrollWidth":"scrollHeight",f=this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[d]:this.scrollElement[d]:0;return r(o(f-c,a),0)},this.getOffsetForIndex=function(a){let l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"auto";a=r(0,o(a,i.options.count-1));const c=i.measurementsCache[a];if(!c)return;const u=i.getSize(),d=i.getScrollOffset();if(l==="auto")if(c.end>=d+u-i.options.scrollPaddingEnd)l="end";else if(c.start<=d+i.options.scrollPaddingStart)l="start";else return[d,l];const f=l==="end"?c.end+i.options.scrollPaddingEnd:c.start-i.options.scrollPaddingStart;return[i.getOffsetForAlignment(f,l),l]},this.isDynamicMode=()=>0<this.elementsCache.size,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(a){let{align:l="start",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getOffsetForAlignment(a,l),{adjustments:void 0,behavior:c})},this.scrollToIndex=function(a){let{align:l="auto",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};a=r(0,o(a,i.options.count-1)),i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const u=i.getOffsetForIndex(a,l);if(!u)return;const[d,f]=u;i._scrollToOffset(d,{adjustments:void 0,behavior:c}),c!=="smooth"&&i.isDynamicMode()&&i.targetWindow&&(i.scrollToIndexTimeoutId=i.targetWindow.setTimeout(()=>{if(i.scrollToIndexTimeoutId=null,i.elementsCache.has(i.options.getItemKey(a))){const[b]=Rs(i.getOffsetForIndex(a,f));b3(b,i.getScrollOffset())||i.scrollToIndex(a,{align:f,behavior:c})}else i.scrollToIndex(a,{align:f,behavior:c})}))},this.scrollBy=function(a){let{behavior:l}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),l==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getScrollOffset()+a,{adjustments:void 0,behavior:l})},this.getTotalSize=()=>{var a;const l=this.getMeasurements();let c;return c=l.length===0?this.options.paddingStart:this.options.lanes===1?((a=l[l.length-1])==null?void 0:a.end)??0:r(...l.slice(-this.options.lanes).map(u=>u.end)),r(c-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(a,l)=>{let{adjustments:c,behavior:u}=l;this.options.scrollToFn(a,{behavior:u,adjustments:c},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(n)}}const W1=(t,n,r,o)=>{for(;t<=n;){const i=0|(t+n)/2,a=r(i);if(a<o)t=i+1;else if(a>o)n=i-1;else return i}return 0<t?t-1:0};function C3(t){let{measurements:n,outerSize:r,scrollOffset:o}=t;const i=n.length-1,a=W1(0,i,c=>n[c].start,o);let l=a;for(;l<i&&n[l].end<o+r;)l++;return{startIndex:a,endIndex:l}}const P3=typeof document>"u"?p.useEffect:p.useLayoutEffect;function I3(t){const n=p.useReducer(()=>({}),{})[1],r={...t,onChange:(i,a)=>{var l;a?or.flushSync(n):n(),(l=t.onChange)==null||l.call(t,i,a)}},[o]=p.useState(()=>new S3(r));return o.setOptions(r),p.useEffect(()=>o._didMount(),[]),P3(()=>o._willUpdate()),o}function D3(t){return I3({observeElementRect:x3,observeElementOffset:E3,scrollToFn:O3,...t})}function im(t,n){let r=p.useRef([]),o=pe(t);p.useEffect(()=>{let i=[...r.current];for(let[a,l]of n.entries())if(r.current[a]!==l){let c=o(n,i);return r.current=n,c}},[o,...n])}function T3(t){function n(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",n))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",n),n())}let zr=[];T3(()=>{function t(n){n.target instanceof HTMLElement&&n.target!==document.body&&zr[0]!==n.target&&(zr.unshift(n.target),zr=zr.filter(r=>r!=null&&r.isConnected),zr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});var M3=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(M3||{}),R3=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(R3||{}),N3=(t=>(t[t.Pointer=0]="Pointer",t[t.Focus=1]="Focus",t[t.Other=2]="Other",t))(N3||{}),F3=(t=>(t[t.OpenCombobox=0]="OpenCombobox",t[t.CloseCombobox=1]="CloseCombobox",t[t.GoToOption=2]="GoToOption",t[t.RegisterOption=3]="RegisterOption",t[t.UnregisterOption=4]="UnregisterOption",t[t.RegisterLabel=5]="RegisterLabel",t[t.SetActivationTrigger=6]="SetActivationTrigger",t[t.UpdateVirtualOptions=7]="UpdateVirtualOptions",t))(F3||{});function Ns(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:l=>l,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=n(t.options.slice()),i=0<o.length&&o[0].dataRef.current.order!==null?o.sort((l,c)=>l.dataRef.current.order-c.dataRef.current.order):Ll(o,l=>l.dataRef.current.domRef.current),a=r?i.indexOf(r):null;return a===-1&&(a=null),{options:i,activeOptionIndex:a}}let L3={1(t){var n;return(n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},0(t){var n,r;if((n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===0)return t;if((r=t.dataRef.current)!=null&&r.value){let o=t.dataRef.current.calculateIndex(t.dataRef.current.value);if(o!==-1)return{...t,activeOptionIndex:o,comboboxState:0}}return{...t,comboboxState:0}},2(t,n){var r,o,i,a,l;if((r=t.dataRef.current)!=null&&r.disabled||(o=t.dataRef.current)!=null&&o.optionsRef.current&&!((i=t.dataRef.current)!=null&&i.optionsPropsRef.current.static)&&t.comboboxState===1)return t;if(t.virtual){let f=n.focus===Fe.Specific?n.idx:Qa(n,{resolveItems:()=>t.virtual.options,resolveActiveIndex:()=>{var b,h;return(h=(b=t.activeOptionIndex)==null?t.virtual.options.findIndex(m=>!t.virtual.disabled(m)):b)==null?null:h},resolveDisabled:t.virtual.disabled,resolveId(){throw new Error("Function not implemented.")}}),g=(a=n.trigger)==null?2:a;return t.activeOptionIndex===f&&t.activationTrigger===g?t:{...t,activeOptionIndex:f,activationTrigger:g}}let c=Ns(t);if(c.activeOptionIndex===null){let f=c.options.findIndex(g=>!g.dataRef.current.disabled);f!==-1&&(c.activeOptionIndex=f)}let u=n.focus===Fe.Specific?n.idx:Qa(n,{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled}),d=(l=n.trigger)==null?2:l;return t.activeOptionIndex===u&&t.activationTrigger===d?t:{...t,...c,activeOptionIndex:u,activationTrigger:d}},3:(t,n)=>{var r,o,i;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:[...t.options,n.payload]};let a=n.payload,l=Ns(t,u=>(u.push(a),u));t.activeOptionIndex===null&&(o=t.dataRef.current)!=null&&o.isSelected(n.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(a));let c={...t,...l,activationTrigger:2};return(i=t.dataRef.current)!=null&&i.__demoMode&&t.dataRef.current.value===void 0&&(c.activeOptionIndex=0),c},4:(t,n)=>{var r;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:t.options.filter(i=>i.id!==n.id)};let o=Ns(t,i=>{let a=i.findIndex(l=>l.id===n.id);return a!==-1&&i.splice(a,1),i});return{...t,...o,activationTrigger:2}},5:(t,n)=>t.labelId===n.id?t:{...t,labelId:n.id},6:(t,n)=>t.activationTrigger===n.trigger?t:{...t,activationTrigger:n.trigger},7:(t,n)=>{var r;if(((r=t.virtual)==null?void 0:r.options)===n.options)return t;let o=t.activeOptionIndex;if(t.activeOptionIndex!==null){let i=n.options.indexOf(t.virtual.options[t.activeOptionIndex]);o=i===-1?null:i}return{...t,activeOptionIndex:o,virtual:Object.assign({},t.virtual,{options:n.options})}}},Gf=p.createContext(null);Gf.displayName="ComboboxActionsContext";function Gi(t){let n=p.useContext(Gf);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Gi),r}return n}let U1=p.createContext(null);function A3(t){var n;let r=ao("VirtualProvider"),[o,i]=p.useMemo(()=>{let u=r.optionsRef.current;if(!u)return[0,0];let d=window.getComputedStyle(u);return[parseFloat(d.paddingBlockStart||d.paddingTop),parseFloat(d.paddingBlockEnd||d.paddingBottom)]},[r.optionsRef.current]),a=D3({scrollPaddingStart:o,scrollPaddingEnd:i,count:r.virtual.options.length,estimateSize(){return 40},getScrollElement(){var u;return(u=r.optionsRef.current)==null?null:u},overscan:12}),[l,c]=p.useState(0);return Ge(()=>{c(u=>u+1)},[(n=r.virtual)==null?void 0:n.options]),S.createElement(U1.Provider,{value:a},S.createElement("div",{style:{position:"relative",width:"100%",height:`${a.getTotalSize()}px`},ref:u=>{if(u){if(typeof process<"u"&&m3.JEST_WORKER_ID!==void 0||r.activationTrigger===0)return;r.activeOptionIndex!==null&&r.virtual.options.length>r.activeOptionIndex&&a.scrollToIndex(r.activeOptionIndex)}}},a.getVirtualItems().map(u=>{var d;return S.createElement(p.Fragment,{key:u.key},S.cloneElement((d=t.children)==null?void 0:d.call(t,{option:r.virtual.options[u.index],open:r.comboboxState===0}),{key:`${l}-${u.key}`,"data-index":u.index,"aria-setsize":r.virtual.options.length,"aria-posinset":u.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${u.start}px)`,overflowAnchor:"none"}}))})))}let Qf=p.createContext(null);Qf.displayName="ComboboxDataContext";function ao(t){let n=p.useContext(Qf);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ao),r}return n}function _3(t,n){return rt(n.type,L3,t,n)}let $3=p.Fragment;function z3(t,n){let{value:r,defaultValue:o,onChange:i,form:a,name:l,by:c=null,disabled:u=!1,__demoMode:d=!1,nullable:f=!1,multiple:g=!1,immediate:b=!1,virtual:h=null,...m}=t,y=null,[E=g?[]:void 0,v]=$1(r,i,o),[k,C]=p.useReducer(_3,{dataRef:p.createRef(),comboboxState:d?0:1,options:[],virtual:null,activeOptionIndex:null,activationTrigger:2,labelId:null}),M=p.useRef(!1),I=p.useRef({static:!1,hold:!1}),D=p.useRef(null),z=p.useRef(null),A=p.useRef(null),J=p.useRef(null),V=pe(typeof c=="string"?(oe,me)=>{let be=c;return(oe==null?void 0:oe[be])===(me==null?void 0:me[be])}:c??((oe,me)=>oe===me)),F=pe(oe=>k.options.findIndex(me=>V(me.dataRef.current.value,oe))),L=p.useCallback(oe=>rt(N.mode,{1:()=>E.some(me=>V(me,oe)),0:()=>V(E,oe)}),[E]),_=pe(oe=>k.activeOptionIndex===F(oe)),N=p.useMemo(()=>({...k,immediate:!1,optionsPropsRef:I,labelRef:D,inputRef:z,buttonRef:A,optionsRef:J,value:E,defaultValue:o,disabled:u,mode:g?1:0,virtual:k.virtual,get activeOptionIndex(){if(M.current&&k.activeOptionIndex===null&&0<k.options.length){let oe=k.options.findIndex(me=>!me.dataRef.current.disabled);if(oe!==-1)return oe}return k.activeOptionIndex},calculateIndex:F,compare:V,isSelected:L,isActive:_,nullable:f,__demoMode:d}),[E,o,u,g,f,d,k,y]);Ge(()=>{},[y,void 0]),Ge(()=>{k.dataRef.current=N},[N]),Mf([N.buttonRef,N.inputRef,N.optionsRef],()=>ie.closeCombobox(),N.comboboxState===0);let B=p.useMemo(()=>{var oe,me,be;return{open:N.comboboxState===0,disabled:u,activeIndex:N.activeOptionIndex,activeOption:N.activeOptionIndex===null?null:N.virtual?N.virtual.options[(oe=N.activeOptionIndex)==null?0:oe]:(be=(me=N.options[N.activeOptionIndex])==null?void 0:me.dataRef.current.value)==null?null:be,value:E}},[N,u,E]),H=pe(()=>{if(N.activeOptionIndex!==null){if(N.virtual)se(N.virtual.options[N.activeOptionIndex]);else{let{dataRef:oe}=N.options[N.activeOptionIndex];se(oe.current.value)}ie.goToOption(Fe.Specific,N.activeOptionIndex)}}),U=pe(()=>{C({type:0}),M.current=!0}),Q=pe(()=>{C({type:1}),M.current=!1}),X=pe((oe,me,be)=>(M.current=!1,oe===Fe.Specific?C({type:2,focus:Fe.Specific,idx:me,trigger:be}):C({type:2,focus:oe,trigger:be}))),R=pe((oe,me)=>(C({type:3,payload:{id:oe,dataRef:me}}),()=>{N.isActive(me.current.value)&&(M.current=!0),C({type:4,id:oe})})),ae=pe(oe=>(C({type:5,id:oe}),()=>C({type:5,id:null}))),se=pe(oe=>rt(N.mode,{0(){return v==null?void 0:v(oe)},1(){let me=N.value.slice(),be=me.findIndex(He=>V(He,oe));return be===-1?me.push(oe):me.splice(be,1),v==null?void 0:v(me)}})),T=pe(oe=>{C({type:6,trigger:oe})}),ie=p.useMemo(()=>({onChange:se,registerOption:R,registerLabel:ae,goToOption:X,closeCombobox:Q,openCombobox:U,setActivationTrigger:T,selectActiveOption:H}),[]),ye=n===null?{}:{ref:n},Pe=p.useRef(null),$e=wn();return p.useEffect(()=>{Pe.current&&o!==void 0&&$e.addEventListener(Pe.current,"reset",()=>{v==null||v(o)})},[Pe,v]),S.createElement(Gf.Provider,{value:ie},S.createElement(Qf.Provider,{value:N},S.createElement(_l,{value:rt(N.comboboxState,{0:ut.Open,1:ut.Closed})},l!=null&&E!=null&&Kf({[l]:E}).map((oe,me)=>{let[be,He]=oe;return S.createElement(z1,{features:Yf.Hidden,ref:me===0?it=>{var Ze;Pe.current=(Ze=it==null?void 0:it.closest("form"))==null?null:Ze}:void 0,...Ga({key:be,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,disabled:u,name:be,value:He})})}),ht({ourProps:ye,theirProps:m,slot:B,defaultTag:$3,name:"Combobox"}))))}let H3="input";function B3(t,n){var r,o,i,a,l,c=Math.abs;let u=cn(),{id:d=`headlessui-combobox-input-${u}`,onChange:f,displayValue:g,type:b="text",...h}=t,m=ao("Combobox.Input"),y=Gi("Combobox.Input"),E=xt(m.inputRef,n),v=Al(m.inputRef),k=p.useRef(!1),C=wn(),M=pe(()=>{y.onChange(null),m.optionsRef.current&&(m.optionsRef.current.scrollTop=0),y.goToOption(Fe.Nothing)}),I=function(){var H;return typeof g=="function"&&m.value!==void 0?(H=g(m.value))==null?"":H:typeof m.value=="string"?m.value:""}();im((H,U)=>{let[Q,X]=H,[R,ae]=U;if(k.current)return;let se=m.inputRef.current;se&&((ae===0&&X===1||Q!==R)&&(se.value=Q),requestAnimationFrame(()=>{if(!k.current&&se&&(v==null?void 0:v.activeElement)===se){let{selectionStart:T,selectionEnd:ie}=se;c((ie??0)-(T??0))===0&&T===0&&se.setSelectionRange(se.value.length,se.value.length)}}))},[I,m.comboboxState,v]),im((H,U)=>{let[Q]=H,[X]=U;if(Q===0&&X===1){if(k.current)return;let R=m.inputRef.current;if(!R)return;let ae=R.value,{selectionStart:se,selectionEnd:T,selectionDirection:ie}=R;R.value="",R.value=ae,ie===null?R.setSelectionRange(se,T):R.setSelectionRange(se,T,ie)}},[m.comboboxState]);let D=p.useRef(!1),z=pe(()=>{D.current=!0}),A=pe(()=>{C.nextFrame(()=>{D.current=!1})}),J=pe(H=>{switch(k.current=!0,H.key){case Te.Enter:if(k.current=!1,m.comboboxState!==0||D.current)return;if(H.preventDefault(),H.stopPropagation(),m.activeOptionIndex===null)return void y.closeCombobox();y.selectActiveOption(),m.mode===0&&y.closeCombobox();break;case Te.ArrowDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),rt(m.comboboxState,{0:()=>y.goToOption(Fe.Next),1:()=>y.openCombobox()});case Te.ArrowUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),rt(m.comboboxState,{0:()=>y.goToOption(Fe.Previous),1:()=>{y.openCombobox(),C.nextFrame(()=>{m.value||y.goToOption(Fe.Last)})}});case Te.Home:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.First);case Te.PageUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.First);case Te.End:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.Last);case Te.PageDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.Last);case Te.Escape:return k.current=!1,m.comboboxState===0?(H.preventDefault(),m.optionsRef.current&&!m.optionsPropsRef.current.static&&H.stopPropagation(),m.nullable&&m.mode===0&&m.value===null&&M(),y.closeCombobox()):void 0;case Te.Tab:if(k.current=!1,m.comboboxState!==0)return;m.mode===0&&m.activationTrigger!==1&&y.selectActiveOption(),y.closeCombobox()}}),V=pe(H=>{f==null||f(H),m.nullable&&m.mode===0&&H.target.value===""&&M(),y.openCombobox()}),F=pe(H=>{var U,Q,X;let R=(U=H.relatedTarget)==null?zr.find(ae=>ae!==H.currentTarget):U;if(k.current=!1,!((Q=m.optionsRef.current)!=null&&Q.contains(R))&&!((X=m.buttonRef.current)!=null&&X.contains(R))&&m.comboboxState===0)return H.preventDefault(),m.mode===0&&(m.nullable&&m.value===null?M():m.activationTrigger!==1&&y.selectActiveOption()),y.closeCombobox()}),L=pe(H=>{var U,Q,X;let R=(U=H.relatedTarget)==null?zr.find(ae=>ae!==H.currentTarget):U;(Q=m.buttonRef.current)!=null&&Q.contains(R)||(X=m.optionsRef.current)!=null&&X.contains(R)||m.disabled||m.immediate&&m.comboboxState!==0&&(y.openCombobox(),C.nextFrame(()=>{y.setActivationTrigger(1)}))}),_=Ki(()=>{if(m.labelId)return[m.labelId].join(" ")},[m.labelId]),N=p.useMemo(()=>({open:m.comboboxState===0,disabled:m.disabled}),[m]),B={ref:E,id:d,role:"combobox",type:b,"aria-controls":(r=m.optionsRef.current)==null?void 0:r.id,"aria-expanded":m.comboboxState===0,"aria-activedescendant":m.activeOptionIndex===null?void 0:m.virtual?(o=m.options.find(H=>{var U;return!((U=m.virtual)!=null&&U.disabled(H.dataRef.current.value))&&m.compare(H.dataRef.current.value,m.virtual.options[m.activeOptionIndex])}))==null?void 0:o.id:(i=m.options[m.activeOptionIndex])==null?void 0:i.id,"aria-labelledby":_,"aria-autocomplete":"list",defaultValue:(l=(a=t.defaultValue)==null?m.defaultValue===void 0?null:g==null?void 0:g(m.defaultValue):a)==null?m.defaultValue:l,disabled:m.disabled,onCompositionStart:z,onCompositionEnd:A,onKeyDown:J,onChange:V,onFocus:L,onBlur:F};return ht({ourProps:B,theirProps:h,slot:N,defaultTag:H3,name:"Combobox.Input"})}let V3="button";function W3(t,n){var r;let o=ao("Combobox.Button"),i=Gi("Combobox.Button"),a=xt(o.buttonRef,n),l=cn(),{id:c=`headlessui-combobox-button-${l}`,...u}=t,d=wn(),f=pe(y=>{switch(y.key){case Te.ArrowDown:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&i.openCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Te.ArrowUp:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&(i.openCombobox(),d.nextFrame(()=>{o.value||i.goToOption(Fe.Last)})),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Te.Escape:return o.comboboxState===0?(y.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&y.stopPropagation(),i.closeCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})})):void 0}}),g=pe(y=>Lf(y.currentTarget)?y.preventDefault():(o.comboboxState===0?i.closeCombobox():(y.preventDefault(),i.openCombobox()),void d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})}))),b=Ki(()=>{if(o.labelId)return[o.labelId,c].join(" ")},[o.labelId,c]),h=p.useMemo(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),m={ref:a,id:c,type:Rf(t,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(r=o.optionsRef.current)==null?void 0:r.id,"aria-expanded":o.comboboxState===0,"aria-labelledby":b,disabled:o.disabled,onClick:g,onKeyDown:f};return ht({ourProps:m,theirProps:u,slot:h,defaultTag:V3,name:"Combobox.Button"})}let U3="label";function q3(t,n){let r=cn(),{id:o=`headlessui-combobox-label-${r}`,...i}=t,a=ao("Combobox.Label"),l=Gi("Combobox.Label"),c=xt(a.labelRef,n);Ge(()=>l.registerLabel(o),[o]);let u=pe(()=>{var f;return(f=a.inputRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]);return ht({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:U3,name:"Combobox.Label"})}let Y3="ul",K3=Er.RenderStrategy|Er.Static;function G3(t,n){let r=cn(),{id:o=`headlessui-combobox-options-${r}`,hold:i=!1,...a}=t,l=ao("Combobox.Options"),c=xt(l.optionsRef,n),u=qi(),d=u===null?l.comboboxState===0:(u&ut.Open)===ut.Open;Ge(()=>{var h;l.optionsPropsRef.current.static=(h=t.static)!=null&&h},[l.optionsPropsRef,t.static]),Ge(()=>{l.optionsPropsRef.current.hold=i},[l.optionsPropsRef,i]),V1({container:l.optionsRef.current,enabled:l.comboboxState===0,accept(h){return h.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});let f=Ki(()=>{var h,m;return(m=l.labelId)==null?(h=l.buttonRef.current)==null?void 0:h.id:m},[l.labelId,l.buttonRef.current]),g=p.useMemo(()=>({open:l.comboboxState===0,option:void 0}),[l]),b={"aria-labelledby":f,role:"listbox","aria-multiselectable":l.mode===1||void 0,id:o,ref:c};return l.virtual&&l.comboboxState===0&&Object.assign(a,{children:S.createElement(A3,null,a.children)}),ht({ourProps:b,theirProps:a,slot:g,defaultTag:Y3,features:K3,visible:d,name:"Combobox.Options"})}let Q3="li";function Z3(t,n){var r;let o=cn(),{id:i=`headlessui-combobox-option-${o}`,disabled:a=!1,value:l,order:c=null,...u}=t,d=ao("Combobox.Option"),f=Gi("Combobox.Option"),g=d.virtual?d.activeOptionIndex===d.calculateIndex(l):d.activeOptionIndex!==null&&((r=d.options[d.activeOptionIndex])==null?void 0:r.id)===i,b=d.isSelected(l),h=p.useRef(null),m=bn({disabled:a,value:l,domRef:h,order:c}),y=p.useContext(U1),E=xt(n,h,y?y.measureElement:null),v=pe(()=>f.onChange(l));Ge(()=>f.registerOption(i,m),[m,i]);let k=p.useRef(!(d.virtual||d.__demoMode));Ge(()=>{if(d.virtual&&d.__demoMode){let V=Bt();return V.requestAnimationFrame(()=>{k.current=!0}),V.dispose}},[d.virtual,d.__demoMode]),Ge(()=>{if(k.current&&d.comboboxState===0&&g&&d.activationTrigger!==0){let V=Bt();return V.requestAnimationFrame(()=>{var F,L;(L=(F=h.current)==null?void 0:F.scrollIntoView)==null||L.call(F,{block:"nearest"})}),V.dispose}},[h,g,d.comboboxState,d.activationTrigger,d.activeOptionIndex]);let C=pe(V=>{var F;return a||(F=d.virtual)!=null&&F.disabled(l)?V.preventDefault():(v(),n1()||requestAnimationFrame(()=>{var L;return(L=d.inputRef.current)==null?void 0:L.focus({preventScroll:!0})}),void(d.mode===0&&requestAnimationFrame(()=>f.closeCombobox())))}),M=pe(()=>{var V;if(a||(V=d.virtual)!=null&&V.disabled(l))return f.goToOption(Fe.Nothing);let F=d.calculateIndex(l);f.goToOption(Fe.Specific,F)}),I=Nf(),D=pe(V=>I.update(V)),z=pe(V=>{var F;if(!(!I.wasMoved(V)||a||(F=d.virtual)!=null&&F.disabled(l)||g)){let L=d.calculateIndex(l);f.goToOption(Fe.Specific,L,0)}}),A=pe(V=>{var F;I.wasMoved(V)&&(a||(F=d.virtual)!=null&&F.disabled(l)||g&&(d.optionsPropsRef.current.hold||f.goToOption(Fe.Nothing)))}),J=p.useMemo(()=>({active:g,selected:b,disabled:a}),[g,b,a]);return ht({ourProps:{id:i,ref:E,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0||void 0,"aria-selected":b,disabled:void 0,onClick:C,onFocus:M,onPointerEnter:D,onMouseEnter:D,onPointerMove:z,onMouseMove:z,onPointerLeave:A,onMouseLeave:A},theirProps:u,slot:J,defaultTag:Q3,name:"Combobox.Option"})}let J3=ft(z3),X3=ft(W3),eP=ft(B3),tP=ft(q3),nP=ft(G3),rP=ft(Z3);Object.assign(J3,{Input:eP,Button:X3,Label:tP,Options:nP,Option:rP});p.createContext();x.string,x.node,x.string,x.string,x.bool,x.bool,x.node,x.node,x.string,x.bool,x.string,x.bool,x.string,x.bool,x.func,x.func,x.func,x.func,x.string,x.bool,x.node,x.bool,x.bool,x.string,x.string,x.oneOf(["full","auto"]),x.string;x.string,x.bool,x.string,x.string,x.string;x.string,x.node;var oP=`
  jn-font-bold
  jn-text-lg
  jn-text-theme-high
  jn-pb-2
`,iP=function(t){var n=t.heading,r=n===void 0?"":n,o=t.className,i=o===void 0?"":o,a=t.children,l=a===void 0?null:a,c=at(t,["heading","className","children"]);return S.createElement("h1",de({className:"juno-content-heading ".concat(oP," ").concat(i)},c),l||r)};x.string,x.node;x.string,x.node;var aP=function(t,n){return`
    `.concat(t?"jn-px-6 ":" ",` 
    `).concat(n?" jn-py-6":"",`
  `)},lP=function(t){var n=t.px,r=t.py,o=t.className,i=o===void 0?"":o,a=t.children,l=a===void 0?null:a,c=at(t,["px","py","className","children"]);return S.createElement("div",de({className:"juno-container ".concat(aP(n===void 0||n,r!==void 0&&r)," ").concat(i)},c),l)};let am=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function lm(t){var n,r;let o=(n=t.innerText)==null?"":n,i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return o;let a=!1;for(let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),a=!0;let l=a?(r=i.innerText)==null?"":r:o;return am.test(l)&&(l=l.replace(am,"")),l}function sP(t){let n=t.getAttribute("aria-label");if(typeof n=="string")return n.trim();let r=t.getAttribute("aria-labelledby");if(r){let o=r.split(" ").map(i=>{let a=document.getElementById(i);if(a){let l=a.getAttribute("aria-label");return typeof l=="string"?l.trim():lm(a).trim()}return null}).filter(Boolean);if(0<o.length)return o.join(", ")}return lm(t).trim()}function q1(t){let n=p.useRef(""),r=p.useRef("");return pe(()=>{let o=t.current;if(!o)return"";let i=o.innerText;if(n.current===i)return r.current;let a=sP(o).trim().toLowerCase();return n.current=i,r.current=a,a})}var cP=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(cP||{}),uP=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(uP||{}),dP=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t))(dP||{});function Fs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeItemIndex===null?null:t.items[t.activeItemIndex],o=Ll(n(t.items.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{items:o,activeItemIndex:i}}let fP={1(t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},0(t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},2:(t,n)=>{var r;let o=Fs(t),i=Qa(n,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeItemIndex===null?t.items:t.items.slice(t.activeItemIndex+r).concat(t.items.slice(0,t.activeItemIndex+r))).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!l.dataRef.current.disabled}),a=i?t.items.indexOf(i):-1;return a===-1||a===t.activeItemIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeItemIndex:a,activationTrigger:1}},4(t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},5:(t,n)=>{let r=Fs(t,o=>[...o,{id:n.id,dataRef:n.dataRef}]);return{...t,...r}},6:(t,n)=>{let r=Fs(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}}},Zf=p.createContext(null);Zf.displayName="MenuContext";function Ul(t){let n=p.useContext(Zf);if(n===null){let r=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ul),r}return n}function pP(t,n){return rt(n.type,fP,t,n)}let gP=p.Fragment;function hP(t,n){let{__demoMode:r=!1,...o}=t,i=p.useReducer(pP,{__demoMode:r,menuState:r?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:l,buttonRef:c},u]=i,d=xt(n);Mf([c,l],(b,h)=>{var m;u({type:1}),Fl(h,Nl.Loose)||(b.preventDefault(),(m=c.current)==null||m.focus())},a===0);let f=pe(()=>{u({type:1})}),g=p.useMemo(()=>({open:a===0,close:f}),[a,f]);return S.createElement(Zf.Provider,{value:i},S.createElement(_l,{value:rt(a,{0:ut.Open,1:ut.Closed})},ht({ourProps:{ref:d},theirProps:o,slot:g,defaultTag:gP,name:"Menu"})))}let mP="button";function bP(t,n){var r;let o=cn(),{id:i=`headlessui-menu-button-${o}`,...a}=t,[l,c]=Ul("Menu.Button"),u=xt(l.buttonRef,n),d=wn(),f=pe(y=>{switch(y.key){case Te.Space:case Te.Enter:case Te.ArrowDown:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Fe.First}));break;case Te.ArrowUp:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Fe.Last}))}}),g=pe(y=>{switch(y.key){case Te.Space:y.preventDefault()}}),b=pe(y=>Lf(y.currentTarget)?y.preventDefault():void(t.disabled||(l.menuState===0?(c({type:1}),d.nextFrame(()=>{var E;return(E=l.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})})):(y.preventDefault(),c({type:0}))))),h=p.useMemo(()=>({open:l.menuState===0}),[l]),m={ref:u,id:i,type:Rf(t,l.buttonRef),"aria-haspopup":"menu","aria-controls":(r=l.itemsRef.current)==null?void 0:r.id,"aria-expanded":l.menuState===0,onKeyDown:f,onKeyUp:g,onClick:b};return ht({ourProps:m,theirProps:a,slot:h,defaultTag:mP,name:"Menu.Button"})}let vP="div",yP=Er.RenderStrategy|Er.Static;function wP(t,n){var r,o;let i=cn(),{id:a=`headlessui-menu-items-${i}`,...l}=t,[c,u]=Ul("Menu.Items"),d=xt(c.itemsRef,n),f=Al(c.itemsRef),g=wn(),b=qi(),h=b===null?c.menuState===0:(b&ut.Open)===ut.Open;p.useEffect(()=>{let k=c.itemsRef.current;k&&c.menuState===0&&k!==(f==null?void 0:f.activeElement)&&k.focus({preventScroll:!0})},[c.menuState,c.itemsRef,f]),V1({container:c.itemsRef.current,enabled:c.menuState===0,accept(k){return k.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:k.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(k){k.setAttribute("role","none")}});let m=pe(k=>{var C,M;switch(g.dispose(),k.key){case Te.Space:if(c.searchQuery!=="")return k.preventDefault(),k.stopPropagation(),u({type:3,value:k.key});case Te.Enter:if(k.preventDefault(),k.stopPropagation(),u({type:1}),c.activeItemIndex!==null){let{dataRef:I}=c.items[c.activeItemIndex];(M=(C=I.current)==null?void 0:C.domRef.current)==null||M.click()}t1(c.buttonRef.current);break;case Te.ArrowDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.Next});case Te.ArrowUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.Previous});case Te.Home:case Te.PageUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.First});case Te.End:case Te.PageDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.Last});case Te.Escape:k.preventDefault(),k.stopPropagation(),u({type:1}),Bt().nextFrame(()=>{var I;return(I=c.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})});break;case Te.Tab:k.preventDefault(),k.stopPropagation(),u({type:1}),Bt().nextFrame(()=>{cS(c.buttonRef.current,k.shiftKey?Cu.Previous:Cu.Next)});break;default:k.key.length===1&&(u({type:3,value:k.key}),g.setTimeout(()=>u({type:4}),350))}}),y=pe(k=>{switch(k.key){case Te.Space:k.preventDefault()}}),E=p.useMemo(()=>({open:c.menuState===0}),[c]),v={"aria-activedescendant":c.activeItemIndex===null||(r=c.items[c.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(o=c.buttonRef.current)==null?void 0:o.id,id:a,onKeyDown:m,onKeyUp:y,role:"menu",tabIndex:0,ref:d};return ht({ourProps:v,theirProps:l,slot:E,defaultTag:vP,features:yP,visible:h,name:"Menu.Items"})}let xP=p.Fragment;function jP(t,n){let r=cn(),{id:o=`headlessui-menu-item-${r}`,disabled:i=!1,...a}=t,[l,c]=Ul("Menu.Item"),u=l.activeItemIndex!==null&&l.items[l.activeItemIndex].id===o,d=p.useRef(null),f=xt(n,d);Ge(()=>{if(!l.__demoMode&&l.menuState===0&&u&&l.activationTrigger!==0){let I=Bt();return I.requestAnimationFrame(()=>{var D,z;(z=(D=d.current)==null?void 0:D.scrollIntoView)==null||z.call(D,{block:"nearest"})}),I.dispose}},[l.__demoMode,d,u,l.menuState,l.activationTrigger,l.activeItemIndex]);let g=q1(d),b=p.useRef({disabled:i,domRef:d,get textValue(){return g()}});Ge(()=>{b.current.disabled=i},[b,i]),Ge(()=>(c({type:5,id:o,dataRef:b}),()=>c({type:6,id:o})),[b,o]);let h=pe(()=>{c({type:1})}),m=pe(I=>i?I.preventDefault():(c({type:1}),void t1(l.buttonRef.current))),y=pe(()=>i?c({type:2,focus:Fe.Nothing}):void c({type:2,focus:Fe.Specific,id:o})),E=Nf(),v=pe(I=>E.update(I)),k=pe(I=>{E.wasMoved(I)&&(i||u||c({type:2,focus:Fe.Specific,id:o,trigger:0}))}),C=pe(I=>{E.wasMoved(I)&&(i||u&&c({type:2,focus:Fe.Nothing}))}),M=p.useMemo(()=>({active:u,disabled:i,close:h}),[u,i,h]);return ht({ourProps:{id:o,ref:f,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,disabled:void 0,onClick:m,onFocus:y,onPointerEnter:v,onMouseEnter:v,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:M,defaultTag:xP,name:"Menu.Item"})}let EP=ft(hP),kP=ft(bP),OP=ft(wP),SP=ft(jP);Object.assign(EP,{Button:kP,Items:OP,Item:SP});x.string,x.node,x.any,x.bool;S.createContext();x.bool,x.string,x.node;x.number,x.number,x.bool,x.string,x.node;p.createContext();x.bool,x.string,x.bool,x.node,x.node,x.string,x.bool,x.bool,x.string,x.string,x.func,x.func,x.bool,x.node,x.bool,x.string;x.bool,x.bool,x.string,x.func;x.string,x.node,x.bool,x.bool,x.func;var CP=`
	jn-grid
	jn-items-stretch
`,PP=function(t,n,r,o,i){var a;if(i&&0<i.length)return a={gridTemplateColumns:i},a;var l="";if(o&&Array.isArray(o)&&0<o.length){var c=Hj([],Array(t));c.map(function(u,d){l+=o.includes(d)?"min-content ":"minmax(".concat(r,", ").concat(n,") ")})}else l="repeat(".concat(t,", minmax(").concat(r,", ").concat(n,"))");return a={gridTemplateColumns:l},a},Y1=S.createContext({}),IP=function(){return S.useContext(Y1)},K1=function(t){var n=t.columns,r=n===void 0?1:n,o=t.columnMaxSize,i=o===void 0?"auto":o,a=t.columnMinSize,l=a===void 0?"0px":a,c=t.minContentColumns,u=t.gridColumnTemplate,d=t.cellVerticalAlignment,f=d===void 0?"center":d,g=t.className,b=g===void 0?"":g,h=t.children,m=h===void 0?null:h,y=at(t,["columns","columnMaxSize","columnMinSize","minContentColumns","gridColumnTemplate","cellVerticalAlignment","className","children"]);return S.createElement(Y1.Provider,{value:{cellVerticalAlignment:f}},S.createElement("div",de({className:"juno-datagrid ".concat(CP," ").concat(b),style:PP(r,i,l,c,u),role:"grid"},y),m))},DP=function(t,n){return`
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
	`)},TP=function(t){var n;return t&&(n={gridColumn:"span ".concat(t," / span ").concat(t)}),n},Zt=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=at(t,["colSpan","nowrap","className","children"]),d=IP()||{},f=d.cellVerticalAlignment;return S.createElement("div",de({className:"juno-datagrid-cell ".concat(DP(o!==void 0&&o,f)," ").concat(a),style:TP(r),role:"gridcell",ref:n},u),c)});Zt.displayName="DataGridCell";var MP=`
	jn-font-bold
	jn-text-theme-high
	jn-bg-theme-background-lvl-1
	jn-border-theme-background-lvl-0
`,mo=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=at(t,["colSpan","nowrap","className","children"]);return S.createElement(Zt,de({colSpan:r,nowrap:o!==void 0&&o,className:"juno-datagrid-head-cell ".concat(MP," ").concat(a),role:"columnheader",ref:n},u),c)});mo.displayName="DataGridHeadCell";var RP=`
	jn-contents
`,Ur=p.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=at(t,["className","children"]);return S.createElement("div",de({className:"juno-datagrid-row ".concat(RP," ").concat(o),role:"row",ref:n},l),a)});Ur.displayName="DataGridRow";var Ls=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],jo={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var r=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-r.getTime())/864e5-3+(r.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},Di={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(3<n&&21>n)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},$t=function(t,n){return n===void 0&&(n=2),("000"+t).slice(-1*n)},nn=function(t){return t===!0?1:0};function sm(t,n){var r;return function(){var o=this,i=arguments;clearTimeout(r),r=setTimeout(function(){return t.apply(o,i)},n)}}var As=function(t){return t instanceof Array?t:[t]};function Tt(t,n,r){return r===!0?t.classList.add(n):void t.classList.remove(n)}function Be(t,n,r){var o=window.document.createElement(t);return n=n||"",r=r||"",o.className=n,r!==void 0&&(o.textContent=r),o}function ha(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function G1(t,n){return n(t)?t:t.parentNode?G1(t.parentNode,n):void 0}function ma(t,n){var r=Be("div","numInputWrapper"),o=Be("input","numInput "+t),i=Be("span","arrowUp"),a=Be("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),n!==void 0)for(var l in n)o.setAttribute(l,n[l]);return r.appendChild(o),r.appendChild(i),r.appendChild(a),r}function Ut(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var _s=function(){},rl=function(t,n,r){return r.months[n?"shorthand":"longhand"][t]},NP={D:_s,F:function(t,n,r){t.setMonth(r.months.longhand.indexOf(n))},G:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,r){t.setHours(t.getHours()%12+12*nn(new RegExp(r.amPM[1],"i").test(n)))},M:function(t,n,r){t.setMonth(r.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(1e3*parseFloat(n))},W:function(t,n,r){var o=parseInt(n),i=new Date(t.getFullYear(),0,2+7*(o-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+r.firstDayOfWeek),i},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:_s,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:_s,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},Hr={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ji={Z:function(t){return t.toISOString()},D:function(t,n,r){return n.weekdays.shorthand[ji.w(t,n,r)]},F:function(t,n,r){return rl(ji.n(t,n,r)-1,!1,n)},G:function(t,n,r){return $t(ji.h(t,n,r))},H:function(t){return $t(t.getHours())},J:function(t,n){return n.ordinal===void 0?t.getDate():t.getDate()+n.ordinal(t.getDate())},K:function(t,n){return n.amPM[nn(11<t.getHours())]},M:function(t,n){return rl(t.getMonth(),!0,n)},S:function(t){return $t(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,r){return r.getWeek(t)},Y:function(t){return $t(t.getFullYear(),4)},d:function(t){return $t(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return $t(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return $t(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return(t.getFullYear()+"").substring(2)}},Q1=function(t){var n=t.config,r=n===void 0?jo:n,o=t.l10n,i=o===void 0?Di:o,a=t.isMobile;return function(l,c,u){var d=u||i;return r.formatDate===void 0||a!==void 0&&a?c.split("").map(function(f,g,b){return ji[f]&&b[g-1]!=="\\"?ji[f](l,d,r):f==="\\"?"":f}).join(""):r.formatDate(l,c,d)}},Nu=function(t){var n=t.config,r=n===void 0?jo:n,o=t.l10n,i=o===void 0?Di:o;return function(a,l,c,u){if(a===0||a){var d;if(a instanceof Date)d=new Date(a.getTime());else if(typeof a!="string"&&a.toFixed!==void 0)d=new Date(a);else if(typeof a=="string"){var f=l||(r||jo).dateFormat,g=(a+"").trim();if(g==="today")d=new Date,c=!0;else if(r&&r.parseDate)d=r.parseDate(a,f);else if(/Z$/.test(g)||/GMT$/.test(g))d=new Date(a);else{for(var b=void 0,h=[],m=0,y=0,E="";m<f.length;m++){var v=f[m],k=v==="\\",C=f[m-1]==="\\"||k;if(Hr[v]&&!C){E+=Hr[v];var M=new RegExp(E).exec(a);M&&(b=!0)&&h[v==="Y"?"unshift":"push"]({fn:NP[v],val:M[++y]})}else k||(E+=".")}d=r&&r.noCalendar?new Date(new Date().setHours(0,0,0,0)):new Date(new Date().getFullYear(),0,1,0,0,0,0),h.forEach(function(I){var D=I.fn,z=I.val;return d=D(d,z,u||i)||d}),d=b?d:void 0}}return!(d instanceof Date)||isNaN(d.getTime())?void r.errorHandler(new Error("Invalid date provided: "+a)):(c===!0&&d.setHours(0,0,0,0),d)}}};function Yt(t,n,r){return r===void 0&&(r=!0),r===!1?t.getTime()-n.getTime():new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0)}var FP=function(t,n,r){return t>Math.min(n,r)&&t<Math.max(n,r)},$s=function(t,n,r){return 3600*t+60*n+r},LP=function(t){var n=Math.floor(t/3600),r=(t-3600*n)/60;return[n,r,t-3600*n-60*r]},AP={DAY:864e5};function zs(t){var n=Math.min,r=t.defaultHour,o=t.defaultMinute,i=t.defaultSeconds;if(t.minDate!==void 0){var a=t.minDate.getHours(),l=t.minDate.getMinutes(),c=t.minDate.getSeconds();r<a&&(r=a),r===a&&o<l&&(o=l),r===a&&o===l&&i<c&&(i=t.minDate.getSeconds())}if(t.maxDate!==void 0){var u=t.maxDate.getHours(),d=t.maxDate.getMinutes();r=n(r,u),r===u&&(o=n(d,o)),r===u&&o===d&&(i=t.maxDate.getSeconds())}return{hours:r,minutes:o,seconds:i}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var o,i=function(c){c&&Object.keys(c).forEach(function(u){return t[u]=c[u]})},a=0,l=n;a<l.length;a++)o=l[a],i(o);return t});var Ot=function(){return Ot=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},Ot.apply(this,arguments)},cm=function(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length;for(var o=Array(t),i=0,n=0;n<r;n++)for(var a=arguments[n],l=0,c=a.length;l<c;l++,i++)o[i]=a[l];return o},_P=300;function $P(t,n){var r=Math.abs,o=Math.max,i=Math.min;function a(){s.utils={getDaysInMonth:function(w,O){return w===void 0&&(w=s.currentMonth),O===void 0&&(O=s.currentYear),w===1&&(O%4==0&&O%100!=0||O%400==0)?29:s.l10n.daysInMonth[w]}}}function l(){s.element=s.input=t,s.isOpen=!1,ii(),lr(),gn(),It(),a(),s.isMobile||z(),C(),(s.selectedDates.length||s.config.noCalendar)&&(s.config.enableTime&&m(s.config.noCalendar?s.latestSelectedDateObj:void 0),bt(!1)),d();var w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!s.isMobile&&w&&pn(),je("onReady")}function c(){var w;return((w=s.calendarContainer)===null||w===void 0?void 0:w.getRootNode()).activeElement||document.activeElement}function u(w){return w.bind(s)}function d(){var w=s.config;w.weekNumbers===!1&&w.showMonths===1||w.noCalendar!==!0&&window.requestAnimationFrame(function(){if(s.calendarContainer!==void 0&&(s.calendarContainer.style.visibility="hidden",s.calendarContainer.style.display="block"),s.daysContainer!==void 0){var O=(s.days.offsetWidth+1)*w.showMonths;s.daysContainer.style.width=O+"px",s.calendarContainer.style.width=O+(s.weekWrapper===void 0?0:s.weekWrapper.offsetWidth)+"px",s.calendarContainer.style.removeProperty("visibility"),s.calendarContainer.style.removeProperty("display")}})}function f(w){if(s.selectedDates.length===0){var O=s.config.minDate===void 0||0<=Yt(new Date,s.config.minDate)?new Date:new Date(s.config.minDate.getTime()),P=zs(s.config);O.setHours(P.hours,P.minutes,P.seconds,O.getMilliseconds()),s.selectedDates=[O],s.latestSelectedDateObj=O}w!==void 0&&w.type!=="blur"&&gs(w);var $=s._input.value;h(),bt(),s._input.value!==$&&s._debouncedChange()}function g(w,O){return w%12+12*nn(O===s.l10n.amPM[1])}function b(w){switch(w%24){case 0:case 12:return 12;default:return w%12}}function h(){if(s.hourElement!==void 0&&s.minuteElement!==void 0){var w=(parseInt(s.hourElement.value.slice(-2),10)||0)%24,O=(parseInt(s.minuteElement.value,10)||0)%60,P=s.secondElement===void 0?0:(parseInt(s.secondElement.value,10)||0)%60;s.amPM!==void 0&&(w=g(w,s.amPM.textContent));var $=s.config.minTime!==void 0||s.config.minDate&&s.minDateHasTime&&s.latestSelectedDateObj&&Yt(s.latestSelectedDateObj,s.config.minDate,!0)===0,q=s.config.maxTime!==void 0||s.config.maxDate&&s.maxDateHasTime&&s.latestSelectedDateObj&&Yt(s.latestSelectedDateObj,s.config.maxDate,!0)===0;if(s.config.maxTime!==void 0&&s.config.minTime!==void 0&&s.config.minTime>s.config.maxTime){var Z=$s(s.config.minTime.getHours(),s.config.minTime.getMinutes(),s.config.minTime.getSeconds()),ce=$s(s.config.maxTime.getHours(),s.config.maxTime.getMinutes(),s.config.maxTime.getSeconds()),te=$s(w,O,P);if(te>ce&&te<Z){var fe=LP(Z);w=fe[0],O=fe[1],P=fe[2]}}else{if(q){var ne=s.config.maxTime===void 0?s.config.maxDate:s.config.maxTime;w=i(w,ne.getHours()),w===ne.getHours()&&(O=i(O,ne.getMinutes())),O===ne.getMinutes()&&(P=i(P,ne.getSeconds()))}if($){var re=s.config.minTime===void 0?s.config.minDate:s.config.minTime;w=o(w,re.getHours()),w===re.getHours()&&O<re.getMinutes()&&(O=re.getMinutes()),O===re.getMinutes()&&(P=o(P,re.getSeconds()))}}y(w,O,P)}}function m(w){var O=w||s.latestSelectedDateObj;O&&O instanceof Date&&y(O.getHours(),O.getMinutes(),O.getSeconds())}function y(w,O,P){s.latestSelectedDateObj!==void 0&&s.latestSelectedDateObj.setHours(w%24,O,P||0,0),s.hourElement&&s.minuteElement&&!s.isMobile&&(s.hourElement.value=$t(s.config.time_24hr?w:(12+w)%12+12*nn(w%12==0)),s.minuteElement.value=$t(O),s.amPM!==void 0&&(s.amPM.textContent=s.l10n.amPM[nn(12<=w)]),s.secondElement!==void 0&&(s.secondElement.value=$t(P)))}function E(w){var O=Ut(w),P=parseInt(O.value)+(w.delta||0);(1<P/1e3||w.key==="Enter"&&!/[^\d]/.test(P.toString()))&&me(P)}function v(w,O,P,$){return O instanceof Array?O.forEach(function(q){return v(w,q,P,$)}):w instanceof Array?w.forEach(function(q){return v(q,O,P,$)}):(w.addEventListener(O,P,$),void s._handlers.push({remove:function(){return w.removeEventListener(O,P,$)}}))}function k(){je("onChange")}function C(){if(s.config.wrap&&["open","close","toggle","clear"].forEach(function(P){Array.prototype.forEach.call(s.element.querySelectorAll("[data-"+P+"]"),function($){return v($,"click",s[P])})}),s.isMobile)return void qn();var w=sm(Wn,50);if(s._debouncedChange=sm(k,_P),s.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&v(s.daysContainer,"mouseover",function(P){s.config.mode==="range"&&Pt(Ut(P))}),v(s._input,"keydown",Ze),s.calendarContainer!==void 0&&v(s.calendarContainer,"keydown",Ze),s.config.inline||s.config.static||v(window,"resize",w),window.ontouchstart===void 0?v(window.document,"mousedown",oe):v(window.document,"touchstart",oe),v(window.document,"focus",oe,{capture:!0}),s.config.clickOpens===!0&&(v(s._input,"focus",s.open),v(s._input,"click",s.open)),s.daysContainer!==void 0&&(v(s.monthNav,"click",ps),v(s.monthNav,["keyup","increment"],E),v(s.daysContainer,"click",ee)),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0){var O=function(P){return Ut(P).select()};v(s.timeContainer,["increment"],f),v(s.timeContainer,"blur",f,{capture:!0}),v(s.timeContainer,"click",I),v([s.hourElement,s.minuteElement],["focus","click"],O),s.secondElement!==void 0&&v(s.secondElement,"focus",function(){return s.secondElement&&s.secondElement.select()}),s.amPM!==void 0&&v(s.amPM,"click",function(P){f(P)})}s.config.allowInput&&v(s._input,"blur",it)}function M(w,O){var P=w===void 0?s.latestSelectedDateObj||(s.config.minDate&&s.config.minDate>s.now?s.config.minDate:s.config.maxDate&&s.config.maxDate<s.now?s.config.maxDate:s.now):s.parseDate(w),$=s.currentYear,q=s.currentMonth;try{P!==void 0&&(s.currentYear=P.getFullYear(),s.currentMonth=P.getMonth())}catch(Z){Z.message="Invalid date supplied: "+P,s.config.errorHandler(Z)}O&&s.currentYear!==$&&(je("onYearChange"),B()),O&&(s.currentYear!==$||s.currentMonth!==q)&&je("onMonthChange"),s.redraw()}function I(w){var O=Ut(w);~O.className.indexOf("arrow")&&D(w,O.classList.contains("arrowUp")?1:-1)}function D(w,O,P){var $=w&&Ut(w),q=P||$&&$.parentNode&&$.parentNode.firstChild,Z=Lt("increment");Z.delta=O,q&&q.dispatchEvent(Z)}function z(){var w=window.document.createDocumentFragment();if(s.calendarContainer=Be("div","flatpickr-calendar"),s.calendarContainer.tabIndex=-1,!s.config.noCalendar){if(w.appendChild(Q()),s.innerContainer=Be("div","flatpickr-innerContainer"),s.config.weekNumbers){var O=se(),P=O.weekWrapper,$=O.weekNumbers;s.innerContainer.appendChild(P),s.weekNumbers=$,s.weekWrapper=P}s.rContainer=Be("div","flatpickr-rContainer"),s.rContainer.appendChild(R()),s.daysContainer||(s.daysContainer=Be("div","flatpickr-days"),s.daysContainer.tabIndex=-1),N(),s.rContainer.appendChild(s.daysContainer),s.innerContainer.appendChild(s.rContainer),w.appendChild(s.innerContainer)}s.config.enableTime&&w.appendChild(X()),Tt(s.calendarContainer,"rangeMode",s.config.mode==="range"),Tt(s.calendarContainer,"animate",s.config.animate===!0),Tt(s.calendarContainer,"multiMonth",1<s.config.showMonths),s.calendarContainer.appendChild(w);var q=s.config.appendTo!==void 0&&s.config.appendTo.nodeType!==void 0;if((s.config.inline||s.config.static)&&(s.calendarContainer.classList.add(s.config.inline?"inline":"static"),s.config.inline&&(!q&&s.element.parentNode?s.element.parentNode.insertBefore(s.calendarContainer,s._input.nextSibling):s.config.appendTo!==void 0&&s.config.appendTo.appendChild(s.calendarContainer)),s.config.static)){var Z=Be("div","flatpickr-wrapper");s.element.parentNode&&s.element.parentNode.insertBefore(Z,s.element),Z.appendChild(s.element),s.altInput&&Z.appendChild(s.altInput),Z.appendChild(s.calendarContainer)}s.config.static||s.config.inline||(s.config.appendTo===void 0?window.document.body:s.config.appendTo).appendChild(s.calendarContainer)}function A(w,O,P,$){var q=be(O,!0),Z=Be("span",w,O.getDate().toString());return Z.dateObj=O,Z.$i=$,Z.setAttribute("aria-label",s.formatDate(O,s.config.ariaDateFormat)),w.indexOf("hidden")===-1&&Yt(O,s.now)===0&&(s.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),q?(Z.tabIndex=-1,Et(O)&&(Z.classList.add("selected"),s.selectedDateElem=Z,s.config.mode==="range"&&(Tt(Z,"startRange",s.selectedDates[0]&&Yt(O,s.selectedDates[0],!0)===0),Tt(Z,"endRange",s.selectedDates[1]&&Yt(O,s.selectedDates[1],!0)===0),w==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),s.config.mode==="range"&&fs(O)&&!Et(O)&&Z.classList.add("inRange"),s.weekNumbers&&s.config.showMonths===1&&w!=="prevMonthDay"&&$%7==6&&s.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+s.config.getWeek(O)+"</span>"),je("onDayCreate",Z),Z}function J(w){w.focus(),s.config.mode==="range"&&Pt(w)}function V(w){for(var O=0<w?0:s.config.showMonths-1,P=0<w?s.config.showMonths:-1,$=O;$!=P;$+=w)for(var q,Z=s.daysContainer.children[$],ce=0<w?0:Z.children.length-1,te=0<w?Z.children.length:-1,fe=ce;fe!=te;fe+=w)if(q=Z.children[fe],q.className.indexOf("hidden")===-1&&be(q.dateObj))return q}function F(w,O){for(var P=w.className.indexOf("Month")===-1?w.dateObj.getMonth():s.currentMonth,$=0<O?s.config.showMonths:-1,q=0<O?1:-1,Z=P-s.currentMonth;Z!=$;Z+=q)for(var ce,te=s.daysContainer.children[Z],fe=P-s.currentMonth===Z?w.$i+O:0>O?te.children.length-1:0,ne=te.children.length,re=fe;0<=re&&re<ne&&re!=(0<O?ne:-1);re+=q)if(ce=te.children[re],ce.className.indexOf("hidden")===-1&&be(ce.dateObj)&&r(w.$i-re)>=r(O))return J(ce);return s.changeMonth(q),void L(V(q),0)}function L(w,O){var P=c(),$=He(P||document.body),q=w===void 0?$?P:s.selectedDateElem!==void 0&&He(s.selectedDateElem)?s.selectedDateElem:s.todayDateElem!==void 0&&He(s.todayDateElem)?s.todayDateElem:V(0<O?1:-1):w;q===void 0?s._input.focus():$?F(q,O):J(q)}function _(w,O){for(var P=(new Date(w,O,1).getDay()-s.l10n.firstDayOfWeek+7)%7,$=s.utils.getDaysInMonth((O-1+12)%12,w),q=s.utils.getDaysInMonth(O,w),Z=window.document.createDocumentFragment(),ce=1<s.config.showMonths,te=ce?"prevMonthDay hidden":"prevMonthDay",fe=ce?"nextMonthDay hidden":"nextMonthDay",ne=$+1-P,re=0;ne<=$;ne++,re++)Z.appendChild(A("flatpickr-day "+te,new Date(w,O-1,ne),ne,re));for(ne=1;ne<=q;ne++,re++)Z.appendChild(A("flatpickr-day",new Date(w,O,ne),ne,re));for(var Ee=q+1;Ee<=42-P&&(s.config.showMonths===1||re%7!=0);Ee++,re++)Z.appendChild(A("flatpickr-day "+fe,new Date(w,O+1,Ee%q),Ee,re));var ct=Be("div","dayContainer");return ct.appendChild(Z),ct}function N(){if(s.daysContainer!==void 0){ha(s.daysContainer),s.weekNumbers&&ha(s.weekNumbers);for(var w,O=document.createDocumentFragment(),P=0;P<s.config.showMonths;P++)w=new Date(s.currentYear,s.currentMonth,1),w.setMonth(s.currentMonth+P),O.appendChild(_(w.getFullYear(),w.getMonth()));s.daysContainer.appendChild(O),s.days=s.daysContainer.firstChild,s.config.mode==="range"&&s.selectedDates.length===1&&Pt()}}function B(){if(!(1<s.config.showMonths||s.config.monthSelectorType!=="dropdown")){var w=function($){return!(s.config.minDate!==void 0&&s.currentYear===s.config.minDate.getFullYear()&&$<s.config.minDate.getMonth())&&!(s.config.maxDate!==void 0&&s.currentYear===s.config.maxDate.getFullYear()&&$>s.config.maxDate.getMonth())};s.monthsDropdownContainer.tabIndex=-1,s.monthsDropdownContainer.innerHTML="";for(var O=0;12>O;O++)if(w(O)){var P=Be("option","flatpickr-monthDropdown-month");P.value=new Date(s.currentYear,O).getMonth().toString(),P.textContent=rl(O,s.config.shorthandCurrentMonth,s.l10n),P.tabIndex=-1,s.currentMonth===O&&(P.selected=!0),s.monthsDropdownContainer.appendChild(P)}}}function H(){var w,O=Be("div","flatpickr-month"),P=window.document.createDocumentFragment();1<s.config.showMonths||s.config.monthSelectorType==="static"?w=Be("span","cur-month"):(s.monthsDropdownContainer=Be("select","flatpickr-monthDropdown-months"),s.monthsDropdownContainer.setAttribute("aria-label",s.l10n.monthAriaLabel),v(s.monthsDropdownContainer,"change",function(ce){var te=Ut(ce),fe=parseInt(te.value,10);s.changeMonth(fe-s.currentMonth),je("onMonthChange")}),B(),w=s.monthsDropdownContainer);var $=ma("cur-year",{tabindex:"-1"}),q=$.getElementsByTagName("input")[0];q.setAttribute("aria-label",s.l10n.yearAriaLabel),s.config.minDate&&q.setAttribute("min",s.config.minDate.getFullYear().toString()),s.config.maxDate&&(q.setAttribute("max",s.config.maxDate.getFullYear().toString()),q.disabled=!!s.config.minDate&&s.config.minDate.getFullYear()===s.config.maxDate.getFullYear());var Z=Be("div","flatpickr-current-month");return Z.appendChild(w),Z.appendChild($),P.appendChild(Z),O.appendChild(P),{container:O,yearElement:q,monthElement:w}}function U(){ha(s.monthNav),s.monthNav.appendChild(s.prevMonthNav),s.config.showMonths&&(s.yearElements=[],s.monthElements=[]);for(var w,O=s.config.showMonths;O--;)w=H(),s.yearElements.push(w.yearElement),s.monthElements.push(w.monthElement),s.monthNav.appendChild(w.container);s.monthNav.appendChild(s.nextMonthNav)}function Q(){return s.monthNav=Be("div","flatpickr-months"),s.yearElements=[],s.monthElements=[],s.prevMonthNav=Be("span","flatpickr-prev-month"),s.prevMonthNav.innerHTML=s.config.prevArrow,s.nextMonthNav=Be("span","flatpickr-next-month"),s.nextMonthNav.innerHTML=s.config.nextArrow,U(),Object.defineProperty(s,"_hidePrevMonthArrow",{get:function(){return s.__hidePrevMonthArrow},set:function(w){s.__hidePrevMonthArrow!==w&&(Tt(s.prevMonthNav,"flatpickr-disabled",w),s.__hidePrevMonthArrow=w)}}),Object.defineProperty(s,"_hideNextMonthArrow",{get:function(){return s.__hideNextMonthArrow},set:function(w){s.__hideNextMonthArrow!==w&&(Tt(s.nextMonthNav,"flatpickr-disabled",w),s.__hideNextMonthArrow=w)}}),s.currentYearElement=s.yearElements[0],Kn(),s.monthNav}function X(){s.calendarContainer.classList.add("hasTime"),s.config.noCalendar&&s.calendarContainer.classList.add("noCalendar");var w=zs(s.config);s.timeContainer=Be("div","flatpickr-time"),s.timeContainer.tabIndex=-1;var O=Be("span","flatpickr-time-separator",":"),P=ma("flatpickr-hour",{"aria-label":s.l10n.hourAriaLabel});s.hourElement=P.getElementsByTagName("input")[0];var $=ma("flatpickr-minute",{"aria-label":s.l10n.minuteAriaLabel});if(s.minuteElement=$.getElementsByTagName("input")[0],s.hourElement.tabIndex=s.minuteElement.tabIndex=-1,s.hourElement.value=$t(s.latestSelectedDateObj?s.latestSelectedDateObj.getHours():s.config.time_24hr?w.hours:b(w.hours)),s.minuteElement.value=$t(s.latestSelectedDateObj?s.latestSelectedDateObj.getMinutes():w.minutes),s.hourElement.setAttribute("step",s.config.hourIncrement.toString()),s.minuteElement.setAttribute("step",s.config.minuteIncrement.toString()),s.hourElement.setAttribute("min",s.config.time_24hr?"0":"1"),s.hourElement.setAttribute("max",s.config.time_24hr?"23":"12"),s.hourElement.setAttribute("maxlength","2"),s.minuteElement.setAttribute("min","0"),s.minuteElement.setAttribute("max","59"),s.minuteElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(P),s.timeContainer.appendChild(O),s.timeContainer.appendChild($),s.config.time_24hr&&s.timeContainer.classList.add("time24hr"),s.config.enableSeconds){s.timeContainer.classList.add("hasSeconds");var q=ma("flatpickr-second");s.secondElement=q.getElementsByTagName("input")[0],s.secondElement.value=$t(s.latestSelectedDateObj?s.latestSelectedDateObj.getSeconds():w.seconds),s.secondElement.setAttribute("step",s.minuteElement.getAttribute("step")),s.secondElement.setAttribute("min","0"),s.secondElement.setAttribute("max","59"),s.secondElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(Be("span","flatpickr-time-separator",":")),s.timeContainer.appendChild(q)}return s.config.time_24hr||(s.amPM=Be("span","flatpickr-am-pm",s.l10n.amPM[nn(11<(s.latestSelectedDateObj?s.hourElement.value:s.config.defaultHour))]),s.amPM.title=s.l10n.toggleTitle,s.amPM.tabIndex=-1,s.timeContainer.appendChild(s.amPM)),s.timeContainer}function R(){s.weekdayContainer?ha(s.weekdayContainer):s.weekdayContainer=Be("div","flatpickr-weekdays");for(var w,O=s.config.showMonths;O--;)w=Be("div","flatpickr-weekdaycontainer"),s.weekdayContainer.appendChild(w);return ae(),s.weekdayContainer}function ae(){if(s.weekdayContainer){var w=s.l10n.firstDayOfWeek,O=cm(s.l10n.weekdays.shorthand);0<w&&w<O.length&&(O=cm(O.splice(w,O.length),O.splice(0,w)));for(var P=s.config.showMonths;P--;)s.weekdayContainer.children[P].innerHTML=`
      <span class='flatpickr-weekday'>
        `+O.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function se(){s.calendarContainer.classList.add("hasWeeks");var w=Be("div","flatpickr-weekwrapper");w.appendChild(Be("span","flatpickr-weekday",s.l10n.weekAbbreviation));var O=Be("div","flatpickr-weeks");return w.appendChild(O),{weekWrapper:w,weekNumbers:O}}function T(w,O){O===void 0&&(O=!0);var P=O?w:w-s.currentMonth;0>P&&s._hidePrevMonthArrow===!0||0<P&&s._hideNextMonthArrow===!0||(s.currentMonth+=P,(0>s.currentMonth||11<s.currentMonth)&&(s.currentYear+=11<s.currentMonth?1:-1,s.currentMonth=(s.currentMonth+12)%12,je("onYearChange"),B()),N(),je("onMonthChange"),Kn())}function ie(w,O){if(w===void 0&&(w=!0),O===void 0&&(O=!0),s.input.value="",s.altInput!==void 0&&(s.altInput.value=""),s.mobileInput!==void 0&&(s.mobileInput.value=""),s.selectedDates=[],s.latestSelectedDateObj=void 0,O===!0&&(s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth()),s.config.enableTime===!0){var P=zs(s.config),$=P.hours,q=P.minutes,Z=P.seconds;y($,q,Z)}s.redraw(),w&&je("onChange")}function ye(){s.isOpen=!1,s.isMobile||(s.calendarContainer!==void 0&&s.calendarContainer.classList.remove("open"),s._input!==void 0&&s._input.classList.remove("active")),je("onClose")}function Pe(){s.config!==void 0&&je("onDestroy");for(var w=s._handlers.length;w--;)s._handlers[w].remove();if(s._handlers=[],s.mobileInput)s.mobileInput.parentNode&&s.mobileInput.parentNode.removeChild(s.mobileInput),s.mobileInput=void 0;else if(s.calendarContainer&&s.calendarContainer.parentNode)if(s.config.static&&s.calendarContainer.parentNode){var O=s.calendarContainer.parentNode;if(O.lastChild&&O.removeChild(O.lastChild),O.parentNode){for(;O.firstChild;)O.parentNode.insertBefore(O.firstChild,O);O.parentNode.removeChild(O)}}else s.calendarContainer.parentNode.removeChild(s.calendarContainer);s.altInput&&(s.input.type="text",s.altInput.parentNode&&s.altInput.parentNode.removeChild(s.altInput),delete s.altInput),s.input&&(s.input.type=s.input._type,s.input.classList.remove("flatpickr-input"),s.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(P){try{delete s[P]}catch{}})}function $e(w){return s.calendarContainer.contains(w)}function oe(w){if(s.isOpen&&!s.config.inline){var O=Ut(w),P=$e(O),$=O===s.input||O===s.altInput||s.element.contains(O)||w.path&&w.path.indexOf&&(~w.path.indexOf(s.input)||~w.path.indexOf(s.altInput)),q=!$&&!P&&!$e(w.relatedTarget),Z=!s.config.ignoredFocusElements.some(function(ce){return ce.contains(O)});q&&Z&&(s.config.allowInput&&s.setDate(s._input.value,!1,s.config.altInput?s.config.altFormat:s.config.dateFormat),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0&&s.input.value!==""&&s.input.value!==void 0&&f(),s.close(),s.config&&s.config.mode==="range"&&s.selectedDates.length===1&&s.clear(!1))}}function me(w){if(!(!w||s.config.minDate&&w<s.config.minDate.getFullYear()||s.config.maxDate&&w>s.config.maxDate.getFullYear())){var O=w,P=s.currentYear!==O;s.currentYear=O||s.currentYear,s.config.maxDate&&s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth=i(s.config.maxDate.getMonth(),s.currentMonth):s.config.minDate&&s.currentYear===s.config.minDate.getFullYear()&&(s.currentMonth=o(s.config.minDate.getMonth(),s.currentMonth)),P&&(s.redraw(),je("onYearChange"),B())}}function be(w,O){var P;O===void 0&&(O=!0);var $=s.parseDate(w,void 0,O);if(s.config.minDate&&$&&0>Yt($,s.config.minDate,O===void 0?!s.minDateHasTime:O)||s.config.maxDate&&$&&0<Yt($,s.config.maxDate,O===void 0?!s.maxDateHasTime:O))return!1;if(!s.config.enable&&s.config.disable.length===0)return!0;if($===void 0)return!1;for(var q=!!s.config.enable,Z=(P=s.config.enable)!==null&&P!==void 0?P:s.config.disable,ce=0,te=void 0;ce<Z.length;ce++){if(te=Z[ce],typeof te=="function"&&te($)||te instanceof Date&&$!==void 0&&te.getTime()===$.getTime())return q;if(typeof te=="string"){var fe=s.parseDate(te,void 0,!0);return fe&&fe.getTime()===$.getTime()?q:!q}if(typeof te=="object"&&$!==void 0&&te.from&&te.to&&$.getTime()>=te.from.getTime()&&$.getTime()<=te.to.getTime())return q}return!q}function He(w){return s.daysContainer!==void 0&&w.className.indexOf("hidden")===-1&&w.className.indexOf("flatpickr-disabled")===-1&&s.daysContainer.contains(w)}function it(w){var O=w.target===s._input,P=s._input.value.trimEnd()!==Rr();O&&P&&!(w.relatedTarget&&$e(w.relatedTarget))&&s.setDate(s._input.value,!0,w.target===s.altInput?s.config.altFormat:s.config.dateFormat)}function Ze(w){var O=Ut(w),P=s.config.wrap?t.contains(O):O===s._input,$=s.config.allowInput,q=s.isOpen&&(!$||!P),Z=s.config.inline&&P&&!$;if(w.keyCode===13&&P){if($)return s.setDate(s._input.value,!0,O===s.altInput?s.config.altFormat:s.config.dateFormat),s.close(),O.blur();s.open()}else if($e(O)||q||Z){var ce=!!s.timeContainer&&s.timeContainer.contains(O);switch(w.keyCode){case 13:ce?(w.preventDefault(),f(),Un()):ee(w);break;case 27:w.preventDefault(),Un();break;case 8:case 46:P&&!s.config.allowInput&&(w.preventDefault(),s.clear());break;case 37:case 39:if(!ce&&!P){w.preventDefault();var te=c();if(s.daysContainer!==void 0&&($===!1||te&&He(te))){var fe=w.keyCode===39?1:-1;w.ctrlKey?(w.stopPropagation(),T(fe),L(V(1),0)):L(void 0,fe)}}else s.hourElement&&s.hourElement.focus();break;case 38:case 40:w.preventDefault();var ne=w.keyCode===40?1:-1;s.daysContainer&&O.$i!==void 0||O===s.input||O===s.altInput?w.ctrlKey?(w.stopPropagation(),me(s.currentYear-ne),L(V(1),0)):!ce&&L(void 0,7*ne):O===s.currentYearElement?me(s.currentYear-ne):s.config.enableTime&&(!ce&&s.hourElement&&s.hourElement.focus(),f(w),s._debouncedChange());break;case 9:if(ce){var re=[s.hourElement,s.minuteElement,s.secondElement,s.amPM].concat(s.pluginElements).filter(function(Je){return Je}),Ee=re.indexOf(O);if(Ee!==-1){var ct=re[Ee+(w.shiftKey?-1:1)];w.preventDefault(),(ct||s._input).focus()}}else!s.config.noCalendar&&s.daysContainer&&s.daysContainer.contains(O)&&w.shiftKey&&(w.preventDefault(),s._input.focus())}}if(s.amPM!==void 0&&O===s.amPM)switch(w.key){case s.l10n.amPM[0].charAt(0):case s.l10n.amPM[0].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[0],h(),bt();break;case s.l10n.amPM[1].charAt(0):case s.l10n.amPM[1].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[1],h(),bt()}(P||$e(O))&&je("onKeyDown",w)}function Pt(w,O){if(O===void 0&&(O="flatpickr-day"),!(s.selectedDates.length!==1||w&&(!w.classList.contains(O)||w.classList.contains("flatpickr-disabled")))){for(var P=w?w.dateObj.getTime():s.days.firstElementChild.dateObj.getTime(),$=s.parseDate(s.selectedDates[0],void 0,!0).getTime(),q=i(P,s.selectedDates[0].getTime()),Z=o(P,s.selectedDates[0].getTime()),ce=!1,te=0,fe=0,ne=q;ne<Z;ne+=AP.DAY)be(new Date(ne),!0)||(ce=ce||ne>q&&ne<Z,ne<$&&(!te||ne>te)?te=ne:ne>$&&(!fe||ne<fe)&&(fe=ne));var re=Array.from(s.rContainer.querySelectorAll("*:nth-child(-n+"+s.config.showMonths+") > ."+O));re.forEach(function(Ee){var ct=Ee.dateObj,Je=ct.getTime(),hn=0<te&&Je<te||0<fe&&Je>fe;return hn?(Ee.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach(function(Wt){Ee.classList.remove(Wt)})):void(ce&&!hn||(["startRange","inRange","endRange","notAllowed"].forEach(function(Wt){Ee.classList.remove(Wt)}),w!==void 0&&(w.classList.add(P<=s.selectedDates[0].getTime()?"startRange":"endRange"),$<P&&Je===$?Ee.classList.add("startRange"):$>P&&Je===$&&Ee.classList.add("endRange"),Je>=te&&(fe===0||Je<=fe)&&FP(Je,$,P)&&Ee.classList.add("inRange"))))})}}function Wn(){!s.isOpen||s.config.static||s.config.inline||pn()}function fo(w,O){if(O===void 0&&(O=s._positionElement),s.isMobile===!0){if(w){w.preventDefault();var P=Ut(w);P&&P.blur()}return s.mobileInput!==void 0&&(s.mobileInput.focus(),s.mobileInput.click()),void je("onOpen")}if(!(s._input.disabled||s.config.inline)){var $=s.isOpen;s.isOpen=!0,$||(s.calendarContainer.classList.add("open"),s._input.classList.add("active"),je("onOpen"),pn(O)),s.config.enableTime!==!0||s.config.noCalendar!==!0||s.config.allowInput!==!1||w!==void 0&&s.timeContainer.contains(w.relatedTarget)||setTimeout(function(){return s.hourElement.select()},50)}}function ir(w){return function(O){var P=s.config["_"+w+"Date"]=s.parseDate(O,s.config.dateFormat),$=s.config["_"+(w==="min"?"max":"min")+"Date"];P!==void 0&&(s[w==="min"?"minDateHasTime":"maxDateHasTime"]=0<P.getHours()||0<P.getMinutes()||0<P.getSeconds()),s.selectedDates&&(s.selectedDates=s.selectedDates.filter(function(q){return be(q)}),!s.selectedDates.length&&w==="min"&&m(P),bt()),s.daysContainer&&(Mr(),P===void 0?s.currentYearElement.removeAttribute(w):s.currentYearElement[w]=P.getFullYear().toString(),s.currentYearElement.disabled=!!$&&P!==void 0&&$.getFullYear()===P.getFullYear())}}function ii(){var w=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],O=Ot(Ot({},JSON.parse(JSON.stringify(t.dataset||{}))),n),P={};s.config.parseDate=O.parseDate,s.config.formatDate=O.formatDate,Object.defineProperty(s.config,"enable",{get:function(){return s.config._enable},set:function(re){s.config._enable=ze(re)}}),Object.defineProperty(s.config,"disable",{get:function(){return s.config._disable},set:function(re){s.config._disable=ze(re)}});var $=O.mode==="time";if(!O.dateFormat&&(O.enableTime||$)){var q=vt.defaultConfig.dateFormat||jo.dateFormat;P.dateFormat=O.noCalendar||$?"H:i"+(O.enableSeconds?":S":""):q+" H:i"+(O.enableSeconds?":S":"")}if(O.altInput&&(O.enableTime||$)&&!O.altFormat){var Z=vt.defaultConfig.altFormat||jo.altFormat;P.altFormat=O.noCalendar||$?"h:i"+(O.enableSeconds?":S K":" K"):Z+(" h:i"+(O.enableSeconds?":S":"")+" K")}Object.defineProperty(s.config,"minDate",{get:function(){return s.config._minDate},set:ir("min")}),Object.defineProperty(s.config,"maxDate",{get:function(){return s.config._maxDate},set:ir("max")});var ce=function(re){return function(Ee){s.config[re==="min"?"_minTime":"_maxTime"]=s.parseDate(Ee,"H:i:S")}};Object.defineProperty(s.config,"minTime",{get:function(){return s.config._minTime},set:ce("min")}),Object.defineProperty(s.config,"maxTime",{get:function(){return s.config._maxTime},set:ce("max")}),O.mode==="time"&&(s.config.noCalendar=!0,s.config.enableTime=!0),Object.assign(s.config,P,O);for(var te=0;te<w.length;te++)s.config[w[te]]=s.config[w[te]]===!0||s.config[w[te]]==="true";Ls.filter(function(re){return s.config[re]!==void 0}).forEach(function(re){s.config[re]=As(s.config[re]||[]).map(u)}),s.isMobile=!s.config.disableMobile&&!s.config.inline&&s.config.mode==="single"&&!s.config.disable.length&&!s.config.enable&&!s.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var fe,te=0;te<s.config.plugins.length;te++)for(var ne in fe=s.config.plugins[te](s)||{},fe)-1<Ls.indexOf(ne)?s.config[ne]=As(fe[ne]).map(u).concat(s.config[ne]):typeof O[ne]>"u"&&(s.config[ne]=fe[ne]);O.altInputClass||(s.config.altInputClass=ar().className+" "+s.config.altInputClass),je("onParseConfig")}function ar(){return s.config.wrap?t.querySelector("[data-input]"):t}function lr(){typeof s.config.locale!="object"&&typeof vt.l10ns[s.config.locale]>"u"&&s.config.errorHandler(new Error("flatpickr: invalid locale "+s.config.locale)),s.l10n=Ot(Ot({},vt.l10ns.default),typeof s.config.locale=="object"?s.config.locale:s.config.locale==="default"?void 0:vt.l10ns[s.config.locale]),Hr.D="("+s.l10n.weekdays.shorthand.join("|")+")",Hr.l="("+s.l10n.weekdays.longhand.join("|")+")",Hr.M="("+s.l10n.months.shorthand.join("|")+")",Hr.F="("+s.l10n.months.longhand.join("|")+")",Hr.K="("+s.l10n.amPM[0]+"|"+s.l10n.amPM[1]+"|"+s.l10n.amPM[0].toLowerCase()+"|"+s.l10n.amPM[1].toLowerCase()+")";var w=Ot(Ot({},n),JSON.parse(JSON.stringify(t.dataset||{})));w.time_24hr===void 0&&vt.defaultConfig.time_24hr===void 0&&(s.config.time_24hr=s.l10n.time_24hr),s.formatDate=Q1(s),s.parseDate=Nu({config:s.config,l10n:s.l10n})}function pn(w){if(typeof s.config.position=="function")return void s.config.position(s,w);if(s.calendarContainer!==void 0){je("onPreCalendarPosition");var O=w||s._positionElement,P=Array.prototype.reduce.call(s.calendarContainer.children,function(ws,xs){return ws+xs.offsetHeight},0),$=s.calendarContainer.offsetWidth,q=s.config.position.split(" "),Z=q[0],ce=1<q.length?q[1]:null,te=O.getBoundingClientRect(),fe=window.innerHeight-te.bottom,ne=Z==="above"||Z!=="below"&&fe<P&&te.top>P,re=window.pageYOffset+te.top+(ne?-P-2:O.offsetHeight+2);if(Tt(s.calendarContainer,"arrowTop",!ne),Tt(s.calendarContainer,"arrowBottom",ne),!s.config.inline){var Ee=window.pageXOffset+te.left,ct=!1,Je=!1;ce==="center"?(Ee-=($-te.width)/2,ct=!0):ce==="right"&&(Ee-=$-te.width,Je=!0),Tt(s.calendarContainer,"arrowLeft",!ct&&!Je),Tt(s.calendarContainer,"arrowCenter",ct),Tt(s.calendarContainer,"arrowRight",Je);var hn=window.document.body.offsetWidth-(window.pageXOffset+te.right),Wt=Ee+$>window.document.body.offsetWidth,hs=hn+$>window.document.body.offsetWidth;if(Tt(s.calendarContainer,"rightMost",Wt),!s.config.static)if(s.calendarContainer.style.top=re+"px",!Wt)s.calendarContainer.style.left=Ee+"px",s.calendarContainer.style.right="auto";else if(!hs)s.calendarContainer.style.left="auto",s.calendarContainer.style.right=hn+"px";else{var Nr=ai();if(Nr===void 0)return;var ms=window.document.body.offsetWidth,bs=o(0,ms/2-$/2),vs=Nr.cssRules.length,ys="{left:"+te.left+"px;right:auto;}";Tt(s.calendarContainer,"rightMost",!1),Tt(s.calendarContainer,"centerMost",!0),Nr.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+ys,vs),s.calendarContainer.style.left=bs+"px",s.calendarContainer.style.right="auto"}}}}function ai(){for(var w,O=null,P=0;P<document.styleSheets.length;P++)if(w=document.styleSheets[P],w.cssRules){try{w.cssRules}catch{continue}O=w;break}return O??li()}function li(){var w=document.createElement("style");return document.head.appendChild(w),w.sheet}function Mr(){s.config.noCalendar||s.isMobile||(B(),Kn(),N())}function Un(){s._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(s.close,0):s.close()}function ee(w){w.preventDefault(),w.stopPropagation();var O=function(re){return re.classList&&re.classList.contains("flatpickr-day")&&!re.classList.contains("flatpickr-disabled")&&!re.classList.contains("notAllowed")},P=G1(Ut(w),O);if(P!==void 0){var $=P,q=s.latestSelectedDateObj=new Date($.dateObj.getTime()),Z=(q.getMonth()<s.currentMonth||q.getMonth()>s.currentMonth+s.config.showMonths-1)&&s.config.mode!=="range";if(s.selectedDateElem=$,s.config.mode==="single")s.selectedDates=[q];else if(s.config.mode==="multiple"){var ce=Et(q);ce?s.selectedDates.splice(parseInt(ce),1):s.selectedDates.push(q)}else s.config.mode==="range"&&(s.selectedDates.length===2&&s.clear(!1,!1),s.latestSelectedDateObj=q,s.selectedDates.push(q),Yt(q,s.selectedDates[0],!0)!==0&&s.selectedDates.sort(function(re,Ee){return re.getTime()-Ee.getTime()}));if(h(),Z){var te=s.currentYear!==q.getFullYear();s.currentYear=q.getFullYear(),s.currentMonth=q.getMonth(),te&&(je("onYearChange"),B()),je("onMonthChange")}if(Kn(),N(),bt(),Z||s.config.mode==="range"||s.config.showMonths!==1?s.selectedDateElem!==void 0&&s.hourElement===void 0&&s.selectedDateElem&&s.selectedDateElem.focus():J($),s.hourElement!==void 0&&s.hourElement!==void 0&&s.hourElement.focus(),s.config.closeOnSelect){var fe=s.config.mode==="single"&&!s.config.enableTime,ne=s.config.mode==="range"&&s.selectedDates.length===2&&!s.config.enableTime;(fe||ne)&&Un()}k()}}function ue(w,O){if(w!==null&&typeof w=="object")for(var P in Object.assign(s.config,w),w)Gn[P]!==void 0&&Gn[P].forEach(function($){return $()});else s.config[w]=O,Gn[w]===void 0?-1<Ls.indexOf(w)&&(s.config[w]=As(O)):Gn[w].forEach(function($){return $()});s.redraw(),bt(!0)}function Ie(w,O){var P=[];if(w instanceof Array)P=w.map(function($){return s.parseDate($,O)});else if(w instanceof Date||typeof w=="number")P=[s.parseDate(w,O)];else if(typeof w=="string")switch(s.config.mode){case"single":case"time":P=[s.parseDate(w,O)];break;case"multiple":P=w.split(s.config.conjunction).map(function($){return s.parseDate($,O)});break;case"range":P=w.split(s.l10n.rangeSeparator).map(function($){return s.parseDate($,O)})}else s.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(w)));s.selectedDates=s.config.allowInvalidPreload?P:P.filter(function($){return $ instanceof Date&&be($,!1)}),s.config.mode==="range"&&s.selectedDates.sort(function($,q){return $.getTime()-q.getTime()})}function Ae(w,O,P){return O===void 0&&(O=!1),P===void 0&&(P=s.config.dateFormat),w!==0&&!w||w instanceof Array&&w.length===0?s.clear(O):(Ie(w,P),s.latestSelectedDateObj=s.selectedDates[s.selectedDates.length-1],s.redraw(),M(void 0,O),m(),s.selectedDates.length===0&&s.clear(!1),bt(O),void(O&&je("onChange")))}function ze(w){return w.slice().map(function(O){return typeof O=="string"||typeof O=="number"||O instanceof Date?s.parseDate(O,void 0,!0):O&&typeof O=="object"&&O.from&&O.to?{from:s.parseDate(O.from,void 0),to:s.parseDate(O.to,void 0)}:O}).filter(function(O){return O})}function It(){s.selectedDates=[],s.now=s.parseDate(s.config.now)||new Date;var w=s.config.defaultDate||((s.input.nodeName==="INPUT"||s.input.nodeName==="TEXTAREA")&&s.input.placeholder&&s.input.value===s.input.placeholder?null:s.input.value);w&&Ie(w,s.config.dateFormat),s._initialDate=0<s.selectedDates.length?s.selectedDates[0]:s.config.minDate&&s.config.minDate.getTime()>s.now.getTime()?s.config.minDate:s.config.maxDate&&s.config.maxDate.getTime()<s.now.getTime()?s.config.maxDate:s.now,s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth(),0<s.selectedDates.length&&(s.latestSelectedDateObj=s.selectedDates[0]),s.config.minTime!==void 0&&(s.config.minTime=s.parseDate(s.config.minTime,"H:i")),s.config.maxTime!==void 0&&(s.config.maxTime=s.parseDate(s.config.maxTime,"H:i")),s.minDateHasTime=!!s.config.minDate&&(0<s.config.minDate.getHours()||0<s.config.minDate.getMinutes()||0<s.config.minDate.getSeconds()),s.maxDateHasTime=!!s.config.maxDate&&(0<s.config.maxDate.getHours()||0<s.config.maxDate.getMinutes()||0<s.config.maxDate.getSeconds())}function gn(){return s.input=ar(),s.input?(s.input._type=s.input.type,s.input.type="text",s.input.classList.add("flatpickr-input"),s._input=s.input,s.config.altInput&&(s.altInput=Be(s.input.nodeName,s.config.altInputClass),s._input=s.altInput,s.altInput.placeholder=s.input.placeholder,s.altInput.disabled=s.input.disabled,s.altInput.required=s.input.required,s.altInput.tabIndex=s.input.tabIndex,s.altInput.type="text",s.input.setAttribute("type","hidden"),!s.config.static&&s.input.parentNode&&s.input.parentNode.insertBefore(s.altInput,s.input.nextSibling)),!s.config.allowInput&&s._input.setAttribute("readonly","readonly"),void Dt()):void s.config.errorHandler(new Error("Invalid input element specified"))}function Dt(){s._positionElement=s.config.positionElement||s._input}function qn(){var w=s.config.enableTime?s.config.noCalendar?"time":"datetime-local":"date";s.mobileInput=Be("input",s.input.className+" flatpickr-mobile"),s.mobileInput.tabIndex=1,s.mobileInput.type=w,s.mobileInput.disabled=s.input.disabled,s.mobileInput.required=s.input.required,s.mobileInput.placeholder=s.input.placeholder,s.mobileFormatStr=w=="datetime-local"?"Y-m-d\\TH:i:S":w==="date"?"Y-m-d":"H:i:S",0<s.selectedDates.length&&(s.mobileInput.defaultValue=s.mobileInput.value=s.formatDate(s.selectedDates[0],s.mobileFormatStr)),s.config.minDate&&(s.mobileInput.min=s.formatDate(s.config.minDate,"Y-m-d")),s.config.maxDate&&(s.mobileInput.max=s.formatDate(s.config.maxDate,"Y-m-d")),s.input.getAttribute("step")&&(s.mobileInput.step=s.input.getAttribute("step")+""),s.input.type="hidden",s.altInput!==void 0&&(s.altInput.type="hidden");try{s.input.parentNode&&s.input.parentNode.insertBefore(s.mobileInput,s.input.nextSibling)}catch{}v(s.mobileInput,"change",function(O){s.setDate(Ut(O).value,!1,s.mobileFormatStr),je("onChange"),je("onClose")})}function Yn(w){return s.isOpen===!0?s.close():void s.open(w)}function je(w,O){if(s.config!==void 0){var P=s.config[w];if(P!==void 0&&0<P.length)for(var $=0;P[$]&&$<P.length;$++)P[$](s.selectedDates,s.input.value,s,O);w==="onChange"&&(s.input.dispatchEvent(Lt("change")),s.input.dispatchEvent(Lt("input")))}}function Lt(w){var O=document.createEvent("Event");return O.initEvent(w,!0,!0),O}function Et(w){for(var O,P=0;P<s.selectedDates.length;P++)if(O=s.selectedDates[P],O instanceof Date&&Yt(O,w)===0)return""+P;return!1}function fs(w){return!(s.config.mode!=="range"||2>s.selectedDates.length)&&0<=Yt(w,s.selectedDates[0])&&0>=Yt(w,s.selectedDates[1])}function Kn(){s.config.noCalendar||s.isMobile||!s.monthNav||(s.yearElements.forEach(function(w,O){var P=new Date(s.currentYear,s.currentMonth,1);P.setMonth(s.currentMonth+O),1<s.config.showMonths||s.config.monthSelectorType==="static"?s.monthElements[O].textContent=rl(P.getMonth(),s.config.shorthandCurrentMonth,s.l10n)+" ":s.monthsDropdownContainer.value=P.getMonth().toString(),w.value=P.getFullYear().toString()}),s._hidePrevMonthArrow=s.config.minDate!==void 0&&(s.currentYear===s.config.minDate.getFullYear()?s.currentMonth<=s.config.minDate.getMonth():s.currentYear<s.config.minDate.getFullYear()),s._hideNextMonthArrow=s.config.maxDate!==void 0&&(s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth+1>s.config.maxDate.getMonth():s.currentYear>s.config.maxDate.getFullYear()))}function Rr(w){var O=w||(s.config.altInput?s.config.altFormat:s.config.dateFormat);return s.selectedDates.map(function(P){return s.formatDate(P,O)}).filter(function(P,$,q){return s.config.mode!=="range"||s.config.enableTime||q.indexOf(P)===$}).join(s.config.mode==="range"?s.l10n.rangeSeparator:s.config.conjunction)}function bt(w){w===void 0&&(w=!0),s.mobileInput!==void 0&&s.mobileFormatStr&&(s.mobileInput.value=s.latestSelectedDateObj===void 0?"":s.formatDate(s.latestSelectedDateObj,s.mobileFormatStr)),s.input.value=Rr(s.config.dateFormat),s.altInput!==void 0&&(s.altInput.value=Rr(s.config.altFormat)),w!==!1&&je("onValueUpdate")}function ps(w){var O=Ut(w),P=s.prevMonthNav.contains(O),$=s.nextMonthNav.contains(O);P||$?T(P?-1:1):0<=s.yearElements.indexOf(O)?O.select():O.classList.contains("arrowUp")?s.changeYear(s.currentYear+1):O.classList.contains("arrowDown")&&s.changeYear(s.currentYear-1)}function gs(w){w.preventDefault();var O=w.type==="keydown",P=Ut(w),$=P;s.amPM!==void 0&&P===s.amPM&&(s.amPM.textContent=s.l10n.amPM[nn(s.amPM.textContent===s.l10n.amPM[0])]);var q=parseFloat($.getAttribute("min")),Z=parseFloat($.getAttribute("max")),ce=parseFloat($.getAttribute("step")),te=parseInt($.value,10),fe=w.delta||(O?w.which===38?1:-1:0),ne=te+ce*fe;if(typeof $.value<"u"&&$.value.length===2){var re=$===s.hourElement,Ee=$===s.minuteElement;ne<q?(ne=Z+ne+nn(!re)+(nn(re)&&nn(!s.amPM)),Ee&&D(void 0,-1,s.hourElement)):ne>Z&&(ne=$===s.hourElement?ne-Z-nn(!s.amPM):q,Ee&&D(void 0,1,s.hourElement)),s.amPM&&re&&(ce===1?ne+te===23:r(ne-te)>ce)&&(s.amPM.textContent=s.l10n.amPM[nn(s.amPM.textContent===s.l10n.amPM[0])]),$.value=$t(ne)}}var s={config:Ot(Ot({},jo),vt.defaultConfig),l10n:Di};s.parseDate=Nu({config:s.config,l10n:s.l10n}),s._handlers=[],s.pluginElements=[],s.loadedPlugins=[],s._bind=v,s._setHoursFromDate=m,s._positionCalendar=pn,s.changeMonth=T,s.changeYear=me,s.clear=ie,s.close=ye,s.onMouseOver=Pt,s._createElement=Be,s.createDay=A,s.destroy=Pe,s.isEnabled=be,s.jumpToDate=M,s.updateValue=bt,s.open=fo,s.redraw=Mr,s.set=ue,s.setDate=Ae,s.toggle=Yn;var Gn={locale:[lr,ae],showMonths:[U,d,R],minDate:[M],maxDate:[M],positionElement:[Dt],clickOpens:[function(){s.config.clickOpens===!0?(v(s._input,"focus",s.open),v(s._input,"click",s.open)):(s._input.removeEventListener("focus",s.open),s._input.removeEventListener("click",s.open))}]};return l(),s}function Eo(t,n){for(var r,o=Array.prototype.slice.call(t).filter(function(l){return l instanceof HTMLElement}),i=[],a=0;a<o.length;a++){r=o[a];try{if(r.getAttribute("data-fp-omit")!==null)continue;r._flatpickr!==void 0&&(r._flatpickr.destroy(),r._flatpickr=void 0),r._flatpickr=$P(r,n||{}),i.push(r._flatpickr)}catch(l){console.error(l)}}return i.length===1?i[0]:i}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return Eo(this,t)},HTMLElement.prototype.flatpickr=function(t){return Eo([this],t)});var vt=function(t,n){return typeof t=="string"?Eo(window.document.querySelectorAll(t),n):t instanceof Node?Eo([t],n):Eo(t,n)};vt.defaultConfig={},vt.l10ns={en:Ot({},Di),default:Ot({},Di)},vt.localize=function(t){vt.l10ns.default=Ot(Ot({},vt.l10ns.default),t)},vt.setDefaults=function(t){vt.defaultConfig=Ot(Ot({},vt.defaultConfig),t)},vt.parseDate=Nu({}),vt.formatDate=Q1({}),vt.compareDates=Yt,typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return Eo(this,t)}),Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))},typeof window<"u"&&(window.flatpickr=vt);const ci=x.oneOfType([x.string,x.array,x.object,x.number]);x.bool,x.bool,x.string,x.string,x.string,x.string,x.number,x.number,x.array,x.bool,x.bool,x.bool,x.node,x.node,x.number,x.string,x.bool,x.string,x.oneOfType([x.string,x.object]),x.number,x.oneOf(["single","multiple","range"]),x.oneOf(["static","dropdown"]),x.string,x.bool,x.func,x.func,x.func,x.func,x.func,x.func,x.func,x.func,x.func,x.string,x.bool,x.bool,x.number,x.node,x.bool,x.bool,x.bool,x.oneOf(["full","auto"]),x.string;x.string,x.string,x.string,x.node,x.bool,x.bool,x.bool,x.bool,x.bool,x.func,x.func,x.string;x.oneOfType([x.string,x.number]),x.oneOfType([x.string,x.number]),x.bool,x.string;x.string,x.oneOfType([x.string,x.number]),x.string,x.string,x.bool,x.bool,x.bool,x.bool,x.bool,x.bool,x.string,x.string,x.func,x.func,x.func,x.oneOf(["text","email","password","tel","url","number"]),x.string,x.node,x.node,x.node,x.oneOf(["full","auto"]),x.string;x.string,x.arrayOf(x.object),x.string,x.func,x.string,x.string,x.string,x.func,x.func,x.func,x.bool,x.string,x.func,x.bool;x.string,x.string.isRequired,x.string,x.string.isRequired,x.string,x.string,x.func;x.node,x.object,x.string,x.func,x.string,x.string,x.func,x.func,x.func,x.string,x.bool,x.bool,x.string,x.any;x.string,x.string,x.node;x.node,x.string;x.string,x.string,x.node;x.bool,x.node,x.string;x.node,x.string;x.number,x.number,x.bool,x.string,x.node;const Z1=t=>{let{children:n=null,className:r,variant:o="default",disabled:i=!1,...a}=t;return S.createElement(Df,he({className:`juno-input-group juno-input-group-${o} ${i?"juno-input-group-disabled":""} ${r}`},a),S.Children.map(n,l=>{const c=l.props.variant||o,u=l.props.disabled||i;return S.cloneElement(l,{variant:c,disabled:u})}))};Z1.propTypes={children:x.node,className:x.string,variant:x.oneOf(["default","primary","primary-danger","subdued"]),disabled:x.bool};var zP=function(t,n){return`
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
        `)},HP=`
    jn-border-l-4
    jn-border-theme-introbox
`,BP=function(t,n){return`
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
    `)},VP=`
    jn-font-bold
`,WP=function(t){var n=t.title,r=n===void 0?null:n,o=t.text,i=o===void 0?null:o,a=t.variant,l=a===void 0?"default":a,c=t.heroImage,u=c===void 0?null:c,d=t.className,f=d===void 0?"":d,g=t.children,b=at(t,["title","text","variant","heroImage","className","children"]),h=S.useMemo(function(){return u&&l==="hero"},[l,u]);return S.createElement("div",de({className:"juno-introbox ".concat(zP(l,u)," ").concat(f),style:h?{backgroundImage:"".concat(u)}:{}},b),S.createElement("div",{className:"".concat(HP)}),S.createElement("div",{className:"".concat(BP(l,u))},r?S.createElement("h1",{className:"".concat(VP)},r):"",g||S.createElement("p",null,i)))};x.string,x.string,x.string;S.createContext({});p.createContext();x.node,x.oneOf(["small","normal"]),x.string;x.string,x.bool,x.oneOf(_n),x.string,x.node,x.string,x.func;x.string,x.node,x.string;x.string,x.string,x.oneOf(["info","warning","danger","error","success"]),x.bool,x.bool,x.number,x.func,x.string,x.node;x.node,x.string,x.string,x.oneOf(_n),x.oneOf(_n),x.string,x.func,x.func;var J1=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],ol=J1.join(","),X1=typeof Element>"u",ro=X1?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,il=!X1&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t==null?void 0:t.ownerDocument},al=function t(n,r){var o;r===void 0&&(r=!0);var i=n==null||(o=n.getAttribute)===null||o===void 0?void 0:o.call(n,"inert"),a=i===""||i==="true"||r&&n&&t(n.parentNode);return a},UP=function(n){var r,o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"contenteditable");return o===""||o==="true"},ew=function(n,r,o){if(al(n))return[];var i=Array.prototype.slice.apply(n.querySelectorAll(ol));return r&&ro.call(n,ol)&&i.unshift(n),i=i.filter(o),i},tw=function t(n,r,o){for(var i=[],a=Array.from(n);a.length;){var l=a.shift();if(!al(l,!1))if(l.tagName==="SLOT"){var c=l.assignedElements(),u=c.length?c:l.children,d=t(u,!0,o);o.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{var f=ro.call(l,ol);f&&o.filter(l)&&(r||!n.includes(l))&&i.push(l);var g=l.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(l),b=!al(g,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(g&&b){var h=t(g===!0?l.children:g.children,!0,o);o.flatten?i.push.apply(i,h):i.push({scopeParent:l,candidates:h})}else a.unshift.apply(a,l.children)}}return i},nw=function(n){return!isNaN(parseInt(n.getAttribute("tabindex"),10))},fr=function(n){if(!n)throw new Error("No node provided");return 0>n.tabIndex&&(/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||UP(n))&&!nw(n)?0:n.tabIndex},qP=function(n,r){var o=fr(n);return 0>o&&r&&!nw(n)?0:o},YP=function(n,r){return n.tabIndex===r.tabIndex?n.documentOrder-r.documentOrder:n.tabIndex-r.tabIndex},rw=function(n){return n.tagName==="INPUT"},KP=function(n){return rw(n)&&n.type==="hidden"},GP=function(n){var r=n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(o){return o.tagName==="SUMMARY"});return r},QP=function(n,r){for(var o=0;o<n.length;o++)if(n[o].checked&&n[o].form===r)return n[o]},ZP=function(n){if(!n.name)return!0;var r,o=n.form||il(n),i=function(c){return o.querySelectorAll('input[type="radio"][name="'+c+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=i(window.CSS.escape(n.name));else try{r=i(n.name)}catch(l){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",l.message),!1}var a=QP(r,n.form);return!a||a===n},JP=function(n){return rw(n)&&n.type==="radio"},XP=function(n){return JP(n)&&!ZP(n)},eI=function(n){var r,o=n&&il(n),i=(r=o)===null||r===void 0?void 0:r.host,a=!1;if(o&&o!==n){var l,c,u;for(a=!!((l=i)!==null&&l!==void 0&&(c=l.ownerDocument)!==null&&c!==void 0&&c.contains(i)||n!=null&&(u=n.ownerDocument)!==null&&u!==void 0&&u.contains(n));!a&&i;){var d,f,g;o=il(i),i=(d=o)===null||d===void 0?void 0:d.host,a=!!((f=i)!==null&&f!==void 0&&(g=f.ownerDocument)!==null&&g!==void 0&&g.contains(i))}}return a},um=function(n){var r=n.getBoundingClientRect(),o=r.width,i=r.height;return o===0&&i===0},tI=function(n,r){var o=r.displayCheck,i=r.getShadowRoot;if(getComputedStyle(n).visibility==="hidden")return!0;var a=ro.call(n,"details>summary:first-of-type"),l=a?n.parentElement:n;if(ro.call(l,"details:not([open]) *"))return!0;if(!o||o==="full"||o==="legacy-full"){if(typeof i=="function"){for(var c=n;n;){var u=n.parentElement,d=il(n);if(u&&!u.shadowRoot&&i(u)===!0)return um(n);n=n.assignedSlot?n.assignedSlot:u||d===n.ownerDocument?u:d.host}n=c}if(eI(n))return!n.getClientRects().length;if(o!=="legacy-full")return!0}else if(o==="non-zero-area")return um(n);return!1},nI=function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var r=n.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var o,i=0;i<r.children.length;i++)if(o=r.children.item(i),o.tagName==="LEGEND")return!!ro.call(r,"fieldset[disabled] *")||!o.contains(n);return!0}r=r.parentElement}return!1},ll=function(n,r){return!(r.disabled||al(r)||KP(r)||tI(r,n)||GP(r)||nI(r))},Fu=function(n,r){return!(XP(r)||0>fr(r)||!ll(n,r))},rI=function(n){var r=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(r)||0<=r)},oI=function t(n){var r=[],o=[];return n.forEach(function(i,a){var l=!!i.scopeParent,c=l?i.scopeParent:i,u=qP(c,l),d=l?t(i.candidates):c;u===0?l?r.push.apply(r,d):r.push(c):o.push({documentOrder:a,tabIndex:u,item:i,isScope:l,content:d})}),o.sort(YP).reduce(function(i,a){return a.isScope?i.push.apply(i,a.content):i.push(a.content),i},[]).concat(r)},ow=function(n,r){r=r||{};var o;return o=r.getShadowRoot?tw([n],r.includeContainer,{filter:Fu.bind(null,r),flatten:!1,getShadowRoot:r.getShadowRoot,shadowRootFilter:rI}):ew(n,r.includeContainer,Fu.bind(null,r)),oI(o)},iw=function(n,r){r=r||{};var o;return o=r.getShadowRoot?tw([n],r.includeContainer,{filter:ll.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):ew(n,r.includeContainer,ll.bind(null,r)),o},_r=function(n,r){if(r=r||{},!n)throw new Error("No node provided");return ro.call(n,ol)!==!1&&Fu(r,n)},iI=J1.concat("iframe").join(","),La=function(n,r){if(r=r||{},!n)throw new Error("No node provided");return ro.call(n,iI)!==!1&&ll(r,n)},aI=Object.freeze({__proto__:null,focusable:iw,getTabIndex:fr,isFocusable:La,isTabbable:_r,tabbable:ow});function lI(t,n,r){return(n=cI(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function dm(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function fm(t){for(var n,r=1;r<arguments.length;r++)n=arguments[r]==null?{}:arguments[r],r%2?dm(Object(n),!0).forEach(function(o){lI(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dm(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))});return t}function sI(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function cI(t){var n=sI(t,"string");return typeof n=="symbol"?n:n+""}var pm={activateTrap:function(n,r){if(0<n.length){var o=n[n.length-1];o!==r&&o.pause()}var i=n.indexOf(r);i===-1||n.splice(i,1),n.push(r)},deactivateTrap:function(n,r){var o=n.indexOf(r);o!==-1&&n.splice(o,1),0<n.length&&n[n.length-1].unpause()}},uI=function(n){return n.tagName&&n.tagName.toLowerCase()==="input"&&typeof n.select=="function"},dI=function(n){return(n==null?void 0:n.key)==="Escape"||(n==null?void 0:n.key)==="Esc"||(n==null?void 0:n.keyCode)===27},Ei=function(n){return(n==null?void 0:n.key)==="Tab"||(n==null?void 0:n.keyCode)===9},fI=function(n){return Ei(n)&&!n.shiftKey},pI=function(n){return Ei(n)&&n.shiftKey},gm=function(n){return setTimeout(n,0)},hm=function(n,r){var o=-1;return n.every(function(i,a){return!r(i)||(o=a,!1)}),o},ui=function(n){for(var r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return typeof n=="function"?n.apply(void 0,o):n},ba=function(n){return n.target.shadowRoot&&typeof n.composedPath=="function"?n.composedPath()[0]:n.target},gI=[],hI=function(n,r){var o,i=(r==null?void 0:r.document)||document,a=(r==null?void 0:r.trapStack)||gI,l=fm({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:fI,isKeyBackward:pI},r),c={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},u=function(_,N,B){return _&&_[N]!==void 0?_[N]:l[B||N]},d=function(_,N){var B=typeof(N==null?void 0:N.composedPath)=="function"?N.composedPath():void 0;return c.containerGroups.findIndex(function(H){var U=H.container,Q=H.tabbableNodes;return U.contains(_)||(B==null?void 0:B.includes(U))||Q.find(function(X){return X===_})})},f=function(_){var N=l[_];if(typeof N=="function"){for(var B=arguments.length,H=Array(1<B?B-1:0),U=1;U<B;U++)H[U-1]=arguments[U];N=N.apply(void 0,H)}if(N===!0&&(N=void 0),!N){if(N===void 0||N===!1)return N;throw new Error("`".concat(_,"` was specified but was not a node, or did not return a node"))}var Q=N;if(typeof N=="string"&&(Q=i.querySelector(N),!Q))throw new Error("`".concat(_,"` as selector refers to no known node"));return Q},g=function(){var _=f("initialFocus");if(_===!1)return!1;if(_===void 0||!La(_,l.tabbableOptions))if(0<=d(i.activeElement))_=i.activeElement;else{var N=c.tabbableGroups[0],B=N&&N.firstTabbableNode;_=B||f("fallbackFocus")}if(!_)throw new Error("Your focus-trap needs to have at least one focusable element");return _},b=function(){if(c.containerGroups=c.containers.map(function(_){var N=ow(_,l.tabbableOptions),B=iw(_,l.tabbableOptions),H=0<N.length?N[0]:void 0,U=0<N.length?N[N.length-1]:void 0,Q=B.find(function(ae){return _r(ae)}),X=B.slice().reverse().find(function(ae){return _r(ae)}),R=!!N.find(function(ae){return 0<fr(ae)});return{container:_,tabbableNodes:N,focusableNodes:B,posTabIndexesFound:R,firstTabbableNode:H,lastTabbableNode:U,firstDomTabbableNode:Q,lastDomTabbableNode:X,nextTabbableNode:function(se){var T=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],ie=N.indexOf(se);return 0>ie?T?B.slice(B.indexOf(se)+1).find(function(ye){return _r(ye)}):B.slice(0,B.indexOf(se)).reverse().find(function(ye){return _r(ye)}):N[ie+(T?1:-1)]}}}),c.tabbableGroups=c.containerGroups.filter(function(_){return 0<_.tabbableNodes.length}),0>=c.tabbableGroups.length&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(c.containerGroups.find(function(_){return _.posTabIndexesFound})&&1<c.containerGroups.length)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},h=function(_){var N=_.activeElement;return N?N.shadowRoot&&N.shadowRoot.activeElement!==null?h(N.shadowRoot):N:void 0},m=function(_){return _===!1||_===h(document)?void 0:_&&_.focus?(_.focus({preventScroll:!!l.preventScroll}),c.mostRecentlyFocusedNode=_,void(uI(_)&&_.select())):void m(g())},y=function(_){var N=f("setReturnFocus",_);return N||N!==!1&&_},E=function(_){var N=_.target,B=_.event,H=_.isBackward,U=H!==void 0&&H;N=N||ba(B),b();var Q=null;if(0<c.tabbableGroups.length){var X=d(N,B),R=0<=X?c.containerGroups[X]:void 0;if(0>X)Q=U?c.tabbableGroups[c.tabbableGroups.length-1].lastTabbableNode:c.tabbableGroups[0].firstTabbableNode;else if(U){var ae=hm(c.tabbableGroups,function($e){var oe=$e.firstTabbableNode;return N===oe});if(0>ae&&(R.container===N||La(N,l.tabbableOptions)&&!_r(N,l.tabbableOptions)&&!R.nextTabbableNode(N,!1))&&(ae=X),0<=ae){var se=ae===0?c.tabbableGroups.length-1:ae-1,T=c.tabbableGroups[se];Q=0<=fr(N)?T.lastTabbableNode:T.lastDomTabbableNode}else Ei(B)||(Q=R.nextTabbableNode(N,!1))}else{var ie=hm(c.tabbableGroups,function($e){var oe=$e.lastTabbableNode;return N===oe});if(0>ie&&(R.container===N||La(N,l.tabbableOptions)&&!_r(N,l.tabbableOptions)&&!R.nextTabbableNode(N))&&(ie=X),0<=ie){var ye=ie===c.tabbableGroups.length-1?0:ie+1,Pe=c.tabbableGroups[ye];Q=0<=fr(N)?Pe.firstTabbableNode:Pe.firstDomTabbableNode}else Ei(B)||(Q=R.nextTabbableNode(N))}}else Q=f("fallbackFocus");return Q},v=function(_){var N=ba(_);return 0<=d(N,_)?void 0:ui(l.clickOutsideDeactivates,_)?void o.deactivate({returnFocus:l.returnFocusOnDeactivate}):void(ui(l.allowOutsideClick,_)||_.preventDefault())},k=function(_){var N=ba(_),B=0<=d(N,_);if(B||N instanceof Document)B&&(c.mostRecentlyFocusedNode=N);else{_.stopImmediatePropagation();var H,U=!0;if(!c.mostRecentlyFocusedNode)U=!1;else if(0<fr(c.mostRecentlyFocusedNode)){var Q=d(c.mostRecentlyFocusedNode),X=c.containerGroups[Q].tabbableNodes;if(0<X.length){var R=X.findIndex(function(ae){return ae===c.mostRecentlyFocusedNode});0<=R&&(l.isKeyForward(c.recentNavEvent)?R+1<X.length&&(H=X[R+1],U=!1):0<=R-1&&(H=X[R-1],U=!1))}}else c.containerGroups.some(function(ae){return ae.tabbableNodes.some(function(se){return 0<fr(se)})})||(U=!1);U&&(H=E({target:c.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(c.recentNavEvent)})),m(H||c.mostRecentlyFocusedNode||g())}c.recentNavEvent=void 0},C=function(_){var N=1<arguments.length&&arguments[1]!==void 0&&arguments[1];c.recentNavEvent=_;var B=E({event:_,isBackward:N});B&&(Ei(_)&&_.preventDefault(),m(B))},M=function(_){(l.isKeyForward(_)||l.isKeyBackward(_))&&C(_,l.isKeyBackward(_))},I=function(_){dI(_)&&ui(l.escapeDeactivates,_)!==!1&&(_.preventDefault(),o.deactivate())},D=function(_){var N=ba(_);0<=d(N,_)||ui(l.clickOutsideDeactivates,_)||ui(l.allowOutsideClick,_)||(_.preventDefault(),_.stopImmediatePropagation())},z=function(){if(c.active)return pm.activateTrap(a,o),c.delayInitialFocusTimer=l.delayInitialFocus?gm(function(){m(g())}):m(g()),i.addEventListener("focusin",k,!0),i.addEventListener("mousedown",v,{capture:!0,passive:!1}),i.addEventListener("touchstart",v,{capture:!0,passive:!1}),i.addEventListener("click",D,{capture:!0,passive:!1}),i.addEventListener("keydown",M,{capture:!0,passive:!1}),i.addEventListener("keydown",I),o},A=function(){if(c.active)return i.removeEventListener("focusin",k,!0),i.removeEventListener("mousedown",v,!0),i.removeEventListener("touchstart",v,!0),i.removeEventListener("click",D,!0),i.removeEventListener("keydown",M,!0),i.removeEventListener("keydown",I),o},J=function(_){var N=_.some(function(B){var H=Array.from(B.removedNodes);return H.some(function(U){return U===c.mostRecentlyFocusedNode})});N&&m(g())},V=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(J):void 0,F=function(){V&&(V.disconnect(),c.active&&!c.paused&&c.containers.map(function(_){V.observe(_,{subtree:!0,childList:!0})}))};return o={get active(){return c.active},get paused(){return c.paused},activate:function(_){if(c.active)return this;var N=u(_,"onActivate"),B=u(_,"onPostActivate"),H=u(_,"checkCanFocusTrap");H||b(),c.active=!0,c.paused=!1,c.nodeFocusedBeforeActivation=i.activeElement,N==null||N();var U=function(){H&&b(),z(),F(),B==null||B()};return H?(H(c.containers.concat()).then(U,U),this):(U(),this)},deactivate:function(_){if(!c.active)return this;var N=fm({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},_);clearTimeout(c.delayInitialFocusTimer),c.delayInitialFocusTimer=void 0,A(),c.active=!1,c.paused=!1,F(),pm.deactivateTrap(a,o);var B=u(N,"onDeactivate"),H=u(N,"onPostDeactivate"),U=u(N,"checkCanReturnFocus"),Q=u(N,"returnFocus","returnFocusOnDeactivate");B==null||B();var X=function(){gm(function(){Q&&m(y(c.nodeFocusedBeforeActivation)),H==null||H()})};return Q&&U?(U(y(c.nodeFocusedBeforeActivation)).then(X,X),this):(X(),this)},pause:function(_){if(c.paused||!c.active)return this;var N=u(_,"onPause"),B=u(_,"onPostPause");return c.paused=!0,N==null||N(),A(),F(),B==null||B(),this},unpause:function(_){if(!c.paused||!c.active)return this;var N=u(_,"onUnpause"),B=u(_,"onPostUnpause");return c.paused=!1,N==null||N(),b(),z(),F(),B==null||B(),this},updateContainerElements:function(_){var N=[].concat(_).filter(Boolean);return c.containers=N.map(function(B){return typeof B=="string"?i.querySelector(B):B}),c.active&&b(),F(),this}},o.updateContainerElements(n),o},mI=Object.freeze({__proto__:null,createFocusTrap:hI}),bI=Q0(mI),vI=Q0(aI);function Yo(t){"@babel/helpers - typeof";return Yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yo(t)}function yI(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function wI(t,n){for(var r,o=0;o<n.length;o++)r=n[o],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,lw(r.key),r)}function xI(t,n,r){return n&&wI(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function jI(t,n,r){return n=sl(n),EI(t,aw()?Reflect.construct(n,r||[],sl(t).constructor):n.apply(t,r))}function EI(t,n){if(n&&(Yo(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kI(t)}function kI(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function aw(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aw=function(){return!!t})()}function sl(t){return sl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},sl(t)}function OI(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Lu(t,n)}function Lu(t,n){return Lu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Lu(t,n)}function SI(t,n,r){return(n=lw(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function lw(t){var n=CI(t,"string");return Yo(n)=="symbol"?n:n+""}function CI(t,n){if(Yo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n);if(Yo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""}var va=S,Se=x,PI=bI,II=PI.createFocusTrap,DI=vI,TI=DI.isFocusable,Au=function(t){function n(r){var o;yI(this,n),o=jI(this,n,[r]),SI(o,"getNodeForOption",function(l){var c,u=(c=this.internalOptions[l])!==null&&c!==void 0?c:this.originalOptions[l];if(typeof u=="function"){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];u=u.apply(void 0,f)}if(u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(l,"` was specified but was not a node, or did not return a node"))}var b=u;if(typeof u=="string"){var h;if(b=(h=this.getDocument())===null||h===void 0?void 0:h.querySelector(u),!b)throw new Error("`".concat(l,"` as selector refers to no known node"))}return b}),o.handleDeactivate=o.handleDeactivate.bind(o),o.handlePostDeactivate=o.handlePostDeactivate.bind(o),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(o),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=r.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a=="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){o.originalOptions[a]=i[a];continue}o.internalOptions[a]=i[a]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return OI(n,t),xI(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document>"u"?void 0:document)}},{key:"getReturnFocusNode",value:function(){var o=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return o||o!==!1&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var o=this.getDocument();o&&(this.previouslyFocusedElement=o.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(o){var i=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,o):this.originalOptions.clickOutsideDeactivates;return i&&(this.outsideClick={target:o.target,allowDeactivation:i}),i}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var o=this,i=function(){var l=o.getReturnFocusNode(),c=!!(o.originalOptions.returnFocusOnDeactivate&&l!==null&&l!==void 0&&l.focus&&(!o.outsideClick||o.outsideClick.allowDeactivation&&!TI(o.outsideClick.target,o.internalOptions.tabbableOptions))),u=o.internalOptions.preventScroll,d=u!==void 0&&u;c&&l.focus({preventScroll:d}),o.originalOptions.onPostDeactivate&&o.originalOptions.onPostDeactivate.call(null),o.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(i,i):i()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var o=this.focusTrapElements.some(Boolean);o&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(o){if(this.focusTrap){o.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var i=!o.active&&this.props.active,a=o.active&&!this.props.active,l=!o.paused&&this.props.paused,c=o.paused&&!this.props.paused;if(i&&(this.updatePreviousElement(),this.focusTrap.activate()),a)return void this.deactivateTrap();l&&this.focusTrap.pause(),c&&this.focusTrap.unpause()}else o.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var o=this,i=this.props.children?va.Children.only(this.props.children):void 0;if(i){if(i.type&&i.type===va.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var a=function(u){var d=o.props.containerElements;i&&(typeof i.ref=="function"?i.ref(u):i.ref&&(i.ref.current=u)),o.focusTrapElements=d||[u]},l=va.cloneElement(i,{ref:a});return l}return null}}])}(va.Component),di=typeof Element>"u"?Function:Element;Au.propTypes={active:Se.bool,paused:Se.bool,focusTrapOptions:Se.shape({document:Se.object,onActivate:Se.func,onPostActivate:Se.func,checkCanFocusTrap:Se.func,onPause:Se.func,onPostPause:Se.func,onUnpause:Se.func,onPostUnpause:Se.func,onDeactivate:Se.func,onPostDeactivate:Se.func,checkCanReturnFocus:Se.func,initialFocus:Se.oneOfType([Se.instanceOf(di),Se.string,Se.bool,Se.func]),fallbackFocus:Se.oneOfType([Se.instanceOf(di),Se.string,Se.func]),escapeDeactivates:Se.oneOfType([Se.bool,Se.func]),clickOutsideDeactivates:Se.oneOfType([Se.bool,Se.func]),returnFocusOnDeactivate:Se.bool,setReturnFocus:Se.oneOfType([Se.instanceOf(di),Se.string,Se.bool,Se.func]),allowOutsideClick:Se.oneOfType([Se.bool,Se.func]),preventScroll:Se.bool,tabbableOptions:Se.shape({displayCheck:Se.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:Se.oneOfType([Se.bool,Se.func])}),trapStack:Se.array,isKeyForward:Se.func,isKeyBackward:Se.func}),containerElements:Se.arrayOf(Se.instanceOf(di)),children:Se.oneOfType([Se.element,Se.instanceOf(di)])},Au.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:II};var MI=Au;G0(MI);x.string,x.string,x.string,x.oneOf(["small","large"]),x.string,x.string,x.oneOf(_n),x.oneOf(_n),x.bool,x.node,x.element,x.bool,x.bool,x.string,x.func,x.func,x.bool,x.bool,x.oneOfType([x.element,x.string]);x.string,x.bool,x.string,x.node;const RI=(t,n,r)=>`
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
      ${r==="large"?`
          jn-w-[90%]
          xl:jn-w-[80%]
          2xl:jn-w-[1228px]`:`
          jn-w-[75%]
          xl:jn-w-[55%]
          2xl:jn-w-[844px]`}
			${t?"":"jn-translate-x-[100%]"}
			${t||n?"":"jn-invisible"}
		`.replace(/\n/g," ").replace(/\s+/g," "),NI=`
  jn-overflow-auto
`,FI=`
  jn-flex
  jn-items-center
  jn-py-4
  jn-px-8
`,LI=`
  jn-text-theme-high
  jn-text-lg
  jn-font-bold
`,sw=t=>{let{heading:n="",size:r,className:o="",opened:i=!1,closeable:a=!0,onClose:l,children:c,...u}=t;const[d,f]=p.useState(i),[g,b]=p.useState(a),[h,m]=p.useState(!1);p.useEffect(()=>{f(i)},[i]),p.useEffect(()=>{b(a)},[a]);const y=S.useRef(null);return S.useEffect(()=>()=>clearTimeout(y.current),[]),p.useEffect(()=>{d||(m(!0),clearTimeout(y.current),y.current=setTimeout(()=>m(!1),500))},[d]),S.createElement("div",he({className:`juno-panel ${RI(d,h,r)} ${o}`,role:"dialog","aria-labelledby":"juno-panel-title"},u),S.createElement("div",{className:`juno-panel-header ${FI}`},S.createElement("div",{className:`juno-panel-title ${LI}`,id:"juno-panel-title"},n),g&&S.createElement(sn,{icon:"close",onClick:E=>{f(!1),l&&l(E)},className:"juno-panel-close jn-ml-auto"})),S.createElement("div",{className:`juno-panel-content-wrapper ${NI}`},c))};sw.propTypes={heading:x.node,size:x.oneOf(["default","large"]),opened:x.bool,closeable:x.bool,onClose:x.func,className:x.string,children:x.node};const AI=`
  
`,_I=`
  jn-px-8
  jn-py-4
`,cw=t=>{let{className:n="",footer:r,children:o,...i}=t;return S.createElement("div",he({className:`juno-panel-body ${AI}  ${n}`},i),S.createElement("div",{className:`juno-panel-body-content ${_I}`},o),r)};cw.propTypes={className:x.string,children:x.any,footer:x.element};x.string,x.any;var $I=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))($I||{}),zI=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(zI||{}),HI=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(HI||{}),BI=(t=>(t[t.OpenListbox=0]="OpenListbox",t[t.CloseListbox=1]="CloseListbox",t[t.GoToOption=2]="GoToOption",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterOption=5]="RegisterOption",t[t.UnregisterOption=6]="UnregisterOption",t[t.RegisterLabel=7]="RegisterLabel",t))(BI||{});function Hs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=Ll(n(t.options.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{options:o,activeOptionIndex:i}}let VI={1(t){return t.dataRef.current.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},0(t){if(t.dataRef.current.disabled||t.listboxState===0)return t;let n=t.activeOptionIndex,{isSelected:r}=t.dataRef.current,o=t.options.findIndex(i=>r(i.dataRef.current.value));return o!==-1&&(n=o),{...t,listboxState:0,activeOptionIndex:n}},2(t,n){var r;if(t.dataRef.current.disabled||t.listboxState===1)return t;let o=Hs(t),i=Qa(n,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeOptionIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{if(t.dataRef.current.disabled||t.listboxState===1)return t;let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeOptionIndex===null?t.options:t.options.slice(t.activeOptionIndex+r).concat(t.options.slice(0,t.activeOptionIndex+r))).find(l=>{var c;return!l.dataRef.current.disabled&&((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))}),a=i?t.options.indexOf(i):-1;return a===-1||a===t.activeOptionIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeOptionIndex:a,activationTrigger:1}},4(t){return t.dataRef.current.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},5:(t,n)=>{let r={id:n.id,dataRef:n.dataRef},o=Hs(t,i=>[...i,r]);return t.activeOptionIndex===null&&t.dataRef.current.isSelected(n.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(r)),{...t,...o}},6:(t,n)=>{let r=Hs(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}},7:(t,n)=>({...t,labelId:n.id})},Jf=p.createContext(null);Jf.displayName="ListboxActionsContext";function Qi(t){let n=p.useContext(Jf);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Qi),r}return n}let Xf=p.createContext(null);Xf.displayName="ListboxDataContext";function Zi(t){let n=p.useContext(Xf);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Zi),r}return n}function WI(t,n){return rt(n.type,VI,t,n)}let UI=p.Fragment;function qI(t,n){let{value:r,defaultValue:o,form:i,name:a,onChange:l,by:c=(T,ie)=>T===ie,disabled:u=!1,horizontal:d=!1,multiple:f=!1,...g}=t;const b=d?"horizontal":"vertical";let h=xt(n),[m=f?[]:void 0,y]=$1(r,l,o),[E,v]=p.useReducer(WI,{dataRef:p.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),k=p.useRef({static:!1,hold:!1}),C=p.useRef(null),M=p.useRef(null),I=p.useRef(null),D=pe(typeof c=="string"?(T,ie)=>{let ye=c;return(T==null?void 0:T[ye])===(ie==null?void 0:ie[ye])}:c),z=p.useCallback(T=>rt(A.mode,{1:()=>m.some(ie=>D(ie,T)),0:()=>D(m,T)}),[m]),A=p.useMemo(()=>({...E,value:m,disabled:u,mode:f?1:0,orientation:b,compare:D,isSelected:z,optionsPropsRef:k,labelRef:C,buttonRef:M,optionsRef:I}),[m,u,f,E]);Ge(()=>{E.dataRef.current=A},[A]),Mf([A.buttonRef,A.optionsRef],(T,ie)=>{var ye;v({type:1}),Fl(ie,Nl.Loose)||(T.preventDefault(),(ye=A.buttonRef.current)==null||ye.focus())},A.listboxState===0);let J=p.useMemo(()=>({open:A.listboxState===0,disabled:u,value:m}),[A,u,m]),V=pe(T=>{let ie=A.options.find(ye=>ye.id===T);ie&&U(ie.dataRef.current.value)}),F=pe(()=>{if(A.activeOptionIndex!==null){let{dataRef:T,id:ie}=A.options[A.activeOptionIndex];U(T.current.value),v({type:2,focus:Fe.Specific,id:ie})}}),L=pe(()=>v({type:0})),_=pe(()=>v({type:1})),N=pe((T,ie,ye)=>T===Fe.Specific?v({type:2,focus:Fe.Specific,id:ie,trigger:ye}):v({type:2,focus:T,trigger:ye})),B=pe((T,ie)=>(v({type:5,id:T,dataRef:ie}),()=>v({type:6,id:T}))),H=pe(T=>(v({type:7,id:T}),()=>v({type:7,id:null}))),U=pe(T=>rt(A.mode,{0(){return y==null?void 0:y(T)},1(){let ie=A.value.slice(),ye=ie.findIndex(Pe=>D(Pe,T));return ye===-1?ie.push(T):ie.splice(ye,1),y==null?void 0:y(ie)}})),Q=pe(T=>v({type:3,value:T})),X=pe(()=>v({type:4})),R=p.useMemo(()=>({onChange:U,registerOption:B,registerLabel:H,goToOption:N,closeListbox:_,openListbox:L,selectActiveOption:F,selectOption:V,search:Q,clearSearch:X}),[]),ae=p.useRef(null),se=wn();return p.useEffect(()=>{ae.current&&o!==void 0&&se.addEventListener(ae.current,"reset",()=>{y==null||y(o)})},[ae,y]),S.createElement(Jf.Provider,{value:R},S.createElement(Xf.Provider,{value:A},S.createElement(_l,{value:rt(A.listboxState,{0:ut.Open,1:ut.Closed})},a!=null&&m!=null&&Kf({[a]:m}).map((T,ie)=>{let[ye,Pe]=T;return S.createElement(z1,{features:Yf.Hidden,ref:ie===0?$e=>{var oe;ae.current=(oe=$e==null?void 0:$e.closest("form"))==null?null:oe}:void 0,...Ga({key:ye,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:u,name:ye,value:Pe})})}),ht({ourProps:{ref:h},theirProps:g,slot:J,defaultTag:UI,name:"Listbox"}))))}let YI="button";function KI(t,n){var r;let o=cn(),{id:i=`headlessui-listbox-button-${o}`,...a}=t,l=Zi("Listbox.Button"),c=Qi("Listbox.Button"),u=xt(l.buttonRef,n),d=wn(),f=pe(E=>{switch(E.key){case Te.Space:case Te.Enter:case Te.ArrowDown:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Fe.First)});break;case Te.ArrowUp:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Fe.Last)})}}),g=pe(E=>{switch(E.key){case Te.Space:E.preventDefault()}}),b=pe(E=>Lf(E.currentTarget)?E.preventDefault():void(l.listboxState===0?(c.closeListbox(),d.nextFrame(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})})):(E.preventDefault(),c.openListbox()))),h=Ki(()=>{if(l.labelId)return[l.labelId,i].join(" ")},[l.labelId,i]),m=p.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled,value:l.value}),[l]),y={ref:u,id:i,type:Rf(t,l.buttonRef),"aria-haspopup":"listbox","aria-controls":(r=l.optionsRef.current)==null?void 0:r.id,"aria-expanded":l.listboxState===0,"aria-labelledby":h,disabled:l.disabled,onKeyDown:f,onKeyUp:g,onClick:b};return ht({ourProps:y,theirProps:a,slot:m,defaultTag:YI,name:"Listbox.Button"})}let GI="label";function QI(t,n){let r=cn(),{id:o=`headlessui-listbox-label-${r}`,...i}=t,a=Zi("Listbox.Label"),l=Qi("Listbox.Label"),c=xt(a.labelRef,n);Ge(()=>l.registerLabel(o),[o]);let u=pe(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return ht({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:GI,name:"Listbox.Label"})}let ZI="ul",JI=Er.RenderStrategy|Er.Static;function XI(t,n){var r;let o=cn(),{id:i=`headlessui-listbox-options-${o}`,...a}=t,l=Zi("Listbox.Options"),c=Qi("Listbox.Options"),u=xt(l.optionsRef,n),d=wn(),f=wn(),g=qi(),b=g===null?l.listboxState===0:(g&ut.Open)===ut.Open;p.useEffect(()=>{var v;let k=l.optionsRef.current;k&&l.listboxState===0&&k!==((v=Ui(k))==null?void 0:v.activeElement)&&k.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let h=pe(v=>{switch(f.dispose(),v.key){case Te.Space:if(l.searchQuery!=="")return v.preventDefault(),v.stopPropagation(),c.search(v.key);case Te.Enter:if(v.preventDefault(),v.stopPropagation(),l.activeOptionIndex!==null){let{dataRef:k}=l.options[l.activeOptionIndex];c.onChange(k.current.value)}l.mode===0&&(c.closeListbox(),Bt().nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}));break;case rt(l.orientation,{vertical:Te.ArrowDown,horizontal:Te.ArrowRight}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.Next);case rt(l.orientation,{vertical:Te.ArrowUp,horizontal:Te.ArrowLeft}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.Previous);case Te.Home:case Te.PageUp:return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.First);case Te.End:case Te.PageDown:return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.Last);case Te.Escape:return v.preventDefault(),v.stopPropagation(),c.closeListbox(),d.nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})});case Te.Tab:v.preventDefault(),v.stopPropagation();break;default:v.key.length===1&&(c.search(v.key),f.setTimeout(()=>c.clearSearch(),350))}}),m=Ki(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.id},[l.buttonRef.current]),y=p.useMemo(()=>({open:l.listboxState===0}),[l]),E={"aria-activedescendant":l.activeOptionIndex===null||(r=l.options[l.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":l.mode===1||void 0,"aria-labelledby":m,"aria-orientation":l.orientation,id:i,onKeyDown:h,role:"listbox",tabIndex:0,ref:u};return ht({ourProps:E,theirProps:a,slot:y,defaultTag:ZI,features:JI,visible:b,name:"Listbox.Options"})}let eD="li";function tD(t,n){let r=cn(),{id:o=`headlessui-listbox-option-${r}`,disabled:i=!1,value:a,...l}=t,c=Zi("Listbox.Option"),u=Qi("Listbox.Option"),d=c.activeOptionIndex!==null&&c.options[c.activeOptionIndex].id===o,f=c.isSelected(a),g=p.useRef(null),b=q1(g),h=bn({disabled:i,value:a,domRef:g,get textValue(){return b()}}),m=xt(n,g);Ge(()=>{if(c.listboxState===0&&d&&c.activationTrigger!==0){let D=Bt();return D.requestAnimationFrame(()=>{var z,A;(A=(z=g.current)==null?void 0:z.scrollIntoView)==null||A.call(z,{block:"nearest"})}),D.dispose}},[g,d,c.listboxState,c.activationTrigger,c.activeOptionIndex]),Ge(()=>u.registerOption(o,h),[h,o]);let y=pe(D=>i?D.preventDefault():(u.onChange(a),void(c.mode===0&&(u.closeListbox(),Bt().nextFrame(()=>{var z;return(z=c.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}))))),E=pe(()=>i?u.goToOption(Fe.Nothing):void u.goToOption(Fe.Specific,o)),v=Nf(),k=pe(D=>v.update(D)),C=pe(D=>{v.wasMoved(D)&&(i||d||u.goToOption(Fe.Specific,o,0))}),M=pe(D=>{v.wasMoved(D)&&(i||d&&u.goToOption(Fe.Nothing))}),I=p.useMemo(()=>({active:d,selected:f,disabled:i}),[d,f,i]);return ht({ourProps:{id:o,ref:m,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,"aria-selected":f,disabled:void 0,onClick:y,onFocus:E,onPointerEnter:k,onMouseEnter:k,onPointerMove:C,onMouseMove:C,onPointerLeave:M,onMouseLeave:M},theirProps:l,slot:I,defaultTag:eD,name:"Listbox.Option"})}let nD=ft(qI),rD=ft(KI),oD=ft(QI),iD=ft(XI),aD=ft(tD),bi=Object.assign(nD,{Button:rD,Label:oD,Options:iD,Option:aD});const lD=`
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`,sD=`
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
`,cD=`
  jn-border
  jn-border-theme-success
`,uD=`
  jn-border
  jn-border-theme-error
`,dD=`
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`,fD=`
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`,pD=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,uw=p.createContext(),_u=t=>{let{ariaLabel:n="",children:r=null,className:o="",defaultValue:i,disabled:a=!1,error:l=!1,errortext:c="",helptext:u="",id:d="",invalid:f=!1,label:g,loading:b=!1,multiple:h=!1,name:m,onChange:y,onValueChange:E,placeholder:v="Select…",required:k=!1,successtext:C="",truncateOptions:M=!1,valid:I=!1,value:D,valueLabel:z,variant:A="default",width:J="full",wrapperClassName:V="",...F}=t;const L=be=>typeof be!="string"||be.trim().length!==0,_=d||"juno-select-"+p.useId(),N="juno-select-helptext-"+p.useId(),[B,H]=p.useState(new Map),[U,Q]=p.useState(!1),[X,R]=p.useState(!1),[ae,se]=p.useState(!1),[T,ie]=p.useState(!1),ye=p.useMemo(()=>f||!!(c&&L(c)),[f,c]),Pe=p.useMemo(()=>I||!!(C&&L(C)),[I,C]);p.useEffect(()=>{Q(l)},[l]),p.useEffect(()=>{R(ye)},[ye]),p.useEffect(()=>{se(Pe)},[Pe]),p.useEffect(()=>{ie(b)},[b]);const $e=ty(),oe=[j1(4),nC({crossAxis:!0,allowedPlacements:["bottom","top"]}),tC({boundary:"viewport",apply(be){let{availableWidth:He,availableHeight:it,elements:Ze}=be;Object.assign(Ze.floating.style,{maxWidth:`${He}px`,maxHeight:`${it}px`,overflowY:"auto"})}}),E1()],me=be=>{const He=Ze=>{var Wn;const Pt=B.get(Ze);if(Pt)return(Wn=Pt.displayName)!=null&&Wn.length?Pt.displayName:null};return be.map(Ze=>He(Ze)).filter(Ze=>Ze&&0<Ze.toString().trim().length).join(", ")};return S.createElement(uw.Provider,{value:{truncateOptions:M,addOptionValueAndLabel:(be,He,it)=>{H(Ze=>new Map(Ze).set(be||it,{val:be,label:He,children:it,displayName:it||He||be}))}}},S.createElement("div",{className:`
          juno-select-wrapper 
          jn-relative
          ${J=="auto"?"jn-inline-block":"jn-block"}
          ${J=="auto"?"jn-w-auto":"jn-w-full"}
          ${V}
        `},S.createElement(bi,{disabled:a||T||U,multiple:h,name:m,onChange:be=>{y&&y(be||""),E&&E(be||"")},value:D,defaultValue:i},g&&L(g)?S.createElement(bi.Label,{as:Ru,htmlFor:_,text:g,className:`${lD}`,disabled:a||T||U,required:k,floating:!0,minimized:!0}):"",S.createElement(Ms,{composable:!0,adaptiveWidth:!0,middleware:oe},S.createElement(Ms.Reference,null,S.createElement(bi.Button,he({"aria-describedby":u?N:"","aria-label":n||g,as:"button",id:_,className:`
                    juno-select-toggle
                    ${A&&A.length?"juno-select-toggle-"+A:"juno-select-toggle-default"}
                    ${J=="auto"?"jn-w-auto":"jn-w-full"}
                    ${sD}
                    ${g&&L(g)?"jn-pt-[0.4rem]":""}
                    ${a?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}
                    ${T||U?"jn-justify-center":"jn-justify-between"}
                    ${X?"juno-select-invalid "+uD:""} 
                    ${ae?"juno-select-valid "+cD:""}  
                    
                    ${T?"juno-select-loading jn-cursor-not-allowed":""}
                    ${U?"juno-select-error jn-cursor-not-allowed":""}
                    ${o}
                  `},F),be=>{var Ze;let{open:He,value:it}=be;return U||T?S.createElement("span",{className:`${dD}`},U?S.createElement(sn,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):T?S.createElement(Tf,{className:"jn-cursor-not-allowed"}):""):S.createElement(S.Fragment,null,S.createElement("span",{className:`${pD}`},h?me(it)||z||it.join(", ")||v:((Ze=B.get(it))==null?void 0:Ze.displayName)||z||it||v),S.createElement("span",{className:"jn-flex"},ae?S.createElement(sn,{icon:"checkCircle",color:"jn-text-theme-success"}):"",X?S.createElement(sn,{icon:"dangerous",color:"jn-text-theme-error"}):"",S.createElement("span",null,S.createElement(sn,{icon:He?"expandLess":"expandMore"}))))})),or.createPortal(S.createElement(Ms.Content,null,S.createElement(bi.Options,{unmount:!1,className:`
                        juno-select-menu
                        ${fD}
                      `},r)),$e||document.body))),c&&L(c)?S.createElement(xi,{text:c,variant:"error"}):"",C&&L(C)?S.createElement(xi,{text:C,variant:"success"}):"",u&&L(u)?S.createElement(xi,{text:u,id:N}):""))},gD=t=>{const{multiple:n,value:r}=t;if(r){if(n&&!Array.isArray(r))return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.");if(!n&&typeof r!="string")return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")}};_u.propTypes={ariaLabel:x.string,children:x.node,className:x.string,defaultValue:x.string,disabled:x.bool,error:x.bool,errortext:x.node,helptext:x.node,id:x.string,invalid:x.bool,label:x.string,loading:x.bool,multiple:x.bool,name:x.string,onChange:x.func,onValueChange:x.func,placeholder:x.string,required:x.bool,successtext:x.node,truncateOptions:x.bool,valid:x.bool,value:gD,valueLabel:x.string,variant:x.oneOf(["default","primary","primary-danger","subdued"]),width:x.oneOf(["full","auto"]),wrapperClassName:x.string};const hD=`
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
`,mD=`
  jn-text-theme-default
  jn-pl-[2.375rem]
`,bD=`
  jn-text-theme-accent
  jn-pl-3.5
`,vD=`
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`,yD=`
  jn-opacity-50
  jn-cursor-not-allowed
`,wD=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,$u=t=>{let{children:n,className:r="",disabled:o=!1,value:i="",label:a,...l}=t;const c=p.useContext(uw),{truncateOptions:u,addOptionValueAndLabel:d}=c||{};return p.useEffect(()=>{d(i,a,n)},[i,a,n]),S.createElement(bi.Option,{as:p.Fragment,disabled:o,value:i||n},f=>{let{selected:g}=f;return S.createElement("li",he({className:`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${hD}
          ${g?"juno-select-option-selected "+bD:mD}
          ${o?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}
          ${u?"juno-select-option-truncate":""}
          ${r}
        `},l),g?S.createElement(sn,{icon:"check",size:"18",className:`${vD}`}):"",S.createElement("span",{className:`
            ${o?yD:""}
            ${u?wD:""}
          `},n||a||i))})};$u.propTypes={children:x.string,className:x.string,disabled:x.bool,value:x.string,label:x.string};x.oneOf(["","number","select","input"]),x.number,x.number,x.bool,x.bool,x.func,x.func,x.func,x.func,x.string;var xD=function(t){return`
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
  `)},jD=function(t){return`
    jn-bg-theme-background-lvl-4
    jn-text-theme-high
    `.concat(t?"group-hover:jn-text-theme-highest":"",`
    jn-px-1
    jn-py-0.5
    jn-rounded-sm
    jn-inline-block
  `)},mm=function(t){return`
    jn-px-1
    jn-py-0.5
    jn-text-theme-high
    `.concat(t?"group-hover:jn-text-theme-highest":"",`
    jn-inline-block
  `)},dw=function(t){var n=t.uid,r=n===void 0?"":n,o=t.pillKey,i=o===void 0?"":o,a=t.pillKeyLabel,l=a===void 0?"":a,c=t.pillValue,u=c===void 0?"":c,d=t.pillValueLabel,f=d===void 0?"":d,g=t.closeable,b=t.onClick,h=b===void 0?void 0:b,m=t.onClose,y=m===void 0?void 0:m,E=t.className,v=E===void 0?"":E,k=at(t,["uid","pillKey","pillKeyLabel","pillValue","pillValueLabel","closeable","onClick","onClose","className"]),C=function(I){y&&y(I,r||i||u)},M=function(I){h&&h(I,r||i||u)};return S.createElement("div",de({className:"juno-pill ".concat(xD(!!h)," ").concat(v)},k),u||f?S.createElement(S.Fragment,null,(l||i)&&S.createElement("span",{className:"pill-key ".concat(jD(!!h)),onClick:function(I){return M(I)}},l||i),S.createElement("span",{className:"pill-value ".concat(mm(!!h)),onClick:function(I){return M(I)}},f||u)):S.createElement("span",{className:"".concat(mm(!1))},"set pillValue or pillValueLabel"),g!==void 0&&g&&S.createElement(eo,{icon:"close",size:18,onClick:function(I){return C(I)}}))};p.createContext({});const ED=`
  jn-h-px 
  jn-w-full
  jn-bg-theme-background-lvl-3
`,bm=S.forwardRef((t,n)=>{let{className:r="",...o}=t;return S.createElement("div",he({className:`juno-select-divider ${ED} ${r}`,ref:n},o))});bm.displayName="SelectDivider",bm.propTypes={className:x.string};x.string,x.string,x.string,x.string,x.node,x.bool,x.string,x.bool,x.bool,x.string,x.node,x.bool,x.string,x.oneOf(["default","primary","primary-danger","subdued"]),x.func,x.func,x.func,x.string,x.bool,x.bool,x.bool,x.string;p.createContext(void 0);var kD=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,OD=`
  jn-text-theme-accent
`,SD=`
  jn-text-theme-danger 
`,CD=`
  jn-text-theme-success
`,PD=`
  jn-text-theme-warning  
`,ID=`
  jn-text-theme-on-default
`,DD=function(t){var n=t.variant,r=n===void 0?"default":n,o=t.size,i=o===void 0?null:o,a=t.className,l=a===void 0?"":a,c=t.color,u=c===void 0?"":c,d=at(t,["variant","size","className","color"]),f=function(b){return b==="small"?"1rem":b==="large"?"3rem":b},g=i?{width:f(i),height:f(i)}:{};return S.createElement("svg",de({className:"juno-spinner ".concat(kD," ").concat(u||function(){return r==="primary"?OD:r==="danger"?SD:r==="success"?CD:r==="warning"?PD:ID}()," ").concat(l),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:g,role:"progressbar"},d),S.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))},TD=function(t){return t==="0"?"jn-gap-0":t==="px"?"jn-gap-px":t==="0.5"?"jn-gap-0.5":t==="1"?"jn-gap-1":t==="1.5"?"jn-gap-1.5":t==="2"?"jn-gap-2":t==="2.5"?"jn-gap-2.5":t==="3"?"jn-gap-3":t==="3.5"?"jn-gap-3.5":t==="4"?"jn-gap-4":t==="5"?"jn-gap-5":t==="6"?"jn-gap-6":t==="7"?"jn-gap-7":t==="8"?"jn-gap-8":t==="9"?"jn-gap-9":t==="10"?"jn-gap-10":t==="11"?"jn-gap-11":t==="12"?"jn-gap-12":t==="14"?"jn-gap-14":t==="16"?"jn-gap-16":t==="20"?"jn-gap-20":t==="24"?"jn-gap-24":t==="28"?"jn-gap-28":t==="32"?"jn-gap-32":t==="36"?"jn-gap-36":t==="40"?"jn-gap-40":t==="44"?"jn-gap-44":t==="48"?"jn-gap-48":t==="52"?"jn-gap-52":t==="56"?"jn-gap-56":t==="60"?"jn-gap-60":t==="64"?"jn-gap-64":t==="72"?"jn-gap-72":t==="80"?"jn-gap-80":t==="96"?"jn-gap-96":"jn-gap-0"},MD=function(t,n,r){return`
      `.concat(t==="vertical"?"jn-flex jn-flex-col":"jn-flex jn-flex-row",`
      `).concat(r&&"jn-flex-wrap",`
      `).concat(TD(n),`
    `)},RD=function(t){return t==="start"?"jn-items-start":t==="end"?"jn-items-end":t==="center"?"jn-items-center":t==="baseline"?"jn-items-baseline":t==="stretch"?"jn-items-stretch":""},ND=function(t){return t==="start"?"jn-justify-start":t==="end"?"jn-justify-end":t==="center"?"jn-justify-center":t==="between"?"jn-justify-between":t==="around"?"jn-justify-around":t==="evenly"?"jn-justify-evenly":""},Ln=function(t){var n=t.direction,r=n===void 0?"horizontal":n,o=t.gap,i=o===void 0?"0":o,a=t.alignment,l=a===void 0?"stretch":a,c=t.distribution,u=c===void 0?"start":c,d=t.wrap,f=t.className,g=f===void 0?"":f,b=t.children,h=b===void 0?null:b,m=at(t,["direction","gap","alignment","distribution","wrap","className","children"]);return S.createElement("div",de({className:"juno-stack ".concat(MD(r,i,d!==void 0&&d)," ").concat(RD(l)," ").concat(ND(u)," ").concat(g||"")},m),h)};x.string,x.string,x.string,x.bool,x.oneOf(["small","default","large"]),x.bool,x.bool,x.bool,x.bool,x.node,x.node,x.node,x.string,x.func,x.func,x.string;x.string,x.string,x.string,x.bool,x.bool,x.node,x.bool,x.bool,x.string,x.bool,x.string,x.string,x.func,x.func;p.createContext(void 0);x.string,x.string,x.oneOfType([x.string,x.number]),x.string,x.string,x.bool,x.bool,x.bool,x.bool,x.bool,x.bool,x.string,x.string,x.func,x.func,x.func,x.node,x.node,x.node,x.oneOf(["full","auto"]),x.string;x.string,x.string,x.string,x.string,x.node,x.string,x.bool,x.bool,x.string,x.bool,x.string,x.string,x.bool,x.func;x.oneOf(["text","password","email","tel","url","number"]),x.string,x.string,x.string,x.string,x.string,x.node,x.bool,x.bool,x.string,x.bool,x.string,x.bool,x.string,x.bool,x.func,x.func,x.func;x.string,x.bool,x.string,x.string,x.func;function fw(t){return pw(t)?(t.nodeName||"").toLowerCase():"#document"}function Ji(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function FD(t){var n;return(n=(pw(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function pw(t){return t instanceof Node||t instanceof Ji(t).Node}function Jt(t){return t instanceof Element||t instanceof Ji(t).Element}function ql(t){return t instanceof HTMLElement||t instanceof Ji(t).HTMLElement}function zu(t){return typeof ShadowRoot<"u"&&(t instanceof ShadowRoot||t instanceof Ji(t).ShadowRoot)}function LD(t){return["html","body","#document"].includes(fw(t))}function AD(t){return Ji(t).getComputedStyle(t)}function _D(t){if(fw(t)==="html")return t;const n=t.assignedSlot||t.parentNode||zu(t)&&t.host||FD(t);return zu(n)?n.host:n}function $D(t){let n=t.activeElement;for(;((r=n)==null||(o=r.shadowRoot)==null?void 0:o.activeElement)!=null;){var r,o;n=n.shadowRoot.activeElement}return n}function Ti(t,n){if(!t||!n)return!1;const r=n.getRootNode&&n.getRootNode();if(t.contains(n))return!0;if(r&&zu(r))for(let o=n;o;){if(t===o)return!0;o=o.parentNode||o.host}return!1}function zD(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function HD(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(n=>{let{brand:r,version:o}=n;return r+"/"+o}).join(" "):navigator.userAgent}function BD(t){if(t.mozInputSource===0&&t.isTrusted)return!0;const n=/Android/i;return(n.test(zD())||n.test(HD()))&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}function VD(t){return t.width===0&&t.height===0||t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType!=="mouse"||1>t.width&&1>t.height&&t.pressure===0&&t.detail===0}function cl(t,n){const r=["mouse","pen"];return n||r.push("",void 0),r.includes(t)}function WD(t){return"nativeEvent"in t}function UD(t){return t.matches("html,body")}function Jn(t){return(t==null?void 0:t.ownerDocument)||document}function Aa(t,n){if(n==null)return!1;if("composedPath"in t)return t.composedPath().includes(n);const r=t;return r.target!=null&&n.contains(r.target)}function qD(t){return"composedPath"in t?t.composedPath()[0]:t.target}const YD="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function KD(t){return ql(t)&&t.matches(YD)}function Hu(t){return p.useMemo(()=>t.every(n=>n==null)?null:n=>{t.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})},t)}var Mi=typeof document>"u"?p.useEffect:p.useLayoutEffect;let Bs=!1,GD=0;const vm=()=>"floating-ui-"+GD++;function QD(){const[t,n]=p.useState(()=>Bs?vm():void 0);return Mi(()=>{t==null&&n(vm())},[]),p.useEffect(()=>{Bs||(Bs=!0)},[]),t}const ZD=Xr.useId,gw=ZD||QD;function JD(){const t=new Map;return{emit(n,r){var o;(o=t.get(n))==null||o.forEach(i=>i(r))},on(n,r){t.set(n,[...t.get(n)||[],r])},off(n,r){var o;t.set(n,((o=t.get(n))==null?void 0:o.filter(i=>i!==r))||[])}}}const XD=p.createContext(null),eT=p.createContext(null),hw=()=>{var t;return((t=p.useContext(XD))==null?void 0:t.id)||null},ep=()=>p.useContext(eT);function tp(t){return"data-floating-ui-"+t}function ym(t){const n=p.useRef(t);return Mi(()=>{n.current=t}),n}const wm=tp("safe-polygon");function Vs(t,n,r){return r&&!cl(r)?0:typeof t=="number"?t:t==null?void 0:t[n]}function tT(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,dataRef:i,events:a,elements:{domReference:l,floating:c},refs:u}=t,{enabled:d=!0,delay:f=0,handleClose:g=null,mouseOnly:b=!1,restMs:h=0,move:m=!0}=n,y=ep(),E=hw(),v=ym(g),k=ym(f),C=p.useRef(),M=p.useRef(),I=p.useRef(),D=p.useRef(),z=p.useRef(!0),A=p.useRef(!1),J=p.useRef(()=>{}),V=p.useCallback(()=>{var N;const B=(N=i.current.openEvent)==null?void 0:N.type;return(B==null?void 0:B.includes("mouse"))&&B!=="mousedown"},[i]);p.useEffect(()=>{function N(){clearTimeout(M.current),clearTimeout(D.current),z.current=!0}if(d)return a.on("dismiss",N),()=>{a.off("dismiss",N)}},[d,a]),p.useEffect(()=>{function N(H){V()&&o(!1,H)}if(!d||!v.current||!r)return;const B=Jn(c).documentElement;return B.addEventListener("mouseleave",N),()=>{B.removeEventListener("mouseleave",N)}},[c,r,o,d,v,i,V]);const F=p.useCallback(function(N,B){B===void 0&&(B=!0);const H=Vs(k.current,"close",C.current);H&&!I.current?(clearTimeout(M.current),M.current=setTimeout(()=>o(!1,N),H)):B&&(clearTimeout(M.current),o(!1,N))},[k,o]),L=p.useCallback(()=>{J.current(),I.current=void 0},[]),_=p.useCallback(()=>{if(A.current){const N=Jn(u.floating.current).body;N.style.pointerEvents="",N.removeAttribute(wm),A.current=!1}},[u]);return p.useEffect(()=>{function N(){return!!i.current.openEvent&&["click","mousedown"].includes(i.current.openEvent.type)}function B(Q){if(clearTimeout(M.current),z.current=!1,!(b&&!cl(C.current)||0<h&&Vs(k.current,"open")===0)){const X=Vs(k.current,"open",C.current);X?M.current=setTimeout(()=>{o(!0,Q)},X):o(!0,Q)}}function H(Q){if(N())return;J.current();const X=Jn(c);if(clearTimeout(D.current),v.current){r||clearTimeout(M.current),I.current=v.current({...t,tree:y,x:Q.clientX,y:Q.clientY,onClose(){_(),L(),F(Q)}});const ae=I.current;return X.addEventListener("mousemove",ae),void(J.current=()=>{X.removeEventListener("mousemove",ae)})}(C.current!=="touch"||!Ti(c,Q.relatedTarget))&&F(Q)}function U(Q){N()||(v.current==null||v.current({...t,tree:y,x:Q.clientX,y:Q.clientY,onClose(){_(),L(),F(Q)}})(Q))}if(d&&Jt(l)){const Q=l;return r&&Q.addEventListener("mouseleave",U),c==null||c.addEventListener("mouseleave",U),m&&Q.addEventListener("mousemove",B,{once:!0}),Q.addEventListener("mouseenter",B),Q.addEventListener("mouseleave",H),()=>{r&&Q.removeEventListener("mouseleave",U),c==null||c.removeEventListener("mouseleave",U),m&&Q.removeEventListener("mousemove",B),Q.removeEventListener("mouseenter",B),Q.removeEventListener("mouseleave",H)}}},[l,c,d,t,b,h,m,F,L,_,o,r,y,k,v,i]),Mi(()=>{var N;if(d&&r&&(N=v.current)!=null&&N.__options.blockPointerEvents&&V()){const U=Jn(c).body;if(U.setAttribute(wm,""),U.style.pointerEvents="none",A.current=!0,Jt(l)&&c){var B,H;const Q=l,X=y==null||(B=y.nodesRef.current.find(R=>R.id===E))==null||(H=B.context)==null?void 0:H.elements.floating;return X&&(X.style.pointerEvents=""),Q.style.pointerEvents="auto",c.style.pointerEvents="auto",()=>{Q.style.pointerEvents="",c.style.pointerEvents=""}}}},[d,r,E,c,l,y,v,i,V]),Mi(()=>{r||(C.current=void 0,L(),_())},[r,L,_]),p.useEffect(()=>()=>{L(),clearTimeout(M.current),clearTimeout(D.current),_()},[d,l,L,_]),p.useMemo(()=>{function N(B){C.current=B.pointerType}return d?{reference:{onPointerDown:N,onPointerEnter:N,onMouseMove(B){r||h===0||(clearTimeout(D.current),D.current=setTimeout(()=>{z.current||o(!0,B.nativeEvent)},h))}},floating:{onMouseEnter(){clearTimeout(M.current)},onMouseLeave(B){a.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),F(B.nativeEvent,!1)}}}:{}},[a,d,h,r,o,F])}function Ws(t,n){let r=t.filter(i=>{var a;return i.parentId===n&&((a=i.context)==null?void 0:a.open)}),o=r;for(;o.length;)o=t.filter(i=>{var a;return(a=o)==null?void 0:a.some(l=>{var c;return i.parentId===l.id&&((c=i.context)==null?void 0:c.open)})}),r=r.concat(o);return r}function xm(t){return ql(t.target)&&t.target.tagName==="BUTTON"}function jm(t){return KD(t)}function nT(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,dataRef:i,elements:{domReference:a}}=t,{enabled:l=!0,event:c="click",toggle:u=!0,ignoreMouse:d=!1,keyboardHandlers:f=!0}=n,g=p.useRef(),b=p.useRef(!1);return p.useMemo(()=>l?{reference:{onPointerDown(h){g.current=h.pointerType},onMouseDown(h){h.button!==0||cl(g.current,!0)&&d||c==="click"||(r&&u&&(!i.current.openEvent||i.current.openEvent.type==="mousedown")?o(!1,h.nativeEvent):(h.preventDefault(),o(!0,h.nativeEvent)))},onClick(h){return c==="mousedown"&&g.current?void(g.current=void 0):void(cl(g.current,!0)&&d||(r&&u&&(!i.current.openEvent||i.current.openEvent.type==="click")?o(!1,h.nativeEvent):o(!0,h.nativeEvent)))},onKeyDown(h){g.current=void 0,h.defaultPrevented||!f||xm(h)||(h.key===" "&&!jm(a)&&(h.preventDefault(),b.current=!0),h.key==="Enter"&&o(!(r&&u),h.nativeEvent))},onKeyUp(h){h.defaultPrevented||!f||xm(h)||jm(a)||h.key===" "&&b.current&&(b.current=!1,o(!(r&&u),h.nativeEvent))}}}:{},[l,i,c,d,f,a,u,r,o])}const rT=Xr.useInsertionEffect,oT=rT||(t=>t());function _a(t){const n=p.useRef(()=>{});return oT(()=>{n.current=t}),p.useCallback(function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.current==null?void 0:n.current(...o)},[])}const iT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},aT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},lT=t=>{var n,r;return{escapeKeyBubbles:typeof t=="boolean"?t:(n=t==null?void 0:t.escapeKey)!=null&&n,outsidePressBubbles:typeof t=="boolean"?t:(r=t==null?void 0:t.outsidePress)==null||r}};function sT(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,events:i,nodeId:a,elements:{reference:l,domReference:c,floating:u},dataRef:d}=t,{enabled:f=!0,escapeKey:g=!0,outsidePress:b=!0,outsidePressEvent:h="pointerdown",referencePress:m=!1,referencePressEvent:y="pointerdown",ancestorScroll:E=!1,bubbles:v}=n,k=ep(),C=hw()!=null,M=_a(typeof b=="function"?b:()=>!1),I=typeof b=="function"?M:b,D=p.useRef(!1),{escapeKeyBubbles:z,outsidePressBubbles:A}=lT(v),J=_a(F=>{if(r&&f&&g&&F.key==="Escape"){const L=k?Ws(k.nodesRef.current,a):[];if(!z&&(F.stopPropagation(),0<L.length)){let _=!0;if(L.forEach(N=>{var B;if((B=N.context)!=null&&B.open&&!N.context.dataRef.current.__escapeKeyBubbles)return void(_=!1)}),!_)return}i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),o(!1,WD(F)?F.nativeEvent:F)}}),V=_a(F=>{const L=D.current;if(D.current=!1,L||typeof I=="function"&&!I(F))return;const _=qD(F),N="["+tp("inert")+"]",B=Jn(u).querySelectorAll(N);let H=Jt(_)?_:null;for(;H&&!LD(H);){const U=_D(H);if(U===Jn(u).body||!Jt(U))break;H=U}if(!(B.length&&Jt(_)&&!UD(_)&&!Ti(_,u)&&Array.from(B).every(U=>!Ti(H,U)))){if(ql(_)&&u){const Q=0<_.clientWidth&&_.scrollWidth>_.clientWidth,X=0<_.clientHeight&&_.scrollHeight>_.clientHeight;let R=X&&F.offsetX>_.clientWidth;if(X&&AD(_).direction==="rtl"&&(R=F.offsetX<=_.offsetWidth-_.clientWidth),R||Q&&F.offsetY>_.clientHeight)return}const U=k&&Ws(k.nodesRef.current,a).some(Q=>{var X;return Aa(F,(X=Q.context)==null?void 0:X.elements.floating)});if(!(Aa(F,u)||Aa(F,c)||U)){const Q=k?Ws(k.nodesRef.current,a):[];if(0<Q.length){let X=!0;if(Q.forEach(R=>{var ae;if((ae=R.context)!=null&&ae.open&&!R.context.dataRef.current.__outsidePressBubbles)return void(X=!1)}),!X)return}i.emit("dismiss",{type:"outsidePress",data:{returnFocus:C?{preventScroll:!0}:BD(F)||VD(F)}}),o(!1,F)}}});return p.useEffect(()=>{function F(N){o(!1,N)}if(!r||!f)return;d.current.__escapeKeyBubbles=z,d.current.__outsidePressBubbles=A;const L=Jn(u);g&&L.addEventListener("keydown",J),I&&L.addEventListener(h,V);let _=[];return E&&(Jt(c)&&(_=jr(c)),Jt(u)&&(_=_.concat(jr(u))),!Jt(l)&&l&&l.contextElement&&(_=_.concat(jr(l.contextElement)))),_=_.filter(N=>{var B;return N!==((B=L.defaultView)==null?void 0:B.visualViewport)}),_.forEach(N=>{N.addEventListener("scroll",F,{passive:!0})}),()=>{g&&L.removeEventListener("keydown",J),I&&L.removeEventListener(h,V),_.forEach(N=>{N.removeEventListener("scroll",F)})}},[d,u,c,l,g,I,h,r,o,E,f,z,A,J,V]),p.useEffect(()=>{D.current=!1},[I,h]),p.useMemo(()=>f?{reference:{onKeyDown:J,[iT[y]]:F=>{m&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),o(!1,F.nativeEvent))}},floating:{onKeyDown:J,[aT[h]]:()=>{D.current=!0}}}:{},[f,i,m,h,y,o,J])}function cT(t){var n;t===void 0&&(t={});const{open:r=!1,onOpenChange:o,nodeId:i}=t,[a,l]=p.useState(null),c=((n=t.elements)==null?void 0:n.reference)||a,u=XS(t),d=ep(),f=_a((M,I)=>{M&&(b.current.openEvent=I),o==null||o(M,I)}),g=p.useRef(null),b=p.useRef({}),h=p.useState(()=>JD())[0],m=gw(),y=p.useCallback(M=>{const I=Jt(M)?{getBoundingClientRect:()=>M.getBoundingClientRect(),contextElement:M}:M;u.refs.setReference(I)},[u.refs]),E=p.useCallback(M=>{(Jt(M)||M===null)&&(g.current=M,l(M)),(Jt(u.refs.reference.current)||u.refs.reference.current===null||M!==null&&!Jt(M))&&u.refs.setReference(M)},[u.refs]),v=p.useMemo(()=>({...u.refs,setReference:E,setPositionReference:y,domReference:g}),[u.refs,E,y]),k=p.useMemo(()=>({...u.elements,domReference:c}),[u.elements,c]),C=p.useMemo(()=>({...u,refs:v,elements:k,dataRef:b,nodeId:i,floatingId:m,events:h,open:r,onOpenChange:f}),[u,i,m,h,r,f,v,k]);return Mi(()=>{const M=d==null?void 0:d.nodesRef.current.find(I=>I.id===i);M&&(M.context=C)}),p.useMemo(()=>({...u,context:C,refs:v,elements:k}),[u,v,k,C])}function uT(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,dataRef:i,events:a,refs:l,elements:{floating:c,domReference:u}}=t,{enabled:d=!0,keyboardOnly:f=!0}=n,g=p.useRef(""),b=p.useRef(!1),h=p.useRef();return p.useEffect(()=>{function m(){!r&&ql(u)&&u===$D(Jn(u))&&(b.current=!0)}if(!d)return;const y=Jn(c),E=y.defaultView||window;return E.addEventListener("blur",m),()=>{E.removeEventListener("blur",m)}},[c,u,r,d]),p.useEffect(()=>{function m(y){(y.type==="referencePress"||y.type==="escapeKey")&&(b.current=!0)}if(d)return a.on("dismiss",m),()=>{a.off("dismiss",m)}},[a,d]),p.useEffect(()=>()=>{clearTimeout(h.current)},[]),p.useMemo(()=>d?{reference:{onPointerDown(m){let{pointerType:y}=m;g.current=y,b.current=!!(y&&f)},onMouseLeave(){b.current=!1},onFocus(m){var y;b.current||m.type==="focus"&&((y=i.current.openEvent)==null?void 0:y.type)==="mousedown"&&Aa(i.current.openEvent,u)||o(!0,m.nativeEvent)},onBlur(m){b.current=!1;const y=m.relatedTarget,E=Jt(y)&&y.hasAttribute(tp("focus-guard"))&&y.getAttribute("data-type")==="outside";h.current=setTimeout(()=>{Ti(l.floating.current,y)||Ti(u,y)||E||o(!1,m.nativeEvent)})}}}:{},[d,f,u,l,i,o])}function Us(t,n,r){const o=new Map;return{...r==="floating"&&{tabIndex:-1},...t,...n.map(i=>i?i[r]:null).concat(t).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[c,u]=l;if(c.indexOf("on")!==0)i[c]=u;else if(o.has(c)||o.set(c,[]),typeof u=="function"){var d;(d=o.get(c))==null||d.push(u),i[c]=function(){for(var f,g=arguments.length,b=Array(g),h=0;h<g;h++)b[h]=arguments[h];return(f=o.get(c))==null?void 0:f.map(m=>m(...b)).find(m=>m!==void 0)}}}),i),{})}}function dT(t){t===void 0&&(t=[]);const n=t,r=p.useCallback(a=>Us(a,t,"reference"),n),o=p.useCallback(a=>Us(a,t,"floating"),n),i=p.useCallback(a=>Us(a,t,"item"),t.map(a=>a==null?void 0:a.item));return p.useMemo(()=>({getReferenceProps:r,getFloatingProps:o,getItemProps:i}),[r,o,i])}function fT(t,n){n===void 0&&(n={});const{open:r,floatingId:o}=t,{enabled:i=!0,role:a="dialog"}=n,l=gw();return p.useMemo(()=>{const c={id:o,role:a};return i?a==="tooltip"?{reference:{"aria-describedby":r?o:void 0},floating:c}:{reference:{"aria-expanded":r?"true":"false","aria-haspopup":a==="alertdialog"?"dialog":a,"aria-controls":r?o:void 0,...a==="listbox"&&{role:"combobox"},...a==="menu"&&{id:l}},floating:{...c,...a==="menu"&&{"aria-labelledby":l}}}:{}},[i,a,r,o,l])}var pT=function(t){var n=t===void 0?{}:t,r=n.initialOpen,o=n.variant,i=n.placement,a=i===void 0?"top":i,l=n.triggerEvent,c=l===void 0?"click":l,u=n.open,d=n.onOpenChange,f=n.disabled,g=f!==void 0&&f,b=p.useState(r!==void 0&&r),h=b[0],m=b[1],y=u??h,E=d??m,v=cT({placement:a,open:y,onOpenChange:E,whileElementsMounted:h1,middleware:[j1(5),eC(),E1()]}),k=v.context,C=nT(k,{enabled:u==null&&g===!1&&c==="click"}),M=tT(k,{move:!1,enabled:u==null&&g===!1&&c==="hover"}),I=uT(k,{enabled:u==null}),D=sT(k),z=fT(k,{role:"tooltip"}),A=dT([C,M,I,D,z]);return S.useMemo(function(){return de(de({open:y,setOpen:E,variant:o,disabled:g},A),v)},[y,E,o,g,A,v])},mw=S.createContext(null),bw=function(){var t=S.useContext(mw);if(t==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t};function gT(t){var n=t.initialOpen,r=t.placement,o=r===void 0?"top":r,i=t.variant,a=t.open,l=t.triggerEvent,c=l===void 0?"click":l,u=t.disabled,d=t.children,f=d===void 0?null:d,g=at(t,["initialOpen","placement","variant","open","triggerEvent","disabled","children"]),b=pT({initialOpen:n!==void 0&&n,placement:o,variant:i,open:a,triggerEvent:c,disabled:u!==void 0&&u,props:g});return S.createElement(mw.Provider,{value:b},f)}var hT=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`,mT=`
    jn-mx-4
    jn-max-w-full
`,bT=`
    jn-shrink-0
`,vT=function(t){return t==="error"?"dangerous":t},yT=S.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=at(t,["className","children"]),c=bw(),u=Hu([c.refs.setFloating,n]),d=c.variant;return S.createElement(S.Fragment,null,c.open&&S.createElement("div",de({className:"juno-tooltip juno-tooltip-".concat(d," ").concat(hT," ").concat(o),ref:u,style:de({},c.floatingStyles)},c.getFloatingProps(l)),d&&S.createElement(eo,{icon:vT(d),color:"jn-text-theme-".concat(d),className:"juno-tooltip-popover-icon ".concat(bT)}),S.createElement("p",{className:"".concat(mT)},a)))}),wT=S.forwardRef(function(t,n){var r=t.children,o=r===void 0?null:r,i=t.asChild,a=t.className,l=a===void 0?"":a,c=at(t,["children","asChild","className"]),u=bw(),d=Hu([u.refs.setReference,n]);if(i!==void 0&&i&&S.isValidElement(o)){var f=o.props,g=f.ref,b=Hu([u.refs.setReference,n,g]),h=de(de(de({ref:b},c),f),{"data-state":u.open?"open":"closed",className:f.className+"".concat(u.disabled&&" jn-cursor-default")}),m=u.getReferenceProps(h);return S.cloneElement(o,m)}return S.createElement("button",de({ref:d,"data-state":u.open?"open":"closed"},u.getReferenceProps(c),{className:"".concat(l," ").concat(u.disabled&&" jn-cursor-default")}),o)});const xT={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},Em=t=>{let n;const r=new Set,o=(f,g)=>{const b=typeof f=="function"?f(n):f;if(!Object.is(b,n)){const h=n;n=g??(typeof b!="object"||b===null)?b:Object.assign({},n,b),r.forEach(m=>m(n,h))}},i=()=>n,u={setState:o,getState:i,getInitialState:()=>d,subscribe:f=>(r.add(f),()=>r.delete(f)),destroy:()=>{(xT?"static":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},d=n=t(o,i,u);return u},vw=t=>t?Em(t):Em;var yw={exports:{}},ww={},xw={exports:{}},jw={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=p;function jT(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ET=typeof Object.is=="function"?Object.is:jT,kT=Ko.useState,OT=Ko.useEffect,ST=Ko.useLayoutEffect,CT=Ko.useDebugValue;function PT(t,n){var r=n(),o=kT({inst:{value:r,getSnapshot:n}}),i=o[0].inst,a=o[1];return ST(function(){i.value=r,i.getSnapshot=n,qs(i)&&a({inst:i})},[t,r,n]),OT(function(){return qs(i)&&a({inst:i}),t(function(){qs(i)&&a({inst:i})})},[t]),CT(r),r}function qs(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!ET(t,r)}catch{return!0}}function IT(t,n){return n()}var DT=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?IT:PT;jw.useSyncExternalStore=Ko.useSyncExternalStore!==void 0?Ko.useSyncExternalStore:DT;xw.exports=jw;var TT=xw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yl=p,MT=TT;function RT(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var NT=typeof Object.is=="function"?Object.is:RT,FT=MT.useSyncExternalStore,LT=Yl.useRef,AT=Yl.useEffect,_T=Yl.useMemo,$T=Yl.useDebugValue;ww.useSyncExternalStoreWithSelector=function(t,n,r,o,i){var a=LT(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=_T(function(){function u(h){if(!d){if(d=!0,f=h,h=o(h),i!==void 0&&l.hasValue){var m=l.value;if(i(m,h))return g=m}return g=h}if(m=g,NT(f,h))return m;var y=o(h);return i!==void 0&&i(m,y)?m:(f=h,g=y)}var d=!1,f,g,b=r===void 0?null:r;return[function(){return u(n())},b===null?void 0:function(){return u(b())}]},[n,r,o,i]);var c=FT(t,a[0],a[1]);return AT(function(){l.hasValue=!0,l.value=c},[c]),$T(c),c};yw.exports=ww;var zT=yw.exports;const HT=Tl(zT),BT={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},{useDebugValue:VT}=S,{useSyncExternalStoreWithSelector:WT}=HT;let km=!1;const UT=t=>t;function Ew(t,n=UT,r){(BT?"static":void 0)!=="production"&&r&&!km&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),km=!0);const o=WT(t.subscribe,t.getState,t.getServerState||t.getInitialState,n,r);return VT(o),o}var qT={};const Om=t=>`${t}-${(+new Date+Math.random()).toString(36).slice(-5)}}`,YT=(t,n)=>({storeId:Om("store-"),messages:[],actions:{addMessage:r=>{if(n().messages.findIndex(a=>JSON.stringify(a.text)===JSON.stringify(r.text)&&a.variant===r.variant)>=0)return;const o=n().messages.slice(),i=Om("message-");o.push({id:i,...r}),t(a=>({...a,messages:o}))},removeMessage:r=>{let o=n().messages.slice();o=o.filter(i=>i.id!==r),t(i=>({...i,messages:o}))},resetMessages:()=>{t(r=>({...r,messages:[]}))}}}),kw=p.createContext(void 0),KT=({children:t})=>S.createElement(kw.Provider,{value:vw(YT)},t),Ow=t=>{const n=p.useContext(kw);if(!n)throw new Error("StoreContext not provided");return Ew(n,t)},GT=()=>Ow(t=>t.messages),Sw=()=>Ow(t=>t.actions);var ve=function(){return ve=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},ve.apply(this,arguments)};function Dr(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>n.indexOf(o)&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)0>n.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(r[o[i]]=t[o[i]]);return r}function xe(){return xe=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},xe.apply(null,arguments)}function QT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cw={exports:{}},Ys,Sm;function ZT(){if(Sm)return Ys;Sm=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ys=t,Ys}var Ks,Cm;function JT(){if(Cm)return Ks;Cm=1;var t=ZT();function n(){}function r(){}return r.resetWarningCache=n,Ks=function(){function o(l,c,u,d,f,g){if(g!==t){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}o.isRequired=o;function i(){return o}var a={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:i,element:o,elementType:o,instanceOf:i,node:o,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a},Ks}Cw.exports=JT()();var XT=Cw.exports;const j=QT(XT);j.string,j.any;j.oneOf(["open","closed"]),j.bool,j.node;function Pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Iw(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var r=function o(){if(this instanceof o){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(n,i);return new a}return n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var i=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:function(){return t[o]}})}),r}function K(t){return n=>{let{opacityVariable:r,opacityValue:o}=n;return o===void 0?r===void 0?`rgb(var(${t}))`:`rgba(var(${t}), var(${r}, 1))`:`rgba(var(${t}), ${o})`}}var eM={content:["./src/components/**/*.{js,jsx,ts,tsx,mdx}","./src/dummyComponents/*.{js,jsx,ts,tsx,mdx}","./src/docs/**/*.{js,jsx,ts,tsx,mdx}"],prefix:"jn-",theme:{fontFamily:{sans:['"IBM Plex Sans"',"ui-sans-serif","Arial","system-ui","sans-serif"],condensed:['"IBM Plex Sans Condensed"',"ui-sans-serif","Arial","system-ui","sans-serif"],serif:['"IBM Plex Serif"',"ui-serif","serif"],mono:['"IBM Plex Mono"',"ui-monospace","monospace"]},colors:{current:"currentColor","juno-grey-blue":{1:K("--color-juno-grey-blue-1-raw"),2:K("--color-juno-grey-blue-2-raw"),3:K("--color-juno-grey-blue-3-raw"),4:K("--color-juno-grey-blue-4-raw"),5:K("--color-juno-grey-blue-5-raw"),6:K("--color-juno-grey-blue-6-raw"),7:K("--color-juno-grey-blue-7-raw"),8:K("--color-juno-grey-blue-8-raw"),9:K("--color-juno-grey-blue-9-raw"),10:K("--color-juno-grey-blue-10-raw"),11:K("--color-juno-grey-blue-11-raw"),DEFAULT:K("--color-juno-grey-blue-11-raw")},"juno-blue":{1:K("--color-juno-blue-1-raw"),2:K("--color-juno-blue-2-raw"),3:K("--color-juno-blue-3-raw"),4:K("--color-juno-blue-4-raw"),5:K("--color-juno-blue-5-raw"),6:K("--color-juno-blue-6-raw"),7:K("--color-juno-blue-7-raw"),8:K("--color-juno-blue-8-raw"),9:K("--color-juno-blue-9-raw"),10:K("--color-juno-blue-10-raw"),DEFAULT:K("--color-juno-blue-5-raw")},"juno-turquoise":{1:K("--color-juno-turquoise-1-raw"),2:K("--color-juno-turquoise-2-raw"),3:K("--color-juno-turquoise-3-raw"),4:K("--color-juno-turquoise-4-raw"),5:K("--color-juno-turquoise-5-raw"),6:K("--color-juno-turquoise-6-raw"),7:K("--color-juno-turquoise-7-raw"),8:K("--color-juno-turquoise-8-raw"),9:K("--color-juno-turquoise-9-raw"),10:K("--color-juno-turquoise-10-raw"),DEFAULT:K("--color-juno-turquoise-5-raw")},"juno-grey-light":{1:K("--color-juno-grey-light-1-raw"),2:K("--color-juno-grey-light-2-raw"),3:K("--color-juno-grey-light-3-raw"),4:K("--color-juno-grey-light-4-raw"),5:K("--color-juno-grey-light-5-raw"),6:K("--color-juno-grey-light-6-raw"),7:K("--color-juno-grey-light-7-raw"),8:K("--color-juno-grey-light-8-raw"),9:K("--color-juno-grey-light-9-raw"),10:K("--color-juno-grey-light-10-raw"),11:K("--color-juno-grey-light-11-raw"),DEFAULT:K("--color-juno-grey-light-1-raw")},"juno-red":{1:K("--color-juno-red-1-raw"),2:K("--color-juno-red-2-raw"),3:K("--color-juno-red-3-raw"),4:K("--color-juno-red-4-raw"),5:K("--color-juno-red-5-raw"),6:K("--color-juno-red-6-raw"),7:K("--color-juno-red-7-raw"),8:K("--color-juno-red-8-raw"),DEFAULT:K("--color-juno-red-5-raw")},"sap-grey":{1:K("--color-sap-grey-1-raw"),2:K("--color-sap-grey-2-raw"),3:K("--color-sap-grey-3-raw"),4:K("--color-sap-grey-4-raw"),5:K("--color-sap-grey-5-raw"),6:K("--color-sap-grey-6-raw"),7:K("--color-sap-grey-7-raw"),8:K("--color-sap-grey-8-raw"),DEFAULT:K("--color-sap-grey-8-raw")},"sap-blue":{1:K("--color-sap-blue-1-raw"),2:K("--color-sap-blue-2-raw"),3:K("--color-sap-blue-3-raw"),4:K("--color-sap-blue-4-raw"),5:K("--color-sap-blue-5-raw"),6:K("--color-sap-blue-6-raw"),DEFAULT:K("--color-sap-blue-5-raw")},"sap-gold":{DEFAULT:K("--color-sap-gold-raw")},"sap-purple":{1:K("--color-sap-purple-1-raw"),2:K("--color-sap-purple-2-raw"),3:K("--color-sap-purple-3-raw"),4:K("--color-sap-purple-4-raw"),5:K("--color-sap-purple-5-raw"),6:K("--color-sap-purple-6-raw"),DEFAULT:K("--color-sap-purple-5-raw")},"sap-green":{1:K("--color-sap-green-1-raw"),2:K("--color-sap-green-2-raw"),3:K("--color-sap-green-3-raw"),4:K("--color-sap-green-4-raw"),5:K("--color-sap-green-5-raw"),6:K("--color-sap-green-6-raw"),DEFAULT:K("--color-sap-green-5-raw")},"sap-orange":{1:K("--color-sap-orange-1-raw"),2:K("--color-sap-orange-2-raw"),3:K("--color-sap-orange-3-raw"),4:K("--color-sap-orange-4-raw"),5:K("--color-sap-orange-5-raw"),6:K("--color-sap-orange-6-raw"),DEFAULT:K("--color-sap-orange-5-raw")},white:K("--color-white-raw"),black:K("--color-black-raw"),transparent:"transparent",theme:{accent:K("--color-accent-raw"),danger:K("--color-danger-raw"),error:K("--color-error-raw"),info:K("--color-info-raw"),success:K("--color-success-raw"),warning:K("--color-warning-raw"),focus:K("--color-focus-raw"),"background-lvl-0":K("--color-background-lvl-0-raw"),"background-lvl-1":K("--color-background-lvl-1-raw"),"background-lvl-2":K("--color-background-lvl-2-raw"),"background-lvl-3":K("--color-background-lvl-3-raw"),"background-lvl-4":K("--color-background-lvl-4-raw"),"background-lvl-5":K("--color-background-lvl-5-raw")}},extend:{backgroundColor:{theme:{"global-bg":K("--color-global-bg-raw"),"badge-default":"var(--color-badge-default-bg)","box-default":"var(--color-box-bg)","code-block":K("--color-codeblock-bg"),"content-area-bg":K("--color-content-area-bg-raw"),panel:"var(--color-panel-bg)",textinput:K("--color-textinput-bg"),"textinput-autofill":K("--color-textinput-autofill-bg"),select:K("--color-select-bg"),checkbox:K("--color-checkbox-bg"),radio:K("--color-radio-bg"),"radio-checked":K("--color-radio-checked-bg"),"switch-handle":K("--color-switch-handle-bg"),"switch-handle-checked":K("--color-switch-handle-checked-bg"),required:K("--color-required-bg"),introbox:K("--color-introbox-bg"),"datagridrow-selected":K("--color-datagridrow-selected"),"datalistrow-selected":K("--color-datalistrow-selected"),"message-border-danger":K("--color-message-danger-border"),"message-border-default":K("--color-message-default-border"),"message-border-error":K("--color-message-error-border"),"message-border-warning":K("--color-message-warning-border"),"message-border-success":K("--color-message-success-border"),"tab-navigation-top":K("--color-tabnavigation-top-bg"),filters:K("--color-filters-bg"),"filter-input":K("--color-filter-input-bg"),"filter-input-textinput":K("--color-filter-input-textinput-bg"),"filter-pill-key":K("--color-filter-pill-key-bg"),"modal-backdrop":"var(--color-modal-backdrop-bg)","sidenavigation-item-active":"var(--color-sidenavigation-item-active-bg)","topnavigation-item":"var(--color-topnavigation-item-bg)","topnavigation-item-active":"var(--color-topnavigation-item-active-bg)"}},backgroundImage:{"theme-message-default":"var(--gradient-message-default-bg)","theme-message-success":"var(--gradient-message-success-bg)","theme-message-warning":"var(--gradient-message-warning-bg)","theme-message-danger":"var(--gradient-message-danger-bg)","theme-message-error":"var(--gradient-message-error-bg)"},textColor:{theme:{highest:K("--color-text-highest-raw"),high:K("--color-text-high-raw"),default:K("--color-text-default-raw"),light:K("--color-text-light-raw"),disabled:K("--color-text-disabled-raw"),link:K("--color-text-link-raw"),"on-danger":K("--color-button-danger-text"),"on-default":K("--color-button-default-text"),textinput:K("--color-textinput-text"),"textinput-autofill":K("--color-textinput-autofill-text"),"textinput-autofill-label":K("--color-textinput-autofill-label"),"checkbox-checked":K("--color-checkbox-checked-color"),"sidenavigation-item-active":"var(--color-sidenavigation-item-active)"}},borderColor:{theme:{default:K("--color-default-border"),"codeblock-bar":K("--color-codeblock-bar-border"),"codeblock-tab-active":K("--color-text-default-raw"),"message-default":K("--color-message-default-border"),"message-danger":K("--color-message-danger-border"),"message-error":K("--color-message-error-border"),"message-warning":K("--color-message-warning-border"),"message-success":K("--color-message-success-border"),panel:K("--color-panel-border-raw"),"switch-default":K("--color-switch-default-border"),"switch-hover":K("--color-switch-hover-border"),"datalist-row":K("--color-datalist-row-border"),introbox:K("--color-introbox-border"),"tab-navigation-content-bottom":K("--color-tabnavigation-content-bottom-border"),"tab-active-bottom":K("--color-text-default-raw"),"filter-input":K("--color-filter-input-border"),"filter-pill":K("--color-filter-pill-border"),"box-default":"var(--color-box-border)","textinput-default":K("--color-textinput-default-border"),"tab-content-inactive-bottom":K("--color-background-lvl-4-raw")}},padding:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem","grid-column":"0 .5rem"},height:{textinput:"2.375rem",floatinglabelinput:"3rem","switch-default":"1.4375rem","switch-handle-default":"1.1875rem"},ringOffsetColor:{theme:{focus:K("--color-global-bg-raw")}},screens:{"3xl":"1856px"},width:{"switch-default":"2.625rem","switch-handle-default":"1.1875rem","grid-column-default":"var(--grid-column-default-width)","grid-col-1":"8.333333%","grid-col-2":"16.666667%","grid-col-3":"25%","grid-col-4":"33.333333%","grid-col-5":"41.666667%","grid-col-6":"50%","grid-col-7":"58.333333%","grid-col-8":"66.666667%","grid-col-9":"75%","grid-col-10":"83.333333%","grid-col-11":"91.666667%","grid-col-12":"100%"},borderRadius:{"3px":"3px"},margin:{"grid-row":"0 var(--grid-row-margin-x)"},flex:{"grid-column":"var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis)"}},borderWidth:{DEFAULT:"1px",0:"0",2:"2px",3:"3px",4:"4px",6:"6px"}},plugins:[]};Pw(eM);j.bool;j.bool;p.createContext();j.node,j.oneOf(["head","inline","shadowRoot"]),j.string,j.oneOf(["open","closed"]);p.createContext();j.any;j.string,j.string,j.node;j.bool,j.oneOf(["open","closed"]),j.oneOf(["head","inline"]),j.string,j.any;var Pm,Im,tM=["title","titleId"];function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Bu.apply(null,arguments)}function nM(t,n){if(t==null)return{};var r,o,i=rM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function rM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Dm,Dw=function(t){var n=t.title,r=t.titleId,o=nM(t,tM);return p.createElement("svg",Bu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Pm||(Pm=p.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Im||(Im=p.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})))},oM=["title","titleId"];function Vu(){return Vu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Vu.apply(null,arguments)}function iM(t,n){if(t==null)return{};var r,o,i=aM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function aM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Tm,Tw=function(t){var n=t.title,r=t.titleId,o=iM(t,oM);return p.createElement("svg",Vu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Dm||(Dm=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"})))},lM=["title","titleId"];function Wu(){return Wu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Wu.apply(null,arguments)}function sM(t,n){if(t==null)return{};var r,o,i=cM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function cM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Mm,Mw=function(t){var n=t.title,r=t.titleId,o=sM(t,lM);return p.createElement("svg",Wu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Tm||(Tm=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))},uM=["title","titleId"];function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Uu.apply(null,arguments)}function dM(t,n){if(t==null)return{};var r,o,i=fM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function fM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Rm,Rw=function(t){var n=t.title,r=t.titleId,o=dM(t,uM);return p.createElement("svg",Uu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Mm||(Mm=p.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"})))},pM=["title","titleId"];function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},qu.apply(null,arguments)}function gM(t,n){if(t==null)return{};var r,o,i=hM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function hM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Nm,Nw=function(t){var n=t.title,r=t.titleId,o=gM(t,pM);return p.createElement("svg",qu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Rm||(Rm=p.createElement("path",{d:"M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"})))},mM=["title","titleId"];function Yu(){return Yu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Yu.apply(null,arguments)}function bM(t,n){if(t==null)return{};var r,o,i=vM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function vM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Fm,Fw=function(t){var n=t.title,r=t.titleId,o=bM(t,mM);return p.createElement("svg",Yu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Nm||(Nm=p.createElement("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"})))},yM=["title","titleId"];function Ku(){return Ku=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ku.apply(null,arguments)}function wM(t,n){if(t==null)return{};var r,o,i=xM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function xM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Lm,Lw=function(t){var n=t.title,r=t.titleId,o=wM(t,yM);return p.createElement("svg",Ku({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Fm||(Fm=p.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"})))},jM=["title","titleId"];function Gu(){return Gu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Gu.apply(null,arguments)}function EM(t,n){if(t==null)return{};var r,o,i=kM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Am,Aw=function(t){var n=t.title,r=t.titleId,o=EM(t,jM);return p.createElement("svg",Gu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Lm||(Lm=p.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})))},OM=["title","titleId"];function Qu(){return Qu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Qu.apply(null,arguments)}function SM(t,n){if(t==null)return{};var r,o,i=CM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function CM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var _m,_w=function(t){var n=t.title,r=t.titleId,o=SM(t,OM);return p.createElement("svg",Qu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Am||(Am=p.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})))},PM=["title","titleId"];function Zu(){return Zu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Zu.apply(null,arguments)}function IM(t,n){if(t==null)return{};var r,o,i=DM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function DM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var $m,$w=function(t){var n=t.title,r=t.titleId,o=IM(t,PM);return p.createElement("svg",Zu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,_m||(_m=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},TM=["title","titleId"];function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ju.apply(null,arguments)}function MM(t,n){if(t==null)return{};var r,o,i=RM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function RM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var zm,zw=function(t){var n=t.title,r=t.titleId,o=MM(t,TM);return p.createElement("svg",Ju({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,$m||($m=p.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})))},NM=["title","titleId"];function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Xu.apply(null,arguments)}function FM(t,n){if(t==null)return{};var r,o,i=LM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function LM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Hm,Hw=function(t){var n=t.title,r=t.titleId,o=FM(t,NM);return p.createElement("svg",Xu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,zm||(zm=p.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})))},AM=["title","titleId"];function ed(){return ed=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ed.apply(null,arguments)}function _M(t,n){if(t==null)return{};var r,o,i=$M(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $M(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Bm,Bw=function(t){var n=t.title,r=t.titleId,o=_M(t,AM);return p.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Hm||(Hm=p.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},zM=["title","titleId"];function td(){return td=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},td.apply(null,arguments)}function HM(t,n){if(t==null)return{};var r,o,i=BM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function BM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Vm,Vw=function(t){var n=t.title,r=t.titleId,o=HM(t,zM);return p.createElement("svg",td({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Bm||(Bm=p.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))},VM=["title","titleId"];function nd(){return nd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},nd.apply(null,arguments)}function WM(t,n){if(t==null)return{};var r,o,i=UM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function UM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Wm,Ww=function(t){var n=t.title,r=t.titleId,o=WM(t,VM);return p.createElement("svg",nd({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Vm||(Vm=p.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))},qM=["title","titleId"];function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},rd.apply(null,arguments)}function YM(t,n){if(t==null)return{};var r,o,i=KM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function KM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Um,ul=function(t){var n=t.title,r=t.titleId,o=YM(t,qM);return p.createElement("svg",rd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Wm||(Wm=p.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"})))},GM=["title","titleId"];function od(){return od=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},od.apply(null,arguments)}function QM(t,n){if(t==null)return{};var r,o,i=ZM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ZM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var qm,Uw=function(t){var n=t.title,r=t.titleId,o=QM(t,GM);return p.createElement("svg",od({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Um||(Um=p.createElement("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"})))},JM=["title","titleId"];function id(){return id=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},id.apply(null,arguments)}function XM(t,n){if(t==null)return{};var r,o,i=e7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function e7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ym,qw=function(t){var n=t.title,r=t.titleId,o=XM(t,JM);return p.createElement("svg",id({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,qm||(qm=p.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))},t7=["title","titleId"];function ad(){return ad=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ad.apply(null,arguments)}function n7(t,n){if(t==null)return{};var r,o,i=r7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function r7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Km,Yw=function(t){var n=t.title,r=t.titleId,o=n7(t,t7);return p.createElement("svg",ad({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ym||(Ym=p.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))},o7=["title","titleId"];function ld(){return ld=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ld.apply(null,arguments)}function i7(t,n){if(t==null)return{};var r,o,i=a7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function a7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Gm,Kw=function(t){var n=t.title,r=t.titleId,o=i7(t,o7);return p.createElement("svg",ld({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Km||(Km=p.createElement("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},l7=["title","titleId"];function sd(){return sd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},sd.apply(null,arguments)}function s7(t,n){if(t==null)return{};var r,o,i=c7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function c7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Qm,Gw=function(t){var n=t.title,r=t.titleId,o=s7(t,l7);return p.createElement("svg",sd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Gm||(Gm=p.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))},u7=["title","titleId"];function cd(){return cd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},cd.apply(null,arguments)}function d7(t,n){if(t==null)return{};var r,o,i=f7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function f7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Zm,Qw=function(t){var n=t.title,r=t.titleId,o=d7(t,u7);return p.createElement("svg",cd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Qm||(Qm=p.createElement("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))},p7=["title","titleId"];function ud(){return ud=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ud.apply(null,arguments)}function g7(t,n){if(t==null)return{};var r,o,i=h7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function h7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Jm,Zw=function(t){var n=t.title,r=t.titleId,o=g7(t,p7);return p.createElement("svg",ud({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Zm||(Zm=p.createElement("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})))},m7=["title","titleId"];function dd(){return dd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},dd.apply(null,arguments)}function b7(t,n){if(t==null)return{};var r,o,i=v7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function v7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Xm,Jw=function(t){var n=t.title,r=t.titleId,o=b7(t,m7);return p.createElement("svg",dd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Jm||(Jm=p.createElement("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})))},y7=["title","titleId"];function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},fd.apply(null,arguments)}function w7(t,n){if(t==null)return{};var r,o,i=x7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function x7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var eb,Xw=function(t){var n=t.title,r=t.titleId,o=w7(t,y7);return p.createElement("svg",fd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Xm||(Xm=p.createElement("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))},j7=["title","titleId"];function pd(){return pd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},pd.apply(null,arguments)}function E7(t,n){if(t==null)return{};var r,o,i=k7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function k7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var tb,ex=function(t){var n=t.title,r=t.titleId,o=E7(t,j7);return p.createElement("svg",pd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,eb||(eb=p.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"})))},O7=["title","titleId"];function gd(){return gd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},gd.apply(null,arguments)}function S7(t,n){if(t==null)return{};var r,o,i=C7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function C7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var nb,tx=function(t){var n=t.title,r=t.titleId,o=S7(t,O7);return p.createElement("svg",gd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,tb||(tb=p.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})))},P7=["title","titleId"];function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},hd.apply(null,arguments)}function I7(t,n){if(t==null)return{};var r,o,i=D7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function D7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var rb,ob,ko=function(t){var n=t.title,r=t.titleId,o=I7(t,P7);return p.createElement("svg",hd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,nb||(nb=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})))},T7=["title","titleId"];function md(){return md=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},md.apply(null,arguments)}function M7(t,n){if(t==null)return{};var r,o,i=R7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function R7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ib,nx=function(t){var n=t.title,r=t.titleId,o=M7(t,T7);return p.createElement("svg",md({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,rb||(rb=p.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),ob||(ob=p.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))},N7=["title","titleId"];function bd(){return bd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},bd.apply(null,arguments)}function F7(t,n){if(t==null)return{};var r,o,i=L7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function L7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ab,rx=function(t){var n=t.title,r=t.titleId,o=F7(t,N7);return p.createElement("svg",bd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ib||(ib=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})))},A7=["title","titleId"];function vd(){return vd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},vd.apply(null,arguments)}function _7(t,n){if(t==null)return{};var r,o,i=$7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var lb,sb,ox=function(t){var n=t.title,r=t.titleId,o=_7(t,A7);return p.createElement("svg",vd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ab||(ab=p.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))},z7=["title","titleId"];function yd(){return yd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},yd.apply(null,arguments)}function H7(t,n){if(t==null)return{};var r,o,i=B7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function B7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var cb,ub,ix=function(t){var n=t.title,r=t.titleId,o=H7(t,z7);return p.createElement("svg",yd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,lb||(lb=p.createElement("circle",{cx:10,cy:8,r:4})),sb||(sb=p.createElement("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},V7=["title","titleId"];function wd(){return wd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},wd.apply(null,arguments)}function W7(t,n){if(t==null)return{};var r,o,i=U7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function U7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var db,ax=function(t){var n=t.title,r=t.titleId,o=W7(t,V7);return p.createElement("svg",wd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,cb||(cb=p.createElement("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zm0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z"})),ub||(ub=p.createElement("path",{d:"M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z"})))},q7=["title","titleId"];function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},xd.apply(null,arguments)}function Y7(t,n){if(t==null)return{};var r,o,i=K7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function K7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var fb,pb,lx=function(t){var n=t.title,r=t.titleId,o=Y7(t,q7);return p.createElement("svg",xd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,db||(db=p.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))},G7=["title","titleId"];function jd(){return jd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},jd.apply(null,arguments)}function Q7(t,n){if(t==null)return{};var r,o,i=Z7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Z7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var gb,sx=function(t){var n=t.title,r=t.titleId,o=Q7(t,G7);return p.createElement("svg",jd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,fb||(fb=p.createElement("path",{d:"M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86a8 8 0 0 1-5.61 1.01c-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"})),pb||(pb=p.createElement("path",{d:"M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"})))},J7=["title","titleId"];function Ed(){return Ed=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ed.apply(null,arguments)}function X7(t,n){if(t==null)return{};var r,o,i=eR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function eR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var hb,cx=function(t){var n=t.title,r=t.titleId,o=X7(t,J7);return p.createElement("svg",Ed({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,gb||(gb=p.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"})))},tR=["title","titleId"];function kd(){return kd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},kd.apply(null,arguments)}function nR(t,n){if(t==null)return{};var r,o,i=rR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function rR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var mb,ux=function(t){var n=t.title,r=t.titleId,o=nR(t,tR);return p.createElement("svg",kd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,hb||(hb=p.createElement("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"})))},oR=["title","titleId"];function Od(){return Od=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Od.apply(null,arguments)}function iR(t,n){if(t==null)return{};var r,o,i=aR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function aR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var bb,vb,dx=function(t){var n=t.title,r=t.titleId,o=iR(t,oR);return p.createElement("svg",Od({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,mb||(mb=p.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})))},lR=["title","titleId"];function Sd(){return Sd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Sd.apply(null,arguments)}function sR(t,n){if(t==null)return{};var r,o,i=cR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function cR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var yb,fx=function(t){var n=t.title,r=t.titleId,o=sR(t,lR);return p.createElement("svg",Sd({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,bb||(bb=p.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),vb||(vb=p.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))},uR=["title","titleId"];function Cd(){return Cd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Cd.apply(null,arguments)}function dR(t,n){if(t==null)return{};var r,o,i=fR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function fR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var wb,px=function(t){var n=t.title,r=t.titleId,o=dR(t,uR);return p.createElement("svg",Cd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,yb||(yb=p.createElement("path",{d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},pR=["title","titleId"];function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Pd.apply(null,arguments)}function gR(t,n){if(t==null)return{};var r,o,i=hR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function hR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var xb,jb,Eb,kb,gx=function(t){var n=t.title,r=t.titleId,o=gR(t,pR);return p.createElement("svg",Pd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,wb||(wb=p.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))},mR=["title","titleId"];function Id(){return Id=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Id.apply(null,arguments)}function bR(t,n){if(t==null)return{};var r,o,i=vR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function vR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ob,Sb,Cb,Pb,hx=function(t){var n=t.title,r=t.titleId,o=bR(t,mR);return p.createElement("svg",Id({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,xb||(xb=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),jb||(jb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Eb||(Eb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),kb||(kb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},yR=["title","titleId"];function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Dd.apply(null,arguments)}function wR(t,n){if(t==null)return{};var r,o,i=xR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function xR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ib,Db,Tb,Mb,mx=function(t){var n=t.title,r=t.titleId,o=wR(t,yR);return p.createElement("svg",Dd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ob||(Ob=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Sb||(Sb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Cb||(Cb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),Pb||(Pb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},jR=["title","titleId"];function Td(){return Td=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Td.apply(null,arguments)}function ER(t,n){if(t==null)return{};var r,o,i=kR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Rb,Nb,Fb,bx=function(t){var n=t.title,r=t.titleId,o=ER(t,jR);return p.createElement("svg",Td({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ib||(Ib=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Db||(Db=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Tb||(Tb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),Mb||(Mb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))},OR=["title","titleId"];function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Md.apply(null,arguments)}function SR(t,n){if(t==null)return{};var r,o,i=CR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function CR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Lb,vx=function(t){var n=t.title,r=t.titleId,o=SR(t,OR);return p.createElement("svg",Md({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Rb||(Rb=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Nb||(Nb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Fb||(Fb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))},PR=["title","titleId"];function Rd(){return Rd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Rd.apply(null,arguments)}function IR(t,n){if(t==null)return{};var r,o,i=DR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function DR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ab,yx=function(t){var n=t.title,r=t.titleId,o=IR(t,PR);return p.createElement("svg",Rd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Lb||(Lb=p.createElement("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"})))},TR=["title","titleId"];function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Nd.apply(null,arguments)}function MR(t,n){if(t==null)return{};var r,o,i=RR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function RR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var _b,wx=function(t){var n=t.title,r=t.titleId,o=MR(t,TR);return p.createElement("svg",Nd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ab||(Ab=p.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})))},NR=["title","titleId"];function Fd(){return Fd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Fd.apply(null,arguments)}function FR(t,n){if(t==null)return{};var r,o,i=LR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function LR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var $b,xx=function(t){var n=t.title,r=t.titleId,o=FR(t,NR);return p.createElement("svg",Fd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,_b||(_b=p.createElement("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"})))},AR=["title","titleId"];function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ld.apply(null,arguments)}function _R(t,n){if(t==null)return{};var r,o,i=$R(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $R(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var jx=function(t){var n=t.title,r=t.titleId,o=_R(t,AR);return p.createElement("svg",Ld({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,$b||($b=p.createElement("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"})))};const zR=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,HR=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,tr=["accessTime","accountCircle","addCircle","autoAwesomeMosaic","autoAwesomeMotion","bolt","calendarToday","cancel","check","checkCircle","chevronLeft","chevronRight","close","comment","contentCopy","danger","dangerous","default","deleteForever","description","dns","download","edit","error","errorOutline","exitToApp","expandLess","expandMore","filterAlt","forum","help","home","info","manageAccounts","monitorHeart","moreVert","nightsStay","notificationsOff","openInBrowser","openInNew","place","search","severityLow","severityMedium","severityHigh","severityCritical","success","upload","warning","wbSunny","widgets"],BR=t=>{let{icon:n,color:r,size:o,title:i,iconClassName:a,...l}=t;const c=`juno-icon juno-icon-${n} jn-fill-current ${r} ${a}`;return n==="accessTime"?S.createElement(Dw,xe({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):n==="accountCircle"?S.createElement(Tw,xe({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):n==="addCircle"?S.createElement(Mw,xe({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):n==="autoAwesomeMosaic"?S.createElement(Rw,xe({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):n==="autoAwesomeMotion"?S.createElement(Nw,xe({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):n==="bolt"?S.createElement(Fw,xe({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):n==="calendarToday"?S.createElement(Lw,xe({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):n==="cancel"?S.createElement(Aw,xe({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):n==="check"?S.createElement(_w,xe({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):n==="checkCircle"?S.createElement($w,xe({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):n==="chevronLeft"?S.createElement(zw,xe({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):n==="chevronRight"?S.createElement(Hw,xe({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):n==="close"?S.createElement(Bw,xe({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):n==="comment"?S.createElement(ox,xe({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):n==="contentCopy"?S.createElement(Vw,xe({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):n==="danger"?S.createElement(Ww,xe({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):n==="dangerous"?S.createElement(ul,xe({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):n==="deleteForever"?S.createElement(qw,xe({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):n==="description"?S.createElement(Yw,xe({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):n==="dns"?S.createElement(Kw,xe({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):n==="download"?S.createElement(Uw,xe({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):n==="edit"?S.createElement(Gw,xe({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):n==="error"?S.createElement(ul,xe({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):n==="errorOutline"?S.createElement(Qw,xe({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):n==="exitToApp"?S.createElement(Zw,xe({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):n==="expandLess"?S.createElement(Jw,xe({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):n==="expandMore"?S.createElement(Xw,xe({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):n==="filterAlt"?S.createElement(ex,xe({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):n==="forum"?S.createElement(tx,xe({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):n==="help"?S.createElement(ko,xe({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):n==="home"?S.createElement(nx,xe({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):n==="info"?S.createElement(rx,xe({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):n==="manageAccounts"?S.createElement(ix,xe({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):n==="monitorHeart"?S.createElement(ax,xe({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):n==="moreVert"?S.createElement(lx,xe({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):n==="nightsStay"?S.createElement(sx,xe({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):n==="notificationsOff"?S.createElement(cx,xe({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):n==="openInBrowser"?S.createElement(ux,xe({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):n==="openInNew"?S.createElement(dx,xe({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):n==="place"?S.createElement(fx,xe({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):n==="search"?S.createElement(gx,xe({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):n==="severityLow"?S.createElement(hx,xe({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):n==="severityMedium"?S.createElement(mx,xe({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):n==="severityHigh"?S.createElement(bx,xe({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):n==="severityCritical"?S.createElement(vx,xe({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):n==="success"?S.createElement(px,xe({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):n==="upload"?S.createElement(yx,xe({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):n==="widgets"?S.createElement(jx,xe({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):n==="warning"?S.createElement(wx,xe({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):n==="wbSunny"?S.createElement(xx,xe({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):n==="default"?S.createElement(ko,xe({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement(ko,xe({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},Ri=p.forwardRef((t,n)=>{let{icon:r=null,color:o="",size:i="24",title:a="",className:l="",href:c="",disabled:u=!1,onClick:d,...f}=t;const g=c||d?"":l,b=c||d?{}:f,h=BR({icon:r,color:o,size:i,title:a,iconClassName:g,...b}),m=S.createElement("button",xe({onClick:E=>{d&&d(E)},className:`juno-icon-button ${HR} ${l}`,"aria-label":a||r,disabled:u,ref:n},f),h),y=S.createElement("a",xe({href:c,className:`juno-icon-link ${zR} ${l}`,"aria-label":a||r,ref:n},f),h);return c?y:d?m:S.createElement("span",{ref:n},h)});Ri.displayName="Icon",Ri.propTypes={icon:j.oneOf(tr),color:j.string,size:j.string,title:j.string,className:j.string,href:j.string,disabled:j.bool,onClick:j.func};const VR=["info","success","warning","danger","error","critical"];j.oneOf(["default",...VR]),j.oneOfType([j.bool,j.oneOf(tr)]),j.string,j.string,j.node;j.node,j.bool,j.string;j.oneOf(tr),j.string,j.string,j.string,j.bool,j.func,j.bool,j.string,j.node;j.node,j.string,j.oneOf(["horizontal","vertical"]),j.oneOf(["start","end","center","baseline","stretch"]),j.oneOf(["start","end","center","between","around","evenly"]),j.bool,j.oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"]);j.string,j.node;const WR=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,UR=`
  jn-text-theme-accent
`,qR=`
  jn-text-theme-danger 
`,YR=`
  jn-text-theme-success
`,KR=`
  jn-text-theme-warning  
`,GR=`
  jn-text-theme-on-default
`,Ex=t=>{let{variant:n="default",size:r=null,className:o="",color:i="",...a}=t;const l=u=>u==="small"?"1rem":u==="large"?"3rem":u,c=r?{width:l(r),height:l(r)}:{};return S.createElement("svg",xe({className:`juno-spinner ${WR} ${i||(n==="primary"?UR:n==="danger"?qR:n==="success"?YR:n==="warning"?KR:GR)} ${o}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:c,role:"progressbar"},a),S.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Ex.propTypes={variant:j.oneOf(["primary","danger","default","success","warning"]),size:j.string,className:j.string,color:j.string};const zb=`
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
`,Hb=`
  jn-text-sm
  jn-leading-5
`,Bb=`
  jn-text-base
  jn-leading-6
`,QR=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,ZR=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,JR=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,XR=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,Vb=(t,n)=>t==="small"?n==="subdued"?`${ZR}`:`${QR}`:n==="subdued"?`${XR}`:`${JR}`,e6=`
  jn-mr-2
`,t6=`
  jn-mr-2
`,n6=t=>t==="small"?`${e6}`:`${t6}`,Wb=t=>t?"in-progress":"",r6=t=>t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":"",Ub=S.forwardRef((t,n)=>{let{label:r,title:o=null,variant:i,size:a="default",disabled:l=null,href:c=null,icon:u=null,className:d="",onClick:f,children:g,progress:b=!1,progressLabel:h="",...m}=t;const y=i||"default",E=o||r||"",v=b?S.createElement(Ex,{size:a==="small"?"1.125rem":"1.5rem",color:`${r6(y)}`}):u?S.createElement(Ri,{icon:u,title:E,className:`juno-button-icon ${r||g?n6(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,k=b&&h?h:r||g,C=S.createElement("button",xe({type:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${zb} 
          ${a==="small"?Hb:Bb} 
          ${Vb(a,i)}
          ${Wb(b)} 
          ${d}`,disabled:l,onClick:I=>{f&&f(I)},title:E,ref:n},m),v,k),M=S.createElement("a",xe({href:c,role:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${zb} 
          ${a==="small"?Hb:Bb}
          ${Vb(a,i)}
          ${Wb(b)} 
          ${d}
        `,disabled:l,onClick:f,title:E,ref:n},m),v,k);return c?M:C});Ub.displayName="Button",Ub.propTypes={children:j.any,variant:j.oneOf(["primary","primary-danger","default","subdued"]),size:j.oneOf(["small","default"]),disabled:j.bool,href:j.string,label:j.string,title:j.string,icon:j.oneOf(tr),className:j.string,onClick:j.func,progress:j.bool,progressLabel:j.string};j.string,j.node;var o6=`
  jn-text-theme-high
  jn-text-base
  jn-transform 
  jn-origin-top-left 
  jn-transition-all 
  jn-duration-100 
  jn-ease-in-out
  jn-z-10
`,i6=`
  jn-absolute
`,a6=`
  jn-scale-75
  -jn-translate-y-[0.4375rem]
`,l6=`
  jn-inline-block
  jn-w-1
  jn-h-1
  jn-rounded-full
  jn-align-top
  jn-ml-1
  jn-mt-2
  jn-bg-theme-required
`,s6=`
  jn-opacity-50
  jn-cursor-not-allowed
`,c6=S.forwardRef(function(t,n){var r=t.text,o=r===void 0?"":r,i=t.htmlFor,a=i===void 0?void 0:i,l=t.required,c=t.className,u=c===void 0?"":c,d=t.disabled,f=t.floating,g=t.minimized,b=Dr(t,["text","htmlFor","required","className","disabled","floating","minimized"]);return S.createElement("label",ve({className:`
        juno-label 
        `.concat(o6,` 
        `).concat(f!==void 0&&f?"juno-label-floating "+i6:"",`
        `).concat(g!==void 0&&g?"juno-label-minimized "+a6:"",`
        `).concat(d!==void 0&&d?"juno-label-disabled "+s6:"",` 
        `).concat(u,`
      `),htmlFor:a,ref:n},b),o,l!==void 0&&l?S.createElement("span",{className:`
          juno-required 
          `.concat(l6,`
          `)}):"")});c6.displayName="Label";var Oe,u6=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,d6=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`;(function(t){t.accessTime="accessTime",t.accountCircle="accountCircle",t.addCircle="addCircle",t.autoAwesomeMosaic="autoAwesomeMosaic",t.autoAwesomeMotion="autoAwesomeMotion",t.bolt="bolt",t.calendarToday="calendarToday",t.cancel="cancel",t.check="check",t.checkCircle="checkCircle",t.chevronLeft="chevronLeft",t.chevronRight="chevronRight",t.close="close",t.comment="comment",t.contentCopy="contentCopy",t.danger="danger",t.dangerous="dangerous",t.default="default",t.deleteForever="deleteForever",t.description="description",t.dns="dns",t.download="download",t.edit="edit",t.error="error",t.errorOutline="errorOutline",t.exitToApp="exitToApp",t.expandLess="expandLess",t.expandMore="expandMore",t.filterAlt="filterAlt",t.forum="forum",t.help="help",t.home="home",t.info="info",t.manageAccounts="manageAccounts",t.monitorHeart="monitorHeart",t.moreVert="moreVert",t.nightsStay="nightsStay",t.notificationsOff="notificationsOff",t.openInBrowser="openInBrowser",t.openInNew="openInNew",t.place="place",t.search="search",t.severityLow="severityLow",t.severityMedium="severityMedium",t.severityHigh="severityHigh",t.severityCritical="severityCritical",t.success="success",t.upload="upload",t.warning="warning",t.wbSunny="wbSunny",t.widgets="widgets"})(Oe||(Oe={}));var f6=function(t){var n=t.icon,r=t.color,o=t.size,i=t.title,a=t.iconClassName,l=Dr(t,["icon","color","size","title","iconClassName"]),c="juno-icon juno-icon-".concat(n," jn-fill-current ").concat(r," ").concat(a),u=Oe[n||"default"];return u===Oe.accessTime?S.createElement(Dw,ve({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):u===Oe.accountCircle?S.createElement(Tw,ve({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):u===Oe.addCircle?S.createElement(Mw,ve({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):u===Oe.autoAwesomeMosaic?S.createElement(Rw,ve({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):u===Oe.autoAwesomeMotion?S.createElement(Nw,ve({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):u===Oe.bolt?S.createElement(Fw,ve({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):u===Oe.calendarToday?S.createElement(Lw,ve({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):u===Oe.cancel?S.createElement(Aw,ve({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):u===Oe.check?S.createElement(_w,ve({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):u===Oe.checkCircle?S.createElement($w,ve({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):u===Oe.chevronLeft?S.createElement(zw,ve({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):u===Oe.chevronRight?S.createElement(Hw,ve({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):u===Oe.close?S.createElement(Bw,ve({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):u===Oe.comment?S.createElement(ox,ve({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):u===Oe.contentCopy?S.createElement(Vw,ve({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):u===Oe.danger?S.createElement(Ww,ve({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):u===Oe.dangerous?S.createElement(ul,ve({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):u===Oe.deleteForever?S.createElement(qw,ve({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):u===Oe.description?S.createElement(Yw,ve({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):u===Oe.dns?S.createElement(Kw,ve({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):u===Oe.download?S.createElement(Uw,ve({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):u===Oe.edit?S.createElement(Gw,ve({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):u===Oe.error?S.createElement(ul,ve({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):u===Oe.errorOutline?S.createElement(Qw,ve({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):u===Oe.exitToApp?S.createElement(Zw,ve({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):u===Oe.expandLess?S.createElement(Jw,ve({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):u===Oe.expandMore?S.createElement(Xw,ve({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):u===Oe.filterAlt?S.createElement(ex,ve({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):u===Oe.forum?S.createElement(tx,ve({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):u===Oe.help?S.createElement(ko,ve({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):u===Oe.home?S.createElement(nx,ve({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):u===Oe.info?S.createElement(rx,ve({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):u===Oe.manageAccounts?S.createElement(ix,ve({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):u===Oe.monitorHeart?S.createElement(ax,ve({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):u===Oe.moreVert?S.createElement(lx,ve({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):u===Oe.nightsStay?S.createElement(sx,ve({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):u===Oe.notificationsOff?S.createElement(cx,ve({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):u===Oe.openInBrowser?S.createElement(ux,ve({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):u===Oe.openInNew?S.createElement(dx,ve({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):u===Oe.place?S.createElement(fx,ve({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):u===Oe.search?S.createElement(gx,ve({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):u===Oe.severityLow?S.createElement(hx,ve({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):u===Oe.severityMedium?S.createElement(mx,ve({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):u===Oe.severityHigh?S.createElement(bx,ve({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):u===Oe.severityCritical?S.createElement(vx,ve({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):u===Oe.success?S.createElement(px,ve({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):u===Oe.upload?S.createElement(yx,ve({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):u===Oe.widgets?S.createElement(jx,ve({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):u===Oe.warning?S.createElement(wx,ve({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):u===Oe.wbSunny?S.createElement(xx,ve({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):u===Oe.default?S.createElement(ko,ve({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):S.createElement(ko,ve({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},kx=p.forwardRef(function(t,n){var r=t.icon,o=r===void 0?null:r,i=t.color,a=i===void 0?"":i,l=t.size,c=l===void 0?24:l,u=t.title,d=u===void 0?"":u,f=t.className,g=f===void 0?"":f,b=t.href,h=b===void 0?"":b,m=t.disabled,y=t.onClick,E=Dr(t,["icon","color","size","title","className","href","disabled","onClick"]),v=h||y?"":g,k=h||y?{}:E,C=f6(ve({icon:o||void 0,color:a,size:c,title:d,iconClassName:v},k)),M=S.createElement("button",ve({},E,{type:"button",onClick:function(D){y&&y(D)},className:"juno-icon-button ".concat(d6," ").concat(g),"aria-label":d||o||void 0,disabled:m!==void 0&&m,ref:n}),C),I=S.createElement("a",ve({},E,{"aria-label":d||o||void 0,href:h,className:"juno-icon-link ".concat(u6," ").concat(g),ref:n}),C);return h?I:y?M:S.createElement("span",{ref:n},C)});kx.displayName="IconTs";p.createContext(void 0);j.string,j.string,j.node;j.string,j.oneOf(["rounded","hero","default"]),j.bool,j.string,j.string,j.string,j.bool,j.string,j.func,j.func,j.func,j.func,j.func;const p6={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"};S.createContext(p6);j.bool;j.string;j.oneOfType([j.string,j.number]);j.string,j.any;j.oneOfType([j.string,j.number,j.bool]),j.any,j.number;j.oneOfType([j.object,j.array]).isRequired,j.object,j.bool,j.bool,j.oneOfType([j.shape({base00:j.string,base01:j.string,base02:j.string,base03:j.string,base04:j.string,base05:j.string,base06:j.string,base07:j.string,base08:j.string,base09:j.string,base0A:j.string,base0B:j.string,base0C:j.string,base0D:j.string,base0E:j.string,base0F:j.string}),j.oneOf(["dark","light"])]),j.oneOfType([j.number,j.bool]),j.oneOfType([j.bool,j.number]),j.number,j.string;j.oneOfType([j.string,j.object]),j.oneOfType([j.node,j.object]),j.string,j.bool,j.oneOf(["auto","small","medium","large"]),j.bool,j.string,j.string;var g6=Object.defineProperty,h6=(t,n,r)=>n in t?g6(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,Gs=(t,n,r)=>(h6(t,typeof n=="symbol"?n:n+"",r),r);let m6=class{constructor(){Gs(this,"current",this.detect()),Gs(this,"handoffState","pending"),Gs(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},er=new m6,Qe=(t,n)=>{er.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)};function yn(t){let n=p.useRef(t);return Qe(()=>{n.current=t},[t]),n}let ge=function(t){let n=yn(t);return S.useCallback(function(){return n.current(...arguments)},[n])};function Ox(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(n=>setTimeout(()=>{throw n}))}function Vt(){let t=[],n={addEventListener(r,o,i,a){return r.addEventListener(o,i,a),n.add(()=>r.removeEventListener(o,i,a))},requestAnimationFrame(){let r=requestAnimationFrame(...arguments);return n.add(()=>cancelAnimationFrame(r))},nextFrame(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...o))},setTimeout(){let r=setTimeout(...arguments);return n.add(()=>clearTimeout(r))},microTask(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];let a={current:!0};return Ox(()=>{a.current&&o[0]()}),n.add(()=>{a.current=!1})},style(r,o,i){let a=r.style.getPropertyValue(o);return Object.assign(r.style,{[o]:i}),this.add(()=>{Object.assign(r.style,{[o]:a})})},group(r){let o=Vt();return r(o),this.add(()=>o.dispose())},add(r){return t.push(r),()=>{let o=t.indexOf(r);if(0<=o)for(let i of t.splice(o,1))i()}},dispose(){for(let r of t.splice(0))r()}};return n}function En(){let[t]=p.useState(Vt);return p.useEffect(()=>()=>t.dispose(),[t]),t}function b6(){let t=typeof document>"u";return"useSyncExternalStore"in Xr&&(n=>n.useSyncExternalStore)(Xr)(()=>()=>{},()=>!1,()=>!t)}function Kl(){let t=b6(),[n,r]=p.useState(er.isHandoffComplete);return n&&er.isHandoffComplete===!1&&r(!1),p.useEffect(()=>{n!==!0&&r(!0)},[n]),p.useEffect(()=>er.handoff(),[]),!t&&n}var qb;let un=(qb=S.useId)==null?function(){let t=Kl(),[n,r]=S.useState(t?()=>er.nextId():null);return Qe(()=>{n===null&&r(er.nextId())},[n]),n==null?void 0:""+n}:qb;function ot(t,n){if(t in n){let l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}let a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ot),a}function Xi(t){return er.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let Ad=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var _d=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(_d||{}),v6=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(v6||{}),y6=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(y6||{});function Sx(){var t=Number.MAX_SAFE_INTEGER;let n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.body;return n==null?[]:Array.from(n.querySelectorAll(Ad)).sort((r,o)=>Math.sign((r.tabIndex||t)-(o.tabIndex||t)))}var Gl=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Gl||{});function Ql(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=Xi(t))==null?void 0:r.body)&&ot(n,{0(){return t.matches(Ad)},1(){for(let o=t;o!==null;){if(o.matches(Ad))return!0;o=o.parentElement}return!1}})}function Cx(t){let n=Xi(t);Vt().nextFrame(()=>{n&&!Ql(n.activeElement,0)&&x6(t)})}var w6=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w6||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function x6(t){t==null||t.focus({preventScroll:!0})}let j6="textarea,input";function E6(t){var n,r;return(r=(n=t==null?void 0:t.matches)==null?void 0:n.call(t,j6))!=null&&r}function Zl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:r=>r;return t.slice().sort((r,o)=>{let i=n(r),a=n(o);if(i===null||a===null)return 0;let l=i.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function k6(t,n){return O6(Sx(),n,{relativeTo:t})}function O6(t,n){let{sorted:r=!0,relativeTo:o=null,skipElements:i=[]}=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},a=Array.isArray(t)?0<t.length?t[0].ownerDocument:document:t.ownerDocument,l=Array.isArray(t)?r?Zl(t):t:Sx(t);0<i.length&&1<l.length&&(l=l.filter(h=>!i.includes(h))),o=o??a.activeElement;let c,u=(()=>{if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{var h=Math.max;if(1&n)return 0;if(2&n)return h(0,l.indexOf(o))-1;if(4&n)return h(0,l.indexOf(o))+1;if(8&n)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&n?{preventScroll:!0}:{},g=0,b=l.length;do{if(g>=b||0>=g+b)return 0;let h=d+g;if(16&n)h=(h+b)%b;else{if(0>h)return 3;if(h>=b)return 1}c=l[h],c==null||c.focus(f),g+=u}while(c!==a.activeElement);return 6&n&&E6(c)&&c.select(),2}function S6(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&0<window.navigator.maxTouchPoints}function C6(){return/Android/gi.test(window.navigator.userAgent)}function Px(){return S6()||C6()}function ya(t,n,r){let o=yn(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function P6(t,n,r){let o=yn(n);p.useEffect(()=>{function i(a){o.current(a)}return window.addEventListener(t,i,r),()=>window.removeEventListener(t,i,r)},[t,r])}function np(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){let u=c(l);if(u!==null&&u.getRootNode().contains(u)&&u.isConnected){let d=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t);for(let f of d){if(f===null)continue;let g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(u)||l.composed&&l.composedPath().includes(g))return}return!Ql(u,Gl.Loose)&&u.tabIndex!==-1&&l.preventDefault(),n(l,u)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);let a=p.useRef(null);ya("pointerdown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ya("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ya("click",l=>{Px()||a.current&&(r(l,()=>a.current),a.current=null)},!0),ya("touchend",l=>r(l,()=>l.target instanceof HTMLElement?l.target:null),!0),P6("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Jl(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return p.useMemo(()=>Xi(...n),[...n])}function Yb(t){var n;if(t.type)return t.type;let r=(n=t.as)==null?"button":n;if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function rp(t,n){let[r,o]=p.useState(()=>Yb(t));return Qe(()=>{o(Yb(t))},[t.type,t.as]),Qe(()=>{r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")},[r,n]),r}let Ix=Symbol();function I6(t){let n=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return Object.assign(t,{[Ix]:n})}function jt(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=p.useRef(n);p.useEffect(()=>{o.current=n},[n]);let i=ge(a=>{for(let l of o.current)l!=null&&(typeof l=="function"?l(a):l.current=a)});return n.every(a=>a==null||(a==null?void 0:a[Ix]))?void 0:i}function Kb(t){return[t.screenX,t.screenY]}function op(){let t=p.useRef([-1,-1]);return{wasMoved(n){let r=Kb(n);return(t.current[0]!==r[0]||t.current[1]!==r[1])&&(t.current=r,!0)},update(n){t.current=Kb(n)}}}function dl(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return Array.from(new Set(n.flatMap(o=>typeof o=="string"?o.split(" "):[]))).filter(Boolean).join(" ")}var Sr=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Sr||{}),xr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(xr||{});function mt(t){let{ourProps:n,theirProps:r,slot:o,defaultTag:i,features:a,visible:l=!0,name:c,mergeRefs:u}=t;u=u??D6;let d=Dx(r,n);if(l)return wa(d,o,i,c,u);let f=a??0;if(2&f){let{static:g=!1,...b}=d;if(g)return wa(b,o,i,c,u)}if(1&f){let{unmount:g=!0,...b}=d;return ot(g?0:1,{0(){return null},1(){return wa({...b,hidden:!0,style:{display:"none"}},o,i,c,u)}})}return wa(d,o,i,c,u)}function wa(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},r=2<arguments.length?arguments[2]:void 0,o=3<arguments.length?arguments[3]:void 0,i=4<arguments.length?arguments[4]:void 0,{as:a=r,children:l,refName:c="ref",...u}=Qs(t,["unmount","static"]),d=t.ref===void 0?{}:{[c]:t.ref},f=typeof l=="function"?l(n):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(n));let g={};if(n){let b=!1,h=[];for(let[m,y]of Object.entries(n))typeof y=="boolean"&&(b=!0),y===!0&&h.push(m);b&&(g["data-headlessui-state"]=h.join(" "))}if(a===p.Fragment&&0<Object.keys(fl(u)).length){if(!p.isValidElement(f)||Array.isArray(f)&&1<f.length)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let b=f.props,h=typeof(b==null?void 0:b.className)=="function"?function(){return dl(b==null?void 0:b.className(...arguments),u.className)}:dl(b==null?void 0:b.className,u.className),m=h?{className:h}:{};return p.cloneElement(f,Object.assign({},Dx(f.props,fl(Qs(u,["ref"]))),g,d,{ref:i(f.ref,d.ref)},m))}return p.createElement(a,Object.assign({},Qs(u,["ref"]),a!==p.Fragment&&d,a!==p.Fragment&&g),f)}function D6(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.every(o=>o==null)?void 0:o=>{for(let i of n)i!=null&&(typeof i=="function"?i(o):i.current=o)}}function Dx(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length===0)return{};if(n.length===1)return n[0];let o={},i={};for(let a of n)for(let l in a)l.startsWith("on")&&typeof a[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(a[l])):o[l]=a[l];if(o.disabled||o["aria-disabled"])return Object.assign(o,Object.fromEntries(Object.keys(i).map(a=>[a,void 0])));for(let a in i)Object.assign(o,{[a](l){let c=i[a];for(var u=arguments.length,d=Array(1<u?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];for(let g of c){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;g(l,...d)}}});return o}function pt(t){var n;return Object.assign(p.forwardRef(t),{displayName:(n=t.displayName)==null?t.name:n})}function fl(t){let n=Object.assign({},t);for(let r in n)n[r]===void 0&&delete n[r];return n}function Qs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],r=Object.assign({},t);for(let o of n)o in r&&delete r[o];return r}let ip=p.createContext(null);ip.displayName="OpenClosedContext";var dt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(dt||{});function ea(){return p.useContext(ip)}function Xl(t){let{value:n,children:r}=t;return S.createElement(ip.Provider,{value:n},r)}function ap(t){let n=t.parentElement,r=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(r=n),n=n.parentElement;let o=(n==null?void 0:n.getAttribute("disabled"))==="";return!(o&&T6(r))&&o}function T6(t){if(!t)return!1;for(let n=t.previousElementSibling;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}function M6(t){throw new Error("Unexpected object: "+t)}var Le=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Le||{});function pl(t,n){let r=n.resolveItems();if(0>=r.length)return null;let o=n.resolveActiveIndex(),i=o??-1;switch(t.focus){case 0:{for(let a=0;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 1:{for(let a=i-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 2:{for(let a=i+1;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 3:{for(let a=r.length-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 4:{for(let a=0;a<r.length;++a)if(n.resolveId(r[a],a,r)===t.id)return a;return o}case 5:return null;default:M6(t)}}var Me=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Me||{});const Tx=["top","right","bottom","left"],Gb=["start","end"],Qb=Tx.reduce((t,n)=>t.concat(n,n+"-"+Gb[0],n+"-"+Gb[1]),[]),$d=Math.min,R6=Math.max,N6={left:"right",right:"left",bottom:"top",top:"bottom"},F6={start:"end",end:"start"};function zd(t,n,r){return R6(t,$d(n,r))}function lo(t,n){return typeof t=="function"?t(n):t}function nr(t){return t.split("-")[0]}function An(t){return t.split("-")[1]}function Mx(t){return t==="x"?"y":"x"}function lp(t){return t==="y"?"height":"width"}function Go(t){return["top","bottom"].includes(nr(t))?"y":"x"}function sp(t){return Mx(Go(t))}function Rx(t,n,r){r===void 0&&(r=!1);const o=An(t),i=sp(t),a=lp(i);let l=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=hl(l)),[l,hl(l)]}function L6(t){const n=hl(t);return[gl(t),n,gl(n)]}function gl(t){return t.replace(/start|end/g,n=>F6[n])}function A6(t,n,r){const o=["left","right"],i=["right","left"];return t==="top"||t==="bottom"?r?n?i:o:n?o:i:t==="left"||t==="right"?n?["top","bottom"]:["bottom","top"]:[]}function _6(t,n,r,o){const i=An(t);let a=A6(nr(t),r==="start",o);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(gl)))),a}function hl(t){return t.replace(/left|right|bottom|top/g,n=>N6[n])}function $6(t){return{top:0,right:0,bottom:0,left:0,...t}}function Nx(t){return typeof t=="number"?{top:t,right:t,bottom:t,left:t}:$6(t)}function ml(t){const{x:n,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:n,right:n+o,bottom:r+i,x:n,y:r}}function Zb(t,n,r){let{reference:o,floating:i}=t;const a=Go(n),l=sp(n),c=lp(l),u=nr(n),d=a==="y",f=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,b=o[c]/2-i[c]/2;let h;switch(h=u==="top"?{x:f,y:o.y-i.height}:u==="bottom"?{x:f,y:o.y+o.height}:u==="right"?{x:o.x+o.width,y:g}:u==="left"?{x:o.x-i.width,y:g}:{x:o.x,y:o.y},An(n)){case"start":h[l]-=b*(r&&d?-1:1);break;case"end":h[l]+=b*(r&&d?-1:1)}return h}const z6=async(t,n,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:l}=r,c=a.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(n));let d=await l.getElementRects({reference:t,floating:n,strategy:i}),{x:f,y:g}=Zb(d,o,u),b=o,h={},m=0;for(let y=0;y<c.length;y++){const{name:E,fn:v}=c[y],{x:k,y:C,data:M,reset:I}=await v({x:f,y:g,initialPlacement:o,placement:b,strategy:i,middlewareData:h,rects:d,platform:l,elements:{reference:t,floating:n}});f=k??f,g=C??g,h={...h,[E]:{...h[E],...M}},I&&50>=m&&(m++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(d=I.rects===!0?await l.getElementRects({reference:t,floating:n,strategy:i}):I.rects),{x:f,y:g}=Zb(d,b,u)),y=-1)}return{x:f,y:g,placement:b,strategy:i,middlewareData:h}};async function Ni(t,n){var r;n===void 0&&(n={});const{x:o,y:i,platform:a,rects:l,elements:c,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:b=!1,padding:h=0}=lo(n,t),m=Nx(h),y=g==="floating"?"reference":"floating",E=c[b?y:g],v=ml(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(E)))==null||r?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:u})),k=g==="floating"?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),M=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},I=ml(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:C,strategy:u}):k);return{top:(v.top-I.top+m.top)/M.y,bottom:(I.bottom-v.bottom+m.bottom)/M.y,left:(v.left-I.left+m.left)/M.x,right:(I.right-v.right+m.right)/M.x}}const H6=t=>({name:"arrow",options:t,async fn(n){const{x:r,y:o,placement:i,rects:a,platform:l,elements:c,middlewareData:u}=n,{element:d,padding:f=0}=lo(t,n)||{};if(d==null)return{};const g=Nx(f),b={x:r,y:o},h=sp(i),m=lp(h),y=await l.getDimensions(d),E=h==="y",v=E?"top":"left",k=E?"bottom":"right",C=E?"clientHeight":"clientWidth",M=a.reference[m]+a.reference[h]-b[h]-a.floating[m],I=b[h]-a.reference[h],D=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let z=D?D[C]:0;z&&await(l.isElement==null?void 0:l.isElement(D))||(z=c.floating[C]||a.floating[m]);const A=z/2-y[m]/2-1,J=$d(g[v],A),V=$d(g[k],A),F=J,L=z-y[m]-V,_=z/2-y[m]/2+(M/2-I/2),N=zd(F,_,L),B=!u.arrow&&An(i)!=null&&_!==N&&0>a.reference[m]/2-(_<F?J:V)-y[m]/2,H=B?_<F?_-F:_-L:0;return{[h]:b[h]+H,data:{[h]:N,centerOffset:_-N-H,...B&&{alignmentOffset:H}},reset:B}}});function B6(t,n,r){return(t?[...r.filter(o=>An(o)===t),...r.filter(o=>An(o)!==t)]:r.filter(o=>nr(o)===o)).filter(o=>!t||An(o)===t||!!n&&gl(o)!==o)}const V6=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(n){var r,o,i;const{rects:a,middlewareData:l,placement:c,platform:u,elements:d}=n,{crossAxis:f=!1,alignment:g,allowedPlacements:b=Qb,autoAlignment:h=!0,...m}=lo(t,n),y=g!==void 0||b===Qb?B6(g||null,h,b):b,E=await Ni(n,m),v=((r=l.autoPlacement)==null?void 0:r.index)||0,k=y[v];if(k==null)return{};const C=Rx(k,a,await(u.isRTL==null?void 0:u.isRTL(d.floating)));if(c!==k)return{reset:{placement:y[0]}};const M=[E[nr(k)],E[C[0]],E[C[1]]],I=[...((o=l.autoPlacement)==null?void 0:o.overflows)||[],{placement:k,overflows:M}],D=y[v+1];if(D)return{data:{index:v+1,overflows:I},reset:{placement:D}};const z=I.map(V=>{const F=An(V.placement);return[V.placement,F&&f?V.overflows.slice(0,2).reduce((L,_)=>L+_,0):V.overflows[0],V.overflows]}).sort((V,F)=>V[1]-F[1]),A=z.filter(V=>V[2].slice(0,An(V[0])?2:3).every(F=>0>=F)),J=((i=A[0])==null?void 0:i[0])||z[0][0];return J===c?{}:{data:{index:v+1,overflows:I},reset:{placement:J}}}}},W6=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var r,o;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:u,elements:d}=n,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0,...E}=lo(t,n);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const v=nr(i),k=Go(c),C=nr(c)===c,M=await(u.isRTL==null?void 0:u.isRTL(d.floating)),I=b||(C||!y?[hl(c)]:L6(c)),D=m!=="none";!b&&D&&I.push(..._6(c,y,m,M));const z=[c,...I],A=await Ni(n,E),J=[];let V=((o=a.flip)==null?void 0:o.overflows)||[];if(f&&J.push(A[v]),g){const N=Rx(i,l,M);J.push(A[N[0]],A[N[1]])}if(V=[...V,{placement:i,overflows:J}],!J.every(N=>0>=N)){var F,L;const N=(((F=a.flip)==null?void 0:F.index)||0)+1,B=z[N];if(B)return{data:{index:N,overflows:V},reset:{placement:B}};let H=(L=V.filter(U=>0>=U.overflows[0]).sort((U,Q)=>U.overflows[1]-Q.overflows[1])[0])==null?void 0:L.placement;if(!H)switch(h){case"bestFit":{var _;const U=(_=V.filter(Q=>{if(D){const X=Go(Q.placement);return X===k||X==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(X=>0<X).reduce((X,R)=>X+R,0)]).sort((Q,X)=>Q[1]-X[1])[0])==null?void 0:_[0];U&&(H=U);break}case"initialPlacement":H=c}if(i!==H)return{reset:{placement:H}}}return{}}}};function Jb(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function Xb(t){return Tx.some(n=>0<=t[n])}const U6=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:r}=n,{strategy:o="referenceHidden",...i}=lo(t,n);switch(o){case"referenceHidden":{const a=await Ni(n,{...i,elementContext:"reference"}),l=Jb(a,r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Xb(l)}}}case"escaped":{const a=await Ni(n,{...i,altBoundary:!0}),l=Jb(a,r.floating);return{data:{escapedOffsets:l,escaped:Xb(l)}}}default:return{}}}}};async function q6(t,n){const{placement:r,platform:o,elements:i}=t,a=await(o.isRTL==null?void 0:o.isRTL(i.floating)),l=nr(r),c=An(r),u=Go(r)==="y",d=["left","top"].includes(l)?-1:1,f=a&&u?-1:1,g=lo(n,t);let{mainAxis:b,crossAxis:h,alignmentAxis:m}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof m=="number"&&(h=c==="end"?-1*m:m),u?{x:h*f,y:b*d}:{x:b*d,y:h*f}}const Y6=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var r,o;const{x:i,y:a,placement:l,middlewareData:c}=n,u=await q6(n,t);return l===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:l}}}}},K6=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:r,y:o,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:E=>{let{x:v,y:k}=E;return{x:v,y:k}}},...u}=lo(t,n),d={x:r,y:o},f=await Ni(n,u),g=Go(nr(i)),b=Mx(g);let h=d[b],m=d[g];if(a){const E=b==="y"?"top":"left",v=b==="y"?"bottom":"right",k=h+f[E],C=h-f[v];h=zd(k,h,C)}if(l){const E=g==="y"?"top":"left",v=g==="y"?"bottom":"right",k=m+f[E],C=m-f[v];m=zd(k,m,C)}const y=c.fn({...n,[b]:h,[g]:m});return{...y,data:{x:y.x-r,y:y.y-o,enabled:{[b]:a,[g]:l}}}}}},Hd=Math.min,Oo=Math.max,bl=Math.round,xa=Math.floor,Cr=t=>({x:t,y:t});function es(){return typeof window<"u"}function ni(t){return Fx(t)?(t.nodeName||"").toLowerCase():"#document"}function tn(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function Vn(t){var n;return(n=(Fx(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function Fx(t){return!!es()&&(t instanceof Node||t instanceof tn(t).Node)}function kn(t){return!!es()&&(t instanceof Element||t instanceof tn(t).Element)}function Hn(t){return!!es()&&(t instanceof HTMLElement||t instanceof tn(t).HTMLElement)}function ev(t){return!!(es()&&typeof ShadowRoot<"u")&&(t instanceof ShadowRoot||t instanceof tn(t).ShadowRoot)}function ta(t){const{overflow:n,overflowX:r,overflowY:o,display:i}=On(t);return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function G6(t){return["table","td","th"].includes(ni(t))}function ts(t){return[":popover-open",":modal"].some(n=>{try{return t.matches(n)}catch{return!1}})}function cp(t){const n=up(),r=kn(t)?On(t):t;return r.transform!=="none"||r.perspective!=="none"||!!r.containerType&&r.containerType!=="normal"||!n&&!!r.backdropFilter&&r.backdropFilter!=="none"||!n&&!!r.filter&&r.filter!=="none"||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Q6(t){for(let n=Pr(t);Hn(n)&&!Qo(n);){if(cp(n))return n;if(ts(n))return null;n=Pr(n)}return null}function up(){return!!(typeof CSS<"u"&&CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Qo(t){return["html","body","#document"].includes(ni(t))}function On(t){return tn(t).getComputedStyle(t)}function ns(t){return kn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Pr(t){if(ni(t)==="html")return t;const n=t.assignedSlot||t.parentNode||ev(t)&&t.host||Vn(t);return ev(n)?n.host:n}function Lx(t){const n=Pr(t);return Qo(n)?t.ownerDocument?t.ownerDocument.body:t.body:Hn(n)&&ta(n)?n:Lx(n)}function Fi(t,n,r){var o;n===void 0&&(n=[]),r===void 0&&(r=!0);const i=Lx(t),a=i===((o=t.ownerDocument)==null?void 0:o.body),l=tn(i);if(a){const c=Bd(l);return n.concat(l,l.visualViewport||[],ta(i)?i:[],c&&r?Fi(c):[])}return n.concat(i,Fi(i,[],r))}function Bd(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ax(t){const n=On(t);let r=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=Hn(t),a=i?t.offsetWidth:r,l=i?t.offsetHeight:o,c=bl(r)!==a||bl(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function dp(t){return kn(t)?t:t.contextElement}function So(t){var n=Number.isFinite;const r=dp(t);if(!Hn(r))return Cr(1);const o=r.getBoundingClientRect(),{width:i,height:a,$:l}=Ax(r);let c=(l?bl(o.width):o.width)/i,u=(l?bl(o.height):o.height)/a;return c&&n(c)||(c=1),u&&n(u)||(u=1),{x:c,y:u}}const Z6=Cr(0);function _x(t){const n=tn(t);return up()&&n.visualViewport?{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}:Z6}function J6(t,n,r){return n===void 0&&(n=!1),r&&(!n||r===tn(t))&&n}function oo(t,n,r,o){n===void 0&&(n=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),a=dp(t);let l=Cr(1);n&&(o?kn(o)&&(l=So(o)):l=So(t));const c=J6(a,r,o)?_x(a):Cr(0);let u=(i.left+c.x)/l.x,d=(i.top+c.y)/l.y,f=i.width/l.x,g=i.height/l.y;if(a){const b=tn(a),h=o&&kn(o)?tn(o):o;let m=b,y=Bd(m);for(;y&&o&&h!==m;){const E=So(y),v=y.getBoundingClientRect(),k=On(y),C=v.left+(y.clientLeft+parseFloat(k.paddingLeft))*E.x,M=v.top+(y.clientTop+parseFloat(k.paddingTop))*E.y;u*=E.x,d*=E.y,f*=E.x,g*=E.y,u+=C,d+=M,m=tn(y),y=Bd(m)}}return ml({width:f,height:g,x:u,y:d})}function X6(t){let{elements:n,rect:r,offsetParent:o,strategy:i}=t;const a=i==="fixed",l=Vn(o),c=!!n&&ts(n.floating);if(o===l||c&&a)return r;let u={scrollLeft:0,scrollTop:0},d=Cr(1);const f=Cr(0),g=Hn(o);if((g||!g&&!a)&&((ni(o)!=="body"||ta(l))&&(u=ns(o)),Hn(o))){const b=oo(o);d=So(o),f.x=b.x+o.clientLeft,f.y=b.y+o.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+f.x,y:r.y*d.y-u.scrollTop*d.y+f.y}}function e9(t){return Array.from(t.getClientRects())}function Vd(t,n){const r=ns(t).scrollLeft;return n?n.left+r:oo(Vn(t)).left+r}function t9(t){const n=Vn(t),r=ns(t),o=t.ownerDocument.body,i=Oo(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),a=Oo(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+Vd(t);const c=-r.scrollTop;return On(o).direction==="rtl"&&(l+=Oo(n.clientWidth,o.clientWidth)-i),{width:i,height:a,x:l,y:c}}function n9(t,n){const r=tn(t),o=Vn(t),i=r.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,u=0;if(i){a=i.width,l=i.height;const d=up();(!d||d&&n==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:l,x:c,y:u}}function r9(t,n){const r=oo(t,!0,n==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,a=Hn(t)?So(t):Cr(1),l=t.clientWidth*a.x,c=t.clientHeight*a.y,u=i*a.x,d=o*a.y;return{width:l,height:c,x:u,y:d}}function tv(t,n,r){let o;if(n==="viewport")o=n9(t,r);else if(n==="document")o=t9(Vn(t));else if(kn(n))o=r9(n,r);else{const i=_x(t);o={...n,x:n.x-i.x,y:n.y-i.y}}return ml(o)}function $x(t,n){const r=Pr(t);return r!==n&&kn(r)&&!Qo(r)&&(On(r).position==="fixed"||$x(r,n))}function o9(t,n){const r=n.get(t);if(r)return r;let o=Fi(t,[],!1).filter(l=>kn(l)&&ni(l)!=="body"),i=null;const a=On(t).position==="fixed";for(let l=a?Pr(t):t;kn(l)&&!Qo(l);){const c=On(l),u=cp(l);u||c.position!=="fixed"||(i=null),(a?!u&&!i:!u&&c.position==="static"&&i&&["absolute","fixed"].includes(i.position)||ta(l)&&!u&&$x(t,l))?o=o.filter(d=>d!==l):i=c,l=Pr(l)}return n.set(t,o),o}function i9(t){let{element:n,boundary:r,rootBoundary:o,strategy:i}=t;const a=r==="clippingAncestors"?ts(n)?[]:o9(n,this._c):[].concat(r),l=[...a,o],c=l[0],u=l.reduce((d,f)=>{const g=tv(n,f,i);return d.top=Oo(g.top,d.top),d.right=Hd(g.right,d.right),d.bottom=Hd(g.bottom,d.bottom),d.left=Oo(g.left,d.left),d},tv(n,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function a9(t){const{width:n,height:r}=Ax(t);return{width:n,height:r}}function l9(t,n,r){const o=Hn(n),i=Vn(n),a=r==="fixed",l=oo(t,!0,a,n);let c={scrollLeft:0,scrollTop:0};const u=Cr(0);if(o||!o&&!a)if((ni(n)!=="body"||ta(i))&&(c=ns(n)),o){const h=oo(n,!0,a,n);u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}else i&&(u.x=Vd(i));let d=0,f=0;if(i&&!o&&!a){const h=i.getBoundingClientRect();f=h.top+c.scrollTop,d=h.left+c.scrollLeft-Vd(i,h)}const g=l.left+c.scrollLeft-u.x-d,b=l.top+c.scrollTop-u.y-f;return{x:g,y:b,width:l.width,height:l.height}}function Zs(t){return On(t).position==="static"}function nv(t,n){if(!Hn(t)||On(t).position==="fixed")return null;if(n)return n(t);let r=t.offsetParent;return Vn(t)===r&&(r=r.ownerDocument.body),r}function zx(t,n){const r=tn(t);if(ts(t))return r;if(!Hn(t)){for(let i=Pr(t);i&&!Qo(i);){if(kn(i)&&!Zs(i))return i;i=Pr(i)}return r}let o=nv(t,n);for(;o&&G6(o)&&Zs(o);)o=nv(o,n);return o&&Qo(o)&&Zs(o)&&!cp(o)?r:o||Q6(t)||r}const s9=async function(t){const n=this.getOffsetParent||zx,r=this.getDimensions,o=await r(t.floating);return{reference:l9(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function c9(t){return On(t).direction==="rtl"}const u9={convertOffsetParentRelativeRectToViewportRelativeRect:X6,getDocumentElement:Vn,getClippingRect:i9,getOffsetParent:zx,getElementRects:s9,getClientRects:e9,getDimensions:a9,getScale:So,isElement:kn,isRTL:c9};function d9(t,n){function r(){var c;clearTimeout(i),(c=a)==null||c.disconnect(),a=null}function o(c,u){function d(M){const I=M[0].intersectionRatio;if(I!==u){if(!C)return o();I?o(!1,I):i=setTimeout(()=>{o(!1,1e-7)},1e3)}C=!1}c===void 0&&(c=!1),u===void 0&&(u=1),r();const{left:f,top:g,width:b,height:h}=t.getBoundingClientRect();if(c||n(),!b||!h)return;const m=xa(g),y=xa(l.clientWidth-(f+b)),E=xa(l.clientHeight-(g+h)),v=xa(f),k={rootMargin:-m+"px "+-y+"px "+-E+"px "+-v+"px",threshold:Oo(0,Hd(1,u))||1};let C=!0;try{a=new IntersectionObserver(d,{...k,root:l.ownerDocument})}catch{a=new IntersectionObserver(d,k)}a.observe(t)}let i,a=null;const l=Vn(t);return o(!0),r}function f9(t,n,r,o){function i(){const v=oo(t);E&&(v.x!==E.x||v.y!==E.y||v.width!==E.width||v.height!==E.height)&&r(),E=v,y=requestAnimationFrame(i)}o===void 0&&(o={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,f=dp(t),g=a||l?[...f?Fi(f):[],...Fi(n)]:[];g.forEach(v=>{a&&v.addEventListener("scroll",r,{passive:!0}),l&&v.addEventListener("resize",r)});const b=f&&u?d9(f,r):null;let h=-1,m=null;c&&(m=new ResizeObserver(v=>{let[k]=v;k&&k.target===f&&m&&(m.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(n)})),r()}),f&&!d&&m.observe(f),m.observe(n));let y,E=d?oo(t):null;return d&&i(),r(),()=>{var v;g.forEach(k=>{a&&k.removeEventListener("scroll",r),l&&k.removeEventListener("resize",r)}),b==null||b(),(v=m)==null||v.disconnect(),m=null,d&&cancelAnimationFrame(y)}}const p9=Y6,g9=V6,h9=K6,m9=W6,b9=U6,rv=H6,v9=(t,n,r)=>{const o=new Map,i={platform:u9,...r},a={...i.platform,_c:o};return z6(t,n,{...i,platform:a})};function fp(){let t=p.useRef(!1);return Qe(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function y9(t){let n=ge(t),r=p.useRef(!1);p.useEffect(()=>(r.current=!1,()=>{r.current=!0,Ox(()=>{r.current&&n()})}),[n])}let w9=p.createContext(!1);function x9(){return p.useContext(w9)}function j9(t){let n=x9(),r=p.useContext(Hx),o=Jl(t),[i,a]=p.useState(()=>{if(!n&&r!==null||er.isServer)return null;let l=o==null?void 0:o.getElementById("headlessui-portal-root");if(l)return l;if(o===null)return null;let c=o.createElement("div");return c.setAttribute("id","headlessui-portal-root"),o.body.appendChild(c)});return p.useEffect(()=>{i!==null&&(o!=null&&o.body.contains(i)||o==null||o.body.appendChild(i))},[i,o]),p.useEffect(()=>{n||r!==null&&a(r.current)},[r,a,n]),i}let E9=p.Fragment;function k9(t,n){let r=p.useRef(null),o=jt(I6(d=>{r.current=d}),n),i=Jl(r),a=j9(r),[l]=p.useState(()=>{var d;return er.isServer||(d=i==null?void 0:i.createElement("div"))==null?null:d}),c=p.useContext(C9),u=Kl();return Qe(()=>{a&&l&&!a.contains(l)&&(l.setAttribute("data-headlessui-portal",""),a.appendChild(l))},[a,l]),Qe(()=>{if(l&&c)return c.register(l)},[c,l]),y9(()=>{var d;a&&l&&(l instanceof Node&&a.contains(l)&&a.removeChild(l),0>=a.childNodes.length&&((d=a.parentElement)==null||d.removeChild(a)))}),u&&a&&l?or.createPortal(mt({ourProps:{ref:o},theirProps:t,defaultTag:E9,name:"Portal"}),l):null}let O9=p.Fragment,Hx=p.createContext(null);function S9(t,n){let{target:r,...o}=t,i={ref:jt(n)};return S.createElement(Hx.Provider,{value:r},mt({ourProps:i,theirProps:o,defaultTag:O9,name:"Popover.Group"}))}let C9=p.createContext(null),P9=pt(k9),I9=pt(S9),D9=Object.assign(P9,{Group:I9});function T9(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,[n,r]=p.useState(t),o=fp(),i=p.useCallback(u=>{o.current&&r(d=>d|u)},[n,o]),a=p.useCallback(u=>!!(n&u),[n]),l=p.useCallback(u=>{o.current&&r(d=>d&~u)},[r,o]),c=p.useCallback(u=>{o.current&&r(d=>d^u)},[r]);return{flags:n,addFlag:i,hasFlag:a,removeFlag:l,toggleFlag:c}}function M9(t){let n={called:!1};return function(){if(!n.called)return n.called=!0,t(...arguments)}}function Js(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.add(...r)}function Xs(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.remove(...r)}function R9(t,n){let r=Vt();if(!t)return r.dispose;let{transitionDuration:o,transitionDelay:i}=getComputedStyle(t),[a,l]=[o,i].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):1e3*parseFloat(f)).sort((f,g)=>g-f);return d}),c=a+l;if(c!==0){r.group(d=>{d.setTimeout(()=>{n(),d.dispose()},c),d.addEventListener(t,"transitionrun",f=>{f.target===f.currentTarget&&d.dispose()})});let u=r.addEventListener(t,"transitionend",d=>{d.target===d.currentTarget&&(n(),u())})}else n();return r.add(()=>n()),r.dispose}function N9(t,n,r,o){let i=r?"enter":"leave",a=Vt(),l=o===void 0?()=>{}:M9(o);i=="enter"&&(t.removeAttribute("hidden"),t.style.display="");let c=ot(i,{enter:()=>n.enter,leave:()=>n.leave}),u=ot(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),d=ot(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return Xs(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),Js(t,...n.base,...c,...d),a.nextFrame(()=>{Xs(t,...n.base,...c,...d),Js(t,...n.base,...c,...u),R9(t,()=>(Xs(t,...n.base,...c),Js(t,...n.base,...n.entered),l()))}),a.dispose}function F9(t){let{immediate:n,container:r,direction:o,classes:i,onStart:a,onStop:l}=t,c=fp(),u=En(),d=yn(o);Qe(()=>{n&&(d.current="enter")},[n]),Qe(()=>{let f=Vt();u.add(f.dispose);let g=r.current;if(g&&d.current!=="idle"&&c.current)return f.dispose(),a.current(d.current),f.add(N9(g,i.current,d.current==="enter",()=>{f.dispose(),l.current(d.current)})),f.dispose},[o])}function cr(){return(0<arguments.length&&arguments[0]!==void 0?arguments[0]:"").split(/\s+/).filter(t=>1<t.length)}let rs=p.createContext(null);rs.displayName="TransitionContext";var L9=(t=>(t.Visible="visible",t.Hidden="hidden",t))(L9||{});function A9(){let t=p.useContext(rs);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function _9(){let t=p.useContext(os);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let os=p.createContext(null);os.displayName="NestingContext";function is(t){return"children"in t?is(t.children):0<t.current.filter(n=>{let{el:r}=n;return r.current!==null}).filter(n=>{let{state:r}=n;return r==="visible"}).length}function Bx(t,n){let r=yn(t),o=p.useRef([]),i=fp(),a=En(),l=ge(function(h){let m=1<arguments.length&&arguments[1]!==void 0?arguments[1]:xr.Hidden,y=o.current.findIndex(E=>{let{el:v}=E;return v===h});y!==-1&&(ot(m,{[xr.Unmount](){o.current.splice(y,1)},[xr.Hidden](){o.current[y].state="hidden"}}),a.microTask(()=>{var E;!is(o)&&i.current&&((E=r.current)==null||E.call(r))}))}),c=ge(h=>{let m=o.current.find(y=>{let{el:E}=y;return E===h});return m?m.state!=="visible"&&(m.state="visible"):o.current.push({el:h,state:"visible"}),()=>l(h,xr.Unmount)}),u=p.useRef([]),d=p.useRef(Promise.resolve()),f=p.useRef({enter:[],leave:[],idle:[]}),g=ge((h,m,y)=>{u.current.splice(0),n&&(n.chains.current[m]=n.chains.current[m].filter(E=>{let[v]=E;return v!==h})),n==null||n.chains.current[m].push([h,new Promise(E=>{u.current.push(E)})]),n==null||n.chains.current[m].push([h,new Promise(E=>{Promise.all(f.current[m].map(v=>{let[k,C]=v;return C})).then(()=>E())})]),m==="enter"?d.current=d.current.then(()=>n==null?void 0:n.wait.current).then(()=>y(m)):y(m)}),b=ge((h,m,y)=>{Promise.all(f.current[m].splice(0).map(E=>{let[v,k]=E;return k})).then(()=>{var E;(E=u.current.shift())==null||E()}).then(()=>y(m))});return p.useMemo(()=>({children:o,register:c,unregister:l,onStart:g,onStop:b,wait:d,chains:f}),[c,l,o,g,b,f,d])}function $9(){}let z9=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ov(t){var n;let r={};for(let o of z9)r[o]=(n=t[o])==null?$9:n;return r}function H9(t){let n=p.useRef(ov(t));return p.useEffect(()=>{n.current=ov(t)},[t]),n}let B9="div",Vx=Sr.RenderStrategy;function V9(t,n){var r,o;let{beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c,enter:u,enterFrom:d,enterTo:f,entered:g,leave:b,leaveFrom:h,leaveTo:m,...y}=t,E=p.useRef(null),v=jt(E,n),k=(r=y.unmount)==null||r?xr.Unmount:xr.Hidden,{show:C,appear:M,initial:I}=A9(),[D,z]=p.useState(C?"visible":"hidden"),A=_9(),{register:J,unregister:V}=A;p.useEffect(()=>J(E),[J,E]),p.useEffect(()=>{if(k===xr.Hidden&&E.current)return C&&D!=="visible"?void z("visible"):ot(D,{hidden:()=>V(E),visible:()=>J(E)})},[D,E,J,V,C,k]);let F=yn({base:cr(y.className),enter:cr(u),enterFrom:cr(d),enterTo:cr(f),entered:cr(g),leave:cr(b),leaveFrom:cr(h),leaveTo:cr(m)}),L=H9({beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c}),_=Kl();p.useEffect(()=>{if(_&&D==="visible"&&E.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[E,D,_]);let N=M&&C&&I,B=!_||I&&!M?"idle":C?"enter":"leave",H=T9(0),U=ge(se=>ot(se,{enter:()=>{H.addFlag(dt.Opening),L.current.beforeEnter()},leave:()=>{H.addFlag(dt.Closing),L.current.beforeLeave()},idle:()=>{}})),Q=ge(se=>ot(se,{enter:()=>{H.removeFlag(dt.Opening),L.current.afterEnter()},leave:()=>{H.removeFlag(dt.Closing),L.current.afterLeave()},idle:()=>{}})),X=Bx(()=>{z("hidden"),V(E)},A),R=p.useRef(!1);F9({immediate:N,container:E,classes:F,direction:B,onStart:yn(se=>{R.current=!0,X.onStart(E,se,U)}),onStop:yn(se=>{R.current=!1,X.onStop(E,se,Q),se!=="leave"||is(X)||(z("hidden"),V(E))})});let ae=y;return N?ae={...ae,className:dl(y.className,...F.current.enter,...F.current.enterFrom)}:R.current&&(ae.className=dl(y.className,(o=E.current)==null?void 0:o.className),ae.className===""&&delete ae.className),S.createElement(os.Provider,{value:X},S.createElement(Xl,{value:ot(D,{visible:dt.Open,hidden:dt.Closed})|H.flags},mt({ourProps:{ref:v},theirProps:ae,defaultTag:B9,features:Vx,visible:D==="visible",name:"Transition.Child"})))}function W9(t,n){let{show:r,appear:o=!1,unmount:i=!0,...a}=t,l=p.useRef(null),c=jt(l,n);Kl();let u=ea();if(r===void 0&&u!==null&&(r=(u&dt.Open)===dt.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,f]=p.useState(r?"visible":"hidden"),g=Bx(()=>{f("hidden")}),[b,h]=p.useState(!0),m=p.useRef([r]);Qe(()=>{b!==!1&&m.current[m.current.length-1]!==r&&(m.current.push(r),h(!1))},[m,r]);let y=p.useMemo(()=>({show:r,appear:o,initial:b}),[r,o,b]);p.useEffect(()=>{if(r)f("visible");else if(!is(g))f("hidden");else{let C=l.current;if(!C)return;let M=C.getBoundingClientRect();M.x===0&&M.y===0&&M.width===0&&M.height===0&&f("hidden")}},[r,g]);let E={unmount:i},v=ge(()=>{var C;b&&h(!1),(C=t.beforeEnter)==null||C.call(t)}),k=ge(()=>{var C;b&&h(!1),(C=t.beforeLeave)==null||C.call(t)});return S.createElement(os.Provider,{value:g},S.createElement(rs.Provider,{value:y},mt({ourProps:{...E,as:p.Fragment,children:S.createElement(Wx,{ref:c,...E,...a,beforeEnter:v,beforeLeave:k})},theirProps:{},defaultTag:p.Fragment,features:Vx,visible:d==="visible",name:"Transition"})))}function U9(t,n){let r=p.useContext(rs)!==null,o=ea()!==null;return S.createElement(S.Fragment,null,!r&&o?S.createElement(Wd,{ref:n,...t}):S.createElement(Wx,{ref:n,...t}))}let Wd=pt(W9),Wx=pt(V9),q9=pt(U9),iv=Object.assign(Wd,{Child:q9,Root:Wd});const Y9=t=>{function n(i){return Object.prototype.hasOwnProperty.call(i,"current")}const{element:r,padding:o}=t;return{name:"arrow",options:t,fn(i){return n(r)?r.current==null?{}:rv({element:r.current,padding:o}).fn(i):r?rv({element:r,padding:o}).fn(i):{}}}};var $a=typeof document>"u"?p.useEffect:p.useLayoutEffect;function vl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let r,o,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(o=r;o--!=0;)if(!vl(t[o],n[o]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!=0;){const a=i[o];if(!(a==="_owner"&&t.$$typeof)&&!vl(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function av(t){const n=p.useRef(t);return $a(()=>{n.current=t}),n}function K9(t){t===void 0&&(t={});const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:i,whileElementsMounted:a,open:l}=t,[c,u]=p.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[d,f]=p.useState(o);vl(d,o)||f(o);const g=p.useRef(null),b=p.useRef(null),h=p.useRef(c),m=av(a),y=av(i),[E,v]=p.useState(null),[k,C]=p.useState(null),M=p.useCallback(V=>{g.current!==V&&(g.current=V,v(V))},[]),I=p.useCallback(V=>{b.current!==V&&(b.current=V,C(V))},[]),D=p.useCallback(()=>{if(g.current&&b.current){const V={placement:n,strategy:r,middleware:d};y.current&&(V.platform=y.current),v9(g.current,b.current,V).then(F=>{const L={...F,isPositioned:!0};z.current&&!vl(h.current,L)&&(h.current=L,or.flushSync(()=>{u(L)}))})}},[d,n,r,y]);$a(()=>{l===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(V=>({...V,isPositioned:!1})))},[l]);const z=p.useRef(!1);$a(()=>(z.current=!0,()=>{z.current=!1}),[]),$a(()=>{if(E&&k){if(m.current)return m.current(E,k,D);D()}},[E,k,D,m]);const A=p.useMemo(()=>({reference:g,floating:b,setReference:M,setFloating:I}),[M,I]),J=p.useMemo(()=>({reference:E,floating:k}),[E,k]);return p.useMemo(()=>({...c,update:D,refs:A,elements:J,reference:M,floating:I}),[c,D,A,J,M,I])}var G9=typeof document>"u"?p.useEffect:p.useLayoutEffect;function Q9(){const t=new Map;return{emit(n,r){var o;(o=t.get(n))==null||o.forEach(i=>i(r))},on(n,r){t.set(n,[...t.get(n)||[],r])},off(n,r){t.set(n,(t.get(n)||[]).filter(o=>o!==r))}}}const Z9=p.createContext(null),J9=()=>p.useContext(Z9);function X9(t){return(t==null?void 0:t.ownerDocument)||document}function eN(t){return X9(t).defaultView||window}function ja(t){return!!t&&t instanceof eN(t).Element}const tN=p.useInsertionEffect,nN=tN||(t=>t());function rN(t){const n=p.useRef(()=>{});return nN(()=>{n.current=t}),p.useCallback(function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.current==null?void 0:n.current(...o)},[])}function oN(t){t===void 0&&(t={});const{open:n=!1,onOpenChange:r,nodeId:o}=t,i=K9(t),a=J9(),l=p.useRef(null),c=p.useRef({}),u=p.useState(()=>Q9())[0],[d,f]=p.useState(null),g=p.useCallback(v=>{const k=ja(v)?{getBoundingClientRect:()=>v.getBoundingClientRect(),contextElement:v}:v;i.refs.setReference(k)},[i.refs]),b=p.useCallback(v=>{(ja(v)||v===null)&&(l.current=v,f(v)),(ja(i.refs.reference.current)||i.refs.reference.current===null||v!==null&&!ja(v))&&i.refs.setReference(v)},[i.refs]),h=p.useMemo(()=>({...i.refs,setReference:b,setPositionReference:g,domReference:l}),[i.refs,b,g]),m=p.useMemo(()=>({...i.elements,domReference:d}),[i.elements,d]),y=rN(r),E=p.useMemo(()=>({...i,refs:h,elements:m,dataRef:c,nodeId:o,events:u,open:n,onOpenChange:y}),[i,o,u,n,y,h,m]);return G9(()=>{const v=a==null?void 0:a.nodesRef.current.find(k=>k.id===o);v&&(v.context=E)}),p.useMemo(()=>({...i,context:E,refs:h,reference:b,positionReference:g}),[i,h,E,b,g])}var lv,iN=Object.defineProperty,aN=(t,n,r)=>n in t?iN(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,sv=(t,n,r)=>(aN(t,typeof n=="symbol"?n:n+"",r),r),Ux={exports:{}},fi={};function lN(){function t(a,l,c){var u,d={},f=null,g=null;for(u in c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref),l)r.call(l,u)&&!i.hasOwnProperty(u)&&(d[u]=l[u]);if(a&&a.defaultProps)for(u in l=a.defaultProps,l)d[u]===void 0&&(d[u]=l[u]);return{$$typeof:n,type:a,key:f,ref:g,props:d,_owner:o.current}}if(lv)return fi;lv=1;var n=Symbol.for("react.element"),r=Object.prototype.hasOwnProperty,o=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};return fi.Fragment=Symbol.for("react.fragment"),fi.jsx=t,fi.jsxs=t,fi}Ux.exports=lN();var Ke=Ux.exports;class sN{constructor(){sv(this,"current",this.detect()),sv(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return"u"<typeof window||"u"<typeof document?"server":"client"}}const Zo=new sN,qx=(t,n)=>{Zo.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)},ec={serverHandoffComplete:!1};function cN(){const[t,n]=p.useState(ec.serverHandoffComplete);return p.useEffect(()=>{t!==!0&&n(!0)},[t]),p.useEffect(()=>{ec.serverHandoffComplete===!1&&(ec.serverHandoffComplete=!0)},[]),t}const uN=S.useId??function(){const t=cN(),[n,r]=S.useState(t?()=>Zo.nextId():null);return qx(()=>{n===null&&r(Zo.nextId())},[n]),n==null?void 0:`${n}`};function dN(t,n,r,o){p.useEffect(()=>{const i=[];(typeof o.offset=="number"||typeof o.offset=="object"||typeof o.offset=="function")&&i.push(p9(o.offset)),(o.flip===!0||typeof o.flip=="number"||typeof o.flip=="object")&&i.push(m9({padding:typeof o.flip=="number"?o.flip:void 0,...typeof o.flip=="object"?o.flip:{}})),(o.shift===!0||typeof o.shift=="number"||typeof o.shift=="object")&&i.push(h9({padding:typeof o.shift=="number"?o.shift:void 0,...typeof o.shift=="object"?o.shift:{}})),(o.autoPlacement===!0||typeof o.autoPlacement=="object")&&i.push(g9(typeof o.autoPlacement=="object"?o.autoPlacement:void 0)),(o.arrow===!0||typeof o.arrow=="number")&&i.push(Y9({element:r,padding:o.arrow===!0?0:o.arrow})),i.push(...typeof o.middleware=="function"?o.middleware({referenceEl:n.reference,floatingEl:n.floating}):o.middleware||[]),(o.hide===!0||typeof o.hide=="object")&&i.push(b9(typeof o.hide=="object"?o.hide:void 0)),t(i)},[o.offset,o.shift,o.flip,o.arrow,o.autoPlacement,o.hide,o.middleware])}function fN(t,n,r){p.useEffect(()=>{if(t&&Zo.isClient&&"u">typeof ResizeObserver&&n.current&&n.current instanceof Element){const o=new ResizeObserver(i=>{let[a]=i;const l=a.borderBoxSize.reduce((c,u)=>{let{inlineSize:d}=u;return c+d},0);r(l)});return o.observe(n.current),()=>{o.disconnect(),r(null)}}},[])}const pN=t=>t==="top"?"origin-bottom":t==="bottom"?"origin-top":t==="left"?"origin-right":t==="right"?"origin-left":t==="top-start"||t==="right-end"?"origin-bottom-left":t==="top-end"||t==="left-end"?"origin-bottom-right":t==="right-start"||t==="bottom-start"?"origin-top-left":t==="left-start"||t==="bottom-end"?"origin-top-right":"";function gN(t,n){return p.useMemo(()=>typeof t.originClass=="function"?t.originClass(n):typeof t.originClass=="string"?t.originClass:t.tailwindcssOriginClass?pN(n):"",[n,t.originClass,t.tailwindcssOriginClass])}function Yx(t,n){if(t in n){const l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}const a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Yx),a}function Kx(t){return Zo.isServer?null:t instanceof Node?t.ownerDocument:t&&Object.prototype.hasOwnProperty.call(t,"current")&&t.current instanceof Node?t.current.ownerDocument:document}const cv=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Gx=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Gx||{});function hN(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=Kx(t))==null?void 0:r.body)&&Yx(n,{0(){return t.matches(cv)},1(){for(let o=t;o!==null;){if(o.matches(cv))return!0;o=o.parentElement}return!1}})}function mN(t){const n=p.useRef(t);return qx(()=>{n.current=t},[t]),n}function Rn(t,n,r){const o=mN(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function bN(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){const u=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t),d=c(l);if(d!==null&&d.getRootNode().contains(d)){for(const f of u){if(f===null)continue;const g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(d)||l.composed&&l.composedPath().includes(g))return}return!hN(d,Gx.Loose)&&d.tabIndex!==-1&&l.preventDefault(),n(l,d)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];const i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);const a=p.useRef(null);Rn("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),Rn("click",l=>{a.current&&(r(l,()=>a.current),a.current=null)},!0),Rn("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}const Ea=new Map,pp=p.createContext(null);pp.displayName="ReferenceContext";const gp=p.createContext(null);gp.displayName="FloatingContext";const Li=p.createContext(null);Li.displayName="ArrowContext";function Qx(t){const n=p.useContext(pp);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Qx),r}return n}function Zx(t){const n=p.useContext(gp);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Zx),r}return n}function Jx(t){const n=p.useContext(Li);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Jx),r}return n}function Xx(t,n,r,o){const{referenceRef:i}=o,a=n;if(a.as===p.Fragment)return Ke.jsx(t.type,{...t.props,...r,ref:i});const l=a.as||"div";return Ke.jsx(l,{...r,ref:i,children:Ke.jsx(t.type,{...t.props})})}function hp(t,n,r,o){var i=Math.round;function a(I){return v.portal?Ke.jsx(D9,{children:I}):I}function l(I){const D={...M,...r,ref:u};if(v.as===p.Fragment)return Ke.jsx(I.type,{...I.props,...D});const z=v.as||"div";return Ke.jsx(z,{...D,children:Ke.jsx(I.type,{...I.props})})}function c(){return Zo.isServer?f.current&&v.show?Ke.jsx(t.type,{...t.props}):Ke.jsx(p.Fragment,{}):v.transitionChild?Ke.jsx(iv.Child,{as:p.Fragment,...C,children:Ke.jsx(t.type,{...t.props})}):Ke.jsx(iv,{as:p.Fragment,...C,children:Ke.jsx(t.type,{...t.props})})}const{floatingRef:u,props:d,mounted:f,setShow:g,x:b,y:h,placement:m,strategy:y,referenceElWidth:E}=o,v={...d,...n},k=gN(v,m),C={show:!!f.current&&v.show,enter:`${v.enter||""} ${k}`,enterFrom:`${v.enterFrom||""}`,enterTo:`${v.enterTo||""}`,leave:`${v.leave||""} ${k}`,leaveFrom:`${v.leaveFrom||""}`,leaveTo:`${v.leaveTo||""}`,beforeEnter:()=>{g(!0)},afterLeave:()=>{g(!1)}},M={style:{...!v.dialog&&(v.transform||v.transform===void 0)?{position:y,zIndex:v.zIndex||9999,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${i(b||0)}px,${i(h||0)}px)`}:{position:y,zIndex:v.zIndex||9999,top:`${h||0}px`,left:`${b||0}px`},width:v.adaptiveWidth&&typeof E=="number"?`${E}px`:void 0}};return a(l(c()))}function e2(t,n){let[r,o]=t;var i,a;const l=uN(),c=p.useRef(!1),[u,d]=p.useState(),f=p.useRef(null),g=p.useMemo(()=>({show:n.onShow||(()=>{}),hide:n.onHide||(()=>{}),update:n.onUpdate||(()=>{})}),[n.onShow,n.onHide,n.onUpdate]),{x:b,y:h,placement:m,strategy:y,update:E,refs:v,middlewareData:k}=oN({placement:n.placement||"bottom-start",strategy:n.strategy,middleware:u}),[C,M]=p.useState(null);p.useEffect(()=>{c.current=!0},[]),p.useEffect(()=>{r&&!Ea.get(l)?(Ea.set(l,!0),g.show()):!r&&Ea.get(l)&&(Ea.delete(l),g.hide())},[r]);const I=p.useCallback(()=>{E(),g.update()},[E,g]);p.useEffect(I,[n.placement,n.strategy,u]),dN(d,v,f,n),fN(n.adaptiveWidth,v.reference,M),p.useEffect(()=>{if(v.reference.current&&v.floating.current&&r)return n.autoUpdate===!1?()=>{}:f9(v.reference.current,v.floating.current,I,typeof n.autoUpdate=="object"?n.autoUpdate:void 0)},[r,I,v]);const D=p.useRef(!0);p.useEffect(()=>{!(v.reference.current instanceof Element)&&v.reference.current&&v.floating.current&&D.current&&(D.current=!1,I(),window.requestAnimationFrame(()=>{D.current=!0,I()}))},[v]);const z={referenceRef:v.setReference,placement:m},A={floatingRef:v.setFloating,props:n,mounted:c,setShow:o,x:b,y:h,placement:m,strategy:y,referenceElWidth:C},J={arrowRef:f,placement:m,x:(i=k.arrow)==null?void 0:i.x,y:(a=k.arrow)==null?void 0:a.y};return{referenceApi:z,floatingApi:A,arrowApi:J,x:b,y:h,placement:m,strategy:y,update:I,refs:v,middlewareData:k}}const t2=p.forwardRef((t,n)=>{function r(m){if(t.as===p.Fragment||!t.as)return Ke.jsx(p.Fragment,{children:m});const y=t.as;return Ke.jsx(y,{ref:n,className:t.className,children:m})}const[o,i]=p.useState(t.show??!1),{referenceApi:a,floatingApi:l,arrowApi:c,placement:u}=e2([o,i],t),d={placement:u},[f,g]=typeof t.children=="function"?t.children(d):t.children;if(!p.isValidElement(f))return console.warn("<Float /> is missing a reference and floating element."),Ke.jsx(p.Fragment,{});if(t.composable||t.dialog)return r(Ke.jsx(pp.Provider,{value:a,children:Ke.jsx(gp.Provider,{value:l,children:Ke.jsx(Li.Provider,{value:c,children:typeof t.children=="function"?t.children(d):t.children})})},"FloatingNode"));const b=Xx(f,{as:p.Fragment},{key:"reference-node"},a),h=hp(g,{as:t.floatingAs||"div"},{},l);return r([b,Ke.jsx(Li.Provider,{value:c,children:h},"floating-node")])});t2.displayName="Float";function vN(t){if(!t.children)return Ke.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,children:l,...c}=t;return c},[t]),r=Qx("Float.Reference"),{placement:o}=r,i={placement:o};return Xx(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||p.Fragment},n,r)}function yN(t){if(!t.children)return Ke.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,enter:l,enterFrom:c,enterTo:u,leave:d,leaveFrom:f,leaveTo:g,originClass:b,tailwindcssOriginClass:h,transitionChild:m,children:y,...E}=t;return E},[t]),r=Zx("Float.Content"),{placement:o}=r,i={placement:o};return hp(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||"div"},n,r)}function wN(t){const{arrowRef:n,placement:r,x:o,y:i}=Jx("Float.Arrow"),a=p.useMemo(()=>{const{as:d,offset:f,children:g,...b}=t;return b},[t]),l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]],c={left:typeof o=="number"?`${o}px`:void 0,top:typeof i=="number"?`${i}px`:void 0,right:void 0,bottom:void 0,[l]:`${-1*(t.offset??4)}px`,...a.style};if(t.as===p.Fragment){const d={placement:r},f=typeof t.children=="function"?t.children(d):t.children;return f&&p.isValidElement(f)?Ke.jsx(f.type,{...f.props,ref:n,style:c}):Ke.jsx(p.Fragment,{})}const u=t.as||"div";return Ke.jsx(u,{ref:n,...a,style:c,children:t.children})}function mp(t){function n(){a&&l(!1)}let{onInitial:r,children:o,...i}=t;const[a,l]=p.useState(i.show??!1),c=p.useMemo(()=>{const{as:h,show:m,placement:y,strategy:E,offset:v,shift:k,flip:C,arrow:M,autoPlacement:I,hide:D,autoUpdate:z,zIndex:A,enter:J,enterFrom:V,enterTo:F,leave:L,leaveFrom:_,leaveTo:N,originClass:B,tailwindcssOriginClass:H,portal:U,transform:Q,middleware:X,onShow:R,onHide:ae,onUpdate:se,...T}=i;return T},[i]),{floatingApi:u,arrowApi:d,placement:f,refs:g}=e2([a,l],i);if(p.useEffect(()=>{l(i.show??!1)},[i.show]),r({show:a,setShow:l,placement:f,refs:g}),!o)return Ke.jsx(p.Fragment,{});const b=hp(typeof o=="function"?o({placement:f,close:n}):o,{...i,as:i.as||p.Fragment,show:a},c,u);return Ke.jsx(Li.Provider,{value:d,children:b})}function xN(t){function n(r){let{setShow:o,refs:i}=r;Rn("contextmenu",a=>{a.preventDefault(),i.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:a.clientX,y:a.clientY,top:a.clientY,left:a.clientX,right:a.clientX,bottom:a.clientY}}}),o(!0)}),bN(i.floating,()=>{o(!1)})}return Ke.jsx(mp,{flip:!0,...t,show:!1,portal:!0,onInitial:n})}function jN(t){function n(i){function a(){f(!0)}function l(){f(!1)}function c(h){g.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:h.clientX,y:h.clientY,top:h.clientY,left:h.clientX,right:h.clientX,bottom:h.clientY}}})}function u(h){a(),c(h)}function d(h){a(),c(h.touches[0])}let{setShow:f,refs:g}=i;const b=Kx(g.floating);b&&(p.useEffect(()=>{if((r||r===void 0)&&!b.getElementById("headlesui-float-cursor-style")){const h=b.createElement("style");return(b.head||b.getElementsByTagName("head")[0]).appendChild(h),h.id="headlesui-float-cursor-style",h.appendChild(b.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var m;return(m=b.getElementById("headlesui-float-cursor-style"))==null?void 0:m.remove()}}},[r]),"ontouchstart"in window||0<navigator.maxTouchPoints?(Rn("touchstart",d),Rn("touchend",l),Rn("touchmove",d)):(Rn("mouseenter",u),Rn("mouseleave",l),Rn("mousemove",u)))}let{globalHideCursor:r,...o}=t;return Ke.jsx(mp,{...o,portal:!0,className:"headlesui-float-cursor-root",onInitial:n})}Object.assign(t2,{Reference:vN,Content:yN,Arrow:wN,Virtual:mp,ContextMenu:xN,Cursor:jN});const EN=`
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
	jn-z-10
`,kN=`
	jn-absolute
`,ON=`
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`,SN=`
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`,CN=`
	jn-opacity-50
	jn-cursor-not-allowed
`,uv=S.forwardRef((t,n)=>{let{text:r="",htmlFor:o=void 0,required:i=!1,className:a="",disabled:l=!1,floating:c=!1,minimized:u=!1,...d}=t;return S.createElement("label",xe({className:`
				juno-label 
				${EN} 
				${c?"juno-label-floating "+kN:""}
				${u?"juno-label-minimized "+ON:""}
				${l?"juno-label-disabled "+CN:""} 
				${a}
			`,htmlFor:o,ref:n},d),r,i?S.createElement("span",{className:`
					juno-required 
					${SN}
					`}):"")});uv.displayName="Label (JS)",uv.propTypes={text:j.string,htmlFor:j.string,required:j.bool,className:j.string,disabled:j.bool,floating:j.bool,minimized:j.bool};j.node,j.node,j.oneOf(["help","error","success"]),j.string;function na(t,n){let[r,o]=p.useState(t),i=yn(t);return Qe(()=>o(i.current),[i,o,...n]),r}function n2(t,n,r){let[o,i]=p.useState(r),a=t!==void 0,l=p.useRef(a),c=p.useRef(!1),u=p.useRef(!1);return!a||l.current||c.current?!a&&l.current&&!u.current&&(u.current=!0,l.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,l.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?t:o,ge(d=>(a||i(d),n==null?void 0:n(d)))]}let PN="div";var bp=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(bp||{});function IN(t,n){var r;let{features:o=1,...i}=t,a={ref:n,"aria-hidden":(2&o)==2||((r=i["aria-hidden"])==null?void 0:r),hidden:(4&o)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&o)==4&&(2&o)!=2&&{display:"none"}}};return mt({ourProps:a,theirProps:i,slot:{},defaultTag:PN,name:"Hidden"})}let r2=pt(IN);function vp(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[];for(let[o,i]of Object.entries(t))i2(r,o2(n,o),i);return r}function o2(t,n){return t?t+"["+n+"]":n}function i2(t,n,r){if(Array.isArray(r))for(let[o,i]of r.entries())i2(t,o2(n,o.toString()),i);else r instanceof Date?t.push([n,r.toISOString()]):typeof r=="boolean"?t.push([n,r?"1":"0"]):typeof r=="string"?t.push([n,r]):typeof r=="number"?t.push([n,`${r}`]):r==null?t.push([n,""]):vp(r,n,t)}function a2(t){let{container:n,accept:r,walk:o,enabled:i=!0}=t,a=p.useRef(r),l=p.useRef(o);p.useEffect(()=>{a.current=r,l.current=o},[r,o]),Qe(()=>{if(!n||!i)return;let c=Xi(n);if(!c)return;let u=a.current,d=l.current,f=Object.assign(b=>u(b),{acceptNode:u}),g=c.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,f,!1);for(;g.nextNode();)d(g.currentNode)},[n,i,a,l])}function go(t,n,r){var o=Math.max,i=Math.min,a=Math.round;let l,c=r.initialDeps??[];return()=>{var u,d,f,g;let b;r.key&&(u=r.debug)!=null&&u.call(r)&&(b=Date.now());const h=t();if(!(h.length!==c.length||h.some((y,E)=>c[E]!==y)))return l;c=h;let m;if(r.key&&(d=r.debug)!=null&&d.call(r)&&(m=Date.now()),l=n(...h),r.key&&((f=r.debug)==null?void 0:f.call(r))){const y=a(100*(Date.now()-b))/100,E=a(100*(Date.now()-m))/100,v=(k,C)=>{for(k+="";k.length<C;)k=" "+k;return k};console.info(`%c⏱ ${v(E,5)} /${v(y,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${o(0,i(120-120*(E/16),120))}deg 100% 31%);`,r==null?void 0:r.key)}return(g=r==null?void 0:r.onChange)==null||g.call(r,l),l}}function tc(t){if(t===void 0)throw new Error("Unexpected undefined");return t}const DN=(t,n)=>1>Math.abs(t-n),TN=(t,n,r)=>{let o;return function(){for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];t.clearTimeout(o),o=t.setTimeout(()=>n.apply(this,a),r)}},MN=t=>t,RN=t=>{const n=Math.max(t.startIndex-t.overscan,0),r=Math.min(t.endIndex+t.overscan,t.count-1),o=[];for(let i=n;i<=r;i++)o.push(i);return o},NN=(t,n)=>{var r=Math.round;const o=t.scrollElement;if(!o)return;const i=t.targetWindow;if(!i)return;const a=c=>{const{width:u,height:d}=c;n({width:r(u),height:r(d)})};if(a(o.getBoundingClientRect()),!i.ResizeObserver)return()=>{};const l=new i.ResizeObserver(c=>{const u=c[0];if(u!=null&&u.borderBoxSize){const d=u.borderBoxSize[0];if(d)return void a({width:d.inlineSize,height:d.blockSize})}a(o.getBoundingClientRect())});return l.observe(o,{box:"border-box"}),()=>{l.unobserve(o)}},dv={passive:!0},FN=!(typeof window<"u")||"onscrollend"in window,LN=(t,n)=>{const r=t.scrollElement;if(!r)return;const o=t.targetWindow;if(!o)return;let i=0;const a=FN?()=>{}:TN(o,()=>{n(i,!1)},t.options.isScrollingResetDelay),l=d=>()=>{const{horizontal:f,isRtl:g}=t.options;i=f?r.scrollLeft*(g&&-1||1):r.scrollTop,a(),n(i,d)},c=l(!0),u=l(!1);return u(),r.addEventListener("scroll",c,dv),r.addEventListener("scrollend",u,dv),()=>{r.removeEventListener("scroll",c),r.removeEventListener("scrollend",u)}},AN=(t,n,r)=>{var o=Math.round;if(n!=null&&n.borderBoxSize){const i=n.borderBoxSize[0];if(i)return o(i[r.options.horizontal?"inlineSize":"blockSize"])}return o(t.getBoundingClientRect()[r.options.horizontal?"width":"height"])},_N=(t,n,r)=>{let{adjustments:o=0,behavior:i}=n;var a,l;(l=(a=r.scrollElement)==null?void 0:a.scrollTo)==null||l.call(a,{[r.options.horizontal?"left":"top"]:t+o,behavior:i})};class $N{constructor(n){var r=Math.max,o=Math.min,i=this;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let a=null;const l=()=>a||(this.targetWindow&&this.targetWindow.ResizeObserver?a=new this.targetWindow.ResizeObserver(c=>{c.forEach(u=>{this._measureElement(u.target,u)})}):null);return{disconnect:()=>{var c;(c=l())==null||c.disconnect(),a=null},observe:c=>{var u;return(u=l())==null?void 0:u.observe(c,{box:"border-box"})},unobserve:c=>{var u;return(u=l())==null?void 0:u.unobserve(c)}}})(),this.range=null,this.setOptions=a=>{Object.entries(a).forEach(l=>{let[c,u]=l;typeof u>"u"&&delete a[c]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:MN,rangeExtractor:RN,onChange:()=>{},measureElement:AN,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...a}},this.notify=a=>{var l,c;(c=(l=this.options).onChange)==null||c.call(l,this,a)},this.maybeNotify=go(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;const l=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==l){if(this.cleanup(),!l)return void this.maybeNotify();this.scrollElement=l,this.targetWindow=this.scrollElement&&"ownerDocument"in this.scrollElement?this.scrollElement.ownerDocument.defaultView:((a=this.scrollElement)==null?void 0:a.window)??null,this.elementsCache.forEach(c=>{this.observer.observe(c)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,c=>{this.scrollRect=c,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(c,u)=>{this.scrollAdjustments=0,this.scrollDirection=u?this.getScrollOffset()<c?"forward":"backward":null,this.scrollOffset=c,this.isScrolling=u,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(a,l)=>{const c=new Map,u=new Map;for(let d=l-1;0<=d;d--){const f=a[d];if(c.has(f.lane))continue;const g=u.get(f.lane);if(g==null||f.end>g.end?u.set(f.lane,f):f.end<g.end&&c.set(f.lane,!0),c.size===this.options.lanes)break}return u.size===this.options.lanes?Array.from(u.values()).sort((d,f)=>d.end===f.end?d.index-f.index:d.end-f.end)[0]:void 0},this.getMeasurementOptions=go(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(a,l,c,u,d)=>(this.pendingMeasuredCacheIndexes=[],{count:a,paddingStart:l,scrollMargin:c,getItemKey:u,enabled:d}),{key:!1}),this.getMeasurements=go(()=>[this.getMeasurementOptions(),this.itemSizeCache],(a,l)=>{let{count:c,paddingStart:u,scrollMargin:d,getItemKey:f,enabled:g}=a;if(!g)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(m=>{this.itemSizeCache.set(m.key,m.size)}));const b=0<this.pendingMeasuredCacheIndexes.length?o(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const h=this.measurementsCache.slice(0,b);for(let m=b;m<c;m++){const y=f(m),E=this.options.lanes===1?h[m-1]:this.getFurthestMeasurement(h,m),v=E?E.end+this.options.gap:u+d,k=l.get(y),C=typeof k=="number"?k:this.options.estimateSize(m),M=E?E.lane:m%this.options.lanes;h[m]={index:m,start:v,size:C,end:v+C,key:y,lane:M}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=go(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(a,l,c)=>this.range=0<a.length&&0<l?zN({measurements:a,outerSize:l,scrollOffset:c}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=go(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(a,l,c,u)=>l===null?[]:a({startIndex:l.startIndex,endIndex:l.endIndex,overscan:c,count:u}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{const l=this.options.indexAttribute,c=a.getAttribute(l);return c?parseInt(c,10):(console.warn(`Missing attribute name '${l}={index}' on measured element.`),-1)},this._measureElement=(a,l)=>{const c=this.indexFromElement(a),u=this.measurementsCache[c];if(!u)return;const d=u.key,f=this.elementsCache.get(d);f!==a&&(f&&this.observer.unobserve(f),this.observer.observe(a),this.elementsCache.set(d,a)),a.isConnected&&this.resizeItem(c,this.options.measureElement(a,l,this))},this.resizeItem=(a,l)=>{const c=this.measurementsCache[a];if(!c)return;const u=this.itemSizeCache.get(c.key)??c.size,d=l-u;d!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?c.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(c,d,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=d,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,l)),this.notify(!1))},this.measureElement=a=>a?void this._measureElement(a,void 0):void this.elementsCache.forEach((l,c)=>{l.isConnected||(this.observer.unobserve(l),this.elementsCache.delete(c))}),this.getVirtualItems=go(()=>[this.getIndexes(),this.getMeasurements()],(a,l)=>{const c=[];for(let u=0,d=a.length;u<d;u++){const f=a[u],g=l[f];c.push(g)}return c},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{const l=this.getMeasurements();return l.length===0?void 0:tc(l[l2(0,l.length-1,c=>tc(l[c]).start,a)])},this.getOffsetForAlignment=(a,l)=>{const c=this.getSize(),u=this.getScrollOffset();l==="auto"&&(a<=u?l="start":a>=u+c?l="end":l="start"),l==="start"?a=a:l==="end"?a-=c:l=="center"&&(a-=c/2);const d=this.options.horizontal?"scrollWidth":"scrollHeight",f=this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[d]:this.scrollElement[d]:0;return r(o(f-c,a),0)},this.getOffsetForIndex=function(a){let l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"auto";a=r(0,o(a,i.options.count-1));const c=i.measurementsCache[a];if(!c)return;const u=i.getSize(),d=i.getScrollOffset();if(l==="auto")if(c.end>=d+u-i.options.scrollPaddingEnd)l="end";else if(c.start<=d+i.options.scrollPaddingStart)l="start";else return[d,l];const f=l==="end"?c.end+i.options.scrollPaddingEnd:c.start-i.options.scrollPaddingStart;return[i.getOffsetForAlignment(f,l),l]},this.isDynamicMode=()=>0<this.elementsCache.size,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(a){let{align:l="start",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getOffsetForAlignment(a,l),{adjustments:void 0,behavior:c})},this.scrollToIndex=function(a){let{align:l="auto",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};a=r(0,o(a,i.options.count-1)),i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const u=i.getOffsetForIndex(a,l);if(!u)return;const[d,f]=u;i._scrollToOffset(d,{adjustments:void 0,behavior:c}),c!=="smooth"&&i.isDynamicMode()&&i.targetWindow&&(i.scrollToIndexTimeoutId=i.targetWindow.setTimeout(()=>{if(i.scrollToIndexTimeoutId=null,i.elementsCache.has(i.options.getItemKey(a))){const[g]=tc(i.getOffsetForIndex(a,f));DN(g,i.getScrollOffset())||i.scrollToIndex(a,{align:f,behavior:c})}else i.scrollToIndex(a,{align:f,behavior:c})}))},this.scrollBy=function(a){let{behavior:l}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),l==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getScrollOffset()+a,{adjustments:void 0,behavior:l})},this.getTotalSize=()=>{var a;const l=this.getMeasurements();let c;return c=l.length===0?this.options.paddingStart:this.options.lanes===1?((a=l[l.length-1])==null?void 0:a.end)??0:r(...l.slice(-this.options.lanes).map(u=>u.end)),r(c-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(a,l)=>{let{adjustments:c,behavior:u}=l;this.options.scrollToFn(a,{behavior:u,adjustments:c},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(n)}}const l2=(t,n,r,o)=>{for(;t<=n;){const i=0|(t+n)/2,a=r(i);if(a<o)t=i+1;else if(a>o)n=i-1;else return i}return 0<t?t-1:0};function zN(t){let{measurements:n,outerSize:r,scrollOffset:o}=t;const i=n.length-1,a=l2(0,i,c=>n[c].start,o);let l=a;for(;l<i&&n[l].end<o+r;)l++;return{startIndex:a,endIndex:l}}const HN=typeof document>"u"?p.useEffect:p.useLayoutEffect;function BN(t){const n=p.useReducer(()=>({}),{})[1],r={...t,onChange:(i,a)=>{var l;a?or.flushSync(n):n(),(l=t.onChange)==null||l.call(t,i,a)}},[o]=p.useState(()=>new $N(r));return o.setOptions(r),p.useEffect(()=>o._didMount(),[]),HN(()=>o._willUpdate()),o}function VN(t){return BN({observeElementRect:NN,observeElementOffset:LN,scrollToFn:_N,...t})}function fv(t,n){let r=p.useRef([]),o=ge(t);p.useEffect(()=>{let i=[...r.current];for(let[a,l]of n.entries())if(r.current[a]!==l){let c=o(n,i);return r.current=n,c}},[o,...n])}function WN(t){function n(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",n))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",n),n())}let Br=[];WN(()=>{function t(n){n.target instanceof HTMLElement&&n.target!==document.body&&Br[0]!==n.target&&(Br.unshift(n.target),Br=Br.filter(r=>r!=null&&r.isConnected),Br.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});var UN=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(UN||{}),qN=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(qN||{}),YN=(t=>(t[t.Pointer=0]="Pointer",t[t.Focus=1]="Focus",t[t.Other=2]="Other",t))(YN||{}),KN=(t=>(t[t.OpenCombobox=0]="OpenCombobox",t[t.CloseCombobox=1]="CloseCombobox",t[t.GoToOption=2]="GoToOption",t[t.RegisterOption=3]="RegisterOption",t[t.UnregisterOption=4]="UnregisterOption",t[t.RegisterLabel=5]="RegisterLabel",t[t.SetActivationTrigger=6]="SetActivationTrigger",t[t.UpdateVirtualOptions=7]="UpdateVirtualOptions",t))(KN||{});function nc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:l=>l,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=n(t.options.slice()),i=0<o.length&&o[0].dataRef.current.order!==null?o.sort((l,c)=>l.dataRef.current.order-c.dataRef.current.order):Zl(o,l=>l.dataRef.current.domRef.current),a=r?i.indexOf(r):null;return a===-1&&(a=null),{options:i,activeOptionIndex:a}}let GN={1(t){var n;return(n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},0(t){var n,r;if((n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===0)return t;if((r=t.dataRef.current)!=null&&r.value){let o=t.dataRef.current.calculateIndex(t.dataRef.current.value);if(o!==-1)return{...t,activeOptionIndex:o,comboboxState:0}}return{...t,comboboxState:0}},2(t,n){var r,o,i,a,l;if((r=t.dataRef.current)!=null&&r.disabled||(o=t.dataRef.current)!=null&&o.optionsRef.current&&!((i=t.dataRef.current)!=null&&i.optionsPropsRef.current.static)&&t.comboboxState===1)return t;if(t.virtual){let f=n.focus===Le.Specific?n.idx:pl(n,{resolveItems:()=>t.virtual.options,resolveActiveIndex:()=>{var b,h;return(h=(b=t.activeOptionIndex)==null?t.virtual.options.findIndex(m=>!t.virtual.disabled(m)):b)==null?null:h},resolveDisabled:t.virtual.disabled,resolveId(){throw new Error("Function not implemented.")}}),g=(a=n.trigger)==null?2:a;return t.activeOptionIndex===f&&t.activationTrigger===g?t:{...t,activeOptionIndex:f,activationTrigger:g}}let c=nc(t);if(c.activeOptionIndex===null){let f=c.options.findIndex(g=>!g.dataRef.current.disabled);f!==-1&&(c.activeOptionIndex=f)}let u=n.focus===Le.Specific?n.idx:pl(n,{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled}),d=(l=n.trigger)==null?2:l;return t.activeOptionIndex===u&&t.activationTrigger===d?t:{...t,...c,activeOptionIndex:u,activationTrigger:d}},3:(t,n)=>{var r,o,i;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:[...t.options,n.payload]};let a=n.payload,l=nc(t,u=>(u.push(a),u));t.activeOptionIndex===null&&(o=t.dataRef.current)!=null&&o.isSelected(n.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(a));let c={...t,...l,activationTrigger:2};return(i=t.dataRef.current)!=null&&i.__demoMode&&t.dataRef.current.value===void 0&&(c.activeOptionIndex=0),c},4:(t,n)=>{var r;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:t.options.filter(i=>i.id!==n.id)};let o=nc(t,i=>{let a=i.findIndex(l=>l.id===n.id);return a!==-1&&i.splice(a,1),i});return{...t,...o,activationTrigger:2}},5:(t,n)=>t.labelId===n.id?t:{...t,labelId:n.id},6:(t,n)=>t.activationTrigger===n.trigger?t:{...t,activationTrigger:n.trigger},7:(t,n)=>{var r;if(((r=t.virtual)==null?void 0:r.options)===n.options)return t;let o=t.activeOptionIndex;if(t.activeOptionIndex!==null){let i=n.options.indexOf(t.virtual.options[t.activeOptionIndex]);o=i===-1?null:i}return{...t,activeOptionIndex:o,virtual:Object.assign({},t.virtual,{options:n.options})}}},yp=p.createContext(null);yp.displayName="ComboboxActionsContext";function ra(t){let n=p.useContext(yp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ra),r}return n}let s2=p.createContext(null);function QN(t){var n;let r=so("VirtualProvider"),[o,i]=p.useMemo(()=>{let u=r.optionsRef.current;if(!u)return[0,0];let d=window.getComputedStyle(u);return[parseFloat(d.paddingBlockStart||d.paddingTop),parseFloat(d.paddingBlockEnd||d.paddingBottom)]},[r.optionsRef.current]),a=VN({scrollPaddingStart:o,scrollPaddingEnd:i,count:r.virtual.options.length,estimateSize(){return 40},getScrollElement(){var u;return(u=r.optionsRef.current)==null?null:u},overscan:12}),[l,c]=p.useState(0);return Qe(()=>{c(u=>u+1)},[(n=r.virtual)==null?void 0:n.options]),S.createElement(s2.Provider,{value:a},S.createElement("div",{style:{position:"relative",width:"100%",height:`${a.getTotalSize()}px`},ref:u=>{if(u){if(typeof process<"u"&&qT.JEST_WORKER_ID!==void 0||r.activationTrigger===0)return;r.activeOptionIndex!==null&&r.virtual.options.length>r.activeOptionIndex&&a.scrollToIndex(r.activeOptionIndex)}}},a.getVirtualItems().map(u=>{var d;return S.createElement(p.Fragment,{key:u.key},S.cloneElement((d=t.children)==null?void 0:d.call(t,{option:r.virtual.options[u.index],open:r.comboboxState===0}),{key:`${l}-${u.key}`,"data-index":u.index,"aria-setsize":r.virtual.options.length,"aria-posinset":u.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${u.start}px)`,overflowAnchor:"none"}}))})))}let wp=p.createContext(null);wp.displayName="ComboboxDataContext";function so(t){let n=p.useContext(wp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,so),r}return n}function ZN(t,n){return ot(n.type,GN,t,n)}let JN=p.Fragment;function XN(t,n){let{value:r,defaultValue:o,onChange:i,form:a,name:l,by:c=null,disabled:u=!1,__demoMode:d=!1,nullable:f=!1,multiple:g=!1,immediate:b=!1,virtual:h=null,...m}=t,y=null,[E=g?[]:void 0,v]=n2(r,i,o),[k,C]=p.useReducer(ZN,{dataRef:p.createRef(),comboboxState:d?0:1,options:[],virtual:null,activeOptionIndex:null,activationTrigger:2,labelId:null}),M=p.useRef(!1),I=p.useRef({static:!1,hold:!1}),D=p.useRef(null),z=p.useRef(null),A=p.useRef(null),J=p.useRef(null),V=ge(typeof c=="string"?(oe,me)=>{let be=c;return(oe==null?void 0:oe[be])===(me==null?void 0:me[be])}:c??((oe,me)=>oe===me)),F=ge(oe=>k.options.findIndex(me=>V(me.dataRef.current.value,oe))),L=p.useCallback(oe=>ot(N.mode,{1:()=>E.some(me=>V(me,oe)),0:()=>V(E,oe)}),[E]),_=ge(oe=>k.activeOptionIndex===F(oe)),N=p.useMemo(()=>({...k,immediate:!1,optionsPropsRef:I,labelRef:D,inputRef:z,buttonRef:A,optionsRef:J,value:E,defaultValue:o,disabled:u,mode:g?1:0,virtual:k.virtual,get activeOptionIndex(){if(M.current&&k.activeOptionIndex===null&&0<k.options.length){let oe=k.options.findIndex(me=>!me.dataRef.current.disabled);if(oe!==-1)return oe}return k.activeOptionIndex},calculateIndex:F,compare:V,isSelected:L,isActive:_,nullable:f,__demoMode:d}),[E,o,u,g,f,d,k,y]);Qe(()=>{},[y,void 0]),Qe(()=>{k.dataRef.current=N},[N]),np([N.buttonRef,N.inputRef,N.optionsRef],()=>ie.closeCombobox(),N.comboboxState===0);let B=p.useMemo(()=>{var oe,me,be;return{open:N.comboboxState===0,disabled:u,activeIndex:N.activeOptionIndex,activeOption:N.activeOptionIndex===null?null:N.virtual?N.virtual.options[(oe=N.activeOptionIndex)==null?0:oe]:(be=(me=N.options[N.activeOptionIndex])==null?void 0:me.dataRef.current.value)==null?null:be,value:E}},[N,u,E]),H=ge(()=>{if(N.activeOptionIndex!==null){if(N.virtual)se(N.virtual.options[N.activeOptionIndex]);else{let{dataRef:oe}=N.options[N.activeOptionIndex];se(oe.current.value)}ie.goToOption(Le.Specific,N.activeOptionIndex)}}),U=ge(()=>{C({type:0}),M.current=!0}),Q=ge(()=>{C({type:1}),M.current=!1}),X=ge((oe,me,be)=>(M.current=!1,oe===Le.Specific?C({type:2,focus:Le.Specific,idx:me,trigger:be}):C({type:2,focus:oe,trigger:be}))),R=ge((oe,me)=>(C({type:3,payload:{id:oe,dataRef:me}}),()=>{N.isActive(me.current.value)&&(M.current=!0),C({type:4,id:oe})})),ae=ge(oe=>(C({type:5,id:oe}),()=>C({type:5,id:null}))),se=ge(oe=>ot(N.mode,{0(){return v==null?void 0:v(oe)},1(){let me=N.value.slice(),be=me.findIndex(He=>V(He,oe));return be===-1?me.push(oe):me.splice(be,1),v==null?void 0:v(me)}})),T=ge(oe=>{C({type:6,trigger:oe})}),ie=p.useMemo(()=>({onChange:se,registerOption:R,registerLabel:ae,goToOption:X,closeCombobox:Q,openCombobox:U,setActivationTrigger:T,selectActiveOption:H}),[]),ye=n===null?{}:{ref:n},Pe=p.useRef(null),$e=En();return p.useEffect(()=>{Pe.current&&o!==void 0&&$e.addEventListener(Pe.current,"reset",()=>{v==null||v(o)})},[Pe,v]),S.createElement(yp.Provider,{value:ie},S.createElement(wp.Provider,{value:N},S.createElement(Xl,{value:ot(N.comboboxState,{0:dt.Open,1:dt.Closed})},l!=null&&E!=null&&vp({[l]:E}).map((oe,me)=>{let[be,He]=oe;return S.createElement(r2,{features:bp.Hidden,ref:me===0?it=>{var Ze;Pe.current=(Ze=it==null?void 0:it.closest("form"))==null?null:Ze}:void 0,...fl({key:be,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,disabled:u,name:be,value:He})})}),mt({ourProps:ye,theirProps:m,slot:B,defaultTag:JN,name:"Combobox"}))))}let eF="input";function tF(t,n){var r,o,i,a,l,c=Math.abs;let u=un(),{id:d=`headlessui-combobox-input-${u}`,onChange:f,displayValue:g,type:b="text",...h}=t,m=so("Combobox.Input"),y=ra("Combobox.Input"),E=jt(m.inputRef,n),v=Jl(m.inputRef),k=p.useRef(!1),C=En(),M=ge(()=>{y.onChange(null),m.optionsRef.current&&(m.optionsRef.current.scrollTop=0),y.goToOption(Le.Nothing)}),I=function(){var H;return typeof g=="function"&&m.value!==void 0?(H=g(m.value))==null?"":H:typeof m.value=="string"?m.value:""}();fv((H,U)=>{let[Q,X]=H,[R,ae]=U;if(k.current)return;let se=m.inputRef.current;se&&((ae===0&&X===1||Q!==R)&&(se.value=Q),requestAnimationFrame(()=>{if(!k.current&&se&&(v==null?void 0:v.activeElement)===se){let{selectionStart:T,selectionEnd:ie}=se;c((ie??0)-(T??0))===0&&T===0&&se.setSelectionRange(se.value.length,se.value.length)}}))},[I,m.comboboxState,v]),fv((H,U)=>{let[Q]=H,[X]=U;if(Q===0&&X===1){if(k.current)return;let R=m.inputRef.current;if(!R)return;let ae=R.value,{selectionStart:se,selectionEnd:T,selectionDirection:ie}=R;R.value="",R.value=ae,ie===null?R.setSelectionRange(se,T):R.setSelectionRange(se,T,ie)}},[m.comboboxState]);let D=p.useRef(!1),z=ge(()=>{D.current=!0}),A=ge(()=>{C.nextFrame(()=>{D.current=!1})}),J=ge(H=>{switch(k.current=!0,H.key){case Me.Enter:if(k.current=!1,m.comboboxState!==0||D.current)return;if(H.preventDefault(),H.stopPropagation(),m.activeOptionIndex===null)return void y.closeCombobox();y.selectActiveOption(),m.mode===0&&y.closeCombobox();break;case Me.ArrowDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),ot(m.comboboxState,{0:()=>y.goToOption(Le.Next),1:()=>y.openCombobox()});case Me.ArrowUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),ot(m.comboboxState,{0:()=>y.goToOption(Le.Previous),1:()=>{y.openCombobox(),C.nextFrame(()=>{m.value||y.goToOption(Le.Last)})}});case Me.Home:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.First);case Me.PageUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.First);case Me.End:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.Last);case Me.PageDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.Last);case Me.Escape:return k.current=!1,m.comboboxState===0?(H.preventDefault(),m.optionsRef.current&&!m.optionsPropsRef.current.static&&H.stopPropagation(),m.nullable&&m.mode===0&&m.value===null&&M(),y.closeCombobox()):void 0;case Me.Tab:if(k.current=!1,m.comboboxState!==0)return;m.mode===0&&m.activationTrigger!==1&&y.selectActiveOption(),y.closeCombobox()}}),V=ge(H=>{f==null||f(H),m.nullable&&m.mode===0&&H.target.value===""&&M(),y.openCombobox()}),F=ge(H=>{var U,Q,X;let R=(U=H.relatedTarget)==null?Br.find(ae=>ae!==H.currentTarget):U;if(k.current=!1,!((Q=m.optionsRef.current)!=null&&Q.contains(R))&&!((X=m.buttonRef.current)!=null&&X.contains(R))&&m.comboboxState===0)return H.preventDefault(),m.mode===0&&(m.nullable&&m.value===null?M():m.activationTrigger!==1&&y.selectActiveOption()),y.closeCombobox()}),L=ge(H=>{var U,Q,X;let R=(U=H.relatedTarget)==null?Br.find(ae=>ae!==H.currentTarget):U;(Q=m.buttonRef.current)!=null&&Q.contains(R)||(X=m.optionsRef.current)!=null&&X.contains(R)||m.disabled||m.immediate&&m.comboboxState!==0&&(y.openCombobox(),C.nextFrame(()=>{y.setActivationTrigger(1)}))}),_=na(()=>{if(m.labelId)return[m.labelId].join(" ")},[m.labelId]),N=p.useMemo(()=>({open:m.comboboxState===0,disabled:m.disabled}),[m]),B={ref:E,id:d,role:"combobox",type:b,"aria-controls":(r=m.optionsRef.current)==null?void 0:r.id,"aria-expanded":m.comboboxState===0,"aria-activedescendant":m.activeOptionIndex===null?void 0:m.virtual?(o=m.options.find(H=>{var U;return!((U=m.virtual)!=null&&U.disabled(H.dataRef.current.value))&&m.compare(H.dataRef.current.value,m.virtual.options[m.activeOptionIndex])}))==null?void 0:o.id:(i=m.options[m.activeOptionIndex])==null?void 0:i.id,"aria-labelledby":_,"aria-autocomplete":"list",defaultValue:(l=(a=t.defaultValue)==null?m.defaultValue===void 0?null:g==null?void 0:g(m.defaultValue):a)==null?m.defaultValue:l,disabled:m.disabled,onCompositionStart:z,onCompositionEnd:A,onKeyDown:J,onChange:V,onFocus:L,onBlur:F};return mt({ourProps:B,theirProps:h,slot:N,defaultTag:eF,name:"Combobox.Input"})}let nF="button";function rF(t,n){var r;let o=so("Combobox.Button"),i=ra("Combobox.Button"),a=jt(o.buttonRef,n),l=un(),{id:c=`headlessui-combobox-button-${l}`,...u}=t,d=En(),f=ge(y=>{switch(y.key){case Me.ArrowDown:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&i.openCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Me.ArrowUp:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&(i.openCombobox(),d.nextFrame(()=>{o.value||i.goToOption(Le.Last)})),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Me.Escape:return o.comboboxState===0?(y.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&y.stopPropagation(),i.closeCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})})):void 0}}),g=ge(y=>ap(y.currentTarget)?y.preventDefault():(o.comboboxState===0?i.closeCombobox():(y.preventDefault(),i.openCombobox()),void d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})}))),b=na(()=>{if(o.labelId)return[o.labelId,c].join(" ")},[o.labelId,c]),h=p.useMemo(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),m={ref:a,id:c,type:rp(t,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(r=o.optionsRef.current)==null?void 0:r.id,"aria-expanded":o.comboboxState===0,"aria-labelledby":b,disabled:o.disabled,onClick:g,onKeyDown:f};return mt({ourProps:m,theirProps:u,slot:h,defaultTag:nF,name:"Combobox.Button"})}let oF="label";function iF(t,n){let r=un(),{id:o=`headlessui-combobox-label-${r}`,...i}=t,a=so("Combobox.Label"),l=ra("Combobox.Label"),c=jt(a.labelRef,n);Qe(()=>l.registerLabel(o),[o]);let u=ge(()=>{var f;return(f=a.inputRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]);return mt({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:oF,name:"Combobox.Label"})}let aF="ul",lF=Sr.RenderStrategy|Sr.Static;function sF(t,n){let r=un(),{id:o=`headlessui-combobox-options-${r}`,hold:i=!1,...a}=t,l=so("Combobox.Options"),c=jt(l.optionsRef,n),u=ea(),d=u===null?l.comboboxState===0:(u&dt.Open)===dt.Open;Qe(()=>{var h;l.optionsPropsRef.current.static=(h=t.static)!=null&&h},[l.optionsPropsRef,t.static]),Qe(()=>{l.optionsPropsRef.current.hold=i},[l.optionsPropsRef,i]),a2({container:l.optionsRef.current,enabled:l.comboboxState===0,accept(h){return h.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});let f=na(()=>{var h,m;return(m=l.labelId)==null?(h=l.buttonRef.current)==null?void 0:h.id:m},[l.labelId,l.buttonRef.current]),g=p.useMemo(()=>({open:l.comboboxState===0,option:void 0}),[l]),b={"aria-labelledby":f,role:"listbox","aria-multiselectable":l.mode===1||void 0,id:o,ref:c};return l.virtual&&l.comboboxState===0&&Object.assign(a,{children:S.createElement(QN,null,a.children)}),mt({ourProps:b,theirProps:a,slot:g,defaultTag:aF,features:lF,visible:d,name:"Combobox.Options"})}let cF="li";function uF(t,n){var r;let o=un(),{id:i=`headlessui-combobox-option-${o}`,disabled:a=!1,value:l,order:c=null,...u}=t,d=so("Combobox.Option"),f=ra("Combobox.Option"),g=d.virtual?d.activeOptionIndex===d.calculateIndex(l):d.activeOptionIndex!==null&&((r=d.options[d.activeOptionIndex])==null?void 0:r.id)===i,b=d.isSelected(l),h=p.useRef(null),m=yn({disabled:a,value:l,domRef:h,order:c}),y=p.useContext(s2),E=jt(n,h,y?y.measureElement:null),v=ge(()=>f.onChange(l));Qe(()=>f.registerOption(i,m),[m,i]);let k=p.useRef(!(d.virtual||d.__demoMode));Qe(()=>{if(d.virtual&&d.__demoMode){let V=Vt();return V.requestAnimationFrame(()=>{k.current=!0}),V.dispose}},[d.virtual,d.__demoMode]),Qe(()=>{if(k.current&&d.comboboxState===0&&g&&d.activationTrigger!==0){let V=Vt();return V.requestAnimationFrame(()=>{var F,L;(L=(F=h.current)==null?void 0:F.scrollIntoView)==null||L.call(F,{block:"nearest"})}),V.dispose}},[h,g,d.comboboxState,d.activationTrigger,d.activeOptionIndex]);let C=ge(V=>{var F;return a||(F=d.virtual)!=null&&F.disabled(l)?V.preventDefault():(v(),Px()||requestAnimationFrame(()=>{var L;return(L=d.inputRef.current)==null?void 0:L.focus({preventScroll:!0})}),void(d.mode===0&&requestAnimationFrame(()=>f.closeCombobox())))}),M=ge(()=>{var V;if(a||(V=d.virtual)!=null&&V.disabled(l))return f.goToOption(Le.Nothing);let F=d.calculateIndex(l);f.goToOption(Le.Specific,F)}),I=op(),D=ge(V=>I.update(V)),z=ge(V=>{var F;if(!(!I.wasMoved(V)||a||(F=d.virtual)!=null&&F.disabled(l)||g)){let L=d.calculateIndex(l);f.goToOption(Le.Specific,L,0)}}),A=ge(V=>{var F;I.wasMoved(V)&&(a||(F=d.virtual)!=null&&F.disabled(l)||g&&(d.optionsPropsRef.current.hold||f.goToOption(Le.Nothing)))}),J=p.useMemo(()=>({active:g,selected:b,disabled:a}),[g,b,a]);return mt({ourProps:{id:i,ref:E,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0||void 0,"aria-selected":b,disabled:void 0,onClick:C,onFocus:M,onPointerEnter:D,onMouseEnter:D,onPointerMove:z,onMouseMove:z,onPointerLeave:A,onMouseLeave:A},theirProps:u,slot:J,defaultTag:cF,name:"Combobox.Option"})}let dF=pt(XN),fF=pt(rF),pF=pt(tF),gF=pt(iF),hF=pt(sF),mF=pt(uF);Object.assign(dF,{Input:pF,Button:fF,Label:gF,Options:hF,Option:mF});p.createContext();j.string,j.node,j.string,j.string,j.bool,j.bool,j.node,j.node,j.string,j.bool,j.string,j.bool,j.string,j.bool,j.func,j.func,j.func,j.func,j.string,j.bool,j.node,j.bool,j.bool,j.string,j.string,j.oneOf(["full","auto"]),j.string;j.string,j.bool,j.string,j.string,j.string;j.string,j.node;j.string,j.node;j.string,j.node;let pv=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function gv(t){var n,r;let o=(n=t.innerText)==null?"":n,i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return o;let a=!1;for(let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),a=!0;let l=a?(r=i.innerText)==null?"":r:o;return pv.test(l)&&(l=l.replace(pv,"")),l}function bF(t){let n=t.getAttribute("aria-label");if(typeof n=="string")return n.trim();let r=t.getAttribute("aria-labelledby");if(r){let o=r.split(" ").map(i=>{let a=document.getElementById(i);if(a){let l=a.getAttribute("aria-label");return typeof l=="string"?l.trim():gv(a).trim()}return null}).filter(Boolean);if(0<o.length)return o.join(", ")}return gv(t).trim()}function c2(t){let n=p.useRef(""),r=p.useRef("");return ge(()=>{let o=t.current;if(!o)return"";let i=o.innerText;if(n.current===i)return r.current;let a=bF(o).trim().toLowerCase();return n.current=i,r.current=a,a})}var vF=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(vF||{}),yF=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(yF||{}),wF=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t))(wF||{});function rc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeItemIndex===null?null:t.items[t.activeItemIndex],o=Zl(n(t.items.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{items:o,activeItemIndex:i}}let xF={1(t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},0(t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},2:(t,n)=>{var r;let o=rc(t),i=pl(n,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeItemIndex===null?t.items:t.items.slice(t.activeItemIndex+r).concat(t.items.slice(0,t.activeItemIndex+r))).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!l.dataRef.current.disabled}),a=i?t.items.indexOf(i):-1;return a===-1||a===t.activeItemIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeItemIndex:a,activationTrigger:1}},4(t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},5:(t,n)=>{let r=rc(t,o=>[...o,{id:n.id,dataRef:n.dataRef}]);return{...t,...r}},6:(t,n)=>{let r=rc(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}}},xp=p.createContext(null);xp.displayName="MenuContext";function as(t){let n=p.useContext(xp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,as),r}return n}function jF(t,n){return ot(n.type,xF,t,n)}let EF=p.Fragment;function kF(t,n){let{__demoMode:r=!1,...o}=t,i=p.useReducer(jF,{__demoMode:r,menuState:r?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:l,buttonRef:c},u]=i,d=jt(n);np([c,l],(b,h)=>{var m;u({type:1}),Ql(h,Gl.Loose)||(b.preventDefault(),(m=c.current)==null||m.focus())},a===0);let f=ge(()=>{u({type:1})}),g=p.useMemo(()=>({open:a===0,close:f}),[a,f]);return S.createElement(xp.Provider,{value:i},S.createElement(Xl,{value:ot(a,{0:dt.Open,1:dt.Closed})},mt({ourProps:{ref:d},theirProps:o,slot:g,defaultTag:EF,name:"Menu"})))}let OF="button";function SF(t,n){var r;let o=un(),{id:i=`headlessui-menu-button-${o}`,...a}=t,[l,c]=as("Menu.Button"),u=jt(l.buttonRef,n),d=En(),f=ge(y=>{switch(y.key){case Me.Space:case Me.Enter:case Me.ArrowDown:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Le.First}));break;case Me.ArrowUp:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Le.Last}))}}),g=ge(y=>{switch(y.key){case Me.Space:y.preventDefault()}}),b=ge(y=>ap(y.currentTarget)?y.preventDefault():void(t.disabled||(l.menuState===0?(c({type:1}),d.nextFrame(()=>{var E;return(E=l.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})})):(y.preventDefault(),c({type:0}))))),h=p.useMemo(()=>({open:l.menuState===0}),[l]),m={ref:u,id:i,type:rp(t,l.buttonRef),"aria-haspopup":"menu","aria-controls":(r=l.itemsRef.current)==null?void 0:r.id,"aria-expanded":l.menuState===0,onKeyDown:f,onKeyUp:g,onClick:b};return mt({ourProps:m,theirProps:a,slot:h,defaultTag:OF,name:"Menu.Button"})}let CF="div",PF=Sr.RenderStrategy|Sr.Static;function IF(t,n){var r,o;let i=un(),{id:a=`headlessui-menu-items-${i}`,...l}=t,[c,u]=as("Menu.Items"),d=jt(c.itemsRef,n),f=Jl(c.itemsRef),g=En(),b=ea(),h=b===null?c.menuState===0:(b&dt.Open)===dt.Open;p.useEffect(()=>{let k=c.itemsRef.current;k&&c.menuState===0&&k!==(f==null?void 0:f.activeElement)&&k.focus({preventScroll:!0})},[c.menuState,c.itemsRef,f]),a2({container:c.itemsRef.current,enabled:c.menuState===0,accept(k){return k.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:k.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(k){k.setAttribute("role","none")}});let m=ge(k=>{var C,M;switch(g.dispose(),k.key){case Me.Space:if(c.searchQuery!=="")return k.preventDefault(),k.stopPropagation(),u({type:3,value:k.key});case Me.Enter:if(k.preventDefault(),k.stopPropagation(),u({type:1}),c.activeItemIndex!==null){let{dataRef:I}=c.items[c.activeItemIndex];(M=(C=I.current)==null?void 0:C.domRef.current)==null||M.click()}Cx(c.buttonRef.current);break;case Me.ArrowDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.Next});case Me.ArrowUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.Previous});case Me.Home:case Me.PageUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.First});case Me.End:case Me.PageDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.Last});case Me.Escape:k.preventDefault(),k.stopPropagation(),u({type:1}),Vt().nextFrame(()=>{var I;return(I=c.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})});break;case Me.Tab:k.preventDefault(),k.stopPropagation(),u({type:1}),Vt().nextFrame(()=>{k6(c.buttonRef.current,k.shiftKey?_d.Previous:_d.Next)});break;default:k.key.length===1&&(u({type:3,value:k.key}),g.setTimeout(()=>u({type:4}),350))}}),y=ge(k=>{switch(k.key){case Me.Space:k.preventDefault()}}),E=p.useMemo(()=>({open:c.menuState===0}),[c]),v={"aria-activedescendant":c.activeItemIndex===null||(r=c.items[c.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(o=c.buttonRef.current)==null?void 0:o.id,id:a,onKeyDown:m,onKeyUp:y,role:"menu",tabIndex:0,ref:d};return mt({ourProps:v,theirProps:l,slot:E,defaultTag:CF,features:PF,visible:h,name:"Menu.Items"})}let DF=p.Fragment;function TF(t,n){let r=un(),{id:o=`headlessui-menu-item-${r}`,disabled:i=!1,...a}=t,[l,c]=as("Menu.Item"),u=l.activeItemIndex!==null&&l.items[l.activeItemIndex].id===o,d=p.useRef(null),f=jt(n,d);Qe(()=>{if(!l.__demoMode&&l.menuState===0&&u&&l.activationTrigger!==0){let I=Vt();return I.requestAnimationFrame(()=>{var D,z;(z=(D=d.current)==null?void 0:D.scrollIntoView)==null||z.call(D,{block:"nearest"})}),I.dispose}},[l.__demoMode,d,u,l.menuState,l.activationTrigger,l.activeItemIndex]);let g=c2(d),b=p.useRef({disabled:i,domRef:d,get textValue(){return g()}});Qe(()=>{b.current.disabled=i},[b,i]),Qe(()=>(c({type:5,id:o,dataRef:b}),()=>c({type:6,id:o})),[b,o]);let h=ge(()=>{c({type:1})}),m=ge(I=>i?I.preventDefault():(c({type:1}),void Cx(l.buttonRef.current))),y=ge(()=>i?c({type:2,focus:Le.Nothing}):void c({type:2,focus:Le.Specific,id:o})),E=op(),v=ge(I=>E.update(I)),k=ge(I=>{E.wasMoved(I)&&(i||u||c({type:2,focus:Le.Specific,id:o,trigger:0}))}),C=ge(I=>{E.wasMoved(I)&&(i||u&&c({type:2,focus:Le.Nothing}))}),M=p.useMemo(()=>({active:u,disabled:i,close:h}),[u,i,h]);return mt({ourProps:{id:o,ref:f,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,disabled:void 0,onClick:m,onFocus:y,onPointerEnter:v,onMouseEnter:v,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:M,defaultTag:DF,name:"Menu.Item"})}let MF=pt(kF),RF=pt(SF),NF=pt(IF),FF=pt(TF);Object.assign(MF,{Button:RF,Items:NF,Item:FF});j.string,j.node,j.any,j.bool;S.createContext();j.bool,j.string,j.node;j.number,j.number,j.bool,j.string,j.node;p.createContext();j.bool,j.string,j.bool,j.node,j.node,j.string,j.bool,j.bool,j.string,j.string,j.func,j.func,j.bool,j.node,j.bool,j.string;j.bool,j.bool,j.string,j.func;j.string,j.node,j.bool,j.bool,j.func;var LF=S.createContext({}),AF=function(){return S.useContext(LF)},_F=function(t,n){return`
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
	`)},$F=function(t){var n;return t&&(n={gridColumn:"span ".concat(t," / span ").concat(t)}),n},u2=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=Dr(t,["colSpan","nowrap","className","children"]),d=AF()||{},f=d.cellVerticalAlignment;return S.createElement("div",ve({className:"juno-datagrid-cell ".concat(_F(o!==void 0&&o,f)," ").concat(a),style:$F(r),role:"gridcell",ref:n},u),c)});u2.displayName="DataGridCell";var zF=`
	jn-font-bold
	jn-text-theme-high
	jn-bg-theme-background-lvl-1
	jn-border-theme-background-lvl-0
`,HF=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=Dr(t,["colSpan","nowrap","className","children"]);return S.createElement(u2,ve({colSpan:r,nowrap:o!==void 0&&o,className:"juno-datagrid-head-cell ".concat(zF," ").concat(a),role:"columnheader",ref:n},u),c)});HF.displayName="DataGridHeadCell";var BF=`
	jn-contents
`,VF=p.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=Dr(t,["className","children"]);return S.createElement("div",ve({className:"juno-datagrid-row ".concat(BF," ").concat(o),role:"row",ref:n},l),a)});VF.displayName="DataGridRow";var oc=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],Co={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var r=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-r.getTime())/864e5-3+(r.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},Ai={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(3<n&&21>n)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},zt=function(t,n){return n===void 0&&(n=2),("000"+t).slice(-1*n)},rn=function(t){return t===!0?1:0};function hv(t,n){var r;return function(){var o=this,i=arguments;clearTimeout(r),r=setTimeout(function(){return t.apply(o,i)},n)}}var ic=function(t){return t instanceof Array?t:[t]};function Mt(t,n,r){return r===!0?t.classList.add(n):void t.classList.remove(n)}function Ve(t,n,r){var o=window.document.createElement(t);return n=n||"",r=r||"",o.className=n,r!==void 0&&(o.textContent=r),o}function ka(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function d2(t,n){return n(t)?t:t.parentNode?d2(t.parentNode,n):void 0}function Oa(t,n){var r=Ve("div","numInputWrapper"),o=Ve("input","numInput "+t),i=Ve("span","arrowUp"),a=Ve("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),n!==void 0)for(var l in n)o.setAttribute(l,n[l]);return r.appendChild(o),r.appendChild(i),r.appendChild(a),r}function qt(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var ac=function(){},yl=function(t,n,r){return r.months[n?"shorthand":"longhand"][t]},WF={D:ac,F:function(t,n,r){t.setMonth(r.months.longhand.indexOf(n))},G:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,r){t.setHours(t.getHours()%12+12*rn(new RegExp(r.amPM[1],"i").test(n)))},M:function(t,n,r){t.setMonth(r.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(1e3*parseFloat(n))},W:function(t,n,r){var o=parseInt(n),i=new Date(t.getFullYear(),0,2+7*(o-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+r.firstDayOfWeek),i},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:ac,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:ac,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},Vr={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ki={Z:function(t){return t.toISOString()},D:function(t,n,r){return n.weekdays.shorthand[ki.w(t,n,r)]},F:function(t,n,r){return yl(ki.n(t,n,r)-1,!1,n)},G:function(t,n,r){return zt(ki.h(t,n,r))},H:function(t){return zt(t.getHours())},J:function(t,n){return n.ordinal===void 0?t.getDate():t.getDate()+n.ordinal(t.getDate())},K:function(t,n){return n.amPM[rn(11<t.getHours())]},M:function(t,n){return yl(t.getMonth(),!0,n)},S:function(t){return zt(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,r){return r.getWeek(t)},Y:function(t){return zt(t.getFullYear(),4)},d:function(t){return zt(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return zt(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return zt(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return(t.getFullYear()+"").substring(2)}},f2=function(t){var n=t.config,r=n===void 0?Co:n,o=t.l10n,i=o===void 0?Ai:o,a=t.isMobile;return function(l,c,u){var d=u||i;return r.formatDate===void 0||a!==void 0&&a?c.split("").map(function(f,g,b){return ki[f]&&b[g-1]!=="\\"?ki[f](l,d,r):f==="\\"?"":f}).join(""):r.formatDate(l,c,d)}},Ud=function(t){var n=t.config,r=n===void 0?Co:n,o=t.l10n,i=o===void 0?Ai:o;return function(a,l,c,u){if(a===0||a){var d;if(a instanceof Date)d=new Date(a.getTime());else if(typeof a!="string"&&a.toFixed!==void 0)d=new Date(a);else if(typeof a=="string"){var f=l||(r||Co).dateFormat,g=(a+"").trim();if(g==="today")d=new Date,c=!0;else if(r&&r.parseDate)d=r.parseDate(a,f);else if(/Z$/.test(g)||/GMT$/.test(g))d=new Date(a);else{for(var b=void 0,h=[],m=0,y=0,E="";m<f.length;m++){var v=f[m],k=v==="\\",C=f[m-1]==="\\"||k;if(Vr[v]&&!C){E+=Vr[v];var M=new RegExp(E).exec(a);M&&(b=!0)&&h[v==="Y"?"unshift":"push"]({fn:WF[v],val:M[++y]})}else k||(E+=".")}d=r&&r.noCalendar?new Date(new Date().setHours(0,0,0,0)):new Date(new Date().getFullYear(),0,1,0,0,0,0),h.forEach(function(I){var D=I.fn,z=I.val;return d=D(d,z,u||i)||d}),d=b?d:void 0}}return!(d instanceof Date)||isNaN(d.getTime())?void r.errorHandler(new Error("Invalid date provided: "+a)):(c===!0&&d.setHours(0,0,0,0),d)}}};function Kt(t,n,r){return r===void 0&&(r=!0),r===!1?t.getTime()-n.getTime():new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0)}var UF=function(t,n,r){return t>Math.min(n,r)&&t<Math.max(n,r)},lc=function(t,n,r){return 3600*t+60*n+r},qF=function(t){var n=Math.floor(t/3600),r=(t-3600*n)/60;return[n,r,t-3600*n-60*r]},YF={DAY:864e5};function sc(t){var n=Math.min,r=t.defaultHour,o=t.defaultMinute,i=t.defaultSeconds;if(t.minDate!==void 0){var a=t.minDate.getHours(),l=t.minDate.getMinutes(),c=t.minDate.getSeconds();r<a&&(r=a),r===a&&o<l&&(o=l),r===a&&o===l&&i<c&&(i=t.minDate.getSeconds())}if(t.maxDate!==void 0){var u=t.maxDate.getHours(),d=t.maxDate.getMinutes();r=n(r,u),r===u&&(o=n(d,o)),r===u&&o===d&&(i=t.maxDate.getSeconds())}return{hours:r,minutes:o,seconds:i}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var o,i=function(c){c&&Object.keys(c).forEach(function(u){return t[u]=c[u]})},a=0,l=n;a<l.length;a++)o=l[a],i(o);return t});var St=function(){return St=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},St.apply(this,arguments)},mv=function(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length;for(var o=Array(t),i=0,n=0;n<r;n++)for(var a=arguments[n],l=0,c=a.length;l<c;l++,i++)o[i]=a[l];return o},KF=300;function GF(t,n){var r=Math.abs,o=Math.max,i=Math.min;function a(){s.utils={getDaysInMonth:function(w,O){return w===void 0&&(w=s.currentMonth),O===void 0&&(O=s.currentYear),w===1&&(O%4==0&&O%100!=0||O%400==0)?29:s.l10n.daysInMonth[w]}}}function l(){s.element=s.input=t,s.isOpen=!1,ii(),lr(),gn(),It(),a(),s.isMobile||z(),C(),(s.selectedDates.length||s.config.noCalendar)&&(s.config.enableTime&&m(s.config.noCalendar?s.latestSelectedDateObj:void 0),bt(!1)),d();var w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!s.isMobile&&w&&pn(),je("onReady")}function c(){var w;return((w=s.calendarContainer)===null||w===void 0?void 0:w.getRootNode()).activeElement||document.activeElement}function u(w){return w.bind(s)}function d(){var w=s.config;w.weekNumbers===!1&&w.showMonths===1||w.noCalendar!==!0&&window.requestAnimationFrame(function(){if(s.calendarContainer!==void 0&&(s.calendarContainer.style.visibility="hidden",s.calendarContainer.style.display="block"),s.daysContainer!==void 0){var O=(s.days.offsetWidth+1)*w.showMonths;s.daysContainer.style.width=O+"px",s.calendarContainer.style.width=O+(s.weekWrapper===void 0?0:s.weekWrapper.offsetWidth)+"px",s.calendarContainer.style.removeProperty("visibility"),s.calendarContainer.style.removeProperty("display")}})}function f(w){if(s.selectedDates.length===0){var O=s.config.minDate===void 0||0<=Kt(new Date,s.config.minDate)?new Date:new Date(s.config.minDate.getTime()),P=sc(s.config);O.setHours(P.hours,P.minutes,P.seconds,O.getMilliseconds()),s.selectedDates=[O],s.latestSelectedDateObj=O}w!==void 0&&w.type!=="blur"&&gs(w);var $=s._input.value;h(),bt(),s._input.value!==$&&s._debouncedChange()}function g(w,O){return w%12+12*rn(O===s.l10n.amPM[1])}function b(w){switch(w%24){case 0:case 12:return 12;default:return w%12}}function h(){if(s.hourElement!==void 0&&s.minuteElement!==void 0){var w=(parseInt(s.hourElement.value.slice(-2),10)||0)%24,O=(parseInt(s.minuteElement.value,10)||0)%60,P=s.secondElement===void 0?0:(parseInt(s.secondElement.value,10)||0)%60;s.amPM!==void 0&&(w=g(w,s.amPM.textContent));var $=s.config.minTime!==void 0||s.config.minDate&&s.minDateHasTime&&s.latestSelectedDateObj&&Kt(s.latestSelectedDateObj,s.config.minDate,!0)===0,q=s.config.maxTime!==void 0||s.config.maxDate&&s.maxDateHasTime&&s.latestSelectedDateObj&&Kt(s.latestSelectedDateObj,s.config.maxDate,!0)===0;if(s.config.maxTime!==void 0&&s.config.minTime!==void 0&&s.config.minTime>s.config.maxTime){var Z=lc(s.config.minTime.getHours(),s.config.minTime.getMinutes(),s.config.minTime.getSeconds()),ce=lc(s.config.maxTime.getHours(),s.config.maxTime.getMinutes(),s.config.maxTime.getSeconds()),te=lc(w,O,P);if(te>ce&&te<Z){var fe=qF(Z);w=fe[0],O=fe[1],P=fe[2]}}else{if(q){var ne=s.config.maxTime===void 0?s.config.maxDate:s.config.maxTime;w=i(w,ne.getHours()),w===ne.getHours()&&(O=i(O,ne.getMinutes())),O===ne.getMinutes()&&(P=i(P,ne.getSeconds()))}if($){var re=s.config.minTime===void 0?s.config.minDate:s.config.minTime;w=o(w,re.getHours()),w===re.getHours()&&O<re.getMinutes()&&(O=re.getMinutes()),O===re.getMinutes()&&(P=o(P,re.getSeconds()))}}y(w,O,P)}}function m(w){var O=w||s.latestSelectedDateObj;O&&O instanceof Date&&y(O.getHours(),O.getMinutes(),O.getSeconds())}function y(w,O,P){s.latestSelectedDateObj!==void 0&&s.latestSelectedDateObj.setHours(w%24,O,P||0,0),s.hourElement&&s.minuteElement&&!s.isMobile&&(s.hourElement.value=zt(s.config.time_24hr?w:(12+w)%12+12*rn(w%12==0)),s.minuteElement.value=zt(O),s.amPM!==void 0&&(s.amPM.textContent=s.l10n.amPM[rn(12<=w)]),s.secondElement!==void 0&&(s.secondElement.value=zt(P)))}function E(w){var O=qt(w),P=parseInt(O.value)+(w.delta||0);(1<P/1e3||w.key==="Enter"&&!/[^\d]/.test(P.toString()))&&me(P)}function v(w,O,P,$){return O instanceof Array?O.forEach(function(q){return v(w,q,P,$)}):w instanceof Array?w.forEach(function(q){return v(q,O,P,$)}):(w.addEventListener(O,P,$),void s._handlers.push({remove:function(){return w.removeEventListener(O,P,$)}}))}function k(){je("onChange")}function C(){if(s.config.wrap&&["open","close","toggle","clear"].forEach(function(P){Array.prototype.forEach.call(s.element.querySelectorAll("[data-"+P+"]"),function($){return v($,"click",s[P])})}),s.isMobile)return void qn();var w=hv(Wn,50);if(s._debouncedChange=hv(k,KF),s.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&v(s.daysContainer,"mouseover",function(P){s.config.mode==="range"&&Pt(qt(P))}),v(s._input,"keydown",Ze),s.calendarContainer!==void 0&&v(s.calendarContainer,"keydown",Ze),s.config.inline||s.config.static||v(window,"resize",w),window.ontouchstart===void 0?v(window.document,"mousedown",oe):v(window.document,"touchstart",oe),v(window.document,"focus",oe,{capture:!0}),s.config.clickOpens===!0&&(v(s._input,"focus",s.open),v(s._input,"click",s.open)),s.daysContainer!==void 0&&(v(s.monthNav,"click",ps),v(s.monthNav,["keyup","increment"],E),v(s.daysContainer,"click",ee)),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0){var O=function(P){return qt(P).select()};v(s.timeContainer,["increment"],f),v(s.timeContainer,"blur",f,{capture:!0}),v(s.timeContainer,"click",I),v([s.hourElement,s.minuteElement],["focus","click"],O),s.secondElement!==void 0&&v(s.secondElement,"focus",function(){return s.secondElement&&s.secondElement.select()}),s.amPM!==void 0&&v(s.amPM,"click",function(P){f(P)})}s.config.allowInput&&v(s._input,"blur",it)}function M(w,O){var P=w===void 0?s.latestSelectedDateObj||(s.config.minDate&&s.config.minDate>s.now?s.config.minDate:s.config.maxDate&&s.config.maxDate<s.now?s.config.maxDate:s.now):s.parseDate(w),$=s.currentYear,q=s.currentMonth;try{P!==void 0&&(s.currentYear=P.getFullYear(),s.currentMonth=P.getMonth())}catch(Z){Z.message="Invalid date supplied: "+P,s.config.errorHandler(Z)}O&&s.currentYear!==$&&(je("onYearChange"),B()),O&&(s.currentYear!==$||s.currentMonth!==q)&&je("onMonthChange"),s.redraw()}function I(w){var O=qt(w);~O.className.indexOf("arrow")&&D(w,O.classList.contains("arrowUp")?1:-1)}function D(w,O,P){var $=w&&qt(w),q=P||$&&$.parentNode&&$.parentNode.firstChild,Z=Lt("increment");Z.delta=O,q&&q.dispatchEvent(Z)}function z(){var w=window.document.createDocumentFragment();if(s.calendarContainer=Ve("div","flatpickr-calendar"),s.calendarContainer.tabIndex=-1,!s.config.noCalendar){if(w.appendChild(Q()),s.innerContainer=Ve("div","flatpickr-innerContainer"),s.config.weekNumbers){var O=se(),P=O.weekWrapper,$=O.weekNumbers;s.innerContainer.appendChild(P),s.weekNumbers=$,s.weekWrapper=P}s.rContainer=Ve("div","flatpickr-rContainer"),s.rContainer.appendChild(R()),s.daysContainer||(s.daysContainer=Ve("div","flatpickr-days"),s.daysContainer.tabIndex=-1),N(),s.rContainer.appendChild(s.daysContainer),s.innerContainer.appendChild(s.rContainer),w.appendChild(s.innerContainer)}s.config.enableTime&&w.appendChild(X()),Mt(s.calendarContainer,"rangeMode",s.config.mode==="range"),Mt(s.calendarContainer,"animate",s.config.animate===!0),Mt(s.calendarContainer,"multiMonth",1<s.config.showMonths),s.calendarContainer.appendChild(w);var q=s.config.appendTo!==void 0&&s.config.appendTo.nodeType!==void 0;if((s.config.inline||s.config.static)&&(s.calendarContainer.classList.add(s.config.inline?"inline":"static"),s.config.inline&&(!q&&s.element.parentNode?s.element.parentNode.insertBefore(s.calendarContainer,s._input.nextSibling):s.config.appendTo!==void 0&&s.config.appendTo.appendChild(s.calendarContainer)),s.config.static)){var Z=Ve("div","flatpickr-wrapper");s.element.parentNode&&s.element.parentNode.insertBefore(Z,s.element),Z.appendChild(s.element),s.altInput&&Z.appendChild(s.altInput),Z.appendChild(s.calendarContainer)}s.config.static||s.config.inline||(s.config.appendTo===void 0?window.document.body:s.config.appendTo).appendChild(s.calendarContainer)}function A(w,O,P,$){var q=be(O,!0),Z=Ve("span",w,O.getDate().toString());return Z.dateObj=O,Z.$i=$,Z.setAttribute("aria-label",s.formatDate(O,s.config.ariaDateFormat)),w.indexOf("hidden")===-1&&Kt(O,s.now)===0&&(s.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),q?(Z.tabIndex=-1,Et(O)&&(Z.classList.add("selected"),s.selectedDateElem=Z,s.config.mode==="range"&&(Mt(Z,"startRange",s.selectedDates[0]&&Kt(O,s.selectedDates[0],!0)===0),Mt(Z,"endRange",s.selectedDates[1]&&Kt(O,s.selectedDates[1],!0)===0),w==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),s.config.mode==="range"&&fs(O)&&!Et(O)&&Z.classList.add("inRange"),s.weekNumbers&&s.config.showMonths===1&&w!=="prevMonthDay"&&$%7==6&&s.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+s.config.getWeek(O)+"</span>"),je("onDayCreate",Z),Z}function J(w){w.focus(),s.config.mode==="range"&&Pt(w)}function V(w){for(var O=0<w?0:s.config.showMonths-1,P=0<w?s.config.showMonths:-1,$=O;$!=P;$+=w)for(var q,Z=s.daysContainer.children[$],ce=0<w?0:Z.children.length-1,te=0<w?Z.children.length:-1,fe=ce;fe!=te;fe+=w)if(q=Z.children[fe],q.className.indexOf("hidden")===-1&&be(q.dateObj))return q}function F(w,O){for(var P=w.className.indexOf("Month")===-1?w.dateObj.getMonth():s.currentMonth,$=0<O?s.config.showMonths:-1,q=0<O?1:-1,Z=P-s.currentMonth;Z!=$;Z+=q)for(var ce,te=s.daysContainer.children[Z],fe=P-s.currentMonth===Z?w.$i+O:0>O?te.children.length-1:0,ne=te.children.length,re=fe;0<=re&&re<ne&&re!=(0<O?ne:-1);re+=q)if(ce=te.children[re],ce.className.indexOf("hidden")===-1&&be(ce.dateObj)&&r(w.$i-re)>=r(O))return J(ce);return s.changeMonth(q),void L(V(q),0)}function L(w,O){var P=c(),$=He(P||document.body),q=w===void 0?$?P:s.selectedDateElem!==void 0&&He(s.selectedDateElem)?s.selectedDateElem:s.todayDateElem!==void 0&&He(s.todayDateElem)?s.todayDateElem:V(0<O?1:-1):w;q===void 0?s._input.focus():$?F(q,O):J(q)}function _(w,O){for(var P=(new Date(w,O,1).getDay()-s.l10n.firstDayOfWeek+7)%7,$=s.utils.getDaysInMonth((O-1+12)%12,w),q=s.utils.getDaysInMonth(O,w),Z=window.document.createDocumentFragment(),ce=1<s.config.showMonths,te=ce?"prevMonthDay hidden":"prevMonthDay",fe=ce?"nextMonthDay hidden":"nextMonthDay",ne=$+1-P,re=0;ne<=$;ne++,re++)Z.appendChild(A("flatpickr-day "+te,new Date(w,O-1,ne),ne,re));for(ne=1;ne<=q;ne++,re++)Z.appendChild(A("flatpickr-day",new Date(w,O,ne),ne,re));for(var Ee=q+1;Ee<=42-P&&(s.config.showMonths===1||re%7!=0);Ee++,re++)Z.appendChild(A("flatpickr-day "+fe,new Date(w,O+1,Ee%q),Ee,re));var ct=Ve("div","dayContainer");return ct.appendChild(Z),ct}function N(){if(s.daysContainer!==void 0){ka(s.daysContainer),s.weekNumbers&&ka(s.weekNumbers);for(var w,O=document.createDocumentFragment(),P=0;P<s.config.showMonths;P++)w=new Date(s.currentYear,s.currentMonth,1),w.setMonth(s.currentMonth+P),O.appendChild(_(w.getFullYear(),w.getMonth()));s.daysContainer.appendChild(O),s.days=s.daysContainer.firstChild,s.config.mode==="range"&&s.selectedDates.length===1&&Pt()}}function B(){if(!(1<s.config.showMonths||s.config.monthSelectorType!=="dropdown")){var w=function($){return!(s.config.minDate!==void 0&&s.currentYear===s.config.minDate.getFullYear()&&$<s.config.minDate.getMonth())&&!(s.config.maxDate!==void 0&&s.currentYear===s.config.maxDate.getFullYear()&&$>s.config.maxDate.getMonth())};s.monthsDropdownContainer.tabIndex=-1,s.monthsDropdownContainer.innerHTML="";for(var O=0;12>O;O++)if(w(O)){var P=Ve("option","flatpickr-monthDropdown-month");P.value=new Date(s.currentYear,O).getMonth().toString(),P.textContent=yl(O,s.config.shorthandCurrentMonth,s.l10n),P.tabIndex=-1,s.currentMonth===O&&(P.selected=!0),s.monthsDropdownContainer.appendChild(P)}}}function H(){var w,O=Ve("div","flatpickr-month"),P=window.document.createDocumentFragment();1<s.config.showMonths||s.config.monthSelectorType==="static"?w=Ve("span","cur-month"):(s.monthsDropdownContainer=Ve("select","flatpickr-monthDropdown-months"),s.monthsDropdownContainer.setAttribute("aria-label",s.l10n.monthAriaLabel),v(s.monthsDropdownContainer,"change",function(ce){var te=qt(ce),fe=parseInt(te.value,10);s.changeMonth(fe-s.currentMonth),je("onMonthChange")}),B(),w=s.monthsDropdownContainer);var $=Oa("cur-year",{tabindex:"-1"}),q=$.getElementsByTagName("input")[0];q.setAttribute("aria-label",s.l10n.yearAriaLabel),s.config.minDate&&q.setAttribute("min",s.config.minDate.getFullYear().toString()),s.config.maxDate&&(q.setAttribute("max",s.config.maxDate.getFullYear().toString()),q.disabled=!!s.config.minDate&&s.config.minDate.getFullYear()===s.config.maxDate.getFullYear());var Z=Ve("div","flatpickr-current-month");return Z.appendChild(w),Z.appendChild($),P.appendChild(Z),O.appendChild(P),{container:O,yearElement:q,monthElement:w}}function U(){ka(s.monthNav),s.monthNav.appendChild(s.prevMonthNav),s.config.showMonths&&(s.yearElements=[],s.monthElements=[]);for(var w,O=s.config.showMonths;O--;)w=H(),s.yearElements.push(w.yearElement),s.monthElements.push(w.monthElement),s.monthNav.appendChild(w.container);s.monthNav.appendChild(s.nextMonthNav)}function Q(){return s.monthNav=Ve("div","flatpickr-months"),s.yearElements=[],s.monthElements=[],s.prevMonthNav=Ve("span","flatpickr-prev-month"),s.prevMonthNav.innerHTML=s.config.prevArrow,s.nextMonthNav=Ve("span","flatpickr-next-month"),s.nextMonthNav.innerHTML=s.config.nextArrow,U(),Object.defineProperty(s,"_hidePrevMonthArrow",{get:function(){return s.__hidePrevMonthArrow},set:function(w){s.__hidePrevMonthArrow!==w&&(Mt(s.prevMonthNav,"flatpickr-disabled",w),s.__hidePrevMonthArrow=w)}}),Object.defineProperty(s,"_hideNextMonthArrow",{get:function(){return s.__hideNextMonthArrow},set:function(w){s.__hideNextMonthArrow!==w&&(Mt(s.nextMonthNav,"flatpickr-disabled",w),s.__hideNextMonthArrow=w)}}),s.currentYearElement=s.yearElements[0],Kn(),s.monthNav}function X(){s.calendarContainer.classList.add("hasTime"),s.config.noCalendar&&s.calendarContainer.classList.add("noCalendar");var w=sc(s.config);s.timeContainer=Ve("div","flatpickr-time"),s.timeContainer.tabIndex=-1;var O=Ve("span","flatpickr-time-separator",":"),P=Oa("flatpickr-hour",{"aria-label":s.l10n.hourAriaLabel});s.hourElement=P.getElementsByTagName("input")[0];var $=Oa("flatpickr-minute",{"aria-label":s.l10n.minuteAriaLabel});if(s.minuteElement=$.getElementsByTagName("input")[0],s.hourElement.tabIndex=s.minuteElement.tabIndex=-1,s.hourElement.value=zt(s.latestSelectedDateObj?s.latestSelectedDateObj.getHours():s.config.time_24hr?w.hours:b(w.hours)),s.minuteElement.value=zt(s.latestSelectedDateObj?s.latestSelectedDateObj.getMinutes():w.minutes),s.hourElement.setAttribute("step",s.config.hourIncrement.toString()),s.minuteElement.setAttribute("step",s.config.minuteIncrement.toString()),s.hourElement.setAttribute("min",s.config.time_24hr?"0":"1"),s.hourElement.setAttribute("max",s.config.time_24hr?"23":"12"),s.hourElement.setAttribute("maxlength","2"),s.minuteElement.setAttribute("min","0"),s.minuteElement.setAttribute("max","59"),s.minuteElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(P),s.timeContainer.appendChild(O),s.timeContainer.appendChild($),s.config.time_24hr&&s.timeContainer.classList.add("time24hr"),s.config.enableSeconds){s.timeContainer.classList.add("hasSeconds");var q=Oa("flatpickr-second");s.secondElement=q.getElementsByTagName("input")[0],s.secondElement.value=zt(s.latestSelectedDateObj?s.latestSelectedDateObj.getSeconds():w.seconds),s.secondElement.setAttribute("step",s.minuteElement.getAttribute("step")),s.secondElement.setAttribute("min","0"),s.secondElement.setAttribute("max","59"),s.secondElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(Ve("span","flatpickr-time-separator",":")),s.timeContainer.appendChild(q)}return s.config.time_24hr||(s.amPM=Ve("span","flatpickr-am-pm",s.l10n.amPM[rn(11<(s.latestSelectedDateObj?s.hourElement.value:s.config.defaultHour))]),s.amPM.title=s.l10n.toggleTitle,s.amPM.tabIndex=-1,s.timeContainer.appendChild(s.amPM)),s.timeContainer}function R(){s.weekdayContainer?ka(s.weekdayContainer):s.weekdayContainer=Ve("div","flatpickr-weekdays");for(var w,O=s.config.showMonths;O--;)w=Ve("div","flatpickr-weekdaycontainer"),s.weekdayContainer.appendChild(w);return ae(),s.weekdayContainer}function ae(){if(s.weekdayContainer){var w=s.l10n.firstDayOfWeek,O=mv(s.l10n.weekdays.shorthand);0<w&&w<O.length&&(O=mv(O.splice(w,O.length),O.splice(0,w)));for(var P=s.config.showMonths;P--;)s.weekdayContainer.children[P].innerHTML=`
      <span class='flatpickr-weekday'>
        `+O.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function se(){s.calendarContainer.classList.add("hasWeeks");var w=Ve("div","flatpickr-weekwrapper");w.appendChild(Ve("span","flatpickr-weekday",s.l10n.weekAbbreviation));var O=Ve("div","flatpickr-weeks");return w.appendChild(O),{weekWrapper:w,weekNumbers:O}}function T(w,O){O===void 0&&(O=!0);var P=O?w:w-s.currentMonth;0>P&&s._hidePrevMonthArrow===!0||0<P&&s._hideNextMonthArrow===!0||(s.currentMonth+=P,(0>s.currentMonth||11<s.currentMonth)&&(s.currentYear+=11<s.currentMonth?1:-1,s.currentMonth=(s.currentMonth+12)%12,je("onYearChange"),B()),N(),je("onMonthChange"),Kn())}function ie(w,O){if(w===void 0&&(w=!0),O===void 0&&(O=!0),s.input.value="",s.altInput!==void 0&&(s.altInput.value=""),s.mobileInput!==void 0&&(s.mobileInput.value=""),s.selectedDates=[],s.latestSelectedDateObj=void 0,O===!0&&(s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth()),s.config.enableTime===!0){var P=sc(s.config),$=P.hours,q=P.minutes,Z=P.seconds;y($,q,Z)}s.redraw(),w&&je("onChange")}function ye(){s.isOpen=!1,s.isMobile||(s.calendarContainer!==void 0&&s.calendarContainer.classList.remove("open"),s._input!==void 0&&s._input.classList.remove("active")),je("onClose")}function Pe(){s.config!==void 0&&je("onDestroy");for(var w=s._handlers.length;w--;)s._handlers[w].remove();if(s._handlers=[],s.mobileInput)s.mobileInput.parentNode&&s.mobileInput.parentNode.removeChild(s.mobileInput),s.mobileInput=void 0;else if(s.calendarContainer&&s.calendarContainer.parentNode)if(s.config.static&&s.calendarContainer.parentNode){var O=s.calendarContainer.parentNode;if(O.lastChild&&O.removeChild(O.lastChild),O.parentNode){for(;O.firstChild;)O.parentNode.insertBefore(O.firstChild,O);O.parentNode.removeChild(O)}}else s.calendarContainer.parentNode.removeChild(s.calendarContainer);s.altInput&&(s.input.type="text",s.altInput.parentNode&&s.altInput.parentNode.removeChild(s.altInput),delete s.altInput),s.input&&(s.input.type=s.input._type,s.input.classList.remove("flatpickr-input"),s.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(P){try{delete s[P]}catch{}})}function $e(w){return s.calendarContainer.contains(w)}function oe(w){if(s.isOpen&&!s.config.inline){var O=qt(w),P=$e(O),$=O===s.input||O===s.altInput||s.element.contains(O)||w.path&&w.path.indexOf&&(~w.path.indexOf(s.input)||~w.path.indexOf(s.altInput)),q=!$&&!P&&!$e(w.relatedTarget),Z=!s.config.ignoredFocusElements.some(function(ce){return ce.contains(O)});q&&Z&&(s.config.allowInput&&s.setDate(s._input.value,!1,s.config.altInput?s.config.altFormat:s.config.dateFormat),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0&&s.input.value!==""&&s.input.value!==void 0&&f(),s.close(),s.config&&s.config.mode==="range"&&s.selectedDates.length===1&&s.clear(!1))}}function me(w){if(!(!w||s.config.minDate&&w<s.config.minDate.getFullYear()||s.config.maxDate&&w>s.config.maxDate.getFullYear())){var O=w,P=s.currentYear!==O;s.currentYear=O||s.currentYear,s.config.maxDate&&s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth=i(s.config.maxDate.getMonth(),s.currentMonth):s.config.minDate&&s.currentYear===s.config.minDate.getFullYear()&&(s.currentMonth=o(s.config.minDate.getMonth(),s.currentMonth)),P&&(s.redraw(),je("onYearChange"),B())}}function be(w,O){var P;O===void 0&&(O=!0);var $=s.parseDate(w,void 0,O);if(s.config.minDate&&$&&0>Kt($,s.config.minDate,O===void 0?!s.minDateHasTime:O)||s.config.maxDate&&$&&0<Kt($,s.config.maxDate,O===void 0?!s.maxDateHasTime:O))return!1;if(!s.config.enable&&s.config.disable.length===0)return!0;if($===void 0)return!1;for(var q=!!s.config.enable,Z=(P=s.config.enable)!==null&&P!==void 0?P:s.config.disable,ce=0,te=void 0;ce<Z.length;ce++){if(te=Z[ce],typeof te=="function"&&te($)||te instanceof Date&&$!==void 0&&te.getTime()===$.getTime())return q;if(typeof te=="string"){var fe=s.parseDate(te,void 0,!0);return fe&&fe.getTime()===$.getTime()?q:!q}if(typeof te=="object"&&$!==void 0&&te.from&&te.to&&$.getTime()>=te.from.getTime()&&$.getTime()<=te.to.getTime())return q}return!q}function He(w){return s.daysContainer!==void 0&&w.className.indexOf("hidden")===-1&&w.className.indexOf("flatpickr-disabled")===-1&&s.daysContainer.contains(w)}function it(w){var O=w.target===s._input,P=s._input.value.trimEnd()!==Rr();O&&P&&!(w.relatedTarget&&$e(w.relatedTarget))&&s.setDate(s._input.value,!0,w.target===s.altInput?s.config.altFormat:s.config.dateFormat)}function Ze(w){var O=qt(w),P=s.config.wrap?t.contains(O):O===s._input,$=s.config.allowInput,q=s.isOpen&&(!$||!P),Z=s.config.inline&&P&&!$;if(w.keyCode===13&&P){if($)return s.setDate(s._input.value,!0,O===s.altInput?s.config.altFormat:s.config.dateFormat),s.close(),O.blur();s.open()}else if($e(O)||q||Z){var ce=!!s.timeContainer&&s.timeContainer.contains(O);switch(w.keyCode){case 13:ce?(w.preventDefault(),f(),Un()):ee(w);break;case 27:w.preventDefault(),Un();break;case 8:case 46:P&&!s.config.allowInput&&(w.preventDefault(),s.clear());break;case 37:case 39:if(!ce&&!P){w.preventDefault();var te=c();if(s.daysContainer!==void 0&&($===!1||te&&He(te))){var fe=w.keyCode===39?1:-1;w.ctrlKey?(w.stopPropagation(),T(fe),L(V(1),0)):L(void 0,fe)}}else s.hourElement&&s.hourElement.focus();break;case 38:case 40:w.preventDefault();var ne=w.keyCode===40?1:-1;s.daysContainer&&O.$i!==void 0||O===s.input||O===s.altInput?w.ctrlKey?(w.stopPropagation(),me(s.currentYear-ne),L(V(1),0)):!ce&&L(void 0,7*ne):O===s.currentYearElement?me(s.currentYear-ne):s.config.enableTime&&(!ce&&s.hourElement&&s.hourElement.focus(),f(w),s._debouncedChange());break;case 9:if(ce){var re=[s.hourElement,s.minuteElement,s.secondElement,s.amPM].concat(s.pluginElements).filter(function(Je){return Je}),Ee=re.indexOf(O);if(Ee!==-1){var ct=re[Ee+(w.shiftKey?-1:1)];w.preventDefault(),(ct||s._input).focus()}}else!s.config.noCalendar&&s.daysContainer&&s.daysContainer.contains(O)&&w.shiftKey&&(w.preventDefault(),s._input.focus())}}if(s.amPM!==void 0&&O===s.amPM)switch(w.key){case s.l10n.amPM[0].charAt(0):case s.l10n.amPM[0].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[0],h(),bt();break;case s.l10n.amPM[1].charAt(0):case s.l10n.amPM[1].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[1],h(),bt()}(P||$e(O))&&je("onKeyDown",w)}function Pt(w,O){if(O===void 0&&(O="flatpickr-day"),!(s.selectedDates.length!==1||w&&(!w.classList.contains(O)||w.classList.contains("flatpickr-disabled")))){for(var P=w?w.dateObj.getTime():s.days.firstElementChild.dateObj.getTime(),$=s.parseDate(s.selectedDates[0],void 0,!0).getTime(),q=i(P,s.selectedDates[0].getTime()),Z=o(P,s.selectedDates[0].getTime()),ce=!1,te=0,fe=0,ne=q;ne<Z;ne+=YF.DAY)be(new Date(ne),!0)||(ce=ce||ne>q&&ne<Z,ne<$&&(!te||ne>te)?te=ne:ne>$&&(!fe||ne<fe)&&(fe=ne));var re=Array.from(s.rContainer.querySelectorAll("*:nth-child(-n+"+s.config.showMonths+") > ."+O));re.forEach(function(Ee){var ct=Ee.dateObj,Je=ct.getTime(),hn=0<te&&Je<te||0<fe&&Je>fe;return hn?(Ee.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach(function(Wt){Ee.classList.remove(Wt)})):void(ce&&!hn||(["startRange","inRange","endRange","notAllowed"].forEach(function(Wt){Ee.classList.remove(Wt)}),w!==void 0&&(w.classList.add(P<=s.selectedDates[0].getTime()?"startRange":"endRange"),$<P&&Je===$?Ee.classList.add("startRange"):$>P&&Je===$&&Ee.classList.add("endRange"),Je>=te&&(fe===0||Je<=fe)&&UF(Je,$,P)&&Ee.classList.add("inRange"))))})}}function Wn(){!s.isOpen||s.config.static||s.config.inline||pn()}function fo(w,O){if(O===void 0&&(O=s._positionElement),s.isMobile===!0){if(w){w.preventDefault();var P=qt(w);P&&P.blur()}return s.mobileInput!==void 0&&(s.mobileInput.focus(),s.mobileInput.click()),void je("onOpen")}if(!(s._input.disabled||s.config.inline)){var $=s.isOpen;s.isOpen=!0,$||(s.calendarContainer.classList.add("open"),s._input.classList.add("active"),je("onOpen"),pn(O)),s.config.enableTime!==!0||s.config.noCalendar!==!0||s.config.allowInput!==!1||w!==void 0&&s.timeContainer.contains(w.relatedTarget)||setTimeout(function(){return s.hourElement.select()},50)}}function ir(w){return function(O){var P=s.config["_"+w+"Date"]=s.parseDate(O,s.config.dateFormat),$=s.config["_"+(w==="min"?"max":"min")+"Date"];P!==void 0&&(s[w==="min"?"minDateHasTime":"maxDateHasTime"]=0<P.getHours()||0<P.getMinutes()||0<P.getSeconds()),s.selectedDates&&(s.selectedDates=s.selectedDates.filter(function(q){return be(q)}),!s.selectedDates.length&&w==="min"&&m(P),bt()),s.daysContainer&&(Mr(),P===void 0?s.currentYearElement.removeAttribute(w):s.currentYearElement[w]=P.getFullYear().toString(),s.currentYearElement.disabled=!!$&&P!==void 0&&$.getFullYear()===P.getFullYear())}}function ii(){var w=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],O=St(St({},JSON.parse(JSON.stringify(t.dataset||{}))),n),P={};s.config.parseDate=O.parseDate,s.config.formatDate=O.formatDate,Object.defineProperty(s.config,"enable",{get:function(){return s.config._enable},set:function(re){s.config._enable=ze(re)}}),Object.defineProperty(s.config,"disable",{get:function(){return s.config._disable},set:function(re){s.config._disable=ze(re)}});var $=O.mode==="time";if(!O.dateFormat&&(O.enableTime||$)){var q=yt.defaultConfig.dateFormat||Co.dateFormat;P.dateFormat=O.noCalendar||$?"H:i"+(O.enableSeconds?":S":""):q+" H:i"+(O.enableSeconds?":S":"")}if(O.altInput&&(O.enableTime||$)&&!O.altFormat){var Z=yt.defaultConfig.altFormat||Co.altFormat;P.altFormat=O.noCalendar||$?"h:i"+(O.enableSeconds?":S K":" K"):Z+(" h:i"+(O.enableSeconds?":S":"")+" K")}Object.defineProperty(s.config,"minDate",{get:function(){return s.config._minDate},set:ir("min")}),Object.defineProperty(s.config,"maxDate",{get:function(){return s.config._maxDate},set:ir("max")});var ce=function(re){return function(Ee){s.config[re==="min"?"_minTime":"_maxTime"]=s.parseDate(Ee,"H:i:S")}};Object.defineProperty(s.config,"minTime",{get:function(){return s.config._minTime},set:ce("min")}),Object.defineProperty(s.config,"maxTime",{get:function(){return s.config._maxTime},set:ce("max")}),O.mode==="time"&&(s.config.noCalendar=!0,s.config.enableTime=!0),Object.assign(s.config,P,O);for(var te=0;te<w.length;te++)s.config[w[te]]=s.config[w[te]]===!0||s.config[w[te]]==="true";oc.filter(function(re){return s.config[re]!==void 0}).forEach(function(re){s.config[re]=ic(s.config[re]||[]).map(u)}),s.isMobile=!s.config.disableMobile&&!s.config.inline&&s.config.mode==="single"&&!s.config.disable.length&&!s.config.enable&&!s.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var fe,te=0;te<s.config.plugins.length;te++)for(var ne in fe=s.config.plugins[te](s)||{},fe)-1<oc.indexOf(ne)?s.config[ne]=ic(fe[ne]).map(u).concat(s.config[ne]):typeof O[ne]>"u"&&(s.config[ne]=fe[ne]);O.altInputClass||(s.config.altInputClass=ar().className+" "+s.config.altInputClass),je("onParseConfig")}function ar(){return s.config.wrap?t.querySelector("[data-input]"):t}function lr(){typeof s.config.locale!="object"&&typeof yt.l10ns[s.config.locale]>"u"&&s.config.errorHandler(new Error("flatpickr: invalid locale "+s.config.locale)),s.l10n=St(St({},yt.l10ns.default),typeof s.config.locale=="object"?s.config.locale:s.config.locale==="default"?void 0:yt.l10ns[s.config.locale]),Vr.D="("+s.l10n.weekdays.shorthand.join("|")+")",Vr.l="("+s.l10n.weekdays.longhand.join("|")+")",Vr.M="("+s.l10n.months.shorthand.join("|")+")",Vr.F="("+s.l10n.months.longhand.join("|")+")",Vr.K="("+s.l10n.amPM[0]+"|"+s.l10n.amPM[1]+"|"+s.l10n.amPM[0].toLowerCase()+"|"+s.l10n.amPM[1].toLowerCase()+")";var w=St(St({},n),JSON.parse(JSON.stringify(t.dataset||{})));w.time_24hr===void 0&&yt.defaultConfig.time_24hr===void 0&&(s.config.time_24hr=s.l10n.time_24hr),s.formatDate=f2(s),s.parseDate=Ud({config:s.config,l10n:s.l10n})}function pn(w){if(typeof s.config.position=="function")return void s.config.position(s,w);if(s.calendarContainer!==void 0){je("onPreCalendarPosition");var O=w||s._positionElement,P=Array.prototype.reduce.call(s.calendarContainer.children,function(ws,xs){return ws+xs.offsetHeight},0),$=s.calendarContainer.offsetWidth,q=s.config.position.split(" "),Z=q[0],ce=1<q.length?q[1]:null,te=O.getBoundingClientRect(),fe=window.innerHeight-te.bottom,ne=Z==="above"||Z!=="below"&&fe<P&&te.top>P,re=window.pageYOffset+te.top+(ne?-P-2:O.offsetHeight+2);if(Mt(s.calendarContainer,"arrowTop",!ne),Mt(s.calendarContainer,"arrowBottom",ne),!s.config.inline){var Ee=window.pageXOffset+te.left,ct=!1,Je=!1;ce==="center"?(Ee-=($-te.width)/2,ct=!0):ce==="right"&&(Ee-=$-te.width,Je=!0),Mt(s.calendarContainer,"arrowLeft",!ct&&!Je),Mt(s.calendarContainer,"arrowCenter",ct),Mt(s.calendarContainer,"arrowRight",Je);var hn=window.document.body.offsetWidth-(window.pageXOffset+te.right),Wt=Ee+$>window.document.body.offsetWidth,hs=hn+$>window.document.body.offsetWidth;if(Mt(s.calendarContainer,"rightMost",Wt),!s.config.static)if(s.calendarContainer.style.top=re+"px",!Wt)s.calendarContainer.style.left=Ee+"px",s.calendarContainer.style.right="auto";else if(!hs)s.calendarContainer.style.left="auto",s.calendarContainer.style.right=hn+"px";else{var Nr=ai();if(Nr===void 0)return;var ms=window.document.body.offsetWidth,bs=o(0,ms/2-$/2),vs=Nr.cssRules.length,ys="{left:"+te.left+"px;right:auto;}";Mt(s.calendarContainer,"rightMost",!1),Mt(s.calendarContainer,"centerMost",!0),Nr.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+ys,vs),s.calendarContainer.style.left=bs+"px",s.calendarContainer.style.right="auto"}}}}function ai(){for(var w,O=null,P=0;P<document.styleSheets.length;P++)if(w=document.styleSheets[P],w.cssRules){try{w.cssRules}catch{continue}O=w;break}return O??li()}function li(){var w=document.createElement("style");return document.head.appendChild(w),w.sheet}function Mr(){s.config.noCalendar||s.isMobile||(B(),Kn(),N())}function Un(){s._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(s.close,0):s.close()}function ee(w){w.preventDefault(),w.stopPropagation();var O=function(re){return re.classList&&re.classList.contains("flatpickr-day")&&!re.classList.contains("flatpickr-disabled")&&!re.classList.contains("notAllowed")},P=d2(qt(w),O);if(P!==void 0){var $=P,q=s.latestSelectedDateObj=new Date($.dateObj.getTime()),Z=(q.getMonth()<s.currentMonth||q.getMonth()>s.currentMonth+s.config.showMonths-1)&&s.config.mode!=="range";if(s.selectedDateElem=$,s.config.mode==="single")s.selectedDates=[q];else if(s.config.mode==="multiple"){var ce=Et(q);ce?s.selectedDates.splice(parseInt(ce),1):s.selectedDates.push(q)}else s.config.mode==="range"&&(s.selectedDates.length===2&&s.clear(!1,!1),s.latestSelectedDateObj=q,s.selectedDates.push(q),Kt(q,s.selectedDates[0],!0)!==0&&s.selectedDates.sort(function(re,Ee){return re.getTime()-Ee.getTime()}));if(h(),Z){var te=s.currentYear!==q.getFullYear();s.currentYear=q.getFullYear(),s.currentMonth=q.getMonth(),te&&(je("onYearChange"),B()),je("onMonthChange")}if(Kn(),N(),bt(),Z||s.config.mode==="range"||s.config.showMonths!==1?s.selectedDateElem!==void 0&&s.hourElement===void 0&&s.selectedDateElem&&s.selectedDateElem.focus():J($),s.hourElement!==void 0&&s.hourElement!==void 0&&s.hourElement.focus(),s.config.closeOnSelect){var fe=s.config.mode==="single"&&!s.config.enableTime,ne=s.config.mode==="range"&&s.selectedDates.length===2&&!s.config.enableTime;(fe||ne)&&Un()}k()}}function ue(w,O){if(w!==null&&typeof w=="object")for(var P in Object.assign(s.config,w),w)Gn[P]!==void 0&&Gn[P].forEach(function($){return $()});else s.config[w]=O,Gn[w]===void 0?-1<oc.indexOf(w)&&(s.config[w]=ic(O)):Gn[w].forEach(function($){return $()});s.redraw(),bt(!0)}function Ie(w,O){var P=[];if(w instanceof Array)P=w.map(function($){return s.parseDate($,O)});else if(w instanceof Date||typeof w=="number")P=[s.parseDate(w,O)];else if(typeof w=="string")switch(s.config.mode){case"single":case"time":P=[s.parseDate(w,O)];break;case"multiple":P=w.split(s.config.conjunction).map(function($){return s.parseDate($,O)});break;case"range":P=w.split(s.l10n.rangeSeparator).map(function($){return s.parseDate($,O)})}else s.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(w)));s.selectedDates=s.config.allowInvalidPreload?P:P.filter(function($){return $ instanceof Date&&be($,!1)}),s.config.mode==="range"&&s.selectedDates.sort(function($,q){return $.getTime()-q.getTime()})}function Ae(w,O,P){return O===void 0&&(O=!1),P===void 0&&(P=s.config.dateFormat),w!==0&&!w||w instanceof Array&&w.length===0?s.clear(O):(Ie(w,P),s.latestSelectedDateObj=s.selectedDates[s.selectedDates.length-1],s.redraw(),M(void 0,O),m(),s.selectedDates.length===0&&s.clear(!1),bt(O),void(O&&je("onChange")))}function ze(w){return w.slice().map(function(O){return typeof O=="string"||typeof O=="number"||O instanceof Date?s.parseDate(O,void 0,!0):O&&typeof O=="object"&&O.from&&O.to?{from:s.parseDate(O.from,void 0),to:s.parseDate(O.to,void 0)}:O}).filter(function(O){return O})}function It(){s.selectedDates=[],s.now=s.parseDate(s.config.now)||new Date;var w=s.config.defaultDate||((s.input.nodeName==="INPUT"||s.input.nodeName==="TEXTAREA")&&s.input.placeholder&&s.input.value===s.input.placeholder?null:s.input.value);w&&Ie(w,s.config.dateFormat),s._initialDate=0<s.selectedDates.length?s.selectedDates[0]:s.config.minDate&&s.config.minDate.getTime()>s.now.getTime()?s.config.minDate:s.config.maxDate&&s.config.maxDate.getTime()<s.now.getTime()?s.config.maxDate:s.now,s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth(),0<s.selectedDates.length&&(s.latestSelectedDateObj=s.selectedDates[0]),s.config.minTime!==void 0&&(s.config.minTime=s.parseDate(s.config.minTime,"H:i")),s.config.maxTime!==void 0&&(s.config.maxTime=s.parseDate(s.config.maxTime,"H:i")),s.minDateHasTime=!!s.config.minDate&&(0<s.config.minDate.getHours()||0<s.config.minDate.getMinutes()||0<s.config.minDate.getSeconds()),s.maxDateHasTime=!!s.config.maxDate&&(0<s.config.maxDate.getHours()||0<s.config.maxDate.getMinutes()||0<s.config.maxDate.getSeconds())}function gn(){return s.input=ar(),s.input?(s.input._type=s.input.type,s.input.type="text",s.input.classList.add("flatpickr-input"),s._input=s.input,s.config.altInput&&(s.altInput=Ve(s.input.nodeName,s.config.altInputClass),s._input=s.altInput,s.altInput.placeholder=s.input.placeholder,s.altInput.disabled=s.input.disabled,s.altInput.required=s.input.required,s.altInput.tabIndex=s.input.tabIndex,s.altInput.type="text",s.input.setAttribute("type","hidden"),!s.config.static&&s.input.parentNode&&s.input.parentNode.insertBefore(s.altInput,s.input.nextSibling)),!s.config.allowInput&&s._input.setAttribute("readonly","readonly"),void Dt()):void s.config.errorHandler(new Error("Invalid input element specified"))}function Dt(){s._positionElement=s.config.positionElement||s._input}function qn(){var w=s.config.enableTime?s.config.noCalendar?"time":"datetime-local":"date";s.mobileInput=Ve("input",s.input.className+" flatpickr-mobile"),s.mobileInput.tabIndex=1,s.mobileInput.type=w,s.mobileInput.disabled=s.input.disabled,s.mobileInput.required=s.input.required,s.mobileInput.placeholder=s.input.placeholder,s.mobileFormatStr=w=="datetime-local"?"Y-m-d\\TH:i:S":w==="date"?"Y-m-d":"H:i:S",0<s.selectedDates.length&&(s.mobileInput.defaultValue=s.mobileInput.value=s.formatDate(s.selectedDates[0],s.mobileFormatStr)),s.config.minDate&&(s.mobileInput.min=s.formatDate(s.config.minDate,"Y-m-d")),s.config.maxDate&&(s.mobileInput.max=s.formatDate(s.config.maxDate,"Y-m-d")),s.input.getAttribute("step")&&(s.mobileInput.step=s.input.getAttribute("step")+""),s.input.type="hidden",s.altInput!==void 0&&(s.altInput.type="hidden");try{s.input.parentNode&&s.input.parentNode.insertBefore(s.mobileInput,s.input.nextSibling)}catch{}v(s.mobileInput,"change",function(O){s.setDate(qt(O).value,!1,s.mobileFormatStr),je("onChange"),je("onClose")})}function Yn(w){return s.isOpen===!0?s.close():void s.open(w)}function je(w,O){if(s.config!==void 0){var P=s.config[w];if(P!==void 0&&0<P.length)for(var $=0;P[$]&&$<P.length;$++)P[$](s.selectedDates,s.input.value,s,O);w==="onChange"&&(s.input.dispatchEvent(Lt("change")),s.input.dispatchEvent(Lt("input")))}}function Lt(w){var O=document.createEvent("Event");return O.initEvent(w,!0,!0),O}function Et(w){for(var O,P=0;P<s.selectedDates.length;P++)if(O=s.selectedDates[P],O instanceof Date&&Kt(O,w)===0)return""+P;return!1}function fs(w){return!(s.config.mode!=="range"||2>s.selectedDates.length)&&0<=Kt(w,s.selectedDates[0])&&0>=Kt(w,s.selectedDates[1])}function Kn(){s.config.noCalendar||s.isMobile||!s.monthNav||(s.yearElements.forEach(function(w,O){var P=new Date(s.currentYear,s.currentMonth,1);P.setMonth(s.currentMonth+O),1<s.config.showMonths||s.config.monthSelectorType==="static"?s.monthElements[O].textContent=yl(P.getMonth(),s.config.shorthandCurrentMonth,s.l10n)+" ":s.monthsDropdownContainer.value=P.getMonth().toString(),w.value=P.getFullYear().toString()}),s._hidePrevMonthArrow=s.config.minDate!==void 0&&(s.currentYear===s.config.minDate.getFullYear()?s.currentMonth<=s.config.minDate.getMonth():s.currentYear<s.config.minDate.getFullYear()),s._hideNextMonthArrow=s.config.maxDate!==void 0&&(s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth+1>s.config.maxDate.getMonth():s.currentYear>s.config.maxDate.getFullYear()))}function Rr(w){var O=w||(s.config.altInput?s.config.altFormat:s.config.dateFormat);return s.selectedDates.map(function(P){return s.formatDate(P,O)}).filter(function(P,$,q){return s.config.mode!=="range"||s.config.enableTime||q.indexOf(P)===$}).join(s.config.mode==="range"?s.l10n.rangeSeparator:s.config.conjunction)}function bt(w){w===void 0&&(w=!0),s.mobileInput!==void 0&&s.mobileFormatStr&&(s.mobileInput.value=s.latestSelectedDateObj===void 0?"":s.formatDate(s.latestSelectedDateObj,s.mobileFormatStr)),s.input.value=Rr(s.config.dateFormat),s.altInput!==void 0&&(s.altInput.value=Rr(s.config.altFormat)),w!==!1&&je("onValueUpdate")}function ps(w){var O=qt(w),P=s.prevMonthNav.contains(O),$=s.nextMonthNav.contains(O);P||$?T(P?-1:1):0<=s.yearElements.indexOf(O)?O.select():O.classList.contains("arrowUp")?s.changeYear(s.currentYear+1):O.classList.contains("arrowDown")&&s.changeYear(s.currentYear-1)}function gs(w){w.preventDefault();var O=w.type==="keydown",P=qt(w),$=P;s.amPM!==void 0&&P===s.amPM&&(s.amPM.textContent=s.l10n.amPM[rn(s.amPM.textContent===s.l10n.amPM[0])]);var q=parseFloat($.getAttribute("min")),Z=parseFloat($.getAttribute("max")),ce=parseFloat($.getAttribute("step")),te=parseInt($.value,10),fe=w.delta||(O?w.which===38?1:-1:0),ne=te+ce*fe;if(typeof $.value<"u"&&$.value.length===2){var re=$===s.hourElement,Ee=$===s.minuteElement;ne<q?(ne=Z+ne+rn(!re)+(rn(re)&&rn(!s.amPM)),Ee&&D(void 0,-1,s.hourElement)):ne>Z&&(ne=$===s.hourElement?ne-Z-rn(!s.amPM):q,Ee&&D(void 0,1,s.hourElement)),s.amPM&&re&&(ce===1?ne+te===23:r(ne-te)>ce)&&(s.amPM.textContent=s.l10n.amPM[rn(s.amPM.textContent===s.l10n.amPM[0])]),$.value=zt(ne)}}var s={config:St(St({},Co),yt.defaultConfig),l10n:Ai};s.parseDate=Ud({config:s.config,l10n:s.l10n}),s._handlers=[],s.pluginElements=[],s.loadedPlugins=[],s._bind=v,s._setHoursFromDate=m,s._positionCalendar=pn,s.changeMonth=T,s.changeYear=me,s.clear=ie,s.close=ye,s.onMouseOver=Pt,s._createElement=Ve,s.createDay=A,s.destroy=Pe,s.isEnabled=be,s.jumpToDate=M,s.updateValue=bt,s.open=fo,s.redraw=Mr,s.set=ue,s.setDate=Ae,s.toggle=Yn;var Gn={locale:[lr,ae],showMonths:[U,d,R],minDate:[M],maxDate:[M],positionElement:[Dt],clickOpens:[function(){s.config.clickOpens===!0?(v(s._input,"focus",s.open),v(s._input,"click",s.open)):(s._input.removeEventListener("focus",s.open),s._input.removeEventListener("click",s.open))}]};return l(),s}function Po(t,n){for(var r,o=Array.prototype.slice.call(t).filter(function(l){return l instanceof HTMLElement}),i=[],a=0;a<o.length;a++){r=o[a];try{if(r.getAttribute("data-fp-omit")!==null)continue;r._flatpickr!==void 0&&(r._flatpickr.destroy(),r._flatpickr=void 0),r._flatpickr=GF(r,n||{}),i.push(r._flatpickr)}catch(l){console.error(l)}}return i.length===1?i[0]:i}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return Po(this,t)},HTMLElement.prototype.flatpickr=function(t){return Po([this],t)});var yt=function(t,n){return typeof t=="string"?Po(window.document.querySelectorAll(t),n):t instanceof Node?Po([t],n):Po(t,n)};yt.defaultConfig={},yt.l10ns={en:St({},Ai),default:St({},Ai)},yt.localize=function(t){yt.l10ns.default=St(St({},yt.l10ns.default),t)},yt.setDefaults=function(t){yt.defaultConfig=St(St({},yt.defaultConfig),t)},yt.parseDate=Ud({}),yt.formatDate=f2({}),yt.compareDates=Kt,typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return Po(this,t)}),Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))},typeof window<"u"&&(window.flatpickr=yt);j.oneOfType([j.string,j.array,j.object,j.number]);j.bool,j.bool,j.string,j.string,j.string,j.string,j.number,j.number,j.array,j.bool,j.bool,j.bool,j.node,j.node,j.number,j.string,j.bool,j.string,j.oneOfType([j.string,j.object]),j.number,j.oneOf(["single","multiple","range"]),j.oneOf(["static","dropdown"]),j.string,j.bool,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.string,j.bool,j.bool,j.number,j.node,j.bool,j.bool,j.bool,j.oneOf(["full","auto"]),j.string;j.string,j.string,j.string,j.node,j.bool,j.bool,j.bool,j.bool,j.bool,j.func,j.func,j.string;j.oneOfType([j.string,j.number]),j.oneOfType([j.string,j.number]),j.bool,j.string;j.string,j.oneOfType([j.string,j.number]),j.string,j.string,j.bool,j.bool,j.bool,j.bool,j.bool,j.bool,j.string,j.string,j.func,j.func,j.func,j.oneOf(["text","email","password","tel","url","number"]),j.string,j.node,j.node,j.node,j.oneOf(["full","auto"]),j.string;j.string,j.arrayOf(j.object),j.string,j.func,j.string,j.string,j.string,j.func,j.func,j.func,j.bool,j.string,j.func,j.bool;j.string,j.string.isRequired,j.string,j.string.isRequired,j.string,j.string,j.func;j.node,j.object,j.string,j.func,j.string,j.string,j.func,j.func,j.func,j.string,j.bool,j.bool,j.string,j.any;j.string,j.string,j.node;j.node,j.string;j.string,j.string,j.node;j.bool,j.node,j.string;j.node,j.string;j.number,j.number,j.bool,j.string,j.node;j.node,j.string,j.oneOf(["default","primary","primary-danger","subdued"]),j.bool;j.string,j.string,j.string;S.createContext({});p.createContext();j.node,j.oneOf(["small","normal"]),j.string;j.string,j.bool,j.oneOf(tr),j.string,j.node,j.string,j.func;j.string,j.node,j.string;const QF=`
	jn-text-theme-high
	jn-flex
	jn-rounded
	jn-leading-5
	jn-overflow-hidden
	jn-items-center
`,ZF=`
	jn-w-[4px]
	jn-self-stretch
	jn-border-l-4
	jn-mr-6
	jn-shrink-0
`,bv=`
	jn-border-theme-message-default
`,vv=`
	jn-bg-theme-message-default
`,JF=`
	jn-border-theme-message-error
`,XF=`
	jn-bg-theme-message-error
`,e8=`
	jn-border-theme-message-warning
`,t8=`
	jn-bg-theme-message-warning
`,n8=`
	jn-border-theme-message-danger
`,r8=`
	jn-bg-theme-message-danger
`,o8=`
	jn-border-theme-message-success
`,i8=`
	jn-bg-theme-message-success
`,a8=`
	jn-py-3
	jn-pr-4
	jn-ml-7
`,l8=`
	jn-font-bold
`,s8=`
	jn-ml-auto
	jn-self-stretch
	jn-flex
	jn-flex-col
	jn-py-2.5
	jn-pr-2.5
`,c8=t=>t==="error"?XF:t==="warning"?t8:t==="success"?i8:t==="info"?vv:t==="danger"?r8:vv,u8=t=>t==="error"?JF:t==="warning"?e8:t==="success"?o8:t==="info"?bv:t==="danger"?n8:bv,d8=t=>t==="error"?"dangerous":t,p2=t=>{let{title:n=null,text:r=null,variant:o="info",dismissible:i=!1,autoDismiss:a=!1,autoDismissTimeout:l=1e4,onDismiss:c,className:u="",children:d,...f}=t;const[g,b]=p.useState(!0),h=S.useRef(null);S.useEffect(()=>()=>clearTimeout(h.current),[]),p.useEffect(()=>{a&&(clearTimeout(h.current),h.current=setTimeout(()=>m(),l))},[a,l]);const m=()=>{b(!1),c&&c()};return S.createElement(S.Fragment,null,g&&S.createElement("div",xe({className:`juno-message juno-message-${o} ${QF} ${c8(o)} ${u}`},f),S.createElement("div",{className:`juno-message-border ${ZF} ${u8(o)}`}),S.createElement(Ri,{icon:d8(o),color:"jn-text-theme-"+o,className:"jn-shrink-0"}),S.createElement("div",{className:`juno-message-content ${a8}`},n?S.createElement("h1",{className:`${l8}`},n):"",S.createElement("div",null,d||r)),i&&S.createElement("div",{className:s8},S.createElement(Ri,{icon:"close",onClick:m,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100"}))))};p2.propTypes={title:j.string,text:j.string,variant:j.oneOf(["info","warning","danger","error","success"]),dismissible:j.bool,autoDismiss:j.bool,autoDismissTimeout:j.number,onDismiss:j.func,className:j.string,children:j.node};j.node,j.string,j.string,j.oneOf(tr),j.oneOf(tr),j.string,j.func,j.func;var g2=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],wl=g2.join(","),h2=typeof Element>"u",io=h2?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,xl=!h2&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t==null?void 0:t.ownerDocument},jl=function t(n,r){var o;r===void 0&&(r=!0);var i=n==null||(o=n.getAttribute)===null||o===void 0?void 0:o.call(n,"inert"),a=i===""||i==="true"||r&&n&&t(n.parentNode);return a},f8=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},m2=function(t,n,r){if(jl(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(wl));return n&&io.call(t,wl)&&o.unshift(t),o=o.filter(r),o},b2=function t(n,r,o){for(var i=[],a=Array.from(n);a.length;){var l=a.shift();if(!jl(l,!1))if(l.tagName==="SLOT"){var c=l.assignedElements(),u=c.length?c:l.children,d=t(u,!0,o);o.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{var f=io.call(l,wl);f&&o.filter(l)&&(r||!n.includes(l))&&i.push(l);var g=l.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(l),b=!jl(g,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(g&&b){var h=t(g===!0?l.children:g.children,!0,o);o.flatten?i.push.apply(i,h):i.push({scopeParent:l,candidates:h})}else a.unshift.apply(a,l.children)}}return i},v2=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},pr=function(t){if(!t)throw new Error("No node provided");return 0>t.tabIndex&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||f8(t))&&!v2(t)?0:t.tabIndex},p8=function(t,n){var r=pr(t);return 0>r&&n&&!v2(t)?0:r},g8=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},y2=function(t){return t.tagName==="INPUT"},h8=function(t){return y2(t)&&t.type==="hidden"},m8=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},b8=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},v8=function(t){if(!t.name)return!0;var n,r=t.form||xl(t),o=function(a){return r.querySelectorAll('input[type="radio"][name="'+a+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=o(window.CSS.escape(t.name));else try{n=o(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=b8(n,t.form);return!i||i===t},y8=function(t){return y2(t)&&t.type==="radio"},w8=function(t){return y8(t)&&!v8(t)},x8=function(t){var n,r=t&&xl(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,l,c;for(i=!!((a=o)!==null&&a!==void 0&&(l=a.ownerDocument)!==null&&l!==void 0&&l.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,d,f;r=xl(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((d=o)!==null&&d!==void 0&&(f=d.ownerDocument)!==null&&f!==void 0&&f.contains(o))}}return i},yv=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},j8=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=io.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(io.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var l=t;t;){var c=t.parentElement,u=xl(t);if(c&&!c.shadowRoot&&o(c)===!0)return yv(t);t=t.assignedSlot?t.assignedSlot:c||u===t.ownerDocument?c:u.host}t=l}if(x8(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return yv(t);return!1},E8=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r,o=0;o<n.children.length;o++)if(r=n.children.item(o),r.tagName==="LEGEND")return!!io.call(n,"fieldset[disabled] *")||!r.contains(t);return!0}n=n.parentElement}return!1},El=function(t,n){return!(n.disabled||jl(n)||h8(n)||j8(n,t)||m8(n)||E8(n))},qd=function(t,n){return!(w8(n)||0>pr(n)||!El(t,n))},k8=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||0<=n)},O8=function t(n){var r=[],o=[];return n.forEach(function(i,a){var l=!!i.scopeParent,c=l?i.scopeParent:i,u=p8(c,l),d=l?t(i.candidates):c;u===0?l?r.push.apply(r,d):r.push(c):o.push({documentOrder:a,tabIndex:u,item:i,isScope:l,content:d})}),o.sort(g8).reduce(function(i,a){return a.isScope?i.push.apply(i,a.content):i.push(a.content),i},[]).concat(r)},w2=function(t,n){n=n||{};var r;return r=n.getShadowRoot?b2([t],n.includeContainer,{filter:qd.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:k8}):m2(t,n.includeContainer,qd.bind(null,n)),O8(r)},x2=function(t,n){n=n||{};var r;return r=n.getShadowRoot?b2([t],n.includeContainer,{filter:El.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):m2(t,n.includeContainer,El.bind(null,n)),r},$r=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return io.call(t,wl)!==!1&&qd(n,t)},S8=g2.concat("iframe").join(","),za=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return io.call(t,S8)!==!1&&El(n,t)},C8=Object.freeze({__proto__:null,focusable:x2,getTabIndex:pr,isFocusable:za,isTabbable:$r,tabbable:w2});function P8(t,n,r){return(n=D8(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function wv(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function xv(t){for(var n,r=1;r<arguments.length;r++)n=arguments[r]==null?{}:arguments[r],r%2?wv(Object(n),!0).forEach(function(o){P8(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wv(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))});return t}function I8(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function D8(t){var n=I8(t,"string");return typeof n=="symbol"?n:n+""}var jv={activateTrap:function(t,n){if(0<t.length){var r=t[t.length-1];r!==n&&r.pause()}var o=t.indexOf(n);o===-1||t.splice(o,1),t.push(n)},deactivateTrap:function(t,n){var r=t.indexOf(n);r!==-1&&t.splice(r,1),0<t.length&&t[t.length-1].unpause()}},T8=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},M8=function(t){return(t==null?void 0:t.key)==="Escape"||(t==null?void 0:t.key)==="Esc"||(t==null?void 0:t.keyCode)===27},Oi=function(t){return(t==null?void 0:t.key)==="Tab"||(t==null?void 0:t.keyCode)===9},R8=function(t){return Oi(t)&&!t.shiftKey},N8=function(t){return Oi(t)&&t.shiftKey},Ev=function(t){return setTimeout(t,0)},kv=function(t,n){var r=-1;return t.every(function(o,i){return!n(o)||(r=i,!1)}),r},pi=function(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return typeof t=="function"?t.apply(void 0,r):t},Sa=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},F8=[],L8=function(t,n){var r,o=(n==null?void 0:n.document)||document,i=(n==null?void 0:n.trapStack)||F8,a=xv({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:R8,isKeyBackward:N8},n),l={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},c=function(F,L,_){return F&&F[L]!==void 0?F[L]:a[_||L]},u=function(F,L){var _=typeof(L==null?void 0:L.composedPath)=="function"?L.composedPath():void 0;return l.containerGroups.findIndex(function(N){var B=N.container,H=N.tabbableNodes;return B.contains(F)||(_==null?void 0:_.includes(B))||H.find(function(U){return U===F})})},d=function(F){var L=a[F];if(typeof L=="function"){for(var _=arguments.length,N=Array(1<_?_-1:0),B=1;B<_;B++)N[B-1]=arguments[B];L=L.apply(void 0,N)}if(L===!0&&(L=void 0),!L){if(L===void 0||L===!1)return L;throw new Error("`".concat(F,"` was specified but was not a node, or did not return a node"))}var H=L;if(typeof L=="string"&&(H=o.querySelector(L),!H))throw new Error("`".concat(F,"` as selector refers to no known node"));return H},f=function(){var F=d("initialFocus");if(F===!1)return!1;if(F===void 0||!za(F,a.tabbableOptions))if(0<=u(o.activeElement))F=o.activeElement;else{var L=l.tabbableGroups[0],_=L&&L.firstTabbableNode;F=_||d("fallbackFocus")}if(!F)throw new Error("Your focus-trap needs to have at least one focusable element");return F},g=function(){if(l.containerGroups=l.containers.map(function(F){var L=w2(F,a.tabbableOptions),_=x2(F,a.tabbableOptions),N=0<L.length?L[0]:void 0,B=0<L.length?L[L.length-1]:void 0,H=_.find(function(X){return $r(X)}),U=_.slice().reverse().find(function(X){return $r(X)}),Q=!!L.find(function(X){return 0<pr(X)});return{container:F,tabbableNodes:L,focusableNodes:_,posTabIndexesFound:Q,firstTabbableNode:N,lastTabbableNode:B,firstDomTabbableNode:H,lastDomTabbableNode:U,nextTabbableNode:function(X){var R=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],ae=L.indexOf(X);return 0>ae?R?_.slice(_.indexOf(X)+1).find(function(se){return $r(se)}):_.slice(0,_.indexOf(X)).reverse().find(function(se){return $r(se)}):L[ae+(R?1:-1)]}}}),l.tabbableGroups=l.containerGroups.filter(function(F){return 0<F.tabbableNodes.length}),0>=l.tabbableGroups.length&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(l.containerGroups.find(function(F){return F.posTabIndexesFound})&&1<l.containerGroups.length)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function(F){var L=F.activeElement;return L?L.shadowRoot&&L.shadowRoot.activeElement!==null?b(L.shadowRoot):L:void 0},h=function(F){return F===!1||F===b(document)?void 0:F&&F.focus?(F.focus({preventScroll:!!a.preventScroll}),l.mostRecentlyFocusedNode=F,void(T8(F)&&F.select())):void h(f())},m=function(F){var L=d("setReturnFocus",F);return L||L!==!1&&F},y=function(F){var L=F.target,_=F.event,N=F.isBackward,B=N!==void 0&&N;L=L||Sa(_),g();var H=null;if(0<l.tabbableGroups.length){var U=u(L,_),Q=0<=U?l.containerGroups[U]:void 0;if(0>U)H=B?l.tabbableGroups[l.tabbableGroups.length-1].lastTabbableNode:l.tabbableGroups[0].firstTabbableNode;else if(B){var X=kv(l.tabbableGroups,function(ye){var Pe=ye.firstTabbableNode;return L===Pe});if(0>X&&(Q.container===L||za(L,a.tabbableOptions)&&!$r(L,a.tabbableOptions)&&!Q.nextTabbableNode(L,!1))&&(X=U),0<=X){var R=X===0?l.tabbableGroups.length-1:X-1,ae=l.tabbableGroups[R];H=0<=pr(L)?ae.lastTabbableNode:ae.lastDomTabbableNode}else Oi(_)||(H=Q.nextTabbableNode(L,!1))}else{var se=kv(l.tabbableGroups,function(ye){var Pe=ye.lastTabbableNode;return L===Pe});if(0>se&&(Q.container===L||za(L,a.tabbableOptions)&&!$r(L,a.tabbableOptions)&&!Q.nextTabbableNode(L))&&(se=U),0<=se){var T=se===l.tabbableGroups.length-1?0:se+1,ie=l.tabbableGroups[T];H=0<=pr(L)?ie.firstTabbableNode:ie.firstDomTabbableNode}else Oi(_)||(H=Q.nextTabbableNode(L))}}else H=d("fallbackFocus");return H},E=function(F){var L=Sa(F);return 0<=u(L,F)?void 0:pi(a.clickOutsideDeactivates,F)?void r.deactivate({returnFocus:a.returnFocusOnDeactivate}):void(pi(a.allowOutsideClick,F)||F.preventDefault())},v=function(F){var L=Sa(F),_=0<=u(L,F);if(_||L instanceof Document)_&&(l.mostRecentlyFocusedNode=L);else{F.stopImmediatePropagation();var N,B=!0;if(!l.mostRecentlyFocusedNode)B=!1;else if(0<pr(l.mostRecentlyFocusedNode)){var H=u(l.mostRecentlyFocusedNode),U=l.containerGroups[H].tabbableNodes;if(0<U.length){var Q=U.findIndex(function(X){return X===l.mostRecentlyFocusedNode});0<=Q&&(a.isKeyForward(l.recentNavEvent)?Q+1<U.length&&(N=U[Q+1],B=!1):0<=Q-1&&(N=U[Q-1],B=!1))}}else l.containerGroups.some(function(X){return X.tabbableNodes.some(function(R){return 0<pr(R)})})||(B=!1);B&&(N=y({target:l.mostRecentlyFocusedNode,isBackward:a.isKeyBackward(l.recentNavEvent)})),h(N||l.mostRecentlyFocusedNode||f())}l.recentNavEvent=void 0},k=function(F){var L=1<arguments.length&&arguments[1]!==void 0&&arguments[1];l.recentNavEvent=F;var _=y({event:F,isBackward:L});_&&(Oi(F)&&F.preventDefault(),h(_))},C=function(F){(a.isKeyForward(F)||a.isKeyBackward(F))&&k(F,a.isKeyBackward(F))},M=function(F){M8(F)&&pi(a.escapeDeactivates,F)!==!1&&(F.preventDefault(),r.deactivate())},I=function(F){var L=Sa(F);0<=u(L,F)||pi(a.clickOutsideDeactivates,F)||pi(a.allowOutsideClick,F)||(F.preventDefault(),F.stopImmediatePropagation())},D=function(){if(l.active)return jv.activateTrap(i,r),l.delayInitialFocusTimer=a.delayInitialFocus?Ev(function(){h(f())}):h(f()),o.addEventListener("focusin",v,!0),o.addEventListener("mousedown",E,{capture:!0,passive:!1}),o.addEventListener("touchstart",E,{capture:!0,passive:!1}),o.addEventListener("click",I,{capture:!0,passive:!1}),o.addEventListener("keydown",C,{capture:!0,passive:!1}),o.addEventListener("keydown",M),r},z=function(){if(l.active)return o.removeEventListener("focusin",v,!0),o.removeEventListener("mousedown",E,!0),o.removeEventListener("touchstart",E,!0),o.removeEventListener("click",I,!0),o.removeEventListener("keydown",C,!0),o.removeEventListener("keydown",M),r},A=function(F){var L=F.some(function(_){var N=Array.from(_.removedNodes);return N.some(function(B){return B===l.mostRecentlyFocusedNode})});L&&h(f())},J=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(A):void 0,V=function(){J&&(J.disconnect(),l.active&&!l.paused&&l.containers.map(function(F){J.observe(F,{subtree:!0,childList:!0})}))};return r={get active(){return l.active},get paused(){return l.paused},activate:function(F){if(l.active)return this;var L=c(F,"onActivate"),_=c(F,"onPostActivate"),N=c(F,"checkCanFocusTrap");N||g(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=o.activeElement,L==null||L();var B=function(){N&&g(),D(),V(),_==null||_()};return N?(N(l.containers.concat()).then(B,B),this):(B(),this)},deactivate:function(F){if(!l.active)return this;var L=xv({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},F);clearTimeout(l.delayInitialFocusTimer),l.delayInitialFocusTimer=void 0,z(),l.active=!1,l.paused=!1,V(),jv.deactivateTrap(i,r);var _=c(L,"onDeactivate"),N=c(L,"onPostDeactivate"),B=c(L,"checkCanReturnFocus"),H=c(L,"returnFocus","returnFocusOnDeactivate");_==null||_();var U=function(){Ev(function(){H&&h(m(l.nodeFocusedBeforeActivation)),N==null||N()})};return H&&B?(B(m(l.nodeFocusedBeforeActivation)).then(U,U),this):(U(),this)},pause:function(F){if(l.paused||!l.active)return this;var L=c(F,"onPause"),_=c(F,"onPostPause");return l.paused=!0,L==null||L(),z(),V(),_==null||_(),this},unpause:function(F){if(!l.paused||!l.active)return this;var L=c(F,"onUnpause"),_=c(F,"onPostUnpause");return l.paused=!1,L==null||L(),g(),D(),V(),_==null||_(),this},updateContainerElements:function(F){var L=[].concat(F).filter(Boolean);return l.containers=L.map(function(_){return typeof _=="string"?o.querySelector(_):_}),l.active&&g(),V(),this}},r.updateContainerElements(t),r},A8=Object.freeze({__proto__:null,createFocusTrap:L8}),_8=Iw(A8),$8=Iw(C8);function Jo(t){"@babel/helpers - typeof";return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Jo(t)}function z8(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function H8(t,n){for(var r,o=0;o<n.length;o++)r=n[o],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,E2(r.key),r)}function B8(t,n,r){return n&&H8(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function V8(t,n,r){return n=kl(n),W8(t,j2()?Reflect.construct(n,r||[],kl(t).constructor):n.apply(t,r))}function W8(t,n){if(n&&(Jo(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U8(t)}function U8(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j2(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(j2=function(){return!!t})()}function kl(t){return kl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kl(t)}function q8(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Yd(t,n)}function Yd(t,n){return Yd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Yd(t,n)}function Y8(t,n,r){return(n=E2(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function E2(t){var n=K8(t,"string");return Jo(n)=="symbol"?n:n+""}function K8(t,n){if(Jo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n);if(Jo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""}var Ca=S,Ce=j,G8=_8,Q8=G8.createFocusTrap,Z8=$8,J8=Z8.isFocusable,Kd=function(t){function n(r){var o;z8(this,n),o=V8(this,n,[r]),Y8(o,"getNodeForOption",function(l){var c,u=(c=this.internalOptions[l])!==null&&c!==void 0?c:this.originalOptions[l];if(typeof u=="function"){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];u=u.apply(void 0,f)}if(u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(l,"` was specified but was not a node, or did not return a node"))}var b=u;if(typeof u=="string"){var h;if(b=(h=this.getDocument())===null||h===void 0?void 0:h.querySelector(u),!b)throw new Error("`".concat(l,"` as selector refers to no known node"))}return b}),o.handleDeactivate=o.handleDeactivate.bind(o),o.handlePostDeactivate=o.handlePostDeactivate.bind(o),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(o),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=r.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a=="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){o.originalOptions[a]=i[a];continue}o.internalOptions[a]=i[a]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return q8(n,t),B8(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document>"u"?void 0:document)}},{key:"getReturnFocusNode",value:function(){var r=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return r||r!==!1&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var r=this.getDocument();r&&(this.previouslyFocusedElement=r.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(r){var o=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,r):this.originalOptions.clickOutsideDeactivates;return o&&(this.outsideClick={target:r.target,allowDeactivation:o}),o}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var r=this,o=function(){var i=r.getReturnFocusNode(),a=!!(r.originalOptions.returnFocusOnDeactivate&&i!==null&&i!==void 0&&i.focus&&(!r.outsideClick||r.outsideClick.allowDeactivation&&!J8(r.outsideClick.target,r.internalOptions.tabbableOptions))),l=r.internalOptions.preventScroll,c=l!==void 0&&l;a&&i.focus({preventScroll:c}),r.originalOptions.onPostDeactivate&&r.originalOptions.onPostDeactivate.call(null),r.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(o,o):o()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var r=this.focusTrapElements.some(Boolean);r&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(r){if(this.focusTrap){r.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var o=!r.active&&this.props.active,i=r.active&&!this.props.active,a=!r.paused&&this.props.paused,l=r.paused&&!this.props.paused;if(o&&(this.updatePreviousElement(),this.focusTrap.activate()),i)return void this.deactivateTrap();a&&this.focusTrap.pause(),l&&this.focusTrap.unpause()}else r.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var r=this,o=this.props.children?Ca.Children.only(this.props.children):void 0;if(o){if(o.type&&o.type===Ca.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var i=function(l){var c=r.props.containerElements;o&&(typeof o.ref=="function"?o.ref(l):o.ref&&(o.ref.current=l)),r.focusTrapElements=c||[l]},a=Ca.cloneElement(o,{ref:i});return a}return null}}])}(Ca.Component),gi=typeof Element>"u"?Function:Element;Kd.propTypes={active:Ce.bool,paused:Ce.bool,focusTrapOptions:Ce.shape({document:Ce.object,onActivate:Ce.func,onPostActivate:Ce.func,checkCanFocusTrap:Ce.func,onPause:Ce.func,onPostPause:Ce.func,onUnpause:Ce.func,onPostUnpause:Ce.func,onDeactivate:Ce.func,onPostDeactivate:Ce.func,checkCanReturnFocus:Ce.func,initialFocus:Ce.oneOfType([Ce.instanceOf(gi),Ce.string,Ce.bool,Ce.func]),fallbackFocus:Ce.oneOfType([Ce.instanceOf(gi),Ce.string,Ce.func]),escapeDeactivates:Ce.oneOfType([Ce.bool,Ce.func]),clickOutsideDeactivates:Ce.oneOfType([Ce.bool,Ce.func]),returnFocusOnDeactivate:Ce.bool,setReturnFocus:Ce.oneOfType([Ce.instanceOf(gi),Ce.string,Ce.bool,Ce.func]),allowOutsideClick:Ce.oneOfType([Ce.bool,Ce.func]),preventScroll:Ce.bool,tabbableOptions:Ce.shape({displayCheck:Ce.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:Ce.oneOfType([Ce.bool,Ce.func])}),trapStack:Ce.array,isKeyForward:Ce.func,isKeyBackward:Ce.func}),containerElements:Ce.arrayOf(Ce.instanceOf(gi)),children:Ce.oneOfType([Ce.element,Ce.instanceOf(gi)])},Kd.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:Q8};var X8=Kd;Pw(X8);j.string,j.string,j.string,j.oneOf(["small","large"]),j.string,j.string,j.oneOf(tr),j.oneOf(tr),j.bool,j.node,j.element,j.bool,j.bool,j.string,j.func,j.func,j.bool,j.bool,j.oneOfType([j.element,j.string]);j.string,j.bool,j.string,j.node;j.node,j.oneOf(["default","large"]),j.bool,j.bool,j.func,j.string,j.node;j.string,j.any,j.element;j.string,j.any;var eL=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(eL||{}),tL=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(tL||{}),nL=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(nL||{}),rL=(t=>(t[t.OpenListbox=0]="OpenListbox",t[t.CloseListbox=1]="CloseListbox",t[t.GoToOption=2]="GoToOption",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterOption=5]="RegisterOption",t[t.UnregisterOption=6]="UnregisterOption",t[t.RegisterLabel=7]="RegisterLabel",t))(rL||{});function cc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=Zl(n(t.options.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{options:o,activeOptionIndex:i}}let oL={1(t){return t.dataRef.current.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},0(t){if(t.dataRef.current.disabled||t.listboxState===0)return t;let n=t.activeOptionIndex,{isSelected:r}=t.dataRef.current,o=t.options.findIndex(i=>r(i.dataRef.current.value));return o!==-1&&(n=o),{...t,listboxState:0,activeOptionIndex:n}},2(t,n){var r;if(t.dataRef.current.disabled||t.listboxState===1)return t;let o=cc(t),i=pl(n,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeOptionIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{if(t.dataRef.current.disabled||t.listboxState===1)return t;let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeOptionIndex===null?t.options:t.options.slice(t.activeOptionIndex+r).concat(t.options.slice(0,t.activeOptionIndex+r))).find(l=>{var c;return!l.dataRef.current.disabled&&((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))}),a=i?t.options.indexOf(i):-1;return a===-1||a===t.activeOptionIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeOptionIndex:a,activationTrigger:1}},4(t){return t.dataRef.current.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},5:(t,n)=>{let r={id:n.id,dataRef:n.dataRef},o=cc(t,i=>[...i,r]);return t.activeOptionIndex===null&&t.dataRef.current.isSelected(n.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(r)),{...t,...o}},6:(t,n)=>{let r=cc(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}},7:(t,n)=>({...t,labelId:n.id})},jp=p.createContext(null);jp.displayName="ListboxActionsContext";function oa(t){let n=p.useContext(jp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,oa),r}return n}let Ep=p.createContext(null);Ep.displayName="ListboxDataContext";function ia(t){let n=p.useContext(Ep);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ia),r}return n}function iL(t,n){return ot(n.type,oL,t,n)}let aL=p.Fragment;function lL(t,n){let{value:r,defaultValue:o,form:i,name:a,onChange:l,by:c=(T,ie)=>T===ie,disabled:u=!1,horizontal:d=!1,multiple:f=!1,...g}=t;const b=d?"horizontal":"vertical";let h=jt(n),[m=f?[]:void 0,y]=n2(r,l,o),[E,v]=p.useReducer(iL,{dataRef:p.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),k=p.useRef({static:!1,hold:!1}),C=p.useRef(null),M=p.useRef(null),I=p.useRef(null),D=ge(typeof c=="string"?(T,ie)=>{let ye=c;return(T==null?void 0:T[ye])===(ie==null?void 0:ie[ye])}:c),z=p.useCallback(T=>ot(A.mode,{1:()=>m.some(ie=>D(ie,T)),0:()=>D(m,T)}),[m]),A=p.useMemo(()=>({...E,value:m,disabled:u,mode:f?1:0,orientation:b,compare:D,isSelected:z,optionsPropsRef:k,labelRef:C,buttonRef:M,optionsRef:I}),[m,u,f,E]);Qe(()=>{E.dataRef.current=A},[A]),np([A.buttonRef,A.optionsRef],(T,ie)=>{var ye;v({type:1}),Ql(ie,Gl.Loose)||(T.preventDefault(),(ye=A.buttonRef.current)==null||ye.focus())},A.listboxState===0);let J=p.useMemo(()=>({open:A.listboxState===0,disabled:u,value:m}),[A,u,m]),V=ge(T=>{let ie=A.options.find(ye=>ye.id===T);ie&&U(ie.dataRef.current.value)}),F=ge(()=>{if(A.activeOptionIndex!==null){let{dataRef:T,id:ie}=A.options[A.activeOptionIndex];U(T.current.value),v({type:2,focus:Le.Specific,id:ie})}}),L=ge(()=>v({type:0})),_=ge(()=>v({type:1})),N=ge((T,ie,ye)=>T===Le.Specific?v({type:2,focus:Le.Specific,id:ie,trigger:ye}):v({type:2,focus:T,trigger:ye})),B=ge((T,ie)=>(v({type:5,id:T,dataRef:ie}),()=>v({type:6,id:T}))),H=ge(T=>(v({type:7,id:T}),()=>v({type:7,id:null}))),U=ge(T=>ot(A.mode,{0(){return y==null?void 0:y(T)},1(){let ie=A.value.slice(),ye=ie.findIndex(Pe=>D(Pe,T));return ye===-1?ie.push(T):ie.splice(ye,1),y==null?void 0:y(ie)}})),Q=ge(T=>v({type:3,value:T})),X=ge(()=>v({type:4})),R=p.useMemo(()=>({onChange:U,registerOption:B,registerLabel:H,goToOption:N,closeListbox:_,openListbox:L,selectActiveOption:F,selectOption:V,search:Q,clearSearch:X}),[]),ae=p.useRef(null),se=En();return p.useEffect(()=>{ae.current&&o!==void 0&&se.addEventListener(ae.current,"reset",()=>{y==null||y(o)})},[ae,y]),S.createElement(jp.Provider,{value:R},S.createElement(Ep.Provider,{value:A},S.createElement(Xl,{value:ot(A.listboxState,{0:dt.Open,1:dt.Closed})},a!=null&&m!=null&&vp({[a]:m}).map((T,ie)=>{let[ye,Pe]=T;return S.createElement(r2,{features:bp.Hidden,ref:ie===0?$e=>{var oe;ae.current=(oe=$e==null?void 0:$e.closest("form"))==null?null:oe}:void 0,...fl({key:ye,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:u,name:ye,value:Pe})})}),mt({ourProps:{ref:h},theirProps:g,slot:J,defaultTag:aL,name:"Listbox"}))))}let sL="button";function cL(t,n){var r;let o=un(),{id:i=`headlessui-listbox-button-${o}`,...a}=t,l=ia("Listbox.Button"),c=oa("Listbox.Button"),u=jt(l.buttonRef,n),d=En(),f=ge(E=>{switch(E.key){case Me.Space:case Me.Enter:case Me.ArrowDown:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Le.First)});break;case Me.ArrowUp:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Le.Last)})}}),g=ge(E=>{switch(E.key){case Me.Space:E.preventDefault()}}),b=ge(E=>ap(E.currentTarget)?E.preventDefault():void(l.listboxState===0?(c.closeListbox(),d.nextFrame(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})})):(E.preventDefault(),c.openListbox()))),h=na(()=>{if(l.labelId)return[l.labelId,i].join(" ")},[l.labelId,i]),m=p.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled,value:l.value}),[l]),y={ref:u,id:i,type:rp(t,l.buttonRef),"aria-haspopup":"listbox","aria-controls":(r=l.optionsRef.current)==null?void 0:r.id,"aria-expanded":l.listboxState===0,"aria-labelledby":h,disabled:l.disabled,onKeyDown:f,onKeyUp:g,onClick:b};return mt({ourProps:y,theirProps:a,slot:m,defaultTag:sL,name:"Listbox.Button"})}let uL="label";function dL(t,n){let r=un(),{id:o=`headlessui-listbox-label-${r}`,...i}=t,a=ia("Listbox.Label"),l=oa("Listbox.Label"),c=jt(a.labelRef,n);Qe(()=>l.registerLabel(o),[o]);let u=ge(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return mt({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:uL,name:"Listbox.Label"})}let fL="ul",pL=Sr.RenderStrategy|Sr.Static;function gL(t,n){var r;let o=un(),{id:i=`headlessui-listbox-options-${o}`,...a}=t,l=ia("Listbox.Options"),c=oa("Listbox.Options"),u=jt(l.optionsRef,n),d=En(),f=En(),g=ea(),b=g===null?l.listboxState===0:(g&dt.Open)===dt.Open;p.useEffect(()=>{var v;let k=l.optionsRef.current;k&&l.listboxState===0&&k!==((v=Xi(k))==null?void 0:v.activeElement)&&k.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let h=ge(v=>{switch(f.dispose(),v.key){case Me.Space:if(l.searchQuery!=="")return v.preventDefault(),v.stopPropagation(),c.search(v.key);case Me.Enter:if(v.preventDefault(),v.stopPropagation(),l.activeOptionIndex!==null){let{dataRef:k}=l.options[l.activeOptionIndex];c.onChange(k.current.value)}l.mode===0&&(c.closeListbox(),Vt().nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}));break;case ot(l.orientation,{vertical:Me.ArrowDown,horizontal:Me.ArrowRight}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.Next);case ot(l.orientation,{vertical:Me.ArrowUp,horizontal:Me.ArrowLeft}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.Previous);case Me.Home:case Me.PageUp:return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.First);case Me.End:case Me.PageDown:return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.Last);case Me.Escape:return v.preventDefault(),v.stopPropagation(),c.closeListbox(),d.nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})});case Me.Tab:v.preventDefault(),v.stopPropagation();break;default:v.key.length===1&&(c.search(v.key),f.setTimeout(()=>c.clearSearch(),350))}}),m=na(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.id},[l.buttonRef.current]),y=p.useMemo(()=>({open:l.listboxState===0}),[l]),E={"aria-activedescendant":l.activeOptionIndex===null||(r=l.options[l.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":l.mode===1||void 0,"aria-labelledby":m,"aria-orientation":l.orientation,id:i,onKeyDown:h,role:"listbox",tabIndex:0,ref:u};return mt({ourProps:E,theirProps:a,slot:y,defaultTag:fL,features:pL,visible:b,name:"Listbox.Options"})}let hL="li";function mL(t,n){let r=un(),{id:o=`headlessui-listbox-option-${r}`,disabled:i=!1,value:a,...l}=t,c=ia("Listbox.Option"),u=oa("Listbox.Option"),d=c.activeOptionIndex!==null&&c.options[c.activeOptionIndex].id===o,f=c.isSelected(a),g=p.useRef(null),b=c2(g),h=yn({disabled:i,value:a,domRef:g,get textValue(){return b()}}),m=jt(n,g);Qe(()=>{if(c.listboxState===0&&d&&c.activationTrigger!==0){let D=Vt();return D.requestAnimationFrame(()=>{var z,A;(A=(z=g.current)==null?void 0:z.scrollIntoView)==null||A.call(z,{block:"nearest"})}),D.dispose}},[g,d,c.listboxState,c.activationTrigger,c.activeOptionIndex]),Qe(()=>u.registerOption(o,h),[h,o]);let y=ge(D=>i?D.preventDefault():(u.onChange(a),void(c.mode===0&&(u.closeListbox(),Vt().nextFrame(()=>{var z;return(z=c.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}))))),E=ge(()=>i?u.goToOption(Le.Nothing):void u.goToOption(Le.Specific,o)),v=op(),k=ge(D=>v.update(D)),C=ge(D=>{v.wasMoved(D)&&(i||d||u.goToOption(Le.Specific,o,0))}),M=ge(D=>{v.wasMoved(D)&&(i||d&&u.goToOption(Le.Nothing))}),I=p.useMemo(()=>({active:d,selected:f,disabled:i}),[d,f,i]);return mt({ourProps:{id:o,ref:m,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,"aria-selected":f,disabled:void 0,onClick:y,onFocus:E,onPointerEnter:k,onMouseEnter:k,onPointerMove:C,onMouseMove:C,onPointerLeave:M,onMouseLeave:M},theirProps:l,slot:I,defaultTag:hL,name:"Listbox.Option"})}let bL=pt(lL),vL=pt(cL),yL=pt(dL),wL=pt(gL),xL=pt(mL);Object.assign(bL,{Button:vL,Label:yL,Options:wL,Option:xL});p.createContext();j.string,j.node,j.string,j.string,j.bool,j.bool,j.node,j.node,j.string,j.bool,j.string,j.bool,j.bool,j.string,j.func,j.func,j.string,j.bool,j.node,j.bool,j.bool,j.string,j.oneOf(["default","primary","primary-danger","subdued"]),j.oneOf(["full","auto"]),j.string;j.string,j.string,j.bool,j.string,j.string;j.oneOf(["","number","select","input"]),j.number,j.number,j.bool,j.bool,j.func,j.func,j.func,j.func,j.string;p.createContext({});const jL=`
  jn-h-px 
  jn-w-full
  jn-bg-theme-background-lvl-3
`,Ov=S.forwardRef((t,n)=>{let{className:r="",...o}=t;return S.createElement("div",xe({className:`juno-select-divider ${jL} ${r}`,ref:n},o))});Ov.displayName="SelectDivider",Ov.propTypes={className:j.string};j.string,j.string,j.string,j.string,j.node,j.bool,j.string,j.bool,j.bool,j.string,j.node,j.bool,j.string,j.oneOf(["default","primary","primary-danger","subdued"]),j.func,j.func,j.func,j.string,j.bool,j.bool,j.bool,j.string;p.createContext(void 0);j.string,j.string,j.string,j.bool,j.oneOf(["small","default","large"]),j.bool,j.bool,j.bool,j.bool,j.node,j.node,j.node,j.string,j.func,j.func,j.string;j.string,j.string,j.string,j.bool,j.bool,j.node,j.bool,j.bool,j.string,j.bool,j.string,j.string,j.func,j.func;p.createContext(void 0);j.string,j.string,j.oneOfType([j.string,j.number]),j.string,j.string,j.bool,j.bool,j.bool,j.bool,j.bool,j.bool,j.string,j.string,j.func,j.func,j.func,j.node,j.node,j.node,j.oneOf(["full","auto"]),j.string;j.string,j.string,j.string,j.string,j.node,j.string,j.bool,j.bool,j.string,j.bool,j.string,j.string,j.bool,j.func;j.oneOf(["text","password","email","tel","url","number"]),j.string,j.string,j.string,j.string,j.string,j.node,j.bool,j.bool,j.string,j.bool,j.string,j.bool,j.string,j.bool,j.func,j.func,j.func;j.string,j.bool,j.string,j.string,j.func;function Gd(t){return p.useMemo(()=>t.every(n=>n==null)?null:n=>{t.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})},t)}p.createContext(null);p.createContext(null);var EL=S.createContext(null),k2=function(){var t=S.useContext(EL);if(t==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},kL=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`,OL=`
    jn-mx-4
    jn-max-w-full
`,SL=`
    jn-shrink-0
`,CL=function(t){return t==="error"?"dangerous":t};S.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=Dr(t,["className","children"]),c=k2(),u=Gd([c.refs.setFloating,n]),d=c.variant;return S.createElement(S.Fragment,null,c.open&&S.createElement("div",ve({className:"juno-tooltip juno-tooltip-".concat(d," ").concat(kL," ").concat(o),ref:u,style:ve({},c.floatingStyles)},c.getFloatingProps(l)),d&&S.createElement(kx,{icon:CL(d),color:"jn-text-theme-".concat(d),className:"juno-tooltip-popover-icon ".concat(SL)}),S.createElement("p",{className:"".concat(OL)},a)))});S.forwardRef(function(t,n){var r=t.children,o=r===void 0?null:r,i=t.asChild,a=t.className,l=a===void 0?"":a,c=Dr(t,["children","asChild","className"]),u=k2(),d=Gd([u.refs.setReference,n]);if(i!==void 0&&i&&S.isValidElement(o)){var f=o.props,g=f.ref,b=Gd([u.refs.setReference,n,g]),h=ve(ve(ve({ref:b},c),f),{"data-state":u.open?"open":"closed",className:f.className+"".concat(u.disabled&&" jn-cursor-default")}),m=u.getReferenceProps(h);return S.cloneElement(o,m)}return S.createElement("button",ve({ref:d,"data-state":u.open?"open":"closed"},u.getReferenceProps(c),{className:"".concat(l," ").concat(u.disabled&&" jn-cursor-default")}),o)});const PL=t=>t==="info"||t==="success",IL=({className:t})=>{const n=GT(),{removeMessage:r}=Sw(),o=i=>{r(i)};return S.createElement(S.Fragment,null,n&&n.length>0&&S.createElement("div",{role:"group",className:`juno-message-provider ${t||""}`},n.map((i,a)=>{const{id:l,variant:c,text:u,...d}=i;return S.createElement(p2,{role:"alert",key:l,className:a>0?"mt-4":"",variant:c,dismissible:!0,autoDismiss:PL(c),onDismiss:()=>o(l),...d},u)})))},uc={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},Qd=new Map,Pa=t=>{const n=Qd.get(t);return n?Object.fromEntries(Object.entries(n.stores).map(([r,o])=>[r,o.getState()])):{}},DL=(t,n,r)=>{if(t===void 0)return{type:"untracked",connection:n.connect(r)};const o=Qd.get(r.name);if(o)return{type:"tracked",store:t,...o};const i={connection:n.connect(r),stores:{}};return Qd.set(r.name,i),{type:"tracked",store:t,...i}},TL=(t,n={})=>(r,o,i)=>{const{enabled:a,anonymousActionType:l,store:c,...u}=n;let d;try{d=(a??(uc?"static":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!d)return(uc?"static":void 0)!=="production"&&a&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),t(r,o,i);const{connection:f,...g}=DL(c,d,u);let b=!0;i.setState=(y,E,v)=>{const k=r(y,E);if(!b)return k;const C=v===void 0?{type:l||"anonymous"}:typeof v=="string"?{type:v}:v;return c===void 0?(f==null||f.send(C,o()),k):(f==null||f.send({...C,type:`${c}/${C.type}`},{...Pa(u.name),[c]:i.getState()}),k)};const h=(...y)=>{const E=b;b=!1,r(...y),b=E},m=t(i.setState,o,i);if(g.type==="untracked"?f==null||f.init(m):(g.stores[g.store]=i,f==null||f.init(Object.fromEntries(Object.entries(g.stores).map(([y,E])=>[y,y===g.store?m:E.getState()])))),i.dispatchFromDevtools&&typeof i.dispatch=="function"){let y=!1;const E=i.dispatch;i.dispatch=(...v)=>{(uc?"static":void 0)!=="production"&&v[0].type==="__setState"&&!y&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),y=!0),E(...v)}}return f.subscribe(y=>{var E;switch(y.type){case"ACTION":if(typeof y.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return dc(y.payload,v=>{if(v.type==="__setState"){if(c===void 0){h(v.state);return}Object.keys(v.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const k=v.state[c];if(k==null)return;JSON.stringify(i.getState())!==JSON.stringify(k)&&h(k);return}i.dispatchFromDevtools&&typeof i.dispatch=="function"&&i.dispatch(v)});case"DISPATCH":switch(y.payload.type){case"RESET":return h(m),c===void 0?f==null?void 0:f.init(i.getState()):f==null?void 0:f.init(Pa(u.name));case"COMMIT":if(c===void 0){f==null||f.init(i.getState());return}return f==null?void 0:f.init(Pa(u.name));case"ROLLBACK":return dc(y.state,v=>{if(c===void 0){h(v),f==null||f.init(i.getState());return}h(v[c]),f==null||f.init(Pa(u.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return dc(y.state,v=>{if(c===void 0){h(v);return}JSON.stringify(i.getState())!==JSON.stringify(v[c])&&h(v[c])});case"IMPORT_STATE":{const{nextLiftedState:v}=y.payload,k=(E=v.computedStates.slice(-1)[0])==null?void 0:E.state;if(!k)return;h(c===void 0?k:k[c]),f==null||f.send(null,v);return}case"PAUSE_RECORDING":return b=!b}return}}),m},ML=TL,dc=(t,n)=>{let r;try{r=JSON.parse(t)}catch(o){console.error("[zustand devtools middleware] Could not parse the received json",o)}r!==void 0&&n(r)},Sv=t=>{if(!t||typeof t=="object"&&Object.keys(t).length===0)return"An error occurred. There is no further information";let n=JSON.stringify(t);if(t!=null&&t.message){n=t==null?void 0:t.message;try{const r=JSON.parse(t==null?void 0:t.message);r.error&&(n=r.error),r.msg&&(n=r.msg)}catch(r){console.error(r)}}return n},Xo=t=>t&&t.replace(/([A-Z])/g,n=>" "+n.toLowerCase()).replace(/_/g," ");function RL(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}const Zd="cluster",Jd="violationGroup",Xd="check",vi="unknown",NL=t=>{if(!t)return[];const n=Object.keys(t).reduce((r,o)=>{const i=t[o];return Object.keys(i).forEach(a=>{const l=i[a];r[a]=r[a]||{key:`${Zd}:${a}`,id:a,type:Zd,label:Xo(a),values:[]},r[a].values.indexOf(l)<0&&r[a].values.push(l)}),r},{});return Object.values(n)},FL=(t,n={showDebugSeverities:!1})=>{if(!t)return[];const r=[];t.forEach(i=>i.constraints.forEach(a=>r.push(a)));const o=r.reduce((i,a)=>{var l,c;if((l=a==null?void 0:a.metadata)!=null&&l.severity){const u=a.metadata.severity;i.severity=i.severity||{key:`${Jd}:severity`,id:"severity",type:Jd,label:"severity",values:[]},i.severity.values.indexOf(u)<0&&(n!=null&&n.showDebugSeverities||u!=="debug")&&i.severity.values.push(u)}return(c=a==null?void 0:a.violation_groups)==null||c.forEach(u=>{var d;(d=u==null?void 0:u.pattern)!=null&&d.object_identity&&Object.keys(u.pattern.object_identity).forEach(f=>{const g=u.pattern.object_identity[f];i[f]=i[f]||{key:`${Xd}:${f}`,id:f,type:Xd,label:Xo(f),values:[]},i[f].values.indexOf(g)<0&&i[f].values.push(g)})}),Object.keys(i).forEach(u=>{i[u].values.sort()}),i},{});return Object.values(o)},LL=({violationGroups:t,clusterIdentities:n,activeFilters:r,searchTerm:o,showDebugSeverities:i})=>{let a=t;if(i||(a=a==null?void 0:a.filter(l=>{var c,u;return l.constraints=(c=l.constraints)==null?void 0:c.filter(d=>{var f;return((f=d.metadata)==null?void 0:f.severity)!=="debug"}),((u=l.constraints)==null?void 0:u.length)>0})),t&&(r==null?void 0:r.length)>0){a=[];const l={},c={},u={};r.forEach(d=>{var b;const[f,g]=(b=d.key)==null?void 0:b.split(":");f===Jd&&g==="severity"?(l[g]=l[g]||[],l[g].push(d.value)):f===Xd?(c[g]=c[g]||[],c[g].push(d.value)):f===Zd&&(u[g]=u[g]||[],u[g].push(d.value))}),t.forEach(d=>{var g,b;const f=JSON.parse(JSON.stringify(d));f.constraints=(g=f.constraints)==null?void 0:g.filter(h=>{var y,E,v,k;let m=!0;if(Object.keys(c).length>0&&(h.violation_groups=(y=h.violation_groups)==null?void 0:y.filter(C=>Object.keys(c).reduce((M,I)=>{var D,z;return M&&((D=C.pattern)==null?void 0:D.object_identity)&&((z=c[I])==null?void 0:z.includes(C.pattern.object_identity[I]))},!0)),m=m&&((E=h.violation_groups)==null?void 0:E.length)>0),Object.keys(u).length>0){const C=n==null?void 0:n.filter(M=>Object.keys(u).reduce((I,D)=>I&&u[D].includes(M[D]),!0)).map(M=>M.cluster);h.violation_groups=(v=h.violation_groups)==null?void 0:v.filter(M=>(M.instances=M.instances.filter(I=>C.includes(I.cluster)),M.instances.length>0)),m=m&&((k=h.violation_groups)==null?void 0:k.length)>0}return Object.keys(l).length>0&&(m=m&&Object.values(l).reduce((C,M)=>{var I;return C&&M.includes((I=h.metadata)==null?void 0:I.severity)},!0)),m}),((b=f.constraints)==null?void 0:b.length)>0&&a.push(f)})}return o&&a&&(a=a.filter(l=>{var u;const c=l.constraints=(u=l.constraints)==null?void 0:u.filter(d=>{const{violation_groups:f,...g}=d,b=JSON.stringify(g).toLowerCase().includes(o.toLowerCase()),h=f.filter(m=>JSON.stringify(m).toLowerCase().includes(o.toLowerCase()));return d.violation_groups=h,b||h.length>0});return l.constraints=c,c.length>0})),a},AL=({items:t,severityWeights:n})=>t?t.map(r=>{var o;return r.violationCount=0,r.severities=[],(o=r.constraints)==null||o.forEach(i=>{var a,l,c;r.violationCount+=((a=i.violation_groups)==null?void 0:a.length)||0,r.severities.indexOf((l=i==null?void 0:i.metadata)==null?void 0:l.severity)<0&&r.severities.push((c=i==null?void 0:i.metadata)==null?void 0:c.severity)}),r.severities=r.severities.sort((i,a)=>(n.indexOf(i)||100)-(n.indexOf(a)||100)),r}).sort((r,o)=>(n[r.severities[0]]||100)-(n[o.severities[0]]||100)):[],_L=(t,n)=>({data:{severityWeights:{error:1,warning:2,info:3,debug:4},showDebugSeverities:!0,loaded:!1,clusterIdentities:null,violationGroups:null,filterEntries:[],filteredItems:{},detailsViolationGroupKind:null,detailsViolationGroup:null,actions:{setShowDebugSeverities:r=>{t(o=>({data:{...o.data,showDebugSeverities:r}}))},setData:r=>{if(!r)return;let o=[];r.cluster_identities&&(o=Object.keys(r.cluster_identities).map(i=>({cluster:i,...r.cluster_identities[i]}))),t(i=>({data:{...i.data,loaded:!0,clusterIdentities:o,violationGroups:r.templates||[],filterEntries:[...NL(r.cluster_identities),...FL(r.templates,{showDebugSeverities:i.data.showDebugSeverities})]}}),!1,"data/setData"),n().filters.actions.ensureFilterType(),n().data.actions.filterItems()},filterItems:()=>{const r=n().data.violationGroups,o=n().data.clusterIdentities,i=n().filters.active||[],a=n().filters.searchTerm,l=n().data.severityWeights;let c=LL({violationGroups:r,clusterIdentities:o,activeFilters:i,searchTerm:a,showDebugSeverities:n().data.showDebugSeverities});c=AL({items:c,severityWeights:l}),t(u=>({data:{...u.data,filteredItems:c}}),!1,"data/filterItems"),n().data.actions.setDetailsViolationGroup()},setDetailsViolationGroupKind:r=>{t(o=>({data:{...o.data,detailsViolationGroupKind:r}}),!1,"data.setDetailsViolationGroup"),n().data.actions.setDetailsViolationGroup()},setDetailsViolationGroup:()=>{var i;const r=n().data.detailsViolationGroupKind;if(!r)return;const o=(i=n().data.filteredItems)==null?void 0:i.find(a=>a.kind===r);n().data.detailsViolationGroup&&o&&JSON.stringify(n().data.detailsViolationGroup)===JSON.stringify(o)||t(a=>({data:{...a.data,detailsViolationGroup:o}}),!1,"data.setDetailsViolationGroup")}}}}),$L=t=>{if(!(typeof t!="object"||!Object.keys(t).length))return Object.keys(t).map(n=>{if(Array.isArray(t[n]))return t[n].map(r=>({key:`${vi}:${n}`,id:n,type:vi,label:Xo(n),value:r}));if(typeof t[n]=="string")return{key:`${vi}:${n}`,id:n,type:vi,label:Xo(n),value:t[n]}}).flat()},zL=(t,n,r)=>({filters:{searchTerm:null,active:$L(r==null?void 0:r.initialFilters),actions:{ensureFilterType:()=>{var i;let o=(i=n().filters.active)==null?void 0:i.map(a=>{if(a.type===vi){let l=n().data.filterEntries.find(c=>c.id===a.id);l&&(a.type=l.type,a.key=l.type+":"+a.id)}return a});t(a=>({filters:{...a.filters,active:o}}),!1,"filters.ensureFilterType")},set:o=>{Array.isArray(o)&&(t(i=>({filters:{...i.filters,active:o}}),!1,"filters.set"),n().data.actions.filterItems())},add:(o,i)=>{t(a=>{var u;let l=((u=a.filters.active)==null?void 0:u.slice())||[];return l.findIndex(d=>d.key===o&&d.value===i)<0&&l.push({key:o,value:i}),{filters:{...a.filters,active:l}}},!1,"filters.add"),n().data.actions.filterItems()},remove:(o,i)=>{t(a=>{var u;let l=((u=a.filters.active)==null?void 0:u.slice())||[],c=l.findIndex(d=>d.key===o&&d.value===i);return c>=0&&l.splice(c,1),{filters:{...a.filters,active:l}}},!1,"filters.remove"),n().data.actions.filterItems()},removeAll:()=>{t(o=>({filters:{...o.filters,active:[]}}),!1,"filters.remove"),n().data.actions.filterItems()},setSearchTerm:o=>{t(i=>({filters:{...i.filters,searchTerm:o}})),n().data.actions.filterItems()}}}}),HL=t=>({userActivity:{isActive:!0,actions:{setIsActive:n=>{t(r=>({userActivity:{...r.userActivity,isActive:n}}),!1,"userActivity.setIsActive")}}}}),BL=t=>({globals:{endpoint:"",isMock:!1,actions:{setEndpoint:n=>t(r=>({globals:{...r.globals,endpoint:n}}),!1,"globals/setEndpoint"),setMock:n=>t(r=>({globals:{...r.globals,isMock:n}}),!1,"globals/setMock")}}}),VL=t=>vw(ML((n,r)=>({...HL(n),...zL(n,r,t),..._L(n,r),...BL(n)}))),O2=p.createContext(),WL=({options:t,children:n})=>G.jsx(O2.Provider,{value:VL(t),children:n}),dn=t=>Ew(p.useContext(O2),t),UL=()=>dn(t=>t.globals.isMock),qL=()=>dn(t=>t.globals.endpoint),YL=()=>dn(t=>t.globals.actions),KL=()=>dn(t=>t.data.loaded),kp=()=>dn(t=>t.data.detailsViolationGroupKind),GL=()=>dn(t=>t.data.detailsViolationGroup),QL=()=>dn(t=>t.data.filterEntries),ZL=()=>dn(t=>t.data.filteredItems),ls=()=>dn(t=>t.data.actions),Op=()=>dn(t=>t.filters.active),Sp=()=>dn(t=>t.filters.searchTerm),ss=()=>dn(t=>t.filters.actions),JL=()=>G.jsx(WP,{children:G.jsxs("p",{children:["To perform automatic validations on Kubernetes objects, we run a deployment of"," ",G.jsxs("a",{href:"https://github.com/open-policy-agent/gatekeeper",target:"_blank",rel:"noreferrer",children:["OPA Gatekeeper"," "]})," ","in each cluster. This dashboard aggregates all policy violations reported by those Gatekeeper instances. ",G.jsx("br",{}),G.jsx("br",{}),G.jsx("b",{children:"Where are checks defined? How can I add or modify them? "}),G.jsx("br",{}),"Follow the links in the section headers to the source code. For how to write constraints and their templates, check out"," ",G.jsx("a",{href:"https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",target:"_blank",rel:"noreferrer",children:"this guide from the Gatekeeper documentation."}),G.jsx("br",{}),G.jsx("br",{}),G.jsx("b",{children:"Did we improve over time? "}),G.jsx("br",{}),"To see historical trends, check out the"," ",G.jsx("a",{href:"https://plutono.global.cloud.sap/d/doop-overview/doop-overview?orgId=1",target:"_blank",rel:"noreferrer",children:"Plutono dashboard."})]})}),S2=({text:t,className:n})=>G.jsxs(Ln,{alignment:"center",className:n,children:[G.jsx(DD,{variant:"primary"}),t?G.jsx("span",{children:t}):G.jsx("span",{children:"Loading..."})]});var aa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ei=typeof window>"u"||"Deno"in globalThis;function an(){}function XL(t,n){return typeof t=="function"?t(n):t}function ef(t){return typeof t=="number"&&t>=0&&t!==1/0}function C2(t,n){return Math.max(t+(n||0)-Date.now(),0)}function Cv(t,n){const{type:r="all",exact:o,fetchStatus:i,predicate:a,queryKey:l,stale:c}=t;if(l){if(o){if(n.queryHash!==Cp(l,n.options))return!1}else if(!$i(n.queryKey,l))return!1}if(r!=="all"){const u=n.isActive();if(r==="active"&&!u||r==="inactive"&&u)return!1}return!(typeof c=="boolean"&&n.isStale()!==c||i&&i!==n.state.fetchStatus||a&&!a(n))}function Pv(t,n){const{exact:r,status:o,predicate:i,mutationKey:a}=t;if(a){if(!n.options.mutationKey)return!1;if(r){if(_i(n.options.mutationKey)!==_i(a))return!1}else if(!$i(n.options.mutationKey,a))return!1}return!(o&&n.state.status!==o||i&&!i(n))}function Cp(t,n){return((n==null?void 0:n.queryKeyHashFn)||_i)(t)}function _i(t){return JSON.stringify(t,(n,r)=>nf(r)?Object.keys(r).sort().reduce((o,i)=>(o[i]=r[i],o),{}):r)}function $i(t,n){return t===n?!0:typeof t!=typeof n?!1:t&&n&&typeof t=="object"&&typeof n=="object"?!Object.keys(n).some(r=>!$i(t[r],n[r])):!1}function P2(t,n){if(t===n)return t;const r=Iv(t)&&Iv(n);if(r||nf(t)&&nf(n)){const o=r?t:Object.keys(t),i=o.length,a=r?n:Object.keys(n),l=a.length,c=r?[]:{};let u=0;for(let d=0;d<l;d++){const f=r?d:a[d];(!r&&o.includes(f)||r)&&t[f]===void 0&&n[f]===void 0?(c[f]=void 0,u++):(c[f]=P2(t[f],n[f]),c[f]===t[f]&&t[f]!==void 0&&u++)}return i===l&&u===i?t:c}return n}function tf(t,n){if(!n||Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}function Iv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function nf(t){if(!Dv(t))return!1;const n=t.constructor;if(n===void 0)return!0;const r=n.prototype;return!(!Dv(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Dv(t){return Object.prototype.toString.call(t)==="[object Object]"}function eA(t){return new Promise(n=>{setTimeout(n,t)})}function rf(t,n,r){return typeof r.structuralSharing=="function"?r.structuralSharing(t,n):r.structuralSharing!==!1?P2(t,n):n}function tA(t,n,r=0){const o=[...t,n];return r&&o.length>r?o.slice(1):o}function nA(t,n,r=0){const o=[n,...t];return r&&o.length>r?o.slice(0,-1):o}var Pp=Symbol(),qr,gr,To,F0,rA=(F0=class extends aa{constructor(){super();Re(this,qr);Re(this,gr);Re(this,To);we(this,To,n=>{if(!ei&&window.addEventListener){const r=()=>n();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){W(this,gr)||this.setEventListener(W(this,To))}onUnsubscribe(){var n;this.hasListeners()||((n=W(this,gr))==null||n.call(this),we(this,gr,void 0))}setEventListener(n){var r;we(this,To,n),(r=W(this,gr))==null||r.call(this),we(this,gr,n(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(n){W(this,qr)!==n&&(we(this,qr,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(r=>{r(n)})}isFocused(){var n;return typeof W(this,qr)=="boolean"?W(this,qr):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},qr=new WeakMap,gr=new WeakMap,To=new WeakMap,F0),Ip=new rA,Mo,hr,Ro,L0,oA=(L0=class extends aa{constructor(){super();Re(this,Mo,!0);Re(this,hr);Re(this,Ro);we(this,Ro,n=>{if(!ei&&window.addEventListener){const r=()=>n(!0),o=()=>n(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}}})}onSubscribe(){W(this,hr)||this.setEventListener(W(this,Ro))}onUnsubscribe(){var n;this.hasListeners()||((n=W(this,hr))==null||n.call(this),we(this,hr,void 0))}setEventListener(n){var r;we(this,Ro,n),(r=W(this,hr))==null||r.call(this),we(this,hr,n(this.setOnline.bind(this)))}setOnline(n){W(this,Mo)!==n&&(we(this,Mo,n),this.listeners.forEach(o=>{o(n)}))}isOnline(){return W(this,Mo)}},Mo=new WeakMap,hr=new WeakMap,Ro=new WeakMap,L0),Ol=new oA;function iA(t){return Math.min(1e3*2**t,3e4)}function I2(t){return(t??"online")==="online"?Ol.isOnline():!0}var D2=class{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function fc(t){return t instanceof D2}function T2(t){let n=!1,r=0,o=!1,i,a,l;const c=new Promise((v,k)=>{a=v,l=k}),u=v=>{var k;o||(m(new D2(v)),(k=t.abort)==null||k.call(t))},d=()=>{n=!0},f=()=>{n=!1},g=()=>Ip.isFocused()&&(t.networkMode==="always"||Ol.isOnline())&&t.canRun(),b=()=>I2(t.networkMode)&&t.canRun(),h=v=>{var k;o||(o=!0,(k=t.onSuccess)==null||k.call(t,v),i==null||i(),a(v))},m=v=>{var k;o||(o=!0,(k=t.onError)==null||k.call(t,v),i==null||i(),l(v))},y=()=>new Promise(v=>{var k;i=C=>{(o||g())&&v(C)},(k=t.onPause)==null||k.call(t)}).then(()=>{var v;i=void 0,o||(v=t.onContinue)==null||v.call(t)}),E=()=>{if(o)return;let v;try{v=t.fn()}catch(k){v=Promise.reject(k)}Promise.resolve(v).then(h).catch(k=>{var z;if(o)return;const C=t.retry??(ei?0:3),M=t.retryDelay??iA,I=typeof M=="function"?M(r,k):M,D=C===!0||typeof C=="number"&&r<C||typeof C=="function"&&C(r,k);if(n||!D){m(k);return}r++,(z=t.onFail)==null||z.call(t,r,k),eA(I).then(()=>g()?void 0:y()).then(()=>{n?m(k):E()})})};return{promise:c,cancel:u,continue:()=>(i==null||i(),c),cancelRetry:d,continueRetry:f,canStart:b,start:()=>(b()?E():y().then(E),c)}}function aA(){let t=[],n=0,r=b=>{b()},o=b=>{b()},i=b=>setTimeout(b,0);const a=b=>{i=b},l=b=>{let h;n++;try{h=b()}finally{n--,n||d()}return h},c=b=>{n?t.push(b):i(()=>{r(b)})},u=b=>(...h)=>{c(()=>{b(...h)})},d=()=>{const b=t;t=[],b.length&&i(()=>{o(()=>{b.forEach(h=>{r(h)})})})};return{batch:l,batchCalls:u,schedule:c,setNotifyFunction:b=>{r=b},setBatchNotifyFunction:b=>{o=b},setScheduler:a}}var kt=aA(),Yr,A0,M2=(A0=class{constructor(){Re(this,Yr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ef(this.gcTime)&&we(this,Yr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ei?1/0:5*60*1e3))}clearGcTimeout(){W(this,Yr)&&(clearTimeout(W(this,Yr)),we(this,Yr,void 0))}},Yr=new WeakMap,A0),No,Fo,on,Rt,Hi,Kr,mn,Zn,_0,lA=(_0=class extends M2{constructor(n){super();Re(this,mn);Re(this,No);Re(this,Fo);Re(this,on);Re(this,Rt);Re(this,Hi);Re(this,Kr);we(this,Kr,!1),we(this,Hi,n.defaultOptions),this.setOptions(n.options),this.observers=[],we(this,on,n.cache),this.queryKey=n.queryKey,this.queryHash=n.queryHash,we(this,No,n.state||sA(this.options)),this.state=W(this,No),this.scheduleGc()}get meta(){return this.options.meta}setOptions(n){this.options={...W(this,Hi),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&W(this,on).remove(this)}setData(n,r){const o=rf(this.state.data,n,this.options);return _e(this,mn,Zn).call(this,{data:o,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),o}setState(n,r){_e(this,mn,Zn).call(this,{type:"setState",state:n,setStateOptions:r})}cancel(n){var o,i;const r=(o=W(this,Rt))==null?void 0:o.promise;return(i=W(this,Rt))==null||i.cancel(n),r?r.then(an).catch(an):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(W(this,No))}isActive(){return this.observers.some(n=>n.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(n=0){return this.state.isInvalidated||this.state.data===void 0||!C2(this.state.dataUpdatedAt,n)}onFocus(){var r;const n=this.observers.find(o=>o.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(r=W(this,Rt))==null||r.continue()}onOnline(){var r;const n=this.observers.find(o=>o.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(r=W(this,Rt))==null||r.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),W(this,on).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(r=>r!==n),this.observers.length||(W(this,Rt)&&(W(this,Kr)?W(this,Rt).cancel({revert:!0}):W(this,Rt).cancelRetry()),this.scheduleGc()),W(this,on).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||_e(this,mn,Zn).call(this,{type:"invalidate"})}fetch(n,r){var d,f,g;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(W(this,Rt))return W(this,Rt).continueRetry(),W(this,Rt).promise}if(n&&this.setOptions(n),!this.options.queryFn){const b=this.observers.find(h=>h.options.queryFn);b&&this.setOptions(b.options)}const o=new AbortController,i={queryKey:this.queryKey,meta:this.meta},a=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(we(this,Kr,!0),o.signal)})};a(i);const l=()=>!this.options.queryFn||this.options.queryFn===Pp?Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)):(we(this,Kr,!1),this.options.persister?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i)),c={fetchOptions:r,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:l};a(c),(d=this.options.behavior)==null||d.onFetch(c,this),we(this,Fo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=c.fetchOptions)==null?void 0:f.meta))&&_e(this,mn,Zn).call(this,{type:"fetch",meta:(g=c.fetchOptions)==null?void 0:g.meta});const u=b=>{var h,m,y,E;fc(b)&&b.silent||_e(this,mn,Zn).call(this,{type:"error",error:b}),fc(b)||((m=(h=W(this,on).config).onError)==null||m.call(h,b,this),(E=(y=W(this,on).config).onSettled)==null||E.call(y,this.state.data,b,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return we(this,Rt,T2({fn:c.fetchFn,abort:o.abort.bind(o),onSuccess:b=>{var h,m,y,E;if(b===void 0){u(new Error(`${this.queryHash} data is undefined`));return}this.setData(b),(m=(h=W(this,on).config).onSuccess)==null||m.call(h,b,this),(E=(y=W(this,on).config).onSettled)==null||E.call(y,b,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(b,h)=>{_e(this,mn,Zn).call(this,{type:"failed",failureCount:b,error:h})},onPause:()=>{_e(this,mn,Zn).call(this,{type:"pause"})},onContinue:()=>{_e(this,mn,Zn).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),W(this,Rt).start()}},No=new WeakMap,Fo=new WeakMap,on=new WeakMap,Rt=new WeakMap,Hi=new WeakMap,Kr=new WeakMap,mn=new WeakSet,Zn=function(n){const r=o=>{switch(n.type){case"failed":return{...o,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...R2(o.data,this.options),fetchMeta:n.meta??null};case"success":return{...o,data:n.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=n.error;return fc(i)&&i.revert&&W(this,Fo)?{...W(this,Fo),fetchStatus:"idle"}:{...o,error:i,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...n.state}}};this.state=r(this.state),kt.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),W(this,on).notify({query:this,type:"updated",action:n})})},_0);function R2(t,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:I2(n.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function sA(t){const n=typeof t.initialData=="function"?t.initialData():t.initialData,r=n!==void 0,o=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:r?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Pn,$0,cA=($0=class extends aa{constructor(n={}){super();Re(this,Pn);this.config=n,we(this,Pn,new Map)}build(n,r,o){const i=r.queryKey,a=r.queryHash??Cp(i,r);let l=this.get(a);return l||(l=new lA({cache:this,queryKey:i,queryHash:a,options:n.defaultQueryOptions(r),state:o,defaultOptions:n.getQueryDefaults(i)}),this.add(l)),l}add(n){W(this,Pn).has(n.queryHash)||(W(this,Pn).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const r=W(this,Pn).get(n.queryHash);r&&(n.destroy(),r===n&&W(this,Pn).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){kt.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return W(this,Pn).get(n)}getAll(){return[...W(this,Pn).values()]}find(n){const r={exact:!0,...n};return this.getAll().find(o=>Cv(r,o))}findAll(n={}){const r=this.getAll();return Object.keys(n).length>0?r.filter(o=>Cv(n,o)):r}notify(n){kt.batch(()=>{this.listeners.forEach(r=>{r(n)})})}onFocus(){kt.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){kt.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Pn=new WeakMap,$0),In,Nt,Gr,Dn,dr,z0,uA=(z0=class extends M2{constructor(n){super();Re(this,Dn);Re(this,In);Re(this,Nt);Re(this,Gr);this.mutationId=n.mutationId,we(this,Nt,n.mutationCache),we(this,In,[]),this.state=n.state||dA(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){W(this,In).includes(n)||(W(this,In).push(n),this.clearGcTimeout(),W(this,Nt).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){we(this,In,W(this,In).filter(r=>r!==n)),this.scheduleGc(),W(this,Nt).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){W(this,In).length||(this.state.status==="pending"?this.scheduleGc():W(this,Nt).remove(this))}continue(){var n;return((n=W(this,Gr))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var i,a,l,c,u,d,f,g,b,h,m,y,E,v,k,C,M,I,D,z;we(this,Gr,T2({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(A,J)=>{_e(this,Dn,dr).call(this,{type:"failed",failureCount:A,error:J})},onPause:()=>{_e(this,Dn,dr).call(this,{type:"pause"})},onContinue:()=>{_e(this,Dn,dr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>W(this,Nt).canRun(this)}));const r=this.state.status==="pending",o=!W(this,Gr).canStart();try{if(!r){_e(this,Dn,dr).call(this,{type:"pending",variables:n,isPaused:o}),await((a=(i=W(this,Nt).config).onMutate)==null?void 0:a.call(i,n,this));const J=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,n));J!==this.state.context&&_e(this,Dn,dr).call(this,{type:"pending",context:J,variables:n,isPaused:o})}const A=await W(this,Gr).start();return await((d=(u=W(this,Nt).config).onSuccess)==null?void 0:d.call(u,A,n,this.state.context,this)),await((g=(f=this.options).onSuccess)==null?void 0:g.call(f,A,n,this.state.context)),await((h=(b=W(this,Nt).config).onSettled)==null?void 0:h.call(b,A,null,this.state.variables,this.state.context,this)),await((y=(m=this.options).onSettled)==null?void 0:y.call(m,A,null,n,this.state.context)),_e(this,Dn,dr).call(this,{type:"success",data:A}),A}catch(A){try{throw await((v=(E=W(this,Nt).config).onError)==null?void 0:v.call(E,A,n,this.state.context,this)),await((C=(k=this.options).onError)==null?void 0:C.call(k,A,n,this.state.context)),await((I=(M=W(this,Nt).config).onSettled)==null?void 0:I.call(M,void 0,A,this.state.variables,this.state.context,this)),await((z=(D=this.options).onSettled)==null?void 0:z.call(D,void 0,A,n,this.state.context)),A}finally{_e(this,Dn,dr).call(this,{type:"error",error:A})}}finally{W(this,Nt).runNext(this)}}},In=new WeakMap,Nt=new WeakMap,Gr=new WeakMap,Dn=new WeakSet,dr=function(n){const r=o=>{switch(n.type){case"failed":return{...o,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...o,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:n.error,failureCount:o.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=r(this.state),kt.batch(()=>{W(this,In).forEach(o=>{o.onMutationUpdate(n)}),W(this,Nt).notify({mutation:this,type:"updated",action:n})})},z0);function dA(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Qt,Bi,H0,fA=(H0=class extends aa{constructor(n={}){super();Re(this,Qt);Re(this,Bi);this.config=n,we(this,Qt,new Map),we(this,Bi,Date.now())}build(n,r,o){const i=new uA({mutationCache:this,mutationId:++ca(this,Bi)._,options:n.defaultMutationOptions(r),state:o});return this.add(i),i}add(n){const r=Ia(n),o=W(this,Qt).get(r)??[];o.push(n),W(this,Qt).set(r,o),this.notify({type:"added",mutation:n})}remove(n){var o;const r=Ia(n);if(W(this,Qt).has(r)){const i=(o=W(this,Qt).get(r))==null?void 0:o.filter(a=>a!==n);i&&(i.length===0?W(this,Qt).delete(r):W(this,Qt).set(r,i))}this.notify({type:"removed",mutation:n})}canRun(n){var o;const r=(o=W(this,Qt).get(Ia(n)))==null?void 0:o.find(i=>i.state.status==="pending");return!r||r===n}runNext(n){var o;const r=(o=W(this,Qt).get(Ia(n)))==null?void 0:o.find(i=>i!==n&&i.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}clear(){kt.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}getAll(){return[...W(this,Qt).values()].flat()}find(n){const r={exact:!0,...n};return this.getAll().find(o=>Pv(r,o))}findAll(n={}){return this.getAll().filter(r=>Pv(n,r))}notify(n){kt.batch(()=>{this.listeners.forEach(r=>{r(n)})})}resumePausedMutations(){const n=this.getAll().filter(r=>r.state.isPaused);return kt.batch(()=>Promise.all(n.map(r=>r.continue().catch(an))))}},Qt=new WeakMap,Bi=new WeakMap,H0);function Ia(t){var n;return((n=t.options.scope)==null?void 0:n.id)??String(t.mutationId)}function pA(t){return{onFetch:(n,r)=>{const o=async()=>{var m,y,E,v,k;const i=n.options,a=(E=(y=(m=n.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:E.direction,l=((v=n.state.data)==null?void 0:v.pages)||[],c=((k=n.state.data)==null?void 0:k.pageParams)||[],u={pages:[],pageParams:[]};let d=!1;const f=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(n.signal.aborted?d=!0:n.signal.addEventListener("abort",()=>{d=!0}),n.signal)})},g=n.options.queryFn&&n.options.queryFn!==Pp?n.options.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${n.options.queryHash}'`)),b=async(C,M,I)=>{if(d)return Promise.reject();if(M==null&&C.pages.length)return Promise.resolve(C);const D={queryKey:n.queryKey,pageParam:M,direction:I?"backward":"forward",meta:n.options.meta};f(D);const z=await g(D),{maxPages:A}=n.options,J=I?nA:tA;return{pages:J(C.pages,z,A),pageParams:J(C.pageParams,M,A)}};let h;if(a&&l.length){const C=a==="backward",M=C?gA:Tv,I={pages:l,pageParams:c},D=M(i,I);h=await b(I,D,C)}else{h=await b(u,c[0]??i.initialPageParam);const C=t??l.length;for(let M=1;M<C;M++){const I=Tv(i,h);h=await b(h,I)}}return h};n.options.persister?n.fetchFn=()=>{var i,a;return(a=(i=n.options).persister)==null?void 0:a.call(i,o,{queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},r)}:n.fetchFn=o}}}function Tv(t,{pages:n,pageParams:r}){const o=n.length-1;return t.getNextPageParam(n[o],n,r[o],r)}function gA(t,{pages:n,pageParams:r}){var o;return(o=t.getPreviousPageParam)==null?void 0:o.call(t,n[0],n,r[0],r)}var st,mr,br,Lo,Ao,vr,_o,$o,B0,hA=(B0=class{constructor(t={}){Re(this,st);Re(this,mr);Re(this,br);Re(this,Lo);Re(this,Ao);Re(this,vr);Re(this,_o);Re(this,$o);we(this,st,t.queryCache||new cA),we(this,mr,t.mutationCache||new fA),we(this,br,t.defaultOptions||{}),we(this,Lo,new Map),we(this,Ao,new Map),we(this,vr,0)}mount(){ca(this,vr)._++,W(this,vr)===1&&(we(this,_o,Ip.subscribe(async t=>{t&&(await this.resumePausedMutations(),W(this,st).onFocus())})),we(this,$o,Ol.subscribe(async t=>{t&&(await this.resumePausedMutations(),W(this,st).onOnline())})))}unmount(){var t,n;ca(this,vr)._--,W(this,vr)===0&&((t=W(this,_o))==null||t.call(this),we(this,_o,void 0),(n=W(this,$o))==null||n.call(this),we(this,$o,void 0))}isFetching(t){return W(this,st).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return W(this,mr).findAll({...t,status:"pending"}).length}getQueryData(t){var r;const n=this.defaultQueryOptions({queryKey:t});return(r=W(this,st).get(n.queryHash))==null?void 0:r.state.data}ensureQueryData(t){const n=this.getQueryData(t.queryKey);if(n===void 0)return this.fetchQuery(t);{const r=this.defaultQueryOptions(t),o=W(this,st).build(this,r);return t.revalidateIfStale&&o.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(n)}}getQueriesData(t){return W(this,st).findAll(t).map(({queryKey:n,state:r})=>{const o=r.data;return[n,o]})}setQueryData(t,n,r){const o=this.defaultQueryOptions({queryKey:t}),i=W(this,st).get(o.queryHash),a=i==null?void 0:i.state.data,l=XL(n,a);if(l!==void 0)return W(this,st).build(this,o).setData(l,{...r,manual:!0})}setQueriesData(t,n,r){return kt.batch(()=>W(this,st).findAll(t).map(({queryKey:o})=>[o,this.setQueryData(o,n,r)]))}getQueryState(t){var r;const n=this.defaultQueryOptions({queryKey:t});return(r=W(this,st).get(n.queryHash))==null?void 0:r.state}removeQueries(t){const n=W(this,st);kt.batch(()=>{n.findAll(t).forEach(r=>{n.remove(r)})})}resetQueries(t,n){const r=W(this,st),o={type:"active",...t};return kt.batch(()=>(r.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(o,n)))}cancelQueries(t={},n={}){const r={revert:!0,...n},o=kt.batch(()=>W(this,st).findAll(t).map(i=>i.cancel(r)));return Promise.all(o).then(an).catch(an)}invalidateQueries(t={},n={}){return kt.batch(()=>{if(W(this,st).findAll(t).forEach(o=>{o.invalidate()}),t.refetchType==="none")return Promise.resolve();const r={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(r,n)})}refetchQueries(t={},n){const r={...n,cancelRefetch:(n==null?void 0:n.cancelRefetch)??!0},o=kt.batch(()=>W(this,st).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let a=i.fetch(void 0,r);return r.throwOnError||(a=a.catch(an)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(o).then(an)}fetchQuery(t){const n=this.defaultQueryOptions(t);n.retry===void 0&&(n.retry=!1);const r=W(this,st).build(this,n);return r.isStaleByTime(n.staleTime)?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(an).catch(an)}fetchInfiniteQuery(t){return t.behavior=pA(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(an).catch(an)}resumePausedMutations(){return Ol.isOnline()?W(this,mr).resumePausedMutations():Promise.resolve()}getQueryCache(){return W(this,st)}getMutationCache(){return W(this,mr)}getDefaultOptions(){return W(this,br)}setDefaultOptions(t){we(this,br,t)}setQueryDefaults(t,n){W(this,Lo).set(_i(t),{queryKey:t,defaultOptions:n})}getQueryDefaults(t){const n=[...W(this,Lo).values()];let r={};return n.forEach(o=>{$i(t,o.queryKey)&&(r={...r,...o.defaultOptions})}),r}setMutationDefaults(t,n){W(this,Ao).set(_i(t),{mutationKey:t,defaultOptions:n})}getMutationDefaults(t){const n=[...W(this,Ao).values()];let r={};return n.forEach(o=>{$i(t,o.mutationKey)&&(r={...r,...o.defaultOptions})}),r}defaultQueryOptions(t){if(t._defaulted)return t;const n={...W(this,br).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return n.queryHash||(n.queryHash=Cp(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.enabled!==!0&&n.queryFn===Pp&&(n.enabled=!1),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...W(this,br).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){W(this,st).clear(),W(this,mr).clear()}},st=new WeakMap,mr=new WeakMap,br=new WeakMap,Lo=new WeakMap,Ao=new WeakMap,vr=new WeakMap,_o=new WeakMap,$o=new WeakMap,B0),_t,et,Vi,Ft,Qr,zo,Tn,Wi,Ho,Bo,Zr,Jr,yr,Vo,Ue,yi,of,af,lf,sf,cf,uf,df,N2,V0,mA=(V0=class extends aa{constructor(n,r){super();Re(this,Ue);Re(this,_t);Re(this,et);Re(this,Vi);Re(this,Ft);Re(this,Qr);Re(this,zo);Re(this,Tn);Re(this,Wi);Re(this,Ho);Re(this,Bo);Re(this,Zr);Re(this,Jr);Re(this,yr);Re(this,Vo,new Set);this.options=r,we(this,_t,n),we(this,Tn,null),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(W(this,et).addObserver(this),Mv(W(this,et),this.options)?_e(this,Ue,yi).call(this):this.updateResult(),_e(this,Ue,sf).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ff(W(this,et),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ff(W(this,et),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,_e(this,Ue,cf).call(this),_e(this,Ue,uf).call(this),W(this,et).removeObserver(this)}setOptions(n,r){const o=this.options,i=W(this,et);if(this.options=W(this,_t).defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");_e(this,Ue,df).call(this),W(this,et).setOptions(this.options),o._defaulted&&!tf(this.options,o)&&W(this,_t).getQueryCache().notify({type:"observerOptionsUpdated",query:W(this,et),observer:this});const a=this.hasListeners();a&&Rv(W(this,et),i,this.options,o)&&_e(this,Ue,yi).call(this),this.updateResult(r),a&&(W(this,et)!==i||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&_e(this,Ue,of).call(this);const l=_e(this,Ue,af).call(this);a&&(W(this,et)!==i||this.options.enabled!==o.enabled||l!==W(this,yr))&&_e(this,Ue,lf).call(this,l)}getOptimisticResult(n){const r=W(this,_t).getQueryCache().build(W(this,_t),n),o=this.createResult(r,n);return vA(this,o)&&(we(this,Ft,o),we(this,zo,this.options),we(this,Qr,W(this,et).state)),o}getCurrentResult(){return W(this,Ft)}trackResult(n,r){const o={};return Object.keys(n).forEach(i=>{Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),r==null||r(i),n[i])})}),o}trackProp(n){W(this,Vo).add(n)}getCurrentQuery(){return W(this,et)}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const r=W(this,_t).defaultQueryOptions(n),o=W(this,_t).getQueryCache().build(W(this,_t),r);return o.isFetchingOptimistic=!0,o.fetch().then(()=>this.createResult(o,r))}fetch(n){return _e(this,Ue,yi).call(this,{...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),W(this,Ft)))}createResult(n,r){var z;const o=W(this,et),i=this.options,a=W(this,Ft),l=W(this,Qr),c=W(this,zo),d=n!==o?n.state:W(this,Vi),{state:f}=n;let g={...f},b=!1,h;if(r._optimisticResults){const A=this.hasListeners(),J=!A&&Mv(n,r),V=A&&Rv(n,o,r,i);(J||V)&&(g={...g,...R2(f.data,n.options)}),r._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:m,errorUpdatedAt:y,status:E}=g;if(r.select&&g.data!==void 0)if(a&&g.data===(l==null?void 0:l.data)&&r.select===W(this,Wi))h=W(this,Ho);else try{we(this,Wi,r.select),h=r.select(g.data),h=rf(a==null?void 0:a.data,h,r),we(this,Ho,h),we(this,Tn,null)}catch(A){we(this,Tn,A)}else h=g.data;if(r.placeholderData!==void 0&&h===void 0&&E==="pending"){let A;if(a!=null&&a.isPlaceholderData&&r.placeholderData===(c==null?void 0:c.placeholderData))A=a.data;else if(A=typeof r.placeholderData=="function"?r.placeholderData((z=W(this,Bo))==null?void 0:z.state.data,W(this,Bo)):r.placeholderData,r.select&&A!==void 0)try{A=r.select(A),we(this,Tn,null)}catch(J){we(this,Tn,J)}A!==void 0&&(E="success",h=rf(a==null?void 0:a.data,A,r),b=!0)}W(this,Tn)&&(m=W(this,Tn),h=W(this,Ho),y=Date.now(),E="error");const v=g.fetchStatus==="fetching",k=E==="pending",C=E==="error",M=k&&v,I=h!==void 0;return{status:E,fetchStatus:g.fetchStatus,isPending:k,isSuccess:E==="success",isError:C,isInitialLoading:M,isLoading:M,data:h,dataUpdatedAt:g.dataUpdatedAt,error:m,errorUpdatedAt:y,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>d.dataUpdateCount||g.errorUpdateCount>d.errorUpdateCount,isFetching:v,isRefetching:v&&!k,isLoadingError:C&&!I,isPaused:g.fetchStatus==="paused",isPlaceholderData:b,isRefetchError:C&&I,isStale:Dp(n,r),refetch:this.refetch}}updateResult(n){const r=W(this,Ft),o=this.createResult(W(this,et),this.options);if(we(this,Qr,W(this,et).state),we(this,zo,this.options),W(this,Qr).data!==void 0&&we(this,Bo,W(this,et)),tf(o,r))return;we(this,Ft,o);const i={},a=()=>{if(!r)return!0;const{notifyOnChangeProps:l}=this.options,c=typeof l=="function"?l():l;if(c==="all"||!c&&!W(this,Vo).size)return!0;const u=new Set(c??W(this,Vo));return this.options.throwOnError&&u.add("error"),Object.keys(W(this,Ft)).some(d=>{const f=d;return W(this,Ft)[f]!==r[f]&&u.has(f)})};(n==null?void 0:n.listeners)!==!1&&a()&&(i.listeners=!0),_e(this,Ue,N2).call(this,{...i,...n})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&_e(this,Ue,sf).call(this)}},_t=new WeakMap,et=new WeakMap,Vi=new WeakMap,Ft=new WeakMap,Qr=new WeakMap,zo=new WeakMap,Tn=new WeakMap,Wi=new WeakMap,Ho=new WeakMap,Bo=new WeakMap,Zr=new WeakMap,Jr=new WeakMap,yr=new WeakMap,Vo=new WeakMap,Ue=new WeakSet,yi=function(n){_e(this,Ue,df).call(this);let r=W(this,et).fetch(this.options,n);return n!=null&&n.throwOnError||(r=r.catch(an)),r},of=function(){if(_e(this,Ue,cf).call(this),ei||W(this,Ft).isStale||!ef(this.options.staleTime))return;const r=C2(W(this,Ft).dataUpdatedAt,this.options.staleTime)+1;we(this,Zr,setTimeout(()=>{W(this,Ft).isStale||this.updateResult()},r))},af=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(W(this,et)):this.options.refetchInterval)??!1},lf=function(n){_e(this,Ue,uf).call(this),we(this,yr,n),!(ei||this.options.enabled===!1||!ef(W(this,yr))||W(this,yr)===0)&&we(this,Jr,setInterval(()=>{(this.options.refetchIntervalInBackground||Ip.isFocused())&&_e(this,Ue,yi).call(this)},W(this,yr)))},sf=function(){_e(this,Ue,of).call(this),_e(this,Ue,lf).call(this,_e(this,Ue,af).call(this))},cf=function(){W(this,Zr)&&(clearTimeout(W(this,Zr)),we(this,Zr,void 0))},uf=function(){W(this,Jr)&&(clearInterval(W(this,Jr)),we(this,Jr,void 0))},df=function(){const n=W(this,_t).getQueryCache().build(W(this,_t),this.options);if(n===W(this,et))return;const r=W(this,et);we(this,et,n),we(this,Vi,n.state),this.hasListeners()&&(r==null||r.removeObserver(this),n.addObserver(this))},N2=function(n){kt.batch(()=>{n.listeners&&this.listeners.forEach(r=>{r(W(this,Ft))}),W(this,_t).getQueryCache().notify({query:W(this,et),type:"observerResultsUpdated"})})},V0);function bA(t,n){return n.enabled!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&n.retryOnMount===!1)}function Mv(t,n){return bA(t,n)||t.state.data!==void 0&&ff(t,n,n.refetchOnMount)}function ff(t,n,r){if(n.enabled!==!1){const o=typeof r=="function"?r(t):r;return o==="always"||o!==!1&&Dp(t,n)}return!1}function Rv(t,n,r,o){return(t!==n||o.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&Dp(t,r)}function Dp(t,n){return n.enabled!==!1&&t.isStaleByTime(n.staleTime)}function vA(t,n){return!tf(t.getCurrentResult(),n)}var F2=p.createContext(void 0),yA=t=>{const n=p.useContext(F2);if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},wA=({client:t,children:n})=>(p.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),G.jsx(F2.Provider,{value:t,children:n})),L2=p.createContext(!1),xA=()=>p.useContext(L2);L2.Provider;function jA(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var EA=p.createContext(jA()),kA=()=>p.useContext(EA);function OA(t,n){return typeof t=="function"?t(...n):!!t}var SA=(t,n)=>{(t.suspense||t.throwOnError)&&(n.isReset()||(t.retryOnMount=!1))},CA=t=>{p.useEffect(()=>{t.clearReset()},[t])},PA=({result:t,errorResetBoundary:n,throwOnError:r,query:o})=>t.isError&&!n.isReset()&&!t.isFetching&&o&&OA(r,[t.error,o]),IA=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},DA=(t,n)=>(t==null?void 0:t.suspense)&&n.isPending,TA=(t,n,r)=>n.fetchOptimistic(t).catch(()=>{r.clearReset()});function MA(t,n,r){const o=yA(),i=xA(),a=kA(),l=o.defaultQueryOptions(t);l._optimisticResults=i?"isRestoring":"optimistic",IA(l),SA(l,a),CA(a);const[c]=p.useState(()=>new n(o,l)),u=c.getOptimisticResult(l);if(p.useSyncExternalStore(p.useCallback(d=>{const f=i?()=>{}:c.subscribe(kt.batchCalls(d));return c.updateResult(),f},[c,i]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),p.useEffect(()=>{c.setOptions(l,{listeners:!1})},[l,c]),DA(l,u))throw TA(l,c,a);if(PA({result:u,errorResetBoundary:a,throwOnError:l.throwOnError,query:o.getQueryCache().get(l.queryHash)}))throw u.error;return l.notifyOnChangeProps?u:c.trackResult(u)}function RA(t,n){return MA(t,mA)}const NA=({meta:t})=>fetch(`${t.endpoint}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(n=>{if(n.statusCode>=400)throw new Error(n.statusText);return n.json()}),Nv="search-node-highlight",FA=3;function pf(t,n=document,r=[]){if(n.nodeType===Node.TEXT_NODE&&["SCRIPT","TITLE","STYLE"].indexOf(n.parentNode.tagName)===-1&&n.textContent.toLowerCase().includes(t.toLowerCase()))r.push(n);else if(n.childNodes&&n.childNodes.length>0)for(let o=0;o<n.childNodes.length;o++)pf(t,n.childNodes[o],r);return n.shadowRoot&&pf(t,n.shadowRoot,r),r}const LA=t=>{const n=document.querySelectorAll("*"),r=[document.body];return n.forEach(o=>{o.shadowRoot&&r.push(o.shadowRoot)}),r.map(o=>{const i=new MutationObserver(t);return i.observe(o,{attributes:!0,childList:!0,subtree:!0}),i})},AA=()=>{const t=Sp(),n=S.useRef([]),[r,o]=S.useState(null);return S.useEffect(()=>{for(;n.current.length>0;){const{org:a,search:l}=n.current.pop();l.replaceWith(a)}if(!t||t.length<FA)return;pf(t).forEach(a=>{const l=a.textContent.toLowerCase().indexOf(t.toLowerCase()),c=document.createElement("span"),u=document.createElement("span");c.className=Nv,u.className="bg-theme-warning/40 text-theme-high rounded-sm",u.append(a.textContent.slice(l,l+t.length)),c.append(a.textContent.slice(0,l)),c.append(u),c.append(a.textContent.slice(l+t.length)),n.current.push({org:a,search:c}),a.replaceWith(c)})},[r,t]),S.useEffect(()=>{const i=LA(a=>{for(const l of a)!l.type==="childList"||Array.from(l.addedNodes).concat(Array.from(l.removedNodes)).some(d=>{var f;return(f=d.classList)==null?void 0:f.contains(Nv)})||o(Date.now())});return()=>{i.forEach(a=>a.disconnect())}},[o]),null},gf=({name:t,value:n,nameLabel:r,valueLabel:o})=>{const{add:i}=ss();return G.jsx("div",{onClick:a=>a.stopPropagation(),children:G.jsx(dw,{pillKey:t,pillKeyLabel:r||t,pillValue:n,pillValueLabel:o||n,onClick:()=>{const a=t==="service"?`check:${t}`:t;i(a,n)}})})},_A=({constraints:t,slice:n})=>{const r=S.useMemo(()=>{const o={};return t.forEach(i=>i.violation_groups.forEach(a=>{var c,u;const l=(u=(c=a.pattern)==null?void 0:c.object_identity)==null?void 0:u.service;l&&(o[l]=(o[l]||0)+1)})),o},[t]);return G.jsxs(G.Fragment,{children:[Object.keys(r).map((o,i)=>(!n||i<n)&&G.jsx(gf,{name:"service",value:o,valueLabel:`${o} | ${r[o]}`},i)),Object.keys(r).length>n&&"..."]})},$A={debug:{borderCss:"border-theme-default",icon:"errorOutline",iconCss:"text-theme-default",tooltip:"Debug: this violation is currently in the planning phase."},info:{borderCss:"border-theme-info",icon:"info",iconCss:"text-theme-info",tooltip:"Info: this violation contains details with low severity."},warning:{borderCss:"border-theme-warning",icon:"warning",iconCss:"text-theme-warning",tooltip:"Warning: this violation contains details with medium severity."},error:{borderCss:"border-theme-error",icon:"danger",iconCss:"text-theme-danger",tooltip:"Error: this violation contains details with high severity."}},zA=({severityData:t,title:n})=>G.jsxs(gT,{triggerEvent:"hover",children:[G.jsx(wT,{children:G.jsx(eo,{icon:t.icon,title:n,color:t.iconCss})}),G.jsx(yT,{children:t.tooltip})]}),A2=({severities:t,border:n,className:r=""})=>{const o=S.useMemo(()=>!t||t.length===0?null:$A[t[0]],[t]);return o?G.jsx("div",{className:`${n?"border-l-2 h-full "+o.borderCss:""} ${r}`,children:G.jsx(zA,{severityData:o,title:t[0]})}):null},HA=({item:t})=>{var o,i;const n=kp(),{setDetailsViolationGroupKind:r}=ls();return G.jsxs(Ur,{className:`cursor-pointer ${n===(t==null?void 0:t.kind)?"active":""}`,onClick:()=>n===t.kind?r(null):r(t==null?void 0:t.kind),children:[G.jsx(Zt,{className:"pl-0",children:G.jsx(A2,{severities:t==null?void 0:t.severities,className:"pl-5",border:!0})}),G.jsx(Zt,{className:"font-bold",children:t==null?void 0:t.kind}),G.jsx(Zt,{children:G.jsx(Qy,{text:`${t==null?void 0:t.violationCount}`,className:""})}),G.jsx(Zt,{children:G.jsx(Ln,{gap:"2",wrap:!0,children:G.jsx(_A,{constraints:t==null?void 0:t.constraints})})}),G.jsxs(Zt,{children:[G.jsx("div",{children:"Template:"}),G.jsx("div",{children:(o=t==null?void 0:t.constraints)==null?void 0:o.map((a,l)=>{var c;return((c=a.metadata)==null?void 0:c.template_source)&&G.jsx("div",{children:G.jsx("a",{href:a.metadata.template_source,target:"_blank",className:"hover:underline",rel:"noreferrer",children:G.jsxs(Ln,{gap:"1.5",alignment:"center",children:[G.jsx(eo,{icon:"openInNew",size:"16"}),a.name]})})},l)})}),G.jsx("div",{children:"Constraint:"}),G.jsx("div",{children:(i=t==null?void 0:t.constraints)==null?void 0:i.map((a,l)=>{var c;return((c=a.metadata)==null?void 0:c.constraint_source)&&G.jsx("div",{children:G.jsx("a",{href:a.metadata.constraint_source,target:"_blank",className:"hover:underline",rel:"noreferrer",children:G.jsxs(Ln,{gap:"1.5",alignment:"center",children:[G.jsx(eo,{icon:"openInNew",size:"16"}),a.name]})})},l)})})]})]})},BA=()=>{const t=ZL();return G.jsx(G.Fragment,{children:(t==null?void 0:t.length)===0?G.jsx("div",{className:"p-4",children:"No violations found"}):G.jsx(G.Fragment,{children:G.jsxs(K1,{columns:5,cellVerticalAlignment:"top",className:"violations-list",children:[G.jsxs(Ur,{children:[G.jsx(mo,{children:G.jsx(eo,{icon:"monitorHeart"})}),G.jsx(mo,{children:"Check Name"}),G.jsx(mo,{children:"Total"}),G.jsx(mo,{children:"Violations per Service"}),G.jsx(mo,{children:"Template/Constraint"})]}),t.map((n,r)=>G.jsx(HA,{item:n},r))]})})})},VA=()=>{var m;const[t,n]=p.useState(""),[r,o]=p.useState(""),[i,a]=p.useState(Date.now()),l=QL(),{add:c,removeAll:u,setSearchTerm:d}=ss(),f=Sp(),g=Op()||[],b=y=>{o(null),y!==null&&c(t,y),a(Date.now())},h=y=>{const E=setTimeout(()=>{d(y.target.value)},500);return()=>clearTimeout(E)};return G.jsxs(Ln,{alignment:"center",gap:"8",distribution:"between",children:[G.jsxs(Ln,{gap:"2",children:[G.jsxs(Z1,{children:[G.jsx(_u,{name:"category",className:"filter-label-select w-52 mb-0",label:"Select category",value:t,onChange:n,children:l.map((y,E)=>G.jsx($u,{value:y.key,label:y.label},E))}),G.jsx(_u,{name:"value",value:r,onChange:y=>b(y),disabled:!t,className:"filter-value-select w-80 bg-theme-background-lvl-0",children:(m=l.find(y=>y.key===t))==null?void 0:m.values.map((y,E)=>G.jsx($u,{value:y},E))},i),G.jsx(Ya,{onClick:()=>t&&r&&c(t,r),icon:"filterAlt",className:"py-[0.3rem]"})]}),g.length>0&&G.jsx(Ya,{label:"Clear all",onClick:u,variant:"subdued"})]}),G.jsx(Jy,{className:"w-96",value:f||"",onChange:y=>h(y),onClear:()=>d(null)})]})},WA=()=>{const t=Op(),{remove:n}=ss();return t?G.jsx(Ln,{wrap:!0,gap:"2",children:t.map(({key:r,value:o,label:i},a)=>{var l;return G.jsx(dw,{pillKey:(l=r==null?void 0:r.split(":"))==null?void 0:l[1],pillValue:o,pillKeyLabel:Xo(i),closeable:!0,onClose:()=>n(r,o)},a)})}):null},UA=`
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`,_2=()=>G.jsxs(Ln,{direction:"vertical",gap:"4",className:`filters ${UA}`,children:[G.jsx(VA,{}),G.jsx(WA,{})]});function Fv(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,o=Array(n);r<n;r++)o[r]=t[r];return o}function qA(t){if(Array.isArray(t))return t}function YA(t,n,r){return(n=XA(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function KA(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,i,a,l,c=[],u=!0,d=!1;try{if(a=(r=r.call(t)).next,n===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(o=a.call(r)).done)&&(c.push(o.value),c.length!==n);u=!0);}catch(f){d=!0,i=f}finally{try{if(!u&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(d)throw i}}return c}}function GA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lv(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function pc(t){for(var n,r=1;r<arguments.length;r++)n=arguments[r]==null?{}:arguments[r],r%2?Lv(Object(n),!0).forEach(function(o){YA(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lv(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))});return t}function QA(t,n){if(t==null)return{};var r,o,i=ZA(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ZA(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}function Sl(t,n){return qA(t)||KA(t,n)||e4(t,n)||GA()}function JA(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function XA(t){var n=JA(t,"string");return typeof n=="symbol"?n:n+""}function hf(t){"@babel/helpers - typeof";return hf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hf(t)}function e4(t,n){if(t){if(typeof t=="string")return Fv(t,n);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Fv(t,n):void 0}}var t4=function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},r=p.useState(20),o=Sl(r,2),i=o[0],a=o[1],l=p.useState(!1),c=Sl(l,2),u=c[0],d=c[1],f=p.useRef(null),g=p.useRef();p.useEffect(function(){return function(){return clearTimeout(f.current)}},[]);var b=p.useMemo(function(){if(t)return t.slice(0,i)},[t,i]),h=p.useCallback(function(y){u||(g.current&&g.current.disconnect(),g.current=new IntersectionObserver(function(E){E[0].isIntersecting&&i<=t.length&&(clearTimeout(f.current),d(!0),f.current=setTimeout(function(){d(!1),a(function(v){return v+10})},(n==null?void 0:n.delay)||500))}),y&&g.current.observe(y))},[t,u]),m=p.useMemo(function(){return{map:function(y){var E=b.map(y);return S.createElement(S.Fragment,null,E,u&&(n==null?void 0:n.showLoading)!==!1&&S.createElement(S.Fragment,null,n!=null&&n.loadingObject?n.loadingObject:S.createElement("span",{id:"endlessScrollListLoading"},"Loading...")),(n==null?void 0:n.showRef)!==!1&&S.createElement(S.Fragment,null,n!=null&&n.refFunction?n.refFunction(h):S.createElement("span",{id:"endlessScrollListLastItemRef",ref:h})))}}},[b,h]);return{scrollListItems:b,iterator:m}},n4=["mock"],Fr=function(t){return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",Accept:"application/json"}})},Sn=function(t){return new Response(t,{status:404,headers:{"Content-Type":"application/json",Accept:"application/json"}})},lt=null,Ha=null,mf=null,bo=!1,r4=function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};if(n!=null&&n.debug&&(bo=!0),t===null)return bo&&console.log("fetchProxyInitDB:: Reset localDB"),void(lt=null);if(lt&&console.warn('fetchProxyInitDB:: localDB already initialized. This typically occurs when the component or hook, responsible for local database initialization, is accidentally re-rendered. If you intend to reset the local database, please ensure to set localDB to null first by invoking fetchProxyInitDB(null) before providing new data."'),hf(t)!=="object")throw new Error("It seems that jsonData is not a valid JSON object.");if(n!=null&&n.rewriteRoutes){bo&&console.log("fetchProxyInitDB:: rewriteRoutes::",n==null?void 0:n.rewriteRoutes);var r=Object.fromEntries(Object.entries(n==null?void 0:n.rewriteRoutes).filter(function(a){var l=Sl(a,1),c=l[0];try{return new RegExp(c),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(c," for routes is not a valid regex expresion.")),!1}}));Ha=r}if(n!=null&&n.rewriteResponses){var o=["GET","POST","PUT","DELETE","HEAD","OPTIONS"],i={};bo&&console.log("fetchProxyInitDB:: rewriteResponses::",n==null?void 0:n.rewriteResponses),Object.keys(n==null?void 0:n.rewriteResponses).forEach(function(a){if(!o.includes(a))return void console.warn("It seems that the given rewrite rule ".concat(a," for responses is not a valid method."));var l=n==null?void 0:n.rewriteResponses[a],c=Object.fromEntries(Object.entries(l).filter(function(u){var d=Sl(u,1),f=d[0];try{return new RegExp(f),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(f," for responses is not a valid regex expresion.")),!1}}));i[a]=c}),mf=i}if(Object.keys(t).some(function(a){return!Array.isArray(t[a])}))throw new Error("It seems that jsonData is not a collection of key value pairs with values as arrays.");bo&&console.log("fetchProxyInitDB:: jsonData::",t),lt=t},o4=function(t,n){var r,o=n.mock,i=QA(n,n4);if(o!==!0&&o!=="true")return console.log("fetchProxy:: real fetch for::",t),fetch(t,i);if(!lt)throw new Error(`localDB not initialized.
    Please use fetchProxyInitDB(jsonData) to initialize the localDB.`);var a=null;try{a=new URL(t)}catch{throw new Error("Invalid URL: ".concat(t))}var l=n==null?void 0:n.method;l||(l="GET");var c=a.pathname,u=null;if((r=mf)!==null&&r!==void 0&&r[l]){var d=mf[l];for(var f in d){var g=new RegExp(f);if(g.test(c)){u=Fr(d[f]);break}}}if(Ha)for(var b in Ha){var h=new RegExp(b);if(h.test(c)){c=c.replace(h,Ha[b]);break}}var m=c.split("/")[1],y=c.split("/")[2];bo&&console.log("fetchProxy:: mock fetch with method: ",l,", path: ",c,", object: ",m,", id: ",y,", customResponse: ",u);var E=n==null?void 0:n.body;return l==="GET"?new Promise(function(v){if(m){var k;if((k=lt)!==null&&k!==void 0&&k[m]){var C;if(y){var M,I=(M=lt)===null||M===void 0?void 0:M[m].findIndex(function(z){return z.id==y});if(0<=I){var D;return v(u||Fr((D=lt)===null||D===void 0||(D=D[m])===null||D===void 0?void 0:D[I]))}return v(Sn("No id ".concat(y," for object ").concat(m," found")))}return v(u||Fr((C=lt)===null||C===void 0?void 0:C[m]))}return v(Sn("No object ".concat(m," found")))}v(Fr(u||lt))}):l==="POST"?new Promise(function(v){var k,C,M;m&&E||v(Sn("No object '".concat(m,"' or body '").concat(E,"' given"))),(k=lt)!==null&&k!==void 0&&k[m]||v(Sn("No object '".concat(m,"' found")));var I=JSON.parse(E);if(I.id=1,0<((C=lt)===null||C===void 0||(C=C[m])===null||C===void 0?void 0:C.length)){var D,z=(D=lt)===null||D===void 0?void 0:D[m].reduce(function(A,J){return J.id>A.id?J:A});I.id=((z==null?void 0:z.id)||0)+1}(M=lt)===null||M===void 0||M[m].push(I),v(u||Fr(I))}):l==="PUT"?new Promise(function(v){var k,C;m&&y||v(Sn("No object '".concat(m,"' or id '").concat(y,"' given"))),(k=lt)!==null&&k!==void 0&&k[m]||v(Sn("No object '".concat(m,"' found")));var M=(C=lt)===null||C===void 0?void 0:C[m].findIndex(function(I){return I.id==y});return 0<=M?(lt[m][M]=pc(pc(pc({},lt[m][M]),JSON.parse(E)),{},{id:lt[m][M].id}),void v(u||Fr(lt[m][M]))):v(Sn("No item with id '".concat(y,"' found")))}):l==="DELETE"?new Promise(function(v){var k,C;m&&y||v(Sn("No object '".concat(m,"' or id '").concat(y,"' given"))),(k=lt)!==null&&k!==void 0&&k[m]||v(Sn("No object '".concat(m,"' found")));var M=(C=lt)===null||C===void 0?void 0:C[m].findIndex(function(I){return I.id==y});return 0<=M?(lt[m].splice(M,1),void v(u||Fr("Object deleted"))):v(Sn("No item with id '".concat(y,"' found")))}):void 0};function i4(t,n){const r={};return(t[t.length-1]===""?[...t,""]:t).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const a4=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,l4=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,s4={};function Av(t,n){return(s4.jsx?l4:a4).test(t)}const c4=/[ \t\n\f\r]/g;function u4(t){return typeof t=="object"?t.type==="text"?_v(t.value):!1:_v(t)}function _v(t){return t.replace(c4,"")===""}class la{constructor(n,r,o){this.property=n,this.normal=r,o&&(this.space=o)}}la.prototype.property={};la.prototype.normal={};la.prototype.space=null;function $2(t,n){const r={},o={};let i=-1;for(;++i<t.length;)Object.assign(r,t[i].property),Object.assign(o,t[i].normal);return new la(r,o,n)}function bf(t){return t.toLowerCase()}class fn{constructor(n,r){this.property=n,this.attribute=r}}fn.prototype.space=null;fn.prototype.boolean=!1;fn.prototype.booleanish=!1;fn.prototype.overloadedBoolean=!1;fn.prototype.number=!1;fn.prototype.commaSeparated=!1;fn.prototype.spaceSeparated=!1;fn.prototype.commaOrSpaceSeparated=!1;fn.prototype.mustUseProperty=!1;fn.prototype.defined=!1;let d4=0;const Ne=co(),gt=co(),z2=co(),le=co(),tt=co(),Io=co(),Gt=co();function co(){return 2**++d4}const vf=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ne,booleanish:gt,commaOrSpaceSeparated:Gt,commaSeparated:Io,number:le,overloadedBoolean:z2,spaceSeparated:tt},Symbol.toStringTag,{value:"Module"})),gc=Object.keys(vf);class Tp extends fn{constructor(n,r,o,i){let a=-1;if(super(n,r),$v(this,"space",i),typeof o=="number")for(;++a<gc.length;){const l=gc[a];$v(this,gc[a],(o&vf[l])===vf[l])}}}Tp.prototype.defined=!0;function $v(t,n,r){r&&(t[n]=r)}const f4={}.hasOwnProperty;function ri(t){const n={},r={};let o;for(o in t.properties)if(f4.call(t.properties,o)){const i=t.properties[o],a=new Tp(o,t.transform(t.attributes||{},o),i,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(a.mustUseProperty=!0),n[o]=a,r[bf(o)]=o,r[bf(a.attribute)]=o}return new la(n,r,t.space)}const H2=ri({space:"xlink",transform(t,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),B2=ri({space:"xml",transform(t,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function V2(t,n){return n in t?t[n]:n}function W2(t,n){return V2(t,n.toLowerCase())}const U2=ri({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:W2,properties:{xmlns:null,xmlnsXLink:null}}),q2=ri({transform(t,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:gt,ariaAutoComplete:null,ariaBusy:gt,ariaChecked:gt,ariaColCount:le,ariaColIndex:le,ariaColSpan:le,ariaControls:tt,ariaCurrent:null,ariaDescribedBy:tt,ariaDetails:null,ariaDisabled:gt,ariaDropEffect:tt,ariaErrorMessage:null,ariaExpanded:gt,ariaFlowTo:tt,ariaGrabbed:gt,ariaHasPopup:null,ariaHidden:gt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:tt,ariaLevel:le,ariaLive:null,ariaModal:gt,ariaMultiLine:gt,ariaMultiSelectable:gt,ariaOrientation:null,ariaOwns:tt,ariaPlaceholder:null,ariaPosInSet:le,ariaPressed:gt,ariaReadOnly:gt,ariaRelevant:null,ariaRequired:gt,ariaRoleDescription:tt,ariaRowCount:le,ariaRowIndex:le,ariaRowSpan:le,ariaSelected:gt,ariaSetSize:le,ariaSort:null,ariaValueMax:le,ariaValueMin:le,ariaValueNow:le,ariaValueText:null,role:null}}),p4=ri({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:W2,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Io,acceptCharset:tt,accessKey:tt,action:null,allow:null,allowFullScreen:Ne,allowPaymentRequest:Ne,allowUserMedia:Ne,alt:null,as:null,async:Ne,autoCapitalize:null,autoComplete:tt,autoFocus:Ne,autoPlay:Ne,blocking:tt,capture:null,charSet:null,checked:Ne,cite:null,className:tt,cols:le,colSpan:null,content:null,contentEditable:gt,controls:Ne,controlsList:tt,coords:le|Io,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ne,defer:Ne,dir:null,dirName:null,disabled:Ne,download:z2,draggable:gt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ne,formTarget:null,headers:tt,height:le,hidden:Ne,high:le,href:null,hrefLang:null,htmlFor:tt,httpEquiv:tt,id:null,imageSizes:null,imageSrcSet:null,inert:Ne,inputMode:null,integrity:null,is:null,isMap:Ne,itemId:null,itemProp:tt,itemRef:tt,itemScope:Ne,itemType:tt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ne,low:le,manifest:null,max:null,maxLength:le,media:null,method:null,min:null,minLength:le,multiple:Ne,muted:Ne,name:null,nonce:null,noModule:Ne,noValidate:Ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ne,optimum:le,pattern:null,ping:tt,placeholder:null,playsInline:Ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ne,referrerPolicy:null,rel:tt,required:Ne,reversed:Ne,rows:le,rowSpan:le,sandbox:tt,scope:null,scoped:Ne,seamless:Ne,selected:Ne,shadowRootClonable:Ne,shadowRootDelegatesFocus:Ne,shadowRootMode:null,shape:null,size:le,sizes:null,slot:null,span:le,spellCheck:gt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:le,step:null,style:null,tabIndex:le,target:null,title:null,translate:null,type:null,typeMustMatch:Ne,useMap:null,value:gt,width:le,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:tt,axis:null,background:null,bgColor:null,border:le,borderColor:null,bottomMargin:le,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ne,declare:Ne,event:null,face:null,frame:null,frameBorder:null,hSpace:le,leftMargin:le,link:null,longDesc:null,lowSrc:null,marginHeight:le,marginWidth:le,noResize:Ne,noHref:Ne,noShade:Ne,noWrap:Ne,object:null,profile:null,prompt:null,rev:null,rightMargin:le,rules:null,scheme:null,scrolling:gt,standby:null,summary:null,text:null,topMargin:le,valueType:null,version:null,vAlign:null,vLink:null,vSpace:le,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ne,disableRemotePlayback:Ne,prefix:null,property:null,results:le,security:null,unselectable:null}}),g4=ri({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:V2,properties:{about:Gt,accentHeight:le,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:le,amplitude:le,arabicForm:null,ascent:le,attributeName:null,attributeType:null,azimuth:le,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:le,by:null,calcMode:null,capHeight:le,className:tt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:le,diffuseConstant:le,direction:null,display:null,dur:null,divisor:le,dominantBaseline:null,download:Ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:le,enableBackground:null,end:null,event:null,exponent:le,externalResourcesRequired:null,fill:null,fillOpacity:le,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Io,g2:Io,glyphName:Io,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:le,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:le,horizOriginX:le,horizOriginY:le,id:null,ideographic:le,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:le,k:le,k1:le,k2:le,k3:le,k4:le,kernelMatrix:Gt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:le,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:le,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:le,overlineThickness:le,paintOrder:null,panose1:null,path:null,pathLength:le,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:tt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:le,pointsAtY:le,pointsAtZ:le,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Gt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Gt,rev:Gt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Gt,requiredFeatures:Gt,requiredFonts:Gt,requiredFormats:Gt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:le,specularExponent:le,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:le,strikethroughThickness:le,string:null,stroke:null,strokeDashArray:Gt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:le,strokeOpacity:le,strokeWidth:null,style:null,surfaceScale:le,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Gt,tabIndex:le,tableValues:null,target:null,targetX:le,targetY:le,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Gt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:le,underlineThickness:le,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:le,values:null,vAlphabetic:le,vMathematical:le,vectorEffect:null,vHanging:le,vIdeographic:le,version:null,vertAdvY:le,vertOriginX:le,vertOriginY:le,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:le,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),h4=/^data[-\w.:]+$/i,zv=/-[a-z]/g,m4=/[A-Z]/g;function b4(t,n){const r=bf(n);let o=n,i=fn;if(r in t.normal)return t.property[t.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&h4.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(zv,y4);o="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!zv.test(a)){let l=a.replace(m4,v4);l.charAt(0)!=="-"&&(l="-"+l),n="data"+l}}i=Tp}return new i(o,n)}function v4(t){return"-"+t.toLowerCase()}function y4(t){return t.charAt(1).toUpperCase()}const w4={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},x4=$2([B2,H2,U2,q2,p4],"html"),Mp=$2([B2,H2,U2,q2,g4],"svg");function j4(t){return t.join(" ").trim()}var Y2={},Hv=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,E4=/\n/g,k4=/^\s*/,O4=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,S4=/^:\s*/,C4=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,P4=/^[;\s]*/,I4=/^\s+|\s+$/g,D4=`
`,Bv="/",Vv="*",Wr="",T4="comment",M4="declaration",R4=function(t,n){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];n=n||{};var r=1,o=1;function i(m){var y=m.match(E4);y&&(r+=y.length);var E=m.lastIndexOf(D4);o=~E?m.length-E:o+m.length}function a(){var m={line:r,column:o};return function(y){return y.position=new l(m),d(),y}}function l(m){this.start=m,this.end={line:r,column:o},this.source=n.source}l.prototype.content=t;function c(m){var y=new Error(n.source+":"+r+":"+o+": "+m);if(y.reason=m,y.filename=n.source,y.line=r,y.column=o,y.source=t,!n.silent)throw y}function u(m){var y=m.exec(t);if(y){var E=y[0];return i(E),t=t.slice(E.length),y}}function d(){u(k4)}function f(m){var y;for(m=m||[];y=g();)y!==!1&&m.push(y);return m}function g(){var m=a();if(!(Bv!=t.charAt(0)||Vv!=t.charAt(1))){for(var y=2;Wr!=t.charAt(y)&&(Vv!=t.charAt(y)||Bv!=t.charAt(y+1));)++y;if(y+=2,Wr===t.charAt(y-1))return c("End of comment missing");var E=t.slice(2,y-2);return o+=2,i(E),t=t.slice(y),o+=2,m({type:T4,comment:E})}}function b(){var m=a(),y=u(O4);if(y){if(g(),!u(S4))return c("property missing ':'");var E=u(C4),v=m({type:M4,property:Wv(y[0].replace(Hv,Wr)),value:E?Wv(E[0].replace(Hv,Wr)):Wr});return u(P4),v}}function h(){var m=[];f(m);for(var y;y=b();)y!==!1&&(m.push(y),f(m));return m}return d(),h()};function Wv(t){return t?t.replace(I4,Wr):Wr}var N4=Kp&&Kp.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Y2,"__esModule",{value:!0});var Uv=Y2.default=L4,F4=N4(R4);function L4(t,n){var r=null;if(!t||typeof t!="string")return r;var o=(0,F4.default)(t),i=typeof n=="function";return o.forEach(function(a){if(a.type==="declaration"){var l=a.property,c=a.value;i?n(l,c,a):c&&(r=r||{},r[l]=c)}}),r}const A4=Uv.default||Uv,K2=G2("end"),Rp=G2("start");function G2(t){return n;function n(r){const o=r&&r.position&&r.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function _4(t){const n=Rp(t),r=K2(t);if(n&&r)return{start:n,end:r}}function Si(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?qv(t.position):"start"in t||"end"in t?qv(t):"line"in t||"column"in t?yf(t):""}function yf(t){return Yv(t&&t.line)+":"+Yv(t&&t.column)}function qv(t){return yf(t&&t.start)+"-"+yf(t&&t.end)}function Yv(t){return t&&typeof t=="number"?t:1}class Ct extends Error{constructor(n,r,o){super(),typeof r=="string"&&(o=r,r=void 0);let i="",a={},l=!1;if(r&&("line"in r&&"column"in r?a={place:r}:"start"in r&&"end"in r?a={place:r}:"type"in r?a={ancestors:[r],place:r.position}:a={...r}),typeof n=="string"?i=n:!a.cause&&n&&(l=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof o=="string"){const u=o.indexOf(":");u===-1?a.ruleId=o:(a.source=o.slice(0,u),a.ruleId=o.slice(u+1))}if(!a.place&&a.ancestors&&a.ancestors){const u=a.ancestors[a.ancestors.length-1];u&&(a.place=u.position)}const c=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=c?c.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=c?c.line:void 0,this.name=Si(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=l&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}}Ct.prototype.file="";Ct.prototype.name="";Ct.prototype.reason="";Ct.prototype.message="";Ct.prototype.stack="";Ct.prototype.column=void 0;Ct.prototype.line=void 0;Ct.prototype.ancestors=void 0;Ct.prototype.cause=void 0;Ct.prototype.fatal=void 0;Ct.prototype.place=void 0;Ct.prototype.ruleId=void 0;Ct.prototype.source=void 0;const Np={}.hasOwnProperty,$4=new Map,z4=/[A-Z]/g,H4=/-([a-z])/g,B4=new Set(["table","tbody","thead","tfoot","tr"]),V4=new Set(["td","th"]),Q2="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function W4(t,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=n.filePath||void 0;let o;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=J4(r,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=Z4(r,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:o,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Mp:x4,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=Z2(i,t,void 0);return a&&typeof a!="string"?a:i.create(t,i.Fragment,{children:a||void 0},void 0)}function Z2(t,n,r){if(n.type==="element")return U4(t,n,r);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return q4(t,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return K4(t,n,r);if(n.type==="mdxjsEsm")return Y4(t,n);if(n.type==="root")return G4(t,n,r);if(n.type==="text")return Q4(t,n)}function U4(t,n,r){const o=t.schema;let i=o;n.tagName.toLowerCase()==="svg"&&o.space==="html"&&(i=Mp,t.schema=i),t.ancestors.push(n);const a=X2(t,n.tagName,!1),l=X4(t,n);let c=Lp(t,n);return B4.has(n.tagName)&&(c=c.filter(function(u){return typeof u=="string"?!u4(u):!0})),J2(t,l,a,n),Fp(l,c),t.ancestors.pop(),t.schema=o,t.create(n,a,l,r)}function q4(t,n){if(n.data&&n.data.estree&&t.evaluater){const o=n.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}zi(t,n.position)}function Y4(t,n){if(n.data&&n.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(n.data.estree);zi(t,n.position)}function K4(t,n,r){const o=t.schema;let i=o;n.name==="svg"&&o.space==="html"&&(i=Mp,t.schema=i),t.ancestors.push(n);const a=n.name===null?t.Fragment:X2(t,n.name,!0),l=e_(t,n),c=Lp(t,n);return J2(t,l,a,n),Fp(l,c),t.ancestors.pop(),t.schema=o,t.create(n,a,l,r)}function G4(t,n,r){const o={};return Fp(o,Lp(t,n)),t.create(n,t.Fragment,o,r)}function Q4(t,n){return n.value}function J2(t,n,r,o){typeof r!="string"&&r!==t.Fragment&&t.passNode&&(n.node=o)}function Fp(t,n){if(n.length>0){const r=n.length>1?n:n[0];r&&(t.children=r)}}function Z4(t,n,r){return o;function o(i,a,l,c){const d=Array.isArray(l.children)?r:n;return c?d(a,l,c):d(a,l)}}function J4(t,n){return r;function r(o,i,a,l){const c=Array.isArray(a.children),u=Rp(o);return n(i,a,l,c,{columnNumber:u?u.column-1:void 0,fileName:t,lineNumber:u?u.line:void 0},void 0)}}function X4(t,n){const r={};let o,i;for(i in n.properties)if(i!=="children"&&Np.call(n.properties,i)){const a=t_(t,i,n.properties[i]);if(a){const[l,c]=a;t.tableCellAlignToStyle&&l==="align"&&typeof c=="string"&&V4.has(n.tagName)?o=c:r[l]=c}}if(o){const a=r.style||(r.style={});a[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return r}function e_(t,n){const r={};for(const o of n.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const a=o.data.estree.body[0];a.type;const l=a.expression;l.type;const c=l.properties[0];c.type,Object.assign(r,t.evaluater.evaluateExpression(c.argument))}else zi(t,n.position);else{const i=o.name;let a;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const c=o.value.data.estree.body[0];c.type,a=t.evaluater.evaluateExpression(c.expression)}else zi(t,n.position);else a=o.value===null?!0:o.value;r[i]=a}return r}function Lp(t,n){const r=[];let o=-1;const i=t.passKeys?new Map:$4;for(;++o<n.children.length;){const a=n.children[o];let l;if(t.passKeys){const u=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(u){const d=i.get(u)||0;l=u+"-"+d,i.set(u,d+1)}}const c=Z2(t,a,l);c!==void 0&&r.push(c)}return r}function t_(t,n,r){const o=b4(t.schema,n);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=o.commaSeparated?i4(r):j4(r)),o.property==="style"){let i=typeof r=="object"?r:n_(t,String(r));return t.stylePropertyNameCase==="css"&&(i=r_(i)),["style",i]}return[t.elementAttributeNameCase==="react"&&o.space?w4[o.property]||o.property:o.attribute,r]}}function n_(t,n){const r={};try{A4(n,o)}catch(i){if(!t.ignoreInvalidStyle){const a=i,l=new Ct("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=Q2+"#cannot-parse-style-attribute",l}}return r;function o(i,a){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(H4,i_)),r[l]=a}}function X2(t,n,r){let o;if(!r)o={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,l;for(;++a<i.length;){const c=Av(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};l=l?{type:"MemberExpression",object:l,property:c,computed:!!(a&&c.type==="Literal"),optional:!1}:c}o=l}else o=Av(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(o.type==="Literal"){const i=o.value;return Np.call(t.components,i)?t.components[i]:i}if(t.evaluater)return t.evaluater.evaluateExpression(o);zi(t)}function zi(t,n){const r=new Ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=Q2+"#cannot-handle-mdx-estrees-without-createevaluater",r}function r_(t){const n={};let r;for(r in t)Np.call(t,r)&&(n[o_(r)]=t[r]);return n}function o_(t){let n=t.replace(z4,a_);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function i_(t,n){return n.toUpperCase()}function a_(t){return"-"+t.toLowerCase()}const hc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},l_={};function s_(t,n){const r=l_,o=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,i=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return ej(t,o,i)}function ej(t,n,r){if(c_(t)){if("value"in t)return t.type==="html"&&!r?"":t.value;if(n&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Kv(t.children,n,r)}return Array.isArray(t)?Kv(t,n,r):""}function Kv(t,n,r){const o=[];let i=-1;for(;++i<t.length;)o[i]=ej(t[i],n,r);return o.join("")}function c_(t){return!!(t&&typeof t=="object")}const Gv=document.createElement("i");function Ap(t){const n="&"+t+";";Gv.innerHTML=n;const r=Gv.textContent;return r.charCodeAt(r.length-1)===59&&t!=="semi"||r===n?!1:r}function rr(t,n,r,o){const i=t.length;let a=0,l;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,r=r>0?r:0,o.length<1e4)l=Array.from(o),l.unshift(n,r),t.splice(...l);else for(r&&t.splice(n,r);a<o.length;)l=o.slice(a,a+1e4),l.unshift(n,0),t.splice(...l),a+=1e4,n+=1e4}function ln(t,n){return t.length>0?(rr(t,t.length,0,n),t):n}const Qv={}.hasOwnProperty;function u_(t){const n={};let r=-1;for(;++r<t.length;)d_(n,t[r]);return n}function d_(t,n){let r;for(r in n){const i=(Qv.call(t,r)?t[r]:void 0)||(t[r]={}),a=n[r];let l;if(a)for(l in a){Qv.call(i,l)||(i[l]=[]);const c=a[l];f_(i[l],Array.isArray(c)?c:c?[c]:[])}}}function f_(t,n){let r=-1;const o=[];for(;++r<n.length;)(n[r].add==="after"?t:o).push(n[r]);rr(t,0,0,o)}function tj(t,n){const r=Number.parseInt(t,n);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Do(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Nn=Tr(/[A-Za-z]/),Xt=Tr(/[\dA-Za-z]/),p_=Tr(/[#-'*+\--9=?A-Z^-~]/);function wf(t){return t!==null&&(t<32||t===127)}const xf=Tr(/\d/),g_=Tr(/[\dA-Fa-f]/),h_=Tr(/[!-/:-@[-`{-~]/);function De(t){return t!==null&&t<-2}function Ht(t){return t!==null&&(t<0||t===32)}function We(t){return t===-2||t===-1||t===32}const m_=Tr(new RegExp("\\p{P}|\\p{S}","u")),b_=Tr(/\s/);function Tr(t){return n;function n(r){return r!==null&&r>-1&&t.test(String.fromCharCode(r))}}function oi(t){const n=[];let r=-1,o=0,i=0;for(;++r<t.length;){const a=t.charCodeAt(r);let l="";if(a===37&&Xt(t.charCodeAt(r+1))&&Xt(t.charCodeAt(r+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(l=String.fromCharCode(a));else if(a>55295&&a<57344){const c=t.charCodeAt(r+1);a<56320&&c>56319&&c<57344?(l=String.fromCharCode(a,c),i=1):l="�"}else l=String.fromCharCode(a);l&&(n.push(t.slice(o,r),encodeURIComponent(l)),o=r+i+1,l=""),i&&(r+=i,i=0)}return n.join("")+t.slice(o)}function nt(t,n,r,o){const i=o?o-1:Number.POSITIVE_INFINITY;let a=0;return l;function l(u){return We(u)?(t.enter(r),c(u)):n(u)}function c(u){return We(u)&&a++<i?(t.consume(u),c):(t.exit(r),n(u))}}const v_={tokenize:y_};function y_(t){const n=t.attempt(this.parser.constructs.contentInitial,o,i);let r;return n;function o(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),nt(t,n,"linePrefix")}function i(c){return t.enter("paragraph"),a(c)}function a(c){const u=t.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=u),r=u,l(c)}function l(c){if(c===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(c);return}return De(c)?(t.consume(c),t.exit("chunkText"),a):(t.consume(c),l)}}const w_={tokenize:x_},Zv={tokenize:j_};function x_(t){const n=this,r=[];let o=0,i,a,l;return c;function c(C){if(o<r.length){const M=r[o];return n.containerState=M[1],t.attempt(M[0].continuation,u,d)(C)}return d(C)}function u(C){if(o++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&k();const M=n.events.length;let I=M,D;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){D=n.events[I][1].end;break}v(o);let z=M;for(;z<n.events.length;)n.events[z][1].end=Object.assign({},D),z++;return rr(n.events,I+1,0,n.events.slice(M)),n.events.length=z,d(C)}return c(C)}function d(C){if(o===r.length){if(!i)return b(C);if(i.currentConstruct&&i.currentConstruct.concrete)return m(C);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},t.check(Zv,f,g)(C)}function f(C){return i&&k(),v(o),b(C)}function g(C){return n.parser.lazy[n.now().line]=o!==r.length,l=n.now().offset,m(C)}function b(C){return n.containerState={},t.attempt(Zv,h,m)(C)}function h(C){return o++,r.push([n.currentConstruct,n.containerState]),b(C)}function m(C){if(C===null){i&&k(),v(0),t.consume(C);return}return i=i||n.parser.flow(n.now()),t.enter("chunkFlow",{contentType:"flow",previous:a,_tokenizer:i}),y(C)}function y(C){if(C===null){E(t.exit("chunkFlow"),!0),v(0),t.consume(C);return}return De(C)?(t.consume(C),E(t.exit("chunkFlow")),o=0,n.interrupt=void 0,c):(t.consume(C),y)}function E(C,M){const I=n.sliceStream(C);if(M&&I.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(I),n.parser.lazy[C.start.line]){let D=i.events.length;for(;D--;)if(i.events[D][1].start.offset<l&&(!i.events[D][1].end||i.events[D][1].end.offset>l))return;const z=n.events.length;let A=z,J,V;for(;A--;)if(n.events[A][0]==="exit"&&n.events[A][1].type==="chunkFlow"){if(J){V=n.events[A][1].end;break}J=!0}for(v(o),D=z;D<n.events.length;)n.events[D][1].end=Object.assign({},V),D++;rr(n.events,A+1,0,n.events.slice(z)),n.events.length=D}}function v(C){let M=r.length;for(;M-- >C;){const I=r[M];n.containerState=I[1],I[0].exit.call(n,t)}r.length=C}function k(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function j_(t,n,r){return nt(t,t.attempt(this.parser.constructs.document,n,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Jv(t){if(t===null||Ht(t)||b_(t))return 1;if(m_(t))return 2}function _p(t,n,r){const o=[];let i=-1;for(;++i<t.length;){const a=t[i].resolveAll;a&&!o.includes(a)&&(n=a(n,r),o.push(a))}return n}const jf={name:"attention",tokenize:k_,resolveAll:E_};function E_(t,n){let r=-1,o,i,a,l,c,u,d,f;for(;++r<t.length;)if(t[r][0]==="enter"&&t[r][1].type==="attentionSequence"&&t[r][1]._close){for(o=r;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&n.sliceSerialize(t[o][1]).charCodeAt(0)===n.sliceSerialize(t[r][1]).charCodeAt(0)){if((t[o][1]._close||t[r][1]._open)&&(t[r][1].end.offset-t[r][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[r][1].end.offset-t[r][1].start.offset)%3))continue;u=t[o][1].end.offset-t[o][1].start.offset>1&&t[r][1].end.offset-t[r][1].start.offset>1?2:1;const g=Object.assign({},t[o][1].end),b=Object.assign({},t[r][1].start);Xv(g,-u),Xv(b,u),l={type:u>1?"strongSequence":"emphasisSequence",start:g,end:Object.assign({},t[o][1].end)},c={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[r][1].start),end:b},a={type:u>1?"strongText":"emphasisText",start:Object.assign({},t[o][1].end),end:Object.assign({},t[r][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},c.end)},t[o][1].end=Object.assign({},l.start),t[r][1].start=Object.assign({},c.end),d=[],t[o][1].end.offset-t[o][1].start.offset&&(d=ln(d,[["enter",t[o][1],n],["exit",t[o][1],n]])),d=ln(d,[["enter",i,n],["enter",l,n],["exit",l,n],["enter",a,n]]),d=ln(d,_p(n.parser.constructs.insideSpan.null,t.slice(o+1,r),n)),d=ln(d,[["exit",a,n],["enter",c,n],["exit",c,n],["exit",i,n]]),t[r][1].end.offset-t[r][1].start.offset?(f=2,d=ln(d,[["enter",t[r][1],n],["exit",t[r][1],n]])):f=0,rr(t,o-1,r-o+3,d),r=o+d.length-f-2;break}}for(r=-1;++r<t.length;)t[r][1].type==="attentionSequence"&&(t[r][1].type="data");return t}function k_(t,n){const r=this.parser.constructs.attentionMarkers.null,o=this.previous,i=Jv(o);let a;return l;function l(u){return a=u,t.enter("attentionSequence"),c(u)}function c(u){if(u===a)return t.consume(u),c;const d=t.exit("attentionSequence"),f=Jv(u),g=!f||f===2&&i||r.includes(u),b=!i||i===2&&f||r.includes(o);return d._open=!!(a===42?g:g&&(i||!b)),d._close=!!(a===42?b:b&&(f||!g)),n(u)}}function Xv(t,n){t.column+=n,t.offset+=n,t._bufferIndex+=n}const O_={name:"autolink",tokenize:S_};function S_(t,n,r){let o=0;return i;function i(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(h){return Nn(h)?(t.consume(h),l):h===64?r(h):d(h)}function l(h){return h===43||h===45||h===46||Xt(h)?(o=1,c(h)):d(h)}function c(h){return h===58?(t.consume(h),o=0,u):(h===43||h===45||h===46||Xt(h))&&o++<32?(t.consume(h),c):(o=0,d(h))}function u(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),n):h===null||h===32||h===60||wf(h)?r(h):(t.consume(h),u)}function d(h){return h===64?(t.consume(h),f):p_(h)?(t.consume(h),d):r(h)}function f(h){return Xt(h)?g(h):r(h)}function g(h){return h===46?(t.consume(h),o=0,f):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),n):b(h)}function b(h){if((h===45||Xt(h))&&o++<63){const m=h===45?b:g;return t.consume(h),m}return r(h)}}const cs={tokenize:C_,partial:!0};function C_(t,n,r){return o;function o(a){return We(a)?nt(t,i,"linePrefix")(a):i(a)}function i(a){return a===null||De(a)?n(a):r(a)}}const nj={name:"blockQuote",tokenize:P_,continuation:{tokenize:I_},exit:D_};function P_(t,n,r){const o=this;return i;function i(l){if(l===62){const c=o.containerState;return c.open||(t.enter("blockQuote",{_container:!0}),c.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(l),t.exit("blockQuoteMarker"),a}return r(l)}function a(l){return We(l)?(t.enter("blockQuotePrefixWhitespace"),t.consume(l),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),n):(t.exit("blockQuotePrefix"),n(l))}}function I_(t,n,r){const o=this;return i;function i(l){return We(l)?nt(t,a,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):a(l)}function a(l){return t.attempt(nj,n,r)(l)}}function D_(t){t.exit("blockQuote")}const rj={name:"characterEscape",tokenize:T_};function T_(t,n,r){return o;function o(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return h_(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),n):r(a)}}const oj={name:"characterReference",tokenize:M_};function M_(t,n,r){const o=this;let i=0,a,l;return c;function c(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),u}function u(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),d):(t.enter("characterReferenceValue"),a=31,l=Xt,f(g))}function d(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,l=g_,f):(t.enter("characterReferenceValue"),a=7,l=xf,f(g))}function f(g){if(g===59&&i){const b=t.exit("characterReferenceValue");return l===Xt&&!Ap(o.sliceSerialize(b))?r(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),n)}return l(g)&&i++<a?(t.consume(g),f):r(g)}}const e0={tokenize:N_,partial:!0},t0={name:"codeFenced",tokenize:R_,concrete:!0};function R_(t,n,r){const o=this,i={tokenize:I,partial:!0};let a=0,l=0,c;return u;function u(D){return d(D)}function d(D){const z=o.events[o.events.length-1];return a=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,c=D,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),f(D)}function f(D){return D===c?(l++,t.consume(D),f):l<3?r(D):(t.exit("codeFencedFenceSequence"),We(D)?nt(t,g,"whitespace")(D):g(D))}function g(D){return D===null||De(D)?(t.exit("codeFencedFence"),o.interrupt?n(D):t.check(e0,y,M)(D)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),b(D))}function b(D){return D===null||De(D)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(D)):We(D)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),nt(t,h,"whitespace")(D)):D===96&&D===c?r(D):(t.consume(D),b)}function h(D){return D===null||De(D)?g(D):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),m(D))}function m(D){return D===null||De(D)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(D)):D===96&&D===c?r(D):(t.consume(D),m)}function y(D){return t.attempt(i,M,E)(D)}function E(D){return t.enter("lineEnding"),t.consume(D),t.exit("lineEnding"),v}function v(D){return a>0&&We(D)?nt(t,k,"linePrefix",a+1)(D):k(D)}function k(D){return D===null||De(D)?t.check(e0,y,M)(D):(t.enter("codeFlowValue"),C(D))}function C(D){return D===null||De(D)?(t.exit("codeFlowValue"),k(D)):(t.consume(D),C)}function M(D){return t.exit("codeFenced"),n(D)}function I(D,z,A){let J=0;return V;function V(B){return D.enter("lineEnding"),D.consume(B),D.exit("lineEnding"),F}function F(B){return D.enter("codeFencedFence"),We(B)?nt(D,L,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):L(B)}function L(B){return B===c?(D.enter("codeFencedFenceSequence"),_(B)):A(B)}function _(B){return B===c?(J++,D.consume(B),_):J>=l?(D.exit("codeFencedFenceSequence"),We(B)?nt(D,N,"whitespace")(B):N(B)):A(B)}function N(B){return B===null||De(B)?(D.exit("codeFencedFence"),z(B)):A(B)}}}function N_(t,n,r){const o=this;return i;function i(l){return l===null?r(l):(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a)}function a(l){return o.parser.lazy[o.now().line]?r(l):n(l)}}const mc={name:"codeIndented",tokenize:L_},F_={tokenize:A_,partial:!0};function L_(t,n,r){const o=this;return i;function i(d){return t.enter("codeIndented"),nt(t,a,"linePrefix",5)(d)}function a(d){const f=o.events[o.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(d):r(d)}function l(d){return d===null?u(d):De(d)?t.attempt(F_,l,u)(d):(t.enter("codeFlowValue"),c(d))}function c(d){return d===null||De(d)?(t.exit("codeFlowValue"),l(d)):(t.consume(d),c)}function u(d){return t.exit("codeIndented"),n(d)}}function A_(t,n,r){const o=this;return i;function i(l){return o.parser.lazy[o.now().line]?r(l):De(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),i):nt(t,a,"linePrefix",5)(l)}function a(l){const c=o.events[o.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):De(l)?i(l):r(l)}}const __={name:"codeText",tokenize:H_,resolve:$_,previous:z_};function $_(t){let n=t.length-4,r=3,o,i;if((t[r][1].type==="lineEnding"||t[r][1].type==="space")&&(t[n][1].type==="lineEnding"||t[n][1].type==="space")){for(o=r;++o<n;)if(t[o][1].type==="codeTextData"){t[r][1].type="codeTextPadding",t[n][1].type="codeTextPadding",r+=2,n-=2;break}}for(o=r-1,n++;++o<=n;)i===void 0?o!==n&&t[o][1].type!=="lineEnding"&&(i=o):(o===n||t[o][1].type==="lineEnding")&&(t[i][1].type="codeTextData",o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),n-=o-i-2,o=i+2),i=void 0);return t}function z_(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function H_(t,n,r){let o=0,i,a;return l;function l(g){return t.enter("codeText"),t.enter("codeTextSequence"),c(g)}function c(g){return g===96?(t.consume(g),o++,c):(t.exit("codeTextSequence"),u(g))}function u(g){return g===null?r(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),u):g===96?(a=t.enter("codeTextSequence"),i=0,f(g)):De(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),u):(t.enter("codeTextData"),d(g))}function d(g){return g===null||g===32||g===96||De(g)?(t.exit("codeTextData"),u(g)):(t.consume(g),d)}function f(g){return g===96?(t.consume(g),i++,f):i===o?(t.exit("codeTextSequence"),t.exit("codeText"),n(g)):(a.type="codeTextData",d(g))}}class B_{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,r){const o=r??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(n,o):n>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(n,r,o){const i=r||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return o&&hi(this.left,o),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),hi(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),hi(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const r=this.left.splice(n,Number.POSITIVE_INFINITY);hi(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);hi(this.left,r.reverse())}}}function hi(t,n){let r=0;if(n.length<1e4)t.push(...n);else for(;r<n.length;)t.push(...n.slice(r,r+1e4)),r+=1e4}function ij(t){const n={};let r=-1,o,i,a,l,c,u,d;const f=new B_(t);for(;++r<f.length;){for(;r in n;)r=n[r];if(o=f.get(r),r&&o[1].type==="chunkFlow"&&f.get(r-1)[1].type==="listItemPrefix"&&(u=o[1]._tokenizer.events,a=0,a<u.length&&u[a][1].type==="lineEndingBlank"&&(a+=2),a<u.length&&u[a][1].type==="content"))for(;++a<u.length&&u[a][1].type!=="content";)u[a][1].type==="chunkText"&&(u[a][1]._isInFirstContentOfListItem=!0,a++);if(o[0]==="enter")o[1].contentType&&(Object.assign(n,V_(f,r)),r=n[r],d=!0);else if(o[1]._container){for(a=r,i=void 0;a--&&(l=f.get(a),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=a);i&&(o[1].end=Object.assign({},f.get(i)[1].start),c=f.slice(i,r),c.unshift(o),f.splice(i,r-i+1,c))}}return rr(t,0,Number.POSITIVE_INFINITY,f.slice(0)),!d}function V_(t,n){const r=t.get(n)[1],o=t.get(n)[2];let i=n-1;const a=[],l=r._tokenizer||o.parser[r.contentType](r.start),c=l.events,u=[],d={};let f,g,b=-1,h=r,m=0,y=0;const E=[y];for(;h;){for(;t.get(++i)[1]!==h;);a.push(i),h._tokenizer||(f=o.sliceStream(h),h.next||f.push(null),g&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),g=h,h=h.next}for(h=r;++b<c.length;)c[b][0]==="exit"&&c[b-1][0]==="enter"&&c[b][1].type===c[b-1][1].type&&c[b][1].start.line!==c[b][1].end.line&&(y=b+1,E.push(y),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):E.pop(),b=E.length;b--;){const v=c.slice(E[b],E[b+1]),k=a.pop();u.push([k,k+v.length-1]),t.splice(k,2,v)}for(u.reverse(),b=-1;++b<u.length;)d[m+u[b][0]]=m+u[b][1],m+=u[b][1]-u[b][0]-1;return d}const W_={tokenize:Y_,resolve:q_},U_={tokenize:K_,partial:!0};function q_(t){return ij(t),t}function Y_(t,n){let r;return o;function o(c){return t.enter("content"),r=t.enter("chunkContent",{contentType:"content"}),i(c)}function i(c){return c===null?a(c):De(c)?t.check(U_,l,a)(c):(t.consume(c),i)}function a(c){return t.exit("chunkContent"),t.exit("content"),n(c)}function l(c){return t.consume(c),t.exit("chunkContent"),r.next=t.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,i}}function K_(t,n,r){const o=this;return i;function i(l){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),nt(t,a,"linePrefix")}function a(l){if(l===null||De(l))return r(l);const c=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):t.interrupt(o.parser.constructs.flow,r,n)(l)}}function aj(t,n,r,o,i,a,l,c,u){const d=u||Number.POSITIVE_INFINITY;let f=0;return g;function g(v){return v===60?(t.enter(o),t.enter(i),t.enter(a),t.consume(v),t.exit(a),b):v===null||v===32||v===41||wf(v)?r(v):(t.enter(o),t.enter(l),t.enter(c),t.enter("chunkString",{contentType:"string"}),y(v))}function b(v){return v===62?(t.enter(a),t.consume(v),t.exit(a),t.exit(i),t.exit(o),n):(t.enter(c),t.enter("chunkString",{contentType:"string"}),h(v))}function h(v){return v===62?(t.exit("chunkString"),t.exit(c),b(v)):v===null||v===60||De(v)?r(v):(t.consume(v),v===92?m:h)}function m(v){return v===60||v===62||v===92?(t.consume(v),h):h(v)}function y(v){return!f&&(v===null||v===41||Ht(v))?(t.exit("chunkString"),t.exit(c),t.exit(l),t.exit(o),n(v)):f<d&&v===40?(t.consume(v),f++,y):v===41?(t.consume(v),f--,y):v===null||v===32||v===40||wf(v)?r(v):(t.consume(v),v===92?E:y)}function E(v){return v===40||v===41||v===92?(t.consume(v),y):y(v)}}function lj(t,n,r,o,i,a){const l=this;let c=0,u;return d;function d(h){return t.enter(o),t.enter(i),t.consume(h),t.exit(i),t.enter(a),f}function f(h){return c>999||h===null||h===91||h===93&&!u||h===94&&!c&&"_hiddenFootnoteSupport"in l.parser.constructs?r(h):h===93?(t.exit(a),t.enter(i),t.consume(h),t.exit(i),t.exit(o),n):De(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),f):(t.enter("chunkString",{contentType:"string"}),g(h))}function g(h){return h===null||h===91||h===93||De(h)||c++>999?(t.exit("chunkString"),f(h)):(t.consume(h),u||(u=!We(h)),h===92?b:g)}function b(h){return h===91||h===92||h===93?(t.consume(h),c++,g):g(h)}}function sj(t,n,r,o,i,a){let l;return c;function c(b){return b===34||b===39||b===40?(t.enter(o),t.enter(i),t.consume(b),t.exit(i),l=b===40?41:b,u):r(b)}function u(b){return b===l?(t.enter(i),t.consume(b),t.exit(i),t.exit(o),n):(t.enter(a),d(b))}function d(b){return b===l?(t.exit(a),u(l)):b===null?r(b):De(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),nt(t,d,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===l||b===null||De(b)?(t.exit("chunkString"),d(b)):(t.consume(b),b===92?g:f)}function g(b){return b===l||b===92?(t.consume(b),f):f(b)}}function Ci(t,n){let r;return o;function o(i){return De(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),r=!0,o):We(i)?nt(t,o,r?"linePrefix":"lineSuffix")(i):n(i)}}const G_={name:"definition",tokenize:Z_},Q_={tokenize:J_,partial:!0};function Z_(t,n,r){const o=this;let i;return a;function a(h){return t.enter("definition"),l(h)}function l(h){return lj.call(o,t,c,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function c(h){return i=Do(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),u):r(h)}function u(h){return Ht(h)?Ci(t,d)(h):d(h)}function d(h){return aj(t,f,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return t.attempt(Q_,g,g)(h)}function g(h){return We(h)?nt(t,b,"whitespace")(h):b(h)}function b(h){return h===null||De(h)?(t.exit("definition"),o.parser.defined.push(i),n(h)):r(h)}}function J_(t,n,r){return o;function o(c){return Ht(c)?Ci(t,i)(c):r(c)}function i(c){return sj(t,a,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(c)}function a(c){return We(c)?nt(t,l,"whitespace")(c):l(c)}function l(c){return c===null||De(c)?n(c):r(c)}}const X_={name:"hardBreakEscape",tokenize:e$};function e$(t,n,r){return o;function o(a){return t.enter("hardBreakEscape"),t.consume(a),i}function i(a){return De(a)?(t.exit("hardBreakEscape"),n(a)):r(a)}}const t$={name:"headingAtx",tokenize:r$,resolve:n$};function n$(t,n){let r=t.length-2,o=3,i,a;return t[o][1].type==="whitespace"&&(o+=2),r-2>o&&t[r][1].type==="whitespace"&&(r-=2),t[r][1].type==="atxHeadingSequence"&&(o===r-1||r-4>o&&t[r-2][1].type==="whitespace")&&(r-=o+1===r?2:4),r>o&&(i={type:"atxHeadingText",start:t[o][1].start,end:t[r][1].end},a={type:"chunkText",start:t[o][1].start,end:t[r][1].end,contentType:"text"},rr(t,o,r-o+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])),t}function r$(t,n,r){let o=0;return i;function i(f){return t.enter("atxHeading"),a(f)}function a(f){return t.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&o++<6?(t.consume(f),l):f===null||Ht(f)?(t.exit("atxHeadingSequence"),c(f)):r(f)}function c(f){return f===35?(t.enter("atxHeadingSequence"),u(f)):f===null||De(f)?(t.exit("atxHeading"),n(f)):We(f)?nt(t,c,"whitespace")(f):(t.enter("atxHeadingText"),d(f))}function u(f){return f===35?(t.consume(f),u):(t.exit("atxHeadingSequence"),c(f))}function d(f){return f===null||f===35||Ht(f)?(t.exit("atxHeadingText"),c(f)):(t.consume(f),d)}}const o$=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],n0=["pre","script","style","textarea"],i$={name:"htmlFlow",tokenize:c$,resolveTo:s$,concrete:!0},a$={tokenize:d$,partial:!0},l$={tokenize:u$,partial:!0};function s$(t){let n=t.length;for(;n--&&!(t[n][0]==="enter"&&t[n][1].type==="htmlFlow"););return n>1&&t[n-2][1].type==="linePrefix"&&(t[n][1].start=t[n-2][1].start,t[n+1][1].start=t[n-2][1].start,t.splice(n-2,2)),t}function c$(t,n,r){const o=this;let i,a,l,c,u;return d;function d(T){return f(T)}function f(T){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(T),g}function g(T){return T===33?(t.consume(T),b):T===47?(t.consume(T),a=!0,y):T===63?(t.consume(T),i=3,o.interrupt?n:R):Nn(T)?(t.consume(T),l=String.fromCharCode(T),E):r(T)}function b(T){return T===45?(t.consume(T),i=2,h):T===91?(t.consume(T),i=5,c=0,m):Nn(T)?(t.consume(T),i=4,o.interrupt?n:R):r(T)}function h(T){return T===45?(t.consume(T),o.interrupt?n:R):r(T)}function m(T){const ie="CDATA[";return T===ie.charCodeAt(c++)?(t.consume(T),c===ie.length?o.interrupt?n:L:m):r(T)}function y(T){return Nn(T)?(t.consume(T),l=String.fromCharCode(T),E):r(T)}function E(T){if(T===null||T===47||T===62||Ht(T)){const ie=T===47,ye=l.toLowerCase();return!ie&&!a&&n0.includes(ye)?(i=1,o.interrupt?n(T):L(T)):o$.includes(l.toLowerCase())?(i=6,ie?(t.consume(T),v):o.interrupt?n(T):L(T)):(i=7,o.interrupt&&!o.parser.lazy[o.now().line]?r(T):a?k(T):C(T))}return T===45||Xt(T)?(t.consume(T),l+=String.fromCharCode(T),E):r(T)}function v(T){return T===62?(t.consume(T),o.interrupt?n:L):r(T)}function k(T){return We(T)?(t.consume(T),k):V(T)}function C(T){return T===47?(t.consume(T),V):T===58||T===95||Nn(T)?(t.consume(T),M):We(T)?(t.consume(T),C):V(T)}function M(T){return T===45||T===46||T===58||T===95||Xt(T)?(t.consume(T),M):I(T)}function I(T){return T===61?(t.consume(T),D):We(T)?(t.consume(T),I):C(T)}function D(T){return T===null||T===60||T===61||T===62||T===96?r(T):T===34||T===39?(t.consume(T),u=T,z):We(T)?(t.consume(T),D):A(T)}function z(T){return T===u?(t.consume(T),u=null,J):T===null||De(T)?r(T):(t.consume(T),z)}function A(T){return T===null||T===34||T===39||T===47||T===60||T===61||T===62||T===96||Ht(T)?I(T):(t.consume(T),A)}function J(T){return T===47||T===62||We(T)?C(T):r(T)}function V(T){return T===62?(t.consume(T),F):r(T)}function F(T){return T===null||De(T)?L(T):We(T)?(t.consume(T),F):r(T)}function L(T){return T===45&&i===2?(t.consume(T),H):T===60&&i===1?(t.consume(T),U):T===62&&i===4?(t.consume(T),ae):T===63&&i===3?(t.consume(T),R):T===93&&i===5?(t.consume(T),X):De(T)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(a$,se,_)(T)):T===null||De(T)?(t.exit("htmlFlowData"),_(T)):(t.consume(T),L)}function _(T){return t.check(l$,N,se)(T)}function N(T){return t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),B}function B(T){return T===null||De(T)?_(T):(t.enter("htmlFlowData"),L(T))}function H(T){return T===45?(t.consume(T),R):L(T)}function U(T){return T===47?(t.consume(T),l="",Q):L(T)}function Q(T){if(T===62){const ie=l.toLowerCase();return n0.includes(ie)?(t.consume(T),ae):L(T)}return Nn(T)&&l.length<8?(t.consume(T),l+=String.fromCharCode(T),Q):L(T)}function X(T){return T===93?(t.consume(T),R):L(T)}function R(T){return T===62?(t.consume(T),ae):T===45&&i===2?(t.consume(T),R):L(T)}function ae(T){return T===null||De(T)?(t.exit("htmlFlowData"),se(T)):(t.consume(T),ae)}function se(T){return t.exit("htmlFlow"),n(T)}}function u$(t,n,r){const o=this;return i;function i(l){return De(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a):r(l)}function a(l){return o.parser.lazy[o.now().line]?r(l):n(l)}}function d$(t,n,r){return o;function o(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(cs,n,r)}}const f$={name:"htmlText",tokenize:p$};function p$(t,n,r){const o=this;let i,a,l;return c;function c(R){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(R),u}function u(R){return R===33?(t.consume(R),d):R===47?(t.consume(R),I):R===63?(t.consume(R),C):Nn(R)?(t.consume(R),A):r(R)}function d(R){return R===45?(t.consume(R),f):R===91?(t.consume(R),a=0,m):Nn(R)?(t.consume(R),k):r(R)}function f(R){return R===45?(t.consume(R),h):r(R)}function g(R){return R===null?r(R):R===45?(t.consume(R),b):De(R)?(l=g,U(R)):(t.consume(R),g)}function b(R){return R===45?(t.consume(R),h):g(R)}function h(R){return R===62?H(R):R===45?b(R):g(R)}function m(R){const ae="CDATA[";return R===ae.charCodeAt(a++)?(t.consume(R),a===ae.length?y:m):r(R)}function y(R){return R===null?r(R):R===93?(t.consume(R),E):De(R)?(l=y,U(R)):(t.consume(R),y)}function E(R){return R===93?(t.consume(R),v):y(R)}function v(R){return R===62?H(R):R===93?(t.consume(R),v):y(R)}function k(R){return R===null||R===62?H(R):De(R)?(l=k,U(R)):(t.consume(R),k)}function C(R){return R===null?r(R):R===63?(t.consume(R),M):De(R)?(l=C,U(R)):(t.consume(R),C)}function M(R){return R===62?H(R):C(R)}function I(R){return Nn(R)?(t.consume(R),D):r(R)}function D(R){return R===45||Xt(R)?(t.consume(R),D):z(R)}function z(R){return De(R)?(l=z,U(R)):We(R)?(t.consume(R),z):H(R)}function A(R){return R===45||Xt(R)?(t.consume(R),A):R===47||R===62||Ht(R)?J(R):r(R)}function J(R){return R===47?(t.consume(R),H):R===58||R===95||Nn(R)?(t.consume(R),V):De(R)?(l=J,U(R)):We(R)?(t.consume(R),J):H(R)}function V(R){return R===45||R===46||R===58||R===95||Xt(R)?(t.consume(R),V):F(R)}function F(R){return R===61?(t.consume(R),L):De(R)?(l=F,U(R)):We(R)?(t.consume(R),F):J(R)}function L(R){return R===null||R===60||R===61||R===62||R===96?r(R):R===34||R===39?(t.consume(R),i=R,_):De(R)?(l=L,U(R)):We(R)?(t.consume(R),L):(t.consume(R),N)}function _(R){return R===i?(t.consume(R),i=void 0,B):R===null?r(R):De(R)?(l=_,U(R)):(t.consume(R),_)}function N(R){return R===null||R===34||R===39||R===60||R===61||R===96?r(R):R===47||R===62||Ht(R)?J(R):(t.consume(R),N)}function B(R){return R===47||R===62||Ht(R)?J(R):r(R)}function H(R){return R===62?(t.consume(R),t.exit("htmlTextData"),t.exit("htmlText"),n):r(R)}function U(R){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),Q}function Q(R){return We(R)?nt(t,X,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):X(R)}function X(R){return t.enter("htmlTextData"),l(R)}}const $p={name:"labelEnd",tokenize:y$,resolveTo:v$,resolveAll:b$},g$={tokenize:w$},h$={tokenize:x$},m$={tokenize:j$};function b$(t){let n=-1;for(;++n<t.length;){const r=t[n][1];(r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd")&&(t.splice(n+1,r.type==="labelImage"?4:2),r.type="data",n++)}return t}function v$(t,n){let r=t.length,o=0,i,a,l,c;for(;r--;)if(i=t[r][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;t[r][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(t[r][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=r,i.type!=="labelLink")){o=2;break}}else i.type==="labelEnd"&&(l=r);const u={type:t[a][1].type==="labelLink"?"link":"image",start:Object.assign({},t[a][1].start),end:Object.assign({},t[t.length-1][1].end)},d={type:"label",start:Object.assign({},t[a][1].start),end:Object.assign({},t[l][1].end)},f={type:"labelText",start:Object.assign({},t[a+o+2][1].end),end:Object.assign({},t[l-2][1].start)};return c=[["enter",u,n],["enter",d,n]],c=ln(c,t.slice(a+1,a+o+3)),c=ln(c,[["enter",f,n]]),c=ln(c,_p(n.parser.constructs.insideSpan.null,t.slice(a+o+4,l-3),n)),c=ln(c,[["exit",f,n],t[l-2],t[l-1],["exit",d,n]]),c=ln(c,t.slice(l+1)),c=ln(c,[["exit",u,n]]),rr(t,a,t.length,c),t}function y$(t,n,r){const o=this;let i=o.events.length,a,l;for(;i--;)if((o.events[i][1].type==="labelImage"||o.events[i][1].type==="labelLink")&&!o.events[i][1]._balanced){a=o.events[i][1];break}return c;function c(b){return a?a._inactive?g(b):(l=o.parser.defined.includes(Do(o.sliceSerialize({start:a.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(b),t.exit("labelMarker"),t.exit("labelEnd"),u):r(b)}function u(b){return b===40?t.attempt(g$,f,l?f:g)(b):b===91?t.attempt(h$,f,l?d:g)(b):l?f(b):g(b)}function d(b){return t.attempt(m$,f,g)(b)}function f(b){return n(b)}function g(b){return a._balanced=!0,r(b)}}function w$(t,n,r){return o;function o(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),i}function i(g){return Ht(g)?Ci(t,a)(g):a(g)}function a(g){return g===41?f(g):aj(t,l,c,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function l(g){return Ht(g)?Ci(t,u)(g):f(g)}function c(g){return r(g)}function u(g){return g===34||g===39||g===40?sj(t,d,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):f(g)}function d(g){return Ht(g)?Ci(t,f)(g):f(g)}function f(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),n):r(g)}}function x$(t,n,r){const o=this;return i;function i(c){return lj.call(o,t,a,l,"reference","referenceMarker","referenceString")(c)}function a(c){return o.parser.defined.includes(Do(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?n(c):r(c)}function l(c){return r(c)}}function j$(t,n,r){return o;function o(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),n):r(a)}}const E$={name:"labelStartImage",tokenize:k$,resolveAll:$p.resolveAll};function k$(t,n,r){const o=this;return i;function i(c){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(c),t.exit("labelImageMarker"),a}function a(c){return c===91?(t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelImage"),l):r(c)}function l(c){return c===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(c):n(c)}}const O$={name:"labelStartLink",tokenize:S$,resolveAll:$p.resolveAll};function S$(t,n,r){const o=this;return i;function i(l){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(l):n(l)}}const bc={name:"lineEnding",tokenize:C$};function C$(t,n){return r;function r(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),nt(t,n,"linePrefix")}}const Ba={name:"thematicBreak",tokenize:P$};function P$(t,n,r){let o=0,i;return a;function a(d){return t.enter("thematicBreak"),l(d)}function l(d){return i=d,c(d)}function c(d){return d===i?(t.enter("thematicBreakSequence"),u(d)):o>=3&&(d===null||De(d))?(t.exit("thematicBreak"),n(d)):r(d)}function u(d){return d===i?(t.consume(d),o++,u):(t.exit("thematicBreakSequence"),We(d)?nt(t,c,"whitespace")(d):c(d))}}const At={name:"list",tokenize:T$,continuation:{tokenize:M$},exit:N$},I$={tokenize:F$,partial:!0},D$={tokenize:R$,partial:!0};function T$(t,n,r){const o=this,i=o.events[o.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return c;function c(h){const m=o.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!o.containerState.marker||h===o.containerState.marker:xf(h)){if(o.containerState.type||(o.containerState.type=m,t.enter(m,{_container:!0})),m==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(Ba,r,d)(h):d(h);if(!o.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),u(h)}return r(h)}function u(h){return xf(h)&&++l<10?(t.consume(h),u):(!o.interrupt||l<2)&&(o.containerState.marker?h===o.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),d(h)):r(h)}function d(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||h,t.check(cs,o.interrupt?r:f,t.attempt(I$,b,g))}function f(h){return o.containerState.initialBlankLine=!0,a++,b(h)}function g(h){return We(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),b):r(h)}function b(h){return o.containerState.size=a+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,n(h)}}function M$(t,n,r){const o=this;return o.containerState._closeFlow=void 0,t.check(cs,i,a);function i(c){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,nt(t,n,"listItemIndent",o.containerState.size+1)(c)}function a(c){return o.containerState.furtherBlankLines||!We(c)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,l(c)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(D$,n,l)(c))}function l(c){return o.containerState._closeFlow=!0,o.interrupt=void 0,nt(t,t.attempt(At,n,r),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c)}}function R$(t,n,r){const o=this;return nt(t,i,"listItemIndent",o.containerState.size+1);function i(a){const l=o.events[o.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===o.containerState.size?n(a):r(a)}}function N$(t){t.exit(this.containerState.type)}function F$(t,n,r){const o=this;return nt(t,i,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const l=o.events[o.events.length-1];return!We(a)&&l&&l[1].type==="listItemPrefixWhitespace"?n(a):r(a)}}const r0={name:"setextUnderline",tokenize:A$,resolveTo:L$};function L$(t,n){let r=t.length,o,i,a;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){o=r;break}t[r][1].type==="paragraph"&&(i=r)}else t[r][1].type==="content"&&t.splice(r,1),!a&&t[r][1].type==="definition"&&(a=r);const l={type:"setextHeading",start:Object.assign({},t[i][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[i][1].type="setextHeadingText",a?(t.splice(i,0,["enter",l,n]),t.splice(a+1,0,["exit",t[o][1],n]),t[o][1].end=Object.assign({},t[a][1].end)):t[o][1]=l,t.push(["exit",l,n]),t}function A$(t,n,r){const o=this;let i;return a;function a(d){let f=o.events.length,g;for(;f--;)if(o.events[f][1].type!=="lineEnding"&&o.events[f][1].type!=="linePrefix"&&o.events[f][1].type!=="content"){g=o.events[f][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||g)?(t.enter("setextHeadingLine"),i=d,l(d)):r(d)}function l(d){return t.enter("setextHeadingLineSequence"),c(d)}function c(d){return d===i?(t.consume(d),c):(t.exit("setextHeadingLineSequence"),We(d)?nt(t,u,"lineSuffix")(d):u(d))}function u(d){return d===null||De(d)?(t.exit("setextHeadingLine"),n(d)):r(d)}}const _$={tokenize:$$};function $$(t){const n=this,r=t.attempt(cs,o,t.attempt(this.parser.constructs.flowInitial,i,nt(t,t.attempt(this.parser.constructs.flow,i,t.attempt(W_,i)),"linePrefix")));return r;function o(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),n.currentConstruct=void 0,r}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),n.currentConstruct=void 0,r}}const z$={resolveAll:uj()},H$=cj("string"),B$=cj("text");function cj(t){return{tokenize:n,resolveAll:uj(t==="text"?V$:void 0)};function n(r){const o=this,i=this.parser.constructs[t],a=r.attempt(i,l,c);return l;function l(f){return d(f)?a(f):c(f)}function c(f){if(f===null){r.consume(f);return}return r.enter("data"),r.consume(f),u}function u(f){return d(f)?(r.exit("data"),a(f)):(r.consume(f),u)}function d(f){if(f===null)return!0;const g=i[f];let b=-1;if(g)for(;++b<g.length;){const h=g[b];if(!h.previous||h.previous.call(o,o.previous))return!0}return!1}}}function uj(t){return n;function n(r,o){let i=-1,a;for(;++i<=r.length;)a===void 0?r[i]&&r[i][1].type==="data"&&(a=i,i++):(!r[i]||r[i][1].type!=="data")&&(i!==a+2&&(r[a][1].end=r[i-1][1].end,r.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(r,o):r}}function V$(t,n){let r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){const o=t[r-1][1],i=n.sliceStream(o);let a=i.length,l=-1,c=0,u;for(;a--;){const d=i[a];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)c++,l--;if(l)break;l=-1}else if(d===-2)u=!0,c++;else if(d!==-1){a++;break}}if(c){const d={type:r===t.length||u||c<2?"lineSuffix":"hardBreakTrailing",start:{line:o.end.line,column:o.end.column-c,offset:o.end.offset-c,_index:o.start._index+a,_bufferIndex:a?l:o.start._bufferIndex+l},end:Object.assign({},o.end)};o.end=Object.assign({},d.start),o.start.offset===o.end.offset?Object.assign(o,d):(t.splice(r,0,["enter",d,n],["exit",d,n]),r+=2)}r++}return t}function W$(t,n,r){let o=Object.assign(r?Object.assign({},r):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},a=[];let l=[],c=[];const u={consume:k,enter:C,exit:M,attempt:z(I),check:z(D),interrupt:z(D,{interrupt:!0})},d={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:h,sliceSerialize:b,now:m,defineSkip:y,write:g};let f=n.tokenize.call(d,u);return n.resolveAll&&a.push(n),d;function g(F){return l=ln(l,F),E(),l[l.length-1]!==null?[]:(A(n,0),d.events=_p(a,d.events,d),d.events)}function b(F,L){return q$(h(F),L)}function h(F){return U$(l,F)}function m(){const{line:F,column:L,offset:_,_index:N,_bufferIndex:B}=o;return{line:F,column:L,offset:_,_index:N,_bufferIndex:B}}function y(F){i[F.line]=F.column,V()}function E(){let F;for(;o._index<l.length;){const L=l[o._index];if(typeof L=="string")for(F=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===F&&o._bufferIndex<L.length;)v(L.charCodeAt(o._bufferIndex));else v(L)}}function v(F){f=f(F)}function k(F){De(F)?(o.line++,o.column=1,o.offset+=F===-3?2:1,V()):F!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===l[o._index].length&&(o._bufferIndex=-1,o._index++)),d.previous=F}function C(F,L){const _=L||{};return _.type=F,_.start=m(),d.events.push(["enter",_,d]),c.push(_),_}function M(F){const L=c.pop();return L.end=m(),d.events.push(["exit",L,d]),L}function I(F,L){A(F,L.from)}function D(F,L){L.restore()}function z(F,L){return _;function _(N,B,H){let U,Q,X,R;return Array.isArray(N)?se(N):"tokenize"in N?se([N]):ae(N);function ae(Pe){return $e;function $e(oe){const me=oe!==null&&Pe[oe],be=oe!==null&&Pe.null,He=[...Array.isArray(me)?me:me?[me]:[],...Array.isArray(be)?be:be?[be]:[]];return se(He)(oe)}}function se(Pe){return U=Pe,Q=0,Pe.length===0?H:T(Pe[Q])}function T(Pe){return $e;function $e(oe){return R=J(),X=Pe,Pe.partial||(d.currentConstruct=Pe),Pe.name&&d.parser.constructs.disable.null.includes(Pe.name)?ye():Pe.tokenize.call(L?Object.assign(Object.create(d),L):d,u,ie,ye)(oe)}}function ie(Pe){return F(X,R),B}function ye(Pe){return R.restore(),++Q<U.length?T(U[Q]):H}}}function A(F,L){F.resolveAll&&!a.includes(F)&&a.push(F),F.resolve&&rr(d.events,L,d.events.length-L,F.resolve(d.events.slice(L),d)),F.resolveTo&&(d.events=F.resolveTo(d.events,d))}function J(){const F=m(),L=d.previous,_=d.currentConstruct,N=d.events.length,B=Array.from(c);return{restore:H,from:N};function H(){o=F,d.previous=L,d.currentConstruct=_,d.events.length=N,c=B,V()}}function V(){o.line in i&&o.column<2&&(o.column=i[o.line],o.offset+=i[o.line]-1)}}function U$(t,n){const r=n.start._index,o=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let l;if(r===i)l=[t[r].slice(o,a)];else{if(l=t.slice(r,i),o>-1){const c=l[0];typeof c=="string"?l[0]=c.slice(o):l.shift()}a>0&&l.push(t[i].slice(0,a))}return l}function q$(t,n){let r=-1;const o=[];let i;for(;++r<t.length;){const a=t[r];let l;if(typeof a=="string")l=a;else switch(a){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=n?" ":"	";break}case-1:{if(!n&&i)continue;l=" ";break}default:l=String.fromCharCode(a)}i=a===-2,o.push(l)}return o.join("")}const Y$={42:At,43:At,45:At,48:At,49:At,50:At,51:At,52:At,53:At,54:At,55:At,56:At,57:At,62:nj},K$={91:G_},G$={[-2]:mc,[-1]:mc,32:mc},Q$={35:t$,42:Ba,45:[r0,Ba],60:i$,61:r0,95:Ba,96:t0,126:t0},Z$={38:oj,92:rj},J$={[-5]:bc,[-4]:bc,[-3]:bc,33:E$,38:oj,42:jf,60:[O_,f$],91:O$,92:[X_,rj],93:$p,95:jf,96:__},X$={null:[jf,z$]},ez={null:[42,95]},tz={null:[]},nz=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ez,contentInitial:K$,disable:tz,document:Y$,flow:Q$,flowInitial:G$,insideSpan:X$,string:Z$,text:J$},Symbol.toStringTag,{value:"Module"}));function rz(t){const r=u_([nz,...(t||{}).extensions||[]]),o={defined:[],lazy:{},constructs:r,content:i(v_),document:i(w_),flow:i(_$),string:i(H$),text:i(B$)};return o;function i(a){return l;function l(c){return W$(o,a,c)}}}function oz(t){for(;!ij(t););return t}const o0=/[\0\t\n\r]/g;function iz(){let t=1,n="",r=!0,o;return i;function i(a,l,c){const u=[];let d,f,g,b,h;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(l||void 0).decode(a)),g=0,n="",r&&(a.charCodeAt(0)===65279&&g++,r=void 0);g<a.length;){if(o0.lastIndex=g,d=o0.exec(a),b=d&&d.index!==void 0?d.index:a.length,h=a.charCodeAt(b),!d){n=a.slice(g);break}if(h===10&&g===b&&o)u.push(-3),o=void 0;else switch(o&&(u.push(-5),o=void 0),g<b&&(u.push(a.slice(g,b)),t+=b-g),h){case 0:{u.push(65533),t++;break}case 9:{for(f=Math.ceil(t/4)*4,u.push(-2);t++<f;)u.push(-1);break}case 10:{u.push(-4),t=1;break}default:o=!0,t=1}g=b+1}return c&&(o&&u.push(-5),n&&u.push(n),u.push(null)),u}}const az=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function lz(t){return t.replace(az,sz)}function sz(t,n,r){if(n)return n;if(r.charCodeAt(0)===35){const i=r.charCodeAt(1),a=i===120||i===88;return tj(r.slice(a?2:1),a?16:10)}return Ap(r)||t}const dj={}.hasOwnProperty;function cz(t,n,r){return typeof n!="string"&&(r=n,n=void 0),uz(r)(oz(rz(r).document().write(iz()(t,n,!0))))}function uz(t){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(ar),autolinkProtocol:J,autolinkEmail:J,atxHeading:a(Wn),blockQuote:a(be),characterEscape:J,characterReference:J,codeFenced:a(He),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:a(He,l),codeText:a(it,l),codeTextData:J,data:J,codeFlowValue:J,definition:a(Ze),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:a(Pt),hardBreakEscape:a(fo),hardBreakTrailing:a(fo),htmlFlow:a(ir,l),htmlFlowData:J,htmlText:a(ir,l),htmlTextData:J,image:a(ii),label:l,link:a(ar),listItem:a(pn),listItemValue:b,listOrdered:a(lr,g),listUnordered:a(lr),paragraph:a(ai),reference:T,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:a(Wn),strong:a(li),thematicBreak:a(Un)},exit:{atxHeading:u(),atxHeadingSequence:I,autolink:u(),autolinkEmail:me,autolinkProtocol:oe,blockQuote:u(),characterEscapeValue:V,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:Pe,characterReference:$e,codeFenced:u(E),codeFencedFence:y,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:V,codeIndented:u(v),codeText:u(B),codeTextData:V,data:V,definition:u(),definitionDestinationString:M,definitionLabelString:k,definitionTitleString:C,emphasis:u(),hardBreakEscape:u(L),hardBreakTrailing:u(L),htmlFlow:u(_),htmlFlowData:V,htmlText:u(N),htmlTextData:V,image:u(U),label:X,labelText:Q,lineEnding:F,link:u(H),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ie,resourceDestinationString:R,resourceTitleString:ae,resource:se,setextHeading:u(A),setextHeadingLineSequence:z,setextHeadingText:D,strong:u(),thematicBreak:u()}};fj(n,(t||{}).mdastExtensions||[]);const r={};return o;function o(ee){let ue={type:"root",children:[]};const Ie={stack:[ue],tokenStack:[],config:n,enter:c,exit:d,buffer:l,resume:f,data:r},Ae=[];let ze=-1;for(;++ze<ee.length;)if(ee[ze][1].type==="listOrdered"||ee[ze][1].type==="listUnordered")if(ee[ze][0]==="enter")Ae.push(ze);else{const It=Ae.pop();ze=i(ee,It,ze)}for(ze=-1;++ze<ee.length;){const It=n[ee[ze][0]];dj.call(It,ee[ze][1].type)&&It[ee[ze][1].type].call(Object.assign({sliceSerialize:ee[ze][2].sliceSerialize},Ie),ee[ze][1])}if(Ie.tokenStack.length>0){const It=Ie.tokenStack[Ie.tokenStack.length-1];(It[1]||i0).call(Ie,void 0,It[0])}for(ue.position={start:ur(ee.length>0?ee[0][1].start:{line:1,column:1,offset:0}),end:ur(ee.length>0?ee[ee.length-2][1].end:{line:1,column:1,offset:0})},ze=-1;++ze<n.transforms.length;)ue=n.transforms[ze](ue)||ue;return ue}function i(ee,ue,Ie){let Ae=ue-1,ze=-1,It=!1,gn,Dt,qn,Yn;for(;++Ae<=Ie;){const je=ee[Ae];switch(je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{je[0]==="enter"?ze++:ze--,Yn=void 0;break}case"lineEndingBlank":{je[0]==="enter"&&(gn&&!Yn&&!ze&&!qn&&(qn=Ae),Yn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Yn=void 0}if(!ze&&je[0]==="enter"&&je[1].type==="listItemPrefix"||ze===-1&&je[0]==="exit"&&(je[1].type==="listUnordered"||je[1].type==="listOrdered")){if(gn){let Lt=Ae;for(Dt=void 0;Lt--;){const Et=ee[Lt];if(Et[1].type==="lineEnding"||Et[1].type==="lineEndingBlank"){if(Et[0]==="exit")continue;Dt&&(ee[Dt][1].type="lineEndingBlank",It=!0),Et[1].type="lineEnding",Dt=Lt}else if(!(Et[1].type==="linePrefix"||Et[1].type==="blockQuotePrefix"||Et[1].type==="blockQuotePrefixWhitespace"||Et[1].type==="blockQuoteMarker"||Et[1].type==="listItemIndent"))break}qn&&(!Dt||qn<Dt)&&(gn._spread=!0),gn.end=Object.assign({},Dt?ee[Dt][1].start:je[1].end),ee.splice(Dt||Ae,0,["exit",gn,je[2]]),Ae++,Ie++}if(je[1].type==="listItemPrefix"){const Lt={type:"listItem",_spread:!1,start:Object.assign({},je[1].start),end:void 0};gn=Lt,ee.splice(Ae,0,["enter",Lt,je[2]]),Ae++,Ie++,qn=void 0,Yn=!0}}}return ee[ue][1]._spread=It,Ie}function a(ee,ue){return Ie;function Ie(Ae){c.call(this,ee(Ae),Ae),ue&&ue.call(this,Ae)}}function l(){this.stack.push({type:"fragment",children:[]})}function c(ee,ue,Ie){this.stack[this.stack.length-1].children.push(ee),this.stack.push(ee),this.tokenStack.push([ue,Ie]),ee.position={start:ur(ue.start),end:void 0}}function u(ee){return ue;function ue(Ie){ee&&ee.call(this,Ie),d.call(this,Ie)}}function d(ee,ue){const Ie=this.stack.pop(),Ae=this.tokenStack.pop();if(Ae)Ae[0].type!==ee.type&&(ue?ue.call(this,ee,Ae[0]):(Ae[1]||i0).call(this,ee,Ae[0]));else throw new Error("Cannot close `"+ee.type+"` ("+Si({start:ee.start,end:ee.end})+"): it’s not open");Ie.position.end=ur(ee.end)}function f(){return s_(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(ee){if(this.data.expectingFirstListItemValue){const ue=this.stack[this.stack.length-2];ue.start=Number.parseInt(this.sliceSerialize(ee),10),this.data.expectingFirstListItemValue=void 0}}function h(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.lang=ee}function m(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.meta=ee}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.value=ee.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.value=ee.replace(/(\r?\n|\r)$/g,"")}function k(ee){const ue=this.resume(),Ie=this.stack[this.stack.length-1];Ie.label=ue,Ie.identifier=Do(this.sliceSerialize(ee)).toLowerCase()}function C(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.title=ee}function M(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.url=ee}function I(ee){const ue=this.stack[this.stack.length-1];if(!ue.depth){const Ie=this.sliceSerialize(ee).length;ue.depth=Ie}}function D(){this.data.setextHeadingSlurpLineEnding=!0}function z(ee){const ue=this.stack[this.stack.length-1];ue.depth=this.sliceSerialize(ee).codePointAt(0)===61?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function J(ee){const Ie=this.stack[this.stack.length-1].children;let Ae=Ie[Ie.length-1];(!Ae||Ae.type!=="text")&&(Ae=Mr(),Ae.position={start:ur(ee.start),end:void 0},Ie.push(Ae)),this.stack.push(Ae)}function V(ee){const ue=this.stack.pop();ue.value+=this.sliceSerialize(ee),ue.position.end=ur(ee.end)}function F(ee){const ue=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Ie=ue.children[ue.children.length-1];Ie.position.end=ur(ee.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(ue.type)&&(J.call(this,ee),V.call(this,ee))}function L(){this.data.atHardBreak=!0}function _(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.value=ee}function N(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.value=ee}function B(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.value=ee}function H(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const ue=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=ue,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function U(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const ue=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=ue,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function Q(ee){const ue=this.sliceSerialize(ee),Ie=this.stack[this.stack.length-2];Ie.label=lz(ue),Ie.identifier=Do(ue).toLowerCase()}function X(){const ee=this.stack[this.stack.length-1],ue=this.resume(),Ie=this.stack[this.stack.length-1];if(this.data.inReference=!0,Ie.type==="link"){const Ae=ee.children;Ie.children=Ae}else Ie.alt=ue}function R(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.url=ee}function ae(){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.title=ee}function se(){this.data.inReference=void 0}function T(){this.data.referenceType="collapsed"}function ie(ee){const ue=this.resume(),Ie=this.stack[this.stack.length-1];Ie.label=ue,Ie.identifier=Do(this.sliceSerialize(ee)).toLowerCase(),this.data.referenceType="full"}function ye(ee){this.data.characterReferenceType=ee.type}function Pe(ee){const ue=this.sliceSerialize(ee),Ie=this.data.characterReferenceType;let Ae;Ie?(Ae=tj(ue,Ie==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ae=Ap(ue);const ze=this.stack[this.stack.length-1];ze.value+=Ae}function $e(ee){const ue=this.stack.pop();ue.position.end=ur(ee.end)}function oe(ee){V.call(this,ee);const ue=this.stack[this.stack.length-1];ue.url=this.sliceSerialize(ee)}function me(ee){V.call(this,ee);const ue=this.stack[this.stack.length-1];ue.url="mailto:"+this.sliceSerialize(ee)}function be(){return{type:"blockquote",children:[]}}function He(){return{type:"code",lang:null,meta:null,value:""}}function it(){return{type:"inlineCode",value:""}}function Ze(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Pt(){return{type:"emphasis",children:[]}}function Wn(){return{type:"heading",depth:0,children:[]}}function fo(){return{type:"break"}}function ir(){return{type:"html",value:""}}function ii(){return{type:"image",title:null,url:"",alt:null}}function ar(){return{type:"link",title:null,url:"",children:[]}}function lr(ee){return{type:"list",ordered:ee.type==="listOrdered",start:null,spread:ee._spread,children:[]}}function pn(ee){return{type:"listItem",spread:ee._spread,checked:null,children:[]}}function ai(){return{type:"paragraph",children:[]}}function li(){return{type:"strong",children:[]}}function Mr(){return{type:"text",value:""}}function Un(){return{type:"thematicBreak"}}}function ur(t){return{line:t.line,column:t.column,offset:t.offset}}function fj(t,n){let r=-1;for(;++r<n.length;){const o=n[r];Array.isArray(o)?fj(t,o):dz(t,o)}}function dz(t,n){let r;for(r in n)if(dj.call(n,r))switch(r){case"canContainEols":{const o=n[r];o&&t[r].push(...o);break}case"transforms":{const o=n[r];o&&t[r].push(...o);break}case"enter":case"exit":{const o=n[r];o&&Object.assign(t[r],o);break}}}function i0(t,n){throw t?new Error("Cannot close `"+t.type+"` ("+Si({start:t.start,end:t.end})+"): a different token (`"+n.type+"`, "+Si({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Si({start:n.start,end:n.end})+") is still open")}function fz(t){const n=this;n.parser=r;function r(o){return cz(o,{...n.data("settings"),...t,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function pz(t,n){const r={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(n),!0)};return t.patch(n,r),t.applyData(n,r)}function gz(t,n){const r={type:"element",tagName:"br",properties:{},children:[]};return t.patch(n,r),[t.applyData(n,r),{type:"text",value:`
`}]}function hz(t,n){const r=n.value?n.value+`
`:"",o={};n.lang&&(o.className=["language-"+n.lang]);let i={type:"element",tagName:"code",properties:o,children:[{type:"text",value:r}]};return n.meta&&(i.data={meta:n.meta}),t.patch(n,i),i=t.applyData(n,i),i={type:"element",tagName:"pre",properties:{},children:[i]},t.patch(n,i),i}function mz(t,n){const r={type:"element",tagName:"del",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function bz(t,n){const r={type:"element",tagName:"em",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function vz(t,n){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(n.identifier).toUpperCase(),i=oi(o.toLowerCase()),a=t.footnoteOrder.indexOf(o);let l,c=t.footnoteCounts.get(o);c===void 0?(c=0,t.footnoteOrder.push(o),l=t.footnoteOrder.length):l=a+1,c+=1,t.footnoteCounts.set(o,c);const u={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+i,id:r+"fnref-"+i+(c>1?"-"+c:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};t.patch(n,u);const d={type:"element",tagName:"sup",properties:{},children:[u]};return t.patch(n,d),t.applyData(n,d)}function yz(t,n){const r={type:"element",tagName:"h"+n.depth,properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function wz(t,n){if(t.options.allowDangerousHtml){const r={type:"raw",value:n.value};return t.patch(n,r),t.applyData(n,r)}}function pj(t,n){const r=n.referenceType;let o="]";if(r==="collapsed"?o+="[]":r==="full"&&(o+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+o}];const i=t.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=o:i.push({type:"text",value:o}),i}function xz(t,n){const r=String(n.identifier).toUpperCase(),o=t.definitionById.get(r);if(!o)return pj(t,n);const i={src:oi(o.url||""),alt:n.alt};o.title!==null&&o.title!==void 0&&(i.title=o.title);const a={type:"element",tagName:"img",properties:i,children:[]};return t.patch(n,a),t.applyData(n,a)}function jz(t,n){const r={src:oi(n.url)};n.alt!==null&&n.alt!==void 0&&(r.alt=n.alt),n.title!==null&&n.title!==void 0&&(r.title=n.title);const o={type:"element",tagName:"img",properties:r,children:[]};return t.patch(n,o),t.applyData(n,o)}function Ez(t,n){const r={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};t.patch(n,r);const o={type:"element",tagName:"code",properties:{},children:[r]};return t.patch(n,o),t.applyData(n,o)}function kz(t,n){const r=String(n.identifier).toUpperCase(),o=t.definitionById.get(r);if(!o)return pj(t,n);const i={href:oi(o.url||"")};o.title!==null&&o.title!==void 0&&(i.title=o.title);const a={type:"element",tagName:"a",properties:i,children:t.all(n)};return t.patch(n,a),t.applyData(n,a)}function Oz(t,n){const r={href:oi(n.url)};n.title!==null&&n.title!==void 0&&(r.title=n.title);const o={type:"element",tagName:"a",properties:r,children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function Sz(t,n,r){const o=t.all(n),i=r?Cz(r):gj(n),a={},l=[];if(typeof n.checked=="boolean"){const f=o[0];let g;f&&f.type==="element"&&f.tagName==="p"?g=f:(g={type:"element",tagName:"p",properties:{},children:[]},o.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let c=-1;for(;++c<o.length;){const f=o[c];(i||c!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?l.push(...f.children):l.push(f)}const u=o[o.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:a,children:l};return t.patch(n,d),t.applyData(n,d)}function Cz(t){let n=!1;if(t.type==="list"){n=t.spread||!1;const r=t.children;let o=-1;for(;!n&&++o<r.length;)n=gj(r[o])}return n}function gj(t){const n=t.spread;return n??t.children.length>1}function Pz(t,n){const r={},o=t.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(r.start=n.start);++i<o.length;){const l=o[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:r,children:t.wrap(o,!0)};return t.patch(n,a),t.applyData(n,a)}function Iz(t,n){const r={type:"element",tagName:"p",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function Dz(t,n){const r={type:"root",children:t.wrap(t.all(n))};return t.patch(n,r),t.applyData(n,r)}function Tz(t,n){const r={type:"element",tagName:"strong",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function Mz(t,n){const r=t.all(n),o=r.shift(),i=[];if(o){const l={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(n.children[0],l),i.push(l)}if(r.length>0){const l={type:"element",tagName:"tbody",properties:{},children:t.wrap(r,!0)},c=Rp(n.children[1]),u=K2(n.children[n.children.length-1]);c&&u&&(l.position={start:c,end:u}),i.push(l)}const a={type:"element",tagName:"table",properties:{},children:t.wrap(i,!0)};return t.patch(n,a),t.applyData(n,a)}function Rz(t,n,r){const o=r?r.children:void 0,a=(o?o.indexOf(n):1)===0?"th":"td",l=r&&r.type==="table"?r.align:void 0,c=l?l.length:n.children.length;let u=-1;const d=[];for(;++u<c;){const g=n.children[u],b={},h=l?l[u]:void 0;h&&(b.align=h);let m={type:"element",tagName:a,properties:b,children:[]};g&&(m.children=t.all(g),t.patch(g,m),m=t.applyData(g,m)),d.push(m)}const f={type:"element",tagName:"tr",properties:{},children:t.wrap(d,!0)};return t.patch(n,f),t.applyData(n,f)}function Nz(t,n){const r={type:"element",tagName:"td",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}const a0=9,l0=32;function Fz(t){const n=String(t),r=/\r?\n|\r/g;let o=r.exec(n),i=0;const a=[];for(;o;)a.push(s0(n.slice(i,o.index),i>0,!0),o[0]),i=o.index+o[0].length,o=r.exec(n);return a.push(s0(n.slice(i),i>0,!1)),a.join("")}function s0(t,n,r){let o=0,i=t.length;if(n){let a=t.codePointAt(o);for(;a===a0||a===l0;)o++,a=t.codePointAt(o)}if(r){let a=t.codePointAt(i-1);for(;a===a0||a===l0;)i--,a=t.codePointAt(i-1)}return i>o?t.slice(o,i):""}function Lz(t,n){const r={type:"text",value:Fz(String(n.value))};return t.patch(n,r),t.applyData(n,r)}function Az(t,n){const r={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(n,r),t.applyData(n,r)}const _z={blockquote:pz,break:gz,code:hz,delete:mz,emphasis:bz,footnoteReference:vz,heading:yz,html:wz,imageReference:xz,image:jz,inlineCode:Ez,linkReference:kz,link:Oz,listItem:Sz,list:Pz,paragraph:Iz,root:Dz,strong:Tz,table:Mz,tableCell:Nz,tableRow:Rz,text:Lz,thematicBreak:Az,toml:Da,yaml:Da,definition:Da,footnoteDefinition:Da};function Da(){}const hj=-1,us=0,Cl=1,Pl=2,zp=3,Hp=4,Bp=5,Vp=6,mj=7,bj=8,c0=typeof self=="object"?self:globalThis,$z=(t,n)=>{const r=(i,a)=>(t.set(a,i),i),o=i=>{if(t.has(i))return t.get(i);const[a,l]=n[i];switch(a){case us:case hj:return r(l,i);case Cl:{const c=r([],i);for(const u of l)c.push(o(u));return c}case Pl:{const c=r({},i);for(const[u,d]of l)c[o(u)]=o(d);return c}case zp:return r(new Date(l),i);case Hp:{const{source:c,flags:u}=l;return r(new RegExp(c,u),i)}case Bp:{const c=r(new Map,i);for(const[u,d]of l)c.set(o(u),o(d));return c}case Vp:{const c=r(new Set,i);for(const u of l)c.add(o(u));return c}case mj:{const{name:c,message:u}=l;return r(new c0[c](u),i)}case bj:return r(BigInt(l),i);case"BigInt":return r(Object(BigInt(l)),i)}return r(new c0[a](l),i)};return o},u0=t=>$z(new Map,t)(0),ho="",{toString:zz}={},{keys:Hz}=Object,mi=t=>{const n=typeof t;if(n!=="object"||!t)return[us,n];const r=zz.call(t).slice(8,-1);switch(r){case"Array":return[Cl,ho];case"Object":return[Pl,ho];case"Date":return[zp,ho];case"RegExp":return[Hp,ho];case"Map":return[Bp,ho];case"Set":return[Vp,ho]}return r.includes("Array")?[Cl,r]:r.includes("Error")?[mj,r]:[Pl,r]},Ta=([t,n])=>t===us&&(n==="function"||n==="symbol"),Bz=(t,n,r,o)=>{const i=(l,c)=>{const u=o.push(l)-1;return r.set(c,u),u},a=l=>{if(r.has(l))return r.get(l);let[c,u]=mi(l);switch(c){case us:{let f=l;switch(u){case"bigint":c=bj,f=l.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+u);f=null;break;case"undefined":return i([hj],l)}return i([c,f],l)}case Cl:{if(u)return i([u,[...l]],l);const f=[],g=i([c,f],l);for(const b of l)f.push(a(b));return g}case Pl:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(n&&"toJSON"in l)return a(l.toJSON());const f=[],g=i([c,f],l);for(const b of Hz(l))(t||!Ta(mi(l[b])))&&f.push([a(b),a(l[b])]);return g}case zp:return i([c,l.toISOString()],l);case Hp:{const{source:f,flags:g}=l;return i([c,{source:f,flags:g}],l)}case Bp:{const f=[],g=i([c,f],l);for(const[b,h]of l)(t||!(Ta(mi(b))||Ta(mi(h))))&&f.push([a(b),a(h)]);return g}case Vp:{const f=[],g=i([c,f],l);for(const b of l)(t||!Ta(mi(b)))&&f.push(a(b));return g}}const{message:d}=l;return i([c,{name:u,message:d}],l)};return a},d0=(t,{json:n,lossy:r}={})=>{const o=[];return Bz(!(n||r),!!n,new Map,o)(t),o},Il=typeof structuredClone=="function"?(t,n)=>n&&("json"in n||"lossy"in n)?u0(d0(t,n)):structuredClone(t):(t,n)=>u0(d0(t,n));function Vz(t,n){const r=[{type:"text",value:"↩"}];return n>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),r}function Wz(t,n){return"Back to reference "+(t+1)+(n>1?"-"+n:"")}function Uz(t){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=t.options.footnoteBackContent||Vz,o=t.options.footnoteBackLabel||Wz,i=t.options.footnoteLabel||"Footnotes",a=t.options.footnoteLabelTagName||"h2",l=t.options.footnoteLabelProperties||{className:["sr-only"]},c=[];let u=-1;for(;++u<t.footnoteOrder.length;){const d=t.footnoteById.get(t.footnoteOrder[u]);if(!d)continue;const f=t.all(d),g=String(d.identifier).toUpperCase(),b=oi(g.toLowerCase());let h=0;const m=[],y=t.footnoteCounts.get(g);for(;y!==void 0&&++h<=y;){m.length>0&&m.push({type:"text",value:" "});let k=typeof r=="string"?r:r(u,h);typeof k=="string"&&(k={type:"text",value:k}),m.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+b+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(u,h),className:["data-footnote-backref"]},children:Array.isArray(k)?k:[k]})}const E=f[f.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const k=E.children[E.children.length-1];k&&k.type==="text"?k.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...m)}else f.push(...m);const v={type:"element",tagName:"li",properties:{id:n+"fn-"+b},children:t.wrap(f,!0)};t.patch(d,v),c.push(v)}if(c.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Il(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(c,!0)},{type:"text",value:`
`}]}}const vj=function(t){if(t==null)return Gz;if(typeof t=="function")return ds(t);if(typeof t=="object")return Array.isArray(t)?qz(t):Yz(t);if(typeof t=="string")return Kz(t);throw new Error("Expected function, string, or object as test")};function qz(t){const n=[];let r=-1;for(;++r<t.length;)n[r]=vj(t[r]);return ds(o);function o(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function Yz(t){const n=t;return ds(r);function r(o){const i=o;let a;for(a in t)if(i[a]!==n[a])return!1;return!0}}function Kz(t){return ds(n);function n(r){return r&&r.type===t}}function ds(t){return n;function n(r,o,i){return!!(Qz(r)&&t.call(this,r,typeof o=="number"?o:void 0,i||void 0))}}function Gz(){return!0}function Qz(t){return t!==null&&typeof t=="object"&&"type"in t}const yj=[],Zz=!0,f0=!1,Jz="skip";function Xz(t,n,r,o){let i;typeof n=="function"&&typeof r!="function"?(o=r,r=n):i=n;const a=vj(i),l=o?-1:1;c(t,void 0,[])();function c(u,d,f){const g=u&&typeof u=="object"?u:{};if(typeof g.type=="string"){const h=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return b;function b(){let h=yj,m,y,E;if((!n||a(u,d,f[f.length-1]||void 0))&&(h=eH(r(u,f)),h[0]===f0))return h;if("children"in u&&u.children){const v=u;if(v.children&&h[0]!==Jz)for(y=(o?v.children.length:-1)+l,E=f.concat(v);y>-1&&y<v.children.length;){const k=v.children[y];if(m=c(k,y,E)(),m[0]===f0)return m;y=typeof m[1]=="number"?m[1]:y+l}}return h}}}function eH(t){return Array.isArray(t)?t:typeof t=="number"?[Zz,t]:t==null?yj:[t]}function wj(t,n,r,o){let i,a,l;typeof n=="function"&&typeof r!="function"?(a=void 0,l=n,i=r):(a=n,l=r,i=o),Xz(t,a,c,i);function c(u,d){const f=d[d.length-1],g=f?f.children.indexOf(u):void 0;return l(u,g,f)}}const Ef={}.hasOwnProperty,tH={};function nH(t,n){const r=n||tH,o=new Map,i=new Map,a=new Map,l={..._z,...r.handlers},c={all:d,applyData:oH,definitionById:o,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:l,one:u,options:r,patch:rH,wrap:aH};return wj(t,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const g=f.type==="definition"?o:i,b=String(f.identifier).toUpperCase();g.has(b)||g.set(b,f)}}),c;function u(f,g){const b=f.type,h=c.handlers[b];if(Ef.call(c.handlers,b)&&h)return h(c,f,g);if(c.options.passThrough&&c.options.passThrough.includes(b)){if("children"in f){const{children:y,...E}=f,v=Il(E);return v.children=c.all(f),v}return Il(f)}return(c.options.unknownHandler||iH)(c,f,g)}function d(f){const g=[];if("children"in f){const b=f.children;let h=-1;for(;++h<b.length;){const m=c.one(b[h],f);if(m){if(h&&b[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=p0(m.value)),!Array.isArray(m)&&m.type==="element")){const y=m.children[0];y&&y.type==="text"&&(y.value=p0(y.value))}Array.isArray(m)?g.push(...m):g.push(m)}}}return g}}function rH(t,n){t.position&&(n.position=_4(t))}function oH(t,n){let r=n;if(t&&t.data){const o=t.data.hName,i=t.data.hChildren,a=t.data.hProperties;if(typeof o=="string")if(r.type==="element")r.tagName=o;else{const l="children"in r?r.children:[r];r={type:"element",tagName:o,properties:{},children:l}}r.type==="element"&&a&&Object.assign(r.properties,Il(a)),"children"in r&&r.children&&i!==null&&i!==void 0&&(r.children=i)}return r}function iH(t,n){const r=n.data||{},o="value"in n&&!(Ef.call(r,"hProperties")||Ef.call(r,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function aH(t,n){const r=[];let o=-1;for(n&&r.push({type:"text",value:`
`});++o<t.length;)o&&r.push({type:"text",value:`
`}),r.push(t[o]);return n&&t.length>0&&r.push({type:"text",value:`
`}),r}function p0(t){let n=0,r=t.charCodeAt(n);for(;r===9||r===32;)n++,r=t.charCodeAt(n);return t.slice(n)}function g0(t,n){const r=nH(t,n),o=r.one(t,void 0),i=Uz(r),a=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function lH(t,n){return t&&"run"in t?async function(r,o){const i=g0(r,{file:o,...n});await t.run(i,o)}:function(r,o){return g0(r,{file:o,...t||n})}}function h0(t){if(t)throw t}var Va=Object.prototype.hasOwnProperty,xj=Object.prototype.toString,m0=Object.defineProperty,b0=Object.getOwnPropertyDescriptor,v0=function(n){return typeof Array.isArray=="function"?Array.isArray(n):xj.call(n)==="[object Array]"},y0=function(n){if(!n||xj.call(n)!=="[object Object]")return!1;var r=Va.call(n,"constructor"),o=n.constructor&&n.constructor.prototype&&Va.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!r&&!o)return!1;var i;for(i in n);return typeof i>"u"||Va.call(n,i)},w0=function(n,r){m0&&r.name==="__proto__"?m0(n,r.name,{enumerable:!0,configurable:!0,value:r.newValue,writable:!0}):n[r.name]=r.newValue},x0=function(n,r){if(r==="__proto__")if(Va.call(n,r)){if(b0)return b0(n,r).value}else return;return n[r]},sH=function t(){var n,r,o,i,a,l,c=arguments[0],u=1,d=arguments.length,f=!1;for(typeof c=="boolean"&&(f=c,c=arguments[1]||{},u=2),(c==null||typeof c!="object"&&typeof c!="function")&&(c={});u<d;++u)if(n=arguments[u],n!=null)for(r in n)o=x0(c,r),i=x0(n,r),c!==i&&(f&&i&&(y0(i)||(a=v0(i)))?(a?(a=!1,l=o&&v0(o)?o:[]):l=o&&y0(o)?o:{},w0(c,{name:r,newValue:t(f,l,i)})):typeof i<"u"&&w0(c,{name:r,newValue:i}));return c};const vc=Tl(sH);function kf(t){if(typeof t!="object"||t===null)return!1;const n=Object.getPrototypeOf(t);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function cH(){const t=[],n={run:r,use:o};return n;function r(...i){let a=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);c(null,...i);function c(u,...d){const f=t[++a];let g=-1;if(u){l(u);return}for(;++g<i.length;)(d[g]===null||d[g]===void 0)&&(d[g]=i[g]);i=d,f?uH(f,c)(...d):l(null,...d)}}function o(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return t.push(i),n}}function uH(t,n){let r;return o;function o(...l){const c=t.length>l.length;let u;c&&l.push(i);try{u=t.apply(this,l)}catch(d){const f=d;if(c&&r)throw f;return i(f)}c||(u&&u.then&&typeof u.then=="function"?u.then(a,i):u instanceof Error?i(u):a(u))}function i(l,...c){r||(r=!0,n(l,...c))}function a(l){i(null,l)}}const Cn={basename:dH,dirname:fH,extname:pH,join:gH,sep:"/"};function dH(t,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');sa(t);let r=0,o=-1,i=t.length,a;if(n===void 0||n.length===0||n.length>t.length){for(;i--;)if(t.codePointAt(i)===47){if(a){r=i+1;break}}else o<0&&(a=!0,o=i+1);return o<0?"":t.slice(r,o)}if(n===t)return"";let l=-1,c=n.length-1;for(;i--;)if(t.codePointAt(i)===47){if(a){r=i+1;break}}else l<0&&(a=!0,l=i+1),c>-1&&(t.codePointAt(i)===n.codePointAt(c--)?c<0&&(o=i):(c=-1,o=l));return r===o?o=l:o<0&&(o=t.length),t.slice(r,o)}function fH(t){if(sa(t),t.length===0)return".";let n=-1,r=t.length,o;for(;--r;)if(t.codePointAt(r)===47){if(o){n=r;break}}else o||(o=!0);return n<0?t.codePointAt(0)===47?"/":".":n===1&&t.codePointAt(0)===47?"//":t.slice(0,n)}function pH(t){sa(t);let n=t.length,r=-1,o=0,i=-1,a=0,l;for(;n--;){const c=t.codePointAt(n);if(c===47){if(l){o=n+1;break}continue}r<0&&(l=!0,r=n+1),c===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||r<0||a===0||a===1&&i===r-1&&i===o+1?"":t.slice(i,r)}function gH(...t){let n=-1,r;for(;++n<t.length;)sa(t[n]),t[n]&&(r=r===void 0?t[n]:r+"/"+t[n]);return r===void 0?".":hH(r)}function hH(t){sa(t);const n=t.codePointAt(0)===47;let r=mH(t,!n);return r.length===0&&!n&&(r="."),r.length>0&&t.codePointAt(t.length-1)===47&&(r+="/"),n?"/"+r:r}function mH(t,n){let r="",o=0,i=-1,a=0,l=-1,c,u;for(;++l<=t.length;){if(l<t.length)c=t.codePointAt(l);else{if(c===47)break;c=47}if(c===47){if(!(i===l-1||a===1))if(i!==l-1&&a===2){if(r.length<2||o!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(u=r.lastIndexOf("/"),u!==r.length-1){u<0?(r="",o=0):(r=r.slice(0,u),o=r.length-1-r.lastIndexOf("/")),i=l,a=0;continue}}else if(r.length>0){r="",o=0,i=l,a=0;continue}}n&&(r=r.length>0?r+"/..":"..",o=2)}else r.length>0?r+="/"+t.slice(i+1,l):r=t.slice(i+1,l),o=l-i-1;i=l,a=0}else c===46&&a>-1?a++:a=-1}return r}function sa(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const bH={cwd:vH};function vH(){return"/"}function Of(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function yH(t){if(typeof t=="string")t=new URL(t);else if(!Of(t)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(t.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return wH(t)}function wH(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const n=t.pathname;let r=-1;for(;++r<n.length;)if(n.codePointAt(r)===37&&n.codePointAt(r+1)===50){const o=n.codePointAt(r+2);if(o===70||o===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const yc=["history","path","basename","stem","extname","dirname"];class jj{constructor(n){let r;n?Of(n)?r={path:n}:typeof n=="string"||xH(n)?r={value:n}:r=n:r={},this.cwd="cwd"in r?"":bH.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<yc.length;){const a=yc[o];a in r&&r[a]!==void 0&&r[a]!==null&&(this[a]=a==="history"?[...r[a]]:r[a])}let i;for(i in r)yc.includes(i)||(this[i]=r[i])}get basename(){return typeof this.path=="string"?Cn.basename(this.path):void 0}set basename(n){xc(n,"basename"),wc(n,"basename"),this.path=Cn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Cn.dirname(this.path):void 0}set dirname(n){j0(this.basename,"dirname"),this.path=Cn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Cn.extname(this.path):void 0}set extname(n){if(wc(n,"extname"),j0(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Cn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Of(n)&&(n=yH(n)),xc(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Cn.basename(this.path,this.extname):void 0}set stem(n){xc(n,"stem"),wc(n,"stem"),this.path=Cn.join(this.dirname||"",n+(this.extname||""))}fail(n,r,o){const i=this.message(n,r,o);throw i.fatal=!0,i}info(n,r,o){const i=this.message(n,r,o);return i.fatal=void 0,i}message(n,r,o){const i=new Ct(n,r,o);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function wc(t,n){if(t&&t.includes(Cn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Cn.sep+"`")}function xc(t,n){if(!t)throw new Error("`"+n+"` cannot be empty")}function j0(t,n){if(!t)throw new Error("Setting `"+n+"` requires `path` to be set too")}function xH(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const jH=function(t){const o=this.constructor.prototype,i=o[t],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,o),a},EH={}.hasOwnProperty;class Wp extends jH{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=cH()}copy(){const n=new Wp;let r=-1;for(;++r<this.attachers.length;){const o=this.attachers[r];n.use(...o)}return n.data(vc(!0,{},this.namespace)),n}data(n,r){return typeof n=="string"?arguments.length===2?(kc("data",this.frozen),this.namespace[n]=r,this):EH.call(this.namespace,n)&&this.namespace[n]||void 0:n?(kc("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const i=r.call(n,...o);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const r=Ma(n),o=this.parser||this.Parser;return jc("parse",o),o(String(r),r)}process(n,r){const o=this;return this.freeze(),jc("process",this.parser||this.Parser),Ec("process",this.compiler||this.Compiler),r?i(void 0,r):new Promise(i);function i(a,l){const c=Ma(n),u=o.parse(c);o.run(u,c,function(f,g,b){if(f||!g||!b)return d(f);const h=g,m=o.stringify(h,b);SH(m)?b.value=m:b.result=m,d(f,b)});function d(f,g){f||!g?l(f):a?a(g):r(void 0,g)}}}processSync(n){let r=!1,o;return this.freeze(),jc("processSync",this.parser||this.Parser),Ec("processSync",this.compiler||this.Compiler),this.process(n,i),k0("processSync","process",r),o;function i(a,l){r=!0,h0(a),o=l}}run(n,r,o){E0(n),this.freeze();const i=this.transformers;return!o&&typeof r=="function"&&(o=r,r=void 0),o?a(void 0,o):new Promise(a);function a(l,c){const u=Ma(r);i.run(n,u,d);function d(f,g,b){const h=g||n;f?c(f):l?l(h):o(void 0,h,b)}}}runSync(n,r){let o=!1,i;return this.run(n,r,a),k0("runSync","run",o),i;function a(l,c){h0(l),i=c,o=!0}}stringify(n,r){this.freeze();const o=Ma(r),i=this.compiler||this.Compiler;return Ec("stringify",i),E0(n),i(n,o)}use(n,...r){const o=this.attachers,i=this.namespace;if(kc("use",this.frozen),n!=null)if(typeof n=="function")u(n,r);else if(typeof n=="object")Array.isArray(n)?c(n):l(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(d){if(typeof d=="function")u(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[f,...g]=d;u(f,g)}else l(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function l(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(d.plugins),d.settings&&(i.settings=vc(!0,i.settings,d.settings))}function c(d){let f=-1;if(d!=null)if(Array.isArray(d))for(;++f<d.length;){const g=d[f];a(g)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function u(d,f){let g=-1,b=-1;for(;++g<o.length;)if(o[g][0]===d){b=g;break}if(b===-1)o.push([d,...f]);else if(f.length>0){let[h,...m]=f;const y=o[b][1];kf(y)&&kf(h)&&(h=vc(!0,y,h)),o[b]=[d,h,...m]}}}}const kH=new Wp().freeze();function jc(t,n){if(typeof n!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Ec(t,n){if(typeof n!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function kc(t,n){if(n)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function E0(t){if(!kf(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function k0(t,n,r){if(!r)throw new Error("`"+t+"` finished async. Use `"+n+"` instead")}function Ma(t){return OH(t)?t:new jj(t)}function OH(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function SH(t){return typeof t=="string"||CH(t)}function CH(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const PH="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",O0=[],S0={allowDangerousHtml:!0},IH=/^(https?|ircs?|mailto|xmpp)$/i,DH=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function TH(t){const n=t.allowedElements,r=t.allowElement,o=t.children||"",i=t.className,a=t.components,l=t.disallowedElements,c=t.rehypePlugins||O0,u=t.remarkPlugins||O0,d=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...S0}:S0,f=t.skipHtml,g=t.unwrapDisallowed,b=t.urlTransform||MH,h=kH().use(fz).use(u).use(lH,d).use(c),m=new jj;typeof o=="string"&&(m.value=o);for(const k of DH)Object.hasOwn(t,k.from)&&(""+k.from+(k.to?"use `"+k.to+"` instead":"remove it")+PH+k.id,void 0);const y=h.parse(m);let E=h.runSync(y,m);return i&&(E={type:"element",tagName:"div",properties:{className:i},children:E.type==="root"?E.children:[E]}),wj(E,v),W4(E,{Fragment:G.Fragment,components:a,ignoreInvalidStyle:!0,jsx:G.jsx,jsxs:G.jsxs,passKeys:!0,passNode:!0});function v(k,C,M){if(k.type==="raw"&&M&&typeof C=="number")return f?M.children.splice(C,1):M.children[C]={type:"text",value:k.value},C;if(k.type==="element"){let I;for(I in hc)if(Object.hasOwn(hc,I)&&Object.hasOwn(k.properties,I)){const D=k.properties[I],z=hc[I];(z===null||z.includes(k.tagName))&&(k.properties[I]=b(String(D||""),I,k))}}if(k.type==="element"){let I=n?!n.includes(k.tagName):l?l.includes(k.tagName):!1;if(!I&&r&&typeof C=="number"&&(I=!r(k,C,M)),I&&M&&typeof C=="number")return g&&k.children?M.children.splice(C,1,...k.children):M.children.splice(C,1),C}}}function MH(t){const n=t.indexOf(":"),r=t.indexOf("?"),o=t.indexOf("#"),i=t.indexOf("/");return n<0||i>-1&&n>i||r>-1&&n>r||o>-1&&n>o||IH.test(t.slice(0,n))?t:""}const RH=({violation:t})=>t!=null&&t.object_identity?G.jsxs(Ln,{direction:"vertical",gap:"2",children:[Object.keys(t.object_identity).map(n=>G.jsx("div",{className:"whitespace-nowrap",children:G.jsx(gf,{name:n,value:Xo(t.object_identity[n])})},n)),t.severity&&G.jsx("div",{className:"whitespace-nowrap",children:G.jsx(gf,{name:"severity",value:t.severity})})]}):null,qe=1,Ej=2,kj=4,wt=8,Sf=16,Ra=32,Fn=64,Cf={a:{content:qe|wt,self:!1,type:qe|wt|Ra|Fn},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:qe|wt,void:!0},body:{content:qe|Ej|kj|wt|Sf|Ra|Fn},button:{content:wt,type:qe|wt|Ra|Fn},caption:{content:qe,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:qe|Ra|Fn},dd:{content:qe,parent:["dl"]},dl:{children:["dt","dd"],type:qe},dt:{content:qe,invalid:["footer","header"],parent:["dl"]},figcaption:{content:qe,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:qe,void:!0},img:{void:!0},li:{content:qe,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:qe},picture:{children:["source","img"],type:qe|wt|Sf},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:wt,parent:["ruby","rtc"]},rtc:{content:wt,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:wt,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:qe},tbody:{parent:["table"],children:["tr"]},td:{content:qe,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:qe,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:qe},video:{children:["track","source"]},wbr:{type:qe|wt,void:!0}};function uo(t){return n=>{Cf[n]={...t,...Cf[n]}}}["address","main","div","figure","p","pre"].forEach(uo({content:qe,type:qe|Fn}));["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(uo({content:wt,type:qe|wt|Fn}));["p","pre"].forEach(uo({content:wt,type:qe|Fn}));["s","small","span","del","ins"].forEach(uo({content:wt,type:qe|wt}));["article","aside","footer","header","nav","section","blockquote"].forEach(uo({content:qe,type:qe|Ej|Fn}));["h1","h2","h3","h4","h5","h6"].forEach(uo({content:wt,type:qe|kj|Fn}));["audio","canvas","iframe","img","video"].forEach(uo({type:qe|wt|Sf|Fn}));const Pf=Object.freeze(Cf),NH=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],FH=Object.keys(Pf).filter(t=>t!=="canvas"&&t!=="iframe"),Xe=1,LH=2,wi=3,vo=4,Oj=5,C0=Object.freeze({alt:Xe,cite:Xe,class:Xe,colspan:wi,controls:vo,datetime:Xe,default:vo,disabled:vo,dir:Xe,height:Xe,href:Xe,id:Xe,kind:Xe,label:Xe,lang:Xe,loading:Xe,loop:vo,media:Xe,muted:vo,poster:Xe,rel:Xe,role:Xe,rowspan:wi,scope:Xe,sizes:Xe,span:wi,start:wi,style:Oj,src:Xe,srclang:Xe,srcset:Xe,tabindex:Xe,target:Xe,title:Xe,type:Xe,width:Xe}),AH=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex"});function Dl(){return Dl=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Dl.apply(this,arguments)}function Sj({attributes:t={},className:n,children:r=null,selfClose:o=!1,tagName:i}){const a=i;return o?S.createElement(a,Dl({className:n},t)):S.createElement(a,Dl({className:n},t),r)}class _H{attribute(n,r){return r}node(n,r){return r}}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var $H=/["'&<>]/,zH=HH;function HH(t){var n=""+t,r=$H.exec(n);if(!r)return n;var o,i="",a=0,l=0;for(a=r.index;a<n.length;a++){switch(n.charCodeAt(a)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}l!==a&&(i+=n.substring(l,a)),l=a+1,i+=o}return l!==a?i+n.substring(l,a):i}const BH=Tl(zH);function Qn(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}const VH=/(url|image|image-set)\(/i;class WH extends _H{attribute(n,r){return n==="style"&&Object.keys(r).forEach(o=>{String(r[o]).match(VH)&&delete r[o]}),r}}const P0=1,UH=3,qH=/^<(!doctype|(html|head|body)(\s|>))/i,YH=/^(aria-|data-|\w+:)/iu,KH=/{{{(\w+)\/?}}}/;function GH(){if(!(typeof window>"u"||typeof document>"u"))return document.implementation.createHTMLDocument("Interweave")}class Cj{constructor(n,r={},o=[],i=[]){var a;Qn(this,"allowed",void 0),Qn(this,"banned",void 0),Qn(this,"blocked",void 0),Qn(this,"container",void 0),Qn(this,"content",[]),Qn(this,"props",void 0),Qn(this,"matchers",void 0),Qn(this,"filters",void 0),Qn(this,"keyIndex",void 0),this.props=r,this.matchers=o,this.filters=[...i,new WH],this.keyIndex=-1,this.container=this.createContainer(n||""),this.allowed=new Set((a=r.allowList)!==null&&a!==void 0?a:FH),this.banned=new Set(NH),this.blocked=new Set(r.blockList)}applyAttributeFilters(n,r){return this.filters.reduce((o,i)=>o!==null&&typeof i.attribute=="function"?i.attribute(n,o):o,r)}applyNodeFilters(n,r){return this.filters.reduce((o,i)=>o!==null&&typeof i.node=="function"?i.node(n,o):o,r)}applyMatchers(n,r){const o={},{props:i}=this;let a=n,l=0,c=null;return this.matchers.forEach(u=>{const d=u.asTag().toLowerCase(),f=this.getTagConfig(d);if(i[u.inverseName]||!this.isTagAllowed(d)||!this.canRenderChild(r,f))return;let g="";for(;a&&(c=u.match(a));){const{index:b,length:h,match:m,valid:y,void:E,...v}=c,k=u.propName+String(l);b>0&&(g+=a.slice(0,b)),y?(g+=E?`{{{${k}/}}}`:`{{{${k}}}}${m}{{{/${k}}}}`,this.keyIndex+=1,l+=1,o[k]={children:m,matcher:u,props:{...i,...v,key:this.keyIndex}}):g+=m,u.greedy?(a=g+a.slice(b+h),g=""):a=a.slice(b+(h||m.length))}u.greedy||(a=g+a)}),l===0?n:this.replaceTokens(a,o)}canRenderChild(n,r){return!n.tagName||!r.tagName||n.void?!1:n.children.length>0?n.children.includes(r.tagName):n.invalid.length>0&&n.invalid.includes(r.tagName)?!1:r.parent.length>0?r.parent.includes(n.tagName):!n.self&&n.tagName===r.tagName?!1:!!(n&&n.content&r.type)}convertLineBreaks(n){const{noHtml:r,disableLineBreaks:o}=this.props;if(r||o||n.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return n;let i=n.replace(/\r\n/g,`
`);return i=i.replace(/\n{3,}/g,`


`),i=i.replace(/\n/g,"<br/>"),i}createContainer(n){var r;const i=(typeof global<"u"&&global.INTERWEAVE_SSR_POLYFILL||GH)();if(!i)return;const a=(r=this.props.containerTagName)!==null&&r!==void 0?r:"body",l=a==="body"||a==="fragment"?i.body:i.createElement(a);return n.match(qH)||(l.innerHTML=this.convertLineBreaks(this.props.escapeHtml?BH(n):n)),l}extractAttributes(n){const{allowAttributes:r}=this.props,o={};let i=0;return n.nodeType!==P0||!n.attributes||([...n.attributes].forEach(a=>{const{name:l,value:c}=a,u=l.toLowerCase(),d=C0[u]||C0[l];if(!this.isSafe(n)||!u.match(YH)&&(!r&&(!d||d===LH)||u.startsWith("on")||c.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))return;let f=u==="style"?this.extractStyleAttribute(n):c;d===vo?f=!0:d===wi?f=Number.parseFloat(String(f)):d!==Oj&&(f=String(f)),o[AH[u]||u]=this.applyAttributeFilters(u,f),i+=1}),i===0)?null:o}extractStyleAttribute(n){const r={};return Array.from(n.style).forEach(o=>{const i=n.style[o];(typeof i=="string"||typeof i=="number")&&(r[o.replace(/-([a-z])/g,(a,l)=>String(l).toUpperCase())]=i)}),r}getTagConfig(n){const r={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return Pf[n]?{...r,...Pf[n],tagName:n}:r}isSafe(n){if(typeof HTMLAnchorElement<"u"&&n instanceof HTMLAnchorElement){const r=n.getAttribute("href");if(r!=null&&r.startsWith("#"))return!0;const o=n.protocol.toLowerCase();return o===":"||o==="http:"||o==="https:"||o==="mailto:"||o==="tel:"}return!0}isTagAllowed(n){return this.banned.has(n)||this.blocked.has(n)?!1:this.props.allowElements||this.allowed.has(n)}parse(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]}parseNode(n,r){const{noHtml:o,noHtmlExceptMatchers:i,allowElements:a,transform:l,transformOnlyAllowList:c}=this.props;let u=[],d="";return[...n.childNodes].forEach(f=>{if(f.nodeType===P0){const b=f.nodeName.toLowerCase(),h=this.getTagConfig(b);d&&(u.push(d),d="");const m=this.applyNodeFilters(b,f);if(!m)return;let y;if(l&&!(c&&!this.isTagAllowed(b))){this.keyIndex+=1;const E=this.keyIndex;y=this.parseNode(m,h);const v=l(m,y,h);if(v===null)return;if(typeof v<"u"){u.push(S.cloneElement(v,{key:E}));return}this.keyIndex=E-1}if(this.banned.has(b))return;if(!(o||i&&b!=="br")&&this.isTagAllowed(b)&&(a||this.canRenderChild(r,h))){var g;this.keyIndex+=1;const E=this.extractAttributes(m),v={tagName:b};E&&(v.attributes=E),h.void&&(v.selfClose=h.void),u.push(S.createElement(Sj,{...v,key:this.keyIndex},(g=y)!==null&&g!==void 0?g:this.parseNode(m,h)))}else u=[...u,...this.parseNode(m,h.tagName?h:r)]}else if(f.nodeType===UH){const b=o&&!i?f.textContent:this.applyMatchers(f.textContent||"",r);Array.isArray(b)?u=[...u,...b]:d+=b}}),d&&u.push(d),u}replaceTokens(n,r){if(!n.includes("{{{"))return n;const o=[];let i=n,a=null;for(;a=i.match(KH);){const[l,c]=a,u=a.index,d=l.includes("/");u>0&&(o.push(i.slice(0,u)),i=i.slice(u));const{children:f,matcher:g,props:b}=r[c];let h;if(d)h=l.length,o.push(g.createElement(f,b));else{const m=i.match(new RegExp(`{{{/${c}}}}`));h=m.index+m[0].length,o.push(g.createElement(this.replaceTokens(i.slice(l.length,m.index),r),b))}i=i.slice(h)}return i.length>0&&o.push(i),o.length===0?"":o.length===1&&typeof o[0]=="string"?o[0]:o}}function QH(t){var n;const{attributes:r,className:o,containerTagName:i,content:a,emptyContent:l,parsedContent:c,tagName:u,noWrap:d}=t,f=(n=i??u)!==null&&n!==void 0?n:"span",g=f==="fragment"?!0:d;let b;if(c)b=c;else{const h=new Cj(a??"",t).parse();h.length>0&&(b=h)}return b||(b=l),g?S.createElement(S.Fragment,null,b):S.createElement(Sj,{attributes:r,className:o,tagName:f},b)}function ZH(t){const{attributes:n,className:r,content:o="",disableFilters:i=!1,disableMatchers:a=!1,emptyContent:l=null,filters:c=[],matchers:u=[],onAfterParse:d=null,onBeforeParse:f=null,tagName:g="span",noWrap:b=!1,...h}=t,m=a?[]:u,y=i?[]:c,E=f?[f]:[],v=d?[d]:[];m.forEach(I=>{I.onBeforeParse&&E.push(I.onBeforeParse.bind(I)),I.onAfterParse&&v.push(I.onAfterParse.bind(I))});const k=E.reduce((I,D)=>D(I,t),o??""),C=new Cj(k,h,m,y),M=v.reduce((I,D)=>D(I,t),C.parse());return S.createElement(QH,{attributes:n,className:r,containerTagName:t.containerTagName,emptyContent:l,noWrap:b,parsedContent:M.length===0?void 0:M,tagName:g})}const JH=({show:t,maxHeight:n=300,children:r})=>{const[i,a]=S.useState(!1),l=S.useRef(),c=S.useRef();return S.useLayoutEffect(()=>{let u;return t?a(!0):u=setTimeout(()=>a(!1),300),()=>clearTimeout(u)},[t]),S.useLayoutEffect(()=>{t&&l.current&&c.current&&(l.current.style.maxHeight="1000px")},[i]),i?G.jsx("div",{ref:l,className:"transition-all overflow-y-auto overflow-x-hidden ease-in-out duration-300",style:{maxHeight:t?n:0},children:G.jsx("div",{ref:c,children:r})}):null},XH=/\u003c([^\u003e]+)\u003e/g,I0=3,D0=t=>G.jsx(ZH,{content:t.replaceAll(XH,"<span class='bg-theme-accent/5 border rounded border-theme-accent/25 px-1 py-0.5'>$1</span>")}),eB=({violation:t})=>{var o,i,a;const[n,r]=S.useState(!1);return G.jsxs(G.Fragment,{children:[G.jsxs("div",{children:[t.kind," ",G.jsx("strong",{children:D0(t.name)})," in namespace ",t.namespace,":"," ",D0(t.message)]}),((o=t==null?void 0:t.instances)==null?void 0:o.length)>I0?G.jsx(JH,{show:n,maxHeight:!1,children:G.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-2",children:t.instances.map((l,c)=>G.jsxs("div",{className:"text-sm text-theme-light",children:[l.cluster,":",l.name]},c))})}):G.jsx("div",{className:"flex flex-wrap gap-2",children:t.instances.map((l,c)=>G.jsxs("div",{className:"text-sm text-theme-light",children:[l.cluster,":",l.name]},c))}),((i=t==null?void 0:t.instances)==null?void 0:i.length)>I0&&G.jsx("a",{onClick:l=>{l.preventDefault(),r(!n)},href:"#",children:n?"Hide occurrences":`Show occurrences (${(a=t.instances)==null?void 0:a.length})`})]})},tB=()=>{const t=GL(),n=S.useMemo(()=>t?t.constraints.reduce((i,a)=>(i.push({type:"doc",title:a.name,severity:a.metadata.severity,data:a.metadata.docstring}),a.violation_groups.forEach(l=>{i.push({...l.pattern,instances:l.instances})}),i),[]):null,[t]),{scrollListItems:r,iterator:o}=t4(n,{loadingObject:G.jsx(Ur,{children:G.jsx(Zt,{colSpan:2,children:G.jsx("span",{children:"Loading ..."})})}),refFunction:i=>G.jsx(Ur,{children:G.jsx(Zt,{colSpan:2,className:"border-b-0 py-0",children:G.jsx("span",{ref:i})})})});return G.jsx(G.Fragment,{children:(r==null?void 0:r.length)>0?G.jsx(K1,{cellVerticalAlignment:"top",gridColumnTemplate:"min-content 2fr",children:o.map((i,a)=>G.jsx(Ur,{children:(i==null?void 0:i.type)==="doc"?G.jsx(Zt,{colSpan:2,children:G.jsx(Zy,{className:"bg-theme-accent/10 border-theme-accent p-5",children:G.jsxs(Ln,{distribution:"start",gap:"3",children:[G.jsx(A2,{severities:[i.severity]}),G.jsxs("div",{className:"info-box text-theme-high",children:[G.jsx("h1",{className:"mb-4 mt-0 text-2xl",children:RL(i.title)}),i.data?G.jsx(TH,{urlTransform:l=>l.replace(/^\((.+)\)$/,"$1"),children:i.data}):i.severity==="debug"&&"This violation group is currently in a draft state, undergoing development and refinement."]})]})})}):G.jsxs(G.Fragment,{children:[G.jsx(Zt,{children:G.jsx(RH,{violation:i})}),G.jsx(Zt,{children:G.jsx(eB,{violation:i})})]})},a))}):G.jsx(Ur,{children:G.jsx(Zt,{colSpan:2,children:G.jsx("span",{children:"No violations found."})})})})},nB=()=>{const t=kp(),{setDetailsViolationGroupKind:n}=ls(),[r,o]=p.useState(!1);return p.useLayoutEffect(()=>{o(!1)},[t]),p.useEffect(()=>{t&&o(!0)},[t]),G.jsx(sw,{heading:`Check: ${t}`,onClose:()=>{n(null)},opened:!!t,size:"large",children:G.jsx(cw,{children:r?G.jsxs(G.Fragment,{children:[G.jsx(_2,{}),G.jsx(tB,{})]}):G.jsx(G.Fragment,{children:t&&G.jsx(S2,{})})})})},rB=()=>{const t=KL();return G.jsx(G.Fragment,{children:t?G.jsxs(G.Fragment,{children:[G.jsx(_2,{}),G.jsx(BA,{}),G.jsx(nB,{})]}):G.jsx("span",{children:"Could not load data"})})},oB=({showDebugSeverities:t})=>{const{setData:n,setShowDebugSeverities:r}=ls(),{addMessage:o}=Sw(),i=UL(),a=qL();p.useEffect(()=>{i&&o4(`${a}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mock:!0}).then(c=>(c.ok||o({variant:"error",text:Sv(e.message)}),c.json())).then(c=>{n(c)})},[i]);const l=RA({queryKey:["violations"],queryFn:NA,enabled:!i,refetchInterval:5*60*1e3});return p.useEffect(()=>{r(!!t),l.error?o({variant:"error",text:Sv(l.error)}):!l.isLoading&&!l.data?o({variant:"Info",text:"No data available"}):n(l.data)},[l,n,o,r]),G.jsxs(lP,{py:!0,children:[G.jsx(JL,{}),G.jsx(IL,{className:"mb-4"}),l!=null&&l.isLoading&&!i?G.jsx(S2,{className:"tw-mt-4"}):G.jsx(rB,{}),G.jsx(AA,{})]})},iB="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-4{margin-bottom:1rem}.mt-0{margin-top:0}.inline{display:inline}.flex{display:flex}.grid{display:grid}.h-full{height:100%}.w-52{width:13rem}.w-80{width:20rem}.w-96{width:24rem}.cursor-pointer{cursor:pointer}.grid-cols-\\[repeat\\(auto-fill\\,_minmax\\(240px\\,_1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}.flex-wrap{flex-wrap:wrap}.gap-2{gap:.5rem}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-b-0{border-bottom-width:0}.border-l-2{border-left-width:2px}.border-theme-accent{--tw-border-opacity: 1;border-color:rgba(var(--color-accent-raw),var(--tw-border-opacity))}.border-theme-accent\\/25{border-color:rgba(var(--color-accent-raw),.25)}.border-theme-default{--tw-border-opacity: 1;border-color:rgba(var(--color-default-border),var(--tw-border-opacity))}.border-theme-error{--tw-border-opacity: 1;border-color:rgba(var(--color-error-raw),var(--tw-border-opacity))}.border-theme-info{--tw-border-opacity: 1;border-color:rgba(var(--color-info-raw),var(--tw-border-opacity))}.border-theme-warning{--tw-border-opacity: 1;border-color:rgba(var(--color-warning-raw),var(--tw-border-opacity))}.bg-theme-accent\\/10{background-color:rgba(var(--color-accent-raw),.1)}.bg-theme-accent\\/5{background-color:rgba(var(--color-accent-raw),.05)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-warning\\/40{background-color:rgba(var(--color-warning-raw),.4)}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-\\[0\\.3rem\\]{padding-top:.3rem;padding-bottom:.3rem}.pl-0{padding-left:0}.pl-5{padding-left:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.capitalize{text-transform:capitalize}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-warning{--tw-text-opacity: 1;color:rgba(var(--color-warning-raw),var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.info-box h4{font-size:1.2rem;font-weight:600;margin-bottom:.5rem;padding-top:10px}.info-box p{padding-bottom:10px}.violations-list .juno-datagrid-row:hover .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.juno-datagrid-row.active .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:underline:hover{text-decoration-line:underline}";function Pj(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ij={exports:{}};(function(t){var n=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={};function l(u,d){if(!a[u]){a[u]={};for(var f=0;f<u.length;f++)a[u][u.charAt(f)]=f}return a[u][d]}var c={compressToBase64:function(u){if(u==null)return"";var d=c._compress(u,6,function(f){return o.charAt(f)});switch(d.length%4){default:case 0:return d;case 1:return d+"===";case 2:return d+"==";case 3:return d+"="}},decompressFromBase64:function(u){return u==null?"":u==""?null:c._decompress(u.length,32,function(d){return l(o,u.charAt(d))})},compressToUTF16:function(u){return u==null?"":c._compress(u,15,function(d){return r(d+32)})+" "},decompressFromUTF16:function(u){return u==null?"":u==""?null:c._decompress(u.length,16384,function(d){return u.charCodeAt(d)-32})},compressToUint8Array:function(u){for(var d=c.compress(u),f=new Uint8Array(2*d.length),g=0,b=d.length;g<b;g++){var h=d.charCodeAt(g);f[2*g]=h>>>8,f[2*g+1]=h%256}return f},decompressFromUint8Array:function(u){if(u==null)return c.decompress(u);for(var d=new Array(u.length/2),f=0,g=d.length;f<g;f++)d[f]=256*u[2*f]+u[2*f+1];var b=[];return d.forEach(function(h){b.push(r(h))}),c.decompress(b.join(""))},compressToEncodedURIComponent:function(u){return u==null?"":c._compress(u,6,function(d){return i.charAt(d)})},decompressFromEncodedURIComponent:function(u){return u==null?"":u==""?null:(u=u.replace(/ /g,"+"),c._decompress(u.length,32,function(d){return l(i,u.charAt(d))}))},compress:function(u){return c._compress(u,16,function(d){return r(d)})},_compress:function(u,d,f){if(u==null)return"";var g,b,h,m={},y={},E="",v="",k="",C=2,M=3,I=2,D=[],z=0,A=0;for(h=0;h<u.length;h+=1)if(E=u.charAt(h),Object.prototype.hasOwnProperty.call(m,E)||(m[E]=M++,y[E]=!0),v=k+E,Object.prototype.hasOwnProperty.call(m,v))k=v;else{if(Object.prototype.hasOwnProperty.call(y,k)){if(k.charCodeAt(0)<256){for(g=0;g<I;g++)z<<=1,A==d-1?(A=0,D.push(f(z)),z=0):A++;for(b=k.charCodeAt(0),g=0;g<8;g++)z=z<<1|1&b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b>>=1}else{for(b=1,g=0;g<I;g++)z=z<<1|b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b=0;for(b=k.charCodeAt(0),g=0;g<16;g++)z=z<<1|1&b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b>>=1}--C==0&&(C=Math.pow(2,I),I++),delete y[k]}else for(b=m[k],g=0;g<I;g++)z=z<<1|1&b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b>>=1;--C==0&&(C=Math.pow(2,I),I++),m[v]=M++,k=String(E)}if(k!==""){if(Object.prototype.hasOwnProperty.call(y,k)){if(k.charCodeAt(0)<256){for(g=0;g<I;g++)z<<=1,A==d-1?(A=0,D.push(f(z)),z=0):A++;for(b=k.charCodeAt(0),g=0;g<8;g++)z=z<<1|1&b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b>>=1}else{for(b=1,g=0;g<I;g++)z=z<<1|b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b=0;for(b=k.charCodeAt(0),g=0;g<16;g++)z=z<<1|1&b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b>>=1}--C==0&&(C=Math.pow(2,I),I++),delete y[k]}else for(b=m[k],g=0;g<I;g++)z=z<<1|1&b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b>>=1;--C==0&&(C=Math.pow(2,I),I++)}for(b=2,g=0;g<I;g++)z=z<<1|1&b,A==d-1?(A=0,D.push(f(z)),z=0):A++,b>>=1;for(;;){if(z<<=1,A==d-1){D.push(f(z));break}A++}return D.join("")},decompress:function(u){return u==null?"":u==""?null:c._decompress(u.length,32768,function(d){return u.charCodeAt(d)})},_decompress:function(u,d,f){var g,b,h,m,y,E,v,k=[],C=4,M=4,I=3,D="",z=[],A={val:f(0),position:d,index:1};for(g=0;g<3;g+=1)k[g]=g;for(h=0,y=Math.pow(2,2),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;switch(h){case 0:for(h=0,y=Math.pow(2,8),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;v=r(h);break;case 1:for(h=0,y=Math.pow(2,16),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;v=r(h);break;case 2:return""}for(k[3]=v,b=v,z.push(v);;){if(A.index>u)return"";for(h=0,y=Math.pow(2,I),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;switch(v=h){case 0:for(h=0,y=Math.pow(2,8),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;k[M++]=r(h),v=M-1,C--;break;case 1:for(h=0,y=Math.pow(2,16),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;k[M++]=r(h),v=M-1,C--;break;case 2:return z.join("")}if(C==0&&(C=Math.pow(2,I),I++),k[v])D=k[v];else{if(v!==M)return null;D=b+b.charAt(0)}z.push(D),k[M++]=b+D.charAt(0),b=D,--C==0&&(C=Math.pow(2,I),I++)}}};return c}();t!=null?t.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})})(Ij);var Dj=Pj(Ij.exports),Lr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$@",T0=`	
\r!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`,aB=function(t){var n,r={},o={};function i(m){var y="";for(m=Math.abs(m);m;)y=Lr[m%64]+y,m=Math.floor(m/64);return y||"0"}function a(m){var y,E=0;for(y=m.length-1;y>=0;y--)E+=Lr.indexOf(m[y])*Math.pow(64,m.length-y-1);return E}function l(m){return m?(t&&(m=m.replace(n,function(y){return r[y]+"*"})),m.replace(/[^0-9a-zA-Z$@*]+([0-9a-zA-Z$@]\*[^0-9a-zA-Z$@]*)*/g,function(y){var E,v,k,C="",M=!1;for(E=0;E<y.length;E++)v=y[E],y[E+1]!=="*"?v===" "?C+="_":v==="."?C+=".":(k=T0.indexOf(v))>=0?C+="~"+Lr[k]:(M||(C+="'",M=!0),C+=("000"+(k=i(v.charCodeAt(0)))).substr(-3)):(C+=v+"*",E++);return M&&(C+="'"),C})):"''"}function c(m){return m==="''"?"":(m=m.replace(/[0-9a-zA-Z$@]\*/g,function(y){return"'*"+o[y[0]]+"'"})).split("'").map(function(y,E){return y[0]==="*"?y.substr(1):(y=y.replace(/_/g," ").replace(/\~./g,function(v){return T0[a(v[1])]}),E%2&&(y=y.replace(/[0-9a-zA-Z$@]+/g,function(v){var k,C="";for(k=0;k<v.length;k+=3)C+=String.fromCharCode(a(v[k]+v[k+1]+v[k+2]));return C})),y)}).join("")}function u(m){var y,E,v="",k=0;return v+=m<0?"-":"+",y=m.toString(),m.toExponential().length<y.length&&(y=m.toExponential()),(y=y.split(/[eE]/g))[1]&&(k=parseInt(y[1])),(y=y[0].split("."))[1]&&(k-=y[1].length),E=(E=y[0]+(y[1]||"")).replace(/0+$/,function(C){return k===0&&C.length<=2?C:(k+=C.length,"")}),v+=i(parseInt(E))||"0",k&&(v+=(k<0?"-":"+")+i(Math.abs(k))),v}function d(m){var y=m.indexOf("-",1)===-1?"+":"-",E=m.substr(1).split(/[\+\-]/);return parseFloat(m[0]+a(E[0])+(E[1]?"e"+y+a(E[1]):""))}function f(m,y){var E,v,k,C=[];if(Array.isArray(m))for(E=0;E<m.length;E++)C.push(b(m[E]));else for((k=Object.keys(m).sort()).length||y||C.push(":"),v=0;v<k.length;v++)m[E=k[v]]!==void 0&&C.push(l(E)+(y?"=":":")+b(m[E]));return y?C.join("&"):"("+C.join(",")+")"}function g(m){var y,E,v,k,C,M,I,D;function z(J){if(!J)throw new SyntaxError("Unexpected "+v+" at "+y+" in "+m)}function A(J,V){D=D||J,I||(I=D==="key"?{}:[]),C!==y&&(D==="key"?(M=c(m.substring(C,y)),D="value"):Array.isArray(I)?I.push(h(m.substring(C,y))):(M&&(I[M]=h(m.substring(C,y)),M=null),D="key"),C=y+(V?0:1))}for(k=0,C=1,y=1,E=m.length;y<E;y++)if((v=m[y])!=="(")if(v!==")"){if(z(k>=0),!(k>0))if(v!==":")if(v!==","){if(!(v!=="+"&&v!=="-")){if(D==="literal")continue;A("value",!0),D="literal"}}else A("value");else A("key")}else k===0&&A("value"),k--;else k===0&&(D=null),k++;return z(k===-1),I}function b(m,y){switch(typeof m){case"object":return m===null?"-+":f(m,y);case"string":return l(m);case"number":return isNaN(m)?"+!":m===1/0?"+*":m===-1/0?"-*":u(m);case"boolean":return m?"++":"--";case"undefined":return"+-";default:return""}}function h(m){switch(m[0]){case"(":return g(m);case"-":return m[1]!=="-"&&(m[1]==="+"?null:m[1]==="*"?-1/0:d(m));case"+":return m[1]==="-"?void 0:m[1]==="!"?NaN:m[1]==="+"||(m[1]==="*"?1/0:d(m));default:return c(m)}}return Array.isArray(t)?(t.splice(64),t.forEach(function(m){var y;for(y=0;y<m.length;y++)if(Lr.indexOf(m[y])!==-1&&o[m[y]]===void 0)return r[m]=m[y],void(o[m[y]]=m);for(y=0;y<64;y++)if(o[Lr[y]]===void 0)return r[m]=Lr[y],void(o[Lr[y]]=m)}),n=new RegExp(t.map(function(m){return m.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}).join("|"),"g")):t=null,{encode:b,decode:h,encodeInteger:i,decodeInteger:a,encodeString:l,decodeString:c,encodeNumber:u,decodeNumber:d,encodeCollection:f,decodeCollection:g,encodeQString:function(m){return b(m,!0)},decodeQString:function(m){return h("("+m.replace(/=/g,":").replace(/&/g,",")+")")}}};const Tj=Pj(aB)(),Mj="__s",lB=new RegExp(Mj+"=([^&]+)");var Up={},Wa=[];function sB(t,n={}){try{let r=Tj.encode(t);return(n==null?void 0:n.mode)==="humanize"||r.length>1800&&(r=Dj.compressToEncodedURIComponent(JSON.stringify(t))),r}catch(r){return console.warn("URL State Provider: Could not encode data",t,r),""}}function cB(t){try{let n=Tj.decode(t);if(n&&typeof n=="object")return n}catch{}try{return JSON.parse(Dj.decompressFromEncodedURIComponent(t))}catch(n){return console.warn("URL State Provider: Could not decode string: ",t,n),{}}}function qp(){const t=window.location.href.match(lB);if(!t)return{};try{return cB(decodeURIComponent(t[1]))}catch(n){return console.warn("URL State Provider: Could not decode string: ",t[1],n),{}}}function uB(t){var n=sB(t),r=new URL(window.location.href);return r.searchParams.set(Mj,n),decodeURIComponent(r.toString())}function dB(t){return qp()[t]}function Rj(t,n,r,o){o=o||{};const i=function(c,u,d={}){const f=qp();return typeof f=="string"?{}:(f[c]=d!=null&&d.merge?{...f[c],...u}:u,Wa.forEach(g=>g(f)),uB(f))}(t,n,{merge:r}),a=o.state||"",l=o.title||"";o!=null&&o.replace?window.history.replaceState(a,l,i):window.history.pushState(a,l,i)}function fB(t,n,r){Rj(t,n,!0,r)}function pB(t,n,r){Rj(t,n,!1,r)}function gB(t,n){Up[t]=n}function hB(t){delete Up[t]}function mB(t){return n=t,Wa.push(n),()=>{const r=Wa.indexOf(n);r>-1&&Wa.splice(r,1)};var n}function bB(t){return{currentState:function(){return dB(t)},onChange:function(n){return gB(t,n),function(){hB(t)}},onGlobalChange:mB,push:function(n,r){fB(t,n,r)},replace:function(n,r){pB(t,n,r)}}}window.addEventListener("popstate",function(t){t.target.location.href;const n=qp();Object.keys(n).forEach(r=>{(function(o,i,a){var l=Up[o];l&&l(i)})(r,n[r])})});const M0="doop",Oc="f",R0="s",N0="v",vB=t=>{const[n,r]=p.useState(!1),o=bB(t||M0),{set:i,setSearchTerm:a}=ss(),l=Op(),c=Sp(),u=kp(),{setDetailsViolationGroupKind:d}=ls();p.useEffect(()=>{var h,m,y;if(n)return;console.debug(`DOOP: (${t||M0}) setting up state from url:`,o.currentState());const f=(h=o.currentState())==null?void 0:h[R0],g=(m=o.currentState())==null?void 0:m[Oc],b=(y=o.currentState())==null?void 0:y[N0];f&&a(f),g?i(g):o.push({[Oc]:g}),b&&d(b),r(!0)},[n]),p.useEffect(()=>{n&&o.push({[Oc]:l,[N0]:u,[R0]:c})},[l,u,c,n])},yB=({consumerId:t})=>(vB(t),null),wB=[{kind:"kind-1",constraints:[{name:"const-1",metadata:{severity:"error",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-owner-info-on-helm-releases.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-owner-info-on-helm-releases.yaml",docstring:`gfhgddg jhfghjff

#### hgfhgdghdgd

hghfhjfjhfjf jhgjhjhg jhgjhgjhgjh ututuytuyt`},violation_groups:[{pattern:{kind:"violation-kind-1",name:"violation-group-1",namespace:"nms-1",message:"hgfhgdfhgdfhg jhfghfhgf. jhfhgfhgfhgf uiyuiy mnbnmnvbnv lkjklj.",object_identity:{service:"service-1",support_group:"support-group-3"}},instances:[{name:"violation-group-1.v1",cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-2",namespace:"nms-2",message:"nbvnbvnbv mnmnbnm mnbmnbn. jhgjhg oioi rtetrew nbvnbvnbv nbnvbvbv.",object_identity:{service:"service-1",support_group:"support-group-1"}},instances:[{name:"violation-group-2.v1",cluster:"cluster-13"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-3",namespace:"nms-2",message:"gfhgfhgfgf hgjhg jhjghjhg. iuiou ewrewer oioiiu nbmnbnb ghhghgjh.",object_identity:{service:"service-2",support_group:"support-group-1"}},instances:[{name:"violation-group-3.v1",cluster:"s-cluster-13"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-4",namespace:"cc3test",message:"gfhgfhgfgf hgjhg jhjghjhg. iuiou ewrewer oioiiu nbmnbnb ghhghgjh.",object_identity:{service:"service-2",support_group:"support-group-1"}},instances:[{name:"violation-group-4.v1",cluster:"cluster-3"},{name:"violation-group-4.v12",cluster:"cluster-2"},{name:"violation-group-4.v15",cluster:"cluster-10"},{name:"violation-group-4.v2",cluster:"cluster-5"},{name:"violation-group-4.v2",cluster:"cluster-7"},{name:"violation-group-4.v4",cluster:"cluster-4"},{name:"violation-group-4.v5",cluster:"cluster-6"},{name:"violation-group-4.v5",cluster:"cluster-13"},{name:"violation-group-4.v8",cluster:"cluster-1"},{name:"violation-group-4.v8",cluster:"cluster-8"}]}]}]},{kind:"kind-2",constraints:[{name:"const-2",metadata:{severity:"error",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-images-from-non-keppel.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-images-from-non-keppel.yaml",docstring:`hgfhgf hghghg ytuyt nmnmn ukj.

#### nghgfhgfhgfghfd hgfhgf bvc?

nvvv jghjhgjhg hgjhgjhg hhghghjg uyutyyut. jhgjhgjhg hgjhghgf jhgjhgjh jhjhgjhg oiou reerwew dsfds.
jhgjhghjg hvhgfhgf bvbvcbvcbvc nbvv uyuyiuy mnbmnbnmb mnbnb
mnbmnbmnb nbvnbvnbv nbvnbvnb.`},violation_groups:[{pattern:{kind:"violation-kind-2",name:"violation-group-1",namespace:"nms-2",message:"bvcbvc gfhgfhgf bvcbvcbvc bvnbvbc trytr gfgfhg kjkjhjkh nbnbnb bvnbvnbv nbvbvnbv nbvbnv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-1"}]}]}]},{kind:"kind-3",constraints:[{name:"const-3",metadata:{severity:"debug",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-forbidden-clusterwide-objects.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-forbidden-clusterwide-objects.yaml"},violation_groups:[{pattern:{kind:"violation-kind-1",name:"violation-group-1",message:"jhgjhgjh hjhgjhg mbnbnvbnbvnbv jyughghg hghghfghgfghf nvnbvnbvnbv nbnbvnvbnbv nbvnvbnbvnbv nbnbvnbvbn nbvnbvnbv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-4"},{cluster:"cluster-5"}]},{pattern:{kind:"violation-kind-2",name:"violation-group-2",message:"bnbnbv nnbvnbv nbvnbvbnv nbvnbvnbv nbvnbvnbv bvnbvnbv nbvnbvnbv nvbnbvnbv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-5"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-3",name:"violation-group-4",message:"hjhjghjg hghgfhgf bvbcvbvc ytuytuyt qrewerwerw bvbvcbvbvcbcvb nbnbvnbvnbv nbvnbvnbv nbvnbvnbv nbvnbvnbv nbvnbvnbv.",object_identity:{service:"service-4",support_group:"support-group-3"}},instances:[{cluster:"cluster-7"},{cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-4",name:"violation-group-5",message:"bnbnb nbnbvnbv nbvnbvnbv tuytuyt vhghjgh mnbmnbmnb nbnbnmbmnb nbmnbmnb nbnmbmnbm bnbnmbbnb nmbnbnbn mnbmnbnbn nbmnbnmb.",object_identity:{service:"service-4",support_group:"support-group-2"}},instances:[{cluster:"cluster-7"},{cluster:"cluster-8"}]}]}]},{kind:"violation-kind-1",constraints:[{name:"violations-const-1",metadata:{severity:"info",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-images-from-correct-registry.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-images-from-correct-registry.yaml",docstring:`Tjhgjhgjhg nhgfhgf nbvbnvb bvbvcbvc bcbvcbvc vcbcbvc bvcbvcvc bvbvcbvcbv bcvc.

#### hjhkghfg hgfhgfhgf bvhgfhgfhgf?

Bkjjhgjhg,mb nbvbnvbvc utyuytuyt. bvcbvcbvcbv bgfdgfdgf vvcxvcxz vcvcvcc, hjghgfhgf bvcbvcvc tyrytr bvnbnb mn,mn,mn mnmnnbhg fdsfdsdf ewewcvx cxvcxcv.
`},violation_groups:[{pattern:{kind:"violtion-kind-5",name:"violation-group-1",namespace:`
nms-3>`,message:"hgjhg bvnbvbvc gftrt vcfddfgfdfd bvbvbvcbvc hgfghfgh yutytyu bvbbv nmbnbnb nbvbvbv nbvnbvbv vcxvcxc x rerere bvcvbbv bvcbvc.",object_identity:{service:"service-4",support_group:"support-group-3"}},instances:[{namespace:"nms-3",cluster:"cluster-1"},{namespace:"nms-4",cluster:"cluster-3"},{namespace:"nms-5",cluster:"cluster-4"},{namespace:"nms-7",cluster:"cluster-5"},{namespace:"nms-6",cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-5",name:"violation-group-4",namespace:"nms-5",message:"mbnbbnv nvnbvnbv hhghghgfhgf bvbvbv nvnbvnbv bnnmbvnmb hghghfg dffdgf nvnvnbv nvbnbvbnv nbvnbvbnv bvv.",object_identity:{service:"service-5",support_group:"support-group-4"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-5",name:"violation-group-5",namespace:"nms-6",message:"hjjhj jgjhgjgh jhgjhgjhg jhgjhgjhg hjgjhgjhg. jhgjhg vhgjhg nbvnbvnv jhghjghg nnvv nbnbnbvbv nbvbvbvb.",object_identity:{service:"service-5",support_group:"support-group-5"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-6",name:"violation-group-6",namespace:"nms-7",message:"nbmnb nghjghg nbvnbvnb nbvnvbn. jhgjhg nbvbnv nbvbnvbn bvbnvbnv hghgh bnvnbvbnv nbvbv",object_identity:{service:"service-5",support_group:"support-group-6"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]}]}]}],xB={"cluster-identifiers":[{"cluster-1":{layer:"layer-1",type:"type-1"},"cluster-2":{layer:"layer-2",type:"type-2"},"cluster-3":{layer:"layer-3",type:"type-3"},"cluster-4":{layer:"layer-4",type:"type-4"},"cluster-5":{layer:"layer-5",type:"type-5"},"cluster-6":{layer:"layer-6",type:"type-6"},"cluster-7":{layer:"layer-7",type:"type-7"},"cluster-8":{layer:"layer-8",type:"type-8"},"cluster-9":{layer:"layer-9",type:"type-9"},"cluster-10":{layer:"layer-10",type:"type-10"},"cluster-11":{layer:"layer-11",type:"type-11"},"cluster-12":{layer:"layer-12",type:"type-12"},"cluster-13":{layer:"layer-13",type:"type-13"},"cluster-14":{layer:"layer-14",type:"type-14"}}],templates:wB},jB=(t={})=>{const{setEndpoint:n,setMock:r}=YL(),o=p.useMemo(()=>t.isMock===!0||t.isMock==="true",[t.isMock]);p.useEffect(()=>{o&&(r(!0),r4(xB,{debug:!0,rewriteRoutes:{"/(?:doop-api\\.sap/v2/violations/(.*))":"/$1"}}))},[]);const i=new hA({defaultOptions:{queries:{meta:{endpoint:t.apiEndpoint,mock:t.isMock}}}});return p.useLayoutEffect(()=>{n(o?window.location.origin:t==null?void 0:t.apiEndpoint)},[t==null?void 0:t.apiEndpoint,o]),G.jsx(KT,{children:G.jsxs(gE,{pageHeader:"Doop",embedded:t.embedded===!0,children:[G.jsx(iP,{heading:`Decentralized Observer of Policies  ${t.displayName?` - ${t.displayName}`:""}`}),G.jsx(yB,{consumerId:t.id||"doop"}),G.jsx(wA,{client:i,children:G.jsx(oB,{id:t==null?void 0:t.id,showDebugSeverities:t.showDebugSeverities})})]})})},SB=t=>G.jsxs(ny,{children:[G.jsx("style",{children:iB.toString()}),G.jsx(WL,{options:t,children:G.jsx(jB,{...t})})]});export{SB as default};
