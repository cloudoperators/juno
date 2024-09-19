/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

declare module "*.svg" {
  type SvgIconProps = { alt: string; icon?: string; title?: string; disabled?: boolean }
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement> & SvgIconProps>
  export default content
}

declare module "*.png" {
  const value: string
  export = value
}
