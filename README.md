# Arthur Frontend Coding Exercise

## Welcome!

Thanks for your time and interest in joining Arthur. The purpose of this exercise is to inform a constructive discusion of your programming style and techniques in React Native. Hopefully, it also shows how we think about engineering and product development at Arthur.

We hope that you can complete this exercise in roughly **two hours or less**. It's not a hard limit, but we don't want you spending too much of your time when we see that the point of the exercise is to kick-off a healthy discission.

## The Exercise

We've been designing a feature that allows users to access a stream of artworks so they can:

1. Browse artworks faster
2. Save more artworks

We'd like your help implementing the first iteration of this feature to the spec below, using the endpoint in `App.tsx`.

### Core Feature Specification

Testable criteria

- The app should indicate it is loading
- The app should show a random artwork (it's title, image, artist name, and dateText fields)
- The user can view another random artwork
- The user can save the current artwork
- The app should show a count of the users saved artworks
- The app reloads random works when the user is done with a batch

Interaction design

We've kept the interaction and visual design open ended. But we think a card stack swiper or a snap-to scroll interaction would improve the speed of browsing for the user.

### Evalution

We're expecting a functional prototype that achieves the testable criteria above. It's most important for the code to be easily debuggable, runs cross-platform, and avoids re-rendering:

- Runs on iOS Simulator
- Runs on Android Emulator

We recommend focusing on either UX improvements or a specific optimization you'd like to discuss in-person. Please note your concentration so we're aware of your intended scope.

## Getting Started

Requires the Expo CLI

```
npm install --global expo-cli
```

Start

```
yarn start
```
