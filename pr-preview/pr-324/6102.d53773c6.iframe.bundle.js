"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6102],{"./src/components/Checkbox/Checkbox.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const CheckboxGroupContext=(0,react.createContext)();var Label=__webpack_require__("./src/components/Label/index.js"),Icon_component=__webpack_require__("./src/components/Icon/Icon.component.js"),FormHint_component=__webpack_require__("./src/components/FormHint/FormHint.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const hintStyles="\n  jn-mt-0\n  jn-ml-6\n",Checkbox=_ref=>{let{checked=!1,className="",disabled=!1,errortext="",helptext="",id="",indeterminate=!1,invalid=!1,label,name="",onChange,onClick,required=!1,successtext="",valid=!1,value,...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),checkboxGroupContext=(0,react.useContext)(CheckboxGroupContext),{selectedOptions:groupSelectedOptions,name:groupName,disabled:groupDisabled,handleCheckboxChange:groupHandleCheckboxChange,updateSelectedValue:updateGroupSelectedValue}=checkboxGroupContext||{},[isChecked,setIsChecked]=(0,react.useState)(checkboxGroupContext?!(!groupSelectedOptions||!groupSelectedOptions.includes(value)):!!checked),[isIndeterminate,setIsIndeterminate]=(0,react.useState)(!1),[hasFocus,setHasFocus]=(0,react.useState)(!1),[isInvalid,setIsInvalid]=(0,react.useState)(!1),[isValid,setIsValid]=(0,react.useState)(!1);(0,react.useEffect)((()=>{checked&&checkboxGroupContext&&updateGroupSelectedValue(value)}),[]),(0,react.useEffect)((()=>{checkboxGroupContext||setIsChecked(checked)}),[checked]);const invalidated=(0,react.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react.useEffect)((()=>{setIsIndeterminate(indeterminate)}),[indeterminate]),(0,react.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react.useEffect)((()=>{setIsValid(validated)}),[validated]);const determineChecked=()=>checkboxGroupContext?!(!groupSelectedOptions||!groupSelectedOptions.includes(value)):isChecked,theId=id||"juno-checkbox-"+(0,react.useId)();return react.createElement("div",{className:"jn-checkbox-outer"},react.createElement("div",{className:"jn-checkbox-wrapper \n  jn-inline-flex\n  jn-items-center\n"},react.createElement("div",_extends({className:`\n            juno-checkbox \n            \n  jn-relative\n  jn-w-4\n  jn-h-4\n  jn-rounded-sm\n  jn-bg-theme-checkbox\n  jn-cursor-pointer\n  focus:jn-outline-none\n  focus:jn-ring-2\n  focus:jn-ring-theme-focus\n \n            ${hasFocus?"\n  jn-ring-2\n  jn-ring-theme-focus\n":""} \n            ${groupDisabled||disabled?"\n  jn-pointer-events-none\n  jn-opacity-50\n  jn-cursor-not-allowed\n":""} \n            ${isInvalid?"\n  jn-border\n  jn-border-theme-error\n":""} \n            ${isValid?"\n  jn-border\n  jn-border-theme-success\n":""} \n            ${isInvalid||isValid?"":"\n  jn-border\n  jn-border-transparent\n"}\n            ${className}\n          `},props),determineChecked()?react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"\n  jn-absolute\n  jn-top-0\n  jn-left-0\n  jn-text-theme-checkbox-checked\n  jn-fill-current\n",width:"16",height:"16",viewBox:"0 0 16 16"},react.createElement("polygon",{points:"5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2"})):"",react.createElement("input",{checked:determineChecked(),className:`\n              \n  jn-w-4\n  jn-h-4\n  jn-opacity-0\n  jn-z-50\n \n              ${isInvalid?"juno-checkbox-invalid":""} \n              ${isValid?"juno-checkbox-valid":""} \n              ${groupDisabled||disabled?"jn-cursor-not-allowed":""}\n            `,disabled:groupDisabled||disabled,id:theId,name:groupName||name,onBlur:()=>{setHasFocus(!1)},onChange:event=>{setIsChecked(!isChecked),groupHandleCheckboxChange&&"function"==typeof groupHandleCheckboxChange&&groupHandleCheckboxChange(value),onChange&&onChange(event)},onClick:event=>{onClick&&onClick(event)},onFocus:()=>{setHasFocus(!0)},type:"checkbox",value}),isIndeterminate&&!determineChecked()?react.createElement("div",{className:"\n  jn-absolute\n  jn-w-2\n  jn-h-0.5\n  jn-top-1.5\n  jn-left-[.2rem]\n  jn-inline-block\n  jn-bg-theme-focus\n"}):""),label&&isNotEmptyString(label)?react.createElement(react.Fragment,null,react.createElement(Label.J,{text:label,htmlFor:theId,disabled:groupDisabled||disabled,required,className:"\n  jn-leading-0\n  jn-ml-2\n"}),isInvalid?react.createElement(Icon_component.I,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`\n                  \n  jn-ml-1\n\n                  ${groupDisabled||disabled?"jn-opacity-50":""}\n                `}):"",isValid?react.createElement(Icon_component.I,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`\n                  \n  jn-ml-1\n\n                  ${disabled?"jn-opacity-50":""}\n                `}):""):""),errortext&&isNotEmptyString(errortext)?react.createElement(FormHint_component.m,{text:errortext,variant:"error",className:`${hintStyles}`}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint_component.m,{text:successtext,variant:"success",className:`${hintStyles}`}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint_component.m,{text:helptext,className:`${hintStyles}`}):"")};Checkbox.propTypes={checked:prop_types_default().bool,className:prop_types_default().string,disabled:prop_types_default().bool,errortext:prop_types_default().node,helptext:prop_types_default().node,id:prop_types_default().string,indeterminate:prop_types_default().bool,invalid:prop_types_default().bool,label:prop_types_default().string,name:prop_types_default().string,onChange:prop_types_default().func,onClick:prop_types_default().func,required:prop_types_default().bool,successtext:prop_types_default().node,valid:prop_types_default().bool,value:prop_types_default().string},Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{defaultValue:{value:"false",computed:!1},description:"Whether the Checkbox is checked",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Checkbox is disabled",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Checkbox has an error or could not be validated",type:{name:"node"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Checkbox",type:{name:"node"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"The id of the Radio. An id will be automatically generated if not passed.",type:{name:"string"},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},description:"Whether the Checkbox is indeterminate. Applicable ONLY if the Checkbox represents multiple child Checkboxes with non--identical checked state.",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Checkbox was validated unsuccessfully",type:{name:"bool"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"The name of the Checkbox",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the Checkbox is required",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Checkbox was successfully validated",type:{name:"node"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Checkbox was successfully validated",type:{name:"bool"},required:!1},label:{description:"The label of the Checkbox",type:{name:"string"},required:!1},onChange:{description:"handler to be executed when the Checkbox changes.",type:{name:"func"},required:!1},onClick:{description:"handler to be executed when the Checkbox is clicked.",type:{name:"func"},required:!1},value:{description:"The value of the Checkbox",type:{name:"string"},required:!1}}}},"./src/components/DataListCell/DataListCell.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DataListCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const colsClass=cols=>{switch(cols){case 1:return"\n\tjn-w-grid-col-1\n";case 2:return"\n\tjn-w-grid-col-2\n";case 3:return"\n\tjn-w-grid-col-3\n";case 4:return"\n\tjn-w-grid-col-4\n";case 5:case 6:return"\n\tjn-w-grid-col-6\n";case 7:return"\n\tjn-w-grid-col-7\n";case 8:return"\n\tjn-w-grid-col-8\n";case 9:return"\n\tjn-w-grid-col-9\n";case 10:return"\n\tjn-w-grid-col-10\n";case 11:return"\n\tjn-w-grid-col-11\n";case 12:return"\n\tjn-w-grid-col-12\n"}},DataListCell=_ref=>{let{cols=null,width=null,auto=!1,className="",children=null,...props}=_ref;const cellStyles=width?width?{width:width+"%",flexGrow:"0",flexShrink:"0",flexBasis:width+"%"}:{}:auto?{flexGrow:"1",flexShrink:"0",flexBasis:"0"}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-datalist-cell \n\tjn-flex\n\tjn-p-2\n\tjn-overflow-hidden\n\tjn-overflow-ellipsis\n\tjn-grow-0\n\tjn-shrink-0\n\tjn-flex-basis-auto\n ${cols?colsClass(cols):""} ${className}`,style:cellStyles},props),children)};DataListCell.propTypes={cols:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,width:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,auto:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node},DataListCell.__docgenInfo={description:"",methods:[],displayName:"DataListCell",props:{cols:{defaultValue:{value:"null",computed:!1},description:"The number of columns to span the column over when fitting to the grid.",type:{name:"number"},required:!1},width:{defaultValue:{value:"null",computed:!1},description:'The width in percent as a number without "%" for auto-layout grids TODO: or "auto". If a width is given, it will override the "cols" prop.',type:{name:"number"},required:!1},auto:{defaultValue:{value:"false",computed:!1},description:"Whether the colum should set an auto width",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataListCell",type:{name:"node"},required:!1}}}},"./src/components/DataListCheckboxCell/DataListCheckboxCell.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>DataListCheckboxCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_Checkbox_Checkbox_component_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Checkbox/Checkbox.component.js"),_DataListCell_DataListCell_component_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DataListCell/DataListCell.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DataListCheckboxCell=_ref=>{let{selected=!1,disabled=!1,onChange,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataListCell_DataListCell_component_js__WEBPACK_IMPORTED_MODULE_2__.Z,_extends({className:`juno-datalist-checkbox-cell \n\tjn-flex\n\tjn-flex-col\n\tjn-justify-center\n ${className}`},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Checkbox_Checkbox_component_js__WEBPACK_IMPORTED_MODULE_1__.S,{disabled,checked:selected,onChange}))};DataListCheckboxCell.propTypes={selected:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func},DataListCheckboxCell.__docgenInfo={description:"",methods:[],displayName:"DataListCheckboxCell",props:{selected:{defaultValue:{value:"false",computed:!1},description:"Whether the item this cell belongs to is selected",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},onChange:{description:"Handler to execute when selected state changes",type:{name:"func"},required:!1}}}},"./src/components/DataListCheckboxCell/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_DataListCheckboxCell_component__WEBPACK_IMPORTED_MODULE_0__.I});var _DataListCheckboxCell_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DataListCheckboxCell/DataListCheckboxCell.component.js")},"./src/components/FormHint/FormHint.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const variantStyles=variant=>{switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=_ref=>{let{children=null,text="",variant="help",className,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n        juno-form-hint\n        juno-form-hint-${variant}\n        \n  jn-text-xs\n  jn-mt-1\n\n        ${variantStyles(variant)}\n        ${className}\n      `},props),children||text)};FormHint.displayName="FormHint Js",FormHint.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["help","error","success"]),className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint Js",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}}},"./src/components/Label/Label.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,forwardedRef)=>{let{text="",htmlFor,required=!1,className="",disabled=!1,floating=!1,minimized=!1,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:`\n\t\t\t\tjuno-label \n\t\t\t\t\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-transform \n\tjn-origin-top-left \n\tjn-transition-all \n\tjn-duration-100 \n\tjn-ease-in-out\n\tjn-z-10\n \n\t\t\t\t${floating?"juno-label-floating \n\tjn-absolute\n":""}\n\t\t\t\t${minimized?"juno-label-minimized \n\tjn-scale-75\n\t-jn-translate-y-[0.4375rem]\n":""}\n\t\t\t\t${disabled?"juno-label-disabled \n\tjn-opacity-50\n\tjn-cursor-not-allowed\n":""} \n\t\t\t\t${className}\n\t\t\t`,htmlFor,ref:forwardedRef},props),text,required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\t\t\t\t\tjuno-required \n\t\t\t\t\t\n\tjn-inline-block\n\tjn-w-1\n\tjn-h-1\n\tjn-rounded-full\n\tjn-align-top\n\tjn-ml-1\n\tjn-mt-2\n\tjn-bg-theme-required\n\n\t\t\t\t\t"}):"")}));Label.displayName="Label (JS)",Label.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,htmlFor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,floating:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,minimized:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool},Label.__docgenInfo={description:"A re-usable Label component",methods:[],displayName:"Label (JS)",props:{text:{defaultValue:{value:'""',computed:!1},description:"Pass a string of text to be rendered as contents. Required.",type:{name:"string"},required:!1},htmlFor:{defaultValue:{value:"undefined",computed:!0},description:"An Id of an input element to associate the label with",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Label for a disabled input",type:{name:"bool"},required:!1},floating:{defaultValue:{value:"false",computed:!1},description:"Whether the label is floating",type:{name:"bool"},required:!1},minimized:{defaultValue:{value:"false",computed:!1},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",type:{name:"bool"},required:!1}}}},"./src/components/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Label/Label.component.js")}}]);