import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t,m as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";e();var i=t(),a=`
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
`,o=({className:e=``,disabled:t=!1,id:o,name:s,onToggleTheme:c,...l})=>{let u=n.useStyles();u||console.warn(`Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.`);let{currentTheme:d,setThemeClass:f}=u||{};return(0,i.jsx)(r,{className:`juno-theme-toggle ${a} ${e}`,disabled:t,icon:d===`theme-light`?`nightsStay`:`wbSunny`,id:o,name:s,onClick:()=>{let e=d===`theme-dark`?`theme-light`:`theme-dark`;f&&f(e),c&&c(e)},...l})};try{o.displayName=`ThemeToggle`,o.__docgenInfo={description:`ThemeToggle is a button component that toggles between Light and Dark UI Themes.
This component requires a StyleProvider context to function, which is automatically provided by the Juno AppShell.
If not using the AppShell, include a StyleProvider manually.`,displayName:`ThemeToggle`,props:{className:{defaultValue:{value:``},description:`Additional CSS classes for custom styling.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`If true, the ThemeToggle will be disabled and not respond to user input.`,name:`disabled`,required:!1,type:{name:`boolean`}},id:{defaultValue:null,description:`HTML id attribute for the ThemeToggle.`,name:`id`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:`HTML name attribute for the ThemeToggle.`,name:`name`,required:!1,type:{name:`string`}},onToggleTheme:{defaultValue:null,description:`Callback function that is called when the theme is toggled.`,name:`onToggleTheme`,required:!1,type:{name:`((newTheme: string) => void)`}}}}}catch{}var s={title:`WIP/ThemeToggle`,component:o,argTypes:{}},c={parameters:{},args:{}},l={args:{disabled:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {},
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Disabled`];export{c as Default,l as Disabled,u as __namedExportsOrder,s as default};