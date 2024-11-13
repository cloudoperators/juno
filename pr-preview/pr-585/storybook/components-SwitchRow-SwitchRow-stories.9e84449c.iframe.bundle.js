"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8847],{"./src/components/FormRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>_FormRow_component__WEBPACK_IMPORTED_MODULE_0__.f});var _FormRow_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormRow/FormRow.component.js")},"./src/components/Switch/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Switch});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Label=__webpack_require__("./src/deprecated_js/Label/index.js"),Icon=__webpack_require__("./src/deprecated_js/Icon/index.js"),FormHint_component=__webpack_require__("./src/deprecated_js/FormHint/FormHint.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const switchsizestyles=size=>{switch(size){case"small":return"jn-w-[1.75rem] jn-h-4";case"large":return"jn-w-[3.125rem] jn-h-[1.6875rem]";default:return"jn-w-switch-default jn-h-switch-default"}},handlesizestyles=size=>{switch(size){case"small":return"jn-w-[0.75rem] jn-h-[0.75rem]";case"large":return"jn-w-[1.4375rem] jn-h-[1.4375rem]";default:return"jn-w-switch-handle-default jn-h-switch-handle-default"}},iconstyles="\n\tjn-inline-block \n\tjn-ml-1 \n\tjn-leading-1\n\tjn-mt-[-.2rem]\n",Switch=_ref=>{let{name="",id=null,label,required=!1,size="default",on=!1,disabled=null,invalid=!1,valid=!1,helptext="",errortext="",successtext="",className="",onChange,onClick,wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),[isOn,setIsOn]=(0,react.useState)(on),[isInvalid,setIsInvalid]=(0,react.useState)(!1),[isValid,setIsValid]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsOn(on)}),[on]);const invalidated=(0,react.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react.useEffect)((()=>{setIsValid(validated)}),[validated]);const theId=id||"juno-switch-"+(0,react.useId)();return react.createElement("div",null,react.createElement("span",{className:`\n\t\t\t\tjuno-switch-wrapper \n\t\t\t\t\n\tjn-flex\n\tjn-flex-row\n\tjn-items-center\n\n        ${wrapperClassName}\n\t\t\t\t`},react.createElement("button",_extends({type:"button",role:"switch",name,id:theId,"aria-checked":isOn,disabled,onClick:event=>{setIsOn(!isOn),onClick&&onClick(event),onChange&&onChange(event)},className:`\n\t\t\t\t\t\tjuno-switch \n\t\t\t\t\t\tjuno-switch-${size} \n\t\t\t\t\t\t\n\tjn-rounded-full\n\tjn-relative\n\tjn-p-0\n\tjn-leading-0\n\tjn-border\n\tjn-g-theme-default\n\tfocus:jn-outline-none\n\tfocus:jn-ring-2\n\tfocus:jn-ring-theme-focus\n\tdisabled:jn-opacity-50\n\tdisabled:jn-cursor-not-allowed\n \n\t\t\t\t\t\t${switchsizestyles(size)} \n\t\t\t\t\t\t${isInvalid?"juno-switch-invalid \n\tjn-border-theme-error\n":""} \n\t\t\t\t\t\t${isValid?"juno-switch-valid \n\tjn-border-theme-success\n":""} \n\t\t\t\t\t\t${isValid||isInvalid?"":"\n\tjn-border-theme-switch-default\n"} \n\t\t\t\t\t\t${className}`},props),react.createElement("span",{className:`juno-switch-handle \n\tjn-inline-block\n\tjn-absolute\n\tjn-top-[1px]\n\tjn-rounded-full\n\tjn-bg-theme-switch-handle\n\tjn-border-theme-default\n ${handlesizestyles(size)} ${isOn?"\n\tjn-right-[1px] \n\tjn-bg-theme-switch-handle-checked\n":"\n\tjn-left-[1px]\n"}`})),react.createElement(Label.J,{text:label,htmlFor:theId,className:"jn-ml-2",disabled,required}),isInvalid?react.createElement(Icon.I,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`${iconstyles} ${disabled?"jn-opacity-50":""}`}):"",isValid?react.createElement(Icon.I,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`${iconstyles} ${disabled?"jn-opacity-50":""}`}):""),errortext&&isNotEmptyString(errortext)?react.createElement(FormHint_component.m,{text:errortext,variant:"error",className:"\n\tjn-mt-0\n"}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint_component.m,{text:successtext,variant:"success",className:"\n\tjn-mt-0\n"}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint_component.m,{text:helptext,className:"\n\tjn-mt-0\n"}):"")};Switch.propTypes={name:prop_types_default().string,id:prop_types_default().string,label:prop_types_default().string,required:prop_types_default().bool,size:prop_types_default().oneOf(["small","default","large"]),on:prop_types_default().bool,disabled:prop_types_default().bool,invalid:prop_types_default().bool,valid:prop_types_default().bool,helptext:prop_types_default().node,errortext:prop_types_default().node,successtext:prop_types_default().node,className:prop_types_default().string,onChange:prop_types_default().func,onClick:prop_types_default().func,wrapperClassName:prop_types_default().string},Switch.__docgenInfo={description:"A Switch/Toggle component",methods:[],displayName:"Switch",props:{name:{defaultValue:{value:'""',computed:!1},description:"Name attribute",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"Add a label to the Switch",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is required",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Leave empty for default size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"default"',computed:!1},{value:'"large"',computed:!1}]},required:!1},on:{defaultValue:{value:"false",computed:!1},description:"Pass checked state for initial rendering.",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disabled switch",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is valid",type:{name:"bool"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Switch",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch was successfully validated",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch has an error or could not be validated",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className. The class name is applied to the internal button element.",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a click handler",type:{name:"func"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Label/Label.component.js")},"./src/deprecated_js/withDeprecationWarning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>withDeprecationWarning});var react=__webpack_require__("../../node_modules/react/index.js");const withDeprecationWarning=(WrappedComponent,message)=>props=>((0,react.useEffect)((()=>{console.warn(message)}),[]),react.createElement(WrappedComponent,props))},"./src/components/SwitchRow/SwitchRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,On:()=>On,Required:()=>Required,Valid:()=>Valid,WithErrorText:()=>WithErrorText,WithHelptext:()=>WithHelptext,WithHelptextWithLink:()=>WithHelptextWithLink,WithSuccessText:()=>WithSuccessText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SwitchRow_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Switch=__webpack_require__("./src/components/Switch/index.js"),FormRow=__webpack_require__("./src/components/FormRow/index.js"),withDeprecationWarning=__webpack_require__("./src/deprecated_js/withDeprecationWarning/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const SwitchRow=_ref=>{let{name=null,label=null,id=null,on=!1,disabled=null,helptext=null,required=null,invalid=!1,errortext="",valid=!1,successtext="",className="",onChange,onClick,...props}=_ref;return react.createElement(FormRow.f,null,react.createElement(Switch.d,_extends({name,label,onChange,onClick,id,on,disabled,invalid,required,valid,errortext,helptext,successtext,className},props)))};SwitchRow.propTypes={name:prop_types_default().string,label:prop_types_default().string,id:prop_types_default().string,on:prop_types_default().bool,disabled:prop_types_default().bool,helptext:prop_types_default().node,required:prop_types_default().bool,invalid:prop_types_default().bool,errortext:prop_types_default().string,valid:prop_types_default().bool,successtext:prop_types_default().string,className:prop_types_default().string,onChange:prop_types_default().func,onClick:prop_types_default().func};const SwitchRow_component=(0,withDeprecationWarning.P)(SwitchRow,"SwitchRow is deprecated and will be removed in future versions. To be future-proof, use Switch instead.");SwitchRow.__docgenInfo={description:"DEPRECATED: A Switch input row containing a switch, associated label, and structural markup. This component is DEPRECATED, use Switch instead.",methods:[],displayName:"SwitchRow",props:{name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the checkbox element",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},on:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch inside the row is on",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disabled",type:{name:"bool"},required:!1},helptext:{defaultValue:{value:"null",computed:!1},description:"Help text",type:{name:"node"},required:!1},required:{defaultValue:{value:"null",computed:!1},description:"Specify whether the Switch is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Pass an error text to display when the Switch is invalid. When passed, the Switch will be set to invalid automatically.",type:{name:"string"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is valid",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Pass a text to display upon successful validation. Will set the Switch to valid automatically.",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler to the Switch",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a click handler to the Switch",type:{name:"func"},required:!1}}};const SwitchRow_stories={title:"Deprecated/SwitchRow",component:SwitchRow_component,parameters:{docs:{description:{component:"DEPRECATED: A Switch input row containing a switch, associated label, and structural markup. This component is DEPRECATED, use Switch instead. "}}},argTypes:{}},Default={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Default Switch Row"}},On={args:{name:"",id:"",disabled:!1,helptext:"",required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"On Switch Row",on:!0}},Disabled={args:{name:"",id:"",helptext:"",required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Disabled Switch Row",on:!0,disabled:!0}},WithHelptext={args:{name:"",id:"",disabled:!1,required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Switch Row with Helptext",on:!0,helptext:"Oh so helpful helptext"}},WithHelptextWithLink={args:{name:"",id:"",disabled:!1,required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Switch Row with Helptext",on:!0,helptext:react.createElement(react.Fragment,null,"Helptext with a ",react.createElement("a",{href:"#"},"Link"))}},Required={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Required Switch",required:!0}},Invalid={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",required:null,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Invalid Switch",invalid:!0}},WithErrorText={args:{name:"",id:"",on:!1,disabled:!1,required:null,invalid:!1,valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Input Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the SwitchRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the SwitchRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},Valid={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",required:null,invalid:!1,errortext:"",successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Valid Switch",valid:!0}},WithSuccessText={args:{name:"",id:"",on:!1,disabled:!1,required:null,invalid:!1,errortext:"",valid:!1,className:"",onChange:void 0,onClick:void 0,label:"Input Row with Success Text",helptext:"Oh so helpful helptext",successtext:"When passed a successtext prop, the SwitchRow will be set to valid automatically."},parameters:{docs:{description:{story:"Passing a `successtext` prop to the SwitchRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."}}}},__namedExportsOrder=["Default","On","Disabled","WithHelptext","WithHelptextWithLink","Required","Invalid","WithErrorText","Valid","WithSuccessText"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    on: false,\n    disabled: false,\n    helptext: "",\n    required: null,\n    invalid: false,\n    errortext: "",\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Default Switch Row"\n  }\n}',...Default.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    disabled: false,\n    helptext: "",\n    required: null,\n    invalid: false,\n    errortext: "",\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "On Switch Row",\n    on: true\n  }\n}',...On.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    helptext: "",\n    required: null,\n    invalid: false,\n    errortext: "",\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Disabled Switch Row",\n    on: true,\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},WithHelptext.parameters={...WithHelptext.parameters,docs:{...WithHelptext.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    disabled: false,\n    required: null,\n    invalid: false,\n    errortext: "",\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Switch Row with Helptext",\n    on: true,\n    helptext: "Oh so helpful helptext"\n  }\n}',...WithHelptext.parameters?.docs?.source}}},WithHelptextWithLink.parameters={...WithHelptextWithLink.parameters,docs:{...WithHelptextWithLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    disabled: false,\n    required: null,\n    invalid: false,\n    errortext: "",\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Switch Row with Helptext",\n    on: true,\n    helptext: <>\n        Helptext with a <a href="#">Link</a>\n      </>\n  }\n}',...WithHelptextWithLink.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    on: false,\n    disabled: false,\n    helptext: "",\n    invalid: false,\n    errortext: "",\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Required Switch",\n    required: true\n  }\n}',...Required.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    on: false,\n    disabled: false,\n    helptext: "",\n    required: null,\n    errortext: "",\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Invalid Switch",\n    invalid: true\n  }\n}',...Invalid.parameters?.docs?.source}}},WithErrorText.parameters={...WithErrorText.parameters,docs:{...WithErrorText.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    on: false,\n    disabled: false,\n    required: null,\n    invalid: false,\n    valid: false,\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Input Row with Error Text",\n    helptext: "Oh so helpful helptext",\n    errortext: "When passed an errortext prop, the SwitchRow will be set to invalid automatically."\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing an `errortext` prop to the SwitchRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."\n      }\n    }\n  }\n}',...WithErrorText.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    on: false,\n    disabled: false,\n    helptext: "",\n    required: null,\n    invalid: false,\n    errortext: "",\n    successtext: "",\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Valid Switch",\n    valid: true\n  }\n}',...Valid.parameters?.docs?.source}}},WithSuccessText.parameters={...WithSuccessText.parameters,docs:{...WithSuccessText.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "",\n    id: "",\n    on: false,\n    disabled: false,\n    required: null,\n    invalid: false,\n    errortext: "",\n    valid: false,\n    className: "",\n    onChange: undefined,\n    onClick: undefined,\n    label: "Input Row with Success Text",\n    helptext: "Oh so helpful helptext",\n    successtext: "When passed a successtext prop, the SwitchRow will be set to valid automatically."\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing a `successtext` prop to the SwitchRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."\n      }\n    }\n  }\n}',...WithSuccessText.parameters?.docs?.source}}}}}]);