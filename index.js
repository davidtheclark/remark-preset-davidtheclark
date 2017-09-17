exports.settings = {
  listItemIndent: 1,
  emphasis: '*',
  strong: '*',
  bullet: '-',
  fences: true
};

exports.plugins = [
  require('remark-validate-links'),
  [require('remark-toc'), { maxDepth: 3, tight: true }],
  [require('remark-lint-blockquote-indentation'), 2],
  [require('remark-lint-code-block-style'), 'fenced'],
  [require('remark-lint-fenced-code-marker'), '`'],
  [require('remark-lint-file-extension'), 'md'],
  require('remark-lint-final-definition'),
  require('remark-lint-first-heading-level'),
  [require('remark-lint-heading-style'), 'atx'],
  [require('remark-lint-list-item-indent'), 'space'],
  require('remark-lint-no-consecutive-blank-lines'),
  require('remark-lint-no-duplicate-definitions'),
  require('remark-lint-no-duplicate-headings'),
  require('remark-lint-no-heading-content-indent'),
  require('remark-lint-no-heading-indent'),
  [require('remark-lint-no-missing-blank-lines'), { exceptTightLists: true }],
  require('remark-lint-no-multiple-toplevel-headings'),
  require('remark-lint-no-tabs'),
];
