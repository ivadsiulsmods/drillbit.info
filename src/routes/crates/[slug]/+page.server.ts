import { CATALOG_CACHE_CONTROL, getCrateBySlug } from "$lib/server/sheets";

export const load = async ({ fetch, params, setHeaders }) => {
	setHeaders({
		"cache-control": CATALOG_CACHE_CONTROL
	});

	const crate = await getCrateBySlug(fetch, params.slug);

	return {
		crate
	};
};
