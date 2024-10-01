"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[229],{"./src/components/PortalProvider/PortalProvider.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GD:()=>PortalProvider,TE:()=>usePortalRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js");const DEFAULT_PORTAL_ROOT_ID="juno-portal-root",PortalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),portalRootStyles={position:"absolute",top:"0",left:"0"},portalStyles={position:"relative",zIndex:"1"},Portal=_ref=>{let{children=null}=_ref;const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),[isMounted,setIsMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);if((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{rootRef?.current&&setIsMounted(!0)}),[rootRef]),!isMounted)return null;const wrappedChildren=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-portal",style:portalStyles},children);return(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(wrappedChildren,rootRef.current||document.body)};function usePortalRef(){const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isReady,setIsReady]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!rootRef||!rootRef?.current)return void console.warn("usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually.");const containerElement=document.createElement("div");return containerElement.style.position="relative",containerElement.style.zIndex="1",containerElement.classList.add("juno-portal"),rootRef.current.append(containerElement),containerRef.current=containerElement,setIsReady(!0),()=>{containerRef.current&&rootRef?.current&&(rootRef.current.removeChild(containerRef.current),containerRef.current=null)}}),[rootRef]),containerRef?.current&&isReady?containerRef.current:null}Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node};const PortalProvider=_ref2=>{let{children=null,className="",id=DEFAULT_PORTAL_ROOT_ID}=_ref2;const portalRootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isMounted,setIsMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{portalRootRef.current&&setIsMounted(!0)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalContext.Provider,{value:isMounted?portalRootRef:null},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`juno-portal-root ${className}`,id,ref:portalRootRef,style:portalRootStyles}))};PortalProvider.Portal=Portal,Portal.displayName="PortalProvider.Portal",PortalProvider.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.__docgenInfo={description:"A PortalProvider component that helps using and managing portals.\nIt renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.\nNormally, there is no need to include `PortalProvider` manually, when using `AppShell` `PortalProvider` is already included in the app.",methods:[{name:"Portal",docblock:null,modifiers:["static"],params:[{name:"{ children = null }",optional:!1,type:null}],returns:null}],displayName:"PortalProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children of the PortalProvider. Typically, this will be the whole app.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the portal root container in which portals will be mounted",type:{name:"string"},required:!1},id:{defaultValue:{value:'"juno-portal-root"',computed:!1},description:"Pass a custom id to the portal root container in which portals will be mounted",type:{name:"string"},required:!1}}}},"./src/components/PortalProvider/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GD:()=>_PortalProvider_component__WEBPACK_IMPORTED_MODULE_0__.GD,TE:()=>_PortalProvider_component__WEBPACK_IMPORTED_MODULE_0__.TE});var _PortalProvider_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/PortalProvider/PortalProvider.component.js")},"./src/deprecated_js/FormHint/FormHint.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const variantStyles=variant=>{switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=_ref=>{let{children=null,text="",variant="help",className,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n        juno-form-hint\n        juno-form-hint-${variant}\n        \n  jn-text-xs\n  jn-mt-1\n\n        ${variantStyles(variant)}\n        ${className}\n      `},props),children||text)};FormHint.displayName="FormHint Js",FormHint.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["help","error","success"]),className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint Js",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Label/Label.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,forwardedRef)=>{let{text="",htmlFor,required=!1,className="",disabled=!1,floating=!1,minimized=!1,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:`\n\t\t\t\tjuno-label \n\t\t\t\t\n\tjn-text-theme-high\n\tjn-text-base\n\tjn-transform \n\tjn-origin-top-left \n\tjn-transition-all \n\tjn-duration-100 \n\tjn-ease-in-out\n\tjn-z-10\n \n\t\t\t\t${floating?"juno-label-floating \n\tjn-absolute\n":""}\n\t\t\t\t${minimized?"juno-label-minimized \n\tjn-scale-75\n\t-jn-translate-y-[0.4375rem]\n":""}\n\t\t\t\t${disabled?"juno-label-disabled \n\tjn-opacity-50\n\tjn-cursor-not-allowed\n":""} \n\t\t\t\t${className}\n\t\t\t`,htmlFor,ref:forwardedRef},props),text,required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\t\t\t\t\tjuno-required \n\t\t\t\t\t\n\tjn-inline-block\n\tjn-w-1\n\tjn-h-1\n\tjn-rounded-full\n\tjn-align-top\n\tjn-ml-1\n\tjn-mt-2\n\tjn-bg-theme-required\n\n\t\t\t\t\t"}):"")}));Label.displayName="Label (JS)",Label.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,htmlFor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,floating:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,minimized:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool},Label.__docgenInfo={description:"A re-usable Label component",methods:[],displayName:"Label (JS)",props:{text:{defaultValue:{value:'""',computed:!1},description:"Pass a string of text to be rendered as contents. Required.",type:{name:"string"},required:!1},htmlFor:{defaultValue:{value:"undefined",computed:!0},description:"An Id of an input element to associate the label with",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Label for a disabled input",type:{name:"bool"},required:!1},floating:{defaultValue:{value:"false",computed:!1},description:"Whether the label is floating",type:{name:"bool"},required:!1},minimized:{defaultValue:{value:"false",computed:!1},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",type:{name:"bool"},required:!1}}}},"./src/deprecated_js/Label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Label_component__WEBPACK_IMPORTED_MODULE_0__.J});var _Label_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Label/Label.component.js")},"./src/deprecated_js/Spinner/Spinner.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Spinner=_ref=>{let{variant="default",size=null,className="",color="",...props}=_ref;const sizing=size=>{switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({className:`juno-spinner \n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n ${color||(()=>{switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}})()} ${className}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))};Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["primary","danger","default","success","warning"]),size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic color variant of the Spinner",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"danger"',computed:!1},{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1},size:{defaultValue:{value:"null",computed:!1},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom classNames",type:{name:"string"},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',type:{name:"string"},required:!1}}}},"./src/deprecated_js/Spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>_Spinner_component__WEBPACK_IMPORTED_MODULE_0__.y});var _Spinner_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Spinner/Spinner.component.js")},"./src/components/ComboBoxOption/ComboBoxOption.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChildrenOnly:()=>ChildrenOnly,Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_ComboBox_ComboBox_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ComboBox/ComboBox.component.js"),_ComboBoxOption_ComboBoxOption_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ComboBoxOption/ComboBoxOption.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/ComboBox/ComboBoxOption",component:_ComboBoxOption_ComboBoxOption_component__WEBPACK_IMPORTED_MODULE_2__.x,argTypes:{}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ComboBox_ComboBox_component__WEBPACK_IMPORTED_MODULE_1__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ComboBoxOption_ComboBoxOption_component__WEBPACK_IMPORTED_MODULE_2__.x,args)),Default={render:Template,args:{value:"Option 1"}},Disabled={render:Template,args:{disabled:!0,value:"Disabled Option"}},ChildrenOnly={render:Template,args:{children:"Option 1"}},__namedExportsOrder=["Default","Disabled","ChildrenOnly"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "Option 1"\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    disabled: true,\n    value: "Disabled Option"\n  }\n}',...Disabled.parameters?.docs?.source}}},ChildrenOnly.parameters={...ChildrenOnly.parameters,docs:{...ChildrenOnly.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: "Option 1"\n  }\n}',...ChildrenOnly.parameters?.docs?.source}}}}}]);