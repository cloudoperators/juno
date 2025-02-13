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
  componentVersion?: Maybe<ComponentVersion>
  componentVersionId?: Maybe<Scalars["String"]["output"]>
  count?: Maybe<Scalars["Int"]["output"]>
  id: Scalars["ID"]["output"]
  issueMatches?: Maybe<IssueMatchConnection>
  metadata?: Maybe<Metadata>
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
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  serviceCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
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
  issues?: Maybe<IssueConnection>
  metadata?: Maybe<Metadata>
  version?: Maybe<Scalars["String"]["output"]>
}

export type ComponentVersionComponentInstancesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
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
  version?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ComponentVersionInput = {
  componentId?: InputMaybe<Scalars["String"]["input"]>
  version?: InputMaybe<Scalars["String"]["input"]>
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
  affectedService?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  componentVersionId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueMatchStatus?: InputMaybe<Array<InputMaybe<IssueMatchStatusValues>>>
  issueType?: InputMaybe<Array<InputMaybe<IssueTypes>>>
  primaryName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type IssueInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  primaryName?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<IssueTypes>
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
  affectedService?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  componentCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  issueType?: InputMaybe<Array<InputMaybe<IssueTypes>>>
  primaryName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  search?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  severity?: InputMaybe<Array<InputMaybe<SeverityValues>>>
  status?: InputMaybe<Array<InputMaybe<IssueMatchStatusValues>>>
  supportGroupCcrn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type IssueMatchFilterValue = {
  __typename?: "IssueMatchFilterValue"
  affectedService?: Maybe<FilterItem>
  componentCcrn?: Maybe<FilterItem>
  issueType?: Maybe<FilterItem>
  primaryName?: Maybe<FilterItem>
  severity?: Maybe<FilterItem>
  status?: Maybe<FilterItem>
  supportGroupCcrn?: Maybe<FilterItem>
}

export type IssueMatchFilterValueAffectedServiceArgs = {
  filter?: InputMaybe<ServiceFilter>
}

export type IssueMatchFilterValueComponentCcrnArgs = {
  filter?: InputMaybe<ComponentFilter>
}

export type IssueMatchFilterValuePrimaryNameArgs = {
  filter?: InputMaybe<IssueFilter>
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
}

export type QueryComponentVersionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ComponentVersionFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
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

export type QueryServicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
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

export type Service = Node & {
  __typename?: "Service"
  activities?: Maybe<ActivityConnection>
  ccrn?: Maybe<Scalars["String"]["output"]>
  componentInstances?: Maybe<ComponentInstanceConnection>
  id: Scalars["ID"]["output"]
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

export type Severity = {
  __typename?: "Severity"
  cvss?: Maybe<Cvss>
  score?: Maybe<Scalars["Float"]["output"]>
  value?: Maybe<SeverityValues>
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
  supportGroupIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  uniqueUserId?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  userName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UserInput = {
  name?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<Scalars["String"]["input"]>
  uniqueUserId?: InputMaybe<Scalars["String"]["input"]>
}

export type GetServicesQueryVariables = Exact<{
  filter?: InputMaybe<ServiceFilter>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
}>

export type GetServicesQuery = {
  __typename?: "Query"
  Services?: {
    __typename?: "ServiceConnection"
    edges?: Array<{
      __typename?: "ServiceEdge"
      node: { __typename?: "Service"; id: string; ccrn?: string | null }
    } | null> | null
  } | null
}

export const GetServicesDocument = gql`
  query GetServices($filter: ServiceFilter, $first: Int, $after: String) {
    Services(filter: $filter, first: $first, after: $after) {
      edges {
        node {
          id
          ccrn
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
