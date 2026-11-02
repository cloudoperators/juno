import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{r as n}from"./react-8KJKb_Eb.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{i,l as a,o,t as s}from"./TabBarItem-Bd6yqZ7V.js";import{t as c}from"./PortalProvider.component-CNMssZkl.js";import{t as l}from"./PortalProvider-Df6qosYZ.js";import{t as u}from"./Stack.component-Dk9LkHsH.js";import{t as d}from"./Stack-BJgb8uti.js";import{t as f}from"./SearchInput.component-R7EPpqsk.js";import{t as p}from"./SearchInput-MAR3O-j1.js";import{t as m}from"./Button.component-v5gElSbf.js";import{t as h}from"./Button-CT4HzW42.js";import{t as g}from"./Checkbox.component-BFhIYwqQ.js";import{t as _}from"./Checkbox-BdmZIn6l.js";import{r as v,t as y}from"./ComboBoxOption.component-kO4LC1EV.js";import{r as b,t as x}from"./SelectOption.component-BtmbMaMb.js";import{c as S,i as C,n as w,r as T,t as E}from"./PopupMenu-CpQZGKkX.js";import{n as D,t as O}from"./ComboBoxOption-B05i2Ruu.js";import{c as k,i as A,l as j,o as M,r as N,t as P}from"./DataGridHeadCell.component-DMxJssqg.js";import{n as F,t as I}from"./DataGridHeadCell-B2azo0mH.js";import{t as L}from"./DataGridToolbar.component-D5qwpKDL.js";import{t as R}from"./DataGridToolbar-qbJ9X6ou.js";import{n as z,t as B}from"./SelectOption-T2cxaqYg.js";import{t as V}from"./SortButton.component-bmSmNOyg.js";import{n as H,t as U}from"./InputGroup-B9Lm-sE5.js";import{t as W}from"./InputGroup.component-CHfils0T.js";import{n as G,t as K}from"./Pill-BD0vz4tg.js";var q,J,Y,X,Z,Q;function $(){return($=e((()=>{q=t(n()),j(),F(),N(),I(),R(),d(),h(),_(),z(),B(),H(),E(),U(),D(),O(),p(),K(),l(),o(),s(),J=r(),Y={title:`Patterns/DataGrid/DataGrid Pattern`,decorators:[e=>(0,J.jsx)(c,{children:(0,J.jsx)(e,{})})],parameters:{docs:{description:{component:"\nThe **DataGrid pattern** is the complete composition: the `DataGrid` component for displaying the data, with the DataGrid Header composition above it for everything users need to interact with and configure the dataset.\n\nThe header and the grid are wrapped together in a single outer vertical `Stack` (`juno-pattern-datagrid-outer`); the header zones are wrapped in their own vertical `Stack` (`juno-pattern-datagrid-header`) inside it.\n\nThis page documents the two working together. For the individual pieces, see the [DataGrid component](?path=/docs/components-datagrid-datagrid--docs) and the [DataGrid Header](?path=/docs/patterns-datagrid-datagrid-header--docs) composition. Every header zone and element is optional — include only what the specific DataGrid needs.\n        "}}}},X=[{id:`1`,name:`node-prod-01`,region:`eu-west-1`,status:`Running`,az:`AZ-1`},{id:`2`,name:`node-prod-02`,region:`eu-west-1`,status:`Stopped`,az:`AZ-2`},{id:`3`,name:`node-staging-01`,region:`us-east-1`,status:`Running`,az:`AZ-1`},{id:`4`,name:`node-dev-01`,region:`ap-south-1`,status:`Error`,az:`AZ-3`}],Z={render:()=>{let[e,t]=(0,q.useState)(`asc`),[n,r]=(0,q.useState)({}),[o,s]=(0,q.useState)(`All`);return(0,J.jsxs)(u,{direction:`vertical`,className:`juno-pattern-datagrid-outer`,children:[(0,J.jsxs)(u,{direction:`vertical`,className:`juno-pattern-datagrid-header`,children:[(0,J.jsxs)(u,{distribution:`between`,alignment:`center`,gap:`2`,className:`jn:pb-2`,children:[(0,J.jsxs)(a,{appearance:`buttons`,activeItem:o,onActiveItemChange:s,children:[(0,J.jsx)(i,{label:`All`}),(0,J.jsx)(i,{label:`Running`}),(0,J.jsx)(i,{label:`Stopped`}),(0,J.jsx)(i,{label:`Error`})]}),(0,J.jsxs)(u,{gap:`2`,children:[(0,J.jsxs)(u,{gap:`0.5`,children:[(0,J.jsxs)(b,{width:`auto`,label:`Sort by`,className:`jn:min-w-40`,children:[(0,J.jsx)(x,{value:`name`,label:`Name`}),(0,J.jsx)(x,{value:`status`,label:`Status`}),(0,J.jsx)(x,{value:`region`,label:`Region`})]}),(0,J.jsx)(V,{order:e,onChange:t})]}),(0,J.jsxs)(u,{gap:`0.5`,children:[(0,J.jsxs)(w,{children:[(0,J.jsx)(S,{as:q.Fragment,children:(0,J.jsx)(m,{icon:`moreVert`,title:`More actions`})}),(0,J.jsxs)(C,{children:[(0,J.jsx)(T,{label:`Export CSV`}),(0,J.jsx)(T,{label:`Refresh all`})]})]}),(0,J.jsx)(m,{label:`Create Server`,variant:`primary`,className:`jn:whitespace-nowrap`})]})]})]}),(0,J.jsx)(L,{children:(0,J.jsxs)(u,{direction:`vertical`,gap:`2`,children:[(0,J.jsxs)(u,{distribution:`between`,alignment:`center`,children:[(0,J.jsxs)(W,{children:[(0,J.jsxs)(b,{width:`auto`,label:`Filter by`,className:`jn:min-w-44`,children:[(0,J.jsx)(x,{value:`status`,label:`Status`}),(0,J.jsx)(x,{value:`region`,label:`Region`}),(0,J.jsx)(x,{value:`az`,label:`Availability Zone`})]}),(0,J.jsxs)(v,{children:[(0,J.jsx)(y,{value:`running`,label:`Running`}),(0,J.jsx)(y,{value:`stopped`,label:`Stopped`}),(0,J.jsx)(y,{value:`error`,label:`Error`})]})]}),(0,J.jsx)(f,{placeholder:`Search servers…`})]}),(0,J.jsxs)(u,{gap:`2`,wrap:!0,children:[(0,J.jsx)(G,{pillKey:`Status`,pillValue:`Running`,closeable:!0}),(0,J.jsx)(m,{label:`Clear filters`,size:`xs`})]})]})}),(0,J.jsx)(L,{children:(0,J.jsxs)(u,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,J.jsxs)(u,{gap:`2`,alignment:`center`,children:[(0,J.jsx)(g,{"aria-label":`Select all items`}),(0,J.jsxs)(w,{className:`jn:flex jn:items-center`,children:[(0,J.jsx)(S,{as:q.Fragment,children:(0,J.jsx)(m,{size:`xs`,icon:`moreVert`,label:`Actions`})}),(0,J.jsxs)(C,{children:[(0,J.jsx)(T,{label:`Download`}),(0,J.jsx)(T,{label:`Delete`})]})]})]}),(0,J.jsx)(`span`,{className:`jn:theme-color-text-light`,children:`Showing 2 of 4 servers`}),(0,J.jsxs)(u,{gap:`2`,alignment:`center`,children:[(0,J.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,J.jsx)(m,{label:`Update`,size:`xs`})]})]})})]}),(0,J.jsxs)(k,{columns:6,minContentColumns:[0,5],children:[(0,J.jsxs)(M,{children:[(0,J.jsx)(P,{}),(0,J.jsx)(P,{children:`Name`}),(0,J.jsx)(P,{children:`Region`}),(0,J.jsx)(P,{children:`Status`}),(0,J.jsx)(P,{children:`Availability Zone`}),(0,J.jsx)(P,{})]}),X.map(e=>(0,J.jsxs)(M,{children:[(0,J.jsx)(A,{verticalAlignment:`center`,children:(0,J.jsx)(g,{"aria-label":`Select ${e.name}`,checked:!!n[e.id],onChange:t=>r(n=>({...n,[e.id]:t.target.checked}))})}),(0,J.jsx)(A,{children:e.name}),(0,J.jsx)(A,{children:e.region}),(0,J.jsx)(A,{children:e.status}),(0,J.jsx)(A,{children:e.az}),(0,J.jsx)(A,{children:(0,J.jsx)(w,{children:(0,J.jsxs)(C,{children:[(0,J.jsx)(T,{label:`Edit`}),(0,J.jsx)(T,{label:`Download`}),(0,J.jsx)(T,{label:`Delete`})]})})})]},e.id))]})]})},parameters:{docs:{description:{story:"The complete DataGrid pattern: a fully featured header (all three zones) composed above an actual `DataGrid`. The header composition and the `DataGrid` are wrapped together in an outer vertical `Stack`. Every header zone and element is optional — this example shows all of them for reference."},source:{code:`<Stack direction="vertical" className="juno-pattern-datagrid-outer">
  <Stack direction="vertical" className="juno-pattern-datagrid-header">
    {/* Zone 1 — bare Stack, no background */}
    <Stack distribution="between" alignment="center" gap="2" className="pb-2">
      <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
        <TabBarItem label="All" />
        <TabBarItem label="Running" />
        <TabBarItem label="Stopped" />
        <TabBarItem label="Error" />
      </TabBar>
      <Stack gap="2">
        <Stack gap="0.5">
          <Select width="auto" label="Sort by" className="min-w-40">
            <SelectOption value="name" label="Name" />
            <SelectOption value="status" label="Status" />
            <SelectOption value="region" label="Region" />
          </Select>
          <SortButton order={sortOrder} onChange={setSortOrder} />
        </Stack>
        <Stack gap="0.5">
          <PopupMenu>
            <PopupMenuToggle as={React.Fragment}>
              <Button icon="moreVert" title="More actions" />
            </PopupMenuToggle>
            <PopupMenuOptions>
              <PopupMenuItem label="Export CSV" />
              <PopupMenuItem label="Refresh all" />
            </PopupMenuOptions>
          </PopupMenu>
          <Button label="Create Server" variant="primary" className="whitespace-nowrap" />
        </Stack>
      </Stack>
    </Stack>

    {/* Zone 2 — DataGridToolbar provides background and spacing */}
    <DataGridToolbar>
      <Stack direction="vertical" gap="2">
        <Stack distribution="between" alignment="center">
          <InputGroup>
            <Select width="auto" label="Filter by" className="min-w-44">
              <SelectOption value="status" label="Status" />
              <SelectOption value="region" label="Region" />
              <SelectOption value="az" label="Availability Zone" />
            </Select>
            <ComboBox>
              <ComboBoxOption value="running" label="Running" />
              <ComboBoxOption value="stopped" label="Stopped" />
              <ComboBoxOption value="error" label="Error" />
            </ComboBox>
          </InputGroup>
          <SearchInput placeholder="Search servers…" />
        </Stack>
        <Stack gap="2" wrap>
          <Pill pillKey="Status" pillValue="Running" closeable />
          <Button label="Clear filters" size="xs" />
        </Stack>
      </Stack>
    </DataGridToolbar>

    {/* Zone 3 — separate DataGridToolbar */}
    <DataGridToolbar>
      <Stack distribution="between" alignment="center" className="text-sm">
        <Stack gap="2" alignment="center">
          <Checkbox />
          <PopupMenu className="flex items-center">
            <PopupMenuToggle as={React.Fragment}>
              <Button size="xs" icon="moreVert" label="Actions" />
            </PopupMenuToggle>
            <PopupMenuOptions>
              <PopupMenuItem label="Download" />
              <PopupMenuItem label="Delete" />
            </PopupMenuOptions>
          </PopupMenu>
        </Stack>
        <span className="theme-color-text-light">Showing 2 of 4 servers</span>
        <Stack gap="2" alignment="center">
          <span>Last update: 20.05.2026 @09:41</span>
          <Button label="Update" size="xs" />
        </Stack>
      </Stack>
    </DataGridToolbar>
  </Stack>

  <DataGrid columns={6} minContentColumns={[0, 5]}>
    <DataGridRow>
      <DataGridHeadCell />
      <DataGridHeadCell>Name</DataGridHeadCell>
      <DataGridHeadCell>Region</DataGridHeadCell>
      <DataGridHeadCell>Status</DataGridHeadCell>
      <DataGridHeadCell>Availability Zone</DataGridHeadCell>
      <DataGridHeadCell />
    </DataGridRow>
    {servers.map((s) => (
      <DataGridRow key={s.id}>
        <DataGridCell verticalAlignment="center">
          <Checkbox
            aria-label={\`Select \${s.name}\`}
            checked={!!selected[s.id]}
            onChange={(e) => setSelected((prev) => ({ ...prev, [s.id]: e.target.checked }))}
          />
        </DataGridCell>
        <DataGridCell>{s.name}</DataGridCell>
        <DataGridCell>{s.region}</DataGridCell>
        <DataGridCell>{s.status}</DataGridCell>
        <DataGridCell>{s.az}</DataGridCell>
        <DataGridCell>
          <PopupMenu>
            <PopupMenuOptions>
              <PopupMenuItem label="Edit" />
              <PopupMenuItem label="Download" />
              <PopupMenuItem label="Delete" />
            </PopupMenuOptions>
          </PopupMenu>
        </DataGridCell>
      </DataGridRow>
    ))}
  </DataGrid>
</Stack>`}}}},Q=[`Default`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [activeFilter, setActiveFilter] = useState<React.ReactNode>("All");
    return <Stack direction="vertical" className="juno-pattern-datagrid-outer">
        <Stack direction="vertical" className="juno-pattern-datagrid-header">
          {/* Zone 1: Predefined filter tabs (left) + sorting and primary action (right) — bare Stack, no background */}
          <Stack distribution="between" alignment="center" gap="2" className="jn:pb-2">
            <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
              <TabBarItem label="All" />
              <TabBarItem label="Running" />
              <TabBarItem label="Stopped" />
              <TabBarItem label="Error" />
            </TabBar>
            <Stack gap="2">
              <Stack gap="0.5">
                <Select width="auto" label="Sort by" className="jn:min-w-40">
                  <SelectOption value="name" label="Name" />
                  <SelectOption value="status" label="Status" />
                  <SelectOption value="region" label="Region" />
                </Select>
                <SortButton order={sortOrder} onChange={setSortOrder} />
              </Stack>
              <Stack gap="0.5">
                <PopupMenu>
                  <PopupMenuToggle as={React.Fragment}>
                    <Button icon="moreVert" title="More actions" />
                  </PopupMenuToggle>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Export CSV" />
                    <PopupMenuItem label="Refresh all" />
                  </PopupMenuOptions>
                </PopupMenu>
                <Button label="Create Server" variant="primary" className="jn:whitespace-nowrap" />
              </Stack>
            </Stack>
          </Stack>

          {/* Zone 2 — DataGridToolbar provides background and spacing */}
          <DataGridToolbar>
            <Stack direction="vertical" gap="2">
              {/* Zone 2: Filters + Search */}
              <Stack distribution="between" alignment="center">
                <InputGroup>
                  <Select width="auto" label="Filter by" className="jn:min-w-44">
                    <SelectOption value="status" label="Status" />
                    <SelectOption value="region" label="Region" />
                    <SelectOption value="az" label="Availability Zone" />
                  </Select>
                  <ComboBox>
                    <ComboBoxOption value="running" label="Running" />
                    <ComboBoxOption value="stopped" label="Stopped" />
                    <ComboBoxOption value="error" label="Error" />
                  </ComboBox>
                </InputGroup>
                <SearchInput placeholder="Search servers…" />
              </Stack>

              {/* Zone 2 cont: Active filter pills */}
              <Stack gap="2" wrap>
                <Pill pillKey="Status" pillValue="Running" closeable />
                <Button label="Clear filters" size="xs" />
              </Stack>
            </Stack>
          </DataGridToolbar>
          <DataGridToolbar>
            {/* Zone 3: Bulk actions + item count + refresh */}
            <Stack distribution="between" alignment="center" className="jn:text-sm">
              <Stack gap="2" alignment="center">
                <Checkbox aria-label="Select all items" />
                <PopupMenu className="jn:flex jn:items-center">
                  <PopupMenuToggle as={React.Fragment}>
                    <Button size="xs" icon="moreVert" label="Actions" />
                  </PopupMenuToggle>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Download" />
                    <PopupMenuItem label="Delete" />
                  </PopupMenuOptions>
                </PopupMenu>
              </Stack>
              <span className="jn:theme-color-text-light">Showing 2 of 4 servers</span>
              <Stack gap="2" alignment="center">
                <span>Last update: 20.05.2026 @09:41</span>
                <Button label="Update" size="xs" />
              </Stack>
            </Stack>
          </DataGridToolbar>
        </Stack>

        <DataGrid columns={6} minContentColumns={[0, 5]}>
          <DataGridRow>
            <DataGridHeadCell />
            <DataGridHeadCell>Name</DataGridHeadCell>
            <DataGridHeadCell>Region</DataGridHeadCell>
            <DataGridHeadCell>Status</DataGridHeadCell>
            <DataGridHeadCell>Availability Zone</DataGridHeadCell>
            <DataGridHeadCell />
          </DataGridRow>
          {servers.map(s => <DataGridRow key={s.id}>
              <DataGridCell verticalAlignment="center">
                <Checkbox aria-label={\`Select \${s.name}\`} checked={!!selected[s.id]} onChange={e => setSelected(prev => ({
              ...prev,
              [s.id]: e.target.checked
            }))} />
              </DataGridCell>
              <DataGridCell>{s.name}</DataGridCell>
              <DataGridCell>{s.region}</DataGridCell>
              <DataGridCell>{s.status}</DataGridCell>
              <DataGridCell>{s.az}</DataGridCell>
              <DataGridCell>
                <PopupMenu>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Edit" />
                    <PopupMenuItem label="Download" />
                    <PopupMenuItem label="Delete" />
                  </PopupMenuOptions>
                </PopupMenu>
              </DataGridCell>
            </DataGridRow>)}
        </DataGrid>
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: "The complete DataGrid pattern: a fully featured header (all three zones) composed above an actual \`DataGrid\`. The header composition and the \`DataGrid\` are wrapped together in an outer vertical \`Stack\`. Every header zone and element is optional — this example shows all of them for reference."
      },
      // Keep this source.code in sync with the render function above
      source: {
        code: \`
<Stack direction="vertical" className="juno-pattern-datagrid-outer">
  <Stack direction="vertical" className="juno-pattern-datagrid-header">
    {/* Zone 1 — bare Stack, no background */}
    <Stack distribution="between" alignment="center" gap="2" className="pb-2">
      <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
        <TabBarItem label="All" />
        <TabBarItem label="Running" />
        <TabBarItem label="Stopped" />
        <TabBarItem label="Error" />
      </TabBar>
      <Stack gap="2">
        <Stack gap="0.5">
          <Select width="auto" label="Sort by" className="min-w-40">
            <SelectOption value="name" label="Name" />
            <SelectOption value="status" label="Status" />
            <SelectOption value="region" label="Region" />
          </Select>
          <SortButton order={sortOrder} onChange={setSortOrder} />
        </Stack>
        <Stack gap="0.5">
          <PopupMenu>
            <PopupMenuToggle as={React.Fragment}>
              <Button icon="moreVert" title="More actions" />
            </PopupMenuToggle>
            <PopupMenuOptions>
              <PopupMenuItem label="Export CSV" />
              <PopupMenuItem label="Refresh all" />
            </PopupMenuOptions>
          </PopupMenu>
          <Button label="Create Server" variant="primary" className="whitespace-nowrap" />
        </Stack>
      </Stack>
    </Stack>

    {/* Zone 2 — DataGridToolbar provides background and spacing */}
    <DataGridToolbar>
      <Stack direction="vertical" gap="2">
        <Stack distribution="between" alignment="center">
          <InputGroup>
            <Select width="auto" label="Filter by" className="min-w-44">
              <SelectOption value="status" label="Status" />
              <SelectOption value="region" label="Region" />
              <SelectOption value="az" label="Availability Zone" />
            </Select>
            <ComboBox>
              <ComboBoxOption value="running" label="Running" />
              <ComboBoxOption value="stopped" label="Stopped" />
              <ComboBoxOption value="error" label="Error" />
            </ComboBox>
          </InputGroup>
          <SearchInput placeholder="Search servers…" />
        </Stack>
        <Stack gap="2" wrap>
          <Pill pillKey="Status" pillValue="Running" closeable />
          <Button label="Clear filters" size="xs" />
        </Stack>
      </Stack>
    </DataGridToolbar>

    {/* Zone 3 — separate DataGridToolbar */}
    <DataGridToolbar>
      <Stack distribution="between" alignment="center" className="text-sm">
        <Stack gap="2" alignment="center">
          <Checkbox />
          <PopupMenu className="flex items-center">
            <PopupMenuToggle as={React.Fragment}>
              <Button size="xs" icon="moreVert" label="Actions" />
            </PopupMenuToggle>
            <PopupMenuOptions>
              <PopupMenuItem label="Download" />
              <PopupMenuItem label="Delete" />
            </PopupMenuOptions>
          </PopupMenu>
        </Stack>
        <span className="theme-color-text-light">Showing 2 of 4 servers</span>
        <Stack gap="2" alignment="center">
          <span>Last update: 20.05.2026 @09:41</span>
          <Button label="Update" size="xs" />
        </Stack>
      </Stack>
    </DataGridToolbar>
  </Stack>

  <DataGrid columns={6} minContentColumns={[0, 5]}>
    <DataGridRow>
      <DataGridHeadCell />
      <DataGridHeadCell>Name</DataGridHeadCell>
      <DataGridHeadCell>Region</DataGridHeadCell>
      <DataGridHeadCell>Status</DataGridHeadCell>
      <DataGridHeadCell>Availability Zone</DataGridHeadCell>
      <DataGridHeadCell />
    </DataGridRow>
    {servers.map((s) => (
      <DataGridRow key={s.id}>
        <DataGridCell verticalAlignment="center">
          <Checkbox
            aria-label={\\\`Select \\\${s.name}\\\`}
            checked={!!selected[s.id]}
            onChange={(e) => setSelected((prev) => ({ ...prev, [s.id]: e.target.checked }))}
          />
        </DataGridCell>
        <DataGridCell>{s.name}</DataGridCell>
        <DataGridCell>{s.region}</DataGridCell>
        <DataGridCell>{s.status}</DataGridCell>
        <DataGridCell>{s.az}</DataGridCell>
        <DataGridCell>
          <PopupMenu>
            <PopupMenuOptions>
              <PopupMenuItem label="Edit" />
              <PopupMenuItem label="Download" />
              <PopupMenuItem label="Delete" />
            </PopupMenuOptions>
          </PopupMenu>
        </DataGridCell>
      </DataGridRow>
    ))}
  </DataGrid>
</Stack>
        \`.trim()
      }
    }
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Default,Q as __namedExportsOrder,Y as default};