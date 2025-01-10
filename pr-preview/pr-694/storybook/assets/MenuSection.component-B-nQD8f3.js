import{j as n}from"./jsx-runtime-D6fbYt3N.js";const s=`
	jn-bg-theme-background-lvl-1
	jn-flex
	jn-flex-col
	jn-border-b
	jn-border-theme-background-lvl-3
	last:jn-border-b-0
`,r=`
	jn-text-xs
	jn-p-2
`,t=({title:e="",children:a=null,className:l="",...i})=>n.jsxs("div",{className:`juno-menu-section ${s} ${l}`,...i,children:[e?n.jsx("div",{className:`juno-menu-section-title ${r}`,children:e}):"",a]});try{t.displayName="MenuSection",t.__docgenInfo={description:"Use MenuSection to structure and sub-divide MenuItems in a menu. All but the last MenuSection will render a visible divider at the bottom. Optionally, a MenuSection can have a title.",displayName:"MenuSection",props:{children:{defaultValue:{value:"null"},description:"The children to render in the MenuSection",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"Pass an optional section title",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{t as M};
