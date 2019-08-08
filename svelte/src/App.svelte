<script>
    export let name

    let count = 0

    function counter() {
        count+= 1
    }
</script>

<style>
	h1 {
		color: blue;
	}
</style>

<h1>Hello {name}!</h1>
<h2>Welcome to Svelte!!</h2>
<button on:click={counter}>
Click me I'm reactive!</button>
<span>{count}</span>
