import{j as e}from"./iframe-CqlYlD7W.js";const r=`
  jn:shrink-0
  jn:grow-0
  jn:basis-auto
  jn:relative
  jn:min-h-[3.25rem]
  jn:z-50
  jn:text-theme-pagefooter
  jn:bg-theme-pagefooter
`,n=({className:t="",children:a,copyright:o="",...i})=>e.jsx("div",{className:`juno-pagefooter ${r} ${t}`,role:"contentinfo",...i,children:e.jsxs("div",{className:"juno-pagefooter-content",children:[e.jsx("div",{className:"juno-pagefooter-children",children:a}),o&&e.jsx("div",{className:"juno-pagefooter-copyright",children:o})]})});try{n.displayName="PageFooter",n.__docgenInfo={description:`PageFooter component renders a footer at the bottom of the page.
It consists of a flexible content area for children and an optional copyright section.
Usage:
The component can be used to add legal disclaimers, links, or other contextual information at the page's footer.`,displayName:"PageFooter",props:{className:{defaultValue:{value:""},description:"Additional custom styling class name for the footer container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to render inside the footer, typically links or informational text\nUse a list structure e.g. `<ul>` with `<li>` for grouped content or links, as in examples.\nAvailable CSS classes for styling:\n- `.juno-pagefooter-title`: Style for a title element within a column.\n- `.juno-pagefooter-items`: Style for a list of items.\n- `.juno-pagefooter-items-inline`: Style for a single line list with pipe separators.\n- `.juno-pagefooter-item`: Style for individual list items.",name:"children",required:!1,type:{name:"ReactNode"}},copyright:{defaultValue:{value:""},description:"Optional copyright notice to display within the footer",name:"copyright",required:!1,type:{name:"string"}}}}}catch{}export{n as P};
