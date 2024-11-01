"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3697],{"./src/components/FormRow/FormRow.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FormRow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormRow=_ref=>{let{children=null,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-form-row \n  jn-mb-2\n ${className}`},props),children)};FormRow.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormRow.__docgenInfo={description:"A generic FormRow component.\nUsed to layout and structure forms. Pass Form elements such as TextInput, Textarea, Select, or Radio and CheckboxGroups as children.",methods:[],displayName:"FormRow",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render in the formRow. Typically, these will be Input components such as TextInput, Textarea, Select, or Radio and CheckboxGroups",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to a FormRow",type:{name:"string"},required:!1}}}},"./src/components/FormRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>_FormRow_component__WEBPACK_IMPORTED_MODULE_0__.f});var _FormRow_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormRow/FormRow.component.js")},"./src/components/FormSection/FormSection.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>FormSection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormSection=_ref=>{let{title=null,children=null,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",_extends({className:`juno-form-section \n\tjn-mb-8\n\tjn-last:mb-0\n ${className}`},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"juno-formsection-heading \n\tjn-text-lg\n\tjn-font-bold\n\tjn-mb-4\n"},title):"",children)};FormSection.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node},FormSection.__docgenInfo={description:"A Form section to group form elements inside complex forms with an optional title.",methods:[],displayName:"FormSection",props:{title:{defaultValue:{value:"null",computed:!1},description:"Title, will be rendering as an `<h1>`.",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the form section",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custpm className",type:{name:"string"},required:!1}}}},"./src/components/Select/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>_Select_component_js__WEBPACK_IMPORTED_MODULE_0__.l});var _Select_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Select/Select.component.js")},"./src/components/SelectOption/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>_SelectOption_component_js__WEBPACK_IMPORTED_MODULE_0__.O});var _SelectOption_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SelectOption/SelectOption.component.js")},"./src/components/Switch/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Switch});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Label=__webpack_require__("./src/deprecated_js/Label/index.js"),Icon=__webpack_require__("./src/deprecated_js/Icon/index.js"),FormHint_component=__webpack_require__("./src/deprecated_js/FormHint/FormHint.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const switchsizestyles=size=>{switch(size){case"small":return"jn-w-[1.75rem] jn-h-4";case"large":return"jn-w-[3.125rem] jn-h-[1.6875rem]";default:return"jn-w-switch-default jn-h-switch-default"}},handlesizestyles=size=>{switch(size){case"small":return"jn-w-[0.75rem] jn-h-[0.75rem]";case"large":return"jn-w-[1.4375rem] jn-h-[1.4375rem]";default:return"jn-w-switch-handle-default jn-h-switch-handle-default"}},iconstyles="\n\tjn-inline-block \n\tjn-ml-1 \n\tjn-leading-1\n\tjn-mt-[-.2rem]\n",Switch=_ref=>{let{name="",id=null,label,required=!1,size="default",on=!1,disabled=null,invalid=!1,valid=!1,helptext="",errortext="",successtext="",className="",onChange,onClick,wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),[isOn,setIsOn]=(0,react.useState)(on),[isInvalid,setIsInvalid]=(0,react.useState)(!1),[isValid,setIsValid]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsOn(on)}),[on]);const invalidated=(0,react.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react.useEffect)((()=>{setIsValid(validated)}),[validated]);const theId=id||"juno-switch-"+(0,react.useId)();return react.createElement("div",null,react.createElement("span",{className:`\n\t\t\t\tjuno-switch-wrapper \n\t\t\t\t\n\tjn-flex\n\tjn-flex-row\n\tjn-items-center\n\n        ${wrapperClassName}\n\t\t\t\t`},react.createElement("button",_extends({type:"button",role:"switch",name,id:theId,"aria-checked":isOn,disabled,onClick:event=>{setIsOn(!isOn),onClick&&onClick(event),onChange&&onChange(event)},className:`\n\t\t\t\t\t\tjuno-switch \n\t\t\t\t\t\tjuno-switch-${size} \n\t\t\t\t\t\t\n\tjn-rounded-full\n\tjn-relative\n\tjn-p-0\n\tjn-leading-0\n\tjn-border\n\tjn-g-theme-default\n\tfocus:jn-outline-none\n\tfocus:jn-ring-2\n\tfocus:jn-ring-theme-focus\n\tdisabled:jn-opacity-50\n\tdisabled:jn-cursor-not-allowed\n \n\t\t\t\t\t\t${switchsizestyles(size)} \n\t\t\t\t\t\t${isInvalid?"juno-switch-invalid \n\tjn-border-theme-error\n":""} \n\t\t\t\t\t\t${isValid?"juno-switch-valid \n\tjn-border-theme-success\n":""} \n\t\t\t\t\t\t${isValid||isInvalid?"":"\n\tjn-border-theme-switch-default\n"} \n\t\t\t\t\t\t${className}`},props),react.createElement("span",{className:`juno-switch-handle \n\tjn-inline-block\n\tjn-absolute\n\tjn-top-[1px]\n\tjn-rounded-full\n\tjn-bg-theme-switch-handle\n\tjn-border-theme-default\n ${handlesizestyles(size)} ${isOn?"\n\tjn-right-[1px] \n\tjn-bg-theme-switch-handle-checked\n":"\n\tjn-left-[1px]\n"}`})),react.createElement(Label.J,{text:label,htmlFor:theId,className:"jn-ml-2",disabled,required}),isInvalid?react.createElement(Icon.I,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`${iconstyles} ${disabled?"jn-opacity-50":""}`}):"",isValid?react.createElement(Icon.I,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`${iconstyles} ${disabled?"jn-opacity-50":""}`}):""),errortext&&isNotEmptyString(errortext)?react.createElement(FormHint_component.m,{text:errortext,variant:"error",className:"\n\tjn-mt-0\n"}):"",successtext&&isNotEmptyString(successtext)?react.createElement(FormHint_component.m,{text:successtext,variant:"success",className:"\n\tjn-mt-0\n"}):"",helptext&&isNotEmptyString(helptext)?react.createElement(FormHint_component.m,{text:helptext,className:"\n\tjn-mt-0\n"}):"")};Switch.propTypes={name:prop_types_default().string,id:prop_types_default().string,label:prop_types_default().string,required:prop_types_default().bool,size:prop_types_default().oneOf(["small","default","large"]),on:prop_types_default().bool,disabled:prop_types_default().bool,invalid:prop_types_default().bool,valid:prop_types_default().bool,helptext:prop_types_default().node,errortext:prop_types_default().node,successtext:prop_types_default().node,className:prop_types_default().string,onChange:prop_types_default().func,onClick:prop_types_default().func,wrapperClassName:prop_types_default().string},Switch.__docgenInfo={description:"A Switch/Toggle component",methods:[],displayName:"Switch",props:{name:{defaultValue:{value:'""',computed:!1},description:"Name attribute",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"Add a label to the Switch",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is required",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Leave empty for default size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"default"',computed:!1},{value:'"large"',computed:!1}]},required:!1},on:{defaultValue:{value:"false",computed:!1},description:"Pass checked state for initial rendering.",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disabled switch",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is valid",type:{name:"bool"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Switch",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch was successfully validated",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch has an error or could not be validated",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className. The class name is applied to the internal button element.",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a click handler",type:{name:"func"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1}}}},"./src/deprecated_js/TextInput/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>_TextInput_component__WEBPACK_IMPORTED_MODULE_0__.k});var _TextInput_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/TextInput/TextInput.component.js")},"./src/components/IntroBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>IntroBox});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},introbox=function(variant,heroImage){return"\n            jn-bg-theme-introbox\n            jn-text-theme-default\n            jn-flex\n            jn-rounded-l\n            jn-overflow-hidden\n            jn-mb-8\n\n            ".concat("hero"===variant&&heroImage?"\n                    jn-bg-right-top\n                    jn-bg-no-repeat\n                ":"","\n        ")},introboxContent=function(variant,heroImage){return"\n        ".concat(heroImage?"jn-pl-4 jn-pr-56":"jn-px-4","\n\n        ").concat("hero"===variant?"\n            jn-text-xl\n            jn-min-h-[8rem]\n            jn-py-4\n            jn-flex\n            jn-flex-col\n            jn-justify-center\n        ":"\n            jn-py-3\n        ","\n    ")},IntroBox=function(_a){var _b=_a.title,title=void 0===_b?null:_b,_c=_a.text,text=void 0===_c?null:_c,_d=_a.variant,variant=void 0===_d?"default":_d,_e=_a.heroImage,heroImage=void 0===_e?null:_e,_f=_a.className,className=void 0===_f?"":_f,children=_a.children,props=__rest(_a,["title","text","variant","heroImage","className","children"]),isHeroWithImage=react.useMemo((function(){return heroImage&&"hero"===variant}),[variant,heroImage]);return(0,jsx_runtime.jsxs)("div",__assign({className:"juno-introbox ".concat(introbox(variant,heroImage)," ").concat(className),style:isHeroWithImage?{backgroundImage:"".concat(heroImage)}:{}},props,{children:[(0,jsx_runtime.jsx)("div",{className:"".concat("\n    jn-border-l-4\n    jn-border-theme-introbox\n")}),(0,jsx_runtime.jsxs)("div",{className:"".concat(introboxContent(variant,heroImage)),children:[title?(0,jsx_runtime.jsx)("h1",{className:"".concat("\n    jn-font-bold\n"),children:title}):"",children||(0,jsx_runtime.jsx)("p",{children:text})]})]}))};try{IntroBox.displayName="IntroBox",IntroBox.__docgenInfo={description:"An Introbox holds generally important information to help understand the contents, purpose, or state of a whole page or view, or individual sections on longer pages.\nUse sparingly, there should never be any two or more subsequent instances of Introbox as direct siblings/neighbors on an individual view.",displayName:"IntroBox",props:{title:{defaultValue:{value:"null"},description:"Pass an optional title",name:"title",required:!1,type:{name:"string | null"}},text:{defaultValue:{value:"null"},description:"Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below)",name:"text",required:!1,type:{name:"string | null"}},variant:{defaultValue:{value:"default"},description:"Pass a custom class",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hero"'}]}},heroImage:{defaultValue:{value:"null"},description:'optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image in your app (see template app for an example). Will always be positioned top and right',name:"heroImage",required:!1,type:{name:"string | null"}},className:{defaultValue:{value:""},description:"Pass a custom class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Pass child nodes to be rendered as contents",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IntroBox/IntroBox.component.tsx#IntroBox"]={docgenInfo:IntroBox.__docgenInfo,name:"IntroBox",path:"src/components/IntroBox/IntroBox.component.tsx#IntroBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Form/Form.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexForm:()=>ComplexForm,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Form=_ref=>{let{title=null,className="",children=null,...props}=_ref;return react.createElement("form",_extends({className:`juno-form \n\tjn-mb-8\n ${className}`},props),title?react.createElement("h1",{className:"juno-form-heading \n\tjn-text-2xl\n\tjn-font-bold\n\tjn-mb-4\n"},title):"",children)};Form.propTypes={title:prop_types_default().string,className:prop_types_default().string,children:prop_types_default().node},Form.__docgenInfo={description:"A Form to hold FormSections and/or FormGroups with an optional title.",methods:[],displayName:"Form",props:{title:{defaultValue:{value:"null",computed:!1},description:"Title to be rendered in the Form`.",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom className",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the form",type:{name:"node"},required:!1}}};var FormRow=__webpack_require__("./src/components/FormRow/index.js"),FormSection_component=__webpack_require__("./src/components/FormSection/FormSection.component.js"),FormHint=__webpack_require__("./src/deprecated_js/FormHint/index.js"),TextInput=__webpack_require__("./src/deprecated_js/TextInput/index.js"),Select=__webpack_require__("./src/components/Select/index.js"),SelectOption=__webpack_require__("./src/components/SelectOption/index.js"),Switch=__webpack_require__("./src/components/Switch/index.js"),Textarea=__webpack_require__("./src/deprecated_js/Textarea/index.js"),Button=__webpack_require__("./src/deprecated_js/Button/index.js"),ButtonRow=__webpack_require__("./src/deprecated_js/ButtonRow/index.js"),IntroBox=__webpack_require__("./src/components/IntroBox/index.ts"),PortalProvider_component=__webpack_require__("./src/deprecated_js/PortalProvider/PortalProvider.component.js");const Form_stories={title:"Forms/Form",component:Form,argTypes:{items:{table:{disable:!0}},children:{control:!1}},decorators:[Story=>react.createElement("div",{className:"jn-pb-12",style:{minHeight:"250px"}},react.createElement(PortalProvider_component.GD,null,react.createElement(Story,null)))]},Template=_ref=>{let{children,...args}=_ref;return react.createElement(Form,args,children)};Template.propTypes={children:prop_types_default().node};const Default={render:Template,args:{title:"A Simple Form",children:[react.createElement(FormRow.f,{key:"f-1"},react.createElement(TextInput.k,{label:"First Name",id:"first-name"})),react.createElement(FormRow.f,{key:"f-2"},react.createElement(TextInput.k,{label:"Last Name",id:"last-name"})),react.createElement(FormRow.f,{key:"f-3"},react.createElement(TextInput.k,{label:"Email",id:"email",type:"email",required:!0})),react.createElement(ButtonRow.z,{key:"f-4"},react.createElement(Button.$,null,"Cancel"),react.createElement(Button.$,{variant:"primary"},"Submit"))]}},ComplexForm={render:Template,args:{title:"A Complex Form",children:[react.createElement(IntroBox.m,{text:"In order to get to know you, we need to talk about colors.",key:"ib-1"}),react.createElement(FormSection_component.y,{title:"First Section of the Form",key:"fs-1"},react.createElement(FormRow.f,{key:"fr-1"},react.createElement(Select.l,{label:"Your Favorite Color",placeholder:"Select your favorite color…",id:"color"},react.createElement(SelectOption.O,{value:"red",key:"so-1"},"Red"),react.createElement(SelectOption.O,{value:"blue",key:"so-2"},"Blue"),react.createElement(SelectOption.O,{value:"other",key:"so-3"},"Other")),react.createElement(FormHint.m,{text:"Your favorite color to the best of your knowledge"})),react.createElement(FormRow.f,{key:"fr-2"},react.createElement(TextInput.k,{label:"First Name",id:"first-name"})),react.createElement(FormRow.f,{key:"fr-3"},react.createElement(TextInput.k,{label:"Last Name",id:"last-name"}))),react.createElement(FormSection_component.y,{title:"Second Section of the Form",key:"fs-2"},react.createElement(FormRow.f,{key:"fr-4"},react.createElement(Textarea.T,{label:"Your Message",id:"message",placeholder:"If there is something else we should know about you – now is the time!"})),react.createElement(FormRow.f,null,react.createElement(TextInput.k,{invalid:!0,value:"Error!"}),react.createElement(FormHint.m,{variant:"error",text:"A textInput with an error for no reason whatsoever."})),react.createElement(FormRow.f,{key:"fr-5"},react.createElement(Switch.d,{label:"Wake me up at 4.30am",id:"wakey"})),react.createElement(FormRow.f,{key:"fr-6"},react.createElement(Switch.d,{label:"Send me an email, too",id:"email-too"}))),react.createElement(ButtonRow.z,{key:"br-1"},react.createElement(Button.$,null,"Cancel"),react.createElement(Button.$,{variant:"primary-danger"},"Clear"),react.createElement(Button.$,{variant:"primary"},"Submit"))]}},__namedExportsOrder=["Default","ComplexForm"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    title: "A Simple Form",\n    children: [<FormRow key="f-1">\n        <TextInput label="First Name" id="first-name" />\n      </FormRow>, <FormRow key="f-2">\n        <TextInput label="Last Name" id="last-name" />\n      </FormRow>, <FormRow key="f-3">\n        <TextInput label="Email" id="email" type="email" required />\n      </FormRow>, <ButtonRow key="f-4">\n        <Button>Cancel</Button>\n        <Button variant="primary">Submit</Button>\n      </ButtonRow>]\n  }\n}',...Default.parameters?.docs?.source}}},ComplexForm.parameters={...ComplexForm.parameters,docs:{...ComplexForm.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    title: "A Complex Form",\n    children: [<IntroBox text="In order to get to know you, we need to talk about colors." key="ib-1" />, <FormSection title="First Section of the Form" key="fs-1">\n        <FormRow key="fr-1">\n          <Select label="Your Favorite Color" placeholder="Select your favorite color…" id="color">\n            <SelectOption value="red" key="so-1">\n              Red\n            </SelectOption>\n            <SelectOption value="blue" key="so-2">\n              Blue\n            </SelectOption>\n            <SelectOption value="other" key="so-3">\n              Other\n            </SelectOption>\n          </Select>\n          <FormHint text="Your favorite color to the best of your knowledge" />\n        </FormRow>\n        <FormRow key="fr-2">\n          <TextInput label="First Name" id="first-name" />\n        </FormRow>\n        <FormRow key="fr-3">\n          <TextInput label="Last Name" id="last-name" />\n        </FormRow>\n      </FormSection>, <FormSection title="Second Section of the Form" key="fs-2">\n        <FormRow key="fr-4">\n          <Textarea label="Your Message" id="message" placeholder="If there is something else we should know about you – now is the time!" />\n        </FormRow>\n        <FormRow>\n          <TextInput invalid value="Error!" />\n          <FormHint variant="error" text="A textInput with an error for no reason whatsoever." />\n        </FormRow>\n        <FormRow key="fr-5">\n          <Switch label="Wake me up at 4.30am" id="wakey" />\n        </FormRow>\n        <FormRow key="fr-6">\n          <Switch label="Send me an email, too" id="email-too" />\n        </FormRow>\n      </FormSection>, <ButtonRow key="br-1">\n        <Button>Cancel</Button>\n        <Button variant="primary-danger">Clear</Button>\n        <Button variant="primary">Submit</Button>\n      </ButtonRow>]\n  }\n}',...ComplexForm.parameters?.docs?.source}}}}}]);