<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let inputValue = '';
	function submitSearch() {
		goto('/search/' + inputValue);
	}
</script>

<div class="flex justify-center my-5">
	<form on:submit|preventDefault={submitSearch} class="flex">
		<input
			bind:value={inputValue}
			name="search_verse"
			type="text"
			class="input input-bordered input-accent mx-1"
		/>
		<button class="btn btn-accent">Search verse</button>
	</form>
</div>
