import { VNode } from './mod.d.ts';

interface Options {
	shallow?: boolean;
	xml?: boolean;
	pretty?: boolean | string;
}

export function render(vnode: VNode, context?: any, options?: Options): string;
export function renderToString(
	vnode: VNode,
	context?: any,
	options?: Options
): string;
export function shallowRender(vnode: VNode, context?: any): string;
export default render;
