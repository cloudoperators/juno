"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4105],{"./src/components/TabList/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>_TabList_component__WEBPACK_IMPORTED_MODULE_0__.w});var _TabList_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TabList/TabList.component.tsx")},"./src/components/TabPanel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TabPanel});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react-tabs/esm/index.js")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TabPanel=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.className,className=void 0===_c?"":_c,props=__rest(_a,["children","className"]);return(0,jsx_runtime.jsx)(esm.Kp,__assign({className:"juno-tabpanel ".concat(className),selectedClassName:"juno-tabpanel-selected"},props,{children}))};TabPanel.tabsRole="TabPanel";try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"The TabPanel holds content related to a Tab in a TabList in a wrapping Tab component. Not to be used standalone / outside a Tabs wrapper.",displayName:"TabPanel",props:{children:{defaultValue:{value:"null"},description:"The content to show/render when the associated Tab is selected",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Add a custom classList to the TabPanel",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabPanel/TabPanel.component.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"src/components/TabPanel/TabPanel.component.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>_Tabs_component__WEBPACK_IMPORTED_MODULE_0__.t});var _Tabs_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tabs/Tabs.component.tsx")},"./src/components/Tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlledTabs:()=>ControlledTabs,Default:()=>Default,TabsWithIcons:()=>TabsWithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/index.ts"),_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tab/Tab.component.tsx"),_TabList_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/TabList/index.ts"),_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/TabPanel/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Tabs/Tabs",component:_index__WEBPACK_IMPORTED_MODULE_2__.t,argTypes:{variant:{options:["content","main"],control:{type:"radio"}},children:{control:!1},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}}};var Template=function(_a){var tabs=_a.tabs,tabpanels=_a.tabpanels,args=__rest(_a,["tabs","tabpanels"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_2__.t,__assign({},args,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabList_index__WEBPACK_IMPORTED_MODULE_4__.w,{children:tabs}),tabpanels]}))},Default={render:Template,args:{tabs:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{children:"Tab 1"},"t-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{children:"Tab 2"},"t-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{children:"Tab 3"},"t-3")],tabpanels:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Content 1"},"tp-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Content 2"},"tp-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Content 3"},"tp-3")]}},TabsWithIcons={render:Template,args:{tabs:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{icon:"warning",children:"Warning"},"t-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{icon:"danger",children:"Danger"},"t-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{icon:"info",children:"Info"},"t-3")],tabpanels:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Warning Content"},"tp-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Danger Content"},"tp-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Info Content"},"tp-1")]}},ControlledTabs={render:function(_a){var selectedIndex=_a.selectedIndex,onSelect=_a.onSelect,tabs=_a.tabs,tabpanels=_a.tabpanels,args=__rest(_a,["selectedIndex","onSelect","tabs","tabpanels"]),_b=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),i=_b[0],setI=_b[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setI(selectedIndex)}),[selectedIndex]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_2__.t,__assign({},args,{selectedIndex:i,onSelect:function(idx){setI(idx),onSelect&&onSelect(idx)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabList_index__WEBPACK_IMPORTED_MODULE_4__.w,{children:tabs}),tabpanels]}))},args:{tabs:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{children:"Tab 1"},"t-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{children:"Tab 2"},"t-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tab_Tab_component__WEBPACK_IMPORTED_MODULE_3__.o,{children:"Tab 3"},"t-3")],tabpanels:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Content 1"},"tp-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Content 2"},"tp-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel_index__WEBPACK_IMPORTED_MODULE_5__.K,{children:"Content 3"},"tp-3")],selectedIndex:1,defaultIndex:null,onSelect:function(){}}};const __namedExportsOrder=["Default","TabsWithIcons","ControlledTabs"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],\n    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>]\n  }\n}',...Default.parameters?.docs?.source}}},TabsWithIcons.parameters={...TabsWithIcons.parameters,docs:{...TabsWithIcons.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    tabs: [<Tab key="t-1" icon="warning">\n        Warning\n      </Tab>, <Tab key="t-2" icon="danger">\n        Danger\n      </Tab>, <Tab key="t-3" icon="info">\n        Info\n      </Tab>],\n    tabpanels: [<TabPanel key="tp-1">Warning Content</TabPanel>, <TabPanel key="tp-1">Danger Content</TabPanel>, <TabPanel key="tp-1">Info Content</TabPanel>]\n  }\n}',...TabsWithIcons.parameters?.docs?.source}}},ControlledTabs.parameters={...ControlledTabs.parameters,docs:{...ControlledTabs.parameters?.docs,source:{originalSource:'{\n  render: ControlledTemplate,\n  args: {\n    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],\n    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>],\n    selectedIndex: 1,\n    defaultIndex: null,\n    onSelect: () => {}\n  }\n}',...ControlledTabs.parameters?.docs?.source}}}}}]);