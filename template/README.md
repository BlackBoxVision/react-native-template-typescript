# React Native App

This repository contains the code of the mobile app related to `React Native App` project.

## Table of Contents

- [Pre Requisites](#pre-requisites)
- [Development Workflow](#development-workflow)
  - [Commit message convention](#commit-message-convention)
  - [Linting and tests](#linting-and-tests)
  - [Scripts](#scripts)
  - [Sending a pull request](#sending-a-pull-request)
- [Common features](#common-features)
  - [Deep linking](#deep-linking)
  - [Configuring links](#configuring-links)

## Pre Requisites

Before starting to work in the project, your machine needs the following tools:

- [Android Studio and SDK](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)
- [Xcode Tools](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)
- [Node & NPM](https://nodejs.org/es/)

To install `node` in a more easier way you can use also [NVM](https://github.com/nvm-sh/nvm).

PD: `Xcode` and `Xcode Tools` are only required in the case you use a Mac for your development workflow. If you use windows or linux you can only build the app for Android devices.

## Development workflow

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, eg add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

### Scripts

The `package.json` file contains various scripts for common tasks:

- `npm run android`: generates an APK to run on Emulator or Device
- `npm run ios`: generates an IPA to run on Simulator
- `npm run start`: starts the metro javascript bundler
- `npm run test`: run all tests with Jest
- `npm run lint`: lint all code with ESLint

### Sending a pull request

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.


## Common features
### Deep linking

You must configure the app to handle deep links on various platforms.
React Native provides a `Linking` module to get notified of incoming links. Luckily, React Navigation can integrate with this module to automatically handle deep links.

First, check it out the [Set up with bare React Native projects](https://reactnavigation.org/docs/deep-linking#set-up-with-bare-react-native-projects) to know required configurations for each platform so that the deep link integration works. **This implies touch native code.**

Next, see [configuring links](#configuring-links) to see more details on how to configure links in React Navigation.
### Configuring links

Follow this [guide](https://reactnavigation.org/docs/configuring-links) to mapping path to route names.

When you specify the `linking` prop, React Navigation will handle incoming links automatically. On Android and iOS, it'll use React Native's [Linking module](https://reactnative.dev/docs/linking) to handle incoming links, both when the app was opened with the link, and when new links are received when the app is open. On the Web, it'll use the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to sync the URL with the browser.