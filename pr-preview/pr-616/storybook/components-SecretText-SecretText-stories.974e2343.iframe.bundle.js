"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8147],{"./src/deprecated_js/FormHint/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_FormHint_component__WEBPACK_IMPORTED_MODULE_0__.m});var _FormHint_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/FormHint/FormHint.component.js")},"./src/components/SecretText/SecretText.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,NoClearNoToggleNoPaste:()=>NoClearNoToggleNoPaste,ReadOnly:()=>ReadOnly,RequiredWithLabel:()=>RequiredWithLabel,WithLabel:()=>WithLabel,WithValueWithLabel:()=>WithValueWithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SecretText_stories,revealWithValue:()=>revealWithValue,withValue:()=>withValue});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Textarea=__webpack_require__("./src/deprecated_js/Textarea/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const baseStack=(direction,gap,wrap)=>`\n      ${"vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}\n      ${wrap&&"jn-flex-wrap"}\n      ${(gap=>{switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}})(gap)}\n    `,alignItems=alignment=>{switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=distribution=>{switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=_ref=>{let{direction="horizontal",gap="0",alignment="stretch",distribution="start",wrap=!1,className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-stack ${baseStack(direction,gap,wrap)} ${alignItems(alignment)} ${justifyItems(distribution)} ${className||""}`},props),children)};function ButtonRow_component_extends(){return ButtonRow_component_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ButtonRow_component_extends.apply(null,arguments)}Stack.propTypes={children:prop_types_default().node,className:prop_types_default().string,direction:prop_types_default().oneOf(["horizontal","vertical"]),alignment:prop_types_default().oneOf(["start","end","center","baseline","stretch"]),distribution:prop_types_default().oneOf(["start","end","center","between","around","evenly"]),wrap:prop_types_default().bool,gap:prop_types_default().oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])},Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",methods:[],displayName:"Stack",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},description:"Stack items horizontally or vertically",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]},required:!1},gap:{defaultValue:{value:'"0"',computed:!1},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",type:{name:"enum",value:[{value:'"0"',computed:!1},{value:'"px"',computed:!1},{value:'"0.5"',computed:!1},{value:'"1"',computed:!1},{value:'"1.5"',computed:!1},{value:'"2"',computed:!1},{value:'"2.5"',computed:!1},{value:'"3"',computed:!1},{value:'"3.5"',computed:!1},{value:'"4"',computed:!1},{value:'"5"',computed:!1},{value:'"6"',computed:!1},{value:'"7"',computed:!1},{value:'"8"',computed:!1},{value:'"9"',computed:!1},{value:'"10"',computed:!1},{value:'"11"',computed:!1},{value:'"12"',computed:!1},{value:'"14"',computed:!1},{value:'"16"',computed:!1},{value:'"20"',computed:!1},{value:'"24"',computed:!1},{value:'"28"',computed:!1},{value:'"32"',computed:!1},{value:'"36"',computed:!1},{value:'"40"',computed:!1},{value:'"44"',computed:!1},{value:'"48"',computed:!1},{value:'"52"',computed:!1},{value:'"56"',computed:!1},{value:'"60"',computed:!1},{value:'"64"',computed:!1},{value:'"72"',computed:!1},{value:'"80"',computed:!1},{value:'"96"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"stretch"',computed:!1},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"baseline"',computed:!1},{value:'"stretch"',computed:!1}]},required:!1},distribution:{defaultValue:{value:'"start"',computed:!1},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"between"',computed:!1},{value:'"around"',computed:!1},{value:'"evenly"',computed:!1}]},required:!1},wrap:{defaultValue:{value:"false",computed:!1},description:"Specify whether the Stack children should be allowed to wrap or not",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass css class names",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const ButtonRow=_ref=>{let{children=null,className="",...props}=_ref;return react.createElement(Stack,ButtonRow_component_extends({gap:"2",distribution:"end",className:`juno-button-row ${className}`},props),children)};ButtonRow.propTypes={className:prop_types_default().string,children:prop_types_default().node},ButtonRow.__docgenInfo={description:"A container to hold one or multiple buttons and space and align them.",methods:[],displayName:"ButtonRow",props:{children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the ButtonRow",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a class to the ButtonRow",type:{name:"string"},required:!1}}};var Button=__webpack_require__("./src/deprecated_js/Button/index.js"),FormHint=__webpack_require__("./src/deprecated_js/FormHint/index.js"),Label=__webpack_require__("./src/deprecated_js/Label/index.js");function SecretText_component_extends(){return SecretText_component_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},SecretText_component_extends.apply(null,arguments)}const actionStyles="\n  jn-h-[1.875rem]\n",SecretText=_ref=>{let{autoComplete="off",className="",clear=!0,copy=!0,copyConfirmtext="Secret copied to clipboard.",disableClear=!1,disableCopy=!1,disabled=!1,disablePaste=!1,disableToggle=!1,errortext,helptext,id="",onBlur,onChange,onClear,onCopy,onFocus,onHide,onPaste,onReveal,onToggle,label,paste=!0,placeholder="",readOnly=!1,required=!1,reveal=!1,successtext,toggle=!0,valid=!1,invalid,value="",wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),theId=id||"juno-secrettext-"+(0,react.useId)(),[isRevealed,setIsRevealed]=(0,react.useState)(!1),[val,setVal]=(0,react.useState)(""),[isCopied,setIsCopied]=(0,react.useState)(!1),[hasFocus,setHasFocus]=(0,react.useState)(!1),timeoutRef=react.useRef(null);(0,react.useEffect)((()=>{setIsRevealed(reveal)}),[reveal]),(0,react.useEffect)((()=>{setVal(value)}),[value]);return react.createElement("div",{className:`\n        juno-secret-wrapper  \n        ${wrapperClassName}  \n      `},react.createElement("div",{className:"\n          juno-secret-wrapper-inner\n          \n  jn-relative\n \n        "},label&&isNotEmptyString(label)?react.createElement(Label.J,{className:"\n  jn-pointer-events-none\n  jn-top-2\n  jn-left-[0.9375rem]\n  jn-pr-4\n  jn-bg-theme-textinput\n  jn-z-20\n",htmlFor:theId,text:label,disabled,required,floating:!0,minimized:!!(placeholder||hasFocus||val&&val.length)}):"",isCopied||!isRevealed?react.createElement("div",{className:"juno-secret-cover \n  jn-absolute\n  jn-top-0\n  jn-left-0\n  jn-right-0\n  jn-bottom-0\n  jn-cursor-not-allowed\n  jn-backdrop-blur-[4px]\n  jn-bg-theme-background-lvl-2/30\n  jn-z-10\n  jn-flex\n  jn-justify-center\n  jn-items-center\n "},isCopied?react.createElement("span",{className:"juno-secret-copyconfirmmessage \n  jn-bg-theme-background-lvl-1\n  jn-font-bold\n  jn-px-3\n  jn-py-1\n  jn-rounded\n"},copyConfirmtext):""):"",react.createElement(Textarea.T,SecretText_component_extends({autoComplete,className:`juno-secret-textarea jn-font-mono \n  jn-break-all\n  jn-min-h-[7.5rem]\n ${className}`,disabled,id:theId,invalid,name,onBlur:event=>{setHasFocus(!1),onBlur&&onBlur(event)},onChange:event=>{setVal(event.target.value),onChange&&onChange(event)},onFocus:event=>{setHasFocus(!0),onFocus&&onFocus(event)},placeholder,readOnly,valid,value:val},props))),react.createElement(Stack,null,react.createElement("div",{className:"jn-grow"},errortext&&isNotEmptyString(errortext)?react.createElement(FormHint.m,{text:errortext,variant:"error",className:""}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint.m,{text:successtext,variant:"success",className:""}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint.m,{text:helptext,className:""}):""),react.createElement(ButtonRow,{className:"jn-secret-actions jn-justify-self-end jn-mt-2"},clear&&!readOnly?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{setVal(""),onClear&&onClear()},disabled:!(!disabled&&!disableClear&&val.length)||null,title:"Clear"},"Clear"):"",toggle?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{isRevealed?onHide&&onHide():onReveal&&onReveal(),setIsRevealed(!isRevealed),onToggle&&onToggle()},title:isRevealed?"Hide":"Reveal",disabled:!(!disabled&&!disableToggle)||null},isRevealed?"Hide":"Reveal"):"",copy?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{navigator.clipboard.writeText(val||""),setIsCopied(!0),clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>setIsCopied(!1)),1e3),onCopy&&onCopy(val)},disabled:!(!disabled&&!disableCopy&&val.length)||null,title:"Copy"},"Copy"):"",paste&&!readOnly?react.createElement(Button.$,{size:"small",className:`${actionStyles}`,onClick:()=>{try{navigator.clipboard.readText().then((clipboardText=>{setVal(clipboardText),onPaste&&onPaste(clipboardText)}))}catch(_error){console.warn("Failed to read clipboard.")}},title:"Paste",disabled:!(!disabled&&!disablePaste)||null},"Paste"):"")))};SecretText.propTypes={autoComplete:prop_types_default().string,className:prop_types_default().string,clear:prop_types_default().bool,copy:prop_types_default().bool,copyConfirmtext:prop_types_default().string,disableClear:prop_types_default().bool,disableCopy:prop_types_default().bool,disabled:prop_types_default().bool,disablePaste:prop_types_default().bool,disableToggle:prop_types_default().bool,errortext:prop_types_default().string,helptext:prop_types_default().string,id:prop_types_default().string,invalid:prop_types_default().bool,label:prop_types_default().string,name:prop_types_default().string,onBlur:prop_types_default().func,onChange:prop_types_default().func,onClear:prop_types_default().func,onCopy:prop_types_default().func,onFocus:prop_types_default().func,onHide:prop_types_default().func,onPaste:prop_types_default().func,onReveal:prop_types_default().func,onToggle:prop_types_default().func,paste:prop_types_default().bool,placeholder:prop_types_default().string,readOnly:prop_types_default().bool,required:prop_types_default().bool,reveal:prop_types_default().bool,successtext:prop_types_default().string,toggle:prop_types_default().bool,valid:prop_types_default().bool,value:prop_types_default().string,wrapperClassName:prop_types_default().string},SecretText.__docgenInfo={description:"A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed.",methods:[],displayName:"SecretText",props:{autoComplete:{defaultValue:{value:'"off"',computed:!1},description:"Whether the secret field should autocomplete.",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the Secret input field.",type:{name:"string"},required:!1},clear:{defaultValue:{value:"true",computed:!1},description:"Whether the Clear button is rendered.",type:{name:"bool"},required:!1},copy:{defaultValue:{value:"true",computed:!1},description:"Whether the Copy button is rendered.",type:{name:"bool"},required:!1},copyConfirmtext:{defaultValue:{value:'"Secret copied to clipboard."',computed:!1},description:"A small text to display for a second to confirm the secret's content was copied to the clipboard.",type:{name:"string"},required:!1},disableClear:{defaultValue:{value:"false",computed:!1},description:"Disable the Clear button",type:{name:"bool"},required:!1},disableCopy:{defaultValue:{value:"false",computed:!1},description:"Disable the Copy button",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Secret's input is disabled.",type:{name:"bool"},required:!1},disablePaste:{defaultValue:{value:"false",computed:!1},description:"Disable the Paste button",type:{name:"bool"},required:!1},disableToggle:{defaultValue:{value:"false",computed:!1},description:"Disable the Hide/Reveal button",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:"undefined",computed:!0},description:"A small text to display information regarding any errors in the context of the Secret.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:"undefined",computed:!0},description:"A small text to display giving more information and context about the Secret.",type:{name:"string"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id",type:{name:"string"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the Secret's input area looses focus.",type:{name:"func"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the Secret's content changes.",type:{name:"func"},required:!1},onClear:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user clears the Secret's content using the Clear button.",type:{name:"func"},required:!1},onCopy:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user copies the Secret's content to the clipboard.",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the SecretText textarea receives focus",type:{name:"func"},required:!1},onHide:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user hides the Secret's content.",type:{name:"func"},required:!1},onPaste:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user pastes text from the clipboard into the SecretText.",type:{name:"func"},required:!1},onReveal:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the user reveals the Secret's content.",type:{name:"func"},required:!1},onToggle:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden.",type:{name:"func"},required:!1},paste:{defaultValue:{value:"true",computed:!1},description:"Whether a button to paste text content even in hidden mode is rendered.",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Pass a placeholder to the SecretText's textarea",type:{name:"string"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Whether the SecretText content is read only, i.e. can not be edited..",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.",type:{name:"bool"},required:!1},reveal:{defaultValue:{value:"false",computed:!1},description:"Whether the secret's content is revealed / legible.",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:"undefined",computed:!0},description:"A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.",type:{name:"string"},required:!1},toggle:{defaultValue:{value:"true",computed:!1},description:"Whether a button to toggle visibility of the SecretText's content should be rendered.",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Secret's content was successfully validated.",type:{name:"bool"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"The value of the SecretText, i.e. the Secret's content.",type:{name:"string"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a className to the outer wrapper element",type:{name:"string"},required:!1},invalid:{description:"Whether the Secret's content is invalid.",type:{name:"bool"},required:!1},label:{description:"A label to display above the SecretText's textarea.",type:{name:"string"},required:!1},name:{description:"The name of the SecretText's textarea.",type:{name:"string"},required:!1}}};const SecretText_stories={title:"Forms/SecretText",component:SecretText,argTypes:{}},Template=_ref=>{let{...args}=_ref;return react.createElement(SecretText,args)},Default={render:Template,args:{}},withValue={render:Template,args:{value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},revealWithValue={render:Template,args:{reveal:!0,value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"},parameters:{docs:{description:{story:"Set `reveal` to `true` to show the SecretText's content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."}}}},WithLabel={render:Template,args:{label:"Secret things"}},WithValueWithLabel={render:Template,args:{label:"Secret things",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},RequiredWithLabel={render:Template,args:{required:!0,label:"Secret things"}},NoClearNoToggleNoPaste={render:Template,args:{value:"It's a secret.",clear:!1,toggle:!1,paste:!1}},Disabled={render:Template,args:{disabled:!0}},ReadOnly={parameters:{docs:{description:{story:"Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."}}},render:Template,args:{readOnly:!0,disablePaste:!0,label:"Read Only Secret",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",helptext:"This secret text can not be edited."}},__namedExportsOrder=["Default","withValue","revealWithValue","WithLabel","WithValueWithLabel","RequiredWithLabel","NoClearNoToggleNoPaste","Disabled","ReadOnly"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {}\n}",...Default.parameters?.docs?.source}}},withValue.parameters={...withValue.parameters,docs:{...withValue.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"\n  }\n}',...withValue.parameters?.docs?.source}}},revealWithValue.parameters={...revealWithValue.parameters,docs:{...revealWithValue.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    reveal: true,\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set `reveal` to `true` to show the SecretText\'s content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."\n      }\n    }\n  }\n}',...revealWithValue.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Secret things"\n  }\n}',...WithLabel.parameters?.docs?.source}}},WithValueWithLabel.parameters={...WithValueWithLabel.parameters,docs:{...WithValueWithLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Secret things",\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"\n  }\n}',...WithValueWithLabel.parameters?.docs?.source}}},RequiredWithLabel.parameters={...RequiredWithLabel.parameters,docs:{...RequiredWithLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    required: true,\n    label: "Secret things"\n  }\n}',...RequiredWithLabel.parameters?.docs?.source}}},NoClearNoToggleNoPaste.parameters={...NoClearNoToggleNoPaste.parameters,docs:{...NoClearNoToggleNoPaste.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "It\'s a secret.",\n    clear: false,\n    toggle: false,\n    paste: false\n  }\n}',...NoClearNoToggleNoPaste.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."\n      }\n    }\n  },\n  render: Template,\n  args: {\n    readOnly: true,\n    disablePaste: true,\n    label: "Read Only Secret",\n    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",\n    helptext: "This secret text can not be edited."\n  }\n}',...ReadOnly.parameters?.docs?.source}}}}}]);