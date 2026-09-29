import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i,r as a,t as o}from"./SecondaryTab.component-CR2rFl21.js";import{n as s,t as c}from"./SecondaryTabPanel.component-tFZjEDZ0.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),r(),i(),s(),l=n(),u={title:`WIP/SecondaryTabs/SecondaryTabs`,component:a,argTypes:{activeTab:{control:`text`},defaultTab:{control:`text`},disabled:{control:`boolean`},onTabChange:{action:`onTabChange`}},parameters:{docs:{description:{component:"A segmented-control tab strip for hierarchical navigation. Sits below the primary `TabNavigation`. Uses native ARIA (`role=tablist/tab/tabpanel`)."}}}},d={parameters:{docs:{description:{story:`Basic tab strip with three tabs and corresponding panels.`}}},render:e=>(0,l.jsxs)(a,{defaultTab:`overview`,...e,children:[(0,l.jsx)(o,{value:`overview`,children:`Overview`}),(0,l.jsx)(o,{value:`details`,children:`Details`}),(0,l.jsx)(o,{value:`logs`,children:`Logs`}),(0,l.jsx)(c,{value:`overview`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Overview content`})}),(0,l.jsx)(c,{value:`details`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Details content`})}),(0,l.jsx)(c,{value:`logs`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Logs content`})})]})},f={parameters:{docs:{description:{story:`Tabs with icons rendered to the left of each label.`}}},render:e=>(0,l.jsxs)(a,{defaultTab:`compute`,...e,children:[(0,l.jsx)(o,{value:`compute`,iconLeft:`openInNew`,children:`Compute`}),(0,l.jsx)(o,{value:`storage`,iconLeft:`info`,children:`Storage`}),(0,l.jsx)(o,{value:`network`,iconLeft:`warning`,children:`Network`}),(0,l.jsx)(c,{value:`compute`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Compute content`})}),(0,l.jsx)(c,{value:`storage`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Storage content`})}),(0,l.jsx)(c,{value:`network`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Network content`})})]})},p={parameters:{docs:{description:{story:"All tabs disabled via the parent `disabled` prop."}}},render:e=>(0,l.jsxs)(a,{defaultTab:`overview`,disabled:!0,...e,children:[(0,l.jsx)(o,{value:`overview`,children:`Overview`}),(0,l.jsx)(o,{value:`details`,children:`Details`}),(0,l.jsx)(o,{value:`logs`,children:`Logs`})]})},m={parameters:{docs:{description:{story:`One tab disabled individually. Keyboard navigation skips it.`}}},render:e=>(0,l.jsxs)(a,{defaultTab:`overview`,...e,children:[(0,l.jsx)(o,{value:`overview`,children:`Overview`}),(0,l.jsx)(o,{value:`details`,disabled:!0,children:`Details`}),(0,l.jsx)(o,{value:`logs`,children:`Logs`}),(0,l.jsx)(c,{value:`overview`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Overview content`})}),(0,l.jsx)(c,{value:`logs`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Logs content`})})]})},h={parameters:{docs:{description:{story:"Controlled mode: active tab driven by the `activeTab` prop."}}},args:{activeTab:`details`},render:e=>(0,l.jsxs)(a,{...e,children:[(0,l.jsx)(o,{value:`overview`,children:`Overview`}),(0,l.jsx)(o,{value:`details`,children:`Details`}),(0,l.jsx)(o,{value:`logs`,children:`Logs`}),(0,l.jsx)(c,{value:`overview`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Overview content`})}),(0,l.jsx)(c,{value:`details`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Details content (controlled active)`})}),(0,l.jsx)(c,{value:`logs`,children:(0,l.jsx)(`div`,{className:`jn:p-4 jn:text-sm`,children:`Logs content`})})]})},g=[`Default`,`WithIcons`,`AllDisabled`,`SingleTabDisabled`,`Controlled`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Basic tab strip with three tabs and corresponding panels."
      }
    }
  },
  render: args => <SecondaryTabs defaultTab="overview" {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details">Details</SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
      <SecondaryTabPanel value="overview">
        <div className="jn:p-4 jn:text-sm">Overview content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="details">
        <div className="jn:p-4 jn:text-sm">Details content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="logs">
        <div className="jn:p-4 jn:text-sm">Logs content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tabs with icons rendered to the left of each label."
      }
    }
  },
  render: args => <SecondaryTabs defaultTab="compute" {...args}>
      <SecondaryTab value="compute" iconLeft="openInNew">
        Compute
      </SecondaryTab>
      <SecondaryTab value="storage" iconLeft="info">
        Storage
      </SecondaryTab>
      <SecondaryTab value="network" iconLeft="warning">
        Network
      </SecondaryTab>
      <SecondaryTabPanel value="compute">
        <div className="jn:p-4 jn:text-sm">Compute content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="storage">
        <div className="jn:p-4 jn:text-sm">Storage content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="network">
        <div className="jn:p-4 jn:text-sm">Network content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All tabs disabled via the parent \`disabled\` prop."
      }
    }
  },
  render: args => <SecondaryTabs defaultTab="overview" disabled {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details">Details</SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
    </SecondaryTabs>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "One tab disabled individually. Keyboard navigation skips it."
      }
    }
  },
  render: args => <SecondaryTabs defaultTab="overview" {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details" disabled>
        Details
      </SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
      <SecondaryTabPanel value="overview">
        <div className="jn:p-4 jn:text-sm">Overview content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="logs">
        <div className="jn:p-4 jn:text-sm">Logs content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Controlled mode: active tab driven by the \`activeTab\` prop."
      }
    }
  },
  args: {
    activeTab: "details"
  },
  render: args => <SecondaryTabs {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details">Details</SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
      <SecondaryTabPanel value="overview">
        <div className="jn:p-4 jn:text-sm">Overview content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="details">
        <div className="jn:p-4 jn:text-sm">Details content (controlled active)</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="logs">
        <div className="jn:p-4 jn:text-sm">Logs content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as AllDisabled,h as Controlled,d as Default,m as SingleTabDisabled,f as WithIcons,g as __namedExportsOrder,u as default};