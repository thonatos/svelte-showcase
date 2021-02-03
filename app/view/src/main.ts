import App from './App.svelte';

// @ts-ignore
const _locals = window._locals || {};

const app = new App({
  target: document.getElementById('server-rendered-html'),
  props: {
    title: _locals.title,
    description: _locals.description,
  },
  hydrate: true,
});

export default app;
