import styled from "@emotion/styled";
import { theme } from "styles";

const getIconStyle = ({ isIcon }) => {
	if (isIcon) {
		return {
			width: 24,
			height: 24,
			fill: "currentColor",
		};
	}
};
const getParentStyle = ({ isIcon }) => {
	if (isIcon) {
		return {
			display: "grid",
			placeItems: "center",

			padding: `${theme.spacing(2.5)}`,
			width: `${theme.spacing(12)}`,
			height: `${theme.spacing(12)}`,
		};
	}
};
const getParentStyleForDesktop = ({ isIcon }) => {
	if (isIcon) {
		return {
			width: `${theme.spacing(20)}`,
			height: `${theme.spacing(20)}`,
		};
	}
};

export const Link = styled.a`
	padding: ${theme.spacing(2.5)} 0 ${theme.spacing(3)};

	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.medium};
	font-weight: 900;
	line-height: 1.188;

	background-color: ${prop => (prop.isMobileMenu ? theme.colors.bgLinkButtonMB : theme.colors.bgLinkButton)};
	border-radius: ${theme.spacing(3)};
	backdrop-filter: blur(6px);

	transition: ${theme.animation("color")};

	@media (hover: hover) {
		&:hover {
			color: ${prop => (prop.isMobileMenu ? theme.colors.accent : theme.colors.lightText)};
		}
	}

	${theme.mediaMin("dt")} {
		padding: ${theme.spacing(4)} 0 ${theme.spacing(5)};

		font-size: ${theme.fontSizes.giant};
		line-height: 1.214;

		${getParentStyleForDesktop}
	}

	${getParentStyle}

	& > svg {
		${getIconStyle}
	}
`;
