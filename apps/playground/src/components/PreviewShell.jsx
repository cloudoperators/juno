import React from "react"
import styles from "../styles.scss"
import { AppShell, AppShellProvider } from "juno-ui-components"
import { useTheme } from "./StoreProvider"

export default ({ children }) => {
  const theme = useTheme()
  return (
    <AppShellProvider theme={theme}>
      <style>{styles.toString()}</style>
      {/* override the styles of a first div child from cutom-wrapperfor-textarea */}
      <style>{`
        .cutom-wrapper-textarea > div:first-child {
          height: 100%;
        }
        .cutom-wrapper-textarea > div:first-child > .juno-textarea-wrapper {
          height: 100%;
        }
      `}</style>

      <style>{}</style>
      <AppShell pageHeader="Converged Cloud | Playground" embedded={true}>
        {children}
      </AppShell>
    </AppShellProvider>
  )
}
