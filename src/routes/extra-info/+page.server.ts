import { getExtraInfo, getStatsForNerds } from "$lib/server/sheets";

export const load = async ({ fetch }) => {
	const [extraInfo, statsForNerds] = await Promise.all([
		getExtraInfo(fetch),
		getStatsForNerds(fetch)
	]);

	return {
		infoSections: extraInfo.infoSections,
		itemsThatLieSections: statsForNerds.itemsThatLieSections,
		maxPlotSize: extraInfo.maxPlotSize,
		statsRows: statsForNerds.statsRows
	};
};
