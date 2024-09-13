"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[9889],{"./src/components/Stack/Stack.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const baseStack=(direction,gap,wrap)=>`\n      ${"vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}\n      ${wrap&&"jn-flex-wrap"}\n      ${(gap=>{switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}})(gap)}\n    `,alignItems=alignment=>{switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=distribution=>{switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=_ref=>{let{direction="horizontal",gap="0",alignment="stretch",distribution="start",wrap=!1,className="",children=null,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-stack ${baseStack(direction,gap,wrap)} ${alignItems(alignment)} ${justifyItems(distribution)} ${className||""}`},props),children)};Stack.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,direction:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["horizontal","vertical"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","baseline","stretch"]),distribution:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","between","around","evenly"]),wrap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,gap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])},Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",methods:[],displayName:"Stack",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},description:"Stack items horizontally or vertically",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]},required:!1},gap:{defaultValue:{value:'"0"',computed:!1},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",type:{name:"enum",value:[{value:'"0"',computed:!1},{value:'"px"',computed:!1},{value:'"0.5"',computed:!1},{value:'"1"',computed:!1},{value:'"1.5"',computed:!1},{value:'"2"',computed:!1},{value:'"2.5"',computed:!1},{value:'"3"',computed:!1},{value:'"3.5"',computed:!1},{value:'"4"',computed:!1},{value:'"5"',computed:!1},{value:'"6"',computed:!1},{value:'"7"',computed:!1},{value:'"8"',computed:!1},{value:'"9"',computed:!1},{value:'"10"',computed:!1},{value:'"11"',computed:!1},{value:'"12"',computed:!1},{value:'"14"',computed:!1},{value:'"16"',computed:!1},{value:'"20"',computed:!1},{value:'"24"',computed:!1},{value:'"28"',computed:!1},{value:'"32"',computed:!1},{value:'"36"',computed:!1},{value:'"40"',computed:!1},{value:'"44"',computed:!1},{value:'"48"',computed:!1},{value:'"52"',computed:!1},{value:'"56"',computed:!1},{value:'"60"',computed:!1},{value:'"64"',computed:!1},{value:'"72"',computed:!1},{value:'"80"',computed:!1},{value:'"96"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"stretch"',computed:!1},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"baseline"',computed:!1},{value:'"stretch"',computed:!1}]},required:!1},distribution:{defaultValue:{value:'"start"',computed:!1},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"between"',computed:!1},{value:'"around"',computed:!1},{value:'"evenly"',computed:!1}]},required:!1},wrap:{defaultValue:{value:"false",computed:!1},description:"Specify whether the Stack children should be allowed to wrap or not",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass css class names",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/Pagination/Pagination.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DisabledPagination:()=>DisabledPagination,PaginationWithInput:()=>PaginationWithInput,PaginationWithNumber:()=>PaginationWithNumber,PaginationWithSelect:()=>PaginationWithSelect,ProgressPagination:()=>ProgressPagination,UncontrolledDefault:()=>UncontrolledDefault,UncontrolledDisabledPagination:()=>UncontrolledDisabledPagination,UncontrolledPaginationWithInput:()=>UncontrolledPaginationWithInput,UncontrolledPaginationWithNumber:()=>UncontrolledPaginationWithNumber,UncontrolledPaginationWithSelect:()=>UncontrolledPaginationWithSelect,UncontrolledProgressPagination:()=>UncontrolledProgressPagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button_component=__webpack_require__("./src/components/Button/Button.component.js"),TextInput_component=__webpack_require__("./src/components/TextInput/TextInput.component.js"),Select_component=__webpack_require__("./src/components/Select/Select.component.js"),SelectOption_component=__webpack_require__("./src/components/SelectOption/SelectOption.component.js"),Stack_component=__webpack_require__("./src/components/Stack/Stack.component.js"),Spinner=__webpack_require__("./src/components/Spinner/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Pagination=_ref=>{let{variant="",currentPage=null,totalPages=null,pages,disabled=!1,isFirstPage=!1,isLastPage=!1,onPressPrevious,onPressNext,onSelectChange,onKeyPress,onBlur,progress,className="",...props}=_ref;const[controlPage,setControlCurrentPage]=(0,react.useState)(1),[controlTotalPage,setControlTotalPage]=(0,react.useState)(1);(0,react.useEffect)((()=>{setControlCurrentPage(currentPage),setControlTotalPage(pages||totalPages)}),[currentPage,totalPages,pages]);const handleInputChange=event=>{const inputValue=parseInt(event?.target.value);setControlCurrentPage(inputValue)},handleSelectChange=selected=>{const s=parseInt(selected);setControlCurrentPage(s),onSelectChange&&onSelectChange(s)},handleEnter=event=>{"Enter"===event.key&&(controlPage<1?setControlCurrentPage(1):controlPage>controlTotalPage&&setControlCurrentPage(controlTotalPage),onKeyPress&&onKeyPress(event))},handleBlur=event=>{controlPage<1?setControlCurrentPage(1):controlPage>controlTotalPage&&setControlCurrentPage(controlTotalPage),onBlur&&onBlur(event)},getInputWidthClass=()=>{let logLength=isNaN(controlPage)?1:controlPage?.toString().length;logLength=logLength>5?5:logLength;return{width:`${(.6*logLength+2.1).toFixed(1)}rem`}};return react.createElement("div",_extends({className:`juno-pagination juno-pagination-${variant||"default"} \n  jn-flex\n  jn-gap-[0.375rem]\n  jn-items-center\n ${className}`},props),react.createElement(Button_component.$,{icon:"chevronLeft",disabled:isFirstPage||disabled||progress||1===controlPage,onClick:event=>{setControlCurrentPage(controlPage>1?controlPage-1:1),onPressPrevious&&onPressPrevious(event)},title:"Previous Page"}),progress?react.createElement(Spinner.y,{size:"small",color:"default",className:"\n  jn-ml-3\n"}):"",variant&&!progress?(()=>{switch(variant){case"number":return react.createElement("span",null," ",controlPage||"0");case"select":return react.createElement(Select_component.l,{name:"totalPages",width:"auto",value:controlPage?.toString(),onChange:handleSelectChange,disabled},(()=>{let opts=[];if(controlTotalPage)for(let i=0;i<controlTotalPage;i++){const p=(i+1).toString();opts.push(react.createElement(SelectOption_component.O,{value:p,label:p,key:p}))}return opts})());case"input":return react.createElement(Stack_component.B,{gap:"2",alignment:"center"},react.createElement("div",{className:"juno-pagination-wrapper",style:getInputWidthClass()},react.createElement(TextInput_component.k,{value:controlPage||"",onChange:handleInputChange,onBlur:handleBlur,onKeyPress:handleEnter,disabled,className:"\n  justify-normal\n"})),react.createElement("span",null,"of ",controlTotalPage||"0"));default:return""}})():"",react.createElement(Button_component.$,{icon:"chevronRight",disabled:isLastPage||disabled||progress||controlPage===controlTotalPage,onClick:event=>{setControlCurrentPage(controlPage<controlTotalPage?controlPage+1:controlTotalPage),onPressNext&&onPressNext(event)},title:"Next Page"}))};Pagination.propTypes={variant:prop_types_default().oneOf(["default","number","select","input"]),currentPage:prop_types_default().number,totalPages:prop_types_default().number,pages:prop_types_default().number,disabled:prop_types_default().bool,isFirstPage:prop_types_default().bool,isLastPage:prop_types_default().bool,onPressPrevious:prop_types_default().func,onPressNext:prop_types_default().func,onSelectChange:prop_types_default().func,onKeyPress:prop_types_default().func,onBlur:prop_types_default().func,progress:prop_types_default().bool,className:prop_types_default().string},Pagination.defaultProps={variant:"default",currentPage:1,totalPages:1,pages:!1,disabled:!1,isFirstPage:!1,isLastPage:!1,onPressPrevious:void 0,onPressNext:void 0,onSelectChange:void 0,onKeyPress:void 0,onBlur:void 0,progress:!1,className:""},Pagination.__docgenInfo={description:"A basic, uncontrolled Pagination component. Renders '<' and '>' buttons as a minimun/default.",methods:[],displayName:"Pagination",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"The variant of the Pagination component",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"number"',computed:!1},{value:'"select"',computed:!1},{value:'"input"',computed:!1}]},required:!1},currentPage:{defaultValue:{value:"1",computed:!1},description:"The current page number",type:{name:"number"},required:!1},totalPages:{defaultValue:{value:"1",computed:!1},description:"The total number of pages",type:{name:"number"},required:!1},pages:{defaultValue:{value:"false",computed:!1},description:"The total number of pages (fallback solution, please use totalPages)",type:{name:"number"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disable component",type:{name:"bool"},required:!1},isFirstPage:{defaultValue:{value:"false",computed:!1},description:'Is the first page (mostly "1") - left button disabled',type:{name:"bool"},required:!1},isLastPage:{defaultValue:{value:"false",computed:!1},description:"Is the last page (e.g. total number of pages) - right button disabled",type:{name:"bool"},required:!1},onPressPrevious:{defaultValue:{value:"undefined",computed:!0},description:"onPress (previous) handler",type:{name:"func"},required:!1},onPressNext:{defaultValue:{value:"undefined",computed:!0},description:"onPress (next) handler",type:{name:"func"},required:!1},onSelectChange:{defaultValue:{value:"undefined",computed:!0},description:"Select field change handler (select + input)",type:{name:"func"},required:!1},onKeyPress:{defaultValue:{value:"undefined",computed:!0},description:"onKeyPress handler (input)",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"onBlur handler (input)",type:{name:"func"},required:!1},progress:{defaultValue:{value:"false",computed:!1},description:"Spinner loading animation + disabled behavior",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Additional class name",type:{name:"string"},required:!1}}};var PortalProvider_component=__webpack_require__("./src/components/PortalProvider/PortalProvider.component.js");function Pagination_stories_extends(){return Pagination_stories_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Pagination_stories_extends.apply(null,arguments)}const Pagination_stories={title:"Components/Pagination",component:Pagination,argTypes:{variant:{options:["default","number","select","input"],control:{type:"select"}}},decorators:[Story=>react.createElement("div",{className:"jn-pb-12"},react.createElement(PortalProvider_component.G,null,react.createElement(Story,null)))]},Template=args=>react.createElement(Pagination,args),UncontrolledTemplate=_ref=>{let{currentPage,pages,...args}=_ref;const[page,setPage]=react.useState(currentPage),prev=react.useCallback((()=>setPage(page>1?page-1:1)),[page]),next=react.useCallback((()=>setPage(!pages||page<pages?page+1:pages)),[page]);return react.createElement(Pagination,Pagination_stories_extends({},args,{totalPages:pages,currentPage:page,onPressPrevious:prev,onPressNext:next}))};UncontrolledTemplate.propTypes={currentPage:prop_types_default().number,pages:prop_types_default().number};const Default={render:Template,args:{variant:"default"}},PaginationWithNumber={render:Template,args:{variant:"number",currentPage:3}},PaginationWithSelect={render:Template,args:{variant:"select",currentPage:2,pages:6}},PaginationWithInput={render:Template,args:{variant:"input",currentPage:3,pages:6}},DisabledPagination={render:Template,args:{disabled:!0}},ProgressPagination={render:Template,args:{progress:!0}},UncontrolledDefault={render:UncontrolledTemplate,args:{variant:"default"}},UncontrolledPaginationWithNumber={render:UncontrolledTemplate,args:{variant:"number",currentPage:3}},UncontrolledPaginationWithSelect={render:UncontrolledTemplate,args:{variant:"select",currentPage:2,pages:6}},UncontrolledPaginationWithInput={render:UncontrolledTemplate,args:{variant:"input",currentPage:3,pages:6}},UncontrolledDisabledPagination={render:UncontrolledTemplate,args:{disabled:!0}},UncontrolledProgressPagination={render:UncontrolledTemplate,args:{progress:!0}},__namedExportsOrder=["Default","PaginationWithNumber","PaginationWithSelect","PaginationWithInput","DisabledPagination","ProgressPagination","UncontrolledDefault","UncontrolledPaginationWithNumber","UncontrolledPaginationWithSelect","UncontrolledPaginationWithInput","UncontrolledDisabledPagination","UncontrolledProgressPagination"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "default"\n  }\n}',...Default.parameters?.docs?.source}}},PaginationWithNumber.parameters={...PaginationWithNumber.parameters,docs:{...PaginationWithNumber.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "number",\n    currentPage: 3\n  }\n}',...PaginationWithNumber.parameters?.docs?.source}}},PaginationWithSelect.parameters={...PaginationWithSelect.parameters,docs:{...PaginationWithSelect.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "select",\n    currentPage: 2,\n    pages: 6\n  }\n}',...PaginationWithSelect.parameters?.docs?.source}}},PaginationWithInput.parameters={...PaginationWithInput.parameters,docs:{...PaginationWithInput.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "input",\n    currentPage: 3,\n    pages: 6\n  }\n}',...PaginationWithInput.parameters?.docs?.source}}},DisabledPagination.parameters={...DisabledPagination.parameters,docs:{...DisabledPagination.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    disabled: true\n  }\n}",...DisabledPagination.parameters?.docs?.source}}},ProgressPagination.parameters={...ProgressPagination.parameters,docs:{...ProgressPagination.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    progress: true\n  }\n}",...ProgressPagination.parameters?.docs?.source}}},UncontrolledDefault.parameters={...UncontrolledDefault.parameters,docs:{...UncontrolledDefault.parameters?.docs,source:{originalSource:'{\n  render: UncontrolledTemplate,\n  args: {\n    variant: "default"\n  }\n}',...UncontrolledDefault.parameters?.docs?.source}}},UncontrolledPaginationWithNumber.parameters={...UncontrolledPaginationWithNumber.parameters,docs:{...UncontrolledPaginationWithNumber.parameters?.docs,source:{originalSource:'{\n  render: UncontrolledTemplate,\n  args: {\n    variant: "number",\n    currentPage: 3\n  }\n}',...UncontrolledPaginationWithNumber.parameters?.docs?.source}}},UncontrolledPaginationWithSelect.parameters={...UncontrolledPaginationWithSelect.parameters,docs:{...UncontrolledPaginationWithSelect.parameters?.docs,source:{originalSource:'{\n  render: UncontrolledTemplate,\n  args: {\n    variant: "select",\n    currentPage: 2,\n    pages: 6\n  }\n}',...UncontrolledPaginationWithSelect.parameters?.docs?.source}}},UncontrolledPaginationWithInput.parameters={...UncontrolledPaginationWithInput.parameters,docs:{...UncontrolledPaginationWithInput.parameters?.docs,source:{originalSource:'{\n  render: UncontrolledTemplate,\n  args: {\n    variant: "input",\n    currentPage: 3,\n    pages: 6\n  }\n}',...UncontrolledPaginationWithInput.parameters?.docs?.source}}},UncontrolledDisabledPagination.parameters={...UncontrolledDisabledPagination.parameters,docs:{...UncontrolledDisabledPagination.parameters?.docs,source:{originalSource:"{\n  render: UncontrolledTemplate,\n  args: {\n    disabled: true\n  }\n}",...UncontrolledDisabledPagination.parameters?.docs?.source}}},UncontrolledProgressPagination.parameters={...UncontrolledProgressPagination.parameters,docs:{...UncontrolledProgressPagination.parameters?.docs,source:{originalSource:"{\n  render: UncontrolledTemplate,\n  args: {\n    progress: true\n  }\n}",...UncontrolledProgressPagination.parameters?.docs?.source}}}}}]);