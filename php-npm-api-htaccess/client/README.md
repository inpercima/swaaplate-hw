# php-npm-api-htaccess - client

[![dependencies Status](https://david-dm.org/inpercima/php-npm-api-htaccess/status.svg?path=client)](https://david-dm.org/inpercima/php-npm-api-htaccess?path=client)
[![devDependencies Status](https://david-dm.org/inpercima/php-npm-api-htaccess/dev-status.svg?path=client)](https://david-dm.org/inpercima/php-npm-api-htaccess?path=client&type=dev)

## Getting started

```bash
# all commands used in ./client
cd client

# install tools and frontend dependencies
npm install
```

Create environment files for `devMode`, `mockMode` and `prodMode`.

```bash
cp src/environments/environment.ts src/environments/environment.dev.ts
cp src/environments/environment.ts src/environments/environment.mock.ts
cp src/environments/environment.ts src/environments/environment.prod.ts
```

**Note**: These files will not be under version control and listed in .gitignore.

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
You can do this for example with `npm run serve:mock`.
For the other options your app should run on a server which you like.

### Run in devMode with mock

Start in a separate terminal a server with mock data, reachable on [http://localhost:3000/](http://localhost:3000/).

```bash
npm run run:mock
```

Chose one of the following to work in devMode with mock data.

```bash
# build, reachable on http://localhost/app/path/to/dist/
npm run build:mock

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
npm run serve:mock

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
npm run watch:mock
```

### Run in devMode

```bash
# build, reachable on http://localhost/app/path/to/dist/
npm run build:dev

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
npm run serve:dev

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
npm run watch:dev
```

### Package in prodMode

```bash
# build in prodMode, compressed
npm run build:prod
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
Change for prodMode the option `production` to `true` and for mockMode the option `api` to `http://localhost:3000/`.

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

* default: `./api/`
* type: `string`

### `apiSuffix`

Defines a suffix for the api to the backend.

* default: EMPTY
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `php-npm-api-htaccess`
* type: `string`

### `defaultRoute`

The main route and the redirect route after login if no route is stored.

* default: `dashboard`
* type: `string`

### `production`

Defines whether the app is in production or not.

* default: `false`
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

* default: `deeppurple-amber`
* type: `string`
* values: `deeppurple-amber`/`indigo-pink`/`pink-bluegrey`/`purple-green`/`custom-light`/`custom-dark`

To create a custom light or dark theme just edit the colors and themes in `themes.scss`.
