"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[5718],{"./src/deprecated_js/DataList/DataList.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>DataList,z:()=>useDataListContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DataListContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),useDataListContext=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataListContext),DataList=_ref=>{let{selectable=!1,className="",children=null,...props}=_ref;const dataListConf={selectable};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataListContext.Provider,{value:dataListConf},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-datalist-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",_extends({className:`juno-datalist ${className}`},props),children)))};DataList.propTypes={selectable:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node},DataList.__docgenInfo={description:"",methods:[],displayName:"DataList",props:{selectable:{defaultValue:{value:"false",computed:!1},description:"Whether the items of a DataList should be selectable",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataList",type:{name:"node"},required:!1}}}},"./src/deprecated_js/DataListCell/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_DataListCell_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _DataListCell_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/DataListCell/DataListCell.component.js")},"./src/deprecated_js/DataListRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>DataListRow});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DataList_component=__webpack_require__("./src/deprecated_js/DataList/DataList.component.js"),DataListCheckboxCell_component=__webpack_require__("./src/deprecated_js/DataListCheckboxCell/DataListCheckboxCell.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DataListRow=_ref=>{let{selected,disabled,onChange,className="",children=null,...props}=_ref;const selectable=((0,DataList_component.z)()||{}).selectable,[isSelected,setIsSelected]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsSelected(selected)}),[selected]);return react.createElement("li",_extends({className:`juno-datalist-row \n\tjn-flex\n\tjn-rounded-[3px]\n\tjn-border\n\tjn-border-theme-datalist-row\n\tjn-mb-2\n ${selectable&&isSelected?"\n\tjn-bg-theme-datalistrow-selected\n":""}${className}`},props),selectable?react.createElement(DataListCheckboxCell_component.I,{selected,disabled,onChange:event=>{setIsSelected(!isSelected),onChange(event)}}):null,children)};DataListRow.propTypes={className:prop_types_default().string,children:prop_types_default().node,selected:prop_types_default().bool,disabled:prop_types_default().bool,onChange:prop_types_default().func},DataListRow.__docgenInfo={description:"",methods:[],displayName:"DataListRow",props:{className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataListRow",type:{name:"node"},required:!1},selected:{description:"Wheter the Row is selected",type:{name:"bool"},required:!1},disabled:{description:"Wheter the Row is disabled",type:{name:"bool"},required:!1},onChange:{description:"Callback function for the onChange event",type:{name:"func"},required:!1}}}},"./src/deprecated_js/DataListCell/DataListCell.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/DataListCell/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Deprecated/DataList/DataListCell",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{children:{control:!1}},parameters:{docs:{description:{component:"DataList is deprecated and will be removed. Please use DataGrid instead."}}}},Default={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.Z,args),parameters:{docs:{description:{story:"Juno DataListCell for displaying data"}}},args:{children:["DataListCell"]}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataListCell for displaying data"\n      }\n    }\n  },\n  args: {\n    children: ["DataListCell"]\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/deprecated_js/DataListRow/DataListRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoWidth:()=>AutoWidth,Default:()=>Default,GridFitted:()=>GridFitted,PercentageWidths:()=>PercentageWidths,Selectable:()=>Selectable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/DataListRow/index.js"),_DataListCell_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/deprecated_js/DataListCell/index.js"),_DataListCheckboxCell_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/deprecated_js/DataListCheckboxCell/index.js"),_DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/deprecated_js/DataListCell/DataListCell.stories.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Deprecated/DataList/DataListRow",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.F,argTypes:{items:{table:{disable:!0}},children:{control:!1}},parameters:{docs:{description:{component:"DataList is deprecated and will be removed. Please use DataGrid instead."}}}},Template=_ref=>{let{items,...args}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.F,args,items.map(((item,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataListCell_index_js__WEBPACK_IMPORTED_MODULE_2__.Z,_extends({},item,{key:`${i}`})))))};Template.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default().array};const SelectableTemplate=_ref2=>{let{items,...args}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.F,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataListCheckboxCell_index_js__WEBPACK_IMPORTED_MODULE_3__.I,null),items.map(((item,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataListCell_index_js__WEBPACK_IMPORTED_MODULE_2__.Z,_extends({},item,{key:`${i}`})))))};SelectableTemplate.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default().array};const Default={render:Template,parameters:{docs:{description:{story:"Juno DataListRow for displaying data"}}},args:{items:[{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args}]}},Selectable={render:SelectableTemplate,parameters:{docs:{description:{story:"Selectable DataListRow for displaying and selecting data. Note that highlighting the row will not work when rendered outside a DataList. "}}},args:{items:[{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args}]}},AutoWidth={render:Template,parameters:{docs:{description:{story:"Row with one cell set to 'auto' in oder to maximize its width"}}},args:{items:[{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,auto:!0,children:"Auto DataListCell"},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args}]}},PercentageWidths={render:Template,parameters:{docs:{description:{story:"Row with Cells set to individual percentage widths"}}},args:{items:[{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,width:10},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,width:45},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,width:25},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,width:10},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,width:10}]}},GridFitted={render:Template,parameters:{docs:{description:{story:"Row with cells fitted to the Grid"}}},args:{items:[{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,cols:1,children:"cols 1"},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,cols:6,children:"cols 6"},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,cols:3,children:"cols 3"},{..._DataListCell_DataListCell_stories_js__WEBPACK_IMPORTED_MODULE_4__.Default.args,cols:2,children:"cols 2"}]}},__namedExportsOrder=["Default","Selectable","AutoWidth","PercentageWidths","GridFitted"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataListRow for displaying data"\n      }\n    }\n  },\n  args: {\n    items: [{\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }]\n  }\n}',...Default.parameters?.docs?.source}}},Selectable.parameters={...Selectable.parameters,docs:{...Selectable.parameters?.docs,source:{originalSource:'{\n  render: SelectableTemplate,\n  parameters: {\n    docs: {\n      description: {\n        story: "Selectable DataListRow for displaying and selecting data. Note that highlighting the row will not work when rendered outside a DataList. "\n      }\n    }\n  },\n  args: {\n    items: [{\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }]\n  }\n}',...Selectable.parameters?.docs?.source}}},AutoWidth.parameters={...AutoWidth.parameters,docs:{...AutoWidth.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Row with one cell set to \'auto\' in oder to maximize its width"\n      }\n    }\n  },\n  args: {\n    items: [{\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args,\n      auto: true,\n      children: "Auto DataListCell"\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }, {\n      ...DataListCellStory.args\n    }]\n  }\n}',...AutoWidth.parameters?.docs?.source}}},PercentageWidths.parameters={...PercentageWidths.parameters,docs:{...PercentageWidths.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Row with Cells set to individual percentage widths"\n      }\n    }\n  },\n  args: {\n    items: [{\n      ...DataListCellStory.args,\n      width: 10\n    }, {\n      ...DataListCellStory.args,\n      width: 45\n    }, {\n      ...DataListCellStory.args,\n      width: 25\n    }, {\n      ...DataListCellStory.args,\n      width: 10\n    }, {\n      ...DataListCellStory.args,\n      width: 10\n    }]\n  }\n}',...PercentageWidths.parameters?.docs?.source}}},GridFitted.parameters={...GridFitted.parameters,docs:{...GridFitted.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Row with cells fitted to the Grid"\n      }\n    }\n  },\n  args: {\n    items: [{\n      ...DataListCellStory.args,\n      cols: 1,\n      children: "cols 1"\n    }, {\n      ...DataListCellStory.args,\n      cols: 6,\n      children: "cols 6"\n    }, {\n      ...DataListCellStory.args,\n      cols: 3,\n      children: "cols 3"\n    }, {\n      ...DataListCellStory.args,\n      cols: 2,\n      children: "cols 2"\n    }]\n  }\n}',...GridFitted.parameters?.docs?.source}}}}}]);