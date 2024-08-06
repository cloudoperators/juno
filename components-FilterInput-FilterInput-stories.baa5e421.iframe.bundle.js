"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6443],{"./src/components/FilterInput/FilterInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,Preselected:()=>Preselected,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FilterInput_stories});const FilterInput_stories={title:"Deprecated/Filter/FilterInput",component:__webpack_require__("./src/components/FilterInput/FilterInput.component.js").Z,argTypes:{}},Default={args:{valuePlaceholder:"Enter a value",options:[{label:"Filter 1",key:"filter-1"},{label:"Filter 2",key:"filter-2",disabled:!0},{label:"Filter 3",key:"filter-3"}]}},Preselected={args:{keyLabel:"Select a fancy Filter",selectedFilterKey:"filter-2",options:[{label:"Filter 1",key:"filter-1"},{label:"Filter 2",key:"filter-2"},{label:"Filter 3",key:"filter-3"}]}},Loading={args:{options:[],loading:!0}},WithError={args:{options:[],error:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    valuePlaceholder: "Enter a value",\n    options: [{\n      label: "Filter 1",\n      key: "filter-1"\n    }, {\n      label: "Filter 2",\n      key: "filter-2",\n      disabled: true\n    }, {\n      label: "Filter 3",\n      key: "filter-3"\n    }]\n  }\n}',...Default.parameters?.docs?.source}}},Preselected.parameters={...Preselected.parameters,docs:{...Preselected.parameters?.docs,source:{originalSource:'{\n  args: {\n    keyLabel: "Select a fancy Filter",\n    selectedFilterKey: "filter-2",\n    options: [{\n      label: "Filter 1",\n      key: "filter-1"\n    }, {\n      label: "Filter 2",\n      key: "filter-2"\n    }, {\n      label: "Filter 3",\n      key: "filter-3"\n    }]\n  }\n}',...Preselected.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: [],\n    loading: true\n  }\n}",...Loading.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: [],\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Preselected","Loading","WithError"]},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.js")},"./src/components/Spinner/Spinner.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Spinner=_ref=>{let{variant="default",size=null,className="",color="",...props}=_ref;const sizing=size=>{switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{className:`juno-spinner \n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n ${color||(()=>{switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}})()} ${className}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar",...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})};Spinner.displayName="Spinner",Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["primary","danger","default","success","warning"]),size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic color variant of the Spinner",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"danger"',computed:!1},{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1},size:{defaultValue:{value:"null",computed:!1},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom classNames",type:{name:"string"},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',type:{name:"string"},required:!1}}}}}]);