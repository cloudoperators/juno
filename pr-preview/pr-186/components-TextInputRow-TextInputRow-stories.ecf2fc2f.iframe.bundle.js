"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[5567],{"./src/components/TextInputRow/TextInputRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Autofocus:()=>Autofocus,Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,Required:()=>Required,Valid:()=>Valid,WithErrorText:()=>WithErrorText,WithHelpText:()=>WithHelpText,WithHelpTextWithLink:()=>WithHelpTextWithLink,WithSuccessText:()=>WithSuccessText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInputRow_stories});__webpack_require__("../../node_modules/react/index.js");var prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),TextInput=__webpack_require__("./src/components/TextInput/index.js"),FormRow=__webpack_require__("./src/components/FormRow/index.js"),withDeprecationWarning=__webpack_require__("./src/components/withDeprecationWarning/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TextInputRow=_ref=>{let{type=null,value="",name="",label="",id="",placeholder="",helptext="",required=!1,invalid=!1,errortext="",valid=!1,successtext="",autoFocus=!1,className="",disabled=!1,onChange,onFocus,onBlur,...props}=_ref;return(0,jsx_runtime.jsx)(FormRow.f,{children:(0,jsx_runtime.jsx)(TextInput.k,{type,value,name,id,label,required,placeholder,disabled,invalid,valid,autoFocus,onChange,errortext,helptext,successtext,className,onFocus,onBlur,...props})})};TextInputRow.displayName="TextInputRow",TextInputRow.propTypes={type:prop_types_default().oneOf(["text","password","email","tel","url","number"]),value:prop_types_default().string,name:prop_types_default().string,label:prop_types_default().string,id:prop_types_default().string,placeholder:prop_types_default().string,helptext:prop_types_default().node,required:prop_types_default().bool,invalid:prop_types_default().bool,errortext:prop_types_default().string,valid:prop_types_default().bool,successtext:prop_types_default().string,autoFocus:prop_types_default().bool,className:prop_types_default().string,disabled:prop_types_default().bool,onChange:prop_types_default().func,onFocus:prop_types_default().func,onBlur:prop_types_default().func};const TextInputRow_component=(0,withDeprecationWarning.P)(TextInputRow,"TextInputRow is deprecated and will be removed in future versions. To be future-proof, use TextInput instead.");TextInputRow.__docgenInfo={description:"DEPRECATED: A text input row containing an input of type text, password, email, tel, or url, an associated label, and necessary structural markup. This component is DEPRECATED, use TextInput instead.",methods:[],displayName:"TextInputRow",props:{type:{defaultValue:{value:"null",computed:!1},description:"The type of the input element to render",type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"password"',computed:!1},{value:'"email"',computed:!1},{value:'"tel"',computed:!1},{value:'"url"',computed:!1},{value:'"number"',computed:!1}]},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"Optional initial value",type:{name:"string"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"Name attribute of the input",type:{name:"string"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Placeholder for the text input. Will not be visible on floating label inputs.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"Help text",type:{name:"node"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Specify whether the input is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the input is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Error text to display below the input element. When passed, the component will be set to invalid automatically.",type:{name:"string"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the input is valid",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Text to display when validation is successful. Will automatically set the field to valid if passed.",type:{name:"string"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"Whether the input element should automatically receive focus",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disable the input",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the input element",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the input element",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the input element",type:{name:"func"},required:!1}}};const TextInputRow_stories={title:"Deprecated/TextInputRow",component:TextInputRow_component,parameters:{docs:{description:{component:"DEPRECATED: A text input row containing an input of type text, password, email, tel, or url, an associated label, and necessary structural markup. This component is DEPRECATED, use TextInput instead."}}},argTypes:{type:{options:["text","password","email","tel","url","number"],control:{type:"select"}},errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},children:{control:!1}}},Default={args:{label:"Default Text Input Row"}},Disabled={args:{label:"Disabled Text Input Row",disabled:!0},parameters:{docs:{description:{story:"Set `disabled` to true to disable the input."}}}},WithHelpText={args:{name:"my-input",label:"Text Input Row with Help Text",helptext:"Oh so helpful helptext"}},WithHelpTextWithLink={args:{name:"my-input",label:"Text Input Row with Help Text containing a link",helptext:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Helptext with a ",(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})]})}},Required={args:{label:"Required Input Row",required:!0,helptext:"this field is required"},parameters:{docs:{description:{story:"Setting `required` to true to render the required marker to the label. Note that this will not set the html-`required` attribute in the rendered. You will have to manage checking for completeness and showing error messages yourself."}}}},Invalid={args:{label:"Invalid Input Row",invalid:!0},parameters:{docs:{description:{story:"Set `invalid` to true to invalidate the field and render the associated styles and the icon."}}}},WithErrorText={args:{label:"Input Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the InputRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the TextInputRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},Valid={args:{label:"Valid Input Row",valid:!0},parameters:{docs:{description:{story:"Set `valid` to true to set the field to valid and render the associated styles and the icon."}}}},WithSuccessText={args:{label:"Input Row with Success Text",helptext:"Oh so helpful helptext",successtext:"When passed an errortext prop, the InputRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing a `successtext` prop to the TextInputRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."}}}},Autofocus={args:{autoFocus:!0,label:"Text Input Row"},parameters:{docs:{description:{story:"Set `autoFocus` to true to automatically focus the input."}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Default Text Input Row"\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Disabled Text Input Row",\n    disabled: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set `disabled` to true to disable the input."\n      }\n    }\n  }\n}',...Disabled.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "my-input",\n    label: "Text Input Row with Help Text",\n    helptext: "Oh so helpful helptext"\n  }\n}',...WithHelpText.parameters?.docs?.source}}},WithHelpTextWithLink.parameters={...WithHelpTextWithLink.parameters,docs:{...WithHelpTextWithLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "my-input",\n    label: "Text Input Row with Help Text containing a link",\n    helptext: <>\n        Helptext with a <a href="#">Link</a>\n      </>\n  }\n}',...WithHelpTextWithLink.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Required Input Row",\n    required: true,\n    helptext: "this field is required"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Setting `required` to true to render the required marker to the label. Note that this will not set the html-`required` attribute in the rendered. You will have to manage checking for completeness and showing error messages yourself."\n      }\n    }\n  }\n}',...Required.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Invalid Input Row",\n    invalid: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set `invalid` to true to invalidate the field and render the associated styles and the icon."\n      }\n    }\n  }\n}',...Invalid.parameters?.docs?.source}}},WithErrorText.parameters={...WithErrorText.parameters,docs:{...WithErrorText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Input Row with Error Text",\n    helptext: "Oh so helpful helptext",\n    errortext: "When passed an errortext prop, the InputRow will be set to invalid automatically."\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing an `errortext` prop to the TextInputRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."\n      }\n    }\n  }\n}',...WithErrorText.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Valid Input Row",\n    valid: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set `valid` to true to set the field to valid and render the associated styles and the icon."\n      }\n    }\n  }\n}',...Valid.parameters?.docs?.source}}},WithSuccessText.parameters={...WithSuccessText.parameters,docs:{...WithSuccessText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Input Row with Success Text",\n    helptext: "Oh so helpful helptext",\n    successtext: "When passed an errortext prop, the InputRow will be set to invalid automatically."\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing a `successtext` prop to the TextInputRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."\n      }\n    }\n  }\n}',...WithSuccessText.parameters?.docs?.source}}},Autofocus.parameters={...Autofocus.parameters,docs:{...Autofocus.parameters?.docs,source:{originalSource:'{\n  args: {\n    autoFocus: true,\n    label: "Text Input Row"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set `autoFocus` to true to automatically focus the input."\n      }\n    }\n  }\n}',...Autofocus.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","WithHelpText","WithHelpTextWithLink","Required","Invalid","WithErrorText","Valid","WithSuccessText","Autofocus"]},"./src/components/FormRow/FormRow.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FormRow});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const FormRow=_ref=>{let{children=null,className="",...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`juno-form-row \n  jn-mb-2\n ${className}`,...props,children})};FormRow.displayName="FormRow",FormRow.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},FormRow.__docgenInfo={description:"A generic FormRow component.\nUsed to layout and structure forms. Pass Form elements such as TextInput, Textarea, Select, or Radio and CheckboxGroups as children.",methods:[],displayName:"FormRow",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render in the formRow. Typically, these will be Input components such as TextInput, Textarea, Select, or Radio and CheckboxGroups",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to a FormRow",type:{name:"string"},required:!1}}}},"./src/components/FormRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>_FormRow_component__WEBPACK_IMPORTED_MODULE_0__.f});var _FormRow_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormRow/FormRow.component.js")},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.js")},"./src/components/TextInput/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>_TextInput_component__WEBPACK_IMPORTED_MODULE_0__.k});var _TextInput_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TextInput/TextInput.component.js")},"./src/components/withDeprecationWarning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>withDeprecationWarning});var react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const withDeprecationWarning=(WrappedComponent,message)=>props=>((0,react.useEffect)((()=>{console.warn(message)}),[]),(0,jsx_runtime.jsx)(WrappedComponent,{...props}))}}]);