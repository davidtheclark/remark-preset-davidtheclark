exports.settings = {
  listItemIndent: 1,
  emphasis: '*',
  strong: '*',
  bullet: '-',
  fences: true
};

exports.plugins = [
  require('remark-frontmatter'),
  require('remark-validate-links'),
  [require('remark-toc'), { maxDepth: 3, tight: true }],
  [require('remark-lint-blockquote-indentation'), 2],
  [require('remark-lint-file-extension'), 'md'],
  require('remark-lint-final-definition'),
  require('remark-lint-no-duplicate-definitions'),
  require('remark-lint-no-multiple-toplevel-headings'),
  require('remark-lint-no-tabs'),
  require('remark-lint-no-undefined-references'),
];
