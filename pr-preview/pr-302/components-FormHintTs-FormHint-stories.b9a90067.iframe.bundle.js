"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4766],{"./src/components/FormHintTs/FormHint.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},variantStyles=function(variant){switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.text,text=void 0===_c?"":_c,_d=_a.variant,variant=void 0===_d?"help":_d,className=_a.className,props=__rest(_a,["children","text","variant","className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",__assign({className:"\n        juno-form-hint\n        juno-form-hint-".concat(variant,"\n        ").concat("\n  jn-text-xs\n  jn-mt-1\n","\n        ").concat(variantStyles(variant),"\n        ").concat(className,"\n      ")},props),children||text)};FormHint.displayName="FormHint",FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The children to render as a hint associated with a form element",defaultValue:{value:"null",computed:!1}},text:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:"The text to render. If both children and text are passed, children will rendered",defaultValue:{value:'""',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"help" | "error" | "success"',elements:[{name:"literal",value:'"help"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"The variant of the the hint. Defaults to 'help'.",defaultValue:{value:'"help"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Pass a custom className"}}}},"./src/components/FormHintTs/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_FormHint_component__WEBPACK_IMPORTED_MODULE_0__.m});var _FormHint_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormHintTs/FormHint.component.tsx")},"./src/components/FormHintTs/FormHint.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorVariant:()=>ErrorVariant,SuccessVariant:()=>SuccessVariant,WithChildren:()=>WithChildren,WithTextAsChildren:()=>WithTextAsChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormHintTs/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/FormHint",component:_index__WEBPACK_IMPORTED_MODULE_1__.m,argTypes:{children:{control:!1}}};var Template=function(_a){var children=_a.children,args=__rest(_a,["children"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.m,__assign({},args),children)};Template.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node};var Default={render:Template,args:{text:"A simple hint to be associated with a form input"}},WithChildren={render:Template,args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"A FormHint with a ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Link"),".")}},WithTextAsChildren={render:Template,args:{text:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"A FormHint with a ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Link"),".")}},ErrorVariant={render:Template,args:{variant:"error",text:"A FormHint containing an error or invalidation message"}},SuccessVariant={render:Template,args:{variant:"success",text:"A FormHint containg a success or validation message"}};const __namedExportsOrder=["Default","WithChildren","WithTextAsChildren","ErrorVariant","SuccessVariant"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    text: "A simple hint to be associated with a form input"\n  }\n}',...Default.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: <>\n        A FormHint with a <a href="#">Link</a>.\n      </>\n  }\n}',...WithChildren.parameters?.docs?.source}}},WithTextAsChildren.parameters={...WithTextAsChildren.parameters,docs:{...WithTextAsChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    text: <>\n        A FormHint with a <a href="#">Link</a>.\n      </>\n  }\n}',...WithTextAsChildren.parameters?.docs?.source}}},ErrorVariant.parameters={...ErrorVariant.parameters,docs:{...ErrorVariant.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "error",\n    text: "A FormHint containing an error or invalidation message"\n  }\n}',...ErrorVariant.parameters?.docs?.source}}},SuccessVariant.parameters={...SuccessVariant.parameters,docs:{...SuccessVariant.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "success",\n    text: "A FormHint containg a success or validation message"\n  }\n}',...SuccessVariant.parameters?.docs?.source}}}}}]);