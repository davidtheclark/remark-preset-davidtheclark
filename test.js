'use strict';

const remark = require('remark');
const preset = require('./index.js');
const report = require('vfile-reporter');

const md = `
  #    Here is some MD #

paragraph.
- one
-   two
 - three

>   one
  >    two
`;

remark()
  .use(preset)
  .process(md, (err, file) => {
    console.error(report(err || file));
    console.log('---------------');
    console.log(String(file));
  });
