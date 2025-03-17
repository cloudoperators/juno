import{j as l}from"./jsx-runtime-D6fbYt3N.js";import"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{I as f}from"./Icon.component-BXxTB2S-.js";const c=`
	jn-inline-flex
	jn-basis-auto
	jn-shrink
	jn-items-center
	jn-flex-nowrap
	jn-text-xs
	jn-p-px
	jn-border
	jn-rounded
	jn-mr-2
	jn-border-theme-filter-pill
	last:jn-mr-0
`,m=`
	jn-bg-theme-filter-pill-key
	jn-px-1
	jn-py-0.5
	jn-rounded-sm
  jn-text-theme-high
	jn-inline-block
`,h=`
	jn-px-1
	jn-py-0.5
	jn-text-theme-high
	jn-inline-block
`,n=({uid:s="",filterKey:t="",filterKeyLabel:r="",filterValue:a="",filterValueLabel:o="",onClose:i=void 0,className:u="",...d})=>{const p=()=>{i&&i(s||t)};return l.jsxs("div",{className:`juno-filterpill ${c} ${u}`,...d,children:[l.jsx("span",{className:`${m}`,children:r||t}),l.jsx("span",{className:`${h}`,children:o||a}),l.jsx(f,{icon:"close",size:"18",onClick:p})]})};n.propTypes={uid:e.string,filterKey:e.string.isRequired,filterKeyLabel:e.string,filterValue:e.string.isRequired,filterValueLabel:e.string,className:e.string,onClose:e.func};n.__docgenInfo={description:`-- Deprecated. For new implementations, use Pill instead.--\\n
A Pill to represent Key and Value of a filter. Can be closed to un-apply the filter represented.
Mostly to be used inside a Filters component in conjunction with FilterInput.`,methods:[],displayName:"FilterPill",props:{uid:{defaultValue:{value:'""',computed:!1},description:"The unique identifier of the pill. Returned by the onClose callback",type:{name:"string"},required:!1},filterKey:{defaultValue:{value:'""',computed:!1},description:"The key of the filter the pill represents. Returned by the onClose callback if uid undefined",type:{name:"string"},required:!1},filterKeyLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the filter key. If not set filterKey is used",type:{name:"string"},required:!1},filterValue:{defaultValue:{value:'""',computed:!1},description:"The value of filter the pill represents",type:{name:"string"},required:!1},filterValueLabel:{defaultValue:{value:'""',computed:!1},description:"The visible label to describe the filter value. If not set filterValue is used",type:{name:"string"},required:!1},onClose:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed when closing the FilterPill",type:{name:"func"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"add custom classNames",type:{name:"string"},required:!1}}};export{n as F};
