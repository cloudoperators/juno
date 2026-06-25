import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{n as i,r as a}from"./Icon.component-CdamWsCK.js";import{n as o,t as s}from"./PortalProvider.component-Do0ZvEjj.js";import{t as c}from"./Button.component-BegnImZr.js";import{t as l}from"./Button-BG8z224i.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./PopupMenu-BOWEEvtb.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;t((()=>{y=e(n()),_(),a(),o(),l(),b=r(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/PopupMenu`,component:p,subcomponents:{PopupMenuToggle:d,PopupMenuOptions:f,PopupMenuItem:h,PopupMenuSection:u},argTypes:{children:{control:!1},icon:{options:[`moreVert`,...Object.keys(i)],control:{type:`select`}}},decorators:[e=>(0,b.jsx)(s,{children:(0,b.jsx)(e,{})})]},C=y.forwardRef(({className:e=``,onClick:t=void 0,...n},r)=>(0,b.jsx)(c,{ref:r,className:`my-custom-toggle ${e}`,onClick:t,...n,children:`Custom Toggle`})),C.displayName=`ToggleButton`,w=y.forwardRef((e,t)=>{let{isOpen:n}=v(),{className:r,...i}=e;return(0,b.jsx)(c,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:`toggle-button-closed`} ${r||``}`,...i,children:e.children||`Toggle Me!`})}),w.displayName=`StyledToggleButton`,T=e=>{let{close:t}=v();return(0,b.jsx)(c,{onClick:t,...e})},E={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:x(),onClose:x(),children:(0,b.jsx)(f,{children:(0,b.jsx)(`p`,{children:`Menu goes here.`})})}},D={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:x(),onClose:x()}},O={parameters:{args:{description:{story:`Disable the default toggle.`}}},args:{onOpen:x(),onClose:x(),disabled:!0}},k={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:x(),onClose:x(),children:(0,b.jsxs)(f,{children:[(0,b.jsx)(h,{label:`Menu Item 1`}),(0,b.jsx)(h,{label:`Menu Item 2`,icon:`deleteForever`}),(0,b.jsx)(h,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},A={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:x(),onClose:x(),children:(0,b.jsxs)(f,{children:[(0,b.jsx)(h,{as:`a`,href:`https://github.com/cloudoperators/juno`,label:`Go to Juno on Github`}),(0,b.jsx)(h,{as:`a`,href:`https://www.sap.com`,label:`Go to sap.com`,target:`_blank`,icon:`openInNew`})]})}},j={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:x(),onClose:x(),children:(0,b.jsxs)(f,{children:[(0,b.jsx)(`p`,{children:`Some content goes here.`}),(0,b.jsx)(T,{variant:`primary`,children:`Yay!`})]})}},M={parameters:{docs:{description:{story:`In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers.`}}},args:{onOpen:x(),onClose:x(),children:(0,b.jsxs)(f,{children:[(0,b.jsxs)(u,{children:[(0,b.jsx)(m,{children:`Section 1`}),(0,b.jsx)(h,{label:`Menu Item 1`}),(0,b.jsx)(h,{label:`Menu Item 2`,icon:`deleteForever`})]}),(0,b.jsx)(g,{}),(0,b.jsxs)(u,{children:[(0,b.jsx)(m,{label:`Section 2`}),(0,b.jsx)(h,{label:`Menu Item 3`}),(0,b.jsx)(h,{label:`Menu Item 4 Disabled`,disabled:!0})]})]})}},N={parameters:{docs:{description:{story:`A default toggle can be rendered with a custom icon without having to pass a custom toggle element.`}}},args:{onOpen:x(),onClose:x(),icon:`warning`,children:(0,b.jsxs)(f,{children:[(0,b.jsx)(h,{label:`Menu Item 1`}),(0,b.jsx)(h,{label:`Menu Item 2`,icon:`deleteForever`}),(0,b.jsx)(h,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},P={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:x(),onClose:x(),children:[(0,b.jsx)(d,{children:`The Toggle`},`t`),(0,b.jsxs)(f,{children:[(0,b.jsx)(h,{label:`Menu Item 1`}),(0,b.jsx)(h,{label:`Menu Item 2`,icon:`deleteForever`}),(0,b.jsx)(h,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},F={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:x(),onClose:x(),children:[(0,b.jsx)(d,{as:C},`t`),(0,b.jsxs)(f,{children:[(0,b.jsx)(h,{label:`Menu Item 1`}),(0,b.jsx)(h,{label:`Menu Item 2`,icon:`deleteForever`}),(0,b.jsx)(h,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},I={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:x(),onClose:x(),children:[(0,b.jsx)(d,{as:w},`t`),(0,b.jsxs)(f,{children:[(0,b.jsx)(h,{label:`Menu Item 1`}),(0,b.jsx)(h,{label:`Menu Item 2`,icon:`deleteForever`}),(0,b.jsx)(h,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},L={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:x(),onClose:x(),children:[(0,b.jsx)(d,{as:y.Fragment,children:(0,b.jsx)(C,{})},`t`),(0,b.jsxs)(f,{children:[(0,b.jsx)(h,{label:`Menu Item 1`}),(0,b.jsx)(h,{label:`Menu Item 2`,icon:`deleteForever`}),(0,b.jsx)(h,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When no \`<PopupMenuOptions>\` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <p>Menu goes here.</p>
      </PopupMenuOptions>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This story has no \`PopupMenuOptions\` passed. The component should still render without any errors, and \`onOpen\` and \`onClose\` should be run regardless."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn()
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    args: {
      description: {
        story: "Disable the default toggle."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    disabled: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass at least a \`<PopupMenuOptions>\` component with \`<PopupMenuItem>\` elements inside to render a functional menu. A default toggle element will be rendered."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`as\` as \`anchor\` and supply a \`href\` prop in order to render PopupMenuItem elements as links."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuItem as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenuItem as="a" href="https://www.sap.com" label="Go to sap.com" target="_blank" icon="openInNew" />
      </PopupMenuOptions>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`PopupMenuItem\` elements may contain random elements other than \`PopupMenuItem\`. In such cases you may consume the PopupMenu context using the \`usePopupMenuContext\` hook that contains a \`close\` function that can be used by custom components to close the menu if needed."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenuOptions>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuSection>
          <PopupMenuSectionHeading>Section 1</PopupMenuSectionHeading>
          <PopupMenuItem label="Menu Item 1" />
          <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        </PopupMenuSection>
        <PopupMenuSectionSeparator />
        <PopupMenuSection>
          <PopupMenuSectionHeading label="Section 2" />
          <PopupMenuItem label="Menu Item 3" />
          <PopupMenuItem label="Menu Item 4 Disabled" disabled />
        </PopupMenuSection>
      </PopupMenuOptions>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon without having to pass a custom toggle element."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    icon: "warning",
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In the simplest case, a toggle can contain only a string. \`PopupMenu\` will render a \`<button>\` element containing that string or any opther children."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle key="t">The Toggle</PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass a custom component to render \`as={MyCustomComponent}\` to render as a toggle. Make sure to forward refs. Note we may change the standard \`<PopupMenuToggle>\` to use our own \`<Button>\` component, in this case we would need a different example component here."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={ToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A custom toggle component may consume the PopupMenu context using the \`usePopupMenuContext\` hook. This hook exposes the current \`isOpen\` state of the menu that can be used e.g. to apply conditional styling to the toggle."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={StyledToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, \`PopupMenuToggle\` will render a \`<button>\` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the \`PopupMenuToggle\`'s \`as\` prop to \`React.Fragment\` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={React.Fragment} key="t">
        <ToggleButton />
      </PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`NoMenu`,`DisabledDefaultToggle`,`WithMenuChild`,`WithChildrenAsLinks`,`WithMenuWithRandomContent`,`WithMenuChildWithSection`,`WithIcon`,`WithToggleAndMenuChildren`,`WithToggleAsButtonComponent`,`WithToggleAsButtonStyledByState`,`WithCustomButtonComponentAsChild`]}))();export{E as Default,O as DisabledDefaultToggle,D as NoMenu,A as WithChildrenAsLinks,L as WithCustomButtonComponentAsChild,N as WithIcon,k as WithMenuChild,M as WithMenuChildWithSection,j as WithMenuWithRandomContent,P as WithToggleAndMenuChildren,F as WithToggleAsButtonComponent,I as WithToggleAsButtonStyledByState,R as __namedExportsOrder,S as default};