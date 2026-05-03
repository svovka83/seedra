export function updateFilterUrl(filters) {
	const params = new URLSearchParams();

	// if (filters.currentSortOrder) params.set("order", filters.currentSortOrder);

	// if (filters.search) params.set("search", filters.search);

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
