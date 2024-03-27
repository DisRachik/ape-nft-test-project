import styled from "@emotion/styled";
import { theme } from "styles";

export const List = styled.ul`
	display: none;
	/* display: flex; */
	height: 100%;
	transform: translateX(calc(100% - ${theme.spacing(12)}));

	${theme.mediaMin("dt")} {
		transform: translateX(calc(100% - ${theme.spacing(20)}));
	}
`;
export const Item = styled.li``;
