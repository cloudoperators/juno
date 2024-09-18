"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[7721],{"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button_component__WEBPACK_IMPORTED_MODULE_0__.$});var _Button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.component.js")},"./src/components/Button/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultButtonInProgress:()=>DefaultButtonInProgress,DefaultButtonInProgressWithProgressLabel:()=>DefaultButtonInProgressWithProgressLabel,DefaultSize:()=>DefaultSize,DefaultWithIcon:()=>DefaultWithIcon,Disabled:()=>Disabled,DisabledInProgress:()=>DisabledInProgress,IconButtonInProgress:()=>IconButtonInProgress,IconOnlyAsChild:()=>IconOnlyAsChild,IconOnlyButton:()=>IconOnlyButton,LinkAsButton:()=>LinkAsButton,LinkAsButtonInProgress:()=>LinkAsButtonInProgress,LinkAsButtonWithIcon:()=>LinkAsButtonWithIcon,LinkAsButtonWithIconInProgress:()=>LinkAsButtonWithIconInProgress,Primary:()=>Primary,PrimaryButtonWithIconInProgress:()=>PrimaryButtonWithIconInProgress,PrimaryDanger:()=>PrimaryDanger,PrimaryDangerButtonInProgress:()=>PrimaryDangerButtonInProgress,PrimaryDangerDisabled:()=>PrimaryDangerDisabled,PrimaryDangerDisabledInProgress:()=>PrimaryDangerDisabledInProgress,PrimaryDisabled:()=>PrimaryDisabled,PrimaryDisabledInProgress:()=>PrimaryDisabledInProgress,Small:()=>Small,SmallInProgress:()=>SmallInProgress,SmallWithIcon:()=>SmallWithIcon,Subdued:()=>Subdued,SubduedButtonInProgress:()=>SubduedButtonInProgress,SubduedDisabled:()=>SubduedDisabled,SubduedWithIcon:()=>SubduedWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/index.js"),_Icon_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.js"),_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_index__WEBPACK_IMPORTED_MODULE_1__.$,argTypes:{icon:{options:["default",..._Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__.g],control:{type:"select"}},variant:{options:["default","primary","primary-danger","subdued"],control:{type:"select"}}}},Default={parameters:{docs:{description:{story:"The default button is a neutral button that can be used multiple times on a page"}}},args:{label:"Default"}},Subdued={parameters:{docs:{description:{story:"A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."}}},args:{variant:"subdued",label:"Subdued"}},Primary={parameters:{docs:{description:{story:"Only use the primary button **maximum once per page** for the preferred user action"}}},args:{variant:"primary",label:"Primary"}},PrimaryDanger={parameters:{docs:{description:{story:"Use this button sparingly and only for dangerous or destructive actions"}}},args:{variant:"primary-danger",label:"Primary Danger"}},DefaultSize={args:{label:"Default"}},Small={args:{size:"small",label:"Small"}},Disabled={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...Default.args,label:"Default Disabled",disabled:!0}},SubduedDisabled={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...Subdued.args,label:"Subdued Disabled",disabled:!0}},PrimaryDisabled={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...Primary.args,label:"Primary Disabled",disabled:!0}},PrimaryDangerDisabled={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:{...PrimaryDanger.args,disabled:!0}},DefaultWithIcon={parameters:{docs:{story:"Default Button with icon"}},args:{...Default.args,label:"Default with Icon",icon:"warning"}},SubduedWithIcon={parameters:{docs:{description:{story:"Subdued Button with Icon"}}},args:{...Subdued.args,icon:"warning",label:"Subdued with Icon"}},SmallWithIcon={parameters:{docs:{description:{story:"Small Button with Icon"}}},args:{...Small.args,icon:"warning"}},IconOnlyButton={docs:{description:{story:"A button with a Icon but no label. The icon name can be passed as a prop."}},args:{icon:"warning"}},IconOnlyAsChild={docs:{description:{story:"A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though."}}};IconOnlyAsChild.args={children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_index_js__WEBPACK_IMPORTED_MODULE_2__.I,null)};const LinkAsButton={parameters:{docs:{description:{story:'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons'}}},args:{...Primary.args,label:"Link as button",href:"#link"}},LinkAsButtonWithIcon={parameters:{docs:{description:{story:"Link styled as a button including an icon."}}},args:{...Primary.args,icon:"warning",label:"Link as button with Icon",href:"#"}},DefaultButtonInProgress={parameters:{docs:{description:{story:"Default Button with an action in progress"}}},args:{...Default.args,progress:!0}},IconButtonInProgress={parameters:{docs:{description:{story:"Icon Button with an action in progress"}}},args:{...Default.args,label:"Default with Icon",icon:"warning",progress:!0}},DefaultButtonInProgressWithProgressLabel={parameters:{docs:{description:{story:"Default Button with an action in oprogress and an alternate label while in progress"}}},args:{...Default.args,label:"Default with Icon",icon:"warning",progress:!0,progressLabel:"In Progress…"}},SubduedButtonInProgress={parameters:{docs:{description:{story:"Subdued Button with an action in progress"}}},args:{...Subdued.args,progress:!0,progressLabel:"Subdued Button in Progress…"}},PrimaryButtonWithIconInProgress={parameters:{docs:{description:{story:"Primary Button with action in progress"}}},args:{...Primary.args,progress:!0,progressLabel:"Primary Button in Progress…"}},PrimaryDangerButtonInProgress={parameters:{docs:{description:{story:"Primary Danger Button with action in progress"}}},args:{...PrimaryDanger.args,progress:!0,progressLabel:"Primary Danger Button in Progress…"}},LinkAsButtonInProgress={parameters:{docs:{description:{story:"Link as button with action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...LinkAsButton.args,progress:!0,progressLabel:"Link as button in Progress…"}},LinkAsButtonWithIconInProgress={parameters:{docs:{description:{story:"Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...LinkAsButtonWithIcon.args,progress:!0,progressLabel:"Link as button with Icon in Progress…"}},DisabledInProgress={parameters:{docs:{description:{story:"Disabled Default Button in Progress"}}},args:{...Disabled.args,progress:!0}},PrimaryDisabledInProgress={parameters:{docs:{description:{story:"Disabled Primnary Button with action in progress"}}},args:{...PrimaryDisabled.args,progress:!0,progressLabel:"Disabled Primary Button in Progress…"}},PrimaryDangerDisabledInProgress={parameters:{docs:{description:{story:"Disabled Primary Danger Button in Progress…"}}},args:{...PrimaryDangerDisabled.args,progress:!0,progressLabel:"Disabled Primary Danger Button in Progress…"}},SmallInProgress={parameters:{docs:{description:{story:"Small Button in Progress"}}},args:{...Small.args,progress:!0,progressLabel:"Small in Progress…"}},__namedExportsOrder=["Default","Subdued","Primary","PrimaryDanger","DefaultSize","Small","Disabled","SubduedDisabled","PrimaryDisabled","PrimaryDangerDisabled","DefaultWithIcon","SubduedWithIcon","SmallWithIcon","IconOnlyButton","IconOnlyAsChild","LinkAsButton","LinkAsButtonWithIcon","DefaultButtonInProgress","IconButtonInProgress","DefaultButtonInProgressWithProgressLabel","SubduedButtonInProgress","PrimaryButtonWithIconInProgress","PrimaryDangerButtonInProgress","LinkAsButtonInProgress","LinkAsButtonWithIconInProgress","DisabledInProgress","PrimaryDisabledInProgress","PrimaryDangerDisabledInProgress","SmallInProgress"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "The default button is a neutral button that can be used multiple times on a page"\n      }\n    }\n  },\n  args: {\n    label: "Default"\n  }\n}',...Default.parameters?.docs?.source}}},Subdued.parameters={...Subdued.parameters,docs:{...Subdued.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."\n      }\n    }\n  },\n  args: {\n    variant: "subdued",\n    label: "Subdued"\n  }\n}',...Subdued.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Only use the primary button **maximum once per page** for the preferred user action"\n      }\n    }\n  },\n  args: {\n    variant: "primary",\n    label: "Primary"\n  }\n}',...Primary.parameters?.docs?.source}}},PrimaryDanger.parameters={...PrimaryDanger.parameters,docs:{...PrimaryDanger.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Use this button sparingly and only for dangerous or destructive actions"\n      }\n    }\n  },\n  args: {\n    variant: "primary-danger",\n    label: "Primary Danger"\n  }\n}',...PrimaryDanger.parameters?.docs?.source}}},DefaultSize.parameters={...DefaultSize.parameters,docs:{...DefaultSize.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Default"\n  }\n}',...DefaultSize.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "small",\n    label: "Small"\n  }\n}',...Small.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable any button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default Disabled",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},SubduedDisabled.parameters={...SubduedDisabled.parameters,docs:{...SubduedDisabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable any button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...Subdued.args,\n    label: "Subdued Disabled",\n    disabled: true\n  }\n}',...SubduedDisabled.parameters?.docs?.source}}},PrimaryDisabled.parameters={...PrimaryDisabled.parameters,docs:{...PrimaryDisabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable any button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    label: "Primary Disabled",\n    disabled: true\n  }\n}',...PrimaryDisabled.parameters?.docs?.source}}},PrimaryDangerDisabled.parameters={...PrimaryDangerDisabled.parameters,docs:{...PrimaryDangerDisabled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disable a Primary Danger button by adding `disabled` to it."\n      }\n    }\n  },\n  args: {\n    ...PrimaryDanger.args,\n    disabled: true\n  }\n}',...PrimaryDangerDisabled.parameters?.docs?.source}}},DefaultWithIcon.parameters={...DefaultWithIcon.parameters,docs:{...DefaultWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      story: "Default Button with icon"\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default with Icon",\n    icon: "warning"\n  }\n}',...DefaultWithIcon.parameters?.docs?.source}}},SubduedWithIcon.parameters={...SubduedWithIcon.parameters,docs:{...SubduedWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Subdued Button with Icon"\n      }\n    }\n  },\n  args: {\n    ...Subdued.args,\n    icon: "warning",\n    label: "Subdued with Icon"\n  }\n}',...SubduedWithIcon.parameters?.docs?.source}}},SmallWithIcon.parameters={...SmallWithIcon.parameters,docs:{...SmallWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Small Button with Icon"\n      }\n    }\n  },\n  args: {\n    ...Small.args,\n    icon: "warning"\n  }\n}',...SmallWithIcon.parameters?.docs?.source}}},IconOnlyButton.parameters={...IconOnlyButton.parameters,docs:{...IconOnlyButton.parameters?.docs,source:{originalSource:"{}",...IconOnlyButton.parameters?.docs?.source}}},IconOnlyAsChild.parameters={...IconOnlyAsChild.parameters,docs:{...IconOnlyAsChild.parameters?.docs,source:{originalSource:"{}",...IconOnlyAsChild.parameters?.docs?.source}}},LinkAsButton.parameters={...LinkAsButton.parameters,docs:{...LinkAsButton.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: \'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons\'\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    label: "Link as button",\n    href: "#link"\n  }\n}',...LinkAsButton.parameters?.docs?.source}}},LinkAsButtonWithIcon.parameters={...LinkAsButtonWithIcon.parameters,docs:{...LinkAsButtonWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Link styled as a button including an icon."\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    icon: "warning",\n    label: "Link as button with Icon",\n    href: "#"\n  }\n}',...LinkAsButtonWithIcon.parameters?.docs?.source}}},DefaultButtonInProgress.parameters={...DefaultButtonInProgress.parameters,docs:{...DefaultButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Default Button with an action in progress"\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    progress: true\n  }\n}',...DefaultButtonInProgress.parameters?.docs?.source}}},IconButtonInProgress.parameters={...IconButtonInProgress.parameters,docs:{...IconButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Icon Button with an action in progress"\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default with Icon",\n    icon: "warning",\n    progress: true\n  }\n}',...IconButtonInProgress.parameters?.docs?.source}}},DefaultButtonInProgressWithProgressLabel.parameters={...DefaultButtonInProgressWithProgressLabel.parameters,docs:{...DefaultButtonInProgressWithProgressLabel.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Default Button with an action in oprogress and an alternate label while in progress"\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    label: "Default with Icon",\n    icon: "warning",\n    progress: true,\n    progressLabel: "In Progress…"\n  }\n}',...DefaultButtonInProgressWithProgressLabel.parameters?.docs?.source}}},SubduedButtonInProgress.parameters={...SubduedButtonInProgress.parameters,docs:{...SubduedButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Subdued Button with an action in progress"\n      }\n    }\n  },\n  args: {\n    ...Subdued.args,\n    progress: true,\n    progressLabel: "Subdued Button in Progress…"\n  }\n}',...SubduedButtonInProgress.parameters?.docs?.source}}},PrimaryButtonWithIconInProgress.parameters={...PrimaryButtonWithIconInProgress.parameters,docs:{...PrimaryButtonWithIconInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Primary Button with action in progress"\n      }\n    }\n  },\n  args: {\n    ...Primary.args,\n    progress: true,\n    progressLabel: "Primary Button in Progress…"\n  }\n}',...PrimaryButtonWithIconInProgress.parameters?.docs?.source}}},PrimaryDangerButtonInProgress.parameters={...PrimaryDangerButtonInProgress.parameters,docs:{...PrimaryDangerButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Primary Danger Button with action in progress"\n      }\n    }\n  },\n  args: {\n    ...PrimaryDanger.args,\n    progress: true,\n    progressLabel: "Primary Danger Button in Progress…"\n  }\n}',...PrimaryDangerButtonInProgress.parameters?.docs?.source}}},LinkAsButtonInProgress.parameters={...LinkAsButtonInProgress.parameters,docs:{...LinkAsButtonInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Link as button with action in progress. Should hardly ever be used, just to check consistent styling."\n      }\n    }\n  },\n  args: {\n    ...LinkAsButton.args,\n    progress: true,\n    progressLabel: "Link as button in Progress…"\n  }\n}',...LinkAsButtonInProgress.parameters?.docs?.source}}},LinkAsButtonWithIconInProgress.parameters={...LinkAsButtonWithIconInProgress.parameters,docs:{...LinkAsButtonWithIconInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."\n      }\n    }\n  },\n  args: {\n    ...LinkAsButtonWithIcon.args,\n    progress: true,\n    progressLabel: "Link as button with Icon in Progress…"\n  }\n}',...LinkAsButtonWithIconInProgress.parameters?.docs?.source}}},DisabledInProgress.parameters={...DisabledInProgress.parameters,docs:{...DisabledInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Default Button in Progress"\n      }\n    }\n  },\n  args: {\n    ...Disabled.args,\n    progress: true\n  }\n}',...DisabledInProgress.parameters?.docs?.source}}},PrimaryDisabledInProgress.parameters={...PrimaryDisabledInProgress.parameters,docs:{...PrimaryDisabledInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Primnary Button with action in progress"\n      }\n    }\n  },\n  args: {\n    ...PrimaryDisabled.args,\n    progress: true,\n    progressLabel: "Disabled Primary Button in Progress…"\n  }\n}',...PrimaryDisabledInProgress.parameters?.docs?.source}}},PrimaryDangerDisabledInProgress.parameters={...PrimaryDangerDisabledInProgress.parameters,docs:{...PrimaryDangerDisabledInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Disabled Primary Danger Button in Progress…"\n      }\n    }\n  },\n  args: {\n    ...PrimaryDangerDisabled.args,\n    progress: true,\n    progressLabel: "Disabled Primary Danger Button in Progress…"\n  }\n}',...PrimaryDangerDisabledInProgress.parameters?.docs?.source}}},SmallInProgress.parameters={...SmallInProgress.parameters,docs:{...SmallInProgress.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Small Button in Progress"\n      }\n    }\n  },\n  args: {\n    ...Small.args,\n    progress: true,\n    progressLabel: "Small in Progress…"\n  }\n}',...SmallInProgress.parameters?.docs?.source}}}}}]);