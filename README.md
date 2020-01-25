# eslint-config-starstuff

Opinionated, yet simple ESLint config

## Philosophy

This config is built with the assumption that you're going to be using [Prettier](https://prettier.io/) across your project, and want ESLint to provide advice and respect Prettier's formatting. This config aims to share this in a simple, shareable config.

## Installation

```shell
npm install --save-dev eslint eslint-config-starstuff
```

## Recommended Usage

The recommended usage of `eslint-config-starstuff` is to allow it to configure itself within your project using the [auto preset](#auto).

To configure your project with the recommended configuration, add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "starstuff/auto"
  }
}
```

## Presets

The following preset are built into the Starstuff ESLint config.

### Base

The base configuration is suitable for use is nearly any JavaScript project. It enforces using good code practices using a variety of ESLint plugins and enforces code style using Prettier.

The following ESLint plugins are used in this configuration:

-

To use this preset add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "starstuff"
  }
}
```

### Recommended

The recommended preset is a shorthand for the [auto preset](#auto). This follows with conventions in the ESLint ecosystem.

To use this preset add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "starstuff/recommended"
  }
}
```

### Auto

This configuration automatically loads dependency-specific and environment-specific presets, based on project configuration.

To use this preset add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "starstuff/auto"
  }
}
```

### React

To use this preset add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["starstuff", "starstuff/react"]
  }
}
```

### TypeScript

To use this preset add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["starstuff", "starstuff/typescript"]
  }
}
```

## License

Copyright 2019-2020 [Kepler Sticka-Jones](https://keplersj.com/). License ISC
