export const load = ({ fetch, params }) => {
	const fetchChapter = async (id) => {
		const resp = await fetch(`https://api.quran.com/api/v4/chapters/${id}`);
		const respData = await resp.json(resp);
		return respData;
	};
	const fetchVersesEnglish = async (id) => {
		const resp = await fetch(
			`https://api.quran.com/api/v4/verses/by_chapter/${id}?language=en&words=true`
		);
		const respData = await resp.json(resp);
		return respData;
	};
	const fetchVersesArabic = async (id) => {
		const resp = await fetch(
			`https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
		);
		const respData = await resp.json(resp);
		return respData;
	};

	return {
		chapterDetail: fetchChapter(params.id),
		verseDetailEnglish: fetchVersesEnglish(params.id),
		verseDetailArabic: fetchVersesArabic(params.id)
	};
};
