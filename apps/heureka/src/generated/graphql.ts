import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  Json: { input: any; output: any }
}

export type Activity = Node & {
  __typename?: "Activity"
  evidences?: Maybe<EvidenceConnection>
  id: Scalars["ID"]["output"]
  issueMatchChanges?: Maybe<IssueMatchChangeConnection>
  issues?: Maybe<IssueConnection>
  metadata?: Maybe<Metadata>
  services?: Maybe<ServiceConnection>
  status?: Maybe<ActivityStatusValues>
}

export type ActivityEvidencesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<EvidenceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ActivityIssueMatchChangesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchChangeFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ActivityIssuesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<IssueOrderBy>>>
}

export type ActivityServicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ServiceOrderBy>>>
}

export type ActivityConnection = Connection & {
  __typename?: "ActivityConnection"
  edges?: Maybe<Array<Maybe<ActivityEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type ActivityEdge = Edge & {
  __typename?: "ActivityEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  metadata?: Maybe<Metadata>
  node: Activity
}

export type ActivityFilter = {
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
  status?: InputMaybe<Array<InputMaybe<ActivityStatusValues>>>
}

export type ActivityInput = {
  status?: InputMaybe<ActivityStatusValues>
}

export enum ActivityStatusValues {
  Closed = "closed",
  InProgress = "in_progress",
  Open = "open",
}

export type Cvss = {
  __typename?: "CVSS"
  base?: Maybe<CvssBase>
  environmental?: Maybe<CvssEnvironmental>
  externalUrl?: Maybe<Scalars["String"]["output"]>
  temporal?: Maybe<CvssTemporal>
  vector?: Maybe<Scalars["String"]["output"]>
}

export type CvssBase = {
  __typename?: "CVSSBase"
  attackComplexity?: Maybe<Scalars["String"]["output"]>
  attackVector?: Maybe<Scalars["String"]["output"]>
  availabilityImpact?: Maybe<Scalars["String"]["output"]>
  confidentialityImpact?: Maybe<Scalars["String"]["output"]>
  integrityImpact?: Maybe<Scalars["String"]["output"]>
  privilegesRequired?: Maybe<Scalars["String"]["output"]>
  scope?: Maybe<Scalars["String"]["output"]>
  score?: Maybe<Scalars["Float"]["output"]>
  userInteraction?: Maybe<Scalars["String"]["output"]>
}

export type CvssEnvironmental = {
  __typename?: "CVSSEnvironmental"
  availabilityRequirement?: Maybe<Scalars["String"]["output"]>
  confidentialityRequirement?: Maybe<Scalars["String"]["output"]>
  integrityRequirement?: Maybe<Scalars["String"]["output"]>
  modifiedAttackComplexity?: Maybe<Scalars["String"]["output"]>
  modifiedAttackVector?: Maybe<Scalars["String"]["output"]>
  modifiedAvailabilityImpact?: Maybe<Scalars["String"]["output"]>
  modifiedConfidentialityImpact?: Maybe<Scalars["String"]["output"]>
  modifiedIntegrityImpact?: Maybe<Scalars["String"]["output"]>
  modifiedPrivilegesRequired?: Maybe<Scalars["String"]["output"]>
  modifiedScope?: Maybe<Scalars["String"]["output"]>
  modifiedUserInteraction?: Maybe<Scalars["String"]["output"]>
  score?: Maybe<Scalars["Float"]["output"]>
}

export type CvssParameter = {
  __typename?: "CVSSParameter"
  name?: Maybe<Scalars["String"]["output"]>
  value?: Maybe<Scalars["String"]["output"]>
}

export type CvssTemporal = {
  __typename?: "CVSSTemporal"
  exploitCodeMaturity?: Maybe<Scalars["String"]["output"]>
  remediationLevel?: Maybe<Scalars["String"]["output"]>
  reportConfidence?: Maybe<Scalars["String"]["output"]>
  score?: Maybe<Scalars["Float"]["output"]>
}

export type Component = Node & {
  __typename?: "Component"
  ccrn?: Maybe<Scalars["String"]["output"]>
  componentVersions?: Maybe<ComponentVersionConnection>
  id: Scalars["ID"]["output"]
  metadata?: Maybe<Metadata>
  type?: Maybe<ComponentTypeValues>
}

export type ComponentComponentVersionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentVersionFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentVersionOrderBy>>>
}

export type ComponentConnection = Connection & {
  __typename?: "ComponentConnection"
  edges?: Maybe<Array<Maybe<ComponentEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type ComponentEdge = Edge & {
  __typename?: "ComponentEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: Component
}

export type ComponentFilter = {
  componentCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
}

export type ComponentFilterValue = {
  __typename?: "ComponentFilterValue"
  componentCcrn?: Maybe<FilterItem>
}

export type ComponentFilterValueComponentCcrnArgs = {
  filter?: InputMaybe<ComponentFilter>
}

export type ComponentInput = {
  ccrn?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<ComponentTypeValues>
}

export type ComponentInstance = Node & {
  __typename?: "ComponentInstance"
  ccrn?: Maybe<Scalars["String"]["output"]>
  cluster?: Maybe<Scalars["String"]["output"]>
  componentVersion?: Maybe<ComponentVersion>
  componentVersionId?: Maybe<Scalars["String"]["output"]>
  container?: Maybe<Scalars["String"]["output"]>
  context?: Maybe<Scalars["Json"]["output"]>
  count?: Maybe<Scalars["Int"]["output"]>
  domain?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  issueMatches?: Maybe<IssueMatchConnection>
  metadata?: Maybe<Metadata>
  namespace?: Maybe<Scalars["String"]["output"]>
  parentId?: Maybe<Scalars["String"]["output"]>
  pod?: Maybe<Scalars["String"]["output"]>
  project?: Maybe<Scalars["String"]["output"]>
  region?: Maybe<Scalars["String"]["output"]>
  service?: Maybe<Service>
  serviceId?: Maybe<Scalars["String"]["output"]>
  type?: Maybe<ComponentInstanceTypes>
}

export type ComponentInstanceIssueMatchesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ComponentInstanceConnection = Connection & {
  __typename?: "ComponentInstanceConnection"
  edges: Array<Maybe<ComponentInstanceEdge>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type ComponentInstanceEdge = Edge & {
  __typename?: "ComponentInstanceEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: ComponentInstance
}

export type ComponentInstanceFilter = {
  ccrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  cluster?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  componentVersionDigest?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  container?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  context?: InputMaybe<Array<InputMaybe<Scalars["Json"]["input"]>>>
  domain?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  namespace?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  parentId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  pod?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  project?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  region?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
  supportGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  type?: InputMaybe<Array<InputMaybe<ComponentInstanceTypes>>>
}

export type ComponentInstanceFilterValue = {
  __typename?: "ComponentInstanceFilterValue"
  ccrn?: Maybe<FilterItem>
  cluster?: Maybe<FilterItem>
  container?: Maybe<FilterItem>
  context?: Maybe<FilterJsonItem>
  domain?: Maybe<FilterItem>
  namespace?: Maybe<FilterItem>
  pod?: Maybe<FilterItem>
  project?: Maybe<FilterItem>
  region?: Maybe<FilterItem>
  serviceCcrn?: Maybe<FilterItem>
  supportGroupCcrn?: Maybe<FilterItem>
  type?: Maybe<FilterItem>
}

export type ComponentInstanceFilterValueCcrnArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueClusterArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueContainerArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueContextArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueDomainArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueNamespaceArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValuePodArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueProjectArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueRegionArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueServiceCcrnArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type ComponentInstanceFilterValueSupportGroupCcrnArgs = {
  filter?: InputMaybe<SupportGroupFilter>
}

export type ComponentInstanceFilterValueTypeArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceInput = {
  ccrn?: InputMaybe<Scalars["String"]["input"]>
  cluster?: InputMaybe<Scalars["String"]["input"]>
  componentVersionId?: InputMaybe<Scalars["String"]["input"]>
  container?: InputMaybe<Scalars["String"]["input"]>
  context?: InputMaybe<Scalars["Json"]["input"]>
  count?: InputMaybe<Scalars["Int"]["input"]>
  domain?: InputMaybe<Scalars["String"]["input"]>
  namespace?: InputMaybe<Scalars["String"]["input"]>
  parentId?: InputMaybe<Scalars["String"]["input"]>
  pod?: InputMaybe<Scalars["String"]["input"]>
  project?: InputMaybe<Scalars["String"]["input"]>
  region?: InputMaybe<Scalars["String"]["input"]>
  serviceId?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<ComponentInstanceTypes>
  uuid?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentInstanceOrderBy = {
  by?: InputMaybe<ComponentInstanceOrderByField>
  direction?: InputMaybe<OrderDirection>
}

export enum ComponentInstanceOrderByField {
  Ccrn = "ccrn",
  Cluster = "cluster",
  Container = "container",
  Domain = "domain",
  Namespace = "namespace",
  Pod = "pod",
  Project = "project",
  Region = "region",
  Type = "type",
}

export enum ComponentInstanceTypes {
  Container = "Container",
  DnsZone = "DnsZone",
  FloatingIp = "FloatingIp",
  Project = "Project",
  ProjectConfiguration = "ProjectConfiguration",
  RbacPolicy = "RbacPolicy",
  RecordSet = "RecordSet",
  SecurityGroup = "SecurityGroup",
  SecurityGroupRule = "SecurityGroupRule",
  Server = "Server",
  Unknown = "Unknown",
  User = "User",
}

export enum ComponentTypeValues {
  ContainerImage = "containerImage",
  Repository = "repository",
  VirtualMachineImage = "virtualMachineImage",
}

export type ComponentVersion = Node & {
  __typename?: "ComponentVersion"
  component?: Maybe<Component>
  componentId?: Maybe<Scalars["String"]["output"]>
  componentInstances?: Maybe<ComponentInstanceConnection>
  id: Scalars["ID"]["output"]
  issueCounts?: Maybe<SeverityCounts>
  issues?: Maybe<IssueConnection>
  metadata?: Maybe<Metadata>
  organization?: Maybe<Scalars["String"]["output"]>
  repository?: Maybe<Scalars["String"]["output"]>
  tag?: Maybe<Scalars["String"]["output"]>
  version?: Maybe<Scalars["String"]["output"]>
}

export type ComponentVersionComponentInstancesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentInstanceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentInstanceOrderBy>>>
}

export type ComponentVersionIssueCountsArgs = {
  filter?: InputMaybe<IssueFilter>
}

export type ComponentVersionIssuesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<IssueOrderBy>>>
}

export type ComponentVersionConnection = Connection & {
  __typename?: "ComponentVersionConnection"
  edges: Array<Maybe<ComponentVersionEdge>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type ComponentVersionEdge = Edge & {
  __typename?: "ComponentVersionEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: ComponentVersion
}

export type ComponentVersionFilter = {
  componentCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  componentId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueRepositoryId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  organization?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  repository?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
  tag?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  version?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ComponentVersionInput = {
  componentId?: InputMaybe<Scalars["String"]["input"]>
  organization?: InputMaybe<Scalars["String"]["input"]>
  repository?: InputMaybe<Scalars["String"]["input"]>
  tag?: InputMaybe<Scalars["String"]["input"]>
  version?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentVersionOrderBy = {
  by?: InputMaybe<ComponentVersionOrderByField>
  direction?: InputMaybe<OrderDirection>
}

export enum ComponentVersionOrderByField {
  Repository = "repository",
  Severity = "severity",
}

export type Connection = {
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type DateTimeFilter = {
  after?: InputMaybe<Scalars["DateTime"]["input"]>
  before?: InputMaybe<Scalars["DateTime"]["input"]>
}

export type Edge = {
  cursor?: Maybe<Scalars["String"]["output"]>
  node: Node
}

export type Evidence = Node & {
  __typename?: "Evidence"
  activity?: Maybe<Activity>
  activityId?: Maybe<Scalars["String"]["output"]>
  author?: Maybe<User>
  authorId?: Maybe<Scalars["String"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  issueMatches?: Maybe<IssueMatchConnection>
  metadata?: Maybe<Metadata>
  raaEnd?: Maybe<Scalars["DateTime"]["output"]>
  type?: Maybe<Scalars["String"]["output"]>
  vector?: Maybe<Scalars["String"]["output"]>
}

export type EvidenceIssueMatchesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type EvidenceConnection = Connection & {
  __typename?: "EvidenceConnection"
  edges?: Maybe<Array<Maybe<EvidenceEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type EvidenceEdge = Edge & {
  __typename?: "EvidenceEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: Evidence
}

export type EvidenceFilter = {
  placeholder?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
}

export type EvidenceInput = {
  activityId?: InputMaybe<Scalars["String"]["input"]>
  authorId?: InputMaybe<Scalars["String"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  raaEnd?: InputMaybe<Scalars["DateTime"]["input"]>
  severity?: InputMaybe<SeverityInput>
  type?: InputMaybe<Scalars["String"]["input"]>
}

export type FilterItem = {
  __typename?: "FilterItem"
  displayName?: Maybe<Scalars["String"]["output"]>
  filterName?: Maybe<Scalars["String"]["output"]>
  values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>
}

export type FilterJsonItem = {
  __typename?: "FilterJsonItem"
  displayName?: Maybe<Scalars["String"]["output"]>
  filterName?: Maybe<Scalars["String"]["output"]>
  values?: Maybe<Array<Maybe<Scalars["Json"]["output"]>>>
}

export type FilterValueItem = {
  __typename?: "FilterValueItem"
  displayName?: Maybe<Scalars["String"]["output"]>
  filterName?: Maybe<Scalars["String"]["output"]>
  values?: Maybe<Array<Maybe<ValueItem>>>
}

export type Image = Node & {
  __typename?: "Image"
  id: Scalars["ID"]["output"]
  imageRegistryUrl?: Maybe<Scalars["String"]["output"]>
  pageInfo?: Maybe<PageInfo>
  repository?: Maybe<Scalars["String"]["output"]>
  versions?: Maybe<ComponentVersionConnection>
  vulnerabilities?: Maybe<VulnerabilityConnection>
  vulnerabilityCounts?: Maybe<SeverityCounts>
}

export type ImageVersionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ImageVulnerabilitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ImageConnection = Connection & {
  __typename?: "ImageConnection"
  counts?: Maybe<SeverityCounts>
  edges: Array<Maybe<ImageEdge>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type ImageEdge = Edge & {
  __typename?: "ImageEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: Image
}

export type ImageFilter = {
  service?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type Issue = Node & {
  __typename?: "Issue"
  activities?: Maybe<ActivityConnection>
  componentVersions?: Maybe<ComponentVersionConnection>
  description?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  issueMatches?: Maybe<IssueMatchConnection>
  issueVariants?: Maybe<IssueVariantConnection>
  lastModified?: Maybe<Scalars["DateTime"]["output"]>
  metadata?: Maybe<Metadata>
  objectMetadata?: Maybe<IssueMetadata>
  primaryName?: Maybe<Scalars["String"]["output"]>
  type?: Maybe<IssueTypes>
}

export type IssueActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ActivityFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type IssueComponentVersionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentVersionFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentVersionOrderBy>>>
}

export type IssueIssueMatchesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<IssueMatchOrderBy>>>
}

export type IssueIssueVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueVariantFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type IssueConnection = Connection & {
  __typename?: "IssueConnection"
  edges: Array<Maybe<IssueEdge>>
  pageInfo?: Maybe<PageInfo>
  policyViolationCount: Scalars["Int"]["output"]
  securityEventCount: Scalars["Int"]["output"]
  totalCount: Scalars["Int"]["output"]
  vulnerabilityCount: Scalars["Int"]["output"]
}

export type IssueEdge = Edge & {
  __typename?: "IssueEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: Issue
}

export type IssueFilter = {
  allServices?: InputMaybe<Scalars["Boolean"]["input"]>
  componentVersionId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueMatchStatus?: InputMaybe<Array<InputMaybe<IssueMatchStatusValues>>>
  issueRepositoryId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueType?: InputMaybe<Array<InputMaybe<IssueTypes>>>
  primaryName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
  supportGroupCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type IssueInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  primaryName?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<IssueTypes>
  uuid?: InputMaybe<Scalars["String"]["input"]>
}

export type IssueMatch = Node & {
  __typename?: "IssueMatch"
  componentInstance: ComponentInstance
  componentInstanceId?: Maybe<Scalars["String"]["output"]>
  discoveryDate?: Maybe<Scalars["DateTime"]["output"]>
  effectiveIssueVariants?: Maybe<IssueVariantConnection>
  evidences?: Maybe<EvidenceConnection>
  id: Scalars["ID"]["output"]
  issue: Issue
  issueId?: Maybe<Scalars["String"]["output"]>
  issueMatchChanges?: Maybe<IssueMatchChangeConnection>
  metadata?: Maybe<Metadata>
  remediationDate?: Maybe<Scalars["DateTime"]["output"]>
  severity?: Maybe<Severity>
  status?: Maybe<IssueMatchStatusValues>
  targetRemediationDate?: Maybe<Scalars["DateTime"]["output"]>
  user?: Maybe<User>
  userId?: Maybe<Scalars["String"]["output"]>
}

export type IssueMatchEffectiveIssueVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueVariantFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type IssueMatchEvidencesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<EvidenceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type IssueMatchIssueMatchChangesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchChangeFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type IssueMatchChange = Node & {
  __typename?: "IssueMatchChange"
  action?: Maybe<IssueMatchChangeActions>
  activity: Activity
  activityId?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  issueMatch: IssueMatch
  issueMatchId?: Maybe<Scalars["String"]["output"]>
  metadata?: Maybe<Metadata>
}

export enum IssueMatchChangeActions {
  Add = "add",
  Remove = "remove",
}

export type IssueMatchChangeConnection = Connection & {
  __typename?: "IssueMatchChangeConnection"
  edges?: Maybe<Array<Maybe<IssueMatchChangeEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type IssueMatchChangeEdge = Edge & {
  __typename?: "IssueMatchChangeEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: IssueMatchChange
}

export type IssueMatchChangeFilter = {
  action?: InputMaybe<Array<InputMaybe<IssueMatchChangeActions>>>
  state?: InputMaybe<Array<StateFilter>>
}

export type IssueMatchChangeInput = {
  action?: InputMaybe<IssueMatchChangeActions>
  activityId?: InputMaybe<Scalars["String"]["input"]>
  issueMatchId?: InputMaybe<Scalars["String"]["input"]>
}

export type IssueMatchConnection = Connection & {
  __typename?: "IssueMatchConnection"
  edges?: Maybe<Array<Maybe<IssueMatchEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type IssueMatchEdge = Edge & {
  __typename?: "IssueMatchEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: IssueMatch
}

export type IssueMatchFilter = {
  componentCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  componentInstanceId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueType?: InputMaybe<Array<InputMaybe<IssueTypes>>>
  primaryName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceOwnerUniqueUserId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceOwnerUsername?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  severity?: InputMaybe<Array<InputMaybe<SeverityValues>>>
  state?: InputMaybe<Array<StateFilter>>
  status?: InputMaybe<Array<InputMaybe<IssueMatchStatusValues>>>
  supportGroupCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type IssueMatchFilterValue = {
  __typename?: "IssueMatchFilterValue"
  componentCcrn?: Maybe<FilterItem>
  issueType?: Maybe<FilterItem>
  primaryName?: Maybe<FilterItem>
  serviceCcrn?: Maybe<FilterItem>
  severity?: Maybe<FilterItem>
  status?: Maybe<FilterItem>
  supportGroupCcrn?: Maybe<FilterItem>
}

export type IssueMatchFilterValueComponentCcrnArgs = {
  filter?: InputMaybe<ComponentFilter>
}

export type IssueMatchFilterValuePrimaryNameArgs = {
  filter?: InputMaybe<IssueFilter>
}

export type IssueMatchFilterValueServiceCcrnArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type IssueMatchFilterValueSupportGroupCcrnArgs = {
  filter?: InputMaybe<SupportGroupFilter>
}

export type IssueMatchInput = {
  componentInstanceId?: InputMaybe<Scalars["String"]["input"]>
  discoveryDate?: InputMaybe<Scalars["DateTime"]["input"]>
  issueId?: InputMaybe<Scalars["String"]["input"]>
  remediationDate?: InputMaybe<Scalars["DateTime"]["input"]>
  status?: InputMaybe<IssueMatchStatusValues>
  targetRemediationDate?: InputMaybe<Scalars["DateTime"]["input"]>
  userId?: InputMaybe<Scalars["String"]["input"]>
}

export type IssueMatchOrderBy = {
  by?: InputMaybe<IssueMatchOrderByField>
  direction?: InputMaybe<OrderDirection>
}

export enum IssueMatchOrderByField {
  ComponentInstanceCcrn = "componentInstanceCcrn",
  PrimaryName = "primaryName",
  Severity = "severity",
  TargetRemediationDate = "targetRemediationDate",
}

export enum IssueMatchStatusValues {
  FalsePositive = "false_positive",
  Mitigated = "mitigated",
  New = "new",
  RiskAccepted = "risk_accepted",
}

export type IssueMetadata = {
  __typename?: "IssueMetadata"
  activityCount: Scalars["Int"]["output"]
  componentInstanceCount: Scalars["Int"]["output"]
  componentVersionCount: Scalars["Int"]["output"]
  earliestDiscoveryDate: Scalars["DateTime"]["output"]
  earliestTargetRemediationDate: Scalars["DateTime"]["output"]
  issueMatchCount: Scalars["Int"]["output"]
  serviceCount: Scalars["Int"]["output"]
}

export type IssueOrderBy = {
  by?: InputMaybe<IssueOrderByField>
  direction?: InputMaybe<OrderDirection>
}

export enum IssueOrderByField {
  PrimaryName = "primaryName",
  Severity = "severity",
}

export type IssueRepository = Node & {
  __typename?: "IssueRepository"
  id: Scalars["ID"]["output"]
  issueVariants?: Maybe<IssueVariantConnection>
  metadata?: Maybe<Metadata>
  name?: Maybe<Scalars["String"]["output"]>
  services?: Maybe<ServiceConnection>
  url?: Maybe<Scalars["String"]["output"]>
}

export type IssueRepositoryIssueVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueVariantFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type IssueRepositoryServicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ServiceOrderBy>>>
}

export type IssueRepositoryConnection = Connection & {
  __typename?: "IssueRepositoryConnection"
  edges?: Maybe<Array<Maybe<IssueRepositoryEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type IssueRepositoryEdge = Edge & {
  __typename?: "IssueRepositoryEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  metadata?: Maybe<Metadata>
  node: IssueRepository
  priority?: Maybe<Scalars["Int"]["output"]>
}

export type IssueRepositoryFilter = {
  name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
}

export type IssueRepositoryInput = {
  name?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export enum IssueStatusValues {
  Open = "open",
  Overdue = "overdue",
  Remediated = "remediated",
  Unaffected = "unaffected",
}

export enum IssueTypes {
  PolicyViolation = "PolicyViolation",
  SecurityEvent = "SecurityEvent",
  Vulnerability = "Vulnerability",
}

export type IssueVariant = Node & {
  __typename?: "IssueVariant"
  description?: Maybe<Scalars["String"]["output"]>
  externalUrl?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  issue?: Maybe<Issue>
  issueId?: Maybe<Scalars["String"]["output"]>
  issueRepository?: Maybe<IssueRepository>
  issueRepositoryId?: Maybe<Scalars["String"]["output"]>
  metadata?: Maybe<Metadata>
  secondaryName?: Maybe<Scalars["String"]["output"]>
  severity?: Maybe<Severity>
}

export type IssueVariantConnection = Connection & {
  __typename?: "IssueVariantConnection"
  edges?: Maybe<Array<Maybe<IssueVariantEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type IssueVariantEdge = Edge & {
  __typename?: "IssueVariantEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  metadata?: Maybe<Metadata>
  node: IssueVariant
}

export type IssueVariantFilter = {
  secondaryName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
}

export type IssueVariantInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  externalUrl?: InputMaybe<Scalars["String"]["input"]>
  issueId?: InputMaybe<Scalars["String"]["input"]>
  issueRepositoryId?: InputMaybe<Scalars["String"]["input"]>
  secondaryName?: InputMaybe<Scalars["String"]["input"]>
  severity?: InputMaybe<SeverityInput>
}

export type Metadata = {
  __typename?: "Metadata"
  created_at?: Maybe<Scalars["DateTime"]["output"]>
  created_by?: Maybe<Scalars["String"]["output"]>
  deleted_at?: Maybe<Scalars["DateTime"]["output"]>
  updated_at?: Maybe<Scalars["DateTime"]["output"]>
  updated_by?: Maybe<Scalars["String"]["output"]>
}

export type Mutation = {
  __typename?: "Mutation"
  addComponentVersionToIssue: Issue
  addEvidenceToIssueMatch: IssueMatch
  addIssueRepositoryToService: Service
  addIssueToActivity: Activity
  addOwnerToService: Service
  addServiceToActivity: Activity
  addServiceToSupportGroup: SupportGroup
  addUserToSupportGroup: SupportGroup
  completeScannerRun: Scalars["Boolean"]["output"]
  createActivity: Activity
  createComponent: Component
  createComponentInstance: ComponentInstance
  createComponentVersion: ComponentVersion
  createEvidence: Evidence
  createIssue: Issue
  createIssueMatch: IssueMatch
  createIssueMatchChange: IssueMatchChange
  createIssueRepository: IssueRepository
  createIssueVariant: IssueVariant
  createScannerRun: Scalars["Boolean"]["output"]
  createService: Service
  createSupportGroup: SupportGroup
  createUser: User
  deleteActivity: Scalars["String"]["output"]
  deleteComponent: Scalars["String"]["output"]
  deleteComponentInstance: Scalars["String"]["output"]
  deleteComponentVersion: Scalars["String"]["output"]
  deleteEvidence: Scalars["String"]["output"]
  deleteIssue: Scalars["String"]["output"]
  deleteIssueMatch: Scalars["String"]["output"]
  deleteIssueMatchChange: Scalars["String"]["output"]
  deleteIssueRepository: Scalars["String"]["output"]
  deleteIssueVariant: Scalars["String"]["output"]
  deleteService: Scalars["String"]["output"]
  deleteSupportGroup: Scalars["String"]["output"]
  deleteUser: Scalars["String"]["output"]
  failScannerRun: Scalars["Boolean"]["output"]
  removeComponentVersionFromIssue: Issue
  removeEvidenceFromIssueMatch: IssueMatch
  removeIssueFromActivity: Activity
  removeIssueRepositoryFromService: Service
  removeOwnerFromService: Service
  removeServiceFromActivity: Activity
  removeServiceFromSupportGroup: SupportGroup
  removeUserFromSupportGroup: SupportGroup
  updateActivity: Activity
  updateComponent: Component
  updateComponentInstance: ComponentInstance
  updateComponentVersion: ComponentVersion
  updateEvidence: Evidence
  updateIssue: Issue
  updateIssueMatch: IssueMatch
  updateIssueMatchChange: IssueMatchChange
  updateIssueRepository: IssueRepository
  updateIssueVariant: IssueVariant
  updateService: Service
  updateSupportGroup: SupportGroup
  updateUser: User
}

export type MutationAddComponentVersionToIssueArgs = {
  componentVersionId: Scalars["ID"]["input"]
  issueId: Scalars["ID"]["input"]
}

export type MutationAddEvidenceToIssueMatchArgs = {
  evidenceId: Scalars["ID"]["input"]
  issueMatchId: Scalars["ID"]["input"]
}

export type MutationAddIssueRepositoryToServiceArgs = {
  issueRepositoryId: Scalars["ID"]["input"]
  priority: Scalars["Int"]["input"]
  serviceId: Scalars["ID"]["input"]
}

export type MutationAddIssueToActivityArgs = {
  activityId: Scalars["ID"]["input"]
  issueId: Scalars["ID"]["input"]
}

export type MutationAddOwnerToServiceArgs = {
  serviceId: Scalars["ID"]["input"]
  userId: Scalars["ID"]["input"]
}

export type MutationAddServiceToActivityArgs = {
  activityId: Scalars["ID"]["input"]
  serviceId: Scalars["ID"]["input"]
}

export type MutationAddServiceToSupportGroupArgs = {
  serviceId: Scalars["ID"]["input"]
  supportGroupId: Scalars["ID"]["input"]
}

export type MutationAddUserToSupportGroupArgs = {
  supportGroupId: Scalars["ID"]["input"]
  userId: Scalars["ID"]["input"]
}

export type MutationCompleteScannerRunArgs = {
  uuid: Scalars["String"]["input"]
}

export type MutationCreateActivityArgs = {
  input: ActivityInput
}

export type MutationCreateComponentArgs = {
  input: ComponentInput
}

export type MutationCreateComponentInstanceArgs = {
  input: ComponentInstanceInput
}

export type MutationCreateComponentVersionArgs = {
  input: ComponentVersionInput
}

export type MutationCreateEvidenceArgs = {
  input: EvidenceInput
}

export type MutationCreateIssueArgs = {
  input: IssueInput
}

export type MutationCreateIssueMatchArgs = {
  input: IssueMatchInput
}

export type MutationCreateIssueMatchChangeArgs = {
  input: IssueMatchChangeInput
}

export type MutationCreateIssueRepositoryArgs = {
  input: IssueRepositoryInput
}

export type MutationCreateIssueVariantArgs = {
  input: IssueVariantInput
}

export type MutationCreateScannerRunArgs = {
  input: ScannerRunInput
}

export type MutationCreateServiceArgs = {
  input: ServiceInput
}

export type MutationCreateSupportGroupArgs = {
  input: SupportGroupInput
}

export type MutationCreateUserArgs = {
  input: UserInput
}

export type MutationDeleteActivityArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteComponentArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteComponentInstanceArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteComponentVersionArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteEvidenceArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteIssueArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteIssueMatchArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteIssueMatchChangeArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteIssueRepositoryArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteIssueVariantArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteServiceArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteSupportGroupArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationFailScannerRunArgs = {
  message: Scalars["String"]["input"]
  uuid: Scalars["String"]["input"]
}

export type MutationRemoveComponentVersionFromIssueArgs = {
  componentVersionId: Scalars["ID"]["input"]
  issueId: Scalars["ID"]["input"]
}

export type MutationRemoveEvidenceFromIssueMatchArgs = {
  evidenceId: Scalars["ID"]["input"]
  issueMatchId: Scalars["ID"]["input"]
}

export type MutationRemoveIssueFromActivityArgs = {
  activityId: Scalars["ID"]["input"]
  issueId: Scalars["ID"]["input"]
}

export type MutationRemoveIssueRepositoryFromServiceArgs = {
  issueRepositoryId: Scalars["ID"]["input"]
  serviceId: Scalars["ID"]["input"]
}

export type MutationRemoveOwnerFromServiceArgs = {
  serviceId: Scalars["ID"]["input"]
  userId: Scalars["ID"]["input"]
}

export type MutationRemoveServiceFromActivityArgs = {
  activityId: Scalars["ID"]["input"]
  serviceId: Scalars["ID"]["input"]
}

export type MutationRemoveServiceFromSupportGroupArgs = {
  serviceId: Scalars["ID"]["input"]
  supportGroupId: Scalars["ID"]["input"]
}

export type MutationRemoveUserFromSupportGroupArgs = {
  supportGroupId: Scalars["ID"]["input"]
  userId: Scalars["ID"]["input"]
}

export type MutationUpdateActivityArgs = {
  id: Scalars["ID"]["input"]
  input: ActivityInput
}

export type MutationUpdateComponentArgs = {
  id: Scalars["ID"]["input"]
  input: ComponentInput
}

export type MutationUpdateComponentInstanceArgs = {
  id: Scalars["ID"]["input"]
  input: ComponentInstanceInput
}

export type MutationUpdateComponentVersionArgs = {
  id: Scalars["ID"]["input"]
  input: ComponentVersionInput
}

export type MutationUpdateEvidenceArgs = {
  id: Scalars["ID"]["input"]
  input: EvidenceInput
}

export type MutationUpdateIssueArgs = {
  id: Scalars["ID"]["input"]
  input: IssueInput
}

export type MutationUpdateIssueMatchArgs = {
  id: Scalars["ID"]["input"]
  input: IssueMatchInput
}

export type MutationUpdateIssueMatchChangeArgs = {
  id: Scalars["ID"]["input"]
  input: IssueMatchChangeInput
}

export type MutationUpdateIssueRepositoryArgs = {
  id: Scalars["ID"]["input"]
  input: IssueRepositoryInput
}

export type MutationUpdateIssueVariantArgs = {
  id: Scalars["ID"]["input"]
  input: IssueVariantInput
}

export type MutationUpdateServiceArgs = {
  id: Scalars["ID"]["input"]
  input: ServiceInput
}

export type MutationUpdateSupportGroupArgs = {
  id: Scalars["ID"]["input"]
  input: SupportGroupInput
}

export type MutationUpdateUserArgs = {
  id: Scalars["ID"]["input"]
  input: UserInput
}

export type Node = {
  id: Scalars["ID"]["output"]
}

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Page = {
  __typename?: "Page"
  after?: Maybe<Scalars["String"]["output"]>
  isCurrent?: Maybe<Scalars["Boolean"]["output"]>
  pageCount?: Maybe<Scalars["Int"]["output"]>
  pageNumber?: Maybe<Scalars["Int"]["output"]>
}

export type PageInfo = {
  __typename?: "PageInfo"
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>
  isValidPage?: Maybe<Scalars["Boolean"]["output"]>
  nextPageAfter?: Maybe<Scalars["String"]["output"]>
  pageNumber?: Maybe<Scalars["Int"]["output"]>
  pages?: Maybe<Array<Maybe<Page>>>
}

export type Query = {
  __typename?: "Query"
  Activities?: Maybe<ActivityConnection>
  ComponentFilterValues?: Maybe<ComponentFilterValue>
  ComponentInstanceFilterValues?: Maybe<ComponentInstanceFilterValue>
  ComponentInstances?: Maybe<ComponentInstanceConnection>
  ComponentVersions?: Maybe<ComponentVersionConnection>
  Components?: Maybe<ComponentConnection>
  Evidences?: Maybe<EvidenceConnection>
  Images?: Maybe<ImageConnection>
  IssueCounts?: Maybe<SeverityCounts>
  IssueMatchChanges?: Maybe<IssueMatchChangeConnection>
  IssueMatchFilterValues?: Maybe<IssueMatchFilterValue>
  IssueMatches?: Maybe<IssueMatchConnection>
  IssueRepositories?: Maybe<IssueRepositoryConnection>
  IssueVariants?: Maybe<IssueVariantConnection>
  Issues?: Maybe<IssueConnection>
  ScannerRunTagFilterValues?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>
  ScannerRuns?: Maybe<ScannerRunConnection>
  ServiceFilterValues?: Maybe<ServiceFilterValue>
  Services?: Maybe<ServiceConnection>
  SupportGroups?: Maybe<SupportGroupConnection>
  Users?: Maybe<UserConnection>
  Vulnerabilities?: Maybe<VulnerabilityConnection>
  VulnerabilityFilterValues?: Maybe<VulnerabilityFilterValue>
}

export type QueryActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ActivityFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryComponentInstancesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentInstanceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentInstanceOrderBy>>>
}

export type QueryComponentVersionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentVersionFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentVersionOrderBy>>>
}

export type QueryComponentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryEvidencesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<EvidenceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ImageFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryIssueCountsArgs = {
  filter?: InputMaybe<IssueFilter>
}

export type QueryIssueMatchChangesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchChangeFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryIssueMatchesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<IssueMatchOrderBy>>>
}

export type QueryIssueRepositoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueRepositoryFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryIssueVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueVariantFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryIssuesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<IssueOrderBy>>>
}

export type QueryScannerRunsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ScannerRunFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryServicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ServiceOrderBy>>>
}

export type QuerySupportGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<SupportGroupFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<SupportGroupOrderBy>>>
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<UserFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type QueryVulnerabilitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<VulnerabilityFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ScannerRun = Node & {
  __typename?: "ScannerRun"
  completed: Scalars["Boolean"]["output"]
  end_run: Scalars["DateTime"]["output"]
  id: Scalars["ID"]["output"]
  metadata?: Maybe<Metadata>
  start_run: Scalars["DateTime"]["output"]
  tag: Scalars["String"]["output"]
  uuid: Scalars["String"]["output"]
}

export type ScannerRunConnection = Connection & {
  __typename?: "ScannerRunConnection"
  edges?: Maybe<Array<Maybe<ScannerRunEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type ScannerRunEdge = Edge & {
  __typename?: "ScannerRunEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: ScannerRun
}

export type ScannerRunFilter = {
  completed: Scalars["Boolean"]["input"]
  tag?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type ScannerRunInput = {
  tag?: InputMaybe<Scalars["String"]["input"]>
  uuid?: InputMaybe<Scalars["String"]["input"]>
}

export type Service = Node & {
  __typename?: "Service"
  activities?: Maybe<ActivityConnection>
  ccrn?: Maybe<Scalars["String"]["output"]>
  componentInstances?: Maybe<ComponentInstanceConnection>
  domain?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  issueCounts?: Maybe<SeverityCounts>
  issueMatches?: Maybe<IssueMatchConnection>
  issueRepositories?: Maybe<IssueRepositoryConnection>
  metadata?: Maybe<Metadata>
  objectMetadata?: Maybe<ServiceMetadata>
  owners?: Maybe<UserConnection>
  region?: Maybe<Scalars["String"]["output"]>
  supportGroups?: Maybe<SupportGroupConnection>
}

export type ServiceActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ActivityFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ServiceComponentInstancesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentInstanceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentInstanceOrderBy>>>
}

export type ServiceIssueCountsArgs = {
  filter?: InputMaybe<IssueFilter>
}

export type ServiceIssueMatchesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueMatchFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<IssueMatchOrderBy>>>
}

export type ServiceIssueRepositoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<IssueRepositoryFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ServiceOwnersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<UserFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type ServiceSupportGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<SupportGroupFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<SupportGroupOrderBy>>>
}

export type ServiceConnection = Connection & {
  __typename?: "ServiceConnection"
  edges?: Maybe<Array<Maybe<ServiceEdge>>>
  issueCounts?: Maybe<SeverityCounts>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type ServiceEdge = Edge & {
  __typename?: "ServiceEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: Service
  priority?: Maybe<Scalars["Int"]["output"]>
}

export type ServiceFilter = {
  domain?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  region?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
  supportGroupCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  type?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  uniqueUserId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  userName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ServiceFilterValue = {
  __typename?: "ServiceFilterValue"
  domain?: Maybe<FilterItem>
  region?: Maybe<FilterItem>
  service?: Maybe<FilterItem>
  supportGroup?: Maybe<FilterItem>
  uniqueUserId?: Maybe<FilterItem>
  user?: Maybe<FilterValueItem>
  userName?: Maybe<FilterItem>
}

export type ServiceFilterValueDomainArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type ServiceFilterValueRegionArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type ServiceFilterValueServiceArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type ServiceFilterValueSupportGroupArgs = {
  filter?: InputMaybe<SupportGroupFilter>
}

export type ServiceFilterValueUniqueUserIdArgs = {
  filter?: InputMaybe<UserFilter>
}

export type ServiceFilterValueUserArgs = {
  filter?: InputMaybe<UserFilter>
}

export type ServiceFilterValueUserNameArgs = {
  filter?: InputMaybe<UserFilter>
}

export type ServiceInput = {
  ccrn?: InputMaybe<Scalars["String"]["input"]>
  domain?: InputMaybe<Scalars["String"]["input"]>
  region?: InputMaybe<Scalars["String"]["input"]>
}

export type ServiceMetadata = {
  __typename?: "ServiceMetadata"
  componentInstanceCount: Scalars["Int"]["output"]
  issueMatchCount: Scalars["Int"]["output"]
}

export type ServiceOrderBy = {
  by?: InputMaybe<ServiceOrderByField>
  direction?: InputMaybe<OrderDirection>
}

export enum ServiceOrderByField {
  Ccrn = "ccrn",
  Severity = "severity",
}

export type Severity = {
  __typename?: "Severity"
  cvss?: Maybe<Cvss>
  score?: Maybe<Scalars["Float"]["output"]>
  value?: Maybe<SeverityValues>
}

export type SeverityCounts = {
  __typename?: "SeverityCounts"
  critical: Scalars["Int"]["output"]
  high: Scalars["Int"]["output"]
  low: Scalars["Int"]["output"]
  medium: Scalars["Int"]["output"]
  none: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type SeverityInput = {
  rating?: InputMaybe<SeverityValues>
  vector?: InputMaybe<Scalars["String"]["input"]>
}

export enum SeverityValues {
  Critical = "Critical",
  High = "High",
  Low = "Low",
  Medium = "Medium",
  None = "None",
}

export enum StateFilter {
  Active = "Active",
  Deleted = "Deleted",
}

export type SupportGroup = Node & {
  __typename?: "SupportGroup"
  ccrn?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  metadata?: Maybe<Metadata>
  services?: Maybe<ServiceConnection>
  users?: Maybe<UserConnection>
}

export type SupportGroupServicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ServiceOrderBy>>>
}

export type SupportGroupUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<UserFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type SupportGroupConnection = Connection & {
  __typename?: "SupportGroupConnection"
  edges?: Maybe<Array<Maybe<SupportGroupEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type SupportGroupEdge = Edge & {
  __typename?: "SupportGroupEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: SupportGroup
}

export type SupportGroupFilter = {
  issueIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
  supportGroupCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  userIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type SupportGroupInput = {
  ccrn?: InputMaybe<Scalars["String"]["input"]>
}

export type SupportGroupOrderBy = {
  by?: InputMaybe<SupportGroupOrderByField>
  direction?: InputMaybe<OrderDirection>
}

export enum SupportGroupOrderByField {
  Ccrn = "ccrn",
}

export type User = Node & {
  __typename?: "User"
  email?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  metadata?: Maybe<Metadata>
  name?: Maybe<Scalars["String"]["output"]>
  services?: Maybe<ServiceConnection>
  supportGroups?: Maybe<SupportGroupConnection>
  type: Scalars["Int"]["output"]
  uniqueUserId?: Maybe<Scalars["String"]["output"]>
}

export type UserServicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ServiceOrderBy>>>
}

export type UserSupportGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<SupportGroupFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<SupportGroupOrderBy>>>
}

export type UserConnection = Connection & {
  __typename?: "UserConnection"
  edges?: Maybe<Array<Maybe<UserEdge>>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type UserEdge = Edge & {
  __typename?: "UserEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: User
}

export type UserFilter = {
  state?: InputMaybe<Array<StateFilter>>
  supportGroupIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  uniqueUserId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  userName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<Scalars["String"]["input"]>
  uniqueUserId?: InputMaybe<Scalars["String"]["input"]>
}

export type ValueItem = {
  __typename?: "ValueItem"
  display?: Maybe<Scalars["String"]["output"]>
  value?: Maybe<Scalars["String"]["output"]>
}

export type Vulnerability = Node & {
  __typename?: "Vulnerability"
  description?: Maybe<Scalars["String"]["output"]>
  earliestTargetRemediationDate?: Maybe<Scalars["DateTime"]["output"]>
  id: Scalars["ID"]["output"]
  name?: Maybe<Scalars["String"]["output"]>
  services?: Maybe<ServiceConnection>
  severity?: Maybe<SeverityValues>
  sourceUrl?: Maybe<Scalars["String"]["output"]>
  supportGroups?: Maybe<SupportGroupConnection>
}

export type VulnerabilityServicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type VulnerabilitySupportGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
}

export type VulnerabilityConnection = Connection & {
  __typename?: "VulnerabilityConnection"
  counts?: Maybe<SeverityCounts>
  edges: Array<Maybe<VulnerabilityEdge>>
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars["Int"]["output"]
}

export type VulnerabilityEdge = Edge & {
  __typename?: "VulnerabilityEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node: Vulnerability
}

export type VulnerabilityFilter = {
  name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  service?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  severity?: InputMaybe<Array<InputMaybe<SeverityValues>>>
  supportGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type VulnerabilityFilterValue = {
  __typename?: "VulnerabilityFilterValue"
  service?: Maybe<FilterItem>
  severity?: Maybe<FilterItem>
  supportGroup?: Maybe<FilterItem>
}

export type GetServiceFiltersQueryVariables = Exact<{ [key: string]: never }>

export type GetServiceFiltersQuery = {
  __typename?: "Query"
  ServiceFilterValues?: {
    __typename?: "ServiceFilterValue"
    service?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
    supportGroup?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
  } | null
}

export type GetServiceImageVersionIssuesQueryVariables = Exact<{
  componentVersionFilter?: InputMaybe<ComponentVersionFilter>
  issuesFilter?: InputMaybe<IssueFilter>
  issueMatchFilter?: InputMaybe<IssueMatchFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  orderByIssueSeverity?: InputMaybe<Array<InputMaybe<IssueOrderBy>> | InputMaybe<IssueOrderBy>>
  orderBySeverity?: InputMaybe<Array<InputMaybe<IssueMatchOrderBy>> | InputMaybe<IssueMatchOrderBy>>
  orderByTrd?: InputMaybe<Array<InputMaybe<IssueMatchOrderBy>> | InputMaybe<IssueMatchOrderBy>>
}>

export type GetServiceImageVersionIssuesQuery = {
  __typename?: "Query"
  ComponentVersions?: {
    __typename?: "ComponentVersionConnection"
    totalCount: number
    edges: Array<{
      __typename?: "ComponentVersionEdge"
      node: {
        __typename?: "ComponentVersion"
        issues?: {
          __typename?: "IssueConnection"
          totalCount: number
          edges: Array<{
            __typename?: "IssueEdge"
            node: {
              __typename?: "Issue"
              primaryName?: string | null
              description?: string | null
              issueVariants?: {
                __typename?: "IssueVariantConnection"
                edges?: Array<{
                  __typename?: "IssueVariantEdge"
                  node: { __typename?: "IssueVariant"; externalUrl?: string | null }
                } | null> | null
              } | null
              highestSeverity?: {
                __typename?: "IssueMatchConnection"
                totalCount: number
                edges?: Array<{
                  __typename?: "IssueMatchEdge"
                  node: {
                    __typename?: "IssueMatch"
                    severity?: {
                      __typename?: "Severity"
                      value?: SeverityValues | null
                      cvss?: { __typename?: "CVSS"; vector?: string | null; externalUrl?: string | null } | null
                    } | null
                  }
                } | null> | null
              } | null
              earliestTargetRemediationDate?: {
                __typename?: "IssueMatchConnection"
                edges?: Array<{
                  __typename?: "IssueMatchEdge"
                  node: { __typename?: "IssueMatch"; targetRemediationDate?: any | null }
                } | null> | null
              } | null
            }
          } | null>
          pageInfo?: {
            __typename?: "PageInfo"
            pageNumber?: number | null
            pages?: Array<{ __typename?: "Page"; after?: string | null; pageNumber?: number | null } | null> | null
          } | null
        } | null
      }
    } | null>
  } | null
}

export type GetServiceImageVersionsQueryVariables = Exact<{
  filter?: InputMaybe<ComponentVersionFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentVersionOrderBy>> | InputMaybe<ComponentVersionOrderBy>>
  orderByCi?: InputMaybe<Array<InputMaybe<ComponentInstanceOrderBy>> | InputMaybe<ComponentInstanceOrderBy>>
  filterCi?: InputMaybe<ComponentInstanceFilter>
  filterIc?: InputMaybe<IssueFilter>
}>

export type GetServiceImageVersionsQuery = {
  __typename?: "Query"
  ComponentVersions?: {
    __typename?: "ComponentVersionConnection"
    totalCount: number
    edges: Array<{
      __typename?: "ComponentVersionEdge"
      node: {
        __typename?: "ComponentVersion"
        tag?: string | null
        repository?: string | null
        version?: string | null
        issueCounts?: {
          __typename?: "SeverityCounts"
          critical: number
          high: number
          medium: number
          low: number
          none: number
          total: number
        } | null
        component?: { __typename?: "Component"; ccrn?: string | null } | null
        componentInstances?: {
          __typename?: "ComponentInstanceConnection"
          totalCount: number
          edges: Array<{
            __typename?: "ComponentInstanceEdge"
            node: {
              __typename?: "ComponentInstance"
              id: string
              ccrn?: string | null
              region?: string | null
              cluster?: string | null
              namespace?: string | null
              pod?: string | null
              container?: string | null
            }
          } | null>
          pageInfo?: {
            __typename?: "PageInfo"
            pageNumber?: number | null
            pages?: Array<{ __typename?: "Page"; after?: string | null; pageNumber?: number | null } | null> | null
          } | null
        } | null
      }
    } | null>
    pageInfo?: {
      __typename?: "PageInfo"
      pageNumber?: number | null
      pages?: Array<{ __typename?: "Page"; after?: string | null; pageNumber?: number | null } | null> | null
    } | null
  } | null
}

export type GetServicesQueryVariables = Exact<{
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ServiceOrderBy>> | InputMaybe<ServiceOrderBy>>
}>

export type GetServicesQuery = {
  __typename?: "Query"
  Services?: {
    __typename?: "ServiceConnection"
    issueCounts?: {
      __typename?: "SeverityCounts"
      critical: number
      high: number
      medium: number
      low: number
      none: number
      total: number
    } | null
    edges?: Array<{
      __typename?: "ServiceEdge"
      node: {
        __typename?: "Service"
        id: string
        ccrn?: string | null
        owners?: {
          __typename?: "UserConnection"
          edges?: Array<{
            __typename?: "UserEdge"
            node: { __typename?: "User"; id: string; uniqueUserId?: string | null; name?: string | null }
          } | null> | null
        } | null
        supportGroups?: {
          __typename?: "SupportGroupConnection"
          edges?: Array<{
            __typename?: "SupportGroupEdge"
            node: { __typename?: "SupportGroup"; id: string; ccrn?: string | null }
          } | null> | null
        } | null
        issueCounts?: {
          __typename?: "SeverityCounts"
          critical: number
          high: number
          medium: number
          low: number
          none: number
          total: number
        } | null
      }
    } | null> | null
    pageInfo?: {
      __typename?: "PageInfo"
      pageNumber?: number | null
      pages?: Array<{ __typename?: "Page"; after?: string | null; pageNumber?: number | null } | null> | null
    } | null
  } | null
}

export type GetVulnerabilitiesQueryVariables = Exact<{
  filter?: InputMaybe<VulnerabilityFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  firstServices?: InputMaybe<Scalars["Int"]["input"]>
  afterServices?: InputMaybe<Scalars["String"]["input"]>
}>

export type GetVulnerabilitiesQuery = {
  __typename?: "Query"
  Vulnerabilities?: {
    __typename?: "VulnerabilityConnection"
    counts?: {
      __typename?: "SeverityCounts"
      critical: number
      high: number
      medium: number
      low: number
      none: number
      total: number
    } | null
    edges: Array<{
      __typename?: "VulnerabilityEdge"
      node: {
        __typename?: "Vulnerability"
        severity?: SeverityValues | null
        name?: string | null
        sourceUrl?: string | null
        earliestTargetRemediationDate?: any | null
        description?: string | null
        services?: {
          __typename?: "ServiceConnection"
          totalCount: number
          edges?: Array<{
            __typename?: "ServiceEdge"
            node: { __typename?: "Service"; ccrn?: string | null }
          } | null> | null
          pageInfo?: {
            __typename?: "PageInfo"
            pageNumber?: number | null
            pages?: Array<{ __typename?: "Page"; after?: string | null; pageNumber?: number | null } | null> | null
          } | null
        } | null
        supportGroups?: {
          __typename?: "SupportGroupConnection"
          edges?: Array<{
            __typename?: "SupportGroupEdge"
            node: { __typename?: "SupportGroup"; ccrn?: string | null }
          } | null> | null
        } | null
      }
    } | null>
    pageInfo?: {
      __typename?: "PageInfo"
      pageNumber?: number | null
      pages?: Array<{ __typename?: "Page"; after?: string | null; pageNumber?: number | null } | null> | null
    } | null
  } | null
}

export type GetVulnerabilityFiltersQueryVariables = Exact<{ [key: string]: never }>

export type GetVulnerabilityFiltersQuery = {
  __typename?: "Query"
  VulnerabilityFilterValues?: {
    __typename?: "VulnerabilityFilterValue"
    supportGroup?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
    severity?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
  } | null
}

export const GetServiceFiltersDocument = gql`
  query GetServiceFilters {
    ServiceFilterValues {
      service {
        displayName
        filterName
        values
      }
      supportGroup {
        displayName
        filterName
        values
      }
    }
  }
`
export type GetServiceFiltersQueryResult = Apollo.QueryResult<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>
export const GetServiceImageVersionIssuesDocument = gql`
  query GetServiceImageVersionIssues(
    $componentVersionFilter: ComponentVersionFilter
    $issuesFilter: IssueFilter
    $issueMatchFilter: IssueMatchFilter
    $first: Int
    $after: String
    $orderByIssueSeverity: [IssueOrderBy]
    $orderBySeverity: [IssueMatchOrderBy]
    $orderByTrd: [IssueMatchOrderBy]
  ) {
    ComponentVersions(filter: $componentVersionFilter) {
      edges {
        node {
          issues(first: $first, after: $after, filter: $issuesFilter, orderBy: $orderByIssueSeverity) {
            edges {
              node {
                issueVariants(first: 1) {
                  edges {
                    node {
                      externalUrl
                    }
                  }
                }
                primaryName
                description
                highestSeverity: issueMatches(filter: $issueMatchFilter, first: 1, orderBy: $orderBySeverity) {
                  totalCount
                  edges {
                    node {
                      severity {
                        value
                        cvss {
                          vector
                          externalUrl
                        }
                      }
                    }
                  }
                }
                earliestTargetRemediationDate: issueMatches(filter: $issueMatchFilter, first: 1, orderBy: $orderByTrd) {
                  edges {
                    node {
                      targetRemediationDate
                    }
                  }
                }
              }
            }
            totalCount
            pageInfo {
              pageNumber
              pages {
                after
                pageNumber
              }
            }
          }
        }
      }
      totalCount
    }
  }
`
export type GetServiceImageVersionIssuesQueryResult = Apollo.QueryResult<
  GetServiceImageVersionIssuesQuery,
  GetServiceImageVersionIssuesQueryVariables
>
export const GetServiceImageVersionsDocument = gql`
  query GetServiceImageVersions(
    $filter: ComponentVersionFilter
    $first: Int
    $after: String
    $orderBy: [ComponentVersionOrderBy]
    $orderByCi: [ComponentInstanceOrderBy]
    $filterCi: ComponentInstanceFilter
    $filterIc: IssueFilter
  ) {
    ComponentVersions(filter: $filter, first: $first, after: $after, orderBy: $orderBy) {
      edges {
        node {
          tag
          repository
          version
          issueCounts(filter: $filterIc) {
            critical
            high
            medium
            low
            none
            total
          }
          component {
            ccrn
          }
          componentInstances(filter: $filterCi, orderBy: $orderByCi, first: 1000) {
            totalCount
            edges {
              node {
                id
                ccrn
                region
                cluster
                namespace
                pod
                container
              }
            }
            pageInfo {
              pageNumber
              pages {
                after
                pageNumber
              }
            }
          }
        }
      }
      totalCount
      pageInfo {
        pageNumber
        pages {
          after
          pageNumber
        }
      }
    }
  }
`
export type GetServiceImageVersionsQueryResult = Apollo.QueryResult<
  GetServiceImageVersionsQuery,
  GetServiceImageVersionsQueryVariables
>
export const GetServicesDocument = gql`
  query GetServices($filter: ServiceFilter, $first: Int, $after: String, $orderBy: [ServiceOrderBy]) {
    Services(filter: $filter, first: $first, after: $after, orderBy: $orderBy) {
      issueCounts {
        critical
        high
        medium
        low
        none
        total
      }
      edges {
        node {
          id
          ccrn
          owners {
            edges {
              node {
                id
                uniqueUserId
                name
              }
            }
          }
          supportGroups {
            edges {
              node {
                id
                ccrn
              }
            }
          }
          issueCounts {
            critical
            high
            medium
            low
            none
            total
          }
        }
      }
      pageInfo {
        pageNumber
        pages {
          after
          pageNumber
        }
      }
    }
  }
`
export type GetServicesQueryResult = Apollo.QueryResult<GetServicesQuery, GetServicesQueryVariables>
export const GetVulnerabilitiesDocument = gql`
  query GetVulnerabilities(
    $filter: VulnerabilityFilter
    $first: Int
    $after: String
    $firstServices: Int
    $afterServices: String
  ) {
    Vulnerabilities(filter: $filter, first: $first, after: $after) {
      counts {
        critical
        high
        medium
        low
        none
        total
      }
      edges {
        node {
          severity
          name
          sourceUrl
          earliestTargetRemediationDate
          description
          services(first: $firstServices, after: $afterServices) {
            totalCount
            edges {
              node {
                ccrn
              }
            }
            pageInfo {
              pageNumber
              pages {
                after
                pageNumber
              }
            }
          }
          supportGroups {
            edges {
              node {
                ccrn
              }
            }
          }
        }
      }
      pageInfo {
        pageNumber
        pages {
          after
          pageNumber
        }
      }
    }
  }
`
export type GetVulnerabilitiesQueryResult = Apollo.QueryResult<
  GetVulnerabilitiesQuery,
  GetVulnerabilitiesQueryVariables
>
export const GetVulnerabilityFiltersDocument = gql`
  query GetVulnerabilityFilters {
    VulnerabilityFilterValues {
      supportGroup {
        displayName
        filterName
        values
      }
      severity {
        displayName
        filterName
        values
      }
    }
  }
`
export type GetVulnerabilityFiltersQueryResult = Apollo.QueryResult<
  GetVulnerabilityFiltersQuery,
  GetVulnerabilityFiltersQueryVariables
>
