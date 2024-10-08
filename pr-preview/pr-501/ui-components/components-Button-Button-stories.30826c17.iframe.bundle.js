"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[7721],{"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),Icon=(__webpack_require__("./src/components/Button/button.scss"),__webpack_require__("./src/components/Icon/index.ts")),Spinner=__webpack_require__("./src/components/Spinner/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},btnBase="\n  jn-font-bold\n  jn-inline-flex \n  jn-justify-center \n  jn-items-center\n  jn-rounded\n  jn-shadow-sm \n  jn-w-auto\n  focus:jn-outline-none \n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n  focus-visible:jn-ring-offset-1\n  focus-visible:jn-ring-offset-theme-focus\n  disabled:jn-opacity-50\n  disabled:jn-cursor-not-allowed\n  disabled:jn-pointer-events-none\n",getButtonPadding=function(size,variant){return"".concat("small"===size?"subdued"===variant?"\n  jn-py-[0.25rem]\n  jn-px-[0.4375rem]\n":"\n  jn-py-[0.3125rem]\n  jn-px-[0.5rem]\n":"subdued"===variant?"\n  jn-py-[0.375rem]\n  jn-px-[0.5625rem]\n":"\n  jn-py-[0.4375rem]\n  jn-px-[0.625rem] \n")},progressClass=function(progress){return progress?"in-progress":""},spinnerColorClass=function(variant){switch(variant){case"default":return"jn-text-theme-accent";case"primary":case"primary-danger":return"jn-text-white";default:return""}},Button=react.forwardRef((function(_a,ref){var label=_a.label,_b=_a.title,title=void 0===_b?null:_b,variant=_a.variant,_c=_a.size,size=void 0===_c?"default":_c,_d=_a.disabled,disabled=void 0===_d?null:_d,_e=_a.href,href=void 0===_e?null:_e,_f=_a.icon,icon=void 0===_f?null:_f,_g=_a.className,className=void 0===_g?"":_g,onClick=_a.onClick,children=_a.children,_h=_a.progress,progress=void 0!==_h&&_h,_j=_a.progressLabel,progressLabel=void 0===_j?"":_j,props=__rest(_a,["label","title","variant","size","disabled","href","icon","className","onClick","children","progress","progressLabel"]),theVariant=variant||"default",titleValue=title||label||"",buttonIcon=progress?(0,jsx_runtime.jsx)(Spinner.y,{size:"small"===size?"1.125rem":"1.5rem",color:"".concat(spinnerColorClass(theVariant))}):icon?(0,jsx_runtime.jsx)(Icon.I,{icon,title:titleValue,className:"juno-button-icon ".concat(label||children?"".concat("\n  jn-mr-2\n"):""," "),size:"small"===size?"1.125rem":"1.5rem"}):null,buttonLabel=progress&&progressLabel?progressLabel:label||children,button=(0,jsx_runtime.jsxs)("button",__assign({className:"\n          juno-button \n          juno-button-".concat(theVariant," \n          juno-button-").concat(size,"-size \n          ").concat(btnBase," \n          ").concat("small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n"," \n          ").concat(getButtonPadding(size,variant),"\n          ").concat(progressClass(progress)," \n          ").concat(className),disabled:disabled||void 0,onClick:function(event){onClick&&onClick(event)},ref},props,{type:"button",title:titleValue,children:[buttonIcon,buttonLabel]})),anchor=(0,jsx_runtime.jsxs)("a",__assign({href:href||void 0,role:"button",className:"\n          juno-button \n          juno-button-".concat(theVariant," \n          juno-button-").concat(size,"-size \n          ").concat(btnBase," \n          ").concat("small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n","\n          ").concat(getButtonPadding(size,variant),"\n          ").concat(progressClass(progress)," \n          ").concat(className,"\n        "),disabled,onClick,ref},props,{title:titleValue,children:[buttonIcon,buttonLabel]}));return href?anchor:button}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"The basic button component. Use this for `onClick` interactions.",displayName:"Button",props:{className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"null"},description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:{value:"null"},description:"Optionally specify an href. This will turn the Button into an <a> element",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"null"},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"search"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:null,description:"Button label can be passed like this or as children",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(MouseEventHandler<EventTarget> & (MouseEventHandler<HTMLAnchorElement> | MouseEventHandler<HTMLButtonElement>))"}},progress:{defaultValue:{value:"false"},description:"Whether the button action is in progress",name:"progress",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"null"},description:"Specify title for accessibility. Gets value of label if no title specified",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"Choose a variant for your purpose. May leave empty to get default button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},size:{defaultValue:{value:"default"},description:"Leave empty for default size",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},progressLabel:{defaultValue:{value:""},description:"Display an alternative label while the button action is in progress",name:"progressLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.component.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.component.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Spinner=function(_a){var _b=_a.variant,variant=void 0===_b?"default":_b,_c=_a.size,size=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.color,color=void 0===_e?"":_e,props=__rest(_a,["variant","size","className","color"]),sizing=function(size){switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return(0,jsx_runtime.jsxs)("svg",__assign({className:"juno-spinner ".concat("\n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n"," ").concat(color||function(){switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}}()," ").concat(className),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar"},props,{children:[(0,jsx_runtime.jsx)("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,jsx_runtime.jsx)("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}))};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",displayName:"Spinner",props:{variant:{defaultValue:{value:"default"},description:"The semantic color variant of the Spinner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"primary"'}]}},size:{defaultValue:{value:"null"},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",name:"size",required:!1,type:{name:"string | null"}},className:{defaultValue:{value:""},description:"Add custom classNames",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:""},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.component.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.component.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultButtonInProgress:()=>DefaultButtonInProgress,DefaultButtonInProgressWithProgressLabel:()=>DefaultButtonInProgressWithProgressLabel,DefaultSize:()=>DefaultSize,DefaultWithIcon:()=>DefaultWithIcon,Disabled:()=>Disabled,DisabledInProgress:()=>DisabledInProgress,IconButtonInProgress:()=>IconButtonInProgress,IconOnlyAsChild:()=>IconOnlyAsChild,IconOnlyButton:()=>IconOnlyButton,LinkAsButton:()=>LinkAsButton,LinkAsButtonInProgress:()=>LinkAsButtonInProgress,LinkAsButtonWithIcon:()=>LinkAsButtonWithIcon,LinkAsButtonWithIconInProgress:()=>LinkAsButtonWithIconInProgress,Primary:()=>Primary,PrimaryButtonWithIconInProgress:()=>PrimaryButtonWithIconInProgress,PrimaryDanger:()=>PrimaryDanger,PrimaryDangerButtonInProgress:()=>PrimaryDangerButtonInProgress,PrimaryDangerDisabled:()=>PrimaryDangerDisabled,PrimaryDangerDisabledInProgress:()=>PrimaryDangerDisabledInProgress,PrimaryDisabled:()=>PrimaryDisabled,PrimaryDisabledInProgress:()=>PrimaryDisabledInProgress,Small:()=>Small,SmallInProgress:()=>SmallInProgress,SmallWithIcon:()=>SmallWithIcon,Subdued:()=>Subdued,SubduedButtonInProgress:()=>SubduedButtonInProgress,SubduedDisabled:()=>SubduedDisabled,SubduedWithIcon:()=>SubduedWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Button/index.ts")),_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/deprecated_js/Icon/index.js"),_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_index__WEBPACK_IMPORTED_MODULE_2__.$,argTypes:{icon:{options:__spreadArray(["default"],_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_4__.g,!0),control:{type:"select"}},variant:{options:["default","primary","primary-danger","subdued"],control:{type:"select"}}}};var Default={parameters:{docs:{description:{story:"The default button is a neutral button that can be used multiple times on a page"}}},args:{label:"Default"}},Subdued={parameters:{docs:{description:{story:"A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."}}},args:{variant:"subdued",label:"Subdued"}},Primary={parameters:{docs:{description:{story:"Only use the primary button **maximum once per page** for the preferred user action"}}},args:{variant:"primary",label:"Primary"}},PrimaryDanger={parameters:{docs:{description:{story:"Use this button sparingly and only for dangerous or destructive actions"}}},args:{variant:"primary-danger",label:"Primary Danger"}},DefaultSize={args:{label:"Default"}},Small={args:{size:"small",label:"Small"}},Disabled={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:__assign(__assign({},Default.args),{label:"Default Disabled",disabled:!0})},SubduedDisabled={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:__assign(__assign({},Subdued.args),{label:"Subdued Disabled",disabled:!0})},PrimaryDisabled={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:__assign(__assign({},Primary.args),{label:"Primary Disabled",disabled:!0})},PrimaryDangerDisabled={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:__assign(__assign({},PrimaryDanger.args),{disabled:!0})},DefaultWithIcon={parameters:{docs:{story:"Default Button with icon"}},args:__assign(__assign({},Default.args),{label:"Default with Icon",icon:"warning"})},SubduedWithIcon={parameters:{docs:{description:{story:"Subdued Button with Icon"}}},args:__assign(__assign({},Subdued.args),{icon:"warning",label:"Subdued with Icon"})},SmallWithIcon={parameters:{docs:{description:{story:"Small Button with Icon"}}},args:__assign(__assign({},Small.args),{icon:"warning"})},IconOnlyButton={docs:({},{description:{story:"A button with a Icon but no label. The icon name can be passed as a prop."}}),args:({},{icon:"warning"})},IconOnlyAsChild={docs:({},{description:{story:"A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though."}}),args:{}};IconOnlyAsChild.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_3__.I,{})};var LinkAsButton={parameters:{docs:{description:{story:'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons'}}},args:__assign(__assign({},Primary.args),{label:"Link as button",href:"#link"})},LinkAsButtonWithIcon={parameters:{docs:{description:{story:"Link styled as a button including an icon."}}},args:__assign(__assign({},Primary.args),{icon:"warning",label:"Link as button with Icon",href:"#"})},DefaultButtonInProgress={parameters:{docs:{description:{story:"Default Button with an action in progress"}}},args:__assign(__assign({},Default.args),{progress:!0})},IconButtonInProgress={parameters:{docs:{description:{story:"Icon Button with an action in progress"}}},args:__assign(__assign({},Default.args),{label:"Default with Icon",icon:"warning",progress:!0})},DefaultButtonInProgressWithProgressLabel={parameters:{docs:{description:{story:"Default Button with an action in oprogress and an alternate label while in progress"}}},args:__assign(__assign({},Default.args),{label:"Default with Icon",icon:"warning",progress:!0,progressLabel:"In Progress…"})},SubduedButtonInProgress={parameters:{docs:{description:{story:"Subdued Button with an action in progress"}}},args:__assign(__assign({},Subdued.args),{progress:!0,progressLabel:"Subdued Button in Progress…"})},PrimaryButtonWithIconInProgress={parameters:{docs:{description:{story:"Primary Button with action in progress"}}},args:__assign(__assign({},Primary.args),{progress:!0,progressLabel:"Primary Button in Progress…"})},PrimaryDangerButtonInProgress={parameters:{docs:{description:{story:"Primary Danger Button with action in progress"}}},args:__assign(__assign({},PrimaryDanger.args),{progress:!0,progressLabel:"Primary Danger Button in Progress…"})},LinkAsButtonInProgress={parameters:{docs:{description:{story:"Link as button with action in progress. Should hardly ever be used, just to check consistent styling."}}},args:__assign(__assign({},LinkAsButton.args),{progress:!0,progressLabel:"Link as button in Progress…"})},LinkAsButtonWithIconInProgress={parameters:{docs:{description:{story:"Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."}}},args:__assign(__assign({},LinkAsButtonWithIcon.args),{progress:!0,progressLabel:"Link as button with Icon in Progress…"})},DisabledInProgress={parameters:{docs:{description:{story:"Disabled Default Button in Progress"}}},args:__assign(__assign({},Disabled.args),{progress:!0})},PrimaryDisabledInProgress={parameters:{docs:{description:{story:"Disabled Primnary Button with action in progress"}}},args:__assign(__assign({},PrimaryDisabled.args),{progress:!0,progressLabel:"Disabled Primary Button in Progress…"})},PrimaryDangerDisabledInProgress={parameters:{docs:{description:{story:"Disabled Primary Danger Button in Progress…"}}},args:__assign(__assign({},PrimaryDangerDisabled.args),{progress:!0,progressLabel:"Disabled Primary Danger Button in Progress…"})},SmallInProgress={parameters:{docs:{description:{story:"Small Button in Progress"}}},args:__assign(__assign({},Small.args),{progress:!0,progressLabel:"Small in Progress…"})};const __namedExportsOrder=["Default","Subdued","Primary","PrimaryDanger","DefaultSize","Small","Disabled","SubduedDisabled","PrimaryDisabled","PrimaryDangerDisabled","DefaultWithIcon","SubduedWithIcon","SmallWithIcon","IconOnlyButton","IconOnlyAsChild","LinkAsButton","LinkAsButtonWithIcon","DefaultButtonInProgress","IconButtonInProgress","DefaultButtonInProgressWithProgressLabel","SubduedButtonInProgress","PrimaryButtonWithIconInProgress","PrimaryDangerButtonInProgress","LinkAsButtonInProgress","LinkAsButtonWithIconInProgress","DisabledInProgress","PrimaryDisabledInProgress","PrimaryDangerDisabledInProgress","SmallInProgress"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "The default button is a neutral button that can be used multiple times on a page"\n      }\n    }\n  },\n  args: {\n    label: "Default"\n  }\n}',...Default.parameters?.docs?.source}}},Subdued.parameters={...Subdued.parameters,docs:{...Subdued.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."\n      }\n    }\n  },\n  args: {\n    variant: "subdued",\n    label: "Subdued"\n  }\n}',...Subdued.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Only use the primary button **maximum once per page** for the preferred user action"\n      }\n    }\n  },\n  args: {\n    variant: "primary",\n    label: "Primary"\n  }\n}',...Primary.parameters?.docs?.source}}},PrimaryDanger.parameters={...PrimaryDanger.parameters,docs:{...PrimaryDanger.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Use this button sparingly and only for dangerous or destructive actions"\n      }\n    }\n  },\n  args: {\n    variant: "primary-danger",\n    label: "Primary Danger"\n  }\n}',...PrimaryDanger.parameters?.docs?.source}}},DefaultSize.parameters={...DefaultSize.parameters,docs:{...DefaultSize.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Default"\n  }\n}',...DefaultSize.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "small",\n    label: "Small"\n  }\n}',...Small.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable any button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default Disabled",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},SubduedDisabled.parameters={...SubduedDisabled.parameters,docs:{...SubduedDisabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable any button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...Subdued.args,\n    label: "Subdued Disabled",\n    disabled: true\n  }\n}',...SubduedDisabled.parameters?.docs?.source}}},PrimaryDisabled.parameters={...PrimaryDisabled.parameters,docs:{...PrimaryDisabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable any button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    label: "Primary Disabled",\n    disabled: true\n  }\n}',...PrimaryDisabled.parameters?.docs?.source}}},PrimaryDangerDisabled.parameters={...PrimaryDangerDisabled.parameters,docs:{...PrimaryDangerDisabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable a Primary Danger button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...PrimaryDanger.args,\n    disabled: true\n  }\n}',...PrimaryDangerDisabled.parameters?.docs?.source}}},DefaultWithIcon.parameters={...DefaultWithIcon.parameters,docs:{...DefaultWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      story: "Default Button with icon"\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default with Icon",\n    icon: "warning"\n  }\n}',...DefaultWithIcon.parameters?.docs?.source}}},SubduedWithIcon.parameters={...SubduedWithIcon.parameters,docs:{...SubduedWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Subdued Button with Icon"\n      }\n    }\n  },\n  args: {\n    ...Subdued.args,\n    icon: "warning",\n    label: "Subdued with Icon"\n  }\n}',...SubduedWithIcon.parameters?.docs?.source}}},SmallWithIcon.parameters={...SmallWithIcon.parameters,docs:{...SmallWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Small Button with Icon"\n      }\n    }\n  },\n  args: {\n    ...Small.args,\n    icon: "warning"\n  }\n}',...SmallWithIcon.parameters?.docs?.source}}},IconOnlyButton.parameters={...IconOnlyButton.parameters,docs:{...IconOnlyButton.parameters?.docs,source:{originalSource:"{\n  docs: {},\n  args: {}\n}",...IconOnlyButton.parameters?.docs?.source}}},IconOnlyAsChild.parameters={...IconOnlyAsChild.parameters,docs:{...IconOnlyAsChild.parameters?.docs,source:{originalSource:"{\n  docs: {},\n  args: {}\n}",...IconOnlyAsChild.parameters?.docs?.source}}},LinkAsButton.parameters={...LinkAsButton.parameters,docs:{...LinkAsButton.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: \'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons\'\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    label: "Link as button",\n    href: "#link"\n  }\n}',...LinkAsButton.parameters?.docs?.source}}},LinkAsButtonWithIcon.parameters={...LinkAsButtonWithIcon.parameters,docs:{...LinkAsButtonWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Link styled as a button including an icon."\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    icon: "warning",\n    label: "Link as button with Icon",\n    href: "#"\n  }\n}',...LinkAsButtonWithIcon.parameters?.docs?.source}}},DefaultButtonInProgress.parameters={...DefaultButtonInProgress.parameters,docs:{...DefaultButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Default Button with an action in progress"\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    progress: true\n  }\n}',...DefaultButtonInProgress.parameters?.docs?.source}}},IconButtonInProgress.parameters={...IconButtonInProgress.parameters,docs:{...IconButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Icon Button with an action in progress"\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default with Icon",\n    icon: "warning",\n    progress: true\n  }\n}',...IconButtonInProgress.parameters?.docs?.source}}},DefaultButtonInProgressWithProgressLabel.parameters={...DefaultButtonInProgressWithProgressLabel.parameters,docs:{...DefaultButtonInProgressWithProgressLabel.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Default Button with an action in oprogress and an alternate label while in progress"\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default with Icon",\n    icon: "warning",\n    progress: true,\n    progressLabel: "In Progress…"\n  }\n}',...DefaultButtonInProgressWithProgressLabel.parameters?.docs?.source}}},SubduedButtonInProgress.parameters={...SubduedButtonInProgress.parameters,docs:{...SubduedButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Subdued Button with an action in progress"\n      }\n    }\n  },\n  args: {\n    ...Subdued.args,\n    progress: true,\n    progressLabel: "Subdued Button in Progress…"\n  }\n}',...SubduedButtonInProgress.parameters?.docs?.source}}},PrimaryButtonWithIconInProgress.parameters={...PrimaryButtonWithIconInProgress.parameters,docs:{...PrimaryButtonWithIconInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Primary Button with action in progress"\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    progress: true,\n    progressLabel: "Primary Button in Progress…"\n  }\n}',...PrimaryButtonWithIconInProgress.parameters?.docs?.source}}},PrimaryDangerButtonInProgress.parameters={...PrimaryDangerButtonInProgress.parameters,docs:{...PrimaryDangerButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Primary Danger Button with action in progress"\n      }\n    }\n  },\n  args: {\n    ...PrimaryDanger.args,\n    progress: true,\n    progressLabel: "Primary Danger Button in Progress…"\n  }\n}',...PrimaryDangerButtonInProgress.parameters?.docs?.source}}},LinkAsButtonInProgress.parameters={...LinkAsButtonInProgress.parameters,docs:{...LinkAsButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Link as button with action in progress. Should hardly ever be used, just to check consistent styling."\n      }\n    }\n  },\n  args: {\n    ...LinkAsButton.args,\n    progress: true,\n    progressLabel: "Link as button in Progress…"\n  }\n}',...LinkAsButtonInProgress.parameters?.docs?.source}}},LinkAsButtonWithIconInProgress.parameters={...LinkAsButtonWithIconInProgress.parameters,docs:{...LinkAsButtonWithIconInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."\n      }\n    }\n  },\n  args: {\n    ...LinkAsButtonWithIcon.args,\n    progress: true,\n    progressLabel: "Link as button with Icon in Progress…"\n  }\n}',...LinkAsButtonWithIconInProgress.parameters?.docs?.source}}},DisabledInProgress.parameters={...DisabledInProgress.parameters,docs:{...DisabledInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Default Button in Progress"\n      }\n    }\n  },\n  args: {\n    ...Disabled.args,\n    progress: true\n  }\n}',...DisabledInProgress.parameters?.docs?.source}}},PrimaryDisabledInProgress.parameters={...PrimaryDisabledInProgress.parameters,docs:{...PrimaryDisabledInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Primnary Button with action in progress"\n      }\n    }\n  },\n  args: {\n    ...PrimaryDisabled.args,\n    progress: true,\n    progressLabel: "Disabled Primary Button in Progress…"\n  }\n}',...PrimaryDisabledInProgress.parameters?.docs?.source}}},PrimaryDangerDisabledInProgress.parameters={...PrimaryDangerDisabledInProgress.parameters,docs:{...PrimaryDangerDisabledInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Primary Danger Button in Progress…"\n      }\n    }\n  },\n  args: {\n    ...PrimaryDangerDisabled.args,\n    progress: true,\n    progressLabel: "Disabled Primary Danger Button in Progress…"\n  }\n}',...PrimaryDangerDisabledInProgress.parameters?.docs?.source}}},SmallInProgress.parameters={...SmallInProgress.parameters,docs:{...SmallInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Small Button in Progress"\n      }\n    }\n  },\n  args: {\n    ...Small.args,\n    progress: true,\n    progressLabel: "Small in Progress…"\n  }\n}',...SmallInProgress.parameters?.docs?.source}}}},"./src/components/Button/button.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-button-default{background-color:var(--color-button-default-bg);color:var(--color-button-default-text)}.juno-button-default:hover{background-color:var(--color-button-default-hover-bg);color:var(--color-button-default-hover-text)}.juno-button-default:active{background-color:var(--color-button-default-active-bg);border-color:var(--color-button-default-active-border);color:var(--color-button-default-active-text)}.juno-button-subdued{background-color:var(--color-button-subdued-bg);border:1px solid var(--color-button-subdued-border);color:var(--color-button-subdued-text)}.juno-button-subdued:hover{background-color:var(--color-button-subdued-hover-bg);border-color:var(--color-button-subdued-hover-border);color:var(--color-button-subdued-hover-text)}.juno-button-subdued:active{background-color:var(--color-button-subdued-active-bg);border-color:var(--color-button-subdued-active-border);color:var(--color-button-subdued-active-text)}.juno-button-primary{background-color:var(--color-button-primary-bg);color:var(--color-button-primary-text)}.juno-button-primary:hover{background-color:var(--color-button-primary-hover-bg);color:var(--color-button-primary-hover-text)}.juno-button-primary:active{background-color:var(--color-button-primary-active-bg);color:var(--color-button-primary-active-text)}.juno-button-primary-danger{background-color:var(--color-button-primary-danger-bg);color:var(--color-button-primary-danger-text)}.juno-button-primary-danger:hover{background-color:var(--color-button-primary-danger-hover-bg);color:var(--color-button-primary-danger-hover-text)}.juno-button-primary-danger:active{background-color:var(--color-button-primary-danger-active-bg);color:var(--color-button-primary-danger-active-text)}","",{version:3,sources:["webpack://./src/components/Button/button.scss"],names:[],mappings:"AAMA,qBACC,+CAAA,CACA,sCAAA,CAEA,2BACC,qDAAA,CACA,4CAAA,CAGD,4BACC,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKF,qBACC,+CAAA,CACA,mDAAA,CACA,sCAAA,CAEA,2BACC,qDAAA,CACA,qDAAA,CACA,4CAAA,CAGD,4BACC,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKF,qBACC,+CAAA,CACA,sCAAA,CAEA,2BACC,qDAAA,CACA,4CAAA,CAGD,4BACC,sDAAA,CACA,6CAAA,CAKF,4BACC,sDAAA,CACA,6CAAA,CAEA,kCACC,4DAAA,CACA,mDAAA,CAGD,mCACC,6DAAA,CACA,oDAAA",sourcesContent:["// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// handle button colours here, not in tw because of overall complexity, mostly singular colors, gradients, etc; and conflicting bg-colors and bg-images:\n\n\n.juno-button-default {\n\tbackground-color: var(--color-button-default-bg);\n\tcolor: var(--color-button-default-text);\n\t\n\t&:hover {\n\t\tbackground-color: var(--color-button-default-hover-bg);\n\t\tcolor: var(--color-button-default-hover-text);\n\t}\n\t\n\t&:active {\n\t\tbackground-color: var(--color-button-default-active-bg);\n\t\tborder-color: var(--color-button-default-active-border);\n\t\tcolor: var(--color-button-default-active-text);\n\t}\n\n}\n\n.juno-button-subdued {\n\tbackground-color: var(--color-button-subdued-bg);\n\tborder: 1px solid var(--color-button-subdued-border);\n\tcolor: var(--color-button-subdued-text);\n\t\n\t&:hover {\n\t\tbackground-color: var(--color-button-subdued-hover-bg);\n\t\tborder-color: var(--color-button-subdued-hover-border);\n\t\tcolor: var(--color-button-subdued-hover-text);\n\t}\n\t\n\t&:active {\n\t\tbackground-color: var(--color-button-subdued-active-bg);\n\t\tborder-color: var(--color-button-subdued-active-border);\n\t\tcolor: var(--color-button-subdued-active-text);\n\t}\n\t\n}\n\n.juno-button-primary {\n\tbackground-color: var(--color-button-primary-bg);\n\tcolor: var(--color-button-primary-text);\n\t\n\t&:hover {\n\t\tbackground-color: var(--color-button-primary-hover-bg);\n\t\tcolor: var(--color-button-primary-hover-text);\n\t}\n\t\n\t&:active {\n\t\tbackground-color: var(--color-button-primary-active-bg);\n\t\tcolor: var(--color-button-primary-active-text);\n\t}\n\t\n}\n\n.juno-button-primary-danger {\n\tbackground-color: var(--color-button-primary-danger-bg);\n\tcolor: var(--color-button-primary-danger-text);\n\t\n\t&:hover {\n\t\tbackground-color: var(--color-button-primary-danger-hover-bg);\n\t\tcolor: var(--color-button-primary-danger-hover-text);\n\t}\n\t\n\t&:active {\n\t\tbackground-color: var(--color-button-primary-danger-active-bg);\n\t\tcolor: var(--color-button-primary-danger-active-text);\n\t}\n\t\n}\n"],sourceRoot:""}])}}]);