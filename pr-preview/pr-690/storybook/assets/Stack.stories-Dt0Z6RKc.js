import{j as r}from"./jsx-runtime-D6fbYt3N.js";import"./index-DysCNOs_.js";import{P as te}from"./index-BHU3UH5b.js";import{S as f}from"./Stack.component-B4IgElTG.js";const y=({label:t})=>r.jsx("div",{className:`
        jn-flex
        jn-bg-juno-blue
        jn-rounded
        jn-text-white
        jn-px-8
        jn-py-3
        jn-border
        jn-border-juno-blue-7`,children:r.jsx("div",{className:"jn-m-auto",children:t})});y.propTypes={label:te.string.isRequired};y.__docgenInfo={description:"",methods:[],displayName:"DummyComponent",props:{label:{description:"",type:{name:"string"},required:!0}}};const ce={title:"Layout/Stack",component:f,argTypes:{children:{control:!1},gap:{options:["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"]}}},re=t=>`
    bg-theme-background-lvl-3
    ${t==="vertical"?"jn-w-full jn-h-80":"jn-h-24"}
    `,e=t=>r.jsx(f,{className:re(t.direction),...t,children:[...Array(5)].map((ee,a)=>r.jsx(y,{label:`${a}`},a))}),ae=t=>r.jsx(f,{...t,className:"jn-bg-theme-background-lvl-3",children:[...Array(15)].map((ee,a)=>r.jsx(y,{label:`${a}`},a))}),n={render:e,parameters:{docs:{description:{story:"Default stack direction."}}},args:{}},s={render:e,parameters:{docs:{description:{story:"Children can also be stacked vertically."}}},args:{direction:"vertical"}},i={render:e,parameters:{docs:{description:{story:"By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."}}},args:{gap:"4"}},o={render:e,parameters:{docs:{description:{story:"By specifying a gap, the child elements will have the specified margin from one another. It is the same for horizontal and vertical stacks."}}},args:{direction:"vertical",gap:"3"}},c={render:e,parameters:{docs:{description:{story:"By specifying an alignment you can control how items are aligned vertically in a horizontal Stack. By default they will stretch to take up the full height. Another very useful alignmen ist 'center', this will not stretch the children but make sure they are all aligned around the center axis. This is particularly useful when it doesn't make sense to stretch the items to the full height."}}},args:{alignment:"center"}},l={render:e,parameters:{docs:{description:{story:"The same as above is true for vertical Stacks. But in this case the alignment property controls the alignment along the horizontal axis. By default items are stretched to the full width. Using 'center' alignment causes the items to be aligned around the central axis."}}},args:{direction:"vertical",alignment:"center"}},d={render:e,parameters:{docs:{description:{story:"Setting the alignment to 'start' will cause the items to be aligned to the top in a horizontal Stack."}}},args:{alignment:"start"}},p={render:e,parameters:{docs:{description:{story:"Setting the alignment to 'start' will cause the items to be aligned to the left in a vertical Stack."}}},args:{direction:"vertical",alignment:"start"}},m={render:e,parameters:{docs:{description:{story:"The distribution along the horizontal axis in a horizontal Stack can be controlled via the 'distribution' property. Setting it to 'center' will cause the items to be aligned to the center of the horizontal axis."}}},args:{distribution:"center"}},h={render:e,parameters:{docs:{description:{story:"Setting the distribution to 'center' in a vertical Stack will cause the items to be aligned to the center of the vertical axis."}}},args:{direction:"vertical",distribution:"center"}},g={render:e,parameters:{docs:{description:{story:"To center a Stack's children both horizontally and vertically at the same time simple set both the alignment and distribution props to 'center'. This works for horizontal and vertical Stacks."}}},args:{alignment:"center",distribution:"center"}},u={render:ae,parameters:{docs:{description:{story:"If there are too many children to fit in the available horizontal space, set the 'wrap' property to true to allow children to wrap to the next row (also works for vertical Stacks with restricted height)."}}},args:{wrap:!0,gap:"4"}};var b,v,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Default stack direction."
      }
    }
  },
  args: {}
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var k,w,z;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var x,T,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var C,A,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,V,D;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var I,_,N;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(_=l.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var G,$,q;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=($=d.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var E,M,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,U,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var L,O,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const le=["Horizontal","Vertical","GapHorizontal","GapVertical","HorizontalAlignmentCenter","VerticalAlignmentCenter","HorizontalAlignmentStart","VerticalAlignmentStart","HorizontalDistributionCenter","VerticalDistributionCenter","Centered","Wrap"];export{g as Centered,i as GapHorizontal,o as GapVertical,n as Horizontal,c as HorizontalAlignmentCenter,d as HorizontalAlignmentStart,m as HorizontalDistributionCenter,s as Vertical,l as VerticalAlignmentCenter,p as VerticalAlignmentStart,h as VerticalDistributionCenter,u as Wrap,le as __namedExportsOrder,ce as default};