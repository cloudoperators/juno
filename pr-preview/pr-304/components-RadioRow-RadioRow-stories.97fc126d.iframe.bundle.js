"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8695],{"./src/components/FormHint/FormHint.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const variantStyles=variant=>{switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=_ref=>{let{children=null,text="",variant="help",className,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n        juno-form-hint\n        juno-form-hint-${variant}\n        \n  jn-text-xs\n  jn-mt-1\n\n        ${variantStyles(variant)}\n        ${className}\n      `},props),children||text)};FormHint.displayName="FormHint Js",FormHint.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["help","error","success"]),className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint Js",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}}},"./src/components/FormHint/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_FormHint_component__WEBPACK_IMPORTED_MODULE_0__.m});var _FormHint_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormHint/FormHint.component.js")},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.js")},"./src/components/Label/Label.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,forwardedRef)=>{let{text="",htmlFor,required=!1,className="",disabled=!1,floating=!1,minimized=!1,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:`\n\t\t\t\tjuno-label \n\t\t\t\t\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-transform \n\tjn-origin-top-left \n\tjn-transition-all \n\tjn-duration-100 \n\tjn-ease-in-out\n\tjn-z-10\n \n\t\t\t\t${floating?"juno-label-floating \n\tjn-absolute\n":""}\n\t\t\t\t${minimized?"juno-label-minimized \n\tjn-scale-75\n\t-jn-translate-y-[0.4375rem]\n":""}\n\t\t\t\t${disabled?"juno-label-disabled \n\tjn-opacity-50\n\tjn-cursor-not-allowed\n":""} \n\t\t\t\t${className}\n\t\t\t`,htmlFor,ref:forwardedRef},props),text,required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\t\t\t\t\tjuno-required \n\t\t\t\t\t\n\tjn-inline-block\n\tjn-w-1\n\tjn-h-1\n\tjn-rounded-full\n\tjn-align-top\n\tjn-ml-1\n\tjn-mt-2\n\tjn-bg-theme-required\n\n\t\t\t\t\t"}):"")}));Label.displayName="Label (JS)",Label.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,htmlFor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,floating:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,minimized:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool},Label.__docgenInfo={description:"A re-usable Label component",methods:[],displayName:"Label (JS)",props:{text:{defaultValue:{value:'""',computed:!1},description:"Pass a string of text to be rendered as contents. Required.",type:{name:"string"},required:!1},htmlFor:{defaultValue:{value:"undefined",computed:!0},description:"An Id of an input element to associate the label with",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Label for a disabled input",type:{name:"bool"},required:!1},floating:{defaultValue:{value:"false",computed:!1},description:"Whether the label is floating",type:{name:"bool"},required:!1},minimized:{defaultValue:{value:"false",computed:!1},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",type:{name:"bool"},required:!1}}}},"./src/components/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Label/Label.component.js")},"./src/components/Radio/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>_Radio_component__WEBPACK_IMPORTED_MODULE_0__.s});var _Radio_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Radio/Radio.component.js")},"./src/components/withDeprecationWarning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>withDeprecationWarning});var react=__webpack_require__("../../node_modules/react/index.js");const withDeprecationWarning=(WrappedComponent,message)=>props=>((0,react.useEffect)((()=>{console.warn(message)}),[]),react.createElement(WrappedComponent,props))},"./src/components/RadioRow/RadioRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,Required:()=>Required,Valid:()=>Valid,WithErrorText:()=>WithErrorText,WithHelpText:()=>WithHelpText,WithHelpTextWithLink:()=>WithHelpTextWithLink,WithSuccessText:()=>WithSuccessText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioRow_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Radio=__webpack_require__("./src/components/Radio/index.js"),withDeprecationWarning=__webpack_require__("./src/components/withDeprecationWarning/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const RadioRow=_ref=>{let{value="",checked=!1,name=null,label=null,id=null,helptext="",className="",disabled=!1,required=!1,errortext="",valid=!1,invalid,successtext="",onChange,...props}=_ref;return react.createElement(Radio.s,_extends({value,checked,name,label,id,helptext,disabled,required,invalid,valid,errortext,successtext,className,onChange},props))};RadioRow.propTypes={value:prop_types_default().string,checked:prop_types_default().bool,name:prop_types_default().string,label:prop_types_default().string,id:prop_types_default().string,helptext:prop_types_default().node,disabled:prop_types_default().bool,required:prop_types_default().bool,invalid:prop_types_default().bool,errortext:prop_types_default().node,valid:prop_types_default().bool,successtext:prop_types_default().node,className:prop_types_default().string,onChange:prop_types_default().func};const RadioRow_component=(0,withDeprecationWarning.P)(RadioRow,"RadioRow is deprecated and will be removed in future versions. To be future-proof, use Radio instead.");RadioRow.__docgenInfo={description:"DEPRECATED: A radio row containing a radio, associated label, and structural markup. This component is DEPRECATED, use Radio instead.",methods:[],displayName:"RadioRow",props:{value:{defaultValue:{value:'""',computed:!1},description:"Optional initial value",type:{name:"string"},required:!1},checked:{defaultValue:{value:"false",computed:!1},description:"Pass checked state",type:{name:"bool"},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the Radio element",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"Help text",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Pass to disable the Radio",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the Radio is required",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Error text to be displayed. When passed, the Radio will automatically be invalidated.",type:{name:"node"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Radio is valid",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Success text to be displayed when the Radio is valid. When passed, will set the radio to valid automatically.",type:{name:"node"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the checkbox element",type:{name:"func"},required:!1},invalid:{description:"Whether the Radio is invalid",type:{name:"bool"},required:!1}}};const RadioRow_stories={title:"Deprecated/RadioRow",component:RadioRow_component,parameters:{docs:{description:{component:"DEPRECATED: A radio row containing a radio, associated label, and structural markup. This component is DEPRECATED, use Radio instead."}}},argTypes:{}},Default={args:{label:"Default Radio Row",id:"radio-row-default"}},Checked={args:{label:"Checked Radio Row",checked:!0,id:"radio-row-checked"}},WithHelpText={args:{name:"my-input",label:"Radio Row with help text",helptext:"Oh so helpful helptext",id:"radio-row-withHelptext"}},WithHelpTextWithLink={args:{name:"my-input",label:"Radio Row with help text",helptext:react.createElement(react.Fragment,null,"Helptext with a ",react.createElement("a",{href:"#"},"Link")),id:"radio-row-withHelptext-WithLink"}},Disabled={args:{label:"Disabled Radio",id:"radio-row-disabled",disabled:!0}},Required={args:{label:"Required Radio",id:"required-radio",required:!0}},Invalid={args:{label:"Invalid Option",invalid:!0}},WithErrorText={args:{label:"Option with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the RadioRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the RadioRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},Valid={args:{label:"Valid Option",valid:!0}},WithSuccessText={args:{label:"Radio validated by successtext",successtext:"Pass a successtext to validate a CheckboxRow"}},__namedExportsOrder=["Default","Checked","WithHelpText","WithHelpTextWithLink","Disabled","Required","Invalid","WithErrorText","Valid","WithSuccessText"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Default Radio Row",\n    id: "radio-row-default"\n  }\n}',...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Checked Radio Row",\n    checked: true,\n    id: "radio-row-checked"\n  }\n}',...Checked.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "my-input",\n    label: "Radio Row with help text",\n    helptext: "Oh so helpful helptext",\n    id: "radio-row-withHelptext"\n  }\n}',...WithHelpText.parameters?.docs?.source}}},WithHelpTextWithLink.parameters={...WithHelpTextWithLink.parameters,docs:{...WithHelpTextWithLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "my-input",\n    label: "Radio Row with help text",\n    helptext: <>\n        Helptext with a <a href="#">Link</a>\n      </>,\n    id: "radio-row-withHelptext-WithLink"\n  }\n}',...WithHelpTextWithLink.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Disabled Radio",\n    id: "radio-row-disabled",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Required Radio",\n    id: "required-radio",\n    required: true\n  }\n}',...Required.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Invalid Option",\n    invalid: true\n  }\n}',...Invalid.parameters?.docs?.source}}},WithErrorText.parameters={...WithErrorText.parameters,docs:{...WithErrorText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Option with Error Text",\n    helptext: "Oh so helpful helptext",\n    errortext: "When passed an errortext prop, the RadioRow will be set to invalid automatically."\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing an `errortext` prop to the RadioRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."\n      }\n    }\n  }\n}',...WithErrorText.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Valid Option",\n    valid: true\n  }\n}',...Valid.parameters?.docs?.source}}},WithSuccessText.parameters={...WithSuccessText.parameters,docs:{...WithSuccessText.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Radio validated by successtext",\n    successtext: "Pass a successtext to validate a CheckboxRow"\n  }\n}',...WithSuccessText.parameters?.docs?.source}}}}}]);