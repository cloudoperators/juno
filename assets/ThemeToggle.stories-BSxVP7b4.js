import{c as h,j as p}from"./iframe-_yBfUwAN.js";import{I as f}from"./Icon.component-CVW86RNb.js";import"./preload-helper-PPVm8Dsz.js";const T=`
  jn:inline-flex 
  jn:justify-center 
  jn:items-center
  jn:rounded
  jn:py-[0.4375rem]
  jn:px-[0.625rem]
  jn:hover:text-theme-accent
  jn:focus:outline-hidden 
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
  jn:active:bg-theme-background-lvl-4
`,n=({className:a="",disabled:d=!1,id:m,name:c,onToggleTheme:o,...u})=>{const r=h.useStyles();r||console.warn("Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.");const{currentTheme:s,setThemeClass:l}=r||{},g=()=>{const i=s==="theme-dark"?"theme-light":"theme-dark";l&&l(i),o&&o(i)};return p.jsx(f,{className:`juno-theme-toggle ${T} ${a}`,disabled:d,icon:s==="theme-light"?"nightsStay":"wbSunny",id:m,name:c,onClick:g,...u})};try{n.displayName="ThemeToggle",n.__docgenInfo={description:`ThemeToggle is a button component that toggles between Light and Dark UI Themes.
This component requires a StyleProvider context to function, which is automatically provided by the Juno AppShell.
If not using the AppShell, include a StyleProvider manually.`,displayName:"ThemeToggle",props:{className:{defaultValue:{value:""},description:"Additional CSS classes for custom styling.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"If true, the ThemeToggle will be disabled and not respond to user input.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"HTML id attribute for the ThemeToggle.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"HTML name attribute for the ThemeToggle.",name:"name",required:!1,type:{name:"string"}},onToggleTheme:{defaultValue:null,description:"Callback function that is called when the theme is toggled.",name:"onToggleTheme",required:!1,type:{name:"((newTheme: string) => void)"}}}}}catch{}const v={title:"WIP/ThemeToggle",component:n,argTypes:{}},e={parameters:{},args:{}},t={args:{disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {},
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const S=["Default","Disabled"];export{e as Default,t as Disabled,S as __namedExportsOrder,v as default};
