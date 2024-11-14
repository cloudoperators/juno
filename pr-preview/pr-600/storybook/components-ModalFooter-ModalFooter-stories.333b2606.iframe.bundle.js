"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2191],{"./src/components/ModalFooter/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ModalFooter});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Button=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Button/index.ts")),ButtonRow=__webpack_require__("./src/components/ButtonRow/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ModalFooter=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.confirmButtonLabel,confirmButtonLabel=void 0===_c?"":_c,_d=_a.cancelButtonLabel,cancelButtonLabel=void 0===_d?"":_d,_e=_a.confirmButtonIcon,confirmButtonIcon=void 0===_e?null:_e,_f=_a.cancelButtonIcon,cancelButtonIcon=void 0===_f?null:_f,onConfirm=_a.onConfirm,onCancel=_a.onCancel,_g=_a.className,className=void 0===_g?"":_g,props=__rest(_a,["children","confirmButtonLabel","cancelButtonLabel","confirmButtonIcon","cancelButtonIcon","onConfirm","onCancel","className"]),handleCancelClick=function(event){onCancel&&onCancel(event)};return(0,jsx_runtime.jsx)("div",__assign({className:"juno-modal-footer ".concat("\n\tjn-flex\n\tjn-flex-row\n\tjn-border-t\n\tjn-border-theme-background-lvl-4\n\tjn-py-2\n\tjn-px-8\n"," ").concat(children?null:"\n\tjn-justify-end\n\tjn-gap-3.5\n"," ").concat(className," ")},props,{children:children||(confirmButtonLabel||onConfirm?(0,jsx_runtime.jsxs)(ButtonRow.z,{children:[(0,jsx_runtime.jsx)(Button.$,{variant:"primary",label:confirmButtonLabel||"Confirm",icon:confirmButtonIcon||void 0,onClick:function(event){onConfirm&&onConfirm(event)}}),(0,jsx_runtime.jsx)(Button.$,{variant:"subdued",label:cancelButtonLabel||"Cancel",icon:cancelButtonIcon||void 0,onClick:handleCancelClick})]}):(0,jsx_runtime.jsx)(ButtonRow.z,{children:(0,jsx_runtime.jsx)(Button.$,{variant:"subdued",onClick:handleCancelClick,label:cancelButtonLabel||"Close",icon:cancelButtonIcon||void 0})}))}))};try{ModalFooter.displayName="ModalFooter",ModalFooter.__docgenInfo={description:'A Footer component for Modal.\nRenders a simple "Close" Button (and accepts a corresponding onCancel-handler) by default.\nCan be passed a confirmButtonLabel and cancelButton label with corresponding onConfirm- and onCancel-handlers.\nCan alternatively render all custom children as passed.',displayName:"ModalFooter",props:{children:{defaultValue:{value:"null"},description:"Custom children to render. Anything goes.",name:"children",required:!1,type:{name:"any"}},confirmButtonLabel:{defaultValue:{value:""},description:"The label for the Confirm-button. When passed, the component will render a Confirm button and a cancel button, otherwise the component will ONLY render a Close-Button.",name:"confirmButtonLabel",required:!1,type:{name:"string"}},cancelButtonLabel:{defaultValue:{value:""},description:"Custom label for the cancel button. ONLY has an effect if a `confirmButtonLabel` is passed.",name:"cancelButtonLabel",required:!1,type:{name:"string"}},confirmButtonIcon:{defaultValue:{value:"null"},description:"Pass an Icon name to show on the confirming action button",name:"confirmButtonIcon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "default" | "download" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},cancelButtonIcon:{defaultValue:{value:"null"},description:"Pass an icon name to show on the cancelling button",name:"cancelButtonIcon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "default" | "download" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},className:{defaultValue:{value:""},description:"A custom className. Useful to configure flex items alignment when passing custom content as children.",name:"className",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Handler to execute once the confirming button is clicked",name:"onConfirm",required:!1,type:{name:"MouseEventHandler<EventTarget> | null"}},onCancel:{defaultValue:null,description:"Handler to execute once the cancelling button is clicked",name:"onCancel",required:!1,type:{name:"MouseEventHandler<EventTarget> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalFooter/ModalFooter.component.tsx#ModalFooter"]={docgenInfo:ModalFooter.__docgenInfo,name:"ModalFooter",path:"src/components/ModalFooter/ModalFooter.component.tsx#ModalFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Stack/Stack.component.tsx")},"./src/components/ModalFooter/ModalFooter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configure:()=>Configure,Custom:()=>Custom,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/ModalFooter/index.ts")),_Button_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.ts"),_ButtonRow_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ButtonRow/index.ts"),_Stack_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Stack/index.ts"),_Icon_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.j,__assign({},args))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal/ModalFooter",component:_index__WEBPACK_IMPORTED_MODULE_2__.j,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}}};var Default={render:Template,args:{}},Configure={render:Template,args:{confirmButtonLabel:"Confirm Action",cancelButtonLabel:"Cancel Action"}},Custom={render:Template,args:{className:"jn-justify-between jn-items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Stack_index__WEBPACK_IMPORTED_MODULE_5__.B,{gap:"2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_6__.I,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Some status here"})]},"s1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ButtonRow_index__WEBPACK_IMPORTED_MODULE_4__.z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"primary-danger",label:"Destruction"},"b-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"primary",label:"World Peace"},"b-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"subdued",label:"Surprise Me!"},"b-3")]},"br-1")]}};const __namedExportsOrder=["Default","Configure","Custom"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {}\n}",...Default.parameters?.docs?.source}}},Configure.parameters={...Configure.parameters,docs:{...Configure.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    confirmButtonLabel: "Confirm Action",\n    cancelButtonLabel: "Cancel Action"\n  }\n}',...Configure.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    className: "jn-justify-between jn-items-center",\n    children: [<Stack gap="2" key="s1">\n        <Icon />\n        <span>Some status here</span>\n      </Stack>, <ButtonRow key="br-1">\n        <Button variant="primary-danger" label="Destruction" key="b-1" />\n        <Button variant="primary" label="World Peace" key="b-2" />\n        <Button variant="subdued" label="Surprise Me!" key="b-3" />\n      </ButtonRow>]\n  }\n}',...Custom.parameters?.docs?.source}}}}}]);