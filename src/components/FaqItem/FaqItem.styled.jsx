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
			color: ${theme.colors.accent};
		}

		div > p {
			position: static;
			/* display: block; */
			opacity: 1;
			pointer-events: auto;
			visibility: visible;
			transform: translateX(0);
			transition: ${theme.animation("transform")};
		}
	}
`;

export const LabelType = styled.div`
	position: relative;
	width: 100%;
	padding: ${theme.spacing(2)};
	display: flex;
	gap: ${theme.spacing(2)};

	text-transform: uppercase;
	border-radius: ${theme.spacing(3)};
	cursor: pointer;

	overflow: hidden;
`;

export const ListNumber = styled.span`
	flex-shrink: 0;

	font-family: ${theme.fonts.biro};
	line-height: 1.66;
	color: ${theme.colors.accent};

	transition: ${theme.animation("color")};
`;

export const Ask = styled.h3`
	margin-bottom: ${theme.spacing(2.5)};
	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.spacing(5)};
	font-weight: 900;
	line-height: 1;

	transition: ${theme.animation("color")};
`;

export const Answer = styled.p`
	position: absolute;
	opacity: 0;
	pointer-events: none;
	visibility: hidden;
	/* display: none; */
	/* transition: ${theme.animation("transform")}; */
	transform: translateX(100%);
`;

export const Aaa = styled.label``;
