import styled from "@emotion/styled";
import { theme } from "styles";

export const WrapBtn = styled.div`
	margin-top: ${theme.spacing(6)};

	display: flex;
	justify-content: center;
	gap: ${theme.spacing(12)};
`;

export const Btn = styled.button`
	font-family: ${theme.fonts.biro};
	font-size: ${theme.fontSizes.big};
	line-height: 1.25;

	transition: ${theme.animation("color")};

	:disabled {
		opacity: 0.3;
		cursor: not-allowed;
		&:hover {
			color: currentColor;
		}
	}

	@media (hover: hover) {
		&:hover {
			color: ${theme.colors.accent};
		}
	}
`;
