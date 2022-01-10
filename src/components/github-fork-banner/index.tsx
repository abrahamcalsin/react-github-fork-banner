import React from 'react';

import { GlobalStyle } from '../global-style';
import { Hyperlink } from '../hyperlink';
import {
  Svg,
  PathBanner,
  PathOctoLeftEar,
  PathOctoRightEar,
  PathOctoTail,
  StyledPath,
} from '../svg';

export interface GithubForkBannerProps {
  direction?: string;
  size?: number;
  animation?: string;
  customHref: string;
  bannerColor?: string;
  octoColor?: string;
}

export const GithubForkBanner = (props: GithubForkBannerProps) => {
  const { direction, size, animation, customHref, bannerColor, octoColor } =
    props;

  return (
    <>
      <GlobalStyle direction={direction}>
        <Svg
          viewBox="0 0 90.132797 89.996094"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Hyperlink
            href={customHref}
            target="_blank"
            rel="noreferrer"
            color={octoColor}
            animation={animation}
          >
            <PathBanner d="M 0,0 H 90.1328 V 89.996094 Z" color={bannerColor} />

            <StyledPath d="m 56.8869,16.138194 c -2.1841,-0.6014 -7.239,3.5705 -8.2245,8.3088 -0.9856,4.7383 2.9559,8.5426 2.9559,8.5426 -0.9166,-0.0219 -1.9461,0.1696 -3.2631,1.1356 l -2.3308,2.2525 -3.9581,3.9975 c 0,0 -0.8075,0.8606 -1.9506,-0.3086 l 9.9971,9.9703 c 0,0 -0.876,-0.7635 0.3986,-1.8911 1.704,-1.8882 7.5801,-6.2077 7.037,-9.2289 1.3434,0.9834 3.3382,2.8692 7.9723,2.452 4.634,-0.4173 9.1977,-5.4578 8.8984,-7.7016 -0.02688,-2.399004 -0.667654,-4.84523 -2.0045,-7.345 -2.0119,-3.625 -4.9006,-6.1666 -8.2006,-8.2002 -1.557387,-0.73778 -2.967911,-1.488251 -7.3271,-1.9839 z" />
            <PathOctoLeftEar d="m 61.4714,11.854594 c -2.6294,1.1307 -3.8037,2.6626 -4.5845,4.2836 -0.687252,1.69641 -0.978582,3.64734 -0.840906,5.87406 l 7.588826,1.25101 c 0.626204,-1.069361 0.670697,-4.166206 0.57918,-5.14117 -0.5951,-2.5869 -1.2176,-5.1311 -2.7426,-6.2675 z" />
            <PathOctoRightEar d="m 74.4191,33.667294 c 1.4489,-0.6983 2.8893,-1.6567 4.2633,-4.603 -0.8075,-1.2712 -3.1478,-2.1153 -6.2678,-2.742 -1.445856,-0.03666 -3.719358,-0.06524 -5.420731,0.870847 l 2.047755,8.190328 c 1.626901,-0.163101 3.910325,-0.944435 5.377476,-1.716175 z" />
            <PathOctoTail d="m 48.3712,34.141194 c -1.6593,-0.5588 -2.9273,-1.6066 -3.5106,-3.5105 -0.272,-0.6918 -0.0719,-1.6158 0.0948,-2.6103 0.2082,-1.2428 0.4911,-2.3977 -0.827,-4.2368 -0.9608,-0.9174 -1.3648,-0.6846 -1.113,0.9035 0.1709,0.782 0.3982,1.4802 -0.3983,3.7002 -0.9205,1.7875 -0.7718,3.3792 0.2203,4.8164 0.8308,1.4808 2.0266,2.3157 3.1965,3.1963 z" />
          </Hyperlink>
        </Svg>
      </GlobalStyle>
    </>
  );
};
