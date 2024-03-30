import styled from "@emotion/styled";
import { theme } from "styles";

export const Text = styled.p`
	max-width: ${theme.spacing(54)};
	margin: 0 auto;

	text-align: center;
	text-transform: uppercase;

	${theme.mediaMin("tb")} {
		max-width: ${theme.spacing(100)};
	}

	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.medium};
		line-height: 1.188;
	}
`;
