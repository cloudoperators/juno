"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4053],{"./src/components/Button/Button.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Icon_index__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/Button/button.scss"),__webpack_require__("./src/components/Icon/index.ts")),_Spinner_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Spinner/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},btnBase="\n  jn-font-bold\n  jn-inline-flex \n  jn-justify-center \n  jn-items-center\n  jn-rounded\n  jn-shadow-sm \n  jn-w-auto\n  focus:jn-outline-none \n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n  focus-visible:jn-ring-offset-1\n  focus-visible:jn-ring-offset-theme-focus\n  disabled:jn-opacity-50\n  disabled:jn-cursor-not-allowed\n  disabled:jn-pointer-events-none\n",getButtonPadding=function(size,variant){return"".concat("small"===size?"subdued"===variant?"\n  jn-py-[0.25rem]\n  jn-px-[0.4375rem]\n":"\n  jn-py-[0.3125rem]\n  jn-px-[0.5rem]\n":"subdued"===variant?"\n  jn-py-[0.375rem]\n  jn-px-[0.5625rem]\n":"\n  jn-py-[0.4375rem]\n  jn-px-[0.625rem] \n")},progressClass=function(progress){return progress?"in-progress":""},spinnerColorClass=function(variant){switch(variant){case"default":return"jn-text-theme-accent";case"primary":case"primary-danger":return"jn-text-white";default:return""}},Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(_a,ref){var label=_a.label,_b=_a.title,title=void 0===_b?null:_b,variant=_a.variant,_c=_a.size,size=void 0===_c?"default":_c,_d=_a.disabled,disabled=void 0===_d?null:_d,_e=_a.href,href=void 0===_e?null:_e,_f=_a.icon,icon=void 0===_f?null:_f,_g=_a.className,className=void 0===_g?"":_g,onClick=_a.onClick,children=_a.children,_h=_a.progress,progress=void 0!==_h&&_h,_j=_a.progressLabel,progressLabel=void 0===_j?"":_j,props=__rest(_a,["label","title","variant","size","disabled","href","icon","className","onClick","children","progress","progressLabel"]),theVariant=variant||"default",titleValue=title||label||"",buttonIcon=progress?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Spinner_index__WEBPACK_IMPORTED_MODULE_4__.y,{size:"small"===size?"1.125rem":"1.5rem",color:"".concat(spinnerColorClass(theVariant))}):icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_3__.I,{icon,title:titleValue,className:"juno-button-icon ".concat(label||children?"".concat("\n  jn-mr-2\n"):""," "),size:"small"===size?"1.125rem":"1.5rem"}):null,buttonLabel=progress&&progressLabel?progressLabel:label||children,button=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",__assign({className:"\n          juno-button \n          juno-button-".concat(theVariant," \n          juno-button-").concat(size,"-size \n          ").concat(btnBase," \n          ").concat("small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n"," \n          ").concat(getButtonPadding(size,variant),"\n          ").concat(progressClass(progress)," \n          ").concat(className),disabled:disabled||void 0,onClick:function(event){onClick&&onClick(event)},ref},props,{type:"button",title:titleValue,children:[buttonIcon,buttonLabel]})),anchor=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",__assign({href:href||void 0,role:"button",className:"\n          juno-button \n          juno-button-".concat(theVariant," \n          juno-button-").concat(size,"-size \n          ").concat(btnBase," \n          ").concat("small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n","\n          ").concat(getButtonPadding(size,variant),"\n          ").concat(progressClass(progress)," \n          ").concat(className,"\n        "),disabled,onClick,ref},props,{title:titleValue,children:[buttonIcon,buttonLabel]}));return href?anchor:button}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"The basic button component. Use this for `onClick` interactions.",displayName:"Button",props:{title:{defaultValue:{value:"null"},description:"Specify title for accessibility. Gets value of label if no title specified",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"Choose a variant for your purpose. May leave empty to get default button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"null"},description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"Leave empty for default size",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},href:{defaultValue:{value:"null"},description:"Optionally specify an href. This will turn the Button into an <a> element",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button label can be passed like this or as children",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(MouseEventHandler<EventTarget> & (MouseEventHandler<HTMLAnchorElement> | MouseEventHandler<HTMLButtonElement>))"}},icon:{defaultValue:{value:"null"},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"default"'},{value:'"download"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},progress:{defaultValue:{value:"false"},description:"Whether the button action is in progress",name:"progress",required:!1,type:{name:"boolean"}},progressLabel:{defaultValue:{value:""},description:"Display an alternative label while the button action is in progress",name:"progressLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.component.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.component.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button_component__WEBPACK_IMPORTED_MODULE_0__.$});var _Button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.component.tsx")},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Menu/Menu.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Menu,x:()=>MenuContext});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/menu/menu.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},MenuContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0),Menu=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.variant,variant=void 0===_c?"normal":_c,_d=_a.className,className=void 0===_d?"":_d,props=__rest(_a,["children","variant","className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuContext.Provider,{value:{variant},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.W,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"\n\t\t\t\t\tjuno-menu \n\t\t\t\t\tjuno-menu-".concat(variant," \n\t\t\t\t\t").concat("\n\tjn-overflow-hidden\n\tjn-flex\n\tjn-flex-col\n\tjn-rounded\n\tjn-bg-theme-background-lvl-1\n"," \n\t\t\t\t\t").concat("small"===variant?"\n\tjn-text-sm\n":"\n\tjn-text-base\n"," \n\t\t\t\t\t").concat(className,"\n\t\t\t\t"),role:"menu"},props,{children}))})})};try{Menu.displayName="Menu",Menu.__docgenInfo={description:"A generic menu component",displayName:"Menu",props:{children:{defaultValue:{value:"null"},description:"The children to render in the MenuSection",name:"children",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"normal"},description:"Whether the Menu will be in normal or small variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},className:{defaultValue:{value:""},description:"Pass a custom className to the menu",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/Menu.component.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/Menu/Menu.component.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>_Menu_component__WEBPACK_IMPORTED_MODULE_0__.W});var _Menu_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Menu/Menu.component.tsx")},"./src/components/MenuItem/MenuItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>MenuItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/menu/menu.js"),_Menu_Menu_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/Menu.component.tsx"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},MenuItem=function(_a){var _b,_c=_a.children,children=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,_f=_a.href,href=void 0===_f?"":_f,_g=_a.icon,icon=void 0===_g?null:_g,_h=_a.label,label=void 0===_h?"":_h,_j=_a.onClick,onClick=void 0===_j?void 0:_j,props=__rest(_a,["children","className","disabled","href","icon","label","onClick"]),menuContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Menu_Menu_component__WEBPACK_IMPORTED_MODULE_2__.x),variant=null!==(_b=null==menuContext?void 0:menuContext.variant)&&void 0!==_b?_b:"normal",Element=href?"a":children?"div":onClick?"button":"div";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.W.Item,__assign({as:Element},href&&!disabled&&"a"===Element?{href}:{},{onClick:onClick&&"button"===Element&&!disabled?function(event){onClick&&onClick(event)}:void 0,disabled,className:"\n         juno-menu-item\n         juno-menu-item-".concat(Element,"\n         ").concat('\n   jn-text-theme-default\n   jn-flex\n   jn-items-center\n   jn-w-full\n   bg-clip-padding\n   jn-truncate\n   jn-text-left\n   jn-bg-theme-background-lvl-1\n   disabled:jn-cursor-not-allowed\n   data-[headlessui-state="disabled"]:jn-cursor-not-allowed\n '," \n         ").concat("div"!==Element?'\n   hover:jn-bg-theme-background-lvl-3\n   cursor-pointer\n   data-[headlessui-state="disabled"]:jn-bg-theme-background-lvl-3\n ':"","\n         ").concat("small"===variant?"\n   jn-text-sm\n   jn-p-2\n ":"\n   jn-text-base\n   jn-pt-[0.6875rem]\n   jn-pb-[0.5rem]\n   jn-px-[0.875rem]\n ","\n         ").concat(disabled?"jn-cursor-not-allowed":"","\n         ").concat(className,"\n       ")},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"".concat(disabled?"jn-opacity-50":""),children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_3__.I,{icon,size:"18",className:"jn-inline-block jn-mr-2"}),children||label]})}))};try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"A menu item to be used inside Menu.\nCan render `<a>`, `<button>`, or `<div>` based on props.",displayName:"MenuItem",props:{children:{defaultValue:{value:"null"},description:"Children of the menu item",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a custom className to the menu item",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the menu item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"default"'},{value:'"download"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the menu item. Will take precedence over children passed to the component.",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"Pass an href to the menu item. Will result in the menu item being rendered as an `<a>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"undefined"},description:"Pass an onClick handler to the menu item. Will result in the menu item being rendered as a `<button>`.",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuItem/MenuItem.component.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/MenuItem/MenuItem.component.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Spinner=function(_a){var _b=_a.variant,variant=void 0===_b?"default":_b,_c=_a.size,size=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.color,color=void 0===_e?"":_e,props=__rest(_a,["variant","size","className","color"]),sizing=function(size){switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return(0,jsx_runtime.jsxs)("svg",__assign({className:"juno-spinner ".concat("\n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n"," ").concat(color||function(){switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}}()," ").concat(className),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar"},props,{children:[(0,jsx_runtime.jsx)("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,jsx_runtime.jsx)("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}))};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",displayName:"Spinner",props:{variant:{defaultValue:{value:"default"},description:"The semantic color variant of the Spinner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"default"'},{value:'"primary"'}]}},size:{defaultValue:{value:"null"},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",name:"size",required:!1,type:{name:"string | null"}},className:{defaultValue:{value:""},description:"Add custom classNames",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:""},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.component.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.component.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuItem/MenuItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DisabledMenuItem:()=>DisabledMenuItem,DisabledMenuItemAsLink:()=>DisabledMenuItemAsLink,MenuItemAsButton:()=>MenuItemAsButton,MenuItemAsLink:()=>MenuItemAsLink,MenuItemWithChildren:()=>MenuItemWithChildren,SmallMenuItem:()=>SmallMenuItem,SmallWithIcon:()=>SmallWithIcon,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_MenuItem_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/MenuItem/MenuItem.component.tsx")),_Menu___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/index.ts"),_Button___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"WiP/Menu/MenuItem",component:_MenuItem_component__WEBPACK_IMPORTED_MODULE_2__.D,argTypes:{},decorators:[function(storyFn,context){var menuVariant=context.parameters.menuVariant;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu___WEBPACK_IMPORTED_MODULE_3__.W,{variant:menuVariant,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:storyFn()})})}],parameters:{menuVariant:"normal"}};var Default={args:{label:"A menu item",onClick:null}},SmallMenuItem={args:{label:"A small menu item",onClick:null},parameters:{menuVariant:"small"}},WithIcon={args:{label:"A menu item with icon",icon:"deleteForever",onClick:null}},SmallWithIcon={args:{label:"A small menu item with icon",icon:"deleteForever",onClick:null},parameters:{menuVariant:"small"}},MenuItemAsLink={args:{label:"A menu item as a link",href:"https://github.com/cloudoperators/juno"}},MenuItemAsButton={args:{label:"Menu Item as Button",onClick:function(){}}},MenuItemWithChildren={args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button___WEBPACK_IMPORTED_MODULE_4__.$,{label:"Delete",size:"small",variant:"subdued",icon:"deleteForever",className:"jn-w-full"},"1")]}},DisabledMenuItem={args:{disabled:!0,label:"Disabled menu item"}},DisabledMenuItemAsLink={args:{disabled:!0,label:"Disabled menu item as link",href:"https://github.com/cloudoperators/juno"}};const __namedExportsOrder=["Default","SmallMenuItem","WithIcon","SmallWithIcon","MenuItemAsLink","MenuItemAsButton","MenuItemWithChildren","DisabledMenuItem","DisabledMenuItemAsLink"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "A menu item",\n    onClick: null\n  }\n}',...Default.parameters?.docs?.source}}},SmallMenuItem.parameters={...SmallMenuItem.parameters,docs:{...SmallMenuItem.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "A small menu item",\n    onClick: null\n  },\n  parameters: {\n    menuVariant: "small"\n  }\n}',...SmallMenuItem.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "A menu item with icon",\n    icon: "deleteForever",\n    onClick: null\n  }\n}',...WithIcon.parameters?.docs?.source}}},SmallWithIcon.parameters={...SmallWithIcon.parameters,docs:{...SmallWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "A small menu item with icon",\n    icon: "deleteForever",\n    onClick: null\n  },\n  parameters: {\n    menuVariant: "small"\n  }\n}',...SmallWithIcon.parameters?.docs?.source}}},MenuItemAsLink.parameters={...MenuItemAsLink.parameters,docs:{...MenuItemAsLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "A menu item as a link",\n    href: "https://github.com/cloudoperators/juno"\n  }\n}',...MenuItemAsLink.parameters?.docs?.source}}},MenuItemAsButton.parameters={...MenuItemAsButton.parameters,docs:{...MenuItemAsButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Menu Item as Button",\n    onClick: () => {}\n  }\n}',...MenuItemAsButton.parameters?.docs?.source}}},MenuItemWithChildren.parameters={...MenuItemWithChildren.parameters,docs:{...MenuItemWithChildren.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<Button label="Delete" size="small" variant="subdued" icon="deleteForever" className="jn-w-full" key="1" />]\n  }\n}',...MenuItemWithChildren.parameters?.docs?.source}}},DisabledMenuItem.parameters={...DisabledMenuItem.parameters,docs:{...DisabledMenuItem.parameters?.docs,source:{originalSource:'{\n  args: {\n    disabled: true,\n    label: "Disabled menu item"\n  }\n}',...DisabledMenuItem.parameters?.docs?.source}}},DisabledMenuItemAsLink.parameters={...DisabledMenuItemAsLink.parameters,docs:{...DisabledMenuItemAsLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    disabled: true,\n    label: "Disabled menu item as link",\n    href: "https://github.com/cloudoperators/juno"\n  }\n}',...DisabledMenuItemAsLink.parameters?.docs?.source}}}},"./src/components/Button/button.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-button-default{background-color:var(--color-button-default-bg);color:var(--color-button-default-text)}.juno-button-default:hover{background-color:var(--color-button-default-hover-bg);color:var(--color-button-default-hover-text)}.juno-button-default:active{background-color:var(--color-button-default-active-bg);border-color:var(--color-button-default-active-border);color:var(--color-button-default-active-text)}.juno-button-subdued{background-color:var(--color-button-subdued-bg);border:1px solid var(--color-button-subdued-border);color:var(--color-button-subdued-text)}.juno-button-subdued:hover{background-color:var(--color-button-subdued-hover-bg);border-color:var(--color-button-subdued-hover-border);color:var(--color-button-subdued-hover-text)}.juno-button-subdued:active{background-color:var(--color-button-subdued-active-bg);border-color:var(--color-button-subdued-active-border);color:var(--color-button-subdued-active-text)}.juno-button-primary{background-color:var(--color-button-primary-bg);color:var(--color-button-primary-text)}.juno-button-primary:hover{background-color:var(--color-button-primary-hover-bg);color:var(--color-button-primary-hover-text)}.juno-button-primary:active{background-color:var(--color-button-primary-active-bg);color:var(--color-button-primary-active-text)}.juno-button-primary-danger{background-color:var(--color-button-primary-danger-bg);color:var(--color-button-primary-danger-text)}.juno-button-primary-danger:hover{background-color:var(--color-button-primary-danger-hover-bg);color:var(--color-button-primary-danger-hover-text)}.juno-button-primary-danger:active{background-color:var(--color-button-primary-danger-active-bg);color:var(--color-button-primary-danger-active-text)}","",{version:3,sources:["webpack://./src/components/Button/button.scss"],names:[],mappings:"AAMA,qBACE,+CAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKJ,qBACE,+CAAA,CACA,mDAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKJ,qBACE,+CAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,6CAAA,CAKJ,4BACE,sDAAA,CACA,6CAAA,CAEA,kCACE,4DAAA,CACA,mDAAA,CAGF,mCACE,6DAAA,CACA,oDAAA",sourcesContent:["// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// handle button colours here, not in tw because of overall complexity, mostly singular colors, gradients, etc; and conflicting bg-colors and bg-images:\n\n\n.juno-button-default {\n  background-color: var(--color-button-default-bg);\n  color: var(--color-button-default-text);\n  \n  &:hover {\n    background-color: var(--color-button-default-hover-bg);\n    color: var(--color-button-default-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-default-active-bg);\n    border-color: var(--color-button-default-active-border);\n    color: var(--color-button-default-active-text);\n  }\n\n}\n\n.juno-button-subdued {\n  background-color: var(--color-button-subdued-bg);\n  border: 1px solid var(--color-button-subdued-border);\n  color: var(--color-button-subdued-text);\n  \n  &:hover {\n    background-color: var(--color-button-subdued-hover-bg);\n    border-color: var(--color-button-subdued-hover-border);\n    color: var(--color-button-subdued-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-subdued-active-bg);\n    border-color: var(--color-button-subdued-active-border);\n    color: var(--color-button-subdued-active-text);\n  }\n  \n}\n\n.juno-button-primary {\n  background-color: var(--color-button-primary-bg);\n  color: var(--color-button-primary-text);\n  \n  &:hover {\n    background-color: var(--color-button-primary-hover-bg);\n    color: var(--color-button-primary-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-primary-active-bg);\n    color: var(--color-button-primary-active-text);\n  }\n  \n}\n\n.juno-button-primary-danger {\n  background-color: var(--color-button-primary-danger-bg);\n  color: var(--color-button-primary-danger-text);\n  \n  &:hover {\n    background-color: var(--color-button-primary-danger-hover-bg);\n    color: var(--color-button-primary-danger-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-primary-danger-active-bg);\n    color: var(--color-button-primary-danger-active-text);\n  }\n  \n}\n"],sourceRoot:""}])}}]);