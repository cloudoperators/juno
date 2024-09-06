"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4727],{"./src/components/CodeBlock/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CodeBlock});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),JsonViewer_component=__webpack_require__("./src/components/JsonViewer/JsonViewer.component.js"),Icon=__webpack_require__("./src/components/Icon/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const preStyles=wrap=>`\n    jn-p-6\n    ${wrap?"jn-break-words jn-break-all jn-whitespace-pre-wrap":"jn-overflow-x-auto"}\n  `,sizeStyles=size=>{switch(size){case"small":return"\n        juno-codeblock-pre-small\n        jn-max-h-64\n        jn-overflow-y-auto\n      ";case"medium":return"\n        juno-codeblock-pre-medium\n        jn-max-h-[32rem]\n        jn-overflow-y-auto\n      ";case"large":return"\n        juno-codeblock-pre-large\n        jn-max-h-[56rem]\n        jn-overflow-y-auto\n      ";default:return""}},jsonViewStyles={fontFamily:"IBM Plex Mono",fontSize:"0.875rem",padding:"1.5rem"},jsonTheme={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"},CodeBlock=_ref=>{let{content="",children=null,heading,wrap=!0,size="auto",copy=!0,lang="",className="",...props}=_ref;const[isCopied,setIsCopied]=(0,react.useState)(!1),timeoutRef=react.useRef(null);react.useEffect((()=>()=>clearTimeout(timeoutRef.current)),[]);const theCode=(0,react.useRef)(null);return react.createElement("div",_extends({className:`juno-code-block \n  jn-bg-theme-code-block\n  jn-rounded\n ${lang?`juno-code-block-lang-${lang}`:""} ${className}`,"data-lang":lang||null},props),heading&&heading.length?react.createElement("div",{className:"juno-codeblock-heading \n  jn-text-sm\n  jn-border-b-[1px]\n  jn-border-theme-codeblock-bar \n  jn-h-[3.4375rem]\n  jn-flex\n"},react.createElement("span",{className:"\n  jn-flex\n  jn-font-bold\n  jn-px-[1.5625rem]\n  jn-items-center\n"},heading)):"","json"===lang?react.createElement(JsonViewer_component.p,{data:content,expanded:3,theme:jsonTheme,style:jsonViewStyles}):react.createElement("pre",{className:`juno-code-block-pre ${preStyles(wrap)} ${sizeStyles(size)}`},react.createElement("code",{className:"\n  jn-bg-theme-code-block\n  jn-text-sm\n",ref:theCode},content||children)),copy?react.createElement("div",{className:"juno-codeblock-bottombar \n  jn-flex \n  jn-justify-end \n  jn-px-3\n  jn-py-2 \n  jn-border-t-[1px]\n  jn-border-theme-codeblock-bar\n"},react.createElement("span",{className:"\n  jn-font-bold \n  jn-text-sm \n  jn-mr-4 \n  jn-mt-1\n"},isCopied?"Copied!":""),react.createElement(Icon.I,{icon:"contentCopy",onClick:()=>{const textToCopy="json"===lang?JSON.stringify(content||children):theCode.current.textContent;navigator.clipboard.writeText(textToCopy),setIsCopied(!0),clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>setIsCopied(!1)),1e3)}})):"")};CodeBlock.propTypes={content:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().object]),children:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().object]),heading:prop_types_default().string,wrap:prop_types_default().bool,size:prop_types_default().oneOf(["auto","small","medium","large"]),copy:prop_types_default().bool,lang:prop_types_default().string,className:prop_types_default().string},CodeBlock.__docgenInfo={description:"A basic CodeBlock component. Accepts a content prop or children. Will render a pre-wrapped code element.",methods:[],displayName:"CodeBlock",props:{content:{defaultValue:{value:'""',computed:!1},description:"The content to render. Will override children if passed.",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children to render. Will be overridden by content prop if passed as well.",type:{name:"union",value:[{name:"node"},{name:"object"}]},required:!1},wrap:{defaultValue:{value:"true",computed:!1},description:"Set whether the code should wrap or not. Default is true.",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"auto"',computed:!1},description:'Set the size of the CodeBlock. Default is "auto"',type:{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},copy:{defaultValue:{value:"true",computed:!1},description:"Render a button to copy the code to the clipboard. Defaults to true",type:{name:"bool"},required:!1},lang:{defaultValue:{value:'""',computed:!1},description:'Pass a lang prop. Passing "json" will render a fully-featured JsonView. Will also add a data-lang-attribute to the codeblock',type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to the wrapper of the CodeBlock",type:{name:"string"},required:!1},heading:{description:"Pass at title to render. Will look like a single tab.",type:{name:"string"},required:!1}}}},"./src/components/Tab/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Tab});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/react-tabs/esm/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),Icon_component=__webpack_require__("./src/components/Icon/Icon.component.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Tab=_ref=>{let{children=null,label="",icon,disabled=!1,className="",...props}=_ref;return react.createElement(esm.oz,_extends({className:`juno-tab \n\tjn-flex\n\tjn-font-bold\n\tjn-px-[1.5625rem]\n\tjn-items-center\n\tjn-cursor-pointer\n\tfocus:jn-outline-none \n ${className}`,disabledClassName:"juno-tab-disabled \n\tjn-pointer-events-none\n\tjn-opacity-50\n",selectedClassName:"juno-tab-selected \n\tjn-border-b-[3px]\n\tjn-border-theme-tab-active-bottom\n",disabled},props),icon?react.createElement(Icon.I,{icon,size:"18",className:"\n\tjn-mr-2\n"}):null,children||label)};Tab.tabsRole="Tab",Tab.propTypes={children:prop_types_default().node,label:prop_types_default().string,icon:prop_types_default().oneOf(Icon_component.g),disabled:prop_types_default().bool,className:prop_types_default().string},Tab.__docgenInfo={description:"A Tab Component representing an individual Tab inside a wrapping TabList inside a wrapping Tabs component. Not to be used standalone outside of the mentioned parent components.",methods:[],displayName:"Tab",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render inside the Tab (-button)",type:{name:"node"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"The Tab label (only rendered when no children are supplied)",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Tab is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom classNames to the Tab",type:{name:"string"},required:!1},icon:{description:"Pass the name of an icon to render in the Tab. Can be any icon included with Juno.",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1}}}},"./src/components/TabList/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>TabList});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/react-tabs/esm/index.js"),Tabs_component=__webpack_require__("./src/components/Tabs/Tabs.component.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const getVariantStyles=variant=>{switch(variant){case"main":return"jn-bg-theme-tab-navigation-top";case"codeblocks":return"\n\t\t\t\tjn-text-sm\n\t\t\t\tjn-bg-theme-code-block\n\t\t\t\tjn-border-b-[1px]\n\t\t\t\tjn-border-theme-codeblock-bar \n\t\t\t";default:return"\n\t\t\t\tjn-border-b-[1px] \n\t\t\t\tjn-border-theme-tab-navigation-content-bottom\n\t\t\t"}},TabList=_ref=>{let{variant="content",children=null,...props}=_ref;const tabsVariant=((0,Tabs_component.f)()||{}).variant||variant;return react.createElement(esm.wb,_extends({className:`juno-tablist juno-tablist-${tabsVariant} \n\tjn-flex\n\tjn-h-[3.4375rem]\n ${getVariantStyles(tabsVariant)}`},props),children)};TabList.tabsRole="TabList",TabList.propTypes={variant:prop_types_default().oneOf(["main","content","codeblocks"]),children:prop_types_default().node},TabList.__docgenInfo={description:"A tabList component wraps all individual Tabs inside a parent Tabs component",methods:[],displayName:"TabList",props:{variant:{defaultValue:{value:'"content"',computed:!1},description:"Pick the TabList style",type:{name:"enum",value:[{value:'"main"',computed:!1},{value:'"content"',computed:!1},{value:'"codeblocks"',computed:!1}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The individual child Tabs to render",type:{name:"node"},required:!1}}}},"./src/components/TabPanel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TabPanel});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/react-tabs/esm/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const TabPanel=_ref=>{let{children=null,className="",...props}=_ref;return react.createElement(esm.Kp,_extends({className:`juno-tabpanel ${className}`,selectedClassName:"juno-tabpanel-selected"},props),children)};TabPanel.tabsRole="TabPanel",TabPanel.propTypes={children:prop_types_default().node,className:prop_types_default().string},TabPanel.__docgenInfo={description:"The TabPanel holds content related to a Tab in a TabList in a wrapping Tab component. Not to be used standalone / outside a Tabs wrapper.",methods:[],displayName:"TabPanel",props:{children:{defaultValue:{value:"null",computed:!1},description:"The content to show/render when the associated Tab is selected",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom classList to the TabPanel",type:{name:"string"},required:!1}}}},"./src/components/Tabs/Tabs.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>useTabsContext,t:()=>Tabs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_tabs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-tabs/esm/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const TabsContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),useTabsContext=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(TabsContext),Tabs=_ref=>{let{children=null,defaultIndex,selectedIndex,onSelect,variant="content",className="",...props}=_ref;const[passedIndex,setPassedIndex]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedIndex);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setPassedIndex(selectedIndex)}),[selectedIndex]);const tabsConf={variant};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabsContext.Provider,{value:tabsConf},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__.tU,_extends({className:`juno-tabs juno-tabs-${variant} ${className}`,defaultIndex,selectedIndex:passedIndex,onSelect:index=>{onSelect&&onSelect(index)}},props),children))};Tabs.tabsRole="Tabs",Tabs.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,defaultIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,selectedIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,onSelect:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["main","content","codeblocks"]),className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},Tabs.__docgenInfo={description:"A Tabs component.\nThe parent wrapping TabList, Tab, and TabPanel subcomponents.\nFor a navigation that looks like tabs, but runs onClick handlers or contains hrefs, use TabNavigation instead.\nTabs are used to provide a tabbed section within the content area when combining static content and tabbed content on the same page. You will probably want to use a 'Container' (px=false) inside the TabPanels to get nice padding.",methods:[],displayName:"Tabs",props:{children:{defaultValue:{value:"null",computed:!1},description:"All the child elements of the Tabs: Tab(s) inside a TabList and TabPanel(s)",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"content"',computed:!1},description:"Switch on Main Tab styles and context if needed",type:{name:"enum",value:[{value:'"main"',computed:!1},{value:'"content"',computed:!1},{value:'"codeblocks"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to the whole Tabs construct",type:{name:"string"},required:!1},defaultIndex:{description:'The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".',type:{name:"number"},required:!1},selectedIndex:{description:'The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.',type:{name:"number"},required:!1},onSelect:{description:'Handler required in "Controlled Mode"',type:{name:"func"},required:!1}}}},"./src/components/Tabs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>_Tabs_component__WEBPACK_IMPORTED_MODULE_0__.t});var _Tabs_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tabs/Tabs.component.js")},"./src/components/CodeBlock/CodeBlock.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeBlocksWithTabs:()=>CodeBlocksWithTabs,Default:()=>Default,DefaultWithChildren:()=>DefaultWithChildren,DefaultWithHeading:()=>DefaultWithHeading,FixedSize:()=>FixedSize,JSONView:()=>JSONView,NonWrappingCodeBlock:()=>NonWrappingCodeBlock,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CodeBlock/index.js"),_Tabs_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/index.js"),_TabList_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TabList/index.js"),_Tab_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tab/index.js"),_Tab_Tab_stories_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Tab/Tab.stories.js"),_TabPanel_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/TabPanel/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CodeBlock",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.N,argTypes:{size:{options:["auto","small","medium","large"],control:{type:"select"}},children:{control:!1}}},TabsTemplate=_ref=>{let{tabs,codeBlocks}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tabs_index_js__WEBPACK_IMPORTED_MODULE_2__.t,{variant:"codeblocks"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabList_index_js__WEBPACK_IMPORTED_MODULE_3__.w,null,tabs.map(((tab,t)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tab_index_js__WEBPACK_IMPORTED_MODULE_4__.o,_extends({},tab,{key:`t-${t}`}))))),codeBlocks.map(((codeBlock,c)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabPanel_index_js__WEBPACK_IMPORTED_MODULE_6__.K,{key:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.N,codeBlock)))))};TabsTemplate.propTypes={tabs:prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,codeBlocks:prop_types__WEBPACK_IMPORTED_MODULE_7___default().array};const Default={parameters:{docs:{description:{story:"Default code block"}}},args:{content:"Some code goes here"}},DefaultWithChildren={parameters:{docs:{description:{story:"Code Block with children"}}},args:{lang:"html",children:'<html lang="en">\n    <head>\n      <title="Multi-line Html" />\n    </head>\n    <body>\n      <main>\n      </main>\n    </body>\n  </html>'}},DefaultWithHeading={parameters:{docs:{description:{story:"Code Block with Heading WIP"}}},args:{children:"<CodeBlock>\n    <p>some code here</p>\n  </CodeBlock>",heading:"CodeBlock.jsx"}},FixedSize={parameters:{docs:{description:{story:"Fixed size CodeBlock with overflow scrollbars"}}},args:{size:"small",content:" -------- BEGIN CERTIFICATE -------- \n    30818902818100C4A06B7B52F8D17DC1C0\n    B47362C64AB799AAE19E245A7559E9CEEC\n    7D8AA4DF07CB0B21FDFD763C63A313A668\n    FE9D764ED913C51A676788DB62AF624F42\n    2C2F112C1316922AA5D37823CD9F43D1FC\n    54513D14B2-9E36991F08A042C42EAAEEE\n    5FE8E2CB10167174A359CEBF6FACC2C9CA\n    933AD403137EE2C3F4CBED9460129C72B0\n    030100030818902818100C4A06B7B52F8D\n    17DC1CCB47362C64AB799AAE19E245A755\n    9E9CEEC7D8AA4DF07CB0B21FDFD763C63A\n    313A668FE9D764ED913C51A676788DB62A\n    F624F422C2F112C1316922AA5D37823CD9\n    F43D1FC54513D14B2-9E36991F08A042C4\n    2EAAEEE5FE8E2CB10167174A359CEBF6FA\n    CC2C9CA933AD403137E2C3F4CBED946012\n    9C72B020301000\n    -------- END CERTIFICATE -------- "}},NonWrappingCodeBlock={parameters:{docs:{description:{story:"Pass `wrap={false}` to disable line-wrapping"}}},args:{wrap:!1,children:"-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------"}},JSONView={parameters:{docs:{description:{story:"Json View"}}},args:{lang:"json",heading:"Json CodeBlock",content:{someKey:"some value",someOtherKey:"some other value",nestedKeys:{firstNestedKey:"first nested value"}}}},CodeBlocksWithTabs={render:TabsTemplate,parameters:{docs:{description:{story:"Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant='codeblocks'` to the `<Tabs>` component."}}},args:{tabs:[{..._Tab_Tab_stories_js__WEBPACK_IMPORTED_MODULE_5__.Default.args,children:"UserData.jsx",key:"t-0"},{..._Tab_Tab_stories_js__WEBPACK_IMPORTED_MODULE_5__.Default.args,children:"data.json",key:"t-1"},{..._Tab_Tab_stories_js__WEBPACK_IMPORTED_MODULE_5__.Default.args,children:"UserData.html",key:"t-2"}],codeBlocks:[{content:"<UserData name='User' data={data.json} />"},{lang:"json",content:{firstName:"Joan",lastName:"Clarke",placeOfBirth:"West Norwood, London, England"}},{content:"<div>\n    <dl>\n      <dt>First Name</dt>\n      <dd>Joan</dd>\n      <dt>Last Name</dt>\n      <dd>Clarke</dd>\n      <dt>Place of Birth</dt>\n      <dd>West Norwood, London, England</dd>\n    </dl>\n  </div>"}]}},__namedExportsOrder=["Default","DefaultWithChildren","DefaultWithHeading","FixedSize","NonWrappingCodeBlock","JSONView","CodeBlocksWithTabs"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Default code block"\n      }\n    }\n  },\n  args: {\n    content: "Some code goes here"\n  }\n}',...Default.parameters?.docs?.source}}},DefaultWithChildren.parameters={...DefaultWithChildren.parameters,docs:{...DefaultWithChildren.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Code Block with children"\n      }\n    }\n  },\n  args: {\n    lang: "html",\n    children: `<html lang="en">\n    <head>\n      <title="Multi-line Html" />\n    </head>\n    <body>\n      <main>\n      </main>\n    </body>\n  </html>`\n  }\n}',...DefaultWithChildren.parameters?.docs?.source}}},DefaultWithHeading.parameters={...DefaultWithHeading.parameters,docs:{...DefaultWithHeading.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Code Block with Heading WIP"\n      }\n    }\n  },\n  args: {\n    children: `<CodeBlock>\n    <p>some code here</p>\n  </CodeBlock>`,\n    heading: "CodeBlock.jsx"\n  }\n}',...DefaultWithHeading.parameters?.docs?.source}}},FixedSize.parameters={...FixedSize.parameters,docs:{...FixedSize.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Fixed size CodeBlock with overflow scrollbars"\n      }\n    }\n  },\n  args: {\n    size: "small",\n    content: ` -------- BEGIN CERTIFICATE -------- \n    30818902818100C4A06B7B52F8D17DC1C0\n    B47362C64AB799AAE19E245A7559E9CEEC\n    7D8AA4DF07CB0B21FDFD763C63A313A668\n    FE9D764ED913C51A676788DB62AF624F42\n    2C2F112C1316922AA5D37823CD9F43D1FC\n    54513D14B2-9E36991F08A042C42EAAEEE\n    5FE8E2CB10167174A359CEBF6FACC2C9CA\n    933AD403137EE2C3F4CBED9460129C72B0\n    030100030818902818100C4A06B7B52F8D\n    17DC1CCB47362C64AB799AAE19E245A755\n    9E9CEEC7D8AA4DF07CB0B21FDFD763C63A\n    313A668FE9D764ED913C51A676788DB62A\n    F624F422C2F112C1316922AA5D37823CD9\n    F43D1FC54513D14B2-9E36991F08A042C4\n    2EAAEEE5FE8E2CB10167174A359CEBF6FA\n    CC2C9CA933AD403137E2C3F4CBED946012\n    9C72B020301000\n    -------- END CERTIFICATE -------- `\n  }\n}',...FixedSize.parameters?.docs?.source}}},NonWrappingCodeBlock.parameters={...NonWrappingCodeBlock.parameters,docs:{...NonWrappingCodeBlock.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Pass `wrap={false}` to disable line-wrapping"\n      }\n    }\n  },\n  args: {\n    wrap: false,\n    children: "-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------"\n  }\n}',...NonWrappingCodeBlock.parameters?.docs?.source}}},JSONView.parameters={...JSONView.parameters,docs:{...JSONView.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Json View"\n      }\n    }\n  },\n  args: {\n    lang: "json",\n    heading: "Json CodeBlock",\n    content: {\n      someKey: "some value",\n      someOtherKey: "some other value",\n      nestedKeys: {\n        firstNestedKey: "first nested value"\n      }\n    }\n  }\n}',...JSONView.parameters?.docs?.source}}},CodeBlocksWithTabs.parameters={...CodeBlocksWithTabs.parameters,docs:{...CodeBlocksWithTabs.parameters?.docs,source:{originalSource:'{\n  render: TabsTemplate,\n  parameters: {\n    docs: {\n      description: {\n        story: "Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant=\'codeblocks\'` to the `<Tabs>` component."\n      }\n    }\n  },\n  args: {\n    tabs: [{\n      ...TabStory.args,\n      children: "UserData.jsx",\n      key: "t-0"\n    }, {\n      ...TabStory.args,\n      children: "data.json",\n      key: "t-1"\n    }, {\n      ...TabStory.args,\n      children: "UserData.html",\n      key: "t-2"\n    }],\n    codeBlocks: [{\n      content: "<UserData name=\'User\' data={data.json} />"\n    }, {\n      lang: "json",\n      content: {\n        firstName: "Joan",\n        lastName: "Clarke",\n        placeOfBirth: "West Norwood, London, England"\n      }\n    }, {\n      content: `<div>\n    <dl>\n      <dt>First Name</dt>\n      <dd>Joan</dd>\n      <dt>Last Name</dt>\n      <dd>Clarke</dd>\n      <dt>Place of Birth</dt>\n      <dd>West Norwood, London, England</dd>\n    </dl>\n  </div>`\n    }]\n  }\n}',...CodeBlocksWithTabs.parameters?.docs?.source}}}},"./src/components/Tab/Tab.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tab/index.js"),_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/Icon.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Tabs/Tab",component:_index_js__WEBPACK_IMPORTED_MODULE_0__.o,argTypes:{icon:{options:["default",..._Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_1__.g],control:{type:"select"}},children:{control:!1}}},Default={args:{label:"A Tab Label",children:"Tab 1"}},WithIcon={args:{children:"Tab with Icon",icon:"danger"}},__namedExportsOrder=["Default","WithIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "A Tab Label",\n    children: "Tab 1"\n  }\n}',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Tab with Icon",\n    icon: "danger"\n  }\n}',...WithIcon.parameters?.docs?.source}}}}}]);