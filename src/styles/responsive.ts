import { CSSObject, FlattenSimpleInterpolation, css } from "styled-components"

export const mobile = (props: CSSObject): FlattenSimpleInterpolation => css`
  @media only screen and (max-width: 600px) {
  ${props}
  }
`
