import{j as T}from"./iframe-BJ4-9zl6.js";import{T as xe}from"./TextInput.component-fMJn_8E0.js";import"./Label.component-DL_gsrD-.js";import"./Icon.component-BlpBxAQ3.js";import"./FormHint.component-D_PwmtYx.js";const{fn:he}=__STORYBOOK_MODULE_TEST__,We={title:"Forms/TextInput",component:xe,args:{onFocus:he()},argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},value:{control:{type:"text"}}}},e={args:{}},r={args:{label:"Text Input"}},s={args:{label:"Required Text Input",required:!0}},a={args:{invalid:!0}},t={args:{valid:!0}},o={args:{autoFocus:!0}},c={args:{disabled:!0}},n={args:{readOnly:!0}},p={args:{type:"email"}},i={args:{type:"tel"}},u={args:{type:"url"}},d={args:{type:"number"}},m={args:{type:"password"}},l={args:{helptext:"This is an explanatory text referring to the input"}},g={args:{helptext:T.jsxs(T.Fragment,{children:["This is a helptext with a ",T.jsx("a",{href:"#",children:"Link"})]})}},x={args:{successtext:"This field is a great success!"}},h={args:{errortext:"This field has an error"}};var S,f,y;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,W,O;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Text Input"
  }
}`,...(O=(W=r.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var E,I,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Required Text Input",
    required: true
  }
}`,...(R=(I=s.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,v,L;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var q,w,D;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    valid: true
  }
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var F,j,A;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...(A=(j=o.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var H,N,U;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(U=(N=c.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var k,P,V;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(V=(P=n.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,K,M;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "email"
  }
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Y,z,C;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: "tel"
  }
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var G,J,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "url"
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: "number"
  }
}`,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: "password"
  }
}`,...(se=(re=m.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,te,oe;l.parameters={...l.parameters,docs:{...(ae=l.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    helptext: "This is an explanatory text referring to the input"
  }
}`,...(oe=(te=l.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ce,ne,pe;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    helptext: <>
        This is a helptext with a <a href="#">Link</a>
      </>
  }
}`,...(pe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:pe.source}}};var ie,ue,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    successtext: "This field is a great success!"
  }
}`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,le,ge;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    errortext: "This field has an error"
  }
}`,...(ge=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ge.source}}};const Oe=["Default","WithLabel","RequiredWithLabel","Invalid","Valid","Autofocus","Disabled","ReadOnly","Email","Tel","Url","Number","Password","WithHelpText","WithHelpTextAsNode","WithSuccessText","WithErrorText"];export{o as Autofocus,e as Default,c as Disabled,p as Email,a as Invalid,d as Number,m as Password,n as ReadOnly,s as RequiredWithLabel,i as Tel,u as Url,t as Valid,h as WithErrorText,l as WithHelpText,g as WithHelpTextAsNode,r as WithLabel,x as WithSuccessText,Oe as __namedExportsOrder,We as default};
