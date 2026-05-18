import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,z as n}from"./iframe-Bgm43SII.js";import{t as r}from"./Icon.component-CiitLkfg.js";import{t as i}from"./Icon-GPGDH1Nt.js";import{a,n as o,o as s,r as c,t as l}from"./TooltipTrigger-oh-vn95H.js";import{t as u}from"./TooltipContent-kJTxNpD1.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{n(),a(),u(),l(),i(),d=t(),f={title:`Components/Tooltip/Tooltip`,component:s,argTypes:{text:{table:{disable:!0}},triggerText:{table:{disable:!0}},children:{control:!1}},decorators:[e=>(0,d.jsx)(`div`,{className:`jn:my-6 jn:flex jn:justify-center`,children:(0,d.jsx)(e,{})})]},p=({placement:e,variant:t,initialOpen:n,open:r,triggerEvent:i,disabled:a,text:l,triggerText:u,...f})=>(0,d.jsxs)(s,{initialOpen:n,placement:e,variant:t,open:r,triggerEvent:i,disabled:a,children:[(0,d.jsx)(o,{children:(0,d.jsx)(`span`,{children:u},`tooltip-trigger-text`)}),(0,d.jsx)(c,{...f,children:l})]}),m=({initialOpen:e,placement:t,variant:n,open:i,triggerEvent:a,disabled:l,text:u,...f})=>(0,d.jsxs)(s,{initialOpen:e,placement:t,variant:n,open:i,triggerEvent:a,disabled:l,children:[(0,d.jsx)(o,{asChild:!0,children:(0,d.jsx)(r,{})}),(0,d.jsx)(c,{...f,children:u})]}),h=({initialOpen:e,placement:t,variant:n,open:r,triggerEvent:i,disabled:a,text:l,...u})=>(0,d.jsxs)(s,{initialOpen:e,placement:t,variant:n,open:r,triggerEvent:i,disabled:a,children:[(0,d.jsx)(o,{asChild:!0,children:(0,d.jsx)(o,{children:(0,d.jsx)(`button`,{children:`hover me`})})}),(0,d.jsx)(c,{...u,children:l})]}),g={args:{text:`A default tooltip`,triggerText:`click me`,initialOpen:!0},render:p},_={args:{text:`A default tooltip opened on hover`,triggerText:`hover me`,triggerEvent:`hover`},render:p},v={args:{text:`A Tooltip with asChild Icon trigger`},parameters:{docs:{description:{story:`If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger`}}},render:m},y={args:{text:`A Tooltip with asChild Button trigger`,triggerEvent:`hover`},parameters:{docs:{description:{story:`If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger`}}},render:h},b={args:{variant:`info`,text:`An Info Tooltip`,open:!0},render:m},x={args:{variant:`warning`,text:`A Warning Tooltip`,open:!0},render:m},S={args:{variant:`error`,text:`An Error Tooltip`,open:!0},render:m},C={args:{variant:`danger`,text:`A Danger Tooltip.`,open:!0},render:m},w={args:{variant:`success`,text:`A Success Tooltip`,open:!0},render:m},T={args:{text:`A disabled tooltip`,disabled:!0},render:m},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true
  },
  render: DefaultTemplate
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover"
  },
  render: DefaultTemplate
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true
  },
  render: AsChildIconTemplate
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true
  },
  render: AsChildIconTemplate
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    text: "A disabled tooltip",
    disabled: true
  },
  render: AsChildIconTemplate
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Hover`,`AsChildTooltipTrigger`,`ButtonAsChildTooltipTrigger`,`InfoTooltip`,`WarningTooltip`,`ErrorTooltip`,`DangerTooltip`,`SuccessTooltip`,`Disabled`]}))();export{v as AsChildTooltipTrigger,y as ButtonAsChildTooltipTrigger,C as DangerTooltip,g as Default,T as Disabled,S as ErrorTooltip,_ as Hover,b as InfoTooltip,w as SuccessTooltip,x as WarningTooltip,E as __namedExportsOrder,f as default};