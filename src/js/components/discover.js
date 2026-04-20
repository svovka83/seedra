export function discover(classDiscover, titleDiscover, pathDiscover) {
	return `
  <a class="discover ${classDiscover}" href="${pathDiscover}">
    ${titleDiscover}
  </a>
  `;
}
