import { css } from "@emotion/react";
import "modern-normalize";
import { theme } from "./theme";

export const GlobalStyles = css`
	#root {
		width: 100%;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		font-family: ${theme.fonts.messina}, sans-serif;
		font-weight: 400;
		font-size: ${theme.spacing(3)};
		line-height: 1.16667;

		color: ${theme.colors.lightText};
		background-color: ${theme.colors.bgMain};

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	ul,
	ol {
		margin: 0;
		padding-left: 0;
		list-style: none;
	}

	img,
	picture {
		display: block;
		max-width: 100%;
		height: auto;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		padding: 0;
		font: inherit;
		color: inherit;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;
