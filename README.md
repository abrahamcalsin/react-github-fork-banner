# React GitHub Fork Banner

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

| Property Name |  Type  | Default Value | Values you can use          | Description                                                                                                                                      |
| :-----------: | :----: | :-----------: | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
|   direction   | String |    'right'    | "left" and "right".         | Define the Banner direction.                                                                                                                     |
|     size      | Number |      98       | Only numeric type values    | Define the width and height of the Banner.                                                                                                       |
|  customHref   | String |      '/'      | Links href                  | This field is mandatory, you will get an error if you do not add its value, this to avoid giving an inadequate and useless use to the component. |
|  bannerColor  | String |    '#000'     | HEX, HSL, CSS( RGB & RGBA ) | Define the color of the Banner.                                                                                                                  |
|   octoColor   | String |    '#fff'     | HEX, HSL, CSS( RGB & RGBA ) | Defines the color of the Octocat.                                                                                                                |

#

## Keep in touch with me ✨

- GitHub: [@abrahamcalsin](https://github.com/abrahamcalsin)
- Twitter: [@abrahamcalsin](https://twitter.com/abraham_calsin)
