"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4727],{"./src/components/CodeBlock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CodeBlock});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),JsonViewer=__webpack_require__("./src/components/JsonViewer/index.ts"),Icon=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},preStyles=function(wrap){return"\n    jn-p-6\n    ".concat(wrap?"jn-break-words jn-break-all jn-whitespace-pre-wrap":"jn-overflow-x-auto","\n  ")},sizeStyles=function(size){switch(size){case"small":return"\n        juno-codeblock-pre-small\n        jn-max-h-64\n        jn-overflow-y-auto\n      ";case"medium":return"\n        juno-codeblock-pre-medium\n        jn-max-h-[32rem]\n        jn-overflow-y-auto\n      ";case"large":return"\n        juno-codeblock-pre-large\n        jn-max-h-[56rem]\n        jn-overflow-y-auto\n      ";default:return""}},jsonViewStyles={fontFamily:"IBM Plex Mono",fontSize:"0.875rem",padding:"1.5rem"},jsonTheme={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"},CodeBlock=function(_a){var _b=_a.content,content=void 0===_b?"":_b,_c=_a.children,children=void 0===_c?null:_c,heading=_a.heading,_d=_a.wrap,wrap=void 0===_d||_d,_e=_a.size,size=void 0===_e?"auto":_e,_f=_a.copy,copy=void 0===_f||_f,_g=_a.lang,lang=void 0===_g?"":_g,_h=_a.className,className=void 0===_h?"":_h,props=__rest(_a,["content","children","heading","wrap","size","copy","lang","className"]),_j=(0,react.useState)(!1),isCopied=_j[0],setIsCopied=_j[1],timeoutRef=react.useRef(null);react.useEffect((function(){return function(){timeoutRef.current&&clearTimeout(timeoutRef.current)}}),[]);var theCode=(0,react.useRef)(null),handleCopyClick=(0,react.useCallback)((function(){var _a,textToCopy="json"===lang?JSON.stringify(content||children):null===(_a=theCode.current)||void 0===_a?void 0:_a.textContent;textToCopy&&navigator.clipboard.writeText(textToCopy).catch((function(){console.warn("Cannot copy text to clipboard")})),setIsCopied(!0),timeoutRef.current&&clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((function(){return setIsCopied(!1)}),1e3)}),[content,children,lang]);return(0,jsx_runtime.jsxs)("div",__assign({className:"juno-code-block ".concat("\n  jn-bg-theme-code-block\n  jn-rounded\n"," ").concat(lang?"juno-code-block-lang-".concat(lang):""," ").concat(className),"data-lang":lang||null},props,{children:[heading&&heading.length?(0,jsx_runtime.jsx)("div",{className:"juno-codeblock-heading ".concat("\n  jn-text-sm\n  jn-border-b-[1px]\n  jn-border-theme-codeblock-bar \n  jn-h-[3.4375rem]\n  jn-flex\n"),children:(0,jsx_runtime.jsx)("span",{className:"".concat("\n  jn-flex\n  jn-font-bold\n  jn-px-[1.5625rem]\n  jn-items-center\n"),children:heading})}):"","json"===lang?(0,jsx_runtime.jsx)(JsonViewer.p,{data:content,expanded:3,theme:jsonTheme,style:jsonViewStyles}):(0,jsx_runtime.jsx)("pre",{className:"juno-code-block-pre ".concat(preStyles(wrap)," ").concat(sizeStyles(size)),children:(0,jsx_runtime.jsx)("code",{className:"".concat("\n  jn-bg-theme-code-block\n  jn-text-sm\n"),ref:theCode,children:content||children})}),copy?(0,jsx_runtime.jsxs)("div",{className:"juno-codeblock-bottombar ".concat("\n  jn-flex \n  jn-justify-end \n  jn-px-3\n  jn-py-2 \n  jn-border-t-[1px]\n  jn-border-theme-codeblock-bar\n"),children:[(0,jsx_runtime.jsx)("span",{className:"".concat("\n  jn-font-bold \n  jn-text-sm \n  jn-mr-4 \n  jn-mt-1\n"),children:isCopied?"Copied!":""}),(0,jsx_runtime.jsx)(Icon.I,{icon:"contentCopy",onClick:handleCopyClick})]}):""]}))};try{CodeBlock.displayName="CodeBlock",CodeBlock.__docgenInfo={description:"A basic CodeBlock component. Accepts a content prop or children. Will render a pre-wrapped code element.",displayName:"CodeBlock",props:{content:{defaultValue:{value:""},description:"The content to render. Will override children if passed.",name:"content",required:!1,type:{name:"string | object"}},children:{defaultValue:{value:"null"},description:"The children to render. Will be overridden by content prop if passed as well.",name:"children",required:!1,type:{name:"any"}},heading:{defaultValue:null,description:"Pass at title to render. Will look like a single tab.",name:"heading",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"true"},description:"Set whether the code should wrap or not. Default is true.",name:"wrap",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:'Set the size of the CodeBlock. Default is "auto"',name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"auto"'},{value:'"large"'},{value:'"medium"'}]}},copy:{defaultValue:{value:"true"},description:"Render a button to copy the code to the clipboard. Defaults to true",name:"copy",required:!1,type:{name:"boolean"}},lang:{defaultValue:{value:""},description:'Pass a lang prop. Passing "json" will render a fully-featured JsonView. Will also add a data-lang-attribute to the codeblock',name:"lang",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapper of the CodeBlock",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeBlock/CodeBlock.component.tsx#CodeBlock"]={docgenInfo:CodeBlock.__docgenInfo,name:"CodeBlock",path:"src/components/CodeBlock/CodeBlock.component.tsx#CodeBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tab/Tab.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Tab});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react_tabs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react-tabs/esm/index.js")),_Icon_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Tab=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.label,label=void 0===_c?"":_c,icon=_a.icon,_d=_a.disabled,disabled=void 0!==_d&&_d,_e=_a.className,className=void 0===_e?"":_e,props=__rest(_a,["children","label","icon","disabled","className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.oz,__assign({className:"juno-tab ".concat("\n  jn-flex\n  jn-font-bold\n  jn-px-[1.5625rem]\n  jn-items-center\n  jn-cursor-pointer\n  focus:jn-outline-none \n"," ").concat(className),disabledClassName:"juno-tab-disabled ".concat("\n  jn-pointer-events-none\n  jn-opacity-50\n"),selectedClassName:"juno-tab-selected ".concat("\n  jn-border-b-[3px]\n  jn-border-theme-tab-active-bottom\n"),disabled},props,{children:[icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_3__.I,{icon,size:"18",className:"".concat("\n  jn-mr-2\n")}):null,children||label]}))};Tab.tabsRole="Tab";try{Tab.displayName="Tab",Tab.__docgenInfo={description:"A Tab Component representing an individual Tab inside a wrapping TabList inside a wrapping Tabs component. Not to be used standalone outside of the mentioned parent components.",displayName:"Tab",props:{children:{defaultValue:{value:"null"},description:"The children to render inside the Tab (-button)",name:"children",required:!1,type:{name:"any"}},label:{defaultValue:{value:""},description:"The Tab label (only rendered when no children are supplied)",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Pass the name of an icon to render in the Tab. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"default"'},{value:'"download"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},disabled:{defaultValue:{value:"false"},description:"Whether the Tab is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add custom classNames to the Tab",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tab/Tab.component.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tab/Tab.component.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tab/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>_Tab_component__WEBPACK_IMPORTED_MODULE_0__.o});var _Tab_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tab/Tab.component.tsx")},"./src/components/TabList/TabList.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>TabList});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react_tabs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react-tabs/esm/index.js")),_Tabs_Tabs_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tabs/Tabs.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},getVariantStyles=function(variant){switch(variant){case"main":return"jn-bg-theme-tab-navigation-top";case"codeblocks":return"\n        jn-text-sm\n        jn-bg-theme-code-block\n        jn-border-b-[1px]\n        jn-border-theme-codeblock-bar \n      ";default:return"\n        jn-border-b-[1px] \n        jn-border-theme-tab-navigation-content-bottom\n      "}},TabList=function(_a){var _b=_a.variant,variant=void 0===_b?"content":_b,_c=_a.children,children=void 0===_c?null:_c,props=__rest(_a,["variant","children"]),tabsVariant=((0,_Tabs_Tabs_component__WEBPACK_IMPORTED_MODULE_3__.f)()||{}).variant||variant;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.wb,__assign({className:"juno-tablist juno-tablist-".concat(tabsVariant," ").concat("\n  jn-flex\n  jn-h-[3.4375rem]\n"," ").concat(getVariantStyles(tabsVariant))},props,{children}))};TabList.tabsRole="TabList";try{TabList.displayName="TabList",TabList.__docgenInfo={description:"A tabList component wraps all individual Tabs inside a parent Tabs component",displayName:"TabList",props:{variant:{defaultValue:{value:"content"},description:"Pick the TabList style",name:"variant",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"content"'},{value:'"codeblocks"'}]}},children:{defaultValue:{value:"null"},description:"The individual child Tabs to render",name:"children",required:!1,type:{name:"ReactElement<TabProps, string | JSXElementConstructor<any>> | ReactElement<TabProps, string | JSXElementConstructor<any>>[] | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabList/TabList.component.tsx#TabList"]={docgenInfo:TabList.__docgenInfo,name:"TabList",path:"src/components/TabList/TabList.component.tsx#TabList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabList/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>_TabList_component__WEBPACK_IMPORTED_MODULE_0__.w});var _TabList_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TabList/TabList.component.tsx")},"./src/components/TabPanel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TabPanel});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react-tabs/esm/index.js")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TabPanel=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.className,className=void 0===_c?"":_c,props=__rest(_a,["children","className"]);return(0,jsx_runtime.jsx)(esm.Kp,__assign({className:"juno-tabpanel ".concat(className),selectedClassName:"juno-tabpanel-selected"},props,{children}))};TabPanel.tabsRole="TabPanel";try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"The TabPanel holds content related to a Tab in a TabList in a wrapping Tab component. Not to be used standalone / outside a Tabs wrapper.",displayName:"TabPanel",props:{children:{defaultValue:{value:"null"},description:"The content to show/render when the associated Tab is selected",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Add a custom classList to the TabPanel",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabPanel/TabPanel.component.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"src/components/TabPanel/TabPanel.component.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/Tabs.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>useTabsContext,t:()=>Tabs});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-tabs/esm/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TabsContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext({}),useTabsContext=function(){return react__WEBPACK_IMPORTED_MODULE_1__.useContext(TabsContext)},Tabs=function(_a){var _b=_a.children,children=void 0===_b?null:_b,defaultIndex=_a.defaultIndex,selectedIndex=_a.selectedIndex,onSelect=_a.onSelect,_c=_a.variant,variant=void 0===_c?"content":_c,_d=_a.className,className=void 0===_d?"":_d,props=__rest(_a,["children","defaultIndex","selectedIndex","onSelect","variant","className"]),_e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedIndex),passedIndex=_e[0],setPassedIndex=_e[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setPassedIndex(selectedIndex)}),[selectedIndex]);var tabsConf={variant};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabsContext.Provider,{value:tabsConf,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.tU,__assign({className:"juno-tabs juno-tabs-".concat(variant," ").concat(className),defaultIndex,selectedIndex:passedIndex,onSelect:function(index){onSelect&&onSelect(index)}},props,{children}))})};Tabs.tabsRole="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"A Tabs component.\nThe parent wrapping TabList, Tab, and TabPanel subcomponents.\nFor a navigation that looks like tabs, but runs onClick handlers or contains hrefs, use TabNavigation instead.\nTabs are used to provide a tabbed section within the content area when combining static content and tabbed content on the same page. You will probably want to use a 'Container' (px=false) inside the TabPanels to get nice padding.",displayName:"Tabs",props:{children:{defaultValue:{value:"null"},description:"All the child elements of the Tabs: Tab(s) inside a TabList and TabPanel(s)",name:"children",required:!1,type:{name:"TabElement"}},defaultIndex:{defaultValue:null,description:'The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".',name:"defaultIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:null,description:'The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.',name:"selectedIndex",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:'Handler required in "Controlled Mode"',name:"onSelect",required:!1,type:{name:"OnSelectHander"}},variant:{defaultValue:{value:"content"},description:"Switch on Main Tab styles and context if needed",name:"variant",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"content"'},{value:'"codeblocks"'}]}},className:{defaultValue:{value:""},description:"Add a custom className to the whole Tabs construct",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.component.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.component.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>_Tabs_component__WEBPACK_IMPORTED_MODULE_0__.t});var _Tabs_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tabs/Tabs.component.tsx")},"./src/components/CodeBlock/CodeBlock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeBlocksWithTabs:()=>CodeBlocksWithTabs,Default:()=>Default,DefaultWithChildren:()=>DefaultWithChildren,DefaultWithHeading:()=>DefaultWithHeading,FixedSize:()=>FixedSize,JSONView:()=>JSONView,NonWrappingCodeBlock:()=>NonWrappingCodeBlock,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CodeBlock/index.ts"),_Tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tabs/index.ts"),_TabList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/TabList/index.ts"),_Tab__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Tab/index.ts"),_TabPanel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/TabPanel/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},TabStory_args={label:"A Tab Label",children:"Tab 1"};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CodeBlock",component:___WEBPACK_IMPORTED_MODULE_2__.N,argTypes:{size:{options:["auto","small","medium","large"],control:{type:"select"}},children:{control:!1}}};var Default={parameters:{docs:{description:{story:"Default code block"}}},args:{content:"Some code goes here"}},DefaultWithChildren={parameters:{docs:{description:{story:"Code Block with children"}}},args:{lang:"html",children:'<html lang="en">\n    <head>\n      <title="Multi-line Html" />\n    </head>\n    <body>\n      <main>\n      </main>\n    </body>\n  </html>'}},DefaultWithHeading={parameters:{docs:{description:{story:"Code Block with Heading WIP"}}},args:{children:"<CodeBlock>\n    <p>some code here</p>\n  </CodeBlock>",heading:"CodeBlock.jsx"}},FixedSize={parameters:{docs:{description:{story:"Fixed size CodeBlock with overflow scrollbars"}}},args:{size:"small",content:" -------- BEGIN CERTIFICATE -------- \n    30818902818100C4A06B7B52F8D17DC1C0\n    B47362C64AB799AAE19E245A7559E9CEEC\n    7D8AA4DF07CB0B21FDFD763C63A313A668\n    FE9D764ED913C51A676788DB62AF624F42\n    2C2F112C1316922AA5D37823CD9F43D1FC\n    54513D14B2-9E36991F08A042C42EAAEEE\n    5FE8E2CB10167174A359CEBF6FACC2C9CA\n    933AD403137EE2C3F4CBED9460129C72B0\n    030100030818902818100C4A06B7B52F8D\n    17DC1CCB47362C64AB799AAE19E245A755\n    9E9CEEC7D8AA4DF07CB0B21FDFD763C63A\n    313A668FE9D764ED913C51A676788DB62A\n    F624F422C2F112C1316922AA5D37823CD9\n    F43D1FC54513D14B2-9E36991F08A042C4\n    2EAAEEE5FE8E2CB10167174A359CEBF6FA\n    CC2C9CA933AD403137E2C3F4CBED946012\n    9C72B020301000\n    -------- END CERTIFICATE -------- "}},NonWrappingCodeBlock={parameters:{docs:{description:{story:"Pass `wrap={false}` to disable line-wrapping"}}},args:{wrap:!1,children:"-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------"}},JSONView={parameters:{docs:{description:{story:"Json View"}}},args:{lang:"json",heading:"Json CodeBlock",content:{someKey:"some value",someOtherKey:"some other value",nestedKeys:{firstNestedKey:"first nested value"}}}},CodeBlocksWithTabs={render:function(_a){var tabs=_a.tabs,codeBlocks=_a.codeBlocks;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Tabs__WEBPACK_IMPORTED_MODULE_3__.t,{variant:"codeblocks",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabList__WEBPACK_IMPORTED_MODULE_4__.w,{children:tabs.map((function(tab,t){return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Tab__WEBPACK_IMPORTED_MODULE_5__.o,__assign({},tab,{key:"t-".concat(t)}))}))}),codeBlocks.map((function(codeBlock,c){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabPanel__WEBPACK_IMPORTED_MODULE_6__.K,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.N,__assign({},codeBlock))},c)}))]})},parameters:{docs:{description:{story:"Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant='codeblocks'` to the `<Tabs>` component."}}},args:{tabs:[__assign(__assign({},TabStory_args),{children:"UserData.jsx",key:"t-0"}),__assign(__assign({},TabStory_args),{children:"data.json",key:"t-1"}),__assign(__assign({},TabStory_args),{children:"UserData.html",key:"t-2"})],codeBlocks:[{content:"<UserData name='User' data={data.json} />"},{lang:"json",content:{firstName:"Joan",lastName:"Clarke",placeOfBirth:"West Norwood, London, England"}},{content:"<div>\n    <dl>\n      <dt>First Name</dt>\n      <dd>Joan</dd>\n      <dt>Last Name</dt>\n      <dd>Clarke</dd>\n      <dt>Place of Birth</dt>\n      <dd>West Norwood, London, England</dd>\n    </dl>\n  </div>"}]}};const __namedExportsOrder=["Default","DefaultWithChildren","DefaultWithHeading","FixedSize","NonWrappingCodeBlock","JSONView","CodeBlocksWithTabs"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Default code block"\n      }\n    }\n  },\n  args: {\n    content: "Some code goes here"\n  }\n}',...Default.parameters?.docs?.source}}},DefaultWithChildren.parameters={...DefaultWithChildren.parameters,docs:{...DefaultWithChildren.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Code Block with children"\n      }\n    }\n  },\n  args: {\n    lang: "html",\n    children: `<html lang="en">\n    <head>\n      <title="Multi-line Html" />\n    </head>\n    <body>\n      <main>\n      </main>\n    </body>\n  </html>`\n  }\n}',...DefaultWithChildren.parameters?.docs?.source}}},DefaultWithHeading.parameters={...DefaultWithHeading.parameters,docs:{...DefaultWithHeading.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Code Block with Heading WIP"\n      }\n    }\n  },\n  args: {\n    children: `<CodeBlock>\n    <p>some code here</p>\n  </CodeBlock>`,\n    heading: "CodeBlock.jsx"\n  }\n}',...DefaultWithHeading.parameters?.docs?.source}}},FixedSize.parameters={...FixedSize.parameters,docs:{...FixedSize.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Fixed size CodeBlock with overflow scrollbars"\n      }\n    }\n  },\n  args: {\n    size: "small",\n    content: ` -------- BEGIN CERTIFICATE -------- \n    30818902818100C4A06B7B52F8D17DC1C0\n    B47362C64AB799AAE19E245A7559E9CEEC\n    7D8AA4DF07CB0B21FDFD763C63A313A668\n    FE9D764ED913C51A676788DB62AF624F42\n    2C2F112C1316922AA5D37823CD9F43D1FC\n    54513D14B2-9E36991F08A042C42EAAEEE\n    5FE8E2CB10167174A359CEBF6FACC2C9CA\n    933AD403137EE2C3F4CBED9460129C72B0\n    030100030818902818100C4A06B7B52F8D\n    17DC1CCB47362C64AB799AAE19E245A755\n    9E9CEEC7D8AA4DF07CB0B21FDFD763C63A\n    313A668FE9D764ED913C51A676788DB62A\n    F624F422C2F112C1316922AA5D37823CD9\n    F43D1FC54513D14B2-9E36991F08A042C4\n    2EAAEEE5FE8E2CB10167174A359CEBF6FA\n    CC2C9CA933AD403137E2C3F4CBED946012\n    9C72B020301000\n    -------- END CERTIFICATE -------- `\n  }\n}',...FixedSize.parameters?.docs?.source}}},NonWrappingCodeBlock.parameters={...NonWrappingCodeBlock.parameters,docs:{...NonWrappingCodeBlock.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Pass `wrap={false}` to disable line-wrapping"\n      }\n    }\n  },\n  args: {\n    wrap: false,\n    children: "-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------"\n  }\n}',...NonWrappingCodeBlock.parameters?.docs?.source}}},JSONView.parameters={...JSONView.parameters,docs:{...JSONView.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Json View"\n      }\n    }\n  },\n  args: {\n    lang: "json",\n    heading: "Json CodeBlock",\n    content: {\n      someKey: "some value",\n      someOtherKey: "some other value",\n      nestedKeys: {\n        firstNestedKey: "first nested value"\n      }\n    }\n  }\n}',...JSONView.parameters?.docs?.source}}},CodeBlocksWithTabs.parameters={...CodeBlocksWithTabs.parameters,docs:{...CodeBlocksWithTabs.parameters?.docs,source:{originalSource:'{\n  render: TabsTemplate,\n  parameters: {\n    docs: {\n      description: {\n        story: "Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant=\'codeblocks\'` to the `<Tabs>` component."\n      }\n    }\n  },\n  args: {\n    tabs: [{\n      ...TabStory.args,\n      children: "UserData.jsx",\n      key: "t-0"\n    }, {\n      ...TabStory.args,\n      children: "data.json",\n      key: "t-1"\n    }, {\n      ...TabStory.args,\n      children: "UserData.html",\n      key: "t-2"\n    }],\n    codeBlocks: [{\n      content: "<UserData name=\'User\' data={data.json} />"\n    }, {\n      lang: "json",\n      content: {\n        firstName: "Joan",\n        lastName: "Clarke",\n        placeOfBirth: "West Norwood, London, England"\n      }\n    }, {\n      content: `<div>\n    <dl>\n      <dt>First Name</dt>\n      <dd>Joan</dd>\n      <dt>Last Name</dt>\n      <dd>Clarke</dd>\n      <dt>Place of Birth</dt>\n      <dd>West Norwood, London, England</dd>\n    </dl>\n  </div>`\n    }]\n  }\n}',...CodeBlocksWithTabs.parameters?.docs?.source}}}}}]);