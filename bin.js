#!/usr/bin/env node
'use strict';

const execa = require('execa');
const path = require('path');

const result = execa.sync('remark', [
  process.cwd(),
  `--use`,
  `remark-preset-davidtheclark`,
  `--frail`,
  `--quiet`,
  `--no-stdout`,
  `--output`
]);

if (result.stderr) {
  console.error(result.stderr);
}

if (result.error) {
  console.error(result.error);
}

if (result.stdout) {
  console.log(result.stdout);
}
