import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as ee}from"./react-CmJWSAiZ.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{t as r}from"./PortalProvider.component-CsqbhyYC.js";import{t as i}from"./PortalProvider-u7jg7Xq4.js";import{t as a}from"./Stack.component-DukGtGVk.js";import{t as o}from"./Stack-DfuJjWKy.js";import{n as s,t as c}from"./SearchInput-HyVk5upT.js";import{t as l}from"./Button.component-4beXWFwY.js";import{t as u}from"./Button-BYm9sOvV.js";import{t as d}from"./Checkbox.component-Ceqc7FIW.js";import{t as te}from"./Checkbox-mDhb1KVg.js";import{r as f,t as p}from"./ComboBoxOption.component-Buze9wVY.js";import{n as m,t as h}from"./ComboBoxOption-BBlQlCVh.js";import{i as g,o as _,r as v,s as y,t as b}from"./DataGridCell.component-Ct4hcSbR.js";import{t as x}from"./DataGridCell-D16ADYN2.js";import{n as S,t as C}from"./DataGridHeadCell-BlSbvaH8.js";import{n as w,t as T}from"./DataGridCheckboxCell-DGaJaFpi.js";import{n as E,t as D}from"./DataGridToolbar-ClzeM7l5.js";import{r as O,t as k}from"./SelectOption.component-BrfGLhmb.js";import{n as A,t as j}from"./SelectOption-BZkkVxeR.js";import{n as M,t as N}from"./SortButton.component-NdLUGQrw.js";import{c as P,i as F,n as I,r as L,t as R}from"./PopupMenu-DxWMbwdh.js";import{n as z,t as B}from"./InputGroup.component-BQZT96O9.js";import{n as V,t as H}from"./Pill-CA2qY5-4.js";var U=t((()=>{M()})),W=t((()=>{z()})),G,K,q,J,Y,X,Z,Q,$;t((()=>{G=e(ee()),y(),v(),x(),C(),T(),D(),o(),u(),te(),A(),j(),U(),R(),W(),m(),h(),c(),H(),i(),K=n(),q={title:`Components/DataGrid/DataGrid Header`,decorators:[e=>(0,K.jsx)(r,{children:(0,K.jsx)(e,{})})],parameters:{docs:{description:{component:`
The DataGrid header is a composition pattern, not a single component. It sits above the column headers and holds everything users need to interact with and configure the dataset.

The header is structured in up to three zones:

- **Zone 1 — Actions:** Sorting controls, an optional overflow menu for global actions, and the primary action (e.g. "Create"). This zone has no background — it is a plain \`Stack\` with no wrapper component.
- **Zone 2 — Filters and Search:** One or more filter inputs (typically a \`Select\` + \`ComboBox\` in an \`InputGroup\`), a \`SearchInput\`, and active filter pills with a "Clear filters" button.
- **Zone 3 — DataGrid State:** Bulk actions (select-all checkbox + action menu) on the left, item count in the middle (total, or "X of Y" when filters are active), and last update timestamp with a refresh button on the right.

Zones 2 and 3 each use their own \`DataGridToolbar\`, which provides the background, padding, and separation from the grid.

Every zone and every element within a zone is optional. Only include what the specific DataGrid needs. If none of the above is needed, reconsider whether a DataGrid is the right pattern at all.
        `}}}},J=[{id:`1`,name:`node-prod-01`,region:`eu-west-1`,status:`Running`,az:`AZ-1`},{id:`2`,name:`node-prod-02`,region:`eu-west-1`,status:`Stopped`,az:`AZ-2`},{id:`3`,name:`node-staging-01`,region:`us-east-1`,status:`Running`,az:`AZ-1`},{id:`4`,name:`node-dev-01`,region:`ap-south-1`,status:`Error`,az:`AZ-3`}],Y={render:()=>(0,K.jsx)(a,{distribution:`end`,className:`jn:pb-2`,children:(0,K.jsx)(l,{label:`Create Server`,variant:`primary`})}),parameters:{docs:{description:{story:"The simplest DataGrid header: a single primary action. No `DataGridToolbar` needed — Zone 1 content sits directly in a `Stack`."},source:{type:`dynamic`}}}},X={render:()=>(0,K.jsxs)(a,{direction:`vertical`,children:[(0,K.jsx)(E,{children:(0,K.jsxs)(a,{direction:`vertical`,gap:`2`,children:[(0,K.jsxs)(a,{distribution:`between`,alignment:`center`,children:[(0,K.jsxs)(B,{children:[(0,K.jsxs)(O,{width:`auto`,className:`jn:min-w-44`,children:[(0,K.jsx)(k,{value:`region`,label:`Region`}),(0,K.jsx)(k,{value:`status`,label:`Status`}),(0,K.jsx)(k,{value:`az`,label:`Availability Zone`})]}),(0,K.jsxs)(f,{children:[(0,K.jsx)(p,{value:`eu-west-1`,label:`eu-west-1`}),(0,K.jsx)(p,{value:`us-east-1`,label:`us-east-1`}),(0,K.jsx)(p,{value:`ap-south-1`,label:`ap-south-1`})]})]}),(0,K.jsx)(s,{placeholder:`Search servers…`})]}),(0,K.jsxs)(a,{gap:`2`,wrap:!0,children:[(0,K.jsx)(V,{pillKey:`Region`,pillValue:`eu-west-1`,closeable:!0}),(0,K.jsx)(V,{pillKey:`Status`,pillValue:`Running`,closeable:!0}),(0,K.jsx)(l,{label:`Clear filters`,size:`xs`})]})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(a,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,K.jsx)(`span`,{children:`Showing 2 of 4 servers`}),(0,K.jsxs)(a,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,K.jsx)(l,{label:`Update`,size:`xs`})]})]})})]}),parameters:{docs:{description:{story:"Zones 2 and 3: filter controls, active filter pills, search, item count, and a refresh button. `DataGridToolbar` provides the background and spacing. Zone 1 is not needed here — no bulk actions or primary action required for this view."},source:{type:`dynamic`}}}},Z={render:()=>(0,K.jsx)(E,{children:(0,K.jsx)(a,{distribution:`end`,alignment:`center`,children:(0,K.jsx)(s,{placeholder:`Search servers…`})})}),parameters:{docs:{description:{story:`Zone 2 with search only — no filter controls needed. Use this when the dataset doesn't require structured filtering.`},source:{type:`dynamic`}}}},Q={render:()=>{let[e,t]=(0,G.useState)(`asc`);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(a,{direction:`vertical`,children:[(0,K.jsx)(a,{distribution:`end`,alignment:`center`,gap:`2`,className:`jn:pb-2`,children:(0,K.jsxs)(a,{gap:`2`,children:[(0,K.jsxs)(a,{gap:`0.5`,children:[(0,K.jsxs)(O,{width:`auto`,className:`jn:min-w-40`,children:[(0,K.jsx)(k,{value:`name`,label:`Name`}),(0,K.jsx)(k,{value:`status`,label:`Status`}),(0,K.jsx)(k,{value:`region`,label:`Region`})]}),(0,K.jsx)(N,{order:e,onChange:t})]}),(0,K.jsxs)(a,{gap:`0.5`,children:[(0,K.jsxs)(I,{children:[(0,K.jsx)(P,{as:G.Fragment,children:(0,K.jsx)(l,{icon:`moreVert`,title:`More actions`})}),(0,K.jsxs)(F,{children:[(0,K.jsx)(L,{label:`Export CSV`}),(0,K.jsx)(L,{label:`Refresh all`})]})]}),(0,K.jsx)(l,{label:`Create Server`,variant:`primary`,className:`jn:whitespace-nowrap`})]})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(a,{direction:`vertical`,gap:`2`,children:[(0,K.jsxs)(a,{distribution:`between`,alignment:`center`,children:[(0,K.jsxs)(B,{children:[(0,K.jsxs)(O,{width:`auto`,className:`jn:min-w-44`,children:[(0,K.jsx)(k,{value:`region`,label:`Region`}),(0,K.jsx)(k,{value:`status`,label:`Status`}),(0,K.jsx)(k,{value:`az`,label:`Availability Zone`})]}),(0,K.jsxs)(f,{children:[(0,K.jsx)(p,{value:`eu-west-1`,label:`eu-west-1`}),(0,K.jsx)(p,{value:`us-east-1`,label:`us-east-1`}),(0,K.jsx)(p,{value:`ap-south-1`,label:`ap-south-1`})]})]}),(0,K.jsx)(s,{placeholder:`Search servers…`})]}),(0,K.jsxs)(a,{gap:`2`,wrap:!0,children:[(0,K.jsx)(V,{pillKey:`Region`,pillValue:`eu-west-1`,closeable:!0}),(0,K.jsx)(V,{pillKey:`Status`,pillValue:`Running`,closeable:!0}),(0,K.jsx)(l,{label:`Clear filters`,size:`xs`})]})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(a,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,K.jsxs)(a,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(d,{"aria-label":`Select all items`}),(0,K.jsxs)(I,{className:`jn:flex jn:items-center`,children:[(0,K.jsx)(P,{as:G.Fragment,children:(0,K.jsx)(l,{size:`xs`,icon:`moreVert`,label:`Actions`})}),(0,K.jsxs)(F,{children:[(0,K.jsx)(L,{label:`Download`}),(0,K.jsx)(L,{label:`Delete`})]})]})]}),(0,K.jsx)(`span`,{className:`jn:theme-color-text-light`,children:`Showing 2 of 4 servers`}),(0,K.jsxs)(a,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,K.jsx)(l,{label:`Update`,size:`xs`})]})]})})]}),(0,K.jsxs)(_,{columns:6,minContentColumns:[0,5],children:[(0,K.jsxs)(g,{children:[(0,K.jsx)(S,{}),(0,K.jsx)(S,{children:`Name`}),(0,K.jsx)(S,{children:`Region`}),(0,K.jsx)(S,{children:`Status`}),(0,K.jsx)(S,{children:`Availability Zone`}),(0,K.jsx)(S,{})]}),J.map(e=>(0,K.jsxs)(g,{children:[(0,K.jsx)(w,{}),(0,K.jsx)(b,{children:e.name}),(0,K.jsx)(b,{children:e.region}),(0,K.jsx)(b,{children:e.status}),(0,K.jsx)(b,{children:e.az}),(0,K.jsx)(b,{children:(0,K.jsx)(I,{children:(0,K.jsxs)(F,{children:[(0,K.jsx)(L,{label:`Edit`}),(0,K.jsx)(L,{label:`Download`}),(0,K.jsx)(L,{label:`Delete`})]})})})]},e.id))]})]})},parameters:{docs:{description:{story:"Fully featured DataGrid header. Zone 1 (sort, overflow menu, primary action) is a bare `Stack` — no background, no `DataGridToolbar`. Zones 2 and 3 each get their own `DataGridToolbar`. Zone 3 carries bulk actions (checkbox + action menu) on the left, item count in the middle, and last update + refresh on the right. Every zone and every element within it is optional."},source:{code:`<Stack direction="vertical">
  {/* Zone 1 — bare Stack, no background */}
  <Stack distribution="end" alignment="center" gap="2" className="pb-2">
    <Stack gap="2">
      <Stack gap="0.5">
        <Select width="auto" className="min-w-40">
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
          <Select width="auto" className="min-w-44">
            <SelectOption value="region" label="Region" />
            <SelectOption value="status" label="Status" />
            <SelectOption value="az" label="Availability Zone" />
          </Select>
          <ComboBox>
            <ComboBoxOption value="eu-west-1" label="eu-west-1" />
            <ComboBoxOption value="us-east-1" label="us-east-1" />
            <ComboBoxOption value="ap-south-1" label="ap-south-1" />
          </ComboBox>
        </InputGroup>
        <SearchInput placeholder="Search servers…" />
      </Stack>
      <Stack gap="2" wrap>
        <Pill pillKey="Region" pillValue="eu-west-1" closeable />
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
      <DataGridCheckboxCell />
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
</DataGrid>`}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack distribution="end" className="jn:pb-2">
      <Button label="Create Server" variant="primary" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "The simplest DataGrid header: a single primary action. No \`DataGridToolbar\` needed — Zone 1 content sits directly in a \`Stack\`."
      },
      source: {
        type: "dynamic"
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack direction="vertical" gap="2">
          {/* Zone 2: Filters + Search */}
          <Stack distribution="between" alignment="center">
            <InputGroup>
              <Select width="auto" className="jn:min-w-44">
                <SelectOption value="region" label="Region" />
                <SelectOption value="status" label="Status" />
                <SelectOption value="az" label="Availability Zone" />
              </Select>
              <ComboBox>
                <ComboBoxOption value="eu-west-1" label="eu-west-1" />
                <ComboBoxOption value="us-east-1" label="us-east-1" />
                <ComboBoxOption value="ap-south-1" label="ap-south-1" />
              </ComboBox>
            </InputGroup>
            <SearchInput placeholder="Search servers…" />
          </Stack>

          {/* Zone 2 cont: Active filter pills */}
          <Stack gap="2" wrap>
            <Pill pillKey="Region" pillValue="eu-west-1" closeable />
            <Pill pillKey="Status" pillValue="Running" closeable />
            <Button label="Clear filters" size="xs" />
          </Stack>
        </Stack>
      </DataGridToolbar>
      <DataGridToolbar>
        {/* Zone 3: Item count + Refresh */}
        <Stack distribution="between" alignment="center" className="jn:text-sm">
          <span>Showing 2 of 4 servers</span>
          <Stack gap="2" alignment="center">
            <span>Last update: 20.05.2026 @09:41</span>
            <Button label="Update" size="xs" />
          </Stack>
        </Stack>
      </DataGridToolbar>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "Zones 2 and 3: filter controls, active filter pills, search, item count, and a refresh button. \`DataGridToolbar\` provides the background and spacing. Zone 1 is not needed here — no bulk actions or primary action required for this view."
      },
      source: {
        type: "dynamic"
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <DataGridToolbar>
      <Stack distribution="end" alignment="center">
        <SearchInput placeholder="Search servers…" />
      </Stack>
    </DataGridToolbar>,
  parameters: {
    docs: {
      description: {
        story: "Zone 2 with search only — no filter controls needed. Use this when the dataset doesn't require structured filtering."
      },
      source: {
        type: "dynamic"
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    return <>
        <Stack direction="vertical">
          {/* Zone 1: Sorting + primary action — bare Stack, no background */}
          <Stack distribution="end" alignment="center" gap="2" className="jn:pb-2">
            <Stack gap="2">
              <Stack gap="0.5">
                <Select width="auto" className="jn:min-w-40">
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
                  <Select width="auto" className="jn:min-w-44">
                    <SelectOption value="region" label="Region" />
                    <SelectOption value="status" label="Status" />
                    <SelectOption value="az" label="Availability Zone" />
                  </Select>
                  <ComboBox>
                    <ComboBoxOption value="eu-west-1" label="eu-west-1" />
                    <ComboBoxOption value="us-east-1" label="us-east-1" />
                    <ComboBoxOption value="ap-south-1" label="ap-south-1" />
                  </ComboBox>
                </InputGroup>
                <SearchInput placeholder="Search servers…" />
              </Stack>

              {/* Zone 2 cont: Active filter pills */}
              <Stack gap="2" wrap>
                <Pill pillKey="Region" pillValue="eu-west-1" closeable />
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
              <DataGridCheckboxCell />
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
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Fully featured DataGrid header. Zone 1 (sort, overflow menu, primary action) is a bare \`Stack\` — no background, no \`DataGridToolbar\`. Zones 2 and 3 each get their own \`DataGridToolbar\`. Zone 3 carries bulk actions (checkbox + action menu) on the left, item count in the middle, and last update + refresh on the right. Every zone and every element within it is optional."
      },
      // Keep this source.code in sync with the render function above
      source: {
        code: \`
<Stack direction="vertical">
  {/* Zone 1 — bare Stack, no background */}
  <Stack distribution="end" alignment="center" gap="2" className="pb-2">
    <Stack gap="2">
      <Stack gap="0.5">
        <Select width="auto" className="min-w-40">
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
          <Select width="auto" className="min-w-44">
            <SelectOption value="region" label="Region" />
            <SelectOption value="status" label="Status" />
            <SelectOption value="az" label="Availability Zone" />
          </Select>
          <ComboBox>
            <ComboBoxOption value="eu-west-1" label="eu-west-1" />
            <ComboBoxOption value="us-east-1" label="us-east-1" />
            <ComboBoxOption value="ap-south-1" label="ap-south-1" />
          </ComboBox>
        </InputGroup>
        <SearchInput placeholder="Search servers…" />
      </Stack>
      <Stack gap="2" wrap>
        <Pill pillKey="Region" pillValue="eu-west-1" closeable />
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
      <DataGridCheckboxCell />
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
        \`.trim()
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`WithPrimaryAction`,`WithFiltersSearchAndState`,`WithSearchOnly`,`FullyFeatured`]}))();export{Q as FullyFeatured,X as WithFiltersSearchAndState,Y as WithPrimaryAction,Z as WithSearchOnly,$ as __namedExportsOrder,q as default};