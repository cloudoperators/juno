/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TabList as ReactTabList } from "react-tabs";
import { useTabsContext } from "../Tabs/Tabs.component.js";
import PropTypes from "prop-types";

const tabListStyles = `
	jn-flex
	jn-h-[3.4375rem]
`;
// focus-within:ring-1
// focus-within:ring-theme-focus
// focus-within:ring-inset

const getVariantStyles = (variant) => {
  switch (variant) {
    case "main":
      return `jn-bg-theme-tab-navigation-top`;
    case "codeblocks":
      return `
				jn-text-sm
				jn-bg-theme-code-block
				jn-border-b-[1px]
				jn-border-theme-codeblock-bar 
			`;
    default:
      return `
				jn-border-b-[1px] 
				jn-border-theme-tab-navigation-content-bottom
			`;
  }
};

/** A tabList component wraps all individual Tabs inside a parent Tabs component. Only functional and interactive in the context of a Tabs component. */

const TabList = ({ variant, children, className, ...props }) => {
  const tabsContext = useTabsContext() || {};
  const tabsVariant = tabsContext.variant || variant;

  return (
    <ReactTabList
      className={`
				juno-tablist 
				juno-tablist-${tabsVariant} 
				${tabListStyles} 
				${getVariantStyles(tabsVariant)}
				${className}
			`}
      {...props}
    >
      {children}
    </ReactTabList>
  );
};

TabList.tabsRole = "TabList";

TabList.propTypes = {
  /** Pick the TabList style */
  variant: PropTypes.oneOf(["main", "content", "codeblocks"]),
  /** The individual child Tabs to render */
  children: PropTypes.node,
  /** Pass a custom className */
  className: PropTypes.string,
};

TabList.defaultProps = {
  variant: "content",
  children: null,
  className: "",
};

export { TabList };
