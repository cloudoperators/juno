"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6535],{"./src/components/Box/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithoutPadding:()=>WithoutPadding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Box_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=(__webpack_require__("../../node_modules/react/index.js"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Box=function(_a){var _b=_a.children,children=void 0===_b?null:_b,_c=_a.unpad,unpad=void 0!==_c&&_c,_d=_a.className,className=void 0===_d?"":_d,props=__rest(_a,["children","unpad","className"]),combinedClassName="juno-box ".concat("\n  jn-text-sm\n  jn-rounded\n  jn-bg-theme-box-default\n  jn-border\n  jn-border-theme-box-default\n"," ").concat(unpad?"":"\n  jn-py-1\n  jn-px-2\n"," ").concat(className);return(0,jsx_runtime.jsx)("div",__assign({className:combinedClassName},props,{children}))};try{Box.displayName="Box",Box.__docgenInfo={description:"A generic Box component with optional padding and a light border.\nIdeal for annotations, additional explanations, and remarks where a Message or InfoBox would be too visually emphasized.\nTypically used for small text but can contain any child elements, as required.",displayName:"Box",props:{children:{defaultValue:{value:"null"},description:"Child elements to be rendered inside the Box.",name:"children",required:!1,type:{name:"any"}},unpad:{defaultValue:{value:"false"},description:"If true, padding is removed.",name:"unpad",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS styles to apply to the Box.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.component.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Box/Box.component.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}const Box_stories={title:"Components/Box",component:Box,argTypes:{}};var Default={args:{children:"Some content in a Box."}},WithoutPadding={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:"A Box without padding",unpad:!0}};const __namedExportsOrder=["Default","WithoutPadding"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Some content in a Box."\n  }\n}',...Default.parameters?.docs?.source}}},WithoutPadding.parameters={...WithoutPadding.parameters,docs:{...WithoutPadding.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "To remove padding, set the `unpad` prop."\n      }\n    }\n  },\n  args: {\n    children: "A Box without padding",\n    unpad: true\n  }\n}',...WithoutPadding.parameters?.docs?.source}}}}}]);