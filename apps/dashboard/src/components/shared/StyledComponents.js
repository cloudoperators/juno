import tw, { styled } from "twin.macro"

import { getButtonStyle, getTextColorStyle } from "../../lib/styling/StyleMap"


// ------------------------------
// TYPOGRAPHY

const H2 = styled.h2(() => [
  tw`
    text-3xl
    2xl:text-4xl
    font-light
    mb-3
    tracking-wider
  `,
  getTextColorStyle
])


const H4 = styled.h4(() => [
  tw`
    text-xl
    2xl:text-2xl
    font-medium
    uppercase
    mb-3
  `,
  getTextColorStyle
])

const PLarge = styled.p(() => [
  tw`
    font-thin
    text-2xl
    2xl:text-3xl
    pb-6
  `,
  getTextColorStyle
])

const PMedium = styled.p(() => [
  tw`
    font-thin
    text-xl
    2xl:text-2xl
    pb-6
  `,
  getTextColorStyle
])


// ------------------------------
// STANDARD ELEMENTS

const Button = styled.button(() => [
  tw`
    bg-sap-blue
    font-light
  `,
  getButtonStyle
])


// ------------------------------
// LAYOUT ELEMENTS

const LayoutContainer = tw.div`
  container
  mx-auto
`

const FlexContainer = tw.div`
  flex
  flex-auto
`

const FlexContainerCenter = tw(FlexContainer)`
  items-center
`


export {
  H2,
  H4,
  PLarge,
  PMedium,
  Button,
  LayoutContainer,
  FlexContainer,
  FlexContainerCenter
}