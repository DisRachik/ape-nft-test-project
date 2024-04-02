import styled from "@emotion/styled";
import { Form as FormikForm, ErrorMessage as FormikError, Field as FormikField } from "formik";
import { theme } from "styles";

import Icon from "src/icons/discord.svg?react";

export const Form = styled(FormikForm)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${theme.spacing(4)};

	${theme.mediaMin("dt")} {
		gap: ${theme.spacing(6)};
	}
`;

export const FormField = styled.label`
	position: relative;
	width: 100%;
	height: ${theme.spacing(12)};
	display: flex;
	cursor: pointer;

	${theme.mediaMin("dt")} {
		height: ${theme.spacing(16)};
	}
`;

export const IconWrap = styled.span`
	padding: ${theme.spacing(2.5)};
	flex-shrink: 0;

	display: grid;
	place-items: center;
	width: ${theme.spacing(12)};
	height: 100%;

	background-color: ${theme.colors.bgDark};
	border-start-start-radius: ${theme.spacing(2)};
	border-end-start-radius: ${theme.spacing(2)};
	backdrop-filter: blur(6px);

	${theme.mediaMin("dt")} {
		width: ${theme.spacing(16)};
	}
`;

export const Field = styled(FormikField)`
	flex-grow: 1;
	padding: 0 ${theme.spacing(6)};

	background-color: inherit;
	border: 1px solid ${({ error }) => (error ? theme.colors.bgAccent : theme.colors.bgDark)};
	border-start-end-radius: ${theme.spacing(2)};
	border-end-end-radius: ${theme.spacing(2)};
	outline: none;

	color: ${({ error }) => (error ? theme.colors.bgAccent : "inherit")};
	text-transform: uppercase;

	&::placeholder {
		color: ${theme.colors.placeholder};
	}

	&:focus-within {
		border-color: ${({ error }) => (error ? theme.colors.bgAccent : theme.colors.lightText)};
	}
	&:not(:placeholder-shown) {
		border-color: ${({ error }) => (error ? theme.colors.bgAccent : theme.colors.lightText)};
	}

	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.medium};
		line-height: 1.188;
	}
`;

export const ErrorMessage = styled(FormikError)`
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translateY(100%);

	color: ${theme.colors.accent};
	font-size: 10px;
	line-height: 1.2;

	${theme.mediaMin("dt")} {
		font-size: inherit;
		line-height: inherit;
	}
`;

export const DiscordIcon = styled(Icon)`
	fill: ${theme.colors.discord};
`;

export const Button = styled.button`
	width: 100%;
	padding: ${theme.spacing(2.5)};
	padding-bottom: ${theme.spacing(3)};

	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.medium};
	font-weight: 900;
	line-height: 1.188;

	background-color: ${theme.colors.bgAccent};
	border-radius: ${theme.spacing(2)};
	backdrop-filter: blur(6px);

	&:disabled {
		cursor: not-allowed;
		&:hover {
			color: currentColor;
		}
	}

	@media (hover: hover) {
		&:hover {
			color: ${theme.colors.darkText};
		}
	}

	${theme.mediaMin("dt")} {
		padding: ${theme.spacing(4)};
		padding-bottom: ${theme.spacing(5)};
		font-size: ${theme.fontSizes.giant};
		border-radius: ${theme.spacing(3)};
	}
`;
