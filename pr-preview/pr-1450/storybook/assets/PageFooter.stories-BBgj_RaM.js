import{j as e}from"./iframe-DFNSQ5tH.js";import{P as l}from"./PageFooter.component-ohKCi90G.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Layout/PageFooter",component:l,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},copyright:{control:"text",table:{type:{summary:"string"}}},className:{control:!1}}},a=i=>e.jsx(l,{...i}),o={render:a,parameters:{docs:{description:{story:"PageFooter with a custom copyright notice."}}},args:{copyright:"© 2023 Custom Corporation. All rights reserved."}},r={render:a,parameters:{docs:{description:{story:"PageFooter rendering inline links, illustrating how children can be displayed within the footer."}}},args:{children:e.jsxs("ul",{className:"juno-pagefooter-items-inline",children:[e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"About"})}),e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"Imprint"})}),e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"Terms of Use"})})]})}},t={render:a,parameters:{docs:{description:{story:"An example showing two columns within the PageFooter, each with a title and list of items."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{role:"group","aria-labelledby":"footer-col1-title",children:[e.jsx("p",{className:"juno-pagefooter-title",id:"footer-col1-title",children:"Column 1"}),e.jsxs("ul",{className:"juno-pagefooter-items",children:[e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"About"})}),e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"Imprint"})})]})]}),e.jsxs("div",{role:"group","aria-labelledby":"footer-col2-title",children:[e.jsx("p",{className:"juno-pagefooter-title",id:"footer-col2-title",children:"Column 2"}),e.jsxs("ul",{className:"juno-pagefooter-items",children:[e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"Contact"})})]})]})]})}},n={render:a,parameters:{docs:{description:{story:"An example showing three columns within the PageFooter, each with a title and list of items."}}},args:{copyright:"© 2023 Custom Corporation. All rights reserved.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{role:"group","aria-labelledby":"footer-col1-title",children:[e.jsx("p",{className:"juno-pagefooter-title",id:"footer-col1-title",children:"Column 1"}),e.jsx("ul",{className:"juno-pagefooter-items",children:e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"About"})})})]}),e.jsxs("div",{role:"group","aria-labelledby":"footer-col2-title",children:[e.jsx("p",{className:"juno-pagefooter-title",id:"footer-col2-title",children:"Column 2"}),e.jsx("ul",{className:"juno-pagefooter-items",children:e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"Privacy Policy"})})})]}),e.jsxs("div",{role:"group","aria-labelledby":"footer-col3-title",children:[e.jsx("p",{className:"juno-pagefooter-title",id:"footer-col3-title",children:"Column 3"}),e.jsx("ul",{className:"juno-pagefooter-items",children:e.jsx("li",{children:e.jsx("a",{className:"juno-pagefooter-item",href:"#",children:"Contact"})})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "PageFooter with a custom copyright notice."
      }
    }
  },
  args: {
    copyright: "© 2023 Custom Corporation. All rights reserved."
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "PageFooter rendering inline links, illustrating how children can be displayed within the footer."
      }
    }
  },
  args: {
    children: <ul className="juno-pagefooter-items-inline">
        <li>
          <a className="juno-pagefooter-item" href="#">
            About
          </a>
        </li>
        <li>
          <a className="juno-pagefooter-item" href="#">
            Imprint
          </a>
        </li>
        <li>
          <a className="juno-pagefooter-item" href="#">
            Terms of Use
          </a>
        </li>
      </ul>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An example showing two columns within the PageFooter, each with a title and list of items."
      }
    }
  },
  args: {
    children: <>
        <div role="group" aria-labelledby="footer-col1-title">
          <p className="juno-pagefooter-title" id="footer-col1-title">
            Column 1
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="juno-pagefooter-item" href="#">
                Imprint
              </a>
            </li>
          </ul>
        </div>
        <div role="group" aria-labelledby="footer-col2-title">
          <p className="juno-pagefooter-title" id="footer-col2-title">
            Column 2
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="juno-pagefooter-item" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An example showing three columns within the PageFooter, each with a title and list of items."
      }
    }
  },
  args: {
    copyright: "© 2023 Custom Corporation. All rights reserved.",
    children: <>
        <div role="group" aria-labelledby="footer-col1-title">
          <p className="juno-pagefooter-title" id="footer-col1-title">
            Column 1
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        <div role="group" aria-labelledby="footer-col2-title">
          <p className="juno-pagefooter-title" id="footer-col2-title">
            Column 2
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div role="group" aria-labelledby="footer-col3-title">
          <p className="juno-pagefooter-title" id="footer-col3-title">
            Column 3
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </>
  }
}`,...n.parameters?.docs?.source}}};const d=["WithCustomCopyright","InlineLinks","WithTwoColumns","WithThreeColumns"];export{r as InlineLinks,o as WithCustomCopyright,n as WithThreeColumns,t as WithTwoColumns,d as __namedExportsOrder,p as default};
