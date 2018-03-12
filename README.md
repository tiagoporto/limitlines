# Limit Lines

[![Build Status](https://travis-ci.org/tiagoporto/limit-lines.svg)](https://travis-ci.org/tiagoporto/limit-lines)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/limit-lines.svg)](https://coveralls.io/github/tiagoporto/limit-lines)
[![Dependencies Status](https://david-dm.org/tiagoporto/limit-lines.svg)](https://david-dm.org/tiagoporto/limit-lines)
[![devDependencies Status](https://david-dm.org/tiagoporto/limit-lines/dev-status.svg)](https://david-dm.org/tiagoporto/limit-lines#info=devDependencies)
[![NPM Downloads](https://img.shields.io/npm/dt/limit-lines.svg)](https://www.npmjs.com/package/limit-lines)
[![Github Release](https://img.shields.io/github/release/tiagoporto/limit-lines.svg)](https://github.com/tiagoporto/limit-lines/releases)
[![Github License](https://img.shields.io/github/license/tiagoporto/limit-lines.svg)](https://raw.githubusercontent.com/tiagoporto/limit-lines/master/LICENSE)


A tool for check and report lines by file.

## Installation
```
$ npm i limit-lines
```


## Execute
```
$ limitlines [options]
```


## Options

### Path
String, separate by comma
Globby paths to scan
```
$ limitlines --path './folder1/*, ./folder2/**/*'
```

### Ignore
String, separate by comma
Paths to ignore. Default: `./**/*`
```
$ limitlines --path './**/*' --ignore './node_modules'
```

### Maxlines
Integer
Maximum lines by file. Default: 300
```
$ limitlines --maxlines 450
```

### Minlines
Integer
Minimun lines by file. Default: 1
```
$ limitlines --minlines 1
```

### Maxerrors
Integer
Maximum errors accept. Default: 0
```
$ limitlines --maxerrors 3
```

### Version
Output the version number
Alias `-v`

```
$ limitlines --version
```



## License

Limit Lines is released under the terms of the [MIT license](https://github.com/tiagoporto/limit-lines/blob/master/LICENSE).
