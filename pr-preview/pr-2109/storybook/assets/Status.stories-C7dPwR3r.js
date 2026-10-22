import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./PageHeader.component-D0FiHz5u.js";import{n as a,t as o}from"./Stack.component-BHySKvx2.js";import{n as s,t as c}from"./SearchInput.component-Bh5O0LdO.js";import{t as l}from"./Spinner.component-C-kGJcpJ.js";import{t as u}from"./Spinner-DlrDtbLD.js";import{n as d,t as f}from"./Button.component-WoFDSDzo.js";import{a as p,c as m,i as h,l as g,n as _,o as v,s as ee,t as y,u as te}from"./DataGridHeadCell.component-BUDzBEUA.js";import{n as ne,t as b}from"./DataGridToolbar.component-BlapSXYi.js";var x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{t(),u(),g(),x=n(),S={400:{title:`Bad Request`,body:`The request could not be processed due to invalid syntax. Try again.`},401:{title:`Authentication Required`,body:`Authentication failed. Verify your credentials and try again.`},403:{title:`Access Denied`,body:`You do not have the required permissions to access this resource.`},404:{title:`Page Not Found`,body:`The requested URL does not exist or may have moved.`},408:{title:`Request Timeout`,body:`The request did not return a complete result in time. Check your connection and try again.`},409:{title:`Conflict`,body:``},429:{title:`Too Many Requests`,body:``},500:{title:`Internal Server Error`,body:`An internal error occurred. Try again.`},502:{title:`Bad Gateway`,body:`The server returned an invalid response. Try again.`},503:{title:`Service Unavailable`,body:`The service is temporarily unavailable. Try again later.`},504:{title:`Gateway Timeout`,body:`A server did not respond in time. Check your connection and try again.`}},C={progress:{title:`Loading…`,body:``},error:{title:`Something Went Wrong`,body:`An error occurred. Try again.`},empty:{title:`No Items`,body:`There are no items to display.`},"no-matches":{title:``,body:`No items match the current filters. Adjust or clear filters.`}},w=`
  jn:flex
  jn:flex-col
  jn:items-center
  jn:text-center
`,T=`
  jn:min-h-[12.5rem]
  jn:max-h-[18.1875rem]
  jn:justify-center
  jn:my-2
`,E=`
  jn:min-h-0
  jn:overflow-y-auto
`,D=`
  jn:text-[12.5rem]
  jn:font-bold
  jn:leading-none
  jn:text-theme-status-code
`,O=`
  jn:text-lg
  jn:leading-[1.5]
  jn:max-w-[50rem]
`,k=`
  jn:leading-[1.5]
  jn:max-w-[50rem]
`,A=`
  jn:text-left
  jn:text-xs
  jn:bg-theme-status-details
  jn:text-theme-status-details
  jn:border
  jn:border-theme-status-details
  jn:py-0.5
  jn:px-1
  jn:mt-4
  jn:w-full
  jn:max-w-[50rem]
  jn:max-h-[30rem]
  jn:overflow-x-auto
  jn:overflow-y-auto
`,j=({status:e=`error`,title:t,body:n,spinner:r,code:i,details:a,action:o,className:s=``,...c})=>{let{isDataGrid:u}=te(),d=typeof i==`string`?parseInt(i,10):i,f=d?S[d]:void 0,p=e?C[e]:void 0,m=t??f?.title??p?.title,h=n??f?.body??p?.body,g=r??e===`progress`;return(0,x.jsxs)(`div`,{role:e===`error`?`alert`:`status`,className:`juno-status ${u?`juno-status-datagrid ${T}`:`${u?``:i==null?g?`jn:mt-20`:`jn:mt-24`:`jn:mt-4`}`} ${w} ${s}`,...c,children:[i!=null&&!u&&(0,x.jsx)(`div`,{className:`juno-status-code ${D}`,children:i}),g&&(0,x.jsx)(l,{variant:`primary`,"aria-label":typeof m==`string`?m:`Loading`}),m!=null&&m!==!1&&m!==``&&(0,x.jsx)(`strong`,{className:`juno-status-title ${O}`,children:m}),h!=null&&h!==!1&&h!==``&&(0,x.jsx)(`div`,{className:`juno-status-body ${k}`,children:h}),a&&(0,x.jsx)(`pre`,{"aria-label":`Error details`,className:`juno-status-details ${A} ${u?E:``}`,children:a}),o&&(0,x.jsx)(`div`,{className:`juno-status-action jn:mt-4`,children:o})]})};try{j.displayName=`Status`,j.__docgenInfo={description:``,displayName:`Status`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Status/Status.component.tsx`,methods:[],props:{status:{defaultValue:{value:`error`},declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:'The status to display. Determines the default copy. Defaults to `"error"`.',name:`status`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`enum`,raw:`"error" | "progress" | "empty" | "no-matches"`,value:[{value:`"error"`},{value:`"progress"`},{value:`"empty"`},{value:`"no-matches"`}]}},title:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Optional title. Overrides the per-status default title when set. Use title case (e.g. "Something Went Wrong", not "Something went wrong"). Accepts a React node to allow links, formatted text, or other inline elements.`,name:`title`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`ReactNode`}},body:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Optional body text. Overrides the per-status default body text when set. Accepts a React node to allow links, line breaks, formatted text, or other inline elements.`,name:`body`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`ReactNode`}},spinner:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:'Renders a `Spinner`. Defaults to `true` when `status="progress"`, `false` otherwise.',name:`spinner`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`boolean`}},code:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Displayed large and prominently above the title. Intended for HTTP error codes such as 404 or 500.`,name:`code`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string | number`}},details:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:"Rendered in a `<pre>` block using monospaced font. Intended for stack traces and server responses. Scrolls vertically if content exceeds the maximum height.",name:`details`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:"Optional action area rendered below the content. Typically a `Button` or a button-styled anchor element.",name:`action`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Add custom CSS classes to the root element.`,name:`className`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function N(){return(N=e((()=>{M()})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{t(),N(),d(),g(),ee(),p(),_(),ne(),s(),a(),r(),P=n(),F={title:`Components/Status`,component:j,argTypes:{status:{control:`select`,options:[`progress`,`error`,`empty`,`no-matches`]},code:{control:{type:`number`}},title:{control:`text`},body:{control:`text`},action:{control:!1}},parameters:{docs:{description:{component:"`Status` is a general-purpose component for communicating non-data states: in progress, error, empty, and no matches. Use it as the default drop-in whenever a component, view, or data container has no local or specific way to handle these states — it covers application-, page-, and section-level states as well as error boundary fallbacks.\n\nWhen used inside a `DataGrid`, wrap `Status` in a `DataGridRow` and `DataGridCell` with the appropriate `colSpan` — `Status` renders a `<div>` only and has no table markup of its own. Inside a `DataGrid`, `Status` handles its own sizing and positioning automatically.\n\nOutside of a `DataGrid`, `Status` automatically applies a top margin based on what it renders — larger when neither a code nor a spinner is present, smaller for spinner states, minimal when an HTTP error code is shown. These can be overriden using the `className` when needed."}}}},I=e=>(0,P.jsxs)(`div`,{style:{minHeight:`600px`},children:[(0,P.jsx)(i,{applicationName:`My App`}),(0,P.jsx)(e,{})]}),L=`Error: Failed to fetch resource
  at fetchData (api.ts:42)
  at async loadServices (services.ts:17)
  at async ServiceList.componentDidMount (ServiceList.tsx:88)
  at async Promise.all (index 0)
  at async fetchAll (dataLoader.ts:130)
  at async DataLoader.load (dataLoader.ts:98)
  at async DataLoader.reload (dataLoader.ts:112)
  at async AppBootstrap.init (AppBootstrap.ts:54)
  at async AppBootstrap.run (AppBootstrap.ts:67)
  at async main (index.ts:12)
Caused by: NetworkError: net::ERR_CONNECTION_REFUSED
  at XMLHttpRequest.onload (http.ts:23)
  at XMLHttpRequest.dispatchEvent (xhr-polyfill.js:14)
  at EventTarget.dispatchEvent (event-target.js:88)
  at XMLHttpRequest.send (xhr.ts:201)
  at HttpClient.request (http-client.ts:77)
  at HttpClient.get (http-client.ts:92)
  at fetchData (api.ts:38)
  at retryWithBackoff (retry.ts:14)
  at retryWithBackoff (retry.ts:22)
  at retryWithBackoff (retry.ts:22)
  at async fetchWithRetry (fetchWithRetry.ts:9)
  at async ResourceStore.fetch (ResourceStore.ts:61)
  at async ResourceStore.refresh (ResourceStore.ts:74)
  at async ResourceStore.initialize (ResourceStore.ts:88)
  at async App.bootstrap (App.tsx:33)
  at async App.componentDidMount (App.tsx:44)
  at async renderWithHooks (react-dom.development.js:14985)
  at async commitLifeCycles (react-dom.development.js:20663)`,R={args:{}},z={args:{status:`error`,code:404},parameters:{docs:{description:{story:"Page-level 404 error. Both `title` and `body` will render the correct error title and body for known Http errors by default. These can be overridden when needed."}}}},B={args:{status:`error`,details:L},parameters:{docs:{description:{story:"Pass a stack trace or server response via `details` to render it in a scrollable `<pre>` block below the message. Useful for technical users who need the full error context."}}}},V={args:{status:`error`},render:e=>(0,P.jsx)(j,{...e,action:(0,P.jsx)(f,{variant:`primary`,children:`Retry`})}),parameters:{docs:{description:{story:"Pass any element via the `action` slot — typically a `Button` or a button-styled anchor."}}}},H={render:()=>(0,P.jsx)(j,{status:`error`,title:(0,P.jsx)(P.Fragment,{children:`Something Went Wrong`}),body:(0,P.jsxs)(P.Fragment,{children:[`An error occurred.`,` `,(0,P.jsx)(`a`,{href:`#`,className:`jn:underline`,children:`Learn more`}),` `,`or try again later.`]})}),parameters:{docs:{description:{story:"`title` and `body` both accept React nodes, allowing links, line breaks, and other inline elements for richer messaging."}}}},U={args:{status:`progress`},parameters:{docs:{description:{story:'Use `status="progress"` at page or section level while data is being fetched.'}}}},W={decorators:[I],args:{},parameters:{docs:{description:{story:"Default error state in a page context. `Status` applies a top margin automatically based on its content."}}}},G={decorators:[I],args:{code:404},parameters:{docs:{description:{story:`HTTP error with a large code display. The top margin is reduced as the code block provides sufficient visual weight.`}}}},K={decorators:[I],args:{status:`progress`},parameters:{docs:{description:{story:`Progress/loading state in a page context. The top margin is sized to account for the spinner.`}}}},q={args:{status:`progress`,title:`Loading Servers …`},render:e=>(0,P.jsxs)(o,{direction:`vertical`,children:[(0,P.jsx)(b,{children:(0,P.jsx)(o,{alignment:`center`,distribution:`end`,children:(0,P.jsx)(c,{placeholder:`Search Servers …`})})}),(0,P.jsxs)(m,{columns:4,children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(y,{children:`Name`}),(0,P.jsx)(y,{children:`Region`}),(0,P.jsx)(y,{children:`Status`}),(0,P.jsx)(y,{children:`Last Updated`})]}),(0,P.jsx)(v,{children:(0,P.jsx)(h,{colSpan:4,children:(0,P.jsx)(j,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="progress"` inside a `DataGridRow` spanning all columns while data is being fetched. Use the title `title` prop to further qualify the kind of items currently being loaded if possible, otherwise the default title "Loading …" will be rendered.'}}}},J={args:{status:`error`},render:e=>(0,P.jsxs)(o,{direction:`vertical`,children:[(0,P.jsx)(b,{children:(0,P.jsx)(o,{alignment:`center`,distribution:`end`,children:(0,P.jsx)(c,{placeholder:`Search Servers …`})})}),(0,P.jsxs)(m,{columns:4,children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(y,{children:`Name`}),(0,P.jsx)(y,{children:`Region`}),(0,P.jsx)(y,{children:`Status`}),(0,P.jsx)(y,{children:`Last Updated`})]}),(0,P.jsx)(v,{children:(0,P.jsx)(h,{colSpan:4,children:(0,P.jsx)(j,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="error"` inside a `DataGridRow` spanning all columns when a data fetch or operation has failed.'}}}},Y={args:{status:`empty`},render:e=>(0,P.jsxs)(o,{direction:`vertical`,children:[(0,P.jsx)(b,{children:(0,P.jsx)(o,{alignment:`center`,distribution:`end`,children:(0,P.jsx)(c,{placeholder:`Search Servers …`})})}),(0,P.jsxs)(m,{columns:4,children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(y,{children:`Name`}),(0,P.jsx)(y,{children:`Region`}),(0,P.jsx)(y,{children:`Status`}),(0,P.jsx)(y,{children:`Last Updated`})]}),(0,P.jsx)(v,{children:(0,P.jsx)(h,{colSpan:4,children:(0,P.jsx)(j,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="empty"` inside a `DataGridRow` spanning all columns when the data source contains no items.'}}}},X={args:{status:`no-matches`},render:e=>(0,P.jsxs)(o,{direction:`vertical`,children:[(0,P.jsx)(b,{children:(0,P.jsx)(o,{alignment:`center`,distribution:`end`,children:(0,P.jsx)(c,{placeholder:`Search Servers …`})})}),(0,P.jsxs)(m,{columns:4,children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(y,{children:`Name`}),(0,P.jsx)(y,{children:`Region`}),(0,P.jsx)(y,{children:`Status`}),(0,P.jsx)(y,{children:`Last Updated`})]}),(0,P.jsx)(v,{children:(0,P.jsx)(h,{colSpan:4,children:(0,P.jsx)(j,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="no-matches"` inside a `DataGridRow` spanning all columns when items exist but none match the currently applied filters.'}}}},Z={args:{status:`error`,details:L},render:e=>(0,P.jsxs)(o,{direction:`vertical`,children:[(0,P.jsx)(b,{children:(0,P.jsx)(o,{alignment:`center`,distribution:`end`,children:(0,P.jsx)(c,{placeholder:`Search Servers …`})})}),(0,P.jsxs)(m,{columns:4,children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(y,{children:`Name`}),(0,P.jsx)(y,{children:`Region`}),(0,P.jsx)(y,{children:`Status`}),(0,P.jsx)(y,{children:`Last Updated`})]}),(0,P.jsx)(v,{children:(0,P.jsx)(h,{colSpan:4,children:(0,P.jsx)(j,{...e})})})]})]}),parameters:{docs:{description:{story:"DataGrid error state with a stack trace passed via `details`."}}}},Q=[`Default`,`HttpError`,`WithDetails`,`WithAction`,`WithReactNodeContent`,`Loading`,`InPageContext`,`WithCodeInPageContext`,`WithStatusInPageContext`,`DataGridLoading`,`DataGridError`,`DataGridEmpty`,`DataGridNoMatches`,`DataGridErrorWithDetails`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    code: 404
  },
  parameters: {
    docs: {
      description: {
        story: "Page-level 404 error. Both \`title\` and \`body\` will render the correct error title and body for known Http errors by default. These can be overridden when needed."
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    details: longStackTrace
  },
  parameters: {
    docs: {
      description: {
        story: "Pass a stack trace or server response via \`details\` to render it in a scrollable \`<pre>\` block below the message. Useful for technical users who need the full error context."
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  },
  render: args => <Status {...args} action={<Button variant="primary">Retry</Button>} />,
  parameters: {
    docs: {
      description: {
        story: "Pass any element via the \`action\` slot — typically a \`Button\` or a button-styled anchor."
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Status status="error" title={<>Something Went Wrong</>} body={<>
          An error occurred.{" "}
          <a href="#" className="jn:underline">
            Learn more
          </a>{" "}
          or try again later.
        </>} />,
  parameters: {
    docs: {
      description: {
        story: "\`title\` and \`body\` both accept React nodes, allowing links, line breaks, and other inline elements for richer messaging."
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    status: "progress"
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="progress"\` at page or section level while data is being fetched.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: [MockPageContextDecorator],
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Default error state in a page context. \`Status\` applies a top margin automatically based on its content."
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: [MockPageContextDecorator],
  args: {
    code: 404
  },
  parameters: {
    docs: {
      description: {
        story: "HTTP error with a large code display. The top margin is reduced as the code block provides sufficient visual weight."
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  decorators: [MockPageContextDecorator],
  args: {
    status: "progress"
  },
  parameters: {
    docs: {
      description: {
        story: "Progress/loading state in a page context. The top margin is sized to account for the spinner."
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    status: "progress",
    title: "Loading Servers …"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="progress"\` inside a \`DataGridRow\` spanning all columns while data is being fetched. Use the title \`title\` prop to further qualify the kind of items currently being loaded if possible, otherwise the default title "Loading …" will be rendered.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="error"\` inside a \`DataGridRow\` spanning all columns when a data fetch or operation has failed.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    status: "empty"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="empty"\` inside a \`DataGridRow\` spanning all columns when the data source contains no items.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    status: "no-matches"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="no-matches"\` inside a \`DataGridRow\` spanning all columns when items exist but none match the currently applied filters.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    details: longStackTrace
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "DataGrid error state with a stack trace passed via \`details\`."
      }
    }
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Y as DataGridEmpty,J as DataGridError,Z as DataGridErrorWithDetails,q as DataGridLoading,X as DataGridNoMatches,R as Default,z as HttpError,W as InPageContext,U as Loading,V as WithAction,G as WithCodeInPageContext,B as WithDetails,H as WithReactNodeContent,K as WithStatusInPageContext,Q as __namedExportsOrder,F as default};