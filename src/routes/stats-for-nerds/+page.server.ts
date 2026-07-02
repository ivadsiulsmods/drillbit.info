import { getStatsForNerds } from "$lib/server/sheets";

export const load = async ({ fetch }) => {
	return getStatsForNerds(fetch);
};
