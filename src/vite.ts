import type { Plugin } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { colorSuitePlugin } from 'tailwindcss-color-suite'
import { join, resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

export default function uiPlugin({ colorSuite = false }:{ colorSuite?:boolean|Parameters<typeof colorSuitePlugin>[0] } = {}):Plugin[] {
  const SVGIcons = createSvgIconsPlugin({
    iconDirs: [resolve(__dirname, '../assets/icons')],
    customDomId: 'slui-svg-icons'
  })

	const plugins = [SVGIcons]
	if (colorSuite) {
		if (typeof colorSuite == 'boolean') {
			// Copy the default color config from SLUI into the project root if none exists
			const config_file_path = join(process.cwd(), 'colors.config.js')
			if (!existsSync(config_file_path)) copyFileSync(resolve(__dirname, '../colors.config.js'), config_file_path)
			plugins.push(colorSuitePlugin())
		} else {
			plugins.push(colorSuitePlugin(typeof colorSuite == 'object' ? colorSuite : {}))
		}
	}

  return plugins
}