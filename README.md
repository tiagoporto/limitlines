<p align="center">
  <img src="./docs/logo.svg" alt="limit lines" width="600">
<p>

[![Release](https://img.shields.io/npm/v/limitlines.svg?style=flat-square&label=release)](https://github.com/tiagoporto/limitlines/releases)
[![Node](https://img.shields.io/node/v/limitlines.svg?style=flat-square)](https://www.npmjs.com/package/limitlines)
[![Downloads](https://img.shields.io/npm/d18m/limitlines.svg?style=flat-square)](https://www.npmjs.com/package/limitlines)

<!-- [![Coverage Status](https://img.shields.io/coveralls/tiagoporto/limitlines.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/limitlines) -->
<!-- [![Mutation testing cover](https://badge.stryker-mutator.io/github.com/tiagoporto/limitlines/main)](https://stryker-mutator.github.io) -->

> Lint and report number of lines by file.

![Screenshot](./docs/Screenshot.png)

## Installation

```bash
npm install limitlines
```

## Execute

```bash
limitlines [source] [options]
```

### Source

Globby paths to scan.

`string`, separate by comma.

Default: `.`

Accept [globby](https://github.com/sindresorhus/globby).

```bash
limitlines 'folder1/**/*, folder2/*.{html,js}'
```

## Options

### Ignore

Paths to ignore.

`string`, separate by comma.

Default: `node_modules`

```bash
limitlines --ignore 'somefolder'
```

### Max Lines

Maximum lines by file.

`integer`

Default: `300`

```bash
limitlines --maxlines 450
```

### Min Lines

Minimun accepted lines by file.

`integer`

Default: 1

```bash
limitlines --minlines 1
```

### Max Errors

Maximum errors accept.

`integer`

Default: `0`

```bash
limitlines --maxerrors 3
```

### Version

Output version number.

Alias `-v`.

```bash
limitlines --version
```

## License

Limitlines © 2018 by Tiago Porto is licensed under [MIT License](https://github.com/tiagoporto/limitlines/blob/main/LICENSE).
