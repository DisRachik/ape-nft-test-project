import styled from "@emotion/styled";
import { theme } from "styles";

export const SectionWrap = styled.section`
	/* Must delete */
	outline: 1px solid greenyellow;

	width: 100%;
	padding-bottom: ${theme.spacing(15)};

	&:first-of-type {
		padding-top: ${theme.spacing(13.5)};
		padding-right: ${theme.spacing(2)};
		padding-left: ${theme.spacing(2)};
	}

	${theme.mediaMin("tb")} {
		padding-bottom: ${theme.spacing(20)};

		&:first-of-type {
			padding-right: ${theme.spacing(4)};
			padding-left: ${theme.spacing(4)};
		}
	}

	${theme.mediaMin("dt")} {
		padding-bottom: ${theme.spacing(30)};

		&:first-of-type {
			padding-top: ${theme.spacing(4)};
		}
	}
`;

export const SectionTitle = styled.h2`
	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.titleSectionMb};
	font-weight: 900;
	line-height: 0.9;

	text-align: center;
	text-transform: uppercase;

	${theme.mediaMin("tb")} {
		font-size: ${theme.fontSizes.titleSectionTb};
		line-height: 1;
	}
	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.titleSectionDt};
	}
`;
