"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2755],{"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.js")},"./src/components/Toast/Toast.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,Error:()=>Error,Success:()=>Success,ToastWithLongText:()=>ToastWithLongText,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,autoDismiss:()=>autoDismiss,default:()=>Toast_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Icon=__webpack_require__("./src/components/Icon/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Toast=_ref=>{let{variant="info",children=null,text="",autoDismiss=!1,autoDismissTimeout=1e4,onDismiss,className="",...props}=_ref;const[visible,setVisible]=(0,react.useState)(!0),timeoutRef=react.useRef(null);react.useEffect((()=>()=>clearTimeout(timeoutRef.current)),[]),(0,react.useEffect)((()=>{autoDismiss&&(clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>hideMessage()),autoDismissTimeout))}),[autoDismiss,autoDismissTimeout]);const hideMessage=()=>{setVisible(!1),onDismiss&&onDismiss()};return react.createElement(react.Fragment,null,visible&&react.createElement("div",_extends({className:`juno-toast juno-toast-${variant} \n\tjn-bg-theme-background-lvl-1\n\tjn-text-theme-high \n\tjn-inline-flex\t\n\tjn-items-start\n\tjn-p-2\n\tjn-mb-8\n\tjn-rounded\n ${className}`},props),react.createElement(Icon.I,{icon:(messageType=variant,"error"===messageType?"dangerous":messageType),color:"jn-text-theme-"+variant,className:"jn-shrink-0"}),react.createElement("div",{className:"juno-toast-text \n\tjn-mx-4\n\tjn-max-w-full\n"},children||text),react.createElement(Icon.I,{icon:"close",onClick:hideMessage,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100 jn-shrink-0"})));var messageType};Toast.propTypes={variant:prop_types_default().oneOf(["info","warning","danger","error","success"]),children:prop_types_default().node,text:prop_types_default().string,autoDismiss:prop_types_default().bool,autoDismissTimeout:prop_types_default().number,onDismiss:prop_types_default().func,className:prop_types_default().string},Toast.__docgenInfo={description:"A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.",methods:[],displayName:"Toast",props:{variant:{defaultValue:{value:'"info"',computed:!1},description:"Specify a semantic variant",type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"warning"',computed:!1},{value:'"danger"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Pass child nodes to be rendered as contents",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"Pass an optional text",type:{name:"string"},required:!1},autoDismiss:{defaultValue:{value:"false",computed:!1},description:"Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout",type:{name:"bool"},required:!1},autoDismissTimeout:{defaultValue:{value:"10000",computed:!1},description:"Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).",type:{name:"number"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass an optional className",type:{name:"string"},required:!1},onDismiss:{description:"Optional. Pass a handler that will be called when the message is dismissed",type:{name:"func"},required:!1}}};const Toast_stories={title:"WiP/Toast",component:Toast,argTypes:{children:{control:!1}}},Default={args:{text:"Default Message."}},Warning={args:{variant:"warning",text:"Warning Message."}},Error={args:{variant:"error",text:"Error Message."}},Danger={args:{variant:"danger",text:"Danger Message."}},Success={args:{variant:"success",text:"Success Message"}},ToastWithLongText={args:{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},autoDismiss={args:{text:"AutoDismiss in 10 sec.",autoDismiss:!0}},__namedExportsOrder=["Default","Warning","Error","Danger","Success","ToastWithLongText","autoDismiss"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "Default Message."\n  }\n}',...Default.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "warning",\n    text: "Warning Message."\n  }\n}',...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "error",\n    text: "Error Message."\n  }\n}',...Error.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "danger",\n    text: "Danger Message."\n  }\n}',...Danger.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "success",\n    text: "Success Message"\n  }\n}',...Success.parameters?.docs?.source}}},ToastWithLongText.parameters={...ToastWithLongText.parameters,docs:{...ToastWithLongText.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."\n  }\n}',...ToastWithLongText.parameters?.docs?.source}}},autoDismiss.parameters={...autoDismiss.parameters,docs:{...autoDismiss.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "AutoDismiss in 10 sec.",\n    autoDismiss: true\n  }\n}',...autoDismiss.parameters?.docs?.source}}}}}]);