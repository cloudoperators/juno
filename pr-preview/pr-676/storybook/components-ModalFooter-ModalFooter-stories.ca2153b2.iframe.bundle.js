"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2191],{"./src/components/Button/Button.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Icon_index__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/Button/button.scss"),__webpack_require__("./src/components/Icon/index.ts")),_Spinner_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Spinner/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},btnBase="\n  jn-font-bold\n  jn-inline-flex \n  jn-justify-center \n  jn-items-center\n  jn-rounded\n  jn-shadow-sm \n  jn-w-auto\n  focus:jn-outline-none \n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n  focus-visible:jn-ring-offset-1\n  focus-visible:jn-ring-offset-theme-focus\n  disabled:jn-opacity-50\n  disabled:jn-cursor-not-allowed\n  disabled:jn-pointer-events-none\n",getButtonPadding=function(size,variant){return"".concat("small"===size?"subdued"===variant?"\n  jn-py-[0.25rem]\n  jn-px-[0.4375rem]\n":"\n  jn-py-[0.3125rem]\n  jn-px-[0.5rem]\n":"subdued"===variant?"\n  jn-py-[0.375rem]\n  jn-px-[0.5625rem]\n":"\n  jn-py-[0.4375rem]\n  jn-px-[0.625rem] \n")},progressClass=function(progress){return progress?"in-progress":""},spinnerColorClass=function(variant){switch(variant){case"default":return"jn-text-theme-accent";case"primary":case"primary-danger":return"jn-text-white";default:return""}},Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(_a,ref){var label=_a.label,_b=_a.title,title=void 0===_b?null:_b,variant=_a.variant,_c=_a.size,size=void 0===_c?"default":_c,_d=_a.disabled,disabled=void 0===_d?null:_d,_e=_a.href,href=void 0===_e?null:_e,_f=_a.icon,icon=void 0===_f?null:_f,_g=_a.className,className=void 0===_g?"":_g,onClick=_a.onClick,children=_a.children,_h=_a.progress,progress=void 0!==_h&&_h,_j=_a.progressLabel,progressLabel=void 0===_j?"":_j,props=__rest(_a,["label","title","variant","size","disabled","href","icon","className","onClick","children","progress","progressLabel"]),theVariant=variant||"default",titleValue=title||label||"",buttonIcon=progress?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Spinner_index__WEBPACK_IMPORTED_MODULE_4__.y,{size:"small"===size?"1.125rem":"1.5rem",color:"".concat(spinnerColorClass(theVariant))}):icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_3__.I,{icon,title:titleValue,className:"juno-button-icon ".concat(label||children?"".concat("\n  jn-mr-2\n"):""," "),size:"small"===size?"1.125rem":"1.5rem"}):null,buttonLabel=progress&&progressLabel?progressLabel:label||children,button=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",__assign({className:"\n          juno-button \n          juno-button-".concat(theVariant," \n          juno-button-").concat(size,"-size \n          ").concat(btnBase," \n          ").concat("small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n"," \n          ").concat(getButtonPadding(size,variant),"\n          ").concat(progressClass(progress)," \n          ").concat(className),disabled:disabled||void 0,onClick:function(event){onClick&&onClick(event)},ref},props,{type:"button",title:titleValue,children:[buttonIcon,buttonLabel]})),anchor=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",__assign({href:href||void 0,role:"button",className:"\n          juno-button \n          juno-button-".concat(theVariant," \n          juno-button-").concat(size,"-size \n          ").concat(btnBase," \n          ").concat("small"===size?"\n  jn-text-sm\n  jn-leading-5\n":"\n  jn-text-base\n  jn-leading-6\n","\n          ").concat(getButtonPadding(size,variant),"\n          ").concat(progressClass(progress)," \n          ").concat(className,"\n        "),disabled,onClick,ref},props,{title:titleValue,children:[buttonIcon,buttonLabel]}));return href?anchor:button}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"The basic button component. Use this for `onClick` interactions.",displayName:"Button",props:{title:{defaultValue:{value:"null"},description:"Specify title for accessibility. Gets value of label if no title specified",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"Choose a variant for your purpose. May leave empty to get default button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},size:{defaultValue:{value:"default"},description:"Leave empty for default size",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},disabled:{defaultValue:{value:"null"},description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:{value:"null"},description:"Optionally specify an href. This will turn the Button into an <a> element",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button label can be passed like this or as children",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"null"},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},progress:{defaultValue:{value:"false"},description:"Whether the button action is in progress",name:"progress",required:!1,type:{name:"boolean"}},progressLabel:{defaultValue:{value:""},description:"Display an alternative label while the button action is in progress",name:"progressLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.component.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.component.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button_component__WEBPACK_IMPORTED_MODULE_0__.$});var _Button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.component.tsx")},"./src/components/ButtonRow/ButtonRow.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ButtonRow});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Stack_Stack_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Stack/Stack.component.tsx")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ButtonRow=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.className,className=void 0===_c?"":_c,props=__rest(_a,["children","className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Stack_Stack_component__WEBPACK_IMPORTED_MODULE_2__.B,__assign({gap:"2",distribution:"end",className:"juno-button-row ".concat(className)},props,{children}))};try{ButtonRow.displayName="ButtonRow",ButtonRow.__docgenInfo={description:"A container to hold one or multiple buttons and space and align them.",displayName:"ButtonRow",props:{className:{defaultValue:{value:""},description:"Add a class to the ButtonRow",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Children to render in the ButtonRow",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ButtonRow/ButtonRow.component.tsx#ButtonRow"]={docgenInfo:ButtonRow.__docgenInfo,name:"ButtonRow",path:"src/components/ButtonRow/ButtonRow.component.tsx#ButtonRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ButtonRow/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_ButtonRow_component__WEBPACK_IMPORTED_MODULE_0__.z});var _ButtonRow_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ButtonRow/ButtonRow.component.tsx")},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/ModalFooter/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ModalFooter});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Button=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Button/index.ts")),ButtonRow=__webpack_require__("./src/components/ButtonRow/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ModalFooter=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.confirmButtonLabel,confirmButtonLabel=void 0===_c?"":_c,_d=_a.cancelButtonLabel,cancelButtonLabel=void 0===_d?"":_d,_e=_a.confirmButtonIcon,confirmButtonIcon=void 0===_e?null:_e,_f=_a.cancelButtonIcon,cancelButtonIcon=void 0===_f?null:_f,onConfirm=_a.onConfirm,onCancel=_a.onCancel,_g=_a.className,className=void 0===_g?"":_g,props=__rest(_a,["children","confirmButtonLabel","cancelButtonLabel","confirmButtonIcon","cancelButtonIcon","onConfirm","onCancel","className"]),handleCancelClick=function(event){onCancel&&onCancel(event)};return(0,jsx_runtime.jsx)("div",__assign({className:"juno-modal-footer ".concat("\n\tjn-flex\n\tjn-flex-row\n\tjn-border-t\n\tjn-border-theme-background-lvl-4\n\tjn-py-2\n\tjn-px-8\n"," ").concat(children?null:"\n\tjn-justify-end\n\tjn-gap-3.5\n"," ").concat(className," ")},props,{children:children||(confirmButtonLabel||onConfirm?(0,jsx_runtime.jsxs)(ButtonRow.z,{children:[(0,jsx_runtime.jsx)(Button.$,{variant:"primary",label:confirmButtonLabel||"Confirm",icon:confirmButtonIcon||void 0,onClick:function(event){onConfirm&&onConfirm(event)}}),(0,jsx_runtime.jsx)(Button.$,{variant:"subdued",label:cancelButtonLabel||"Cancel",icon:cancelButtonIcon||void 0,onClick:handleCancelClick})]}):(0,jsx_runtime.jsx)(ButtonRow.z,{children:(0,jsx_runtime.jsx)(Button.$,{variant:"subdued",onClick:handleCancelClick,label:cancelButtonLabel||"Close",icon:cancelButtonIcon||void 0})}))}))};try{ModalFooter.displayName="ModalFooter",ModalFooter.__docgenInfo={description:'A Footer component for Modal.\nRenders a simple "Close" Button (and accepts a corresponding onCancel-handler) by default.\nCan be passed a confirmButtonLabel and cancelButton label with corresponding onConfirm- and onCancel-handlers.\nCan alternatively render all custom children as passed.',displayName:"ModalFooter",props:{children:{defaultValue:{value:"null"},description:"Custom children to render. Anything goes.",name:"children",required:!1,type:{name:"any"}},confirmButtonLabel:{defaultValue:{value:""},description:"The label for the Confirm-button. When passed, the component will render a Confirm button and a cancel button, otherwise the component will ONLY render a Close-Button.",name:"confirmButtonLabel",required:!1,type:{name:"string"}},cancelButtonLabel:{defaultValue:{value:""},description:"Custom label for the cancel button. ONLY has an effect if a `confirmButtonLabel` is passed.",name:"cancelButtonLabel",required:!1,type:{name:"string"}},confirmButtonIcon:{defaultValue:{value:"null"},description:"Pass an Icon name to show on the confirming action button",name:"confirmButtonIcon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},cancelButtonIcon:{defaultValue:{value:"null"},description:"Pass an icon name to show on the cancelling button",name:"cancelButtonIcon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},className:{defaultValue:{value:""},description:"A custom className. Useful to configure flex items alignment when passing custom content as children.",name:"className",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Handler to execute once the confirming button is clicked",name:"onConfirm",required:!1,type:{name:"MouseEventHandler<EventTarget> | null"}},onCancel:{defaultValue:null,description:"Handler to execute once the cancelling button is clicked",name:"onCancel",required:!1,type:{name:"MouseEventHandler<EventTarget> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalFooter/ModalFooter.component.tsx#ModalFooter"]={docgenInfo:ModalFooter.__docgenInfo,name:"ModalFooter",path:"src/components/ModalFooter/ModalFooter.component.tsx#ModalFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/Spinner.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Spinner=function(_a){var _b=_a.variant,variant=void 0===_b?"default":_b,_c=_a.size,size=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.color,color=void 0===_e?"":_e,props=__rest(_a,["variant","size","className","color"]),sizing=function(size){switch(size){case"small":return"1rem";case"large":return"3rem";default:return size}},sizeStyles=size?{width:sizing(size),height:sizing(size)}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",__assign({className:"juno-spinner ".concat("\n  jn-animate-spin \n  jn-mr-3 \n  jn-h-5 \n  jn-w-5 \n"," ").concat(color||function(){switch(variant){case"primary":return"\n  jn-text-theme-accent\n";case"danger":return"\n  jn-text-theme-danger \n";case"success":return"\n  jn-text-theme-success\n";case"warning":return"\n  jn-text-theme-warning  \n";default:return"\n  jn-text-theme-on-default\n"}}()," ").concat(className),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:sizeStyles,role:"progressbar"},props,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}))};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. \nTo indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.",displayName:"Spinner",props:{variant:{defaultValue:{value:"default"},description:"The semantic color variant of the Spinner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"default"'},{value:'"primary"'}]}},size:{defaultValue:{value:"null"},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",name:"size",required:!1,type:{name:"string | null"}},className:{defaultValue:{value:""},description:"Add custom classNames",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:""},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.component.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.component.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>_Spinner_component__WEBPACK_IMPORTED_MODULE_0__.y});var _Spinner_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Spinner/Spinner.component.tsx")},"./src/components/Stack/Stack.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},baseStack=function(direction,gap,wrap){return"\n      ".concat("vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row","\n      ").concat(wrap&&"jn-flex-wrap","\n      ").concat(function(gap){switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}}(gap),"\n    ")},alignItems=function(alignment){switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=function(distribution){switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=function(_a){var _b=_a.direction,direction=void 0===_b?"horizontal":_b,_c=_a.gap,gap=void 0===_c?"0":_c,_d=_a.alignment,alignment=void 0===_d?"stretch":_d,_e=_a.distribution,distribution=void 0===_e?"start":_e,_f=_a.wrap,wrap=void 0!==_f&&_f,_g=_a.className,className=void 0===_g?"":_g,_h=_a.children,children=void 0===_h?null:_h,props=__rest(_a,["direction","gap","alignment","distribution","wrap","className","children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"juno-stack ".concat(baseStack(direction,gap,wrap)," ").concat(alignItems(alignment)," ").concat(justifyItems(distribution)," ").concat(className||"")},props,{children}))};try{Stack.displayName="Stack",Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",displayName:"Stack",props:{className:{defaultValue:{value:""},description:"Pass css class names",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"Stack items horizontally or vertically",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignment:{defaultValue:{value:"stretch"},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"baseline"'},{value:'"stretch"'}]}},distribution:{defaultValue:{value:"start"},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",name:"distribution",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"Specify whether the Stack children should be allowed to wrap or not",name:"wrap",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"0"},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",name:"gap",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"0"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"0.5"'},{value:'"1.5"'},{value:'"2.5"'},{value:'"3.5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:'"14"'},{value:'"16"'},{value:'"20"'},{value:'"24"'},{value:'"28"'},{value:'"32"'},{value:'"36"'},{value:'"40"'},{value:'"44"'},{value:'"48"'},{value:'"52"'},{value:'"56"'},{value:'"60"'},{value:'"64"'},{value:'"72"'},{value:'"80"'},{value:'"96"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stack/Stack.component.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Stack/Stack.component.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Stack/Stack.component.tsx")},"./src/components/ModalFooter/ModalFooter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configure:()=>Configure,Custom:()=>Custom,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/ModalFooter/index.ts")),_Button_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.ts"),_ButtonRow_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ButtonRow/index.ts"),_Stack_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Stack/index.ts"),_Icon_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.j,__assign({},args))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal/ModalFooter",component:_index__WEBPACK_IMPORTED_MODULE_2__.j,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}}};var Default={render:Template,args:{}},Configure={render:Template,args:{confirmButtonLabel:"Confirm Action",cancelButtonLabel:"Cancel Action"}},Custom={render:Template,args:{className:"jn-justify-between jn-items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Stack_index__WEBPACK_IMPORTED_MODULE_5__.B,{gap:"2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_6__.I,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Some status here"})]},"s1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ButtonRow_index__WEBPACK_IMPORTED_MODULE_4__.z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"primary-danger",label:"Destruction"},"b-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"primary",label:"World Peace"},"b-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"subdued",label:"Surprise Me!"},"b-3")]},"br-1")]}};const __namedExportsOrder=["Default","Configure","Custom"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {}\n}",...Default.parameters?.docs?.source}}},Configure.parameters={...Configure.parameters,docs:{...Configure.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    confirmButtonLabel: "Confirm Action",\n    cancelButtonLabel: "Cancel Action"\n  }\n}',...Configure.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    className: "jn-justify-between jn-items-center",\n    children: [<Stack gap="2" key="s1">\n        <Icon />\n        <span>Some status here</span>\n      </Stack>, <ButtonRow key="br-1">\n        <Button variant="primary-danger" label="Destruction" key="b-1" />\n        <Button variant="primary" label="World Peace" key="b-2" />\n        <Button variant="subdued" label="Surprise Me!" key="b-3" />\n      </ButtonRow>]\n  }\n}',...Custom.parameters?.docs?.source}}}},"./src/components/Button/button.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-button-default{background-color:var(--color-button-default-bg);color:var(--color-button-default-text)}.juno-button-default:hover{background-color:var(--color-button-default-hover-bg);color:var(--color-button-default-hover-text)}.juno-button-default:active{background-color:var(--color-button-default-active-bg);border-color:var(--color-button-default-active-border);color:var(--color-button-default-active-text)}.juno-button-subdued{background-color:var(--color-button-subdued-bg);border:1px solid var(--color-button-subdued-border);color:var(--color-button-subdued-text)}.juno-button-subdued:hover{background-color:var(--color-button-subdued-hover-bg);border-color:var(--color-button-subdued-hover-border);color:var(--color-button-subdued-hover-text)}.juno-button-subdued:active{background-color:var(--color-button-subdued-active-bg);border-color:var(--color-button-subdued-active-border);color:var(--color-button-subdued-active-text)}.juno-button-primary{background-color:var(--color-button-primary-bg);color:var(--color-button-primary-text)}.juno-button-primary:hover{background-color:var(--color-button-primary-hover-bg);color:var(--color-button-primary-hover-text)}.juno-button-primary:active{background-color:var(--color-button-primary-active-bg);color:var(--color-button-primary-active-text)}.juno-button-primary-danger{background-color:var(--color-button-primary-danger-bg);color:var(--color-button-primary-danger-text)}.juno-button-primary-danger:hover{background-color:var(--color-button-primary-danger-hover-bg);color:var(--color-button-primary-danger-hover-text)}.juno-button-primary-danger:active{background-color:var(--color-button-primary-danger-active-bg);color:var(--color-button-primary-danger-active-text)}","",{version:3,sources:["webpack://./src/components/Button/button.scss"],names:[],mappings:"AAMA,qBACE,+CAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKJ,qBACE,+CAAA,CACA,mDAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,sDAAA,CACA,6CAAA,CAKJ,qBACE,+CAAA,CACA,sCAAA,CAEA,2BACE,qDAAA,CACA,4CAAA,CAGF,4BACE,sDAAA,CACA,6CAAA,CAKJ,4BACE,sDAAA,CACA,6CAAA,CAEA,kCACE,4DAAA,CACA,mDAAA,CAGF,mCACE,6DAAA,CACA,oDAAA",sourcesContent:["// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// handle button colours here, not in tw because of overall complexity, mostly singular colors, gradients, etc; and conflicting bg-colors and bg-images:\n\n\n.juno-button-default {\n  background-color: var(--color-button-default-bg);\n  color: var(--color-button-default-text);\n  \n  &:hover {\n    background-color: var(--color-button-default-hover-bg);\n    color: var(--color-button-default-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-default-active-bg);\n    border-color: var(--color-button-default-active-border);\n    color: var(--color-button-default-active-text);\n  }\n\n}\n\n.juno-button-subdued {\n  background-color: var(--color-button-subdued-bg);\n  border: 1px solid var(--color-button-subdued-border);\n  color: var(--color-button-subdued-text);\n  \n  &:hover {\n    background-color: var(--color-button-subdued-hover-bg);\n    border-color: var(--color-button-subdued-hover-border);\n    color: var(--color-button-subdued-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-subdued-active-bg);\n    border-color: var(--color-button-subdued-active-border);\n    color: var(--color-button-subdued-active-text);\n  }\n  \n}\n\n.juno-button-primary {\n  background-color: var(--color-button-primary-bg);\n  color: var(--color-button-primary-text);\n  \n  &:hover {\n    background-color: var(--color-button-primary-hover-bg);\n    color: var(--color-button-primary-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-primary-active-bg);\n    color: var(--color-button-primary-active-text);\n  }\n  \n}\n\n.juno-button-primary-danger {\n  background-color: var(--color-button-primary-danger-bg);\n  color: var(--color-button-primary-danger-text);\n  \n  &:hover {\n    background-color: var(--color-button-primary-danger-hover-bg);\n    color: var(--color-button-primary-danger-hover-text);\n  }\n  \n  &:active {\n    background-color: var(--color-button-primary-danger-active-bg);\n    color: var(--color-button-primary-danger-active-text);\n  }\n  \n}\n"],sourceRoot:""}])}}]);