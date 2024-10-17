"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[5095],{"./src/components/FilterPill/FilterPill.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FilterPill});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FilterPill=_ref=>{let{uid="",filterKey="",filterKeyLabel="",filterValue="",filterValueLabel="",onClose,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-filterpill \n\tjn-inline-flex\n\tjn-basis-auto\n\tjn-shrink\n\tjn-items-center\n\tjn-flex-nowrap\n\tjn-text-xs\n\tjn-p-px\n\tjn-border\n\tjn-rounded\n\tjn-mr-2\n\tjn-border-theme-filter-pill\n\tlast:jn-mr-0\n ${className}`},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\tjn-bg-theme-filter-pill-key\n\tjn-px-1\n\tjn-py-0.5\n\tjn-rounded-sm\n  jn-text-theme-high\n\tjn-inline-block\n"},filterKeyLabel||filterKey),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\tjn-px-1\n\tjn-py-0.5\n\tjn-text-theme-high\n\tjn-inline-block\n"},filterValueLabel||filterValue),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"close",size:"18",onClick:()=>{onClose&&onClose(uid||filterKey)}}))};FilterPill.propTypes={uid:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,filterKey:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,filterKeyLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,filterValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,filterValueLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClose:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func},FilterPill.__docgenInfo={description:"-- Deprecated. For new implementations, use Pill instead.--\\n\nA Pill to represent Key and Value of a filter. Can be closed to un-apply the filter represented.\nMostly to be used inside a Filters component in conjunction with FilterInput.",methods:[],displayName:"FilterPill",props:{uid:{defaultValue:{value:'""',computed:!1},description:"The unique identifier of the pill. Returned by the onClose callback",type:{name:"string"},required:!1},filterKey:{defaultValue:{value:'""',computed:!1},description:"The key of the filter the pill represents. Returned by the onClose callback if uid undefined",type:{name:"string"},required:!1},filterKeyLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the filter key. If not set filterKey is used",type:{name:"string"},required:!1},filterValue:{defaultValue:{value:'""',computed:!1},description:"The value of filter the pill represents",type:{name:"string"},required:!1},filterValueLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the filter value. If not set filterValue is used",type:{name:"string"},required:!1},onClose:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed when closing the FilterPill",type:{name:"func"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"add custom classNames",type:{name:"string"},required:!1}}}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/SearchInput/SearchInput.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>SearchInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),_Stack__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Stack/index.ts"),__assign=(__webpack_require__("./src/components/SearchInput/searchinput.scss"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},getWrapperStyles=function(variant){var baseStyles="jn-relative jn-inline-block jn-win-max";switch(variant){case"rounded":default:return"".concat(baseStyles," jn-w-auto");case"hero":return"".concat(baseStyles," jn-w-full")}},getSearchStyles=function(variant){var baseStyles="\n    jn-bg-theme-textinput\n    jn-text-theme-high\n    jn-shadow\n    jn-w-full\n    focus:jn-outline-none\n    focus:jn-ring-2\n    focus:jn-ring-theme-focus\n    disabled:jn-cursor-not-allowed\n    disabled:jn-opacity-50\n  ";switch(variant){case"rounded":return"".concat(baseStyles," ").concat("jn-rounded-full focus:jn-rounded-full"," jn-text-base jn-w-auto jn-pl-3 jn-pr-16 jn-py-1");case"hero":return"".concat(baseStyles," ").concat("jn-rounded-full focus:jn-rounded-full"," jn-text-lg jn-w-full jn-pl-6 jn-pr-20 jn-py-2.5");default:return"".concat(baseStyles," jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5")}},getIconWrapperStyles=function(variant){switch(variant){case"rounded":return"jn-absolute jn-inline-flex jn-right-3 jn-top-1";case"hero":return"jn-absolute jn-inline-flex jn-right-5";default:return"jn-absolute jn-inline-flex jn-right-3 jn-top-2"}},getClearIconStyles=function(variant){return"hero"===variant?"jn-mr-2.5":"jn-mr-2"},getClearIconSize=function(variant){return"hero"===variant?"24":"18"},SearchInput=function(_a){var _b=_a.value,value=void 0===_b?"":_b,_c=_a.name,name=void 0===_c?"search":_c,_d=_a.variant,variant=void 0===_d?"default":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,_f=_a.clear,clear=void 0===_f||_f,onSearch=_a.onSearch,onChange=_a.onChange,onClick=_a.onClick,onKeyPress=_a.onKeyPress,onClear=_a.onClear,_g=_a.autoComplete,autoComplete=void 0===_g?"off":_g,_h=_a.placeholder,placeholder=void 0===_h?"Search…":_h,_j=_a.className,className=void 0===_j?"":_j,props=__rest(_a,["value","name","variant","disabled","clear","onSearch","onChange","onClick","onKeyPress","onClear","autoComplete","placeholder","className"]),_k=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),val=_k[0],setValue=_k[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setValue(value)}),[value]);var handleInputChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){setValue(event.target.value),null==onChange||onChange(event)}),[onChange]),handleKeyPress=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){"Enter"===event.key&&onSearch&&onSearch(val),null==onKeyPress||onKeyPress(event)}),[onSearch,onKeyPress,val]),handleSearchClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){null==onSearch||onSearch(val),null==onClick||onClick(event)}),[onSearch,onClick,val]),handleClearClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){setValue(""),null==onClear||onClear(event)}),[onClear]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"juno-search-input-wrapper ".concat(getWrapperStyles(variant)," ").concat(className),role:"search",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Stack__WEBPACK_IMPORTED_MODULE_3__.B,{gap:"2",alignment:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",__assign({type:"search",name,placeholder,disabled,value:val,autoComplete,className:"juno-search-input ".concat(getSearchStyles(variant)),onChange:handleInputChange,onKeyPress:handleKeyPress},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:getIconWrapperStyles(variant),children:[clear&&(null==val?void 0:val.length)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"close",size:getClearIconSize(variant),title:"Clear",className:getClearIconStyles(variant),onClick:handleClearClick,disabled}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"search",title:"Search",onClick:handleSearchClick,disabled})]})]})})};try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:'A SearchInput is a controlled input component for searching.\nIt provides a text field to enter a search query and optional clear and search icons.\nThree styling variants are supported: "rounded", "hero", and "default".',displayName:"SearchInput",props:{name:{defaultValue:{value:"search"},description:"Specifies the name attribute for the input element.",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:'Determines the visual styling variant of the SearchInput component.\n- "default": Standard search input styling.\n- "hero": A larger search input intended for standalone use on a dedicated search page, akin to the initial Google search page.\n- "rounded": A search input with rounded edges.',name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"rounded"'},{value:'"hero"'}]}},disabled:{defaultValue:{value:"false"},description:"Disables the search input when set to true.",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Search…"},description:"Custom placeholder text displayed in the search input.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Initial value for the search input.",name:"value",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"Controls the autocomplete attribute of the input element.\nPass a valid autocomplete value.\nWe do not enforce validity.",name:"autoComplete",required:!1,type:{name:"string"}},clear:{defaultValue:{value:"true"},description:"Determines whether to show the 'Clear' button.",name:"clear",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the search input.",name:"className",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"Callback function invoked when a search is triggered, either by pressing the 'Enter' key or by clicking the search icon.",name:"onSearch",required:!1,type:{name:"((_value: string) => void)"}},onClick:{defaultValue:null,description:"Click handler for the search icon.",name:"onClick",required:!1,type:{name:"((_event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void)"}},onChange:{defaultValue:null,description:"Change handler for the search input.",name:"onChange",required:!1,type:{name:"((_event: ChangeEvent<HTMLInputElement>) => void)"}},onKeyPress:{defaultValue:null,description:"KeyPress handler for the search input. By default, triggers the onSearch function when the 'Enter' key is pressed.",name:"onKeyPress",required:!1,type:{name:"((_event: KeyboardEvent<HTMLInputElement>) => void)"}},onClear:{defaultValue:null,description:"Click handler for the 'Clear' button.",name:"onClear",required:!1,type:{name:"((_event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SearchInput/SearchInput.component.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/components/SearchInput/SearchInput.component.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/Stack.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},baseStack=function(direction,gap,wrap){return"\n      ".concat("vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row","\n      ").concat(wrap&&"jn-flex-wrap","\n      ").concat(function(gap){switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}}(gap),"\n    ")},alignItems=function(alignment){switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=function(distribution){switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=function(_a){var _b=_a.direction,direction=void 0===_b?"horizontal":_b,_c=_a.gap,gap=void 0===_c?"0":_c,_d=_a.alignment,alignment=void 0===_d?"stretch":_d,_e=_a.distribution,distribution=void 0===_e?"start":_e,_f=_a.wrap,wrap=void 0!==_f&&_f,_g=_a.className,className=void 0===_g?"":_g,_h=_a.children,children=void 0===_h?null:_h,props=__rest(_a,["direction","gap","alignment","distribution","wrap","className","children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"juno-stack ".concat(baseStack(direction,gap,wrap)," ").concat(alignItems(alignment)," ").concat(justifyItems(distribution)," ").concat(className||"")},props,{children}))};try{Stack.displayName="Stack",Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",displayName:"Stack",props:{className:{defaultValue:{value:""},description:"Pass css class names",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"Stack items horizontally or vertically",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignment:{defaultValue:{value:"stretch"},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"baseline"'},{value:'"stretch"'}]}},distribution:{defaultValue:{value:"start"},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",name:"distribution",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"Specify whether the Stack children should be allowed to wrap or not",name:"wrap",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"0"},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",name:"gap",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"0"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"0.5"'},{value:'"1.5"'},{value:'"2.5"'},{value:'"3.5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:'"14"'},{value:'"16"'},{value:'"20"'},{value:'"24"'},{value:'"28"'},{value:'"32"'},{value:'"36"'},{value:'"40"'},{value:'"44"'},{value:'"48"'},{value:'"52"'},{value:'"56"'},{value:'"60"'},{value:'"64"'},{value:'"72"'},{value:'"80"'},{value:'"96"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stack/Stack.component.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Stack/Stack.component.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Stack/Stack.component.tsx")},"./src/components/Filters/Filters.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorWithPills:()=>ErrorWithPills,Loading:()=>Loading,PreseletedWithSearch:()=>PreseletedWithSearch,SearchOnly:()=>SearchOnly,WithPills:()=>WithPills,default:()=>Filters_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),FilterInput_component=__webpack_require__("./src/components/FilterInput/FilterInput.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Filters=_ref=>{let{search=null,filters=null,selectedFilterKey="",onSelectedFilterKeyChange,filterValue="",valuePlaceholder="",onFilterValueChange,onFilter,onFilterClear,children,className="",loading=!1,error=!1,errortext="",...props}=_ref;const[isLoading,setIsLoading]=(0,react.useState)(!1),[hasError,setHasError]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setHasError(error||"string"==typeof errortext&&errortext.length>0)}),[error,errortext]),(0,react.useEffect)((()=>{setIsLoading(loading)}),[loading]),react.createElement("div",_extends({className:`juno-filters ${hasError?"juno-filters-error ":""} \n\tjn-mb-px\n\tjn-bg-theme-filters\n\tjn-rounded-t\n\tjn-pt-4\n\tjn-px-4\n\tjn-pb-2\n ${className}`},props),react.createElement("div",{className:"juno-filters-input-wrapper \n\tjn-w-full\n\tjn-flex\n\tjn-mb-2\n"},filters&&filters.options?react.createElement(FilterInput_component.Z,{keyLabel:filters.keyLabel,valueLabel:filters.valueLabel,options:filters.options,selectedFilterKey,onSelectedFilterKeyChange,filterValue,valuePlaceholder,onFilterValueChange,onFilter,onClear:onFilterClear,loading:isLoading,error:hasError}):null,search?react.createElement("div",{className:"\n\tjn-ml-auto\n"},search):null),hasError&&errortext?react.createElement("div",{className:"juno-filters-errortext \n\tjn-text-theme-error\n\tjn-text-sm\n\tjn-mt-[-0.25rem]\n\tjn-mb-1.5\n"},errortext):"",react.createElement("div",{className:"\n\tjn-flex\n\tjn-flex-wrap\n"},children))};Filters.propTypes={search:prop_types_default().node,filters:prop_types_default().object,selectedFilterKey:prop_types_default().string,onSelectedFilterKeyChange:prop_types_default().func,filterValue:prop_types_default().string,valuePlaceholder:prop_types_default().string,onFilterValueChange:prop_types_default().func,onFilter:prop_types_default().func,onFilterClear:prop_types_default().func,className:prop_types_default().string,loading:prop_types_default().bool,error:prop_types_default().bool,errortext:prop_types_default().string,children:prop_types_default().any},Filters.__docgenInfo={description:"-- Deprecated. For new implementations, combine and compose Input Group, Inputs and Pills as needed. --\nA component to hold a FilterInput, resulting FilterPills, and optional SearchBar for any filter-able content.",methods:[],displayName:"Filters",props:{search:{defaultValue:{value:"null",computed:!1},description:"Pass a SearchInput component",type:{name:"node"},required:!1},filters:{defaultValue:{value:"null",computed:!1},description:'Pass an object describing the filter keyLabel, valueLabel, and the available filter options:\n\t`{ keyLabel: "Select a Filter",`\n\t\t `valueLabel: "Enter a Value",`\n\t\t `options: [{label: "Filter 1", key: "filter-1"}, {...}] }`',type:{name:"object"},required:!1},selectedFilterKey:{defaultValue:{value:'""',computed:!1},description:"The key of the currently selected filter",type:{name:"string"},required:!1},filterValue:{defaultValue:{value:'""',computed:!1},description:"The value of the FilterInput",type:{name:"string"},required:!1},valuePlaceholder:{defaultValue:{value:'""',computed:!1},description:"Optional: Pass a placeholder for the filter value text input",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"add custom classNames",type:{name:"string"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the filters are currently loading",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the filters have an error",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"The error message to display. When passed, error is set to true automatically",type:{name:"string"},required:!1},onSelectedFilterKeyChange:{description:"Pass a handler to be executed when the filter key changes",type:{name:"func"},required:!1},onFilterValueChange:{description:"Pass a handler to be executed whenever the value of the filter value input changes",type:{name:"func"},required:!1},onFilter:{description:"Pass a handler to be executed once the user clicks the filter button",type:{name:"func"},required:!1},onFilterClear:{description:"Pas a handler to be executed once the Filter input is cleared",type:{name:"func"},required:!1},children:{description:"",type:{name:"any"},required:!1}}};var FilterPill_component=__webpack_require__("./src/components/FilterPill/FilterPill.component.js"),SearchInput_component=__webpack_require__("./src/components/SearchInput/SearchInput.component.tsx");const Filters_stories={title:"Deprecated/Filter/Filters",component:Filters,argTypes:{}},PillsTemplate=args=>react.createElement(Filters,args,args.filters&&args.filters.options&&args.filters.options.length?args.filters.options.map(((filter,i)=>react.createElement(FilterPill_component.m,{filterKey:filter.key,filterKeyLabel:filter.label,filterValue:`value_${i}`,filterValueLabel:`Value ${i}`,key:`filter-${i}`,onClose:()=>console.log(filter.key,"closing")}))):null),Default={args:{valuePlaceholder:"Enter a value",filters:{keyLabel:"Select a Filter",options:[{key:"filter-1",label:"Filter 1"}]}}},Loading={args:{filters:{keyLabel:"Select a Filter",options:[]},loading:!0}},WithPills={render:PillsTemplate,args:{filters:{keyLabel:"Select a Filter",options:[{key:"filter-01",label:"Filter 1"},{key:"filter-02",label:"Filter 2"},{key:"filter-03",label:"Filter 3"}]}}},ErrorWithPills={render:PillsTemplate,args:{filters:{options:[{key:"filter-01",label:"Filter 1"},{key:"filter-02",label:"Filter 2"},{key:"filter-03",label:"Filter 3"}]},error:!0}},PreseletedWithSearch={args:{selectedFilterKey:"filter-2",search:react.createElement(SearchInput_component.D,{onSearch:()=>{console.log("Searching…")}}),filters:{keyLabel:"Select a Filter",options:[{key:"filter-01",label:"Filter 1"},{key:"filter-02",label:"Filter 2"},{key:"filter-03",label:"Filter 3"}]}}},SearchOnly={args:{search:react.createElement(SearchInput_component.D,{onSearch:()=>{console.log("Searching…")}})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    valuePlaceholder: "Enter a value",\n    filters: {\n      keyLabel: "Select a Filter",\n      options: [{\n        key: "filter-1",\n        label: "Filter 1"\n      }]\n    }\n  }\n}',...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  args: {\n    filters: {\n      keyLabel: "Select a Filter",\n      options: []\n    },\n    loading: true\n  }\n}',...Loading.parameters?.docs?.source}}},WithPills.parameters={...WithPills.parameters,docs:{...WithPills.parameters?.docs,source:{originalSource:'{\n  render: PillsTemplate,\n  args: {\n    filters: {\n      keyLabel: "Select a Filter",\n      options: [{\n        key: "filter-01",\n        label: "Filter 1"\n      }, {\n        key: "filter-02",\n        label: "Filter 2"\n      }, {\n        key: "filter-03",\n        label: "Filter 3"\n      }]\n    }\n  }\n}',...WithPills.parameters?.docs?.source}}},ErrorWithPills.parameters={...ErrorWithPills.parameters,docs:{...ErrorWithPills.parameters?.docs,source:{originalSource:'{\n  render: PillsTemplate,\n  args: {\n    filters: {\n      options: [{\n        key: "filter-01",\n        label: "Filter 1"\n      }, {\n        key: "filter-02",\n        label: "Filter 2"\n      }, {\n        key: "filter-03",\n        label: "Filter 3"\n      }]\n    },\n    error: true\n  }\n}',...ErrorWithPills.parameters?.docs?.source}}},PreseletedWithSearch.parameters={...PreseletedWithSearch.parameters,docs:{...PreseletedWithSearch.parameters?.docs,source:{originalSource:'{\n  args: {\n    selectedFilterKey: "filter-2",\n    search: <SearchInput onSearch={() => {\n      console.log("Searching…");\n    }} />,\n    filters: {\n      keyLabel: "Select a Filter",\n      options: [{\n        key: "filter-01",\n        label: "Filter 1"\n      }, {\n        key: "filter-02",\n        label: "Filter 2"\n      }, {\n        key: "filter-03",\n        label: "Filter 3"\n      }]\n    }\n  }\n}',...PreseletedWithSearch.parameters?.docs?.source}}},SearchOnly.parameters={...SearchOnly.parameters,docs:{...SearchOnly.parameters?.docs,source:{originalSource:'{\n  args: {\n    search: <SearchInput onSearch={() => {\n      console.log("Searching…");\n    }} />\n  }\n}',...SearchOnly.parameters?.docs?.source}}}},"./src/components/SearchInput/searchinput.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-search-input::-webkit-search-cancel-button{-webkit-appearance:none}","",{version:3,sources:["webpack://./src/components/SearchInput/searchinput.scss"],names:[],mappings:"AAKA,iDACE,uBAAA",sourcesContent:["/*\n * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n * SPDX-License-Identifier: Apache-2.0\n */\n\n.juno-search-input::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n"],sourceRoot:""}])}}]);