import { keyframes } from 'styled-components'

export const octoLeftEarAnimated = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
  }
  20%,
  60% {
    transform: rotate(-15deg);
  }
  40%,
  80% {
    transform: rotate(35deg);
  }
`

export const octoRightEarAnimated = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
  }
  20%,
  60% {
    transform: rotate(25deg);
  }
  40%,
  80% {
    transform: rotate(-25deg);
  }
`

export const octoTailAnimated = keyframes`
0%,
  100% {
    transform: rotate(0deg);
  }
  20%,
  60% {
    transform: rotate(-20deg);
  }
  40%,
  80% {
    transform: rotate(5deg);
  }
`