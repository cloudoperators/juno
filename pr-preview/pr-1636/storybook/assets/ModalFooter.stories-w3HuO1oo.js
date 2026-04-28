import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";import{t as r}from"./Stack.component-O2Jjm6dw.js";import"./Stack-LLgz_L3W.js";import{t as i}from"./Button.component-J1fJR8AZ.js";import"./Button-DFKvvwdO.js";import{t as a}from"./ButtonRow.component-D4LFaHbK.js";import"./ButtonRow-DZhlvLNZ.js";import{t as o}from"./ModalFooter-DJQTG3dQ.js";e();var s=t(),c=e=>(0,s.jsx)(o,{...e}),l={title:`Components/Modal/ModalFooter`,component:o,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}}},u={render:c,args:{disableConfirmButton:!1,disableCancelButton:!1}},d={render:c,args:{confirmButtonLabel:`Confirm Action`,cancelButtonLabel:`Cancel Action`}},f={render:c,args:{confirmButtonLabel:`Confirm Action`,cancelButtonLabel:`Cancel Action`,disableConfirmButton:!0,disableCancelButton:!0}},p={render:c,args:{className:`jn:justify-between jn:items-center`,children:[(0,s.jsxs)(r,{gap:`2`,children:[(0,s.jsx)(n,{}),(0,s.jsx)(`span`,{children:`Some status here`})]},`s1`),(0,s.jsxs)(a,{children:[(0,s.jsx)(i,{variant:`primary-danger`,label:`Destruction`},`b-1`),(0,s.jsx)(i,{variant:`primary`,label:`World Peace`},`b-2`),(0,s.jsx)(i,{variant:`subdued`,label:`Surprise Me!`},`b-3`)]},`br-1`)]},parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    disableConfirmButton: false,
    disableCancelButton: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`Configure`,`ConfigureWithDisabledButtons`,`Custom`];export{d as Configure,f as ConfigureWithDisabledButtons,p as Custom,u as Default,m as __namedExportsOrder,l as default};