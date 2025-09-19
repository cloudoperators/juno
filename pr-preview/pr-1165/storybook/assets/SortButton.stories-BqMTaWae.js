import{j as a}from"./iframe-CIyRBaja.js";import{T as l}from"./ToggleButton.component-BjY9pEhv.js";import{I as g}from"./Icon.component-CKqYrODc.js";import"./Button.component-Bhs-cQnZ.js";import"./Spinner.component-mfAUcs9B.js";const n=({order:e="desc",onOrderChange:s,...d})=>{const i=[{value:"sortShortWideArrowUp"},{value:"sortShortWideArrowDown"}],c=t=>{s&&s(t)};return a.jsx(l,{options:i,onChange:c,renderLabel:t=>a.jsx(g,{icon:t}),...d})};try{n.displayName="SortButton",n.__docgenInfo={description:"",displayName:"SortButton",props:{order:{defaultValue:{value:"desc"},description:"",name:"order",required:!1,type:{name:"string"}},onOrderChange:{defaultValue:null,description:"",name:"onOrderChange",required:!1,type:{name:"((_order: string) => void)"}}}}}catch{}const f={title:"Components/SortButton",component:n,argTypes:{order:{control:{type:"radio",options:["asc","desc"]},description:"Initial sort order state, either ascending ('asc') or descending ('desc')."},disabled:{control:"boolean",description:"Whether the sort button is disabled."},onOrderChange:{action:"orderChanged",description:"Callback triggered when the sort order changes."}}},r={args:{order:"desc",onOrderChange:e=>console.log("Sort order changed to:",e)},parameters:{docs:{description:{story:"Default SortButton toggling between ascending and descending order."}}}},o={args:{order:"asc",disabled:!0,onOrderChange:e=>console.log("Attempted to change sort order to:",e)},parameters:{docs:{description:{story:"SortButton in a disabled state, showing the initial sorting direction."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    order: "desc",
    onOrderChange: order => console.log("Sort order changed to:", order)
  },
  parameters: {
    docs: {
      description: {
        story: "Default SortButton toggling between ascending and descending order."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    order: "asc",
    disabled: true,
    onOrderChange: order => console.log("Attempted to change sort order to:", order)
  },
  parameters: {
    docs: {
      description: {
        story: "SortButton in a disabled state, showing the initial sorting direction."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const S=["Default","Disabled"];export{r as Default,o as Disabled,S as __namedExportsOrder,f as default};
