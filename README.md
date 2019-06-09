# remark-preset-davidtheclark

My [remark] preset, for keeping Markdown documentation tidy.

Uses [remark-lint] plugins and a few other [remark] plugins.

Validation:

- Links within the repository (to headings, other files, headings in other files) are validated.
- A table of contents will be generated if you include a `Table of contents` header in a document.

Syntax — most of which is automatically fixed:

- Unordered list items marked with `-`.
- List items indented only one space beyond the marker.
- Emphasis and strong are both indicated with `*`.
- Code blocks are fenced with triple backticks.
- `atx`-style headings, the ones that (just) start with `#` signs, e.g. `## Second-level heading`.
- Other stuff that should be intuitive or prevent mistakes.

## Usage

You can use this package as a remark plugin, in Node code or with [remark-cli].

It also provides a CLI that runs remark-cli for you, which is how I normally use it.

```
Lint or format Markdown files.

Usage
  remark-preset-davidtheclark [options] [path|glob...]

  By default, runs on all Markdown files in cwd.

Options
  -f, --format    Format files instead of linting them.

Examples
  remark-preset-davidtheclark
  remark-preset-davidtheclark docs/*.md
  remark-preset-davidtheclark --format "docs/**/*.md"
```

[remark]: https://github.com/wooorm/remark
[remark-lint]: https://github.com/wooorm/remark-lint
[remark-cli]: https://github.com/wooorm/remark/tree/master/packages/remark-cli
