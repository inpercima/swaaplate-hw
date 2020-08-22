# Hello world with php, npm, api folder and htaccess file

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

Example app with default options but useYarn: false, backend: php, htaccess: true, serverAsApi: true.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.0.0-SNAPSHOT.

## Prerequisites

### Angular CLI

* `angular-cli 10.0.7` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Node, npm or yarn

* `node 12.16.1` or higher in combination with
  * `npm 6.13.4` or higher, used in this repository,  or
  * `yarn 1.22.4` or higher

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | wanted version | reason |
| ---------- | --------------- | -------------- | ------ |
| copy-webpack-plugin | 4.6.0 | 5.1.1 | "copy-webpack-plugin@5.1.1" has unmet peer dependency "webpack@^4.0.0" |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/swaaplate-hw
cd swaaplate-hw/hello-world-php-npm-api-htaccess
```

## Usage

### Modules

For the client check [hello-world-php-npm-api-htaccess - client](./client).

For the server check [hello-world-php-npm-api-htaccess - server](./server).
