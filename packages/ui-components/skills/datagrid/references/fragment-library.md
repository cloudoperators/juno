# Fragment Library

Canonical code for each building block referenced by the Decision Trees in
[datagrid-spec.md](datagrid-spec.md). Compose these into the final output; do not
paraphrase or restructure them.

**FRAG:outer-shell**

```tsx no-check
<Stack direction="vertical" className="juno-pattern-datagrid-outer"></Stack>
```

**FRAG:header-shell**

```tsx no-check
<Stack direction="vertical" className="juno-pattern-datagrid-header"></Stack>
```

**FRAG:zone1-shell** _(distribution resolved by DT-3)_

```tsx no-check
<Stack distribution="{distribution}" alignment="center" gap="2" className="jn:pb-2">
  {/* leftGroup then rightGroup */}
</Stack>
```

**FRAG:zone2-shell**

```tsx no-check
<DataGridToolbar>
  <Stack direction="vertical" gap="2">
    <Stack distribution="{topRowDistribution}" alignment="center">
      {/* topRow items (FRAG:filter and/or FRAG:search) */}
    </Stack>
    {/* pill row if showPillsRow: FRAG:filter-pills */}
  </Stack>
</DataGridToolbar>
```

**FRAG:zone3-shell**

```tsx no-check
<DataGridToolbar>
  <Stack distribution="{distribution}" alignment="center" className="jn:text-sm"></Stack>
</DataGridToolbar>
```

**FRAG:filter-tabs**

```tsx no-check
<TabBar>
  {spec.features.filterTabs.tabs.map((tab) => (
    <TabBarItem key={tab} label={tab} />
  ))}
</TabBar>
```

**FRAG:sorting**

```tsx no-check
<Stack gap="0.5">
  <Select width="auto" label="Sort by" className="jn:min-w-40">
    {/* one SelectOption per sortable field */}
    <SelectOption value="{field}" label="{label}" />
  </Select>
  <SortButton order={sortOrder} onChange={setSortOrder} />
</Stack>
```

**FRAG:overflow-menu** _(Zone 1)_

```tsx no-check
<PopupMenu>
  <PopupMenuToggle as={React.Fragment}>
    <Button icon="moreVert" title="More actions" />
  </PopupMenuToggle>
  <PopupMenuOptions>
    {/* one PopupMenuItem per spec.features.overflowActions */}
    <PopupMenuItem label="{action}" />
  </PopupMenuOptions>
</PopupMenu>
```

**FRAG:primary-action**

```tsx no-check
<Button label="{spec.features.primaryAction}" variant="primary" className="jn:whitespace-nowrap" />
```

**FRAG:filter**

```tsx no-check
<InputGroup>
  <Select width="auto" label="Filter by" className="jn:min-w-44">
    {/* one SelectOption per filter field */}
    <SelectOption value="{field}" label="{label}" />
  </Select>
  <ComboBox>
    {/* options populated from the selected filter field's values */}
    <ComboBoxOption value="{value}" label="{label}" />
  </ComboBox>
</InputGroup>
```

**FRAG:search**

```tsx no-check
<SearchInput
  placeholder={
    typeof spec.features.search === "object" && spec.features.search.placeholder
      ? spec.features.search.placeholder
      : "Search {namePlural}…"
  }
/>
```

**FRAG:filter-pills** _(conditionally rendered when filters are active)_

```tsx no-check
<Stack gap="2" wrap>
  {/* one Pill per active filter */}
  <Pill pillKey="{filterField}" pillValue="{filterValue}" closeable />
  <Button label="Clear filters" size="xs" />
</Stack>
```

**FRAG:bulk-actions**

```tsx no-check
<Stack gap="2" alignment="center">
  <Checkbox
    checked={checked}         {/* from DT-9 */}
    indeterminate={indeterminate}
    onChange={handleSelectAll}
    aria-label="Select all"
  />
  <PopupMenu className="jn:flex jn:items-center">
    <PopupMenuToggle as={React.Fragment}>
      <Button size="xs" icon="moreVert" label="Actions" disabled={noneSelected} />
    </PopupMenuToggle>
    <PopupMenuOptions>
      {/* one PopupMenuItem per spec.features.bulkActions.actions */}
      <PopupMenuItem label="{action}" />
    </PopupMenuOptions>
  </PopupMenu>
</Stack>
```

**FRAG:item-count**

```tsx no-check
<span className="jn:theme-color-text-light">
  {hasActiveFilters ? `Showing ${filteredCount} of ${totalCount} {namePlural}` : `${totalCount} {namePlural}`}
</span>
```

**FRAG:refresh**

```tsx no-check
<Stack gap="2" alignment="center">
  <span>Last update: {lastUpdated}</span>
  <Button label="Refresh" size="xs" onClick={handleRefresh} />
</Stack>
```

**FRAG:state-loading**

```tsx no-check
<DataGridRow>
  <DataGridCell colSpan={columns}>
    <Status status="progress" title="Loading {namePlural}…" />
  </DataGridCell>
</DataGridRow>
```

**FRAG:state-error**

```tsx no-check
<DataGridRow>
  <DataGridCell colSpan={columns}>
    <Status
      status="error"
      body="Could not load {namePlural}."
      action={<Button label="Try again" size="xs" onClick={handleRetry} />}
    />
  </DataGridCell>
</DataGridRow>
```

**FRAG:state-empty**

```tsx no-check
<DataGridRow>
  <DataGridCell colSpan={columns}>
    <Status status="empty" title="No {namePlural} found." body="" />
  </DataGridCell>
</DataGridRow>
```

**FRAG:state-empty-filtered**

```tsx no-check
<DataGridRow>
  <DataGridCell colSpan={columns}>
    <Status status="no-matches" body="No {namePlural} match your current filters." />
  </DataGridCell>
</DataGridRow>
```

**FRAG:cell-checkbox**

```tsx no-check
<DataGridCell verticalAlignment="center">
  <Checkbox
    aria-label={`Select ${item[primaryField] ?? item.id}`}
    checked={!!selected[item.id]}
    onChange={(e) => {
      e.stopPropagation()   {/* only if stopPropagationRequired */}
      setSelected((prev) => ({ ...prev, [item.id]: e.target.checked }))
    }}
  />
</DataGridCell>
```

**FRAG:cell-actions**

```tsx no-check
<DataGridCell>
  <PopupMenu>
    <PopupMenuOptions>
      {/* one PopupMenuItem per spec.features.rowActions */}
      <PopupMenuItem
        label="{action}"
        onClick={(e) => { e.stopPropagation(); handle{Action}(item) }}
        {/* stopPropagation only if stopPropagationRequired */}
      />
    </PopupMenuOptions>
  </PopupMenu>
</DataGridCell>
```

Note: `PopupMenu` in data cells does **not** use `PopupMenuToggle`. The component renders
a default trigger icon when no toggle is provided. Never add an explicit `PopupMenuToggle`
here — it produces a double trigger.
