import styled from "@emotion/styled";
import { theme } from "styles";

export const List = styled.ul`
	${theme.mediaMin("tb")} {
		display: flex;
		height: 100%;
		border-top-left-radius: ${theme.spacing(3)};
		border-bottom-left-radius: ${theme.spacing(3)};
		/* transform: translateX(calc(100% - ${theme.spacing(12)})); */
		overflow: hidden;
	}

	/* ${theme.mediaMin("dt")} {
		transform: translateX(calc(100% - ${theme.spacing(20)}));
	} */
`;

export const Item = styled.li`
	margin-bottom: ${theme.spacing(4)};

	${theme.mediaMin("tb")} {
		margin: 0;
	}
`;
