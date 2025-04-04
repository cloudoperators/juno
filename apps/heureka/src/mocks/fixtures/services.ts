/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GetServicesQueryResult } from "../../generated/graphql"

export const mockServices: Partial<GetServicesQueryResult> = {
  data: {
    Services: {
      edges: [
        {
          node: {
            id: "1",
            ccrn: "alpha",
            objectMetadata: {
              componentInstanceCount: 5,
              issueMatchCount: 2,
              __typename: "ServiceMetadata",
            },
            owners: {
              edges: [],
              __typename: "UserConnection",
            },
            supportGroups: {
              edges: [
                {
                  node: {
                    id: "1",
                    ccrn: "mock-group-1",
                    __typename: "SupportGroup",
                  },
                  __typename: "SupportGroupEdge",
                },
              ],
              __typename: "SupportGroupConnection",
            },
            __typename: "Service",
          },
          __typename: "ServiceEdge",
        },
        {
          node: {
            id: "2",
            ccrn: "beta",
            objectMetadata: {
              componentInstanceCount: 10,
              issueMatchCount: 5,
              __typename: "ServiceMetadata",
            },
            owners: {
              edges: [],
              __typename: "UserConnection",
            },
            supportGroups: {
              edges: [
                {
                  node: {
                    id: "2",
                    ccrn: "mock-group-2",
                    __typename: "SupportGroup",
                  },
                  __typename: "SupportGroupEdge",
                },
              ],
              __typename: "SupportGroupConnection",
            },
            __typename: "Service",
          },
          __typename: "ServiceEdge",
        },
        {
          node: {
            id: "3",
            ccrn: "gamma",
            objectMetadata: {
              componentInstanceCount: 0,
              issueMatchCount: 0,
              __typename: "ServiceMetadata",
            },
            owners: {
              edges: [],
              __typename: "UserConnection",
            },
            supportGroups: {
              edges: [
                {
                  node: {
                    id: "3",
                    ccrn: "mock-group-3",
                    __typename: "SupportGroup",
                  },
                  __typename: "SupportGroupEdge",
                },
              ],
              __typename: "SupportGroupConnection",
            },
            __typename: "Service",
          },
          __typename: "ServiceEdge",
        },
      ],
      pageInfo: {
        pageNumber: 1,
        pages: [
          {
            after: "mock-page-1",
            pageNumber: 1,
            __typename: "Page",
          },
          {
            after: "mock-page-2",
            pageNumber: 2,
            __typename: "Page",
          },
        ],
        __typename: "PageInfo",
      },
      __typename: "ServiceConnection",
    },
  },
}
