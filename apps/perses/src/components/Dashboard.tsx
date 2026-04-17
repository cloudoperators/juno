import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import { ChartsProvider, ErrorAlert, ErrorBoundary } from "@perses-dev/components"
import { ViewDashboard } from "@perses-dev/dashboards"
import { DashboardResource } from "@perses-dev/core"
import { PluginRegistry } from "@perses-dev/plugin-system"
import { createTheme } from "@mui/material/styles"
import { useMemo, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import { createDatasourceApi, createPersesChartsTheme, createPersesMuiTheme } from "../api"
import { pluginLoader } from "../utils/pluginLoader"

interface DashboardProps {
  dashboardResource: DashboardResource
  theme?: "theme-dark" | "theme-light"
  endpoint?: string
}

export function Dashboard({ dashboardResource, theme = "theme-dark", endpoint }: DashboardProps) {
  const muiThemeMode = theme === "theme-dark" ? "dark" : "light"
  const datasourceApi = createDatasourceApi(endpoint)

  // Refs to DOM nodes that live inside the component's own subtree.
  // styleContainer: receives Emotion <style> tags so they are scoped to this
  //   subtree and cascade into any parent shadow DOM (e.g. greenhouse).
  // portalContainer: MUI Popovers/Modals portal here instead of document.body
  //   so they are also inside the shadow DOM and receive the scoped styles.
  const [styleContainer, setStyleContainer] = useState<HTMLElement | null>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  const emotionCache = useMemo(() => {
    const options: Parameters<typeof createCache>[0] = { key: "perses", prepend: true }
    if (styleContainer) options.container = styleContainer
    return createCache(options)
  }, [styleContainer])

  const muiTheme = useMemo(() => {
    const base = createPersesMuiTheme(muiThemeMode)
    if (!portalContainer) return base
    return createTheme(base, {
      components: {
        MuiPopover: { defaultProps: { container: portalContainer } },
        MuiModal: { defaultProps: { container: portalContainer } },
        MuiPopper: { defaultProps: { container: portalContainer } },
      },
    })
  }, [muiThemeMode, portalContainer])

  const chartsTheme = useMemo(() => createPersesChartsTheme(muiTheme), [muiTheme])

  return (
    <>
      <span ref={setStyleContainer} style={{ display: "none" }} />
      <div ref={setPortalContainer} />
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={muiTheme}>
              <ChartsProvider chartsTheme={chartsTheme}>
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <PluginRegistry pluginLoader={pluginLoader}>
                    <ViewDashboard
                      dashboardResource={dashboardResource}
                      datasourceApi={datasourceApi}
                      isReadonly={true}
                      isVariableEnabled={true}
                      isDatasourceEnabled={true}
                    />
                  </PluginRegistry>
                </ErrorBoundary>
              </ChartsProvider>
            </ThemeProvider>
          </CacheProvider>
        </QueryParamProvider>
      </BrowserRouter>
    </>
  )
}
