"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6747],{"./src/components/Label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Label=react.forwardRef((function(_a,forwardedRef){var _b=_a.text,text=void 0===_b?"":_b,_c=_a.htmlFor,htmlFor=void 0===_c?void 0:_c,_d=_a.required,required=void 0!==_d&&_d,_e=_a.className,className=void 0===_e?"":_e,_f=_a.disabled,disabled=void 0!==_f&&_f,_g=_a.floating,floating=void 0!==_g&&_g,_h=_a.minimized,minimized=void 0!==_h&&_h,props=__rest(_a,["text","htmlFor","required","className","disabled","floating","minimized"]);return(0,jsx_runtime.jsxs)("label",__assign({className:"\n        juno-label \n        ".concat("\n  jn-text-theme-high\n  jn-text-base\n  jn-transform \n  jn-origin-top-left \n  jn-transition-all \n  jn-duration-100 \n  jn-ease-in-out\n"," \n        ").concat(floating?"juno-label-floating \n  jn-absolute\n":"","\n        ").concat(minimized?"juno-label-minimized \n  jn-scale-75\n  -jn-translate-y-[0.4375rem]\n":"","\n        ").concat(disabled?"juno-label-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":""," \n        ").concat(className,"\n      "),htmlFor,ref:forwardedRef},props,{children:[text,required?(0,jsx_runtime.jsx)("span",{className:"\n          juno-required \n          ".concat("\n  jn-inline-block\n  jn-w-1\n  jn-h-1\n  jn-rounded-full\n  jn-align-top\n  jn-ml-1\n  jn-mt-2\n  jn-bg-theme-required\n","\n          ")}):""]}))}));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"A re-usable Label component",displayName:"Label",props:{text:{defaultValue:{value:""},description:"Pass a string of text to be rendered as contents. Required.",name:"text",required:!1,type:{name:"string"}},htmlFor:{defaultValue:{value:"undefined"},description:"An Id of an input element to associate the label with",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Required",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Label for a disabled input",name:"disabled",required:!1,type:{name:"boolean"}},floating:{defaultValue:{value:"false"},description:"Whether the label is floating",name:"floating",required:!1,type:{name:"boolean"}},minimized:{defaultValue:{value:"false"},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",name:"minimized",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.component.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.component.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/Label.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Label",component:__webpack_require__("./src/components/Label/index.ts").J,argTypes:{}};var Default={args:{text:"My Label"}},Disabled={args:{text:"My disabled label",disabled:!0}},Required={args:{text:"My required label",required:!0}};const __namedExportsOrder=["Default","Disabled","Required"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "My Label"\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "My disabled label",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "My required label",\n    required: true\n  }\n}',...Required.parameters?.docs?.source}}}}}]);