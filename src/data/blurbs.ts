import blurbs from "./blurbs.json";

export function getLatestBlurb() {
	return blurbs.length > 0 ? blurbs[0] : null;
}

export { blurbs }; // ✅ Ensure blurbs is explicitly exported
