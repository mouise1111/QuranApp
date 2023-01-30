<script>
	export let data;
	import SearchVerse from '../../../components/Search_Verse.svelte';
	import VerseCard from '../../../components/VerseCard.svelte';
	const { searchVerse } = data;
</script>

<SearchVerse />
<div class="flex justify-center">
	<button class="btn btn-accent"><a href="/">Return home</a></button>
</div>
<VerseCard verses={searchVerse} />
