import styled, { css } from 'styled-components';
import { PathOctoTail, PathOctoLeftEar, PathOctoRightEar } from '../svg';
import {
  octoLeftEarAnimated,
  octoRightEarAnimated,
  octoTailAnimated,
} from '../keyframes';

const animationProperties = css`
  animation-duration: 560ms;
  animation-timing-function: ease-in-out;
`;

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
            ${animationProperties}
          }
        `;

      case 'right-ear':
        return css`
          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            ${animationProperties}
          }
        `;

      case 'ears':
        return css`
          &:hover ${PathOctoLeftEar} {
            animation-name: ${octoLeftEarAnimated};
            ${animationProperties}
          }

          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            ${animationProperties}
          }
        `;

      case 'tail':
        return css`
          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            ${animationProperties}
          }
        `;

      case 'tail-&-leftEar':
        return css`
          &:hover ${PathOctoLeftEar} {
            animation-name: ${octoLeftEarAnimated};
            ${animationProperties}
          }

          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            ${animationProperties}
          }
        `;

      case 'tail-&-rightEar':
        return css`
          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            ${animationProperties}
          }

          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            ${animationProperties}
          }
        `;

      case 'all':
        return css`
          &:hover ${PathOctoTail} {
            animation-name: ${octoTailAnimated};
            ${animationProperties}
          }

          &:hover ${PathOctoLeftEar} {
            animation-name: ${octoLeftEarAnimated};
            ${animationProperties}
          }

          &:hover ${PathOctoRightEar} {
            animation-name: ${octoRightEarAnimated};
            ${animationProperties}
          }
        `;

      default:
        return '';
    }
  }}
`;
