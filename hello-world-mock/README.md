# Hello world with mock

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![dependencies Status](https://status.david-dm.org/gh/inpercima/swaaplate-hw.svg?path=hello-world-mock)](https://david-dm.org/inpercima/swaaplate-hw?path=hello-world-mock)
[![devDependencies Status](https://status.david-dm.org/gh/inpercima/swaaplate-hw.svg?path=hello-world-mock&type=dev)](https://david-dm.org/inpercima/swaaplate-hw?path=hello-world-mock&type=dev)

Example app with default options but useMock: true.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.3.1.

## Prerequisites

### Angular CLI

* `angular-cli 12.1.1` or higher

### Node, npm or yarn

* `node 14.16.1` or higher in combination with
  * `npm 6.14.12` or higher or
  * `yarn 1.22.5` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | last version | reason |
| ---------- | --------------- | ------------ | ------ |
| rxjs       | 6.6.0           | 7.2.0        | "@angular/common@12.1.1" has incorrect peer dependency "rxjs@^6.5.3" |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/swaaplate-hw
cd swaaplate-hw/hello-world-mock

# install tools and frontend dependencies
yarn
```

Create environment files for `devMode`, `mockMode` and `prodMode`.

```bash
cp src/environments/environment.ts src/environments/environment.dev.ts
cp src/environments/environment.ts src/environments/environment.mock.ts
cp src/environments/environment.ts src/environments/environment.prod.ts
```

**Note**: These files will not be under version control but listed in .gitignore.

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
You can do this for example with `yarn serve:mock`.
For the other options your app should run on a server which you like.

### Run in devMode

If you want to work with mock data, start the mock in a separate terminal, reachable on [http://localhost:3000/](http://localhost:3000/).

```bash
# mock, separate terminal
yarn run:mock
```

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:dev
# with mock
yarn build:mock

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
yarn serve:dev
# with mock
yarn serve:mock

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:dev
# with mock
yarn watch:mock
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
Change for prodMode the option `production` to `true` and for mockMode the option `api` to `http://localhost:3000/`.

### Table of contents

* [api](#api)
* [appname](#appname)
* [defaultRoute](#defaultRoute)
* [production](#production)
* [theme](#theme)

### `api`

Defines the URL to the backend.

* default: `./`
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `Hello world with mock`
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

### `theme`

Name of a build-in theme from angular-material or a custom light or dark theme.

* default: `indigo-pink`
* type: `string`
* values: `deeppurple-amber`/`indigo-pink`/`pink-bluegrey`/`purple-green`/`custom-light`/`custom-dark`

To create a custom light or dark theme just edit the colors and themes in `themes.scss`.
