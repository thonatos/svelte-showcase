import App from './App.svelte';

const _locals = window['_locals'] || {};

const app = new App({
	target: document.querySelector("#server-rendered-html"),
	props: {
		title: _locals.title,
		description: _locals.description,
	},
});

export default app;
