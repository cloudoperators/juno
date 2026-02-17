import{j as a}from"./iframe-DPr166uo.js";import{T as p}from"./ToggleButton.component-9DNzauov.js";import{I as r}from"./Icon.component-BZ7ei4Ds.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.component-D4XfFJxM.js";import"./Spinner.component-Dsrea7CT.js";const s=({order:e="desc",onChange:l,options:i=[{value:"asc",label:a.jsx(r,{icon:"sortShortWideArrowUp"})},{value:"desc",label:a.jsx(r,{icon:"sortShortWideArrowDown"})}],...d})=>{const u=c=>{l?.(c)};return a.jsx(p,{options:i,value:e,onChange:u,...d})};try{s.displayName="SortButton",s.__docgenInfo={description:"The `SortButton` component is a specialized toggle button designed for sorting functionalities in user interfaces.\nIt allows users to toggle between predefined sorting orders (ascending or descending) with visual indicators.\nThe button is built to facilitate easy switching of sort states, providing an intuitive user experience for data lists, tables, or other elements requiring sort capabilities.",displayName:"SortButton",props:{order:{defaultValue:{value:"desc"},description:'Specifies the current sort order, defaulting to "desc". It determines the initial state of sorting when the component is rendered, allowing toggling between ascending ("asc") and descending ("desc").',name:"order",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},onChange:{defaultValue:null,description:"A callback function executed upon a change in the sort order. It receives the new order, enabling custom logic or state updates to be applied dynamically based on user interaction.",name:"onChange",required:!1,type:{name:"((_order: OrderType) => void)"}},onOrderChange:{defaultValue:null,description:`A callback function similar to onChange, designed for older implementations.
@deprecated : Will be removed in the next major release, use onChange instead.`,name:"onOrderChange",required:!1,type:{name:"((_order: OrderType) => void)"}},options:{defaultValue:{value:`[
    { value: "asc", label: <Icon icon="sortShortWideArrowUp" /> },
    { value: "desc", label: <Icon icon="sortShortWideArrowDown" /> },
  ]`},description:"Provides the toggle button with sort options, each defined by a value and a label. This determines the selectable states (e.g., ascending or descending) and their visual representation, defaulting to icons corresponding to the sort direction.",name:"options",required:!1,type:{name:"{ value: OrderType; label: ReactNode; }[]"}},title:{defaultValue:null,description:"Specify a title for accessibility purposes. Defaults to the label if not specified.",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:{value:'"default"'},description:'Choose a variant for your button style. Defaults to "default" if unspecified.',name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},className:{defaultValue:{value:'""'},description:"Additional class names for styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Child elements or text to be rendered inside the button.",name:"children",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Click event handler for the button.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>"}},href:{defaultValue:null,description:"Optionally specify an href. This renders the Button as an `<a>` element.",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button label can be passed directly or as children.",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Indicates if the button is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Pass the name of an icon that the button should display. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},size:{defaultValue:{value:'"default"'},description:'Chooses the button size. Defaults to "default" if unspecified.',name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},progress:{defaultValue:{value:"false"},description:"Indicates whether the button's action is in progress.",name:"progress",required:!1,type:{name:"boolean"}},progressLabel:{defaultValue:null,description:"Display an alternative label while the button's action is in progress.",name:"progressLabel",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Components/SortButton",component:s,argTypes:{order:{control:{type:"radio",options:["asc","desc"]}},disabled:{control:"boolean"},onChange:{action:"orderChanged"}}},o={args:{order:"desc",onChange:e=>console.log("Sort order changed to:",e)}},n={args:{order:"asc",disabled:!0,onChange:e=>console.log("Attempted to change sort order to:",e)},parameters:{docs:{description:{story:"SortButton in a disabled state, showing the initial sorting direction."}}}},t={args:{order:"asc",options:[{value:"asc",label:a.jsx(r,{icon:"expandMore"})},{value:"desc",label:a.jsx(r,{icon:"expandLess"})}],onChange:e=>console.log("Sort order changed to:",e)},parameters:{docs:{description:{story:"SortButton with custom icons. Note: This is an example of passing custom icons. These specific icons are not recommended foor sorting."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    order: "desc",
    onChange: order => console.log("Sort order changed to:", order)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["Default","Disabled","CustomOptions"];export{t as CustomOptions,o as Default,n as Disabled,w as __namedExportsOrder,y as default};
