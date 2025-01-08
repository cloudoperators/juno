import{j as r}from"./jsx-runtime-D6fbYt3N.js";import{r as s}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{F as Q}from"./FilterInput.component-BqazKUJq.js";import{F as U}from"./FilterPill.component-BPbXn-S9.js";import{S as C}from"./SearchInput.component-DfEpFdaj.js";import"./Icon.component-BXxTB2S-.js";import"./widgets-BR6-ubtP.js";import"./Spinner.component-CxM1ZFOh.js";import"./TextInput.component-Dwyrf7KM.js";import"./FormHint.component-BiIM_CZV.js";import"./Icon.component-C0iYw0aN.js";import"./Stack.component-B4IgElTG.js";const X=`
	jn-mb-px
	jn-bg-theme-filters
	jn-rounded-t
	jn-pt-4
	jn-px-4
	jn-pb-2
`,Y=`
	jn-w-full
	jn-flex
	jn-mb-2
`,Z=`
	jn-ml-auto
`,ee=`
	jn-flex
	jn-flex-wrap
`,re=`
	jn-text-theme-error
	jn-text-sm
	jn-mt-[-0.25rem]
	jn-mb-1.5
`,f=({search:t=null,filters:l=null,selectedFilterKey:a="",onSelectedFilterKeyChange:w,filterValue:_="",valuePlaceholder:D="",onFilterValueChange:O,onFilter:A,onFilterClear:B,children:G,className:H="",loading:h=!1,error:y=!1,errortext:n="",...R})=>{const[z,J]=s.useState(!1),[m,M]=s.useState(!1);return s.useEffect(()=>{M(y||typeof n=="string"&&n.length>0)},[y,n]),s.useEffect(()=>{J(h)},[h]),r.jsxs("div",{className:`juno-filters ${m?"juno-filters-error ":""} ${X} ${H}`,...R,children:[r.jsxs("div",{className:`juno-filters-input-wrapper ${Y}`,children:[l&&l.options?r.jsx(Q,{keyLabel:l.keyLabel,valueLabel:l.valueLabel,options:l.options,selectedFilterKey:a,onSelectedFilterKeyChange:w,filterValue:_,valuePlaceholder:D,onFilterValueChange:O,onFilter:A,onClear:B,loading:z,error:m}):null,t?r.jsx("div",{className:`${Z}`,children:t}):null]}),m&&n?r.jsx("div",{className:`juno-filters-errortext ${re}`,children:n}):"",r.jsx("div",{className:`${ee}`,children:G})]})};f.propTypes={search:e.node,filters:e.object,selectedFilterKey:e.string,onSelectedFilterKeyChange:e.func,filterValue:e.string,valuePlaceholder:e.string,onFilterValueChange:e.func,onFilter:e.func,onFilterClear:e.func,className:e.string,loading:e.bool,error:e.bool,errortext:e.string,children:e.any};f.__docgenInfo={description:`-- Deprecated. For new implementations, combine and compose Input Group, Inputs and Pills as needed. --
A component to hold a FilterInput, resulting FilterPills, and optional SearchBar for any filter-able content.`,methods:[],displayName:"Filters",props:{search:{defaultValue:{value:"null",computed:!1},description:"Pass a SearchInput component",type:{name:"node"},required:!1},filters:{defaultValue:{value:"null",computed:!1},description:'Pass an object describing the filter keyLabel, valueLabel, and the available filter options:\n	`{ keyLabel: "Select a Filter",`\n		 `valueLabel: "Enter a Value",`\n		 `options: [{label: "Filter 1", key: "filter-1"}, {...}] }`',type:{name:"object"},required:!1},selectedFilterKey:{defaultValue:{value:'""',computed:!1},description:"The key of the currently selected filter",type:{name:"string"},required:!1},filterValue:{defaultValue:{value:'""',computed:!1},description:"The value of the FilterInput",type:{name:"string"},required:!1},valuePlaceholder:{defaultValue:{value:'""',computed:!1},description:"Optional: Pass a placeholder for the filter value text input",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"add custom classNames",type:{name:"string"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the filters are currently loading",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the filters have an error",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"The error message to display. When passed, error is set to true automatically",type:{name:"string"},required:!1},onSelectedFilterKeyChange:{description:"Pass a handler to be executed when the filter key changes",type:{name:"func"},required:!1},onFilterValueChange:{description:"Pass a handler to be executed whenever the value of the filter value input changes",type:{name:"func"},required:!1},onFilter:{description:"Pass a handler to be executed once the user clicks the filter button",type:{name:"func"},required:!1},onFilterClear:{description:"Pas a handler to be executed once the Filter input is cleared",type:{name:"func"},required:!1},children:{description:"",type:{name:"any"},required:!1}}};const he={title:"Deprecated/Filter/Filters",component:f,argTypes:{}},K=t=>r.jsx(f,{...t,children:t.filters&&t.filters.options&&t.filters.options.length?t.filters.options.map((l,a)=>r.jsx(U,{filterKey:l.key,filterKeyLabel:l.label,filterValue:`value_${a}`,filterValueLabel:`Value ${a}`,onClose:()=>console.log(l.key,"closing")},`filter-${a}`)):null}),i={args:{valuePlaceholder:"Enter a value",filters:{keyLabel:"Select a Filter",options:[{key:"filter-1",label:"Filter 1"}]}}},o={args:{filters:{keyLabel:"Select a Filter",options:[]},loading:!0}},c={render:K,args:{filters:{keyLabel:"Select a Filter",options:[{key:"filter-01",label:"Filter 1"},{key:"filter-02",label:"Filter 2"},{key:"filter-03",label:"Filter 3"}]}}},u={render:K,args:{filters:{options:[{key:"filter-01",label:"Filter 1"},{key:"filter-02",label:"Filter 2"},{key:"filter-03",label:"Filter 3"}]},error:!0}},p={args:{selectedFilterKey:"filter-2",search:r.jsx(C,{onSearch:()=>{console.log("Searching…")}}),filters:{keyLabel:"Select a Filter",options:[{key:"filter-01",label:"Filter 1"},{key:"filter-02",label:"Filter 2"},{key:"filter-03",label:"Filter 3"}]}}},d={args:{search:r.jsx(C,{onSearch:()=>{console.log("Searching…")}})}};var b,g,F;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    valuePlaceholder: "Enter a value",
    filters: {
      keyLabel: "Select a Filter",
      options: [{
        key: "filter-1",
        label: "Filter 1"
      }]
    }
  }
}`,...(F=(g=i.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var S,k,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    filters: {
      keyLabel: "Select a Filter",
      options: []
    },
    loading: true
  }
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var v,x,P;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: PillsTemplate,
  args: {
    filters: {
      keyLabel: "Select a Filter",
      options: [{
        key: "filter-01",
        label: "Filter 1"
      }, {
        key: "filter-02",
        label: "Filter 2"
      }, {
        key: "filter-03",
        label: "Filter 3"
      }]
    }
  }
}`,...(P=(x=c.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var L,V,q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: PillsTemplate,
  args: {
    filters: {
      options: [{
        key: "filter-01",
        label: "Filter 1"
      }, {
        key: "filter-02",
        label: "Filter 2"
      }, {
        key: "filter-03",
        label: "Filter 3"
      }]
    },
    error: true
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,W,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    selectedFilterKey: "filter-2",
    search: <SearchInput onSearch={() => {
      console.log("Searching…");
    }} />,
    filters: {
      keyLabel: "Select a Filter",
      options: [{
        key: "filter-01",
        label: "Filter 1"
      }, {
        key: "filter-02",
        label: "Filter 2"
      }, {
        key: "filter-03",
        label: "Filter 3"
      }]
    }
  }
}`,...(I=(W=p.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var $,N,T;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    search: <SearchInput onSearch={() => {
      console.log("Searching…");
    }} />
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const ye=["Default","Loading","WithPills","ErrorWithPills","PreseletedWithSearch","SearchOnly"];export{i as Default,u as ErrorWithPills,o as Loading,p as PreseletedWithSearch,d as SearchOnly,c as WithPills,ye as __namedExportsOrder,he as default};
