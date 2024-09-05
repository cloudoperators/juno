"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2914],{"./src/components/ComboBox/ComboBox.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>ComboBoxContext,a:()=>ComboBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_headlessui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/combobox/combobox.js"),_headlessui_float_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@headlessui-float/react/dist/headlessui-float.mjs"),_Label_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Label/index.js"),_FormHint_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormHint/index.js"),_Icon_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.js"),_Spinner_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Spinner/index.js"),_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),_PortalProvider_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/PortalProvider/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react-dom/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ComboBoxContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),ComboBox=_ref=>{let{ariaLabel,children=null,className="",defaultValue="",disabled=!1,error=!1,errortext="",helptext="",id="",invalid=!1,loading=!1,label,name="",nullable=!0,onBlur,onChange,onFocus,onInputChange,placeholder="Select…",required=!1,successtext="",truncateOptions=!1,valid=!1,value="",valueLabel,width="full",wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),theId=id||"juno-combobox-"+(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),helptextId="juno-combobox-helptext-"+(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),[optionValuesAndLabels,setOptionValuesAndLabels]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Map),[query,setQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasError,setHasError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasFocus,setFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isInvalid,setIsInvalid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isValid,setIsValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),invalidated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setSelectedValue(value)}),[value]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setHasError(error)}),[error]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsLoading(loading)}),[loading]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsValid(validated)}),[validated]);const portalContainerRef=(0,_PortalProvider_index__WEBPACK_IMPORTED_MODULE_5__.T)(),middleware=[(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.cY)(4),(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.BN)(),(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.UU)(),(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.Ej)({boundary:"viewport",apply(_ref2){let{availableWidth,availableHeight,elements}=_ref2;Object.assign(elements.floating.style,{maxWidth:`${availableWidth}px`,maxHeight:`${availableHeight}px`,overflowY:"auto"})}})],filteredChildren=""===query?children:children.filter((child=>{const optionDisplayValue=child.props.children?.toString()||child.props.label||child.props.value;return optionDisplayValue?.toLowerCase().includes(query.toLowerCase())}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComboBoxContext.Provider,{value:{selectedValue,truncateOptions,addOptionValueAndLabel:(value,label,children)=>{setOptionValuesAndLabels((oldMap=>new Map(oldMap).set(value||children,{val:value,label,children})))}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n          juno-combobox-wrapper\n          jn-relative\n          ${"auto"==width?"jn-inline-block":"jn-block"}\n          ${"auto"==width?"jn-w-auto":"jn-w-full"}\n          ${wrapperClassName}\n        `},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.G,_extends({defaultValue,disabled:disabled||isLoading||hasError,name,nullable,onChange:value=>{setSelectedValue(value),onChange&&onChange(value)},value:selectedValue||defaultValue},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_float_react__WEBPACK_IMPORTED_MODULE_9__.nt,{composable:!0,adaptiveWidth:!0,middleware},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_float_react__WEBPACK_IMPORTED_MODULE_9__.nt.Reference,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n                juno-combobox-input-wrapper\n                \n  jn-relative\n\n                ${disabled?"jn-cursor-not-allowed":""}\n              `},label&&isNotEmptyString(label)&&!isLoading&&!hasError?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Label_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{text:label,disabled,required,htmlFor:theId,className:"\n  jn-pointer-events-none\n  jn-top-2\n  jn-left-[0.9375rem]\n",floating:!0,minimized:!!(placeholder||hasFocus||query&&isNotEmptyString(query)||selectedValue&&isNotEmptyString(selectedValue))}):"",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.G.Input,{autoComplete:"off","aria-label":ariaLabel||label,"aria-describedby":helptext?helptextId:"",disabled:disabled||isLoading||hasError,id:theId,onBlur:event=>{setFocus(!1),onBlur&&onBlur(event)},onChange:event=>{setQuery(event?.target?.value),onInputChange&&onInputChange(event)},onFocus:event=>{setFocus(!0),onFocus&&onFocus(event)},placeholder:isLoading||hasError?"":placeholder,displayValue:val=>optionValuesAndLabels.get(val)?.children||optionValuesAndLabels.get(val)?.label||valueLabel||val,className:`\n                  juno-combobox-input \n                  \n  jn-rounded-3px\n  jn-bg-theme-textinput\n  jn-text-theme-textinput\n  jn-border\n  jn-text-base\n  jn-leading-4\n  jn-w-full\n  jn-px-4\n  jn-h-textinput\n  jn-text-left\n  jn-overflow-hidden\n  jn-text-ellipsis\n  jn-whitespace-nowrap\n  focus:jn-outline-none\n  focus:jn-ring-2\n  focus:jn-ring-theme-focus\n \n                  ${label&&isNotEmptyString(label)?"\n  jn-pt-[1.125rem] \n  jn-pb-1\n":"\n  jn-py-4\n"}\n                  ${disabled?"\n  jn-cursor-not-allowed\n  jn-pointer-events-none\n  jn-opacity-50\n":""}\n                  ${isInvalid?"juno-combobox-invalid \n  jn-border-theme-error\n":""} \n                  ${isValid?"juno-combobox-valid \n  jn-border-theme-success\n":""}  \n                  ${isValid||isInvalid?"":"\n  jn-border-theme-textinput-default\n"} \n                  ${isLoading?"juno-combobox-loading jn-cursor-not-allowed":""}\n                  ${hasError?"juno-combobox-error jn-cursor-not-allowed":""}\n                  ${className}\n                `}),isLoading||hasError?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n  jn-absolute\n  jn-top-1/2\n  jn-left-1/2\n  jn-translate-y-[-50%]\n  jn-translate-x-[-0.75rem]\n"},isLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Spinner_index_js__WEBPACK_IMPORTED_MODULE_4__.y,{className:"jn-cursor-not-allowed"}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_index_js__WEBPACK_IMPORTED_MODULE_3__.I,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"})):isValid||isInvalid?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:`\n                        juno-combobox-icon-container \n                        \n  jn-absolute\n  jn-top-[.4rem]\n  jn-right-6\n \n                        ${disabled?"jn-opacity-50":""}\n                      `},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_index_js__WEBPACK_IMPORTED_MODULE_3__.I,{icon:isValid?"checkCircle":"dangerous",color:isValid?"jn-text-theme-success":"jn-text-theme-error"})):"",hasError||isLoading?"":react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.G.Button,{disabled,className:`\n                        juno-combobox-toggle \n                        \n  jn-absolute\n  jn-top-0\n  jn-right-0\n  jn-h-textinput\n  jn-w-6\n  jn-h-4\n  jn-border-l-0\n  jn-border-y-[1px]\n  jn-border-r-[1px]\n  jn-rounded-tr\n  jn-rounded-br\n  jn-appearance-none\n  jn-bg-theme-textinput\n  jn-text-theme-textinput\n\n                        ${disabled?"\n  jn-cursor-not-allowed\n  jn-pointer-events-none\n  jn-bg-transparent\n  jn-opacity-50\n":""}\n                        ${isInvalid?"juno-combobox-toggle-invalid \n  jn-border-theme-error\n":""} \n                        ${isValid?"juno-combobox-toggle-valid \n  jn-border-theme-success\n":""}  \n                        ${isValid||isInvalid?"":"\n  jn-border-theme-textinput-default\n"} \n                      `},(_ref3=>{let{open}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_index_js__WEBPACK_IMPORTED_MODULE_3__.I,{icon:open?"expandLess":"expandMore"})})))),(0,react_dom__WEBPACK_IMPORTED_MODULE_6__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_float_react__WEBPACK_IMPORTED_MODULE_9__.nt.Content,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.G.Options,{unmount:!1,className:"\n                    juno-combobox-options \n                    \n  jn-rounded\n  jn-bg-theme-background-lvl-1\n  jn-w-full\n  jn-overflow-y-auto\n\n                  "},filteredChildren)),portalContainerRef||document.body))),errortext&&isNotEmptyString(errortext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{text:errortext,variant:"error"}):"",successtext&&isNotEmptyString(successtext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{text:successtext,variant:"success"}):"",helptext&&isNotEmptyString(helptext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormHint_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{text:helptext,id:helptextId}):""))};ComboBox.propTypes={ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_10___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,error:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,errortext:prop_types__WEBPACK_IMPORTED_MODULE_10___default().node,helptext:prop_types__WEBPACK_IMPORTED_MODULE_10___default().node,id:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,invalid:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,loading:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,name:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,nullable:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,onBlur:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func,onChange:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func,onFocus:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func,onInputChange:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,successtext:prop_types__WEBPACK_IMPORTED_MODULE_10___default().node,truncateOptions:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,value:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,valueLabel:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(["full","auto"]),wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string},ComboBox.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to Render. Use `ComboBox.Option` elements.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"A custom className. Will be passed to the internal text input element of the ComboBox",type:{name:"string"},required:!1},defaultValue:{defaultValue:{value:'""',computed:!1},description:"Pass a defaultValue to use as an uncontrolled Component that will handle its state internally",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the ComboBox is disabled",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the ComboBox has an error. Note this refers to an internal error like failing to load options etc., to indicate failed validation use `invalid` instead.",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"An errortext to display when the ComboBox failed validation or an internal error occurred.",type:{name:"node"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the ComboBox",type:{name:"node"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"The Id of the ComboBox. Will be assigned to the text input part of the ComboBox. If not passed, an id will be auto-generated.",type:{name:"string"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the ComboBox failed validation",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the ComboBox is busy loading options",type:{name:"bool"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"The name attribute of the ComboBox when used as part of a form",type:{name:"string"},required:!1},nullable:{defaultValue:{value:"true",computed:!1},description:"Whether the ComboBox can be reset to having no value selected by manually clearing the text and clicking outside of the ComboBox. Default is TRUE. When set to FALSE, the selected value can only be changed by selecting another value after the initial selection, but never back to no selected value at all.",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'"Select…"',computed:!1},description:"A placeholder to render in the text input",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the ComboBox is required",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to display in case the ComboBox was successfully validated. Will set the ComboBox to `valid` when passed.",type:{name:"node"},required:!1},truncateOptions:{defaultValue:{value:"false",computed:!1},description:"Whether the option labels should be truncated in case they are longer/wider than the available space in an option or not. Default is FALSE.",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the ComboBox was successfully validated",type:{name:"bool"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"The selected value of the ComboBox in Controlled Mode.",type:{name:"string"},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:"The width of the text input. Either 'full' (default) or 'auto'.",type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom classname to the wrapping <div> element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},ariaLabel:{description:"The aria-label of the ComboBox. Defaults to the label if label was passed.",type:{name:"string"},required:!1},label:{description:"The label of the ComboBox",type:{name:"string"},required:!1},onBlur:{description:"A handler to execute when the ComboBox looses focus",type:{name:"func"},required:!1},onChange:{description:"A handler to execute when the ComboBox' selected value changes",type:{name:"func"},required:!1},onFocus:{description:"A handler to execute when the ComboBox input receives focus",type:{name:"func"},required:!1},onInputChange:{description:"Handler to execute when the ComboBox text input value changes",type:{name:"func"},required:!1},valueLabel:{description:"The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for human-readable SelectOptions, you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly",type:{name:"string"},required:!1}}}},"./src/components/ComboBoxOption/ComboBoxOption.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ComboBoxOption});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/combobox/combobox.js"),_ComboBox_ComboBox_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ComboBox/ComboBox.component.js"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ComboBoxOption=_ref=>{let{children,disabled=!1,value="",label,className="",...props}=_ref;const comboBoxContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ComboBox_ComboBox_component__WEBPACK_IMPORTED_MODULE_1__.X),{selectedValue,truncateOptions,addOptionValueAndLabel}=comboBoxContext||{};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{addOptionValueAndLabel(value,label,children)}),[value,label,children]);const theValue=value||children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.G.Option,{value:theValue,disabled,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment},react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",_extends({className:`\n          juno-combobox-option \n          \n  jn-flex\n  jn-pt-[0.6875rem]\n  jn-pb-[0.5rem]\n  jn-pr-[0.875rem]\n  jn-select-none\n  data-[headlessui-state=active]:jn-outline-none\n  data-[headlessui-state=active]:jn-ring-2\n  data-[headlessui-state=active]:jn-ring-inset\n  data-[headlessui-state=active]:jn-ring-theme-focus\n  data-[headlessui-state=active]:jn-bg-theme-background-lvl-3\n\n          ${selectedValue===value?"\n  jn-text-theme-accent\n  jn-pl-3.5\n":"\n  jn-text-theme-default\n  jn-pl-[2.375rem]\n"}\n          ${disabled?"jn-cursor-not-allowed":""}\n          ${className}\n        `},props),selectedValue===theValue?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"check",size:"18",className:"\n  jn-inline-block\n  jn-mr-1.5\n"}):"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:`\n            ${disabled?"\n  jn-opacity-50\n  jn-cursor-not-allowed\n":""}\n            ${truncateOptions?"\n  jn-block\n  jn-h-6\n  jn-overflow-hidden\n  jn-text-ellipsis\n  jn-whitespace-nowrap\n":""}\n          `},children||label||value)))};ComboBoxOption.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,value:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},ComboBoxOption.__docgenInfo={description:"",methods:[],displayName:"ComboBoxOption",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1}}}}}]);