import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{T as C,a as v,b as j}from"./TooltipTrigger.component-CrTSqgNM.js";import{I as re}from"./Icon.component-BXxTB2S-.js";import"./index-DysCNOs_.js";import"./Icon.component-CFcIA3-c.js";import"./widgets-BR6-ubtP.js";import"./floating-ui.react-dom-t1-XbZXo.js";import"./index-DxCGxluL.js";import"./index-BHU3UH5b.js";const ge={title:"Components/Tooltip/Tooltip",component:C,argTypes:{text:{table:{disable:!0}},triggerText:{table:{disable:!0}},children:{control:!1}},decorators:[r=>e.jsx("div",{className:"jn-my-6 jn-flex jn-justify-center",children:e.jsx(r,{})})]},$=({placement:r,variant:o,initialOpen:n,open:s,triggerEvent:a,disabled:i,text:l,triggerText:p,...ee})=>e.jsxs(C,{initialOpen:n,placement:r,variant:o,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{children:e.jsx("span",{children:p},"tooltip-trigger-text")}),e.jsx(j,{...ee,children:l})]}),t=({initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,text:l,...p})=>e.jsxs(C,{initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{asChild:!0,children:e.jsx(re,{})}),e.jsx(j,{...p,children:l})]}),te=({initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,text:l,...p})=>e.jsxs(C,{initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{asChild:!0,children:e.jsx(v,{children:e.jsx("button",{children:"hover me"})})}),e.jsx(j,{...p,children:l})]}),c={render:$,args:{text:"A default tooltip",triggerText:"click me",initialOpen:!0}},d={render:$,args:{text:"A default tooltip opened on hover",triggerText:"hover me",triggerEvent:"hover"}},g={render:t,args:{text:"A Tooltip with asChild Icon trigger"},parameters:{docs:{description:{story:"If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"}}}},u={render:te,args:{text:"A Tooltip with asChild Button trigger",triggerEvent:"hover"},parameters:{docs:{description:{story:"If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"}}}},h={render:t,args:{variant:"info",text:"An Info Tooltip",open:!0}},m={render:t,args:{variant:"warning",text:"A Warning Tooltip",open:!0}},T={render:t,args:{variant:"error",text:"An Error Tooltip",open:!0}},x={render:t,args:{variant:"danger",text:"A Danger Tooltip.",open:!0}},A={render:t,args:{variant:"success",text:"A Success Tooltip",open:!0}},f={render:t,args:{text:"A disabled tooltip",disabled:!0}};var I,w,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true
  }
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var b,y,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover"
  }
}`,...(B=(y=d.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var E,D,W;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: TemplateAsChildAnchor,
  args: {
    text: "A Tooltip with asChild Icon trigger"
  },
  parameters: {
    docs: {
      description: {
        story: "If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"
      }
    }
  }
}`,...(W=(D=g.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var O,_,k;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: TemplateButtonAsChildAnchor,
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
  }
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var H,N,R;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: TemplateAsChildAnchor,
  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true
  }
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,z,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: TemplateAsChildAnchor,
  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,J,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: TemplateAsChildAnchor,
  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true
  }
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,P;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: TemplateAsChildAnchor,
  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true
  }
}`,...(P=(M=x.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,U,V;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: TemplateAsChildAnchor,
  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true
  }
}`,...(V=(U=A.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: TemplateAsChildAnchor,
  args: {
    text: "A disabled tooltip",
    disabled: true
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ue=["Default","Hover","AsChildTooltipTrigger","ButtonAsChildTooltipTrigger","InfoTooltip","WarningTooltip","ErrorTooltip","DangerTooltip","SuccessTooltip","Disabled"];export{g as AsChildTooltipTrigger,u as ButtonAsChildTooltipTrigger,x as DangerTooltip,c as Default,f as Disabled,T as ErrorTooltip,d as Hover,h as InfoTooltip,A as SuccessTooltip,m as WarningTooltip,ue as __namedExportsOrder,ge as default};
