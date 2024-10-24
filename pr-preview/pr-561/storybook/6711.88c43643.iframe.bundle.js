"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6711],{"./src/components/NativeSelect/NativeSelect.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>NativeSelect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/Icon/index.js"),_deprecated_js_Spinner_Spinner_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/deprecated_js/Spinner/Spinner.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const NativeSelect=_ref=>{let{name=null,id="",children,className="",disabled=null,invalid=!1,valid=!1,loading=!1,error=!1,onChange,onClick,wrapperClassName="",...props}=_ref;const[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isInvalid,setIsInvalid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isValid,setIsValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasError,setHasError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsLoading(loading)}),[loading]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsInvalid(invalid)}),[invalid]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsValid(valid)}),[valid]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setHasError(error)}),[error]);const SelectIcons=_ref2=>{let{disabled}=_ref2;return isLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-select-loading \n\tjn-absolute\n\tjn-top-0\n\tjn-right-0\n\tjn-bottom-0\n\tjn-left-0\n\tjn-text-center\n\tjn-bg-theme-select\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-rounded-3px\n\tjn-flex\n\tjn-flex-col\n\tjn-justify-center\n\tjn-select-none\n\tjn-cursor-not-allowed\n"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Spinner_Spinner_component__WEBPACK_IMPORTED_MODULE_2__.y,{className:"\n\tjn-ml-auto\n\tjn-mr-auto\n"})):hasError?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-select-errortext \n\tjn-absolute\n\tjn-top-0\n\tjn-right-0\n\tjn-bottom-0\n\tjn-left-0\n\tjn-text-center\n\tjn-bg-theme-select\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-rounded-3px\n\tjn-flex\n\tjn-flex-col\n\tjn-justify-center\n\tjn-select-none\n\tjn-cursor-not-allowed\n"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"errorOutline",color:"jn-text-theme-error",className:"\n\tjn-ml-auto\n\tjn-mr-auto\n"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n\tjn-absolute\n\tjn-flex\n\tjn-right-2\n\tjn-top-1.5\n\tjn-pointer-events-none\n ${disabled?"\n\tjn-opacity-50\n":""} `},isInvalid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"dangerous",color:"jn-text-theme-error"}):null,isValid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"checkCircle",color:"jn-text-theme-success"}):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"expandMore"}))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n      juno-select-wrapper \n      \n\tjn-relative\n\n      ${wrapperClassName}`},react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",_extends({name:name||"Unnamed Select",id,className:`juno-select \n\tjn-w-full\n\tjn-bg-theme-select\n\tjn-text-theme-high\n\tjn-appearance-none\n\tjn-text-base\n\tjn-pl-4\n\tjn-h-[2.375rem]\n\tjn-rounded-3px\n\tjn-bg-icon-arrow-down\n\tjn-bg-right\n\tjn-bg-no-repeat\n\tfocus:jn-outline-none\n\tfocus:jn-ring-2\n\tfocus:jn-ring-theme-focus\n\tdisabled:jn-opacity-50\n ${isInvalid?"juno-select-invalid \n\tjn-border\n\tjn-border-theme-error\n":""} ${isValid?"juno-select-valid \n\tjn-border\n\tjn-border-theme-success\n":""} ${hasError?"juno-select-error ":""} ${isValid||isInvalid?"\n\tjn-pr-[3.75rem]\n":"\n\tjn-pr-9\n"} ${className}`,onChange:event=>{onChange&&onChange(event)},onClick:event=>{onClick&&onClick(event)},disabled:disabled||isLoading||hasError},props),children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectIcons,{disabled}))};NativeSelect.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,invalid:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,loading:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,error:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},NativeSelect.__docgenInfo={description:"A basic, uncontrolled, native html Select. Takes SelectOption and SelectOptionGroup as children.",methods:[],displayName:"NativeSelect",props:{name:{defaultValue:{value:"null",computed:!1},description:"Pass a name.",type:{name:"string"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"The id of the select",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname. The class name is applied to the internal select element.",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the select",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is valid",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the select is currently loading",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the select has an error. Don't use this to show the user selection is invalid. Use to show when there was an error fetching data.",type:{name:"bool"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},children:{description:"Pass SelectOption and SelectOptionGroup as children.",type:{name:"node"},required:!1},onChange:{description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{description:"Pass a click handler",type:{name:"func"},required:!1}}}},"./src/components/NativeSelect/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_NativeSelect_component__WEBPACK_IMPORTED_MODULE_0__.m});var _NativeSelect_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/NativeSelect/NativeSelect.component.js")},"./src/components/NativeSelectOption/NativeSelectOption.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>NativeSelectOption});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const NativeSelectOption=_ref=>{let{value=null,label=null,disabled=!1,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",_extends({value,disabled,className:`juno-select-option ${className}`},props),label||value)};NativeSelectOption.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().number]),value:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().number]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},NativeSelectOption.__docgenInfo={description:"A basic SelectOption. Can only be used inside a Select.",methods:[],displayName:"NativeSelectOption",props:{value:{defaultValue:{value:"null",computed:!1},description:"Pass a value the option should represent",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Pass a visible label",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the option is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a class name to the option",type:{name:"string"},required:!1}}}},"./src/components/NativeSelectOption/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_NativeSelectOption_component__WEBPACK_IMPORTED_MODULE_0__.$});var _NativeSelectOption_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/NativeSelectOption/NativeSelectOption.component.js")},"./src/components/NativeSelectOptionGroup/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>NativeSelectOptionGroup});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const NativeSelectOptionGroup=_ref=>{let{label=null,disabled=!1,className="",children,...props}=_ref;return react.createElement("optgroup",_extends({label,disabled,className:`juno-select-option-group ${className}`},props),children)};NativeSelectOptionGroup.propTypes={label:prop_types_default().string,disabled:prop_types_default().bool,className:prop_types_default().string,children:prop_types_default().node},NativeSelectOptionGroup.__docgenInfo={description:"A SelectOptionGroup (<optgroup>). Can only be used inside a Select.",methods:[],displayName:"NativeSelectOptionGroup",props:{label:{defaultValue:{value:"null",computed:!1},description:"The visible label of the group of options",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disable the option group",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a className",type:{name:"string"},required:!1},children:{description:"Pass SelectOption child nodes",type:{name:"node"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Spinner/Spinner.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Spinner=_ref=>{let{variant="default",size=null,className="",color="",...props}=_ref;const sizing=size=>{switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({className:`juno-spinner \n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n ${color||(()=>{switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}})()} ${className}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["primary","danger","default","success","warning"]),size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic color variant of the Spinner",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"danger"',computed:!1},{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1},size:{defaultValue:{value:"null",computed:!1},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom classNames",type:{name:"string"},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',type:{name:"string"},required:!1}}}},"./src/components/Icon/icons/home_sharp.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgHomeSharp(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))}},"./src/components/Icon/icons/juno-danger.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoDanger(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))}},"./src/components/Icon/icons/juno_severity_critical.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityCritical(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_high.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityHigh(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_low.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityLow(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_medium.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityMedium(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/place.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgPlace(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))}}}]);