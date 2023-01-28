<script>
	export let data;
	const { chapterDetail } = data;
	let sameText = false;

	if (chapterDetail.chapter.name_complex === chapterDetail.chapter.name_simple) {
		sameText = true;
	}
	console.log(sameText);
</script>

<!-- <h1 class="text-5xl font-bold mt-0 mb-6 text-center py-3">{data.chapter.name_complex}</h1> -->
<h1 class="text-5xl font-bold mt-0 mb-0 text-center py-3">{chapterDetail.chapter.name_complex}</h1>
{#if sameText == false}
	<p class="text-sm mt-0 mb-6 text-center py-3">{chapterDetail.chapter.name_simple}</p>
{/if}
