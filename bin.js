#!/usr/bin/env node
'use strict';

const execa = require('execa');
const meow = require('meow');
const path = require('path');

const help = `
  Usage
    remark-preset-davidtheclark [options] [path|glob...]

    By default, runs on all Markdown files in cwd.

  Options
    -f, --format    Format files instead of linting them.

  Examples
    remark-preset-davidtheclark
    remark-preset-davidtheclark docs/*.md
    remark-preset-davidtheclark --format "docs/**/*.md"
`;
const cli = meow(help, {
  description: 'Lint or format Markdown files.',
  flags: {
    format: {
      type: 'boolean',
      alias: 'f'
    }
  }
});

let files = cli.input;
if (files.length === 0) {
  files = [process.cwd()];
}

const result = execa.sync('remark', files.concat([
  `--use`,
  `remark-preset-davidtheclark`,
  `--no-stdout`,
  cli.flags.format ? '--output' : '',
  cli.flags.format ? '--silent' : '--quiet'
]));

if (result.stderr) {
  console.error(result.stderr);
  process.exit(1);
}

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

if (result.stdout) {
  console.log(result.stdout);
}
