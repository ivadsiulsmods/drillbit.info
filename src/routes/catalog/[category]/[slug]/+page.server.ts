import {
	CATALOG_CACHE_CONTROL,
	getCatalogItemByParams,
	getCrates
} from "$lib/server/sheets";

export const load = async ({ fetch, params, setHeaders }) => {
	setHeaders({
		"cache-control": CATALOG_CACHE_CONTROL
	});

	const [item, crates] = await Promise.all([
		getCatalogItemByParams(fetch, params.category, params.slug),
		getCrates(fetch)
	]);

	return {
		crates,
		item
	};
};
