"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4607],{"./src/components/ComboBox/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_ComboBox_component_js__WEBPACK_IMPORTED_MODULE_0__.a});var _ComboBox_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ComboBox/ComboBox.component.js")},"./src/components/ComboBoxOption/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_ComboBoxOption_component_js__WEBPACK_IMPORTED_MODULE_0__.x});var _ComboBoxOption_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ComboBoxOption/ComboBoxOption.component.js")},"./src/components/Form/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Form});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Form=_ref=>{let{title=null,className="",children=null,...props}=_ref;return react.createElement("form",_extends({className:`juno-form \n\tjn-mb-8\n ${className}`},props),title?react.createElement("h1",{className:"juno-form-heading \n\tjn-text-2xl\n\tjn-font-bold\n\tjn-mb-4\n"},title):"",children)};Form.propTypes={title:prop_types_default().string,className:prop_types_default().string,children:prop_types_default().node},Form.__docgenInfo={description:"A Form to hold FormSections and/or FormGroups with an optional title.",methods:[],displayName:"Form",props:{title:{defaultValue:{value:"null",computed:!1},description:"Title to be rendered in the Form`.",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom className",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children to render in the form",type:{name:"node"},required:!1}}}},"./src/components/FormRow/FormRow.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FormRow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormRow=_ref=>{let{children=null,className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-form-row \n  jn-mb-2\n ${className}`},props),children)};FormRow.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},FormRow.__docgenInfo={description:"A generic FormRow component.\nUsed to layout and structure forms. Pass Form elements such as TextInput, Textarea, Select, or Radio and CheckboxGroups as children.",methods:[],displayName:"FormRow",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render in the formRow. Typically, these will be Input components such as TextInput, Textarea, Select, or Radio and CheckboxGroups",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a custom className to a FormRow",type:{name:"string"},required:!1}}}},"./src/components/FormRow/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>_FormRow_component__WEBPACK_IMPORTED_MODULE_0__.f});var _FormRow_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormRow/FormRow.component.js")},"./src/components/Select/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>_Select_component_js__WEBPACK_IMPORTED_MODULE_0__.l});var _Select_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Select/Select.component.js")},"./src/components/SelectOption/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>_SelectOption_component_js__WEBPACK_IMPORTED_MODULE_0__.O});var _SelectOption_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SelectOption/SelectOption.component.js")},"./src/deprecated_js/TextInput/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>_TextInput_component__WEBPACK_IMPORTED_MODULE_0__.k});var _TextInput_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/TextInput/TextInput.component.js")},"./src/components/Checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>_Checkbox_component__WEBPACK_IMPORTED_MODULE_0__.S});var _Checkbox_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Checkbox/Checkbox.component.tsx")},"./src/components/Modal/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CloseOnBackdropClick:()=>CloseOnBackdropClick,CustomModalFooter:()=>CustomModalFooter,Default:()=>Default,LargeWithTitle:()=>LargeWithTitle,Login:()=>Login,ModalWithALargerForm:()=>ModalWithALargerForm,NonCloseable:()=>NonCloseable,SimpleConfirmDialog:()=>SimpleConfirmDialog,TestComboBoxInModal:()=>TestComboBoxInModal,TestSelectInModal:()=>TestSelectInModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),focus_trap_react=__webpack_require__("../../node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react_default=__webpack_require__.n(focus_trap_react),ModalFooter=__webpack_require__("./src/components/ModalFooter/index.js"),Icon_component=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js"),PortalProvider_component=__webpack_require__("./src/components/PortalProvider/PortalProvider.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const sizeClass=size=>"large"===size?"jn-w-[40rem]":"jn-w-[33.625rem]",Modal=_ref=>{let{ariaLabel,cancelButtonIcon=null,cancelButtonLabel="",confirmButtonIcon=null,confirmButtonLabel="",children=null,closeable=!0,closeOnBackdropClick=!1,closeOnEsc=!0,heading="",initialFocus,modalFooter=null,onConfirm,onCancel,open=!1,size="small",title="",unpad=!1,className="",...props}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(open),[isCloseable,setIsCloseable]=(0,react.useState)(closeable),[isCloseabelOnBackdropClick,setIsCloseableOnBackdropClick]=(0,react.useState)(closeOnBackdropClick),[isCloseableOnEsc,setisCloseableOnEsc]=(0,react.useState)(closeOnEsc);(0,react.useEffect)((()=>{setIsOpen(open)}),[open]),(0,react.useEffect)((()=>{setIsCloseable(closeable)}),[closeable]),(0,react.useEffect)((()=>{setIsCloseableOnBackdropClick(closeOnBackdropClick)}),[closeOnBackdropClick]),(0,react.useEffect)((()=>{setisCloseableOnEsc(closeOnEsc)}),[closeOnEsc]);const handleCancelClick=event=>{setIsOpen(!1),onCancel&&onCancel(event)},portalContainer=(0,PortalProvider_component.TE)(),modalRef=(0,react.useRef)(null),theTitle=title||heading,modalTitleId="juno-modal-"+(0,react.useId)();return react.createElement(react.Fragment,null,isOpen&&(0,react_dom.createPortal)(react.createElement("div",{className:"juno-modal-container \n\tjn-fixed\n\tjn-inset-0\n\tjn-flex\n\tjn-items-center\n\tjn-bg-theme-modal-backdrop\n\tjn-backdrop-blur-[2px]\n\tjn-z-[9990]\n",onClick:event=>{isCloseabelOnBackdropClick?(setIsOpen(!1),onCancel&&onCancel(event)):event.stopPropagation()}},react.createElement(focus_trap_react_default(),{focusTrapOptions:{initialFocus,clickOutsideDeactivates:isCloseabelOnBackdropClick,fallbackFocus:()=>modalRef.current,allowOutsideClick:!0,escapeDeactivates:()=>{var event;isCloseable&&isCloseableOnEsc&&(setIsOpen(!1),onCancel&&onCancel(event))}}},react.createElement("div",_extends({className:`juno-modal ${sizeClass(size)} \n\tjn-bg-theme-background-lvl-0\n\tjn-relative\n\tjn-rounded\n\tjn-m-auto\n\tjn-overflow-y-auto\n\tjn-max-h-[90%]\n ${className}`,role:"dialog",ref:modalRef},props,{"aria-labelledby":theTitle&&theTitle.length?modalTitleId:null,"aria-label":ariaLabel}),react.createElement("div",{className:"juno-modal-header \n\tjn-flex\n\tjn-py-2\n\tjn-px-8\n\tjn-border-b\n\tjn-border-theme-background-lvl-4\n\tjn-h-[2.8125rem]\n "+(theTitle&&theTitle.length?"jn-justify-between":"jn-justify-end")},title||heading?react.createElement("h1",{className:"juno-modal-title \n\tjn-text-xl\n\tjn-font-bold\n",id:modalTitleId},title||heading):"",isCloseable?react.createElement(Icon_component.I,{icon:"close",onClick:handleCancelClick}):""),react.createElement("div",{className:"juno-modal-content \n\tjn-min-h-[5rem]\n "+(unpad?"":"\n\tjn-py-4\n\tjn-px-8\n")},children),isCloseable?modalFooter||react.createElement(ModalFooter.j,{confirmButtonLabel,cancelButtonLabel,confirmButtonIcon,cancelButtonIcon,onConfirm:onConfirm?event=>{onConfirm&&onConfirm(event)}:null,onCancel:handleCancelClick}):null))),portalContainer||document.body))};Modal.propTypes={ariaLabel:prop_types_default().string,title:prop_types_default().string,heading:prop_types_default().string,size:prop_types_default().oneOf(["small","large"]),confirmButtonLabel:prop_types_default().string,cancelButtonLabel:prop_types_default().string,confirmButtonIcon:prop_types_default().oneOf(Icon_component.g),cancelButtonIcon:prop_types_default().oneOf(Icon_component.g),open:prop_types_default().bool,children:prop_types_default().node,modalFooter:prop_types_default().element,closeable:prop_types_default().bool,unpad:prop_types_default().bool,className:prop_types_default().string,onConfirm:prop_types_default().func,onCancel:prop_types_default().func,closeOnBackdropClick:prop_types_default().bool,closeOnEsc:prop_types_default().bool,initialFocus:prop_types_default().oneOfType([prop_types_default().element,prop_types_default().string])},Modal.__docgenInfo={description:"A generic Modal component.\n\nThe Modal component can automatically create cancelling and confirming buttons with the desired labels and handlers. \n\nFor more complex use cases, more buttons, etc., an instance of `<ModalFooter>` with all custom content as children can be passed as prop `modalFooter` and will be rendered.\n\nThe Modal uses a boolean 'open' prop to determine whether it is open or not. Alternatively, the open state can be handled outside the component, e.g. in a global state. In this case the 'open' prop needs to be passed as true always, otherwise the Modal component will not render.\n\nBy default, the modal will close (i.e. set its `open` state to false) once the user cancels the Modal. When confirming, you will have to either set the `open` to false to close the modal, or use whatever global state mechanism you have to handle modals.\n\nTo make the modal less intrusive and effectively un-modal it, pass `closeOnBackdropClick`. This will close the modal when the user clicks the modal backdrop.",methods:[],displayName:"Modal",props:{cancelButtonIcon:{defaultValue:{value:"null",computed:!1},description:"Pass an icon name to show on the cancelling button",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},cancelButtonLabel:{defaultValue:{value:'""',computed:!1},description:'Pass a label for the cancel button. Defaults to "Cancel"',type:{name:"string"},required:!1},confirmButtonIcon:{defaultValue:{value:"null",computed:!1},description:"Pass an Icon name to show on the confirming action button",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},confirmButtonLabel:{defaultValue:{value:'""',computed:!1},description:"Pass a label to render a confirm button and a Cancel button",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children of the modal. These will be rendered as the modal content. To render custom buttons at the bottom, see `modalFooter` below.",type:{name:"node"},required:!1},closeable:{defaultValue:{value:"true",computed:!1},description:'Whether the modal can be closed using an "X"-Button at the top right. Defaults to true.',type:{name:"bool"},required:!1},closeOnBackdropClick:{defaultValue:{value:"false",computed:!1},description:"Whether the modal should be closed when the backdrop is clicked. Essentially 'un-modals' the modal.",type:{name:"bool"},required:!1},closeOnEsc:{defaultValue:{value:"true",computed:!1},description:"Whether the modal can be closed by hitting the ESC key",type:{name:"bool"},required:!1},heading:{defaultValue:{value:'""',computed:!1},description:"Also the title of the modal, just for API flexibility. If both `title` and `heading` are passed, `title` will win.",type:{name:"string"},required:!1},modalFooter:{defaultValue:{value:"null",computed:!1},description:"Optional. Pass a `<ModalFooter />` component with custom content as required. Will default to using the `<ModalFooter/>` component internally.",type:{name:"element"},required:!1},open:{defaultValue:{value:"false",computed:!1},description:"Whether the modal will be open",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"small"',computed:!1},description:"The Modal size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"large"',computed:!1}]},required:!1},title:{defaultValue:{value:'""',computed:!1},description:"The title of the modal. This will be rendering as the heading of the modal, and the modal's `arial-labelledby` attribute will reference the title/heading element. If the modal does not have `title` or `heading`, use `ariaLabel` to provide an accessible name for the modal.",type:{name:"string"},required:!1},unpad:{defaultValue:{value:"false",computed:!1},description:"Pass to remove default padding from the content area of the modal",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom className to add to the modal",type:{name:"string"},required:!1},ariaLabel:{description:"The aria-label of the modal. Use only if the modal does NOT have a `title` or `heading`.",type:{name:"string"},required:!1},onConfirm:{description:"A handler to execute once the modal is confirmed by clicking the confrim button if exists. Note that we do not close the modal automatically.",type:{name:"func"},required:!1},onCancel:{description:"A handler to execute once the modal is cancelled or dismissed using the x-Close button,  Cancel-button or pressing ESC",type:{name:"func"},required:!1},initialFocus:{description:"By default, the first element in the tab order of the Modal content will be focussed. To specify an element to be focussed when the modal opens, pass an element, DOM node, or selector string.",type:{name:"union",value:[{name:"element"},{name:"string"}]},required:!1}}};var Button=__webpack_require__("./src/components/Button/index.js"),ButtonRow=__webpack_require__("./src/components/ButtonRow/index.js"),Form=__webpack_require__("./src/components/Form/index.js"),FormRow=__webpack_require__("./src/components/FormRow/index.js"),TextInput=__webpack_require__("./src/deprecated_js/TextInput/index.js"),Checkbox=__webpack_require__("./src/components/Checkbox/index.ts"),Icon=__webpack_require__("./src/components/Icon/index.ts"),PortalProvider=__webpack_require__("./src/components/PortalProvider/index.js"),Select=__webpack_require__("./src/components/Select/index.js"),SelectOption=__webpack_require__("./src/components/SelectOption/index.js"),ComboBox=__webpack_require__("./src/components/ComboBox/index.js"),ComboBoxOption=__webpack_require__("./src/components/ComboBoxOption/index.js");function Modal_stories_extends(){return Modal_stories_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Modal_stories_extends.apply(null,arguments)}const Template=_ref=>{let{closeOnConfirm,...args}=_ref;const[isOpen,setOpen]=(0,react.useState)(!1),close=()=>{setOpen(!1)};return react.createElement(react.Fragment,null,react.createElement(Button.$,{label:"Open Modal",variant:"primary",onClick:()=>{setOpen(!0)}}),react.createElement(PortalProvider.GD.Portal,null,react.createElement(Modal,Modal_stories_extends({open:isOpen,onCancel:close,onConfirm:closeOnConfirm?close:null},args))))};Template.propTypes={closeOnConfirm:prop_types_default().func};const Modal_stories={title:"Components/Modal/Modal",component:Modal,argTypes:{children:{control:!1},modalFooter:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[story=>react.createElement(PortalProvider.GD,null,story())]},Default=Template.bind({});Default.args={children:react.createElement("p",null,"A default modal.")};const SimpleConfirmDialog=Template.bind({});SimpleConfirmDialog.args={children:react.createElement("p",null,"Are you sure you want to proceed?"),cancelButtonLabel:"Cancel",confirmButtonLabel:"Yes, Proceed"};const LargeWithTitle=Template.bind({});LargeWithTitle.args={size:"large",title:"Large Modal",confirmButtonLabel:"OK",closeOnConfirm:!0,children:react.createElement("p",null,"A large modal with a title")};const NonCloseable=Template.bind({});NonCloseable.args={title:"Non-Closeable Modal",children:"Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",closeable:!1};const CloseOnBackdropClick=Template.bind({});CloseOnBackdropClick.args={title:"Close on Backdrop Click",children:react.createElement("p",null,"This Modal closes when clicking the backdrop."),closeOnBackdropClick:!0};const Login=Template.bind({});Login.args={title:"Log In",initialFocus:"#username",children:react.createElement(react.Fragment,null,react.createElement(FormRow.f,null,react.createElement(TextInput.k,{label:"Username",name:"username",id:"username",autoComplete:"on"})),react.createElement(FormRow.f,null,react.createElement(TextInput.k,{type:"password",label:"Password",name:"password",id:"password"})),react.createElement(FormRow.f,null,react.createElement(Checkbox.S,{label:"Remember Me",id:"remember-me"}))),modalFooter:react.createElement(ModalFooter.j,{confirmButtonLabel:"Log In",confirmButtonIcon:"accountCircle",cancelButtonLabel:"Never Mind"})};const CustomModalFooter=Template.bind({});CustomModalFooter.args={title:"Modal with Custom ModalFooter",size:"large",children:react.createElement("p",null,"This Modal renders a custom footer with three buttons and a custom hint."),modalFooter:react.createElement(ModalFooter.j,{className:"jn-justify-between jn-items-center"},react.createElement("span",null,react.createElement(Icon.I,{icon:"info",className:"jn-mr-1"}),"Have some custom content"),react.createElement(ButtonRow.z,null,react.createElement(Button.$,{variant:"primary-danger"},"Button 1"),react.createElement(Button.$,{variant:"primary"},"Button 2"),react.createElement(Button.$,null,"Button 3")))};const TestSelectInModal=Template.bind({});TestSelectInModal.args={title:"Modal with Select inside",size:"small",children:react.createElement(react.Fragment,null,react.createElement(Select.l,null,react.createElement(SelectOption.O,{value:"1",label:"Option 1",key:"o-1"}),react.createElement(SelectOption.O,{value:"2",label:"Option 2",key:"o-2"}),react.createElement(SelectOption.O,{value:"3",label:"Option 3",key:"o-3"})))};const TestComboBoxInModal=Template.bind({});TestComboBoxInModal.args={title:"Modal with CombBox inside",size:"small",children:react.createElement(react.Fragment,null,react.createElement(ComboBox.a,null,react.createElement(ComboBoxOption.x,{value:"Rhubarb",key:"1"},"Rhubarb"),react.createElement(ComboBoxOption.x,{value:"Carrots",key:"2"},"Carrots"),react.createElement(ComboBoxOption.x,{value:"Spinach",key:"3"},"Spinach"),react.createElement(ComboBoxOption.x,{value:"Tomatoes",key:"4"},"Tomatoes")))};const ModalWithALargerForm=Template.bind({});ModalWithALargerForm.args={title:"Register",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:react.createElement(Form.l,null,react.createElement(FormRow.f,null,react.createElement(TextInput.k,{label:"First Name",id:"firstname"})),react.createElement(FormRow.f,null,react.createElement(TextInput.k,{label:"Last Name",id:"lastname"})),react.createElement(FormRow.f,null,react.createElement(TextInput.k,{label:"Email",id:"email",type:"email"})),react.createElement(FormRow.f,null,react.createElement(TextInput.k,{label:"Password",id:"password",type:"password"})),react.createElement(FormRow.f,null,react.createElement(TextInput.k,{label:"Retype Password",id:"retype-password",type:"password"})),react.createElement(FormRow.f,null,react.createElement(Select.l,{label:"Role"},react.createElement(SelectOption.O,null,"Private Person"),react.createElement(SelectOption.O,null,"Small Business"))),react.createElement(FormRow.f,null,react.createElement(ComboBox.a,{label:"Country"},react.createElement(ComboBoxOption.x,{value:"germany",key:"DE"},"Germany"),react.createElement(ComboBoxOption.x,{value:"uk",key:"UK"},"United Kingdom"),react.createElement(ComboBoxOption.x,{value:"us",key:"US"},"USA"))))};const __namedExportsOrder=["Default","SimpleConfirmDialog","LargeWithTitle","NonCloseable","CloseOnBackdropClick","Login","CustomModalFooter","TestSelectInModal","TestComboBoxInModal","ModalWithALargerForm"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...Default.parameters?.docs?.source}}},SimpleConfirmDialog.parameters={...SimpleConfirmDialog.parameters,docs:{...SimpleConfirmDialog.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...SimpleConfirmDialog.parameters?.docs?.source}}},LargeWithTitle.parameters={...LargeWithTitle.parameters,docs:{...LargeWithTitle.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...LargeWithTitle.parameters?.docs?.source}}},NonCloseable.parameters={...NonCloseable.parameters,docs:{...NonCloseable.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...NonCloseable.parameters?.docs?.source}}},CloseOnBackdropClick.parameters={...CloseOnBackdropClick.parameters,docs:{...CloseOnBackdropClick.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...CloseOnBackdropClick.parameters?.docs?.source}}},Login.parameters={...Login.parameters,docs:{...Login.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...Login.parameters?.docs?.source}}},CustomModalFooter.parameters={...CustomModalFooter.parameters,docs:{...CustomModalFooter.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...CustomModalFooter.parameters?.docs?.source}}},TestSelectInModal.parameters={...TestSelectInModal.parameters,docs:{...TestSelectInModal.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...TestSelectInModal.parameters?.docs?.source}}},TestComboBoxInModal.parameters={...TestComboBoxInModal.parameters,docs:{...TestComboBoxInModal.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...TestComboBoxInModal.parameters?.docs?.source}}},ModalWithALargerForm.parameters={...ModalWithALargerForm.parameters,docs:{...ModalWithALargerForm.parameters?.docs,source:{originalSource:'({\n  closeOnConfirm,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const open = () => {\n    setOpen(true);\n  };\n  const close = () => {\n    setOpen(false);\n  };\n  return <>\n      <Button label="Open Modal" variant="primary" onClick={open} />\n      <PortalProvider.Portal>\n        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />\n      </PortalProvider.Portal>\n    </>;\n}',...ModalWithALargerForm.parameters?.docs?.source}}}}}]);