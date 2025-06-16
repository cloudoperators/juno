import{j as n}from"./iframe-BTXmk3MZ.js";import{T as r}from"./TabPanel-DpLAkDoI.js";import{I as i}from"./Icon.component-BRnXO-D3.js";const d=`
  jn-flex
  jn-font-bold
  jn-px-[1.5625rem]
  jn-items-center
  jn-cursor-pointer
  focus:jn-outline-none 
`,c=`
  jn-pointer-events-none
  jn-opacity-50
`,v=`
  jn-border-b-[3px]
  jn-border-theme-tab-active-bottom
`,m=`
  jn-mr-2
`,e=({children:a,label:t="",icon:l,disabled:o=!1,className:s="",...u})=>n.jsxs(r,{className:`juno-tab ${d} ${s}`,disabledClassName:`juno-tab-disabled ${c}`,selectedClassName:`juno-tab-selected ${v}`,disabled:o,...u,children:[l?n.jsx(i,{icon:l,size:"18",className:`${m}`}):null,a||t]});e.tabsRole="Tab";try{e.displayName="Tab",e.__docgenInfo={description:"A Tab Component representing an individual Tab inside a wrapping TabList inside a wrapping Tabs component. Not to be used standalone outside of the mentioned parent components.",displayName:"Tab",props:{children:{defaultValue:null,description:"The children to render inside the Tab (-button)",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:{value:""},description:"The Tab label (only rendered when no children are supplied)",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Pass the name of an icon to render in the Tab. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},disabled:{defaultValue:{value:"false"},description:"Whether the Tab is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add custom classNames to the Tab",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{e as T};
