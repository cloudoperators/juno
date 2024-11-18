"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6177],{"./src/components/DataGrid/DataGrid.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useDataGridContext,z:()=>DataGrid});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},gridTemplate=function(columns,columnMaxSize,columnMinSize,minContentColumns,gridColumnTemplate){if(gridColumnTemplate&&gridColumnTemplate.length>0)return{gridTemplateColumns:gridColumnTemplate};var generatedTemplate="";minContentColumns&&Array.isArray(minContentColumns)&&minContentColumns.length>0?__spreadArray([],Array(columns),!0).map((function(_,i){generatedTemplate+=minContentColumns.includes(i)?"min-content ":"minmax(".concat(columnMinSize,", ").concat(columnMaxSize,") ")})):generatedTemplate="repeat(".concat(columns,", minmax(").concat(columnMinSize,", ").concat(columnMaxSize,"))");return{gridTemplateColumns:generatedTemplate}},DataGridContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext({}),useDataGridContext=function(){return react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataGridContext)},DataGrid=function(_a){var _b=_a.columns,columns=void 0===_b?1:_b,_c=_a.columnMaxSize,columnMaxSize=void 0===_c?"auto":_c,_d=_a.columnMinSize,columnMinSize=void 0===_d?"0px":_d,minContentColumns=_a.minContentColumns,gridColumnTemplate=_a.gridColumnTemplate,_e=_a.cellVerticalAlignment,cellVerticalAlignment=void 0===_e?"center":_e,_f=_a.className,className=void 0===_f?"":_f,_g=_a.children,children=void 0===_g?null:_g,props=__rest(_a,["columns","columnMaxSize","columnMinSize","minContentColumns","gridColumnTemplate","cellVerticalAlignment","className","children"]),dataGridConf={cellVerticalAlignment};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DataGridContext.Provider,{value:dataGridConf,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"juno-datagrid ".concat("\n\tjn-grid\n\tjn-items-stretch\n"," ").concat(className),style:gridTemplate(columns,columnMaxSize,columnMinSize,minContentColumns,gridColumnTemplate),role:"grid"},props,{children}))})};try{DataGrid.displayName="DataGrid",DataGrid.__docgenInfo={description:"The DataGrid component is the main way to display lists of items that have a bunch of metadata that you want to display.",displayName:"DataGrid",props:{columns:{defaultValue:{value:"1"},description:"Set number of columns",name:"columns",required:!1,type:{name:"number"}},columnMaxSize:{defaultValue:{value:"auto"},description:'Set column max sizing. Default: auto. For equally sized columns use "1fr"',name:"columnMaxSize",required:!1,type:{name:"string"}},columnMinSize:{defaultValue:{value:"0px"},description:"Set column minimum size. Default: 0px",name:"columnMinSize",required:!1,type:{name:"string"}},minContentColumns:{defaultValue:null,description:"Specify which columns should be sized by minimum content size (i.e. as small as possible). Pass an array of column numbers (first column is 0)",name:"minContentColumns",required:!1,type:{name:"number[]"}},gridColumnTemplate:{defaultValue:null,description:"Set the grid column template in CSS grid 'grid-template-columns' notation. If this prop is passed, all other template props (columns, columnMaxSize,\ncolumnMinSize, minContentColumns) are ignored. The easiest case where you might need this is e.g. if you want to set specific column widths for some\nor all columns, e.g. \"20% auto auto 10%\" (The first column is set to 20%, the next two to auto size, the last to 10%).",name:"gridColumnTemplate",required:!1,type:{name:"string"}},cellVerticalAlignment:{defaultValue:{value:"center"},description:"Set the vertical alignment for all GridCells. Default: center. PLEASE NOTE: the center alignment is achieved by using a flexbox column layout,\nwhich means that all child elements of the cell will be stacked vertically. To avoid this, wrap the elements in their own div",name:"cellVerticalAlignment",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},children:{defaultValue:{value:"null"},description:"Children to render in the DataGrid",name:"children",required:!1,type:{name:"Element | (Element | Element[] | null)[] | null"}},className:{defaultValue:{value:""},description:"Add a class name",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGrid.component.tsx#DataGrid"]={docgenInfo:DataGrid.__docgenInfo,name:"DataGrid",path:"src/components/DataGrid/DataGrid.component.tsx#DataGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DataGrid/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_DataGrid_component__WEBPACK_IMPORTED_MODULE_0__.z});var _DataGrid_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DataGrid/DataGrid.component.tsx")},"./src/components/DataGridCell/DataGridCell.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>DataGridCell});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_DataGrid_DataGrid_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DataGrid/DataGrid.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},cellBaseStyles=function(nowrap,cellVerticalAlignment){return"\n\t\t".concat(nowrap?"jn-whitespace-nowrap":"","\n\t\t").concat("center"===cellVerticalAlignment?"\n\t\t\t\tjn-justify-center\n\t\t\t\tjn-flex\n\t\t\t\tjn-flex-col\t\t\n\t\t\t":"","\n\t\tjn-px-5\n\t\tjn-py-3\n\t\tjn-border-b\n\t\tjn-border-theme-background-lvl-2\n\t\tjn-h-full\n\t")},cellCustomStyles=function(colSpan){var styles;return colSpan&&(styles={gridColumn:"span ".concat(colSpan," / span ").concat(colSpan)}),styles},DataGridCell=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_a,ref){var colSpan=_a.colSpan,_b=_a.nowrap,nowrap=void 0!==_b&&_b,_c=_a.className,className=void 0===_c?"":_c,_d=_a.children,children=void 0===_d?null:_d,props=__rest(_a,["colSpan","nowrap","className","children"]),cellVerticalAlignment=((0,_DataGrid_DataGrid_component__WEBPACK_IMPORTED_MODULE_2__.t)()||{}).cellVerticalAlignment;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"juno-datagrid-cell ".concat(cellBaseStyles(nowrap,cellVerticalAlignment)," ").concat(className),style:cellCustomStyles(colSpan),role:"gridcell",ref},props,{children}))}));DataGridCell.displayName="DataGridCell";try{DataGridCell.displayName="DataGridCell",DataGridCell.__docgenInfo={description:"",displayName:"DataGridCell",props:{className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Children to render in the DataGridCell",name:"children",required:!1,type:{name:"any"}},colSpan:{defaultValue:null,description:"Add a col span to the cell. This works like a colspan in a normal html table, so you have to take care not to place too many cells in a row if some of them have a colspan.",name:"colSpan",required:!1,type:{name:"number"}},nowrap:{defaultValue:{value:"false"},description:"Set nowrap to true if the cell content shouldn't wrap (this is achieved by adding white-space: nowrap;)",name:"nowrap",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DataGridCell/DataGridCell.component.tsx#DataGridCell"]={docgenInfo:DataGridCell.__docgenInfo,name:"DataGridCell",path:"src/components/DataGridCell/DataGridCell.component.tsx#DataGridCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DataGridCell/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>_DataGridCell_component__WEBPACK_IMPORTED_MODULE_0__.N});var _DataGridCell_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DataGridCell/DataGridCell.component.tsx")},"./src/components/DataGridRow/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DataGridRow});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},DataGridRow=(0,react.forwardRef)((function(_a,ref){var _b=_a.className,className=void 0===_b?"":_b,_c=_a.children,children=void 0===_c?null:_c,props=__rest(_a,["className","children"]);return(0,jsx_runtime.jsx)("div",__assign({className:"juno-datagrid-row ".concat("\n\tjn-contents\n"," ").concat(className),role:"row",ref},props,{children}))}));DataGridRow.displayName="DataGridRow";try{DataGridRow.displayName="DataGridRow",DataGridRow.__docgenInfo={description:"",displayName:"DataGridRow",props:{children:{defaultValue:{value:"null"},description:"Children to render in the DataGridRow",name:"children",required:!1,type:{name:"Element | (Element | null)[] | null"}},className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DataGridRow/DataGridRow.component.tsx#DataGridRow"]={docgenInfo:DataGridRow.__docgenInfo,name:"DataGridRow",path:"src/components/DataGridRow/DataGridRow.component.tsx#DataGridRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DataGridCell/DataGridCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColSpan:()=>ColSpan,Default:()=>Default,NoWrap:()=>NoWrap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_DataGrid_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/DataGrid/index.ts")),_DataGridRow_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/DataGridRow/index.ts"),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DataGridCell/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/DataGrid/DataGridCell",component:_index__WEBPACK_IMPORTED_MODULE_4__.N,argTypes:{children:{control:!1}},decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataGrid_index__WEBPACK_IMPORTED_MODULE_2__.z,{columns:3,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataGridRow_index__WEBPACK_IMPORTED_MODULE_3__.r,{children:story()})})}],parameters:{docs:{source:{excludeDecorators:!1}}}};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.N,__assign({},args))},Default={render:Template,parameters:{docs:{description:{story:"Juno DataGridCell for use in DataGrid"}}},args:{children:["DataGridCell"]}},NoWrap={render:Template,parameters:{docs:{description:{story:"Juno DataGridCell with nowrap option (content has white-space: nowrap;)"}}},args:{nowrap:!0,children:["DataGridCell does not wrap"]}},ColSpan={render:Template,parameters:{docs:{description:{story:"Juno DataGridCell with colspan"}}},args:{colSpan:3,children:["DataGridCell with colspan"]}};const __namedExportsOrder=["Default","NoWrap","ColSpan"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataGridCell for use in DataGrid"\n      }\n    }\n  },\n  args: {\n    children: ["DataGridCell"]\n  }\n}',...Default.parameters?.docs?.source}}},NoWrap.parameters={...NoWrap.parameters,docs:{...NoWrap.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataGridCell with nowrap option (content has white-space: nowrap;)"\n      }\n    }\n  },\n  args: {\n    nowrap: true,\n    children: ["DataGridCell does not wrap"]\n  }\n}',...NoWrap.parameters?.docs?.source}}},ColSpan.parameters={...ColSpan.parameters,docs:{...ColSpan.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataGridCell with colspan"\n      }\n    }\n  },\n  args: {\n    colSpan: 3,\n    children: ["DataGridCell with colspan"]\n  }\n}',...ColSpan.parameters?.docs?.source}}}}}]);