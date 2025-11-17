import{j as e}from"./iframe-B9vim9iy.js";const i=`
  jn:flex
  jn:shrink-0
  jn:grow-0
  jn:basis-auto
  jn:relative
  jn:min-h-[3.25rem]
  jn:z-50
  jn:px-6
  jn:py-5
  jn:border-t
  jn:text-theme-pagefooter
  jn:bg-theme-pagefooter
`,n=({className:t="",children:a,copyright:o="",...r})=>e.jsxs("div",{className:`juno-pagefooter ${i} ${t}`,role:"contentinfo",...r,children:[e.jsx("div",{className:"juno-pagefooter-children",children:a}),o&&e.jsx("div",{className:"juno-pagefooter-copyright",children:o})]});try{n.displayName="PageFooter",n.__docgenInfo={description:`PageFooter component renders a footer at the bottom of the page.
It consists of a flexible content area for children and an optional copyright section.
Usage:
The component can be used to add legal disclaimers, links, or other contextual information at the page's footer.`,displayName:"PageFooter",props:{className:{defaultValue:{value:""},description:"Additional custom styling class name for the footer container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`The content to render inside the footer, typically links or informational text
Use a list structure (e.g., <ul> with <li>) for grouped content or links, as in examples.`,name:"children",required:!1,type:{name:"ReactNode"}},copyright:{defaultValue:{value:""},description:"Optional copyright notice to display within the footer",name:"copyright",required:!1,type:{name:"string"}}}}}catch{}export{n as P};
