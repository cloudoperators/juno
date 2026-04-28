import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{n,t as r}from"./SideNavigationItem.component-P5DDl8et.js";import"./SideNavigationItem-CQiXwANd.js";import{t as i}from"./SideNavigationGroup.component-mu-ioPm5.js";e();var a=t(),o={title:`Navigation/SideNavigation/SideNavigationGroup`,component:i,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,a.jsx)(n,{children:(0,a.jsx)(e,{})})]},s={args:{label:`Group`}},c={args:{label:`Group`,disabled:!0}},l={args:{label:`Expandable Group`,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{label:`1st Level Item`,href:`#`,icon:`addCircle`}),(0,a.jsx)(r,{label:`1st Level Item`,icon:`addCircle`,children:(0,a.jsx)(r,{label:`2nd Level Item`,icon:`addCircle`,children:(0,a.jsx)(r,{label:`3rd Level Item`,href:`#`,icon:`addCircle`,children:(0,a.jsx)(r,{label:`4th Level Item`,href:`#`,icon:`addCircle`})})})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expandable Group",
    children: <>
        <SideNavigationItem label="1st Level Item" href="#" icon="addCircle" />
        <SideNavigationItem label="1st Level Item" icon="addCircle">
          <SideNavigationItem label="2nd Level Item" icon="addCircle">
            <SideNavigationItem label="3rd Level Item" href="#" icon="addCircle">
              <SideNavigationItem label="4th Level Item" href="#" icon="addCircle" />
            </SideNavigationItem>
          </SideNavigationItem>
        </SideNavigationItem>
      </>
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Disabled`,`Expandable`];export{s as Default,c as Disabled,l as Expandable,u as __namedExportsOrder,o as default};