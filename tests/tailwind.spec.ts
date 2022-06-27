import type { Config } from 'tailwindcss/types/config'
import { describe, expect, it } from 'vitest'
import cssMatcher from 'jest-matcher-css'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import slui from '../src/tailwind'

expect.extend({	toMatchCss: cssMatcher })

function generateUtilityCSS(config:Partial<Config&{safelist:string[]}> = {}) {
	config = Object.assign({}, { safelist: [{ pattern: /.*/ }], theme: {}, corePlugins: [] }, config)
	return postcss(
		tailwindcss({
			...config as Config,
			plugins: [slui]
		})
	).process('@tailwind base; @tailwind utilities;', {
		from: undefined,
	}).then(result => {
		return result.css;
	})
}

describe("Tailwind CSS Plugin", () => {
	it("should generate utilities", () => {
		return generateUtilityCSS({ theme: {}, corePlugins: ['backgroundColor'] }).then(result => {
			expect(result).toMatch(/--twgl-base/) // Has gridlines variable

			// Colors from color suite
			expect(result).toMatch(/\.bg-slate-50/)
			expect(result).toMatch(/\.bg-slate-100/)
			expect(result).toMatch(/\.bg-slate-500/)
			expect(result).toMatch(/\.bg-slate-900/)
			expect(result).toMatch(/\.bg-white/)
			expect(result).toMatch(/\.bg-transparent/)

			// Classes added by SLUI
			expect(result).toMatch(/\.grid-stack/)
			expect(result).toMatch(/\.rounded-group/)
		})
	})
})