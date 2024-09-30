"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3039],{"./src/components/ContentHeading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ContentHeading});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ContentHeading=function(_a){var _b=_a.heading,heading=void 0===_b?"":_b,_c=_a.className,className=void 0===_c?"":_c,_d=_a.children,children=void 0===_d?null:_d,props=__rest(_a,["heading","className","children"]);return(0,jsx_runtime.jsx)("h1",__assign({className:"juno-content-heading ".concat("\n  jn-font-bold\n  jn-text-lg\n  jn-text-theme-high\n  jn-pb-2\n"," ").concat(className)},props,{children:children||heading}))};try{ContentHeading.displayName="ContentHeading",ContentHeading.__docgenInfo={description:"\nThe main heading of a page/View. Pass as a child into `<AppShell>` or, when scaffolding manually, into `<ContentContainer>`.",displayName:"ContentHeading",props:{children:{defaultValue:{value:"null"},description:"Optionally render children. If children are present, heading will be ignored",name:"children",required:!1,type:{name:"any"}},heading:{defaultValue:{value:""},description:"Text to use as a title",name:"heading",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Add custom class name",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentHeading/ContentHeading.component.tsx#ContentHeading"]={docgenInfo:ContentHeading.__docgenInfo,name:"ContentHeading",path:"src/components/ContentHeading/ContentHeading.component.tsx#ContentHeading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ContentHeading/ContentHeading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/ContentHeading/index.ts")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const __WEBPACK_DEFAULT_EXPORT__={title:"Internal/ContentHeading",component:_index__WEBPACK_IMPORTED_MODULE_2__.O,argTypes:{children:{control:!1}}};var Default={render:function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.O,__assign({},args))},parameters:{docs:{description:{story:"The the main heading of the content area of a page/view."}}},args:{heading:"My Page Heading"}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "The the main heading of the content area of a page/view."\n      }\n    }\n  },\n  args: {\n    heading: "My Page Heading"\n  }\n}',...Default.parameters?.docs?.source}}}}}]);