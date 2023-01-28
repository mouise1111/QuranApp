<script>
	import { onMount } from 'svelte';

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

<h1 class="text-5xl font-bold mt-0 mb-6 text-center py-3">Welcome to Quran</h1>
<div class="flex flex-row flex-wrap place-content-center gap-4">
	{#each chapters as chapter}
		<div class="card w-96 bg-base-100 shadow-xl">
			<!-- <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
			<div class="card-body">
				<h2 class="card-title">{chapter.name_simple}</h2>
				<p>{chapter.translated_name.name}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">
						<a href="/chapter/{chapter.id}">Read now {chapter.id}</a>
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
