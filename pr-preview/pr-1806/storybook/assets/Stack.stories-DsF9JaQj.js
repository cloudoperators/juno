import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{n as r,t as i}from"./Stack.component-DwKvxYjU.js";var a,o,s=e((()=>{t(),a=n(),o=({label:e})=>(0,a.jsx)(`div`,{className:`
        jn:flex
        jn:bg-juno-blue
        jn:rounded
        jn:text-white
        jn:px-8
        jn:py-3
        jn:border
        jn:border-juno-blue-7`,children:(0,a.jsx)(`div`,{className:`jn:m-auto`,children:e})});try{o.displayName=`DummyComponent`,o.__docgenInfo={description:``,displayName:`DummyComponent`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/dummyComponents/DummyComponent.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`ui-components/src/dummyComponents/DummyComponent.tsx`,name:`DummyComponentProps`}],description:``,name:`label`,parent:{fileName:`ui-components/src/dummyComponents/DummyComponent.tsx`,name:`DummyComponentProps`},required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{t(),s(),r(),c=n(),l={title:`Layout/Stack`,component:i,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},gap:{options:`0,px,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96`.split(`,`)}},parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}}},u=e=>`
    bg-theme-background-lvl-3
    ${e===`vertical`?`jn:w-full jn:h-80`:`jn:h-24`}
    `,d=e=>(0,c.jsx)(i,{className:u(e.direction),...e,children:[...[,,,,,]].map((e,t)=>(0,c.jsx)(o,{label:`${t}`},t))}),f=e=>(0,c.jsx)(i,{...e,className:`jn:bg-theme-background-lvl-3`,children:[...Array(15)].map((e,t)=>(0,c.jsx)(o,{label:`${t}`},t))}),p={render:d,parameters:{docs:{description:{story:`Default stack direction.`}}},args:{}},m={render:d,parameters:{docs:{description:{story:`Children can also be stacked vertically.`}}},args:{direction:`vertical`}},h={render:d,parameters:{docs:{description:{story:`By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks.`}}},args:{gap:`4`}},g={render:d,parameters:{docs:{description:{story:`By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks.`}}},args:{direction:`vertical`,gap:`3`}},_={render:d,parameters:{docs:{description:{story:`By specifying an alignment you can control how items are aligned vertically in a horizontal Stack. By default they will stretch to take up the full height. Another very useful alignmen ist 'center', this will not stretch the children but make sure they are all aligned around the center axis. This is particularly useful when it doesn't make sense to stretch the items to the full height.`}}},args:{alignment:`center`}},v={render:d,parameters:{docs:{description:{story:`The same as above is true for vertical Stacks. But in this case the alignment property controls the alignment along the horizontal axis. By default items are stretched to the full width. Using 'center' alignment causes the items to be aligned around the central axis.`}}},args:{direction:`vertical`,alignment:`center`}},y={render:d,parameters:{docs:{description:{story:`Setting the alignment to 'start' will cause the items to be aligned to the top in a horizontal Stack.`}}},args:{alignment:`start`}},b={render:d,parameters:{docs:{description:{story:`Setting the alignment to 'start' will cause the items to be aligned to the left in a vertical Stack.`}}},args:{direction:`vertical`,alignment:`start`}},x={render:d,parameters:{docs:{description:{story:`The distribution along the horizontal axis in a horizontal Stack can be controlled via the 'distribution' property. Setting it to 'center' will cause the items to be aligned to the center of the horizontal axis.`}}},args:{distribution:`center`}},S={render:d,parameters:{docs:{description:{story:`Setting the distribution to 'center' in a vertical Stack will cause the items to be aligned to the center of the vertical axis.`}}},args:{direction:`vertical`,distribution:`center`}},C={render:d,parameters:{docs:{description:{story:`To center a Stack's children both horizontally and vertically at the same time simple set both the alignment and distribution props to 'center'. This works for horizontal and vertical Stacks.`}}},args:{alignment:`center`,distribution:`center`}},w={render:f,parameters:{docs:{description:{story:`If there are too many children to fit in the available horizontal space, set the 'wrap' property to true to allow children to wrap to the next row (also works for vertical Stacks with restricted height).`}}},args:{wrap:!0,gap:`4`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Default stack direction."
      }
    }
  },
  args: {}
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Horizontal`,`Vertical`,`GapHorizontal`,`GapVertical`,`HorizontalAlignmentCenter`,`VerticalAlignmentCenter`,`HorizontalAlignmentStart`,`VerticalAlignmentStart`,`HorizontalDistributionCenter`,`VerticalDistributionCenter`,`Centered`,`Wrap`]}))();export{C as Centered,h as GapHorizontal,g as GapVertical,p as Horizontal,_ as HorizontalAlignmentCenter,y as HorizontalAlignmentStart,x as HorizontalDistributionCenter,m as Vertical,v as VerticalAlignmentCenter,b as VerticalAlignmentStart,S as VerticalDistributionCenter,w as Wrap,T as __namedExportsOrder,l as default};