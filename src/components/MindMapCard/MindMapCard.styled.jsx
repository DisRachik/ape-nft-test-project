import styled from "@emotion/styled";
import { theme } from "styles";

import Icon from "src/icons/vector.svg?react";

export const CardItem = styled.div`
	height: ${theme.spacing(60.5)};
	padding: ${theme.spacing(6)} ${theme.spacing(3)};

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: ${({ isLink }) => (isLink ? theme.colors.bgAccent : theme.colors.bgDark)};
	text-transform: uppercase;
	border-radius: ${theme.spacing(4)};

	${theme.mediaMin("dt")} {
		height: 100%;
	}
`;

export const CardText = styled.p`
	${theme.mediaMin("tb")} {
		width: 49%;
		align-self: flex-end;
	}
	${theme.mediaMin("dt")} {
		width: 57%;

		font-size: ${theme.fontSizes.big};
		line-height: 1.21;
	}
`;

export const CardLink = styled.a`
	height: ${theme.spacing(60.5)};
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > h3 {
		white-space: pre-wrap;

		${theme.mediaMin("dt")} {
			width: 70%;
			white-space: normal;
		}
	}

	@media (hover: hover) {
		&:hover {
			& > svg {
				transform: translate(${theme.spacing(0)}, ${theme.spacing(-3)});
			}
		}
	}
`;

export const CardTitle = styled.h3`
	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.cardTitleMb};
	font-weight: 900;
	line-height: 1;

	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.cardTitleDt};
	}
`;

export const VectorIcon = styled(Icon)`
	align-self: flex-end;

	transform: translate(-${theme.spacing(3)});
	transition: ${theme.animation("transform")};
	fill: currentColor;
`;
