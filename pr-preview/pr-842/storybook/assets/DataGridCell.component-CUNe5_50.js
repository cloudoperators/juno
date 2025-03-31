import{j as o}from"./jsx-runtime-BP6H2k8O.js";import{e as f,r as h}from"./index-DysCNOs_.js";const g=`
	jn-grid
	jn-items-stretch
`,w=(e,a,l,t,r)=>{let n;if(r&&r.length>0)return n={gridTemplateColumns:r},n;let i="";return t&&Array.isArray(t)&&t.length>0?[...Array(e)].map((m,d)=>{i+=t.includes(d)?"min-content ":`minmax(${l}, ${a}) `}):i=`repeat(${e}, minmax(${l}, ${a}))`,n={gridTemplateColumns:i},n},y=f.createContext({}),x=()=>f.useContext(y),p=({columns:e=1,columnMaxSize:a="auto",columnMinSize:l="0px",minContentColumns:t,gridColumnTemplate:r,cellVerticalAlignment:n="center",className:i="",children:s,...m})=>{const d={cellVerticalAlignment:n};return o.jsx(y.Provider,{value:d,children:o.jsx("div",{className:`juno-datagrid ${g} ${i}`,style:w(e,a,l,t,r),role:"grid",...m,children:s})})};try{p.displayName="DataGrid",p.__docgenInfo={description:"The DataGrid component is the main way to display lists of items that have a bunch of metadata that you want to display.",displayName:"DataGrid",props:{columns:{defaultValue:{value:"1"},description:"Set number of columns",name:"columns",required:!1,type:{name:"number"}},columnMaxSize:{defaultValue:{value:"auto"},description:'Set column max sizing. Default: auto. For equally sized columns use "1fr"',name:"columnMaxSize",required:!1,type:{name:"string"}},columnMinSize:{defaultValue:{value:"0px"},description:"Set column minimum size. Default: 0px",name:"columnMinSize",required:!1,type:{name:"string"}},minContentColumns:{defaultValue:null,description:"Specify which columns should be sized by minimum content size (i.e. as small as possible). Pass an array of column numbers (first column is 0)",name:"minContentColumns",required:!1,type:{name:"number[]"}},gridColumnTemplate:{defaultValue:null,description:`Set the grid column template in CSS grid 'grid-template-columns' notation. If this prop is passed, all other template props (columns, columnMaxSize,
columnMinSize, minContentColumns) are ignored. The easiest case where you might need this is e.g. if you want to set specific column widths for some
or all columns, e.g. "20% auto auto 10%" (The first column is set to 20%, the next two to auto size, the last to 10%).`,name:"gridColumnTemplate",required:!1,type:{name:"string"}},cellVerticalAlignment:{defaultValue:{value:"center"},description:`Set the vertical alignment for all GridCells. Default: center. PLEASE NOTE: the center alignment is achieved by using a flexbox column layout,
which means that all child elements of the cell will be stacked vertically. To avoid this, wrap the elements in their own div`,name:"cellVerticalAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'}]}},children:{defaultValue:null,description:"Children to render in the DataGrid",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v=`
	jn-contents
`,c=h.forwardRef(({className:e="",children:a,...l},t)=>o.jsx("div",{className:`juno-datagrid-row ${v} ${e}`,role:"row",ref:t,...l,children:a}));c.displayName="DataGridRow";try{c.displayName="DataGridRow",c.__docgenInfo={description:"",displayName:"DataGridRow",props:{children:{defaultValue:null,description:"Children to render in the DataGridRow",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=(e,a)=>`
		${e?"jn-whitespace-nowrap":""}
		${a==="center"?`
				jn-justify-center
				jn-flex
				jn-flex-col		
			`:""}
		jn-px-5
		jn-py-3
		jn-border-b
		jn-border-theme-background-lvl-2
		jn-h-full
	`,j=e=>{let a;return e&&(a={gridColumn:`span ${e} / span ${e}`}),a},u=h.forwardRef(({colSpan:e,nowrap:a=!1,className:l="",children:t,...r},n)=>{const s=(x()||{}).cellVerticalAlignment;return o.jsx("div",{className:`juno-datagrid-cell ${_(a,s)} ${l}`,style:j(e),role:"gridcell",ref:n,...r,children:t})});u.displayName="DataGridCell";try{u.displayName="DataGridCell",u.__docgenInfo={description:"",displayName:"DataGridCell",props:{colSpan:{defaultValue:null,description:"Add a col span to the cell. This works like a colspan in a normal html table, so you have to take care not to place too many cells in a row if some of them have a colspan.",name:"colSpan",required:!1,type:{name:"number"}},nowrap:{defaultValue:{value:"false"},description:"Set nowrap to true if the cell content shouldn't wrap (this is achieved by adding white-space: nowrap;)",name:"nowrap",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children to render in the DataGridCell",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{p as D,c as a,u as b};
