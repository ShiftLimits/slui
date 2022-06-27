declare module 'jest-matcher-css' {
	export default function toMatchCss(this: any, received: any, expected: any, options?: any):any
}

declare namespace Vi {
	interface Assertion {
		toMatchCss:(css:string)=>boolean
	}
}