"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[8879],{"./src/components/Pill/Pill.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closeable:()=>Closeable,Default:()=>Default,ValueOnly:()=>ValueOnly,ValueOnlyCloseable:()=>ValueOnlyCloseable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pill_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Icon_component=__webpack_require__("./src/components/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const pillStyles=onClick=>`\n    jn-inline-flex\n    jn-basis-auto\n    jn-shrink\n    jn-items-center\n    jn-flex-nowrap\n    jn-text-xs\n    jn-p-px\n    jn-border\n    jn-rounded\n    jn-border-theme-background-lvl-4\n    jn-group\n    ${onClick?"jn-cursor-pointer":""}\n  `,pillKeyStyles=onClick=>`\n    jn-bg-theme-background-lvl-4\n    jn-text-theme-high\n    ${onClick?"group-hover:jn-text-theme-highest":""}\n    jn-px-1\n    jn-py-0.5\n    jn-rounded-sm\n    jn-inline-block\n  `,pillValueStyles=onClick=>`\n    jn-px-1\n    jn-py-0.5\n    jn-text-theme-high\n    ${onClick?"group-hover:jn-text-theme-highest":""}\n    jn-inline-block\n  `,Pill=_ref=>{let{uid="",pillKey="",pillKeyLabel="",pillValue="",pillValueLabel="",closeable=!1,onClick,onClose,className="",...props}=_ref;const handleClick=event=>{onClick&&onClick(event,uid||pillKey||pillValue)};return react.createElement("div",_extends({className:`juno-pill ${pillStyles(onClick)} ${className}`},props),pillValue||pillValueLabel?react.createElement(react.Fragment,null,(pillKeyLabel||pillKey)&&react.createElement("span",{className:`pill-key ${pillKeyStyles(onClick)}`,onClick:e=>handleClick(e)},pillKeyLabel||pillKey),react.createElement("span",{className:`pill-value ${pillValueStyles(onClick)}`,onClick:e=>handleClick(e)},pillValueLabel||pillValue)):react.createElement("span",{className:`${pillValueStyles}`},"set pillValue or pillValueLabel"),closeable&&react.createElement(Icon_component.I,{icon:"close",size:"18",onClick:e=>{return event=e,void(onClose&&onClose(event,uid||pillKey||pillValue));var event}}))};Pill.propTypes={uid:prop_types_default().string,pillKey:prop_types_default().string,pillKeyLabel:prop_types_default().string,pillValue:prop_types_default().string.isRequired,pillValueLabel:prop_types_default().string,className:prop_types_default().string,closeable:prop_types_default().bool,onClose:prop_types_default().func,onClick:prop_types_default().func},Pill.__docgenInfo={description:"A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.",methods:[],displayName:"Pill",props:{uid:{defaultValue:{value:'""',computed:!1},description:"The unique identifier of the pill. Returned by the onClose callback",type:{name:"string"},required:!1},pillKey:{defaultValue:{value:'""',computed:!1},description:"The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional.",type:{name:"string"},required:!1},pillKeyLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the pill key. If not set pillKey is used. Optional.",type:{name:"string"},required:!1},pillValue:{defaultValue:{value:'""',computed:!1},description:"The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined",type:{name:"string"},required:!1},pillValueLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the pill value. If not set pillValue is used. Optional.",type:{name:"string"},required:!1},closeable:{defaultValue:{value:"false",computed:!1},description:"Whether the pill should be closeable",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",type:{name:"func"},required:!1},onClose:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",type:{name:"func"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"add custom classNames",type:{name:"string"},required:!1}}};const Pill_stories={title:"Components/Pill",component:Pill,argTypes:{}},Default={args:{pillKey:"os",pillKeyLabel:"OS",pillValue:"mac_os",pillValueLabel:"Mac OS"}},Closeable={args:{pillKey:"os",pillKeyLabel:"OS",pillValue:"mac_os",pillValueLabel:"Mac OS",closeable:!0}},ValueOnly={args:{pillValue:"mac_os",pillValueLabel:"Mac OS"}},ValueOnlyCloseable={args:{pillValue:"mac_os",pillValueLabel:"Mac OS",closeable:!0}},__namedExportsOrder=["Default","Closeable","ValueOnly","ValueOnlyCloseable"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    pillKey: "os",\n    pillKeyLabel: "OS",\n    pillValue: "mac_os",\n    pillValueLabel: "Mac OS"\n  }\n}',...Default.parameters?.docs?.source}}},Closeable.parameters={...Closeable.parameters,docs:{...Closeable.parameters?.docs,source:{originalSource:'{\n  args: {\n    pillKey: "os",\n    pillKeyLabel: "OS",\n    pillValue: "mac_os",\n    pillValueLabel: "Mac OS",\n    closeable: true\n  }\n}',...Closeable.parameters?.docs?.source}}},ValueOnly.parameters={...ValueOnly.parameters,docs:{...ValueOnly.parameters?.docs,source:{originalSource:'{\n  args: {\n    pillValue: "mac_os",\n    pillValueLabel: "Mac OS"\n  }\n}',...ValueOnly.parameters?.docs?.source}}},ValueOnlyCloseable.parameters={...ValueOnlyCloseable.parameters,docs:{...ValueOnlyCloseable.parameters?.docs,source:{originalSource:'{\n  args: {\n    pillValue: "mac_os",\n    pillValueLabel: "Mac OS",\n    closeable: true\n  }\n}',...ValueOnlyCloseable.parameters?.docs?.source}}}}}]);