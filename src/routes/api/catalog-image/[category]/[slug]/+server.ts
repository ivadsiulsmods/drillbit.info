import {
	CATALOG_IMAGE_CACHE_CONTROL,
	getCatalogImageByParams
} from "$lib/server/sheets";

export const GET = async ({ fetch, params, setHeaders, url }) => {
	const image = await getCatalogImageByParams(
		fetch,
		params.category,
		params.slug,
		url.searchParams.get("variant") ?? "N/A"
	);

	setHeaders({
		"cache-control": CATALOG_IMAGE_CACHE_CONTROL
	});

	return new Response(new Uint8Array(image.content), {
		headers: {
			"cache-control": CATALOG_IMAGE_CACHE_CONTROL,
			"content-type": image.contentType
		}
	});
};
