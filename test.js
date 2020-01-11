'use strict';

const remark = require('remark');
const preset = require('./index.js');
const report = require('vfile-reporter');

// Adjust this as needed to test whatever linting rule you want to test.
const md = `
---
front: matter
---

  #    Here is some MD #

paragraph.
- one
-   two
 - three

>   one
  >    two

[reflekss]
[refless]: /foo/bar
`;

remark()
  .use(preset)
  .process(md, (err, file) => {
    console.error(report(err || file));
    console.log('---------------');
    console.log(String(file));
  });
