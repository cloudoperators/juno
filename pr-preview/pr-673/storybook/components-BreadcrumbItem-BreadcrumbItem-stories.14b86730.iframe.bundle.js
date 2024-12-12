"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4681],{"./src/components/BreadcrumbItem/BreadcrumbItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BreadcrumbItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Icon/Icon.component.tsx")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},BreadcrumbItem=function(_a){var _b=_a.href,href=void 0===_b?"#":_b,_c=_a.label,label=void 0===_c?"Item":_c,_d=_a.ariaLabel,ariaLabel=void 0===_d?"":_d,_e=_a.active,active=void 0!==_e&&_e,_f=_a.children,children=void 0===_f?null:_f,onClick=_a.onClick,_g=_a.disabled,disabled=void 0!==_g&&_g,_h=_a.className,className=void 0===_h?"":_h,props=__rest(_a,["href","label","ariaLabel","active","children","onClick","disabled","className"]);if(children)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children});var icon=props.icon,iconElement=icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon,size:"18",color:"jn-text-theme-default",className:label?"jn-mr-1":""}):null,combinedClassName="juno-breadcrumb-item \n    ".concat("\n  jn-text-sm\n  jn-text-theme-high\n  jn-flex\n  jn-gap-1\n  jn-items-center\n"," \n    ").concat(disabled?"juno-breadcrumb-item-disabled":""," \n    ").concat(active?"juno-breadcrumb-item-active":""," \n    ").concat(className);if(active||disabled)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",__assign({className:combinedClassName},props,{children:[iconElement,label]}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:combinedClassName},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href,className:"\n  jn-text-theme-high\n  jn-inline-flex\n","aria-label":ariaLabel||label,onClick:function(event){onClick&&!disabled&&onClick(event)},children:[iconElement,label]})}))};try{BreadcrumbItem.displayName="BreadcrumbItem",BreadcrumbItem.__docgenInfo={description:"BreadcrumbItem represents an individual item within a Breadcrumb component.",displayName:"BreadcrumbItem",props:{icon:{defaultValue:null,description:"The icon type to display in the breadcrumb item.",name:"icon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},href:{defaultValue:{value:"#"},description:"A URL the breadcrumb item points to for navigation.",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:{value:"Item"},description:"The text to display inside the breadcrumb item.",name:"label",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The value for the aria-label attribute, used to improve accessibility.",name:"ariaLabel",required:!1,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"Determines if this item is the last or currently active breadcrumb.",name:"active",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"The click event handler for the breadcrumb item.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},disabled:{defaultValue:{value:"false"},description:"If true, disables the breadcrumb item.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS class names to apply to the breadcrumb item for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Custom content to render within the breadcrumb item, replacing the default content.",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BreadcrumbItem/BreadcrumbItem.component.tsx#BreadcrumbItem"]={docgenInfo:BreadcrumbItem.__docgenInfo,name:"BreadcrumbItem",path:"src/components/BreadcrumbItem/BreadcrumbItem.component.tsx#BreadcrumbItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BreadcrumbItem/BreadcrumbItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Disabled:()=>Disabled,Home:()=>Home,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Icon/Icon.component.tsx")),_BreadcrumbItem_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/BreadcrumbItem/BreadcrumbItem.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BreadcrumbItem_component__WEBPACK_IMPORTED_MODULE_3__.J,__assign({},args))},iconOptions=Object.keys(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.N);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumb/BreadcrumbItem",component:_BreadcrumbItem_component__WEBPACK_IMPORTED_MODULE_3__.J,argTypes:{icon:{options:iconOptions,control:{type:"select"}},children:{control:!1}}};var Default={render:Template,parameters:{docs:{description:{story:"A default breadcrumb item"}}},args:{label:"Breadcrumb Item"}},WithIcon={render:Template,parameters:{docs:{description:{story:"Pass any available icon name to render an additional icon for the item."}}},args:{icon:"place",label:"Breadcrumb Item with Icon"}},Active={render:Template,parameters:{docs:{description:{story:"An active item represents the current page."}}},args:{label:"Active Breadcrumb Item",active:!0}},Disabled={render:Template,parameters:{docs:{description:{story:"A disabled breadcrumb item."}}},args:{label:"Disabled Breadcrumb Item",disabled:!0}},Home={render:Template,parameters:{docs:{description:{story:"Typically the first item in a breadcrumb."}}},args:{label:"",icon:"home"}};const __namedExportsOrder=["Default","WithIcon","Active","Disabled","Home"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "A default breadcrumb item"\n      }\n    }\n  },\n  args: {\n    label: "Breadcrumb Item"\n  }\n}',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Pass any available icon name to render an additional icon for the item."\n      }\n    }\n  },\n  args: {\n    icon: "place",\n    label: "Breadcrumb Item with Icon"\n  }\n}',...WithIcon.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "An active item represents the current page."\n      }\n    }\n  },\n  args: {\n    label: "Active Breadcrumb Item",\n    active: true\n  }\n}',...Active.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "A disabled breadcrumb item."\n      }\n    }\n  },\n  args: {\n    label: "Disabled Breadcrumb Item",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Home.parameters={...Home.parameters,docs:{...Home.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Typically the first item in a breadcrumb."\n      }\n    }\n  },\n  args: {\n    label: "",\n    icon: "home"\n  }\n}',...Home.parameters?.docs?.source}}}}}]);