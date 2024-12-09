"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[847],{"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Tooltip/Tooltip.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip,i:()=>useTooltipState});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),floating_ui_dom=__webpack_require__("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_react_dom=__webpack_require__("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TooltipContext=react.createContext(null),useTooltipState=function(){var context=react.useContext(TooltipContext);if(null==context)throw new Error("Tooltip components must be wrapped in <Tooltip />");return context},Tooltip=function(_a){var _b=_a.initialOpen,initialOpen=void 0!==_b&&_b,_c=_a.placement,placement=void 0===_c?"top":_c,variant=_a.variant,open=_a.open,_d=_a.triggerEvent,triggerEvent=void 0===_d?"click":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,_f=_a.children,children=void 0===_f?null:_f,tooltip=function(_a){var _b=void 0===_a?{}:_a,_c=_b.initialOpen,initialOpen=void 0!==_c&&_c,variant=_b.variant,_d=_b.placement,placement=void 0===_d?"top":_d,_e=_b.triggerEvent,triggerEvent=void 0===_e?"click":_e,controlledOpen=_b.open,setControlledOpen=_b.onOpenChange,_f=_b.disabled,disabled=void 0!==_f&&_f,_g=(0,react.useState)(initialOpen),uncontrolledOpen=_g[0],setUncontrolledOpen=_g[1],open=null!=controlledOpen?controlledOpen:uncontrolledOpen,setOpen=null!=setControlledOpen?setControlledOpen:setUncontrolledOpen,data=(0,floating_ui_react.we)({placement,open,onOpenChange:setOpen,whileElementsMounted:floating_ui_dom.ll,middleware:[(0,floating_ui_react_dom.cY)(5),(0,floating_ui_react_dom.UU)(),(0,floating_ui_react_dom.BN)()]}),context=data.context,click=(0,floating_ui_react.kp)(context,{enabled:null==controlledOpen&&!1===disabled&&"click"===triggerEvent}),hover=(0,floating_ui_react.Mk)(context,{move:!1,enabled:null==controlledOpen&&!1===disabled&&"hover"===triggerEvent}),focus=(0,floating_ui_react.iQ)(context,{enabled:null==controlledOpen}),dismiss=(0,floating_ui_react.s9)(context),role=(0,floating_ui_react.It)(context,{role:"tooltip"}),interactions=(0,floating_ui_react.bv)([click,hover,focus,dismiss,role]);return react.useMemo((function(){return __assign(__assign({open,setOpen,variant,disabled},interactions),data)}),[open,setOpen,variant,disabled,interactions,data])}({initialOpen,placement,variant,open,triggerEvent,disabled,props:__rest(_a,["initialOpen","placement","variant","open","triggerEvent","disabled","children"])});return(0,jsx_runtime.jsx)(TooltipContext.Provider,{value:tooltip,children})};try{useTooltipState.displayName="useTooltipState",useTooltipState.__docgenInfo={description:"This hook holds the TooltipContext.",displayName:"useTooltipState",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.component.tsx#useTooltipState"]={docgenInfo:useTooltipState.__docgenInfo,name:"useTooltipState",path:"src/components/Tooltip/Tooltip.component.tsx#useTooltipState"})}catch(__react_docgen_typescript_loader_error){}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"A tooltip component that optionally comes in the various semantic flavors (e.g. info, warning, ...). It can be used as an uncontrolled component where\nyou configure the event type that should open the tooltip (click or hover) or alternatively you can use it as a controlled component where you set the\nopen state and handle the events that open/close the tooltip yourself.",displayName:"Tooltip",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'}]}},triggerEvent:{defaultValue:{value:"click"},description:"Uncontrolled Tooltip: Choose which event should trigger the opening of the tooltip (click or hover)",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},placement:{defaultValue:{value:"top"},description:"Tooltip placement in relation to trigger, default is top",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'}]}},disabled:{defaultValue:{value:"false"},description:"Disable the tooltip. If this is true, the uncontrolled tooltip can't be opened anymore and the cursor hovered over the trigger will be the default cursor instead of the pointer cursor",name:"disabled",required:!1,type:{name:"boolean"}},initialOpen:{defaultValue:{value:"false"},description:"Set whether tooltip should be initially rendered opened or closed. This is only evaluated if Tooltip is in uncontrolled mode",name:"initialOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"Whether the Tooltip is open. By passing this prop you turn the Tooltip into a controlled component, which means\nyou also have to take care of opening and closing it. In this case the triggerEvent prop is ignored since you're handling the trigger yourself",name:"open",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"null"},description:"Pass the TooltipTrigger and TooltipContent elements as children",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.component.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.component.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_Tooltip_component__WEBPACK_IMPORTED_MODULE_0__.m});var _Tooltip_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tooltip/Tooltip.component.tsx")},"./src/components/TooltipContent/TooltipContent.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TooltipContent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_floating_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.component.tsx"),_Tooltip_Tooltip_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tooltip/Tooltip.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},getIcon=function(variant){return"error"===variant?"dangerous":variant},TooltipContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function TooltipContent(_a,propRef){var _b=_a.className,className=void 0===_b?"":_b,_c=_a.children,children=void 0===_c?null:_c,props=__rest(_a,["className","children"]),state=(0,_Tooltip_Tooltip_component__WEBPACK_IMPORTED_MODULE_3__.i)(),ref=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_4__.SV)([state.refs.setFloating,propRef]),variant=state.variant;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:state.open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",__assign({className:"juno-tooltip juno-tooltip-".concat(variant," ").concat("\n    jn-bg-theme-background-lvl-1\n    jn-text-theme-high \n    jn-inline-flex\t\n  jn-items-center\n    jn-p-2\n    jn-rounded\n    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]\n"," ").concat(className),ref,style:__assign({},state.floatingStyles)},state.getFloatingProps(props),{children:[variant&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon:getIcon(variant),color:"jn-text-theme-".concat(variant),className:"juno-tooltip-popover-icon ".concat("\n    jn-shrink-0\n")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"".concat("\n    jn-mx-4\n    jn-max-w-full\n"),children})]}))})}));try{TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"Put content for a tooltip here. See Tooltip for more in-depth explanation and examples.",displayName:"TooltipContent",props:{children:{defaultValue:{value:"null"},description:"Pass child nodes to display in the tooltip",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a className to render to the icon button",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipContent/TooltipContent.component.tsx#TooltipContent"]={docgenInfo:TooltipContent.__docgenInfo,name:"TooltipContent",path:"src/components/TooltipContent/TooltipContent.component.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TooltipContent/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_TooltipContent_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _TooltipContent_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TooltipContent/TooltipContent.component.tsx")},"./src/components/TooltipTrigger/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TooltipTrigger});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),Tooltip_component=__webpack_require__("./src/components/Tooltip/Tooltip.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TooltipTrigger=react.forwardRef((function TooltipTrigger(_a,propRef){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.asChild,asChild=void 0!==_c&&_c,_d=_a.className,className=void 0===_d?"":_d,props=__rest(_a,["children","asChild","className"]),state=(0,Tooltip_component.i)(),ref=(0,floating_ui_react.SV)([state.refs.setReference,propRef]);if(asChild&&react.isValidElement(children)){var childrenProps=children.props,childrenRef=childrenProps.ref,ref_1=(0,floating_ui_react.SV)([state.refs.setReference,propRef,childrenRef]),referencedProps=__assign(__assign(__assign({ref:ref_1},props),childrenProps),{"data-state":state.open?"open":"closed",className:childrenProps.className+"".concat(state.disabled&&" jn-cursor-default")}),combinedProps=state.getReferenceProps(referencedProps);return react.cloneElement(children,combinedProps)}return(0,jsx_runtime.jsx)("button",__assign({ref,"data-state":state.open?"open":"closed"},state.getReferenceProps(props),{className:"".concat(className," ").concat(state.disabled&&" jn-cursor-default"),children}))}));try{TooltipTrigger.displayName="TooltipTrigger",TooltipTrigger.__docgenInfo={description:"This is the trigger element for a tooltip. See Tooltip for more in-depth explanation and examples.",displayName:"TooltipTrigger",props:{asChild:{defaultValue:{value:"false"},description:"If true, the child you passed to the TooltipTrigger is rendered as the trigger element, instead of the default trigger component. This is useful if you e.g. want to use a Button or Icon as the trigger.",name:"asChild",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"null"},description:"Pass child nodes to display in the tooltip",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a className to render to the trigger element",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipTrigger/TooltipTrigger.component.tsx#TooltipTrigger"]={docgenInfo:TooltipTrigger.__docgenInfo,name:"TooltipTrigger",path:"src/components/TooltipTrigger/TooltipTrigger.component.tsx#TooltipTrigger"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TooltipTrigger/TooltipTrigger.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsChildTooltipTrigger:()=>AsChildTooltipTrigger,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Tooltip_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Tooltip/index.ts")),_TooltipContent_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TooltipContent/index.ts"),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/TooltipTrigger/index.ts"),_Icon_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip/TooltipTrigger",component:_index__WEBPACK_IMPORTED_MODULE_4__.k,argTypes:{},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"jn-my-6 jn-flex jn-justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Tooltip_index__WEBPACK_IMPORTED_MODULE_2__.m,{initialOpen:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TooltipContent_index__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"This is a tooltip"})]})})}]};var Default={render:function(_a){var args=__rest(_a,[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.k,__assign({},args,{children:"clickMe"}))},args:{}},AsChildTooltipTrigger={render:function(_a){var args=__rest(_a,[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.k,__assign({asChild:!0},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_5__.I,{})}))},args:{},parameters:{docs:{description:{story:"If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"}}}};const __namedExportsOrder=["Default","AsChildTooltipTrigger"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {}\n}",...Default.parameters?.docs?.source}}},AsChildTooltipTrigger.parameters={...AsChildTooltipTrigger.parameters,docs:{...AsChildTooltipTrigger.parameters?.docs,source:{originalSource:'{\n  render: TemplateAsChildAnchor,\n  args: {},\n  parameters: {\n    docs: {\n      description: {\n        story: "If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"\n      }\n    }\n  }\n}',...AsChildTooltipTrigger.parameters?.docs?.source}}}}}]);