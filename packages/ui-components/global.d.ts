declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement> & { alt: string }>
  export default content
}
