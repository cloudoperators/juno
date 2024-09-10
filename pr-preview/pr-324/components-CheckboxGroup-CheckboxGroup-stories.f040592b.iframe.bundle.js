"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[7819],{"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,IndividuallyChecked:()=>IndividuallyChecked,InvalidCheckboxGroup:()=>InvalidCheckboxGroup,Required:()=>Required,Selected:()=>Selected,ValidCheckboxGroup:()=>ValidCheckboxGroup,WithErrortext:()=>WithErrortext,WithHelptext:()=>WithHelptext,WithHelptextAsNode:()=>WithHelptextAsNode,WithLabel:()=>WithLabel,WithSuccesstext:()=>WithSuccesstext,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxGroup_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),CheckboxGroup_component=__webpack_require__("./src/components/CheckboxGroup/CheckboxGroup.component.tsx"),Checkbox=__webpack_require__("./src/components/Checkbox/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const CheckboxGroup_stories={title:"Forms/Checkbox/CheckboxGroup",component:CheckboxGroup_component.$,argTypes:{items:{table:{disable:!0}},errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},children:{control:!1},selected:{control:!1}}};var Template=function(_a){var children=_a.children,args=__rest(_a,["children"]);return react.createElement(CheckboxGroup_component.$,__assign({},args),children)};Template.propTypes={children:prop_types_default().node};var Default={render:Template,args:{children:[react.createElement(Checkbox.S,{value:"val-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",label:"Option 3",key:"3"})]}},Selected={render:Template,args:{selected:["val-2"],children:[react.createElement(Checkbox.S,{value:"val-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",label:"Option 3",key:"3"})]}},IndividuallyChecked={render:Template,args:{children:[react.createElement(Checkbox.S,{value:"val-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",label:"Option 2",key:"2",checked:!0}),react.createElement(Checkbox.S,{value:"val-3",label:"Option 3",key:"3",checked:!0}),react.createElement(Checkbox.S,{value:"val-4",label:"Option 4",key:"4"})]}},WithLabel={render:Template,args:{name:"Labelled ChechboxGroup",label:"A Labelled CheckboxGroup",children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},Required={render:Template,args:{name:"Required Labelled ChechboxGroup",label:"A Required, Labelled CheckboxGroup",required:!0,children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},Disabled={render:Template,args:{label:"A disabled CheckboxGroup",disabled:!0,children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},ValidCheckboxGroup={render:Template,args:{name:"valid-checkbox-group",label:"A valid CheckboxGroup",valid:!0,children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},WithHelptext={render:Template,args:{name:"checkbox-group-with-helptext",label:"A CheckboxGroup with helptext",helptext:"A helptext",children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},WithHelptextAsNode={render:Template,args:{name:"checkbox-group-with-helptext-as-node",label:"A CheckboxGroup with helptext as node",helptext:react.createElement(react.Fragment,null,"This is a helptext with a ",react.createElement("a",{href:"#"},"Link")),children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},WithSuccesstext={render:Template,args:{name:"checkbox-group-with-success",label:"A CheckboxGroup with successful validation",successtext:"This group is valid.",children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},InvalidCheckboxGroup={render:Template,args:{name:"invalid-checkbox-group",label:"An invalid CheckboxGroup",invalid:!0,children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}},WithErrortext={render:Template,args:{name:"checkbox-group-with-error",label:"A CheckboxGroup with an Error",errortext:"This group has an error.",children:[react.createElement(Checkbox.S,{value:"val-1",id:"c-1",label:"Option 1",key:"1"}),react.createElement(Checkbox.S,{value:"val-2",id:"c-2",label:"Option 2",key:"2"}),react.createElement(Checkbox.S,{value:"val-3",id:"c-3",label:"Option 3",key:"3"})]}};const __namedExportsOrder=["Default","Selected","IndividuallyChecked","WithLabel","Required","Disabled","ValidCheckboxGroup","WithHelptext","WithHelptextAsNode","WithSuccesstext","InvalidCheckboxGroup","WithErrortext"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<Checkbox value="val-1" label="Option 1" key="1" />, <Checkbox value="val-2" label="Option 2" key="2" />, <Checkbox value="val-3" label="Option 3" key="3" />]\n  }\n}',...Default.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    selected: ["val-2"],\n    children: [<Checkbox value="val-1" label="Option 1" key="1" />, <Checkbox value="val-2" label="Option 2" key="2" />, <Checkbox value="val-3" label="Option 3" key="3" />]\n  }\n}',...Selected.parameters?.docs?.source}}},IndividuallyChecked.parameters={...IndividuallyChecked.parameters,docs:{...IndividuallyChecked.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<Checkbox value="val-1" label="Option 1" key="1" />, <Checkbox value="val-2" label="Option 2" key="2" checked />, <Checkbox value="val-3" label="Option 3" key="3" checked />, <Checkbox value="val-4" label="Option 4" key="4" />]\n  }\n}',...IndividuallyChecked.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "Labelled ChechboxGroup",\n    label: "A Labelled CheckboxGroup",\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...WithLabel.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "Required Labelled ChechboxGroup",\n    label: "A Required, Labelled CheckboxGroup",\n    required: true,\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "A disabled CheckboxGroup",\n    disabled: true,\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...Disabled.parameters?.docs?.source}}},ValidCheckboxGroup.parameters={...ValidCheckboxGroup.parameters,docs:{...ValidCheckboxGroup.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "valid-checkbox-group",\n    label: "A valid CheckboxGroup",\n    valid: true,\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...ValidCheckboxGroup.parameters?.docs?.source}}},WithHelptext.parameters={...WithHelptext.parameters,docs:{...WithHelptext.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "checkbox-group-with-helptext",\n    label: "A CheckboxGroup with helptext",\n    helptext: "A helptext",\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...WithHelptext.parameters?.docs?.source}}},WithHelptextAsNode.parameters={...WithHelptextAsNode.parameters,docs:{...WithHelptextAsNode.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "checkbox-group-with-helptext-as-node",\n    label: "A CheckboxGroup with helptext as node",\n    helptext: <>\n        This is a helptext with a <a href="#">Link</a>\n      </>,\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...WithHelptextAsNode.parameters?.docs?.source}}},WithSuccesstext.parameters={...WithSuccesstext.parameters,docs:{...WithSuccesstext.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "checkbox-group-with-success",\n    label: "A CheckboxGroup with successful validation",\n    successtext: "This group is valid.",\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...WithSuccesstext.parameters?.docs?.source}}},InvalidCheckboxGroup.parameters={...InvalidCheckboxGroup.parameters,docs:{...InvalidCheckboxGroup.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "invalid-checkbox-group",\n    label: "An invalid CheckboxGroup",\n    invalid: true,\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...InvalidCheckboxGroup.parameters?.docs?.source}}},WithErrortext.parameters={...WithErrortext.parameters,docs:{...WithErrortext.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "checkbox-group-with-error",\n    label: "A CheckboxGroup with an Error",\n    errortext: "This group has an error.",\n    children: [<Checkbox value="val-1" id="c-1" label="Option 1" key="1" />, <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />, <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />]\n  }\n}',...WithErrortext.parameters?.docs?.source}}}},"./src/deprecated_js/Icon/icons/home_sharp.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgHomeSharp(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"})))}},"./src/deprecated_js/Icon/icons/juno-danger.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoDanger(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M22,17.9999996 L22,19.9999996 L2,19.9999996 L2,17.9999996 L22,17.9999996 Z M12,6.428571 C14.7642857,6.428571 17.0146825,8.23991359 17.1375716,10.5179164 L17.1428571,10.7142853 L17.1428571,16.7142853 L6.85714286,16.7142853 L6.85714286,10.7142853 L6.86242835,10.5179164 C6.98531746,8.23991359 9.23571429,6.428571 12,6.428571 Z M12,7.71428529 L12,15.428571 L15.8571429,15.428571 L15.8571429,11.1428567 L15.851803,10.960591 C15.745448,9.15003461 14.0636603,7.71428529 12,7.71428529 Z M19.075912,3.96838198 L20.490712,5.38218198 L18.370012,7.50438202 L16.955212,6.09058202 L19.075912,3.96838198 Z M4.956739,3.939208 L7.078039,6.060508 L5.663839,7.474708 L3.542539,5.353408 L4.956739,3.939208 Z M13,1.428571 L13,4.428571 L11,4.428571 L11,1.428571 L13,1.428571 Z"})))}},"./src/deprecated_js/Icon/icons/juno_severity_critical.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityCritical(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04445 18.1956 2H19.3956L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1L2 15H8V1H2Z"})))}},"./src/deprecated_js/Icon/icons/juno_severity_high.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityHigh(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1V7H8V1H2Z"})))}},"./src/deprecated_js/Icon/icons/juno_severity_low.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityLow(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 10H3V14H7V10ZM2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/deprecated_js/Icon/icons/juno_severity_medium.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgJunoSeverityMedium(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.7956 22H14.5955L15.7956 14.2222H11.5955C10.8994 14.2222 10.9114 13.8667 11.1395 13.4889C11.3675 13.1111 11.1995 13.4 11.2235 13.3556C12.7715 10.8222 15.0995 7.04444 18.1956 2L19.3956 2L18.1956 9.77778H22.3957C22.9837 9.77778 23.0677 10.1444 22.9597 10.3444L22.8757 10.5111C18.1476 18.1667 15.7956 22 15.7956 22Z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 17H8V23H2V17Z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9V15H8V9H2Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2H3V6H7V2ZM2 1V7H8V1H2Z"})))}},"./src/deprecated_js/Icon/icons/place.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgPlace(_ref){var title=_ref.title,titleId=_ref.titleId,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})))}}}]);