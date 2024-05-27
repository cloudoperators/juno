/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Stack,
  Container,
  CodeBlock,
} from "juno-ui-components"
import { sectionCss, h2Css } from "../../styles"
import { scriptTag, baseHtml } from "../../helpers"
import DetailSection from "./DetailSection"
import useStore from "../../store"

const TabGetStarted = ({ asset, dependencies, isLatest }) => {
  const assetsUrl = useStore((state) => state.assetsUrl)

  return (
    <Container py px={false}>
      <DetailSection
        title="Script tag"
        description={
          <span>
            To run this micro-frontend please setup a script tag with following
            data props. Replace the prop values with string <i>REPLACE_ME</i>{" "}
            with the correspondig values if required.
          </span>
        }
      >
        <h2 className={h2Css}>Data props</h2>
        <DataGrid columns={2}>
          <DataGridRow>
            <DataGridHeadCell>Name</DataGridHeadCell>
            <DataGridHeadCell>Description</DataGridHeadCell>
          </DataGridRow>
          {asset?.appProps && Object.keys(asset?.appProps).length > 0 ? (
            <>
              {Object.keys(asset?.appProps || {}).map((key, index) => (
                <DataGridRow key={index}>
                  <DataGridCell>
                    <Stack direction="vertical" className="h-full">
                      <span>{key}</span>
                      {asset?.appProps[key]?.type && (
                        <span>
                          <small>({asset?.appProps[key].type})</small>
                        </span>
                      )}
                    </Stack>
                  </DataGridCell>
                  <DataGridCell>
                    {asset?.appProps[key]?.description}
                  </DataGridCell>
                </DataGridRow>
              ))}
            </>
          ) : (
            <DataGridRow>
              <DataGridCell colSpan={2}>
                <Stack
                  alignment="center"
                  distribution="center"
                  direction="vertical"
                  className="h-full"
                >
                  <span>No props found</span>
                </Stack>
              </DataGridCell>
            </DataGridRow>
          )}
        </DataGrid>

        <CodeBlock heading="Script tag" lang="html">
          {scriptTag({
            assetsUrl: assetsUrl,
            name: asset?.name,
            version: isLatest ? "latest" : asset?.version,
            appProps: asset?.appProps,
          })}
        </CodeBlock>
      </DetailSection>

      {dependencies?.length > 0 && (
        <div className={sectionCss}>
          <DetailSection
            title="Dependencies"
            description="Additional to the script tag described in the section above add
              please following script tags (asset dependencies) to be able to
              run this micro-frontend."
          >
            <CodeBlock heading="Script tag" lang="html">
              {dependencies.map((app) =>
                scriptTag({
                  assetsUrl: assetsUrl,
                  name: app?.name,
                  version: app?.version,
                  appProps: app?.appProps,
                })
              )}
            </CodeBlock>
          </DetailSection>
        </div>
      )}

      <div>
        <DetailSection
          title="Standalone setup"
          description="To be able to run the micro-frontend standalone please use the
          following base html markup and add the script tags as describe in the
          sections above. To ensure an optimal experience rendering the
          micro-frontend keep please the styles as they are set in the base
          html."
        >
          <CodeBlock heading="index.html" lang="html">
            {baseHtml({
              name: asset?.name,
              version: asset?.version,
              hasDependencies: dependencies?.length > 0,
            })}
          </CodeBlock>
        </DetailSection>
      </div>
    </Container>
  )
}

export default TabGetStarted
