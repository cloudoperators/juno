"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3487],{"./src/components/FilterPill/FilterPill.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FilterPill});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FilterPill=_ref=>{let{uid="",filterKey="",filterKeyLabel="",filterValue="",filterValueLabel="",onClose,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-filterpill \n\tjn-inline-flex\n\tjn-basis-auto\n\tjn-shrink\n\tjn-items-center\n\tjn-flex-nowrap\n\tjn-text-xs\n\tjn-p-px\n\tjn-border\n\tjn-rounded\n\tjn-mr-2\n\tjn-border-theme-filter-pill\n\tlast:jn-mr-0\n ${className}`},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\tjn-bg-theme-filter-pill-key\n\tjn-px-1\n\tjn-py-0.5\n\tjn-rounded-sm\n  jn-text-theme-high\n\tjn-inline-block\n"},filterKeyLabel||filterKey),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n\tjn-px-1\n\tjn-py-0.5\n\tjn-text-theme-high\n\tjn-inline-block\n"},filterValueLabel||filterValue),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon:"close",size:"18",onClick:()=>{onClose&&onClose(uid||filterKey)}}))};FilterPill.propTypes={uid:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,filterKey:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,filterKeyLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,filterValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,filterValueLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClose:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func},FilterPill.__docgenInfo={description:"-- Deprecated. For new implementations, use Pill instead.--\\n\nA Pill to represent Key and Value of a filter. Can be closed to un-apply the filter represented.\nMostly to be used inside a Filters component in conjunction with FilterInput.",methods:[],displayName:"FilterPill",props:{uid:{defaultValue:{value:'""',computed:!1},description:"The unique identifier of the pill. Returned by the onClose callback",type:{name:"string"},required:!1},filterKey:{defaultValue:{value:'""',computed:!1},description:"The key of the filter the pill represents. Returned by the onClose callback if uid undefined",type:{name:"string"},required:!1},filterKeyLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the filter key. If not set filterKey is used",type:{name:"string"},required:!1},filterValue:{defaultValue:{value:'""',computed:!1},description:"The value of filter the pill represents",type:{name:"string"},required:!1},filterValueLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the filter value. If not set filterValue is used",type:{name:"string"},required:!1},onClose:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed when closing the FilterPill",type:{name:"func"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"add custom classNames",type:{name:"string"},required:!1}}}},"./src/components/FilterPill/FilterPill.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FilterPill_stories});const FilterPill_stories={title:"Deprecated/Filter/FilterPill",component:__webpack_require__("./src/components/FilterPill/FilterPill.component.js").m,argTypes:{}},Default={args:{filterKey:"os",filterKeyLabel:"OS",filterValue:"mac_os",filterValueLabel:"Mac OS"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    filterKey: "os",\n    filterKeyLabel: "OS",\n    filterValue: "mac_os",\n    filterValueLabel: "Mac OS"\n  }\n}',...Default.parameters?.docs?.source}}}}}]);