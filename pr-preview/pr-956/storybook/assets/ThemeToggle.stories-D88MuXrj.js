import{c as j,j as v}from"./iframe-CEZqkFCg.js";import{I as S}from"./Icon.component-DUX6NYcJ.js";const x=`
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
`,n=({className:a="",disabled:p=!1,id:f,name:T,onToggleTheme:o,...y})=>{const s=j.useStyles();s||console.warn("Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.");const{currentTheme:r,setThemeClass:l}=s||{},b=()=>{const i=r==="theme-dark"?"theme-light":"theme-dark";l&&l(i),o&&o(i)};return v.jsx(S,{className:`juno-theme-toggle ${x} ${a}`,disabled:p,icon:r==="theme-light"?"nightsStay":"wbSunny",id:f,name:T,onClick:b,...y})};try{n.displayName="ThemeToggle",n.__docgenInfo={description:`ThemeToggle is a button component that toggles between Light and Dark UI Themes.
This component requires a StyleProvider context to function, which is automatically provided by the Juno AppShell.
If not using the AppShell, include a StyleProvider manually.`,displayName:"ThemeToggle",props:{className:{defaultValue:{value:""},description:"Additional CSS classes for custom styling.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"If true, the ThemeToggle will be disabled and not respond to user input.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"HTML id attribute for the ThemeToggle.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"HTML name attribute for the ThemeToggle.",name:"name",required:!1,type:{name:"string"}},onToggleTheme:{defaultValue:null,description:"Callback function that is called when the theme is toggled.",name:"onToggleTheme",required:!1,type:{name:"((newTheme: string) => void)"}}}}}catch{}const k={title:"WIP/ThemeToggle",component:n,argTypes:{}},e={parameters:{},args:{}},t={args:{disabled:!0}};var d,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {},
  args: {}
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const q=["Default","Disabled"];export{e as Default,t as Disabled,q as __namedExportsOrder,k as default};
