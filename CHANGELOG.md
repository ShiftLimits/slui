# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Updated color map for `TextLink`

### Added
- Copy default `colors.config.js` file to project root when enabling the Color Suite editor in Vite plugin
- Add `SvgIcon` component for displaying icons from `vite-plugin-svg-icons`

### Fixed
- Fix colors not being configured correctly in Tailwind config
- Fix error when navigating if no slot is passed to AbstractButton

## [0.0.2]- 2022-06-29

### Added
- Add plugin for Vite that adds SVG icons required by the UI library to your project, and optionally enables the color suite panel

## [0.0.1]- 2022-06-27

Initial bare bones release.

### Added
- Add plugin for Tailwind CSS that ensures all plugins required by the UI library are added to Tailwind

#### Buttons
- Add `AbstractButton` component to serve as the base for all button-like components
- Add `TextLink` component for styling and managing the behavior of inline text links
