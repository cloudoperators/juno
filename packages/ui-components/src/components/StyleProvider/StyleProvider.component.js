/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useRef } from "react"
import PropTypes from "prop-types"
import { ShadowRoot } from "../ShadowRoot/index"
import tailwindTheme from "../../../tailwind.config"
import Fonts from "./Fonts"
import GlobalStyles, { styles } from "./GlobalStyles"

// create the context for values to be provided to the nested components.
const StylesContext = React.createContext()

const APP_BODY_CSS_CLASS_NAME = "juno-app-body"

/**
 * Component wich inserts the ui styles. It also creates a
 * shadow dom element with styes inside it if 'stylesWrapper' is equal
 * to "shadowRoot".
 * Accepted values for 'stylesWrapper' are 'head', 'inline' and 'shadowRoot'.
Both this component and ShadowRoot
 * can be used independently. The stylesWrapper parameter is set to "inline" by default.
 * If you want to use StyleProvider without inline styles, then the value of this
 * parameter should be changed to "head".
 * Examples:
 * Standalone:
 * * <StyleProvider stylesWrapper="head">Content</StyleProvider>
 *   styles and fonts are added to the document.head
 * * <StyleProvider>Content</StyleProvider>
 *   styles and fonts are added inline
 * ShadowRoot:
 *   <ShadowRoot><StyleProvider>Content</StyleProvider></ShadowRoot>
 * @param {object} props
 * @returns
 */
export const StyleProvider = ({
  stylesWrapper,
  theme: themeClassName,
  children,
  shadowRootMode,
}) => {
  // theme class default to theme-dark
  const themeClass = themeClassName || "theme-dark"

  // store current theme. This is needed to remove the old theme class when the theme changes
  const currentTheme = useRef(themeClass)
  // store current container css classes. This is needed to update classes without loosing the old ones
  const containerCssClasses = useRef(APP_BODY_CSS_CLASS_NAME + " " + themeClass)
  // store the reference to the container element
  const container = useRef()

  // Deprecated!
  // Only necessary in case the stylesWrapper is set to shadowRoot.
  // This functionality exists to provide backwards compatibility.
  // Should be removed in perspective
  const Wrapper = React.useCallback(
    ({ children }) => {
      if (stylesWrapper === "shadowRoot")
        return <ShadowRoot mode={shadowRootMode}>{children}</ShadowRoot>
      return children
    },
    [stylesWrapper, shadowRootMode]
  )

  // this function makes it possible to add css class to the container on the fly
  const addCssClass = useCallback((value) => {
    if (!container.current || typeof value !== "string") return
    container.current.classList.add(value)
    containerCssClasses.current = container.current.className
  }, [])

  // this function makes it possible to remove css class from the container on the fly
  const removeCssClass = useCallback((value) => {
    if (!container.current || typeof value !== "string") return
    container.current.classList.remove(value)
    containerCssClasses.current = container.current.className
  }, [])

  // this function makes it possible to change the theme class on the fly
  const setThemeClass = useCallback(
    (value) => {
      if (!container.current || typeof value !== "string") return
      container.current.classList.remove(currentTheme.current)
      container.current.classList.add(value)
      currentTheme.current = value
      containerCssClasses.current = container.current.className
    },
    [container.current, currentTheme.current]
  )

  // update the theme class when the theme changes
  React.useEffect(() => {
    if (!container.current) return
    setThemeClass(themeClass)
  }, [setThemeClass, themeClass])

  // useMemo is used to avoid re-rendering the component when the theme changes
  return React.useMemo(
    () => (
      <Wrapper>
        <Fonts inline={stylesWrapper !== "head"} />
        <GlobalStyles inline={stylesWrapper !== "head"} />
        <StylesContext.Provider
          value={{
            styles,
            theme: tailwindTheme,
            setThemeClass,
            addCssClass,
            removeCssClass,
          }}
        >
          <div className={containerCssClasses.current} ref={container}>
            {children}
          </div>
        </StylesContext.Provider>
      </Wrapper>
    ),
    [stylesWrapper, children, shadowRootMode, setThemeClass]
  )
}

StyleProvider.propTypes = {
  children: PropTypes.node,
  stylesWrapper: PropTypes.oneOfType([
    PropTypes.oneOf(["head", "inline", "shadowRoot"]),
  ]),
  theme: PropTypes.string,
  shadowRootMode: PropTypes.oneOf(["open", "closed"]),
}

// define default values
StyleProvider.defaultProps = {
  children: null,
  stylesWrapper: "inline",
  theme: undefined,
}

// export a helper hook to use styles in nested components
// returns {styles, theme, setCustomCssClasses}
StyleProvider.useStyles = () => React.useContext(StylesContext)
