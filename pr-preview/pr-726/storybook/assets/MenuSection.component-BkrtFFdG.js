import{j as t}from"./jsx-runtime-D6fbYt3N.js";const l=`
	jn-bg-theme-background-lvl-1
	jn-flex
	jn-flex-col
	jn-border-b
	jn-border-theme-background-lvl-3
	last:jn-border-b-0
`,r=`
	jn-text-xs
	jn-p-2
`,n=({title:e="",children:a,className:i="",...s})=>t.jsxs("div",{className:`juno-menu-section ${l} ${i}`,...s,children:[e?t.jsx("div",{className:`juno-menu-section-title ${r}`,children:e}):"",a]});try{n.displayName="MenuSection",n.__docgenInfo={description:"Use MenuSection to structure and sub-divide MenuItems in a menu. All but the last MenuSection will render a visible divider at the bottom. Optionally, a MenuSection can have a title.",displayName:"MenuSection",props:{children:{defaultValue:null,description:"The children to render in the MenuSection",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"Pass an optional section title",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{n as M};
