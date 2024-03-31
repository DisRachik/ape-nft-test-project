import styled from "@emotion/styled";
import { theme } from "styles";

export const ItemWrap = styled.li`
	width: 100%;
`;

export const Label = styled.label`
	width: 100%;
`;

export const Input = styled.input`
	appearance: none;
	position: absolute;

	@media (hover: hover) {
		&:hover {
			& + div {
				span {
					color: currentColor;
				}
				div > h3 {
					color: ${theme.colors.accent};
				}
			}
		}
	}

	&:checked + div {
		background-color: ${theme.colors.bgDark};
		cursor: default;

		span {
			color: currentColor;
		}

		div > h3 {
			margin-bottom: ${theme.spacing(2)};
			color: ${theme.colors.accent};

			${theme.mediaMin("tb")} {
				margin-bottom: ${theme.spacing(2.5)};
			}

			${theme.mediaMin("dt")} {
				margin-bottom: ${theme.spacing(9)};
			}
		}

		div > p {
			position: static;
			opacity: 1;
			pointer-events: auto;
			visibility: visible;
			transform: translateX(0);
			transition: ${theme.animation("transform")};
		}

		${theme.mediaMin("tb")} {
			& div:first-of-type {
				position: absolute;
				top: 0;
				left: 0;
				transform: rotate(-16deg);
				transition: ${theme.animation("transform")};

				opacity: 1;
				pointer-events: auto;
				visibility: visible;
			}
		}
	}
`;

export const LabelType = styled.div`
	position: relative;
	width: 100%;
	padding: ${theme.spacing(2)};

	display: flex;
	justify-content: end;
	align-items: start;
	gap: ${theme.spacing(2)};

	text-transform: uppercase;
	border-radius: ${theme.spacing(3)};
	cursor: pointer;

	${theme.mediaMin("tb")} {
		padding: ${theme.spacing(4.5)} ${theme.spacing(4)} ${theme.spacing(6)};
		gap: ${theme.spacing(6)};
	}
	${theme.mediaMin("dt")} {
		padding: ${theme.spacing(6)};
		gap: ${theme.spacing(2)};
	}
`;

export const ListNumber = styled.span`
	flex-shrink: 0;
	padding-top: ${theme.spacing(1)};

	font-family: ${theme.fonts.biro};
	line-height: 1.66;
	color: ${theme.colors.accent};

	transition: ${theme.animation("color")};

	${theme.mediaMin("tb")} {
		padding-top: ${theme.spacing(4)};
		font-size: ${theme.fontSizes.medium};
		line-height: 1.687;
	}
	${theme.mediaMin("dt")} {
		padding-top: ${theme.spacing(8.5)};
		font-size: ${theme.fontSizes.big};
		line-height: 1.666;
	}
`;

export const Description = styled.div`
	overflow: hidden;
	max-width: ${theme.spacing(42.25)};

	${theme.mediaMin("tb")} {
		max-width: ${theme.spacing(84.75)};
	}
	${theme.mediaMin("dt")} {
		max-width: ${theme.spacing(158.75)};
	}
`;

export const Ask = styled.h3`
	margin-bottom: ${theme.spacing(2.5)};
	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.large};
	font-weight: 900;
	line-height: 1;

	transition: ${theme.animation("color")};

	${theme.mediaMin("tb")} {
		font-size: ${theme.fontSizes.cardTitleMb};
	}
	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.cardTitleDt};
	}
`;

export const Answer = styled.p`
	position: absolute;
	opacity: 0;
	pointer-events: none;
	visibility: hidden;
	transform: translateX(100%);

	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.medium};
		line-height: 1.187;
	}
`;

export const ImgWrap = styled.div`
	display: none;

	${theme.mediaMin("tb")} {
		display: block;
		flex-shrink: 0;

		position: absolute;
		top: 0;
		left: 0;

		width: 148px;
		height: 183px;

		border-radius: ${theme.spacing(4)};
		opacity: 0;
		pointer-events: none;
		visibility: hidden;
		overflow: hidden;
	}

	${theme.mediaMin("dt")} {
		width: 248px;
		height: 282px;
	}
`;
