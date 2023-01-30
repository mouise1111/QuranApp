export const load = ({ fetch, params }) => {
	const fetchChapter = async (id) => {
		const resp = await fetch(`https://api.quran.com/api/v4/search?q=${id}&language=en`);
		const respData = await resp.json(resp);
		return respData;
	};
	return {
		searchVerse: fetchChapter(params.searchId)
	};
};
