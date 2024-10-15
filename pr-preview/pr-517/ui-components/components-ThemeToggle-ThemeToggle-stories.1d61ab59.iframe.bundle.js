"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3503],{"./src/deprecated_js/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js")},"./src/components/ThemeToggle/ThemeToggle.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ThemeToggle_stories});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),StyleProvider=__webpack_require__("./src/components/StyleProvider/index.js"),Icon=__webpack_require__("./src/deprecated_js/Icon/index.js");__webpack_require__("./src/components/ThemeToggle/themeToggle.scss");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ThemeToggle=_ref=>{let{className="",disabled=!1,id,name,onToggleTheme,...props}=_ref;const ThemeContext=StyleProvider.N.useStyles();ThemeContext||console.warn("Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.");const{currentTheme,setThemeClass}=ThemeContext||{};return react.createElement(Icon.I,_extends({className:`juno-theme-toggle \n  jn-inline-flex \n  jn-justify-center \n  jn-items-center\n  jn-rounded\n  jn-py-[0.4375rem]\n  jn-px-[0.625rem]\n  hover:jn-text-theme-accent\n  focus:jn-outline-none \n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n  focus-visible:jn-ring-offset-1\n  focus-visible:jn-ring-offset-theme-focus\n  disabled:jn-opacity-50\n  disabled:jn-cursor-not-allowed\n  active:jn-bg-theme-background-lvl-4\n ${className}`,disabled,icon:"theme-light"===currentTheme?"nightsStay":"wbSunny",id,name,onClick:()=>{const newTheme="theme-dark"===currentTheme?"theme-light":"theme-dark";setThemeClass&&setThemeClass(newTheme),onToggleTheme&&onToggleTheme(newTheme)}},props))};ThemeToggle.propTypes={className:prop_types_default().string,disabled:prop_types_default().bool,id:prop_types_default().string,name:prop_types_default().string,onToggleTheme:prop_types_default().func},ThemeToggle.__docgenInfo={description:"A Toggle button to toggle Light and Dark UI Themes.\nRequires a StyleProvider context, which is automatically provided by the Juno AppShell.\nIf you are not using AppShell, include  a StyleProvider manually.",methods:[],displayName:"ThemeToggle",props:{className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the ThemeToggle is disabled",type:{name:"bool"},required:!1},id:{description:"Optional of the ThemeToggle",type:{name:"string"},required:!1},name:{description:"Optional name attribute of the ThemeToggle",type:{name:"string"},required:!1},onToggleTheme:{description:"Handler to execute when the theme is toggled",type:{name:"func"},required:!1}}};const ThemeToggle_stories={title:"WIP/ThemeToggle",component:ThemeToggle,argTypes:{}},Default={parameters:{},args:{}},Disabled={args:{disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  parameters: {},\n  args: {}\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}},"./src/components/ThemeToggle/themeToggle.scss":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juno-theme-toggle:hover svg{color:var(--color-accent)}","",{version:3,sources:["webpack://./src/components/ThemeToggle/themeToggle.scss"],names:[],mappings:"AAEI,6BACE,yBAAA",sourcesContent:[".juno-theme-toggle {\n  &:hover {\n    svg {\n      color: var(--color-accent);\n    }\n  }\n}\n"],sourceRoot:""}])}}]);