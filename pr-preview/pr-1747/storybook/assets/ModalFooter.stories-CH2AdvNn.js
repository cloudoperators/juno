import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-CmJWSAiZ.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{t as r}from"./Icon.component-CZMlXd2l.js";import{t as i}from"./Icon-Cfk7q5R3.js";import{t as a}from"./Stack.component-DukGtGVk.js";import{t as o}from"./Stack-DfuJjWKy.js";import{t as s}from"./Button.component-gO7fkNRT.js";import{t as c}from"./Button-BoOqrtgP.js";import{t as l}from"./ButtonRow.component-CJnvN8Vv.js";import{t as u}from"./ButtonRow-BVTmcx3Y.js";import{n as d,t as f}from"./ModalFooter-BvPAMULA.js";var p,m,h,g,_,v,y,b;e((()=>{t(),f(),c(),u(),o(),i(),p=n(),m=e=>(0,p.jsx)(d,{...e}),h={title:`Components/Modal/ModalFooter`,component:d,argTypes:{children:{control:!1},confirmButtonVariant:{options:[`primary`,`primary-danger`,`default`,`subdued`],control:{type:`select`}}},parameters:{actions:{argTypesRegex:null}}},g={render:m,args:{disableConfirmButton:!1,disableCancelButton:!1}},_={render:m,args:{confirmButtonLabel:`Confirm Action`,cancelButtonLabel:`Cancel Action`}},v={render:m,args:{confirmButtonLabel:`Confirm Action`,cancelButtonLabel:`Cancel Action`,disableConfirmButton:!0,disableCancelButton:!0}},y={render:m,args:{className:`jn:justify-between jn:items-center`,children:[(0,p.jsxs)(a,{gap:`2`,children:[(0,p.jsx)(r,{}),(0,p.jsx)(`span`,{children:`Some status here`})]},`s1`),(0,p.jsxs)(l,{children:[(0,p.jsx)(s,{variant:`primary-danger`,label:`Destruction`},`b-1`),(0,p.jsx)(s,{variant:`primary`,label:`World Peace`},`b-2`),(0,p.jsx)(s,{variant:`subdued`,label:`Surprise Me!`},`b-3`)]},`br-1`)]},parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    disableConfirmButton: false,
    disableCancelButton: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Configure`,`ConfigureWithDisabledButtons`,`Custom`]}))();export{_ as Configure,v as ConfigureWithDisabledButtons,y as Custom,g as Default,b as __namedExportsOrder,h as default};