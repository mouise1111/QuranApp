<script>
	export let verses;
</script>

<div class="flex flex-col p-5 bg-gray-800 rounded-lg m-20 text-right">
	{#each verses as verse}
		<div class="my-4">
			<p class="text-sm font-medium text-gray-600">{verse.verse_key}</p>
			<p class="text-2xl">
				{verse.text_indopak}
			</p>
		</div>
	{/each}
</div>
