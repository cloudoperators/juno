import{g as e,m as t}from"./iframe-Cx-zHds2.js";import{t as n}from"./Icon.component-hvX4Q9Gp.js";import"react";var r=e(),i=`
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
`,a=({className:e=``,disabled:a=!1,id:o,name:s,onToggleTheme:c,...l})=>{let u=t.useStyles();u||console.warn(`Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.`);let{currentTheme:d,setThemeClass:f}=u||{};return(0,r.jsx)(n,{className:`juno-theme-toggle ${i} ${e}`,disabled:a,icon:d===`theme-light`?`nightsStay`:`wbSunny`,id:o,name:s,onClick:()=>{let e=d===`theme-dark`?`theme-light`:`theme-dark`;f&&f(e),c&&c(e)},...l})};try{a.displayName=`ThemeToggle`,a.__docgenInfo={description:`ThemeToggle is a button component that toggles between Light and Dark UI Themes.
This component requires a StyleProvider context to function, which is automatically provided by the Juno AppShell.
If not using the AppShell, include a StyleProvider manually.`,displayName:`ThemeToggle`,props:{className:{defaultValue:{value:``},description:`Additional CSS classes for custom styling.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`If true, the ThemeToggle will be disabled and not respond to user input.`,name:`disabled`,required:!1,type:{name:`boolean`}},id:{defaultValue:null,description:`HTML id attribute for the ThemeToggle.`,name:`id`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:`HTML name attribute for the ThemeToggle.`,name:`name`,required:!1,type:{name:`string`}},onToggleTheme:{defaultValue:null,description:`Callback function that is called when the theme is toggled.`,name:`onToggleTheme`,required:!1,type:{name:`((newTheme: string) => void)`}}}}}catch{}var o={title:`WIP/ThemeToggle`,component:a,argTypes:{}},s={parameters:{},args:{}},c={args:{disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {},
  args: {}
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Disabled`];export{s as Default,c as Disabled,l as __namedExportsOrder,o as default};