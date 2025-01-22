import{j}from"./jsx-runtime-D6fbYt3N.js";import{S}from"./StyleProvider.component-DhPcjPxq.js";import{I as v}from"./Icon.component-BzIpr4Ej.js";import"./index-DysCNOs_.js";import"./ShadowRoot.component-CLRhA7vg.js";import"./index-DxCGxluL.js";import"./widgets-BR6-ubtP.js";const x=`
  jn-inline-flex 
  jn-justify-center 
  jn-items-center
  jn-rounded
  jn-py-[0.4375rem]
  jn-px-[0.625rem]
  hover:jn-text-theme-accent
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
  active:jn-bg-theme-background-lvl-4
`,n=({className:o="",disabled:h=!1,id:f,name:T,onToggleTheme:r,...y})=>{const a=S.useStyles();a||console.warn("Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually.");const{currentTheme:s,setThemeClass:l}=a||{},b=()=>{const i=s==="theme-dark"?"theme-light":"theme-dark";l&&l(i),r&&r(i)};return j.jsx(v,{className:`juno-theme-toggle ${x} ${o}`,disabled:h,icon:s==="theme-light"?"nightsStay":"wbSunny",id:f,name:T,onClick:b,...y})};try{n.displayName="ThemeToggle",n.__docgenInfo={description:`ThemeToggle is a button component that toggles between Light and Dark UI Themes.
This component requires a StyleProvider context to function, which is automatically provided by the Juno AppShell.
If not using the AppShell, include a StyleProvider manually.`,displayName:"ThemeToggle",props:{className:{defaultValue:{value:""},description:"Additional CSS classes for custom styling.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"If true, the ThemeToggle will be disabled and not respond to user input.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"HTML id attribute for the ThemeToggle.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"HTML name attribute for the ThemeToggle.",name:"name",required:!1,type:{name:"string"}},onToggleTheme:{defaultValue:null,description:"Callback function that is called when the theme is toggled.",name:"onToggleTheme",required:!1,type:{name:"((...args: unknown[]) => void)"}}}}}catch{}const D={title:"WIP/ThemeToggle",component:n,argTypes:{}},e={parameters:{},args:{}},t={args:{disabled:!0}};var m,d,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {},
  args: {}
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,g,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const N=["Default","Disabled"];export{e as Default,t as Disabled,N as __namedExportsOrder,D as default};
