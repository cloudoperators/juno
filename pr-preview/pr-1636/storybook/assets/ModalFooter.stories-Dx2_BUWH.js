import{g as e}from"./iframe-DmqlBy6I.js";import{t}from"./Icon.component-Bc6oc1sZ.js";import"./Icon-D5Vcq2jT.js";import{t as n}from"./Stack.component-DJYnMa19.js";import"./Stack-D_xsVAA8.js";import{t as r}from"./Button.component-Di6O5YIz.js";import"./Button-BFnk68m8.js";import{t as i}from"./ButtonRow.component-CxfYMEkZ.js";import"./ButtonRow-0leQ_tf2.js";import{t as a}from"./ModalFooter-RNDejXdV.js";import"react";var o=e(),s=e=>(0,o.jsx)(a,{...e}),c={title:`Components/Modal/ModalFooter`,component:a,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}}},l={render:s,args:{disableConfirmButton:!1,disableCancelButton:!1}},u={render:s,args:{confirmButtonLabel:`Confirm Action`,cancelButtonLabel:`Cancel Action`}},d={render:s,args:{confirmButtonLabel:`Confirm Action`,cancelButtonLabel:`Cancel Action`,disableConfirmButton:!0,disableCancelButton:!0}},f={render:s,args:{className:`jn:justify-between jn:items-center`,children:[(0,o.jsxs)(n,{gap:`2`,children:[(0,o.jsx)(t,{}),(0,o.jsx)(`span`,{children:`Some status here`})]},`s1`),(0,o.jsxs)(i,{children:[(0,o.jsx)(r,{variant:`primary-danger`,label:`Destruction`},`b-1`),(0,o.jsx)(r,{variant:`primary`,label:`World Peace`},`b-2`),(0,o.jsx)(r,{variant:`subdued`,label:`Surprise Me!`},`b-3`)]},`br-1`)]},parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    disableConfirmButton: false,
    disableCancelButton: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    className: "jn:justify-between jn:items-center",
    children: [<Stack gap="2" key="s1">
        <Icon />
        <span>Some status here</span>
      </Stack>, <ButtonRow key="br-1">
        <Button variant="primary-danger" label="Destruction" key="b-1" />
        <Button variant="primary" label="World Peace" key="b-2" />
        <Button variant="subdued" label="Surprise Me!" key="b-3" />
      </ButtonRow>]
  },
  parameters: {
    docs: {
      source: {
        transform: (source: string): string => {
          // Remove :jn prefix for docs, internal use only
          return source.replace(/jn:/g, "");
        }
      }
    }
  }
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Configure`,`ConfigureWithDisabledButtons`,`Custom`];export{u as Configure,d as ConfigureWithDisabledButtons,f as Custom,l as Default,p as __namedExportsOrder,c as default};