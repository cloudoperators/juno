"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3829],{"./src/components/ShadowRoot/ShadowRoot.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EncapsulateStyles:()=>EncapsulateStyles,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ShadowRoot_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),ShadowRoot=function(_a){var _b=_a.mode,mode=void 0===_b?"open":_b,_c=_a.delegatesFocus,delegatesFocus=void 0!==_c&&_c,_d=_a.children,children=void 0===_d?null:_d,ref=(0,react.useRef)(null),_e=(0,react.useState)(),shadowRoot=_e[0],setShadowRoot=_e[1];return react.useEffect((function(){ref.current&&setShadowRoot(ref.current.attachShadow({delegatesFocus,mode}))}),[]),(0,jsx_runtime.jsx)("div",{ref,"data-shadow-host":"true",style:{height:"100%"},children:shadowRoot&&react_dom.createPortal(children,shadowRoot)})};try{ShadowRoot.displayName="ShadowRoot",ShadowRoot.__docgenInfo={description:"Functional component which creates and inserts a shadow dom element\nin to the current parent element. ShadowRoot allows html to be isolated from the rest of the DOM. If styles are given, these and\nthe children are added to the shadow element. The themeClass is added to a wrapper div surrounding the children.",displayName:"ShadowRoot",props:{mode:{defaultValue:{value:"open"},description:'Choose "closed" to prevent styles from being inherited from the parent node.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"open"'},{value:'"closed"'}]}},delegatesFocus:{defaultValue:{value:"false"},description:"",name:"delegatesFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"null"},description:"The children to render",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ShadowRoot/ShadowRoot.component.tsx#ShadowRoot"]={docgenInfo:ShadowRoot.__docgenInfo,name:"ShadowRoot",path:"src/components/ShadowRoot/ShadowRoot.component.tsx#ShadowRoot"})}catch(__react_docgen_typescript_loader_error){}var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const ShadowRoot_stories={title:"Layout/ShadowRoot",component:ShadowRoot,argTypes:{children:{control:!1}}};var EncapsulateStyles={render:function(args){return(0,jsx_runtime.jsx)(ShadowRoot,__assign({},args,{children:(0,jsx_runtime.jsx)("h1",{children:"Welcome"})}))},args:{mode:"closed"}};const __namedExportsOrder=["EncapsulateStyles"];EncapsulateStyles.parameters={...EncapsulateStyles.parameters,docs:{...EncapsulateStyles.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    mode: "closed"\n  }\n}',...EncapsulateStyles.parameters?.docs?.source}}}}}]);