/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
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
  count?: Maybe<Scalars["Int"]["output"]>
  domain?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  issueMatches?: Maybe<IssueMatchConnection>
  metadata?: Maybe<Metadata>
  namespace?: Maybe<Scalars["String"]["output"]>
  project?: Maybe<Scalars["String"]["output"]>
  region?: Maybe<Scalars["String"]["output"]>
  service?: Maybe<Service>
  serviceId?: Maybe<Scalars["String"]["output"]>
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
  domain?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  namespace?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  project?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  region?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
  supportGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ComponentInstanceFilterValue = {
  __typename?: "ComponentInstanceFilterValue"
  ccrn?: Maybe<FilterItem>
  serviceCcrn?: Maybe<FilterItem>
  supportGroupCcrn?: Maybe<FilterItem>
}

export type ComponentInstanceFilterValueCcrnArgs = {
  filter?: InputMaybe<ComponentInstanceFilter>
}

export type ComponentInstanceFilterValueServiceCcrnArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type ComponentInstanceFilterValueSupportGroupCcrnArgs = {
  filter?: InputMaybe<SupportGroupFilter>
}

export type ComponentInstanceInput = {
  ccrn?: InputMaybe<Scalars["String"]["input"]>
  componentVersionId?: InputMaybe<Scalars["String"]["input"]>
  count?: InputMaybe<Scalars["Int"]["input"]>
  serviceId?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentInstanceOrderBy = {
  by?: InputMaybe<ComponentInstanceOrderByField>
  direction?: InputMaybe<OrderDirection>
}

export enum ComponentInstanceOrderByField {
  Ccrn = "ccrn",
  Cluster = "cluster",
  Domain = "domain",
  Namespace = "namespace",
  Project = "project",
  Region = "region",
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
  first?: InputMaybe<Scalars["Int"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentInstanceOrderBy>>>
}

export type ComponentVersionIssueCountsArgs = {
  filter?: InputMaybe<IssueFilter>
}

export type ComponentVersionIssuesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
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
  componentVersionId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueMatchStatus?: InputMaybe<Array<InputMaybe<IssueMatchStatusValues>>>
  issueRepositoryId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueType?: InputMaybe<Array<InputMaybe<IssueTypes>>>
  primaryName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  state?: InputMaybe<Array<StateFilter>>
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
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueType?: InputMaybe<Array<InputMaybe<IssueTypes>>>
  primaryName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
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
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<UserFilter>
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
  id: Scalars["ID"]["output"]
  issueMatches?: Maybe<IssueMatchConnection>
  issueRepositories?: Maybe<IssueRepositoryConnection>
  metadata?: Maybe<Metadata>
  objectMetadata?: Maybe<ServiceMetadata>
  owners?: Maybe<UserConnection>
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
}

export type ServiceConnection = Connection & {
  __typename?: "ServiceConnection"
  edges?: Maybe<Array<Maybe<ServiceEdge>>>
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
  serviceCcrn?: Maybe<FilterItem>
  supportGroupCcrn?: Maybe<FilterItem>
  uniqueUserId?: Maybe<FilterItem>
  userName?: Maybe<FilterItem>
}

export type ServiceFilterValueServiceCcrnArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type ServiceFilterValueSupportGroupCcrnArgs = {
  filter?: InputMaybe<SupportGroupFilter>
}

export type ServiceFilterValueUniqueUserIdArgs = {
  filter?: InputMaybe<UserFilter>
}

export type ServiceFilterValueUserNameArgs = {
  filter?: InputMaybe<UserFilter>
}

export type ServiceInput = {
  ccrn?: InputMaybe<Scalars["String"]["input"]>
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
  state?: InputMaybe<Array<StateFilter>>
  supportGroupCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  userIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type SupportGroupInput = {
  ccrn?: InputMaybe<Scalars["String"]["input"]>
}

export type User = Node & {
  __typename?: "User"
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
  name?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<Scalars["String"]["input"]>
  uniqueUserId?: InputMaybe<Scalars["String"]["input"]>
}

export type GetServiceImageVersionsQueryVariables = Exact<{
  filter?: InputMaybe<ComponentVersionFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  orderBy?: InputMaybe<Array<InputMaybe<ComponentVersionOrderBy>> | InputMaybe<ComponentVersionOrderBy>>
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
        version?: string | null
        issueCounts?: {
          __typename?: "SeverityCounts"
          critical: number
          high: number
          medium: number
          low: number
          none: number
        } | null
        component?: { __typename?: "Component"; ccrn?: string | null } | null
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
  crit?: InputMaybe<IssueMatchFilter>
  high?: InputMaybe<IssueMatchFilter>
  med?: InputMaybe<IssueMatchFilter>
  low?: InputMaybe<IssueMatchFilter>
  none?: InputMaybe<IssueMatchFilter>
}>

export type GetServicesQuery = {
  __typename?: "Query"
  Services?: {
    __typename?: "ServiceConnection"
    totalCount: number
    edges?: Array<{
      __typename?: "ServiceEdge"
      node: {
        __typename?: "Service"
        id: string
        ccrn?: string | null
        objectMetadata?: {
          __typename?: "ServiceMetadata"
          componentInstanceCount: number
          issueMatchCount: number
        } | null
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
        critical?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
        high?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
        medium?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
        low?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
        none?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
      }
    } | null> | null
    pageInfo?: {
      __typename?: "PageInfo"
      pageNumber?: number | null
      pages?: Array<{ __typename?: "Page"; after?: string | null; pageNumber?: number | null } | null> | null
    } | null
  } | null
}

export type GetServiceFiltersQueryVariables = Exact<{ [key: string]: never }>

export type GetServiceFiltersQuery = {
  __typename?: "Query"
  ServiceFilterValues?: {
    __typename?: "ServiceFilterValue"
    serviceCcrn?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
    supportGroupCcrn?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
    uniqueUserId?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
    userName?: {
      __typename?: "FilterItem"
      displayName?: string | null
      filterName?: string | null
      values?: Array<string | null> | null
    } | null
  } | null
}

export type GetServicesCountsQueryVariables = Exact<{
  crit?: InputMaybe<IssueMatchFilter>
  high?: InputMaybe<IssueMatchFilter>
  med?: InputMaybe<IssueMatchFilter>
  low?: InputMaybe<IssueMatchFilter>
  none?: InputMaybe<IssueMatchFilter>
}>

export type GetServicesCountsQuery = {
  __typename?: "Query"
  critical?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
  high?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
  medium?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
  low?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
  none?: { __typename?: "IssueMatchConnection"; totalCount: number } | null
}

export const GetServiceImageVersionsDocument = gql`
  query GetServiceImageVersions(
    $filter: ComponentVersionFilter
    $first: Int
    $after: String
    $orderBy: [ComponentVersionOrderBy]
  ) {
    ComponentVersions(filter: $filter, first: $first, after: $after, orderBy: $orderBy) {
      edges {
        node {
          tag
          version
          issueCounts {
            critical
            high
            medium
            low
            none
          }
          component {
            ccrn
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

/**
 * __useGetServiceImageVersionsQuery__
 *
 * To run a query within a React component, call `useGetServiceImageVersionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceImageVersionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceImageVersionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetServiceImageVersionsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetServiceImageVersionsQuery, GetServiceImageVersionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetServiceImageVersionsQuery, GetServiceImageVersionsQueryVariables>(
    GetServiceImageVersionsDocument,
    options
  )
}
export function useGetServiceImageVersionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetServiceImageVersionsQuery, GetServiceImageVersionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetServiceImageVersionsQuery, GetServiceImageVersionsQueryVariables>(
    GetServiceImageVersionsDocument,
    options
  )
}
export function useGetServiceImageVersionsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetServiceImageVersionsQuery, GetServiceImageVersionsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetServiceImageVersionsQuery, GetServiceImageVersionsQueryVariables>(
    GetServiceImageVersionsDocument,
    options
  )
}
export type GetServiceImageVersionsQueryHookResult = ReturnType<typeof useGetServiceImageVersionsQuery>
export type GetServiceImageVersionsLazyQueryHookResult = ReturnType<typeof useGetServiceImageVersionsLazyQuery>
export type GetServiceImageVersionsSuspenseQueryHookResult = ReturnType<typeof useGetServiceImageVersionsSuspenseQuery>
export type GetServiceImageVersionsQueryResult = Apollo.QueryResult<
  GetServiceImageVersionsQuery,
  GetServiceImageVersionsQueryVariables
>
export const GetServicesDocument = gql`
  query GetServices(
    $filter: ServiceFilter
    $first: Int
    $after: String
    $orderBy: [ServiceOrderBy]
    $crit: IssueMatchFilter
    $high: IssueMatchFilter
    $med: IssueMatchFilter
    $low: IssueMatchFilter
    $none: IssueMatchFilter
  ) {
    Services(filter: $filter, first: $first, after: $after, orderBy: $orderBy) {
      edges {
        node {
          id
          ccrn
          objectMetadata {
            componentInstanceCount
            issueMatchCount
          }
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
          critical: issueMatches(filter: $crit) {
            totalCount
          }
          high: issueMatches(filter: $high) {
            totalCount
          }
          medium: issueMatches(filter: $med) {
            totalCount
          }
          low: issueMatches(filter: $low) {
            totalCount
          }
          none: issueMatches(filter: $none) {
            totalCount
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

/**
 * __useGetServicesQuery__
 *
 * To run a query within a React component, call `useGetServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      orderBy: // value for 'orderBy'
 *      crit: // value for 'crit'
 *      high: // value for 'high'
 *      med: // value for 'med'
 *      low: // value for 'low'
 *      none: // value for 'none'
 *   },
 * });
 */
export function useGetServicesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetServicesQuery, GetServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options)
}
export function useGetServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetServicesQuery, GetServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options)
}
export function useGetServicesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetServicesQuery, GetServicesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options)
}
export type GetServicesQueryHookResult = ReturnType<typeof useGetServicesQuery>
export type GetServicesLazyQueryHookResult = ReturnType<typeof useGetServicesLazyQuery>
export type GetServicesSuspenseQueryHookResult = ReturnType<typeof useGetServicesSuspenseQuery>
export type GetServicesQueryResult = Apollo.QueryResult<GetServicesQuery, GetServicesQueryVariables>
export const GetServiceFiltersDocument = gql`
  query GetServiceFilters {
    ServiceFilterValues {
      serviceCcrn {
        displayName
        filterName
        values
      }
      supportGroupCcrn {
        displayName
        filterName
        values
      }
      uniqueUserId {
        displayName
        filterName
        values
      }
      userName {
        displayName
        filterName
        values
      }
    }
  }
`

/**
 * __useGetServiceFiltersQuery__
 *
 * To run a query within a React component, call `useGetServiceFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetServiceFiltersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>(GetServiceFiltersDocument, options)
}
export function useGetServiceFiltersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>(
    GetServiceFiltersDocument,
    options
  )
}
export function useGetServiceFiltersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>(
    GetServiceFiltersDocument,
    options
  )
}
export type GetServiceFiltersQueryHookResult = ReturnType<typeof useGetServiceFiltersQuery>
export type GetServiceFiltersLazyQueryHookResult = ReturnType<typeof useGetServiceFiltersLazyQuery>
export type GetServiceFiltersSuspenseQueryHookResult = ReturnType<typeof useGetServiceFiltersSuspenseQuery>
export type GetServiceFiltersQueryResult = Apollo.QueryResult<GetServiceFiltersQuery, GetServiceFiltersQueryVariables>
export const GetServicesCountsDocument = gql`
  query GetServicesCounts(
    $crit: IssueMatchFilter
    $high: IssueMatchFilter
    $med: IssueMatchFilter
    $low: IssueMatchFilter
    $none: IssueMatchFilter
  ) {
    critical: IssueMatches(filter: $crit) {
      totalCount
    }
    high: IssueMatches(filter: $high) {
      totalCount
    }
    medium: IssueMatches(filter: $med) {
      totalCount
    }
    low: IssueMatches(filter: $low) {
      totalCount
    }
    none: IssueMatches(filter: $none) {
      totalCount
    }
  }
`

/**
 * __useGetServicesCountsQuery__
 *
 * To run a query within a React component, call `useGetServicesCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesCountsQuery({
 *   variables: {
 *      crit: // value for 'crit'
 *      high: // value for 'high'
 *      med: // value for 'med'
 *      low: // value for 'low'
 *      none: // value for 'none'
 *   },
 * });
 */
export function useGetServicesCountsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetServicesCountsQuery, GetServicesCountsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetServicesCountsQuery, GetServicesCountsQueryVariables>(GetServicesCountsDocument, options)
}
export function useGetServicesCountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetServicesCountsQuery, GetServicesCountsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetServicesCountsQuery, GetServicesCountsQueryVariables>(
    GetServicesCountsDocument,
    options
  )
}
export function useGetServicesCountsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetServicesCountsQuery, GetServicesCountsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetServicesCountsQuery, GetServicesCountsQueryVariables>(
    GetServicesCountsDocument,
    options
  )
}
export type GetServicesCountsQueryHookResult = ReturnType<typeof useGetServicesCountsQuery>
export type GetServicesCountsLazyQueryHookResult = ReturnType<typeof useGetServicesCountsLazyQuery>
export type GetServicesCountsSuspenseQueryHookResult = ReturnType<typeof useGetServicesCountsSuspenseQuery>
export type GetServicesCountsQueryResult = Apollo.QueryResult<GetServicesCountsQuery, GetServicesCountsQueryVariables>
