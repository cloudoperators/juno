"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[7113],{"./src/deprecated_js/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button_component__WEBPACK_IMPORTED_MODULE_0__.$});var _Button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Button/Button.component.js")},"./src/deprecated_js/ButtonRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ButtonRow});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Stack_component=__webpack_require__("./src/deprecated_js/Stack/Stack.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ButtonRow=_ref=>{let{children=null,className="",...props}=_ref;return react.createElement(Stack_component.B,_extends({gap:"2",distribution:"end",className:`juno-button-row ${className}`},props),children)};ButtonRow.propTypes={className:prop_types_default().string,children:prop_types_default().node},ButtonRow.__docgenInfo={description:"A container to hold one or multiple buttons and space and align them.",methods:[],displayName:"ButtonRow",props:{children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the ButtonRow",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a class to the ButtonRow",type:{name:"string"},required:!1}}}},"./src/deprecated_js/FormHint/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_FormHint_component__WEBPACK_IMPORTED_MODULE_0__.m});var _FormHint_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/FormHint/FormHint.component.js")},"./src/deprecated_js/Stack/Stack.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const baseStack=(direction,gap,wrap)=>`\n      ${"vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}\n      ${wrap&&"jn-flex-wrap"}\n      ${(gap=>{switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}})(gap)}\n    `,alignItems=alignment=>{switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=distribution=>{switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=_ref=>{let{direction="horizontal",gap="0",alignment="stretch",distribution="start",wrap=!1,className="",children=null,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-stack ${baseStack(direction,gap,wrap)} ${alignItems(alignment)} ${justifyItems(distribution)} ${className||""}`},props),children)};Stack.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,direction:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["horizontal","vertical"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","baseline","stretch"]),distribution:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","between","around","evenly"]),wrap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,gap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])},Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",methods:[],displayName:"Stack",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},description:"Stack items horizontally or vertically",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]},required:!1},gap:{defaultValue:{value:'"0"',computed:!1},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",type:{name:"enum",value:[{value:'"0"',computed:!1},{value:'"px"',computed:!1},{value:'"0.5"',computed:!1},{value:'"1"',computed:!1},{value:'"1.5"',computed:!1},{value:'"2"',computed:!1},{value:'"2.5"',computed:!1},{value:'"3"',computed:!1},{value:'"3.5"',computed:!1},{value:'"4"',computed:!1},{value:'"5"',computed:!1},{value:'"6"',computed:!1},{value:'"7"',computed:!1},{value:'"8"',computed:!1},{value:'"9"',computed:!1},{value:'"10"',computed:!1},{value:'"11"',computed:!1},{value:'"12"',computed:!1},{value:'"14"',computed:!1},{value:'"16"',computed:!1},{value:'"20"',computed:!1},{value:'"24"',computed:!1},{value:'"28"',computed:!1},{value:'"32"',computed:!1},{value:'"36"',computed:!1},{value:'"40"',computed:!1},{value:'"44"',computed:!1},{value:'"48"',computed:!1},{value:'"52"',computed:!1},{value:'"56"',computed:!1},{value:'"60"',computed:!1},{value:'"64"',computed:!1},{value:'"72"',computed:!1},{value:'"80"',computed:!1},{value:'"96"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"stretch"',computed:!1},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"baseline"',computed:!1},{value:'"stretch"',computed:!1}]},required:!1},distribution:{defaultValue:{value:'"start"',computed:!1},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"between"',computed:!1},{value:'"around"',computed:!1},{value:'"evenly"',computed:!1}]},required:!1},wrap:{defaultValue:{value:"false",computed:!1},description:"Specify whether the Stack children should be allowed to wrap or not",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass css class names",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/deprecated_js/Textarea/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Textarea});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Label=__webpack_require__("./src/deprecated_js/Label/index.js"),Icon=__webpack_require__("./src/deprecated_js/Icon/index.js"),FormHint_component=__webpack_require__("./src/deprecated_js/FormHint/FormHint.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Textarea=_ref=>{let{value="",id="",placeholder="",disabled=!1,readOnly=!1,required=!1,invalid=!1,valid=!1,autoFocus=!1,className="",autoComplete="off",helptext="",successtext="",errortext="",onChange,onFocus,onBlur,label,width="full",wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),ref=(0,react.useRef)(),[val,setValue]=(0,react.useState)(""),[hasFocus,setFocus]=(0,react.useState)(!1),[isInvalid,setIsInvalid]=(0,react.useState)(!1),[isValid,setIsValid]=(0,react.useState)(!1);(0,react.useEffect)((()=>{document.hasFocus()&&ref.current.contains(document.activeElement)&&setFocus(!0)}),[]),(0,react.useEffect)((()=>{setValue(value)}),[value]);const invalidated=(0,react.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react.useEffect)((()=>{setIsValid(validated)}),[validated]);const Icons=_ref2=>{let{disabled}=_ref2;return isValid||isInvalid?react.createElement("div",{className:"juno-textinput-row-icon-container \n  jn-inline-flex\n  jn-absolute\n  jn-top-[.4rem]\n  jn-right-3\n "+(disabled?"\n  jn-opacity-50\n":"")},isInvalid?react.createElement(Icon.I,{icon:"dangerous",color:"jn-text-theme-error"}):null,isValid?react.createElement(Icon.I,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},theId=id||"juno-textarea-"+(0,react.useId)();return react.createElement("div",null,react.createElement("div",{className:`\n          juno-textarea-wrapper \n          \n  jn-inline-block\n  jn-relative\n\n          ${"auto"==width?"jn-inline-block":"jn-block"}\n          ${"auto"==width?"jn-w-auto":"jn-w-full"}\n          ${wrapperClassName}\n        `},label&&label.length?react.createElement(Label.J,{text:label,htmlFor:theId,className:"\n  jn-pointer-events-none\n  jn-top-2\n  jn-left-[0.9375rem]\n  jn-pr-4\n  jn-bg-theme-textinput\n",disabled,required,floating:!0,minimized:!!(placeholder||hasFocus||val&&val.length)}):"",react.createElement("textarea",_extends({name,autoComplete,value:val,id:theId,ref,placeholder,disabled,readOnly,autoFocus,onChange:event=>{setValue(event.target.value),onChange&&onChange(event)},onFocus:event=>{setFocus(!0),onFocus&&onFocus(event)},onBlur:event=>{setFocus(!1),onBlur&&onBlur(event)},className:`juno-textarea \n            \n  jn-bg-theme-textinput\n  jn-text-theme-textinput\n  jn-border\n  jn-text-base\n  jn-leading-4\n  jn-px-4\n  jn-rounded-3px\n  jn-align-top\n  focus:jn-outline-none\n  focus:jn-ring-2\n  focus:jn-ring-theme-focus\n  disabled:jn-opacity-50\n  disabled:jn-cursor-not-allowed\n\n            ${label?"\n  jn-pt-[1.125rem] \n  jn-pb-1\n":"\n  jn-py-4\n"}\n            ${isInvalid?"juno-textarea-invalid \n  jn-border-theme-error\n":""} \n            ${isValid?"juno-textarea-valid \n  jn-border-theme-success\n":""}  \n            ${isValid||isInvalid?"":"\n  jn-border-theme-textinput-default\n"} \n            ${"auto"==width?"jn-w-auto":"jn-w-full"}\n            ${className}\n          `},props)),react.createElement(Icons,{disabled})),errortext&&isNotEmptyString(errortext)?react.createElement(FormHint_component.m,{text:errortext,variant:"error",className:"\n  jn-mt-0\n"}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint_component.m,{text:successtext,variant:"success",className:"\n  jn-mt-0\n"}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint_component.m,{text:helptext,className:"\n  jn-mt-0\n"}):"")};Textarea.propTypes={name:prop_types_default().string,label:prop_types_default().string,value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),id:prop_types_default().string,placeholder:prop_types_default().string,disabled:prop_types_default().bool,readOnly:prop_types_default().bool,required:prop_types_default().bool,invalid:prop_types_default().bool,valid:prop_types_default().bool,autoFocus:prop_types_default().bool,className:prop_types_default().string,autoComplete:prop_types_default().string,onChange:prop_types_default().func,onFocus:prop_types_default().func,onBlur:prop_types_default().func,helptext:prop_types_default().node,successtext:prop_types_default().node,errortext:prop_types_default().node,width:prop_types_default().oneOf(["full","auto"]),wrapperClassName:prop_types_default().string},Textarea.__docgenInfo={description:"A controlled Text Input.\nAlso covers email, telephone, password, url derivates.",methods:[],displayName:"Textarea",props:{value:{defaultValue:{value:'""',computed:!1},description:"Pass a value",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Pass a placeholder",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Render a disabled input",type:{name:"bool"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Render a readonly input",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the field is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is valid",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"Whether the field receives autofocus",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname. The class name is applied to the internal textarea element.",type:{name:"string"},required:!1},autoComplete:{defaultValue:{value:'"off"',computed:!1},description:"Pass a valid autocomplete value. We do not police validity.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Textarea",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Textarea was successfully validated",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Textarea has an error or could not be validated",type:{name:"node"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"Pass a focus handler",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"Pass a blur handler",type:{name:"func"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"The label of the textarea",type:{name:"string"},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:"The width of the textarea. Either 'full' (default) or 'auto'.",type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},name:{description:"Pass a name attribute",type:{name:"string"},required:!1}}}}}]);