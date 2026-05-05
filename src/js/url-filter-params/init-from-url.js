import { filters } from "./state-filters";

export function initFromUrl() {
	const params = new URLSearchParams(window.location.search);

	// filters.currentSortOrder = params.get("order") || "";

	filters.search = params.get("search") || "";

	filters.minPrice = Number(params.get("minPrice")) || 0;
	filters.maxPrice = Number(params.get("maxPrice")) || 1000;

	filters.types = params.get("types") ? params.get("types").split(",") : [];
	filters.featured = params.get("featured") ? params.get("featured").split(",") : [];
	filters.growing = params.get("growing") ? params.get("growing").split(",") : [];
	filters.use = params.get("use") ? params.get("use").split(",") : [];
	filters.additional = params.get("additional") ? params.get("additional").split(",") : [];
}
