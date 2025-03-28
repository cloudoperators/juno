import{j as a}from"./jsx-runtime-BP6H2k8O.js";import{e as W,r as u}from"./index-DysCNOs_.js";import{P as t}from"./index-BHU3UH5b.js";import{D as k}from"./DataListCheckboxCell.component-Lm4oGhJe.js";import{D as E}from"./DataListCell.component-H7cKwrAH.js";import{Default as e}from"./DataListCell.stories-B5QBEQlw.js";const G=W.createContext(),F=()=>W.useContext(G),A=({selectable:s=!1,className:r="",children:o,...n})=>{const h={selectable:s};return a.jsx(G.Provider,{value:h,children:a.jsx("div",{className:"juno-datalist-container",children:a.jsx("ul",{className:`juno-datalist ${r}`,...n,children:o})})})};A.propTypes={selectable:t.bool,className:t.string,children:t.node};A.__docgenInfo={description:"",methods:[],displayName:"DataList",props:{selectable:{defaultValue:{value:"false",computed:!1},description:"Whether the items of a DataList should be selectable",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},children:{description:"Children to render in the DataList",type:{name:"node"},required:!1}}};const J=`
	jn-flex
	jn-rounded-[3px]
	jn-border
	jn-border-theme-datalist-row
	jn-mb-2
`,M=`
	jn-bg-theme-datalistrow-selected
`,m=({selected:s,disabled:r,onChange:o,className:n="",children:h,...I})=>{const y=(F()||{}).selectable,[D,w]=u.useState(!1);u.useEffect(()=>{w(s)},[s]);const O=V=>{w(!D),o(V)};return a.jsxs("li",{className:`juno-datalist-row ${J} ${y&&D?M:""}${n}`,...I,children:[y?a.jsx(k,{selected:s,disabled:r,onChange:O}):null,h]})};m.propTypes={className:t.string,children:t.node,selected:t.bool,disabled:t.bool,onChange:t.func};m.__docgenInfo={description:"",methods:[],displayName:"DataListRow",props:{className:{defaultValue:{value:'""',computed:!1},description:"Custom classname",type:{name:"string"},required:!1},children:{description:"Children to render in the DataListRow",type:{name:"node"},required:!1},selected:{description:"Wheter the Row is selected",type:{name:"bool"},required:!1},disabled:{description:"Wheter the Row is disabled",type:{name:"bool"},required:!1},onChange:{description:"Callback function for the onChange event",type:{name:"func"},required:!1}}};const B={title:"Deprecated/DataList/DataListRow",component:m,argTypes:{items:{table:{disable:!0}},children:{control:!1}},parameters:{docs:{description:{component:"DataList is deprecated and will be removed. Please use DataGrid instead."}}}},g=({items:s,...r})=>a.jsx(m,{...r,children:s.map((o,n)=>u.createElement(E,{...o,key:`${n}`}))});g.propTypes={items:t.array};const z=({items:s,...r})=>a.jsxs(m,{...r,children:[a.jsx(k,{}),s.map((o,n)=>u.createElement(E,{...o,key:`${n}`}))]});z.propTypes={items:t.array};const i={render:g,parameters:{docs:{description:{story:"Juno DataListRow for displaying data"}}},args:{items:[{...e.args},{...e.args},{...e.args},{...e.args},{...e.args}]}},l={render:z,parameters:{docs:{description:{story:"Selectable DataListRow for displaying and selecting data. Note that highlighting the row will not work when rendered outside a DataList. "}}},args:{items:[{...e.args},{...e.args},{...e.args},{...e.args},{...e.args}]}},d={render:g,parameters:{docs:{description:{story:"Row with one cell set to 'auto' in oder to maximize its width"}}},args:{items:[{...e.args},{...e.args,auto:!0,children:"Auto DataListCell"},{...e.args},{...e.args},{...e.args}]}},c={render:g,parameters:{docs:{description:{story:"Row with Cells set to individual percentage widths"}}},args:{items:[{...e.args,width:10},{...e.args,width:45},{...e.args,width:25},{...e.args,width:10},{...e.args,width:10}]}},p={render:g,parameters:{docs:{description:{story:"Row with cells fitted to the Grid"}}},args:{items:[{...e.args,cols:1,children:"cols 1"},{...e.args,cols:6,children:"cols 6"},{...e.args,cols:3,children:"cols 3"},{...e.args,cols:2,children:"cols 2"}]}};var L,f,C;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Juno DataListRow for displaying data"
      }
    }
  },
  args: {
    items: [{
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }]
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,b,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: SelectableTemplate,
  parameters: {
    docs: {
      description: {
        story: "Selectable DataListRow for displaying and selecting data. Note that highlighting the row will not work when rendered outside a DataList. "
      }
    }
  },
  args: {
    items: [{
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }]
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,R,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Row with one cell set to 'auto' in oder to maximize its width"
      }
    }
  },
  args: {
    items: [{
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args,
      auto: true,
      children: "Auto DataListCell"
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }, {
      ...DataListCellStory.args
    }]
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var _,v,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Row with Cells set to individual percentage widths"
      }
    }
  },
  args: {
    items: [{
      ...DataListCellStory.args,
      width: 10
    }, {
      ...DataListCellStory.args,
      width: 45
    }, {
      ...DataListCellStory.args,
      width: 25
    }, {
      ...DataListCellStory.args,
      width: 10
    }, {
      ...DataListCellStory.args,
      width: 10
    }]
  }
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var q,P,$;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Row with cells fitted to the Grid"
      }
    }
  },
  args: {
    items: [{
      ...DataListCellStory.args,
      cols: 1,
      children: "cols 1"
    }, {
      ...DataListCellStory.args,
      cols: 6,
      children: "cols 6"
    }, {
      ...DataListCellStory.args,
      cols: 3,
      children: "cols 3"
    }, {
      ...DataListCellStory.args,
      cols: 2,
      children: "cols 2"
    }]
  }
}`,...($=(P=p.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const H=["Default","Selectable","AutoWidth","PercentageWidths","GridFitted"],te=Object.freeze(Object.defineProperty({__proto__:null,AutoWidth:d,Default:i,GridFitted:p,PercentageWidths:c,Selectable:l,__namedExportsOrder:H,default:B},Symbol.toStringTag,{value:"Module"}));export{d as A,A as D,p as G,c as P,l as S,i as a,m as b,te as c};
