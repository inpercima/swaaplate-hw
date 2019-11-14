# java-yarn-maven

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

An angular web project by swaaplate with java, yarn and maven.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 0.5.1-SNAPSHOT.

## Prerequisites

### Angular CLI

* `angular-cli 8.3.19` or higher

### Java

* `jdk 11` or higher

### Node, npm or yarn

* `node 12.3.1` or higher in combination with
  * `npm 6.12.1` or higher or
  * `yarn 1.19.1` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | wanted version | reason |
| ---------- | --------------- | -------------- | ------ |
| zone.js    | 0.9.1           | 0.10.2         | @angular/core@8.2.14" has incorrect peer dependency "zone.js@~0.9.1" |
| typescript | 3.5.3           | 3.7.2          | @angular-devkit/build-angular@0.803.19" has incorrect peer dependency "typescript@>=3.1 < 3.6 |
| typescript | 3.5.3           | 3.7.2          | @angular-devkit/build-angular > @ngtools/webpack@8.3.19" has incorrect peer dependency "typescript@>=3.4 < 3.6 |
| typescript | 3.5.3           | 3.7.2          | @angular/compiler-cli@8.2.14" has incorrect peer dependency "typescript@>=3.4 <3.6 |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/swaaplate-hw/java-yarn-maven
cd java-yarn-maven
```

## Usage

### Modules

For the client check [java-yarn-maven - client](https://github.com/inpercima/java-yarn-maven/tree/master/client).

For the server check [java-yarn-maven - server](https://github.com/inpercima/java-yarn-maven/tree/master/server).
