<script>
	import ChapterInfo from '../../../components/Chapter_Info.svelte';
	import VersesArabic from '../../../components/Verses_Arabic.svelte';
	import VersesEnglish from '../../../components/Verses_English.svelte';

	export let data;
	const { chapterDetail, verseDetailEnglish, verseDetailArabic, verseStyle } = data;

	let showEnglish = true;
	let showArabic = false;

	function toggleArabic() {
		showArabic = true;
		showEnglish = false;
	}
	function toggleEnglish() {
		showArabic = false;
		showEnglish = true;
	}
</script>

<ChapterInfo {chapterDetail} />
<div class="text-center mt-5 ">
	<button on:click={toggleEnglish} class="btn {showEnglish ? 'btn-active' : ''}">English</button>
	<button on:click={toggleArabic} class="btn {showArabic ? 'btn-active' : ''}">Arabic</button>
</div>
{#if showEnglish}
	<VersesEnglish verses={verseDetailEnglish.verses} />
{/if}

{#if showArabic}
	<VersesArabic verses={verseDetailArabic.verses} />
{/if}
