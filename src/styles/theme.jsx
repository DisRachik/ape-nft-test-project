const theme = Object.freeze({
	colors: {
		lightText: "#FFFFFF",
		darkText: "#1E1E1E",

		accent: "#DC3B5A",

		bgMain: "#181818",

		discord: "#5A65F2",
	},

	fontSizes: {
		small: "12px",
		medium: "16px",
		largeMb: "44px",
	},

	fonts: {
		messina: "Messina Sans Mono",
		grotesk: "Right Grotesk",
		biro: "Biro Script Plus",
	},

	spacing: value => `${4 * value}px`,

	breakpoints: {
		mobile: "360px",
		mobileMax: "480px",
		tablet: "768px",
		desktop: "1280px",
		desktopMax: "1440px",
	},

	shadows: {
		small: "0 5px 7px -1px rgba(237, 226, 226, 0.50)",
		regular: "0px 4px 10px 4px #9e9e9e",
		medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
	},

	animation: value => {
		const animationValue = value.split(",").map(property => {
			return `${property.trim()} 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)`;
		});
		return animationValue.join(", ");
	},
});

export default theme;
