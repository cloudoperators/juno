import{g as e}from"./iframe-DaLLswkI.js";import{t}from"./Icon.component-q7FNz7wU.js";import"./Icon-aVEdnVJP.js";import{n,r,t as i}from"./TooltipTrigger-_B9k2lth.js";import"./TooltipContent-CMBDPcOV.js";import"react";var a=e(),o={title:`Components/Tooltip/Tooltip`,component:r,argTypes:{text:{table:{disable:!0}},triggerText:{table:{disable:!0}},children:{control:!1}},decorators:[e=>(0,a.jsx)(`div`,{className:`jn:my-6 jn:flex jn:justify-center`,children:(0,a.jsx)(e,{})})]},s=({placement:e,variant:t,initialOpen:o,open:s,triggerEvent:c,disabled:l,text:u,triggerText:d,...f})=>(0,a.jsxs)(r,{initialOpen:o,placement:e,variant:t,open:s,triggerEvent:c,disabled:l,children:[(0,a.jsx)(i,{children:(0,a.jsx)(`span`,{children:d},`tooltip-trigger-text`)}),(0,a.jsx)(n,{...f,children:u})]}),c=({initialOpen:e,placement:o,variant:s,open:c,triggerEvent:l,disabled:u,text:d,...f})=>(0,a.jsxs)(r,{initialOpen:e,placement:o,variant:s,open:c,triggerEvent:l,disabled:u,children:[(0,a.jsx)(i,{asChild:!0,children:(0,a.jsx)(t,{})}),(0,a.jsx)(n,{...f,children:d})]}),l=({initialOpen:e,placement:t,variant:o,open:s,triggerEvent:c,disabled:l,text:u,...d})=>(0,a.jsxs)(r,{initialOpen:e,placement:t,variant:o,open:s,triggerEvent:c,disabled:l,children:[(0,a.jsx)(i,{asChild:!0,children:(0,a.jsx)(i,{children:(0,a.jsx)(`button`,{children:`hover me`})})}),(0,a.jsx)(n,{...d,children:u})]}),u={args:{text:`A default tooltip`,triggerText:`click me`,initialOpen:!0},render:s},d={args:{text:`A default tooltip opened on hover`,triggerText:`hover me`,triggerEvent:`hover`},render:s},f={args:{text:`A Tooltip with asChild Icon trigger`},parameters:{docs:{description:{story:`If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger`}}},render:c},p={args:{text:`A Tooltip with asChild Button trigger`,triggerEvent:`hover`},parameters:{docs:{description:{story:`If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger`}}},render:l},m={args:{variant:`info`,text:`An Info Tooltip`,open:!0},render:c},h={args:{variant:`warning`,text:`A Warning Tooltip`,open:!0},render:c},g={args:{variant:`error`,text:`An Error Tooltip`,open:!0},render:c},_={args:{variant:`danger`,text:`A Danger Tooltip.`,open:!0},render:c},v={args:{variant:`success`,text:`A Success Tooltip`,open:!0},render:c},y={args:{text:`A disabled tooltip`,disabled:!0},render:c};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true
  },
  render: DefaultTemplate
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover"
  },
  render: DefaultTemplate
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true
  },
  render: AsChildIconTemplate
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A disabled tooltip",
    disabled: true
  },
  render: AsChildIconTemplate
}`,...y.parameters?.docs?.source}}};var b=[`Default`,`Hover`,`AsChildTooltipTrigger`,`ButtonAsChildTooltipTrigger`,`InfoTooltip`,`WarningTooltip`,`ErrorTooltip`,`DangerTooltip`,`SuccessTooltip`,`Disabled`];export{f as AsChildTooltipTrigger,p as ButtonAsChildTooltipTrigger,_ as DangerTooltip,u as Default,y as Disabled,g as ErrorTooltip,d as Hover,m as InfoTooltip,v as SuccessTooltip,h as WarningTooltip,b as __namedExportsOrder,o as default};