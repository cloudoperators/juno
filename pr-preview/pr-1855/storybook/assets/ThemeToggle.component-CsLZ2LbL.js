import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i}from"./StyleProvider.component-D_2Njxhc.js";import{r as a,t as o}from"./Icon.component-BlxvYbUQ.js";var s,c,l;function u(){return(u=e((()=>{t(),i(),a(),s=n(),c=`
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
`,l=({className:e=``,disabled:t=!1,id:n,name:i,onToggleTheme:a,...l})=>{let u=r.useStyles();u||console.warn(`Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.`);let{currentTheme:d,setThemeClass:f}=u||{};return(0,s.jsx)(o,{className:`juno-theme-toggle ${c} ${e}`,disabled:t,icon:d===`theme-light`?`nightsStay`:`wbSunny`,id:n,name:i,onClick:()=>{let e=d===`theme-dark`?`theme-light`:`theme-dark`;f&&f(e),a&&a(e)},...l})};try{l.displayName=`ThemeToggle`,l.__docgenInfo={description:`ThemeToggle is a button component that toggles between Light and Dark UI Themes.
This component requires a StyleProvider context to function, which is automatically provided by the Juno AppShell.
If not using the AppShell, include a StyleProvider manually.`,displayName:`ThemeToggle`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,methods:[],props:{className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`}],description:`Additional CSS classes for custom styling.`,name:`className`,parent:{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`}],description:`If true, the ThemeToggle will be disabled and not respond to user input.`,name:`disabled`,parent:{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`},required:!1,tags:{},type:{name:`boolean`}},id:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`}],description:`HTML id attribute for the ThemeToggle.`,name:`id`,parent:{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`},required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`}],description:`HTML name attribute for the ThemeToggle.`,name:`name`,parent:{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`},required:!1,tags:{},type:{name:`string`}},onToggleTheme:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`}],description:`Callback function that is called when the theme is toggled.`,name:`onToggleTheme`,parent:{fileName:`ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx`,name:`ThemeToggleProps`},required:!1,tags:{},type:{name:`((newTheme: string) => void)`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/wip-themetoggle--docs
{@link ThemeToggleProps }`}}}catch{}})))()}export{u as n,l as t};