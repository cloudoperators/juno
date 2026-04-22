import{j as e,r as D}from"./iframe-CIHUuHM3.js";import{M as y}from"./Modal.component-BNgO9-O0.js";import{M as S}from"./ModalFooter.component--IGl47JV.js";import{B as F}from"./Button.component-Ci7-eQQ3.js";import{B as I}from"./ButtonRow.component-DJDOL2cA.js";import{F as N}from"./Form.component-CPWFBYlk.js";import{F as n}from"./FormRow.component-BZBf8p11.js";import{T as r}from"./TextInput.component-CtvwdRGL.js";import{C as W}from"./Checkbox.component-BJaajlEo.js";import{I as P}from"./Icon.component-B4A67JeU.js";import{P as z}from"./PortalProvider.component-BJWqH0ZV.js";import{S as T,a as s}from"./SelectOption.component-Dt2LaWGo.js";import{C as R,a}from"./ComboBoxOption.component-SEkhceU7.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner.component-g8gEjrCz.js";import"./Stack.component-BKjyzKsx.js";import"./Label.component-CH16sfcN.js";import"./FormHint.component-BddGG3f7.js";import"./element-movement-D6Ua1C_y.js";import"./floating-ui.react-C3bLNHYa.js";import"./frozen-WQrVNX9X.js";import"./use-text-value-CrCKcS_4.js";import"./use-tree-walker-DXtjAyRg.js";const o=({closeOnConfirm:t,...O})=>{const[v,M]=D.useState(!1),k=()=>{M(!0)},w=()=>{M(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(F,{label:"Open Modal",variant:"primary",onClick:k}),e.jsx(y,{open:v,onCancel:w,onConfirm:t?w:void 0,...O})]})},ie={title:"Components/Modal/Modal",component:y,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},modalFooter:{control:!1,table:{type:{summary:"ReactElement"}}}},parameters:{actions:{argTypesRegex:null},docs:{source:{transform:t=>t.replace(/jn:/g,"")}}},decorators:[t=>e.jsx(z,{children:e.jsx("div",{className:"jn:m-20 jn:flex jn:justify-center",children:e.jsx(t,{})})})]},l={render:o,args:{children:e.jsx("p",{children:"A default modal."}),disableConfirmButton:!1,disableCancelButton:!1}},i={render:o,args:{children:e.jsx("p",{children:"Are you sure you want to proceed?"}),cancelButtonLabel:"Cancel",confirmButtonLabel:"Yes, Proceed"}},c={render:o,args:{children:e.jsx("p",{children:"This modal has a disabled Confirm and Cancel button. Note that disableCancelButton also disables the top-right Close button."}),cancelButtonLabel:"Cancel",confirmButtonLabel:"Yes, Proceed",disableConfirmButton:!0,disableCancelButton:!0}},m={render:o,args:{children:e.jsx(r,{id:"focusOnMe"}),initialFocus:"#focusOnMe"}},L=()=>e.jsxs(N,{children:[e.jsx(n,{children:e.jsx(r,{label:"First Name",id:"firstname"})}),e.jsx(n,{children:e.jsx(r,{label:"Last Name",id:"lastname"})}),e.jsx(n,{children:e.jsx(r,{label:"Email",id:"email",type:"email"})}),e.jsx(n,{children:e.jsx(r,{label:"Password",id:"password",type:"password"})}),e.jsx(n,{children:e.jsx(r,{label:"Retype Password",id:"retype-password",type:"password"})}),e.jsx(n,{children:e.jsxs(T,{label:"Role",children:[e.jsx(s,{children:"Private Person"}),e.jsx(s,{children:"Small Business"})]})}),e.jsx(n,{children:e.jsxs(R,{label:"Country",children:[e.jsx(a,{value:"germany",children:"Germany"},"DE"),e.jsx(a,{value:"uk",children:"United Kingdom"},"UK"),e.jsx(a,{value:"us",children:"USA"},"US")]})})]}),d={render:o,args:{title:"Default Modal Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:e.jsx(L,{})}},u={render:o,args:{size:"large",title:"Large Modal Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:e.jsx(L,{})}},p={render:o,args:{size:"xl",title:"XL With Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:e.jsx(L,{})}},h={render:o,args:{size:"2xl",title:"2XL With Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:e.jsx(L,{})}},b={render:o,args:{title:"Non-Closeable Modal",children:"Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",closeable:!1}},g={render:o,args:{title:"Close on Backdrop Click",children:e.jsx("p",{children:"This Modal closes when clicking the backdrop."}),closeOnBackdropClick:!0}},x={render:o,args:{title:"Disabled Close Button Modal",children:e.jsx("p",{children:"This Modal has a disabled top-right close button."}),disableCloseButton:!0,cancelButtonLabel:"Cancel"}},f={render:o,args:{title:"Log In",initialFocus:"#username",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(r,{label:"Username",name:"username",id:"username",autoComplete:"on"})}),e.jsx(n,{children:e.jsx(r,{type:"password",label:"Password",name:"password",id:"password"})}),e.jsx(n,{children:e.jsx(W,{label:"Remember Me",id:"remember-me"})})]}),modalFooter:e.jsx(S,{confirmButtonLabel:"Log In",confirmButtonIcon:"accountCircle",cancelButtonLabel:"Never Mind"})}},B={render:o,args:{title:"Modal with Custom ModalFooter",size:"large",children:e.jsx("p",{children:"This Modal renders a custom footer with three buttons and a custom hint."}),modalFooter:e.jsxs(S,{className:"jn:justify-between jn:items-center",children:[e.jsxs("span",{children:[e.jsx(P,{icon:"info",className:"jn:mr-1"}),"Have some custom content"]}),e.jsxs(I,{children:[e.jsx(F,{variant:"primary-danger",children:"Button 1"}),e.jsx(F,{variant:"primary",children:"Button 2"}),e.jsx(F,{children:"Button 3"})]})]})}},C={render:o,args:{title:"Modal with Select inside",size:"small",children:e.jsx(e.Fragment,{children:e.jsxs(T,{children:[e.jsx(s,{value:"1",label:"Option 1"},"o-1"),e.jsx(s,{value:"2",label:"Option 2"},"o-2"),e.jsx(s,{value:"3",label:"Option 3"},"o-3")]})})}},j={render:o,args:{title:e.jsx("p",{children:"Hello"}),size:"small",children:e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx(a,{value:"Rhubarb",children:"Rhubarb"},"1"),e.jsx(a,{value:"Carrots",children:"Carrots"},"2"),e.jsx(a,{value:"Spinach",children:"Spinach"},"3"),e.jsx(a,{value:"Tomatoes",children:"Tomatoes"},"4")]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <p>A default modal.</p>,
    disableConfirmButton: false,
    disableCancelButton: false
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <p>Are you sure you want to proceed?</p>,
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Yes, Proceed"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <p>
        This modal has a disabled Confirm and Cancel button. Note that disableCancelButton also disables the top-right
        Close button.
      </p>,
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Yes, Proceed",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <TextInput id="focusOnMe" />,
    initialFocus: "#focusOnMe"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Default Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "large",
    title: "Large Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "xl",
    title: "XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "2xl",
    title: "2XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Non-Closeable Modal",
    children: "Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",
    closeable: false
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Close on Backdrop Click",
    children: <p>This Modal closes when clicking the backdrop.</p>,
    closeOnBackdropClick: true
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Disabled Close Button Modal",
    children: <p>This Modal has a disabled top-right close button.</p>,
    disableCloseButton: true,
    cancelButtonLabel: "Cancel"
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Log In",
    initialFocus: "#username",
    children: <>
        <FormRow>
          <TextInput label="Username" name="username" id="username" autoComplete="on" />
        </FormRow>
        <FormRow>
          <TextInput type="password" label="Password" name="password" id="password" />
        </FormRow>
        <FormRow>
          <Checkbox label="Remember Me" id="remember-me" />
        </FormRow>
      </>,
    modalFooter: <ModalFooter confirmButtonLabel="Log In" confirmButtonIcon="accountCircle" cancelButtonLabel="Never Mind" />
  }
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Modal with Custom ModalFooter",
    size: "large",
    children: <p>This Modal renders a custom footer with three buttons and a custom hint.</p>,
    modalFooter: <ModalFooter className="jn:justify-between jn:items-center">
        <span>
          <Icon icon="info" className="jn:mr-1" />
          Have some custom content
        </span>
        <ButtonRow>
          <Button variant="primary-danger">Button 1</Button>
          <Button variant="primary">Button 2</Button>
          <Button>Button 3</Button>
        </ButtonRow>
      </ModalFooter>
  }
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Modal with Select inside",
    size: "small",
    children: <>
        <Select>
          <SelectOption value="1" label="Option 1" key="o-1" />
          <SelectOption value="2" label="Option 2" key="o-2" />
          <SelectOption value="3" label="Option 3" key="o-3" />
        </Select>
      </>
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: <p>Hello</p>,
    size: "small",
    children: <>
        <ComboBox>
          <ComboBoxOption value="Rhubarb" key="1">
            Rhubarb
          </ComboBoxOption>
          <ComboBoxOption value="Carrots" key="2">
            Carrots
          </ComboBoxOption>
          <ComboBoxOption value="Spinach" key="3">
            Spinach
          </ComboBoxOption>
          <ComboBoxOption value="Tomatoes" key="4">
            Tomatoes
          </ComboBoxOption>
        </ComboBox>
      </>
  }
}`,...j.parameters?.docs?.source}}};const ce=["Default","SimpleConfirmDialog","SimpleConfirmDialogWithDisabledButtons","AutoFocusDialog","DefaultWithForm","LargeWithForm","XLWithForm","XXLWithForm","NonCloseable","CloseOnBackdropClick","DisabledCloseButton","Login","CustomModalFooter","TestSelectInModal","TestComboBoxInModal"];export{m as AutoFocusDialog,g as CloseOnBackdropClick,B as CustomModalFooter,l as Default,d as DefaultWithForm,x as DisabledCloseButton,u as LargeWithForm,f as Login,b as NonCloseable,i as SimpleConfirmDialog,c as SimpleConfirmDialogWithDisabledButtons,j as TestComboBoxInModal,C as TestSelectInModal,p as XLWithForm,h as XXLWithForm,ce as __namedExportsOrder,ie as default};
