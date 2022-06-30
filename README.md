# ShiftLimits UI Library

An opinionated UI library for Vue 3 projects designed with Tailwind CSS.

## What is this?

SLUI is a compilation of components, plugins, and configurations that are used throughout my projects.

## Installation

SLUI depends on a minimum of `vite@^2.0.0`, `vue@^3.0.0`, and `tailwind@^3.0.0` being installed. Many components also rely on `vue-router@^4.0.0` and `@headlessui/vue@^1.6.0` as peer dependencies for functionality.

Recommended install:

```bash
$ npm install @shiftlimits/ui

$ yarn add @shiftlimits/ui

$ pnpm add @shiftlimits/ui
```

1. Add the SLUI Tailwind plugin to your Tailwind config:

```js
// tailwind.config.js

module.exports = {
	// ...
	plugins: [
		require('@shiftlimits/ui/tailwind')
	]
}
```

2. Add the SLUI vite plugin to your Vite config:

```ts
import { defineConfig } from 'vite'
import vue from '@vite/vue-plugin'
import slui from '@shiftlimits/ui/vite'

// vite.config.ts
export default defineConfig({
	plugins: [
		vue(),
		slui()
	]
})
```

## Usage

SLUI is designed to be used piecemeal depending on your needs.

### Color Palette

SLUI ships with the default Color Suite palette, which itself is generated from the expertly designed [Tailwind CSS color palette](https://tailwindcss.com/docs/customizing-colors). The only difference is that `neutral` from the Tailwind CSS palette has been renamed to `gray-neutral` to avoid conflicting alias names.

Included are semantic aliases which are used by components:

- `primary` -> `cyan`
- `secondary` -> `indigo`
- `neutral` -> `slate`
- `info` -> `sky`
- `success` -> `emerald`
- `warning` -> `amber`
- `alert` -> `red`
- `link` -> `sky`

#### Custom Palette

You can enable use of the full Color Suite editor to customize your project's color palette by first editing the options passed to SLUI in your Vite config:

```ts
import { defineConfig } from 'vite'
import vue from '@vite/vue-plugin'
import slui from '@shiftlimits/ui/vite'

// vite.config.ts
export default defineConfig({
	plugins: [
		vue(),
		slui({
			colorSuite: true
		})
	]
})
```

Then update your Tailwind config to point the SLUI plugin to your project's color config:

```js
// tailwind.config.js

module.exports = {
	// ...
	plugins: [
		require('@shiftlimits/ui/tailwind')({
			colors: require('../colors.config')
		})
	]
}
```

**Note:** You will need to run Vite at least once after following these instructions for Vite to create the `colors.config.js` file.


## Vue
### Components
- [ ] **SvgIcon** – `Requires Vite plugin`

#### Buttons
- [x] **TextLink**
- [ ] **FlatButton**

#### Inputs
- [ ] **TextInput**

#### Forms
- [ ] **GraphQLForm** – Provides a form API for inputs to link to fields within the form object and handles submission of form data to a GraphQL endpoint `Requires @urql/vue`
- [ ] **Form Field** – Wraps a set of inputs and uses the form API provided by a wrapping Form component to help automatically build a form object and display validation and error feedback

#### Headless
- [x] AbstractButton

### Plugins
- [ ] **Modals, Dialogue, and Alerts plugin**

## Tailwind CSS

### Theme Config
- [x] **[Color Suite](https://github.com/ShiftLimits/tailwindcss-color-suite)** – configures the colors object using values from the Color Suite editor

### Plugins
- [x] **[Gridlines](https://github.com/ShiftLimits/tailwindcss-gridlines)** – spacing system overhaul
- [x] **[Typography](https://github.com/tailwindlabs/typography)** – official typography plugin
- [x] **[Interaction Media Variants](https://github.com/ShiftLimits/tailwindcss-interaction-media)** – variants for detecting device's interaction media capabilities

## Vite Plugin
### Added Plugins
- [x] **[Svg Icons Plugin](https://github.com/vbenjs/vite-plugin-svg-icons)** – compiles and injects an SVG icon sprite map for icons used by SLUI components
- [x] **[Color Suite](https://github.com/ShiftLimits/tailwindcss-color-suite)** – adds an in-browser editor for color customization

## License

SLUI is [MIT](LICENSE) licensed.
