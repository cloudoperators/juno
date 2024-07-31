/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useCallback, useEffect, useMemo, useRef } from "react"
import PropTypes from "prop-types"
import { ShadowRoot } from "../ShadowRoot/index"
import tailwindTheme from "../../../tailwind.config"
import Fonts from "./Fonts"
import GlobalStyles, { styles } from "./GlobalStyles"
import useLocalStorage from "../../hooks/useLocalStorage"

// Create the context for values and methods to be provided to the nested components.
const StylesContext = createContext()

const APP_BODY_CSS_CLASS_NAME = "juno-app-body"
const DEFAULT_THEME_NAME = "theme-dark"

/**
 * Component that inserts the ui styles and manages theming and styles.
 * Also creates a shadow DOM element with styes inside  if 'stylesWrapper' is equal to "shadowRoot".
 * Accepted values for 'stylesWrapper' are 'head', 'inline' and 'shadowRoot'.
 * Both this component and ShadowRoot can be used independently.
 * The stylesWrapper parameter is set to "inline" by default.
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
export const StyleProvider = ({ stylesWrapper = "inline", theme: themeProp, children = null, shadowRootMode }) => {
  // Determine the default value to init the storedTheme by using the prop if passed, or default:
  const themeClass = themeProp || DEFAULT_THEME_NAME

  // Init the currently stored theme using either the theme found in local storage, a theme passed as a prop, or default:
  const [storedTheme, setStoredTheme] = useLocalStorage("juno-theme", themeClass) // eslint-disable-line no-unused-vars

  // Store a reference to the current theme. This is needed to remove the old theme class when the theme is updated:
  // (Idea: this could potentially be omitted if we do not remove and add the theme class to update, but just re-generate the whole set of classes, so we do not care about the old theme class anymore.)
  const currentTheme = useRef(themeClass)

  // Store a reference to the current container css classes. This is needed to update classes without loosing the old ones.
  const containerCssClasses = useRef(APP_BODY_CSS_CLASS_NAME + " " + themeClass)

  // Store a reference to the container element:
  const container = useRef(null)

  // Deprecated!
  // Only necessary in case the stylesWrapper is set to shadowRoot.
  // This functionality exists to provide backwards compatibility.
  // Should be removed in perspective
  const Wrapper = useCallback(
    ({ children }) => {
      if (stylesWrapper === "shadowRoot") return <ShadowRoot mode={shadowRootMode}>{children}</ShadowRoot>
      return children
    },
    [stylesWrapper, shadowRootMode]
  )

  // Function to add a css class to the container on the fly (without re-rendering):
  const addCssClass = useCallback((value) => {
    if (!container.current || typeof value !== "string") return
    container.current.classList.add(value)
    containerCssClasses.current = container.current.className
  }, [])

  // Function to remove css class from the container on the fly (without re-rendering):
  const removeCssClass = useCallback((value) => {
    if (!container.current || typeof value !== "string") return
    container.current.classList.remove(value)
    containerCssClasses.current = container.current.className
  }, [])

  // Function to update the theme class on the container without re-rendering the container, and to write the new theme to local storage. This function will be exposed to all children via context:
  const setThemeClass = useCallback(
    (value) => {
      if (!container.current || typeof value !== "string") return
      container.current.classList.remove(currentTheme.current)
      container.current.classList.add(value)
      currentTheme.current = value
      containerCssClasses.current = container.current.className
      setStoredTheme(value)
    },
    [container.current, currentTheme.current]
  )

  // Update the theme class when the theme prop changes:
  useEffect(() => {
    if (!container.current) return
    setThemeClass(themeProp || DEFAULT_THEME_NAME)
  }, [themeProp])

  // Use useMemo is used to avoid re-rendering the component when the theme changes:
  return useMemo(
    () => (
      <Wrapper>
        <Fonts inline={stylesWrapper !== "head"} />
        <GlobalStyles inline={stylesWrapper !== "head"} />
        <StylesContext.Provider
          value={{
            styles,
            theme: tailwindTheme,
            currentTheme: currentTheme.current,
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
    [stylesWrapper, children, shadowRootMode, containerCssClasses.current, setThemeClass]
  )
}

StyleProvider.propTypes = {
  /** The children to render. */
  children: PropTypes.node,
  /** What element to render as a wrapper, respectively where to render the StyleProvider.  */
  stylesWrapper: PropTypes.oneOf(["head", "inline", "shadowRoot"]),
  /** The name of the theme to render. */
  theme: PropTypes.string,
  /** The mode of the shadowRoot. Only relevant when `stylesWrapper="shadowRoot"`. */
  shadowRootMode: PropTypes.oneOf(["open", "closed"]),
}

// Export a helper hook to use styles in nested components
// Returns {styles, theme, currentTheme, setThemeClass, addCssClass, removeCssClass}
StyleProvider.useStyles = () => React.useContext(StylesContext)
