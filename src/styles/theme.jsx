export const theme = Object.freeze({
	colors: {
		lightText: "#FFFFFF",
		darkText: "#1E1E1E",

		accent: "#DC3B5A",

		bgMain: "#181818",
		bgAccent: "#DC3B5A",
		bgLinkButton: "rgba(30, 30, 30, 0.10)",
		bgLinkButtonMB: "rgba(255, 255, 255, 0.10)",

		discord: "#5A65F2",
	},

	fontSizes: {
		small: "12px",
		medium: "16px",
		large: "20px",
		big: "24px",
		giant: "28px",

		bannerTextMb: "36px",
		bannerTextDt: "64px",

		titleAboutMb: "40px",
		titleAboutTb: "60px",
		titleAboutDt: "120px",

		titleSectionMb: "44px",
		titleSectionTb: "80px",
		titleSectionDt: "160px",

		titlePageMb: "44px",
		titlePageTb: "92px",
		titlePageDt: "164px",
	},

	fonts: {
		messina: "Messina Sans Mono",
		grotesk: "Right Grotesk",
		biro: "Biro Script Plus",
	},

	spacing: value => `${4 * value}px`,

	breakpoints: {
		sm: "360px",
		mb: "480px",
		tb: "768px",
		dt: "1280px",
		mw: "1440px",
	},
	mediaMin(value) {
		return `@media (min-width: ${this.breakpoints[value]})`;
	},

	shadows: {
		small: "0 5px 7px -1px rgba(237, 226, 226, 0.50)",
		regular: "0px 4px 10px 4px #9e9e9e",
		medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
	},

	animation: value => {
		const animationValue = value.split(",").map(property => {
			return `${property.trim()} 0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98)`;
		});
		return animationValue.join(", ");
	},
});
