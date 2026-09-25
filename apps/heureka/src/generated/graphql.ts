/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
import { gql } from "@apollo/client"
export type ImageFilter = {
  repository?: Array<string | null | undefined> | null | undefined
  service?: Array<string | null | undefined> | null | undefined
}

export type ImageVersionFilter = {
  endOfLife?: Array<boolean | null | undefined> | null | undefined
  image?: Array<string | null | undefined> | null | undefined
  repository?: Array<string | null | undefined> | null | undefined
  service?: Array<string | null | undefined> | null | undefined
  state?: Array<StateFilter> | null | undefined
  tag?: Array<string | null | undefined> | null | undefined
  version?: Array<string | null | undefined> | null | undefined
}

export const OrderDirection = {
  Asc: "asc",
  Desc: "desc",
} as const

export type OrderDirection = (typeof OrderDirection)[keyof typeof OrderDirection]
export type RemediationFilter = {
  image?: Array<string | null | undefined> | null | undefined
  search?: Array<string | null | undefined> | null | undefined
  service?: Array<string | null | undefined> | null | undefined
  severity?: Array<SeverityValues | null | undefined> | null | undefined
  state?: Array<StateFilter> | null | undefined
  type?: Array<RemediationTypeValues | null | undefined> | null | undefined
  url?: Array<string | null | undefined> | null | undefined
  vulnerability?: Array<string | null | undefined> | null | undefined
}

export type RemediationInput = {
  assignee?: string | null | undefined
  description?: string | null | undefined
  expirationDate?: unknown
  image?: string | null | undefined
  remediatedBy?: string | null | undefined
  remediationDate?: unknown
  service?: string | null | undefined
  severity?: SeverityValues | null | undefined
  type?: RemediationTypeValues | null | undefined
  url?: string | null | undefined
  vulnerability?: string | null | undefined
}

export const RemediationTypeValues = {
  Escalation: "escalation",
  FalsePositive: "false_positive",
  Filtered: "filtered",
  Mitigation: "mitigation",
  Rescore: "rescore",
  RiskAccepted: "risk_accepted",
} as const

export type RemediationTypeValues = (typeof RemediationTypeValues)[keyof typeof RemediationTypeValues]
export type ServiceFilter = {
  domain?: Array<string | null | undefined> | null | undefined
  region?: Array<string | null | undefined> | null | undefined
  search?: Array<string | null | undefined> | null | undefined
  serviceCcrn?: Array<string | null | undefined> | null | undefined
  state?: Array<StateFilter> | null | undefined
  supportGroupCcrn?: Array<string | null | undefined> | null | undefined
  type?: Array<number | null | undefined> | null | undefined
  uniqueUserId?: Array<string | null | undefined> | null | undefined
  userName?: Array<string | null | undefined> | null | undefined
}

export type ServiceOrderBy = {
  by?: ServiceOrderByField | null | undefined
  direction?: OrderDirection | null | undefined
}

export const ServiceOrderByField = {
  Ccrn: "ccrn",
  Severity: "severity",
} as const

export type ServiceOrderByField = (typeof ServiceOrderByField)[keyof typeof ServiceOrderByField]
export const SeverityValues = {
  Critical: "Critical",
  High: "High",
  Low: "Low",
  Medium: "Medium",
  None: "None",
} as const

export type SeverityValues = (typeof SeverityValues)[keyof typeof SeverityValues]
export const StateFilter = {
  Active: "Active",
  Deleted: "Deleted",
} as const

export type StateFilter = (typeof StateFilter)[keyof typeof StateFilter]
export type VulnerabilityFilter = {
  name?: Array<string | null | undefined> | null | undefined
  region?: Array<string | null | undefined> | null | undefined
  search?: Array<string | null | undefined> | null | undefined
  service?: Array<string | null | undefined> | null | undefined
  severity?: Array<SeverityValues | null | undefined> | null | undefined
  status?: VulnerabilityStatus | null | undefined
  supportGroup?: Array<string | null | undefined> | null | undefined
}

export const VulnerabilityStatus = {
  All: "all",
  Open: "open",
  Remediated: "remediated",
} as const

export type VulnerabilityStatus = (typeof VulnerabilityStatus)[keyof typeof VulnerabilityStatus]
export type CreateRemediationMutationVariables = Exact<{
  input: RemediationInput
}>

export type CreateRemediationMutation = {
  createRemediation: {
    id: string
    description: string | null
    expirationDate: unknown
    image: string | null
    imageId: string | null
    remediatedBy: string | null
    remediationDate: unknown
    service: string | null
    serviceId: string | null
    severity: SeverityValues | null
    type: RemediationTypeValues | null
    url: string | null
    vulnerability: string | null
    vulnerabilityId: string | null
  }
}

export type DeleteRemediationMutationVariables = Exact<{
  id: string | number
}>

export type DeleteRemediationMutation = { deleteRemediation: string }

export type GetRemediationsQueryVariables = Exact<{
  filter?: RemediationFilter | null | undefined
}>

export type GetRemediationsQuery = {
  Remediations: {
    totalCount: number
    edges: Array<{
      node: {
        id: string
        type: RemediationTypeValues | null
        description: string | null
        service: string | null
        image: string | null
        vulnerability: string | null
        expirationDate: unknown
        remediationDate: unknown
        remediatedBy: string | null
        url: string | null
      }
    } | null> | null
  } | null
}

export type GetImageVersionsQueryVariables = Exact<{
  filter?: ImageVersionFilter | null | undefined
  first?: number | null | undefined
  after?: string | null | undefined
  firstVulnerabilities?: number | null | undefined
  afterVulnerabilities?: string | null | undefined
  firstOccurences?: number | null | undefined
  afterOccurences?: string | null | undefined
}>

export type GetImageVersionsQuery = {
  ImageVersions: {
    totalCount: number
    counts: { critical: number; high: number; medium: number; low: number; none: number; total: number } | null
    edges: Array<{
      node: {
        id: string
        tag: string | null
        repository: string | null
        version: string | null
        vulnerabilityCounts: {
          critical: number
          high: number
          medium: number
          low: number
          none: number
          total: number
        } | null
        occurences: {
          edges: Array<{ node: { id: string; ccrn: string | null; componentVersionId: string | null } } | null>
        } | null
        vulnerabilities: {
          edges: Array<{
            node: {
              id: string
              severity: SeverityValues | null
              name: string | null
              sourceUrl: string | null
              earliestTargetRemediationDate: unknown
              description: string | null
            }
          } | null>
          pageInfo: {
            pageNumber: number | null
            pages: Array<{ after: string | null; pageNumber: number | null } | null> | null
          } | null
        } | null
      }
    } | null>
    pageInfo: {
      hasNextPage: boolean | null
      hasPreviousPage: boolean | null
      isValidPage: boolean | null
      pageNumber: number | null
      nextPageAfter: string | null
      pages: Array<{
        after: string | null
        isCurrent: boolean | null
        pageNumber: number | null
        pageCount: number | null
      } | null> | null
    } | null
  } | null
}

export type GetImagesQueryVariables = Exact<{
  imgFilter?: ImageFilter | null | undefined
  vulFilter?: VulnerabilityFilter | null | undefined
  first?: number | null | undefined
  after?: string | null | undefined
  firstVulnerabilities?: number | null | undefined
  afterVulnerabilities?: string | null | undefined
  firstVersions?: number | null | undefined
  afterVersions?: string | null | undefined
}>

export type GetImagesQuery = {
  Images: {
    totalCount: number
    counts: { critical: number; high: number; medium: number; low: number; none: number; total: number } | null
    edges: Array<{
      node: {
        id: string
        repository: string | null
        imageRegistryUrl: string | null
        vulnerabilityCounts: {
          critical: number
          high: number
          medium: number
          low: number
          none: number
          total: number
        } | null
        versions: { edges: Array<{ node: { id: string; version: string | null } } | null> } | null
        vulnerabilities: {
          edges: Array<{
            node: {
              id: string
              severity: SeverityValues | null
              name: string | null
              sourceUrl: string | null
              earliestTargetRemediationDate: unknown
              description: string | null
            }
          } | null>
          pageInfo: {
            pageNumber: number | null
            pages: Array<{ after: string | null; pageNumber: number | null } | null> | null
          } | null
        } | null
      }
    } | null>
    pageInfo: {
      hasNextPage: boolean | null
      hasPreviousPage: boolean | null
      isValidPage: boolean | null
      pageNumber: number | null
      nextPageAfter: string | null
      pages: Array<{
        after: string | null
        isCurrent: boolean | null
        pageNumber: number | null
        pageCount: number | null
      } | null> | null
    } | null
  } | null
}

export type GetServiceFiltersQueryVariables = Exact<{ [key: string]: never }>

export type GetServiceFiltersQuery = {
  ServiceFilterValues: {
    serviceCcrn: { displayName: string | null; filterName: string | null; values: Array<string | null> | null } | null
    supportGroupCcrn: {
      displayName: string | null
      filterName: string | null
      values: Array<string | null> | null
    } | null
  } | null
}

export type GetServicesQueryVariables = Exact<{
  filter?: ServiceFilter | null | undefined
  first?: number | null | undefined
  after?: string | null | undefined
  orderBy?: Array<ServiceOrderBy | null | undefined> | ServiceOrderBy | null | undefined
}>

export type GetServicesQuery = {
  Services: {
    issueCounts: { critical: number; high: number; medium: number; low: number; none: number; total: number } | null
    edges: Array<{
      node: {
        id: string
        ccrn: string | null
        owners: {
          edges: Array<{ node: { id: string; uniqueUserId: string | null; name: string | null } } | null> | null
        } | null
        supportGroups: { edges: Array<{ node: { id: string; ccrn: string | null } } | null> | null } | null
        issueCounts: { critical: number; high: number; medium: number; low: number; none: number; total: number } | null
      }
    } | null> | null
    pageInfo: {
      pageNumber: number | null
      pages: Array<{ after: string | null; pageNumber: number | null } | null> | null
    } | null
  } | null
}

export type GetVulnerabilitiesQueryVariables = Exact<{
  filter?: VulnerabilityFilter | null | undefined
  first?: number | null | undefined
  after?: string | null | undefined
  firstServices?: number | null | undefined
  afterServices?: string | null | undefined
}>

export type GetVulnerabilitiesQuery = {
  Vulnerabilities: {
    counts: { critical: number; high: number; medium: number; low: number; none: number; total: number } | null
    edges: Array<{
      node: {
        severity: SeverityValues | null
        name: string | null
        sourceUrl: string | null
        earliestTargetRemediationDate: unknown
        description: string | null
        services: {
          totalCount: number
          edges: Array<{ node: { ccrn: string | null } } | null> | null
          pageInfo: {
            pageNumber: number | null
            pages: Array<{ after: string | null; pageNumber: number | null } | null> | null
          } | null
        } | null
        supportGroups: { edges: Array<{ node: { ccrn: string | null } } | null> | null } | null
      }
    } | null>
    pageInfo: {
      pageNumber: number | null
      pages: Array<{ after: string | null; pageNumber: number | null } | null> | null
    } | null
  } | null
}

export type GetVulnerabilityFiltersQueryVariables = Exact<{ [key: string]: never }>

export type GetVulnerabilityFiltersQuery = {
  VulnerabilityFilterValues: {
    supportGroup: { displayName: string | null; filterName: string | null; values: Array<string | null> | null } | null
    severity: { displayName: string | null; filterName: string | null; values: Array<string | null> | null } | null
  } | null
}

export const CreateRemediationDocument = gql`
  mutation CreateRemediation($input: RemediationInput!) {
    createRemediation(input: $input) {
      id
      description
      expirationDate
      image
      imageId
      remediatedBy
      remediationDate
      service
      serviceId
      severity
      type
      url
      vulnerability
      vulnerabilityId
    }
  }
`
export const DeleteRemediationDocument = gql`
  mutation DeleteRemediation($id: ID!) {
    deleteRemediation(id: $id)
  }
`
export const GetRemediationsDocument = gql`
  query GetRemediations($filter: RemediationFilter) {
    Remediations(filter: $filter) {
      edges {
        node {
          id
          type
          description
          service
          image
          vulnerability
          expirationDate
          remediationDate
          remediatedBy
          url
        }
      }
      totalCount
    }
  }
`
export const GetImageVersionsDocument = gql`
  query GetImageVersions(
    $filter: ImageVersionFilter
    $first: Int
    $after: String
    $firstVulnerabilities: Int
    $afterVulnerabilities: String
    $firstOccurences: Int
    $afterOccurences: String
  ) {
    ImageVersions(first: $first, after: $after, filter: $filter) {
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
          id
          tag
          repository
          version
          vulnerabilityCounts {
            critical
            high
            medium
            low
            none
            total
          }
          occurences(first: $firstOccurences, after: $afterOccurences) {
            edges {
              node {
                id
                ccrn
                componentVersionId
              }
            }
          }
          vulnerabilities(first: $firstVulnerabilities, after: $afterVulnerabilities) {
            edges {
              node {
                id
                severity
                name
                sourceUrl
                earliestTargetRemediationDate
                description
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
        hasNextPage
        hasPreviousPage
        isValidPage
        pageNumber
        nextPageAfter
        pages {
          after
          isCurrent
          pageNumber
          pageCount
        }
      }
    }
  }
`
export const GetImagesDocument = gql`
  query GetImages(
    $imgFilter: ImageFilter
    $vulFilter: VulnerabilityFilter
    $first: Int
    $after: String
    $firstVulnerabilities: Int
    $afterVulnerabilities: String
    $firstVersions: Int
    $afterVersions: String
  ) {
    Images(first: $first, after: $after, filter: $imgFilter) {
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
          id
          repository
          imageRegistryUrl
          vulnerabilityCounts {
            critical
            high
            medium
            low
            none
            total
          }
          versions(first: $firstVersions, after: $afterVersions) {
            edges {
              node {
                id
                version
              }
            }
          }
          vulnerabilities(first: $firstVulnerabilities, after: $afterVulnerabilities, filter: $vulFilter) {
            edges {
              node {
                id
                severity
                name
                sourceUrl
                earliestTargetRemediationDate
                description
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
        hasNextPage
        hasPreviousPage
        isValidPage
        pageNumber
        nextPageAfter
        pages {
          after
          isCurrent
          pageNumber
          pageCount
        }
      }
    }
  }
`
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
    }
  }
`
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
