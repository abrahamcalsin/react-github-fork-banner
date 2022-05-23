import styled from 'styled-components'

export const StyledPath = styled.path`
  fill: currentColor;
`

export const Svg = styled.svg`
  margin-top: -2px;

  width: ${props => props.width || '98px'};
`

export const PathBanner = styled(StyledPath)`
  color: ${({ color }) => color || 'black'};
`

export const PathOctoLeftEar = styled(StyledPath)`
  transform-origin: 60px 20px;
`

export const PathOctoRightEar = styled(StyledPath)`
  transform-origin: 71px 31px;
`

export const PathOctoTail = styled(StyledPath)`
  transform-origin: 48px 36px;
`
