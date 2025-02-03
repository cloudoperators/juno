import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{e as F,r as z}from"./index-DysCNOs_.js";import{S as H}from"./Stack.component-Cte3SL04.js";import{B as t}from"./Button.component-CVx4uc_R.js";import{T as y}from"./TextInput.component-vaTMb745.js";import"./Icon.component-Ds7YA1BM.js";import"./widgets-BR6-ubtP.js";import"./Spinner.component-DGrCFjaQ.js";import"./Label.component-D1jWKEjF.js";import"./FormHint.component-Bac6eIcI.js";const J=(r,n,a)=>{if(!z.isValidElement(r))return r;const o={variant:r.props.variant||n,disabled:r.props.disabled||a};return F.cloneElement(r,o)},K=(r,n,a)=>`
    ${r}-${n}
    ${a?`${r}-disabled`:""}
  `,B=({children:r,className:n="",variant:a="default",disabled:o=!1,...L})=>{const M=F.Children.map(r,O=>J(O,a,o)),A=K("juno-input-group",a,o);return e.jsx(H,{className:`juno-input-group ${A} ${n}`,...L,children:M})};try{B.displayName="InputGroup",B.__docgenInfo={description:`InputGroup is a component used to visually group related elements such as
Buttons, TextInput, and Select elements, providing a cohesive styling approach.`,displayName:"InputGroup",props:{children:{defaultValue:null,description:`The children to render within the InputGroup.
This can be any React node or a collection of React nodes such as Buttons, TextInput, and Select elements.`,name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS class name(s) to apply to the InputGroup for custom styling.",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"The variant style to apply to the group and its children.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},disabled:{defaultValue:{value:"false"},description:`If true, all elements within the InputGroup will be disabled.
Individual elements can override this setting if needed.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"WiP/InputGroup",component:B,argTypes:{children:{control:!1}}},s={args:{children:[e.jsx(t,{label:"Button 1"},0),e.jsx(t,{children:"Button 2"},1),e.jsx(t,{label:"Button 3"},2)]}},u={args:{variant:"primary",children:[e.jsx(t,{label:"Primary Button"},0),e.jsx(t,{label:"Primary Button"},1),e.jsx(t,{label:"Primary Button"},2)]}},l={args:{variant:"primary-danger",children:[e.jsx(t,{label:"Primary Danger Button"},0),e.jsx(t,{label:"Primary Danger Button",variant:"primary"},1),e.jsx(t,{label:"Primary Danger Button"},2)]}},i={args:{variant:"subdued",children:[e.jsx(t,{label:"Subdued Button"},0),e.jsx(t,{label:"Subdued Button"},1),e.jsx(t,{label:"Subdued Button"},2)]}},p={args:{disabled:!0,children:[e.jsx(t,{label:"Button"},0),e.jsx(t,{label:"Button"},1),e.jsx(t,{label:"Button"},2)]}},d={args:{children:[e.jsx(t,{icon:"home"},0),e.jsx(t,{icon:"help"},1),e.jsx(t,{icon:"forum"},2)]}},c={args:{children:[e.jsx(y,{placeholder:"Enter a value…"},0),e.jsx(t,{label:"Submit"},1)]}},m={args:{children:[e.jsx(y,{placeholder:"First Name"},0),e.jsx(y,{placeholder:"Last Name"},1),e.jsx(t,{label:"Submit"},2)]}};var b,h,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: [<Button key={0} label="Button 1" />, <Button key={1}>Button 2</Button>, <Button key={2} label="Button 3" />]
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,f,I;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: [<Button key={0} label="Primary Button" />, <Button key={1} label="Primary Button" />, <Button key={2} label="Primary Button" />]
  }
}`,...(I=(f=u.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var j,v,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "primary-danger",
    children: [<Button key={0} label="Primary Danger Button" />, <Button key={1} label="Primary Danger Button" variant="primary" />, <Button key={2} label="Primary Danger Button" />]
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var k,P,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "subdued",
    children: [<Button key={0} label="Subdued Button" />, <Button key={1} label="Subdued Button" />, <Button key={2} label="Subdued Button" />]
  }
}`,...(G=(P=i.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var T,D,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: [<Button key={0} label="Button" />, <Button key={1} label="Button" />, <Button key={2} label="Button" />]
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,E,W;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [<Button key={0} icon="home" />, <Button key={1} icon="help" />, <Button key={2} icon="forum" />]
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var $,V,q;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: [<TextInput key={0} placeholder="Enter a value…" />, <Button key={1} label="Submit" />]
  }
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var C,R,w;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: [<TextInput key={0} placeholder="First Name" />, <TextInput key={1} placeholder="Last Name" />, <Button key={2} label="Submit" />]
  }
}`,...(w=(R=m.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const se=["Default","PrimaryInputGroup","PrimaryDangerInputGroup","SubduedInputGroup","Disabled","IconButtons","TextInputWithButton","MultipleTextInputsWithButton"];export{s as Default,p as Disabled,d as IconButtons,m as MultipleTextInputsWithButton,l as PrimaryDangerInputGroup,u as PrimaryInputGroup,i as SubduedInputGroup,c as TextInputWithButton,se as __namedExportsOrder,oe as default};
