import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./Stack.component-O2Jjm6dw.js";e();var r=t(),i=({label:e})=>(0,r.jsx)(`div`,{className:`
        jn:flex
        jn:bg-juno-blue
        jn:rounded
        jn:text-white
        jn:px-8
        jn:py-3
        jn:border
        jn:border-juno-blue-7`,children:(0,r.jsx)(`div`,{className:`jn:m-auto`,children:e})});try{i.displayName=`DummyComponent`,i.__docgenInfo={description:``,displayName:`DummyComponent`,props:{label:{defaultValue:null,description:``,name:`label`,required:!0,type:{name:`string`}}}}}catch{}var a={title:`Layout/Stack`,component:n,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},gap:{options:`0,px,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96`.split(`,`)}},parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}}},o=e=>`
    bg-theme-background-lvl-3
    ${e===`vertical`?`jn:w-full jn:h-80`:`jn:h-24`}
    `,s=e=>(0,r.jsx)(n,{className:o(e.direction),...e,children:[...[,,,,,]].map((e,t)=>(0,r.jsx)(i,{label:`${t}`},t))}),c=e=>(0,r.jsx)(n,{...e,className:`jn:bg-theme-background-lvl-3`,children:[...Array(15)].map((e,t)=>(0,r.jsx)(i,{label:`${t}`},t))}),l={render:s,parameters:{docs:{description:{story:`Default stack direction.`}}},args:{}},u={render:s,parameters:{docs:{description:{story:`Children can also be stacked vertically.`}}},args:{direction:`vertical`}},d={render:s,parameters:{docs:{description:{story:`By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks.`}}},args:{gap:`4`}},f={render:s,parameters:{docs:{description:{story:`By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks.`}}},args:{direction:`vertical`,gap:`3`}},p={render:s,parameters:{docs:{description:{story:`By specifying an alignment you can control how items are aligned vertically in a horizontal Stack. By default they will stretch to take up the full height. Another very useful alignmen ist 'center', this will not stretch the children but make sure they are all aligned around the center axis. This is particularly useful when it doesn't make sense to stretch the items to the full height.`}}},args:{alignment:`center`}},m={render:s,parameters:{docs:{description:{story:`The same as above is true for vertical Stacks. But in this case the alignment property controls the alignment along the horizontal axis. By default items are stretched to the full width. Using 'center' alignment causes the items to be aligned around the central axis.`}}},args:{direction:`vertical`,alignment:`center`}},h={render:s,parameters:{docs:{description:{story:`Setting the alignment to 'start' will cause the items to be aligned to the top in a horizontal Stack.`}}},args:{alignment:`start`}},g={render:s,parameters:{docs:{description:{story:`Setting the alignment to 'start' will cause the items to be aligned to the left in a vertical Stack.`}}},args:{direction:`vertical`,alignment:`start`}},_={render:s,parameters:{docs:{description:{story:`The distribution along the horizontal axis in a horizontal Stack can be controlled via the 'distribution' property. Setting it to 'center' will cause the items to be aligned to the center of the horizontal axis.`}}},args:{distribution:`center`}},v={render:s,parameters:{docs:{description:{story:`Setting the distribution to 'center' in a vertical Stack will cause the items to be aligned to the center of the vertical axis.`}}},args:{direction:`vertical`,distribution:`center`}},y={render:s,parameters:{docs:{description:{story:`To center a Stack's children both horizontally and vertically at the same time simple set both the alignment and distribution props to 'center'. This works for horizontal and vertical Stacks.`}}},args:{alignment:`center`,distribution:`center`}},b={render:c,parameters:{docs:{description:{story:`If there are too many children to fit in the available horizontal space, set the 'wrap' property to true to allow children to wrap to the next row (also works for vertical Stacks with restricted height).`}}},args:{wrap:!0,gap:`4`}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Default stack direction."
      }
    }
  },
  args: {}
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};var x=[`Horizontal`,`Vertical`,`GapHorizontal`,`GapVertical`,`HorizontalAlignmentCenter`,`VerticalAlignmentCenter`,`HorizontalAlignmentStart`,`VerticalAlignmentStart`,`HorizontalDistributionCenter`,`VerticalDistributionCenter`,`Centered`,`Wrap`];export{y as Centered,d as GapHorizontal,f as GapVertical,l as Horizontal,p as HorizontalAlignmentCenter,h as HorizontalAlignmentStart,_ as HorizontalDistributionCenter,u as Vertical,m as VerticalAlignmentCenter,g as VerticalAlignmentStart,v as VerticalDistributionCenter,b as Wrap,x as __namedExportsOrder,a as default};