declare module "*.svg" {
  type SvgIconProps = { alt: string, icon?: string, title?: string, disabled?: boolean }
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement> & SvgIconProps>
  export default content
}