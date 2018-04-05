#!/usr/bin/env node
'use strict';

const execa = require('execa');
const path = require('path');

let files = process.argv.slice(2);
if (files.length === 0) {
  files = [process.cwd()];
}

const result = execa.sync('remark', files.concat([
  `--use`,
  `remark-preset-davidtheclark`,
  `--frail`,
  `--quiet`,
  `--no-stdout`,
  `--output`
]));

if (result.stderr) {
  console.error(result.stderr);
}

if (result.error) {
  console.error(result.error);
}

if (result.stdout) {
  console.log(result.stdout);
}
