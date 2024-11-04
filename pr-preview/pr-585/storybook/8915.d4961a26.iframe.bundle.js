"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8915],{"./src/deprecated_js/Button/Button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/deprecated_js/Button/button.scss"),__webpack_require__("./src/deprecated_js/Icon/index.js")),_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js"),_deprecated_js_Spinner_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/deprecated_js/Spinner/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const btnBase="\n  jn-font-bold\n  jn-inline-flex \n  jn-justify-center \n  jn-items-center\n  jn-rounded\n  jn-shadow-sm \n  jn-w-auto\n  focus:jn-outline-none \n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n  focus-visible:jn-ring-offset-1\n  focus-visible:jn-ring-offset-theme-focus\n  disabled:jn-opacity-50\n  disabled:jn-cursor-not-allowed\n  disabled:jn-pointer-events-none\n",getButtonPadding=(size,variant)=>"small"===size?"subdued"===variant?"\n  jn-py-[0.25rem]\n  jn-px-[0.4375rem]\n":"\n  jn-py-[0.3125rem]\n  jn-px-[0.5rem]\n":"subdued"===variant?"\n  jn-py-[0.375rem]\n  jn-px-[0.5625rem]\n":"\n  jn-py-[0.4375rem]\n  jn-px-[0.625rem] \n",progressClass=progress=>progress?"in-progress":"",spinnerColorClass=variant=>{switch(variant){case"default":return"jn-text-theme-accent";case"primary":case"primary-danger":return"jn-text-white";default:return""}},Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{label,title=null,variant,size="default",disabled=null,href=null,icon=null,className="",onClick,children,progress=!1,progressLabel="",...props}=_ref;const theVariant=variant||"default",titleValue=title||label||"",buttonIcon=progress?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Spinner_index_js__WEBPACK_IMPORTED_MODULE_4__.y,{size:"small"===size?"1.125rem":"1.5rem",color:`${spinnerColorClass(theVariant)}`}):icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_2__.I,{icon,title:titleValue,className:`juno-button-icon ${label||children?"\n  jn-mr-2\n":""} `,size:"small"===size?"1.125rem":"1.5rem"}):null,buttonLabel=progress&&progressLabel?progressLabel:label||children,button=react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({type:"button",className:`\n          juno-button \n          juno-button-${theVariant} \n          juno-button-${size}-size \n          ${btnBase} \n          ${"small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n"} \n          ${getButtonPadding(size,variant)}\n          ${progressClass(progress)} \n          ${className}`,disabled,onClick:event=>{onClick&&onClick(event)},title:titleValue,ref},props),buttonIcon,buttonLabel),anchor=react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({href,role:"button",className:`\n          juno-button \n          juno-button-${theVariant} \n          juno-button-${size}-size \n          ${btnBase} \n          ${"small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n"}\n          ${getButtonPadding(size,variant)}\n          ${progressClass(progress)} \n          ${className}\n        `,disabled,onClick,title:titleValue,ref},props),buttonIcon,buttonLabel);return href?anchor:button}));Button.displayName="Button",Button.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().any,variant:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["primary","primary-danger","default","subdued"]),size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["small","default"]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,icon:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__.g),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,progress:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,progressLabel:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Button.__docgenInfo={description:"The basic button component. Use this for `onClick` interactions.",methods:[],displayName:"Button",props:{title:{defaultValue:{value:"null",computed:!1},description:"Specify title for accessibility. Gets value of label if no title specified",type:{name:"string"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Leave empty for default size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"default"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Whether the button is disabled",type:{name:"bool"},required:!1},href:{defaultValue:{value:"null",computed:!1},description:"Optionally specify an href. This will turn the Button into an <a> element",type:{name:"string"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},progress:{defaultValue:{value:"false",computed:!1},description:"Whether the button action is in progress",type:{name:"bool"},required:!1},progressLabel:{defaultValue:{value:'""',computed:!1},description:"Display an alternative label while the button action is in progress",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1},variant:{description:"Choose a variant for your purpose. May leave empty to get default button.",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"default"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},label:{description:"Button label can be passed like this or as children",type:{name:"string"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Spinner/Spinner.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Spinner=_ref=>{let{variant="default",size=null,className="",color="",...props}=_ref;const sizing=size=>{switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({className:`juno-spinner \n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n ${color||(()=>{switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}})()} ${className}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["primary","danger","default","success","warning"]),size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic color variant of the Spinner",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"danger"',computed:!1},{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1},size:{defaultValue:{value:"null",computed:!1},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom classNames",type:{name:"string"},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',type:{name:"string"},required:!1}}}},"./src/deprecated_js/Spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>_Spinner_component__WEBPACK_IMPORTED_MODULE_0__.y});var _Spinner_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Spinner/Spinner.component.js")},"./src/components/Icon/icons/home_sharp.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgHomeSharp(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))}},"./src/components/Icon/icons/juno-danger.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoDanger(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))}},"./src/components/Icon/icons/juno_severity_critical.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityCritical(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_high.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityHigh(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_low.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityLow(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_medium.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityMedium(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/place.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgPlace(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))}},"./src/deprecated_js/Button/button.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-button-default{background-color:var(--color-button-default-bg);color:var(--color-button-default-text)}.juno-button-default:hover{background-color:var(--color-button-default-hover-bg);color:var(--color-button-default-hover-text)}.juno-button-default:active{background-color:var(--color-button-default-active-bg);border-color:var(--color-button-default-active-border);color:var(--color-button-default-active-text)}.juno-button-subdued{background-color:var(--color-button-subdued-bg);border:1px solid var(--color-button-subdued-border);color:var(--color-button-subdued-text)}.juno-button-subdued:hover{background-color:var(--color-button-subdued-hover-bg);border-color:var(--color-button-subdued-hover-border);color:var(--color-button-subdued-hover-text)}.juno-button-subdued:active{background-color:var(--color-button-subdued-active-bg);border-color:var(--color-button-subdued-active-border);color:var(--color-button-subdued-active-text)}.juno-button-primary{background-color:var(--color-button-primary-bg);color:var(--color-button-primary-text)}.juno-button-primary:hover{background-color:var(--color-button-primary-hover-bg);color:var(--color-button-primary-hover-text)}.juno-button-primary:active{background-color:var(--color-button-primary-active-bg);color:var(--color-button-primary-active-text)}.juno-button-primary-danger{background-color:var(--color-button-primary-danger-bg);color:var(--color-button-primary-danger-text)}.juno-button-primary-danger:hover{background-color:var(--color-button-primary-danger-hover-bg);color:var(--color-button-primary-danger-hover-text)}.juno-button-primary-danger:active{background-color:var(--color-button-primary-danger-active-bg);color:var(--color-button-primary-danger-active-text)}","",{version:3,sources:["webpack://./src/deprecated_js/Button/button.scss"],names:[],mappings:"AAMA,qBACE,+CAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKJ,qBACE,+CAAA,CACA,mDAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKJ,qBACE,+CAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,6CAAA,CAKJ,4BACE,sDAAA,CACA,6CAAA,CAEA,kCACE,4DAAA,CACA,mDAAA,CAGF,mCACE,6DAAA,CACA,oDAAA",sourcesContent:["// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// handle button colours here, not in tw because of overall complexity, mostly singular colors, gradients, etc; and conflicting bg-colors and bg-images:\n\n\n.juno-button-default {\n  background-color: var(--color-button-default-bg);\n  color: var(--color-button-default-text);\n  \n  &:hover {\n    background-color: var(--color-button-default-hover-bg);\n    color: var(--color-button-default-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-default-active-bg);\n    border-color: var(--color-button-default-active-border);\n    color: var(--color-button-default-active-text);\n  }\n\n}\n\n.juno-button-subdued {\n  background-color: var(--color-button-subdued-bg);\n  border: 1px solid var(--color-button-subdued-border);\n  color: var(--color-button-subdued-text);\n  \n  &:hover {\n    background-color: var(--color-button-subdued-hover-bg);\n    border-color: var(--color-button-subdued-hover-border);\n    color: var(--color-button-subdued-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-subdued-active-bg);\n    border-color: var(--color-button-subdued-active-border);\n    color: var(--color-button-subdued-active-text);\n  }\n  \n}\n\n.juno-button-primary {\n  background-color: var(--color-button-primary-bg);\n  color: var(--color-button-primary-text);\n  \n  &:hover {\n    background-color: var(--color-button-primary-hover-bg);\n    color: var(--color-button-primary-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-primary-active-bg);\n    color: var(--color-button-primary-active-text);\n  }\n  \n}\n\n.juno-button-primary-danger {\n  background-color: var(--color-button-primary-danger-bg);\n  color: var(--color-button-primary-danger-text);\n  \n  &:hover {\n    background-color: var(--color-button-primary-danger-hover-bg);\n    color: var(--color-button-primary-danger-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-primary-danger-active-bg);\n    color: var(--color-button-primary-danger-active-text);\n  }\n  \n}\n"],sourceRoot:""}])}}]);