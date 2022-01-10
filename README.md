# React GitHub Fork Banner

<p align="left">
  <a href="https://www.npmjs.com/package/react-github-fork-banner">
    <img src="https://img.shields.io/npm/v/react-github-fork-banner.svg?style=flat-square" alt="Current Release" />
  </a>
  <a href="https://www.npmjs.com/package/react-github-fork-banner">
    <img src="https://badgen.net/npm/dt/react-github-fork-banner?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/abrahamcalsin/github-fork-banner/blob/main/LICENSE">
    <img alt="npm" src="https://img.shields.io/npm/l/react-github-fork-banner?style=flat-square" alt="License">
  </a>
</p>

<code>react-github-fork-banner</code> is an npm package that allows you to add a github banner with a link linked to your project's fork or repository. You can give it a super custom use as a normal react component.

#

## Installation 🔨

To use this package in your project, you must install it via npm or yarn, depending on what you use.

```bash
# Using npm
npm install --save react-github-fork-banner@latest

# Using yarn
yarn add react-github-fork-banner@latest
```

#

## Usage 🚀

```jsx
import React from 'react';
import { GithubForkBanner } from 'react-github-fork-banner';

function App() {
  return (
    <>
      <header>My App</header>

      <GithubForkBanner
        direction=""
        size={}
        animation=""
        customHref="https://github.com/username/repo"
        bannerColor=""
        octoColor=""
      />
    </>
  );
}

export default App;
```

Fill in the missing values for each property.

These are the properties that can be added:

| Property Name |  Type  | Default Value | Values you can use                                                    | Description                                                                                                                                      |
| :-----------: | :----: | :-----------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
|   direction   | String |    'right'    | "left" and "right"                                                    | Define the Banner direction.                                                                                                                     |
|     size      | Number |      98       | Only numeric type values                                              | Define the width and height of the Banner.                                                                                                       |
|   animation   | String |     none      | left-ear, right-ear, ears, tail, tail-&-leftEar, tail-&-rightEar, all | Define the Octocat animation.                                                                                                                    |
|  customHref   | String |      '/'      | Links href                                                            | This field is mandatory, you will get an error if you do not add its value, this to avoid giving an inadequate and useless use to the component. |
|  bannerColor  | String |    '#000'     | HEX, HSL, CSS( RGB & RGBA )                                           | Define the color of the Banner.                                                                                                                  |
|   octoColor   | String |    '#fff'     | HEX, HSL, CSS( RGB & RGBA )                                           | Defines the color of the Octocat.                                                                                                                |

#

## Keep in touch with me ✨

- GitHub: [@abrahamcalsin](https://github.com/abrahamcalsin)
- Twitter: [@abrahamcalsin](https://twitter.com/abraham_calsin)
