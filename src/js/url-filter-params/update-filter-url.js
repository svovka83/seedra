export function updateFilterUrl(filters) {
	const params = new URLSearchParams();

	// if (filters.currentSortOrder) params.set("order", filters.currentSortOrder);

	if (filters.search) params.set("search", filters.search);

	if (filters.minPrice > 0) params.set("minPrice", filters.minPrice);
	if (filters.maxPrice > 0 && filters.maxPrice < 1000) params.set("maxPrice", filters.maxPrice);

	if (filters.types?.length) {
		params.set("types", filters.types.join(","));
	}
	if (filters.featured?.length) {
		params.set("featured", filters.featured.join(","));
	}
	if (filters.growing?.length) {
		params.set("growing", filters.growing.join(","));
	}
	if (filters.use?.length) {
		params.set("use", filters.use.join(","));
	}
	if (filters.additional?.length) {
		params.set("additional", filters.additional.join(","));
	}

	const newUrl = `${window.location.pathname}?${params.toString()}`;
	window.history.replaceState({}, "", newUrl);
}
