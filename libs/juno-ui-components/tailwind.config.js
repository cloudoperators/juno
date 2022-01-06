// opacity helper to make custom colors work with opacity
function withOpacity(variableName) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${variableName}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/dummyComponents/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"IBM Plex Sans"', 'ui-sans-serif', 'Arial', 'system-ui', 'sans-serif'],
      'condensed': ['"IBM Plex Sans Condensed"', 'ui-sans-serif', 'Arial', 'system-ui', 'sans-serif'],
      'serif': ['"IBM Plex Serif"', 'ui-serif', 'serif'],
      'mono': ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
    },
    colors: {
      "juno-grey-blue": {
        1: withOpacity("--color-juno-grey-blue-84-raw"),
        2: withOpacity("--color-juno-grey-blue-85-raw"),
        3: withOpacity("--color-juno-grey-blue-86-raw"),
        4: withOpacity("--color-juno-grey-blue-88-raw"),
        5: withOpacity("--color-juno-grey-blue-89-raw"),
        6: withOpacity("--color-juno-grey-blue-91-raw"),
        7: withOpacity("--color-juno-grey-blue-92-raw"),
        8: withOpacity("--color-juno-grey-blue-93-raw"),
        9: withOpacity("--color-juno-grey-blue-95-raw"),
        10: withOpacity("--color-juno-grey-blue-100-raw"),
        DEFAULT: withOpacity("--color-juno-grey-blue-100-raw"),
      },
      "juno-blue": {
        1: withOpacity("--color-juno-blue-light-raw"),
        2: withOpacity("--color-juno-blue-light-1-raw"),
        3: withOpacity("--color-juno-blue-light-2-raw"),
        4: withOpacity("--color-juno-blue-light-3-raw"),
        5: withOpacity("--color-juno-blue-raw"),
        6: withOpacity("--color-juno-blue-dark-1-raw"),
        7: withOpacity("--color-juno-blue-dark-raw"),
        8: withOpacity("--color-juno-blue-darker-2-raw"),
        9: withOpacity("--color-juno-blue-darker-1-raw"),
        10: withOpacity("--color-juno-blue-darker-raw"),
        DEFAULT: withOpacity("--color-juno-blue-raw"),
      },
      "juno-grey-light": {
        1: withOpacity("--color-juno-grey-light-05-raw"),
        2: withOpacity("--color-juno-grey-light-11-raw"),
        3: withOpacity("--color-juno-grey-light-20-raw"),
        4: withOpacity("--color-juno-grey-light-37-raw"),
        5: withOpacity("--color-juno-grey-light-54-raw"),
        6: withOpacity("--color-juno-grey-light-71-raw"),
        7: withOpacity("--color-juno-grey-light-87-raw"),
        8: withOpacity("--color-juno-grey-light-104-raw"),
        9: withOpacity("--color-juno-grey-light-179-raw"),
        10: withOpacity("--color-juno-grey-light-206-raw"),
        11: withOpacity("--color-juno-grey-light-231-raw"),
        DEFAULT: withOpacity("--color-juno-grey-light-05-raw"),
      },
      "sap-grey": {
        1: withOpacity("--color-sap-white-raw"),
        2: withOpacity("--color-sap-grey-5-raw"),
        3: withOpacity("--color-sap-grey-4-raw"),
        4: withOpacity("--color-sap-grey-3-raw"),
        5: withOpacity("--color-sap-grey-2-raw"),
        6: withOpacity("--color-sap-grey-1-raw"),
        7: withOpacity("--color-sap-grey-0-raw"),
        8: withOpacity("--color-sap-black-raw"),
        DEFAULT: withOpacity("--color-sap-black-raw"),
      },
      "sap-blue": {
        1: withOpacity("--sap-blue-light-raw"),
        2: withOpacity("--sap-blue-light-1-raw"),
        3: withOpacity("--sap-blue-light-2-raw"),
        4: withOpacity("--sap-blue-light-3-raw"),
        5: withOpacity("--sap-blue-raw"),
        6: withOpacity("--sap-blue-dark-1-raw"),
        7: withOpacity("--sap-blue-dark-raw"),
        8: withOpacity("--color-sap-blue-darker-2-raw"),
        9: withOpacity("--color-sap-blue-darker-1-raw"),
        10: withOpacity("--color-sap-blue-darker-raw"),
        DEFAULT: withOpacity("--sap-blue-raw"),
      },
      "sap-gold": {
        1: withOpacity("--color-sap-gold-light-raw"),
        2: withOpacity("--color-sap-gold-light-1-raw"),
        3: withOpacity("--color-sap-gold-light-2-raw"),
        4: withOpacity("--color-sap-gold-light-3-raw"),
        5: withOpacity("--color-sap-gold-raw"),
        6: withOpacity("--color-sap-gold-dark-raw"),
        7: withOpacity("--color-sap-gold-dark-1-raw"),
        DEFAULT: withOpacity("--color-sap-gold-raw"),
      },
      "sap-purple": {
        1: withOpacity("--color-sap-purple-light-raw"),
        2: withOpacity("--color-sap-purple-light-1-raw"),
        3: withOpacity("--color-sap-purple-light-2-raw"),
        4: withOpacity("--color-sap-purple-light-3-raw"),
        5: withOpacity("--color-sap-purple-raw"),
        6: withOpacity("--color-sap-purple-dark-raw"),
        7: withOpacity("--color-sap-purple-dark-1-raw"),
        DEFAULT: withOpacity("--color-sap-purple-raw"),
      },
      "sap-green": {
        1: withOpacity("--color-sap-green-light-raw"),
        2: withOpacity("--color-sap-green-light-1-raw"),
        3: withOpacity("--color-sap-green-light-2-raw"),
        4: withOpacity("--color-sap-green-light-3-raw"),
        5: withOpacity("--color-sap-green-raw"),
        6: withOpacity("--color-sap-green-dark-raw"),
        7: withOpacity("--color-sap-green-dark-1-raw"),
        DEFAULT: withOpacity("--color-sap-green-raw"),
      },
      "sap-red": {
        1: withOpacity("--color-sap-red-light-raw"),
        2: withOpacity("--color-sap-red-light-1-raw"),
        3: withOpacity("--color-sap-red-light-2-raw"),
        4: withOpacity("--color-sap-red-light-3-raw"),
        5: withOpacity("--color-sap-red-raw"),
        6: withOpacity("--color-sap-red-dark-raw"),
        7: withOpacity("--color-sap-red-dark-1-raw"),
        DEFAULT: withOpacity("--color-sap-red-raw"),
      },
      "juno-turquoise": withOpacity("--color-juno-turquoise-raw"),
      white: withOpacity("--color-white-raw"),
      black: withOpacity("--color-black-raw"),
      transparent: "transparent",
      danger: withOpacity("--color-danger-raw"),
      error: withOpacity("--color-error-raw"),
      info: withOpacity("--color-info-raw"),
      success: withOpacity("--color-success-raw"),
      warning: withOpacity("--color-warning-raw"), 
      focus: withOpacity("--color-focus-raw"),
      primary: withOpacity("--color-primary-raw"),
    },
    borderColor: theme => ({
      ...theme('colors'),
      theme: {
        default: withOpacity("--color-default-border"),
        "button-primary": withOpacity("--color-button-primary-border"),
        "button-primary-hover": withOpacity("--color-button-primary-hover-border"),
        "button-primary-active": withOpacity("--color-button-primary-active-border"),
        "button-primary-disabled": "var(--color-button-primary-disabled-border)",
        "button-primary-danger": "var(--color-button-primary-danger-border)",
        "button-primary-danger-hover": "var(--color-button-primary-danger-hover-border)",
        "button-primary-danger-active": "var(--color-button-primary-danger-active-border)",
        "button-primary-danger-disabled": "var(--color-button-primary-danger-disabled-border)",
        "button-default": withOpacity("--color-button-default-border"),
        "button-default-hover": withOpacity("--color-button-default-hover-border"),
        "button-default-active": withOpacity("--color-button-default-active-border"),
        "button-default-disabled": "var(--color-button-default-disabled-border)",
        "button-subdued": withOpacity("--color-button-subdued-border"),
        "button-subdued-hover": withOpacity("--color-button-subdued-hover-border"),
        "button-subdued-active": withOpacity("--color-button-subdued-active-border"),
        "button-subdued-disabled": "var(--color-button-subdued-disabled-border)",
        "message-default": withOpacity("--color-message-default-border"),
        "message-danger": withOpacity("--color-message-danger-border"),
        "message-error": withOpacity("--color-message-error-border"),
        "message-warning": withOpacity("--color-message-warning-border"),
        "message-success": withOpacity("--color-message-success-border"),
        "switch-default": withOpacity("--color-switch-default-border"),
        "switch-hover": withOpacity("--color-switch-hover-border"),
        "datalist-row": withOpacity("--color-datalist-row-border"),
        "introbox": withOpacity("--color-introbox-border"),
      },
    }),
    extend: {
      backgroundColor: {
        theme: {
          "global-bg": withOpacity("--color-global-bg"),
          "button-primary-active": "var(--color-button-primary-active-bg)",
          "button-default": "var(--color-button-default-bg)",
          "button-default-active": "var(--color-button-default-active-bg)",
          "button-default-disabled": "var(--color-button-default-disabled-bg)",
          "button-subdued": "var(--color-button-subdued-bg)",
          "button-subdued-active": "var(--color-button-subdued-active-bg)",
          "button-subdued-disabled": "var(--color-button-subdued-disabled-bg)",
          "button-primary-danger-active": withOpacity("var(--color-button-primary-danger-active-bg)"),
          "tooltip-popover": withOpacity("--color-tooltip-popover-bg"),
          "textinput": withOpacity("--color-textinput-bg"),
          "select": withOpacity("--color-select-bg"),
          "checkbox": withOpacity("--color-checkbox-bg"),
          "radio": withOpacity("--color-radio-bg"),
          "radio-checked": withOpacity("--color-radio-checked-bg"),
          "switch-handle": withOpacity("--color-switch-handle-bg"),
          "switch-handle-checked": withOpacity("--color-switch-handle-checked-bg"),
          "required": withOpacity("--color-required-bg"),
          "introbox": withOpacity("--color-introbox-bg"),
          "datagridrow-selected": withOpacity("--color-datagridrow-selected"),
          "datalistrow-selected": withOpacity("--color-datalistrow-selected"),
          "message-border-danger": withOpacity("--color-message-danger-border"),
          "message-border-default": withOpacity("--color-message-default-border"),
          "message-border-error": withOpacity("--color-message-error-border"),
          "message-border-warning": withOpacity("--color-message-warning-border"),
          "message-border-success": withOpacity("--color-message-success-border"),
        },
      },
      backgroundImage: {
          "theme-button-primary": "var(--gradient-button-primary-bg)",
          "theme-button-primary-hover": "var(--gradient-button-primary-hover-bg)",
          "theme-button-primary-disabled": "var(--gradient-button-primary-disabled-bg)",
          "theme-button-primary-danger": "var(--gradient-button-primary-danger-bg)",
          "theme-button-primary-danger-hover": "var(--gradient-button-primary-danger-hover-bg)",
          "theme-button-primary-danger-disabled": "var(--gradient-button-primary-danger-disabled-bg)",
          "theme-button-subdued-hover": "var(--gradient-button-subdued-hover-bg)",
          "theme-button-default-hover": "var(--gradient-button-default-hover-bg)",
          "theme-message-default": "var(--gradient-message-default-bg)",
          "theme-message-success": "var(--gradient-message-success-bg)",
          "theme-message-warning": "var(--gradient-message-warning-bg)",
          "theme-message-danger": "var(--gradient-message-danger-bg)",
          "theme-message-error": "var(--gradient-message-error-bg)",
      },
      textColor: {
        theme: {
          default: withOpacity("--color-global-text"),
          "high": withOpacity("--color-text-high"),
          "medium": withOpacity("--color-text-medium"),
          "disabled": withOpacity("--color-text-disabled"),
          "link": withOpacity("--color-text-link"), 
          "button-primary": withOpacity("--color-button-primary-text"),
          "button-primary-hover": withOpacity("--color-button-primary-hover-text"),
          "button-primary-active": withOpacity("--color-button-primary-active-text"),
          "button-primary-disabled": "var(--color-button-primary-disabled-text)",
          "button-primary-danger": withOpacity("--color-button-primary-danger-text"),
          "button-primary-danger-hover": withOpacity("--color-button-primary-danger-hover-text"),
          "button-primary-danger-active": withOpacity("--color-button-primary-danger-active-text"),
          "button-primary-danger-disabled": withOpacity("--color-button-primary-danger-disabled-text"),
          "button-default": withOpacity("--color-button-default-text"),
          "button-default-icon": "var(--color-button-default-icon)",
          "button-default-hover": withOpacity("--color-button-default-hover-text"),
          "button-default-active": withOpacity("--color-button-default-active-text"),
          "button-default-disabled": "var(--color-button-default-disabled-text)",
          "button-subdued": withOpacity("--color-button-subdued-text"),
          "button-subdued-hover": withOpacity("--color-button-subdued-hover-text"),
          "button-subdued-active": withOpacity("--color-button-subdued-active-text"),
          "button-subdued-disabled": "var(--color-button-subdued-disabled-text)",
          "on-danger": withOpacity("--color-button-danger-text"),
          "on-default": withOpacity("--color-button-default-text"),
          "tooltip-popover": withOpacity("--color-tooltip-popover-text"),
          "textinput": withOpacity("--color-textinput-text"),
          "checkbox-checked": withOpacity("--color-checkbox-checked-color"),
        },
      },
      // backgroundImage: theme => ({
      //   'icon-arrow-down': "url('./img/icon_arrow_down.svg')",
      // }),
      padding: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        "grid-column": "0 .5rem"
      },
      height: {
        "textinput": "2.75rem",
        "floatinglabelinput": "3rem",
        "switch-default": "1.4375rem",
        "switch-handle-default": "1.1875rem",
      },
      width: {
        "switch-default": "2.625rem",
        "switch-handle-default": "1.1875rem",
        "grid-column-default": "var(--grid-column-default-width)",
        "grid-col-1": "8.333333%",
        "grid-col-2": "16.666667%",
        "grid-col-3": "25%",
        "grid-col-4": "33.333333%",
        "grid-col-5": "41.666667%",
        "grid-col-6": "50%",
        "grid-col-7": "58.333333%",
        "grid-col-8": "66.666667%",
        "grid-col-9": "75%",
        "grid-col-10": "83.333333%",
        "grid-col-11": "91.666667%",
        "grid-col-12": "100%",
      },
      borderRadius: {
        "3px": "3px",
      },
      margin: {
        "grid-row": "0 var(--grid-row-margin-x)",
      },
      flex: {
        "grid-column": "var(--grid-column-flex-grow) var(--grid-column-flex-shrink) var(--grid-column-flex-basis)"
      }
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      backgroundImage: ['hover']
    }
  },
  plugins: [],
}
