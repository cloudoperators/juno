"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3975],{"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Label/Label.component.js")},"./src/components/TextareaRow/TextareaRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,Required:()=>Required,Valid:()=>Valid,WithErrorText:()=>WithErrorText,WithHelpText:()=>WithHelpText,WithHelpTextWithLink:()=>WithHelpTextWithLink,WithSuccessText:()=>WithSuccessText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextareaRow_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Label=__webpack_require__("./src/deprecated_js/Label/index.js"),Icon=__webpack_require__("./src/deprecated_js/Icon/index.js"),FormHint_component=__webpack_require__("./src/deprecated_js/FormHint/FormHint.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Textarea=_ref=>{let{value="",id="",placeholder="",disabled=!1,readOnly=!1,required=!1,invalid=!1,valid=!1,autoFocus=!1,className="",autoComplete="off",helptext="",successtext="",errortext="",onChange,onFocus,onBlur,label,width="full",wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),ref=(0,react.useRef)(),[val,setValue]=(0,react.useState)(""),[hasFocus,setFocus]=(0,react.useState)(!1),[isInvalid,setIsInvalid]=(0,react.useState)(!1),[isValid,setIsValid]=(0,react.useState)(!1);(0,react.useEffect)((()=>{document.hasFocus()&&ref.current.contains(document.activeElement)&&setFocus(!0)}),[]),(0,react.useEffect)((()=>{setValue(value)}),[value]);const invalidated=(0,react.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react.useEffect)((()=>{setIsValid(validated)}),[validated]);const Icons=_ref2=>{let{disabled}=_ref2;return isValid||isInvalid?react.createElement("div",{className:"juno-textinput-row-icon-container \n  jn-inline-flex\n  jn-absolute\n  jn-top-[.4rem]\n  jn-right-3\n "+(disabled?"\n  jn-opacity-50\n":"")},isInvalid?react.createElement(Icon.I,{icon:"dangerous",color:"jn-text-theme-error"}):null,isValid?react.createElement(Icon.I,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},theId=id||"juno-textarea-"+(0,react.useId)();return react.createElement("div",null,react.createElement("div",{className:`\n          juno-textarea-wrapper \n          \n  jn-inline-block\n  jn-relative\n\n          ${"auto"==width?"jn-inline-block":"jn-block"}\n          ${"auto"==width?"jn-w-auto":"jn-w-full"}\n          ${wrapperClassName}\n        `},label&&label.length?react.createElement(Label.J,{text:label,htmlFor:theId,className:"\n  jn-pointer-events-none\n  jn-top-2\n  jn-left-[0.9375rem]\n  jn-pr-4\n  jn-bg-theme-textinput\n",disabled,required,floating:!0,minimized:!!(placeholder||hasFocus||val&&val.length)}):"",react.createElement("textarea",_extends({name,autoComplete,value:val,id:theId,ref,placeholder,disabled,readOnly,autoFocus,onChange:event=>{setValue(event.target.value),onChange&&onChange(event)},onFocus:event=>{setFocus(!0),onFocus&&onFocus(event)},onBlur:event=>{setFocus(!1),onBlur&&onBlur(event)},className:`juno-textarea \n            \n  jn-bg-theme-textinput\n  jn-text-theme-textinput\n  jn-border\n  jn-text-base\n  jn-leading-4\n  jn-px-4\n  jn-rounded-3px\n  jn-align-top\n  focus:jn-outline-none\n  focus:jn-ring-2\n  focus:jn-ring-theme-focus\n  disabled:jn-opacity-50\n  disabled:jn-cursor-not-allowed\n\n            ${label?"\n  jn-pt-[1.125rem] \n  jn-pb-1\n":"\n  jn-py-4\n"}\n            ${isInvalid?"juno-textarea-invalid \n  jn-border-theme-error\n":""} \n            ${isValid?"juno-textarea-valid \n  jn-border-theme-success\n":""}  \n            ${isValid||isInvalid?"":"\n  jn-border-theme-textinput-default\n"} \n            ${"auto"==width?"jn-w-auto":"jn-w-full"}\n            ${className}\n          `},props)),react.createElement(Icons,{disabled})),errortext&&isNotEmptyString(errortext)?react.createElement(FormHint_component.m,{text:errortext,variant:"error",className:"\n  jn-mt-0\n"}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint_component.m,{text:successtext,variant:"success",className:"\n  jn-mt-0\n"}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint_component.m,{text:helptext,className:"\n  jn-mt-0\n"}):"")};Textarea.propTypes={name:prop_types_default().string,label:prop_types_default().string,value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),id:prop_types_default().string,placeholder:prop_types_default().string,disabled:prop_types_default().bool,readOnly:prop_types_default().bool,required:prop_types_default().bool,invalid:prop_types_default().bool,valid:prop_types_default().bool,autoFocus:prop_types_default().bool,className:prop_types_default().string,autoComplete:prop_types_default().string,onChange:prop_types_default().func,onFocus:prop_types_default().func,onBlur:prop_types_default().func,helptext:prop_types_default().node,successtext:prop_types_default().node,errortext:prop_types_default().node,width:prop_types_default().oneOf(["full","auto"]),wrapperClassName:prop_types_default().string},Textarea.__docgenInfo={description:"A controlled Text Input.\nAlso covers email, telephone, password, url derivates.",methods:[],displayName:"Textarea",props:{value:{defaultValue:{value:'""',computed:!1},description:"Pass a value",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Pass a placeholder",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Render a disabled input",type:{name:"bool"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Render a readonly input",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the field is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is valid",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"Whether the field receives autofocus",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname. The class name is applied to the internal textarea element.",type:{name:"string"},required:!1},autoComplete:{defaultValue:{value:'"off"',computed:!1},description:"Pass a valid autocomplete value. We do not police validity.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Textarea",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Textarea was successfully validated",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Textarea has an error or could not be validated",type:{name:"node"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"Pass a focus handler",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"Pass a blur handler",type:{name:"func"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"The label of the textarea",type:{name:"string"},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:"The width of the textarea. Either 'full' (default) or 'auto'.",type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},name:{description:"Pass a name attribute",type:{name:"string"},required:!1}}};var FormRow_component=__webpack_require__("./src/deprecated_js/FormRow/FormRow.component.js"),withDeprecationWarning=__webpack_require__("./src/deprecated_js/withDeprecationWarning/index.js");function TextareaRow_component_extends(){return TextareaRow_component_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},TextareaRow_component_extends.apply(null,arguments)}const TextareaRow=_ref=>{let{value="",name=null,label=null,id=null,placeholder=null,required=null,invalid=!1,errortext="",valid=!1,successtext="",helptext=null,className="",disabled=null,onChange,...props}=_ref;return react.createElement(FormRow_component.f,null,react.createElement(Textarea,TextareaRow_component_extends({value,name,id,label,required,placeholder,disabled,invalid,valid,onChange,errortext,helptext,successtext,className},props)))};TextareaRow.propTypes={value:prop_types_default().string,name:prop_types_default().string,label:prop_types_default().string,id:prop_types_default().string,helptext:prop_types_default().node,placeholder:prop_types_default().string,required:prop_types_default().bool,invalid:prop_types_default().bool,errortext:prop_types_default().string,valid:prop_types_default().bool,successtext:prop_types_default().string,className:prop_types_default().string,disabled:prop_types_default().bool,onChange:prop_types_default().func};const TextareaRow_component=(0,withDeprecationWarning.P)(TextareaRow,"TextareaRow is deprecated and will be removed in future versions. To be future-proof, use Textarea instead.");TextareaRow.__docgenInfo={description:"DEPRECATED: A textarea row containing a textarea, associated label, optional helptext, and structural markup. This component is DEPRECATED, use Textarea instead.",methods:[],displayName:"TextareaRow",props:{value:{defaultValue:{value:'""',computed:!1},description:"Optional initial value",type:{name:"string"},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the textarea element",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:"null",computed:!1},description:"Placeholder for the text input. Will not be visible on floating label inputs.",type:{name:"string"},required:!1},required:{defaultValue:{value:"null",computed:!1},description:"Specify whether the input is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Error text to display when validation fails. Will automatically invalidate the field if passed.",type:{name:"string"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is valid",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Text to display when validation is successful. Will automatically set the field to valid if passed.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:"null",computed:!1},description:"Help text",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className to the Textarea",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the textarea",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the checkbox element",type:{name:"func"},required:!1}}};const TextareaRow_stories={title:"Deprecated/TextareaRow",component:TextareaRow_component,parameters:{docs:{description:{component:"DEPRECATED: A textarea row containing a textarea, associated label, optional helptext, and structural markup. This component is DEPRECATED, use Textarea instead."}}},argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},children:{control:!1}}},Default={args:{label:"Default Textarea Row"}},Disabled={args:{label:"Disabled Textarea Row",disabled:!0}},WithHelpText={args:{name:"my-input",label:"Textarea Row with Helptext",helptext:"Oh so helpful helptext"}},WithHelpTextWithLink={args:{name:"my-input",label:"Textarea Row with Helptext",helptext:react.createElement(react.Fragment,null,"Helptext with a ",react.createElement("a",{href:"#"},"Link"))}},Required={args:{label:"Required Textarea",required:!0}},Invalid={args:{label:"Invalid TextareaRow",invalid:!0}},WithErrorText={args:{label:"Textarea Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the TextareaRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the TextareaRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},Valid={args:{label:"Valid TextareaRow",valid:!0}},WithSuccessText={args:{label:"Textarea Row with Success Text",helptext:"Oh so helpful helptext",successtext:"When passed a successtext prop, the TextareaRow will be set to valid automatically."},parameters:{docs:{description:{story:"Passing a `successtext` prop to the TextareaRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."}}}},__namedExportsOrder=["Default","Disabled","WithHelpText","WithHelpTextWithLink","Required","Invalid","WithErrorText","Valid","WithSuccessText"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Default Textarea Row"\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Disabled Textarea Row",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "my-input",\n    label: "Textarea Row with Helptext",\n    helptext: "Oh so helpful helptext"\n  }\n}',...WithHelpText.parameters?.docs?.source}}},WithHelpTextWithLink.parameters={...WithHelpTextWithLink.parameters,docs:{...WithHelpTextWithLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "my-input",\n    label: "Textarea Row with Helptext",\n    helptext: <>\n        Helptext with a <a href="#">Link</a>\n      </>\n  }\n}',...WithHelpTextWithLink.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Required Textarea",\n    required: true\n  }\n}',...Required.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Invalid TextareaRow",\n    invalid: true\n  }\n}',...Invalid.parameters?.docs?.source}}},WithErrorText.parameters={...WithErrorText.parameters,docs:{...WithErrorText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Textarea Row with Error Text",\n    helptext: "Oh so helpful helptext",\n    errortext: "When passed an errortext prop, the TextareaRow will be set to invalid automatically."\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing an `errortext` prop to the TextareaRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."\n      }\n    }\n  }\n}',...WithErrorText.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Valid TextareaRow",\n    valid: true\n  }\n}',...Valid.parameters?.docs?.source}}},WithSuccessText.parameters={...WithSuccessText.parameters,docs:{...WithSuccessText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Textarea Row with Success Text",\n    helptext: "Oh so helpful helptext",\n    successtext: "When passed a successtext prop, the TextareaRow will be set to valid automatically."\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing a `successtext` prop to the TextareaRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."\n      }\n    }\n  }\n}',...WithSuccessText.parameters?.docs?.source}}}}}]);