# java-yarn-maven

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

An angular web project by swaaplate with java, yarn and maven.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 0.5.0-SNAPSHOT.

## Prerequisites

### Angular CLI

* `angular-cli 8.2.0` or higher

### Java

* `jdk 8` or higher

### Node, npm or yarn

* `node 12.3.1` or higher in combination with
  * `npm 6.9.0` or higher or
  * `yarn 1.16.0` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | wanted version | reason |
| ---------- | --------------- | -------------- | ------ |
| zone.js    | 0.9.1           | 0.10.0         | @angular/core@8.2.0" has incorrect peer dependency "zone.js@~0.9.1" |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/swaaplate-hw/java-yarn-maven
cd java-yarn-maven
```

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
You can do this for example with `yarn serve:mock`.
For the other options your app should run on a server which you like.

### Run in devMode with mock data

Start in a separate terminal a server with mock data, reachable on [http://localhost:3000/](http://localhost:3000/).

```bash
yarn run:mock
```

Chose one of the following to work in devMode with mock data.

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:mock

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
yarn serve:mock

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:mock
```

### Run in devMode with real data, if present

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:dev

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
yarn serve:dev

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:dev
```

### Package in prodMode

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

All options have to bet set in the environment files but some of them do not need to be changed.
All defaults refer to the development environment file (`environment.dev.ts`).
All deviations are described in addition as `mock` and `production`.

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

Defines whether a login will be used or not.

* default: `true`
* type: `boolean`
* values: `true`/`false`

### `api`

Defines the URL to the backend.

* default: `./` | mock: `http://localhost:3000/` | production: `./`
* type: `string`

### `apiSuffix`

Defines a suffix for the api to the backend.

* default: EMPTY
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `java-yarn-maven`
* type: `string`

### `defaultRoute`

The main route and the redirect route after login if no route is stored.

* default: `dashboard`
* type: `string`

### `production`

Defines whether the app is in production or not.

* default: `false` | mock: `false` | production: `true`
* type: `boolean`
* values: `true`/`false`

### `redirectNotFound`

Defines whether the 404 route will redirect to the default route or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `showFeatures`

Defines whether feature routes will be displayed or not.

* default: `true`
* type: `boolean`
* values: `true`/`false`

### `showLogin`

Defines whether login route will be displayed or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `theme`

Name of a build-in theme from angular-material or a custom light or dark theme.

* default: `indigo-pink`
* type: `string`
* values: `deeppurple-amber`/`indigo-pink`/`pink-bluegrey`/`purple-green`/`custom-light`/`custom-dark`

To create a custom light or dark theme just edit the colors and themes in `themes.scss`.
