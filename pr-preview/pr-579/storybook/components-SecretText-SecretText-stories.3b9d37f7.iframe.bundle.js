"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8147],{"./src/deprecated_js/FormHint/FormHint.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const variantStyles=variant=>{switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=_ref=>{let{children=null,text="",variant="help",className,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n        juno-form-hint\n        juno-form-hint-${variant}\n        \n  jn-text-xs\n  jn-mt-1\n\n        ${variantStyles(variant)}\n        ${className}\n      `},props),children||text)};FormHint.displayName="FormHint Js",FormHint.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["help","error","success"]),className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint Js",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}}},"./src/deprecated_js/Label/Label.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,forwardedRef)=>{let{text="",htmlFor,required=!1,className="",disabled=!1,floating=!1,minimized=!1,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:`\n\t\t\t\tjuno-label \n\t\t\t\t\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-transform \n\tjn-origin-top-left \n\tjn-transition-all \n\tjn-duration-100 \n\tjn-ease-in-out\n \n\t\t\t\t${floating?"juno-label-floating \n\tjn-absolute\n":""}\n\t\t\t\t${minimized?"juno-label-minimized \n\tjn-scale-75\n\t-jn-translate-y-[0.4375rem]\n":""}\n\t\t\t\t${disabled?"juno-label-disabled \n\tjn-opacity-50\n\tjn-cursor-not-allowed\n":""} \n\t\t\t\t${className}\n\t\t\t`,htmlFor,ref:forwardedRef},props),text,required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\t\t\t\t\tjuno-required \n\t\t\t\t\t\n\tjn-inline-block\n\tjn-w-1\n\tjn-h-1\n\tjn-rounded-full\n\tjn-align-top\n\tjn-ml-1\n\tjn-mt-2\n\tjn-bg-theme-required\n\n\t\t\t\t\t"}):"")}));Label.displayName="Label (JS)",Label.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,htmlFor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,floating:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,minimized:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool},Label.__docgenInfo={description:"A re-usable Label component",methods:[],displayName:"Label (JS)",props:{text:{defaultValue:{value:'""',computed:!1},description:"Pass a string of text to be rendered as contents. Required.",type:{name:"string"},required:!1},htmlFor:{defaultValue:{value:"undefined",computed:!0},description:"An Id of an input element to associate the label with",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Label for a disabled input",type:{name:"bool"},required:!1},floating:{defaultValue:{value:"false",computed:!1},description:"Whether the label is floating",type:{name:"bool"},required:!1},minimized:{defaultValue:{value:"false",computed:!1},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",type:{name:"bool"},required:!1}}}},"./src/deprecated_js/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Label/Label.component.js")},"./src/deprecated_js/Stack/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Stack/Stack.component.js")},"./src/components/SecretText/SecretText.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,NoClearNoToggleNoPaste:()=>NoClearNoToggleNoPaste,ReadOnly:()=>ReadOnly,RequiredWithLabel:()=>RequiredWithLabel,WithLabel:()=>WithLabel,WithValueWithLabel:()=>WithValueWithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SecretText_stories,revealWithValue:()=>revealWithValue,withValue:()=>withValue});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Textarea=__webpack_require__("./src/deprecated_js/Textarea/index.js"),ButtonRow=__webpack_require__("./src/deprecated_js/ButtonRow/index.js"),Button=__webpack_require__("./src/deprecated_js/Button/index.js"),FormHint=__webpack_require__("./src/deprecated_js/FormHint/index.js"),Stack=__webpack_require__("./src/deprecated_js/Stack/index.js"),Label=__webpack_require__("./src/deprecated_js/Label/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const actionStyles="\n  jn-h-[1.875rem]\n",SecretText=_ref=>{let{autoComplete="off",className="",clear=!0,copy=!0,copyConfirmtext="Secret copied to clipboard.",disableClear=!1,disableCopy=!1,disabled=!1,disablePaste=!1,disableToggle=!1,errortext,helptext,id="",onBlur,onChange,onClear,onCopy,onFocus,onHide,onPaste,onReveal,onToggle,label,paste=!0,placeholder="",readOnly=!1,required=!1,reveal=!1,successtext,toggle=!0,valid=!1,invalid,value="",wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),theId=id||"juno-secrettext-"+(0,react.useId)(),[isRevealed,setIsRevealed]=(0,react.useState)(!1),[val,setVal]=(0,react.useState)(""),[isCopied,setIsCopied]=(0,react.useState)(!1),[hasFocus,setHasFocus]=(0,react.useState)(!1),timeoutRef=react.useRef(null);(0,react.useEffect)((()=>{setIsRevealed(reveal)}),[reveal]),(0,react.useEffect)((()=>{setVal(value)}),[value]);return react.createElement("div",{className:`\n        juno-secret-wrapper  \n        ${wrapperClassName}  \n      `},react.createElement("div",{className:"\n          juno-secret-wrapper-inner\n          \n  jn-relative\n \n        "},label&&isNotEmptyString(label)?react.createElement(Label.J,{className:"\n  jn-pointer-events-none\n  jn-top-2\n  jn-left-[0.9375rem]\n  jn-pr-4\n  jn-bg-theme-textinput\n  jn-z-20\n",htmlFor:theId,text:label,disabled,required,floating:!0,minimized:!!(placeholder||hasFocus||val&&val.length)}):"",isCopied||!isRevealed?react.createElement("div",{className:"juno-secret-cover \n  jn-absolute\n  jn-top-0\n  jn-left-0\n  jn-right-0\n  jn-bottom-0\n  jn-cursor-not-allowed\n  jn-backdrop-blur-[4px]\n  jn-bg-theme-background-lvl-2/30\n  jn-z-10\n  jn-flex\n  jn-justify-center\n  jn-items-center\n "},isCopied?react.createElement("span",{className:"juno-secret-copyconfirmmessage \n  jn-bg-theme-background-lvl-1\n  jn-font-bold\n  jn-px-3\n  jn-py-1\n  jn-rounded\n"},copyConfirmtext):""):"",react.createElement(Textarea.T,_extends({autoComplete,className:`juno-secret-textarea jn-font-mono \n  jn-break-all\n  jn-min-h-[7.5rem]\n ${className}`,disabled,id:theId,invalid,name,onBlur:event=>{setHasFocus(!1),onBlur&&onBlur(event)},onChange:event=>{setVal(event.target.value),onChange&&onChange(event)},onFocus:event=>{setHasFocus(!0),onFocus&&onFocus(event)},placeholder,readOnly,valid,value:val},props))),react.createElement(Stack.B,null,react.createElement("div",{className:"jn-grow"},errortext&&isNotEmptyString(errortext)?react.createElement(FormHint.m,{text:errortext,variant:"error",className:""}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint.m,{text:successtext,variant:"success",className:""}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint.m,{text:helptext,className:""}):""),react.createElement(ButtonRow.z,{className:"jn-secret-actions jn-justify-self-end jn-mt-2"},clear&&!readOnly?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{setVal(""),onClear&&onClear()},disabled:!(!disabled&&!disableClear&&val.length)||null,title:"Clear"},"Clear"):"",toggle?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{isRevealed?onHide&&onHide():onReveal&&onReveal(),setIsRevealed(!isRevealed),onToggle&&onToggle()},title:isRevealed?"Hide":"Reveal",disabled:!(!disabled&&!disableToggle)||null},isRevealed?"Hide":"Reveal"):"",copy?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{navigator.clipboard.writeText(val||""),setIsCopied(!0),clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>setIsCopied(!1)),1e3),onCopy&&onCopy(val)},disabled:!(!disabled&&!disableCopy&&val.length)||null,title:"Copy"},"Copy"):"",paste&&!readOnly?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{try{navigator.clipboard.readText().then((clipboardText=>{setVal(clipboardText),onPaste&&onPaste(clipboardText)}))}catch(_error){console.warn("Failed to read clipboard.")}},title:"Paste",disabled:!(!disabled&&!disablePaste)||null},"Paste"):"")))};SecretText.propTypes={autoComplete:prop_types_default().string,className:prop_types_default().string,clear:prop_types_default().bool,copy:prop_types_default().bool,copyConfirmtext:prop_types_default().string,disableClear:prop_types_default().bool,disableCopy:prop_types_default().bool,disabled:prop_types_default().bool,disablePaste:prop_types_default().bool,disableToggle:prop_types_default().bool,errortext:prop_types_default().string,helptext:prop_types_default().string,id:prop_types_default().string,invalid:prop_types_default().bool,label:prop_types_default().string,name:prop_types_default().string,onBlur:prop_types_default().func,onChange:prop_types_default().func,onClear:prop_types_default().func,onCopy:prop_types_default().func,onFocus:prop_types_default().func,onHide:prop_types_default().func,onPaste:prop_types_default().func,onReveal:prop_types_default().func,onToggle:prop_types_default().func,paste:prop_types_default().bool,placeholder:prop_types_default().string,readOnly:prop_types_default().bool,required:prop_types_default().bool,reveal:prop_types_default().bool,successtext:prop_types_default().string,toggle:prop_types_default().bool,valid:prop_types_default().bool,value:prop_types_default().string,wrapperClassName:prop_types_default().string},SecretText.__docgenInfo={description:"A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed.",methods:[],displayName:"SecretText",props:{autoComplete:{defaultValue:{value:'"off"',computed:!1},description:"Whether the secret field should autocomplete.",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the Secret input field.",type:{name:"string"},required:!1},clear:{defaultValue:{value:"true",computed:!1},description:"Whether the Clear button is rendered.",type:{name:"bool"},required:!1},copy:{defaultValue:{value:"true",computed:!1},description:"Whether the Copy button is rendered.",type:{name:"bool"},required:!1},copyConfirmtext:{defaultValue:{value:'"Secret copied to clipboard."',computed:!1},description:"A small text to display for a second to confirm the secret's content was copied to the clipboard.",type:{name:"string"},required:!1},disableClear:{defaultValue:{value:"false",computed:!1},description:"Disable the Clear button",type:{name:"bool"},required:!1},disableCopy:{defaultValue:{value:"false",computed:!1},description:"Disable the Copy button",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Secret's input is disabled.",type:{name:"bool"},required:!1},disablePaste:{defaultValue:{value:"false",computed:!1},description:"Disable the Paste button",type:{name:"bool"},required:!1},disableToggle:{defaultValue:{value:"false",computed:!1},description:"Disable the Hide/Reveal button",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:"undefined",computed:!0},description:"A small text to display information regarding any errors in the context of the Secret.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:"undefined",computed:!0},description:"A small text to display giving more information and context about the Secret.",type:{name:"string"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id",type:{name:"string"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the Secret's input area looses focus.",type:{name:"func"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the Secret's content changes.",type:{name:"func"},required:!1},onClear:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user clears the Secret's content using the Clear button.",type:{name:"func"},required:!1},onCopy:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user copies the Secret's content to the clipboard.",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the SecretText textarea receives focus",type:{name:"func"},required:!1},onHide:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user hides the Secret's content.",type:{name:"func"},required:!1},onPaste:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user pastes text from the clipboard into the SecretText.",type:{name:"func"},required:!1},onReveal:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user reveals the Secret's content.",type:{name:"func"},required:!1},onToggle:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden.",type:{name:"func"},required:!1},paste:{defaultValue:{value:"true",computed:!1},description:"Whether a button to paste text content even in hidden mode is rendered.",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Pass a placeholder to the SecretText's textarea",type:{name:"string"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Whether the SecretText content is read only, i.e. can not be edited..",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.",type:{name:"bool"},required:!1},reveal:{defaultValue:{value:"false",computed:!1},description:"Whether the secret's content is revealed / legible.",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:"undefined",computed:!0},description:"A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.",type:{name:"string"},required:!1},toggle:{defaultValue:{value:"true",computed:!1},description:"Whether a button to toggle visibility of the SecretText's content should be rendered.",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Secret's content was successfully validated.",type:{name:"bool"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"The value of the SecretText, i.e. the Secret's content.",type:{name:"string"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a className to the outer wrapper element",type:{name:"string"},required:!1},invalid:{description:"Whether the Secret's content is invalid.",type:{name:"bool"},required:!1},label:{description:"A label to display above the SecretText's textarea.",type:{name:"string"},required:!1},name:{description:"The name of the SecretText's textarea.",type:{name:"string"},required:!1}}};const SecretText_stories={title:"Forms/SecretText",component:SecretText,argTypes:{}},Template=_ref=>{let{...args}=_ref;return react.createElement(SecretText,args)},Default={render:Template,args:{}},withValue={render:Template,args:{value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},revealWithValue={render:Template,args:{reveal:!0,value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"},parameters:{docs:{description:{story:"Set `reveal` to `true` to show the SecretText's content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."}}}},WithLabel={render:Template,args:{label:"Secret things"}},WithValueWithLabel={render:Template,args:{label:"Secret things",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},RequiredWithLabel={render:Template,args:{required:!0,label:"Secret things"}},NoClearNoToggleNoPaste={render:Template,args:{value:"It's a secret.",clear:!1,toggle:!1,paste:!1}},Disabled={render:Template,args:{disabled:!0}},ReadOnly={parameters:{docs:{description:{story:"Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."}}},render:Template,args:{readOnly:!0,disablePaste:!0,label:"Read Only Secret",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",helptext:"This secret text can not be edited."}},__namedExportsOrder=["Default","withValue","revealWithValue","WithLabel","WithValueWithLabel","RequiredWithLabel","NoClearNoToggleNoPaste","Disabled","ReadOnly"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {}\n}",...Default.parameters?.docs?.source}}},withValue.parameters={...withValue.parameters,docs:{...withValue.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"\n  }\n}',...withValue.parameters?.docs?.source}}},revealWithValue.parameters={...revealWithValue.parameters,docs:{...revealWithValue.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    reveal: true,\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set `reveal` to `true` to show the SecretText\'s content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."\n      }\n    }\n  }\n}',...revealWithValue.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Secret things"\n  }\n}',...WithLabel.parameters?.docs?.source}}},WithValueWithLabel.parameters={...WithValueWithLabel.parameters,docs:{...WithValueWithLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Secret things",\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"\n  }\n}',...WithValueWithLabel.parameters?.docs?.source}}},RequiredWithLabel.parameters={...RequiredWithLabel.parameters,docs:{...RequiredWithLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    required: true,\n    label: "Secret things"\n  }\n}',...RequiredWithLabel.parameters?.docs?.source}}},NoClearNoToggleNoPaste.parameters={...NoClearNoToggleNoPaste.parameters,docs:{...NoClearNoToggleNoPaste.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "It\'s a secret.",\n    clear: false,\n    toggle: false,\n    paste: false\n  }\n}',...NoClearNoToggleNoPaste.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."\n      }\n    }\n  },\n  render: Template,\n  args: {\n    readOnly: true,\n    disablePaste: true,\n    label: "Read Only Secret",\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",\n    helptext: "This secret text can not be edited."\n  }\n}',...ReadOnly.parameters?.docs?.source}}}}}]);