"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2257],{"./src/components/GridColumn/GridColumn.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},columnWidthStyles={0:"jn-w-grid-column-default",1:"jn-w-grid-col-1",2:"jn-w-grid-col-2",3:"jn-w-grid-col-3",4:"jn-w-grid-col-4",5:"jn-w-grid-col-5",6:"jn-w-grid-col-6",7:"jn-w-grid-col-7",8:"jn-w-grid-col-8",9:"jn-w-grid-col-9",10:"jn-w-grid-col-10",11:"jn-w-grid-col-11",12:"jn-w-grid-col-12"},autoColumnStyles={flexGrow:"1",flexShrink:"0",flexBasis:"0"},getColumnWidthStyles=function(cols){return!cols||cols<1||cols>12?columnWidthStyles[0]:columnWidthStyles[cols]},GridColumn=function(_a){var _b=_a.width,width=void 0===_b?null:_b,_c=_a.cols,cols=void 0===_c?null:_c,_d=_a.auto,auto=void 0!==_d&&_d,_e=_a.className,className=void 0===_e?"":_e,_f=_a.children,children=void 0===_f?null:_f,props=__rest(_a,["width","cols","auto","className","children"]),widthBasedStyles=width?{width:"".concat(width,"%"),flexGrow:"0",flexShrink:"0",flexBasis:"".concat(width,"%")}:{},finalColumnStyles=width?widthBasedStyles:auto?autoColumnStyles:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"juno-grid-column ".concat("\n  jn-flex-grid-column\n  jn-p-grid-column\n"," ").concat(getColumnWidthStyles(cols)," ").concat(className),style:finalColumnStyles},props,{children}))};try{GridColumn.displayName="GridColumn",GridColumn.__docgenInfo={description:"A flexible grid column component used within a Grid.",displayName:"GridColumn",props:{cols:{defaultValue:{value:"null"},description:"The number of columns to span the column over.",name:"cols",required:!1,type:{name:"number"}},width:{defaultValue:{value:"null"},description:"The width in percent.\nIf a width is given, it will override the 'cols' prop.",name:"width",required:!1,type:{name:"number"}},auto:{defaultValue:{value:"false"},description:"Determines whether the column should set an auto width.",name:"auto",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the grid column for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Content to be rendered inside the column.",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridColumn/GridColumn.component.tsx#GridColumn"]={docgenInfo:GridColumn.__docgenInfo,name:"GridColumn",path:"src/components/GridColumn/GridColumn.component.tsx#GridColumn"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/GridColumn/GridColumn.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoColumn:()=>AutoColumn,Default:()=>Default,WidthColumn:()=>WidthColumn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_GridColumn_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/GridColumn/GridColumn.component.tsx")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Grid/GridColumn",component:_GridColumn_component__WEBPACK_IMPORTED_MODULE_2__.H,argTypes:{children:{control:!1}},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"jn-bg-juno-blue-3 jn-text-juno-grey-blue",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}]};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridColumn_component__WEBPACK_IMPORTED_MODULE_2__.H,__assign({},args))},Default={render:Template,args:{children:"Column"}},AutoColumn={render:Template,args:{auto:!0,children:"Auto Column"}},WidthColumn={render:Template,args:{width:50,children:"Column 50%"}};const __namedExportsOrder=["Default","AutoColumn","WidthColumn"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: "Column"\n  }\n}',...Default.parameters?.docs?.source}}},AutoColumn.parameters={...AutoColumn.parameters,docs:{...AutoColumn.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    auto: true,\n    children: "Auto Column"\n  }\n}',...AutoColumn.parameters?.docs?.source}}},WidthColumn.parameters={...WidthColumn.parameters,docs:{...WidthColumn.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    width: 50,\n    children: "Column 50%"\n  }\n}',...WidthColumn.parameters?.docs?.source}}}}}]);