import{j as r}from"./jsx-runtime-D6fbYt3N.js";const d=`
  jn-font-bold
  jn-text-lg
  jn-text-theme-high
  jn-pb-2
`,n=({heading:e="",className:t="",children:a,...i})=>r.jsx("h1",{className:`juno-content-heading ${d} ${t}`,...i,children:a||e});try{n.displayName="ContentHeading",n.__docgenInfo={description:"ContentHeading represents the main heading of a page or view.\nIt can be used within an `<AppShell>` component or, if scaffolding manually, within a `<ContentContainer>` component.\nThe heading text can be provided either via the `heading` prop or by passing it as `children`.",displayName:"ContentHeading",props:{children:{defaultValue:null,description:`Custom content to render within the container heading.
Takes precedence over the heading prop.
Optionally render children. If children are present, heading will be ignored`,name:"children",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:{value:""},description:`Text for the heading. Used if children is not provided.
Children prop takes precedence.
Text to use as a title`,name:"heading",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:`Additional CSS classes for custom styling.
Add custom class name`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{n as C};
