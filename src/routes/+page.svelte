<script>
	import { onMount } from 'svelte';
	import AllChapters from '../components/All_Chapters.svelte';
	import SearchVerse from '../components/Search_Verse.svelte';

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
</script>

<h1 class="text-5xl font-bold mt-0 mb-6 text-center py-3">Welcome to Quran.com 🕋</h1>
<SearchVerse />
<AllChapters {chapters} />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.900);
	}
</style>
