"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[23],{"./src/components/BreadcrumbItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BreadcrumbItem});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Icon=__webpack_require__("./src/deprecated_js/Icon/index.js"),Icon_component=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const BreadcrumbItem=_ref=>{let{icon=null,href="#",label="Item",ariaLabel="",active=!1,children=null,onClick,disabled=!1,className="",...props}=_ref;const icn=icon?react.createElement(Icon.I,{icon,size:"18",color:"jn-text-theme-default",className:label&&label.length?"jn-mr-1":""}):null;return children||react.createElement("span",_extends({className:`juno-breadcrumb-item \n              \n  jn-text-sm\n  jn-text-theme-high\n  jn-flex\n  jn-gap-1\n  jn-items-center\n \n              ${disabled?"juno-breadcrumb-item-disabled":""} \n              ${active?"juno-breadcrumb-item-active":""}\n              ${className}`},props),active||disabled?react.createElement(react.Fragment,null,icn,label):react.createElement("a",{href,className:"\n  jn-text-theme-high\n  jn-inline-flex\n ","aria-label":ariaLabel||label,onClick:event=>{onClick&&onClick(event)}},icn,label))};BreadcrumbItem.propTypes={icon:prop_types_default().oneOf(Icon_component.g),href:prop_types_default().string,label:prop_types_default().string,ariaLabel:prop_types_default().string,active:prop_types_default().bool,onClick:prop_types_default().func,disabled:prop_types_default().bool,className:prop_types_default().string,children:prop_types_default().node},BreadcrumbItem.__docgenInfo={description:"An individual item in a breadcrumb",methods:[],displayName:"BreadcrumbItem",props:{icon:{defaultValue:{value:"null",computed:!1},description:"pass an icon name",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},href:{defaultValue:{value:'"#"',computed:!1},description:"The link of the path/route/page the breacrumb item points to",type:{name:"string"},required:!1},label:{defaultValue:{value:'"Item"',computed:!1},description:"The text to render in the breadcumb item",type:{name:"string"},required:!1},ariaLabel:{defaultValue:{value:'""',computed:!1},description:"Pass an aria-label",type:{name:"string"},required:!1},active:{defaultValue:{value:"false",computed:!1},description:"Whether the item is the last / active item",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children of the item",type:{name:"node"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},onClick:{description:"Pass an onClick handler",type:{name:"func"},required:!1}}}},"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/deprecated_js/Stack/Stack.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const baseStack=(direction,gap,wrap)=>`\n      ${"vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}\n      ${wrap&&"jn-flex-wrap"}\n      ${(gap=>{switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}})(gap)}\n    `,alignItems=alignment=>{switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=distribution=>{switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=_ref=>{let{direction="horizontal",gap="0",alignment="stretch",distribution="start",wrap=!1,className="",children=null,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`juno-stack ${baseStack(direction,gap,wrap)} ${alignItems(alignment)} ${justifyItems(distribution)} ${className||""}`},props),children)};Stack.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,direction:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["horizontal","vertical"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","baseline","stretch"]),distribution:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["start","end","center","between","around","evenly"]),wrap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,gap:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])},Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",methods:[],displayName:"Stack",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},description:"Stack items horizontally or vertically",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]},required:!1},gap:{defaultValue:{value:'"0"',computed:!1},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",type:{name:"enum",value:[{value:'"0"',computed:!1},{value:'"px"',computed:!1},{value:'"0.5"',computed:!1},{value:'"1"',computed:!1},{value:'"1.5"',computed:!1},{value:'"2"',computed:!1},{value:'"2.5"',computed:!1},{value:'"3"',computed:!1},{value:'"3.5"',computed:!1},{value:'"4"',computed:!1},{value:'"5"',computed:!1},{value:'"6"',computed:!1},{value:'"7"',computed:!1},{value:'"8"',computed:!1},{value:'"9"',computed:!1},{value:'"10"',computed:!1},{value:'"11"',computed:!1},{value:'"12"',computed:!1},{value:'"14"',computed:!1},{value:'"16"',computed:!1},{value:'"20"',computed:!1},{value:'"24"',computed:!1},{value:'"28"',computed:!1},{value:'"32"',computed:!1},{value:'"36"',computed:!1},{value:'"40"',computed:!1},{value:'"44"',computed:!1},{value:'"48"',computed:!1},{value:'"52"',computed:!1},{value:'"56"',computed:!1},{value:'"60"',computed:!1},{value:'"64"',computed:!1},{value:'"72"',computed:!1},{value:'"80"',computed:!1},{value:'"96"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"stretch"',computed:!1},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"baseline"',computed:!1},{value:'"stretch"',computed:!1}]},required:!1},distribution:{defaultValue:{value:'"start"',computed:!1},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"between"',computed:!1},{value:'"around"',computed:!1},{value:'"evenly"',computed:!1}]},required:!1},wrap:{defaultValue:{value:"false",computed:!1},description:"Specify whether the Stack children should be allowed to wrap or not",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass css class names",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/Breadcrumb/Breadcrumb.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumb_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),BreadcrumbItem=__webpack_require__("./src/components/BreadcrumbItem/index.js"),Stack_component=__webpack_require__("./src/deprecated_js/Stack/Stack.component.js"),Icon_component=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Breadcrumb=_ref=>{let{children=null,className="",...props}=_ref;const breadcrumbArray=react.Children.toArray(children),breadcrumbArrayWithSeparators=[];return breadcrumbArray.forEach(((child,i)=>{breadcrumbArrayWithSeparators.push(react.createElement(react.Fragment,{key:i},react.createElement(BreadcrumbItem.J,child.props),i<breadcrumbArray.length-1?react.createElement(Icon_component.I,{icon:"chevronRight"}):null))})),react.createElement(Stack_component.B,_extends({className:`juno-breadcrumb \n\n ${className}`,gap:"1",key:"stck"},props),breadcrumbArrayWithSeparators)};Breadcrumb.propTypes={className:prop_types_default().string,children:prop_types_default().node},Breadcrumb.__docgenInfo={description:"Generic breadcrumb component. Use this to Wrap `Breadcrumb` items or custom children in a breadcrumb.",methods:[],displayName:"Breadcrumb",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render. Typically use the BreadcrumbItem component.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1}}};const Template=_ref=>{let{children,...args}=_ref;return react.createElement(Breadcrumb,args,children)};Template.propTypes={children:prop_types_default().node};const Breadcrumb_stories={title:"Components/Breadcrumb/Breadcrumb",component:Breadcrumb,argTypes:{children:{control:!1}}},Default={render:Template,args:{children:[react.createElement(BreadcrumbItem.J,{key:"1",label:"",icon:"home"}),react.createElement(BreadcrumbItem.J,{key:"2",label:"Breadcrumb Item"}),react.createElement(BreadcrumbItem.J,{key:"3",label:"Breadcrumb Item with Icon",icon:"place"}),react.createElement(BreadcrumbItem.J,{key:"4",label:"Disabled Item ",disabled:!0}),react.createElement(BreadcrumbItem.J,{key:"5",label:"Active Item",active:!0})]}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<BreadcrumbItem key="1" label="" icon="home" />, <BreadcrumbItem key="2" label="Breadcrumb Item" />, <BreadcrumbItem key="3" label="Breadcrumb Item with Icon" icon="place" />, <BreadcrumbItem key="4" label="Disabled Item " disabled />, <BreadcrumbItem key="5" label="Active Item" active />]\n  }\n}',...Default.parameters?.docs?.source}}}}}]);