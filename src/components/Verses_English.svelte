<script>
	export let verses;
</script>

<div class="flex flex-col p-5 bg-gray-800 rounded-lg m-20">
	{#each verses as verse}
		<div class="my-4">
			<p class="text-sm font-medium text-gray-600">Verse number: {verse.verse_number}</p>
			<p class="text-lg">
				{#each verse.words as words}
					<span>{words.translation.text} </span>
				{/each}
			</p>
		</div>
	{/each}
</div>
