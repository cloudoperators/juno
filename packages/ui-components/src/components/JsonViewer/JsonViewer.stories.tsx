/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { JsonViewer } from "./index.ts"

const meta: Meta<typeof JsonViewer> = {
  title: "Components/JsonViewer",
  component: JsonViewer,
  argTypes: {},
  parameters: {
    controls: { sort: "alpha" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const data = {
  id: 9,
  date: new Date(),
  getPrice: () => `$12`,
  regex: /^(.+)$/,
  nan: NaN,
  null: null,
  title: "Infinix INBOOK",
  description: "Infinix Inbook X1 Ci3 10th 8GB...",
  price: 1099,
  discountPercentage: 11.83,
  rating: 4.54,
  stock: 96,
  available: true,
  array: [],
  brand: "Infinix",
  category: "laptops",
  thumbnail: "https://i.dummyjson.com",
  test: "https://i.dummyjson.com",
  test2: "Loremipsum",
  images: [
    "https://i.dummyjson.com/data/products/9/1.jpg",
    "https://i.dummyjson.com/data/products/9/2.png",
    "https://i.dummyjson.com/data/products/9/3.png",
    "https://i.dummyjson.com/data/products/9/4.jpg",
    "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  ],
}

const dataAsArray = [
  { hello: ["word", "world", "wod"], foo: "bar" },
  { arrays: "are", fun: "to", work: "with, too" },
]

export const Default: Story = {
  args: {
    data,
  },
}

export const ArrayData: Story = {
  args: {
    data: dataAsArray,
  },
}

export const Light: Story = {
  args: {
    theme: "light",
    toolbar: true,
    data,
  },
}

export const Expanded: Story = {
  args: {
    expanded: true,
    data,
  },
}

export const WithToolbar: Story = {
  args: {
    expanded: 1,
    toolbar: true,
    data,
  },
}

export const CustomTheme: Story = {
  args: {
    theme: {
      base00: "rgb(39, 40, 34)",
      base01: "rgba(73, 72, 62,0.8)",
      base02: "rgb(73, 72, 62)",
      base03: "#93a1a1",
      base04: "rgb(165, 159, 133)",
      base05: "rgb(248, 248, 242)",
      base06: "#073642",
      base07: "rgb(249, 248, 245)",
      base08: "rgb(249, 38, 114)",
      base09: "rgb(253, 151, 31)",
      base0A: "rgb(244, 191, 117)",
      base0B: "rgb(166, 226, 46)",
      base0C: "rgb(161, 239, 228)",
      base0D: "rgb(102, 217, 239)",
      base0E: "rgb(174, 129, 255)",
      base0F: "rgb(204, 102, 51)",
    },
    data: { ...data, test2: undefined },
    toolbar: true,
    truncate: false,
  },
}
