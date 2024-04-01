import styled from "@emotion/styled";
import { theme } from "styles";

export const Wrap = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${theme.spacing(4)};

	text-transform: uppercase;

	${theme.mediaMin("tb")} {
		max-width: ${theme.spacing(99.25)};
		gap: ${theme.spacing(6)};
	}
	${theme.mediaMin("dt")} {
		max-width: ${theme.spacing(145.25)};
		gap: ${theme.spacing(10)};
	}
`;

export const Text = styled.p`
	font-size: ${theme.fontSizes.medium};
	line-height: 1.187;
	text-align: center;

	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.big};
		line-height: 1.2;
	}
`;
