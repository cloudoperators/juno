import{j as e}from"./iframe-DJs9yO2V.js";import{T as C,a as v,b as I}from"./TooltipTrigger.component-DsQKvUE-.js";import{I as re}from"./Icon.component-95mA2ogL.js";import"./floating-ui.react-Cg3zjLn5.js";const ie={title:"Components/Tooltip/Tooltip",component:C,argTypes:{text:{table:{disable:!0}},triggerText:{table:{disable:!0}},children:{control:!1}},decorators:[r=>e.jsx("div",{className:"jn:my-6 jn:flex jn:justify-center",children:e.jsx(r,{})})]},$=({placement:r,variant:o,initialOpen:n,open:s,triggerEvent:a,disabled:i,text:l,triggerText:p,...ee})=>e.jsxs(C,{initialOpen:n,placement:r,variant:o,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{children:e.jsx("span",{children:p},"tooltip-trigger-text")}),e.jsx(I,{...ee,children:l})]}),t=({initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,text:l,...p})=>e.jsxs(C,{initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{asChild:!0,children:e.jsx(re,{})}),e.jsx(I,{...p,children:l})]}),te=({initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,text:l,...p})=>e.jsxs(C,{initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{asChild:!0,children:e.jsx(v,{children:e.jsx("button",{children:"hover me"})})}),e.jsx(I,{...p,children:l})]}),c={args:{text:"A default tooltip",triggerText:"click me",initialOpen:!0},render:$},d={args:{text:"A default tooltip opened on hover",triggerText:"hover me",triggerEvent:"hover"},render:$},g={args:{text:"A Tooltip with asChild Icon trigger"},parameters:{docs:{description:{story:"If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"}}},render:t},u={args:{text:"A Tooltip with asChild Button trigger",triggerEvent:"hover"},parameters:{docs:{description:{story:"If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"}}},render:te},h={args:{variant:"info",text:"An Info Tooltip",open:!0},render:t},m={args:{variant:"warning",text:"A Warning Tooltip",open:!0},render:t},T={args:{variant:"error",text:"An Error Tooltip",open:!0},render:t},x={args:{variant:"danger",text:"A Danger Tooltip.",open:!0},render:t},f={args:{variant:"success",text:"A Success Tooltip",open:!0},render:t},A={args:{text:"A disabled tooltip",disabled:!0},render:t};var j,w,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true
  },
  render: DefaultTemplate
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var b,y,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover"
  },
  render: DefaultTemplate
}`,...(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var B,E,W;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: "A Tooltip with asChild Icon trigger"
  },
  parameters: {
    docs: {
      description: {
        story: "If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"
      }
    }
  },
  render: AsChildIconTemplate
}`,...(W=(E=g.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var O,k,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: "A Tooltip with asChild Button trigger",
    triggerEvent: "hover"
  },
  parameters: {
    docs: {
      description: {
        story: "If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"
      }
    }
  },
  render: AsChildButtonTemplate
}`,...(H=(k=u.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var _,N,R;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,z,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,J,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,P;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true
  },
  render: AsChildIconTemplate
}`,...(P=(M=x.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,U,V;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...(V=(U=f.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    text: "A disabled tooltip",
    disabled: true
  },
  render: AsChildIconTemplate
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const le=["Default","Hover","AsChildTooltipTrigger","ButtonAsChildTooltipTrigger","InfoTooltip","WarningTooltip","ErrorTooltip","DangerTooltip","SuccessTooltip","Disabled"];export{g as AsChildTooltipTrigger,u as ButtonAsChildTooltipTrigger,x as DangerTooltip,c as Default,A as Disabled,T as ErrorTooltip,d as Hover,h as InfoTooltip,f as SuccessTooltip,m as WarningTooltip,le as __namedExportsOrder,ie as default};
