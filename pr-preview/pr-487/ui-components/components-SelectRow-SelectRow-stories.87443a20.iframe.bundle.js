"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8803],{"./src/components/FormRow/FormRow.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FormRow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormRow=_ref=>{let{children=null,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-form-row \n  jn-mb-2\n ${className}`},props),children)};FormRow.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormRow.__docgenInfo={description:"A generic FormRow component.\nUsed to layout and structure forms. Pass Form elements such as TextInput, Textarea, Select, or Radio and CheckboxGroups as children.",methods:[],displayName:"FormRow",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render in the formRow. Typically, these will be Input components such as TextInput, Textarea, Select, or Radio and CheckboxGroups",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to a FormRow",type:{name:"string"},required:!1}}}},"./src/components/FormRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>_FormRow_component__WEBPACK_IMPORTED_MODULE_0__.f});var _FormRow_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormRow/FormRow.component.js")},"./src/components/Select/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>_Select_component_js__WEBPACK_IMPORTED_MODULE_0__.l});var _Select_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Select/Select.component.js")},"./src/deprecated_js/withDeprecationWarning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>withDeprecationWarning});var react=__webpack_require__("../../node_modules/react/index.js");const withDeprecationWarning=(WrappedComponent,message)=>props=>((0,react.useEffect)((()=>{console.warn(message)}),[]),react.createElement(WrappedComponent,props))},"./src/components/SelectRow/SelectRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Invalid:()=>Invalid,Loading:()=>Loading,Required:()=>Required,Valid:()=>Valid,WithErrorText:()=>WithErrorText,WithHelpTextAndPlaceholder:()=>WithHelpTextAndPlaceholder,WithHelpTextWithLink:()=>WithHelpTextWithLink,WithSelectedOption:()=>WithSelectedOption,WithSuccessText:()=>WithSuccessText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectRow_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Select=__webpack_require__("./src/components/Select/index.js"),FormRow=__webpack_require__("./src/components/FormRow/index.js"),withDeprecationWarning=__webpack_require__("./src/deprecated_js/withDeprecationWarning/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const SelectRow=_ref=>{let{name=null,variant,label=null,id=null,helptext=null,required=null,className="",disabled=null,invalid=!1,errortext="",valid,placeholder="Select…",successtext,children,value,onValueChange,onChange,defaultValue,open,error,loading,...props}=_ref;return react.createElement(FormRow.f,null,react.createElement(Select.l,_extends({name,id,label,required,placeholder,onChange:onValueChange||onChange,disabled,invalid,valid,value,variant,defaultValue,open,error,loading,errortext,helptext,successtext,className},props),children))};SelectRow.propTypes={name:prop_types_default().string,label:prop_types_default().string,placeholder:prop_types_default().string,id:prop_types_default().string,helptext:prop_types_default().node,required:prop_types_default().bool,className:prop_types_default().string,disabled:prop_types_default().bool,invalid:prop_types_default().bool,errortext:prop_types_default().string,children:prop_types_default().node,valid:prop_types_default().bool,value:prop_types_default().string,variant:prop_types_default().oneOf(["default","primary","primary-danger","subdued"]),onValueChange:prop_types_default().func,onChange:prop_types_default().func,onOpenChange:prop_types_default().func,defaultValue:prop_types_default().string,open:prop_types_default().bool,error:prop_types_default().bool,loading:prop_types_default().bool,successtext:prop_types_default().string};const SelectRow_component=(0,withDeprecationWarning.P)(SelectRow,"SelectRow is deprecated and will be removed in future versions. To be future-proof, use Select instead.");SelectRow.__docgenInfo={description:"DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead.",methods:[],displayName:"SelectRow",props:{name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the input",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},helptext:{defaultValue:{value:"null",computed:!1},description:"Help text",type:{name:"node"},required:!1},required:{defaultValue:{value:"null",computed:!1},description:"Specify whether the select is required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the select",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the SelectRow is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"The error text to display in the SelectGroup. WHen passed, the SelectGroup will be invalidated automatically.",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'"Select…"',computed:!1},description:'The placeholder to show in the Select if no value is selected. defaults to "Select…".',type:{name:"string"},required:!1},children:{description:"Children to render",type:{name:"node"},required:!1},valid:{description:"Specify whether the select is valid",type:{name:"bool"},required:!1},value:{description:"Passing a value turns the select into a controlled component. If you pass a value you must also specify an onChange handler to deal with value changes",type:{name:"string"},required:!1},variant:{description:"The semantic variant of the Select toggle button.",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},onValueChange:{description:"Pass a handler to the Select element to execute once the value changes",type:{name:"func"},required:!1},onChange:{description:"Deprecated: Use `onValueChange` instead.",type:{name:"func"},required:!1},onOpenChange:{description:"Pass handler to execute once the Selects open state changes",type:{name:"func"},required:!1},defaultValue:{description:"Pass a default Value that should be selected initially. Use this if you want to use the select as an uncontrolled component.",type:{name:"string"},required:!1},open:{description:"Whether the Select is open",type:{name:"bool"},required:!1},error:{description:"Whether the Select has an error, e.g. when loading necessary option data failed. When the Select has been negatively validated, use `invalid` instead.",type:{name:"bool"},required:!1},loading:{description:"Whether the Select is currently busy loading options. Will display a Spinner Icon.",type:{name:"bool"},required:!1},successtext:{description:"Pass a value for success message",type:{name:"string"},required:!1}}};var SelectOption_component=__webpack_require__("./src/components/SelectOption/SelectOption.component.js"),SelectOption_stories=__webpack_require__("./src/components/SelectOption/SelectOption.stories.js"),PortalProvider_component=__webpack_require__("./src/components/PortalProvider/PortalProvider.component.js");function SelectRow_stories_extends(){return SelectRow_stories_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},SelectRow_stories_extends.apply(null,arguments)}const SelectRow_stories={title:"Deprecated/SelectRow",component:SelectRow_component,parameters:{docs:{description:{component:"DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead."}}},argTypes:{items:{table:{disable:!0}}},decorators:[story=>react.createElement(PortalProvider_component.G,null,story())]},Template=_ref=>{let{items,...args}=_ref;return react.createElement(SelectRow_component,args,items.map(((item,i)=>react.createElement(SelectOption_component.O,SelectRow_stories_extends({},item,{key:`${i}`})))))};Template.propTypes={items:prop_types_default().array};const ControlledTemplate=_ref2=>{let{value,children,...args}=_ref2;const[val,setVal]=(0,react.useState)(void 0);return(0,react.useEffect)((()=>{setVal(value)}),[value]),react.createElement(SelectRow_component,SelectRow_stories_extends({value:val,onValueChange:value=>{setVal(value)}},args),children)};ControlledTemplate.propTypes={value:prop_types_default().string,children:prop_types_default().array};const Default={render:Template,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",helptext:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row",items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]}},Controlled={render:ControlledTemplate,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",helptext:"",disabled:!1,invalid:!1,errortext:"",onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Controlled SelectRow",value:"2",children:[react.createElement(SelectOption_component.O,{value:"1",key:"1"},"Value 1"),react.createElement(SelectOption_component.O,{value:"2",key:"2"},"Value 2"),react.createElement(SelectOption_component.O,{value:"3",key:"3"},"Value 3")]}},WithHelpTextAndPlaceholder={render:Template,args:{name:"",id:"",required:!1,className:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row with Helptext and placeholder",helptext:"Select one",placeholder:"Select an option…",items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]}},WithHelpTextWithLink={render:Template,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row with Helptext",helptext:react.createElement(react.Fragment,null,"Helptext with a ",react.createElement("a",{href:"#"},"Link")),items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]}},Required={render:Template,args:{label:"Required Select Row",required:!0,items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]}},WithSelectedOption={render:Template,args:{label:"Select Row with selected option",required:!0,value:"d-2",items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2 is selected"},{...SelectOption_stories.Default.args,value:"d-3",label:"Option 3"}]}},Disabled={render:Template,args:{label:"Required Select Row",disabled:!0,items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]}},Invalid={render:Template,args:{invalid:!0,label:"Invalid SelectRow",items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]}},WithErrorText={render:Template,args:{label:"Select Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the SelectRow will be set to invalid automatically.",items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]},parameters:{docs:{description:{story:"Passing an `errortext` prop to the SelectRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},Valid={render:Template,args:{valid:!0,label:"Valid SelectRow",items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]}},WithSuccessText={render:Template,args:{label:"Select Row with Error Text",successtext:"When passed an successtext prop, the SelectRow will be set to valid automatically.",items:[{...SelectOption_stories.Default.args,value:"d-1",label:"Option 1"},{...SelectOption_stories.Default.args,value:"d-2",label:"Option 2"}]},parameters:{docs:{description:{story:"Passing a `successtext` prop to the SelectRow component will automatically validate it, so there is no need to explicitly set `valid` as well."}}}},Loading={render:Template,args:{loading:!0,label:"Loading options…",items:[]},parameters:{docs:{description:{story:"Set a SelectRow to `loading` when a Select is busy loading the optiins to display"}}}},Error={render:Template,args:{error:!0,label:"Loading options failed",items:[]},parameters:{docs:{description:{story:"Set a SelectRow to `error` when a loading options, e.g. from a remote API, failed. When the Select has been negatively validated, use `invalid` instead."}}}},__namedExportsOrder=["Default","Controlled","WithHelpTextAndPlaceholder","WithHelpTextWithLink","Required","WithSelectedOption","Disabled","Invalid","WithErrorText","Valid","WithSuccessText","Loading","Error"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "",\n    placeholder: "Select…",\n    id: "",\n    required: false,\n    className: "",\n    helptext: "",\n    disabled: false,\n    invalid: false,\n    errortext: "",\n    value: undefined,\n    onValueChange: undefined,\n    onChange: undefined,\n    onOpenChange: undefined,\n    defaultValue: undefined,\n    open: undefined,\n    error: undefined,\n    loading: undefined,\n    label: "Select Row",\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  }\n}',...Default.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  render: ControlledTemplate,\n  args: {\n    name: "",\n    placeholder: "Select…",\n    id: "",\n    required: false,\n    className: "",\n    helptext: "",\n    disabled: false,\n    invalid: false,\n    errortext: "",\n    onChange: undefined,\n    onOpenChange: undefined,\n    defaultValue: undefined,\n    open: undefined,\n    error: undefined,\n    loading: undefined,\n    label: "Controlled SelectRow",\n    value: "2",\n    children: [<SelectOption value="1" key="1">\n        Value 1\n      </SelectOption>, <SelectOption value="2" key="2">\n        Value 2\n      </SelectOption>, <SelectOption value="3" key="3">\n        Value 3\n      </SelectOption>]\n  }\n}',...Controlled.parameters?.docs?.source}}},WithHelpTextAndPlaceholder.parameters={...WithHelpTextAndPlaceholder.parameters,docs:{...WithHelpTextAndPlaceholder.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "",\n    id: "",\n    required: false,\n    className: "",\n    disabled: false,\n    invalid: false,\n    errortext: "",\n    value: undefined,\n    onValueChange: undefined,\n    onChange: undefined,\n    onOpenChange: undefined,\n    defaultValue: undefined,\n    open: undefined,\n    error: undefined,\n    loading: undefined,\n    label: "Select Row with Helptext and placeholder",\n    helptext: "Select one",\n    placeholder: "Select an option…",\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  }\n}',...WithHelpTextAndPlaceholder.parameters?.docs?.source}}},WithHelpTextWithLink.parameters={...WithHelpTextWithLink.parameters,docs:{...WithHelpTextWithLink.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    name: "",\n    placeholder: "Select…",\n    id: "",\n    required: false,\n    className: "",\n    disabled: false,\n    invalid: false,\n    errortext: "",\n    value: undefined,\n    onValueChange: undefined,\n    onChange: undefined,\n    onOpenChange: undefined,\n    defaultValue: undefined,\n    open: undefined,\n    error: undefined,\n    loading: undefined,\n    label: "Select Row with Helptext",\n    helptext: <>\n        Helptext with a <a href="#">Link</a>\n      </>,\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  }\n}',...WithHelpTextWithLink.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Required Select Row",\n    required: true,\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  }\n}',...Required.parameters?.docs?.source}}},WithSelectedOption.parameters={...WithSelectedOption.parameters,docs:{...WithSelectedOption.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Select Row with selected option",\n    required: true,\n    value: "d-2",\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2 is selected"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-3",\n      label: "Option 3"\n    }]\n  }\n}',...WithSelectedOption.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Required Select Row",\n    disabled: true,\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  }\n}',...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    invalid: true,\n    label: "Invalid SelectRow",\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  }\n}',...Invalid.parameters?.docs?.source}}},WithErrorText.parameters={...WithErrorText.parameters,docs:{...WithErrorText.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Select Row with Error Text",\n    helptext: "Oh so helpful helptext",\n    errortext: "When passed an errortext prop, the SelectRow will be set to invalid automatically.",\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing an `errortext` prop to the SelectRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."\n      }\n    }\n  }\n}',...WithErrorText.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    valid: true,\n    label: "Valid SelectRow",\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  }\n}',...Valid.parameters?.docs?.source}}},WithSuccessText.parameters={...WithSuccessText.parameters,docs:{...WithSuccessText.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Select Row with Error Text",\n    successtext: "When passed an successtext prop, the SelectRow will be set to valid automatically.",\n    items: [{\n      ...DefaultSelectOptionStory.args,\n      value: "d-1",\n      label: "Option 1"\n    }, {\n      ...DefaultSelectOptionStory.args,\n      value: "d-2",\n      label: "Option 2"\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Passing a `successtext` prop to the SelectRow component will automatically validate it, so there is no need to explicitly set `valid` as well."\n      }\n    }\n  }\n}',...WithSuccessText.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    loading: true,\n    label: "Loading options…",\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set a SelectRow to `loading` when a Select is busy loading the optiins to display"\n      }\n    }\n  }\n}',...Loading.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    error: true,\n    label: "Loading options failed",\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Set a SelectRow to `error` when a loading options, e.g. from a remote API, failed. When the Select has been negatively validated, use `invalid` instead."\n      }\n    }\n  }\n}',...Error.parameters?.docs?.source}}}}}]);