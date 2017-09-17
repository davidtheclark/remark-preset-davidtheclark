# remark-preset-davidtheclark

My remark preset, for keeping Markdown documentation tidy.

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

Usage with [remark-cli](https://github.com/wooorm/remark/tree/master/packages/remark-cli).

Here's the way I like to use it, which does the following:

- Checks Markdown files in the project root and `docs/` directory.
- Automatically formats files, overwriting them (`--output`).
- Breaks tests if linting errors are found (`--frail`).
- Only outputs warnings and errors (`--quiet` and `--no-stdout`).

```
remark '*.md' 'docs/**/*.md' --use remark-preset-davidtheclark --frail --quiet --no-stdout --output
```
