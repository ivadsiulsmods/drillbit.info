import { CATALOG_CACHE_CONTROL, getCatalogSections } from "$lib/server/sheets";

export const load = async ({ fetch, setHeaders }) => {
	setHeaders({
		"cache-control": CATALOG_CACHE_CONTROL
	});

	const sections = await getCatalogSections(fetch);
	const totalItems = sections.reduce((sum, section) => sum + section.items.length, 0);

	return {
		sections,
		totalItems
	};
};
