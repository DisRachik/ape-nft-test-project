import styled from "@emotion/styled";
import { theme } from "styles";

export const ContainerWrap = styled.div`
	/* Must delete */
	outline: 1px solid tomato;

	position: relative;

	max-width: ${theme.breakpoints.sm};
	margin: 0 auto;
	padding: 0 ${theme.spacing(18)};

	${theme.mediaMin("tb")} {
		max-width: ${theme.breakpoints.tb};
		padding: 0 ${theme.spacing(22)};
	}

	${theme.mediaMin("dt")} {
		max-width: ${theme.breakpoints.dt};
		padding: 0 ${theme.spacing(51)};
	}
`;
