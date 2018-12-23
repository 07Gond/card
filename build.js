'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single-double'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Gerson Niño'),
  handle: chalk.white('07Gond'),
  work: chalk.white('Senior Fullstack Engineer at Globant'),
  focus: chalk.white('Now on Node.js performance work ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('07gond'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~07gond'),
  github: chalk.gray('https://github.com/') + chalk.green('07gond'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('07gond'),
  web: chalk.cyan('https://gersonnino.me'),
  npx: chalk.red('npx') + ' ' + chalk.white('07gond'),
  labelWork: chalk.white.bold('       Work:'),
  labelFocus: chalk.white.bold('      Focus:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const focusing = `${data.labelFocus}  ${data.focus}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =  heading + // data.name + data.handle
                newline + newline + // Add one whole blank line
                working + newline + // data.labelWork + data.work
                focusing + newline + newline + // data.labelOpenSource + data.opensource
                twittering + newline + // data.labelTwitter + data.twitter
                npming + newline + // data.labelnpm + data.npm
                githubing + newline + // data.labelGitHub + data.github
                linkedining + newline + // data.labelLinkedIn + data.linkedin
                webing + newline + newline + // data.labelWeb + data.web
                carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
