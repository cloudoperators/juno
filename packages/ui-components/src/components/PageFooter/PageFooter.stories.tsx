/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PageFooter, PageFooterProps } from "./index"

export default {
  title: "Layout/PageFooter",
  component: PageFooter,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    copyright: {
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    className: {
      control: false,
    },
  },
}

const Template = (args: PageFooterProps) => <PageFooter {...args}></PageFooter>

export const Simple = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A basic example of the PageFooter component without any children or custom content.",
      },
    },
  },
  args: {},
}

export const WithCustomCopyright = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "PageFooter with a custom copyright notice.",
      },
    },
  },
  args: {
    copyright: "© 2023 Custom Corporation. All rights reserved.",
  },
}

export const InlineLinks = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "PageFooter rendering inline links, illustrating how children can be displayed within the footer.",
      },
    },
  },
  args: {
    children: (
      <ul className="juno-pagefooter-items-inline">
        <li>
          <a className="juno-pagefooter-item" href="#">
            About
          </a>
        </li>
        <li>
          <a className="juno-pagefooter-item" href="#">
            Imprint
          </a>
        </li>
        <li>
          <a className="juno-pagefooter-item" href="#">
            Terms of Use
          </a>
        </li>
      </ul>
    ),
  },
}

export const WithTwoColumns = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An example showing two columns within the PageFooter, each with a title and list of items.",
      },
    },
  },
  args: {
    children: (
      <>
        <div role="group" aria-labelledby="footer-col1-title">
          <p className="juno-pagefooter-title" id="footer-col1-title">
            Column 1
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="juno-pagefooter-item" href="#">
                Imprint
              </a>
            </li>
          </ul>
        </div>
        <div role="group" aria-labelledby="footer-col2-title">
          <p className="juno-pagefooter-title" id="footer-col2-title">
            Column 2
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="juno-pagefooter-item" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
}

export const WithThreeColumns = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An example showing three columns within the PageFooter, each with a title and list of items.",
      },
    },
  },
  args: {
    copyright: "© 2023 Custom Corporation. All rights reserved.",
    children: (
      <>
        <div role="group" aria-labelledby="footer-col1-title">
          <p className="juno-pagefooter-title" id="footer-col1-title">
            Column 1
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        <div role="group" aria-labelledby="footer-col2-title">
          <p className="juno-pagefooter-title" id="footer-col2-title">
            Column 2
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div role="group" aria-labelledby="footer-col3-title">
          <p className="juno-pagefooter-title" id="footer-col3-title">
            Column 3
          </p>
          <ul className="juno-pagefooter-items">
            <li>
              <a className="juno-pagefooter-item" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
}
