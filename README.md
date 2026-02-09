# MyST JS Anywidget

An example of a MyST JS Anywidget that renders a button which, when pressed, emits confetti (see `widget.mjs`). This widget uses `esbuild` to bundle dependencies.

## Build the bundle

The `esbuild` tool takes `widget.mjs` and its dependencies as inputs, and generates a `dist/widget.mjs` bundle. This bundle can be directly loaded by MyST without requiring a build or install step.

The `build` script defined in `package.json` shows an example of using `esbuild` to generate an `mjs` module. It can be invoked by running

```shell
npm run build
```

## Using the bundled plugin

The output MyST anywidget can be loaded into a MyST project via an `anywidget` directive. You can publish the built plugin to a public artifact repository, such as a GitHub release artifact, and users can directly link to it in their anywidget directive:

```yaml
project:
  plugins:
    - https://github.com/jupyter-book/example-js-plugin/releases/latest/download/widget.mjs
```
