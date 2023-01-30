<script>
	export let chapters;
</script>

<div class="flex flex-row flex-wrap place-content-center gap-4">
	{#each chapters as chapter}
		<div class="card w-96 bg-base-100 shadow-xl chapter">
			<!-- <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
			<div class="card-body">
				<h2 class="card-title">{chapter.name_simple}</h2>
				<p>{chapter.translated_name.name}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">
						<a href="/chapter/{chapter.id}">Read now</a>
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.chapter:hover {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
	}
</style>
