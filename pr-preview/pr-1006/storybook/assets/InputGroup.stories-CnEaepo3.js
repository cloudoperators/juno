import{e as z,j as e,r as X}from"./iframe-CJ7bM4vj.js";import{S as Y}from"./Stack.component-D9AMyiD7.js";import{B as t}from"./Button.component-DFE5bA6t.js";import{T as h}from"./TextInput.component-DUiqumuV.js";import{S as Z,a as y}from"./SelectOption.component-DIcS5uNk.js";import{P as ee}from"./PortalProvider.component-CNzgpjNg.js";import"./Icon.component-CjkNNIF1.js";import"./Spinner.component-DOt7oEJ6.js";import"./Label.component-C0uocwar.js";import"./FormHint.component-DL3ej95u.js";import"./portal-DPZRSB7l.js";import"./floating-ui.react-BTdERjHq.js";import"./frozen-Cm4dodVz.js";import"./use-text-value-CKgPxrd_.js";const te=(r,n,a)=>{if(!X.isValidElement(r))return r;const o={variant:r.props.variant||n,disabled:r.props.disabled||a};return z.cloneElement(r,o)},re=(r,n,a)=>`
    ${r}-${n}
    ${a?`${r}-disabled`:""}
  `,g=({children:r,className:n="",variant:a="default",disabled:o=!1,...J})=>{const K=z.Children.map(r,U=>te(U,a,o)),Q=re("juno-input-group",a,o);return e.jsx(Y,{className:`juno-input-group ${Q} ${n}`,...J,children:K})};try{g.displayName="InputGroup",g.__docgenInfo={description:`InputGroup is a component used to visually group related elements such as
Buttons, TextInput, and Select elements, providing a cohesive styling approach.`,displayName:"InputGroup",props:{children:{defaultValue:null,description:`The children to render within the InputGroup.
This can be any React node or a collection of React nodes such as Buttons, TextInput, and Select elements.`,name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS class name(s) to apply to the InputGroup for custom styling.",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"The variant style to apply to the group and its children.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},disabled:{defaultValue:{value:"false"},description:`If true, all elements within the InputGroup will be disabled.
Individual elements can override this setting if needed.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const B=r=>e.jsxs(Z,{...r,children:[e.jsx(y,{value:"value1",label:"Label 1"}),e.jsx(y,{value:"value2",label:"Label 2"}),e.jsx(y,{value:"value3",label:"Label 3"})]}),he={title:"WiP/InputGroup",component:g,argTypes:{children:{control:!1}},decorators:[r=>e.jsx("div",{className:"jn-pb-12",style:{minHeight:"250px"},children:e.jsx(ee,{children:e.jsx(r,{})})})]},s={args:{children:[e.jsx(t,{label:"Button 1"},0),e.jsx(t,{children:"Button 2"},1),e.jsx(t,{label:"Button 3"},2)]}},l={args:{variant:"primary",children:[e.jsx(t,{label:"Primary Button"},0),e.jsx(t,{label:"Primary Button"},1),e.jsx(t,{label:"Primary Button"},2)]}},u={args:{variant:"primary-danger",children:[e.jsx(t,{label:"Primary Danger Button"},0),e.jsx(t,{label:"Primary Danger Button",variant:"primary"},1),e.jsx(t,{label:"Primary Danger Button"},2)]}},i={args:{variant:"subdued",children:[e.jsx(t,{label:"Subdued Button"},0),e.jsx(t,{label:"Subdued Button"},1),e.jsx(t,{label:"Subdued Button"},2)]}},c={args:{disabled:!0,children:[e.jsx(t,{label:"Button"},0),e.jsx(t,{label:"Button"},1),e.jsx(t,{label:"Button"},2)]}},p={args:{children:[e.jsx(t,{icon:"home"},0),e.jsx(t,{icon:"help"},1),e.jsx(t,{icon:"forum"},2)]}},d={args:{children:[e.jsx(h,{placeholder:"Enter a value…"},0),e.jsx(t,{label:"Submit"},1)]}},m={args:{children:[e.jsx(h,{placeholder:"First Name"},0),e.jsx(h,{placeholder:"Last Name"},1),e.jsx(t,{label:"Submit"},2)]}},b={args:{variant:"subdued",children:[e.jsx(B,{label:"Some label"},0),e.jsx(B,{},1),e.jsx(B,{},2),e.jsx(t,{icon:"filterAlt"},3)]}};var x,j,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: [<Button key={0} label="Button 1" />, <Button key={1}>Button 2</Button>, <Button key={2} label="Button 3" />]
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,I,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: [<Button key={0} label="Primary Button" />, <Button key={1} label="Primary Button" />, <Button key={2} label="Primary Button" />]
  }
}`,...(f=(I=l.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var k,P,G;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "primary-danger",
    children: [<Button key={0} label="Primary Danger Button" />, <Button key={1} label="Primary Danger Button" variant="primary" />, <Button key={2} label="Primary Danger Button" />]
  }
}`,...(G=(P=u.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var T,D,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "subdued",
    children: [<Button key={0} label="Subdued Button" />, <Button key={1} label="Subdued Button" />, <Button key={2} label="Subdued Button" />]
  }
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,E,W;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: [<Button key={0} label="Button" />, <Button key={1} label="Button" />, <Button key={2} label="Button" />]
  }
}`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var $,L,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: [<Button key={0} icon="home" />, <Button key={1} icon="help" />, <Button key={2} icon="forum" />]
  }
}`,...(V=(L=p.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var q,C,R;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: [<TextInput key={0} placeholder="Enter a value…" />, <Button key={1} label="Submit" />]
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var w,A,F;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<TextInput key={0} placeholder="First Name" />, <TextInput key={1} placeholder="Last Name" />, <Button key={2} label="Submit" />]
  }
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var M,O,H;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "subdued",
    children: [<SelectInput key={0} label="Some label" />, <SelectInput key={1} />, <SelectInput key={2} />, <Button key={3} icon="filterAlt" />]
  }
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const ge=["Default","PrimaryInputGroup","PrimaryDangerInputGroup","SubduedInputGroup","Disabled","IconButtons","TextInputWithButton","MultipleTextInputsWithButton","SelectInputsWithButton"];export{s as Default,c as Disabled,p as IconButtons,m as MultipleTextInputsWithButton,u as PrimaryDangerInputGroup,l as PrimaryInputGroup,b as SelectInputsWithButton,i as SubduedInputGroup,d as TextInputWithButton,ge as __namedExportsOrder,he as default};
