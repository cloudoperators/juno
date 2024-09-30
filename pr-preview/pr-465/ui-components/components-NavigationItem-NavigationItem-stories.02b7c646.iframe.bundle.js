"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3391],{"./src/components/NavigationItem/NavigationItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActiveItem:()=>ActiveItem,DefaultWithChildren:()=>DefaultWithChildren,DisabledItem:()=>DisabledItem,DisabledLinkItem:()=>DisabledLinkItem,ItemAsLink:()=>ItemAsLink,WithIcon:()=>WithIcon,WithValueAndLabel:()=>WithValueAndLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/NavigationItem/index.ts"),_Navigation_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Navigation/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Internal/Navigation/NavigationItem",component:_index__WEBPACK_IMPORTED_MODULE_2__.s,argTypes:{},decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navigation_index__WEBPACK_IMPORTED_MODULE_3__.V,{children:story()})}]};var Template=function(_a){var children=_a.children,args=__rest(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.s,__assign({},args,{children}))};Template.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node};var DefaultWithChildren={render:Template,args:{children:"Navigation Item"}},WithValueAndLabel={render:Template,args:{value:"item-1",label:"Navigation Item 1"}},ActiveItem={render:Template,args:{active:!0,children:"Active Item"}},DisabledItem={render:Template,args:{disabled:!0,children:"Disabled Item"}},ItemAsLink={render:Template,args:{href:"https://www.sap.com",children:"This item is a link"}},DisabledLinkItem={render:Template,args:{href:"https://www.sap.com",children:"This item is a link",disabled:!0}},WithIcon={render:Template,args:{label:"With Icon",icon:"warning"}};const __namedExportsOrder=["DefaultWithChildren","WithValueAndLabel","ActiveItem","DisabledItem","ItemAsLink","DisabledLinkItem","WithIcon"];DefaultWithChildren.parameters={...DefaultWithChildren.parameters,docs:{...DefaultWithChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: "Navigation Item"\n  }\n}',...DefaultWithChildren.parameters?.docs?.source}}},WithValueAndLabel.parameters={...WithValueAndLabel.parameters,docs:{...WithValueAndLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "item-1",\n    label: "Navigation Item 1"\n  }\n}',...WithValueAndLabel.parameters?.docs?.source}}},ActiveItem.parameters={...ActiveItem.parameters,docs:{...ActiveItem.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    active: true,\n    children: "Active Item"\n  }\n}',...ActiveItem.parameters?.docs?.source}}},DisabledItem.parameters={...DisabledItem.parameters,docs:{...DisabledItem.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    disabled: true,\n    children: "Disabled Item"\n  }\n}',...DisabledItem.parameters?.docs?.source}}},ItemAsLink.parameters={...ItemAsLink.parameters,docs:{...ItemAsLink.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    href: "https://www.sap.com",\n    children: "This item is a link"\n  }\n}',...ItemAsLink.parameters?.docs?.source}}},DisabledLinkItem.parameters={...DisabledLinkItem.parameters,docs:{...DisabledLinkItem.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    href: "https://www.sap.com",\n    children: "This item is a link",\n    disabled: true\n  }\n}',...DisabledLinkItem.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "With Icon",\n    icon: "warning"\n  }\n}',...WithIcon.parameters?.docs?.source}}}}}]);