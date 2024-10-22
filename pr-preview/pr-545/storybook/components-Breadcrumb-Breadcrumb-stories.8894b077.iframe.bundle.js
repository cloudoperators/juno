"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[23],{"./src/components/BreadcrumbItem/BreadcrumbItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BreadcrumbItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Icon/Icon.component.tsx")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},BreadcrumbItem=function(_a){var _b=_a.icon,icon=void 0===_b?null:_b,_c=_a.href,href=void 0===_c?"#":_c,_d=_a.label,label=void 0===_d?"Item":_d,_e=_a.ariaLabel,ariaLabel=void 0===_e?"":_e,_f=_a.active,active=void 0!==_f&&_f,_g=_a.children,children=void 0===_g?null:_g,onClick=_a.onClick,_h=_a.disabled,disabled=void 0!==_h&&_h,_j=_a.className,className=void 0===_j?"":_j,props=__rest(_a,["icon","href","label","ariaLabel","active","children","onClick","disabled","className"]);if(children)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children});var iconElement=icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon,size:"18",color:"jn-text-theme-default",className:label?"jn-mr-1":""}):null,combinedClassName="juno-breadcrumb-item \n    ".concat("\n  jn-text-sm\n  jn-text-theme-high\n  jn-flex\n  jn-gap-1\n  jn-items-center\n"," \n    ").concat(disabled?"juno-breadcrumb-item-disabled":""," \n    ").concat(active?"juno-breadcrumb-item-active":""," \n    ").concat(className);if(active||disabled)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",__assign({className:combinedClassName},props,{children:[iconElement,label]}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:combinedClassName},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href,className:"\n  jn-text-theme-high\n  jn-inline-flex\n","aria-label":ariaLabel||label,onClick:function(event){onClick&&!disabled&&onClick(event)},children:[iconElement,label]})}))};try{BreadcrumbItem.displayName="BreadcrumbItem",BreadcrumbItem.__docgenInfo={description:"An individual item in a Breadcrumb component",displayName:"BreadcrumbItem",props:{icon:{defaultValue:{value:"null"},description:"The icon type to display in the breadcrumb item.",name:"icon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "default" | "download" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},href:{defaultValue:{value:"#"},description:"A URL the breadcrumb item points to for navigation.",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:{value:"Item"},description:"The text to display inside the breadcrumb item.",name:"label",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The value for the aria-label attribute, used to improve accessibility.",name:"ariaLabel",required:!1,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"Determines if this item is the last or currently active breadcrumb.",name:"active",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"The click event handler for the breadcrumb item.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},disabled:{defaultValue:{value:"false"},description:"If true, disables the breadcrumb item.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS class names to apply to the breadcrumb item for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Custom content to render within the breadcrumb item, replacing the default content.",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BreadcrumbItem/BreadcrumbItem.component.tsx#BreadcrumbItem"]={docgenInfo:BreadcrumbItem.__docgenInfo,name:"BreadcrumbItem",path:"src/components/BreadcrumbItem/BreadcrumbItem.component.tsx#BreadcrumbItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Stack/Stack.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},baseStack=function(direction,gap,wrap){return"\n      ".concat("vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row","\n      ").concat(wrap&&"jn-flex-wrap","\n      ").concat(function(gap){switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}}(gap),"\n    ")},alignItems=function(alignment){switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=function(distribution){switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=function(_a){var _b=_a.direction,direction=void 0===_b?"horizontal":_b,_c=_a.gap,gap=void 0===_c?"0":_c,_d=_a.alignment,alignment=void 0===_d?"stretch":_d,_e=_a.distribution,distribution=void 0===_e?"start":_e,_f=_a.wrap,wrap=void 0!==_f&&_f,_g=_a.className,className=void 0===_g?"":_g,_h=_a.children,children=void 0===_h?null:_h,props=__rest(_a,["direction","gap","alignment","distribution","wrap","className","children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"juno-stack ".concat(baseStack(direction,gap,wrap)," ").concat(alignItems(alignment)," ").concat(justifyItems(distribution)," ").concat(className||"")},props,{children}))};try{Stack.displayName="Stack",Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",displayName:"Stack",props:{className:{defaultValue:{value:""},description:"Pass css class names",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"Stack items horizontally or vertically",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignment:{defaultValue:{value:"stretch"},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"baseline"'},{value:'"stretch"'}]}},distribution:{defaultValue:{value:"start"},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",name:"distribution",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"Specify whether the Stack children should be allowed to wrap or not",name:"wrap",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"0"},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",name:"gap",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"0"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"0.5"'},{value:'"1.5"'},{value:'"2.5"'},{value:'"3.5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:'"14"'},{value:'"16"'},{value:'"20"'},{value:'"24"'},{value:'"28"'},{value:'"32"'},{value:'"36"'},{value:'"40"'},{value:'"44"'},{value:'"48"'},{value:'"52"'},{value:'"56"'},{value:'"60"'},{value:'"64"'},{value:'"72"'},{value:'"80"'},{value:'"96"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stack/Stack.component.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Stack/Stack.component.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Stack/Stack.component.tsx")},"./src/components/Breadcrumb/Breadcrumb.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumb_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),BreadcrumbItem_component=__webpack_require__("./src/components/BreadcrumbItem/BreadcrumbItem.component.tsx"),Icon=__webpack_require__("./src/components/Icon/index.ts"),Stack=__webpack_require__("./src/components/Stack/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Breadcrumb=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.className,className=void 0===_c?"":_c,props=__rest(_a,["children","className"]),childrenArray=react.Children.toArray(children).filter(react.isValidElement),breadcrumbElementsWithSeparators=childrenArray.map((function(child,index){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem_component.J,__assign({},child.props)),index<childrenArray.length-1&&(0,jsx_runtime.jsx)(Icon.I,{icon:"chevronRight"})]},index)}));return(0,jsx_runtime.jsx)(Stack.B,__assign({className:"juno-breadcrumb ".concat(className),gap:"1"},props,{children:breadcrumbElementsWithSeparators}))};try{Breadcrumb.displayName="Breadcrumb",Breadcrumb.__docgenInfo={description:"A generic Breadcrumb component.\nUse this to wrap BreadcrumbItem or other custom components in a breadcrumb.",displayName:"Breadcrumb",props:{className:{defaultValue:{value:""},description:"Additional CSS styles to apply to the breadcrumb for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Optional React nodes or a collection of React nodes to be rendered as custom content.\nThe BreadcrumbItem component is typically used.",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumb/Breadcrumb.component.tsx#Breadcrumb"]={docgenInfo:Breadcrumb.__docgenInfo,name:"Breadcrumb",path:"src/components/Breadcrumb/Breadcrumb.component.tsx#Breadcrumb"})}catch(__react_docgen_typescript_loader_error){}var Breadcrumb_stories_assign=function(){return Breadcrumb_stories_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},Breadcrumb_stories_assign.apply(this,arguments)},Breadcrumb_stories_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Breadcrumb_stories={title:"Components/Breadcrumb/Breadcrumb",component:Breadcrumb,argTypes:{children:{control:!1}}};var Default={render:function(_a){var children=_a.children,args=Breadcrumb_stories_rest(_a,["children"]);return(0,jsx_runtime.jsx)(Breadcrumb,Breadcrumb_stories_assign({},args,{children}))},args:{children:[(0,jsx_runtime.jsx)(BreadcrumbItem_component.J,{label:"",icon:"home"},"1"),(0,jsx_runtime.jsx)(BreadcrumbItem_component.J,{label:"Breadcrumb Item"},"2"),(0,jsx_runtime.jsx)(BreadcrumbItem_component.J,{label:"Breadcrumb Item with Icon",icon:"place"},"3"),(0,jsx_runtime.jsx)(BreadcrumbItem_component.J,{label:"Disabled Item ",disabled:!0},"4"),(0,jsx_runtime.jsx)(BreadcrumbItem_component.J,{label:"Active Item",active:!0},"5")]}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<BreadcrumbItem key="1" label="" icon="home" />, <BreadcrumbItem key="2" label="Breadcrumb Item" />, <BreadcrumbItem key="3" label="Breadcrumb Item with Icon" icon="place" />, <BreadcrumbItem key="4" label="Disabled Item " disabled />, <BreadcrumbItem key="5" label="Active Item" active />]\n  }\n}',...Default.parameters?.docs?.source}}}}}]);