export function discover(classLink, titleLink, pathLink) {
	return `
  <a class="discover ${classLink}" href="${pathLink}">
    ${titleLink}
  </a>
  `;
}
