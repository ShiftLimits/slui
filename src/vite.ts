import type { Plugin } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { colorSuitePlugin } from 'tailwindcss-color-suite'
import { resolve } from 'path'

export default function uiPlugin({ colorSuite = false }:{ colorSuite?:boolean|Parameters<typeof colorSuitePlugin>[0] } = {}):Plugin[] {
  const SVGIcons = createSvgIconsPlugin({
    iconDirs: [resolve(__dirname, '../assets/icons')],
    customDomId: 'slui-svg-icons'
  })

	const plugins = [SVGIcons]
	if (colorSuite) plugins.push(colorSuitePlugin(typeof colorSuite == 'object' ? colorSuite : {}))

  return plugins
}