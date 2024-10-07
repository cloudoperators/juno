"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[7573],{"./src/components/CodeBlock/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CodeBlock});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),JsonViewer_component=__webpack_require__("./src/components/JsonViewer/JsonViewer.component.js"),Icon=__webpack_require__("./src/deprecated_js/Icon/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const preStyles=wrap=>`\n    jn-p-6\n    ${wrap?"jn-break-words jn-break-all jn-whitespace-pre-wrap":"jn-overflow-x-auto"}\n  `,sizeStyles=size=>{switch(size){case"small":return"\n        juno-codeblock-pre-small\n        jn-max-h-64\n        jn-overflow-y-auto\n      ";case"medium":return"\n        juno-codeblock-pre-medium\n        jn-max-h-[32rem]\n        jn-overflow-y-auto\n      ";case"large":return"\n        juno-codeblock-pre-large\n        jn-max-h-[56rem]\n        jn-overflow-y-auto\n      ";default:return""}},jsonViewStyles={fontFamily:"IBM Plex Mono",fontSize:"0.875rem",padding:"1.5rem"},jsonTheme={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"},CodeBlock=_ref=>{let{content="",children=null,heading,wrap=!0,size="auto",copy=!0,lang="",className="",...props}=_ref;const[isCopied,setIsCopied]=(0,react.useState)(!1),timeoutRef=react.useRef(null);react.useEffect((()=>()=>clearTimeout(timeoutRef.current)),[]);const theCode=(0,react.useRef)(null);return react.createElement("div",_extends({className:`juno-code-block \n  jn-bg-theme-code-block\n  jn-rounded\n ${lang?`juno-code-block-lang-${lang}`:""} ${className}`,"data-lang":lang||null},props),heading&&heading.length?react.createElement("div",{className:"juno-codeblock-heading \n  jn-text-sm\n  jn-border-b-[1px]\n  jn-border-theme-codeblock-bar \n  jn-h-[3.4375rem]\n  jn-flex\n"},react.createElement("span",{className:"\n  jn-flex\n  jn-font-bold\n  jn-px-[1.5625rem]\n  jn-items-center\n"},heading)):"","json"===lang?react.createElement(JsonViewer_component.p,{data:content,expanded:3,theme:jsonTheme,style:jsonViewStyles}):react.createElement("pre",{className:`juno-code-block-pre ${preStyles(wrap)} ${sizeStyles(size)}`},react.createElement("code",{className:"\n  jn-bg-theme-code-block\n  jn-text-sm\n",ref:theCode},content||children)),copy?react.createElement("div",{className:"juno-codeblock-bottombar \n  jn-flex \n  jn-justify-end \n  jn-px-3\n  jn-py-2 \n  jn-border-t-[1px]\n  jn-border-theme-codeblock-bar\n"},react.createElement("span",{className:"\n  jn-font-bold \n  jn-text-sm \n  jn-mr-4 \n  jn-mt-1\n"},isCopied?"Copied!":""),react.createElement(Icon.I,{icon:"contentCopy",onClick:()=>{const textToCopy="json"===lang?JSON.stringify(content||children):theCode.current.textContent;navigator.clipboard.writeText(textToCopy),setIsCopied(!0),clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>setIsCopied(!1)),1e3)}})):"")};CodeBlock.propTypes={content:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().object]),children:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().object]),heading:prop_types_default().string,wrap:prop_types_default().bool,size:prop_types_default().oneOf(["auto","small","medium","large"]),copy:prop_types_default().bool,lang:prop_types_default().string,className:prop_types_default().string},CodeBlock.__docgenInfo={description:"A basic CodeBlock component. Accepts a content prop or children. Will render a pre-wrapped code element.",methods:[],displayName:"CodeBlock",props:{content:{defaultValue:{value:'""',computed:!1},description:"The content to render. Will override children if passed.",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children to render. Will be overridden by content prop if passed as well.",type:{name:"union",value:[{name:"node"},{name:"object"}]},required:!1},wrap:{defaultValue:{value:"true",computed:!1},description:"Set whether the code should wrap or not. Default is true.",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"auto"',computed:!1},description:'Set the size of the CodeBlock. Default is "auto"',type:{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},copy:{defaultValue:{value:"true",computed:!1},description:"Render a button to copy the code to the clipboard. Defaults to true",type:{name:"bool"},required:!1},lang:{defaultValue:{value:'""',computed:!1},description:'Pass a lang prop. Passing "json" will render a fully-featured JsonView. Will also add a data-lang-attribute to the codeblock',type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to the wrapper of the CodeBlock",type:{name:"string"},required:!1},heading:{description:"Pass at title to render. Will look like a single tab.",type:{name:"string"},required:!1}}}},"./src/components/Message/Message.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Message});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/Icon/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const backgroundClass=variant=>{switch(variant){case"error":return"\n\tjn-bg-theme-message-error\n";case"warning":return"\n\tjn-bg-theme-message-warning\n";case"success":return"\n\tjn-bg-theme-message-success\n";case"info":default:return"\n\tjn-bg-theme-message-default\n";case"danger":return"\n\tjn-bg-theme-message-danger\n"}},variantClass=variant=>{switch(variant){case"error":return"\n\tjn-border-theme-message-error\n";case"warning":return"\n\tjn-border-theme-message-warning\n";case"success":return"\n\tjn-border-theme-message-success\n";case"info":default:return"\n\tjn-border-theme-message-default\n";case"danger":return"\n\tjn-border-theme-message-danger\n"}},Message=_ref=>{let{title=null,text=null,variant="info",dismissible=!1,autoDismiss=!1,autoDismissTimeout=1e4,onDismiss,className="",children,...props}=_ref;const[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),timeoutRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>clearTimeout(timeoutRef.current)),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{autoDismiss&&(clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>hideMessage()),autoDismissTimeout))}),[autoDismiss,autoDismissTimeout]);const hideMessage=()=>{setVisible(!1),onDismiss&&onDismiss()};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,visible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-message juno-message-${variant} \n\tjn-text-theme-high\n\tjn-flex\n\tjn-rounded\n\tjn-leading-5\n\tjn-overflow-hidden\n\tjn-items-center\n ${backgroundClass(variant)} ${className}`},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`juno-message-border \n\tjn-w-[4px]\n\tjn-self-stretch\n\tjn-border-l-4\n\tjn-mr-6\n\tjn-shrink-0\n ${variantClass(variant)}`}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:(messageType=variant,"error"===messageType?"dangerous":messageType),color:"jn-text-theme-"+variant,className:"jn-shrink-0"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-message-content \n\tjn-py-3\n\tjn-pr-4\n\tjn-ml-7\n"},title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"\n\tjn-font-bold\n"},title):"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,children||text)),dismissible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"\n\tjn-ml-auto\n\tjn-self-stretch\n\tjn-flex\n\tjn-flex-col\n\tjn-py-2.5\n\tjn-pr-2.5\n"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"close",onClick:hideMessage,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100"}))));var messageType};Message.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["info","warning","danger","error","success"]),dismissible:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,autoDismiss:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,autoDismissTimeout:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,onDismiss:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},Message.__docgenInfo={description:"A Message holds generally important information to help understand the contents, purpose, or state of a whole page or view.\nUse sparingly, there should never be any two or more subsequent instances of Message as direct siblings/neighbors on an individual view.",methods:[],displayName:"Message",props:{title:{defaultValue:{value:"null",computed:!1},description:"Pass an optional title",type:{name:"string"},required:!1},text:{defaultValue:{value:"null",computed:!1},description:"Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below)",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"info"',computed:!1},description:"Specify a semantic variant",type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"warning"',computed:!1},{value:'"danger"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},dismissible:{defaultValue:{value:"false",computed:!1},description:"Optional. If set to 'true', the message will get a close button to dismiss the message.",type:{name:"bool"},required:!1},autoDismiss:{defaultValue:{value:"false",computed:!1},description:"Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout",type:{name:"bool"},required:!1},autoDismissTimeout:{defaultValue:{value:"10000",computed:!1},description:"Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).",type:{name:"number"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass an optional className",type:{name:"string"},required:!1},onDismiss:{description:"Optional. Pass a handler that will be called when the message is dismissed",type:{name:"func"},required:!1},children:{description:"Pass child nodes to be rendered as contents",type:{name:"node"},required:!1}}}},"./src/components/PortalProvider/PortalProvider.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GD:()=>PortalProvider,TE:()=>usePortalRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js");const DEFAULT_PORTAL_ROOT_ID="juno-portal-root",PortalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),portalRootStyles={position:"absolute",top:"0",left:"0"},portalStyles={position:"relative",zIndex:"1"},Portal=_ref=>{let{children=null}=_ref;const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),[isMounted,setIsMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);if((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{rootRef?.current&&setIsMounted(!0)}),[rootRef]),!isMounted)return null;const wrappedChildren=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-portal",style:portalStyles},children);return(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(wrappedChildren,rootRef.current||document.body)};function usePortalRef(){const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isReady,setIsReady]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!rootRef||!rootRef?.current)return void console.warn("usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually.");const containerElement=document.createElement("div");return containerElement.style.position="relative",containerElement.style.zIndex="1",containerElement.classList.add("juno-portal"),rootRef.current.append(containerElement),containerRef.current=containerElement,setIsReady(!0),()=>{containerRef.current&&rootRef?.current&&(rootRef.current.removeChild(containerRef.current),containerRef.current=null)}}),[rootRef]),containerRef?.current&&isReady?containerRef.current:null}Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node};const PortalProvider=_ref2=>{let{children=null,className="",id=DEFAULT_PORTAL_ROOT_ID}=_ref2;const portalRootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isMounted,setIsMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{portalRootRef.current&&setIsMounted(!0)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalContext.Provider,{value:isMounted?portalRootRef:null},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`juno-portal-root ${className}`,id,ref:portalRootRef,style:portalRootStyles}))};PortalProvider.Portal=Portal,Portal.displayName="PortalProvider.Portal",PortalProvider.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.__docgenInfo={description:"A PortalProvider component that helps using and managing portals.\nIt renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.\nNormally, there is no need to include `PortalProvider` manually, when using `AppShell` `PortalProvider` is already included in the app.",methods:[{name:"Portal",docblock:null,modifiers:["static"],params:[{name:"{ children = null }",optional:!1,type:null}],returns:null}],displayName:"PortalProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children of the PortalProvider. Typically, this will be the whole app.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the portal root container in which portals will be mounted",type:{name:"string"},required:!1},id:{defaultValue:{value:'"juno-portal-root"',computed:!1},description:"Pass a custom id to the portal root container in which portals will be mounted",type:{name:"string"},required:!1}}}},"./src/components/AppShellProvider/AppShellProvider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoShadowRoot:()=>NoShadowRoot,StylesInHead:()=>StylesInHead,StylesInline:()=>StylesInline,ThemeLight:()=>ThemeLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AppShellProvider_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),StyleProvider_component=__webpack_require__("./src/components/StyleProvider/StyleProvider.component.js"),ShadowRoot_component=__webpack_require__("./src/components/ShadowRoot/ShadowRoot.component.js"),PortalProvider_component=__webpack_require__("./src/components/PortalProvider/PortalProvider.component.js");const AppShellProvider=_ref=>{let{shadowRoot=!0,shadowRootMode="open",stylesWrapper="inline",theme=null,children}=_ref;const Wrapper=react.useCallback((_ref2=>{let{children}=_ref2;return shadowRoot?react.createElement(ShadowRoot_component.H,{mode:shadowRootMode},children):children}),[shadowRoot,shadowRootMode]);return react.createElement(Wrapper,null,react.createElement(StyleProvider_component.N,{theme,stylesWrapper:shadowRoot?"inline":stylesWrapper},react.createElement(PortalProvider_component.GD,null,children)))};AppShellProvider.propTypes={shadowRoot:prop_types_default().bool,shadowRootMode:prop_types_default().oneOf(["open","closed"]),stylesWrapper:prop_types_default().oneOf(["head","inline"]),theme:prop_types_default().string,children:prop_types_default().any},AppShellProvider.__docgenInfo={description:"This provider acts as a wrapper for Juno apps. It renders a StyleProvider and PortalProvider",methods:[],displayName:"AppShellProvider",props:{shadowRoot:{defaultValue:{value:"true",computed:!1},description:"Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application.",type:{name:"bool"},required:!1},shadowRootMode:{defaultValue:{value:'"open"',computed:!1},description:"Shadow root mode",type:{name:"enum",value:[{value:'"open"',computed:!1},{value:'"closed"',computed:!1}]},required:!1},stylesWrapper:{defaultValue:{value:'"inline"',computed:!1},description:"Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline.",type:{name:"enum",value:[{value:'"head"',computed:!1},{value:'"inline"',computed:!1}]},required:!1},theme:{defaultValue:{value:"null",computed:!1},description:"theme: theme-dark or theme-light",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}};var CodeBlock=__webpack_require__("./src/components/CodeBlock/index.js"),Message_component=__webpack_require__("./src/components/Message/Message.component.js");const AppShellProvider_stories={title:"Layout/AppShellProvider",component:AppShellProvider,argTypes:{children:{control:!1}}},Template=args=>react.createElement(AppShellProvider,args,args.children),Default={render:Template,args:{children:[react.createElement(Message_component.Q,{key:0},"Juno styles are added inline"),react.createElement(CodeBlock.N,{key:1},"\n  export default (props) => {\n    return (\n      <AppShellProvider>\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }")]}},NoShadowRoot={render:Template,args:{shadowRoot:!1,children:[react.createElement(Message_component.Q,{key:0},"No ShadowRoot, but the styles are still inline (default)"),react.createElement(CodeBlock.N,{key:1},"\n  export default (props) => {\n    return (\n      <AppShellProvider shadowRoot={false}>\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }")]}},StylesInHead={render:Template,args:{shadowRoot:!1,stylesWrapper:"head",children:[react.createElement(Message_component.Q,{key:0},"Juno styles are added to the head tag"),react.createElement(CodeBlock.N,{key:1},'\n  export default (props) => {\n    return (\n      <AppShellProvider shadowRoot={false} stylesWrapper="head">\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }')]}},StylesInline={render:Template,args:{shadowRoot:!1,stylesWrapper:"inline",children:[react.createElement(Message_component.Q,{key:0},"Juno style are added inline"),react.createElement(CodeBlock.N,{key:1},'\n  export default (props) => {\n    return (\n      <AppShellProvider shadowRoot={false} stylesWrapper="inline">\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }')]}},ThemeLight={render:Template,args:{theme:"theme-light",children:[react.createElement(Message_component.Q,{key:0},"Light Theme"),react.createElement(CodeBlock.N,{key:1},'\n  <AppShellProvider theme="theme-light">\n    <style>{/* app styles */}</style>\n    <App>\n      {/* App Body */}\n    </App>\n  </AppShellProvider>')]}},__namedExportsOrder=["Default","NoShadowRoot","StylesInHead","StylesInline","ThemeLight"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    children: [<Message key={0}>Juno styles are added inline</Message>, <CodeBlock key={1}>\n        {`\n  export default (props) => {\n    return (\n      <AppShellProvider>\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }`}\n      </CodeBlock>]\n  }\n}",...Default.parameters?.docs?.source}}},NoShadowRoot.parameters={...NoShadowRoot.parameters,docs:{...NoShadowRoot.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    shadowRoot: false,\n    children: [<Message key={0}>No ShadowRoot, but the styles are still inline (default)</Message>, <CodeBlock key={1}>\n        {`\n  export default (props) => {\n    return (\n      <AppShellProvider shadowRoot={false}>\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }`}\n      </CodeBlock>]\n  }\n}",...NoShadowRoot.parameters?.docs?.source}}},StylesInHead.parameters={...StylesInHead.parameters,docs:{...StylesInHead.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    shadowRoot: false,\n    stylesWrapper: "head",\n    children: [<Message key={0}>Juno styles are added to the head tag</Message>, <CodeBlock key={1}>\n        {`\n  export default (props) => {\n    return (\n      <AppShellProvider shadowRoot={false} stylesWrapper="head">\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }`}\n      </CodeBlock>]\n  }\n}',...StylesInHead.parameters?.docs?.source}}},StylesInline.parameters={...StylesInline.parameters,docs:{...StylesInline.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    shadowRoot: false,\n    stylesWrapper: "inline",\n    children: [<Message key={0}>Juno style are added inline</Message>, <CodeBlock key={1}>\n        {`\n  export default (props) => {\n    return (\n      <AppShellProvider shadowRoot={false} stylesWrapper="inline">\n        <style>{/* app styles */}</style>\n        <App {...props} />\n      </AppShellProvider>\n    )\n  }`}\n      </CodeBlock>]\n  }\n}',...StylesInline.parameters?.docs?.source}}},ThemeLight.parameters={...ThemeLight.parameters,docs:{...ThemeLight.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    theme: "theme-light",\n    children: [<Message key={0}>Light Theme</Message>, <CodeBlock key={1}>{`\n  <AppShellProvider theme="theme-light">\n    <style>{/* app styles */}</style>\n    <App>\n      {/* App Body */}\n    </App>\n  </AppShellProvider>`}</CodeBlock>]\n  }\n}',...ThemeLight.parameters?.docs?.source}}}}}]);