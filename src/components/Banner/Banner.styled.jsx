import styled from "@emotion/styled";
import { theme } from "styles";

export const Wrap = styled.div`
	overflow: hidden;
	background-color: ${theme.colors.accent};
`;

export const BannerList = styled.ul`
	display: flex;
	gap: ${theme.spacing(6)};

	${theme.mediaMin("tb")} {
		gap: ${theme.spacing(9)};
	}
`;

export const BannerItem = styled.li`
	display: flex;
	align-items: center;
	gap: ${theme.spacing(6)};

	${theme.mediaMin("tb")} {
		gap: ${theme.spacing(9)};
	}
`;

export const TextAD = styled.p`
	padding-bottom: ${theme.spacing(2)};

	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.bannerTextMb};
	text-transform: uppercase;
	font-weight: 900;
	line-height: 1;
	white-space: nowrap;

	${theme.mediaMin("dt")} {
		padding: ${theme.spacing(1.5)} 0 ${theme.spacing(4)};
		font-size: ${theme.fontSizes.bannerTextDt};
	}
`;
