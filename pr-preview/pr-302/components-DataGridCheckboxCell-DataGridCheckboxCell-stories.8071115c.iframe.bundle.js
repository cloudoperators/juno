"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8079],{"./src/components/DataGrid/DataGrid.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useDataGridContext,z:()=>DataGrid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const gridTemplate=(columns,columnMaxSize,columnMinSize,minContentColumns,gridColumnTemplate)=>{let styles;if(gridColumnTemplate&&gridColumnTemplate.length>0)return styles={gridTemplateColumns:gridColumnTemplate},styles;let generatedTemplate="";return minContentColumns&&Array.isArray(minContentColumns)&&minContentColumns.length>0?[...Array(columns)].map(((_,i)=>{generatedTemplate+=minContentColumns.includes(i)?"min-content ":`minmax(${columnMinSize}, ${columnMaxSize}) `})):generatedTemplate=`repeat(${columns}, minmax(${columnMinSize}, ${columnMaxSize}))`,styles={gridTemplateColumns:generatedTemplate},styles},DataGridContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),useDataGridContext=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataGridContext),DataGrid=_ref=>{let{columns=1,columnMaxSize="auto",columnMinSize="0px",minContentColumns,gridColumnTemplate,cellVerticalAlignment="center",className="",children=null,...props}=_ref;const dataGridConf={cellVerticalAlignment};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataGridContext.Provider,{value:dataGridConf},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-datagrid \n\tjn-grid\n\tjn-items-stretch\n ${className}`,style:gridTemplate(columns,columnMaxSize,columnMinSize,minContentColumns,gridColumnTemplate),role:"grid"},props),children))};DataGrid.propTypes={columns:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,columnMaxSize:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,columnMinSize:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,minContentColumns:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),gridColumnTemplate:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,cellVerticalAlignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["center","top"]),children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},DataGrid.__docgenInfo={description:"The DataGrid component is the main way to display lists of items that have a bunch of metadata that you want to display.",methods:[],displayName:"DataGrid",props:{columns:{defaultValue:{value:"1",computed:!1},description:"Set number of columns",type:{name:"number"},required:!1},columnMaxSize:{defaultValue:{value:'"auto"',computed:!1},description:'Set column max sizing. Default: auto. For equally sized columns use "1fr"',type:{name:"string"},required:!1},columnMinSize:{defaultValue:{value:'"0px"',computed:!1},description:"Set column minimum size. Default: 0px",type:{name:"string"},required:!1},cellVerticalAlignment:{defaultValue:{value:'"center"',computed:!1},description:"Set the vertical alignment for all GridCells. Default: center. PLEASE NOTE: the center alignment is achieved by using a flexbox column layout,\nwhich means that all child elements of the cell will be stacked vertically. To avoid this, wrap the elements in their own div",type:{name:"enum",value:[{value:'"center"',computed:!1},{value:'"top"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataGrid",type:{name:"node"},required:!1},minContentColumns:{description:"Specify which columns should be sized by minimum content size (i.e. as small as possible). Pass an array of column numbers (first column is 0)",type:{name:"arrayOf",value:{name:"number"}},required:!1},gridColumnTemplate:{description:"Set the grid column template in CSS grid 'grid-template-columns' notation. If this prop is passed, all other template props (columns, columnMaxSize,\n columnMinSize, minContentColumns) are ignored. The easiest case where you might need this is e.g. if you want to set specific column widths for some\n or all columns, e.g. \"20% auto auto 10%\" (The first column is set to 20%, the next two to auto size, the last to 10%).",type:{name:"string"},required:!1}}}},"./src/components/DataGrid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_DataGrid_component__WEBPACK_IMPORTED_MODULE_0__.z});var _DataGrid_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DataGrid/DataGrid.component.js")},"./src/components/DataGridCell/DataGridCell.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>DataGridCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_DataGrid_DataGrid_component_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DataGrid/DataGrid.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const cellBaseStyles=(nowrap,cellVerticalAlignment)=>`\n\t\t${nowrap?"jn-whitespace-nowrap":""}\n\t\t${"center"===cellVerticalAlignment?"\n\t\t\t\tjn-justify-center\n\t\t\t\tjn-flex\n\t\t\t\tjn-flex-col\t\t\n\t\t\t":""}\n\t\tjn-px-5\n\t\tjn-py-3\n\t\tjn-border-b\n\t\tjn-border-theme-background-lvl-2\n\t\tjn-h-full\n\t`,cellCustomStyles=colSpan=>{let styles;return colSpan&&(styles={gridColumn:`span ${colSpan} / span ${colSpan}`}),styles},DataGridCell=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{colSpan,nowrap=!1,className="",children=null,...props}=_ref;const cellVerticalAlignment=((0,_DataGrid_DataGrid_component_js__WEBPACK_IMPORTED_MODULE_1__.t)()||{}).cellVerticalAlignment;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-datagrid-cell ${cellBaseStyles(nowrap,cellVerticalAlignment)} ${className}`,style:cellCustomStyles(colSpan),role:"gridcell",ref},props),children)}));DataGridCell.displayName="DataGridCell",DataGridCell.propTypes={colSpan:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,nowrap:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},DataGridCell.__docgenInfo={description:"",methods:[],displayName:"DataGridCell",props:{nowrap:{defaultValue:{value:"false",computed:!1},description:"Set nowrap to true if the cell content shouldn't wrap (this is achieved by adding white-space: nowrap;)",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a classname",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataGridCell",type:{name:"node"},required:!1},colSpan:{description:"Add a col span to the cell. This works like a colspan in a normal html table, so you have to take care not to place too many cells in a row if some of them have a colspan.",type:{name:"number"},required:!1}}}},"./src/components/DataGridRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DataGridRow});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DataGridRow=(0,react.forwardRef)(((_ref,ref)=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-datagrid-row \n\tjn-contents\n ${className}`,role:"row",ref},props),children)}));DataGridRow.displayName="DataGridRow",DataGridRow.propTypes={children:prop_types_default().node,className:prop_types_default().string},DataGridRow.__docgenInfo={description:"",methods:[],displayName:"DataGridRow",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add a classname",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataGridRow",type:{name:"node"},required:!1}}}},"./src/components/FormHint/FormHint.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const variantStyles=variant=>{switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=_ref=>{let{children=null,text="",variant="help",className,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n        juno-form-hint\n        juno-form-hint-${variant}\n        \n  jn-text-xs\n  jn-mt-1\n\n        ${variantStyles(variant)}\n        ${className}\n      `},props),children||text)};FormHint.displayName="FormHint Js",FormHint.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["help","error","success"]),className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint Js",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}}},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.js")},"./src/components/Label/Label.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,forwardedRef)=>{let{text="",htmlFor,required=!1,className="",disabled=!1,floating=!1,minimized=!1,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:`\n\t\t\t\tjuno-label \n\t\t\t\t\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-transform \n\tjn-origin-top-left \n\tjn-transition-all \n\tjn-duration-100 \n\tjn-ease-in-out\n\tjn-z-10\n \n\t\t\t\t${floating?"juno-label-floating \n\tjn-absolute\n":""}\n\t\t\t\t${minimized?"juno-label-minimized \n\tjn-scale-75\n\t-jn-translate-y-[0.4375rem]\n":""}\n\t\t\t\t${disabled?"juno-label-disabled \n\tjn-opacity-50\n\tjn-cursor-not-allowed\n":""} \n\t\t\t\t${className}\n\t\t\t`,htmlFor,ref:forwardedRef},props),text,required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\t\t\t\t\tjuno-required \n\t\t\t\t\t\n\tjn-inline-block\n\tjn-w-1\n\tjn-h-1\n\tjn-rounded-full\n\tjn-align-top\n\tjn-ml-1\n\tjn-mt-2\n\tjn-bg-theme-required\n\n\t\t\t\t\t"}):"")}));Label.displayName="Label (JS)",Label.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,htmlFor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,floating:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,minimized:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool},Label.__docgenInfo={description:"A re-usable Label component",methods:[],displayName:"Label (JS)",props:{text:{defaultValue:{value:'""',computed:!1},description:"Pass a string of text to be rendered as contents. Required.",type:{name:"string"},required:!1},htmlFor:{defaultValue:{value:"undefined",computed:!0},description:"An Id of an input element to associate the label with",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Label for a disabled input",type:{name:"bool"},required:!1},floating:{defaultValue:{value:"false",computed:!1},description:"Whether the label is floating",type:{name:"bool"},required:!1},minimized:{defaultValue:{value:"false",computed:!1},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",type:{name:"bool"},required:!1}}}},"./src/components/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Label/Label.component.js")},"./src/components/DataGridCheckboxCell/DataGridCheckboxCell.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataGridCheckboxCell_stories});var react=__webpack_require__("../../node_modules/react/index.js"),DataGrid=__webpack_require__("./src/components/DataGrid/index.js"),DataGridRow=__webpack_require__("./src/components/DataGridRow/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Checkbox_component=__webpack_require__("./src/components/Checkbox/Checkbox.component.js"),DataGridCell_component=__webpack_require__("./src/components/DataGridCell/DataGridCell.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DataGridCheckboxCell=_ref=>{let{selected=!1,disabled=!1,className="",onChange,...props}=_ref;return react.createElement(DataGridCell_component.N,_extends({className:`juno-datagrid-checkbox-cell ${className}`},props),react.createElement(Checkbox_component.S,{disabled,checked:selected,onChange}))};DataGridCheckboxCell.propTypes={selected:prop_types_default().bool,disabled:prop_types_default().bool,className:prop_types_default().string,onChange:prop_types_default().func},DataGridCheckboxCell.__docgenInfo={description:"",methods:[],displayName:"DataGridCheckboxCell",props:{selected:{defaultValue:{value:"false",computed:!1},description:"Whether the row this cell belongs to is selected",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a classname to the cell",type:{name:"string"},required:!1},onChange:{description:"Handler to change the selected state of the row",type:{name:"func"},required:!1}}};const DataGridCheckboxCell_stories={title:"WiP/DataGrid/DataGridCheckboxCell",component:DataGridCheckboxCell,argTypes:{children:{control:!1}},decorators:[story=>react.createElement(DataGrid.z,{columns:3},react.createElement(DataGridRow.r,null,story()))],parameters:{docs:{source:{excludeDecorators:!1}}}},Template=args=>react.createElement(DataGridCheckboxCell,args),Default={render:Template,parameters:{docs:{description:{story:"Juno DataGridCheckboxCell for use in DataGrid"}}},args:{}},Disabled={render:Template,parameters:{docs:{description:{story:"Disabled Juno DataGridCheckboxCell for use in DataGrid"}}},args:{disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataGridCheckboxCell for use in DataGrid"\n      }\n    }\n  },\n  args: {}\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Juno DataGridCheckboxCell for use in DataGrid"\n      }\n    }\n  },\n  args: {\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}}}}]);