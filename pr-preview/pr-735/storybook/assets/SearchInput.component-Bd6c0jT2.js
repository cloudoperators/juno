import{j as s}from"./jsx-runtime-D6fbYt3N.js";import{r as u}from"./index-DysCNOs_.js";import{I as f}from"./Icon.component-B0dUqIrz.js";import{S as C}from"./Stack.component-B4IgElTG.js";const k=e=>{const t="jn-relative jn-inline-block jn-win-max";switch(e){case"rounded":return`${t} jn-w-auto`;case"hero":return`${t} jn-w-full`;default:return`${t} jn-w-auto`}},I=e=>{const t=`
    jn-bg-theme-textinput
    jn-text-theme-high
    jn-shadow
    jn-w-full
    focus:jn-outline-none
    focus:jn-ring-2
    focus:jn-ring-theme-focus
    disabled:jn-cursor-not-allowed
    disabled:jn-opacity-50
  `,a="jn-rounded-full focus:jn-rounded-full";switch(e){case"rounded":return`${t} ${a} jn-text-base jn-w-auto jn-pl-3 jn-pr-16 jn-py-1`;case"hero":return`${t} ${a} jn-text-lg jn-w-full jn-pl-6 jn-pr-20 jn-py-2.5`;default:return`${t} jn-rounded jn-text-base jn-leading-4 jn-pl-4 jn-pr-16 jn-py-2.5`}},q=e=>{switch(e){case"rounded":return"jn-absolute jn-inline-flex jn-right-3 jn-top-1";case"hero":return"jn-absolute jn-inline-flex jn-right-5";default:return"jn-absolute jn-inline-flex jn-right-3 jn-top-2"}},V=e=>{switch(e){case"hero":return"jn-mr-2.5";default:return"jn-mr-2"}},_=e=>e==="hero"?"24":"18",m=({value:e="",name:t="search",variant:a="default",disabled:p=!1,clear:j=!0,onSearch:l,onChange:i,onClick:o,onKeyPress:c,onClear:d,autoComplete:y="off",placeholder:g="Search…",className:v="",...b})=>{const[r,h]=u.useState(e);u.useEffect(()=>{h(e)},[e]);const x=u.useCallback(n=>{h(n.target.value),i==null||i(n)},[i]),S=u.useCallback(n=>{n.key==="Enter"&&l&&l(r),c==null||c(n)},[l,c,r]),w=u.useCallback(n=>{l==null||l(r),o==null||o(n)},[l,o,r]),E=u.useCallback(n=>{h(""),d==null||d(n)},[d]);return s.jsx("div",{className:`juno-search-input-wrapper ${k(a)} ${v}`,role:"search",children:s.jsxs(C,{gap:"2",alignment:"center",children:[s.jsx("input",{type:"search",name:t,placeholder:g,disabled:p,value:r,autoComplete:y,className:`juno-search-input ${I(a)}`,onChange:x,onKeyPress:S,...b}),s.jsxs("div",{className:q(a),children:[j&&(r==null?void 0:r.length)>0&&s.jsx(f,{icon:"close",size:_(a),title:"Clear",className:V(a),onClick:E,disabled:p}),s.jsx(f,{icon:"search",title:"Search",onClick:w,disabled:p})]})]})})};try{m.displayName="SearchInput",m.__docgenInfo={description:`A SearchInput is a controlled input component for searching.
It provides a text field to enter a search query and optional clear and search icons.
Three styling variants are supported: "rounded", "hero", and "default".`,displayName:"SearchInput",props:{name:{defaultValue:{value:"search"},description:"Specifies the name attribute for the input element.",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:`Determines the visual styling variant of the SearchInput component.
- "default": Standard search input styling.
- "hero": A larger search input intended for standalone use on a dedicated search page, akin to the initial Google search page.
- "rounded": A search input with rounded edges.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hero"'},{value:'"rounded"'}]}},disabled:{defaultValue:{value:"false"},description:"Disables the search input when set to true.",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Search…"},description:"Custom placeholder text displayed in the search input.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Initial value for the search input.",name:"value",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:`Controls the autocomplete attribute of the input element.
Pass a valid autocomplete value.
We do not enforce validity.`,name:"autoComplete",required:!1,type:{name:"string"}},clear:{defaultValue:{value:"true"},description:"Determines whether to show the 'Clear' button.",name:"clear",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the search input.",name:"className",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"Callback function invoked when a search is triggered, either by pressing the 'Enter' key or by clicking the search icon.",name:"onSearch",required:!1,type:{name:"((_value: string) => void)"}},onClick:{defaultValue:null,description:"Click handler for the search icon.",name:"onClick",required:!1,type:{name:"((_event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void)"}},onChange:{defaultValue:null,description:"Change handler for the search input.",name:"onChange",required:!1,type:{name:"((_event: ChangeEvent<HTMLInputElement>) => void)"}},onKeyPress:{defaultValue:null,description:"KeyPress handler for the search input. By default, triggers the onSearch function when the 'Enter' key is pressed.",name:"onKeyPress",required:!1,type:{name:"((_event: KeyboardEvent<HTMLInputElement>) => void)"}},onClear:{defaultValue:null,description:"Click handler for the 'Clear' button.",name:"onClear",required:!1,type:{name:"((_event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}export{m as S};
