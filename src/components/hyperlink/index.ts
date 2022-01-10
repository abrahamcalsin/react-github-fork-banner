import styled, { css } from 'styled-components';
import { PathOctoTail, PathOctoLeftEar, PathOctoRightEar } from '../svg';
import {
  octoLeftEarAnimated,
  octoRightEarAnimated,
  octoTailAnimated,
} from '../keyframes';

export interface HyperlinkProps {
  animation?: string;
}

export const Hyperlink = styled.a<HyperlinkProps>`
  color: ${({ color }) => color || 'white'};

  ${(props) => {
    switch (props.animation) {
      case 'left-ear':
        return css`
          &:hover ${PathOctoLeftEar} {
            animation-name: ${octoLeftEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }
        `;

      case 'right-ear':
        return css`
          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }
        `;

      case 'ears':
        return css`
          &:hover ${PathOctoLeftEar} {
            animation-name: ${octoLeftEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }

          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }
        `;

      case 'tail':
        return css`
          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }
        `;

      case 'tail-&-leftEar':
        return css`
          &:hover ${PathOctoLeftEar} {
            animation-name: ${octoLeftEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }

          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }
        `;

      case 'tail-&-rightEar':
        return css`
          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }

          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }
        `;

      case 'all':
        return css`
          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }

          &:hover ${PathOctoLeftEar} {
            animation-name: ${octoLeftEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }

          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            animation-duration: 560ms;
            animation-timing-function: ease-in-out;
          }
        `;

      default:
        return '';
    }
  }}
`;
