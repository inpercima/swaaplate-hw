# Hello world

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![dependencies Status](https://david-dm.org/inpercima/swaaplate-hw/status.svg?path=hello-world)](https://david-dm.org/inpercima/swaaplate-hw?path=hello-world)
[![devDependencies Status](https://david-dm.org/inpercima/swaaplate-hw/dev-status.svg?path=hello-world)](https://david-dm.org/inpercima/swaaplate-hw?path=hello-world&type=dev)

Example app with default options.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.0.0-SNAPSHOT.

## Prerequisites

### Angular CLI

* `angular-cli 10.0.7` or higher

### Node, npm or yarn

* `node 12.16.1` or higher in combination with
  * `npm 6.13.4` or higher or
  * `yarn 1.22.4` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | wanted version | reason |
| ---------- | --------------- | -------------- | ------ |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/swaaplate-hw
cd swaaplate-hw/hello-world

# install tools and frontend dependencies
yarn
```

Create environment files for `devMode` and `prodMode`.

```bash
cp src/environments/environment.ts src/environments/environment.dev.ts
cp src/environments/environment.ts src/environments/environment.prod.ts
```

**Note**: These files will not be under version control but listed in .gitignore.

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
For the other options your app should run on a server which you like.

### Run in devMode

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:dev

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
yarn serve:dev

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:dev
```

### Package

```bash
# build in prodMode, compressed
yarn build:prod
```

### Tests

```bash
# test
ng test

# e2e
ng e2e
```

## Configuration

### General

All options have to been set in the environment files but some of them do not need to be changed.
All defaults refer to the environment file (`environment.ts`), they are prepared in devMode (`environment.dev.ts`).
Change for prodMode the option `production` to `true`.

### Table of contents

* [activateLogin](#activateLogin)
* [api](#api)
* [apiSuffix](#apiSuffix)
* [appname](#appname)
* [defaultRoute](#defaultRoute)
* [production](#production)
* [redirectNotFound](#redirectNotFound)
* [showFeatures](#showFeatures)
* [showLogin](#showLogin)
* [theme](#theme)

### `activateLogin`

Defines whether the login module will be used or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `api`

Defines the URL to the backend.

* default: `./`
* type: `string`

### `apiSuffix`

Defines a suffix for the api to the backend.

* default: EMPTY
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `Hello world`
* type: `string`

### `defaultRoute`

The default route and the route to be redirected after a login if no route is stored or if a route does not exist.

* default: `hello-world`
* type: `string`

### `production`

Defines whether the app is in production or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `redirectNotFound`

Defines whether the 404 route will redirect to the default route or not.

* default: `true`
* type: `boolean`
* values: `true`/`false`

### `showFeatures`

Defines whether the feature routes will be displayed in navigation or not.

* default: `true`
* type: `boolean`
* values: `true`/`false`

### `showLogin`

Defines whether the login route will be displayed in navigation or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `theme`

Name of a build-in theme from angular-material or a custom light or dark theme.

* default: `indigo-pink`
* type: `string`
* values: `deeppurple-amber`/`indigo-pink`/`pink-bluegrey`/`purple-green`/`custom-light`/`custom-dark`

To create a custom light or dark theme just edit the colors and themes in `themes.scss`.
