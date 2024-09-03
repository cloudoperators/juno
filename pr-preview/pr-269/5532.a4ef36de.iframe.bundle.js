"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[5532],{"./src/components/Radio/Radio.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Radio});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_RadioGroup_RadioGroup_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/RadioGroup/RadioGroup.component.js"),_Label_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Label/index.js"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.component.js"),_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/FormHint/FormHint.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Radio=_ref=>{let{checked=!1,className="",disabled=!1,errortext="",helptext="",id,invalid=!1,label,name,onChange,onClick,required=!1,successtext="",valid=!1,value,...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),radioGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_RadioGroup_RadioGroup_component__WEBPACK_IMPORTED_MODULE_1__._),{selectedValue:groupSelectedValue,onChange:groupOnChange,name:groupName,updateSelectedValue:updateGroupSelectedValue,disabled:groupDisabled}=radioGroupContext||{},[isChecked,setIsChecked]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>radioGroupContext?groupSelectedValue===value:!!checked)),[hasFocus,setHasFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isInvalid,setIsInvalid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isValid,setIsValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),invalidated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsValid(validated)}),[validated]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{checked&&radioGroupContext&&void 0===groupSelectedValue&&updateGroupSelectedValue(value)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{groupSelectedValue||setIsChecked(checked)}),[checked]);const determineChecked=()=>groupSelectedValue?groupSelectedValue===value:isChecked,theId=id||"juno-radio-"+(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"jn-radio-outer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-radio-wrapper \n\tjn-inline-flex\n\tjn-items-center\n"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n \t\t\t\t\t\tjuno-radio \n \t\t\t\t\t\t\n\tjn-relative\n\tjn-w-4\n\tjn-h-4\n\tjn-rounded-full\n\tjn-bg-theme-radio\n \n \t\t\t\t\t\t${hasFocus?"\n\tjn-outline-none\n\tjn-ring-2\n\tjn-ring-theme-focus\n":""} \n \t\t\t\t\t\t${disabled?"\n\tjn-opacity-50\n\tjn-cursor-not-allowed\n":""} \n \t\t\t\t\t\t${isInvalid?"\n\tjn-border\n\tjn-border-theme-error\n":""} \n \t\t\t\t\t\t${isValid?"\n\tjn-border\n\tjn-border-theme-success\n":""} \n \t\t\t\t\t\t${isInvalid||isValid?"":"\n\tjn-border\n\tjn-border-transparent\n"}\n \t\t\t\t\t\t${className}\n \t\t\t\t\t`},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{checked:determineChecked(),className:`\n\t\t\t\t\t\t\t\n\tjn-w-4\n\tjn-h-4\n\tjn-opacity-0\n\tjn-z-50\n \n\t\t\t\t\t\t\t${isInvalid?"juno-radio-invalid":""} \n\t\t\t\t\t\t\t${isValid?"juno-radio-valid":""}\n\t\t\t\t\t\t`,disabled:groupDisabled||disabled,id:theId,onBlur:()=>{setHasFocus(!1)},onChange:()=>{setIsChecked(!isChecked),groupOnChange&&"function"==typeof groupOnChange&&groupSelectedValue!==value&&groupOnChange(value),onChange&&onChange(value)},onClick:event=>{onClick&&onClick(event)},onFocus:()=>{setHasFocus(!0)},name:groupName||name,type:"radio",value}),determineChecked()?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\tjn-absolute\n\tjn-block\n\tjn-bg-theme-radio-checked\n\tjn-rounded-full\n\tjn-w-3\n\tjn-h-3\n\tjn-top-[1px]\n\tjn-left-[1px]\n"}):""),label&&isNotEmptyString(label)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Label_index__WEBPACK_IMPORTED_MODULE_2__.J,{className:"\n\tjn-leading-0\n\tjn-ml-2\n",disabled:groupDisabled||disabled,htmlFor:theId,required,text:label}),isInvalid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_3__.I,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`\n\t\t\t\t\t\t\t\t\t\t\n\tjn-ml-1\n\n\t\t\t\t\t\t\t\t\t\t${disabled?"jn-opacity-50":""}\n\t\t\t\t\t\t\t\t\t`}):"",isValid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_3__.I,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`\n\t\t\t\t\t\t\t\t\t\t\n\tjn-ml-1\n\n\t\t\t\t\t\t\t\t\t\t${disabled?"jn-opacity-50":""}\n\t\t\t\t\t\t\t\t\t`}):""):""),errortext&&isNotEmptyString(errortext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__.m,{text:errortext,variant:"error",className:"\n\tjn-mt-0\n\tjn-ml-6\n"}):"",successtext&&isNotEmptyString(successtext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__.m,{text:successtext,variant:"success",className:"\n\tjn-mt-0\n\tjn-ml-6\n"}):"",helptext&&isNotEmptyString(helptext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__.m,{text:helptext,className:"\n\tjn-mt-0\n\tjn-ml-6\n"}):"")};Radio.propTypes={checked:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,errortext:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,helptext:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,id:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,invalid:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,required:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,successtext:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,valid:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,value:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Radio.__docgenInfo={description:"A controlled Radio component.",methods:[],displayName:"Radio",props:{checked:{defaultValue:{value:"false",computed:!1},description:"Whether the Radio is checked",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Radio is disabled",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Radio has an error or could not be validated",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Radio",type:{name:"node"},required:!1},id:{defaultValue:{value:"undefined",computed:!0},description:"The id of the Radio. An id will be automatically generated if not passed.",type:{name:"string"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Radio was validated unsuccessfully",type:{name:"bool"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"The label of the Radio",type:{name:"string"},required:!1},name:{defaultValue:{value:"undefined",computed:!0},description:"The name attribute of the Radio. Only Radios sharing the same name attribute will work together as expected.",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Handler to execute when the Radio changes",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Handler to execute when the Radio is clicked",type:{name:"func"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the Radio is required",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Radio was successfully validated",type:{name:"string"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Radio was successfully validated",type:{name:"bool"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"The value of the Radio",type:{name:"string"},required:!1}}}},"./src/components/RadioGroup/RadioGroup.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>RadioGroupContext,z:()=>RadioGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_Label_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Label/index.js"),_Icon_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.js"),_FormHint_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/FormHint/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const iconstyles="\n\tjn-absolute\n\tjn-right-2\n\tjn-top-1.5\n",RadioGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),RadioGroup=_ref=>{let{children=null,className="",disabled=!1,errortext="",helptext="",id="",invalid=!1,label="",name,onChange,required=!1,selected,successtext="",valid=!1,...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),uniqueId=()=>"juno-radiogroup-"+(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),groupName=name||uniqueId(),groupId=id||uniqueId(),[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selected),[isValid,setIsValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isInvalid,setIsInvalid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),validated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>valid||!(!successtext||!successtext.length)),[valid,successtext]),invalidated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>invalid||!(!errortext||!errortext.length)),[invalid,errortext]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsValid(validated)}),[validated]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{selected&&setSelectedValue(selected)}),[selected]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioGroupContext.Provider,{value:{selectedValue,name:groupName,onChange:value=>{setSelectedValue(value),onChange&&onChange(value)},updateSelectedValue:value=>{setSelectedValue(value)},disabled}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n          juno-radiogroup \n          \n\tjn-mb-4\n\tlast:jn-mb-0\n \n          ${isValid?"juno-radiogroup-valid":""} \n          ${isInvalid?"juno-radiogroup-invalid":""} \n          ${className}\n        `,id:groupId,role:"radiogroup"},props),label&&isNotEmptyString(label)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Label_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{text:label,htmlFor:groupId,disabled,required}):"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n            juno-checkbox-group-options \n            \n\tjn-relative\n\tjn-rounded\n\tjn-border\n\tjn-py-1\n \n            ${isValid?"\n\tjn-border-theme-success\n\tjn-px-2\n":""} \n            ${isInvalid?"\n\tjn-border-theme-error\n\tjn-px-2\n":""} \n            ${isValid||isInvalid?"":"\n\tjn-border-transparent\n"}\n          `},isInvalid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_index__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"dangerous",color:"jn-text-theme-error",className:`${iconstyles}`}):"",isValid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_index__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"checkCircle",color:"jn-text-theme-success",className:`${iconstyles}`}):"",children),errortext&&isNotEmptyString(errortext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_index__WEBPACK_IMPORTED_MODULE_3__.m,{text:errortext,variant:"error"}):"",successtext&&isNotEmptyString(successtext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_index__WEBPACK_IMPORTED_MODULE_3__.m,{text:successtext,variant:"success"}):"",helptext&&isNotEmptyString(helptext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_index__WEBPACK_IMPORTED_MODULE_3__.m,{text:helptext}):""))};RadioGroup.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,errortext:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,helptext:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,id:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,invalid:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,required:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,selected:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,successtext:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,valid:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool},RadioGroup.__docgenInfo={description:"A component to wrap and group individual Radio components: All contained child Radio elements will share the same `name`-attribute passed as a prop to the group, and thus make the Radios work with each other as expected.",methods:[],displayName:"RadioGroup",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children of the RadioGroup. Typically, these will be `Radio` components.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether all Radios in the group are disabled",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Text to display in case validation failed or there is an error. Will set the whole group to invalid when passed.",type:{name:"node"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A text to render to further explain meaning and significance of the group",type:{name:"node"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"The id of the group. If not passed, RadioGroup will create and use a unique id for the group",type:{name:"string"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the group not be validated.",type:{name:"bool"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"Label for the group of radios as a whole. Passing a label is mandatory in order to denote a selection in the set is required by passing the `required` prop.",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether a selection on the RadioGroup is required",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Text to display in case validation is successful. When passed, will set the whole group to valid.",type:{name:"node"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the RadioGroup was successfully validated",type:{name:"bool"},required:!1},name:{description:"The name of all radios in a group. If not passed, RadioGroup will create and use a unique name identifier for its child Radios",type:{name:"string"},required:!1},onChange:{description:"An onChange handler to execute when the selected option changes",type:{name:"func"},required:!1},selected:{description:"The value of the initially selected radio. This will override 'checked' set on any of the child radio elements.",type:{name:"string"},required:!1}}}}}]);