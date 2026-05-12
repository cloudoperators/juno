import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,z as r}from"./iframe-DplT1XeX.js";import{t as i}from"./Icon.component-DuTA3tHc.js";import{t as a}from"./Icon-DjvH9saH.js";import{t as o}from"./PortalProvider.component-COF_icXY.js";import{t as s}from"./PortalProvider-ocxCqCgv.js";import{t as c}from"./Button.component-DeKDPOdA.js";import{t as l}from"./Button-LC_LEitV.js";import{t as u}from"./ButtonRow.component-DTX823wA.js";import{t as d}from"./ButtonRow-XLFEwBvU.js";import{t as f}from"./Checkbox.component-DXF9Uwdl.js";import{t as p}from"./Checkbox-CZOSfpxq.js";import{r as m,t as h}from"./ComboBoxOption.component-B_9k1VVf.js";import{n as g,t as _}from"./ComboBoxOption-CB6NvslS.js";import{n as v,t as y}from"./Form.component-z8uO6Tn4.js";import{n as b,t as x}from"./FormRow.component-BTfZZ2FK.js";import{r as S,t as C}from"./SelectOption.component-Dsf6ZMmM.js";import{t as w}from"./TextInput.component-BfkN0Jy0.js";import{n as T,t as ee}from"./SelectOption-BS3-psJB.js";import{n as te,t as E}from"./Modal.component-CQNG4zd4.js";import{n as ne,t as re}from"./ModalFooter-5-C7oMNE.js";import{t as ie}from"./TextInput-Cv5CNg3l.js";var D=e((()=>{v()})),O=e((()=>{b()})),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{k=t(r()),te(),re(),l(),d(),p(),D(),O(),ie(),a(),s(),T(),ee(),g(),_(),A=n(),j=({closeOnConfirm:e,...t})=>{let[n,r]=(0,k.useState)(!1),i=()=>{r(!0)},a=()=>{r(!1)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{label:`Open Modal`,variant:`primary`,onClick:i}),(0,A.jsx)(E,{open:n,onCancel:a,onConfirm:e?a:void 0,...t})]})},M={title:`Components/Modal/Modal`,component:E,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},modalFooter:{control:!1,table:{type:{summary:`ReactElement`}}}},parameters:{actions:{argTypesRegex:null},docs:{source:{transform:e=>e.replace(/jn:/g,``)}}},decorators:[e=>(0,A.jsx)(o,{children:(0,A.jsx)(`div`,{className:`jn:m-20 jn:flex jn:justify-center`,children:(0,A.jsx)(e,{})})})]},N={render:j,parameters:{docs:{description:{story:`A modal dialog for simple acknowledgement.`}}},args:{title:`Maintenance Mode Enabled for 'cluster-eu-1'`,children:`Automated alerts and health checks for this cluster have been suspended. Turn off maintenance mode to resume normal monitoring.`}},P={render:j,parameters:{docs:{description:{story:`A modal dialog for confirming or canceling a non-destructive action.`}}},args:{title:`Assign Role to user@example.com`,children:`Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Assign Role`}},F={render:j,parameters:{docs:{description:{story:`A user-initiated low risk destructive action. Note the Confirm button is always enabled.`}}},args:{title:`Delete Snapshot 'snap-20240115'`,children:`Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Delete Snapshot`}},I=e=>{let[t,n]=(0,k.useState)(!1),[r,i]=(0,k.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{label:`Open Modal`,variant:`primary`,onClick:()=>n(!0)}),(0,A.jsx)(E,{open:t,onCancel:()=>{n(!1),i(!1)},disableConfirmButton:!r,...e,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`jn:mb-4`,children:`Removing user 'jsmith' will immediately revoke all their access to project resources.`}),(0,A.jsx)(f,{label:`Check the box to confirm removing user 'jsmith'`,checked:r,onChange:e=>i(e.target.checked)})]})})]})},L={render:I,parameters:{docs:{description:{story:`A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox.`}}},args:{title:`Remove User 'jsmith'`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Remove User`}},R=e=>{let[t,n]=(0,k.useState)(!1),[r,i]=(0,k.useState)(``);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{label:`Open Modal`,variant:`primary`,onClick:()=>n(!0)}),(0,A.jsx)(E,{open:t,onCancel:()=>{n(!1),i(``)},disableConfirmButton:r!==`DELETE`,...e,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`jn:mb-4`,children:`This will permanently delete the project 'production-eu' and all associated resources, including clusters, configurations, and stored data.`}),(0,A.jsx)(`p`,{className:`jn:mb-4`,children:`This action cannot be undone.`}),(0,A.jsx)(`p`,{className:`jn:mb-4`,children:`Type 'DELETE' (all caps, no quotes) in the field below to confirm:`}),(0,A.jsx)(w,{placeholder:`Type 'DELETE' to confirm deletion`,value:r,onChange:e=>i(e.target.value)})]})})]})},z={render:R,parameters:{docs:{description:{story:`A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase.`}}},args:{title:`Delete Project 'production-eu'`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Delete Project`}},B={render:j,parameters:{docs:{description:{story:"In order to disable all buttons on a Modal, both `disableConfirmButton` and `disableCancelButton` need to be set to `true`."}}},args:{title:`Assign Role to user@example.com`,children:`Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Assign Role`,disableConfirmButton:!0,disableCancelButton:!0}},V={render:j,parameters:{docs:{description:{story:"In order to auto-focus an interactive element in the modal, assign an `id` and pass this `id` to the `initialFocus` prop."}}},args:{title:`Enter a Phrase`,children:(0,A.jsx)(w,{id:`focusOnMe`}),initialFocus:`#focusOnMe`}},H=()=>(0,A.jsxs)(y,{children:[(0,A.jsx)(x,{children:(0,A.jsx)(w,{label:`First Name`,id:`firstname`})}),(0,A.jsx)(x,{children:(0,A.jsx)(w,{label:`Last Name`,id:`lastname`})}),(0,A.jsx)(x,{children:(0,A.jsx)(w,{label:`Email`,id:`email`,type:`email`})}),(0,A.jsx)(x,{children:(0,A.jsx)(w,{label:`Password`,id:`password`,type:`password`})}),(0,A.jsx)(x,{children:(0,A.jsx)(w,{label:`Retype Password`,id:`retype-password`,type:`password`})}),(0,A.jsx)(x,{children:(0,A.jsxs)(S,{label:`Role`,children:[(0,A.jsx)(C,{children:`Private Person`}),(0,A.jsx)(C,{children:`Small Business`})]})}),(0,A.jsx)(x,{children:(0,A.jsxs)(m,{label:`Country`,children:[(0,A.jsx)(h,{value:`germany`,children:`Germany`},`DE`),(0,A.jsx)(h,{value:`uk`,children:`United Kingdom`},`UK`),(0,A.jsx)(h,{value:`us`,children:`USA`},`US`)]})})]}),U={render:j,parameters:{docs:{description:{story:`A default size Modal with a form.`}}},args:{title:`Default Modal Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,A.jsx)(H,{})}},W={render:j,parameters:{docs:{description:{story:"A `large` size Modal with a form."}}},args:{size:`large`,title:`Large Modal Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,A.jsx)(H,{})}},G={render:j,parameters:{docs:{description:{story:"An `xl` size Modal with a form."}}},args:{size:`xl`,title:`XL With Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,A.jsx)(H,{})}},K={render:j,parameters:{docs:{description:{story:"An `2xl` size Modal with a form."}}},args:{size:`2xl`,title:`2XL With Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,A.jsx)(H,{})}},q={render:j,parameters:{docs:{description:{story:"A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set `closeable` to `false`."}}},args:{title:`Non-Closeable Modal`,children:`Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.`,closeable:!1}},J={render:j,parameters:{docs:{description:{story:"Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set `closeOnBackdropClick` to `true` to enable this behaviour."}}},args:{title:`Close on Backdrop Click`,children:(0,A.jsx)(`p`,{children:`This Modal closes when clicking the backdrop.`}),closeOnBackdropClick:!0}},Y={render:j,parameters:{docs:{description:{story:"In order to specifically disable the X-Close button, set `disableCloseButton`to `true`."}}},args:{title:`Disabled X-Close Button Modal`,children:(0,A.jsx)(`p`,{children:`This Modal has a disabled top-right close button.`}),disableCloseButton:!0,cancelButtonLabel:`Cancel`}},X={render:j,parameters:{docs:{description:{story:"For complex use cases that require more than a Confirm and a Cancel button, a custom `ModalFooter` with buttons and additional elements can be passed to `Modal`."}}},args:{title:`Modal with Custom ModalFooter`,size:`large`,children:(0,A.jsx)(`p`,{children:`This Modal renders a custom footer with three buttons and a custom hint.`}),modalFooter:(0,A.jsxs)(ne,{className:`jn:justify-between jn:items-center`,children:[(0,A.jsxs)(`span`,{children:[(0,A.jsx)(i,{icon:`info`,className:`jn:mr-1`}),`Have some custom content`]}),(0,A.jsxs)(u,{children:[(0,A.jsx)(c,{variant:`subdued`,children:`Cancel`}),(0,A.jsx)(c,{variant:`primary-danger`,children:`Destroy`}),(0,A.jsx)(c,{variant:`primary`,children:`Proceed`})]})]})}},Z={render:j,args:{title:`Modal with Select inside`,size:`small`,children:(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(S,{children:[(0,A.jsx)(C,{value:`1`,label:`Option 1`},`o-1`),(0,A.jsx)(C,{value:`2`,label:`Option 2`},`o-2`),(0,A.jsx)(C,{value:`3`,label:`Option 3`},`o-3`)]})})}},Q={render:j,args:{title:(0,A.jsx)(`p`,{children:`Hello`}),size:`small`,children:(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(m,{children:[(0,A.jsx)(h,{value:`Rhubarb`,children:`Rhubarb`},`1`),(0,A.jsx)(h,{value:`Carrots`,children:`Carrots`},`2`),(0,A.jsx)(h,{value:`Spinach`,children:`Spinach`},`3`),(0,A.jsx)(h,{value:`Tomatoes`,children:`Tomatoes`},`4`)]})})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for simple acknowledgement."
      }
    }
  },
  args: {
    title: "Maintenance Mode Enabled for 'cluster-eu-1'",
    children: "Automated alerts and health checks for this cluster have been suspended. Turn off maintenance mode to resume normal monitoring."
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for confirming or canceling a non-destructive action."
      }
    }
  },
  args: {
    title: "Assign Role to user@example.com",
    children: "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated low risk destructive action. Note the Confirm button is always enabled."
      }
    }
  },
  args: {
    title: "Delete Snapshot 'snap-20240115'",
    children: "Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Snapshot"
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: MediumRiskTemplate,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox."
      }
    }
  },
  args: {
    title: "Remove User 'jsmith'",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Remove User"
  }
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: HighRiskTemplate,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase."
      }
    }
  },
  args: {
    title: "Delete Project 'production-eu'",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Project"
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to disable all buttons on a Modal, both \`disableConfirmButton\` and \`disableCancelButton\` need to be set to \`true\`."
      }
    }
  },
  args: {
    title: "Assign Role to user@example.com",
    children: "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`SimpleConfirmNonDestructiveAction`,`ConfirmDesctructiveActionLowRisk`,`ConfirmDesctructiveActionMediumRisk`,`ConfirmDestructiveActionHighRisk`,`SimpleConfirmDialogWithDisabledButtons`,`AutoFocusDialog`,`DefaultWithForm`,`LargeWithForm`,`XLWithForm`,`XXLWithForm`,`NonCloseable`,`CloseOnBackdropClick`,`DisabledCloseButton`,`CustomModalFooter`,`TestSelectInModal`,`TestComboBoxInModal`]}))();export{V as AutoFocusDialog,J as CloseOnBackdropClick,F as ConfirmDesctructiveActionLowRisk,L as ConfirmDesctructiveActionMediumRisk,z as ConfirmDestructiveActionHighRisk,X as CustomModalFooter,N as Default,U as DefaultWithForm,Y as DisabledCloseButton,W as LargeWithForm,q as NonCloseable,B as SimpleConfirmDialogWithDisabledButtons,P as SimpleConfirmNonDestructiveAction,Q as TestComboBoxInModal,Z as TestSelectInModal,G as XLWithForm,K as XXLWithForm,$ as __namedExportsOrder,M as default};