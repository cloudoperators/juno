"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[1735],{"./src/components/NativeSelect/NativeSelect.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>NativeSelect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/Icon/index.js"),_deprecated_js_Spinner_Spinner_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/deprecated_js/Spinner/Spinner.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const NativeSelect=_ref=>{let{name=null,id="",children,className="",disabled=null,invalid=!1,valid=!1,loading=!1,error=!1,onChange,onClick,wrapperClassName="",...props}=_ref;const[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isInvalid,setIsInvalid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isValid,setIsValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasError,setHasError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsLoading(loading)}),[loading]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsInvalid(invalid)}),[invalid]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsValid(valid)}),[valid]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setHasError(error)}),[error]);const SelectIcons=_ref2=>{let{disabled}=_ref2;return isLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-select-loading \n\tjn-absolute\n\tjn-top-0\n\tjn-right-0\n\tjn-bottom-0\n\tjn-left-0\n\tjn-text-center\n\tjn-bg-theme-select\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-rounded-3px\n\tjn-flex\n\tjn-flex-col\n\tjn-justify-center\n\tjn-select-none\n\tjn-cursor-not-allowed\n"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Spinner_Spinner_component__WEBPACK_IMPORTED_MODULE_2__.y,{className:"\n\tjn-ml-auto\n\tjn-mr-auto\n"})):hasError?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-select-errortext \n\tjn-absolute\n\tjn-top-0\n\tjn-right-0\n\tjn-bottom-0\n\tjn-left-0\n\tjn-text-center\n\tjn-bg-theme-select\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-rounded-3px\n\tjn-flex\n\tjn-flex-col\n\tjn-justify-center\n\tjn-select-none\n\tjn-cursor-not-allowed\n"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"errorOutline",color:"jn-text-theme-error",className:"\n\tjn-ml-auto\n\tjn-mr-auto\n"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n\tjn-absolute\n\tjn-flex\n\tjn-right-2\n\tjn-top-1.5\n\tjn-pointer-events-none\n ${disabled?"\n\tjn-opacity-50\n":""} `},isInvalid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"dangerous",color:"jn-text-theme-error"}):null,isValid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"checkCircle",color:"jn-text-theme-success"}):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"expandMore"}))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n      juno-select-wrapper \n      \n\tjn-relative\n\n      ${wrapperClassName}`},react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",_extends({name:name||"Unnamed Select",id,className:`juno-select \n\tjn-w-full\n\tjn-bg-theme-select\n\tjn-text-theme-high\n\tjn-appearance-none\n\tjn-text-base\n\tjn-pl-4\n\tjn-h-[2.375rem]\n\tjn-rounded-3px\n\tjn-bg-icon-arrow-down\n\tjn-bg-right\n\tjn-bg-no-repeat\n\tfocus:jn-outline-none\n\tfocus:jn-ring-2\n\tfocus:jn-ring-theme-focus\n\tdisabled:jn-opacity-50\n ${isInvalid?"juno-select-invalid \n\tjn-border\n\tjn-border-theme-error\n":""} ${isValid?"juno-select-valid \n\tjn-border\n\tjn-border-theme-success\n":""} ${hasError?"juno-select-error ":""} ${isValid||isInvalid?"\n\tjn-pr-[3.75rem]\n":"\n\tjn-pr-9\n"} ${className}`,onChange:event=>{onChange&&onChange(event)},onClick:event=>{onClick&&onClick(event)},disabled:disabled||isLoading||hasError},props),children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectIcons,{disabled}))};NativeSelect.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,invalid:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,loading:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,error:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},NativeSelect.__docgenInfo={description:"A basic, uncontrolled, native html Select. Takes SelectOption and SelectOptionGroup as children.",methods:[],displayName:"NativeSelect",props:{name:{defaultValue:{value:"null",computed:!1},description:"Pass a name.",type:{name:"string"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"The id of the select",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname. The class name is applied to the internal select element.",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the select",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is valid",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the select is currently loading",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the select has an error. Don't use this to show the user selection is invalid. Use to show when there was an error fetching data.",type:{name:"bool"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},children:{description:"Pass SelectOption and SelectOptionGroup as children.",type:{name:"node"},required:!1},onChange:{description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{description:"Pass a click handler",type:{name:"func"},required:!1}}}},"./src/components/NativeSelect/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_NativeSelect_component__WEBPACK_IMPORTED_MODULE_0__.m});var _NativeSelect_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/NativeSelect/NativeSelect.component.js")},"./src/components/NativeSelectOption/NativeSelectOption.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>NativeSelectOption});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const NativeSelectOption=_ref=>{let{value=null,label=null,disabled=!1,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",_extends({value,disabled,className:`juno-select-option ${className}`},props),label||value)};NativeSelectOption.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().number]),value:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().number]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},NativeSelectOption.__docgenInfo={description:"A basic SelectOption. Can only be used inside a Select.",methods:[],displayName:"NativeSelectOption",props:{value:{defaultValue:{value:"null",computed:!1},description:"Pass a value the option should represent",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Pass a visible label",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the option is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a class name to the option",type:{name:"string"},required:!1}}}},"./src/components/NativeSelectOption/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_NativeSelectOption_component__WEBPACK_IMPORTED_MODULE_0__.$});var _NativeSelectOption_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/NativeSelectOption/NativeSelectOption.component.js")},"./src/components/NativeSelectOptionGroup/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>NativeSelectOptionGroup});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const NativeSelectOptionGroup=_ref=>{let{label=null,disabled=!1,className="",children,...props}=_ref;return react.createElement("optgroup",_extends({label,disabled,className:`juno-select-option-group ${className}`},props),children)};NativeSelectOptionGroup.propTypes={label:prop_types_default().string,disabled:prop_types_default().bool,className:prop_types_default().string,children:prop_types_default().node},NativeSelectOptionGroup.__docgenInfo={description:"A SelectOptionGroup (<optgroup>). Can only be used inside a Select.",methods:[],displayName:"NativeSelectOptionGroup",props:{label:{defaultValue:{value:"null",computed:!1},description:"The visible label of the group of options",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disable the option group",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a className",type:{name:"string"},required:!1},children:{description:"Pass SelectOption child nodes",type:{name:"node"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Spinner/Spinner.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Spinner=_ref=>{let{variant="default",size=null,className="",color="",...props}=_ref;const sizing=size=>{switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({className:`juno-spinner \n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n ${color||(()=>{switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}})()} ${className}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["primary","danger","default","success","warning"]),size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic color variant of the Spinner",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"danger"',computed:!1},{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1},size:{defaultValue:{value:"null",computed:!1},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom classNames",type:{name:"string"},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',type:{name:"string"},required:!1}}}},"./src/components/NativeSelectOptionGroup/NativeSelectOptionGroup.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NativeSelectOptionGroup/index.js"),_NativeSelect_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/NativeSelect/index.js"),_NativeSelectOption_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/NativeSelectOption/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/NativeSelect/NativeSelectOptionGroup",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.Q,argTypes:{options:{table:{disable:!0}},children:{control:!1}}},Template=_ref=>{let{children,...args}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelect_index_js__WEBPACK_IMPORTED_MODULE_2__.m,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.Q,args,children))};Template.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node};const Default={render:Template,args:{label:"My option group",children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelectOption_index_js__WEBPACK_IMPORTED_MODULE_3__.$,{key:0,value:"1",label:"Option 1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelectOption_index_js__WEBPACK_IMPORTED_MODULE_3__.$,{key:1,value:"2",label:"Option 2"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelectOption_index_js__WEBPACK_IMPORTED_MODULE_3__.$,{key:2,value:"3",label:"Option 3"})]}},Disabled={render:Template,args:{label:"My disabled option group",children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelectOption_index_js__WEBPACK_IMPORTED_MODULE_3__.$,{key:0,value:"1",label:"Option 1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelectOption_index_js__WEBPACK_IMPORTED_MODULE_3__.$,{key:1,value:"2",label:"Option 2"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSelectOption_index_js__WEBPACK_IMPORTED_MODULE_3__.$,{key:2,value:"3",label:"Option 3"})],disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "My option group",\n    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />]\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "My disabled option group",\n    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />],\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}}}}]);