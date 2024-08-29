/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { FormattedText } from "./FormattedText.component"
import { FormattedTextProps } from "./FormattedText.component"

// Remove the import statement for "ComponentStory"
export default {
  title: "Components/FormattedText",
  component: FormattedText,
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A layout element for styling text content. By default, all texts are displayed with predefined sizes and spacing.",
      },
    },
  },
}

const Template = (args: FormattedTextProps) => (
  <FormattedText {...args}>
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>
    <article>
      <h2>h2: Lorem ipsum dolor sit amet</h2>
      <h3>h3: Sunt in culpa qui officia</h3>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint:
      </p>
      <ul>
        <li>
          Consectetur adipiscing elit
          <a href="https://ui.juno.global.cloud.sap" rel="nofollow">
            Link
          </a>
        </li>
        <li>Incididunt ut labore et dolore magna aliqua.</li>
        <li>Nostrud exercitation ullamco laboris</li>
        <li>Mollit anim id est laborum</li>
        <li>Nostrud exercitation ullamco laboris</li>
        <li>Ponsectetur adipiscing elit, sed do eiusmod</li>
        <li>Gullamco laboris nisi ut aliquip ex ea commodo</li>
        <li>Consectetur adipiscing elit</li>
        <li>
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </li>
      </ul>
      <div>
        <h2>Concepts</h2>
      </div>
      <div>
        <h3>Alerts</h3>
      </div>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
        <code>Some code</code>.
      </p>
      <h2>h2: Lorem ipsum dolor sit amet</h2>
      <h4>h4: Labels</h4>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
        <code>Some code</code> and
        <code>more code</code> in <code>code code code ...</code>.
      </p>
    </article>
    <article>
      <h2>h2: Lorem ipsum dolor sit amet</h2>
      <h3>h3: Sunt in culpa qui officia</h3>
      <p>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ol>
        <li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </li>
        <li>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </li>
        <li>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </li>
        <li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </li>
      </ol>
      <h3>h3: Sunt in culpa qui officia</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <h4>h4: Nisi ut aliquip</h4>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h4>h4: Commodo consequat</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <h5>h5: Duis aute irure dolor in reprehenderit</h5>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </article>
  </FormattedText>
)

export const Basic = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A basic FormattedTextcomponent with various text elements.",
      },
    },
  },

  args: {},
}
