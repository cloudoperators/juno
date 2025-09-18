import{r as m,j as T}from"./iframe-C9T1eEdY.js";import{B as w}from"./Button.component-jP-AjSro.js";import"./Icon.component-BTMMvhyd.js";import"./Spinner.component-CAJy5Hsp.js";const u=({options:e,value:n,onChange:c,renderLabel:d,...g})=>{const o=a=>typeof a=="object"?a.value:a,h=n!==void 0?n:o(e[0]),[l,p]=m.useState(h);m.useEffect(()=>{n!==void 0&&p(n)},[n]);const f=()=>{const t=(e.findIndex(y=>o(y)===l)+1)%e.length,v=o(e[t]);p(v),c&&c(v)},b=()=>{if(d){const t=d(l);if(typeof t=="string")return t}const a=e.find(t=>o(t)===l);return a&&typeof a=="object"&&typeof a.label=="string"?a.label:l?.toString()};return T.jsx(w,{...g,label:b(),onClick:f,variant:"primary"})};try{u.displayName="ToggleButton",u.__docgenInfo={description:"",displayName:"ToggleButton",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((_value: T) => void)"}},renderLabel:{defaultValue:null,description:"",name:"renderLabel",required:!1,type:{name:"((_value: T) => ReactNode)"}},size:{defaultValue:null,description:"Leave empty for default size",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},disabled:{defaultValue:null,description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"Optionally specify an href. This will turn the Button into an <a> element",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button label can be passed like this or as children",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Pass a className",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Specify title for accessibility. Gets value of label if no title specified",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},variant:{defaultValue:null,description:"Choose a variant for your purpose. May leave empty to get default button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},progress:{defaultValue:null,description:"Whether the button action is in progress",name:"progress",required:!1,type:{name:"boolean"}},progressLabel:{defaultValue:null,description:"Display an alternative label while the button action is in progress",name:"progressLabel",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Components/ToggleButton",component:u,argTypes:{options:{control:{type:"object"},description:"Array of options to cycle through, can be plain values or objects with value and label."},value:{control:{type:"text"},description:"The currently selected value from the options."},disabled:{control:"boolean",description:"Whether the button is disabled."},renderLabel:{control:!1,description:"A function to render the label based on the selected value."},onChange:{action:"toggleChanged",description:"Callback for whenever the toggle changes."}}},r={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",onChange:e=>console.log("Changed to:",e)},parameters:{docs:{description:{story:"Default ToggleButton cycling through three options."}}}},i={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",disabled:!0,onChange:e=>console.log("Attempted change to:",e)},parameters:{docs:{description:{story:"ToggleButton in a disabled state, showing initial option."}}}},s={args:{options:[{value:"Theme 1",label:"Light Theme"},{value:"Theme 2",label:"Dark Theme"},{value:"Theme 3",label:"Colorful Theme"}],value:"Theme 1",onChange:e=>console.log("Theme changed to:",e)},parameters:{docs:{description:{story:"ToggleButton using options with value-label objects."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 1",
    onChange: value => console.log("Changed to:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "Default ToggleButton cycling through three options."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 1",
    disabled: true,
    onChange: value => console.log("Attempted change to:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton in a disabled state, showing initial option."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "Theme 1",
      label: "Light Theme"
    }, {
      value: "Theme 2",
      label: "Dark Theme"
    }, {
      value: "Theme 3",
      label: "Colorful Theme"
    }],
    value: "Theme 1",
    onChange: value => console.log("Theme changed to:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton using options with value-label objects."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const q=["Default","Disabled","WithObjectOptions"];export{r as Default,i as Disabled,s as WithObjectOptions,q as __namedExportsOrder,B as default};
