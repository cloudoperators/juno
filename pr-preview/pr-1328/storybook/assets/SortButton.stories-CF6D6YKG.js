import{j as a}from"./iframe-CBonyOBz.js";import{T as p}from"./ToggleButton.component-Bnka2dbE.js";import{I as t}from"./Icon.component-CdVm7gHJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.component-3O7-lDDR.js";import"./Spinner.component-DXSGQwB5.js";const s=({order:e="desc",onChange:l,options:i=[{value:"asc",label:a.jsx(t,{icon:"sortShortWideArrowUp"})},{value:"desc",label:a.jsx(t,{icon:"sortShortWideArrowDown"})}],...d})=>{const u=c=>{l?.(c)};return a.jsx(p,{options:i,value:e,onChange:u,...d})};try{s.displayName="SortButton",s.__docgenInfo={description:"",displayName:"SortButton",props:{order:{defaultValue:{value:"desc"},description:"",name:"order",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((_order: OrderType) => void)"}},onOrderChange:{defaultValue:null,description:"@deprecated : Will be removed in the next major release, use onChange instead.",name:"onOrderChange",required:!1,type:{name:"((_order: OrderType) => void)"}},options:{defaultValue:{value:`[
    { value: "asc", label: <Icon icon="sortShortWideArrowUp" /> },
    { value: "desc", label: <Icon icon="sortShortWideArrowDown" /> },
  ]`},description:"",name:"options",required:!1,type:{name:"{ value: OrderType; label: ReactNode; }[]"}},size:{defaultValue:null,description:"Leave empty for default size",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},disabled:{defaultValue:null,description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"Optionally specify an href. This will turn the Button into an <a> element",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button label can be passed like this or as children",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Pass a className",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Specify title for accessibility. Gets value of label if no title specified",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>"}},icon:{defaultValue:null,description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},variant:{defaultValue:null,description:"Choose a variant for your purpose. May leave empty to get default button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},progress:{defaultValue:null,description:"Whether the button action is in progress",name:"progress",required:!1,type:{name:"boolean"}},progressLabel:{defaultValue:null,description:"Display an alternative label while the button action is in progress",name:"progressLabel",required:!1,type:{name:"string"}}}}}catch{}const b={title:"Components/SortButton",component:s,argTypes:{order:{control:{type:"radio",options:["asc","desc"]},description:"Initial sort order state, either ascending ('asc') or descending ('desc')."},disabled:{control:"boolean",description:"Whether the sort button is disabled."},onChange:{action:"orderChanged",description:"Callback triggered when the sort order changes."}}},o={args:{order:"desc",onChange:e=>console.log("Sort order changed to:",e)},parameters:{docs:{description:{story:"Default SortButton toggling between ascending and descending order."}}}},r={args:{order:"asc",disabled:!0,onChange:e=>console.log("Attempted to change sort order to:",e)},parameters:{docs:{description:{story:"SortButton in a disabled state, showing the initial sorting direction."}}}},n={args:{order:"asc",options:[{value:"asc",label:a.jsx(t,{icon:"expandMore"})},{value:"desc",label:a.jsx(t,{icon:"expandLess"})}],onChange:e=>console.log("Sort order changed to:",e)},parameters:{docs:{description:{story:"SortButton with custom icons. Note: This is an example of passing custom icons. These specific icons are not recommended foor sorting."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    order: "desc",
    onChange: order => console.log("Sort order changed to:", order)
  },
  parameters: {
    docs: {
      description: {
        story: "Default SortButton toggling between ascending and descending order."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    order: "asc",
    disabled: true,
    onChange: order => console.log("Attempted to change sort order to:", order)
  },
  parameters: {
    docs: {
      description: {
        story: "SortButton in a disabled state, showing the initial sorting direction."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    order: "asc",
    options: [{
      value: "asc",
      label: <Icon icon="expandMore" />
    }, {
      value: "desc",
      label: <Icon icon="expandLess" />
    }],
    onChange: order => console.log("Sort order changed to:", order)
  },
  parameters: {
    docs: {
      description: {
        story: "SortButton with custom icons. Note: This is an example of passing custom icons. These specific icons are not recommended foor sorting."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const w=["Default","Disabled","CustomOptions"];export{n as CustomOptions,o as Default,r as Disabled,w as __namedExportsOrder,b as default};
