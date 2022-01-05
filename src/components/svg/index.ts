import styled, { keyframes } from 'styled-components'


export const StyledPath =styled.path`
 fill: currentColor;
`

export const Svg = styled.svg`
	margin-top: -2px;

  width: ${props => props.width || "98px"};
`

export const PathBanner = styled(StyledPath)`
	color: ${({ color }) => color || 'black'};
`

export const PathOctoTail = styled(StyledPath)`
	transform-origin: 14px 9px;
`

export const octoTailAnimated = keyframes`
0%,
  100% {
    transform: rotate(0deg);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(5deg);
  }
`