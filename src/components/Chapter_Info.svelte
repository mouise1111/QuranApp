<script>
	export let chapterDetail;
</script>

<h1 class="text-5xl font-bold mt-0 mb-0 text-center py-3">
	{chapterDetail.chapter.id}. {chapterDetail.chapter.name_complex}
</h1>

<p class="text-sm mt-0 mb-6 text-center py-3">{chapterDetail.chapter.translated_name.name}</p>
<p class="text-2xl mt-0 text-center">{chapterDetail.chapter.name_arabic}</p>
<p class="text-sm mt-0 text-center">{chapterDetail.chapter.verses_count} verses</p>
