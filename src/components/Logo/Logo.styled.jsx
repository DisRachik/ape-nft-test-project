import styled from "@emotion/styled";
import { theme } from "styles";

import Icon from "src/icons/logo.svg?react";

export const WrapLogo = styled.a`
	display: block;
	transition: ${theme.animation("color")};

	@media (hover: hover) {
		&:hover {
			color: ${prop => (prop.isMobileMenu ? theme.colors.accent : theme.colors.lightText)};
		}
	}
`;

export const LogoIcon = styled(Icon)`
	display: block;
	width: 48px;
	height: 32px;
	fill: currentColor;

	transition: ${theme.animation("fill")};

	${theme.mediaMin("dt")} {
		width: 72px;
		height: 50px;
	}
`;
