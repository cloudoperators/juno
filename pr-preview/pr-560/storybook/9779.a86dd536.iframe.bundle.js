"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[9779],{"./src/components/JsonViewer/JsonViewer.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>JsonViewer});var themes_namespaceObject={};__webpack_require__.r(themes_namespaceObject),__webpack_require__.d(themes_namespaceObject,{dark:()=>dark,light:()=>light});var prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("../../node_modules/react/index.js");const dark={base00:"rgb(39, 40, 34)",base01:"rgb(245, 245, 245)",base02:"rgb(73, 72, 62)",base03:"#93a1a1",base04:"rgb(165, 159, 133)",base05:"rgb(248, 248, 242)",base06:"#073642",base07:"rgb(249, 248, 245)",base08:"rgb(249, 38, 114)",base09:"rgb(253, 151, 31)",base0A:"rgb(244, 191, 117)",base0B:"rgb(166, 226, 46)",base0C:"rgb(161, 239, 228)",base0D:"rgb(102, 217, 239)",base0E:"rgb(174, 129, 255)",base0F:"rgb(204, 102, 51)"},light={base00:"#fff",base01:"rgb(245, 245, 245)",base02:"rgb(235, 235, 235)",base03:"#93a1a1",base04:"rgba(0, 0, 0, 0.3)",base05:"#586e75",base06:"#073642",base07:"#002b36",base08:"#d33682",base09:"#cb4b16",base0A:"#dc322f",base0B:"#859900",base0C:"#6c71c4",base0D:"#586e75",base0E:"#2aa198",base0F:"#268bd2"};__webpack_require__("./src/deprecated_js/SearchInput/searchinput.scss");var Icon=__webpack_require__("./src/deprecated_js/Icon/index.js"),Stack=__webpack_require__("./src/deprecated_js/Stack/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const wrapperStyles=variant=>{const wrapperBaseStyles="\n    jn-relative\n    jn-inline-block\n    jn-win-max\n  ";switch(variant){case"rounded":default:return`${wrapperBaseStyles} jn-w-auto`;case"hero":return`${wrapperBaseStyles} jn-w-full`}},searchStyles=variant=>{const searchBaseStyles="\n    jn-bg-theme-textinput\n    jn-text-theme-high\n    jn-shadow\n    jn-w-full\n    focus:jn-outline-none\n    focus:jn-ring-2\n    focus:jn-ring-theme-focus\n    disabled:jn-cursor-not-allowed\n    disabled:jn-opacity-50\n  ",roundedStyles="\n    jn-rounded-full \n    focus:jn-rounded-full\n  ";switch(variant){case"rounded":return`${searchBaseStyles} ${roundedStyles} jn-text-base jn-w-auto jn-pl-3 jn-pr-16 jn-py-1`;case"hero":return`${searchBaseStyles} ${roundedStyles} jn-text-lg jn-w-full jn-pl-6 jn-pr-20 jn-py-2.5`;default:return`${searchBaseStyles} jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5`}},iconWrapperStyles=variant=>{switch(variant){case"rounded":return"jn-absolute jn-inline-flex jn-right-3 jn-top-1";case"hero":return"jn-absolute jn-inline-flex jn-right-5";default:return"jn-absolute jn-inline-flex jn-right-3 jn-top-2"}},clearIconStyles=variant=>{switch(variant){case"rounded":default:return"jn-mr-2";case"hero":return"jn-mr-2.5"}},clearIconSize=variant=>"hero"===variant?"24":"18",SearchInput=_ref=>{let{value="",variant="default",disabled=!1,clear=!0,onSearch,onChange,onClick,onKeyPress,onClear,autoComplete="off",placeholder="Search…",className="",...props}=_ref;const[val,setValue]=(0,react.useState)(value);(0,react.useEffect)((()=>{setValue(value)}),[value]);return react.createElement("div",{className:`juno-search-input-wrapper ${wrapperStyles(variant)} ${className}`,role:"search"},react.createElement(Stack.B,{gap:"2",alignment:"center"},react.createElement("input",_extends({type:"search",name:name||"search",placeholder,disabled,value:val,autoComplete,className:`juno-search-input ${searchStyles(variant)}`,onChange:event=>{setValue(event.target.value),onChange&&onChange(event)},onKeyPress:event=>{"Enter"===event.key&&onSearch&&onSearch(val),onKeyPress&&onKeyPress(event)}},props)),react.createElement("div",{className:`${iconWrapperStyles(variant)}`},clear&&val?.length?react.createElement(Icon.I,{icon:"close",size:`${clearIconSize(variant)}`,title:"Clear",className:`${clearIconStyles(variant)}`,onClick:event=>{setValue(""),onClear&&onClear(event)},disabled}):null,react.createElement(Icon.I,{icon:"search",title:"Search",onClick:event=>{onSearch&&onSearch(val),onClick&&onClick(event)},disabled}))))};function JsonViewer_component_extends(){return JsonViewer_component_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},JsonViewer_component_extends.apply(null,arguments)}SearchInput.propTypes={name:prop_types_default().string,variant:prop_types_default().oneOf(["rounded","hero","default"]),disabled:prop_types_default().bool,placeholder:prop_types_default().string,value:prop_types_default().string,autoComplete:prop_types_default().string,clear:prop_types_default().bool,className:prop_types_default().string,onSearch:prop_types_default().func,onClick:prop_types_default().func,onChange:prop_types_default().func,onKeyPress:prop_types_default().func,onClear:prop_types_default().func},SearchInput.__docgenInfo={description:'A basic, atomic, controlled Input[type="search"]',methods:[],displayName:"SearchInput",props:{value:{defaultValue:{value:'""',computed:!1},description:"Pass a value for initial rendering. Will NOT be updated once user changes for now",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},description:'Pass a variant. Defaults to "default", "hero" variant renders a search input that is meant to be used standalone on a search page, similar to the initial google search page.',type:{name:"enum",value:[{value:'"rounded"',computed:!1},{value:'"hero"',computed:!1},{value:'"default"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the SearchInput is disabled",type:{name:"bool"},required:!1},clear:{defaultValue:{value:"true",computed:!1},description:"Pass whether to show Clear button or not. Default is true.",type:{name:"bool"},required:!1},onSearch:{defaultValue:{value:"undefined",computed:!0},description:'Pass a search handler that will be called by the component when a search is triggered either via "Enter" keypress or via click on the magnifying glass icon',type:{name:"func"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a click handler that will be called when the magnifying glass icon is clicked",type:{name:"func"},required:!1},onKeyPress:{defaultValue:{value:"undefined",computed:!0},description:'Pass a keyPress handler, by default the component will listen to the "Enter" key and call the passed onSearch function when it is pressed',type:{name:"func"},required:!1},onClear:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed once a user clicks on the Clear button of the SearchField",type:{name:"func"},required:!1},autoComplete:{defaultValue:{value:'"off"',computed:!1},description:'Pass a valid autocomplete value. We do not police validity. Default is "off"',type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'"Search…"',computed:!1},description:'Pass a custom placeholder to replace "Search…" default.',type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"The class names passed here will be merged with the existing class names of the component",type:{name:"string"},required:!1},name:{description:'Pass a name. Defaults to "search".',type:{name:"string"},required:!1}}};const DEFAULT_THEME={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"},ThemeContext=react.createContext(DEFAULT_THEME),ExpandIcon=_ref=>{let{expanded}=_ref;const{colors}=(0,react.useContext)(ThemeContext);return react.createElement("svg",{fill:expanded?colors.icon.expanded:colors.icon.collapsed,width:"1em",height:"1em",viewBox:"0 0 1792 1792",style:{verticalAlign:"middle",color:"var(--color-syntax-highlight-base0E)",height:"1em",width:"1em"}},react.createElement("title",null,"Expand/Collapse"),expanded?react.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"}):react.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"}))};ExpandIcon.propTypes={expanded:prop_types_default().bool};const ExpandAllIcon=()=>{const{colors}=(0,react.useContext)(ThemeContext);return react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:colors.icon.expandAll,alt:"expand more",role:"img"},react.createElement("title",null,"Expand All"),react.createElement("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"}))},CollapseAllIcon=()=>{const{colors}=(0,react.useContext)(ThemeContext);return react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:colors.icon.expandAll,alt:"expand less",role:"img"},react.createElement("title",null,"Collapse All"),react.createElement("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"}))},StringWithHighlight=_ref2=>{let{value}=_ref2;const{colors,searchTerm}=(0,react.useContext)(ThemeContext),highlight=react.useMemo((()=>{if(null==value||!searchTerm||""===searchTerm)return null;try{const startIndex=value.toString().toLowerCase().indexOf(searchTerm.toLowerCase());return startIndex<0?null:{start:startIndex,end:startIndex+searchTerm.length}}catch(e){return console.debug("JsonViewer:",e),null}}),[searchTerm]);return highlight?react.createElement(react.Fragment,null,value.slice(0,highlight.start),react.createElement("span",{style:{backgroundColor:colors.highlight.background,color:colors.highlight.foreground}},value.slice(highlight.start,highlight.end)),value.slice(highlight.end)):value};StringWithHighlight.propTypes={value:prop_types_default().string};const NameLabel=_ref3=>{let{name}=_ref3;const{colors}=(0,react.useContext)(ThemeContext),isIndex="number"==typeof name,color=isIndex?colors.index:colors.key,label=isIndex?name:`"${name}"`;return react.createElement("span",{style:{color}}," ",react.createElement("span",{style:{opacity:.85}},react.createElement(StringWithHighlight,{value:label}))," : ")};NameLabel.propTypes={name:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])};const TypeValueLabel=_ref4=>{let{type,value}=_ref4;const{colors,truncate}=(0,react.useContext)(ThemeContext);let undefinedValue=["nan","null","undefined"].includes(type),label="string"===type?`"${value}"`:`${value}`;if(truncate){const length=!0===truncate?100:truncate;label.length>length&&(label=label.slice(0,length-3)+"...")}return react.createElement("span",{style:{color:colors.dataType[type],backgroundColor:undefinedValue?colors.dataType.background:void 0,borderRadius:3,padding:undefinedValue?"2px 5px":0}},!undefinedValue&&react.createElement("span",{style:{opacity:.8,fontSize:"small",margin:"0 4px"}},type),react.createElement("span",null,react.createElement(StringWithHighlight,{value:label})))};TypeValueLabel.propTypes={type:prop_types_default().string,value:prop_types_default().any};const Toolbar=()=>{const{colors,onExpandAll,onSearch}=(0,react.useContext)(ThemeContext);return react.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${colors.toolbar?.border}`,padding:"3px 0 5px 0"}},react.createElement("span",{style:{display:"flex"}},react.createElement("span",{style:{cursor:"pointer"},onClick:()=>onExpandAll(!0)},react.createElement(ExpandAllIcon,null)),react.createElement("span",{style:{cursor:"pointer"},onClick:()=>onExpandAll(!1)},react.createElement(CollapseAllIcon,null))),react.createElement(SearchInput,{className:"jn-me-1",style:{backgroundColor:colors.toolbar.background,color:colors.toolbar.foreground},onChange:e=>onSearch(e.target.value),clear:!0,onClear:()=>onSearch(null)}))},JsonData=_ref5=>{let{name,value,nestedLevel=0}=_ref5;const{colors,expanded,searchTerm,indentWidth,expandAll}=(0,react.useContext)(ThemeContext),[isExpanded,setIsExpanded]=react.useState(!0===expanded||!1!==expanded&&expanded>nestedLevel);(0,react.useLayoutEffect)((()=>{expandAll&&setIsExpanded(expandAll.expanded)}),[expandAll]),(0,react.useLayoutEffect)((()=>{if(value&&searchTerm)try{JSON.stringify(value).indexOf(searchTerm)>0&&setIsExpanded(!0)}catch(_e){}}),[searchTerm]);const dataType=react.useMemo((()=>(value=>{if(null===value)return"null";if(Array.isArray(value))return"array";if(value instanceof RegExp)return"regex";if(value instanceof Date)return"date";const t=(typeof value).toLowerCase();return"number"===t?Number.isNaN(value)?"nan":Number.isInteger(value)?"integer":"float":t})(value)),[value]),children=react.useMemo((()=>"array"===dataType?value.map(((v,i)=>({name:i,value:v}))):"object"===dataType?Object.keys(value).map(((key,_i)=>({name:key,value:value[key]}))):null),[dataType,value]),ExpandButton=react.useCallback((_ref6=>{let{children}=_ref6;return react.createElement("span",{style:{cursor:"pointer",display:"inline-block"},onClick:()=>{setIsExpanded(!isExpanded)}},children)}),[isExpanded,setIsExpanded]);return react.createElement("div",{"data-json-viewer":name},react.createElement("div",{style:{letterSpacing:.5,padding:"3px 0"}},children&&react.createElement(react.Fragment,null,react.createElement(ExpandButton,null,react.createElement(ExpandIcon,{expanded:isExpanded}))," "),(name||0===name)&&react.createElement(NameLabel,{name}),children?react.createElement(react.Fragment,null,react.createElement("span",{style:{color:colors.brace}},"array"===dataType?"[":"{"),!isExpanded&&react.createElement(react.Fragment,null,react.createElement(ExpandButton,null,react.createElement("span",{style:{color:colors.ellipsis}},"...")),react.createElement("span",{style:{color:colors.brace}},"array"===dataType?"]":"}")),react.createElement("span",{style:{color:colors.size,opacity:.85,fontStyle:"italic",fontSize:"smaller"}}," ",children?.length," ",1===children?.length?"item":"items"),isExpanded&&react.createElement(react.Fragment,null,react.createElement("div",{"data-body":name,style:{paddingLeft:5*indentWidth,marginLeft:8,borderLeft:`1px solid ${colors.border}`}},children?.map(((entry,i)=>react.createElement(JsonData,{key:i,name:entry.name,value:entry.value,nestedLevel:nestedLevel+1})))),react.createElement("span",{style:{color:colors.key,marginLeft:6}},"array"===dataType?"]":"}"))):react.createElement(TypeValueLabel,{type:dataType,value})))};JsonData.propTypes={name:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().bool]),value:prop_types_default().any,nestedLevel:prop_types_default().number};const JsonViewer=_ref7=>{let{data={},showRoot=!1,toolbar=!1,theme=null,expanded=1,indentWidth=4,style,truncate=!1,className,...props}=_ref7;const colors=(theme=>({background:theme.base00,ellipsis:theme.base09,brace:theme.base07,key:theme.base07,index:theme.base0C,size:theme.base04,border:theme.base02,highlight:{foreground:theme.base06,background:theme.base02},toolbar:{border:theme.base01,background:theme.base01,foreground:theme.base07},icon:{expanded:theme.base0D,collapsed:theme.base0E,expandAll:theme.base0E},dataType:{boolean:theme.base0E,date:theme.base0D,float:theme.base0B,function:theme.base0D,integer:theme.base0F,string:theme.base09,nan:theme.base08,null:theme.base0A,undefined:theme.base05,regexp:theme.base0A,background:theme.base02}}))("string"==typeof theme&&themes_namespaceObject[theme]||{...DEFAULT_THEME,...theme}),[searchTerm,setSearchTerm]=react.useState(""),[expandAll,setExpandAll]=react.useState(null);return react.createElement(ThemeContext.Provider,{value:{colors,expanded,expandAll,searchTerm,indentWidth,truncate,onExpandAll:v=>setExpandAll({expanded:v,timestamp:Date.now()}),onSearch:v=>setSearchTerm(v)}},react.createElement("div",JsonViewer_component_extends({"data-json-viewer":!0,className:`juno-json-viewer ${className}`,style:{backgroundColor:colors.background,fontFamily:"monospace",overflow:"auto",...style}},props),toolbar&&react.createElement(Toolbar,null),react.createElement(JsonData,{name:!!showRoot&&"root",value:data})))};JsonViewer.propTypes={data:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().array]).isRequired,style:prop_types_default().object,toolbar:prop_types_default().bool,showRoot:prop_types_default().bool,theme:prop_types_default().oneOfType([prop_types_default().shape({base00:prop_types_default().string,base01:prop_types_default().string,base02:prop_types_default().string,base03:prop_types_default().string,base04:prop_types_default().string,base05:prop_types_default().string,base06:prop_types_default().string,base07:prop_types_default().string,base08:prop_types_default().string,base09:prop_types_default().string,base0A:prop_types_default().string,base0B:prop_types_default().string,base0C:prop_types_default().string,base0D:prop_types_default().string,base0E:prop_types_default().string,base0F:prop_types_default().string}),prop_types_default().oneOf(["dark","light"])]),expanded:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().bool]),truncate:prop_types_default().oneOfType([prop_types_default().bool,prop_types_default().number]),indentWidth:prop_types_default().number,className:prop_types_default().string},JsonViewer.__docgenInfo={description:"A component to render json data in a nice way.",methods:[],displayName:"JsonViewer",props:{data:{defaultValue:{value:"{}",computed:!1},description:"Pass a valid json. Required.",type:{name:"union",value:[{name:"object"},{name:"array"}]},required:!1},showRoot:{defaultValue:{value:"false",computed:!1},description:"show root key",type:{name:"bool"},required:!1},toolbar:{defaultValue:{value:"false",computed:!1},description:"show toolbar",type:{name:"bool"},required:!1},theme:{defaultValue:{value:"null",computed:!1},description:'dark, light or map of colors\n\n@param base00 background\n@param base01 NOT used\n@param base02 border, NaN,null, undefined background\n@param base03 NOT used\n@param base04 size (x items)\n@param base05 type "undefined"\n@param base06 NOT used\n@param base07 key, brace\n@param base08 type "NaN"\n@param base09 ellipsis (...), type "string"\n@param base0A types: "null", "regex"\n@param base0B type "float"\n@param base0C index\n@param base0D expanded icon, types: "date", "function"\n@param base0E collapsed icon, types: "boolean"\n@param base0F copy icon, type "integer"',type:{name:"union",value:[{name:"shape",value:{base00:{name:"string",required:!1},base01:{name:"string",required:!1},base02:{name:"string",required:!1},base03:{name:"string",required:!1},base04:{name:"string",required:!1},base05:{name:"string",required:!1},base06:{name:"string",required:!1},base07:{name:"string",required:!1},base08:{name:"string",required:!1},base09:{name:"string",required:!1},base0A:{name:"string",required:!1},base0B:{name:"string",required:!1},base0C:{name:"string",required:!1},base0D:{name:"string",required:!1},base0E:{name:"string",required:!1},base0F:{name:"string",required:!1}}},{name:"enum",value:[{value:'"dark"',computed:!1},{value:'"light"',computed:!1}]}]},required:!1},expanded:{defaultValue:{value:"1",computed:!1},description:"expanded can be true|false or a number. The number denotes the hierarchy level to which the object is expanded.",type:{name:"union",value:[{name:"number"},{name:"bool"}]},required:!1},indentWidth:{defaultValue:{value:"4",computed:!1},description:"",type:{name:"number"},required:!1},truncate:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"union",value:[{name:"bool"},{name:"number"}]},required:!1},style:{description:"pass a styles object",type:{name:"object"},required:!1},className:{description:"",type:{name:"string"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Stack/Stack.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const baseStack=(direction,gap,wrap)=>`\n      ${"vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}\n      ${wrap&&"jn-flex-wrap"}\n      ${(gap=>{switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}})(gap)}\n    `,alignItems=alignment=>{switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=distribution=>{switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=_ref=>{let{direction="horizontal",gap="0",alignment="stretch",distribution="start",wrap=!1,className="",children=null,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-stack ${baseStack(direction,gap,wrap)} ${alignItems(alignment)} ${justifyItems(distribution)} ${className||""}`},props),children)};Stack.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,direction:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["horizontal","vertical"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","baseline","stretch"]),distribution:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","between","around","evenly"]),wrap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,gap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])},Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",methods:[],displayName:"Stack",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},description:"Stack items horizontally or vertically",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]},required:!1},gap:{defaultValue:{value:'"0"',computed:!1},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",type:{name:"enum",value:[{value:'"0"',computed:!1},{value:'"px"',computed:!1},{value:'"0.5"',computed:!1},{value:'"1"',computed:!1},{value:'"1.5"',computed:!1},{value:'"2"',computed:!1},{value:'"2.5"',computed:!1},{value:'"3"',computed:!1},{value:'"3.5"',computed:!1},{value:'"4"',computed:!1},{value:'"5"',computed:!1},{value:'"6"',computed:!1},{value:'"7"',computed:!1},{value:'"8"',computed:!1},{value:'"9"',computed:!1},{value:'"10"',computed:!1},{value:'"11"',computed:!1},{value:'"12"',computed:!1},{value:'"14"',computed:!1},{value:'"16"',computed:!1},{value:'"20"',computed:!1},{value:'"24"',computed:!1},{value:'"28"',computed:!1},{value:'"32"',computed:!1},{value:'"36"',computed:!1},{value:'"40"',computed:!1},{value:'"44"',computed:!1},{value:'"48"',computed:!1},{value:'"52"',computed:!1},{value:'"56"',computed:!1},{value:'"60"',computed:!1},{value:'"64"',computed:!1},{value:'"72"',computed:!1},{value:'"80"',computed:!1},{value:'"96"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"stretch"',computed:!1},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"baseline"',computed:!1},{value:'"stretch"',computed:!1}]},required:!1},distribution:{defaultValue:{value:'"start"',computed:!1},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"between"',computed:!1},{value:'"around"',computed:!1},{value:'"evenly"',computed:!1}]},required:!1},wrap:{defaultValue:{value:"false",computed:!1},description:"Specify whether the Stack children should be allowed to wrap or not",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass css class names",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/deprecated_js/Stack/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Stack/Stack.component.js")},"./src/deprecated_js/SearchInput/searchinput.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-search-input::-webkit-search-cancel-button{-webkit-appearance:none}","",{version:3,sources:["webpack://./src/deprecated_js/SearchInput/searchinput.scss"],names:[],mappings:"AAGA,iDACI,uBAAA",sourcesContent:["// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n// SPDX-License-Identifier: Apache-2.0\n\n.juno-search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n"],sourceRoot:""}])}}]);