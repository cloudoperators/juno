import{j as d}from"./jsx-runtime-BP6H2k8O.js";import"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";const p=`
	jn-flex
	jn-p-2
	jn-overflow-hidden
	jn-overflow-ellipsis
	jn-grow-0
	jn-shrink-0
	jn-flex-basis-auto
`,f=`
	jn-w-grid-col-1
`,m=`
	jn-w-grid-col-2
`,h=`
	jn-w-grid-col-3
`,w=`
	jn-w-grid-col-4
`,j=`
	jn-w-grid-col-6
`,g=`
	jn-w-grid-col-6
`,y=`
	jn-w-grid-col-7
`,_=`
	jn-w-grid-col-8
`,x=`
	jn-w-grid-col-9
`,b=`
	jn-w-grid-col-10
`,v=`
	jn-w-grid-col-11
`,C=`
	jn-w-grid-col-12
`,q=s=>{switch(s){case 1:return f;case 2:return m;case 3:return h;case 4:return w;case 5:return j;case 6:return g;case 7:return y;case 8:return _;case 9:return x;case 10:return b;case 11:return v;case 12:return C}},o=({cols:s=null,width:l=null,auto:t=!1,className:n="",children:r,...c})=>{const a={flexGrow:"1",flexShrink:"0",flexBasis:"0"},i=l?{width:l+"%",flexGrow:"0",flexShrink:"0",flexBasis:l+"%"}:{},u=l?i:t?a:{};return d.jsx("div",{className:`juno-datalist-cell ${p} ${s?q(s):""} ${n}`,style:u,...c,children:r})};o.propTypes={cols:e.number,width:e.number,auto:e.bool,className:e.string,children:e.node};o.__docgenInfo={description:"",methods:[],displayName:"DataListCell",props:{cols:{defaultValue:{value:"null",computed:!1},description:"The number of columns to span the column over when fitting to the grid.",type:{name:"number"},required:!1},width:{defaultValue:{value:"null",computed:!1},description:'The width in percent as a number without "%" for auto-layout grids TODO: or "auto". If a width is given, it will override the "cols" prop.',type:{name:"number"},required:!1},auto:{defaultValue:{value:"false",computed:!1},description:"Whether the colum should set an auto width",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},children:{description:"Children to render in the DataListCell",type:{name:"node"},required:!1}}};export{o as D};
