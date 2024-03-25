import styled from "@emotion/styled";
import { theme } from "styles";

export const Btn = styled.button`
	padding: ${theme.spacing(2.5)};
	width: ${theme.spacing(12)};
	height: ${theme.spacing(12)};

	font-weight: 600;
	line-height: 1.167;

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
		width: ${theme.spacing(20)};
		height: ${theme.spacing(20)};

		font-size: ${theme.fontSizes.medium};
		line-height: 1.188;
	}
`;
