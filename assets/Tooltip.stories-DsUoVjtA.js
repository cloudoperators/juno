import{j as e}from"./iframe-_yBfUwAN.js";import{T as C,a as v,b as I}from"./TooltipTrigger.component-Behe163T.js";import{I as S}from"./Icon.component-CVW86RNb.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-DDVHiiHP.js";const O={title:"Components/Tooltip/Tooltip",component:C,argTypes:{text:{table:{disable:!0}},triggerText:{table:{disable:!0}},children:{control:!1}},decorators:[r=>e.jsx("div",{className:"jn:my-6 jn:flex jn:justify-center",children:e.jsx(r,{})})]},j=({placement:r,variant:o,initialOpen:n,open:s,triggerEvent:a,disabled:i,text:l,triggerText:p,...w})=>e.jsxs(C,{initialOpen:n,placement:r,variant:o,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{children:e.jsx("span",{children:p},"tooltip-trigger-text")}),e.jsx(I,{...w,children:l})]}),t=({initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,text:l,...p})=>e.jsxs(C,{initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{asChild:!0,children:e.jsx(S,{})}),e.jsx(I,{...p,children:l})]}),b=({initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,text:l,...p})=>e.jsxs(C,{initialOpen:r,placement:o,variant:n,open:s,triggerEvent:a,disabled:i,children:[e.jsx(v,{asChild:!0,children:e.jsx(v,{children:e.jsx("button",{children:"hover me"})})}),e.jsx(I,{...p,children:l})]}),c={args:{text:"A default tooltip",triggerText:"click me",initialOpen:!0},render:j},d={args:{text:"A default tooltip opened on hover",triggerText:"hover me",triggerEvent:"hover"},render:j},g={args:{text:"A Tooltip with asChild Icon trigger"},parameters:{docs:{description:{story:"If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"}}},render:t},u={args:{text:"A Tooltip with asChild Button trigger",triggerEvent:"hover"},parameters:{docs:{description:{story:"If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger"}}},render:b},h={args:{variant:"info",text:"An Info Tooltip",open:!0},render:t},m={args:{variant:"warning",text:"A Warning Tooltip",open:!0},render:t},T={args:{variant:"error",text:"An Error Tooltip",open:!0},render:t},x={args:{variant:"danger",text:"A Danger Tooltip.",open:!0},render:t},f={args:{variant:"success",text:"A Success Tooltip",open:!0},render:t},A={args:{text:"A disabled tooltip",disabled:!0},render:t};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true
  },
  render: DefaultTemplate
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover"
  },
  render: DefaultTemplate
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...m.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true
  },
  render: AsChildIconTemplate
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A disabled tooltip",
    disabled: true
  },
  render: AsChildIconTemplate
}`,...A.parameters?.docs?.source}}};const k=["Default","Hover","AsChildTooltipTrigger","ButtonAsChildTooltipTrigger","InfoTooltip","WarningTooltip","ErrorTooltip","DangerTooltip","SuccessTooltip","Disabled"];export{g as AsChildTooltipTrigger,u as ButtonAsChildTooltipTrigger,x as DangerTooltip,c as Default,A as Disabled,T as ErrorTooltip,d as Hover,h as InfoTooltip,f as SuccessTooltip,m as WarningTooltip,k as __namedExportsOrder,O as default};
