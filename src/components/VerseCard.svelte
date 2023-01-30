<script>
	export let verses;
</script>

<div class="flex flex-col p-5 bg-gray-800 rounded-lg m-20 border border-accent">
	{#each verses.search.results as verse}
		<div class="my-4 border-b border-ghost p-3 py-5 verse">
			<p class="text-sm font-medium text-gray-600">{verse.verse_key}</p>
			<p>
				{#each verse.words as words}
					<span>
						{words.text}
					</span>
				{/each}
			</p>
		</div>
	{/each}
</div>

<style>
	.verse:hover {
		cursor: pointer;
		transition: border-color 0.4s;
		border-color: rgb(84, 84, 84);
	}
	.verse:hover {
		cursor: pointer;
		transition: transform 0.4s;
		transform: scale(1.05);
	}
</style>
