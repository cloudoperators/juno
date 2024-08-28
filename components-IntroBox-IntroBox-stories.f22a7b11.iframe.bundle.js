"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8563],{"./src/components/IntroBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>IntroBox});var react=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},introbox=function(variant,heroImage){return"\n            jn-bg-theme-introbox\n            jn-text-theme-default\n            jn-flex\n            jn-rounded-l\n            jn-overflow-hidden\n            jn-mb-8\n\n            ".concat("hero"===variant&&heroImage?"\n                    jn-bg-right-top\n                    jn-bg-no-repeat\n                ":"","\n        ")},introboxContent=function(variant,heroImage){return"\n        ".concat(heroImage?"jn-pl-4 jn-pr-56":"jn-px-4","\n\n        ").concat("hero"===variant?"\n            jn-text-xl\n            jn-min-h-[8rem]\n            jn-py-4\n            jn-flex\n            jn-flex-col\n            jn-justify-center\n        ":"\n            jn-py-3\n        ","\n    ")},IntroBox=function(_a){var _b=_a.title,title=void 0===_b?null:_b,_c=_a.text,text=void 0===_c?null:_c,_d=_a.variant,variant=void 0===_d?"default":_d,_e=_a.heroImage,heroImage=void 0===_e?null:_e,_f=_a.className,className=void 0===_f?"":_f,children=_a.children,props=__rest(_a,["title","text","variant","heroImage","className","children"]),isHeroWithImage=react.useMemo((function(){return heroImage&&"hero"===variant}),[variant,heroImage]);return react.createElement("div",__assign({className:"juno-introbox ".concat(introbox(variant,heroImage)," ").concat(className),style:isHeroWithImage?{backgroundImage:"".concat(heroImage)}:{}},props),react.createElement("div",{className:"".concat("\n    jn-border-l-4\n    jn-border-theme-introbox\n")}),react.createElement("div",{className:"".concat(introboxContent(variant,heroImage))},title?react.createElement("h1",{className:"".concat("\n    jn-font-bold\n")},title):"",children||react.createElement("p",null,text)))};IntroBox.__docgenInfo={description:"An Introbox holds generally important information to help understand the contents, purpose, or state of a whole page or view, or individual sections on longer pages.\nUse sparingly, there should never be any two or more subsequent instances of Introbox as direct siblings/neighbors on an individual view.",methods:[],displayName:"IntroBox",props:{title:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Pass an optional title",defaultValue:{value:"null",computed:!1}},text:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below)",defaultValue:{value:"null",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "hero"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hero"'}]},description:"Pass a custom class",defaultValue:{value:'"default"',computed:!1}},heroImage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:'optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image in your app (see template app for an example). Will always be positioned top and right',defaultValue:{value:"null",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Pass a custom class",defaultValue:{value:'""',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Pass child nodes to be rendered as contents"}}}},"./src/components/IntroBox/IntroBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Hero:()=>Hero,HeroWithBGImage:()=>HeroWithBGImage,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IntroBox_stories});var _rect,_g,IntroBox=__webpack_require__("./src/components/IntroBox/index.ts"),react=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const app_bg_example=function SvgAppBgExample(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({width:483,height:231,viewBox:"0 0 483 231",fill:"rgba(36, 42, 49, 1)",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("mask",{id:"mask0_396_20485",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:483,height:231},_rect||(_rect=react.createElement("rect",{width:483,height:231,fill:"#C4C4C4"}))),_g||(_g=react.createElement("g",{mask:"url(#mask0_396_20485)"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M354.743 -11.1444C354.707 -11.2679 354.674 -11.3934 354.646 -11.5209C353.857 -15.0264 356.249 -18.702 359.987 -19.7306C363.724 -20.7593 367.394 -18.7515 368.182 -15.2461C368.97 -11.7407 366.579 -8.06505 362.841 -7.03639C360.751 -6.46105 358.681 -6.83558 357.126 -7.89074L271.23 30.2192L311.377 43.3056C311.795 44.3883 312.731 45.072 313.408 45.4231C314.419 45.9477 315.655 46.2031 316.894 46.2031C317.702 46.2031 318.509 46.0944 319.254 45.8732L320.143 46.163L338.518 37.8114V42.1398L325.618 48.0028L333.421 50.6368L327.962 52.9521L319.648 50.1454L319.628 50.1389L269.628 33.8407C266.323 32.7634 266.087 28.19 269.264 26.7805L354.743 -11.1444ZM361.977 -10.8796C360.072 -10.3553 358.704 -11.4478 358.452 -12.5685C358.2 -13.6891 358.946 -15.3631 360.851 -15.8874C362.756 -16.4117 364.123 -15.3192 364.375 -14.1985C364.627 -13.0779 363.882 -11.4039 361.977 -10.8796Z"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M349.988 36.9264V32.598L445.065 -10.6153C444.279 -14.1198 446.669 -17.7934 450.406 -18.8217C454.144 -19.8504 457.813 -17.8426 458.601 -14.3371C459.39 -10.8317 456.999 -7.15612 453.261 -6.12745C451.002 -5.50593 448.769 -5.99289 447.181 -7.24891L349.988 36.9264ZM448.872 -11.6596C449.124 -10.5389 450.491 -9.4464 452.396 -9.97068C454.302 -10.495 455.047 -12.1689 454.795 -13.2896C454.543 -14.4102 453.175 -15.5027 451.27 -14.9785C449.365 -14.4542 448.62 -12.7802 448.872 -11.6596Z"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M364.265 65.2076V61.0494L375.982 65.0047L424.796 44.1372C424.056 40.6534 426.44 37.0207 430.153 35.999C433.891 34.9703 437.56 36.9781 438.348 40.4836C439.137 43.989 436.745 47.6646 433.008 48.6932C430.726 49.3212 428.469 48.8176 426.878 47.5324L406.399 56.287L430.714 63.851L484.859 40.3815C484.776 40.1501 484.706 39.9108 484.651 39.664C483.863 36.1586 486.254 32.483 489.992 31.4543C493.73 30.4256 497.399 32.4335 498.187 35.9389C498.975 39.4443 496.584 43.1199 492.846 44.1486C490.919 44.6789 489.01 44.4021 487.505 43.5292L432.235 67.4859C431.4 67.8481 430.462 67.8985 429.592 67.6279L400.813 58.6751L381.583 66.8955L449.288 89.7519L496.351 68.7091C496.338 68.6577 496.325 68.6059 496.314 68.5538C495.525 65.0484 497.916 61.3728 501.654 60.3441C505.392 59.3155 509.061 61.3233 509.85 64.8287C510.638 68.3341 508.247 72.0097 504.509 73.0384C502.319 73.6411 500.152 73.2014 498.575 72.0288L450.739 93.4155C449.891 93.7639 448.945 93.7943 448.076 93.501L376.148 69.2189L364.265 73.8487V69.6592L370.547 67.3281L364.265 65.2076ZM432.143 44.85C430.238 45.3743 428.871 44.2818 428.619 43.1611C428.367 42.0405 429.112 40.3665 431.017 39.8422C432.922 39.3179 434.29 40.4105 434.542 41.5311C434.794 42.6518 434.048 44.3257 432.143 44.85ZM491.982 40.3053C490.077 40.8296 488.709 39.7371 488.457 38.6165C488.205 37.4958 488.951 35.8218 490.856 35.2975C492.761 34.7733 494.128 35.8658 494.381 36.9864C494.633 38.1071 493.887 39.7811 491.982 40.3053ZM500.12 67.5063C500.372 68.6269 501.74 69.7194 503.645 69.1951C505.55 68.6709 506.295 66.9969 506.043 65.8762C505.791 64.7556 504.424 63.6631 502.519 64.1874C500.613 64.7116 499.868 66.3856 500.12 67.5063Z"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M301.366 93.002V98.3565L258.681 114.988L378.961 155.593C382.092 156.65 382.467 160.916 379.569 162.501L280.804 216.509C280.939 216.83 281.047 217.168 281.126 217.521C281.915 221.026 279.524 224.702 275.786 225.731C272.048 226.759 268.379 224.751 267.59 221.246C266.802 217.741 269.193 214.065 272.931 213.036C274.761 212.533 276.574 212.757 278.041 213.528L377.367 159.213L317.841 139.118L172.056 209.237C172.06 209.256 172.065 209.274 172.069 209.293L172.075 209.317L172.08 209.34C172.868 212.846 170.477 216.521 166.739 217.55C163.001 218.579 159.332 216.571 158.544 213.066C157.756 209.56 160.147 205.885 163.885 204.856C166.103 204.245 168.297 204.704 169.879 205.911L312.499 137.315L253.246 117.312L122.122 173.365C122.177 173.537 122.225 173.712 122.265 173.892C123.054 177.397 120.663 181.073 116.925 182.102C113.187 183.13 109.517 181.122 108.729 177.617C107.941 174.112 110.332 170.436 114.07 169.407C116.107 168.847 118.124 169.188 119.665 170.182L119.646 170.138L286.353 98.8736L233.287 79.8222L18.6502 165.559C18.6588 165.594 18.6672 165.628 18.6753 165.663C18.6791 165.679 18.6828 165.695 18.6864 165.711C19.4747 169.217 17.0836 172.892 13.3457 173.921C9.60778 174.95 5.93857 172.942 5.15028 169.437C4.36198 165.931 6.75311 162.256 10.491 161.227C12.6688 160.628 14.8232 161.059 16.3982 162.217L231.932 76.1222C232.78 75.7993 233.717 75.7904 234.571 76.0972L291.676 96.5984L301.366 93.002ZM274.921 221.887C273.016 222.412 271.649 221.319 271.397 220.199C271.145 219.078 271.89 217.404 273.795 216.88C275.7 216.355 277.068 217.448 277.32 218.568C277.572 219.689 276.827 221.363 274.921 221.887ZM162.35 212.018C162.602 213.139 163.97 214.231 165.875 213.707C167.78 213.183 168.526 211.509 168.274 210.388C168.022 209.267 166.654 208.175 164.749 208.699C162.844 209.223 162.098 210.897 162.35 212.018ZM116.06 178.258C114.155 178.783 112.788 177.69 112.536 176.569C112.284 175.449 113.029 173.775 114.934 173.251C116.839 172.726 118.207 173.819 118.459 174.939C118.711 176.06 117.965 177.734 116.06 178.258ZM8.95681 168.389C9.20882 169.51 10.5763 170.602 12.4814 170.078C14.3865 169.554 15.1319 167.88 14.8799 166.759C14.6279 165.638 13.2604 164.546 11.3553 165.07C9.4502 165.594 8.7048 167.268 8.95681 168.389Z"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M322.405 20.0302C320.862 22.1684 320.314 24.8367 320.314 26.565V42.1199C320.314 43.0996 318.783 43.8937 316.894 43.8937C315.005 43.8937 313.474 43.0996 313.474 42.1199V26.565C313.474 23.745 314.294 19.591 316.855 16.0439C319.541 12.3229 323.987 9.50915 330.574 9.50915C337.16 9.50915 341.606 12.3229 344.292 16.0439C346.853 19.591 347.673 23.745 347.673 26.565V47.2337C347.756 47.2411 347.839 47.2588 347.919 47.2866L361.259 51.9201C361.466 51.992 361.639 52.1255 361.76 52.2957L361.95 52.3616L361.832 52.4117C361.908 52.5558 361.95 52.719 361.95 52.8894V100.399C361.95 100.811 361.703 101.183 361.323 101.343L318.439 119.497C318.327 119.545 318.208 119.572 318.088 119.578V119.848L303.682 115.269V65.9614L303.838 65.8952C303.947 65.7202 304.11 65.5784 304.308 65.4942L338.675 50.9178C339.15 51.0123 339.643 51.059 340.137 51.059C340.37 51.059 340.603 51.0486 340.833 51.0278V26.565C340.833 24.8367 340.285 22.1684 338.742 20.0302C337.324 18.0659 334.931 16.3315 330.574 16.3315C326.216 16.3315 323.823 18.0659 322.405 20.0302ZM360.802 52.8483L360.921 52.8894V100.399L318.088 118.531V70.9652L360.802 52.8483ZM321.994 65.286C324.196 65.286 325.981 64.4244 325.981 63.3615C325.981 62.2986 324.196 61.437 321.994 61.437C319.792 61.437 318.006 62.2986 318.006 63.3615C318.006 64.4244 319.792 65.286 321.994 65.286Z"}))))},IntroBox_stories={title:"Components/IntroBox",component:IntroBox.m,argTypes:{children:{control:!1}}};var Default={args:{text:"Default IntroBox."}},WithTitle={args:{title:"IntroBox",text:"IntroBox with title."}},Hero={args:{title:"IntroBox",text:"Hero IntroBox has a larger font size and more padding",variant:"hero"}},HeroWithBGImage={args:{title:"IntroBox",text:"Hero IntroBox with background image. Background image must be referenced as a css bg image string. Import svg images with query param ?url.",variant:"hero",heroImage:"url(".concat(app_bg_example,"?url)")}};const __namedExportsOrder=["Default","WithTitle","Hero","HeroWithBGImage"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "Default IntroBox."\n  }\n}',...Default.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "IntroBox",\n    text: "IntroBox with title."\n  }\n}',...WithTitle.parameters?.docs?.source}}},Hero.parameters={...Hero.parameters,docs:{...Hero.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "IntroBox",\n    text: "Hero IntroBox has a larger font size and more padding",\n    variant: "hero"\n  }\n}',...Hero.parameters?.docs?.source}}},HeroWithBGImage.parameters={...HeroWithBGImage.parameters,docs:{...HeroWithBGImage.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "IntroBox",\n    text: "Hero IntroBox with background image. Background image must be referenced as a css bg image string. Import svg images with query param ?url.",\n    variant: "hero",\n    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions\n    heroImage: `url(${heroImage}?url)`\n  }\n}',...HeroWithBGImage.parameters?.docs?.source}}}}}]);