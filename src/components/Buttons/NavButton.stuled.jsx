import styled from "@emotion/styled";
import { theme } from "styles";

const sharedStyles = ({ isMobileMenu, type }) => `
	padding: ${theme.spacing(2.5)} 0;
	min-width: ${theme.spacing(12)};
	height: ${theme.spacing(12)};

  font-size: ${isMobileMenu && !type && theme.fontSizes.big};
	font-weight: 600;
	line-height: ${isMobileMenu && !type ? 1.21 : 1.167};
	text-transform: uppercase;

	background-color: ${theme.colors.bgLinkButton};
	backdrop-filter: blur(6px);

	transition: ${theme.animation("color")};

	@media (hover: hover) {
		&:hover {
			color: ${isMobileMenu ? theme.colors.accent : theme.colors.lightText};
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

export const Btn = styled.button`
	${sharedStyles}
	background-color: ${prop => (prop.isMobileMenu ? theme.colors.bgLinkButtonMB : theme.colors.bgLinkButton)};
	border-radius: ${prop => prop.isMobileMenu && theme.spacing(2)};
`;

export const Anchor = styled.a`
	${sharedStyles}
	display: flex;
	justify-content: center;
	align-items: center;
`;
