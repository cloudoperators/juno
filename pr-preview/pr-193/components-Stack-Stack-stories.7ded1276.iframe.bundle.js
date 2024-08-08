"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[9707],{"./src/components/Stack/Stack.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,GapHorizontal:()=>GapHorizontal,GapVertical:()=>GapVertical,Horizontal:()=>Horizontal,HorizontalAlignmentCenter:()=>HorizontalAlignmentCenter,HorizontalAlignmentStart:()=>HorizontalAlignmentStart,HorizontalDistributionCenter:()=>HorizontalDistributionCenter,Vertical:()=>Vertical,VerticalAlignmentCenter:()=>VerticalAlignmentCenter,VerticalAlignmentStart:()=>VerticalAlignmentStart,VerticalDistributionCenter:()=>VerticalDistributionCenter,Wrap:()=>Wrap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Stack_stories});__webpack_require__("../../node_modules/react/index.js");var prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DummyComponent=_ref=>{let{label}=_ref;return(0,jsx_runtime.jsx)("div",{className:" jn-flex jn-bg-juno-blue jn-rounded jn-text-white jn-px-8 jn-py-3 jn-border jn-border-juno-blue-7",children:(0,jsx_runtime.jsx)("div",{className:"jn-m-auto",children:label})})};DummyComponent.displayName="DummyComponent",DummyComponent.propTypes={label:prop_types_default().string.isRequired};const dummyComponents_DummyComponent=DummyComponent;DummyComponent.__docgenInfo={description:"",methods:[],displayName:"DummyComponent",props:{label:{description:"",type:{name:"string"},required:!0}}};var Stack=__webpack_require__("./src/components/Stack/index.js");const Stack_stories={title:"Layout/Stack",component:Stack.B,argTypes:{children:{control:!1},gap:{options:["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"]}}},Template=args=>{return(0,jsx_runtime.jsx)(Stack.B,{className:(direction=args.direction,`\n    bg-theme-background-lvl-3\n    ${"vertical"===direction?"jn-w-full jn-h-80":"jn-h-24"}\n    `),...args,children:[...Array(5)].map(((_,i)=>(0,jsx_runtime.jsx)(dummyComponents_DummyComponent,{label:i},i)))});var direction};Template.displayName="Template";const TemplateManyChildren=args=>(0,jsx_runtime.jsx)(Stack.B,{className:"jn-bg-theme-background-lvl-3",...args,children:[...Array(15)].map(((_,i)=>(0,jsx_runtime.jsx)(dummyComponents_DummyComponent,{label:i},i)))});TemplateManyChildren.displayName="TemplateManyChildren";const Horizontal={render:Template,parameters:{docs:{description:{story:"Default stack direction."}}},args:{}},Vertical={render:Template,parameters:{docs:{description:{story:"Children can also be stacked vertically."}}},args:{direction:"vertical"}},GapHorizontal={render:Template,parameters:{docs:{description:{story:"By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."}}},args:{gap:"4"}},GapVertical={render:Template,parameters:{docs:{description:{story:"By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."}}},args:{direction:"vertical",gap:"3"}},HorizontalAlignmentCenter={render:Template,parameters:{docs:{description:{story:"By specifying an alignment you can control how items are aligned vertically in a horizontal Stack. By default they will stretch to take up the full height. Another very useful alignmen ist 'center', this will not stretch the children but make sure they are all aligned around the center axis. This is particularly useful when it doesn't make sense to stretch the items to the full height."}}},args:{alignment:"center"}},VerticalAlignmentCenter={render:Template,parameters:{docs:{description:{story:"The same as above is true for vertical Stacks. But in this case the alignment property controls the alignment along the horizontal axis. By default items are stretched to the full width. Using 'center' alignment causes the items to be aligned around the central axis."}}},args:{direction:"vertical",alignment:"center"}},HorizontalAlignmentStart={render:Template,parameters:{docs:{description:{story:"Setting the alignment to 'start' will cause the items to be aligned to the top in a horizontal Stack."}}},args:{alignment:"start"}},VerticalAlignmentStart={render:Template,parameters:{docs:{description:{story:"Setting the alignment to 'start' will cause the items to be aligned to the left in a vertical Stack."}}},args:{direction:"vertical",alignment:"start"}},HorizontalDistributionCenter={render:Template,parameters:{docs:{description:{story:"The distribution along the horizontal axis in a horizontal Stack can be controlled via the 'distribution' property. Setting it to 'center' will cause the items to be aligned to the center of the horizontal axis."}}},args:{distribution:"center"}},VerticalDistributionCenter={render:Template,parameters:{docs:{description:{story:"Setting the distribution to 'center' in a vertical Stack will cause the items to be aligned to the center of the vertical axis."}}},args:{direction:"vertical",distribution:"center"}},Centered={render:Template,parameters:{docs:{description:{story:"To center a Stack's children both horizontally and vertically at the same time simple set both the alignment and distribution props to 'center'. This works for horizontal and vertical Stacks."}}},args:{alignment:"center",distribution:"center"}},Wrap={render:TemplateManyChildren,parameters:{docs:{description:{story:"If there are too many children to fit in the available horizontal space, set the 'wrap' property to true to allow children to wrap to the next row (also works for vertical Stacks with restricted height)."}}},args:{wrap:!0,gap:"4"}};Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Default stack direction."\n      }\n    }\n  },\n  args: {}\n}',...Horizontal.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Children can also be stacked vertically."\n      }\n    }\n  },\n  args: {\n    direction: "vertical"\n  }\n}',...Vertical.parameters?.docs?.source}}},GapHorizontal.parameters={...GapHorizontal.parameters,docs:{...GapHorizontal.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."\n      }\n    }\n  },\n  args: {\n    gap: "4"\n  }\n}',...GapHorizontal.parameters?.docs?.source}}},GapVertical.parameters={...GapVertical.parameters,docs:{...GapVertical.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."\n      }\n    }\n  },\n  args: {\n    direction: "vertical",\n    gap: "3"\n  }\n}',...GapVertical.parameters?.docs?.source}}},HorizontalAlignmentCenter.parameters={...HorizontalAlignmentCenter.parameters,docs:{...HorizontalAlignmentCenter.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "By specifying an alignment you can control how items are aligned vertically in a horizontal Stack. By default they will stretch to take up the full height. Another very useful alignmen ist \'center\', this will not stretch the children but make sure they are all aligned around the center axis. This is particularly useful when it doesn\'t make sense to stretch the items to the full height."\n      }\n    }\n  },\n  args: {\n    alignment: "center"\n  }\n}',...HorizontalAlignmentCenter.parameters?.docs?.source}}},VerticalAlignmentCenter.parameters={...VerticalAlignmentCenter.parameters,docs:{...VerticalAlignmentCenter.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "The same as above is true for vertical Stacks. But in this case the alignment property controls the alignment along the horizontal axis. By default items are stretched to the full width. Using \'center\' alignment causes the items to be aligned around the central axis."\n      }\n    }\n  },\n  args: {\n    direction: "vertical",\n    alignment: "center"\n  }\n}',...VerticalAlignmentCenter.parameters?.docs?.source}}},HorizontalAlignmentStart.parameters={...HorizontalAlignmentStart.parameters,docs:{...HorizontalAlignmentStart.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Setting the alignment to \'start\' will cause the items to be aligned to the top in a horizontal Stack."\n      }\n    }\n  },\n  args: {\n    alignment: "start"\n  }\n}',...HorizontalAlignmentStart.parameters?.docs?.source}}},VerticalAlignmentStart.parameters={...VerticalAlignmentStart.parameters,docs:{...VerticalAlignmentStart.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Setting the alignment to \'start\' will cause the items to be aligned to the left in a vertical Stack."\n      }\n    }\n  },\n  args: {\n    direction: "vertical",\n    alignment: "start"\n  }\n}',...VerticalAlignmentStart.parameters?.docs?.source}}},HorizontalDistributionCenter.parameters={...HorizontalDistributionCenter.parameters,docs:{...HorizontalDistributionCenter.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: \"The distribution along the horizontal axis in a horizontal Stack can be controlled via the 'distribution' property. Setting it to 'center' will cause the items to be aligned to the center of the horizontal axis.\"\n      }\n    }\n  },\n  args: {\n    distribution: \"center\"\n  }\n}",...HorizontalDistributionCenter.parameters?.docs?.source}}},VerticalDistributionCenter.parameters={...VerticalDistributionCenter.parameters,docs:{...VerticalDistributionCenter.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Setting the distribution to \'center\' in a vertical Stack will cause the items to be aligned to the center of the vertical axis."\n      }\n    }\n  },\n  args: {\n    direction: "vertical",\n    distribution: "center"\n  }\n}',...VerticalDistributionCenter.parameters?.docs?.source}}},Centered.parameters={...Centered.parameters,docs:{...Centered.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "To center a Stack\'s children both horizontally and vertically at the same time simple set both the alignment and distribution props to \'center\'. This works for horizontal and vertical Stacks."\n      }\n    }\n  },\n  args: {\n    alignment: "center",\n    distribution: "center"\n  }\n}',...Centered.parameters?.docs?.source}}},Wrap.parameters={...Wrap.parameters,docs:{...Wrap.parameters?.docs,source:{originalSource:'{\n  render: TemplateManyChildren,\n  parameters: {\n    docs: {\n      description: {\n        story: "If there are too many children to fit in the available horizontal space, set the \'wrap\' property to true to allow children to wrap to the next row (also works for vertical Stacks with restricted height)."\n      }\n    }\n  },\n  args: {\n    wrap: true,\n    gap: "4"\n  }\n}',...Wrap.parameters?.docs?.source}}};const __namedExportsOrder=["Horizontal","Vertical","GapHorizontal","GapVertical","HorizontalAlignmentCenter","VerticalAlignmentCenter","HorizontalAlignmentStart","VerticalAlignmentStart","HorizontalDistributionCenter","VerticalDistributionCenter","Centered","Wrap"]},"./src/components/Stack/Stack.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const baseStack=(direction,gap,wrap)=>`\n      ${"vertical"===direction?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}\n      ${wrap&&"jn-flex-wrap"}\n      ${(gap=>{switch(gap){case"0":default:return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96"}})(gap)}\n    `,alignItems=alignment=>{switch(alignment){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},justifyItems=distribution=>{switch(distribution){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},Stack=_ref=>{let{direction="horizontal",gap="0",alignment="stretch",distribution="start",wrap=!1,className="",children=null,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`juno-stack ${baseStack(direction,gap,wrap)} ${alignItems(alignment)} ${justifyItems(distribution)} ${className||""}`,...props,children})};Stack.displayName="Stack",Stack.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,direction:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["horizontal","vertical"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["start","end","center","baseline","stretch"]),distribution:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["start","end","center","between","around","evenly"]),wrap:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,gap:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"])},Stack.__docgenInfo={description:"A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.\nIn addition a gap can be defined which the Stack injects between its children so they have some margin from one another.",methods:[],displayName:"Stack",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},description:"Stack items horizontally or vertically",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]},required:!1},gap:{defaultValue:{value:'"0"',computed:!1},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",type:{name:"enum",value:[{value:'"0"',computed:!1},{value:'"px"',computed:!1},{value:'"0.5"',computed:!1},{value:'"1"',computed:!1},{value:'"1.5"',computed:!1},{value:'"2"',computed:!1},{value:'"2.5"',computed:!1},{value:'"3"',computed:!1},{value:'"3.5"',computed:!1},{value:'"4"',computed:!1},{value:'"5"',computed:!1},{value:'"6"',computed:!1},{value:'"7"',computed:!1},{value:'"8"',computed:!1},{value:'"9"',computed:!1},{value:'"10"',computed:!1},{value:'"11"',computed:!1},{value:'"12"',computed:!1},{value:'"14"',computed:!1},{value:'"16"',computed:!1},{value:'"20"',computed:!1},{value:'"24"',computed:!1},{value:'"28"',computed:!1},{value:'"32"',computed:!1},{value:'"36"',computed:!1},{value:'"40"',computed:!1},{value:'"44"',computed:!1},{value:'"48"',computed:!1},{value:'"52"',computed:!1},{value:'"56"',computed:!1},{value:'"60"',computed:!1},{value:'"64"',computed:!1},{value:'"72"',computed:!1},{value:'"80"',computed:!1},{value:'"96"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"stretch"',computed:!1},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"baseline"',computed:!1},{value:'"stretch"',computed:!1}]},required:!1},distribution:{defaultValue:{value:'"start"',computed:!1},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1},{value:'"between"',computed:!1},{value:'"around"',computed:!1},{value:'"evenly"',computed:!1}]},required:!1},wrap:{defaultValue:{value:"false",computed:!1},description:"Specify whether the Stack children should be allowed to wrap or not",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass css class names",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/Stack/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_Stack_component__WEBPACK_IMPORTED_MODULE_0__.B});var _Stack_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Stack/Stack.component.js")}}]);