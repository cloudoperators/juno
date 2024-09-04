"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3701],{"./src/components/PageFooter/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>PageFooter});var _path,react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ccloud_shape=function SvgCcloudShape(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({width:59,height:42,viewBox:"0 0 59 42",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M59.3825 11.1608C59.3545 11.1402 59.3267 11.1209 59.299 11.1029C56.8161 9.48915 53.8572 8.55235 50.6806 8.55235C49.5105 8.55235 48.3701 8.67944 47.272 8.92064C44.3685 3.66326 38.8166 0.108856 32.4447 0.108856C23.4894 0.108856 16.1537 7.12988 15.514 16.032L15.3487 16.0309L15.1066 16.0329C7.13468 16.1633 0.712036 22.728 0.712036 30.807C0.712036 35.0932 2.69502 38.9531 5.7492 41.6521H10.3029C6.42919 39.7347 3.75866 35.6852 3.75866 30.9998C3.75866 24.4639 8.95513 19.1655 15.3653 19.1655C16.2819 19.1655 17.1736 19.2738 18.0286 19.4792C17.9603 18.8925 17.9251 18.2952 17.9251 17.6896C17.9251 9.4705 24.4057 2.80763 32.4 2.80763C38.5297 2.80763 43.7695 6.72481 45.8801 12.2573C47.317 11.7139 48.8714 11.417 50.4937 11.417C53.699 11.417 56.6389 12.5758 58.9323 14.505C59.0819 14.6309 59.2321 14.8185 59.3825 15.0614V11.1608Z",fill:"#F0AB00"})))};function PageFooter_component_extends(){return PageFooter_component_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},PageFooter_component_extends.apply(null,arguments)}const PageFooter=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",PageFooter_component_extends({className:`juno-pagefooter \n  jn-flex\n  jn-shrink-0\n  jn-grow-0\n  jn-basis-auto\n  jn-relative\n  jn-bg-theme-global-bg\n  jn-min-h-[3.25rem]\n  jn-pl-6\n  jn-pr-24\n  jn-py-5\n  jn-z-50\n ${className}`,role:"contentinfo"},props),children,react.createElement(ccloud_shape,{className:"\n  jn-h-[2.625rem]\n  jn-absolute\n  jn-right-0\n  jn-bottom-0\n",alt:"cloud shape"}))};PageFooter.propTypes={className:prop_types_default().string,children:prop_types_default().node},PageFooter.__docgenInfo={description:"The page footer component renders a footer at the bottom of the website. Place as last child of AppBody.",methods:[],displayName:"PageFooter",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/PageFooter/PageFooter.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PageFooter/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/PageFooter",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.F,argTypes:{children:{control:!1}}},Simple={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.F,args),parameters:{docs:{description:{story:"The page footer component renders a footer at the bottom of the website. Place as last child of AppBody."}}},args:{}},__namedExportsOrder=["Simple"];Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "The page footer component renders a footer at the bottom of the website. Place as last child of AppBody."\n      }\n    }\n  },\n  args: {}\n}',...Simple.parameters?.docs?.source}}}}}]);