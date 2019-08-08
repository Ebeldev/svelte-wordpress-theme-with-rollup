import App from './App.svelte'

const app = new App({
  target: document.getElementById('svelteWrapper'),
  props: {
    name: 'WordPresser\'s and Rolluper\'s'
  }
})

export default app
