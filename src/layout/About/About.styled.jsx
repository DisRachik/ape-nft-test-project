import styled from "@emotion/styled";
import { theme } from "styles";

import CrossIcon from "src/icons/cross.svg?react";

export const GridWrap = styled.div`
	${theme.mediaMin("tb")} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: ${theme.spacing(30.5)} ${theme.spacing(58)} ${theme.spacing(40.25)};
		grid-column-gap: ${theme.spacing(2.5)};
	}

	${theme.mediaMin("dt")} {
		grid-template-columns: 52.2% 47.6%;
		grid-template-rows: ${theme.spacing(43.5)} ${theme.spacing(112.5)} ${theme.spacing(47)};
		gap: ${theme.spacing(6)} ${theme.spacing(0.5)};
	}
`;

export const Title = styled.h2`
	margin-bottom: ${theme.spacing(4)};
	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.titleAboutMb};
	font-weight: 900;
	line-height: 1;
	text-transform: uppercase;
	white-space: pre-wrap;

	${theme.mediaMin("tb")} {
		margin: 0;
		grid-row: 1 / 3;
		grid-column: 1;

		font-size: ${theme.fontSizes.titleAboutTb};
		white-space: normal;
	}

	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.titleAboutDt};
	}
`;

export const TitleAccent = styled.span`
	color: ${theme.colors.accent};

	${theme.mediaMin("dt")} {
		color: inherit;
	}
`;

export const Subtitle = styled.p`
	margin-bottom: ${theme.spacing(9)};

	font-size: ${theme.fontSizes.medium};
	line-height: 1.188;
	text-indent: 60%;
	text-align: end;
	text-transform: uppercase;

	${theme.mediaMin("tb")} {
		margin: 0;
		padding-top: ${theme.spacing(2)};
		text-indent: 0;
		white-space: pre-wrap;
	}

	${theme.mediaMin("dt")} {
		width: ${theme.spacing(102.25)};
		padding-top: ${theme.spacing(5)};

		font-size: ${theme.fontSizes.big};
		line-height: 1.21;
	}
`;

export const TextWrap = styled.div`
	margin-bottom: ${theme.spacing(10)};

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${theme.spacing(4)};

	text-align: center;

	${theme.mediaMin("tb")} {
		margin: 0;
		padding-bottom: ${theme.spacing(10.5)};
		gap: ${theme.spacing(6)};

		${theme.mediaMin("dt")} {
			gap: ${theme.spacing(9)};
			padding-bottom: ${theme.spacing(10)};
		}
	}
`;

export const Icon = styled(CrossIcon)`
	width: 24px;
	height: 24px;

	${theme.mediaMin("dt")} {
		width: 36px;
		height: 36px;
	}
`;

export const Text = styled.p`
	${theme.mediaMin("tb")} {
		font-size: ${theme.fontSizes.medium};
	}
	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.big};
		line-height: 1.21;
	}
`;

export const PictureWrap = styled.p`
	${theme.mediaMin("tb")} {
		grid-row: 2 / 4;
		grid-column: 2;
	}
`;
