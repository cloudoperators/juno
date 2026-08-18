import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{t as i}from"./Icon.component-Mfy7Ncyo.js";import{t as a}from"./Icon-BbM7ub-A.js";import{t as o}from"./PortalProvider.component-CPwWWIUc.js";import{t as s}from"./PortalProvider-fSJAn4oR.js";import{n as c,t as l}from"./Modal.component-cJrSLF2o.js";import{t as ee}from"./ButtonRow.component-CANc35XT.js";import{t as u}from"./ButtonRow-BkPYrnvw.js";import{t as d}from"./Button.component-DwZYhfTp.js";import{t as f}from"./Button-CGsQe5zG.js";import{t as p}from"./Checkbox.component-DesKwz4W.js";import{t as m}from"./Checkbox-DhoVAdNm.js";import{r as h,t as g}from"./ComboBoxOption.component-Dppg67gG.js";import{r as _,t as v}from"./SelectOption.component-CiGCmat6.js";import{n as y,t as b}from"./ComboBoxOption-B3j5F8Y0.js";import{n as x,t as S}from"./SelectOption-Drauc4aT.js";import{n as C,t as te}from"./Form.component-DMYqlu8q.js";import{n as ne,t as w}from"./FormRow.component-DYlReAMa.js";import{t as T}from"./TextInput.component-BA-s1uJn.js";import{n as re,t as ie}from"./ModalFooter-CGBThcgr.js";import{t as ae}from"./TextInput-BNLwGDhO.js";function E(){return(E=e((()=>{C()})))()}function D(){return(D=e((()=>{ne()})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{O=t(n()),c(),ie(),f(),u(),m(),E(),D(),ae(),a(),s(),x(),S(),y(),b(),k=r(),A=({closeOnConfirm:e,...t})=>{let[n,r]=(0,O.useState)(!1),i=()=>{r(!0)},a=()=>{r(!1)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d,{label:`Open Modal`,variant:`primary`,onClick:i}),(0,k.jsx)(l,{open:n,onCancel:a,onConfirm:e?a:void 0,...t})]})},j={title:`Components/Modal/Modal`,component:l,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},modalFooter:{control:!1,table:{type:{summary:`ReactElement`}}}},parameters:{actions:{argTypesRegex:null},docs:{source:{transform:e=>e.replace(/jn:/g,``)}}},decorators:[e=>(0,k.jsx)(o,{children:(0,k.jsx)(`div`,{className:`jn:m-20 jn:flex jn:justify-center`,children:(0,k.jsx)(e,{})})})]},M={render:A,parameters:{docs:{description:{story:`A modal dialog for simple acknowledgement.`}}},args:{title:`Maintenance Mode Enabled`,children:`Automated alerts and health checks for cluster 'prod-eu-west-1' have been suspended. Turn off maintenance mode to resume normal monitoring.`}},N={render:A,parameters:{docs:{description:{story:`A modal dialog for confirming or canceling a non-destructive action.`}}},args:{title:`Assign Role`,children:`Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Assign Role`}},P={render:A,parameters:{docs:{description:{story:`A user-initiated low risk destructive action. Note the Confirm button is always enabled.`}}},args:{title:`Delete Snapshot`,children:`Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Delete Snapshot`}},F=e=>{let[t,n]=(0,O.useState)(!1),[r,i]=(0,O.useState)(!1);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d,{label:`Open Modal`,variant:`primary`,onClick:()=>n(!0)}),(0,k.jsx)(l,{open:t,onCancel:()=>{n(!1),i(!1)},disableConfirmButton:!r,...e,children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{className:`jn:mb-4`,children:`Removing user 'jsmith' will immediately revoke all their access to project resources.`}),(0,k.jsx)(p,{label:`Check the box to confirm removing user 'jsmith'`,checked:r,onChange:e=>i(e.target.checked)})]})})]})},I={render:F,parameters:{docs:{description:{story:`A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox.`}}},args:{title:`Remove User`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Remove User`}},L=e=>{let[t,n]=(0,O.useState)(!1),[r,i]=(0,O.useState)(``);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d,{label:`Open Modal`,variant:`primary`,onClick:()=>n(!0)}),(0,k.jsx)(l,{open:t,onCancel:()=>{n(!1),i(``)},disableConfirmButton:r!==`DELETE`,...e,children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{className:`jn:mb-4`,children:`This will permanently delete the project 'production-eu' and all associated resources, including clusters, configurations, and stored data.`}),(0,k.jsx)(`p`,{className:`jn:mb-4`,children:`This action cannot be undone.`}),(0,k.jsx)(`p`,{className:`jn:mb-4`,children:`Type 'DELETE' (all caps, no quotes) in the field below to confirm:`}),(0,k.jsx)(T,{placeholder:`Type 'DELETE' to confirm deletion`,value:r,onChange:e=>i(e.target.value)})]})})]})},R={render:L,parameters:{docs:{description:{story:`A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase.`}}},args:{title:`Delete Project`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Delete Project`}},z={render:A,parameters:{docs:{description:{story:"In order to disable all buttons on a Modal, both `disableConfirmButton` and `disableCancelButton` need to be set to `true`."}}},args:{title:`Assign Role`,children:`Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Assign Role`,disableConfirmButton:!0,disableCancelButton:!0}},B={render:A,parameters:{docs:{description:{story:"In order to auto-focus an interactive element in the modal, assign an `id` and pass this `id` to the `initialFocus` prop."}}},args:{title:`Enter a Phrase`,children:(0,k.jsx)(T,{id:`focusOnMe`}),initialFocus:`#focusOnMe`}},V=()=>(0,k.jsxs)(te,{children:[(0,k.jsx)(w,{children:(0,k.jsx)(T,{label:`First Name`,id:`firstname`})}),(0,k.jsx)(w,{children:(0,k.jsx)(T,{label:`Last Name`,id:`lastname`})}),(0,k.jsx)(w,{children:(0,k.jsx)(T,{label:`Email`,id:`email`,type:`email`})}),(0,k.jsx)(w,{children:(0,k.jsx)(T,{label:`Password`,id:`password`,type:`password`})}),(0,k.jsx)(w,{children:(0,k.jsx)(T,{label:`Retype Password`,id:`retype-password`,type:`password`})}),(0,k.jsx)(w,{children:(0,k.jsxs)(_,{label:`Role`,children:[(0,k.jsx)(v,{children:`Private Person`}),(0,k.jsx)(v,{children:`Small Business`})]})}),(0,k.jsx)(w,{children:(0,k.jsxs)(h,{label:`Country`,children:[(0,k.jsx)(g,{value:`germany`,children:`Germany`},`DE`),(0,k.jsx)(g,{value:`uk`,children:`United Kingdom`},`UK`),(0,k.jsx)(g,{value:`us`,children:`USA`},`US`)]})})]}),H={render:A,parameters:{docs:{description:{story:`A default size Modal with a form.`}}},args:{title:`Default Modal Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,k.jsx)(V,{})}},U={render:A,parameters:{docs:{description:{story:"A `large` size Modal with a form."}}},args:{size:`large`,title:`Large Modal Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,k.jsx)(V,{})}},W={render:A,parameters:{docs:{description:{story:"An `xl` size Modal with a form."}}},args:{size:`xl`,title:`XL With Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,k.jsx)(V,{})}},G={render:A,parameters:{docs:{description:{story:"An `2xl` size Modal with a form."}}},args:{size:`2xl`,title:`2XL With Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,k.jsx)(V,{})}},K={render:A,parameters:{docs:{description:{story:"A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set `closeable` to `false`."}}},args:{title:`Non-Closeable Modal`,children:`Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.`,closeable:!1}},q={render:A,parameters:{docs:{description:{story:"Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set `closeOnBackdropClick` to `true` to enable this behaviour."}}},args:{title:`Close on Backdrop Click`,children:(0,k.jsx)(`p`,{children:`This Modal closes when clicking the backdrop.`}),closeOnBackdropClick:!0}},J={render:A,parameters:{docs:{description:{story:"In order to specifically disable the X-Close button, set `disableCloseButton`to `true`."}}},args:{title:`Disabled X-Close Button Modal`,children:(0,k.jsx)(`p`,{children:`This Modal has a disabled top-right close button.`}),disableCloseButton:!0,cancelButtonLabel:`Cancel`}},Y={render:A,parameters:{docs:{description:{story:"For complex use cases that require more than a Confirm and a Cancel button, a custom `ModalFooter` with buttons and additional elements can be passed to `Modal`."}}},args:{title:`Modal with Custom ModalFooter`,size:`large`,children:(0,k.jsx)(`p`,{children:`This Modal renders a custom footer with three buttons and a custom hint.`}),modalFooter:(0,k.jsxs)(re,{className:`jn:justify-between jn:items-center`,children:[(0,k.jsxs)(`span`,{children:[(0,k.jsx)(i,{icon:`info`,className:`jn:mr-1`}),`Have some custom content`]}),(0,k.jsxs)(ee,{children:[(0,k.jsx)(d,{variant:`subdued`,children:`Cancel`}),(0,k.jsx)(d,{variant:`primary-danger`,children:`Destroy`}),(0,k.jsx)(d,{variant:`primary`,children:`Proceed`})]})]})}},X={render:A,args:{title:`Modal with Select inside`,size:`small`,children:(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(_,{children:[(0,k.jsx)(v,{value:`1`,label:`Option 1`},`o-1`),(0,k.jsx)(v,{value:`2`,label:`Option 2`},`o-2`),(0,k.jsx)(v,{value:`3`,label:`Option 3`},`o-3`)]})})}},Z={render:A,args:{title:(0,k.jsx)(`p`,{children:`Hello`}),size:`small`,children:(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(h,{children:[(0,k.jsx)(g,{value:`Rhubarb`,children:`Rhubarb`},`1`),(0,k.jsx)(g,{value:`Carrots`,children:`Carrots`},`2`),(0,k.jsx)(g,{value:`Spinach`,children:`Spinach`},`3`),(0,k.jsx)(g,{value:`Tomatoes`,children:`Tomatoes`},`4`)]})})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for simple acknowledgement."
      }
    }
  },
  args: {
    title: "Maintenance Mode Enabled",
    children: "Automated alerts and health checks for cluster 'prod-eu-west-1' have been suspended. Turn off maintenance mode to resume normal monitoring."
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for confirming or canceling a non-destructive action."
      }
    }
  },
  args: {
    title: "Assign Role",
    children: "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated low risk destructive action. Note the Confirm button is always enabled."
      }
    }
  },
  args: {
    title: "Delete Snapshot",
    children: "Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Snapshot"
  }
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: MediumRiskTemplate,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox."
      }
    }
  },
  args: {
    title: "Remove User",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Remove User"
  }
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: HighRiskTemplate,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase."
      }
    }
  },
  args: {
    title: "Delete Project",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Project"
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to disable all buttons on a Modal, both \`disableConfirmButton\` and \`disableCancelButton\` need to be set to \`true\`."
      }
    }
  },
  args: {
    title: "Assign Role",
    children: "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to auto-focus an interactive element in the modal, assign an \`id\` and pass this \`id\` to the \`initialFocus\` prop."
      }
    }
  },
  args: {
    title: "Enter a Phrase",
    children: <TextInput id="focusOnMe" />,
    initialFocus: "#focusOnMe"
  }
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A default size Modal with a form."
      }
    }
  },
  args: {
    title: "Default Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A \`large\` size Modal with a form."
      }
    }
  },
  args: {
    size: "large",
    title: "Large Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An \`xl\` size Modal with a form."
      }
    }
  },
  args: {
    size: "xl",
    title: "XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An \`2xl\` size Modal with a form."
      }
    }
  },
  args: {
    size: "2xl",
    title: "2XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set \`closeable\` to \`false\`."
      }
    }
  },
  args: {
    title: "Non-Closeable Modal",
    children: "Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",
    closeable: false
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set \`closeOnBackdropClick\` to \`true\` to enable this behaviour."
      }
    }
  },
  args: {
    title: "Close on Backdrop Click",
    children: <p>This Modal closes when clicking the backdrop.</p>,
    closeOnBackdropClick: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to specifically disable the X-Close button, set \`disableCloseButton\`to \`true\`."
      }
    }
  },
  args: {
    title: "Disabled X-Close Button Modal",
    children: <p>This Modal has a disabled top-right close button.</p>,
    disableCloseButton: true,
    cancelButtonLabel: "Cancel"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "For complex use cases that require more than a Confirm and a Cancel button, a custom \`ModalFooter\` with buttons and additional elements can be passed to \`Modal\`."
      }
    }
  },
  args: {
    title: "Modal with Custom ModalFooter",
    size: "large",
    children: <p>This Modal renders a custom footer with three buttons and a custom hint.</p>,
    modalFooter: <ModalFooter className="jn:justify-between jn:items-center">
        <span>
          <Icon icon="info" className="jn:mr-1" />
          Have some custom content
        </span>
        <ButtonRow>
          <Button variant="subdued">Cancel</Button>
          <Button variant="primary-danger">Destroy</Button>
          <Button variant="primary">Proceed</Button>
        </ButtonRow>
      </ModalFooter>
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Modal with Select inside",
    size: "small",
    children: <>
        <Select>
          <SelectOption value="1" label="Option 1" key="o-1" />
          <SelectOption value="2" label="Option 2" key="o-2" />
          <SelectOption value="3" label="Option 3" key="o-3" />
        </Select>
      </>
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: <p>Hello</p>,
    size: "small",
    children: <>
        <ComboBox>
          <ComboBoxOption value="Rhubarb" key="1">
            Rhubarb
          </ComboBoxOption>
          <ComboBoxOption value="Carrots" key="2">
            Carrots
          </ComboBoxOption>
          <ComboBoxOption value="Spinach" key="3">
            Spinach
          </ComboBoxOption>
          <ComboBoxOption value="Tomatoes" key="4">
            Tomatoes
          </ComboBoxOption>
        </ComboBox>
      </>
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`SimpleConfirmNonDestructiveAction`,`ConfirmDesctructiveActionLowRisk`,`ConfirmDesctructiveActionMediumRisk`,`ConfirmDestructiveActionHighRisk`,`SimpleConfirmDialogWithDisabledButtons`,`AutoFocusDialog`,`DefaultWithForm`,`LargeWithForm`,`XLWithForm`,`XXLWithForm`,`NonCloseable`,`CloseOnBackdropClick`,`DisabledCloseButton`,`CustomModalFooter`,`TestSelectInModal`,`TestComboBoxInModal`]})))()}$();export{B as AutoFocusDialog,q as CloseOnBackdropClick,P as ConfirmDesctructiveActionLowRisk,I as ConfirmDesctructiveActionMediumRisk,R as ConfirmDestructiveActionHighRisk,Y as CustomModalFooter,M as Default,H as DefaultWithForm,J as DisabledCloseButton,U as LargeWithForm,K as NonCloseable,z as SimpleConfirmDialogWithDisabledButtons,N as SimpleConfirmNonDestructiveAction,Z as TestComboBoxInModal,X as TestSelectInModal,W as XLWithForm,G as XXLWithForm,Q as __namedExportsOrder,j as default};