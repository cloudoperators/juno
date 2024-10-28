"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8234],{"./src/components/ContentArea/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ContentArea_component});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),withDeprecationWarning=__webpack_require__("./src/deprecated_js/withDeprecationWarning/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentArea=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-content-area \n  jn-bg-theme-content-area-bg\n  jn-relative\n  jn-grow\n ${className}`},props),children)};ContentArea.propTypes={className:prop_types_default().string,children:prop_types_default().node};const ContentArea_component=(0,withDeprecationWarning.P)(ContentArea,"ContentArea is deprecated and will be removed in future versions. To be future-proof, use AppShell to scaffold an app layout.");ContentArea.__docgenInfo={description:"Deprecated: This component used to be used internally by AppShell but has been removed there since. It was only needed to manually scaffold an app. Use AppShell to scaffold an app layout..",methods:[],displayName:"ContentArea",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/ContentAreaWrapper/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ContentAreaWrapper});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentAreaWrapper=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-content-area-wrapper \n  jn-relative\n  jn-grow\n  jn-flex\n  jn-flex-col\n  jn-overflow-hidden\n ${className}`},props),children)};ContentAreaWrapper.propTypes={className:prop_types_default().string,children:prop_types_default().node},ContentAreaWrapper.__docgenInfo={description:"OBSOLETE: Will be deleted!",methods:[],displayName:"ContentAreaWrapper",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/Panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Panel});var react=__webpack_require__("../../node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Icon_component=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js"),PortalProvider_component=__webpack_require__("./src/deprecated_js/PortalProvider/PortalProvider.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const panelClasses=(isOpen,isTransitioning,size)=>`\n      jn-fixed\n      jn-right-0\n      jn-transition-transform\n      jn-ease-out\n      jn-duration-300\n      jn-inset-y-0\n      jn-z-[9989]\n      jn-grid\n      jn-grid-rows-[auto_1fr]\n      jn-bg-theme-panel\n      jn-backdrop-blur\n      jn-backdrop-saturate-150     \n      jn-shadow-md\n      ${"large"===size?"\n          jn-w-[90%]\n          xl:jn-w-[80%]\n          2xl:jn-w-[1228px]":"\n          jn-w-[75%]\n          xl:jn-w-[55%]\n          2xl:jn-w-[844px]"}\n\t\t\t${isOpen?"":"jn-translate-x-[100%]"}\n\t\t\t${isOpen||isTransitioning?"":"jn-invisible"}\n\t\t`.replace(/\n/g," ").replace(/\s+/g," "),Panel=_ref=>{let{heading="",size,className="",opened=!1,closeable=!0,onClose,children,...props}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(opened),[isCloseable,setIsCloseable]=(0,react.useState)(closeable),[isTransitioning,setIsTransitioning]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsOpen(opened)}),[opened]),(0,react.useEffect)((()=>{setIsCloseable(closeable)}),[closeable]);const timeoutRef=react.useRef(null);react.useEffect((()=>()=>clearTimeout(timeoutRef.current)),[]),(0,react.useEffect)((()=>{isOpen||(setIsTransitioning(!0),clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>setIsTransitioning(!1)),500))}),[isOpen]);const portalContainer=(0,PortalProvider_component.TE)();return(0,react_dom.createPortal)(react.createElement("div",_extends({className:`juno-panel ${panelClasses(isOpen,isTransitioning,size)} ${className}`,role:"dialog","aria-labelledby":"juno-panel-title"},props),react.createElement("div",{className:"juno-panel-header \n  jn-flex\n  jn-items-center\n  jn-py-4\n  jn-px-8\n"},react.createElement("div",{className:"juno-panel-title \n  jn-text-theme-high\n  jn-text-lg\n  jn-font-bold\n",id:"juno-panel-title"},heading),isCloseable&&react.createElement(Icon_component.I,{icon:"close",onClick:event=>{setIsOpen(!1),onClose&&onClose(event)},className:"juno-panel-close jn-ml-auto"})),react.createElement("div",{className:"juno-panel-content-wrapper \n  jn-overflow-auto\n"},children)),portalContainer||document.body)};Panel.propTypes={heading:prop_types_default().node,size:prop_types_default().oneOf(["default","large"]),opened:prop_types_default().bool,closeable:prop_types_default().bool,onClose:prop_types_default().func,className:prop_types_default().string,children:prop_types_default().node}},"./src/components/PanelBody/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PanelBody});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const PanelBody=_ref=>{let{className="",footer,children,...props}=_ref;return react.createElement("div",_extends({className:`juno-panel-body \n  \n  ${className}`},props),react.createElement("div",{className:"juno-panel-body-content \n  jn-px-8\n  jn-py-4\n"},children),footer)};PanelBody.propTypes={className:prop_types_default().string,children:prop_types_default().any,footer:prop_types_default().element},PanelBody.__docgenInfo={description:"The panel body component. The main (form) content for the panel goes here.",methods:[],displayName:"PanelBody",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1},footer:{description:"optional footer component",type:{name:"element"},required:!1}}}},"./src/components/PanelFooter/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>PanelFooter});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const PanelFooter=_ref=>{let{className="",children,...props}=_ref;return react.createElement("div",_extends({className:`juno-panel-footer \n  jn-border-t\n  jn-border-t-theme-background-lvl-2\n  jn-px-8\n  jn-py-4\n  jn-flex\n  jn-items-center\n  jn-justify-end\n  jn-gap-3\n  jn-w-full\n  ${className}`},props),children)};PanelFooter.propTypes={className:prop_types_default().string,children:prop_types_default().any},PanelFooter.__docgenInfo={description:"The panel footer component. You can drop buttons in here and they will automatically be aligned correctly to the right.",methods:[],displayName:"PanelFooter",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/deprecated_js/PortalProvider/PortalProvider.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GD:()=>PortalProvider,TE:()=>usePortalRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js");const DEFAULT_PORTAL_ROOT_ID="juno-portal-root",PortalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),portalRootStyles={position:"absolute",top:"0",left:"0"},portalStyles={position:"relative",zIndex:"1"},Portal=_ref=>{let{children=null}=_ref;const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),[isMounted,setIsMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);if((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{rootRef?.current&&setIsMounted(!0)}),[rootRef]),!isMounted)return null;const wrappedChildren=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-portal",style:portalStyles},children);return(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(wrappedChildren,rootRef.current||document.body)};function usePortalRef(){const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isReady,setIsReady]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!rootRef||!rootRef?.current)return void console.warn("usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually.");const containerElement=document.createElement("div");return containerElement.style.position="relative",containerElement.style.zIndex="1",containerElement.classList.add("juno-portal"),rootRef.current.append(containerElement),containerRef.current=containerElement,setIsReady(!0),()=>{containerRef.current&&rootRef?.current&&(rootRef.current.removeChild(containerRef.current),containerRef.current=null)}}),[rootRef]),containerRef?.current&&isReady?containerRef.current:null}Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node};const PortalProvider=_ref2=>{let{children=null,className="",id=DEFAULT_PORTAL_ROOT_ID}=_ref2;const portalRootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isMounted,setIsMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{portalRootRef.current&&setIsMounted(!0)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalContext.Provider,{value:portalRootRef},isMounted&&children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`juno-portal-root ${className}`,id,ref:portalRootRef,style:portalRootStyles}))};PortalProvider.Portal=Portal,Portal.displayName="PortalProvider.Portal",PortalProvider.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.__docgenInfo={description:"A PortalProvider component that helps using and managing portals.\nIt renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.\nNormally, there is no need to include `PortalProvider` manually, when using `AppShell` `PortalProvider` is already included in the app.",methods:[{name:"Portal",docblock:null,modifiers:["static"],params:[{name:"{ children = null }",optional:!1,type:null}],returns:null}],displayName:"PortalProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children of the PortalProvider. Typically, this will be the whole app.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the portal root container in which portals will be mounted",type:{name:"string"},required:!1},id:{defaultValue:{value:'"juno-portal-root"',computed:!1},description:"Pass a custom id to the portal root container in which portals will be mounted",type:{name:"string"},required:!1}}}},"./src/deprecated_js/withDeprecationWarning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>withDeprecationWarning});var react=__webpack_require__("../../node_modules/react/index.js");const withDeprecationWarning=(WrappedComponent,message)=>props=>((0,react.useEffect)((()=>{console.warn(message)}),[]),react.createElement(WrappedComponent,props))}}]);