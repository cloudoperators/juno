"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3543],{"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/SearchInput/SearchInput.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>SearchInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),_Stack__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Stack/index.ts"),__assign=(__webpack_require__("./src/components/SearchInput/searchinput.scss"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},getWrapperStyles=function(variant){var baseStyles="jn-relative jn-inline-block jn-win-max";switch(variant){case"rounded":default:return"".concat(baseStyles," jn-w-auto");case"hero":return"".concat(baseStyles," jn-w-full")}},getSearchStyles=function(variant){var baseStyles="\n    jn-bg-theme-textinput\n    jn-text-theme-high\n    jn-shadow\n    jn-w-full\n    focus:jn-outline-none\n    focus:jn-ring-2\n    focus:jn-ring-theme-focus\n    disabled:jn-cursor-not-allowed\n    disabled:jn-opacity-50\n  ";switch(variant){case"rounded":return"".concat(baseStyles," ").concat("jn-rounded-full focus:jn-rounded-full"," jn-text-base jn-w-auto jn-pl-3 jn-pr-16 jn-py-1");case"hero":return"".concat(baseStyles," ").concat("jn-rounded-full focus:jn-rounded-full"," jn-text-lg jn-w-full jn-pl-6 jn-pr-20 jn-py-2.5");default:return"".concat(baseStyles," jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5")}},getIconWrapperStyles=function(variant){switch(variant){case"rounded":return"jn-absolute jn-inline-flex jn-right-3 jn-top-1";case"hero":return"jn-absolute jn-inline-flex jn-right-5";default:return"jn-absolute jn-inline-flex jn-right-3 jn-top-2"}},getClearIconStyles=function(variant){return"hero"===variant?"jn-mr-2.5":"jn-mr-2"},getClearIconSize=function(variant){return"hero"===variant?"24":"18"},SearchInput=function(_a){var _b=_a.value,value=void 0===_b?"":_b,_c=_a.name,name=void 0===_c?"search":_c,_d=_a.variant,variant=void 0===_d?"default":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,_f=_a.clear,clear=void 0===_f||_f,onSearch=_a.onSearch,onChange=_a.onChange,onClick=_a.onClick,onKeyPress=_a.onKeyPress,onClear=_a.onClear,_g=_a.autoComplete,autoComplete=void 0===_g?"off":_g,_h=_a.placeholder,placeholder=void 0===_h?"Search…":_h,_j=_a.className,className=void 0===_j?"":_j,props=__rest(_a,["value","name","variant","disabled","clear","onSearch","onChange","onClick","onKeyPress","onClear","autoComplete","placeholder","className"]),_k=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),val=_k[0],setValue=_k[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setValue(value)}),[value]);var handleInputChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){setValue(event.target.value),null==onChange||onChange(event)}),[onChange]),handleKeyPress=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){"Enter"===event.key&&onSearch&&onSearch(val),null==onKeyPress||onKeyPress(event)}),[onSearch,onKeyPress,val]),handleSearchClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){null==onSearch||onSearch(val),null==onClick||onClick(event)}),[onSearch,onClick,val]),handleClearClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){setValue(""),null==onClear||onClear(event)}),[onClear]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"juno-search-input-wrapper ".concat(getWrapperStyles(variant)," ").concat(className),role:"search",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Stack__WEBPACK_IMPORTED_MODULE_3__.B,{gap:"2",alignment:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",__assign({type:"search",name,placeholder,disabled,value:val,autoComplete,className:"juno-search-input ".concat(getSearchStyles(variant)),onChange:handleInputChange,onKeyPress:handleKeyPress},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:getIconWrapperStyles(variant),children:[clear&&(null==val?void 0:val.length)>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"close",size:getClearIconSize(variant),title:"Clear",className:getClearIconStyles(variant),onClick:handleClearClick,disabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"search",title:"Search",onClick:handleSearchClick,disabled})]})]})})};try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:'A SearchInput is a controlled input component for searching.\nIt provides a text field to enter a search query and optional clear and search icons.\nThree styling variants are supported: "rounded", "hero", and "default".',displayName:"SearchInput",props:{name:{defaultValue:{value:"search"},description:"Specifies the name attribute for the input element.",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:'Determines the visual styling variant of the SearchInput component.\n- "default": Standard search input styling.\n- "hero": A larger search input intended for standalone use on a dedicated search page, akin to the initial Google search page.\n- "rounded": A search input with rounded edges.',name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"rounded"'},{value:'"hero"'}]}},disabled:{defaultValue:{value:"false"},description:"Disables the search input when set to true.",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Search…"},description:"Custom placeholder text displayed in the search input.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Initial value for the search input.",name:"value",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"Controls the autocomplete attribute of the input element.\nPass a valid autocomplete value.\nWe do not enforce validity.",name:"autoComplete",required:!1,type:{name:"string"}},clear:{defaultValue:{value:"true"},description:"Determines whether to show the 'Clear' button.",name:"clear",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the search input.",name:"className",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"Callback function invoked when a search is triggered, either by pressing the 'Enter' key or by clicking the search icon.",name:"onSearch",required:!1,type:{name:"((_value: string) => void)"}},onClick:{defaultValue:null,description:"Click handler for the search icon.",name:"onClick",required:!1,type:{name:"((_event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void)"}},onChange:{defaultValue:null,description:"Change handler for the search input.",name:"onChange",required:!1,type:{name:"((_event: ChangeEvent<HTMLInputElement>) => void)"}},onKeyPress:{defaultValue:null,description:"KeyPress handler for the search input. By default, triggers the onSearch function when the 'Enter' key is pressed.",name:"onKeyPress",required:!1,type:{name:"((_event: KeyboardEvent<HTMLInputElement>) => void)"}},onClear:{defaultValue:null,description:"Click handler for the 'Clear' button.",name:"onClear",required:!1,type:{name:"((_event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SearchInput/SearchInput.component.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/components/SearchInput/SearchInput.component.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/Stack.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},baseStack=function(direction,gap,wrap){return"\n      ".concat("vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row","\n      ").concat(wrap&&"jn-flex-wrap","\n      ").concat(function(gap){switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}}(gap),"\n    ")},alignItems=function(alignment){switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=function(distribution){switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=function(_a){var _b=_a.direction,direction=void 0===_b?"horizontal":_b,_c=_a.gap,gap=void 0===_c?"0":_c,_d=_a.alignment,alignment=void 0===_d?"stretch":_d,_e=_a.distribution,distribution=void 0===_e?"start":_e,_f=_a.wrap,wrap=void 0!==_f&&_f,_g=_a.className,className=void 0===_g?"":_g,_h=_a.children,children=void 0===_h?null:_h,props=__rest(_a,["direction","gap","alignment","distribution","wrap","className","children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"juno-stack ".concat(baseStack(direction,gap,wrap)," ").concat(alignItems(alignment)," ").concat(justifyItems(distribution)," ").concat(className||"")},props,{children}))};try{Stack.displayName="Stack",Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",displayName:"Stack",props:{className:{defaultValue:{value:""},description:"Pass css class names",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"Stack items horizontally or vertically",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignment:{defaultValue:{value:"stretch"},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"baseline"'},{value:'"stretch"'}]}},distribution:{defaultValue:{value:"start"},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",name:"distribution",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"Specify whether the Stack children should be allowed to wrap or not",name:"wrap",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"0"},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",name:"gap",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"0"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"0.5"'},{value:'"1.5"'},{value:'"2.5"'},{value:'"3.5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:'"14"'},{value:'"16"'},{value:'"20"'},{value:'"24"'},{value:'"28"'},{value:'"32"'},{value:'"36"'},{value:'"40"'},{value:'"44"'},{value:'"48"'},{value:'"52"'},{value:'"56"'},{value:'"60"'},{value:'"64"'},{value:'"72"'},{value:'"80"'},{value:'"96"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stack/Stack.component.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Stack/Stack.component.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Stack/Stack.component.tsx")},"./src/components/SearchInput/SearchInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Hero:()=>Hero,Rounded:()=>Rounded,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchInput_stories});const SearchInput_stories={title:"Components/SearchInput",component:__webpack_require__("./src/components/SearchInput/SearchInput.component.tsx").D,argTypes:{}};var Default={args:{}},Rounded={args:{variant:"rounded"}},Hero={args:{variant:"hero"}},Disabled={args:{disabled:!0}};const __namedExportsOrder=["Default","Rounded","Hero","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Rounded.parameters={...Rounded.parameters,docs:{...Rounded.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "rounded"\n  }\n}',...Rounded.parameters?.docs?.source}}},Hero.parameters={...Hero.parameters,docs:{...Hero.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "hero"\n  }\n}',...Hero.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}},"./src/components/Icon/icons/home_sharp.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgHomeSharp(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))}},"./src/components/Icon/icons/juno-danger.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoDanger(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))}},"./src/components/Icon/icons/juno_severity_critical.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityCritical(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_high.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityHigh(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_low.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityLow(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/juno_severity_medium.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityMedium(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/components/Icon/icons/place.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgPlace(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))}},"./src/components/SearchInput/searchinput.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-search-input::-webkit-search-cancel-button{-webkit-appearance:none}","",{version:3,sources:["webpack://./src/components/SearchInput/searchinput.scss"],names:[],mappings:"AAKA,iDACE,uBAAA",sourcesContent:["/*\n * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n * SPDX-License-Identifier: Apache-2.0\n */\n\n.juno-search-input::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n"],sourceRoot:""}])}}]);