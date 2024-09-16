"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6143],{"./src/components/LoadingIndicator/LoadingIndicator.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColoredLoadingIndicator:()=>ColoredLoadingIndicator,Default:()=>Default,SizedLoadingIndicator:()=>SizedLoadingIndicator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoadingIndicator_stories});var _style,_g,react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const loading_indicator=function SvgLoadingIndicator(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 210 210",height:210,width:210,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_style||(_style=react.createElement("style",null,"\n\t@keyframes a0_t { 0% { transform: translate(59.3px,59.3px) scale(1,1) translate(-19px,-19px); } 82.5% { transform: translate(59.3px,59.3px) scale(1,1) translate(-19px,-19px); animation-timing-function: cubic-bezier(0,0,.6,1); } 87.5% { transform: translate(59.3px,59.3px) scale(1.1,1.1) translate(-19px,-19px); } 100% { transform: translate(59.3px,59.3px) scale(1.1,1.1) translate(-19px,-19px); } }\n\t@keyframes a0_o { 0% { opacity: 1; } 82.5% { opacity: 1; animation-timing-function: cubic-bezier(0,0,.6,1); } 87.5% { opacity: 0; } 100% { opacity: 0; } }\n\t@keyframes a1_v { 0% { visibility: hidden; animation-timing-function: steps(1); } 20% { visibility: visible; animation-timing-function: steps(1); } 100% { visibility: visible; animation-timing-function: steps(1); } }\n\t@keyframes a2_v { 0% { visibility: hidden; animation-timing-function: steps(1); } 39.16% { visibility: visible; animation-timing-function: steps(1); } 59.16% { visibility: visible; animation-timing-function: steps(1); } 100% { visibility: visible; animation-timing-function: steps(1); } }\n\t@keyframes a2_do { 0% { stroke-dashoffset: 0px; } 39.16% { stroke-dashoffset: 0px; animation-timing-function: cubic-bezier(0,0,.6,1); } 50.84% { stroke-dashoffset: 75.7px; animation-timing-function: cubic-bezier(.3,.5,.7,1); } 59.16% { stroke-dashoffset: 75.7px; } 100% { stroke-dashoffset: 75.7px; } }\n\t@keyframes a3_v { 0% { visibility: hidden; animation-timing-function: steps(1); } 20% { visibility: visible; animation-timing-function: steps(1); } 40% { visibility: hidden; animation-timing-function: steps(1); } 100% { visibility: hidden; animation-timing-function: steps(1); } }\n\t@keyframes a3_do { 0% { stroke-dashoffset: 118.5px; } 20% { stroke-dashoffset: 118.5px; animation-timing-function: cubic-bezier(.4,0,1,1); } 40% { stroke-dashoffset: 0px; } 100% { stroke-dashoffset: 0px; } }\n\t@keyframes a4_v { 0% { visibility: visible; animation-timing-function: steps(1); } 21.66% { visibility: hidden; animation-timing-function: steps(1); } 100% { visibility: hidden; animation-timing-function: steps(1); } }\n\t@keyframes a5_do { 0% { stroke-dashoffset: 0px; } 1.66% { stroke-dashoffset: 0px; animation-timing-function: cubic-bezier(0,0,.6,1); } 21.66% { stroke-dashoffset: 118.5px; } 100% { stroke-dashoffset: 118.5px; } }\n\t@keyframes a7_t { 0% { transform: translate(61.4px,61.4px) rotate(-210deg); } 30% { transform: translate(61.4px,61.4px) rotate(-210deg); animation-timing-function: cubic-bezier(.4,0,.6,1); } 40% { transform: translate(61.4px,61.4px) rotate(0deg); } 100% { transform: translate(61.4px,61.4px) rotate(0deg); } }\n\t@keyframes a6_t { 0% { transform: scale(1,1) translate(-42.7px,-42.7px); } 78.34% { transform: scale(1,1) translate(-42.7px,-42.7px); animation-timing-function: cubic-bezier(0,0,.6,1); } 84.16% { transform: scale(1.1,1.1) translate(-42.7px,-42.7px); } 100% { transform: scale(1.1,1.1) translate(-42.7px,-42.7px); } }\n\t@keyframes a6_o { 0% { opacity: 1; } 78.34% { opacity: 1; animation-timing-function: cubic-bezier(0,0,.6,1); } 84.16% { opacity: 0; } 100% { opacity: 0; } }\n\t@keyframes a8_v { 0% { visibility: hidden; animation-timing-function: steps(1); } 11.66% { visibility: visible; animation-timing-function: steps(1); } 100% { visibility: visible; animation-timing-function: steps(1); } }\n\t@keyframes a8_da { 0% { stroke-dasharray: 185.96px 185.96px; } 11.66% { stroke-dasharray: 185.96px 185.96px; animation-timing-function: cubic-bezier(.4,0,1,1); } 30% { stroke-dasharray: 185.96px 185.96px; } 100% { stroke-dasharray: 185.96px 185.96px; } }\n\t@keyframes a8_do { 0% { stroke-dashoffset: 186px; } 11.66% { stroke-dashoffset: 186px; animation-timing-function: cubic-bezier(.4,0,1,1); } 30% { stroke-dashoffset: 0px; } 46.66% { stroke-dashoffset: 0px; animation-timing-function: cubic-bezier(0,0,.6,1); } 59.16% { stroke-dashoffset: 110px; } 100% { stroke-dashoffset: 110px; } }\n\t@keyframes a9_do { 0% { stroke-dashoffset: 27.4px; animation-timing-function: cubic-bezier(.4,0,1,1); } 10.84% { stroke-dashoffset: 0px; } 100% { stroke-dashoffset: 0px; } }\n\t@keyframes a11_t { 0% { transform: translate(61.4px,61.4px) rotate(170deg); animation-timing-function: cubic-bezier(.4,0,.6,1); } 30% { transform: translate(61.4px,61.4px) rotate(170deg); animation-timing-function: cubic-bezier(.4,0,.6,1); } 40% { transform: translate(61.4px,61.4px) rotate(0deg); } 100% { transform: translate(61.4px,61.4px) rotate(0deg); } }\n\t@keyframes a10_t { 0% { transform: scale(1,1) translate(-53px,-53px); } 75.84% { transform: scale(1,1) translate(-53px,-53px); animation-timing-function: cubic-bezier(0,0,.6,1); } 80% { transform: scale(1.1,1.1) translate(-53px,-53px); } 100% { transform: scale(1.1,1.1) translate(-53px,-53px); } }\n\t@keyframes a10_o { 0% { opacity: 1; } 75.84% { opacity: 1; animation-timing-function: cubic-bezier(0,0,.6,1); } 80% { opacity: 0; } 100% { opacity: 0; } }\n\t@keyframes a12_t { 0% { transform: translate(53.5px,53.5px) scale(1,1) translate(-0.5px,-0.5px); } 100% { transform: translate(53.5px,53.5px) scale(1,1) translate(-0.5px,-0.5px); } }\n\t@keyframes a12_v { 0% { visibility: hidden; animation-timing-function: steps(1); } 5% { visibility: visible; animation-timing-function: steps(1); } 100% { visibility: visible; animation-timing-function: steps(1); } }\n\t@keyframes a12_do { 0% { stroke-dashoffset: 266.7px; } 5% { stroke-dashoffset: 266.7px; animation-timing-function: cubic-bezier(.4,0,.6,1); } 36.66% { stroke-dashoffset: 0px; animation-timing-function: cubic-bezier(0,0,.6,1); } 59.16% { stroke-dashoffset: 136px; } 100% { stroke-dashoffset: 136px; } }\n\t@keyframes a13_da { 0% { stroke-dasharray: 27.35px 27.35px; } 100% { stroke-dasharray: 27.35px 27.35px; } }\n\t@keyframes a13_do { 0% { stroke-dashoffset: 27.4px; animation-timing-function: cubic-bezier(.4,0,1,1); } 5% { stroke-dashoffset: 0px; } 100% { stroke-dashoffset: 0px; } }\n\t@keyframes a14_t { 0% { transform: translate(51.4px,122.3px) scale(1,1); } 85.84% { transform: translate(51.4px,122.3px) scale(1,1); animation-timing-function: cubic-bezier(0,0,.6,1); } 91.66% { transform: translate(51.4px,122.3px) scale(1.1,1.1); } 100% { transform: translate(51.4px,122.3px) scale(1.1,1.1); } }\n\t@keyframes a14_v { 0% { visibility: hidden; animation-timing-function: steps(1); } 53.34% { visibility: visible; animation-timing-function: steps(1); } 100% { visibility: visible; animation-timing-function: steps(1); } }\n\t@keyframes a14_o { 0% { opacity: 1; } 85.84% { opacity: 1; animation-timing-function: cubic-bezier(0,0,.6,1); } 91.66% { opacity: 0; } 100% { opacity: 0; } }\n\t@keyframes a14_do { 0% { stroke-dashoffset: 427px; } 53.34% { stroke-dashoffset: 427px; animation-timing-function: cubic-bezier(.4,0,.6,1); } 67.5% { stroke-dashoffset: 0px; } 100% { stroke-dashoffset: 0px; } }\n")),_g||(_g=react.createElement("g",{transform:"translate(101.9,25.7)"})),react.createElement("g",{transform:"translate(86.5,8.5)"},react.createElement("g",{transform:"translate(59.3,59.3) translate(-19,-19)",style:{animation:"5s linear infinite both a0_t, 5s linear infinite both a0_o"}},react.createElement("g",{visibility:"hidden",transform:"translate(21.1,21.1) rotate(97) scale(1,-1) translate(-19,-19)",style:{animation:"5s linear infinite forwards a1_v"}},react.createElement("path",{fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeMiterlimit:1,strokeWidth:5,d:"M-12.5-14.3c-0.1 .2-3 2.8-4.8 6.4c-1.1 2.4-1.7 5.1-1.7 7.9c0 10.5 8.5 19 19 19c10.5 0 19-8.5 19-19c0-10.5-8.5-19-19-19c-2.3 0-4.5 .4-6.6 1.2c-2.2 .8-4.2 2-5.9 3.5",strokeDasharray:"118.5 118.5",visibility:"hidden",transform:"translate(19,19)",style:{animation:"5s linear infinite forwards a2_v, 5s linear infinite both a2_do"}}),react.createElement("path",{fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeMiterlimit:1,strokeWidth:5,d:"M-12.5-14.3c1.7-1.5 3.7-2.7 5.9-3.5c2.1-0.8 4.3-1.2 6.6-1.2c10.5 0 19 8.5 19 19c0 10.5-8.5 19-19 19c-10.5 0-19-8.5-19-19c0-2.8 .6-5.5 1.7-7.9c1.8-3.6 4.7-6.2 4.8-6.4",strokeDasharray:"118.5 118.5",strokeDashoffset:118.5,visibility:"hidden",transform:"translate(19,19)",style:{animation:"5s linear infinite forwards a3_v, 5s linear infinite both a3_do"}})),react.createElement("g",{opacity:0,visibility:"visible",transform:"translate(2.2,2.2)",style:{animation:"5s linear infinite forwards a4_v"}},react.createElement("path",{fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeMiterlimit:1,strokeWidth:5,d:"M-12.5-14.3c3.3-2.9 7.7-4.7 12.5-4.7c10.5 0 19 8.5 19 19c0 10.5-8.5 19-19 19c-10.5 0-19-8.5-19-19c0-2.8 .6-5.5 1.7-7.9c1.8-3.6 4.7-6.2 4.8-6.4",strokeDasharray:"118.5 118.5",transform:"translate(19,19)",style:{animation:"5s linear infinite both a5_do"}}))),react.createElement("g",{style:{animation:"5s linear infinite both a7_t"}},react.createElement("g",{transform:"translate(61.4,61.4) rotate(-210) translate(-42.7,-42.7)",style:{animation:"5s linear infinite both a6_t, 5s linear infinite both a6_o"}},react.createElement("path",{fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeMiterlimit:1,strokeWidth:5,d:"M-17.4-26.9c.7-0.4 1.4-0.9 2.2-1.3c2.5-1.4 5.3-2.4 8.2-3.1c2.2-0.5 4.6-0.7 7-0.7c17.7 0 32 14.3 32 32c0 17.7-14.3 32-32 32c-17.7 0-32-14.3-32-32c0-5.9 1.6-11.4 4.3-16.1",strokeDasharray:"186 186",strokeDashoffset:186,visibility:"hidden",transform:"translate(42.7,42.7)",style:{animation:"5s linear infinite forwards a8_v, 5s linear infinite both a8_da, 5s linear infinite both a8_do"}}),react.createElement("path",{fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1,strokeWidth:3.5,d:"M4.5 0c0 1.1-0.4 2.1-1.1 2.8c-0.8 1-2 1.7-3.4 1.7c-2.5 0-4.5-2-4.5-4.5c0-2.5 2-4.5 4.5-4.5c2.5 0 4.5 2 4.5 4.5Z",strokeDasharray:"27.4 27.4",strokeDashoffset:27.3,transform:"translate(19.4,18.6) rotate(-26) scale(1.08,1.08) translate(1.1,1.1)",style:{animation:"5s linear infinite both a9_do"}}))),react.createElement("g",{style:{animation:"5s linear infinite both a11_t"}},react.createElement("g",{transform:"translate(61.4,61.4) rotate(170) translate(-53,-53)",style:{animation:"5s linear infinite both a10_t, 5s linear infinite both a10_o"}},react.createElement("path",{fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeMiterlimit:1,strokeWidth:5,d:"M41.8 16.7m.2-0.5c1.9-5 3-10.5 3-16.2c0-8.9-2.6-17.1-7-24.1c-8-12.5-22-20.9-38-20.9c-24.8 0-45 20.2-45 45c0 24.8 20.2 45 45 45c13.6 0 25.7-6 34-15.6",strokeDasharray:"266.7 266.7",strokeDashoffset:266.7,visibility:"hidden",transform:"translate(53.5,53.5) translate(-0.5,-0.5)",style:{animation:"5s linear infinite both a12_t, 5s linear infinite forwards a12_v, 5s linear infinite both a12_do"}}),react.createElement("path",{fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1,strokeWidth:3.5,d:"M3.5-2.7c.6 .7 1 1.7 1 2.7c0 2.5-2 4.5-4.5 4.5c-2.5 0-4.5-2-4.5-4.5c0-2.5 2-4.5 4.5-4.5c1.4 0 2.7 .7 3.5 1.8Z",strokeDasharray:"27.3 27.3",strokeDashoffset:27.3,transform:"translate(91.7,74) rotate(-26) scale(1.08,1.08) translate(1.1,1.1)",style:{animation:"5s linear infinite both a13_da, 5s linear infinite both a13_do"}})))),react.createElement("path",{fill:"none",stroke:"currentcolor",d:"M123.3-21.9c1.6 4.3 2.5 8.9 2.5 13.8c0 21.4-16.9 38.8-38.1 39.7v.1h-1.7h-11.4h-75.2c-17.2-0.4-31.1-14.4-31.1-31.7c0-17.5 14.2-31.7 31.7-31.7c1.7 0 3.4 .2 5 .4c0-0.1 0-0.2 0-0.4c0-20.8 16.9-37.7 37.7-37.7c15.5 0 28.7 9.2 34.6 22.5c2.8-0.6 5.7-0.9 8.7-0.9c17.1 0 31.7 10.7 37.3 25.9Z",strokeDasharray:"427 427",strokeDashoffset:427,strokeWidth:6,strokeLinecap:"round",visibility:"hidden",transform:"translate(51.4,122.3)",style:{animation:"5s linear infinite both a14_t, 5s linear infinite forwards a14_v, 5s linear infinite both a14_o, 5s linear infinite both a14_do"}}))};function LoadingIndicator_component_extends(){return LoadingIndicator_component_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},LoadingIndicator_component_extends.apply(null,arguments)}const LoadingIndicator=_ref=>{let{size="96",color="",className="",...props}=_ref;return react.createElement(loading_indicator,LoadingIndicator_component_extends({width:size,height:size,className:`${className} ${color}`,role:"progressbar"},props))};LoadingIndicator.propTypes={size:prop_types_default().string,color:prop_types_default().string,className:prop_types_default().string},LoadingIndicator.__docgenInfo={description:"An animated loading indicator. Use this to indicate loading larger portions, panels, or full views of an application. For micro-interactions or to indicate indivudally buys UI components, use Spinner.",methods:[],displayName:"LoadingIndicator",props:{size:{defaultValue:{value:'"96"',computed:!1},description:'The size of the LoadingIndicator as a number of pixels (without "px": "100" will render an LoadingIndicator of 100px x 100px). default is 96.',type:{name:"string"},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'By default, the LoadingIndicator will use the `color` of the current context. In order to use a different color just for the LoadingIndicator, a text color class can be passed. These begin with "jn-text-". You can pass any other class that contains a "color:" declaration as well.',type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1}}};const LoadingIndicator_stories={title:"Components/LoadingIndicator",component:LoadingIndicator,argTypes:{},parameters:{docs:{description:{component:"A specific, CCloud-branded loading indicator. Use this to show a full page or a significant portion of a page, a panel, etc. is loading. For more generic use cases, individual comoponents and micro-interactions use Spinner instead."}}}},Default={args:{}},SizedLoadingIndicator={args:{size:"300"}},ColoredLoadingIndicator={args:{color:"jn-text-theme-info"}},__namedExportsOrder=["Default","SizedLoadingIndicator","ColoredLoadingIndicator"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},SizedLoadingIndicator.parameters={...SizedLoadingIndicator.parameters,docs:{...SizedLoadingIndicator.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "300"\n  }\n}',...SizedLoadingIndicator.parameters?.docs?.source}}},ColoredLoadingIndicator.parameters={...ColoredLoadingIndicator.parameters,docs:{...ColoredLoadingIndicator.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "jn-text-theme-info"\n  }\n}',...ColoredLoadingIndicator.parameters?.docs?.source}}}}}]);