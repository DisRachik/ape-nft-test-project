import styled from "@emotion/styled";
import { theme } from "styles";

import LogoIcon from "src/icons/logo.svg?react";

export const Header = styled.header`
	position: absolute;
	top: ${theme.spacing(13.5)};
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;

	width: calc(100% - ${theme.spacing(4)});
	max-width: ${theme.spacing(86)};
	padding: ${theme.spacing(4)} ${theme.spacing(2)};

	color: ${theme.colors.darkText};

	${theme.mediaMin("tb")} {
		max-width: ${theme.spacing(184)};
		padding: ${theme.spacing(5)} ${theme.spacing(3)};
	}

	${theme.mediaMin("dt")} {
		top: ${theme.spacing(4)};
		max-width: ${theme.spacing(310.25)};
		padding: ${theme.spacing(9.75)} ${theme.spacing(3.5)};
	}
`;

export const WrapLogo = styled.a`
	display: inline-block;
`;

export const Logo = styled(LogoIcon)`
	display: block;
	width: 48px;
	height: 32px;
	fill: inherit;

	transition: ${props => props.theme.animation("fill")};

	@media (hover: hover) {
		&:hover {
			fill: ${theme.colors.lightText};
		}
	}

	${theme.mediaMin("dt")} {
		width: 72px;
		height: 50px;
	}
`;

export const WrapNavMenu = styled.div`
	position: absolute;
	top: ${theme.spacing(2)};
	right: ${theme.spacing(2)};

	${theme.mediaMin("tb")} {
		top: ${theme.spacing(3)};
		right: ${theme.spacing(3)};
	}

	${theme.mediaMin("dt")} {
		top: ${theme.spacing(6)};
		right: ${theme.spacing(3.5)};
	}
`;
export const WrapSocialList = styled.div``;
