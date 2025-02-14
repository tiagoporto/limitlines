#!/usr/bin/env node
import chalk from 'chalk'
import { program } from 'commander'
import countLinesInFile from 'count-lines-in-file'
import fs from 'fs'
import { globby } from 'globby'
import path from 'path'

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { version } = JSON.parse(jsonData)

const list = (val) => {
  return val.replace(/\s/g, '').split(',')
}

const MAX_ERRORS = 0
const MAX_LINES_BY_FILE = 300
const MIN_LINES_BY_FILE = 1
const PATHS = ['.']
let scanPaths

program.version(version, '-v, --version')

program
  .argument('[source]')
  .description(`Globby paths to scan. Default: ${PATHS}`)
  .action((globPath) => {
    scanPaths = globPath ? list(globPath) : PATHS
  })

program
  .option('--ignore <ignore>', 'Globby paths to ignore', list)
  .option(
    '--maxlines <maxlines>',
    `Maximum lines by file. Default: ${MAX_LINES_BY_FILE}`,
    parseInt,
  )
  .option(
    '--minlines <minlines>',
    `Minimum lines by file. Default: ${MIN_LINES_BY_FILE}`,
    parseInt,
  )
  .option(
    '--maxerrors <maxerrors>',
    `Maximum errors accept. Default: ${MAX_ERRORS}`,
    parseInt,
  )

program.parse(process.argv)

const { maxerrors, maxlines, minlines, ignore } = program.opts()
const maxErrors = maxerrors ? maxerrors : MAX_ERRORS
const maxLinesByFile = maxlines ? maxlines : MAX_LINES_BY_FILE
const minLinesByFile = minlines ? minlines : 1

if (ignore) {
  ignore.forEach((path) => {
    scanPaths.push(`!${path}`)
  })
}
scanPaths.push('!node_modules')

globby(scanPaths)
  .then((paths) => {
    let totalLines = 0
    let totalErrors = 0
    let currentTotalFiles = 0

    console.info(chalk.inverse('[Init Limit Lines]'))
    console.info(
      chalk.inverse.underline('Docs: https://github.com/tiagoporto/limitlines'),
    )

    paths.forEach((file) => {
      countLinesInFile(file, (error, numberOfLines) => {
        currentTotalFiles += 1
        totalLines += numberOfLines

        if (error) {
          console.error(error)
        }

        const message = `${numberOfLines} ${chalk.underline(
          path.resolve(file),
        )}`

        if (numberOfLines > maxLinesByFile || numberOfLines < minLinesByFile) {
          totalErrors += 1
          console.error(chalk.reset('Lines by file:'), chalk.red(message))
        }

        if (currentTotalFiles === paths.length) {
          console.info('')
          console.info(chalk(`Total Files: ${paths.length}`))
          console.info(chalk(`Total Lines: ${totalLines}`))
          console.info(chalk(`Min lines by file: ${minLinesByFile}`))
          console.info(chalk(`Max lines by file: ${maxLinesByFile}`))

          let color = 'reset'
          totalErrors > maxErrors && (color = 'red')
          totalErrors > 0 && totalErrors <= maxErrors && (color = 'yellow')

          console.error(
            chalk[color](
              `Max Errors: ${maxErrors} Founded Errors: ${totalErrors}`,
            ),
          )
          if (color !== 'red') {
            console.info(chalk.green('Limit Lines Passed'))
          }

          if (totalErrors > maxErrors) {
            process.exit(1)
          }
        }
      })
    })
  })
  .catch((err) => console.error(err))
