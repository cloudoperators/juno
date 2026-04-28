import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";import{n as r,r as i,t as a}from"./TooltipTrigger-BW3VrEx-.js";import"./TooltipContent-DAOy337S.js";e();var o=t(),s={title:`Components/Tooltip/Tooltip`,component:i,argTypes:{text:{table:{disable:!0}},triggerText:{table:{disable:!0}},children:{control:!1}},decorators:[e=>(0,o.jsx)(`div`,{className:`jn:my-6 jn:flex jn:justify-center`,children:(0,o.jsx)(e,{})})]},c=({placement:e,variant:t,initialOpen:n,open:s,triggerEvent:c,disabled:l,text:u,triggerText:d,...f})=>(0,o.jsxs)(i,{initialOpen:n,placement:e,variant:t,open:s,triggerEvent:c,disabled:l,children:[(0,o.jsx)(a,{children:(0,o.jsx)(`span`,{children:d},`tooltip-trigger-text`)}),(0,o.jsx)(r,{...f,children:u})]}),l=({initialOpen:e,placement:t,variant:s,open:c,triggerEvent:l,disabled:u,text:d,...f})=>(0,o.jsxs)(i,{initialOpen:e,placement:t,variant:s,open:c,triggerEvent:l,disabled:u,children:[(0,o.jsx)(a,{asChild:!0,children:(0,o.jsx)(n,{})}),(0,o.jsx)(r,{...f,children:d})]}),u=({initialOpen:e,placement:t,variant:n,open:s,triggerEvent:c,disabled:l,text:u,...d})=>(0,o.jsxs)(i,{initialOpen:e,placement:t,variant:n,open:s,triggerEvent:c,disabled:l,children:[(0,o.jsx)(a,{asChild:!0,children:(0,o.jsx)(a,{children:(0,o.jsx)(`button`,{children:`hover me`})})}),(0,o.jsx)(r,{...d,children:u})]}),d={args:{text:`A default tooltip`,triggerText:`click me`,initialOpen:!0},render:c},f={args:{text:`A default tooltip opened on hover`,triggerText:`hover me`,triggerEvent:`hover`},render:c},p={args:{text:`A Tooltip with asChild Icon trigger`},parameters:{docs:{description:{story:`If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger`}}},render:l},m={args:{text:`A Tooltip with asChild Button trigger`,triggerEvent:`hover`},parameters:{docs:{description:{story:`If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger`}}},render:u},h={args:{variant:`info`,text:`An Info Tooltip`,open:!0},render:l},g={args:{variant:`warning`,text:`A Warning Tooltip`,open:!0},render:l},_={args:{variant:`error`,text:`An Error Tooltip`,open:!0},render:l},v={args:{variant:`danger`,text:`A Danger Tooltip.`,open:!0},render:l},y={args:{variant:`success`,text:`A Success Tooltip`,open:!0},render:l},b={args:{text:`A disabled tooltip`,disabled:!0},render:l};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true
  },
  render: DefaultTemplate
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover"
  },
  render: DefaultTemplate
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true
  },
  render: AsChildIconTemplate
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A disabled tooltip",
    disabled: true
  },
  render: AsChildIconTemplate
}`,...b.parameters?.docs?.source}}};var x=[`Default`,`Hover`,`AsChildTooltipTrigger`,`ButtonAsChildTooltipTrigger`,`InfoTooltip`,`WarningTooltip`,`ErrorTooltip`,`DangerTooltip`,`SuccessTooltip`,`Disabled`];export{p as AsChildTooltipTrigger,m as ButtonAsChildTooltipTrigger,v as DangerTooltip,d as Default,b as Disabled,_ as ErrorTooltip,f as Hover,h as InfoTooltip,y as SuccessTooltip,g as WarningTooltip,x as __namedExportsOrder,s as default};