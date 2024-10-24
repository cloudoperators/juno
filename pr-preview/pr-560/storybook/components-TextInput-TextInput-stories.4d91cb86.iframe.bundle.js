"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4639],{"./src/components/FormHint/FormHint.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},variantStyles=function(variant){switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.text,text=void 0===_c?"":_c,_d=_a.variant,variant=void 0===_d?"help":_d,className=_a.className,props=__rest(_a,["children","text","variant","className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"\n        juno-form-hint\n        juno-form-hint-".concat(variant,"\n        ").concat("\n  jn-text-xs\n  jn-mt-1\n","\n        ").concat(variantStyles(variant),"\n        ").concat(className,"\n      ")},props,{children:children||text}))};FormHint.displayName="FormHint";try{FormHint.displayName="FormHint",FormHint.__docgenInfo={description:"",displayName:"FormHint",props:{children:{defaultValue:{value:"null"},description:"The children to render as a hint associated with a form element",name:"children",required:!1,type:{name:"any"}},text:{defaultValue:{value:""},description:"The text to render. If both children and text are passed, children will rendered",name:"text",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"help"},description:"The variant of the the hint. Defaults to 'help'.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"help"'}]}},className:{defaultValue:null,description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormHint/FormHint.component.tsx#FormHint"]={docgenInfo:FormHint.__docgenInfo,name:"FormHint",path:"src/components/FormHint/FormHint.component.tsx#FormHint"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Label=react.forwardRef((function(_a,forwardedRef){var _b=_a.text,text=void 0===_b?"":_b,_c=_a.htmlFor,htmlFor=void 0===_c?void 0:_c,_d=_a.required,required=void 0!==_d&&_d,_e=_a.className,className=void 0===_e?"":_e,_f=_a.disabled,disabled=void 0!==_f&&_f,_g=_a.floating,floating=void 0!==_g&&_g,_h=_a.minimized,minimized=void 0!==_h&&_h,props=__rest(_a,["text","htmlFor","required","className","disabled","floating","minimized"]);return(0,jsx_runtime.jsxs)("label",__assign({className:"\n        juno-label \n        ".concat("\n  jn-text-theme-high\n  jn-text-base\n  jn-transform \n  jn-origin-top-left \n  jn-transition-all \n  jn-duration-100 \n  jn-ease-in-out\n  jn-z-10\n"," \n        ").concat(floating?"juno-label-floating \n  jn-absolute\n":"","\n        ").concat(minimized?"juno-label-minimized \n  jn-scale-75\n  -jn-translate-y-[0.4375rem]\n":"","\n        ").concat(disabled?"juno-label-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":""," \n        ").concat(className,"\n      "),htmlFor,ref:forwardedRef},props,{children:[text,required?(0,jsx_runtime.jsx)("span",{className:"\n          juno-required \n          ".concat("\n  jn-inline-block\n  jn-w-1\n  jn-h-1\n  jn-rounded-full\n  jn-align-top\n  jn-ml-1\n  jn-mt-2\n  jn-bg-theme-required\n","\n          ")}):""]}))}));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"A re-usable Label component",displayName:"Label",props:{text:{defaultValue:{value:""},description:"Pass a string of text to be rendered as contents. Required.",name:"text",required:!1,type:{name:"string"}},htmlFor:{defaultValue:{value:"undefined"},description:"An Id of an input element to associate the label with",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Required",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Label for a disabled input",name:"disabled",required:!1,type:{name:"boolean"}},floating:{defaultValue:{value:"false"},description:"Whether the label is floating",name:"floating",required:!1,type:{name:"boolean"}},minimized:{defaultValue:{value:"false"},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",name:"minimized",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.component.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.component.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextInput/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),Label=__webpack_require__("./src/components/Label/index.ts"),Icon=__webpack_require__("./src/components/Icon/index.ts"),FormHint_component=__webpack_require__("./src/components/FormHint/FormHint.component.tsx"),__assign=(__webpack_require__("./src/components/TextInput/textinput.scss"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TextInput=function(_a){var _b=_a.value,value=void 0===_b?"":_b,_c=_a.id,id=void 0===_c?"":_c,_d=_a.name,name=void 0===_d?void 0:_d,_e=_a.placeholder,placeholder=void 0===_e?"":_e,_f=_a.disabled,disabled=void 0!==_f&&_f,_g=_a.readOnly,readOnly=void 0!==_g&&_g,_h=_a.required,required=void 0!==_h&&_h,_j=_a.invalid,invalid=void 0!==_j&&_j,_k=_a.valid,valid=void 0!==_k&&_k,_l=_a.autoFocus,autoFocus=void 0!==_l&&_l,_m=_a.className,className=void 0===_m?"":_m,_o=_a.autoComplete,autoComplete=void 0===_o?"off":_o,_p=_a.helptext,helptext=void 0===_p?"":_p,_q=_a.successtext,successtext=void 0===_q?"":_q,_r=_a.errortext,errortext=void 0===_r?"":_r,_s=_a.onChange,onChange=void 0===_s?void 0:_s,_t=_a.onFocus,onFocus=void 0===_t?void 0:_t,_u=_a.onBlur,onBlur=void 0===_u?void 0:_u,_v=_a.type,type=void 0===_v?void 0:_v,_w=_a.label,label=void 0===_w?void 0:_w,_x=_a.width,width=void 0===_x?"full":_x,_y=_a.wrapperClassName,wrapperClassName=void 0===_y?"":_y,props=__rest(_a,["value","id","name","placeholder","disabled","readOnly","required","invalid","valid","autoFocus","className","autoComplete","helptext","successtext","errortext","onChange","onFocus","onBlur","type","label","width","wrapperClassName"]),isNotEmptyString=function(str){return!("string"==typeof str&&0===str.trim().length)},ref=(0,react.useRef)(null),_z=(0,react.useState)(""),val=_z[0],setValue=_z[1],_0=(0,react.useState)(!1),hasFocus=_0[0],setFocus=_0[1],_1=(0,react.useState)(!1),isInvalid=_1[0],setIsInvalid=_1[1],_2=(0,react.useState)(!1),isValid=_2[0],setIsValid=_2[1];(0,react.useEffect)((function(){document.hasFocus()&&ref.current.contains(document.activeElement)&&setFocus(!0)}),[]),(0,react.useEffect)((function(){setValue(value)}),[value]);var invalidated=(0,react.useMemo)((function(){return invalid||!(!errortext||!isNotEmptyString(errortext))}),[invalid,errortext]),validated=(0,react.useMemo)((function(){return valid||!(!successtext||!isNotEmptyString(successtext))}),[valid,successtext]);(0,react.useEffect)((function(){setIsInvalid(invalidated)}),[invalidated]),(0,react.useEffect)((function(){setIsValid(validated)}),[validated]);var theId=id||"juno-textinput-"+(0,react.useId)();return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("span",{className:"\n          juno-textinput-wrapper \n          ".concat("\n  jn-inline-block\n  jn-relative\n","\n          ").concat("auto"==width?"jn-inline-block":"jn-block","\n          ").concat("auto"==width?"jn-w-auto":"jn-w-full","\n          ").concat(wrapperClassName,"\n          "),children:[(0,jsx_runtime.jsx)("input",__assign({type,name,autoComplete,value:val,id:theId,ref,placeholder,disabled,readOnly,autoFocus,onChange:function(event){setValue(event.target.value),onChange&&onChange(event)},onFocus:function(event){setFocus(!0),onFocus&&onFocus(event)},onBlur:function(event){setFocus(!1),onBlur&&onBlur(event)},className:"juno-textinput \n            ".concat("\n  jn-bg-theme-textinput\n  jn-text-theme-textinput\n  jn-border\n  jn-text-base\n  jn-leading-4\n  jn-px-4\n  jn-h-textinput\n  jn-rounded-3px\n  focus:jn-outline-none\n  focus:jn-ring-2\n  focus:jn-ring-theme-focus\n  disabled:jn-opacity-50\n  autofill:jn-bg-theme-textinput-autofill\n  autofill:jn-text-theme-textinput-autofill\n  peer\n","\n            ").concat(label?"\n  jn-pt-[1.125rem] \n  jn-pb-1\n":"\n  jn-py-4\n","\n            ").concat(isInvalid?"juno-textinput-invalid \n  jn-border-theme-error\n":""," \n            ").concat(isValid?"juno-textinput-valid \n  jn-border-theme-success\n":"","  \n            ").concat(isValid||isInvalid?"":"\n  jn-border-theme-textinput-default\n"," \n            ").concat("auto"==width?"jn-w-auto":"jn-w-full","\n            ").concat(className,"\n          ")},props)),label&&label.length?(0,jsx_runtime.jsx)(Label.J,{text:label,htmlFor:theId,className:"".concat("\n  peer-autofill:jn-text-theme-textinput-autofill-label\n  jn-pointer-events-none\n  jn-top-2\n  jn-left-[0.9375rem]\n"),disabled,required,floating:!0,minimized:!!(placeholder||hasFocus||val&&isNotEmptyString(val))}):"",(0,jsx_runtime.jsx)((function(_a){var disabled=_a.disabled;return isValid||isInvalid?(0,jsx_runtime.jsxs)("div",{className:"juno-textinput-row-icon-container ".concat("\n  jn-inline-flex\n  jn-absolute\n  jn-top-[.4rem]\n  jn-right-3\n"," ").concat(disabled?"\n  jn-opacity-50\n":""),children:[isInvalid?(0,jsx_runtime.jsx)(Icon.I,{icon:"dangerous",color:"jn-text-theme-error"}):null,isValid?(0,jsx_runtime.jsx)(Icon.I,{icon:"checkCircle",color:"jn-text-theme-success"}):null]}):""}),{disabled})]}),errortext&&isNotEmptyString(errortext)?(0,jsx_runtime.jsx)(FormHint_component.m,{text:errortext,variant:"error",className:"".concat("\n  jn-mt-0\n")}):"",successtext&&isNotEmptyString(successtext)?(0,jsx_runtime.jsx)(FormHint_component.m,{text:successtext,variant:"success",className:"".concat("\n  jn-mt-0\n")}):"",helptext&&isNotEmptyString(helptext)?(0,jsx_runtime.jsx)(FormHint_component.m,{text:helptext,className:"".concat("\n  jn-mt-0\n")}):""]})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"A controlled Text Input.\nAlso covers email, telephone, password, url derivates.",displayName:"TextInput",props:{name:{defaultValue:{value:"undefined"},description:"Pass a name attribute",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Pass a value",name:"value",required:!1,type:{name:"string | number"}},id:{defaultValue:{value:""},description:"Pass an id",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"Pass a placeholder",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Render a disabled input",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Render a readonly input",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Whether the field is required",name:"required",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Whether the field is invalid",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the field is valid",name:"valid",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Whether the field receives autofocus",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a classname. The class name is applied to the internal input element.",name:"className",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"Pass a valid autocomplete value. We do not police validity.",name:"autoComplete",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"undefined"},description:"Pass a change handler",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:{value:"undefined"},description:"Pass a focus handler",name:"onFocus",required:!1,type:{name:"FocusEventHandler<EventTarget>"}},onBlur:{defaultValue:{value:"undefined"},description:"Pass a blur handler",name:"onBlur",required:!1,type:{name:"FocusEventHandler<EventTarget>"}},type:{defaultValue:{value:"undefined"},description:'Specify the type attribute. Defaults to an input with no type attribute, which in turn will be treateas as type="text" by browsers.',name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},label:{defaultValue:{value:"undefined"},description:"The label of the input",name:"label",required:!1,type:{name:"string"}},helptext:{defaultValue:{value:""},description:"A helptext to render to explain meaning and significance of the TextInput",name:"helptext",required:!1,type:{name:"string | Element"}},successtext:{defaultValue:{value:""},description:"A text to render when the TextInput was successfully validated",name:"successtext",required:!1,type:{name:"string | Element"}},errortext:{defaultValue:{value:""},description:"A text to render when the TextInput has an error or could not be validated",name:"errortext",required:!1,type:{name:"string | Element"}},width:{defaultValue:{value:"full"},description:"The width of the text input. Either 'full' (default) or 'auto'.",name:"width",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"auto"'}]}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",name:"wrapperClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextInput/TextInput.component.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/TextInput/TextInput.component.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextInput/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Autofocus:()=>Autofocus,Default:()=>Default,Disabled:()=>Disabled,Email:()=>Email,Invalid:()=>Invalid,Number:()=>Number,Password:()=>Password,ReadOnly:()=>ReadOnly,RequiredWithLabel:()=>RequiredWithLabel,Tel:()=>Tel,Url:()=>Url,Valid:()=>Valid,WithErrorText:()=>WithErrorText,WithHelpText:()=>WithHelpText,WithHelpTextAsNode:()=>WithHelpTextAsNode,WithLabel:()=>WithLabel,WithSuccessText:()=>WithSuccessText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/TextInput",component:__webpack_require__("./src/components/TextInput/index.ts").k,argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},value:{control:{type:"text"}}}};var Default={args:{}},WithLabel={args:{label:"Text Input"}},RequiredWithLabel={args:{label:"Required Text Input",required:!0}},Invalid={args:{invalid:!0}},Valid={args:{valid:!0}},Autofocus={args:{autoFocus:!0}},Disabled={args:{disabled:!0}},ReadOnly={args:{readOnly:!0}},Email={args:{type:"email"}},Tel={args:{type:"tel"}},Url={args:{type:"url"}},Number={args:{type:"number"}},Password={args:{type:"password"}},WithHelpText={args:{helptext:"This is an explanatory text referring to the input"}},WithHelpTextAsNode={args:{helptext:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:["This is a helptext with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",children:"Link"})]})}},WithSuccessText={args:{successtext:"This field is a great success!"}},WithErrorText={args:{errortext:"This field has an error"}};const __namedExportsOrder=["Default","WithLabel","RequiredWithLabel","Invalid","Valid","Autofocus","Disabled","ReadOnly","Email","Tel","Url","Number","Password","WithHelpText","WithHelpTextAsNode","WithSuccessText","WithErrorText"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Text Input"\n  }\n}',...WithLabel.parameters?.docs?.source}}},RequiredWithLabel.parameters={...RequiredWithLabel.parameters,docs:{...RequiredWithLabel.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Required Text Input",\n    required: true\n  }\n}',...RequiredWithLabel.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true\n  }\n}",...Invalid.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:"{\n  args: {\n    valid: true\n  }\n}",...Valid.parameters?.docs?.source}}},Autofocus.parameters={...Autofocus.parameters,docs:{...Autofocus.parameters?.docs,source:{originalSource:"{\n  args: {\n    autoFocus: true\n  }\n}",...Autofocus.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    readOnly: true\n  }\n}",...ReadOnly.parameters?.docs?.source}}},Email.parameters={...Email.parameters,docs:{...Email.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "email"\n  }\n}',...Email.parameters?.docs?.source}}},Tel.parameters={...Tel.parameters,docs:{...Tel.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "tel"\n  }\n}',...Tel.parameters?.docs?.source}}},Url.parameters={...Url.parameters,docs:{...Url.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "url"\n  }\n}',...Url.parameters?.docs?.source}}},Number.parameters={...Number.parameters,docs:{...Number.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "number"\n  }\n}',...Number.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "password"\n  }\n}',...Password.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:'{\n  args: {\n    helptext: "This is an explanatory text referring to the input"\n  }\n}',...WithHelpText.parameters?.docs?.source}}},WithHelpTextAsNode.parameters={...WithHelpTextAsNode.parameters,docs:{...WithHelpTextAsNode.parameters?.docs,source:{originalSource:'{\n  args: {\n    helptext: <>\n        This is a helptext with a <a href="#">Link</a>\n      </>\n  }\n}',...WithHelpTextAsNode.parameters?.docs?.source}}},WithSuccessText.parameters={...WithSuccessText.parameters,docs:{...WithSuccessText.parameters?.docs,source:{originalSource:'{\n  args: {\n    successtext: "This field is a great success!"\n  }\n}',...WithSuccessText.parameters?.docs?.source}}},WithErrorText.parameters={...WithErrorText.parameters,docs:{...WithErrorText.parameters?.docs,source:{originalSource:'{\n  args: {\n    errortext: "This field has an error"\n  }\n}',...WithErrorText.parameters?.docs?.source}}}},"./src/components/TextInput/textinput.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-textinput:-webkit-autofill+.juno-label{color:var(--color-textinput-autofill-label)}\n.juno-textinput:autofill+.juno-label{color:var(--color-textinput-autofill-label)}","",{version:3,sources:["webpack://./src/components/TextInput/textinput.scss"],names:[],mappings:"AAGA,6CACE,2CAAA;AADF,qCACE,2CAAA",sourcesContent:["// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n// SPDX-License-Identifier: Apache-2.0\n\n.juno-textinput:autofill + .juno-label {\n  color: var(--color-textinput-autofill-label);\n}"],sourceRoot:""}])}}]);