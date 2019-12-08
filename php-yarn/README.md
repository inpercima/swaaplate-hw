# php-yarn

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

An angular web project by swaaplate with php and yarn.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 1.0.1-SNAPSHOT.

## Prerequisites

### Angular CLI

* `angular-cli 8.3.20` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Node, npm or yarn

* `node 12.3.1` or higher in combination with
  * `npm 6.12.1` or higher or
  * `yarn 1.19.1` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | wanted version | reason |
| ---------- | --------------- | -------------- | ------ |
| copy-webpack-plugin | 4.6.0 | 5.0.3 | copy-webpack-plugin@5.0.3" has unmet peer dependency "webpack@^4.0.0" |
| zone.js    | 0.9.1           | 0.10.2         | @angular/core@8.2.14" has incorrect peer dependency "zone.js@~0.9.1" |
| typescript | 3.5.3           | 3.7.2          | @angular-devkit/build-angular@0.803.19" has incorrect peer dependency "typescript@>=3.1 < 3.6 |
| typescript | 3.5.3           | 3.7.2          | @angular-devkit/build-angular > @ngtools/webpack@8.3.19" has incorrect peer dependency "typescript@>=3.4 < 3.6 |
| typescript | 3.5.3           | 3.7.2          | @angular/compiler-cli@8.2.14" has incorrect peer dependency "typescript@>=3.4 <3.6 |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/swaaplate-hw/php-yarn
cd php-yarn
```

## Usage

### Modules

For the client check [php-yarn - client](https://github.com/inpercima/php-yarn/tree/master/client).

For the server check [php-yarn - server](https://github.com/inpercima/php-yarn/tree/master/server).
