import styled from "@emotion/styled";
import { theme } from "styles";

const sharedStyles = ({ isMobileMenu }) => {
	const actualHover = isMobileMenu ? theme.colors.accent : theme.colors.lightText;
	return `
	padding: ${theme.spacing(2.5)};
	min-width: ${theme.spacing(12)};
	height: ${theme.spacing(12)};

	font-weight: 600;
	line-height: 1.167;
	text-transform: uppercase;

	background-color: ${theme.colors.bgLinkButton};
	backdrop-filter: blur(6px);

	transition: ${theme.animation("color")};

	@media (hover: hover) {
		&:hover {
			color: ${actualHover};
			text-decoration-line: underline;
		}
	}

	${theme.mediaMin("dt")} {
		min-width: ${theme.spacing(20)};
		height: ${theme.spacing(20)};

		font-size: ${theme.fontSizes.medium};
		line-height: 1.188;
	}
`;
};

export const Btn = styled.button`
	${sharedStyles}
`;

export const Anchor = styled.a`
	${sharedStyles}
	display: flex;
	justify-content: center;
	align-items: center;
`;
