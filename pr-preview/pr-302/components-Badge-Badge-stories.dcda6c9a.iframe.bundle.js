"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[291],{"./src/components/Badge/Badge.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,DangerWithIcon:()=>DangerWithIcon,DefaultWithAnyIcon:()=>DefaultWithAnyIcon,Error:()=>Error,ErrorWithIcon:()=>ErrorWithIcon,Info:()=>Info,InfoWithIcon:()=>InfoWithIcon,Success:()=>Success,SuccessWithIcon:()=>SuccessWithIcon,Warning:()=>Warning,WarningWithIcon:()=>WarningWithIcon,WithDefaultIcon:()=>WithDefaultIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Icon_component=__webpack_require__("./src/components/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const getVariantStyle=variant=>{switch(variant){case"info":return"jn-bg-theme-info/25";case"success":return"jn-bg-theme-success/25";case"warning":return"jn-bg-theme-warning/25";case"danger":return"jn-bg-theme-danger/25";case"error":return"jn-bg-theme-error/25";case"critical":return"jn-bg-theme-danger/70 jn-text-theme-high";default:return"jn-bg-theme-badge-default"}},Badge=_ref=>{let{variant="default",icon=!1,text="",className="",children=null,...props}=_ref;return react.createElement("span",_extends({className:`\n        juno-badge \n        juno-badge-${variant} \n        \n\tjn-rounded\n\tjn-text-sm\n\tjn-text-theme-default\n\tjn-py-0.5\n\tjn-px-1\n  jn-justify-center\n  jn-items-center\n \n        ${getVariantStyle(variant)}\n        ${icon?"jn-inline-flex":""}\n        ${className}`},props),icon?react.createElement(Icon_component.I,{icon:((icon,variant)=>icon&&Icon_component.g.includes(icon)?icon:!0===icon?variant:null)(icon,variant),size:"1.125rem",className:"jn-mr-1 jn-items-center",color:((icon,variant)=>!0===icon?`jn-text-theme-${variant}`:void 0)(icon,variant)}):null,children||text)};Badge.propTypes={variant:prop_types_default().oneOf(["default","info","success","warning","danger","error","critical"]),icon:prop_types_default().oneOfType([prop_types_default().bool,prop_types_default().oneOf(Icon_component.g)]),text:prop_types_default().string,className:prop_types_default().string,children:prop_types_default().node},Badge.__docgenInfo={description:"A Badge component to visually indicate properties or states of an entity. Besides the default, there are also semantic versions. Can optionally contain an icon to emphasize their meaning.",methods:[],displayName:"Badge",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"info"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"danger"',computed:!1},{value:'"error"',computed:!1},{value:'"critical"',computed:!1}]},required:!1},icon:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"union",value:[{name:"bool"},{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]}]},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const Badge_stories={title:"Components/Badge",component:Badge,parameters:{text:"default"},argTypes:{icon:{options:["default",...Icon_component.g],control:{type:"select"}},children:{control:!1}}},WithDefaultIcon={args:{text:"With Icon",icon:!0}},Info={args:{variant:"info",text:"info"}},InfoWithIcon={args:{variant:"info",text:"info",icon:!0}},Success={args:{variant:"success",text:"success"}},SuccessWithIcon={args:{variant:"success",text:"success",icon:!0}},Warning={args:{variant:"warning",text:"warning"}},WarningWithIcon={args:{variant:"warning",text:"warning",icon:!0}},Danger={args:{variant:"danger",text:"danger"}},DangerWithIcon={args:{variant:"danger",text:"danger",icon:!0}},Error={args:{variant:"error",text:"error"}},ErrorWithIcon={args:{variant:"error",text:"error",icon:!0}},DefaultWithAnyIcon={args:{text:"deleted",icon:"deleteForever"}},__namedExportsOrder=["WithDefaultIcon","Info","InfoWithIcon","Success","SuccessWithIcon","Warning","WarningWithIcon","Danger","DangerWithIcon","Error","ErrorWithIcon","DefaultWithAnyIcon"];WithDefaultIcon.parameters={...WithDefaultIcon.parameters,docs:{...WithDefaultIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "With Icon",\n    icon: true\n  }\n}',...WithDefaultIcon.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "info",\n    text: "info"\n  }\n}',...Info.parameters?.docs?.source}}},InfoWithIcon.parameters={...InfoWithIcon.parameters,docs:{...InfoWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "info",\n    text: "info",\n    icon: true\n  }\n}',...InfoWithIcon.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "success",\n    text: "success"\n  }\n}',...Success.parameters?.docs?.source}}},SuccessWithIcon.parameters={...SuccessWithIcon.parameters,docs:{...SuccessWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "success",\n    text: "success",\n    icon: true\n  }\n}',...SuccessWithIcon.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "warning",\n    text: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}},WarningWithIcon.parameters={...WarningWithIcon.parameters,docs:{...WarningWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "warning",\n    text: "warning",\n    icon: true\n  }\n}',...WarningWithIcon.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "danger",\n    text: "danger"\n  }\n}',...Danger.parameters?.docs?.source}}},DangerWithIcon.parameters={...DangerWithIcon.parameters,docs:{...DangerWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "danger",\n    text: "danger",\n    icon: true\n  }\n}',...DangerWithIcon.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "error",\n    text: "error"\n  }\n}',...Error.parameters?.docs?.source}}},ErrorWithIcon.parameters={...ErrorWithIcon.parameters,docs:{...ErrorWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "error",\n    text: "error",\n    icon: true\n  }\n}',...ErrorWithIcon.parameters?.docs?.source}}},DefaultWithAnyIcon.parameters={...DefaultWithAnyIcon.parameters,docs:{...DefaultWithAnyIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "deleted",\n    icon: "deleteForever"\n  }\n}',...DefaultWithAnyIcon.parameters?.docs?.source}}}}}]);