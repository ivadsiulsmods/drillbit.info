import { CATALOG_CACHE_CONTROL, getCrates } from "$lib/server/sheets";

export const load = async ({ fetch, setHeaders }) => {
	setHeaders({
		"cache-control": CATALOG_CACHE_CONTROL
	});

	const crates = await getCrates(fetch);

	return {
		crates
	};
};
