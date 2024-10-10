"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[1479],{"./src/components/FormRow/FormRow.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FormRow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormRow=_ref=>{let{children=null,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-form-row \n  jn-mb-2\n ${className}`},props),children)};FormRow.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormRow.__docgenInfo={description:"A generic FormRow component.\nUsed to layout and structure forms. Pass Form elements such as TextInput, Textarea, Select, or Radio and CheckboxGroups as children.",methods:[],displayName:"FormRow",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render in the formRow. Typically, these will be Input components such as TextInput, Textarea, Select, or Radio and CheckboxGroups",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to a FormRow",type:{name:"string"},required:!1}}}},"./src/components/FormSection/FormSection.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>FormSection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormSection=_ref=>{let{title=null,children=null,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",_extends({className:`juno-form-section \n\tjn-mb-8\n\tjn-last:mb-0\n ${className}`},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"juno-formsection-heading \n\tjn-text-lg\n\tjn-font-bold\n\tjn-mb-4\n"},title):"",children)};FormSection.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node},FormSection.__docgenInfo={description:"A Form section to group form elements inside complex forms with an optional title.",methods:[],displayName:"FormSection",props:{title:{defaultValue:{value:"null",computed:!1},description:"Title, will be rendering as an `<h1>`.",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the form section",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custpm className",type:{name:"string"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/components/FormSection/FormSection.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_FormSection_FormSection_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormSection/FormSection.component.js"),_FormRow_FormRow_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormRow/FormRow.component.js"),_deprecated_js_TextInput_TextInput_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/deprecated_js/TextInput/TextInput.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/FormSection",component:_FormSection_FormSection_component__WEBPACK_IMPORTED_MODULE_1__.y,argTypes:{items:{table:{disable:!0}},children:{control:!1}}},Template=_ref=>{let{children,...args}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormSection_FormSection_component__WEBPACK_IMPORTED_MODULE_1__.y,args,children)};Template.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node};const Default={render:Template,args:{children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormRow_FormRow_component__WEBPACK_IMPORTED_MODULE_2__.f,{key:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_TextInput_TextInput_component__WEBPACK_IMPORTED_MODULE_3__.k,{label:"Address Line 1"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormRow_FormRow_component__WEBPACK_IMPORTED_MODULE_2__.f,{key:"2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_TextInput_TextInput_component__WEBPACK_IMPORTED_MODULE_3__.k,{label:"Address Line 2"}))]}},WithTitle={render:Template,args:{title:"Form Section With Title",children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormRow_FormRow_component__WEBPACK_IMPORTED_MODULE_2__.f,{key:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_TextInput_TextInput_component__WEBPACK_IMPORTED_MODULE_3__.k,{label:"Address Line 1"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormRow_FormRow_component__WEBPACK_IMPORTED_MODULE_2__.f,{key:"2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_TextInput_TextInput_component__WEBPACK_IMPORTED_MODULE_3__.k,{label:"Address Line 2"}))]}},__namedExportsOrder=["Default","WithTitle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<FormRow key="1">\n        <TextInput label="Address Line 1" />\n      </FormRow>, <FormRow key="2">\n        <TextInput label="Address Line 2" />\n      </FormRow>]\n  }\n}',...Default.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    title: "Form Section With Title",\n    children: [<FormRow key="1">\n        <TextInput label="Address Line 1" />\n      </FormRow>, <FormRow key="2">\n        <TextInput label="Address Line 2" />\n      </FormRow>]\n  }\n}',...WithTitle.parameters?.docs?.source}}}}}]);