import styled from "@emotion/styled";
import { theme } from "styles";

export const Link = styled.a`
	padding: ${theme.spacing(2.5)} 0 ${theme.spacing(3)};

	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.medium};
	font-weight: 900;
	line-height: 1.188;

	background-color: ${theme.colors.bgLinkButton};
	border-radius: ${theme.spacing(3)};
	backdrop-filter: blur(6px);

	transition: ${props => props.theme.animation("color")};

	@media (hover: hover) {
		&:hover {
			color: ${theme.colors.lightText};
		}
	}

	${theme.mediaMin("dt")} {
		padding: ${theme.spacing(4)} 0 ${theme.spacing(5)};

		font-size: ${theme.fontSizes.giant};
		line-height: 1.214;
	}
`;
