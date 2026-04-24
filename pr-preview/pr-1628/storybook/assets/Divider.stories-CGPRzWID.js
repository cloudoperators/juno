import{r as p,j as n}from"./iframe-CvtqV34U.js";import"./preload-helper-PPVm8Dsz.js";const i=e=>{switch(e){case"0":return"jn:py-0";case"px":return"jn:py-px";case"0.5":return"jn:py-0.5";case"1":return"jn:py-1";case"1.5":return"jn:py-1.5";case"2":return"jn:py-2";case"2.5":return"jn:py-2.5";case"3":return"jn:py-3";case"3.5":return"jn:py-3.5";case"4":return"jn:py-4";case"5":return"jn:py-5";case"6":return"jn:py-6";case"7":return"jn:py-7";case"8":return"jn:py-8";case"9":return"jn:py-9";case"10":return"jn:py-10";case"11":return"jn:py-11";case"12":return"jn:py-12";case"14":return"jn:py-14";case"16":return"jn:py-16";case"20":return"jn:py-20";case"24":return"jn:py-24";case"28":return"jn:py-28";case"32":return"jn:py-32";case"36":return"jn:py-36";case"40":return"jn:py-40";case"44":return"jn:py-44";case"48":return"jn:py-48";case"52":return"jn:py-52";case"56":return"jn:py-56";case"60":return"jn:py-60";case"64":return"jn:py-64";case"72":return"jn:py-72";case"80":return"jn:py-80";case"96":return"jn:py-96";default:return"jn:py-1"}},s=p.forwardRef(({className:e="",color:t,spacing:c="1",...o},u)=>n.jsx("div",{ref:u,className:`juno-divider juno-divider-wrapper ${i(c)} ${e}`,...o,children:n.jsx("hr",{className:`juno-divider-separator jn:h-px ${t??"jn:border-theme-divider"}`})}));s.displayName="Divider";try{s.displayName="Divider",s.__docgenInfo={description:"",displayName:"Divider",props:{className:{defaultValue:{value:""},description:"Additional CSS class(es) to apply.",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Override the separator color. Pass a Tailwind `border-color` class, e.g. `jn:border-juno-blue-3`.",name:"color",required:!1,type:{name:"string"}},spacing:{defaultValue:{value:"1"},description:"Adjust vertical spacing around the separator. Accepts any Tailwind spacing token.",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"0"'},{value:'"0.5"'},{value:'"1"'},{value:'"1.5"'},{value:'"2"'},{value:'"2.5"'},{value:'"3"'},{value:'"3.5"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:'"14"'},{value:'"16"'},{value:'"20"'},{value:'"24"'},{value:'"28"'},{value:'"32"'},{value:'"36"'},{value:'"40"'},{value:'"44"'},{value:'"48"'},{value:'"52"'},{value:'"56"'},{value:'"60"'},{value:'"64"'},{value:'"72"'},{value:'"80"'},{value:'"96"'}]}}}}}catch{}const v={title:"Layout/Divider",component:s,argTypes:{className:{control:"text"},color:{control:"text"},spacing:{control:"text"}},decorators:[e=>n.jsx("div",{className:"jn:p-6",children:n.jsx(e,{})})],parameters:{docs:{description:{component:"A generic horizontal divider. Renders a 1px separator with an adjustable amount of vertical spacing."},source:{transform:e=>e.replace(/jn:/g,"")}}}},r={parameters:{docs:{description:{story:"Per default, `<Divider>` uses the default border color and one basic tw spacing unit (0.25rem/4px) in each vertical direction."}}},args:{}},a={parameters:{docs:{description:{story:"Use `color` to override the separator colour and `spacing` to adjust the vertical spacing."}}},args:{color:"jn:border-[rgb(220,0,150)]",spacing:"4"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Per default, \`<Divider>\` uses the default border color and one basic tw spacing unit (0.25rem/4px) in each vertical direction."
      }
    }
  },
  args: {}
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use \`color\` to override the separator colour and \`spacing\` to adjust the vertical spacing."
      }
    }
  },
  args: {
    color: "jn:border-[rgb(220,0,150)]",
    spacing: "4"
  }
}`,...a.parameters?.docs?.source}}};const j=["Default","CustomColourAndSpacing"];export{a as CustomColourAndSpacing,r as Default,j as __namedExportsOrder,v as default};
