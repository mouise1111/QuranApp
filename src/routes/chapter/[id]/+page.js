export const load = ({ fetch, params }) => {
	const fetchChapter = async (id) => {
		const resp = await fetch(`https://api.quran.com/api/v4/chapters/${id}`);
		const respData = await resp.json(resp);
		return respData;
	};

	return {
		chapterDetail: fetchChapter(params.id)
	};
};
