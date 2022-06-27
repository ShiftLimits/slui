import type { Config, PluginsConfig, OptionalConfig, ResolvableTo, KeyValuePair } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import { tailwindColors } from 'tailwindcss-color-suite'
import merge from 'lodash.merge'

const tailwind_config:Partial<OptionalConfig>&{
	theme: {
		base: ResolvableTo<KeyValuePair>,
		fontMetrics: ResolvableTo<KeyValuePair<string, KeyValuePair<string, number>>>,
		extend: { typography:ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair>>> }
	}
} = {
  theme: {
    base: {
      default: "22px",
    },
		fontMetrics: {
			"ui-sans-serif": {
				capHeight: 1434,
				ascent: 2210,
				descent: -700,
				unitsPerEm: 2048
			},
		},
    extend: {
      screens: {
        xs: "360px"
      },
      transitionTimingFunction: {
        "out-long": "cubic-bezier(.2,.38,.25,1)",
      },
      transitionDuration: {
        25: "25ms", // might as well be instant
        35: "35ms", // barely perceptible
        50: "50ms",
        2000: "2000ms",
        3000: "3000ms",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral[800]'),
            '--tw-prose-headings': theme('colors.neutral[900]'),
            '--tw-prose-lead': theme('colors.neutral[700]'),
            '--tw-prose-links': theme('colors.neutral[900]'),
            '--tw-prose-bold': theme('colors.neutral[900]'),
            '--tw-prose-counters': theme('colors.neutral[600]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[300]'),
            '--tw-prose-quotes': theme('colors.neutral[900]'),
            '--tw-prose-quote-borders': theme('colors.neutral[300]'),
            '--tw-prose-captions': theme('colors.neutral[700]'),
            '--tw-prose-code': theme('colors.neutral[900]'),
            '--tw-prose-pre-code': theme('colors.neutral[100]'),
            '--tw-prose-pre-bg': theme('colors.neutral[900]'),
            '--tw-prose-th-borders': theme('colors.neutral[300]'),
            '--tw-prose-td-borders': theme('colors.neutral[200]'),
            '--tw-prose-invert-body': theme('colors.neutral[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.neutral[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.neutral[400]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[600]'),
            '--tw-prose-invert-hr': theme('colors.neutral[700]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-captions': theme('colors.neutral[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.neutral[600]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[700]'),
          },
        },
      }),
    },
  },
}

const plugins:PluginsConfig = [
  require("tailwindcss-interaction-media"),
  require("tailwindcss-gridlines"),
  require("@tailwindcss/typography"),
  plugin(({ addVariant, e, addUtilities }) => {
    addVariant('initial', 'html :where(&)') // Variant that allows for default component utilities to be overridden, eg. `initial:h-1 h-2` would use `h-2` over `h-1`

    addVariant('middle', (({ modifySelectors, separator }:any) => { // Variant that selects the middle child
      modifySelectors(({ className }:any) => {
        return `.${e(`middle${separator}${className}`)}:not(:first-child):not(:last-child)`
      })
    }) as any)

    addUtilities({
      '.grid-stack': {
        'grid-template-columns': '1fr',
        'grid-template-rows': '1fr'
      },
      '.grid-stack > *, .grid-stack::before, .grid-stack::after': {
        'grid-area': '1 / 1 / 2 / 2'
      },
	    '.rounded-group > :first-child': {
		    'border-top-right-radius': '0 !important',
		    'border-bottom-right-radius': '0 !important'
	    },
	    '.rounded-group > :last-child': {
        'border-top-left-radius': '0 !important',
        'border-bottom-left-radius': '0 !important'
      },
	    '.rounded-group > *:not(:first-child):not(:last-child)': {
		    'border-radius': '0 !important'
	    },
      '.bg-transparency-grid': {
        'background-image': 'linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)',
        'background-size': '8px 8px',
		    'background-position': '0 0, 0 4px, 4px -4px, -4px 0px'
      }
    })
  })
]

const plugins_config:Config = {
	content: []
}
const handlers:Function[] = []

type PluginWithOptionsFn = Extract<PluginsConfig[0], { __isOptionsFunction: true }>
function isPluginWithOptionsFn(plugin:unknown):plugin is PluginWithOptionsFn {
  return typeof plugin == 'function' && (plugin as PluginWithOptionsFn).__isOptionsFunction
}

for (let plugin of plugins) {
  if (isPluginWithOptionsFn(plugin)) plugin = plugin({})

	if (typeof plugin == 'function') handlers.push(plugin)
	else {
		if (plugin.handler) handlers.push(plugin.handler)
  	if (plugin.config) merge(plugins_config, plugin.config)
	}
}

const tailwindPlugin = plugin.withOptions(() => {
	return (api) => {
		handlers.forEach(handler => handler(api))
	}
}, ({ colors = require('../colors.config') }:any = {}) => merge({}, plugins_config, tailwind_config, {
	colors: tailwindColors(colors)
}))

export default tailwindPlugin