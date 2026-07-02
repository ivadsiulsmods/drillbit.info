import {
	getExtraInfo,
	getItemsThatLie,
	STATS_FOR_NERDS_SPREADSHEET_URL
} from "$lib/server/sheets";

export const load = async ({ fetch }) => {
	const [extraInfo, itemsThatLieSections] = await Promise.all([
		getExtraInfo(fetch),
		getItemsThatLie(fetch)
	]);

	return {
		infoSections: extraInfo.infoSections,
		itemsThatLieSections,
		maxPlotSize: extraInfo.maxPlotSize,
		statsForNerdsSpreadsheetUrl: STATS_FOR_NERDS_SPREADSHEET_URL
	};
};
