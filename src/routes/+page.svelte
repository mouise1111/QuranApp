<script>
	import { onMount } from 'svelte';
	import AllChapters from '../components/All_Chapters.svelte';

	let chapters = [];
	onMount(async () => {
		chapters = await getChapters();
	});
	const getChapters = async () => {
		const res = await fetch('https://api.quran.com/api/v4/chapters?language=en');
		const data = await res.json();
		return data.chapters;
	};

	getChapters();
	let searchString;
</script>

<h1 class="text-5xl font-bold mt-0 mb-6 text-center py-3">Welcome to Quran</h1>
<div class="flex flex-row mb-6 justify-center">
	<input
		bind:value={searchString}
		type="text"
		class="border border-gray-400 rounded p-2"
		placeholder="Search Quran chapters"
		id="searchInput"
	/>
	<button class="btn btn-secondary ml-2">Search</button>
	<p>{searchString}</p>
</div>

<AllChapters {chapters} />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
