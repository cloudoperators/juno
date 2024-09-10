"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2447],{"./src/components/DataListCell/DataListCell.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DataListCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const colsClass=cols=>{switch(cols){case 1:return"\n\tjn-w-grid-col-1\n";case 2:return"\n\tjn-w-grid-col-2\n";case 3:return"\n\tjn-w-grid-col-3\n";case 4:return"\n\tjn-w-grid-col-4\n";case 5:case 6:return"\n\tjn-w-grid-col-6\n";case 7:return"\n\tjn-w-grid-col-7\n";case 8:return"\n\tjn-w-grid-col-8\n";case 9:return"\n\tjn-w-grid-col-9\n";case 10:return"\n\tjn-w-grid-col-10\n";case 11:return"\n\tjn-w-grid-col-11\n";case 12:return"\n\tjn-w-grid-col-12\n"}},DataListCell=_ref=>{let{cols=null,width=null,auto=!1,className="",children=null,...props}=_ref;const cellStyles=width?width?{width:width+"%",flexGrow:"0",flexShrink:"0",flexBasis:width+"%"}:{}:auto?{flexGrow:"1",flexShrink:"0",flexBasis:"0"}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-datalist-cell \n\tjn-flex\n\tjn-p-2\n\tjn-overflow-hidden\n\tjn-overflow-ellipsis\n\tjn-grow-0\n\tjn-shrink-0\n\tjn-flex-basis-auto\n ${cols?colsClass(cols):""} ${className}`,style:cellStyles},props),children)};DataListCell.propTypes={cols:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,width:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,auto:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node},DataListCell.__docgenInfo={description:"",methods:[],displayName:"DataListCell",props:{cols:{defaultValue:{value:"null",computed:!1},description:"The number of columns to span the column over when fitting to the grid.",type:{name:"number"},required:!1},width:{defaultValue:{value:"null",computed:!1},description:'The width in percent as a number without "%" for auto-layout grids TODO: or "auto". If a width is given, it will override the "cols" prop.',type:{name:"number"},required:!1},auto:{defaultValue:{value:"false",computed:!1},description:"Whether the colum should set an auto width",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataListCell",type:{name:"node"},required:!1}}}},"./src/components/DataListCheckboxCell/DataListCheckboxCell.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>DataListCheckboxCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_CheckboxJs_Checkbox_component_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CheckboxJs/Checkbox.component.js"),_DataListCell_DataListCell_component_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DataListCell/DataListCell.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DataListCheckboxCell=_ref=>{let{selected=!1,disabled=!1,onChange,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataListCell_DataListCell_component_js__WEBPACK_IMPORTED_MODULE_2__.Z,_extends({className:`juno-datalist-checkbox-cell \n\tjn-flex\n\tjn-flex-col\n\tjn-justify-center\n ${className}`},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CheckboxJs_Checkbox_component_js__WEBPACK_IMPORTED_MODULE_1__.S,{disabled,checked:selected,onChange}))};DataListCheckboxCell.propTypes={selected:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func},DataListCheckboxCell.__docgenInfo={description:"",methods:[],displayName:"DataListCheckboxCell",props:{selected:{defaultValue:{value:"false",computed:!1},description:"Whether the item this cell belongs to is selected",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},onChange:{description:"Handler to execute when selected state changes",type:{name:"func"},required:!1}}}},"./src/components/DataListCheckboxCell/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_DataListCheckboxCell_component__WEBPACK_IMPORTED_MODULE_0__.I});var _DataListCheckboxCell_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DataListCheckboxCell/DataListCheckboxCell.component.js")},"./src/components/DataListCheckboxCell/DataListCheckboxCell.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DataListCheckboxCell/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Deprecated/DataList/DataListCheckboxCell",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.I,argTypes:{children:{control:!1}},parameters:{docs:{description:{component:"DataList is deprecated and will be removed. Please use DataGrid instead."}}}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.I,args),Default={render:Template,parameters:{docs:{description:{story:"Juno DataListCheckboxCell for use in DataList"}}},args:{}},Disabled={render:Template,parameters:{docs:{description:{story:"Disabled Juno DataListCheckboxCell for use in DataList"}}},args:{disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataListCheckboxCell for use in DataList"\n      }\n    }\n  },\n  args: {}\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Juno DataListCheckboxCell for use in DataList"\n      }\n    }\n  },\n  args: {\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}}}}]);