var Jp=t=>{throw TypeError(t)};var xs=(t,n,r)=>n.has(t)||Jp("Cannot "+r);var W=(t,n,r)=>(xs(t,n,"read from private field"),r?r.call(t):n.get(t)),Ne=(t,n,r)=>n.has(t)?Jp("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,r),we=(t,n,r,o)=>(xs(t,n,"write to private field"),o?o.call(t,r):n.set(t,r),r),_e=(t,n,r)=>(xs(t,n,"access private method"),r);var ca=(t,n,r,o)=>({set _(i){we(t,n,i,r)},get _(){return W(t,n,o)}});import{r as p,R as O,g as Tl,a as Kj,b as Bn,j as eo,c as Zp}from"./index-CnfRGDnz.js";import"./index-nhIc1pSq.js";var iy={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gj=p,Qj=Symbol.for("react.element"),Jj=Symbol.for("react.fragment"),Zj=Object.prototype.hasOwnProperty,Xj=Gj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eE={key:!0,ref:!0,__self:!0,__source:!0};function ay(t,n,r){var o,i={},a=null,l=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(o in n)Zj.call(n,o)&&!eE.hasOwnProperty(o)&&(i[o]=n[o]);if(t&&t.defaultProps)for(o in n=t.defaultProps,n)i[o]===void 0&&(i[o]=n[o]);return{$$typeof:Qj,type:t,key:a,ref:l,props:i,_owner:Xj.current}}Dl.Fragment=Jj;Dl.jsx=ay;Dl.jsxs=ay;iy.exports=Dl;var G=iy.exports,ue=function(){return ue=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},ue.apply(this,arguments)};function it(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>n.indexOf(o)&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)0>n.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(r[o[i]]=t[o[i]]);return r}function tE(t,n,r){for(var o,i=0,a=n.length;i<a;i++)(o||!(i in n))&&(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return t.concat(o||Array.prototype.slice.call(n))}var nE=`
  jn-flex
  jn-flex-col
  jn-h-full
`,rE=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=it(t,["className","children"]);return O.createElement("div",ue({className:"juno-body ".concat(nE," ").concat(r)},i),o)};function he(){return he=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},he.apply(null,arguments)}var ly={exports:{}},oE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iE=oE,aE=iE;function sy(){}function cy(){}cy.resetWarningCache=sy;var lE=function(){function t(o,i,a,l,c,u){if(u!==aE){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function n(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:cy,resetWarningCache:sy};return r.PropTypes=r,r};ly.exports=lE();var sE=ly.exports;const x=Tl(sE);x.string,x.any;var Xp,eg,tg,ng,rg,og,ig,ag,lg,sg,cg,ug,dg,fg,pg,gg,hg,mg,bg,cE=["title","titleId"];function Sc(){return Sc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Sc.apply(null,arguments)}function uE(t,n){if(t==null)return{};var r,o,i=dE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function dE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var fE=function(t){var n=t.title,r=t.titleId,o=uE(t,cE);return p.createElement("svg",Sc({xmlns:"http://www.w3.org/2000/svg",width:49,height:41,fill:"none",viewBox:"0 0 49 41",alt:"Juno UI","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Xp||(Xp=p.createElement("path",{fill:"#0FA7B4",d:"M11.093 16 4 20.095l7.093 4.105 7.093-4.105L11.093 16Z"})),eg||(eg=p.createElement("path",{fill:"#000",fillRule:"evenodd",d:"m11.093 16.346 6.793 3.922v7.844l-6.793 3.922L4.3 28.112v-7.844l6.793-3.922ZM4 20.095 11.093 16l7.093 4.095v8.19l-7.093 4.095L4 28.285v-8.19Z",clipRule:"evenodd"})),tg||(tg=p.createElement("path",{fill:"#05646D",d:"M11.093 24.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),ng||(ng=p.createElement("path",{fill:"#05646D",d:"M11.093 24.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),rg||(rg=p.createElement("path",{fill:"#098590",d:"M11.093 24.19v8.19L4 28.285v-8.19l7.093 4.095Z"})),og||(og=p.createElement("path",{fill:"#15D0E0",fillRule:"evenodd",d:"M18.186 20.095 11.093 16 4 20.095v8.19l7.093 4.095 7.093-4.095v-8.19Zm-7.093-3.749 6.493 3.75-6.493 3.757L4.6 20.095l6.494-3.749Zm-.3 8.017L4.3 20.614v7.498l6.493 3.748v-7.497Zm7.093-3.749-6.493 3.749v7.497l6.492-3.748v-7.498Z",clipRule:"evenodd"})),ig||(ig=p.createElement("path",{fill:"#098590",d:"M24.402 36.76V20.38l-14.185-8.19v8.226l7.065 4.079v8.155l7.12 4.11Z"})),ag||(ag=p.createElement("path",{fill:"#0FA7B4",d:"m38.587 20.388-7.08 4.087v-8.19l7.08-4.087v-.008l-14.185 8.19v16.38l14.185-8.19v-8.182Z"})),lg||(lg=p.createElement("path",{fill:"#05646D",d:"M31.591 16.337v.064-8.254l-7.093 4.095 7.093 4.095Z"})),sg||(sg=p.createElement("path",{fill:"#02454B",d:"M31.51 16.285v8.19l7.092-4.095-7.093-4.095Z"})),cg||(cg=p.createElement("path",{fill:"#15D0E0",d:"M37.092 8 30 12.095v8.19l7.092 4.095 7.093-4.095v-8.19L37.092 8Z"})),ug||(ug=p.createElement("path",{fill:"#0FA7B4",d:"M37.092 16.19v8.19l7.093-4.095v-8.19l-7.093 4.095Z"})),dg||(dg=p.createElement("path",{fill:"#098590",d:"M37.092 16.19v8.19L30 20.285v-8.19l7.092 4.095Z"})),fg||(fg=p.createElement("path",{fill:"url(#a)",fillRule:"evenodd",d:"M44.185 12.095 37.092 8 30 12.095v8.19l7.092 4.095 7.093-4.095v-8.19Zm-7.093-3.749 6.493 3.75-6.493 3.757-6.493-3.758 6.493-3.749Zm-.3 8.017-6.493-3.749v7.497l6.493 3.75v-7.498Zm7.093-3.749-6.493 3.749v7.497l6.493-3.748v-7.498Z",clipRule:"evenodd"})),pg||(pg=p.createElement("path",{fill:"#0FA7B4",d:"m31.502 32.65-7.1 4.15V20.4l7.1-4.11v16.36Z"})),gg||(gg=p.createElement("path",{fill:"#15D0E0",d:"m24.502 12.25 7 4.04-7.1 4.11-14.2-8.2 14.2-8.2 7.2 4.15-7.1 4.1Z"})),hg||(hg=p.createElement("path",{fill:"url(#b)",fillRule:"evenodd",d:"M31.602 8.15 24.402 4l-14.184 8.191h-.001v.001l-.014.008.013.008v8.147l7.066 4.08v8.19l7.12 4.135V28.7v8.1l5.52-3.226 8.665-5.003v-5.054l-.3.173v4.707l-6.77 3.91.033-7.51 3.133-1.808-.3-.173-2.831 1.634v-.011h-.044v-8.154l1.19-.687v-.008l-1.203.695-6.773-3.908.006-.01-.214-.124 7.088-4.093Zm-6.9 28.127v-7.576l6.506-3.717v.011l.042-.024-.034 7.509-1.446.835-5.068 2.962Zm0-7.921 6.506-3.718v-7.84l-6.506 3.756v7.802Zm6.3-20.206-6.787 3.92-6.577-3.817 6.764-3.907 6.6 3.804Zm-7.096 4.087-6.568-3.811-6.535 3.774 6.199 3.58 6.904-3.543Zm.294.185-6.889 3.537 7.09 4.095 6.501-3.764-6.702-3.868Zm-6.618 20.055V24.26l-7.066-4.08v-7.47l13.586 7.844V36.24l-6.52-3.764Z",clipRule:"evenodd"})),mg||(mg=p.createElement("path",{fill:"url(#c)",d:"m34.376 14.622.007.004 4.204-2.428v-.008l-4.21 2.432Z"})),bg||(bg=p.createElement("defs",null,p.createElement("linearGradient",{id:"a",x1:24.093,x2:23.823,y1:36.799,y2:3.998,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#05646D"}),p.createElement("stop",{offset:.613,stopColor:"#15D0E0"}),p.createElement("stop",{offset:1,stopColor:"#098590"})),p.createElement("linearGradient",{id:"b",x1:26.402,x2:15.344,y1:-1,y2:32.206,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#127E88"}),p.createElement("stop",{offset:.539,stopColor:"#44F0FF"}),p.createElement("stop",{offset:1,stopColor:"#0B717A"})),p.createElement("linearGradient",{id:"c",x1:26.402,x2:15.344,y1:-1,y2:32.206,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#127E88"}),p.createElement("stop",{offset:.539,stopColor:"#44F0FF"}),p.createElement("stop",{offset:1,stopColor:"#0B717A"})))))},pE=`
  jn-min-h-[3.25rem]
  jn-bg-juno-grey-blue-11
  jn-sticky
  jn-top-0
  jn-px-6
  jn-py-3
  jn-z-50
`,gE=`
  jn-grid
  jn-grid-cols-[minmax(0,max-content),1fr]
  jn-gap-3
  jn-h-7
  jn-w-full
  jn-overflow-hidden
  jn-items-center
`,hE=`
  jn-h-7
  jn-max-w-xs
  [&>*]:jn-w-min
  [&>*]:jn-max-w-xs
  [&>*]:jn-h-7
  [&>*]:jn-object-contain
`,mE=function(t){return`
    jn-text-lg
    jn-text-theme-high
    `.concat(t&&"jn-cursor-pointer",`
    `)},vg=function(t){var n=t.heading,r=n===void 0?null:n,o=t.className,i=o===void 0?"":o,a=t.children,l=a===void 0?null:a,c=t.logo,u=c===void 0?void 0:c,d=t.onClick,f=it(t,["heading","className","children","logo","onClick"]);return O.createElement("div",ue({className:"juno-pageheader theme-dark ".concat(pE," ").concat(i),role:"banner"},f),O.createElement("div",{className:"juno-pageheader-inner ".concat(gE)},O.createElement("div",{className:"juno-pageheader-logo-container ".concat(hE)},typeof u=="function"||O.isValidElement(u)&&u||(u===!0||u===void 0)&&O.createElement(fE,{"data-testid":"default-logo",alt:""})),O.createElement("div",null,r&&O.createElement("div",{className:mE(d!==void 0),onClick:d},r)),l))},bE=`
  jn-flex
  jn-grow
  jn-bg-theme-global-bg
`,yg=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=o===void 0?null:o,a=it(t,["className","children"]);return O.createElement("main",ue({className:"juno-main ".concat(bE," ").concat(r)},a),i)},vE=`
  jn-flex
  jn-grow
`,yE=`
  2xl:jn-container
  2xl:jn-mx-auto
`,wE=`
  3xl:jn-container
  3xl:jn-mx-auto
`,wg=function(t){var n=t.children,r=n===void 0?null:n,o=t.fullWidth,i=t.hasSideNav,a=t.className,l=a===void 0?"":a,c=it(t,["children","fullWidth","hasSideNav","className"]);return O.createElement("div",ue({className:`
        juno-main-inner
         `.concat(vE,`
         `).concat(o!==void 0&&o?"juno-main-inner-fullwidth":i!==void 0&&i?wE:yE,`
         `).concat(l)},c),r)},xE=`
  jn-flex-col
  jn-grow
  jn-bg-[right_top_1rem]
  jn-bg-no-repeat
  jn-bg-theme-content-area-bg
  jn-relative
`,xg=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=o===void 0?null:o,a=it(t,["className","children"]);return O.createElement("div",ue({className:"juno-content-container ".concat(xE," ").concat(r)},a),i)},jg,jE=["title","titleId"];function Cc(){return Cc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Cc.apply(null,arguments)}function EE(t,n){if(t==null)return{};var r,o,i=kE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var OE=function(t){var n=t.title,r=t.titleId,o=EE(t,jE);return p.createElement("svg",Cc({width:59,height:42,viewBox:"0 0 59 42",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,jg||(jg=p.createElement("path",{d:"M59.3825 11.1608C59.3545 11.1402 59.3267 11.1209 59.299 11.1029C56.8161 9.48915 53.8572 8.55235 50.6806 8.55235C49.5105 8.55235 48.3701 8.67944 47.272 8.92064C44.3685 3.66326 38.8166 0.108856 32.4447 0.108856C23.4894 0.108856 16.1537 7.12988 15.514 16.032L15.3487 16.0309L15.1066 16.0329C7.13468 16.1633 0.712036 22.728 0.712036 30.807C0.712036 35.0932 2.69502 38.9531 5.7492 41.6521H10.3029C6.42919 39.7347 3.75866 35.6852 3.75866 30.9998C3.75866 24.4639 8.95513 19.1655 15.3653 19.1655C16.2819 19.1655 17.1736 19.2738 18.0286 19.4792C17.9603 18.8925 17.9251 18.2952 17.9251 17.6896C17.9251 9.4705 24.4057 2.80763 32.4 2.80763C38.5297 2.80763 43.7695 6.72481 45.8801 12.2573C47.317 11.7139 48.8714 11.417 50.4937 11.417C53.699 11.417 56.6389 12.5758 58.9323 14.505C59.0819 14.6309 59.2321 14.8185 59.3825 15.0614V11.1608Z",fill:"#F0AB00"})))},SE=`
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
`,CE=`
  jn-h-[2.625rem]
  jn-absolute
  jn-right-0
  jn-bottom-0
`,Eg=function(t){var n=t.className,r=n===void 0?"":n,o=t.children,i=o===void 0?null:o,a=it(t,["className","children"]);return O.createElement("div",ue({className:"juno-pagefooter ".concat(SE," ").concat(r),role:"contentinfo"},a),i,O.createElement(OE,{className:CE,alt:"cloud shape"}))},PE=function(t){var n=t.children,r=t.className,o=r===void 0?"":r,i=t.contentHeading,a=i===void 0?"":i,l=t.embedded,c=t.fullWidthContent,u=t.pageHeader,d=u===void 0?O.createElement(vg,null):u,f=t.pageFooter,g=f===void 0?O.createElement(Eg,null):f,b=t.sideNavigation,h=t.topNavigation,m=it(t,["children","className","contentHeading","embedded","fullWidthContent","pageHeader","pageFooter","sideNavigation","topNavigation"]);return a&&a.length&&console.warn("AppShell: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a ContentHeading element as a child in your main content."),O.createElement(rE,ue({className:o},m),a||"",l!==void 0&&l?O.createElement(O.Fragment,null,h&&h,O.createElement(yg,null,O.createElement(wg,{fullWidth:c!==!1,hasSideNav:!!b,className:"".concat(h?"jn-mt-[3.875rem]":"")},b&&b,O.createElement(xg,null,n)))):O.createElement(O.Fragment,null,d&&(typeof d=="string"||d instanceof String)?O.createElement(vg,{heading:d}):d,h&&h,O.createElement(yg,null,O.createElement(wg,{fullWidth:c===!0,hasSideNav:!!b,className:"jn-mt-[3.875rem]"},b&&b,O.createElement(xg,{className:b?"":"jn-ml-8"},n))),g||O.createElement(Eg,null)))};const Df=t=>{let{mode:n="open",delegatesFocus:r=!1,children:o=null}=t;const i=p.useRef(),[a,l]=p.useState();return O.useEffect(()=>{i.current&&l(i.current.attachShadow({delegatesFocus:r,mode:n}))},[]),O.createElement("div",{ref:i,"data-shadow-host":"true",style:{height:"100%"}},a&&Kj.createPortal(o,a))};Df.propTypes={mode:x.oneOf(["open","closed"]),delegatesFocus:x.bool,children:x.node};function uy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function dy(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var r=function o(){if(this instanceof o){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(n,i);return new a}return n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var i=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:function(){return t[o]}})}),r}function Y(t){return n=>{let{opacityVariable:r,opacityValue:o}=n;return o===void 0?r===void 0?`rgb(var(${t}))`:`rgba(var(${t}), var(${r}, 1))`:`rgba(var(${t}), ${o})`}}var IE={content:["./src/components/**/*.{js,jsx,ts,tsx,mdx}","./src/dummyComponents/*.{js,jsx,ts,tsx,mdx}","./src/docs/**/*.{js,jsx,ts,tsx,mdx}"],prefix:"jn-",theme:{fontFamily:{sans:['"IBM Plex Sans"',"ui-sans-serif","Arial","system-ui","sans-serif"],condensed:['"IBM Plex Sans Condensed"',"ui-sans-serif","Arial","system-ui","sans-serif"],serif:['"IBM Plex Serif"',"ui-serif","serif"],mono:['"IBM Plex Mono"',"ui-monospace","monospace"]},colors:{current:"currentColor","juno-grey-blue":{1:Y("--color-juno-grey-blue-1-raw"),2:Y("--color-juno-grey-blue-2-raw"),3:Y("--color-juno-grey-blue-3-raw"),4:Y("--color-juno-grey-blue-4-raw"),5:Y("--color-juno-grey-blue-5-raw"),6:Y("--color-juno-grey-blue-6-raw"),7:Y("--color-juno-grey-blue-7-raw"),8:Y("--color-juno-grey-blue-8-raw"),9:Y("--color-juno-grey-blue-9-raw"),10:Y("--color-juno-grey-blue-10-raw"),11:Y("--color-juno-grey-blue-11-raw"),DEFAULT:Y("--color-juno-grey-blue-11-raw")},"juno-blue":{1:Y("--color-juno-blue-1-raw"),2:Y("--color-juno-blue-2-raw"),3:Y("--color-juno-blue-3-raw"),4:Y("--color-juno-blue-4-raw"),5:Y("--color-juno-blue-5-raw"),6:Y("--color-juno-blue-6-raw"),7:Y("--color-juno-blue-7-raw"),8:Y("--color-juno-blue-8-raw"),9:Y("--color-juno-blue-9-raw"),10:Y("--color-juno-blue-10-raw"),DEFAULT:Y("--color-juno-blue-5-raw")},"juno-turquoise":{1:Y("--color-juno-turquoise-1-raw"),2:Y("--color-juno-turquoise-2-raw"),3:Y("--color-juno-turquoise-3-raw"),4:Y("--color-juno-turquoise-4-raw"),5:Y("--color-juno-turquoise-5-raw"),6:Y("--color-juno-turquoise-6-raw"),7:Y("--color-juno-turquoise-7-raw"),8:Y("--color-juno-turquoise-8-raw"),9:Y("--color-juno-turquoise-9-raw"),10:Y("--color-juno-turquoise-10-raw"),DEFAULT:Y("--color-juno-turquoise-5-raw")},"juno-grey-light":{1:Y("--color-juno-grey-light-1-raw"),2:Y("--color-juno-grey-light-2-raw"),3:Y("--color-juno-grey-light-3-raw"),4:Y("--color-juno-grey-light-4-raw"),5:Y("--color-juno-grey-light-5-raw"),6:Y("--color-juno-grey-light-6-raw"),7:Y("--color-juno-grey-light-7-raw"),8:Y("--color-juno-grey-light-8-raw"),9:Y("--color-juno-grey-light-9-raw"),10:Y("--color-juno-grey-light-10-raw"),11:Y("--color-juno-grey-light-11-raw"),DEFAULT:Y("--color-juno-grey-light-1-raw")},"juno-red":{1:Y("--color-juno-red-1-raw"),2:Y("--color-juno-red-2-raw"),3:Y("--color-juno-red-3-raw"),4:Y("--color-juno-red-4-raw"),5:Y("--color-juno-red-5-raw"),6:Y("--color-juno-red-6-raw"),7:Y("--color-juno-red-7-raw"),8:Y("--color-juno-red-8-raw"),DEFAULT:Y("--color-juno-red-5-raw")},"sap-grey":{1:Y("--color-sap-grey-1-raw"),2:Y("--color-sap-grey-2-raw"),3:Y("--color-sap-grey-3-raw"),4:Y("--color-sap-grey-4-raw"),5:Y("--color-sap-grey-5-raw"),6:Y("--color-sap-grey-6-raw"),7:Y("--color-sap-grey-7-raw"),8:Y("--color-sap-grey-8-raw"),DEFAULT:Y("--color-sap-grey-8-raw")},"sap-blue":{1:Y("--color-sap-blue-1-raw"),2:Y("--color-sap-blue-2-raw"),3:Y("--color-sap-blue-3-raw"),4:Y("--color-sap-blue-4-raw"),5:Y("--color-sap-blue-5-raw"),6:Y("--color-sap-blue-6-raw"),DEFAULT:Y("--color-sap-blue-5-raw")},"sap-gold":{DEFAULT:Y("--color-sap-gold-raw")},"sap-purple":{1:Y("--color-sap-purple-1-raw"),2:Y("--color-sap-purple-2-raw"),3:Y("--color-sap-purple-3-raw"),4:Y("--color-sap-purple-4-raw"),5:Y("--color-sap-purple-5-raw"),6:Y("--color-sap-purple-6-raw"),DEFAULT:Y("--color-sap-purple-5-raw")},"sap-green":{1:Y("--color-sap-green-1-raw"),2:Y("--color-sap-green-2-raw"),3:Y("--color-sap-green-3-raw"),4:Y("--color-sap-green-4-raw"),5:Y("--color-sap-green-5-raw"),6:Y("--color-sap-green-6-raw"),DEFAULT:Y("--color-sap-green-5-raw")},"sap-orange":{1:Y("--color-sap-orange-1-raw"),2:Y("--color-sap-orange-2-raw"),3:Y("--color-sap-orange-3-raw"),4:Y("--color-sap-orange-4-raw"),5:Y("--color-sap-orange-5-raw"),6:Y("--color-sap-orange-6-raw"),DEFAULT:Y("--color-sap-orange-5-raw")},white:Y("--color-white-raw"),black:Y("--color-black-raw"),transparent:"transparent",theme:{accent:Y("--color-accent-raw"),danger:Y("--color-danger-raw"),error:Y("--color-error-raw"),info:Y("--color-info-raw"),success:Y("--color-success-raw"),warning:Y("--color-warning-raw"),focus:Y("--color-focus-raw"),"background-lvl-0":Y("--color-background-lvl-0-raw"),"background-lvl-1":Y("--color-background-lvl-1-raw"),"background-lvl-2":Y("--color-background-lvl-2-raw"),"background-lvl-3":Y("--color-background-lvl-3-raw"),"background-lvl-4":Y("--color-background-lvl-4-raw"),"background-lvl-5":Y("--color-background-lvl-5-raw")}},extend:{backgroundColor:{theme:{"global-bg":Y("--color-global-bg-raw"),"badge-default":"var(--color-badge-default-bg)","box-default":"var(--color-box-bg)","code-block":Y("--color-codeblock-bg"),"content-area-bg":Y("--color-content-area-bg-raw"),panel:"var(--color-panel-bg)",textinput:Y("--color-textinput-bg"),"textinput-autofill":Y("--color-textinput-autofill-bg"),select:Y("--color-select-bg"),checkbox:Y("--color-checkbox-bg"),radio:Y("--color-radio-bg"),"radio-checked":Y("--color-radio-checked-bg"),"switch-handle":Y("--color-switch-handle-bg"),"switch-handle-checked":Y("--color-switch-handle-checked-bg"),required:Y("--color-required-bg"),introbox:Y("--color-introbox-bg"),"datagridrow-selected":Y("--color-datagridrow-selected"),"datalistrow-selected":Y("--color-datalistrow-selected"),"message-border-danger":Y("--color-message-danger-border"),"message-border-default":Y("--color-message-default-border"),"message-border-error":Y("--color-message-error-border"),"message-border-warning":Y("--color-message-warning-border"),"message-border-success":Y("--color-message-success-border"),"tab-navigation-top":Y("--color-tabnavigation-top-bg"),filters:Y("--color-filters-bg"),"filter-input":Y("--color-filter-input-bg"),"filter-input-textinput":Y("--color-filter-input-textinput-bg"),"filter-pill-key":Y("--color-filter-pill-key-bg"),"modal-backdrop":"var(--color-modal-backdrop-bg)","sidenavigation-item-active":"var(--color-sidenavigation-item-active-bg)","topnavigation-item":"var(--color-topnavigation-item-bg)","topnavigation-item-active":"var(--color-topnavigation-item-active-bg)"}},backgroundImage:{"theme-message-default":"var(--gradient-message-default-bg)","theme-message-success":"var(--gradient-message-success-bg)","theme-message-warning":"var(--gradient-message-warning-bg)","theme-message-danger":"var(--gradient-message-danger-bg)","theme-message-error":"var(--gradient-message-error-bg)"},textColor:{theme:{highest:Y("--color-text-highest-raw"),high:Y("--color-text-high-raw"),default:Y("--color-text-default-raw"),light:Y("--color-text-light-raw"),disabled:Y("--color-text-disabled-raw"),link:Y("--color-text-link-raw"),"on-danger":Y("--color-button-danger-text"),"on-default":Y("--color-button-default-text"),textinput:Y("--color-textinput-text"),"textinput-autofill":Y("--color-textinput-autofill-text"),"textinput-autofill-label":Y("--color-textinput-autofill-label"),"checkbox-checked":Y("--color-checkbox-checked-color"),"sidenavigation-item-active":"var(--color-sidenavigation-item-active)"}},borderColor:{theme:{default:Y("--color-default-border"),"codeblock-bar":Y("--color-codeblock-bar-border"),"codeblock-tab-active":Y("--color-text-default-raw"),"message-default":Y("--color-message-default-border"),"message-danger":Y("--color-message-danger-border"),"message-error":Y("--color-message-error-border"),"message-warning":Y("--color-message-warning-border"),"message-success":Y("--color-message-success-border"),panel:Y("--color-panel-border-raw"),"switch-default":Y("--color-switch-default-border"),"switch-hover":Y("--color-switch-hover-border"),"datalist-row":Y("--color-datalist-row-border"),introbox:Y("--color-introbox-border"),"tab-navigation-content-bottom":Y("--color-tabnavigation-content-bottom-border"),"tab-active-bottom":Y("--color-text-default-raw"),"filter-input":Y("--color-filter-input-border"),"filter-pill":Y("--color-filter-pill-border"),"box-default":"var(--color-box-border)","textinput-default":Y("--color-textinput-default-border"),"tab-content-inactive-bottom":Y("--color-background-lvl-4-raw")}},padding:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem","grid-column":"0 .5rem"},height:{textinput:"2.375rem",floatinglabelinput:"3rem","switch-default":"1.4375rem","switch-handle-default":"1.1875rem"},ringOffsetColor:{theme:{focus:Y("--color-global-bg-raw")}},screens:{"3xl":"1856px"},width:{"switch-default":"2.625rem","switch-handle-default":"1.1875rem","grid-column-default":"var(--grid-column-default-width)","grid-col-1":"8.333333%","grid-col-2":"16.666667%","grid-col-3":"25%","grid-col-4":"33.333333%","grid-col-5":"41.666667%","grid-col-6":"50%","grid-col-7":"58.333333%","grid-col-8":"66.666667%","grid-col-9":"75%","grid-col-10":"83.333333%","grid-col-11":"91.666667%","grid-col-12":"100%"},borderRadius:{"3px":"3px"},margin:{"grid-row":"0 var(--grid-row-margin-x)"},flex:{"grid-column":"var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis)"}},borderWidth:{DEFAULT:"1px",0:"0",2:"2px",3:"3px",4:"4px",6:"6px"}},plugins:[]},TE=uy(IE);const kg="https://assets.juno.global.cloud.sap/assets/fonts/plex/css/ibm-plex.min.css",js="juno-style-provider-golbal-fonts",fy=t=>{let{inline:n}=t;return p.useInsertionEffect(()=>{if(!document.querySelector(`[id="${js}"]`)){const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.googleapis.com";const o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.gstatic.com",o.crossOrigin="anonymous";const i=document.createElement("link");i.rel="stylesheet",i.href=kg,i.setAttribute("id",js),document.head.appendChild(r),document.head.appendChild(o),document.head.appendChild(i)}},[]),n?O.createElement("style",{[`data-${js}`]:""},`@import url("${kg}");`):null};fy.propTypes={inline:x.bool};const Pc=`@charset "UTF-8";
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
.jn-ml-3{
  margin-left: 0.75rem;
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
}`,Es="juno-style-provider-global-styles",py=t=>{let{inline:n}=t;return p.useInsertionEffect(()=>{if(!(n||document.querySelector(`[id="${Es}"]`))){const r=document.createElement("style");r.setAttribute("id",Es),r.appendChild(document.createTextNode(Pc)),document.head.append(r)}},[]),n?O.createElement("style",{[`data-${Es}`]:""},Pc):null};py.propTypes={inline:x.bool};function DE(t,n){const[r,o]=p.useState(()=>{try{const i=window.localStorage.getItem(t);return i?JSON.parse(i):n}catch(i){return console.log("Juno Error: useLocalStorage error: ",i),n}});return[r,i=>{try{const a=i instanceof Function?i(r):i;o(a),window.localStorage.setItem(t,JSON.stringify(a))}catch(a){return console.log("Juno Error: useLocalStorage error: ",a),n}}]}const gy=p.createContext(),ME="juno-app-body",Og="theme-dark",Ic=t=>{let{stylesWrapper:n="inline",theme:r,children:o=null,shadowRootMode:i}=t;const a=r||Og,[l,c]=DE("juno-theme",a),u=p.useRef(l),d=p.useRef(ME+" "+a),f=p.useRef(null),g=p.useCallback(y=>{let{children:E}=y;return n==="shadowRoot"?O.createElement(Df,{mode:i},E):E},[n,i]),b=p.useCallback(y=>{f.current&&typeof y=="string"&&(f.current.classList.add(y),d.current=f.current.className)},[]),h=p.useCallback(y=>{f.current&&typeof y=="string"&&(f.current.classList.remove(y),d.current=f.current.className)},[]),m=p.useCallback(y=>{f.current&&typeof y=="string"&&(f.current.classList.remove(u.current),f.current.classList.add(y),u.current=y,d.current=f.current.className,c(y))},[f.current,u.current]);return p.useEffect(()=>{f.current&&m(r||Og)},[r]),p.useMemo(()=>O.createElement(g,null,O.createElement(fy,{inline:n!=="head"}),O.createElement(py,{inline:n!=="head"}),O.createElement(gy.Provider,{value:{styles:Pc,theme:TE,currentTheme:u.current,setThemeClass:m,addCssClass:b,removeCssClass:h}},O.createElement("div",{className:d.current,ref:f},o))),[n,o,i,d.current,m])};Ic.propTypes={children:x.node,stylesWrapper:x.oneOf(["head","inline","shadowRoot"]),theme:x.string,shadowRootMode:x.oneOf(["open","closed"])},Ic.useStyles=()=>O.useContext(gy);const NE="juno-portal-root",Mf=p.createContext(),RE={position:"absolute",top:"0",left:"0"},FE={position:"relative",zIndex:"1"},Tc=t=>{let{children:n=null}=t;const r=p.useContext(Mf),[o,i]=p.useState(!1);if(p.useEffect(()=>{r!=null&&r.current&&i(!0)},[r]),!o)return null;const a=O.createElement("div",{className:"juno-portal",style:FE},n);return Bn.createPortal(a,r.current||document.body)};Tc.propTypes={children:x.node};function LE(){const t=p.useContext(Mf),n=p.useRef(null),[r,o]=p.useState(!1);return p.useEffect(()=>{if(!t||!(t!=null&&t.current))return void console.warn("usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually.");const i=document.createElement("div");return i.style.position="relative",i.style.zIndex="1",i.classList.add("juno-portal"),t.current.append(i),n.current=i,o(!0),()=>{n.current&&(t!=null&&t.current)&&(t.current.removeChild(n.current),n.current=null)}},[t]),n!=null&&n.current&&r?n.current:null}const Ra=t=>{let{children:n=null,className:r="",id:o=NE}=t;const i=p.useRef(),[a,l]=p.useState(!1);return p.useEffect(()=>{i.current&&l(!0)},[]),O.createElement(Mf.Provider,{value:i},a&&n,O.createElement("div",{className:`juno-portal-root ${r}`,id:o,ref:i,style:RE}))};Ra.Portal=Tc,Tc.displayName="PortalProvider.Portal",Ra.propTypes={className:x.string,id:x.string,children:x.node},Ra.Portal.propTypes={children:x.node};const hy=t=>{let{shadowRoot:n=!0,shadowRootMode:r="open",stylesWrapper:o="inline",theme:i=null,children:a}=t;const l=O.useCallback(c=>{let{children:u}=c;return n?O.createElement(Df,{mode:r},u):u},[n,r]);return O.createElement(l,null,O.createElement(Ic,{theme:i,stylesWrapper:n?"inline":o},O.createElement(Ra,null,a)))};hy.propTypes={shadowRoot:x.bool,shadowRootMode:x.oneOf(["open","closed"]),stylesWrapper:x.oneOf(["head","inline"]),theme:x.string,children:x.any};var Sg,Cg,AE=["title","titleId"];function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Dc.apply(null,arguments)}function _E(t,n){if(t==null)return{};var r,o,i=$E(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $E(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Pg,my=function(t){var n=t.title,r=t.titleId,o=_E(t,AE);return p.createElement("svg",Dc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Sg||(Sg=p.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Cg||(Cg=p.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})))},zE=["title","titleId"];function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Mc.apply(null,arguments)}function HE(t,n){if(t==null)return{};var r,o,i=BE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function BE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ig,by=function(t){var n=t.title,r=t.titleId,o=HE(t,zE);return p.createElement("svg",Mc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Pg||(Pg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"})))},VE=["title","titleId"];function Nc(){return Nc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Nc.apply(null,arguments)}function WE(t,n){if(t==null)return{};var r,o,i=UE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function UE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Tg,vy=function(t){var n=t.title,r=t.titleId,o=WE(t,VE);return p.createElement("svg",Nc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ig||(Ig=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))},qE=["title","titleId"];function Rc(){return Rc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Rc.apply(null,arguments)}function YE(t,n){if(t==null)return{};var r,o,i=KE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function KE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Dg,yy=function(t){var n=t.title,r=t.titleId,o=YE(t,qE);return p.createElement("svg",Rc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Tg||(Tg=p.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"})))},GE=["title","titleId"];function Fc(){return Fc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Fc.apply(null,arguments)}function QE(t,n){if(t==null)return{};var r,o,i=JE(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function JE(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Mg,wy=function(t){var n=t.title,r=t.titleId,o=QE(t,GE);return p.createElement("svg",Fc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Dg||(Dg=p.createElement("path",{d:"M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"})))},ZE=["title","titleId"];function Lc(){return Lc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Lc.apply(null,arguments)}function XE(t,n){if(t==null)return{};var r,o,i=ek(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ek(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ng,xy=function(t){var n=t.title,r=t.titleId,o=XE(t,ZE);return p.createElement("svg",Lc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Mg||(Mg=p.createElement("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"})))},tk=["title","titleId"];function Ac(){return Ac=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ac.apply(null,arguments)}function nk(t,n){if(t==null)return{};var r,o,i=rk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function rk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Rg,jy=function(t){var n=t.title,r=t.titleId,o=nk(t,tk);return p.createElement("svg",Ac({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ng||(Ng=p.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"})))},ok=["title","titleId"];function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},_c.apply(null,arguments)}function ik(t,n){if(t==null)return{};var r,o,i=ak(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ak(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Fg,Ey=function(t){var n=t.title,r=t.titleId,o=ik(t,ok);return p.createElement("svg",_c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Rg||(Rg=p.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})))},lk=["title","titleId"];function $c(){return $c=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},$c.apply(null,arguments)}function sk(t,n){if(t==null)return{};var r,o,i=ck(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ck(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Lg,ky=function(t){var n=t.title,r=t.titleId,o=sk(t,lk);return p.createElement("svg",$c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Fg||(Fg=p.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})))},uk=["title","titleId"];function zc(){return zc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},zc.apply(null,arguments)}function dk(t,n){if(t==null)return{};var r,o,i=fk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function fk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ag,Oy=function(t){var n=t.title,r=t.titleId,o=dk(t,uk);return p.createElement("svg",zc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Lg||(Lg=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},pk=["title","titleId"];function Hc(){return Hc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Hc.apply(null,arguments)}function gk(t,n){if(t==null)return{};var r,o,i=hk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function hk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var _g,Sy=function(t){var n=t.title,r=t.titleId,o=gk(t,pk);return p.createElement("svg",Hc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ag||(Ag=p.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})))},mk=["title","titleId"];function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Bc.apply(null,arguments)}function bk(t,n){if(t==null)return{};var r,o,i=vk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function vk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var $g,Cy=function(t){var n=t.title,r=t.titleId,o=bk(t,mk);return p.createElement("svg",Bc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,_g||(_g=p.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})))},yk=["title","titleId"];function Vc(){return Vc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Vc.apply(null,arguments)}function wk(t,n){if(t==null)return{};var r,o,i=xk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function xk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var zg,Py=function(t){var n=t.title,r=t.titleId,o=wk(t,yk);return p.createElement("svg",Vc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,$g||($g=p.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},jk=["title","titleId"];function Wc(){return Wc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Wc.apply(null,arguments)}function Ek(t,n){if(t==null)return{};var r,o,i=kk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Hg,Iy=function(t){var n=t.title,r=t.titleId,o=Ek(t,jk);return p.createElement("svg",Wc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,zg||(zg=p.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))},Ok=["title","titleId"];function Uc(){return Uc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Uc.apply(null,arguments)}function Sk(t,n){if(t==null)return{};var r,o,i=Ck(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Ck(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Bg,Ty=function(t){var n=t.title,r=t.titleId,o=Sk(t,Ok);return p.createElement("svg",Uc({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Hg||(Hg=p.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))},Pk=["title","titleId"];function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},qc.apply(null,arguments)}function Ik(t,n){if(t==null)return{};var r,o,i=Tk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Tk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Vg,qa=function(t){var n=t.title,r=t.titleId,o=Ik(t,Pk);return p.createElement("svg",qc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Bg||(Bg=p.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"})))},Dk=["title","titleId"];function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Yc.apply(null,arguments)}function Mk(t,n){if(t==null)return{};var r,o,i=Nk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Nk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Wg,Dy=function(t){var n=t.title,r=t.titleId,o=Mk(t,Dk);return p.createElement("svg",Yc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Vg||(Vg=p.createElement("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"})))},Rk=["title","titleId"];function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Kc.apply(null,arguments)}function Fk(t,n){if(t==null)return{};var r,o,i=Lk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Lk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ug,My=function(t){var n=t.title,r=t.titleId,o=Fk(t,Rk);return p.createElement("svg",Kc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Wg||(Wg=p.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))},Ak=["title","titleId"];function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Gc.apply(null,arguments)}function _k(t,n){if(t==null)return{};var r,o,i=$k(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $k(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var qg,Ny=function(t){var n=t.title,r=t.titleId,o=_k(t,Ak);return p.createElement("svg",Gc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ug||(Ug=p.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))},zk=["title","titleId"];function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Qc.apply(null,arguments)}function Hk(t,n){if(t==null)return{};var r,o,i=Bk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Bk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Yg,Ry=function(t){var n=t.title,r=t.titleId,o=Hk(t,zk);return p.createElement("svg",Qc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,qg||(qg=p.createElement("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},Vk=["title","titleId"];function Jc(){return Jc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Jc.apply(null,arguments)}function Wk(t,n){if(t==null)return{};var r,o,i=Uk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Uk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Kg,Fy=function(t){var n=t.title,r=t.titleId,o=Wk(t,Vk);return p.createElement("svg",Jc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Yg||(Yg=p.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))},qk=["title","titleId"];function Zc(){return Zc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Zc.apply(null,arguments)}function Yk(t,n){if(t==null)return{};var r,o,i=Kk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Kk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Gg,Ly=function(t){var n=t.title,r=t.titleId,o=Yk(t,qk);return p.createElement("svg",Zc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Kg||(Kg=p.createElement("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))},Gk=["title","titleId"];function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Xc.apply(null,arguments)}function Qk(t,n){if(t==null)return{};var r,o,i=Jk(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Jk(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Qg,Ay=function(t){var n=t.title,r=t.titleId,o=Qk(t,Gk);return p.createElement("svg",Xc({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Gg||(Gg=p.createElement("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})))},Zk=["title","titleId"];function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},eu.apply(null,arguments)}function Xk(t,n){if(t==null)return{};var r,o,i=eO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function eO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Jg,_y=function(t){var n=t.title,r=t.titleId,o=Xk(t,Zk);return p.createElement("svg",eu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Qg||(Qg=p.createElement("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})))},tO=["title","titleId"];function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},tu.apply(null,arguments)}function nO(t,n){if(t==null)return{};var r,o,i=rO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function rO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Zg,$y=function(t){var n=t.title,r=t.titleId,o=nO(t,tO);return p.createElement("svg",tu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Jg||(Jg=p.createElement("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))},oO=["title","titleId"];function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},nu.apply(null,arguments)}function iO(t,n){if(t==null)return{};var r,o,i=aO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function aO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Xg,zy=function(t){var n=t.title,r=t.titleId,o=iO(t,oO);return p.createElement("svg",nu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Zg||(Zg=p.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"})))},lO=["title","titleId"];function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ru.apply(null,arguments)}function sO(t,n){if(t==null)return{};var r,o,i=cO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function cO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var eh,Hy=function(t){var n=t.title,r=t.titleId,o=sO(t,lO);return p.createElement("svg",ru({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Xg||(Xg=p.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})))},uO=["title","titleId"];function ou(){return ou=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ou.apply(null,arguments)}function dO(t,n){if(t==null)return{};var r,o,i=fO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function fO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var th,nh,yo=function(t){var n=t.title,r=t.titleId,o=dO(t,uO);return p.createElement("svg",ou({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,eh||(eh=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})))},pO=["title","titleId"];function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},iu.apply(null,arguments)}function gO(t,n){if(t==null)return{};var r,o,i=hO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function hO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var rh,By=function(t){var n=t.title,r=t.titleId,o=gO(t,pO);return p.createElement("svg",iu({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,th||(th=p.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),nh||(nh=p.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))},mO=["title","titleId"];function au(){return au=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},au.apply(null,arguments)}function bO(t,n){if(t==null)return{};var r,o,i=vO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function vO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var oh,Vy=function(t){var n=t.title,r=t.titleId,o=bO(t,mO);return p.createElement("svg",au({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,rh||(rh=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})))},yO=["title","titleId"];function lu(){return lu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},lu.apply(null,arguments)}function wO(t,n){if(t==null)return{};var r,o,i=xO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function xO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ih,ah,Wy=function(t){var n=t.title,r=t.titleId,o=wO(t,yO);return p.createElement("svg",lu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,oh||(oh=p.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))},jO=["title","titleId"];function su(){return su=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},su.apply(null,arguments)}function EO(t,n){if(t==null)return{};var r,o,i=kO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var lh,sh,Uy=function(t){var n=t.title,r=t.titleId,o=EO(t,jO);return p.createElement("svg",su({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ih||(ih=p.createElement("circle",{cx:10,cy:8,r:4})),ah||(ah=p.createElement("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},OO=["title","titleId"];function cu(){return cu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},cu.apply(null,arguments)}function SO(t,n){if(t==null)return{};var r,o,i=CO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function CO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ch,qy=function(t){var n=t.title,r=t.titleId,o=SO(t,OO);return p.createElement("svg",cu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,lh||(lh=p.createElement("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zm0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z"})),sh||(sh=p.createElement("path",{d:"M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z"})))},PO=["title","titleId"];function uu(){return uu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},uu.apply(null,arguments)}function IO(t,n){if(t==null)return{};var r,o,i=TO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function TO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var uh,dh,Yy=function(t){var n=t.title,r=t.titleId,o=IO(t,PO);return p.createElement("svg",uu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ch||(ch=p.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))},DO=["title","titleId"];function du(){return du=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},du.apply(null,arguments)}function MO(t,n){if(t==null)return{};var r,o,i=NO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function NO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var fh,Ky=function(t){var n=t.title,r=t.titleId,o=MO(t,DO);return p.createElement("svg",du({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,uh||(uh=p.createElement("path",{d:"M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86a8 8 0 0 1-5.61 1.01c-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"})),dh||(dh=p.createElement("path",{d:"M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"})))},RO=["title","titleId"];function fu(){return fu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},fu.apply(null,arguments)}function FO(t,n){if(t==null)return{};var r,o,i=LO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function LO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ph,Gy=function(t){var n=t.title,r=t.titleId,o=FO(t,RO);return p.createElement("svg",fu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,fh||(fh=p.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"})))},AO=["title","titleId"];function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},pu.apply(null,arguments)}function _O(t,n){if(t==null)return{};var r,o,i=$O(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $O(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var gh,Qy=function(t){var n=t.title,r=t.titleId,o=_O(t,AO);return p.createElement("svg",pu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ph||(ph=p.createElement("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"})))},zO=["title","titleId"];function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},gu.apply(null,arguments)}function HO(t,n){if(t==null)return{};var r,o,i=BO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function BO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var hh,mh,Jy=function(t){var n=t.title,r=t.titleId,o=HO(t,zO);return p.createElement("svg",gu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,gh||(gh=p.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})))},VO=["title","titleId"];function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},hu.apply(null,arguments)}function WO(t,n){if(t==null)return{};var r,o,i=UO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function UO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var bh,Zy=function(t){var n=t.title,r=t.titleId,o=WO(t,VO);return p.createElement("svg",hu({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,hh||(hh=p.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),mh||(mh=p.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))},qO=["title","titleId"];function mu(){return mu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},mu.apply(null,arguments)}function YO(t,n){if(t==null)return{};var r,o,i=KO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function KO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var vh,Xy=function(t){var n=t.title,r=t.titleId,o=YO(t,qO);return p.createElement("svg",mu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,bh||(bh=p.createElement("path",{d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},GO=["title","titleId"];function bu(){return bu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},bu.apply(null,arguments)}function QO(t,n){if(t==null)return{};var r,o,i=JO(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function JO(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var yh,wh,xh,jh,e1=function(t){var n=t.title,r=t.titleId,o=QO(t,GO);return p.createElement("svg",bu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,vh||(vh=p.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))},ZO=["title","titleId"];function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},vu.apply(null,arguments)}function XO(t,n){if(t==null)return{};var r,o,i=e5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function e5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Eh,kh,Oh,Sh,t1=function(t){var n=t.title,r=t.titleId,o=XO(t,ZO);return p.createElement("svg",vu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,yh||(yh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),wh||(wh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),xh||(xh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),jh||(jh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},t5=["title","titleId"];function yu(){return yu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},yu.apply(null,arguments)}function n5(t,n){if(t==null)return{};var r,o,i=r5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function r5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ch,Ph,Ih,Th,n1=function(t){var n=t.title,r=t.titleId,o=n5(t,t5);return p.createElement("svg",yu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Eh||(Eh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),kh||(kh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Oh||(Oh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),Sh||(Sh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},o5=["title","titleId"];function wu(){return wu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},wu.apply(null,arguments)}function i5(t,n){if(t==null)return{};var r,o,i=a5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function a5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Dh,Mh,Nh,r1=function(t){var n=t.title,r=t.titleId,o=i5(t,o5);return p.createElement("svg",wu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ch||(Ch=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Ph||(Ph=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Ih||(Ih=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),Th||(Th=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))},l5=["title","titleId"];function xu(){return xu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},xu.apply(null,arguments)}function s5(t,n){if(t==null)return{};var r,o,i=c5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function c5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Rh,o1=function(t){var n=t.title,r=t.titleId,o=s5(t,l5);return p.createElement("svg",xu({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Dh||(Dh=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Mh||(Mh=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Nh||(Nh=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))},u5=["title","titleId"];function ju(){return ju=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ju.apply(null,arguments)}function d5(t,n){if(t==null)return{};var r,o,i=f5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function f5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Fh,i1=function(t){var n=t.title,r=t.titleId,o=d5(t,u5);return p.createElement("svg",ju({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Rh||(Rh=p.createElement("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"})))},p5=["title","titleId"];function Eu(){return Eu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Eu.apply(null,arguments)}function g5(t,n){if(t==null)return{};var r,o,i=h5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function h5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Lh,a1=function(t){var n=t.title,r=t.titleId,o=g5(t,p5);return p.createElement("svg",Eu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Fh||(Fh=p.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})))},m5=["title","titleId"];function ku(){return ku=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ku.apply(null,arguments)}function b5(t,n){if(t==null)return{};var r,o,i=v5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function v5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ah,l1=function(t){var n=t.title,r=t.titleId,o=b5(t,m5);return p.createElement("svg",ku({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Lh||(Lh=p.createElement("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"})))},y5=["title","titleId"];function Ou(){return Ou=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ou.apply(null,arguments)}function w5(t,n){if(t==null)return{};var r,o,i=x5(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function x5(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var s1=function(t){var n=t.title,r=t.titleId,o=w5(t,y5);return p.createElement("svg",Ou({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ah||(Ah=p.createElement("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"})))};const j5=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,E5=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,_n=["accessTime","accountCircle","addCircle","autoAwesomeMosaic","autoAwesomeMotion","bolt","calendarToday","cancel","check","checkCircle","chevronLeft","chevronRight","close","comment","contentCopy","danger","dangerous","default","deleteForever","description","dns","download","edit","error","errorOutline","exitToApp","expandLess","expandMore","filterAlt","forum","help","home","info","manageAccounts","monitorHeart","moreVert","nightsStay","notificationsOff","openInBrowser","openInNew","place","search","severityLow","severityMedium","severityHigh","severityCritical","success","upload","warning","wbSunny","widgets"],k5=t=>{let{icon:n,color:r,size:o,title:i,iconClassName:a,...l}=t;const c=`juno-icon juno-icon-${n} jn-fill-current ${r} ${a}`;return n==="accessTime"?O.createElement(my,he({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):n==="accountCircle"?O.createElement(by,he({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):n==="addCircle"?O.createElement(vy,he({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):n==="autoAwesomeMosaic"?O.createElement(yy,he({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):n==="autoAwesomeMotion"?O.createElement(wy,he({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):n==="bolt"?O.createElement(xy,he({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):n==="calendarToday"?O.createElement(jy,he({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):n==="cancel"?O.createElement(Ey,he({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):n==="check"?O.createElement(ky,he({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):n==="checkCircle"?O.createElement(Oy,he({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):n==="chevronLeft"?O.createElement(Sy,he({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):n==="chevronRight"?O.createElement(Cy,he({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):n==="close"?O.createElement(Py,he({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):n==="comment"?O.createElement(Wy,he({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):n==="contentCopy"?O.createElement(Iy,he({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):n==="danger"?O.createElement(Ty,he({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):n==="dangerous"?O.createElement(qa,he({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):n==="deleteForever"?O.createElement(My,he({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):n==="description"?O.createElement(Ny,he({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):n==="dns"?O.createElement(Ry,he({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):n==="download"?O.createElement(Dy,he({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):n==="edit"?O.createElement(Fy,he({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):n==="error"?O.createElement(qa,he({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):n==="errorOutline"?O.createElement(Ly,he({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):n==="exitToApp"?O.createElement(Ay,he({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):n==="expandLess"?O.createElement(_y,he({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):n==="expandMore"?O.createElement($y,he({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):n==="filterAlt"?O.createElement(zy,he({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):n==="forum"?O.createElement(Hy,he({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):n==="help"?O.createElement(yo,he({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):n==="home"?O.createElement(By,he({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):n==="info"?O.createElement(Vy,he({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):n==="manageAccounts"?O.createElement(Uy,he({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):n==="monitorHeart"?O.createElement(qy,he({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):n==="moreVert"?O.createElement(Yy,he({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):n==="nightsStay"?O.createElement(Ky,he({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):n==="notificationsOff"?O.createElement(Gy,he({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):n==="openInBrowser"?O.createElement(Qy,he({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):n==="openInNew"?O.createElement(Jy,he({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):n==="place"?O.createElement(Zy,he({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):n==="search"?O.createElement(e1,he({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):n==="severityLow"?O.createElement(t1,he({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):n==="severityMedium"?O.createElement(n1,he({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):n==="severityHigh"?O.createElement(r1,he({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):n==="severityCritical"?O.createElement(o1,he({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):n==="success"?O.createElement(Xy,he({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):n==="upload"?O.createElement(i1,he({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):n==="widgets"?O.createElement(s1,he({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):n==="warning"?O.createElement(a1,he({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):n==="wbSunny"?O.createElement(l1,he({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):n==="default"?O.createElement(yo,he({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):O.createElement(yo,he({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},sn=p.forwardRef((t,n)=>{let{icon:r=null,color:o="",size:i="24",title:a="",className:l="",href:c="",disabled:u=!1,onClick:d,...f}=t;const g=c||d?"":l,b=c||d?{}:f,h=k5({icon:r,color:o,size:i,title:a,iconClassName:g,...b}),m=O.createElement("button",he({onClick:E=>{d&&d(E)},className:`juno-icon-button ${E5} ${l}`,"aria-label":a||r,disabled:u,ref:n},f),h),y=O.createElement("a",he({href:c,className:`juno-icon-link ${j5} ${l}`,"aria-label":a||r,ref:n},f),h);return c?y:d?m:O.createElement("span",{ref:n},h)});sn.displayName="Icon",sn.propTypes={icon:x.oneOf(_n),color:x.string,size:x.string,title:x.string,className:x.string,href:x.string,disabled:x.bool,onClick:x.func};const O5=`
	jn-rounded
	jn-text-sm
	jn-text-theme-default
	jn-py-0.5
	jn-px-1
  jn-justify-center
  jn-items-center
`,S5="jn-bg-theme-badge-default",C5="jn-bg-theme-info/25",P5="jn-bg-theme-success/25",I5="jn-bg-theme-warning/25",T5="jn-bg-theme-danger/25",D5="jn-bg-theme-danger/70 jn-text-theme-high",M5="jn-bg-theme-error/25",N5="jn-mr-1 jn-items-center",R5=["info","success","warning","danger","error","critical"],F5=t=>t==="info"?C5:t==="success"?P5:t==="warning"?I5:t==="danger"?T5:t==="error"?M5:t==="critical"?D5:S5,c1=t=>{let{variant:n="default",icon:r=!1,text:o="",className:i="",children:a=null,...l}=t;return O.createElement("span",he({className:`
        juno-badge 
        juno-badge-${n} 
        ${O5} 
        ${F5(n)}
        ${r?"jn-inline-flex":""}
        ${i}`},l),r?O.createElement(sn,{icon:((c,u)=>c&&_n.includes(c)?c:c===!0?u:null)(r,n),size:"1.125rem",className:`${N5}`,color:((c,u)=>c===!0?`jn-text-theme-${u}`:void 0)(r,n)}):null,a||o)};c1.propTypes={variant:x.oneOf(["default",...R5]),icon:x.oneOfType([x.bool,x.oneOf(_n)]),text:x.string,className:x.string,children:x.node};const L5=`
  jn-text-sm
  jn-rounded
  jn-bg-theme-box-default
  jn-border
  jn-border-theme-box-default
`,A5=`
  jn-py-1
  jn-px-2
`,u1=t=>{let{children:n=null,unpad:r=!1,className:o="",...i}=t;return O.createElement("div",he({className:`juno-box ${L5} ${r?"":A5} ${o}`},i),n)};u1.propTypes={children:x.node,unpad:x.bool,className:x.string};x.oneOf(_n),x.string,x.string,x.string,x.bool,x.func,x.bool,x.string,x.node;const _5=t=>t==="0"?"jn-gap-0":t==="px"?"jn-gap-px":t==="0.5"?"jn-gap-0.5":t==="1"?"jn-gap-1":t==="1.5"?"jn-gap-1.5":t==="2"?"jn-gap-2":t==="2.5"?"jn-gap-2.5":t==="3"?"jn-gap-3":t==="3.5"?"jn-gap-3.5":t==="4"?"jn-gap-4":t==="5"?"jn-gap-5":t==="6"?"jn-gap-6":t==="7"?"jn-gap-7":t==="8"?"jn-gap-8":t==="9"?"jn-gap-9":t==="10"?"jn-gap-10":t==="11"?"jn-gap-11":t==="12"?"jn-gap-12":t==="14"?"jn-gap-14":t==="16"?"jn-gap-16":t==="20"?"jn-gap-20":t==="24"?"jn-gap-24":t==="28"?"jn-gap-28":t==="32"?"jn-gap-32":t==="36"?"jn-gap-36":t==="40"?"jn-gap-40":t==="44"?"jn-gap-44":t==="48"?"jn-gap-48":t==="52"?"jn-gap-52":t==="56"?"jn-gap-56":t==="60"?"jn-gap-60":t==="64"?"jn-gap-64":t==="72"?"jn-gap-72":t==="80"?"jn-gap-80":t==="96"?"jn-gap-96":"jn-gap-0",$5=(t,n,r)=>`
      ${t==="vertical"?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}
      ${r&&"jn-flex-wrap"}
      ${_5(n)}
    `,z5=t=>t==="start"?"jn-items-start":t==="end"?"jn-items-end":t==="center"?"jn-items-center":t==="baseline"?"jn-items-baseline":t==="stretch"?"jn-items-stretch":"",H5=t=>t==="start"?"jn-justify-start":t==="end"?"jn-justify-end":t==="center"?"jn-justify-center":t==="between"?"jn-justify-between":t==="around"?"jn-justify-around":t==="evenly"?"jn-justify-evenly":"",Nf=t=>{let{direction:n="horizontal",gap:r="0",alignment:o="stretch",distribution:i="start",wrap:a=!1,className:l="",children:c=null,...u}=t;return O.createElement("div",he({className:`juno-stack ${$5(n,r,a)} ${z5(o)} ${H5(i)} ${l||""}`},u),c)};Nf.propTypes={children:x.node,className:x.string,direction:x.oneOf(["horizontal","vertical"]),alignment:x.oneOf(["start","end","center","baseline","stretch"]),distribution:x.oneOf(["start","end","center","between","around","evenly"]),wrap:x.bool,gap:x.oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])};x.string,x.node;var ke,B5=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,V5=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`;(function(t){t.accessTime="accessTime",t.accountCircle="accountCircle",t.addCircle="addCircle",t.autoAwesomeMosaic="autoAwesomeMosaic",t.autoAwesomeMotion="autoAwesomeMotion",t.bolt="bolt",t.calendarToday="calendarToday",t.cancel="cancel",t.check="check",t.checkCircle="checkCircle",t.chevronLeft="chevronLeft",t.chevronRight="chevronRight",t.close="close",t.comment="comment",t.contentCopy="contentCopy",t.danger="danger",t.dangerous="dangerous",t.default="default",t.deleteForever="deleteForever",t.description="description",t.dns="dns",t.download="download",t.edit="edit",t.error="error",t.errorOutline="errorOutline",t.exitToApp="exitToApp",t.expandLess="expandLess",t.expandMore="expandMore",t.filterAlt="filterAlt",t.forum="forum",t.help="help",t.home="home",t.info="info",t.manageAccounts="manageAccounts",t.monitorHeart="monitorHeart",t.moreVert="moreVert",t.nightsStay="nightsStay",t.notificationsOff="notificationsOff",t.openInBrowser="openInBrowser",t.openInNew="openInNew",t.place="place",t.search="search",t.severityLow="severityLow",t.severityMedium="severityMedium",t.severityHigh="severityHigh",t.severityCritical="severityCritical",t.success="success",t.upload="upload",t.warning="warning",t.wbSunny="wbSunny",t.widgets="widgets"})(ke||(ke={}));var W5=function(t){var n=t.icon,r=t.color,o=t.size,i=t.title,a=t.iconClassName,l=it(t,["icon","color","size","title","iconClassName"]),c="juno-icon juno-icon-".concat(n," jn-fill-current ").concat(r," ").concat(a),u=ke[n||"default"];return u===ke.accessTime?O.createElement(my,ue({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):u===ke.accountCircle?O.createElement(by,ue({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):u===ke.addCircle?O.createElement(vy,ue({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):u===ke.autoAwesomeMosaic?O.createElement(yy,ue({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):u===ke.autoAwesomeMotion?O.createElement(wy,ue({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):u===ke.bolt?O.createElement(xy,ue({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):u===ke.calendarToday?O.createElement(jy,ue({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):u===ke.cancel?O.createElement(Ey,ue({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):u===ke.check?O.createElement(ky,ue({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):u===ke.checkCircle?O.createElement(Oy,ue({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):u===ke.chevronLeft?O.createElement(Sy,ue({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):u===ke.chevronRight?O.createElement(Cy,ue({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):u===ke.close?O.createElement(Py,ue({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):u===ke.comment?O.createElement(Wy,ue({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):u===ke.contentCopy?O.createElement(Iy,ue({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):u===ke.danger?O.createElement(Ty,ue({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):u===ke.dangerous?O.createElement(qa,ue({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):u===ke.deleteForever?O.createElement(My,ue({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):u===ke.description?O.createElement(Ny,ue({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):u===ke.dns?O.createElement(Ry,ue({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):u===ke.download?O.createElement(Dy,ue({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):u===ke.edit?O.createElement(Fy,ue({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):u===ke.error?O.createElement(qa,ue({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):u===ke.errorOutline?O.createElement(Ly,ue({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):u===ke.exitToApp?O.createElement(Ay,ue({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):u===ke.expandLess?O.createElement(_y,ue({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):u===ke.expandMore?O.createElement($y,ue({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):u===ke.filterAlt?O.createElement(zy,ue({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):u===ke.forum?O.createElement(Hy,ue({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):u===ke.help?O.createElement(yo,ue({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):u===ke.home?O.createElement(By,ue({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):u===ke.info?O.createElement(Vy,ue({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):u===ke.manageAccounts?O.createElement(Uy,ue({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):u===ke.monitorHeart?O.createElement(qy,ue({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):u===ke.moreVert?O.createElement(Yy,ue({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):u===ke.nightsStay?O.createElement(Ky,ue({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):u===ke.notificationsOff?O.createElement(Gy,ue({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):u===ke.openInBrowser?O.createElement(Qy,ue({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):u===ke.openInNew?O.createElement(Jy,ue({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):u===ke.place?O.createElement(Zy,ue({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):u===ke.search?O.createElement(e1,ue({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):u===ke.severityLow?O.createElement(t1,ue({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):u===ke.severityMedium?O.createElement(n1,ue({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):u===ke.severityHigh?O.createElement(r1,ue({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):u===ke.severityCritical?O.createElement(o1,ue({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):u===ke.success?O.createElement(Xy,ue({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):u===ke.upload?O.createElement(i1,ue({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):u===ke.widgets?O.createElement(s1,ue({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):u===ke.warning?O.createElement(a1,ue({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):u===ke.wbSunny?O.createElement(l1,ue({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):u===ke.default?O.createElement(yo,ue({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):O.createElement(yo,ue({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},kr=p.forwardRef(function(t,n){var r=t.icon,o=r===void 0?null:r,i=t.color,a=i===void 0?"":i,l=t.size,c=l===void 0?24:l,u=t.title,d=u===void 0?"":u,f=t.className,g=f===void 0?"":f,b=t.href,h=b===void 0?"":b,m=t.disabled,y=t.onClick,E=it(t,["icon","color","size","title","className","href","disabled","onClick"]),v=h||y?"":g,k=h||y?{}:E,C=W5(ue({icon:o||void 0,color:a,size:c,title:d,iconClassName:v},k)),D=O.createElement("button",ue({},E,{type:"button",onClick:function(T){y&&y(T)},className:"juno-icon-button ".concat(V5," ").concat(g),"aria-label":d||o||void 0,disabled:m!==void 0&&m,ref:n}),C),I=O.createElement("a",ue({},E,{"aria-label":d||o||void 0,href:h,className:"juno-icon-link ".concat(B5," ").concat(g),ref:n}),C);return h?I:y?D:O.createElement("span",{ref:n},C)});kr.displayName="IconTs";var U5=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,q5=`
  jn-text-theme-accent
`,Y5=`
  jn-text-theme-danger 
`,K5=`
  jn-text-theme-success
`,G5=`
  jn-text-theme-warning  
`,Q5=`
  jn-text-theme-on-default
`,d1=function(t){var n=t.variant,r=n===void 0?"default":n,o=t.size,i=o===void 0?null:o,a=t.className,l=a===void 0?"":a,c=t.color,u=c===void 0?"":c,d=it(t,["variant","size","className","color"]),f=function(b){return b==="small"?"1rem":b==="large"?"3rem":b},g=i?{width:f(i),height:f(i)}:{};return O.createElement("svg",ue({className:"juno-spinner ".concat(U5," ").concat(u||function(){return r==="primary"?q5:r==="danger"?Y5:r==="success"?K5:r==="warning"?G5:Q5}()," ").concat(l),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:g,role:"progressbar"},d),O.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),O.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))},_h=`
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
`,$h=`
  jn-text-sm
  jn-leading-5
`,zh=`
  jn-text-base
  jn-leading-6
`,J5=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,Z5=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,X5=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,eS=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,Hh=function(t,n){return t==="small"?n==="subdued"?"".concat(Z5):"".concat(J5):n==="subdued"?"".concat(eS):"".concat(X5)},tS=`
  jn-mr-2
`,nS=`
  jn-mr-2
`,rS=function(t){return t==="small"?"".concat(tS):"".concat(nS)},Bh=function(t){var n=t?"in-progress":"";return n},oS=function(t){return t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":""},Su=O.forwardRef(function(t,n){var r=t.label,o=t.title,i=o===void 0?null:o,a=t.variant,l=t.size,c=l===void 0?"default":l,u=t.disabled,d=u===void 0?null:u,f=t.href,g=f===void 0?null:f,b=t.icon,h=b===void 0?null:b,m=t.className,y=m===void 0?"":m,E=t.onClick,v=t.children,k=t.progress,C=k!==void 0&&k,D=t.progressLabel,I=D===void 0?"":D,T=it(t,["label","title","variant","size","disabled","href","icon","className","onClick","children","progress","progressLabel"]),z=a||"default",A=i||r||"",Q=C?O.createElement(d1,{size:c==="small"?"1.125rem":"1.5rem",color:"".concat(oS(z))}):h?O.createElement(kr,{icon:h,title:A,className:"juno-button-icon ".concat(r||v?rS(c):""," "),size:c==="small"?"1.125rem":"1.5rem"}):null,B=C&&I?I:r||v,F=O.createElement("button",ue({className:`
          juno-button 
          juno-button-`.concat(z,` 
          juno-button-`).concat(c,`-size 
          `).concat(_h,` 
          `).concat(c==="small"?$h:zh,` 
          `).concat(Hh(c,a),`
          `).concat(Bh(C),` 
          `).concat(y),disabled:d||void 0,onClick:function(_){E&&E(_)},ref:n},T,{type:"button",title:A}),Q,B),L=O.createElement("a",ue({href:g||void 0,role:"button",className:`
          juno-button 
          juno-button-`.concat(z,` 
          juno-button-`).concat(c,`-size 
          `).concat(_h,` 
          `).concat(c==="small"?$h:zh,`
          `).concat(Hh(c,a),`
          `).concat(Bh(C),` 
          `).concat(y,`
        `),disabled:d,onClick:E,ref:n},T,{title:A}),Q,B);return g?L:F});Su.displayName="Button";var iS=function(t){return t==="0"?"jn-gap-0":t==="px"?"jn-gap-px":t==="0.5"?"jn-gap-0.5":t==="1"?"jn-gap-1":t==="1.5"?"jn-gap-1.5":t==="2"?"jn-gap-2":t==="2.5"?"jn-gap-2.5":t==="3"?"jn-gap-3":t==="3.5"?"jn-gap-3.5":t==="4"?"jn-gap-4":t==="5"?"jn-gap-5":t==="6"?"jn-gap-6":t==="7"?"jn-gap-7":t==="8"?"jn-gap-8":t==="9"?"jn-gap-9":t==="10"?"jn-gap-10":t==="11"?"jn-gap-11":t==="12"?"jn-gap-12":t==="14"?"jn-gap-14":t==="16"?"jn-gap-16":t==="20"?"jn-gap-20":t==="24"?"jn-gap-24":t==="28"?"jn-gap-28":t==="32"?"jn-gap-32":t==="36"?"jn-gap-36":t==="40"?"jn-gap-40":t==="44"?"jn-gap-44":t==="48"?"jn-gap-48":t==="52"?"jn-gap-52":t==="56"?"jn-gap-56":t==="60"?"jn-gap-60":t==="64"?"jn-gap-64":t==="72"?"jn-gap-72":t==="80"?"jn-gap-80":t==="96"?"jn-gap-96":"jn-gap-0"},aS=function(t,n,r){return`
      `.concat(t==="vertical"?"jn-flex jn-flex-col":"jn-flex jn-flex-row",`
      `).concat(r&&"jn-flex-wrap",`
      `).concat(iS(n),`
    `)},lS=function(t){return t==="start"?"jn-items-start":t==="end"?"jn-items-end":t==="center"?"jn-items-center":t==="baseline"?"jn-items-baseline":t==="stretch"?"jn-items-stretch":""},sS=function(t){return t==="start"?"jn-justify-start":t==="end"?"jn-justify-end":t==="center"?"jn-justify-center":t==="between"?"jn-justify-between":t==="around"?"jn-justify-around":t==="evenly"?"jn-justify-evenly":""},Ln=function(t){var n=t.direction,r=n===void 0?"horizontal":n,o=t.gap,i=o===void 0?"0":o,a=t.alignment,l=a===void 0?"stretch":a,c=t.distribution,u=c===void 0?"start":c,d=t.wrap,f=t.className,g=f===void 0?"":f,b=t.children,h=b===void 0?null:b,m=it(t,["direction","gap","alignment","distribution","wrap","className","children"]);return O.createElement("div",ue({className:"juno-stack ".concat(aS(r,i,d!==void 0&&d)," ").concat(lS(l)," ").concat(sS(u)," ").concat(g||"")},m),h)},cS=`
  jn-text-theme-high
  jn-text-base
  jn-transform 
  jn-origin-top-left 
  jn-transition-all 
  jn-duration-100 
  jn-ease-in-out
  jn-z-10
`,uS=`
  jn-absolute
`,dS=`
  jn-scale-75
  -jn-translate-y-[0.4375rem]
`,fS=`
  jn-inline-block
  jn-w-1
  jn-h-1
  jn-rounded-full
  jn-align-top
  jn-ml-1
  jn-mt-2
  jn-bg-theme-required
`,pS=`
  jn-opacity-50
  jn-cursor-not-allowed
`,gS=O.forwardRef(function(t,n){var r=t.text,o=r===void 0?"":r,i=t.htmlFor,a=i===void 0?void 0:i,l=t.required,c=t.className,u=c===void 0?"":c,d=t.disabled,f=t.floating,g=t.minimized,b=it(t,["text","htmlFor","required","className","disabled","floating","minimized"]);return O.createElement("label",ue({className:`
        juno-label 
        `.concat(cS,` 
        `).concat(f!==void 0&&f?"juno-label-floating "+uS:"",`
        `).concat(g!==void 0&&g?"juno-label-minimized "+dS:"",`
        `).concat(d!==void 0&&d?"juno-label-disabled "+pS:"",` 
        `).concat(u,`
      `),htmlFor:a,ref:n},b),o,l!==void 0&&l?O.createElement("span",{className:`
          juno-required 
          `.concat(fS,`
          `)}):"")});gS.displayName="Label";p.createContext(void 0);x.string,x.string,x.node;const hS=t=>t==="rounded"?`
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
   jn-w-auto`,mS=t=>{const n=`
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
   jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5`},bS=t=>t==="rounded"?"jn-absolute jn-inline-flex jn-right-3 jn-top-1":t==="hero"?"jn-absolute jn-inline-flex jn-right-5":"jn-absolute jn-inline-flex jn-right-3 jn-top-2",vS=t=>t==="rounded"?"jn-mr-2":t==="hero"?"jn-mr-2.5":"jn-mr-2",yS=t=>t==="hero"?"24":"18",f1=t=>{let{value:n="",variant:r="default",disabled:o=!1,clear:i=!0,onSearch:a=void 0,onChange:l=void 0,onClick:c=void 0,onKeyPress:u=void 0,onClear:d=void 0,autoComplete:f="off",placeholder:g="Search…",className:b="",...h}=t;const[m,y]=p.useState(n);return p.useEffect(()=>{y(n)},[n]),O.createElement("div",{className:`juno-search-input-wrapper ${hS(r)} ${b}`,role:"search"},O.createElement(Nf,{gap:"2",alignment:"center"},O.createElement("input",he({type:"search",name:name||"search",placeholder:g,disabled:o,value:m,autoComplete:f,className:`juno-search-input ${mS(r)}`,onChange:E=>{y(E.target.value),l&&l(E)},onKeyPress:E=>{E.key==="Enter"&&a&&a(m),u&&u(E)}},h)),O.createElement("div",{className:`${bS(r)}`},i&&(m!=null&&m.length)?O.createElement(sn,{icon:"close",size:`${yS(r)}`,title:"Clear",className:`${vS(r)}`,onClick:E=>{y(""),d&&d(E)},disabled:o}):null,O.createElement(sn,{icon:"search",title:"Search",onClick:E=>{a&&a(m),c&&c(E)},disabled:o}))))};f1.propTypes={name:x.string,variant:x.oneOf(["rounded","hero","default"]),disabled:x.bool,placeholder:x.string,value:x.string,autoComplete:x.string,clear:x.bool,className:x.string,onSearch:x.func,onClick:x.func,onChange:x.func,onKeyPress:x.func,onClear:x.func};const wS={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"};O.createContext(wS);x.bool;x.string;x.oneOfType([x.string,x.number]);x.string,x.any;x.oneOfType([x.string,x.number,x.bool]),x.any,x.number;x.oneOfType([x.object,x.array]).isRequired,x.object,x.bool,x.bool,x.oneOfType([x.shape({base00:x.string,base01:x.string,base02:x.string,base03:x.string,base04:x.string,base05:x.string,base06:x.string,base07:x.string,base08:x.string,base09:x.string,base0A:x.string,base0B:x.string,base0C:x.string,base0D:x.string,base0E:x.string,base0F:x.string}),x.oneOf(["dark","light"])]),x.oneOfType([x.number,x.bool]),x.oneOfType([x.bool,x.number]),x.number,x.string;x.oneOfType([x.string,x.object]),x.oneOfType([x.node,x.object]),x.string,x.bool,x.oneOf(["auto","small","medium","large"]),x.bool,x.string,x.string;var xS=Object.defineProperty,jS=(t,n,r)=>n in t?xS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,ks=(t,n,r)=>(jS(t,typeof n=="symbol"?n:n+"",r),r);let ES=class{constructor(){ks(this,"current",this.detect()),ks(this,"handoffState","pending"),ks(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},tr=new ES,Ge=(t,n)=>{tr.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)};function bn(t){let n=p.useRef(t);return Ge(()=>{n.current=t},[t]),n}let pe=function(t){let n=bn(t);return O.useCallback(function(){return n.current(...arguments)},[n])};function p1(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(n=>setTimeout(()=>{throw n}))}function Bt(){let t=[],n={addEventListener(r,o,i,a){return r.addEventListener(o,i,a),n.add(()=>r.removeEventListener(o,i,a))},requestAnimationFrame(){let r=requestAnimationFrame(...arguments);return n.add(()=>cancelAnimationFrame(r))},nextFrame(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...o))},setTimeout(){let r=setTimeout(...arguments);return n.add(()=>clearTimeout(r))},microTask(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];let a={current:!0};return p1(()=>{a.current&&o[0]()}),n.add(()=>{a.current=!1})},style(r,o,i){let a=r.style.getPropertyValue(o);return Object.assign(r.style,{[o]:i}),this.add(()=>{Object.assign(r.style,{[o]:a})})},group(r){let o=Bt();return r(o),this.add(()=>o.dispose())},add(r){return t.push(r),()=>{let o=t.indexOf(r);if(0<=o)for(let i of t.splice(o,1))i()}},dispose(){for(let r of t.splice(0))r()}};return n}function wn(){let[t]=p.useState(Bt);return p.useEffect(()=>()=>t.dispose(),[t]),t}function kS(){let t=typeof document>"u";return"useSyncExternalStore"in eo&&(n=>n.useSyncExternalStore)(eo)(()=>()=>{},()=>!1,()=>!t)}function Ml(){let t=kS(),[n,r]=p.useState(tr.isHandoffComplete);return n&&tr.isHandoffComplete===!1&&r(!1),p.useEffect(()=>{n!==!0&&r(!0)},[n]),p.useEffect(()=>tr.handoff(),[]),!t&&n}var Vh;let cn=(Vh=O.useId)==null?function(){let t=Ml(),[n,r]=O.useState(t?()=>tr.nextId():null);return Ge(()=>{n===null&&r(tr.nextId())},[n]),n==null?void 0:""+n}:Vh;function rt(t,n){if(t in n){let l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}let a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,rt),a}function Ui(t){return tr.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let Cu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Pu=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Pu||{}),OS=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(OS||{}),SS=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(SS||{});function g1(){var t=Number.MAX_SAFE_INTEGER;let n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.body;return n==null?[]:Array.from(n.querySelectorAll(Cu)).sort((r,o)=>Math.sign((r.tabIndex||t)-(o.tabIndex||t)))}var Nl=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Nl||{});function Rl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=Ui(t))==null?void 0:r.body)&&rt(n,{0(){return t.matches(Cu)},1(){for(let o=t;o!==null;){if(o.matches(Cu))return!0;o=o.parentElement}return!1}})}function h1(t){let n=Ui(t);Bt().nextFrame(()=>{n&&!Rl(n.activeElement,0)&&PS(t)})}var CS=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(CS||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function PS(t){t==null||t.focus({preventScroll:!0})}let IS="textarea,input";function TS(t){var n,r;return(r=(n=t==null?void 0:t.matches)==null?void 0:n.call(t,IS))!=null&&r}function Fl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:r=>r;return t.slice().sort((r,o)=>{let i=n(r),a=n(o);if(i===null||a===null)return 0;let l=i.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function DS(t,n){return MS(g1(),n,{relativeTo:t})}function MS(t,n){let{sorted:r=!0,relativeTo:o=null,skipElements:i=[]}=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},a=Array.isArray(t)?0<t.length?t[0].ownerDocument:document:t.ownerDocument,l=Array.isArray(t)?r?Fl(t):t:g1(t);0<i.length&&1<l.length&&(l=l.filter(h=>!i.includes(h))),o=o??a.activeElement;let c,u=(()=>{if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{var h=Math.max;if(1&n)return 0;if(2&n)return h(0,l.indexOf(o))-1;if(4&n)return h(0,l.indexOf(o))+1;if(8&n)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&n?{preventScroll:!0}:{},g=0,b=l.length;do{if(g>=b||0>=g+b)return 0;let h=d+g;if(16&n)h=(h+b)%b;else{if(0>h)return 3;if(h>=b)return 1}c=l[h],c==null||c.focus(f),g+=u}while(c!==a.activeElement);return 6&n&&TS(c)&&c.select(),2}function NS(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&0<window.navigator.maxTouchPoints}function RS(){return/Android/gi.test(window.navigator.userAgent)}function m1(){return NS()||RS()}function ua(t,n,r){let o=bn(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function FS(t,n,r){let o=bn(n);p.useEffect(()=>{function i(a){o.current(a)}return window.addEventListener(t,i,r),()=>window.removeEventListener(t,i,r)},[t,r])}function Rf(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){let u=c(l);if(u!==null&&u.getRootNode().contains(u)&&u.isConnected){let d=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t);for(let f of d){if(f===null)continue;let g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(u)||l.composed&&l.composedPath().includes(g))return}return!Rl(u,Nl.Loose)&&u.tabIndex!==-1&&l.preventDefault(),n(l,u)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);let a=p.useRef(null);ua("pointerdown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ua("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ua("click",l=>{m1()||a.current&&(r(l,()=>a.current),a.current=null)},!0),ua("touchend",l=>r(l,()=>l.target instanceof HTMLElement?l.target:null),!0),FS("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Ll(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return p.useMemo(()=>Ui(...n),[...n])}function Wh(t){var n;if(t.type)return t.type;let r=(n=t.as)==null?"button":n;if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Ff(t,n){let[r,o]=p.useState(()=>Wh(t));return Ge(()=>{o(Wh(t))},[t.type,t.as]),Ge(()=>{r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")},[r,n]),r}let b1=Symbol();function LS(t){let n=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return Object.assign(t,{[b1]:n})}function xt(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=p.useRef(n);p.useEffect(()=>{o.current=n},[n]);let i=pe(a=>{for(let l of o.current)l!=null&&(typeof l=="function"?l(a):l.current=a)});return n.every(a=>a==null||(a==null?void 0:a[b1]))?void 0:i}function Uh(t){return[t.screenX,t.screenY]}function Lf(){let t=p.useRef([-1,-1]);return{wasMoved(n){let r=Uh(n);return(t.current[0]!==r[0]||t.current[1]!==r[1])&&(t.current=r,!0)},update(n){t.current=Uh(n)}}}function Ya(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return Array.from(new Set(n.flatMap(o=>typeof o=="string"?o.split(" "):[]))).filter(Boolean).join(" ")}var Or=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Or||{}),xr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(xr||{});function ht(t){let{ourProps:n,theirProps:r,slot:o,defaultTag:i,features:a,visible:l=!0,name:c,mergeRefs:u}=t;u=u??AS;let d=v1(r,n);if(l)return da(d,o,i,c,u);let f=a??0;if(2&f){let{static:g=!1,...b}=d;if(g)return da(b,o,i,c,u)}if(1&f){let{unmount:g=!0,...b}=d;return rt(g?0:1,{0(){return null},1(){return da({...b,hidden:!0,style:{display:"none"}},o,i,c,u)}})}return da(d,o,i,c,u)}function da(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},r=2<arguments.length?arguments[2]:void 0,o=3<arguments.length?arguments[3]:void 0,i=4<arguments.length?arguments[4]:void 0,{as:a=r,children:l,refName:c="ref",...u}=Os(t,["unmount","static"]),d=t.ref===void 0?{}:{[c]:t.ref},f=typeof l=="function"?l(n):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(n));let g={};if(n){let b=!1,h=[];for(let[m,y]of Object.entries(n))typeof y=="boolean"&&(b=!0),y===!0&&h.push(m);b&&(g["data-headlessui-state"]=h.join(" "))}if(a===p.Fragment&&0<Object.keys(Ka(u)).length){if(!p.isValidElement(f)||Array.isArray(f)&&1<f.length)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let b=f.props,h=typeof(b==null?void 0:b.className)=="function"?function(){return Ya(b==null?void 0:b.className(...arguments),u.className)}:Ya(b==null?void 0:b.className,u.className),m=h?{className:h}:{};return p.cloneElement(f,Object.assign({},v1(f.props,Ka(Os(u,["ref"]))),g,d,{ref:i(f.ref,d.ref)},m))}return p.createElement(a,Object.assign({},Os(u,["ref"]),a!==p.Fragment&&d,a!==p.Fragment&&g),f)}function AS(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.every(o=>o==null)?void 0:o=>{for(let i of n)i!=null&&(typeof i=="function"?i(o):i.current=o)}}function v1(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length===0)return{};if(n.length===1)return n[0];let o={},i={};for(let a of n)for(let l in a)l.startsWith("on")&&typeof a[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(a[l])):o[l]=a[l];if(o.disabled||o["aria-disabled"])return Object.assign(o,Object.fromEntries(Object.keys(i).map(a=>[a,void 0])));for(let a in i)Object.assign(o,{[a](l){let c=i[a];for(var u=arguments.length,d=Array(1<u?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];for(let g of c){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;g(l,...d)}}});return o}function ft(t){var n;return Object.assign(p.forwardRef(t),{displayName:(n=t.displayName)==null?t.name:n})}function Ka(t){let n=Object.assign({},t);for(let r in n)n[r]===void 0&&delete n[r];return n}function Os(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],r=Object.assign({},t);for(let o of n)o in r&&delete r[o];return r}let Af=p.createContext(null);Af.displayName="OpenClosedContext";var ut=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(ut||{});function qi(){return p.useContext(Af)}function Al(t){let{value:n,children:r}=t;return O.createElement(Af.Provider,{value:n},r)}function _f(t){let n=t.parentElement,r=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(r=n),n=n.parentElement;let o=(n==null?void 0:n.getAttribute("disabled"))==="";return!(o&&_S(r))&&o}function _S(t){if(!t)return!1;for(let n=t.previousElementSibling;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}function $S(t){throw new Error("Unexpected object: "+t)}var Fe=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Fe||{});function Ga(t,n){let r=n.resolveItems();if(0>=r.length)return null;let o=n.resolveActiveIndex(),i=o??-1;switch(t.focus){case 0:{for(let a=0;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 1:{for(let a=i-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 2:{for(let a=i+1;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 3:{for(let a=r.length-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 4:{for(let a=0;a<r.length;++a)if(n.resolveId(r[a],a,r)===t.id)return a;return o}case 5:return null;default:$S(t)}}var De=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(De||{});const y1=["top","right","bottom","left"],qh=["start","end"],Yh=y1.reduce((t,n)=>t.concat(n,n+"-"+qh[0],n+"-"+qh[1]),[]),Pi=Math.min,_r=Math.max,zS={left:"right",right:"left",bottom:"top",top:"bottom"},HS={start:"end",end:"start"};function Iu(t,n,r){return _r(t,Pi(n,r))}function Dr(t,n){return typeof t=="function"?t(n):t}function $n(t){return t.split("-")[0]}function vn(t){return t.split("-")[1]}function w1(t){return t==="x"?"y":"x"}function $f(t){return t==="y"?"height":"width"}function to(t){return["top","bottom"].includes($n(t))?"y":"x"}function zf(t){return w1(to(t))}function x1(t,n,r){r===void 0&&(r=!1);const o=vn(t),i=zf(t),a=$f(i);let l=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=Ja(l)),[l,Ja(l)]}function BS(t){const n=Ja(t);return[Qa(t),n,Qa(n)]}function Qa(t){return t.replace(/start|end/g,n=>HS[n])}function VS(t,n,r){const o=["left","right"],i=["right","left"];return t==="top"||t==="bottom"?r?n?i:o:n?o:i:t==="left"||t==="right"?n?["top","bottom"]:["bottom","top"]:[]}function WS(t,n,r,o){const i=vn(t);let a=VS($n(t),r==="start",o);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(Qa)))),a}function Ja(t){return t.replace(/left|right|bottom|top/g,n=>zS[n])}function US(t){return{top:0,right:0,bottom:0,left:0,...t}}function j1(t){return typeof t=="number"?{top:t,right:t,bottom:t,left:t}:US(t)}function Za(t){const{x:n,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:n,right:n+o,bottom:r+i,x:n,y:r}}function Kh(t,n,r){let{reference:o,floating:i}=t;const a=to(n),l=zf(n),c=$f(l),u=$n(n),d=a==="y",f=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,b=o[c]/2-i[c]/2;let h;switch(h=u==="top"?{x:f,y:o.y-i.height}:u==="bottom"?{x:f,y:o.y+o.height}:u==="right"?{x:o.x+o.width,y:g}:u==="left"?{x:o.x-i.width,y:g}:{x:o.x,y:o.y},vn(n)){case"start":h[l]-=b*(r&&d?-1:1);break;case"end":h[l]+=b*(r&&d?-1:1)}return h}const qS=async(t,n,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:l}=r,c=a.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(n));let d=await l.getElementRects({reference:t,floating:n,strategy:i}),{x:f,y:g}=Kh(d,o,u),b=o,h={},m=0;for(let y=0;y<c.length;y++){const{name:E,fn:v}=c[y],{x:k,y:C,data:D,reset:I}=await v({x:f,y:g,initialPlacement:o,placement:b,strategy:i,middlewareData:h,rects:d,platform:l,elements:{reference:t,floating:n}});f=k??f,g=C??g,h={...h,[E]:{...h[E],...D}},I&&50>=m&&(m++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(d=I.rects===!0?await l.getElementRects({reference:t,floating:n,strategy:i}):I.rects),{x:f,y:g}=Kh(d,b,u)),y=-1)}return{x:f,y:g,placement:b,strategy:i,middlewareData:h}};async function Wo(t,n){var r;n===void 0&&(n={});const{x:o,y:i,platform:a,rects:l,elements:c,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:b=!1,padding:h=0}=Dr(n,t),m=j1(h),y=g==="floating"?"reference":"floating",E=c[b?y:g],v=Za(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(E)))==null||r?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:u})),k=g==="floating"?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),D=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},I=Za(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:C,strategy:u}):k);return{top:(v.top-I.top+m.top)/D.y,bottom:(I.bottom-v.bottom+m.bottom)/D.y,left:(v.left-I.left+m.left)/D.x,right:(I.right-v.right+m.right)/D.x}}const YS=t=>({name:"arrow",options:t,async fn(n){const{x:r,y:o,placement:i,rects:a,platform:l,elements:c,middlewareData:u}=n,{element:d,padding:f=0}=Dr(t,n)||{};if(d==null)return{};const g=j1(f),b={x:r,y:o},h=zf(i),m=$f(h),y=await l.getDimensions(d),E=h==="y",v=E?"top":"left",k=E?"bottom":"right",C=E?"clientHeight":"clientWidth",D=a.reference[m]+a.reference[h]-b[h]-a.floating[m],I=b[h]-a.reference[h],T=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let z=T?T[C]:0;z&&await(l.isElement==null?void 0:l.isElement(T))||(z=c.floating[C]||a.floating[m]);const A=z/2-y[m]/2-1,Q=Pi(g[v],A),B=Pi(g[k],A),F=Q,L=z-y[m]-B,_=z/2-y[m]/2+(D/2-I/2),R=Iu(F,_,L),V=!u.arrow&&vn(i)!=null&&_!==R&&0>a.reference[m]/2-(_<F?Q:B)-y[m]/2,H=V?_<F?_-F:_-L:0;return{[h]:b[h]+H,data:{[h]:R,centerOffset:_-R-H,...V&&{alignmentOffset:H}},reset:V}}});function KS(t,n,r){return(t?[...r.filter(i=>vn(i)===t),...r.filter(i=>vn(i)!==t)]:r.filter(i=>$n(i)===i)).filter(i=>!t||vn(i)===t||!!n&&Qa(i)!==i)}const GS=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(n){var r,o,i;const{rects:a,middlewareData:l,placement:c,platform:u,elements:d}=n,{crossAxis:f=!1,alignment:g,allowedPlacements:b=Yh,autoAlignment:h=!0,...m}=Dr(t,n),y=g!==void 0||b===Yh?KS(g||null,h,b):b,E=await Wo(n,m),v=((r=l.autoPlacement)==null?void 0:r.index)||0,k=y[v];if(k==null)return{};const C=x1(k,a,await(u.isRTL==null?void 0:u.isRTL(d.floating)));if(c!==k)return{reset:{placement:y[0]}};const D=[E[$n(k)],E[C[0]],E[C[1]]],I=[...((o=l.autoPlacement)==null?void 0:o.overflows)||[],{placement:k,overflows:D}],T=y[v+1];if(T)return{data:{index:v+1,overflows:I},reset:{placement:T}};const z=I.map(B=>{const F=vn(B.placement);return[B.placement,F&&f?B.overflows.slice(0,2).reduce((L,_)=>L+_,0):B.overflows[0],B.overflows]}).sort((B,F)=>B[1]-F[1]),A=z.filter(B=>B[2].slice(0,vn(B[0])?2:3).every(F=>0>=F)),Q=((i=A[0])==null?void 0:i[0])||z[0][0];return Q===c?{}:{data:{index:v+1,overflows:I},reset:{placement:Q}}}}},QS=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var r,o;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:u,elements:d}=n,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0,...E}=Dr(t,n);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const v=$n(i),k=to(c),C=$n(c)===c,D=await(u.isRTL==null?void 0:u.isRTL(d.floating)),I=b||(C||!y?[Ja(c)]:BS(c)),T=m!=="none";!b&&T&&I.push(...WS(c,y,m,D));const z=[c,...I],A=await Wo(n,E),Q=[];let B=((o=a.flip)==null?void 0:o.overflows)||[];if(f&&Q.push(A[v]),g){const R=x1(i,l,D);Q.push(A[R[0]],A[R[1]])}if(B=[...B,{placement:i,overflows:Q}],!Q.every(R=>0>=R)){var F,L;const R=(((F=a.flip)==null?void 0:F.index)||0)+1,V=z[R];if(V)return{data:{index:R,overflows:B},reset:{placement:V}};let H=(L=B.filter(U=>0>=U.overflows[0]).sort((U,J)=>U.overflows[1]-J.overflows[1])[0])==null?void 0:L.placement;if(!H)switch(h){case"bestFit":{var _;const U=(_=B.filter(J=>{if(T){const X=to(J.placement);return X===k||X==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(X=>0<X).reduce((X,N)=>X+N,0)]).sort((J,X)=>J[1]-X[1])[0])==null?void 0:_[0];U&&(H=U);break}case"initialPlacement":H=c}if(i!==H)return{reset:{placement:H}}}return{}}}};function Gh(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function Qh(t){return y1.some(n=>0<=t[n])}const JS=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:r}=n,{strategy:o="referenceHidden",...i}=Dr(t,n);switch(o){case"referenceHidden":{const a=await Wo(n,{...i,elementContext:"reference"}),l=Gh(a,r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Qh(l)}}}case"escaped":{const a=await Wo(n,{...i,altBoundary:!0}),l=Gh(a,r.floating);return{data:{escapedOffsets:l,escaped:Qh(l)}}}default:return{}}}}};async function ZS(t,n){const{placement:r,platform:o,elements:i}=t,a=await(o.isRTL==null?void 0:o.isRTL(i.floating)),l=$n(r),c=vn(r),u=to(r)==="y",d=["left","top"].includes(l)?-1:1,f=a&&u?-1:1,g=Dr(n,t);let{mainAxis:b,crossAxis:h,alignmentAxis:m}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof m=="number"&&(h=c==="end"?-1*m:m),u?{x:h*f,y:b*d}:{x:b*d,y:h*f}}const XS=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var r,o;const{x:i,y:a,placement:l,middlewareData:c}=n,u=await ZS(n,t);return l===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:l}}}}},eC=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:r,y:o,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:E=>{let{x:v,y:k}=E;return{x:v,y:k}}},...u}=Dr(t,n),d={x:r,y:o},f=await Wo(n,u),g=to($n(i)),b=w1(g);let h=d[b],m=d[g];if(a){const E=b==="y"?"top":"left",v=b==="y"?"bottom":"right",k=h+f[E],C=h-f[v];h=Iu(k,h,C)}if(l){const E=g==="y"?"top":"left",v=g==="y"?"bottom":"right",k=m+f[E],C=m-f[v];m=Iu(k,m,C)}const y=c.fn({...n,[b]:h,[g]:m});return{...y,data:{x:y.x-r,y:y.y-o,enabled:{[b]:a,[g]:l}}}}}},tC=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(n){var r,o;const{placement:i,rects:a,platform:l,elements:c}=n,{apply:u=()=>{},...d}=Dr(t,n),f=await Wo(n,d),g=$n(i),b=vn(i),h=to(i)==="y",{width:m,height:y}=a.floating;let E,v;g==="top"||g==="bottom"?(E=g,v=b===(await(l.isRTL==null?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(v=g,E=b==="end"?"top":"bottom");const k=y-f.top-f.bottom,C=m-f.left-f.right,D=Pi(y-f[E],k),I=Pi(m-f[v],C),T=!n.middlewareData.shift;let z=D,A=I;if((r=n.middlewareData.shift)!=null&&r.enabled.x&&(A=C),(o=n.middlewareData.shift)!=null&&o.enabled.y&&(z=k),T&&!b){const B=_r(f.left,0),F=_r(f.right,0),L=_r(f.top,0),_=_r(f.bottom,0);h?A=m-2*(B!==0||F!==0?B+F:_r(f.left,f.right)):z=y-2*(L!==0||_!==0?L+_:_r(f.top,f.bottom))}await u({...n,availableWidth:A,availableHeight:z});const Q=await l.getDimensions(c.floating);return m!==Q.width||y!==Q.height?{reset:{rects:!0}}:{}}}},Tu=Math.min,wo=Math.max,Xa=Math.round,fa=Math.floor,Sr=t=>({x:t,y:t});function _l(){return typeof window<"u"}function ti(t){return E1(t)?(t.nodeName||"").toLowerCase():"#document"}function en(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function Vn(t){var n;return(n=(E1(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function E1(t){return!!_l()&&(t instanceof Node||t instanceof en(t).Node)}function xn(t){return!!_l()&&(t instanceof Element||t instanceof en(t).Element)}function zn(t){return!!_l()&&(t instanceof HTMLElement||t instanceof en(t).HTMLElement)}function Jh(t){return!!(_l()&&typeof ShadowRoot<"u")&&(t instanceof ShadowRoot||t instanceof en(t).ShadowRoot)}function Yi(t){const{overflow:n,overflowX:r,overflowY:o,display:i}=jn(t);return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function nC(t){return["table","td","th"].includes(ti(t))}function $l(t){return[":popover-open",":modal"].some(n=>{try{return t.matches(n)}catch{return!1}})}function Hf(t){const n=Bf(),r=xn(t)?jn(t):t;return r.transform!=="none"||r.perspective!=="none"||!!r.containerType&&r.containerType!=="normal"||!n&&!!r.backdropFilter&&r.backdropFilter!=="none"||!n&&!!r.filter&&r.filter!=="none"||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function rC(t){for(let n=Cr(t);zn(n)&&!Uo(n);){if(Hf(n))return n;if($l(n))return null;n=Cr(n)}return null}function Bf(){return!!(typeof CSS<"u"&&CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Uo(t){return["html","body","#document"].includes(ti(t))}function jn(t){return en(t).getComputedStyle(t)}function zl(t){return xn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Cr(t){if(ti(t)==="html")return t;const n=t.assignedSlot||t.parentNode||Jh(t)&&t.host||Vn(t);return Jh(n)?n.host:n}function k1(t){const n=Cr(t);return Uo(n)?t.ownerDocument?t.ownerDocument.body:t.body:zn(n)&&Yi(n)?n:k1(n)}function Er(t,n,r){var o;n===void 0&&(n=[]),r===void 0&&(r=!0);const i=k1(t),a=i===((o=t.ownerDocument)==null?void 0:o.body),l=en(i);if(a){const c=Du(l);return n.concat(l,l.visualViewport||[],Yi(i)?i:[],c&&r?Er(c):[])}return n.concat(i,Er(i,[],r))}function Du(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function O1(t){const n=jn(t);let r=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=zn(t),a=i?t.offsetWidth:r,l=i?t.offsetHeight:o,c=Xa(r)!==a||Xa(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function Vf(t){return xn(t)?t:t.contextElement}function xo(t){var n=Number.isFinite;const r=Vf(t);if(!zn(r))return Sr(1);const o=r.getBoundingClientRect(),{width:i,height:a,$:l}=O1(r);let c=(l?Xa(o.width):o.width)/i,u=(l?Xa(o.height):o.height)/a;return c&&n(c)||(c=1),u&&n(u)||(u=1),{x:c,y:u}}const oC=Sr(0);function S1(t){const n=en(t);return Bf()&&n.visualViewport?{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}:oC}function iC(t,n,r){return n===void 0&&(n=!1),r&&(!n||r===en(t))&&n}function no(t,n,r,o){n===void 0&&(n=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),a=Vf(t);let l=Sr(1);n&&(o?xn(o)&&(l=xo(o)):l=xo(t));const c=iC(a,r,o)?S1(a):Sr(0);let u=(i.left+c.x)/l.x,d=(i.top+c.y)/l.y,f=i.width/l.x,g=i.height/l.y;if(a){const b=en(a),h=o&&xn(o)?en(o):o;let m=b,y=Du(m);for(;y&&o&&h!==m;){const E=xo(y),v=y.getBoundingClientRect(),k=jn(y),C=v.left+(y.clientLeft+parseFloat(k.paddingLeft))*E.x,D=v.top+(y.clientTop+parseFloat(k.paddingTop))*E.y;u*=E.x,d*=E.y,f*=E.x,g*=E.y,u+=C,d+=D,m=en(y),y=Du(m)}}return Za({width:f,height:g,x:u,y:d})}function aC(t){let{elements:n,rect:r,offsetParent:o,strategy:i}=t;const a=i==="fixed",l=Vn(o),c=!!n&&$l(n.floating);if(o===l||c&&a)return r;let u={scrollLeft:0,scrollTop:0},d=Sr(1);const f=Sr(0),g=zn(o);if((g||!g&&!a)&&((ti(o)!=="body"||Yi(l))&&(u=zl(o)),zn(o))){const b=no(o);d=xo(o),f.x=b.x+o.clientLeft,f.y=b.y+o.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+f.x,y:r.y*d.y-u.scrollTop*d.y+f.y}}function lC(t){return Array.from(t.getClientRects())}function Mu(t,n){const r=zl(t).scrollLeft;return n?n.left+r:no(Vn(t)).left+r}function sC(t){const n=Vn(t),r=zl(t),o=t.ownerDocument.body,i=wo(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),a=wo(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+Mu(t);const c=-r.scrollTop;return jn(o).direction==="rtl"&&(l+=wo(n.clientWidth,o.clientWidth)-i),{width:i,height:a,x:l,y:c}}function cC(t,n){const r=en(t),o=Vn(t),i=r.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,u=0;if(i){a=i.width,l=i.height;const d=Bf();(!d||d&&n==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:l,x:c,y:u}}function uC(t,n){const r=no(t,!0,n==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,a=zn(t)?xo(t):Sr(1),l=t.clientWidth*a.x,c=t.clientHeight*a.y,u=i*a.x,d=o*a.y;return{width:l,height:c,x:u,y:d}}function Zh(t,n,r){let o;if(n==="viewport")o=cC(t,r);else if(n==="document")o=sC(Vn(t));else if(xn(n))o=uC(n,r);else{const i=S1(t);o={...n,x:n.x-i.x,y:n.y-i.y}}return Za(o)}function C1(t,n){const r=Cr(t);return r!==n&&xn(r)&&!Uo(r)&&(jn(r).position==="fixed"||C1(r,n))}function dC(t,n){const r=n.get(t);if(r)return r;let o=Er(t,[],!1).filter(l=>xn(l)&&ti(l)!=="body"),i=null;const a=jn(t).position==="fixed";for(let l=a?Cr(t):t;xn(l)&&!Uo(l);){const c=jn(l),u=Hf(l);u||c.position!=="fixed"||(i=null),(a?!u&&!i:!u&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Yi(l)&&!u&&C1(t,l))?o=o.filter(f=>f!==l):i=c,l=Cr(l)}return n.set(t,o),o}function fC(t){let{element:n,boundary:r,rootBoundary:o,strategy:i}=t;const a=r==="clippingAncestors"?$l(n)?[]:dC(n,this._c):[].concat(r),l=[...a,o],c=l[0],u=l.reduce((d,f)=>{const g=Zh(n,f,i);return d.top=wo(g.top,d.top),d.right=Tu(g.right,d.right),d.bottom=Tu(g.bottom,d.bottom),d.left=wo(g.left,d.left),d},Zh(n,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function pC(t){const{width:n,height:r}=O1(t);return{width:n,height:r}}function gC(t,n,r){const o=zn(n),i=Vn(n),a=r==="fixed",l=no(t,!0,a,n);let c={scrollLeft:0,scrollTop:0};const u=Sr(0);if(o||!o&&!a)if((ti(n)!=="body"||Yi(i))&&(c=zl(n)),o){const h=no(n,!0,a,n);u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}else i&&(u.x=Mu(i));let d=0,f=0;if(i&&!o&&!a){const h=i.getBoundingClientRect();f=h.top+c.scrollTop,d=h.left+c.scrollLeft-Mu(i,h)}const g=l.left+c.scrollLeft-u.x-d,b=l.top+c.scrollTop-u.y-f;return{x:g,y:b,width:l.width,height:l.height}}function Ss(t){return jn(t).position==="static"}function Xh(t,n){if(!zn(t)||jn(t).position==="fixed")return null;if(n)return n(t);let r=t.offsetParent;return Vn(t)===r&&(r=r.ownerDocument.body),r}function P1(t,n){const r=en(t);if($l(t))return r;if(!zn(t)){for(let i=Cr(t);i&&!Uo(i);){if(xn(i)&&!Ss(i))return i;i=Cr(i)}return r}let o=Xh(t,n);for(;o&&nC(o)&&Ss(o);)o=Xh(o,n);return o&&Uo(o)&&Ss(o)&&!Hf(o)?r:o||rC(t)||r}const hC=async function(t){const n=this.getOffsetParent||P1,r=this.getDimensions,o=await r(t.floating);return{reference:gC(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function mC(t){return jn(t).direction==="rtl"}const bC={convertOffsetParentRelativeRectToViewportRelativeRect:aC,getDocumentElement:Vn,getClippingRect:fC,getOffsetParent:P1,getElementRects:hC,getClientRects:lC,getDimensions:pC,getScale:xo,isElement:xn,isRTL:mC};function vC(t,n){function r(){var c;clearTimeout(i),(c=a)==null||c.disconnect(),a=null}function o(c,u){function d(D){const I=D[0].intersectionRatio;if(I!==u){if(!C)return o();I?o(!1,I):i=setTimeout(()=>{o(!1,1e-7)},1e3)}C=!1}c===void 0&&(c=!1),u===void 0&&(u=1),r();const{left:f,top:g,width:b,height:h}=t.getBoundingClientRect();if(c||n(),!b||!h)return;const m=fa(g),y=fa(l.clientWidth-(f+b)),E=fa(l.clientHeight-(g+h)),v=fa(f),k={rootMargin:-m+"px "+-y+"px "+-E+"px "+-v+"px",threshold:wo(0,Tu(1,u))||1};let C=!0;try{a=new IntersectionObserver(d,{...k,root:l.ownerDocument})}catch{a=new IntersectionObserver(d,k)}a.observe(t)}let i,a=null;const l=Vn(t);return o(!0),r}function I1(t,n,r,o){function i(){const v=no(t);E&&(v.x!==E.x||v.y!==E.y||v.width!==E.width||v.height!==E.height)&&r(),E=v,y=requestAnimationFrame(i)}o===void 0&&(o={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,f=Vf(t),g=a||l?[...f?Er(f):[],...Er(n)]:[];g.forEach(v=>{a&&v.addEventListener("scroll",r,{passive:!0}),l&&v.addEventListener("resize",r)});const b=f&&u?vC(f,r):null;let h=-1,m=null;c&&(m=new ResizeObserver(v=>{let[k]=v;k&&k.target===f&&m&&(m.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(n)})),r()}),f&&!d&&m.observe(f),m.observe(n));let y,E=d?no(t):null;return d&&i(),r(),()=>{var v;g.forEach(k=>{a&&k.removeEventListener("scroll",r),l&&k.removeEventListener("resize",r)}),b==null||b(),(v=m)==null||v.disconnect(),m=null,d&&cancelAnimationFrame(y)}}const T1=XS,D1=GS,M1=eC,N1=QS,yC=tC,wC=JS,em=YS,R1=(t,n,r)=>{const o=new Map,i={platform:bC,...r},a={...i.platform,_c:o};return qS(t,n,{...i,platform:a})};var Fa=typeof document>"u"?p.useEffect:p.useLayoutEffect;function el(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let r,o,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!==n.length)return!1;for(o=r;o--!=0;)if(!el(t[o],n[o]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!{}.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!=0;){const a=i[o];if(!(a==="_owner"&&t.$$typeof)&&!el(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function F1(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function tm(t,n){const r=F1(t);return Math.round(n*r)/r}function Cs(t){const n=p.useRef(t);return Fa(()=>{n.current=t}),n}function xC(t){t===void 0&&(t={});const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:c=!0,whileElementsMounted:u,open:d}=t,[f,g]=p.useState({x:0,y:0,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[b,h]=p.useState(o);el(b,o)||h(o);const[m,y]=p.useState(null),[E,v]=p.useState(null),k=p.useCallback(U=>{U!==T.current&&(T.current=U,y(U))},[]),C=p.useCallback(U=>{U!==z.current&&(z.current=U,v(U))},[]),D=a||m,I=l||E,T=p.useRef(null),z=p.useRef(null),A=p.useRef(f),Q=Cs(u),B=Cs(i),F=Cs(d),L=p.useCallback(()=>{if(T.current&&z.current){const U={placement:n,strategy:r,middleware:b};B.current&&(U.platform=B.current),R1(T.current,z.current,U).then(J=>{const X={...J,isPositioned:F.current!==!1};_.current&&!el(A.current,X)&&(A.current=X,Bn.flushSync(()=>{g(X)}))})}},[b,n,r,B,F]);Fa(()=>{d===!1&&A.current.isPositioned&&(A.current.isPositioned=!1,g(U=>({...U,isPositioned:!1})))},[d]);const _=p.useRef(!1);Fa(()=>(_.current=!0,()=>{_.current=!1}),[]),Fa(()=>{if(D&&(T.current=D),I&&(z.current=I),D&&I){if(Q.current)return Q.current(D,I,L);L()}},[D,I,L,Q,u!=null]);const R=p.useMemo(()=>({reference:T,floating:z,setReference:k,setFloating:C}),[k,C]),V=p.useMemo(()=>({reference:D,floating:I}),[D,I]),H=p.useMemo(()=>{const U={position:r,left:0,top:0};if(!V.floating)return U;const J=tm(V.floating,f.x),X=tm(V.floating,f.y);return c?{...U,transform:"translate("+J+"px, "+X+"px)",...1.5<=F1(V.floating)&&{willChange:"transform"}}:{position:r,left:J,top:X}},[r,c,V.floating,f.x,f.y]);return p.useMemo(()=>({...f,update:L,refs:R,elements:V,floatingStyles:H}),[f,L,R,V,H])}const L1=(t,n)=>({...T1(t),options:[t,n]}),A1=(t,n)=>({...M1(t),options:[t,n]}),jC=(t,n)=>({...N1(t),options:[t,n]}),EC=(t,n)=>({...yC(t),options:[t,n]}),kC=(t,n)=>({...D1(t),options:[t,n]});function Wf(){let t=p.useRef(!1);return Ge(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function OC(t){let n=pe(t),r=p.useRef(!1);p.useEffect(()=>(r.current=!1,()=>{r.current=!0,p1(()=>{r.current&&n()})}),[n])}let SC=p.createContext(!1);function CC(){return p.useContext(SC)}function PC(t){let n=CC(),r=p.useContext(_1),o=Ll(t),[i,a]=p.useState(()=>{if(!n&&r!==null||tr.isServer)return null;let l=o==null?void 0:o.getElementById("headlessui-portal-root");if(l)return l;if(o===null)return null;let c=o.createElement("div");return c.setAttribute("id","headlessui-portal-root"),o.body.appendChild(c)});return p.useEffect(()=>{i!==null&&(o!=null&&o.body.contains(i)||o==null||o.body.appendChild(i))},[i,o]),p.useEffect(()=>{n||r!==null&&a(r.current)},[r,a,n]),i}let IC=p.Fragment;function TC(t,n){let r=p.useRef(null),o=xt(LS(d=>{r.current=d}),n),i=Ll(r),a=PC(r),[l]=p.useState(()=>{var d;return tr.isServer||(d=i==null?void 0:i.createElement("div"))==null?null:d}),c=p.useContext(NC),u=Ml();return Ge(()=>{a&&l&&!a.contains(l)&&(l.setAttribute("data-headlessui-portal",""),a.appendChild(l))},[a,l]),Ge(()=>{if(l&&c)return c.register(l)},[c,l]),OC(()=>{var d;a&&l&&(l instanceof Node&&a.contains(l)&&a.removeChild(l),0>=a.childNodes.length&&((d=a.parentElement)==null||d.removeChild(a)))}),u&&a&&l?Bn.createPortal(ht({ourProps:{ref:o},theirProps:t,defaultTag:IC,name:"Portal"}),l):null}let DC=p.Fragment,_1=p.createContext(null);function MC(t,n){let{target:r,...o}=t,i={ref:xt(n)};return O.createElement(_1.Provider,{value:r},ht({ourProps:i,theirProps:o,defaultTag:DC,name:"Popover.Group"}))}let NC=p.createContext(null),RC=ft(TC),FC=ft(MC),LC=Object.assign(RC,{Group:FC});function AC(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,[n,r]=p.useState(t),o=Wf(),i=p.useCallback(u=>{o.current&&r(d=>d|u)},[n,o]),a=p.useCallback(u=>!!(n&u),[n]),l=p.useCallback(u=>{o.current&&r(d=>d&~u)},[r,o]),c=p.useCallback(u=>{o.current&&r(d=>d^u)},[r]);return{flags:n,addFlag:i,hasFlag:a,removeFlag:l,toggleFlag:c}}function _C(t){let n={called:!1};return function(){if(!n.called)return n.called=!0,t(...arguments)}}function Ps(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.add(...r)}function Is(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.remove(...r)}function $C(t,n){let r=Bt();if(!t)return r.dispose;let{transitionDuration:o,transitionDelay:i}=getComputedStyle(t),[a,l]=[o,i].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):1e3*parseFloat(f)).sort((f,g)=>g-f);return d}),c=a+l;if(c!==0){r.group(d=>{d.setTimeout(()=>{n(),d.dispose()},c),d.addEventListener(t,"transitionrun",f=>{f.target===f.currentTarget&&d.dispose()})});let u=r.addEventListener(t,"transitionend",d=>{d.target===d.currentTarget&&(n(),u())})}else n();return r.add(()=>n()),r.dispose}function zC(t,n,r,o){let i=r?"enter":"leave",a=Bt(),l=o===void 0?()=>{}:_C(o);i=="enter"&&(t.removeAttribute("hidden"),t.style.display="");let c=rt(i,{enter:()=>n.enter,leave:()=>n.leave}),u=rt(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),d=rt(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return Is(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),Ps(t,...n.base,...c,...d),a.nextFrame(()=>{Is(t,...n.base,...c,...d),Ps(t,...n.base,...c,...u),$C(t,()=>(Is(t,...n.base,...c),Ps(t,...n.base,...n.entered),l()))}),a.dispose}function HC(t){let{immediate:n,container:r,direction:o,classes:i,onStart:a,onStop:l}=t,c=Wf(),u=wn(),d=bn(o);Ge(()=>{n&&(d.current="enter")},[n]),Ge(()=>{let f=Bt();u.add(f.dispose);let g=r.current;if(g&&d.current!=="idle"&&c.current)return f.dispose(),a.current(d.current),f.add(zC(g,i.current,d.current==="enter",()=>{f.dispose(),l.current(d.current)})),f.dispose},[o])}function cr(){return(0<arguments.length&&arguments[0]!==void 0?arguments[0]:"").split(/\s+/).filter(n=>1<n.length)}let Hl=p.createContext(null);Hl.displayName="TransitionContext";var BC=(t=>(t.Visible="visible",t.Hidden="hidden",t))(BC||{});function VC(){let t=p.useContext(Hl);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function WC(){let t=p.useContext(Bl);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let Bl=p.createContext(null);Bl.displayName="NestingContext";function Vl(t){return"children"in t?Vl(t.children):0<t.current.filter(n=>{let{el:r}=n;return r.current!==null}).filter(n=>{let{state:r}=n;return r==="visible"}).length}function $1(t,n){let r=bn(t),o=p.useRef([]),i=Wf(),a=wn(),l=pe(function(h){let m=1<arguments.length&&arguments[1]!==void 0?arguments[1]:xr.Hidden,y=o.current.findIndex(E=>{let{el:v}=E;return v===h});y!==-1&&(rt(m,{[xr.Unmount](){o.current.splice(y,1)},[xr.Hidden](){o.current[y].state="hidden"}}),a.microTask(()=>{var E;!Vl(o)&&i.current&&((E=r.current)==null||E.call(r))}))}),c=pe(h=>{let m=o.current.find(y=>{let{el:E}=y;return E===h});return m?m.state!=="visible"&&(m.state="visible"):o.current.push({el:h,state:"visible"}),()=>l(h,xr.Unmount)}),u=p.useRef([]),d=p.useRef(Promise.resolve()),f=p.useRef({enter:[],leave:[],idle:[]}),g=pe((h,m,y)=>{u.current.splice(0),n&&(n.chains.current[m]=n.chains.current[m].filter(E=>{let[v]=E;return v!==h})),n==null||n.chains.current[m].push([h,new Promise(E=>{u.current.push(E)})]),n==null||n.chains.current[m].push([h,new Promise(E=>{Promise.all(f.current[m].map(v=>{let[k,C]=v;return C})).then(()=>E())})]),m==="enter"?d.current=d.current.then(()=>n==null?void 0:n.wait.current).then(()=>y(m)):y(m)}),b=pe((h,m,y)=>{Promise.all(f.current[m].splice(0).map(E=>{let[v,k]=E;return k})).then(()=>{var E;(E=u.current.shift())==null||E()}).then(()=>y(m))});return p.useMemo(()=>({children:o,register:c,unregister:l,onStart:g,onStop:b,wait:d,chains:f}),[c,l,o,g,b,f,d])}function UC(){}let qC=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function nm(t){var n;let r={};for(let o of qC)r[o]=(n=t[o])==null?UC:n;return r}function YC(t){let n=p.useRef(nm(t));return p.useEffect(()=>{n.current=nm(t)},[t]),n}let KC="div",z1=Or.RenderStrategy;function GC(t,n){var r,o;let{beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c,enter:u,enterFrom:d,enterTo:f,entered:g,leave:b,leaveFrom:h,leaveTo:m,...y}=t,E=p.useRef(null),v=xt(E,n),k=(r=y.unmount)==null||r?xr.Unmount:xr.Hidden,{show:C,appear:D,initial:I}=VC(),[T,z]=p.useState(C?"visible":"hidden"),A=WC(),{register:Q,unregister:B}=A;p.useEffect(()=>Q(E),[Q,E]),p.useEffect(()=>{if(k===xr.Hidden&&E.current)return C&&T!=="visible"?void z("visible"):rt(T,{hidden:()=>B(E),visible:()=>Q(E)})},[T,E,Q,B,C,k]);let F=bn({base:cr(y.className),enter:cr(u),enterFrom:cr(d),enterTo:cr(f),entered:cr(g),leave:cr(b),leaveFrom:cr(h),leaveTo:cr(m)}),L=YC({beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c}),_=Ml();p.useEffect(()=>{if(_&&T==="visible"&&E.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[E,T,_]);let R=D&&C&&I,V=!_||I&&!D?"idle":C?"enter":"leave",H=AC(0),U=pe(se=>rt(se,{enter:()=>{H.addFlag(ut.Opening),L.current.beforeEnter()},leave:()=>{H.addFlag(ut.Closing),L.current.beforeLeave()},idle:()=>{}})),J=pe(se=>rt(se,{enter:()=>{H.removeFlag(ut.Opening),L.current.afterEnter()},leave:()=>{H.removeFlag(ut.Closing),L.current.afterLeave()},idle:()=>{}})),X=$1(()=>{z("hidden"),B(E)},A),N=p.useRef(!1);HC({immediate:R,container:E,classes:F,direction:V,onStart:bn(se=>{N.current=!0,X.onStart(E,se,U)}),onStop:bn(se=>{N.current=!1,X.onStop(E,se,J),se!=="leave"||Vl(X)||(z("hidden"),B(E))})});let ae=y;return R?ae={...ae,className:Ya(y.className,...F.current.enter,...F.current.enterFrom)}:N.current&&(ae.className=Ya(y.className,(o=E.current)==null?void 0:o.className),ae.className===""&&delete ae.className),O.createElement(Bl.Provider,{value:X},O.createElement(Al,{value:rt(T,{visible:ut.Open,hidden:ut.Closed})|H.flags},ht({ourProps:{ref:v},theirProps:ae,defaultTag:KC,features:z1,visible:T==="visible",name:"Transition.Child"})))}function QC(t,n){let{show:r,appear:o=!1,unmount:i=!0,...a}=t,l=p.useRef(null),c=xt(l,n);Ml();let u=qi();if(r===void 0&&u!==null&&(r=(u&ut.Open)===ut.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,f]=p.useState(r?"visible":"hidden"),g=$1(()=>{f("hidden")}),[b,h]=p.useState(!0),m=p.useRef([r]);Ge(()=>{b!==!1&&m.current[m.current.length-1]!==r&&(m.current.push(r),h(!1))},[m,r]);let y=p.useMemo(()=>({show:r,appear:o,initial:b}),[r,o,b]);p.useEffect(()=>{if(r)f("visible");else if(!Vl(g))f("hidden");else{let C=l.current;if(!C)return;let D=C.getBoundingClientRect();D.x===0&&D.y===0&&D.width===0&&D.height===0&&f("hidden")}},[r,g]);let E={unmount:i},v=pe(()=>{var C;b&&h(!1),(C=t.beforeEnter)==null||C.call(t)}),k=pe(()=>{var C;b&&h(!1),(C=t.beforeLeave)==null||C.call(t)});return O.createElement(Bl.Provider,{value:g},O.createElement(Hl.Provider,{value:y},ht({ourProps:{...E,as:p.Fragment,children:O.createElement(H1,{ref:c,...E,...a,beforeEnter:v,beforeLeave:k})},theirProps:{},defaultTag:p.Fragment,features:z1,visible:d==="visible",name:"Transition"})))}function JC(t,n){let r=p.useContext(Hl)!==null,o=qi()!==null;return O.createElement(O.Fragment,null,!r&&o?O.createElement(Nu,{ref:n,...t}):O.createElement(H1,{ref:n,...t}))}let Nu=ft(QC),H1=ft(GC),ZC=ft(JC),rm=Object.assign(Nu,{Child:ZC,Root:Nu});const XC=t=>{function n(i){return Object.prototype.hasOwnProperty.call(i,"current")}const{element:r,padding:o}=t;return{name:"arrow",options:t,fn(i){return n(r)?r.current==null?{}:em({element:r.current,padding:o}).fn(i):r?em({element:r,padding:o}).fn(i):{}}}};var La=typeof document>"u"?p.useEffect:p.useLayoutEffect;function tl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let r,o,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(o=r;o--!=0;)if(!tl(t[o],n[o]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!=0;){const a=i[o];if(!(a==="_owner"&&t.$$typeof)&&!tl(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function om(t){const n=p.useRef(t);return La(()=>{n.current=t}),n}function e3(t){t===void 0&&(t={});const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:i,whileElementsMounted:a,open:l}=t,[c,u]=p.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[d,f]=p.useState(o);tl(d,o)||f(o);const g=p.useRef(null),b=p.useRef(null),h=p.useRef(c),m=om(a),y=om(i),[E,v]=p.useState(null),[k,C]=p.useState(null),D=p.useCallback(B=>{g.current!==B&&(g.current=B,v(B))},[]),I=p.useCallback(B=>{b.current!==B&&(b.current=B,C(B))},[]),T=p.useCallback(()=>{if(g.current&&b.current){const B={placement:n,strategy:r,middleware:d};y.current&&(B.platform=y.current),R1(g.current,b.current,B).then(F=>{const L={...F,isPositioned:!0};z.current&&!tl(h.current,L)&&(h.current=L,Bn.flushSync(()=>{u(L)}))})}},[d,n,r,y]);La(()=>{l===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(B=>({...B,isPositioned:!1})))},[l]);const z=p.useRef(!1);La(()=>(z.current=!0,()=>{z.current=!1}),[]),La(()=>{if(E&&k){if(m.current)return m.current(E,k,T);T()}},[E,k,T,m]);const A=p.useMemo(()=>({reference:g,floating:b,setReference:D,setFloating:I}),[D,I]),Q=p.useMemo(()=>({reference:E,floating:k}),[E,k]);return p.useMemo(()=>({...c,update:T,refs:A,elements:Q,reference:D,floating:I}),[c,T,A,Q,D,I])}var t3=typeof document>"u"?p.useEffect:p.useLayoutEffect;function n3(){const t=new Map;return{emit(n,r){var o;(o=t.get(n))==null||o.forEach(i=>i(r))},on(n,r){t.set(n,[...t.get(n)||[],r])},off(n,r){t.set(n,(t.get(n)||[]).filter(o=>o!==r))}}}const r3=p.createContext(null),o3=()=>p.useContext(r3);function i3(t){return(t==null?void 0:t.ownerDocument)||document}function a3(t){return i3(t).defaultView||window}function pa(t){return!!t&&t instanceof a3(t).Element}const l3=eo.useInsertionEffect,s3=l3||(t=>t());function c3(t){const n=p.useRef(()=>{});return s3(()=>{n.current=t}),p.useCallback(function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.current==null?void 0:n.current(...o)},[])}function u3(t){t===void 0&&(t={});const{open:n=!1,onOpenChange:r,nodeId:o}=t,i=e3(t),a=o3(),l=p.useRef(null),c=p.useRef({}),u=p.useState(()=>n3())[0],[d,f]=p.useState(null),g=p.useCallback(v=>{const k=pa(v)?{getBoundingClientRect:()=>v.getBoundingClientRect(),contextElement:v}:v;i.refs.setReference(k)},[i.refs]),b=p.useCallback(v=>{(pa(v)||v===null)&&(l.current=v,f(v)),(pa(i.refs.reference.current)||i.refs.reference.current===null||v!==null&&!pa(v))&&i.refs.setReference(v)},[i.refs]),h=p.useMemo(()=>({...i.refs,setReference:b,setPositionReference:g,domReference:l}),[i.refs,b,g]),m=p.useMemo(()=>({...i.elements,domReference:d}),[i.elements,d]),y=c3(r),E=p.useMemo(()=>({...i,refs:h,elements:m,dataRef:c,nodeId:o,events:u,open:n,onOpenChange:y}),[i,o,u,n,y,h,m]);return t3(()=>{const v=a==null?void 0:a.nodesRef.current.find(k=>k.id===o);v&&(v.context=E)}),p.useMemo(()=>({...i,context:E,refs:h,reference:b,positionReference:g}),[i,h,E,b,g])}var im,d3=Object.defineProperty,f3=(t,n,r)=>n in t?d3(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,am=(t,n,r)=>(f3(t,typeof n=="symbol"?n:n+"",r),r),B1={exports:{}},si={};function p3(){function t(a,l,c){var u,d={},f=null,g=null;for(u in c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref),l)r.call(l,u)&&!i.hasOwnProperty(u)&&(d[u]=l[u]);if(a&&a.defaultProps)for(u in l=a.defaultProps,l)d[u]===void 0&&(d[u]=l[u]);return{$$typeof:n,type:a,key:f,ref:g,props:d,_owner:o.current}}if(im)return si;im=1;var n=Symbol.for("react.element"),r=Object.prototype.hasOwnProperty,o=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};return si.Fragment=Symbol.for("react.fragment"),si.jsx=t,si.jsxs=t,si}B1.exports=p3();var Ye=B1.exports;class g3{constructor(){am(this,"current",this.detect()),am(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return"u"<typeof window||"u"<typeof document?"server":"client"}}const qo=new g3,V1=(t,n)=>{qo.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)},Ts={serverHandoffComplete:!1};function h3(){const[t,n]=p.useState(Ts.serverHandoffComplete);return p.useEffect(()=>{t!==!0&&n(!0)},[t]),p.useEffect(()=>{Ts.serverHandoffComplete===!1&&(Ts.serverHandoffComplete=!0)},[]),t}const m3=O.useId??function(){const t=h3(),[n,r]=O.useState(t?()=>qo.nextId():null);return V1(()=>{n===null&&r(qo.nextId())},[n]),n==null?void 0:`${n}`};function b3(t,n,r,o){p.useEffect(()=>{const i=[];(typeof o.offset=="number"||typeof o.offset=="object"||typeof o.offset=="function")&&i.push(T1(o.offset)),(o.flip===!0||typeof o.flip=="number"||typeof o.flip=="object")&&i.push(N1({padding:typeof o.flip=="number"?o.flip:void 0,...typeof o.flip=="object"?o.flip:{}})),(o.shift===!0||typeof o.shift=="number"||typeof o.shift=="object")&&i.push(M1({padding:typeof o.shift=="number"?o.shift:void 0,...typeof o.shift=="object"?o.shift:{}})),(o.autoPlacement===!0||typeof o.autoPlacement=="object")&&i.push(D1(typeof o.autoPlacement=="object"?o.autoPlacement:void 0)),(o.arrow===!0||typeof o.arrow=="number")&&i.push(XC({element:r,padding:o.arrow===!0?0:o.arrow})),i.push(...typeof o.middleware=="function"?o.middleware({referenceEl:n.reference,floatingEl:n.floating}):o.middleware||[]),(o.hide===!0||typeof o.hide=="object")&&i.push(wC(typeof o.hide=="object"?o.hide:void 0)),t(i)},[o.offset,o.shift,o.flip,o.arrow,o.autoPlacement,o.hide,o.middleware])}function v3(t,n,r){p.useEffect(()=>{if(t&&qo.isClient&&"u">typeof ResizeObserver&&n.current&&n.current instanceof Element){const o=new ResizeObserver(i=>{let[a]=i;const l=a.borderBoxSize.reduce((c,u)=>{let{inlineSize:d}=u;return c+d},0);r(l)});return o.observe(n.current),()=>{o.disconnect(),r(null)}}},[])}const y3=t=>t==="top"?"origin-bottom":t==="bottom"?"origin-top":t==="left"?"origin-right":t==="right"?"origin-left":t==="top-start"||t==="right-end"?"origin-bottom-left":t==="top-end"||t==="left-end"?"origin-bottom-right":t==="right-start"||t==="bottom-start"?"origin-top-left":t==="left-start"||t==="bottom-end"?"origin-top-right":"";function w3(t,n){return p.useMemo(()=>typeof t.originClass=="function"?t.originClass(n):typeof t.originClass=="string"?t.originClass:t.tailwindcssOriginClass?y3(n):"",[n,t.originClass,t.tailwindcssOriginClass])}function W1(t,n){if(t in n){const l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}const a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,W1),a}function U1(t){return qo.isServer?null:t instanceof Node?t.ownerDocument:t&&Object.prototype.hasOwnProperty.call(t,"current")&&t.current instanceof Node?t.current.ownerDocument:document}const lm=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var q1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(q1||{});function x3(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=U1(t))==null?void 0:r.body)&&W1(n,{0(){return t.matches(lm)},1(){for(let o=t;o!==null;){if(o.matches(lm))return!0;o=o.parentElement}return!1}})}function j3(t){const n=p.useRef(t);return V1(()=>{n.current=t},[t]),n}function Mn(t,n,r){const o=j3(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function E3(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){const u=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t),d=c(l);if(d!==null&&d.getRootNode().contains(d)){for(const f of u){if(f===null)continue;const g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(d)||l.composed&&l.composedPath().includes(g))return}return!x3(d,q1.Loose)&&d.tabIndex!==-1&&l.preventDefault(),n(l,d)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];const i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);const a=p.useRef(null);Mn("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),Mn("click",l=>{a.current&&(r(l,()=>a.current),a.current=null)},!0),Mn("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}const ga=new Map,Uf=p.createContext(null);Uf.displayName="ReferenceContext";const qf=p.createContext(null);qf.displayName="FloatingContext";const Ii=p.createContext(null);Ii.displayName="ArrowContext";function Y1(t){const n=p.useContext(Uf);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Y1),r}return n}function K1(t){const n=p.useContext(qf);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,K1),r}return n}function G1(t){const n=p.useContext(Ii);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,G1),r}return n}function Q1(t,n,r,o){const{referenceRef:i}=o,a=n;if(a.as===p.Fragment)return Ye.jsx(t.type,{...t.props,...r,ref:i});const l=a.as||"div";return Ye.jsx(l,{...r,ref:i,children:Ye.jsx(t.type,{...t.props})})}function Yf(t,n,r,o){var i=Math.round;function a(I){return v.portal?Ye.jsx(LC,{children:I}):I}function l(I){const T={...D,...r,ref:u};if(v.as===p.Fragment)return Ye.jsx(I.type,{...I.props,...T});const z=v.as||"div";return Ye.jsx(z,{...T,children:Ye.jsx(I.type,{...I.props})})}function c(){return qo.isServer?f.current&&v.show?Ye.jsx(t.type,{...t.props}):Ye.jsx(p.Fragment,{}):v.transitionChild?Ye.jsx(rm.Child,{as:p.Fragment,...C,children:Ye.jsx(t.type,{...t.props})}):Ye.jsx(rm,{as:p.Fragment,...C,children:Ye.jsx(t.type,{...t.props})})}const{floatingRef:u,props:d,mounted:f,setShow:g,x:b,y:h,placement:m,strategy:y,referenceElWidth:E}=o,v={...d,...n},k=w3(v,m),C={show:!!f.current&&v.show,enter:`${v.enter||""} ${k}`,enterFrom:`${v.enterFrom||""}`,enterTo:`${v.enterTo||""}`,leave:`${v.leave||""} ${k}`,leaveFrom:`${v.leaveFrom||""}`,leaveTo:`${v.leaveTo||""}`,beforeEnter:()=>{g(!0)},afterLeave:()=>{g(!1)}},D={style:{...!v.dialog&&(v.transform||v.transform===void 0)?{position:y,zIndex:v.zIndex||9999,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${i(b||0)}px,${i(h||0)}px)`}:{position:y,zIndex:v.zIndex||9999,top:`${h||0}px`,left:`${b||0}px`},width:v.adaptiveWidth&&typeof E=="number"?`${E}px`:void 0}};return a(l(c()))}function J1(t,n){let[r,o]=t;var i,a;const l=m3(),c=p.useRef(!1),[u,d]=p.useState(),f=p.useRef(null),g=p.useMemo(()=>({show:n.onShow||(()=>{}),hide:n.onHide||(()=>{}),update:n.onUpdate||(()=>{})}),[n.onShow,n.onHide,n.onUpdate]),{x:b,y:h,placement:m,strategy:y,update:E,refs:v,middlewareData:k}=u3({placement:n.placement||"bottom-start",strategy:n.strategy,middleware:u}),[C,D]=p.useState(null);p.useEffect(()=>{c.current=!0},[]),p.useEffect(()=>{r&&!ga.get(l)?(ga.set(l,!0),g.show()):!r&&ga.get(l)&&(ga.delete(l),g.hide())},[r]);const I=p.useCallback(()=>{E(),g.update()},[E,g]);p.useEffect(I,[n.placement,n.strategy,u]),b3(d,v,f,n),v3(n.adaptiveWidth,v.reference,D),p.useEffect(()=>{if(v.reference.current&&v.floating.current&&r)return n.autoUpdate===!1?()=>{}:I1(v.reference.current,v.floating.current,I,typeof n.autoUpdate=="object"?n.autoUpdate:void 0)},[r,I,v]);const T=p.useRef(!0);p.useEffect(()=>{!(v.reference.current instanceof Element)&&v.reference.current&&v.floating.current&&T.current&&(T.current=!1,I(),window.requestAnimationFrame(()=>{T.current=!0,I()}))},[v]);const z={referenceRef:v.setReference,placement:m},A={floatingRef:v.setFloating,props:n,mounted:c,setShow:o,x:b,y:h,placement:m,strategy:y,referenceElWidth:C},Q={arrowRef:f,placement:m,x:(i=k.arrow)==null?void 0:i.x,y:(a=k.arrow)==null?void 0:a.y};return{referenceApi:z,floatingApi:A,arrowApi:Q,x:b,y:h,placement:m,strategy:y,update:I,refs:v,middlewareData:k}}const Z1=p.forwardRef((t,n)=>{function r(m){if(t.as===p.Fragment||!t.as)return Ye.jsx(p.Fragment,{children:m});const y=t.as;return Ye.jsx(y,{ref:n,className:t.className,children:m})}const[o,i]=p.useState(t.show??!1),{referenceApi:a,floatingApi:l,arrowApi:c,placement:u}=J1([o,i],t),d={placement:u},[f,g]=typeof t.children=="function"?t.children(d):t.children;if(!p.isValidElement(f))return console.warn("<Float /> is missing a reference and floating element."),Ye.jsx(p.Fragment,{});if(t.composable||t.dialog)return r(Ye.jsx(Uf.Provider,{value:a,children:Ye.jsx(qf.Provider,{value:l,children:Ye.jsx(Ii.Provider,{value:c,children:typeof t.children=="function"?t.children(d):t.children})})},"FloatingNode"));const b=Q1(f,{as:p.Fragment},{key:"reference-node"},a),h=Yf(g,{as:t.floatingAs||"div"},{},l);return r([b,Ye.jsx(Ii.Provider,{value:c,children:h},"floating-node")])});Z1.displayName="Float";function k3(t){if(!t.children)return Ye.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,children:l,...c}=t;return c},[t]),r=Y1("Float.Reference"),{placement:o}=r,i={placement:o};return Q1(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||p.Fragment},n,r)}function O3(t){if(!t.children)return Ye.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,enter:l,enterFrom:c,enterTo:u,leave:d,leaveFrom:f,leaveTo:g,originClass:b,tailwindcssOriginClass:h,transitionChild:m,children:y,...E}=t;return E},[t]),r=K1("Float.Content"),{placement:o}=r,i={placement:o};return Yf(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||"div"},n,r)}function S3(t){const{arrowRef:n,placement:r,x:o,y:i}=G1("Float.Arrow"),a=p.useMemo(()=>{const{as:d,offset:f,children:g,...b}=t;return b},[t]),l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]],c={left:typeof o=="number"?`${o}px`:void 0,top:typeof i=="number"?`${i}px`:void 0,right:void 0,bottom:void 0,[l]:`${-1*(t.offset??4)}px`,...a.style};if(t.as===p.Fragment){const d={placement:r},f=typeof t.children=="function"?t.children(d):t.children;return f&&p.isValidElement(f)?Ye.jsx(f.type,{...f.props,ref:n,style:c}):Ye.jsx(p.Fragment,{})}const u=t.as||"div";return Ye.jsx(u,{ref:n,...a,style:c,children:t.children})}function Kf(t){function n(){a&&l(!1)}let{onInitial:r,children:o,...i}=t;const[a,l]=p.useState(i.show??!1),c=p.useMemo(()=>{const{as:h,show:m,placement:y,strategy:E,offset:v,shift:k,flip:C,arrow:D,autoPlacement:I,hide:T,autoUpdate:z,zIndex:A,enter:Q,enterFrom:B,enterTo:F,leave:L,leaveFrom:_,leaveTo:R,originClass:V,tailwindcssOriginClass:H,portal:U,transform:J,middleware:X,onShow:N,onHide:ae,onUpdate:se,...M}=i;return M},[i]),{floatingApi:u,arrowApi:d,placement:f,refs:g}=J1([a,l],i);if(p.useEffect(()=>{l(i.show??!1)},[i.show]),r({show:a,setShow:l,placement:f,refs:g}),!o)return Ye.jsx(p.Fragment,{});const b=Yf(typeof o=="function"?o({placement:f,close:n}):o,{...i,as:i.as||p.Fragment,show:a},c,u);return Ye.jsx(Ii.Provider,{value:d,children:b})}function C3(t){function n(r){let{setShow:o,refs:i}=r;Mn("contextmenu",a=>{a.preventDefault(),i.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:a.clientX,y:a.clientY,top:a.clientY,left:a.clientX,right:a.clientX,bottom:a.clientY}}}),o(!0)}),E3(i.floating,()=>{o(!1)})}return Ye.jsx(Kf,{flip:!0,...t,show:!1,portal:!0,onInitial:n})}function P3(t){function n(i){function a(){f(!0)}function l(){f(!1)}function c(h){g.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:h.clientX,y:h.clientY,top:h.clientY,left:h.clientX,right:h.clientX,bottom:h.clientY}}})}function u(h){a(),c(h)}function d(h){a(),c(h.touches[0])}let{setShow:f,refs:g}=i;const b=U1(g.floating);b&&(p.useEffect(()=>{if((r||r===void 0)&&!b.getElementById("headlesui-float-cursor-style")){const h=b.createElement("style");return(b.head||b.getElementsByTagName("head")[0]).appendChild(h),h.id="headlesui-float-cursor-style",h.appendChild(b.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var m;return(m=b.getElementById("headlesui-float-cursor-style"))==null?void 0:m.remove()}}},[r]),"ontouchstart"in window||0<navigator.maxTouchPoints?(Mn("touchstart",d),Mn("touchend",l),Mn("touchmove",d)):(Mn("mouseenter",u),Mn("mouseleave",l),Mn("mousemove",u)))}let{globalHideCursor:r,...o}=t;return Ye.jsx(Kf,{...o,portal:!0,className:"headlesui-float-cursor-root",onInitial:n})}const Ds=Object.assign(Z1,{Reference:k3,Content:O3,Arrow:S3,Virtual:Kf,ContextMenu:C3,Cursor:P3}),I3=`
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
	jn-z-10
`,T3=`
	jn-absolute
`,D3=`
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`,M3=`
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`,N3=`
	jn-opacity-50
	jn-cursor-not-allowed
`,Ru=O.forwardRef((t,n)=>{let{text:r="",htmlFor:o=void 0,required:i=!1,className:a="",disabled:l=!1,floating:c=!1,minimized:u=!1,...d}=t;return O.createElement("label",he({className:`
				juno-label 
				${I3} 
				${c?"juno-label-floating "+T3:""}
				${u?"juno-label-minimized "+D3:""}
				${l?"juno-label-disabled "+N3:""} 
				${a}
			`,htmlFor:o,ref:n},d),r,i?O.createElement("span",{className:`
					juno-required 
					${M3}
					`}):"")});Ru.displayName="Label (JS)",Ru.propTypes={text:x.string,htmlFor:x.string,required:x.bool,className:x.string,disabled:x.bool,floating:x.bool,minimized:x.bool};const R3=`
  jn-text-xs
  jn-mt-1
`,F3=t=>t==="success"?"jn-text-theme-success":t==="error"?"jn-text-theme-error":"jn-text-theme-light",xi=t=>{let{children:n=null,text:r="",variant:o="help",className:i,...a}=t;return O.createElement("div",he({className:`
        juno-form-hint
        juno-form-hint-${o}
        ${R3}
        ${F3(o)}
        ${i}
      `},a),n||r)};xi.displayName="FormHint Js",xi.propTypes={children:x.node,text:x.node,variant:x.oneOf(["help","error","success"]),className:x.string};const L3=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,A3=`
  jn-text-theme-accent
`,_3=`
  jn-text-theme-danger 
`,$3=`
  jn-text-theme-success
`,z3=`
  jn-text-theme-warning  
`,H3=`
  jn-text-theme-on-default
`,Gf=t=>{let{variant:n="default",size:r=null,className:o="",color:i="",...a}=t;const l=u=>u==="small"?"1rem":u==="large"?"3rem":u,c=r?{width:l(r),height:l(r)}:{};return O.createElement("svg",he({className:`juno-spinner ${L3} ${i||(n==="primary"?A3:n==="danger"?_3:n==="success"?$3:n==="warning"?z3:H3)} ${o}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:c,role:"progressbar"},a),O.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),O.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Gf.propTypes={variant:x.oneOf(["primary","danger","default","success","warning"]),size:x.string,className:x.string,color:x.string};function Ki(t,n){let[r,o]=p.useState(t),i=bn(t);return Ge(()=>o(i.current),[i,o,...n]),r}function X1(t,n,r){let[o,i]=p.useState(r),a=t!==void 0,l=p.useRef(a),c=p.useRef(!1),u=p.useRef(!1);return!a||l.current||c.current?!a&&l.current&&!u.current&&(u.current=!0,l.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,l.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?t:o,pe(d=>(a||i(d),n==null?void 0:n(d)))]}let B3="div";var Qf=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Qf||{});function V3(t,n){var r;let{features:o=1,...i}=t,a={ref:n,"aria-hidden":(2&o)==2||((r=i["aria-hidden"])==null?void 0:r),hidden:(4&o)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&o)==4&&(2&o)!=2&&{display:"none"}}};return ht({ourProps:a,theirProps:i,slot:{},defaultTag:B3,name:"Hidden"})}let ew=ft(V3);function Jf(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[];for(let[o,i]of Object.entries(t))nw(r,tw(n,o),i);return r}function tw(t,n){return t?t+"["+n+"]":n}function nw(t,n,r){if(Array.isArray(r))for(let[o,i]of r.entries())nw(t,tw(n,o.toString()),i);else r instanceof Date?t.push([n,r.toISOString()]):typeof r=="boolean"?t.push([n,r?"1":"0"]):typeof r=="string"?t.push([n,r]):typeof r=="number"?t.push([n,`${r}`]):r==null?t.push([n,""]):Jf(r,n,t)}function rw(t){let{container:n,accept:r,walk:o,enabled:i=!0}=t,a=p.useRef(r),l=p.useRef(o);p.useEffect(()=>{a.current=r,l.current=o},[r,o]),Ge(()=>{if(!n||!i)return;let c=Ui(n);if(!c)return;let u=a.current,d=l.current,f=Object.assign(b=>u(b),{acceptNode:u}),g=c.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,f,!1);for(;g.nextNode();)d(g.currentNode)},[n,i,a,l])}var W3={};function po(t,n,r){var o=Math.max,i=Math.min,a=Math.round;let l,c=r.initialDeps??[];return()=>{var u,d,f,g;let b;r.key&&((u=r.debug)!=null&&u.call(r))&&(b=Date.now());const h=t();if(!(h.length!==c.length||h.some((E,v)=>c[v]!==E)))return l;c=h;let y;if(r.key&&((d=r.debug)!=null&&d.call(r))&&(y=Date.now()),l=n(...h),r.key&&((f=r.debug)==null?void 0:f.call(r))){const E=a(100*(Date.now()-b))/100,v=a(100*(Date.now()-y))/100,k=(C,D)=>{for(C+="";C.length<D;)C=" "+C;return C};console.info(`%c⏱ ${k(v,5)} /${k(E,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${o(0,i(120-120*(v/16),120))}deg 100% 31%);`,r==null?void 0:r.key)}return(g=r==null?void 0:r.onChange)==null||g.call(r,l),l}}function Ms(t){if(t===void 0)throw new Error("Unexpected undefined");return t}const U3=(t,n)=>1>Math.abs(t-n),q3=(t,n,r)=>{let o;return function(){for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];t.clearTimeout(o),o=t.setTimeout(()=>n.apply(this,a),r)}},Y3=t=>t,K3=t=>{const n=Math.max(t.startIndex-t.overscan,0),r=Math.min(t.endIndex+t.overscan,t.count-1),o=[];for(let i=n;i<=r;i++)o.push(i);return o},G3=(t,n)=>{var r=Math.round;const o=t.scrollElement;if(!o)return;const i=t.targetWindow;if(!i)return;const a=c=>{const{width:u,height:d}=c;n({width:r(u),height:r(d)})};if(a(o.getBoundingClientRect()),!i.ResizeObserver)return()=>{};const l=new i.ResizeObserver(c=>{const u=c[0];if(u!=null&&u.borderBoxSize){const d=u.borderBoxSize[0];if(d)return void a({width:d.inlineSize,height:d.blockSize})}a(o.getBoundingClientRect())});return l.observe(o,{box:"border-box"}),()=>{l.unobserve(o)}},sm={passive:!0},Q3=!(typeof window<"u")||"onscrollend"in window,J3=(t,n)=>{const r=t.scrollElement;if(!r)return;const o=t.targetWindow;if(!o)return;let i=0;const a=Q3?()=>{}:q3(o,()=>{n(i,!1)},t.options.isScrollingResetDelay),l=d=>()=>{const{horizontal:f,isRtl:g}=t.options;i=f?r.scrollLeft*(g&&-1||1):r.scrollTop,a(),n(i,d)},c=l(!0),u=l(!1);return u(),r.addEventListener("scroll",c,sm),r.addEventListener("scrollend",u,sm),()=>{r.removeEventListener("scroll",c),r.removeEventListener("scrollend",u)}},Z3=(t,n,r)=>{var o=Math.round;if(n!=null&&n.borderBoxSize){const i=n.borderBoxSize[0];if(i)return o(i[r.options.horizontal?"inlineSize":"blockSize"])}return o(t.getBoundingClientRect()[r.options.horizontal?"width":"height"])},X3=(t,n,r)=>{let{adjustments:o=0,behavior:i}=n;var a,l;(l=(a=r.scrollElement)==null?void 0:a.scrollTo)==null||l.call(a,{[r.options.horizontal?"left":"top"]:t+o,behavior:i})};class eP{constructor(n){var r=Math.max,o=Math.min,i=this;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let a=null;const l=()=>a||(this.targetWindow&&this.targetWindow.ResizeObserver?a=new this.targetWindow.ResizeObserver(c=>{c.forEach(u=>{this._measureElement(u.target,u)})}):null);return{disconnect:()=>{var c;(c=l())==null||c.disconnect(),a=null},observe:c=>{var u;return(u=l())==null?void 0:u.observe(c,{box:"border-box"})},unobserve:c=>{var u;return(u=l())==null?void 0:u.unobserve(c)}}})(),this.range=null,this.setOptions=a=>{Object.entries(a).forEach(l=>{let[c,u]=l;typeof u>"u"&&delete a[c]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Y3,rangeExtractor:K3,onChange:()=>{},measureElement:Z3,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...a}},this.notify=a=>{var l,c;(c=(l=this.options).onChange)==null||c.call(l,this,a)},this.maybeNotify=po(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;const l=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==l){if(this.cleanup(),!l)return void this.maybeNotify();this.scrollElement=l,this.targetWindow=this.scrollElement&&"ownerDocument"in this.scrollElement?this.scrollElement.ownerDocument.defaultView:((a=this.scrollElement)==null?void 0:a.window)??null,this.elementsCache.forEach(c=>{this.observer.observe(c)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,c=>{this.scrollRect=c,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(c,u)=>{this.scrollAdjustments=0,this.scrollDirection=u?this.getScrollOffset()<c?"forward":"backward":null,this.scrollOffset=c,this.isScrolling=u,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(a,l)=>{const c=new Map,u=new Map;for(let d=l-1;0<=d;d--){const f=a[d];if(c.has(f.lane))continue;const g=u.get(f.lane);if(g==null||f.end>g.end?u.set(f.lane,f):f.end<g.end&&c.set(f.lane,!0),c.size===this.options.lanes)break}return u.size===this.options.lanes?Array.from(u.values()).sort((d,f)=>d.end===f.end?d.index-f.index:d.end-f.end)[0]:void 0},this.getMeasurementOptions=po(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(a,l,c,u,d)=>(this.pendingMeasuredCacheIndexes=[],{count:a,paddingStart:l,scrollMargin:c,getItemKey:u,enabled:d}),{key:!1}),this.getMeasurements=po(()=>[this.getMeasurementOptions(),this.itemSizeCache],(a,l)=>{let{count:c,paddingStart:u,scrollMargin:d,getItemKey:f,enabled:g}=a;if(!g)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(m=>{this.itemSizeCache.set(m.key,m.size)}));const b=0<this.pendingMeasuredCacheIndexes.length?o(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const h=this.measurementsCache.slice(0,b);for(let m=b;m<c;m++){const y=f(m),E=this.options.lanes===1?h[m-1]:this.getFurthestMeasurement(h,m),v=E?E.end+this.options.gap:u+d,k=l.get(y),C=typeof k=="number"?k:this.options.estimateSize(m),D=E?E.lane:m%this.options.lanes;h[m]={index:m,start:v,size:C,end:v+C,key:y,lane:D}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=po(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(a,l,c)=>this.range=0<a.length&&0<l?tP({measurements:a,outerSize:l,scrollOffset:c}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=po(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(a,l,c,u)=>l===null?[]:a({startIndex:l.startIndex,endIndex:l.endIndex,overscan:c,count:u}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{const l=this.options.indexAttribute,c=a.getAttribute(l);return c?parseInt(c,10):(console.warn(`Missing attribute name '${l}={index}' on measured element.`),-1)},this._measureElement=(a,l)=>{const c=this.indexFromElement(a),u=this.measurementsCache[c];if(!u)return;const d=u.key,f=this.elementsCache.get(d);f!==a&&(f&&this.observer.unobserve(f),this.observer.observe(a),this.elementsCache.set(d,a)),a.isConnected&&this.resizeItem(c,this.options.measureElement(a,l,this))},this.resizeItem=(a,l)=>{const c=this.measurementsCache[a];if(!c)return;const u=this.itemSizeCache.get(c.key)??c.size,d=l-u;d!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?c.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(c,d,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=d,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,l)),this.notify(!1))},this.measureElement=a=>a?void this._measureElement(a,void 0):void this.elementsCache.forEach((l,c)=>{l.isConnected||(this.observer.unobserve(l),this.elementsCache.delete(c))}),this.getVirtualItems=po(()=>[this.getIndexes(),this.getMeasurements()],(a,l)=>{const c=[];for(let u=0,d=a.length;u<d;u++){const f=a[u],g=l[f];c.push(g)}return c},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{const l=this.getMeasurements();return l.length===0?void 0:Ms(l[ow(0,l.length-1,c=>Ms(l[c]).start,a)])},this.getOffsetForAlignment=(a,l)=>{const c=this.getSize(),u=this.getScrollOffset();l==="auto"&&(a<=u?l="start":a>=u+c?l="end":l="start"),l==="start"?a=a:l==="end"?a-=c:l=="center"&&(a-=c/2);const d=this.options.horizontal?"scrollWidth":"scrollHeight",f=this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[d]:this.scrollElement[d]:0;return r(o(f-c,a),0)},this.getOffsetForIndex=function(a){let l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"auto";a=r(0,o(a,i.options.count-1));const c=i.measurementsCache[a];if(!c)return;const u=i.getSize(),d=i.getScrollOffset();if(l==="auto")if(c.end>=d+u-i.options.scrollPaddingEnd)l="end";else if(c.start<=d+i.options.scrollPaddingStart)l="start";else return[d,l];const f=l==="end"?c.end+i.options.scrollPaddingEnd:c.start-i.options.scrollPaddingStart;return[i.getOffsetForAlignment(f,l),l]},this.isDynamicMode=()=>0<this.elementsCache.size,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(a){let{align:l="start",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getOffsetForAlignment(a,l),{adjustments:void 0,behavior:c})},this.scrollToIndex=function(a){let{align:l="auto",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};a=r(0,o(a,i.options.count-1)),i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const u=i.getOffsetForIndex(a,l);if(!u)return;const[d,f]=u;i._scrollToOffset(d,{adjustments:void 0,behavior:c}),c!=="smooth"&&i.isDynamicMode()&&i.targetWindow&&(i.scrollToIndexTimeoutId=i.targetWindow.setTimeout(()=>{if(i.scrollToIndexTimeoutId=null,i.elementsCache.has(i.options.getItemKey(a))){const[b]=Ms(i.getOffsetForIndex(a,f));U3(b,i.getScrollOffset())||i.scrollToIndex(a,{align:f,behavior:c})}else i.scrollToIndex(a,{align:f,behavior:c})}))},this.scrollBy=function(a){let{behavior:l}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),l==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getScrollOffset()+a,{adjustments:void 0,behavior:l})},this.getTotalSize=()=>{var a;const l=this.getMeasurements();let c;return c=l.length===0?this.options.paddingStart:this.options.lanes===1?((a=l[l.length-1])==null?void 0:a.end)??0:r(...l.slice(-this.options.lanes).map(u=>u.end)),r(c-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(a,l)=>{let{adjustments:c,behavior:u}=l;this.options.scrollToFn(a,{behavior:u,adjustments:c},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(n)}}const ow=(t,n,r,o)=>{for(;t<=n;){const i=0|(t+n)/2,a=r(i);if(a<o)t=i+1;else if(a>o)n=i-1;else return i}return 0<t?t-1:0};function tP(t){let{measurements:n,outerSize:r,scrollOffset:o}=t;const i=n.length-1,a=ow(0,i,c=>n[c].start,o);let l=a;for(;l<i&&n[l].end<o+r;)l++;return{startIndex:a,endIndex:l}}const nP=typeof document>"u"?p.useEffect:p.useLayoutEffect;function rP(t){const n=p.useReducer(()=>({}),{})[1],r={...t,onChange:(i,a)=>{var l;a?Bn.flushSync(n):n(),(l=t.onChange)==null||l.call(t,i,a)}},[o]=p.useState(()=>new eP(r));return o.setOptions(r),p.useEffect(()=>o._didMount(),[]),nP(()=>o._willUpdate()),o}function oP(t){return rP({observeElementRect:G3,observeElementOffset:J3,scrollToFn:X3,...t})}function cm(t,n){let r=p.useRef([]),o=pe(t);p.useEffect(()=>{let i=[...r.current];for(let[a,l]of n.entries())if(r.current[a]!==l){let c=o(n,i);return r.current=n,c}},[o,...n])}function iP(t){function n(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",n))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",n),n())}let Hr=[];iP(()=>{function t(n){n.target instanceof HTMLElement&&n.target!==document.body&&Hr[0]!==n.target&&(Hr.unshift(n.target),Hr=Hr.filter(r=>r!=null&&r.isConnected),Hr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});var aP=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(aP||{}),lP=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(lP||{}),sP=(t=>(t[t.Pointer=0]="Pointer",t[t.Focus=1]="Focus",t[t.Other=2]="Other",t))(sP||{}),cP=(t=>(t[t.OpenCombobox=0]="OpenCombobox",t[t.CloseCombobox=1]="CloseCombobox",t[t.GoToOption=2]="GoToOption",t[t.RegisterOption=3]="RegisterOption",t[t.UnregisterOption=4]="UnregisterOption",t[t.RegisterLabel=5]="RegisterLabel",t[t.SetActivationTrigger=6]="SetActivationTrigger",t[t.UpdateVirtualOptions=7]="UpdateVirtualOptions",t))(cP||{});function Ns(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:l=>l,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=n(t.options.slice()),i=0<o.length&&o[0].dataRef.current.order!==null?o.sort((l,c)=>l.dataRef.current.order-c.dataRef.current.order):Fl(o,l=>l.dataRef.current.domRef.current),a=r?i.indexOf(r):null;return a===-1&&(a=null),{options:i,activeOptionIndex:a}}let uP={1(t){var n;return(n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},0(t){var n,r;if((n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===0)return t;if((r=t.dataRef.current)!=null&&r.value){let o=t.dataRef.current.calculateIndex(t.dataRef.current.value);if(o!==-1)return{...t,activeOptionIndex:o,comboboxState:0}}return{...t,comboboxState:0}},2(t,n){var r,o,i,a,l;if((r=t.dataRef.current)!=null&&r.disabled||(o=t.dataRef.current)!=null&&o.optionsRef.current&&!((i=t.dataRef.current)!=null&&i.optionsPropsRef.current.static)&&t.comboboxState===1)return t;if(t.virtual){let f=n.focus===Fe.Specific?n.idx:Ga(n,{resolveItems:()=>t.virtual.options,resolveActiveIndex:()=>{var b,h;return(h=(b=t.activeOptionIndex)==null?t.virtual.options.findIndex(m=>!t.virtual.disabled(m)):b)==null?null:h},resolveDisabled:t.virtual.disabled,resolveId(){throw new Error("Function not implemented.")}}),g=(a=n.trigger)==null?2:a;return t.activeOptionIndex===f&&t.activationTrigger===g?t:{...t,activeOptionIndex:f,activationTrigger:g}}let c=Ns(t);if(c.activeOptionIndex===null){let f=c.options.findIndex(g=>!g.dataRef.current.disabled);f!==-1&&(c.activeOptionIndex=f)}let u=n.focus===Fe.Specific?n.idx:Ga(n,{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled}),d=(l=n.trigger)==null?2:l;return t.activeOptionIndex===u&&t.activationTrigger===d?t:{...t,...c,activeOptionIndex:u,activationTrigger:d}},3:(t,n)=>{var r,o,i;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:[...t.options,n.payload]};let a=n.payload,l=Ns(t,u=>(u.push(a),u));t.activeOptionIndex===null&&(o=t.dataRef.current)!=null&&o.isSelected(n.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(a));let c={...t,...l,activationTrigger:2};return(i=t.dataRef.current)!=null&&i.__demoMode&&t.dataRef.current.value===void 0&&(c.activeOptionIndex=0),c},4:(t,n)=>{var r;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:t.options.filter(i=>i.id!==n.id)};let o=Ns(t,i=>{let a=i.findIndex(l=>l.id===n.id);return a!==-1&&i.splice(a,1),i});return{...t,...o,activationTrigger:2}},5:(t,n)=>t.labelId===n.id?t:{...t,labelId:n.id},6:(t,n)=>t.activationTrigger===n.trigger?t:{...t,activationTrigger:n.trigger},7:(t,n)=>{var r;if(((r=t.virtual)==null?void 0:r.options)===n.options)return t;let o=t.activeOptionIndex;if(t.activeOptionIndex!==null){let i=n.options.indexOf(t.virtual.options[t.activeOptionIndex]);o=i===-1?null:i}return{...t,activeOptionIndex:o,virtual:Object.assign({},t.virtual,{options:n.options})}}},Zf=p.createContext(null);Zf.displayName="ComboboxActionsContext";function Gi(t){let n=p.useContext(Zf);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Gi),r}return n}let iw=p.createContext(null);function dP(t){var n;let r=ao("VirtualProvider"),[o,i]=p.useMemo(()=>{let u=r.optionsRef.current;if(!u)return[0,0];let d=window.getComputedStyle(u);return[parseFloat(d.paddingBlockStart||d.paddingTop),parseFloat(d.paddingBlockEnd||d.paddingBottom)]},[r.optionsRef.current]),a=oP({scrollPaddingStart:o,scrollPaddingEnd:i,count:r.virtual.options.length,estimateSize(){return 40},getScrollElement(){var u;return(u=r.optionsRef.current)==null?null:u},overscan:12}),[l,c]=p.useState(0);return Ge(()=>{c(u=>u+1)},[(n=r.virtual)==null?void 0:n.options]),O.createElement(iw.Provider,{value:a},O.createElement("div",{style:{position:"relative",width:"100%",height:`${a.getTotalSize()}px`},ref:u=>{if(u){if(typeof process<"u"&&W3.JEST_WORKER_ID!==void 0||r.activationTrigger===0)return;r.activeOptionIndex!==null&&r.virtual.options.length>r.activeOptionIndex&&a.scrollToIndex(r.activeOptionIndex)}}},a.getVirtualItems().map(u=>{var d;return O.createElement(p.Fragment,{key:u.key},O.cloneElement((d=t.children)==null?void 0:d.call(t,{option:r.virtual.options[u.index],open:r.comboboxState===0}),{key:`${l}-${u.key}`,"data-index":u.index,"aria-setsize":r.virtual.options.length,"aria-posinset":u.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${u.start}px)`,overflowAnchor:"none"}}))})))}let Xf=p.createContext(null);Xf.displayName="ComboboxDataContext";function ao(t){let n=p.useContext(Xf);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ao),r}return n}function fP(t,n){return rt(n.type,uP,t,n)}let pP=p.Fragment;function gP(t,n){let{value:r,defaultValue:o,onChange:i,form:a,name:l,by:c=null,disabled:u=!1,__demoMode:d=!1,nullable:f=!1,multiple:g=!1,immediate:b=!1,virtual:h=null,...m}=t,y=null,[E=g?[]:void 0,v]=X1(r,i,o),[k,C]=p.useReducer(fP,{dataRef:p.createRef(),comboboxState:d?0:1,options:[],virtual:null,activeOptionIndex:null,activationTrigger:2,labelId:null}),D=p.useRef(!1),I=p.useRef({static:!1,hold:!1}),T=p.useRef(null),z=p.useRef(null),A=p.useRef(null),Q=p.useRef(null),B=pe(typeof c=="string"?(oe,me)=>{let ve=c;return(oe==null?void 0:oe[ve])===(me==null?void 0:me[ve])}:c??((oe,me)=>oe===me)),F=pe(oe=>k.options.findIndex(me=>B(me.dataRef.current.value,oe))),L=p.useCallback(oe=>rt(R.mode,{1:()=>E.some(me=>B(me,oe)),0:()=>B(E,oe)}),[E]),_=pe(oe=>k.activeOptionIndex===F(oe)),R=p.useMemo(()=>({...k,immediate:!1,optionsPropsRef:I,labelRef:T,inputRef:z,buttonRef:A,optionsRef:Q,value:E,defaultValue:o,disabled:u,mode:g?1:0,virtual:k.virtual,get activeOptionIndex(){if(D.current&&k.activeOptionIndex===null&&0<k.options.length){let oe=k.options.findIndex(me=>!me.dataRef.current.disabled);if(oe!==-1)return oe}return k.activeOptionIndex},calculateIndex:F,compare:B,isSelected:L,isActive:_,nullable:f,__demoMode:d}),[E,o,u,g,f,d,k,y]);Ge(()=>{},[y,void 0]),Ge(()=>{k.dataRef.current=R},[R]),Rf([R.buttonRef,R.inputRef,R.optionsRef],()=>ie.closeCombobox(),R.comboboxState===0);let V=p.useMemo(()=>{var oe,me,ve;return{open:R.comboboxState===0,disabled:u,activeIndex:R.activeOptionIndex,activeOption:R.activeOptionIndex===null?null:R.virtual?R.virtual.options[(oe=R.activeOptionIndex)==null?0:oe]:(ve=(me=R.options[R.activeOptionIndex])==null?void 0:me.dataRef.current.value)==null?null:ve,value:E}},[R,u,E]),H=pe(()=>{if(R.activeOptionIndex!==null){if(R.virtual)se(R.virtual.options[R.activeOptionIndex]);else{let{dataRef:oe}=R.options[R.activeOptionIndex];se(oe.current.value)}ie.goToOption(Fe.Specific,R.activeOptionIndex)}}),U=pe(()=>{C({type:0}),D.current=!0}),J=pe(()=>{C({type:1}),D.current=!1}),X=pe((oe,me,ve)=>(D.current=!1,oe===Fe.Specific?C({type:2,focus:Fe.Specific,idx:me,trigger:ve}):C({type:2,focus:oe,trigger:ve}))),N=pe((oe,me)=>(C({type:3,payload:{id:oe,dataRef:me}}),()=>{R.isActive(me.current.value)&&(D.current=!0),C({type:4,id:oe})})),ae=pe(oe=>(C({type:5,id:oe}),()=>C({type:5,id:null}))),se=pe(oe=>rt(R.mode,{0(){return v==null?void 0:v(oe)},1(){let me=R.value.slice(),ve=me.findIndex(He=>B(He,oe));return ve===-1?me.push(oe):me.splice(ve,1),v==null?void 0:v(me)}})),M=pe(oe=>{C({type:6,trigger:oe})}),ie=p.useMemo(()=>({onChange:se,registerOption:N,registerLabel:ae,goToOption:X,closeCombobox:J,openCombobox:U,setActivationTrigger:M,selectActiveOption:H}),[]),ye=n===null?{}:{ref:n},Pe=p.useRef(null),$e=wn();return p.useEffect(()=>{Pe.current&&o!==void 0&&$e.addEventListener(Pe.current,"reset",()=>{v==null||v(o)})},[Pe,v]),O.createElement(Zf.Provider,{value:ie},O.createElement(Xf.Provider,{value:R},O.createElement(Al,{value:rt(R.comboboxState,{0:ut.Open,1:ut.Closed})},l!=null&&E!=null&&Jf({[l]:E}).map((oe,me)=>{let[ve,He]=oe;return O.createElement(ew,{features:Qf.Hidden,ref:me===0?at=>{var Je;Pe.current=(Je=at==null?void 0:at.closest("form"))==null?null:Je}:void 0,...Ka({key:ve,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,disabled:u,name:ve,value:He})})}),ht({ourProps:ye,theirProps:m,slot:V,defaultTag:pP,name:"Combobox"}))))}let hP="input";function mP(t,n){var r,o,i,a,l,c=Math.abs;let u=cn(),{id:d=`headlessui-combobox-input-${u}`,onChange:f,displayValue:g,type:b="text",...h}=t,m=ao("Combobox.Input"),y=Gi("Combobox.Input"),E=xt(m.inputRef,n),v=Ll(m.inputRef),k=p.useRef(!1),C=wn(),D=pe(()=>{y.onChange(null),m.optionsRef.current&&(m.optionsRef.current.scrollTop=0),y.goToOption(Fe.Nothing)}),I=function(){var H;return typeof g=="function"&&m.value!==void 0?(H=g(m.value))==null?"":H:typeof m.value=="string"?m.value:""}();cm((H,U)=>{let[J,X]=H,[N,ae]=U;if(k.current)return;let se=m.inputRef.current;se&&((ae===0&&X===1||J!==N)&&(se.value=J),requestAnimationFrame(()=>{if(!k.current&&se&&(v==null?void 0:v.activeElement)===se){let{selectionStart:M,selectionEnd:ie}=se;c((ie??0)-(M??0))===0&&M===0&&se.setSelectionRange(se.value.length,se.value.length)}}))},[I,m.comboboxState,v]),cm((H,U)=>{let[J]=H,[X]=U;if(J===0&&X===1){if(k.current)return;let N=m.inputRef.current;if(!N)return;let ae=N.value,{selectionStart:se,selectionEnd:M,selectionDirection:ie}=N;N.value="",N.value=ae,ie===null?N.setSelectionRange(se,M):N.setSelectionRange(se,M,ie)}},[m.comboboxState]);let T=p.useRef(!1),z=pe(()=>{T.current=!0}),A=pe(()=>{C.nextFrame(()=>{T.current=!1})}),Q=pe(H=>{switch(k.current=!0,H.key){case De.Enter:if(k.current=!1,m.comboboxState!==0||T.current)return;if(H.preventDefault(),H.stopPropagation(),m.activeOptionIndex===null)return void y.closeCombobox();y.selectActiveOption(),m.mode===0&&y.closeCombobox();break;case De.ArrowDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),rt(m.comboboxState,{0:()=>y.goToOption(Fe.Next),1:()=>y.openCombobox()});case De.ArrowUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),rt(m.comboboxState,{0:()=>y.goToOption(Fe.Previous),1:()=>{y.openCombobox(),C.nextFrame(()=>{m.value||y.goToOption(Fe.Last)})}});case De.Home:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.First);case De.PageUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.First);case De.End:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.Last);case De.PageDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Fe.Last);case De.Escape:return k.current=!1,m.comboboxState===0?(H.preventDefault(),m.optionsRef.current&&!m.optionsPropsRef.current.static&&H.stopPropagation(),m.nullable&&m.mode===0&&m.value===null&&D(),y.closeCombobox()):void 0;case De.Tab:if(k.current=!1,m.comboboxState!==0)return;m.mode===0&&m.activationTrigger!==1&&y.selectActiveOption(),y.closeCombobox()}}),B=pe(H=>{f==null||f(H),m.nullable&&m.mode===0&&H.target.value===""&&D(),y.openCombobox()}),F=pe(H=>{var U,J,X;let N=(U=H.relatedTarget)==null?Hr.find(ae=>ae!==H.currentTarget):U;if(k.current=!1,!((J=m.optionsRef.current)!=null&&J.contains(N))&&!((X=m.buttonRef.current)!=null&&X.contains(N))&&m.comboboxState===0)return H.preventDefault(),m.mode===0&&(m.nullable&&m.value===null?D():m.activationTrigger!==1&&y.selectActiveOption()),y.closeCombobox()}),L=pe(H=>{var U,J,X;let N=(U=H.relatedTarget)==null?Hr.find(ae=>ae!==H.currentTarget):U;(J=m.buttonRef.current)!=null&&J.contains(N)||(X=m.optionsRef.current)!=null&&X.contains(N)||m.disabled||m.immediate&&m.comboboxState!==0&&(y.openCombobox(),C.nextFrame(()=>{y.setActivationTrigger(1)}))}),_=Ki(()=>{if(m.labelId)return[m.labelId].join(" ")},[m.labelId]),R=p.useMemo(()=>({open:m.comboboxState===0,disabled:m.disabled}),[m]),V={ref:E,id:d,role:"combobox",type:b,"aria-controls":(r=m.optionsRef.current)==null?void 0:r.id,"aria-expanded":m.comboboxState===0,"aria-activedescendant":m.activeOptionIndex===null?void 0:m.virtual?(o=m.options.find(H=>{var U;return!((U=m.virtual)!=null&&U.disabled(H.dataRef.current.value))&&m.compare(H.dataRef.current.value,m.virtual.options[m.activeOptionIndex])}))==null?void 0:o.id:(i=m.options[m.activeOptionIndex])==null?void 0:i.id,"aria-labelledby":_,"aria-autocomplete":"list",defaultValue:(l=(a=t.defaultValue)==null?m.defaultValue===void 0?null:g==null?void 0:g(m.defaultValue):a)==null?m.defaultValue:l,disabled:m.disabled,onCompositionStart:z,onCompositionEnd:A,onKeyDown:Q,onChange:B,onFocus:L,onBlur:F};return ht({ourProps:V,theirProps:h,slot:R,defaultTag:hP,name:"Combobox.Input"})}let bP="button";function vP(t,n){var r;let o=ao("Combobox.Button"),i=Gi("Combobox.Button"),a=xt(o.buttonRef,n),l=cn(),{id:c=`headlessui-combobox-button-${l}`,...u}=t,d=wn(),f=pe(y=>{switch(y.key){case De.ArrowDown:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&i.openCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case De.ArrowUp:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&(i.openCombobox(),d.nextFrame(()=>{o.value||i.goToOption(Fe.Last)})),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case De.Escape:return o.comboboxState===0?(y.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&y.stopPropagation(),i.closeCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})})):void 0}}),g=pe(y=>_f(y.currentTarget)?y.preventDefault():(o.comboboxState===0?i.closeCombobox():(y.preventDefault(),i.openCombobox()),void d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})}))),b=Ki(()=>{if(o.labelId)return[o.labelId,c].join(" ")},[o.labelId,c]),h=p.useMemo(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),m={ref:a,id:c,type:Ff(t,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(r=o.optionsRef.current)==null?void 0:r.id,"aria-expanded":o.comboboxState===0,"aria-labelledby":b,disabled:o.disabled,onClick:g,onKeyDown:f};return ht({ourProps:m,theirProps:u,slot:h,defaultTag:bP,name:"Combobox.Button"})}let yP="label";function wP(t,n){let r=cn(),{id:o=`headlessui-combobox-label-${r}`,...i}=t,a=ao("Combobox.Label"),l=Gi("Combobox.Label"),c=xt(a.labelRef,n);Ge(()=>l.registerLabel(o),[o]);let u=pe(()=>{var f;return(f=a.inputRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]);return ht({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:yP,name:"Combobox.Label"})}let xP="ul",jP=Or.RenderStrategy|Or.Static;function EP(t,n){let r=cn(),{id:o=`headlessui-combobox-options-${r}`,hold:i=!1,...a}=t,l=ao("Combobox.Options"),c=xt(l.optionsRef,n),u=qi(),d=u===null?l.comboboxState===0:(u&ut.Open)===ut.Open;Ge(()=>{var h;l.optionsPropsRef.current.static=(h=t.static)!=null&&h},[l.optionsPropsRef,t.static]),Ge(()=>{l.optionsPropsRef.current.hold=i},[l.optionsPropsRef,i]),rw({container:l.optionsRef.current,enabled:l.comboboxState===0,accept(h){return h.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});let f=Ki(()=>{var h,m;return(m=l.labelId)==null?(h=l.buttonRef.current)==null?void 0:h.id:m},[l.labelId,l.buttonRef.current]),g=p.useMemo(()=>({open:l.comboboxState===0,option:void 0}),[l]),b={"aria-labelledby":f,role:"listbox","aria-multiselectable":l.mode===1||void 0,id:o,ref:c};return l.virtual&&l.comboboxState===0&&Object.assign(a,{children:O.createElement(dP,null,a.children)}),ht({ourProps:b,theirProps:a,slot:g,defaultTag:xP,features:jP,visible:d,name:"Combobox.Options"})}let kP="li";function OP(t,n){var r;let o=cn(),{id:i=`headlessui-combobox-option-${o}`,disabled:a=!1,value:l,order:c=null,...u}=t,d=ao("Combobox.Option"),f=Gi("Combobox.Option"),g=d.virtual?d.activeOptionIndex===d.calculateIndex(l):d.activeOptionIndex!==null&&((r=d.options[d.activeOptionIndex])==null?void 0:r.id)===i,b=d.isSelected(l),h=p.useRef(null),m=bn({disabled:a,value:l,domRef:h,order:c}),y=p.useContext(iw),E=xt(n,h,y?y.measureElement:null),v=pe(()=>f.onChange(l));Ge(()=>f.registerOption(i,m),[m,i]);let k=p.useRef(!(d.virtual||d.__demoMode));Ge(()=>{if(d.virtual&&d.__demoMode){let B=Bt();return B.requestAnimationFrame(()=>{k.current=!0}),B.dispose}},[d.virtual,d.__demoMode]),Ge(()=>{if(k.current&&d.comboboxState===0&&g&&d.activationTrigger!==0){let B=Bt();return B.requestAnimationFrame(()=>{var F,L;(L=(F=h.current)==null?void 0:F.scrollIntoView)==null||L.call(F,{block:"nearest"})}),B.dispose}},[h,g,d.comboboxState,d.activationTrigger,d.activeOptionIndex]);let C=pe(B=>{var F;return a||(F=d.virtual)!=null&&F.disabled(l)?B.preventDefault():(v(),m1()||requestAnimationFrame(()=>{var L;return(L=d.inputRef.current)==null?void 0:L.focus({preventScroll:!0})}),void(d.mode===0&&requestAnimationFrame(()=>f.closeCombobox())))}),D=pe(()=>{var B;if(a||(B=d.virtual)!=null&&B.disabled(l))return f.goToOption(Fe.Nothing);let F=d.calculateIndex(l);f.goToOption(Fe.Specific,F)}),I=Lf(),T=pe(B=>I.update(B)),z=pe(B=>{var F;if(!(!I.wasMoved(B)||a||(F=d.virtual)!=null&&F.disabled(l)||g)){let L=d.calculateIndex(l);f.goToOption(Fe.Specific,L,0)}}),A=pe(B=>{var F;I.wasMoved(B)&&(a||(F=d.virtual)!=null&&F.disabled(l)||g&&(d.optionsPropsRef.current.hold||f.goToOption(Fe.Nothing)))}),Q=p.useMemo(()=>({active:g,selected:b,disabled:a}),[g,b,a]);return ht({ourProps:{id:i,ref:E,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0||void 0,"aria-selected":b,disabled:void 0,onClick:C,onFocus:D,onPointerEnter:T,onMouseEnter:T,onPointerMove:z,onMouseMove:z,onPointerLeave:A,onMouseLeave:A},theirProps:u,slot:Q,defaultTag:kP,name:"Combobox.Option"})}let SP=ft(gP),CP=ft(vP),PP=ft(mP),IP=ft(wP),TP=ft(EP),DP=ft(OP);Object.assign(SP,{Input:PP,Button:CP,Label:IP,Options:TP,Option:DP});p.createContext();x.string,x.node,x.string,x.string,x.bool,x.bool,x.node,x.node,x.string,x.bool,x.string,x.bool,x.string,x.bool,x.func,x.func,x.func,x.func,x.string,x.bool,x.node,x.bool,x.bool,x.string,x.string,x.oneOf(["full","auto"]),x.string;x.string,x.bool,x.string,x.string,x.string;x.string,x.node;var MP=`
  jn-font-bold
  jn-text-lg
  jn-text-theme-high
  jn-pb-2
`,NP=function(t){var n=t.heading,r=n===void 0?"":n,o=t.className,i=o===void 0?"":o,a=t.children,l=a===void 0?null:a,c=it(t,["heading","className","children"]);return O.createElement("h1",ue({className:"juno-content-heading ".concat(MP," ").concat(i)},c),l||r)};x.string,x.node;x.string,x.node;var RP=function(t,n){return`
    `.concat(t?"jn-px-6 ":" ",` 
    `).concat(n?" jn-py-6":"",`
  `)},FP=function(t){var n=t.px,r=t.py,o=t.className,i=o===void 0?"":o,a=t.children,l=a===void 0?null:a,c=it(t,["px","py","className","children"]);return O.createElement("div",ue({className:"juno-container ".concat(RP(n===void 0||n,r!==void 0&&r)," ").concat(i)},c),l)};let um=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function dm(t){var n,r;let o=(n=t.innerText)==null?"":n,i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return o;let a=!1;for(let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),a=!0;let l=a?(r=i.innerText)==null?"":r:o;return um.test(l)&&(l=l.replace(um,"")),l}function LP(t){let n=t.getAttribute("aria-label");if(typeof n=="string")return n.trim();let r=t.getAttribute("aria-labelledby");if(r){let o=r.split(" ").map(i=>{let a=document.getElementById(i);if(a){let l=a.getAttribute("aria-label");return typeof l=="string"?l.trim():dm(a).trim()}return null}).filter(Boolean);if(0<o.length)return o.join(", ")}return dm(t).trim()}function aw(t){let n=p.useRef(""),r=p.useRef("");return pe(()=>{let o=t.current;if(!o)return"";let i=o.innerText;if(n.current===i)return r.current;let a=LP(o).trim().toLowerCase();return n.current=i,r.current=a,a})}var AP=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(AP||{}),_P=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(_P||{}),$P=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t))($P||{});function Rs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeItemIndex===null?null:t.items[t.activeItemIndex],o=Fl(n(t.items.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{items:o,activeItemIndex:i}}let zP={1(t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},0(t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},2:(t,n)=>{var r;let o=Rs(t),i=Ga(n,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeItemIndex===null?t.items:t.items.slice(t.activeItemIndex+r).concat(t.items.slice(0,t.activeItemIndex+r))).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!l.dataRef.current.disabled}),a=i?t.items.indexOf(i):-1;return a===-1||a===t.activeItemIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeItemIndex:a,activationTrigger:1}},4(t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},5:(t,n)=>{let r=Rs(t,o=>[...o,{id:n.id,dataRef:n.dataRef}]);return{...t,...r}},6:(t,n)=>{let r=Rs(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}}},ep=p.createContext(null);ep.displayName="MenuContext";function Wl(t){let n=p.useContext(ep);if(n===null){let r=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Wl),r}return n}function HP(t,n){return rt(n.type,zP,t,n)}let BP=p.Fragment;function VP(t,n){let{__demoMode:r=!1,...o}=t,i=p.useReducer(HP,{__demoMode:r,menuState:r?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:l,buttonRef:c},u]=i,d=xt(n);Rf([c,l],(b,h)=>{var m;u({type:1}),Rl(h,Nl.Loose)||(b.preventDefault(),(m=c.current)==null||m.focus())},a===0);let f=pe(()=>{u({type:1})}),g=p.useMemo(()=>({open:a===0,close:f}),[a,f]);return O.createElement(ep.Provider,{value:i},O.createElement(Al,{value:rt(a,{0:ut.Open,1:ut.Closed})},ht({ourProps:{ref:d},theirProps:o,slot:g,defaultTag:BP,name:"Menu"})))}let WP="button";function UP(t,n){var r;let o=cn(),{id:i=`headlessui-menu-button-${o}`,...a}=t,[l,c]=Wl("Menu.Button"),u=xt(l.buttonRef,n),d=wn(),f=pe(y=>{switch(y.key){case De.Space:case De.Enter:case De.ArrowDown:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Fe.First}));break;case De.ArrowUp:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Fe.Last}))}}),g=pe(y=>{switch(y.key){case De.Space:y.preventDefault()}}),b=pe(y=>_f(y.currentTarget)?y.preventDefault():void(t.disabled||(l.menuState===0?(c({type:1}),d.nextFrame(()=>{var E;return(E=l.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})})):(y.preventDefault(),c({type:0}))))),h=p.useMemo(()=>({open:l.menuState===0}),[l]),m={ref:u,id:i,type:Ff(t,l.buttonRef),"aria-haspopup":"menu","aria-controls":(r=l.itemsRef.current)==null?void 0:r.id,"aria-expanded":l.menuState===0,onKeyDown:f,onKeyUp:g,onClick:b};return ht({ourProps:m,theirProps:a,slot:h,defaultTag:WP,name:"Menu.Button"})}let qP="div",YP=Or.RenderStrategy|Or.Static;function KP(t,n){var r,o;let i=cn(),{id:a=`headlessui-menu-items-${i}`,...l}=t,[c,u]=Wl("Menu.Items"),d=xt(c.itemsRef,n),f=Ll(c.itemsRef),g=wn(),b=qi(),h=b===null?c.menuState===0:(b&ut.Open)===ut.Open;p.useEffect(()=>{let k=c.itemsRef.current;k&&c.menuState===0&&k!==(f==null?void 0:f.activeElement)&&k.focus({preventScroll:!0})},[c.menuState,c.itemsRef,f]),rw({container:c.itemsRef.current,enabled:c.menuState===0,accept(k){return k.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:k.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(k){k.setAttribute("role","none")}});let m=pe(k=>{var C,D;switch(g.dispose(),k.key){case De.Space:if(c.searchQuery!=="")return k.preventDefault(),k.stopPropagation(),u({type:3,value:k.key});case De.Enter:if(k.preventDefault(),k.stopPropagation(),u({type:1}),c.activeItemIndex!==null){let{dataRef:I}=c.items[c.activeItemIndex];(D=(C=I.current)==null?void 0:C.domRef.current)==null||D.click()}h1(c.buttonRef.current);break;case De.ArrowDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.Next});case De.ArrowUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.Previous});case De.Home:case De.PageUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.First});case De.End:case De.PageDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Fe.Last});case De.Escape:k.preventDefault(),k.stopPropagation(),u({type:1}),Bt().nextFrame(()=>{var I;return(I=c.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})});break;case De.Tab:k.preventDefault(),k.stopPropagation(),u({type:1}),Bt().nextFrame(()=>{DS(c.buttonRef.current,k.shiftKey?Pu.Previous:Pu.Next)});break;default:k.key.length===1&&(u({type:3,value:k.key}),g.setTimeout(()=>u({type:4}),350))}}),y=pe(k=>{switch(k.key){case De.Space:k.preventDefault()}}),E=p.useMemo(()=>({open:c.menuState===0}),[c]),v={"aria-activedescendant":c.activeItemIndex===null||(r=c.items[c.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(o=c.buttonRef.current)==null?void 0:o.id,id:a,onKeyDown:m,onKeyUp:y,role:"menu",tabIndex:0,ref:d};return ht({ourProps:v,theirProps:l,slot:E,defaultTag:qP,features:YP,visible:h,name:"Menu.Items"})}let GP=p.Fragment;function QP(t,n){let r=cn(),{id:o=`headlessui-menu-item-${r}`,disabled:i=!1,...a}=t,[l,c]=Wl("Menu.Item"),u=l.activeItemIndex!==null&&l.items[l.activeItemIndex].id===o,d=p.useRef(null),f=xt(n,d);Ge(()=>{if(!l.__demoMode&&l.menuState===0&&u&&l.activationTrigger!==0){let I=Bt();return I.requestAnimationFrame(()=>{var T,z;(z=(T=d.current)==null?void 0:T.scrollIntoView)==null||z.call(T,{block:"nearest"})}),I.dispose}},[l.__demoMode,d,u,l.menuState,l.activationTrigger,l.activeItemIndex]);let g=aw(d),b=p.useRef({disabled:i,domRef:d,get textValue(){return g()}});Ge(()=>{b.current.disabled=i},[b,i]),Ge(()=>(c({type:5,id:o,dataRef:b}),()=>c({type:6,id:o})),[b,o]);let h=pe(()=>{c({type:1})}),m=pe(I=>i?I.preventDefault():(c({type:1}),void h1(l.buttonRef.current))),y=pe(()=>i?c({type:2,focus:Fe.Nothing}):void c({type:2,focus:Fe.Specific,id:o})),E=Lf(),v=pe(I=>E.update(I)),k=pe(I=>{E.wasMoved(I)&&(i||u||c({type:2,focus:Fe.Specific,id:o,trigger:0}))}),C=pe(I=>{E.wasMoved(I)&&(i||u&&c({type:2,focus:Fe.Nothing}))}),D=p.useMemo(()=>({active:u,disabled:i,close:h}),[u,i,h]);return ht({ourProps:{id:o,ref:f,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,disabled:void 0,onClick:m,onFocus:y,onPointerEnter:v,onMouseEnter:v,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:D,defaultTag:GP,name:"Menu.Item"})}let JP=ft(VP),ZP=ft(UP),XP=ft(KP),eI=ft(QP);Object.assign(JP,{Button:ZP,Items:XP,Item:eI});x.string,x.node,x.any,x.bool;O.createContext();x.bool,x.string,x.node;x.number,x.number,x.bool,x.string,x.node;p.createContext();x.bool,x.string,x.bool,x.node,x.node,x.string,x.bool,x.bool,x.string,x.string,x.func,x.func,x.bool,x.node,x.bool,x.string;x.bool,x.bool,x.string,x.func;x.string,x.node,x.bool,x.bool,x.func;var tI=`
	jn-grid
	jn-items-stretch
`,nI=function(t,n,r,o,i){var a;if(i&&0<i.length)return a={gridTemplateColumns:i},a;var l="";if(o&&Array.isArray(o)&&0<o.length){var c=tE([],Array(t));c.map(function(u,d){l+=o.includes(d)?"min-content ":"minmax(".concat(r,", ").concat(n,") ")})}else l="repeat(".concat(t,", minmax(").concat(r,", ").concat(n,"))");return a={gridTemplateColumns:l},a},lw=O.createContext({}),rI=function(){return O.useContext(lw)},sw=function(t){var n=t.columns,r=n===void 0?1:n,o=t.columnMaxSize,i=o===void 0?"auto":o,a=t.columnMinSize,l=a===void 0?"0px":a,c=t.minContentColumns,u=t.gridColumnTemplate,d=t.cellVerticalAlignment,f=d===void 0?"center":d,g=t.className,b=g===void 0?"":g,h=t.children,m=h===void 0?null:h,y=it(t,["columns","columnMaxSize","columnMinSize","minContentColumns","gridColumnTemplate","cellVerticalAlignment","className","children"]);return O.createElement(lw.Provider,{value:{cellVerticalAlignment:f}},O.createElement("div",ue({className:"juno-datagrid ".concat(tI," ").concat(b),style:nI(r,i,l,c,u),role:"grid"},y),m))},oI=function(t,n){return`
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
	`)},iI=function(t){var n;return t&&(n={gridColumn:"span ".concat(t," / span ").concat(t)}),n},Jt=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=it(t,["colSpan","nowrap","className","children"]),d=rI()||{},f=d.cellVerticalAlignment;return O.createElement("div",ue({className:"juno-datagrid-cell ".concat(oI(o!==void 0&&o,f)," ").concat(a),style:iI(r),role:"gridcell",ref:n},u),c)});Jt.displayName="DataGridCell";var aI=`
	jn-font-bold
	jn-text-theme-high
	jn-bg-theme-background-lvl-1
	jn-border-theme-background-lvl-0
`,mo=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=it(t,["colSpan","nowrap","className","children"]);return O.createElement(Jt,ue({colSpan:r,nowrap:o!==void 0&&o,className:"juno-datagrid-head-cell ".concat(aI," ").concat(a),role:"columnheader",ref:n},u),c)});mo.displayName="DataGridHeadCell";var lI=`
	jn-contents
`,qr=p.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=it(t,["className","children"]);return O.createElement("div",ue({className:"juno-datagrid-row ".concat(lI," ").concat(o),role:"row",ref:n},l),a)});qr.displayName="DataGridRow";var Fs=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],jo={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var r=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-r.getTime())/864e5-3+(r.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},Ti={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(3<n&&21>n)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},$t=function(t,n){return n===void 0&&(n=2),("000"+t).slice(-1*n)},nn=function(t){return t===!0?1:0};function fm(t,n){var r;return function(){var o=this,i=arguments;clearTimeout(r),r=setTimeout(function(){return t.apply(o,i)},n)}}var Ls=function(t){return t instanceof Array?t:[t]};function Dt(t,n,r){return r===!0?t.classList.add(n):void t.classList.remove(n)}function Be(t,n,r){var o=window.document.createElement(t);return n=n||"",r=r||"",o.className=n,r!==void 0&&(o.textContent=r),o}function ha(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function cw(t,n){return n(t)?t:t.parentNode?cw(t.parentNode,n):void 0}function ma(t,n){var r=Be("div","numInputWrapper"),o=Be("input","numInput "+t),i=Be("span","arrowUp"),a=Be("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),n!==void 0)for(var l in n)o.setAttribute(l,n[l]);return r.appendChild(o),r.appendChild(i),r.appendChild(a),r}function Ut(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var As=function(){},nl=function(t,n,r){return r.months[n?"shorthand":"longhand"][t]},sI={D:As,F:function(t,n,r){t.setMonth(r.months.longhand.indexOf(n))},G:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,r){t.setHours(t.getHours()%12+12*nn(new RegExp(r.amPM[1],"i").test(n)))},M:function(t,n,r){t.setMonth(r.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(1e3*parseFloat(n))},W:function(t,n,r){var o=parseInt(n),i=new Date(t.getFullYear(),0,2+7*(o-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+r.firstDayOfWeek),i},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:As,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:As,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},Br={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ji={Z:function(t){return t.toISOString()},D:function(t,n,r){return n.weekdays.shorthand[ji.w(t,n,r)]},F:function(t,n,r){return nl(ji.n(t,n,r)-1,!1,n)},G:function(t,n,r){return $t(ji.h(t,n,r))},H:function(t){return $t(t.getHours())},J:function(t,n){return n.ordinal===void 0?t.getDate():t.getDate()+n.ordinal(t.getDate())},K:function(t,n){return n.amPM[nn(11<t.getHours())]},M:function(t,n){return nl(t.getMonth(),!0,n)},S:function(t){return $t(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,r){return r.getWeek(t)},Y:function(t){return $t(t.getFullYear(),4)},d:function(t){return $t(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return $t(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return $t(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return(t.getFullYear()+"").substring(2)}},uw=function(t){var n=t.config,r=n===void 0?jo:n,o=t.l10n,i=o===void 0?Ti:o,a=t.isMobile;return function(l,c,u){var d=u||i;return r.formatDate===void 0||a!==void 0&&a?c.split("").map(function(f,g,b){return ji[f]&&b[g-1]!=="\\"?ji[f](l,d,r):f==="\\"?"":f}).join(""):r.formatDate(l,c,d)}},Fu=function(t){var n=t.config,r=n===void 0?jo:n,o=t.l10n,i=o===void 0?Ti:o;return function(a,l,c,u){if(a===0||a){var d;if(a instanceof Date)d=new Date(a.getTime());else if(typeof a!="string"&&a.toFixed!==void 0)d=new Date(a);else if(typeof a=="string"){var f=l||(r||jo).dateFormat,g=(a+"").trim();if(g==="today")d=new Date,c=!0;else if(r&&r.parseDate)d=r.parseDate(a,f);else if(/Z$/.test(g)||/GMT$/.test(g))d=new Date(a);else{for(var b=void 0,h=[],m=0,y=0,E="";m<f.length;m++){var v=f[m],k=v==="\\",C=f[m-1]==="\\"||k;if(Br[v]&&!C){E+=Br[v];var D=new RegExp(E).exec(a);D&&(b=!0)&&h[v==="Y"?"unshift":"push"]({fn:sI[v],val:D[++y]})}else k||(E+=".")}d=r&&r.noCalendar?new Date(new Date().setHours(0,0,0,0)):new Date(new Date().getFullYear(),0,1,0,0,0,0),h.forEach(function(I){var T=I.fn,z=I.val;return d=T(d,z,u||i)||d}),d=b?d:void 0}}return!(d instanceof Date)||isNaN(d.getTime())?void r.errorHandler(new Error("Invalid date provided: "+a)):(c===!0&&d.setHours(0,0,0,0),d)}}};function Yt(t,n,r){return r===void 0&&(r=!0),r===!1?t.getTime()-n.getTime():new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0)}var cI=function(t,n,r){return t>Math.min(n,r)&&t<Math.max(n,r)},_s=function(t,n,r){return 3600*t+60*n+r},uI=function(t){var n=Math.floor(t/3600),r=(t-3600*n)/60;return[n,r,t-3600*n-60*r]},dI={DAY:864e5};function $s(t){var n=Math.min,r=t.defaultHour,o=t.defaultMinute,i=t.defaultSeconds;if(t.minDate!==void 0){var a=t.minDate.getHours(),l=t.minDate.getMinutes(),c=t.minDate.getSeconds();r<a&&(r=a),r===a&&o<l&&(o=l),r===a&&o===l&&i<c&&(i=t.minDate.getSeconds())}if(t.maxDate!==void 0){var u=t.maxDate.getHours(),d=t.maxDate.getMinutes();r=n(r,u),r===u&&(o=n(d,o)),r===u&&o===d&&(i=t.maxDate.getSeconds())}return{hours:r,minutes:o,seconds:i}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var o,i=function(c){c&&Object.keys(c).forEach(function(u){return t[u]=c[u]})},a=0,l=n;a<l.length;a++)o=l[a],i(o);return t});var Ot=function(){return Ot=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},Ot.apply(this,arguments)},pm=function(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length;for(var o=Array(t),i=0,n=0;n<r;n++)for(var a=arguments[n],l=0,c=a.length;l<c;l++,i++)o[i]=a[l];return o},fI=300;function pI(t,n){var r=Math.abs,o=Math.max,i=Math.min;function a(){s.utils={getDaysInMonth:function(w,S){return w===void 0&&(w=s.currentMonth),S===void 0&&(S=s.currentYear),w===1&&(S%4==0&&S%100!=0||S%400==0)?29:s.l10n.daysInMonth[w]}}}function l(){s.element=s.input=t,s.isOpen=!1,ii(),sr(),gn(),It(),a(),s.isMobile||z(),C(),(s.selectedDates.length||s.config.noCalendar)&&(s.config.enableTime&&m(s.config.noCalendar?s.latestSelectedDateObj:void 0),bt(!1)),d();var w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!s.isMobile&&w&&pn(),je("onReady")}function c(){var w;return((w=s.calendarContainer)===null||w===void 0?void 0:w.getRootNode()).activeElement||document.activeElement}function u(w){return w.bind(s)}function d(){var w=s.config;w.weekNumbers===!1&&w.showMonths===1||w.noCalendar!==!0&&window.requestAnimationFrame(function(){if(s.calendarContainer!==void 0&&(s.calendarContainer.style.visibility="hidden",s.calendarContainer.style.display="block"),s.daysContainer!==void 0){var S=(s.days.offsetWidth+1)*w.showMonths;s.daysContainer.style.width=S+"px",s.calendarContainer.style.width=S+(s.weekWrapper===void 0?0:s.weekWrapper.offsetWidth)+"px",s.calendarContainer.style.removeProperty("visibility"),s.calendarContainer.style.removeProperty("display")}})}function f(w){if(s.selectedDates.length===0){var S=s.config.minDate===void 0||0<=Yt(new Date,s.config.minDate)?new Date:new Date(s.config.minDate.getTime()),P=$s(s.config);S.setHours(P.hours,P.minutes,P.seconds,S.getMilliseconds()),s.selectedDates=[S],s.latestSelectedDateObj=S}w!==void 0&&w.type!=="blur"&&ps(w);var $=s._input.value;h(),bt(),s._input.value!==$&&s._debouncedChange()}function g(w,S){return w%12+12*nn(S===s.l10n.amPM[1])}function b(w){switch(w%24){case 0:case 12:return 12;default:return w%12}}function h(){if(s.hourElement!==void 0&&s.minuteElement!==void 0){var w=(parseInt(s.hourElement.value.slice(-2),10)||0)%24,S=(parseInt(s.minuteElement.value,10)||0)%60,P=s.secondElement===void 0?0:(parseInt(s.secondElement.value,10)||0)%60;s.amPM!==void 0&&(w=g(w,s.amPM.textContent));var $=s.config.minTime!==void 0||s.config.minDate&&s.minDateHasTime&&s.latestSelectedDateObj&&Yt(s.latestSelectedDateObj,s.config.minDate,!0)===0,q=s.config.maxTime!==void 0||s.config.maxDate&&s.maxDateHasTime&&s.latestSelectedDateObj&&Yt(s.latestSelectedDateObj,s.config.maxDate,!0)===0;if(s.config.maxTime!==void 0&&s.config.minTime!==void 0&&s.config.minTime>s.config.maxTime){var Z=_s(s.config.minTime.getHours(),s.config.minTime.getMinutes(),s.config.minTime.getSeconds()),ce=_s(s.config.maxTime.getHours(),s.config.maxTime.getMinutes(),s.config.maxTime.getSeconds()),te=_s(w,S,P);if(te>ce&&te<Z){var fe=uI(Z);w=fe[0],S=fe[1],P=fe[2]}}else{if(q){var ne=s.config.maxTime===void 0?s.config.maxDate:s.config.maxTime;w=i(w,ne.getHours()),w===ne.getHours()&&(S=i(S,ne.getMinutes())),S===ne.getMinutes()&&(P=i(P,ne.getSeconds()))}if($){var re=s.config.minTime===void 0?s.config.minDate:s.config.minTime;w=o(w,re.getHours()),w===re.getHours()&&S<re.getMinutes()&&(S=re.getMinutes()),S===re.getMinutes()&&(P=o(P,re.getSeconds()))}}y(w,S,P)}}function m(w){var S=w||s.latestSelectedDateObj;S&&S instanceof Date&&y(S.getHours(),S.getMinutes(),S.getSeconds())}function y(w,S,P){s.latestSelectedDateObj!==void 0&&s.latestSelectedDateObj.setHours(w%24,S,P||0,0),s.hourElement&&s.minuteElement&&!s.isMobile&&(s.hourElement.value=$t(s.config.time_24hr?w:(12+w)%12+12*nn(w%12==0)),s.minuteElement.value=$t(S),s.amPM!==void 0&&(s.amPM.textContent=s.l10n.amPM[nn(12<=w)]),s.secondElement!==void 0&&(s.secondElement.value=$t(P)))}function E(w){var S=Ut(w),P=parseInt(S.value)+(w.delta||0);(1<P/1e3||w.key==="Enter"&&!/[^\d]/.test(P.toString()))&&me(P)}function v(w,S,P,$){return S instanceof Array?S.forEach(function(q){return v(w,q,P,$)}):w instanceof Array?w.forEach(function(q){return v(q,S,P,$)}):(w.addEventListener(S,P,$),void s._handlers.push({remove:function(){return w.removeEventListener(S,P,$)}}))}function k(){je("onChange")}function C(){if(s.config.wrap&&["open","close","toggle","clear"].forEach(function(P){Array.prototype.forEach.call(s.element.querySelectorAll("[data-"+P+"]"),function($){return v($,"click",s[P])})}),s.isMobile)return void Kn();var w=fm(qn,50);if(s._debouncedChange=fm(k,fI),s.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&v(s.daysContainer,"mouseover",function(P){s.config.mode==="range"&&Pt(Ut(P))}),v(s._input,"keydown",Je),s.calendarContainer!==void 0&&v(s.calendarContainer,"keydown",Je),s.config.inline||s.config.static||v(window,"resize",w),window.ontouchstart===void 0?v(window.document,"mousedown",oe):v(window.document,"touchstart",oe),v(window.document,"focus",oe,{capture:!0}),s.config.clickOpens===!0&&(v(s._input,"focus",s.open),v(s._input,"click",s.open)),s.daysContainer!==void 0&&(v(s.monthNav,"click",fs),v(s.monthNav,["keyup","increment"],E),v(s.daysContainer,"click",ee)),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0){var S=function(P){return Ut(P).select()};v(s.timeContainer,["increment"],f),v(s.timeContainer,"blur",f,{capture:!0}),v(s.timeContainer,"click",I),v([s.hourElement,s.minuteElement],["focus","click"],S),s.secondElement!==void 0&&v(s.secondElement,"focus",function(){return s.secondElement&&s.secondElement.select()}),s.amPM!==void 0&&v(s.amPM,"click",function(P){f(P)})}s.config.allowInput&&v(s._input,"blur",at)}function D(w,S){var P=w===void 0?s.latestSelectedDateObj||(s.config.minDate&&s.config.minDate>s.now?s.config.minDate:s.config.maxDate&&s.config.maxDate<s.now?s.config.maxDate:s.now):s.parseDate(w),$=s.currentYear,q=s.currentMonth;try{P!==void 0&&(s.currentYear=P.getFullYear(),s.currentMonth=P.getMonth())}catch(Z){Z.message="Invalid date supplied: "+P,s.config.errorHandler(Z)}S&&s.currentYear!==$&&(je("onYearChange"),V()),S&&(s.currentYear!==$||s.currentMonth!==q)&&je("onMonthChange"),s.redraw()}function I(w){var S=Ut(w);~S.className.indexOf("arrow")&&T(w,S.classList.contains("arrowUp")?1:-1)}function T(w,S,P){var $=w&&Ut(w),q=P||$&&$.parentNode&&$.parentNode.firstChild,Z=Lt("increment");Z.delta=S,q&&q.dispatchEvent(Z)}function z(){var w=window.document.createDocumentFragment();if(s.calendarContainer=Be("div","flatpickr-calendar"),s.calendarContainer.tabIndex=-1,!s.config.noCalendar){if(w.appendChild(J()),s.innerContainer=Be("div","flatpickr-innerContainer"),s.config.weekNumbers){var S=se(),P=S.weekWrapper,$=S.weekNumbers;s.innerContainer.appendChild(P),s.weekNumbers=$,s.weekWrapper=P}s.rContainer=Be("div","flatpickr-rContainer"),s.rContainer.appendChild(N()),s.daysContainer||(s.daysContainer=Be("div","flatpickr-days"),s.daysContainer.tabIndex=-1),R(),s.rContainer.appendChild(s.daysContainer),s.innerContainer.appendChild(s.rContainer),w.appendChild(s.innerContainer)}s.config.enableTime&&w.appendChild(X()),Dt(s.calendarContainer,"rangeMode",s.config.mode==="range"),Dt(s.calendarContainer,"animate",s.config.animate===!0),Dt(s.calendarContainer,"multiMonth",1<s.config.showMonths),s.calendarContainer.appendChild(w);var q=s.config.appendTo!==void 0&&s.config.appendTo.nodeType!==void 0;if((s.config.inline||s.config.static)&&(s.calendarContainer.classList.add(s.config.inline?"inline":"static"),s.config.inline&&(!q&&s.element.parentNode?s.element.parentNode.insertBefore(s.calendarContainer,s._input.nextSibling):s.config.appendTo!==void 0&&s.config.appendTo.appendChild(s.calendarContainer)),s.config.static)){var Z=Be("div","flatpickr-wrapper");s.element.parentNode&&s.element.parentNode.insertBefore(Z,s.element),Z.appendChild(s.element),s.altInput&&Z.appendChild(s.altInput),Z.appendChild(s.calendarContainer)}s.config.static||s.config.inline||(s.config.appendTo===void 0?window.document.body:s.config.appendTo).appendChild(s.calendarContainer)}function A(w,S,P,$){var q=ve(S,!0),Z=Be("span",w,S.getDate().toString());return Z.dateObj=S,Z.$i=$,Z.setAttribute("aria-label",s.formatDate(S,s.config.ariaDateFormat)),w.indexOf("hidden")===-1&&Yt(S,s.now)===0&&(s.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),q?(Z.tabIndex=-1,Et(S)&&(Z.classList.add("selected"),s.selectedDateElem=Z,s.config.mode==="range"&&(Dt(Z,"startRange",s.selectedDates[0]&&Yt(S,s.selectedDates[0],!0)===0),Dt(Z,"endRange",s.selectedDates[1]&&Yt(S,s.selectedDates[1],!0)===0),w==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),s.config.mode==="range"&&ds(S)&&!Et(S)&&Z.classList.add("inRange"),s.weekNumbers&&s.config.showMonths===1&&w!=="prevMonthDay"&&$%7==6&&s.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+s.config.getWeek(S)+"</span>"),je("onDayCreate",Z),Z}function Q(w){w.focus(),s.config.mode==="range"&&Pt(w)}function B(w){for(var S=0<w?0:s.config.showMonths-1,P=0<w?s.config.showMonths:-1,$=S;$!=P;$+=w)for(var q,Z=s.daysContainer.children[$],ce=0<w?0:Z.children.length-1,te=0<w?Z.children.length:-1,fe=ce;fe!=te;fe+=w)if(q=Z.children[fe],q.className.indexOf("hidden")===-1&&ve(q.dateObj))return q}function F(w,S){for(var P=w.className.indexOf("Month")===-1?w.dateObj.getMonth():s.currentMonth,$=0<S?s.config.showMonths:-1,q=0<S?1:-1,Z=P-s.currentMonth;Z!=$;Z+=q)for(var ce,te=s.daysContainer.children[Z],fe=P-s.currentMonth===Z?w.$i+S:0>S?te.children.length-1:0,ne=te.children.length,re=fe;0<=re&&re<ne&&re!=(0<S?ne:-1);re+=q)if(ce=te.children[re],ce.className.indexOf("hidden")===-1&&ve(ce.dateObj)&&r(w.$i-re)>=r(S))return Q(ce);return s.changeMonth(q),void L(B(q),0)}function L(w,S){var P=c(),$=He(P||document.body),q=w===void 0?$?P:s.selectedDateElem!==void 0&&He(s.selectedDateElem)?s.selectedDateElem:s.todayDateElem!==void 0&&He(s.todayDateElem)?s.todayDateElem:B(0<S?1:-1):w;q===void 0?s._input.focus():$?F(q,S):Q(q)}function _(w,S){for(var P=(new Date(w,S,1).getDay()-s.l10n.firstDayOfWeek+7)%7,$=s.utils.getDaysInMonth((S-1+12)%12,w),q=s.utils.getDaysInMonth(S,w),Z=window.document.createDocumentFragment(),ce=1<s.config.showMonths,te=ce?"prevMonthDay hidden":"prevMonthDay",fe=ce?"nextMonthDay hidden":"nextMonthDay",ne=$+1-P,re=0;ne<=$;ne++,re++)Z.appendChild(A("flatpickr-day "+te,new Date(w,S-1,ne),ne,re));for(ne=1;ne<=q;ne++,re++)Z.appendChild(A("flatpickr-day",new Date(w,S,ne),ne,re));for(var Ee=q+1;Ee<=42-P&&(s.config.showMonths===1||re%7!=0);Ee++,re++)Z.appendChild(A("flatpickr-day "+fe,new Date(w,S+1,Ee%q),Ee,re));var ct=Be("div","dayContainer");return ct.appendChild(Z),ct}function R(){if(s.daysContainer!==void 0){ha(s.daysContainer),s.weekNumbers&&ha(s.weekNumbers);for(var w,S=document.createDocumentFragment(),P=0;P<s.config.showMonths;P++)w=new Date(s.currentYear,s.currentMonth,1),w.setMonth(s.currentMonth+P),S.appendChild(_(w.getFullYear(),w.getMonth()));s.daysContainer.appendChild(S),s.days=s.daysContainer.firstChild,s.config.mode==="range"&&s.selectedDates.length===1&&Pt()}}function V(){if(!(1<s.config.showMonths||s.config.monthSelectorType!=="dropdown")){var w=function($){return!(s.config.minDate!==void 0&&s.currentYear===s.config.minDate.getFullYear()&&$<s.config.minDate.getMonth())&&!(s.config.maxDate!==void 0&&s.currentYear===s.config.maxDate.getFullYear()&&$>s.config.maxDate.getMonth())};s.monthsDropdownContainer.tabIndex=-1,s.monthsDropdownContainer.innerHTML="";for(var S=0;12>S;S++)if(w(S)){var P=Be("option","flatpickr-monthDropdown-month");P.value=new Date(s.currentYear,S).getMonth().toString(),P.textContent=nl(S,s.config.shorthandCurrentMonth,s.l10n),P.tabIndex=-1,s.currentMonth===S&&(P.selected=!0),s.monthsDropdownContainer.appendChild(P)}}}function H(){var w,S=Be("div","flatpickr-month"),P=window.document.createDocumentFragment();1<s.config.showMonths||s.config.monthSelectorType==="static"?w=Be("span","cur-month"):(s.monthsDropdownContainer=Be("select","flatpickr-monthDropdown-months"),s.monthsDropdownContainer.setAttribute("aria-label",s.l10n.monthAriaLabel),v(s.monthsDropdownContainer,"change",function(ce){var te=Ut(ce),fe=parseInt(te.value,10);s.changeMonth(fe-s.currentMonth),je("onMonthChange")}),V(),w=s.monthsDropdownContainer);var $=ma("cur-year",{tabindex:"-1"}),q=$.getElementsByTagName("input")[0];q.setAttribute("aria-label",s.l10n.yearAriaLabel),s.config.minDate&&q.setAttribute("min",s.config.minDate.getFullYear().toString()),s.config.maxDate&&(q.setAttribute("max",s.config.maxDate.getFullYear().toString()),q.disabled=!!s.config.minDate&&s.config.minDate.getFullYear()===s.config.maxDate.getFullYear());var Z=Be("div","flatpickr-current-month");return Z.appendChild(w),Z.appendChild($),P.appendChild(Z),S.appendChild(P),{container:S,yearElement:q,monthElement:w}}function U(){ha(s.monthNav),s.monthNav.appendChild(s.prevMonthNav),s.config.showMonths&&(s.yearElements=[],s.monthElements=[]);for(var w,S=s.config.showMonths;S--;)w=H(),s.yearElements.push(w.yearElement),s.monthElements.push(w.monthElement),s.monthNav.appendChild(w.container);s.monthNav.appendChild(s.nextMonthNav)}function J(){return s.monthNav=Be("div","flatpickr-months"),s.yearElements=[],s.monthElements=[],s.prevMonthNav=Be("span","flatpickr-prev-month"),s.prevMonthNav.innerHTML=s.config.prevArrow,s.nextMonthNav=Be("span","flatpickr-next-month"),s.nextMonthNav.innerHTML=s.config.nextArrow,U(),Object.defineProperty(s,"_hidePrevMonthArrow",{get:function(){return s.__hidePrevMonthArrow},set:function(w){s.__hidePrevMonthArrow!==w&&(Dt(s.prevMonthNav,"flatpickr-disabled",w),s.__hidePrevMonthArrow=w)}}),Object.defineProperty(s,"_hideNextMonthArrow",{get:function(){return s.__hideNextMonthArrow},set:function(w){s.__hideNextMonthArrow!==w&&(Dt(s.nextMonthNav,"flatpickr-disabled",w),s.__hideNextMonthArrow=w)}}),s.currentYearElement=s.yearElements[0],Qn(),s.monthNav}function X(){s.calendarContainer.classList.add("hasTime"),s.config.noCalendar&&s.calendarContainer.classList.add("noCalendar");var w=$s(s.config);s.timeContainer=Be("div","flatpickr-time"),s.timeContainer.tabIndex=-1;var S=Be("span","flatpickr-time-separator",":"),P=ma("flatpickr-hour",{"aria-label":s.l10n.hourAriaLabel});s.hourElement=P.getElementsByTagName("input")[0];var $=ma("flatpickr-minute",{"aria-label":s.l10n.minuteAriaLabel});if(s.minuteElement=$.getElementsByTagName("input")[0],s.hourElement.tabIndex=s.minuteElement.tabIndex=-1,s.hourElement.value=$t(s.latestSelectedDateObj?s.latestSelectedDateObj.getHours():s.config.time_24hr?w.hours:b(w.hours)),s.minuteElement.value=$t(s.latestSelectedDateObj?s.latestSelectedDateObj.getMinutes():w.minutes),s.hourElement.setAttribute("step",s.config.hourIncrement.toString()),s.minuteElement.setAttribute("step",s.config.minuteIncrement.toString()),s.hourElement.setAttribute("min",s.config.time_24hr?"0":"1"),s.hourElement.setAttribute("max",s.config.time_24hr?"23":"12"),s.hourElement.setAttribute("maxlength","2"),s.minuteElement.setAttribute("min","0"),s.minuteElement.setAttribute("max","59"),s.minuteElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(P),s.timeContainer.appendChild(S),s.timeContainer.appendChild($),s.config.time_24hr&&s.timeContainer.classList.add("time24hr"),s.config.enableSeconds){s.timeContainer.classList.add("hasSeconds");var q=ma("flatpickr-second");s.secondElement=q.getElementsByTagName("input")[0],s.secondElement.value=$t(s.latestSelectedDateObj?s.latestSelectedDateObj.getSeconds():w.seconds),s.secondElement.setAttribute("step",s.minuteElement.getAttribute("step")),s.secondElement.setAttribute("min","0"),s.secondElement.setAttribute("max","59"),s.secondElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(Be("span","flatpickr-time-separator",":")),s.timeContainer.appendChild(q)}return s.config.time_24hr||(s.amPM=Be("span","flatpickr-am-pm",s.l10n.amPM[nn(11<(s.latestSelectedDateObj?s.hourElement.value:s.config.defaultHour))]),s.amPM.title=s.l10n.toggleTitle,s.amPM.tabIndex=-1,s.timeContainer.appendChild(s.amPM)),s.timeContainer}function N(){s.weekdayContainer?ha(s.weekdayContainer):s.weekdayContainer=Be("div","flatpickr-weekdays");for(var w,S=s.config.showMonths;S--;)w=Be("div","flatpickr-weekdaycontainer"),s.weekdayContainer.appendChild(w);return ae(),s.weekdayContainer}function ae(){if(s.weekdayContainer){var w=s.l10n.firstDayOfWeek,S=pm(s.l10n.weekdays.shorthand);0<w&&w<S.length&&(S=pm(S.splice(w,S.length),S.splice(0,w)));for(var P=s.config.showMonths;P--;)s.weekdayContainer.children[P].innerHTML=`
      <span class='flatpickr-weekday'>
        `+S.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function se(){s.calendarContainer.classList.add("hasWeeks");var w=Be("div","flatpickr-weekwrapper");w.appendChild(Be("span","flatpickr-weekday",s.l10n.weekAbbreviation));var S=Be("div","flatpickr-weeks");return w.appendChild(S),{weekWrapper:w,weekNumbers:S}}function M(w,S){S===void 0&&(S=!0);var P=S?w:w-s.currentMonth;0>P&&s._hidePrevMonthArrow===!0||0<P&&s._hideNextMonthArrow===!0||(s.currentMonth+=P,(0>s.currentMonth||11<s.currentMonth)&&(s.currentYear+=11<s.currentMonth?1:-1,s.currentMonth=(s.currentMonth+12)%12,je("onYearChange"),V()),R(),je("onMonthChange"),Qn())}function ie(w,S){if(w===void 0&&(w=!0),S===void 0&&(S=!0),s.input.value="",s.altInput!==void 0&&(s.altInput.value=""),s.mobileInput!==void 0&&(s.mobileInput.value=""),s.selectedDates=[],s.latestSelectedDateObj=void 0,S===!0&&(s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth()),s.config.enableTime===!0){var P=$s(s.config),$=P.hours,q=P.minutes,Z=P.seconds;y($,q,Z)}s.redraw(),w&&je("onChange")}function ye(){s.isOpen=!1,s.isMobile||(s.calendarContainer!==void 0&&s.calendarContainer.classList.remove("open"),s._input!==void 0&&s._input.classList.remove("active")),je("onClose")}function Pe(){s.config!==void 0&&je("onDestroy");for(var w=s._handlers.length;w--;)s._handlers[w].remove();if(s._handlers=[],s.mobileInput)s.mobileInput.parentNode&&s.mobileInput.parentNode.removeChild(s.mobileInput),s.mobileInput=void 0;else if(s.calendarContainer&&s.calendarContainer.parentNode)if(s.config.static&&s.calendarContainer.parentNode){var S=s.calendarContainer.parentNode;if(S.lastChild&&S.removeChild(S.lastChild),S.parentNode){for(;S.firstChild;)S.parentNode.insertBefore(S.firstChild,S);S.parentNode.removeChild(S)}}else s.calendarContainer.parentNode.removeChild(s.calendarContainer);s.altInput&&(s.input.type="text",s.altInput.parentNode&&s.altInput.parentNode.removeChild(s.altInput),delete s.altInput),s.input&&(s.input.type=s.input._type,s.input.classList.remove("flatpickr-input"),s.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(P){try{delete s[P]}catch{}})}function $e(w){return s.calendarContainer.contains(w)}function oe(w){if(s.isOpen&&!s.config.inline){var S=Ut(w),P=$e(S),$=S===s.input||S===s.altInput||s.element.contains(S)||w.path&&w.path.indexOf&&(~w.path.indexOf(s.input)||~w.path.indexOf(s.altInput)),q=!$&&!P&&!$e(w.relatedTarget),Z=!s.config.ignoredFocusElements.some(function(ce){return ce.contains(S)});q&&Z&&(s.config.allowInput&&s.setDate(s._input.value,!1,s.config.altInput?s.config.altFormat:s.config.dateFormat),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0&&s.input.value!==""&&s.input.value!==void 0&&f(),s.close(),s.config&&s.config.mode==="range"&&s.selectedDates.length===1&&s.clear(!1))}}function me(w){if(!(!w||s.config.minDate&&w<s.config.minDate.getFullYear()||s.config.maxDate&&w>s.config.maxDate.getFullYear())){var S=w,P=s.currentYear!==S;s.currentYear=S||s.currentYear,s.config.maxDate&&s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth=i(s.config.maxDate.getMonth(),s.currentMonth):s.config.minDate&&s.currentYear===s.config.minDate.getFullYear()&&(s.currentMonth=o(s.config.minDate.getMonth(),s.currentMonth)),P&&(s.redraw(),je("onYearChange"),V())}}function ve(w,S){var P;S===void 0&&(S=!0);var $=s.parseDate(w,void 0,S);if(s.config.minDate&&$&&0>Yt($,s.config.minDate,S===void 0?!s.minDateHasTime:S)||s.config.maxDate&&$&&0<Yt($,s.config.maxDate,S===void 0?!s.maxDateHasTime:S))return!1;if(!s.config.enable&&s.config.disable.length===0)return!0;if($===void 0)return!1;for(var q=!!s.config.enable,Z=(P=s.config.enable)!==null&&P!==void 0?P:s.config.disable,ce=0,te=void 0;ce<Z.length;ce++){if(te=Z[ce],typeof te=="function"&&te($)||te instanceof Date&&$!==void 0&&te.getTime()===$.getTime())return q;if(typeof te=="string"){var fe=s.parseDate(te,void 0,!0);return fe&&fe.getTime()===$.getTime()?q:!q}if(typeof te=="object"&&$!==void 0&&te.from&&te.to&&$.getTime()>=te.from.getTime()&&$.getTime()<=te.to.getTime())return q}return!q}function He(w){return s.daysContainer!==void 0&&w.className.indexOf("hidden")===-1&&w.className.indexOf("flatpickr-disabled")===-1&&s.daysContainer.contains(w)}function at(w){var S=w.target===s._input,P=s._input.value.trimEnd()!==Rr();S&&P&&!(w.relatedTarget&&$e(w.relatedTarget))&&s.setDate(s._input.value,!0,w.target===s.altInput?s.config.altFormat:s.config.dateFormat)}function Je(w){var S=Ut(w),P=s.config.wrap?t.contains(S):S===s._input,$=s.config.allowInput,q=s.isOpen&&(!$||!P),Z=s.config.inline&&P&&!$;if(w.keyCode===13&&P){if($)return s.setDate(s._input.value,!0,S===s.altInput?s.config.altFormat:s.config.dateFormat),s.close(),S.blur();s.open()}else if($e(S)||q||Z){var ce=!!s.timeContainer&&s.timeContainer.contains(S);switch(w.keyCode){case 13:ce?(w.preventDefault(),f(),Yn()):ee(w);break;case 27:w.preventDefault(),Yn();break;case 8:case 46:P&&!s.config.allowInput&&(w.preventDefault(),s.clear());break;case 37:case 39:if(!ce&&!P){w.preventDefault();var te=c();if(s.daysContainer!==void 0&&($===!1||te&&He(te))){var fe=w.keyCode===39?1:-1;w.ctrlKey?(w.stopPropagation(),M(fe),L(B(1),0)):L(void 0,fe)}}else s.hourElement&&s.hourElement.focus();break;case 38:case 40:w.preventDefault();var ne=w.keyCode===40?1:-1;s.daysContainer&&S.$i!==void 0||S===s.input||S===s.altInput?w.ctrlKey?(w.stopPropagation(),me(s.currentYear-ne),L(B(1),0)):!ce&&L(void 0,7*ne):S===s.currentYearElement?me(s.currentYear-ne):s.config.enableTime&&(!ce&&s.hourElement&&s.hourElement.focus(),f(w),s._debouncedChange());break;case 9:if(ce){var re=[s.hourElement,s.minuteElement,s.secondElement,s.amPM].concat(s.pluginElements).filter(function(Ze){return Ze}),Ee=re.indexOf(S);if(Ee!==-1){var ct=re[Ee+(w.shiftKey?-1:1)];w.preventDefault(),(ct||s._input).focus()}}else!s.config.noCalendar&&s.daysContainer&&s.daysContainer.contains(S)&&w.shiftKey&&(w.preventDefault(),s._input.focus())}}if(s.amPM!==void 0&&S===s.amPM)switch(w.key){case s.l10n.amPM[0].charAt(0):case s.l10n.amPM[0].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[0],h(),bt();break;case s.l10n.amPM[1].charAt(0):case s.l10n.amPM[1].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[1],h(),bt()}(P||$e(S))&&je("onKeyDown",w)}function Pt(w,S){if(S===void 0&&(S="flatpickr-day"),!(s.selectedDates.length!==1||w&&(!w.classList.contains(S)||w.classList.contains("flatpickr-disabled")))){for(var P=w?w.dateObj.getTime():s.days.firstElementChild.dateObj.getTime(),$=s.parseDate(s.selectedDates[0],void 0,!0).getTime(),q=i(P,s.selectedDates[0].getTime()),Z=o(P,s.selectedDates[0].getTime()),ce=!1,te=0,fe=0,ne=q;ne<Z;ne+=dI.DAY)ve(new Date(ne),!0)||(ce=ce||ne>q&&ne<Z,ne<$&&(!te||ne>te)?te=ne:ne>$&&(!fe||ne<fe)&&(fe=ne));var re=Array.from(s.rContainer.querySelectorAll("*:nth-child(-n+"+s.config.showMonths+") > ."+S));re.forEach(function(Ee){var ct=Ee.dateObj,Ze=ct.getTime(),hn=0<te&&Ze<te||0<fe&&Ze>fe;return hn?(Ee.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach(function(Wt){Ee.classList.remove(Wt)})):void(ce&&!hn||(["startRange","inRange","endRange","notAllowed"].forEach(function(Wt){Ee.classList.remove(Wt)}),w!==void 0&&(w.classList.add(P<=s.selectedDates[0].getTime()?"startRange":"endRange"),$<P&&Ze===$?Ee.classList.add("startRange"):$>P&&Ze===$&&Ee.classList.add("endRange"),Ze>=te&&(fe===0||Ze<=fe)&&cI(Ze,$,P)&&Ee.classList.add("inRange"))))})}}function qn(){!s.isOpen||s.config.static||s.config.inline||pn()}function fo(w,S){if(S===void 0&&(S=s._positionElement),s.isMobile===!0){if(w){w.preventDefault();var P=Ut(w);P&&P.blur()}return s.mobileInput!==void 0&&(s.mobileInput.focus(),s.mobileInput.click()),void je("onOpen")}if(!(s._input.disabled||s.config.inline)){var $=s.isOpen;s.isOpen=!0,$||(s.calendarContainer.classList.add("open"),s._input.classList.add("active"),je("onOpen"),pn(S)),s.config.enableTime!==!0||s.config.noCalendar!==!0||s.config.allowInput!==!1||w!==void 0&&s.timeContainer.contains(w.relatedTarget)||setTimeout(function(){return s.hourElement.select()},50)}}function ar(w){return function(S){var P=s.config["_"+w+"Date"]=s.parseDate(S,s.config.dateFormat),$=s.config["_"+(w==="min"?"max":"min")+"Date"];P!==void 0&&(s[w==="min"?"minDateHasTime":"maxDateHasTime"]=0<P.getHours()||0<P.getMinutes()||0<P.getSeconds()),s.selectedDates&&(s.selectedDates=s.selectedDates.filter(function(q){return ve(q)}),!s.selectedDates.length&&w==="min"&&m(P),bt()),s.daysContainer&&(Nr(),P===void 0?s.currentYearElement.removeAttribute(w):s.currentYearElement[w]=P.getFullYear().toString(),s.currentYearElement.disabled=!!$&&P!==void 0&&$.getFullYear()===P.getFullYear())}}function ii(){var w=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],S=Ot(Ot({},JSON.parse(JSON.stringify(t.dataset||{}))),n),P={};s.config.parseDate=S.parseDate,s.config.formatDate=S.formatDate,Object.defineProperty(s.config,"enable",{get:function(){return s.config._enable},set:function(re){s.config._enable=ze(re)}}),Object.defineProperty(s.config,"disable",{get:function(){return s.config._disable},set:function(re){s.config._disable=ze(re)}});var $=S.mode==="time";if(!S.dateFormat&&(S.enableTime||$)){var q=vt.defaultConfig.dateFormat||jo.dateFormat;P.dateFormat=S.noCalendar||$?"H:i"+(S.enableSeconds?":S":""):q+" H:i"+(S.enableSeconds?":S":"")}if(S.altInput&&(S.enableTime||$)&&!S.altFormat){var Z=vt.defaultConfig.altFormat||jo.altFormat;P.altFormat=S.noCalendar||$?"h:i"+(S.enableSeconds?":S K":" K"):Z+(" h:i"+(S.enableSeconds?":S":"")+" K")}Object.defineProperty(s.config,"minDate",{get:function(){return s.config._minDate},set:ar("min")}),Object.defineProperty(s.config,"maxDate",{get:function(){return s.config._maxDate},set:ar("max")});var ce=function(re){return function(Ee){s.config[re==="min"?"_minTime":"_maxTime"]=s.parseDate(Ee,"H:i:S")}};Object.defineProperty(s.config,"minTime",{get:function(){return s.config._minTime},set:ce("min")}),Object.defineProperty(s.config,"maxTime",{get:function(){return s.config._maxTime},set:ce("max")}),S.mode==="time"&&(s.config.noCalendar=!0,s.config.enableTime=!0),Object.assign(s.config,P,S);for(var te=0;te<w.length;te++)s.config[w[te]]=s.config[w[te]]===!0||s.config[w[te]]==="true";Fs.filter(function(re){return s.config[re]!==void 0}).forEach(function(re){s.config[re]=Ls(s.config[re]||[]).map(u)}),s.isMobile=!s.config.disableMobile&&!s.config.inline&&s.config.mode==="single"&&!s.config.disable.length&&!s.config.enable&&!s.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var fe,te=0;te<s.config.plugins.length;te++)for(var ne in fe=s.config.plugins[te](s)||{},fe)-1<Fs.indexOf(ne)?s.config[ne]=Ls(fe[ne]).map(u).concat(s.config[ne]):typeof S[ne]>"u"&&(s.config[ne]=fe[ne]);S.altInputClass||(s.config.altInputClass=lr().className+" "+s.config.altInputClass),je("onParseConfig")}function lr(){return s.config.wrap?t.querySelector("[data-input]"):t}function sr(){typeof s.config.locale!="object"&&typeof vt.l10ns[s.config.locale]>"u"&&s.config.errorHandler(new Error("flatpickr: invalid locale "+s.config.locale)),s.l10n=Ot(Ot({},vt.l10ns.default),typeof s.config.locale=="object"?s.config.locale:s.config.locale==="default"?void 0:vt.l10ns[s.config.locale]),Br.D="("+s.l10n.weekdays.shorthand.join("|")+")",Br.l="("+s.l10n.weekdays.longhand.join("|")+")",Br.M="("+s.l10n.months.shorthand.join("|")+")",Br.F="("+s.l10n.months.longhand.join("|")+")",Br.K="("+s.l10n.amPM[0]+"|"+s.l10n.amPM[1]+"|"+s.l10n.amPM[0].toLowerCase()+"|"+s.l10n.amPM[1].toLowerCase()+")";var w=Ot(Ot({},n),JSON.parse(JSON.stringify(t.dataset||{})));w.time_24hr===void 0&&vt.defaultConfig.time_24hr===void 0&&(s.config.time_24hr=s.l10n.time_24hr),s.formatDate=uw(s),s.parseDate=Fu({config:s.config,l10n:s.l10n})}function pn(w){if(typeof s.config.position=="function")return void s.config.position(s,w);if(s.calendarContainer!==void 0){je("onPreCalendarPosition");var S=w||s._positionElement,P=Array.prototype.reduce.call(s.calendarContainer.children,function(ys,ws){return ys+ws.offsetHeight},0),$=s.calendarContainer.offsetWidth,q=s.config.position.split(" "),Z=q[0],ce=1<q.length?q[1]:null,te=S.getBoundingClientRect(),fe=window.innerHeight-te.bottom,ne=Z==="above"||Z!=="below"&&fe<P&&te.top>P,re=window.pageYOffset+te.top+(ne?-P-2:S.offsetHeight+2);if(Dt(s.calendarContainer,"arrowTop",!ne),Dt(s.calendarContainer,"arrowBottom",ne),!s.config.inline){var Ee=window.pageXOffset+te.left,ct=!1,Ze=!1;ce==="center"?(Ee-=($-te.width)/2,ct=!0):ce==="right"&&(Ee-=$-te.width,Ze=!0),Dt(s.calendarContainer,"arrowLeft",!ct&&!Ze),Dt(s.calendarContainer,"arrowCenter",ct),Dt(s.calendarContainer,"arrowRight",Ze);var hn=window.document.body.offsetWidth-(window.pageXOffset+te.right),Wt=Ee+$>window.document.body.offsetWidth,gs=hn+$>window.document.body.offsetWidth;if(Dt(s.calendarContainer,"rightMost",Wt),!s.config.static)if(s.calendarContainer.style.top=re+"px",!Wt)s.calendarContainer.style.left=Ee+"px",s.calendarContainer.style.right="auto";else if(!gs)s.calendarContainer.style.left="auto",s.calendarContainer.style.right=hn+"px";else{var Fr=ai();if(Fr===void 0)return;var hs=window.document.body.offsetWidth,ms=o(0,hs/2-$/2),bs=Fr.cssRules.length,vs="{left:"+te.left+"px;right:auto;}";Dt(s.calendarContainer,"rightMost",!1),Dt(s.calendarContainer,"centerMost",!0),Fr.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+vs,bs),s.calendarContainer.style.left=ms+"px",s.calendarContainer.style.right="auto"}}}}function ai(){for(var w,S=null,P=0;P<document.styleSheets.length;P++)if(w=document.styleSheets[P],w.cssRules){try{w.cssRules}catch{continue}S=w;break}return S??li()}function li(){var w=document.createElement("style");return document.head.appendChild(w),w.sheet}function Nr(){s.config.noCalendar||s.isMobile||(V(),Qn(),R())}function Yn(){s._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(s.close,0):s.close()}function ee(w){w.preventDefault(),w.stopPropagation();var S=function(re){return re.classList&&re.classList.contains("flatpickr-day")&&!re.classList.contains("flatpickr-disabled")&&!re.classList.contains("notAllowed")},P=cw(Ut(w),S);if(P!==void 0){var $=P,q=s.latestSelectedDateObj=new Date($.dateObj.getTime()),Z=(q.getMonth()<s.currentMonth||q.getMonth()>s.currentMonth+s.config.showMonths-1)&&s.config.mode!=="range";if(s.selectedDateElem=$,s.config.mode==="single")s.selectedDates=[q];else if(s.config.mode==="multiple"){var ce=Et(q);ce?s.selectedDates.splice(parseInt(ce),1):s.selectedDates.push(q)}else s.config.mode==="range"&&(s.selectedDates.length===2&&s.clear(!1,!1),s.latestSelectedDateObj=q,s.selectedDates.push(q),Yt(q,s.selectedDates[0],!0)!==0&&s.selectedDates.sort(function(re,Ee){return re.getTime()-Ee.getTime()}));if(h(),Z){var te=s.currentYear!==q.getFullYear();s.currentYear=q.getFullYear(),s.currentMonth=q.getMonth(),te&&(je("onYearChange"),V()),je("onMonthChange")}if(Qn(),R(),bt(),Z||s.config.mode==="range"||s.config.showMonths!==1?s.selectedDateElem!==void 0&&s.hourElement===void 0&&s.selectedDateElem&&s.selectedDateElem.focus():Q($),s.hourElement!==void 0&&s.hourElement!==void 0&&s.hourElement.focus(),s.config.closeOnSelect){var fe=s.config.mode==="single"&&!s.config.enableTime,ne=s.config.mode==="range"&&s.selectedDates.length===2&&!s.config.enableTime;(fe||ne)&&Yn()}k()}}function de(w,S){if(w!==null&&typeof w=="object")for(var P in Object.assign(s.config,w),w)Jn[P]!==void 0&&Jn[P].forEach(function($){return $()});else s.config[w]=S,Jn[w]===void 0?-1<Fs.indexOf(w)&&(s.config[w]=Ls(S)):Jn[w].forEach(function($){return $()});s.redraw(),bt(!0)}function Ie(w,S){var P=[];if(w instanceof Array)P=w.map(function($){return s.parseDate($,S)});else if(w instanceof Date||typeof w=="number")P=[s.parseDate(w,S)];else if(typeof w=="string")switch(s.config.mode){case"single":case"time":P=[s.parseDate(w,S)];break;case"multiple":P=w.split(s.config.conjunction).map(function($){return s.parseDate($,S)});break;case"range":P=w.split(s.l10n.rangeSeparator).map(function($){return s.parseDate($,S)})}else s.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(w)));s.selectedDates=s.config.allowInvalidPreload?P:P.filter(function($){return $ instanceof Date&&ve($,!1)}),s.config.mode==="range"&&s.selectedDates.sort(function($,q){return $.getTime()-q.getTime()})}function Ae(w,S,P){return S===void 0&&(S=!1),P===void 0&&(P=s.config.dateFormat),w!==0&&!w||w instanceof Array&&w.length===0?s.clear(S):(Ie(w,P),s.latestSelectedDateObj=s.selectedDates[s.selectedDates.length-1],s.redraw(),D(void 0,S),m(),s.selectedDates.length===0&&s.clear(!1),bt(S),void(S&&je("onChange")))}function ze(w){return w.slice().map(function(S){return typeof S=="string"||typeof S=="number"||S instanceof Date?s.parseDate(S,void 0,!0):S&&typeof S=="object"&&S.from&&S.to?{from:s.parseDate(S.from,void 0),to:s.parseDate(S.to,void 0)}:S}).filter(function(S){return S})}function It(){s.selectedDates=[],s.now=s.parseDate(s.config.now)||new Date;var w=s.config.defaultDate||((s.input.nodeName==="INPUT"||s.input.nodeName==="TEXTAREA")&&s.input.placeholder&&s.input.value===s.input.placeholder?null:s.input.value);w&&Ie(w,s.config.dateFormat),s._initialDate=0<s.selectedDates.length?s.selectedDates[0]:s.config.minDate&&s.config.minDate.getTime()>s.now.getTime()?s.config.minDate:s.config.maxDate&&s.config.maxDate.getTime()<s.now.getTime()?s.config.maxDate:s.now,s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth(),0<s.selectedDates.length&&(s.latestSelectedDateObj=s.selectedDates[0]),s.config.minTime!==void 0&&(s.config.minTime=s.parseDate(s.config.minTime,"H:i")),s.config.maxTime!==void 0&&(s.config.maxTime=s.parseDate(s.config.maxTime,"H:i")),s.minDateHasTime=!!s.config.minDate&&(0<s.config.minDate.getHours()||0<s.config.minDate.getMinutes()||0<s.config.minDate.getSeconds()),s.maxDateHasTime=!!s.config.maxDate&&(0<s.config.maxDate.getHours()||0<s.config.maxDate.getMinutes()||0<s.config.maxDate.getSeconds())}function gn(){return s.input=lr(),s.input?(s.input._type=s.input.type,s.input.type="text",s.input.classList.add("flatpickr-input"),s._input=s.input,s.config.altInput&&(s.altInput=Be(s.input.nodeName,s.config.altInputClass),s._input=s.altInput,s.altInput.placeholder=s.input.placeholder,s.altInput.disabled=s.input.disabled,s.altInput.required=s.input.required,s.altInput.tabIndex=s.input.tabIndex,s.altInput.type="text",s.input.setAttribute("type","hidden"),!s.config.static&&s.input.parentNode&&s.input.parentNode.insertBefore(s.altInput,s.input.nextSibling)),!s.config.allowInput&&s._input.setAttribute("readonly","readonly"),void Tt()):void s.config.errorHandler(new Error("Invalid input element specified"))}function Tt(){s._positionElement=s.config.positionElement||s._input}function Kn(){var w=s.config.enableTime?s.config.noCalendar?"time":"datetime-local":"date";s.mobileInput=Be("input",s.input.className+" flatpickr-mobile"),s.mobileInput.tabIndex=1,s.mobileInput.type=w,s.mobileInput.disabled=s.input.disabled,s.mobileInput.required=s.input.required,s.mobileInput.placeholder=s.input.placeholder,s.mobileFormatStr=w=="datetime-local"?"Y-m-d\\TH:i:S":w==="date"?"Y-m-d":"H:i:S",0<s.selectedDates.length&&(s.mobileInput.defaultValue=s.mobileInput.value=s.formatDate(s.selectedDates[0],s.mobileFormatStr)),s.config.minDate&&(s.mobileInput.min=s.formatDate(s.config.minDate,"Y-m-d")),s.config.maxDate&&(s.mobileInput.max=s.formatDate(s.config.maxDate,"Y-m-d")),s.input.getAttribute("step")&&(s.mobileInput.step=s.input.getAttribute("step")+""),s.input.type="hidden",s.altInput!==void 0&&(s.altInput.type="hidden");try{s.input.parentNode&&s.input.parentNode.insertBefore(s.mobileInput,s.input.nextSibling)}catch{}v(s.mobileInput,"change",function(S){s.setDate(Ut(S).value,!1,s.mobileFormatStr),je("onChange"),je("onClose")})}function Gn(w){return s.isOpen===!0?s.close():void s.open(w)}function je(w,S){if(s.config!==void 0){var P=s.config[w];if(P!==void 0&&0<P.length)for(var $=0;P[$]&&$<P.length;$++)P[$](s.selectedDates,s.input.value,s,S);w==="onChange"&&(s.input.dispatchEvent(Lt("change")),s.input.dispatchEvent(Lt("input")))}}function Lt(w){var S=document.createEvent("Event");return S.initEvent(w,!0,!0),S}function Et(w){for(var S,P=0;P<s.selectedDates.length;P++)if(S=s.selectedDates[P],S instanceof Date&&Yt(S,w)===0)return""+P;return!1}function ds(w){return!(s.config.mode!=="range"||2>s.selectedDates.length)&&0<=Yt(w,s.selectedDates[0])&&0>=Yt(w,s.selectedDates[1])}function Qn(){s.config.noCalendar||s.isMobile||!s.monthNav||(s.yearElements.forEach(function(w,S){var P=new Date(s.currentYear,s.currentMonth,1);P.setMonth(s.currentMonth+S),1<s.config.showMonths||s.config.monthSelectorType==="static"?s.monthElements[S].textContent=nl(P.getMonth(),s.config.shorthandCurrentMonth,s.l10n)+" ":s.monthsDropdownContainer.value=P.getMonth().toString(),w.value=P.getFullYear().toString()}),s._hidePrevMonthArrow=s.config.minDate!==void 0&&(s.currentYear===s.config.minDate.getFullYear()?s.currentMonth<=s.config.minDate.getMonth():s.currentYear<s.config.minDate.getFullYear()),s._hideNextMonthArrow=s.config.maxDate!==void 0&&(s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth+1>s.config.maxDate.getMonth():s.currentYear>s.config.maxDate.getFullYear()))}function Rr(w){var S=w||(s.config.altInput?s.config.altFormat:s.config.dateFormat);return s.selectedDates.map(function(P){return s.formatDate(P,S)}).filter(function(P,$,q){return s.config.mode!=="range"||s.config.enableTime||q.indexOf(P)===$}).join(s.config.mode==="range"?s.l10n.rangeSeparator:s.config.conjunction)}function bt(w){w===void 0&&(w=!0),s.mobileInput!==void 0&&s.mobileFormatStr&&(s.mobileInput.value=s.latestSelectedDateObj===void 0?"":s.formatDate(s.latestSelectedDateObj,s.mobileFormatStr)),s.input.value=Rr(s.config.dateFormat),s.altInput!==void 0&&(s.altInput.value=Rr(s.config.altFormat)),w!==!1&&je("onValueUpdate")}function fs(w){var S=Ut(w),P=s.prevMonthNav.contains(S),$=s.nextMonthNav.contains(S);P||$?M(P?-1:1):0<=s.yearElements.indexOf(S)?S.select():S.classList.contains("arrowUp")?s.changeYear(s.currentYear+1):S.classList.contains("arrowDown")&&s.changeYear(s.currentYear-1)}function ps(w){w.preventDefault();var S=w.type==="keydown",P=Ut(w),$=P;s.amPM!==void 0&&P===s.amPM&&(s.amPM.textContent=s.l10n.amPM[nn(s.amPM.textContent===s.l10n.amPM[0])]);var q=parseFloat($.getAttribute("min")),Z=parseFloat($.getAttribute("max")),ce=parseFloat($.getAttribute("step")),te=parseInt($.value,10),fe=w.delta||(S?w.which===38?1:-1:0),ne=te+ce*fe;if(typeof $.value<"u"&&$.value.length===2){var re=$===s.hourElement,Ee=$===s.minuteElement;ne<q?(ne=Z+ne+nn(!re)+(nn(re)&&nn(!s.amPM)),Ee&&T(void 0,-1,s.hourElement)):ne>Z&&(ne=$===s.hourElement?ne-Z-nn(!s.amPM):q,Ee&&T(void 0,1,s.hourElement)),s.amPM&&re&&(ce===1?ne+te===23:r(ne-te)>ce)&&(s.amPM.textContent=s.l10n.amPM[nn(s.amPM.textContent===s.l10n.amPM[0])]),$.value=$t(ne)}}var s={config:Ot(Ot({},jo),vt.defaultConfig),l10n:Ti};s.parseDate=Fu({config:s.config,l10n:s.l10n}),s._handlers=[],s.pluginElements=[],s.loadedPlugins=[],s._bind=v,s._setHoursFromDate=m,s._positionCalendar=pn,s.changeMonth=M,s.changeYear=me,s.clear=ie,s.close=ye,s.onMouseOver=Pt,s._createElement=Be,s.createDay=A,s.destroy=Pe,s.isEnabled=ve,s.jumpToDate=D,s.updateValue=bt,s.open=fo,s.redraw=Nr,s.set=de,s.setDate=Ae,s.toggle=Gn;var Jn={locale:[sr,ae],showMonths:[U,d,N],minDate:[D],maxDate:[D],positionElement:[Tt],clickOpens:[function(){s.config.clickOpens===!0?(v(s._input,"focus",s.open),v(s._input,"click",s.open)):(s._input.removeEventListener("focus",s.open),s._input.removeEventListener("click",s.open))}]};return l(),s}function Eo(t,n){for(var r,o=Array.prototype.slice.call(t).filter(function(l){return l instanceof HTMLElement}),i=[],a=0;a<o.length;a++){r=o[a];try{if(r.getAttribute("data-fp-omit")!==null)continue;r._flatpickr!==void 0&&(r._flatpickr.destroy(),r._flatpickr=void 0),r._flatpickr=pI(r,n||{}),i.push(r._flatpickr)}catch(l){console.error(l)}}return i.length===1?i[0]:i}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return Eo(this,t)},HTMLElement.prototype.flatpickr=function(t){return Eo([this],t)});var vt=function(t,n){return typeof t=="string"?Eo(window.document.querySelectorAll(t),n):t instanceof Node?Eo([t],n):Eo(t,n)};vt.defaultConfig={},vt.l10ns={en:Ot({},Ti),default:Ot({},Ti)},vt.localize=function(t){vt.l10ns.default=Ot(Ot({},vt.l10ns.default),t)},vt.setDefaults=function(t){vt.defaultConfig=Ot(Ot({},vt.defaultConfig),t)},vt.parseDate=Fu({}),vt.formatDate=uw({}),vt.compareDates=Yt,typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return Eo(this,t)}),Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))},typeof window<"u"&&(window.flatpickr=vt);const ci=x.oneOfType([x.string,x.array,x.object,x.number]);x.bool,x.bool,x.string,x.string,x.string,x.string,x.number,x.number,x.array,x.bool,x.bool,x.bool,x.node,x.node,x.number,x.string,x.bool,x.string,x.oneOfType([x.string,x.object]),x.number,x.oneOf(["single","multiple","range"]),x.oneOf(["static","dropdown"]),x.string,x.bool,x.func,x.func,x.func,x.func,x.func,x.func,x.func,x.func,x.func,x.string,x.bool,x.bool,x.number,x.node,x.bool,x.bool,x.bool,x.oneOf(["full","auto"]),x.string;x.string,x.string,x.string,x.node,x.bool,x.bool,x.bool,x.bool,x.bool,x.func,x.func,x.string;x.oneOfType([x.string,x.number]),x.oneOfType([x.string,x.number]),x.bool,x.string;x.string,x.oneOfType([x.string,x.number]),x.string,x.string,x.bool,x.bool,x.bool,x.bool,x.bool,x.bool,x.string,x.string,x.func,x.func,x.func,x.oneOf(["text","email","password","tel","url","number"]),x.string,x.node,x.node,x.node,x.oneOf(["full","auto"]),x.string;x.string,x.arrayOf(x.object),x.string,x.func,x.string,x.string,x.string,x.func,x.func,x.func,x.bool,x.string,x.func,x.bool;x.string,x.string.isRequired,x.string,x.string.isRequired,x.string,x.string,x.func;x.node,x.object,x.string,x.func,x.string,x.string,x.func,x.func,x.func,x.string,x.bool,x.bool,x.string,x.any;x.string,x.string,x.node;x.node,x.string;x.string,x.string,x.node;x.bool,x.node,x.string;x.node,x.string;x.number,x.number,x.bool,x.string,x.node;const dw=t=>{let{children:n=null,className:r,variant:o="default",disabled:i=!1,...a}=t;return O.createElement(Nf,he({className:`juno-input-group juno-input-group-${o} ${i?"juno-input-group-disabled":""} ${r}`},a),O.Children.map(n,l=>{const c=l.props.variant||o,u=l.props.disabled||i;return O.cloneElement(l,{variant:c,disabled:u})}))};dw.propTypes={children:x.node,className:x.string,variant:x.oneOf(["default","primary","primary-danger","subdued"]),disabled:x.bool};var gI=function(t,n){return`
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
        `)},hI=`
    jn-border-l-4
    jn-border-theme-introbox
`,mI=function(t,n){return`
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
    `)},bI=`
    jn-font-bold
`,vI=function(t){var n=t.title,r=n===void 0?null:n,o=t.text,i=o===void 0?null:o,a=t.variant,l=a===void 0?"default":a,c=t.heroImage,u=c===void 0?null:c,d=t.className,f=d===void 0?"":d,g=t.children,b=it(t,["title","text","variant","heroImage","className","children"]),h=O.useMemo(function(){return u&&l==="hero"},[l,u]);return O.createElement("div",ue({className:"juno-introbox ".concat(gI(l,u)," ").concat(f),style:h?{backgroundImage:"".concat(u)}:{}},b),O.createElement("div",{className:"".concat(hI)}),O.createElement("div",{className:"".concat(mI(l,u))},r?O.createElement("h1",{className:"".concat(bI)},r):"",g||O.createElement("p",null,i)))};x.string,x.string,x.string;O.createContext({});p.createContext();x.node,x.oneOf(["small","normal"]),x.string;x.string,x.bool,x.oneOf(_n),x.string,x.node,x.string,x.func;x.string,x.node,x.string;x.string,x.string,x.oneOf(["info","warning","danger","error","success"]),x.bool,x.bool,x.number,x.func,x.string,x.node;const gm=`
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
`,hm=`
  jn-text-sm
  jn-leading-5
`,mm=`
  jn-text-base
  jn-leading-6
`,yI=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,wI=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,xI=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,jI=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,bm=(t,n)=>t==="small"?n==="subdued"?`${wI}`:`${yI}`:n==="subdued"?`${jI}`:`${xI}`,EI=`
  jn-mr-2
`,kI=`
  jn-mr-2
`,OI=t=>t==="small"?`${EI}`:`${kI}`,vm=t=>t?"in-progress":"",SI=t=>t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":"",ym=O.forwardRef((t,n)=>{let{label:r,title:o=null,variant:i,size:a="default",disabled:l=null,href:c=null,icon:u=null,className:d="",onClick:f,children:g,progress:b=!1,progressLabel:h="",...m}=t;const y=i||"default",E=o||r||"",v=b?O.createElement(Gf,{size:a==="small"?"1.125rem":"1.5rem",color:`${SI(y)}`}):u?O.createElement(sn,{icon:u,title:E,className:`juno-button-icon ${r||g?OI(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,k=b&&h?h:r||g,C=O.createElement("button",he({type:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${gm} 
          ${a==="small"?hm:mm} 
          ${bm(a,i)}
          ${vm(b)} 
          ${d}`,disabled:l,onClick:I=>{f&&f(I)},title:E,ref:n},m),v,k),D=O.createElement("a",he({href:c,role:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${gm} 
          ${a==="small"?hm:mm}
          ${bm(a,i)}
          ${vm(b)} 
          ${d}
        `,disabled:l,onClick:f,title:E,ref:n},m),v,k);return c?D:C});ym.displayName="Button",ym.propTypes={children:x.any,variant:x.oneOf(["primary","primary-danger","default","subdued"]),size:x.oneOf(["small","default"]),disabled:x.bool,href:x.string,label:x.string,title:x.string,icon:x.oneOf(_n),className:x.string,onClick:x.func,progress:x.bool,progressLabel:x.string};x.string,x.node;x.node,x.string,x.string,x.oneOf(_n),x.oneOf(_n),x.string,x.func,x.func;var fw=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],rl=fw.join(","),pw=typeof Element>"u",ro=pw?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ol=!pw&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t==null?void 0:t.ownerDocument},il=function t(n,r){var o;r===void 0&&(r=!0);var i=n==null||(o=n.getAttribute)===null||o===void 0?void 0:o.call(n,"inert"),a=i===""||i==="true"||r&&n&&t(n.parentNode);return a},CI=function(n){var r,o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"contenteditable");return o===""||o==="true"},gw=function(n,r,o){if(il(n))return[];var i=Array.prototype.slice.apply(n.querySelectorAll(rl));return r&&ro.call(n,rl)&&i.unshift(n),i=i.filter(o),i},hw=function t(n,r,o){for(var i=[],a=Array.from(n);a.length;){var l=a.shift();if(!il(l,!1))if(l.tagName==="SLOT"){var c=l.assignedElements(),u=c.length?c:l.children,d=t(u,!0,o);o.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{var f=ro.call(l,rl);f&&o.filter(l)&&(r||!n.includes(l))&&i.push(l);var g=l.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(l),b=!il(g,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(g&&b){var h=t(g===!0?l.children:g.children,!0,o);o.flatten?i.push.apply(i,h):i.push({scopeParent:l,candidates:h})}else a.unshift.apply(a,l.children)}}return i},mw=function(n){return!isNaN(parseInt(n.getAttribute("tabindex"),10))},pr=function(n){if(!n)throw new Error("No node provided");return 0>n.tabIndex&&(/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||CI(n))&&!mw(n)?0:n.tabIndex},PI=function(n,r){var o=pr(n);return 0>o&&r&&!mw(n)?0:o},II=function(n,r){return n.tabIndex===r.tabIndex?n.documentOrder-r.documentOrder:n.tabIndex-r.tabIndex},bw=function(n){return n.tagName==="INPUT"},TI=function(n){return bw(n)&&n.type==="hidden"},DI=function(n){var r=n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(o){return o.tagName==="SUMMARY"});return r},MI=function(n,r){for(var o=0;o<n.length;o++)if(n[o].checked&&n[o].form===r)return n[o]},NI=function(n){if(!n.name)return!0;var r,o=n.form||ol(n),i=function(c){return o.querySelectorAll('input[type="radio"][name="'+c+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=i(window.CSS.escape(n.name));else try{r=i(n.name)}catch(l){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",l.message),!1}var a=MI(r,n.form);return!a||a===n},RI=function(n){return bw(n)&&n.type==="radio"},FI=function(n){return RI(n)&&!NI(n)},LI=function(n){var r,o=n&&ol(n),i=(r=o)===null||r===void 0?void 0:r.host,a=!1;if(o&&o!==n){var l,c,u;for(a=!!((l=i)!==null&&l!==void 0&&(c=l.ownerDocument)!==null&&c!==void 0&&c.contains(i)||n!=null&&(u=n.ownerDocument)!==null&&u!==void 0&&u.contains(n));!a&&i;){var d,f,g;o=ol(i),i=(d=o)===null||d===void 0?void 0:d.host,a=!!((f=i)!==null&&f!==void 0&&(g=f.ownerDocument)!==null&&g!==void 0&&g.contains(i))}}return a},wm=function(n){var r=n.getBoundingClientRect(),o=r.width,i=r.height;return o===0&&i===0},AI=function(n,r){var o=r.displayCheck,i=r.getShadowRoot;if(getComputedStyle(n).visibility==="hidden")return!0;var a=ro.call(n,"details>summary:first-of-type"),l=a?n.parentElement:n;if(ro.call(l,"details:not([open]) *"))return!0;if(!o||o==="full"||o==="legacy-full"){if(typeof i=="function"){for(var c=n;n;){var u=n.parentElement,d=ol(n);if(u&&!u.shadowRoot&&i(u)===!0)return wm(n);n=n.assignedSlot?n.assignedSlot:u||d===n.ownerDocument?u:d.host}n=c}if(LI(n))return!n.getClientRects().length;if(o!=="legacy-full")return!0}else if(o==="non-zero-area")return wm(n);return!1},_I=function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var r=n.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var o,i=0;i<r.children.length;i++)if(o=r.children.item(i),o.tagName==="LEGEND")return!!ro.call(r,"fieldset[disabled] *")||!o.contains(n);return!0}r=r.parentElement}return!1},al=function(n,r){return!(r.disabled||il(r)||TI(r)||AI(r,n)||DI(r)||_I(r))},Lu=function(n,r){return!(FI(r)||0>pr(r)||!al(n,r))},$I=function(n){var r=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(r)||0<=r)},zI=function t(n){var r=[],o=[];return n.forEach(function(i,a){var l=!!i.scopeParent,c=l?i.scopeParent:i,u=PI(c,l),d=l?t(i.candidates):c;u===0?l?r.push.apply(r,d):r.push(c):o.push({documentOrder:a,tabIndex:u,item:i,isScope:l,content:d})}),o.sort(II).reduce(function(i,a){return a.isScope?i.push.apply(i,a.content):i.push(a.content),i},[]).concat(r)},vw=function(n,r){r=r||{};var o;return o=r.getShadowRoot?hw([n],r.includeContainer,{filter:Lu.bind(null,r),flatten:!1,getShadowRoot:r.getShadowRoot,shadowRootFilter:$I}):gw(n,r.includeContainer,Lu.bind(null,r)),zI(o)},yw=function(n,r){r=r||{};var o;return o=r.getShadowRoot?hw([n],r.includeContainer,{filter:al.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):gw(n,r.includeContainer,al.bind(null,r)),o},$r=function(n,r){if(r=r||{},!n)throw new Error("No node provided");return ro.call(n,rl)!==!1&&Lu(r,n)},HI=fw.concat("iframe").join(","),Aa=function(n,r){if(r=r||{},!n)throw new Error("No node provided");return ro.call(n,HI)!==!1&&al(r,n)},BI=Object.freeze({__proto__:null,focusable:yw,getTabIndex:pr,isFocusable:Aa,isTabbable:$r,tabbable:vw});function VI(t,n,r){return(n=UI(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function xm(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function jm(t){for(var n,r=1;r<arguments.length;r++)n=arguments[r]==null?{}:arguments[r],r%2?xm(Object(n),!0).forEach(function(o){VI(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xm(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))});return t}function WI(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function UI(t){var n=WI(t,"string");return typeof n=="symbol"?n:n+""}var Em={activateTrap:function(n,r){if(0<n.length){var o=n[n.length-1];o!==r&&o.pause()}var i=n.indexOf(r);i===-1||n.splice(i,1),n.push(r)},deactivateTrap:function(n,r){var o=n.indexOf(r);o!==-1&&n.splice(o,1),0<n.length&&n[n.length-1].unpause()}},qI=function(n){return n.tagName&&n.tagName.toLowerCase()==="input"&&typeof n.select=="function"},YI=function(n){return(n==null?void 0:n.key)==="Escape"||(n==null?void 0:n.key)==="Esc"||(n==null?void 0:n.keyCode)===27},Ei=function(n){return(n==null?void 0:n.key)==="Tab"||(n==null?void 0:n.keyCode)===9},KI=function(n){return Ei(n)&&!n.shiftKey},GI=function(n){return Ei(n)&&n.shiftKey},km=function(n){return setTimeout(n,0)},Om=function(n,r){var o=-1;return n.every(function(i,a){return!r(i)||(o=a,!1)}),o},ui=function(n){for(var r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return typeof n=="function"?n.apply(void 0,o):n},ba=function(n){return n.target.shadowRoot&&typeof n.composedPath=="function"?n.composedPath()[0]:n.target},QI=[],JI=function(n,r){var o,i=(r==null?void 0:r.document)||document,a=(r==null?void 0:r.trapStack)||QI,l=jm({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:KI,isKeyBackward:GI},r),c={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},u=function(_,R,V){return _&&_[R]!==void 0?_[R]:l[V||R]},d=function(_,R){var V=typeof(R==null?void 0:R.composedPath)=="function"?R.composedPath():void 0;return c.containerGroups.findIndex(function(H){var U=H.container,J=H.tabbableNodes;return U.contains(_)||(V==null?void 0:V.includes(U))||J.find(function(X){return X===_})})},f=function(_){var R=l[_];if(typeof R=="function"){for(var V=arguments.length,H=Array(1<V?V-1:0),U=1;U<V;U++)H[U-1]=arguments[U];R=R.apply(void 0,H)}if(R===!0&&(R=void 0),!R){if(R===void 0||R===!1)return R;throw new Error("`".concat(_,"` was specified but was not a node, or did not return a node"))}var J=R;if(typeof R=="string"&&(J=i.querySelector(R),!J))throw new Error("`".concat(_,"` as selector refers to no known node"));return J},g=function(){var _=f("initialFocus");if(_===!1)return!1;if(_===void 0||!Aa(_,l.tabbableOptions))if(0<=d(i.activeElement))_=i.activeElement;else{var R=c.tabbableGroups[0],V=R&&R.firstTabbableNode;_=V||f("fallbackFocus")}if(!_)throw new Error("Your focus-trap needs to have at least one focusable element");return _},b=function(){if(c.containerGroups=c.containers.map(function(_){var R=vw(_,l.tabbableOptions),V=yw(_,l.tabbableOptions),H=0<R.length?R[0]:void 0,U=0<R.length?R[R.length-1]:void 0,J=V.find(function(ae){return $r(ae)}),X=V.slice().reverse().find(function(ae){return $r(ae)}),N=!!R.find(function(ae){return 0<pr(ae)});return{container:_,tabbableNodes:R,focusableNodes:V,posTabIndexesFound:N,firstTabbableNode:H,lastTabbableNode:U,firstDomTabbableNode:J,lastDomTabbableNode:X,nextTabbableNode:function(se){var M=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],ie=R.indexOf(se);return 0>ie?M?V.slice(V.indexOf(se)+1).find(function(ye){return $r(ye)}):V.slice(0,V.indexOf(se)).reverse().find(function(ye){return $r(ye)}):R[ie+(M?1:-1)]}}}),c.tabbableGroups=c.containerGroups.filter(function(_){return 0<_.tabbableNodes.length}),0>=c.tabbableGroups.length&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(c.containerGroups.find(function(_){return _.posTabIndexesFound})&&1<c.containerGroups.length)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},h=function(_){var R=_.activeElement;return R?R.shadowRoot&&R.shadowRoot.activeElement!==null?h(R.shadowRoot):R:void 0},m=function(_){return _===!1||_===h(document)?void 0:_&&_.focus?(_.focus({preventScroll:!!l.preventScroll}),c.mostRecentlyFocusedNode=_,void(qI(_)&&_.select())):void m(g())},y=function(_){var R=f("setReturnFocus",_);return R||R!==!1&&_},E=function(_){var R=_.target,V=_.event,H=_.isBackward,U=H!==void 0&&H;R=R||ba(V),b();var J=null;if(0<c.tabbableGroups.length){var X=d(R,V),N=0<=X?c.containerGroups[X]:void 0;if(0>X)J=U?c.tabbableGroups[c.tabbableGroups.length-1].lastTabbableNode:c.tabbableGroups[0].firstTabbableNode;else if(U){var ae=Om(c.tabbableGroups,function($e){var oe=$e.firstTabbableNode;return R===oe});if(0>ae&&(N.container===R||Aa(R,l.tabbableOptions)&&!$r(R,l.tabbableOptions)&&!N.nextTabbableNode(R,!1))&&(ae=X),0<=ae){var se=ae===0?c.tabbableGroups.length-1:ae-1,M=c.tabbableGroups[se];J=0<=pr(R)?M.lastTabbableNode:M.lastDomTabbableNode}else Ei(V)||(J=N.nextTabbableNode(R,!1))}else{var ie=Om(c.tabbableGroups,function($e){var oe=$e.lastTabbableNode;return R===oe});if(0>ie&&(N.container===R||Aa(R,l.tabbableOptions)&&!$r(R,l.tabbableOptions)&&!N.nextTabbableNode(R))&&(ie=X),0<=ie){var ye=ie===c.tabbableGroups.length-1?0:ie+1,Pe=c.tabbableGroups[ye];J=0<=pr(R)?Pe.firstTabbableNode:Pe.firstDomTabbableNode}else Ei(V)||(J=N.nextTabbableNode(R))}}else J=f("fallbackFocus");return J},v=function(_){var R=ba(_);return 0<=d(R,_)?void 0:ui(l.clickOutsideDeactivates,_)?void o.deactivate({returnFocus:l.returnFocusOnDeactivate}):void(ui(l.allowOutsideClick,_)||_.preventDefault())},k=function(_){var R=ba(_),V=0<=d(R,_);if(V||R instanceof Document)V&&(c.mostRecentlyFocusedNode=R);else{_.stopImmediatePropagation();var H,U=!0;if(!c.mostRecentlyFocusedNode)U=!1;else if(0<pr(c.mostRecentlyFocusedNode)){var J=d(c.mostRecentlyFocusedNode),X=c.containerGroups[J].tabbableNodes;if(0<X.length){var N=X.findIndex(function(ae){return ae===c.mostRecentlyFocusedNode});0<=N&&(l.isKeyForward(c.recentNavEvent)?N+1<X.length&&(H=X[N+1],U=!1):0<=N-1&&(H=X[N-1],U=!1))}}else c.containerGroups.some(function(ae){return ae.tabbableNodes.some(function(se){return 0<pr(se)})})||(U=!1);U&&(H=E({target:c.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(c.recentNavEvent)})),m(H||c.mostRecentlyFocusedNode||g())}c.recentNavEvent=void 0},C=function(_){var R=1<arguments.length&&arguments[1]!==void 0&&arguments[1];c.recentNavEvent=_;var V=E({event:_,isBackward:R});V&&(Ei(_)&&_.preventDefault(),m(V))},D=function(_){(l.isKeyForward(_)||l.isKeyBackward(_))&&C(_,l.isKeyBackward(_))},I=function(_){YI(_)&&ui(l.escapeDeactivates,_)!==!1&&(_.preventDefault(),o.deactivate())},T=function(_){var R=ba(_);0<=d(R,_)||ui(l.clickOutsideDeactivates,_)||ui(l.allowOutsideClick,_)||(_.preventDefault(),_.stopImmediatePropagation())},z=function(){if(c.active)return Em.activateTrap(a,o),c.delayInitialFocusTimer=l.delayInitialFocus?km(function(){m(g())}):m(g()),i.addEventListener("focusin",k,!0),i.addEventListener("mousedown",v,{capture:!0,passive:!1}),i.addEventListener("touchstart",v,{capture:!0,passive:!1}),i.addEventListener("click",T,{capture:!0,passive:!1}),i.addEventListener("keydown",D,{capture:!0,passive:!1}),i.addEventListener("keydown",I),o},A=function(){if(c.active)return i.removeEventListener("focusin",k,!0),i.removeEventListener("mousedown",v,!0),i.removeEventListener("touchstart",v,!0),i.removeEventListener("click",T,!0),i.removeEventListener("keydown",D,!0),i.removeEventListener("keydown",I),o},Q=function(_){var R=_.some(function(V){var H=Array.from(V.removedNodes);return H.some(function(U){return U===c.mostRecentlyFocusedNode})});R&&m(g())},B=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Q):void 0,F=function(){B&&(B.disconnect(),c.active&&!c.paused&&c.containers.map(function(_){B.observe(_,{subtree:!0,childList:!0})}))};return o={get active(){return c.active},get paused(){return c.paused},activate:function(_){if(c.active)return this;var R=u(_,"onActivate"),V=u(_,"onPostActivate"),H=u(_,"checkCanFocusTrap");H||b(),c.active=!0,c.paused=!1,c.nodeFocusedBeforeActivation=i.activeElement,R==null||R();var U=function(){H&&b(),z(),F(),V==null||V()};return H?(H(c.containers.concat()).then(U,U),this):(U(),this)},deactivate:function(_){if(!c.active)return this;var R=jm({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},_);clearTimeout(c.delayInitialFocusTimer),c.delayInitialFocusTimer=void 0,A(),c.active=!1,c.paused=!1,F(),Em.deactivateTrap(a,o);var V=u(R,"onDeactivate"),H=u(R,"onPostDeactivate"),U=u(R,"checkCanReturnFocus"),J=u(R,"returnFocus","returnFocusOnDeactivate");V==null||V();var X=function(){km(function(){J&&m(y(c.nodeFocusedBeforeActivation)),H==null||H()})};return J&&U?(U(y(c.nodeFocusedBeforeActivation)).then(X,X),this):(X(),this)},pause:function(_){if(c.paused||!c.active)return this;var R=u(_,"onPause"),V=u(_,"onPostPause");return c.paused=!0,R==null||R(),A(),F(),V==null||V(),this},unpause:function(_){if(!c.paused||!c.active)return this;var R=u(_,"onUnpause"),V=u(_,"onPostUnpause");return c.paused=!1,R==null||R(),b(),z(),F(),V==null||V(),this},updateContainerElements:function(_){var R=[].concat(_).filter(Boolean);return c.containers=R.map(function(V){return typeof V=="string"?i.querySelector(V):V}),c.active&&b(),F(),this}},o.updateContainerElements(n),o},ZI=Object.freeze({__proto__:null,createFocusTrap:JI}),XI=dy(ZI),eT=dy(BI);function Yo(t){"@babel/helpers - typeof";return Yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yo(t)}function tT(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function nT(t,n){for(var r,o=0;o<n.length;o++)r=n[o],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,xw(r.key),r)}function rT(t,n,r){return n&&nT(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function oT(t,n,r){return n=ll(n),iT(t,ww()?Reflect.construct(n,r||[],ll(t).constructor):n.apply(t,r))}function iT(t,n){if(n&&(Yo(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aT(t)}function aT(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ww(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ww=function(){return!!t})()}function ll(t){return ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ll(t)}function lT(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Au(t,n)}function Au(t,n){return Au=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Au(t,n)}function sT(t,n,r){return(n=xw(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function xw(t){var n=cT(t,"string");return Yo(n)=="symbol"?n:n+""}function cT(t,n){if(Yo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n);if(Yo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""}var va=O,Se=x,uT=XI,dT=uT.createFocusTrap,fT=eT,pT=fT.isFocusable,_u=function(t){function n(r){var o;tT(this,n),o=oT(this,n,[r]),sT(o,"getNodeForOption",function(l){var c,u=(c=this.internalOptions[l])!==null&&c!==void 0?c:this.originalOptions[l];if(typeof u=="function"){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];u=u.apply(void 0,f)}if(u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(l,"` was specified but was not a node, or did not return a node"))}var b=u;if(typeof u=="string"){var h;if(b=(h=this.getDocument())===null||h===void 0?void 0:h.querySelector(u),!b)throw new Error("`".concat(l,"` as selector refers to no known node"))}return b}),o.handleDeactivate=o.handleDeactivate.bind(o),o.handlePostDeactivate=o.handlePostDeactivate.bind(o),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(o),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=r.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a=="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){o.originalOptions[a]=i[a];continue}o.internalOptions[a]=i[a]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return lT(n,t),rT(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document>"u"?void 0:document)}},{key:"getReturnFocusNode",value:function(){var o=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return o||o!==!1&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var o=this.getDocument();o&&(this.previouslyFocusedElement=o.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(o){var i=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,o):this.originalOptions.clickOutsideDeactivates;return i&&(this.outsideClick={target:o.target,allowDeactivation:i}),i}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var o=this,i=function(){var l=o.getReturnFocusNode(),c=!!(o.originalOptions.returnFocusOnDeactivate&&l!==null&&l!==void 0&&l.focus&&(!o.outsideClick||o.outsideClick.allowDeactivation&&!pT(o.outsideClick.target,o.internalOptions.tabbableOptions))),u=o.internalOptions.preventScroll,d=u!==void 0&&u;c&&l.focus({preventScroll:d}),o.originalOptions.onPostDeactivate&&o.originalOptions.onPostDeactivate.call(null),o.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(i,i):i()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var o=this.focusTrapElements.some(Boolean);o&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(o){if(this.focusTrap){o.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var i=!o.active&&this.props.active,a=o.active&&!this.props.active,l=!o.paused&&this.props.paused,c=o.paused&&!this.props.paused;if(i&&(this.updatePreviousElement(),this.focusTrap.activate()),a)return void this.deactivateTrap();l&&this.focusTrap.pause(),c&&this.focusTrap.unpause()}else o.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var o=this,i=this.props.children?va.Children.only(this.props.children):void 0;if(i){if(i.type&&i.type===va.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var a=function(u){var d=o.props.containerElements;i&&(typeof i.ref=="function"?i.ref(u):i.ref&&(i.ref.current=u)),o.focusTrapElements=d||[u]},l=va.cloneElement(i,{ref:a});return l}return null}}])}(va.Component),di=typeof Element>"u"?Function:Element;_u.propTypes={active:Se.bool,paused:Se.bool,focusTrapOptions:Se.shape({document:Se.object,onActivate:Se.func,onPostActivate:Se.func,checkCanFocusTrap:Se.func,onPause:Se.func,onPostPause:Se.func,onUnpause:Se.func,onPostUnpause:Se.func,onDeactivate:Se.func,onPostDeactivate:Se.func,checkCanReturnFocus:Se.func,initialFocus:Se.oneOfType([Se.instanceOf(di),Se.string,Se.bool,Se.func]),fallbackFocus:Se.oneOfType([Se.instanceOf(di),Se.string,Se.func]),escapeDeactivates:Se.oneOfType([Se.bool,Se.func]),clickOutsideDeactivates:Se.oneOfType([Se.bool,Se.func]),returnFocusOnDeactivate:Se.bool,setReturnFocus:Se.oneOfType([Se.instanceOf(di),Se.string,Se.bool,Se.func]),allowOutsideClick:Se.oneOfType([Se.bool,Se.func]),preventScroll:Se.bool,tabbableOptions:Se.shape({displayCheck:Se.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:Se.oneOfType([Se.bool,Se.func])}),trapStack:Se.array,isKeyForward:Se.func,isKeyBackward:Se.func}),containerElements:Se.arrayOf(Se.instanceOf(di)),children:Se.oneOfType([Se.element,Se.instanceOf(di)])},_u.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:dT};var gT=_u;uy(gT);x.string,x.string,x.string,x.oneOf(["small","large"]),x.string,x.string,x.oneOf(_n),x.oneOf(_n),x.bool,x.node,x.element,x.bool,x.bool,x.string,x.func,x.func,x.bool,x.bool,x.oneOfType([x.element,x.string]);x.string,x.bool,x.string,x.node;const hT=(t,n,r)=>`
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
		`.replace(/\n/g," ").replace(/\s+/g," "),mT=`
  jn-overflow-auto
`,bT=`
  jn-flex
  jn-items-center
  jn-py-4
  jn-px-8
`,vT=`
  jn-text-theme-high
  jn-text-lg
  jn-font-bold
`,jw=t=>{let{heading:n="",size:r,className:o="",opened:i=!1,closeable:a=!0,onClose:l,children:c,...u}=t;const[d,f]=p.useState(i),[g,b]=p.useState(a),[h,m]=p.useState(!1);p.useEffect(()=>{f(i)},[i]),p.useEffect(()=>{b(a)},[a]);const y=O.useRef(null);return O.useEffect(()=>()=>clearTimeout(y.current),[]),p.useEffect(()=>{d||(m(!0),clearTimeout(y.current),y.current=setTimeout(()=>m(!1),500))},[d]),O.createElement("div",he({className:`juno-panel ${hT(d,h,r)} ${o}`,role:"dialog","aria-labelledby":"juno-panel-title"},u),O.createElement("div",{className:`juno-panel-header ${bT}`},O.createElement("div",{className:`juno-panel-title ${vT}`,id:"juno-panel-title"},n),g&&O.createElement(sn,{icon:"close",onClick:E=>{f(!1),l&&l(E)},className:"juno-panel-close jn-ml-auto"})),O.createElement("div",{className:`juno-panel-content-wrapper ${mT}`},c))};jw.propTypes={heading:x.node,size:x.oneOf(["default","large"]),opened:x.bool,closeable:x.bool,onClose:x.func,className:x.string,children:x.node};const yT=`
  
`,wT=`
  jn-px-8
  jn-py-4
`,Ew=t=>{let{className:n="",footer:r,children:o,...i}=t;return O.createElement("div",he({className:`juno-panel-body ${yT}  ${n}`},i),O.createElement("div",{className:`juno-panel-body-content ${wT}`},o),r)};Ew.propTypes={className:x.string,children:x.any,footer:x.element};x.string,x.any;var xT=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(xT||{}),jT=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(jT||{}),ET=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ET||{}),kT=(t=>(t[t.OpenListbox=0]="OpenListbox",t[t.CloseListbox=1]="CloseListbox",t[t.GoToOption=2]="GoToOption",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterOption=5]="RegisterOption",t[t.UnregisterOption=6]="UnregisterOption",t[t.RegisterLabel=7]="RegisterLabel",t))(kT||{});function zs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=Fl(n(t.options.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{options:o,activeOptionIndex:i}}let OT={1(t){return t.dataRef.current.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},0(t){if(t.dataRef.current.disabled||t.listboxState===0)return t;let n=t.activeOptionIndex,{isSelected:r}=t.dataRef.current,o=t.options.findIndex(i=>r(i.dataRef.current.value));return o!==-1&&(n=o),{...t,listboxState:0,activeOptionIndex:n}},2(t,n){var r;if(t.dataRef.current.disabled||t.listboxState===1)return t;let o=zs(t),i=Ga(n,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeOptionIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{if(t.dataRef.current.disabled||t.listboxState===1)return t;let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeOptionIndex===null?t.options:t.options.slice(t.activeOptionIndex+r).concat(t.options.slice(0,t.activeOptionIndex+r))).find(l=>{var c;return!l.dataRef.current.disabled&&((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))}),a=i?t.options.indexOf(i):-1;return a===-1||a===t.activeOptionIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeOptionIndex:a,activationTrigger:1}},4(t){return t.dataRef.current.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},5:(t,n)=>{let r={id:n.id,dataRef:n.dataRef},o=zs(t,i=>[...i,r]);return t.activeOptionIndex===null&&t.dataRef.current.isSelected(n.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(r)),{...t,...o}},6:(t,n)=>{let r=zs(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}},7:(t,n)=>({...t,labelId:n.id})},tp=p.createContext(null);tp.displayName="ListboxActionsContext";function Qi(t){let n=p.useContext(tp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Qi),r}return n}let np=p.createContext(null);np.displayName="ListboxDataContext";function Ji(t){let n=p.useContext(np);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ji),r}return n}function ST(t,n){return rt(n.type,OT,t,n)}let CT=p.Fragment;function PT(t,n){let{value:r,defaultValue:o,form:i,name:a,onChange:l,by:c=(M,ie)=>M===ie,disabled:u=!1,horizontal:d=!1,multiple:f=!1,...g}=t;const b=d?"horizontal":"vertical";let h=xt(n),[m=f?[]:void 0,y]=X1(r,l,o),[E,v]=p.useReducer(ST,{dataRef:p.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),k=p.useRef({static:!1,hold:!1}),C=p.useRef(null),D=p.useRef(null),I=p.useRef(null),T=pe(typeof c=="string"?(M,ie)=>{let ye=c;return(M==null?void 0:M[ye])===(ie==null?void 0:ie[ye])}:c),z=p.useCallback(M=>rt(A.mode,{1:()=>m.some(ie=>T(ie,M)),0:()=>T(m,M)}),[m]),A=p.useMemo(()=>({...E,value:m,disabled:u,mode:f?1:0,orientation:b,compare:T,isSelected:z,optionsPropsRef:k,labelRef:C,buttonRef:D,optionsRef:I}),[m,u,f,E]);Ge(()=>{E.dataRef.current=A},[A]),Rf([A.buttonRef,A.optionsRef],(M,ie)=>{var ye;v({type:1}),Rl(ie,Nl.Loose)||(M.preventDefault(),(ye=A.buttonRef.current)==null||ye.focus())},A.listboxState===0);let Q=p.useMemo(()=>({open:A.listboxState===0,disabled:u,value:m}),[A,u,m]),B=pe(M=>{let ie=A.options.find(ye=>ye.id===M);ie&&U(ie.dataRef.current.value)}),F=pe(()=>{if(A.activeOptionIndex!==null){let{dataRef:M,id:ie}=A.options[A.activeOptionIndex];U(M.current.value),v({type:2,focus:Fe.Specific,id:ie})}}),L=pe(()=>v({type:0})),_=pe(()=>v({type:1})),R=pe((M,ie,ye)=>M===Fe.Specific?v({type:2,focus:Fe.Specific,id:ie,trigger:ye}):v({type:2,focus:M,trigger:ye})),V=pe((M,ie)=>(v({type:5,id:M,dataRef:ie}),()=>v({type:6,id:M}))),H=pe(M=>(v({type:7,id:M}),()=>v({type:7,id:null}))),U=pe(M=>rt(A.mode,{0(){return y==null?void 0:y(M)},1(){let ie=A.value.slice(),ye=ie.findIndex(Pe=>T(Pe,M));return ye===-1?ie.push(M):ie.splice(ye,1),y==null?void 0:y(ie)}})),J=pe(M=>v({type:3,value:M})),X=pe(()=>v({type:4})),N=p.useMemo(()=>({onChange:U,registerOption:V,registerLabel:H,goToOption:R,closeListbox:_,openListbox:L,selectActiveOption:F,selectOption:B,search:J,clearSearch:X}),[]),ae=p.useRef(null),se=wn();return p.useEffect(()=>{ae.current&&o!==void 0&&se.addEventListener(ae.current,"reset",()=>{y==null||y(o)})},[ae,y]),O.createElement(tp.Provider,{value:N},O.createElement(np.Provider,{value:A},O.createElement(Al,{value:rt(A.listboxState,{0:ut.Open,1:ut.Closed})},a!=null&&m!=null&&Jf({[a]:m}).map((M,ie)=>{let[ye,Pe]=M;return O.createElement(ew,{features:Qf.Hidden,ref:ie===0?$e=>{var oe;ae.current=(oe=$e==null?void 0:$e.closest("form"))==null?null:oe}:void 0,...Ka({key:ye,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:u,name:ye,value:Pe})})}),ht({ourProps:{ref:h},theirProps:g,slot:Q,defaultTag:CT,name:"Listbox"}))))}let IT="button";function TT(t,n){var r;let o=cn(),{id:i=`headlessui-listbox-button-${o}`,...a}=t,l=Ji("Listbox.Button"),c=Qi("Listbox.Button"),u=xt(l.buttonRef,n),d=wn(),f=pe(E=>{switch(E.key){case De.Space:case De.Enter:case De.ArrowDown:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Fe.First)});break;case De.ArrowUp:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Fe.Last)})}}),g=pe(E=>{switch(E.key){case De.Space:E.preventDefault()}}),b=pe(E=>_f(E.currentTarget)?E.preventDefault():void(l.listboxState===0?(c.closeListbox(),d.nextFrame(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})})):(E.preventDefault(),c.openListbox()))),h=Ki(()=>{if(l.labelId)return[l.labelId,i].join(" ")},[l.labelId,i]),m=p.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled,value:l.value}),[l]),y={ref:u,id:i,type:Ff(t,l.buttonRef),"aria-haspopup":"listbox","aria-controls":(r=l.optionsRef.current)==null?void 0:r.id,"aria-expanded":l.listboxState===0,"aria-labelledby":h,disabled:l.disabled,onKeyDown:f,onKeyUp:g,onClick:b};return ht({ourProps:y,theirProps:a,slot:m,defaultTag:IT,name:"Listbox.Button"})}let DT="label";function MT(t,n){let r=cn(),{id:o=`headlessui-listbox-label-${r}`,...i}=t,a=Ji("Listbox.Label"),l=Qi("Listbox.Label"),c=xt(a.labelRef,n);Ge(()=>l.registerLabel(o),[o]);let u=pe(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return ht({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:DT,name:"Listbox.Label"})}let NT="ul",RT=Or.RenderStrategy|Or.Static;function FT(t,n){var r;let o=cn(),{id:i=`headlessui-listbox-options-${o}`,...a}=t,l=Ji("Listbox.Options"),c=Qi("Listbox.Options"),u=xt(l.optionsRef,n),d=wn(),f=wn(),g=qi(),b=g===null?l.listboxState===0:(g&ut.Open)===ut.Open;p.useEffect(()=>{var v;let k=l.optionsRef.current;k&&l.listboxState===0&&k!==((v=Ui(k))==null?void 0:v.activeElement)&&k.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let h=pe(v=>{switch(f.dispose(),v.key){case De.Space:if(l.searchQuery!=="")return v.preventDefault(),v.stopPropagation(),c.search(v.key);case De.Enter:if(v.preventDefault(),v.stopPropagation(),l.activeOptionIndex!==null){let{dataRef:k}=l.options[l.activeOptionIndex];c.onChange(k.current.value)}l.mode===0&&(c.closeListbox(),Bt().nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}));break;case rt(l.orientation,{vertical:De.ArrowDown,horizontal:De.ArrowRight}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.Next);case rt(l.orientation,{vertical:De.ArrowUp,horizontal:De.ArrowLeft}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.Previous);case De.Home:case De.PageUp:return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.First);case De.End:case De.PageDown:return v.preventDefault(),v.stopPropagation(),c.goToOption(Fe.Last);case De.Escape:return v.preventDefault(),v.stopPropagation(),c.closeListbox(),d.nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})});case De.Tab:v.preventDefault(),v.stopPropagation();break;default:v.key.length===1&&(c.search(v.key),f.setTimeout(()=>c.clearSearch(),350))}}),m=Ki(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.id},[l.buttonRef.current]),y=p.useMemo(()=>({open:l.listboxState===0}),[l]),E={"aria-activedescendant":l.activeOptionIndex===null||(r=l.options[l.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":l.mode===1||void 0,"aria-labelledby":m,"aria-orientation":l.orientation,id:i,onKeyDown:h,role:"listbox",tabIndex:0,ref:u};return ht({ourProps:E,theirProps:a,slot:y,defaultTag:NT,features:RT,visible:b,name:"Listbox.Options"})}let LT="li";function AT(t,n){let r=cn(),{id:o=`headlessui-listbox-option-${r}`,disabled:i=!1,value:a,...l}=t,c=Ji("Listbox.Option"),u=Qi("Listbox.Option"),d=c.activeOptionIndex!==null&&c.options[c.activeOptionIndex].id===o,f=c.isSelected(a),g=p.useRef(null),b=aw(g),h=bn({disabled:i,value:a,domRef:g,get textValue(){return b()}}),m=xt(n,g);Ge(()=>{if(c.listboxState===0&&d&&c.activationTrigger!==0){let T=Bt();return T.requestAnimationFrame(()=>{var z,A;(A=(z=g.current)==null?void 0:z.scrollIntoView)==null||A.call(z,{block:"nearest"})}),T.dispose}},[g,d,c.listboxState,c.activationTrigger,c.activeOptionIndex]),Ge(()=>u.registerOption(o,h),[h,o]);let y=pe(T=>i?T.preventDefault():(u.onChange(a),void(c.mode===0&&(u.closeListbox(),Bt().nextFrame(()=>{var z;return(z=c.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}))))),E=pe(()=>i?u.goToOption(Fe.Nothing):void u.goToOption(Fe.Specific,o)),v=Lf(),k=pe(T=>v.update(T)),C=pe(T=>{v.wasMoved(T)&&(i||d||u.goToOption(Fe.Specific,o,0))}),D=pe(T=>{v.wasMoved(T)&&(i||d&&u.goToOption(Fe.Nothing))}),I=p.useMemo(()=>({active:d,selected:f,disabled:i}),[d,f,i]);return ht({ourProps:{id:o,ref:m,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,"aria-selected":f,disabled:void 0,onClick:y,onFocus:E,onPointerEnter:k,onMouseEnter:k,onPointerMove:C,onMouseMove:C,onPointerLeave:D,onMouseLeave:D},theirProps:l,slot:I,defaultTag:LT,name:"Listbox.Option"})}let _T=ft(PT),$T=ft(TT),zT=ft(MT),HT=ft(FT),BT=ft(AT),bi=Object.assign(_T,{Button:$T,Label:zT,Options:HT,Option:BT});const VT=`
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`,WT=`
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
`,UT=`
  jn-border
  jn-border-theme-success
`,qT=`
  jn-border
  jn-border-theme-error
`,YT=`
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`,KT=`
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`,GT=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,kw=p.createContext(),$u=t=>{let{ariaLabel:n="",children:r=null,className:o="",defaultValue:i,disabled:a=!1,error:l=!1,errortext:c="",helptext:u="",id:d="",invalid:f=!1,label:g,loading:b=!1,multiple:h=!1,name:m,onChange:y,onValueChange:E,placeholder:v="Select…",required:k=!1,successtext:C="",truncateOptions:D=!1,valid:I=!1,value:T,valueLabel:z,variant:A="default",width:Q="full",wrapperClassName:B="",...F}=t;const L=ve=>typeof ve!="string"||ve.trim().length!==0,_=d||"juno-select-"+p.useId(),R="juno-select-helptext-"+p.useId(),[V,H]=p.useState(new Map),[U,J]=p.useState(!1),[X,N]=p.useState(!1),[ae,se]=p.useState(!1),[M,ie]=p.useState(!1),ye=p.useMemo(()=>f||!!(c&&L(c)),[f,c]),Pe=p.useMemo(()=>I||!!(C&&L(C)),[I,C]);p.useEffect(()=>{J(l)},[l]),p.useEffect(()=>{N(ye)},[ye]),p.useEffect(()=>{se(Pe)},[Pe]),p.useEffect(()=>{ie(b)},[b]);const $e=LE(),oe=[L1(4),kC({crossAxis:!0,allowedPlacements:["bottom","top"]}),EC({boundary:"viewport",apply(ve){let{availableWidth:He,availableHeight:at,elements:Je}=ve;Object.assign(Je.floating.style,{maxWidth:`${He}px`,maxHeight:`${at}px`,overflowY:"auto"})}}),A1()],me=ve=>{const He=Je=>{var qn;const Pt=V.get(Je);if(Pt)return(qn=Pt.displayName)!=null&&qn.length?Pt.displayName:null};return ve.map(Je=>He(Je)).filter(Je=>Je&&0<Je.toString().trim().length).join(", ")};return O.createElement(kw.Provider,{value:{truncateOptions:D,addOptionValueAndLabel:(ve,He,at)=>{H(Je=>new Map(Je).set(ve||at,{val:ve,label:He,children:at,displayName:at||He||ve}))}}},O.createElement("div",{className:`
          juno-select-wrapper 
          jn-relative
          ${Q=="auto"?"jn-inline-block":"jn-block"}
          ${Q=="auto"?"jn-w-auto":"jn-w-full"}
          ${B}
        `},O.createElement(bi,{disabled:a||M||U,multiple:h,name:m,onChange:ve=>{y&&y(ve||""),E&&E(ve||"")},value:T,defaultValue:i},g&&L(g)?O.createElement(bi.Label,{as:Ru,htmlFor:_,text:g,className:`${VT}`,disabled:a||M||U,required:k,floating:!0,minimized:!0}):"",O.createElement(Ds,{composable:!0,adaptiveWidth:!0,middleware:oe},O.createElement(Ds.Reference,null,O.createElement(bi.Button,he({"aria-describedby":u?R:"","aria-label":n||g,as:"button",id:_,className:`
                    juno-select-toggle
                    ${A&&A.length?"juno-select-toggle-"+A:"juno-select-toggle-default"}
                    ${Q=="auto"?"jn-w-auto":"jn-w-full"}
                    ${WT}
                    ${g&&L(g)?"jn-pt-[0.4rem]":""}
                    ${a?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}
                    ${M||U?"jn-justify-center":"jn-justify-between"}
                    ${X?"juno-select-invalid "+qT:""} 
                    ${ae?"juno-select-valid "+UT:""}  
                    
                    ${M?"juno-select-loading jn-cursor-not-allowed":""}
                    ${U?"juno-select-error jn-cursor-not-allowed":""}
                    ${o}
                  `},F),ve=>{var Je;let{open:He,value:at}=ve;return U||M?O.createElement("span",{className:`${YT}`},U?O.createElement(sn,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):M?O.createElement(Gf,{className:"jn-cursor-not-allowed"}):""):O.createElement(O.Fragment,null,O.createElement("span",{className:`${GT}`},h?me(at)||z||at.join(", ")||v:((Je=V.get(at))==null?void 0:Je.displayName)||z||at||v),O.createElement("span",{className:"jn-flex"},ae?O.createElement(sn,{icon:"checkCircle",color:"jn-text-theme-success"}):"",X?O.createElement(sn,{icon:"dangerous",color:"jn-text-theme-error"}):"",O.createElement("span",null,O.createElement(sn,{icon:He?"expandLess":"expandMore"}))))})),Bn.createPortal(O.createElement(Ds.Content,null,O.createElement(bi.Options,{unmount:!1,className:`
                        juno-select-menu
                        ${KT}
                      `},r)),$e||document.body))),c&&L(c)?O.createElement(xi,{text:c,variant:"error"}):"",C&&L(C)?O.createElement(xi,{text:C,variant:"success"}):"",u&&L(u)?O.createElement(xi,{text:u,id:R}):""))},QT=t=>{const{multiple:n,value:r}=t;if(r){if(n&&!Array.isArray(r))return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.");if(!n&&typeof r!="string")return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")}};$u.propTypes={ariaLabel:x.string,children:x.node,className:x.string,defaultValue:x.string,disabled:x.bool,error:x.bool,errortext:x.node,helptext:x.node,id:x.string,invalid:x.bool,label:x.string,loading:x.bool,multiple:x.bool,name:x.string,onChange:x.func,onValueChange:x.func,placeholder:x.string,required:x.bool,successtext:x.node,truncateOptions:x.bool,valid:x.bool,value:QT,valueLabel:x.string,variant:x.oneOf(["default","primary","primary-danger","subdued"]),width:x.oneOf(["full","auto"]),wrapperClassName:x.string};const JT=`
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
`,ZT=`
  jn-text-theme-default
  jn-pl-[2.375rem]
`,XT=`
  jn-text-theme-accent
  jn-pl-3.5
`,eD=`
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`,tD=`
  jn-opacity-50
  jn-cursor-not-allowed
`,nD=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,zu=t=>{let{children:n,className:r="",disabled:o=!1,value:i="",label:a,...l}=t;const c=p.useContext(kw),{truncateOptions:u,addOptionValueAndLabel:d}=c||{};return p.useEffect(()=>{d(i,a,n)},[i,a,n]),O.createElement(bi.Option,{as:p.Fragment,disabled:o,value:i||n},f=>{let{selected:g}=f;return O.createElement("li",he({className:`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${JT}
          ${g?"juno-select-option-selected "+XT:ZT}
          ${o?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}
          ${u?"juno-select-option-truncate":""}
          ${r}
        `},l),g?O.createElement(sn,{icon:"check",size:"18",className:`${eD}`}):"",O.createElement("span",{className:`
            ${o?tD:""}
            ${u?nD:""}
          `},n||a||i))})};zu.propTypes={children:x.string,className:x.string,disabled:x.bool,value:x.string,label:x.string};x.oneOf(["default","number","select","input"]),x.number,x.number,x.number,x.bool,x.bool,x.bool,x.func,x.func,x.func,x.func,x.func,x.func,x.bool,x.string;var rD=function(t){return`
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
  `)},oD=function(t){return`
    jn-bg-theme-background-lvl-4
    jn-text-theme-high
    `.concat(t?"group-hover:jn-text-theme-highest":"",`
    jn-px-1
    jn-py-0.5
    jn-rounded-sm
    jn-inline-block
  `)},Sm=function(t){return`
    jn-px-1
    jn-py-0.5
    jn-text-theme-high
    `.concat(t?"group-hover:jn-text-theme-highest":"",`
    jn-inline-block
  `)},Ow=function(t){var n=t.uid,r=n===void 0?"":n,o=t.pillKey,i=o===void 0?"":o,a=t.pillKeyLabel,l=a===void 0?"":a,c=t.pillValue,u=c===void 0?"":c,d=t.pillValueLabel,f=d===void 0?"":d,g=t.closeable,b=t.onClick,h=b===void 0?void 0:b,m=t.onClose,y=m===void 0?void 0:m,E=t.className,v=E===void 0?"":E,k=it(t,["uid","pillKey","pillKeyLabel","pillValue","pillValueLabel","closeable","onClick","onClose","className"]),C=function(I){y&&y(I,r||i||u)},D=function(I){h&&h(I,r||i||u)};return O.createElement("div",ue({className:"juno-pill ".concat(rD(!!h)," ").concat(v)},k),u||f?O.createElement(O.Fragment,null,(l||i)&&O.createElement("span",{className:"pill-key ".concat(oD(!!h)),onClick:function(I){return D(I)}},l||i),O.createElement("span",{className:"pill-value ".concat(Sm(!!h)),onClick:function(I){return D(I)}},f||u)):O.createElement("span",{className:"".concat(Sm(!1))},"set pillValue or pillValueLabel"),g!==void 0&&g&&O.createElement(kr,{icon:"close",size:18,onClick:function(I){return C(I)}}))};p.createContext({});const iD=`
  jn-h-px 
  jn-w-full
  jn-bg-theme-background-lvl-3
`,Cm=O.forwardRef((t,n)=>{let{className:r="",...o}=t;return O.createElement("div",he({className:`juno-select-divider ${iD} ${r}`,ref:n},o))});Cm.displayName="SelectDivider",Cm.propTypes={className:x.string};x.string,x.string,x.string,x.string,x.node,x.bool,x.string,x.bool,x.bool,x.string,x.node,x.bool,x.string,x.oneOf(["default","primary","primary-danger","subdued"]),x.func,x.func,x.func,x.string,x.bool,x.bool,x.bool,x.string;p.createContext(void 0);x.string,x.string,x.string,x.bool,x.oneOf(["small","default","large"]),x.bool,x.bool,x.bool,x.bool,x.node,x.node,x.node,x.string,x.func,x.func,x.string;x.string,x.string,x.string,x.bool,x.bool,x.node,x.bool,x.bool,x.string,x.bool,x.string,x.string,x.func,x.func;p.createContext(void 0);x.string,x.string,x.oneOfType([x.string,x.number]),x.string,x.string,x.bool,x.bool,x.bool,x.bool,x.bool,x.bool,x.string,x.string,x.func,x.func,x.func,x.node,x.node,x.node,x.oneOf(["full","auto"]),x.string;x.string,x.string,x.string,x.string,x.node,x.string,x.bool,x.bool,x.string,x.bool,x.string,x.string,x.bool,x.func;x.oneOf(["text","password","email","tel","url","number"]),x.string,x.string,x.string,x.string,x.string,x.node,x.bool,x.bool,x.string,x.bool,x.string,x.bool,x.string,x.bool,x.func,x.func,x.func;x.string,x.bool,x.string,x.string,x.func;function Sw(t){return Cw(t)?(t.nodeName||"").toLowerCase():"#document"}function Zi(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function aD(t){var n;return(n=(Cw(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function Cw(t){return t instanceof Node||t instanceof Zi(t).Node}function Zt(t){return t instanceof Element||t instanceof Zi(t).Element}function Ul(t){return t instanceof HTMLElement||t instanceof Zi(t).HTMLElement}function Hu(t){return typeof ShadowRoot<"u"&&(t instanceof ShadowRoot||t instanceof Zi(t).ShadowRoot)}function lD(t){return["html","body","#document"].includes(Sw(t))}function sD(t){return Zi(t).getComputedStyle(t)}function cD(t){if(Sw(t)==="html")return t;const n=t.assignedSlot||t.parentNode||Hu(t)&&t.host||aD(t);return Hu(n)?n.host:n}function uD(t){let n=t.activeElement;for(;((r=n)==null||(o=r.shadowRoot)==null?void 0:o.activeElement)!=null;){var r,o;n=n.shadowRoot.activeElement}return n}function Di(t,n){if(!t||!n)return!1;const r=n.getRootNode&&n.getRootNode();if(t.contains(n))return!0;if(r&&Hu(r))for(let o=n;o;){if(t===o)return!0;o=o.parentNode||o.host}return!1}function dD(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function fD(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(n=>{let{brand:r,version:o}=n;return r+"/"+o}).join(" "):navigator.userAgent}function pD(t){if(t.mozInputSource===0&&t.isTrusted)return!0;const n=/Android/i;return(n.test(dD())||n.test(fD()))&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}function gD(t){return t.width===0&&t.height===0||t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType!=="mouse"||1>t.width&&1>t.height&&t.pressure===0&&t.detail===0}function sl(t,n){const r=["mouse","pen"];return n||r.push("",void 0),r.includes(t)}function hD(t){return"nativeEvent"in t}function mD(t){return t.matches("html,body")}function er(t){return(t==null?void 0:t.ownerDocument)||document}function _a(t,n){if(n==null)return!1;if("composedPath"in t)return t.composedPath().includes(n);const r=t;return r.target!=null&&n.contains(r.target)}function bD(t){return"composedPath"in t?t.composedPath()[0]:t.target}const vD="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function yD(t){return Ul(t)&&t.matches(vD)}function Bu(t){return p.useMemo(()=>t.every(n=>n==null)?null:n=>{t.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})},t)}var Mi=typeof document>"u"?p.useEffect:p.useLayoutEffect;let Hs=!1,wD=0;const Pm=()=>"floating-ui-"+wD++;function xD(){const[t,n]=p.useState(()=>Hs?Pm():void 0);return Mi(()=>{t==null&&n(Pm())},[]),p.useEffect(()=>{Hs||(Hs=!0)},[]),t}const jD=eo.useId,Pw=jD||xD;function ED(){const t=new Map;return{emit(n,r){var o;(o=t.get(n))==null||o.forEach(i=>i(r))},on(n,r){t.set(n,[...t.get(n)||[],r])},off(n,r){var o;t.set(n,((o=t.get(n))==null?void 0:o.filter(i=>i!==r))||[])}}}const kD=p.createContext(null),OD=p.createContext(null),Iw=()=>{var t;return((t=p.useContext(kD))==null?void 0:t.id)||null},rp=()=>p.useContext(OD);function op(t){return"data-floating-ui-"+t}function Im(t){const n=p.useRef(t);return Mi(()=>{n.current=t}),n}const Tm=op("safe-polygon");function Bs(t,n,r){return r&&!sl(r)?0:typeof t=="number"?t:t==null?void 0:t[n]}function SD(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,dataRef:i,events:a,elements:{domReference:l,floating:c},refs:u}=t,{enabled:d=!0,delay:f=0,handleClose:g=null,mouseOnly:b=!1,restMs:h=0,move:m=!0}=n,y=rp(),E=Iw(),v=Im(g),k=Im(f),C=p.useRef(),D=p.useRef(),I=p.useRef(),T=p.useRef(),z=p.useRef(!0),A=p.useRef(!1),Q=p.useRef(()=>{}),B=p.useCallback(()=>{var R;const V=(R=i.current.openEvent)==null?void 0:R.type;return(V==null?void 0:V.includes("mouse"))&&V!=="mousedown"},[i]);p.useEffect(()=>{function R(){clearTimeout(D.current),clearTimeout(T.current),z.current=!0}if(d)return a.on("dismiss",R),()=>{a.off("dismiss",R)}},[d,a]),p.useEffect(()=>{function R(H){B()&&o(!1,H)}if(!d||!v.current||!r)return;const V=er(c).documentElement;return V.addEventListener("mouseleave",R),()=>{V.removeEventListener("mouseleave",R)}},[c,r,o,d,v,i,B]);const F=p.useCallback(function(R,V){V===void 0&&(V=!0);const H=Bs(k.current,"close",C.current);H&&!I.current?(clearTimeout(D.current),D.current=setTimeout(()=>o(!1,R),H)):V&&(clearTimeout(D.current),o(!1,R))},[k,o]),L=p.useCallback(()=>{Q.current(),I.current=void 0},[]),_=p.useCallback(()=>{if(A.current){const R=er(u.floating.current).body;R.style.pointerEvents="",R.removeAttribute(Tm),A.current=!1}},[u]);return p.useEffect(()=>{function R(){return!!i.current.openEvent&&["click","mousedown"].includes(i.current.openEvent.type)}function V(J){if(clearTimeout(D.current),z.current=!1,!(b&&!sl(C.current)||0<h&&Bs(k.current,"open")===0)){const X=Bs(k.current,"open",C.current);X?D.current=setTimeout(()=>{o(!0,J)},X):o(!0,J)}}function H(J){if(R())return;Q.current();const X=er(c);if(clearTimeout(T.current),v.current){r||clearTimeout(D.current),I.current=v.current({...t,tree:y,x:J.clientX,y:J.clientY,onClose(){_(),L(),F(J)}});const ae=I.current;return X.addEventListener("mousemove",ae),void(Q.current=()=>{X.removeEventListener("mousemove",ae)})}(C.current!=="touch"||!Di(c,J.relatedTarget))&&F(J)}function U(J){R()||(v.current==null||v.current({...t,tree:y,x:J.clientX,y:J.clientY,onClose(){_(),L(),F(J)}})(J))}if(d&&Zt(l)){const J=l;return r&&J.addEventListener("mouseleave",U),c==null||c.addEventListener("mouseleave",U),m&&J.addEventListener("mousemove",V,{once:!0}),J.addEventListener("mouseenter",V),J.addEventListener("mouseleave",H),()=>{r&&J.removeEventListener("mouseleave",U),c==null||c.removeEventListener("mouseleave",U),m&&J.removeEventListener("mousemove",V),J.removeEventListener("mouseenter",V),J.removeEventListener("mouseleave",H)}}},[l,c,d,t,b,h,m,F,L,_,o,r,y,k,v,i]),Mi(()=>{var R;if(d&&r&&(R=v.current)!=null&&R.__options.blockPointerEvents&&B()){const U=er(c).body;if(U.setAttribute(Tm,""),U.style.pointerEvents="none",A.current=!0,Zt(l)&&c){var V,H;const J=l,X=y==null||(V=y.nodesRef.current.find(N=>N.id===E))==null||(H=V.context)==null?void 0:H.elements.floating;return X&&(X.style.pointerEvents=""),J.style.pointerEvents="auto",c.style.pointerEvents="auto",()=>{J.style.pointerEvents="",c.style.pointerEvents=""}}}},[d,r,E,c,l,y,v,i,B]),Mi(()=>{r||(C.current=void 0,L(),_())},[r,L,_]),p.useEffect(()=>()=>{L(),clearTimeout(D.current),clearTimeout(T.current),_()},[d,l,L,_]),p.useMemo(()=>{function R(V){C.current=V.pointerType}return d?{reference:{onPointerDown:R,onPointerEnter:R,onMouseMove(V){r||h===0||(clearTimeout(T.current),T.current=setTimeout(()=>{z.current||o(!0,V.nativeEvent)},h))}},floating:{onMouseEnter(){clearTimeout(D.current)},onMouseLeave(V){a.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),F(V.nativeEvent,!1)}}}:{}},[a,d,h,r,o,F])}function Vs(t,n){let r=t.filter(i=>{var a;return i.parentId===n&&((a=i.context)==null?void 0:a.open)}),o=r;for(;o.length;)o=t.filter(i=>{var a;return(a=o)==null?void 0:a.some(l=>{var c;return i.parentId===l.id&&((c=i.context)==null?void 0:c.open)})}),r=r.concat(o);return r}function Dm(t){return Ul(t.target)&&t.target.tagName==="BUTTON"}function Mm(t){return yD(t)}function CD(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,dataRef:i,elements:{domReference:a}}=t,{enabled:l=!0,event:c="click",toggle:u=!0,ignoreMouse:d=!1,keyboardHandlers:f=!0}=n,g=p.useRef(),b=p.useRef(!1);return p.useMemo(()=>l?{reference:{onPointerDown(h){g.current=h.pointerType},onMouseDown(h){h.button!==0||sl(g.current,!0)&&d||c==="click"||(r&&u&&(!i.current.openEvent||i.current.openEvent.type==="mousedown")?o(!1,h.nativeEvent):(h.preventDefault(),o(!0,h.nativeEvent)))},onClick(h){return c==="mousedown"&&g.current?void(g.current=void 0):void(sl(g.current,!0)&&d||(r&&u&&(!i.current.openEvent||i.current.openEvent.type==="click")?o(!1,h.nativeEvent):o(!0,h.nativeEvent)))},onKeyDown(h){g.current=void 0,h.defaultPrevented||!f||Dm(h)||(h.key===" "&&!Mm(a)&&(h.preventDefault(),b.current=!0),h.key==="Enter"&&o(!(r&&u),h.nativeEvent))},onKeyUp(h){h.defaultPrevented||!f||Dm(h)||Mm(a)||h.key===" "&&b.current&&(b.current=!1,o(!(r&&u),h.nativeEvent))}}}:{},[l,i,c,d,f,a,u,r,o])}const PD=eo.useInsertionEffect,ID=PD||(t=>t());function $a(t){const n=p.useRef(()=>{});return ID(()=>{n.current=t}),p.useCallback(function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.current==null?void 0:n.current(...o)},[])}const TD={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},DD={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},MD=t=>{var n,r;return{escapeKeyBubbles:typeof t=="boolean"?t:(n=t==null?void 0:t.escapeKey)!=null&&n,outsidePressBubbles:typeof t=="boolean"?t:(r=t==null?void 0:t.outsidePress)==null||r}};function ND(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,events:i,nodeId:a,elements:{reference:l,domReference:c,floating:u},dataRef:d}=t,{enabled:f=!0,escapeKey:g=!0,outsidePress:b=!0,outsidePressEvent:h="pointerdown",referencePress:m=!1,referencePressEvent:y="pointerdown",ancestorScroll:E=!1,bubbles:v}=n,k=rp(),C=Iw()!=null,D=$a(typeof b=="function"?b:()=>!1),I=typeof b=="function"?D:b,T=p.useRef(!1),{escapeKeyBubbles:z,outsidePressBubbles:A}=MD(v),Q=$a(F=>{if(r&&f&&g&&F.key==="Escape"){const L=k?Vs(k.nodesRef.current,a):[];if(!z&&(F.stopPropagation(),0<L.length)){let _=!0;if(L.forEach(R=>{var V;if((V=R.context)!=null&&V.open&&!R.context.dataRef.current.__escapeKeyBubbles)return void(_=!1)}),!_)return}i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),o(!1,hD(F)?F.nativeEvent:F)}}),B=$a(F=>{const L=T.current;if(T.current=!1,L||typeof I=="function"&&!I(F))return;const _=bD(F),R="["+op("inert")+"]",V=er(u).querySelectorAll(R);let H=Zt(_)?_:null;for(;H&&!lD(H);){const U=cD(H);if(U===er(u).body||!Zt(U))break;H=U}if(!(V.length&&Zt(_)&&!mD(_)&&!Di(_,u)&&Array.from(V).every(U=>!Di(H,U)))){if(Ul(_)&&u){const J=0<_.clientWidth&&_.scrollWidth>_.clientWidth,X=0<_.clientHeight&&_.scrollHeight>_.clientHeight;let N=X&&F.offsetX>_.clientWidth;if(X&&sD(_).direction==="rtl"&&(N=F.offsetX<=_.offsetWidth-_.clientWidth),N||J&&F.offsetY>_.clientHeight)return}const U=k&&Vs(k.nodesRef.current,a).some(J=>{var X;return _a(F,(X=J.context)==null?void 0:X.elements.floating)});if(!(_a(F,u)||_a(F,c)||U)){const J=k?Vs(k.nodesRef.current,a):[];if(0<J.length){let X=!0;if(J.forEach(N=>{var ae;if((ae=N.context)!=null&&ae.open&&!N.context.dataRef.current.__outsidePressBubbles)return void(X=!1)}),!X)return}i.emit("dismiss",{type:"outsidePress",data:{returnFocus:C?{preventScroll:!0}:pD(F)||gD(F)}}),o(!1,F)}}});return p.useEffect(()=>{function F(R){o(!1,R)}if(!r||!f)return;d.current.__escapeKeyBubbles=z,d.current.__outsidePressBubbles=A;const L=er(u);g&&L.addEventListener("keydown",Q),I&&L.addEventListener(h,B);let _=[];return E&&(Zt(c)&&(_=Er(c)),Zt(u)&&(_=_.concat(Er(u))),!Zt(l)&&l&&l.contextElement&&(_=_.concat(Er(l.contextElement)))),_=_.filter(R=>{var V;return R!==((V=L.defaultView)==null?void 0:V.visualViewport)}),_.forEach(R=>{R.addEventListener("scroll",F,{passive:!0})}),()=>{g&&L.removeEventListener("keydown",Q),I&&L.removeEventListener(h,B),_.forEach(R=>{R.removeEventListener("scroll",F)})}},[d,u,c,l,g,I,h,r,o,E,f,z,A,Q,B]),p.useEffect(()=>{T.current=!1},[I,h]),p.useMemo(()=>f?{reference:{onKeyDown:Q,[TD[y]]:F=>{m&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),o(!1,F.nativeEvent))}},floating:{onKeyDown:Q,[DD[h]]:()=>{T.current=!0}}}:{},[f,i,m,h,y,o,Q])}function RD(t){var n;t===void 0&&(t={});const{open:r=!1,onOpenChange:o,nodeId:i}=t,[a,l]=p.useState(null),c=((n=t.elements)==null?void 0:n.reference)||a,u=xC(t),d=rp(),f=$a((D,I)=>{D&&(b.current.openEvent=I),o==null||o(D,I)}),g=p.useRef(null),b=p.useRef({}),h=p.useState(()=>ED())[0],m=Pw(),y=p.useCallback(D=>{const I=Zt(D)?{getBoundingClientRect:()=>D.getBoundingClientRect(),contextElement:D}:D;u.refs.setReference(I)},[u.refs]),E=p.useCallback(D=>{(Zt(D)||D===null)&&(g.current=D,l(D)),(Zt(u.refs.reference.current)||u.refs.reference.current===null||D!==null&&!Zt(D))&&u.refs.setReference(D)},[u.refs]),v=p.useMemo(()=>({...u.refs,setReference:E,setPositionReference:y,domReference:g}),[u.refs,E,y]),k=p.useMemo(()=>({...u.elements,domReference:c}),[u.elements,c]),C=p.useMemo(()=>({...u,refs:v,elements:k,dataRef:b,nodeId:i,floatingId:m,events:h,open:r,onOpenChange:f}),[u,i,m,h,r,f,v,k]);return Mi(()=>{const D=d==null?void 0:d.nodesRef.current.find(I=>I.id===i);D&&(D.context=C)}),p.useMemo(()=>({...u,context:C,refs:v,elements:k}),[u,v,k,C])}function FD(t,n){n===void 0&&(n={});const{open:r,onOpenChange:o,dataRef:i,events:a,refs:l,elements:{floating:c,domReference:u}}=t,{enabled:d=!0,keyboardOnly:f=!0}=n,g=p.useRef(""),b=p.useRef(!1),h=p.useRef();return p.useEffect(()=>{function m(){!r&&Ul(u)&&u===uD(er(u))&&(b.current=!0)}if(!d)return;const y=er(c),E=y.defaultView||window;return E.addEventListener("blur",m),()=>{E.removeEventListener("blur",m)}},[c,u,r,d]),p.useEffect(()=>{function m(y){(y.type==="referencePress"||y.type==="escapeKey")&&(b.current=!0)}if(d)return a.on("dismiss",m),()=>{a.off("dismiss",m)}},[a,d]),p.useEffect(()=>()=>{clearTimeout(h.current)},[]),p.useMemo(()=>d?{reference:{onPointerDown(m){let{pointerType:y}=m;g.current=y,b.current=!!(y&&f)},onMouseLeave(){b.current=!1},onFocus(m){var y;b.current||m.type==="focus"&&((y=i.current.openEvent)==null?void 0:y.type)==="mousedown"&&_a(i.current.openEvent,u)||o(!0,m.nativeEvent)},onBlur(m){b.current=!1;const y=m.relatedTarget,E=Zt(y)&&y.hasAttribute(op("focus-guard"))&&y.getAttribute("data-type")==="outside";h.current=setTimeout(()=>{Di(l.floating.current,y)||Di(u,y)||E||o(!1,m.nativeEvent)})}}}:{},[d,f,u,l,i,o])}function Ws(t,n,r){const o=new Map;return{...r==="floating"&&{tabIndex:-1},...t,...n.map(i=>i?i[r]:null).concat(t).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[c,u]=l;if(c.indexOf("on")!==0)i[c]=u;else if(o.has(c)||o.set(c,[]),typeof u=="function"){var d;(d=o.get(c))==null||d.push(u),i[c]=function(){for(var f,g=arguments.length,b=Array(g),h=0;h<g;h++)b[h]=arguments[h];return(f=o.get(c))==null?void 0:f.map(m=>m(...b)).find(m=>m!==void 0)}}}),i),{})}}function LD(t){t===void 0&&(t=[]);const n=t,r=p.useCallback(a=>Ws(a,t,"reference"),n),o=p.useCallback(a=>Ws(a,t,"floating"),n),i=p.useCallback(a=>Ws(a,t,"item"),t.map(a=>a==null?void 0:a.item));return p.useMemo(()=>({getReferenceProps:r,getFloatingProps:o,getItemProps:i}),[r,o,i])}function AD(t,n){n===void 0&&(n={});const{open:r,floatingId:o}=t,{enabled:i=!0,role:a="dialog"}=n,l=Pw();return p.useMemo(()=>{const c={id:o,role:a};return i?a==="tooltip"?{reference:{"aria-describedby":r?o:void 0},floating:c}:{reference:{"aria-expanded":r?"true":"false","aria-haspopup":a==="alertdialog"?"dialog":a,"aria-controls":r?o:void 0,...a==="listbox"&&{role:"combobox"},...a==="menu"&&{id:l}},floating:{...c,...a==="menu"&&{"aria-labelledby":l}}}:{}},[i,a,r,o,l])}var _D=function(t){var n=t===void 0?{}:t,r=n.initialOpen,o=n.variant,i=n.placement,a=i===void 0?"top":i,l=n.triggerEvent,c=l===void 0?"click":l,u=n.open,d=n.onOpenChange,f=n.disabled,g=f!==void 0&&f,b=p.useState(r!==void 0&&r),h=b[0],m=b[1],y=u??h,E=d??m,v=RD({placement:a,open:y,onOpenChange:E,whileElementsMounted:I1,middleware:[L1(5),jC(),A1()]}),k=v.context,C=CD(k,{enabled:u==null&&g===!1&&c==="click"}),D=SD(k,{move:!1,enabled:u==null&&g===!1&&c==="hover"}),I=FD(k,{enabled:u==null}),T=ND(k),z=AD(k,{role:"tooltip"}),A=LD([C,D,I,T,z]);return O.useMemo(function(){return ue(ue({open:y,setOpen:E,variant:o,disabled:g},A),v)},[y,E,o,g,A,v])},Tw=O.createContext(null),Dw=function(){var t=O.useContext(Tw);if(t==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t};function $D(t){var n=t.initialOpen,r=t.placement,o=r===void 0?"top":r,i=t.variant,a=t.open,l=t.triggerEvent,c=l===void 0?"click":l,u=t.disabled,d=t.children,f=d===void 0?null:d,g=it(t,["initialOpen","placement","variant","open","triggerEvent","disabled","children"]),b=_D({initialOpen:n!==void 0&&n,placement:o,variant:i,open:a,triggerEvent:c,disabled:u!==void 0&&u,props:g});return O.createElement(Tw.Provider,{value:b},f)}var zD=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`,HD=`
    jn-mx-4
    jn-max-w-full
`,BD=`
    jn-shrink-0
`,VD=function(t){return t==="error"?"dangerous":t},WD=O.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=it(t,["className","children"]),c=Dw(),u=Bu([c.refs.setFloating,n]),d=c.variant;return O.createElement(O.Fragment,null,c.open&&O.createElement("div",ue({className:"juno-tooltip juno-tooltip-".concat(d," ").concat(zD," ").concat(o),ref:u,style:ue({},c.floatingStyles)},c.getFloatingProps(l)),d&&O.createElement(kr,{icon:VD(d),color:"jn-text-theme-".concat(d),className:"juno-tooltip-popover-icon ".concat(BD)}),O.createElement("p",{className:"".concat(HD)},a)))}),UD=O.forwardRef(function(t,n){var r=t.children,o=r===void 0?null:r,i=t.asChild,a=t.className,l=a===void 0?"":a,c=it(t,["children","asChild","className"]),u=Dw(),d=Bu([u.refs.setReference,n]);if(i!==void 0&&i&&O.isValidElement(o)){var f=o.props,g=f.ref,b=Bu([u.refs.setReference,n,g]),h=ue(ue(ue({ref:b},c),f),{"data-state":u.open?"open":"closed",className:f.className+"".concat(u.disabled&&" jn-cursor-default")}),m=u.getReferenceProps(h);return O.cloneElement(o,m)}return O.createElement("button",ue({ref:d,"data-state":u.open?"open":"closed"},u.getReferenceProps(c),{className:"".concat(l," ").concat(u.disabled&&" jn-cursor-default")}),o)});const qD={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},Nm=t=>{let n;const r=new Set,o=(f,g)=>{const b=typeof f=="function"?f(n):f;if(!Object.is(b,n)){const h=n;n=g??(typeof b!="object"||b===null)?b:Object.assign({},n,b),r.forEach(m=>m(n,h))}},i=()=>n,u={setState:o,getState:i,getInitialState:()=>d,subscribe:f=>(r.add(f),()=>r.delete(f)),destroy:()=>{(qD?"static":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},d=n=t(o,i,u);return u},Mw=t=>t?Nm(t):Nm;var Nw={exports:{}},Rw={},Fw={exports:{}},Lw={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=p;function YD(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var KD=typeof Object.is=="function"?Object.is:YD,GD=Ko.useState,QD=Ko.useEffect,JD=Ko.useLayoutEffect,ZD=Ko.useDebugValue;function XD(t,n){var r=n(),o=GD({inst:{value:r,getSnapshot:n}}),i=o[0].inst,a=o[1];return JD(function(){i.value=r,i.getSnapshot=n,Us(i)&&a({inst:i})},[t,r,n]),QD(function(){return Us(i)&&a({inst:i}),t(function(){Us(i)&&a({inst:i})})},[t]),ZD(r),r}function Us(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!KD(t,r)}catch{return!0}}function e7(t,n){return n()}var t7=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?e7:XD;Lw.useSyncExternalStore=Ko.useSyncExternalStore!==void 0?Ko.useSyncExternalStore:t7;Fw.exports=Lw;var n7=Fw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ql=p,r7=n7;function o7(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var i7=typeof Object.is=="function"?Object.is:o7,a7=r7.useSyncExternalStore,l7=ql.useRef,s7=ql.useEffect,c7=ql.useMemo,u7=ql.useDebugValue;Rw.useSyncExternalStoreWithSelector=function(t,n,r,o,i){var a=l7(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=c7(function(){function u(h){if(!d){if(d=!0,f=h,h=o(h),i!==void 0&&l.hasValue){var m=l.value;if(i(m,h))return g=m}return g=h}if(m=g,i7(f,h))return m;var y=o(h);return i!==void 0&&i(m,y)?m:(f=h,g=y)}var d=!1,f,g,b=r===void 0?null:r;return[function(){return u(n())},b===null?void 0:function(){return u(b())}]},[n,r,o,i]);var c=a7(t,a[0],a[1]);return s7(function(){l.hasValue=!0,l.value=c},[c]),u7(c),c};Nw.exports=Rw;var d7=Nw.exports;const f7=Tl(d7),p7={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},{useDebugValue:g7}=O,{useSyncExternalStoreWithSelector:h7}=f7;let Rm=!1;const m7=t=>t;function Aw(t,n=m7,r){(p7?"static":void 0)!=="production"&&r&&!Rm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Rm=!0);const o=h7(t.subscribe,t.getState,t.getServerState||t.getInitialState,n,r);return g7(o),o}var b7={};const Fm=t=>`${t}-${(+new Date+Math.random()).toString(36).slice(-5)}}`,v7=(t,n)=>({storeId:Fm("store-"),messages:[],actions:{addMessage:r=>{if(n().messages.findIndex(a=>JSON.stringify(a.text)===JSON.stringify(r.text)&&a.variant===r.variant)>=0)return;const o=n().messages.slice(),i=Fm("message-");o.push({id:i,...r}),t(a=>({...a,messages:o}))},removeMessage:r=>{let o=n().messages.slice();o=o.filter(i=>i.id!==r),t(i=>({...i,messages:o}))},resetMessages:()=>{t(r=>({...r,messages:[]}))}}}),_w=p.createContext(void 0),y7=({children:t})=>O.createElement(_w.Provider,{value:Mw(v7)},t),$w=t=>{const n=p.useContext(_w);if(!n)throw new Error("StoreContext not provided");return Aw(n,t)},w7=()=>$w(t=>t.messages),zw=()=>$w(t=>t.actions);var be=function(){return be=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},be.apply(this,arguments)};function Wn(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>n.indexOf(o)&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)0>n.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(r[o[i]]=t[o[i]]);return r}function xe(){return xe=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},xe.apply(null,arguments)}function x7(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hw={exports:{}},qs,Lm;function j7(){if(Lm)return qs;Lm=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return qs=t,qs}var Ys,Am;function E7(){if(Am)return Ys;Am=1;var t=j7();function n(){}function r(){}return r.resetWarningCache=n,Ys=function(){function o(l,c,u,d,f,g){if(g!==t){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}o.isRequired=o;function i(){return o}var a={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:i,element:o,elementType:o,instanceOf:i,node:o,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a},Ys}Hw.exports=E7()();var k7=Hw.exports;const j=x7(k7);j.string,j.any;j.oneOf(["open","closed"]),j.bool,j.node;function Bw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Vw(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var r=function o(){if(this instanceof o){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(n,i);return new a}return n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var i=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:function(){return t[o]}})}),r}function K(t){return n=>{let{opacityVariable:r,opacityValue:o}=n;return o===void 0?r===void 0?`rgb(var(${t}))`:`rgba(var(${t}), var(${r}, 1))`:`rgba(var(${t}), ${o})`}}var O7={content:["./src/components/**/*.{js,jsx,ts,tsx,mdx}","./src/dummyComponents/*.{js,jsx,ts,tsx,mdx}","./src/docs/**/*.{js,jsx,ts,tsx,mdx}"],prefix:"jn-",theme:{fontFamily:{sans:['"IBM Plex Sans"',"ui-sans-serif","Arial","system-ui","sans-serif"],condensed:['"IBM Plex Sans Condensed"',"ui-sans-serif","Arial","system-ui","sans-serif"],serif:['"IBM Plex Serif"',"ui-serif","serif"],mono:['"IBM Plex Mono"',"ui-monospace","monospace"]},colors:{current:"currentColor","juno-grey-blue":{1:K("--color-juno-grey-blue-1-raw"),2:K("--color-juno-grey-blue-2-raw"),3:K("--color-juno-grey-blue-3-raw"),4:K("--color-juno-grey-blue-4-raw"),5:K("--color-juno-grey-blue-5-raw"),6:K("--color-juno-grey-blue-6-raw"),7:K("--color-juno-grey-blue-7-raw"),8:K("--color-juno-grey-blue-8-raw"),9:K("--color-juno-grey-blue-9-raw"),10:K("--color-juno-grey-blue-10-raw"),11:K("--color-juno-grey-blue-11-raw"),DEFAULT:K("--color-juno-grey-blue-11-raw")},"juno-blue":{1:K("--color-juno-blue-1-raw"),2:K("--color-juno-blue-2-raw"),3:K("--color-juno-blue-3-raw"),4:K("--color-juno-blue-4-raw"),5:K("--color-juno-blue-5-raw"),6:K("--color-juno-blue-6-raw"),7:K("--color-juno-blue-7-raw"),8:K("--color-juno-blue-8-raw"),9:K("--color-juno-blue-9-raw"),10:K("--color-juno-blue-10-raw"),DEFAULT:K("--color-juno-blue-5-raw")},"juno-turquoise":{1:K("--color-juno-turquoise-1-raw"),2:K("--color-juno-turquoise-2-raw"),3:K("--color-juno-turquoise-3-raw"),4:K("--color-juno-turquoise-4-raw"),5:K("--color-juno-turquoise-5-raw"),6:K("--color-juno-turquoise-6-raw"),7:K("--color-juno-turquoise-7-raw"),8:K("--color-juno-turquoise-8-raw"),9:K("--color-juno-turquoise-9-raw"),10:K("--color-juno-turquoise-10-raw"),DEFAULT:K("--color-juno-turquoise-5-raw")},"juno-grey-light":{1:K("--color-juno-grey-light-1-raw"),2:K("--color-juno-grey-light-2-raw"),3:K("--color-juno-grey-light-3-raw"),4:K("--color-juno-grey-light-4-raw"),5:K("--color-juno-grey-light-5-raw"),6:K("--color-juno-grey-light-6-raw"),7:K("--color-juno-grey-light-7-raw"),8:K("--color-juno-grey-light-8-raw"),9:K("--color-juno-grey-light-9-raw"),10:K("--color-juno-grey-light-10-raw"),11:K("--color-juno-grey-light-11-raw"),DEFAULT:K("--color-juno-grey-light-1-raw")},"juno-red":{1:K("--color-juno-red-1-raw"),2:K("--color-juno-red-2-raw"),3:K("--color-juno-red-3-raw"),4:K("--color-juno-red-4-raw"),5:K("--color-juno-red-5-raw"),6:K("--color-juno-red-6-raw"),7:K("--color-juno-red-7-raw"),8:K("--color-juno-red-8-raw"),DEFAULT:K("--color-juno-red-5-raw")},"sap-grey":{1:K("--color-sap-grey-1-raw"),2:K("--color-sap-grey-2-raw"),3:K("--color-sap-grey-3-raw"),4:K("--color-sap-grey-4-raw"),5:K("--color-sap-grey-5-raw"),6:K("--color-sap-grey-6-raw"),7:K("--color-sap-grey-7-raw"),8:K("--color-sap-grey-8-raw"),DEFAULT:K("--color-sap-grey-8-raw")},"sap-blue":{1:K("--color-sap-blue-1-raw"),2:K("--color-sap-blue-2-raw"),3:K("--color-sap-blue-3-raw"),4:K("--color-sap-blue-4-raw"),5:K("--color-sap-blue-5-raw"),6:K("--color-sap-blue-6-raw"),DEFAULT:K("--color-sap-blue-5-raw")},"sap-gold":{DEFAULT:K("--color-sap-gold-raw")},"sap-purple":{1:K("--color-sap-purple-1-raw"),2:K("--color-sap-purple-2-raw"),3:K("--color-sap-purple-3-raw"),4:K("--color-sap-purple-4-raw"),5:K("--color-sap-purple-5-raw"),6:K("--color-sap-purple-6-raw"),DEFAULT:K("--color-sap-purple-5-raw")},"sap-green":{1:K("--color-sap-green-1-raw"),2:K("--color-sap-green-2-raw"),3:K("--color-sap-green-3-raw"),4:K("--color-sap-green-4-raw"),5:K("--color-sap-green-5-raw"),6:K("--color-sap-green-6-raw"),DEFAULT:K("--color-sap-green-5-raw")},"sap-orange":{1:K("--color-sap-orange-1-raw"),2:K("--color-sap-orange-2-raw"),3:K("--color-sap-orange-3-raw"),4:K("--color-sap-orange-4-raw"),5:K("--color-sap-orange-5-raw"),6:K("--color-sap-orange-6-raw"),DEFAULT:K("--color-sap-orange-5-raw")},white:K("--color-white-raw"),black:K("--color-black-raw"),transparent:"transparent",theme:{accent:K("--color-accent-raw"),danger:K("--color-danger-raw"),error:K("--color-error-raw"),info:K("--color-info-raw"),success:K("--color-success-raw"),warning:K("--color-warning-raw"),focus:K("--color-focus-raw"),"background-lvl-0":K("--color-background-lvl-0-raw"),"background-lvl-1":K("--color-background-lvl-1-raw"),"background-lvl-2":K("--color-background-lvl-2-raw"),"background-lvl-3":K("--color-background-lvl-3-raw"),"background-lvl-4":K("--color-background-lvl-4-raw"),"background-lvl-5":K("--color-background-lvl-5-raw")}},extend:{backgroundColor:{theme:{"global-bg":K("--color-global-bg-raw"),"badge-default":"var(--color-badge-default-bg)","box-default":"var(--color-box-bg)","code-block":K("--color-codeblock-bg"),"content-area-bg":K("--color-content-area-bg-raw"),panel:"var(--color-panel-bg)",textinput:K("--color-textinput-bg"),"textinput-autofill":K("--color-textinput-autofill-bg"),select:K("--color-select-bg"),checkbox:K("--color-checkbox-bg"),radio:K("--color-radio-bg"),"radio-checked":K("--color-radio-checked-bg"),"switch-handle":K("--color-switch-handle-bg"),"switch-handle-checked":K("--color-switch-handle-checked-bg"),required:K("--color-required-bg"),introbox:K("--color-introbox-bg"),"datagridrow-selected":K("--color-datagridrow-selected"),"datalistrow-selected":K("--color-datalistrow-selected"),"message-border-danger":K("--color-message-danger-border"),"message-border-default":K("--color-message-default-border"),"message-border-error":K("--color-message-error-border"),"message-border-warning":K("--color-message-warning-border"),"message-border-success":K("--color-message-success-border"),"tab-navigation-top":K("--color-tabnavigation-top-bg"),filters:K("--color-filters-bg"),"filter-input":K("--color-filter-input-bg"),"filter-input-textinput":K("--color-filter-input-textinput-bg"),"filter-pill-key":K("--color-filter-pill-key-bg"),"modal-backdrop":"var(--color-modal-backdrop-bg)","sidenavigation-item-active":"var(--color-sidenavigation-item-active-bg)","topnavigation-item":"var(--color-topnavigation-item-bg)","topnavigation-item-active":"var(--color-topnavigation-item-active-bg)"}},backgroundImage:{"theme-message-default":"var(--gradient-message-default-bg)","theme-message-success":"var(--gradient-message-success-bg)","theme-message-warning":"var(--gradient-message-warning-bg)","theme-message-danger":"var(--gradient-message-danger-bg)","theme-message-error":"var(--gradient-message-error-bg)"},textColor:{theme:{highest:K("--color-text-highest-raw"),high:K("--color-text-high-raw"),default:K("--color-text-default-raw"),light:K("--color-text-light-raw"),disabled:K("--color-text-disabled-raw"),link:K("--color-text-link-raw"),"on-danger":K("--color-button-danger-text"),"on-default":K("--color-button-default-text"),textinput:K("--color-textinput-text"),"textinput-autofill":K("--color-textinput-autofill-text"),"textinput-autofill-label":K("--color-textinput-autofill-label"),"checkbox-checked":K("--color-checkbox-checked-color"),"sidenavigation-item-active":"var(--color-sidenavigation-item-active)"}},borderColor:{theme:{default:K("--color-default-border"),"codeblock-bar":K("--color-codeblock-bar-border"),"codeblock-tab-active":K("--color-text-default-raw"),"message-default":K("--color-message-default-border"),"message-danger":K("--color-message-danger-border"),"message-error":K("--color-message-error-border"),"message-warning":K("--color-message-warning-border"),"message-success":K("--color-message-success-border"),panel:K("--color-panel-border-raw"),"switch-default":K("--color-switch-default-border"),"switch-hover":K("--color-switch-hover-border"),"datalist-row":K("--color-datalist-row-border"),introbox:K("--color-introbox-border"),"tab-navigation-content-bottom":K("--color-tabnavigation-content-bottom-border"),"tab-active-bottom":K("--color-text-default-raw"),"filter-input":K("--color-filter-input-border"),"filter-pill":K("--color-filter-pill-border"),"box-default":"var(--color-box-border)","textinput-default":K("--color-textinput-default-border"),"tab-content-inactive-bottom":K("--color-background-lvl-4-raw")}},padding:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem","grid-column":"0 .5rem"},height:{textinput:"2.375rem",floatinglabelinput:"3rem","switch-default":"1.4375rem","switch-handle-default":"1.1875rem"},ringOffsetColor:{theme:{focus:K("--color-global-bg-raw")}},screens:{"3xl":"1856px"},width:{"switch-default":"2.625rem","switch-handle-default":"1.1875rem","grid-column-default":"var(--grid-column-default-width)","grid-col-1":"8.333333%","grid-col-2":"16.666667%","grid-col-3":"25%","grid-col-4":"33.333333%","grid-col-5":"41.666667%","grid-col-6":"50%","grid-col-7":"58.333333%","grid-col-8":"66.666667%","grid-col-9":"75%","grid-col-10":"83.333333%","grid-col-11":"91.666667%","grid-col-12":"100%"},borderRadius:{"3px":"3px"},margin:{"grid-row":"0 var(--grid-row-margin-x)"},flex:{"grid-column":"var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis)"}},borderWidth:{DEFAULT:"1px",0:"0",2:"2px",3:"3px",4:"4px",6:"6px"}},plugins:[]};Bw(O7);j.bool;j.bool;p.createContext();j.node,j.oneOf(["head","inline","shadowRoot"]),j.string,j.oneOf(["open","closed"]);const S7="juno-portal-root",Ww=p.createContext(),C7={position:"absolute",top:"0",left:"0"},P7={position:"relative",zIndex:"1"},Vu=t=>{let{children:n=null}=t;const r=p.useContext(Ww),[o,i]=p.useState(!1);if(p.useEffect(()=>{r!=null&&r.current&&i(!0)},[r]),!o)return null;const a=O.createElement("div",{className:"juno-portal",style:P7},n);return Bn.createPortal(a,r.current||document.body)};Vu.propTypes={children:j.node};const Ks=t=>{let{children:n=null,className:r="",id:o=S7}=t;const i=p.useRef(),[a,l]=p.useState(!1);return p.useEffect(()=>{i.current&&l(!0)},[]),O.createElement(Ww.Provider,{value:i},a&&n,O.createElement("div",{className:`juno-portal-root ${r}`,id:o,ref:i,style:C7}))};Ks.Portal=Vu,Vu.displayName="PortalProvider.Portal",Ks.propTypes={className:j.string,id:j.string,children:j.node},Ks.Portal.propTypes={children:j.node};j.bool,j.oneOf(["open","closed"]),j.oneOf(["head","inline"]),j.string,j.any;var _m,$m,I7=["title","titleId"];function Wu(){return Wu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Wu.apply(null,arguments)}function T7(t,n){if(t==null)return{};var r,o,i=D7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function D7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var zm,Uw=function(t){var n=t.title,r=t.titleId,o=T7(t,I7);return p.createElement("svg",Wu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,_m||(_m=p.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),$m||($m=p.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})))},M7=["title","titleId"];function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Uu.apply(null,arguments)}function N7(t,n){if(t==null)return{};var r,o,i=R7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function R7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Hm,qw=function(t){var n=t.title,r=t.titleId,o=N7(t,M7);return p.createElement("svg",Uu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,zm||(zm=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"})))},F7=["title","titleId"];function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},qu.apply(null,arguments)}function L7(t,n){if(t==null)return{};var r,o,i=A7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function A7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Bm,Yw=function(t){var n=t.title,r=t.titleId,o=L7(t,F7);return p.createElement("svg",qu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Hm||(Hm=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))},_7=["title","titleId"];function Yu(){return Yu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Yu.apply(null,arguments)}function $7(t,n){if(t==null)return{};var r,o,i=z7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function z7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Vm,Kw=function(t){var n=t.title,r=t.titleId,o=$7(t,_7);return p.createElement("svg",Yu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Bm||(Bm=p.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"})))},H7=["title","titleId"];function Ku(){return Ku=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ku.apply(null,arguments)}function B7(t,n){if(t==null)return{};var r,o,i=V7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function V7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Wm,Gw=function(t){var n=t.title,r=t.titleId,o=B7(t,H7);return p.createElement("svg",Ku({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Vm||(Vm=p.createElement("path",{d:"M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"})))},W7=["title","titleId"];function Gu(){return Gu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Gu.apply(null,arguments)}function U7(t,n){if(t==null)return{};var r,o,i=q7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function q7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Um,Qw=function(t){var n=t.title,r=t.titleId,o=U7(t,W7);return p.createElement("svg",Gu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Wm||(Wm=p.createElement("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"})))},Y7=["title","titleId"];function Qu(){return Qu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Qu.apply(null,arguments)}function K7(t,n){if(t==null)return{};var r,o,i=G7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function G7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var qm,Jw=function(t){var n=t.title,r=t.titleId,o=K7(t,Y7);return p.createElement("svg",Qu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Um||(Um=p.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"})))},Q7=["title","titleId"];function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ju.apply(null,arguments)}function J7(t,n){if(t==null)return{};var r,o,i=Z7(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Z7(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ym,Zw=function(t){var n=t.title,r=t.titleId,o=J7(t,Q7);return p.createElement("svg",Ju({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,qm||(qm=p.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})))},X7=["title","titleId"];function Zu(){return Zu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Zu.apply(null,arguments)}function eM(t,n){if(t==null)return{};var r,o,i=tM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function tM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Km,Xw=function(t){var n=t.title,r=t.titleId,o=eM(t,X7);return p.createElement("svg",Zu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ym||(Ym=p.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})))},nM=["title","titleId"];function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Xu.apply(null,arguments)}function rM(t,n){if(t==null)return{};var r,o,i=oM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function oM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Gm,ex=function(t){var n=t.title,r=t.titleId,o=rM(t,nM);return p.createElement("svg",Xu({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Km||(Km=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},iM=["title","titleId"];function ed(){return ed=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ed.apply(null,arguments)}function aM(t,n){if(t==null)return{};var r,o,i=lM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function lM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Qm,tx=function(t){var n=t.title,r=t.titleId,o=aM(t,iM);return p.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Gm||(Gm=p.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})))},sM=["title","titleId"];function td(){return td=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},td.apply(null,arguments)}function cM(t,n){if(t==null)return{};var r,o,i=uM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function uM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Jm,nx=function(t){var n=t.title,r=t.titleId,o=cM(t,sM);return p.createElement("svg",td({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Qm||(Qm=p.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})))},dM=["title","titleId"];function nd(){return nd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},nd.apply(null,arguments)}function fM(t,n){if(t==null)return{};var r,o,i=pM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function pM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Zm,rx=function(t){var n=t.title,r=t.titleId,o=fM(t,dM);return p.createElement("svg",nd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Jm||(Jm=p.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},gM=["title","titleId"];function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},rd.apply(null,arguments)}function hM(t,n){if(t==null)return{};var r,o,i=mM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function mM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Xm,ox=function(t){var n=t.title,r=t.titleId,o=hM(t,gM);return p.createElement("svg",rd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Zm||(Zm=p.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))},bM=["title","titleId"];function od(){return od=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},od.apply(null,arguments)}function vM(t,n){if(t==null)return{};var r,o,i=yM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function yM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var eb,ix=function(t){var n=t.title,r=t.titleId,o=vM(t,bM);return p.createElement("svg",od({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Xm||(Xm=p.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))},wM=["title","titleId"];function id(){return id=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},id.apply(null,arguments)}function xM(t,n){if(t==null)return{};var r,o,i=jM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function jM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var tb,cl=function(t){var n=t.title,r=t.titleId,o=xM(t,wM);return p.createElement("svg",id({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,eb||(eb=p.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"})))},EM=["title","titleId"];function ad(){return ad=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ad.apply(null,arguments)}function kM(t,n){if(t==null)return{};var r,o,i=OM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function OM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var nb,ax=function(t){var n=t.title,r=t.titleId,o=kM(t,EM);return p.createElement("svg",ad({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,tb||(tb=p.createElement("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"})))},SM=["title","titleId"];function ld(){return ld=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ld.apply(null,arguments)}function CM(t,n){if(t==null)return{};var r,o,i=PM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function PM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var rb,lx=function(t){var n=t.title,r=t.titleId,o=CM(t,SM);return p.createElement("svg",ld({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,nb||(nb=p.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))},IM=["title","titleId"];function sd(){return sd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},sd.apply(null,arguments)}function TM(t,n){if(t==null)return{};var r,o,i=DM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function DM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ob,sx=function(t){var n=t.title,r=t.titleId,o=TM(t,IM);return p.createElement("svg",sd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,rb||(rb=p.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))},MM=["title","titleId"];function cd(){return cd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},cd.apply(null,arguments)}function NM(t,n){if(t==null)return{};var r,o,i=RM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function RM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ib,cx=function(t){var n=t.title,r=t.titleId,o=NM(t,MM);return p.createElement("svg",cd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ob||(ob=p.createElement("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},FM=["title","titleId"];function ud(){return ud=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ud.apply(null,arguments)}function LM(t,n){if(t==null)return{};var r,o,i=AM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function AM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ab,ux=function(t){var n=t.title,r=t.titleId,o=LM(t,FM);return p.createElement("svg",ud({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ib||(ib=p.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))},_M=["title","titleId"];function dd(){return dd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},dd.apply(null,arguments)}function $M(t,n){if(t==null)return{};var r,o,i=zM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function zM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var lb,dx=function(t){var n=t.title,r=t.titleId,o=$M(t,_M);return p.createElement("svg",dd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ab||(ab=p.createElement("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))},HM=["title","titleId"];function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},fd.apply(null,arguments)}function BM(t,n){if(t==null)return{};var r,o,i=VM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function VM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var sb,fx=function(t){var n=t.title,r=t.titleId,o=BM(t,HM);return p.createElement("svg",fd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,lb||(lb=p.createElement("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})))},WM=["title","titleId"];function pd(){return pd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},pd.apply(null,arguments)}function UM(t,n){if(t==null)return{};var r,o,i=qM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function qM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var cb,px=function(t){var n=t.title,r=t.titleId,o=UM(t,WM);return p.createElement("svg",pd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,sb||(sb=p.createElement("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})))},YM=["title","titleId"];function gd(){return gd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},gd.apply(null,arguments)}function KM(t,n){if(t==null)return{};var r,o,i=GM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function GM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var ub,gx=function(t){var n=t.title,r=t.titleId,o=KM(t,YM);return p.createElement("svg",gd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,cb||(cb=p.createElement("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))},QM=["title","titleId"];function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},hd.apply(null,arguments)}function JM(t,n){if(t==null)return{};var r,o,i=ZM(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ZM(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var db,hx=function(t){var n=t.title,r=t.titleId,o=JM(t,QM);return p.createElement("svg",hd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,ub||(ub=p.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"})))},XM=["title","titleId"];function md(){return md=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},md.apply(null,arguments)}function eN(t,n){if(t==null)return{};var r,o,i=tN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function tN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var fb,mx=function(t){var n=t.title,r=t.titleId,o=eN(t,XM);return p.createElement("svg",md({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,db||(db=p.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})))},nN=["title","titleId"];function bd(){return bd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},bd.apply(null,arguments)}function rN(t,n){if(t==null)return{};var r,o,i=oN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function oN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var pb,gb,ko=function(t){var n=t.title,r=t.titleId,o=rN(t,nN);return p.createElement("svg",bd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,fb||(fb=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})))},iN=["title","titleId"];function vd(){return vd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},vd.apply(null,arguments)}function aN(t,n){if(t==null)return{};var r,o,i=lN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function lN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var hb,bx=function(t){var n=t.title,r=t.titleId,o=aN(t,iN);return p.createElement("svg",vd({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,pb||(pb=p.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),gb||(gb=p.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))},sN=["title","titleId"];function yd(){return yd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},yd.apply(null,arguments)}function cN(t,n){if(t==null)return{};var r,o,i=uN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function uN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var mb,vx=function(t){var n=t.title,r=t.titleId,o=cN(t,sN);return p.createElement("svg",yd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,hb||(hb=p.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})))},dN=["title","titleId"];function wd(){return wd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},wd.apply(null,arguments)}function fN(t,n){if(t==null)return{};var r,o,i=pN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function pN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var bb,vb,yx=function(t){var n=t.title,r=t.titleId,o=fN(t,dN);return p.createElement("svg",wd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,mb||(mb=p.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))},gN=["title","titleId"];function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},xd.apply(null,arguments)}function hN(t,n){if(t==null)return{};var r,o,i=mN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function mN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var yb,wb,wx=function(t){var n=t.title,r=t.titleId,o=hN(t,gN);return p.createElement("svg",xd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,bb||(bb=p.createElement("circle",{cx:10,cy:8,r:4})),vb||(vb=p.createElement("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})))},bN=["title","titleId"];function jd(){return jd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},jd.apply(null,arguments)}function vN(t,n){if(t==null)return{};var r,o,i=yN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function yN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var xb,xx=function(t){var n=t.title,r=t.titleId,o=vN(t,bN);return p.createElement("svg",jd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,yb||(yb=p.createElement("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zm0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z"})),wb||(wb=p.createElement("path",{d:"M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z"})))},wN=["title","titleId"];function Ed(){return Ed=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ed.apply(null,arguments)}function xN(t,n){if(t==null)return{};var r,o,i=jN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function jN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var jb,Eb,jx=function(t){var n=t.title,r=t.titleId,o=xN(t,wN);return p.createElement("svg",Ed({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,xb||(xb=p.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))},EN=["title","titleId"];function kd(){return kd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},kd.apply(null,arguments)}function kN(t,n){if(t==null)return{};var r,o,i=ON(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ON(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var kb,Ex=function(t){var n=t.title,r=t.titleId,o=kN(t,EN);return p.createElement("svg",kd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,jb||(jb=p.createElement("path",{d:"M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86a8 8 0 0 1-5.61 1.01c-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"})),Eb||(Eb=p.createElement("path",{d:"M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"})))},SN=["title","titleId"];function Od(){return Od=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Od.apply(null,arguments)}function CN(t,n){if(t==null)return{};var r,o,i=PN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function PN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ob,kx=function(t){var n=t.title,r=t.titleId,o=CN(t,SN);return p.createElement("svg",Od({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,kb||(kb=p.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"})))},IN=["title","titleId"];function Sd(){return Sd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Sd.apply(null,arguments)}function TN(t,n){if(t==null)return{};var r,o,i=DN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function DN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Sb,Ox=function(t){var n=t.title,r=t.titleId,o=TN(t,IN);return p.createElement("svg",Sd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ob||(Ob=p.createElement("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"})))},MN=["title","titleId"];function Cd(){return Cd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Cd.apply(null,arguments)}function NN(t,n){if(t==null)return{};var r,o,i=RN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function RN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Cb,Pb,Sx=function(t){var n=t.title,r=t.titleId,o=NN(t,MN);return p.createElement("svg",Cd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Sb||(Sb=p.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})))},FN=["title","titleId"];function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Pd.apply(null,arguments)}function LN(t,n){if(t==null)return{};var r,o,i=AN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function AN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ib,Cx=function(t){var n=t.title,r=t.titleId,o=LN(t,FN);return p.createElement("svg",Pd({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Cb||(Cb=p.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Pb||(Pb=p.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))},_N=["title","titleId"];function Id(){return Id=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Id.apply(null,arguments)}function $N(t,n){if(t==null)return{};var r,o,i=zN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function zN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Tb,Px=function(t){var n=t.title,r=t.titleId,o=$N(t,_N);return p.createElement("svg",Id({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Ib||(Ib=p.createElement("path",{d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},HN=["title","titleId"];function Td(){return Td=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Td.apply(null,arguments)}function BN(t,n){if(t==null)return{};var r,o,i=VN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function VN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Db,Mb,Nb,Rb,Ix=function(t){var n=t.title,r=t.titleId,o=BN(t,HN);return p.createElement("svg",Td({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Tb||(Tb=p.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))},WN=["title","titleId"];function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Dd.apply(null,arguments)}function UN(t,n){if(t==null)return{};var r,o,i=qN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function qN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Fb,Lb,Ab,_b,Tx=function(t){var n=t.title,r=t.titleId,o=UN(t,WN);return p.createElement("svg",Dd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Db||(Db=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Mb||(Mb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Nb||(Nb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),Rb||(Rb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},YN=["title","titleId"];function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Md.apply(null,arguments)}function KN(t,n){if(t==null)return{};var r,o,i=GN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function GN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var $b,zb,Hb,Bb,Dx=function(t){var n=t.title,r=t.titleId,o=KN(t,YN);return p.createElement("svg",Md({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Fb||(Fb=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Lb||(Lb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Ab||(Ab=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_b||(_b=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))},QN=["title","titleId"];function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Nd.apply(null,arguments)}function JN(t,n){if(t==null)return{};var r,o,i=ZN(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ZN(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Vb,Wb,Ub,Mx=function(t){var n=t.title,r=t.titleId,o=JN(t,QN);return p.createElement("svg",Nd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,$b||($b=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),zb||(zb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Hb||(Hb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),Bb||(Bb=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))},XN=["title","titleId"];function Rd(){return Rd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Rd.apply(null,arguments)}function eR(t,n){if(t==null)return{};var r,o,i=tR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function tR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var qb,Nx=function(t){var n=t.title,r=t.titleId,o=eR(t,XN);return p.createElement("svg",Rd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Vb||(Vb=p.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),Wb||(Wb=p.createElement("path",{d:"M2 17H8V23H2V17Z"})),Ub||(Ub=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))},nR=["title","titleId"];function Fd(){return Fd=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Fd.apply(null,arguments)}function rR(t,n){if(t==null)return{};var r,o,i=oR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function oR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Yb,Rx=function(t){var n=t.title,r=t.titleId,o=rR(t,nR);return p.createElement("svg",Fd({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,qb||(qb=p.createElement("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"})))},iR=["title","titleId"];function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ld.apply(null,arguments)}function aR(t,n){if(t==null)return{};var r,o,i=lR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function lR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Kb,Fx=function(t){var n=t.title,r=t.titleId,o=aR(t,iR);return p.createElement("svg",Ld({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Yb||(Yb=p.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})))},sR=["title","titleId"];function Ad(){return Ad=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Ad.apply(null,arguments)}function cR(t,n){if(t==null)return{};var r,o,i=uR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function uR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Gb,Lx=function(t){var n=t.title,r=t.titleId,o=cR(t,sR);return p.createElement("svg",Ad({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Kb||(Kb=p.createElement("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"})))},dR=["title","titleId"];function _d(){return _d=Object.assign?Object.assign.bind():function(t){for(var n,r=1;r<arguments.length;r++)for(var o in n=arguments[r],n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},_d.apply(null,arguments)}function fR(t,n){if(t==null)return{};var r,o,i=pR(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function pR(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}var Ax=function(t){var n=t.title,r=t.titleId,o=fR(t,dR);return p.createElement("svg",_d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":r},o),n?p.createElement("title",{id:r},n):null,Gb||(Gb=p.createElement("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"})))};const gR=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,hR=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,rr=["accessTime","accountCircle","addCircle","autoAwesomeMosaic","autoAwesomeMotion","bolt","calendarToday","cancel","check","checkCircle","chevronLeft","chevronRight","close","comment","contentCopy","danger","dangerous","default","deleteForever","description","dns","download","edit","error","errorOutline","exitToApp","expandLess","expandMore","filterAlt","forum","help","home","info","manageAccounts","monitorHeart","moreVert","nightsStay","notificationsOff","openInBrowser","openInNew","place","search","severityLow","severityMedium","severityHigh","severityCritical","success","upload","warning","wbSunny","widgets"],mR=t=>{let{icon:n,color:r,size:o,title:i,iconClassName:a,...l}=t;const c=`juno-icon juno-icon-${n} jn-fill-current ${r} ${a}`;return n==="accessTime"?O.createElement(Uw,xe({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):n==="accountCircle"?O.createElement(qw,xe({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):n==="addCircle"?O.createElement(Yw,xe({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):n==="autoAwesomeMosaic"?O.createElement(Kw,xe({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):n==="autoAwesomeMotion"?O.createElement(Gw,xe({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):n==="bolt"?O.createElement(Qw,xe({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):n==="calendarToday"?O.createElement(Jw,xe({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):n==="cancel"?O.createElement(Zw,xe({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):n==="check"?O.createElement(Xw,xe({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):n==="checkCircle"?O.createElement(ex,xe({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):n==="chevronLeft"?O.createElement(tx,xe({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):n==="chevronRight"?O.createElement(nx,xe({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):n==="close"?O.createElement(rx,xe({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):n==="comment"?O.createElement(yx,xe({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):n==="contentCopy"?O.createElement(ox,xe({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):n==="danger"?O.createElement(ix,xe({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):n==="dangerous"?O.createElement(cl,xe({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):n==="deleteForever"?O.createElement(lx,xe({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):n==="description"?O.createElement(sx,xe({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):n==="dns"?O.createElement(cx,xe({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):n==="download"?O.createElement(ax,xe({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):n==="edit"?O.createElement(ux,xe({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):n==="error"?O.createElement(cl,xe({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):n==="errorOutline"?O.createElement(dx,xe({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):n==="exitToApp"?O.createElement(fx,xe({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):n==="expandLess"?O.createElement(px,xe({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):n==="expandMore"?O.createElement(gx,xe({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):n==="filterAlt"?O.createElement(hx,xe({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):n==="forum"?O.createElement(mx,xe({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):n==="help"?O.createElement(ko,xe({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):n==="home"?O.createElement(bx,xe({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):n==="info"?O.createElement(vx,xe({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):n==="manageAccounts"?O.createElement(wx,xe({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):n==="monitorHeart"?O.createElement(xx,xe({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):n==="moreVert"?O.createElement(jx,xe({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):n==="nightsStay"?O.createElement(Ex,xe({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):n==="notificationsOff"?O.createElement(kx,xe({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):n==="openInBrowser"?O.createElement(Ox,xe({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):n==="openInNew"?O.createElement(Sx,xe({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):n==="place"?O.createElement(Cx,xe({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):n==="search"?O.createElement(Ix,xe({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):n==="severityLow"?O.createElement(Tx,xe({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):n==="severityMedium"?O.createElement(Dx,xe({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):n==="severityHigh"?O.createElement(Mx,xe({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):n==="severityCritical"?O.createElement(Nx,xe({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):n==="success"?O.createElement(Px,xe({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):n==="upload"?O.createElement(Rx,xe({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):n==="widgets"?O.createElement(Ax,xe({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):n==="warning"?O.createElement(Fx,xe({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):n==="wbSunny"?O.createElement(Lx,xe({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):n==="default"?O.createElement(ko,xe({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):O.createElement(ko,xe({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},Ni=p.forwardRef((t,n)=>{let{icon:r=null,color:o="",size:i="24",title:a="",className:l="",href:c="",disabled:u=!1,onClick:d,...f}=t;const g=c||d?"":l,b=c||d?{}:f,h=mR({icon:r,color:o,size:i,title:a,iconClassName:g,...b}),m=O.createElement("button",xe({onClick:E=>{d&&d(E)},className:`juno-icon-button ${hR} ${l}`,"aria-label":a||r,disabled:u,ref:n},f),h),y=O.createElement("a",xe({href:c,className:`juno-icon-link ${gR} ${l}`,"aria-label":a||r,ref:n},f),h);return c?y:d?m:O.createElement("span",{ref:n},h)});Ni.displayName="Icon",Ni.propTypes={icon:j.oneOf(rr),color:j.string,size:j.string,title:j.string,className:j.string,href:j.string,disabled:j.bool,onClick:j.func};const bR=["info","success","warning","danger","error","critical"];j.oneOf(["default",...bR]),j.oneOfType([j.bool,j.oneOf(rr)]),j.string,j.string,j.node;j.node,j.bool,j.string;j.oneOf(rr),j.string,j.string,j.string,j.bool,j.func,j.bool,j.string,j.node;j.node,j.string,j.oneOf(["horizontal","vertical"]),j.oneOf(["start","end","center","baseline","stretch"]),j.oneOf(["start","end","center","between","around","evenly"]),j.bool,j.oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"]);j.string,j.node;var Oe,vR=`
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,yR=`
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`;(function(t){t.accessTime="accessTime",t.accountCircle="accountCircle",t.addCircle="addCircle",t.autoAwesomeMosaic="autoAwesomeMosaic",t.autoAwesomeMotion="autoAwesomeMotion",t.bolt="bolt",t.calendarToday="calendarToday",t.cancel="cancel",t.check="check",t.checkCircle="checkCircle",t.chevronLeft="chevronLeft",t.chevronRight="chevronRight",t.close="close",t.comment="comment",t.contentCopy="contentCopy",t.danger="danger",t.dangerous="dangerous",t.default="default",t.deleteForever="deleteForever",t.description="description",t.dns="dns",t.download="download",t.edit="edit",t.error="error",t.errorOutline="errorOutline",t.exitToApp="exitToApp",t.expandLess="expandLess",t.expandMore="expandMore",t.filterAlt="filterAlt",t.forum="forum",t.help="help",t.home="home",t.info="info",t.manageAccounts="manageAccounts",t.monitorHeart="monitorHeart",t.moreVert="moreVert",t.nightsStay="nightsStay",t.notificationsOff="notificationsOff",t.openInBrowser="openInBrowser",t.openInNew="openInNew",t.place="place",t.search="search",t.severityLow="severityLow",t.severityMedium="severityMedium",t.severityHigh="severityHigh",t.severityCritical="severityCritical",t.success="success",t.upload="upload",t.warning="warning",t.wbSunny="wbSunny",t.widgets="widgets"})(Oe||(Oe={}));var wR=function(t){var n=t.icon,r=t.color,o=t.size,i=t.title,a=t.iconClassName,l=Wn(t,["icon","color","size","title","iconClassName"]),c="juno-icon juno-icon-".concat(n," jn-fill-current ").concat(r," ").concat(a),u=Oe[n||"default"];return u===Oe.accessTime?O.createElement(Uw,be({width:o,height:o,className:c,alt:"time",title:i||"Time",role:"img"},l)):u===Oe.accountCircle?O.createElement(qw,be({width:o,height:o,className:c,alt:"account",title:i||"Account",role:"img"},l)):u===Oe.addCircle?O.createElement(Yw,be({width:o,height:o,className:c,alt:"add",title:i||"Add",role:"img"},l)):u===Oe.autoAwesomeMosaic?O.createElement(Kw,be({width:o,height:o,className:c,alt:"mosaic",title:i||"Mosaic",role:"img"},l)):u===Oe.autoAwesomeMotion?O.createElement(Gw,be({width:o,height:o,className:c,alt:"items stacked behind each other",title:i||"Items stacked behind each other",role:"img"},l)):u===Oe.bolt?O.createElement(Qw,be({width:o,height:o,className:c,alt:"bolt",title:i||"Bolt",role:"img"},l)):u===Oe.calendarToday?O.createElement(Jw,be({width:o,height:o,className:c,alt:"calendar",title:i||"Calendar",role:"img"},l)):u===Oe.cancel?O.createElement(Zw,be({width:o,height:o,className:c,alt:"cancel",title:i||"Cancel",role:"img"},l)):u===Oe.check?O.createElement(Xw,be({width:o,height:o,className:c,alt:"check",title:i||"Check",role:"img"},l)):u===Oe.checkCircle?O.createElement(ex,be({width:o,height:o,className:c,alt:"checkCircle",title:i||"CheckCircle",role:"img"},l)):u===Oe.chevronLeft?O.createElement(tx,be({width:o,height:o,className:c,alt:"chevronLeft",title:i||"ChevronLeft",role:"img"},l)):u===Oe.chevronRight?O.createElement(nx,be({width:o,height:o,className:c,alt:"chevronRight",title:i||"ChevronRight",role:"img"},l)):u===Oe.close?O.createElement(rx,be({width:o,height:o,className:c,alt:"close",title:i||"Close",role:"img"},l)):u===Oe.comment?O.createElement(yx,be({width:o,height:o,className:c,alt:"comment",title:i||"Comment",role:"img"},l)):u===Oe.contentCopy?O.createElement(ox,be({width:o,height:o,className:c,alt:"copy",title:i||"Copy",role:"img"},l)):u===Oe.danger?O.createElement(ix,be({width:o,height:o,className:c,alt:"danger",title:i||"Danger",role:"img"},l)):u===Oe.dangerous?O.createElement(cl,be({width:o,height:o,className:c,alt:"dangerous",title:i||"Dangerous",role:"img"},l)):u===Oe.deleteForever?O.createElement(lx,be({width:o,height:o,className:c,alt:"delete forever",title:i||"Delete Forever",role:"img"},l)):u===Oe.description?O.createElement(sx,be({width:o,height:o,className:c,alt:"description",title:i||"Description",role:"img"},l)):u===Oe.dns?O.createElement(cx,be({width:o,height:o,className:c,alt:"service",title:i||"Service",role:"img"},l)):u===Oe.download?O.createElement(ax,be({width:o,height:o,className:c,alt:"download",title:i||"download",role:"img"},l)):u===Oe.edit?O.createElement(ux,be({width:o,height:o,className:c,alt:"edit",title:i||"Edit",role:"img"},l)):u===Oe.error?O.createElement(cl,be({width:o,height:o,className:c,alt:"error",title:i||"Error",role:"img"},l)):u===Oe.errorOutline?O.createElement(dx,be({width:o,height:o,className:c,alt:"error outline",title:i||"Error",role:"img"},l)):u===Oe.exitToApp?O.createElement(fx,be({width:o,height:o,className:c,alt:"exit to other app",title:i||"Exit to app",role:"img"},l)):u===Oe.expandLess?O.createElement(px,be({width:o,height:o,className:c,alt:"expand less",title:i||"Expand Less",role:"img"},l)):u===Oe.expandMore?O.createElement(gx,be({width:o,height:o,className:c,alt:"expand more",title:i||"Expand More",role:"img"},l)):u===Oe.filterAlt?O.createElement(hx,be({width:o,height:o,className:c,alt:"filter",title:i||"Filter",role:"img"},l)):u===Oe.forum?O.createElement(mx,be({width:o,height:o,className:c,alt:"forum",title:i||"Forum",role:"img"},l)):u===Oe.help?O.createElement(ko,be({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):u===Oe.home?O.createElement(bx,be({width:o,height:o,className:c,alt:"home",title:i||"Home",role:"img"},l)):u===Oe.info?O.createElement(vx,be({width:o,height:o,className:c,alt:"info",title:i||"Info",role:"img"},l)):u===Oe.manageAccounts?O.createElement(wx,be({width:o,height:o,className:c,alt:"user account configuration",title:i||"User account configuration",role:"img"},l)):u===Oe.monitorHeart?O.createElement(xx,be({width:o,height:o,className:c,alt:"heart monitor",title:i||"Heart monitor",role:"img"},l)):u===Oe.moreVert?O.createElement(jx,be({width:o,height:o,className:c,alt:"more",title:i||"More",role:"img"},l)):u===Oe.nightsStay?O.createElement(Ex,be({width:o,height:o,className:c,alt:"nights stay",title:i||"Nights stay",role:"img"},l)):u===Oe.notificationsOff?O.createElement(kx,be({width:o,height:o,className:c,alt:"notifications off",title:i||"Notifications off",role:"img"},l)):u===Oe.openInBrowser?O.createElement(Ox,be({width:o,height:o,className:c,alt:"open in browser",title:i||"Open in browser",role:"img"},l)):u===Oe.openInNew?O.createElement(Sx,be({width:o,height:o,className:c,alt:"open in new tab",title:i||"Open in new tab",role:"img"},l)):u===Oe.place?O.createElement(Cx,be({width:o,height:o,className:c,alt:"location",title:i||"Location",role:"img"},l)):u===Oe.search?O.createElement(Ix,be({width:o,height:o,className:c,alt:"search",title:i||"Search",role:"img"},l)):u===Oe.severityLow?O.createElement(Tx,be({width:o,height:o,className:c,alt:"Severity low",title:i||"Severity Low",role:"img"},l)):u===Oe.severityMedium?O.createElement(Dx,be({width:o,height:o,className:c,alt:"Severity medium",title:i||"Severity Medium",role:"img"},l)):u===Oe.severityHigh?O.createElement(Mx,be({width:o,height:o,className:c,alt:"Severity high",title:i||"Severity High",role:"img"},l)):u===Oe.severityCritical?O.createElement(Nx,be({width:o,height:o,className:c,alt:"Severity critical",title:i||"Severity Critical",role:"img"},l)):u===Oe.success?O.createElement(Px,be({width:o,height:o,className:c,alt:"success",title:i||"Success",role:"img"},l)):u===Oe.upload?O.createElement(Rx,be({width:o,height:o,className:c,alt:"upload",title:i||"Upload",role:"img"},l)):u===Oe.widgets?O.createElement(Ax,be({width:o,height:o,className:c,alt:"widgets",title:i||"Widgets",role:"img"},l)):u===Oe.warning?O.createElement(Fx,be({width:o,height:o,className:c,alt:"warning",title:i||"Warning",role:"img"},l)):u===Oe.wbSunny?O.createElement(Lx,be({width:o,height:o,className:c,alt:"wb sunny",title:i||"WBSunny",role:"img"},l)):u===Oe.default?O.createElement(ko,be({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l)):O.createElement(ko,be({width:o,height:o,className:c,alt:"help",title:i||"Help",role:"img"},l))},ip=p.forwardRef(function(t,n){var r=t.icon,o=r===void 0?null:r,i=t.color,a=i===void 0?"":i,l=t.size,c=l===void 0?24:l,u=t.title,d=u===void 0?"":u,f=t.className,g=f===void 0?"":f,b=t.href,h=b===void 0?"":b,m=t.disabled,y=t.onClick,E=Wn(t,["icon","color","size","title","className","href","disabled","onClick"]),v=h||y?"":g,k=h||y?{}:E,C=wR(be({icon:o||void 0,color:a,size:c,title:d,iconClassName:v},k)),D=O.createElement("button",be({},E,{type:"button",onClick:function(T){y&&y(T)},className:"juno-icon-button ".concat(yR," ").concat(g),"aria-label":d||o||void 0,disabled:m!==void 0&&m,ref:n}),C),I=O.createElement("a",be({},E,{"aria-label":d||o||void 0,href:h,className:"juno-icon-link ".concat(vR," ").concat(g),ref:n}),C);return h?I:y?D:O.createElement("span",{ref:n},C)});ip.displayName="IconTs";var xR=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,jR=`
  jn-text-theme-accent
`,ER=`
  jn-text-theme-danger 
`,kR=`
  jn-text-theme-success
`,OR=`
  jn-text-theme-warning  
`,SR=`
  jn-text-theme-on-default
`,CR=function(t){var n=t.variant,r=n===void 0?"default":n,o=t.size,i=o===void 0?null:o,a=t.className,l=a===void 0?"":a,c=t.color,u=c===void 0?"":c,d=Wn(t,["variant","size","className","color"]),f=function(b){return b==="small"?"1rem":b==="large"?"3rem":b},g=i?{width:f(i),height:f(i)}:{};return O.createElement("svg",be({className:"juno-spinner ".concat(xR," ").concat(u||function(){return r==="primary"?jR:r==="danger"?ER:r==="success"?kR:r==="warning"?OR:SR}()," ").concat(l),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:g,role:"progressbar"},d),O.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),O.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))},Qb=`
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
`,Jb=`
  jn-text-sm
  jn-leading-5
`,Zb=`
  jn-text-base
  jn-leading-6
`,PR=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,IR=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,TR=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,DR=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,Xb=function(t,n){return t==="small"?n==="subdued"?"".concat(IR):"".concat(PR):n==="subdued"?"".concat(DR):"".concat(TR)},MR=`
  jn-mr-2
`,NR=`
  jn-mr-2
`,RR=function(t){return t==="small"?"".concat(MR):"".concat(NR)},ev=function(t){var n=t?"in-progress":"";return n},FR=function(t){return t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":""},LR=O.forwardRef(function(t,n){var r=t.label,o=t.title,i=o===void 0?null:o,a=t.variant,l=t.size,c=l===void 0?"default":l,u=t.disabled,d=u===void 0?null:u,f=t.href,g=f===void 0?null:f,b=t.icon,h=b===void 0?null:b,m=t.className,y=m===void 0?"":m,E=t.onClick,v=t.children,k=t.progress,C=k!==void 0&&k,D=t.progressLabel,I=D===void 0?"":D,T=Wn(t,["label","title","variant","size","disabled","href","icon","className","onClick","children","progress","progressLabel"]),z=a||"default",A=i||r||"",Q=C?O.createElement(CR,{size:c==="small"?"1.125rem":"1.5rem",color:"".concat(FR(z))}):h?O.createElement(ip,{icon:h,title:A,className:"juno-button-icon ".concat(r||v?RR(c):""," "),size:c==="small"?"1.125rem":"1.5rem"}):null,B=C&&I?I:r||v,F=O.createElement("button",be({className:`
          juno-button 
          juno-button-`.concat(z,` 
          juno-button-`).concat(c,`-size 
          `).concat(Qb,` 
          `).concat(c==="small"?Jb:Zb,` 
          `).concat(Xb(c,a),`
          `).concat(ev(C),` 
          `).concat(y),disabled:d||void 0,onClick:function(_){E&&E(_)},ref:n},T,{type:"button",title:A}),Q,B),L=O.createElement("a",be({href:g||void 0,role:"button",className:`
          juno-button 
          juno-button-`.concat(z,` 
          juno-button-`).concat(c,`-size 
          `).concat(Qb,` 
          `).concat(c==="small"?Jb:Zb,`
          `).concat(Xb(c,a),`
          `).concat(ev(C),` 
          `).concat(y,`
        `),disabled:d,onClick:E,ref:n},T,{title:A}),Q,B);return g?L:F});LR.displayName="Button";var AR=`
  jn-text-theme-high
  jn-text-base
  jn-transform 
  jn-origin-top-left 
  jn-transition-all 
  jn-duration-100 
  jn-ease-in-out
  jn-z-10
`,_R=`
  jn-absolute
`,$R=`
  jn-scale-75
  -jn-translate-y-[0.4375rem]
`,zR=`
  jn-inline-block
  jn-w-1
  jn-h-1
  jn-rounded-full
  jn-align-top
  jn-ml-1
  jn-mt-2
  jn-bg-theme-required
`,HR=`
  jn-opacity-50
  jn-cursor-not-allowed
`,BR=O.forwardRef(function(t,n){var r=t.text,o=r===void 0?"":r,i=t.htmlFor,a=i===void 0?void 0:i,l=t.required,c=t.className,u=c===void 0?"":c,d=t.disabled,f=t.floating,g=t.minimized,b=Wn(t,["text","htmlFor","required","className","disabled","floating","minimized"]);return O.createElement("label",be({className:`
        juno-label 
        `.concat(AR,` 
        `).concat(f!==void 0&&f?"juno-label-floating "+_R:"",`
        `).concat(g!==void 0&&g?"juno-label-minimized "+$R:"",`
        `).concat(d!==void 0&&d?"juno-label-disabled "+HR:"",` 
        `).concat(u,`
      `),htmlFor:a,ref:n},b),o,l!==void 0&&l?O.createElement("span",{className:`
          juno-required 
          `.concat(zR,`
          `)}):"")});BR.displayName="Label";p.createContext(void 0);j.string,j.string,j.node;j.string,j.oneOf(["rounded","hero","default"]),j.bool,j.string,j.string,j.string,j.bool,j.string,j.func,j.func,j.func,j.func,j.func;const VR={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"};O.createContext(VR);j.bool;j.string;j.oneOfType([j.string,j.number]);j.string,j.any;j.oneOfType([j.string,j.number,j.bool]),j.any,j.number;j.oneOfType([j.object,j.array]).isRequired,j.object,j.bool,j.bool,j.oneOfType([j.shape({base00:j.string,base01:j.string,base02:j.string,base03:j.string,base04:j.string,base05:j.string,base06:j.string,base07:j.string,base08:j.string,base09:j.string,base0A:j.string,base0B:j.string,base0C:j.string,base0D:j.string,base0E:j.string,base0F:j.string}),j.oneOf(["dark","light"])]),j.oneOfType([j.number,j.bool]),j.oneOfType([j.bool,j.number]),j.number,j.string;j.oneOfType([j.string,j.object]),j.oneOfType([j.node,j.object]),j.string,j.bool,j.oneOf(["auto","small","medium","large"]),j.bool,j.string,j.string;var WR=Object.defineProperty,UR=(t,n,r)=>n in t?WR(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,Gs=(t,n,r)=>(UR(t,typeof n=="symbol"?n:n+"",r),r);let qR=class{constructor(){Gs(this,"current",this.detect()),Gs(this,"handoffState","pending"),Gs(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},nr=new qR,Qe=(t,n)=>{nr.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)};function yn(t){let n=p.useRef(t);return Qe(()=>{n.current=t},[t]),n}let ge=function(t){let n=yn(t);return O.useCallback(function(){return n.current(...arguments)},[n])};function _x(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(n=>setTimeout(()=>{throw n}))}function Vt(){let t=[],n={addEventListener(r,o,i,a){return r.addEventListener(o,i,a),n.add(()=>r.removeEventListener(o,i,a))},requestAnimationFrame(){let r=requestAnimationFrame(...arguments);return n.add(()=>cancelAnimationFrame(r))},nextFrame(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...o))},setTimeout(){let r=setTimeout(...arguments);return n.add(()=>clearTimeout(r))},microTask(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];let a={current:!0};return _x(()=>{a.current&&o[0]()}),n.add(()=>{a.current=!1})},style(r,o,i){let a=r.style.getPropertyValue(o);return Object.assign(r.style,{[o]:i}),this.add(()=>{Object.assign(r.style,{[o]:a})})},group(r){let o=Vt();return r(o),this.add(()=>o.dispose())},add(r){return t.push(r),()=>{let o=t.indexOf(r);if(0<=o)for(let i of t.splice(o,1))i()}},dispose(){for(let r of t.splice(0))r()}};return n}function En(){let[t]=p.useState(Vt);return p.useEffect(()=>()=>t.dispose(),[t]),t}function YR(){let t=typeof document>"u";return"useSyncExternalStore"in eo&&(n=>n.useSyncExternalStore)(eo)(()=>()=>{},()=>!1,()=>!t)}function Yl(){let t=YR(),[n,r]=p.useState(nr.isHandoffComplete);return n&&nr.isHandoffComplete===!1&&r(!1),p.useEffect(()=>{n!==!0&&r(!0)},[n]),p.useEffect(()=>nr.handoff(),[]),!t&&n}var tv;let un=(tv=O.useId)==null?function(){let t=Yl(),[n,r]=O.useState(t?()=>nr.nextId():null);return Qe(()=>{n===null&&r(nr.nextId())},[n]),n==null?void 0:""+n}:tv;function ot(t,n){if(t in n){let l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}let a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ot),a}function Xi(t){return nr.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let $d=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var zd=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(zd||{}),KR=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(KR||{}),GR=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(GR||{});function $x(){var t=Number.MAX_SAFE_INTEGER;let n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.body;return n==null?[]:Array.from(n.querySelectorAll($d)).sort((r,o)=>Math.sign((r.tabIndex||t)-(o.tabIndex||t)))}var Kl=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Kl||{});function Gl(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=Xi(t))==null?void 0:r.body)&&ot(n,{0(){return t.matches($d)},1(){for(let o=t;o!==null;){if(o.matches($d))return!0;o=o.parentElement}return!1}})}function zx(t){let n=Xi(t);Vt().nextFrame(()=>{n&&!Gl(n.activeElement,0)&&JR(t)})}var QR=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(QR||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function JR(t){t==null||t.focus({preventScroll:!0})}let ZR="textarea,input";function XR(t){var n,r;return(r=(n=t==null?void 0:t.matches)==null?void 0:n.call(t,ZR))!=null&&r}function Ql(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:r=>r;return t.slice().sort((r,o)=>{let i=n(r),a=n(o);if(i===null||a===null)return 0;let l=i.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function e6(t,n){return t6($x(),n,{relativeTo:t})}function t6(t,n){let{sorted:r=!0,relativeTo:o=null,skipElements:i=[]}=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},a=Array.isArray(t)?0<t.length?t[0].ownerDocument:document:t.ownerDocument,l=Array.isArray(t)?r?Ql(t):t:$x(t);0<i.length&&1<l.length&&(l=l.filter(h=>!i.includes(h))),o=o??a.activeElement;let c,u=(()=>{if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{var h=Math.max;if(1&n)return 0;if(2&n)return h(0,l.indexOf(o))-1;if(4&n)return h(0,l.indexOf(o))+1;if(8&n)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&n?{preventScroll:!0}:{},g=0,b=l.length;do{if(g>=b||0>=g+b)return 0;let h=d+g;if(16&n)h=(h+b)%b;else{if(0>h)return 3;if(h>=b)return 1}c=l[h],c==null||c.focus(f),g+=u}while(c!==a.activeElement);return 6&n&&XR(c)&&c.select(),2}function n6(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&0<window.navigator.maxTouchPoints}function r6(){return/Android/gi.test(window.navigator.userAgent)}function Hx(){return n6()||r6()}function ya(t,n,r){let o=yn(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function o6(t,n,r){let o=yn(n);p.useEffect(()=>{function i(a){o.current(a)}return window.addEventListener(t,i,r),()=>window.removeEventListener(t,i,r)},[t,r])}function ap(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){let u=c(l);if(u!==null&&u.getRootNode().contains(u)&&u.isConnected){let d=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t);for(let f of d){if(f===null)continue;let g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(u)||l.composed&&l.composedPath().includes(g))return}return!Gl(u,Kl.Loose)&&u.tabIndex!==-1&&l.preventDefault(),n(l,u)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);let a=p.useRef(null);ya("pointerdown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ya("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),ya("click",l=>{Hx()||a.current&&(r(l,()=>a.current),a.current=null)},!0),ya("touchend",l=>r(l,()=>l.target instanceof HTMLElement?l.target:null),!0),o6("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Jl(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return p.useMemo(()=>Xi(...n),[...n])}function nv(t){var n;if(t.type)return t.type;let r=(n=t.as)==null?"button":n;if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function lp(t,n){let[r,o]=p.useState(()=>nv(t));return Qe(()=>{o(nv(t))},[t.type,t.as]),Qe(()=>{r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")},[r,n]),r}let Bx=Symbol();function i6(t){let n=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return Object.assign(t,{[Bx]:n})}function jt(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=p.useRef(n);p.useEffect(()=>{o.current=n},[n]);let i=ge(a=>{for(let l of o.current)l!=null&&(typeof l=="function"?l(a):l.current=a)});return n.every(a=>a==null||(a==null?void 0:a[Bx]))?void 0:i}function rv(t){return[t.screenX,t.screenY]}function sp(){let t=p.useRef([-1,-1]);return{wasMoved(n){let r=rv(n);return(t.current[0]!==r[0]||t.current[1]!==r[1])&&(t.current=r,!0)},update(n){t.current=rv(n)}}}function ul(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return Array.from(new Set(n.flatMap(o=>typeof o=="string"?o.split(" "):[]))).filter(Boolean).join(" ")}var Pr=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Pr||{}),jr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(jr||{});function mt(t){let{ourProps:n,theirProps:r,slot:o,defaultTag:i,features:a,visible:l=!0,name:c,mergeRefs:u}=t;u=u??a6;let d=Vx(r,n);if(l)return wa(d,o,i,c,u);let f=a??0;if(2&f){let{static:g=!1,...b}=d;if(g)return wa(b,o,i,c,u)}if(1&f){let{unmount:g=!0,...b}=d;return ot(g?0:1,{0(){return null},1(){return wa({...b,hidden:!0,style:{display:"none"}},o,i,c,u)}})}return wa(d,o,i,c,u)}function wa(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},r=2<arguments.length?arguments[2]:void 0,o=3<arguments.length?arguments[3]:void 0,i=4<arguments.length?arguments[4]:void 0,{as:a=r,children:l,refName:c="ref",...u}=Qs(t,["unmount","static"]),d=t.ref===void 0?{}:{[c]:t.ref},f=typeof l=="function"?l(n):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(n));let g={};if(n){let b=!1,h=[];for(let[m,y]of Object.entries(n))typeof y=="boolean"&&(b=!0),y===!0&&h.push(m);b&&(g["data-headlessui-state"]=h.join(" "))}if(a===p.Fragment&&0<Object.keys(dl(u)).length){if(!p.isValidElement(f)||Array.isArray(f)&&1<f.length)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let b=f.props,h=typeof(b==null?void 0:b.className)=="function"?function(){return ul(b==null?void 0:b.className(...arguments),u.className)}:ul(b==null?void 0:b.className,u.className),m=h?{className:h}:{};return p.cloneElement(f,Object.assign({},Vx(f.props,dl(Qs(u,["ref"]))),g,d,{ref:i(f.ref,d.ref)},m))}return p.createElement(a,Object.assign({},Qs(u,["ref"]),a!==p.Fragment&&d,a!==p.Fragment&&g),f)}function a6(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.every(o=>o==null)?void 0:o=>{for(let i of n)i!=null&&(typeof i=="function"?i(o):i.current=o)}}function Vx(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length===0)return{};if(n.length===1)return n[0];let o={},i={};for(let a of n)for(let l in a)l.startsWith("on")&&typeof a[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(a[l])):o[l]=a[l];if(o.disabled||o["aria-disabled"])return Object.assign(o,Object.fromEntries(Object.keys(i).map(a=>[a,void 0])));for(let a in i)Object.assign(o,{[a](l){let c=i[a];for(var u=arguments.length,d=Array(1<u?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];for(let g of c){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;g(l,...d)}}});return o}function pt(t){var n;return Object.assign(p.forwardRef(t),{displayName:(n=t.displayName)==null?t.name:n})}function dl(t){let n=Object.assign({},t);for(let r in n)n[r]===void 0&&delete n[r];return n}function Qs(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],r=Object.assign({},t);for(let o of n)o in r&&delete r[o];return r}let cp=p.createContext(null);cp.displayName="OpenClosedContext";var dt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(dt||{});function ea(){return p.useContext(cp)}function Zl(t){let{value:n,children:r}=t;return O.createElement(cp.Provider,{value:n},r)}function up(t){let n=t.parentElement,r=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(r=n),n=n.parentElement;let o=(n==null?void 0:n.getAttribute("disabled"))==="";return!(o&&l6(r))&&o}function l6(t){if(!t)return!1;for(let n=t.previousElementSibling;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}function s6(t){throw new Error("Unexpected object: "+t)}var Le=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Le||{});function fl(t,n){let r=n.resolveItems();if(0>=r.length)return null;let o=n.resolveActiveIndex(),i=o??-1;switch(t.focus){case 0:{for(let a=0;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 1:{for(let a=i-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 2:{for(let a=i+1;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 3:{for(let a=r.length-1;0<=a;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 4:{for(let a=0;a<r.length;++a)if(n.resolveId(r[a],a,r)===t.id)return a;return o}case 5:return null;default:s6(t)}}var Me=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Me||{});const Wx=["top","right","bottom","left"],ov=["start","end"],iv=Wx.reduce((t,n)=>t.concat(n,n+"-"+ov[0],n+"-"+ov[1]),[]),Hd=Math.min,c6=Math.max,u6={left:"right",right:"left",bottom:"top",top:"bottom"},d6={start:"end",end:"start"};function Bd(t,n,r){return c6(t,Hd(n,r))}function lo(t,n){return typeof t=="function"?t(n):t}function or(t){return t.split("-")[0]}function An(t){return t.split("-")[1]}function Ux(t){return t==="x"?"y":"x"}function dp(t){return t==="y"?"height":"width"}function Go(t){return["top","bottom"].includes(or(t))?"y":"x"}function fp(t){return Ux(Go(t))}function qx(t,n,r){r===void 0&&(r=!1);const o=An(t),i=fp(t),a=dp(i);let l=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=gl(l)),[l,gl(l)]}function f6(t){const n=gl(t);return[pl(t),n,pl(n)]}function pl(t){return t.replace(/start|end/g,n=>d6[n])}function p6(t,n,r){const o=["left","right"],i=["right","left"];return t==="top"||t==="bottom"?r?n?i:o:n?o:i:t==="left"||t==="right"?n?["top","bottom"]:["bottom","top"]:[]}function g6(t,n,r,o){const i=An(t);let a=p6(or(t),r==="start",o);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(pl)))),a}function gl(t){return t.replace(/left|right|bottom|top/g,n=>u6[n])}function h6(t){return{top:0,right:0,bottom:0,left:0,...t}}function Yx(t){return typeof t=="number"?{top:t,right:t,bottom:t,left:t}:h6(t)}function hl(t){const{x:n,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:n,right:n+o,bottom:r+i,x:n,y:r}}function av(t,n,r){let{reference:o,floating:i}=t;const a=Go(n),l=fp(n),c=dp(l),u=or(n),d=a==="y",f=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,b=o[c]/2-i[c]/2;let h;switch(h=u==="top"?{x:f,y:o.y-i.height}:u==="bottom"?{x:f,y:o.y+o.height}:u==="right"?{x:o.x+o.width,y:g}:u==="left"?{x:o.x-i.width,y:g}:{x:o.x,y:o.y},An(n)){case"start":h[l]-=b*(r&&d?-1:1);break;case"end":h[l]+=b*(r&&d?-1:1)}return h}const m6=async(t,n,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:l}=r,c=a.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(n));let d=await l.getElementRects({reference:t,floating:n,strategy:i}),{x:f,y:g}=av(d,o,u),b=o,h={},m=0;for(let y=0;y<c.length;y++){const{name:E,fn:v}=c[y],{x:k,y:C,data:D,reset:I}=await v({x:f,y:g,initialPlacement:o,placement:b,strategy:i,middlewareData:h,rects:d,platform:l,elements:{reference:t,floating:n}});f=k??f,g=C??g,h={...h,[E]:{...h[E],...D}},I&&50>=m&&(m++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(d=I.rects===!0?await l.getElementRects({reference:t,floating:n,strategy:i}):I.rects),{x:f,y:g}=av(d,b,u)),y=-1)}return{x:f,y:g,placement:b,strategy:i,middlewareData:h}};async function Ri(t,n){var r;n===void 0&&(n={});const{x:o,y:i,platform:a,rects:l,elements:c,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:b=!1,padding:h=0}=lo(n,t),m=Yx(h),y=g==="floating"?"reference":"floating",E=c[b?y:g],v=hl(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(E)))==null||r?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:u})),k=g==="floating"?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),D=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},I=hl(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:C,strategy:u}):k);return{top:(v.top-I.top+m.top)/D.y,bottom:(I.bottom-v.bottom+m.bottom)/D.y,left:(v.left-I.left+m.left)/D.x,right:(I.right-v.right+m.right)/D.x}}const b6=t=>({name:"arrow",options:t,async fn(n){const{x:r,y:o,placement:i,rects:a,platform:l,elements:c,middlewareData:u}=n,{element:d,padding:f=0}=lo(t,n)||{};if(d==null)return{};const g=Yx(f),b={x:r,y:o},h=fp(i),m=dp(h),y=await l.getDimensions(d),E=h==="y",v=E?"top":"left",k=E?"bottom":"right",C=E?"clientHeight":"clientWidth",D=a.reference[m]+a.reference[h]-b[h]-a.floating[m],I=b[h]-a.reference[h],T=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let z=T?T[C]:0;z&&await(l.isElement==null?void 0:l.isElement(T))||(z=c.floating[C]||a.floating[m]);const A=z/2-y[m]/2-1,Q=Hd(g[v],A),B=Hd(g[k],A),F=Q,L=z-y[m]-B,_=z/2-y[m]/2+(D/2-I/2),R=Bd(F,_,L),V=!u.arrow&&An(i)!=null&&_!==R&&0>a.reference[m]/2-(_<F?Q:B)-y[m]/2,H=V?_<F?_-F:_-L:0;return{[h]:b[h]+H,data:{[h]:R,centerOffset:_-R-H,...V&&{alignmentOffset:H}},reset:V}}});function v6(t,n,r){return(t?[...r.filter(o=>An(o)===t),...r.filter(o=>An(o)!==t)]:r.filter(o=>or(o)===o)).filter(o=>!t||An(o)===t||!!n&&pl(o)!==o)}const y6=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(n){var r,o,i;const{rects:a,middlewareData:l,placement:c,platform:u,elements:d}=n,{crossAxis:f=!1,alignment:g,allowedPlacements:b=iv,autoAlignment:h=!0,...m}=lo(t,n),y=g!==void 0||b===iv?v6(g||null,h,b):b,E=await Ri(n,m),v=((r=l.autoPlacement)==null?void 0:r.index)||0,k=y[v];if(k==null)return{};const C=qx(k,a,await(u.isRTL==null?void 0:u.isRTL(d.floating)));if(c!==k)return{reset:{placement:y[0]}};const D=[E[or(k)],E[C[0]],E[C[1]]],I=[...((o=l.autoPlacement)==null?void 0:o.overflows)||[],{placement:k,overflows:D}],T=y[v+1];if(T)return{data:{index:v+1,overflows:I},reset:{placement:T}};const z=I.map(B=>{const F=An(B.placement);return[B.placement,F&&f?B.overflows.slice(0,2).reduce((L,_)=>L+_,0):B.overflows[0],B.overflows]}).sort((B,F)=>B[1]-F[1]),A=z.filter(B=>B[2].slice(0,An(B[0])?2:3).every(F=>0>=F)),Q=((i=A[0])==null?void 0:i[0])||z[0][0];return Q===c?{}:{data:{index:v+1,overflows:I},reset:{placement:Q}}}}},w6=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var r,o;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:u,elements:d}=n,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0,...E}=lo(t,n);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const v=or(i),k=Go(c),C=or(c)===c,D=await(u.isRTL==null?void 0:u.isRTL(d.floating)),I=b||(C||!y?[gl(c)]:f6(c)),T=m!=="none";!b&&T&&I.push(...g6(c,y,m,D));const z=[c,...I],A=await Ri(n,E),Q=[];let B=((o=a.flip)==null?void 0:o.overflows)||[];if(f&&Q.push(A[v]),g){const R=qx(i,l,D);Q.push(A[R[0]],A[R[1]])}if(B=[...B,{placement:i,overflows:Q}],!Q.every(R=>0>=R)){var F,L;const R=(((F=a.flip)==null?void 0:F.index)||0)+1,V=z[R];if(V)return{data:{index:R,overflows:B},reset:{placement:V}};let H=(L=B.filter(U=>0>=U.overflows[0]).sort((U,J)=>U.overflows[1]-J.overflows[1])[0])==null?void 0:L.placement;if(!H)switch(h){case"bestFit":{var _;const U=(_=B.filter(J=>{if(T){const X=Go(J.placement);return X===k||X==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(X=>0<X).reduce((X,N)=>X+N,0)]).sort((J,X)=>J[1]-X[1])[0])==null?void 0:_[0];U&&(H=U);break}case"initialPlacement":H=c}if(i!==H)return{reset:{placement:H}}}return{}}}};function lv(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function sv(t){return Wx.some(n=>0<=t[n])}const x6=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:r}=n,{strategy:o="referenceHidden",...i}=lo(t,n);switch(o){case"referenceHidden":{const a=await Ri(n,{...i,elementContext:"reference"}),l=lv(a,r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:sv(l)}}}case"escaped":{const a=await Ri(n,{...i,altBoundary:!0}),l=lv(a,r.floating);return{data:{escapedOffsets:l,escaped:sv(l)}}}default:return{}}}}};async function j6(t,n){const{placement:r,platform:o,elements:i}=t,a=await(o.isRTL==null?void 0:o.isRTL(i.floating)),l=or(r),c=An(r),u=Go(r)==="y",d=["left","top"].includes(l)?-1:1,f=a&&u?-1:1,g=lo(n,t);let{mainAxis:b,crossAxis:h,alignmentAxis:m}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof m=="number"&&(h=c==="end"?-1*m:m),u?{x:h*f,y:b*d}:{x:b*d,y:h*f}}const E6=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var r,o;const{x:i,y:a,placement:l,middlewareData:c}=n,u=await j6(n,t);return l===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:l}}}}},k6=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:r,y:o,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:E=>{let{x:v,y:k}=E;return{x:v,y:k}}},...u}=lo(t,n),d={x:r,y:o},f=await Ri(n,u),g=Go(or(i)),b=Ux(g);let h=d[b],m=d[g];if(a){const E=b==="y"?"top":"left",v=b==="y"?"bottom":"right",k=h+f[E],C=h-f[v];h=Bd(k,h,C)}if(l){const E=g==="y"?"top":"left",v=g==="y"?"bottom":"right",k=m+f[E],C=m-f[v];m=Bd(k,m,C)}const y=c.fn({...n,[b]:h,[g]:m});return{...y,data:{x:y.x-r,y:y.y-o,enabled:{[b]:a,[g]:l}}}}}},Vd=Math.min,Oo=Math.max,ml=Math.round,xa=Math.floor,Ir=t=>({x:t,y:t});function Xl(){return typeof window<"u"}function ni(t){return Kx(t)?(t.nodeName||"").toLowerCase():"#document"}function tn(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function Un(t){var n;return(n=(Kx(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function Kx(t){return!!Xl()&&(t instanceof Node||t instanceof tn(t).Node)}function kn(t){return!!Xl()&&(t instanceof Element||t instanceof tn(t).Element)}function Hn(t){return!!Xl()&&(t instanceof HTMLElement||t instanceof tn(t).HTMLElement)}function cv(t){return!!(Xl()&&typeof ShadowRoot<"u")&&(t instanceof ShadowRoot||t instanceof tn(t).ShadowRoot)}function ta(t){const{overflow:n,overflowX:r,overflowY:o,display:i}=On(t);return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function O6(t){return["table","td","th"].includes(ni(t))}function es(t){return[":popover-open",":modal"].some(n=>{try{return t.matches(n)}catch{return!1}})}function pp(t){const n=gp(),r=kn(t)?On(t):t;return r.transform!=="none"||r.perspective!=="none"||!!r.containerType&&r.containerType!=="normal"||!n&&!!r.backdropFilter&&r.backdropFilter!=="none"||!n&&!!r.filter&&r.filter!=="none"||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function S6(t){for(let n=Tr(t);Hn(n)&&!Qo(n);){if(pp(n))return n;if(es(n))return null;n=Tr(n)}return null}function gp(){return!!(typeof CSS<"u"&&CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Qo(t){return["html","body","#document"].includes(ni(t))}function On(t){return tn(t).getComputedStyle(t)}function ts(t){return kn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Tr(t){if(ni(t)==="html")return t;const n=t.assignedSlot||t.parentNode||cv(t)&&t.host||Un(t);return cv(n)?n.host:n}function Gx(t){const n=Tr(t);return Qo(n)?t.ownerDocument?t.ownerDocument.body:t.body:Hn(n)&&ta(n)?n:Gx(n)}function Fi(t,n,r){var o;n===void 0&&(n=[]),r===void 0&&(r=!0);const i=Gx(t),a=i===((o=t.ownerDocument)==null?void 0:o.body),l=tn(i);if(a){const c=Wd(l);return n.concat(l,l.visualViewport||[],ta(i)?i:[],c&&r?Fi(c):[])}return n.concat(i,Fi(i,[],r))}function Wd(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Qx(t){const n=On(t);let r=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=Hn(t),a=i?t.offsetWidth:r,l=i?t.offsetHeight:o,c=ml(r)!==a||ml(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function hp(t){return kn(t)?t:t.contextElement}function So(t){var n=Number.isFinite;const r=hp(t);if(!Hn(r))return Ir(1);const o=r.getBoundingClientRect(),{width:i,height:a,$:l}=Qx(r);let c=(l?ml(o.width):o.width)/i,u=(l?ml(o.height):o.height)/a;return c&&n(c)||(c=1),u&&n(u)||(u=1),{x:c,y:u}}const C6=Ir(0);function Jx(t){const n=tn(t);return gp()&&n.visualViewport?{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}:C6}function P6(t,n,r){return n===void 0&&(n=!1),r&&(!n||r===tn(t))&&n}function oo(t,n,r,o){n===void 0&&(n=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),a=hp(t);let l=Ir(1);n&&(o?kn(o)&&(l=So(o)):l=So(t));const c=P6(a,r,o)?Jx(a):Ir(0);let u=(i.left+c.x)/l.x,d=(i.top+c.y)/l.y,f=i.width/l.x,g=i.height/l.y;if(a){const b=tn(a),h=o&&kn(o)?tn(o):o;let m=b,y=Wd(m);for(;y&&o&&h!==m;){const E=So(y),v=y.getBoundingClientRect(),k=On(y),C=v.left+(y.clientLeft+parseFloat(k.paddingLeft))*E.x,D=v.top+(y.clientTop+parseFloat(k.paddingTop))*E.y;u*=E.x,d*=E.y,f*=E.x,g*=E.y,u+=C,d+=D,m=tn(y),y=Wd(m)}}return hl({width:f,height:g,x:u,y:d})}function I6(t){let{elements:n,rect:r,offsetParent:o,strategy:i}=t;const a=i==="fixed",l=Un(o),c=!!n&&es(n.floating);if(o===l||c&&a)return r;let u={scrollLeft:0,scrollTop:0},d=Ir(1);const f=Ir(0),g=Hn(o);if((g||!g&&!a)&&((ni(o)!=="body"||ta(l))&&(u=ts(o)),Hn(o))){const b=oo(o);d=So(o),f.x=b.x+o.clientLeft,f.y=b.y+o.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+f.x,y:r.y*d.y-u.scrollTop*d.y+f.y}}function T6(t){return Array.from(t.getClientRects())}function Ud(t,n){const r=ts(t).scrollLeft;return n?n.left+r:oo(Un(t)).left+r}function D6(t){const n=Un(t),r=ts(t),o=t.ownerDocument.body,i=Oo(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),a=Oo(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+Ud(t);const c=-r.scrollTop;return On(o).direction==="rtl"&&(l+=Oo(n.clientWidth,o.clientWidth)-i),{width:i,height:a,x:l,y:c}}function M6(t,n){const r=tn(t),o=Un(t),i=r.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,u=0;if(i){a=i.width,l=i.height;const d=gp();(!d||d&&n==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:l,x:c,y:u}}function N6(t,n){const r=oo(t,!0,n==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,a=Hn(t)?So(t):Ir(1),l=t.clientWidth*a.x,c=t.clientHeight*a.y,u=i*a.x,d=o*a.y;return{width:l,height:c,x:u,y:d}}function uv(t,n,r){let o;if(n==="viewport")o=M6(t,r);else if(n==="document")o=D6(Un(t));else if(kn(n))o=N6(n,r);else{const i=Jx(t);o={...n,x:n.x-i.x,y:n.y-i.y}}return hl(o)}function Zx(t,n){const r=Tr(t);return r!==n&&kn(r)&&!Qo(r)&&(On(r).position==="fixed"||Zx(r,n))}function R6(t,n){const r=n.get(t);if(r)return r;let o=Fi(t,[],!1).filter(l=>kn(l)&&ni(l)!=="body"),i=null;const a=On(t).position==="fixed";for(let l=a?Tr(t):t;kn(l)&&!Qo(l);){const c=On(l),u=pp(l);u||c.position!=="fixed"||(i=null),(a?!u&&!i:!u&&c.position==="static"&&i&&["absolute","fixed"].includes(i.position)||ta(l)&&!u&&Zx(t,l))?o=o.filter(d=>d!==l):i=c,l=Tr(l)}return n.set(t,o),o}function F6(t){let{element:n,boundary:r,rootBoundary:o,strategy:i}=t;const a=r==="clippingAncestors"?es(n)?[]:R6(n,this._c):[].concat(r),l=[...a,o],c=l[0],u=l.reduce((d,f)=>{const g=uv(n,f,i);return d.top=Oo(g.top,d.top),d.right=Vd(g.right,d.right),d.bottom=Vd(g.bottom,d.bottom),d.left=Oo(g.left,d.left),d},uv(n,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function L6(t){const{width:n,height:r}=Qx(t);return{width:n,height:r}}function A6(t,n,r){const o=Hn(n),i=Un(n),a=r==="fixed",l=oo(t,!0,a,n);let c={scrollLeft:0,scrollTop:0};const u=Ir(0);if(o||!o&&!a)if((ni(n)!=="body"||ta(i))&&(c=ts(n)),o){const h=oo(n,!0,a,n);u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}else i&&(u.x=Ud(i));let d=0,f=0;if(i&&!o&&!a){const h=i.getBoundingClientRect();f=h.top+c.scrollTop,d=h.left+c.scrollLeft-Ud(i,h)}const g=l.left+c.scrollLeft-u.x-d,b=l.top+c.scrollTop-u.y-f;return{x:g,y:b,width:l.width,height:l.height}}function Js(t){return On(t).position==="static"}function dv(t,n){if(!Hn(t)||On(t).position==="fixed")return null;if(n)return n(t);let r=t.offsetParent;return Un(t)===r&&(r=r.ownerDocument.body),r}function Xx(t,n){const r=tn(t);if(es(t))return r;if(!Hn(t)){for(let i=Tr(t);i&&!Qo(i);){if(kn(i)&&!Js(i))return i;i=Tr(i)}return r}let o=dv(t,n);for(;o&&O6(o)&&Js(o);)o=dv(o,n);return o&&Qo(o)&&Js(o)&&!pp(o)?r:o||S6(t)||r}const _6=async function(t){const n=this.getOffsetParent||Xx,r=this.getDimensions,o=await r(t.floating);return{reference:A6(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function $6(t){return On(t).direction==="rtl"}const z6={convertOffsetParentRelativeRectToViewportRelativeRect:I6,getDocumentElement:Un,getClippingRect:F6,getOffsetParent:Xx,getElementRects:_6,getClientRects:T6,getDimensions:L6,getScale:So,isElement:kn,isRTL:$6};function H6(t,n){function r(){var c;clearTimeout(i),(c=a)==null||c.disconnect(),a=null}function o(c,u){function d(D){const I=D[0].intersectionRatio;if(I!==u){if(!C)return o();I?o(!1,I):i=setTimeout(()=>{o(!1,1e-7)},1e3)}C=!1}c===void 0&&(c=!1),u===void 0&&(u=1),r();const{left:f,top:g,width:b,height:h}=t.getBoundingClientRect();if(c||n(),!b||!h)return;const m=xa(g),y=xa(l.clientWidth-(f+b)),E=xa(l.clientHeight-(g+h)),v=xa(f),k={rootMargin:-m+"px "+-y+"px "+-E+"px "+-v+"px",threshold:Oo(0,Vd(1,u))||1};let C=!0;try{a=new IntersectionObserver(d,{...k,root:l.ownerDocument})}catch{a=new IntersectionObserver(d,k)}a.observe(t)}let i,a=null;const l=Un(t);return o(!0),r}function B6(t,n,r,o){function i(){const v=oo(t);E&&(v.x!==E.x||v.y!==E.y||v.width!==E.width||v.height!==E.height)&&r(),E=v,y=requestAnimationFrame(i)}o===void 0&&(o={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,f=hp(t),g=a||l?[...f?Fi(f):[],...Fi(n)]:[];g.forEach(v=>{a&&v.addEventListener("scroll",r,{passive:!0}),l&&v.addEventListener("resize",r)});const b=f&&u?H6(f,r):null;let h=-1,m=null;c&&(m=new ResizeObserver(v=>{let[k]=v;k&&k.target===f&&m&&(m.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(n)})),r()}),f&&!d&&m.observe(f),m.observe(n));let y,E=d?oo(t):null;return d&&i(),r(),()=>{var v;g.forEach(k=>{a&&k.removeEventListener("scroll",r),l&&k.removeEventListener("resize",r)}),b==null||b(),(v=m)==null||v.disconnect(),m=null,d&&cancelAnimationFrame(y)}}const V6=E6,W6=y6,U6=k6,q6=w6,Y6=x6,fv=b6,K6=(t,n,r)=>{const o=new Map,i={platform:z6,...r},a={...i.platform,_c:o};return m6(t,n,{...i,platform:a})};function mp(){let t=p.useRef(!1);return Qe(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function G6(t){let n=ge(t),r=p.useRef(!1);p.useEffect(()=>(r.current=!1,()=>{r.current=!0,_x(()=>{r.current&&n()})}),[n])}let Q6=p.createContext(!1);function J6(){return p.useContext(Q6)}function Z6(t){let n=J6(),r=p.useContext(e2),o=Jl(t),[i,a]=p.useState(()=>{if(!n&&r!==null||nr.isServer)return null;let l=o==null?void 0:o.getElementById("headlessui-portal-root");if(l)return l;if(o===null)return null;let c=o.createElement("div");return c.setAttribute("id","headlessui-portal-root"),o.body.appendChild(c)});return p.useEffect(()=>{i!==null&&(o!=null&&o.body.contains(i)||o==null||o.body.appendChild(i))},[i,o]),p.useEffect(()=>{n||r!==null&&a(r.current)},[r,a,n]),i}let X6=p.Fragment;function e9(t,n){let r=p.useRef(null),o=jt(i6(d=>{r.current=d}),n),i=Jl(r),a=Z6(r),[l]=p.useState(()=>{var d;return nr.isServer||(d=i==null?void 0:i.createElement("div"))==null?null:d}),c=p.useContext(r9),u=Yl();return Qe(()=>{a&&l&&!a.contains(l)&&(l.setAttribute("data-headlessui-portal",""),a.appendChild(l))},[a,l]),Qe(()=>{if(l&&c)return c.register(l)},[c,l]),G6(()=>{var d;a&&l&&(l instanceof Node&&a.contains(l)&&a.removeChild(l),0>=a.childNodes.length&&((d=a.parentElement)==null||d.removeChild(a)))}),u&&a&&l?Bn.createPortal(mt({ourProps:{ref:o},theirProps:t,defaultTag:X6,name:"Portal"}),l):null}let t9=p.Fragment,e2=p.createContext(null);function n9(t,n){let{target:r,...o}=t,i={ref:jt(n)};return O.createElement(e2.Provider,{value:r},mt({ourProps:i,theirProps:o,defaultTag:t9,name:"Popover.Group"}))}let r9=p.createContext(null),o9=pt(e9),i9=pt(n9),a9=Object.assign(o9,{Group:i9});function l9(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,[n,r]=p.useState(t),o=mp(),i=p.useCallback(u=>{o.current&&r(d=>d|u)},[n,o]),a=p.useCallback(u=>!!(n&u),[n]),l=p.useCallback(u=>{o.current&&r(d=>d&~u)},[r,o]),c=p.useCallback(u=>{o.current&&r(d=>d^u)},[r]);return{flags:n,addFlag:i,hasFlag:a,removeFlag:l,toggleFlag:c}}function s9(t){let n={called:!1};return function(){if(!n.called)return n.called=!0,t(...arguments)}}function Zs(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.add(...r)}function Xs(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&0<r.length&&t.classList.remove(...r)}function c9(t,n){let r=Vt();if(!t)return r.dispose;let{transitionDuration:o,transitionDelay:i}=getComputedStyle(t),[a,l]=[o,i].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):1e3*parseFloat(f)).sort((f,g)=>g-f);return d}),c=a+l;if(c!==0){r.group(d=>{d.setTimeout(()=>{n(),d.dispose()},c),d.addEventListener(t,"transitionrun",f=>{f.target===f.currentTarget&&d.dispose()})});let u=r.addEventListener(t,"transitionend",d=>{d.target===d.currentTarget&&(n(),u())})}else n();return r.add(()=>n()),r.dispose}function u9(t,n,r,o){let i=r?"enter":"leave",a=Vt(),l=o===void 0?()=>{}:s9(o);i=="enter"&&(t.removeAttribute("hidden"),t.style.display="");let c=ot(i,{enter:()=>n.enter,leave:()=>n.leave}),u=ot(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),d=ot(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return Xs(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),Zs(t,...n.base,...c,...d),a.nextFrame(()=>{Xs(t,...n.base,...c,...d),Zs(t,...n.base,...c,...u),c9(t,()=>(Xs(t,...n.base,...c),Zs(t,...n.base,...n.entered),l()))}),a.dispose}function d9(t){let{immediate:n,container:r,direction:o,classes:i,onStart:a,onStop:l}=t,c=mp(),u=En(),d=yn(o);Qe(()=>{n&&(d.current="enter")},[n]),Qe(()=>{let f=Vt();u.add(f.dispose);let g=r.current;if(g&&d.current!=="idle"&&c.current)return f.dispose(),a.current(d.current),f.add(u9(g,i.current,d.current==="enter",()=>{f.dispose(),l.current(d.current)})),f.dispose},[o])}function ur(){return(0<arguments.length&&arguments[0]!==void 0?arguments[0]:"").split(/\s+/).filter(t=>1<t.length)}let ns=p.createContext(null);ns.displayName="TransitionContext";var f9=(t=>(t.Visible="visible",t.Hidden="hidden",t))(f9||{});function p9(){let t=p.useContext(ns);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function g9(){let t=p.useContext(rs);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let rs=p.createContext(null);rs.displayName="NestingContext";function os(t){return"children"in t?os(t.children):0<t.current.filter(n=>{let{el:r}=n;return r.current!==null}).filter(n=>{let{state:r}=n;return r==="visible"}).length}function t2(t,n){let r=yn(t),o=p.useRef([]),i=mp(),a=En(),l=ge(function(h){let m=1<arguments.length&&arguments[1]!==void 0?arguments[1]:jr.Hidden,y=o.current.findIndex(E=>{let{el:v}=E;return v===h});y!==-1&&(ot(m,{[jr.Unmount](){o.current.splice(y,1)},[jr.Hidden](){o.current[y].state="hidden"}}),a.microTask(()=>{var E;!os(o)&&i.current&&((E=r.current)==null||E.call(r))}))}),c=ge(h=>{let m=o.current.find(y=>{let{el:E}=y;return E===h});return m?m.state!=="visible"&&(m.state="visible"):o.current.push({el:h,state:"visible"}),()=>l(h,jr.Unmount)}),u=p.useRef([]),d=p.useRef(Promise.resolve()),f=p.useRef({enter:[],leave:[],idle:[]}),g=ge((h,m,y)=>{u.current.splice(0),n&&(n.chains.current[m]=n.chains.current[m].filter(E=>{let[v]=E;return v!==h})),n==null||n.chains.current[m].push([h,new Promise(E=>{u.current.push(E)})]),n==null||n.chains.current[m].push([h,new Promise(E=>{Promise.all(f.current[m].map(v=>{let[k,C]=v;return C})).then(()=>E())})]),m==="enter"?d.current=d.current.then(()=>n==null?void 0:n.wait.current).then(()=>y(m)):y(m)}),b=ge((h,m,y)=>{Promise.all(f.current[m].splice(0).map(E=>{let[v,k]=E;return k})).then(()=>{var E;(E=u.current.shift())==null||E()}).then(()=>y(m))});return p.useMemo(()=>({children:o,register:c,unregister:l,onStart:g,onStop:b,wait:d,chains:f}),[c,l,o,g,b,f,d])}function h9(){}let m9=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function pv(t){var n;let r={};for(let o of m9)r[o]=(n=t[o])==null?h9:n;return r}function b9(t){let n=p.useRef(pv(t));return p.useEffect(()=>{n.current=pv(t)},[t]),n}let v9="div",n2=Pr.RenderStrategy;function y9(t,n){var r,o;let{beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c,enter:u,enterFrom:d,enterTo:f,entered:g,leave:b,leaveFrom:h,leaveTo:m,...y}=t,E=p.useRef(null),v=jt(E,n),k=(r=y.unmount)==null||r?jr.Unmount:jr.Hidden,{show:C,appear:D,initial:I}=p9(),[T,z]=p.useState(C?"visible":"hidden"),A=g9(),{register:Q,unregister:B}=A;p.useEffect(()=>Q(E),[Q,E]),p.useEffect(()=>{if(k===jr.Hidden&&E.current)return C&&T!=="visible"?void z("visible"):ot(T,{hidden:()=>B(E),visible:()=>Q(E)})},[T,E,Q,B,C,k]);let F=yn({base:ur(y.className),enter:ur(u),enterFrom:ur(d),enterTo:ur(f),entered:ur(g),leave:ur(b),leaveFrom:ur(h),leaveTo:ur(m)}),L=b9({beforeEnter:i,afterEnter:a,beforeLeave:l,afterLeave:c}),_=Yl();p.useEffect(()=>{if(_&&T==="visible"&&E.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[E,T,_]);let R=D&&C&&I,V=!_||I&&!D?"idle":C?"enter":"leave",H=l9(0),U=ge(se=>ot(se,{enter:()=>{H.addFlag(dt.Opening),L.current.beforeEnter()},leave:()=>{H.addFlag(dt.Closing),L.current.beforeLeave()},idle:()=>{}})),J=ge(se=>ot(se,{enter:()=>{H.removeFlag(dt.Opening),L.current.afterEnter()},leave:()=>{H.removeFlag(dt.Closing),L.current.afterLeave()},idle:()=>{}})),X=t2(()=>{z("hidden"),B(E)},A),N=p.useRef(!1);d9({immediate:R,container:E,classes:F,direction:V,onStart:yn(se=>{N.current=!0,X.onStart(E,se,U)}),onStop:yn(se=>{N.current=!1,X.onStop(E,se,J),se!=="leave"||os(X)||(z("hidden"),B(E))})});let ae=y;return R?ae={...ae,className:ul(y.className,...F.current.enter,...F.current.enterFrom)}:N.current&&(ae.className=ul(y.className,(o=E.current)==null?void 0:o.className),ae.className===""&&delete ae.className),O.createElement(rs.Provider,{value:X},O.createElement(Zl,{value:ot(T,{visible:dt.Open,hidden:dt.Closed})|H.flags},mt({ourProps:{ref:v},theirProps:ae,defaultTag:v9,features:n2,visible:T==="visible",name:"Transition.Child"})))}function w9(t,n){let{show:r,appear:o=!1,unmount:i=!0,...a}=t,l=p.useRef(null),c=jt(l,n);Yl();let u=ea();if(r===void 0&&u!==null&&(r=(u&dt.Open)===dt.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,f]=p.useState(r?"visible":"hidden"),g=t2(()=>{f("hidden")}),[b,h]=p.useState(!0),m=p.useRef([r]);Qe(()=>{b!==!1&&m.current[m.current.length-1]!==r&&(m.current.push(r),h(!1))},[m,r]);let y=p.useMemo(()=>({show:r,appear:o,initial:b}),[r,o,b]);p.useEffect(()=>{if(r)f("visible");else if(!os(g))f("hidden");else{let C=l.current;if(!C)return;let D=C.getBoundingClientRect();D.x===0&&D.y===0&&D.width===0&&D.height===0&&f("hidden")}},[r,g]);let E={unmount:i},v=ge(()=>{var C;b&&h(!1),(C=t.beforeEnter)==null||C.call(t)}),k=ge(()=>{var C;b&&h(!1),(C=t.beforeLeave)==null||C.call(t)});return O.createElement(rs.Provider,{value:g},O.createElement(ns.Provider,{value:y},mt({ourProps:{...E,as:p.Fragment,children:O.createElement(r2,{ref:c,...E,...a,beforeEnter:v,beforeLeave:k})},theirProps:{},defaultTag:p.Fragment,features:n2,visible:d==="visible",name:"Transition"})))}function x9(t,n){let r=p.useContext(ns)!==null,o=ea()!==null;return O.createElement(O.Fragment,null,!r&&o?O.createElement(qd,{ref:n,...t}):O.createElement(r2,{ref:n,...t}))}let qd=pt(w9),r2=pt(y9),j9=pt(x9),gv=Object.assign(qd,{Child:j9,Root:qd});const E9=t=>{function n(i){return Object.prototype.hasOwnProperty.call(i,"current")}const{element:r,padding:o}=t;return{name:"arrow",options:t,fn(i){return n(r)?r.current==null?{}:fv({element:r.current,padding:o}).fn(i):r?fv({element:r,padding:o}).fn(i):{}}}};var za=typeof document>"u"?p.useEffect:p.useLayoutEffect;function bl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let r,o,i;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(o=r;o--!=0;)if(!bl(t[o],n[o]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!=0;){const a=i[o];if(!(a==="_owner"&&t.$$typeof)&&!bl(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}function hv(t){const n=p.useRef(t);return za(()=>{n.current=t}),n}function k9(t){t===void 0&&(t={});const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:i,whileElementsMounted:a,open:l}=t,[c,u]=p.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[d,f]=p.useState(o);bl(d,o)||f(o);const g=p.useRef(null),b=p.useRef(null),h=p.useRef(c),m=hv(a),y=hv(i),[E,v]=p.useState(null),[k,C]=p.useState(null),D=p.useCallback(B=>{g.current!==B&&(g.current=B,v(B))},[]),I=p.useCallback(B=>{b.current!==B&&(b.current=B,C(B))},[]),T=p.useCallback(()=>{if(g.current&&b.current){const B={placement:n,strategy:r,middleware:d};y.current&&(B.platform=y.current),K6(g.current,b.current,B).then(F=>{const L={...F,isPositioned:!0};z.current&&!bl(h.current,L)&&(h.current=L,Bn.flushSync(()=>{u(L)}))})}},[d,n,r,y]);za(()=>{l===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(B=>({...B,isPositioned:!1})))},[l]);const z=p.useRef(!1);za(()=>(z.current=!0,()=>{z.current=!1}),[]),za(()=>{if(E&&k){if(m.current)return m.current(E,k,T);T()}},[E,k,T,m]);const A=p.useMemo(()=>({reference:g,floating:b,setReference:D,setFloating:I}),[D,I]),Q=p.useMemo(()=>({reference:E,floating:k}),[E,k]);return p.useMemo(()=>({...c,update:T,refs:A,elements:Q,reference:D,floating:I}),[c,T,A,Q,D,I])}var O9=typeof document>"u"?p.useEffect:p.useLayoutEffect;function S9(){const t=new Map;return{emit(n,r){var o;(o=t.get(n))==null||o.forEach(i=>i(r))},on(n,r){t.set(n,[...t.get(n)||[],r])},off(n,r){t.set(n,(t.get(n)||[]).filter(o=>o!==r))}}}const C9=p.createContext(null),P9=()=>p.useContext(C9);function I9(t){return(t==null?void 0:t.ownerDocument)||document}function T9(t){return I9(t).defaultView||window}function ja(t){return!!t&&t instanceof T9(t).Element}const D9=p.useInsertionEffect,M9=D9||(t=>t());function N9(t){const n=p.useRef(()=>{});return M9(()=>{n.current=t}),p.useCallback(function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.current==null?void 0:n.current(...o)},[])}function R9(t){t===void 0&&(t={});const{open:n=!1,onOpenChange:r,nodeId:o}=t,i=k9(t),a=P9(),l=p.useRef(null),c=p.useRef({}),u=p.useState(()=>S9())[0],[d,f]=p.useState(null),g=p.useCallback(v=>{const k=ja(v)?{getBoundingClientRect:()=>v.getBoundingClientRect(),contextElement:v}:v;i.refs.setReference(k)},[i.refs]),b=p.useCallback(v=>{(ja(v)||v===null)&&(l.current=v,f(v)),(ja(i.refs.reference.current)||i.refs.reference.current===null||v!==null&&!ja(v))&&i.refs.setReference(v)},[i.refs]),h=p.useMemo(()=>({...i.refs,setReference:b,setPositionReference:g,domReference:l}),[i.refs,b,g]),m=p.useMemo(()=>({...i.elements,domReference:d}),[i.elements,d]),y=N9(r),E=p.useMemo(()=>({...i,refs:h,elements:m,dataRef:c,nodeId:o,events:u,open:n,onOpenChange:y}),[i,o,u,n,y,h,m]);return O9(()=>{const v=a==null?void 0:a.nodesRef.current.find(k=>k.id===o);v&&(v.context=E)}),p.useMemo(()=>({...i,context:E,refs:h,reference:b,positionReference:g}),[i,h,E,b,g])}var mv,F9=Object.defineProperty,L9=(t,n,r)=>n in t?F9(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,bv=(t,n,r)=>(L9(t,typeof n=="symbol"?n:n+"",r),r),o2={exports:{}},fi={};function A9(){function t(a,l,c){var u,d={},f=null,g=null;for(u in c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref),l)r.call(l,u)&&!i.hasOwnProperty(u)&&(d[u]=l[u]);if(a&&a.defaultProps)for(u in l=a.defaultProps,l)d[u]===void 0&&(d[u]=l[u]);return{$$typeof:n,type:a,key:f,ref:g,props:d,_owner:o.current}}if(mv)return fi;mv=1;var n=Symbol.for("react.element"),r=Object.prototype.hasOwnProperty,o=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};return fi.Fragment=Symbol.for("react.fragment"),fi.jsx=t,fi.jsxs=t,fi}o2.exports=A9();var Ke=o2.exports;class _9{constructor(){bv(this,"current",this.detect()),bv(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return"u"<typeof window||"u"<typeof document?"server":"client"}}const Jo=new _9,i2=(t,n)=>{Jo.isServer?p.useEffect(t,n):p.useLayoutEffect(t,n)},ec={serverHandoffComplete:!1};function $9(){const[t,n]=p.useState(ec.serverHandoffComplete);return p.useEffect(()=>{t!==!0&&n(!0)},[t]),p.useEffect(()=>{ec.serverHandoffComplete===!1&&(ec.serverHandoffComplete=!0)},[]),t}const z9=O.useId??function(){const t=$9(),[n,r]=O.useState(t?()=>Jo.nextId():null);return i2(()=>{n===null&&r(Jo.nextId())},[n]),n==null?void 0:`${n}`};function H9(t,n,r,o){p.useEffect(()=>{const i=[];(typeof o.offset=="number"||typeof o.offset=="object"||typeof o.offset=="function")&&i.push(V6(o.offset)),(o.flip===!0||typeof o.flip=="number"||typeof o.flip=="object")&&i.push(q6({padding:typeof o.flip=="number"?o.flip:void 0,...typeof o.flip=="object"?o.flip:{}})),(o.shift===!0||typeof o.shift=="number"||typeof o.shift=="object")&&i.push(U6({padding:typeof o.shift=="number"?o.shift:void 0,...typeof o.shift=="object"?o.shift:{}})),(o.autoPlacement===!0||typeof o.autoPlacement=="object")&&i.push(W6(typeof o.autoPlacement=="object"?o.autoPlacement:void 0)),(o.arrow===!0||typeof o.arrow=="number")&&i.push(E9({element:r,padding:o.arrow===!0?0:o.arrow})),i.push(...typeof o.middleware=="function"?o.middleware({referenceEl:n.reference,floatingEl:n.floating}):o.middleware||[]),(o.hide===!0||typeof o.hide=="object")&&i.push(Y6(typeof o.hide=="object"?o.hide:void 0)),t(i)},[o.offset,o.shift,o.flip,o.arrow,o.autoPlacement,o.hide,o.middleware])}function B9(t,n,r){p.useEffect(()=>{if(t&&Jo.isClient&&"u">typeof ResizeObserver&&n.current&&n.current instanceof Element){const o=new ResizeObserver(i=>{let[a]=i;const l=a.borderBoxSize.reduce((c,u)=>{let{inlineSize:d}=u;return c+d},0);r(l)});return o.observe(n.current),()=>{o.disconnect(),r(null)}}},[])}const V9=t=>t==="top"?"origin-bottom":t==="bottom"?"origin-top":t==="left"?"origin-right":t==="right"?"origin-left":t==="top-start"||t==="right-end"?"origin-bottom-left":t==="top-end"||t==="left-end"?"origin-bottom-right":t==="right-start"||t==="bottom-start"?"origin-top-left":t==="left-start"||t==="bottom-end"?"origin-top-right":"";function W9(t,n){return p.useMemo(()=>typeof t.originClass=="function"?t.originClass(n):typeof t.originClass=="string"?t.originClass:t.tailwindcssOriginClass?V9(n):"",[n,t.originClass,t.tailwindcssOriginClass])}function a2(t,n){if(t in n){const l=n[t];for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return typeof l=="function"?l(...o):l}const a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,a2),a}function l2(t){return Jo.isServer?null:t instanceof Node?t.ownerDocument:t&&Object.prototype.hasOwnProperty.call(t,"current")&&t.current instanceof Node?t.current.ownerDocument:document}const vv=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var s2=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(s2||{});function U9(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;var r;return t!==((r=l2(t))==null?void 0:r.body)&&a2(n,{0(){return t.matches(vv)},1(){for(let o=t;o!==null;){if(o.matches(vv))return!0;o=o.parentElement}return!1}})}function q9(t){const n=p.useRef(t);return i2(()=>{n.current=t},[t]),n}function Nn(t,n,r){const o=q9(n);p.useEffect(()=>{function i(a){o.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[t,r])}function Y9(t,n){function r(l,c){if(i.current&&!l.defaultPrevented){const u=function f(g){return typeof g=="function"?f(g()):Array.isArray(g)||g instanceof Set?g:[g]}(t),d=c(l);if(d!==null&&d.getRootNode().contains(d)){for(const f of u){if(f===null)continue;const g=f instanceof HTMLElement?f:f.current;if(g!=null&&g.contains(d)||l.composed&&l.composedPath().includes(g))return}return!U9(d,s2.Loose)&&d.tabIndex!==-1&&l.preventDefault(),n(l,d)}}}let o=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];const i=p.useRef(!1);p.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);const a=p.useRef(null);Nn("mousedown",l=>{var c,u;i.current&&(a.current=((u=(c=l.composedPath)==null?void 0:c.call(l))==null?void 0:u[0])||l.target)},!0),Nn("click",l=>{a.current&&(r(l,()=>a.current),a.current=null)},!0),Nn("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}const Ea=new Map,bp=p.createContext(null);bp.displayName="ReferenceContext";const vp=p.createContext(null);vp.displayName="FloatingContext";const Li=p.createContext(null);Li.displayName="ArrowContext";function c2(t){const n=p.useContext(bp);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,c2),r}return n}function u2(t){const n=p.useContext(vp);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,u2),r}return n}function d2(t){const n=p.useContext(Li);if(n===null){const r=new Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,d2),r}return n}function f2(t,n,r,o){const{referenceRef:i}=o,a=n;if(a.as===p.Fragment)return Ke.jsx(t.type,{...t.props,...r,ref:i});const l=a.as||"div";return Ke.jsx(l,{...r,ref:i,children:Ke.jsx(t.type,{...t.props})})}function yp(t,n,r,o){var i=Math.round;function a(I){return v.portal?Ke.jsx(a9,{children:I}):I}function l(I){const T={...D,...r,ref:u};if(v.as===p.Fragment)return Ke.jsx(I.type,{...I.props,...T});const z=v.as||"div";return Ke.jsx(z,{...T,children:Ke.jsx(I.type,{...I.props})})}function c(){return Jo.isServer?f.current&&v.show?Ke.jsx(t.type,{...t.props}):Ke.jsx(p.Fragment,{}):v.transitionChild?Ke.jsx(gv.Child,{as:p.Fragment,...C,children:Ke.jsx(t.type,{...t.props})}):Ke.jsx(gv,{as:p.Fragment,...C,children:Ke.jsx(t.type,{...t.props})})}const{floatingRef:u,props:d,mounted:f,setShow:g,x:b,y:h,placement:m,strategy:y,referenceElWidth:E}=o,v={...d,...n},k=W9(v,m),C={show:!!f.current&&v.show,enter:`${v.enter||""} ${k}`,enterFrom:`${v.enterFrom||""}`,enterTo:`${v.enterTo||""}`,leave:`${v.leave||""} ${k}`,leaveFrom:`${v.leaveFrom||""}`,leaveTo:`${v.leaveTo||""}`,beforeEnter:()=>{g(!0)},afterLeave:()=>{g(!1)}},D={style:{...!v.dialog&&(v.transform||v.transform===void 0)?{position:y,zIndex:v.zIndex||9999,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${i(b||0)}px,${i(h||0)}px)`}:{position:y,zIndex:v.zIndex||9999,top:`${h||0}px`,left:`${b||0}px`},width:v.adaptiveWidth&&typeof E=="number"?`${E}px`:void 0}};return a(l(c()))}function p2(t,n){let[r,o]=t;var i,a;const l=z9(),c=p.useRef(!1),[u,d]=p.useState(),f=p.useRef(null),g=p.useMemo(()=>({show:n.onShow||(()=>{}),hide:n.onHide||(()=>{}),update:n.onUpdate||(()=>{})}),[n.onShow,n.onHide,n.onUpdate]),{x:b,y:h,placement:m,strategy:y,update:E,refs:v,middlewareData:k}=R9({placement:n.placement||"bottom-start",strategy:n.strategy,middleware:u}),[C,D]=p.useState(null);p.useEffect(()=>{c.current=!0},[]),p.useEffect(()=>{r&&!Ea.get(l)?(Ea.set(l,!0),g.show()):!r&&Ea.get(l)&&(Ea.delete(l),g.hide())},[r]);const I=p.useCallback(()=>{E(),g.update()},[E,g]);p.useEffect(I,[n.placement,n.strategy,u]),H9(d,v,f,n),B9(n.adaptiveWidth,v.reference,D),p.useEffect(()=>{if(v.reference.current&&v.floating.current&&r)return n.autoUpdate===!1?()=>{}:B6(v.reference.current,v.floating.current,I,typeof n.autoUpdate=="object"?n.autoUpdate:void 0)},[r,I,v]);const T=p.useRef(!0);p.useEffect(()=>{!(v.reference.current instanceof Element)&&v.reference.current&&v.floating.current&&T.current&&(T.current=!1,I(),window.requestAnimationFrame(()=>{T.current=!0,I()}))},[v]);const z={referenceRef:v.setReference,placement:m},A={floatingRef:v.setFloating,props:n,mounted:c,setShow:o,x:b,y:h,placement:m,strategy:y,referenceElWidth:C},Q={arrowRef:f,placement:m,x:(i=k.arrow)==null?void 0:i.x,y:(a=k.arrow)==null?void 0:a.y};return{referenceApi:z,floatingApi:A,arrowApi:Q,x:b,y:h,placement:m,strategy:y,update:I,refs:v,middlewareData:k}}const g2=p.forwardRef((t,n)=>{function r(m){if(t.as===p.Fragment||!t.as)return Ke.jsx(p.Fragment,{children:m});const y=t.as;return Ke.jsx(y,{ref:n,className:t.className,children:m})}const[o,i]=p.useState(t.show??!1),{referenceApi:a,floatingApi:l,arrowApi:c,placement:u}=p2([o,i],t),d={placement:u},[f,g]=typeof t.children=="function"?t.children(d):t.children;if(!p.isValidElement(f))return console.warn("<Float /> is missing a reference and floating element."),Ke.jsx(p.Fragment,{});if(t.composable||t.dialog)return r(Ke.jsx(bp.Provider,{value:a,children:Ke.jsx(vp.Provider,{value:l,children:Ke.jsx(Li.Provider,{value:c,children:typeof t.children=="function"?t.children(d):t.children})})},"FloatingNode"));const b=f2(f,{as:p.Fragment},{key:"reference-node"},a),h=yp(g,{as:t.floatingAs||"div"},{},l);return r([b,Ke.jsx(Li.Provider,{value:c,children:h},"floating-node")])});g2.displayName="Float";function K9(t){if(!t.children)return Ke.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,children:l,...c}=t;return c},[t]),r=c2("Float.Reference"),{placement:o}=r,i={placement:o};return f2(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||p.Fragment},n,r)}function G9(t){if(!t.children)return Ke.jsx(p.Fragment,{});const n=p.useMemo(()=>{const{as:a,enter:l,enterFrom:c,enterTo:u,leave:d,leaveFrom:f,leaveTo:g,originClass:b,tailwindcssOriginClass:h,transitionChild:m,children:y,...E}=t;return E},[t]),r=u2("Float.Content"),{placement:o}=r,i={placement:o};return yp(typeof t.children=="function"?t.children(i):t.children,{...t,as:t.as||"div"},n,r)}function Q9(t){const{arrowRef:n,placement:r,x:o,y:i}=d2("Float.Arrow"),a=p.useMemo(()=>{const{as:d,offset:f,children:g,...b}=t;return b},[t]),l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]],c={left:typeof o=="number"?`${o}px`:void 0,top:typeof i=="number"?`${i}px`:void 0,right:void 0,bottom:void 0,[l]:`${-1*(t.offset??4)}px`,...a.style};if(t.as===p.Fragment){const d={placement:r},f=typeof t.children=="function"?t.children(d):t.children;return f&&p.isValidElement(f)?Ke.jsx(f.type,{...f.props,ref:n,style:c}):Ke.jsx(p.Fragment,{})}const u=t.as||"div";return Ke.jsx(u,{ref:n,...a,style:c,children:t.children})}function wp(t){function n(){a&&l(!1)}let{onInitial:r,children:o,...i}=t;const[a,l]=p.useState(i.show??!1),c=p.useMemo(()=>{const{as:h,show:m,placement:y,strategy:E,offset:v,shift:k,flip:C,arrow:D,autoPlacement:I,hide:T,autoUpdate:z,zIndex:A,enter:Q,enterFrom:B,enterTo:F,leave:L,leaveFrom:_,leaveTo:R,originClass:V,tailwindcssOriginClass:H,portal:U,transform:J,middleware:X,onShow:N,onHide:ae,onUpdate:se,...M}=i;return M},[i]),{floatingApi:u,arrowApi:d,placement:f,refs:g}=p2([a,l],i);if(p.useEffect(()=>{l(i.show??!1)},[i.show]),r({show:a,setShow:l,placement:f,refs:g}),!o)return Ke.jsx(p.Fragment,{});const b=yp(typeof o=="function"?o({placement:f,close:n}):o,{...i,as:i.as||p.Fragment,show:a},c,u);return Ke.jsx(Li.Provider,{value:d,children:b})}function J9(t){function n(r){let{setShow:o,refs:i}=r;Nn("contextmenu",a=>{a.preventDefault(),i.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:a.clientX,y:a.clientY,top:a.clientY,left:a.clientX,right:a.clientX,bottom:a.clientY}}}),o(!0)}),Y9(i.floating,()=>{o(!1)})}return Ke.jsx(wp,{flip:!0,...t,show:!1,portal:!0,onInitial:n})}function Z9(t){function n(i){function a(){f(!0)}function l(){f(!1)}function c(h){g.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:h.clientX,y:h.clientY,top:h.clientY,left:h.clientX,right:h.clientX,bottom:h.clientY}}})}function u(h){a(),c(h)}function d(h){a(),c(h.touches[0])}let{setShow:f,refs:g}=i;const b=l2(g.floating);b&&(p.useEffect(()=>{if((r||r===void 0)&&!b.getElementById("headlesui-float-cursor-style")){const h=b.createElement("style");return(b.head||b.getElementsByTagName("head")[0]).appendChild(h),h.id="headlesui-float-cursor-style",h.appendChild(b.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var m;return(m=b.getElementById("headlesui-float-cursor-style"))==null?void 0:m.remove()}}},[r]),"ontouchstart"in window||0<navigator.maxTouchPoints?(Nn("touchstart",d),Nn("touchend",l),Nn("touchmove",d)):(Nn("mouseenter",u),Nn("mouseleave",l),Nn("mousemove",u)))}let{globalHideCursor:r,...o}=t;return Ke.jsx(wp,{...o,portal:!0,className:"headlesui-float-cursor-root",onInitial:n})}Object.assign(g2,{Reference:K9,Content:G9,Arrow:Q9,Virtual:wp,ContextMenu:J9,Cursor:Z9});const X9=`
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
	jn-z-10
`,eF=`
	jn-absolute
`,tF=`
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`,nF=`
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`,rF=`
	jn-opacity-50
	jn-cursor-not-allowed
`,yv=O.forwardRef((t,n)=>{let{text:r="",htmlFor:o=void 0,required:i=!1,className:a="",disabled:l=!1,floating:c=!1,minimized:u=!1,...d}=t;return O.createElement("label",xe({className:`
				juno-label 
				${X9} 
				${c?"juno-label-floating "+eF:""}
				${u?"juno-label-minimized "+tF:""}
				${l?"juno-label-disabled "+rF:""} 
				${a}
			`,htmlFor:o,ref:n},d),r,i?O.createElement("span",{className:`
					juno-required 
					${nF}
					`}):"")});yv.displayName="Label (JS)",yv.propTypes={text:j.string,htmlFor:j.string,required:j.bool,className:j.string,disabled:j.bool,floating:j.bool,minimized:j.bool};j.node,j.node,j.oneOf(["help","error","success"]),j.string;const oF=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,iF=`
  jn-text-theme-accent
`,aF=`
  jn-text-theme-danger 
`,lF=`
  jn-text-theme-success
`,sF=`
  jn-text-theme-warning  
`,cF=`
  jn-text-theme-on-default
`,h2=t=>{let{variant:n="default",size:r=null,className:o="",color:i="",...a}=t;const l=u=>u==="small"?"1rem":u==="large"?"3rem":u,c=r?{width:l(r),height:l(r)}:{};return O.createElement("svg",xe({className:`juno-spinner ${oF} ${i||(n==="primary"?iF:n==="danger"?aF:n==="success"?lF:n==="warning"?sF:cF)} ${o}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:c,role:"progressbar"},a),O.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),O.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};h2.propTypes={variant:j.oneOf(["primary","danger","default","success","warning"]),size:j.string,className:j.string,color:j.string};function na(t,n){let[r,o]=p.useState(t),i=yn(t);return Qe(()=>o(i.current),[i,o,...n]),r}function m2(t,n,r){let[o,i]=p.useState(r),a=t!==void 0,l=p.useRef(a),c=p.useRef(!1),u=p.useRef(!1);return!a||l.current||c.current?!a&&l.current&&!u.current&&(u.current=!0,l.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,l.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?t:o,ge(d=>(a||i(d),n==null?void 0:n(d)))]}let uF="div";var xp=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(xp||{});function dF(t,n){var r;let{features:o=1,...i}=t,a={ref:n,"aria-hidden":(2&o)==2||((r=i["aria-hidden"])==null?void 0:r),hidden:(4&o)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&o)==4&&(2&o)!=2&&{display:"none"}}};return mt({ourProps:a,theirProps:i,slot:{},defaultTag:uF,name:"Hidden"})}let b2=pt(dF);function jp(){let t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[];for(let[o,i]of Object.entries(t))y2(r,v2(n,o),i);return r}function v2(t,n){return t?t+"["+n+"]":n}function y2(t,n,r){if(Array.isArray(r))for(let[o,i]of r.entries())y2(t,v2(n,o.toString()),i);else r instanceof Date?t.push([n,r.toISOString()]):typeof r=="boolean"?t.push([n,r?"1":"0"]):typeof r=="string"?t.push([n,r]):typeof r=="number"?t.push([n,`${r}`]):r==null?t.push([n,""]):jp(r,n,t)}function w2(t){let{container:n,accept:r,walk:o,enabled:i=!0}=t,a=p.useRef(r),l=p.useRef(o);p.useEffect(()=>{a.current=r,l.current=o},[r,o]),Qe(()=>{if(!n||!i)return;let c=Xi(n);if(!c)return;let u=a.current,d=l.current,f=Object.assign(b=>u(b),{acceptNode:u}),g=c.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,f,!1);for(;g.nextNode();)d(g.currentNode)},[n,i,a,l])}function go(t,n,r){var o=Math.max,i=Math.min,a=Math.round;let l,c=r.initialDeps??[];return()=>{var u,d,f,g;let b;r.key&&(u=r.debug)!=null&&u.call(r)&&(b=Date.now());const h=t();if(!(h.length!==c.length||h.some((y,E)=>c[E]!==y)))return l;c=h;let m;if(r.key&&(d=r.debug)!=null&&d.call(r)&&(m=Date.now()),l=n(...h),r.key&&((f=r.debug)==null?void 0:f.call(r))){const y=a(100*(Date.now()-b))/100,E=a(100*(Date.now()-m))/100,v=(k,C)=>{for(k+="";k.length<C;)k=" "+k;return k};console.info(`%c⏱ ${v(E,5)} /${v(y,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${o(0,i(120-120*(E/16),120))}deg 100% 31%);`,r==null?void 0:r.key)}return(g=r==null?void 0:r.onChange)==null||g.call(r,l),l}}function tc(t){if(t===void 0)throw new Error("Unexpected undefined");return t}const fF=(t,n)=>1>Math.abs(t-n),pF=(t,n,r)=>{let o;return function(){for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];t.clearTimeout(o),o=t.setTimeout(()=>n.apply(this,a),r)}},gF=t=>t,hF=t=>{const n=Math.max(t.startIndex-t.overscan,0),r=Math.min(t.endIndex+t.overscan,t.count-1),o=[];for(let i=n;i<=r;i++)o.push(i);return o},mF=(t,n)=>{var r=Math.round;const o=t.scrollElement;if(!o)return;const i=t.targetWindow;if(!i)return;const a=c=>{const{width:u,height:d}=c;n({width:r(u),height:r(d)})};if(a(o.getBoundingClientRect()),!i.ResizeObserver)return()=>{};const l=new i.ResizeObserver(c=>{const u=c[0];if(u!=null&&u.borderBoxSize){const d=u.borderBoxSize[0];if(d)return void a({width:d.inlineSize,height:d.blockSize})}a(o.getBoundingClientRect())});return l.observe(o,{box:"border-box"}),()=>{l.unobserve(o)}},wv={passive:!0},bF=!(typeof window<"u")||"onscrollend"in window,vF=(t,n)=>{const r=t.scrollElement;if(!r)return;const o=t.targetWindow;if(!o)return;let i=0;const a=bF?()=>{}:pF(o,()=>{n(i,!1)},t.options.isScrollingResetDelay),l=d=>()=>{const{horizontal:f,isRtl:g}=t.options;i=f?r.scrollLeft*(g&&-1||1):r.scrollTop,a(),n(i,d)},c=l(!0),u=l(!1);return u(),r.addEventListener("scroll",c,wv),r.addEventListener("scrollend",u,wv),()=>{r.removeEventListener("scroll",c),r.removeEventListener("scrollend",u)}},yF=(t,n,r)=>{var o=Math.round;if(n!=null&&n.borderBoxSize){const i=n.borderBoxSize[0];if(i)return o(i[r.options.horizontal?"inlineSize":"blockSize"])}return o(t.getBoundingClientRect()[r.options.horizontal?"width":"height"])},wF=(t,n,r)=>{let{adjustments:o=0,behavior:i}=n;var a,l;(l=(a=r.scrollElement)==null?void 0:a.scrollTo)==null||l.call(a,{[r.options.horizontal?"left":"top"]:t+o,behavior:i})};class xF{constructor(n){var r=Math.max,o=Math.min,i=this;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let a=null;const l=()=>a||(this.targetWindow&&this.targetWindow.ResizeObserver?a=new this.targetWindow.ResizeObserver(c=>{c.forEach(u=>{this._measureElement(u.target,u)})}):null);return{disconnect:()=>{var c;(c=l())==null||c.disconnect(),a=null},observe:c=>{var u;return(u=l())==null?void 0:u.observe(c,{box:"border-box"})},unobserve:c=>{var u;return(u=l())==null?void 0:u.unobserve(c)}}})(),this.range=null,this.setOptions=a=>{Object.entries(a).forEach(l=>{let[c,u]=l;typeof u>"u"&&delete a[c]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:gF,rangeExtractor:hF,onChange:()=>{},measureElement:yF,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...a}},this.notify=a=>{var l,c;(c=(l=this.options).onChange)==null||c.call(l,this,a)},this.maybeNotify=go(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;const l=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==l){if(this.cleanup(),!l)return void this.maybeNotify();this.scrollElement=l,this.targetWindow=this.scrollElement&&"ownerDocument"in this.scrollElement?this.scrollElement.ownerDocument.defaultView:((a=this.scrollElement)==null?void 0:a.window)??null,this.elementsCache.forEach(c=>{this.observer.observe(c)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,c=>{this.scrollRect=c,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(c,u)=>{this.scrollAdjustments=0,this.scrollDirection=u?this.getScrollOffset()<c?"forward":"backward":null,this.scrollOffset=c,this.isScrolling=u,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(a,l)=>{const c=new Map,u=new Map;for(let d=l-1;0<=d;d--){const f=a[d];if(c.has(f.lane))continue;const g=u.get(f.lane);if(g==null||f.end>g.end?u.set(f.lane,f):f.end<g.end&&c.set(f.lane,!0),c.size===this.options.lanes)break}return u.size===this.options.lanes?Array.from(u.values()).sort((d,f)=>d.end===f.end?d.index-f.index:d.end-f.end)[0]:void 0},this.getMeasurementOptions=go(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(a,l,c,u,d)=>(this.pendingMeasuredCacheIndexes=[],{count:a,paddingStart:l,scrollMargin:c,getItemKey:u,enabled:d}),{key:!1}),this.getMeasurements=go(()=>[this.getMeasurementOptions(),this.itemSizeCache],(a,l)=>{let{count:c,paddingStart:u,scrollMargin:d,getItemKey:f,enabled:g}=a;if(!g)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(m=>{this.itemSizeCache.set(m.key,m.size)}));const b=0<this.pendingMeasuredCacheIndexes.length?o(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const h=this.measurementsCache.slice(0,b);for(let m=b;m<c;m++){const y=f(m),E=this.options.lanes===1?h[m-1]:this.getFurthestMeasurement(h,m),v=E?E.end+this.options.gap:u+d,k=l.get(y),C=typeof k=="number"?k:this.options.estimateSize(m),D=E?E.lane:m%this.options.lanes;h[m]={index:m,start:v,size:C,end:v+C,key:y,lane:D}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=go(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(a,l,c)=>this.range=0<a.length&&0<l?jF({measurements:a,outerSize:l,scrollOffset:c}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=go(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(a,l,c,u)=>l===null?[]:a({startIndex:l.startIndex,endIndex:l.endIndex,overscan:c,count:u}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{const l=this.options.indexAttribute,c=a.getAttribute(l);return c?parseInt(c,10):(console.warn(`Missing attribute name '${l}={index}' on measured element.`),-1)},this._measureElement=(a,l)=>{const c=this.indexFromElement(a),u=this.measurementsCache[c];if(!u)return;const d=u.key,f=this.elementsCache.get(d);f!==a&&(f&&this.observer.unobserve(f),this.observer.observe(a),this.elementsCache.set(d,a)),a.isConnected&&this.resizeItem(c,this.options.measureElement(a,l,this))},this.resizeItem=(a,l)=>{const c=this.measurementsCache[a];if(!c)return;const u=this.itemSizeCache.get(c.key)??c.size,d=l-u;d!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?c.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(c,d,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=d,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,l)),this.notify(!1))},this.measureElement=a=>a?void this._measureElement(a,void 0):void this.elementsCache.forEach((l,c)=>{l.isConnected||(this.observer.unobserve(l),this.elementsCache.delete(c))}),this.getVirtualItems=go(()=>[this.getIndexes(),this.getMeasurements()],(a,l)=>{const c=[];for(let u=0,d=a.length;u<d;u++){const f=a[u],g=l[f];c.push(g)}return c},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{const l=this.getMeasurements();return l.length===0?void 0:tc(l[x2(0,l.length-1,c=>tc(l[c]).start,a)])},this.getOffsetForAlignment=(a,l)=>{const c=this.getSize(),u=this.getScrollOffset();l==="auto"&&(a<=u?l="start":a>=u+c?l="end":l="start"),l==="start"?a=a:l==="end"?a-=c:l=="center"&&(a-=c/2);const d=this.options.horizontal?"scrollWidth":"scrollHeight",f=this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[d]:this.scrollElement[d]:0;return r(o(f-c,a),0)},this.getOffsetForIndex=function(a){let l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"auto";a=r(0,o(a,i.options.count-1));const c=i.measurementsCache[a];if(!c)return;const u=i.getSize(),d=i.getScrollOffset();if(l==="auto")if(c.end>=d+u-i.options.scrollPaddingEnd)l="end";else if(c.start<=d+i.options.scrollPaddingStart)l="start";else return[d,l];const f=l==="end"?c.end+i.options.scrollPaddingEnd:c.start-i.options.scrollPaddingStart;return[i.getOffsetForAlignment(f,l),l]},this.isDynamicMode=()=>0<this.elementsCache.size,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(a){let{align:l="start",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getOffsetForAlignment(a,l),{adjustments:void 0,behavior:c})},this.scrollToIndex=function(a){let{align:l="auto",behavior:c}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};a=r(0,o(a,i.options.count-1)),i.cancelScrollToIndex(),c==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const u=i.getOffsetForIndex(a,l);if(!u)return;const[d,f]=u;i._scrollToOffset(d,{adjustments:void 0,behavior:c}),c!=="smooth"&&i.isDynamicMode()&&i.targetWindow&&(i.scrollToIndexTimeoutId=i.targetWindow.setTimeout(()=>{if(i.scrollToIndexTimeoutId=null,i.elementsCache.has(i.options.getItemKey(a))){const[g]=tc(i.getOffsetForIndex(a,f));fF(g,i.getScrollOffset())||i.scrollToIndex(a,{align:f,behavior:c})}else i.scrollToIndex(a,{align:f,behavior:c})}))},this.scrollBy=function(a){let{behavior:l}=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};i.cancelScrollToIndex(),l==="smooth"&&i.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i._scrollToOffset(i.getScrollOffset()+a,{adjustments:void 0,behavior:l})},this.getTotalSize=()=>{var a;const l=this.getMeasurements();let c;return c=l.length===0?this.options.paddingStart:this.options.lanes===1?((a=l[l.length-1])==null?void 0:a.end)??0:r(...l.slice(-this.options.lanes).map(u=>u.end)),r(c-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(a,l)=>{let{adjustments:c,behavior:u}=l;this.options.scrollToFn(a,{behavior:u,adjustments:c},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(n)}}const x2=(t,n,r,o)=>{for(;t<=n;){const i=0|(t+n)/2,a=r(i);if(a<o)t=i+1;else if(a>o)n=i-1;else return i}return 0<t?t-1:0};function jF(t){let{measurements:n,outerSize:r,scrollOffset:o}=t;const i=n.length-1,a=x2(0,i,c=>n[c].start,o);let l=a;for(;l<i&&n[l].end<o+r;)l++;return{startIndex:a,endIndex:l}}const EF=typeof document>"u"?p.useEffect:p.useLayoutEffect;function kF(t){const n=p.useReducer(()=>({}),{})[1],r={...t,onChange:(i,a)=>{var l;a?Bn.flushSync(n):n(),(l=t.onChange)==null||l.call(t,i,a)}},[o]=p.useState(()=>new xF(r));return o.setOptions(r),p.useEffect(()=>o._didMount(),[]),EF(()=>o._willUpdate()),o}function OF(t){return kF({observeElementRect:mF,observeElementOffset:vF,scrollToFn:wF,...t})}function xv(t,n){let r=p.useRef([]),o=ge(t);p.useEffect(()=>{let i=[...r.current];for(let[a,l]of n.entries())if(r.current[a]!==l){let c=o(n,i);return r.current=n,c}},[o,...n])}function SF(t){function n(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",n))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",n),n())}let Vr=[];SF(()=>{function t(n){n.target instanceof HTMLElement&&n.target!==document.body&&Vr[0]!==n.target&&(Vr.unshift(n.target),Vr=Vr.filter(r=>r!=null&&r.isConnected),Vr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});var CF=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(CF||{}),PF=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(PF||{}),IF=(t=>(t[t.Pointer=0]="Pointer",t[t.Focus=1]="Focus",t[t.Other=2]="Other",t))(IF||{}),TF=(t=>(t[t.OpenCombobox=0]="OpenCombobox",t[t.CloseCombobox=1]="CloseCombobox",t[t.GoToOption=2]="GoToOption",t[t.RegisterOption=3]="RegisterOption",t[t.UnregisterOption=4]="UnregisterOption",t[t.RegisterLabel=5]="RegisterLabel",t[t.SetActivationTrigger=6]="SetActivationTrigger",t[t.UpdateVirtualOptions=7]="UpdateVirtualOptions",t))(TF||{});function nc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:l=>l,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=n(t.options.slice()),i=0<o.length&&o[0].dataRef.current.order!==null?o.sort((l,c)=>l.dataRef.current.order-c.dataRef.current.order):Ql(o,l=>l.dataRef.current.domRef.current),a=r?i.indexOf(r):null;return a===-1&&(a=null),{options:i,activeOptionIndex:a}}let DF={1(t){var n;return(n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},0(t){var n,r;if((n=t.dataRef.current)!=null&&n.disabled||t.comboboxState===0)return t;if((r=t.dataRef.current)!=null&&r.value){let o=t.dataRef.current.calculateIndex(t.dataRef.current.value);if(o!==-1)return{...t,activeOptionIndex:o,comboboxState:0}}return{...t,comboboxState:0}},2(t,n){var r,o,i,a,l;if((r=t.dataRef.current)!=null&&r.disabled||(o=t.dataRef.current)!=null&&o.optionsRef.current&&!((i=t.dataRef.current)!=null&&i.optionsPropsRef.current.static)&&t.comboboxState===1)return t;if(t.virtual){let f=n.focus===Le.Specific?n.idx:fl(n,{resolveItems:()=>t.virtual.options,resolveActiveIndex:()=>{var b,h;return(h=(b=t.activeOptionIndex)==null?t.virtual.options.findIndex(m=>!t.virtual.disabled(m)):b)==null?null:h},resolveDisabled:t.virtual.disabled,resolveId(){throw new Error("Function not implemented.")}}),g=(a=n.trigger)==null?2:a;return t.activeOptionIndex===f&&t.activationTrigger===g?t:{...t,activeOptionIndex:f,activationTrigger:g}}let c=nc(t);if(c.activeOptionIndex===null){let f=c.options.findIndex(g=>!g.dataRef.current.disabled);f!==-1&&(c.activeOptionIndex=f)}let u=n.focus===Le.Specific?n.idx:fl(n,{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled}),d=(l=n.trigger)==null?2:l;return t.activeOptionIndex===u&&t.activationTrigger===d?t:{...t,...c,activeOptionIndex:u,activationTrigger:d}},3:(t,n)=>{var r,o,i;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:[...t.options,n.payload]};let a=n.payload,l=nc(t,u=>(u.push(a),u));t.activeOptionIndex===null&&(o=t.dataRef.current)!=null&&o.isSelected(n.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(a));let c={...t,...l,activationTrigger:2};return(i=t.dataRef.current)!=null&&i.__demoMode&&t.dataRef.current.value===void 0&&(c.activeOptionIndex=0),c},4:(t,n)=>{var r;if((r=t.dataRef.current)!=null&&r.virtual)return{...t,options:t.options.filter(i=>i.id!==n.id)};let o=nc(t,i=>{let a=i.findIndex(l=>l.id===n.id);return a!==-1&&i.splice(a,1),i});return{...t,...o,activationTrigger:2}},5:(t,n)=>t.labelId===n.id?t:{...t,labelId:n.id},6:(t,n)=>t.activationTrigger===n.trigger?t:{...t,activationTrigger:n.trigger},7:(t,n)=>{var r;if(((r=t.virtual)==null?void 0:r.options)===n.options)return t;let o=t.activeOptionIndex;if(t.activeOptionIndex!==null){let i=n.options.indexOf(t.virtual.options[t.activeOptionIndex]);o=i===-1?null:i}return{...t,activeOptionIndex:o,virtual:Object.assign({},t.virtual,{options:n.options})}}},Ep=p.createContext(null);Ep.displayName="ComboboxActionsContext";function ra(t){let n=p.useContext(Ep);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ra),r}return n}let j2=p.createContext(null);function MF(t){var n;let r=so("VirtualProvider"),[o,i]=p.useMemo(()=>{let u=r.optionsRef.current;if(!u)return[0,0];let d=window.getComputedStyle(u);return[parseFloat(d.paddingBlockStart||d.paddingTop),parseFloat(d.paddingBlockEnd||d.paddingBottom)]},[r.optionsRef.current]),a=OF({scrollPaddingStart:o,scrollPaddingEnd:i,count:r.virtual.options.length,estimateSize(){return 40},getScrollElement(){var u;return(u=r.optionsRef.current)==null?null:u},overscan:12}),[l,c]=p.useState(0);return Qe(()=>{c(u=>u+1)},[(n=r.virtual)==null?void 0:n.options]),O.createElement(j2.Provider,{value:a},O.createElement("div",{style:{position:"relative",width:"100%",height:`${a.getTotalSize()}px`},ref:u=>{if(u){if(typeof process<"u"&&b7.JEST_WORKER_ID!==void 0||r.activationTrigger===0)return;r.activeOptionIndex!==null&&r.virtual.options.length>r.activeOptionIndex&&a.scrollToIndex(r.activeOptionIndex)}}},a.getVirtualItems().map(u=>{var d;return O.createElement(p.Fragment,{key:u.key},O.cloneElement((d=t.children)==null?void 0:d.call(t,{option:r.virtual.options[u.index],open:r.comboboxState===0}),{key:`${l}-${u.key}`,"data-index":u.index,"aria-setsize":r.virtual.options.length,"aria-posinset":u.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${u.start}px)`,overflowAnchor:"none"}}))})))}let kp=p.createContext(null);kp.displayName="ComboboxDataContext";function so(t){let n=p.useContext(kp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,so),r}return n}function NF(t,n){return ot(n.type,DF,t,n)}let RF=p.Fragment;function FF(t,n){let{value:r,defaultValue:o,onChange:i,form:a,name:l,by:c=null,disabled:u=!1,__demoMode:d=!1,nullable:f=!1,multiple:g=!1,immediate:b=!1,virtual:h=null,...m}=t,y=null,[E=g?[]:void 0,v]=m2(r,i,o),[k,C]=p.useReducer(NF,{dataRef:p.createRef(),comboboxState:d?0:1,options:[],virtual:null,activeOptionIndex:null,activationTrigger:2,labelId:null}),D=p.useRef(!1),I=p.useRef({static:!1,hold:!1}),T=p.useRef(null),z=p.useRef(null),A=p.useRef(null),Q=p.useRef(null),B=ge(typeof c=="string"?(oe,me)=>{let ve=c;return(oe==null?void 0:oe[ve])===(me==null?void 0:me[ve])}:c??((oe,me)=>oe===me)),F=ge(oe=>k.options.findIndex(me=>B(me.dataRef.current.value,oe))),L=p.useCallback(oe=>ot(R.mode,{1:()=>E.some(me=>B(me,oe)),0:()=>B(E,oe)}),[E]),_=ge(oe=>k.activeOptionIndex===F(oe)),R=p.useMemo(()=>({...k,immediate:!1,optionsPropsRef:I,labelRef:T,inputRef:z,buttonRef:A,optionsRef:Q,value:E,defaultValue:o,disabled:u,mode:g?1:0,virtual:k.virtual,get activeOptionIndex(){if(D.current&&k.activeOptionIndex===null&&0<k.options.length){let oe=k.options.findIndex(me=>!me.dataRef.current.disabled);if(oe!==-1)return oe}return k.activeOptionIndex},calculateIndex:F,compare:B,isSelected:L,isActive:_,nullable:f,__demoMode:d}),[E,o,u,g,f,d,k,y]);Qe(()=>{},[y,void 0]),Qe(()=>{k.dataRef.current=R},[R]),ap([R.buttonRef,R.inputRef,R.optionsRef],()=>ie.closeCombobox(),R.comboboxState===0);let V=p.useMemo(()=>{var oe,me,ve;return{open:R.comboboxState===0,disabled:u,activeIndex:R.activeOptionIndex,activeOption:R.activeOptionIndex===null?null:R.virtual?R.virtual.options[(oe=R.activeOptionIndex)==null?0:oe]:(ve=(me=R.options[R.activeOptionIndex])==null?void 0:me.dataRef.current.value)==null?null:ve,value:E}},[R,u,E]),H=ge(()=>{if(R.activeOptionIndex!==null){if(R.virtual)se(R.virtual.options[R.activeOptionIndex]);else{let{dataRef:oe}=R.options[R.activeOptionIndex];se(oe.current.value)}ie.goToOption(Le.Specific,R.activeOptionIndex)}}),U=ge(()=>{C({type:0}),D.current=!0}),J=ge(()=>{C({type:1}),D.current=!1}),X=ge((oe,me,ve)=>(D.current=!1,oe===Le.Specific?C({type:2,focus:Le.Specific,idx:me,trigger:ve}):C({type:2,focus:oe,trigger:ve}))),N=ge((oe,me)=>(C({type:3,payload:{id:oe,dataRef:me}}),()=>{R.isActive(me.current.value)&&(D.current=!0),C({type:4,id:oe})})),ae=ge(oe=>(C({type:5,id:oe}),()=>C({type:5,id:null}))),se=ge(oe=>ot(R.mode,{0(){return v==null?void 0:v(oe)},1(){let me=R.value.slice(),ve=me.findIndex(He=>B(He,oe));return ve===-1?me.push(oe):me.splice(ve,1),v==null?void 0:v(me)}})),M=ge(oe=>{C({type:6,trigger:oe})}),ie=p.useMemo(()=>({onChange:se,registerOption:N,registerLabel:ae,goToOption:X,closeCombobox:J,openCombobox:U,setActivationTrigger:M,selectActiveOption:H}),[]),ye=n===null?{}:{ref:n},Pe=p.useRef(null),$e=En();return p.useEffect(()=>{Pe.current&&o!==void 0&&$e.addEventListener(Pe.current,"reset",()=>{v==null||v(o)})},[Pe,v]),O.createElement(Ep.Provider,{value:ie},O.createElement(kp.Provider,{value:R},O.createElement(Zl,{value:ot(R.comboboxState,{0:dt.Open,1:dt.Closed})},l!=null&&E!=null&&jp({[l]:E}).map((oe,me)=>{let[ve,He]=oe;return O.createElement(b2,{features:xp.Hidden,ref:me===0?at=>{var Je;Pe.current=(Je=at==null?void 0:at.closest("form"))==null?null:Je}:void 0,...dl({key:ve,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,disabled:u,name:ve,value:He})})}),mt({ourProps:ye,theirProps:m,slot:V,defaultTag:RF,name:"Combobox"}))))}let LF="input";function AF(t,n){var r,o,i,a,l,c=Math.abs;let u=un(),{id:d=`headlessui-combobox-input-${u}`,onChange:f,displayValue:g,type:b="text",...h}=t,m=so("Combobox.Input"),y=ra("Combobox.Input"),E=jt(m.inputRef,n),v=Jl(m.inputRef),k=p.useRef(!1),C=En(),D=ge(()=>{y.onChange(null),m.optionsRef.current&&(m.optionsRef.current.scrollTop=0),y.goToOption(Le.Nothing)}),I=function(){var H;return typeof g=="function"&&m.value!==void 0?(H=g(m.value))==null?"":H:typeof m.value=="string"?m.value:""}();xv((H,U)=>{let[J,X]=H,[N,ae]=U;if(k.current)return;let se=m.inputRef.current;se&&((ae===0&&X===1||J!==N)&&(se.value=J),requestAnimationFrame(()=>{if(!k.current&&se&&(v==null?void 0:v.activeElement)===se){let{selectionStart:M,selectionEnd:ie}=se;c((ie??0)-(M??0))===0&&M===0&&se.setSelectionRange(se.value.length,se.value.length)}}))},[I,m.comboboxState,v]),xv((H,U)=>{let[J]=H,[X]=U;if(J===0&&X===1){if(k.current)return;let N=m.inputRef.current;if(!N)return;let ae=N.value,{selectionStart:se,selectionEnd:M,selectionDirection:ie}=N;N.value="",N.value=ae,ie===null?N.setSelectionRange(se,M):N.setSelectionRange(se,M,ie)}},[m.comboboxState]);let T=p.useRef(!1),z=ge(()=>{T.current=!0}),A=ge(()=>{C.nextFrame(()=>{T.current=!1})}),Q=ge(H=>{switch(k.current=!0,H.key){case Me.Enter:if(k.current=!1,m.comboboxState!==0||T.current)return;if(H.preventDefault(),H.stopPropagation(),m.activeOptionIndex===null)return void y.closeCombobox();y.selectActiveOption(),m.mode===0&&y.closeCombobox();break;case Me.ArrowDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),ot(m.comboboxState,{0:()=>y.goToOption(Le.Next),1:()=>y.openCombobox()});case Me.ArrowUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),ot(m.comboboxState,{0:()=>y.goToOption(Le.Previous),1:()=>{y.openCombobox(),C.nextFrame(()=>{m.value||y.goToOption(Le.Last)})}});case Me.Home:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.First);case Me.PageUp:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.First);case Me.End:if(H.shiftKey)break;return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.Last);case Me.PageDown:return k.current=!1,H.preventDefault(),H.stopPropagation(),y.goToOption(Le.Last);case Me.Escape:return k.current=!1,m.comboboxState===0?(H.preventDefault(),m.optionsRef.current&&!m.optionsPropsRef.current.static&&H.stopPropagation(),m.nullable&&m.mode===0&&m.value===null&&D(),y.closeCombobox()):void 0;case Me.Tab:if(k.current=!1,m.comboboxState!==0)return;m.mode===0&&m.activationTrigger!==1&&y.selectActiveOption(),y.closeCombobox()}}),B=ge(H=>{f==null||f(H),m.nullable&&m.mode===0&&H.target.value===""&&D(),y.openCombobox()}),F=ge(H=>{var U,J,X;let N=(U=H.relatedTarget)==null?Vr.find(ae=>ae!==H.currentTarget):U;if(k.current=!1,!((J=m.optionsRef.current)!=null&&J.contains(N))&&!((X=m.buttonRef.current)!=null&&X.contains(N))&&m.comboboxState===0)return H.preventDefault(),m.mode===0&&(m.nullable&&m.value===null?D():m.activationTrigger!==1&&y.selectActiveOption()),y.closeCombobox()}),L=ge(H=>{var U,J,X;let N=(U=H.relatedTarget)==null?Vr.find(ae=>ae!==H.currentTarget):U;(J=m.buttonRef.current)!=null&&J.contains(N)||(X=m.optionsRef.current)!=null&&X.contains(N)||m.disabled||m.immediate&&m.comboboxState!==0&&(y.openCombobox(),C.nextFrame(()=>{y.setActivationTrigger(1)}))}),_=na(()=>{if(m.labelId)return[m.labelId].join(" ")},[m.labelId]),R=p.useMemo(()=>({open:m.comboboxState===0,disabled:m.disabled}),[m]),V={ref:E,id:d,role:"combobox",type:b,"aria-controls":(r=m.optionsRef.current)==null?void 0:r.id,"aria-expanded":m.comboboxState===0,"aria-activedescendant":m.activeOptionIndex===null?void 0:m.virtual?(o=m.options.find(H=>{var U;return!((U=m.virtual)!=null&&U.disabled(H.dataRef.current.value))&&m.compare(H.dataRef.current.value,m.virtual.options[m.activeOptionIndex])}))==null?void 0:o.id:(i=m.options[m.activeOptionIndex])==null?void 0:i.id,"aria-labelledby":_,"aria-autocomplete":"list",defaultValue:(l=(a=t.defaultValue)==null?m.defaultValue===void 0?null:g==null?void 0:g(m.defaultValue):a)==null?m.defaultValue:l,disabled:m.disabled,onCompositionStart:z,onCompositionEnd:A,onKeyDown:Q,onChange:B,onFocus:L,onBlur:F};return mt({ourProps:V,theirProps:h,slot:R,defaultTag:LF,name:"Combobox.Input"})}let _F="button";function $F(t,n){var r;let o=so("Combobox.Button"),i=ra("Combobox.Button"),a=jt(o.buttonRef,n),l=un(),{id:c=`headlessui-combobox-button-${l}`,...u}=t,d=En(),f=ge(y=>{switch(y.key){case Me.ArrowDown:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&i.openCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Me.ArrowUp:return y.preventDefault(),y.stopPropagation(),o.comboboxState===1&&(i.openCombobox(),d.nextFrame(()=>{o.value||i.goToOption(Le.Last)})),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})});case Me.Escape:return o.comboboxState===0?(y.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&y.stopPropagation(),i.closeCombobox(),d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})})):void 0}}),g=ge(y=>up(y.currentTarget)?y.preventDefault():(o.comboboxState===0?i.closeCombobox():(y.preventDefault(),i.openCombobox()),void d.nextFrame(()=>{var E;return(E=o.inputRef.current)==null?void 0:E.focus({preventScroll:!0})}))),b=na(()=>{if(o.labelId)return[o.labelId,c].join(" ")},[o.labelId,c]),h=p.useMemo(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),m={ref:a,id:c,type:lp(t,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(r=o.optionsRef.current)==null?void 0:r.id,"aria-expanded":o.comboboxState===0,"aria-labelledby":b,disabled:o.disabled,onClick:g,onKeyDown:f};return mt({ourProps:m,theirProps:u,slot:h,defaultTag:_F,name:"Combobox.Button"})}let zF="label";function HF(t,n){let r=un(),{id:o=`headlessui-combobox-label-${r}`,...i}=t,a=so("Combobox.Label"),l=ra("Combobox.Label"),c=jt(a.labelRef,n);Qe(()=>l.registerLabel(o),[o]);let u=ge(()=>{var f;return(f=a.inputRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]);return mt({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:zF,name:"Combobox.Label"})}let BF="ul",VF=Pr.RenderStrategy|Pr.Static;function WF(t,n){let r=un(),{id:o=`headlessui-combobox-options-${r}`,hold:i=!1,...a}=t,l=so("Combobox.Options"),c=jt(l.optionsRef,n),u=ea(),d=u===null?l.comboboxState===0:(u&dt.Open)===dt.Open;Qe(()=>{var h;l.optionsPropsRef.current.static=(h=t.static)!=null&&h},[l.optionsPropsRef,t.static]),Qe(()=>{l.optionsPropsRef.current.hold=i},[l.optionsPropsRef,i]),w2({container:l.optionsRef.current,enabled:l.comboboxState===0,accept(h){return h.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});let f=na(()=>{var h,m;return(m=l.labelId)==null?(h=l.buttonRef.current)==null?void 0:h.id:m},[l.labelId,l.buttonRef.current]),g=p.useMemo(()=>({open:l.comboboxState===0,option:void 0}),[l]),b={"aria-labelledby":f,role:"listbox","aria-multiselectable":l.mode===1||void 0,id:o,ref:c};return l.virtual&&l.comboboxState===0&&Object.assign(a,{children:O.createElement(MF,null,a.children)}),mt({ourProps:b,theirProps:a,slot:g,defaultTag:BF,features:VF,visible:d,name:"Combobox.Options"})}let UF="li";function qF(t,n){var r;let o=un(),{id:i=`headlessui-combobox-option-${o}`,disabled:a=!1,value:l,order:c=null,...u}=t,d=so("Combobox.Option"),f=ra("Combobox.Option"),g=d.virtual?d.activeOptionIndex===d.calculateIndex(l):d.activeOptionIndex!==null&&((r=d.options[d.activeOptionIndex])==null?void 0:r.id)===i,b=d.isSelected(l),h=p.useRef(null),m=yn({disabled:a,value:l,domRef:h,order:c}),y=p.useContext(j2),E=jt(n,h,y?y.measureElement:null),v=ge(()=>f.onChange(l));Qe(()=>f.registerOption(i,m),[m,i]);let k=p.useRef(!(d.virtual||d.__demoMode));Qe(()=>{if(d.virtual&&d.__demoMode){let B=Vt();return B.requestAnimationFrame(()=>{k.current=!0}),B.dispose}},[d.virtual,d.__demoMode]),Qe(()=>{if(k.current&&d.comboboxState===0&&g&&d.activationTrigger!==0){let B=Vt();return B.requestAnimationFrame(()=>{var F,L;(L=(F=h.current)==null?void 0:F.scrollIntoView)==null||L.call(F,{block:"nearest"})}),B.dispose}},[h,g,d.comboboxState,d.activationTrigger,d.activeOptionIndex]);let C=ge(B=>{var F;return a||(F=d.virtual)!=null&&F.disabled(l)?B.preventDefault():(v(),Hx()||requestAnimationFrame(()=>{var L;return(L=d.inputRef.current)==null?void 0:L.focus({preventScroll:!0})}),void(d.mode===0&&requestAnimationFrame(()=>f.closeCombobox())))}),D=ge(()=>{var B;if(a||(B=d.virtual)!=null&&B.disabled(l))return f.goToOption(Le.Nothing);let F=d.calculateIndex(l);f.goToOption(Le.Specific,F)}),I=sp(),T=ge(B=>I.update(B)),z=ge(B=>{var F;if(!(!I.wasMoved(B)||a||(F=d.virtual)!=null&&F.disabled(l)||g)){let L=d.calculateIndex(l);f.goToOption(Le.Specific,L,0)}}),A=ge(B=>{var F;I.wasMoved(B)&&(a||(F=d.virtual)!=null&&F.disabled(l)||g&&(d.optionsPropsRef.current.hold||f.goToOption(Le.Nothing)))}),Q=p.useMemo(()=>({active:g,selected:b,disabled:a}),[g,b,a]);return mt({ourProps:{id:i,ref:E,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0||void 0,"aria-selected":b,disabled:void 0,onClick:C,onFocus:D,onPointerEnter:T,onMouseEnter:T,onPointerMove:z,onMouseMove:z,onPointerLeave:A,onMouseLeave:A},theirProps:u,slot:Q,defaultTag:UF,name:"Combobox.Option"})}let YF=pt(FF),KF=pt($F),GF=pt(AF),QF=pt(HF),JF=pt(WF),ZF=pt(qF);Object.assign(YF,{Input:GF,Button:KF,Label:QF,Options:JF,Option:ZF});p.createContext();j.string,j.node,j.string,j.string,j.bool,j.bool,j.node,j.node,j.string,j.bool,j.string,j.bool,j.string,j.bool,j.func,j.func,j.func,j.func,j.string,j.bool,j.node,j.bool,j.bool,j.string,j.string,j.oneOf(["full","auto"]),j.string;j.string,j.bool,j.string,j.string,j.string;j.string,j.node;j.string,j.node;j.string,j.node;let jv=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Ev(t){var n,r;let o=(n=t.innerText)==null?"":n,i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return o;let a=!1;for(let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),a=!0;let l=a?(r=i.innerText)==null?"":r:o;return jv.test(l)&&(l=l.replace(jv,"")),l}function XF(t){let n=t.getAttribute("aria-label");if(typeof n=="string")return n.trim();let r=t.getAttribute("aria-labelledby");if(r){let o=r.split(" ").map(i=>{let a=document.getElementById(i);if(a){let l=a.getAttribute("aria-label");return typeof l=="string"?l.trim():Ev(a).trim()}return null}).filter(Boolean);if(0<o.length)return o.join(", ")}return Ev(t).trim()}function E2(t){let n=p.useRef(""),r=p.useRef("");return ge(()=>{let o=t.current;if(!o)return"";let i=o.innerText;if(n.current===i)return r.current;let a=XF(o).trim().toLowerCase();return n.current=i,r.current=a,a})}var e8=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(e8||{}),t8=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(t8||{}),n8=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t))(n8||{});function rc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeItemIndex===null?null:t.items[t.activeItemIndex],o=Ql(n(t.items.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{items:o,activeItemIndex:i}}let r8={1(t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},0(t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},2:(t,n)=>{var r;let o=rc(t),i=fl(n,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeItemIndex===null?t.items:t.items.slice(t.activeItemIndex+r).concat(t.items.slice(0,t.activeItemIndex+r))).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!l.dataRef.current.disabled}),a=i?t.items.indexOf(i):-1;return a===-1||a===t.activeItemIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeItemIndex:a,activationTrigger:1}},4(t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},5:(t,n)=>{let r=rc(t,o=>[...o,{id:n.id,dataRef:n.dataRef}]);return{...t,...r}},6:(t,n)=>{let r=rc(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}}},Op=p.createContext(null);Op.displayName="MenuContext";function is(t){let n=p.useContext(Op);if(n===null){let r=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,is),r}return n}function o8(t,n){return ot(n.type,r8,t,n)}let i8=p.Fragment;function a8(t,n){let{__demoMode:r=!1,...o}=t,i=p.useReducer(o8,{__demoMode:r,menuState:r?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:l,buttonRef:c},u]=i,d=jt(n);ap([c,l],(b,h)=>{var m;u({type:1}),Gl(h,Kl.Loose)||(b.preventDefault(),(m=c.current)==null||m.focus())},a===0);let f=ge(()=>{u({type:1})}),g=p.useMemo(()=>({open:a===0,close:f}),[a,f]);return O.createElement(Op.Provider,{value:i},O.createElement(Zl,{value:ot(a,{0:dt.Open,1:dt.Closed})},mt({ourProps:{ref:d},theirProps:o,slot:g,defaultTag:i8,name:"Menu"})))}let l8="button";function s8(t,n){var r;let o=un(),{id:i=`headlessui-menu-button-${o}`,...a}=t,[l,c]=is("Menu.Button"),u=jt(l.buttonRef,n),d=En(),f=ge(y=>{switch(y.key){case Me.Space:case Me.Enter:case Me.ArrowDown:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Le.First}));break;case Me.ArrowUp:y.preventDefault(),y.stopPropagation(),c({type:0}),d.nextFrame(()=>c({type:2,focus:Le.Last}))}}),g=ge(y=>{switch(y.key){case Me.Space:y.preventDefault()}}),b=ge(y=>up(y.currentTarget)?y.preventDefault():void(t.disabled||(l.menuState===0?(c({type:1}),d.nextFrame(()=>{var E;return(E=l.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})})):(y.preventDefault(),c({type:0}))))),h=p.useMemo(()=>({open:l.menuState===0}),[l]),m={ref:u,id:i,type:lp(t,l.buttonRef),"aria-haspopup":"menu","aria-controls":(r=l.itemsRef.current)==null?void 0:r.id,"aria-expanded":l.menuState===0,onKeyDown:f,onKeyUp:g,onClick:b};return mt({ourProps:m,theirProps:a,slot:h,defaultTag:l8,name:"Menu.Button"})}let c8="div",u8=Pr.RenderStrategy|Pr.Static;function d8(t,n){var r,o;let i=un(),{id:a=`headlessui-menu-items-${i}`,...l}=t,[c,u]=is("Menu.Items"),d=jt(c.itemsRef,n),f=Jl(c.itemsRef),g=En(),b=ea(),h=b===null?c.menuState===0:(b&dt.Open)===dt.Open;p.useEffect(()=>{let k=c.itemsRef.current;k&&c.menuState===0&&k!==(f==null?void 0:f.activeElement)&&k.focus({preventScroll:!0})},[c.menuState,c.itemsRef,f]),w2({container:c.itemsRef.current,enabled:c.menuState===0,accept(k){return k.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:k.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(k){k.setAttribute("role","none")}});let m=ge(k=>{var C,D;switch(g.dispose(),k.key){case Me.Space:if(c.searchQuery!=="")return k.preventDefault(),k.stopPropagation(),u({type:3,value:k.key});case Me.Enter:if(k.preventDefault(),k.stopPropagation(),u({type:1}),c.activeItemIndex!==null){let{dataRef:I}=c.items[c.activeItemIndex];(D=(C=I.current)==null?void 0:C.domRef.current)==null||D.click()}zx(c.buttonRef.current);break;case Me.ArrowDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.Next});case Me.ArrowUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.Previous});case Me.Home:case Me.PageUp:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.First});case Me.End:case Me.PageDown:return k.preventDefault(),k.stopPropagation(),u({type:2,focus:Le.Last});case Me.Escape:k.preventDefault(),k.stopPropagation(),u({type:1}),Vt().nextFrame(()=>{var I;return(I=c.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})});break;case Me.Tab:k.preventDefault(),k.stopPropagation(),u({type:1}),Vt().nextFrame(()=>{e6(c.buttonRef.current,k.shiftKey?zd.Previous:zd.Next)});break;default:k.key.length===1&&(u({type:3,value:k.key}),g.setTimeout(()=>u({type:4}),350))}}),y=ge(k=>{switch(k.key){case Me.Space:k.preventDefault()}}),E=p.useMemo(()=>({open:c.menuState===0}),[c]),v={"aria-activedescendant":c.activeItemIndex===null||(r=c.items[c.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(o=c.buttonRef.current)==null?void 0:o.id,id:a,onKeyDown:m,onKeyUp:y,role:"menu",tabIndex:0,ref:d};return mt({ourProps:v,theirProps:l,slot:E,defaultTag:c8,features:u8,visible:h,name:"Menu.Items"})}let f8=p.Fragment;function p8(t,n){let r=un(),{id:o=`headlessui-menu-item-${r}`,disabled:i=!1,...a}=t,[l,c]=is("Menu.Item"),u=l.activeItemIndex!==null&&l.items[l.activeItemIndex].id===o,d=p.useRef(null),f=jt(n,d);Qe(()=>{if(!l.__demoMode&&l.menuState===0&&u&&l.activationTrigger!==0){let I=Vt();return I.requestAnimationFrame(()=>{var T,z;(z=(T=d.current)==null?void 0:T.scrollIntoView)==null||z.call(T,{block:"nearest"})}),I.dispose}},[l.__demoMode,d,u,l.menuState,l.activationTrigger,l.activeItemIndex]);let g=E2(d),b=p.useRef({disabled:i,domRef:d,get textValue(){return g()}});Qe(()=>{b.current.disabled=i},[b,i]),Qe(()=>(c({type:5,id:o,dataRef:b}),()=>c({type:6,id:o})),[b,o]);let h=ge(()=>{c({type:1})}),m=ge(I=>i?I.preventDefault():(c({type:1}),void zx(l.buttonRef.current))),y=ge(()=>i?c({type:2,focus:Le.Nothing}):void c({type:2,focus:Le.Specific,id:o})),E=sp(),v=ge(I=>E.update(I)),k=ge(I=>{E.wasMoved(I)&&(i||u||c({type:2,focus:Le.Specific,id:o,trigger:0}))}),C=ge(I=>{E.wasMoved(I)&&(i||u&&c({type:2,focus:Le.Nothing}))}),D=p.useMemo(()=>({active:u,disabled:i,close:h}),[u,i,h]);return mt({ourProps:{id:o,ref:f,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,disabled:void 0,onClick:m,onFocus:y,onPointerEnter:v,onMouseEnter:v,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:D,defaultTag:f8,name:"Menu.Item"})}let g8=pt(a8),h8=pt(s8),m8=pt(d8),b8=pt(p8);Object.assign(g8,{Button:h8,Items:m8,Item:b8});j.string,j.node,j.any,j.bool;O.createContext();j.bool,j.string,j.node;j.number,j.number,j.bool,j.string,j.node;p.createContext();j.bool,j.string,j.bool,j.node,j.node,j.string,j.bool,j.bool,j.string,j.string,j.func,j.func,j.bool,j.node,j.bool,j.string;j.bool,j.bool,j.string,j.func;j.string,j.node,j.bool,j.bool,j.func;var v8=O.createContext({}),y8=function(){return O.useContext(v8)},w8=function(t,n){return`
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
	`)},x8=function(t){var n;return t&&(n={gridColumn:"span ".concat(t," / span ").concat(t)}),n},k2=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=Wn(t,["colSpan","nowrap","className","children"]),d=y8()||{},f=d.cellVerticalAlignment;return O.createElement("div",be({className:"juno-datagrid-cell ".concat(w8(o!==void 0&&o,f)," ").concat(a),style:x8(r),role:"gridcell",ref:n},u),c)});k2.displayName="DataGridCell";var j8=`
	jn-font-bold
	jn-text-theme-high
	jn-bg-theme-background-lvl-1
	jn-border-theme-background-lvl-0
`,E8=p.forwardRef(function(t,n){var r=t.colSpan,o=t.nowrap,i=t.className,a=i===void 0?"":i,l=t.children,c=l===void 0?null:l,u=Wn(t,["colSpan","nowrap","className","children"]);return O.createElement(k2,be({colSpan:r,nowrap:o!==void 0&&o,className:"juno-datagrid-head-cell ".concat(j8," ").concat(a),role:"columnheader",ref:n},u),c)});E8.displayName="DataGridHeadCell";var k8=`
	jn-contents
`,O8=p.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=Wn(t,["className","children"]);return O.createElement("div",be({className:"juno-datagrid-row ".concat(k8," ").concat(o),role:"row",ref:n},l),a)});O8.displayName="DataGridRow";var oc=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],Co={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var r=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-r.getTime())/864e5-3+(r.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},Ai={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(3<n&&21>n)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},zt=function(t,n){return n===void 0&&(n=2),("000"+t).slice(-1*n)},rn=function(t){return t===!0?1:0};function kv(t,n){var r;return function(){var o=this,i=arguments;clearTimeout(r),r=setTimeout(function(){return t.apply(o,i)},n)}}var ic=function(t){return t instanceof Array?t:[t]};function Mt(t,n,r){return r===!0?t.classList.add(n):void t.classList.remove(n)}function Ve(t,n,r){var o=window.document.createElement(t);return n=n||"",r=r||"",o.className=n,r!==void 0&&(o.textContent=r),o}function ka(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function O2(t,n){return n(t)?t:t.parentNode?O2(t.parentNode,n):void 0}function Oa(t,n){var r=Ve("div","numInputWrapper"),o=Ve("input","numInput "+t),i=Ve("span","arrowUp"),a=Ve("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),n!==void 0)for(var l in n)o.setAttribute(l,n[l]);return r.appendChild(o),r.appendChild(i),r.appendChild(a),r}function qt(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var ac=function(){},vl=function(t,n,r){return r.months[n?"shorthand":"longhand"][t]},S8={D:ac,F:function(t,n,r){t.setMonth(r.months.longhand.indexOf(n))},G:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,r){t.setHours(t.getHours()%12+12*rn(new RegExp(r.amPM[1],"i").test(n)))},M:function(t,n,r){t.setMonth(r.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(1e3*parseFloat(n))},W:function(t,n,r){var o=parseInt(n),i=new Date(t.getFullYear(),0,2+7*(o-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+r.firstDayOfWeek),i},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((12<=t.getHours()?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:ac,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:ac,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},Wr={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ki={Z:function(t){return t.toISOString()},D:function(t,n,r){return n.weekdays.shorthand[ki.w(t,n,r)]},F:function(t,n,r){return vl(ki.n(t,n,r)-1,!1,n)},G:function(t,n,r){return zt(ki.h(t,n,r))},H:function(t){return zt(t.getHours())},J:function(t,n){return n.ordinal===void 0?t.getDate():t.getDate()+n.ordinal(t.getDate())},K:function(t,n){return n.amPM[rn(11<t.getHours())]},M:function(t,n){return vl(t.getMonth(),!0,n)},S:function(t){return zt(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,r){return r.getWeek(t)},Y:function(t){return zt(t.getFullYear(),4)},d:function(t){return zt(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return zt(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return zt(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return(t.getFullYear()+"").substring(2)}},S2=function(t){var n=t.config,r=n===void 0?Co:n,o=t.l10n,i=o===void 0?Ai:o,a=t.isMobile;return function(l,c,u){var d=u||i;return r.formatDate===void 0||a!==void 0&&a?c.split("").map(function(f,g,b){return ki[f]&&b[g-1]!=="\\"?ki[f](l,d,r):f==="\\"?"":f}).join(""):r.formatDate(l,c,d)}},Yd=function(t){var n=t.config,r=n===void 0?Co:n,o=t.l10n,i=o===void 0?Ai:o;return function(a,l,c,u){if(a===0||a){var d;if(a instanceof Date)d=new Date(a.getTime());else if(typeof a!="string"&&a.toFixed!==void 0)d=new Date(a);else if(typeof a=="string"){var f=l||(r||Co).dateFormat,g=(a+"").trim();if(g==="today")d=new Date,c=!0;else if(r&&r.parseDate)d=r.parseDate(a,f);else if(/Z$/.test(g)||/GMT$/.test(g))d=new Date(a);else{for(var b=void 0,h=[],m=0,y=0,E="";m<f.length;m++){var v=f[m],k=v==="\\",C=f[m-1]==="\\"||k;if(Wr[v]&&!C){E+=Wr[v];var D=new RegExp(E).exec(a);D&&(b=!0)&&h[v==="Y"?"unshift":"push"]({fn:S8[v],val:D[++y]})}else k||(E+=".")}d=r&&r.noCalendar?new Date(new Date().setHours(0,0,0,0)):new Date(new Date().getFullYear(),0,1,0,0,0,0),h.forEach(function(I){var T=I.fn,z=I.val;return d=T(d,z,u||i)||d}),d=b?d:void 0}}return!(d instanceof Date)||isNaN(d.getTime())?void r.errorHandler(new Error("Invalid date provided: "+a)):(c===!0&&d.setHours(0,0,0,0),d)}}};function Kt(t,n,r){return r===void 0&&(r=!0),r===!1?t.getTime()-n.getTime():new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0)}var C8=function(t,n,r){return t>Math.min(n,r)&&t<Math.max(n,r)},lc=function(t,n,r){return 3600*t+60*n+r},P8=function(t){var n=Math.floor(t/3600),r=(t-3600*n)/60;return[n,r,t-3600*n-60*r]},I8={DAY:864e5};function sc(t){var n=Math.min,r=t.defaultHour,o=t.defaultMinute,i=t.defaultSeconds;if(t.minDate!==void 0){var a=t.minDate.getHours(),l=t.minDate.getMinutes(),c=t.minDate.getSeconds();r<a&&(r=a),r===a&&o<l&&(o=l),r===a&&o===l&&i<c&&(i=t.minDate.getSeconds())}if(t.maxDate!==void 0){var u=t.maxDate.getHours(),d=t.maxDate.getMinutes();r=n(r,u),r===u&&(o=n(d,o)),r===u&&o===d&&(i=t.maxDate.getSeconds())}return{hours:r,minutes:o,seconds:i}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var o,i=function(c){c&&Object.keys(c).forEach(function(u){return t[u]=c[u]})},a=0,l=n;a<l.length;a++)o=l[a],i(o);return t});var St=function(){return St=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},St.apply(this,arguments)},Ov=function(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length;for(var o=Array(t),i=0,n=0;n<r;n++)for(var a=arguments[n],l=0,c=a.length;l<c;l++,i++)o[i]=a[l];return o},T8=300;function D8(t,n){var r=Math.abs,o=Math.max,i=Math.min;function a(){s.utils={getDaysInMonth:function(w,S){return w===void 0&&(w=s.currentMonth),S===void 0&&(S=s.currentYear),w===1&&(S%4==0&&S%100!=0||S%400==0)?29:s.l10n.daysInMonth[w]}}}function l(){s.element=s.input=t,s.isOpen=!1,ii(),sr(),gn(),It(),a(),s.isMobile||z(),C(),(s.selectedDates.length||s.config.noCalendar)&&(s.config.enableTime&&m(s.config.noCalendar?s.latestSelectedDateObj:void 0),bt(!1)),d();var w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!s.isMobile&&w&&pn(),je("onReady")}function c(){var w;return((w=s.calendarContainer)===null||w===void 0?void 0:w.getRootNode()).activeElement||document.activeElement}function u(w){return w.bind(s)}function d(){var w=s.config;w.weekNumbers===!1&&w.showMonths===1||w.noCalendar!==!0&&window.requestAnimationFrame(function(){if(s.calendarContainer!==void 0&&(s.calendarContainer.style.visibility="hidden",s.calendarContainer.style.display="block"),s.daysContainer!==void 0){var S=(s.days.offsetWidth+1)*w.showMonths;s.daysContainer.style.width=S+"px",s.calendarContainer.style.width=S+(s.weekWrapper===void 0?0:s.weekWrapper.offsetWidth)+"px",s.calendarContainer.style.removeProperty("visibility"),s.calendarContainer.style.removeProperty("display")}})}function f(w){if(s.selectedDates.length===0){var S=s.config.minDate===void 0||0<=Kt(new Date,s.config.minDate)?new Date:new Date(s.config.minDate.getTime()),P=sc(s.config);S.setHours(P.hours,P.minutes,P.seconds,S.getMilliseconds()),s.selectedDates=[S],s.latestSelectedDateObj=S}w!==void 0&&w.type!=="blur"&&ps(w);var $=s._input.value;h(),bt(),s._input.value!==$&&s._debouncedChange()}function g(w,S){return w%12+12*rn(S===s.l10n.amPM[1])}function b(w){switch(w%24){case 0:case 12:return 12;default:return w%12}}function h(){if(s.hourElement!==void 0&&s.minuteElement!==void 0){var w=(parseInt(s.hourElement.value.slice(-2),10)||0)%24,S=(parseInt(s.minuteElement.value,10)||0)%60,P=s.secondElement===void 0?0:(parseInt(s.secondElement.value,10)||0)%60;s.amPM!==void 0&&(w=g(w,s.amPM.textContent));var $=s.config.minTime!==void 0||s.config.minDate&&s.minDateHasTime&&s.latestSelectedDateObj&&Kt(s.latestSelectedDateObj,s.config.minDate,!0)===0,q=s.config.maxTime!==void 0||s.config.maxDate&&s.maxDateHasTime&&s.latestSelectedDateObj&&Kt(s.latestSelectedDateObj,s.config.maxDate,!0)===0;if(s.config.maxTime!==void 0&&s.config.minTime!==void 0&&s.config.minTime>s.config.maxTime){var Z=lc(s.config.minTime.getHours(),s.config.minTime.getMinutes(),s.config.minTime.getSeconds()),ce=lc(s.config.maxTime.getHours(),s.config.maxTime.getMinutes(),s.config.maxTime.getSeconds()),te=lc(w,S,P);if(te>ce&&te<Z){var fe=P8(Z);w=fe[0],S=fe[1],P=fe[2]}}else{if(q){var ne=s.config.maxTime===void 0?s.config.maxDate:s.config.maxTime;w=i(w,ne.getHours()),w===ne.getHours()&&(S=i(S,ne.getMinutes())),S===ne.getMinutes()&&(P=i(P,ne.getSeconds()))}if($){var re=s.config.minTime===void 0?s.config.minDate:s.config.minTime;w=o(w,re.getHours()),w===re.getHours()&&S<re.getMinutes()&&(S=re.getMinutes()),S===re.getMinutes()&&(P=o(P,re.getSeconds()))}}y(w,S,P)}}function m(w){var S=w||s.latestSelectedDateObj;S&&S instanceof Date&&y(S.getHours(),S.getMinutes(),S.getSeconds())}function y(w,S,P){s.latestSelectedDateObj!==void 0&&s.latestSelectedDateObj.setHours(w%24,S,P||0,0),s.hourElement&&s.minuteElement&&!s.isMobile&&(s.hourElement.value=zt(s.config.time_24hr?w:(12+w)%12+12*rn(w%12==0)),s.minuteElement.value=zt(S),s.amPM!==void 0&&(s.amPM.textContent=s.l10n.amPM[rn(12<=w)]),s.secondElement!==void 0&&(s.secondElement.value=zt(P)))}function E(w){var S=qt(w),P=parseInt(S.value)+(w.delta||0);(1<P/1e3||w.key==="Enter"&&!/[^\d]/.test(P.toString()))&&me(P)}function v(w,S,P,$){return S instanceof Array?S.forEach(function(q){return v(w,q,P,$)}):w instanceof Array?w.forEach(function(q){return v(q,S,P,$)}):(w.addEventListener(S,P,$),void s._handlers.push({remove:function(){return w.removeEventListener(S,P,$)}}))}function k(){je("onChange")}function C(){if(s.config.wrap&&["open","close","toggle","clear"].forEach(function(P){Array.prototype.forEach.call(s.element.querySelectorAll("[data-"+P+"]"),function($){return v($,"click",s[P])})}),s.isMobile)return void Kn();var w=kv(qn,50);if(s._debouncedChange=kv(k,T8),s.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&v(s.daysContainer,"mouseover",function(P){s.config.mode==="range"&&Pt(qt(P))}),v(s._input,"keydown",Je),s.calendarContainer!==void 0&&v(s.calendarContainer,"keydown",Je),s.config.inline||s.config.static||v(window,"resize",w),window.ontouchstart===void 0?v(window.document,"mousedown",oe):v(window.document,"touchstart",oe),v(window.document,"focus",oe,{capture:!0}),s.config.clickOpens===!0&&(v(s._input,"focus",s.open),v(s._input,"click",s.open)),s.daysContainer!==void 0&&(v(s.monthNav,"click",fs),v(s.monthNav,["keyup","increment"],E),v(s.daysContainer,"click",ee)),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0){var S=function(P){return qt(P).select()};v(s.timeContainer,["increment"],f),v(s.timeContainer,"blur",f,{capture:!0}),v(s.timeContainer,"click",I),v([s.hourElement,s.minuteElement],["focus","click"],S),s.secondElement!==void 0&&v(s.secondElement,"focus",function(){return s.secondElement&&s.secondElement.select()}),s.amPM!==void 0&&v(s.amPM,"click",function(P){f(P)})}s.config.allowInput&&v(s._input,"blur",at)}function D(w,S){var P=w===void 0?s.latestSelectedDateObj||(s.config.minDate&&s.config.minDate>s.now?s.config.minDate:s.config.maxDate&&s.config.maxDate<s.now?s.config.maxDate:s.now):s.parseDate(w),$=s.currentYear,q=s.currentMonth;try{P!==void 0&&(s.currentYear=P.getFullYear(),s.currentMonth=P.getMonth())}catch(Z){Z.message="Invalid date supplied: "+P,s.config.errorHandler(Z)}S&&s.currentYear!==$&&(je("onYearChange"),V()),S&&(s.currentYear!==$||s.currentMonth!==q)&&je("onMonthChange"),s.redraw()}function I(w){var S=qt(w);~S.className.indexOf("arrow")&&T(w,S.classList.contains("arrowUp")?1:-1)}function T(w,S,P){var $=w&&qt(w),q=P||$&&$.parentNode&&$.parentNode.firstChild,Z=Lt("increment");Z.delta=S,q&&q.dispatchEvent(Z)}function z(){var w=window.document.createDocumentFragment();if(s.calendarContainer=Ve("div","flatpickr-calendar"),s.calendarContainer.tabIndex=-1,!s.config.noCalendar){if(w.appendChild(J()),s.innerContainer=Ve("div","flatpickr-innerContainer"),s.config.weekNumbers){var S=se(),P=S.weekWrapper,$=S.weekNumbers;s.innerContainer.appendChild(P),s.weekNumbers=$,s.weekWrapper=P}s.rContainer=Ve("div","flatpickr-rContainer"),s.rContainer.appendChild(N()),s.daysContainer||(s.daysContainer=Ve("div","flatpickr-days"),s.daysContainer.tabIndex=-1),R(),s.rContainer.appendChild(s.daysContainer),s.innerContainer.appendChild(s.rContainer),w.appendChild(s.innerContainer)}s.config.enableTime&&w.appendChild(X()),Mt(s.calendarContainer,"rangeMode",s.config.mode==="range"),Mt(s.calendarContainer,"animate",s.config.animate===!0),Mt(s.calendarContainer,"multiMonth",1<s.config.showMonths),s.calendarContainer.appendChild(w);var q=s.config.appendTo!==void 0&&s.config.appendTo.nodeType!==void 0;if((s.config.inline||s.config.static)&&(s.calendarContainer.classList.add(s.config.inline?"inline":"static"),s.config.inline&&(!q&&s.element.parentNode?s.element.parentNode.insertBefore(s.calendarContainer,s._input.nextSibling):s.config.appendTo!==void 0&&s.config.appendTo.appendChild(s.calendarContainer)),s.config.static)){var Z=Ve("div","flatpickr-wrapper");s.element.parentNode&&s.element.parentNode.insertBefore(Z,s.element),Z.appendChild(s.element),s.altInput&&Z.appendChild(s.altInput),Z.appendChild(s.calendarContainer)}s.config.static||s.config.inline||(s.config.appendTo===void 0?window.document.body:s.config.appendTo).appendChild(s.calendarContainer)}function A(w,S,P,$){var q=ve(S,!0),Z=Ve("span",w,S.getDate().toString());return Z.dateObj=S,Z.$i=$,Z.setAttribute("aria-label",s.formatDate(S,s.config.ariaDateFormat)),w.indexOf("hidden")===-1&&Kt(S,s.now)===0&&(s.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),q?(Z.tabIndex=-1,Et(S)&&(Z.classList.add("selected"),s.selectedDateElem=Z,s.config.mode==="range"&&(Mt(Z,"startRange",s.selectedDates[0]&&Kt(S,s.selectedDates[0],!0)===0),Mt(Z,"endRange",s.selectedDates[1]&&Kt(S,s.selectedDates[1],!0)===0),w==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),s.config.mode==="range"&&ds(S)&&!Et(S)&&Z.classList.add("inRange"),s.weekNumbers&&s.config.showMonths===1&&w!=="prevMonthDay"&&$%7==6&&s.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+s.config.getWeek(S)+"</span>"),je("onDayCreate",Z),Z}function Q(w){w.focus(),s.config.mode==="range"&&Pt(w)}function B(w){for(var S=0<w?0:s.config.showMonths-1,P=0<w?s.config.showMonths:-1,$=S;$!=P;$+=w)for(var q,Z=s.daysContainer.children[$],ce=0<w?0:Z.children.length-1,te=0<w?Z.children.length:-1,fe=ce;fe!=te;fe+=w)if(q=Z.children[fe],q.className.indexOf("hidden")===-1&&ve(q.dateObj))return q}function F(w,S){for(var P=w.className.indexOf("Month")===-1?w.dateObj.getMonth():s.currentMonth,$=0<S?s.config.showMonths:-1,q=0<S?1:-1,Z=P-s.currentMonth;Z!=$;Z+=q)for(var ce,te=s.daysContainer.children[Z],fe=P-s.currentMonth===Z?w.$i+S:0>S?te.children.length-1:0,ne=te.children.length,re=fe;0<=re&&re<ne&&re!=(0<S?ne:-1);re+=q)if(ce=te.children[re],ce.className.indexOf("hidden")===-1&&ve(ce.dateObj)&&r(w.$i-re)>=r(S))return Q(ce);return s.changeMonth(q),void L(B(q),0)}function L(w,S){var P=c(),$=He(P||document.body),q=w===void 0?$?P:s.selectedDateElem!==void 0&&He(s.selectedDateElem)?s.selectedDateElem:s.todayDateElem!==void 0&&He(s.todayDateElem)?s.todayDateElem:B(0<S?1:-1):w;q===void 0?s._input.focus():$?F(q,S):Q(q)}function _(w,S){for(var P=(new Date(w,S,1).getDay()-s.l10n.firstDayOfWeek+7)%7,$=s.utils.getDaysInMonth((S-1+12)%12,w),q=s.utils.getDaysInMonth(S,w),Z=window.document.createDocumentFragment(),ce=1<s.config.showMonths,te=ce?"prevMonthDay hidden":"prevMonthDay",fe=ce?"nextMonthDay hidden":"nextMonthDay",ne=$+1-P,re=0;ne<=$;ne++,re++)Z.appendChild(A("flatpickr-day "+te,new Date(w,S-1,ne),ne,re));for(ne=1;ne<=q;ne++,re++)Z.appendChild(A("flatpickr-day",new Date(w,S,ne),ne,re));for(var Ee=q+1;Ee<=42-P&&(s.config.showMonths===1||re%7!=0);Ee++,re++)Z.appendChild(A("flatpickr-day "+fe,new Date(w,S+1,Ee%q),Ee,re));var ct=Ve("div","dayContainer");return ct.appendChild(Z),ct}function R(){if(s.daysContainer!==void 0){ka(s.daysContainer),s.weekNumbers&&ka(s.weekNumbers);for(var w,S=document.createDocumentFragment(),P=0;P<s.config.showMonths;P++)w=new Date(s.currentYear,s.currentMonth,1),w.setMonth(s.currentMonth+P),S.appendChild(_(w.getFullYear(),w.getMonth()));s.daysContainer.appendChild(S),s.days=s.daysContainer.firstChild,s.config.mode==="range"&&s.selectedDates.length===1&&Pt()}}function V(){if(!(1<s.config.showMonths||s.config.monthSelectorType!=="dropdown")){var w=function($){return!(s.config.minDate!==void 0&&s.currentYear===s.config.minDate.getFullYear()&&$<s.config.minDate.getMonth())&&!(s.config.maxDate!==void 0&&s.currentYear===s.config.maxDate.getFullYear()&&$>s.config.maxDate.getMonth())};s.monthsDropdownContainer.tabIndex=-1,s.monthsDropdownContainer.innerHTML="";for(var S=0;12>S;S++)if(w(S)){var P=Ve("option","flatpickr-monthDropdown-month");P.value=new Date(s.currentYear,S).getMonth().toString(),P.textContent=vl(S,s.config.shorthandCurrentMonth,s.l10n),P.tabIndex=-1,s.currentMonth===S&&(P.selected=!0),s.monthsDropdownContainer.appendChild(P)}}}function H(){var w,S=Ve("div","flatpickr-month"),P=window.document.createDocumentFragment();1<s.config.showMonths||s.config.monthSelectorType==="static"?w=Ve("span","cur-month"):(s.monthsDropdownContainer=Ve("select","flatpickr-monthDropdown-months"),s.monthsDropdownContainer.setAttribute("aria-label",s.l10n.monthAriaLabel),v(s.monthsDropdownContainer,"change",function(ce){var te=qt(ce),fe=parseInt(te.value,10);s.changeMonth(fe-s.currentMonth),je("onMonthChange")}),V(),w=s.monthsDropdownContainer);var $=Oa("cur-year",{tabindex:"-1"}),q=$.getElementsByTagName("input")[0];q.setAttribute("aria-label",s.l10n.yearAriaLabel),s.config.minDate&&q.setAttribute("min",s.config.minDate.getFullYear().toString()),s.config.maxDate&&(q.setAttribute("max",s.config.maxDate.getFullYear().toString()),q.disabled=!!s.config.minDate&&s.config.minDate.getFullYear()===s.config.maxDate.getFullYear());var Z=Ve("div","flatpickr-current-month");return Z.appendChild(w),Z.appendChild($),P.appendChild(Z),S.appendChild(P),{container:S,yearElement:q,monthElement:w}}function U(){ka(s.monthNav),s.monthNav.appendChild(s.prevMonthNav),s.config.showMonths&&(s.yearElements=[],s.monthElements=[]);for(var w,S=s.config.showMonths;S--;)w=H(),s.yearElements.push(w.yearElement),s.monthElements.push(w.monthElement),s.monthNav.appendChild(w.container);s.monthNav.appendChild(s.nextMonthNav)}function J(){return s.monthNav=Ve("div","flatpickr-months"),s.yearElements=[],s.monthElements=[],s.prevMonthNav=Ve("span","flatpickr-prev-month"),s.prevMonthNav.innerHTML=s.config.prevArrow,s.nextMonthNav=Ve("span","flatpickr-next-month"),s.nextMonthNav.innerHTML=s.config.nextArrow,U(),Object.defineProperty(s,"_hidePrevMonthArrow",{get:function(){return s.__hidePrevMonthArrow},set:function(w){s.__hidePrevMonthArrow!==w&&(Mt(s.prevMonthNav,"flatpickr-disabled",w),s.__hidePrevMonthArrow=w)}}),Object.defineProperty(s,"_hideNextMonthArrow",{get:function(){return s.__hideNextMonthArrow},set:function(w){s.__hideNextMonthArrow!==w&&(Mt(s.nextMonthNav,"flatpickr-disabled",w),s.__hideNextMonthArrow=w)}}),s.currentYearElement=s.yearElements[0],Qn(),s.monthNav}function X(){s.calendarContainer.classList.add("hasTime"),s.config.noCalendar&&s.calendarContainer.classList.add("noCalendar");var w=sc(s.config);s.timeContainer=Ve("div","flatpickr-time"),s.timeContainer.tabIndex=-1;var S=Ve("span","flatpickr-time-separator",":"),P=Oa("flatpickr-hour",{"aria-label":s.l10n.hourAriaLabel});s.hourElement=P.getElementsByTagName("input")[0];var $=Oa("flatpickr-minute",{"aria-label":s.l10n.minuteAriaLabel});if(s.minuteElement=$.getElementsByTagName("input")[0],s.hourElement.tabIndex=s.minuteElement.tabIndex=-1,s.hourElement.value=zt(s.latestSelectedDateObj?s.latestSelectedDateObj.getHours():s.config.time_24hr?w.hours:b(w.hours)),s.minuteElement.value=zt(s.latestSelectedDateObj?s.latestSelectedDateObj.getMinutes():w.minutes),s.hourElement.setAttribute("step",s.config.hourIncrement.toString()),s.minuteElement.setAttribute("step",s.config.minuteIncrement.toString()),s.hourElement.setAttribute("min",s.config.time_24hr?"0":"1"),s.hourElement.setAttribute("max",s.config.time_24hr?"23":"12"),s.hourElement.setAttribute("maxlength","2"),s.minuteElement.setAttribute("min","0"),s.minuteElement.setAttribute("max","59"),s.minuteElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(P),s.timeContainer.appendChild(S),s.timeContainer.appendChild($),s.config.time_24hr&&s.timeContainer.classList.add("time24hr"),s.config.enableSeconds){s.timeContainer.classList.add("hasSeconds");var q=Oa("flatpickr-second");s.secondElement=q.getElementsByTagName("input")[0],s.secondElement.value=zt(s.latestSelectedDateObj?s.latestSelectedDateObj.getSeconds():w.seconds),s.secondElement.setAttribute("step",s.minuteElement.getAttribute("step")),s.secondElement.setAttribute("min","0"),s.secondElement.setAttribute("max","59"),s.secondElement.setAttribute("maxlength","2"),s.timeContainer.appendChild(Ve("span","flatpickr-time-separator",":")),s.timeContainer.appendChild(q)}return s.config.time_24hr||(s.amPM=Ve("span","flatpickr-am-pm",s.l10n.amPM[rn(11<(s.latestSelectedDateObj?s.hourElement.value:s.config.defaultHour))]),s.amPM.title=s.l10n.toggleTitle,s.amPM.tabIndex=-1,s.timeContainer.appendChild(s.amPM)),s.timeContainer}function N(){s.weekdayContainer?ka(s.weekdayContainer):s.weekdayContainer=Ve("div","flatpickr-weekdays");for(var w,S=s.config.showMonths;S--;)w=Ve("div","flatpickr-weekdaycontainer"),s.weekdayContainer.appendChild(w);return ae(),s.weekdayContainer}function ae(){if(s.weekdayContainer){var w=s.l10n.firstDayOfWeek,S=Ov(s.l10n.weekdays.shorthand);0<w&&w<S.length&&(S=Ov(S.splice(w,S.length),S.splice(0,w)));for(var P=s.config.showMonths;P--;)s.weekdayContainer.children[P].innerHTML=`
      <span class='flatpickr-weekday'>
        `+S.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function se(){s.calendarContainer.classList.add("hasWeeks");var w=Ve("div","flatpickr-weekwrapper");w.appendChild(Ve("span","flatpickr-weekday",s.l10n.weekAbbreviation));var S=Ve("div","flatpickr-weeks");return w.appendChild(S),{weekWrapper:w,weekNumbers:S}}function M(w,S){S===void 0&&(S=!0);var P=S?w:w-s.currentMonth;0>P&&s._hidePrevMonthArrow===!0||0<P&&s._hideNextMonthArrow===!0||(s.currentMonth+=P,(0>s.currentMonth||11<s.currentMonth)&&(s.currentYear+=11<s.currentMonth?1:-1,s.currentMonth=(s.currentMonth+12)%12,je("onYearChange"),V()),R(),je("onMonthChange"),Qn())}function ie(w,S){if(w===void 0&&(w=!0),S===void 0&&(S=!0),s.input.value="",s.altInput!==void 0&&(s.altInput.value=""),s.mobileInput!==void 0&&(s.mobileInput.value=""),s.selectedDates=[],s.latestSelectedDateObj=void 0,S===!0&&(s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth()),s.config.enableTime===!0){var P=sc(s.config),$=P.hours,q=P.minutes,Z=P.seconds;y($,q,Z)}s.redraw(),w&&je("onChange")}function ye(){s.isOpen=!1,s.isMobile||(s.calendarContainer!==void 0&&s.calendarContainer.classList.remove("open"),s._input!==void 0&&s._input.classList.remove("active")),je("onClose")}function Pe(){s.config!==void 0&&je("onDestroy");for(var w=s._handlers.length;w--;)s._handlers[w].remove();if(s._handlers=[],s.mobileInput)s.mobileInput.parentNode&&s.mobileInput.parentNode.removeChild(s.mobileInput),s.mobileInput=void 0;else if(s.calendarContainer&&s.calendarContainer.parentNode)if(s.config.static&&s.calendarContainer.parentNode){var S=s.calendarContainer.parentNode;if(S.lastChild&&S.removeChild(S.lastChild),S.parentNode){for(;S.firstChild;)S.parentNode.insertBefore(S.firstChild,S);S.parentNode.removeChild(S)}}else s.calendarContainer.parentNode.removeChild(s.calendarContainer);s.altInput&&(s.input.type="text",s.altInput.parentNode&&s.altInput.parentNode.removeChild(s.altInput),delete s.altInput),s.input&&(s.input.type=s.input._type,s.input.classList.remove("flatpickr-input"),s.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(P){try{delete s[P]}catch{}})}function $e(w){return s.calendarContainer.contains(w)}function oe(w){if(s.isOpen&&!s.config.inline){var S=qt(w),P=$e(S),$=S===s.input||S===s.altInput||s.element.contains(S)||w.path&&w.path.indexOf&&(~w.path.indexOf(s.input)||~w.path.indexOf(s.altInput)),q=!$&&!P&&!$e(w.relatedTarget),Z=!s.config.ignoredFocusElements.some(function(ce){return ce.contains(S)});q&&Z&&(s.config.allowInput&&s.setDate(s._input.value,!1,s.config.altInput?s.config.altFormat:s.config.dateFormat),s.timeContainer!==void 0&&s.minuteElement!==void 0&&s.hourElement!==void 0&&s.input.value!==""&&s.input.value!==void 0&&f(),s.close(),s.config&&s.config.mode==="range"&&s.selectedDates.length===1&&s.clear(!1))}}function me(w){if(!(!w||s.config.minDate&&w<s.config.minDate.getFullYear()||s.config.maxDate&&w>s.config.maxDate.getFullYear())){var S=w,P=s.currentYear!==S;s.currentYear=S||s.currentYear,s.config.maxDate&&s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth=i(s.config.maxDate.getMonth(),s.currentMonth):s.config.minDate&&s.currentYear===s.config.minDate.getFullYear()&&(s.currentMonth=o(s.config.minDate.getMonth(),s.currentMonth)),P&&(s.redraw(),je("onYearChange"),V())}}function ve(w,S){var P;S===void 0&&(S=!0);var $=s.parseDate(w,void 0,S);if(s.config.minDate&&$&&0>Kt($,s.config.minDate,S===void 0?!s.minDateHasTime:S)||s.config.maxDate&&$&&0<Kt($,s.config.maxDate,S===void 0?!s.maxDateHasTime:S))return!1;if(!s.config.enable&&s.config.disable.length===0)return!0;if($===void 0)return!1;for(var q=!!s.config.enable,Z=(P=s.config.enable)!==null&&P!==void 0?P:s.config.disable,ce=0,te=void 0;ce<Z.length;ce++){if(te=Z[ce],typeof te=="function"&&te($)||te instanceof Date&&$!==void 0&&te.getTime()===$.getTime())return q;if(typeof te=="string"){var fe=s.parseDate(te,void 0,!0);return fe&&fe.getTime()===$.getTime()?q:!q}if(typeof te=="object"&&$!==void 0&&te.from&&te.to&&$.getTime()>=te.from.getTime()&&$.getTime()<=te.to.getTime())return q}return!q}function He(w){return s.daysContainer!==void 0&&w.className.indexOf("hidden")===-1&&w.className.indexOf("flatpickr-disabled")===-1&&s.daysContainer.contains(w)}function at(w){var S=w.target===s._input,P=s._input.value.trimEnd()!==Rr();S&&P&&!(w.relatedTarget&&$e(w.relatedTarget))&&s.setDate(s._input.value,!0,w.target===s.altInput?s.config.altFormat:s.config.dateFormat)}function Je(w){var S=qt(w),P=s.config.wrap?t.contains(S):S===s._input,$=s.config.allowInput,q=s.isOpen&&(!$||!P),Z=s.config.inline&&P&&!$;if(w.keyCode===13&&P){if($)return s.setDate(s._input.value,!0,S===s.altInput?s.config.altFormat:s.config.dateFormat),s.close(),S.blur();s.open()}else if($e(S)||q||Z){var ce=!!s.timeContainer&&s.timeContainer.contains(S);switch(w.keyCode){case 13:ce?(w.preventDefault(),f(),Yn()):ee(w);break;case 27:w.preventDefault(),Yn();break;case 8:case 46:P&&!s.config.allowInput&&(w.preventDefault(),s.clear());break;case 37:case 39:if(!ce&&!P){w.preventDefault();var te=c();if(s.daysContainer!==void 0&&($===!1||te&&He(te))){var fe=w.keyCode===39?1:-1;w.ctrlKey?(w.stopPropagation(),M(fe),L(B(1),0)):L(void 0,fe)}}else s.hourElement&&s.hourElement.focus();break;case 38:case 40:w.preventDefault();var ne=w.keyCode===40?1:-1;s.daysContainer&&S.$i!==void 0||S===s.input||S===s.altInput?w.ctrlKey?(w.stopPropagation(),me(s.currentYear-ne),L(B(1),0)):!ce&&L(void 0,7*ne):S===s.currentYearElement?me(s.currentYear-ne):s.config.enableTime&&(!ce&&s.hourElement&&s.hourElement.focus(),f(w),s._debouncedChange());break;case 9:if(ce){var re=[s.hourElement,s.minuteElement,s.secondElement,s.amPM].concat(s.pluginElements).filter(function(Ze){return Ze}),Ee=re.indexOf(S);if(Ee!==-1){var ct=re[Ee+(w.shiftKey?-1:1)];w.preventDefault(),(ct||s._input).focus()}}else!s.config.noCalendar&&s.daysContainer&&s.daysContainer.contains(S)&&w.shiftKey&&(w.preventDefault(),s._input.focus())}}if(s.amPM!==void 0&&S===s.amPM)switch(w.key){case s.l10n.amPM[0].charAt(0):case s.l10n.amPM[0].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[0],h(),bt();break;case s.l10n.amPM[1].charAt(0):case s.l10n.amPM[1].charAt(0).toLowerCase():s.amPM.textContent=s.l10n.amPM[1],h(),bt()}(P||$e(S))&&je("onKeyDown",w)}function Pt(w,S){if(S===void 0&&(S="flatpickr-day"),!(s.selectedDates.length!==1||w&&(!w.classList.contains(S)||w.classList.contains("flatpickr-disabled")))){for(var P=w?w.dateObj.getTime():s.days.firstElementChild.dateObj.getTime(),$=s.parseDate(s.selectedDates[0],void 0,!0).getTime(),q=i(P,s.selectedDates[0].getTime()),Z=o(P,s.selectedDates[0].getTime()),ce=!1,te=0,fe=0,ne=q;ne<Z;ne+=I8.DAY)ve(new Date(ne),!0)||(ce=ce||ne>q&&ne<Z,ne<$&&(!te||ne>te)?te=ne:ne>$&&(!fe||ne<fe)&&(fe=ne));var re=Array.from(s.rContainer.querySelectorAll("*:nth-child(-n+"+s.config.showMonths+") > ."+S));re.forEach(function(Ee){var ct=Ee.dateObj,Ze=ct.getTime(),hn=0<te&&Ze<te||0<fe&&Ze>fe;return hn?(Ee.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach(function(Wt){Ee.classList.remove(Wt)})):void(ce&&!hn||(["startRange","inRange","endRange","notAllowed"].forEach(function(Wt){Ee.classList.remove(Wt)}),w!==void 0&&(w.classList.add(P<=s.selectedDates[0].getTime()?"startRange":"endRange"),$<P&&Ze===$?Ee.classList.add("startRange"):$>P&&Ze===$&&Ee.classList.add("endRange"),Ze>=te&&(fe===0||Ze<=fe)&&C8(Ze,$,P)&&Ee.classList.add("inRange"))))})}}function qn(){!s.isOpen||s.config.static||s.config.inline||pn()}function fo(w,S){if(S===void 0&&(S=s._positionElement),s.isMobile===!0){if(w){w.preventDefault();var P=qt(w);P&&P.blur()}return s.mobileInput!==void 0&&(s.mobileInput.focus(),s.mobileInput.click()),void je("onOpen")}if(!(s._input.disabled||s.config.inline)){var $=s.isOpen;s.isOpen=!0,$||(s.calendarContainer.classList.add("open"),s._input.classList.add("active"),je("onOpen"),pn(S)),s.config.enableTime!==!0||s.config.noCalendar!==!0||s.config.allowInput!==!1||w!==void 0&&s.timeContainer.contains(w.relatedTarget)||setTimeout(function(){return s.hourElement.select()},50)}}function ar(w){return function(S){var P=s.config["_"+w+"Date"]=s.parseDate(S,s.config.dateFormat),$=s.config["_"+(w==="min"?"max":"min")+"Date"];P!==void 0&&(s[w==="min"?"minDateHasTime":"maxDateHasTime"]=0<P.getHours()||0<P.getMinutes()||0<P.getSeconds()),s.selectedDates&&(s.selectedDates=s.selectedDates.filter(function(q){return ve(q)}),!s.selectedDates.length&&w==="min"&&m(P),bt()),s.daysContainer&&(Nr(),P===void 0?s.currentYearElement.removeAttribute(w):s.currentYearElement[w]=P.getFullYear().toString(),s.currentYearElement.disabled=!!$&&P!==void 0&&$.getFullYear()===P.getFullYear())}}function ii(){var w=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],S=St(St({},JSON.parse(JSON.stringify(t.dataset||{}))),n),P={};s.config.parseDate=S.parseDate,s.config.formatDate=S.formatDate,Object.defineProperty(s.config,"enable",{get:function(){return s.config._enable},set:function(re){s.config._enable=ze(re)}}),Object.defineProperty(s.config,"disable",{get:function(){return s.config._disable},set:function(re){s.config._disable=ze(re)}});var $=S.mode==="time";if(!S.dateFormat&&(S.enableTime||$)){var q=yt.defaultConfig.dateFormat||Co.dateFormat;P.dateFormat=S.noCalendar||$?"H:i"+(S.enableSeconds?":S":""):q+" H:i"+(S.enableSeconds?":S":"")}if(S.altInput&&(S.enableTime||$)&&!S.altFormat){var Z=yt.defaultConfig.altFormat||Co.altFormat;P.altFormat=S.noCalendar||$?"h:i"+(S.enableSeconds?":S K":" K"):Z+(" h:i"+(S.enableSeconds?":S":"")+" K")}Object.defineProperty(s.config,"minDate",{get:function(){return s.config._minDate},set:ar("min")}),Object.defineProperty(s.config,"maxDate",{get:function(){return s.config._maxDate},set:ar("max")});var ce=function(re){return function(Ee){s.config[re==="min"?"_minTime":"_maxTime"]=s.parseDate(Ee,"H:i:S")}};Object.defineProperty(s.config,"minTime",{get:function(){return s.config._minTime},set:ce("min")}),Object.defineProperty(s.config,"maxTime",{get:function(){return s.config._maxTime},set:ce("max")}),S.mode==="time"&&(s.config.noCalendar=!0,s.config.enableTime=!0),Object.assign(s.config,P,S);for(var te=0;te<w.length;te++)s.config[w[te]]=s.config[w[te]]===!0||s.config[w[te]]==="true";oc.filter(function(re){return s.config[re]!==void 0}).forEach(function(re){s.config[re]=ic(s.config[re]||[]).map(u)}),s.isMobile=!s.config.disableMobile&&!s.config.inline&&s.config.mode==="single"&&!s.config.disable.length&&!s.config.enable&&!s.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var fe,te=0;te<s.config.plugins.length;te++)for(var ne in fe=s.config.plugins[te](s)||{},fe)-1<oc.indexOf(ne)?s.config[ne]=ic(fe[ne]).map(u).concat(s.config[ne]):typeof S[ne]>"u"&&(s.config[ne]=fe[ne]);S.altInputClass||(s.config.altInputClass=lr().className+" "+s.config.altInputClass),je("onParseConfig")}function lr(){return s.config.wrap?t.querySelector("[data-input]"):t}function sr(){typeof s.config.locale!="object"&&typeof yt.l10ns[s.config.locale]>"u"&&s.config.errorHandler(new Error("flatpickr: invalid locale "+s.config.locale)),s.l10n=St(St({},yt.l10ns.default),typeof s.config.locale=="object"?s.config.locale:s.config.locale==="default"?void 0:yt.l10ns[s.config.locale]),Wr.D="("+s.l10n.weekdays.shorthand.join("|")+")",Wr.l="("+s.l10n.weekdays.longhand.join("|")+")",Wr.M="("+s.l10n.months.shorthand.join("|")+")",Wr.F="("+s.l10n.months.longhand.join("|")+")",Wr.K="("+s.l10n.amPM[0]+"|"+s.l10n.amPM[1]+"|"+s.l10n.amPM[0].toLowerCase()+"|"+s.l10n.amPM[1].toLowerCase()+")";var w=St(St({},n),JSON.parse(JSON.stringify(t.dataset||{})));w.time_24hr===void 0&&yt.defaultConfig.time_24hr===void 0&&(s.config.time_24hr=s.l10n.time_24hr),s.formatDate=S2(s),s.parseDate=Yd({config:s.config,l10n:s.l10n})}function pn(w){if(typeof s.config.position=="function")return void s.config.position(s,w);if(s.calendarContainer!==void 0){je("onPreCalendarPosition");var S=w||s._positionElement,P=Array.prototype.reduce.call(s.calendarContainer.children,function(ys,ws){return ys+ws.offsetHeight},0),$=s.calendarContainer.offsetWidth,q=s.config.position.split(" "),Z=q[0],ce=1<q.length?q[1]:null,te=S.getBoundingClientRect(),fe=window.innerHeight-te.bottom,ne=Z==="above"||Z!=="below"&&fe<P&&te.top>P,re=window.pageYOffset+te.top+(ne?-P-2:S.offsetHeight+2);if(Mt(s.calendarContainer,"arrowTop",!ne),Mt(s.calendarContainer,"arrowBottom",ne),!s.config.inline){var Ee=window.pageXOffset+te.left,ct=!1,Ze=!1;ce==="center"?(Ee-=($-te.width)/2,ct=!0):ce==="right"&&(Ee-=$-te.width,Ze=!0),Mt(s.calendarContainer,"arrowLeft",!ct&&!Ze),Mt(s.calendarContainer,"arrowCenter",ct),Mt(s.calendarContainer,"arrowRight",Ze);var hn=window.document.body.offsetWidth-(window.pageXOffset+te.right),Wt=Ee+$>window.document.body.offsetWidth,gs=hn+$>window.document.body.offsetWidth;if(Mt(s.calendarContainer,"rightMost",Wt),!s.config.static)if(s.calendarContainer.style.top=re+"px",!Wt)s.calendarContainer.style.left=Ee+"px",s.calendarContainer.style.right="auto";else if(!gs)s.calendarContainer.style.left="auto",s.calendarContainer.style.right=hn+"px";else{var Fr=ai();if(Fr===void 0)return;var hs=window.document.body.offsetWidth,ms=o(0,hs/2-$/2),bs=Fr.cssRules.length,vs="{left:"+te.left+"px;right:auto;}";Mt(s.calendarContainer,"rightMost",!1),Mt(s.calendarContainer,"centerMost",!0),Fr.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+vs,bs),s.calendarContainer.style.left=ms+"px",s.calendarContainer.style.right="auto"}}}}function ai(){for(var w,S=null,P=0;P<document.styleSheets.length;P++)if(w=document.styleSheets[P],w.cssRules){try{w.cssRules}catch{continue}S=w;break}return S??li()}function li(){var w=document.createElement("style");return document.head.appendChild(w),w.sheet}function Nr(){s.config.noCalendar||s.isMobile||(V(),Qn(),R())}function Yn(){s._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(s.close,0):s.close()}function ee(w){w.preventDefault(),w.stopPropagation();var S=function(re){return re.classList&&re.classList.contains("flatpickr-day")&&!re.classList.contains("flatpickr-disabled")&&!re.classList.contains("notAllowed")},P=O2(qt(w),S);if(P!==void 0){var $=P,q=s.latestSelectedDateObj=new Date($.dateObj.getTime()),Z=(q.getMonth()<s.currentMonth||q.getMonth()>s.currentMonth+s.config.showMonths-1)&&s.config.mode!=="range";if(s.selectedDateElem=$,s.config.mode==="single")s.selectedDates=[q];else if(s.config.mode==="multiple"){var ce=Et(q);ce?s.selectedDates.splice(parseInt(ce),1):s.selectedDates.push(q)}else s.config.mode==="range"&&(s.selectedDates.length===2&&s.clear(!1,!1),s.latestSelectedDateObj=q,s.selectedDates.push(q),Kt(q,s.selectedDates[0],!0)!==0&&s.selectedDates.sort(function(re,Ee){return re.getTime()-Ee.getTime()}));if(h(),Z){var te=s.currentYear!==q.getFullYear();s.currentYear=q.getFullYear(),s.currentMonth=q.getMonth(),te&&(je("onYearChange"),V()),je("onMonthChange")}if(Qn(),R(),bt(),Z||s.config.mode==="range"||s.config.showMonths!==1?s.selectedDateElem!==void 0&&s.hourElement===void 0&&s.selectedDateElem&&s.selectedDateElem.focus():Q($),s.hourElement!==void 0&&s.hourElement!==void 0&&s.hourElement.focus(),s.config.closeOnSelect){var fe=s.config.mode==="single"&&!s.config.enableTime,ne=s.config.mode==="range"&&s.selectedDates.length===2&&!s.config.enableTime;(fe||ne)&&Yn()}k()}}function de(w,S){if(w!==null&&typeof w=="object")for(var P in Object.assign(s.config,w),w)Jn[P]!==void 0&&Jn[P].forEach(function($){return $()});else s.config[w]=S,Jn[w]===void 0?-1<oc.indexOf(w)&&(s.config[w]=ic(S)):Jn[w].forEach(function($){return $()});s.redraw(),bt(!0)}function Ie(w,S){var P=[];if(w instanceof Array)P=w.map(function($){return s.parseDate($,S)});else if(w instanceof Date||typeof w=="number")P=[s.parseDate(w,S)];else if(typeof w=="string")switch(s.config.mode){case"single":case"time":P=[s.parseDate(w,S)];break;case"multiple":P=w.split(s.config.conjunction).map(function($){return s.parseDate($,S)});break;case"range":P=w.split(s.l10n.rangeSeparator).map(function($){return s.parseDate($,S)})}else s.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(w)));s.selectedDates=s.config.allowInvalidPreload?P:P.filter(function($){return $ instanceof Date&&ve($,!1)}),s.config.mode==="range"&&s.selectedDates.sort(function($,q){return $.getTime()-q.getTime()})}function Ae(w,S,P){return S===void 0&&(S=!1),P===void 0&&(P=s.config.dateFormat),w!==0&&!w||w instanceof Array&&w.length===0?s.clear(S):(Ie(w,P),s.latestSelectedDateObj=s.selectedDates[s.selectedDates.length-1],s.redraw(),D(void 0,S),m(),s.selectedDates.length===0&&s.clear(!1),bt(S),void(S&&je("onChange")))}function ze(w){return w.slice().map(function(S){return typeof S=="string"||typeof S=="number"||S instanceof Date?s.parseDate(S,void 0,!0):S&&typeof S=="object"&&S.from&&S.to?{from:s.parseDate(S.from,void 0),to:s.parseDate(S.to,void 0)}:S}).filter(function(S){return S})}function It(){s.selectedDates=[],s.now=s.parseDate(s.config.now)||new Date;var w=s.config.defaultDate||((s.input.nodeName==="INPUT"||s.input.nodeName==="TEXTAREA")&&s.input.placeholder&&s.input.value===s.input.placeholder?null:s.input.value);w&&Ie(w,s.config.dateFormat),s._initialDate=0<s.selectedDates.length?s.selectedDates[0]:s.config.minDate&&s.config.minDate.getTime()>s.now.getTime()?s.config.minDate:s.config.maxDate&&s.config.maxDate.getTime()<s.now.getTime()?s.config.maxDate:s.now,s.currentYear=s._initialDate.getFullYear(),s.currentMonth=s._initialDate.getMonth(),0<s.selectedDates.length&&(s.latestSelectedDateObj=s.selectedDates[0]),s.config.minTime!==void 0&&(s.config.minTime=s.parseDate(s.config.minTime,"H:i")),s.config.maxTime!==void 0&&(s.config.maxTime=s.parseDate(s.config.maxTime,"H:i")),s.minDateHasTime=!!s.config.minDate&&(0<s.config.minDate.getHours()||0<s.config.minDate.getMinutes()||0<s.config.minDate.getSeconds()),s.maxDateHasTime=!!s.config.maxDate&&(0<s.config.maxDate.getHours()||0<s.config.maxDate.getMinutes()||0<s.config.maxDate.getSeconds())}function gn(){return s.input=lr(),s.input?(s.input._type=s.input.type,s.input.type="text",s.input.classList.add("flatpickr-input"),s._input=s.input,s.config.altInput&&(s.altInput=Ve(s.input.nodeName,s.config.altInputClass),s._input=s.altInput,s.altInput.placeholder=s.input.placeholder,s.altInput.disabled=s.input.disabled,s.altInput.required=s.input.required,s.altInput.tabIndex=s.input.tabIndex,s.altInput.type="text",s.input.setAttribute("type","hidden"),!s.config.static&&s.input.parentNode&&s.input.parentNode.insertBefore(s.altInput,s.input.nextSibling)),!s.config.allowInput&&s._input.setAttribute("readonly","readonly"),void Tt()):void s.config.errorHandler(new Error("Invalid input element specified"))}function Tt(){s._positionElement=s.config.positionElement||s._input}function Kn(){var w=s.config.enableTime?s.config.noCalendar?"time":"datetime-local":"date";s.mobileInput=Ve("input",s.input.className+" flatpickr-mobile"),s.mobileInput.tabIndex=1,s.mobileInput.type=w,s.mobileInput.disabled=s.input.disabled,s.mobileInput.required=s.input.required,s.mobileInput.placeholder=s.input.placeholder,s.mobileFormatStr=w=="datetime-local"?"Y-m-d\\TH:i:S":w==="date"?"Y-m-d":"H:i:S",0<s.selectedDates.length&&(s.mobileInput.defaultValue=s.mobileInput.value=s.formatDate(s.selectedDates[0],s.mobileFormatStr)),s.config.minDate&&(s.mobileInput.min=s.formatDate(s.config.minDate,"Y-m-d")),s.config.maxDate&&(s.mobileInput.max=s.formatDate(s.config.maxDate,"Y-m-d")),s.input.getAttribute("step")&&(s.mobileInput.step=s.input.getAttribute("step")+""),s.input.type="hidden",s.altInput!==void 0&&(s.altInput.type="hidden");try{s.input.parentNode&&s.input.parentNode.insertBefore(s.mobileInput,s.input.nextSibling)}catch{}v(s.mobileInput,"change",function(S){s.setDate(qt(S).value,!1,s.mobileFormatStr),je("onChange"),je("onClose")})}function Gn(w){return s.isOpen===!0?s.close():void s.open(w)}function je(w,S){if(s.config!==void 0){var P=s.config[w];if(P!==void 0&&0<P.length)for(var $=0;P[$]&&$<P.length;$++)P[$](s.selectedDates,s.input.value,s,S);w==="onChange"&&(s.input.dispatchEvent(Lt("change")),s.input.dispatchEvent(Lt("input")))}}function Lt(w){var S=document.createEvent("Event");return S.initEvent(w,!0,!0),S}function Et(w){for(var S,P=0;P<s.selectedDates.length;P++)if(S=s.selectedDates[P],S instanceof Date&&Kt(S,w)===0)return""+P;return!1}function ds(w){return!(s.config.mode!=="range"||2>s.selectedDates.length)&&0<=Kt(w,s.selectedDates[0])&&0>=Kt(w,s.selectedDates[1])}function Qn(){s.config.noCalendar||s.isMobile||!s.monthNav||(s.yearElements.forEach(function(w,S){var P=new Date(s.currentYear,s.currentMonth,1);P.setMonth(s.currentMonth+S),1<s.config.showMonths||s.config.monthSelectorType==="static"?s.monthElements[S].textContent=vl(P.getMonth(),s.config.shorthandCurrentMonth,s.l10n)+" ":s.monthsDropdownContainer.value=P.getMonth().toString(),w.value=P.getFullYear().toString()}),s._hidePrevMonthArrow=s.config.minDate!==void 0&&(s.currentYear===s.config.minDate.getFullYear()?s.currentMonth<=s.config.minDate.getMonth():s.currentYear<s.config.minDate.getFullYear()),s._hideNextMonthArrow=s.config.maxDate!==void 0&&(s.currentYear===s.config.maxDate.getFullYear()?s.currentMonth+1>s.config.maxDate.getMonth():s.currentYear>s.config.maxDate.getFullYear()))}function Rr(w){var S=w||(s.config.altInput?s.config.altFormat:s.config.dateFormat);return s.selectedDates.map(function(P){return s.formatDate(P,S)}).filter(function(P,$,q){return s.config.mode!=="range"||s.config.enableTime||q.indexOf(P)===$}).join(s.config.mode==="range"?s.l10n.rangeSeparator:s.config.conjunction)}function bt(w){w===void 0&&(w=!0),s.mobileInput!==void 0&&s.mobileFormatStr&&(s.mobileInput.value=s.latestSelectedDateObj===void 0?"":s.formatDate(s.latestSelectedDateObj,s.mobileFormatStr)),s.input.value=Rr(s.config.dateFormat),s.altInput!==void 0&&(s.altInput.value=Rr(s.config.altFormat)),w!==!1&&je("onValueUpdate")}function fs(w){var S=qt(w),P=s.prevMonthNav.contains(S),$=s.nextMonthNav.contains(S);P||$?M(P?-1:1):0<=s.yearElements.indexOf(S)?S.select():S.classList.contains("arrowUp")?s.changeYear(s.currentYear+1):S.classList.contains("arrowDown")&&s.changeYear(s.currentYear-1)}function ps(w){w.preventDefault();var S=w.type==="keydown",P=qt(w),$=P;s.amPM!==void 0&&P===s.amPM&&(s.amPM.textContent=s.l10n.amPM[rn(s.amPM.textContent===s.l10n.amPM[0])]);var q=parseFloat($.getAttribute("min")),Z=parseFloat($.getAttribute("max")),ce=parseFloat($.getAttribute("step")),te=parseInt($.value,10),fe=w.delta||(S?w.which===38?1:-1:0),ne=te+ce*fe;if(typeof $.value<"u"&&$.value.length===2){var re=$===s.hourElement,Ee=$===s.minuteElement;ne<q?(ne=Z+ne+rn(!re)+(rn(re)&&rn(!s.amPM)),Ee&&T(void 0,-1,s.hourElement)):ne>Z&&(ne=$===s.hourElement?ne-Z-rn(!s.amPM):q,Ee&&T(void 0,1,s.hourElement)),s.amPM&&re&&(ce===1?ne+te===23:r(ne-te)>ce)&&(s.amPM.textContent=s.l10n.amPM[rn(s.amPM.textContent===s.l10n.amPM[0])]),$.value=zt(ne)}}var s={config:St(St({},Co),yt.defaultConfig),l10n:Ai};s.parseDate=Yd({config:s.config,l10n:s.l10n}),s._handlers=[],s.pluginElements=[],s.loadedPlugins=[],s._bind=v,s._setHoursFromDate=m,s._positionCalendar=pn,s.changeMonth=M,s.changeYear=me,s.clear=ie,s.close=ye,s.onMouseOver=Pt,s._createElement=Ve,s.createDay=A,s.destroy=Pe,s.isEnabled=ve,s.jumpToDate=D,s.updateValue=bt,s.open=fo,s.redraw=Nr,s.set=de,s.setDate=Ae,s.toggle=Gn;var Jn={locale:[sr,ae],showMonths:[U,d,N],minDate:[D],maxDate:[D],positionElement:[Tt],clickOpens:[function(){s.config.clickOpens===!0?(v(s._input,"focus",s.open),v(s._input,"click",s.open)):(s._input.removeEventListener("focus",s.open),s._input.removeEventListener("click",s.open))}]};return l(),s}function Po(t,n){for(var r,o=Array.prototype.slice.call(t).filter(function(l){return l instanceof HTMLElement}),i=[],a=0;a<o.length;a++){r=o[a];try{if(r.getAttribute("data-fp-omit")!==null)continue;r._flatpickr!==void 0&&(r._flatpickr.destroy(),r._flatpickr=void 0),r._flatpickr=D8(r,n||{}),i.push(r._flatpickr)}catch(l){console.error(l)}}return i.length===1?i[0]:i}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return Po(this,t)},HTMLElement.prototype.flatpickr=function(t){return Po([this],t)});var yt=function(t,n){return typeof t=="string"?Po(window.document.querySelectorAll(t),n):t instanceof Node?Po([t],n):Po(t,n)};yt.defaultConfig={},yt.l10ns={en:St({},Ai),default:St({},Ai)},yt.localize=function(t){yt.l10ns.default=St(St({},yt.l10ns.default),t)},yt.setDefaults=function(t){yt.defaultConfig=St(St({},yt.defaultConfig),t)},yt.parseDate=Yd({}),yt.formatDate=S2({}),yt.compareDates=Kt,typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return Po(this,t)}),Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))},typeof window<"u"&&(window.flatpickr=yt);j.oneOfType([j.string,j.array,j.object,j.number]);j.bool,j.bool,j.string,j.string,j.string,j.string,j.number,j.number,j.array,j.bool,j.bool,j.bool,j.node,j.node,j.number,j.string,j.bool,j.string,j.oneOfType([j.string,j.object]),j.number,j.oneOf(["single","multiple","range"]),j.oneOf(["static","dropdown"]),j.string,j.bool,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.func,j.string,j.bool,j.bool,j.number,j.node,j.bool,j.bool,j.bool,j.oneOf(["full","auto"]),j.string;j.string,j.string,j.string,j.node,j.bool,j.bool,j.bool,j.bool,j.bool,j.func,j.func,j.string;j.oneOfType([j.string,j.number]),j.oneOfType([j.string,j.number]),j.bool,j.string;j.string,j.oneOfType([j.string,j.number]),j.string,j.string,j.bool,j.bool,j.bool,j.bool,j.bool,j.bool,j.string,j.string,j.func,j.func,j.func,j.oneOf(["text","email","password","tel","url","number"]),j.string,j.node,j.node,j.node,j.oneOf(["full","auto"]),j.string;j.string,j.arrayOf(j.object),j.string,j.func,j.string,j.string,j.string,j.func,j.func,j.func,j.bool,j.string,j.func,j.bool;j.string,j.string.isRequired,j.string,j.string.isRequired,j.string,j.string,j.func;j.node,j.object,j.string,j.func,j.string,j.string,j.func,j.func,j.func,j.string,j.bool,j.bool,j.string,j.any;j.string,j.string,j.node;j.node,j.string;j.string,j.string,j.node;j.bool,j.node,j.string;j.node,j.string;j.number,j.number,j.bool,j.string,j.node;j.node,j.string,j.oneOf(["default","primary","primary-danger","subdued"]),j.bool;j.string,j.string,j.string;O.createContext({});p.createContext();j.node,j.oneOf(["small","normal"]),j.string;j.string,j.bool,j.oneOf(rr),j.string,j.node,j.string,j.func;j.string,j.node,j.string;const M8=`
	jn-text-theme-high
	jn-flex
	jn-rounded
	jn-leading-5
	jn-overflow-hidden
	jn-items-center
`,N8=`
	jn-w-[4px]
	jn-self-stretch
	jn-border-l-4
	jn-mr-6
	jn-shrink-0
`,Sv=`
	jn-border-theme-message-default
`,Cv=`
	jn-bg-theme-message-default
`,R8=`
	jn-border-theme-message-error
`,F8=`
	jn-bg-theme-message-error
`,L8=`
	jn-border-theme-message-warning
`,A8=`
	jn-bg-theme-message-warning
`,_8=`
	jn-border-theme-message-danger
`,$8=`
	jn-bg-theme-message-danger
`,z8=`
	jn-border-theme-message-success
`,H8=`
	jn-bg-theme-message-success
`,B8=`
	jn-py-3
	jn-pr-4
	jn-ml-7
`,V8=`
	jn-font-bold
`,W8=`
	jn-ml-auto
	jn-self-stretch
	jn-flex
	jn-flex-col
	jn-py-2.5
	jn-pr-2.5
`,U8=t=>t==="error"?F8:t==="warning"?A8:t==="success"?H8:t==="info"?Cv:t==="danger"?$8:Cv,q8=t=>t==="error"?R8:t==="warning"?L8:t==="success"?z8:t==="info"?Sv:t==="danger"?_8:Sv,Y8=t=>t==="error"?"dangerous":t,C2=t=>{let{title:n=null,text:r=null,variant:o="info",dismissible:i=!1,autoDismiss:a=!1,autoDismissTimeout:l=1e4,onDismiss:c,className:u="",children:d,...f}=t;const[g,b]=p.useState(!0),h=O.useRef(null);O.useEffect(()=>()=>clearTimeout(h.current),[]),p.useEffect(()=>{a&&(clearTimeout(h.current),h.current=setTimeout(()=>m(),l))},[a,l]);const m=()=>{b(!1),c&&c()};return O.createElement(O.Fragment,null,g&&O.createElement("div",xe({className:`juno-message juno-message-${o} ${M8} ${U8(o)} ${u}`},f),O.createElement("div",{className:`juno-message-border ${N8} ${q8(o)}`}),O.createElement(Ni,{icon:Y8(o),color:"jn-text-theme-"+o,className:"jn-shrink-0"}),O.createElement("div",{className:`juno-message-content ${B8}`},n?O.createElement("h1",{className:`${V8}`},n):"",O.createElement("div",null,d||r)),i&&O.createElement("div",{className:W8},O.createElement(Ni,{icon:"close",onClick:m,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100"}))))};C2.propTypes={title:j.string,text:j.string,variant:j.oneOf(["info","warning","danger","error","success"]),dismissible:j.bool,autoDismiss:j.bool,autoDismissTimeout:j.number,onDismiss:j.func,className:j.string,children:j.node};const Pv=`
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
`,Iv=`
  jn-text-sm
  jn-leading-5
`,Tv=`
  jn-text-base
  jn-leading-6
`,K8=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,G8=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,Q8=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,J8=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,Dv=(t,n)=>t==="small"?n==="subdued"?`${G8}`:`${K8}`:n==="subdued"?`${J8}`:`${Q8}`,Z8=`
  jn-mr-2
`,X8=`
  jn-mr-2
`,eL=t=>t==="small"?`${Z8}`:`${X8}`,Mv=t=>t?"in-progress":"",tL=t=>t==="default"?"jn-text-theme-accent":t==="primary"||t==="primary-danger"?"jn-text-white":"",Nv=O.forwardRef((t,n)=>{let{label:r,title:o=null,variant:i,size:a="default",disabled:l=null,href:c=null,icon:u=null,className:d="",onClick:f,children:g,progress:b=!1,progressLabel:h="",...m}=t;const y=i||"default",E=o||r||"",v=b?O.createElement(h2,{size:a==="small"?"1.125rem":"1.5rem",color:`${tL(y)}`}):u?O.createElement(Ni,{icon:u,title:E,className:`juno-button-icon ${r||g?eL(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,k=b&&h?h:r||g,C=O.createElement("button",xe({type:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${Pv} 
          ${a==="small"?Iv:Tv} 
          ${Dv(a,i)}
          ${Mv(b)} 
          ${d}`,disabled:l,onClick:I=>{f&&f(I)},title:E,ref:n},m),v,k),D=O.createElement("a",xe({href:c,role:"button",className:`
          juno-button 
          juno-button-${y} 
          juno-button-${a}-size 
          ${Pv} 
          ${a==="small"?Iv:Tv}
          ${Dv(a,i)}
          ${Mv(b)} 
          ${d}
        `,disabled:l,onClick:f,title:E,ref:n},m),v,k);return c?D:C});Nv.displayName="Button",Nv.propTypes={children:j.any,variant:j.oneOf(["primary","primary-danger","default","subdued"]),size:j.oneOf(["small","default"]),disabled:j.bool,href:j.string,label:j.string,title:j.string,icon:j.oneOf(rr),className:j.string,onClick:j.func,progress:j.bool,progressLabel:j.string};j.string,j.node;j.node,j.string,j.string,j.oneOf(rr),j.oneOf(rr),j.string,j.func,j.func;var P2=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],yl=P2.join(","),I2=typeof Element>"u",io=I2?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,wl=!I2&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t==null?void 0:t.ownerDocument},xl=function t(n,r){var o;r===void 0&&(r=!0);var i=n==null||(o=n.getAttribute)===null||o===void 0?void 0:o.call(n,"inert"),a=i===""||i==="true"||r&&n&&t(n.parentNode);return a},nL=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},T2=function(t,n,r){if(xl(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(yl));return n&&io.call(t,yl)&&o.unshift(t),o=o.filter(r),o},D2=function t(n,r,o){for(var i=[],a=Array.from(n);a.length;){var l=a.shift();if(!xl(l,!1))if(l.tagName==="SLOT"){var c=l.assignedElements(),u=c.length?c:l.children,d=t(u,!0,o);o.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{var f=io.call(l,yl);f&&o.filter(l)&&(r||!n.includes(l))&&i.push(l);var g=l.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(l),b=!xl(g,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(g&&b){var h=t(g===!0?l.children:g.children,!0,o);o.flatten?i.push.apply(i,h):i.push({scopeParent:l,candidates:h})}else a.unshift.apply(a,l.children)}}return i},M2=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},gr=function(t){if(!t)throw new Error("No node provided");return 0>t.tabIndex&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||nL(t))&&!M2(t)?0:t.tabIndex},rL=function(t,n){var r=gr(t);return 0>r&&n&&!M2(t)?0:r},oL=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},N2=function(t){return t.tagName==="INPUT"},iL=function(t){return N2(t)&&t.type==="hidden"},aL=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},lL=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},sL=function(t){if(!t.name)return!0;var n,r=t.form||wl(t),o=function(a){return r.querySelectorAll('input[type="radio"][name="'+a+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=o(window.CSS.escape(t.name));else try{n=o(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=lL(n,t.form);return!i||i===t},cL=function(t){return N2(t)&&t.type==="radio"},uL=function(t){return cL(t)&&!sL(t)},dL=function(t){var n,r=t&&wl(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,l,c;for(i=!!((a=o)!==null&&a!==void 0&&(l=a.ownerDocument)!==null&&l!==void 0&&l.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,d,f;r=wl(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((d=o)!==null&&d!==void 0&&(f=d.ownerDocument)!==null&&f!==void 0&&f.contains(o))}}return i},Rv=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},fL=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=io.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(io.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var l=t;t;){var c=t.parentElement,u=wl(t);if(c&&!c.shadowRoot&&o(c)===!0)return Rv(t);t=t.assignedSlot?t.assignedSlot:c||u===t.ownerDocument?c:u.host}t=l}if(dL(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Rv(t);return!1},pL=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r,o=0;o<n.children.length;o++)if(r=n.children.item(o),r.tagName==="LEGEND")return!!io.call(n,"fieldset[disabled] *")||!r.contains(t);return!0}n=n.parentElement}return!1},jl=function(t,n){return!(n.disabled||xl(n)||iL(n)||fL(n,t)||aL(n)||pL(n))},Kd=function(t,n){return!(uL(n)||0>gr(n)||!jl(t,n))},gL=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||0<=n)},hL=function t(n){var r=[],o=[];return n.forEach(function(i,a){var l=!!i.scopeParent,c=l?i.scopeParent:i,u=rL(c,l),d=l?t(i.candidates):c;u===0?l?r.push.apply(r,d):r.push(c):o.push({documentOrder:a,tabIndex:u,item:i,isScope:l,content:d})}),o.sort(oL).reduce(function(i,a){return a.isScope?i.push.apply(i,a.content):i.push(a.content),i},[]).concat(r)},R2=function(t,n){n=n||{};var r;return r=n.getShadowRoot?D2([t],n.includeContainer,{filter:Kd.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:gL}):T2(t,n.includeContainer,Kd.bind(null,n)),hL(r)},F2=function(t,n){n=n||{};var r;return r=n.getShadowRoot?D2([t],n.includeContainer,{filter:jl.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):T2(t,n.includeContainer,jl.bind(null,n)),r},zr=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return io.call(t,yl)!==!1&&Kd(n,t)},mL=P2.concat("iframe").join(","),Ha=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return io.call(t,mL)!==!1&&jl(n,t)},bL=Object.freeze({__proto__:null,focusable:F2,getTabIndex:gr,isFocusable:Ha,isTabbable:zr,tabbable:R2});function vL(t,n,r){return(n=wL(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Fv(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function Lv(t){for(var n,r=1;r<arguments.length;r++)n=arguments[r]==null?{}:arguments[r],r%2?Fv(Object(n),!0).forEach(function(o){vL(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fv(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))});return t}function yL(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function wL(t){var n=yL(t,"string");return typeof n=="symbol"?n:n+""}var Av={activateTrap:function(t,n){if(0<t.length){var r=t[t.length-1];r!==n&&r.pause()}var o=t.indexOf(n);o===-1||t.splice(o,1),t.push(n)},deactivateTrap:function(t,n){var r=t.indexOf(n);r!==-1&&t.splice(r,1),0<t.length&&t[t.length-1].unpause()}},xL=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},jL=function(t){return(t==null?void 0:t.key)==="Escape"||(t==null?void 0:t.key)==="Esc"||(t==null?void 0:t.keyCode)===27},Oi=function(t){return(t==null?void 0:t.key)==="Tab"||(t==null?void 0:t.keyCode)===9},EL=function(t){return Oi(t)&&!t.shiftKey},kL=function(t){return Oi(t)&&t.shiftKey},_v=function(t){return setTimeout(t,0)},$v=function(t,n){var r=-1;return t.every(function(o,i){return!n(o)||(r=i,!1)}),r},pi=function(t){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return typeof t=="function"?t.apply(void 0,r):t},Sa=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},OL=[],SL=function(t,n){var r,o=(n==null?void 0:n.document)||document,i=(n==null?void 0:n.trapStack)||OL,a=Lv({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:EL,isKeyBackward:kL},n),l={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},c=function(F,L,_){return F&&F[L]!==void 0?F[L]:a[_||L]},u=function(F,L){var _=typeof(L==null?void 0:L.composedPath)=="function"?L.composedPath():void 0;return l.containerGroups.findIndex(function(R){var V=R.container,H=R.tabbableNodes;return V.contains(F)||(_==null?void 0:_.includes(V))||H.find(function(U){return U===F})})},d=function(F){var L=a[F];if(typeof L=="function"){for(var _=arguments.length,R=Array(1<_?_-1:0),V=1;V<_;V++)R[V-1]=arguments[V];L=L.apply(void 0,R)}if(L===!0&&(L=void 0),!L){if(L===void 0||L===!1)return L;throw new Error("`".concat(F,"` was specified but was not a node, or did not return a node"))}var H=L;if(typeof L=="string"&&(H=o.querySelector(L),!H))throw new Error("`".concat(F,"` as selector refers to no known node"));return H},f=function(){var F=d("initialFocus");if(F===!1)return!1;if(F===void 0||!Ha(F,a.tabbableOptions))if(0<=u(o.activeElement))F=o.activeElement;else{var L=l.tabbableGroups[0],_=L&&L.firstTabbableNode;F=_||d("fallbackFocus")}if(!F)throw new Error("Your focus-trap needs to have at least one focusable element");return F},g=function(){if(l.containerGroups=l.containers.map(function(F){var L=R2(F,a.tabbableOptions),_=F2(F,a.tabbableOptions),R=0<L.length?L[0]:void 0,V=0<L.length?L[L.length-1]:void 0,H=_.find(function(X){return zr(X)}),U=_.slice().reverse().find(function(X){return zr(X)}),J=!!L.find(function(X){return 0<gr(X)});return{container:F,tabbableNodes:L,focusableNodes:_,posTabIndexesFound:J,firstTabbableNode:R,lastTabbableNode:V,firstDomTabbableNode:H,lastDomTabbableNode:U,nextTabbableNode:function(X){var N=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],ae=L.indexOf(X);return 0>ae?N?_.slice(_.indexOf(X)+1).find(function(se){return zr(se)}):_.slice(0,_.indexOf(X)).reverse().find(function(se){return zr(se)}):L[ae+(N?1:-1)]}}}),l.tabbableGroups=l.containerGroups.filter(function(F){return 0<F.tabbableNodes.length}),0>=l.tabbableGroups.length&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(l.containerGroups.find(function(F){return F.posTabIndexesFound})&&1<l.containerGroups.length)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function(F){var L=F.activeElement;return L?L.shadowRoot&&L.shadowRoot.activeElement!==null?b(L.shadowRoot):L:void 0},h=function(F){return F===!1||F===b(document)?void 0:F&&F.focus?(F.focus({preventScroll:!!a.preventScroll}),l.mostRecentlyFocusedNode=F,void(xL(F)&&F.select())):void h(f())},m=function(F){var L=d("setReturnFocus",F);return L||L!==!1&&F},y=function(F){var L=F.target,_=F.event,R=F.isBackward,V=R!==void 0&&R;L=L||Sa(_),g();var H=null;if(0<l.tabbableGroups.length){var U=u(L,_),J=0<=U?l.containerGroups[U]:void 0;if(0>U)H=V?l.tabbableGroups[l.tabbableGroups.length-1].lastTabbableNode:l.tabbableGroups[0].firstTabbableNode;else if(V){var X=$v(l.tabbableGroups,function(ye){var Pe=ye.firstTabbableNode;return L===Pe});if(0>X&&(J.container===L||Ha(L,a.tabbableOptions)&&!zr(L,a.tabbableOptions)&&!J.nextTabbableNode(L,!1))&&(X=U),0<=X){var N=X===0?l.tabbableGroups.length-1:X-1,ae=l.tabbableGroups[N];H=0<=gr(L)?ae.lastTabbableNode:ae.lastDomTabbableNode}else Oi(_)||(H=J.nextTabbableNode(L,!1))}else{var se=$v(l.tabbableGroups,function(ye){var Pe=ye.lastTabbableNode;return L===Pe});if(0>se&&(J.container===L||Ha(L,a.tabbableOptions)&&!zr(L,a.tabbableOptions)&&!J.nextTabbableNode(L))&&(se=U),0<=se){var M=se===l.tabbableGroups.length-1?0:se+1,ie=l.tabbableGroups[M];H=0<=gr(L)?ie.firstTabbableNode:ie.firstDomTabbableNode}else Oi(_)||(H=J.nextTabbableNode(L))}}else H=d("fallbackFocus");return H},E=function(F){var L=Sa(F);return 0<=u(L,F)?void 0:pi(a.clickOutsideDeactivates,F)?void r.deactivate({returnFocus:a.returnFocusOnDeactivate}):void(pi(a.allowOutsideClick,F)||F.preventDefault())},v=function(F){var L=Sa(F),_=0<=u(L,F);if(_||L instanceof Document)_&&(l.mostRecentlyFocusedNode=L);else{F.stopImmediatePropagation();var R,V=!0;if(!l.mostRecentlyFocusedNode)V=!1;else if(0<gr(l.mostRecentlyFocusedNode)){var H=u(l.mostRecentlyFocusedNode),U=l.containerGroups[H].tabbableNodes;if(0<U.length){var J=U.findIndex(function(X){return X===l.mostRecentlyFocusedNode});0<=J&&(a.isKeyForward(l.recentNavEvent)?J+1<U.length&&(R=U[J+1],V=!1):0<=J-1&&(R=U[J-1],V=!1))}}else l.containerGroups.some(function(X){return X.tabbableNodes.some(function(N){return 0<gr(N)})})||(V=!1);V&&(R=y({target:l.mostRecentlyFocusedNode,isBackward:a.isKeyBackward(l.recentNavEvent)})),h(R||l.mostRecentlyFocusedNode||f())}l.recentNavEvent=void 0},k=function(F){var L=1<arguments.length&&arguments[1]!==void 0&&arguments[1];l.recentNavEvent=F;var _=y({event:F,isBackward:L});_&&(Oi(F)&&F.preventDefault(),h(_))},C=function(F){(a.isKeyForward(F)||a.isKeyBackward(F))&&k(F,a.isKeyBackward(F))},D=function(F){jL(F)&&pi(a.escapeDeactivates,F)!==!1&&(F.preventDefault(),r.deactivate())},I=function(F){var L=Sa(F);0<=u(L,F)||pi(a.clickOutsideDeactivates,F)||pi(a.allowOutsideClick,F)||(F.preventDefault(),F.stopImmediatePropagation())},T=function(){if(l.active)return Av.activateTrap(i,r),l.delayInitialFocusTimer=a.delayInitialFocus?_v(function(){h(f())}):h(f()),o.addEventListener("focusin",v,!0),o.addEventListener("mousedown",E,{capture:!0,passive:!1}),o.addEventListener("touchstart",E,{capture:!0,passive:!1}),o.addEventListener("click",I,{capture:!0,passive:!1}),o.addEventListener("keydown",C,{capture:!0,passive:!1}),o.addEventListener("keydown",D),r},z=function(){if(l.active)return o.removeEventListener("focusin",v,!0),o.removeEventListener("mousedown",E,!0),o.removeEventListener("touchstart",E,!0),o.removeEventListener("click",I,!0),o.removeEventListener("keydown",C,!0),o.removeEventListener("keydown",D),r},A=function(F){var L=F.some(function(_){var R=Array.from(_.removedNodes);return R.some(function(V){return V===l.mostRecentlyFocusedNode})});L&&h(f())},Q=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(A):void 0,B=function(){Q&&(Q.disconnect(),l.active&&!l.paused&&l.containers.map(function(F){Q.observe(F,{subtree:!0,childList:!0})}))};return r={get active(){return l.active},get paused(){return l.paused},activate:function(F){if(l.active)return this;var L=c(F,"onActivate"),_=c(F,"onPostActivate"),R=c(F,"checkCanFocusTrap");R||g(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=o.activeElement,L==null||L();var V=function(){R&&g(),T(),B(),_==null||_()};return R?(R(l.containers.concat()).then(V,V),this):(V(),this)},deactivate:function(F){if(!l.active)return this;var L=Lv({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},F);clearTimeout(l.delayInitialFocusTimer),l.delayInitialFocusTimer=void 0,z(),l.active=!1,l.paused=!1,B(),Av.deactivateTrap(i,r);var _=c(L,"onDeactivate"),R=c(L,"onPostDeactivate"),V=c(L,"checkCanReturnFocus"),H=c(L,"returnFocus","returnFocusOnDeactivate");_==null||_();var U=function(){_v(function(){H&&h(m(l.nodeFocusedBeforeActivation)),R==null||R()})};return H&&V?(V(m(l.nodeFocusedBeforeActivation)).then(U,U),this):(U(),this)},pause:function(F){if(l.paused||!l.active)return this;var L=c(F,"onPause"),_=c(F,"onPostPause");return l.paused=!0,L==null||L(),z(),B(),_==null||_(),this},unpause:function(F){if(!l.paused||!l.active)return this;var L=c(F,"onUnpause"),_=c(F,"onPostUnpause");return l.paused=!1,L==null||L(),g(),T(),B(),_==null||_(),this},updateContainerElements:function(F){var L=[].concat(F).filter(Boolean);return l.containers=L.map(function(_){return typeof _=="string"?o.querySelector(_):_}),l.active&&g(),B(),this}},r.updateContainerElements(t),r},CL=Object.freeze({__proto__:null,createFocusTrap:SL}),PL=Vw(CL),IL=Vw(bL);function Zo(t){"@babel/helpers - typeof";return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zo(t)}function TL(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function DL(t,n){for(var r,o=0;o<n.length;o++)r=n[o],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,A2(r.key),r)}function ML(t,n,r){return n&&DL(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function NL(t,n,r){return n=El(n),RL(t,L2()?Reflect.construct(n,r||[],El(t).constructor):n.apply(t,r))}function RL(t,n){if(n&&(Zo(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FL(t)}function FL(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L2(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(L2=function(){return!!t})()}function El(t){return El=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},El(t)}function LL(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Gd(t,n)}function Gd(t,n){return Gd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Gd(t,n)}function AL(t,n,r){return(n=A2(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function A2(t){var n=_L(t,"string");return Zo(n)=="symbol"?n:n+""}function _L(t,n){if(Zo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n);if(Zo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""}var Ca=O,Ce=j,$L=PL,zL=$L.createFocusTrap,HL=IL,BL=HL.isFocusable,Qd=function(t){function n(r){var o;TL(this,n),o=NL(this,n,[r]),AL(o,"getNodeForOption",function(l){var c,u=(c=this.internalOptions[l])!==null&&c!==void 0?c:this.originalOptions[l];if(typeof u=="function"){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];u=u.apply(void 0,f)}if(u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(l,"` was specified but was not a node, or did not return a node"))}var b=u;if(typeof u=="string"){var h;if(b=(h=this.getDocument())===null||h===void 0?void 0:h.querySelector(u),!b)throw new Error("`".concat(l,"` as selector refers to no known node"))}return b}),o.handleDeactivate=o.handleDeactivate.bind(o),o.handlePostDeactivate=o.handlePostDeactivate.bind(o),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(o),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=r.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a=="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){o.originalOptions[a]=i[a];continue}o.internalOptions[a]=i[a]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return LL(n,t),ML(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document>"u"?void 0:document)}},{key:"getReturnFocusNode",value:function(){var r=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return r||r!==!1&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var r=this.getDocument();r&&(this.previouslyFocusedElement=r.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(r){var o=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,r):this.originalOptions.clickOutsideDeactivates;return o&&(this.outsideClick={target:r.target,allowDeactivation:o}),o}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var r=this,o=function(){var i=r.getReturnFocusNode(),a=!!(r.originalOptions.returnFocusOnDeactivate&&i!==null&&i!==void 0&&i.focus&&(!r.outsideClick||r.outsideClick.allowDeactivation&&!BL(r.outsideClick.target,r.internalOptions.tabbableOptions))),l=r.internalOptions.preventScroll,c=l!==void 0&&l;a&&i.focus({preventScroll:c}),r.originalOptions.onPostDeactivate&&r.originalOptions.onPostDeactivate.call(null),r.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(o,o):o()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var r=this.focusTrapElements.some(Boolean);r&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(r){if(this.focusTrap){r.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var o=!r.active&&this.props.active,i=r.active&&!this.props.active,a=!r.paused&&this.props.paused,l=r.paused&&!this.props.paused;if(o&&(this.updatePreviousElement(),this.focusTrap.activate()),i)return void this.deactivateTrap();a&&this.focusTrap.pause(),l&&this.focusTrap.unpause()}else r.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var r=this,o=this.props.children?Ca.Children.only(this.props.children):void 0;if(o){if(o.type&&o.type===Ca.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var i=function(l){var c=r.props.containerElements;o&&(typeof o.ref=="function"?o.ref(l):o.ref&&(o.ref.current=l)),r.focusTrapElements=c||[l]},a=Ca.cloneElement(o,{ref:i});return a}return null}}])}(Ca.Component),gi=typeof Element>"u"?Function:Element;Qd.propTypes={active:Ce.bool,paused:Ce.bool,focusTrapOptions:Ce.shape({document:Ce.object,onActivate:Ce.func,onPostActivate:Ce.func,checkCanFocusTrap:Ce.func,onPause:Ce.func,onPostPause:Ce.func,onUnpause:Ce.func,onPostUnpause:Ce.func,onDeactivate:Ce.func,onPostDeactivate:Ce.func,checkCanReturnFocus:Ce.func,initialFocus:Ce.oneOfType([Ce.instanceOf(gi),Ce.string,Ce.bool,Ce.func]),fallbackFocus:Ce.oneOfType([Ce.instanceOf(gi),Ce.string,Ce.func]),escapeDeactivates:Ce.oneOfType([Ce.bool,Ce.func]),clickOutsideDeactivates:Ce.oneOfType([Ce.bool,Ce.func]),returnFocusOnDeactivate:Ce.bool,setReturnFocus:Ce.oneOfType([Ce.instanceOf(gi),Ce.string,Ce.bool,Ce.func]),allowOutsideClick:Ce.oneOfType([Ce.bool,Ce.func]),preventScroll:Ce.bool,tabbableOptions:Ce.shape({displayCheck:Ce.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:Ce.oneOfType([Ce.bool,Ce.func])}),trapStack:Ce.array,isKeyForward:Ce.func,isKeyBackward:Ce.func}),containerElements:Ce.arrayOf(Ce.instanceOf(gi)),children:Ce.oneOfType([Ce.element,Ce.instanceOf(gi)])},Qd.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:zL};var VL=Qd;Bw(VL);j.string,j.string,j.string,j.oneOf(["small","large"]),j.string,j.string,j.oneOf(rr),j.oneOf(rr),j.bool,j.node,j.element,j.bool,j.bool,j.string,j.func,j.func,j.bool,j.bool,j.oneOfType([j.element,j.string]);j.string,j.bool,j.string,j.node;j.node,j.oneOf(["default","large"]),j.bool,j.bool,j.func,j.string,j.node;j.string,j.any,j.element;j.string,j.any;var WL=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(WL||{}),UL=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(UL||{}),qL=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(qL||{}),YL=(t=>(t[t.OpenListbox=0]="OpenListbox",t[t.CloseListbox=1]="CloseListbox",t[t.GoToOption=2]="GoToOption",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterOption=5]="RegisterOption",t[t.UnregisterOption=6]="UnregisterOption",t[t.RegisterLabel=7]="RegisterLabel",t))(YL||{});function cc(t){let n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a=>a,r=t.activeOptionIndex===null?null:t.options[t.activeOptionIndex],o=Ql(n(t.options.slice()),a=>a.dataRef.current.domRef.current),i=r?o.indexOf(r):null;return i===-1&&(i=null),{options:o,activeOptionIndex:i}}let KL={1(t){return t.dataRef.current.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},0(t){if(t.dataRef.current.disabled||t.listboxState===0)return t;let n=t.activeOptionIndex,{isSelected:r}=t.dataRef.current,o=t.options.findIndex(i=>r(i.dataRef.current.value));return o!==-1&&(n=o),{...t,listboxState:0,activeOptionIndex:n}},2(t,n){var r;if(t.dataRef.current.disabled||t.listboxState===1)return t;let o=cc(t),i=fl(n,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeOptionIndex:i,activationTrigger:(r=n.trigger)==null?1:r}},3:(t,n)=>{if(t.dataRef.current.disabled||t.listboxState===1)return t;let r=t.searchQuery===""?1:0,o=t.searchQuery+n.value.toLowerCase(),i=(t.activeOptionIndex===null?t.options:t.options.slice(t.activeOptionIndex+r).concat(t.options.slice(0,t.activeOptionIndex+r))).find(l=>{var c;return!l.dataRef.current.disabled&&((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))}),a=i?t.options.indexOf(i):-1;return a===-1||a===t.activeOptionIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeOptionIndex:a,activationTrigger:1}},4(t){return t.dataRef.current.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},5:(t,n)=>{let r={id:n.id,dataRef:n.dataRef},o=cc(t,i=>[...i,r]);return t.activeOptionIndex===null&&t.dataRef.current.isSelected(n.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(r)),{...t,...o}},6:(t,n)=>{let r=cc(t,o=>{let i=o.findIndex(a=>a.id===n.id);return i!==-1&&o.splice(i,1),o});return{...t,...r,activationTrigger:1}},7:(t,n)=>({...t,labelId:n.id})},Sp=p.createContext(null);Sp.displayName="ListboxActionsContext";function oa(t){let n=p.useContext(Sp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,oa),r}return n}let Cp=p.createContext(null);Cp.displayName="ListboxDataContext";function ia(t){let n=p.useContext(Cp);if(n===null){let r=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ia),r}return n}function GL(t,n){return ot(n.type,KL,t,n)}let QL=p.Fragment;function JL(t,n){let{value:r,defaultValue:o,form:i,name:a,onChange:l,by:c=(M,ie)=>M===ie,disabled:u=!1,horizontal:d=!1,multiple:f=!1,...g}=t;const b=d?"horizontal":"vertical";let h=jt(n),[m=f?[]:void 0,y]=m2(r,l,o),[E,v]=p.useReducer(GL,{dataRef:p.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),k=p.useRef({static:!1,hold:!1}),C=p.useRef(null),D=p.useRef(null),I=p.useRef(null),T=ge(typeof c=="string"?(M,ie)=>{let ye=c;return(M==null?void 0:M[ye])===(ie==null?void 0:ie[ye])}:c),z=p.useCallback(M=>ot(A.mode,{1:()=>m.some(ie=>T(ie,M)),0:()=>T(m,M)}),[m]),A=p.useMemo(()=>({...E,value:m,disabled:u,mode:f?1:0,orientation:b,compare:T,isSelected:z,optionsPropsRef:k,labelRef:C,buttonRef:D,optionsRef:I}),[m,u,f,E]);Qe(()=>{E.dataRef.current=A},[A]),ap([A.buttonRef,A.optionsRef],(M,ie)=>{var ye;v({type:1}),Gl(ie,Kl.Loose)||(M.preventDefault(),(ye=A.buttonRef.current)==null||ye.focus())},A.listboxState===0);let Q=p.useMemo(()=>({open:A.listboxState===0,disabled:u,value:m}),[A,u,m]),B=ge(M=>{let ie=A.options.find(ye=>ye.id===M);ie&&U(ie.dataRef.current.value)}),F=ge(()=>{if(A.activeOptionIndex!==null){let{dataRef:M,id:ie}=A.options[A.activeOptionIndex];U(M.current.value),v({type:2,focus:Le.Specific,id:ie})}}),L=ge(()=>v({type:0})),_=ge(()=>v({type:1})),R=ge((M,ie,ye)=>M===Le.Specific?v({type:2,focus:Le.Specific,id:ie,trigger:ye}):v({type:2,focus:M,trigger:ye})),V=ge((M,ie)=>(v({type:5,id:M,dataRef:ie}),()=>v({type:6,id:M}))),H=ge(M=>(v({type:7,id:M}),()=>v({type:7,id:null}))),U=ge(M=>ot(A.mode,{0(){return y==null?void 0:y(M)},1(){let ie=A.value.slice(),ye=ie.findIndex(Pe=>T(Pe,M));return ye===-1?ie.push(M):ie.splice(ye,1),y==null?void 0:y(ie)}})),J=ge(M=>v({type:3,value:M})),X=ge(()=>v({type:4})),N=p.useMemo(()=>({onChange:U,registerOption:V,registerLabel:H,goToOption:R,closeListbox:_,openListbox:L,selectActiveOption:F,selectOption:B,search:J,clearSearch:X}),[]),ae=p.useRef(null),se=En();return p.useEffect(()=>{ae.current&&o!==void 0&&se.addEventListener(ae.current,"reset",()=>{y==null||y(o)})},[ae,y]),O.createElement(Sp.Provider,{value:N},O.createElement(Cp.Provider,{value:A},O.createElement(Zl,{value:ot(A.listboxState,{0:dt.Open,1:dt.Closed})},a!=null&&m!=null&&jp({[a]:m}).map((M,ie)=>{let[ye,Pe]=M;return O.createElement(b2,{features:xp.Hidden,ref:ie===0?$e=>{var oe;ae.current=(oe=$e==null?void 0:$e.closest("form"))==null?null:oe}:void 0,...dl({key:ye,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:u,name:ye,value:Pe})})}),mt({ourProps:{ref:h},theirProps:g,slot:Q,defaultTag:QL,name:"Listbox"}))))}let ZL="button";function XL(t,n){var r;let o=un(),{id:i=`headlessui-listbox-button-${o}`,...a}=t,l=ia("Listbox.Button"),c=oa("Listbox.Button"),u=jt(l.buttonRef,n),d=En(),f=ge(E=>{switch(E.key){case Me.Space:case Me.Enter:case Me.ArrowDown:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Le.First)});break;case Me.ArrowUp:E.preventDefault(),c.openListbox(),d.nextFrame(()=>{l.value||c.goToOption(Le.Last)})}}),g=ge(E=>{switch(E.key){case Me.Space:E.preventDefault()}}),b=ge(E=>up(E.currentTarget)?E.preventDefault():void(l.listboxState===0?(c.closeListbox(),d.nextFrame(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})})):(E.preventDefault(),c.openListbox()))),h=na(()=>{if(l.labelId)return[l.labelId,i].join(" ")},[l.labelId,i]),m=p.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled,value:l.value}),[l]),y={ref:u,id:i,type:lp(t,l.buttonRef),"aria-haspopup":"listbox","aria-controls":(r=l.optionsRef.current)==null?void 0:r.id,"aria-expanded":l.listboxState===0,"aria-labelledby":h,disabled:l.disabled,onKeyDown:f,onKeyUp:g,onClick:b};return mt({ourProps:y,theirProps:a,slot:m,defaultTag:ZL,name:"Listbox.Button"})}let eA="label";function tA(t,n){let r=un(),{id:o=`headlessui-listbox-label-${r}`,...i}=t,a=ia("Listbox.Label"),l=oa("Listbox.Label"),c=jt(a.labelRef,n);Qe(()=>l.registerLabel(o),[o]);let u=ge(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=p.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return mt({ourProps:{ref:c,id:o,onClick:u},theirProps:i,slot:d,defaultTag:eA,name:"Listbox.Label"})}let nA="ul",rA=Pr.RenderStrategy|Pr.Static;function oA(t,n){var r;let o=un(),{id:i=`headlessui-listbox-options-${o}`,...a}=t,l=ia("Listbox.Options"),c=oa("Listbox.Options"),u=jt(l.optionsRef,n),d=En(),f=En(),g=ea(),b=g===null?l.listboxState===0:(g&dt.Open)===dt.Open;p.useEffect(()=>{var v;let k=l.optionsRef.current;k&&l.listboxState===0&&k!==((v=Xi(k))==null?void 0:v.activeElement)&&k.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let h=ge(v=>{switch(f.dispose(),v.key){case Me.Space:if(l.searchQuery!=="")return v.preventDefault(),v.stopPropagation(),c.search(v.key);case Me.Enter:if(v.preventDefault(),v.stopPropagation(),l.activeOptionIndex!==null){let{dataRef:k}=l.options[l.activeOptionIndex];c.onChange(k.current.value)}l.mode===0&&(c.closeListbox(),Vt().nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}));break;case ot(l.orientation,{vertical:Me.ArrowDown,horizontal:Me.ArrowRight}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.Next);case ot(l.orientation,{vertical:Me.ArrowUp,horizontal:Me.ArrowLeft}):return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.Previous);case Me.Home:case Me.PageUp:return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.First);case Me.End:case Me.PageDown:return v.preventDefault(),v.stopPropagation(),c.goToOption(Le.Last);case Me.Escape:return v.preventDefault(),v.stopPropagation(),c.closeListbox(),d.nextFrame(()=>{var k;return(k=l.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})});case Me.Tab:v.preventDefault(),v.stopPropagation();break;default:v.key.length===1&&(c.search(v.key),f.setTimeout(()=>c.clearSearch(),350))}}),m=na(()=>{var v;return(v=l.buttonRef.current)==null?void 0:v.id},[l.buttonRef.current]),y=p.useMemo(()=>({open:l.listboxState===0}),[l]),E={"aria-activedescendant":l.activeOptionIndex===null||(r=l.options[l.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":l.mode===1||void 0,"aria-labelledby":m,"aria-orientation":l.orientation,id:i,onKeyDown:h,role:"listbox",tabIndex:0,ref:u};return mt({ourProps:E,theirProps:a,slot:y,defaultTag:nA,features:rA,visible:b,name:"Listbox.Options"})}let iA="li";function aA(t,n){let r=un(),{id:o=`headlessui-listbox-option-${r}`,disabled:i=!1,value:a,...l}=t,c=ia("Listbox.Option"),u=oa("Listbox.Option"),d=c.activeOptionIndex!==null&&c.options[c.activeOptionIndex].id===o,f=c.isSelected(a),g=p.useRef(null),b=E2(g),h=yn({disabled:i,value:a,domRef:g,get textValue(){return b()}}),m=jt(n,g);Qe(()=>{if(c.listboxState===0&&d&&c.activationTrigger!==0){let T=Vt();return T.requestAnimationFrame(()=>{var z,A;(A=(z=g.current)==null?void 0:z.scrollIntoView)==null||A.call(z,{block:"nearest"})}),T.dispose}},[g,d,c.listboxState,c.activationTrigger,c.activeOptionIndex]),Qe(()=>u.registerOption(o,h),[h,o]);let y=ge(T=>i?T.preventDefault():(u.onChange(a),void(c.mode===0&&(u.closeListbox(),Vt().nextFrame(()=>{var z;return(z=c.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}))))),E=ge(()=>i?u.goToOption(Le.Nothing):void u.goToOption(Le.Specific,o)),v=sp(),k=ge(T=>v.update(T)),C=ge(T=>{v.wasMoved(T)&&(i||d||u.goToOption(Le.Specific,o,0))}),D=ge(T=>{v.wasMoved(T)&&(i||d&&u.goToOption(Le.Nothing))}),I=p.useMemo(()=>({active:d,selected:f,disabled:i}),[d,f,i]);return mt({ourProps:{id:o,ref:m,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,"aria-selected":f,disabled:void 0,onClick:y,onFocus:E,onPointerEnter:k,onMouseEnter:k,onPointerMove:C,onMouseMove:C,onPointerLeave:D,onMouseLeave:D},theirProps:l,slot:I,defaultTag:iA,name:"Listbox.Option"})}let lA=pt(JL),sA=pt(XL),cA=pt(tA),uA=pt(oA),dA=pt(aA);Object.assign(lA,{Button:sA,Label:cA,Options:uA,Option:dA});p.createContext();j.string,j.node,j.string,j.string,j.bool,j.bool,j.node,j.node,j.string,j.bool,j.string,j.bool,j.bool,j.string,j.func,j.func,j.string,j.bool,j.node,j.bool,j.bool,j.string,j.oneOf(["default","primary","primary-danger","subdued"]),j.oneOf(["full","auto"]),j.string;j.string,j.string,j.bool,j.string,j.string;j.oneOf(["default","number","select","input"]),j.number,j.number,j.number,j.bool,j.bool,j.bool,j.func,j.func,j.func,j.func,j.func,j.func,j.bool,j.string;p.createContext({});const fA=`
  jn-h-px 
  jn-w-full
  jn-bg-theme-background-lvl-3
`,zv=O.forwardRef((t,n)=>{let{className:r="",...o}=t;return O.createElement("div",xe({className:`juno-select-divider ${fA} ${r}`,ref:n},o))});zv.displayName="SelectDivider",zv.propTypes={className:j.string};j.string,j.string,j.string,j.string,j.node,j.bool,j.string,j.bool,j.bool,j.string,j.node,j.bool,j.string,j.oneOf(["default","primary","primary-danger","subdued"]),j.func,j.func,j.func,j.string,j.bool,j.bool,j.bool,j.string;p.createContext(void 0);j.string,j.string,j.string,j.bool,j.oneOf(["small","default","large"]),j.bool,j.bool,j.bool,j.bool,j.node,j.node,j.node,j.string,j.func,j.func,j.string;j.string,j.string,j.string,j.bool,j.bool,j.node,j.bool,j.bool,j.string,j.bool,j.string,j.string,j.func,j.func;p.createContext(void 0);j.string,j.string,j.oneOfType([j.string,j.number]),j.string,j.string,j.bool,j.bool,j.bool,j.bool,j.bool,j.bool,j.string,j.string,j.func,j.func,j.func,j.node,j.node,j.node,j.oneOf(["full","auto"]),j.string;j.string,j.string,j.string,j.string,j.node,j.string,j.bool,j.bool,j.string,j.bool,j.string,j.string,j.bool,j.func;j.oneOf(["text","password","email","tel","url","number"]),j.string,j.string,j.string,j.string,j.string,j.node,j.bool,j.bool,j.string,j.bool,j.string,j.bool,j.string,j.bool,j.func,j.func,j.func;j.string,j.bool,j.string,j.string,j.func;function Jd(t){return p.useMemo(()=>t.every(n=>n==null)?null:n=>{t.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})},t)}p.createContext(null);p.createContext(null);var pA=O.createContext(null),_2=function(){var t=O.useContext(pA);if(t==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},gA=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`,hA=`
    jn-mx-4
    jn-max-w-full
`,mA=`
    jn-shrink-0
`,bA=function(t){return t==="error"?"dangerous":t};O.forwardRef(function(t,n){var r=t.className,o=r===void 0?"":r,i=t.children,a=i===void 0?null:i,l=Wn(t,["className","children"]),c=_2(),u=Jd([c.refs.setFloating,n]),d=c.variant;return O.createElement(O.Fragment,null,c.open&&O.createElement("div",be({className:"juno-tooltip juno-tooltip-".concat(d," ").concat(gA," ").concat(o),ref:u,style:be({},c.floatingStyles)},c.getFloatingProps(l)),d&&O.createElement(ip,{icon:bA(d),color:"jn-text-theme-".concat(d),className:"juno-tooltip-popover-icon ".concat(mA)}),O.createElement("p",{className:"".concat(hA)},a)))});O.forwardRef(function(t,n){var r=t.children,o=r===void 0?null:r,i=t.asChild,a=t.className,l=a===void 0?"":a,c=Wn(t,["children","asChild","className"]),u=_2(),d=Jd([u.refs.setReference,n]);if(i!==void 0&&i&&O.isValidElement(o)){var f=o.props,g=f.ref,b=Jd([u.refs.setReference,n,g]),h=be(be(be({ref:b},c),f),{"data-state":u.open?"open":"closed",className:f.className+"".concat(u.disabled&&" jn-cursor-default")}),m=u.getReferenceProps(h);return O.cloneElement(o,m)}return O.createElement("button",be({ref:d,"data-state":u.open?"open":"closed"},u.getReferenceProps(c),{className:"".concat(l," ").concat(u.disabled&&" jn-cursor-default")}),o)});const vA=t=>t==="info"||t==="success",yA=({className:t})=>{const n=w7(),{removeMessage:r}=zw(),o=i=>{r(i)};return O.createElement(O.Fragment,null,n&&n.length>0&&O.createElement("div",{role:"group",className:`juno-message-provider ${t||""}`},n.map((i,a)=>{const{id:l,variant:c,text:u,...d}=i;return O.createElement(C2,{role:"alert",key:l,className:a>0?"mt-4":"",variant:c,dismissible:!0,autoDismiss:vA(c),onDismiss:()=>o(l),...d},u)})))},uc={BASE_URL:"./",DEV:!1,MODE:"static",PROD:!0,SSR:!1},Zd=new Map,Pa=t=>{const n=Zd.get(t);return n?Object.fromEntries(Object.entries(n.stores).map(([r,o])=>[r,o.getState()])):{}},wA=(t,n,r)=>{if(t===void 0)return{type:"untracked",connection:n.connect(r)};const o=Zd.get(r.name);if(o)return{type:"tracked",store:t,...o};const i={connection:n.connect(r),stores:{}};return Zd.set(r.name,i),{type:"tracked",store:t,...i}},xA=(t,n={})=>(r,o,i)=>{const{enabled:a,anonymousActionType:l,store:c,...u}=n;let d;try{d=(a??(uc?"static":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!d)return(uc?"static":void 0)!=="production"&&a&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),t(r,o,i);const{connection:f,...g}=wA(c,d,u);let b=!0;i.setState=(y,E,v)=>{const k=r(y,E);if(!b)return k;const C=v===void 0?{type:l||"anonymous"}:typeof v=="string"?{type:v}:v;return c===void 0?(f==null||f.send(C,o()),k):(f==null||f.send({...C,type:`${c}/${C.type}`},{...Pa(u.name),[c]:i.getState()}),k)};const h=(...y)=>{const E=b;b=!1,r(...y),b=E},m=t(i.setState,o,i);if(g.type==="untracked"?f==null||f.init(m):(g.stores[g.store]=i,f==null||f.init(Object.fromEntries(Object.entries(g.stores).map(([y,E])=>[y,y===g.store?m:E.getState()])))),i.dispatchFromDevtools&&typeof i.dispatch=="function"){let y=!1;const E=i.dispatch;i.dispatch=(...v)=>{(uc?"static":void 0)!=="production"&&v[0].type==="__setState"&&!y&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),y=!0),E(...v)}}return f.subscribe(y=>{var E;switch(y.type){case"ACTION":if(typeof y.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return dc(y.payload,v=>{if(v.type==="__setState"){if(c===void 0){h(v.state);return}Object.keys(v.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const k=v.state[c];if(k==null)return;JSON.stringify(i.getState())!==JSON.stringify(k)&&h(k);return}i.dispatchFromDevtools&&typeof i.dispatch=="function"&&i.dispatch(v)});case"DISPATCH":switch(y.payload.type){case"RESET":return h(m),c===void 0?f==null?void 0:f.init(i.getState()):f==null?void 0:f.init(Pa(u.name));case"COMMIT":if(c===void 0){f==null||f.init(i.getState());return}return f==null?void 0:f.init(Pa(u.name));case"ROLLBACK":return dc(y.state,v=>{if(c===void 0){h(v),f==null||f.init(i.getState());return}h(v[c]),f==null||f.init(Pa(u.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return dc(y.state,v=>{if(c===void 0){h(v);return}JSON.stringify(i.getState())!==JSON.stringify(v[c])&&h(v[c])});case"IMPORT_STATE":{const{nextLiftedState:v}=y.payload,k=(E=v.computedStates.slice(-1)[0])==null?void 0:E.state;if(!k)return;h(c===void 0?k:k[c]),f==null||f.send(null,v);return}case"PAUSE_RECORDING":return b=!b}return}}),m},jA=xA,dc=(t,n)=>{let r;try{r=JSON.parse(t)}catch(o){console.error("[zustand devtools middleware] Could not parse the received json",o)}r!==void 0&&n(r)},Hv=t=>{if(!t||typeof t=="object"&&Object.keys(t).length===0)return"An error occurred. There is no further information";let n=JSON.stringify(t);if(t!=null&&t.message){n=t==null?void 0:t.message;try{const r=JSON.parse(t==null?void 0:t.message);r.error&&(n=r.error),r.msg&&(n=r.msg)}catch(r){console.error(r)}}return n},Xo=t=>t&&t.replace(/([A-Z])/g,n=>" "+n.toLowerCase()).replace(/_/g," ");function EA(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}const Xd="cluster",ef="violationGroup",tf="check",vi="unknown",kA=t=>{if(!t)return[];const n=Object.keys(t).reduce((r,o)=>{const i=t[o];return Object.keys(i).forEach(a=>{const l=i[a];r[a]=r[a]||{key:`${Xd}:${a}`,id:a,type:Xd,label:Xo(a),values:[]},r[a].values.indexOf(l)<0&&r[a].values.push(l)}),r},{});return Object.values(n)},OA=(t,n={showDebugSeverities:!1})=>{if(!t)return[];const r=[];t.forEach(i=>i.constraints.forEach(a=>r.push(a)));const o=r.reduce((i,a)=>{var l,c;if((l=a==null?void 0:a.metadata)!=null&&l.severity){const u=a.metadata.severity;i.severity=i.severity||{key:`${ef}:severity`,id:"severity",type:ef,label:"severity",values:[]},i.severity.values.indexOf(u)<0&&(n!=null&&n.showDebugSeverities||u!=="debug")&&i.severity.values.push(u)}return(c=a==null?void 0:a.violation_groups)==null||c.forEach(u=>{var d;(d=u==null?void 0:u.pattern)!=null&&d.object_identity&&Object.keys(u.pattern.object_identity).forEach(f=>{const g=u.pattern.object_identity[f];i[f]=i[f]||{key:`${tf}:${f}`,id:f,type:tf,label:Xo(f),values:[]},i[f].values.indexOf(g)<0&&i[f].values.push(g)})}),Object.keys(i).forEach(u=>{i[u].values.sort()}),i},{});return Object.values(o)},SA=({violationGroups:t,clusterIdentities:n,activeFilters:r,searchTerm:o,showDebugSeverities:i})=>{let a=t;if(i||(a=a==null?void 0:a.filter(l=>{var c,u;return l.constraints=(c=l.constraints)==null?void 0:c.filter(d=>{var f;return((f=d.metadata)==null?void 0:f.severity)!=="debug"}),((u=l.constraints)==null?void 0:u.length)>0})),t&&(r==null?void 0:r.length)>0){a=[];const l={},c={},u={};r.forEach(d=>{var b;const[f,g]=(b=d.key)==null?void 0:b.split(":");f===ef&&g==="severity"?(l[g]=l[g]||[],l[g].push(d.value)):f===tf?(c[g]=c[g]||[],c[g].push(d.value)):f===Xd&&(u[g]=u[g]||[],u[g].push(d.value))}),t.forEach(d=>{var g,b;const f=JSON.parse(JSON.stringify(d));f.constraints=(g=f.constraints)==null?void 0:g.filter(h=>{var y,E,v,k;let m=!0;if(Object.keys(c).length>0&&(h.violation_groups=(y=h.violation_groups)==null?void 0:y.filter(C=>Object.keys(c).reduce((D,I)=>{var T,z;return D&&((T=C.pattern)==null?void 0:T.object_identity)&&((z=c[I])==null?void 0:z.includes(C.pattern.object_identity[I]))},!0)),m=m&&((E=h.violation_groups)==null?void 0:E.length)>0),Object.keys(u).length>0){const C=n==null?void 0:n.filter(D=>Object.keys(u).reduce((I,T)=>I&&u[T].includes(D[T]),!0)).map(D=>D.cluster);h.violation_groups=(v=h.violation_groups)==null?void 0:v.filter(D=>(D.instances=D.instances.filter(I=>C.includes(I.cluster)),D.instances.length>0)),m=m&&((k=h.violation_groups)==null?void 0:k.length)>0}return Object.keys(l).length>0&&(m=m&&Object.values(l).reduce((C,D)=>{var I;return C&&D.includes((I=h.metadata)==null?void 0:I.severity)},!0)),m}),((b=f.constraints)==null?void 0:b.length)>0&&a.push(f)})}return o&&a&&(a=a.filter(l=>{var u;const c=l.constraints=(u=l.constraints)==null?void 0:u.filter(d=>{const{violation_groups:f,...g}=d,b=JSON.stringify(g).toLowerCase().includes(o.toLowerCase()),h=f.filter(m=>JSON.stringify(m).toLowerCase().includes(o.toLowerCase()));return d.violation_groups=h,b||h.length>0});return l.constraints=c,c.length>0})),a},CA=({items:t,severityWeights:n})=>t?t.map(r=>{var o;return r.violationCount=0,r.severities=[],(o=r.constraints)==null||o.forEach(i=>{var a,l,c;r.violationCount+=((a=i.violation_groups)==null?void 0:a.length)||0,r.severities.indexOf((l=i==null?void 0:i.metadata)==null?void 0:l.severity)<0&&r.severities.push((c=i==null?void 0:i.metadata)==null?void 0:c.severity)}),r.severities=r.severities.sort((i,a)=>(n.indexOf(i)||100)-(n.indexOf(a)||100)),r}).sort((r,o)=>(n[r.severities[0]]||100)-(n[o.severities[0]]||100)):[],PA=(t,n)=>({data:{severityWeights:{error:1,warning:2,info:3,debug:4},showDebugSeverities:!0,loaded:!1,clusterIdentities:null,violationGroups:null,filterEntries:[],filteredItems:{},detailsViolationGroupKind:null,detailsViolationGroup:null,actions:{setShowDebugSeverities:r=>{t(o=>({data:{...o.data,showDebugSeverities:r}}))},setData:r=>{if(!r)return;let o=[];r.cluster_identities&&(o=Object.keys(r.cluster_identities).map(i=>({cluster:i,...r.cluster_identities[i]}))),t(i=>({data:{...i.data,loaded:!0,clusterIdentities:o,violationGroups:r.templates||[],filterEntries:[...kA(r.cluster_identities),...OA(r.templates,{showDebugSeverities:i.data.showDebugSeverities})]}}),!1,"data/setData"),n().filters.actions.ensureFilterType(),n().data.actions.filterItems()},filterItems:()=>{const r=n().data.violationGroups,o=n().data.clusterIdentities,i=n().filters.active||[],a=n().filters.searchTerm,l=n().data.severityWeights;let c=SA({violationGroups:r,clusterIdentities:o,activeFilters:i,searchTerm:a,showDebugSeverities:n().data.showDebugSeverities});c=CA({items:c,severityWeights:l}),t(u=>({data:{...u.data,filteredItems:c}}),!1,"data/filterItems"),n().data.actions.setDetailsViolationGroup()},setDetailsViolationGroupKind:r=>{t(o=>({data:{...o.data,detailsViolationGroupKind:r}}),!1,"data.setDetailsViolationGroup"),n().data.actions.setDetailsViolationGroup()},setDetailsViolationGroup:()=>{var i;const r=n().data.detailsViolationGroupKind;if(!r)return;const o=(i=n().data.filteredItems)==null?void 0:i.find(a=>a.kind===r);n().data.detailsViolationGroup&&o&&JSON.stringify(n().data.detailsViolationGroup)===JSON.stringify(o)||t(a=>({data:{...a.data,detailsViolationGroup:o}}),!1,"data.setDetailsViolationGroup")}}}}),IA=t=>{if(!(typeof t!="object"||!Object.keys(t).length))return Object.keys(t).map(n=>{if(Array.isArray(t[n]))return t[n].map(r=>({key:`${vi}:${n}`,id:n,type:vi,label:Xo(n),value:r}));if(typeof t[n]=="string")return{key:`${vi}:${n}`,id:n,type:vi,label:Xo(n),value:t[n]}}).flat()},TA=(t,n,r)=>({filters:{searchTerm:null,active:IA(r==null?void 0:r.initialFilters),actions:{ensureFilterType:()=>{var i;let o=(i=n().filters.active)==null?void 0:i.map(a=>{if(a.type===vi){let l=n().data.filterEntries.find(c=>c.id===a.id);l&&(a.type=l.type,a.key=l.type+":"+a.id)}return a});t(a=>({filters:{...a.filters,active:o}}),!1,"filters.ensureFilterType")},set:o=>{Array.isArray(o)&&(t(i=>({filters:{...i.filters,active:o}}),!1,"filters.set"),n().data.actions.filterItems())},add:(o,i)=>{t(a=>{var u;let l=((u=a.filters.active)==null?void 0:u.slice())||[];return l.findIndex(d=>d.key===o&&d.value===i)<0&&l.push({key:o,value:i}),{filters:{...a.filters,active:l}}},!1,"filters.add"),n().data.actions.filterItems()},remove:(o,i)=>{t(a=>{var u;let l=((u=a.filters.active)==null?void 0:u.slice())||[],c=l.findIndex(d=>d.key===o&&d.value===i);return c>=0&&l.splice(c,1),{filters:{...a.filters,active:l}}},!1,"filters.remove"),n().data.actions.filterItems()},removeAll:()=>{t(o=>({filters:{...o.filters,active:[]}}),!1,"filters.remove"),n().data.actions.filterItems()},setSearchTerm:o=>{t(i=>({filters:{...i.filters,searchTerm:o}})),n().data.actions.filterItems()}}}}),DA=t=>({userActivity:{isActive:!0,actions:{setIsActive:n=>{t(r=>({userActivity:{...r.userActivity,isActive:n}}),!1,"userActivity.setIsActive")}}}}),MA=t=>({globals:{endpoint:"",isMock:!1,actions:{setEndpoint:n=>t(r=>({globals:{...r.globals,endpoint:n}}),!1,"globals/setEndpoint"),setMock:n=>t(r=>({globals:{...r.globals,isMock:n}}),!1,"globals/setMock")}}}),NA=t=>Mw(jA((n,r)=>({...DA(n),...TA(n,r,t),...PA(n,r),...MA(n)}))),$2=p.createContext(),RA=({options:t,children:n})=>G.jsx($2.Provider,{value:NA(t),children:n}),dn=t=>Aw(p.useContext($2),t),FA=()=>dn(t=>t.globals.isMock),LA=()=>dn(t=>t.globals.endpoint),AA=()=>dn(t=>t.globals.actions),_A=()=>dn(t=>t.data.loaded),Pp=()=>dn(t=>t.data.detailsViolationGroupKind),$A=()=>dn(t=>t.data.detailsViolationGroup),zA=()=>dn(t=>t.data.filterEntries),HA=()=>dn(t=>t.data.filteredItems),as=()=>dn(t=>t.data.actions),Ip=()=>dn(t=>t.filters.active),Tp=()=>dn(t=>t.filters.searchTerm),ls=()=>dn(t=>t.filters.actions),BA=()=>G.jsx(vI,{children:G.jsxs("p",{children:["To perform automatic validations on Kubernetes objects, we run a deployment of"," ",G.jsxs("a",{href:"https://github.com/open-policy-agent/gatekeeper",target:"_blank",rel:"noreferrer",children:["OPA Gatekeeper"," "]})," ","in each cluster. This dashboard aggregates all policy violations reported by those Gatekeeper instances. ",G.jsx("br",{}),G.jsx("br",{}),G.jsx("b",{children:"Where are checks defined? How can I add or modify them? "}),G.jsx("br",{}),"Follow the links in the section headers to the source code. For how to write constraints and their templates, check out"," ",G.jsx("a",{href:"https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",target:"_blank",rel:"noreferrer",children:"this guide from the Gatekeeper documentation."}),G.jsx("br",{}),G.jsx("br",{}),G.jsx("b",{children:"Did we improve over time? "}),G.jsx("br",{}),"To see historical trends, check out the"," ",G.jsx("a",{href:"https://plutono.global.cloud.sap/d/doop-overview/doop-overview?orgId=1",target:"_blank",rel:"noreferrer",children:"Plutono dashboard."})]})}),z2=({text:t,className:n})=>G.jsxs(Ln,{alignment:"center",className:n,children:[G.jsx(d1,{variant:"primary"}),t?G.jsx("span",{children:t}):G.jsx("span",{children:"Loading..."})]});var aa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ei=typeof window>"u"||"Deno"in globalThis;function an(){}function VA(t,n){return typeof t=="function"?t(n):t}function nf(t){return typeof t=="number"&&t>=0&&t!==1/0}function H2(t,n){return Math.max(t+(n||0)-Date.now(),0)}function Bv(t,n){const{type:r="all",exact:o,fetchStatus:i,predicate:a,queryKey:l,stale:c}=t;if(l){if(o){if(n.queryHash!==Dp(l,n.options))return!1}else if(!$i(n.queryKey,l))return!1}if(r!=="all"){const u=n.isActive();if(r==="active"&&!u||r==="inactive"&&u)return!1}return!(typeof c=="boolean"&&n.isStale()!==c||i&&i!==n.state.fetchStatus||a&&!a(n))}function Vv(t,n){const{exact:r,status:o,predicate:i,mutationKey:a}=t;if(a){if(!n.options.mutationKey)return!1;if(r){if(_i(n.options.mutationKey)!==_i(a))return!1}else if(!$i(n.options.mutationKey,a))return!1}return!(o&&n.state.status!==o||i&&!i(n))}function Dp(t,n){return((n==null?void 0:n.queryKeyHashFn)||_i)(t)}function _i(t){return JSON.stringify(t,(n,r)=>of(r)?Object.keys(r).sort().reduce((o,i)=>(o[i]=r[i],o),{}):r)}function $i(t,n){return t===n?!0:typeof t!=typeof n?!1:t&&n&&typeof t=="object"&&typeof n=="object"?!Object.keys(n).some(r=>!$i(t[r],n[r])):!1}function B2(t,n){if(t===n)return t;const r=Wv(t)&&Wv(n);if(r||of(t)&&of(n)){const o=r?t:Object.keys(t),i=o.length,a=r?n:Object.keys(n),l=a.length,c=r?[]:{};let u=0;for(let d=0;d<l;d++){const f=r?d:a[d];(!r&&o.includes(f)||r)&&t[f]===void 0&&n[f]===void 0?(c[f]=void 0,u++):(c[f]=B2(t[f],n[f]),c[f]===t[f]&&t[f]!==void 0&&u++)}return i===l&&u===i?t:c}return n}function rf(t,n){if(!n||Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}function Wv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function of(t){if(!Uv(t))return!1;const n=t.constructor;if(n===void 0)return!0;const r=n.prototype;return!(!Uv(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Uv(t){return Object.prototype.toString.call(t)==="[object Object]"}function WA(t){return new Promise(n=>{setTimeout(n,t)})}function af(t,n,r){return typeof r.structuralSharing=="function"?r.structuralSharing(t,n):r.structuralSharing!==!1?B2(t,n):n}function UA(t,n,r=0){const o=[...t,n];return r&&o.length>r?o.slice(1):o}function qA(t,n,r=0){const o=[n,...t];return r&&o.length>r?o.slice(0,-1):o}var Mp=Symbol(),Yr,hr,Do,Q0,YA=(Q0=class extends aa{constructor(){super();Ne(this,Yr);Ne(this,hr);Ne(this,Do);we(this,Do,n=>{if(!ei&&window.addEventListener){const r=()=>n();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){W(this,hr)||this.setEventListener(W(this,Do))}onUnsubscribe(){var n;this.hasListeners()||((n=W(this,hr))==null||n.call(this),we(this,hr,void 0))}setEventListener(n){var r;we(this,Do,n),(r=W(this,hr))==null||r.call(this),we(this,hr,n(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(n){W(this,Yr)!==n&&(we(this,Yr,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(r=>{r(n)})}isFocused(){var n;return typeof W(this,Yr)=="boolean"?W(this,Yr):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},Yr=new WeakMap,hr=new WeakMap,Do=new WeakMap,Q0),Np=new YA,Mo,mr,No,J0,KA=(J0=class extends aa{constructor(){super();Ne(this,Mo,!0);Ne(this,mr);Ne(this,No);we(this,No,n=>{if(!ei&&window.addEventListener){const r=()=>n(!0),o=()=>n(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}}})}onSubscribe(){W(this,mr)||this.setEventListener(W(this,No))}onUnsubscribe(){var n;this.hasListeners()||((n=W(this,mr))==null||n.call(this),we(this,mr,void 0))}setEventListener(n){var r;we(this,No,n),(r=W(this,mr))==null||r.call(this),we(this,mr,n(this.setOnline.bind(this)))}setOnline(n){W(this,Mo)!==n&&(we(this,Mo,n),this.listeners.forEach(o=>{o(n)}))}isOnline(){return W(this,Mo)}},Mo=new WeakMap,mr=new WeakMap,No=new WeakMap,J0),kl=new KA;function GA(t){return Math.min(1e3*2**t,3e4)}function V2(t){return(t??"online")==="online"?kl.isOnline():!0}var W2=class{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function fc(t){return t instanceof W2}function U2(t){let n=!1,r=0,o=!1,i,a,l;const c=new Promise((v,k)=>{a=v,l=k}),u=v=>{var k;o||(m(new W2(v)),(k=t.abort)==null||k.call(t))},d=()=>{n=!0},f=()=>{n=!1},g=()=>Np.isFocused()&&(t.networkMode==="always"||kl.isOnline())&&t.canRun(),b=()=>V2(t.networkMode)&&t.canRun(),h=v=>{var k;o||(o=!0,(k=t.onSuccess)==null||k.call(t,v),i==null||i(),a(v))},m=v=>{var k;o||(o=!0,(k=t.onError)==null||k.call(t,v),i==null||i(),l(v))},y=()=>new Promise(v=>{var k;i=C=>{(o||g())&&v(C)},(k=t.onPause)==null||k.call(t)}).then(()=>{var v;i=void 0,o||(v=t.onContinue)==null||v.call(t)}),E=()=>{if(o)return;let v;try{v=t.fn()}catch(k){v=Promise.reject(k)}Promise.resolve(v).then(h).catch(k=>{var z;if(o)return;const C=t.retry??(ei?0:3),D=t.retryDelay??GA,I=typeof D=="function"?D(r,k):D,T=C===!0||typeof C=="number"&&r<C||typeof C=="function"&&C(r,k);if(n||!T){m(k);return}r++,(z=t.onFail)==null||z.call(t,r,k),WA(I).then(()=>g()?void 0:y()).then(()=>{n?m(k):E()})})};return{promise:c,cancel:u,continue:()=>(i==null||i(),c),cancelRetry:d,continueRetry:f,canStart:b,start:()=>(b()?E():y().then(E),c)}}function QA(){let t=[],n=0,r=b=>{b()},o=b=>{b()},i=b=>setTimeout(b,0);const a=b=>{i=b},l=b=>{let h;n++;try{h=b()}finally{n--,n||d()}return h},c=b=>{n?t.push(b):i(()=>{r(b)})},u=b=>(...h)=>{c(()=>{b(...h)})},d=()=>{const b=t;t=[],b.length&&i(()=>{o(()=>{b.forEach(h=>{r(h)})})})};return{batch:l,batchCalls:u,schedule:c,setNotifyFunction:b=>{r=b},setBatchNotifyFunction:b=>{o=b},setScheduler:a}}var kt=QA(),Kr,Z0,q2=(Z0=class{constructor(){Ne(this,Kr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),nf(this.gcTime)&&we(this,Kr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ei?1/0:5*60*1e3))}clearGcTimeout(){W(this,Kr)&&(clearTimeout(W(this,Kr)),we(this,Kr,void 0))}},Kr=new WeakMap,Z0),Ro,Fo,on,Nt,Hi,Gr,mn,Xn,X0,JA=(X0=class extends q2{constructor(n){super();Ne(this,mn);Ne(this,Ro);Ne(this,Fo);Ne(this,on);Ne(this,Nt);Ne(this,Hi);Ne(this,Gr);we(this,Gr,!1),we(this,Hi,n.defaultOptions),this.setOptions(n.options),this.observers=[],we(this,on,n.cache),this.queryKey=n.queryKey,this.queryHash=n.queryHash,we(this,Ro,n.state||ZA(this.options)),this.state=W(this,Ro),this.scheduleGc()}get meta(){return this.options.meta}setOptions(n){this.options={...W(this,Hi),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&W(this,on).remove(this)}setData(n,r){const o=af(this.state.data,n,this.options);return _e(this,mn,Xn).call(this,{data:o,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),o}setState(n,r){_e(this,mn,Xn).call(this,{type:"setState",state:n,setStateOptions:r})}cancel(n){var o,i;const r=(o=W(this,Nt))==null?void 0:o.promise;return(i=W(this,Nt))==null||i.cancel(n),r?r.then(an).catch(an):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(W(this,Ro))}isActive(){return this.observers.some(n=>n.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(n=0){return this.state.isInvalidated||this.state.data===void 0||!H2(this.state.dataUpdatedAt,n)}onFocus(){var r;const n=this.observers.find(o=>o.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(r=W(this,Nt))==null||r.continue()}onOnline(){var r;const n=this.observers.find(o=>o.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(r=W(this,Nt))==null||r.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),W(this,on).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(r=>r!==n),this.observers.length||(W(this,Nt)&&(W(this,Gr)?W(this,Nt).cancel({revert:!0}):W(this,Nt).cancelRetry()),this.scheduleGc()),W(this,on).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||_e(this,mn,Xn).call(this,{type:"invalidate"})}fetch(n,r){var d,f,g;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(W(this,Nt))return W(this,Nt).continueRetry(),W(this,Nt).promise}if(n&&this.setOptions(n),!this.options.queryFn){const b=this.observers.find(h=>h.options.queryFn);b&&this.setOptions(b.options)}const o=new AbortController,i={queryKey:this.queryKey,meta:this.meta},a=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(we(this,Gr,!0),o.signal)})};a(i);const l=()=>!this.options.queryFn||this.options.queryFn===Mp?Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)):(we(this,Gr,!1),this.options.persister?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i)),c={fetchOptions:r,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:l};a(c),(d=this.options.behavior)==null||d.onFetch(c,this),we(this,Fo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=c.fetchOptions)==null?void 0:f.meta))&&_e(this,mn,Xn).call(this,{type:"fetch",meta:(g=c.fetchOptions)==null?void 0:g.meta});const u=b=>{var h,m,y,E;fc(b)&&b.silent||_e(this,mn,Xn).call(this,{type:"error",error:b}),fc(b)||((m=(h=W(this,on).config).onError)==null||m.call(h,b,this),(E=(y=W(this,on).config).onSettled)==null||E.call(y,this.state.data,b,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return we(this,Nt,U2({fn:c.fetchFn,abort:o.abort.bind(o),onSuccess:b=>{var h,m,y,E;if(b===void 0){u(new Error(`${this.queryHash} data is undefined`));return}this.setData(b),(m=(h=W(this,on).config).onSuccess)==null||m.call(h,b,this),(E=(y=W(this,on).config).onSettled)==null||E.call(y,b,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(b,h)=>{_e(this,mn,Xn).call(this,{type:"failed",failureCount:b,error:h})},onPause:()=>{_e(this,mn,Xn).call(this,{type:"pause"})},onContinue:()=>{_e(this,mn,Xn).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),W(this,Nt).start()}},Ro=new WeakMap,Fo=new WeakMap,on=new WeakMap,Nt=new WeakMap,Hi=new WeakMap,Gr=new WeakMap,mn=new WeakSet,Xn=function(n){const r=o=>{switch(n.type){case"failed":return{...o,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...Y2(o.data,this.options),fetchMeta:n.meta??null};case"success":return{...o,data:n.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=n.error;return fc(i)&&i.revert&&W(this,Fo)?{...W(this,Fo),fetchStatus:"idle"}:{...o,error:i,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...n.state}}};this.state=r(this.state),kt.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),W(this,on).notify({query:this,type:"updated",action:n})})},X0);function Y2(t,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:V2(n.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function ZA(t){const n=typeof t.initialData=="function"?t.initialData():t.initialData,r=n!==void 0,o=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:r?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Pn,ey,XA=(ey=class extends aa{constructor(n={}){super();Ne(this,Pn);this.config=n,we(this,Pn,new Map)}build(n,r,o){const i=r.queryKey,a=r.queryHash??Dp(i,r);let l=this.get(a);return l||(l=new JA({cache:this,queryKey:i,queryHash:a,options:n.defaultQueryOptions(r),state:o,defaultOptions:n.getQueryDefaults(i)}),this.add(l)),l}add(n){W(this,Pn).has(n.queryHash)||(W(this,Pn).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const r=W(this,Pn).get(n.queryHash);r&&(n.destroy(),r===n&&W(this,Pn).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){kt.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return W(this,Pn).get(n)}getAll(){return[...W(this,Pn).values()]}find(n){const r={exact:!0,...n};return this.getAll().find(o=>Bv(r,o))}findAll(n={}){const r=this.getAll();return Object.keys(n).length>0?r.filter(o=>Bv(n,o)):r}notify(n){kt.batch(()=>{this.listeners.forEach(r=>{r(n)})})}onFocus(){kt.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){kt.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Pn=new WeakMap,ey),In,Rt,Qr,Tn,fr,ty,e4=(ty=class extends q2{constructor(n){super();Ne(this,Tn);Ne(this,In);Ne(this,Rt);Ne(this,Qr);this.mutationId=n.mutationId,we(this,Rt,n.mutationCache),we(this,In,[]),this.state=n.state||t4(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){W(this,In).includes(n)||(W(this,In).push(n),this.clearGcTimeout(),W(this,Rt).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){we(this,In,W(this,In).filter(r=>r!==n)),this.scheduleGc(),W(this,Rt).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){W(this,In).length||(this.state.status==="pending"?this.scheduleGc():W(this,Rt).remove(this))}continue(){var n;return((n=W(this,Qr))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var i,a,l,c,u,d,f,g,b,h,m,y,E,v,k,C,D,I,T,z;we(this,Qr,U2({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(A,Q)=>{_e(this,Tn,fr).call(this,{type:"failed",failureCount:A,error:Q})},onPause:()=>{_e(this,Tn,fr).call(this,{type:"pause"})},onContinue:()=>{_e(this,Tn,fr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>W(this,Rt).canRun(this)}));const r=this.state.status==="pending",o=!W(this,Qr).canStart();try{if(!r){_e(this,Tn,fr).call(this,{type:"pending",variables:n,isPaused:o}),await((a=(i=W(this,Rt).config).onMutate)==null?void 0:a.call(i,n,this));const Q=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,n));Q!==this.state.context&&_e(this,Tn,fr).call(this,{type:"pending",context:Q,variables:n,isPaused:o})}const A=await W(this,Qr).start();return await((d=(u=W(this,Rt).config).onSuccess)==null?void 0:d.call(u,A,n,this.state.context,this)),await((g=(f=this.options).onSuccess)==null?void 0:g.call(f,A,n,this.state.context)),await((h=(b=W(this,Rt).config).onSettled)==null?void 0:h.call(b,A,null,this.state.variables,this.state.context,this)),await((y=(m=this.options).onSettled)==null?void 0:y.call(m,A,null,n,this.state.context)),_e(this,Tn,fr).call(this,{type:"success",data:A}),A}catch(A){try{throw await((v=(E=W(this,Rt).config).onError)==null?void 0:v.call(E,A,n,this.state.context,this)),await((C=(k=this.options).onError)==null?void 0:C.call(k,A,n,this.state.context)),await((I=(D=W(this,Rt).config).onSettled)==null?void 0:I.call(D,void 0,A,this.state.variables,this.state.context,this)),await((z=(T=this.options).onSettled)==null?void 0:z.call(T,void 0,A,n,this.state.context)),A}finally{_e(this,Tn,fr).call(this,{type:"error",error:A})}}finally{W(this,Rt).runNext(this)}}},In=new WeakMap,Rt=new WeakMap,Qr=new WeakMap,Tn=new WeakSet,fr=function(n){const r=o=>{switch(n.type){case"failed":return{...o,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...o,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:n.error,failureCount:o.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=r(this.state),kt.batch(()=>{W(this,In).forEach(o=>{o.onMutationUpdate(n)}),W(this,Rt).notify({mutation:this,type:"updated",action:n})})},ty);function t4(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Qt,Bi,ny,n4=(ny=class extends aa{constructor(n={}){super();Ne(this,Qt);Ne(this,Bi);this.config=n,we(this,Qt,new Map),we(this,Bi,Date.now())}build(n,r,o){const i=new e4({mutationCache:this,mutationId:++ca(this,Bi)._,options:n.defaultMutationOptions(r),state:o});return this.add(i),i}add(n){const r=Ia(n),o=W(this,Qt).get(r)??[];o.push(n),W(this,Qt).set(r,o),this.notify({type:"added",mutation:n})}remove(n){var o;const r=Ia(n);if(W(this,Qt).has(r)){const i=(o=W(this,Qt).get(r))==null?void 0:o.filter(a=>a!==n);i&&(i.length===0?W(this,Qt).delete(r):W(this,Qt).set(r,i))}this.notify({type:"removed",mutation:n})}canRun(n){var o;const r=(o=W(this,Qt).get(Ia(n)))==null?void 0:o.find(i=>i.state.status==="pending");return!r||r===n}runNext(n){var o;const r=(o=W(this,Qt).get(Ia(n)))==null?void 0:o.find(i=>i!==n&&i.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}clear(){kt.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}getAll(){return[...W(this,Qt).values()].flat()}find(n){const r={exact:!0,...n};return this.getAll().find(o=>Vv(r,o))}findAll(n={}){return this.getAll().filter(r=>Vv(n,r))}notify(n){kt.batch(()=>{this.listeners.forEach(r=>{r(n)})})}resumePausedMutations(){const n=this.getAll().filter(r=>r.state.isPaused);return kt.batch(()=>Promise.all(n.map(r=>r.continue().catch(an))))}},Qt=new WeakMap,Bi=new WeakMap,ny);function Ia(t){var n;return((n=t.options.scope)==null?void 0:n.id)??String(t.mutationId)}function r4(t){return{onFetch:(n,r)=>{const o=async()=>{var m,y,E,v,k;const i=n.options,a=(E=(y=(m=n.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:E.direction,l=((v=n.state.data)==null?void 0:v.pages)||[],c=((k=n.state.data)==null?void 0:k.pageParams)||[],u={pages:[],pageParams:[]};let d=!1;const f=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(n.signal.aborted?d=!0:n.signal.addEventListener("abort",()=>{d=!0}),n.signal)})},g=n.options.queryFn&&n.options.queryFn!==Mp?n.options.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${n.options.queryHash}'`)),b=async(C,D,I)=>{if(d)return Promise.reject();if(D==null&&C.pages.length)return Promise.resolve(C);const T={queryKey:n.queryKey,pageParam:D,direction:I?"backward":"forward",meta:n.options.meta};f(T);const z=await g(T),{maxPages:A}=n.options,Q=I?qA:UA;return{pages:Q(C.pages,z,A),pageParams:Q(C.pageParams,D,A)}};let h;if(a&&l.length){const C=a==="backward",D=C?o4:qv,I={pages:l,pageParams:c},T=D(i,I);h=await b(I,T,C)}else{h=await b(u,c[0]??i.initialPageParam);const C=t??l.length;for(let D=1;D<C;D++){const I=qv(i,h);h=await b(h,I)}}return h};n.options.persister?n.fetchFn=()=>{var i,a;return(a=(i=n.options).persister)==null?void 0:a.call(i,o,{queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},r)}:n.fetchFn=o}}}function qv(t,{pages:n,pageParams:r}){const o=n.length-1;return t.getNextPageParam(n[o],n,r[o],r)}function o4(t,{pages:n,pageParams:r}){var o;return(o=t.getPreviousPageParam)==null?void 0:o.call(t,n[0],n,r[0],r)}var st,br,vr,Lo,Ao,yr,_o,$o,ry,i4=(ry=class{constructor(t={}){Ne(this,st);Ne(this,br);Ne(this,vr);Ne(this,Lo);Ne(this,Ao);Ne(this,yr);Ne(this,_o);Ne(this,$o);we(this,st,t.queryCache||new XA),we(this,br,t.mutationCache||new n4),we(this,vr,t.defaultOptions||{}),we(this,Lo,new Map),we(this,Ao,new Map),we(this,yr,0)}mount(){ca(this,yr)._++,W(this,yr)===1&&(we(this,_o,Np.subscribe(async t=>{t&&(await this.resumePausedMutations(),W(this,st).onFocus())})),we(this,$o,kl.subscribe(async t=>{t&&(await this.resumePausedMutations(),W(this,st).onOnline())})))}unmount(){var t,n;ca(this,yr)._--,W(this,yr)===0&&((t=W(this,_o))==null||t.call(this),we(this,_o,void 0),(n=W(this,$o))==null||n.call(this),we(this,$o,void 0))}isFetching(t){return W(this,st).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return W(this,br).findAll({...t,status:"pending"}).length}getQueryData(t){var r;const n=this.defaultQueryOptions({queryKey:t});return(r=W(this,st).get(n.queryHash))==null?void 0:r.state.data}ensureQueryData(t){const n=this.getQueryData(t.queryKey);if(n===void 0)return this.fetchQuery(t);{const r=this.defaultQueryOptions(t),o=W(this,st).build(this,r);return t.revalidateIfStale&&o.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(n)}}getQueriesData(t){return W(this,st).findAll(t).map(({queryKey:n,state:r})=>{const o=r.data;return[n,o]})}setQueryData(t,n,r){const o=this.defaultQueryOptions({queryKey:t}),i=W(this,st).get(o.queryHash),a=i==null?void 0:i.state.data,l=VA(n,a);if(l!==void 0)return W(this,st).build(this,o).setData(l,{...r,manual:!0})}setQueriesData(t,n,r){return kt.batch(()=>W(this,st).findAll(t).map(({queryKey:o})=>[o,this.setQueryData(o,n,r)]))}getQueryState(t){var r;const n=this.defaultQueryOptions({queryKey:t});return(r=W(this,st).get(n.queryHash))==null?void 0:r.state}removeQueries(t){const n=W(this,st);kt.batch(()=>{n.findAll(t).forEach(r=>{n.remove(r)})})}resetQueries(t,n){const r=W(this,st),o={type:"active",...t};return kt.batch(()=>(r.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(o,n)))}cancelQueries(t={},n={}){const r={revert:!0,...n},o=kt.batch(()=>W(this,st).findAll(t).map(i=>i.cancel(r)));return Promise.all(o).then(an).catch(an)}invalidateQueries(t={},n={}){return kt.batch(()=>{if(W(this,st).findAll(t).forEach(o=>{o.invalidate()}),t.refetchType==="none")return Promise.resolve();const r={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(r,n)})}refetchQueries(t={},n){const r={...n,cancelRefetch:(n==null?void 0:n.cancelRefetch)??!0},o=kt.batch(()=>W(this,st).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let a=i.fetch(void 0,r);return r.throwOnError||(a=a.catch(an)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(o).then(an)}fetchQuery(t){const n=this.defaultQueryOptions(t);n.retry===void 0&&(n.retry=!1);const r=W(this,st).build(this,n);return r.isStaleByTime(n.staleTime)?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(an).catch(an)}fetchInfiniteQuery(t){return t.behavior=r4(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(an).catch(an)}resumePausedMutations(){return kl.isOnline()?W(this,br).resumePausedMutations():Promise.resolve()}getQueryCache(){return W(this,st)}getMutationCache(){return W(this,br)}getDefaultOptions(){return W(this,vr)}setDefaultOptions(t){we(this,vr,t)}setQueryDefaults(t,n){W(this,Lo).set(_i(t),{queryKey:t,defaultOptions:n})}getQueryDefaults(t){const n=[...W(this,Lo).values()];let r={};return n.forEach(o=>{$i(t,o.queryKey)&&(r={...r,...o.defaultOptions})}),r}setMutationDefaults(t,n){W(this,Ao).set(_i(t),{mutationKey:t,defaultOptions:n})}getMutationDefaults(t){const n=[...W(this,Ao).values()];let r={};return n.forEach(o=>{$i(t,o.mutationKey)&&(r={...r,...o.defaultOptions})}),r}defaultQueryOptions(t){if(t._defaulted)return t;const n={...W(this,vr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return n.queryHash||(n.queryHash=Dp(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.enabled!==!0&&n.queryFn===Mp&&(n.enabled=!1),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...W(this,vr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){W(this,st).clear(),W(this,br).clear()}},st=new WeakMap,br=new WeakMap,vr=new WeakMap,Lo=new WeakMap,Ao=new WeakMap,yr=new WeakMap,_o=new WeakMap,$o=new WeakMap,ry),_t,et,Vi,Ft,Jr,zo,Dn,Wi,Ho,Bo,Zr,Xr,wr,Vo,Ue,yi,lf,sf,cf,uf,df,ff,pf,K2,oy,a4=(oy=class extends aa{constructor(n,r){super();Ne(this,Ue);Ne(this,_t);Ne(this,et);Ne(this,Vi);Ne(this,Ft);Ne(this,Jr);Ne(this,zo);Ne(this,Dn);Ne(this,Wi);Ne(this,Ho);Ne(this,Bo);Ne(this,Zr);Ne(this,Xr);Ne(this,wr);Ne(this,Vo,new Set);this.options=r,we(this,_t,n),we(this,Dn,null),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(W(this,et).addObserver(this),Yv(W(this,et),this.options)?_e(this,Ue,yi).call(this):this.updateResult(),_e(this,Ue,uf).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return gf(W(this,et),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return gf(W(this,et),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,_e(this,Ue,df).call(this),_e(this,Ue,ff).call(this),W(this,et).removeObserver(this)}setOptions(n,r){const o=this.options,i=W(this,et);if(this.options=W(this,_t).defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");_e(this,Ue,pf).call(this),W(this,et).setOptions(this.options),o._defaulted&&!rf(this.options,o)&&W(this,_t).getQueryCache().notify({type:"observerOptionsUpdated",query:W(this,et),observer:this});const a=this.hasListeners();a&&Kv(W(this,et),i,this.options,o)&&_e(this,Ue,yi).call(this),this.updateResult(r),a&&(W(this,et)!==i||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&_e(this,Ue,lf).call(this);const l=_e(this,Ue,sf).call(this);a&&(W(this,et)!==i||this.options.enabled!==o.enabled||l!==W(this,wr))&&_e(this,Ue,cf).call(this,l)}getOptimisticResult(n){const r=W(this,_t).getQueryCache().build(W(this,_t),n),o=this.createResult(r,n);return s4(this,o)&&(we(this,Ft,o),we(this,zo,this.options),we(this,Jr,W(this,et).state)),o}getCurrentResult(){return W(this,Ft)}trackResult(n,r){const o={};return Object.keys(n).forEach(i=>{Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),r==null||r(i),n[i])})}),o}trackProp(n){W(this,Vo).add(n)}getCurrentQuery(){return W(this,et)}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const r=W(this,_t).defaultQueryOptions(n),o=W(this,_t).getQueryCache().build(W(this,_t),r);return o.isFetchingOptimistic=!0,o.fetch().then(()=>this.createResult(o,r))}fetch(n){return _e(this,Ue,yi).call(this,{...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),W(this,Ft)))}createResult(n,r){var z;const o=W(this,et),i=this.options,a=W(this,Ft),l=W(this,Jr),c=W(this,zo),d=n!==o?n.state:W(this,Vi),{state:f}=n;let g={...f},b=!1,h;if(r._optimisticResults){const A=this.hasListeners(),Q=!A&&Yv(n,r),B=A&&Kv(n,o,r,i);(Q||B)&&(g={...g,...Y2(f.data,n.options)}),r._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:m,errorUpdatedAt:y,status:E}=g;if(r.select&&g.data!==void 0)if(a&&g.data===(l==null?void 0:l.data)&&r.select===W(this,Wi))h=W(this,Ho);else try{we(this,Wi,r.select),h=r.select(g.data),h=af(a==null?void 0:a.data,h,r),we(this,Ho,h),we(this,Dn,null)}catch(A){we(this,Dn,A)}else h=g.data;if(r.placeholderData!==void 0&&h===void 0&&E==="pending"){let A;if(a!=null&&a.isPlaceholderData&&r.placeholderData===(c==null?void 0:c.placeholderData))A=a.data;else if(A=typeof r.placeholderData=="function"?r.placeholderData((z=W(this,Bo))==null?void 0:z.state.data,W(this,Bo)):r.placeholderData,r.select&&A!==void 0)try{A=r.select(A),we(this,Dn,null)}catch(Q){we(this,Dn,Q)}A!==void 0&&(E="success",h=af(a==null?void 0:a.data,A,r),b=!0)}W(this,Dn)&&(m=W(this,Dn),h=W(this,Ho),y=Date.now(),E="error");const v=g.fetchStatus==="fetching",k=E==="pending",C=E==="error",D=k&&v,I=h!==void 0;return{status:E,fetchStatus:g.fetchStatus,isPending:k,isSuccess:E==="success",isError:C,isInitialLoading:D,isLoading:D,data:h,dataUpdatedAt:g.dataUpdatedAt,error:m,errorUpdatedAt:y,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>d.dataUpdateCount||g.errorUpdateCount>d.errorUpdateCount,isFetching:v,isRefetching:v&&!k,isLoadingError:C&&!I,isPaused:g.fetchStatus==="paused",isPlaceholderData:b,isRefetchError:C&&I,isStale:Rp(n,r),refetch:this.refetch}}updateResult(n){const r=W(this,Ft),o=this.createResult(W(this,et),this.options);if(we(this,Jr,W(this,et).state),we(this,zo,this.options),W(this,Jr).data!==void 0&&we(this,Bo,W(this,et)),rf(o,r))return;we(this,Ft,o);const i={},a=()=>{if(!r)return!0;const{notifyOnChangeProps:l}=this.options,c=typeof l=="function"?l():l;if(c==="all"||!c&&!W(this,Vo).size)return!0;const u=new Set(c??W(this,Vo));return this.options.throwOnError&&u.add("error"),Object.keys(W(this,Ft)).some(d=>{const f=d;return W(this,Ft)[f]!==r[f]&&u.has(f)})};(n==null?void 0:n.listeners)!==!1&&a()&&(i.listeners=!0),_e(this,Ue,K2).call(this,{...i,...n})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&_e(this,Ue,uf).call(this)}},_t=new WeakMap,et=new WeakMap,Vi=new WeakMap,Ft=new WeakMap,Jr=new WeakMap,zo=new WeakMap,Dn=new WeakMap,Wi=new WeakMap,Ho=new WeakMap,Bo=new WeakMap,Zr=new WeakMap,Xr=new WeakMap,wr=new WeakMap,Vo=new WeakMap,Ue=new WeakSet,yi=function(n){_e(this,Ue,pf).call(this);let r=W(this,et).fetch(this.options,n);return n!=null&&n.throwOnError||(r=r.catch(an)),r},lf=function(){if(_e(this,Ue,df).call(this),ei||W(this,Ft).isStale||!nf(this.options.staleTime))return;const r=H2(W(this,Ft).dataUpdatedAt,this.options.staleTime)+1;we(this,Zr,setTimeout(()=>{W(this,Ft).isStale||this.updateResult()},r))},sf=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(W(this,et)):this.options.refetchInterval)??!1},cf=function(n){_e(this,Ue,ff).call(this),we(this,wr,n),!(ei||this.options.enabled===!1||!nf(W(this,wr))||W(this,wr)===0)&&we(this,Xr,setInterval(()=>{(this.options.refetchIntervalInBackground||Np.isFocused())&&_e(this,Ue,yi).call(this)},W(this,wr)))},uf=function(){_e(this,Ue,lf).call(this),_e(this,Ue,cf).call(this,_e(this,Ue,sf).call(this))},df=function(){W(this,Zr)&&(clearTimeout(W(this,Zr)),we(this,Zr,void 0))},ff=function(){W(this,Xr)&&(clearInterval(W(this,Xr)),we(this,Xr,void 0))},pf=function(){const n=W(this,_t).getQueryCache().build(W(this,_t),this.options);if(n===W(this,et))return;const r=W(this,et);we(this,et,n),we(this,Vi,n.state),this.hasListeners()&&(r==null||r.removeObserver(this),n.addObserver(this))},K2=function(n){kt.batch(()=>{n.listeners&&this.listeners.forEach(r=>{r(W(this,Ft))}),W(this,_t).getQueryCache().notify({query:W(this,et),type:"observerResultsUpdated"})})},oy);function l4(t,n){return n.enabled!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&n.retryOnMount===!1)}function Yv(t,n){return l4(t,n)||t.state.data!==void 0&&gf(t,n,n.refetchOnMount)}function gf(t,n,r){if(n.enabled!==!1){const o=typeof r=="function"?r(t):r;return o==="always"||o!==!1&&Rp(t,n)}return!1}function Kv(t,n,r,o){return(t!==n||o.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&Rp(t,r)}function Rp(t,n){return n.enabled!==!1&&t.isStaleByTime(n.staleTime)}function s4(t,n){return!rf(t.getCurrentResult(),n)}var G2=p.createContext(void 0),c4=t=>{const n=p.useContext(G2);if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},u4=({client:t,children:n})=>(p.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),G.jsx(G2.Provider,{value:t,children:n})),Q2=p.createContext(!1),d4=()=>p.useContext(Q2);Q2.Provider;function f4(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var p4=p.createContext(f4()),g4=()=>p.useContext(p4);function h4(t,n){return typeof t=="function"?t(...n):!!t}var m4=(t,n)=>{(t.suspense||t.throwOnError)&&(n.isReset()||(t.retryOnMount=!1))},b4=t=>{p.useEffect(()=>{t.clearReset()},[t])},v4=({result:t,errorResetBoundary:n,throwOnError:r,query:o})=>t.isError&&!n.isReset()&&!t.isFetching&&o&&h4(r,[t.error,o]),y4=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},w4=(t,n)=>(t==null?void 0:t.suspense)&&n.isPending,x4=(t,n,r)=>n.fetchOptimistic(t).catch(()=>{r.clearReset()});function j4(t,n,r){const o=c4(),i=d4(),a=g4(),l=o.defaultQueryOptions(t);l._optimisticResults=i?"isRestoring":"optimistic",y4(l),m4(l,a),b4(a);const[c]=p.useState(()=>new n(o,l)),u=c.getOptimisticResult(l);if(p.useSyncExternalStore(p.useCallback(d=>{const f=i?()=>{}:c.subscribe(kt.batchCalls(d));return c.updateResult(),f},[c,i]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),p.useEffect(()=>{c.setOptions(l,{listeners:!1})},[l,c]),w4(l,u))throw x4(l,c,a);if(v4({result:u,errorResetBoundary:a,throwOnError:l.throwOnError,query:o.getQueryCache().get(l.queryHash)}))throw u.error;return l.notifyOnChangeProps?u:c.trackResult(u)}function E4(t,n){return j4(t,a4)}const k4=({meta:t})=>fetch(`${t.endpoint}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(n=>{if(n.statusCode>=400)throw new Error(n.statusText);return n.json()}),Gv="search-node-highlight",O4=3;function hf(t,n=document,r=[]){if(n.nodeType===Node.TEXT_NODE&&["SCRIPT","TITLE","STYLE"].indexOf(n.parentNode.tagName)===-1&&n.textContent.toLowerCase().includes(t.toLowerCase()))r.push(n);else if(n.childNodes&&n.childNodes.length>0)for(let o=0;o<n.childNodes.length;o++)hf(t,n.childNodes[o],r);return n.shadowRoot&&hf(t,n.shadowRoot,r),r}const S4=t=>{const n=document.querySelectorAll("*"),r=[document.body];return n.forEach(o=>{o.shadowRoot&&r.push(o.shadowRoot)}),r.map(o=>{const i=new MutationObserver(t);return i.observe(o,{attributes:!0,childList:!0,subtree:!0}),i})},C4=()=>{const t=Tp(),n=O.useRef([]),[r,o]=O.useState(null);return O.useEffect(()=>{for(;n.current.length>0;){const{org:a,search:l}=n.current.pop();l.replaceWith(a)}if(!t||t.length<O4)return;hf(t).forEach(a=>{const l=a.textContent.toLowerCase().indexOf(t.toLowerCase()),c=document.createElement("span"),u=document.createElement("span");c.className=Gv,u.className="bg-theme-warning/40 text-theme-high rounded-sm",u.append(a.textContent.slice(l,l+t.length)),c.append(a.textContent.slice(0,l)),c.append(u),c.append(a.textContent.slice(l+t.length)),n.current.push({org:a,search:c}),a.replaceWith(c)})},[r,t]),O.useEffect(()=>{const i=S4(a=>{for(const l of a)!l.type==="childList"||Array.from(l.addedNodes).concat(Array.from(l.removedNodes)).some(d=>{var f;return(f=d.classList)==null?void 0:f.contains(Gv)})||o(Date.now())});return()=>{i.forEach(a=>a.disconnect())}},[o]),null},mf=({name:t,value:n,nameLabel:r,valueLabel:o})=>{const{add:i}=ls();return G.jsx("div",{onClick:a=>a.stopPropagation(),children:G.jsx(Ow,{pillKey:t,pillKeyLabel:r||t,pillValue:n,pillValueLabel:o||n,onClick:()=>{const a=t==="service"?`check:${t}`:t;i(a,n)}})})},P4=({constraints:t,slice:n})=>{const r=O.useMemo(()=>{const o={};return t.forEach(i=>i.violation_groups.forEach(a=>{var c,u;const l=(u=(c=a.pattern)==null?void 0:c.object_identity)==null?void 0:u.service;l&&(o[l]=(o[l]||0)+1)})),o},[t]);return G.jsxs(G.Fragment,{children:[Object.keys(r).map((o,i)=>(!n||i<n)&&G.jsx(mf,{name:"service",value:o,valueLabel:`${o} | ${r[o]}`},i)),Object.keys(r).length>n&&"..."]})},I4={debug:{borderCss:"border-theme-default",icon:"errorOutline",iconCss:"text-theme-default",tooltip:"Debug: this violation is currently in the planning phase."},info:{borderCss:"border-theme-info",icon:"info",iconCss:"text-theme-info",tooltip:"Info: this violation contains details with low severity."},warning:{borderCss:"border-theme-warning",icon:"warning",iconCss:"text-theme-warning",tooltip:"Warning: this violation contains details with medium severity."},error:{borderCss:"border-theme-error",icon:"danger",iconCss:"text-theme-danger",tooltip:"Error: this violation contains details with high severity."}},T4=({severityData:t,title:n})=>G.jsxs($D,{triggerEvent:"hover",children:[G.jsx(UD,{children:G.jsx(kr,{icon:t.icon,title:n,color:t.iconCss})}),G.jsx(WD,{children:t.tooltip})]}),J2=({severities:t,border:n,className:r=""})=>{const o=O.useMemo(()=>!t||t.length===0?null:I4[t[0]],[t]);return o?G.jsx("div",{className:`${n?"border-l-2 h-full "+o.borderCss:""} ${r}`,children:G.jsx(T4,{severityData:o,title:t[0]})}):null},D4=({item:t})=>{var o,i;const n=Pp(),{setDetailsViolationGroupKind:r}=as();return G.jsxs(qr,{className:`cursor-pointer ${n===(t==null?void 0:t.kind)?"active":""}`,onClick:()=>n===t.kind?r(null):r(t==null?void 0:t.kind),children:[G.jsx(Jt,{className:"pl-0",children:G.jsx(J2,{severities:t==null?void 0:t.severities,className:"pl-5",border:!0})}),G.jsx(Jt,{className:"font-bold",children:t==null?void 0:t.kind}),G.jsx(Jt,{children:G.jsx(c1,{text:`${t==null?void 0:t.violationCount}`,className:""})}),G.jsx(Jt,{children:G.jsx(Ln,{gap:"2",wrap:!0,children:G.jsx(P4,{constraints:t==null?void 0:t.constraints})})}),G.jsxs(Jt,{children:[G.jsx("div",{children:"Template:"}),G.jsx("div",{children:(o=t==null?void 0:t.constraints)==null?void 0:o.map((a,l)=>{var c;return((c=a.metadata)==null?void 0:c.template_source)&&G.jsx("div",{children:G.jsx("a",{href:a.metadata.template_source,target:"_blank",className:"hover:underline",rel:"noreferrer",children:G.jsxs(Ln,{gap:"1.5",alignment:"center",children:[G.jsx(kr,{icon:"openInNew",size:"16"}),a.name]})})},l)})}),G.jsx("div",{children:"Constraint:"}),G.jsx("div",{children:(i=t==null?void 0:t.constraints)==null?void 0:i.map((a,l)=>{var c;return((c=a.metadata)==null?void 0:c.constraint_source)&&G.jsx("div",{children:G.jsx("a",{href:a.metadata.constraint_source,target:"_blank",className:"hover:underline",rel:"noreferrer",children:G.jsxs(Ln,{gap:"1.5",alignment:"center",children:[G.jsx(kr,{icon:"openInNew",size:"16"}),a.name]})})},l)})})]})]})},M4=()=>{const t=HA();return G.jsx(G.Fragment,{children:(t==null?void 0:t.length)===0?G.jsx("div",{className:"p-4",children:"No violations found"}):G.jsx(G.Fragment,{children:G.jsxs(sw,{columns:5,cellVerticalAlignment:"top",className:"violations-list",children:[G.jsxs(qr,{children:[G.jsx(mo,{children:G.jsx(kr,{icon:"monitorHeart"})}),G.jsx(mo,{children:"Check Name"}),G.jsx(mo,{children:"Total"}),G.jsx(mo,{children:"Violations per Service"}),G.jsx(mo,{children:"Template/Constraint"})]}),t.map((n,r)=>G.jsx(D4,{item:n},r))]})})})},N4=()=>{var m;const[t,n]=p.useState(""),[r,o]=p.useState(""),[i,a]=p.useState(Date.now()),l=zA(),{add:c,removeAll:u,setSearchTerm:d}=ls(),f=Tp(),g=Ip()||[],b=y=>{o(null),y!==null&&c(t,y),a(Date.now())},h=y=>{const E=setTimeout(()=>{d(y.target.value)},500);return()=>clearTimeout(E)};return G.jsxs(Ln,{alignment:"center",gap:"8",distribution:"between",children:[G.jsxs(Ln,{gap:"2",children:[G.jsxs(dw,{children:[G.jsx($u,{name:"category",className:"filter-label-select w-52 mb-0",label:"Select category",value:t,onChange:n,children:l.map((y,E)=>G.jsx(zu,{value:y.key,label:y.label},E))}),G.jsx($u,{name:"value",value:r,onChange:y=>b(y),disabled:!t,className:"filter-value-select w-80 bg-theme-background-lvl-0",children:(m=l.find(y=>y.key===t))==null?void 0:m.values.map((y,E)=>G.jsx(zu,{value:y},E))},i),G.jsx(Su,{onClick:()=>t&&r&&c(t,r),icon:"filterAlt",className:"py-[0.3rem]"})]}),g.length>0&&G.jsx(Su,{label:"Clear all",onClick:u,variant:"subdued"})]}),G.jsx(f1,{className:"w-96",value:f||"",onChange:y=>h(y),onClear:()=>d(null)})]})},R4=()=>{const t=Ip(),{remove:n}=ls();return t?G.jsx(Ln,{wrap:!0,gap:"2",children:t.map(({key:r,value:o,label:i},a)=>{var l;return G.jsx(Ow,{pillKey:(l=r==null?void 0:r.split(":"))==null?void 0:l[1],pillValue:o,pillKeyLabel:Xo(i),closeable:!0,onClose:()=>n(r,o)},a)})}):null},F4=`
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`,Z2=()=>G.jsxs(Ln,{direction:"vertical",gap:"4",className:`filters ${F4}`,children:[G.jsx(N4,{}),G.jsx(R4,{})]});function Qv(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,o=Array(n);r<n;r++)o[r]=t[r];return o}function L4(t){if(Array.isArray(t))return t}function A4(t,n,r){return(n=V4(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function _4(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,i,a,l,c=[],u=!0,d=!1;try{if(a=(r=r.call(t)).next,n===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(o=a.call(r)).done)&&(c.push(o.value),c.length!==n);u=!0);}catch(f){d=!0,i=f}finally{try{if(!u&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(d)throw i}}return c}}function $4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jv(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function pc(t){for(var n,r=1;r<arguments.length;r++)n=arguments[r]==null?{}:arguments[r],r%2?Jv(Object(n),!0).forEach(function(o){A4(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jv(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))});return t}function z4(t,n){if(t==null)return{};var r,o,i=H4(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function H4(t,n){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(n.includes(o))continue;r[o]=t[o]}return r}function Ol(t,n){return L4(t)||_4(t,n)||W4(t,n)||$4()}function B4(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function V4(t){var n=B4(t,"string");return typeof n=="symbol"?n:n+""}function bf(t){"@babel/helpers - typeof";return bf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bf(t)}function W4(t,n){if(t){if(typeof t=="string")return Qv(t,n);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Qv(t,n):void 0}}var U4=function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},r=p.useState(20),o=Ol(r,2),i=o[0],a=o[1],l=p.useState(!1),c=Ol(l,2),u=c[0],d=c[1],f=p.useRef(null),g=p.useRef();p.useEffect(function(){return function(){return clearTimeout(f.current)}},[]);var b=p.useMemo(function(){if(t)return t.slice(0,i)},[t,i]),h=p.useCallback(function(y){u||(g.current&&g.current.disconnect(),g.current=new IntersectionObserver(function(E){E[0].isIntersecting&&i<=t.length&&(clearTimeout(f.current),d(!0),f.current=setTimeout(function(){d(!1),a(function(v){return v+10})},(n==null?void 0:n.delay)||500))}),y&&g.current.observe(y))},[t,u]),m=p.useMemo(function(){return{map:function(y){var E=b.map(y);return O.createElement(O.Fragment,null,E,u&&(n==null?void 0:n.showLoading)!==!1&&O.createElement(O.Fragment,null,n!=null&&n.loadingObject?n.loadingObject:O.createElement("span",{id:"endlessScrollListLoading"},"Loading...")),(n==null?void 0:n.showRef)!==!1&&O.createElement(O.Fragment,null,n!=null&&n.refFunction?n.refFunction(h):O.createElement("span",{id:"endlessScrollListLastItemRef",ref:h})))}}},[b,h]);return{scrollListItems:b,iterator:m}},q4=["mock"],Lr=function(t){return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",Accept:"application/json"}})},Sn=function(t){return new Response(t,{status:404,headers:{"Content-Type":"application/json",Accept:"application/json"}})},lt=null,Ba=null,vf=null,bo=!1,Y4=function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};if(n!=null&&n.debug&&(bo=!0),t===null)return bo&&console.log("fetchProxyInitDB:: Reset localDB"),void(lt=null);if(lt&&console.warn('fetchProxyInitDB:: localDB already initialized. This typically occurs when the component or hook, responsible for local database initialization, is accidentally re-rendered. If you intend to reset the local database, please ensure to set localDB to null first by invoking fetchProxyInitDB(null) before providing new data."'),bf(t)!=="object")throw new Error("It seems that jsonData is not a valid JSON object.");if(n!=null&&n.rewriteRoutes){bo&&console.log("fetchProxyInitDB:: rewriteRoutes::",n==null?void 0:n.rewriteRoutes);var r=Object.fromEntries(Object.entries(n==null?void 0:n.rewriteRoutes).filter(function(a){var l=Ol(a,1),c=l[0];try{return new RegExp(c),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(c," for routes is not a valid regex expresion.")),!1}}));Ba=r}if(n!=null&&n.rewriteResponses){var o=["GET","POST","PUT","DELETE","HEAD","OPTIONS"],i={};bo&&console.log("fetchProxyInitDB:: rewriteResponses::",n==null?void 0:n.rewriteResponses),Object.keys(n==null?void 0:n.rewriteResponses).forEach(function(a){if(!o.includes(a))return void console.warn("It seems that the given rewrite rule ".concat(a," for responses is not a valid method."));var l=n==null?void 0:n.rewriteResponses[a],c=Object.fromEntries(Object.entries(l).filter(function(u){var d=Ol(u,1),f=d[0];try{return new RegExp(f),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(f," for responses is not a valid regex expresion.")),!1}}));i[a]=c}),vf=i}if(Object.keys(t).some(function(a){return!Array.isArray(t[a])}))throw new Error("It seems that jsonData is not a collection of key value pairs with values as arrays.");bo&&console.log("fetchProxyInitDB:: jsonData::",t),lt=t},K4=function(t,n){var r,o=n.mock,i=z4(n,q4);if(o!==!0&&o!=="true")return console.log("fetchProxy:: real fetch for::",t),fetch(t,i);if(!lt)throw new Error(`localDB not initialized.
    Please use fetchProxyInitDB(jsonData) to initialize the localDB.`);var a=null;try{a=new URL(t)}catch{throw new Error("Invalid URL: ".concat(t))}var l=n==null?void 0:n.method;l||(l="GET");var c=a.pathname,u=null;if((r=vf)!==null&&r!==void 0&&r[l]){var d=vf[l];for(var f in d){var g=new RegExp(f);if(g.test(c)){u=Lr(d[f]);break}}}if(Ba)for(var b in Ba){var h=new RegExp(b);if(h.test(c)){c=c.replace(h,Ba[b]);break}}var m=c.split("/")[1],y=c.split("/")[2];bo&&console.log("fetchProxy:: mock fetch with method: ",l,", path: ",c,", object: ",m,", id: ",y,", customResponse: ",u);var E=n==null?void 0:n.body;return l==="GET"?new Promise(function(v){if(m){var k;if((k=lt)!==null&&k!==void 0&&k[m]){var C;if(y){var D,I=(D=lt)===null||D===void 0?void 0:D[m].findIndex(function(z){return z.id==y});if(0<=I){var T;return v(u||Lr((T=lt)===null||T===void 0||(T=T[m])===null||T===void 0?void 0:T[I]))}return v(Sn("No id ".concat(y," for object ").concat(m," found")))}return v(u||Lr((C=lt)===null||C===void 0?void 0:C[m]))}return v(Sn("No object ".concat(m," found")))}v(Lr(u||lt))}):l==="POST"?new Promise(function(v){var k,C,D;m&&E||v(Sn("No object '".concat(m,"' or body '").concat(E,"' given"))),(k=lt)!==null&&k!==void 0&&k[m]||v(Sn("No object '".concat(m,"' found")));var I=JSON.parse(E);if(I.id=1,0<((C=lt)===null||C===void 0||(C=C[m])===null||C===void 0?void 0:C.length)){var T,z=(T=lt)===null||T===void 0?void 0:T[m].reduce(function(A,Q){return Q.id>A.id?Q:A});I.id=((z==null?void 0:z.id)||0)+1}(D=lt)===null||D===void 0||D[m].push(I),v(u||Lr(I))}):l==="PUT"?new Promise(function(v){var k,C;m&&y||v(Sn("No object '".concat(m,"' or id '").concat(y,"' given"))),(k=lt)!==null&&k!==void 0&&k[m]||v(Sn("No object '".concat(m,"' found")));var D=(C=lt)===null||C===void 0?void 0:C[m].findIndex(function(I){return I.id==y});return 0<=D?(lt[m][D]=pc(pc(pc({},lt[m][D]),JSON.parse(E)),{},{id:lt[m][D].id}),void v(u||Lr(lt[m][D]))):v(Sn("No item with id '".concat(y,"' found")))}):l==="DELETE"?new Promise(function(v){var k,C;m&&y||v(Sn("No object '".concat(m,"' or id '").concat(y,"' given"))),(k=lt)!==null&&k!==void 0&&k[m]||v(Sn("No object '".concat(m,"' found")));var D=(C=lt)===null||C===void 0?void 0:C[m].findIndex(function(I){return I.id==y});return 0<=D?(lt[m].splice(D,1),void v(u||Lr("Object deleted"))):v(Sn("No item with id '".concat(y,"' found")))}):void 0};function G4(t,n){const r={};return(t[t.length-1]===""?[...t,""]:t).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const Q4=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,J4=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Z4={};function Zv(t,n){return(Z4.jsx?J4:Q4).test(t)}const X4=/[ \t\n\f\r]/g;function e_(t){return typeof t=="object"?t.type==="text"?Xv(t.value):!1:Xv(t)}function Xv(t){return t.replace(X4,"")===""}class la{constructor(n,r,o){this.property=n,this.normal=r,o&&(this.space=o)}}la.prototype.property={};la.prototype.normal={};la.prototype.space=null;function X2(t,n){const r={},o={};let i=-1;for(;++i<t.length;)Object.assign(r,t[i].property),Object.assign(o,t[i].normal);return new la(r,o,n)}function yf(t){return t.toLowerCase()}class fn{constructor(n,r){this.property=n,this.attribute=r}}fn.prototype.space=null;fn.prototype.boolean=!1;fn.prototype.booleanish=!1;fn.prototype.overloadedBoolean=!1;fn.prototype.number=!1;fn.prototype.commaSeparated=!1;fn.prototype.spaceSeparated=!1;fn.prototype.commaOrSpaceSeparated=!1;fn.prototype.mustUseProperty=!1;fn.prototype.defined=!1;let t_=0;const Re=co(),gt=co(),ej=co(),le=co(),tt=co(),Io=co(),Gt=co();function co(){return 2**++t_}const wf=Object.freeze(Object.defineProperty({__proto__:null,boolean:Re,booleanish:gt,commaOrSpaceSeparated:Gt,commaSeparated:Io,number:le,overloadedBoolean:ej,spaceSeparated:tt},Symbol.toStringTag,{value:"Module"})),gc=Object.keys(wf);class Fp extends fn{constructor(n,r,o,i){let a=-1;if(super(n,r),e0(this,"space",i),typeof o=="number")for(;++a<gc.length;){const l=gc[a];e0(this,gc[a],(o&wf[l])===wf[l])}}}Fp.prototype.defined=!0;function e0(t,n,r){r&&(t[n]=r)}const n_={}.hasOwnProperty;function ri(t){const n={},r={};let o;for(o in t.properties)if(n_.call(t.properties,o)){const i=t.properties[o],a=new Fp(o,t.transform(t.attributes||{},o),i,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(a.mustUseProperty=!0),n[o]=a,r[yf(o)]=o,r[yf(a.attribute)]=o}return new la(n,r,t.space)}const tj=ri({space:"xlink",transform(t,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),nj=ri({space:"xml",transform(t,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function rj(t,n){return n in t?t[n]:n}function oj(t,n){return rj(t,n.toLowerCase())}const ij=ri({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:oj,properties:{xmlns:null,xmlnsXLink:null}}),aj=ri({transform(t,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:gt,ariaAutoComplete:null,ariaBusy:gt,ariaChecked:gt,ariaColCount:le,ariaColIndex:le,ariaColSpan:le,ariaControls:tt,ariaCurrent:null,ariaDescribedBy:tt,ariaDetails:null,ariaDisabled:gt,ariaDropEffect:tt,ariaErrorMessage:null,ariaExpanded:gt,ariaFlowTo:tt,ariaGrabbed:gt,ariaHasPopup:null,ariaHidden:gt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:tt,ariaLevel:le,ariaLive:null,ariaModal:gt,ariaMultiLine:gt,ariaMultiSelectable:gt,ariaOrientation:null,ariaOwns:tt,ariaPlaceholder:null,ariaPosInSet:le,ariaPressed:gt,ariaReadOnly:gt,ariaRelevant:null,ariaRequired:gt,ariaRoleDescription:tt,ariaRowCount:le,ariaRowIndex:le,ariaRowSpan:le,ariaSelected:gt,ariaSetSize:le,ariaSort:null,ariaValueMax:le,ariaValueMin:le,ariaValueNow:le,ariaValueText:null,role:null}}),r_=ri({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:oj,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Io,acceptCharset:tt,accessKey:tt,action:null,allow:null,allowFullScreen:Re,allowPaymentRequest:Re,allowUserMedia:Re,alt:null,as:null,async:Re,autoCapitalize:null,autoComplete:tt,autoFocus:Re,autoPlay:Re,blocking:tt,capture:null,charSet:null,checked:Re,cite:null,className:tt,cols:le,colSpan:null,content:null,contentEditable:gt,controls:Re,controlsList:tt,coords:le|Io,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Re,defer:Re,dir:null,dirName:null,disabled:Re,download:ej,draggable:gt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Re,formTarget:null,headers:tt,height:le,hidden:Re,high:le,href:null,hrefLang:null,htmlFor:tt,httpEquiv:tt,id:null,imageSizes:null,imageSrcSet:null,inert:Re,inputMode:null,integrity:null,is:null,isMap:Re,itemId:null,itemProp:tt,itemRef:tt,itemScope:Re,itemType:tt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Re,low:le,manifest:null,max:null,maxLength:le,media:null,method:null,min:null,minLength:le,multiple:Re,muted:Re,name:null,nonce:null,noModule:Re,noValidate:Re,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Re,optimum:le,pattern:null,ping:tt,placeholder:null,playsInline:Re,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Re,referrerPolicy:null,rel:tt,required:Re,reversed:Re,rows:le,rowSpan:le,sandbox:tt,scope:null,scoped:Re,seamless:Re,selected:Re,shadowRootClonable:Re,shadowRootDelegatesFocus:Re,shadowRootMode:null,shape:null,size:le,sizes:null,slot:null,span:le,spellCheck:gt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:le,step:null,style:null,tabIndex:le,target:null,title:null,translate:null,type:null,typeMustMatch:Re,useMap:null,value:gt,width:le,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:tt,axis:null,background:null,bgColor:null,border:le,borderColor:null,bottomMargin:le,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Re,declare:Re,event:null,face:null,frame:null,frameBorder:null,hSpace:le,leftMargin:le,link:null,longDesc:null,lowSrc:null,marginHeight:le,marginWidth:le,noResize:Re,noHref:Re,noShade:Re,noWrap:Re,object:null,profile:null,prompt:null,rev:null,rightMargin:le,rules:null,scheme:null,scrolling:gt,standby:null,summary:null,text:null,topMargin:le,valueType:null,version:null,vAlign:null,vLink:null,vSpace:le,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Re,disableRemotePlayback:Re,prefix:null,property:null,results:le,security:null,unselectable:null}}),o_=ri({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:rj,properties:{about:Gt,accentHeight:le,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:le,amplitude:le,arabicForm:null,ascent:le,attributeName:null,attributeType:null,azimuth:le,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:le,by:null,calcMode:null,capHeight:le,className:tt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:le,diffuseConstant:le,direction:null,display:null,dur:null,divisor:le,dominantBaseline:null,download:Re,dx:null,dy:null,edgeMode:null,editable:null,elevation:le,enableBackground:null,end:null,event:null,exponent:le,externalResourcesRequired:null,fill:null,fillOpacity:le,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Io,g2:Io,glyphName:Io,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:le,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:le,horizOriginX:le,horizOriginY:le,id:null,ideographic:le,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:le,k:le,k1:le,k2:le,k3:le,k4:le,kernelMatrix:Gt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:le,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:le,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:le,overlineThickness:le,paintOrder:null,panose1:null,path:null,pathLength:le,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:tt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:le,pointsAtY:le,pointsAtZ:le,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Gt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Gt,rev:Gt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Gt,requiredFeatures:Gt,requiredFonts:Gt,requiredFormats:Gt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:le,specularExponent:le,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:le,strikethroughThickness:le,string:null,stroke:null,strokeDashArray:Gt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:le,strokeOpacity:le,strokeWidth:null,style:null,surfaceScale:le,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Gt,tabIndex:le,tableValues:null,target:null,targetX:le,targetY:le,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Gt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:le,underlineThickness:le,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:le,values:null,vAlphabetic:le,vMathematical:le,vectorEffect:null,vHanging:le,vIdeographic:le,version:null,vertAdvY:le,vertOriginX:le,vertOriginY:le,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:le,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),i_=/^data[-\w.:]+$/i,t0=/-[a-z]/g,a_=/[A-Z]/g;function l_(t,n){const r=yf(n);let o=n,i=fn;if(r in t.normal)return t.property[t.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&i_.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(t0,c_);o="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!t0.test(a)){let l=a.replace(a_,s_);l.charAt(0)!=="-"&&(l="-"+l),n="data"+l}}i=Fp}return new i(o,n)}function s_(t){return"-"+t.toLowerCase()}function c_(t){return t.charAt(1).toUpperCase()}const u_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},d_=X2([nj,tj,ij,aj,r_],"html"),Lp=X2([nj,tj,ij,aj,o_],"svg");function f_(t){return t.join(" ").trim()}var lj={},n0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,p_=/\n/g,g_=/^\s*/,h_=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,m_=/^:\s*/,b_=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,v_=/^[;\s]*/,y_=/^\s+|\s+$/g,w_=`
`,r0="/",o0="*",Ur="",x_="comment",j_="declaration",E_=function(t,n){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];n=n||{};var r=1,o=1;function i(m){var y=m.match(p_);y&&(r+=y.length);var E=m.lastIndexOf(w_);o=~E?m.length-E:o+m.length}function a(){var m={line:r,column:o};return function(y){return y.position=new l(m),d(),y}}function l(m){this.start=m,this.end={line:r,column:o},this.source=n.source}l.prototype.content=t;function c(m){var y=new Error(n.source+":"+r+":"+o+": "+m);if(y.reason=m,y.filename=n.source,y.line=r,y.column=o,y.source=t,!n.silent)throw y}function u(m){var y=m.exec(t);if(y){var E=y[0];return i(E),t=t.slice(E.length),y}}function d(){u(g_)}function f(m){var y;for(m=m||[];y=g();)y!==!1&&m.push(y);return m}function g(){var m=a();if(!(r0!=t.charAt(0)||o0!=t.charAt(1))){for(var y=2;Ur!=t.charAt(y)&&(o0!=t.charAt(y)||r0!=t.charAt(y+1));)++y;if(y+=2,Ur===t.charAt(y-1))return c("End of comment missing");var E=t.slice(2,y-2);return o+=2,i(E),t=t.slice(y),o+=2,m({type:x_,comment:E})}}function b(){var m=a(),y=u(h_);if(y){if(g(),!u(m_))return c("property missing ':'");var E=u(b_),v=m({type:j_,property:i0(y[0].replace(n0,Ur)),value:E?i0(E[0].replace(n0,Ur)):Ur});return u(v_),v}}function h(){var m=[];f(m);for(var y;y=b();)y!==!1&&(m.push(y),f(m));return m}return d(),h()};function i0(t){return t?t.replace(y_,Ur):Ur}var k_=Zp&&Zp.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(lj,"__esModule",{value:!0});var a0=lj.default=S_,O_=k_(E_);function S_(t,n){var r=null;if(!t||typeof t!="string")return r;var o=(0,O_.default)(t),i=typeof n=="function";return o.forEach(function(a){if(a.type==="declaration"){var l=a.property,c=a.value;i?n(l,c,a):c&&(r=r||{},r[l]=c)}}),r}const C_=a0.default||a0,sj=cj("end"),Ap=cj("start");function cj(t){return n;function n(r){const o=r&&r.position&&r.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function P_(t){const n=Ap(t),r=sj(t);if(n&&r)return{start:n,end:r}}function Si(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?l0(t.position):"start"in t||"end"in t?l0(t):"line"in t||"column"in t?xf(t):""}function xf(t){return s0(t&&t.line)+":"+s0(t&&t.column)}function l0(t){return xf(t&&t.start)+"-"+xf(t&&t.end)}function s0(t){return t&&typeof t=="number"?t:1}class Ct extends Error{constructor(n,r,o){super(),typeof r=="string"&&(o=r,r=void 0);let i="",a={},l=!1;if(r&&("line"in r&&"column"in r?a={place:r}:"start"in r&&"end"in r?a={place:r}:"type"in r?a={ancestors:[r],place:r.position}:a={...r}),typeof n=="string"?i=n:!a.cause&&n&&(l=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof o=="string"){const u=o.indexOf(":");u===-1?a.ruleId=o:(a.source=o.slice(0,u),a.ruleId=o.slice(u+1))}if(!a.place&&a.ancestors&&a.ancestors){const u=a.ancestors[a.ancestors.length-1];u&&(a.place=u.position)}const c=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=c?c.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=c?c.line:void 0,this.name=Si(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=l&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}}Ct.prototype.file="";Ct.prototype.name="";Ct.prototype.reason="";Ct.prototype.message="";Ct.prototype.stack="";Ct.prototype.column=void 0;Ct.prototype.line=void 0;Ct.prototype.ancestors=void 0;Ct.prototype.cause=void 0;Ct.prototype.fatal=void 0;Ct.prototype.place=void 0;Ct.prototype.ruleId=void 0;Ct.prototype.source=void 0;const _p={}.hasOwnProperty,I_=new Map,T_=/[A-Z]/g,D_=/-([a-z])/g,M_=new Set(["table","tbody","thead","tfoot","tr"]),N_=new Set(["td","th"]),uj="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function R_(t,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=n.filePath||void 0;let o;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=B_(r,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=H_(r,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:o,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Lp:d_,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=dj(i,t,void 0);return a&&typeof a!="string"?a:i.create(t,i.Fragment,{children:a||void 0},void 0)}function dj(t,n,r){if(n.type==="element")return F_(t,n,r);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return L_(t,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return __(t,n,r);if(n.type==="mdxjsEsm")return A_(t,n);if(n.type==="root")return $_(t,n,r);if(n.type==="text")return z_(t,n)}function F_(t,n,r){const o=t.schema;let i=o;n.tagName.toLowerCase()==="svg"&&o.space==="html"&&(i=Lp,t.schema=i),t.ancestors.push(n);const a=pj(t,n.tagName,!1),l=V_(t,n);let c=zp(t,n);return M_.has(n.tagName)&&(c=c.filter(function(u){return typeof u=="string"?!e_(u):!0})),fj(t,l,a,n),$p(l,c),t.ancestors.pop(),t.schema=o,t.create(n,a,l,r)}function L_(t,n){if(n.data&&n.data.estree&&t.evaluater){const o=n.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}zi(t,n.position)}function A_(t,n){if(n.data&&n.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(n.data.estree);zi(t,n.position)}function __(t,n,r){const o=t.schema;let i=o;n.name==="svg"&&o.space==="html"&&(i=Lp,t.schema=i),t.ancestors.push(n);const a=n.name===null?t.Fragment:pj(t,n.name,!0),l=W_(t,n),c=zp(t,n);return fj(t,l,a,n),$p(l,c),t.ancestors.pop(),t.schema=o,t.create(n,a,l,r)}function $_(t,n,r){const o={};return $p(o,zp(t,n)),t.create(n,t.Fragment,o,r)}function z_(t,n){return n.value}function fj(t,n,r,o){typeof r!="string"&&r!==t.Fragment&&t.passNode&&(n.node=o)}function $p(t,n){if(n.length>0){const r=n.length>1?n:n[0];r&&(t.children=r)}}function H_(t,n,r){return o;function o(i,a,l,c){const d=Array.isArray(l.children)?r:n;return c?d(a,l,c):d(a,l)}}function B_(t,n){return r;function r(o,i,a,l){const c=Array.isArray(a.children),u=Ap(o);return n(i,a,l,c,{columnNumber:u?u.column-1:void 0,fileName:t,lineNumber:u?u.line:void 0},void 0)}}function V_(t,n){const r={};let o,i;for(i in n.properties)if(i!=="children"&&_p.call(n.properties,i)){const a=U_(t,i,n.properties[i]);if(a){const[l,c]=a;t.tableCellAlignToStyle&&l==="align"&&typeof c=="string"&&N_.has(n.tagName)?o=c:r[l]=c}}if(o){const a=r.style||(r.style={});a[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return r}function W_(t,n){const r={};for(const o of n.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const a=o.data.estree.body[0];a.type;const l=a.expression;l.type;const c=l.properties[0];c.type,Object.assign(r,t.evaluater.evaluateExpression(c.argument))}else zi(t,n.position);else{const i=o.name;let a;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const c=o.value.data.estree.body[0];c.type,a=t.evaluater.evaluateExpression(c.expression)}else zi(t,n.position);else a=o.value===null?!0:o.value;r[i]=a}return r}function zp(t,n){const r=[];let o=-1;const i=t.passKeys?new Map:I_;for(;++o<n.children.length;){const a=n.children[o];let l;if(t.passKeys){const u=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(u){const d=i.get(u)||0;l=u+"-"+d,i.set(u,d+1)}}const c=dj(t,a,l);c!==void 0&&r.push(c)}return r}function U_(t,n,r){const o=l_(t.schema,n);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=o.commaSeparated?G4(r):f_(r)),o.property==="style"){let i=typeof r=="object"?r:q_(t,String(r));return t.stylePropertyNameCase==="css"&&(i=Y_(i)),["style",i]}return[t.elementAttributeNameCase==="react"&&o.space?u_[o.property]||o.property:o.attribute,r]}}function q_(t,n){const r={};try{C_(n,o)}catch(i){if(!t.ignoreInvalidStyle){const a=i,l=new Ct("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=uj+"#cannot-parse-style-attribute",l}}return r;function o(i,a){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(D_,G_)),r[l]=a}}function pj(t,n,r){let o;if(!r)o={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,l;for(;++a<i.length;){const c=Zv(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};l=l?{type:"MemberExpression",object:l,property:c,computed:!!(a&&c.type==="Literal"),optional:!1}:c}o=l}else o=Zv(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(o.type==="Literal"){const i=o.value;return _p.call(t.components,i)?t.components[i]:i}if(t.evaluater)return t.evaluater.evaluateExpression(o);zi(t)}function zi(t,n){const r=new Ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=uj+"#cannot-handle-mdx-estrees-without-createevaluater",r}function Y_(t){const n={};let r;for(r in t)_p.call(t,r)&&(n[K_(r)]=t[r]);return n}function K_(t){let n=t.replace(T_,Q_);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function G_(t,n){return n.toUpperCase()}function Q_(t){return"-"+t.toLowerCase()}const hc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},J_={};function Z_(t,n){const r=J_,o=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,i=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return gj(t,o,i)}function gj(t,n,r){if(X_(t)){if("value"in t)return t.type==="html"&&!r?"":t.value;if(n&&"alt"in t&&t.alt)return t.alt;if("children"in t)return c0(t.children,n,r)}return Array.isArray(t)?c0(t,n,r):""}function c0(t,n,r){const o=[];let i=-1;for(;++i<t.length;)o[i]=gj(t[i],n,r);return o.join("")}function X_(t){return!!(t&&typeof t=="object")}const u0=document.createElement("i");function Hp(t){const n="&"+t+";";u0.innerHTML=n;const r=u0.textContent;return r.charCodeAt(r.length-1)===59&&t!=="semi"||r===n?!1:r}function ir(t,n,r,o){const i=t.length;let a=0,l;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,r=r>0?r:0,o.length<1e4)l=Array.from(o),l.unshift(n,r),t.splice(...l);else for(r&&t.splice(n,r);a<o.length;)l=o.slice(a,a+1e4),l.unshift(n,0),t.splice(...l),a+=1e4,n+=1e4}function ln(t,n){return t.length>0?(ir(t,t.length,0,n),t):n}const d0={}.hasOwnProperty;function e$(t){const n={};let r=-1;for(;++r<t.length;)t$(n,t[r]);return n}function t$(t,n){let r;for(r in n){const i=(d0.call(t,r)?t[r]:void 0)||(t[r]={}),a=n[r];let l;if(a)for(l in a){d0.call(i,l)||(i[l]=[]);const c=a[l];n$(i[l],Array.isArray(c)?c:c?[c]:[])}}}function n$(t,n){let r=-1;const o=[];for(;++r<n.length;)(n[r].add==="after"?t:o).push(n[r]);ir(t,0,0,o)}function hj(t,n){const r=Number.parseInt(t,n);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function To(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Rn=Mr(/[A-Za-z]/),Xt=Mr(/[\dA-Za-z]/),r$=Mr(/[#-'*+\--9=?A-Z^-~]/);function jf(t){return t!==null&&(t<32||t===127)}const Ef=Mr(/\d/),o$=Mr(/[\dA-Fa-f]/),i$=Mr(/[!-/:-@[-`{-~]/);function Te(t){return t!==null&&t<-2}function Ht(t){return t!==null&&(t<0||t===32)}function We(t){return t===-2||t===-1||t===32}const a$=Mr(new RegExp("\\p{P}|\\p{S}","u")),l$=Mr(/\s/);function Mr(t){return n;function n(r){return r!==null&&r>-1&&t.test(String.fromCharCode(r))}}function oi(t){const n=[];let r=-1,o=0,i=0;for(;++r<t.length;){const a=t.charCodeAt(r);let l="";if(a===37&&Xt(t.charCodeAt(r+1))&&Xt(t.charCodeAt(r+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(l=String.fromCharCode(a));else if(a>55295&&a<57344){const c=t.charCodeAt(r+1);a<56320&&c>56319&&c<57344?(l=String.fromCharCode(a,c),i=1):l="�"}else l=String.fromCharCode(a);l&&(n.push(t.slice(o,r),encodeURIComponent(l)),o=r+i+1,l=""),i&&(r+=i,i=0)}return n.join("")+t.slice(o)}function nt(t,n,r,o){const i=o?o-1:Number.POSITIVE_INFINITY;let a=0;return l;function l(u){return We(u)?(t.enter(r),c(u)):n(u)}function c(u){return We(u)&&a++<i?(t.consume(u),c):(t.exit(r),n(u))}}const s$={tokenize:c$};function c$(t){const n=t.attempt(this.parser.constructs.contentInitial,o,i);let r;return n;function o(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),nt(t,n,"linePrefix")}function i(c){return t.enter("paragraph"),a(c)}function a(c){const u=t.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=u),r=u,l(c)}function l(c){if(c===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(c);return}return Te(c)?(t.consume(c),t.exit("chunkText"),a):(t.consume(c),l)}}const u$={tokenize:d$},f0={tokenize:f$};function d$(t){const n=this,r=[];let o=0,i,a,l;return c;function c(C){if(o<r.length){const D=r[o];return n.containerState=D[1],t.attempt(D[0].continuation,u,d)(C)}return d(C)}function u(C){if(o++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&k();const D=n.events.length;let I=D,T;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){T=n.events[I][1].end;break}v(o);let z=D;for(;z<n.events.length;)n.events[z][1].end=Object.assign({},T),z++;return ir(n.events,I+1,0,n.events.slice(D)),n.events.length=z,d(C)}return c(C)}function d(C){if(o===r.length){if(!i)return b(C);if(i.currentConstruct&&i.currentConstruct.concrete)return m(C);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},t.check(f0,f,g)(C)}function f(C){return i&&k(),v(o),b(C)}function g(C){return n.parser.lazy[n.now().line]=o!==r.length,l=n.now().offset,m(C)}function b(C){return n.containerState={},t.attempt(f0,h,m)(C)}function h(C){return o++,r.push([n.currentConstruct,n.containerState]),b(C)}function m(C){if(C===null){i&&k(),v(0),t.consume(C);return}return i=i||n.parser.flow(n.now()),t.enter("chunkFlow",{contentType:"flow",previous:a,_tokenizer:i}),y(C)}function y(C){if(C===null){E(t.exit("chunkFlow"),!0),v(0),t.consume(C);return}return Te(C)?(t.consume(C),E(t.exit("chunkFlow")),o=0,n.interrupt=void 0,c):(t.consume(C),y)}function E(C,D){const I=n.sliceStream(C);if(D&&I.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(I),n.parser.lazy[C.start.line]){let T=i.events.length;for(;T--;)if(i.events[T][1].start.offset<l&&(!i.events[T][1].end||i.events[T][1].end.offset>l))return;const z=n.events.length;let A=z,Q,B;for(;A--;)if(n.events[A][0]==="exit"&&n.events[A][1].type==="chunkFlow"){if(Q){B=n.events[A][1].end;break}Q=!0}for(v(o),T=z;T<n.events.length;)n.events[T][1].end=Object.assign({},B),T++;ir(n.events,A+1,0,n.events.slice(z)),n.events.length=T}}function v(C){let D=r.length;for(;D-- >C;){const I=r[D];n.containerState=I[1],I[0].exit.call(n,t)}r.length=C}function k(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function f$(t,n,r){return nt(t,t.attempt(this.parser.constructs.document,n,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function p0(t){if(t===null||Ht(t)||l$(t))return 1;if(a$(t))return 2}function Bp(t,n,r){const o=[];let i=-1;for(;++i<t.length;){const a=t[i].resolveAll;a&&!o.includes(a)&&(n=a(n,r),o.push(a))}return n}const kf={name:"attention",tokenize:g$,resolveAll:p$};function p$(t,n){let r=-1,o,i,a,l,c,u,d,f;for(;++r<t.length;)if(t[r][0]==="enter"&&t[r][1].type==="attentionSequence"&&t[r][1]._close){for(o=r;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&n.sliceSerialize(t[o][1]).charCodeAt(0)===n.sliceSerialize(t[r][1]).charCodeAt(0)){if((t[o][1]._close||t[r][1]._open)&&(t[r][1].end.offset-t[r][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[r][1].end.offset-t[r][1].start.offset)%3))continue;u=t[o][1].end.offset-t[o][1].start.offset>1&&t[r][1].end.offset-t[r][1].start.offset>1?2:1;const g=Object.assign({},t[o][1].end),b=Object.assign({},t[r][1].start);g0(g,-u),g0(b,u),l={type:u>1?"strongSequence":"emphasisSequence",start:g,end:Object.assign({},t[o][1].end)},c={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[r][1].start),end:b},a={type:u>1?"strongText":"emphasisText",start:Object.assign({},t[o][1].end),end:Object.assign({},t[r][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},c.end)},t[o][1].end=Object.assign({},l.start),t[r][1].start=Object.assign({},c.end),d=[],t[o][1].end.offset-t[o][1].start.offset&&(d=ln(d,[["enter",t[o][1],n],["exit",t[o][1],n]])),d=ln(d,[["enter",i,n],["enter",l,n],["exit",l,n],["enter",a,n]]),d=ln(d,Bp(n.parser.constructs.insideSpan.null,t.slice(o+1,r),n)),d=ln(d,[["exit",a,n],["enter",c,n],["exit",c,n],["exit",i,n]]),t[r][1].end.offset-t[r][1].start.offset?(f=2,d=ln(d,[["enter",t[r][1],n],["exit",t[r][1],n]])):f=0,ir(t,o-1,r-o+3,d),r=o+d.length-f-2;break}}for(r=-1;++r<t.length;)t[r][1].type==="attentionSequence"&&(t[r][1].type="data");return t}function g$(t,n){const r=this.parser.constructs.attentionMarkers.null,o=this.previous,i=p0(o);let a;return l;function l(u){return a=u,t.enter("attentionSequence"),c(u)}function c(u){if(u===a)return t.consume(u),c;const d=t.exit("attentionSequence"),f=p0(u),g=!f||f===2&&i||r.includes(u),b=!i||i===2&&f||r.includes(o);return d._open=!!(a===42?g:g&&(i||!b)),d._close=!!(a===42?b:b&&(f||!g)),n(u)}}function g0(t,n){t.column+=n,t.offset+=n,t._bufferIndex+=n}const h$={name:"autolink",tokenize:m$};function m$(t,n,r){let o=0;return i;function i(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(h){return Rn(h)?(t.consume(h),l):h===64?r(h):d(h)}function l(h){return h===43||h===45||h===46||Xt(h)?(o=1,c(h)):d(h)}function c(h){return h===58?(t.consume(h),o=0,u):(h===43||h===45||h===46||Xt(h))&&o++<32?(t.consume(h),c):(o=0,d(h))}function u(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),n):h===null||h===32||h===60||jf(h)?r(h):(t.consume(h),u)}function d(h){return h===64?(t.consume(h),f):r$(h)?(t.consume(h),d):r(h)}function f(h){return Xt(h)?g(h):r(h)}function g(h){return h===46?(t.consume(h),o=0,f):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),n):b(h)}function b(h){if((h===45||Xt(h))&&o++<63){const m=h===45?b:g;return t.consume(h),m}return r(h)}}const ss={tokenize:b$,partial:!0};function b$(t,n,r){return o;function o(a){return We(a)?nt(t,i,"linePrefix")(a):i(a)}function i(a){return a===null||Te(a)?n(a):r(a)}}const mj={name:"blockQuote",tokenize:v$,continuation:{tokenize:y$},exit:w$};function v$(t,n,r){const o=this;return i;function i(l){if(l===62){const c=o.containerState;return c.open||(t.enter("blockQuote",{_container:!0}),c.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(l),t.exit("blockQuoteMarker"),a}return r(l)}function a(l){return We(l)?(t.enter("blockQuotePrefixWhitespace"),t.consume(l),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),n):(t.exit("blockQuotePrefix"),n(l))}}function y$(t,n,r){const o=this;return i;function i(l){return We(l)?nt(t,a,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):a(l)}function a(l){return t.attempt(mj,n,r)(l)}}function w$(t){t.exit("blockQuote")}const bj={name:"characterEscape",tokenize:x$};function x$(t,n,r){return o;function o(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return i$(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),n):r(a)}}const vj={name:"characterReference",tokenize:j$};function j$(t,n,r){const o=this;let i=0,a,l;return c;function c(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),u}function u(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),d):(t.enter("characterReferenceValue"),a=31,l=Xt,f(g))}function d(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,l=o$,f):(t.enter("characterReferenceValue"),a=7,l=Ef,f(g))}function f(g){if(g===59&&i){const b=t.exit("characterReferenceValue");return l===Xt&&!Hp(o.sliceSerialize(b))?r(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),n)}return l(g)&&i++<a?(t.consume(g),f):r(g)}}const h0={tokenize:k$,partial:!0},m0={name:"codeFenced",tokenize:E$,concrete:!0};function E$(t,n,r){const o=this,i={tokenize:I,partial:!0};let a=0,l=0,c;return u;function u(T){return d(T)}function d(T){const z=o.events[o.events.length-1];return a=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,c=T,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),f(T)}function f(T){return T===c?(l++,t.consume(T),f):l<3?r(T):(t.exit("codeFencedFenceSequence"),We(T)?nt(t,g,"whitespace")(T):g(T))}function g(T){return T===null||Te(T)?(t.exit("codeFencedFence"),o.interrupt?n(T):t.check(h0,y,D)(T)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),b(T))}function b(T){return T===null||Te(T)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(T)):We(T)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),nt(t,h,"whitespace")(T)):T===96&&T===c?r(T):(t.consume(T),b)}function h(T){return T===null||Te(T)?g(T):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),m(T))}function m(T){return T===null||Te(T)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(T)):T===96&&T===c?r(T):(t.consume(T),m)}function y(T){return t.attempt(i,D,E)(T)}function E(T){return t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),v}function v(T){return a>0&&We(T)?nt(t,k,"linePrefix",a+1)(T):k(T)}function k(T){return T===null||Te(T)?t.check(h0,y,D)(T):(t.enter("codeFlowValue"),C(T))}function C(T){return T===null||Te(T)?(t.exit("codeFlowValue"),k(T)):(t.consume(T),C)}function D(T){return t.exit("codeFenced"),n(T)}function I(T,z,A){let Q=0;return B;function B(V){return T.enter("lineEnding"),T.consume(V),T.exit("lineEnding"),F}function F(V){return T.enter("codeFencedFence"),We(V)?nt(T,L,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(V):L(V)}function L(V){return V===c?(T.enter("codeFencedFenceSequence"),_(V)):A(V)}function _(V){return V===c?(Q++,T.consume(V),_):Q>=l?(T.exit("codeFencedFenceSequence"),We(V)?nt(T,R,"whitespace")(V):R(V)):A(V)}function R(V){return V===null||Te(V)?(T.exit("codeFencedFence"),z(V)):A(V)}}}function k$(t,n,r){const o=this;return i;function i(l){return l===null?r(l):(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a)}function a(l){return o.parser.lazy[o.now().line]?r(l):n(l)}}const mc={name:"codeIndented",tokenize:S$},O$={tokenize:C$,partial:!0};function S$(t,n,r){const o=this;return i;function i(d){return t.enter("codeIndented"),nt(t,a,"linePrefix",5)(d)}function a(d){const f=o.events[o.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(d):r(d)}function l(d){return d===null?u(d):Te(d)?t.attempt(O$,l,u)(d):(t.enter("codeFlowValue"),c(d))}function c(d){return d===null||Te(d)?(t.exit("codeFlowValue"),l(d)):(t.consume(d),c)}function u(d){return t.exit("codeIndented"),n(d)}}function C$(t,n,r){const o=this;return i;function i(l){return o.parser.lazy[o.now().line]?r(l):Te(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),i):nt(t,a,"linePrefix",5)(l)}function a(l){const c=o.events[o.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):Te(l)?i(l):r(l)}}const P$={name:"codeText",tokenize:D$,resolve:I$,previous:T$};function I$(t){let n=t.length-4,r=3,o,i;if((t[r][1].type==="lineEnding"||t[r][1].type==="space")&&(t[n][1].type==="lineEnding"||t[n][1].type==="space")){for(o=r;++o<n;)if(t[o][1].type==="codeTextData"){t[r][1].type="codeTextPadding",t[n][1].type="codeTextPadding",r+=2,n-=2;break}}for(o=r-1,n++;++o<=n;)i===void 0?o!==n&&t[o][1].type!=="lineEnding"&&(i=o):(o===n||t[o][1].type==="lineEnding")&&(t[i][1].type="codeTextData",o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),n-=o-i-2,o=i+2),i=void 0);return t}function T$(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function D$(t,n,r){let o=0,i,a;return l;function l(g){return t.enter("codeText"),t.enter("codeTextSequence"),c(g)}function c(g){return g===96?(t.consume(g),o++,c):(t.exit("codeTextSequence"),u(g))}function u(g){return g===null?r(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),u):g===96?(a=t.enter("codeTextSequence"),i=0,f(g)):Te(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),u):(t.enter("codeTextData"),d(g))}function d(g){return g===null||g===32||g===96||Te(g)?(t.exit("codeTextData"),u(g)):(t.consume(g),d)}function f(g){return g===96?(t.consume(g),i++,f):i===o?(t.exit("codeTextSequence"),t.exit("codeText"),n(g)):(a.type="codeTextData",d(g))}}class M${constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,r){const o=r??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(n,o):n>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(n,r,o){const i=r||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return o&&hi(this.left,o),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),hi(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),hi(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const r=this.left.splice(n,Number.POSITIVE_INFINITY);hi(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);hi(this.left,r.reverse())}}}function hi(t,n){let r=0;if(n.length<1e4)t.push(...n);else for(;r<n.length;)t.push(...n.slice(r,r+1e4)),r+=1e4}function yj(t){const n={};let r=-1,o,i,a,l,c,u,d;const f=new M$(t);for(;++r<f.length;){for(;r in n;)r=n[r];if(o=f.get(r),r&&o[1].type==="chunkFlow"&&f.get(r-1)[1].type==="listItemPrefix"&&(u=o[1]._tokenizer.events,a=0,a<u.length&&u[a][1].type==="lineEndingBlank"&&(a+=2),a<u.length&&u[a][1].type==="content"))for(;++a<u.length&&u[a][1].type!=="content";)u[a][1].type==="chunkText"&&(u[a][1]._isInFirstContentOfListItem=!0,a++);if(o[0]==="enter")o[1].contentType&&(Object.assign(n,N$(f,r)),r=n[r],d=!0);else if(o[1]._container){for(a=r,i=void 0;a--&&(l=f.get(a),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=a);i&&(o[1].end=Object.assign({},f.get(i)[1].start),c=f.slice(i,r),c.unshift(o),f.splice(i,r-i+1,c))}}return ir(t,0,Number.POSITIVE_INFINITY,f.slice(0)),!d}function N$(t,n){const r=t.get(n)[1],o=t.get(n)[2];let i=n-1;const a=[],l=r._tokenizer||o.parser[r.contentType](r.start),c=l.events,u=[],d={};let f,g,b=-1,h=r,m=0,y=0;const E=[y];for(;h;){for(;t.get(++i)[1]!==h;);a.push(i),h._tokenizer||(f=o.sliceStream(h),h.next||f.push(null),g&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),g=h,h=h.next}for(h=r;++b<c.length;)c[b][0]==="exit"&&c[b-1][0]==="enter"&&c[b][1].type===c[b-1][1].type&&c[b][1].start.line!==c[b][1].end.line&&(y=b+1,E.push(y),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):E.pop(),b=E.length;b--;){const v=c.slice(E[b],E[b+1]),k=a.pop();u.push([k,k+v.length-1]),t.splice(k,2,v)}for(u.reverse(),b=-1;++b<u.length;)d[m+u[b][0]]=m+u[b][1],m+=u[b][1]-u[b][0]-1;return d}const R$={tokenize:A$,resolve:L$},F$={tokenize:_$,partial:!0};function L$(t){return yj(t),t}function A$(t,n){let r;return o;function o(c){return t.enter("content"),r=t.enter("chunkContent",{contentType:"content"}),i(c)}function i(c){return c===null?a(c):Te(c)?t.check(F$,l,a)(c):(t.consume(c),i)}function a(c){return t.exit("chunkContent"),t.exit("content"),n(c)}function l(c){return t.consume(c),t.exit("chunkContent"),r.next=t.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,i}}function _$(t,n,r){const o=this;return i;function i(l){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),nt(t,a,"linePrefix")}function a(l){if(l===null||Te(l))return r(l);const c=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):t.interrupt(o.parser.constructs.flow,r,n)(l)}}function wj(t,n,r,o,i,a,l,c,u){const d=u||Number.POSITIVE_INFINITY;let f=0;return g;function g(v){return v===60?(t.enter(o),t.enter(i),t.enter(a),t.consume(v),t.exit(a),b):v===null||v===32||v===41||jf(v)?r(v):(t.enter(o),t.enter(l),t.enter(c),t.enter("chunkString",{contentType:"string"}),y(v))}function b(v){return v===62?(t.enter(a),t.consume(v),t.exit(a),t.exit(i),t.exit(o),n):(t.enter(c),t.enter("chunkString",{contentType:"string"}),h(v))}function h(v){return v===62?(t.exit("chunkString"),t.exit(c),b(v)):v===null||v===60||Te(v)?r(v):(t.consume(v),v===92?m:h)}function m(v){return v===60||v===62||v===92?(t.consume(v),h):h(v)}function y(v){return!f&&(v===null||v===41||Ht(v))?(t.exit("chunkString"),t.exit(c),t.exit(l),t.exit(o),n(v)):f<d&&v===40?(t.consume(v),f++,y):v===41?(t.consume(v),f--,y):v===null||v===32||v===40||jf(v)?r(v):(t.consume(v),v===92?E:y)}function E(v){return v===40||v===41||v===92?(t.consume(v),y):y(v)}}function xj(t,n,r,o,i,a){const l=this;let c=0,u;return d;function d(h){return t.enter(o),t.enter(i),t.consume(h),t.exit(i),t.enter(a),f}function f(h){return c>999||h===null||h===91||h===93&&!u||h===94&&!c&&"_hiddenFootnoteSupport"in l.parser.constructs?r(h):h===93?(t.exit(a),t.enter(i),t.consume(h),t.exit(i),t.exit(o),n):Te(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),f):(t.enter("chunkString",{contentType:"string"}),g(h))}function g(h){return h===null||h===91||h===93||Te(h)||c++>999?(t.exit("chunkString"),f(h)):(t.consume(h),u||(u=!We(h)),h===92?b:g)}function b(h){return h===91||h===92||h===93?(t.consume(h),c++,g):g(h)}}function jj(t,n,r,o,i,a){let l;return c;function c(b){return b===34||b===39||b===40?(t.enter(o),t.enter(i),t.consume(b),t.exit(i),l=b===40?41:b,u):r(b)}function u(b){return b===l?(t.enter(i),t.consume(b),t.exit(i),t.exit(o),n):(t.enter(a),d(b))}function d(b){return b===l?(t.exit(a),u(l)):b===null?r(b):Te(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),nt(t,d,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===l||b===null||Te(b)?(t.exit("chunkString"),d(b)):(t.consume(b),b===92?g:f)}function g(b){return b===l||b===92?(t.consume(b),f):f(b)}}function Ci(t,n){let r;return o;function o(i){return Te(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),r=!0,o):We(i)?nt(t,o,r?"linePrefix":"lineSuffix")(i):n(i)}}const $$={name:"definition",tokenize:H$},z$={tokenize:B$,partial:!0};function H$(t,n,r){const o=this;let i;return a;function a(h){return t.enter("definition"),l(h)}function l(h){return xj.call(o,t,c,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function c(h){return i=To(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),u):r(h)}function u(h){return Ht(h)?Ci(t,d)(h):d(h)}function d(h){return wj(t,f,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return t.attempt(z$,g,g)(h)}function g(h){return We(h)?nt(t,b,"whitespace")(h):b(h)}function b(h){return h===null||Te(h)?(t.exit("definition"),o.parser.defined.push(i),n(h)):r(h)}}function B$(t,n,r){return o;function o(c){return Ht(c)?Ci(t,i)(c):r(c)}function i(c){return jj(t,a,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(c)}function a(c){return We(c)?nt(t,l,"whitespace")(c):l(c)}function l(c){return c===null||Te(c)?n(c):r(c)}}const V$={name:"hardBreakEscape",tokenize:W$};function W$(t,n,r){return o;function o(a){return t.enter("hardBreakEscape"),t.consume(a),i}function i(a){return Te(a)?(t.exit("hardBreakEscape"),n(a)):r(a)}}const U$={name:"headingAtx",tokenize:Y$,resolve:q$};function q$(t,n){let r=t.length-2,o=3,i,a;return t[o][1].type==="whitespace"&&(o+=2),r-2>o&&t[r][1].type==="whitespace"&&(r-=2),t[r][1].type==="atxHeadingSequence"&&(o===r-1||r-4>o&&t[r-2][1].type==="whitespace")&&(r-=o+1===r?2:4),r>o&&(i={type:"atxHeadingText",start:t[o][1].start,end:t[r][1].end},a={type:"chunkText",start:t[o][1].start,end:t[r][1].end,contentType:"text"},ir(t,o,r-o+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])),t}function Y$(t,n,r){let o=0;return i;function i(f){return t.enter("atxHeading"),a(f)}function a(f){return t.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&o++<6?(t.consume(f),l):f===null||Ht(f)?(t.exit("atxHeadingSequence"),c(f)):r(f)}function c(f){return f===35?(t.enter("atxHeadingSequence"),u(f)):f===null||Te(f)?(t.exit("atxHeading"),n(f)):We(f)?nt(t,c,"whitespace")(f):(t.enter("atxHeadingText"),d(f))}function u(f){return f===35?(t.consume(f),u):(t.exit("atxHeadingSequence"),c(f))}function d(f){return f===null||f===35||Ht(f)?(t.exit("atxHeadingText"),c(f)):(t.consume(f),d)}}const K$=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],b0=["pre","script","style","textarea"],G$={name:"htmlFlow",tokenize:X$,resolveTo:Z$,concrete:!0},Q$={tokenize:tz,partial:!0},J$={tokenize:ez,partial:!0};function Z$(t){let n=t.length;for(;n--&&!(t[n][0]==="enter"&&t[n][1].type==="htmlFlow"););return n>1&&t[n-2][1].type==="linePrefix"&&(t[n][1].start=t[n-2][1].start,t[n+1][1].start=t[n-2][1].start,t.splice(n-2,2)),t}function X$(t,n,r){const o=this;let i,a,l,c,u;return d;function d(M){return f(M)}function f(M){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(M),g}function g(M){return M===33?(t.consume(M),b):M===47?(t.consume(M),a=!0,y):M===63?(t.consume(M),i=3,o.interrupt?n:N):Rn(M)?(t.consume(M),l=String.fromCharCode(M),E):r(M)}function b(M){return M===45?(t.consume(M),i=2,h):M===91?(t.consume(M),i=5,c=0,m):Rn(M)?(t.consume(M),i=4,o.interrupt?n:N):r(M)}function h(M){return M===45?(t.consume(M),o.interrupt?n:N):r(M)}function m(M){const ie="CDATA[";return M===ie.charCodeAt(c++)?(t.consume(M),c===ie.length?o.interrupt?n:L:m):r(M)}function y(M){return Rn(M)?(t.consume(M),l=String.fromCharCode(M),E):r(M)}function E(M){if(M===null||M===47||M===62||Ht(M)){const ie=M===47,ye=l.toLowerCase();return!ie&&!a&&b0.includes(ye)?(i=1,o.interrupt?n(M):L(M)):K$.includes(l.toLowerCase())?(i=6,ie?(t.consume(M),v):o.interrupt?n(M):L(M)):(i=7,o.interrupt&&!o.parser.lazy[o.now().line]?r(M):a?k(M):C(M))}return M===45||Xt(M)?(t.consume(M),l+=String.fromCharCode(M),E):r(M)}function v(M){return M===62?(t.consume(M),o.interrupt?n:L):r(M)}function k(M){return We(M)?(t.consume(M),k):B(M)}function C(M){return M===47?(t.consume(M),B):M===58||M===95||Rn(M)?(t.consume(M),D):We(M)?(t.consume(M),C):B(M)}function D(M){return M===45||M===46||M===58||M===95||Xt(M)?(t.consume(M),D):I(M)}function I(M){return M===61?(t.consume(M),T):We(M)?(t.consume(M),I):C(M)}function T(M){return M===null||M===60||M===61||M===62||M===96?r(M):M===34||M===39?(t.consume(M),u=M,z):We(M)?(t.consume(M),T):A(M)}function z(M){return M===u?(t.consume(M),u=null,Q):M===null||Te(M)?r(M):(t.consume(M),z)}function A(M){return M===null||M===34||M===39||M===47||M===60||M===61||M===62||M===96||Ht(M)?I(M):(t.consume(M),A)}function Q(M){return M===47||M===62||We(M)?C(M):r(M)}function B(M){return M===62?(t.consume(M),F):r(M)}function F(M){return M===null||Te(M)?L(M):We(M)?(t.consume(M),F):r(M)}function L(M){return M===45&&i===2?(t.consume(M),H):M===60&&i===1?(t.consume(M),U):M===62&&i===4?(t.consume(M),ae):M===63&&i===3?(t.consume(M),N):M===93&&i===5?(t.consume(M),X):Te(M)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(Q$,se,_)(M)):M===null||Te(M)?(t.exit("htmlFlowData"),_(M)):(t.consume(M),L)}function _(M){return t.check(J$,R,se)(M)}function R(M){return t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),V}function V(M){return M===null||Te(M)?_(M):(t.enter("htmlFlowData"),L(M))}function H(M){return M===45?(t.consume(M),N):L(M)}function U(M){return M===47?(t.consume(M),l="",J):L(M)}function J(M){if(M===62){const ie=l.toLowerCase();return b0.includes(ie)?(t.consume(M),ae):L(M)}return Rn(M)&&l.length<8?(t.consume(M),l+=String.fromCharCode(M),J):L(M)}function X(M){return M===93?(t.consume(M),N):L(M)}function N(M){return M===62?(t.consume(M),ae):M===45&&i===2?(t.consume(M),N):L(M)}function ae(M){return M===null||Te(M)?(t.exit("htmlFlowData"),se(M)):(t.consume(M),ae)}function se(M){return t.exit("htmlFlow"),n(M)}}function ez(t,n,r){const o=this;return i;function i(l){return Te(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a):r(l)}function a(l){return o.parser.lazy[o.now().line]?r(l):n(l)}}function tz(t,n,r){return o;function o(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(ss,n,r)}}const nz={name:"htmlText",tokenize:rz};function rz(t,n,r){const o=this;let i,a,l;return c;function c(N){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(N),u}function u(N){return N===33?(t.consume(N),d):N===47?(t.consume(N),I):N===63?(t.consume(N),C):Rn(N)?(t.consume(N),A):r(N)}function d(N){return N===45?(t.consume(N),f):N===91?(t.consume(N),a=0,m):Rn(N)?(t.consume(N),k):r(N)}function f(N){return N===45?(t.consume(N),h):r(N)}function g(N){return N===null?r(N):N===45?(t.consume(N),b):Te(N)?(l=g,U(N)):(t.consume(N),g)}function b(N){return N===45?(t.consume(N),h):g(N)}function h(N){return N===62?H(N):N===45?b(N):g(N)}function m(N){const ae="CDATA[";return N===ae.charCodeAt(a++)?(t.consume(N),a===ae.length?y:m):r(N)}function y(N){return N===null?r(N):N===93?(t.consume(N),E):Te(N)?(l=y,U(N)):(t.consume(N),y)}function E(N){return N===93?(t.consume(N),v):y(N)}function v(N){return N===62?H(N):N===93?(t.consume(N),v):y(N)}function k(N){return N===null||N===62?H(N):Te(N)?(l=k,U(N)):(t.consume(N),k)}function C(N){return N===null?r(N):N===63?(t.consume(N),D):Te(N)?(l=C,U(N)):(t.consume(N),C)}function D(N){return N===62?H(N):C(N)}function I(N){return Rn(N)?(t.consume(N),T):r(N)}function T(N){return N===45||Xt(N)?(t.consume(N),T):z(N)}function z(N){return Te(N)?(l=z,U(N)):We(N)?(t.consume(N),z):H(N)}function A(N){return N===45||Xt(N)?(t.consume(N),A):N===47||N===62||Ht(N)?Q(N):r(N)}function Q(N){return N===47?(t.consume(N),H):N===58||N===95||Rn(N)?(t.consume(N),B):Te(N)?(l=Q,U(N)):We(N)?(t.consume(N),Q):H(N)}function B(N){return N===45||N===46||N===58||N===95||Xt(N)?(t.consume(N),B):F(N)}function F(N){return N===61?(t.consume(N),L):Te(N)?(l=F,U(N)):We(N)?(t.consume(N),F):Q(N)}function L(N){return N===null||N===60||N===61||N===62||N===96?r(N):N===34||N===39?(t.consume(N),i=N,_):Te(N)?(l=L,U(N)):We(N)?(t.consume(N),L):(t.consume(N),R)}function _(N){return N===i?(t.consume(N),i=void 0,V):N===null?r(N):Te(N)?(l=_,U(N)):(t.consume(N),_)}function R(N){return N===null||N===34||N===39||N===60||N===61||N===96?r(N):N===47||N===62||Ht(N)?Q(N):(t.consume(N),R)}function V(N){return N===47||N===62||Ht(N)?Q(N):r(N)}function H(N){return N===62?(t.consume(N),t.exit("htmlTextData"),t.exit("htmlText"),n):r(N)}function U(N){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(N),t.exit("lineEnding"),J}function J(N){return We(N)?nt(t,X,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):X(N)}function X(N){return t.enter("htmlTextData"),l(N)}}const Vp={name:"labelEnd",tokenize:cz,resolveTo:sz,resolveAll:lz},oz={tokenize:uz},iz={tokenize:dz},az={tokenize:fz};function lz(t){let n=-1;for(;++n<t.length;){const r=t[n][1];(r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd")&&(t.splice(n+1,r.type==="labelImage"?4:2),r.type="data",n++)}return t}function sz(t,n){let r=t.length,o=0,i,a,l,c;for(;r--;)if(i=t[r][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;t[r][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(t[r][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=r,i.type!=="labelLink")){o=2;break}}else i.type==="labelEnd"&&(l=r);const u={type:t[a][1].type==="labelLink"?"link":"image",start:Object.assign({},t[a][1].start),end:Object.assign({},t[t.length-1][1].end)},d={type:"label",start:Object.assign({},t[a][1].start),end:Object.assign({},t[l][1].end)},f={type:"labelText",start:Object.assign({},t[a+o+2][1].end),end:Object.assign({},t[l-2][1].start)};return c=[["enter",u,n],["enter",d,n]],c=ln(c,t.slice(a+1,a+o+3)),c=ln(c,[["enter",f,n]]),c=ln(c,Bp(n.parser.constructs.insideSpan.null,t.slice(a+o+4,l-3),n)),c=ln(c,[["exit",f,n],t[l-2],t[l-1],["exit",d,n]]),c=ln(c,t.slice(l+1)),c=ln(c,[["exit",u,n]]),ir(t,a,t.length,c),t}function cz(t,n,r){const o=this;let i=o.events.length,a,l;for(;i--;)if((o.events[i][1].type==="labelImage"||o.events[i][1].type==="labelLink")&&!o.events[i][1]._balanced){a=o.events[i][1];break}return c;function c(b){return a?a._inactive?g(b):(l=o.parser.defined.includes(To(o.sliceSerialize({start:a.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(b),t.exit("labelMarker"),t.exit("labelEnd"),u):r(b)}function u(b){return b===40?t.attempt(oz,f,l?f:g)(b):b===91?t.attempt(iz,f,l?d:g)(b):l?f(b):g(b)}function d(b){return t.attempt(az,f,g)(b)}function f(b){return n(b)}function g(b){return a._balanced=!0,r(b)}}function uz(t,n,r){return o;function o(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),i}function i(g){return Ht(g)?Ci(t,a)(g):a(g)}function a(g){return g===41?f(g):wj(t,l,c,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function l(g){return Ht(g)?Ci(t,u)(g):f(g)}function c(g){return r(g)}function u(g){return g===34||g===39||g===40?jj(t,d,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):f(g)}function d(g){return Ht(g)?Ci(t,f)(g):f(g)}function f(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),n):r(g)}}function dz(t,n,r){const o=this;return i;function i(c){return xj.call(o,t,a,l,"reference","referenceMarker","referenceString")(c)}function a(c){return o.parser.defined.includes(To(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?n(c):r(c)}function l(c){return r(c)}}function fz(t,n,r){return o;function o(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),n):r(a)}}const pz={name:"labelStartImage",tokenize:gz,resolveAll:Vp.resolveAll};function gz(t,n,r){const o=this;return i;function i(c){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(c),t.exit("labelImageMarker"),a}function a(c){return c===91?(t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelImage"),l):r(c)}function l(c){return c===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(c):n(c)}}const hz={name:"labelStartLink",tokenize:mz,resolveAll:Vp.resolveAll};function mz(t,n,r){const o=this;return i;function i(l){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(l):n(l)}}const bc={name:"lineEnding",tokenize:bz};function bz(t,n){return r;function r(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),nt(t,n,"linePrefix")}}const Va={name:"thematicBreak",tokenize:vz};function vz(t,n,r){let o=0,i;return a;function a(d){return t.enter("thematicBreak"),l(d)}function l(d){return i=d,c(d)}function c(d){return d===i?(t.enter("thematicBreakSequence"),u(d)):o>=3&&(d===null||Te(d))?(t.exit("thematicBreak"),n(d)):r(d)}function u(d){return d===i?(t.consume(d),o++,u):(t.exit("thematicBreakSequence"),We(d)?nt(t,c,"whitespace")(d):c(d))}}const At={name:"list",tokenize:xz,continuation:{tokenize:jz},exit:kz},yz={tokenize:Oz,partial:!0},wz={tokenize:Ez,partial:!0};function xz(t,n,r){const o=this,i=o.events[o.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return c;function c(h){const m=o.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!o.containerState.marker||h===o.containerState.marker:Ef(h)){if(o.containerState.type||(o.containerState.type=m,t.enter(m,{_container:!0})),m==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(Va,r,d)(h):d(h);if(!o.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),u(h)}return r(h)}function u(h){return Ef(h)&&++l<10?(t.consume(h),u):(!o.interrupt||l<2)&&(o.containerState.marker?h===o.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),d(h)):r(h)}function d(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||h,t.check(ss,o.interrupt?r:f,t.attempt(yz,b,g))}function f(h){return o.containerState.initialBlankLine=!0,a++,b(h)}function g(h){return We(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),b):r(h)}function b(h){return o.containerState.size=a+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,n(h)}}function jz(t,n,r){const o=this;return o.containerState._closeFlow=void 0,t.check(ss,i,a);function i(c){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,nt(t,n,"listItemIndent",o.containerState.size+1)(c)}function a(c){return o.containerState.furtherBlankLines||!We(c)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,l(c)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(wz,n,l)(c))}function l(c){return o.containerState._closeFlow=!0,o.interrupt=void 0,nt(t,t.attempt(At,n,r),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c)}}function Ez(t,n,r){const o=this;return nt(t,i,"listItemIndent",o.containerState.size+1);function i(a){const l=o.events[o.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===o.containerState.size?n(a):r(a)}}function kz(t){t.exit(this.containerState.type)}function Oz(t,n,r){const o=this;return nt(t,i,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const l=o.events[o.events.length-1];return!We(a)&&l&&l[1].type==="listItemPrefixWhitespace"?n(a):r(a)}}const v0={name:"setextUnderline",tokenize:Cz,resolveTo:Sz};function Sz(t,n){let r=t.length,o,i,a;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){o=r;break}t[r][1].type==="paragraph"&&(i=r)}else t[r][1].type==="content"&&t.splice(r,1),!a&&t[r][1].type==="definition"&&(a=r);const l={type:"setextHeading",start:Object.assign({},t[i][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[i][1].type="setextHeadingText",a?(t.splice(i,0,["enter",l,n]),t.splice(a+1,0,["exit",t[o][1],n]),t[o][1].end=Object.assign({},t[a][1].end)):t[o][1]=l,t.push(["exit",l,n]),t}function Cz(t,n,r){const o=this;let i;return a;function a(d){let f=o.events.length,g;for(;f--;)if(o.events[f][1].type!=="lineEnding"&&o.events[f][1].type!=="linePrefix"&&o.events[f][1].type!=="content"){g=o.events[f][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||g)?(t.enter("setextHeadingLine"),i=d,l(d)):r(d)}function l(d){return t.enter("setextHeadingLineSequence"),c(d)}function c(d){return d===i?(t.consume(d),c):(t.exit("setextHeadingLineSequence"),We(d)?nt(t,u,"lineSuffix")(d):u(d))}function u(d){return d===null||Te(d)?(t.exit("setextHeadingLine"),n(d)):r(d)}}const Pz={tokenize:Iz};function Iz(t){const n=this,r=t.attempt(ss,o,t.attempt(this.parser.constructs.flowInitial,i,nt(t,t.attempt(this.parser.constructs.flow,i,t.attempt(R$,i)),"linePrefix")));return r;function o(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),n.currentConstruct=void 0,r}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),n.currentConstruct=void 0,r}}const Tz={resolveAll:kj()},Dz=Ej("string"),Mz=Ej("text");function Ej(t){return{tokenize:n,resolveAll:kj(t==="text"?Nz:void 0)};function n(r){const o=this,i=this.parser.constructs[t],a=r.attempt(i,l,c);return l;function l(f){return d(f)?a(f):c(f)}function c(f){if(f===null){r.consume(f);return}return r.enter("data"),r.consume(f),u}function u(f){return d(f)?(r.exit("data"),a(f)):(r.consume(f),u)}function d(f){if(f===null)return!0;const g=i[f];let b=-1;if(g)for(;++b<g.length;){const h=g[b];if(!h.previous||h.previous.call(o,o.previous))return!0}return!1}}}function kj(t){return n;function n(r,o){let i=-1,a;for(;++i<=r.length;)a===void 0?r[i]&&r[i][1].type==="data"&&(a=i,i++):(!r[i]||r[i][1].type!=="data")&&(i!==a+2&&(r[a][1].end=r[i-1][1].end,r.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(r,o):r}}function Nz(t,n){let r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){const o=t[r-1][1],i=n.sliceStream(o);let a=i.length,l=-1,c=0,u;for(;a--;){const d=i[a];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)c++,l--;if(l)break;l=-1}else if(d===-2)u=!0,c++;else if(d!==-1){a++;break}}if(c){const d={type:r===t.length||u||c<2?"lineSuffix":"hardBreakTrailing",start:{line:o.end.line,column:o.end.column-c,offset:o.end.offset-c,_index:o.start._index+a,_bufferIndex:a?l:o.start._bufferIndex+l},end:Object.assign({},o.end)};o.end=Object.assign({},d.start),o.start.offset===o.end.offset?Object.assign(o,d):(t.splice(r,0,["enter",d,n],["exit",d,n]),r+=2)}r++}return t}function Rz(t,n,r){let o=Object.assign(r?Object.assign({},r):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},a=[];let l=[],c=[];const u={consume:k,enter:C,exit:D,attempt:z(I),check:z(T),interrupt:z(T,{interrupt:!0})},d={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:h,sliceSerialize:b,now:m,defineSkip:y,write:g};let f=n.tokenize.call(d,u);return n.resolveAll&&a.push(n),d;function g(F){return l=ln(l,F),E(),l[l.length-1]!==null?[]:(A(n,0),d.events=Bp(a,d.events,d),d.events)}function b(F,L){return Lz(h(F),L)}function h(F){return Fz(l,F)}function m(){const{line:F,column:L,offset:_,_index:R,_bufferIndex:V}=o;return{line:F,column:L,offset:_,_index:R,_bufferIndex:V}}function y(F){i[F.line]=F.column,B()}function E(){let F;for(;o._index<l.length;){const L=l[o._index];if(typeof L=="string")for(F=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===F&&o._bufferIndex<L.length;)v(L.charCodeAt(o._bufferIndex));else v(L)}}function v(F){f=f(F)}function k(F){Te(F)?(o.line++,o.column=1,o.offset+=F===-3?2:1,B()):F!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===l[o._index].length&&(o._bufferIndex=-1,o._index++)),d.previous=F}function C(F,L){const _=L||{};return _.type=F,_.start=m(),d.events.push(["enter",_,d]),c.push(_),_}function D(F){const L=c.pop();return L.end=m(),d.events.push(["exit",L,d]),L}function I(F,L){A(F,L.from)}function T(F,L){L.restore()}function z(F,L){return _;function _(R,V,H){let U,J,X,N;return Array.isArray(R)?se(R):"tokenize"in R?se([R]):ae(R);function ae(Pe){return $e;function $e(oe){const me=oe!==null&&Pe[oe],ve=oe!==null&&Pe.null,He=[...Array.isArray(me)?me:me?[me]:[],...Array.isArray(ve)?ve:ve?[ve]:[]];return se(He)(oe)}}function se(Pe){return U=Pe,J=0,Pe.length===0?H:M(Pe[J])}function M(Pe){return $e;function $e(oe){return N=Q(),X=Pe,Pe.partial||(d.currentConstruct=Pe),Pe.name&&d.parser.constructs.disable.null.includes(Pe.name)?ye():Pe.tokenize.call(L?Object.assign(Object.create(d),L):d,u,ie,ye)(oe)}}function ie(Pe){return F(X,N),V}function ye(Pe){return N.restore(),++J<U.length?M(U[J]):H}}}function A(F,L){F.resolveAll&&!a.includes(F)&&a.push(F),F.resolve&&ir(d.events,L,d.events.length-L,F.resolve(d.events.slice(L),d)),F.resolveTo&&(d.events=F.resolveTo(d.events,d))}function Q(){const F=m(),L=d.previous,_=d.currentConstruct,R=d.events.length,V=Array.from(c);return{restore:H,from:R};function H(){o=F,d.previous=L,d.currentConstruct=_,d.events.length=R,c=V,B()}}function B(){o.line in i&&o.column<2&&(o.column=i[o.line],o.offset+=i[o.line]-1)}}function Fz(t,n){const r=n.start._index,o=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let l;if(r===i)l=[t[r].slice(o,a)];else{if(l=t.slice(r,i),o>-1){const c=l[0];typeof c=="string"?l[0]=c.slice(o):l.shift()}a>0&&l.push(t[i].slice(0,a))}return l}function Lz(t,n){let r=-1;const o=[];let i;for(;++r<t.length;){const a=t[r];let l;if(typeof a=="string")l=a;else switch(a){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=n?" ":"	";break}case-1:{if(!n&&i)continue;l=" ";break}default:l=String.fromCharCode(a)}i=a===-2,o.push(l)}return o.join("")}const Az={42:At,43:At,45:At,48:At,49:At,50:At,51:At,52:At,53:At,54:At,55:At,56:At,57:At,62:mj},_z={91:$$},$z={[-2]:mc,[-1]:mc,32:mc},zz={35:U$,42:Va,45:[v0,Va],60:G$,61:v0,95:Va,96:m0,126:m0},Hz={38:vj,92:bj},Bz={[-5]:bc,[-4]:bc,[-3]:bc,33:pz,38:vj,42:kf,60:[h$,nz],91:hz,92:[V$,bj],93:Vp,95:kf,96:P$},Vz={null:[kf,Tz]},Wz={null:[42,95]},Uz={null:[]},qz=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Wz,contentInitial:_z,disable:Uz,document:Az,flow:zz,flowInitial:$z,insideSpan:Vz,string:Hz,text:Bz},Symbol.toStringTag,{value:"Module"}));function Yz(t){const r=e$([qz,...(t||{}).extensions||[]]),o={defined:[],lazy:{},constructs:r,content:i(s$),document:i(u$),flow:i(Pz),string:i(Dz),text:i(Mz)};return o;function i(a){return l;function l(c){return Rz(o,a,c)}}}function Kz(t){for(;!yj(t););return t}const y0=/[\0\t\n\r]/g;function Gz(){let t=1,n="",r=!0,o;return i;function i(a,l,c){const u=[];let d,f,g,b,h;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(l||void 0).decode(a)),g=0,n="",r&&(a.charCodeAt(0)===65279&&g++,r=void 0);g<a.length;){if(y0.lastIndex=g,d=y0.exec(a),b=d&&d.index!==void 0?d.index:a.length,h=a.charCodeAt(b),!d){n=a.slice(g);break}if(h===10&&g===b&&o)u.push(-3),o=void 0;else switch(o&&(u.push(-5),o=void 0),g<b&&(u.push(a.slice(g,b)),t+=b-g),h){case 0:{u.push(65533),t++;break}case 9:{for(f=Math.ceil(t/4)*4,u.push(-2);t++<f;)u.push(-1);break}case 10:{u.push(-4),t=1;break}default:o=!0,t=1}g=b+1}return c&&(o&&u.push(-5),n&&u.push(n),u.push(null)),u}}const Qz=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Jz(t){return t.replace(Qz,Zz)}function Zz(t,n,r){if(n)return n;if(r.charCodeAt(0)===35){const i=r.charCodeAt(1),a=i===120||i===88;return hj(r.slice(a?2:1),a?16:10)}return Hp(r)||t}const Oj={}.hasOwnProperty;function Xz(t,n,r){return typeof n!="string"&&(r=n,n=void 0),eH(r)(Kz(Yz(r).document().write(Gz()(t,n,!0))))}function eH(t){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(lr),autolinkProtocol:Q,autolinkEmail:Q,atxHeading:a(qn),blockQuote:a(ve),characterEscape:Q,characterReference:Q,codeFenced:a(He),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:a(He,l),codeText:a(at,l),codeTextData:Q,data:Q,codeFlowValue:Q,definition:a(Je),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:a(Pt),hardBreakEscape:a(fo),hardBreakTrailing:a(fo),htmlFlow:a(ar,l),htmlFlowData:Q,htmlText:a(ar,l),htmlTextData:Q,image:a(ii),label:l,link:a(lr),listItem:a(pn),listItemValue:b,listOrdered:a(sr,g),listUnordered:a(sr),paragraph:a(ai),reference:M,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:a(qn),strong:a(li),thematicBreak:a(Yn)},exit:{atxHeading:u(),atxHeadingSequence:I,autolink:u(),autolinkEmail:me,autolinkProtocol:oe,blockQuote:u(),characterEscapeValue:B,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:Pe,characterReference:$e,codeFenced:u(E),codeFencedFence:y,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:B,codeIndented:u(v),codeText:u(V),codeTextData:B,data:B,definition:u(),definitionDestinationString:D,definitionLabelString:k,definitionTitleString:C,emphasis:u(),hardBreakEscape:u(L),hardBreakTrailing:u(L),htmlFlow:u(_),htmlFlowData:B,htmlText:u(R),htmlTextData:B,image:u(U),label:X,labelText:J,lineEnding:F,link:u(H),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ie,resourceDestinationString:N,resourceTitleString:ae,resource:se,setextHeading:u(A),setextHeadingLineSequence:z,setextHeadingText:T,strong:u(),thematicBreak:u()}};Sj(n,(t||{}).mdastExtensions||[]);const r={};return o;function o(ee){let de={type:"root",children:[]};const Ie={stack:[de],tokenStack:[],config:n,enter:c,exit:d,buffer:l,resume:f,data:r},Ae=[];let ze=-1;for(;++ze<ee.length;)if(ee[ze][1].type==="listOrdered"||ee[ze][1].type==="listUnordered")if(ee[ze][0]==="enter")Ae.push(ze);else{const It=Ae.pop();ze=i(ee,It,ze)}for(ze=-1;++ze<ee.length;){const It=n[ee[ze][0]];Oj.call(It,ee[ze][1].type)&&It[ee[ze][1].type].call(Object.assign({sliceSerialize:ee[ze][2].sliceSerialize},Ie),ee[ze][1])}if(Ie.tokenStack.length>0){const It=Ie.tokenStack[Ie.tokenStack.length-1];(It[1]||w0).call(Ie,void 0,It[0])}for(de.position={start:dr(ee.length>0?ee[0][1].start:{line:1,column:1,offset:0}),end:dr(ee.length>0?ee[ee.length-2][1].end:{line:1,column:1,offset:0})},ze=-1;++ze<n.transforms.length;)de=n.transforms[ze](de)||de;return de}function i(ee,de,Ie){let Ae=de-1,ze=-1,It=!1,gn,Tt,Kn,Gn;for(;++Ae<=Ie;){const je=ee[Ae];switch(je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{je[0]==="enter"?ze++:ze--,Gn=void 0;break}case"lineEndingBlank":{je[0]==="enter"&&(gn&&!Gn&&!ze&&!Kn&&(Kn=Ae),Gn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Gn=void 0}if(!ze&&je[0]==="enter"&&je[1].type==="listItemPrefix"||ze===-1&&je[0]==="exit"&&(je[1].type==="listUnordered"||je[1].type==="listOrdered")){if(gn){let Lt=Ae;for(Tt=void 0;Lt--;){const Et=ee[Lt];if(Et[1].type==="lineEnding"||Et[1].type==="lineEndingBlank"){if(Et[0]==="exit")continue;Tt&&(ee[Tt][1].type="lineEndingBlank",It=!0),Et[1].type="lineEnding",Tt=Lt}else if(!(Et[1].type==="linePrefix"||Et[1].type==="blockQuotePrefix"||Et[1].type==="blockQuotePrefixWhitespace"||Et[1].type==="blockQuoteMarker"||Et[1].type==="listItemIndent"))break}Kn&&(!Tt||Kn<Tt)&&(gn._spread=!0),gn.end=Object.assign({},Tt?ee[Tt][1].start:je[1].end),ee.splice(Tt||Ae,0,["exit",gn,je[2]]),Ae++,Ie++}if(je[1].type==="listItemPrefix"){const Lt={type:"listItem",_spread:!1,start:Object.assign({},je[1].start),end:void 0};gn=Lt,ee.splice(Ae,0,["enter",Lt,je[2]]),Ae++,Ie++,Kn=void 0,Gn=!0}}}return ee[de][1]._spread=It,Ie}function a(ee,de){return Ie;function Ie(Ae){c.call(this,ee(Ae),Ae),de&&de.call(this,Ae)}}function l(){this.stack.push({type:"fragment",children:[]})}function c(ee,de,Ie){this.stack[this.stack.length-1].children.push(ee),this.stack.push(ee),this.tokenStack.push([de,Ie]),ee.position={start:dr(de.start),end:void 0}}function u(ee){return de;function de(Ie){ee&&ee.call(this,Ie),d.call(this,Ie)}}function d(ee,de){const Ie=this.stack.pop(),Ae=this.tokenStack.pop();if(Ae)Ae[0].type!==ee.type&&(de?de.call(this,ee,Ae[0]):(Ae[1]||w0).call(this,ee,Ae[0]));else throw new Error("Cannot close `"+ee.type+"` ("+Si({start:ee.start,end:ee.end})+"): it’s not open");Ie.position.end=dr(ee.end)}function f(){return Z_(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(ee){if(this.data.expectingFirstListItemValue){const de=this.stack[this.stack.length-2];de.start=Number.parseInt(this.sliceSerialize(ee),10),this.data.expectingFirstListItemValue=void 0}}function h(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.lang=ee}function m(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.meta=ee}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.value=ee.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.value=ee.replace(/(\r?\n|\r)$/g,"")}function k(ee){const de=this.resume(),Ie=this.stack[this.stack.length-1];Ie.label=de,Ie.identifier=To(this.sliceSerialize(ee)).toLowerCase()}function C(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.title=ee}function D(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.url=ee}function I(ee){const de=this.stack[this.stack.length-1];if(!de.depth){const Ie=this.sliceSerialize(ee).length;de.depth=Ie}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function z(ee){const de=this.stack[this.stack.length-1];de.depth=this.sliceSerialize(ee).codePointAt(0)===61?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function Q(ee){const Ie=this.stack[this.stack.length-1].children;let Ae=Ie[Ie.length-1];(!Ae||Ae.type!=="text")&&(Ae=Nr(),Ae.position={start:dr(ee.start),end:void 0},Ie.push(Ae)),this.stack.push(Ae)}function B(ee){const de=this.stack.pop();de.value+=this.sliceSerialize(ee),de.position.end=dr(ee.end)}function F(ee){const de=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Ie=de.children[de.children.length-1];Ie.position.end=dr(ee.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(de.type)&&(Q.call(this,ee),B.call(this,ee))}function L(){this.data.atHardBreak=!0}function _(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.value=ee}function R(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.value=ee}function V(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.value=ee}function H(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const de=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=de,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function U(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const de=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=de,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function J(ee){const de=this.sliceSerialize(ee),Ie=this.stack[this.stack.length-2];Ie.label=Jz(de),Ie.identifier=To(de).toLowerCase()}function X(){const ee=this.stack[this.stack.length-1],de=this.resume(),Ie=this.stack[this.stack.length-1];if(this.data.inReference=!0,Ie.type==="link"){const Ae=ee.children;Ie.children=Ae}else Ie.alt=de}function N(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.url=ee}function ae(){const ee=this.resume(),de=this.stack[this.stack.length-1];de.title=ee}function se(){this.data.inReference=void 0}function M(){this.data.referenceType="collapsed"}function ie(ee){const de=this.resume(),Ie=this.stack[this.stack.length-1];Ie.label=de,Ie.identifier=To(this.sliceSerialize(ee)).toLowerCase(),this.data.referenceType="full"}function ye(ee){this.data.characterReferenceType=ee.type}function Pe(ee){const de=this.sliceSerialize(ee),Ie=this.data.characterReferenceType;let Ae;Ie?(Ae=hj(de,Ie==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ae=Hp(de);const ze=this.stack[this.stack.length-1];ze.value+=Ae}function $e(ee){const de=this.stack.pop();de.position.end=dr(ee.end)}function oe(ee){B.call(this,ee);const de=this.stack[this.stack.length-1];de.url=this.sliceSerialize(ee)}function me(ee){B.call(this,ee);const de=this.stack[this.stack.length-1];de.url="mailto:"+this.sliceSerialize(ee)}function ve(){return{type:"blockquote",children:[]}}function He(){return{type:"code",lang:null,meta:null,value:""}}function at(){return{type:"inlineCode",value:""}}function Je(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Pt(){return{type:"emphasis",children:[]}}function qn(){return{type:"heading",depth:0,children:[]}}function fo(){return{type:"break"}}function ar(){return{type:"html",value:""}}function ii(){return{type:"image",title:null,url:"",alt:null}}function lr(){return{type:"link",title:null,url:"",children:[]}}function sr(ee){return{type:"list",ordered:ee.type==="listOrdered",start:null,spread:ee._spread,children:[]}}function pn(ee){return{type:"listItem",spread:ee._spread,checked:null,children:[]}}function ai(){return{type:"paragraph",children:[]}}function li(){return{type:"strong",children:[]}}function Nr(){return{type:"text",value:""}}function Yn(){return{type:"thematicBreak"}}}function dr(t){return{line:t.line,column:t.column,offset:t.offset}}function Sj(t,n){let r=-1;for(;++r<n.length;){const o=n[r];Array.isArray(o)?Sj(t,o):tH(t,o)}}function tH(t,n){let r;for(r in n)if(Oj.call(n,r))switch(r){case"canContainEols":{const o=n[r];o&&t[r].push(...o);break}case"transforms":{const o=n[r];o&&t[r].push(...o);break}case"enter":case"exit":{const o=n[r];o&&Object.assign(t[r],o);break}}}function w0(t,n){throw t?new Error("Cannot close `"+t.type+"` ("+Si({start:t.start,end:t.end})+"): a different token (`"+n.type+"`, "+Si({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Si({start:n.start,end:n.end})+") is still open")}function nH(t){const n=this;n.parser=r;function r(o){return Xz(o,{...n.data("settings"),...t,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function rH(t,n){const r={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(n),!0)};return t.patch(n,r),t.applyData(n,r)}function oH(t,n){const r={type:"element",tagName:"br",properties:{},children:[]};return t.patch(n,r),[t.applyData(n,r),{type:"text",value:`
`}]}function iH(t,n){const r=n.value?n.value+`
`:"",o={};n.lang&&(o.className=["language-"+n.lang]);let i={type:"element",tagName:"code",properties:o,children:[{type:"text",value:r}]};return n.meta&&(i.data={meta:n.meta}),t.patch(n,i),i=t.applyData(n,i),i={type:"element",tagName:"pre",properties:{},children:[i]},t.patch(n,i),i}function aH(t,n){const r={type:"element",tagName:"del",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function lH(t,n){const r={type:"element",tagName:"em",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function sH(t,n){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(n.identifier).toUpperCase(),i=oi(o.toLowerCase()),a=t.footnoteOrder.indexOf(o);let l,c=t.footnoteCounts.get(o);c===void 0?(c=0,t.footnoteOrder.push(o),l=t.footnoteOrder.length):l=a+1,c+=1,t.footnoteCounts.set(o,c);const u={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+i,id:r+"fnref-"+i+(c>1?"-"+c:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};t.patch(n,u);const d={type:"element",tagName:"sup",properties:{},children:[u]};return t.patch(n,d),t.applyData(n,d)}function cH(t,n){const r={type:"element",tagName:"h"+n.depth,properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function uH(t,n){if(t.options.allowDangerousHtml){const r={type:"raw",value:n.value};return t.patch(n,r),t.applyData(n,r)}}function Cj(t,n){const r=n.referenceType;let o="]";if(r==="collapsed"?o+="[]":r==="full"&&(o+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+o}];const i=t.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=o:i.push({type:"text",value:o}),i}function dH(t,n){const r=String(n.identifier).toUpperCase(),o=t.definitionById.get(r);if(!o)return Cj(t,n);const i={src:oi(o.url||""),alt:n.alt};o.title!==null&&o.title!==void 0&&(i.title=o.title);const a={type:"element",tagName:"img",properties:i,children:[]};return t.patch(n,a),t.applyData(n,a)}function fH(t,n){const r={src:oi(n.url)};n.alt!==null&&n.alt!==void 0&&(r.alt=n.alt),n.title!==null&&n.title!==void 0&&(r.title=n.title);const o={type:"element",tagName:"img",properties:r,children:[]};return t.patch(n,o),t.applyData(n,o)}function pH(t,n){const r={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};t.patch(n,r);const o={type:"element",tagName:"code",properties:{},children:[r]};return t.patch(n,o),t.applyData(n,o)}function gH(t,n){const r=String(n.identifier).toUpperCase(),o=t.definitionById.get(r);if(!o)return Cj(t,n);const i={href:oi(o.url||"")};o.title!==null&&o.title!==void 0&&(i.title=o.title);const a={type:"element",tagName:"a",properties:i,children:t.all(n)};return t.patch(n,a),t.applyData(n,a)}function hH(t,n){const r={href:oi(n.url)};n.title!==null&&n.title!==void 0&&(r.title=n.title);const o={type:"element",tagName:"a",properties:r,children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function mH(t,n,r){const o=t.all(n),i=r?bH(r):Pj(n),a={},l=[];if(typeof n.checked=="boolean"){const f=o[0];let g;f&&f.type==="element"&&f.tagName==="p"?g=f:(g={type:"element",tagName:"p",properties:{},children:[]},o.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let c=-1;for(;++c<o.length;){const f=o[c];(i||c!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?l.push(...f.children):l.push(f)}const u=o[o.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:a,children:l};return t.patch(n,d),t.applyData(n,d)}function bH(t){let n=!1;if(t.type==="list"){n=t.spread||!1;const r=t.children;let o=-1;for(;!n&&++o<r.length;)n=Pj(r[o])}return n}function Pj(t){const n=t.spread;return n??t.children.length>1}function vH(t,n){const r={},o=t.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(r.start=n.start);++i<o.length;){const l=o[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:r,children:t.wrap(o,!0)};return t.patch(n,a),t.applyData(n,a)}function yH(t,n){const r={type:"element",tagName:"p",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function wH(t,n){const r={type:"root",children:t.wrap(t.all(n))};return t.patch(n,r),t.applyData(n,r)}function xH(t,n){const r={type:"element",tagName:"strong",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}function jH(t,n){const r=t.all(n),o=r.shift(),i=[];if(o){const l={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(n.children[0],l),i.push(l)}if(r.length>0){const l={type:"element",tagName:"tbody",properties:{},children:t.wrap(r,!0)},c=Ap(n.children[1]),u=sj(n.children[n.children.length-1]);c&&u&&(l.position={start:c,end:u}),i.push(l)}const a={type:"element",tagName:"table",properties:{},children:t.wrap(i,!0)};return t.patch(n,a),t.applyData(n,a)}function EH(t,n,r){const o=r?r.children:void 0,a=(o?o.indexOf(n):1)===0?"th":"td",l=r&&r.type==="table"?r.align:void 0,c=l?l.length:n.children.length;let u=-1;const d=[];for(;++u<c;){const g=n.children[u],b={},h=l?l[u]:void 0;h&&(b.align=h);let m={type:"element",tagName:a,properties:b,children:[]};g&&(m.children=t.all(g),t.patch(g,m),m=t.applyData(g,m)),d.push(m)}const f={type:"element",tagName:"tr",properties:{},children:t.wrap(d,!0)};return t.patch(n,f),t.applyData(n,f)}function kH(t,n){const r={type:"element",tagName:"td",properties:{},children:t.all(n)};return t.patch(n,r),t.applyData(n,r)}const x0=9,j0=32;function OH(t){const n=String(t),r=/\r?\n|\r/g;let o=r.exec(n),i=0;const a=[];for(;o;)a.push(E0(n.slice(i,o.index),i>0,!0),o[0]),i=o.index+o[0].length,o=r.exec(n);return a.push(E0(n.slice(i),i>0,!1)),a.join("")}function E0(t,n,r){let o=0,i=t.length;if(n){let a=t.codePointAt(o);for(;a===x0||a===j0;)o++,a=t.codePointAt(o)}if(r){let a=t.codePointAt(i-1);for(;a===x0||a===j0;)i--,a=t.codePointAt(i-1)}return i>o?t.slice(o,i):""}function SH(t,n){const r={type:"text",value:OH(String(n.value))};return t.patch(n,r),t.applyData(n,r)}function CH(t,n){const r={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(n,r),t.applyData(n,r)}const PH={blockquote:rH,break:oH,code:iH,delete:aH,emphasis:lH,footnoteReference:sH,heading:cH,html:uH,imageReference:dH,image:fH,inlineCode:pH,linkReference:gH,link:hH,listItem:mH,list:vH,paragraph:yH,root:wH,strong:xH,table:jH,tableCell:kH,tableRow:EH,text:SH,thematicBreak:CH,toml:Ta,yaml:Ta,definition:Ta,footnoteDefinition:Ta};function Ta(){}const Ij=-1,cs=0,Sl=1,Cl=2,Wp=3,Up=4,qp=5,Yp=6,Tj=7,Dj=8,k0=typeof self=="object"?self:globalThis,IH=(t,n)=>{const r=(i,a)=>(t.set(a,i),i),o=i=>{if(t.has(i))return t.get(i);const[a,l]=n[i];switch(a){case cs:case Ij:return r(l,i);case Sl:{const c=r([],i);for(const u of l)c.push(o(u));return c}case Cl:{const c=r({},i);for(const[u,d]of l)c[o(u)]=o(d);return c}case Wp:return r(new Date(l),i);case Up:{const{source:c,flags:u}=l;return r(new RegExp(c,u),i)}case qp:{const c=r(new Map,i);for(const[u,d]of l)c.set(o(u),o(d));return c}case Yp:{const c=r(new Set,i);for(const u of l)c.add(o(u));return c}case Tj:{const{name:c,message:u}=l;return r(new k0[c](u),i)}case Dj:return r(BigInt(l),i);case"BigInt":return r(Object(BigInt(l)),i)}return r(new k0[a](l),i)};return o},O0=t=>IH(new Map,t)(0),ho="",{toString:TH}={},{keys:DH}=Object,mi=t=>{const n=typeof t;if(n!=="object"||!t)return[cs,n];const r=TH.call(t).slice(8,-1);switch(r){case"Array":return[Sl,ho];case"Object":return[Cl,ho];case"Date":return[Wp,ho];case"RegExp":return[Up,ho];case"Map":return[qp,ho];case"Set":return[Yp,ho]}return r.includes("Array")?[Sl,r]:r.includes("Error")?[Tj,r]:[Cl,r]},Da=([t,n])=>t===cs&&(n==="function"||n==="symbol"),MH=(t,n,r,o)=>{const i=(l,c)=>{const u=o.push(l)-1;return r.set(c,u),u},a=l=>{if(r.has(l))return r.get(l);let[c,u]=mi(l);switch(c){case cs:{let f=l;switch(u){case"bigint":c=Dj,f=l.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+u);f=null;break;case"undefined":return i([Ij],l)}return i([c,f],l)}case Sl:{if(u)return i([u,[...l]],l);const f=[],g=i([c,f],l);for(const b of l)f.push(a(b));return g}case Cl:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(n&&"toJSON"in l)return a(l.toJSON());const f=[],g=i([c,f],l);for(const b of DH(l))(t||!Da(mi(l[b])))&&f.push([a(b),a(l[b])]);return g}case Wp:return i([c,l.toISOString()],l);case Up:{const{source:f,flags:g}=l;return i([c,{source:f,flags:g}],l)}case qp:{const f=[],g=i([c,f],l);for(const[b,h]of l)(t||!(Da(mi(b))||Da(mi(h))))&&f.push([a(b),a(h)]);return g}case Yp:{const f=[],g=i([c,f],l);for(const b of l)(t||!Da(mi(b)))&&f.push(a(b));return g}}const{message:d}=l;return i([c,{name:u,message:d}],l)};return a},S0=(t,{json:n,lossy:r}={})=>{const o=[];return MH(!(n||r),!!n,new Map,o)(t),o},Pl=typeof structuredClone=="function"?(t,n)=>n&&("json"in n||"lossy"in n)?O0(S0(t,n)):structuredClone(t):(t,n)=>O0(S0(t,n));function NH(t,n){const r=[{type:"text",value:"↩"}];return n>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),r}function RH(t,n){return"Back to reference "+(t+1)+(n>1?"-"+n:"")}function FH(t){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=t.options.footnoteBackContent||NH,o=t.options.footnoteBackLabel||RH,i=t.options.footnoteLabel||"Footnotes",a=t.options.footnoteLabelTagName||"h2",l=t.options.footnoteLabelProperties||{className:["sr-only"]},c=[];let u=-1;for(;++u<t.footnoteOrder.length;){const d=t.footnoteById.get(t.footnoteOrder[u]);if(!d)continue;const f=t.all(d),g=String(d.identifier).toUpperCase(),b=oi(g.toLowerCase());let h=0;const m=[],y=t.footnoteCounts.get(g);for(;y!==void 0&&++h<=y;){m.length>0&&m.push({type:"text",value:" "});let k=typeof r=="string"?r:r(u,h);typeof k=="string"&&(k={type:"text",value:k}),m.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+b+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(u,h),className:["data-footnote-backref"]},children:Array.isArray(k)?k:[k]})}const E=f[f.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const k=E.children[E.children.length-1];k&&k.type==="text"?k.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...m)}else f.push(...m);const v={type:"element",tagName:"li",properties:{id:n+"fn-"+b},children:t.wrap(f,!0)};t.patch(d,v),c.push(v)}if(c.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Pl(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(c,!0)},{type:"text",value:`
`}]}}const Mj=function(t){if(t==null)return $H;if(typeof t=="function")return us(t);if(typeof t=="object")return Array.isArray(t)?LH(t):AH(t);if(typeof t=="string")return _H(t);throw new Error("Expected function, string, or object as test")};function LH(t){const n=[];let r=-1;for(;++r<t.length;)n[r]=Mj(t[r]);return us(o);function o(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function AH(t){const n=t;return us(r);function r(o){const i=o;let a;for(a in t)if(i[a]!==n[a])return!1;return!0}}function _H(t){return us(n);function n(r){return r&&r.type===t}}function us(t){return n;function n(r,o,i){return!!(zH(r)&&t.call(this,r,typeof o=="number"?o:void 0,i||void 0))}}function $H(){return!0}function zH(t){return t!==null&&typeof t=="object"&&"type"in t}const Nj=[],HH=!0,C0=!1,BH="skip";function VH(t,n,r,o){let i;typeof n=="function"&&typeof r!="function"?(o=r,r=n):i=n;const a=Mj(i),l=o?-1:1;c(t,void 0,[])();function c(u,d,f){const g=u&&typeof u=="object"?u:{};if(typeof g.type=="string"){const h=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return b;function b(){let h=Nj,m,y,E;if((!n||a(u,d,f[f.length-1]||void 0))&&(h=WH(r(u,f)),h[0]===C0))return h;if("children"in u&&u.children){const v=u;if(v.children&&h[0]!==BH)for(y=(o?v.children.length:-1)+l,E=f.concat(v);y>-1&&y<v.children.length;){const k=v.children[y];if(m=c(k,y,E)(),m[0]===C0)return m;y=typeof m[1]=="number"?m[1]:y+l}}return h}}}function WH(t){return Array.isArray(t)?t:typeof t=="number"?[HH,t]:t==null?Nj:[t]}function Rj(t,n,r,o){let i,a,l;typeof n=="function"&&typeof r!="function"?(a=void 0,l=n,i=r):(a=n,l=r,i=o),VH(t,a,c,i);function c(u,d){const f=d[d.length-1],g=f?f.children.indexOf(u):void 0;return l(u,g,f)}}const Of={}.hasOwnProperty,UH={};function qH(t,n){const r=n||UH,o=new Map,i=new Map,a=new Map,l={...PH,...r.handlers},c={all:d,applyData:KH,definitionById:o,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:l,one:u,options:r,patch:YH,wrap:QH};return Rj(t,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const g=f.type==="definition"?o:i,b=String(f.identifier).toUpperCase();g.has(b)||g.set(b,f)}}),c;function u(f,g){const b=f.type,h=c.handlers[b];if(Of.call(c.handlers,b)&&h)return h(c,f,g);if(c.options.passThrough&&c.options.passThrough.includes(b)){if("children"in f){const{children:y,...E}=f,v=Pl(E);return v.children=c.all(f),v}return Pl(f)}return(c.options.unknownHandler||GH)(c,f,g)}function d(f){const g=[];if("children"in f){const b=f.children;let h=-1;for(;++h<b.length;){const m=c.one(b[h],f);if(m){if(h&&b[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=P0(m.value)),!Array.isArray(m)&&m.type==="element")){const y=m.children[0];y&&y.type==="text"&&(y.value=P0(y.value))}Array.isArray(m)?g.push(...m):g.push(m)}}}return g}}function YH(t,n){t.position&&(n.position=P_(t))}function KH(t,n){let r=n;if(t&&t.data){const o=t.data.hName,i=t.data.hChildren,a=t.data.hProperties;if(typeof o=="string")if(r.type==="element")r.tagName=o;else{const l="children"in r?r.children:[r];r={type:"element",tagName:o,properties:{},children:l}}r.type==="element"&&a&&Object.assign(r.properties,Pl(a)),"children"in r&&r.children&&i!==null&&i!==void 0&&(r.children=i)}return r}function GH(t,n){const r=n.data||{},o="value"in n&&!(Of.call(r,"hProperties")||Of.call(r,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:t.all(n)};return t.patch(n,o),t.applyData(n,o)}function QH(t,n){const r=[];let o=-1;for(n&&r.push({type:"text",value:`
`});++o<t.length;)o&&r.push({type:"text",value:`
`}),r.push(t[o]);return n&&t.length>0&&r.push({type:"text",value:`
`}),r}function P0(t){let n=0,r=t.charCodeAt(n);for(;r===9||r===32;)n++,r=t.charCodeAt(n);return t.slice(n)}function I0(t,n){const r=qH(t,n),o=r.one(t,void 0),i=FH(r),a=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function JH(t,n){return t&&"run"in t?async function(r,o){const i=I0(r,{file:o,...n});await t.run(i,o)}:function(r,o){return I0(r,{file:o,...t||n})}}function T0(t){if(t)throw t}var Wa=Object.prototype.hasOwnProperty,Fj=Object.prototype.toString,D0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,N0=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Fj.call(n)==="[object Array]"},R0=function(n){if(!n||Fj.call(n)!=="[object Object]")return!1;var r=Wa.call(n,"constructor"),o=n.constructor&&n.constructor.prototype&&Wa.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!r&&!o)return!1;var i;for(i in n);return typeof i>"u"||Wa.call(n,i)},F0=function(n,r){D0&&r.name==="__proto__"?D0(n,r.name,{enumerable:!0,configurable:!0,value:r.newValue,writable:!0}):n[r.name]=r.newValue},L0=function(n,r){if(r==="__proto__")if(Wa.call(n,r)){if(M0)return M0(n,r).value}else return;return n[r]},ZH=function t(){var n,r,o,i,a,l,c=arguments[0],u=1,d=arguments.length,f=!1;for(typeof c=="boolean"&&(f=c,c=arguments[1]||{},u=2),(c==null||typeof c!="object"&&typeof c!="function")&&(c={});u<d;++u)if(n=arguments[u],n!=null)for(r in n)o=L0(c,r),i=L0(n,r),c!==i&&(f&&i&&(R0(i)||(a=N0(i)))?(a?(a=!1,l=o&&N0(o)?o:[]):l=o&&R0(o)?o:{},F0(c,{name:r,newValue:t(f,l,i)})):typeof i<"u"&&F0(c,{name:r,newValue:i}));return c};const vc=Tl(ZH);function Sf(t){if(typeof t!="object"||t===null)return!1;const n=Object.getPrototypeOf(t);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function XH(){const t=[],n={run:r,use:o};return n;function r(...i){let a=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);c(null,...i);function c(u,...d){const f=t[++a];let g=-1;if(u){l(u);return}for(;++g<i.length;)(d[g]===null||d[g]===void 0)&&(d[g]=i[g]);i=d,f?eB(f,c)(...d):l(null,...d)}}function o(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return t.push(i),n}}function eB(t,n){let r;return o;function o(...l){const c=t.length>l.length;let u;c&&l.push(i);try{u=t.apply(this,l)}catch(d){const f=d;if(c&&r)throw f;return i(f)}c||(u&&u.then&&typeof u.then=="function"?u.then(a,i):u instanceof Error?i(u):a(u))}function i(l,...c){r||(r=!0,n(l,...c))}function a(l){i(null,l)}}const Cn={basename:tB,dirname:nB,extname:rB,join:oB,sep:"/"};function tB(t,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');sa(t);let r=0,o=-1,i=t.length,a;if(n===void 0||n.length===0||n.length>t.length){for(;i--;)if(t.codePointAt(i)===47){if(a){r=i+1;break}}else o<0&&(a=!0,o=i+1);return o<0?"":t.slice(r,o)}if(n===t)return"";let l=-1,c=n.length-1;for(;i--;)if(t.codePointAt(i)===47){if(a){r=i+1;break}}else l<0&&(a=!0,l=i+1),c>-1&&(t.codePointAt(i)===n.codePointAt(c--)?c<0&&(o=i):(c=-1,o=l));return r===o?o=l:o<0&&(o=t.length),t.slice(r,o)}function nB(t){if(sa(t),t.length===0)return".";let n=-1,r=t.length,o;for(;--r;)if(t.codePointAt(r)===47){if(o){n=r;break}}else o||(o=!0);return n<0?t.codePointAt(0)===47?"/":".":n===1&&t.codePointAt(0)===47?"//":t.slice(0,n)}function rB(t){sa(t);let n=t.length,r=-1,o=0,i=-1,a=0,l;for(;n--;){const c=t.codePointAt(n);if(c===47){if(l){o=n+1;break}continue}r<0&&(l=!0,r=n+1),c===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||r<0||a===0||a===1&&i===r-1&&i===o+1?"":t.slice(i,r)}function oB(...t){let n=-1,r;for(;++n<t.length;)sa(t[n]),t[n]&&(r=r===void 0?t[n]:r+"/"+t[n]);return r===void 0?".":iB(r)}function iB(t){sa(t);const n=t.codePointAt(0)===47;let r=aB(t,!n);return r.length===0&&!n&&(r="."),r.length>0&&t.codePointAt(t.length-1)===47&&(r+="/"),n?"/"+r:r}function aB(t,n){let r="",o=0,i=-1,a=0,l=-1,c,u;for(;++l<=t.length;){if(l<t.length)c=t.codePointAt(l);else{if(c===47)break;c=47}if(c===47){if(!(i===l-1||a===1))if(i!==l-1&&a===2){if(r.length<2||o!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(u=r.lastIndexOf("/"),u!==r.length-1){u<0?(r="",o=0):(r=r.slice(0,u),o=r.length-1-r.lastIndexOf("/")),i=l,a=0;continue}}else if(r.length>0){r="",o=0,i=l,a=0;continue}}n&&(r=r.length>0?r+"/..":"..",o=2)}else r.length>0?r+="/"+t.slice(i+1,l):r=t.slice(i+1,l),o=l-i-1;i=l,a=0}else c===46&&a>-1?a++:a=-1}return r}function sa(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const lB={cwd:sB};function sB(){return"/"}function Cf(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function cB(t){if(typeof t=="string")t=new URL(t);else if(!Cf(t)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(t.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return uB(t)}function uB(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const n=t.pathname;let r=-1;for(;++r<n.length;)if(n.codePointAt(r)===37&&n.codePointAt(r+1)===50){const o=n.codePointAt(r+2);if(o===70||o===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const yc=["history","path","basename","stem","extname","dirname"];class Lj{constructor(n){let r;n?Cf(n)?r={path:n}:typeof n=="string"||dB(n)?r={value:n}:r=n:r={},this.cwd="cwd"in r?"":lB.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<yc.length;){const a=yc[o];a in r&&r[a]!==void 0&&r[a]!==null&&(this[a]=a==="history"?[...r[a]]:r[a])}let i;for(i in r)yc.includes(i)||(this[i]=r[i])}get basename(){return typeof this.path=="string"?Cn.basename(this.path):void 0}set basename(n){xc(n,"basename"),wc(n,"basename"),this.path=Cn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Cn.dirname(this.path):void 0}set dirname(n){A0(this.basename,"dirname"),this.path=Cn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Cn.extname(this.path):void 0}set extname(n){if(wc(n,"extname"),A0(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Cn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Cf(n)&&(n=cB(n)),xc(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Cn.basename(this.path,this.extname):void 0}set stem(n){xc(n,"stem"),wc(n,"stem"),this.path=Cn.join(this.dirname||"",n+(this.extname||""))}fail(n,r,o){const i=this.message(n,r,o);throw i.fatal=!0,i}info(n,r,o){const i=this.message(n,r,o);return i.fatal=void 0,i}message(n,r,o){const i=new Ct(n,r,o);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function wc(t,n){if(t&&t.includes(Cn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Cn.sep+"`")}function xc(t,n){if(!t)throw new Error("`"+n+"` cannot be empty")}function A0(t,n){if(!t)throw new Error("Setting `"+n+"` requires `path` to be set too")}function dB(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const fB=function(t){const o=this.constructor.prototype,i=o[t],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,o),a},pB={}.hasOwnProperty;class Kp extends fB{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=XH()}copy(){const n=new Kp;let r=-1;for(;++r<this.attachers.length;){const o=this.attachers[r];n.use(...o)}return n.data(vc(!0,{},this.namespace)),n}data(n,r){return typeof n=="string"?arguments.length===2?(kc("data",this.frozen),this.namespace[n]=r,this):pB.call(this.namespace,n)&&this.namespace[n]||void 0:n?(kc("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const i=r.call(n,...o);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const r=Ma(n),o=this.parser||this.Parser;return jc("parse",o),o(String(r),r)}process(n,r){const o=this;return this.freeze(),jc("process",this.parser||this.Parser),Ec("process",this.compiler||this.Compiler),r?i(void 0,r):new Promise(i);function i(a,l){const c=Ma(n),u=o.parse(c);o.run(u,c,function(f,g,b){if(f||!g||!b)return d(f);const h=g,m=o.stringify(h,b);mB(m)?b.value=m:b.result=m,d(f,b)});function d(f,g){f||!g?l(f):a?a(g):r(void 0,g)}}}processSync(n){let r=!1,o;return this.freeze(),jc("processSync",this.parser||this.Parser),Ec("processSync",this.compiler||this.Compiler),this.process(n,i),$0("processSync","process",r),o;function i(a,l){r=!0,T0(a),o=l}}run(n,r,o){_0(n),this.freeze();const i=this.transformers;return!o&&typeof r=="function"&&(o=r,r=void 0),o?a(void 0,o):new Promise(a);function a(l,c){const u=Ma(r);i.run(n,u,d);function d(f,g,b){const h=g||n;f?c(f):l?l(h):o(void 0,h,b)}}}runSync(n,r){let o=!1,i;return this.run(n,r,a),$0("runSync","run",o),i;function a(l,c){T0(l),i=c,o=!0}}stringify(n,r){this.freeze();const o=Ma(r),i=this.compiler||this.Compiler;return Ec("stringify",i),_0(n),i(n,o)}use(n,...r){const o=this.attachers,i=this.namespace;if(kc("use",this.frozen),n!=null)if(typeof n=="function")u(n,r);else if(typeof n=="object")Array.isArray(n)?c(n):l(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(d){if(typeof d=="function")u(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[f,...g]=d;u(f,g)}else l(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function l(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(d.plugins),d.settings&&(i.settings=vc(!0,i.settings,d.settings))}function c(d){let f=-1;if(d!=null)if(Array.isArray(d))for(;++f<d.length;){const g=d[f];a(g)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function u(d,f){let g=-1,b=-1;for(;++g<o.length;)if(o[g][0]===d){b=g;break}if(b===-1)o.push([d,...f]);else if(f.length>0){let[h,...m]=f;const y=o[b][1];Sf(y)&&Sf(h)&&(h=vc(!0,y,h)),o[b]=[d,h,...m]}}}}const gB=new Kp().freeze();function jc(t,n){if(typeof n!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Ec(t,n){if(typeof n!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function kc(t,n){if(n)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function _0(t){if(!Sf(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function $0(t,n,r){if(!r)throw new Error("`"+t+"` finished async. Use `"+n+"` instead")}function Ma(t){return hB(t)?t:new Lj(t)}function hB(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function mB(t){return typeof t=="string"||bB(t)}function bB(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const vB="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",z0=[],H0={allowDangerousHtml:!0},yB=/^(https?|ircs?|mailto|xmpp)$/i,wB=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function xB(t){const n=t.allowedElements,r=t.allowElement,o=t.children||"",i=t.className,a=t.components,l=t.disallowedElements,c=t.rehypePlugins||z0,u=t.remarkPlugins||z0,d=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...H0}:H0,f=t.skipHtml,g=t.unwrapDisallowed,b=t.urlTransform||jB,h=gB().use(nH).use(u).use(JH,d).use(c),m=new Lj;typeof o=="string"&&(m.value=o);for(const k of wB)Object.hasOwn(t,k.from)&&(""+k.from+(k.to?"use `"+k.to+"` instead":"remove it")+vB+k.id,void 0);const y=h.parse(m);let E=h.runSync(y,m);return i&&(E={type:"element",tagName:"div",properties:{className:i},children:E.type==="root"?E.children:[E]}),Rj(E,v),R_(E,{Fragment:G.Fragment,components:a,ignoreInvalidStyle:!0,jsx:G.jsx,jsxs:G.jsxs,passKeys:!0,passNode:!0});function v(k,C,D){if(k.type==="raw"&&D&&typeof C=="number")return f?D.children.splice(C,1):D.children[C]={type:"text",value:k.value},C;if(k.type==="element"){let I;for(I in hc)if(Object.hasOwn(hc,I)&&Object.hasOwn(k.properties,I)){const T=k.properties[I],z=hc[I];(z===null||z.includes(k.tagName))&&(k.properties[I]=b(String(T||""),I,k))}}if(k.type==="element"){let I=n?!n.includes(k.tagName):l?l.includes(k.tagName):!1;if(!I&&r&&typeof C=="number"&&(I=!r(k,C,D)),I&&D&&typeof C=="number")return g&&k.children?D.children.splice(C,1,...k.children):D.children.splice(C,1),C}}}function jB(t){const n=t.indexOf(":"),r=t.indexOf("?"),o=t.indexOf("#"),i=t.indexOf("/");return n<0||i>-1&&n>i||r>-1&&n>r||o>-1&&n>o||yB.test(t.slice(0,n))?t:""}const EB=({violation:t})=>t!=null&&t.object_identity?G.jsxs(Ln,{direction:"vertical",gap:"2",children:[Object.keys(t.object_identity).map(n=>G.jsx("div",{className:"whitespace-nowrap",children:G.jsx(mf,{name:n,value:Xo(t.object_identity[n])})},n)),t.severity&&G.jsx("div",{className:"whitespace-nowrap",children:G.jsx(mf,{name:"severity",value:t.severity})})]}):null,qe=1,Aj=2,_j=4,wt=8,Pf=16,Na=32,Fn=64,If={a:{content:qe|wt,self:!1,type:qe|wt|Na|Fn},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:qe|wt,void:!0},body:{content:qe|Aj|_j|wt|Pf|Na|Fn},button:{content:wt,type:qe|wt|Na|Fn},caption:{content:qe,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:qe|Na|Fn},dd:{content:qe,parent:["dl"]},dl:{children:["dt","dd"],type:qe},dt:{content:qe,invalid:["footer","header"],parent:["dl"]},figcaption:{content:qe,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:qe,void:!0},img:{void:!0},li:{content:qe,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:qe},picture:{children:["source","img"],type:qe|wt|Pf},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:wt,parent:["ruby","rtc"]},rtc:{content:wt,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:wt,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:qe},tbody:{parent:["table"],children:["tr"]},td:{content:qe,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:qe,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:qe},video:{children:["track","source"]},wbr:{type:qe|wt,void:!0}};function uo(t){return n=>{If[n]={...t,...If[n]}}}["address","main","div","figure","p","pre"].forEach(uo({content:qe,type:qe|Fn}));["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(uo({content:wt,type:qe|wt|Fn}));["p","pre"].forEach(uo({content:wt,type:qe|Fn}));["s","small","span","del","ins"].forEach(uo({content:wt,type:qe|wt}));["article","aside","footer","header","nav","section","blockquote"].forEach(uo({content:qe,type:qe|Aj|Fn}));["h1","h2","h3","h4","h5","h6"].forEach(uo({content:wt,type:qe|_j|Fn}));["audio","canvas","iframe","img","video"].forEach(uo({type:qe|wt|Pf|Fn}));const Tf=Object.freeze(If),kB=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],OB=Object.keys(Tf).filter(t=>t!=="canvas"&&t!=="iframe"),Xe=1,SB=2,wi=3,vo=4,$j=5,B0=Object.freeze({alt:Xe,cite:Xe,class:Xe,colspan:wi,controls:vo,datetime:Xe,default:vo,disabled:vo,dir:Xe,height:Xe,href:Xe,id:Xe,kind:Xe,label:Xe,lang:Xe,loading:Xe,loop:vo,media:Xe,muted:vo,poster:Xe,rel:Xe,role:Xe,rowspan:wi,scope:Xe,sizes:Xe,span:wi,start:wi,style:$j,src:Xe,srclang:Xe,srcset:Xe,tabindex:Xe,target:Xe,title:Xe,type:Xe,width:Xe}),CB=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex"});function Il(){return Il=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Il.apply(this,arguments)}function zj({attributes:t={},className:n,children:r=null,selfClose:o=!1,tagName:i}){const a=i;return o?O.createElement(a,Il({className:n},t)):O.createElement(a,Il({className:n},t),r)}class PB{attribute(n,r){return r}node(n,r){return r}}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var IB=/["'&<>]/,TB=DB;function DB(t){var n=""+t,r=IB.exec(n);if(!r)return n;var o,i="",a=0,l=0;for(a=r.index;a<n.length;a++){switch(n.charCodeAt(a)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}l!==a&&(i+=n.substring(l,a)),l=a+1,i+=o}return l!==a?i+n.substring(l,a):i}const MB=Tl(TB);function Zn(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}const NB=/(url|image|image-set)\(/i;class RB extends PB{attribute(n,r){return n==="style"&&Object.keys(r).forEach(o=>{String(r[o]).match(NB)&&delete r[o]}),r}}const V0=1,FB=3,LB=/^<(!doctype|(html|head|body)(\s|>))/i,AB=/^(aria-|data-|\w+:)/iu,_B=/{{{(\w+)\/?}}}/;function $B(){if(!(typeof window>"u"||typeof document>"u"))return document.implementation.createHTMLDocument("Interweave")}class Hj{constructor(n,r={},o=[],i=[]){var a;Zn(this,"allowed",void 0),Zn(this,"banned",void 0),Zn(this,"blocked",void 0),Zn(this,"container",void 0),Zn(this,"content",[]),Zn(this,"props",void 0),Zn(this,"matchers",void 0),Zn(this,"filters",void 0),Zn(this,"keyIndex",void 0),this.props=r,this.matchers=o,this.filters=[...i,new RB],this.keyIndex=-1,this.container=this.createContainer(n||""),this.allowed=new Set((a=r.allowList)!==null&&a!==void 0?a:OB),this.banned=new Set(kB),this.blocked=new Set(r.blockList)}applyAttributeFilters(n,r){return this.filters.reduce((o,i)=>o!==null&&typeof i.attribute=="function"?i.attribute(n,o):o,r)}applyNodeFilters(n,r){return this.filters.reduce((o,i)=>o!==null&&typeof i.node=="function"?i.node(n,o):o,r)}applyMatchers(n,r){const o={},{props:i}=this;let a=n,l=0,c=null;return this.matchers.forEach(u=>{const d=u.asTag().toLowerCase(),f=this.getTagConfig(d);if(i[u.inverseName]||!this.isTagAllowed(d)||!this.canRenderChild(r,f))return;let g="";for(;a&&(c=u.match(a));){const{index:b,length:h,match:m,valid:y,void:E,...v}=c,k=u.propName+String(l);b>0&&(g+=a.slice(0,b)),y?(g+=E?`{{{${k}/}}}`:`{{{${k}}}}${m}{{{/${k}}}}`,this.keyIndex+=1,l+=1,o[k]={children:m,matcher:u,props:{...i,...v,key:this.keyIndex}}):g+=m,u.greedy?(a=g+a.slice(b+h),g=""):a=a.slice(b+(h||m.length))}u.greedy||(a=g+a)}),l===0?n:this.replaceTokens(a,o)}canRenderChild(n,r){return!n.tagName||!r.tagName||n.void?!1:n.children.length>0?n.children.includes(r.tagName):n.invalid.length>0&&n.invalid.includes(r.tagName)?!1:r.parent.length>0?r.parent.includes(n.tagName):!n.self&&n.tagName===r.tagName?!1:!!(n&&n.content&r.type)}convertLineBreaks(n){const{noHtml:r,disableLineBreaks:o}=this.props;if(r||o||n.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return n;let i=n.replace(/\r\n/g,`
`);return i=i.replace(/\n{3,}/g,`


`),i=i.replace(/\n/g,"<br/>"),i}createContainer(n){var r;const i=(typeof global<"u"&&global.INTERWEAVE_SSR_POLYFILL||$B)();if(!i)return;const a=(r=this.props.containerTagName)!==null&&r!==void 0?r:"body",l=a==="body"||a==="fragment"?i.body:i.createElement(a);return n.match(LB)||(l.innerHTML=this.convertLineBreaks(this.props.escapeHtml?MB(n):n)),l}extractAttributes(n){const{allowAttributes:r}=this.props,o={};let i=0;return n.nodeType!==V0||!n.attributes||([...n.attributes].forEach(a=>{const{name:l,value:c}=a,u=l.toLowerCase(),d=B0[u]||B0[l];if(!this.isSafe(n)||!u.match(AB)&&(!r&&(!d||d===SB)||u.startsWith("on")||c.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))return;let f=u==="style"?this.extractStyleAttribute(n):c;d===vo?f=!0:d===wi?f=Number.parseFloat(String(f)):d!==$j&&(f=String(f)),o[CB[u]||u]=this.applyAttributeFilters(u,f),i+=1}),i===0)?null:o}extractStyleAttribute(n){const r={};return Array.from(n.style).forEach(o=>{const i=n.style[o];(typeof i=="string"||typeof i=="number")&&(r[o.replace(/-([a-z])/g,(a,l)=>String(l).toUpperCase())]=i)}),r}getTagConfig(n){const r={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return Tf[n]?{...r,...Tf[n],tagName:n}:r}isSafe(n){if(typeof HTMLAnchorElement<"u"&&n instanceof HTMLAnchorElement){const r=n.getAttribute("href");if(r!=null&&r.startsWith("#"))return!0;const o=n.protocol.toLowerCase();return o===":"||o==="http:"||o==="https:"||o==="mailto:"||o==="tel:"}return!0}isTagAllowed(n){return this.banned.has(n)||this.blocked.has(n)?!1:this.props.allowElements||this.allowed.has(n)}parse(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]}parseNode(n,r){const{noHtml:o,noHtmlExceptMatchers:i,allowElements:a,transform:l,transformOnlyAllowList:c}=this.props;let u=[],d="";return[...n.childNodes].forEach(f=>{if(f.nodeType===V0){const b=f.nodeName.toLowerCase(),h=this.getTagConfig(b);d&&(u.push(d),d="");const m=this.applyNodeFilters(b,f);if(!m)return;let y;if(l&&!(c&&!this.isTagAllowed(b))){this.keyIndex+=1;const E=this.keyIndex;y=this.parseNode(m,h);const v=l(m,y,h);if(v===null)return;if(typeof v<"u"){u.push(O.cloneElement(v,{key:E}));return}this.keyIndex=E-1}if(this.banned.has(b))return;if(!(o||i&&b!=="br")&&this.isTagAllowed(b)&&(a||this.canRenderChild(r,h))){var g;this.keyIndex+=1;const E=this.extractAttributes(m),v={tagName:b};E&&(v.attributes=E),h.void&&(v.selfClose=h.void),u.push(O.createElement(zj,{...v,key:this.keyIndex},(g=y)!==null&&g!==void 0?g:this.parseNode(m,h)))}else u=[...u,...this.parseNode(m,h.tagName?h:r)]}else if(f.nodeType===FB){const b=o&&!i?f.textContent:this.applyMatchers(f.textContent||"",r);Array.isArray(b)?u=[...u,...b]:d+=b}}),d&&u.push(d),u}replaceTokens(n,r){if(!n.includes("{{{"))return n;const o=[];let i=n,a=null;for(;a=i.match(_B);){const[l,c]=a,u=a.index,d=l.includes("/");u>0&&(o.push(i.slice(0,u)),i=i.slice(u));const{children:f,matcher:g,props:b}=r[c];let h;if(d)h=l.length,o.push(g.createElement(f,b));else{const m=i.match(new RegExp(`{{{/${c}}}}`));h=m.index+m[0].length,o.push(g.createElement(this.replaceTokens(i.slice(l.length,m.index),r),b))}i=i.slice(h)}return i.length>0&&o.push(i),o.length===0?"":o.length===1&&typeof o[0]=="string"?o[0]:o}}function zB(t){var n;const{attributes:r,className:o,containerTagName:i,content:a,emptyContent:l,parsedContent:c,tagName:u,noWrap:d}=t,f=(n=i??u)!==null&&n!==void 0?n:"span",g=f==="fragment"?!0:d;let b;if(c)b=c;else{const h=new Hj(a??"",t).parse();h.length>0&&(b=h)}return b||(b=l),g?O.createElement(O.Fragment,null,b):O.createElement(zj,{attributes:r,className:o,tagName:f},b)}function HB(t){const{attributes:n,className:r,content:o="",disableFilters:i=!1,disableMatchers:a=!1,emptyContent:l=null,filters:c=[],matchers:u=[],onAfterParse:d=null,onBeforeParse:f=null,tagName:g="span",noWrap:b=!1,...h}=t,m=a?[]:u,y=i?[]:c,E=f?[f]:[],v=d?[d]:[];m.forEach(I=>{I.onBeforeParse&&E.push(I.onBeforeParse.bind(I)),I.onAfterParse&&v.push(I.onAfterParse.bind(I))});const k=E.reduce((I,T)=>T(I,t),o??""),C=new Hj(k,h,m,y),D=v.reduce((I,T)=>T(I,t),C.parse());return O.createElement(zB,{attributes:n,className:r,containerTagName:t.containerTagName,emptyContent:l,noWrap:b,parsedContent:D.length===0?void 0:D,tagName:g})}const BB=({show:t,maxHeight:n=300,children:r})=>{const[i,a]=O.useState(!1),l=O.useRef(),c=O.useRef();return O.useLayoutEffect(()=>{let u;return t?a(!0):u=setTimeout(()=>a(!1),300),()=>clearTimeout(u)},[t]),O.useLayoutEffect(()=>{t&&l.current&&c.current&&(l.current.style.maxHeight="1000px")},[i]),i?G.jsx("div",{ref:l,className:"transition-all overflow-y-auto overflow-x-hidden ease-in-out duration-300",style:{maxHeight:t?n:0},children:G.jsx("div",{ref:c,children:r})}):null},VB=/\u003c([^\u003e]+)\u003e/g,W0=3,U0=t=>G.jsx(HB,{content:t.replaceAll(VB,"<span class='bg-theme-accent/5 border rounded border-theme-accent/25 px-1 py-0.5'>$1</span>")}),WB=({violation:t})=>{var o,i,a;const[n,r]=O.useState(!1);return G.jsxs(G.Fragment,{children:[G.jsxs("div",{children:[t.kind," ",G.jsx("strong",{children:U0(t.name)})," in namespace ",t.namespace,":"," ",U0(t.message)]}),((o=t==null?void 0:t.instances)==null?void 0:o.length)>W0?G.jsx(BB,{show:n,maxHeight:!1,children:G.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-2",children:t.instances.map((l,c)=>G.jsxs("div",{className:"text-sm text-theme-light",children:[l.cluster,":",l.name]},c))})}):G.jsx("div",{className:"flex flex-wrap gap-2",children:t.instances.map((l,c)=>G.jsxs("div",{className:"text-sm text-theme-light",children:[l.cluster,":",l.name]},c))}),((i=t==null?void 0:t.instances)==null?void 0:i.length)>W0&&G.jsx("a",{onClick:l=>{l.preventDefault(),r(!n)},href:"#",children:n?"Hide occurrences":`Show occurrences (${(a=t.instances)==null?void 0:a.length})`})]})},UB=()=>{const t=$A(),n=O.useMemo(()=>t?t.constraints.reduce((i,a)=>(i.push({type:"doc",title:a.name,severity:a.metadata.severity,data:a.metadata.docstring}),a.violation_groups.forEach(l=>{i.push({...l.pattern,instances:l.instances})}),i),[]):null,[t]),{scrollListItems:r,iterator:o}=U4(n,{loadingObject:G.jsx(qr,{children:G.jsx(Jt,{colSpan:2,children:G.jsx("span",{children:"Loading ..."})})}),refFunction:i=>G.jsx(qr,{children:G.jsx(Jt,{colSpan:2,className:"border-b-0 py-0",children:G.jsx("span",{ref:i})})})});return G.jsx(G.Fragment,{children:(r==null?void 0:r.length)>0?G.jsx(sw,{cellVerticalAlignment:"top",gridColumnTemplate:"min-content 2fr",children:o.map((i,a)=>G.jsx(qr,{children:(i==null?void 0:i.type)==="doc"?G.jsx(Jt,{colSpan:2,children:G.jsx(u1,{className:"bg-theme-accent/10 border-theme-accent p-5",children:G.jsxs(Ln,{distribution:"start",gap:"3",children:[G.jsx(J2,{severities:[i.severity]}),G.jsxs("div",{className:"info-box text-theme-high",children:[G.jsx("h1",{className:"mb-4 mt-0 text-2xl",children:EA(i.title)}),i.data?G.jsx(xB,{urlTransform:l=>l.replace(/^\((.+)\)$/,"$1"),children:i.data}):i.severity==="debug"&&"This violation group is currently in a draft state, undergoing development and refinement."]})]})})}):G.jsxs(G.Fragment,{children:[G.jsx(Jt,{children:G.jsx(EB,{violation:i})}),G.jsx(Jt,{children:G.jsx(WB,{violation:i})})]})},a))}):G.jsx(qr,{children:G.jsx(Jt,{colSpan:2,children:G.jsx("span",{children:"No violations found."})})})})},qB=()=>{const t=Pp(),{setDetailsViolationGroupKind:n}=as(),[r,o]=p.useState(!1);return p.useLayoutEffect(()=>{o(!1)},[t]),p.useEffect(()=>{t&&o(!0)},[t]),G.jsx(jw,{heading:`Check: ${t}`,onClose:()=>{n(null)},opened:!!t,size:"large",children:G.jsx(Ew,{children:r?G.jsxs(G.Fragment,{children:[G.jsx(Z2,{}),G.jsx(UB,{})]}):G.jsx(G.Fragment,{children:t&&G.jsx(z2,{})})})})},YB=()=>{const t=_A();return G.jsx(G.Fragment,{children:t?G.jsxs(G.Fragment,{children:[G.jsx(Z2,{}),G.jsx(M4,{}),G.jsx(qB,{})]}):G.jsx("span",{children:"Could not load data"})})},KB=({showDebugSeverities:t})=>{const{setData:n,setShowDebugSeverities:r}=as(),{addMessage:o}=zw(),i=FA(),a=LA();p.useEffect(()=>{i&&K4(`${a}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mock:!0}).then(c=>(c.ok||o({variant:"error",text:Hv(e.message)}),c.json())).then(c=>{n(c)})},[i]);const l=E4({queryKey:["violations"],queryFn:k4,enabled:!i,refetchInterval:5*60*1e3});return p.useEffect(()=>{r(!!t),l.error?o({variant:"error",text:Hv(l.error)}):!l.isLoading&&!l.data?o({variant:"Info",text:"No data available"}):n(l.data)},[l,n,o,r]),G.jsxs(FP,{py:!0,children:[G.jsx(BA,{}),G.jsx(yA,{className:"mb-4"}),l!=null&&l.isLoading&&!i?G.jsx(z2,{className:"tw-mt-4"}):G.jsx(YB,{}),G.jsx(C4,{})]})},GB="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-4{margin-bottom:1rem}.mt-0{margin-top:0}.inline{display:inline}.flex{display:flex}.grid{display:grid}.h-full{height:100%}.w-52{width:13rem}.w-80{width:20rem}.w-96{width:24rem}.cursor-pointer{cursor:pointer}.grid-cols-\\[repeat\\(auto-fill\\,_minmax\\(240px\\,_1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}.flex-wrap{flex-wrap:wrap}.gap-2{gap:.5rem}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-b-0{border-bottom-width:0}.border-l-2{border-left-width:2px}.border-theme-accent{--tw-border-opacity: 1;border-color:rgba(var(--color-accent-raw),var(--tw-border-opacity))}.border-theme-accent\\/25{border-color:rgba(var(--color-accent-raw),.25)}.border-theme-default{--tw-border-opacity: 1;border-color:rgba(var(--color-default-border),var(--tw-border-opacity))}.border-theme-error{--tw-border-opacity: 1;border-color:rgba(var(--color-error-raw),var(--tw-border-opacity))}.border-theme-info{--tw-border-opacity: 1;border-color:rgba(var(--color-info-raw),var(--tw-border-opacity))}.border-theme-warning{--tw-border-opacity: 1;border-color:rgba(var(--color-warning-raw),var(--tw-border-opacity))}.bg-theme-accent\\/10{background-color:rgba(var(--color-accent-raw),.1)}.bg-theme-accent\\/5{background-color:rgba(var(--color-accent-raw),.05)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-warning\\/40{background-color:rgba(var(--color-warning-raw),.4)}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-\\[0\\.3rem\\]{padding-top:.3rem;padding-bottom:.3rem}.pl-0{padding-left:0}.pl-5{padding-left:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.capitalize{text-transform:capitalize}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-warning{--tw-text-opacity: 1;color:rgba(var(--color-warning-raw),var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.info-box h4{font-size:1.2rem;font-weight:600;margin-bottom:.5rem;padding-top:10px}.info-box p{padding-bottom:10px}.violations-list .juno-datagrid-row:hover .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.juno-datagrid-row.active .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:underline:hover{text-decoration-line:underline}";function Bj(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vj={exports:{}};(function(t){var n=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={};function l(u,d){if(!a[u]){a[u]={};for(var f=0;f<u.length;f++)a[u][u.charAt(f)]=f}return a[u][d]}var c={compressToBase64:function(u){if(u==null)return"";var d=c._compress(u,6,function(f){return o.charAt(f)});switch(d.length%4){default:case 0:return d;case 1:return d+"===";case 2:return d+"==";case 3:return d+"="}},decompressFromBase64:function(u){return u==null?"":u==""?null:c._decompress(u.length,32,function(d){return l(o,u.charAt(d))})},compressToUTF16:function(u){return u==null?"":c._compress(u,15,function(d){return r(d+32)})+" "},decompressFromUTF16:function(u){return u==null?"":u==""?null:c._decompress(u.length,16384,function(d){return u.charCodeAt(d)-32})},compressToUint8Array:function(u){for(var d=c.compress(u),f=new Uint8Array(2*d.length),g=0,b=d.length;g<b;g++){var h=d.charCodeAt(g);f[2*g]=h>>>8,f[2*g+1]=h%256}return f},decompressFromUint8Array:function(u){if(u==null)return c.decompress(u);for(var d=new Array(u.length/2),f=0,g=d.length;f<g;f++)d[f]=256*u[2*f]+u[2*f+1];var b=[];return d.forEach(function(h){b.push(r(h))}),c.decompress(b.join(""))},compressToEncodedURIComponent:function(u){return u==null?"":c._compress(u,6,function(d){return i.charAt(d)})},decompressFromEncodedURIComponent:function(u){return u==null?"":u==""?null:(u=u.replace(/ /g,"+"),c._decompress(u.length,32,function(d){return l(i,u.charAt(d))}))},compress:function(u){return c._compress(u,16,function(d){return r(d)})},_compress:function(u,d,f){if(u==null)return"";var g,b,h,m={},y={},E="",v="",k="",C=2,D=3,I=2,T=[],z=0,A=0;for(h=0;h<u.length;h+=1)if(E=u.charAt(h),Object.prototype.hasOwnProperty.call(m,E)||(m[E]=D++,y[E]=!0),v=k+E,Object.prototype.hasOwnProperty.call(m,v))k=v;else{if(Object.prototype.hasOwnProperty.call(y,k)){if(k.charCodeAt(0)<256){for(g=0;g<I;g++)z<<=1,A==d-1?(A=0,T.push(f(z)),z=0):A++;for(b=k.charCodeAt(0),g=0;g<8;g++)z=z<<1|1&b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b>>=1}else{for(b=1,g=0;g<I;g++)z=z<<1|b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b=0;for(b=k.charCodeAt(0),g=0;g<16;g++)z=z<<1|1&b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b>>=1}--C==0&&(C=Math.pow(2,I),I++),delete y[k]}else for(b=m[k],g=0;g<I;g++)z=z<<1|1&b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b>>=1;--C==0&&(C=Math.pow(2,I),I++),m[v]=D++,k=String(E)}if(k!==""){if(Object.prototype.hasOwnProperty.call(y,k)){if(k.charCodeAt(0)<256){for(g=0;g<I;g++)z<<=1,A==d-1?(A=0,T.push(f(z)),z=0):A++;for(b=k.charCodeAt(0),g=0;g<8;g++)z=z<<1|1&b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b>>=1}else{for(b=1,g=0;g<I;g++)z=z<<1|b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b=0;for(b=k.charCodeAt(0),g=0;g<16;g++)z=z<<1|1&b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b>>=1}--C==0&&(C=Math.pow(2,I),I++),delete y[k]}else for(b=m[k],g=0;g<I;g++)z=z<<1|1&b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b>>=1;--C==0&&(C=Math.pow(2,I),I++)}for(b=2,g=0;g<I;g++)z=z<<1|1&b,A==d-1?(A=0,T.push(f(z)),z=0):A++,b>>=1;for(;;){if(z<<=1,A==d-1){T.push(f(z));break}A++}return T.join("")},decompress:function(u){return u==null?"":u==""?null:c._decompress(u.length,32768,function(d){return u.charCodeAt(d)})},_decompress:function(u,d,f){var g,b,h,m,y,E,v,k=[],C=4,D=4,I=3,T="",z=[],A={val:f(0),position:d,index:1};for(g=0;g<3;g+=1)k[g]=g;for(h=0,y=Math.pow(2,2),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;switch(h){case 0:for(h=0,y=Math.pow(2,8),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;v=r(h);break;case 1:for(h=0,y=Math.pow(2,16),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;v=r(h);break;case 2:return""}for(k[3]=v,b=v,z.push(v);;){if(A.index>u)return"";for(h=0,y=Math.pow(2,I),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;switch(v=h){case 0:for(h=0,y=Math.pow(2,8),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;k[D++]=r(h),v=D-1,C--;break;case 1:for(h=0,y=Math.pow(2,16),E=1;E!=y;)m=A.val&A.position,A.position>>=1,A.position==0&&(A.position=d,A.val=f(A.index++)),h|=(m>0?1:0)*E,E<<=1;k[D++]=r(h),v=D-1,C--;break;case 2:return z.join("")}if(C==0&&(C=Math.pow(2,I),I++),k[v])T=k[v];else{if(v!==D)return null;T=b+b.charAt(0)}z.push(T),k[D++]=b+T.charAt(0),b=T,--C==0&&(C=Math.pow(2,I),I++)}}};return c}();t!=null?t.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})})(Vj);var Wj=Bj(Vj.exports),Ar="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$@",q0=`	
\r!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`,QB=function(t){var n,r={},o={};function i(m){var y="";for(m=Math.abs(m);m;)y=Ar[m%64]+y,m=Math.floor(m/64);return y||"0"}function a(m){var y,E=0;for(y=m.length-1;y>=0;y--)E+=Ar.indexOf(m[y])*Math.pow(64,m.length-y-1);return E}function l(m){return m?(t&&(m=m.replace(n,function(y){return r[y]+"*"})),m.replace(/[^0-9a-zA-Z$@*]+([0-9a-zA-Z$@]\*[^0-9a-zA-Z$@]*)*/g,function(y){var E,v,k,C="",D=!1;for(E=0;E<y.length;E++)v=y[E],y[E+1]!=="*"?v===" "?C+="_":v==="."?C+=".":(k=q0.indexOf(v))>=0?C+="~"+Ar[k]:(D||(C+="'",D=!0),C+=("000"+(k=i(v.charCodeAt(0)))).substr(-3)):(C+=v+"*",E++);return D&&(C+="'"),C})):"''"}function c(m){return m==="''"?"":(m=m.replace(/[0-9a-zA-Z$@]\*/g,function(y){return"'*"+o[y[0]]+"'"})).split("'").map(function(y,E){return y[0]==="*"?y.substr(1):(y=y.replace(/_/g," ").replace(/\~./g,function(v){return q0[a(v[1])]}),E%2&&(y=y.replace(/[0-9a-zA-Z$@]+/g,function(v){var k,C="";for(k=0;k<v.length;k+=3)C+=String.fromCharCode(a(v[k]+v[k+1]+v[k+2]));return C})),y)}).join("")}function u(m){var y,E,v="",k=0;return v+=m<0?"-":"+",y=m.toString(),m.toExponential().length<y.length&&(y=m.toExponential()),(y=y.split(/[eE]/g))[1]&&(k=parseInt(y[1])),(y=y[0].split("."))[1]&&(k-=y[1].length),E=(E=y[0]+(y[1]||"")).replace(/0+$/,function(C){return k===0&&C.length<=2?C:(k+=C.length,"")}),v+=i(parseInt(E))||"0",k&&(v+=(k<0?"-":"+")+i(Math.abs(k))),v}function d(m){var y=m.indexOf("-",1)===-1?"+":"-",E=m.substr(1).split(/[\+\-]/);return parseFloat(m[0]+a(E[0])+(E[1]?"e"+y+a(E[1]):""))}function f(m,y){var E,v,k,C=[];if(Array.isArray(m))for(E=0;E<m.length;E++)C.push(b(m[E]));else for((k=Object.keys(m).sort()).length||y||C.push(":"),v=0;v<k.length;v++)m[E=k[v]]!==void 0&&C.push(l(E)+(y?"=":":")+b(m[E]));return y?C.join("&"):"("+C.join(",")+")"}function g(m){var y,E,v,k,C,D,I,T;function z(Q){if(!Q)throw new SyntaxError("Unexpected "+v+" at "+y+" in "+m)}function A(Q,B){T=T||Q,I||(I=T==="key"?{}:[]),C!==y&&(T==="key"?(D=c(m.substring(C,y)),T="value"):Array.isArray(I)?I.push(h(m.substring(C,y))):(D&&(I[D]=h(m.substring(C,y)),D=null),T="key"),C=y+(B?0:1))}for(k=0,C=1,y=1,E=m.length;y<E;y++)if((v=m[y])!=="(")if(v!==")"){if(z(k>=0),!(k>0))if(v!==":")if(v!==","){if(!(v!=="+"&&v!=="-")){if(T==="literal")continue;A("value",!0),T="literal"}}else A("value");else A("key")}else k===0&&A("value"),k--;else k===0&&(T=null),k++;return z(k===-1),I}function b(m,y){switch(typeof m){case"object":return m===null?"-+":f(m,y);case"string":return l(m);case"number":return isNaN(m)?"+!":m===1/0?"+*":m===-1/0?"-*":u(m);case"boolean":return m?"++":"--";case"undefined":return"+-";default:return""}}function h(m){switch(m[0]){case"(":return g(m);case"-":return m[1]!=="-"&&(m[1]==="+"?null:m[1]==="*"?-1/0:d(m));case"+":return m[1]==="-"?void 0:m[1]==="!"?NaN:m[1]==="+"||(m[1]==="*"?1/0:d(m));default:return c(m)}}return Array.isArray(t)?(t.splice(64),t.forEach(function(m){var y;for(y=0;y<m.length;y++)if(Ar.indexOf(m[y])!==-1&&o[m[y]]===void 0)return r[m]=m[y],void(o[m[y]]=m);for(y=0;y<64;y++)if(o[Ar[y]]===void 0)return r[m]=Ar[y],void(o[Ar[y]]=m)}),n=new RegExp(t.map(function(m){return m.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}).join("|"),"g")):t=null,{encode:b,decode:h,encodeInteger:i,decodeInteger:a,encodeString:l,decodeString:c,encodeNumber:u,decodeNumber:d,encodeCollection:f,decodeCollection:g,encodeQString:function(m){return b(m,!0)},decodeQString:function(m){return h("("+m.replace(/=/g,":").replace(/&/g,",")+")")}}};const Uj=Bj(QB)(),qj="__s",JB=new RegExp(qj+"=([^&]+)");var Gp={},Ua=[];function ZB(t,n={}){try{let r=Uj.encode(t);return(n==null?void 0:n.mode)==="humanize"||r.length>1800&&(r=Wj.compressToEncodedURIComponent(JSON.stringify(t))),r}catch(r){return console.warn("URL State Provider: Could not encode data",t,r),""}}function XB(t){try{let n=Uj.decode(t);if(n&&typeof n=="object")return n}catch{}try{return JSON.parse(Wj.decompressFromEncodedURIComponent(t))}catch(n){return console.warn("URL State Provider: Could not decode string: ",t,n),{}}}function Qp(){const t=window.location.href.match(JB);if(!t)return{};try{return XB(decodeURIComponent(t[1]))}catch(n){return console.warn("URL State Provider: Could not decode string: ",t[1],n),{}}}function eV(t){var n=ZB(t),r=new URL(window.location.href);return r.searchParams.set(qj,n),decodeURIComponent(r.toString())}function tV(t){return Qp()[t]}function Yj(t,n,r,o){o=o||{};const i=function(c,u,d={}){const f=Qp();return typeof f=="string"?{}:(f[c]=d!=null&&d.merge?{...f[c],...u}:u,Ua.forEach(g=>g(f)),eV(f))}(t,n,{merge:r}),a=o.state||"",l=o.title||"";o!=null&&o.replace?window.history.replaceState(a,l,i):window.history.pushState(a,l,i)}function nV(t,n,r){Yj(t,n,!0,r)}function rV(t,n,r){Yj(t,n,!1,r)}function oV(t,n){Gp[t]=n}function iV(t){delete Gp[t]}function aV(t){return n=t,Ua.push(n),()=>{const r=Ua.indexOf(n);r>-1&&Ua.splice(r,1)};var n}function lV(t){return{currentState:function(){return tV(t)},onChange:function(n){return oV(t,n),function(){iV(t)}},onGlobalChange:aV,push:function(n,r){nV(t,n,r)},replace:function(n,r){rV(t,n,r)}}}window.addEventListener("popstate",function(t){t.target.location.href;const n=Qp();Object.keys(n).forEach(r=>{(function(o,i,a){var l=Gp[o];l&&l(i)})(r,n[r])})});const Y0="doop",Oc="f",K0="s",G0="v",sV=t=>{const[n,r]=p.useState(!1),o=lV(t||Y0),{set:i,setSearchTerm:a}=ls(),l=Ip(),c=Tp(),u=Pp(),{setDetailsViolationGroupKind:d}=as();p.useEffect(()=>{var h,m,y;if(n)return;console.debug(`DOOP: (${t||Y0}) setting up state from url:`,o.currentState());const f=(h=o.currentState())==null?void 0:h[K0],g=(m=o.currentState())==null?void 0:m[Oc],b=(y=o.currentState())==null?void 0:y[G0];f&&a(f),g?i(g):o.push({[Oc]:g}),b&&d(b),r(!0)},[n]),p.useEffect(()=>{n&&o.push({[Oc]:l,[G0]:u,[K0]:c})},[l,u,c,n])},cV=({consumerId:t})=>(sV(t),null),uV=[{kind:"kind-1",constraints:[{name:"const-1",metadata:{severity:"error",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-owner-info-on-helm-releases.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-owner-info-on-helm-releases.yaml",docstring:`gfhgddg jhfghjff

#### hgfhgdghdgd

hghfhjfjhfjf jhgjhjhg jhgjhgjhgjh ututuytuyt`},violation_groups:[{pattern:{kind:"violation-kind-1",name:"violation-group-1",namespace:"nms-1",message:"hgfhgdfhgdfhg jhfghfhgf. jhfhgfhgfhgf uiyuiy mnbnmnvbnv lkjklj.",object_identity:{service:"service-1",support_group:"support-group-3"}},instances:[{name:"violation-group-1.v1",cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-2",namespace:"nms-2",message:"nbvnbvnbv mnmnbnm mnbmnbn. jhgjhg oioi rtetrew nbvnbvnbv nbnvbvbv.",object_identity:{service:"service-1",support_group:"support-group-1"}},instances:[{name:"violation-group-2.v1",cluster:"cluster-13"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-3",namespace:"nms-2",message:"gfhgfhgfgf hgjhg jhjghjhg. iuiou ewrewer oioiiu nbmnbnb ghhghgjh.",object_identity:{service:"service-2",support_group:"support-group-1"}},instances:[{name:"violation-group-3.v1",cluster:"s-cluster-13"}]},{pattern:{kind:"violation-kind-1",name:"violation-group-4",namespace:"cc3test",message:"gfhgfhgfgf hgjhg jhjghjhg. iuiou ewrewer oioiiu nbmnbnb ghhghgjh.",object_identity:{service:"service-2",support_group:"support-group-1"}},instances:[{name:"violation-group-4.v1",cluster:"cluster-3"},{name:"violation-group-4.v12",cluster:"cluster-2"},{name:"violation-group-4.v15",cluster:"cluster-10"},{name:"violation-group-4.v2",cluster:"cluster-5"},{name:"violation-group-4.v2",cluster:"cluster-7"},{name:"violation-group-4.v4",cluster:"cluster-4"},{name:"violation-group-4.v5",cluster:"cluster-6"},{name:"violation-group-4.v5",cluster:"cluster-13"},{name:"violation-group-4.v8",cluster:"cluster-1"},{name:"violation-group-4.v8",cluster:"cluster-8"}]}]}]},{kind:"kind-2",constraints:[{name:"const-2",metadata:{severity:"error",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-images-from-non-keppel.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-images-from-non-keppel.yaml",docstring:`hgfhgf hghghg ytuyt nmnmn ukj.

#### nghgfhgfhgfghfd hgfhgf bvc?

nvvv jghjhgjhg hgjhgjhg hhghghjg uyutyyut. jhgjhgjhg hgjhghgf jhgjhgjh jhjhgjhg oiou reerwew dsfds.
jhgjhghjg hvhgfhgf bvbvcbvcbvc nbvv uyuyiuy mnbmnbnmb mnbnb
mnbmnbmnb nbvnbvnbv nbvnbvnb.`},violation_groups:[{pattern:{kind:"violation-kind-2",name:"violation-group-1",namespace:"nms-2",message:"bvcbvc gfhgfhgf bvcbvcbvc bvnbvbc trytr gfgfhg kjkjhjkh nbnbnb bvnbvnbv nbvbvnbv nbvbnv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-1"}]}]}]},{kind:"kind-3",constraints:[{name:"const-3",metadata:{severity:"debug",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-forbidden-clusterwide-objects.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-forbidden-clusterwide-objects.yaml"},violation_groups:[{pattern:{kind:"violation-kind-1",name:"violation-group-1",message:"jhgjhgjh hjhgjhg mbnbnvbnbvnbv jyughghg hghghfghgfghf nvnbvnbvnbv nbnbvnvbnbv nbvnvbnbvnbv nbnbvnbvbn nbvnbvnbv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-4"},{cluster:"cluster-5"}]},{pattern:{kind:"violation-kind-2",name:"violation-group-2",message:"bnbnbv nnbvnbv nbvnbvbnv nbvnbvnbv nbvnbvnbv bvnbvnbv nbvnbvnbv nvbnbvnbv.",object_identity:{service:"service-3",support_group:"support-group-3"}},instances:[{cluster:"cluster-5"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-3",name:"violation-group-4",message:"hjhjghjg hghgfhgf bvbcvbvc ytuytuyt qrewerwerw bvbvcbvbvcbcvb nbnbvnbvnbv nbvnbvnbv nbvnbvnbv nbvnbvnbv nbvnbvnbv.",object_identity:{service:"service-4",support_group:"support-group-3"}},instances:[{cluster:"cluster-7"},{cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-4",name:"violation-group-5",message:"bnbnb nbnbvnbv nbvnbvnbv tuytuyt vhghjgh mnbmnbmnb nbnbnmbmnb nbmnbmnb nbnmbmnbm bnbnmbbnb nmbnbnbn mnbmnbnbn nbmnbnmb.",object_identity:{service:"service-4",support_group:"support-group-2"}},instances:[{cluster:"cluster-7"},{cluster:"cluster-8"}]}]}]},{kind:"violation-kind-1",constraints:[{name:"violations-const-1",metadata:{severity:"info",template_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper/templates/constrainttemplate-images-from-correct-registry.yaml",constraint_source:"https://github.com/sapcc/helm-charts/tree/master/system/gatekeeper-config/templates/constraint-images-from-correct-registry.yaml",docstring:`Tjhgjhgjhg nhgfhgf nbvbnvb bvbvcbvc bcbvcbvc vcbcbvc bvcbvcvc bvbvcbvcbv bcvc.

#### hjhkghfg hgfhgfhgf bvhgfhgfhgf?

Bkjjhgjhg,mb nbvbnvbvc utyuytuyt. bvcbvcbvcbv bgfdgfdgf vvcxvcxz vcvcvcc, hjghgfhgf bvcbvcvc tyrytr bvnbnb mn,mn,mn mnmnnbhg fdsfdsdf ewewcvx cxvcxcv.
`},violation_groups:[{pattern:{kind:"violtion-kind-5",name:"violation-group-1",namespace:`
nms-3>`,message:"hgjhg bvnbvbvc gftrt vcfddfgfdfd bvbvbvcbvc hgfghfgh yutytyu bvbbv nmbnbnb nbvbvbv nbvnbvbv vcxvcxc x rerere bvcvbbv bvcbvc.",object_identity:{service:"service-4",support_group:"support-group-3"}},instances:[{namespace:"nms-3",cluster:"cluster-1"},{namespace:"nms-4",cluster:"cluster-3"},{namespace:"nms-5",cluster:"cluster-4"},{namespace:"nms-7",cluster:"cluster-5"},{namespace:"nms-6",cluster:"cluster-14"}]},{pattern:{kind:"violation-kind-5",name:"violation-group-4",namespace:"nms-5",message:"mbnbbnv nvnbvnbv hhghghgfhgf bvbvbv nvnbvnbv bnnmbvnmb hghghfg dffdgf nvnvnbv nvbnbvbnv nbvnbvbnv bvv.",object_identity:{service:"service-5",support_group:"support-group-4"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-5",name:"violation-group-5",namespace:"nms-6",message:"hjjhj jgjhgjgh jhgjhgjhg jhgjhgjhg hjgjhgjhg. jhgjhg vhgjhg nbvnbvnv jhghjghg nnvv nbnbnbvbv nbvbvbvb.",object_identity:{service:"service-5",support_group:"support-group-5"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]},{pattern:{kind:"violation-kind-6",name:"violation-group-6",namespace:"nms-7",message:"nbmnb nghjghg nbvnbvnb nbvnvbn. jhgjhg nbvbnv nbvbnvbn bvbnvbnv hghgh bnvnbvbnv nbvbv",object_identity:{service:"service-5",support_group:"support-group-6"}},instances:[{cluster:"cluster-1"},{cluster:"cluster-2"},{cluster:"cluster-3"},{cluster:"cluster-4"},{cluster:"cluster-5"},{cluster:"cluster-6"},{cluster:"cluster-7"},{cluster:"cluster-8"},{cluster:"cluster-9"},{cluster:"cluster-10"},{cluster:"cluster-11"},{cluster:"cluster-12"}]}]}]}],dV={"cluster-identifiers":[{"cluster-1":{layer:"layer-1",type:"type-1"},"cluster-2":{layer:"layer-2",type:"type-2"},"cluster-3":{layer:"layer-3",type:"type-3"},"cluster-4":{layer:"layer-4",type:"type-4"},"cluster-5":{layer:"layer-5",type:"type-5"},"cluster-6":{layer:"layer-6",type:"type-6"},"cluster-7":{layer:"layer-7",type:"type-7"},"cluster-8":{layer:"layer-8",type:"type-8"},"cluster-9":{layer:"layer-9",type:"type-9"},"cluster-10":{layer:"layer-10",type:"type-10"},"cluster-11":{layer:"layer-11",type:"type-11"},"cluster-12":{layer:"layer-12",type:"type-12"},"cluster-13":{layer:"layer-13",type:"type-13"},"cluster-14":{layer:"layer-14",type:"type-14"}}],templates:uV},fV=(t={})=>{const{setEndpoint:n,setMock:r}=AA(),o=p.useMemo(()=>t.isMock===!0||t.isMock==="true",[t.isMock]);p.useEffect(()=>{o&&(r(!0),Y4(dV,{debug:!0,rewriteRoutes:{"/(?:doop-api\\.sap/v2/violations/(.*))":"/$1"}}))},[]);const i=new i4({defaultOptions:{queries:{meta:{endpoint:t.apiEndpoint,mock:t.isMock}}}});return p.useLayoutEffect(()=>{n(o?window.location.origin:t==null?void 0:t.apiEndpoint)},[t==null?void 0:t.apiEndpoint,o]),G.jsx(y7,{children:G.jsxs(PE,{pageHeader:"Doop",embedded:t.embedded===!0,children:[G.jsx(NP,{heading:`Decentralized Observer of Policies  ${t.displayName?` - ${t.displayName}`:""}`}),G.jsx(cV,{consumerId:t.id||"doop"}),G.jsx(u4,{client:i,children:G.jsx(KB,{id:t==null?void 0:t.id,showDebugSeverities:t.showDebugSeverities})})]})})},mV=t=>G.jsxs(hy,{children:[G.jsx("style",{children:GB.toString()}),G.jsx(RA,{options:t,children:G.jsx(fV,{...t})})]});export{mV as default};
