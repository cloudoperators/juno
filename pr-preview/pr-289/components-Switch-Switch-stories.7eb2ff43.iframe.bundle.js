"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2857],{"./src/components/FormHint/FormHint.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const variantStyles=variant=>{switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=_ref=>{let{children=null,text="",variant="help",className,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n        juno-form-hint\n        juno-form-hint-${variant}\n        \n  jn-text-xs\n  jn-mt-1\n\n        ${variantStyles(variant)}\n        ${className}\n      `},props),children||text)};FormHint.displayName="Label Js",FormHint.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["help","error","success"]),className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormHint.__docgenInfo={description:"",methods:[],displayName:"Label Js",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}}},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.js")},"./src/components/Label/Label.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,forwardedRef)=>{let{text="",htmlFor,required=!1,className="",disabled=!1,floating=!1,minimized=!1,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:`\n\t\t\t\tjuno-label \n\t\t\t\t\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-transform \n\tjn-origin-top-left \n\tjn-transition-all \n\tjn-duration-100 \n\tjn-ease-in-out\n\tjn-z-10\n \n\t\t\t\t${floating?"juno-label-floating \n\tjn-absolute\n":""}\n\t\t\t\t${minimized?"juno-label-minimized \n\tjn-scale-75\n\t-jn-translate-y-[0.4375rem]\n":""}\n\t\t\t\t${disabled?"juno-label-disabled \n\tjn-opacity-50\n\tjn-cursor-not-allowed\n":""} \n\t\t\t\t${className}\n\t\t\t`,htmlFor,ref:forwardedRef},props),text,required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\t\t\t\t\tjuno-required \n\t\t\t\t\t\n\tjn-inline-block\n\tjn-w-1\n\tjn-h-1\n\tjn-rounded-full\n\tjn-align-top\n\tjn-ml-1\n\tjn-mt-2\n\tjn-bg-theme-required\n\n\t\t\t\t\t"}):"")}));Label.displayName="Label (JS)",Label.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,htmlFor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,floating:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,minimized:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool},Label.__docgenInfo={description:"A re-usable Label component",methods:[],displayName:"Label (JS)",props:{text:{defaultValue:{value:'""',computed:!1},description:"Pass a string of text to be rendered as contents. Required.",type:{name:"string"},required:!1},htmlFor:{defaultValue:{value:"undefined",computed:!0},description:"An Id of an input element to associate the label with",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Label for a disabled input",type:{name:"bool"},required:!1},floating:{defaultValue:{value:"false",computed:!1},description:"Whether the label is floating",type:{name:"bool"},required:!1},minimized:{defaultValue:{value:"false",computed:!1},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",type:{name:"bool"},required:!1}}}},"./src/components/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Label/Label.component.js")},"./src/components/Switch/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Switch});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Label=__webpack_require__("./src/components/Label/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),FormHint_component=__webpack_require__("./src/components/FormHint/FormHint.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const switchsizestyles=size=>{switch(size){case"small":return"jn-w-[1.75rem] jn-h-4";case"large":return"jn-w-[3.125rem] jn-h-[1.6875rem]";default:return"jn-w-switch-default jn-h-switch-default"}},handlesizestyles=size=>{switch(size){case"small":return"jn-w-[0.75rem] jn-h-[0.75rem]";case"large":return"jn-w-[1.4375rem] jn-h-[1.4375rem]";default:return"jn-w-switch-handle-default jn-h-switch-handle-default"}},iconstyles="\n\tjn-inline-block \n\tjn-ml-1 \n\tjn-leading-1\n\tjn-mt-[-.2rem]\n",Switch=_ref=>{let{name="",id=null,label,required=!1,size="default",on=!1,disabled=null,invalid=!1,valid=!1,helptext="",errortext="",successtext="",className="",onChange,onClick,wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),[isOn,setIsOn]=(0,react.useState)(on),[isInvalid,setIsInvalid]=(0,react.useState)(!1),[isValid,setIsValid]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsOn(on)}),[on]);const invalidated=(0,react.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react.useEffect)((()=>{setIsValid(validated)}),[validated]);const theId=id||"juno-switch-"+(0,react.useId)();return react.createElement("div",null,react.createElement("span",{className:`\n\t\t\t\tjuno-switch-wrapper \n\t\t\t\t\n\tjn-flex\n\tjn-flex-row\n\tjn-items-center\n\n        ${wrapperClassName}\n\t\t\t\t`},react.createElement("button",_extends({type:"button",role:"switch",name,id:theId,"aria-checked":isOn,disabled,onClick:event=>{setIsOn(!isOn),onClick&&onClick(event),onChange&&onChange(event)},className:`\n\t\t\t\t\t\tjuno-switch \n\t\t\t\t\t\tjuno-switch-${size} \n\t\t\t\t\t\t\n\tjn-rounded-full\n\tjn-relative\n\tjn-p-0\n\tjn-leading-0\n\tjn-border\n\tjn-g-theme-default\n\tfocus:jn-outline-none\n\tfocus:jn-ring-2\n\tfocus:jn-ring-theme-focus\n\tdisabled:jn-opacity-50\n\tdisabled:jn-cursor-not-allowed\n \n\t\t\t\t\t\t${switchsizestyles(size)} \n\t\t\t\t\t\t${isInvalid?"juno-switch-invalid \n\tjn-border-theme-error\n":""} \n\t\t\t\t\t\t${isValid?"juno-switch-valid \n\tjn-border-theme-success\n":""} \n\t\t\t\t\t\t${isValid||isInvalid?"":"\n\tjn-border-theme-switch-default\n"} \n\t\t\t\t\t\t${className}`},props),react.createElement("span",{className:`juno-switch-handle \n\tjn-inline-block\n\tjn-absolute\n\tjn-top-[1px]\n\tjn-rounded-full\n\tjn-bg-theme-switch-handle\n\tjn-border-theme-default\n ${handlesizestyles(size)} ${isOn?"\n\tjn-right-[1px] \n\tjn-bg-theme-switch-handle-checked\n":"\n\tjn-left-[1px]\n"}`})),react.createElement(Label.J,{text:label,htmlFor:theId,className:"jn-ml-2",disabled,required}),isInvalid?react.createElement(Icon.I,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`${iconstyles} ${disabled?"jn-opacity-50":""}`}):"",isValid?react.createElement(Icon.I,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`${iconstyles} ${disabled?"jn-opacity-50":""}`}):""),errortext&&isNotEmptyString(errortext)?react.createElement(FormHint_component.m,{text:errortext,variant:"error",className:"\n\tjn-mt-0\n"}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint_component.m,{text:successtext,variant:"success",className:"\n\tjn-mt-0\n"}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint_component.m,{text:helptext,className:"\n\tjn-mt-0\n"}):"")};Switch.propTypes={name:prop_types_default().string,id:prop_types_default().string,label:prop_types_default().string,required:prop_types_default().bool,size:prop_types_default().oneOf(["small","default","large"]),on:prop_types_default().bool,disabled:prop_types_default().bool,invalid:prop_types_default().bool,valid:prop_types_default().bool,helptext:prop_types_default().node,errortext:prop_types_default().node,successtext:prop_types_default().node,className:prop_types_default().string,onChange:prop_types_default().func,onClick:prop_types_default().func,wrapperClassName:prop_types_default().string},Switch.__docgenInfo={description:"A Switch/Toggle component",methods:[],displayName:"Switch",props:{name:{defaultValue:{value:'""',computed:!1},description:"Name attribute",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"Add a label to the Switch",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is required",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Leave empty for default size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"default"',computed:!1},{value:'"large"',computed:!1}]},required:!1},on:{defaultValue:{value:"false",computed:!1},description:"Pass checked state for initial rendering.",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disabled switch",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is valid",type:{name:"bool"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Switch",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch was successfully validated",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch has an error or could not be validated",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className. The class name is applied to the internal button element.",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a click handler",type:{name:"func"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1}}}},"./src/components/Switch/Switch.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,Large:()=>Large,On:()=>On,Small:()=>Small,Valid:()=>Valid,WithErrorText:()=>WithErrorText,WithHelpText:()=>WithHelpText,WithHelpTextAsNode:()=>WithHelpTextAsNode,WithSuccessText:()=>WithSuccessText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Switch",component:__webpack_require__("./src/components/Switch/index.js").d,parameters:{docs:{description:{component:"The basic switch component. Use for interactions that produce an immediate result when switching between two states/options. IN the context of forms that require to be submitted in order to take effect, use checkboxes instead."}}},argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1}}},Default={parameters:{docs:{description:{story:'Default Switch. Defaults to "off".'}}},args:{label:"Switch",id:"switch-default"}},Small={args:{size:"small",label:"Small Switch",id:"switch-small"}},Large={args:{size:"large",label:"Large Switch",id:"switch-large"}},On={parameters:{docs:{description:{story:'Render a checked Switch by passing bool "on".'}}},args:{on:!0}},Disabled={parameters:{docs:{description:{story:'Disable a Switch by passing bool "disabled".'}}},args:{on:!0,disabled:!0,label:"Disabled Switch",id:"switch-disabled"}},Invalid={args:{invalid:!0,label:"Invalid Switch",id:"switch-invalid"}},Valid={args:{valid:!0,label:"Valid Switch",id:"switch-valid"}},WithHelpText={args:{label:"Switch",helptext:"This is an explanatory text referring to the input"}},WithHelpTextAsNode={args:{label:"Switch",helptext:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"This is a helptext with a ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Link"))}},WithSuccessText={args:{label:"Switch",successtext:"This field is a great success!"}},WithErrorText={args:{label:"Switch",errortext:"This field has an error"}},__namedExportsOrder=["Default","Small","Large","On","Disabled","Invalid","Valid","WithHelpText","WithHelpTextAsNode","WithSuccessText","WithErrorText"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: \'Default Switch. Defaults to "off".\'\n      }\n    }\n  },\n  args: {\n    label: "Switch",\n    id: "switch-default"\n  }\n}',...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "small",\n    label: "Small Switch",\n    id: "switch-small"\n  }\n}',...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "large",\n    label: "Large Switch",\n    id: "switch-large"\n  }\n}',...Large.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Render a checked Switch by passing bool \"on\".'\n      }\n    }\n  },\n  args: {\n    on: true\n  }\n}",...On.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: \'Disable a Switch by passing bool "disabled".\'\n      }\n    }\n  },\n  args: {\n    on: true,\n    disabled: true,\n    label: "Disabled Switch",\n    id: "switch-disabled"\n  }\n}',...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  args: {\n    invalid: true,\n    label: "Invalid Switch",\n    id: "switch-invalid"\n  }\n}',...Invalid.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:'{\n  args: {\n    valid: true,\n    label: "Valid Switch",\n    id: "switch-valid"\n  }\n}',...Valid.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Switch",\n    helptext: "This is an explanatory text referring to the input"\n  }\n}',...WithHelpText.parameters?.docs?.source}}},WithHelpTextAsNode.parameters={...WithHelpTextAsNode.parameters,docs:{...WithHelpTextAsNode.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Switch",\n    helptext: <>\n        This is a helptext with a <a href="#">Link</a>\n      </>\n  }\n}',...WithHelpTextAsNode.parameters?.docs?.source}}},WithSuccessText.parameters={...WithSuccessText.parameters,docs:{...WithSuccessText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Switch",\n    successtext: "This field is a great success!"\n  }\n}',...WithSuccessText.parameters?.docs?.source}}},WithErrorText.parameters={...WithErrorText.parameters,docs:{...WithErrorText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Switch",\n    errortext: "This field has an error"\n  }\n}',...WithErrorText.parameters?.docs?.source}}}}}]);