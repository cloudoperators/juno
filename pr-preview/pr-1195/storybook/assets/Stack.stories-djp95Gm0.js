import{j as r}from"./iframe-CIRHNnXn.js";import{S as f}from"./Stack.component-DPVmvRxI.js";import"./preload-helper-PPVm8Dsz.js";const y=({label:e})=>r.jsx("div",{className:`
        jn:flex
        jn:bg-juno-blue
        jn:rounded
        jn:text-white
        jn:px-8
        jn:py-3
        jn:border
        jn:border-juno-blue-7`,children:r.jsx("div",{className:"jn:m-auto",children:e})});try{y.displayName="DummyComponent",y.__docgenInfo={description:"",displayName:"DummyComponent",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const x={title:"Layout/Stack",component:f,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},gap:{options:["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"]}},parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,"")}}}},v=e=>`
    bg-theme-background-lvl-3
    ${e==="vertical"?"jn:w-full jn:h-80":"jn:h-24"}
    `,t=e=>r.jsx(f,{className:v(e.direction),...e,children:[...Array(5)].map((b,a)=>r.jsx(y,{label:`${a}`},a))}),S=e=>r.jsx(f,{...e,className:"jn:bg-theme-background-lvl-3",children:[...Array(15)].map((b,a)=>r.jsx(y,{label:`${a}`},a))}),n={render:t,parameters:{docs:{description:{story:"Default stack direction."}}},args:{}},s={render:t,parameters:{docs:{description:{story:"Children can also be stacked vertically."}}},args:{direction:"vertical"}},i={render:t,parameters:{docs:{description:{story:"By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."}}},args:{gap:"4"}},o={render:t,parameters:{docs:{description:{story:"By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."}}},args:{direction:"vertical",gap:"3"}},c={render:t,parameters:{docs:{description:{story:"By specifying an alignment you can control how items are aligned vertically in a horizontal Stack. By default they will stretch to take up the full height. Another very useful alignmen ist 'center', this will not stretch the children but make sure they are all aligned around the center axis. This is particularly useful when it doesn't make sense to stretch the items to the full height."}}},args:{alignment:"center"}},l={render:t,parameters:{docs:{description:{story:"The same as above is true for vertical Stacks. But in this case the alignment property controls the alignment along the horizontal axis. By default items are stretched to the full width. Using 'center' alignment causes the items to be aligned around the central axis."}}},args:{direction:"vertical",alignment:"center"}},d={render:t,parameters:{docs:{description:{story:"Setting the alignment to 'start' will cause the items to be aligned to the top in a horizontal Stack."}}},args:{alignment:"start"}},m={render:t,parameters:{docs:{description:{story:"Setting the alignment to 'start' will cause the items to be aligned to the left in a vertical Stack."}}},args:{direction:"vertical",alignment:"start"}},p={render:t,parameters:{docs:{description:{story:"The distribution along the horizontal axis in a horizontal Stack can be controlled via the 'distribution' property. Setting it to 'center' will cause the items to be aligned to the center of the horizontal axis."}}},args:{distribution:"center"}},h={render:t,parameters:{docs:{description:{story:"Setting the distribution to 'center' in a vertical Stack will cause the items to be aligned to the center of the vertical axis."}}},args:{direction:"vertical",distribution:"center"}},g={render:t,parameters:{docs:{description:{story:"To center a Stack's children both horizontally and vertically at the same time simple set both the alignment and distribution props to 'center'. This works for horizontal and vertical Stacks."}}},args:{alignment:"center",distribution:"center"}},u={render:S,parameters:{docs:{description:{story:"If there are too many children to fit in the available horizontal space, set the 'wrap' property to true to allow children to wrap to the next row (also works for vertical Stacks with restricted height)."}}},args:{wrap:!0,gap:"4"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Default stack direction."
      }
    }
  },
  args: {}
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Children can also be stacked vertically."
      }
    }
  },
  args: {
    direction: "vertical"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."
      }
    }
  },
  args: {
    gap: "4"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."
      }
    }
  },
  args: {
    direction: "vertical",
    gap: "3"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "By specifying an alignment you can control how items are aligned vertically in a horizontal Stack. By default they will stretch to take up the full height. Another very useful alignmen ist 'center', this will not stretch the children but make sure they are all aligned around the center axis. This is particularly useful when it doesn't make sense to stretch the items to the full height."
      }
    }
  },
  args: {
    alignment: "center"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "The same as above is true for vertical Stacks. But in this case the alignment property controls the alignment along the horizontal axis. By default items are stretched to the full width. Using 'center' alignment causes the items to be aligned around the central axis."
      }
    }
  },
  args: {
    direction: "vertical",
    alignment: "center"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Setting the alignment to 'start' will cause the items to be aligned to the top in a horizontal Stack."
      }
    }
  },
  args: {
    alignment: "start"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Setting the alignment to 'start' will cause the items to be aligned to the left in a vertical Stack."
      }
    }
  },
  args: {
    direction: "vertical",
    alignment: "start"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "The distribution along the horizontal axis in a horizontal Stack can be controlled via the 'distribution' property. Setting it to 'center' will cause the items to be aligned to the center of the horizontal axis."
      }
    }
  },
  args: {
    distribution: "center"
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Setting the distribution to 'center' in a vertical Stack will cause the items to be aligned to the center of the vertical axis."
      }
    }
  },
  args: {
    direction: "vertical",
    distribution: "center"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "To center a Stack's children both horizontally and vertically at the same time simple set both the alignment and distribution props to 'center'. This works for horizontal and vertical Stacks."
      }
    }
  },
  args: {
    alignment: "center",
    distribution: "center"
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: TemplateManyChildren,
  parameters: {
    docs: {
      description: {
        story: "If there are too many children to fit in the available horizontal space, set the 'wrap' property to true to allow children to wrap to the next row (also works for vertical Stacks with restricted height)."
      }
    }
  },
  args: {
    wrap: true,
    gap: "4"
  }
}`,...u.parameters?.docs?.source}}};const T=["Horizontal","Vertical","GapHorizontal","GapVertical","HorizontalAlignmentCenter","VerticalAlignmentCenter","HorizontalAlignmentStart","VerticalAlignmentStart","HorizontalDistributionCenter","VerticalDistributionCenter","Centered","Wrap"];export{g as Centered,i as GapHorizontal,o as GapVertical,n as Horizontal,c as HorizontalAlignmentCenter,d as HorizontalAlignmentStart,p as HorizontalDistributionCenter,s as Vertical,l as VerticalAlignmentCenter,m as VerticalAlignmentStart,h as VerticalDistributionCenter,u as Wrap,T as __namedExportsOrder,x as default};
