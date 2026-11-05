import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{r as n}from"./react-8KJKb_Eb.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{i,l as a,o,t as s}from"./TabBarItem-HNPqkA30.js";import{t as c}from"./PortalProvider.component-CNMssZkl.js";import{t as l}from"./PortalProvider-Df6qosYZ.js";import{t as u}from"./Stack.component-Dk9LkHsH.js";import{t as d}from"./Stack-BJgb8uti.js";import{t as f}from"./SearchInput.component-CfAaN_cy.js";import{t as p}from"./SearchInput-DWCf53s7.js";import{t as m}from"./Button.component-MslwmApd.js";import{t as h}from"./Button-B-fSoYvJ.js";import{t as g}from"./Checkbox.component-NSUdk7gc.js";import{t as _}from"./Checkbox-WaK6WjLA.js";import{r as v,t as y}from"./ComboBoxOption.component-BoOy1xLa.js";import{r as b,t as x}from"./SelectOption.component-l3f8jSvO.js";import{c as S,i as C,n as w,r as T,t as E}from"./PopupMenu-lEVMhzX1.js";import{n as D,t as O}from"./ComboBoxOption-Bjydollk.js";import{c as k,i as A,l as j,o as M,r as N,t as P}from"./DataGridHeadCell.component-DMxJssqg.js";import{n as F,t as I}from"./DataGridHeadCell-B2azo0mH.js";import{t as L}from"./DataGridToolbar.component-D5qwpKDL.js";import{t as R}from"./DataGridToolbar-qbJ9X6ou.js";import{n as z,t as B}from"./SelectOption-ryzqMZEh.js";import{t as V}from"./SortButton.component-BNNax7lT.js";import{n as H,t as U}from"./InputGroup-Bj1f11bZ.js";import{t as W}from"./InputGroup.component-CHfils0T.js";var G,K,q,J,Y,X;function Z(){return(Z=e((()=>{G=t(n()),j(),F(),N(),I(),R(),d(),h(),_(),z(),B(),H(),E(),U(),D(),O(),p(),l(),o(),s(),K=r(),q={title:`Patterns/DataGrid/DataGrid Pattern`,decorators:[e=>(0,K.jsx)(c,{children:(0,K.jsx)(e,{})})],parameters:{docs:{description:{component:"\nThe **DataGrid pattern** is the complete composition: the `DataGrid` component for displaying the data, with the DataGrid Header composition above it for everything users need to interact with and configure the dataset.\n\nThe header and the grid are wrapped together in a single outer vertical `Stack` (`juno-pattern-datagrid-outer`); the header zones are wrapped in their own vertical `Stack` (`juno-pattern-datagrid-header`) inside it.\n\nThis page documents the two working together. For the individual pieces, see the [DataGrid component](?path=/docs/components-datagrid-datagrid--docs) and the [DataGrid Header](?path=/docs/patterns-datagrid-datagrid-header--docs) composition. Every header zone and element is optional — include only what the specific DataGrid needs.\n        "}}}},J=[{id:`1`,name:`node-prod-01`,region:`eu-west-1`,status:`Running`,az:`AZ-1`},{id:`2`,name:`node-prod-02`,region:`eu-west-1`,status:`Stopped`,az:`AZ-2`},{id:`3`,name:`node-staging-01`,region:`us-east-1`,status:`Running`,az:`AZ-1`},{id:`4`,name:`node-dev-01`,region:`ap-south-1`,status:`Error`,az:`AZ-3`}],Y={render:()=>{let[e,t]=(0,G.useState)(`asc`),[n,r]=(0,G.useState)({}),[o,s]=(0,G.useState)(`All`);return(0,K.jsxs)(u,{direction:`vertical`,className:`juno-pattern-datagrid-outer`,children:[(0,K.jsxs)(u,{direction:`vertical`,className:`juno-pattern-datagrid-header`,children:[(0,K.jsxs)(u,{distribution:`between`,alignment:`center`,gap:`2`,className:`jn:pb-2`,children:[(0,K.jsxs)(a,{appearance:`buttons`,activeItem:o,onActiveItemChange:s,children:[(0,K.jsx)(i,{label:`All`}),(0,K.jsx)(i,{label:`Running`}),(0,K.jsx)(i,{label:`Stopped`}),(0,K.jsx)(i,{label:`Error`})]}),(0,K.jsxs)(u,{gap:`2`,children:[(0,K.jsxs)(u,{gap:`0.5`,children:[(0,K.jsxs)(b,{width:`auto`,label:`Sort by`,className:`jn:min-w-40`,children:[(0,K.jsx)(x,{value:`name`,label:`Name`}),(0,K.jsx)(x,{value:`status`,label:`Status`}),(0,K.jsx)(x,{value:`region`,label:`Region`})]}),(0,K.jsx)(V,{order:e,onChange:t})]}),(0,K.jsxs)(u,{gap:`0.5`,children:[(0,K.jsxs)(w,{children:[(0,K.jsx)(S,{as:G.Fragment,children:(0,K.jsx)(m,{icon:`moreVert`,title:`More actions`})}),(0,K.jsxs)(C,{children:[(0,K.jsx)(T,{label:`Export CSV`}),(0,K.jsx)(T,{label:`Refresh all`})]})]}),(0,K.jsx)(m,{label:`Create Server`,variant:`primary`,className:`jn:whitespace-nowrap`})]})]})]}),(0,K.jsx)(L,{children:(0,K.jsx)(u,{direction:`vertical`,gap:`2`,children:(0,K.jsxs)(u,{distribution:`between`,alignment:`center`,children:[(0,K.jsxs)(W,{children:[(0,K.jsxs)(b,{width:`auto`,label:`Filter by`,className:`jn:min-w-44`,children:[(0,K.jsx)(x,{value:`status`,label:`Status`}),(0,K.jsx)(x,{value:`region`,label:`Region`}),(0,K.jsx)(x,{value:`az`,label:`Availability Zone`})]}),(0,K.jsxs)(v,{children:[(0,K.jsx)(y,{value:`running`,label:`Running`}),(0,K.jsx)(y,{value:`stopped`,label:`Stopped`}),(0,K.jsx)(y,{value:`error`,label:`Error`})]})]}),(0,K.jsx)(f,{placeholder:`Search servers…`})]})})}),(0,K.jsx)(L,{children:(0,K.jsxs)(u,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,K.jsxs)(u,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(g,{"aria-label":`Select all items`}),(0,K.jsxs)(w,{className:`jn:flex jn:items-center`,children:[(0,K.jsx)(S,{as:G.Fragment,children:(0,K.jsx)(m,{size:`xs`,icon:`moreVert`,label:`Actions`})}),(0,K.jsxs)(C,{children:[(0,K.jsx)(T,{label:`Download`}),(0,K.jsx)(T,{label:`Delete`})]})]})]}),(0,K.jsx)(`span`,{className:`jn:theme-color-text-light`,children:`4 servers`}),(0,K.jsxs)(u,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,K.jsx)(m,{label:`Update`,size:`xs`})]})]})})]}),(0,K.jsxs)(k,{columns:6,minContentColumns:[0,5],children:[(0,K.jsxs)(M,{children:[(0,K.jsx)(P,{}),(0,K.jsx)(P,{children:`Name`}),(0,K.jsx)(P,{children:`Region`}),(0,K.jsx)(P,{children:`Status`}),(0,K.jsx)(P,{children:`Availability Zone`}),(0,K.jsx)(P,{})]}),J.map(e=>(0,K.jsxs)(M,{children:[(0,K.jsx)(A,{verticalAlignment:`center`,children:(0,K.jsx)(g,{"aria-label":`Select ${e.name}`,checked:!!n[e.id],onChange:t=>r(n=>({...n,[e.id]:t.target.checked}))})}),(0,K.jsx)(A,{children:e.name}),(0,K.jsx)(A,{children:e.region}),(0,K.jsx)(A,{children:e.status}),(0,K.jsx)(A,{children:e.az}),(0,K.jsx)(A,{children:(0,K.jsx)(w,{children:(0,K.jsxs)(C,{children:[(0,K.jsx)(T,{label:`Edit`}),(0,K.jsx)(T,{label:`Download`}),(0,K.jsx)(T,{label:`Delete`})]})})})]},e.id))]})]})},parameters:{docs:{description:{story:'The complete DataGrid pattern: a fully featured header (all three zones) composed above an actual `DataGrid`. The header composition and the `DataGrid` are wrapped together in an outer vertical `Stack`. Every header zone and element is optional — this example shows all of them for reference. The static example depicts the unfiltered default state (the `All` tab, all 4 rows, so the item count reads "4 servers"). When a predefined filter (or a manual filter) is active, the item count should update to "Showing X of Y servers" to reflect the narrowed set — this static story does not wire that interaction.'},source:{code:`<Stack direction="vertical" className="juno-pattern-datagrid-outer">
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
      </Stack>
    </DataGridToolbar>

    {/* Zone 3 — separate DataGridToolbar */}
    <DataGridToolbar>
      <Stack distribution="between" alignment="center" className="text-sm">
        <Stack gap="2" alignment="center">
          <Checkbox aria-label="Select all items" />
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
        <span className="theme-color-text-light">4 servers</span>
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
</Stack>`}}}},X=[`Default`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
              <span className="jn:theme-color-text-light">4 servers</span>
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
        story: 'The complete DataGrid pattern: a fully featured header (all three zones) composed above an actual \`DataGrid\`. The header composition and the \`DataGrid\` are wrapped together in an outer vertical \`Stack\`. Every header zone and element is optional — this example shows all of them for reference. The static example depicts the unfiltered default state (the \`All\` tab, all 4 rows, so the item count reads "4 servers"). When a predefined filter (or a manual filter) is active, the item count should update to "Showing X of Y servers" to reflect the narrowed set — this static story does not wire that interaction.'
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
      </Stack>
    </DataGridToolbar>

    {/* Zone 3 — separate DataGridToolbar */}
    <DataGridToolbar>
      <Stack distribution="between" alignment="center" className="text-sm">
        <Stack gap="2" alignment="center">
          <Checkbox aria-label="Select all items" />
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
        <span className="theme-color-text-light">4 servers</span>
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
}`,...Y.parameters?.docs?.source}}}})))()}Z();export{Y as Default,X as __namedExportsOrder,q as default};