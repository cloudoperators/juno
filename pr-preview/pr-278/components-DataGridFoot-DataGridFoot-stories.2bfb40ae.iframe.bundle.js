"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[53],{"./src/components/DataGridFoot/DataGridFoot.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataGridFoot_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DataGridFoot=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("tfoot",_extends({className:`juno-datagrid-foot ${className}`},props),children)};DataGridFoot.propTypes={children:prop_types_default().node,className:prop_types_default().string},DataGridFoot.__docgenInfo={description:"",methods:[],displayName:"DataGridFoot",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add a classname",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the DataGridFoot",type:{name:"node"},required:!1}}};const DataGridFoot_stories={title:"WiP/DataGrid/DataGridFoot",component:DataGridFoot,argTypes:{children:{control:!1}},decorators:[story=>react.createElement("table",null,story())],parameters:{docs:{source:{excludeDecorators:!1}}}},Default={render:_ref=>{let{...args}=_ref;return react.createElement(DataGridFoot,args)},parameters:{docs:{description:{story:"Juno DataGridFoot for use in DataGrid"}}},args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Juno DataGridFoot for use in DataGrid"\n      }\n    }\n  },\n  args: {}\n}',...Default.parameters?.docs?.source}}}}}]);