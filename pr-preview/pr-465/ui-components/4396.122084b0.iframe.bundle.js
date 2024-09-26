"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4396],{"./src/components/PortalProvider/PortalProvider.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>PortalProvider,T:()=>usePortalRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js");const DEFAULT_PORTAL_ROOT_ID="juno-portal-root",PortalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),portalRootStyles={position:"absolute",top:"0",left:"0"},portalStyles={position:"relative",zIndex:"1"},Portal=_ref=>{let{children=null}=_ref;const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),[isMounted,setIsMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);if((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{rootRef?.current&&setIsMounted(!0)}),[rootRef]),!isMounted)return null;const wrappedChildren=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"juno-portal",style:portalStyles},children);return(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(wrappedChildren,rootRef.current||document.body)};function usePortalRef(){const rootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isReady,setIsReady]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!rootRef||!rootRef.current)return void console.warn("usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually.");const containerElement=document.createElement("div");return containerElement.style.position="relative",containerElement.style.zIndex="1",containerElement.classList.add("juno-portal"),rootRef.current.append(containerElement),containerRef.current=containerElement,setIsReady(!0),()=>{containerRef.current&&rootRef?.current&&(rootRef.current.removeChild(containerRef.current),containerRef.current=null)}}),[rootRef]),containerRef?.current&&isReady?containerRef.current:null}Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node};const PortalProvider=_ref2=>{let{children=null,className="",id=DEFAULT_PORTAL_ROOT_ID}=_ref2;const portalRootRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalContext.Provider,{value:portalRootRef},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`juno-portal-root ${className}`,id,ref:portalRootRef,style:portalRootStyles}))};PortalProvider.Portal=Portal,Portal.displayName="PortalProvider.Portal",PortalProvider.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.Portal.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},PortalProvider.__docgenInfo={description:"A PortalProvider component that helps using and managing portals.\nIt renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.\nNormally, there is no need to include `PortalProvider` manually, when using `AppShell` `PortalProvider` is already included in the app.",methods:[{name:"Portal",docblock:null,modifiers:["static"],params:[{name:"{ children = null }",optional:!1,type:null}],returns:null}],displayName:"PortalProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children of the PortalProvider. Typically, this will be the whole app.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the portal root container in which portals will be mounted",type:{name:"string"},required:!1},id:{defaultValue:{value:'"juno-portal-root"',computed:!1},description:"Pass a custom id to the portal root container in which portals will be mounted",type:{name:"string"},required:!1}}}},"./src/components/PortalProvider/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>_PortalProvider_component__WEBPACK_IMPORTED_MODULE_0__.G,T:()=>_PortalProvider_component__WEBPACK_IMPORTED_MODULE_0__.T});var _PortalProvider_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/PortalProvider/PortalProvider.component.js")},"./src/components/Select/Select.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>SelectContext,l:()=>Select});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__),_headlessui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/listbox/listbox.js"),_deprecated_js_Label_Label_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/Label/Label.component.js"),_deprecated_js_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js"),_deprecated_js_Spinner_Spinner_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/deprecated_js/Spinner/Spinner.component.js"),_deprecated_js_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/deprecated_js/FormHint/FormHint.component.js"),_headlessui_float_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@headlessui-float/react/dist/headlessui-float.mjs"),_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),_PortalProvider_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/PortalProvider/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react-dom/index.js");__webpack_require__("./src/components/Select/select.scss");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const SelectContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),Select=_ref=>{let{ariaLabel="",children=null,className="",defaultValue,disabled=!1,error=!1,errortext="",helptext="",id="",invalid=!1,label,loading=!1,multiple=!1,name,onChange,onValueChange,placeholder="Select…",required=!1,successtext="",truncateOptions=!1,valid=!1,value,valueLabel,variant="default",width="full",wrapperClassName="",...props}=_ref;const isNotEmptyString=str=>!("string"==typeof str&&0===str.trim().length),theId=id||"juno-select-"+(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),helptextId="juno-select-helptext-"+(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),[optionValuesAndLabels,setOptionValuesAndLabels]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Map),[hasError,setHasError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isInvalid,setIsInvalid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isValid,setIsValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),invalidated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>invalid||!(!errortext||!isNotEmptyString(errortext))),[invalid,errortext]),validated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>valid||!(!successtext||!isNotEmptyString(successtext))),[valid,successtext]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setHasError(error)}),[error]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsInvalid(invalidated)}),[invalidated]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsValid(validated)}),[validated]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsLoading(loading)}),[loading]);const portalContainerRef=(0,_PortalProvider_index__WEBPACK_IMPORTED_MODULE_5__.T)(),middleware=[(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_8__.cY)(4),(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_8__.RK)({crossAxis:!0,allowedPlacements:["bottom","top"]}),(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_8__.Ej)({boundary:"viewport",apply(_ref2){let{availableWidth,availableHeight,elements}=_ref2;Object.assign(elements.floating.style,{maxWidth:`${availableWidth}px`,maxHeight:`${availableHeight}px`,overflowY:"auto"})}}),(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_8__.BN)()],getMultipleDisplayValues=values=>{const valuesToDisplay=values.map((key=>(key=>{const element=optionValuesAndLabels.get(key);if(element)return element.displayName?.length?element.displayName:null})(key))).filter((value=>value&&value.toString().trim().length>0));return valuesToDisplay.join(", ")};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContext.Provider,{value:{truncateOptions,addOptionValueAndLabel:(value,label,children)=>{setOptionValuesAndLabels((oldMap=>new Map(oldMap).set(value||children,{val:value,label,children,displayName:children||label||value})))}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`\n          juno-select-wrapper \n          jn-relative\n          ${"auto"==width?"jn-inline-block":"jn-block"}\n          ${"auto"==width?"jn-w-auto":"jn-w-full"}\n          ${wrapperClassName}\n        `},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.W,{disabled:disabled||isLoading||hasError,multiple,name,onChange:value=>{onChange&&onChange(value||""),onValueChange&&onValueChange(value||"")},value,defaultValue},label&&isNotEmptyString(label)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.W.Label,{as:_deprecated_js_Label_Label_component__WEBPACK_IMPORTED_MODULE_1__.J,htmlFor:theId,text:label,className:"\n  jn-no-wrap\n  jn-pointer-events-none\n  jn-top-2\n  jn-left-4\n",disabled:disabled||isLoading||hasError,required,floating:!0,minimized:!0}):"",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_float_react__WEBPACK_IMPORTED_MODULE_10__.nt,{composable:!0,adaptiveWidth:!0,middleware},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_float_react__WEBPACK_IMPORTED_MODULE_10__.nt.Reference,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.W.Button,_extends({"aria-describedby":helptext?helptextId:"","aria-label":ariaLabel||label,as:"button",id:theId,className:`\n                    juno-select-toggle\n                    ${variant&&variant.length?"juno-select-toggle-"+variant:"juno-select-toggle-default"}\n                    ${"auto"==width?"jn-w-auto":"jn-w-full"}\n                    \n  jn-appearance-none\n  jn-h-[2.375rem]\n  jn-inline-flex\n  jn-items-center\n  jn-px-4\n  jn-rounded-3px\n  jn-select-none\n  jn-text-base\n  focus:jn-outline-none\n  focus:jn-ring-2\n  focus:jn-ring-theme-focus\n\n                    ${label&&isNotEmptyString(label)?"jn-pt-[0.4rem]":""}\n                    ${disabled?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}\n                    ${isLoading||hasError?"jn-justify-center":"jn-justify-between"}\n                    ${isInvalid?"juno-select-invalid \n  jn-border\n  jn-border-theme-error\n":""} \n                    ${isValid?"juno-select-valid \n  jn-border\n  jn-border-theme-success\n":""}  \n                    \n                    ${isLoading?"juno-select-loading jn-cursor-not-allowed":""}\n                    ${hasError?"juno-select-error jn-cursor-not-allowed":""}\n                    ${className}\n                  `},props),(_ref3=>{let{open,value}=_ref3;return hasError||isLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n  jn-absolute\n  jn-top-1/2\n  jn-left-1/2\n  jn-translate-y-[-50%]\n  jn-translate-x-[-0.75rem]\n"},hasError?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):isLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Spinner_Spinner_component__WEBPACK_IMPORTED_MODULE_3__.y,{className:"jn-cursor-not-allowed"}):""):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"\n  jn-block\n  jn-h-6\n  jn-overflow-hidden\n  jn-text-ellipsis\n  jn-whitespace-nowrap\n"},multiple?getMultipleDisplayValues(value)||valueLabel||value.join(", ")||placeholder:optionValuesAndLabels.get(value)?.displayName||valueLabel||value||placeholder),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"jn-flex"},isValid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"checkCircle",color:"jn-text-theme-success"}):"",isInvalid?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"dangerous",color:"jn-text-theme-error"}):"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon:open?"expandLess":"expandMore"}))))}))),(0,react_dom__WEBPACK_IMPORTED_MODULE_6__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_float_react__WEBPACK_IMPORTED_MODULE_10__.nt.Content,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.W.Options,{unmount:!1,className:"\n                        juno-select-menu\n                        \n  jn-rounded\n  jn-bg-theme-background-lvl-1\n  jn-w-full\n  jn-overflow-y-auto\n\n                      "},children)),portalContainerRef||document.body))),errortext&&isNotEmptyString(errortext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__.m,{text:errortext,variant:"error"}):"",successtext&&isNotEmptyString(successtext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__.m,{text:successtext,variant:"success"}):"",helptext&&isNotEmptyString(helptext)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_FormHint_FormHint_component__WEBPACK_IMPORTED_MODULE_4__.m,{text:helptext,id:helptextId}):""))};Select.propTypes={ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_11___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,error:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,errortext:prop_types__WEBPACK_IMPORTED_MODULE_11___default().node,helptext:prop_types__WEBPACK_IMPORTED_MODULE_11___default().node,id:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,invalid:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,loading:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,multiple:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,name:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_11___default().func,onValueChange:prop_types__WEBPACK_IMPORTED_MODULE_11___default().func,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,successtext:prop_types__WEBPACK_IMPORTED_MODULE_11___default().node,truncateOptions:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,value:props=>{const{multiple,value}=props;if(value){if(multiple&&!Array.isArray(value))return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.");if(!multiple&&"string"!=typeof value)return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")}},valueLabel:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(["default","primary","primary-danger","subdued"]),width:prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(["full","auto"]),wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string},Select.__docgenInfo={description:"A Select component that can be configured to allow selecting a single item or multiple items.\n  Pass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.",methods:[],displayName:"Select",props:{ariaLabel:{defaultValue:{value:'""',computed:!1},description:"Pass an aria-label to the Select toggle button",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children to render as options. Use the SelectOption component, and SelectDivider if needed.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the internal Select toggle button",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is disabled",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead.",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A small message rendered in red text below the Select toggle.",type:{name:"node"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element",type:{name:"node"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id to the Select toggle",type:{name:"string"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select has been validated unsuccessfully / negatively",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is busy loading options. Will show a Spinner in the Select toggle.",type:{name:"bool"},required:!1},multiple:{defaultValue:{value:"false",computed:!1},description:"Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively.",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'"Select…"',computed:!1},description:'A placeholder to render when no value has been selected. Default is "Select…".',type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible.",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`.",type:{name:"node"},required:!1},truncateOptions:{defaultValue:{value:"false",computed:!1},description:'Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated.',type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle.",type:{name:"bool"},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic variant of the Select toggle button.",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:'Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state.',type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},defaultValue:{description:"Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.",type:{name:"string"},required:!1},label:{description:"Pass a label to render in the Select toggle button",type:{name:"string"},required:!1},name:{description:"Pass a name attribute to the Select to be transmitted when used in a form.",type:{name:"string"},required:!1},onChange:{description:"Handler to be executed when the selected value changes",type:{name:"func"},required:!1},onValueChange:{description:"LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead.",type:{name:"func"},required:!1},value:{description:"The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string.",type:{name:"custom",raw:'(props) => {\n  const { multiple, value } = props\n\n  // only validate if value is not undefined to avoid throwing an error when not necessary:\n  if (value) {\n    if (multiple && !Array.isArray(value)) {\n      return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.")\n    }\n    if (!multiple && typeof value !== "string") {\n      return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")\n    }\n  }\n}'},required:!1},valueLabel:{description:"The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for\n human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly.",type:{name:"string"},required:!1}}}},"./src/components/SelectOption/SelectOption.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>SelectOption});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/listbox/listbox.js"),_Select_Select_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Select/Select.component.js"),_deprecated_js_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const SelectOption=_ref=>{let{children,className="",disabled=!1,value="",label,...props}=_ref;const selectContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Select_Select_component__WEBPACK_IMPORTED_MODULE_1__.C),{truncateOptions,addOptionValueAndLabel}=selectContext||{};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{addOptionValueAndLabel(value,label,children)}),[value,label,children]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.W.Option,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,disabled,value:value||children},(_ref2=>{let{selected}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",_extends({className:`\n          juno-select-option \n          jn-min-h-[2.5rem]\n          \n  jn-flex\n  jn-pt-[0.6875rem]\n  jn-pb-[0.5rem]\n  jn-pr-[0.875rem]\n  jn-select-none\n  data-[headlessui-state=active]:jn-outline-none\n  data-[headlessui-state=active]:jn-ring-2\n  data-[headlessui-state=active]:jn-ring-inset\n  data-[headlessui-state=active]:jn-ring-theme-focus\n  data-[headlessui-state=active]:jn-bg-theme-background-lvl-3\n\n          ${selected?"juno-select-option-selected \n  jn-text-theme-accent\n  jn-pl-3.5\n":"\n  jn-text-theme-default\n  jn-pl-[2.375rem]\n"}\n          ${disabled?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}\n          ${truncateOptions?"juno-select-option-truncate":""}\n          ${className}\n        `},props),selected?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_2__.I,{icon:"check",size:"18",className:"\n  jn-inline-block\n  jn-mr-1.5\n  jn-overflow-auto\n"}):"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:`\n            ${disabled?"\n  jn-opacity-50\n  jn-cursor-not-allowed\n":""}\n            ${truncateOptions?"\n  jn-block\n  jn-h-6\n  jn-overflow-hidden\n  jn-text-ellipsis\n  jn-whitespace-nowrap\n":""}\n          `},children||label||value))}))};SelectOption.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,value:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},SelectOption.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1}}}},"./src/components/Select/select.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-select-toggle-default{background-color:var(--color-button-default-bg);color:var(--color-button-default-text)}.juno-select-toggle-default:not(.juno-select-valid,.juno-select-invalid){border:1px solid var(--color-button-default-bg)}.juno-select-toggle-default:hover{background-color:var(--color-button-default-hover-bg);color:var(--color-button-default-hover-text)}.juno-select-toggle-default:active{background-color:var(--color-button-default-active-bg);border-color:var(--color-button-default-active-border);color:var(--color-button-default-active-text)}.juno-select-toggle-primary{background-color:var(--color-button-primary-bg);color:var(--color-button-primary-text)}.juno-select-toggle-primary:not(.juno-select-valid,.juno-select-invalid){border:1px solid var(--color-button-primary-bg)}.juno-select-toggle-primary:hover{background-color:var(--color-button-primary-hover-bg);color:var(--color-button-primary-hover-text)}.juno-select-toggle-primary:active{background-color:var(--color-button-primary-active-bg);color:var(--color-button-primary-active-text)}.juno-select-toggle-primary-danger{background-color:var(--color-button-primary-danger-bg);color:var(--color-button-primary-danger-text)}.juno-select-toggle-primary-danger:not(.juno-select-valid,.juno-select-invalid){border:1px solid var(--color-button-primary-danger-bg)}.juno-select-toggle-primary-danger:hover{background-color:var(--color-button-primary-danger-hover-bg);color:var(--color-button-primary-danger-hover-text)}.juno-select-toggle-primary-danger:active{background-color:var(--color-button-primary-danger-active-bg);color:var(--color-button-primary-danger-active-text)}.juno-select-toggle-subdued{background-color:var(--color-button-subdued-bg);color:var(--color-button-subdued-text)}.juno-select-toggle-subdued:not(.juno-select-valid,.juno-select-invalid){border:1px solid var(--color-button-subdued-border)}.juno-select-toggle-subdued:hover{background-color:var(--color-button-subdued-hover-bg);border-color:var(--color-button-subdued-hover-border);color:var(--color-button-subdued-hover-text)}.juno-select-toggle-subdued:active{background-color:var(--color-button-subdued-active-bg);border-color:var(--color-button-subdued-active-border);color:var(--color-button-subdued-active-text)}","",{version:3,sources:["webpack://./src/components/Select/select.scss"],names:[],mappings:"AAMA,4BACE,+CAAA,CACA,sCAAA,CAEA,yEACE,+CAAA,CAGF,kCACE,qDAAA,CACA,4CAAA,CAGF,mCACE,sDAAA,CACA,sDAAA,CACA,6CAAA,CAIJ,4BACE,+CAAA,CACA,sCAAA,CAEA,yEACE,+CAAA,CAGF,kCACE,qDAAA,CACA,4CAAA,CAGF,mCACE,sDAAA,CACA,6CAAA,CAIJ,mCACE,sDAAA,CACA,6CAAA,CAEA,gFACE,sDAAA,CAGF,yCACE,4DAAA,CACA,mDAAA,CAGF,0CACE,6DAAA,CACA,oDAAA,CAIJ,4BACE,+CAAA,CACA,sCAAA,CAEA,yEACE,mDAAA,CAGF,kCACE,qDAAA,CACA,qDAAA,CACA,4CAAA,CAGF,mCACE,sDAAA,CACA,sDAAA,CACA,6CAAA",sourcesContent:["// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// For each variant, we set a border using the same color as the background to accommodate for the border of the subdued variant.\n// For all variants, valid/invalid borders override the natural border style, so we set the natural ones if the toggle is not valid/invalid.\n\n.juno-select-toggle-default {\n  background-color: var(--color-button-default-bg);\n  color: var(--color-button-default-text);\n\n  &:not(.juno-select-valid, .juno-select-invalid) {\n    border: 1px solid var(--color-button-default-bg);\n  }\n\n  &:hover {\n    background-color: var(--color-button-default-hover-bg);\n    color: var(--color-button-default-hover-text);\n  }\n\n  &:active {\n    background-color: var(--color-button-default-active-bg);\n    border-color: var(--color-button-default-active-border);\n    color: var(--color-button-default-active-text);\n  }\n}\n\n.juno-select-toggle-primary {\n  background-color: var(--color-button-primary-bg);\n  color: var(--color-button-primary-text);\n\n  &:not(.juno-select-valid, .juno-select-invalid) {\n    border: 1px solid var(--color-button-primary-bg);\n  }\n\n  &:hover {\n    background-color: var(--color-button-primary-hover-bg);\n    color: var(--color-button-primary-hover-text);\n  }\n\n  &:active {\n    background-color: var(--color-button-primary-active-bg);\n    color: var(--color-button-primary-active-text);\n  }\n}\n\n.juno-select-toggle-primary-danger {\n  background-color: var(--color-button-primary-danger-bg);\n  color: var(--color-button-primary-danger-text);\n\n  &:not(.juno-select-valid, .juno-select-invalid) {\n    border: 1px solid var(--color-button-primary-danger-bg);\n  }\n\n  &:hover {\n    background-color: var(--color-button-primary-danger-hover-bg);\n    color: var(--color-button-primary-danger-hover-text);\n  }\n\n  &:active {\n    background-color: var(--color-button-primary-danger-active-bg);\n    color: var(--color-button-primary-danger-active-text);\n  }\n}\n\n.juno-select-toggle-subdued {\n  background-color: var(--color-button-subdued-bg);\n  color: var(--color-button-subdued-text);\n\n  &:not(.juno-select-valid, .juno-select-invalid) {\n    border: 1px solid var(--color-button-subdued-border);\n  }\n\n  &:hover {\n    background-color: var(--color-button-subdued-hover-bg);\n    border-color: var(--color-button-subdued-hover-border);\n    color: var(--color-button-subdued-hover-text);\n  }\n\n  &:active {\n    background-color: var(--color-button-subdued-active-bg);\n    border-color: var(--color-button-subdued-active-border);\n    color: var(--color-button-subdued-active-text);\n  }\n}\n"],sourceRoot:""}])}}]);