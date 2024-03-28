import styled from "@emotion/styled";
import { theme } from "styles";

export const List = styled.ul`
	${theme.mediaMin("tb")} {
		display: flex;
		height: 100%;
		border-top-left-radius: ${theme.spacing(3)};
		border-bottom-left-radius: ${theme.spacing(3)};
		overflow: hidden;
	}
`;

export const Item = styled.li`
	margin-bottom: ${theme.spacing(4)};

	${theme.mediaMin("tb")} {
		margin: 0;
	}
`;
