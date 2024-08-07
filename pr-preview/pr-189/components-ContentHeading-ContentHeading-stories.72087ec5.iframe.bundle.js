"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3039],{"./src/components/ContentHeading/ContentHeading.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ContentHeading/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Internal/ContentHeading",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.O,argTypes:{children:{control:!1}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.O,{...args});Template.displayName="Template";const Default=Template.bind({});Default.parameters={docs:{description:{story:"The the main heading of the content area of a page/view."}}},Default.args={heading:"My Page Heading"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ContentHeading {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/ContentHeading/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ContentHeading});__webpack_require__("../../node_modules/react/index.js");var prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ContentHeading=_ref=>{let{heading="",className="",children=null,...props}=_ref;return(0,jsx_runtime.jsx)("h1",{className:`juno-content-heading \n  jn-font-bold\n  jn-text-lg\n  jn-text-theme-high\n  jn-pb-2\n ${className}`,...props,children:children||heading})};ContentHeading.displayName="ContentHeading",ContentHeading.propTypes={children:prop_types_default().node,heading:prop_types_default().string,className:prop_types_default().string},ContentHeading.__docgenInfo={description:"The main heading of a page/View. Pass as a child into `<AppShell>` or, when scaffolding manually, into `<ContentContainer>`.",methods:[],displayName:"ContentHeading",props:{heading:{defaultValue:{value:'""',computed:!1},description:"Text to use as a title",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Optionally render children. If children are present, heading will be ignored",type:{name:"node"},required:!1}}}}}]);